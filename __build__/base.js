//
// Base Webpack Settings
//
import webpack from 'webpack';
import config from '../__config__/base'

const config = {
  entry: `${config.get('SRC')}/index.js`,
  output: `${config.get('DIST')}/app.js`,
  loaders: [
    {
      test: /(.js|.jsx)/,
      loader: 'babel-loader'
    }
  ]
}

export default config;
