"use strict";

const gulp = require("gulp");
const sass = require("gulp-sass");
const pug = require("gulp-pug");

sass.compiler = require("node-sass");

gulp.task("sass", function() {
  return gulp
    .src("src/scss/style.scss")
    .pipe(sass().on("error", sass.logError))
    .pipe(gulp.dest("build"));
});
gulp.task("pug", function() {
  return gulp
    .src("src/pug/index.pug")
    .pipe(
      pug({
        pretty: true
      })
    )
    .pipe(gulp.dest("build"));
});

gulp.task("watch", function() {
  gulp.watch("src/scss/style.scss", gulp.parallel("sass"));
  gulp.watch("src/pug/index.pug", gulp.parallel("pug"));
});
