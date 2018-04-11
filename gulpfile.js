var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

gulp.task('scss', function(){
    gulp.src("public/scss/*.scss")
        .pipe(sass())
        .pipe(gulp.dest('public/css'))
});
gulp.task('watch', function(){
    gulp.watch('public/scss/**/*.scss', ['scss']);
});

gulp.task('serve', function(){
    browserSync.init({
        server: './public'
    });
    gulp.watch(['node_modules/bootstrap/scss/bootstrap.scss', 'public/scss/*.scss']);
    gulp.watch("public/*.html").on('change', browserSync.reload);
    
});
gulp.task('default', ['scss', 'serve', 'watch']); 