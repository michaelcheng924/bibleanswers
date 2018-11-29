webpackHotUpdate("static/development/pages/contradictions.js",{

/***/ "./pages/contradictions.js":
/*!*********************************!*\
  !*** ./pages/contradictions.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../constants/contradictions */ "./constants/contradictions/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");
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










var TableContentsContainer = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var TableContentsItem = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());

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
  var text = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["isArray"])(passage.text) ? passage.text.map(function (paragraph, index1) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: index1,
      className: "first",
      dangerouslySetInnerHTML: {
        __html: boldNumbers(paragraph)
      }
    });
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "first",
    dangerouslySetInnerHTML: {
      __html: boldNumbers(passage.text)
    }
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("blockquote", {
    className: index === 0 ? "first" : ""
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, passage.passage), text));
}

function renderLink(_ref) {
  var index = _ref.index,
      book = _ref.book,
      bookVerses = _ref.bookVerses,
      count = _ref.count,
      question = _ref.question;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: index,
    style: {
      marginTop: 10
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
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
      isDuplicate = _ref2.isDuplicate;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: index
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#top",
    style: {
      display: "inline-block",
      marginTop: 28
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaChevronUp"], null), " Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#".concat(book),
    id: "".concat(book, "_").concat(bookVerses),
    style: {
      display: "inline-block",
      marginLeft: 20,
      marginTop: 28
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaChevronUp"], null), " ", book), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "nomargin",
    dangerouslySetInnerHTML: {
      __html: "".concat(count, ") ").concat(bookVerses, " - ").concat(question)
    }
  }), isDuplicate ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, "Same as", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#".concat(book, "_").concat(foundBookVerses)
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, book, " ", foundBookVerses, " - ", question, " (jump there)"))) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "first"
  }, "Quick answer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, quickAnswer), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Full post: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: fullPost
  }, question)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Passages"), allPassages.map(function (passageGroup, index) {
    if (passageGroup.heading !== undefined) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: index === 0 ? "first" : ""
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, passageGroup.heading)), passageGroup.passages.map(function (passage, index1) {
        return renderPassage(passage, index1);
      }));
    }

    return renderPassage(passageGroup, index);
  })));
}

var BibleContradictions = function BibleContradictions() {
  var linkCount = 0;
  var answerCount = 0;
  var image_url = "https://i.imgur.com/39duRWk.png";
  var description = "Explanations for every alleged \"contradiction\" in the Bible, including passages, quick answer, and a link to a fuller post for each alleged Bible \"contradiction.\"";
  var date_added = "2018-11-26";
  var updated_at = "2018-11-26";
  var numbers = _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].reduce(function (result, book) {
    book.answers.forEach(function (answer) {
      if (answer.see) {
        result.total++;
      }

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
  var datePublished = new Date(date_added);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_7__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1167734975"
  }, pageTitle, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description,
    className: "jsx-1167734975"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: "https://bibleanswers.io/tags/contradictions",
    className: "jsx-1167734975"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: pageTitle,
    className: "jsx-1167734975"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: description,
    className: "jsx-1167734975"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: image_url,
    className: "jsx-1167734975"
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
    className: "jsx-1167734975"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_8__["TitleSection"], {
    title: pageTitle,
    subtitle: "Explanations for every alleged \"contradiction\" in the Bible",
    image_url: image_url,
    date_added: date_added,
    user: {
      name: "Michael Cheng",
      image: "https://i.imgur.com/8aN31Dn.png"
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_9__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1167734975" + " " + "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1167734975"
  }, "Work in progress!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1167734975"
  }, "This page is still a work in progress. Please check back to see updates!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1167734975"
  }, "Numbers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1167734975"
  }, "no quick answer: ", numbers.noQuickAnswer), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1167734975"
  }, "no full post: ", numbers.noFullPost), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1167734975"
  }, "Introduction"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1167734975"
  }, "Opponents of the Bible claim that it contains numerous irreconcilable contradictions. However, none of the \"alleged\" contradictions in the Bible are truly irreconcilable."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1167734975"
  }, "The purpose of this page is to be a comprehensive response to every alleged \"contradiction\" in the Bible."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "top",
    style: {
      color: "rgba(0, 0, 0, .84)"
    },
    className: "jsx-1167734975"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1167734975"
  }, "Table of contents")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1167734975"
  }, "Old Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableContentsContainer, null, _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].slice(0, 39).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableContentsItem, {
      key: book.book
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      id: "top-".concat(book.book),
      className: "jsx-1167734975"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1167734975"
  }, "New Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableContentsContainer, null, _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].slice(39).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(TableContentsItem, {
      key: book.book
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      id: "top-".concat(book.book),
      className: "jsx-1167734975"
    }, book.book, " (", book.answers.length, ")"));
  })), _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1167734975"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#top",
      id: book.book,
      style: {
        display: "flex",
        alignItems: "center",
        marginTop: 28
      },
      className: "jsx-1167734975"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaChevronUp"], null), "\xA0Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      key: book.book,
      style: {
        borderBottom: "1px solid rgba(0, 0, 0, .54)"
      },
      className: "jsx-1167734975" + " " + "nomargin"
    }, book.book), book.answers.map(function (answer, index) {
      linkCount++;

      if (answer.see) {
        var _book = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"], function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });

        var foundAnswer = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(_book.answers, function (answerData) {
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
        var _book2 = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"], function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });

        var foundAnswer = Object(lodash__WEBPACK_IMPORTED_MODULE_5__["find"])(_book2.answers, function (answerData) {
          return answerData.bookVerses === answer.see[1];
        });
        return renderAnswer(_objectSpread({
          index: index,
          book: _book2.book
        }, foundAnswer, {
          foundBookVerses: foundAnswer.bookVerses,
          bookVerses: answer.bookVerses,
          count: answerCount,
          isDuplicate: true
        }));
      }

      return renderAnswer(_objectSpread({
        index: index,
        book: book.book
      }, answer, {
        count: answerCount
      }));
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1167734975",
    css: ".writing.jsx-1167734975 h3.jsx-1167734975{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing.jsx-1167734975 h4.jsx-1167734975{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing.jsx-1167734975 h3.jsx-1167734975+p.jsx-1167734975,.writing.jsx-1167734975 h3.jsx-1167734975+ol.jsx-1167734975,.writing.jsx-1167734975 h3.jsx-1167734975+ul.jsx-1167734975,.writing.jsx-1167734975 h3.jsx-1167734975+blockquote.jsx-1167734975,.writing.jsx-1167734975 h4.jsx-1167734975+p.jsx-1167734975,.writing.jsx-1167734975 h4.jsx-1167734975+ol.jsx-1167734975,.writing.jsx-1167734975 h4.jsx-1167734975+ul.jsx-1167734975,.writing.jsx-1167734975 h4.jsx-1167734975+blockquote.jsx-1167734975{margin-top:8px;}.writing.jsx-1167734975 p.jsx-1167734975,.writing.jsx-1167734975 ol.jsx-1167734975,.writing.jsx-1167734975 ul.jsx-1167734975,.writing.jsx-1167734975 blockquote.jsx-1167734975{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.writing.jsx-1167734975 ol.jsx-1167734975,.writing.jsx-1167734975 ul.jsx-1167734975{padding:0 40px;}.writing.jsx-1167734975 li.jsx-1167734975{margin-bottom:10px;}.writing.jsx-1167734975 li.jsx-1167734975:last-child{margin-bottom:0;}.writing.jsx-1167734975 blockquote.jsx-1167734975{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing.jsx-1167734975 .first.jsx-1167734975{margin-top:8px;}.writing.jsx-1167734975 .nomargin.jsx-1167734975{margin-top:0;}.writing.jsx-1167734975 .indent.jsx-1167734975{margin-left:20px;}.writing.jsx-1167734975 .image.jsx-1167734975{margin-top:29px;}.writing.jsx-1167734975 .image-left.jsx-1167734975{float:left;margin-right:20px;}.writing.jsx-1167734975 .image-right.jsx-1167734975{float:right;margin-left:20px;}.writing.jsx-1167734975 a.jsx-1167734975{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing.jsx-1167734975 .reference.jsx-1167734975{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider.jsx-1167734975{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing.jsx-1167734975 h3.jsx-1167734975{font-size:30px;margin-top:28px;}.writing.jsx-1167734975 h4.jsx-1167734975{font-size:24px;margin-top:22px;}.writing.jsx-1167734975 p.jsx-1167734975,.writing.jsx-1167734975 ol.jsx-1167734975{font-size:18px;margin-top:21px;}.writing.jsx-1167734975 blockquote.jsx-1167734975{font-size:18px;margin-top:21px;}.writing.jsx-1167734975 .image.jsx-1167734975{margin-top:21px;}}.table-contents-container.jsx-1167734975{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBc1prQixBQUcwQixBQU9BLEFBY0EsQUFPQSxBQVFBLEFBSUksQUFJSCxBQUkwQixBQVEzQixBQUlGLEFBSUksQUFJRCxBQUlMLEFBS0MsQUFLRSxBQUtDLEFBT0QsQUFRRyxBQUtBLEFBTUEsQUFLQSxBQUtDLEFBS0wsV0F2REssQ0FLRCxDQWpCbkIsQ0FzQnVCLEFBWU4sQ0E5RkUsQUFPQSxBQWNuQixBQU9tQixBQVFuQixBQW9CQSxBQStCa0IsQUFlRSxBQUtBLEFBTUEsQUFLQSxDQTFFcEIsQUF3QkEsQUF1REUsQ0EzREYsRUF4QkEsVUFpQ0EsQUFLQSxBQWlCdUIsRUFQSCxBQWVsQixBQUtBLEFBTUEsQUFLQSxDQXRIUyxBQU9BLEFBcUJBLE9BbUJTLEVBOUNGLEFBT0EsQUFxQkEsUUEyRFAsUUF0RlgsQUFPQSxBQXFCQSxBQWtCYSxDQXlDYixNQVBBLElBakNvQixNQThFSCxZQTdFRyxrQkFDcEIsMEJBNENvQixDQWlDcEIsaUJBaENBIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0IHsgRmFDaGV2cm9uVXAgfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGZpbmQsIGlzQXJyYXkgfSBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBDT05UUkFESUNUSU9OUyBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnRyYWRpY3Rpb25zXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCB7IFRpdGxlU2VjdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RpdGxlU2VjdGlvblwiO1xuaW1wb3J0IFJlYWRpbmdDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVhZGluZ0NvbnRhaW5lclwiO1xuXG5jb25zdCBUYWJsZUNvbnRlbnRzQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZGlzcGxheTogZmxleDtcbiAgZmxleC13cmFwOiB3cmFwO1xuYDtcblxuY29uc3QgVGFibGVDb250ZW50c0l0ZW0gPSBzdHlsZWQuZGl2YFxuICBmb250LXNpemU6IDE2cHg7XG4gIG1hcmdpbi10b3A6IDEwcHg7XG4gIHdpZHRoOiAxNTBweDtcbmA7XG5cbmZ1bmN0aW9uIGJvbGROdW1iZXJzKHRleHQpIHtcbiAgY29uc3Qgc3BsaXRUZXh0ID0gdGV4dC5zcGxpdChcIiBcIik7XG4gIGNvbnN0IG1hcHBlZFRleHQgPSBzcGxpdFRleHQubWFwKHdvcmQgPT4ge1xuICAgIGlmIChwYXJzZUludCh3b3JkKSA8IDEwMCkge1xuICAgICAgcmV0dXJuIGA8c3Ryb25nPiR7d29yZH08L3N0cm9uZz5gO1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkO1xuICB9KTtcblxuICByZXR1cm4gbWFwcGVkVGV4dC5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFzc2FnZShwYXNzYWdlLCBpbmRleCkge1xuICBjb25zdCB0ZXh0ID0gaXNBcnJheShwYXNzYWdlLnRleHQpID8gKFxuICAgIHBhc3NhZ2UudGV4dC5tYXAoKHBhcmFncmFwaCwgaW5kZXgxKSA9PiAoXG4gICAgICA8cFxuICAgICAgICBrZXk9e2luZGV4MX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmlyc3RcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYm9sZE51bWJlcnMocGFyYWdyYXBoKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApKVxuICApIDogKFxuICAgIDxwXG4gICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICBfX2h0bWw6IGJvbGROdW1iZXJzKHBhc3NhZ2UudGV4dClcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9e2luZGV4ID09PSAwID8gXCJmaXJzdFwiIDogXCJcIn0+XG4gICAgICAgIDxzdHJvbmc+e3Bhc3NhZ2UucGFzc2FnZX08L3N0cm9uZz5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpbmsoeyBpbmRleCwgYm9vaywgYm9va1ZlcnNlcywgY291bnQsIHF1ZXN0aW9uIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IG1hcmdpblRvcDogMTAgfX0+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtgIyR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIGlkPXtgdG9wXyR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgJHtjb3VudH0pICR7Ym9va1ZlcnNlc30gLSAke3F1ZXN0aW9ufWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFuc3dlcih7XG4gIGluZGV4LFxuICBib29rLFxuICBib29rVmVyc2VzLFxuICBmb3VuZEJvb2tWZXJzZXMsXG4gIHF1ZXN0aW9uLFxuICBhbGxQYXNzYWdlcyxcbiAgcXVpY2tBbnN3ZXIsXG4gIGZ1bGxQb3N0LFxuICBjb3VudCxcbiAgaXNEdXBsaWNhdGVcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgPGEgaHJlZj17YCN0b3BgfSBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5Ub3A6IDI4IH19PlxuICAgICAgICA8RmFDaGV2cm9uVXAgLz4gVG9wXG4gICAgICA8L2E+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtgIyR7Ym9va31gfVxuICAgICAgICBpZD17YCR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpbkxlZnQ6IDIwLCBtYXJnaW5Ub3A6IDI4IH19XG4gICAgICA+XG4gICAgICAgIDxGYUNoZXZyb25VcCAvPiB7Ym9va31cbiAgICAgIDwvYT5cbiAgICAgIDxoM1xuICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgJHtjb3VudH0pICR7Ym9va1ZlcnNlc30gLSAke3F1ZXN0aW9ufWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIHtpc0R1cGxpY2F0ZSA/IChcbiAgICAgICAgPHA+XG4gICAgICAgICAgU2FtZSBhc3tcIiBcIn1cbiAgICAgICAgICA8YSBocmVmPXtgIyR7Ym9va31fJHtmb3VuZEJvb2tWZXJzZXN9YH0+XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICB7Ym9va30ge2ZvdW5kQm9va1ZlcnNlc30gLSB7cXVlc3Rpb259IChqdW1wIHRoZXJlKVxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9hPlxuICAgICAgICA8L3A+XG4gICAgICApIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmaXJzdFwiPlF1aWNrIGFuc3dlcjwvaDQ+XG4gICAgICAgICAgPHA+e3F1aWNrQW5zd2VyfTwvcD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgRnVsbCBwb3N0OiA8YSBocmVmPXtmdWxsUG9zdH0+e3F1ZXN0aW9ufTwvYT5cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDQ+UGFzc2FnZXM8L2g0PlxuICAgICAgICAgIHthbGxQYXNzYWdlcy5tYXAoKHBhc3NhZ2VHcm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXNzYWdlR3JvdXAuaGVhZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImZpcnN0XCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cGFzc2FnZUdyb3VwLmhlYWRpbmd9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7cGFzc2FnZUdyb3VwLnBhc3NhZ2VzLm1hcCgocGFzc2FnZSwgaW5kZXgxKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJQYXNzYWdlKHBhc3NhZ2UsIGluZGV4MSk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclBhc3NhZ2UocGFzc2FnZUdyb3VwLCBpbmRleCk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgQmlibGVDb250cmFkaWN0aW9ucyA9ICgpID0+IHtcbiAgbGV0IGxpbmtDb3VudCA9IDA7XG4gIGxldCBhbnN3ZXJDb3VudCA9IDA7XG5cbiAgY29uc3QgaW1hZ2VfdXJsID0gXCJodHRwczovL2kuaW1ndXIuY29tLzM5ZHVSV2sucG5nXCI7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYEV4cGxhbmF0aW9ucyBmb3IgZXZlcnkgYWxsZWdlZCBcImNvbnRyYWRpY3Rpb25cIiBpbiB0aGUgQmlibGUsIGluY2x1ZGluZyBwYXNzYWdlcywgcXVpY2sgYW5zd2VyLCBhbmQgYSBsaW5rIHRvIGEgZnVsbGVyIHBvc3QgZm9yIGVhY2ggYWxsZWdlZCBCaWJsZSBcImNvbnRyYWRpY3Rpb24uXCJgO1xuICBjb25zdCBkYXRlX2FkZGVkID0gXCIyMDE4LTExLTI2XCI7XG4gIGNvbnN0IHVwZGF0ZWRfYXQgPSBcIjIwMTgtMTEtMjZcIjtcblxuICBjb25zdCBudW1iZXJzID0gQ09OVFJBRElDVElPTlMucmVkdWNlKFxuICAgIChyZXN1bHQsIGJvb2spID0+IHtcbiAgICAgIGJvb2suYW5zd2Vycy5mb3JFYWNoKGFuc3dlciA9PiB7XG4gICAgICAgIGlmIChhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgcmVzdWx0LnRvdGFsKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFuc3dlci5xdWlja0Fuc3dlcikge1xuICAgICAgICAgIHJlc3VsdC5ub1F1aWNrQW5zd2VyKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFuc3dlci5mdWxsUG9zdCkge1xuICAgICAgICAgIHJlc3VsdC5ub0Z1bGxQb3N0Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAge1xuICAgICAgdG90YWw6IDAsXG4gICAgICBub1F1aWNrQW5zd2VyOiAwLFxuICAgICAgbm9GdWxsUG9zdDogMFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBwYWdlVGl0bGUgPSBgQmlibGUgXCJDb250cmFkaWN0aW9uc1wiOiBFeHBsYW5hdGlvbnMgZm9yIEV2ZXJ5ICgke1xuICAgIG51bWJlcnMudG90YWxcbiAgfSkgYWxsZWdlZCBcImNvbnRyYWRpY3Rpb25cIiBpbiB0aGUgQmlibGVgO1xuXG4gIGNvbnN0IGRhdGVQdWJsaXNoZWQgPSBuZXcgRGF0ZShkYXRlX2FkZGVkKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwYWdlVGl0bGV9IHwgQmlibGUgQW5zd2VyczwvdGl0bGU+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL2JpYmxlYW5zd2Vycy5pby90YWdzL2NvbnRyYWRpY3Rpb25zYH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3BhZ2VUaXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1hZ2VfdXJsfSAvPlxuXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFydGljbGVcIixcbiAgICAgICAgICAgICAgbWFpbkVudGl0eU9mUGFnZToge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgICAgICAgICAgICAgXCJAaWRcIjogXCJodHRwczovL2dvb2dsZS5jb20vYXJ0aWNsZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGhlYWRsaW5lOiBwYWdlVGl0bGUsXG4gICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgdXJsOiBpbWFnZV91cmwsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0ZVB1Ymxpc2hlZDogZGF0ZVB1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSh1cGRhdGVkX2F0KS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJNaWNoYWVsIENoZW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHVibGlzaGVyOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmlibGUgQW5zd2Vyc1wiLFxuICAgICAgICAgICAgICAgIGxvZ286IHtcbiAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vZEpQeFBZOS5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUaXRsZVNlY3Rpb25cbiAgICAgICAgdGl0bGU9e3BhZ2VUaXRsZX1cbiAgICAgICAgc3VidGl0bGU9e2BFeHBsYW5hdGlvbnMgZm9yIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlYH1cbiAgICAgICAgaW1hZ2VfdXJsPXtpbWFnZV91cmx9XG4gICAgICAgIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9XG4gICAgICAgIHVzZXI9e3tcbiAgICAgICAgICBuYW1lOiBcIk1pY2hhZWwgQ2hlbmdcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tLzhhTjMxRG4ucG5nXCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxSZWFkaW5nQ29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyaXRpbmdcIj5cbiAgICAgICAgICA8aDM+V29yayBpbiBwcm9ncmVzcyE8L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhpcyBwYWdlIGlzIHN0aWxsIGEgd29yayBpbiBwcm9ncmVzcy4gUGxlYXNlIGNoZWNrIGJhY2sgdG8gc2VlXG4gICAgICAgICAgICB1cGRhdGVzIVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxoMz5OdW1iZXJzPC9oMz5cblxuICAgICAgICAgIDxwPm5vIHF1aWNrIGFuc3dlcjoge251bWJlcnMubm9RdWlja0Fuc3dlcn08L3A+XG4gICAgICAgICAgPHA+bm8gZnVsbCBwb3N0OiB7bnVtYmVycy5ub0Z1bGxQb3N0fTwvcD5cblxuICAgICAgICAgIDxoMz5JbnRyb2R1Y3Rpb248L2gzPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBPcHBvbmVudHMgb2YgdGhlIEJpYmxlIGNsYWltIHRoYXQgaXQgY29udGFpbnMgbnVtZXJvdXNcbiAgICAgICAgICAgIGlycmVjb25jaWxhYmxlIGNvbnRyYWRpY3Rpb25zLiBIb3dldmVyLCBub25lIG9mIHRoZSBcImFsbGVnZWRcIlxuICAgICAgICAgICAgY29udHJhZGljdGlvbnMgaW4gdGhlIEJpYmxlIGFyZSB0cnVseSBpcnJlY29uY2lsYWJsZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgcGFnZSBpcyB0byBiZSBhIGNvbXByZWhlbnNpdmUgcmVzcG9uc2UgdG8gZXZlcnlcbiAgICAgICAgICAgIGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxhIGlkPVwidG9wXCIgc3R5bGU9e3sgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAuODQpXCIgfX0+XG4gICAgICAgICAgICA8aDM+VGFibGUgb2YgY29udGVudHM8L2gzPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxoND5PbGQgVGVzdGFtZW50PC9oND5cblxuICAgICAgICAgIDxUYWJsZUNvbnRlbnRzQ29udGFpbmVyPlxuICAgICAgICAgICAge0NPTlRSQURJQ1RJT05TLnNsaWNlKDAsIDM5KS5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRhYmxlQ29udGVudHNJdGVtIGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtib29rLmJvb2t9YH0gaWQ9e2B0b3AtJHtib29rLmJvb2t9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9ICh7Ym9vay5hbnN3ZXJzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRlbnRzSXRlbT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGFibGVDb250ZW50c0NvbnRhaW5lcj5cblxuICAgICAgICAgIDxoND5OZXcgVGVzdGFtZW50PC9oND5cblxuICAgICAgICAgIDxUYWJsZUNvbnRlbnRzQ29udGFpbmVyPlxuICAgICAgICAgICAge0NPTlRSQURJQ1RJT05TLnNsaWNlKDM5KS5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPFRhYmxlQ29udGVudHNJdGVtIGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtib29rLmJvb2t9YH0gaWQ9e2B0b3AtJHtib29rLmJvb2t9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9ICh7Ym9vay5hbnN3ZXJzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9UYWJsZUNvbnRlbnRzSXRlbT5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvVGFibGVDb250ZW50c0NvbnRhaW5lcj5cblxuICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgI3RvcGB9XG4gICAgICAgICAgICAgICAgICBpZD17Ym9vay5ib29rfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjhcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZhQ2hldnJvblVwIC8+XG4gICAgICAgICAgICAgICAgICAmbmJzcDtUb3BcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICBrZXk9e2Jvb2suYm9va31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuNTQpXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Ym9vay5ib29rfVxuICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICB7Ym9vay5hbnN3ZXJzLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGlua0NvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIENPTlRSQURJQ1RJT05TLFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2sgPT4gYm9vay5ib29rLnRvTG93ZXJDYXNlKCkgPT09IGFuc3dlci5zZWVbMF1cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEFuc3dlciA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgYm9vay5hbnN3ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckRhdGEgPT4gYW5zd2VyRGF0YS5ib29rVmVyc2VzID09PSBhbnN3ZXIuc2VlWzFdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckxpbmsoe1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgICBib29rVmVyc2VzOiBhbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogZm91bmRBbnN3ZXIucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGxpbmtDb3VudFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckxpbmsoe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAuLi5hbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBsaW5rQ291bnRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAge2Jvb2suYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGFuc3dlckNvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGJvb2sgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIENPTlRSQURJQ1RJT05TLFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2sgPT4gYm9vay5ib29rLnRvTG93ZXJDYXNlKCkgPT09IGFuc3dlci5zZWVbMF1cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEFuc3dlciA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgYm9vay5hbnN3ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckRhdGEgPT4gYW5zd2VyRGF0YS5ib29rVmVyc2VzID09PSBhbnN3ZXIuc2VlWzFdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckFuc3dlcih7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmZvdW5kQW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9va1ZlcnNlczogZm91bmRBbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBib29rVmVyc2VzOiBhbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogYW5zd2VyQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgaXNEdXBsaWNhdGU6IHRydWVcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJBbnN3ZXIoe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAuLi5hbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBhbnN3ZXJDb3VudFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgLndyaXRpbmcgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBoMyArIHAsXG4gICAgICAgIC53cml0aW5nIGgzICsgb2wsXG4gICAgICAgIC53cml0aW5nIGgzICsgdWwsXG4gICAgICAgIC53cml0aW5nIGgzICsgYmxvY2txdW90ZSxcbiAgICAgICAgLndyaXRpbmcgaDQgKyBwLFxuICAgICAgICAud3JpdGluZyBoNCArIG9sLFxuICAgICAgICAud3JpdGluZyBoNCArIHVsLFxuICAgICAgICAud3JpdGluZyBoNCArIGJsb2NrcXVvdGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIHAsXG4gICAgICAgIC53cml0aW5nIG9sLFxuICAgICAgICAud3JpdGluZyB1bCxcbiAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAgIC53cml0aW5nIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBsaSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuZmlyc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5ub21hcmdpbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbmRlbnQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlLWxlZnQge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZS1yaWdodCB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYSB7XG4gICAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLnJlZmVyZW5jZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLndyaXRpbmcgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIHAsXG4gICAgICAgICAgLndyaXRpbmcgb2wge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgLmltYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWNvbnRlbnRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpYmxlQ29udHJhZGljdGlvbnM7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (BibleContradictions);
    (function (Component, route) {
      if(!Component) return
      if (false) {}
      module.hot.accept()
      Component.__route = route

      if (module.hot.status() === 'idle') return

      var components = next.router.components
      for (var r in components) {
        if (!components.hasOwnProperty(r)) continue

        if (components[r].Component.__route === route) {
          next.router.update(r, Component)
        }
      }
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/contradictions")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=contradictions.js.b0efad7f0194757322d2.hot-update.js.map