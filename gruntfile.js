module.exports = function(grunt){

	grunt.loadNpmTasks('grunt-contrib-uglify');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');
	grunt.loadNpmTasks('grunt-contrib-less');
	grunt.initConfig({

		uglify:{
			my_target:{

			files:{
					'htdocs/inc/js/global.scripts.js' : ['htdocs/inc/components/js/*.js']
				}// files
			}// my_target
		},// uglify
		compass:{
			dev:{
				options:{
					config:'config.rb'
				}// options
			}// dev
		},// compass
		sass: {
		  dist: {
		    options: {
		      require: 'susy'
		    }
		  }
		},
		less: {
		  	development: {
			    options: {
			      paths: ["htdocs/inc/css/"]
			    },
			    files: {
			      "htdocs/inc/css/styles.css": "htdocs/inc/components/less/style.less"
			    }
			}
		},
		watch:{
			options:{ livereload: true },
			scripts:{
				files: ['htdocs/inc/components/js/*.js'],
				tasks: ['uglify']
			},// scripts
			sass:{
				files: ['htdocs/inc/components/sass/*.scss'],
				tasks: ['compass:dev']
			},// Sass
			less:{
				files: ['htdocs/inc/components/less/*.less'],
				tasks: ['less']
			},// Less
			html :{
				files: ['htdocs/*.html']
			}// HTML
		} // watch
	}) // initCOnfig
	grunt.registerTask('default', 'watch');
} // exports