/* @flow weak */

var React = require('react');
var Title = require('react-document-title');
var RouteHandler = require('react-router').RouteHandler;

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
