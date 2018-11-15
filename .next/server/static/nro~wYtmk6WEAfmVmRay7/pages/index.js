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
/******/ 	return __webpack_require__(__webpack_require__.s = 17);
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

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 3 */
/***/ (function(module, exports) {

module.exports = require("react-amphtml");

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
      width: "100%",
      padding: "0 20px"
    }, style)
  }, children);
});

/***/ }),
/* 5 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

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
/* 8 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(7);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(3);
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
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */,
/* 13 */,
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(18);


/***/ }),
/* 18 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(5);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(19);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(6);
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(8);
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(4);


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: #689f38;\n  cursor: pointer;\n  font-size: 18px;\n  margin-top: 10px;\n  text-decoration: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  text-decoration: none;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: #689f38;\n  cursor: pointer;\n  font-size: 18px;\n  margin-bottom: 6px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  font-size: 34px;\n  line-height: 1.15;\n  padding: 0 20px;\n\n  @media screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2(_templateObject());
var PostsTagsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var TagText = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var LinkTag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject4());
var MoreLink = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject5());

var Home = function Home(_ref) {
  var _ref$recentPosts = _ref.recentPosts,
      recentPosts = _ref$recentPosts === void 0 ? [] : _ref$recentPosts,
      _ref$tags = _ref.tags,
      tags = _ref$tags === void 0 ? [] : _ref$tags,
      postsCount = _ref.postsCount;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_5__[/* default */ "a"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, "Bible Answers | Explaining and Defending the Christian Worldview"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("script", {
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
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(PostsTagsContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    style: {
      padding: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, "Recent posts"), recentPosts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTag, {
      key: post.url,
      href: post.url
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListItem__WEBPACK_IMPORTED_MODULE_6__[/* default */ "a"], post));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MoreLink, {
    href: "all-posts"
  }, "All ", postsCount, " posts"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__[/* default */ "a"], {
    style: {
      width: "initial"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, {
    style: {
      padding: 0
    }
  }, "Tags"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("ul", null, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTag, {
      key: tag.url,
      href: tag.url
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TagText, null, tag.title, " (", tag.posts_count, ")")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(MoreLink, {
    href: "/posts-in-progress"
  }, "Posts in progress"))));
};

Home.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://bibleanswersapi.herokuapp.com/homefetch");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            recentPosts: data.recent_posts,
            tags: data.tags,
            postsCount: data.posts_count
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),
/* 19 */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ })
/******/ ]);