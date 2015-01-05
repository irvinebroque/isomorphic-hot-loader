var webpack = require('webpack');

var definePlugin = new webpack.DefinePlugin({
  IS_CLIENT: "true"
});

var config = {
  cache: true,
  resolve: {
    extensions: ['', '.js']
  },
  entry: [
    'webpack-dev-server/client?http://localhost:3001',
    'webpack/hot/dev-server',
    './client.js'
  ],
  output: {
    path: __dirname+'/build/',
    filename: 'client.js',
    publicPath: 'http://localhost:3001/build/'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    definePlugin
  ],
  module: {
    loaders: [
      { test: /\.js$/, loaders: ['react-hot', 'jsx'] },
      { test: /\.json$/, loaders: ['json'] }
    ]
  }
};

module.exports = config

if (process.env.NODE_ENV === "development") {
  config.devtool = 'eval' // This is not as dirty as it looks. It just generates source maps without being crazy slow.
}
