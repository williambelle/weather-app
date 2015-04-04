// Run predefined tasks whenever watched files are changed
module.exports = {
	jade : {
		files : [ 'src/index.jade' ],
		tasks : [ 'build' ]
	},
	options : {
		livereload : true
	}
};
