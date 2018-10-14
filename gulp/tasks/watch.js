'use strict';
module.exports = () => {
    $.gulp.task('watch', () => {
        $.gulp.watch('src/*.html', $.gulp.series('layout'));
        $.gulp.watch('src/styles/**/*.less', $.gulp.series('style:dev'));
        $.gulp.watch('src/scripts/**/*.js', $.gulp.series('script', 'test'));
        $.gulp.watch('src/assets/img/*.png', $.gulp.series('asset'));
        $.gulp.watch('test/**/*.spec.js', $.gulp.series('test'));
    });
};