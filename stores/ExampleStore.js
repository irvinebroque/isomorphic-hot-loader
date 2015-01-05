var Dispatcher = require('../dispatcher');
var EventEmitter = require('events').EventEmitter;
var assign = require('object-assign');
var fuzzy = require('fuzzy');
var CHANGE_EVENT = 'change';

var debug = require('debug');
var exampleStoreDebug = debug('ExampleStore');
debug.enable('*');

// Data structures that this store manipulates
var _thing = "thing";

function _addThing(thing) {
  _projects = projects;
  exampleStoreDebug('projects added');
}

var ExampleStore = assign({}, EventEmitter.prototype, {

  emitChange: function() {
    this.emit(CHANGE_EVENT);
    exampleStoreDebug('emitChange');
  },

  addChangeListener: function(callback) {
    this.on(CHANGE_EVENT, callback);
    exampleStoreDebug('addChangeListener');
  },

  removeChangeListener: function(callback) {
    this.removeListener(CHANGE_EVENT, callback);
    exampleStoreDebug('removeChangeListener');
  },

  getThing: function() {
    exampleStoreDebug('getThing');
    return _thing;
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
