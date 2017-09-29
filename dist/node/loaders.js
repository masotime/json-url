'use strict';

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require('babel-runtime/regenerator');

var _regenerator2 = _interopRequireDefault(_regenerator);

var _promise = require('babel-runtime/core-js/promise');

var _promise2 = _interopRequireDefault(_promise);

var _asyncToGenerator2 = require('babel-runtime/helpers/asyncToGenerator');

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// centralize all chunks in one file
exports.default = {
	msgpack: function msgpack() {
		var _this = this;

		return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee() {
			var msgpackFactory;
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							_context.next = 2;
							return _promise2.default.resolve().then(function () {
								return require( /* webpackChunkName: "msgpack" */'msgpack5');
							});

						case 2:
							msgpackFactory = _context.sent;
							return _context.abrupt('return', msgpackFactory());

						case 4:
						case 'end':
							return _context.stop();
					}
				}
			}, _callee, _this);
		}))();
	},
	safe64: function safe64() {
		var _this2 = this;

		return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2() {
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							_context2.next = 2;
							return _promise2.default.resolve().then(function () {
								return require( /* webpackChunkName: "safe64" */'urlsafe-base64');
							});

						case 2:
							return _context2.abrupt('return', _context2.sent);

						case 3:
						case 'end':
							return _context2.stop();
					}
				}
			}, _callee2, _this2);
		}))();
	},
	lzma: function lzma() {
		var _this3 = this;

		return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee3() {
			var lzma;
			return _regenerator2.default.wrap(function _callee3$(_context3) {
				while (1) {
					switch (_context3.prev = _context3.next) {
						case 0:
							_context3.next = 2;
							return _promise2.default.resolve().then(function () {
								return require( /* webpackChunkName: "lzma" */'lzma');
							});

						case 2:
							lzma = _context3.sent;
							return _context3.abrupt('return', lzma.compress ? lzma : lzma.LZMA);

						case 4:
						case 'end':
							return _context3.stop();
					}
				}
			}, _callee3, _this3);
		}))();
	},
	lzstring: function lzstring() {
		var _this4 = this;

		return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee4() {
			return _regenerator2.default.wrap(function _callee4$(_context4) {
				while (1) {
					switch (_context4.prev = _context4.next) {
						case 0:
							_context4.next = 2;
							return _promise2.default.resolve().then(function () {
								return require( /* webpackChunkName: "lzstring" */'lz-string');
							});

						case 2:
							return _context4.abrupt('return', _context4.sent);

						case 3:
						case 'end':
							return _context4.stop();
					}
				}
			}, _callee4, _this4);
		}))();
	},
	lzw: function lzw() {
		var _this5 = this;

		return (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee5() {
			return _regenerator2.default.wrap(function _callee5$(_context5) {
				while (1) {
					switch (_context5.prev = _context5.next) {
						case 0:
							_context5.next = 2;
							return _promise2.default.resolve().then(function () {
								return require( /* webpackChunkName: "lzw" */'node-lzw');
							});

						case 2:
							return _context5.abrupt('return', _context5.sent);

						case 3:
						case 'end':
							return _context5.stop();
					}
				}
			}, _callee5, _this5);
		}))();
	}
};
module.exports = exports['default'];