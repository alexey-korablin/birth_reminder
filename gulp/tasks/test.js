'use strict';
module.exports = () => {
    $.gulp.task('test', () => $.gulp.src(['test/**/*.spec.js'], {read: false})
        .pipe($.gp.mocha())
        .on('error', console.error)
    );
};