require('node-jsx').install({extension: '.js'})
var express = require('express');
var compression = require('compression')
var cors = require('cors');
var React = require('react');
var routes = require('./routes');
var Head = React.createFactory(require('./components/Head'));
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var RouteHandler = Router.RouteHandler;

// Setup the express server
var server = express();
// Gzip all the things
server.use(compression())

// Serve a static directory for the webpack-compiled Javascript and CSS. Only in production since the webpack dev server handles this otherwise.
if (process.env.NODE_ENV === "production") {
  server.use('/build', express.static(__dirname + '/build'));
}

// Serves up a static directory for images and other assets that we don't (yet) require via Webpack
server.use('/static', express.static(__dirname + '/static'));
// Cross-origin resource sharing
server.use(cors());

// Our handler for all incoming requests
server.use(function (req, res, next) {

  // Head is treated as a special component that we only render server-side.
  var head = React.renderToStaticMarkup(Head());

  var router = Router.create({
    routes: routes,
    location: req.path,
    onAbort: function defaultAbortHandler(abortReason, location) {
      console.log(abortReason)
      console.log(location)
      if (abortReason && abortReason.to) {
        res.redirect(abortReason.to);
      } else {
        console.log("Error thrown for url: " + location);
      }
    }
  })

  var content = ""

  router.run(function (Handler, state) {
    content = React.renderToString(React.createElement(Handler, null), null);
  });

  res.write('<html>');
  res.write(head);
  res.write('<body style="overflow: hidden; height: 100%; position: fixed; width: 100%;">');
  res.write(content);
  res.write('</body>');

  // In development, the compiled javascript is served by a WebpackDevServer, which lets us 'hot load' scripts in for live editing.
  if (process.env.NODE_ENV === "development") {
    res.write('<script src="http://localhost:3001/build/client.js" defer></script>');
  }

  // In production, we just serve the pre-compiled assets from the /build directory
  if (process.env.NODE_ENV === "production") {
    res.write('<script src="/build/client.js" defer></script>');
  }

  res.write('</html>');
  res.end();

});

var port = process.env.PORT || 3000;
server.listen(port);

if (process.env.NODE_ENV === "development") {
  console.log('server.js is listening on port ' + port);
}


