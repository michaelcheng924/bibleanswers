module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isAmp = _ref.isAmp;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    style: {
      alignItems: "center",
      display: "flex",
      height: 60,
      padding: "0 20px"
    }
  }, isAmp ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("amp-img", {
    src: "https://i.imgur.com/dJPxPY9.png",
    height: "29",
    width: "170",
    alt: "Bible Answers logo"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://i.imgur.com/dJPxPY9.png",
    alt: "Bible Answers logo",
    style: {
      height: 29,
      width: 170
    }
  }));
});

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-amphtml/setup */ "react-amphtml/setup");
/* harmony import */ var react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }






var BODY_STYLES = "\n  body {\n    color: rgba(0, 0, 0, .84);\n    margin: 0;\n    padding: 0;\n    font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n  }\n";

var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyDocument).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      if (this.props.title) {
        var _this$props = this.props,
            title = _this$props.title,
            url = _this$props.url,
            ampScriptTags = _this$props.ampScriptTags,
            ampStyleTag = _this$props.ampStyleTag,
            html = _this$props.html;
        /* eslint-disable react/no-danger */

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["Html"], {
          specName: "html \u26A1 for top-level html",
          lang: "en",
          amp: "amp"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
          rel: "icon",
          href: "https://i.imgur.com/lnlvtFf.png"
        }), title, Object(react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3__["headerBoilerplate"])(url), ampScriptTags, ampStyleTag), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], {
          isAmp: true
        }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          dangerouslySetInnerHTML: {
            __html: html
          }
        })));
      }
      /* eslint-enable */


      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("html", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["Head"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", null, BODY_STYLES)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", {
        className: "custom_class"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_5__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["Main"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_1__["NextScript"], null)));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          renderPage = _ref.renderPage;

      if (req.url.indexOf("/answers") !== -1) {
        var ampScripts = new react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3__["AmpScripts"]();
        var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheet"]();
        var page = renderPage(function (App) {
          return function (props) {
            return sheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3__["AmpScriptsManager"], {
              ampScripts: ampScripts
            }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, props)));
          };
        });
        var ampScriptTags = ampScripts.getScriptElements(); // AMP only allows for 1 style tag, so we need to compbine all the style
        // tags generated by styled-components

        /* eslint-disable react/no-danger */

        var ampStyleTag = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
          "amp-custom": "",
          dangerouslySetInnerHTML: {
            __html: sheet.getStyleElement().reduce(function (css) {
              var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                  _ref2$props = _ref2.props;

              _ref2$props = _ref2$props === void 0 ? {} : _ref2$props;
              var _ref2$props$dangerous = _ref2$props.dangerouslySetInnerHTML;
              _ref2$props$dangerous = _ref2$props$dangerous === void 0 ? {} : _ref2$props$dangerous;

              var _ref2$props$dangerous2 = _ref2$props$dangerous.__html,
                  __html = _ref2$props$dangerous2 === void 0 ? "" : _ref2$props$dangerous2;

              return "".concat(css).concat(__html);
            }, "")
          }
        });
        /* eslint-enable */
        // Get the dynamic `<title />` from the head generated by next.js

        var title = page.head.filter(function (_ref3) {
          var type = _ref3.type;
          return type === "title";
        }).slice(0, 1) || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "ampreact");
        return _objectSpread({}, page, {
          title: title,
          url: req.url,
          ampScriptTags: ampScriptTags,
          ampStyleTag: ampStyleTag
        });
      }

      return {};
    }
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./pages/_document.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-amphtml":
/*!********************************!*\
  !*** external "react-amphtml" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-amphtml");

/***/ }),

/***/ "react-amphtml/setup":
/*!**************************************!*\
  !*** external "react-amphtml/setup" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-amphtml/setup");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map