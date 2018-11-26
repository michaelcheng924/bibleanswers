webpackHotUpdate("static/development/pages/tag.js",{

/***/ "./components/BibleContradictions.js":
/*!*******************************************!*\
  !*** ./components/BibleContradictions.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
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
var TableContentsContainer = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var TableContentsItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

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
  }, "Passages"), allPassages.map(function (passageGroup, index) {
    if (passageGroup.heading !== undefined) {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
        className: index === 0 ? "first" : ""
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, passageGroup.heading)), passageGroup.passages.map(function (passage, index1) {
        return renderPassage(passage, index1);
      }));
    }

    return renderPassage(passageGroup, index);
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Quick answer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, quickAnswer), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "Full post: ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: fullPost
  }, question)))));
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
  var pageTitle = "Bible \"Contradictions\": Explanations for Every (".concat(numbers.total, ") alleged \"contradiction\" in the BIBLE");
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
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Numbers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "no quick answer: ", numbers.noQuickAnswer), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "no full post: ", numbers.noFullPost), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Introduction"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Opponents of the Bible claim that it contains numerous irreconcilable contradictions. However, none of the \"alleged\" contradictions in the Bible are truly irreconcilable."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The purpose of this page is to be a comprehensive response to every alleged \"contradiction\" in the Bible."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
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

/***/ })

})
//# sourceMappingURL=tag.js.474a52f1993830d9be5b.hot-update.js.map