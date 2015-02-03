/* @flow weak */

"use strict";

var Dispatcher = require('../dispatcher');

var Actions = {

  exampleAction: function(thing) {
    Dispatcher.dispatch({
      action: 'EXAMPLE_ACTION',
      thing: thing
    });
  }

};

module.exports = Actions;
