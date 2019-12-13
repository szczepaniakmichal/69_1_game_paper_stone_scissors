var gulp = require('gulp');
var sass = require('gulp-sass');

gulp.task('sass', done => {
   gulp.src('sass/style.scss')
       .pipe(sass())
       .pipe(gulp.dest('css/'));
   done();
});