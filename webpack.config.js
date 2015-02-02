/* @flow weak */

"use strict";

var webpack = require('webpack');
var path = require('path');

var config = {
  cache: true,
  resolve: {
    extensions: ['', '.js']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:8888',
    'webpack/hot/dev-server',
    './client.js'
  ],
  output: {
    path: path.join(__dirname, '/build/'),
    filename: 'client.js',
    publicPath: 'http://localhost:8888/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, exclude: /node_modules/, loaders: ['react-hot', '6to5-loader', 'jsx?harmony'] }
    ]
  }
};

if (process.env.NODE_ENV === "development") {
  config.devtool = 'eval'; // This is not as dirty as it looks. It just generates source maps without being crazy slow.
}

module.exports = config;
