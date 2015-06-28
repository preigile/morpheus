module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        coffee: {
            dev: {
                options: {
                    bare: true
                },
                files: {
                    'build/.tmp/js/page-interactive.js': 'client/coffee/*.coffee'
                }
            }
        },

        uglify: {
            options: {
                mangle: false
            },
            scripts: {
                files: {
                    'build/public/js/page-interactive.min.js': ['build/.tmp/js/page-interactive.js']
                }
            }
        },

        less: {
            dev: {
                options: {
                    sourceMap: true
                },
                files: {
                    'build/.tmp/css/styles.css': 'client/less/*.less'
                }
            },
            dist: {
                options: {
                    compress: true,
                    report: true
                },
                files: {
                    'build/public/css/styles.min.css': 'build/.tmp/css/*.css'
                }
            }
        },

        copy: {
            assets: {
                expand: true,
                src: ['static/*', 'views/*', 'models/*', 'controllers/*', 'app.js', 'routes.js'],
                dest: 'build/'
            },
            vendor: {
                expand: true,
                cwd: 'node_modules/',
                src: '**',
                dest: 'build/vendor/'
            }
        },

        compress: {
            main: {
                options: {
                    archive: 'build/distribution/morpheus/morpheus.tar'
                },
                expand: true,
                cwd: 'build/',
                src: ['**/*'],
            }
        },

        clean: {
            build: ['build'],
            release: ['build/.tmp']
        },

        watch: {
            scripts: {
                files: ['client/coffee/*.coffee', 'build/.tmp/js/app.js'],
                tasks: ['coffee', 'uglify'],
                options: {
                    spawn: false,
                    livereload: true
                }
            },
            css: {
                files: ['client/less/*.less', 'build/.tmp/css/*.css'],
                tasks: ['less'],
                options: {
                    spawn: false
                }
            },
            html: {
                files: ['views/*.ejs'],
                tasks: ['copy'],
                options: {
                    spawn: false
                }
            }
        }
    });

    grunt.registerTask('default', ['clean:build', 'less', 'coffee', 'uglify', 'copy', 'clean:release', 'compress']);
};