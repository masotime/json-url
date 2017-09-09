import jsonUrl from 'main/index.js';
import samples from './samples.json';
import ALGORITHMS from 'main/compress';

const algorithms = Object.keys(ALGORITHMS);

async function main() {

	const results = new Array(samples.length);

	for (const algorithm of algorithms) {
		const lib = jsonUrl(algorithm);
		let counter = 0;
		for (const datum of samples) {
			const { rawencoded, compressedencoded, compression } = await lib.stats(datum);
			results[counter] = results[counter] || {};
			results[counter].original = rawencoded;
			results[counter][algorithm] = {
				ratio: compression,
				compressed: compressedencoded
			};
			counter += 1;
		}
	}

	console.log(JSON.stringify(results, null, 2));
}

main();