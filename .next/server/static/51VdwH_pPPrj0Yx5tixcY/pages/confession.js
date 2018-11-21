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
/******/ 	return __webpack_require__(__webpack_require__.s = 32);
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
/* 7 */,
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),
/* 10 */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),
/* 11 */,
/* 12 */,
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
/* 19 */
/***/ (function(module, exports) {

module.exports = require("css-vendor");

/***/ }),
/* 20 */,
/* 21 */,
/* 22 */
/***/ (function(module, exports) {

module.exports = require("react-dom");

/***/ }),
/* 23 */,
/* 24 */,
/* 25 */
/***/ (function(module, exports) {

module.exports = require("debug");

/***/ }),
/* 26 */,
/* 27 */,
/* 28 */,
/* 29 */,
/* 30 */,
/* 31 */,
/* 32 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(50);


/***/ }),
/* 33 */,
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */,
/* 40 */,
/* 41 */,
/* 42 */,
/* 43 */,
/* 44 */,
/* 45 */,
/* 46 */,
/* 47 */,
/* 48 */,
/* 49 */,
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "styled-jsx/style"
var style_ = __webpack_require__(2);
var style_default = /*#__PURE__*/__webpack_require__.n(style_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(13);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(9);

// CONCATENATED MODULE: ./constants/confessions/london-baptist.js

var CHAPTERS = [{
  slug: "1689-london-baptist-confession-preface",
  chapter: "Preface",
  title: "To the Judicious and Impartial Reader",
  content: ["It is now many years since divers of us (with other sober Christians then living and walking in the way of the Lord that we professe) did conceive our selves to be under a necessity of Publishing a Confession of our Faith, for the information, and satisfaction of those, that did not throughly understand what our principles were, or had entertained prejudices against our Profession, by reason of the strange representation of them, by some men of note, who had taken very wrong measures, and accordingly led others into misapprehensions, of us, and them: and this was first put forth about the year, 1643. in the name of seven Congregations then gathered in London; since which time, diverse impressions thereof have been dispersed abroad, and our end proposed, in good measure answered, inasmuch as many (and some of those men eminent, both for piety and learning) were thereby satisfied, that we were no way guilty of those Heterodoxies and fundamental errors, which had too frequently been charged upon us without ground, or occasion given on our part. And forasmuch, as that Confession is not now commonly to be had; and also that many others have since embraced the same truth which is owned therein; it was judged necessary by us to joyn together in giving a testimony to the world; of our firm adhering to those wholesome Principles, by the publication of this which is now in your hand.", "And forasmuch as our method, and manner of expressing our sentiments, in this, doth vary from the former (although the substance of the matter is the same) we shall freely impart to you the reason and occasion thereof. One thing that greatly prevailed with us to undertake this work, was (not only to give a full account of our selves, to those Christians that differ from us about the subject of Baptism, but also) the profit that might from thence arise, unto those that have any account of our labors, in their instruction, and establishment in the great truths of the Gospel; in the clear understanding, and steady belief of which, our comfortable walking with God, and fruitfulness before him, in all our ways, is most neerly concerned; and therefore we did conclude it necessary to expresse our selves the more fully, and distinctly; and also to fix on such a method as might be most comprehensive of those things which we designed to explain our sense, and belief of; and finding no defect, in this regard, in that fixed on by the assembly, and after them by those of the Congregational way, we did readily conclude it best to retain the same order in our present confession: and also, when we observed that those last mentioned, did in their confession (for reasons which seemed of weight both to themselves and others) choose not only to express their mind in words concurrent with the former in sense, concerning all those articles wherein they were agreed, but also for the most part without any variation of the terms we did in like manner conclude it best to follow their example in making use of the very same words with them both, in these articles (which are very many) wherein our faith and doctrine is the same with theirs, and this we did, the more abundantly, to manifest our consent with both, in all the fundamental articles of the Christian Religion, as also with many others, whose orthodox confessions have been published to the world; on behalf of the Protestants in divers Nations and Cities: and also to convince all, that we have no itch to clogge Religion with new words, but do readily acquiesce in that form of sound words, which hath been, in consent with the holy Scriptures, used by others before us; hereby declaring before God, Angels, & Men, our hearty agreement with them, in that wholesome Protestant Doctrine, which with so clear evidence of Scriptures they have asserted: some things indeed, are in some places added, some terms omitted, and some few changed, but these alterations are of that nature, as that we need not doubt, any charge or suspition of unsoundness in the faith, from any of our brethren upon the account of them.", "In those things wherein we differ from others, we have exprest our selves with all candor and plainness that none might entertain jealousie of ought secretly lodged in our breasts, that we would not the world should be acquainted with; yet we hope we have also observed those rules of modesty, and humility, as will render our freedom in this respect inoffensive, even to those whose sentiments are different from ours.", "We have also taken care to affix texts of Scripture, in the margin for the confirmation of each article in our confession; in which work we have studiously indeavoured to select such as are most clear and pertinent, for the proof of what is asserted by us: and our earnest desire is, that all into whose hands this may come, would follow that (never enough commended) example of the noble Bereans, who searched the Scriptures daily, that they might find out whether the things preached to them were so or not.", "There is one thing more which we sincerely professe, and earnestly desire credence in, viz. That contention is most remote from our design in all that we have done in this matter: and we hope the liberty of an ingenuous unfolding our principles, and opening our hearts unto our Brethren, with the Scripture grounds on which our faith and practise leanes, will by none of them be either denyed to us, or taken ill from us. Our whole design is accomplished, if we may obtain that Justice, as to be measured in our principles, and practise, and the judgement of both by others, according to what we have now published; which the Lord (whose eyes are as a flame of fire) knoweth to be the doctrine, which with our hearts we must firmly believe, and sincerely indeavour to conform our lives to. And oh that other contentions being laid asleep, the only care and contention of all upon whom the name of our blessed Redeemer is called, might for the future be, to walk humbly with their God, and in the exercise of all Love and Meekness towards each other, to perfect holyness in the fear of the Lord, each one endeavouring to have his conversation such as becometh the Gospel; and also suitable to his place and capacity vigorously to promote in others the practice of true Religion and undefiled in the sight of God and our Father. And that in this backsliding day, we might not spend our breath in fruitless complaints of the evils of others; but may every one begin at home, to reform in the first place our own hearts, and wayes; and then to quicken all that we may have influence upon, to the same work; that if the will of God were so, none might deceive themselves, by resting in, and trusting to, a form of Godliness, without the power of it, and inward experience of the efficacy of those truths that are professed by them.", "And verily there is one spring and cause of the decay of Religion in our day, which we cannot but touch upon, and earnestly urge a redresse of; and that is the neglect of the worship of God in Families, by those to whom the charge and conduct of them is committed. May not the grosse ignorance, and instability of many; with the prophaneness of others, be justly charged upon their Parents and Masters; who have not trained them up in the way wherein they ought to walk when they were young? but have neglected those frequent and solemn commands which the Lord hath laid upon them so to catechize, and instruct them, that their tender years might be seasoned with the knowledge of the truth of God as revealed in the Scriptures; and also by their own omission of Prayer, and other duties of Religion in their families, together with the ill example of their loose conversation, have inured them first to a neglect, and then contempt of all Piety and Religion? we know this will not excuse the blindness, or wickedness of any; but certainly it will fall heavy upon those that have thus been the occasion thereof; they indeed dye in their sins; but will not their blood be required of those under whose care they were, who yet permitted them to go on without warning, yea led them into the paths of destruction? and will not the diligence of Christians with respect to the discharge of these duties, in ages past, rise up in judgment against, and condemn many of those who would be esteemed such now?", "We shall conclude with our earnest prayer, that the God of all grace, will pour out those measures of his holy Spirit upon us, that the profession of truth may be accompanyed with the sound belief, and diligent practise of it by us; that his name may in all things be glorified, through Jesus Christ our Lord, Amen."]
}, {
  chapter: 1,
  slug: "1689-london-baptist-confession-chapter-1-holy-scriptures",
  title: "Of the Holy Scriptures",
  topic: ["scripture"],
  content: [[{
    superscript: 1,
    text: "The Holy Scripture is the only sufficient, certain, and infallible rule of all saving knowledge, faith, and obedience.",
    scriptures: ["2 Timothy 3:15-17", "Isaiah 8:20", "Luke 16:29, 31", "Ephesians 2:20"]
  }, {
    superscript: 2,
    text: "Although the light of nature, and the works of creation and providence do so far manifest the goodness, wisdom, and power of God, as to leave men inexcusable; yet are they not sufficient to give that knowledge of God and his will which is necessary unto salvation.",
    scriptures: ["Romans 1:19-21", "Romans 2:14-15", "Psalms 19:1-3"]
  }, {
    superscript: 3,
    text: "Therefore it pleased the Lord at sundry times and in divers manners to reveal himself, and to declare that his will unto his church;",
    scriptures: ["Hebrews 1:1"]
  }, {
    superscript: 4,
    text: "and afterward for the better preserving and propagating of the truth, and for the more sure establishment and comfort of the church against the corruption of the flesh, and the malice of Satan, and of the world, to commit the same wholly unto writing; which maketh the Holy Scriptures to be most necessary, those former ways of God's revealing his will unto his people being now ceased.",
    scriptures: ["Proverbs 22:19-21", "Romans 15:4", "2 Peter 1:19-20"]
  }], [{
    superscript: 5,
    text: ["Under the name of Holy Scripture, or the Word of God written, are now contained all the books of the Old and New Testaments, which are these:", "OF THE OLD TESTAMENT: Genesis, Exodus, Leviticus, Numbers, Deuteronomy, Joshua, Judges, Ruth, I Samuel, II Samuel, I Kings, II Kings, I Chronicles, II Chronicles, Ezra, Nehemiah, Esther, Job, Psalms, Proverbs, Ecclesiastes, The Song of Solomen, Isaiah, Jeremiah, Lamentations,Ezekiel, Daniel, Hosea, Joel, Amos, Obadiah, Jonah, Micah, Nahum, Habakkuk, Zephaniah, Haggai, Zechariah, Malachi", "OF THE NEW TESTAMENT: Matthew, Mark, Luke, John, The Acts of the Apostles, Paul's Epistle to the Romans, I Corinthians, II Corinthians, Galatians, Ephesians, Philippians, Colossians, I Thessalonians, II Thessalonians, I Timothy, II Timothy, To Titus, To Philemon, The Epistle to the Hebrews, Epistle of James, The first and second Epistles of Peter, The first, second, and third Epistles of John, The Epistle of Jude, The Revelation", "All of which are given by the inspiration of God, to be the rule of faith and life."],
    scriptures: ["2 Timothy 3:16"]
  }], [{
    superscript: 6,
    text: "The books commonly called Apocrypha, not being of divine inspiration, are no part of the canon or rule of the Scripture, and, therefore, are of no authority to the church of God, nor to be any otherwise approved or made use of than other human writings.",
    scriptures: ["Luke 24:27, 44", "Romans 3:2"]
  }], [{
    superscript: 7,
    text: "The authority of the Holy Scripture, for which it ought to be believed, dependeth not upon the testimony of any man or church, but wholly upon God (who is truth itself), the author thereof; therefore it is to be received because it is the Word of God.",
    scriptures: ["2 Peter 1:19-21", "2 Timothy 3:16", "2 Thessalonians 2:13", "1 John 5:9"]
  }], [{
    superscript: 8,
    text: "We may be moved and induced by the testimony of the church of God to an high and reverent esteem of the Holy Scriptures; and the heavenliness of the matter, the efficacy of the doctrine, and the majesty of the style, the consent of all the parts, the scope of the whole (which is to give all glory to God), the full discovery it makes of the only way of man's salvation, and many other incomparable excellencies, and entire perfections thereof, are arguments whereby it doth abundantly evidence itself to be the Word of God; yet notwithstanding, our full persuasion and assurance of the infallible truth, and divine authority thereof, is from the inward work of the Holy Spirit bearing witness by and with the Word in our hearts.",
    scriptures: ["John 16:13-14", "1 Corinthians 2:10-12", "1 John 2:20, 27"]
  }], [{
    superscript: 9,
    text: "The whole counsel of God concerning all things necessary for his own glory, man's salvation, faith and life, is either expressly set down or necessarily contained in the Holy Scripture: unto which nothing at any time is to be added, whether by new revelation of the Spirit, or traditions of men.",
    scriptures: ["2 Timothy 3:15-17", "Galatians 1:8-9"]
  }, {
    superscript: 10,
    text: "Nevertheless, we acknowledge the inward illumination of the Spirit of God to be necessary for the saving understanding of such things as are revealed in the Word,",
    scriptures: ["John 6:45", "1 Corinthians 2:9-12"]
  }, {
    superscript: 11,
    text: "and that there are some circumstances concerning the worship of God, and government of the church, common to human actions and societies, which are to be ordered by the light of nature and Christian prudence, according to the general rules of the Word, which are always to be observed.",
    scriptures: ["1 Corinthians 11:13-14", "1 Corinthians 14:26,40"]
  }], [{
    superscript: 12,
    text: "All things in Scripture are not alike plain in themselves, nor alike clear unto all;",
    scriptures: ["2 Peter 3:16"]
  }, {
    superscript: 13,
    text: "yet those things which are necessary to be known, believed and observed for salvation, are so clearly propounded and opened in some place of Scripture or other, that not only the learned, but the unlearned, in a due use of ordinary means, may attain to a sufficient understanding of them.",
    scriptures: ["Psalms 19:7", "Psalms 119:130"]
  }], [{
    superscript: 14,
    text: "The Old Testament in Hebrew (which was the native language of the people of God of old),",
    scriptures: ["Romans 3:2"]
  }, {
    superscript: 15,
    text: "and the New Testament in Greek (which at the time of the writing of it was most generally known to the nations), being immediately inspired by God, and by his singular care and providence kept pure in all ages, are therefore authentic; so as in all controversies of religion, the church is finally to appeal to them.",
    scriptures: ["Isaiah 8:20"]
  }, {
    superscript: 16,
    text: "But because these original tongues are not known to all the people of God, who have a right unto, and interest in the Scriptures, and are commanded in the fear of God to read,",
    scriptures: ["Acts 15:15"]
  }, {
    superscript: 17,
    text: "and search them,",
    scriptures: ["John 5:39"]
  }, {
    superscript: 18,
    text: "therefore they are to be translated into the vulgar language of every nation unto which they come,",
    scriptures: ["1 Corinthians 14:6, 9, 11-12, 24, 28"]
  }, {
    superscript: 19,
    text: "that the Word of God dwelling plentifully in all, they may worship him in an acceptable manner, and through patience and comfort of the Scriptures may have hope.",
    scriptures: ["Colossians 3:16"]
  }], [{
    superscript: 20,
    text: "The infallible rule of interpretation of Scripture is the Scripture itself; and therefore when there is a question about the true and full sense of any Scripture (which is not manifold, but one), it must be searched by other places that speak more clearly.",
    scriptures: ["2 Peter 1:20-21", "Acts 15:15-16"]
  }], [{
    superscript: 21,
    text: "The supreme judge, by which all controversies of religion are to be determined, and all decrees of councils, opinions of ancient writers, doctrines of men, and private spirits, are to be examined, and in whose sentence we are to rest, can be no other but the Holy Scripture delivered by the Spirit, into which Scripture so delivered, our faith is finally resolved.",
    scriptures: ["Matthew 22:29, 31-32", "Ephesians 2:20", "Acts 28:23"]
  }]]
}, {
  chapter: 2,
  slug: "1689-london-baptist-confession-chapter-2-god-holy-trinity",
  title: "Of God and of the Holy Trinity",
  topic: ["god:characteristics", "trinity"],
  content: [[{
    superscript: 1,
    text: "The Lord our God is but one only living and true God; whose subsistence is in and of Himself,",
    scriptures: ["1 Corinthians 8:4, 6", "Deuteronomy 6:4"]
  }, {
    superscript: 2,
    text: "infinite in being and perfection; whose essence cannot be comprehended by any but Himself;",
    scriptures: ["Jeremiah 10:10", "Isaiah 48:12"]
  }, {
    superscript: 3,
    text: "a most pure spirit,",
    scriptures: ["Exodus 3:14"]
  }, {
    superscript: 4,
    text: "invisible, without body, parts, or passions, who only hath immortality, dwelling in the light which no man can approach unto;",
    scriptures: ["John 4:24"]
  }, {
    superscript: 5,
    text: "who is immutable,",
    scriptures: ["1 Timothy 1:17", "Deuteronomy 4:15-16"]
  }, {
    superscript: 6,
    text: "who is immutable,",
    scriptures: ["Malachi 3:6"]
  }, {
    superscript: 7,
    text: "immense,",
    scriptures: ["1 Kings 8:27", "Jeremiah 23:23"]
  }, {
    superscript: 8,
    text: "eternal,",
    scriptures: ["Psalms 90:2"]
  }, {
    superscript: 9,
    text: "incomprehensible, almighty,",
    scriptures: ["Genesis 17:1"]
  }, {
    superscript: 10,
    text: "every way infinite, most holy,",
    scriptures: ["Isaiah 6:3"]
  }, {
    superscript: 11,
    text: "most wise, most free, most absolute; working all things according to the counsel of His own immutable and most righteous will,",
    scriptures: ["Colossians 3:16"]
  }, {
    superscript: 12,
    text: "for His own glory;",
    scriptures: ["Proverbs 16:4", "Romans 11:36"]
  }, {
    superscript: 13,
    text: "most loving, gracious, merciful, long-suffering, abundant in goodness and truth, forgiving iniquity, transgression, and sin; the rewarder of them that diligently seek Him,",
    scriptures: ["Exodus 34:6-7", "Hebrews 11:6"]
  }, {
    superscript: 14,
    text: "and withal most just and terrible in His judgments,",
    scriptures: ["Nehemiah 9:32-33"]
  }, {
    superscript: 15,
    text: "hating all sin,",
    scriptures: ["Psalms 5:5-6"]
  }, {
    superscript: 16,
    text: "and who will by no means clear the guilty.",
    scriptures: ["Exodus 34:7", "Nahum 1:2-3"]
  }], [{
    superscript: 17,
    text: "God, having all life,",
    scriptures: ["John 5:26"]
  }, {
    superscript: 18,
    text: "glory,",
    scriptures: ["Ps. 148:13"]
  }, {
    superscript: 19,
    text: "goodness,",
    scriptures: ["Ps. 119:68"]
  }, {
    superscript: 20,
    text: "blessedness, in and of Himself, is alone in and unto Himself all-sufficient, not standing in need of any creature which He hath made, nor deriving any glory from them,",
    scriptures: ["Job 22:2-3"]
  }, {
    superscript: 21,
    text: "but only manifesting His own glory in, by, unto, and upon them; He is the alone fountain of all being, of whom, through whom, and to whom are all things,",
    scriptures: ["Rom. 11:34-36"]
  }, {
    superscript: 22,
    text: "and He hath most sovereign dominion over all creatures, to do by them, for them, or upon them, whatsoever Himself pleases;",
    scriptures: ["Dan. 4:25, 34-35"]
  }, {
    superscript: 23,
    text: "in His sight all things are open and manifest,",
    scriptures: ["Heb. 4:13"]
  }, {
    superscript: 24,
    text: "His knowledge is infinite, infallible, and independent upon the creature, so as nothing is to Him contingent or uncertain;",
    scriptures: ["Ezek. 11:5", "Acts 15:18"]
  }, {
    superscript: 25,
    text: "He is most holy in all His counsels, in all His works,",
    scriptures: ["Ps. 145:17"]
  }, {
    superscript: 26,
    text: "and in all His commands; to Him is due from angels and men, whatsoever worship,",
    scriptures: ["Rev. 5:12-14"]
  }, {
    superscript: "",
    text: "service, or obedience, as creatures they owe unto the Creator, and whatever He is further pleased to require of them."
  }], [{
    superscript: 27,
    text: "In this divine and infinite Being there are three subsistences, the Father, the Word or Son, and Holy Spirit,",
    scriptures: ["1 John 5:7", "Matt. 28:19", "2 Cor. 13:14"]
  }, {
    superscript: 28,
    text: "of one substance, power, and eternity, each having the whole divine essence, yet the essence undivided:",
    scriptures: ["Exod. 3:14", "John 14:11", "1 Cor. 8:6"]
  }, {
    superscript: 29,
    text: "the Father is of none, neither begotten nor proceeding; the Son is eternally begotten of the Father;",
    scriptures: ["John 1:14, 18"]
  }, {
    superscript: 30,
    text: "the Holy Spirit proceeding from the Father and the Son;",
    scriptures: ["John 15:26", "Gal. 4:6"]
  }, {
    superscript: "",
    text: "all infinite, without beginning, therefore but one God, who is not to be divided in nature and being, but distinguished by several peculiar relative properties and personal relations; which doctrine of the Trinity is the foundation of all our communion with God, and comfortable dependence on Him."
  }]]
}, {
  chapter: 3,
  slug: "1689-london-baptist-confession-chapter-3-gods-decree",
  title: "Of God's Decree",
  topic: ["god:decree"],
  content: [[{
    superscript: 1,
    text: "God hath decreed in himself, from all eternity, by the most wise and holy counsel of His own will, freely and unchangeably, all things, whatsoever comes to pass;",
    scriptures: ["Isa. 46:10", "Eph. 1:11", "Heb. 6:17", "Rom. 9:15, 18"]
  }, {
    superscript: 2,
    text: "yet so as thereby is God neither the author of sin nor hath fellowship with any therein;",
    scriptures: ["James 1:13", "1 John 1:5"]
  }, {
    superscript: 3,
    text: "nor is violence offered to the will of the creature, nor yet is the liberty or contingency of second causes taken away, but rather established;",
    scriptures: ["Acts 4:27, 28", "John 19:11"]
  }, {
    superscript: 4,
    text: "in which appears His wisdom in disposing all things, and power and faithfulness in accomplishing His decree.",
    scriptures: ["Num. 23:19", "Eph. 1:3-5"]
  }], [{
    superscript: 5,
    text: "Although God knoweth whatsoever may or can come to pass, upon all supposed conditions,",
    scriptures: ["Acts 15:18"]
  }, {
    superscript: 6,
    text: "yet hath He not decreed anything, because He foresaw it as future, or as that which would come to pass upon such conditions.",
    scriptures: ["Rom. 9:11, 13, 16, 18"]
  }], [{
    superscript: 7,
    text: "By the decree of God, for the manifestation of His glory, some men and angels are predestinated, or foreordained to eternal life through Jesus Christ,",
    scriptures: ["I Tim. 5:21", "Matt. 25:34"]
  }, {
    superscript: 8,
    text: "to the praise of His glorious grace;",
    scriptures: ["Eph. 1:5-6"]
  }, {
    superscript: 9,
    text: "others being left to act in their sin to their just condemnation, to the praise of His glorious justice.",
    scriptures: ["Rom. 9:22-23", "Jude 4"]
  }], [{
    superscript: 10,
    text: "These angels and men thus predestinated and foreordained, are particularly and unchangeably designed, and their number so certain and definite, that it cannot be either increased or diminished.",
    scriptures: ["2 Tim. 2:19", "John 13:18"]
  }], [{
    superscript: 11,
    text: "Those of mankind that are predestinated to life, God, before the foundation of the world was laid, according to His eternal and immutable purpose, and the secret counsel and good pleasure of His will, hath chosen in Christ unto everlasting glory, out of His mere free grace and love,",
    scriptures: ["Eph. 1:4, 9, 11", "Rom. 8:30", "2 Tim. 1:9", "1 Thess. 5:9"]
  }, {
    superscript: 12,
    text: "without any other thing in the creature as a condition or cause moving Him thereunto.",
    scriptures: ["Rom. 9:13, 16", "Eph. 2:5, 12"]
  }], [{
    superscript: 13,
    text: "As God hath appointed the elect unto glory, so He hath, by the eternal and most free purpose of His will, foreordained all the means thereunto;",
    scriptures: ["1 Pet. 1:2", "2 Thess. 2:13"]
  }, {
    superscript: 14,
    text: "wherefore they who are elected, being fallen in Adam, are redeemed by Christ,",
    scriptures: ["1 Thess. 5:9-10"]
  }, {
    superscript: 15,
    text: "are effectually called unto faith in Christ, by His Spirit working in due season, are justified, adopted, sanctified,",
    scriptures: ["Rom. 8:30", "2 Thess. 2:13"]
  }, {
    superscript: 16,
    text: "and kept by His power through faith unto salvation;",
    scriptures: ["1 Pet. 1:5"]
  }, {
    superscript: 17,
    text: "neither are any other redeemed by Christ, or effectually called, justified, adopted, sanctified, and saved, but the elect only.",
    scriptures: ["John 10:26, 17:9, 6:64"]
  }], [{
    superscript: 18,
    text: "The doctrine of the high mystery of predestination is to be handled with special prudence and care, that men attending the will of God revealed in His Word, and yielding obedience thereunto, may, from the certainty of their effectual vocation, be assured of their eternal election;",
    scriptures: ["1 Thess. 1:4-5", "2 Pet. 1:10"]
  }, {
    superscript: 19,
    text: "so shall this doctrine afford matter of praise,",
    scriptures: ["Eph. 1:6", "Rom. 11:33"]
  }, {
    superscript: 20,
    text: "reverence, and admiration of God, and of humility,",
    scriptures: ["Rom. 11:5-6, 20"]
  }, {
    superscript: 21,
    text: "diligence, and abundant consolation to all that sincerely obey the gospel.",
    scriptures: ["Luke 10:20"]
  }]]
}, {
  chapter: 4,
  slug: "1689-london-baptist-confession-chapter-4-creation",
  title: "Of Creation",
  topic: ["creation"],
  content: [[{
    superscript: 1,
    text: "In the beginning it pleased God the Father, Son, and Holy Spirit,",
    scriptures: ["John 1:2-3", "Heb. 1:2", "Job 26:13"]
  }, {
    superscript: 2,
    text: "for the manifestation of the glory of His eternal power,",
    scriptures: ["Rom. 1:20"]
  }, {
    superscript: 3,
    text: "wisdom, and goodness, to create or make the world, and all things therein, whether visible or invisible, in the space of six days, and all very good.",
    scriptures: ["Col. 1:16", "Gen. 1:31"]
  }], [{
    superscript: 4,
    text: "After God had made all other creatures, He created man, male and female,",
    scriptures: ["Gen. 1:27"]
  }, {
    superscript: 5,
    text: "with reasonable and immortal souls,",
    scriptures: ["Gen. 2:7"]
  }, {
    superscript: 6,
    text: "rendering them fit unto that life to God for which they were created; being made after the image of God, in knowledge, righteousness, and true holiness;",
    scriptures: ["Eccles. 7:29", "Gen. 1:26"]
  }, {
    superscript: 7,
    text: "having the law of God written in their hearts,",
    scriptures: ["Rom. 2:14-15"]
  }, {
    superscript: 8,
    text: "and power to fulfill it, and yet under a possibility of transgressing, being left to the liberty of their own will, which was subject to change.",
    scriptures: ["Gen. 3:6"]
  }], [{
    superscript: 9,
    text: "Besides the law written in their hearts, they received a command not to eat of the tree of knowledge of good and evil,",
    scriptures: ["Gen. 2:17"]
  }, {
    superscript: 10,
    text: "which while they kept, they were happy in their communion with God, and had dominion over the creatures.",
    scriptures: ["Gen. 1:26, 28"]
  }]]
}, {
  chapter: 5,
  slug: "1689-london-baptist-confession-chapter-5-divine-providence",
  title: "Of Divine Providence",
  topic: ["providence"],
  content: [[{
    superscript: 1,
    text: "God the good Creator of all things, in His infinite power and wisdom does uphold, direct, dispose, and govern all creatures and things,",
    scriptures: ["Heb. 1:3", "Job 38:11", "Isa. 46:10, 11", "Ps. 135:6"]
  }, {
    superscript: 2,
    text: "from the greatest even to the least,",
    scriptures: ["Matt. 10:29-31"]
  }, {
    superscript: 3,
    text: "by His most wise and holy providence, to the end for the which they were created, according unto His infallible foreknowledge, and the free and immutable counsel of His own will; to the praise of the glory of His wisdom, power, justice, infinite goodness, and mercy.",
    scriptures: ["Eph. 1:11"]
  }], [{
    superscript: 4,
    text: "Although in relation to the foreknowledge and decree of God, the first cause, all things come to pass immutably and infallibly;",
    scriptures: ["Acts 2:23"]
  }, {
    superscript: 5,
    text: "so that there is not anything befalls any by chance, or without His providence;",
    scriptures: ["Prov. 16:33"]
  }, {
    superscript: 6,
    text: "yet by the same providence He ordered them to fall out according to the nature of second causes, either necessarily, freely, or contingently.",
    scriptures: ["Gen. 8:22"]
  }], [{
    superscript: 7,
    text: "God, in his ordinary providence makes use of means,",
    scriptures: ["Acts 27:31, 44", "Isa. 55:10-11"]
  }, {
    superscript: 8,
    text: "yet is free to work without,",
    scriptures: ["Hosea 1:7"]
  }, {
    superscript: 9,
    text: "above,",
    scriptures: ["Rom. 4:19-21"]
  }, {
    superscript: 10,
    text: "and against them",
    scriptures: ["Dan. 3:27"]
  }, {
    superscript: "",
    text: "at His pleasure."
  }], [{
    superscript: 11,
    text: "The almighty power, unsearchable wisdom, and infinite goodness of God, so far manifest themselves in His providence, that His determinate counsel extends itself even to the first fall, and all other sinful actions both of angels and men;",
    scriptures: ["Rom. 11:32-34", "2 Sam. 24:1", "1 Chron. 21:1"]
  }, {
    superscript: 12,
    text: "and that not by a bare permission, which also He most wisely and powerfully binds, and otherwise orders and governs,",
    scriptures: ["2 Kings 19:28", "Ps. 76:10"]
  }, {
    superscript: 13,
    text: "in a manifold dispensation to His most holy ends;",
    scriptures: ["Gen. 1:20", "Isa. 10:6-7, 12"]
  }, {
    superscript: 14,
    text: "yet so, as the sinfulness of their acts proceeds only from the creatures, and not from God, who, being most holy and righteous, neither is nor can be the author or approver of sin.",
    scriptures: ["Ps. 1:21", "1 John 2:16"]
  }], [{
    superscript: 15,
    text: "The most wise, righteous, and gracious God does often times leave for a season His own children to manifold temptations and the corruptions of their own hearts, to chastise them for their former sins, or to discover unto them the hidden strength of corruption and deceitfulness of their hearts, that they may be humbled; and to raise them to a more close and constant dependence for their support upon Himself; and to make them more watchful against all future occasions of sin, and for other just and holy ends.",
    scriptures: ["2 Chron. 32:25-26, 31", "2 Cor. 12:7-9"]
  }, {
    superscript: 16,
    text: "So that whatsoever befalls any of His elect is by His appointment, for His glory, and their good.",
    scriptures: ["Rom. 8:28"]
  }], [{
    superscript: 17,
    text: "As for those wicked and ungodly men whom God, as the righteous judge, for former sin does blind and harden;",
    scriptures: ["Rom. 1:24-26, 28, 11:7-8"]
  }, {
    superscript: 18,
    text: "from them He not only withholds His grace, whereby they might have been enlightened in their understanding, and wrought upon their hearts;",
    scriptures: ["Deut. 29:4"]
  }, {
    superscript: 19,
    text: "but sometimes also withdraws the gifts which they had,",
    scriptures: ["Matt. 13:12"]
  }, {
    superscript: 20,
    text: "and exposes them to such objects as their corruption makes occasion of sin;",
    scriptures: ["Deut. 2:30", "2 Kings 8:12-13"]
  }, {
    superscript: 21,
    text: "and withal, gives them over to their own lusts, the temptations of the world, and the power of Satan,",
    scriptures: ["Ps. 81:11-12", "2 Thess. 2:10-12"]
  }, {
    superscript: 22,
    text: "whereby it comes to pass that they harden themselves, under those means which God uses for the softening of others.",
    scriptures: ["Exod. 8:15, 32", "Isa. 6:9-10", "1 Pet. 2:7-8"]
  }], [{
    superscript: 23,
    text: "As the providence of God does in general reach to all creatures, so after a more special manner it takes care of His church, and disposes of all things to the good thereof.",
    scriptures: ["1 Tim. 4:10", "Amos 9:8-9", "Isa. 43:3-5"]
  }]]
}, {
  chapter: 6,
  slug: "1689-london-baptist-confession-chapter-6-fall-man",
  title: "Of the Fall of Man, of Sin, and of the Punishment Thereof",
  topic: ["sin"],
  content: [[{
    superscript: 1,
    text: "Although God created man upright and perfect, and gave him a righteous law, which had been unto life had he kept it, and threatened death upon the breach thereof,",
    scriptures: ["Gen. 2:16-17"]
  }, {
    superscript: 2,
    text: "yet he did not long abide in this honor; Satan using the subtlety of the serpent to subdue Eve, then by her seducing Adam, who, without any compulsion, did willfully transgress the law of their creation, and the command given to them, in eating the forbidden fruit,",
    scriptures: ["Gen. 3:12-13", "2 Cor. 11:3"]
  }, {
    superscript: "",
    text: "which God was pleased, according to His wise and holy counsel to permit, having purposed to order it to His own glory."
  }], [{
    superscript: 3,
    text: "Our first parents, by this sin, fell from their original righteousness and communion with God, and we in them whereby death came upon all:",
    scriptures: ["Rom. 3:23"]
  }, {
    superscript: 4,
    text: "all becoming dead in sin,",
    scriptures: ["Rom 5:12, etc."]
  }, {
    superscript: 5,
    text: "and wholly defiled in all the faculties and parts of soul and body.",
    scriptures: ["Titus 1:15", "Gen. 6:5", "Jer. 17:9", "Rom. 3:10-19"]
  }], [{
    superscript: 6,
    text: "They being the root, and by God's appointment, standing in the room and stead of all mankind, the guilt of the sin was imputed, and corrupted nature conveyed, to all their posterity descending from them by ordinary generation,",
    scriptures: ["Rom. 5:12-19", "1 Cor. 15:21-22, 45, 49"]
  }, {
    superscript: 7,
    text: "being now conceived in sin,",
    scriptures: ["Ps. 51:5", "Job 14:4"]
  }, {
    superscript: 8,
    text: "and by nature children of wrath,",
    scriptures: ["Eph. 2:3"]
  }, {
    superscript: 9,
    text: "the servants of sin, the subjects of death,",
    scriptures: ["Rom. 6:20, 5:12"]
  }, {
    superscript: 10,
    text: "and all other miseries, spiritual, temporal, and eternal, unless the Lord Jesus set them free.",
    scriptures: ["Heb. 2:14-15", "1 Thess. 1:10"]
  }], [{
    superscript: 11,
    text: "From this original corruption, whereby we are utterly indisposed, disabled, and made opposite to all good, and wholly inclined to all evil,",
    scriptures: ["Rom. 8:7", "Col. 1:21"]
  }, {
    superscript: 12,
    text: "do proceed all actual transgressions.",
    scriptures: ["James 1:14-15", "Matt. 15:19"]
  }], [{
    superscript: 13,
    text: "The corruption of nature, during this life, does remain in those that are regenerated;",
    scriptures: ["Rom. 7:18, 23", "Eccles. 7:20", "1 John 1:8"]
  }, {
    superscript: 14,
    text: "and although it be through Christ pardoned and mortified, yet both itself, and the first motions thereof, are truly and properly sin.",
    scriptures: ["Rom. 7:23-25", "Gal. 5:17"]
  }]]
}, {
  chapter: 7,
  slug: "1689-london-baptist-confession-chapter-7-gods-covenant",
  title: "Of God's Covenant",
  topic: ["covenant"],
  content: [[{
    superscript: 1,
    text: "Moreover, man having brought himself under the curse of the law by his fall, it pleased the Lord to make a covenant of grace,",
    scriptures: ["Gen. 2:17", "Gal. 3:10", "Rom. 3:20-21"]
  }], [{
    superscript: 2,
    text: "wherein He freely offers unto sinners life and salvation by Jesus Christ, requiring of them faith in Him, that they may be saved;",
    scriptures: ["Rom. 5:12-19", "1 Cor. 15:21-22, 45, 49"]
  }, {
    superscript: 3,
    text: "being now conceived in sin,",
    scriptures: ["Rom. 8:3", "Mark 16:15-16", "John 3:16"]
  }, {
    superscript: 4,
    text: "and promising to give unto all those that are ordained unto eternal life, His Holy Spirit, to make them willing and able to believe.",
    scriptures: ["Ezek. 36:26-27", "John 6:44-45", "Ps. 110:3"]
  }], [{
    superscript: 5,
    text: "This covenant is revealed in the gospel; first of all to Adam in the promise of salvation by the seed of the woman,",
    scriptures: ["Gen. 3:15"]
  }, {
    superscript: 6,
    text: "and afterwards by farther steps, until the full discovery thereof was completed in the New Testament;",
    scriptures: ["Heb. 1:1"]
  }, {
    superscript: 7,
    text: "and it is founded in that eternal covenant transaction that was between the Father and the Son about the redemption of the elect;",
    scriptures: ["2 Tim. 1:9", "Titus 1:2"]
  }, {
    superscript: 8,
    text: "and it is alone by the grace of this covenant that all the posterity of fallen Adam that ever were saved did obtain life and blessed immortality, man being now utterly incapable of acceptance with God upon those terms on which Adam stood in his state of innocency. ",
    scriptures: ["Heb. 11:6, 13", "Rom. 4:1-2, &c.", "Acts 4:12", "John 8:56"]
  }]]
}, {
  chapter: 8,
  slug: "1689-london-baptist-confession-chapter-8-christ-mediator",
  title: "Of Christ the Mediator",
  topic: ["jesus"],
  content: [[{
    superscript: 1,
    text: "It pleased God, in His eternal purpose, to choose and ordain the Lord Jesus, His only begotten Son, according to the covenant made between them both, to be the mediator between God and man;",
    scriptures: ["Isa. 42:1", "1 Pet. 1:19-20"]
  }, {
    superscript: 2,
    text: "the prophet,",
    scriptures: ["Acts 3:22"]
  }, {
    superscript: 3,
    text: "priest,",
    scriptures: ["Heb. 5:5-6"]
  }, {
    superscript: 4,
    text: "and king;",
    scriptures: ["Ps. 2:6", "Luke 1:33"]
  }, {
    superscript: 5,
    text: "head and savior of the church,",
    scriptures: ["Eph. 1:22-23"]
  }, {
    superscript: 6,
    text: "the heir of all things,",
    scriptures: ["Heb. 1:2"]
  }, {
    superscript: 7,
    text: "and judge of the world;",
    scriptures: ["Acts 17:31"]
  }, {
    superscript: 8,
    text: "unto whom He did from all eternity give a people to be His seed and to be by Him in time redeemed, called, justified, sanctified, and glorified.",
    scriptures: ["Isa. 53:10", "John 17:6", "Rom. 8:30"]
  }], [{
    superscript: 9,
    text: "The Son of God, the second person in the Holy Trinity, being very and eternal God, the brightness of the Father's glory, of one substance and equal with Him who made the world, who upholds and governs all things He has made, did, when the fullness of time was complete, take upon Him man's nature, with all the essential properties and common infirmities of it,",
    scriptures: ["John 1:14", "Gal. 4;4"]
  }, {
    superscript: 10,
    text: "yet without sin;",
    scriptures: ["Rom. 8:3", "Heb. 2:14, 16-17, 4:15"]
  }, {
    superscript: 11,
    text: "being conceived by the Holy Spirit in the womb of the Virgin Mary, the Holy Spirit coming down upon her: and the power of the Most High overshadowing her; and so was made of a woman of the tribe of Judah, of the seed of Abraham and David according to the Scriptures;",
    scriptures: ["Matt. 1:22-23"]
  }, {
    superscript: 12,
    text: "so that two whole, perfect, and distinct natures were inseparably joined together in one person, without conversion, composition, or confusion; which person is very God and very man, yet one Christ, the only mediator between God and man.",
    scriptures: ["Luke 1:27, 31, 35", "Rom. 9:5", "1 Tim. 2:5"]
  }], [{
    superscript: 13,
    text: "The Lord Jesus, in His human nature thus united to the divine, in the person of the Son, was sanctified and anointed with the Holy Spirit above measure,",
    scriptures: ["Ps. 45:7", "Acts 10:38", "John 3:34"]
  }, {
    superscript: 14,
    text: "having in Him all the treasures of wisdom and knowledge;",
    scriptures: ["Col. 2:3"]
  }, {
    superscript: 15,
    text: "in whom it pleased the Father that all fullness should dwell,",
    scriptures: ["Col. 1:19"]
  }, {
    superscript: 16,
    text: "to the end that being holy, harmless, undefiled,",
    scriptures: ["Heb. 7:26"]
  }, {
    superscript: 17,
    text: "and full of grace and truth,",
    scriptures: ["John 1:14"]
  }, {
    superscript: 18,
    text: "He might be throughly furnished to execute the office of mediator and surety;",
    scriptures: ["Heb. 7:22"]
  }, {
    superscript: 19,
    text: "which office He took not upon himself, but was thereunto called by His Father;",
    scriptures: ["Heb. 5:5"]
  }, {
    superscript: 20,
    text: "who also put all power and judgement in His hand, and gave Him commandment to execute the same.",
    scriptures: ["John 5:22, 27", "Matt. 28:18", "Acts 2:36"]
  }], [{
    superscript: 21,
    text: "This office the Lord Jesus did most willingly undertake,",
    scriptures: ["Ps. 40:7-8", "Heb. 10:5-10", "John 10:18"]
  }, {
    superscript: 22,
    text: "which that He might discharge He was made under the law,",
    scriptures: ["Gal 4:4", "Matt. 3:15"]
  }, {
    superscript: 23,
    text: "and did perfectly fulfill it, and underwent the punishment due to us, which we should have born and suffered,",
    scriptures: ["Gal. 3:13", "Isa. 53:6", "1 Pet. 3:18"]
  }, {
    superscript: 24,
    text: "being made sin and a curse for us;",
    scriptures: ["2 Cor. 5:21"]
  }, {
    superscript: 25,
    text: "enduring most grievous sorrows in His soul, and most painful sufferings in His body;",
    scriptures: ["Matt. 26:37, 38", "Luke 22:44", "Matt. 27:46"]
  }, {
    superscript: 26,
    text: "was crucified, and died, and remained in the state of the dead, yet saw no corruption:",
    scriptures: ["Acts 13:37"]
  }, {
    superscript: 27,
    text: "on the third day He arose from the dead",
    scriptures: ["1 Cor. 15:3-4"]
  }, {
    superscript: 28,
    text: "with the same body in which He suffered,",
    scriptures: ["John 20:25, 27"]
  }, {
    superscript: 29,
    text: "with which He also ascended into heaven,",
    scriptures: ["Mark 16:19", "Acts 1:9-11"]
  }, {
    superscript: 30,
    text: "and there sits at the right hand of His Father making intercession,",
    scriptures: ["Rom. 8:34", "Heb. 9:24"]
  }, {
    superscript: 31,
    text: "and shall return to judge men and angels at the end of the world.",
    scriptures: ["Acts 10:42", "Rom. 14:9-10", "Acts 1:11", "2 Pet. 2:4"]
  }], [{
    superscript: 32,
    text: "The Lord Jesus, by His perfect obedience and sacrifice of Himself, which He through the eternal Spirit once offered up to God, has fully satisfied the justice of God,",
    scriptures: ["Heb. 9:14, 10:14", "Rom. 3:25-26"]
  }, {
    superscript: 33,
    text: "procured reconciliation, and purchased an everlasting inheritance in the kingdom of heaven, for all those whom the Father has given unto Him.",
    scriptures: ["John 17:2", "Heb. 9:15"]
  }], [{
    superscript: 34,
    text: "Although the price of redemption was not actually paid by Christ until after His incarnation, yet the virtue, efficacy, and benefit thereof were communicated to the elect in all ages, successively from the beginning of the world, in and by those promises, types, and sacrifices wherein He was revealed, and signified to be the seed which should bruise the serpent's head;",
    scriptures: ["1 Cor. 4:10", "Heb. 4:2", "1 Pet. 1:10-11"]
  }, {
    superscript: 35,
    text: "and the Lamb slain from the foundation of the world,",
    scriptures: ["Rev. 13:8"]
  }, {
    superscript: 36,
    text: "being the same yesterday, and today and for ever.",
    scriptures: ["Heb. 13:8"]
  }], [{
    superscript: 37,
    text: "Christ, in the work of mediation, acts according to both natures, by each nature doing that which is proper to itself; yet by reason of the unity of the person, that which is proper to one nature is sometimes in Scripture, attributed to the person denominated by the other nature.",
    scriptures: ["John 3:13", "Acts 20:28"]
  }], [{
    superscript: 38,
    text: "To all those for whom Christ has obtained eternal redemption, He does certainly and effectually apply and communicate the same, making intercession for them;",
    scriptures: ["John 6:37, 10:15-16, 17:9", "Rom. 5:10"]
  }, {
    superscript: 39,
    text: "uniting them to Himself by His Spirit, revealing to them, in and by His Word, the mystery of salvation, persuading them to believe and obey,",
    scriptures: ["John 17:6", "Eph. 1:9", "1 John 5:20"]
  }, {
    superscript: 40,
    text: "governing their hearts by His Word and Spirit,",
    scriptures: ["Rom. 8:9, 14"]
  }, {
    superscript: 41,
    text: "and overcoming all their enemies by His almighty power and wisdom,",
    scriptures: ["Ps. 110:1", "1 Cor. 15:25-26"]
  }, {
    superscript: 42,
    text: "in such manner and ways as are most consonant to His wonderful and unsearchable dispensation; and all of free and absolute grace, without any condition foreseen in them to procure it.",
    scriptures: ["John 3:8", "Eph. 1:8"]
  }], [{
    superscript: 43,
    text: "This office of mediator between God and man is proper only to Christ, who is the prophet, priest, and king of the church of God; and may not be either in whole, or any part thereof, transferred from Him to any other.",
    scriptures: ["Tim. 2:5"]
  }], [{
    superscript: 44,
    text: "This number and order of offices is necessary; for in respect of our ignorance, we stand in need of His prophetical office;",
    scriptures: ["John 1:18"]
  }, {
    superscript: 45,
    text: "and in respect of our alienation from God, and imperfection of the best of our services, we need His priestly office to reconcile us and present us acceptable unto God;",
    scriptures: ["Col. 1:21", "Gal. 5:17"]
  }, {
    superscript: 46,
    text: "and in respect to our averseness and utter inability to return to God, and for our rescue and security from our spiritual adversaries, we need His kingly office to convince, subdue, draw, uphold, deliver, and preserve us to His heavenly kingdom.",
    scriptures: ["John 16:8", "Ps. 110:3", "Luke 1:74-75"]
  }]]
}, {
  chapter: 9,
  slug: "1689-london-baptist-confession-chapter-9-free-will",
  title: "Of Free Will",
  topic: ["free will"],
  content: [[{
    superscript: 1,
    text: "God has endued the will of man with that natural liberty and power of acting upon choice, that it is neither forced, nor by any necessity of nature determined to do good or evil.",
    scriptures: ["Matt. 17:12", "James 1:14", "Deut. 30:19"]
  }], [{
    superscript: 2,
    text: "Man, in his state of innocency, had freedom and power to will and to do that which was good and well-pleasing to God,",
    scriptures: ["Eccles. 7:29"]
  }, {
    superscript: 3,
    text: "but yet was unstable, so that he might fall from it.",
    scriptures: ["Gen. 3:6"]
  }], [{
    superscript: 4,
    text: "Man, by his fall into a state of sin, has wholly lost all ability of will to any spiritual good accompanying salvation;",
    scriptures: ["Rom. 5:6, 8:7"]
  }, {
    superscript: 5,
    text: "so as a natural man, being altogether averse from that good, and dead in sin,",
    scriptures: ["Eph. 2:1, 5"]
  }, {
    superscript: 6,
    text: "is not able by his own strength to convert himself, or to prepare himself thereunto.",
    scriptures: ["Titus 3:3-5", "John 6:44"]
  }], [{
    superscript: 7,
    text: "When God converts a sinner, and translates him into the state of grace, He frees him from his natural bondage under sin,",
    scriptures: ["Col. 1:13", "John 8:36"]
  }, {
    superscript: 8,
    text: "and by His grace alone enables him freely to will and to do that which is spiritually good;",
    scriptures: ["Phil. 2:13"]
  }, {
    superscript: 9,
    text: "yet so as that by reason of his remaining corruptions, he does not perfectly, nor only will, that which is good, but does also will that which is evil.",
    scriptures: ["Rom. 7:15, 18-19, 21, 23"]
  }], [{
    superscript: 10,
    text: "This will of man is made perfectly and immutably free to good alone in the state of glory only.",
    scriptures: ["Eph. 4:13"]
  }]]
}, {
  chapter: 10,
  slug: "1689-london-baptist-confession-chapter-10-effectual-calling",
  title: "Of Effectual Calling",
  topic: ["calling"],
  content: [[{
    superscript: 1,
    text: "Those whom God hath predestinated unto life, He is pleased in His appointed, and accepted time, effectually to call,",
    scriptures: ["Rom. 8:30, 11:7", "Eph. 1:10, 11", "2 Thess. 2:13-14"]
  }, {
    superscript: 2,
    text: "by His Word and Spirit, out of that state of sin and death in which they are by nature, to grace and salvation by Jesus Christ;",
    scriptures: ["Eph. 2:1-6"]
  }, {
    superscript: 3,
    text: "enlightening their minds spiritually and savingly to understand the things of God;",
    scriptures: ["Acts 26:18", "Eph. 1:17-18"]
  }, {
    superscript: 4,
    text: "taking away their heart of stone, and giving to them a heart of flesh;",
    scriptures: ["Ezek. 36:26"]
  }, {
    superscript: 5,
    text: "renewing their wills, and by His almighty power determining them to that which is good, and effectually drawing them to Jesus Christ;",
    scriptures: ["Deut. 30:6", "Ezek. 36:27", "Eph. 1:19"]
  }, {
    superscript: 6,
    text: "yet so as they come most freely, being made willing by His grace.",
    scriptures: ["Ps. 110:3", "Cant. 1:4"]
  }], [{
    superscript: 7,
    text: "This effectual call is of God's free and special grace alone, not from anything at all foreseen in man, nor from any power or agency in the creature,",
    scriptures: ["2 Tim. 1:9", "Eph. 2:8"]
  }, {
    superscript: 8,
    text: "being wholly passive therein, being dead in sins and trespasses, until being quickened and renewed by the Holy Spirit;",
    scriptures: ["1 Cor. 2:14", "Eph. 2:5", "John 5:25"]
  }, {
    superscript: 9,
    text: "he is thereby enabled to answer this call, and to embrace the grace offered and conveyed in it, and that by no less power than that which raised up Christ from the dead.",
    scriptures: ["Eph. 1:19-20"]
  }], [{
    superscript: 10,
    text: "Elect infants dying in infancy are regenerated and saved by Christ through the Spirit;",
    scriptures: ["John 3:3, 5-6"]
  }, {
    superscript: 11,
    text: "who works when, and where, and how He pleases;",
    scriptures: ["John 3:8"]
  }, {
    superscript: "",
    text: "so also are all elect persons, who are incapable of being outwardly called by the ministry of the Word."
  }], [{
    superscript: 12,
    text: "Others not elected, although they may be called by the ministry of the Word, and may have some common operations of the Spirit,",
    scriptures: ["Matt. 22:14, 13:20-21", "Heb 6:4-5"]
  }, {
    superscript: 13,
    text: "yet not being effectually drawn by the Father, they neither will nor can truly come to Christ, and therefore cannot be saved:",
    scriptures: ["John 6:44-45, 65", "1 John 2:24-25"]
  }, {
    superscript: 14,
    text: "much less can men that do not receive the Christian religion be saved; be they never so diligent to frame their lives according to the light of nature and the law of that religion they do profess.",
    scriptures: ["Acts 4:12", "John 4:22, 17:3"]
  }]]
}, {
  chapter: 11,
  slug: "1689-london-baptist-confession-chapter-11-justification",
  title: "Of Justification",
  topic: ["justification"],
  content: [[{
    superscript: 1,
    text: "Those whom God effectually calls, he also freely justifies,",
    scriptures: ["Rom. 3:24, 8:30"]
  }, {
    superscript: 2,
    text: "not by infusing righteousness into them, but by pardoning their sins, and by accounting and accepting their persons as righteous;",
    scriptures: ["Rom. 4:5-8, Eph. 1:7"]
  }, {
    superscript: 3,
    text: "not for anything wrought in them, or done by them, but for Christ's sake alone;",
    scriptures: ["1 Cor. 1:30-31, Rom. 5:17-19"]
  }, {
    superscript: 4,
    text: "not by imputing faith itself, the act of believing, or any other evangelical obedience to them, as their righteousness; but by imputing Christ's active obedience unto the whole law, and passive obedience in his death for their whole and sole righteousness by faith,",
    scriptures: ["Phil. 3:8-9", "Eph. 2:8-10"]
  }, {
    superscript: 5,
    text: "which faith they have not of themselves; it is the gift of God.",
    scriptures: ["John 1:12, Rom. 5:17"]
  }], [{
    superscript: 6,
    text: "Faith thus receiving and resting on Christ and his righteousness, is the alone instrument of justification;",
    scriptures: ["Rom. 3:28"]
  }, {
    superscript: 7,
    text: "yet is not alone in the person justified, but is ever accompanied with all other saving graces, and is no dead faith, but works by love.",
    scriptures: ["Gal.5:6, James 2:17, 22, 26"]
  }], [{
    superscript: 8,
    text: "Christ, by his obedience and death, did fully discharge the debt of all those who are justified; and did, by the sacrifice of himself in the blood of his cross, undergoing in their stead the penalty due to them, make a proper, real, and full satisfaction to God’s justice in their behalf;",
    scriptures: ["Heb. 10:14", "1 Pet. 1:18-19", "Isa. 53:5-6"]
  }, {
    superscript: 9,
    text: "yet, in as much as he was given by the Father for them, and his obedience and satisfaction accepted in their stead, and both freely, not for anything in them,",
    scriptures: ["Rom. 8:32", "2 Cor. 5:21"]
  }, {
    superscript: 10,
    text: "their justification is only of free grace, that both the exact justice and rich grace of God might be glorified in the justification of sinners.",
    scriptures: ["Rom. 3:26", "Eph. 1:6-7, 2:7"]
  }], [{
    superscript: 11,
    text: "God did from all eternity decree to justify all the elect,",
    scriptures: ["Gal. 3:8, 1 Pet. 1:2, 1 Tim. 2:6"]
  }, {
    superscript: 12,
    text: "and Christ did in the fullness of time die for their sins, and rise again for their justification;",
    scriptures: ["Rom. 4:25"]
  }, {
    superscript: 13,
    text: "nevertheless, they are not justified personally, until the Holy Spirit in time does actually apply Christ to them.",
    scriptures: ["Col. 1:21-22, Titus 3:4-7"]
  }], [{
    superscript: 14,
    text: "God continues to forgive the sins of those that are justified,",
    scriptures: ["Matt. 6:12, 1 John 1:7, 9"]
  }, {
    superscript: 15,
    text: "and although they can never fall from the state of justification,",
    scriptures: ["John 10:28"]
  }, {
    superscript: 16,
    text: "yet they may, by their sins, fall under God’s fatherly displeasure;",
    scriptures: ["Ps. 89:31-33"]
  }, {
    superscript: 17,
    text: "and in that condition they usually do not have the light of his countenance restored to them, until they humble themselves, beg pardon, and renew their faith and repentance.",
    scriptures: ["Ps. 32:5, Ps. 51, Matt. 26:75"]
  }], [{
    superscript: 18,
    text: "The justification of believers under the Old Testament was, in all these respects, one and the same with the justification of believers under the New Testament.",
    scriptures: ["Gal. 3:9", "Rom. 4:22-24"]
  }]]
}, {
  chapter: 12,
  slug: "1689-london-baptist-confession-chapter-12-adoption",
  title: "Of Adoption",
  topic: ["adoption"],
  content: [[{
    superscript: 1,
    text: "All those that are justified, God conferred, in and for the sake of his only Son Jesus Christ, to make partakers of the grace of adoption,",
    scriptures: ["Eph. 1:5", "Gal. 4:4-5"]
  }, {
    superscript: 2,
    text: "by which they are taken into the number, and enjoy the liberties and privileges of the children of God,",
    scriptures: ["John 1:12", "Rom. 8:17"]
  }, {
    superscript: 3,
    text: "have his name put on them,",
    scriptures: ["2 Cor. 6:18", "Rev. 3:12"]
  }, {
    superscript: 4,
    text: "receive the spirit of adoption,",
    scriptures: ["Rom. 8:15"]
  }, {
    superscript: 5,
    text: "have access to the throne of grace with boldness, are enabled to cry Abba, Father,",
    scriptures: ["Gal. 4:6", "Eph. 2:18"]
  }, {
    superscript: 6,
    text: "are pitied,",
    scriptures: ["Ps. 103:13"]
  }, {
    superscript: 7,
    text: "protected,",
    scriptures: ["Prov. 14:26", "1 Pet. 5:7"]
  }, {
    superscript: 8,
    text: "provided for,",
    scriptures: ["Heb. 12:6"]
  }, {
    superscript: 9,
    text: "and chastened by him as by a Father,",
    scriptures: ["Isa. 54:8-9"]
  }, {
    superscript: 10,
    text: "yet never cast off,",
    scriptures: ["Lam. 3:31"]
  }, {
    superscript: 11,
    text: "but sealed to the day of redemption,",
    scriptures: ["Eph. 4:30"]
  }, {
    superscript: 12,
    text: "and inherit the promises as heirs of everlasting salvation.",
    scriptures: ["Heb. 1:14, 6:12"]
  }]]
}, {
  chapter: 13,
  slug: "1689-london-baptist-confession-chapter-13-sanctification",
  title: "Of Sanctification",
  topic: ["sanctification"],
  content: [[{
    superscript: 1,
    text: "They who are united to Christ, effectually called, and regenerated, having a new heart and a new spirit created in them through the virtue of Christ's death and resurrection, are also farther sanctified, really and personally,",
    scriptures: ["Acts 20:32", "Rom. 6:5-6"]
  }, {
    superscript: 2,
    text: "through the same virtue, by his Word and Spirit dwelling in them;",
    scriptures: ["John 17:17", "Eph. 3:16-19", "1 Thess. 5:21-23"]
  }, {
    superscript: 3,
    text: "the dominion of the whole body of sin is destroyed,",
    scriptures: ["Rom. 6:14"]
  }, {
    superscript: 4,
    text: "and the several lusts of it are more and more weakened and mortified,",
    scriptures: ["Gal. 5:24"]
  }, {
    superscript: 5,
    text: "and they more and more quickened and strengthened in all saving graces,",
    scriptures: ["Col. 1:11"]
  }, {
    superscript: 6,
    text: "to the practice of all true holiness, without which no man shall see the Lord.",
    scriptures: ["2 Cor. 7:1", "Heb. 12:14"]
  }], [{
    superscript: 7,
    text: "This sanctification is throughout the whole man,",
    scriptures: ["1 Thess. 5:23"]
  }, {
    superscript: 8,
    text: "yet imperfect in this life; there abides still some remnants of corruption in every part,",
    scriptures: ["Rom. 7:18, 23"]
  }, {
    superscript: 9,
    text: "wherefrom arises a continual and irreconcilable war; the flesh lusting against the Spirit, and the Spirit against the flesh.",
    scriptures: ["Gal. 5:17", "1 Pet. 2:11"]
  }], [{
    superscript: 10,
    text: "In which war, although the remaining corruption for a time may much prevail,",
    scriptures: ["Rom. 7:23"]
  }, {
    superscript: 11,
    text: "yet, through the continual supply of strength from the sanctifying Spirit of Christ, the regenerate part does overcome;",
    scriptures: ["Rom. 6:14"]
  }, {
    superscript: 12,
    text: "and so the saints grow in grace, perfecting holiness in the fear of God, pressing after an heavenly life, in evangelical obedience to all the commands which Christ as Head and King, in his Word has prescribed to them.",
    scriptures: ["Eph. 4:15-16", "2 Cor. 3:18, 7:1"]
  }]]
}, {
  chapter: 14,
  slug: "1689-london-baptist-confession-chapter-14-saving-faith",
  title: "Of Saving Faith",
  topic: ["faith"],
  content: [[{
    superscript: 1,
    text: "The grace of faith, whereby the elect are enabled to believe to the saving of their souls, is the work of the Spirit of Christ in their hearts,",
    scriptures: ["2 Cor. 4:13", "Eph. 2:8"]
  }, {
    superscript: 2,
    text: "and is ordinarily wrought by the ministry of the Word;",
    scriptures: ["Rom. 10:14,17"]
  }, {
    superscript: 3,
    text: "by which also, and by the administration of baptism and the Lord's supper, prayer, and other means appointed of God, it is increased and strengthened.",
    scriptures: ["Luke 17:5", "1 Pet. 2:2", "Acts 20:32"]
  }], [{
    superscript: 4,
    text: "By this faith a Christian believes to be true whatsoever is revealed in the Word for the authority of God himself,",
    scriptures: ["Acts 24:14"]
  }, {
    superscript: 5,
    text: "and also apprehends an excellency therein above all other writings and all things in the world,",
    scriptures: ["Ps. 19:7-10, 69:72"]
  }, {
    superscript: 6,
    text: "as it bears forth the glory of God in his attributes, the excellency of Christ in his nature and offices, and the power and fullness of the Holy Spirit in his workings and operations: and so is enabled to cast his soul upon the truth consequently believed;",
    scriptures: ["2 Tim. 1:12"]
  }, {
    superscript: 7,
    text: "and also acts differently upon that which each particular passage thereof contains; yielding obedience to the commands,",
    scriptures: ["John 15:14"]
  }, {
    superscript: 8,
    text: "trembling at the threatenings,",
    scriptures: ["Isa. 116:2"]
  }, {
    superscript: 9,
    text: "and embracing the promises of God for this life and that which is to come;",
    scriptures: ["Heb. 11:13"]
  }, {
    superscript: 10,
    text: "but the principle acts of saving faith have immediate relation to Christ, accepting, receiving, and resting upon him alone for justification, sanctification, and eternal life, by virtue of the covenant of grace.",
    scriptures: ["John 1:12", "Acts 16:31", "Gal 2:20", "Acts 15:11"]
  }], [{
    superscript: 11,
    text: "This faith, although it be in different stages, and may be weak or strong,",
    scriptures: ["Heb. 5:13-14", "Matt. 6:30", "Rom. 4:19-20"]
  }, {
    superscript: 12,
    text: "yet it is in the least degree of it different in the kind or nature of it, as is all other saving grace, from the faith and common grace of temporary believers;",
    scriptures: ["2 Pet. 1:1"]
  }, {
    superscript: 13,
    text: "and therefore, though it may be many times assailed and weakened, yet it gets the victory,",
    scriptures: ["Eph. 6:16", "1 John 5:4, 5"]
  }, {
    superscript: 14,
    text: "growing up in many to the attainment of a full assurance through Christ,",
    scriptures: ["Heb. 6:11, 12", "Col. 2:2"]
  }, {
    superscript: 15,
    text: "who is both the author and finisher of our faith.",
    scriptures: ["Heb. 12:2"]
  }]]
}, {
  chapter: 15,
  slug: "1689-london-baptist-confession-chapter-15-repentance-unto-life-salvation",
  title: "Of Repentance Unto Life and Salvation",
  topic: ["repentance"],
  content: [[{
    superscript: 1,
    text: "Such of the elect that are converted at riper years, having sometime lived in the state of nature, and therein served divers pleasures, God in their effectual calling gives them repentance to life.",
    scriptures: ["Titus 3:2-5"]
  }], [{
    superscript: 2,
    text: "Whereas there is none that does good and does not sin,",
    scriptures: ["Eccles. 7:20"]
  }, {
    superscript: 3,
    text: "and the best of men may, through the power and deceitfulness of their corruption dwelling in them, with the prevalency of temptation, fall in to great sins and provocations; God has, in the covenant of grace, mercifully provided that believers so sinning and falling be renewed through repentance unto salvation.",
    scriptures: ["Luke 22:31-32"]
  }], [{
    superscript: 4,
    text: "This saving repentance is an evangelical grace,",
    scriptures: ["Zech. 12:10", "Acts 11:18"]
  }, {
    superscript: 5,
    text: "whereby a person, being by the Holy Spirit made sensible of the manifold evils of his sin, does, by faith in Christ, humble himself for it with godly sorrow, detestation of it, and self-abhorrancy,",
    scriptures: ["Ezek. 36:31", "2 Cor. 7:11"]
  }, {
    superscript: 6,
    text: "praying for pardon and strength of grace, with a purpose and endeavor, by supplies of the Spirit, to walk before God unto all well-pleasing in all things.",
    scriptures: ["Ps. 119:6, 128"]
  }], [{
    superscript: 7,
    text: "As repentance is to be continued through the whole course of our lives, upon the account of the body of death, and the motions thereof, so it is every man’s duty to repent of his particular known sins particularly.",
    scriptures: ["Luke 19:8", "1 Tim. 1:13, 15"]
  }], [{
    superscript: 8,
    text: "Such is the provision which God has made through Christ in the covenant of grace for the preservation of believers unto salvation, that although there is no sin so small but it deserves damnation,",
    scriptures: ["Rom. 6:23"]
  }, {
    superscript: 9,
    text: "yet there is no sin so great that it shall bring damnation to them that repent,",
    scriptures: ["Isa. 1:16-18, 55:7"]
  }, {
    superscript: "",
    text: "which makes the constant preaching of repentance necessary."
  }]]
}, {
  chapter: 16,
  slug: "1689-london-baptist-confession-chapter-16-good-works",
  title: "Of Good Works",
  topic: ["good works"],
  content: [[{
    superscript: 1,
    text: "Good works are only such as God has commanded in his Holy Word,",
    scriptures: ["Mic. 6:8", "Heb. 13:21"]
  }, {
    superscript: 2,
    text: "and not such as without the warrant thereof are devised by men out of blind zeal, or upon any pretense of good intentions.",
    scriptures: ["Matt. 15:9", "Isa. 29:13"]
  }], [{
    superscript: 3,
    text: "These good works, done in obedience to God’s commandments, are the fruits and evidences of a true and lively faith;",
    scriptures: ["James 2:18, 22"]
  }, {
    superscript: 4,
    text: "and by them believers manifest their thankfulness,",
    scriptures: ["Ps. 116:12-13"]
  }, {
    superscript: 5,
    text: "strengthen their assurance,",
    scriptures: ["1 John 2:3, 5", "2 Pet. 1:5-11"]
  }, {
    superscript: 6,
    text: "edify their brethren, adorn the profession of the gospel,",
    scriptures: ["Matt. 5:16"]
  }, {
    superscript: 7,
    text: "stop the mouths of the adversaries, and glory God,",
    scriptures: ["1 Tim. 6:1", "1 Pet. 2:15", "Phil. 1:11"]
  }, {
    superscript: 8,
    text: "whose workmanship they are, created in Christ Jesus thereunto,",
    scriptures: ["Eph. 2:10"]
  }, {
    superscript: 9,
    text: "that having their fruit unto holiness they may have the end eternal life.",
    scriptures: ["Rom 6:22"]
  }], [{
    superscript: 10,
    text: "Their ability to do good works is not all of themselves, but wholly from the Spirit of Christ;",
    scriptures: ["John 15:4-5"]
  }, {
    superscript: 11,
    text: "and that they may be enabled thereunto, besides the graces they have already received, there is necessary an actual influence of the same Holy Spirit, to work in them and to will and to do of his good pleasure;",
    scriptures: ["2 Cor. 3:5", "Phil. 2:13"]
  }, {
    superscript: 12,
    text: " yet they are not bound to perform any duty, unless upon a special motion of the Spirit, but they ought to be diligent in stirring up the grace of God that is in them.",
    scriptures: ["Phil. 2:12", "Heb. 6:11, 12", "Isa. 64:7"]
  }], [{
    superscript: 13,
    text: "They who in their obedience attain to the greatest height which is possible in this life, are so far from being able to supererogate, and to do more than God requires, as that they fall short of much which in duty they are bound to do.",
    scriptures: ["Job 9:2-3", "Gal. 5:17", "Luke 17:10"]
  }], [{
    superscript: 14,
    text: "We cannot by our best works merit pardon of sin or eternal life at the hand of God, by reason of the great disproportion that is between them and the glory to come, and the infinite distance that is between us and God, whom by them we can neither profit nor satisfy for the debt of our former sins;",
    scriptures: ["Rom. 3:20", "Eph. 2:8-9", "Rom. 4:6"]
  }, {
    superscript: 15,
    text: "but when we have done all we can, we have done but our duty, and are unprofitable servants; and because they are good they proceed from his Spirit,",
    scriptures: ["Gal. 5:22-23"]
  }, {
    superscript: 16,
    text: "and as they are wrought by us they are defiled and mixed with so much weekness and imperfection, that they cannot endure the severity of God’s punishment.",
    scriptures: ["Isa. 64:6", "Ps. 43:2"]
  }], [{
    superscript: 17,
    text: "Yet notwithstanding the persons of believers being accepted through Christ, their good works also are accepted in him;",
    scriptures: ["Eph. 1:5", "1 Pet. 1:5"]
  }, {
    superscript: 18,
    text: "not as thought they were in this life wholly unblamable and unreprovable in God’s sight, but that he, looking upon them in his Son, is pleased to accept and reward that which is sincere, although accompanied with many weaknesses and imperfection.",
    scriptures: ["Matt. 25:21, 23", "Heb. 6:10"]
  }], [{
    superscript: 19,
    text: "Works done by unregenerate men, although for the matter of them they may things which God commands, and of good use both to themselves and to others;",
    scriptures: ["2 Kings 10:30", "1 Kings 21:27, 29"]
  }, {
    superscript: 20,
    text: "yet because they proceed not from a heart purified by faith,",
    scriptures: ["Gen. 4:5", "Heb. 11:4, 6"]
  }, {
    superscript: 21,
    text: "nor are done in a right manner according to the Word,",
    scriptures: ["1 Cor. 13:1"]
  }, {
    superscript: 22,
    text: "nor to a right end, the glory of God,",
    scriptures: ["Matt. 6:2, 5"]
  }, {
    superscript: 23,
    text: "they are therfore sinful, and cannot please God, nor make a man meet to receive the grace from God,",
    scriptures: ["Amos 5:21-22", "Rom. 9:16", "Titus 3:5"]
  }, {
    superscript: 24,
    text: "and yet their neglect of them is more sinful and displeasing to God.",
    scriptures: ["Job 21:14-15", "Matt. 25:41-43"]
  }]]
}, {
  chapter: 17,
  slug: "1689-london-baptist-confession-chapter-17-perserverance-saints",
  title: "Of the Perseverance of the Saints",
  topic: ["perseverance"],
  content: [[{
    superscript: 1,
    text: "Those whom God has accepted in the beloved, effectually called and sanctified by his Spirit, and given the precious faith of his elect unto, can neither totally nor finally fall from the state of grace, but shall certainly persevere therein to the end, and be eternally saved, seeing the gifts and callings of God are without repentance, from which source he still begets and nourishes in them faith, repentance, love, joy, hope, and all the graces of the Spirit unto immortality;",
    scriptures: ["John 10:28-29", "Phil. 1:6", "2 Tim. 2:19", "1 John 2:19"]
  }, {
    superscript: 2,
    text: "and though many storms and floods arise and beat against them, yet they shall never be able to take them off that foundation and rock which by faith they are fastened upon; notwithstanding, through unbelief and the temptations of Satan, the sensible sight of the light and love of God may for a time be clouded and obscured from them,",
    scriptures: ["Ps. 89:31-32", "1 Cor. 11:32"]
  }, {
    superscript: 3,
    text: "yet he is still the same, and they shall be sure to be kept by the power of God unto salvation, where they shall enjoy their purchased possession, they being engraved upon the palm of his hands, and their names having been written in the book of life from all eternity.",
    scriptures: ["Mal. 3:6"]
  }], [{
    superscript: 4,
    text: "This perseverance of the saints depends not upon their own free will, but upon the immutability of the decree of election,",
    scriptures: ["Rom. 8:30, 9:11, 16"]
  }, {
    superscript: 5,
    text: "flowing from the free and unchangeable love of God the Father, upon the efficacy of the merit and intercession of Jesus Christ and union with him,",
    scriptures: ["Rom. 5:9-10", "John 14:19"]
  }, {
    superscript: 6,
    text: "the oath of God,",
    scriptures: ["Heb. 6:17-18"]
  }, {
    superscript: 7,
    text: "the abiding of his Spirit, and the seed of God within them,",
    scriptures: ["1 John 3:9"]
  }, {
    superscript: 8,
    text: "and the nature of the covenant of grace;",
    scriptures: ["Jer. 32:40"]
  }, {
    superscript: "",
    text: "from all which ariseth also the certainty and infallibility thereof."
  }], [{
    superscript: 9,
    text: "And though they may, through the temptation of Satan and of the world, the prevalency of corruption remaining in them, and the neglect of means of their preservation, fall into grievous sins, and for a time continue therein,",
    scriptures: ["Matt. 26:70, 72, 74"]
  }, {
    superscript: 10,
    text: "whereby they incur God's displeasure and grieve his Holy Spirit,",
    scriptures: ["Isa. 64:5, 9", "Eph. 4:30"]
  }, {
    superscript: 11,
    text: "come to have their graces and comforts impaired,",
    scriptures: ["Ps. 51:10, 12"]
  }, {
    superscript: 12,
    text: "have their hearts hardened, and their consciences wounded,",
    scriptures: ["Ps. 32:3-4"]
  }, {
    superscript: 13,
    text: "hurt and scandalize others, and bring temporal judgments upon themselves,",
    scriptures: ["2 Sam. 12:14"]
  }, {
    superscript: 14,
    text: "yet shall they renew their repentance and be preserved through faith in Christ Jesus to the end.",
    scriptures: ["Luke 22:32, 61, 62"]
  }]]
}, {
  chapter: 18,
  slug: "1689-london-baptist-confession-chapter-18-assurance-grace-salvation",
  title: "Of the Assurance of Grace and Salvation",
  topic: ["assurance"],
  content: [[{
    superscript: 1,
    text: "Although temporary believers and other unregenerate men, may vainly deceive themselves with false hopes and carnal presumptions of being in the favor of God and in a state of salvation, which hope of theirs shall perish;",
    scriptures: ["Job 8:13-14", "Matt. 7:22-23"]
  }, {
    superscript: 2,
    text: "yet such as truly believe in the Lord Jesus, and love him in sincerity, endeavouring to walk in all good conscience before him, may in this life be certainly assured that they are in the state of grace, and may rejoice in the hope of the glory of God,",
    scriptures: ["1 John 2:3, 3:14, 18, 19, 21, 24, 5:13"]
  }, {
    superscript: 3,
    text: "which hope shall never make them ashamed.",
    scriptures: ["Rom. 5:2, 5"]
  }], [{
    superscript: 4,
    text: "This certainty is not a bare conjectural and probable persuasion grounded upon a fallible hope, but an infallible assurance of faith,",
    scriptures: ["Heb. 6:11, 19"]
  }, {
    superscript: 5,
    text: "founded on the blood and righteousness of Christ revealed in the Gospel;",
    scriptures: ["Heb. 6:17-18"]
  }, {
    superscript: 6,
    text: "and also upon the inward evidence of those graces of the Spirit unto which promises are made,",
    scriptures: ["2 Pet. 1:4-5, 10-11"]
  }, {
    superscript: 7,
    text: "and on the testimony of the Spirit of adoption, witnessing with our spirits that we are the children of God;",
    scriptures: ["Rom. 8:15-16"]
  }, {
    superscript: 8,
    text: "and, as a fruit thereof, keeping the heart both humble and holy.",
    scriptures: ["1 John 3:1-3"]
  }], [{
    superscript: 9,
    text: "This infallible assurance does not so belong to the essence of faith, but that a true believer may wait long, and struggle with many difficulties before he be partaker of it;",
    scriptures: ["Isa. 50:10", "Ps. 88", "Ps. 77:1-12"]
  }, {
    superscript: 10,
    text: "yet being enabled by the Spirit to know the things which are freely given him of God, he may, without extraordinary revelation, in the right use of means, attain thereunto:",
    scriptures: ["1 John 4:13", "Heb. 6:11-12"]
  }, {
    superscript: 11,
    text: "and therefore it is the duty of every one to give all diligence to make his calling and election sure, that thereby his heart may be enlarged in peace and joy in the Holy Spirit, in love and thankfulness to God, and in strength and cheerfulness in the duties of obedience, the proper fruits of this assurance;",
    scriptures: ["Rom. 5:1-2, 5, 14:17", "Ps. 119:32"]
  }, {
    superscript: 12,
    text: "-so far is it from inclining men to looseness.",
    scriptures: ["Rom. 6:1-2", "Titus 2:11-12, 14"]
  }], [{
    superscript: 13,
    text: "True believers may have the assurance of their salvation divers ways shaken, diminished, and intermitted; as by negligence in preserving of it,",
    scriptures: ["Cant. 5:2-3, 6"]
  }, {
    superscript: 14,
    text: "by falling into some special sin which wounds the conscience and grieves the Spirit;",
    scriptures: ["Ps. 51:8, 12, 14"]
  }, {
    superscript: 15,
    text: "by some sudden or vehement temptation,",
    scriptures: ["Ps. 116:11", "77:7-8, 31:22"]
  }, {
    superscript: 16,
    text: "by God's withdrawing the light of his countenance, and suffering even such as fear him to walk in darkness and to have no light,",
    scriptures: ["Ps. 30:7"]
  }, {
    superscript: 17,
    text: "yet are they never destitute of the seed of God",
    scriptures: ["1 John 3:9"]
  }, {
    superscript: 18,
    text: "and life of faith,",
    scriptures: ["Luke 22:32"]
  }, {
    superscript: 19,
    text: "that love of Christ and the brethren, that sincerity of heart and conscience of duty out of which, by the operation of the Spirit, this assurance may in due time be revived,",
    scriptures: ["Ps. 42:5, 11"]
  }, {
    superscript: 20,
    text: "and by the which, in the meantime, they are preserved from utter despair.",
    scriptures: ["Lam. 3:26-31"]
  }]]
}, {
  chapter: 19,
  slug: "1689-london-baptist-confession-chapter-19-law-god",
  title: "Of the Law of God",
  topic: ["law"],
  content: [[{
    superscript: 1,
    text: "God gave to Adam a law of universal obedience written in his heart, and a particular precept of not eating the fruit of the tree of knowledge of good and evil;",
    scriptures: ["Gen. 1:27", "Eccles. 7:29"]
  }, {
    superscript: 2,
    text: "by which he bound him and all his posterity to personal, entire, exact, and perpetual obedience;",
    scriptures: ["Rom. 10:5"]
  }, {
    superscript: 3,
    text: "promised life upon the fulfilling, and threatened death upon the breach of it, and endued him with power and ability to keep it.",
    scriptures: ["Gal. 3:10, 12"]
  }], [{
    superscript: 4,
    text: "The same law that was first written in the heart of man continued to be a perfect rule of righteousness after the fall,",
    scriptures: ["Rom. 2:14-15"]
  }, {
    superscript: 5,
    text: "and was delivered by God upon Mount Sinai, in ten commandments, and written in two tables, the four first containing our duty towards God, and the other six, our duty to man.",
    scriptures: ["Deut. 10:4"]
  }], [{
    superscript: 6,
    text: "Besides this law, commonly called moral, God was pleased to give to the people of Israel ceremonial laws, containing several typical ordinances, partly of worship, prefiguring Christ, his graces, actions, sufferings, and benefits;",
    scriptures: ["Heb. 10:1", "Col. 2:17"]
  }, {
    superscript: 7,
    text: "and partly holding forth divers instructions of moral duties,",
    scriptures: ["1 Cor. 5:7"]
  }, {
    superscript: 8,
    text: "all which ceremonial laws being appointed only to the time of reformation, are, by Jesus Christ the true Messiah and only law-giver, who was furnished with power from the Father for that end abrogated and taken away.",
    scriptures: ["Col. 2:14,16-17", "Eph. 2:14,16"]
  }], [{
    superscript: 9,
    text: "To them also he gave sundry judicial laws, which expired together with the state of that people, not obliging any now by virtue of that institution; their general equity only being of modern use.",
    scriptures: ["1 Cor. 9:8-10"]
  }], [{
    superscript: 10,
    text: "The moral law does for ever bind all, as well justified persons as others, to the obedience thereof,",
    scriptures: ["Rom. 13:8-10", "James 2:8, 10-12"]
  }, {
    superscript: 11,
    text: "and that not only in regard of the matter contained in it, but also in respect of the authority of God the Creator, who gave it;",
    scriptures: ["James 2:10, 11"]
  }, {
    superscript: 12,
    text: "neither does Christ in the Gospel any way dissolve, but much strengthen this obligation.",
    scriptures: ["Matt. 5:17-19", "Rom. 3:31"]
  }], [{
    superscript: 13,
    text: "Although true believers are not under the law as a covenant of works, to be thereby justified or condemned,",
    scriptures: ["Rom. 6:14", "Gal. 2:16", "Rom. 8:1, 10:4"]
  }, {
    superscript: 14,
    text: "yet it is of great use to them as well as to others, in that as a rule of life, informing them of the will of God and their duty, it directs and binds them to walk accordingly; discovering also the sinful pollutions of their natures, hearts, and lives, so as examining themselves thereby, they may come to further conviction of, humiliation for, and hatred against, sin;",
    scriptures: ["Rom. 3:20, 7:7, etc."]
  }, {
    superscript: 15,
    text: "together with a clearer sight of the need they have of Christ and the perfection of his obedience; it is likewise of use to the regenerate to restrain their corruptions, in that it forbids sin; and the threatenings of it serve to show what even their sins deserve, and what afflictions in this life they may expect for them, although freed from the curse and unallayed rigour thereof. The promises of it likewise show them God's approbation of obedience, and what blessings they may expect upon the performance thereof, though not as due to them by the law as a covenant of works; so as man's doing good and refraining from evil, because the law encourages to the one and deters from the other, is no evidence of his being under the law and not under grace.",
    scriptures: ["Rom. 6:12-14", "1 Pet. 3:8-13"]
  }], [{
    superscript: 16,
    text: "Neither are the aforementioned uses of the law contrary to the grace of the Gospel, but do sweetly comply with it,",
    scriptures: ["Gal. 3:21"]
  }, {
    superscript: 17,
    text: "the Spirit of Christ subduing and enabling the will of man to do that freely and cheerfully which the will of God, revealed in the law, requires to be done.",
    scriptures: ["Ezek. 36:27"]
  }]]
}, {
  chapter: 20,
  slug: "1689-london-baptist-confession-chapter-20-gospel-extent-grace-thereof",
  title: "Of the Gospel and the Extent of Grace thereof",
  topic: ["gospel"],
  content: [[{
    superscript: 1,
    text: "The covenant of works being broken by sin, and made unprofitable unto life, God was pleased to give forth the promise of Christ, the seed of the woman, as the means of calling the elect, and begetting in them faith and repentance;",
    scriptures: ["Gen. 3:15"]
  }, {
    superscript: 2,
    text: "in this promise the gospel, as to the substance of it, was revealed, and [is] therein effectual for the conversion and salvation of sinners.",
    scriptures: ["Rev. 13:8"]
  }], [{
    superscript: 3,
    text: "This promise of Christ, and salvation by him, is revealed only by the Word of God;",
    scriptures: ["Rom. 1:17"]
  }, {
    superscript: 4,
    text: "neither do the works of creation or providence, with the light of nature, make discovery of Christ, or of grace by him, so much as in a general or obscure way;",
    scriptures: ["Rom. 10:14-15, 17"]
  }, {
    superscript: 5,
    text: "much less that men destitute of the revelation of Him by the promise or gospel, should be enabled thereby to attain saving faith or repentance.",
    scriptures: ["Prov. 29:18", "Isa. 25:7", "60:2-3"]
  }], [{
    superscript: 6,
    text: "The revelation of the gospel to sinners, made in divers times and by sundry parts, with the addition of promises and precepts for the obedience required therein, as to the nations and persons to whom it is granted, is merely of the sovereign will and good pleasure of God;",
    scriptures: ["Ps. 147:20", "Acts 16:7"]
  }, {
    superscript: 7,
    text: "not being annexed by virtue of any promise to the due improvement of men's natural abilities, by virtue of common light received without it, which none ever made, or can do so;",
    scriptures: ["Rom. 1:18-32"]
  }, {
    superscript: "",
    text: "and therefore in all ages, the preaching of the gospel has been granted unto persons and nations, as to the extent or straitening of it, in great variety, according to the counsel of the will of God."
  }], [{
    superscript: 8,
    text: "Although the gospel be the only outward means of revealing Christ and saving grace, and is, as such, abundantly sufficient thereunto; yet that men who are dead in trespasses may be born again, quickened or regenerated, there is moreover necessary an effectual insuperable work of the Holy Spirit upon the whole soul, for the producing in them a new spiritual life;",
    scriptures: ["Ps. 110:3", "1 Cor. 2:14", "Eph. 1:19-20"]
  }, {
    superscript: 9,
    text: "without which no other means will effect their conversion unto God.",
    scriptures: ["John 6:44", "2 Cor. 4:4, 6"]
  }]]
}, {
  chapter: 21,
  slug: "1689-london-baptist-confession-chapter-21-christian-liberty-liberty-conscience",
  title: "Of Christian Liberty and Liberty of Conscience",
  topic: ["liberty"],
  content: [[{
    superscript: 1,
    text: "The liberty which Christ has purchased for believers under the gospel, consists in their freedom from the guilt of sin, the condemning wrath of God, the severity and curse of the law,",
    scriptures: ["Gal. 3:13"]
  }, {
    superscript: 2,
    text: "and in their being delivered from this present evil world,",
    scriptures: ["Gal. 1:4"]
  }, {
    superscript: 3,
    text: "bondage to Satan,",
    scriptures: ["Acts 26:18"]
  }, {
    superscript: 4,
    text: "and dominion of sin,",
    scriptures: ["Rom. 8:3"]
  }, {
    superscript: 5,
    text: "from the evil of afflictions,",
    scriptures: ["Rom. 8:28"]
  }, {
    superscript: 6,
    text: "the fear and sting of death, the victory of the grave,",
    scriptures: ["1 Cor. 15:54-57"]
  }, {
    superscript: 7,
    text: " and everlasting damnation:",
    scriptures: ["2 Thess. 1:10"]
  }, {
    superscript: 8,
    text: "as also in their free access to God, and their yielding obedience unto Him, not out of slavish fear,",
    scriptures: ["Rom. 8:15"]
  }, {
    superscript: 9,
    text: "but a child-like love and willing mind.",
    scriptures: ["Luke 1:73-75", "1 John 4:18"]
  }, {
    superscript: 10,
    text: "All which were common also to believers under the law for the substance of them;",
    scriptures: ["Gal. 3:9, 14"]
  }, {
    superscript: 11,
    text: "but under the New Testament the liberty of Christians is further enlarged, in their freedom from the yoke of a ceremonial law, to which the Jewish church was subjected, and in greater boldness of access to the throne of grace, and in fuller communications of the free Spirit of God, than believers under the law did ordinarily partake of.",
    scriptures: ["John 7:38-39", "Heb. 10:19-21"]
  }], [{
    superscript: 12,
    text: "God alone is Lord of the conscience,",
    scriptures: ["James 4:12", "Rom. 14:4"]
  }, {
    superscript: 13,
    text: "and has left it free from the doctrines and commandments of men which are in any thing contrary to his word, or not contained in it.",
    scriptures: ["Acts 4:19, 29", "1 Cor. 7:23", "Matt. 15:9"]
  }, {
    superscript: 14,
    text: "So that to believe such doctrines, or obey such commands out of conscience, is to betray true liberty of conscience;",
    scriptures: ["Col. 2:20, 22-23"]
  }, {
    superscript: 15,
    text: "and the requiring of an implicit faith, an absolute and blind obedience, is to destroy liberty of conscience and reason also.",
    scriptures: ["1 Cor. 3:5", "2 Cor. 1:24"]
  }], [{
    superscript: 16,
    text: "They who upon pretence of Christian liberty do practice any sin, or cherish any sinful lust, as they do thereby pervert the main design of the grace of the gospel to their own destruction,",
    scriptures: ["Rom. 6:1-2"]
  }, {
    superscript: 17,
    text: "so they wholly destroy the end of Christian liberty, which is, that being delivered out of the hands of all our enemies, we might serve the Lord without fear, in holiness and righeousness before Him, all the days of our lives.",
    scriptures: ["Gal. 5:13", "2 Pet. 2:18, 21"]
  }]]
}, {
  chapter: 22,
  slug: "1689-london-baptist-confession-chapter-22-religious-worship-sabbath-day",
  title: "Of Religious Worship and the Sabbath Day",
  topic: ["sabbath"],
  content: [[{
    superscript: 1,
    text: "The light of nature shows that there is a God, who has lordship and sovereignty over all; is just, good and does good to all; and is therefore to be feared, loved, praised, called upon, trusted in, and served, with all the heart and all the soul, and with all the might.",
    scriptures: ["Jer. 10:7", "Mark 12:33"]
  }, {
    superscript: 2,
    text: "But the acceptable way of worshipping the true God, is instituted by himself,",
    scriptures: ["Deut. 12:32"]
  }, {
    superscript: 3,
    text: "and so limited by his own revealed will, that he may not be worshipped according to the imagination and devices of men, nor the suggestions of Satan, under any visible representations, or any other way not prescribed in the Holy Scriptures.",
    scriptures: ["Exod. 20:4-6"]
  }], [{
    superscript: 4,
    text: "Religious worship is to be given to God the Father, Son, and Holy Spirit, and to him alone;",
    scriptures: ["Matt. 4:9, 10", "John 6:23", "Matt. 28:19"]
  }, {
    superscript: 5,
    text: "not to angels, saints, or any other creatures;",
    scriptures: ["Rom. 1:25", "Col. 2:18", "Rev. 19:10"]
  }, {
    superscript: 6,
    text: "and since the fall, not without a mediator,",
    scriptures: ["John 14:6"]
  }, {
    superscript: 7,
    text: "nor in the mediation of any other but Christ alone.",
    scriptures: ["1 Tim. 2:5"]
  }], [{
    superscript: 8,
    text: "Prayer, with thanksgiving, being one part of natural worship, is by God required of all men.",
    scriptures: ["Ps. 95:1-7, 65:2"]
  }, {
    superscript: 9,
    text: "But that it may be accepted, it is to be made in the name of the Son,",
    scriptures: ["John 14:13-14"]
  }, {
    superscript: 10,
    text: "by the help of the Spirit,",
    scriptures: ["Rom. 8:26"]
  }, {
    superscript: 11,
    text: "according to his will;",
    scriptures: ["1 John 5:14"]
  }, {
    superscript: 12,
    text: "with understanding, reverence, humility, fervency, faith, love, and perseverance; and when with others, in a known tongue.",
    scriptures: ["1 Cor. 14:16, 17"]
  }], [{
    superscript: 13,
    text: "Prayer is to be made for things lawful, and for all sorts of men living, or that shall live hereafter;",
    scriptures: ["1 Tim. 2:1-2", "2 Sam. 7:29"]
  }, {
    superscript: 14,
    text: "but not for the dead,",
    scriptures: ["2 Sam. 12:21-23"]
  }, {
    superscript: 15,
    text: "nor for those of whom it may be known that they have sinned the sin unto death.",
    scriptures: ["1 John 5:16"]
  }], [{
    superscript: 16,
    text: "The reading of the Scriptures,",
    scriptures: ["1 Tim. 4:13"]
  }, {
    superscript: 17,
    text: "preaching, and hearing the Word of God,",
    scriptures: ["2 Tim. 4:2", "Luke 8:18"]
  }, {
    superscript: 18,
    text: "teaching and admonishing one another in psalms, hymns, and spiritual songs, singing with grace in our hearts to the Lord;",
    scriptures: ["Col. 3:16", "Eph. 5:19"]
  }, {
    superscript: 19,
    text: "as also the administration of baptism,",
    scriptures: ["Matt. 28:19-20"]
  }, {
    superscript: 20,
    text: "and the Lord's supper,",
    scriptures: ["1 Cor. 11:26"]
  }, {
    superscript: 21,
    text: "are all parts of religious worship of God, to be performed in obedience to him, with understanding, faith, reverence, and godly fear; moreover, solemn humiliation, with fastings,",
    scriptures: ["Esther 4:16", "Joel 2:12"]
  }, {
    superscript: 22,
    text: "and thanksgivings, upon special occasions, ought to be used in an holy and religious manner.",
    scriptures: ["Exod. 15:1-19, Ps. 107"]
  }], [{
    superscript: 23,
    text: "Neither prayer nor any other part of religious worship, is now under the gospel, tied unto, or made more acceptable by any place in which it is performed, or towards which it is directed; but God is to be worshipped everywhere in spirit and in truth;",
    scriptures: ["John 4:21", "Mal. 1:11", "1 Tim. 2:8"]
  }, {
    superscript: 24,
    text: "as in private families",
    scriptures: ["Acts 10:2"]
  }, {
    superscript: 25,
    text: "daily,",
    scriptures: ["Matt. 6:11", "Ps. 55:17"]
  }, {
    superscript: 26,
    text: "and in secret each one by himself;",
    scriptures: ["Matt. 6:6"]
  }, {
    superscript: 27,
    text: "so more solemnly in the public assemblies, which are not carelessly nor wilfully to be neglected or forsaken, when God by his word or providence calls thereunto.",
    scriptures: ["Heb. 10:25", "Acts 2:42"]
  }], [{
    superscript: 28,
    text: "As it is the law of nature, that in general a proportion of time, by God's appointment, be set apart for the worship of God, so by his Word, in a positive moral, and perpetual commandment, binding all men, in all ages, he has particularly appointed one day in seven for a sabbath to be kept holy unto him,",
    scriptures: ["Exod. 20:8"]
  }, {
    superscript: 29,
    text: "which from the beginning of the world to the resurrection of Christ was the last day of the week, and from the resurrection of Christ was changed into the first day of the week, which is called the Lord's Day:",
    scriptures: ["1 Cor. 16:1-2", "Acts 20:7", "Rev. 1:10"]
  }, {
    superscript: "",
    text: "and is to be continued to the end of the world as the Christian Sabbath, the observation of the last day of the week being abolished."
  }], [{
    superscript: 30,
    text: "The sabbath is then kept holy unto the Lord, when men, after a due preparing of their hearts, and ordering their common affairs aforehand, do not only observe a holy rest all day, from their own works, words and thoughts, about their worldly employment and recreations,",
    scriptures: ["Isa. 58:13", "Neh. 13:15-22"]
  }, {
    superscript: 31,
    text: "but are also taken up the whole time in the public and private exercises of his worship, and in the duties of necessity and mercy.",
    scriptures: ["Matt. 12:1-13"]
  }]]
}, {
  chapter: 23,
  slug: "1689-london-baptist-confession-chapter-23-lawful-oaths-vows",
  title: "Of Lawful Oaths and Vows",
  topic: ["vows"],
  content: [[{
    superscript: 1,
    text: "A lawful oath is a part of religious worship, wherein the person swearing in truth, righteousness, and judgment, solemnly calls God to witness what he swears,",
    scriptures: ["Exod. 20:7", "Deut. 10:20", "Jer. 4:2"]
  }, {
    superscript: 2,
    text: "and to judge him according to the truth or falseness thereof.",
    scriptures: ["2 Chron. 6:22-23"]
  }], [{
    superscript: 3,
    text: "The name of God only is that by which men ought to swear; and therein it is to be used, with all holy fear and reverence; therefore to swear vainly or rashly by that glorious and dreadful name, or to swear at all by any other thing, is sinful, and to be abhorred;",
    scriptures: ["Matt. 5:34, 37", "James 5:12"]
  }, {
    superscript: 4,
    text: "yet as in matter of weight and moment, for confirmation of truth, and ending all strife, an oath is warranted by the word of God;",
    scriptures: ["Heb. 6:16", "2 Cor. 1:23"]
  }, {
    superscript: 5,
    text: "so a lawful oath being imposed by lawful authority in such matters, ought to be taken.",
    scriptures: ["Neh. 13:25"]
  }], [{
    superscript: 6,
    text: "Whosoever takes an oath warranted by the word of God, ought duly to consider the weightiness of so solemn an act, and therein to avouch nothing but what he knows to be truth; for that by rash, false, and vain oaths, the Lord is provoked, and for them this land mourns.",
    scriptures: ["Lev. 19:12", "Jer. 23:10"]
  }], [{
    superscript: 7,
    text: "An oath is to be taken in the plain and common sense of the words, without equivocation or mental reservation.",
    scriptures: ["Ps. 24:4"]
  }], [{
    superscript: 8,
    text: "A vow, which is not to be made to any creature, but to God alone, is to be made and performed with all religious care and faithfulness;",
    scriptures: ["Ps. 76:11", "Gen. 28:20-22"]
  }, {
    superscript: 9,
    text: "but popish monastical vows of perpetual single life,",
    scriptures: ["1 Cor. 7:2, 9"]
  }, {
    superscript: 10,
    text: "professed poverty,",
    scriptures: ["Eph. 4:28"]
  }, {
    superscript: 11,
    text: "and regular obedience, are so far from being degrees of higher perfection, that they are superstitious and sinful snares, in which no Christian may entangle himself.",
    scriptures: ["Matt. 19:1"]
  }]]
}, {
  chapter: 24,
  slug: "1689-london-baptist-confession-chapter-24-civil-magistrate",
  title: "Of the Civil magistrate",
  topic: ["government"],
  content: [[{
    superscript: 1,
    text: "God, the supreme Lord and King of all the world, has ordained civil magistrates to be under him, over the people, for his own glory and the public good; and to this end has armed them with the power of the sword, for defence and encouragement of them that do good, and for the punishment of evil doers.",
    scriptures: ["Rom. 13:1-4"]
  }], [{
    superscript: 3,
    text: "It is lawful for Christians to accept and execute the office of a magistrate when called thereunto; in the management whereof, as they ought especially to maintain justice and peace,",
    scriptures: ["2 Sam. 23:3", "Ps. 82:3-4"]
  }, {
    superscript: 4,
    text: "according to the wholesome laws of each kingdom and commonwealth, so for that end they may lawfully now, under the New Testament, wage war upon just and necessary occasions.",
    scriptures: ["Luke 3:14"]
  }], [{
    superscript: 5,
    text: "Civil magistrates being set up by God for the ends aforesaid; subjection, in all lawful things commanded by them, ought to be yielded by us in the Lord, not only for wrath, but for conscience’ sake;",
    scriptures: ["Rom. 13:5-7", "1 Pet. 2:17"]
  }, {
    superscript: 6,
    text: "and we ought to make supplications and prayers for kings and all that are in authority, that under them we may live a quiet and peaceable life, in all godliness and honesty.",
    scriptures: ["1 Tim. 2:1-2"]
  }]]
}, {
  chapter: 25,
  slug: "1689-london-baptist-confession-chapter-25-marriage",
  title: "Of Marriage",
  topic: ["marriage"],
  content: [[{
    superscript: 1,
    text: "Marriage is to be between one man and one woman; neither is it lawful for any man to have more than one wife, nor for any woman to have more than one husband at the same time.",
    scriptures: ["Gen. 2:24", "Mal. 2:15", "Matt. 19:5-6"]
  }], [{
    superscript: 2,
    text: "Marriage was ordained for the mutual help of husband and wife,",
    scriptures: ["Gen. 2:18"]
  }, {
    superscript: 3,
    text: "for the increase of mankind with a legitimate issue,",
    scriptures: ["Gen. 1:28"]
  }, {
    superscript: 4,
    text: "and the preventing of uncleanness.",
    scriptures: ["1 Cor. 7:2, 9"]
  }], [{
    superscript: 5,
    text: "It is lawful for all sorts of people to marry, who are able with judgment to give their consent;",
    scriptures: ["Heb. 13:4", "1 Tim. 4:3"]
  }, {
    superscript: 6,
    text: "yet it is the duty of Christians to marry in the Lord;",
    scriptures: ["1 Cor. 7:39"]
  }, {
    superscript: 7,
    text: "and therefore such as profess the true religion, should not marry with infidels, or idolaters; neither should such as are godly, be unequally yoked, by marrying with such as are wicked in their life, or maintain damnable heresy.",
    scriptures: ["Neh. 13:25-27"]
  }], [{
    superscript: 8,
    text: "Marriage ought not to be within the degrees of consanguinity or affinity, forbidden in the Word;",
    scriptures: ["Lev. 18"]
  }, {
    superscript: 9,
    text: "nor can such incestuous marriages ever be made lawful, by any law of man or consent of parties, so as those persons may live together as man and wife.",
    scriptures: ["Mark 6:18", "1 Cor. 5:1"]
  }]]
}, {
  chapter: 26,
  slug: "1689-london-baptist-confession-chapter-26-church",
  title: "Of the Church",
  topic: ["church"],
  content: [[{
    superscript: 1,
    text: "The catholic or universal church, which (with respect to the internal work of the Spirit and truth of grace) may be called invisible, consists of the whole number of the elect, that have been, are, or shall be gathered into one, under Christ, the head thereof; and is the spouse, the body, the fulness of him that fills all in all.",
    scriptures: ["Heb. 12:23", "Col. 1:18", "Eph. 1:10, 22-23, 5:23, 27, 32"]
  }], [{
    superscript: 2,
    text: "All persons throughout the world, professing the faith of the gospel, and obedience unto God by Christ according unto it, not destroying their own profession by any errors everting the foundation, or unholiness of conversation, are and may be called visible saints;",
    scriptures: ["1 Cor. 1:2", "Acts 11:26"]
  }, {
    superscript: 3,
    text: "and of such ought all particular congregations to be constituted.",
    scriptures: ["Rom. 1:7", "Eph. 1:20-22"]
  }], [{
    superscript: 4,
    text: "The purest churches under heaven are subject to mixture and error;",
    scriptures: ["1 Cor. 5", "Rev. 2-3"]
  }, {
    superscript: 5,
    text: "and some have so degenerated as to become no churches of Christ, but synagogues of Satan;",
    scriptures: ["Rev. 18:2", "2 Thess. 2:11-12"]
  }, {
    superscript: 6,
    text: "nevertheless Christ always has had, and ever shall have a kingdom in this world, to the end thereof, of such as believe in him, and make profession of his name.",
    scriptures: ["Matt. 16:18", "Ps. 72:17, 102:28", "Rev. 12:17"]
  }], [{
    superscript: 7,
    text: "The Lord Jesus Christ is the Head of the church, in whom, by the appointment of the Father, all power for the calling, institution, order or government of the church, is invested in a supreme and sovereign manner;",
    scriptures: ["Col. 1:18", "Matt. 28:18-20", "Eph. 4:11-12"]
  }, {
    superscript: 8,
    text: "neither can the Pope of Rome in any sense be head thereof, but is that antichrist, that man of sin, and son of perdition, that exalts himself in the church against Christ, and all that is called God; whom the Lord shall destroy with the brightness of his coming.",
    scriptures: ["2 Thess. 2:2-9"]
  }], [{
    superscript: 9,
    text: "In the execution of this power wherewith he is so intrusted, the Lord Jesus calls out of the world unto himself, through the ministry of his word, by his Spirit, those that are given unto him by his Father,",
    scriptures: ["John 10:16", "John 12:32"]
  }, {
    superscript: 10,
    text: "that they may walk before him in all the ways of obedience, which he prescribes to them in his word.",
    scriptures: ["Matt. 28:20"]
  }, {
    superscript: 11,
    text: "Those thus called, he commands to walk together in particular societies, or churches, for their mutual edification, and the due performance of that public worship, which he requires of them in the world.",
    scriptures: ["Matt. 18:15-20"]
  }], [{
    superscript: 12,
    text: "The members of these churches are saints by calling, visibly manifesting and evidencing (in and by their profession and walking) their obedience unto that call of Christ;",
    scriptures: ["Rom. 1:7", "1 Cor. 1:2"]
  }, {
    superscript: 13,
    text: "and do willingly consent to walk together, according to the appointment of Christ; giving up themselves to the Lord, and one to another, by the will of God, in professed subjection to the ordinances of the Gospel.",
    scriptures: ["Acts 2:41-42, 5:13-14", "2 Cor. 9:13"]
  }], [{
    superscript: 14,
    text: "To each of these churches therefore gathered, according to his mind declared in his word, he has given all that power and authority, which is in any way needful for their carrying on that order in worship and discipline, which he has instituted for them to observe; with commands and rules for the due and right exerting, and executing of that power.",
    scriptures: ["Matt. 18:17-18", "1 Cor. 5:4-5, 5:13, 2 Cor. 2:6-8"]
  }], [{
    superscript: 15,
    text: "A particular church, gathered and completely organized according to the mind of Christ, consists of officers and members; and the officers appointed by Christ to be chosen and set apart by the church (so called and gathered), for the peculiar administration of ordinances, and execution of power or duty, which he intrusts them with, or calls them to, to be continued to the end of the world, are bishops or elders, and deacons.",
    scriptures: ["Acts 20:17, 28", "Phil. 1:1"]
  }], [{
    superscript: 16,
    text: "The way appointed by Christ for the calling of any person, fitted and gifted by the Holy Spirit, unto the office of bishop or elder in a church, is, that he be chosen thereunto by the common suffrage of the church itself;",
    scriptures: ["Acts 14:23"]
  }, {
    superscript: 17,
    text: "and solemnly set apart by fasting and prayer, with imposition of hands of the eldership of the church, if there be any before constituted therein;",
    scriptures: ["1 Tim. 4:14"]
  }, {
    superscript: 18,
    text: "and of a deacon that he be chosen by the like suffrage, and set apart by prayer, and the like imposition of hands.",
    scriptures: ["Acts 6:3, 5-6"]
  }], [{
    superscript: 19,
    text: "The work of pastors being constantly to attend the service of Christ, in his churches, in the ministry of the word and prayer, with watching for their souls, as they that must give an account to Him;",
    scriptures: ["Acts 6:4", "Heb. 13:17"]
  }, {
    superscript: 20,
    text: "it is incumbent on the churches to whom they minister, not only to give them all due respect, but also to communicate to them of all their good things according to their ability,",
    scriptures: ["1 Tim. 5:17-18", "Gal. 6:6-7"]
  }, {
    superscript: 21,
    text: "so as they may have a comfortable supply, without being themselves entangled in secular affairs;",
    scriptures: ["2 Tim. 2:4"]
  }, {
    superscript: 22,
    text: "and may also be capable of exercising hospitality towards others;",
    scriptures: ["1 Tim. 3:2"]
  }, {
    superscript: 23,
    text: "and this is required by the law of nature, and by the express order of our Lord Jesus, who has ordained that they that preach the Gospel should live of the Gospel.",
    scriptures: ["1 Cor. 9:6-14"]
  }], [{
    superscript: 24,
    text: "Although it be incumbent on the bishops or pastors of the churches, to be instant in preaching the word, by way of office, yet the work of preaching the word is not so peculiarly confined to them but that others also gifted and fitted by the Holy Spirit for it, and approved and called by the church, may and ought to perform it.",
    scriptures: ["Acts 11:19-21", "1 Pet. 4:10-11"]
  }], [{
    superscript: 25,
    text: "As all believers are bound to join themselves to particular churches, when and where they have opportunity so to do; so all that are admitted unto the privileges of a church, are also under the censures and government thereof, according to the rule of Christ.",
    scriptures: ["1 Thess. 5:14", "2 Thess. 3:6, 14-15"]
  }], [{
    superscript: 26,
    text: "No church members, upon any offence taken by them, having performed their duty required of them towards the person they are offended at, ought to disturb any church-order, or absent themselves from the assemblies of the church, or administration of any ordinances, upon the account of such offence at any of their fellow members, but to wait upon Christ, in the further proceeding of the church.",
    scriptures: ["Matt. 18:15-17", "Eph. 4:2-3"]
  }], [{
    superscript: 27,
    text: "As each church, and all the members of it, are bound to pray continually for the good and prosperity of all the churches of Christ,",
    scriptures: ["Eph. 6:18", "Ps. 122:6"]
  }, {
    superscript: 28,
    text: "in all places, and upon all occasions to further every one within the bounds of their places and callings, in the exercise of their gifts and graces, so the churches, when planted by the providence of God, so as they may enjoy opportunity and advantage for it, ought to hold communion among themselves, for their peace, increase of love, and mutual edification.",
    scriptures: ["Rom. 16:1-2", "3 John 8-10"]
  }], [{
    superscript: 29,
    text: "In cases of difficulties or differences, either in point of doctrine or administration, wherein either the churches in general are concerned, or any one church, in their peace, union, and edification; or any member or members of any church are injured, in or by any proceedings in censures not agreeable to truth and order: it is according to the mind of Christ, that many churches holding communion together, do, by their messengers, meet to consider, and give their advice in or about that matter in difference, to be reported to all the churches concerned;",
    scriptures: ["Acts 15:2, 4, 6, 22-23, 25"]
  }, {
    superscript: 30,
    text: "howbeit these messengers assembled, are not intrusted with any church-power properly so called; or with any jurisdiction over the churches themselves, to exercise any censures either over any churches or persons; or to impose their determination on the churches or officers.",
    scriptures: ["2 Cor. 1:24", "1 John 4:1"]
  }]]
}, {
  chapter: 27,
  slug: "1689-london-baptist-confession-chapter-27-communion-saints",
  title: "Of the Communion of Saints",
  topic: ["communion of saints"],
  content: [[{
    superscript: 1,
    text: "All saints that are united to Jesus Christ, their head, by his Spirit, and faith, although they are not made thereby one person with him, have fellowship in his graces, sufferings, death, resurrection, and glory;",
    scriptures: ["1 John 1:3", "John 1:16", "Phil. 3:10", "Rom. 6:5-6"]
  }, {
    superscript: 2,
    text: "and, being united to one another in love, they have communion in each others gifts and graces,",
    scriptures: ["Eph. 4:15-16", "1 Cor. 12:7", "3:21-23"]
  }, {
    superscript: 3,
    text: "and are obliged to the performance of such duties, public and private, in an orderly way, as do conduce to their mutual good, both in the inward and outward man.",
    scriptures: ["1 Thess. 5:11, 14", "Rom. 1:12", "1 John 3:17-18", "Gal. 6:10"]
  }], [{
    superscript: 4,
    text: "Saints by profession are bound to maintain a holy fellowship and communion in the worship of God, and in performing such other spiritual services as tend to their mutual edification;",
    scriptures: ["Heb. 10:24-25, 3:12-13"]
  }, {
    superscript: 5,
    text: "as also in relieving each other in outward things according to their several abilities, and necessities;",
    scriptures: ["Acts 11:29-30"]
  }, {
    superscript: 6,
    text: "which communion, according to the rule of the gospel, though especially to be exercised by them, in the relation wherein they stand, whether in families,",
    scriptures: ["Eph. 6:4"]
  }, {
    superscript: 7,
    text: "or churches,",
    scriptures: ["1 Cor. 12:14-27"]
  }, {
    superscript: 8,
    text: "yet, as God offers opportunity, is to be extended to all the household of faith, even all those who in every place call upon the name of the Lord Jesus; nevertheless their communion one with another as saints, does not take away or infringe the title or propriety which each man has in his goods and possessions.",
    scriptures: ["Acts 5:4", "Eph. 4:28"]
  }]]
}, {
  chapter: 28,
  slug: "1689-london-baptist-confession-chapter-28-baptism-lords-supper",
  title: "Of Baptism and the Lord's Supper",
  topic: ["sacraments"],
  content: [[{
    superscript: 1,
    text: "Baptism and the Lord's Supper are ordinances of positive and sovereign institution, appointed by the Lord Jesus, the only lawgiver, to be continued in his church to the end of the world.",
    scriptures: ["Matt. 28:19-20", "1 Cor. 11:26"]
  }], [{
    superscript: 2,
    text: "These holy appointments are to be administered by those only who are qualified and thereunto called, according to the commission of Christ.",
    scriptures: ["Matt. 28:19", "1 Cor. 4:1"]
  }]]
}, {
  chapter: 29,
  slug: "1689-london-baptist-confession-chapter-29-baptism",
  title: "Of Baptism",
  topic: ["repentance"],
  content: [[{
    superscript: 1,
    text: "Baptism is an ordinance of the New Testament, ordained by Jesus Christ, to be unto the party baptized, a sign of his fellowship with him, in his death and resurrection; of his being engrafted into him;",
    scriptures: ["Rom. 6:3-5", "Col. 2:12", "Gal. 3:27"]
  }, {
    superscript: 2,
    text: "of remission of sins;",
    scriptures: ["Mark 1:4", "Acts 22:16"]
  }, {
    superscript: 3,
    text: "and of giving up into God, through Jesus Christ, to live and walk in newness of life.",
    scriptures: ["Rom. 6:4"]
  }], [{
    superscript: 4,
    text: "Those who do actually profess repentance towards God, faith in, and obedience to, our Lord Jesus Christ, are the only proper subjects of this ordinance.",
    scriptures: ["Mark 16:16", "Acts 8:36-37, 2:41, 8:12, 18:8"]
  }], [{
    superscript: 5,
    text: "The outward element to be used in this ordinance is water, wherein the party is to be baptized, in the name of the Father, and of the Son, and of the Holy Spirit.",
    scriptures: ["Matt. 28:19-20", "Acts 8:38"]
  }], [{
    superscript: 6,
    text: "Immersion, or dipping of the person in water, is necessary to the due administration of this ordinance.",
    scriptures: ["Matt. 3:16", "John 3:23"]
  }]]
}, {
  chapter: 30,
  slug: "1689-london-baptist-confession-chapter-30-lords-supper",
  title: "Of the Lord's Supper",
  topic: ["communion"],
  content: [[{
    superscript: 1,
    text: "The supper of the Lord Jesus was instituted by him the same night wherein he was betrayed, to be observed in his churches, unto the end of the world, for the perpetual remembrance, and showing to all the world the sacrifice of himself in his death,",
    scriptures: ["1 Cor. 11:23-26"]
  }, {
    superscript: 2,
    text: "confirmation of the faith of believers in all the benefits thereof, their spiritual nourishment, and growth in him, their further engagement in, and to all duties which they owe to him; and to be a bond and pledge of their communion with him, and with each other.",
    scriptures: ["1 Cor. 10:16-17, 21"]
  }], [{
    superscript: 3,
    text: "In this ordinance Christ is not offered up to his Father, nor any real sacrifice made at all for remission of sin of the quick or dead, but only a memorial of that one offering up of himself by himself upon the cross, once for all;",
    scriptures: ["Heb. 9:25-26, 28"]
  }, {
    superscript: 4,
    text: "and a spiritual oblation of all possible praise unto God for the same.",
    scriptures: ["1 Cor. 11:24", "Matt. 26:26-27"]
  }, {
    superscript: "",
    text: "So that the popish sacrifice of the mass, as they call it, is most abominable, injurious to Christ's own sacrifice the alone propitiation for all the sins of the elect."
  }], [{
    superscript: 5,
    text: "The Lord Jesus hath, in this ordinance, appointed his ministers to pray, and bless the elements of bread and wine, and thereby to set them apart from a common to a holy use, and to take and break the bread; to take the cup, and, they communicating also themselves, to give both to the communicants.",
    scriptures: ["1 Cor. 11:23-26, etc."]
  }], [{
    superscript: 6,
    text: "The denial of the cup to the people, worshipping the elements, the lifting them up, or carrying them about for adoration, and reserving them for any pretended religious use, are all contrary to the nature of this ordinance, and to the institution of Christ.",
    scriptures: ["Matt. 26:26-28, 15:9", "Exod. 20:4-5"]
  }], [{
    superscript: 7,
    text: "The outward elements in this ordinance, duly set apart to the use ordained by Christ, have such relation to him crucified, as that truly, although in terms used figuratively, they are sometimes called by the names of the things they represent, in other words, the body and blood of Christ,",
    scriptures: ["1 Cor. 11:27"]
  }, {
    superscript: 8,
    text: "albeit, in substance and nature, they still remain truly and only bread and wine, as they were before.",
    scriptures: ["1 Cor. 11:26-28"]
  }], [{
    superscript: 9,
    text: "That doctrine which maintains a change of the substance of bread and wine, into the substance of Christ's body and blood, commonly called transubstantiation, by consecration of a priest, or by any other way, is repugnant not to Scripture alone,",
    scriptures: ["Acts 3:21", "Luke 14:6, 39"]
  }, {
    superscript: 10,
    text: "but even to common sense and reason, overthrows the nature of the ordinance, and has been, and is, the cause of manifold superstitions, yea, of gross idolatries.",
    scriptures: ["1 Cor. 11:24-25"]
  }], [{
    superscript: 11,
    text: "Worthy receivers, outwardly partaking of the visible elements in this ordinance, do then also inwardly by faith, really and indeed, yet not carnally and corporally, but spiritually receive, and feed upon Christ crucified, and all the benefits of his death; the body and blood of Christ being then not corporally or carnally, but spiritually present to the faith of believers in that ordinance, as the elements themselves are to their outward senses.",
    scriptures: ["1 Cor. 10:16, 11:23-26"]
  }], [{
    superscript: 12,
    text: "All ignorant and ungodly persons, as they are unfit to enjoy communion with Christ, so are they unworthy of the Lord's table, and cannot, without great sin against him, while they remain such, partake of these holy mysteries, or be admitted thereunto;",
    scriptures: ["2 Cor. 6:14-15"]
  }, {
    superscript: 13,
    text: "yea, whosoever shall receive unworthily, are guilty of the body and blood of the Lord, eating and drinking judgment to themselves.",
    scriptures: ["1 Cor. 11:29", "Matt. 7:6"]
  }]]
}, {
  chapter: 31,
  slug: "1689-london-baptist-confession-chapter-31-state-man-after-death-resurrection-dead",
  title: "Of the State of Man after Death, and of the Resurrection of the Dead",
  topic: ["resurrection"],
  content: [[{
    superscript: 1,
    text: "The bodies of men after death return to dust, and see corruption;",
    scriptures: ["Gen. 3:19", "Acts 13:36"]
  }, {
    superscript: 2,
    text: "but their souls, which neither die nor sleep, having an immortal subsistence, immediately return to God who gave them.",
    scriptures: ["Eccles. 12:7"]
  }, {
    superscript: 3,
    text: "The souls of the righteous being then made perfect in holiness, are received into paradise, where they are with Christ, and behold the face of God in light and glory, waiting for the full redemption of their bodies;",
    scriptures: ["Luke 23:43", "2 Cor. 5:1, 6, 8", "Phil. 1:23", "Heb. 12:23"]
  }, {
    superscript: 4,
    text: "and the souls of the wicked are cast into hell; where they remain in torment and utter darkness, reserved to the judgment of the great day;",
    scriptures: ["Jude 6-7", "1 Peter 3:19", "Luke 16:23-24"]
  }, {
    superscript: "",
    text: "besides these two places, for souls separated from their bodies, the Scripture acknowledgeth none."
  }], [{
    superscript: 5,
    text: "At the last day, such of the saints as are found alive, shall not sleep, but be changed;",
    scriptures: ["1 Cor. 15:51, 52", "1 Thess. 4:17"]
  }, {
    superscript: 6,
    text: "and all the dead shall be raised up with the selfsame bodies, and none other;",
    scriptures: ["Job 19:26-27"]
  }, {
    superscript: 7,
    text: "although with different qualities, which shall be united again to their souls forever.",
    scriptures: ["1 Cor. 15:42-43"]
  }], [{
    superscript: 8,
    text: "The bodies of the unjust shall, by the power of Christ, be raised to dishonour; the bodies of the just, by his Spirit, unto honour, and be made conformable to his own glorious body.",
    scriptures: ["Acts 24:15", "John 5:28-29", "Phil. 3:21"]
  }]]
}, {
  chapter: 32,
  slug: "1689-london-baptist-confession-chapter-32-last-judgement",
  title: "Of the Last Judgment",
  topic: ["judgment"],
  content: [[{
    superscript: 1,
    text: "God has appointed a day wherein he will judge the world in righteousness, by Jesus Christ;",
    scriptures: ["Acts 17:31", "John 5:22, 27"]
  }, {
    superscript: 2,
    text: "to whom all power and judgment is given of the Father; in which day, not only the apostate angels shall be judged,",
    scriptures: ["1 Cor. 6:3", "Jude 6"]
  }, {
    superscript: 3,
    text: "but likewise all persons that have lived upon the earth shall appear before the tribunal of Christ, to give an account of their thoughts, words, and deeds, and to receive according to what they have done in the body, whether good or evil.",
    scriptures: ["2 Cor. 5:10", "Eccles. 12:14", "Matt. 12:36", "Rom. 14:10, 12", "Matt. 25:32-46"]
  }], [{
    superscript: 4,
    text: "The end of God's appointing this day, is for the manifestation of the glory of his mercy, in the eternal salvation of the elect; and of his justice, in the eternal damnation of the reprobate, who are wicked and disobedient;",
    scriptures: ["Rom. 9:22-23"]
  }, {
    superscript: 5,
    text: "for then shall the righteous go into everlasting life, and receive that fulness of joy and glory with everlasting rewards, in the presence of the Lord; but the wicked, who do not know God, and do not obey the gospel of Jesus Christ, shall be cast aside into everlasting torments,",
    scriptures: ["Matt. 25:21, 34", "2 Tim. 4:8"]
  }, {
    superscript: 6,
    text: "and punished with everlasting destruction, from the presence of the Lord, and from the glory of his power.",
    scriptures: ["Matt. 25:46", "Mark 9:48", "2 Thess. 1:7-10"]
  }], [{
    superscript: 7,
    text: "As Christ would have us to be certainly persuaded that there shall be a day of judgment, both to deter all men from sin,",
    scriptures: ["2 Cor. 5:10-11"]
  }, {
    superscript: 8,
    text: "and for the greater consolation of the godly in their adversity,",
    scriptures: ["2 Thess. 1:5-7"]
  }, {
    superscript: 9,
    text: "so will he have the day unknown to men, that they may shake off all carnal security, and be always watchful, because they know not at what hour the Lord will come,",
    scriptures: ["Mark 13:35-37", "Luke 12:35-40"]
  }, {
    superscript: 10,
    text: "and may ever be prepared to say, Come Lord Jesus; come quickly.",
    scriptures: ["Rev. 22:20"]
  }, {
    superscript: "",
    text: "Amen."
  }]]
}];
var LONDON_BAPTIST = {
  name: "1689 London Baptist Confession of Faith",
  image_url: "https://i.imgur.com/FI0zkxZ.png",
  chapters: CHAPTERS
};
/* harmony default export */ var london_baptist = (LONDON_BAPTIST);
// EXTERNAL MODULE: ./components/Container.js
var Container = __webpack_require__(3);

// EXTERNAL MODULE: ./components/TitleSection.js + 1 modules
var TitleSection = __webpack_require__(14);

// EXTERNAL MODULE: ./components/ReadingContainer.js
var ReadingContainer = __webpack_require__(4);

// CONCATENATED MODULE: ./components/ConfessionNav.js



var ConfessionNav_ConfessionNav = function ConfessionNav(_ref) {
  var previous = _ref.previous,
      next = _ref.next;
  return external_react_default.a.createElement("div", {
    className: "jsx-2819837007" + " " + "chapter-nav"
  }, external_react_default.a.createElement("p", {
    className: "jsx-2819837007" + " " + "chapter-nav-item"
  }, previous ? external_react_default.a.createElement("a", {
    href: previous.href,
    className: "jsx-2819837007"
  }, previous.label) : null), external_react_default.a.createElement("p", {
    className: "jsx-2819837007" + " " + "nomargin chapter-nav-item"
  }, external_react_default.a.createElement("a", {
    href: "/confessions/1689-london-baptist-confession-chapter-list",
    className: "jsx-2819837007"
  }, "Table of Contents")), external_react_default.a.createElement("p", {
    className: "jsx-2819837007" + " " + "chapter-nav-item"
  }, next ? external_react_default.a.createElement("a", {
    href: next.href,
    className: "jsx-2819837007"
  }, next.label) : null), external_react_default.a.createElement(style_default.a, {
    styleId: "2819837007",
    css: ["p.jsx-2819837007{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}", "a.jsx-2819837007{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}", "@media screen and (max-width:768px){p.jsx-2819837007{font-size:18px;margin-top:21px;}}", ".chapter-nav.jsx-2819837007{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:20px;}", ".chapter-nav-item.jsx-2819837007{margin-top:10px;position:relative;top:-10px;width:33%;}"]
  }));
};

/* harmony default export */ var components_ConfessionNav = (ConfessionNav_ConfessionNav);
// EXTERNAL MODULE: external "axios"
var external_axios_ = __webpack_require__(10);
var external_axios_default = /*#__PURE__*/__webpack_require__.n(external_axios_);

// EXTERNAL MODULE: external "css-vendor"
var external_css_vendor_ = __webpack_require__(19);

// EXTERNAL MODULE: external "debug"
var external_debug_ = __webpack_require__(25);
var external_debug_default = /*#__PURE__*/__webpack_require__.n(external_debug_);

// EXTERNAL MODULE: external "react-dom"
var external_react_dom_ = __webpack_require__(22);
var external_react_dom_default = /*#__PURE__*/__webpack_require__.n(external_react_dom_);

// CONCATENATED MODULE: ./components/Popover/platform.js
var isServer = typeof window === "undefined";
var isClient = !isServer;
var WINDOW = isClient ? window : null;
var DOCUMENT = isClient ? document : null;
/* harmony default export */ var platform = ({
  isServer: isServer,
  isClient: isClient,
  window: WINDOW,
  document: DOCUMENT
});

// CONCATENATED MODULE: ./components/Popover/utils.js


var find = function find(f, xs) {
  return xs.reduce(function (b, x) {
    return b ? b : f(x) ? x : null;
  }, null);
};

var equalRecords = function equalRecords(o1, o2) {
  for (var key in o1) {
    if (o1[key] !== o2[key]) return false;
  }

  return true;
};

var noop = function noop() {
  return undefined;
};

var utils_clientOnly = function clientOnly(f) {
  return isClient ? f : noop;
};

/* harmony default export */ var utils = ({
  find: find,
  equalRecords: equalRecords,
  noop: noop,
  clientOnly: utils_clientOnly
});

// CONCATENATED MODULE: ./components/Popover/layout.js
function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* Axes System

This allows us to at-will work in a different orientation
without having to manually keep track of knowing if we should be using
x or y positions. */

var axes = {
  row: {},
  column: {}
};
axes.row.main = {
  start: "x",
  end: "x2",
  size: "w"
};
axes.row.cross = {
  start: "y",
  end: "y2",
  size: "h"
};
axes.column.main = axes.row.cross;
axes.column.cross = axes.row.main;
var types = [{
  name: "side",
  values: ["start", "end"]
}, {
  name: "standing",
  values: ["above", "right", "below", "left"]
}, {
  name: "flow",
  values: ["column", "row"]
}];
var validTypeValues = types.reduce(function (xs, _ref) {
  var values = _ref.values;
  return xs.concat(values);
}, []);

var centerOfSize = function centerOfSize(flow, axis, size) {
  return size[axes[flow][axis].size] / 2;
};

var centerOfBounds = function centerOfBounds(flow, axis, bounds) {
  return bounds[axes[flow][axis].start] + bounds[axes[flow][axis].size] / 2;
};

var centerOfBoundsFromBounds = function centerOfBoundsFromBounds(flow, axis, boundsTo, boundsFrom) {
  return centerOfBounds(flow, axis, boundsTo) - boundsFrom[axes[flow][axis].start];
};

var place = function place(flow, axis, align, bounds, size) {
  var axisProps = axes[flow][axis];
  return align === "center" ? centerOfBounds(flow, axis, bounds) - centerOfSize(flow, axis, size) : align === "end" ? bounds[axisProps.end] : align === "start" ?
  /* DOM rendering unfolds leftward. Therefore if the slave is positioned before
  the master then the slave`s position must in addition be pulled back
  by its [the slave`s] own length. */
  bounds[axisProps.start] - size[axisProps.size] : null;
};
/* Element Layout Queries */


var El = {};

El.calcBounds = function (el) {
  if (el === WINDOW) {
    return {
      x: 0,
      y: 0,
      x2: el.innerWidth + 18,
      y2: el.innerHeight,
      w: el.innerWidth,
      h: el.innerHeight
    };
  }

  var b = el.getBoundingClientRect();
  return {
    x: b.left,
    y: b.top,
    x2: b.right,
    y2: b.bottom,
    w: b.right - b.left,
    h: b.bottom - b.top
  };
};

El.calcSize = function (el) {
  return el === WINDOW ? {
    w: el.innerWidth,
    h: el.innerHeight
  } : {
    w: el.offsetWidth,
    h: el.offsetHeight
  };
};

El.calcScrollSize = function (el) {
  return el === WINDOW ? {
    w: el.scrollX || el.pageXOffset,
    h: el.scrollY || el.pageYOffset
  } : {
    w: el.scrollLeft,
    h: el.scrollTop
  };
};
/* Misc Utilities */


var getPreferenceType = function getPreferenceType(preference) {
  return types.reduce(function (found, type) {
    return found ? found : type.values.indexOf(preference) !== -1 ? type.name : null;
  }, null);
};
/* Dimension Fit Checks */


var fitWithinChecker = function fitWithinChecker(dimension) {
  return function (domainSize, itemSize) {
    return domainSize[dimension] >= itemSize[dimension];
  };
};

var doesWidthFitWithin = fitWithinChecker("w");
var doesHeightFitWithin = fitWithinChecker("h");

var doesFitWithin = function doesFitWithin(domainSize, itemSize) {
  return doesWidthFitWithin(domainSize, itemSize) && doesHeightFitWithin(domainSize, itemSize);
};
/* Errors */


var createPreferenceError = function createPreferenceError(givenValue) {
  return new Error("The given layout placement of \"".concat(givenValue, "\" is not a valid choice. Valid choices are: ").concat(validTypeValues.join(" | "), "."));
};
/* Algorithm for picking the best fitting zone for popover. The current technique will loop through all zones picking the last one that fits.
In the case that none fit we should pick the least-not-fitting zone. */


var layout_pickZone = function pickZone(opts, frameBounds, targetBounds, size) {
  var t = targetBounds;
  var f = frameBounds;
  var zones = [{
    side: "start",
    standing: "above",
    flow: "column",
    order: -1,
    w: f.x2,
    h: t.y
  }, {
    side: "end",
    standing: "right",
    flow: "row",
    order: 1,
    w: f.x2 - t.x2,
    h: f.y2
  }, {
    side: "end",
    standing: "below",
    flow: "column",
    order: 1,
    w: f.x2,
    h: f.y2 - t.y2
  }, {
    side: "start",
    standing: "left",
    flow: "row",
    order: -1,
    w: t.x,
    h: f.y2
  }];
  /* Order the zones by the amount of popup that would be cut out if that zone is used.
     The first one in the array is the one that cuts the least amount.
      const area = size.w * size.h  // Popup area is constant and it does not change the order
  */

  zones.forEach(function (z) {
    // TODO Update to satisfy linter
    // eslint-disable-next-line no-param-reassign
    z.cutOff =
    /* area */
    -Math.max(0, Math.min(z.w, size.w)) * Math.max(0, Math.min(z.h, size.h));
  });
  zones.sort(function (a, b) {
    return a.cutOff - b.cutOff;
  });
  var availZones = zones.filter(function (zone) {
    return doesFitWithin(zone, size);
  });
  /* If a place is required pick it from the available zones if possible. */

  if (opts.place) {
    var type = getPreferenceType(opts.place);
    if (!type) throw createPreferenceError(opts.place);

    var finder = function finder(z) {
      return z[type] === opts.place;
    };

    return find(finder, availZones) || find(finder, zones);
  }
  /* If the preferred side is part of the available zones, use that otherwise
  pick the largest available zone. If there are no available zones, pick the
  largest zone. */


  if (opts.preferPlace) {
    var preferenceType = getPreferenceType(opts.preferPlace);
    if (!preferenceType) throw createPreferenceError(opts.preferPlace); // Try to fit first in zone where the pop up fit completely

    var preferredAvailZones = availZones.filter(function (zone) {
      return zone[preferenceType] === opts.preferPlace;
    });
    if (preferredAvailZones.length) return preferredAvailZones[0]; // If there are not areas where the pop up fit completely, it uses the preferred ones
    // in order from the one the fit better

    var preferredZones = zones.filter(function (zone) {
      return zone[preferenceType] === opts.preferPlace;
    });
    if (!availZones.length && preferredZones.length) return preferredZones[0];
  } // Return a zone that fit completely or the one that fit the best


  return availZones.length ? availZones[0] : zones[0];
};
/* TODO Document this. */


var calcRelPos = function calcRelPos(zone, masterBounds, slaveSize) {
  var _ref2;

  var _axes$zone$flow = axes[zone.flow],
      main = _axes$zone$flow.main,
      cross = _axes$zone$flow.cross;
  /* TODO: The slave is hard-coded to align cross-center with master. */

  var crossAlign = "center";
  var mainStart = place(zone.flow, "main", zone.side, masterBounds, slaveSize);
  var mainSize = slaveSize[main.size];
  var crossStart = place(zone.flow, "cross", crossAlign, masterBounds, slaveSize);
  var crossSize = slaveSize[cross.size];
  return _ref2 = {}, _defineProperty(_ref2, main.start, mainStart), _defineProperty(_ref2, "mainLength", mainSize), _defineProperty(_ref2, main.end, mainStart + mainSize), _defineProperty(_ref2, cross.start, crossStart), _defineProperty(_ref2, "crossLength", crossSize), _defineProperty(_ref2, cross.end, crossStart + crossSize), _ref2;
};

/* harmony default export */ var layout = ({
  El: El,
  types: types,
  validTypeValues: validTypeValues,
  calcRelPos: calcRelPos,
  place: place,
  pickZone: layout_pickZone,
  axes: axes,
  centerOfSize: centerOfSize,
  centerOfBounds: centerOfBounds,
  centerOfBoundsFromBounds: centerOfBoundsFromBounds,
  doesFitWithin: doesFitWithin,
  equalCoords: equalRecords
});

// CONCATENATED MODULE: ./components/Popover/on-resize.js
/* eslint no-param-reassign: 0 */


var requestAnimationFrame = isServer ? noop : WINDOW.requestAnimationFrame || WINDOW.mozRequestAnimationFrame || WINDOW.webkitRequestAnimationFrame || function (fn) {
  WINDOW.setTimeout(fn, 20);
};
var cancelAnimationFrame = isServer ? noop : WINDOW.cancelAnimationFrame || WINDOW.mozCancelAnimationFrame || WINDOW.webkitCancelAnimationFrame || WINDOW.clearTimeout;
var isIE = isServer ? false : navigator.userAgent.match(/Trident/);
var namespace = "__resizeDetector__";

var uninitialize = function uninitialize(el) {
  el[namespace].destroy();
  el[namespace] = undefined;
};

var createElementHack = function createElementHack() {
  var el = document.createElement("object");
  el.className = "resize-sensor";
  el.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
  el.setAttribute("class", "resize-sensor");
  el.setAttribute("tabindex", "-1");
  el.type = "text/html";
  el.data = "about:blank";
  return el;
};

var initialize = function initialize(el) {
  var detector = el[namespace] = {};
  detector.listeners = [];

  var onResize = function onResize(e) {
    /* Keep in mind e.target could be el OR objEl. In this current implementation we don't seem to need to know this but its important
    to not forget e.g. in some future refactoring scenario. */
    if (detector.resizeRAF) cancelAnimationFrame(detector.resizeRAF);
    detector.resizeRAF = requestAnimationFrame(function () {
      detector.listeners.forEach(function (fn) {
        fn(e);
      });
    });
  };

  if (isIE) {
    /* We do not support ie8 and below (or ie9 in compat mode).
    Therefore there is no presence of `attachEvent` here. */
    el.addEventListener("onresize", onResize);

    detector.destroy = function () {
      el.removeEventListener("onresize", onResize);
    };
  } else {
    if (getComputedStyle(el).position === "static") {
      detector.elWasStaticPosition = true;
      el.style.position = "relative";
    }

    var objEl = createElementHack();

    objEl.onload = function ()
    /* event */
    {
      this.contentDocument.defaultView.addEventListener("resize", onResize);
    };

    detector.destroy = function () {
      if (detector.elWasStaticPosition) el.style.position = "";

      if (el.contains(objEl)) {
        // Event handlers will be automatically removed.
        // http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
        el.removeChild(objEl);
      }
    };

    el.appendChild(objEl);
  }
};

var on_resize_on = function on(el, fn) {
  /* Window object natively publishes resize events. We handle it as a
  special case here so that users do not have to think about two APIs. */
  if (el === WINDOW) {
    WINDOW.addEventListener("resize", fn);
    return;
  }
  /* Not caching namespace read here beacuse not guaranteed that its available. */


  if (!el[namespace]) initialize(el);
  el[namespace].listeners.push(fn);
};

var on_resize_off = function off(el, fn) {
  if (el === WINDOW) {
    WINDOW.removeEventListener("resize", fn);
    return;
  }

  var detector = el[namespace];
  if (!detector) return;
  var i = detector.listeners.indexOf(fn);
  if (i !== -1) detector.listeners.splice(i, 1);
  if (!detector.listeners.length) uninitialize(el);
};

/* harmony default export */ var on_resize = ({
  on: on_resize_on,
  off: on_resize_off,
  addEventListener: on_resize_on,
  removeEventListener: on_resize_off
});

// CONCATENATED MODULE: ./components/Popover/tip.js


var tip_Tip = function Tip(props) {
  var direction = props.direction;
  var size = props.size || 24;
  var isPortrait = direction === "up" || direction === "down";
  var mainLength = size;
  var crossLength = size * 2;
  var svgProps = {
    className: "Popover-tip",
    width: isPortrait ? crossLength : mainLength,
    height: isPortrait ? mainLength : crossLength
  };
  return external_react_default.a.createElement("div", svgProps, external_react_default.a.createElement("div", {
    style: {
      background: "#fff",
      borderBottomWidth: 0,
      borderRightWidth: 0,
      boxShadow: "-1px -1px 1px -1px rgba(0,0,0,.54)",
      height: 14,
      transform: "rotate(45deg)",
      width: 14
    }
  }));
};

/* harmony default export */ var tip = (tip_Tip);
// CONCATENATED MODULE: ./components/Popover/index.js
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { Popover_defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function Popover_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var log = external_debug_default()("react-popover");
var supportedCSSValue = utils.clientOnly(external_css_vendor_["supportedValue"]);

var Popover_jsprefix = function jsprefix(x) {
  return "".concat(external_css_vendor_["prefix"].js).concat(x);
};

var Popover_cssprefix = function cssprefix(x) {
  return "".concat(external_css_vendor_["prefix"].css).concat(x);
};

var cssvalue = function cssvalue(prop, value) {
  return supportedCSSValue(prop, value) || Popover_cssprefix(value);
};

var coreStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  display: cssvalue("display", "flex")
};
var faces = {
  above: "down",
  right: "left",
  below: "up",
  left: "right"
};
/* Flow mappings. Each map maps the flow domain to another domain. */

var flowToTipTranslations = {
  row: "translateY",
  column: "translateX"
};
var flowToPopoverTranslations = {
  row: "translateX",
  column: "translateY"
};

var Popover_Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  // static propTypes = {
  //   body: T.node.isRequired,
  //   children: T.element.isRequired,
  //   appendTarget: T.object,
  //   className: T.string,
  //   enterExitTransitionDurationMs: T.number,
  //   isOpen: T.bool,
  //   offset: T.number,
  //   place: T.oneOf(Layout.validTypeValues),
  //   preferPlace: T.oneOf(Layout.validTypeValues),
  //   refreshIntervalMs: T.oneOfType([T.number, T.bool]),
  //   style: T.object,
  //   tipSize: T.number,
  //   onOuterAction: T.func
  // };
  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props));

    Popover_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkTargetReposition", function () {
      if (_this.measureTargetBounds()) _this.resolvePopoverLayout();
    });

    Popover_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkForOuterAction", function (event) {
      var isOuterAction = !_this.containerEl.contains(event.target) && !_this.targetEl.contains(event.target);
      if (isOuterAction) _this.props.onOuterAction(event);
    });

    Popover_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTargetResize", function () {
      log("Recalculating layout because _target_ resized!");

      _this.measureTargetBounds();

      _this.resolvePopoverLayout();
    });

    Popover_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPopoverResize", function () {
      log("Recalculating layout because _popover_ resized!");

      _this.measurePopoverSize();

      _this.resolvePopoverLayout();
    });

    Popover_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFrameScroll", function () {
      log("Recalculating layout because _frame_ scrolled!");

      _this.measureTargetBounds();

      _this.resolvePopoverLayout();
    });

    Popover_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFrameResize", function () {
      log("Recalculating layout because _frame_ resized!");

      _this.measureFrameBounds();

      _this.resolvePopoverLayout();
    });

    Popover_defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getContainerNodeRef", function (containerEl) {
      Object.assign(_assertThisInitialized(_assertThisInitialized(_this)), {
        containerEl: containerEl
      });
    });

    _this.state = {
      standing: "above",
      exited: !_this.props.isOpen,
      // for animation-dependent rendering, should popover close/open?
      exiting: false,
      // for tracking in-progress animations
      toggle: _this.props.isOpen || false // for business logic tracking, should popover close/open?

    };
    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Our component needs a DOM Node reference to the child so that it can be
      measured so that we can correctly layout the popover. We do not have any
      control over the child so cannot leverage refs. We could wrap our own
      primitive component around the child but that could lead to breaking the
      uses layout (e.g. the child is a flex item). Leveraging findDOMNode seems
      to be the only functional solution, despite all the general warnings not to
      use it. We have a legitimate use-case. */
      // eslint-disable-next-line
      this.targetEl = external_react_dom_default.a.findDOMNode(this);
      if (this.props.isOpen) this.enter();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(propsNext) {
      //log(`Component received props!`, propsNext)
      var willOpen = !this.props.isOpen && propsNext.isOpen;
      var willClose = this.props.isOpen && !propsNext.isOpen;
      if (willOpen) this.open();else if (willClose) this.close();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(propsPrev, statePrev) {
      //log(`Component did update!`)
      var didOpen = !statePrev.toggle && this.state.toggle;
      var didClose = statePrev.toggle && !this.state.toggle;
      if (didOpen) this.enter();else if (didClose) this.exit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      /* If the Popover is unmounted while animating,
      clear the animation so no setState occured */
      this.animateExitStop();
      /* If the Popover was never opened then then tracking
      initialization never took place and so calling untrack
      would be an error. Also see issue 55. */

      if (this.hasTracked) this.untrackPopover();
    }
  }, {
    key: "resolvePopoverLayout",
    value: function resolvePopoverLayout() {
      /* Find the optimal zone to position self. Measure the size of each zone and use the one with
      the greatest area. */
      var pickerSettings = {
        preferPlace: this.props.preferPlace,
        place: this.props.place
      };
      /* This is a kludge that solves a general problem very specifically for Popover.
      The problem is subtle. When Popover positioning changes such that it resolves at
      a different orientation, its Size will change because the Tip will toggle between
      extending Height or Width. The general problem of course is that calculating
      zone positioning based on current size is non-trivial if the Size can change once
      resolved to a different zone. Infinite recursion can be triggered as we noted here:
      https://github.com/littlebits/react-popover/issues/18. As an example of how this
      could happen in another way: Imagine the user changes the CSS styling of the popover
      based on whether it was `row` or `column` flow. TODO: Find a solution to generally
      solve this problem so that the user is free to change the Popover styles in any
      way at any time for any arbitrary trigger. There may be value in investigating the
      http://overconstrained.io community for its general layout system via the
      constraint-solver Cassowary. */

      if (this.zone) this.size[this.zone.flow === "row" ? "h" : "w"] += this.props.tipSize;
      var zone = layout.pickZone(pickerSettings, this.frameBounds, this.targetBounds, this.size);
      if (this.zone) this.size[this.zone.flow === "row" ? "h" : "w"] -= this.props.tipSize;
      var tb = this.targetBounds;
      this.zone = zone;
      log("zone", zone);
      this.setState({
        standing: zone.standing
      });
      var axis = layout.axes[zone.flow];
      log("axes", axis);
      var dockingEdgeBufferLength = Math.round(getComputedStyle(this.bodyEl).borderRadius.slice(0, -2)) || 0;
      var scrollSize = layout.El.calcScrollSize(this.frameEl);
      scrollSize.main = scrollSize[axis.main.size];
      scrollSize.cross = scrollSize[axis.cross.size];
      /* When positioning self on the cross-axis do not exceed frame bounds. The strategy to achieve
      this is thus: First position cross-axis self to the cross-axis-center of the the target. Then,
      offset self by the amount that self is past the boundaries of frame. */

      var pos = layout.calcRelPos(zone, tb, this.size);
      /* Offset allows users to control the distance betweent the tip and the target. */

      pos[axis.main.start] += this.props.offset * zone.order;
      /* Constrain containerEl Position within frameEl. Try not to penetrate a visually-pleasing buffer from
      frameEl. `frameBuffer` length is based on tipSize and its offset. */

      var frameBuffer = this.props.tipSize + this.props.offset;
      var hangingBufferLength = dockingEdgeBufferLength * 2 + this.props.tipSize * 2 + frameBuffer;
      var frameCrossStart = this.frameBounds[axis.cross.start];
      var frameCrossEnd = this.frameBounds[axis.cross.end];
      var frameCrossLength = this.frameBounds[axis.cross.size];
      var frameCrossInnerLength = frameCrossLength - frameBuffer * 2;
      var frameCrossInnerStart = frameCrossStart + frameBuffer;
      var frameCrossInnerEnd = frameCrossEnd - frameBuffer;
      var popoverCrossStart = pos[axis.cross.start];
      var popoverCrossEnd = pos[axis.cross.end];
      /* If the popover dose not fit into frameCrossLength then just position it to the `frameCrossStart`.
      popoverCrossLength` will now be forced to overflow into the `Frame` */

      if (pos.crossLength > frameCrossLength) {
        log("popoverCrossLength does not fit frame.");
        pos[axis.cross.start] = 0;
        /* If the `popoverCrossStart` is forced beyond some threshold of `targetCrossLength` then bound
        it (`popoverCrossStart`). */
      } else if (tb[axis.cross.end] < hangingBufferLength) {
        log("popoverCrossStart cannot hang any further without losing target.");
        pos[axis.cross.start] = tb[axis.cross.end] - hangingBufferLength;
        /* checking if the cross start of the target area is within the frame and it makes sense
        to try fitting popover into the frame. */
      } else if (tb[axis.cross.start] > frameCrossInnerEnd) {
        log("popoverCrossStart cannot hang any further without losing target.");
        pos[axis.cross.start] = tb[axis.cross.start] - this.size[axis.cross.size];
        /* If the `popoverCrossStart` does not fit within the inner frame (honouring buffers) then
        just center the popover in the remaining `frameCrossLength`. */
      } else if (pos.crossLength > frameCrossInnerLength) {
        log("popoverCrossLength does not fit within buffered frame.");
        pos[axis.cross.start] = (frameCrossLength - pos.crossLength) / 2;
      } else if (popoverCrossStart < frameCrossInnerStart) {
        log("popoverCrossStart cannot reverse without exceeding frame.");
        pos[axis.cross.start] = frameCrossInnerStart;
      } else if (popoverCrossEnd > frameCrossInnerEnd) {
        log("popoverCrossEnd cannot travel without exceeding frame.");
        pos[axis.cross.start] = pos[axis.cross.start] - (pos[axis.cross.end] - frameCrossInnerEnd);
      }
      /* So far the link position has been calculated relative to the target. To calculate the absolute
      position we need to factor the `Frame``s scroll position */


      pos[axis.cross.start] += scrollSize.cross;
      pos[axis.main.start] += scrollSize.main;
      /* Apply `flow` and `order` styles. This can impact subsequent measurements of height and width
      of the container. When tip changes orientation position due to changes from/to `row`/`column`
      width`/`height` will be impacted. Our layout monitoring will catch these cases and automatically
      recalculate layout. */

      if (this.containerEl) {
        this.containerEl.style.flexFlow = zone.flow;
        this.containerEl.style[Popover_jsprefix("FlexFlow")] = this.containerEl.style.flexFlow;
      }

      this.bodyEl.style.order = zone.order;
      this.bodyEl.style[Popover_jsprefix("Order")] = this.bodyEl.style.order;
      /* Apply Absolute Positioning. */

      log("pos", pos);

      if (this.containerEl) {
        this.containerEl.style.top = "".concat(pos.y, "px");
        this.containerEl.style.left = "".concat(pos.x, "px");
      }
      /* Calculate Tip Position */


      var tipCrossPos =
      /* Get the absolute tipCrossCenter. Tip is positioned relative to containerEl
      but it aims at targetCenter which is positioned relative to frameEl... we
      need to cancel the containerEl positioning so as to hit our intended position. */
      layout.centerOfBoundsFromBounds(zone.flow, "cross", tb, pos) +
      /* centerOfBounds does not account for scroll so we need to manually add that
      here. */
      scrollSize.cross -
      /* Center tip relative to self. We do not have to calcualte half-of-tip-size since tip-size
      specifies the length from base to tip which is half of total length already. */
      this.props.tipSize;
      if (tipCrossPos < dockingEdgeBufferLength) tipCrossPos = dockingEdgeBufferLength;else if (tipCrossPos > pos.crossLength - dockingEdgeBufferLength - this.props.tipSize * 2) {
        tipCrossPos = pos.crossLength - dockingEdgeBufferLength - this.props.tipSize * 2;
      }
      this.tipEl.style.transform = "".concat(flowToTipTranslations[zone.flow], "(").concat(tipCrossPos, "px)");
      this.tipEl.style[Popover_jsprefix("Transform")] = this.tipEl.style.transform;
    }
  }, {
    key: "measurePopoverSize",
    value: function measurePopoverSize() {
      this.size = layout.El.calcSize(this.containerEl);
    }
  }, {
    key: "measureTargetBounds",
    value: function measureTargetBounds() {
      var newTargetBounds = layout.El.calcBounds(this.targetEl);

      if (this.targetBounds && layout.equalCoords(this.targetBounds, newTargetBounds)) {
        return false;
      }

      this.targetBounds = newTargetBounds;
      return true;
    }
  }, {
    key: "open",
    value: function open() {
      if (this.state.exiting) this.animateExitStop();
      this.setState({
        toggle: true,
        exited: false
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        toggle: false
      });
    }
  }, {
    key: "enter",
    value: function enter() {
      if (platform.isServer) return;
      log("enter!");
      this.trackPopover();
      this.animateEnter();
    }
  }, {
    key: "exit",
    value: function exit() {
      log("exit!");
      this.animateExit();
      this.untrackPopover();
    }
  }, {
    key: "animateExitStop",
    value: function animateExitStop() {
      clearTimeout(this.exitingAnimationTimer1);
      clearTimeout(this.exitingAnimationTimer2);
      this.setState({
        exiting: false
      });
    }
  }, {
    key: "animateExit",
    value: function animateExit() {
      var _this2 = this;

      this.setState({
        exiting: true
      });
      this.exitingAnimationTimer2 = setTimeout(function () {
        setTimeout(function () {
          if (_this2.containerEl) {
            _this2.containerEl.style.transform = "".concat(flowToPopoverTranslations[_this2.zone.flow], "(").concat(_this2.zone.order * 50, "px)");
            _this2.containerEl.style.opacity = "0";
          }
        }, 0);
      }, 0);
      this.exitingAnimationTimer1 = setTimeout(function () {
        _this2.setState({
          exited: true,
          exiting: false
        });
      }, this.props.enterExitTransitionDurationMs);
    }
  }, {
    key: "animateEnter",
    value: function animateEnter() {
      /* Prepare `entering` style so that we can then animate it toward `entered`. */
      this.containerEl.style.transform = "".concat(flowToPopoverTranslations[this.zone.flow], "(").concat(this.zone.order * 50, "px)");
      this.containerEl.style[Popover_jsprefix("Transform")] = this.containerEl.style.transform;
      this.containerEl.style.opacity = "0";
      /* After initial layout apply transition animations. */

      /* Hack: http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes */

      this.containerEl.offsetHeight; // eslint-disable-line no-unused-expressions

      /* If enterExitTransitionDurationMs is falsy, tip animation should be also disabled */

      if (this.props.enterExitTransitionDurationMs) {
        this.tipEl.style.transition = "transform 150ms ease-in";
        this.tipEl.style[Popover_jsprefix("Transition")] = "".concat(Popover_cssprefix("transform"), " 150ms ease-in");
      }

      this.containerEl.style.transitionProperty = "top, left, opacity, transform";
      this.containerEl.style.transitionDuration = "".concat(this.props.enterExitTransitionDurationMs, "ms");
      this.containerEl.style.transitionTimingFunction = "cubic-bezier(0.230, 1.000, 0.320, 1.000)";
      this.containerEl.style.opacity = "1";
      this.containerEl.style.transform = "translateY(0)";
      this.containerEl.style[Popover_jsprefix("Transform")] = this.containerEl.style.transform;
    }
  }, {
    key: "trackPopover",
    value: function trackPopover() {
      var minScrollRefreshIntervalMs = 200;
      var minResizeRefreshIntervalMs = 200;
      /* Get references to DOM elements. */

      this.bodyEl = this.containerEl.querySelector(".Popover-body");
      this.tipEl = this.containerEl.querySelector(".Popover-tip");
      /* Note: frame is hardcoded to window now but we think it will
      be a nice feature in the future to allow other frames to be used
      such as local elements that further constrain the popover`s world. */

      this.frameEl = platform.window;
      this.hasTracked = true;
      /* Set a general interval for checking if target position changed. There is no way
      to know this information without polling. */

      if (this.props.refreshIntervalMs) {
        this.checkLayoutInterval = setInterval(this.checkTargetReposition, this.props.refreshIntervalMs);
      }
      /* Watch for boundary changes in all deps, and when one of them changes, recalculate layout.
      This layout monitoring must be bound immediately because a layout recalculation can recursively
      cause a change in boundaries. So if we did a one-time force-layout before watching boundaries
      our final position calculations could be wrong. See comments in resolver function for details
      about which parts can trigger recursive recalculation. */


      this.onFrameScroll = Object(external_lodash_["throttle"])(this.onFrameScroll, minScrollRefreshIntervalMs);
      this.onFrameResize = Object(external_lodash_["throttle"])(this.onFrameResize, minResizeRefreshIntervalMs);
      this.onPopoverResize = Object(external_lodash_["throttle"])(this.onPopoverResize, minResizeRefreshIntervalMs);
      this.onTargetResize = Object(external_lodash_["throttle"])(this.onTargetResize, minResizeRefreshIntervalMs);
      this.frameEl.addEventListener("scroll", this.onFrameScroll);
      on_resize.on(this.frameEl, this.onFrameResize);
      on_resize.on(this.containerEl, this.onPopoverResize);
      on_resize.on(this.targetEl, this.onTargetResize);
      /* Track user actions on the page. Anything that occurs _outside_ the Popover boundaries
      should close the Popover. */

      platform.document.addEventListener("mousedown", this.checkForOuterAction);
      platform.document.addEventListener("touchstart", this.checkForOuterAction);
      /* Kickstart layout at first boot. */

      this.measurePopoverSize();
      this.measureFrameBounds();
      this.measureTargetBounds();
      this.resolvePopoverLayout();
    }
  }, {
    key: "untrackPopover",
    value: function untrackPopover() {
      clearInterval(this.checkLayoutInterval);
      this.frameEl.removeEventListener("scroll", this.onFrameScroll);
      on_resize.off(this.frameEl, this.onFrameResize);
      on_resize.off(this.containerEl, this.onPopoverResize);
      on_resize.off(this.targetEl, this.onTargetResize);
      platform.document.removeEventListener("mousedown", this.checkForOuterAction);
      platform.document.removeEventListener("touchstart", this.checkForOuterAction);
      this.hasTracked = false;
    }
  }, {
    key: "measureFrameBounds",
    value: function measureFrameBounds() {
      this.frameBounds = layout.El.calcBounds(this.frameEl);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? "" : _this$props$className,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          tipSize = _this$props.tipSize,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? 320 : _this$props$width;
      var standing = this.state.standing;
      var popoverProps = {
        className: "Popover Popover-".concat(standing, " ").concat(className),
        style: _objectSpread({}, coreStyle, style)
      };
      var popover = this.state.exited ? null : external_react_default.a.createElement("div", _extends({
        ref: this.getContainerNodeRef
      }, popoverProps), external_react_default.a.createElement("div", {
        className: "Popover-body",
        children: this.props.body,
        style: {
          background: "#fff",
          borderRadius: 3,
          boxShadow: "0 1px 2px rgba(0,0,0,.25), 0 0 1px rgba(0,0,0,.35)",
          position: "relative",
          top: -8,
          width: width
        }
      }), external_react_default.a.createElement(tip, {
        direction: faces[standing],
        size: tipSize
      }));
      return [this.props.children, platform.isClient && external_react_dom_default.a.createPortal(popover, this.props.appendTarget)];
    }
  }]);

  return Popover;
}(external_react_default.a.Component);

Popover_defineProperty(Popover_Popover, "defaultProps", {
  tipSize: 7,
  preferPlace: null,
  place: null,
  offset: 4,
  isOpen: false,
  onOuterAction: utils.noop,
  enterExitTransitionDurationMs: 500,
  children: null,
  refreshIntervalMs: 200,
  appendTarget: platform.isClient ? platform.document.body : null
});

/* harmony default export */ var components_Popover = (Popover_Popover);
// CONCATENATED MODULE: ./components/ScriptureRef.js


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ScriptureRef_ScriptureRef = function ScriptureRef(_ref) {
  var data = _ref.data;
  return data.passages.map(function (passage, index) {
    var canonical = data.passage_meta[index].canonical;
    var passageText = passage.replace(canonical, "").replace("(ESV)", "");

    var _passageText$split = passageText.split("Footnotes"),
        _passageText$split2 = _slicedToArray(_passageText$split, 2),
        passageTop = _passageText$split2[0],
        footnotesBottom = _passageText$split2[1];

    var passageFootnotes = passageTop.match(/\(\d+\)/g) || [];
    var passageNumbers = passageTop.match(/\[\d+\]/g) || [];
    var passageSections = passageTop.match(/[a-zA-Z ]+\n\n/g) || [];
    var scriptureTopPassage = passageFootnotes.reduce(function (result, match) {
      result = result.replace(match, "<span class=\"scripture-passage-footnote\">".concat(match.replace("(", "").replace(")", ""), "</span>"));
      return result;
    }, passageTop);
    scriptureTopPassage = passageNumbers.reduce(function (result, match) {
      result = result.replace(match, "<strong>".concat(match.replace("[", "").replace("]", ""), "</strong>"));
      return result;
    }, scriptureTopPassage);
    scriptureTopPassage = passageSections.reduce(function (result, match) {
      result = result.replace(match, "<div><strong>".concat(match, "</strong></div>"));
      return result;
    }, scriptureTopPassage);
    var scriptureBottomFootnotes = null;

    if (footnotesBottom) {
      var footnoteNumbers = footnotesBottom.match(/\(\d+\)/g);
      scriptureBottomFootnotes = footnoteNumbers.reduce(function (result, match, index) {
        result = result.replace(match, "<span class=\"scripture-footnumber-number\">".concat(match.replace("(", "").replace(")", "."), "</span>"));
        return result;
      }, footnotesBottom);
    }

    return external_react_default.a.createElement(Container["b" /* Container */], {
      key: data.passage_meta[index].canonical
    }, external_react_default.a.createElement("div", {
      style: {
        padding: "5px 10px"
      },
      className: "jsx-2024980457"
    }, external_react_default.a.createElement("p", {
      className: "jsx-2024980457"
    }, external_react_default.a.createElement("strong", {
      className: "jsx-2024980457"
    }, "".concat(canonical, " (ESV)"))), external_react_default.a.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: scriptureTopPassage
      },
      className: "jsx-2024980457"
    }), footnotesBottom ? external_react_default.a.createElement("div", {
      className: "jsx-2024980457"
    }, external_react_default.a.createElement("p", {
      className: "jsx-2024980457" + " " + "small"
    }, external_react_default.a.createElement("em", {
      className: "jsx-2024980457"
    }, "Footnotes")), external_react_default.a.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: scriptureBottomFootnotes
      },
      className: "jsx-2024980457" + " " + "nomargin small"
    })) : null), external_react_default.a.createElement(style_default.a, {
      styleId: "2024980457",
      css: ["p.jsx-2024980457{font-size:16px;line-height:1.25;margin:0;margin-top:8px;}", ".nomargin.jsx-2024980457{margin-top:0;}", ".small.jsx-2024980457{font-size:13px;}"]
    }));
  });
};

/* harmony default export */ var components_ScriptureRef = (ScriptureRef_ScriptureRef);
// CONCATENATED MODULE: ./components/ConfessionParagraph.js


function ConfessionParagraph_slicedToArray(arr, i) { return ConfessionParagraph_arrayWithHoles(arr) || ConfessionParagraph_iterableToArrayLimit(arr, i) || ConfessionParagraph_nonIterableRest(); }

function ConfessionParagraph_nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function ConfessionParagraph_iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function ConfessionParagraph_arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }






var ConfessionParagraph_ConfessionParagraph = function ConfessionParagraph(_ref) {
  var paragraph = _ref.paragraph,
      index = _ref.index;

  var _useState = Object(external_react_["useState"])(null),
      _useState2 = ConfessionParagraph_slicedToArray(_useState, 2),
      activeScripture = _useState2[0],
      setActiveScripture = _useState2[1];

  var _useState3 = Object(external_react_["useState"])(null),
      _useState4 = ConfessionParagraph_slicedToArray(_useState3, 2),
      activeScriptureText = _useState4[0],
      setActiveScriptureText = _useState4[1];

  var _useState5 = Object(external_react_["useState"])(false),
      _useState6 = ConfessionParagraph_slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

  Object(external_react_["useEffect"])(function () {
    document.addEventListener("click", handleClick);
    return function () {
      document.removeEventListener("click", handleClick);
    };
  });

  function handleClick(event) {
    if (!event.target.classList.contains("scripture")) {
      setActiveScripture(null);
      setActiveScriptureText(null);
    }
  }

  return external_react_default.a.createElement("div", {
    className: "jsx-623800356"
  }, external_react_default.a.createElement("h4", {
    className: "jsx-623800356"
  }, "Chapter ", index + 1), external_react_default.a.createElement("p", {
    className: "jsx-623800356"
  }, paragraph.map(function (section) {
    return external_react_default.a.createElement("span", {
      key: section.superscript,
      className: "jsx-623800356"
    }, section.text, external_react_default.a.createElement("a", {
      href: "#ref-".concat(index, "-").concat(section.superscript),
      id: "".concat(index, "-").concat(section.superscript),
      className: "jsx-623800356" + " " + "superscript"
    }, "".concat(section.superscript, " ")));
  })), external_react_default.a.createElement("div", {
    className: "jsx-623800356" + " " + "scripture-section"
  }, paragraph.map(function (section) {
    return external_react_default.a.createElement("div", {
      key: section.superscript,
      className: "jsx-623800356"
    }, external_react_default.a.createElement("a", {
      href: "#".concat(index, "-").concat(section.superscript),
      id: "ref-".concat(index, "-").concat(section.superscript),
      className: "jsx-623800356"
    }, "^ "), external_react_default.a.createElement("strong", {
      className: "jsx-623800356"
    }, section.superscript, "."), " ", section.scriptures ? section.scriptures.map(function (scripture, index) {
      return external_react_default.a.createElement("span", {
        key: scripture,
        className: "jsx-623800356"
      }, external_react_default.a.createElement(components_Popover, {
        isOpen: scripture === activeScripture,
        body: activeScriptureText ? loading ? external_react_default.a.createElement("div", {
          style: {
            padding: "5px 10px"
          },
          className: "jsx-623800356"
        }, external_react_default.a.createElement("img", {
          src: "https://i.imgur.com/P7fXP4s.gif",
          style: {
            display: "flex",
            height: 25,
            width: 25,
            textAlign: "center",
            margin: "8px auto 0"
          },
          className: "jsx-623800356"
        })) : external_react_default.a.createElement(components_ScriptureRef, {
          key: index,
          data: activeScriptureText
        }) : null,
        place: "below"
      }, external_react_default.a.createElement("span", {
        onClick: function onClick() {
          var savedActiveScripture = scripture === activeScripture ? null : scripture;
          setActiveScripture(savedActiveScripture);

          if (savedActiveScripture) {
            setLoading(true);
            external_axios_default.a.get("https://bibleanswersapi.herokuapp.com/passages?passages=".concat(encodeURIComponent(savedActiveScripture))).then(function (response) {
              setLoading(false);
              setActiveScriptureText(response.data);
            });
          } else {
            setActiveScriptureText(null);
          }
        },
        className: "jsx-623800356" + " " + "scripture"
      }, scripture)), index === section.scriptures.length - 1 ? "" : "; ");
    }) : null);
  })), external_react_default.a.createElement(style_default.a, {
    styleId: "623800356",
    css: ["h4.jsx-623800356{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}", "p.jsx-623800356{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}", "h4.jsx-623800356+p.jsx-623800356{margin-top:8px;}", ".first.jsx-623800356{margin-top:8px;}", ".nomargin.jsx-623800356{margin-top:0;}", "a.jsx-623800356{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}", "@media screen and (max-width:768px){h4.jsx-623800356{font-size:24px;margin-top:22px;}p.jsx-623800356{font-size:18px;margin-top:21px;}}", ".superscript.jsx-623800356{color:#689f38;font-size:15px;margin-left:1px;position:relative;top:-6px;}", ".scripture-section.jsx-623800356{font-size:14px;margin-top:10px;}", ".scripture.jsx-623800356{color:#039be5;cursor:pointer;}"]
  }));
};

/* harmony default export */ var components_ConfessionParagraph = (ConfessionParagraph_ConfessionParagraph);
// CONCATENATED MODULE: ./pages/confession.js


function confession_objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { confession_defineProperty(target, key, source[key]); }); } return target; }

function confession_defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var confession_Confession = function Confession(_ref) {
  var chapterList = _ref.chapterList,
      name = _ref.name,
      image_url = _ref.image_url,
      chapter = _ref.chapter,
      chapters = _ref.chapters,
      title = _ref.title,
      content = _ref.content,
      previous = _ref.previous,
      next = _ref.next;
  return external_react_default.a.createElement(Container["b" /* Container */], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", {
    className: "jsx-894054309"
  }, chapterList ? "Chapter list for the ".concat(name) : "".concat(chapter, ". ").concat(title), " ", "- $", name, " | Bible Answers"), external_react_default.a.createElement("meta", {
    name: "description",
    content: "This is \"".concat(chapter, ". ").concat(title, "\" of the ").concat(name, ". Read the ").concat(name, " while easily viewing Scripture references."),
    className: "jsx-894054309"
  })), external_react_default.a.createElement(TitleSection["b" /* TitleSection */], {
    title: chapterList ? "Chapter list for the ".concat(name) : "".concat(chapter, ". ").concat(title),
    subtitle: "Read and explore the ".concat(name),
    image_url: image_url
  }), external_react_default.a.createElement(ReadingContainer["a" /* default */], null, external_react_default.a.createElement("div", {
    className: "jsx-894054309" + " " + "writing"
  }, chapterList ? null : external_react_default.a.createElement(components_ConfessionNav, {
    previous: previous ? {
      href: "/confessions/".concat(previous.slug),
      label: "".concat(previous.chapter === "Preface" ? "" : "Chapter", " ").concat(previous.chapter, ". ").concat(previous.title)
    } : null,
    next: next ? {
      href: "/confessions/".concat(next.slug),
      label: "".concat(next.chapter === "Preface" ? "" : "Chapter", " ").concat(next.chapter, ". ").concat(next.title)
    } : null
  }), chapterList ? chapters.map(function (chapter) {
    return external_react_default.a.createElement("a", {
      key: chapter.chapter,
      href: "/confessions/".concat(chapter.slug),
      className: "jsx-894054309"
    }, external_react_default.a.createElement("p", {
      className: "jsx-894054309" + " " + "first"
    }, chapter.chapter, ". ", chapter.title));
  }) : null, content ? content.map(function (paragraph, index) {
    if (Object(external_lodash_["isString"])(paragraph)) {
      return external_react_default.a.createElement("p", {
        key: index,
        className: "jsx-894054309"
      }, paragraph);
    }

    return external_react_default.a.createElement(components_ConfessionParagraph, {
      key: index,
      paragraph: paragraph,
      index: index
    });
  }) : null, chapterList ? null : external_react_default.a.createElement(components_ConfessionNav, {
    previous: previous ? {
      href: "/confessions/".concat(previous.slug),
      label: "".concat(previous.chapter === "Preface" ? "" : "Chapter", " ").concat(previous.chapter, ". ").concat(previous.title)
    } : null,
    next: next ? {
      href: "/confessions/".concat(next.slug),
      label: "".concat(next.chapter === "Preface" ? "" : "Chapter", " ").concat(next.chapter, ". ").concat(next.title)
    } : null
  }))), external_react_default.a.createElement(style_default.a, {
    styleId: "894054309",
    css: [".writing.jsx-894054309 h3.jsx-894054309{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}", ".writing.jsx-894054309 h4.jsx-894054309{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}", ".writing.jsx-894054309 h3.jsx-894054309+p.jsx-894054309,.writing.jsx-894054309 h3.jsx-894054309+ol.jsx-894054309,.writing.jsx-894054309 h3.jsx-894054309+ul.jsx-894054309,.writing.jsx-894054309 h3.jsx-894054309+blockquote.jsx-894054309,.writing.jsx-894054309 h4.jsx-894054309+p.jsx-894054309,.writing.jsx-894054309 h4.jsx-894054309+ol.jsx-894054309,.writing.jsx-894054309 h4.jsx-894054309+ul.jsx-894054309,.writing.jsx-894054309 h4.jsx-894054309+blockquote.jsx-894054309{margin-top:8px;}", ".writing.jsx-894054309 p.jsx-894054309,.writing.jsx-894054309 ol.jsx-894054309,.writing.jsx-894054309 ul.jsx-894054309,.writing.jsx-894054309 blockquote.jsx-894054309{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}", ".writing.jsx-894054309 ol.jsx-894054309,.writing.jsx-894054309 ul.jsx-894054309{padding:0 40px;}", ".writing.jsx-894054309 li.jsx-894054309{margin-bottom:10px;}", ".writing.jsx-894054309 li.jsx-894054309:last-child{margin-bottom:0;}", ".writing.jsx-894054309 blockquote.jsx-894054309{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}", ".writing.jsx-894054309 .first.jsx-894054309{margin-top:8px;}", ".writing.jsx-894054309 .nomargin.jsx-894054309{margin-top:0;}", ".writing.jsx-894054309 .indent.jsx-894054309{margin-left:20px;}", ".writing.jsx-894054309 .image.jsx-894054309{margin-top:29px;}", ".writing.jsx-894054309 .image-left.jsx-894054309{float:left;margin-right:20px;}", ".writing.jsx-894054309 .image-right.jsx-894054309{float:right;margin-left:20px;}", ".writing.jsx-894054309 a.jsx-894054309{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}", ".writing.jsx-894054309 .reference.jsx-894054309{font-size:14px;margin-left:2px;position:relative;top:-5px;}", "@media screen and (max-width:768px){.writing.jsx-894054309 h3.jsx-894054309{font-size:30px;margin-top:28px;}.writing.jsx-894054309 h4.jsx-894054309{font-size:24px;margin-top:22px;}.writing.jsx-894054309 p.jsx-894054309,.writing.jsx-894054309 ol.jsx-894054309{font-size:18px;margin-top:21px;}.writing.jsx-894054309 blockquote.jsx-894054309{font-size:18px;margin-top:21px;}.writing.jsx-894054309 .image.jsx-894054309{margin-top:21px;}}"]
  }));
};

confession_Confession.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  var name = london_baptist.name,
      image_url = london_baptist.image_url,
      chapters = london_baptist.chapters;

  if (query.slug.indexOf("chapter-list") !== -1) {
    return {
      chapterList: true,
      name: name,
      image_url: image_url,
      chapters: chapters
    };
  }

  var chapterIndex = Object(external_lodash_["findIndex"])(chapters, function (chapter) {
    return chapter.slug === query.slug;
  });
  var chapter = chapterIndex || chapterIndex === 0 ? chapters[chapterIndex] : {};
  return confession_objectSpread({
    name: name,
    image_url: image_url
  }, chapter, {
    previous: chapters[chapterIndex - 1],
    next: chapters[chapterIndex + 1]
  });
};

/* harmony default export */ var confession = __webpack_exports__["default"] = (confession_Confession);

/***/ })
/******/ ]);