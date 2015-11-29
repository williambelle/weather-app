(function(Framework7, $$) {
  'use strict';


  var myApp = {
    initialize: function() {
      WeatherApp.App = new Framework7({
        modalTitle: 'Weather App',
      });
      this.render();
    },
    render: function() {
      var mainController = new WeatherApp.MainController();
      mainController.init();
    },
  };

  // Initialize app
  myApp.initialize();

})(Framework7, Dom7);
