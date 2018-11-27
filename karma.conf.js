/* eslint-disable import/unambiguous */
const webpackConfig = require('./webpack.config.js');

// karma-webpack 2.x breaking fix
delete webpackConfig.entry;

// note: these mods mutate the original config
const MODS = { // eslint-disable-line no-unused-vars
	dontAliasLzma(config) {
		config.module.rules
			.filter(rule => rule.use && rule.use.loader === 'babel-loader')
			.forEach(rule => rule.use.options.plugins
				.filter(plugin => plugin[0] === 'module-resolver')
				.forEach(plugin => plugin[1].alias && delete plugin[1].alias.lzma)
			);
		return config;
	},
	dontUglify(config) {
		config.plugins = [];
		return config;
	}
}

module.exports = config => {
	config.set({
		frameworks: ['mocha'],
		files: ['test/index.js'],
		reporters: ['progress'],
		port: 9876,
		colors: true,
		logLevel: config.LOG_DEBUG,
		browsers: ['ChromeHeadless'],
		autoWatch: false, // if true, Karma will not exit after the tests
		concurrency: Infinity,
		preprocessors: {
			// add webpack as preprocessor
			'test/index.js': ['webpack'],
		},
		webpack: webpackConfig
	});
}