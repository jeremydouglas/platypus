# Platypus Boilerplate

This repository is a starting point for frontend development. It’s a compilation of pieces that we’ve adapted from different frameworks. The intention is to be very minimal, but also included the base set of files that are typically used on a project.

## Key concepts
We’re using the [BEM](https://en.bem.info) naming conventions. For a complete overview on how we work, see our [front-end dev standards](https://github.com/compasscreative/front-end-web-dev-standards/blob/master/README.md).

### Settings
The /src/sass/settings directory contains the base settings for the app. Fonts and icons are also set here.

### Base
The /src/sass/base directory contains high level components which are similar to blocks, but used on a more ubiquitously throughout the site. In here you’ll find the buttons, grid, responsive image function, links and typography styles.

### Blocks
Each block will receive it’s own file in the /src/sass/blocks directory, named after itself and containing the elements relative to itself. Breaking blocks into files helps to quickly find blocks down the road.

### Mixins, Extends and Functions
We have some starter mixins and extends included. Feel free to add more, functions can go in the mixins folder, or you can start a new functions directory if you choose.

### Transitions
We have a transitions folder where you can keep css transitions and reference them from blocks as needed.

## NPM

We use NPM to pull in dependencies, including scss, js assets and [gulp](http://gulpjs.com).

To install Node visit [https://nodejs.org/download](https://nodejs.org/download/).

The run the dependencies install for this project:

```
$ npm install --save-dev
```

## Gulp

We use gulp as a task runner to compile assets, minify images and run liverload.

Once you have the NPM packages installed, you’ll have Gulp installed as well.

From here on out, simply run `gulp` from your terminal and you're good to go!
```
$ gulp
```

`gulp` - recompiles and minifies your theme assets, runs [livereload](http://livereload.com). To get livereload working with your browser, you'll need to install a [browser extension](http://livereload.com/extensions/).
