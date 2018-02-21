var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');
var browserSync = require('browser-sync').create();

gulp.task('styles', function() {
    gulp.src('src/sass/**/*.scss')
        .pipe(sass().on('error', sass.logError))
        .pipe(gulp.dest('././dist/'));
});

gulp.task('babel', () =>
    gulp.src('src/js/app.js')
        .pipe(babel({
            presets: ['env']
        }))
        .pipe(gulp.dest('dist/js'))
);

gulp.task('default', ['styles', 'babel'], function() {

    browserSync.init({
        server: "./src"
    });

    gulp.watch('src/sass/**/*.scss',['styles']);
    gulp.watch('src/js/**/*.js',['babel']);
    gulp.watch("src/*.html").on('change', browserSync.reload);
});
