(function($$) {
  'use strict';

  WeatherApp.MainView = function() {
    this.html = WeatherApp.Templates[
      'src/templates/full/main.hbs'
    ]();
  };

  WeatherApp.MainView.prototype.render = function() {
    $$('#main-view').append(this.html);
  };

})(Dom7);
