
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();

gulp.task('css', function () {
    return gulp.src('src/*.css') // ----- declare directory 
        .pipe(concatCss("bundle.css")) // ----- concactenate all css into bundle.css
        .pipe(csso()) // ----- minify bundle
        .pipe(gulp.dest('public')); // ----- output destination
});

// Gulp task to minify JavaScript files
gulp.task('scripts', function () {
    return gulp.src(['src/materialize.min.js', 'src/*.js']) // Declare source
        .pipe(concat('bundle.js')) // Concat js files into bundle.js
        .pipe(uglify()) // Minify the bundle
        .pipe(gulp.dest('public/')) // Output
});

gulp.task('watch-css', function() {
    gulp.watch('src/*.css', gulp.series('css'))
});

gulp.task('watch-js', function() {
    gulp.watch('src/*.js', gulp.series('scripts'))
});

gulp.task('watch-build', function() {
    gulp.watch('public/*.js', function() {
        console.log('JS Compilation completed.')
    })
});

gulp.task('dev', gulp.parallel('watch-js', 'watch-css', 'watch-build'))