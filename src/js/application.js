(function(Framework7, $$){
	"use strict";

	// Initialize app
	var myApp = new Framework7({
		modalTitle: 'Weather App'
	});

	// Add view
	var mainView = myApp.addView('.view-main', {
		dynamicNavbar: true
	});

})(Framework7, Dom7);
