var gulp = require('gulp');
var browserSync = require('browser-sync').create();
var requireDir = require('require-dir');
requireDir('./gulp-tasks');


gulp.task('default', ['styles', 'babel', 'copy'], function() {

    browserSync.init({
        server: "./tmp"
    });
    gulp.watch('src/sass/**/*.scss',['styles']);
    gulp.watch('src/js/**/*.js',['babel']);
    gulp.watch('src/**/*.html',['copy']);
    gulp.watch(["tmp/*.html","tmp/js/**/*.js", "tmp/*.css"]).on('change', browserSync.reload);
});
