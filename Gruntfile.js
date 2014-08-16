module.exports = function (grunt) {
    grunt.initConfig({
        coffee: {
            options: {
                bare: true
            },
            compile: {
                files: {
                    'shared/js/app.js': ['client/coffee/*.coffee']
                }
            }
        },
        watch: {
            options: {
                livereload: true
            },
            scripts: {
                files: ['client/coffee/*.coffee'],
                tasks: ['process']
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-coffee');
    grunt.loadNpmTasks('grunt-contrib-watch');
    grunt.loadNpmTasks('grunt-newer');

    grunt.registerTask('process', ['newer:coffee']);
    grunt.registerTask('default', ['coffee', 'watch']);
};