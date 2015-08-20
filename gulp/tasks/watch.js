'use strict';

import gulp from 'gulp';
import paths from  '../config';

gulp.task('default', ['start'], () => {
  gulp.watch(paths.source.scripts, ['build:scripts']);
  gulp.watch([paths.source.css], ['build:css']);
});
