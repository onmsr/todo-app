var gulp = require('gulp');
var browserify = require('browserify');
var babelify = require('babelify');
var source = require('vinyl-source-stream');
var sass = require('gulp-sass');
var notify = require("gulp-notify");

var handleErrors = function() {
  var args = Array.prototype.slice.call(arguments);
  var errorConfig = { title: "Compile Error", message: "<%= error %>", sound: false };
  notify.onError(errorConfig).apply(this, args);
  this.emit('end');
};

gulp.task('sass', function() {
  // var sassConfig = { outputStyle: 'compressed', includePaths: ['src/scss']};
  var sassConfig = { outputStyle: 'nested', includePaths: ['src/scss']};
  gulp.src('src/scss/*.scss')
    .pipe(sass(sassConfig))
    .on('error', handleErrors)
    .pipe(gulp.dest('src/out'));
});

gulp.task('browserify', function() {
  browserify('./src/js/app.js', { debug: true })
    .transform(babelify)
    .bundle()
    .on("error", handleErrors)
    .pipe(source('main.js'))
    .pipe(gulp.dest('./src/out/'));
});

gulp.task('watch', function() {
  gulp.watch('./src/js/*.js', ['browserify']);
  gulp.watch('./src/scss/*.scss', ['sass']);
});

gulp.task('build', ['browserify', 'sass']);
gulp.task('default', ['build', 'watch']);

