'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _lzma = require('./lzma');

var _lzma2 = _interopRequireDefault(_lzma);

var _lzstring = require('./lzstring');

var _lzstring2 = _interopRequireDefault(_lzstring);

var _lzw = require('./lzw');

var _lzw2 = _interopRequireDefault(_lzw);

var _pack = require('./pack');

var _pack2 = _interopRequireDefault(_pack);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	lzma: _lzma2.default, lzstring: _lzstring2.default, lzw: _lzw2.default, pack: _pack2.default
};
module.exports = exports['default'];