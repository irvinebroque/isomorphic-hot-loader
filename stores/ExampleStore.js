/* @flow weak */

"use strict";

var Dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var fuzzy = require('fuzzy');
var CHANGE_EVENT = 'change';

// Data structures that this store manipulates
var _things = [];

function _addThing(thing) {
  _things.push(thing);
}

var ExampleStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
  },

  getThing: function() {
    return _things;
  }

});

ExampleStore.dispatchToken = Dispatcher.register(function(payload) {
  var action = payload.action;

  if (action === 'EXAMPLE_ACTION') {
    _addThing(payload.thing);
    ExampleStore.emitChange();
  }

});

module.exports = ExampleStore;
