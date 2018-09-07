'use strict';
module.exports = () => {
    $.gulp.task('asset', () => {
        return $.gulp.src('src/assets/media/*.png')
        .pipe($.gulp.dest('build/assets/media/'))
        .on('end', $.bs.reload);
    });
};