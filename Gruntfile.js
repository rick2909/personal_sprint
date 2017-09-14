'use strict';

module.exports = function(grunt) {
  // Add configuration, tasks and plugins here
  	grunt.initConfig({
		// imports the config data from the package.json
		pkg: grunt.file.readJSON('package.json'),
	    watch: {
		    files: 'assets/sass/**/*.scss',
		    tasks: ['sass', 'cssmin'],
		    options: {
		      livereload: true,
		    },
		},
		sass: {
	        dist: {
	            files: {
	                'assets/css/main.css': 'assets/sass/style.scss'
	            },
	        },
		},
		cssmin: {
			target: {
				files: [{
					expand: true,
					cwd: 'assets/css',
					src: ['*.css', '!*.min.css'],
					dest: 'build/css',
					ext: '.min.css'
				}]
			}
		}
	});
	// Load the plugin that provides the tasks.
	//grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
	grunt.loadNpmTasks('grunt-contrib-sass');

	// Default task(s).
	grunt.registerTask('default', ['watch']);
};