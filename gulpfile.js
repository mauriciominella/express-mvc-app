// Gulpfile.js
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , gulpBowerFiles = require('gulp-bower-files');

gulp.task('monitor-changes', function () {
  nodemon({ script: 'app.js'
          , ext: 'html js'
          , ignore: ['bower_components/.*', 'public/.*']
          , tasks: ['bower-files']
        })
    .on('restart', function () {
      console.log('restarted!')
    })
})


 gulp.task('bower-files', function(){
   gulpBowerFiles().pipe(gulp.dest('./public'));
   console.log('public files generated!');
 });

gulp.task('dev', ['monitor-changes']);