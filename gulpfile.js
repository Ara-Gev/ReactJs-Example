var gulp = require('gulp'),
	source = require('vinyl-source-stream'),
	buffer = require('vinyl-buffer'),
	uglify = require('gulp-uglify'),
	browserify = require('browserify'),
	babelify = require('babelify');

gulp.task('build', function () {
	browserify({
		entries: [ './app/application.jsx' ],
		extensions: [ '.js', '.jsx' ],
		debug: true
	})
		.transform(babelify.configure({
			presets: ["es2016", "react"]
		}))
		.bundle()
		.pipe(source('app.min.js'))
		.pipe(buffer())
		.pipe(uglify())
		.pipe(gulp.dest('./web/js'))
});