'use strict';

const gulp = require('gulp'),
      mocha = require('gulp-mocha'),
      babel = require('babel-core/register'),
      getVersion = require('itsa-react-server-webpack-builder').getVersion;

const cb = () => {
    const versions = getVersion(),
          developmentString = versions.developmentString,
          testdir = './src/'+developmentString+'/tests/*.js';
      // patterns with the same form as gulp.src(patterns)
    return gulp.src([testdir], {read: false})
        .pipe(mocha({
            reporter: 'progress',
            compilers: {
                js: babel
            }
        }));
};

module.exports = cb;