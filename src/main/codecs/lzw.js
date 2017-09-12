import LOADERS from 'main/loaders';

export default {
	pack: true,
	encode: true,
	compress: async input => Buffer.from((await LOADERS.lzw()).encode(input.toString('binary'))),
	decompress: async input => Buffer.from((await LOADERS.lzw()).decode(input), 'binary')
};