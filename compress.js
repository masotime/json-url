// normalizes the APIs for various npm compression modules
// Both lzma and node-lzw modules probably return arrays
// rather than buffers for the sake of client-side Javascript support.

'use strict';

var lzma = require('lzma'),
	lzw = require('node-lzw');

function safeCallback(operation, cb) {
	try {
		return cb(null, operation());
	} catch(err) {
		return cb(err);
	}
}

module.exports = {
	lzw: {
		compress: function(buffer, ratio, cb) {
			safeCallback(function () { return new Buffer(lzw.encode(buffer)); }, cb);
		},
		decompress: function(buffer, cb) {
			safeCallback(function () { return new Buffer(lzw.decode(buffer)); }, cb);
		}
	},
	lzma: {
		compress: function(buffer, ratio, cb) {
			lzma.compress(buffer, ratio, function onComplete(byteArray) {
				safeCallback(function () { return new Buffer(byteArray); }, cb);
			});
		},
		decompress: function(buffer, cb) {
			lzma.decompress(buffer, function onComplete(byteArray) {
				safeCallback(function () { return new Buffer(byteArray); }, cb);
			});
		}
	}
};