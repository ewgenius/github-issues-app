const gulp = require('gulp')
const gutil = require('gulp-util')
const jade = require('gulp-jade')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfigDev = require('./config/webpack.config.dev')
const webpackConfigProd = require('./config/webpack.config.prod')

gulp.task('webpack', cb => {
  webpack(webpackConfigProd, (err, stats) => {
    if (err) throw new gutil.PluginError('webpack', err)
    gutil.log('[webpack]', stats.toString())
    cb()
  })
})

gulp.task('jade', () => {
  gulp.src('./src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./build'))
})