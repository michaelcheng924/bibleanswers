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
/******/ 	return __webpack_require__(__webpack_require__.s = 22);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),
/* 1 */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),
/* 2 */
/***/ (function(module, exports) {

module.exports = require("react-amphtml");

/***/ }),
/* 3 */,
/* 4 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
  var children = _ref.children,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({
      margin: "0 auto 20px",
      maxWidth: 740,
      width: "100%",
      padding: "0 20px"
    }, style)
  }, children);
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-textarea-autosize");

/***/ }),
/* 6 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

var Container = function Container(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, null, children);
};

/* harmony default export */ __webpack_exports__["a"] = (Container);

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 8 */,
/* 9 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(2);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: 80px;\n  position: relative;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  height: 80px;\n  margin-left: 20px;\n  overflow: hidden;\n  width: 80px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  font-style: italic;\n  margin-top: 8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n\n  &:hover {\n    background: #eee;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ListItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var ListItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var ListItemSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var ListItemDate = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var AnswerImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5());
var StyledAmpImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_amphtml__WEBPACK_IMPORTED_MODULE_3__["AmpImg"])(_templateObject6());

var ListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          date_added = _this$props.date_added,
          image_url_small = _this$props.image_url_small,
          subtitle = _this$props.subtitle,
          title = _this$props.title;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemTitle, null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemSubtitle, null, subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemDate, null, date_added ? moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date(date_added)).format("MMM Do, YYYY") : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnswerImageContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAmpImg, {
        specName: "default",
        src: image_url_small,
        width: "80",
        height: "80",
        alt: "AMP"
      })));
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["a"] = (ListItem);

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n.writing h3 {\n  font-size: 34px;\n  line-height: 1.15;\n  margin: 0;\n  margin-top: 56px;\n}\n\n.writing h4 {\n  font-size: 26px;\n  line-height: 1.22;\n  margin: 0;\n  margin-top: 30px;\n}\n\n.writing h3 + p,\n.writing h3 + ol,\n.writing h3 + ul,\n.writing h3 + blockquote,\n.writing h4 + p,\n.writing h4 + ol,\n.writing h4 + ul,\n.writing h4 + blockquote {\n  margin-top: 8px;\n}\n\n.writing p,\n.writing ol,\n.writing ul,\n.writing blockquote {\n  font-size: 21px;\n  line-height: 1.58;\n  margin: 0;\n  margin-top: 29px;\n}\n\n.writing ol,\n.writing ul {\n  padding: 0 40px;\n}\n\n.writing li {\n  margin-bottom: 10px;\n}\n\n.writing li:last-child {\n  margin-bottom: 0;\n}\n\n.writing blockquote {\n  border-left: 3px solid rgba(0, 0, 0, .84);\n  font-style: italic;\n  left: -20px;\n  padding-left: 20px;\n  position: relative;\n}\n\n.writing .first {\n  margin-top: 8px;\n}\n\n.writing .nomargin {\n  margin-top: 0;\n}\n\n.writing .indent {\n  margin-left: 20px;\n}\n\n.writing .image {\n  margin-top: 29px;\n}\n\n.writing .image-left {\n  float: left;\n  margin-right: 20px;\n}\n\n.writing .image-right {\n  float: right;\n  margin-left: 20px;\n}\n\n.writing a {\n  color: #689f38;\n  text-decoration: none;\n}\n\n.writing .scripture {\n  color: #039BE5;\n}\n\n.writing .reference {\n  font-size: 14px;\n  margin-left: 2px;\n  position: relative;\n  top: -5px;\n}\n\n@media screen and (max-width: 768px) {\n  .writing h3 {\n    font-size: 30px;\n    margin-top: 28px;\n  }\n\n  .writing h4 {\n    font-size: 24px;\n    margin-top: 22px;\n  }\n\n  .writing p,\n  .writing ol {\n    font-size: 18px;\n    margin-top: 21px;\n  }\n\n  .writing blockquote {\n    font-size: 18px;\n    margin-top: 21px;\n  }\n\n  .writing .image {\n    margin-top: 21px;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["a"] = (GlobalStyle);

/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),
/* 17 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-core");

/***/ }),
/* 18 */
/***/ (function(module, exports) {

module.exports = require("lodash/keyBy");

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-simple-code-editor");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(42);


/***/ }),
/* 23 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-clike");

/***/ }),
/* 24 */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-javascript");

/***/ }),
/* 25 */,
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */,
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "lodash/keyBy"
var keyBy_ = __webpack_require__(18);
var keyBy_default = /*#__PURE__*/__webpack_require__.n(keyBy_);

// EXTERNAL MODULE: ./components/Container.js
var Container = __webpack_require__(6);

// EXTERNAL MODULE: ./components/GlobalStyle.js
var GlobalStyle = __webpack_require__(12);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// CONCATENATED MODULE: ./components/AdminStyles.js
function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntextarea {\n  font-size: 16px;\n  padding: 4px 8px;\n  width: 100%;\n}\n\n.admin__login {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.admin__login-input {\n  margin-bottom: 10px;\n  width: 250px;\n}\n\n.admin__log-out {\n  border: 0;\n  font-size: 12px;\n  padding: 2px 4px !important;\n}\n\n.admin__update-sitemap {\n  background: #F8BBD0;\n  padding: 20px;\n}\n\n.admin__lists {\n  display: flex;\n  justify-content: space-around;\n}\n\n.admin__filters {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.admin__filter {\n  align-items: center;\n  display: flex;\n  margin-right: 15px;\n}\n\n.admin__save-buttons {\n  align-items: center;\n  display: flex;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n\n.admin__save-buttons button {\n  margin-left: 10px !important;\n}\n\n.admin__post-selects {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.admin__post-select {\n  margin-right: 20px;\n  width: 300px;\n}\n\n.post-editor__images {\n  background: #B3E5FC;\n  display: flex;\n  padding: 20px;\n}\n\n.post-editor__html-container {\n  display: flex;\n  justify-content: space-around;\n}\n\n.post-editor__html-content {\n  border: 1px solid rgba(0, 0, 0, .54);\n  flex-grow: 1;\n  font-size: 18px;\n  margin-top: auto;\n  max-width: 700px;\n  padding-left: 20px;\n}\n\n.post-editor__html-editor {\n  font-family: monospace;\n}\n\n.admin__create-tag {\n  background: #BDBDBD;\n  padding: 30px;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var AdminStyles = Object(external_styled_components_["createGlobalStyle"])(_templateObject());
/* harmony default export */ var components_AdminStyles = (AdminStyles);
// CONCATENATED MODULE: ./components/Login.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Login_Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      pw: "",
      username: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (event) {
      event.preventDefault();
      external_axios_default.a.post("http://bibleanswersapi.herokuapp.com/login", {
        password: _this.state.pw,
        username: _this.state.username
      }).then(function (response) {
        if (response.data.success) {
          _this.props.onLoginSuccess(response.data.token);
        }
      });
    });

    return _this;
  }

  _createClass(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var token = localStorage.getItem("bible-answers-token");

      if (token) {
        external_axios_default.a.post("http://bibleanswersapi.herokuapp.com/checktoken", {
          token: token
        }).then(function (response) {
          if (response.data.success) {
            _this2.props.onLoginSuccess(token);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return external_react_default.a.createElement("form", {
        className: "admin__login",
        onSubmit: this.onSubmit
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
        onChange: function onChange(event) {
          return _this3.setState({
            username: event.target.value
          });
        },
        placeholder: "Username",
        value: this.state.username
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({
            pw: event.target.value
          });
        },
        placeholder: "Password",
        value: this.state.pw
      })), external_react_default.a.createElement("button", null, "Log in"));
    }
  }]);

  return Login;
}(external_react_["Component"]);


// EXTERNAL MODULE: external "react-textarea-autosize"
var external_react_textarea_autosize_ = __webpack_require__(5);
var external_react_textarea_autosize_default = /*#__PURE__*/__webpack_require__.n(external_react_textarea_autosize_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(11);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(13);

// CONCATENATED MODULE: ./components/Search.js
function Search_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { Search_typeof = function _typeof(obj) { return typeof obj; }; } else { Search_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return Search_typeof(obj); }

function Search_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function Search_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function Search_createClass(Constructor, protoProps, staticProps) { if (protoProps) Search_defineProperties(Constructor.prototype, protoProps); if (staticProps) Search_defineProperties(Constructor, staticProps); return Constructor; }

function Search_possibleConstructorReturn(self, call) { if (call && (Search_typeof(call) === "object" || typeof call === "function")) { return call; } return Search_assertThisInitialized(self); }

function Search_getPrototypeOf(o) { Search_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return Search_getPrototypeOf(o); }

function Search_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) Search_setPrototypeOf(subClass, superClass); }

function Search_setPrototypeOf(o, p) { Search_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return Search_setPrototypeOf(o, p); }

function Search_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Search_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }




var Search_Search =
/*#__PURE__*/
function (_Component) {
  Search_inherits(Search, _Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    Search_classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Search_possibleConstructorReturn(this, (_getPrototypeOf2 = Search_getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Search_defineProperty(Search_assertThisInitialized(Search_assertThisInitialized(_this)), "state", {
      inputFocused: false
    });

    Search_defineProperty(Search_assertThisInitialized(Search_assertThisInitialized(_this)), "onChange", function (event) {
      _this.props.onChange(event.target.value);
    });

    return _this;
  }

  Search_createClass(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputFocused = this.state.inputFocused;
      var _this$props = this.props,
          search = _this$props.search,
          showing = _this$props.showing,
          total = _this$props.total;
      return external_react_default.a.createElement("div", {
        className: "search-container"
      }, external_react_default.a.createElement(fa_["FaSearch"], {
        style: {
          color: inputFocused ? "#039be5" : "rgba(0,0,0,.54)",
          position: "relative",
          top: 5
        }
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("input", {
        className: "search",
        onChange: this.onChange,
        onFocus: function onFocus() {
          return _this2.setState({
            inputFocused: true
          });
        },
        onBlur: function onBlur() {
          return _this2.setState({
            inputFocused: false
          });
        },
        placeholder: "Search",
        style: {
          borderBottom: inputFocused ? "1px solid #039be5" : ""
        },
        value: search
      }), external_react_default.a.createElement("div", {
        className: "results"
      }, "Showing ".concat(showing, "/").concat(total, " results"))), search ? external_react_default.a.createElement(fa_["FaTimes"], {
        style: {
          color: "#F44336",
          cursor: "pointer",
          position: "relative",
          top: 5
        },
        onClick: this.props.onClearSearch
      }) : null);
    }
  }]);

  return Search;
}(external_react_["Component"]);

/* harmony default export */ var components_Search = (Search_Search);
// EXTERNAL MODULE: ./components/ListItem.js
var ListItem = __webpack_require__(9);

// CONCATENATED MODULE: ./components/AdminPostsList.js
function AdminPostsList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AdminPostsList_typeof = function _typeof(obj) { return typeof obj; }; } else { AdminPostsList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AdminPostsList_typeof(obj); }

function AdminPostsList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AdminPostsList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AdminPostsList_createClass(Constructor, protoProps, staticProps) { if (protoProps) AdminPostsList_defineProperties(Constructor.prototype, protoProps); if (staticProps) AdminPostsList_defineProperties(Constructor, staticProps); return Constructor; }

function AdminPostsList_possibleConstructorReturn(self, call) { if (call && (AdminPostsList_typeof(call) === "object" || typeof call === "function")) { return call; } return AdminPostsList_assertThisInitialized(self); }

function AdminPostsList_getPrototypeOf(o) { AdminPostsList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AdminPostsList_getPrototypeOf(o); }

function AdminPostsList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AdminPostsList_setPrototypeOf(subClass, superClass); }

function AdminPostsList_setPrototypeOf(o, p) { AdminPostsList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AdminPostsList_setPrototypeOf(o, p); }

function AdminPostsList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AdminPostsList_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = AdminPostsList_taggedTemplateLiteral(["\n  flex-grow: 1;\n  font-size: 20px;\n  font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function AdminPostsList_templateObject() {
  var data = AdminPostsList_taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"]);

  AdminPostsList_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function AdminPostsList_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var BIBLE_BOOKS = {
  Genesis: true,
  Exodus: true,
  Leviticus: true,
  Numbers: true,
  Deuteronomy: true,
  Joshua: true,
  Judges: true,
  Ruth: true,
  "1 Samuel": true,
  "2 Samuel": true,
  "1 Kings": true,
  "2 Kings": true,
  "1 Chronicles": true,
  "2 Chronicles": true,
  Ezra: true,
  Nehemiah: true,
  Esther: true,
  Job: true,
  Psalms: true,
  Proverbs: true,
  Ecclesiastes: true,
  "Song of Solomon": true,
  Isaiah: true,
  Jeremiah: true,
  Lamentations: true,
  Ezekiel: true,
  Daniel: true,
  Hosea: true,
  Joel: true,
  Amos: true,
  Obadiah: true,
  Jonah: true,
  Micah: true,
  Nahum: true,
  Habakkuk: true,
  Zephaniah: true,
  Haggai: true,
  Zechariah: true,
  Malachi: true,
  Matthew: true,
  Mark: true,
  Luke: true,
  John: true,
  Acts: true,
  Romans: true,
  "1 Corinthians": true,
  "2 Corinthians": true,
  Galatians: true,
  Ephesians: true,
  Philippians: true,
  Colossians: true,
  "1 Thessalonians": true,
  "2 Thessalonians": true,
  "1 Timothy": true,
  "2 Timothy": true,
  Titus: true,
  Philemon: true,
  Hebrews: true,
  James: true,
  "1 Peter": true,
  "2 Peter": true,
  "1 John": true,
  "2 John": true,
  "3 John": true,
  Jude: true,
  Revelation: true
};
var PostItem = external_styled_components_default.a.div(AdminPostsList_templateObject());
var PostInfo = external_styled_components_default.a.div(_templateObject2());

var AdminPostsList_PostsList =
/*#__PURE__*/
function (_Component) {
  AdminPostsList_inherits(PostsList, _Component);

  function PostsList(props) {
    var _this;

    AdminPostsList_classCallCheck(this, PostsList);

    _this = AdminPostsList_possibleConstructorReturn(this, AdminPostsList_getPrototypeOf(PostsList).call(this, props));

    AdminPostsList_defineProperty(AdminPostsList_assertThisInitialized(AdminPostsList_assertThisInitialized(_this)), "onNewPostClick", function () {
      _this.props.onSetPost({
        published: false,
        slug: "",
        title: "",
        description: "",
        subtitle: "",
        image_url: "",
        image_url_small: "",
        references: "",
        html: "<div class=\"writing\">\n  <h3>Initial</h3>\n</div>",
        date_added: "",
        related_posts_tags: [],
        mapped_related_posts_tags: [],
        tag_ids: [],
        tags: []
      });
    });

    AdminPostsList_defineProperty(AdminPostsList_assertThisInitialized(AdminPostsList_assertThisInitialized(_this)), "handleKeyPress", function (e) {
      _this.keys[e.keyCode] = e.type === "keydown";

      if (_this.keys[17] && _this.keys[78]) {
        _this.setState({
          showNeedsWork: !_this.state.showNeedsWork
        });
      }
    });

    _this.keys = {};
    _this.state = {
      showNeedsWork: false
    };
    return _this;
  }

  AdminPostsList_createClass(PostsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
      document.addEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
      document.removeEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "needsWork",
    value: function needsWork(post) {
      var errors = [];

      if (!post.published) {
        errors.push("Not published");
      }

      if (!post.tags.length) {
        errors.push("No tags");
      }

      if (!post.mapped_related_posts_tags.length) {
        errors.push("No related posts");
      }

      if (!post.description || post.description.length < 160) {
        errors.push("Needs description");
      }

      if (post.slug.indexOf(" ") !== -1) {
        errors.push("Slug has space");
      }

      return errors;
    }
  }, {
    key: "renderAll",
    value: function renderAll() {
      var _this2 = this;

      return this.props.posts.map(function (post) {
        return external_react_default.a.createElement(PostItem, {
          key: post.id,
          onClick: function onClick() {
            return _this2.props.onSetPost(post);
          }
        }, external_react_default.a.createElement(PostInfo, null, post.title), post.image_url_small ? external_react_default.a.createElement("img", {
          src: post.image_url_small,
          alt: post.title
        }) : null);
      });
    }
  }, {
    key: "renderNeedsWork",
    value: function renderNeedsWork() {
      var _this3 = this;

      var _this$props = this.props,
          onSetPost = _this$props.onSetPost,
          posts = _this$props.posts,
          postsBySlug = _this$props.postsBySlug,
          tags = _this$props.tags;
      return external_react_default.a.createElement("div", null, tags.map(function (tag) {
        if (tag.slug === "apologetics" || tag.slug === "theology" || BIBLE_BOOKS[tag.title]) {
          return null;
        }

        return external_react_default.a.createElement("div", {
          key: tag.id,
          className: "writing"
        }, Object(external_lodash_["some"])(tag.post_slugs, function (slug) {
          return _this3.needsWork(postsBySlug[slug]).length;
        }) ? external_react_default.a.createElement("div", null, external_react_default.a.createElement("h4", {
          className: "nomargin"
        }, tag.title), tag.post_slugs.map(function (slug) {
          var post = postsBySlug[slug];

          var needsWork = _this3.needsWork(post);

          if (!needsWork.length) {
            return null;
          }

          var needsWorkErrors = needsWork.map(function (error) {
            return external_react_default.a.createElement("div", {
              key: error,
              style: {
                color: "red"
              }
            }, error);
          });
          return external_react_default.a.createElement("div", {
            key: "".concat(tag.slug, "-\n                        **").concat(post.slug),
            onClick: function onClick() {
              return onSetPost(post);
            }
          }, external_react_default.a.createElement("div", null, post.title), needsWorkErrors);
        })) : null);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var showNeedsWork = this.state.showNeedsWork;
      var posts = this.props.posts;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", null, "Posts (", posts.length, ")"), external_react_default.a.createElement("button", {
        className: "admin__log-out",
        onClick: this.onNewPostClick
      }, "New Post"), external_react_default.a.createElement(components_Search, {
        showing: posts.length,
        total: posts.length
      }), external_react_default.a.createElement("div", {
        className: "admin__filters"
      }, external_react_default.a.createElement("div", {
        className: "admin__filter"
      }, external_react_default.a.createElement("input", {
        type: "checkbox",
        onChange: function onChange() {
          return _this4.setState({
            showNeedsWork: !showNeedsWork
          });
        },
        value: showNeedsWork
      }), "Needs work")), showNeedsWork ? this.renderNeedsWork() : this.renderAll());
    }
  }]);

  return PostsList;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/CreateTag.js
function CreateTag_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { CreateTag_typeof = function _typeof(obj) { return typeof obj; }; } else { CreateTag_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return CreateTag_typeof(obj); }

function CreateTag_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function CreateTag_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function CreateTag_createClass(Constructor, protoProps, staticProps) { if (protoProps) CreateTag_defineProperties(Constructor.prototype, protoProps); if (staticProps) CreateTag_defineProperties(Constructor, staticProps); return Constructor; }

function CreateTag_possibleConstructorReturn(self, call) { if (call && (CreateTag_typeof(call) === "object" || typeof call === "function")) { return call; } return CreateTag_assertThisInitialized(self); }

function CreateTag_getPrototypeOf(o) { CreateTag_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return CreateTag_getPrototypeOf(o); }

function CreateTag_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) CreateTag_setPrototypeOf(subClass, superClass); }

function CreateTag_setPrototypeOf(o, p) { CreateTag_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return CreateTag_setPrototypeOf(o, p); }

function CreateTag_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function CreateTag_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }





var CreateTag_CreateTag =
/*#__PURE__*/
function (_Component) {
  CreateTag_inherits(CreateTag, _Component);

  function CreateTag() {
    var _getPrototypeOf2;

    var _this;

    CreateTag_classCallCheck(this, CreateTag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = CreateTag_possibleConstructorReturn(this, (_getPrototypeOf2 = CreateTag_getPrototypeOf(CreateTag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    CreateTag_defineProperty(CreateTag_assertThisInitialized(CreateTag_assertThisInitialized(_this)), "state", {
      slug: "",
      url: "",
      title: "",
      description: "",
      subtitle: ""
    });

    CreateTag_defineProperty(CreateTag_assertThisInitialized(CreateTag_assertThisInitialized(_this)), "onChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      var newState = CreateTag_defineProperty({}, name, value);

      if (name === "slug") {
        newState.url = "/tags/".concat(value);
      }

      _this.setState(newState);
    });

    CreateTag_defineProperty(CreateTag_assertThisInitialized(CreateTag_assertThisInitialized(_this)), "createTag", function () {
      var _this$props = _this.props,
          headers = _this$props.headers,
          onFetchPostsTags = _this$props.onFetchPostsTags;
      external_axios_default.a.post("http://bibleanswersapi.herokuapp.com/tags", _this.state, headers).then(function () {
        onFetchPostsTags();

        _this.setState({
          slug: "",
          url: "",
          title: "",
          description: "",
          subtitle: ""
        });
      });
    });

    return _this;
  }

  CreateTag_createClass(CreateTag, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          slug = _this$state.slug,
          url = _this$state.url,
          title = _this$state.title,
          description = _this$state.description,
          subtitle = _this$state.subtitle;
      return external_react_default.a.createElement("div", {
        className: "admin__create-tag"
      }, external_react_default.a.createElement("div", null, JSON.stringify(this.state)), external_react_default.a.createElement("h3", null, "Create Tag"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "slug: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "slug",
        placeholder: "slug",
        value: slug
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "url: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        disabled: true,
        onChange: this.onChange,
        name: "url",
        placeholder: "url",
        value: url
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "title: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "title",
        placeholder: "title",
        value: title
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "description: ", 160 - description.length)), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "description",
        placeholder: "description",
        value: description
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "subtitle: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "subtitle",
        placeholder: "subtitle",
        value: subtitle
      }), external_react_default.a.createElement("button", {
        onClick: this.createTag
      }, "Create"));
    }
  }]);

  return CreateTag;
}(external_react_["Component"]);

/* harmony default export */ var components_CreateTag = (CreateTag_CreateTag);
// CONCATENATED MODULE: ./components/AdminTagsList.js
function AdminTagsList_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AdminTagsList_typeof = function _typeof(obj) { return typeof obj; }; } else { AdminTagsList_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AdminTagsList_typeof(obj); }

function AdminTagsList_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AdminTagsList_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AdminTagsList_createClass(Constructor, protoProps, staticProps) { if (protoProps) AdminTagsList_defineProperties(Constructor.prototype, protoProps); if (staticProps) AdminTagsList_defineProperties(Constructor, staticProps); return Constructor; }

function AdminTagsList_possibleConstructorReturn(self, call) { if (call && (AdminTagsList_typeof(call) === "object" || typeof call === "function")) { return call; } return AdminTagsList_assertThisInitialized(self); }

function AdminTagsList_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AdminTagsList_getPrototypeOf(o) { AdminTagsList_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AdminTagsList_getPrototypeOf(o); }

function AdminTagsList_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AdminTagsList_setPrototypeOf(subClass, superClass); }

function AdminTagsList_setPrototypeOf(o, p) { AdminTagsList_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AdminTagsList_setPrototypeOf(o, p); }




var AdminTagsList_TagsList =
/*#__PURE__*/
function (_Component) {
  AdminTagsList_inherits(TagsList, _Component);

  function TagsList() {
    AdminTagsList_classCallCheck(this, TagsList);

    return AdminTagsList_possibleConstructorReturn(this, AdminTagsList_getPrototypeOf(TagsList).apply(this, arguments));
  }

  AdminTagsList_createClass(TagsList, [{
    key: "render",
    value: function render() {
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("h2", null, "Tags"), external_react_default.a.createElement(components_CreateTag, {
        headers: this.props.headers
      }), external_react_default.a.createElement("ul", null, this.props.tags.map(function (tag) {
        return external_react_default.a.createElement("li", {
          key: tag.id,
          className: "admin__list-post"
        }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, tag.title, " (", tag.post_slugs.length, ")"), tag.description.length < 160 ? external_react_default.a.createElement("div", {
          style: {
            color: "red"
          }
        }, "Needs description") : null));
      })));
    }
  }]);

  return TagsList;
}(external_react_["Component"]);


// CONCATENATED MODULE: ./components/AdminMain.js
function AdminMain_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { AdminMain_typeof = function _typeof(obj) { return typeof obj; }; } else { AdminMain_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return AdminMain_typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { AdminMain_defineProperty(target, key, source[key]); }); } return target; }

function AdminMain_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function AdminMain_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function AdminMain_createClass(Constructor, protoProps, staticProps) { if (protoProps) AdminMain_defineProperties(Constructor.prototype, protoProps); if (staticProps) AdminMain_defineProperties(Constructor, staticProps); return Constructor; }

function AdminMain_possibleConstructorReturn(self, call) { if (call && (AdminMain_typeof(call) === "object" || typeof call === "function")) { return call; } return AdminMain_assertThisInitialized(self); }

function AdminMain_getPrototypeOf(o) { AdminMain_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return AdminMain_getPrototypeOf(o); }

function AdminMain_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) AdminMain_setPrototypeOf(subClass, superClass); }

function AdminMain_setPrototypeOf(o, p) { AdminMain_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return AdminMain_setPrototypeOf(o, p); }

function AdminMain_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function AdminMain_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var AdminMain_AdminMain =
/*#__PURE__*/
function (_Component) {
  AdminMain_inherits(AdminMain, _Component);

  function AdminMain() {
    var _getPrototypeOf2;

    var _this;

    AdminMain_classCallCheck(this, AdminMain);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = AdminMain_possibleConstructorReturn(this, (_getPrototypeOf2 = AdminMain_getPrototypeOf(AdminMain)).call.apply(_getPrototypeOf2, [this].concat(args)));

    AdminMain_defineProperty(AdminMain_assertThisInitialized(AdminMain_assertThisInitialized(_this)), "state", {
      showBackup: false
    });

    return _this;
  }

  AdminMain_createClass(AdminMain, [{
    key: "renderBackup",
    value: function renderBackup() {
      var _this2 = this;

      var showBackup = this.state.showBackup;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.setState({
            showBackup: !showBackup
          });
        }
      }, showBackup ? "Hide" : "Show", " backup"), showBackup ? external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        value: JSON.stringify(this.props.posts.map(function (post) {
          var modifiedPost = _objectSpread({}, post, {
            tags: post.tags.map(function (tag) {
              return tag.title;
            })
          });

          delete modifiedPost["mapped_related_posts_tags"];
          return modifiedPost;
        }))
      }) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          headers = _this$props.headers,
          onFetchPostsTags = _this$props.onFetchPostsTags,
          onSetPost = _this$props.onSetPost,
          posts = _this$props.posts,
          postsBySlug = _this$props.postsBySlug,
          tags = _this$props.tags;
      return external_react_default.a.createElement("div", null, this.renderBackup(), external_react_default.a.createElement("div", {
        className: "admin__lists"
      }, external_react_default.a.createElement(AdminPostsList_PostsList, {
        headers: headers,
        onFetchPostsTags: onFetchPostsTags,
        onSetPost: onSetPost,
        posts: posts,
        postsBySlug: postsBySlug,
        tags: tags
      }), external_react_default.a.createElement(AdminTagsList_TagsList, {
        headers: headers,
        tags: tags
      })));
    }
  }]);

  return AdminMain;
}(external_react_["Component"]);

/* harmony default export */ var components_AdminMain = (AdminMain_AdminMain);
// EXTERNAL MODULE: external "react-select"
var external_react_select_ = __webpack_require__(16);
var external_react_select_default = /*#__PURE__*/__webpack_require__.n(external_react_select_);

// EXTERNAL MODULE: external "react-simple-code-editor"
var external_react_simple_code_editor_ = __webpack_require__(19);
var external_react_simple_code_editor_default = /*#__PURE__*/__webpack_require__.n(external_react_simple_code_editor_);

// EXTERNAL MODULE: external "prismjs/components/prism-core"
var prism_core_ = __webpack_require__(17);

// EXTERNAL MODULE: external "prismjs/components/prism-clike"
var prism_clike_ = __webpack_require__(23);

// EXTERNAL MODULE: external "prismjs/components/prism-javascript"
var prism_javascript_ = __webpack_require__(24);

// CONCATENATED MODULE: ./utils/writing.js

function textRef(number) {
  return "<span class=\"superscript\"><a class=\"reference\" href=\"#footnote-".concat(number, "\" id=\"text-").concat(number, "\">[").concat(number, "]</a></span>");
}
function renderRefs(references) {
  return "\n    <h4>References</h4>\n\n    <ol class=\"first\">\n      ".concat(Object(external_lodash_["map"])(references, function (reference, number) {
    return "<li><a class=\"reference-arrow\" href=\"#text-".concat(number, "\" id=\"footnote-").concat(number, "\">^</a> ").concat(reference, "</li>");
  }).join(" "), "\n    </ol>\n  ");
}
function getModifiedContent(post) {
  return getContentWithReferences(post.html, post.references || "");
}

function getContentWithReferences(content, references) {
  if (!references) {
    return content;
  }

  var matches = content.match(/\[[0-9]+\]/g);

  if (matches) {
    content = matches.reduce(function (result, match, index) {
      var number = index + 1;
      return result.replace(match, "<span class=\"superscript\"><a href=\"#footnote-".concat(number, "\" id=\"text-").concat(number, "\">[").concat(number, "]</a></span>"));
    }, content);
  }

  return "\n    ".concat(content, "\n\n    <div class=\"writing\">\n      <h4>References</h4>\n\n      <ol class=\"first\">\n        ").concat(references.split("\n").map(function (reference, index) {
    var number = index + 1;
    return "<li><a class=\"reference-arrow\" href=\"#text-".concat(number, "\" id=\"footnote-").concat(number, "\">^</a> ").concat(reference, "</li>");
  }).join("\n"), "\n      </ol>\n    </div>\n  ");
}
// EXTERNAL MODULE: ./components/ReadingContainer.js
var ReadingContainer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/PostEditor.js
function PostEditor_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { PostEditor_typeof = function _typeof(obj) { return typeof obj; }; } else { PostEditor_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return PostEditor_typeof(obj); }

function PostEditor_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { PostEditor_defineProperty(target, key, source[key]); }); } return target; }

function PostEditor_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function PostEditor_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function PostEditor_createClass(Constructor, protoProps, staticProps) { if (protoProps) PostEditor_defineProperties(Constructor.prototype, protoProps); if (staticProps) PostEditor_defineProperties(Constructor, staticProps); return Constructor; }

function PostEditor_possibleConstructorReturn(self, call) { if (call && (PostEditor_typeof(call) === "object" || typeof call === "function")) { return call; } return PostEditor_assertThisInitialized(self); }

function PostEditor_getPrototypeOf(o) { PostEditor_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return PostEditor_getPrototypeOf(o); }

function PostEditor_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) PostEditor_setPrototypeOf(subClass, superClass); }

function PostEditor_setPrototypeOf(o, p) { PostEditor_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return PostEditor_setPrototypeOf(o, p); }

function PostEditor_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function PostEditor_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













var HTML_PRESS_MAPPINGS = [{
  key1: 17,
  key2: 72,
  addition: "<h3></h3>",
  cursorOffset: 4
}, {
  key1: 17,
  key2: 74,
  addition: "<h4></h4>",
  cursorOffset: 4
}, {
  key1: 17,
  key2: 80,
  addition: "<p></p>",
  cursorOffset: 3
}, {
  key1: 17,
  key2: 66,
  addition: "<blockquote></blockquote>",
  cursorOffset: 12
}, {
  key1: 17,
  key2: 83,
  addition: "<strong></strong>",
  cursorOffset: 8
}, {
  key1: 17,
  key2: 85,
  addition: "<ul>\n    <li></li>\n  </ul>",
  cursorOffset: 13
}, {
  key1: 17,
  key2: 79,
  addition: "<ol>\n    <li></li>\n  </ol>",
  cursorOffset: 13
}, {
  key1: 17,
  key2: 76,
  addition: "<li></li>",
  cursorOffset: 4
}, {
  key1: 17,
  key2: 70,
  addition: ' class="first"',
  cursorOffset: 15,
  nowrap: true
}];

var PostEditor_PostEditor =
/*#__PURE__*/
function (_Component) {
  PostEditor_inherits(PostEditor, _Component);

  function PostEditor(props) {
    var _this;

    PostEditor_classCallCheck(this, PostEditor);

    _this = PostEditor_possibleConstructorReturn(this, PostEditor_getPrototypeOf(PostEditor).call(this, props));

    PostEditor_defineProperty(PostEditor_assertThisInitialized(PostEditor_assertThisInitialized(_this)), "handleKeyPress", function (e) {
      _this.keys[e.keyCode] = e.type === "keydown";

      if (_this.keys[17] && _this.keys[90]) {
        _this.onSave();
      }

      if (_this.keys[17] && _this.keys[65]) {
        _this.props.onSetPost(null);
      }
    });

    PostEditor_defineProperty(PostEditor_assertThisInitialized(PostEditor_assertThisInitialized(_this)), "onChange", function (event) {
      var post = _this.state.post;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      var updatedPost = PostEditor_objectSpread({}, post, PostEditor_defineProperty({}, name, value));

      if (name === "slug") {
        updatedPost.url = "/answers/".concat(value);
      }

      _this.setState({
        post: updatedPost
      });
    });

    PostEditor_defineProperty(PostEditor_assertThisInitialized(PostEditor_assertThisInitialized(_this)), "onHtmlChange", function (html) {
      _this.setState({
        post: PostEditor_objectSpread({}, _this.state.post, {
          html: html
        })
      });
    });

    PostEditor_defineProperty(PostEditor_assertThisInitialized(PostEditor_assertThisInitialized(_this)), "onHtmlPress", function (e) {
      e.persist();
      var post = _this.state.post;
      var index = e.target.selectionStart;
      _this.keys[e.keyCode] = e.type === "keydown";
      var done = false;
      HTML_PRESS_MAPPINGS.forEach(function (item) {
        if (done) {
          return;
        }

        var key1 = item.key1,
            key2 = item.key2,
            addition = item.addition,
            cursorOffset = item.cursorOffset;

        if (_this.keys[key1] && _this.keys[key2]) {
          var newHtml = "".concat(post.html.slice(0, index)).concat(addition).concat(post.html.slice(index));

          _this.setState({
            post: PostEditor_objectSpread({}, post, {
              html: newHtml
            })
          }, function () {
            setTimeout(function () {
              e.target.selectionStart = index + cursorOffset;
              e.target.selectionEnd = index + cursorOffset;
            });
          });

          done = true;
        }
      });
    });

    PostEditor_defineProperty(PostEditor_assertThisInitialized(PostEditor_assertThisInitialized(_this)), "onSelectChange", function (value) {
      var newTagsList = value.map(function (tag) {
        return Object(external_lodash_["find"])(_this.props.tags, function (tagData) {
          return tagData.id === tag.value;
        });
      });

      _this.setState({
        post: PostEditor_objectSpread({}, _this.state.post, {
          tags: newTagsList
        })
      });
    });

    PostEditor_defineProperty(PostEditor_assertThisInitialized(PostEditor_assertThisInitialized(_this)), "onSelectRelatedChange", function (value) {
      _this.setState({
        post: PostEditor_objectSpread({}, _this.state.post, {
          mapped_related_posts_tags: value.map(function (tag) {
            return Object(external_lodash_["find"])(_this.props.tags, function (tagData) {
              return tagData.id === tag.value;
            });
          })
        })
      });
    });

    PostEditor_defineProperty(PostEditor_assertThisInitialized(PostEditor_assertThisInitialized(_this)), "onPublishedChange", function () {
      var post = _this.state.post;

      var updatedPost = PostEditor_objectSpread({}, post, {
        published: !post.published
      });

      _this.setState({
        post: updatedPost
      });
    });

    PostEditor_defineProperty(PostEditor_assertThisInitialized(PostEditor_assertThisInitialized(_this)), "onSave", function () {
      var _this$props = _this.props,
          headers = _this$props.headers,
          history = _this$props.history,
          onFetchPostsTags = _this$props.onFetchPostsTags,
          onSetPost = _this$props.onSetPost;
      var post = _this.state.post;

      var finalPost = PostEditor_objectSpread({}, post, {
        tag_ids: post.tags.map(function (tag) {
          return tag.id;
        }),
        related_posts_tags: post.mapped_related_posts_tags.map(function (tag) {
          return tag.id;
        }).join(",")
      });

      delete finalPost.tags;
      var method = "post";
      var url = "http://bibleanswersapi.herokuapp.com/posts";

      if (post.id) {
        method = "patch";
        url = "http://bibleanswersapi.herokuapp.com/posts/".concat(post.id);
      }

      external_axios_default.a[method](url, finalPost, headers).then(function (response) {
        _this.setState({
          success: true
        }, function () {
          setTimeout(function () {
            _this.setState({
              success: false,
              post: response.data
            });
          }, 500);
        });

        onFetchPostsTags();
      });
    });

    _this.keys = {};
    _this.state = {
      post: props.post,
      success: false
    };
    return _this;
  }

  PostEditor_createClass(PostEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      window.scrollTo(0, 0);
      document.addEventListener("keydown", this.handleKeyPress);
      document.addEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.post.id && this.props.post.id) {
        this.setState({
          post: this.props.post
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
      document.removeEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "getMappedTags",
    value: function getMappedTags(tags) {
      if (!tags) {
        return [];
      }

      return tags.map(function (tag) {
        return {
          label: tag.title,
          value: tag.id
        };
      });
    }
  }, {
    key: "deletePost",
    value: function deletePost() {
      var _this2 = this;

      var confirm = window.confirm("Are you sure?");

      if (confirm) {
        external_axios_default.a.delete("http://bibleanswersapi.herokuapp.com/posts/".concat(this.state.post.id)).then(function () {
          _this2.props.onFetchPostsTags().then(function () {
            _this2.props.history.push("/admin");
          });
        });
      }
    }
  }, {
    key: "renderSaveButtons",
    value: function renderSaveButtons() {
      var success = this.state.success;
      return external_react_default.a.createElement("div", {
        className: "admin__save-buttons"
      }, success ? external_react_default.a.createElement("div", {
        style: {
          background: "#43A047",
          color: "#fff",
          padding: "5px 10px"
        }
      }, "SUCCESS!") : null, external_react_default.a.createElement("input", {
        type: "checkbox",
        onChange: this.onPublishedChange,
        checked: this.state.post.published
      }), "Published", external_react_default.a.createElement("button", {
        className: "small",
        onClick: this.onSave
      }, "Save"));
    }
  }, {
    key: "renderHtml",
    value: function renderHtml() {
      var _this3 = this;

      var post = this.state.post;
      var modifiedContent = getModifiedContent(post);
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", {
        className: "post-editor__html-container"
      }, external_react_default.a.createElement(external_react_simple_code_editor_default.a, {
        className: "post-editor__html-content",
        value: post.html,
        onValueChange: this.onHtmlChange,
        onKeyDown: this.onHtmlPress,
        onKeyUp: this.onHtmlPress,
        highlight: function highlight(code) {
          return Object(prism_core_["highlight"])(code, prism_core_["languages"].js);
        },
        padding: 10,
        style: {
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16
        }
      }), external_react_default.a.createElement("div", {
        className: "post-editor__html-content",
        dangerouslySetInnerHTML: {
          __html: modifiedContent
        },
        ref: function ref(htmlEl) {
          return _this3.htmlEl = htmlEl;
        }
      })), this.htmlEl && this.htmlEl.innerText.split(" ").length);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          headers = _this$props2.headers,
          onSetPost = _this$props2.onSetPost,
          tags = _this$props2.tags;
      var post = this.state.post;
      var id = post.id,
          slug = post.slug,
          url = post.url,
          title = post.title,
          description = post.description,
          subtitle = post.subtitle,
          image_url = post.image_url,
          image_url_small = post.image_url_small,
          references = post.references,
          date_added = post.date_added,
          mapped_related_posts_tags = post.mapped_related_posts_tags;
      return external_react_default.a.createElement("div", null, external_react_default.a.createElement("button", {
        onClick: function onClick() {
          return onSetPost(null);
        }
      }, "Admin Home"), this.renderSaveButtons(), external_react_default.a.createElement(ReadingContainer["a" /* default */], {
        style: {
          margin: "20px auto"
        }
      }, external_react_default.a.createElement("div", null, "ID: ", id), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "slug: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "slug",
        placeholder: "slug",
        value: slug
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "url: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        disabled: true,
        onChange: this.onChange,
        name: "url",
        placeholder: "url",
        value: url || ""
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "title: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "title",
        placeholder: "Title",
        value: title
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "description: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "description",
        placeholder: "Description",
        value: description || ""
      }), external_react_default.a.createElement("div", null, 160 - (description || "").length), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "tags: ")), external_react_default.a.createElement(external_react_select_default.a, {
        value: this.getMappedTags(post.tags),
        isMulti: true,
        name: "colors",
        onChange: this.onSelectChange,
        options: this.getMappedTags(tags)
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "related_posts_tags: ")), external_react_default.a.createElement(external_react_select_default.a, {
        value: this.getMappedTags(mapped_related_posts_tags),
        isMulti: true,
        name: "colors",
        onChange: this.onSelectRelatedChange,
        options: this.getMappedTags(tags)
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "subtitle: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "subtitle",
        placeholder: "Subtitle",
        value: subtitle
      }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "date_added: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "date_added",
        placeholder: "date_added",
        value: date_added
      }), external_react_default.a.createElement(components_CreateTag, {
        headers: headers
      }), external_react_default.a.createElement("div", {
        className: "post-editor__images"
      }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "image_url: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "image_url",
        placeholder: "image_url",
        value: image_url || ""
      }), external_react_default.a.createElement("img", {
        src: image_url,
        alt: title,
        style: {
          width: 300
        }
      })), external_react_default.a.createElement("div", null, external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "image_url_small: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "image_url_small",
        placeholder: "image_url_small",
        value: image_url_small || ""
      }), external_react_default.a.createElement("img", {
        src: image_url_small,
        alt: title,
        style: {
          width: 80
        }
      }))), external_react_default.a.createElement("div", null, external_react_default.a.createElement("strong", null, "references: ")), external_react_default.a.createElement(external_react_textarea_autosize_default.a, {
        onChange: this.onChange,
        name: "references",
        placeholder: "references",
        value: references || ""
      })), this.renderHtml(), external_react_default.a.createElement("button", {
        className: "small danger",
        onClick: this.deletePost
      }, "Delete"));
    }
  }]);

  return PostEditor;
}(external_react_["Component"]);

/* harmony default export */ var components_PostEditor = (PostEditor_PostEditor);
// CONCATENATED MODULE: ./pages/admin.js
function admin_typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { admin_typeof = function _typeof(obj) { return typeof obj; }; } else { admin_typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return admin_typeof(obj); }

function admin_classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function admin_defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function admin_createClass(Constructor, protoProps, staticProps) { if (protoProps) admin_defineProperties(Constructor.prototype, protoProps); if (staticProps) admin_defineProperties(Constructor, staticProps); return Constructor; }

function admin_possibleConstructorReturn(self, call) { if (call && (admin_typeof(call) === "object" || typeof call === "function")) { return call; } return admin_assertThisInitialized(self); }

function admin_getPrototypeOf(o) { admin_getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return admin_getPrototypeOf(o); }

function admin_inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) admin_setPrototypeOf(subClass, superClass); }

function admin_setPrototypeOf(o, p) { admin_setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return admin_setPrototypeOf(o, p); }

function admin_assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function admin_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var admin_Admin =
/*#__PURE__*/
function (_Component) {
  admin_inherits(Admin, _Component);

  function Admin() {
    var _getPrototypeOf2;

    var _this;

    admin_classCallCheck(this, Admin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = admin_possibleConstructorReturn(this, (_getPrototypeOf2 = admin_getPrototypeOf(Admin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    admin_defineProperty(admin_assertThisInitialized(admin_assertThisInitialized(_this)), "state", {
      headers: {},
      loggedIn: false,
      post: null,
      posts: [],
      postsBySlug: {},
      tags: []
    });

    admin_defineProperty(admin_assertThisInitialized(admin_assertThisInitialized(_this)), "onLoginSuccess", function (token) {
      _this.onFetchPostsTags();

      localStorage.setItem("bible-answers-token", token);

      _this.setState({
        headers: {
          headers: {
            Authorization: "Bearer ".concat(token)
          }
        },
        loggedIn: true
      });
    });

    admin_defineProperty(admin_assertThisInitialized(admin_assertThisInitialized(_this)), "onFetchPostsTags", function () {
      return external_axios_default.a.get("http://bibleanswersapi.herokuapp.com/initialfetch").then(function (response) {
        _this.setState({
          posts: response.data.posts,
          postsBySlug: keyBy_default()(response.data.posts, "slug"),
          tags: response.data.tags
        });
      });
    });

    admin_defineProperty(admin_assertThisInitialized(admin_assertThisInitialized(_this)), "onSetPost", function (post) {
      _this.setState({
        post: post
      });
    });

    return _this;
  }

  admin_createClass(Admin, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          headers = _this$state.headers,
          loggedIn = _this$state.loggedIn,
          post = _this$state.post,
          posts = _this$state.posts,
          postsBySlug = _this$state.postsBySlug,
          tags = _this$state.tags;

      if (!loggedIn) {
        return external_react_default.a.createElement(Login_Login, {
          onLoginSuccess: this.onLoginSuccess
        });
      }

      return external_react_default.a.createElement(Container["a" /* default */], null, external_react_default.a.createElement(GlobalStyle["a" /* default */], null), external_react_default.a.createElement(components_AdminStyles, null), post ? external_react_default.a.createElement(components_PostEditor, {
        headers: headers,
        onFetchPostsTags: this.onFetchPostsTags,
        onSetPost: this.onSetPost,
        post: post,
        tags: tags
      }) : external_react_default.a.createElement(components_AdminMain, {
        headers: headers,
        onFetchPostsTags: this.onFetchPostsTags,
        onSetPost: this.onSetPost,
        posts: posts,
        postsBySlug: postsBySlug,
        tags: tags
      }));
    }
  }]);

  return Admin;
}(external_react_["Component"]);

/* harmony default export */ var admin = __webpack_exports__["default"] = (admin_Admin);

/***/ })
/******/ ]);