'use strict';

var expect = require('expect'),
    jsonurl = require('./'),
    Promise = require('bluebird'),
    DATA = {};

DATA.json = {
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
};

describe('json-url', function () {
  describe('#compress()', function () {
    it('Should produce a shorter string', function () {
      var lengthOfRawJSON = JSON.stringify(DATA.json).length;

      jsonurl.compress(DATA.json, function (err, result) {
        if (err) throw err;
        expect(result.length < lengthOfRawJSON).toBe(true);
        expect(result).toBe('XQAAAALbAAAAAAAAAABCKcjGk5HEXfZ_irAzWI5smk4U224-XbP8lQ6YYCU5p-w2SkyQtlmfT0VvnCdsfHm2H3--vg78vBOgRpDySu7Zzo8mJRPoQz_ZpMcCzPuxBy37YAs8Nfsx0PzXOkXo4qv3JMVgpdA04vBd0e5Cmn16Un25590ay51jHGD3vQZCciO7wPuv_ofXSFZVhhnkZoj8AY87eMhQ5tautP2CHJ_HvXhJ0KaLLyllpTmipLE3wAtoD8Bk3HeOd_35AkA');
      });
    });
    
  });

  describe('#decompress()', function () {
    it('Should reproduce the original input', function ()  {
      function decompress (compressedStr) {
        return new Promise(function (resolve, reject) {
          jsonurl.decompress(compressedStr, function (err, result) {
            if (err) return reject(err);

            resolve(result);
          });
        });
      }

      function compress (data) {
        return new Promise( function (resolve, reject) {
          jsonurl.compress(DATA.json, function (err, result) {
            if (err) return reject(err);
            resolve(result);
          });
        });
      }

      function testDecompressedObj (jsonObj) {
        expect(jsonObj).toEqual(DATA.json);
      }

      compress(DATA.json)
      .then(decompress)
      .then(testDecompressedObj)
      .catch(function (err) {
        console.error(err);
      });
    });
    
  });
  
});
