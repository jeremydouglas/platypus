/*
|--------------------------------------------------------------------------
| Include dependencies
|--------------------------------------------------------------------------
*/

var gulp = require('gulp')
var autoprefixer = require('gulp-autoprefixer');
var include = require('gulp-include');
var livereload = require('gulp-livereload');
var notify = require('gulp-notify');
var plumber = require('gulp-plumber');
var rename = require('gulp-rename');
var sass = require('gulp-sass');
var uglify = require('gulp-uglify');
var globbing = require('gulp-css-globbing');
var modernizr = require('gulp-modernizr');

// Image compression
var imagemin = require('gulp-imagemin');
var pngquant = require('imagemin-pngquant');
var tinypng = require('gulp-tinypng');


/*
|--------------------------------------------------------------------------
| Set path variables
|--------------------------------------------------------------------------
*/

var public_path = 'public/assets/';
var dev_path = 'src/';
var views_path = 'public/assets/**/*.html';

/*
|--------------------------------------------------------------------------
| Convert SASS to CSS
|--------------------------------------------------------------------------
*/

gulp.task('css', function () {
  var onError = function(err) {
    notify.onError({
      title:    "Gulp",
      subtitle: "Failure!",
      message:  "Error: <%= error.message %>"
    })(err);
    this.emit('end');
  };
  return gulp.src([
    dev_path + 'sass/main.scss'
  ])
  .pipe(plumber({errorHandler: onError}))
  .pipe(globbing({
    extensions: ['.scss']
  }))
  .pipe(sass({
    outputStyle: 'compressed',
    errLogToConsole: false
  }))
  .pipe(autoprefixer('last 2 version', 'safari 5', 'ie 8', 'ie 9', 'opera 12.1', 'ios 6', 'android 4'))
  .pipe(gulp.dest(public_path + 'css'))
  .pipe(livereload({ auto: false }))
  .pipe(notify({
    title: 'Gulp',
    subtitle: 'Success',
    message: 'Compiled CSS (<%=file.relative%>)' }));
});

/*
|--------------------------------------------------------------------------
| Minify JavaScript
|--------------------------------------------------------------------------
*/

gulp.task('js', function() {
  return gulp.src(dev_path + 'js/end.js')
  .pipe(plumber())
  .pipe(include())
  .pipe(uglify())
  .pipe(rename('end.main.js'))
  .pipe(gulp.dest(public_path + 'js'))
  .pipe(notify({ message: 'Minified JS (<%=file.relative%>)' }));
});

gulp.task('modernizr', function() {
  gulp.src(dev_path + 'sass/*/*.scss')
    .pipe(modernizr())
    .pipe(gulp.dest(dev_path + 'js'))
});

gulp.task('headjs', function() {
  return gulp.src(dev_path + 'js/head.js')
  .pipe(include())
  .pipe(uglify())
  .pipe(rename('head.min.js'))
  .pipe(gulp.dest(public_path + 'js'))
  .pipe(notify({ message: 'Minified JS (<%=file.relative%>)' }));
});

/*
|--------------------------------------------------------------------------
| Optimize Images
|--------------------------------------------------------------------------
*/

gulp.task('images', function () {
  return gulp.src(public_path + 'img/*')
  .pipe(imagemin({
    progressive: true,
    svgoPlugins: [{removeViewBox: false}],
    use: [pngquant()]
  }))
  .pipe(gulp.dest(public_path + 'img/'));
});

gulp.task('tinypng', function () {
    gulp.src(public_path + 'img/*.png')
        .pipe(tinypng('UMKBV8s6QuwMtQudUF1BAeejyAQEip4N'))
        .pipe(gulp.dest(public_path + 'img/'));
});

/*
|--------------------------------------------------------------------------
| Setup LiveReload and watcher
|--------------------------------------------------------------------------
*/

gulp.task('default', function ()
{
  // Create LiveReload server
  var server = livereload();
  livereload.listen();

  // Watch .scss files
  gulp.watch
  ([
   dev_path + 'sass/*.scss',
   dev_path + 'sass/**/*.scss'
   ],
   ['css']);

  // Watch main.js files
  gulp.watch
  ([
   dev_path + 'js/end_blocks/*.js',
   dev_path + 'js/end.js'
   ],
   ['js']);

  // Watch head.js files
  gulp.watch
  ([
   dev_path + 'js/head.js',
   dev_path + 'js/head_blocks/*.js'
   ],
   ['headjs']);

  // Watch view files
  gulp.watch
  ([
   views_path + '*.html'],
   function(file)
   {
     return gulp.src
     ([file.path])
     .pipe(livereload());
   });

  // Watch img files
  gulp.watch
  ([
   public_path + 'img/*.*',
   public_path + 'img/*/*.*'
   ],
   function(file)
   {
     return gulp.src
     ([file.path])
     .pipe(livereload());
   });
});
