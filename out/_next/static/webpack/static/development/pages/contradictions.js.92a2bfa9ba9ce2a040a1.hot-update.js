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
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-icons/fa */ "./node_modules/react-icons/fa/index.mjs");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/contradictions */ "./constants/contradictions/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }










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
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: index
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("blockquote", {
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
      marginTop: 6
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
      hideDetails = _ref2.hideDetails,
      toggleDetail = _ref2.toggleDetail;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    key: index
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#top",
    style: {
      display: "inline-block",
      marginTop: 28
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), " Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#".concat(book),
    id: "".concat(book, "_").concat(bookVerses),
    style: {
      display: "inline-block",
      marginLeft: 20,
      marginTop: 28
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), " ", book), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "nomargin",
    dangerouslySetInnerHTML: {
      __html: "".concat(count, ") ").concat(bookVerses, " - ").concat(question)
    }
  }), foundBookVerses ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "first"
  }, "Same as", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, book, " ", foundBookVerses, " - ", question)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "nomargin",
    onClick: toggleDetail,
    style: {
      color: "#039BE5",
      fontSize: 16,
      cursor: "pointer"
    }
  }, hideDetails ? "Show " : "Hide ", " answer")) : null, hideDetails ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "first"
  }, "Quick answer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, quickAnswer), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Full post: ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: fullPost
  }, question)))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", null, "Passages"), allPassages.map(function (passageGroup, index) {
    if (passageGroup.heading !== undefined) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: index
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: index === 0 ? "first" : ""
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, passageGroup.heading)), passageGroup.passages.map(function (passage, index1) {
        return renderPassage(passage, index1);
      }));
    }

    return renderPassage(passageGroup, index);
  })));
}

var BibleContradictions = function BibleContradictions() {
  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])({}),
      _useState2 = _slicedToArray(_useState, 2),
      details = _useState2[0],
      setDetails = _useState2[1];

  var linkCount = 0;
  var answerCount = 0;
  var image_url = "https://i.imgur.com/39duRWk.png";
  var description = "Explanations for every alleged \"contradiction\" in the Bible, including passages, quick answer, and a link to a fuller post for each alleged Bible \"contradiction.\"";
  var date_added = "2018-11-26";
  var updated_at = "2018-11-26";
  var numbers = _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].reduce(function (result, book) {
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
  var pageTitle = "\"Contradictions\" in the Bible: Every alleged biblical \"contradiction\" explained";
  var datePublished = new Date(date_added);
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_6__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1752415582"
  }, pageTitle, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description,
    className: "jsx-1752415582"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: "https://bibleanswers.io/tags/contradictions",
    className: "jsx-1752415582"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: pageTitle,
    className: "jsx-1752415582"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: description,
    className: "jsx-1752415582"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: image_url,
    className: "jsx-1752415582"
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
    className: "jsx-1752415582"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_7__["TitleSection"], {
    title: pageTitle,
    subtitle: "Explanations for every alleged \"contradiction\" in the Bible",
    image_url: image_url,
    date_added: date_added,
    user: {
      name: "Michael Cheng",
      image: "https://i.imgur.com/8aN31Dn.png"
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_8__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1752415582" + " " + "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1752415582"
  }, "Work in progress!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "This page is still a work in progress. Please check back to see updates!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1752415582"
  }, "Numbers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "no quick answer: ", numbers.noQuickAnswer), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "no full post: ", numbers.noFullPost), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1752415582"
  }, "Introduction"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "Opponents of the Bible claim that it contains numerous irreconcilable contradictions. However, none of the \"alleged\" contradictions in the Bible are truly irreconcilable."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "The purpose of this page is to be a comprehensive response to every alleged \"contradiction\" in the Bible."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "top",
    style: {
      color: "rgba(0, 0, 0, .84)"
    },
    className: "jsx-1752415582"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1752415582"
  }, "Table of contents")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1752415582"
  }, "Old Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1752415582" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].slice(0, 39).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1752415582" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      id: "top-".concat(book.book),
      className: "jsx-1752415582"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1752415582"
  }, "New Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1752415582" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].slice(39).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1752415582" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      id: "top-".concat(book.book),
      className: "jsx-1752415582"
    }, book.book, " (", book.answers.length, ")"));
  })), _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1752415582"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#top",
      id: book.book,
      style: {
        display: "flex",
        alignItems: "center",
        marginTop: 28
      },
      className: "jsx-1752415582"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), "\xA0Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      key: book.book,
      style: {
        borderBottom: "1px solid rgba(0, 0, 0, .54)"
      },
      className: "jsx-1752415582" + " " + "nomargin"
    }, book.book), book.answers.map(function (answer, index) {
      linkCount++;

      if (answer.see) {
        var _book = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"], function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });

        var foundAnswer = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_book.answers, function (answerData) {
          return answerData.bookVerses === answer.see[1];
        });
        console.log("======", answer.see, foundAnswer);
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
        var foundBook = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"], function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });
        var foundAnswer = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(foundBook.answers, function (answerData) {
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
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1752415582",
    css: ".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}.writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.writing ol,.writing ul{padding:0 40px;}.writing li{margin-bottom:10px;}.writing li:last-child{margin-bottom:0;}.writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing .first{margin-top:8px;}.writing .nomargin{margin-top:0;}.writing .indent{margin-left:20px;}.writing .image{margin-top:29px;}.writing .image-left{float:left;margin-right:20px;}.writing .image-right{float:right;margin-left:20px;}.writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}.table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.table-contents-item{font-size:16px;margin-top:10px;width:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNlp5QixBQUcwQixBQU9BLEFBY0EsQUFPQSxBQVFBLEFBSUksQUFJSCxBQUkwQixBQVEzQixBQUlGLEFBSUksQUFJRCxBQUlMLEFBS0MsQUFLRSxBQUtDLEFBT0QsQUFRRyxBQUtBLEFBTUEsQUFLQSxBQUtDLEFBS0wsQUFLRSxXQTVERyxDQUtELENBakJuQixDQXNCdUIsQUFZTixDQTlGRSxBQU9BLEFBY25CLEFBT21CLEFBUW5CLEFBb0JBLEFBK0JrQixBQWVFLEFBS0EsQUFNQSxBQUtBLEFBZUYsQ0F6RmxCLEFBd0JBLEFBdURFLENBM0RGLEVBeEJBLFVBaUNBLEFBS0EsQUFpQnVCLEVBUEgsQUFlbEIsQUFLQSxBQU1BLEFBS0EsQUFlWSxDQXJJSCxBQU9BLEFBcUJBLE9BbUJTLEVBOUNGLEFBT0EsQUFxQkEsRUF5R2xCLE1BOUNXLFFBdEZYLEFBT0EsQUFxQkEsQUFrQmEsQ0F5Q2IsTUFQQSxJQWpDb0IsTUE4RUgsWUE3RUcsa0JBQ3BCLDBCQTRDb0IsQ0FpQ3BCLGlCQWhDQSIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbnRyYWRpY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25VcCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgZmluZCwgaXNBcnJheSB9IGZyb20gXCJsb2Rhc2hcIjtcblxuaW1wb3J0IENPTlRSQURJQ1RJT05TIGZyb20gXCIuLi9jb25zdGFudHMvY29udHJhZGljdGlvbnNcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgVGl0bGVTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGl0bGVTZWN0aW9uXCI7XG5pbXBvcnQgUmVhZGluZ0NvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWFkaW5nQ29udGFpbmVyXCI7XG5cbmZ1bmN0aW9uIGJvbGROdW1iZXJzKHRleHQpIHtcbiAgY29uc3Qgc3BsaXRUZXh0ID0gdGV4dC5zcGxpdChcIiBcIik7XG4gIGNvbnN0IG1hcHBlZFRleHQgPSBzcGxpdFRleHQubWFwKHdvcmQgPT4ge1xuICAgIGlmIChwYXJzZUludCh3b3JkKSA8IDEwMCkge1xuICAgICAgcmV0dXJuIGA8c3Ryb25nPiR7d29yZH08L3N0cm9uZz5gO1xuICAgIH1cblxuICAgIHJldHVybiB3b3JkO1xuICB9KTtcblxuICByZXR1cm4gbWFwcGVkVGV4dC5qb2luKFwiIFwiKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFzc2FnZShwYXNzYWdlLCBpbmRleCkge1xuICBjb25zdCB0ZXh0ID0gaXNBcnJheShwYXNzYWdlLnRleHQpID8gKFxuICAgIHBhc3NhZ2UudGV4dC5tYXAoKHBhcmFncmFwaCwgaW5kZXgxKSA9PiAoXG4gICAgICA8cFxuICAgICAgICBrZXk9e2luZGV4MX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmlyc3RcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYm9sZE51bWJlcnMocGFyYWdyYXBoKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApKVxuICApIDogKFxuICAgIDxwXG4gICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICBfX2h0bWw6IGJvbGROdW1iZXJzKHBhc3NhZ2UudGV4dClcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9e2luZGV4ID09PSAwID8gXCJmaXJzdFwiIDogXCJcIn0+XG4gICAgICAgIDxzdHJvbmc+e3Bhc3NhZ2UucGFzc2FnZX08L3N0cm9uZz5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpbmsoeyBpbmRleCwgYm9vaywgYm9va1ZlcnNlcywgY291bnQsIHF1ZXN0aW9uIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IG1hcmdpblRvcDogNiB9fT5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e2AjJHtib29rfV8ke2Jvb2tWZXJzZXN9YH1cbiAgICAgICAgaWQ9e2B0b3BfJHtib29rfV8ke2Jvb2tWZXJzZXN9YH1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGAke2NvdW50fSkgJHtib29rVmVyc2VzfSAtICR7cXVlc3Rpb259YFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQW5zd2VyKHtcbiAgaW5kZXgsXG4gIGJvb2ssXG4gIGJvb2tWZXJzZXMsXG4gIGZvdW5kQm9va1ZlcnNlcyxcbiAgcXVlc3Rpb24sXG4gIGFsbFBhc3NhZ2VzLFxuICBxdWlja0Fuc3dlcixcbiAgZnVsbFBvc3QsXG4gIGNvdW50LFxuICBoaWRlRGV0YWlscyxcbiAgdG9nZ2xlRGV0YWlsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgIDxhIGhyZWY9e2AjdG9wYH0gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWFyZ2luVG9wOiAyOCB9fT5cbiAgICAgICAgPEZhQ2hldnJvblVwIC8+IFRvcFxuICAgICAgPC9hPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17YCMke2Jvb2t9YH1cbiAgICAgICAgaWQ9e2Ake2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luVG9wOiAyOCB9fVxuICAgICAgPlxuICAgICAgICA8RmFDaGV2cm9uVXAgLz4ge2Jvb2t9XG4gICAgICA8L2E+XG4gICAgICA8aDNcbiAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYCR7Y291bnR9KSAke2Jvb2tWZXJzZXN9IC0gJHtxdWVzdGlvbn1gXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICB7Zm91bmRCb29rVmVyc2VzID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICBTYW1lIGFze1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAge2Jvb2t9IHtmb3VuZEJvb2tWZXJzZXN9IC0ge3F1ZXN0aW9ufVxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEZXRhaWx9XG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMDM5QkU1XCIsIGZvbnRTaXplOiAxNiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoaWRlRGV0YWlscyA/IGBTaG93IGAgOiBgSGlkZSBgfSBhbnN3ZXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7aGlkZURldGFpbHMgPyBudWxsIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmaXJzdFwiPlF1aWNrIGFuc3dlcjwvaDQ+XG4gICAgICAgICAgPHA+e3F1aWNrQW5zd2VyfTwvcD5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgRnVsbCBwb3N0OiA8YSBocmVmPXtmdWxsUG9zdH0+e3F1ZXN0aW9ufTwvYT5cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDQ+UGFzc2FnZXM8L2g0PlxuICAgICAgICAgIHthbGxQYXNzYWdlcy5tYXAoKHBhc3NhZ2VHcm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXNzYWdlR3JvdXAuaGVhZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImZpcnN0XCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cGFzc2FnZUdyb3VwLmhlYWRpbmd9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7cGFzc2FnZUdyb3VwLnBhc3NhZ2VzLm1hcCgocGFzc2FnZSwgaW5kZXgxKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJQYXNzYWdlKHBhc3NhZ2UsIGluZGV4MSk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclBhc3NhZ2UocGFzc2FnZUdyb3VwLCBpbmRleCk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgQmlibGVDb250cmFkaWN0aW9ucyA9ICgpID0+IHtcbiAgbGV0IFtkZXRhaWxzLCBzZXREZXRhaWxzXSA9IHVzZVN0YXRlKHt9KTtcblxuICBsZXQgbGlua0NvdW50ID0gMDtcbiAgbGV0IGFuc3dlckNvdW50ID0gMDtcblxuICBjb25zdCBpbWFnZV91cmwgPSBcImh0dHBzOi8vaS5pbWd1ci5jb20vMzlkdVJXay5wbmdcIjtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgRXhwbGFuYXRpb25zIGZvciBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZSwgaW5jbHVkaW5nIHBhc3NhZ2VzLCBxdWljayBhbnN3ZXIsIGFuZCBhIGxpbmsgdG8gYSBmdWxsZXIgcG9zdCBmb3IgZWFjaCBhbGxlZ2VkIEJpYmxlIFwiY29udHJhZGljdGlvbi5cImA7XG4gIGNvbnN0IGRhdGVfYWRkZWQgPSBcIjIwMTgtMTEtMjZcIjtcbiAgY29uc3QgdXBkYXRlZF9hdCA9IFwiMjAxOC0xMS0yNlwiO1xuXG4gIGNvbnN0IG51bWJlcnMgPSBDT05UUkFESUNUSU9OUy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwgYm9vaykgPT4ge1xuICAgICAgYm9vay5hbnN3ZXJzLmZvckVhY2goYW5zd2VyID0+IHtcbiAgICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgICByZXN1bHQudG90YWwrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5zd2VyLnF1aWNrQW5zd2VyKSB7XG4gICAgICAgICAgcmVzdWx0Lm5vUXVpY2tBbnN3ZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5zd2VyLmZ1bGxQb3N0KSB7XG4gICAgICAgICAgcmVzdWx0Lm5vRnVsbFBvc3QrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICB7XG4gICAgICB0b3RhbDogMCxcbiAgICAgIG5vUXVpY2tBbnN3ZXI6IDAsXG4gICAgICBub0Z1bGxQb3N0OiAwXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHBhZ2VUaXRsZSA9IGBcIkNvbnRyYWRpY3Rpb25zXCIgaW4gdGhlIEJpYmxlOiBFdmVyeSBhbGxlZ2VkIGJpYmxpY2FsIFwiY29udHJhZGljdGlvblwiIGV4cGxhaW5lZGA7XG5cbiAgY29uc3QgZGF0ZVB1Ymxpc2hlZCA9IG5ldyBEYXRlKGRhdGVfYWRkZWQpO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3BhZ2VUaXRsZX0gfCBCaWJsZSBBbnN3ZXJzPC90aXRsZT5cblxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vYmlibGVhbnN3ZXJzLmlvL3RhZ3MvY29udHJhZGljdGlvbnNgfVxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cGFnZVRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZV91cmx9IC8+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiQXJ0aWNsZVwiLFxuICAgICAgICAgICAgICBtYWluRW50aXR5T2ZQYWdlOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIldlYlBhZ2VcIixcbiAgICAgICAgICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vZ29vZ2xlLmNvbS9hcnRpY2xlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaGVhZGxpbmU6IHBhZ2VUaXRsZSxcbiAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgICAgICAgICB1cmw6IGltYWdlX3VybCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRlUHVibGlzaGVkOiBkYXRlUHVibGlzaGVkLFxuICAgICAgICAgICAgICBkYXRlTW9kaWZpZWQ6IG5ldyBEYXRlKHVwZGF0ZWRfYXQpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk1pY2hhZWwgQ2hlbmdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwdWJsaXNoZXI6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCaWJsZSBBbnN3ZXJzXCIsXG4gICAgICAgICAgICAgICAgbG9nbzoge1xuICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9kSlB4UFk5LnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRpdGxlU2VjdGlvblxuICAgICAgICB0aXRsZT17cGFnZVRpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17YEV4cGxhbmF0aW9ucyBmb3IgZXZlcnkgYWxsZWdlZCBcImNvbnRyYWRpY3Rpb25cIiBpbiB0aGUgQmlibGVgfVxuICAgICAgICBpbWFnZV91cmw9e2ltYWdlX3VybH1cbiAgICAgICAgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH1cbiAgICAgICAgdXNlcj17e1xuICAgICAgICAgIG5hbWU6IFwiTWljaGFlbCBDaGVuZ1wiLFxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vOGFOMzFEbi5wbmdcIlxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPFJlYWRpbmdDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZ1wiPlxuICAgICAgICAgIDxoMz5Xb3JrIGluIHByb2dyZXNzITwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGlzIHBhZ2UgaXMgc3RpbGwgYSB3b3JrIGluIHByb2dyZXNzLiBQbGVhc2UgY2hlY2sgYmFjayB0byBzZWVcbiAgICAgICAgICAgIHVwZGF0ZXMhXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGgzPk51bWJlcnM8L2gzPlxuXG4gICAgICAgICAgPHA+bm8gcXVpY2sgYW5zd2VyOiB7bnVtYmVycy5ub1F1aWNrQW5zd2VyfTwvcD5cbiAgICAgICAgICA8cD5ubyBmdWxsIHBvc3Q6IHtudW1iZXJzLm5vRnVsbFBvc3R9PC9wPlxuXG4gICAgICAgICAgPGgzPkludHJvZHVjdGlvbjwvaDM+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE9wcG9uZW50cyBvZiB0aGUgQmlibGUgY2xhaW0gdGhhdCBpdCBjb250YWlucyBudW1lcm91c1xuICAgICAgICAgICAgaXJyZWNvbmNpbGFibGUgY29udHJhZGljdGlvbnMuIEhvd2V2ZXIsIG5vbmUgb2YgdGhlIFwiYWxsZWdlZFwiXG4gICAgICAgICAgICBjb250cmFkaWN0aW9ucyBpbiB0aGUgQmlibGUgYXJlIHRydWx5IGlycmVjb25jaWxhYmxlLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBwYWdlIGlzIHRvIGJlIGEgY29tcHJlaGVuc2l2ZSByZXNwb25zZSB0byBldmVyeVxuICAgICAgICAgICAgYWxsZWdlZCBcImNvbnRyYWRpY3Rpb25cIiBpbiB0aGUgQmlibGUuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGEgaWQ9XCJ0b3BcIiBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIC44NClcIiB9fT5cbiAgICAgICAgICAgIDxoMz5UYWJsZSBvZiBjb250ZW50czwvaDM+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGg0Pk9sZCBUZXN0YW1lbnQ8L2g0PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5zbGljZSgwLCAzOSkubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtaXRlbVwiIGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtib29rLmJvb2t9YH0gaWQ9e2B0b3AtJHtib29rLmJvb2t9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9ICh7Ym9vay5hbnN3ZXJzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoND5OZXcgVGVzdGFtZW50PC9oND5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7Q09OVFJBRElDVElPTlMuc2xpY2UoMzkpLm1hcChib29rID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWl0ZW1cIiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7Ym9vay5ib29rfWB9IGlkPXtgdG9wLSR7Ym9vay5ib29rfWB9PlxuICAgICAgICAgICAgICAgICAgICB7Ym9vay5ib29rfSAoe2Jvb2suYW5zd2Vycy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICB7Q09OVFJBRElDVElPTlMubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AjdG9wYH1cbiAgICAgICAgICAgICAgICAgIGlkPXtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyOFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uVXAgLz5cbiAgICAgICAgICAgICAgICAgICZuYnNwO1RvcFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgIGtleT17Ym9vay5ib29rfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC41NClcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIHtib29rLmFuc3dlcnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBsaW5rQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgYm9vayA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgQ09OVFJBRElDVElPTlMsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vayA9PiBib29rLmJvb2sudG9Mb3dlckNhc2UoKSA9PT0gYW5zd2VyLnNlZVswXVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQW5zd2VyID0gZmluZChcbiAgICAgICAgICAgICAgICAgICAgICBib29rLmFuc3dlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VyRGF0YSA9PiBhbnN3ZXJEYXRhLmJvb2tWZXJzZXMgPT09IGFuc3dlci5zZWVbMV1cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgICAgY29uc29sZS5sb2coXCI9PT09PT1cIiwgYW5zd2VyLnNlZSwgZm91bmRBbnN3ZXIpO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyTGluayh7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2tWZXJzZXM6IGFuc3dlci5ib29rVmVyc2VzLFxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBmb3VuZEFuc3dlci5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbGlua0NvdW50XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyTGluayh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgIC4uLmFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IGxpbmtDb3VudFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICB7Ym9vay5hbnN3ZXJzLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgYW5zd2VyQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRCb29rID0gZmluZChcbiAgICAgICAgICAgICAgICAgICAgICBDT05UUkFESUNUSU9OUyxcbiAgICAgICAgICAgICAgICAgICAgICBib29rID0+IGJvb2suYm9vay50b0xvd2VyQ2FzZSgpID09PSBhbnN3ZXIuc2VlWzBdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRBbnN3ZXIgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9vay5hbnN3ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckRhdGEgPT4gYW5zd2VyRGF0YS5ib29rVmVyc2VzID09PSBhbnN3ZXIuc2VlWzFdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0tleSA9IGAke2Jvb2suYm9va31fJHthbnN3ZXIuYm9va1ZlcnNlc31gO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVEZXRhaWxzID0gIWRldGFpbHNbZGV0YWlsc0tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckFuc3dlcih7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmZvdW5kQW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9va1ZlcnNlczogZm91bmRBbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBib29rVmVyc2VzOiBhbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogYW5zd2VyQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgaGlkZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRGV0YWlsKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXRhaWxzS2V5XTogIWRldGFpbHNbZGV0YWlsc0tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJBbnN3ZXIoe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAuLi5hbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBhbnN3ZXJDb3VudFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgaDMgKyBwLFxuICAgICAgICAud3JpdGluZyBoMyArIG9sLFxuICAgICAgICAud3JpdGluZyBoMyArIHVsLFxuICAgICAgICAud3JpdGluZyBoMyArIGJsb2NrcXVvdGUsXG4gICAgICAgIC53cml0aW5nIGg0ICsgcCxcbiAgICAgICAgLndyaXRpbmcgaDQgKyBvbCxcbiAgICAgICAgLndyaXRpbmcgaDQgKyB1bCxcbiAgICAgICAgLndyaXRpbmcgaDQgKyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBwLFxuICAgICAgICAud3JpdGluZyBvbCxcbiAgICAgICAgLndyaXRpbmcgdWwsXG4gICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ODtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIG9sLFxuICAgICAgICAud3JpdGluZyB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgbGkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmZpcnN0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAubm9tYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW5kZW50IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZS1sZWZ0IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2UtcmlnaHQge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGEge1xuICAgICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5yZWZlcmVuY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBwLFxuICAgICAgICAgIC53cml0aW5nIG9sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1jb250ZW50cy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWNvbnRlbnRzLWl0ZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQmlibGVDb250cmFkaWN0aW9ucztcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
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
//# sourceMappingURL=contradictions.js.92a2bfa9ba9ce2a040a1.hot-update.js.map