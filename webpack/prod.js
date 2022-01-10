// @ts-nocheck
const { merge } = require('webpack-merge');
const webpack = require('webpack');
const TerserJSPlugin = require('terser-webpack-plugin');
const CopyPlugin = require('copy-webpack-plugin');

const common = require('./common');

module.exports = merge(common, {
  mode: 'production',
  module: {
    rules: []
  },
  optimization: {
    minimizer: [
      new TerserJSPlugin({
        extractComments: false
      })
    ]
  },
  plugins: [
    new webpack.BannerPlugin({
      banner: `
/* 
 * Written by Webpack <doublehrajput@gmail.com>, ${new Date(Date.now()).toLocaleString()}
 */
      `
    }),
    new CopyPlugin({
      patterns: [{ context: 'public/', from: '**/*' }]
    })
  ]
});
