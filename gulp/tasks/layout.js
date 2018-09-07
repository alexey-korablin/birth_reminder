'use strict';
module.exports = () => {
    $.gulp.task('layout', () => {
        return $.gulp.src('src/*.html')
        .pipe($.gulp.dest('build'))
        .on('end', $.bs.reload);
    });
};