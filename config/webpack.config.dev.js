const path = require('path')
const webpack = require('webpack')
const loaders = require('./loaders')
const vendor = require('./vendor')

module.exports = {
  entry: {
    app: ['webpack-dev-server/client?http://localhost:8080/', 'babel-polyfill', './src/app.jsx'],
    vendor
  },
  output: {
    filename: '[name].bundle.js',
    publicPath: '/assets/',
    path: path.resolve('./dist')
  },
  module: {
    loaders
  },
  plugins: [
    new webpack.ProvidePlugin({
      'fetch': 'imports?this=>global!exports?global.fetch!whatwg-fetch'
    }),
    new webpack.optimize.CommonsChunkPlugin('vendor', 'vendor.bundle.js', Infinity),
    new webpack.DefinePlugin({
      "process.env": {
        NODE_ENV: JSON.stringify("development")
      }
    })
  ]
}