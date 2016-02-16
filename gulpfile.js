var gulp = require('gulp'),
    eslint = require('gulp-eslint'),
    uglify = require('gulp-uglify'),
    rename = require('gulp-rename'),
    pkg = require('./package.json');

var source = "src/better-trello.js";
var dist = "dist/better-trello.user.js";

gulp.task('lint', function () {
    return gulp.src([source, dist])
        .pipe(eslint())
        .pipe(eslint.format())
        .pipe(eslint.failAfterError());
});

gulp.task('default', ['lint'], function () {
    return gulp.src(source)
        .pipe(rename(dist))
        .pipe(uglify({preserveComments: 'all'}))
        .pipe(size())
        .pipe(gulp.dest('dist'));
});

