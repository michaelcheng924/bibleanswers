module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../../ssr-module-cache.js');
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
/******/ 	return __webpack_require__(__webpack_require__.s = 38);
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
/***/ (function(module, exports) {

module.exports = require("react-amphtml");

/***/ }),
/* 4 */
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
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n"]);

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
/* 5 */
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
/* 6 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 7 */,
/* 8 */,
/* 9 */,
/* 10 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 11 */
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
var external_react_amphtml_ = __webpack_require__(3);

// EXTERNAL MODULE: external "moment"
var external_moment_ = __webpack_require__(6);
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
/* 12 */,
/* 13 */,
/* 14 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var ConfessionNav = function ConfessionNav(_ref) {
  var previous = _ref.previous,
      next = _ref.next;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2819837007" + " " + "chapter-nav"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2819837007" + " " + "chapter-nav-item"
  }, previous ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: previous.href,
    className: "jsx-2819837007"
  }, previous.label) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2819837007" + " " + "nomargin chapter-nav-item"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/confessions/1689-london-baptist-confession-chapter-list",
    className: "jsx-2819837007"
  }, "Table of Contents")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2819837007" + " " + "chapter-nav-item"
  }, next ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: next.href,
    className: "jsx-2819837007"
  }, next.label) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2819837007",
    css: ["p.jsx-2819837007{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}", "a.jsx-2819837007{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}", "@media screen and (max-width:768px){p.jsx-2819837007{font-size:18px;margin-top:21px;}}", ".chapter-nav.jsx-2819837007{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-top:20px;}", ".chapter-nav-item.jsx-2819837007{margin-top:10px;position:relative;top:-10px;width:33%;}"]
  }));
};

/* harmony default export */ __webpack_exports__["a"] = (ConfessionNav);

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
/* 38 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(39);


/***/ }),
/* 39 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(10);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(4);
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(11);
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(5);
/* harmony import */ var _components_ConfessionNav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(14);








var LBCChapter1 = function LBCChapter1() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__[/* Container */ "b"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-39270593"
  }, "Preface - 1689 London Baptist Confession of Faith"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "This is the preface of the 1689 London Baptist Confession of Faith, which explains the motivation and philosophy behind the writing of the 1689 London Baptist Confession of Faith.",
    className: "jsx-39270593"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_4__[/* TitleSection */ "b"], {
    title: "Preface - 1689 London Baptist Confession of Faith",
    subtitle: "The preface of the 1689 London Baptist Confession of Faith",
    image_url: "https://i.imgur.com/FI0zkxZ.png"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-39270593" + " " + "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ConfessionNav__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    next: {
      href: "/confessions/1689-london-baptist-confession-chapter-1-holy-scriptures",
      label: "Chapter 1: Of the Holy Scriptures"
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-39270593"
  }, "To the Judicious and Impartial Reader"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-39270593"
  }, "It is now many years since divers of us (with other sober Christians then living and walking in the way of the Lord that we professe) did conceive our selves to be under a necessity of Publishing a Confession of our Faith, for the information, and satisfaction of those, that did not throughly understand what our principles were, or had entertained prejudices against our Profession, by reason of the strange representation of them, by some men of note, who had taken very wrong measures, and accordingly led others into misapprehensions, of us, and them: and this was first put forth about the year, 1643. in the name of seven Congregations then gathered in London; since which time, diverse impressions thereof have been dispersed abroad, and our end proposed, in good measure answered, inasmuch as many (and some of those men eminent, both for piety and learning) were thereby satisfied, that we were no way guilty of those Heterodoxies and fundamental errors, which had too frequently been charged upon us without ground, or occasion given on our part. And forasmuch, as that Confession is not now commonly to be had; and also that many others have since embraced the same truth which is owned therein; it was judged necessary by us to joyn together in giving a testimony to the world; of our firm adhering to those wholesome Principles, by the publication of this which is now in your hand."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-39270593"
  }, "And forasmuch as our method, and manner of expressing our sentiments, in this, doth vary from the former (although the substance of the matter is the same) we shall freely impart to you the reason and occasion thereof. One thing that greatly prevailed with us to undertake this work, was (not only to give a full account of our selves, to those Christians that differ from us about the subject of Baptism, but also) the profit that might from thence arise, unto those that have any account of our labors, in their instruction, and establishment in the great truths of the Gospel; in the clear understanding, and steady belief of which, our comfortable walking with God, and fruitfulness before him, in all our ways, is most neerly concerned; and therefore we did conclude it necessary to expresse our selves the more fully, and distinctly; and also to fix on such a method as might be most comprehensive of those things which we designed to explain our sense, and belief of; and finding no defect, in this regard, in that fixed on by the assembly, and after them by those of the Congregational way, we did readily conclude it best to retain the same order in our present confession: and also, when we observed that those last mentioned, did in their confession (for reasons which seemed of weight both to themselves and others) choose not only to express their mind in words concurrent with the former in sense, concerning all those articles wherein they were agreed, but also for the most part without any variation of the terms we did in like manner conclude it best to follow their example in making use of the very same words with them both, in these articles (which are very many) wherein our faith and doctrine is the same with theirs, and this we did, the more abundantly, to manifest our consent with both, in all the fundamental articles of the Christian Religion, as also with many others, whose orthodox confessions have been published to the world; on behalf of the Protestants in divers Nations and Cities: and also to convince all, that we have no itch to clogge Religion with new words, but do readily acquiesce in that form of sound words, which hath been, in consent with the holy Scriptures, used by others before us; hereby declaring before God, Angels, & Men, our hearty agreement with them, in that wholesome Protestant Doctrine, which with so clear evidence of Scriptures they have asserted: some things indeed, are in some places added, some terms omitted, and some few changed, but these alterations are of that nature, as that we need not doubt, any charge or suspition of unsoundness in the faith, from any of our brethren upon the account of them."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-39270593"
  }, "In those things wherein we differ from others, we have exprest our selves with all candor and plainness that none might entertain jealousie of ought secretly lodged in our breasts, that we would not the world should be acquainted with; yet we hope we have also observed those rules of modesty, and humility, as will render our freedom in this respect inoffensive, even to those whose sentiments are different from ours."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-39270593"
  }, "We have also taken care to affix texts of Scripture, in the margin for the confirmation of each article in our confession; in which work we have studiously indeavoured to select such as are most clear and pertinent, for the proof of what is asserted by us: and our earnest desire is, that all into whose hands this may come, would follow that (never enough commended) example of the noble Bereans, who searched the Scriptures daily, that they might find out whether the things preached to them were so or not."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-39270593"
  }, "There is one thing more which we sincerely professe, and earnestly desire credence in, viz. That contention is most remote from our design in all that we have done in this matter: and we hope the liberty of an ingenuous unfolding our principles, and opening our hearts unto our Brethren, with the Scripture grounds on which our faith and practise leanes, will by none of them be either denyed to us, or taken ill from us. Our whole design is accomplished, if we may obtain that Justice, as to be measured in our principles, and practise, and the judgement of both by others, according to what we have now published; which the Lord (whose eyes are as a flame of fire) knoweth to be the doctrine, which with our hearts we must firmly believe, and sincerely indeavour to conform our lives to. And oh that other contentions being laid asleep, the only care and contention of all upon whom the name of our blessed Redeemer is called, might for the future be, to walk humbly with their God, and in the exercise of all Love and Meekness towards each other, to perfect holyness in the fear of the Lord, each one endeavouring to have his conversation such as becometh the Gospel; and also suitable to his place and capacity vigorously to promote in others the practice of true Religion and undefiled in the sight of God and our Father. And that in this backsliding day, we might not spend our breath in fruitless complaints of the evils of others; but may every one begin at home, to reform in the first place our own hearts, and wayes; and then to quicken all that we may have influence upon, to the same work; that if the will of God were so, none might deceive themselves, by resting in, and trusting to, a form of Godliness, without the power of it, and inward experience of the efficacy of those truths that are professed by them."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-39270593"
  }, "And verily there is one spring and cause of the decay of Religion in our day, which we cannot but touch upon, and earnestly urge a redresse of; and that is the neglect of the worship of God in Families, by those to whom the charge and conduct of them is committed. May not the grosse ignorance, and instability of many; with the prophaneness of others, be justly charged upon their Parents and Masters; who have not trained them up in the way wherein they ought to walk when they were young? but have neglected those frequent and solemn commands which the Lord hath laid upon them so to catechize, and instruct them, that their tender years might be seasoned with the knowledge of the truth of God as revealed in the Scriptures; and also by their own omission of Prayer, and other duties of Religion in their families, together with the ill example of their loose conversation, have inured them first to a neglect, and then contempt of all Piety and Religion? we know this will not excuse the blindness, or wickedness of any; but certainly it will fall heavy upon those that have thus been the occasion thereof; they indeed dye in their sins; but will not their blood be required of those under whose care they were, who yet permitted them to go on without warning, yea led them into the paths of destruction? and will not the diligence of Christians with respect to the discharge of these duties, in ages past, rise up in judgment against, and condemn many of those who would be esteemed such now?"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-39270593"
  }, "We shall conclude with our earnest prayer, that the God of all grace, will pour out those measures of his holy Spirit upon us, that the profession of truth may be accompanyed with the sound belief, and diligent practise of it by us; that his name may in all things be glorified, through Jesus Christ our Lord, Amen."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ConfessionNav__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], {
    next: {
      href: "/confessions/1689-london-baptist-confession-chapter-1-holy-scriptures",
      label: "Chapter 1: Of the Holy Scriptures"
    }
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "39270593",
    css: [".writing.jsx-39270593 h3.jsx-39270593{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}", ".writing.jsx-39270593 h4.jsx-39270593{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}", ".writing.jsx-39270593 h3.jsx-39270593+p.jsx-39270593,.writing.jsx-39270593 h3.jsx-39270593+ol.jsx-39270593,.writing.jsx-39270593 h3.jsx-39270593+ul.jsx-39270593,.writing.jsx-39270593 h3.jsx-39270593+blockquote.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+p.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+ol.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+ul.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+blockquote.jsx-39270593{margin-top:8px;}", ".writing.jsx-39270593 p.jsx-39270593,.writing.jsx-39270593 ol.jsx-39270593,.writing.jsx-39270593 ul.jsx-39270593,.writing.jsx-39270593 blockquote.jsx-39270593{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}", ".writing.jsx-39270593 ol.jsx-39270593,.writing.jsx-39270593 ul.jsx-39270593{padding:0 40px;}", ".writing.jsx-39270593 li.jsx-39270593{margin-bottom:10px;}", ".writing.jsx-39270593 li.jsx-39270593:last-child{margin-bottom:0;}", ".writing.jsx-39270593 blockquote.jsx-39270593{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}", ".writing.jsx-39270593 .first.jsx-39270593{margin-top:8px;}", ".writing.jsx-39270593 .nomargin.jsx-39270593{margin-top:0;}", ".writing.jsx-39270593 .indent.jsx-39270593{margin-left:20px;}", ".writing.jsx-39270593 .image.jsx-39270593{margin-top:29px;}", ".writing.jsx-39270593 .image-left.jsx-39270593{float:left;margin-right:20px;}", ".writing.jsx-39270593 .image-right.jsx-39270593{float:right;margin-left:20px;}", ".writing.jsx-39270593 a.jsx-39270593{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}", ".writing.jsx-39270593 .scripture.jsx-39270593{color:#039be5;}", ".writing.jsx-39270593 .reference.jsx-39270593{font-size:14px;margin-left:2px;position:relative;top:-5px;}", "@media screen and (max-width:768px){.writing.jsx-39270593 h3.jsx-39270593{font-size:30px;margin-top:28px;}.writing.jsx-39270593 h4.jsx-39270593{font-size:24px;margin-top:22px;}.writing.jsx-39270593 p.jsx-39270593,.writing.jsx-39270593 ol.jsx-39270593{font-size:18px;margin-top:21px;}.writing.jsx-39270593 blockquote.jsx-39270593{font-size:18px;margin-top:21px;}.writing.jsx-39270593 .image.jsx-39270593{margin-top:21px;}}"]
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (LBCChapter1);

/***/ })
/******/ ]);