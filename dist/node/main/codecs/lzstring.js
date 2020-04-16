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
  pack: false,
  encode: true,
  compress: function () {
    var _compress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(string) {
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.t0 = Buffer;
              _context.next = 3;
              return _loaders["default"].lzstring();

            case 3:
              _context.t1 = _context.sent.compressToUint8Array(string);
              return _context.abrupt("return", _context.t0.from.call(_context.t0, _context.t1));

            case 5:
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
    var _decompress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(buffer) {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _loaders["default"].lzstring();

            case 2:
              return _context2.abrupt("return", _context2.sent.decompressFromUint8Array(buffer));

            case 3:
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