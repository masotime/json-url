// centralize all chunks in one file
export default {
	async msgpack() {
		const module = await import(/* webpackChunkName: "msgpack" */ 'msgpack5');
		const factory = module.default || module;
		return factory();
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
		const module = await import(/* webpackChunkName: "lzw" */ 'node-lzw');
		const lzw = module.default || module;
		return lzw;
	}
};
