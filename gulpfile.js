var gulp = require('gulp');
var postcss = require('gulp-postcss');

/* https://github.com/postcss/autoprefixer */
var autoprefixer = require('autoprefixer');
/* https://github.com/jonathantneal/precss */
var precss = require('precss');
/* http://simplaio.github.io/rucksack/ */
var rucksack = require('rucksack-css');
/* https://github.com/cssdream/cssgrace */
var cssgrace = require('cssgrace');

gulp.task('default', function(){
	var processors = [ 
		precss(),  
		rucksack(),
		autoprefixer( { browsers: ['> 1%'] } ),
		//Run this last to fix any older browser issues possible 
		require('cssgrace')
		];
	return gulp.src('./src/*.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dist'));
});