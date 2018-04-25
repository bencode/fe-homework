const gulp = require('gulp');
const $ = require('gulp-load-plugins')();
const babel=require("gulp-babel");


gulp.task('webserver', function() {
  return gulp.src('./src')
    .pipe($.webserver({
      livereload: true,
      open: true,
      directoryListing: {
        enable:true,
        path: 'src'
      }
    }));
});


gulp.task('less', function () {
  return gulp.src('./src/**/*.less')
    .pipe($.plumber({
      errorHandler (err) {
        $.notify.onError('Error: <%= error.message %>')(err);
        this.emit('end');
      }
    }))
    .pipe($.sourcemaps.init())
    .pipe($.lessDev())
    .pipe($.autoprefixer('last 10 versions', 'ie 9'))
    .pipe($.sourcemaps.write())
    .pipe(gulp.dest('./src'));
});


gulp.task('babel', function () {
    return gulp.src('./src/**/*.js')
        .pipe(babel({ presets: ['es2015'] }))
        .pipe(gulp.dest('dist'));
});


gulp.task('watch', function() {
  gulp.watch('src/**/*.less', ['less']);
});

gulp.task('default', ['webserver', 'watch', 'less','babel']);
