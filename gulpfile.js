const gulp = require('gulp'),
      sass = require('gulp-sass'),
      cssnano = require('gulp-cssnano'),
      rename = require('gulp-rename');
      function fnCss(){
        return gulp.src('./src/sass/*.scss')
        .pipe(sass({outputStyle: 'expanded'}))
        // .pipe(cssnano())
        .pipe(rename({suffix : '.min'}))
        .pipe(gulp.dest('./dist/css'));
    }
    function fnCopyIndex(){
        return gulp.src('./src/index.html')
        .pipe(gulp.dest('./dist'))
    }
function fnWatch(){
    gulp.watch('./src/sass/*.scss',fnCss);
    gulp.watch('./src/index.html',fnCopyIndex);
}
    exports.css = fnCss;
    exports.copy = fnCopyIndex;
 
   exports.default = fnWatch;