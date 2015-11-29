(function() {
  'use strict';

  WeatherApp.MainController = function() {};

  WeatherApp.MainController.prototype.init = function() {
    // Render main view
    var mainView = new WeatherApp.MainView();
    mainView.render();

    var searchController = new WeatherApp.SearchController();
    searchController.init();
  };

})();
