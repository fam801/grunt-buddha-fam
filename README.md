# grunt-buddha-fam2

> buddha sunshine
>在.js文件前加入字符画注释

## Getting Started
This plugin requires Grunt.

If you haven't used [Grunt](http://gruntjs.com/) before, be sure to check out the [Getting Started](http://gruntjs.com/getting-started) guide, as it explains how to create a [Gruntfile](http://gruntjs.com/sample-gruntfile) as well as install and use Grunt plugins. Once you're familiar with that process, you may install this plugin with this command:

```shell
npm install grunt-buddha-fam2 --save-dev
```

Once the plugin has been installed, it may be enabled inside your Gruntfile with this line of JavaScript:

```js
grunt.loadNpmTasks('grunt-buddha-fam2');
```

## The "buddha_fam2" task

### Overview
In your project's Gruntfile, add a section named `buddha_fam2` to the data object passed into `grunt.initConfig()`.

```js
grunt.initConfig({
  buddha_fam2: {
    options: {
      // Task-specific options go here.
    },
    your_target: {
      // Target-specific file lists and/or options go here.
    },
  },
})
```

### Options

#### options.who
Type: `String`
Default value: `buddha`

A string value that is used to do something with whatever.

#### options.commentSymbol
Type: `String`
Default value: `//`

A string value that is used to do something else with whatever else.

### Usage Examples

grunt.initConfig({
  buddha_fam2:{
    options:{
         'who':'buddha',
         'commentSymbol':'//'
  },
  dist:['example/*.js']

},
})
#### Default Options
In this example, the default options are used to do something with whatever. So if the `testing` file has the content `Testing` and the `123` file had the content `1 2 3`, the generated result would be `Testing, 1 2 3.`

```js
grunt.initConfig({
  buddha_fam2: {
    options: {},
    files: {
      'dest/default_options': ['src/testing', 'src/123'],
    },
  },
})
```



## Contributing
In lieu of a formal styleguide, take care to maintain the existing coding style. Add unit tests for any new or changed functionality. Lint and test your code using [Grunt](http://gruntjs.com/).

## Release History
2015-11-12&nbsp;   v0.0.1&nbsp;&nbsp;init&nbsp;&nbsp;It's a nice day!&nbsp;&nbsp;&nbsp;

## License
Copyright (c) 2015 fengamin. Licensed under the MIT license.
