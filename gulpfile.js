const gulp = require('gulp')
const jade = require('gulp-jade')

gulp.task('jade', () => {
  gulp.src('./src/index.jade')
    .pipe(jade())
    .pipe(gulp.dest('./dist'))
    .pipe(gulp.dest('./build'))
})