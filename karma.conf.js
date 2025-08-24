/* eslint-disable import/unambiguous */
const webpack = require('webpack');
const prodWebpackConfig = require('./webpack.config.js');

// Deep clone that preserves RegExp
function deepClone(x) {
  if (x instanceof RegExp) return new RegExp(x.source, x.flags);
  if (Array.isArray(x)) return x.map(deepClone);
  if (x && typeof x === 'object') {
    const out = {};
    for (const k of Object.keys(x)) out[k] = deepClone(x[k]);
    return out;
  }
  return x;
}

function makeKarmaWebpackConfig() {
  const cfg = deepClone(prodWebpackConfig);

  // Build from tests, not prod entry/output
  delete cfg.entry;
  cfg.output = { filename: '[name].js' }; // no path, no hashing

  cfg.mode = 'development';
  cfg.devtool = 'inline-source-map';
  cfg.target = 'web';

  // Disable prod-only stuff
  cfg.plugins = [];
  cfg.optimization = { minimize: false, splitChunks: false, runtimeChunk: false };

  // ----- IMPORTANT: keep your lzma alias for browser -----
  // (Do NOT delete alias.lzma here.)
  // -------------------------------------------------------

  // Add Webpack 5 Node polyfills for browser
  cfg.resolve = cfg.resolve || {};
  cfg.resolve.fallback = {
    ...(cfg.resolve.fallback || {}),
    assert: require.resolve('assert/'),
    util: require.resolve('util/'),
    path: require.resolve('path-browserify'),
    buffer: require.resolve('buffer/'),
    stream: require.resolve('stream-browserify'),
  };

  // Provide globals commonly expected by libs
  cfg.plugins.push(
    new webpack.ProvidePlugin({
      Buffer: ['buffer', 'Buffer'],
      process: ['process'],
    })
  );

  return cfg;
}

module.exports = (config) => {
  config.set({
    frameworks: ['mocha', 'webpack'],
    files: [{ pattern: 'test/index.js', watched: false }],
    preprocessors: {
      'test/index.js': ['webpack'],
      'test/**/*.spec.js': ['webpack'],
    },
    webpack: makeKarmaWebpackConfig(),
    webpackMiddleware: { stats: { all: false, errors: true, warnings: true, errorDetails: true } },

    reporters: ['progress'],
    browsers: ['ChromeHeadless'],
    singleRun: true,
    logLevel: config.LOG_DEBUG,
  });
};
