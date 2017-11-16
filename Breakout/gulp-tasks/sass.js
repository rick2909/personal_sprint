var gulp = require('gulp');
var sass = require('gulp-sass');
var browserSync = require('browser-sync').create();

// Compile sass into CSS & auto-inject into browsers
gulp.task('sass', function() {
	return gulp.src("assets/sass/**/*.scss")
		.pipe(sass().on('error', sass.logError))
		.pipe(gulp.dest("assets/css"))
		.pipe(browserSync.stream());
});