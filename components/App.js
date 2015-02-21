/* @flow weak */

"use strict";

var React = require('react');
var Title = require('react-document-title');
var RouteHandler = require('react-router').RouteHandler;
// This adds accessibility warnings to the console in development
var a11y = require('react-a11y');
a11y();

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
