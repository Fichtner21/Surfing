var gulp = require('gulp');
var sass = require('gulp-sass');
var sourcemaps = require('gulp-sourcemaps');
var sassOptions = {
  errLogToConsole:true,
  outputStyle:'expanded'
}

  gulp.task('sass',function(){
    return gulp.src('sass/*.scss')
    .pipe(sourcemaps.init()) //załadowanie sourcemaps
  //  .pipe(sassGlob())
    .pipe(sass(sassOptions))
    .pipe(sourcemaps.write()) //zapis sourcemaps
    .pipe(gulp.dest('css'));
});

gulp.task('watch',['sass'], function(){
  gulp.watch('sass/*.scss',['sass']);
});
