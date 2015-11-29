// Copy files
module.exports = {
  build: {
    files: [{
      expand: true,
      cwd: 'src/',
      src: ['js/**', 'css/**', 'img/**'],
      dest: 'www/',
    }, {
      expand: true,
      cwd: 'build/',
      src: ['css/**', 'templates/**'],
      dest: 'www/',
      nonull: true,
    }, {
      expand: true,
      cwd: 'bower_components/handlebars/',
      src: ['handlebars.runtime.min.js'],
      dest: 'www/js',
      nonull: true,
    }, {
      expand: true,
      cwd: 'bower_components/framework7/dist/',
      src: [
        'css/framework7.material.min.css',
        'css/framework7.material.colors.min.css',
        'js/framework7.min.js',
      ],
      dest: 'www/',
    }, ],
  },
};
