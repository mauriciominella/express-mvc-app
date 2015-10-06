// Gulpfile.js
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , gulpBower = require('gulp-bower');

gulp.task('monitor-changes', function () {
  nodemon({ script: 'app.js'
          , ext: 'html js'
          , ignore: ['bower_components/.*', 'public/.*']
        })
    .on('restart', function () {
      console.log('restarted!')
    })
})


 gulp.task('bower', function(){
   return gulpBower().pipe(gulp.dest('./public'));
 });

gulp.task('dev', ['monitor-changes']);