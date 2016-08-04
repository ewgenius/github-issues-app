const gulp = require('gulp')
const jade = require('gulp-jade')
const webpack = require('webpack')
const WebpackDevServer = require('webpack-dev-server')
const webpackConfigDev = require('./config/webpack.config.dev')

gulp.task('webpack', () => {
  
})

gulp.task('jade', () => {
  gulp.src('./src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./build'))
})