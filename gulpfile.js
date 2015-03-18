/*
|--------------------------------------------------------------------------
| Include dependencies
|--------------------------------------------------------------------------
*/

var autoprefixer = require('gulp-autoprefixer');
var gulp = require('gulp')
var include = require('gulp-include');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var plumber = require('gulp-plumber');

/*
|--------------------------------------------------------------------------
| Set path variables
|--------------------------------------------------------------------------
*/

var public_path = 'public';
var assets_path = 'assets/';
var views_path = 'views/';

/*
|--------------------------------------------------------------------------
| Convert SASS to CSS
|--------------------------------------------------------------------------
*/

gulp.task('css', function () {
  return gulp.src([
    assets_path + 'sass/main.scss'
    ])
  .pipe(sass({
    style: 'compressed',
    errLogToConsole: false,
    onError: function(err) {
      return notify().write(err);
    }
  }))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest(public_path + 'css'))
  .pipe(livereload({ auto: false }))
  .pipe(notify({ message: 'Compiled CSS (<%=file.relative%>)' }));
});


/*
|--------------------------------------------------------------------------
| Minify JavaScript
|--------------------------------------------------------------------------
*/

gulp.task('js', function() {
  return gulp.src(assets_path + 'js/main.js')
  .pipe(plumber())
  .pipe(include())
    // .pipe(uglify())
    .pipe(rename('main.min.js'))
    .pipe(gulp.dest('js'))
    .pipe(notify({ message: 'Minified JS (<%=file.relative%>)' }));
  });

gulp.task('headjs', function() {
  return gulp.src(assets_path + 'js/head.js')
  .pipe(include())
  .pipe(uglify())
  .pipe(rename('head.min.js'))
  .pipe(gulp.dest(public_path + 'js'))
  .pipe(notify({ message: 'Minified JS (<%=file.relative%>)' }));
});

/*
|--------------------------------------------------------------------------
| Setup LiveReload and watcher
|--------------------------------------------------------------------------
*/

gulp.task('default', function () {

  // Create LiveReload server
  var server = livereload();
  livereload.listen();

  // Watch .scss files
  gulp.watch([
    assets_path + 'sass/*.scss',
    assets_path + 'sass/**/*.scss'
    ], ['css']);

  // Watch .js files
  gulp.watch([
    assets_path + 'js/*.js',
    assets_path + 'js/*/*.js',
    ], ['js']);

  // Watch view files
  gulp.watch([
    views_path + '*.*',
    views_path + '*/*.*'
  ],
  function(file) {
    return gulp.src([
    file.path])
    .pipe(livereload());
  });

  // Watch img files
  gulp.watch([
    assets_path + 'img/*',
    assets_path + 'img/*/**'
  ],
  function(file) {
    return gulp.src([
    file.path])
    .pipe(livereload());
  });

});
