/* eslint-disable import/unambiguous */
const webpackConfig = require('./webpack.config.js');

// // don't include the uglify plugin
// const karmaWebpackConfig = Object.assign({}, webpackConfig);
// delete karmaWebpackConfig.plugins;

module.exports = config => {
	config.set({
		frameworks: ['mocha'],
		files: ['test/index.js'],
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_DEBUG,
		browsers: ['ChromeHeadless'],
		autoWatch: false,
		concurrency: Infinity,
		preprocessors: {
			// add webpack as preprocessor
			'test/index.js': ['webpack'],
		},
		webpack: webpackConfig
	});
}