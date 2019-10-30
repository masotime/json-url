"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _lzma = _interopRequireDefault(require("./lzma"));

var _lzstring = _interopRequireDefault(require("./lzstring"));

var _lzw = _interopRequireDefault(require("./lzw"));

var _pack = _interopRequireDefault(require("./pack"));

var _default = {
  lzma: _lzma["default"],
  lzstring: _lzstring["default"],
  lzw: _lzw["default"],
  pack: _pack["default"]
};
exports["default"] = _default;
module.exports = exports["default"];