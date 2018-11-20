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

/***/ "./components/Footer.js":
/*!******************************!*\
  !*** ./components/Footer.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./Container */ "./components/Container.js");



var Footer = function Footer(_ref) {
  var isAmp = _ref.isAmp;
  var ContainerComponent = isAmp ? _Container__WEBPACK_IMPORTED_MODULE_1__["AmpContainer"] : _Container__WEBPACK_IMPORTED_MODULE_1__["Container"];
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "footer",
    style: {
      background: "#01579B",
      justifyContent: "center",
      padding: "10px 20px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ContainerComponent, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/privacy-policy",
    style: {
      color: "#fff",
      marginRight: 20,
      textDecoration: "none"
    }
  }, "Privacy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/terms-of-service",
    style: {
      color: "#fff",
      marginRight: 20,
      textDecoration: "none"
    }
  }, "Terms"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/sitemap.xml",
    style: {
      color: "#fff",
      textDecoration: "none"
    }
  }, "Sitemap"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Footer);

/***/ }),

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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
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
  })));
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
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_amphtml_setup__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-amphtml/setup */ "react-amphtml/setup");
/* harmony import */ var react_amphtml_setup__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_amphtml_setup__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");
/* harmony import */ var _components_Footer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Footer */ "./components/Footer.js");



function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyDocument).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "renderWebsiteScript",
    value: function renderWebsiteScript() {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
        type: "application/ld+json",
        dangerouslySetInnerHTML: {
          __html: JSON.stringify({
            "@context": "http://schema.org",
            "@type": "WebSite",
            url: "https://bibleanswers.io/",
            potentialAction: {
              "@type": "SearchAction",
              target: "https://bibleanswers.io/search?q={search_term_string}",
              "query-input": "required name=search_term_string"
            }
          })
        }
      });
    }
  }, {
    key: "render",
    value: function render() {
      if (this.props.noAmp) {
        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("html", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_2__["Head"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
          rel: "icon",
          href: "https://i.imgur.com/lnlvtFf.png"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
          name: "viewport",
          content: "width=device-width,minimum-scale=1,initial-scale=1"
        }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
          rel: "canonical",
          href: "https://bibleanswers.io".concat(this.props.url)
        }), this.props.url === "/" ? this.renderWebsiteScript() : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", null, "body { margin: 0 } /* custom! */")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", {
          className: "custom_class"
        }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_2__["Main"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_document__WEBPACK_IMPORTED_MODULE_2__["NextScript"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], null)));
      }

      var _this$props = this.props,
          title = _this$props.title,
          schemaInfo = _this$props.schemaInfo,
          url = _this$props.url,
          ampScriptTags = _this$props.ampScriptTags,
          ampStyleTag = _this$props.ampStyleTag,
          html = _this$props.html;
      /* eslint-disable react/no-danger */

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_amphtml__WEBPACK_IMPORTED_MODULE_5__["Html"], {
        specName: "html \u26A1 for top-level html",
        lang: "en",
        amp: "amp"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("link", {
        rel: "icon",
        href: "https://i.imgur.com/lnlvtFf.png"
      }), title, schemaInfo, Object(react_amphtml_setup__WEBPACK_IMPORTED_MODULE_4__["headerBoilerplate"])("https://bibleanswers.io".concat(url)), ampScriptTags, ampStyleTag), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("body", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isAmp: true
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: html
        }
      }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Footer__WEBPACK_IMPORTED_MODULE_7__["default"], {
        isAmp: true
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(ctx) {
        var req, renderPage, noAmp, initialProps, ampScripts, sheet, page, ampScriptTags, ampStyleTag, title, schemaInfo;
        return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                req = ctx.req, renderPage = ctx.renderPage;
                noAmp = req.url === "/admin" || req.url === "/" || req.url.indexOf("/confessions") !== -1;

                if (!noAmp) {
                  _context.next = 7;
                  break;
                }

                _context.next = 5;
                return next_document__WEBPACK_IMPORTED_MODULE_2___default.a.getInitialProps(ctx);

              case 5:
                initialProps = _context.sent;
                return _context.abrupt("return", _objectSpread({}, initialProps, {
                  noAmp: true,
                  url: req.url
                }));

              case 7:
                ampScripts = new react_amphtml_setup__WEBPACK_IMPORTED_MODULE_4__["AmpScripts"]();
                sheet = new styled_components__WEBPACK_IMPORTED_MODULE_3__["ServerStyleSheet"]();
                page = renderPage(function (App) {
                  return function (props) {
                    return sheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_amphtml_setup__WEBPACK_IMPORTED_MODULE_4__["AmpScriptsManager"], {
                      ampScripts: ampScripts
                    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(App, props)));
                  };
                });
                ampScriptTags = ampScripts.getScriptElements(); // AMP only allows for 1 style tag, so we need to compbine all the style
                // tags generated by styled-components

                /* eslint-disable react/no-danger */

                ampStyleTag = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("style", {
                  "amp-custom": "",
                  dangerouslySetInnerHTML: {
                    __html: sheet.getStyleElement().reduce(function (css) {
                      var _ref = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                          _ref$props = _ref.props;

                      _ref$props = _ref$props === void 0 ? {} : _ref$props;
                      var _ref$props$dangerousl = _ref$props.dangerouslySetInnerHTML;
                      _ref$props$dangerousl = _ref$props$dangerousl === void 0 ? {} : _ref$props$dangerousl;

                      var _ref$props$dangerousl2 = _ref$props$dangerousl.__html,
                          __html = _ref$props$dangerousl2 === void 0 ? "" : _ref$props$dangerousl2;

                      return "".concat(css).concat(__html);
                    }, "")
                  }
                });
                /* eslint-enable */
                // Get the dynamic `<title />` from the head generated by next.js

                title = page.head.filter(function (_ref2) {
                  var type = _ref2.type;
                  return type === "title";
                }).slice(0, 1) || react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "ampreact");
                schemaInfo = page.head.filter(function (_ref3) {
                  var type = _ref3.type;
                  return type === "script";
                }).slice(0, 1) || null;
                return _context.abrupt("return", _objectSpread({}, page, {
                  title: title,
                  schemaInfo: schemaInfo,
                  url: req.url,
                  ampScriptTags: ampScriptTags,
                  ampStyleTag: ampStyleTag
                }));

              case 15:
              case "end":
                return _context.stop();
            }
          }
        }, _callee, this);
      }));

      return function getInitialProps(_x) {
        return _getInitialProps.apply(this, arguments);
      };
    }()
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_2___default.a);



/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./pages/_document.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

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
//# sourceMappingURL=_document.js.map