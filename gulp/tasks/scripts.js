var gulp = require('gulp'),
    webpack = require('webpack');

gulp.task('scripts', function(callback) {
    webpack(require('../../webpack.config.js'), function(err, stats){
        if (err) {
            console.log(err.toString());
        }
        console.log("Horray! Webpack has completed. Here are the stats.");
        console.log(stats.toString());
        callback();
    });
});