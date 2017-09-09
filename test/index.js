/* global describe, it */
import assert from 'assert';
import createClient from 'main';
import { validate } from 'urlsafe-base64';

const DATA = {
	json: {
		"filters": {
			"amenities": [4, 55, 23],
			"budget_max": 80000,
			"budget_min": 50000,
			"event_types": [1, 2, 3],
			"neighborhoods": [4, 55, 502],
		},
		"page": 1,
		"search_fields": {
			"end_time": "11:00pm",
			"guests": "50",
			"region": 8,
			"start_date": "11-23-2015",
			"start_time": "8:00pm"
		},
		"search_for_name": "Name Search Test"
	}
};

DATA.json = {
	simple: 'string'
};

describe('json-url', () => {
	['lzw', 'lzma', 'lzstring'].forEach(algorithm => {
		describe(`using the ${algorithm} algorithm`, () => {
			const { compress, decompress, stats} = createClient(algorithm);

			it('compresses JSON via #compress to base64 format', async () => {
				const compressed = await compress(DATA.json);
				assert.ok(validate(compressed), `${compressed} is not valid base64`);
			});

			it('can decompress JSON compressed via #compress using #decompress', async () => {
				const compressed = await compress(DATA.json);
				const decompressed = await decompress(compressed);
				assert.equal(JSON.stringify(decompressed), JSON.stringify(DATA.json));
			});

			it('returns stats { rawencoded, compressedencoded, compression } via #stats', async () => {
				const result = await stats(DATA.json);
				assert.ok(result['rawencoded']);
				assert.ok(result['compressedencoded']);
				assert.ok(result['compression']);
			});
		});

	});
});
