//
// Karma Configuration Settings
//
var webpack = require('webpack');
var config = require('./configs');

var allTests = config.get('SRC') + '/**/__tests__/**/*.test.js';
var entryPoint = '../karma.entry.js';

module.exports = function(_config) {
  _config.set({
    browsers: ['PhantomJS'],
    frameworks: ['mocha', 'sinon-chai'],
    reporters: ['mocha'],
    files: [
      './node_modules/phantomjs-polyfill/bind-polyfill.js',
      allTests
    ],
    singleRun: true,
    preprocessors: {
      allTests: ['webpack', 'sourcemap']
    },
    plugins: [
      'karma-webpack',
      'karma-mocha',
      'karma-mocha-reporter',
      'karma-sinon-chai',
      'karma-phantomjs-launcher',
      'karma-sourcemap-loader'
    ],

    webpack: {
      devtool: 'inline-source-map',
      module: {
        loaders: [
          { test: /\.js$/, exclude: /node_modules/, loaders: ['babel']},
          { test: /\.json$/, loader: 'json-loader' },
          { test: /\.scss$/, loader: 'style!css?modules&importLoaders=2&sourceMap&localIdentName=[local]___[hash:base64:5]!autoprefixer?browsers=last 2 version!sass?outputStyle=expanded&sourceMap' }
        ]
      },

      resolve: {
        modulesDirectories: [
          'src',
          'node_modules'
        ],
        extensions: ['', '.json', '.js']
      },

      plugins: [
        new webpack.IgnorePlugin(/\.json$/),
        new webpack.NoErrorsPlugin(),
        new webpack.DefinePlugin({
          __CLIENT__: true,
          __SERVER__: false,
          __DEVELOPMENT__: true,
          __DEVTOOLS__: true
        })
      ]
    },

    webpackMiddleware: {
      noInfo: true
    }
  });
};
