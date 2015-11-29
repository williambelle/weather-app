(function($$) {
  'use strict';

  WeatherApp.SearchController = function() {
    var self = this;
    this.searchBar = WeatherApp.App.searchbar('.searchbar', {
      customSearch: true,
      onDisable: function(s) {
        $$('.popup input[type="search"]')[0].blur();
        WeatherApp.App.closeModal('.popup');
      },
      onSearch: function(s, q) {
        self.searchLocation(s.query);
      },
      onClear: function(s) {
        $$('.popup .search-results').html('');
      },
    });
    this.searchTimeout = 0;
  };

  WeatherApp.SearchController.prototype.init = function() {
    var self = this;
    $$('.popup').on('open', function() {
      self.searchBar.enable();
    });
    $$('.popup').on('opened', function() {
      $$('.popup input[type="search"]')[0].focus();
    });
  };

  WeatherApp.SearchController.prototype.searchLocation = function(search) {
    var self = this;
    if (search.trim() === '') {
      $$('.popup .search-results').html('');
      return;
    }

    if (this.searchTimeout) {
      clearTimeout(this.searchTimeout);
    }

    var query = this.buildQuery(search);
    this.searchTimeout = setTimeout(function() {
      $$.get(query, self.buildResults);
    }, 300);
  };

  WeatherApp.SearchController.prototype.buildQuery = function(search) {
    var query = 'select * from geo.places where text="' + search + '"';
    query = encodeURIComponent(query);
    return 'http://query.yahooapis.com/v1/public/yql?q=' + query +
      '&format=json';
  };

  WeatherApp.SearchController.prototype.buildResults = function(results) {
    results = JSON.parse(results);
    $$('.popup .preloader').hide();
    var html = '';
    if (results.query.count > 0) {
      var places = results.query.results.place;
      html = WeatherApp.Templates[
          'src/templates/full/search-results.hbs'
        ]({places: places});
    }
    $$('.popup .search-results').html(html);
  };

})(Dom7);
