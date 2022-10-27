const { merge } = require('webpack-merge');
const commonConfig = require('./webpack/webpack.common');

const buildModes = {
  development: 'development',
  production: 'production',
};

const buildMode = buildModes[process.env.NODE_ENV] || buildModes.dev;
const buildConfig = require(`./webpack/webpack.${buildMode}.js`);

module.exports = merge(commonConfig, buildConfig);
