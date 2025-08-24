"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
var _loaders = _interopRequireDefault(require("../loaders"));
var _default = exports["default"] = {
  pack: true,
  encode: true,
  compress: function () {
    var _compress = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee(input) {
      var _t;
      return _regenerator["default"].wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _t = Buffer;
            _context.next = 1;
            return _loaders["default"].lzw();
          case 1:
            return _context.abrupt("return", _t.from.call(_t, _context.sent.encode(input.toString('binary'))));
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }));
    function compress(_x) {
      return _compress.apply(this, arguments);
    }
    return compress;
  }(),
  decompress: function () {
    var _decompress = (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2(input) {
      var _t2;
      return _regenerator["default"].wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _t2 = Buffer;
            _context2.next = 1;
            return _loaders["default"].lzw();
          case 1:
            return _context2.abrupt("return", _t2.from.call(_t2, _context2.sent.decode(input), 'binary'));
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }));
    function decompress(_x2) {
      return _decompress.apply(this, arguments);
    }
    return decompress;
  }()
};
module.exports = exports.default;