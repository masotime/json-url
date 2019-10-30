"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _loaders = _interopRequireDefault(require("../loaders"));

var _default = {
  pack: true,
  encode: true,
  compress: function () {
    var _compress = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee(input) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = Buffer;
              _context.next = 3;
              return _loaders["default"].lzw();

            case 3:
              _context.t1 = input.toString('binary');
              _context.t2 = _context.sent.encode(_context.t1);
              return _context.abrupt("return", _context.t0.from.call(_context.t0, _context.t2));

            case 6:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));

    function compress(_x) {
      return _compress.apply(this, arguments);
    }

    return compress;
  }(),
  decompress: function () {
    var _decompress = (0, _asyncToGenerator2["default"])(
    /*#__PURE__*/
    _regenerator["default"].mark(function _callee2(input) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.t0 = Buffer;
              _context2.next = 3;
              return _loaders["default"].lzw();

            case 3:
              _context2.t1 = input;
              _context2.t2 = _context2.sent.decode(_context2.t1);
              return _context2.abrupt("return", _context2.t0.from.call(_context2.t0, _context2.t2, 'binary'));

            case 6:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));

    function decompress(_x2) {
      return _decompress.apply(this, arguments);
    }

    return decompress;
  }()
};
exports["default"] = _default;
module.exports = exports["default"];