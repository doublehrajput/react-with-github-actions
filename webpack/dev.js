const { merge } = require('webpack-merge');
const path = require('path');
const common = require('./common');

//@ts-ignore
module.exports = merge(common, {
  mode: 'development',
  devtool: 'inline-source-map',
  stats: 'errors-only',

  devServer: {
    hot: true,
    host: 'localhost',
    port: 8000,
    static: {
      directory: path.resolve(__dirname, '../public'),
      publicPath: '/'
    },
    client: {
      overlay: {
        errors: true,
        warnings: false
      },
      logging: 'warn'
    },
    historyApiFallback: true
  },
  module: {
    rules: []
  }
});
