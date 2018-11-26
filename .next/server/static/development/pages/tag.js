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

/***/ "./components/BibleContradictions.js":
/*!*******************************************!*\
  !*** ./components/BibleContradictions.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/contradictions */ "./constants/contradictions/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/GlobalStyle */ "./components/GlobalStyle.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  margin-top: 10px;\n  width: 150px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n  flex-wrap: wrap;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }











var linkCount = 0;
var answerCount = 0;
var TableContentsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var TableContentsItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());

function boldNumbers(text) {
  var splitText = text.split(" ");
  var mappedText = splitText.map(function (word) {
    if (parseInt(word) < 100) {
      return "<strong>".concat(word, "</strong>");
    }

    return word;
  });
  return mappedText.join(" ");
}

function renderPassage(passage, index) {
  var text = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isArray"])(passage.text) ? passage.text.map(function (paragraph, index1) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: index1,
      className: "first",
      dangerouslySetInnerHTML: {
        __html: boldNumbers(paragraph)
      }
    });
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "first",
    dangerouslySetInnerHTML: {
      __html: boldNumbers(passage.text)
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("blockquote", {
    className: index === 0 ? "first" : ""
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, passage.passage), text));
}

function renderLink(_ref) {
  var index = _ref.index,
      book = _ref.book,
      bookVerses = _ref.bookVerses,
      count = _ref.count,
      question = _ref.question;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: index,
    style: {
      marginTop: 10
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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
      question = _ref2.question,
      allPassages = _ref2.allPassages,
      quickAnswer = _ref2.quickAnswer,
      fullPost = _ref2.fullPost,
      count = _ref2.count;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    key: index
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#top",
    style: {
      display: "inline-block",
      marginTop: 28
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), " Top"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "#".concat(book),
    id: "".concat(book, "_").concat(bookVerses),
    style: {
      display: "inline-block",
      marginLeft: 20,
      marginTop: 28
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), " ", book), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
    className: "nomargin",
    dangerouslySetInnerHTML: {
      __html: "".concat(count, ") ").concat(bookVerses, " - ").concat(question)
    }
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
    className: "first"
  }, "Quick answer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, quickAnswer), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Full post: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: fullPost
  }, question)))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Passages"), allPassages.map(function (passageGroup, index) {
    if (passageGroup.heading !== undefined) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: index === 0 ? "first" : ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, passageGroup.heading)), passageGroup.passages.map(function (passage, index1) {
        return renderPassage(passage, index1);
      }));
    }

    return renderPassage(passageGroup, index);
  }));
}

var BibleContradictions = function BibleContradictions(_ref3) {
  var url = _ref3.url,
      title = _ref3.title,
      subtitle = _ref3.subtitle,
      description = _ref3.description,
      image_url = _ref3.image_url,
      date_added = _ref3.date_added,
      updated_at = _ref3.updated_at,
      _ref3$posts = _ref3.posts,
      posts = _ref3$posts === void 0 ? [] : _ref3$posts,
      _ref3$user = _ref3.user,
      user = _ref3$user === void 0 ? {} : _ref3$user;
  var numbers = _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].reduce(function (result, book) {
    book.answers.forEach(function (answer) {
      result.total++;

      if (!answer.quickAnswer) {
        result.noQuickAnswer++;
      }

      if (!answer.fullPost) {
        result.noFullPost++;
      }
    });
    return result;
  }, {
    total: 0,
    noQuickAnswer: 0,
    noFullPost: 0
  });
  var pageTitle = "Bible \"Contradictions\": Explanations for Every (".concat(numbers.total, ") alleged \"contradiction\" in the Bible");
  var datePublished = date_added ? new Date(date_added) : new Date();
  var AmpGlobalStyle = Object(_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_8__["createAmpGlobalStyle"])();
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_6__["AmpContainer"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_1___default.a, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, pageTitle, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    name: "description",
    content: description
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:url",
    content: "https://bibleanswers.io".concat(url)
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:title",
    content: title
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:description",
    content: description
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("meta", {
    property: "og:image",
    content: image_url
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("script", {
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
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AmpGlobalStyle, null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_7__["AmpTitleSection"], {
    title: pageTitle,
    subtitle: subtitle,
    image_url: image_url,
    date_added: date_added,
    user: user
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "writing"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Work in progress!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This page is still a work in progress. Please check back to see updates!"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Numbers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "no quick answer: ", numbers.noQuickAnswer), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "no full post: ", numbers.noFullPost), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Introduction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Opponents of the Bible claim that it contains numerous irreconcilable contradictions. However, none of the \"alleged\" contradictions in the Bible are truly irreconcilable."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The purpose of this page is to be a comprehensive response to every alleged \"contradiction\" in the Bible."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    id: "top",
    style: {
      color: "rgba(0, 0, 0, .84)"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Table of contents")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Old Testament"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableContentsContainer, null, _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].slice(0, 39).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableContentsItem, {
      key: book.book
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#".concat(book.book),
      id: "top-".concat(book.book)
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "New Testament"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableContentsContainer, null, _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].slice(39).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(TableContentsItem, {
      key: book.book
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#".concat(book.book),
      id: "top-".concat(book.book)
    }, book.book, " (", book.answers.length, ")"));
  })), _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#top",
      id: book.book,
      style: {
        display: "flex",
        alignItems: "center",
        marginTop: 28
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), "\xA0Top"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", {
      key: book.book,
      className: "nomargin",
      style: {
        borderBottom: "1px solid rgba(0, 0, 0, .54)"
      }
    }, book.book), book.answers.map(function (answer, index) {
      linkCount++;

      if (answer.see) {
        var _book = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"], function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });

        var foundAnswer = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_book.answers, function (answerData) {
          return answerData.bookVerses === answer.see[1];
        });
        return renderLink({
          index: index,
          book: _book.book,
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
        var _book2 = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"], function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });

        var foundAnswer = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_book2.answers, function (answerData) {
          return answerData.bookVerses === answer.see[1];
        });
        return renderAnswer(_objectSpread({
          index: index,
          book: _book2.book
        }, foundAnswer, {
          bookVerses: answer.bookVerses,
          count: answerCount
        }));
      }

      return renderAnswer(_objectSpread({
        index: index,
        book: book.book
      }, answer, {
        count: answerCount
      }));
    }));
  }))));
};

/* harmony default export */ __webpack_exports__["default"] = (BibleContradictions);

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
  var data = _taggedTemplateLiteral(["\n  .writing h3 {\n    font-size: 34px;\n    line-height: 1.15;\n    margin: 0;\n    margin-top: 56px;\n  }\n  \n  .writing h4 {\n    font-size: 26px;\n    line-height: 1.22;\n    margin: 0;\n    margin-top: 30px;\n  }\n  \n  .writing h3 + p,\n  .writing h3 + ol,\n  .writing h3 + ul,\n  .writing h3 + blockquote,\n  .writing h4 + p,\n  .writing h4 + ol,\n  .writing h4 + ul,\n  .writing h4 + blockquote {\n    margin-top: 8px;\n  }\n  \n  .writing p,\n  .writing ol,\n  .writing ul,\n  .writing blockquote {\n    font-size: 21px;\n    line-height: 1.58;\n    margin: 0;\n    margin-top: 29px;\n  }\n  \n  .writing ol,\n  .writing ul {\n    padding: 0 40px;\n  }\n  \n  .writing li {\n    margin-bottom: 10px;\n  }\n  \n  .writing li:last-child {\n    margin-bottom: 0;\n  }\n  \n  .writing blockquote {\n    border-left: 3px solid rgba(0, 0, 0, .84);\n    font-style: italic;\n    left: -20px;\n    padding-left: 20px;\n    position: relative;\n  }\n  \n  .writing .first {\n    margin-top: 8px;\n  }\n  \n  .writing .nomargin {\n    margin-top: 0;\n  }\n  \n  .writing .indent {\n    margin-left: 20px;\n  }\n  \n  .writing .image {\n    margin-top: 29px;\n  }\n  \n  .writing .image-left {\n    float: left;\n    margin-right: 20px;\n  }\n  \n  .writing .image-right {\n    float: right;\n    margin-left: 20px;\n  }\n  \n  .writing a {\n    color: #689f38;\n    text-decoration: none;\n  }\n  \n  .writing .reference {\n    font-size: 14px;\n    margin-left: 2px;\n    position: relative;\n    top: -5px;\n  }\n\n  .divider {\n    display: block;\n    font-size: 35px;\n    letter-spacing: 0.6em;\n    text-align: center;\n  }\n  \n  @media screen and (max-width: 768px) {\n    .writing h3 {\n      font-size: 30px;\n      margin-top: 28px;\n    }\n  \n    .writing h4 {\n      font-size: 24px;\n      margin-top: 22px;\n    }\n  \n    .writing p,\n    .writing ol {\n      font-size: 18px;\n      margin-top: 21px;\n    }\n  \n    .writing blockquote {\n      font-size: 18px;\n      margin-top: 21px;\n    }\n  \n    .writing .image {\n      margin-top: 21px;\n    }\n  }\n\n  ", "\n  "]);

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

/***/ "./components/ListItem.js":
/*!********************************!*\
  !*** ./components/ListItem.js ***!
  \********************************/
/*! exports provided: AmpListItem, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpListItem", function() { return AmpListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
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
    css: ".list-item-container.jsx-3189911355{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}.list-item-container.jsx-3189911355:hover{background:#eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmdCLEFBRzRCLEFBVUgsZ0JBQ2xCLDZFQVZpQixlQUNGLDBFQUNpQixtSEFDWCxtQkFDRCxrQkFDRyxrREFDdkIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmNvbnN0IEFtcExpc3RJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtU3VidGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuYDtcblxuY29uc3QgQW1wTGlzdEl0ZW1EYXRlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiA4cHg7XG5gO1xuXG5jb25zdCBBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogODBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jbGFzcyBBbXBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFtcExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvQW1wTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8QW1wTGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9BbXBMaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxBbXBMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0FtcExpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgc3JjPXtpbWFnZV91cmxfc21hbGx9XG4gICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjgwXCJcbiAgICAgICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvQW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBMaXN0SXRlbUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmxpc3QtaXRlbS1jb250YWluZXI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS10aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1zdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RJdGVtRGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZGF0ZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1kYXRlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEFuc3dlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hbnN3ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8TGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9MaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0xpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlX3VybF9zbWFsbH1cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDgwLCB3aWR0aDogODAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Fuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgPC9MaXN0SXRlbUNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEFtcExpc3RJdGVtLCBMaXN0SXRlbSB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ListItem.js */"
  }));
};

var ListItemTitle = function ListItemTitle(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2566256794" + " " + "list-item-title"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2566256794",
    css: ".list-item-title.jsx-2566256794{color:rgba(0,0,0,0.84);font-size:20px;font-weight:600;line-height:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR2dCLEFBR21DLHVCQUNYLGVBQ0MsZ0JBQ0MsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIEFtcCBmcm9tIFwicmVhY3QtYW1waHRtbFwiO1xuXG5jb25zdCBBbXBMaXN0SXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB9XG5gO1xuXG5jb25zdCBBbXBMaXN0SXRlbVRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG5gO1xuXG5jb25zdCBBbXBMaXN0SXRlbVN1YnRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtRGF0ZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXRvcDogOHB4O1xuYDtcblxuY29uc3QgQW1wQW5zd2VySW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDgwcHg7XG5gO1xuXG5jb25zdCBTdHlsZWRBbXBJbWcgPSBzdHlsZWQoQW1wLkFtcEltZylgXG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY2xhc3MgQW1wTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRlX2FkZGVkLCBpbWFnZV91cmxfc21hbGwsIHN1YnRpdGxlLCB0aXRsZSwgbm9BbXAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFtcExpc3RJdGVtQ29udGFpbmVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBbXBMaXN0SXRlbVRpdGxlPnt0aXRsZX08L0FtcExpc3RJdGVtVGl0bGU+XG4gICAgICAgICAgPEFtcExpc3RJdGVtU3VidGl0bGU+e3N1YnRpdGxlfTwvQW1wTGlzdEl0ZW1TdWJ0aXRsZT5cbiAgICAgICAgICA8QW1wTGlzdEl0ZW1EYXRlPlxuICAgICAgICAgICAge2RhdGVfYWRkZWRcbiAgICAgICAgICAgICAgPyBtb21lbnQobmV3IERhdGUoZGF0ZV9hZGRlZCkpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKVxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPC9BbXBMaXN0SXRlbURhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QW1wQW5zd2VySW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICAgICAgc3BlY05hbWU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIHNyYz17aW1hZ2VfdXJsX3NtYWxsfVxuICAgICAgICAgICAgd2lkdGg9XCI4MFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI4MFwiXG4gICAgICAgICAgICBhbHQ9XCJBTVBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQW1wQW5zd2VySW1hZ2VDb250YWluZXI+XG4gICAgICA8L0FtcExpc3RJdGVtQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgTGlzdEl0ZW1Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5saXN0LWl0ZW0tY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTGlzdEl0ZW1UaXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tdGl0bGVcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saXN0LWl0ZW0tdGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTGlzdEl0ZW1TdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tc3VidGl0bGVcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saXN0LWl0ZW0tc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbURhdGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWRhdGVcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saXN0LWl0ZW0tZGF0ZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBBbnN3ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItaW1hZ2UtY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYW5zd2VyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRlX2FkZGVkLCBpbWFnZV91cmxfc21hbGwsIHN1YnRpdGxlLCB0aXRsZSwgbm9BbXAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RJdGVtQ29udGFpbmVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaXN0SXRlbVRpdGxlPnt0aXRsZX08L0xpc3RJdGVtVGl0bGU+XG4gICAgICAgICAgPExpc3RJdGVtU3VidGl0bGU+e3N1YnRpdGxlfTwvTGlzdEl0ZW1TdWJ0aXRsZT5cbiAgICAgICAgICA8TGlzdEl0ZW1EYXRlPlxuICAgICAgICAgICAge2RhdGVfYWRkZWRcbiAgICAgICAgICAgICAgPyBtb21lbnQobmV3IERhdGUoZGF0ZV9hZGRlZCkpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKVxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPC9MaXN0SXRlbURhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QW5zd2VySW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtpbWFnZV91cmxfc21hbGx9XG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA4MCwgd2lkdGg6IDgwIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvTGlzdEl0ZW1Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBBbXBMaXN0SXRlbSwgTGlzdEl0ZW0gfTtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ListItem.js */"
  }));
};

var ListItemSubtitle = function ListItemSubtitle(_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-544464814" + " " + "list-item-subtitle"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "544464814",
    css: ".list-item-subtitle.jsx-544464814{color:rgba(0,0,0,0.54);font-size:16px;line-height:20px;margin-top:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SGdCLEFBR21DLHVCQUNYLGVBQ0UsaUJBQ0YsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmNvbnN0IEFtcExpc3RJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtU3VidGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuYDtcblxuY29uc3QgQW1wTGlzdEl0ZW1EYXRlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiA4cHg7XG5gO1xuXG5jb25zdCBBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogODBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jbGFzcyBBbXBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFtcExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvQW1wTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8QW1wTGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9BbXBMaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxBbXBMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0FtcExpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgc3JjPXtpbWFnZV91cmxfc21hbGx9XG4gICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjgwXCJcbiAgICAgICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvQW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBMaXN0SXRlbUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmxpc3QtaXRlbS1jb250YWluZXI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS10aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1zdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RJdGVtRGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZGF0ZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1kYXRlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEFuc3dlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hbnN3ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8TGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9MaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0xpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlX3VybF9zbWFsbH1cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDgwLCB3aWR0aDogODAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Fuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgPC9MaXN0SXRlbUNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEFtcExpc3RJdGVtLCBMaXN0SXRlbSB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ListItem.js */"
  }));
};

var ListItemDate = function ListItemDate(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1809973229" + " " + "list-item-date"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1809973229",
    css: ".list-item-date.jsx-1809973229{color:rgba(0,0,0,0.54);font-size:12px;font-style:italic;margin-top:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSWdCLEFBR21DLHVCQUNYLGVBQ0csa0JBQ0gsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmNvbnN0IEFtcExpc3RJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtU3VidGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuYDtcblxuY29uc3QgQW1wTGlzdEl0ZW1EYXRlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiA4cHg7XG5gO1xuXG5jb25zdCBBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogODBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jbGFzcyBBbXBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFtcExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvQW1wTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8QW1wTGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9BbXBMaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxBbXBMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0FtcExpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgc3JjPXtpbWFnZV91cmxfc21hbGx9XG4gICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjgwXCJcbiAgICAgICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvQW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBMaXN0SXRlbUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmxpc3QtaXRlbS1jb250YWluZXI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS10aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1zdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RJdGVtRGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZGF0ZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1kYXRlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEFuc3dlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hbnN3ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8TGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9MaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0xpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlX3VybF9zbWFsbH1cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDgwLCB3aWR0aDogODAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Fuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgPC9MaXN0SXRlbUNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEFtcExpc3RJdGVtLCBMaXN0SXRlbSB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ListItem.js */"
  }));
};

var AnswerImageContainer = function AnswerImageContainer(_ref5) {
  var children = _ref5.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-697107138" + " " + "answer-image-container"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "697107138",
    css: ".answer-image-container.jsx-697107138{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:80px;margin-left:20px;overflow:hidden;width:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSmdCLEFBR3VCLHdEQUNGLFlBQ0ssaUJBQ0QsZ0JBQ0wsV0FDYiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL2NvbXBvbmVudHMvTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBBbXAgZnJvbSBcInJlYWN0LWFtcGh0bWxcIjtcblxuY29uc3QgQW1wTGlzdEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgfVxuYDtcblxuY29uc3QgQW1wTGlzdEl0ZW1UaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuYDtcblxuY29uc3QgQW1wTGlzdEl0ZW1TdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG5gO1xuXG5jb25zdCBBbXBMaXN0SXRlbURhdGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi10b3A6IDhweDtcbmA7XG5cbmNvbnN0IEFtcEFuc3dlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA4MHB4O1xuYDtcblxuY29uc3QgU3R5bGVkQW1wSW1nID0gc3R5bGVkKEFtcC5BbXBJbWcpYFxuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNsYXNzIEFtcExpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0ZV9hZGRlZCwgaW1hZ2VfdXJsX3NtYWxsLCBzdWJ0aXRsZSwgdGl0bGUsIG5vQW1wIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBbXBMaXN0SXRlbUNvbnRhaW5lcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QW1wTGlzdEl0ZW1UaXRsZT57dGl0bGV9PC9BbXBMaXN0SXRlbVRpdGxlPlxuICAgICAgICAgIDxBbXBMaXN0SXRlbVN1YnRpdGxlPntzdWJ0aXRsZX08L0FtcExpc3RJdGVtU3VidGl0bGU+XG4gICAgICAgICAgPEFtcExpc3RJdGVtRGF0ZT5cbiAgICAgICAgICAgIHtkYXRlX2FkZGVkXG4gICAgICAgICAgICAgID8gbW9tZW50KG5ldyBEYXRlKGRhdGVfYWRkZWQpKS5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIilcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDwvQW1wTGlzdEl0ZW1EYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFtcEFuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgICAgIDxTdHlsZWRBbXBJbWdcbiAgICAgICAgICAgIHNwZWNOYW1lPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICBzcmM9e2ltYWdlX3VybF9zbWFsbH1cbiAgICAgICAgICAgIHdpZHRoPVwiODBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiODBcIlxuICAgICAgICAgICAgYWx0PVwiQU1QXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0FtcEFuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgPC9BbXBMaXN0SXRlbUNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IExpc3RJdGVtQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saXN0LWl0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAubGlzdC1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RJdGVtVGl0bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLXRpdGxlXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RJdGVtU3VidGl0bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLXN1YnRpdGxlXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLXN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTGlzdEl0ZW1EYXRlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1kYXRlXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLWRhdGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQW5zd2VySW1hZ2VDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmFuc3dlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNsYXNzIExpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0ZV9hZGRlZCwgaW1hZ2VfdXJsX3NtYWxsLCBzdWJ0aXRsZSwgdGl0bGUsIG5vQW1wIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SXRlbUNvbnRhaW5lcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGlzdEl0ZW1UaXRsZT57dGl0bGV9PC9MaXN0SXRlbVRpdGxlPlxuICAgICAgICAgIDxMaXN0SXRlbVN1YnRpdGxlPntzdWJ0aXRsZX08L0xpc3RJdGVtU3VidGl0bGU+XG4gICAgICAgICAgPExpc3RJdGVtRGF0ZT5cbiAgICAgICAgICAgIHtkYXRlX2FkZGVkXG4gICAgICAgICAgICAgID8gbW9tZW50KG5ldyBEYXRlKGRhdGVfYWRkZWQpKS5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIilcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDwvTGlzdEl0ZW1EYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17aW1hZ2VfdXJsX3NtYWxsfVxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogODAsIHdpZHRoOiA4MCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQW5zd2VySW1hZ2VDb250YWluZXI+XG4gICAgICA8L0xpc3RJdGVtQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQW1wTGlzdEl0ZW0sIExpc3RJdGVtIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ListItem.js */"
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
    css: ".title-section.jsx-3214516492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 65px;}@media screen and (max-width:1199px){.title-section.jsx-3214516492{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUlnQixBQUdzQixBQU1XLDBFQUxWLElBTUgsU0FDWCxDQU5GIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm9Db250YWluZXI+XG4gICAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgICAgPFRpdGxlVGV4dD57dGl0bGV9PC9UaXRsZVRleHQ+XG4gICAgICAgICAgPFN1YnRpdGxlPntzdWJ0aXRsZSB8fCBcIkhlbHAgdXMgd3JpdGUgdGhpcyBhcnRpY2xlIVwifTwvU3VidGl0bGU+XG5cbiAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgIDxBdXRob3JcbiAgICAgICAgICAgICAgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH1cbiAgICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICAgIG5hbWU9e3VzZXIubmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8RGl2aWRlcj4uLi48L0RpdmlkZXI+XG4gICAgICAgIDwvVGl0bGVJbmZvPlxuICAgICAgPC9UaXRsZUluZm9Db250YWluZXI+XG4gICAgICA8Q292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgICA8L0NvdmVySW1hZ2VDb250YWluZXI+XG4gICAgPC9UaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBBbXBUaXRsZVNlY3Rpb24sIFRpdGxlU2VjdGlvbiB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleInfoContainer = function TitleInfoContainer(_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2927809135" + " " + "title-info-container"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2927809135",
    css: ".title-info-container.jsx-2927809135{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:calc(50% - 10px);}@media screen and (max-width:1199px){.title-info-container.jsx-2927809135{margin:30px auto 0;max-width:740px;width:calc(100% - 40px);}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc0pnQixBQUc0QixBQU9FLG1CQUNILGdCQUNRLHdCQUMxQixrQ0FUYSwwRUFDVSx1QkFDekIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL1RpdGxlU2VjdGlvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBBbXAgZnJvbSBcInJlYWN0LWFtcGh0bWxcIjtcblxuaW1wb3J0IEF1dGhvciBmcm9tIFwiLi9BdXRob3JcIjtcblxuY29uc3QgQW1wVGl0bGVTZWN0aW9uQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luOiAwIDY1cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICBtYXJnaW46IDA7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlSW5mb0NvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gICAgbWF4LXdpZHRoOiA3NDBweDtcbiAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlSW5mbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICBtYXgtd2lkdGg6IDU1MnB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1heC13aWR0aDogbm9uZTtcbiAgICBwYWRkaW5nOiAwO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVRleHQgPSBzdHlsZWQuaDFgXG4gIGZvbnQtc2l6ZTogNTZweDtcbiAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gIG1hcmdpbjogMDtcbiAgbWFyZ2luLWJvdHRvbTogMTZweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBmb250LXNpemU6IDM2cHg7XG4gICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFN1YnRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMjNweDtcbiAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gIG1hcmdpbi1ib3R0b206IDMwcHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAyMHB4O1xuICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcENvdmVySW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgbWF4LWhlaWdodDogNDAwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgIG9yZGVyOiAtMTtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgU3R5bGVkQW1wSW1nID0gc3R5bGVkKEFtcC5BbXBJbWcpYFxuICBiYWNrZ3JvdW5kLXBvc2l0aW9uOiBjZW50ZXI7XG4gIHdpZHRoOiAxMDAlO1xuYDtcblxuY29uc3QgQW1wRGl2aWRlciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IG5vbmU7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZGlzcGxheTogYmxvY2s7XG4gICAgZm9udC1zaXplOiAzNXB4O1xuICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2VfdXJsLCBkYXRlX2FkZGVkLCB1c2VyIH0pID0+IChcbiAgPEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgICA8QW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgICAgPEFtcFRpdGxlSW5mbz5cbiAgICAgICAgPEFtcFRpdGxlVGV4dD57dGl0bGV9PC9BbXBUaXRsZVRleHQ+XG4gICAgICAgIDxBbXBTdWJ0aXRsZT57c3VidGl0bGUgfHwgXCJIZWxwIHVzIHdyaXRlIHRoaXMgYXJ0aWNsZSFcIn08L0FtcFN1YnRpdGxlPlxuXG4gICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgIDxBdXRob3IgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH0gaW1hZ2U9e3VzZXIuaW1hZ2V9IG5hbWU9e3VzZXIubmFtZX0gLz5cbiAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgPEFtcERpdmlkZXI+Li4uPC9BbXBEaXZpZGVyPlxuICAgICAgPC9BbXBUaXRsZUluZm8+XG4gICAgPC9BbXBUaXRsZUluZm9Db250YWluZXI+XG4gICAgPEFtcENvdmVySW1hZ2VDb250YWluZXI+XG4gICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgIHNwZWNOYW1lPVwiZGVmYXVsdFwiXG4gICAgICAgIHNyYz17aW1hZ2VfdXJsIHx8IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9TbVBZQjYwLnBuZ1wifVxuICAgICAgICB3aWR0aD1cIjEyMDBcIlxuICAgICAgICBoZWlnaHQ9XCI0MDBcIlxuICAgICAgICBsYXlvdXQ9XCJyZXNwb25zaXZlXCJcbiAgICAgICAgYWx0PVwiQU1QXCJcbiAgICAgIC8+XG4gICAgPC9BbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICA8L0FtcFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1zZWN0aW9uXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luOiAwIDY1cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgICAgZmxleC1kaXJlY3Rpb246IGNvbHVtbjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVJbmZvQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWluZm8tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgICAgICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgICAgICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mbyA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS1pbmZvIHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gICAgICAgIG1heC13aWR0aDogNTUycHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiBub25lO1xuICAgICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVUZXh0ID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICBmb250LXNpemU6IDU2cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDE2cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNnB4O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInN1YnRpdGxlXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDIzcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA0MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBDb3ZlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImNvdmVyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG1heC1oZWlnaHQ6IDQwMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC1oZWlnaHQ6IDUwMHB4O1xuICAgICAgICAgIG9yZGVyOiAtMTtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBEaXZpZGVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImRpdmlkZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmRpdmlkZXIge1xuICAgICAgICBkaXNwbGF5OiBub25lO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlU2VjdGlvbiA9ICh7IHRpdGxlLCBzdWJ0aXRsZSwgaW1hZ2VfdXJsLCBkYXRlX2FkZGVkLCB1c2VyIH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8VGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICAgICAgPFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgICAgPFRpdGxlSW5mbz5cbiAgICAgICAgICA8VGl0bGVUZXh0Pnt0aXRsZX08L1RpdGxlVGV4dD5cbiAgICAgICAgICA8U3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9TdWJ0aXRsZT5cblxuICAgICAgICAgIHt1c2VyID8gKFxuICAgICAgICAgICAgPEF1dGhvclxuICAgICAgICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICAgICAgICBpbWFnZT17dXNlci5pbWFnZX1cbiAgICAgICAgICAgICAgbmFtZT17dXNlci5uYW1lfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogbnVsbH1cblxuICAgICAgICAgIDxEaXZpZGVyPi4uLjwvRGl2aWRlcj5cbiAgICAgICAgPC9UaXRsZUluZm8+XG4gICAgICA8L1RpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgICA8aW1nIHNyYz17aW1hZ2VfdXJsfSBzdHlsZT17eyB3aWR0aDogXCIxMDAlXCIgfX0gLz5cbiAgICAgIDwvQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICA8L1RpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCB7IEFtcFRpdGxlU2VjdGlvbiwgVGl0bGVTZWN0aW9uIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleInfo = function TitleInfo(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1249011680" + " " + "title-info"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1249011680",
    css: ".title-info.jsx-1249011680{margin-left:auto;max-width:552px;}@media screen and (max-width:1199px){.title-info.jsx-1249011680{margin-left:0;max-width:none;padding:0;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMktnQixBQUcwQixBQU1ELGNBQ0MsR0FORCxZQU9KLElBTmQsTUFPZSxXQUNiIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm9Db250YWluZXI+XG4gICAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgICAgPFRpdGxlVGV4dD57dGl0bGV9PC9UaXRsZVRleHQ+XG4gICAgICAgICAgPFN1YnRpdGxlPntzdWJ0aXRsZSB8fCBcIkhlbHAgdXMgd3JpdGUgdGhpcyBhcnRpY2xlIVwifTwvU3VidGl0bGU+XG5cbiAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgIDxBdXRob3JcbiAgICAgICAgICAgICAgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH1cbiAgICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICAgIG5hbWU9e3VzZXIubmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8RGl2aWRlcj4uLi48L0RpdmlkZXI+XG4gICAgICAgIDwvVGl0bGVJbmZvPlxuICAgICAgPC9UaXRsZUluZm9Db250YWluZXI+XG4gICAgICA8Q292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgICA8L0NvdmVySW1hZ2VDb250YWluZXI+XG4gICAgPC9UaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBBbXBUaXRsZVNlY3Rpb24sIFRpdGxlU2VjdGlvbiB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var TitleText = function TitleText(_ref5) {
  var children = _ref5.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2529258625" + " " + "title-text"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2529258625",
    css: ".title-text.jsx-2529258625{font-size:56px;font-weight:500;line-height:64px;margin:0;margin-bottom:16px;}@media screen and (max-width:1199px){.title-text.jsx-2529258625{font-size:36px;font-weight:500;line-height:40px;margin-bottom:8px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ01nQixBQUd3QixBQVNFLGVBUkQsQUFTRSxnQkFSRCxBQVNFLGlCQVJWLEFBU1csU0FSRCxTQVNuQixVQVJGIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm9Db250YWluZXI+XG4gICAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgICAgPFRpdGxlVGV4dD57dGl0bGV9PC9UaXRsZVRleHQ+XG4gICAgICAgICAgPFN1YnRpdGxlPntzdWJ0aXRsZSB8fCBcIkhlbHAgdXMgd3JpdGUgdGhpcyBhcnRpY2xlIVwifTwvU3VidGl0bGU+XG5cbiAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgIDxBdXRob3JcbiAgICAgICAgICAgICAgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH1cbiAgICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICAgIG5hbWU9e3VzZXIubmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8RGl2aWRlcj4uLi48L0RpdmlkZXI+XG4gICAgICAgIDwvVGl0bGVJbmZvPlxuICAgICAgPC9UaXRsZUluZm9Db250YWluZXI+XG4gICAgICA8Q292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgICA8L0NvdmVySW1hZ2VDb250YWluZXI+XG4gICAgPC9UaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBBbXBUaXRsZVNlY3Rpb24sIFRpdGxlU2VjdGlvbiB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var Subtitle = function Subtitle(_ref6) {
  var children = _ref6.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3750299911" + " " + "subtitle"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3750299911",
    css: ".subtitle.jsx-3750299911{color:rgba(0,0,0,0.54);font-size:23px;font-weight:400;line-height:28px;margin-bottom:30px;}@media screen and (max-width:1199px){.subtitle.jsx-3750299911{font-size:20px;line-height:24px;margin-bottom:10px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd05nQixBQUdtQyxBQVNULGVBQ0UsUUFUSixTQVVNLE1BVEwsYUFVaEIsR0FUaUIsaUJBQ0UsbUJBQ3JCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm9Db250YWluZXI+XG4gICAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgICAgPFRpdGxlVGV4dD57dGl0bGV9PC9UaXRsZVRleHQ+XG4gICAgICAgICAgPFN1YnRpdGxlPntzdWJ0aXRsZSB8fCBcIkhlbHAgdXMgd3JpdGUgdGhpcyBhcnRpY2xlIVwifTwvU3VidGl0bGU+XG5cbiAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgIDxBdXRob3JcbiAgICAgICAgICAgICAgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH1cbiAgICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICAgIG5hbWU9e3VzZXIubmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8RGl2aWRlcj4uLi48L0RpdmlkZXI+XG4gICAgICAgIDwvVGl0bGVJbmZvPlxuICAgICAgPC9UaXRsZUluZm9Db250YWluZXI+XG4gICAgICA8Q292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgICA8L0NvdmVySW1hZ2VDb250YWluZXI+XG4gICAgPC9UaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBBbXBUaXRsZVNlY3Rpb24sIFRpdGxlU2VjdGlvbiB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var CoverImageContainer = function CoverImageContainer(_ref7) {
  var children = _ref7.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2130314682" + " " + "cover-image-container"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2130314682",
    css: ".cover-image-container.jsx-2130314682{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:20px;max-height:400px;overflow:hidden;width:calc(50% - 10px);}@media screen and (max-width:1199px){.cover-image-container.jsx-2130314682{margin-left:0;max-height:500px;-webkit-order:-1;-ms-flex-order:-1;order:-1;width:100%;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBK09nQixBQUc0QixBQVVILGNBQ0csaUJBQ1IsNENBQ0UsV0FDYixPQWJhLDBFQUNJLGlCQUNBLGlCQUNELGdCQUNPLHVCQUN6QiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL2NvbXBvbmVudHMvVGl0bGVTZWN0aW9uLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIEFtcCBmcm9tIFwicmVhY3QtYW1waHRtbFwiO1xuXG5pbXBvcnQgQXV0aG9yIGZyb20gXCIuL0F1dGhvclwiO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb25Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW46IDAgNjVweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgIG1hcmdpbjogMDtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVJbmZvQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVJbmZvID0gc3R5bGVkLmRpdmBcbiAgbWFyZ2luLWxlZnQ6IGF1dG87XG4gIG1heC13aWR0aDogNTUycHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWF4LXdpZHRoOiBub25lO1xuICAgIHBhZGRpbmc6IDA7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcFRpdGxlVGV4dCA9IHN0eWxlZC5oMWBcbiAgZm9udC1zaXplOiA1NnB4O1xuICBmb250LXdlaWdodDogNTAwO1xuICBsaW5lLWhlaWdodDogNjRweDtcbiAgbWFyZ2luOiAwO1xuICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICBmb250LXdlaWdodDogNTAwO1xuICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgfVxuYDtcblxuY29uc3QgQW1wU3VidGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAyM3B4O1xuICBmb250LXdlaWdodDogNDAwO1xuICBsaW5lLWhlaWdodDogMjhweDtcbiAgbWFyZ2luLWJvdHRvbTogMzBweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBmb250LXNpemU6IDIwcHg7XG4gICAgbGluZS1oZWlnaHQ6IDI0cHg7XG4gICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgfVxuYDtcblxuY29uc3QgQW1wQ292ZXJJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgb3JkZXI6IC0xO1xuICAgIHdpZHRoOiAxMDAlO1xuICB9XG5gO1xuXG5jb25zdCBTdHlsZWRBbXBJbWcgPSBzdHlsZWQoQW1wLkFtcEltZylgXG4gIGJhY2tncm91bmQtcG9zaXRpb246IGNlbnRlcjtcbiAgd2lkdGg6IDEwMCU7XG5gO1xuXG5jb25zdCBBbXBEaXZpZGVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogbm9uZTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBkaXNwbGF5OiBibG9jaztcbiAgICBmb250LXNpemU6IDM1cHg7XG4gICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVTZWN0aW9uID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZV91cmwsIGRhdGVfYWRkZWQsIHVzZXIgfSkgPT4gKFxuICA8QW1wVGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICAgIDxBbXBUaXRsZUluZm9Db250YWluZXI+XG4gICAgICA8QW1wVGl0bGVJbmZvPlxuICAgICAgICA8QW1wVGl0bGVUZXh0Pnt0aXRsZX08L0FtcFRpdGxlVGV4dD5cbiAgICAgICAgPEFtcFN1YnRpdGxlPntzdWJ0aXRsZSB8fCBcIkhlbHAgdXMgd3JpdGUgdGhpcyBhcnRpY2xlIVwifTwvQW1wU3VidGl0bGU+XG5cbiAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgPEF1dGhvciBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfSBpbWFnZT17dXNlci5pbWFnZX0gbmFtZT17dXNlci5uYW1lfSAvPlxuICAgICAgICApIDogbnVsbH1cblxuICAgICAgICA8QW1wRGl2aWRlcj4uLi48L0FtcERpdmlkZXI+XG4gICAgICA8L0FtcFRpdGxlSW5mbz5cbiAgICA8L0FtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICA8QW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDxTdHlsZWRBbXBJbWdcbiAgICAgICAgc3BlY05hbWU9XCJkZWZhdWx0XCJcbiAgICAgICAgc3JjPXtpbWFnZV91cmwgfHwgXCJodHRwczovL2kuaW1ndXIuY29tL1NtUFlCNjAucG5nXCJ9XG4gICAgICAgIHdpZHRoPVwiMTIwMFwiXG4gICAgICAgIGhlaWdodD1cIjQwMFwiXG4gICAgICAgIGxheW91dD1cInJlc3BvbnNpdmVcIlxuICAgICAgICBhbHQ9XCJBTVBcIlxuICAgICAgLz5cbiAgICA8L0FtcENvdmVySW1hZ2VDb250YWluZXI+XG4gIDwvQW1wVGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuKTtcblxuY29uc3QgVGl0bGVTZWN0aW9uQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLXNlY3Rpb25cIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW46IDAgNjVweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1zZWN0aW9uIHtcbiAgICAgICAgICBmbGV4LWRpcmVjdGlvbjogY29sdW1uO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm9Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mby1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLWluZm8tY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICAgIG1hcmdpbjogMzBweCBhdXRvIDA7XG4gICAgICAgICAgbWF4LXdpZHRoOiA3NDBweDtcbiAgICAgICAgICB3aWR0aDogY2FsYygxMDAlIC0gNDBweCk7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVJbmZvID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlLWluZm9cIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICBtYXJnaW4tbGVmdDogYXV0bztcbiAgICAgICAgbWF4LXdpZHRoOiA1NTJweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgICAgICAgcGFkZGluZzogMDtcbiAgICAgICAgICB3aWR0aDogMTAwJTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVRleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtdGV4dFwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtdGV4dCB7XG4gICAgICAgIGZvbnQtc2l6ZTogNTZweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDY0cHg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTZweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgICBmb250LXNpemU6IDM2cHg7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IDUwMDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogNDBweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiA4cHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgU3VidGl0bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwic3VidGl0bGVcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjNweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDQwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI4cHg7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuc3VidGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IENvdmVySW1hZ2VDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY292ZXItaW1hZ2UtY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5jb3Zlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgbWF4LWhlaWdodDogNDAwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiBjYWxjKDUwJSAtIDEwcHgpO1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDA7XG4gICAgICAgICAgbWF4LWhlaWdodDogNTAwcHg7XG4gICAgICAgICAgb3JkZXI6IC0xO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IERpdmlkZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiZGl2aWRlclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuZGl2aWRlciB7XG4gICAgICAgIGRpc3BsYXk6IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGl0bGVTZWN0aW9uID0gKHsgdGl0bGUsIHN1YnRpdGxlLCBpbWFnZV91cmwsIGRhdGVfYWRkZWQsIHVzZXIgfSkgPT4ge1xuICByZXR1cm4gKFxuICAgIDxUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgICA8VGl0bGVJbmZvQ29udGFpbmVyPlxuICAgICAgICA8VGl0bGVJbmZvPlxuICAgICAgICAgIDxUaXRsZVRleHQ+e3RpdGxlfTwvVGl0bGVUZXh0PlxuICAgICAgICAgIDxTdWJ0aXRsZT57c3VidGl0bGUgfHwgXCJIZWxwIHVzIHdyaXRlIHRoaXMgYXJ0aWNsZSFcIn08L1N1YnRpdGxlPlxuXG4gICAgICAgICAge3VzZXIgPyAoXG4gICAgICAgICAgICA8QXV0aG9yXG4gICAgICAgICAgICAgIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9XG4gICAgICAgICAgICAgIGltYWdlPXt1c2VyLmltYWdlfVxuICAgICAgICAgICAgICBuYW1lPXt1c2VyLm5hbWV9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgICAgPERpdmlkZXI+Li4uPC9EaXZpZGVyPlxuICAgICAgICA8L1RpdGxlSW5mbz5cbiAgICAgIDwvVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgICAgPENvdmVySW1hZ2VDb250YWluZXI+XG4gICAgICAgIDxpbWcgc3JjPXtpbWFnZV91cmx9IHN0eWxlPXt7IHdpZHRoOiBcIjEwMCVcIiB9fSAvPlxuICAgICAgPC9Db3ZlckltYWdlQ29udGFpbmVyPlxuICAgIDwvVGl0bGVTZWN0aW9uQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IHsgQW1wVGl0bGVTZWN0aW9uLCBUaXRsZVNlY3Rpb24gfTtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
  }));
};

var Divider = function Divider(_ref8) {
  var children = _ref8.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1611578801" + " " + "divider"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1611578801",
    css: ".divider.jsx-1611578801{display:none;}@media screen and (max-width:1199px){.divider.jsx-1611578801{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd1FnQixBQUdzQixBQUtHLGFBSmxCLENBS21CLGVBQ00scUdBQ0gsa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9UaXRsZVNlY3Rpb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmltcG9ydCBBdXRob3IgZnJvbSBcIi4vQXV0aG9yXCI7XG5cbmNvbnN0IEFtcFRpdGxlU2VjdGlvbkNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGRpc3BsYXk6IGZsZXg7XG4gIG1hcmdpbjogMCA2NXB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgbWFyZ2luOiAwO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm9Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW46IDMwcHggYXV0byAwO1xuICAgIG1heC13aWR0aDogNzQwcHg7XG4gICAgd2lkdGg6IGNhbGMoMTAwJSAtIDQwcHgpO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZUluZm8gPSBzdHlsZWQuZGl2YFxuICBtYXJnaW4tbGVmdDogYXV0bztcbiAgbWF4LXdpZHRoOiA1NTJweDtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtd2lkdGg6IG5vbmU7XG4gICAgcGFkZGluZzogMDtcbiAgICB3aWR0aDogMTAwJTtcbiAgfVxuYDtcblxuY29uc3QgQW1wVGl0bGVUZXh0ID0gc3R5bGVkLmgxYFxuICBmb250LXNpemU6IDU2cHg7XG4gIGZvbnQtd2VpZ2h0OiA1MDA7XG4gIGxpbmUtaGVpZ2h0OiA2NHB4O1xuICBtYXJnaW46IDA7XG4gIG1hcmdpbi1ib3R0b206IDE2cHg7XG5cbiAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgZm9udC1zaXplOiAzNnB4O1xuICAgIGZvbnQtd2VpZ2h0OiA1MDA7XG4gICAgbGluZS1oZWlnaHQ6IDQwcHg7XG4gICAgbWFyZ2luLWJvdHRvbTogOHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBTdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDIzcHg7XG4gIGZvbnQtd2VpZ2h0OiA0MDA7XG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xuICBtYXJnaW4tYm90dG9tOiAzMHB4O1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICBsaW5lLWhlaWdodDogMjRweDtcbiAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICB9XG5gO1xuXG5jb25zdCBBbXBDb3ZlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG1heC1oZWlnaHQ6IDQwMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcblxuICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICBtYXJnaW4tbGVmdDogMDtcbiAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICBvcmRlcjogLTE7XG4gICAgd2lkdGg6IDEwMCU7XG4gIH1cbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYmFja2dyb3VuZC1wb3NpdGlvbjogY2VudGVyO1xuICB3aWR0aDogMTAwJTtcbmA7XG5cbmNvbnN0IEFtcERpdmlkZXIgPSBzdHlsZWQuZGl2YFxuICBkaXNwbGF5OiBub25lO1xuXG4gIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICB9XG5gO1xuXG5jb25zdCBBbXBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiAoXG4gIDxBbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICAgPEFtcFRpdGxlSW5mb0NvbnRhaW5lcj5cbiAgICAgIDxBbXBUaXRsZUluZm8+XG4gICAgICAgIDxBbXBUaXRsZVRleHQ+e3RpdGxlfTwvQW1wVGl0bGVUZXh0PlxuICAgICAgICA8QW1wU3VidGl0bGU+e3N1YnRpdGxlIHx8IFwiSGVscCB1cyB3cml0ZSB0aGlzIGFydGljbGUhXCJ9PC9BbXBTdWJ0aXRsZT5cblxuICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICA8QXV0aG9yIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9IGltYWdlPXt1c2VyLmltYWdlfSBuYW1lPXt1c2VyLm5hbWV9IC8+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxBbXBEaXZpZGVyPi4uLjwvQW1wRGl2aWRlcj5cbiAgICAgIDwvQW1wVGl0bGVJbmZvPlxuICAgIDwvQW1wVGl0bGVJbmZvQ29udGFpbmVyPlxuICAgIDxBbXBDb3ZlckltYWdlQ29udGFpbmVyPlxuICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICBzcmM9e2ltYWdlX3VybCB8fCBcImh0dHBzOi8vaS5pbWd1ci5jb20vU21QWUI2MC5wbmdcIn1cbiAgICAgICAgd2lkdGg9XCIxMjAwXCJcbiAgICAgICAgaGVpZ2h0PVwiNDAwXCJcbiAgICAgICAgbGF5b3V0PVwicmVzcG9uc2l2ZVwiXG4gICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAvPlxuICAgIDwvQW1wQ292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgPC9BbXBUaXRsZVNlY3Rpb25Db250YWluZXI+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb25Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtc2VjdGlvblwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtc2VjdGlvbiB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbjogMCA2NXB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXNlY3Rpb24ge1xuICAgICAgICAgIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlSW5mb0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS1pbmZvLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mby1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICB3aWR0aDogY2FsYyg1MCUgLSAxMHB4KTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC50aXRsZS1pbmZvLWNvbnRhaW5lciB7XG4gICAgICAgICAgbWFyZ2luOiAzMHB4IGF1dG8gMDtcbiAgICAgICAgICBtYXgtd2lkdGg6IDc0MHB4O1xuICAgICAgICAgIHdpZHRoOiBjYWxjKDEwMCUgLSA0MHB4KTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZUluZm8gPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGUtaW5mb1wiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUtaW5mbyB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiBhdXRvO1xuICAgICAgICBtYXgtd2lkdGg6IDU1MnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAwO1xuICAgICAgICAgIG1heC13aWR0aDogbm9uZTtcbiAgICAgICAgICBwYWRkaW5nOiAwO1xuICAgICAgICAgIHdpZHRoOiAxMDAlO1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRpdGxlVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0aXRsZS10ZXh0XCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZS10ZXh0IHtcbiAgICAgICAgZm9udC1zaXplOiA1NnB4O1xuICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICBsaW5lLWhlaWdodDogNjRweDtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxNnB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiAxMTk5cHgpIHtcbiAgICAgICAgLnRpdGxlLXRleHQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzZweDtcbiAgICAgICAgICBmb250LXdlaWdodDogNTAwO1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiA0MHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDhweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBTdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJzdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAyM3B4O1xuICAgICAgICBmb250LXdlaWdodDogNDAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjhweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMzBweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5zdWJ0aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAyNHB4O1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQ292ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJjb3Zlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvdmVyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBtYXgtaGVpZ2h0OiA0MDBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IGNhbGMoNTAlIC0gMTBweCk7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDExOTlweCkge1xuICAgICAgICAuY292ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMDtcbiAgICAgICAgICBtYXgtaGVpZ2h0OiA1MDBweDtcbiAgICAgICAgICBvcmRlcjogLTE7XG4gICAgICAgICAgd2lkdGg6IDEwMCU7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgRGl2aWRlciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJkaXZpZGVyXCI+XG4gICAge2NoaWxkcmVufVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgZGlzcGxheTogbm9uZTtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogMTE5OXB4KSB7XG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBUaXRsZVNlY3Rpb24gPSAoeyB0aXRsZSwgc3VidGl0bGUsIGltYWdlX3VybCwgZGF0ZV9hZGRlZCwgdXNlciB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPFRpdGxlU2VjdGlvbkNvbnRhaW5lcj5cbiAgICAgIDxUaXRsZUluZm9Db250YWluZXI+XG4gICAgICAgIDxUaXRsZUluZm8+XG4gICAgICAgICAgPFRpdGxlVGV4dD57dGl0bGV9PC9UaXRsZVRleHQ+XG4gICAgICAgICAgPFN1YnRpdGxlPntzdWJ0aXRsZSB8fCBcIkhlbHAgdXMgd3JpdGUgdGhpcyBhcnRpY2xlIVwifTwvU3VidGl0bGU+XG5cbiAgICAgICAgICB7dXNlciA/IChcbiAgICAgICAgICAgIDxBdXRob3JcbiAgICAgICAgICAgICAgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH1cbiAgICAgICAgICAgICAgaW1hZ2U9e3VzZXIuaW1hZ2V9XG4gICAgICAgICAgICAgIG5hbWU9e3VzZXIubmFtZX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgKSA6IG51bGx9XG5cbiAgICAgICAgICA8RGl2aWRlcj4uLi48L0RpdmlkZXI+XG4gICAgICAgIDwvVGl0bGVJbmZvPlxuICAgICAgPC9UaXRsZUluZm9Db250YWluZXI+XG4gICAgICA8Q292ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgPGltZyBzcmM9e2ltYWdlX3VybH0gc3R5bGU9e3sgd2lkdGg6IFwiMTAwJVwiIH19IC8+XG4gICAgICA8L0NvdmVySW1hZ2VDb250YWluZXI+XG4gICAgPC9UaXRsZVNlY3Rpb25Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgeyBBbXBUaXRsZVNlY3Rpb24sIFRpdGxlU2VjdGlvbiB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TitleSection.js */"
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

/***/ "./constants/contradictions/1-2-corinthians.js":
/*!*****************************************************!*\
  !*** ./constants/contradictions/1-2-corinthians.js ***!
  \*****************************************************/
/*! exports provided: corinthians1, corinthians2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corinthians1", function() { return corinthians1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "corinthians2", function() { return corinthians2; });
var corinthians1 = {
  book: "1 Corinthians",
  answers: [{
    bookVerses: "",
    question: "",
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
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};


/***/ }),

/***/ "./constants/contradictions/acts.js":
/*!******************************************!*\
  !*** ./constants/contradictions/acts.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var acts = {
  book: "Acts",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (acts);

/***/ }),

/***/ "./constants/contradictions/deuteronomy.js":
/*!*************************************************!*\
  !*** ./constants/contradictions/deuteronomy.js ***!
  \*************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
/* harmony default export */ __webpack_exports__["default"] = (deuteronomy);

/***/ }),

/***/ "./constants/contradictions/exodus.js":
/*!********************************************!*\
  !*** ./constants/contradictions/exodus.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var exodus = {
  book: "Exodus",
  answers: [{
    bookVerses: "6:2-3",
    see: ["genesis", "17:1"]
  }, {
    bookVerses: "9:1-7",
    question: "Did all of Egypt's livestock die?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "9:18-21",
    see: ["exodus", "9:1-7"]
  }, {
    bookVerses: "15:3",
    question: "Is God a God of peace or a God of war?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "20:4-5",
    question: "Is it a sin to make graven images?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
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
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
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
/* harmony default export */ __webpack_exports__["default"] = (exodus);

/***/ }),

/***/ "./constants/contradictions/galatians-titus.js":
/*!*****************************************************!*\
  !*** ./constants/contradictions/galatians-titus.js ***!
  \*****************************************************/
/*! exports provided: galatians, ephesians, colossians, thessalonians1, thessalonians2, timothy1, titus */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "galatians", function() { return galatians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ephesians", function() { return ephesians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "colossians", function() { return colossians; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thessalonians1", function() { return thessalonians1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "thessalonians2", function() { return thessalonians2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "timothy1", function() { return timothy1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "titus", function() { return titus; });
var galatians = {
  book: "Galatians",
  answers: [{
    bookVerses: "",
    question: "",
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
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var colossians = {
  book: "Colossians",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var thessalonians1 = {
  book: "1 Thessalonians",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var thessalonians2 = {
  book: "2 Thessalonians",
  answers: [{
    bookVerses: "",
    question: "",
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
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var titus = {
  book: "Titus",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};


/***/ }),

/***/ "./constants/contradictions/genesis.js":
/*!*********************************************!*\
  !*** ./constants/contradictions/genesis.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    quickAnswer: 'The doctrine of the Trinity teaches that there is one God who exists in three persons. "God" and "person" are not the same thing, so there is no contradiction. The plural pronouns in Genesis could either be referring to the Trinity, or they could be a "royal we," which is sometimes used for monarchs.',
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
    allPassages: [{
      passage: "Genesis 3:9",
      text: "9 But the Lord God called to the man and said to him, \u201CWhere are you?\u201D"
    }]
  }, {
    bookVerses: "3:16",
    question: "Was it wrong for God to multiply the pain of women in child bearing?",
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
    allPassages: [{
      passage: "",
      text: ""
    }]
  }, {
    bookVerses: "5:1-31",
    question: "Did people live hundreds of years in Genesis?",
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
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
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
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
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
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "7:2-3",
    see: ["genesis", "6:19-20"]
  }, {
    bookVerses: "11:8-9",
    question: "If God is not the author of confusion, then what about the Tower of Babel?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
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
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
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
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "37:36",
    see: ["genesis", "37:28"]
  }, {
    bookVerses: "38:9",
    question: "Was it wrong for God to kill a man for \"wasting [his] semen on the ground\"?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "39:1",
    see: ["genesis", "37:28"]
  }, {
    bookVerses: "47:31",
    question: "Did Jacob worship at the head of the bed or leaning on a staff?",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (genesis);

/***/ }),

/***/ "./constants/contradictions/hebrews-jude.js":
/*!**************************************************!*\
  !*** ./constants/contradictions/hebrews-jude.js ***!
  \**************************************************/
/*! exports provided: hebrews, james, peter1, peter2, john1, jude */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "hebrews", function() { return hebrews; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "james", function() { return james; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peter1", function() { return peter1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "peter2", function() { return peter2; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "john1", function() { return john1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "jude", function() { return jude; });
var hebrews = {
  book: "Hebrews",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var james = {
  book: "James",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var peter1 = {
  book: "1 Peter",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var peter2 = {
  book: "2 Peter",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var john1 = {
  book: "1 John",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
var jude = {
  book: "Jude",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};


/***/ }),

/***/ "./constants/contradictions/index.js":
/*!*******************************************!*\
  !*** ./constants/contradictions/index.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _genesis__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./genesis */ "./constants/contradictions/genesis.js");
/* harmony import */ var _exodus__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./exodus */ "./constants/contradictions/exodus.js");
/* harmony import */ var _leviticus_numbers__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./leviticus-numbers */ "./constants/contradictions/leviticus-numbers.js");
/* harmony import */ var _deuteronomy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./deuteronomy */ "./constants/contradictions/deuteronomy.js");
/* harmony import */ var _judges_2_samuel__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./judges-2-samuel */ "./constants/contradictions/judges-2-samuel.js");
/* harmony import */ var _job_song_solomon__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./job-song-solomon */ "./constants/contradictions/job-song-solomon.js");
/* harmony import */ var _isaiah__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./isaiah */ "./constants/contradictions/isaiah.js");
/* harmony import */ var _matthew__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./matthew */ "./constants/contradictions/matthew.js");
/* harmony import */ var _mark__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./mark */ "./constants/contradictions/mark.js");
/* harmony import */ var _luke__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./luke */ "./constants/contradictions/luke.js");
/* harmony import */ var _john__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./john */ "./constants/contradictions/john.js");
/* harmony import */ var _acts__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./acts */ "./constants/contradictions/acts.js");
/* harmony import */ var _romans__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ./romans */ "./constants/contradictions/romans.js");
/* harmony import */ var _1_2_corinthians__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./1-2-corinthians */ "./constants/contradictions/1-2-corinthians.js");
/* harmony import */ var _galatians_titus__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./galatians-titus */ "./constants/contradictions/galatians-titus.js");
/* harmony import */ var _hebrews_jude__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./hebrews-jude */ "./constants/contradictions/hebrews-jude.js");
















var CONTRADICTIONS = [_genesis__WEBPACK_IMPORTED_MODULE_0__["default"], _exodus__WEBPACK_IMPORTED_MODULE_1__["default"], _leviticus_numbers__WEBPACK_IMPORTED_MODULE_2__["leviticus"], _leviticus_numbers__WEBPACK_IMPORTED_MODULE_2__["numbers"], _deuteronomy__WEBPACK_IMPORTED_MODULE_3__["default"], _judges_2_samuel__WEBPACK_IMPORTED_MODULE_4__["judges"], _judges_2_samuel__WEBPACK_IMPORTED_MODULE_4__["samuel1"], _judges_2_samuel__WEBPACK_IMPORTED_MODULE_4__["samuel2"], _job_song_solomon__WEBPACK_IMPORTED_MODULE_5__["job"], _job_song_solomon__WEBPACK_IMPORTED_MODULE_5__["psalms"], _job_song_solomon__WEBPACK_IMPORTED_MODULE_5__["proverbs"], _job_song_solomon__WEBPACK_IMPORTED_MODULE_5__["ecclesiastes"], _job_song_solomon__WEBPACK_IMPORTED_MODULE_5__["songOfSolomon"], _isaiah__WEBPACK_IMPORTED_MODULE_6__["default"], _matthew__WEBPACK_IMPORTED_MODULE_7__["default"], _mark__WEBPACK_IMPORTED_MODULE_8__["default"], _luke__WEBPACK_IMPORTED_MODULE_9__["default"], _john__WEBPACK_IMPORTED_MODULE_10__["default"], _acts__WEBPACK_IMPORTED_MODULE_11__["default"], _romans__WEBPACK_IMPORTED_MODULE_12__["default"], _1_2_corinthians__WEBPACK_IMPORTED_MODULE_13__["corinthians1"], _1_2_corinthians__WEBPACK_IMPORTED_MODULE_13__["corinthians2"], _galatians_titus__WEBPACK_IMPORTED_MODULE_14__["galatians"], _galatians_titus__WEBPACK_IMPORTED_MODULE_14__["ephesians"], _galatians_titus__WEBPACK_IMPORTED_MODULE_14__["colossians"], _galatians_titus__WEBPACK_IMPORTED_MODULE_14__["thessalonians1"], _galatians_titus__WEBPACK_IMPORTED_MODULE_14__["thessalonians2"], _galatians_titus__WEBPACK_IMPORTED_MODULE_14__["timothy1"], _galatians_titus__WEBPACK_IMPORTED_MODULE_14__["titus"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_15__["hebrews"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_15__["james"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_15__["peter1"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_15__["peter2"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_15__["john1"], _hebrews_jude__WEBPACK_IMPORTED_MODULE_15__["jude"]];
/* harmony default export */ __webpack_exports__["default"] = (CONTRADICTIONS);

/***/ }),

/***/ "./constants/contradictions/isaiah.js":
/*!********************************************!*\
  !*** ./constants/contradictions/isaiah.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
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
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }, {
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (isaiah);

/***/ }),

/***/ "./constants/contradictions/job-song-solomon.js":
/*!******************************************************!*\
  !*** ./constants/contradictions/job-song-solomon.js ***!
  \******************************************************/
/*! exports provided: job, psalms, proverbs, ecclesiastes, songOfSolomon */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "job", function() { return job; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "psalms", function() { return psalms; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "proverbs", function() { return proverbs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ecclesiastes", function() { return ecclesiastes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "songOfSolomon", function() { return songOfSolomon; });
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


/***/ }),

/***/ "./constants/contradictions/john.js":
/*!******************************************!*\
  !*** ./constants/contradictions/john.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var john = {
  book: "John",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (john);

/***/ }),

/***/ "./constants/contradictions/judges-2-samuel.js":
/*!*****************************************************!*\
  !*** ./constants/contradictions/judges-2-samuel.js ***!
  \*****************************************************/
/*! exports provided: judges, samuel1, samuel2 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "judges", function() { return judges; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "samuel1", function() { return samuel1; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "samuel2", function() { return samuel2; });
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


/***/ }),

/***/ "./constants/contradictions/leviticus-numbers.js":
/*!*******************************************************!*\
  !*** ./constants/contradictions/leviticus-numbers.js ***!
  \*******************************************************/
/*! exports provided: leviticus, numbers */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "leviticus", function() { return leviticus; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "numbers", function() { return numbers; });
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
var numbers = {
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


/***/ }),

/***/ "./constants/contradictions/luke.js":
/*!******************************************!*\
  !*** ./constants/contradictions/luke.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var luke = {
  book: "Luke",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (luke);

/***/ }),

/***/ "./constants/contradictions/mark.js":
/*!******************************************!*\
  !*** ./constants/contradictions/mark.js ***!
  \******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var mark = {
  book: "Mark",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (mark);

/***/ }),

/***/ "./constants/contradictions/matthew.js":
/*!*********************************************!*\
  !*** ./constants/contradictions/matthew.js ***!
  \*********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var matthew = {
  book: "Matthew",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (matthew);

/***/ }),

/***/ "./constants/contradictions/romans.js":
/*!********************************************!*\
  !*** ./constants/contradictions/romans.js ***!
  \********************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var romans = {
  book: "Romans",
  answers: [{
    bookVerses: "",
    question: "",
    allPassages: [{
      heading: "",
      passages: [{
        passage: "",
        text: ""
      }]
    }]
  }]
};
/* harmony default export */ __webpack_exports__["default"] = (romans);

/***/ }),

/***/ "./pages/tag.js":
/*!**********************!*\
  !*** ./pages/tag.js ***!
  \**********************/
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
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");
/* harmony import */ var _components_BibleContradictions__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/BibleContradictions */ "./components/BibleContradictions.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: #689f38;\n  text-decoration: none;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }










var LinkTag = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.a(_templateObject());

var Tag = function Tag(props) {
  var url = props.url,
      title = props.title,
      subtitle = props.subtitle,
      description = props.description,
      image_url = props.image_url,
      date_added = props.date_added,
      updated_at = props.updated_at,
      _props$posts = props.posts,
      posts = _props$posts === void 0 ? [] : _props$posts,
      _props$user = props.user,
      user = _props$user === void 0 ? {} : _props$user;

  if (!title) {
    return [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Tag not found"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "/"
    }, "Bible Answers Home")];
  }

  if (title === 'Bible "contradictions"') {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_BibleContradictions__WEBPACK_IMPORTED_MODULE_9__["default"], props);
  }

  var pageTitle = "".concat(posts.length, " \"").concat(title, "\" Questions and Answers");
  var datePublished = date_added ? new Date(date_added) : new Date();
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_5__["AmpContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, pageTitle, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
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
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_6__["AmpTitleSection"], {
    title: pageTitle,
    subtitle: subtitle,
    image_url: image_url,
    date_added: date_added,
    user: user
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      padding: 0,
      width: "initial"
    }
  }, posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(LinkTag, {
      href: post.url,
      key: post.url
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListItem__WEBPACK_IMPORTED_MODULE_8__["AmpListItem"], post));
  })));
};

Tag.getInitialProps =
/*#__PURE__*/
function () {
  var _ref2 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref) {
    var query, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref.query;
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
    return _ref2.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Tag);

/***/ }),

/***/ 6:
/*!****************************!*\
  !*** multi ./pages/tag.js ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/tag.js */"./pages/tag.js");


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

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

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

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

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
//# sourceMappingURL=tag.js.map