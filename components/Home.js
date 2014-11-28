var React = require('react');

// Require React-Router
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var Home = React.createClass({

  render: function() {
    return (
      <div>
        <h1>Home</h1>
        <Link to='About'>About</Link>
      </div>
    );
  }

});

module.exports = Home;
