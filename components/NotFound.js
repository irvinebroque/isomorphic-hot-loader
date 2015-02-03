/* @flow weak */

"use strict";

var React = require('react');
var Title = require('react-document-title');
var Link = require('react-router').Link;

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
