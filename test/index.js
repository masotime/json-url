/* global describe, it */
import assert from 'assert';
import createClient from 'main';
import { validate } from 'urlsafe-base64';
import samples from './samples.json'

describe('a test', () => {
	it('should work', () => {
		assert.ok(true);
	});
});

describe('json-url', () => {
	samples.forEach(sample => {
		describe(`When attempting to compress ${JSON.stringify(sample).slice(0, 50)}...`, () => {
			['pack', 'lzw', 'lzma', 'lzstring'].forEach(algorithm => {
				describe(`using the ${algorithm} algorithm`, () => {
					const { compress, decompress, stats} = createClient(algorithm);

					it('compresses JSON via #compress to base64 format', async () => {
						const compressed = await compress(sample);
						assert.ok(validate(compressed), `${compressed} is not valid base64`);
					});

					it('can decompress JSON compressed via #compress using #decompress', async () => {
						const compressed = await compress(sample);
						const decompressed = await decompress(compressed);
						assert.equal(JSON.stringify(decompressed), JSON.stringify(sample));
					});

					it('returns stats { rawencoded, compressedencoded, compression } via #stats', async () => {
						const result = await stats(sample);
						assert.ok(result['rawencoded']);
						assert.ok(result['compressedencoded']);
						assert.ok(result['compression']);
					});
				}); // each algorithm
			});
		}); // each sample
	});
});
