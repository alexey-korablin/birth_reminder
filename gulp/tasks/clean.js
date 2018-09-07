'use strict';
module.exports = () => {
    $.gulp.task('clean', () => {
        return $.gulp.src('build/**/*.*', {read: false})
        .pipe($.gp.clean());
    });
};