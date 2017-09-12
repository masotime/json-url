// centralize all chunks in one file
export default {
	async msgpack() {
		const msgpackFactory = await import(/* webpackChunkName: "msgpack" */ 'msgpack5');
		return msgpackFactory();
	},
	async safe64() {
		return await import(/* webpackChunkName: "safe64" */ 'urlsafe-base64');
	},
	async lzma() {
		const lzma = await import(/* webpackChunkName: "lzma" */ 'lzma');

		// this special condition is present because the web minified version has a slightly different export
		return lzma.compress ? lzma : lzma.LZMA;
	},
	async lzstring() {
		return await import(/* webpackChunkName: "lzstring" */ 'lz-string');
	},
	async lzw() {
		return await import(/* webpackChunkName: "lzw" */ 'node-lzw');
	}
};
