const { paths } = require('./paths');

const plugins = [
];

module.exports = {
  entry: paths.entry,
  output: {
    filename: 'main.[contenthash:8].js',
    path: paths.build,
    clean: true,
  },
  plugins,
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/,
        exclude: /node_modules/,
        use: ['babel-loader'],
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx"],
  },
};
