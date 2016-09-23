module.exports = function(grunt) {

    // Project configuration.
    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),
        postcss: {
            options: {
              map: true, // inline sourcemaps
              processors: [
                require('postcss-cssnext')({features: {rem: false}})
              ]
            },
            static_mappings: {
                files: [
                    { src: 'Assets/css/main.css', dest: 'Assets/css/compiled/main.css' },
                    { src: 'Assets/css/posts.css', dest: 'Assets/css/compiled/post.css' },
                ]
            }
            // dist: {
            //   src: 'Assets/css/*.css',
            //   dest: 'Assets/css/compiled/*.css'
            // }
        }
    });

    // grunt.loadNpmTasks('grunt-contrib-sass');
    grunt.loadNpmTasks('grunt-postcss');

    // Default task(s).
    grunt.registerTask('default', ['postcss']);
};
