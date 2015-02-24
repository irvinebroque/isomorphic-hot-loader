/* @flow weak */

"use strict";
require("babel/register");
require('node-jsx').install({extension: '.js'});
var express = require('express');
var compression = require('compression');
var cors = require('cors');
var React = require('react');
var routes = require('./routes');
var Head = React.createFactory(require('./components/Head'));
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;
var ReactDocumentTitle = require('react-document-title');
var UAParser = require('ua-parser-js');
var path = require('path');

// Setup the express server
var server = express();
// Gzip all the things
server.use(compression());

// Serve a static directory for the webpack-compiled Javascript and CSS. Only in production since the webpack dev server handles this otherwise.
if (process.env.NODE_ENV === "production") {server.use('/build', express.static(path.join(__dirname, '/build')));}

// Serves up a static directory for images and other assets that we don't (yet) require via Webpack
server.use('/static', express.static(path.join(__dirname, '/static')));

// Cross-origin resource sharing
server.use(cors());

// Our handler for all incoming requests
server.use(function (req, res, next) {

  // In order to handle "media queries" server-side (preventing FOUT), we parse the user agent string,
  // and pass a string down through the router that lets components style and render themselves
  // For the correct viewport. Client.js uses window width, which resolves any problems with
  // browser sniffing.
  var parser = new UAParser();
  var ua = parser.setUA(req.headers['user-agent']).getResult();
  var deviceType = "";
  if (ua.device.type === undefined) {
    deviceType = "desktop";
  } else {
    deviceType = ua.device.type;
  }

  // We customize the onAbort method in order to handle redirects
  var router = Router.create({
    routes: routes,
    location: req.path,
    onAbort: function defaultAbortHandler(abortReason, location) {
      if (abortReason && abortReason.to) {
        res.redirect(301, abortReason.to);
      } else {
        res.redirect(404, "404");
      }
    }
  });

  var content = "";

  // Run the router, and render the result to string
  router.run(function (Handler, state) {
    content = React.renderToString(React.createElement(Handler, {routerState: state, deviceType: deviceType, environment: "server"}), null);
  });

  // Resets the document title on each request
  // See https://github.com/gaearon/react-document-title#server-usage
  var title = ReactDocumentTitle.rewind();

  // Render <head> to string
  var head = React.renderToStaticMarkup(Head({title: title}));

  // Write the response
  res.write('<html>');
  res.write(head);
  res.write('<body>');
  res.write(content);
  res.write('</body>');

  // In development, the compiled javascript is served by a WebpackDevServer, which lets us 'hot load' scripts in for live editing.
  if (process.env.NODE_ENV === "development") {
    var hotLoadPort = process.env.HOT_LOAD_PORT || 8888;
    res.write('<script src="http://localhost:' + hotLoadPort + '/build/client.js" defer></script>');
  }

  // In production, we just serve the pre-compiled assets from the /build directory
  if (process.env.NODE_ENV === "production") {
    res.write('<script src="/build/client.js" defer></script>');
  }

  res.write('</html>');
  res.end();

});

var port = process.env.PORT || 8080;
server.listen(port);

if (process.env.NODE_ENV === "development") {
  console.log('server.js is listening on port ' + port);
}
