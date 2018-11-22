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
/******/ 	return __webpack_require__(__webpack_require__.s = 26);
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

/***/ 16:
/***/ (function(module, exports) {

module.exports = require("next/document");

/***/ }),

/***/ 18:
/***/ (function(module, exports) {

module.exports = require("react-amphtml/setup");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 26:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(51);


/***/ }),

/***/ 3:
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
/***/ (function(module, exports) {

module.exports = require("react-amphtml");

/***/ }),

/***/ 51:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(7);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/document"
var document_ = __webpack_require__(16);
var document_default = /*#__PURE__*/__webpack_require__.n(document_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);

// EXTERNAL MODULE: external "react-amphtml/setup"
var setup_ = __webpack_require__(18);

// EXTERNAL MODULE: external "react-amphtml"
var external_react_amphtml_ = __webpack_require__(5);

// CONCATENATED MODULE: ./components/Nav.js

/* harmony default export */ var Nav = (function (_ref) {
  var isAmp = _ref.isAmp;
  return external_react_default.a.createElement("nav", {
    style: {
      alignItems: "center",
      display: "flex",
      height: 60,
      padding: "0 20px"
    }
  }, external_react_default.a.createElement("a", {
    href: "/"
  }, isAmp ? external_react_default.a.createElement("amp-img", {
    src: "https://i.imgur.com/dJPxPY9.png",
    height: "29",
    width: "170",
    alt: "Bible Answers logo"
  }) : external_react_default.a.createElement("img", {
    src: "https://i.imgur.com/dJPxPY9.png",
    alt: "Bible Answers logo",
    style: {
      height: 29,
      width: 170
    }
  })));
});
// EXTERNAL MODULE: ./components/Container.js
var Container = __webpack_require__(3);

// CONCATENATED MODULE: ./components/Footer.js



var Footer_Footer = function Footer(_ref) {
  var isAmp = _ref.isAmp;
  var ContainerComponent = isAmp ? Container["a" /* AmpContainer */] : Container["b" /* Container */];
  return external_react_default.a.createElement("div", {
    className: "footer",
    style: {
      background: "#01579B",
      justifyContent: "center",
      padding: "10px 20px"
    }
  }, external_react_default.a.createElement(ContainerComponent, null, external_react_default.a.createElement("div", {
    style: {
      display: "flex",
      justifyContent: "center"
    }
  }, external_react_default.a.createElement("a", {
    href: "/privacy-policy",
    style: {
      color: "#fff",
      marginRight: 20,
      textDecoration: "none"
    }
  }, "Privacy"), external_react_default.a.createElement("a", {
    href: "/terms-of-service",
    style: {
      color: "#fff",
      marginRight: 20,
      textDecoration: "none"
    }
  }, "Terms"), external_react_default.a.createElement("a", {
    href: "/sitemap.xml",
    style: {
      color: "#fff",
      textDecoration: "none"
    }
  }, "Sitemap"))));
};

/* harmony default export */ var components_Footer = (Footer_Footer);
// CONCATENATED MODULE: ./pages/_document.js
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return _document_MyDocument; });



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








var _document_MyDocument =
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
      return external_react_default.a.createElement("script", {
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
        return external_react_default.a.createElement("html", null, external_react_default.a.createElement(document_["Head"], null, external_react_default.a.createElement("link", {
          rel: "icon",
          href: "https://i.imgur.com/lnlvtFf.png"
        }), external_react_default.a.createElement("meta", {
          name: "viewport",
          content: "width=device-width,minimum-scale=1,initial-scale=1"
        }), external_react_default.a.createElement("link", {
          rel: "canonical",
          href: "https://bibleanswers.io".concat(this.props.url)
        }), this.props.url === "/" ? this.renderWebsiteScript() : null, external_react_default.a.createElement("style", null, "body { margin: 0 } /* custom! */")), external_react_default.a.createElement("body", {
          className: "custom_class"
        }, external_react_default.a.createElement(Nav, null), external_react_default.a.createElement(document_["Main"], null), external_react_default.a.createElement(document_["NextScript"], null), external_react_default.a.createElement(components_Footer, null)));
      }

      var _this$props = this.props,
          title = _this$props.title,
          descriptionAndImage = _this$props.descriptionAndImage,
          schemaInfo = _this$props.schemaInfo,
          url = _this$props.url,
          ampScriptTags = _this$props.ampScriptTags,
          ampStyleTag = _this$props.ampStyleTag,
          html = _this$props.html;
      /* eslint-disable react/no-danger */

      return external_react_default.a.createElement(external_react_amphtml_["Html"], {
        specName: "html \u26A1 for top-level html",
        lang: "en",
        amp: "amp"
      }, external_react_default.a.createElement("head", null, external_react_default.a.createElement("link", {
        rel: "icon",
        href: "https://i.imgur.com/lnlvtFf.png"
      }), title, descriptionAndImage, schemaInfo, Object(setup_["headerBoilerplate"])("https://bibleanswers.io".concat(url)), ampScriptTags, ampStyleTag), external_react_default.a.createElement("body", null, external_react_default.a.createElement(Nav, {
        isAmp: true
      }), external_react_default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: html
        }
      }), external_react_default.a.createElement(components_Footer, {
        isAmp: true
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function () {
      var _getInitialProps = _asyncToGenerator(
      /*#__PURE__*/
      regenerator_default.a.mark(function _callee(ctx) {
        var req, renderPage, noAmp, initialProps, ampScripts, sheet, page, ampScriptTags, ampStyleTag, title, descriptionAndImage, schemaInfo;
        return regenerator_default.a.wrap(function _callee$(_context) {
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
                return document_default.a.getInitialProps(ctx);

              case 5:
                initialProps = _context.sent;
                return _context.abrupt("return", _objectSpread({}, initialProps, {
                  noAmp: true,
                  url: req.url
                }));

              case 7:
                ampScripts = new setup_["AmpScripts"]();
                sheet = new external_styled_components_["ServerStyleSheet"]();
                page = renderPage(function (App) {
                  return function (props) {
                    return sheet.collectStyles(external_react_default.a.createElement(setup_["AmpScriptsManager"], {
                      ampScripts: ampScripts
                    }, external_react_default.a.createElement(App, props)));
                  };
                });
                ampScriptTags = ampScripts.getScriptElements(); // AMP only allows for 1 style tag, so we need to compbine all the style
                // tags generated by styled-components

                /* eslint-disable react/no-danger */

                ampStyleTag = external_react_default.a.createElement("style", {
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
                }).slice(0, 1) || external_react_default.a.createElement("title", null, "Bible Answers: Explaining and Defending the Christian Worldview");
                descriptionAndImage = page.head.filter(function (_ref3) {
                  var type = _ref3.type;
                  return type === "meta";
                }).slice(1, 3) || null;
                schemaInfo = page.head.filter(function (_ref4) {
                  var type = _ref4.type;
                  return type === "script";
                }).slice(0, 1) || null;
                return _context.abrupt("return", _objectSpread({}, page, {
                  title: title,
                  descriptionAndImage: descriptionAndImage,
                  schemaInfo: schemaInfo,
                  url: req.url,
                  ampScriptTags: ampScriptTags,
                  ampStyleTag: ampStyleTag
                }));

              case 16:
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
}(document_default.a);



/***/ }),

/***/ 7:
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ })

/******/ });