import ALGORITHMS from 'main/codecs';

const twoDigitPercentage = val => Math.floor(val * 10000) / 10000;

export default function createClient(algorithm) {
	if (!ALGORITHMS.hasOwnProperty(algorithm)) throw new Error(`No such algorithm ${algorithm}`);

	const { pack, encode } = ALGORITHMS[algorithm];

	const msgpackPromise = (async function getMsgPack() {
		const msgpackFactory = await import(/* webpackChunkName: "msgpack" */ 'msgpack5');
		return msgpackFactory();
	}());

	const safe64Promise = (async function getSafe64() {
		return await import(/* webpackChunkName: "safe64" */ 'urlsafe-base64');
	}());

	async function compress(json) {
		const packed = pack ? (await msgpackPromise).encode(json) : JSON.stringify(json);
		const compressed = await ALGORITHMS[algorithm].compress(packed);
		const encoded = encode ? (await safe64Promise).encode(compressed) : compressed;
		return encoded;
	}

	async function decompress(string) {
		const decoded = encode ? (await safe64Promise).decode(string) : string;
		const decompressed = await ALGORITHMS[algorithm].decompress(decoded);
		const unpacked = pack ? (await msgpackPromise).decode(decompressed) : JSON.parse(decompressed);
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
