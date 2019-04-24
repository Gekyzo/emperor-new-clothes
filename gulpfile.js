const gulp = require('gulp')
const sassCompile = require('gulp-sass')
const sourcemaps = require('gulp-sourcemaps')

// Compile
function sass() {
    return gulp
        .src('./scss/emperor.scss')
        .pipe(sassCompile())
        .pipe(sourcemaps.init())
        .pipe(sourcemaps.write('./map/'))
        .pipe(gulp.dest('./'))
}

// Watch & Compile
function watch() {
    gulp.watch('./scss/**/*', gulp.series('sass'))
}
exports.sass = sass
exports.watch = watch
