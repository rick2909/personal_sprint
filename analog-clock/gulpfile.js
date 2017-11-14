var gulp = require('gulp');

var requireDir = require('require-dir');
requireDir('./gulp-tasks');

//default task
gulp.task('default',function() {
	gulp.watch('assets/sass/**/*.scss',['sass']);
});