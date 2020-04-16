"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = createClient;

var _regenerator = _interopRequireDefault(require("@babel/runtime/regenerator"));

var _asyncToGenerator2 = _interopRequireDefault(require("@babel/runtime/helpers/asyncToGenerator"));

var _codecs = _interopRequireDefault(require("./codecs"));

var _loaders = _interopRequireDefault(require("./loaders"));

var twoDigitPercentage = function twoDigitPercentage(val) {
  return Math.floor(val * 10000) / 10000;
};

function createClient(algorithm) {
  if (!Object.prototype.hasOwnProperty.call(_codecs["default"], algorithm)) throw new Error("No such algorithm ".concat(algorithm));
  var _ALGORITHMS$algorithm = _codecs["default"][algorithm],
      pack = _ALGORITHMS$algorithm.pack,
      encode = _ALGORITHMS$algorithm.encode;

  function compress(_x) {
    return _compress.apply(this, arguments);
  }

  function _compress() {
    _compress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee(json) {
      var packed, compressed, encoded;
      return _regenerator["default"].wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              if (!pack) {
                _context.next = 6;
                break;
              }

              _context.next = 3;
              return _loaders["default"].msgpack();

            case 3:
              _context.t0 = _context.sent.encode(json);
              _context.next = 7;
              break;

            case 6:
              _context.t0 = JSON.stringify(json);

            case 7:
              packed = _context.t0;
              _context.next = 10;
              return _codecs["default"][algorithm].compress(packed);

            case 10:
              compressed = _context.sent;

              if (!encode) {
                _context.next = 17;
                break;
              }

              _context.next = 14;
              return _loaders["default"].safe64();

            case 14:
              _context.t1 = _context.sent.encode(compressed);
              _context.next = 18;
              break;

            case 17:
              _context.t1 = compressed;

            case 18:
              encoded = _context.t1;
              return _context.abrupt("return", encoded);

            case 20:
            case "end":
              return _context.stop();
          }
        }
      }, _callee);
    }));
    return _compress.apply(this, arguments);
  }

  function decompress(_x2) {
    return _decompress.apply(this, arguments);
  }

  function _decompress() {
    _decompress = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee2(string) {
      var decoded, decompressed, unpacked;
      return _regenerator["default"].wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              if (!encode) {
                _context2.next = 6;
                break;
              }

              _context2.next = 3;
              return _loaders["default"].safe64();

            case 3:
              _context2.t0 = _context2.sent.decode(string);
              _context2.next = 7;
              break;

            case 6:
              _context2.t0 = string;

            case 7:
              decoded = _context2.t0;
              _context2.next = 10;
              return _codecs["default"][algorithm].decompress(decoded);

            case 10:
              decompressed = _context2.sent;

              if (!pack) {
                _context2.next = 17;
                break;
              }

              _context2.next = 14;
              return _loaders["default"].msgpack();

            case 14:
              _context2.t1 = _context2.sent.decode(decompressed);
              _context2.next = 18;
              break;

            case 17:
              _context2.t1 = JSON.parse(decompressed);

            case 18:
              unpacked = _context2.t1;
              return _context2.abrupt("return", unpacked);

            case 20:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2);
    }));
    return _decompress.apply(this, arguments);
  }

  function stats(_x3) {
    return _stats.apply(this, arguments);
  }

  function _stats() {
    _stats = (0, _asyncToGenerator2["default"])( /*#__PURE__*/_regenerator["default"].mark(function _callee3(json) {
      var raw, rawencoded, compressed;
      return _regenerator["default"].wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              raw = JSON.stringify(json);
              rawencoded = encodeURIComponent(raw);
              _context3.next = 4;
              return compress(json);

            case 4:
              compressed = _context3.sent;
              return _context3.abrupt("return", {
                raw: raw.length,
                rawencoded: rawencoded.length,
                compressedencoded: compressed.length,
                compression: twoDigitPercentage(rawencoded.length / compressed.length)
              });

            case 6:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3);
    }));
    return _stats.apply(this, arguments);
  }

  return {
    compress: compress,
    decompress: decompress,
    stats: stats
  };
}

module.exports = exports["default"];