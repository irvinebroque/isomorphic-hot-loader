/* @flow weak */

/*global fetch*/

"use strict";

var React = require('react');
var Title = require('react-document-title');
var Link = require('react-router').Link;
require('isomorphic-fetch');

var Home = React.createClass({

  componentWillMount: function() {
    fetch('//offline-news-api.herokuapp.com/stories')
      .then(function(response) {
        if (response.status >= 400) {
          throw new Error("Bad response from server");
        }
        return response.json();
      })
      .then(function(stories) {
        this.setState({stories: stories});
      }.bind(this));
  },

  render: function() {

    console.log(this.state);

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
