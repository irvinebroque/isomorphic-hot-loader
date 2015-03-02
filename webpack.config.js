/* @flow weak */

"use strict";

var webpack = require('webpack');
var path = require('path');

var port = process.env.HOT_LOAD_PORT || 8888;

var config = {
  cache: true,
  resolve: {
    extensions: ['', '.js']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:' + port,
    'webpack/hot/dev-server',
    './client.js'
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'client.js',
    publicPath: 'http://localhost:' + port + '/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', 'babel-loader?experimental&optional=selfContained'] }
    ]
  }
};

if (process.env.NODE_ENV === "development") {
  config.devtool = 'eval'; // This is not as dirty as it looks. It just generates source maps without being crazy slow.
}

if (process.env.NODE_ENV === "production") {
  config.resolve.alias = {'react-a11y': function() {}}; // Aliases react-a11y to nothing in production
}

module.exports = config;
