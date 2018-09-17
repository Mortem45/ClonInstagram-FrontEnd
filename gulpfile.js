const gulp = require('gulp'),
    sass = require('gulp-sass'),
    autoprefixer = require('gulp-autoprefixer'),
    watch = require('gulp-watch'),
    plumber = require('gulp-plumber'),
    browserify = require('browserify'),
    source = require('vinyl-source-stream'),
    gutil = require('gulp-util'),
    watchify = require('watchify');  


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

gulp.task('watch-style', function (done) {
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
});

gulp.task('watch', function() {
    watchify.args.debug = true;
    var bundler = watchify(browserify('./src/index.js', watchify.args));
    bundler.on('update', rebundle);
    bundler.on('log', gutil.log.bind(gutil));
  
    function rebundle() {
      return bundler.bundle()
        .on('error', gutil.log.bind(gutil, 'Browserify Error'))
        .pipe(source('index.js'))
        .pipe(gulp.dest('./public'));
    }
  
    return rebundle();
  });

gulp.task('default', gulp.series('sass','assets','scripts'));