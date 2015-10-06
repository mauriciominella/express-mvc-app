// Gulpfile.js
var gulp = require('gulp')
  , nodemon = require('gulp-nodemon')
  , gulpBowerFiles = require('gulp-bower-files');

gulp.task('dev', function () {
  nodemon({ script: 'app.js'
          , ext: 'html js'
          , ignore: ['ignored.js']
          //, tasks: ['bower-files']
        })
    .on('restart', function () {
      console.log('restarted!')
    })
})


 gulp.task('bower-files', function(){
   //gulpBowerFiles().pipe(gulp.dest('./public'));
   //console.log('public files generated!');
 });
