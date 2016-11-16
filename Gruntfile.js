module.exports = function(grunt) {

	grunt.initConfig({
		sass: {                              		// Task
	    	dist: {                            		// Target
	      		files: {                         		// Dictionary of files
	        		'css/main.css': 'scss/main.scss'    // 'destination': 'source'
	      		}
	    	}
	  	},
	  	concat: {
    		options: {
      			separator: ';',
    		},
    		dist: {
      			src: [	'node_modules/lodash/lodash.min.js',
      					'node_modules/angular/angular.min.js',
      					'node_modules/angular-animate/angular-animate.min.js',
      					'node_modules/ng-infinite-scroll/build/ng-infinite-scroll.min.js'],
      			dest: 'widget/lib/lib_combined.js',
    		},
  		},
	});
	
	grunt.loadNpmTasks('grunt-contrib-sass');
	grunt.loadNpmTasks('grunt-contrib-concat');
	
	grunt.registerTask('default', ['sass', 'concat']);

};