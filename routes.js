/** @jsx React.DOM */

var React = require('react');

// Require view components. One for each route.
var App = require('./components/App');
var Home = require('./components/Home');
var About = require('./components/About');
var NotFound = require('./components/NotFound');

var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Routes = (
  <Route handler={App}>
    <DefaultRoute name="Home" handler={Home}/>
    <Route name="About" path="/about" handler={About}/>
    <NotFoundRoute handler={NotFound}/>
  </Route>
);

module.exports = Routes;