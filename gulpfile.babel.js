import gulp from 'gulp';
import sass from 'gulp-sass';
import modernizr from 'modernizr';
import file from 'gulp-file';
import postcss from 'gulp-postcss';
import autoprefixer from 'autoprefixer';
import babel from 'gulp-babel';
import fs from 'fs';

function loadJs() {
  return gulp.src([
      'node_modules/respond.js/dest/respond.min.js',
      'node_modules/smooth-scroll/dist/js/smooth-scroll.js'
    ])
    .pipe(gulp.dest('js'));
}

function loadFonts() {
  return gulp.src([
      'node_modules/@fortawesome/fontawesome-free/webfonts/*'
    ])
    .pipe(gulp.dest('webfonts'));
};

function buildSass() {
  return gulp.src('scss/master.scss')
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('css'))
}

function buildJs() {
  return gulp.src([
      '_js/pluspunkt.js'
    ])
    .pipe(babel())
    .pipe(gulp.dest('js'));
}

function buildModernizr() {
  const config = JSON.parse(fs.readFileSync('modernizr-config.json', 'utf8'));
  return new Promise(resolve => modernizr.build(config, result => resolve(result)))
    .then(result => file('modernizr.js', result, { src: true }).pipe(gulp.dest('js')));
}

function buildCss() {
  return gulp.src([
      'css/master.css'
    ])
    .pipe(postcss([ autoprefixer() ]))
    .pipe(gulp.dest('css'));
}

const buildStylesheets = gulp.series(buildSass, buildCss);
const loadAssets = gulp.series(loadJs, loadFonts);

export default gulp.series(buildStylesheets, buildJs, loadAssets, buildModernizr);
