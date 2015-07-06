module.exports = function (grunt) {
    require('load-grunt-tasks')(grunt);

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        concat: {
            options: {
                separator: ';',
            },
            dist: {
                src: ['client/scripts/*.js'],
                dest: 'build/.tmp/scripts/page-interactive.js',
            },
        },

        uglify: {
            options: {
                mangle: false
            },
            scripts: {
                files: {
                    'build/public/js/page-interactive.min.js': ['build/.tmp/scripts/page-interactive.js']
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
                src: ['views/*', 'models/*', 'controllers/*', 'app.js', 'routes.js'],
                dest: 'build/'
            },
            static: {
                expand: true,
                src: ['static/*'],
                dest: 'build/public/'
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
                files: ['client/scripts/*.js', 'build/.tmp/js/app.js'],
                tasks: ['uglify'],
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

    grunt.registerTask('default', ['clean:build', 'less', 'concat', 'uglify', 'copy', 'clean:release', 'compress']);
};