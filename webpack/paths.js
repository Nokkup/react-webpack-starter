const path = require('path');

module.exports = {
  paths: {
    src: path.resolve(__dirname, '../src/'),
    build: path.resolve(__dirname, '../build/'),
    entry: path.resolve(__dirname, '../src/', 'index.tsx'),
  },
};
