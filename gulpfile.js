'use strict';

var gulp = require('gulp');
var unitedcoreTasks = require('unitedcore-build');

unitedcoreTasks('message');

gulp.task('default', ['lint', 'coverage']);
