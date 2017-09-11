async function getLzma() {
		const lzma = await import(/* webpackChunkName: "lzma" */ 'lzma');

		// this special condition is present because the web minified version has a slightly different export
		return lzma.compress ? lzma : lzma.LZMA;
}

export default {
	pack: true,
	encode: true,
	compress: async input => {
		const lzma = await getLzma();
		return new Promise((ok, fail) =>
			lzma.compress(input, 9, (byteArray, err) => {
				if (err) return fail(err);
				return ok(Buffer.from(byteArray));
			})
		)
	},
	decompress: async input => {
		const lzma = await getLzma();
		return new Promise((ok, fail) =>
			lzma.decompress(input, (byteArray, err) => {
				if (err) return fail(err);
				return ok(Buffer.from(byteArray));
			})
		)
	}
};