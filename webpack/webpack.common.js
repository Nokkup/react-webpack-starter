const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const { paths } = require('./paths');

const plugins = [
  new CleanWebpackPlugin(),
];

module.exports = {
  entry: paths.entry,
  output: {
    filename: 'main.[contenthash:8].js',
    path: paths.build,
  },
  plugins,
};
