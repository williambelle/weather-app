// Compile Sass to CSS
module.exports = {
  build: {
    options: {
      sourcemap: 'none',
    },
    files: [{
      expand: true,
      cwd: 'src/scss',
      src: ['*.scss'],
      dest: 'build/css/',
      ext: '.css',
    },],
  },
};
