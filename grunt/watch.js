// Run predefined tasks whenever watched files are changed
module.exports = {
  jade: {
    files: ['src/index.jade', 'src/js/**/*.js'],
    tasks: ['build'],
  },
  options: {
    livereload: true,
  },
};
