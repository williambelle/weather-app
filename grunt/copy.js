// Copy files
module.exports = {
	build : {
		files : [ {
			expand : true,
			cwd : 'src/',
			src : [ 'js/**', 'css/**', 'img/**' ],
			dest : 'www/'
		}, {
			expand : true,
			cwd : 'bower_components/framework7/dist/',
			src : [ 'css/framework7.min.css', 'js/framework7.min.js' ],
			dest : 'www/'
		} ]
	}
};
