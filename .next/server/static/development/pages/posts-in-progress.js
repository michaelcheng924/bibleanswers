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
/******/ 	return __webpack_require__(__webpack_require__.s = 4);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
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

/* harmony default export */ __webpack_exports__["default"] = (Container);

/***/ }),

/***/ "./components/ListItem.js":
/*!********************************!*\
  !*** ./components/ListItem.js ***!
  \********************************/
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

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

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
      width: "100%",
      padding: "0 20px"
    }, style)
  }, children);
});

/***/ }),

/***/ "./pages/posts-in-progress.js":
/*!************************************!*\
  !*** ./pages/posts-in-progress.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject7() {
  var data = _taggedTemplateLiteral(["\n  border: 1px solid rgba(0, 0, 0, 0.54);\n  border-radius: 3px;\n  font-size: 16px;\n  margin: 0 10px 10px 0;\n  padding: 5px 10px;\n  width: 150px;\n"]);

  _templateObject7 = function _templateObject7() {
    return data;
  };

  return data;
}

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n  margin-top: 8px;\n  padding: 0 20px;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  color: #689f38;\n  display: block;\n  font-size: 16px;\n  text-decoration: none;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 35px;\n  letter-spacing: 0.6em;\n  text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 26px;\n  line-height: 1.22;\n  margin: 0;\n  margin-top: 30px;\n  padding: 0 20px;\n\n  @media screen and (max-width: 768px) {\n    font-size: 24px;\n    margin-top: 22px;\n  }\n"]);

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







var Title = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h1(_templateObject());
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.h2(_templateObject2());
var Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var LinkTag = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.a(_templateObject5());
var TagsJumpContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject6());
var TagJump = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject7());

var AllPosts = function AllPosts(_ref) {
  var _ref$tags = _ref.tags,
      tags = _ref$tags === void 0 ? [] : _ref$tags,
      posts_count = _ref.posts_count;
  var title = "".concat(posts_count, " Bible Questions and Answers In Progress) | Bible Answers");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    type: "description",
    content: "All ".concat(posts_count, " of Bible Answers's questions and answers that are in progress. Learn about and defend the Bible with these questions and answers about a wide range of categories.")
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      marginBottom: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, posts_count, " Bible Questions and Answers (In Progress)"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Subtitle, null, "Browse all of our questions and answers that are in progress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null, "...")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "top"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, null, "Tags")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TagsJumpContainer, null, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTag, {
      key: tag.url,
      href: "#".concat(tag.url)
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TagJump, null, tag.title, " (", tag.posts.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_5__["default"], {
    style: {
      padding: 0
    }
  }, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: tag.url
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      id: tag.url
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, null, tag.title, " (", tag.posts.length, ")", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTag, {
      href: "#top",
      style: {
        fontSize: 13,
        display: "inline-block"
      }
    }, "Back to top"))), tag.posts.map(function (post) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTag, {
        href: post.url,
        key: post.url,
        style: {
          padding: "0 20px",
          marginTop: 10
        }
      }, post.title);
    }));
  })));
};

AllPosts.getInitialProps =
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
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("http://bibleanswersapi.herokuapp.com/tags_for_unfinished");

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", {
              tags: data.tags,
              posts_count: data.posts_count
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

/* harmony default export */ __webpack_exports__["default"] = (AllPosts);

/***/ }),

/***/ 4:
/*!******************************************!*\
  !*** multi ./pages/posts-in-progress.js ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/posts-in-progress.js */"./pages/posts-in-progress.js");


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

/***/ })

/******/ });
//# sourceMappingURL=posts-in-progress.js.map