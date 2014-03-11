var fs  = require('fs');
var sys = require('sys');

module.exports=function(grunt){
  'use strict';

  //Minify
  grunt.initConfig({
    dir: {
        src: 'sass',
        dest: 'stylesheets'
    },

    pkg: grunt.file.readJSON('package.json'),

    compass: {
        dev: {
            options: {
                config: "config.rb",
                environment: "development",
                iamgeDir: "images/assets",
                generatedImagesDir: "images",
                force: true

            }
        },

        prod: {
            options: {
                config: "config.rb",
                environment: "production",
                force: true,
                /*cssDir: '<%= dir.dest %>/stylesheets'*/
            }
        }

    },

    watch: {
        /* この対象となるファイルがないとwatchが始まらない */
         files: ['<%= dir.src %>/*.scss'],
         tasks: ['compass:dev']
    }

  });

    grunt.loadNpmTasks('grunt-contrib-uglify');
    grunt.loadNpmTasks('grunt-contrib-cssmin');
    grunt.loadNpmTasks('grunt-contrib-compass');
    grunt.loadNpmTasks('grunt-contrib-watch');

    grunt.registerTask('default', ['compass']);
};

