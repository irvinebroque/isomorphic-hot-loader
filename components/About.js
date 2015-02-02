/* @flow weak */

var React = require('react');
var Title = require('react-document-title');
var Link = require('react-router').Link;

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
