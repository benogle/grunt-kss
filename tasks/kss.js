/*
 * grunt-kss
 * https://github.com/t32k/grunt-kss
 *
 * Copyright (c) 2013 Koji Ishimoto
 * Licensed under the MIT license.
 */

'use strict';

module.exports = function(grunt) {

    function addOptions(command, optionName, optionValues) {
        optionValues = !optionValues || Array.isArray(optionValues) ? optionValues : [optionValues];
        for (var i = 0; optionValues && i < optionValues.length; i++) {
            command.push('--' + optionName, optionValues[i]);
        }
    }

    grunt.registerMultiTask('kss', 'Generate styleguide by KSS.', function() {

        var fs = require('fs'),
            path = require('path'),
            exec = require('child_process').exec,
            done = this.async();

        var kssCmd = ['node'],
            realPath = path.dirname(__filename).replace(/tasks$/g, ''),
            dest = process.cwd();

        var opts = this.options({
            template: null,
            include: null,
            loadPath: null,
            mask: null,
            markupTemplateDirectory: null
        });

        kssCmd.push(realPath + 'node_modules/kss/bin/kss-node');

        this.files.forEach(function(file) {
            console.log('Dirs!', file);
            kssCmd.push(file.src[0]);
            kssCmd.push(file.dest);
            dest = file.dest;
        });

        if (opts.template !== null) {
            kssCmd.push('--template', opts.template);
        }

        if (opts.mask !== null) {
            kssCmd.push('--mask', '"' + opts.mask + '"');
        }

        if (opts.markupTemplateDirectory !== null) {
            kssCmd.push('--markup-template-directory', '"' + opts.markupTemplateDirectory + '"');
        }

        if (opts.loadPath !== null) {
            addOptions(kssCmd, 'load-path', opts.loadPath);
        }

        if (opts.include !== null) {
            for (var k in opts.include) {
                addOptions(kssCmd, k, opts.include[k]);
            }
        }

        var putInfo = function(error, result, code) {
            if (error !== null) {
                grunt.log.error(error);
                grunt.log.error('Code: ' + code);
            } else {
                grunt.log.write(result);
            }
            done();
        };

        // Execute!!
        exec(kssCmd.join(' '), putInfo);
        grunt.verbose.ok('`[KSS] ' + kssCmd.join(' ') + '` was initiated.');

    });
};
