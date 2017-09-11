/* global describe, it */
import assert from 'assert';
import createClient from 'main';
import { validate } from 'urlsafe-base64';
import samples from './samples.json'

describe('json-url', () => {
	samples.forEach(sample => {
		describe(`When attempting to compress ${JSON.stringify(sample).slice(0, 50)}...`, () => {
			['pack', 'lzw', 'lzma', 'lzstring'].forEach(algorithm => {
				describe(`using the ${algorithm} algorithm`, () => {
					const client = createClient(algorithm);

					it('compresses JSON via #compress to base64 format', async () => {
						const compressed = await client.compress(sample);
						assert.ok(validate(compressed), `${compressed} is not valid base64`);
					});

					it('can decompress JSON compressed via #compress using #decompress', async () => {
						const compressed = await client.compress(sample);
						const decompressed = await client.decompress(compressed);
						assert.equal(JSON.stringify(decompressed), JSON.stringify(sample));
					});

					it('returns stats { rawencoded, compressedencoded, compression } via #stats', async () => {
						const result = await client.stats(sample);
						assert.ok(result['rawencoded']);
						assert.ok(result['compressedencoded']);
						assert.ok(result['compression']);
					});
				}); // each algorithm
			});
		}); // each sample
	});
});
