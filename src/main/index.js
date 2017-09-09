import msgpackFactory from 'msgpack5';
import safe64 from 'urlsafe-base64';

import apis from 'main/compress';

const algorithm = 'lzma';
const msgpack = msgpackFactory();

function compress(json, cb) {
	const packed = msgpack.encode(json);

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
			return cb(null, msgpack.decode(result));
		} catch (e) {
			return cb(e);
		}
	});
}

export default {
	compress: compress,
	decompress : decompress,
	stats: function (json, cb) {
		var stringified = typeof json !== 'string' ? JSON.stringify(json) : json,
			rawencoded = encodeURIComponent(stringified);

		compress(json, function(err, result) {
			if (err) return cb(err);

			cb(null, {
				rawencoded: rawencoded.length,
				compressedencoded: result.length,
				ratio: (Math.floor(result.length / rawencoded.length * 10000) / 100)
			});
		});

	}
};