// Compile Jade templates
module.exports = {
  compile: {
    options: {
      client: false,
      pretty: true,
    },
    files: [{
      cwd: 'src/',
      src: 'index.jade',
      dest: 'www/',
      expand: true,
      ext: '.html',
    },],
  },
};
