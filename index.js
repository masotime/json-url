'use strict';

var lzma = require('lzma'),
	lzw = require('node-lzw'),
	msgpack = require('msgpack'),
	safe64 = require('urlsafe-base64');

var apis = require('./compress'),
	algorithm = 'lzma';

function compress(json, cb) {
	var packed = msgpack.pack(json);

	apis[algorithm].compress(packed, 9, function onComplete(err, result) {
		if (err) {
			return cb(err);
		}
		
		try {
			return cb(null, safe64.encode(result));		
		} catch(e) {
			return cb(e);
		}
		
	});
}

function decompress(compressed, cb) {
	apis[algorithm].decompress(safe64.decode(compressed), function onComplete(err, result) {
		if (err) {
			return cb(err);
		}

		try {
			return cb(null, msgpack.unpack(result));
		} catch (e) {
			return cb(e);
		}
	});
}

module.exports = {
	compress: compress,
	decompress : decompress,
	stats: function (json, cb) {
		var stringified = typeof json !== 'string' ? JSON.stringify(json) : json,
			rawencoded = encodeURIComponent(stringified),
			compressedencoded;

		compress(json, function(err, result) {
			if (err) {
				return cb(err);
			}

			cb(null, {
				rawencoded: rawencoded.length,
				compressedencoded: result.length,
				ratio: (Math.floor(result.length / rawencoded.length * 10000) / 100)
			});
		});

	}
};