'use strict';
module.exports = () => {
    $.gulp.task('script', () => {
        return $.gulp.src('src/scripts/*.js')
        .pipe($.gulp.dest('build/scripts/'))
        .pipe($.bs.reload({
            stream: true
        }));
    });
};