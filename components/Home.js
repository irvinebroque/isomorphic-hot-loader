var React = require('react');
var Title = require('react-document-title');

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
      <Title title='Home'>
        <div>
          <h1>Home</h1>
          <Link to='About Me'>About</Link>
          <Link to='/foo'>Foo</Link>
        </div>
      </Title>
    );
  }

});

module.exports = Home;
