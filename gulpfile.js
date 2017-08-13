var gulp = require('gulp'),
    watch = require('gulp-watch'),
    postcss = require('gulp-postcss'),
    autoprefixer = require('autoprefixer'),
    variables = require('postcss-simple-vars'),
    nested = require('postcss-nested'),
    imports = require('postcss-import'),
    browserSync = require('browser-sync').create();

gulp.task('watch', function(){
    browserSync.init({
        notify: false,
        server: {
            baseDir: "app"
        }
    });

    watch('./app/index.html', function(){
        browserSync.reload();
    });

    watch('./app/assets/styles/**/*.css', function(){
        gulp.start('cssInject');
    })
})

gulp.task('default', function(){
    console.log("Default Gulp Task is running. The command is just 'gulp'.");
});

gulp.task('html', function(){
    console.log('The index.html file has been updated!');
})

gulp.task('styles', function(){
    return gulp.src('./app/assets/styles/styles.css')
        .pipe(postcss([imports, variables, nested, autoprefixer]))
        .pipe(gulp.dest('./app/temp/styles'));
})

gulp.task('cssInject', ['styles'], function(){
    return gulp.src('./app/temp/styles/styles.css')
        .pipe(browserSync.stream());
});