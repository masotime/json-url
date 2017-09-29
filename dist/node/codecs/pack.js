"use strict";

Object.defineProperty(exports, "__esModule", {
	value: true
});

var _regenerator = require("babel-runtime/regenerator");

var _regenerator2 = _interopRequireDefault(_regenerator);

var _asyncToGenerator2 = require("babel-runtime/helpers/asyncToGenerator");

var _asyncToGenerator3 = _interopRequireDefault(_asyncToGenerator2);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

exports.default = {
	pack: true,
	encode: true,
	compress: function () {
		var _ref = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee(_) {
			return _regenerator2.default.wrap(function _callee$(_context) {
				while (1) {
					switch (_context.prev = _context.next) {
						case 0:
							return _context.abrupt("return", _);

						case 1:
						case "end":
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
		var _ref2 = (0, _asyncToGenerator3.default)( /*#__PURE__*/_regenerator2.default.mark(function _callee2(_) {
			return _regenerator2.default.wrap(function _callee2$(_context2) {
				while (1) {
					switch (_context2.prev = _context2.next) {
						case 0:
							return _context2.abrupt("return", _);

						case 1:
						case "end":
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
module.exports = exports["default"];