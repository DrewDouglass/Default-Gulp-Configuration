var gulp = require('gulp');
var postcss = require('gulp-postcss');

/* https://github.com/postcss/autoprefixer */
var autoprefixer = require('autoprefixer');
/* https://github.com/jonathantneal/precss */
var precss = require('precss');
/* https://github.com/postcss/postcss-nested */
var postcssnested = require('postcss-nested');
/* http://simplaio.github.io/rucksack/ */
var rucksack = require('rucksack-css');
/* https://github.com/cssdream/cssgrace */
var cssgrace = require('cssgrace');
/* https://github.com/jedmao/postcss-center */
var postcsscenter = require('postcss-center');
/* https://github.com/cssstats/postcss-cssstats */
var cssstats = require('postcss-cssstats');
var postcss = require('gulp-postcss');
/* https://github.com/azat-io/postcss-responsive-images */
var responsiveimages = require('postcss-responsive-images');

gulp.task('default', function(){
	var processors = [ 
		postcssnested(),
		precss(),  
		rucksack(),
		postcsscenter(),
		autoprefixer( { browsers: ['> 1%'] } ),
		responsiveimages(),
		//Run last
		require('cssgrace')
		];
	return gulp.src('./src/*.css')
	.pipe(postcss(processors))
	.pipe(gulp.dest('./dist'));
});

gulp.task('cssstats', function() {
    return gulp
        .src('./dist/style.css')
        .pipe(
            postcss([
                cssstats(
                    function(stats) {
                        console.log(stats);
                    }
                )
            ])
        );
});
