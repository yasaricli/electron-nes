var gulp = require('gulp');
var less = require('gulp-less');
var watch = require('gulp-watch');
var plumber = require('gulp-plumber');

gulp.task('less', function() {
    return gulp.src('./assets/less/nes.less')
      .pipe(less())
      .pipe(gulp.dest('./assets/css'));
});

gulp.task('init', function() {
  return gulp.start('less');
});

gulp.task('watch', function() {
  gulp.watch('./assets/less/**/*.less', ['less']);  // Watch all the .less files, then run the less task
});
