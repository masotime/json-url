/* eslint-disable import/unambiguous */
const UglifyJSPlugin = require('uglifyjs-webpack-plugin');

module.exports = {
	entry: './src/main/index.js',
	output: {
		library: 'JsonUrl',
		libraryTarget: 'umd',
		libraryExport: 'default',
		filename: 'browser/json-url.js',
		path: __dirname + '/dist'
	},
	module: {
		rules: [
			{
				test: /\.js$/,
				exclude: /(node_modules|bower_components)/,
				use: {
					loader: 'babel-loader',
					options: {
						plugins: ['transform-runtime']
					}
				}
			}
		],
	},
	resolve: {
		alias: {
			'lzma$': require.resolve('./src/webpack/lzma'),
			'bluebird$': require.resolve('./src/webpack/bluebird')
		}
	},
	plugins: [
		new UglifyJSPlugin({
			comments: false
		})
	]
};