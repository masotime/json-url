
export default {
	pack: true,
	encode: true,
	compress: async input => {
		const lzw = await import(/* webpackChunkName: "lzw" */ 'node-lzw');
		return Buffer.from(lzw.encode(input.toString('binary')));
	},
	decompress: async input => {
		const lzw = await import(/* webpackChunkName: "lzw" */ 'node-lzw');
		return Buffer.from(lzw.decode(input), 'binary');
	}
};