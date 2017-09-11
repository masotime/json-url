export default {
	pack: false,
	encode: true,
	compress: async string => {
		const lzstring = await import(/* webpackChunkName: "lzstring" */ 'lz-string');
		return Buffer.from(lzstring.compressToUint8Array(string));
	},
	decompress: async buffer => {
		const lzstring = await import(/* webpackChunkName: "lzstring" */ 'lz-string');
		return lzstring.decompressFromUint8Array(buffer);
	}
};