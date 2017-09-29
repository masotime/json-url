'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _index = require('./index.js');

var _index2 = _interopRequireDefault(_index);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// adapted from https://github.com/webpack/webpack/issues/595
function getCurrentScriptSrc() {
	if (document.currentScript) return document.currentScript.src;

	// this is unreliable if the script is loaded asynchronously
	var scripts = document.getElementsByTagName('script');
	return scripts[scripts.length - 1].src;
} /* global document */


function derivePath(scriptSrc) {
	return scriptSrc.substring(0, scriptSrc.lastIndexOf('/'));
}

// allows webpack to dynamically load chunks on the same path as where the index script is loaded.
__webpack_public_path__ = derivePath(getCurrentScriptSrc()) + '/'; // eslint-disable-line

exports.default = _index2.default;
module.exports = exports['default'];