// The actual grunt server settings
module.exports = function(grunt, options) {
	"use strict";

	return {
		build : {
			options: {
				port : 8100,
				base : 'www/',
				hostname : '*',
				middleware : function(connect) {
					return [ require('connect-livereload')(),
						connect.static('www/') ];
				}
			}
		}
	};
};
