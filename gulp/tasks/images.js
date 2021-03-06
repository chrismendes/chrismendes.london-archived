var path         = require('path');
var baseURL      = path.resolve(__dirname, '../../');

var config       = require(baseURL + '/config.app.js');
var gulp         = require('gulp');
var flatten      = require(baseURL + '/gulp/plugins/gulp-flatten-custom');


gulp.task('images', ['sprites', 'images:global', 'images:components', 'images:pages']);

// (TODO: Exclude spritesheet .scss files in page /images directories.)

gulp.task('images:global', function() {
  var target = config.directories.src.images + '/**/*';
  gulp.src(target)
    .pipe(gulp.dest(config.directories.build.images));
});


gulp.task('images:components', function() {
  var target = config.directories.src.components + '/**/images/**';
  gulp.src(target)
    .pipe(flatten({ excludePath: 'images' }))
    .pipe(gulp.dest(config.directories.build.images));
});


gulp.task('images:pages', function() {
  var target = config.directories.src.pages + '/**/images/**';
  gulp.src(target)
    .pipe(flatten({ excludePath: 'images' }))
    .pipe(gulp.dest(config.directories.build.images));
});
