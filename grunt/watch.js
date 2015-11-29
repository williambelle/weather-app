// Run predefined tasks whenever watched files are changed
module.exports = {
  jade: {
    files: ['src/index.jade', 'src/js/**/*.js', 'src/templates/**/*.hbs'],
    tasks: ['build'],
  },
  options: {
    livereload: true,
  },
};
