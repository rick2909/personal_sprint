'use strict';

module.exports = function(grunt) {
	// Load the plugin that provides the tasks.
    //grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-sass');
    
    //load the various tasks configuration files
    var configs = require('load-grunt-configs') (grunt);
    grunt.initConfig(configs);

	// Default task(s).
	grunt.registerTask('default', ['watch']);
};