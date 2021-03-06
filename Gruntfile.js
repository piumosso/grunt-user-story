/*
 * grunt-user-story
 * https://github.com/piumosso/grunt-user-story
 *
 * Copyright (c) 2014 piumosso
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt){

    grunt.initConfig({
        clean: {
            tests: ['tmp']
        },

        userStory: {
            all: {
                options: {
                    baseDir: 'test/fixtures',
                    destDir: 'tmp'
                },
                src: ['test/fixtures/*.js', 'test/fixtures/**/*.js']
            }
        },

        nodeunit: {
            tests: ['test/*_test.js']
        }
    });

    grunt.loadTasks('tasks');
    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-nodeunit');

    grunt.registerTask('test', ['clean', 'userStory', 'nodeunit']);
    grunt.registerTask('default', ['test']);

};
