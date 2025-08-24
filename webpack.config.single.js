/* eslint-disable import/unambiguous */
const webpack = require('webpack');
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  entry: './src/main/browser-index.js',
  target: 'web',

  output: {
    library: 'JsonUrl',
    libraryTarget: 'umd',
    libraryExport: 'default',
    filename: 'json-url-single.js',
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

  // keep their explicit "global" behavior
  node: { global: false },

  resolve: {
    fallback: {
      assert: require.resolve('assert/'),
      util: require.resolve('util/'),
      buffer: require.resolve('buffer/'),
      stream: require.resolve('stream-browserify'),
      path: false,
    },
  },

  plugins: [
    new webpack.optimize.LimitChunkCountPlugin({ maxChunks: 1 }),
    new webpack.DefinePlugin({ global: 'window' }),
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
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
