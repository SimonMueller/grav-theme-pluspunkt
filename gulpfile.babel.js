import gulp from 'gulp';
import sass from 'gulp-sass';
import modernizr from 'modernizr';
import file from 'gulp-file';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import babel from 'gulp-babel';
import fs from 'fs';

gulp.task('load-js', () => {
  return gulp.src([
      'node_modules/respond.js/dest/respond.min.js',
      'node_modules/smooth-scroll/dist/js/smooth-scroll.js'
    ])
    .pipe(gulp.dest('js'));
});

gulp.task('load-fonts', () => {
  return gulp.src([
      'node_modules/@fortawesome/fontawesome-free/webfonts/*'
    ])
    .pipe(gulp.dest('webfonts'));
});

gulp.task('load-assets', ['load-fonts', 'load-js']);

gulp.task('sass', () => {
  return gulp.src('scss/master.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
});

gulp.task('js', () => {
  return gulp.src([
      '_js/pluspunkt.js'
    ])
    .pipe(babel())
    .pipe(gulp.dest('js'));
});

gulp.task('modernizr', () => {
  const config = JSON.parse(fs.readFileSync('modernizr-config.json', 'utf8'));

  modernizr.build(config, (result) => {
    file('modernizr.js', result, { src: true })
      .pipe(gulp.dest('js'));
  });
});

gulp.task('css', ['sass'], () => {
  return gulp.src([
      'css/master.css'
    ])
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('css'));
});

gulp.task('default', ['css', 'js', 'load-assets', 'modernizr']);
