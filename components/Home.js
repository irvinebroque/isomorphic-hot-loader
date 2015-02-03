/* @flow weak */

"use strict";

var React = require('react');
var Title = require('react-document-title');
var Link = require('react-router').Link;

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
