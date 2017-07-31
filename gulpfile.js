var gulp = require('gulp'),
    watch = require('gulp-watch');

gulp.task('default', function(){
    console.log("Default Gulp Task is running. Initialized.");
});

gulp.task('watch', function(){
    watch('./app/index.html', function(){
        gulp.start('html');
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('styles');
    })
})

gulp.task('html', function(){
    console.log('The index.html file has been updated!');
})

gulp.task('styles', ['runthisfirst'], function(){
    console.log('A CSS file has been updated!');
})

gulp.task('runthisfirst', function(){
    console.log('This will run too without doing anything.');
})
