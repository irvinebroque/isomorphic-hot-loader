/** @jsx React.DOM */

var React = require('react');

// Require React-Router
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var App = React.createClass({

  render: function() {
    return (
      <div>
        <RouteHandler/>
      </div>
    );
  }

});

module.exports = App;
