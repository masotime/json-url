import msgpackFactory from 'msgpack5';
import safe64 from 'urlsafe-base64';

import ALGORITHMS from 'main/compress';

const twoDigitPercentage = val => Math.floor(val * 10000) / 10000;

export default function createClient(algorithm) {
	if (!ALGORITHMS.hasOwnProperty(algorithm)) throw new Error(`No such algorithm ${algorithm}`);

	const { pack, encode } = ALGORITHMS[algorithm];
	const msgpack = msgpackFactory();

	async function compress(json) {
		const packed = pack ? msgpack.encode(json) : JSON.stringify(json);
		const compressed = await ALGORITHMS[algorithm].compress(packed);
		const encoded = encode ? safe64.encode(compressed) : compressed;
		return encoded;
	}

	async function decompress(string) {
		const decoded = encode ? safe64.decode(string) : string;
		const decompressed = await ALGORITHMS[algorithm].decompress(decoded);
		const unpacked = pack ? msgpack.decode(decompressed) : JSON.parse(decompressed);
		return unpacked;
	}

	async function stats(json) {
		const raw = JSON.stringify(json);
		const rawencoded = encodeURIComponent(raw);
		const compressed = await compress(json);

		return {
			raw: raw.length,
			rawencoded: rawencoded.length,
			compressedencoded: compressed.length,
			compression: twoDigitPercentage(rawencoded.length / compressed.length)
		};
	}

	return { compress, decompress, stats };
}
