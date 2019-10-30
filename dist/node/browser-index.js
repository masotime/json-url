"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;

var _index = _interopRequireDefault(require("./index.js"));

/* global document */
// adapted from https://github.com/webpack/webpack/issues/595
function getCurrentScriptSrc() {
  if (document.currentScript) return document.currentScript.src; // this is unreliable if the script is loaded asynchronously

  var scripts = document.getElementsByTagName('script');
  return scripts[scripts.length - 1].src;
}

function derivePath(scriptSrc) {
  return scriptSrc.substring(0, scriptSrc.lastIndexOf('/'));
} // allows webpack to dynamically load chunks on the same path as where the index script is loaded.


__webpack_public_path__ = derivePath(getCurrentScriptSrc()) + '/'; // eslint-disable-line

var _default = _index["default"];
exports["default"] = _default;
module.exports = exports["default"];