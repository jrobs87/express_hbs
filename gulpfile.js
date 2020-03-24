require('dotenv').config()
var portserver = process.env.PORTSERVER;
var portview = process.env.PORTVIEW;
var gulp = require('gulp');
var concatCss = require('gulp-concat-css');
var csso = require('gulp-csso');
var uglify = require('gulp-uglify');
var concat = require('gulp-concat');
var browserSync = require('browser-sync').create();
require('gulp-cache').cache;

// Gulp task to minify CSS files
gulp.task('compile-css', function () {
    return gulp.src('src/*.css') // ----- declare directory 
        .pipe(concatCss("bundle.css")) // ----- concactenate all css into bundle.css
        .pipe(csso()) // ----- minify bundle
        .pipe(gulp.dest('public')); // ----- output destination
});

// Gulp task to minify JavaScript files
gulp.task('compile-js', function () {
    return gulp.src(['src/materialize.min.js', 'src/*.js']) // Declare source
        .pipe(concat('bundle.js')) // Concat js files into bundle.js
        .pipe(uglify()) // Minify the bundle
        .pipe(gulp.dest('public/')) // Output
});

gulp.task('watch-css-src', function() {
    gulp.watch('src/*.css', gulp.series('compile-css'))
});

gulp.task('watch-js-src', function() {
    gulp.watch('src/*.js', gulp.series('compile-js'))
});

// Clear the cache
gulp.task('clear', () => {
    console.log('cache cleared');
    cache.clearAll();
});

// Hot reload server here
gulp.task('reload', function() {    
    browserSync.init({
        proxy: `localhost:${portserver}`,
        port: portview
    });
    // Set our watchers for bundled files and template changes - reload on change
    gulp.watch("public/*.js").on('change', browserSync.reload);
    gulp.watch("public/*.css").on('change', browserSync.reload);
    gulp.watch("**/*.hbs").on('change', browserSync.reload);
})


// Dev Task for NPM (compiles js and css code, then reloads once operations are complete)
gulp.task('dev', gulp.parallel( 'watch-js-src', 'watch-css-src', 'reload'))