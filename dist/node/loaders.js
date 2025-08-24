"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function _interopRequireWildcard(e, t) { if ("function" == typeof WeakMap) var r = new WeakMap(), n = new WeakMap(); return (_interopRequireWildcard = function _interopRequireWildcard(e, t) { if (!t && e && e.__esModule) return e; var o, i, f = { __proto__: null, "default": e }; if (null === e || "object" != _typeof(e) && "function" != typeof e) return f; if (o = t ? n : r) { if (o.has(e)) return o.get(e); o.set(e, f); } for (var _t in e) "default" !== _t && {}.hasOwnProperty.call(e, _t) && ((i = (o = Object.defineProperty) && Object.getOwnPropertyDescriptor(e, _t)) && (i.get || i.set) ? o(f, _t, i) : f[_t] = e[_t]); return f; })(e, t); }
// centralize all chunks in one file
var _default = exports["default"] = {
  msgpack: function msgpack() {
    return (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var module, factory;
      return _regenerator["default"].wrap(function (_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 1;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require(/* webpackChunkName: "msgpack" */'msgpack5'));
            });
          case 1:
            module = _context.sent;
            factory = module["default"] || module;
            return _context.abrupt("return", factory());
          case 2:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  safe64: function safe64() {
    return (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function (_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 1;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require(/* webpackChunkName: "safe64" */'urlsafe-base64'));
            });
          case 1:
            return _context2.abrupt("return", _context2.sent);
          case 2:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  lzma: function lzma() {
    return (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var lzma;
      return _regenerator["default"].wrap(function (_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 1;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require(/* webpackChunkName: "lzma" */'lzma'));
            });
          case 1:
            lzma = _context3.sent;
            return _context3.abrupt("return", lzma.compress ? lzma : lzma.LZMA);
          case 2:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  lzstring: function lzstring() {
    return (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function (_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 1;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require(/* webpackChunkName: "lzstring" */'lz-string'));
            });
          case 1:
            return _context4.abrupt("return", _context4.sent);
          case 2:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  lzw: function lzw() {
    return (0, _asyncToGenerator2["default"])(/*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var module, lzw;
      return _regenerator["default"].wrap(function (_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 1;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require(/* webpackChunkName: "lzw" */'node-lzw'));
            });
          case 1:
            module = _context5.sent;
            lzw = module["default"] || module;
            return _context5.abrupt("return", lzw);
          case 2:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  }
};
module.exports = exports.default;