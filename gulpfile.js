var gulp = require("gulp"),
    jade = require("gulp-jade"),
    less = require("gulp-less"),
    connect = require("gulp-connect"),
    browserify = require("gulp-browserify");

var config = {
  src: "src",
  dest: "out"
};



gulp.task("jade", function() {
  gulp.src(config.src + "/*.jade")
      .pipe(jade())
      .pipe(gulp.dest(config.dest))
      .pipe(connect.reload());
});

gulp.task("less", function() {
  gulp.src(config.src + "/styles/beginning-javascript.less")
      .pipe(less())
      .pipe(gulp.dest(config.dest + "/styles"))
      .pipe(connect.reload());
});
var watchStyles = [config.src + "/styles/**/*.less"];

gulp.task("browserify", function() {
  gulp.src(config.src + "/scripts/beginning-javascript.js")
      .pipe(browserify({
          transform: ["reactify"]
      }))
      .pipe(gulp.dest(config.dest + "/scripts"))
      .pipe(connect.reload());
});
var watchScripts = [
  config.src + "/scripts/**/*.js",
  config.src + "/scripts/**/*.jsx"
];

gulp.task("server", ["jade", "less", "browserify"], function() {
  connect.server({
    root: config.dest,
    livereload: true
  });

  gulp.watch(watchScripts, ["browserify"]);
  gulp.watch(watchStyles, ["less"]);


});

gulp.task("default", ["server"]);
