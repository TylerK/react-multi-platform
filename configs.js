//
// Webpack Configuration Settings
//
var path = require('path');

var config = {
  ENV: process.env.NODE_ENV || 'development',
  SRC: './src',
  DIST: './dist',
  DEV_HOST: 'localhost',
  DEV_PORT: process.env.PORT || 8080,
  VENDOR_DEPS: [
    'react',
    'react-redux',
    'react-router',
    'redux',
    'redux-devtools',
    'redux-devtools/lib/react'
  ]
}

//
// DO NOT EDIT BELOW THIS LINE
// --------------------------------------------------------
// config.set('PUBLIC_PATH', `http://${config.get('DEV_HOST')}:${config.get('DEV_PORT')}/`);

module.exports = config;
