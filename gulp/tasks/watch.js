'use strict';
module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('src/*.html', $.gulp.series('layout'));
        $.gulp.watch('src/styles/**/*.less', $.gulp.series('style'));
        $.gulp.watch('src/scripts/**/*.js', $.gulp.series('script'));
        $.gulp.watch('src/assets/img/*.png', $.gulp.series('asset'));
    });
};