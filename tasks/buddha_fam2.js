/*
 * grunt-buddha-fam2
 * https://github.com/fam801/
 *
 * Copyright (c) 2015 fengamin
 * Licensed under the MIT license.
 */

'use strict';
var path=require('path');

module.exports = function (grunt) {

  // Please see the Grunt documentation for more information regarding task
  // creation: http://gruntjs.com/creating-tasks

  grunt.registerMultiTask('buddha_fam2', 'buddha sunshine', function () {

    // Merge task-specific and/or target-specific options with these defaults.
    var options = this.options({
     who1:'buddha',
     commentSymbol:'//'
    });

    var  testExistRegeMap={
             'buddha':/o8888888o/,
             'buddha2':/o8886888o/
             },

         who1=options.who1,
         commentSymbol=options.commentSymbol,

         commentFilepathMap={
           'buddha':'asset/buddha.txt',
           'buddha2':'asset/buddha2.txt'
          } ,
         commentFilepath=path.join(__dirname,commentFilepathMap[who1]),
         commentContent=grunt.file.read(commentFilepath),
         lineCommentArr=commentContent.split(grunt.util.normalizelf('\n'));


         lineCommentArr.forEach(function(value,index,arr){
               arr[index]=commentSymbol + value;
         });
         commentContent=lineCommentArr.join(grunt.util.normalizelf('\n'));

    // Iterate over all specified file groups.
    this.files.forEach(function (file) {
      // Concat specified files.
        file.src.filter(function (filepath) {
        // Warn on and remove invalid source files (if nonull was set).
        if (!grunt.file.exists(filepath)) {
          grunt.log.warn('Source file "' + filepath + '" not found.');
          return false;
        } else {
          return true;
        }
      }).map(function (filepath) {
        // Read file source.
        var originalFileContent= grunt.file.read(filepath),
            newFileContent=commentContent
                             +grunt.util.normalizelf('\n')
                             +originalFileContent;

        if (testExistRegeMap[who1].test(originalFileContent)){
          return;
        }
        grunt.file.write(filepath,newFileContent);

      });

    

      // Print a success message.
      grunt.log.writeln('File "' + file.dest + '" created.');
    });
  });

};
