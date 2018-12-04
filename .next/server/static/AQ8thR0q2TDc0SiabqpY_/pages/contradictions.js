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
/******/ 	return __webpack_require__(__webpack_require__.s = 36);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 10:
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),

/***/ 13:
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





var AmpAuthor = external_styled_components_default.a.div(_templateObject());
var AmpAuthorInfo = external_styled_components_default.a.div(_templateObject2());
var AmpAuthorName = external_styled_components_default.a.div(_templateObject3());
var AmpAuthorDate = external_styled_components_default.a.div(_templateObject4());
var StyledAmpImage = external_styled_components_default()(external_react_amphtml_["AmpImg"])(_templateObject5());

var Author_AmpAuthorComponent = function AmpAuthorComponent(_ref) {
  var date_added = _ref.date_added,
      image = _ref.image,
      name = _ref.name;
  return external_react_default.a.createElement(AmpAuthor, null, external_react_default.a.createElement(StyledAmpImage, {
    specName: "default",
    src: image,
    width: "60",
    height: "60",
    alt: "AMP"
  }), external_react_default.a.createElement(AmpAuthorInfo, null, external_react_default.a.createElement(AmpAuthorName, null, name), date_added ? external_react_default.a.createElement(AmpAuthorDate, null, external_moment_default()(new Date(date_added)).format("MMM Do, YYYY")) : external_react_default.a.createElement(AmpAuthorDate, null, "Not published yet")));
};

var Author_AuthorComponent = function AuthorComponent(_ref2) {
  var date_added = _ref2.date_added,
      image = _ref2.image,
      name = _ref2.name;
  return external_react_default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author"
  }, external_react_default.a.createElement("img", {
    src: image,
    className: "jsx-2530676027" + " " + "image"
  }), external_react_default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-info"
  }, external_react_default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-name"
  }, name), date_added ? external_react_default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-date"
  }, external_moment_default()(new Date(date_added)).format("MMM Do, YYYY")) : external_react_default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-date"
  }, "Not published yet")), external_react_default.a.createElement(style_default.a, {
    styleId: "2530676027",
    css: [".author.jsx-2530676027{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;max-width:500px;}", ".author-info.jsx-2530676027{margin-left:20px;}", ".author-name.jsx-2530676027{font-size:16px;margin-bottom:4px;}", ".author-date.jsx-2530676027{color:rgba(0,0,0,0.54);font-size:16px;}", ".image.jsx-2530676027{border-radius:30px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:60px;width:60px;}"]
  }));
};


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
  return external_react_default.a.createElement(AmpTitleSectionContainer, null, external_react_default.a.createElement(AmpTitleInfoContainer, null, external_react_default.a.createElement(AmpTitleInfo, null, external_react_default.a.createElement(AmpTitleText, null, title), external_react_default.a.createElement(AmpSubtitle, null, subtitle || "Help us write this article!"), user ? external_react_default.a.createElement(Author_AmpAuthorComponent, {
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
  return external_react_default.a.createElement(TitleSection_TitleSectionContainer, null, external_react_default.a.createElement(TitleSection_TitleInfoContainer, null, external_react_default.a.createElement(TitleSection_TitleInfo, null, external_react_default.a.createElement(TitleSection_TitleText, null, title), external_react_default.a.createElement(TitleSection_Subtitle, null, subtitle || "Help us write this article!"), user ? external_react_default.a.createElement(Author_AuthorComponent, {
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

/***/ 15:
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ 16:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return boldNumbers; });
/* unused harmony export textRef */
/* unused harmony export renderRefs */
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return getModifiedContent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(7);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function boldNumbers(text) {
  var splitText = text.split(" ");
  var mappedText = splitText.map(function (word) {
    if (Number(word) < 100) {
      return "<strong>".concat(word, "</strong>");
    }

    return word;
  });
  return mappedText.join(" ");
}
function textRef(number) {
  return "<span class=\"superscript\"><a class=\"reference\" href=\"#footnote-".concat(number, "\" id=\"text-").concat(number, "\">[").concat(number, "]</a></span>");
}
function renderRefs(references) {
  return "\n    <h4>References</h4>\n\n    <ol class=\"first\">\n      ".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(references, function (reference, number) {
    return "<li><a class=\"reference-arrow\" href=\"#text-".concat(number, "\" id=\"footnote-").concat(number, "\">^</a> ").concat(reference, "</li>");
  }).join(" "), "\n    </ol>\n  ");
}
function getModifiedContent(post) {
  return getContentWithReferences(post.html || "", post.references || "");
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

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 3:
/***/ (function(module, exports) {

module.exports = require("react-amphtml");

/***/ }),

/***/ 36:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(53);


/***/ }),

/***/ 4:
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

/***/ 5:
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

/***/ 53:
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
var head_ = __webpack_require__(10);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "react-icons/fa"
var fa_ = __webpack_require__(15);

// EXTERNAL MODULE: external "lodash"
var external_lodash_ = __webpack_require__(7);

// EXTERNAL MODULE: ./utils/writing.js
var writing = __webpack_require__(16);

// CONCATENATED MODULE: ./constants/contradictions/genesis.js
var genesis = {
  book: "Genesis",
  answers: [{
    bookVerses: "1&ndash;2",
    question: "Do Genesis 1 and 2 present contradictory creation accounts?",
    allPassages: [{
      passage: "Genesis 1",
      text: ["11 And God said, \u201C<strong>Let the earth sprout vegetation, plants yielding seed, and fruit trees bearing fruit in which is their seed, each according to its kind, on the earth...</strong>\u201D 13 And there was evening and there was morning, the third day.", "24 And God said, \u201C<strong>Let the earth bring forth living creatures according to their kinds\u2014livestock and creeping things and beasts of the earth according to their kinds...</strong>\u201D", "26 Then God said, \u201C<strong>Let us make man in our image, after our likeness.</strong>\u201D"]
    }, {
      passage: "Genesis 2",
      text: ["5 <strong>When no bush of the field was yet in the land and no small plant of the field had yet sprung up\u2014for the Lord God had not caused it to rain on the land, and there was no man to work the ground</strong>, 6 and a mist was going up from the land and was watering the whole face of the ground\u2014 7 <strong>then the Lord God formed the man of dust from the ground and breathed into his nostrils the breath of life, and the man became a living creature</strong>. 8 And the Lord God planted a garden in Eden, in the east, and there he put the man whom he had formed. 9 <strong>And out of the ground the Lord God made to spring up every tree that is pleasant to the sight and good for food</strong>. The tree of life was in the midst of the garden, and the tree of the knowledge of good and evil...", "18 Then the Lord God said, \u201CIt is not good that the man should be alone; I will make him a helper fit for him.\u201D 19 <strong>Now out of the ground the Lord God had formed every beast of the field and every bird of the heavens</strong> and brought them to the man to see what he would call them."]
    }]
  }, {
    bookVerses: "1:26",
    question: "Are there one or many Gods?",
    quickAnswer: '<p>The doctrine of the Trinity teaches that there is one God who exists in three persons. "God" and "person" are not the same thing, so there is no contradiction. The plural pronouns in Genesis could either be referring to the Trinity, or they could be a "royal we," which is sometimes used for monarchs.</p>',
    fullPost: "/answers/are-there-one-many-gods",
    allPassages: [{
      heading: "There is one God",
      passages: [{
        passage: "Deuteronomy 6:4",
        text: "4 “Hear, O Israel: The Lord our God, the Lord is one"
      }, {
        passage: "Isaiah 43:10",
        text: "10 \u201CYou are my witnesses,\u201D declares the Lord, \u201Cand my servant whom I have chosen, that you may know and believe me and understand that I am he. Before me no god was formed, nor shall there be any after me."
      }, {
        passage: "Isaiah 44:6",
        text: "6 Thus says the Lord, the King of Israel and his Redeemer, the Lord of hosts: \u201CI am the first and I am the last; besides me there is no god."
      }, {
        passage: "Isaiah 44:8",
        text: "8 Fear not, nor be afraid; have I not told you from of old and declared it? And you are my witnesses! Is there a God besides me? There is no Rock; I know not any.\u201D"
      }]
    }, {
      heading: "There are many Gods",
      passages: [{
        passage: "Genesis 1:26",
        text: "26 Then God said, \u201CLet us make man in our image, after our likeness. And let them have dominion over the fish of the sea and over the birds of the heavens and over the livestock and over all the earth and over every creeping thing that creeps on the earth.\u201D"
      }, {
        passage: "Genesis 3:22",
        text: "22 Then the Lord God said, \u201CBehold, the man has become like one of us in knowing good and evil. Now, lest he reach out his hand and take also of the tree of life and eat, and live forever\u2014\u201D"
      }, {
        passage: "Genesis 11:7",
        text: "7 Come, let us go down and there confuse their language, so that they may not understand one another's speech.\u201D"
      }, {
        passage: "1 Corinthians 8:5",
        text: "5 For although there may be so-called gods in heaven or on earth\u2014as indeed there are many \u201Cgods\u201D and many \u201Clords\u201D\u2014"
      }, {
        passage: "1 John 5:8",
        text: "8 the Spirit and the water and the blood; and these three agree."
      }]
    }]
  }, {
    bookVerses: "3:9",
    question: "Does God asking Adam, \"Where are you?\", mean that God doesn't know everything?",
    quickAnswer: "<p>God simply asked a question that He already knew the answer to. This is often done to teach something. So, God asking adam, \"Where are you,\" does not mean that God is not omniscient.</p>",
    fullPost: "/answers/genesis-3-9-gods-omniscience",
    allPassages: [{
      passage: "Genesis 3:9",
      text: "9 But the Lord God called to the man and said to him, \u201CWhere are you?\u201D"
    }]
  }, {
    bookVerses: "3:16",
    question: "Was it wrong for God to multiply the pain of women in childbearing?",
    quickAnswer: "<ol>\n      <li>Adam and Eve sinned, and one consequence of sin is pain.</li>\n      <li>Adam, as the \"head\" of all mankind, represented the entire human race in his sin. This is the doctrine of original sin.</li>\n      <li>We have no grounds upon which to call the doctrine of original sin unfair.</li>\n    </ol>",
    fullPost: "/answers/genesis-3-16-pain-women-child-bearing",
    allPassages: [{
      passage: "Genesis 3:16",
      text: "16 To the woman he said, \u201CI will surely multiply your pain in childbearing; in pain you shall bring forth children. Your desire shall be contrary to[a] your husband, but he shall rule over you.\u201D"
    }]
  }, {
    bookVerses: "3:22",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "4:17",
    question: "Where did Cain get his wife?",
    quickAnswer: "<p>Cain's wife was one of his sisters. God did not prohibit sexual relations with one's close relative until Leviticus 18:6. One purpose of incest laws was to protect people from birth defects, but Cain lived during an early time when the genetic pool was still very pure.</p>",
    fullPost: "/answers/genesis-4-17-cain-wife",
    allPassages: [{
      passage: "Genesis 4:16-17",
      text: "Then Cain went away from the presence of the Lord and settled in the land of Nod, east of Eden. Cain knew his wife, and she conceived and bore Enoch. When he built a city, he called the name of the city after the name of his son, Enoch."
    }]
  }, {
    bookVerses: "5:1-31",
    question: "Did people live hundreds of years in Genesis?",
    quickAnswer: "<p>Adam, as the first human created and as one created without sin, likely had such an uncorrupted body and genetic constitution that he, and his descendants after him for some time, was able to live hundreds of years.</p>",
    fullPost: "/answers/did-people-live-hundreds-years-genesis-5",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:24",
    question: "Did anyone ascend to heaven before Jesus?",
    quickAnswer: "<p>The \"heaven\" that Enoch and Elijah were taken up into is different from the \"heaven\" that Jesus ascended to. Believers will not experience the fullness of heaven until Jesus returns and they receive a resurrected body.</p>",
    fullPost: "/answers/did-anyone-ascend-heaven-before-jesus",
    allPassages: [{
      heading: "Enoch and Elijah ascended to heaven",
      passages: [{
        passage: "Genesis 5:24",
        text: "Enoch walked with God, and he was not,[a] for God took him."
      }, {
        passage: "2 Kings 2:11",
        text: "And as they still went on and talked, behold, chariots of fire and horses of fire separated the two of them. And Elijah went up by a whirlwind into heaven."
      }, {
        passage: "Hebrews 11:5",
        text: "By faith Enoch was taken up so that he should not see death, and he was not found, because God had taken him. Now before he was taken he was commended as having pleased God."
      }]
    }, {
      heading: "Only Jesus has ascended to heaven",
      passages: [{
        passage: "John 3:13",
        text: "No one has ascended into heaven except he who descended from heaven, the Son of Man."
      }]
    }]
  }, {
    bookVerses: "6:2-5",
    question: "Who were the \"sons of God\" in Genesis 6?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "6:6-7",
    question: "Does God change His mind?",
    quickAnswer: "<p>No. When it appears that God is changing His mind in the Bible, the Bible is utilizing anthropomorphism, or the attribution of human traits, emotions, or intentions to non-human entities. This is done to help explain God in language we can more easily understand.</p>",
    fullPost: "/answers/does-god-change-his-mind",
    allPassages: [{
      heading: "God does not change",
      passages: [{
        passage: "Malachi 3:6",
        text: "For I the Lord do not change; therefore you, O children of Jacob, are not consumed."
      }]
    }, {
      heading: "God changes His mind",
      passages: [{
        passage: "Genesis 6:6-7",
        text: "And the Lord regretted that he had made man on the earth, and it grieved him to his heart. So the Lord said, \"I will blot out man whom I have created from the face of the land, man and animals and creeping things and birds of the heavens, for I am sorry that I have made them.\""
      }, {
        passage: "Exodus 32:14",
        text: "And the Lord relented from the disaster that he had spoken of bringing on his people."
      }, {
        passage: "Jonah 3:10",
        text: "When God saw what they did, how they turned from their evil way, God relented of the disaster that he had said he would do to them, and he did not do it."
      }]
    }]
  }, {
    bookVerses: "6:19-20",
    question: "How many of each kind did Noah bring into the ark, two, seven, or fourteen?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "7:1",
    question: "Is anyone righteous/blameless, or have all sinned?",
    quickAnswer: "<p>People who were described as \"righteous\" or \"blameless\" in the Bible, such as Job, Noah, Zacharias, and Elizabeth, were still sinners who needed to be saved by Jesus' atoning work. They were believers who trusted in the coming messiah for their salvation, and who were faithful in obeying God's commandments.</p>",
    fullPost: "/answers/is-anyone-righteous-have-all-sinned",
    allPassages: [{
      heading: "All have sinned",
      passages: [{
        passage: "Romans 3:23",
        text: "for all have sinned and fall short of the glory of God"
      }, {
        passage: "Romans 3:10",
        text: "None is righteous, no, not one"
      }, {
        passage: "Psalm 14:3",
        text: "They have all turned aside; together they have become corrupt; there is none who does good, not even one."
      }]
    }, {
      heading: "Some are righteous or blameless",
      passages: [{
        passage: "Job 1:1",
        text: "There was a man in the land of Uz whose name was Job, and that man was blameless and upright, one who feared God and turned away from evil."
      }, {
        passage: "Genesis 7:1",
        text: "Then the Lord said to Noah, \u201CGo into the ark, you and all your household, for I have seen that you are righteous before me in this generation."
      }, {
        passage: "Luke 1:6",
        text: "And they were both righteous before God, walking blamelessly in all the commandments and statutes of the Lord."
      }]
    }]
  }, {
    bookVerses: "7:2-3",
    see: ["genesis", "6:19-20"]
  }, {
    bookVerses: "11:8-9",
    question: "If God is not the author of confusion, then what about the Tower of Babel?",
    quickAnswer: "<p>The two passages are completely different contexts. 1 Corinthians 14:33 is referring to God not being the author of confusion in terms of order within the church, and Genesis 11:7-9 is about God creating confusion as judgment for the people's pride and sin. The phrase \"author of confusion\" in 1 Corinthians 14:33 is restricted to a particular context that does not apply to Genesis 11:7-9.</p>",
    fullPost: "/answers/god-author-confusion-babel",
    allPassages: [{
      heading: "God is not the author of confusion",
      passages: [{
        passage: "1 Corinthians 14:33",
        text: "For God is not a God of confusion but of peace..."
      }]
    }, {
      heading: "God creates confusion at the Tower of Babel",
      passages: [{
        passage: "Genesis 11:7-9",
        text: "\"Come, let us go down and there confuse their language, so that they may not understand one another's speech.\" So the Lord dispersed them from there over the face of all the earth, and they left off building the city. Therefore its name was called Babel, because there the Lord confused the language of all the earth. And from there the Lord dispersed them over the face of all the earth."
      }]
    }]
  }, {
    bookVerses: "17:1",
    question: "Has anyone seen God?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "18:1",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "19:8",
    question: "Was Lot righteous? Wasn't it wrong for Lot to give his daughters to the crowd of men?",
    quickAnswer: "<p>There is no contradiction because two things can be true at the same time: 1) Lot sinned in giving his daughters to the crowd of men (Genesis 19:8), and 2) generally speaking, Lot was overall a righteous man (2 Peter 2:7).</p>",
    fullPost: "/answers/was-lot-righteous-gave-daughters-to-crowd-men",
    allPassages: [{
      heading: "Lot gives his daughters to the crowd of men",
      passages: [{
        passage: "Genesis 19:8",
        text: "Behold, I have two daughters who have not known any man. Let me bring them out to you, and do to them as you please. Only do nothing to these men, for they have come under the shelter of my roof."
      }]
    }, {
      heading: "Lot is righteous",
      passages: [{
        passage: "2 Peter 2:7",
        text: "...and if he rescued righteous Lot, greatly distressed by the sensual conduct of the wicked..."
      }]
    }]
  }, {
    bookVerses: "22:1",
    question: "Does God tempt people?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:1-2",
    question: "Was it wrong for God to command Abraham to kill his son Isaac?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:2",
    question: "Did Abraham have one son or two sons?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "37:28",
    question: "Who sold Joseph, the Midianites or the Ishmaelites?",
    quickAnswer: "<p>In these passages, Ishmaelites and Midianites are referring to the same group of people, so there is no contradiction.</p>",
    fullPost: "/answers/who-bought-joseph-ishmaelites-midianites",
    allPassages: [{
      heading: "The Ishmaelites bought Joseph",
      passages: [{
        passage: "Genesis 37:28",
        text: "Then Midianite traders passed by. And they drew Joseph up and lifted him out of the pit, and sold him to the Ishmaelites for twenty shekels of silver. They took Joseph to Egypt."
      }, {
        passage: "Genesis 39:1",
        text: "Now Joseph had been brought down to Egypt, and Potiphar, an officer of Pharaoh, the captain of the guard, an Egyptian, had bought him from the Ishmaelites who had brought him down there."
      }]
    }, {
      heading: "The Midianites bought Joseph",
      passages: [{
        passage: "Genesis 37:36",
        text: "Meanwhile the Midianites had sold him in Egypt to Potiphar, an officer of Pharaoh, the captain of the guard."
      }]
    }]
  }, {
    bookVerses: "37:36",
    see: ["genesis", "37:28"]
  }, {
    bookVerses: "38:9",
    question: "Was it wrong for God to kill a man for \"wasting [his] semen on the ground\"?",
    quickAnswer: "<p>All sin deserves death and hell, so God is doing nothing wrong when He puts Onan to death for refusing to obey His command to further the line of his brother Er, who, we might note, was also put to death by God for his wickedness.</p>\n  \n      <p>Furthermore, Onan's sin would have been considered much more serious in Israel's culture than what we might think of his sin today.</p>",
    fullPost: "/answers/why-did-god-kill-man-spilling-seed",
    allPassages: [{
      passage: "Genesis 38:6-10",
      text: "6 And Judah took a wife for Er his firstborn, and her name was Tamar. 7 But Er, Judah's firstborn, was wicked in the sight of the Lord, and the Lord put him to death. 8 Then Judah said to Onan, \u201CGo in to your brother's wife and perform the duty of a brother-in-law to her, and raise up offspring for your brother.\u201D 9 But Onan knew that the offspring would not be his. So whenever he went in to his brother's wife he would waste the semen on the ground, so as not to give offspring to his brother. 10 And what he did was wicked in the sight of the Lord, and he put him to death also."
    }]
  }, {
    bookVerses: "39:1",
    see: ["genesis", "37:28"]
  }, {
    bookVerses: "47:31",
    question: "Did Jacob worship at the head of the bed or leaning on a staff?",
    quickAnswer: "<p>Both statements are true at the same time. At the head of the bed, Jacob leaned on his staff and worshipped. There is simply no contradiction here.</p>",
    fullPost: "/answers/did-jacob-worship-head-bed-or-leaning-staff",
    allPassages: [{
      heading: "Jacob worshipped at the head of the bed",
      passages: [{
        passage: "Genesis 47:31",
        text: "And he said, \u201CSwear to me\u201D; and he swore to him. Then Israel bowed himself upon the head of his bed."
      }]
    }, {
      heading: "Jacob worshipped leaning on a staff",
      passages: [{
        passage: "Hebrews 11:21",
        text: "By faith Jacob, when dying, blessed each of the sons of Joseph, bowing in worship over the head of his staff."
      }]
    }]
  }]
};
/* harmony default export */ var contradictions_genesis = (genesis);
// CONCATENATED MODULE: ./constants/contradictions/exodus.js
var exodus = {
  book: "Exodus",
  answers: [{
    bookVerses: "6:2-3",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "9:1-7",
    question: "Did all of Egypt's livestock die?",
    quickAnswer: "<p>There are at least five possible explanations:</p>\n  \n      <ol>\n        <li>\"All\" may not refer to every single animal (see Matthew 3:5, Mark 1:5).</li>\n        <li>The Egyptians gained livestock between verses 1-7 and verses 18-21.</li>\n        <li>Only livestock \"in the field\" were killed, so some livestock survived.</li>\n        <li>Verses 1-7 do not mention one important animal: the goat. It is possible that goats were not killed in verses 1-7.</li>\n        <li>In verses 19-20, those who \"feared the word of the Lord\" were warned about the coming plague. Perhaps some were warned during the plague in verses 1-7 also.</li>\n      </ol>",
    fullPost: "/answers/did-all-of-egypts-livestock-die",
    allPassages: [{
      heading: "All of the livestock died",
      passages: [{
        passage: "Exodus 9:1-7",
        text: "9 Then the Lord said to Moses, \u201CGo in to Pharaoh and say to him, \u2018Thus says the Lord, the God of the Hebrews, \u201CLet my people go, that they may serve me. 2 For if you refuse to let them go and still hold them, 3 behold, the hand of the Lord will fall with a very severe plague upon your livestock that are in the field, the horses, the donkeys, the camels, the herds, and the flocks. 4 But the Lord will make a distinction between the livestock of Israel and the livestock of Egypt, so that nothing of all that belongs to the people of Israel shall die.\u201D 5 And the Lord set a time, saying, \u201CTomorrow the Lord will do this thing in the land.\u201D 6 And the next day the Lord did this thing. <strong>All the livestock of the Egyptians died</strong>, but not one of the livestock of the people of Israel died. 7 And Pharaoh sent, and behold, not one of the livestock of Israel was dead. But the heart of Pharaoh was hardened, and he did not let the people go."
      }]
    }, {
      heading: "Not all of the livestock died",
      passages: [{
        passage: "Exodus 9:18-21",
        text: "18 Behold, about this time tomorrow I will cause very heavy hail to fall, such as never has been in Egypt from the day it was founded until now. 19 <strong>Now therefore send, get your livestock and all that you have in the field into safe shelter, for every man and beast that is in the field and is not brought home will die when the hail falls on them</strong>.\u201D 20 Then whoever feared the word of the Lord among the servants of Pharaoh hurried his slaves and his livestock into the houses, 21 but whoever did not pay attention to the word of the Lord left his slaves and his livestock in the field."
      }]
    }]
  }, {
    bookVerses: "9:18-21",
    see: ["exodus", "9:1-7"]
  }, {
    bookVerses: "15:3",
    question: "Is God a God of peace or a God of war?",
    quickAnswer: "<p>God's ultimate plan is peace, but there is a spiritual war that must be fought before full peace arrives. Thus, God is both a God of peace and a God of war. There is simply no contradiction between these passages.</p>",
    fullPost: "/answers/is-god-god-peace-war",
    allPassages: [{
      heading: "God is a God of peace",
      passages: [{
        passage: "Isaiah 2:4",
        text: "He shall judge between the nations, and shall decide disputes for many peoples; and they shall beat their swords into plowshares, and their spears into pruning hooks; neither shall they learn war anymore."
      }, {
        passage: "Romans 15:33",
        text: "May the God of peace be with you all. Amen."
      }]
    }, {
      heading: "God is a God of war",
      passages: [{
        passage: "Exodus 15:3",
        text: "The Lord is a man of war; the Lord is his name."
      }, {
        passage: "Joel 3:9-10",
        text: "Proclaim this among the nations: Consecrate for war; stir up the mighty men. Let all the men of war draw near; let them come up. Beat your plowshares into swords, and your pruning hooks into spears; let the weak say, \"I am a warrior.\""
      }]
    }]
  }, {
    bookVerses: "20:4-5",
    question: "Is it a sin to make graven images?",
    quickAnswer: "<p>The types of graven, or \"carved,\" images that are sinful to make are ones that are made to be worshipped. The golden cherubin were not made to be worshipped, so they are not \"images.\"</p>",
    fullPost: "/answers/is-it-sin-make-graven-images",
    allPassages: [{
      heading: "Should not make graven images",
      passages: [{
        passage: "Exodus 20:4-5",
        text: "4 \u201CYou shall not make for yourself a carved image, or any likeness of anything that is in heaven above, or that is in the earth beneath, or that is in the water under the earth. 5 You shall not bow down to them or serve them, for I the Lord your God am a jealous God, visiting the iniquity of the fathers on the children to the third and the fourth generation of those who hate me."
      }, {
        passage: "Leviticus 26:1",
        text: "\"You shall not make idols for yourselves or erect an image or pillar, and you shall not set up a figured stone in your land to bow down to it, for I am the Lord your God.\""
      }, {
        passage: "Deuteronomy 5:8",
        text: "\"You shall not make for yourself a carved image, or any likeness of anything that is in heaven above, or that is on the earth beneath, or that is in the water under the earth.\""
      }, {
        passage: "Deuteronomy 27:15",
        text: "\"\u2018Cursed be the man who makes a carved or cast metal image, an abomination to the Lord, a thing made by the hands of a craftsman, and sets it up in secret.\u2019 And all the people shall answer and say, \u2018Amen.\u2019\""
      }]
    }, {
      heading: "Make graven images",
      passages: [{
        passage: "Exodus 25:18",
        text: "And you shall make two cherubim of gold; of hammered work shall you make them, on the two ends of the mercy seat."
      }, {
        passage: "Exodus 37:7-8",
        text: "7 And he made two cherubim of gold. He made them of hammered work on the two ends of the mercy seat, 8 one cherub on the one end, and one cherub on the other end. Of one piece with the mercy seat he made the cherubim on its two ends."
      }]
    }]
  }, {
    bookVerses: "20:5",
    question: "Do sons bear the sins of their fathers?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "20:8",
    question: "Do we still need to keep the Sabbath?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "20:12",
    question: "Should we call anyone \"father\" besides God?",
    quickAnswer: "<p>We should not attribute to anyone authority that only belongs to God. There is a difference between calling our earthly parent \"father\" and giving excessive reverence to a spiritual leader.</p>",
    fullPost: "/answers/should-we-call-anyone-father-besides-god",
    allPassages: [{
      heading: "Call someone \"father\"",
      passages: [{
        passage: "Exodus 20:12",
        text: "\"Honor your father and your mother, that your days may be long in the land that the Lord your God is giving you.\""
      }]
    }, {
      heading: "Call no one \"father\"",
      passages: [{
        passage: "Matthew 23:8-10",
        text: "8 But you are not to be called rabbi, for you have one teacher, and you are all brothers. 9 And call no man your father on earth, for you have one Father, who is in heaven. 10 Neither be called instructors, for you have one instructor, the Christ."
      }]
    }]
  }, {
    bookVerses: "20:24",
    question: "Did God speak about sacrifices at the Exodus?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:20-21",
    question: "Was it wrong for slaves to be property in the Old Testament?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "23:12",
    see: ["exodus", "20:8"]
  }, {
    bookVerses: "24:9-11",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "25:18",
    see: ["exodus", "20:4-5"]
  }, {
    bookVerses: "31:15",
    see: ["exodus", "20:8"]
  }, {
    bookVerses: "32:14",
    see: ["genesis", "6:6-7"]
  }, {
    bookVerses: "33:20",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "34:6-7",
    see: ["exodus", "20:5"]
  }, {
    bookVerses: "37:7-8",
    see: ["exodus", "20:4-5"]
  }]
};
/* harmony default export */ var contradictions_exodus = (exodus);
// CONCATENATED MODULE: ./constants/contradictions/leviticus-numbers.js
var leviticus = {
  book: "Leviticus",
  answers: [{
    bookVerses: "11:5-6",
    question: "Do the badger and the rabbit chew the cud?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "11:13=19",
    question: "Is the bat a bird?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "25:44",
    question: "Was it wrong for God to give laws about buying slaves?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "26:1",
    see: ["exodus", "20:4-5"]
  }, {
    bookVerses: "26:2",
    see: ["exodus", "20:8"]
  }]
};
var leviticus_numbers_numbers = {
  book: "Numbers",
  answers: [{
    bookVerses: "12:6-8",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "15:32",
    question: "Was it wrong for a man to be killed for gathering sticks on the Sabbath?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "23:19",
    question: "If God is not a man, can Jesus be God?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "31:15-18",
    question: "Was it immoral for the Israelites to destroy all the people, including women and children, in the cities they captured?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "31:17-18",
    question: "Was it immoral for God to leave only the virgins alive in Numbers 31:17-18?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};

// CONCATENATED MODULE: ./constants/contradictions/deuteronomy.js
var deuteronomy = {
  book: "Deuteronomy",
  answers: [{
    bookVerses: "2:32-33",
    see: ["numbers", "31:15-18"]
  }, {
    bookVerses: "5:8",
    see: ["exodus", "20:4-5"]
  }, {
    bookVerses: "5:9",
    see: ["exodus", "20:5"]
  }, {
    bookVerses: "5:12",
    see: ["exodus", "20:8"]
  }, {
    bookVerses: "6:4",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "17:1",
    question: "Why did God only accept animals without a blemish for sacrifices?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:18-21",
    question: "Was it immoral for God to command the stoning of a rebellious son?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:5",
    question: "Is it wrong for a man to wear women's clothing, and vice versa?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:13-21",
    question: "Was it immoral for God to command the stoning of a woman who was not a virgin?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "24:16",
    see: ["exodus", "20:5"]
  }, {
    bookVerses: "27:15",
    see: ["exodus", "20:4-5"]
  }]
};
/* harmony default export */ var contradictions_deuteronomy = (deuteronomy);
// CONCATENATED MODULE: ./constants/contradictions/judges-2-samuel.js
var judges = {
  book: "Judges",
  answers: [{
    bookVerses: "1:19",
    question: "Was God not able to drive out the inhabitants of the valley in Judges 1:19?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:10",
    question: "Was it wrong for the Israelites to kill the people of Gilead?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var samuel1 = {
  book: "1 Samuel",
  answers: [{
    bookVerses: "15:2-3",
    see: ["numbers", "31:15-18"]
  }, {
    bookVerses: "16:19-23",
    question: "Did Saul know who David was?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "17:50",
    question: "Who killed Goliath, David or Elhanan?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "17:55-58",
    see: ["1 samuel", "16:19-23"]
  }, {
    bookVerses: "31:4",
    question: "Who killed Saul, Saul or the Amalekite?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var samuel2 = {
  book: "2 Samuel",
  answers: [{
    bookVerses: "1:8-10",
    see: ["1 samuel", "31:4"]
  }, {
    bookVerses: "6:23",
    question: "Did Michal have any children?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:4",
    question: "How many horsemen did David capture, 1,700 or 7,000?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "10:18",
    question: "How many charioteers were killed, 700 or 7,000?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:8",
    see: ["2 samuel", "6:23"]
  }, {
    bookVerses: "21:19",
    see: ["1 samuel", "17:50"]
  }, {
    bookVerses: "24:1",
    question: "Who incited David to number Israel, God or Satan?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "24:9",
    question: "How many fighting men were there in Israel and Judah?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "24:13",
    question: "How many years of famine were threatened to David, seven or three?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};

// CONCATENATED MODULE: ./constants/contradictions/1-2-kings.js
var kings1 = {
  book: "1 Kings",
  answers: [{
    bookVerses: "4:26",
    question: "How many stalls of horses did Solomon have, 4,000 or 40,000?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:16",
    question: "How many supervisors did Solomon have, 3,300 or 3,600?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "7:26",
    question: "How many baths could be held, 2,000 or 3,000?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:22",
    question: "Was it wrong for God to send a lying spirit?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var kings2 = {
  book: "2 Kings",
  answers: [{
    bookVerses: "2:11",
    see: ["genesis", "5:24"]
  }, {
    bookVerses: "2:23-24",
    question: "Was it immoral for God to kill 42 lads for saying Elisha was bald?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:26",
    question: "How old was Ahaziah when he began to rule?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "24:8",
    question: "How old was Jehoiachin when he became king?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "24:8 (2)",
    question: "How long did Jehoiachin rule over Jerusalem?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};

// CONCATENATED MODULE: ./constants/contradictions/job-song-solomon.js
var job = {
  book: "Job",
  answers: [{
    bookVerses: "1:1",
    see: ["genesis", "7:1"]
  }, {
    bookVerses: "1:1,12",
    question: "If Job was blameless, why did God allow Satan to afflict him?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "1:21",
    question: "Do Job 1:21 and Ecclesiastes 5:15 teach reincarnation?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var psalms = {
  book: "Psalms",
  answers: [{
    bookVerses: "5:5",
    question: "Does God love or hate people?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "11:5",
    see: ["psalms", "5:5"]
  }, {
    bookVerses: "14:1",
    question: "Can we call someone a fool?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "14:3",
    see: ["genesis", "7:1"]
  }, {
    bookVerses: "104:5",
    question: "Does the earth abide forever?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "137:9",
    question: "Was it wrong for the psalmist to talk about killing children?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "145:9",
    question: "Is God good or bad to people?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var proverbs = {
  book: "Proverbs",
  answers: [{
    bookVerses: "4:7",
    question: "Should we acquire wisdom?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "6:16-19",
    see: ["psalms", "5:5"]
  }]
};
var ecclesiastes = {
  book: "Ecclesiastes",
  answers: [{
    bookVerses: "1:4",
    see: ["psalms", "104:5"]
  }, {
    bookVerses: "5:15",
    see: ["job", "1:21"]
  }]
};
var songOfSolomon = {
  book: "Song of Solomon",
  answers: [{
    bookVerses: "8:8",
    question: "Does Song of Solomon 8:8 promote child marriage?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};

// CONCATENATED MODULE: ./constants/contradictions/isaiah.js
var isaiah = {
  book: "Isaiah",
  answers: [{
    bookVerses: "2:4",
    see: ["exodus", "15:3"]
  }, {
    bookVerses: "7:14",
    question: "Is Isaiah 7:14 not a prophecy because the Hebrew translation is maiden, not virgin?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "13:15-16",
    question: "Was it wrong for the Bible to say that houses will be plundered and wives ravished?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "43:10",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "44:6",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "44:8",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "44:24",
    question: "Is God or Jesus the creator of all things?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "45:7",
    see: ["psalms", "145:9"]
  }, {
    bookVerses: "45:7",
    question: "Does God create evil?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "65:17",
    see: ["psalms", "104:5"]
  }]
};
/* harmony default export */ var contradictions_isaiah = (isaiah);
// CONCATENATED MODULE: ./constants/contradictions/jeremiah-malachi.js
var jeremiah = {
  book: "Jeremiah",
  answers: [{
    bookVerses: "7:22",
    see: ["exodus", "20:24"]
  }, {
    bookVerses: "18:11",
    see: ["psalms", "145:9"]
  }, {
    bookVerses: "22:28-30",
    question: "Did Coniah have children",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "33:27",
    see: ["judges", "1:19"]
  }]
};
var lamentations = {
  book: "Lamentations",
  answers: [{
    bookVerses: "3:38",
    see: ["psalms", "145:9"]
  }]
};
var ezekiel = {
  book: "Ezekiel",
  answers: [{
    bookVerses: "18:20",
    see: ["exodus", "20:5"]
  }, {
    bookVerses: "20:25-26",
    see: ["psalms", "145:9"]
  }]
};
var hosea = {
  book: "Hosea",
  answers: [{
    bookVerses: "9:15",
    see: ["psalms", "5:5"]
  }]
};
var joel = {
  book: "Joel",
  answers: [{
    bookVerses: "3:9-10",
    see: ["exodus", "15:3"]
  }]
};
var jonah = {
  book: "Jonah",
  answers: [{
    bookVerses: "3:4, 10",
    question: "Did God destroy Nineveh?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "3:10",
    see: ["genesis", "6:6-7"]
  }]
};
var zechariah = {
  book: "Zechariah",
  answers: [{
    bookVerses: "9:9",
    question: "Were one or two animals brought to Jesus?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var malachi = {
  book: "Malachi",
  answers: [{
    bookVerses: "3:6",
    see: ["genesis", "6:6-7"]
  }]
};

// CONCATENATED MODULE: ./constants/contradictions/matthew.js
var matthew = {
  book: "Matthew",
  answers: [{
    bookVerses: "1:16",
    question: "Are Matthew and Luke's genealogies contradictory?",
    quickAnswer: "<p>Matthew and Luke clearly have different objectives with their genealogies, so we should expect differences. Here are two possible explanations for the differences:</p>\n \n      <ol>\n         <li>Luke's genealogy may be tracing Jesus' lineage through Mary</li>\n         <li>Matthew's may be a biological genealogy, while Luke's may be a legal genealogy</li>\n       </ol>",
    fullPost: "/answers/matthew-luke-genealogy",
    allPassages: [{
      heading: "Matthew's genealogy",
      passages: [{
        passage: "Matthew 1:6",
        text: "and <strong>Jacob the father of Joseph</strong> the husband of Mary, of whom Jesus was born, who is called Christ."
      }, {
        passage: "Matthew 1:16",
        text: "and <strong>Jacob the father of Joseph</strong> the husband of Mary, of whom Jesus was born, who is called Christ."
      }]
    }, {
      heading: "Luke's genealogy",
      passages: [{
        passage: "Luke 3:23",
        text: "Jesus, when he began his ministry, was about thirty years of age, being the son (as was supposed) of <strong>Joseph, the son of Heli</strong>..."
      }, {
        passage: "Luke 3:31",
        text: "the son of Melea, the son of Menna, the son of Mattatha, the son of <strong>Nathan, the son of David</strong>..."
      }]
    }]
  }, {
    bookVerses: "2:23",
    question: "Did the Old Testament prophesy that Jesus would come from Nazareth?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "4:5-8",
    question: "Where did the devil take Jesus first?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "4:18-19",
    question: "Where did Jesus first meet Simon Peter and Andrew?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:16",
    question: "Should we let our good works be seen?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:17",
    question: "Did Jesus abolish the Law?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:22",
    question: "Can we call someone a fool?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "6:1-4",
    see: ["matthew", "5:16"]
  }, {
    bookVerses: "6:9-13",
    question: "Who did Jesus say the Lord's Prayer to?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:5-13",
    question: "Who brought the Centurion's request to Jesus?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:28",
    question: "How many men came out to meet Jesus in Gerasene?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:28 (2)",
    question: "Did Jesus meet the demoniacs in Gerasene or Gaderene?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "9:9",
    question: "Was the tax collector named Matthew or Levi?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "9:18",
    question: "Was Jairus's daughter alive or dead when he came to Jesus?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "10:2-4",
    question: "Why are the lists of disciples different?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "10:9-10",
    question: "Did Jesus tell His disciples to take a staff?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "10:34",
    question: "Did Jesus come to bring peace?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "11:2-3",
    question: "When did John find out that Jesus was the Messiah?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "11:13-14",
    question: "Was John the Baptist Elijah?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "12:31",
    question: "Is there a sin that cannot be forgiven?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "12:40",
    question: "How long was Jesus buried in the tomb?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "13:31",
    question: "Is the mustard seed the smallest of all seeds?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "17:1",
    question: "After how many days did Jesus take the three up the mountain?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "19:16-21",
    question: "Are we saved by grace or works?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "20:20-21",
    question: "Who requested to sit beside Jesus in His kingdom?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "20:29-30",
    question: "How many blind men did Jesus meet when he left Jericho?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:2-7",
    see: ["zechariah", "9:9"]
  }, {
    bookVerses: "21:12",
    question: "Did Jesus cleanse the Temple once or twice?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "21:19",
    question: "Did the tree that Jesus cursed wither immediately or overnight?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "23:3-5",
    see: ["matthew", "5:16"]
  }, {
    bookVerses: "23:9",
    see: ["exodus", "20:12"]
  }, {
    bookVerses: "23:17",
    see: ["psalms", "14:1"]
  }, {
    bookVerses: "24:36",
    question: "If Jesus and the Holy Spirit are God, then why do they not know the hour of Jesus' return?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "25:31-46",
    see: ["matthew", "19:16-21"]
  }, {
    bookVerses: "26:34-35",
    question: "Did the rooster crow once or twice before Peter's third denial?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "26:74-75",
    see: ["matthew", "26:34-35"]
  }, {
    bookVerses: "26:47",
    question: "Who arrested Jesus?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "26:57",
    question: "Who did Jesus see first when He was arrested, Annas or Caiaphas?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:3-8",
    question: "How did Judas die, by hanging or falling?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:7",
    question: "Who bought the Potter's Field, Judas or the Jews?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:28, 31",
    question: "Was Jesus' robe scarlet or purple?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:31-32",
    question: "Who carried Jesus' cross, Jesus or Simon of Cyrene?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:34",
    question: "Was the vinegar given to Jesus mingled with gall or myrrh?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:37",
    question: "What was written on the sign of the cross?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:46",
    question: "What were Jesus' last words on the cross?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "27:55-56",
    question: "Were the women close or far from the cross?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "28:1",
    see: ["matthew", "12:40"]
  }, {
    bookVerses: "28:1-2",
    question: "When was the stone rolled away from the tomb? Did an earthquake occur?",
    quickAnswer: "<p>The stone was rolled away before the women arrived at the tomb. \"had occurred\" may be a better translation of the passage, and the purpose of the passage would be to explain the lack of guards at the tomb when the women arrived.</p>",
    fullPost: "/answers/when-stone-rolled-away",
    allPassages: [{
      heading: "Stone rolled away after the women arrived?",
      passages: [{
        passage: "Matthew 28:1-5 NASB",
        text: "Now after the Sabbath, as it began to dawn toward the first day of the week, Mary Magdalene and the other Mary came to look at the grave. And behold, <strong>a severe earthquake had occurred, for an angel of the Lord descended from heaven and came and rolled away the stone and sat upon it</strong>. And his appearance was like lightning, and his clothing as white as snow. The guards shook for fear of him and became like dead men. The angel said to the women, \"Do not be afraid; for I know that you are looking for Jesus who has been crucified.\""
      }]
    }, {
      heading: "Stone rolled away before the women arrived",
      passages: [{
        passage: "Mark 16:3-4",
        text: "And they were saying to one another, \"Who will roll away the stone for us from the entrance of the tomb?\" And looking up, <strong>they saw that the stone had been rolled back</strong>&mdash;it was very large."
      }, {
        passage: "Luke 24:2",
        text: "And they found the stone rolled away from the tomb</strong>..."
      }, {
        passage: "John 20:1",
        text: "Now on the first day of the week Mary Magdalene came to the tomb early, while it was still dark, and <strong>saw that the stone had been taken away from the tomb</strong>."
      }]
    }]
  }, {
    bookVerses: "28:2-5",
    question: "Were the angels sitting or standing in the tomb?",
    quickAnswer: "<p>It would be reasonable to believe that the angels were sitting when the women entered the tomb, and then stood up after that. The angel in Matthew was sitting on the stone before the women arrived at the tomb, and had moved into the tomb by the time the women arrived at the tomb.</p>",
    fullPost: "/answers/were-angels-sitting-standing",
    allPassages: [{
      heading: "Sitting on the stone",
      passages: [{
        passage: "Matthew 28:2-5",
        text: "And behold, there was a great earthquake, for an angel of the Lord descended from heaven and came and rolled back the stone <strong>and sat on it</strong>. His appearance was like lightning, and his clothing white as snow. And for fear of him the guards trembled and became like dead men. But the angel said to the women, \"Do not be afraid, for I know that you seek Jesus who was crucified.\""
      }]
    }, {
      heading: "Sitting in the tomb",
      passages: [{
        passage: "Mark 16:5-6",
        text: "And entering the tomb, they saw a young man sitting on the right side, dressed in a white robe, and they were alarmed. And he said to them, \"Do not be alarmed. You seek Jesus of Nazareth, who was crucified. He has risen; he is not here. See the place where they laid him.\""
      }, {
        passage: "John 20:12-13",
        text: "And she saw two angels in white, <strong>sitting where the body of Jesus had lain, one at the head and one at the feet</strong>. They said to her, \"Woman, why are you weeping?\" She said to them, \"They have taken away my Lord, and I do not know where they have laid him.\""
      }]
    }, {
      heading: "Standing in the tomb",
      passages: [{
        passage: "Luke 24:2-6",
        text: "And they found the stone rolled away from the tomb, but when <strong>they went in</strong> they did not find the body of the Lord Jesus. While they were perplexed about this, behold, <strong>two men stood by them</strong> in dazzling apparel. And as they were frightened and bowed their faces to the ground, the men said to them, \u201CWhy do you seek the living among the dead?"
      }]
    }]
  }, {
    bookVerses: "28:2",
    question: "How many angels were at the tomb? Were they angels or men?",
    quickAnswer: "There were two angels who looked like men. Matthew does not say that there was only one angel, and Mark does not say that there was only one man. Angels oftentime appeared in the form of men (Genesis 18:1\u20132; Daniel 9:21).",
    fullPost: "/answers/how-many-angels-tomb",
    allPassages: [{
      heading: "One angel",
      passages: [{
        passage: "Matthew 28:2-5",
        text: "And behold, there was a great earthquake, for <strong>an angel</strong> of the Lord descended from heaven and came and rolled back the stone and sat on it. <strong>His</strong> appearance was like lightning, and <strong>his</strong> clothing white as snow. And for fear of <strong>him</strong> the guards trembled and became like dead men. But <strong>the angel</strong> said to the women, \"Do not be afraid, for I know that you seek Jesus who was crucified.\""
      }]
    }, {
      heading: "One man",
      passages: [{
        passage: "Mark 16:5-6",
        text: "And entering the tomb, they saw <strong>a young man</strong> sitting on the right side, dressed in a white robe, and they were alarmed. And <strong>he</strong> said to them, \"Do not be alarmed. You seek Jesus of Nazareth, who was crucified. He has risen; he is not here. See the place where they laid him.\""
      }]
    }, {
      heading: "Luke 24:4-6",
      passages: [{
        passage: "Two men",
        text: "While they were perplexed about this, behold, <strong>two men</strong> stood by them in dazzling apparel. And as they were frightened and bowed their faces to the ground, <strong>the men</strong> said to them, \u201CWhy do you seek the living among the dead?"
      }]
    }, {
      heading: "Two angels",
      passages: [{
        passage: "John 20:12-13",
        text: "And she saw <strong>two angels</strong> in white, sitting where the body of Jesus had lain, one at the head and one at the feet. <strong>They</strong> said to her, \"Woman, why are you weeping?\" She said to <strong>them</strong>, \"They have taken away my Lord, and I do not know where they have laid him.\""
      }]
    }]
  }, {
    bookVerses: "28:8",
    question: "Did the women tell anyone what happened at the tomb?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "28:9",
    question: "Who did Jesus appear to first after the resurrection?",
    quickAnswer: "<p>Here is one possible order for Jesus' appearances:</p>\n  \n      <ol>\n        <li>Jesus first appeared to Mary Magdelene alone at the tomb.</li>\n        <li>Jesus then appeared to the rest of the women when they were traveling back to Bethany.</li>\n        <li>Or, vice versa</li>\n      </ol>",
    fullPost: "/answers/jesus-appear-first",
    allPassages: [{
      heading: "Jesus appeared first to the group of women",
      passages: [{
        passage: "Matthew 28:8-9",
        text: "So <strong>they</strong> [the women] departed quickly from the tomb with fear and great joy, and ran to tell his disciples. And behold, <strong>Jesus met them</strong> and said, \"Greetings!\" And they came up and took hold of his feet and worshiped him."
      }]
    }, {
      heading: "Jesus appeared first to Mary alone",
      passages: [{
        passage: "John 20:2-14",
        text: "<p>So she [Mary Magdelene] ran and went to Simon Peter and the other disciple, the one whom Jesus loved, and said to them, \"They have taken the Lord out of the tomb, and we do not know where they have laid him.\" So Peter went out with the other disciple, and they were going toward the tomb... Then the disciples went back to their homes.</p>\n\n              <p>But Mary stood weeping outside the tomb, and as she wept she stooped to look into the tomb. And she saw two angels in white, sitting where the body of Jesus had lain, one at the head and one at the feet. They said to her, \"Woman, why are you weeping?\" She said to them, \"They have taken away my Lord, and I do not know where they have laid him.\" Having said this, <strong>she turned around and saw Jesus standing</strong>, but she did not know that it was Jesus.</p>"
      }]
    }]
  }, {
    bookVerses: "28:6-7",
    question: "What did the angels tell Mary at the empty tomb?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ var contradictions_matthew = (matthew);
// CONCATENATED MODULE: ./constants/contradictions/mark.js
var mark = {
  book: "Mark",
  answers: [{
    bookVerses: "1:7-13",
    question: "What did Jesus do after being baptized by John the Baptist?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "2:14",
    see: ["matthew", "9:9"]
  }, {
    bookVerses: "3:13-19",
    see: ["matthew", "10:2-4"]
  }, {
    bookVerses: "3:29",
    see: ["matthew", "12:31"]
  }, {
    bookVerses: "4:30",
    see: ["matthew", "13:31"]
  }, {
    bookVerses: "5:1-2",
    see: ["matthew", "8:28"]
  }, {
    bookVerses: "5:1-2 (2)",
    see: ["matthew", "8:28 (2)"]
  }, {
    bookVerses: "5:23",
    see: ["matthew", "9:18"]
  }, {
    bookVerses: "6:8",
    see: ["matthew", "10:9-10"]
  }, {
    bookVerses: "9:2",
    see: ["matthew", "17:1"]
  }, {
    bookVerses: "9:50",
    see: ["matthew", "10:34"]
  }, {
    bookVerses: "11:2-7",
    see: ["zechariah", "9:9"]
  }, {
    bookVerses: "10:35-37",
    see: ["matthew", "20:20-21"]
  }, {
    bookVerses: "10:46-47",
    see: ["matthew", "20:29-30"]
  }, {
    bookVerses: "11:11-12, 15-16",
    question: "On which day did Jesus cleanse the Temple?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "11:14, 20",
    see: ["matthew", "21:19"]
  }, {
    bookVerses: "13:32",
    see: ["matthew", "24:36"]
  }, {
    bookVerses: "14:30",
    see: ["matthew", "26:34-35"]
  }, {
    bookVerses: "14:43",
    see: ["matthew", "26:47"]
  }, {
    bookVerses: "15:16, 20",
    see: ["matthew", "27:28, 31"]
  }, {
    bookVerses: "15:20-21",
    see: ["matthew", "27:31-32"]
  }, {
    bookVerses: "15:23",
    see: ["matthew", "27:34"]
  }, {
    bookVerses: "15:25",
    question: "At what hour was Jesus crucified?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "15:26",
    see: ["matthew", "27:37"]
  }, {
    bookVerses: "15:34",
    see: ["matthew", "27:46"]
  }, {
    bookVerses: "15:40",
    see: ["matthew", "27:55-56"]
  }, {
    bookVerses: "16:1-4",
    see: ["matthew", "28:1-2"]
  }, {
    bookVerses: "16:2",
    see: ["matthew", "12:40"]
  }, {
    bookVerses: "16:5",
    see: ["matthew", "28:2"]
  }, {
    bookVerses: "16:5-6",
    see: ["matthew", "28:2-5"]
  }, {
    bookVerses: "16:6-7",
    see: ["matthew", "28:6-7"]
  }, {
    bookVerses: "16:8",
    see: ["matthew", "28:8"]
  }, {
    bookVerses: "16:9",
    see: ["matthew", "28:9"]
  }, {
    bookVerses: "16:9-20",
    question: "Is the ending of Mark part of the Bible?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ var contradictions_mark = (mark);
// CONCATENATED MODULE: ./constants/contradictions/luke.js
var luke = {
  book: "Luke",
  answers: [{
    bookVerses: "1:5-6",
    see: ["genesis", "7:1"]
  }, {
    bookVerses: "3:23",
    see: ["matthew", "1:16"]
  }, {
    bookVerses: "4:5-9",
    see: ["matthew", "4:5-8"]
  }, {
    bookVerses: "5:27",
    see: ["matthew", "9:9"]
  }, {
    bookVerses: "6:12-16",
    see: ["matthew", "10:2-4"]
  }, {
    bookVerses: "7:2-10",
    see: ["matthew", "8:5-13"]
  }, {
    bookVerses: "7:18-22",
    see: ["matthew", "11:2-3"]
  }, {
    bookVerses: "8:26-27",
    see: ["matthew", "8:28"]
  }, {
    bookVerses: "8:26-27",
    see: ["matthew", "8:28 (2)"]
  }, {
    bookVerses: "9:3",
    see: ["matthew", "10:9-10"]
  }, {
    bookVerses: "9:28",
    see: ["matthew", "17:1"]
  }, {
    bookVerses: "11:1-4",
    see: ["matthew", "6:9-13"]
  }, {
    bookVerses: "13:19",
    see: ["matthew", "13:31"]
  }, {
    bookVerses: "14:26",
    question: "Should we hate others?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "18:35",
    see: ["matthew", "20:29-30"]
  }, {
    bookVerses: "19:30",
    see: ["zechariah", "9:9"]
  }, {
    bookVerses: "19:45",
    question: "Did Jesus cleanse the Temple on the first or second day?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "22:34",
    see: ["matthew", "26:34-35"]
  }, {
    bookVerses: "22:36",
    see: ["matthew", "10:34"]
  }, {
    bookVerses: "23:26",
    see: ["matthew", "27:31-32"]
  }, {
    bookVerses: "23:38",
    see: ["matthew", "27:37"]
  }, {
    bookVerses: "23:46",
    see: ["matthew", "27:46"]
  }, {
    bookVerses: "22:47",
    see: ["matthew", "26:47"]
  }, {
    bookVerses: "22:60-62",
    see: ["matthew", "26:34-35"]
  }, {
    bookVerses: "23:49",
    see: ["matthew", "27:55-56"]
  }, {
    bookVerses: "24:1",
    see: ["matthew", "12:40"]
  }, {
    bookVerses: "24:1-2",
    see: ["matthew", "28:1-2"]
  }, {
    bookVerses: "24:2-6",
    see: ["matthew", "28:2-5"]
  }, {
    bookVerses: "24:4",
    see: ["matthew", "28:2"]
  }, {
    bookVerses: "24:5-7",
    see: ["matthew", "28:6-7"]
  }, {
    bookVerses: "24:9",
    see: ["matthew", "28:8"]
  }, {
    bookVerses: "24:15-18",
    see: ["matthew", "28:9"]
  }]
};
/* harmony default export */ var contradictions_luke = (luke);
// CONCATENATED MODULE: ./constants/contradictions/john.js
var john = {
  book: "John",
  answers: [{
    bookVerses: "1:18",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "1:19-21",
    see: ["matthew", "11:13-14"]
  }, {
    bookVerses: "1:27-40",
    see: ["mark", "1:7-13"]
  }, {
    bookVerses: "1:29-34",
    see: ["matthew", "11:2-3"]
  }, {
    bookVerses: "1:42-43",
    see: ["matthew", "4:18-19"]
  }, {
    bookVerses: "3:13",
    see: ["genesis", "5:24"]
  }, {
    bookVerses: "3:16",
    see: ["psalms", "5:5"]
  }, {
    bookVerses: "5:31",
    question: "Was Jesus' witness of Himself true?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:37",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "6:46",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "7:8, 10",
    question: "Did Jesus lie about going up to the feast?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "8:14",
    see: ["john", "5:31"]
  }, {
    bookVerses: "13:38",
    see: ["matthew", "26:34-35"]
  }, {
    bookVerses: "14:27",
    see: ["matthew", "10:34"]
  }, {
    bookVerses: "16:33",
    see: ["matthew", "10:34"]
  }, {
    bookVerses: "17:3",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "18:12",
    see: ["matthew", "26:47"]
  }, {
    bookVerses: "18:19, 24",
    see: ["matthew", "26:57"]
  }, {
    bookVerses: "18:20",
    question: "Did Jesus lie about only speaking in synagogues and the temple?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "18:20",
    question: "Did Jesus never say anything in secret?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "19:2, 5",
    see: ["matthew", "27:28, 31"]
  }, {
    bookVerses: "19:14-16",
    see: ["mark", "15:25"]
  }, {
    bookVerses: "19:17",
    see: ["matthew", "27:31-32"]
  }, {
    bookVerses: "19:19-20",
    see: ["matthew", "27:37"]
  }, {
    bookVerses: "19:25",
    see: ["matthew", "27:55-56"]
  }, {
    bookVerses: "19:30",
    see: ["matthew", "27:46"]
  }, {
    bookVerses: "20:1",
    see: ["matthew", "28:1-2"]
  }, {
    bookVerses: "20:1",
    see: ["matthew", "12:40"]
  }, {
    bookVerses: "20:1-2, 12",
    see: ["matthew", "28:2"]
  }, {
    bookVerses: "20:12-13",
    see: ["matthew", "28:2-5"]
  }, {
    bookVerses: "20:13",
    see: ["matthew", "28:6-7"]
  }, {
    bookVerses: "20:14",
    see: ["matthew", "28:9"]
  }, {
    bookVerses: "20:18",
    see: ["matthew", "28:8"]
  }]
};
/* harmony default export */ var contradictions_john = (john);
// CONCATENATED MODULE: ./constants/contradictions/acts.js
var acts = {
  book: "Acts",
  answers: [{
    bookVerses: "1:13-14",
    see: ["matthew", "10:2-4"]
  }, {
    bookVerses: "1:16-19",
    see: ["matthew", "27:3-8"]
  }, {
    bookVerses: "1:18",
    see: ["matthew", "27:7"]
  }, {
    bookVerses: "2:38",
    question: "Are we saved by faith or by baptism?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "5:29",
    question: "Should we obey God's law or human law?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "7:2",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "9:3-4",
    question: "When Paul saw the light, did everyone fall to the ground?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "9:7",
    question: "Did the men with Pal hear the voice?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "10:36",
    see: ["matthew", "10:34"]
  }, {
    bookVerses: "13:39",
    see: ["matthew", "12:31"]
  }, {
    bookVerses: "22:9",
    see: ["acts", "9:7"]
  }, {
    bookVerses: "22:16",
    see: ["acts", "2:38"]
  }, {
    bookVerses: "26:13-14",
    see: ["acts", "9:3-4"]
  }]
};
/* harmony default export */ var contradictions_acts = (acts);
// CONCATENATED MODULE: ./constants/contradictions/romans.js
var romans = {
  book: "Romans",
  answers: [{
    bookVerses: "3:10",
    see: ["genesis", "7:1"]
  }, {
    bookVerses: "3:20, 28",
    see: ["matthew", "19:16-21"]
  }, {
    bookVerses: "5:1",
    see: ["acts", "2:38"]
  }, {
    bookVerses: "5:8",
    see: ["psalms", "5:5"]
  }, {
    bookVerses: "9:17",
    question: "Was it wrong for God to harden Pharoah's heart?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "13:1",
    see: ["acts", "5:29"]
  }, {
    bookVerses: "15:33",
    see: ["exodus", "15:3"]
  }, {
    bookVerses: "14:5",
    see: ["exodus", "20:8"]
  }]
};
/* harmony default export */ var contradictions_romans = (romans);
// CONCATENATED MODULE: ./constants/contradictions/1-2-corinthians.js
var corinthians1 = {
  book: "1 Corinthians",
  answers: [{
    bookVerses: "1:19",
    see: ["proverbs", "4:7"]
  }, {
    bookVerses: "8:5",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "14:33",
    see: ["genesis", "11:8-9"]
  }, {
    bookVerses: "15:3-5",
    see: ["matthew", "28:9"]
  }, {
    bookVerses: "15:3-5",
    question: "Did Paul receive the gospel from man?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "15:22",
    see: ["exodus", "20:5"]
  }, {
    bookVerses: "15:29",
    question: "What is baptism for the dead?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var corinthians2 = {
  book: "2 Corinthians",
  answers: [{
    bookVerses: "5:8",
    question: "Is there a waiting period between dying and going to heaven?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};

// CONCATENATED MODULE: ./constants/contradictions/galatians-titus.js
var galatians = {
  book: "Galatians",
  answers: [{
    bookVerses: "1:11-12",
    see: ["1 corinthians", "15:3-5"]
  }, {
    bookVerses: "2:16",
    see: ["matthew", "19:16-21"]
  }, {
    bookVerses: "4:22",
    see: ["genesis", "22:2"]
  }, {
    bookVerses: "6:2, 5",
    question: "Do we bear our own burdens?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var ephesians = {
  book: "Ephesians",
  answers: [{
    bookVerses: "2:8-9",
    see: ["matthew", "19:16-21"]
  }, {
    bookVerses: "2:8-9",
    see: ["acts", "2:38"]
  }, {
    bookVerses: "2:14-15",
    see: ["matthew", "5:17"]
  }]
};
var colossians = {
  book: "Colossians",
  answers: [{
    bookVerses: "1:15-17",
    see: ["isaiah", "44:24"]
  }, {
    bookVerses: "2:16",
    see: ["exodus", "20:8"]
  }]
};
var thessalonians1 = {
  book: "1 Thessalonians",
  answers: [{
    bookVerses: "4:16-17",
    see: ["2 corinthians", "5:8"]
  }]
};
var thessalonians2 = {
  book: "2 Thessalonians",
  answers: [{
    bookVerses: "2:11",
    question: "Was it wrong for God to send a deluding influence on people so they would not be saved?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var timothy1 = {
  book: "1 Timothy",
  answers: [{
    bookVerses: "6:15-16",
    see: ["genesis", "17:1"]
  }]
};
var titus = {
  book: "Titus",
  answers: [{
    bookVerses: "1:2",
    see: ["1 kings", "22:22"]
  }, {
    bookVerses: "2:13-14",
    see: ["matthew", "12:31"]
  }]
};

// CONCATENATED MODULE: ./constants/contradictions/hebrews-jude.js
var hebrews = {
  book: "Hebrews",
  answers: [{
    bookVerses: "11:5",
    see: ["genesis", "5:24"]
  }, {
    bookVerses: "11:17",
    see: ["genesis", "22:2"]
  }, {
    bookVerses: "11:21",
    see: ["genesis", "47:31"]
  }]
};
var james = {
  book: "James",
  answers: [{
    bookVerses: "1:13",
    see: ["genesis", "22:1"]
  }, {
    bookVerses: "2:24",
    see: ["matthew", "19:16-21"]
  }]
};
var peter1 = {
  book: "1 Peter",
  answers: [{
    bookVerses: "2:12",
    see: ["matthew", "5:16"]
  }, {
    bookVerses: "2:13",
    see: ["acts", "5:29"]
  }, {
    bookVerses: "2:16",
    see: ["matthew", "19:16-21"]
  }, {
    bookVerses: "3:21",
    see: ["acts", "2:38"]
  }]
};
var peter2 = {
  book: "2 Peter",
  answers: [{
    bookVerses: "3:10",
    see: ["psalms", "104:5"]
  }]
};
var john1 = {
  book: "1 John",
  answers: [{
    bookVerses: "1:9",
    see: ["matthew", "12:31"]
  }, {
    bookVerses: "3:9",
    question: "Can a true Christian sin?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "3:13",
    see: ["genesis", "5:24"]
  }, {
    bookVerses: "3:15",
    see: ["luke", "14:26"]
  }, {
    bookVerses: "4:7-8",
    see: ["psalms", "5:5"]
  }, {
    bookVerses: "5:7-8",
    see: ["genesis", "1:26"]
  }, {
    bookVerses: "5:18",
    see: ["1 john", "3:9"]
  }]
};
var jude = {
  book: "Jude",
  answers: [{
    bookVerses: "14",
    question: "Should the book of Enoch be in the Bible, since Jude quotes it?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};

// CONCATENATED MODULE: ./constants/contradictions/index.js


















var CONTRADICTIONS = [contradictions_genesis, contradictions_exodus, leviticus, leviticus_numbers_numbers, contradictions_deuteronomy, judges, samuel1, samuel2, kings1, kings2, job, psalms, proverbs, ecclesiastes, songOfSolomon, contradictions_isaiah, jeremiah, lamentations, ezekiel, hosea, joel, jonah, zechariah, malachi, contradictions_matthew, contradictions_mark, contradictions_luke, contradictions_john, contradictions_acts, contradictions_romans, corinthians1, corinthians2, galatians, ephesians, colossians, thessalonians1, thessalonians2, timothy1, titus, hebrews, james, peter1, peter2, john1, jude];
/* harmony default export */ var contradictions = (CONTRADICTIONS);
// EXTERNAL MODULE: ./components/Container.js
var Container = __webpack_require__(4);

// EXTERNAL MODULE: ./components/TitleSection.js + 1 modules
var TitleSection = __webpack_require__(13);

// EXTERNAL MODULE: ./components/ReadingContainer.js
var ReadingContainer = __webpack_require__(5);

// CONCATENATED MODULE: ./pages/contradictions.js


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }











function renderPassage(passage, index) {
  var text = Object(external_lodash_["isArray"])(passage.text) ? passage.text.map(function (paragraph, index1) {
    return external_react_default.a.createElement("div", {
      key: index1,
      className: "first",
      dangerouslySetInnerHTML: {
        __html: Object(writing["a" /* boldNumbers */])(paragraph)
      }
    });
  }) : external_react_default.a.createElement("div", {
    className: "first",
    dangerouslySetInnerHTML: {
      __html: Object(writing["a" /* boldNumbers */])(passage.text)
    }
  });
  return external_react_default.a.createElement("div", {
    key: index
  }, external_react_default.a.createElement("blockquote", {
    className: index === 0 ? "first" : ""
  }, external_react_default.a.createElement("strong", null, passage.passage), text));
}

function renderLink(_ref) {
  var index = _ref.index,
      book = _ref.book,
      bookVerses = _ref.bookVerses,
      count = _ref.count,
      question = _ref.question;
  return external_react_default.a.createElement("div", {
    key: index,
    style: {
      marginTop: 6
    }
  }, external_react_default.a.createElement("a", {
    href: "#".concat(book, "_").concat(bookVerses),
    id: "top_".concat(book, "_").concat(bookVerses),
    dangerouslySetInnerHTML: {
      __html: "".concat(count, ") ").concat(bookVerses, " - ").concat(question)
    }
  }));
}

function renderAnswer(_ref2) {
  var index = _ref2.index,
      book = _ref2.book,
      bookVerses = _ref2.bookVerses,
      foundBookVerses = _ref2.foundBookVerses,
      question = _ref2.question,
      allPassages = _ref2.allPassages,
      quickAnswer = _ref2.quickAnswer,
      fullPost = _ref2.fullPost,
      count = _ref2.count,
      hideDetails = _ref2.hideDetails,
      toggleDetail = _ref2.toggleDetail;
  return external_react_default.a.createElement("div", {
    key: index,
    style: {
      border: "3px solid rgba(0, 0, 0, .54)",
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0,
      marginTop: 20
    }
  }, external_react_default.a.createElement("a", {
    href: "#top",
    style: {
      display: "inline-block",
      marginTop: 20
    }
  }, external_react_default.a.createElement(fa_["FaChevronUp"], null), " Top"), external_react_default.a.createElement("a", {
    href: "#".concat(book),
    id: "".concat(book, "_").concat(bookVerses),
    style: {
      display: "inline-block",
      marginLeft: 20,
      marginTop: 20
    }
  }, external_react_default.a.createElement(fa_["FaChevronUp"], null), " ", book), external_react_default.a.createElement("h3", {
    className: "nomargin",
    dangerouslySetInnerHTML: {
      __html: "".concat(count, ") ").concat(bookVerses, " - ").concat(question)
    }
  }), foundBookVerses ? external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", {
    className: "first"
  }, "Same as", " ", external_react_default.a.createElement("strong", null, book, " ", foundBookVerses, " - ", question)), external_react_default.a.createElement("p", {
    className: "nomargin",
    onClick: toggleDetail,
    style: {
      color: "#039BE5",
      fontSize: 16,
      cursor: "pointer"
    }
  }, hideDetails ? "Show " : "Hide ", " answer")) : null, hideDetails ? null : external_react_default.a.createElement("div", null, external_react_default.a.createElement("h4", {
    className: "first"
  }, "Quick answer"), external_react_default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: quickAnswer
    }
  }), external_react_default.a.createElement("div", null, external_react_default.a.createElement("p", null, external_react_default.a.createElement("strong", null, "Full post:", " ", external_react_default.a.createElement("a", {
    href: fullPost,
    target: "_blank"
  }, question)))), external_react_default.a.createElement("h4", null, "Passages"), allPassages.map(function (passageGroup, index) {
    if (passageGroup.heading !== undefined) {
      return external_react_default.a.createElement("div", {
        key: index
      }, external_react_default.a.createElement("p", {
        className: index === 0 ? "first" : ""
      }, external_react_default.a.createElement("strong", null, passageGroup.heading)), passageGroup.passages.map(function (passage, index1) {
        return renderPassage(passage, index1);
      }));
    }

    return renderPassage(passageGroup, index);
  })));
}

var contradictions_BibleContradictions = function BibleContradictions() {
  var _useState = Object(external_react_["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      details = _useState2[0],
      setDetails = _useState2[1];

  var linkCount = 0;
  var answerCount = 0;
  var image_url = "https://i.imgur.com/faAmDhY.png";
  var description = "Explanations for every alleged \"contradiction\" in the Bible, including passages, quick answer, and a link to a fuller post for each alleged Bible \"contradiction.\"";
  var date_added = "2018-11-26";
  var updated_at = "2018-11-26";
  var numbers = contradictions.reduce(function (result, book) {
    book.answers.forEach(function (answer) {
      if (!answer.see) {
        result.total++;
      }

      if (!answer.quickAnswer && !answer.see) {
        result.noQuickAnswer++;
      }

      if (!answer.fullPost && !answer.see) {
        result.noFullPost++;
      }
    });
    return result;
  }, {
    total: 0,
    noQuickAnswer: 0,
    noFullPost: 0
  });
  var pageTitle = "\"Contradictions\" in the Bible: Every alleged biblical \"contradiction\" explained";
  var datePublished = new Date(date_added);
  var matthewIndex = Object(external_lodash_["findIndex"])(contradictions, function (book) {
    return book.book === "Matthew";
  });
  return external_react_default.a.createElement(Container["b" /* Container */], null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", {
    className: "jsx-1032469568"
  }, pageTitle, " | Bible Answers"), external_react_default.a.createElement("meta", {
    name: "description",
    content: description,
    className: "jsx-1032469568"
  }), external_react_default.a.createElement("meta", {
    property: "og:url",
    content: "https://bibleanswers.io/tags/contradictions",
    className: "jsx-1032469568"
  }), external_react_default.a.createElement("meta", {
    property: "og:title",
    content: pageTitle,
    className: "jsx-1032469568"
  }), external_react_default.a.createElement("meta", {
    property: "og:description",
    content: description,
    className: "jsx-1032469568"
  }), external_react_default.a.createElement("meta", {
    property: "og:image",
    content: image_url,
    className: "jsx-1032469568"
  }), external_react_default.a.createElement("script", {
    type: "application/ld+json",
    dangerouslySetInnerHTML: {
      __html: JSON.stringify({
        "@context": "http://schema.org",
        "@type": "Article",
        mainEntityOfPage: {
          "@type": "WebPage",
          "@id": "https://google.com/article"
        },
        headline: pageTitle,
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
    },
    className: "jsx-1032469568"
  })), external_react_default.a.createElement(TitleSection["b" /* TitleSection */], {
    title: pageTitle,
    subtitle: "Explanations for every alleged \"contradiction\" in the Bible",
    image_url: image_url,
    date_added: date_added,
    user: {
      name: "Michael Cheng",
      image: "https://i.imgur.com/8aN31Dn.png"
    }
  }), external_react_default.a.createElement(ReadingContainer["a" /* default */], null, external_react_default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "writing"
  }, external_react_default.a.createElement("a", {
    id: "top",
    style: {
      color: "rgba(0, 0, 0, .84)"
    },
    className: "jsx-1032469568"
  }, external_react_default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, "Table of contents")), external_react_default.a.createElement("h4", {
    className: "jsx-1032469568"
  }, "Overview"), external_react_default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "first"
  }, external_react_default.a.createElement("a", {
    href: "#introduction",
    className: "jsx-1032469568"
  }, "1. Introduction")), external_react_default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "first"
  }, external_react_default.a.createElement("a", {
    href: "#faqs",
    className: "jsx-1032469568"
  }, "2. Frequently asked questions")), external_react_default.a.createElement("h4", {
    className: "jsx-1032469568"
  }, "Old Testament"), external_react_default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "table-contents-container"
  }, contradictions.slice(0, matthewIndex).map(function (book) {
    return external_react_default.a.createElement("div", {
      key: book.book,
      className: "jsx-1032469568" + " " + "table-contents-item"
    }, external_react_default.a.createElement("a", {
      href: "#".concat(book.book),
      className: "jsx-1032469568"
    }, book.book, " (", book.answers.length, ")"));
  })), external_react_default.a.createElement("h4", {
    className: "jsx-1032469568"
  }, "New Testament"), external_react_default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "table-contents-container"
  }, contradictions.slice(matthewIndex).map(function (book) {
    return external_react_default.a.createElement("div", {
      key: book.book,
      className: "jsx-1032469568" + " " + "table-contents-item"
    }, external_react_default.a.createElement("a", {
      href: "#".concat(book.book),
      className: "jsx-1032469568"
    }, book.book, " (", book.answers.length, ")"));
  })), external_react_default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, "Work in progress"), external_react_default.a.createElement("p", {
    className: "jsx-1032469568"
  }, "This page is still a work in progress. Please check back to see updates!"), external_react_default.a.createElement("p", {
    className: "jsx-1032469568" + " " + "first"
  }, "Total explanations: ", numbers.total), external_react_default.a.createElement("p", {
    className: "jsx-1032469568" + " " + "first"
  }, "Quick answers remaining: ", numbers.noQuickAnswer), external_react_default.a.createElement("p", {
    className: "jsx-1032469568" + " " + "first"
  }, "Full post remaining: ", numbers.noFullPost), external_react_default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, external_react_default.a.createElement("a", {
    id: "introduction",
    className: "jsx-1032469568" + " " + "link-target"
  }, "Introduction")), external_react_default.a.createElement("p", {
    className: "jsx-1032469568"
  }, "Opponents of the Bible claim that it contains numerous irreconcilable contradictions. However, none of the \"alleged\" contradictions in the Bible are truly irreconcilable."), external_react_default.a.createElement("p", {
    className: "jsx-1032469568"
  }, "The purpose of this page is to provide possible explanations for every alleged \"contradiction\" in the Bible."), external_react_default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, external_react_default.a.createElement("a", {
    id: "faqs",
    className: "jsx-1032469568" + " " + "link-target"
  }, "Frequently asked questions")), contradictions.map(function (book) {
    return external_react_default.a.createElement("div", {
      key: book.book,
      className: "jsx-1032469568"
    }, external_react_default.a.createElement("a", {
      href: "#top",
      id: book.book,
      style: {
        display: "flex",
        alignItems: "center",
        marginTop: 28
      },
      className: "jsx-1032469568"
    }, external_react_default.a.createElement(fa_["FaChevronUp"], null), "\xA0Top"), external_react_default.a.createElement("h3", {
      key: book.book,
      style: {
        borderBottom: "1px solid rgba(0, 0, 0, .54)"
      },
      className: "jsx-1032469568" + " " + "nomargin"
    }, book.book), book.answers.map(function (answer, index) {
      linkCount++;

      if (answer.see) {
        var foundBook = Object(external_lodash_["find"])(contradictions, function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });
        var foundAnswer = Object(external_lodash_["find"])(foundBook.answers, function (answerData) {
          return answerData.bookVerses === answer.see[1];
        });
        return renderLink({
          index: index,
          book: book.book,
          bookVerses: answer.bookVerses,
          question: foundAnswer.question,
          count: linkCount
        });
      }

      return renderLink(_objectSpread({
        index: index,
        book: book.book
      }, answer, {
        count: linkCount
      }));
    }), book.answers.map(function (answer, index) {
      answerCount++;

      if (answer.see) {
        var foundBook = Object(external_lodash_["find"])(contradictions, function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });
        var foundAnswer = Object(external_lodash_["find"])(foundBook.answers, function (answerData) {
          return answerData.bookVerses === answer.see[1];
        });
        var detailsKey = "".concat(book.book, "_").concat(answer.bookVerses);
        var hideDetails = !details[detailsKey];
        return renderAnswer(_objectSpread({
          index: index,
          book: book.book
        }, foundAnswer, {
          foundBookVerses: foundAnswer.bookVerses,
          bookVerses: answer.bookVerses,
          count: answerCount,
          hideDetails: hideDetails,
          toggleDetail: function toggleDetail() {
            setDetails(_objectSpread({}, details, _defineProperty({}, detailsKey, !details[detailsKey])));
          }
        }));
      }

      return renderAnswer(_objectSpread({
        index: index,
        book: book.book
      }, answer, {
        count: answerCount
      }));
    }));
  }))), external_react_default.a.createElement(style_default.a, {
    styleId: "1032469568",
    css: [".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}", ".writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}", ".writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}", "p:first-child,.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}", ".writing ol,.writing ul{padding:0 40px;}", ".writing li{margin-bottom:10px;}", ".writing li:last-child{margin-bottom:0;}", ".writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}", ".writing .first{margin-top:8px;}", ".writing .nomargin{margin-top:0;}", ".writing .indent{margin-left:20px;}", ".writing .image{margin-top:29px;}", ".writing .image-left{float:left;margin-right:20px;}", ".writing .image-right{float:right;margin-left:20px;}", ".writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}", ".writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}", ".divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}", "@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}", ".table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}", ".table-contents-item{font-size:16px;margin-top:10px;width:150px;}", ".writing .link-target{color:rgba(0,0,0,0.84);}"]
  }));
};

/* harmony default export */ var pages_contradictions = __webpack_exports__["default"] = (contradictions_BibleContradictions);

/***/ }),

/***/ 6:
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ })

/******/ });