# Gulp and PostCSS.
## The new hotness.

Please view gulpfile.js or packages.json for required modules. Please be careful, this is setup to run by just executing the gulp command
without any arguments.

# Usage
### Default
	gulp
Main functions. Will compile CSS files and run them through packages listed below. Also runs gulp watch, so this only needs to be run once. `ctrl+c` to quit.

### ie8
	gulp ie8
Run only after the main style has been generated and only IF you're having issues in IE8 or lower. Will add a separate folder under ie/{filename}

### gulp cssstats
	gulp cssstats
Returns stats about the CSS file(s) in question to the console.

# Packages
By default, the styles are run through the following packages unless otherwise noted.

* https://github.com/postcss/autoprefixer 

* https://github.com/jonathantneal/precss 

* https://github.com/postcss/postcss-nested 

* http://simplaio.github.io/rucksack/ 

* https://github.com/jedmao/postcss-center 

* https://github.com/cssstats/postcss-cssstats 

* https://github.com/azat-io/postcss-responsive-images 

* https://github.com/jonathantneal/oldie (**Only run if gulp ie8 is used**)

* https://github.com/jonathantneal/postcss-write-svg 

* https://github.com/jonathantneal/postcss-unroot 

* https://github.com/postcss/postcss-calc 

* https://github.com/jedmao/postcss-circle

* https://github.com/jedmao/postcss-triangle

* https://www.npmjs.com/package/postcss-image-sizes

* https://github.com/iamvdo/postcss-opacity

* https://github.com/archana-s/postcss-flexbox
