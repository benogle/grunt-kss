# grunt-kss

[![Build Status](https://secure.travis-ci.org/t32k/grunt-kss.png?branch=master)](http://travis-ci.org/t32k/grunt-kss)
[![NPM version](https://badge.fury.io/js/grunt-kss.png)](http://badge.fury.io/js/grunt-kss)
[![Dependency Status](https://david-dm.org/t32k/grunt-kss.png)](https://david-dm.org/t32k/grunt-kss)

> KSS styleguide generator for grunt.

## Getting Started
This plugin requires Grunt `~0.4.2`

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-kss --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-kss');
```

## The "kss" task

### Overview
In your project's Gruntfile, add a section named `kss` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  kss: {
    options: {
      template: 'some/template/dir',
      loadPath: ['path/to/includes/for/sass'],
      include: {
        js: ['path/to/js.js'],
        sass: ['path/to/index.scss']
      }
    },
    dist: {
	    files: [{
	      '/path/to/destdir': '/path/to/sourcedir'
	    }]
  	}
  }
})
```

### Options

#### options.include
Type: `Object`
Default value: `null`

Supports keys `style, less, stylus, sass, css, js, coffee`

```js
include: {
  js: ['path/to/js.js'],
  sass: ['path/to/index.scss']
}
```

Will compile and  and include these files in your styleguide's pages.

#### options.loadPath
Type: `String`
Default value: `null`

A string value that is used to specify include stylesheet path (for sass/scss).

#### options.template
Type: `String`
Default value: `null`

A string value that is used to use a custom template to build your styleguide.

#### options.mask
Type: `String`
Default value: `null`

A string value that is used to use a custom mask for detecting stylesheets.


## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History

+ v0.3.1: Add scss compiler.
+ v0.2.6: Fix "Error: spawn ENOENT" bug for Windows.
+ v0.2.4: Fix kss-node module path.
+ v0.2.3: Bump version.
+ v0.2.2: Fix README.
+ v0.2.0: Fix a cmd path.
+ v0.1.0: Release.
