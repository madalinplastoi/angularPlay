/**
 * Created by madalin on 1/18/2016.
 */
var path = require("path");

module.exports = function (grunt) {
    "use strict";

    var devPaths = {
        root: 'public/js/'
    };

    var buildPath = 'public/compiled/';

    grunt.initConfig({
        pkg: grunt.file.readJSON('package.json'),

        clean: {
            dev: {
                src: [
                    buildPath
                ]
            }
        },

        uglify: {
            utils: {
                src: [devPaths.root + 'utils-v1.js', devPaths.root + 'pippio.min.js'],
                dest: buildPath + 'utils-v1.js'
            }
        }
    });

    grunt.loadNpmTasks('grunt-contrib-clean');
    grunt.loadNpmTasks('grunt-contrib-uglify');

    grunt.registerTask("build", ['clean', 'uglify']);
};
