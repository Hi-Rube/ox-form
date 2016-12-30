const fs = require('fs');
const gulp = require('gulp');
const webpack = require('gulp-webpack');
const nodemon = require('gulp-nodemon');

const webpackConfig = require('./webpack.base.config.js');

var paths = {
  SRC: __dirname + '/src/**/*.js',
  EXAMPLE: 'example/src/**/*.*',
  EXAMPLE_DIR: __dirname + '/example'
};

/** dev **/
gulp.task('webpack', () => gulp.src([paths.SRC])
    .pipe(webpack(webpackConfig))
    .pipe(gulp.dest('dist')));

gulp.task('dev', ['webpack'], () => {
  gulp.watch(paths.SRC, ['webpack', 'webpackExample']);
});

/** example **/
gulp.task('webpackExample', () => {
  var dirs = fs.readdirSync(paths.EXAMPLE_DIR);

  dirs.forEach(function(dir){
    gulp.src(['example/' + dir + '/src/**/*.js'])
    .pipe(webpack(require('./example/' + dir + '/webpack.config.js')))
    .pipe(gulp.dest('example/' + dir + '/dist'));
  });
});

gulp.task('example', ['webpackExample'], () => {
  nodemon({
    script: 'devServer.js',
    watch: [paths.EXAMPLE]
  });

  gulp.watch('example/**/src/**/*.js', ['webpackExample']);
});

gulp.task('devSenior', ['dev', 'example']);
