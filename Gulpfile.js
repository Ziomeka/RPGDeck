var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');
requireDir('./gulp-tasks');

gulp.task('default', ['clean','styles', 'babel', 'copy'], function() {

    browserSync.init({
        server: "./build"
    });
    gulp.watch('src/sass/**/*.scss',['styles']);
    gulp.watch('src/js/**/*.js',['babel']);
    gulp.watch('src/**/*.html',['copy']);
    gulp.watch(["build/*.html","build/js/**/*.js", "build/*.css"]).on('change', browserSync.reload);
});
