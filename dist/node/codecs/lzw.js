'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

var _loaders = require('../loaders');

var _loaders2 = _interopRequireDefault(_loaders);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	pack: true,
	encode: true,
	compress: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(input) {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.t0 = Buffer;
							_context.next = 3;
							return _loaders2.default.lzw();

						case 3:
							_context.t1 = input.toString('binary');
							_context.t2 = _context.sent.encode(_context.t1);
							return _context.abrupt('return', _context.t0.from.call(_context.t0, _context.t2));

						case 6:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, undefined);
		}));

		return function compress(_x) {
			return _ref.apply(this, arguments);
		};
	}(),
	decompress: function () {
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(input) {
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.t0 = Buffer;
							_context2.next = 3;
							return _loaders2.default.lzw();

						case 3:
							_context2.t1 = input;
							_context2.t2 = _context2.sent.decode(_context2.t1);
							return _context2.abrupt('return', _context2.t0.from.call(_context2.t0, _context2.t2, 'binary'));

						case 6:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, undefined);
		}));

		return function decompress(_x2) {
			return _ref2.apply(this, arguments);
		};
	}()
};
module.exports = exports['default'];