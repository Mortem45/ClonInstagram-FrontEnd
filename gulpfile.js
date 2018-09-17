const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    babel = require('@babel/core'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream');


gulp.task('sass', (done) => {
    gulp.src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('assets'));
        done();
});

gulp.task('assets', function (done) {
    gulp.src('assets/*')
        .pipe(gulp.dest('public'));
        done();
});

gulp.task('watch', function (done) {
    return gulp.src('scss/*.scss')
        .pipe(watch('scss/*.scss'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('assets'));
        done();
});

gulp.task('scripts', function (done){
    browserify({
        entries: 'src/index.js',
        debug: true
      })
      .bundle()
      .pipe(source('index.js'))
      .pipe(gulp.dest('./public'));
      done()
})
