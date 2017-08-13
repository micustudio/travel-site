var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    variables = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    imports = require('postcss-import');

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

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([imports, variables, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
})
