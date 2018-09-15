const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber');


gulp.task('sass', (done) => {
    gulp.src('scss/app.scss')
        .pipe(autoprefixer({
            browsers: ['last 2 versions'],
            cascade: false
        }))
        .pipe(sass({
            includePaths: ['scss']
        }))
        .pipe(gulp.dest('css'));
        done();
});

gulp.task('watch', function (done) {
    return gulp.src('scss/*.scss')
        .pipe(watch('scss/*.scss'))
        .pipe(plumber())
        .pipe(sass())
        .pipe(gulp.dest('css'));
        done();
});