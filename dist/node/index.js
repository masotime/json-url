'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

exports.default = createClient;

var _codecs = require('./codecs');

var _codecs2 = _interopRequireDefault(_codecs);

var _loaders = require('./loaders');

var _loaders2 = _interopRequireDefault(_loaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var twoDigitPercentage = function twoDigitPercentage(val) {
	return Math.floor(val * 10000) / 10000;
};

function createClient(algorithm) {
	var compress = function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(json) {
			var packed, compressed, encoded;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							if (!pack) {
								_context.next = 7;
								break;
							}

							_context.next = 3;
							return _loaders2.default.msgpack();

						case 3:
							_context.t1 = json;
							_context.t0 = _context.sent.encode(_context.t1);
							_context.next = 8;
							break;

						case 7:
							_context.t0 = (0, _stringify2.default)(json);

						case 8:
							packed = _context.t0;
							_context.next = 11;
							return _codecs2.default[algorithm].compress(packed);

						case 11:
							compressed = _context.sent;

							if (!encode) {
								_context.next = 19;
								break;
							}

							_context.next = 15;
							return _loaders2.default.safe64();

						case 15:
							_context.t3 = compressed;
							_context.t2 = _context.sent.encode(_context.t3);
							_context.next = 20;
							break;

						case 19:
							_context.t2 = compressed;

						case 20:
							encoded = _context.t2;
							return _context.abrupt('return', encoded);

						case 22:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, this);
		}));

		return function compress(_x) {
			return _ref.apply(this, arguments);
		};
	}();

	var decompress = function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(string) {
			var decoded, decompressed, unpacked;
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							if (!encode) {
								_context2.next = 7;
								break;
							}

							_context2.next = 3;
							return _loaders2.default.safe64();

						case 3:
							_context2.t1 = string;
							_context2.t0 = _context2.sent.decode(_context2.t1);
							_context2.next = 8;
							break;

						case 7:
							_context2.t0 = string;

						case 8:
							decoded = _context2.t0;
							_context2.next = 11;
							return _codecs2.default[algorithm].decompress(decoded);

						case 11:
							decompressed = _context2.sent;

							if (!pack) {
								_context2.next = 19;
								break;
							}

							_context2.next = 15;
							return _loaders2.default.msgpack();

						case 15:
							_context2.t3 = decompressed;
							_context2.t2 = _context2.sent.decode(_context2.t3);
							_context2.next = 20;
							break;

						case 19:
							_context2.t2 = JSON.parse(decompressed);

						case 20:
							unpacked = _context2.t2;
							return _context2.abrupt('return', unpacked);

						case 22:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, this);
		}));

		return function decompress(_x2) {
			return _ref2.apply(this, arguments);
		};
	}();

	var stats = function () {
		var _ref3 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3(json) {
			var raw, rawencoded, compressed;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							raw = (0, _stringify2.default)(json);
							rawencoded = encodeURIComponent(raw);
							_context3.next = 4;
							return compress(json);

						case 4:
							compressed = _context3.sent;
							return _context3.abrupt('return', {
								raw: raw.length,
								rawencoded: rawencoded.length,
								compressedencoded: compressed.length,
								compression: twoDigitPercentage(rawencoded.length / compressed.length)
							});

						case 6:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, this);
		}));

		return function stats(_x3) {
			return _ref3.apply(this, arguments);
		};
	}();

	if (!_codecs2.default.hasOwnProperty(algorithm)) throw new Error('No such algorithm ' + algorithm);

	var _ALGORITHMS$algorithm = _codecs2.default[algorithm],
	    pack = _ALGORITHMS$algorithm.pack,
	    encode = _ALGORITHMS$algorithm.encode;


	return { compress: compress, decompress: decompress, stats: stats };
}
module.exports = exports['default'];