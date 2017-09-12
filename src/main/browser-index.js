/* global document */
import createClient from './index.js';

// adapted from https://github.com/webpack/webpack/issues/595
function getCurrentScriptSrc() {
	if (document.currentScript) return document.currentScript.src;

	// this is unreliable if the script is loaded asynchronously
	const scripts = document.getElementsByTagName('script');
	return scripts[scripts.length-1].src;
}

function derivePath(scriptSrc) {
	return scriptSrc.substring(0, scriptSrc.lastIndexOf('/'));
}

// allows webpack to dynamically load chunks on the same path as where the index script is loaded.
__webpack_public_path__ = derivePath(getCurrentScriptSrc()) + '/'; // eslint-disable-line

export default createClient;