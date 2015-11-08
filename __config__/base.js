//
// Webpack Configuration Settings
//
import path from 'path';

const config = new Map();

config.set('ENV', process.env.NODE_ENV || 'development');
config.set('SRC', './src');
config.set('DIST', './dist');
config.set('DEV_HOST', 'localhost');
config.set('DEV_PORT', process.env.PORT || 8080);
config.set('VENDOR_DEPS', [
  'react',
  'react-redux',
  'react-router',
  'redux',
  'redux-devtools',
  'redux-devtools/lib/react'
]);

//
// DO NOT EDIT BELOW THIS LINE
// --------------------------------------------------------
config.set('PUBLIC_PATH', `http://${config.get('DEV_HOST')}:${config.get('DEV_PORT')}/`);

export default config;
