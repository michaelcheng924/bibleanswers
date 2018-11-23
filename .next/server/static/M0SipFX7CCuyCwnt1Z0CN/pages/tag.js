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
/******/ 	return __webpack_require__(__webpack_require__.s = 39);
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

module.exports = require("styled-jsx/style");

/***/ }),
/* 3 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmpContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Container; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  margin: 0;\n  overflow-x: auto;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var AmpContainer = function AmpContainer(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContainer, null, children);
};

var Container = function Container(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1997678190" + " " + "container"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1997678190",
    css: [".container.jsx-1997678190{color:rgba(0,0,0,0.84);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}"]
  }));
};



/***/ }),
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
      padding: "0 20px",
      width: "calc(100% - 40px)"
    }, style)
  }, children);
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("react-amphtml");

/***/ }),
/* 6 */,
/* 7 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 12 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmpListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return ListItem; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(8);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(5);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_4__);


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





var AmpListItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var AmpListItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var AmpListItemSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var AmpListItemDate = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4());
var AmpAnswerImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject5());
var StyledAmpImg = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["AmpImg"])(_templateObject6());

var AmpListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(AmpListItem, _Component);

  function AmpListItem() {
    _classCallCheck(this, AmpListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(AmpListItem).apply(this, arguments));
  }

  _createClass(AmpListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          date_added = _this$props.date_added,
          image_url_small = _this$props.image_url_small,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          noAmp = _this$props.noAmp;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpListItemContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpListItemTitle, null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpListItemSubtitle, null, subtitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpListItemDate, null, date_added ? moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date_added)).format("MMM Do, YYYY") : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAnswerImageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAmpImg, {
        specName: "default",
        src: image_url_small,
        width: "80",
        height: "80",
        alt: "AMP"
      })));
    }
  }]);

  return AmpListItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var ListItemContainer = function ListItemContainer(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3189911355" + " " + "list-item-container"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3189911355",
    css: [".list-item-container.jsx-3189911355{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}", ".list-item-container.jsx-3189911355:hover{background:#eee;}"]
  }));
};

var ListItemTitle = function ListItemTitle(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2566256794" + " " + "list-item-title"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2566256794",
    css: [".list-item-title.jsx-2566256794{color:rgba(0,0,0,0.84);font-size:20px;font-weight:600;line-height:25px;}"]
  }));
};

var ListItemSubtitle = function ListItemSubtitle(_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-544464814" + " " + "list-item-subtitle"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "544464814",
    css: [".list-item-subtitle.jsx-544464814{color:rgba(0,0,0,0.54);font-size:16px;line-height:20px;margin-top:5px;}"]
  }));
};

var ListItemDate = function ListItemDate(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1809973229" + " " + "list-item-date"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1809973229",
    css: [".list-item-date.jsx-1809973229{color:rgba(0,0,0,0.54);font-size:12px;font-style:italic;margin-top:8px;}"]
  }));
};

var AnswerImageContainer = function AnswerImageContainer(_ref5) {
  var children = _ref5.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-697107138" + " " + "answer-image-container"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "697107138",
    css: [".answer-image-container.jsx-697107138{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:80px;margin-left:20px;overflow:hidden;width:80px;}"]
  }));
};

var ListItem =
/*#__PURE__*/
function (_Component2) {
  _inherits(ListItem, _Component2);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          date_added = _this$props2.date_added,
          image_url_small = _this$props2.image_url_small,
          subtitle = _this$props2.subtitle,
          title = _this$props2.title,
          noAmp = _this$props2.noAmp;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItemContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItemTitle, null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItemSubtitle, null, subtitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItemDate, null, date_added ? moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date_added)).format("MMM Do, YYYY") : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AnswerImageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: image_url_small,
        alt: title,
        style: {
          height: 80,
          width: 80
        }
      })));
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-amphtml"
var external_react_amphtml_ = __webpack_require__(5);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(8);
var external_moment_default = /*#__PURE__*/__webpack_require__.n(external_moment_);

// CONCATENATED MODULE: ./components/Author.js
function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 30px;\n  flex-shrink: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  margin-bottom: 4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 20px;\n  max-width: 500px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var Author = external_styled_components_default.a.div(_templateObject());
var AuthorInfo = external_styled_components_default.a.div(_templateObject2());
var AuthorName = external_styled_components_default.a.div(_templateObject3());
var AuthorDate = external_styled_components_default.a.div(_templateObject4());
var StyledAmpImage = external_styled_components_default()(external_react_amphtml_["AmpImg"])(_templateObject5());
/* harmony default export */ var components_Author = (function (_ref) {
  var date_added = _ref.date_added,
      image = _ref.image,
      name = _ref.name;
  return external_react_default.a.createElement(Author, null, external_react_default.a.createElement(StyledAmpImage, {
    specName: "default",
    src: image,
    width: "60",
    height: "60",
    alt: "AMP"
  }), external_react_default.a.createElement(AuthorInfo, null, external_react_default.a.createElement(AuthorName, null, name), date_added ? external_react_default.a.createElement(AuthorDate, null, external_moment_default()(new Date(date_added)).format("MMM Do, YYYY")) : external_react_default.a.createElement(AuthorDate, null, "Not published yet")));
});
// CONCATENATED MODULE: ./components/TitleSection.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return TitleSection_AmpTitleSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return TitleSection_TitleSection; });


function _templateObject8() {
  var data = TitleSection_taggedTemplateLiteral(["\n  display: none;\n\n  @media screen and (max-width: 1199px) {\n    display: block;\n    font-size: 35px;\n    letter-spacing: 0.6em;\n    text-align: center;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = TitleSection_taggedTemplateLiteral(["\n  background-position: center;\n  width: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = TitleSection_taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-left: 20px;\n  max-height: 400px;\n  overflow: hidden;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-height: 500px;\n    order: -1;\n    width: 100%;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function TitleSection_templateObject5() {
  var data = TitleSection_taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);

  TitleSection_templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function TitleSection_templateObject4() {
  var data = TitleSection_taggedTemplateLiteral(["\n  font-size: 56px;\n  font-weight: 500;\n  line-height: 64px;\n  margin: 0;\n  margin-bottom: 16px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 40px;\n    margin-bottom: 8px;\n  }\n"]);

  TitleSection_templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function TitleSection_templateObject3() {
  var data = TitleSection_taggedTemplateLiteral(["\n  margin-left: auto;\n  max-width: 552px;\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-width: none;\n    padding: 0;\n    width: 100%;\n  }\n"]);

  TitleSection_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function TitleSection_templateObject2() {
  var data = TitleSection_taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin: 30px auto 0;\n    max-width: 740px;\n    width: calc(100% - 40px);\n  }\n"]);

  TitleSection_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function TitleSection_templateObject() {
  var data = TitleSection_taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 65px;\n\n  @media screen and (max-width: 1199px) {\n    flex-direction: column;\n    margin: 0;\n  }\n"]);

  TitleSection_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function TitleSection_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var AmpTitleSectionContainer = external_styled_components_default.a.div(TitleSection_templateObject());
var AmpTitleInfoContainer = external_styled_components_default.a.div(TitleSection_templateObject2());
var AmpTitleInfo = external_styled_components_default.a.div(TitleSection_templateObject3());
var AmpTitleText = external_styled_components_default.a.h1(TitleSection_templateObject4());
var AmpSubtitle = external_styled_components_default.a.div(TitleSection_templateObject5());
var AmpCoverImageContainer = external_styled_components_default.a.div(_templateObject6());
var StyledAmpImg = external_styled_components_default()(external_react_amphtml_["AmpImg"])(_templateObject7());
var AmpDivider = external_styled_components_default.a.div(_templateObject8());

var TitleSection_AmpTitleSection = function AmpTitleSection(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image_url = _ref.image_url,
      date_added = _ref.date_added,
      user = _ref.user;
  return external_react_default.a.createElement(AmpTitleSectionContainer, null, external_react_default.a.createElement(AmpTitleInfoContainer, null, external_react_default.a.createElement(AmpTitleInfo, null, external_react_default.a.createElement(AmpTitleText, null, title), external_react_default.a.createElement(AmpSubtitle, null, subtitle || "Help us write this article!"), user ? external_react_default.a.createElement(components_Author, {
    date_added: date_added,
    image: user.image,
    name: user.name
  }) : null, external_react_default.a.createElement(AmpDivider, null, "..."))), external_react_default.a.createElement(AmpCoverImageContainer, null, external_react_default.a.createElement(StyledAmpImg, {
    specName: "default",
    src: image_url || "https://i.imgur.com/SmPYB60.png",
    width: "1200",
    height: "400",
    layout: "responsive",
    alt: "AMP"
  })));
};

var TitleSection_TitleSectionContainer = function TitleSectionContainer(_ref2) {
  var children = _ref2.children;
  return external_react_default.a.createElement("div", {
    className: "jsx-3214516492" + " " + "title-section"
  }, children, external_react_default.a.createElement(style_default.a, {
    styleId: "3214516492",
    css: [".title-section.jsx-3214516492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 65px;}", "@media screen and (max-width:1199px){.title-section.jsx-3214516492{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}}"]
  }));
};

var TitleSection_TitleInfoContainer = function TitleInfoContainer(_ref3) {
  var children = _ref3.children;
  return external_react_default.a.createElement("div", {
    className: "jsx-2927809135" + " " + "title-info-container"
  }, children, external_react_default.a.createElement(style_default.a, {
    styleId: "2927809135",
    css: [".title-info-container.jsx-2927809135{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:calc(50% - 10px);}", "@media screen and (max-width:1199px){.title-info-container.jsx-2927809135{margin:30px auto 0;max-width:740px;width:calc(100% - 40px);}}"]
  }));
};

var TitleSection_TitleInfo = function TitleInfo(_ref4) {
  var children = _ref4.children;
  return external_react_default.a.createElement("div", {
    className: "jsx-1249011680" + " " + "title-info"
  }, children, external_react_default.a.createElement(style_default.a, {
    styleId: "1249011680",
    css: [".title-info.jsx-1249011680{margin-left:auto;max-width:552px;}", "@media screen and (max-width:1199px){.title-info.jsx-1249011680{margin-left:0;max-width:none;padding:0;width:100%;}}"]
  }));
};

var TitleSection_TitleText = function TitleText(_ref5) {
  var children = _ref5.children;
  return external_react_default.a.createElement("div", {
    className: "jsx-2529258625" + " " + "title-text"
  }, children, external_react_default.a.createElement(style_default.a, {
    styleId: "2529258625",
    css: [".title-text.jsx-2529258625{font-size:56px;font-weight:500;line-height:64px;margin:0;margin-bottom:16px;}", "@media screen and (max-width:1199px){.title-text.jsx-2529258625{font-size:36px;font-weight:500;line-height:40px;margin-bottom:8px;}}"]
  }));
};

var TitleSection_Subtitle = function Subtitle(_ref6) {
  var children = _ref6.children;
  return external_react_default.a.createElement("div", {
    className: "jsx-3750299911" + " " + "subtitle"
  }, children, external_react_default.a.createElement(style_default.a, {
    styleId: "3750299911",
    css: [".subtitle.jsx-3750299911{color:rgba(0,0,0,0.54);font-size:23px;font-weight:400;line-height:28px;margin-bottom:30px;}", "@media screen and (max-width:1199px){.subtitle.jsx-3750299911{font-size:20px;line-height:24px;margin-bottom:10px;}}"]
  }));
};

var TitleSection_CoverImageContainer = function CoverImageContainer(_ref7) {
  var children = _ref7.children;
  return external_react_default.a.createElement("div", {
    className: "jsx-2130314682" + " " + "cover-image-container"
  }, children, external_react_default.a.createElement(style_default.a, {
    styleId: "2130314682",
    css: [".cover-image-container.jsx-2130314682{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:20px;max-height:400px;overflow:hidden;width:calc(50% - 10px);}", "@media screen and (max-width:1199px){.cover-image-container.jsx-2130314682{margin-left:0;max-height:500px;-webkit-order:-1;-ms-flex-order:-1;order:-1;width:100%;}}"]
  }));
};

var TitleSection_Divider = function Divider(_ref8) {
  var children = _ref8.children;
  return external_react_default.a.createElement("div", {
    className: "jsx-1611578801" + " " + "divider"
  }, children, external_react_default.a.createElement(style_default.a, {
    styleId: "1611578801",
    css: [".divider.jsx-1611578801{display:none;}", "@media screen and (max-width:1199px){.divider.jsx-1611578801{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}}"]
  }));
};

var TitleSection_TitleSection = function TitleSection(_ref9) {
  var title = _ref9.title,
      subtitle = _ref9.subtitle,
      image_url = _ref9.image_url,
      date_added = _ref9.date_added,
      user = _ref9.user;
  return external_react_default.a.createElement(TitleSection_TitleSectionContainer, null, external_react_default.a.createElement(TitleSection_TitleInfoContainer, null, external_react_default.a.createElement(TitleSection_TitleInfo, null, external_react_default.a.createElement(TitleSection_TitleText, null, title), external_react_default.a.createElement(TitleSection_Subtitle, null, subtitle || "Help us write this article!"), user ? external_react_default.a.createElement(components_Author, {
    date_added: date_added,
    image: user.image,
    name: user.name
  }) : null, external_react_default.a.createElement(TitleSection_Divider, null, "..."))), external_react_default.a.createElement(TitleSection_CoverImageContainer, null, external_react_default.a.createElement("img", {
    src: image_url,
    style: {
      width: "100%"
    }
  })));
};



/***/ }),
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */,
/* 21 */,
/* 22 */,
/* 23 */,
/* 24 */,
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
/* 39 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(40);


/***/ }),
/* 40 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(13);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(3);
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(12);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: #689f38;\n  text-decoration: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 35px;\n  letter-spacing: 0.6em;\n  text-align: center;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  font-size: 34px;\n  line-height: 1.15;\n\n  @media screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2(_templateObject());
var Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var LinkTag = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a(_templateObject4());

var Tag = function Tag(_ref) {
  var url = _ref.url,
      title = _ref.title,
      subtitle = _ref.subtitle,
      description = _ref.description,
      image_url = _ref.image_url,
      date_added = _ref.date_added,
      updated_at = _ref.updated_at,
      _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts,
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user;

  if (!title) {
    return [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Tag not found"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/"
    }, "Bible Answers Home")];
  }

  var pageTitle = "".concat(posts.length, " \"").concat(title, "\" Questions and Answers");
  var datePublished = date_added ? new Date(date_added) : new Date();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_5__[/* AmpContainer */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, pageTitle, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: "https://bibleanswers.io".concat(url)
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: title
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: description
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: image_url
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://google.com/article"
        },
        headline: title,
        image: {
          "@type": "ImageObject",
          url: image_url,
          height: 400,
          width: 1200
        },
        datePublished: datePublished,
        dateModified: new Date(updated_at).toISOString(),
        author: {
          "@type": "Person",
          name: "Michael Cheng"
        },
        publisher: {
          "@type": "Organization",
          name: "Bible Answers",
          logo: {
            "@type": "ImageObject",
            url: "https://i.imgur.com/dJPxPY9.png"
          }
        },
        description: description
      })
    }
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_6__[/* AmpTitleSection */ "a"], {
    title: pageTitle,
    subtitle: subtitle,
    image_url: image_url,
    date_added: date_added,
    user: user
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    style: {
      padding: 0,
      width: "initial"
    }
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTag, {
      href: post.url,
      key: post.url
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListItem__WEBPACK_IMPORTED_MODULE_8__[/* AmpListItem */ "a"], post));
  })));
};

Tag.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://bibleanswersapi.herokuapp.com/tags/".concat(query.slug));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", data);

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ })
/******/ ]);