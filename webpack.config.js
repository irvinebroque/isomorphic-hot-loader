'use strict';
var webpack = require('webpack');

module.exports = {
  cache: true,
  resolve: {
    extensions: ['', '.js', '.jsx']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/only-dev-server',
    './client.js'
  ],
  output: {
    path: __dirname+'/build/',
    filename: 'client.js',
    publicPath: 'http://localhost:3001/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'jsx'] }
    ]
  }
};
