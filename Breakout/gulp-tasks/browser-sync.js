var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: "./"
	});

	gulp.watch("assets/sass/*.scss", ['sass']);
	gulp.watch("app/*.html").on('change', browserSync.reload);
});

