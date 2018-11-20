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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Author.js":
/*!******************************!*\
  !*** ./components/Author.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_3__);
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





var Author = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var AuthorInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var AuthorName = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var AuthorDate = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var StyledAmpImage = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_amphtml__WEBPACK_IMPORTED_MODULE_3__["AmpImg"])(_templateObject5());
/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var date_added = _ref.date_added,
      image = _ref.image,
      name = _ref.name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(Author, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAmpImage, {
    specName: "default",
    src: image,
    width: "60",
    height: "60",
    alt: "AMP"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthorInfo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthorName, null, name), date_added ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthorDate, null, moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date(date_added)).format("MMM Do, YYYY")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AuthorDate, null, "Not published yet")));
});

/***/ }),

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: AmpContainer, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpContainer", function() { return AmpContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
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
    css: ".container.jsx-1997678190{color:rgba(0,0,0,0.84);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUdtQyx1QkFDakIsU0FDQyxVQUMrQyxzREFDM0QiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbmA7XG5cbmNvbnN0IEFtcENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPFN0eWxlZENvbnRhaW5lcj57Y2hpbGRyZW59PC9TdHlsZWRDb250YWluZXI+XG4pO1xuXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IHsgQW1wQ29udGFpbmVyLCBDb250YWluZXIgfTtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/Container.js */"
  }));
};



/***/ }),

/***/ "./components/GlobalStyle.js":
/*!***********************************!*\
  !*** ./components/GlobalStyle.js ***!
  \***********************************/
/*! exports provided: createAmpGlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAmpGlobalStyle", function() { return createAmpGlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .writing h3 {\n    font-size: 34px;\n    line-height: 1.15;\n    margin: 0;\n    margin-top: 56px;\n  }\n  \n  .writing h4 {\n    font-size: 26px;\n    line-height: 1.22;\n    margin: 0;\n    margin-top: 30px;\n  }\n  \n  .writing h3 + p,\n  .writing h3 + ol,\n  .writing h3 + ul,\n  .writing h3 + blockquote,\n  .writing h4 + p,\n  .writing h4 + ol,\n  .writing h4 + ul,\n  .writing h4 + blockquote {\n    margin-top: 8px;\n  }\n  \n  .writing p,\n  .writing ol,\n  .writing ul,\n  .writing blockquote {\n    font-size: 21px;\n    line-height: 1.58;\n    margin: 0;\n    margin-top: 29px;\n  }\n  \n  .writing ol,\n  .writing ul {\n    padding: 0 40px;\n  }\n  \n  .writing li {\n    margin-bottom: 10px;\n  }\n  \n  .writing li:last-child {\n    margin-bottom: 0;\n  }\n  \n  .writing blockquote {\n    border-left: 3px solid rgba(0, 0, 0, .84);\n    font-style: italic;\n    left: -20px;\n    padding-left: 20px;\n    position: relative;\n  }\n  \n  .writing .first {\n    margin-top: 8px;\n  }\n  \n  .writing .nomargin {\n    margin-top: 0;\n  }\n  \n  .writing .indent {\n    margin-left: 20px;\n  }\n  \n  .writing .image {\n    margin-top: 29px;\n  }\n  \n  .writing .image-left {\n    float: left;\n    margin-right: 20px;\n  }\n  \n  .writing .image-right {\n    float: right;\n    margin-left: 20px;\n  }\n  \n  .writing a {\n    color: #689f38;\n    text-decoration: none;\n  }\n  \n  .writing .reference {\n    font-size: 14px;\n    margin-left: 2px;\n    position: relative;\n    top: -5px;\n  }\n  \n  @media screen and (max-width: 768px) {\n    .writing h3 {\n      font-size: 30px;\n      margin-top: 28px;\n    }\n  \n    .writing h4 {\n      font-size: 24px;\n      margin-top: 22px;\n    }\n  \n    .writing p,\n    .writing ol {\n      font-size: 18px;\n      margin-top: 21px;\n    }\n  \n    .writing blockquote {\n      font-size: 18px;\n      margin-top: 21px;\n    }\n  \n    .writing .image {\n      margin-top: 21px;\n    }\n  }\n\n  ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var RESURRECTION_HARMONY_STYLES = "/* RESURRECTION HARMONY */\n\n.resurrection-scripture-container {\n  display: flex;\n}\n\n.resurrection-scripture {\n  flex-grow: 1;\n  margin-top: 20px;\n  min-width: 320px;\n}\n\n.resurrection-scripture-title {\n  background: #757575;\n  border-right: 1px solid #fff;\n  color: #fff;\n  padding: 5px 10px;\n}\n\n.resurrection-scripture-text {\n  border: 1px solid #BDBDBD;\n  border-top: 0;\n  padding: 5px 10px;\n}\n\n.scripture-verse {\n  font-size: 13px;\n  font-weight: bold;\n  position: relative;\n  top: -5px;\n}\n\n.writing .purple {\n  color: #9C27B0;\n  font-weight: bold;\n}\n\n.writing .red {\n  color: #F44336;\n  font-weight: bold;\n}\n\n.writing .teal {\n  color: #009688;\n  font-weight: bold;\n}\n\n.writing .orange {\n  color: #FF5722;\n  font-weight: bold;\n}\n\n.writing .orange-1 {\n  color: #EF6C00;\n  font-weight: bold;\n}\n\n.writing .blue {\n  color: #2196F3;\n  font-weight: bold;\n}\n\n.writing .indigo {\n  color: #3F51B5;\n  font-weight: bold;\n}\n\n.writing .pink {\n  color: #E91E63;\n  font-weight: bold;\n}\n\n.writing .cyan {\n  color: #0097A7;\n  font-weight: bold;\n}\n\n.writing .green {\n  color: #43A047;\n  font-weight: bold;\n}\n\n.writing .brown {\n  color: #795548;\n  font-weight: bold;\n}";

function createAmpGlobalStyle(slug) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), slug === "resurrection-narratives-harmony" ? RESURRECTION_HARMONY_STYLES : "");
}



/***/ }),

/***/ "./components/Help.js":
/*!****************************!*\
  !*** ./components/Help.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Help = function Help(_ref) {
  var description = _ref.description,
      title = _ref.title;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "writing"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "first"
  }, description), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "This article still needs to be written!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "first"
  }, "Would you consider helping us write this article? If you would like to help others learn more about the Christian faith, as well as have an article be attributed to you as the author (with a link to your website, if you have one), simply send an email to", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "cheng.c.michael@gmail.com"), ", and we can provide you with more specific instructions for contributing!"));
};

/* harmony default export */ __webpack_exports__["default"] = (Help);

/***/ }),

/***/ "./components/ReadingContainer.js":
/*!****************************************!*\
  !*** ./components/ReadingContainer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
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

/***/ "./components/TitleSection.js":
/*!************************************!*\
  !*** ./components/TitleSection.js ***!
  \************************************/
/*! exports provided: AmpTitleSection, TitleSection */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpTitleSection", function() { return AmpTitleSection; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "TitleSection", function() { return TitleSection; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _Author__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Author */ "./components/Author.js");


function _templateObject8() {
  var data = _taggedTemplateLiteral(["\n  display: none;\n\n  @media screen and (max-width: 1199px) {\n    display: block;\n    font-size: 35px;\n    letter-spacing: 0.6em;\n    text-align: center;\n  }\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  background-position: center;\n  width: 100%;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-left: 20px;\n  max-height: 400px;\n  overflow: hidden;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-height: 500px;\n    order: -1;\n    width: 100%;\n  }\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  font-size: 56px;\n  font-weight: 500;\n  line-height: 64px;\n  margin: 0;\n  margin-bottom: 16px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 40px;\n    margin-bottom: 8px;\n  }\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  margin-left: auto;\n  max-width: 552px;\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-width: none;\n    padding: 0;\n    width: 100%;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin: 30px auto 0;\n    max-width: 740px;\n    width: calc(100% - 40px);\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  margin: 0 65px;\n\n  @media screen and (max-width: 1199px) {\n    flex-direction: column;\n    margin: 0;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var AmpTitleSectionContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var AmpTitleInfoContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var AmpTitleInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var AmpTitleText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject4());
var AmpSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5());
var AmpCoverImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject6());
var StyledAmpImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_amphtml__WEBPACK_IMPORTED_MODULE_3__["AmpImg"])(_templateObject7());
var AmpDivider = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject8());

var AmpTitleSection = function AmpTitleSection(_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image_url = _ref.image_url,
      date_added = _ref.date_added,
      user = _ref.user;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpTitleSectionContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpTitleInfoContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpTitleInfo, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpTitleText, null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpSubtitle, null, subtitle || "Help us write this article!"), user ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Author__WEBPACK_IMPORTED_MODULE_4__["default"], {
    date_added: date_added,
    image: user.image,
    name: user.name
  }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpDivider, null, "..."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpCoverImageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAmpImg, {
    specName: "default",
    src: image_url || "https://i.imgur.com/SmPYB60.png",
    width: "1200",
    height: "400",
    layout: "responsive",
    alt: "AMP"
  })));
};

var TitleSectionContainer = function TitleSectionContainer(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3214516492" + " " + "title-section"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3214516492",
    css: ".title-section.jsx-3214516492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 65px;}@media screen and (max-width:1199px){.title-section.jsx-3214516492{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlnQixBQUdzQixBQU1XLDBFQUxWLElBTUgsU0FDWCxDQU5GIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgIDxUaXRsZVRleHQ+e3RpdGxlfTwvVGl0bGVUZXh0PlxuICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgIDwvVGl0bGVJbmZvPlxuICAgIDwvVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgPC9Db3ZlckltYWdlQ29udGFpbmVyPlxuICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleInfoContainer = function TitleInfoContainer(_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2927809135" + " " + "title-info-container"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2927809135",
    css: ".title-info-container.jsx-2927809135{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:calc(50% - 10px);}@media screen and (max-width:1199px){.title-info-container.jsx-2927809135{margin:30px auto 0;max-width:740px;width:calc(100% - 40px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0pnQixBQUc0QixBQU9FLG1CQUNILGdCQUNRLHdCQUMxQixrQ0FUYSwwRUFDVSx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL1RpdGxlU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBBbXAgZnJvbSBcInJlYWN0LWFtcGh0bWxcIjtcblxuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi9BdXRob3JcIjtcblxuY29uc3QgQW1wVGl0bGVTZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDY1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlSW5mb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gICAgbWF4LXdpZHRoOiA3NDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlSW5mbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDU1MnB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVRleHQgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFN1YnRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcENvdmVySW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG9yZGVyOiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkQW1wSW1nID0gc3R5bGVkKEFtcC5BbXBJbWcpYFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgQW1wRGl2aWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2VfdXJsLCBkYXRlX2FkZGVkLCB1c2VyIH0pID0+IChcbiAgPEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgICA8QW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgICAgPEFtcFRpdGxlSW5mbz5cbiAgICAgICAgPEFtcFRpdGxlVGV4dD57dGl0bGV9PC9BbXBUaXRsZVRleHQ+XG4gICAgICAgIDxBbXBTdWJ0aXRsZT57c3VidGl0bGUgfHwgXCJIZWxwIHVzIHdyaXRlIHRoaXMgYXJ0aWNsZSFcIn08L0FtcFN1YnRpdGxlPlxuXG4gICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgIDxBdXRob3IgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH0gaW1hZ2U9e3VzZXIuaW1hZ2V9IG5hbWU9e3VzZXIubmFtZX0gLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFtcERpdmlkZXI+Li4uPC9BbXBEaXZpZGVyPlxuICAgICAgPC9BbXBUaXRsZUluZm8+XG4gICAgPC9BbXBUaXRsZUluZm9Db250YWluZXI+XG4gICAgPEFtcENvdmVySW1hZ2VDb250YWluZXI+XG4gICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgIHNwZWNOYW1lPVwiZGVmYXVsdFwiXG4gICAgICAgIHNyYz17aW1hZ2VfdXJsIHx8IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9TbVBZQjYwLnBuZ1wifVxuICAgICAgICB3aWR0aD1cIjEyMDBcIlxuICAgICAgICBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgYWx0PVwiQU1QXCJcbiAgICAgIC8+XG4gICAgPC9BbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICA8L0FtcFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1zZWN0aW9uXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIDY1cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVJbmZvQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWluZm8tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgICAgICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mbyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNTUycHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDb3ZlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBEaXZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2VfdXJsLCBkYXRlX2FkZGVkLCB1c2VyIH0pID0+IChcbiAgPFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgICA8VGl0bGVJbmZvQ29udGFpbmVyPlxuICAgICAgPFRpdGxlSW5mbz5cbiAgICAgICAgPFRpdGxlVGV4dD57dGl0bGV9PC9UaXRsZVRleHQ+XG4gICAgICAgIDxTdWJ0aXRsZT57c3VidGl0bGUgfHwgXCJIZWxwIHVzIHdyaXRlIHRoaXMgYXJ0aWNsZSFcIn08L1N1YnRpdGxlPlxuXG4gICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgIDxBdXRob3IgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH0gaW1hZ2U9e3VzZXIuaW1hZ2V9IG5hbWU9e3VzZXIubmFtZX0gLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPERpdmlkZXI+Li4uPC9EaXZpZGVyPlxuICAgICAgPC9UaXRsZUluZm8+XG4gICAgPC9UaXRsZUluZm9Db250YWluZXI+XG4gICAgPENvdmVySW1hZ2VDb250YWluZXI+XG4gICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cbiAgICA8L0NvdmVySW1hZ2VDb250YWluZXI+XG4gIDwvVGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuKTtcblxuZXhwb3J0IHsgQW1wVGl0bGVTZWN0aW9uLCBUaXRsZVNlY3Rpb24gfTtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleInfo = function TitleInfo(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1249011680" + " " + "title-info"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1249011680",
    css: ".title-info.jsx-1249011680{margin-left:auto;max-width:552px;}@media screen and (max-width:1199px){.title-info.jsx-1249011680{margin-left:0;max-width:none;padding:0;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMktnQixBQUcwQixBQU1ELGNBQ0MsR0FORCxZQU9KLElBTmQsTUFPZSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgIDxUaXRsZVRleHQ+e3RpdGxlfTwvVGl0bGVUZXh0PlxuICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgIDwvVGl0bGVJbmZvPlxuICAgIDwvVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgPC9Db3ZlckltYWdlQ29udGFpbmVyPlxuICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleText = function TitleText(_ref5) {
  var children = _ref5.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2529258625" + " " + "title-text"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2529258625",
    css: ".title-text.jsx-2529258625{font-size:56px;font-weight:500;line-height:64px;margin:0;margin-bottom:16px;}@media screen and (max-width:1199px){.title-text.jsx-2529258625{font-size:36px;font-weight:500;line-height:40px;margin-bottom:8px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ01nQixBQUd3QixBQVNFLGVBUkQsQUFTRSxnQkFSRCxBQVNFLGlCQVJWLEFBU1csU0FSRCxTQVNuQixVQVJGIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgIDxUaXRsZVRleHQ+e3RpdGxlfTwvVGl0bGVUZXh0PlxuICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgIDwvVGl0bGVJbmZvPlxuICAgIDwvVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgPC9Db3ZlckltYWdlQ29udGFpbmVyPlxuICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var Subtitle = function Subtitle(_ref6) {
  var children = _ref6.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3750299911" + " " + "subtitle"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3750299911",
    css: ".subtitle.jsx-3750299911{color:rgba(0,0,0,0.54);font-size:23px;font-weight:400;line-height:28px;margin-bottom:30px;}@media screen and (max-width:1199px){.subtitle.jsx-3750299911{font-size:20px;line-height:24px;margin-bottom:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd05nQixBQUdtQyxBQVNULGVBQ0UsUUFUSixTQVVNLE1BVEwsYUFVaEIsR0FUaUIsaUJBQ0UsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgIDxUaXRsZVRleHQ+e3RpdGxlfTwvVGl0bGVUZXh0PlxuICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgIDwvVGl0bGVJbmZvPlxuICAgIDwvVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgPC9Db3ZlckltYWdlQ29udGFpbmVyPlxuICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var CoverImageContainer = function CoverImageContainer(_ref7) {
  var children = _ref7.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2130314682" + " " + "cover-image-container"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2130314682",
    css: ".cover-image-container.jsx-2130314682{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:20px;max-height:400px;overflow:hidden;width:calc(50% - 10px);}@media screen and (max-width:1199px){.cover-image-container.jsx-2130314682{margin-left:0;max-height:500px;-webkit-order:-1;-ms-flex-order:-1;order:-1;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK09nQixBQUc0QixBQVVILGNBQ0csaUJBQ1IsNENBQ0UsV0FDYixPQWJhLDBFQUNJLGlCQUNBLGlCQUNELGdCQUNPLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL2NvbXBvbmVudHMvVGl0bGVTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIEFtcCBmcm9tIFwicmVhY3QtYW1waHRtbFwiO1xuXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuL0F1dGhvclwiO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgNjVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVJbmZvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVJbmZvID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1heC13aWR0aDogNTUycHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlVGV4dCA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiA1NnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuYDtcblxuY29uc3QgQW1wU3VidGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgQW1wQ292ZXJJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgb3JkZXI6IC0xO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRBbXBJbWcgPSBzdHlsZWQoQW1wLkFtcEltZylgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBBbXBEaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogbm9uZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVTZWN0aW9uID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZV91cmwsIGRhdGVfYWRkZWQsIHVzZXIgfSkgPT4gKFxuICA8QW1wVGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICAgIDxBbXBUaXRsZUluZm9Db250YWluZXI+XG4gICAgICA8QW1wVGl0bGVJbmZvPlxuICAgICAgICA8QW1wVGl0bGVUZXh0Pnt0aXRsZX08L0FtcFRpdGxlVGV4dD5cbiAgICAgICAgPEFtcFN1YnRpdGxlPntzdWJ0aXRsZSB8fCBcIkhlbHAgdXMgd3JpdGUgdGhpcyBhcnRpY2xlIVwifTwvQW1wU3VidGl0bGU+XG5cbiAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgPEF1dGhvciBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfSBpbWFnZT17dXNlci5pbWFnZX0gbmFtZT17dXNlci5uYW1lfSAvPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICA8QW1wRGl2aWRlcj4uLi48L0FtcERpdmlkZXI+XG4gICAgICA8L0FtcFRpdGxlSW5mbz5cbiAgICA8L0FtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICA8QW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDxTdHlsZWRBbXBJbWdcbiAgICAgICAgc3BlY05hbWU9XCJkZWZhdWx0XCJcbiAgICAgICAgc3JjPXtpbWFnZV91cmwgfHwgXCJodHRwczovL2kuaW1ndXIuY29tL1NtUFlCNjAucG5nXCJ9XG4gICAgICAgIHdpZHRoPVwiMTIwMFwiXG4gICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICBhbHQ9XCJBTVBcIlxuICAgICAgLz5cbiAgICA8L0FtcENvdmVySW1hZ2VDb250YWluZXI+XG4gIDwvQW1wVGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuKTtcblxuY29uc3QgVGl0bGVTZWN0aW9uQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXNlY3Rpb25cIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDAgNjVweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm9Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mby1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA3NDBweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVJbmZvID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWluZm9cIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA1NTJweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtdGV4dFwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU3VidGl0bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENvdmVySW1hZ2VDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY292ZXItaW1hZ2UtY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IERpdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZGl2aWRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVTZWN0aW9uID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZV91cmwsIGRhdGVfYWRkZWQsIHVzZXIgfSkgPT4gKFxuICA8VGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICAgIDxUaXRsZUluZm9Db250YWluZXI+XG4gICAgICA8VGl0bGVJbmZvPlxuICAgICAgICA8VGl0bGVUZXh0Pnt0aXRsZX08L1RpdGxlVGV4dD5cbiAgICAgICAgPFN1YnRpdGxlPntzdWJ0aXRsZSB8fCBcIkhlbHAgdXMgd3JpdGUgdGhpcyBhcnRpY2xlIVwifTwvU3VidGl0bGU+XG5cbiAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgPEF1dGhvciBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfSBpbWFnZT17dXNlci5pbWFnZX0gbmFtZT17dXNlci5uYW1lfSAvPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICA8RGl2aWRlcj4uLi48L0RpdmlkZXI+XG4gICAgICA8L1RpdGxlSW5mbz5cbiAgICA8L1RpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICA8Q292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZV91cmx9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSAvPlxuICAgIDwvQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9UaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5leHBvcnQgeyBBbXBUaXRsZVNlY3Rpb24sIFRpdGxlU2VjdGlvbiB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var Divider = function Divider(_ref8) {
  var children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1611578801" + " " + "divider"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1611578801",
    css: ".divider.jsx-1611578801{display:none;}@media screen and (max-width:1199px){.divider.jsx-1611578801{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd1FnQixBQUdzQixBQUtHLGFBSmxCLENBS21CLGVBQ00scUdBQ0gsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgIDxUaXRsZVRleHQ+e3RpdGxlfTwvVGl0bGVUZXh0PlxuICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgIDwvVGl0bGVJbmZvPlxuICAgIDwvVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgPC9Db3ZlckltYWdlQ29udGFpbmVyPlxuICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleSection = function TitleSection(_ref9) {
  var title = _ref9.title,
      subtitle = _ref9.subtitle,
      image_url = _ref9.image_url,
      date_added = _ref9.date_added,
      user = _ref9.user;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleSectionContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleInfoContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleInfo, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TitleText, null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Subtitle, null, subtitle || "Help us write this article!"), user ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Author__WEBPACK_IMPORTED_MODULE_4__["default"], {
    date_added: date_added,
    image: user.image,
    name: user.name
  }) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null, "..."))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(CoverImageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: image_url,
    style: {
      width: "100%"
    }
  })));
};



/***/ }),

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/GlobalStyle */ "./components/GlobalStyle.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");
/* harmony import */ var _components_Help__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/Help */ "./components/Help.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  min-height: 2rem;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var RelativeAmpList = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["AmpList"])(_templateObject());

var Post = function Post(_ref) {
  var post = _ref.post,
      slug = _ref.slug;

  if (!post) {
    return [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Post not found"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://bibleanswers.io"
    }, "Bible Answers Home"))];
  }

  var title = post.title,
      description = post.description,
      image_url = post.image_url,
      date_added = post.date_added,
      updated_at = post.updated_at,
      html = post.html,
      published = post.published;
  var datePublished = date_added ? new Date(date_added) : new Date();
  var AmpGlobalStyle = Object(_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_6__["createAmpGlobalStyle"])(slug);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["AmpContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, title, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
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
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpGlobalStyle, {
    slug: slug
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_9__["AmpTitleSection"], post), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_8__["default"], null, published ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: html
    }
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Help__WEBPACK_IMPORTED_MODULE_10__["default"], {
    description: description,
    title: title
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", null, "Related posts"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RelativeAmpList, {
    specName: "default",
    src: "https://bibleanswersapi.herokuapp.com/relatedposts/".concat(slug),
    items: "items",
    layout: "fill"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["Template"], {
    specName: "default",
    type: "amp-mustache"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "{{url}}",
    target: "_blank",
    rel: "noopener noreferrer"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "first"
  }, "\u203A ", "{{title}}"))))))));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var req, query, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            req = _ref2.req, query = _ref2.query;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_5___default()("https://bibleanswersapi.herokuapp.com/posts/".concat(query.slug || req.url.slice(1)));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", {
              post: data,
              slug: query.slug || req.url.slice(1)
            });

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

/* harmony default export */ __webpack_exports__["default"] = (Post);

/***/ }),

/***/ 6:
/*!*****************************!*\
  !*** multi ./pages/post.js ***!
  \*****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/post.js */"./pages/post.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=post.js.map