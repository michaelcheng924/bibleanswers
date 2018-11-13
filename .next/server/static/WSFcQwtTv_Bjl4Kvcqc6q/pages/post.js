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
/******/ 	return __webpack_require__(__webpack_require__.s = 12);
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
/* 4 */,
/* 5 */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),
/* 6 */
/***/ (function(module, exports) {

module.exports = require("next/head");

/***/ }),
/* 7 */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),
/* 8 */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),
/* 9 */,
/* 10 */,
/* 11 */,
/* 12 */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(20);


/***/ }),
/* 13 */
/***/ (function(module, exports) {

module.exports = require("react-amphtml/helpers");

/***/ }),
/* 14 */,
/* 15 */,
/* 16 */,
/* 17 */,
/* 18 */,
/* 19 */,
/* 20 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);

// EXTERNAL MODULE: external "@babel/runtime/regenerator"
var regenerator_ = __webpack_require__(5);
var regenerator_default = /*#__PURE__*/__webpack_require__.n(regenerator_);

// EXTERNAL MODULE: external "react"
var external_react_ = __webpack_require__(0);
var external_react_default = /*#__PURE__*/__webpack_require__.n(external_react_);

// EXTERNAL MODULE: external "next/head"
var head_ = __webpack_require__(6);
var head_default = /*#__PURE__*/__webpack_require__.n(head_);

// EXTERNAL MODULE: external "styled-components"
var external_styled_components_ = __webpack_require__(1);
var external_styled_components_default = /*#__PURE__*/__webpack_require__.n(external_styled_components_);

// EXTERNAL MODULE: external "react-amphtml"
var external_react_amphtml_ = __webpack_require__(2);

// EXTERNAL MODULE: external "react-amphtml/helpers"
var helpers_ = __webpack_require__(13);

// EXTERNAL MODULE: external "isomorphic-unfetch"
var external_isomorphic_unfetch_ = __webpack_require__(7);
var external_isomorphic_unfetch_default = /*#__PURE__*/__webpack_require__.n(external_isomorphic_unfetch_);

// CONCATENATED MODULE: ./components/ReadingContainer.js

/* harmony default export */ var ReadingContainer = (function (_ref) {
  var children = _ref.children;
  return external_react_default.a.createElement("div", {
    style: {
      margin: "0 auto 20px",
      maxWidth: 740,
      padding: "0 20px"
    }
  }, children);
});
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
function _templateObject8() {
  var data = TitleSection_taggedTemplateLiteral(["\n  display: block;\n  font-size: 35px;\n  letter-spacing: 0.6em;\n  text-align: center;\n"]);

  _templateObject8 = function _templateObject8() {
    return data;
  };

  return data;
}

function _templateObject7() {
  var data = TitleSection_taggedTemplateLiteral(["\n  width: 100%;\n"]);

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





var TitleSection = external_styled_components_default.a.div(TitleSection_templateObject());
var TitleInfoContainer = external_styled_components_default.a.div(TitleSection_templateObject2());
var TitleInfo = external_styled_components_default.a.div(TitleSection_templateObject3());
var TitleText = external_styled_components_default.a.h1(TitleSection_templateObject4());
var Subtitle = external_styled_components_default.a.div(TitleSection_templateObject5());
var CoverImageContainer = external_styled_components_default.a.div(_templateObject6());
var StyledAmpImg = external_styled_components_default()(external_react_amphtml_["AmpImg"])(_templateObject7());
var Divider = external_styled_components_default.a.div(_templateObject8());
/* harmony default export */ var components_TitleSection = (function (_ref) {
  var title = _ref.title,
      subtitle = _ref.subtitle,
      image_url = _ref.image_url,
      date_added = _ref.date_added,
      _ref$user = _ref.user,
      user = _ref$user === void 0 ? {} : _ref$user;
  return external_react_default.a.createElement(TitleSection, null, external_react_default.a.createElement(TitleInfoContainer, null, external_react_default.a.createElement(TitleInfo, null, external_react_default.a.createElement(TitleText, null, title), external_react_default.a.createElement(Subtitle, null, subtitle || "Help us write this article!"), external_react_default.a.createElement(components_Author, {
    date_added: date_added,
    image: user.image,
    name: user.name
  }), external_react_default.a.createElement(Divider, null, "..."))), external_react_default.a.createElement(CoverImageContainer, null, external_react_default.a.createElement(StyledAmpImg, {
    specName: "default",
    src: image_url || "https://i.imgur.com/SmPYB60.png",
    width: "1200",
    height: "400",
    layout: "responsive",
    alt: "AMP"
  })));
});
// CONCATENATED MODULE: ./pages/post.js


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function post_templateObject3() {
  var data = post_taggedTemplateLiteral(["\n  position: relative;\n  min-height: 2rem;\n"]);

  post_templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function post_templateObject2() {
  var data = post_taggedTemplateLiteral(["\n  filter: ", ";\n"]);

  post_templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function post_templateObject() {
  var data = post_taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n"]);

  post_templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function post_taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Container = external_styled_components_default.a.div(post_templateObject());
var post_StyledAmpImg = external_styled_components_default()(external_react_amphtml_["AmpImg"])(post_templateObject2(), function (props) {
  switch (props["data-filter"]) {
    case 1:
      return "blur(10px)";

    case 2:
      return "hue-rotate(180deg)";

    case 3:
      return "invert(100%)";

    case 4:
      return "grayscale(100%)";

    case 5:
      return "sepia(100%)";

    case 6:
      return "saturate(100%)";

    default:
      return "none";
  }
});
var RelativeAmpList = external_styled_components_default()(external_react_amphtml_["AmpList"])(post_templateObject3());
var defaultHeading = {
  text: "Hello, World!"
};

var post_Post = function Post(_ref) {
  var post = _ref.post;

  if (!post) {
    return [external_react_default.a.createElement("h1", null, "Post not found"), external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
      href: "https://bibleanswers.io"
    }, "Bible Answers Home"))];
  }

  return external_react_default.a.createElement(Container, null, external_react_default.a.createElement(head_default.a, null, external_react_default.a.createElement("title", null, post.title, " | Bible Answers")), external_react_default.a.createElement(components_TitleSection, post), external_react_default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: post.html
    }
  }), external_react_default.a.createElement("h1", null, "Hacker News"), external_react_default.a.createElement(RelativeAmpList, {
    specName: "default",
    src: "https://www.graphqlhub.com/graphql?query=".concat(encodeURIComponent("\n              {\n                hn {\n                  topStories {\n                    id\n                    title\n                    score\n                    descendants\n                  }\n                }\n              }\n            ")),
    items: "data.hn.topStories",
    layout: "fill"
  }, external_react_default.a.createElement(external_react_amphtml_["Template"], {
    specName: "default",
    type: "amp-mustache"
  }, external_react_default.a.createElement("div", null, external_react_default.a.createElement("a", {
    href: "https://news.ycombinator.com/item?id={{id}}",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "{{title}} ⭐ {{score}} 💬 {{descendants}}")))));
};

post_Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  regenerator_default.a.mark(function _callee(_ref2) {
    var query, res, data;
    return regenerator_default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            _context.next = 3;
            return external_isomorphic_unfetch_default()("http://bibleanswersapi.herokuapp.com/posts/".concat(query.slug));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", {
              post: data
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

/* harmony default export */ var pages_post = __webpack_exports__["default"] = (post_Post);

/***/ })
/******/ ]);