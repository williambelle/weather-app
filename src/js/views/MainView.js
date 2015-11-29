(function($$) {
  'use strict';

  WeatherApp.MainView = function() {
    this.mainView = WeatherApp.Templates[
      'src/templates/full/main.hbs'
    ]();
    this.search = WeatherApp.Templates[
      'src/templates/full/search.hbs'
    ]();
  };

  WeatherApp.MainView.prototype.render = function() {
    $$('#main-view').append(this.mainView);
    $$('#search').append(this.search);
  };

})(Dom7);
