// Precompile Handlebars templates
module.exports = {
  options: {
    namespace: 'WeatherApp.Templates',
  },

  build: {
    files: {
      'build/templates/all.js': ['src/templates/**/*.hbs'],
    },
  },
};
