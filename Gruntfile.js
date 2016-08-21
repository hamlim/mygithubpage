module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        sass: {
            dist: {
                options: {
                    style: 'expanded' //compressed for dev
                },
                files: {
                    'Assets/css/prod/main.css': 'Assets/css/src/main.scss',
                    'Assets/css/prod/post.css': 'Assets/css/src/post.scss'
                }
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-sass');

    // Default task(s).
    grunt.registerTask('default', ['sass']);
};
