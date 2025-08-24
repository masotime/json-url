/* eslint-disable import/unambiguous */
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/main/browser-index.js',
  target: 'web', // make intent explicit

  output: {
    library: 'JsonUrl',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'json-url.js',
    chunkFilename: 'json-url-[name].js',
    path: __dirname + '/dist/browser',
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            babelrc: false,
            presets: ['@babel/preset-env'],
            plugins: [
              '@babel/plugin-syntax-dynamic-import',
              [
                'module-resolver',
                {
                  root: ['src'],
                  alias: {
                    // keep these for browser build
                    lzma: require.resolve('lzma/src/lzma_worker-min'),
                    bluebird: require.resolve('bluebird/js/browser/bluebird.core.min.js'),
                  },
                },
              ],
              '@babel/plugin-transform-runtime',
            ],
          },
        },
      },
    ],
  },

  // Webpack 5: explicitly polyfill the few Node bits your deps touch
  resolve: {
    fallback: {
      assert: require.resolve('assert/'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      // thanks to the lzma alias above, we don't need 'path' in the browser:
      path: false,
    },
  },

  plugins: [
    // Provide the globals many Node libs expect
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),

    // (optional) prune debug-only branches early
    new webpack.DefinePlugin({
      'process.env.NODE_DEBUG': JSON.stringify(''),
    }),
  ],

  mode: 'production',
  optimization: {
    minimize: true,
    minimizer: [new TerserPlugin()],
  },
};
