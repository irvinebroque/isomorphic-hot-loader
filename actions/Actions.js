var Dispatcher = require('../dispatcher');

var debug = require('debug');
var ActionsDebug = debug('Actions');
debug.enable('*');

var Actions = {

  exampleAction: function(thing) {
    Dispatcher.dispatch({
      action: 'EXAMPLE_ACTION',
      thing: thing
    });
    ActionsDebug('exampleAction');
  },


};

module.exports = Actions;
