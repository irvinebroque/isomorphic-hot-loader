// Use JSX on the server
require('node-jsx').install({extension: '.js'})

// Pulls in environment variables from a .env file. Will need something better here when we go to production.
var dotenv = require('dotenv');
dotenv.load();

// Stupid simple server
var express = require('express');

// For dealing with cross-origin stuff.
var cors = require('cors');

// Use React on the server
var React = require('react');

// Route config
var routes = require('./routes');

// Head
var Head = React.createFactory(require('./components/Head'));

// Require React-Router
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

// Setup the express server
var server = express();

// Serves up a static directory for the webpack-compiled Javascript and CSS. Only in production since the webpack dev server handles this otherwise.
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

  res.write('<html>');
  res.write(head);
  res.write('<body>');

  // Run react-router on the server
  Router.run(routes, req.path, function (Handler) {
    // Content is the route handler, which then handles all the routing and kicks back HTML with React.renderToString
    var content = React.renderToString(React.createElement(Handler, null), null);
    res.write(content);
  });

  res.write('</body>');

  // In development, the compiled javascript is served by a WebpackDevServer, which lets us 'hot load' scripts in for live editing.
  if (process.env.NODE_ENV === "development") {
    res.write('<script src="http://localhost:3001/build/client.js" defer></script>');
  }

  // In production, we just serve the pre-compiled assets from the /build directory
  if (process.env.NODE_ENV === "production") {
    res.write('<script src="/build/js/client.js" defer></script>');
  }

  res.write('</html>');
  res.end();  

});

var port = process.env.PORT || 3000;
server.listen(port);
console.log('server.js is listening on port ' + port);


