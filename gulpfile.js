'use strict';

var gulp = require('gulp'),
  rename = require('gulp-rename'),
  uglify = require('gulp-uglify'),
  minifyCSS = require('gulp-minify-css'),
  clean = require('gulp-clean'),
  concat = require('gulp-concat');

var DEST = 'build/';

gulp.task('clean', function () {
    return gulp.src('build/*', {read: false})
        .pipe(clean());
});

gulp.task('minify-js', function() {
  return gulp.src([
      'bower_components/angular/angular.js',
      'bower_components/angular-route/angular-route.js',
      'bower_components/jquery/jquery.min.js',
      'bower_components/bootstrap2.3.2/js/bootstrap-button.js',
      'bower_components/bootstrap2.3.2/js/bootstrap-dropdown.js',
      'bower_components/bootstrap2.3.2/js/bootstrap-collapse.js',
      'app/app.js',
      'app/controllers/controllers.js'
    ])
    .pipe(concat('all.js'))
    .pipe(uglify({"mangle": false}))
    .pipe(gulp.dest(DEST));
});

gulp.task('minify-css', function() {
  return gulp.src([
      'bower_components/bootstrap2.3.2/bootstrap/css/bootstrap.css',
      //'bower_components/bootstrap2.3.2/bootstrap/css/bootstrap-responsive.css',
      'static/css/*.css'
    ])
    .pipe(concat('all.css'))
    .pipe(minifyCSS({"keepSpecialComments": 0}))
    .pipe(gulp.dest(DEST))
});

gulp.task('default', function() {
	gulp.run('clean', 'minify-js', 'minify-css')
});