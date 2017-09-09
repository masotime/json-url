import msgpackFactory from 'msgpack5';
import safe64 from 'urlsafe-base64';

import ALGORITHMS from 'main/compress';

const twoDigitPercentage = val => Math.floor((val * 10000) / 100);

export default function createClient(algorithm) {
	if (!ALGORITHMS.hasOwnProperty(algorithm)) throw new Error(`No such algorithm ${algorithm}`);

	const { pack, encode } = ALGORITHMS[algorithm];
	const msgpack = msgpackFactory();

	async function compress(json) {
		const packed = pack ? msgpack.encode(json) : JSON.stringify(json);
		console.log('Uncompressed buffer after packing', packed);
		const compressed = await ALGORITHMS[algorithm].compress(packed);
		console.log('Compressed buffer after packing', compressed);
		const encoded = encode ? safe64.encode(compressed) : compressed;
		console.log('Encoded string after encoding', encoded);
		return encoded;
	}

	async function decompress(string) {
		const decoded = encode ? safe64.decode(string) : string;
		console.log('Decoded Buffer', decoded);
		const decompressed = await ALGORITHMS[algorithm].decompress(decoded);
		console.log('Decompressed buffer before unpacking', decompressed);
		const unpacked = pack ? msgpack.decode(decompressed) : JSON.parse(decompressed);
		console.log('Unpacked JSON', unpacked);
		return unpacked;
	}

	async function stats(json) {
		const rawencoded = encodeURIComponent(JSON.stringify(json));
		const compressed = await compress(json);

		return {
			rawencoded: rawencoded.length,
			compressedencoded: compressed.length,
			compression: twoDigitPercentage(rawencoded.length / compressed.length * 10000)
		};
	}

	return { compress, decompress, stats };
}
