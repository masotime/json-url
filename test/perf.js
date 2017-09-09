import lib from 'main/index.js';
import samples from './samples.json';

async function main() {
	for (const datum of samples) {
		try {
			const result = await lib.stats(datum);
			console.log(result);
		} catch (err) {
			console.error(err);
		}
	}
}

main();