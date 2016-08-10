var gulp = require('gulp');
var browserify = require('browserify');
var source = require('vinyl-source-stream');
var vueify = require('vueify');

var bundle = function(src_file, dst_file, dst_folder) {
  return browserify({
    debug: true,
    // this is an array of all entry points
    // where Browserify starts to look for 
    // dependencies
    entries: [src_file]
  })
  .transform(vueify)
  .on('error', function(err) {console.error(err); this.emit('end'); })
  .bundle()
  // take the end result and place it to dist folder
  .pipe(source(dst_file))
  .pipe(gulp.dest(dst_folder));
};

gulp.task('bundle', function() {
  return bundle('src/main.js', 'bundle.js', 'build/');
});

gulp.task('default', ['bundle']);


