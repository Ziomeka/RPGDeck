var gulp = require('gulp');
var sass = require('gulp-sass');
var babel = require('gulp-babel');

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


gulp.task('default',function() {
    gulp.watch('src/sass/**/*.scss',['styles']);
    gulp.watch('src/js/**/*.js',['babel']);
});
