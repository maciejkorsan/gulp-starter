/* simple gulpfile by Maciej Korsan 12.2017 */

const gulp = require('gulp'); 
const browserSync = require('browser-sync').create(); 

gulp.task('serve', function() {
  browserSync.init({
    server: './',
  }); 
  gulp.watch('**/*.html').on('change', browserSync.reload);
  gulp.watch('**/*.css').on('change', browserSync.reload);
  gulp.watch('**/*.js').on('change', browserSync.reload);
});

gulp.task('default', ['serve']);
