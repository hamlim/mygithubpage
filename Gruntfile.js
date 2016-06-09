module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        uglify: {
            options: {
                banner: '/*! <%= pkg.name %> <%= grunt.template.today("yyyy-mm-dd") %> */\n'
            },
            build: {
                src: 'Assets/js/src/*.js',
                dest: 'build/site.min.js'
            }
        },
        sass: {
            dist: {
                options: {
                    style: 'expanded' //compressed for production
                },
                files: {
                    'Assets/css/build/main.css': 'Assets/css/src/main.scss'
                }
            }
        }
    });

    // Load the plugin that provides the "uglify" task.
    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['uglify', 'sass']);

};
