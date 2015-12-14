Sass Boilerplate
=========

This repository is a starting point for frontend development.

```
/sass/
  ├── main.scss
  ├── base/
  │   ├── colors.scss
  │   ├── fonts.scss
  │   ├── defaults.scss
  │   ├── icons.scss
  │   └── grid.scss
  ├── blocks/
  │   ├── browsehappy.scss
  │   ├── site_header.scss
  │   ├── site_logo.scss
  │   ├── site_footer.scss
  │   ├── header.scss
  │   ├── footer.scss
  │   ├── main_nav.scss
  │   ├── wysiwyg.scss
  │   └── social_profile_links.scss
  ├── extends/
  │   ├── buttons.scss
  │   └──  typography.scss
  └── mixins/
      ├── clearfix.scss
      ├── antialias.scss
      ├── em.scss
      ├── font_face.scss
      ├── image_wrap.scss
      ├── justified_grid.scss
      └── matrix_grid.scss
/js/
  ├── main.js
  ├── head.js
  └── blocks/
      └── analytics_events.js
/vendor/bower_components/
  ├── jquery-legacy
  ├── meyer-reset
  └── respond
```

#### Gulpfile.js

To install Node visit [https://nodejs.org/download](https://nodejs.org/download/).

To install gulp, run the following command:

```
$ npm install gulp -g
```

When you’re done, install the rest of the theme's dependencies:

```
$ npm install
$ bower install
```

From here on out, simply run `gulp` from your terminal and you're good to go!
```
$ gulp
```
+ `gulp` - recompiles and minifies your theme assets.
