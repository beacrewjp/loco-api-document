var gulp = require('gulp');
var aglio = require('gulp-aglio');

gulp.task('build', function () {
  gulp.src('apib/*.md')
    .pipe(aglio({ template: 'default' }))
    .pipe(gulp.dest('dist'))
});

gulp.task('watch', function () {
  gulp.watch('apib/*.md', ['build']);
});