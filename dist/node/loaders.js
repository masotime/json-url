"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");
var _typeof = require("@babel/runtime/helpers/typeof");
Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));
var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));
function _getRequireWildcardCache(nodeInterop) { if (typeof WeakMap !== "function") return null; var cacheBabelInterop = new WeakMap(); var cacheNodeInterop = new WeakMap(); return (_getRequireWildcardCache = function _getRequireWildcardCache(nodeInterop) { return nodeInterop ? cacheNodeInterop : cacheBabelInterop; })(nodeInterop); }
function _interopRequireWildcard(obj, nodeInterop) { if (!nodeInterop && obj && obj.__esModule) { return obj; } if (obj === null || _typeof(obj) !== "object" && typeof obj !== "function") { return { "default": obj }; } var cache = _getRequireWildcardCache(nodeInterop); if (cache && cache.has(obj)) { return cache.get(obj); } var newObj = {}; var hasPropertyDescriptor = Object.defineProperty && Object.getOwnPropertyDescriptor; for (var key in obj) { if (key !== "default" && Object.prototype.hasOwnProperty.call(obj, key)) { var desc = hasPropertyDescriptor ? Object.getOwnPropertyDescriptor(obj, key) : null; if (desc && (desc.get || desc.set)) { Object.defineProperty(newObj, key, desc); } else { newObj[key] = obj[key]; } } } newObj["default"] = obj; if (cache) { cache.set(obj, newObj); } return newObj; }
// centralize all chunks in one file
var _default = {
  msgpack: function msgpack() {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee() {
      var module, factory;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) switch (_context.prev = _context.next) {
          case 0:
            _context.next = 2;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require( /* webpackChunkName: "msgpack" */'msgpack5'));
            });
          case 2:
            module = _context.sent;
            factory = module["default"] || module;
            return _context.abrupt("return", factory());
          case 5:
          case "end":
            return _context.stop();
        }
      }, _callee);
    }))();
  },
  safe64: function safe64() {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2() {
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) switch (_context2.prev = _context2.next) {
          case 0:
            _context2.next = 2;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require( /* webpackChunkName: "safe64" */'urlsafe-base64'));
            });
          case 2:
            return _context2.abrupt("return", _context2.sent);
          case 3:
          case "end":
            return _context2.stop();
        }
      }, _callee2);
    }))();
  },
  lzma: function lzma() {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3() {
      var lzma;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) switch (_context3.prev = _context3.next) {
          case 0:
            _context3.next = 2;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require( /* webpackChunkName: "lzma" */'lzma'));
            });
          case 2:
            lzma = _context3.sent;
            return _context3.abrupt("return", lzma.compress ? lzma : lzma.LZMA);
          case 4:
          case "end":
            return _context3.stop();
        }
      }, _callee3);
    }))();
  },
  lzstring: function lzstring() {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee4() {
      return _regenerator["default"].wrap(function _callee4$(_context4) {
        while (1) switch (_context4.prev = _context4.next) {
          case 0:
            _context4.next = 2;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require( /* webpackChunkName: "lzstring" */'lz-string'));
            });
          case 2:
            return _context4.abrupt("return", _context4.sent);
          case 3:
          case "end":
            return _context4.stop();
        }
      }, _callee4);
    }))();
  },
  lzw: function lzw() {
    return (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee5() {
      var module, lzw;
      return _regenerator["default"].wrap(function _callee5$(_context5) {
        while (1) switch (_context5.prev = _context5.next) {
          case 0:
            _context5.next = 2;
            return Promise.resolve().then(function () {
              return _interopRequireWildcard(require( /* webpackChunkName: "lzw" */'node-lzw'));
            });
          case 2:
            module = _context5.sent;
            lzw = module["default"] || module;
            return _context5.abrupt("return", lzw);
          case 5:
          case "end":
            return _context5.stop();
        }
      }, _callee5);
    }))();
  }
};
exports["default"] = _default;
module.exports = exports.default;