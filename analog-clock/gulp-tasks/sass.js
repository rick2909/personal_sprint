var gulp = require('gulp');
var sass = require('gulp-ruby-sass');

gulp.task('sass', function () {
	gulp.src('/assets/sass/**/*.scss')
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest('.assets/css/'));
});