/** @jsx React.DOM */

var React = require('react');
var Title = require('react-document-title');

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
      <Title title='My App'>
        <RouteHandler/>
      </Title>
    );
  }

});

module.exports = App;
