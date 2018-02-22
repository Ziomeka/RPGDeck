var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var clean = require('gulp-clean');
var runSeq = require('run-sequence');

gulp.task('clean', function () {
  return gulp.src('build', {read: false})
    .pipe(clean());
});

gulp.task('styles', function() {
    return gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('././build/'));
});

gulp.task('babel', function() {
    return gulp.src('src/js/*.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('build/js/'))
});

gulp.task('copy', function () {
    return Promise.all ([gulp.src('./src/*.html')
        .pipe(gulp.dest('./build/')),
    gulp.src('./src/img/*.*')
        .pipe(gulp.dest('./build/img/'))]);
});

gulp.task('build', function(callback){
  return runSeq('clean', ['styles', 'copy', 'babel'],callback);
});
