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
    var _compress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(input) {
      var lzma;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.next = 2;
              return _loaders["default"].lzma();

            case 2:
              lzma = _context.sent;
              return _context.abrupt("return", new Promise(function (ok, fail) {
                return lzma.compress(input, 9, function (byteArray, err) {
                  if (err) return fail(err);
                  return ok(Buffer.from(byteArray));
                });
              }));

            case 4:
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
    var _decompress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(input) {
      var lzma;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.next = 2;
              return _loaders["default"].lzma();

            case 2:
              lzma = _context2.sent;
              return _context2.abrupt("return", new Promise(function (ok, fail) {
                return lzma.decompress(input, function (byteArray, err) {
                  if (err) return fail(err);
                  return ok(Buffer.from(byteArray));
                });
              }));

            case 4:
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