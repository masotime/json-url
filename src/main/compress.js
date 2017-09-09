// normalizes the APIs for various npm compression modules
// Both lzma and node-lzw modules probably return arrays
// rather than buffers for the sake of client-side Javascript support.

import lzma from 'lzma';
import lzw from 'node-lzw';
import lzstring from 'lz-string';
import Promise from 'bluebird';

export default {
	lzw: {
		pack: true,
		encode: true,
		compress: async input => new Buffer(lzw.encode(input)),
		decompress: async input => lzw.decode(new Buffer(input))
	},
	lzma: {
		pack: true,
		encode: true,
		compress: async input =>
			new Promise((ok, fail) =>
				lzma.compress(input, 9, (byteArray, err) => {
					if (err) return fail(err);
					return ok(new Buffer(byteArray));
				})
			),
		decompress: async input =>
			new Promise((ok, fail) =>
				lzma.decompress(input, (byteArray, err) => {
					if (err) return fail(err);
					return ok(new Buffer(byteArray));
				})
			)
	},
	lzstring: {
		pack: false,
		encode: true,
		compress: async string => new Buffer(lzstring.compress(string)),
		decompress: async buffer => lzstring.decompress(buffer.toString())
	}
}
