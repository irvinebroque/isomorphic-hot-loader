var React = require('react');
var Title = require('react-document-title');

// Require React-Router
var Router = require('react-router');
var Route = Router.Route;
var NotFoundRoute = Router.NotFoundRoute;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link;
var RouteHandler = Router.RouteHandler;

var NotFound = React.createClass({

  render: function() {
    return (
      <Title title='Not Found'>
        <div>
          <h1>404 Not Found</h1>
          <Link to='Home'>Home</Link>
        </div>
      </Title>
    );
  }

});

module.exports = NotFound;
