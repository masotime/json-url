# json-url

[![npm downloads][downloads-image]][downloads-url] [![Build Status][travis-image]][travis-url] [![Dependency Status][daviddm-image]][daviddm-url] [![Coverage Status][coverage-image]][coverage-url]

Generate a URL-friendly representations of some arbtirary JSON data in as small a space as possible.

## Usage

* Although not all algorithms are asynchronous, all functions return Promises to ensure compatibility.
* Instantiate an instance with appropriate compression codec ("lzw", "lzma", "lzstring") before using.

### Compress

```
	var codec = require('json-url')('lzw');
	var obj = { one: 1, two: 2, three: [1,2,3], four: 'red pineapples' };
	codec.compress(obj).then(result => console.log(result));
```

### Decompress

```
	var codec = require('json-url')('lzma');
	codec.decompress(someCompressedString).then(json => { /* operate on json */ })
```

### Stats

```
	var codec = require('json-url')('lzstring');
	codec.stats(obj).then(
		({ rawencoded, compressedencoded, compression }) => {
			console.log(`Raw URI-encoded JSON string length: ${rawencoded}`);
			console.log(`Compressed URI-encoded JSON string length: ${compressedencoded}`);
			console.log(`Compression ratio (raw / compressed): ${compression}`);
		}
	);
```

## Motivation

Typically when you want to shorten a long URL with large amounts of data parameters, the approach is to generate a "short URL" where compression is achieved by using a third-party service which stores the true URL and redirects the user (e.g. bit.ly or goo.gl).

However, if you want to:

* share bookmarks with virtually unlimited combinations of state and/or
* want to avoid the third-party dependency

you would encode the data structure (typically JSON) in your URL, but this often results in very large URLs.

This approach differs by removing that third-party dependency and encodes it using common compression algorithms such as LZW or LZMA.

Note: It is arguable that a custom dictionary / domain specific encoding would ultimately provide better compression, but here we want to
* avoid maintaining such a dictionary and/or
* retain cross-application compatibility (otherwise you need a shared dictionary)

## Approach

I explored several options, the most popular one being [MessagePack][1]. However, I noticed that it did not give the best possible compression as compared to [LZMA][2] and [LZW][3].

At first I tried to apply the binary compression directly on a stringified JSON, then I realised that packing it first resulted in better compression.

For small JS objects, LZW largely outperformed LZMA, but for the most part you'd probably be looking to compress large JSON data rather than small amounts (otherwise a simple stringify + base64 is sufficient). You can choose to use whatever codec suits you best.

In addition, there is now support for [LZSTRING][5], although the URI encoding still uss urlsafe-base64 because LZSTRING still uses unsafe characters via their `compressToURIEncodedString` method - notably the [`+` character][6]

Finally, I went with [urlsafe-base64][4] to encode it in a URL-friendly format.

[1]: http://msgpack.org/index.html
[2]: https://www.npmjs.com/package/lzma
[3]: https://www.npmjs.com/package/node-lzw
[4]: https://www.npmjs.com/package/urlsafe-base64
[5]: http://pieroxy.net/blog/pages/lz-string/index.html
[6]: https://github.com/pieroxy/lz-string/blob/master/libs/lz-string.js#L15

[downloads-image]: https://img.shields.io/npm/dm/json-url.svg?style=flat-square
[downloads-url]: https://www.npmjs.com/package/json-url
[travis-image]: https://travis-ci.org/masotime/json-url.svg?bxeranch=master
[travis-url]: https://travis-ci.org/masotime/json-url
[daviddm-image]: https://david-dm.org/masotime/json-url.svg?theme=shields.io
[daviddm-url]: https://david-dm.org/masotime/json-url
[coverage-image]: https://coveralls.io/repos/github/masotime/json-url/badge.svg?branch=master
[coverage-url]: https://coveralls.io/github/masotime/json-url?branch=master