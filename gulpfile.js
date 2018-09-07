'use strict';

global.$ = {
    gulp: require('gulp'),
    gp: require('gulp-load-plugins')(),
    bs: require('browser-sync').create(),

    path: {
        tasks: require('./gulp/config/paths.js')
    }
};

$.path.tasks.forEach((task) => require(task)());

$.gulp.task('default', $.gulp.series(
    $.gulp.task('clean'),
    $.gulp.parallel('script', 'style:dev', 'layout', 'asset'),
    $.gulp.parallel('serve', 'watch')
));