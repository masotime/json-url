import LOADERS from 'main/loaders';

export default {
	pack: true,
	encode: true,
	compress: async input => {
		const lzma = await LOADERS.lzma();
		return new Promise((ok, fail) =>
			lzma.compress(input, 9, (byteArray, err) => {
				if (err) return fail(err);
				return ok(Buffer.from(byteArray));
			})
		)
	},
	decompress: async input => {
		const lzma = await LOADERS.lzma();
		return new Promise((ok, fail) =>
			lzma.decompress(input, (byteArray, err) => {
				if (err) return fail(err);
				return ok(Buffer.from(byteArray));
			})
		)
	}
};