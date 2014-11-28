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

var About = React.createClass({

  render: function() {
    return (
      <Title title='About'>
        <div>
          <h1>About</h1>
          <Link to='Home'>Home</Link>
        </div>
      </Title>
    );
  }

});

module.exports = About;
