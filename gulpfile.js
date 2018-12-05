const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    watchify = require('watchify'),
    babelify = require('babelify');

    sass.compiler = require('node-sass');


gulp.task('sass', function () {
  return gulp.src('scss/app.scss')
  .pipe(autoprefixer({
    browsers: ['last 2 versions'],
    cascade: false
    }))
    .pipe(sass().on('error', sass.logError))
    .pipe(gulp.dest('assets'));
});

gulp.task('assets', function (done) {
    gulp.src('assets/*')
        .pipe(gulp.dest('public'));
        done();
});

gulp.task('watch-style', function (done) {
    return gulp.src('scss/*.scss')
        .pipe(watch('scss/*.scss'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('public'));
        done();
});

gulp.task('build', function (done) {
    return browserify('./src/index.js', { debug: true })
        .transform(babelify, {presets: ["@babel/preset-env"]})
        .bundle()
        .pipe(source('index.js'))
        .pipe(gulp.dest('public'));
        done();
});

gulp.task('default', gulp.series('sass','assets','build'));