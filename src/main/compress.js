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
		compress: async input => Buffer.from(lzw.encode(input.toString('binary'))),
		decompress: async input => Buffer.from(lzw.decode(input), 'binary')
	},
	lzma: {
		pack: true,
		encode: true,
		compress: async input =>
			new Promise((ok, fail) =>
				lzma.compress(input, 9, (byteArray, err) => {
					if (err) return fail(err);
					return ok(Buffer.from(byteArray));
				})
			),
		decompress: async input =>
			new Promise((ok, fail) =>
				lzma.decompress(input, (byteArray, err) => {
					if (err) return fail(err);
					return ok(Buffer.from(byteArray));
				})
			)
	},
	lzstring: {
		pack: false,
		encode: true,
		compress: async string => Buffer.from(lzstring.compressToUint8Array(string)),
		decompress: async buffer => lzstring.decompressFromUint8Array(buffer)
	}
}
