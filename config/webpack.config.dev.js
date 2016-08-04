const webpack = require('webpack')
const loaders = require('./loaders')
const vendor = require('./vendor')

module.exports = {
  entry: {
    app: './src/app.jsx',
    vendor
  },
  output: {
    filename: '[name].bundle.js',
    path: './dist'
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