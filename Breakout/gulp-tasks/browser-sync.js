var gulp        = require('gulp');
var browserSync = require('browser-sync').create();

// Static Server + watching scss/html files
gulp.task('serve', ['sass'], function() {

	browserSync.init({
		server: "./"
	});

	gulp.watch("assets/sass/**/*.scss", ['sass']).on('change', browserSync.reload);
	gulp.watch("assets/js/*.js").on('change', browserSync.reload);
	gulp.watch("*.html").on('change', browserSync.reload);
});

