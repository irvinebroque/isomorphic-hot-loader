/* @flow weak */

"use strict";

var React = require('react');
var routes = require('./routes');
var Router = require('react-router');
var RouteHandler = Router.RouteHandler;

// Set a device type based on window width, so that we can write media queries in javascript
// by calling if (this.props.deviceType === "mobile")
var deviceType;

if (window.matchMedia("(max-width: 639px)").matches) {
  deviceType = "mobile";
} else if (window.matchMedia("(max-width: 768px)").matches) {
  deviceType = "tablet";
} else {
  deviceType = "desktop";
}

Router.run(routes, Router.HistoryLocation, function (Handler, state) {
  React.render(<Handler routerState={state} deviceType={deviceType} environment="browser" />, document.body);
});
