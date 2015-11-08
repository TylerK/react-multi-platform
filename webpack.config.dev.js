//
// Webpack dev server config
//
var webpack = require('webpack');
var config = require('./webpack.config');

var serverConfig = Object.assign({}, config, {
  debug: true,
  entry: ['webpack/hot/only-dev-server'].concat(config.entry),

  plugins: config.plugins.concat([
    new webpack.HotModuleReplacementPlugin(),
    new webpack.NoErrorsPlugin()
  ])
});

module.exports = serverConfig;
