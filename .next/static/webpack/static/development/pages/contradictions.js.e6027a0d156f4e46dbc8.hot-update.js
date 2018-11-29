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
  var image_url = "https://i.imgur.com/faAmDhY.png";
  var description = "Explanations for every alleged \"contradiction\" in the Bible, including passages, quick answer, and a link to a fuller post for each alleged Bible \"contradiction.\"";
  var date_added = "2018-11-26";
  var updated_at = "2018-11-26";
  var numbers = _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].reduce(function (result, book) {
    book.answers.forEach(function (answer) {
      if (answer.see) {
        result.total++;
      }

      if (!answer.quickAnswer && !answer.see) {
        result.noQuickAnswer++;
      }

      if (!answer.fullPost && !answer.see) {
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
  var matthewIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"], function (book) {
    return book.book === "Matthew";
  });
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
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "top",
    style: {
      color: "rgba(0, 0, 0, .84)"
    },
    className: "jsx-1752415582"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1752415582"
  }, "Table of contents")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1752415582"
  }, "Overview"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1752415582"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#".concat(book.book),
    id: "top-".concat(book.book),
    className: "jsx-1752415582"
  }, book.book, " (", book.answers.length, ")")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1752415582"
  }, "Old Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1752415582" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].slice(0, matthewIndex).map(function (book) {
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
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].slice(matthewIndex).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1752415582" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      id: "top-".concat(book.book),
      className: "jsx-1752415582"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1752415582"
  }, "Work in progress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "This page is still a work in progress. Please check back to see updates!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1752415582"
  }, "Progress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "total: ", numbers.total), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "no quick answer: ", numbers.noQuickAnswer), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "no full post: ", numbers.noFullPost), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1752415582"
  }, "Introduction"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "Opponents of the Bible claim that it contains numerous irreconcilable contradictions. However, none of the \"alleged\" contradictions in the Bible are truly irreconcilable."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1752415582"
  }, "The purpose of this page is to provide possible explanations for every alleged \"contradiction\" in the Bible."), _constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"].map(function (book) {
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
        var foundBook = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_5__["default"], function (book) {
          return book.book.toLowerCase() === answer.see[0];
        });
        var foundAnswer = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(foundBook.answers, function (answerData) {
          return answerData.bookVerses === answer.see[1];
        });
        return renderLink({
          index: index,
          book: book.book,
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
    css: ".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}.writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.writing ol,.writing ul{padding:0 40px;}.writing li{margin-bottom:10px;}.writing li:last-child{margin-bottom:0;}.writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing .first{margin-top:8px;}.writing .nomargin{margin-top:0;}.writing .indent{margin-left:20px;}.writing .image{margin-top:29px;}.writing .image-left{float:left;margin-right:20px;}.writing .image-right{float:right;margin-left:20px;}.writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}.table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.table-contents-item{font-size:16px;margin-top:10px;width:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMGF5QixBQUcwQixBQU9BLEFBY0EsQUFPQSxBQVFBLEFBSUksQUFJSCxBQUkwQixBQVEzQixBQUlGLEFBSUksQUFJRCxBQUlMLEFBS0MsQUFLRSxBQUtDLEFBT0QsQUFRRyxBQUtBLEFBTUEsQUFLQSxBQUtDLEFBS0wsQUFLRSxXQTVERyxDQUtELENBakJuQixDQXNCdUIsQUFZTixDQTlGRSxBQU9BLEFBY25CLEFBT21CLEFBUW5CLEFBb0JBLEFBK0JrQixBQWVFLEFBS0EsQUFNQSxBQUtBLEFBZUYsQ0F6RmxCLEFBd0JBLEFBdURFLENBM0RGLEVBeEJBLFVBaUNBLEFBS0EsQUFpQnVCLEVBUEgsQUFlbEIsQUFLQSxBQU1BLEFBS0EsQUFlWSxDQXJJSCxBQU9BLEFBcUJBLE9BbUJTLEVBOUNGLEFBT0EsQUFxQkEsRUF5R2xCLE1BOUNXLFFBdEZYLEFBT0EsQUFxQkEsQUFrQmEsQ0F5Q2IsTUFQQSxJQWpDb0IsTUE4RUgsWUE3RUcsa0JBQ3BCLDBCQTRDb0IsQ0FpQ3BCLGlCQWhDQSIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbnRyYWRpY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25VcCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgZmluZCwgZmluZEluZGV4LCBpc0FycmF5IH0gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgQ09OVFJBRElDVElPTlMgZnJvbSBcIi4uL2NvbnN0YW50cy9jb250cmFkaWN0aW9uc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBUaXRsZVNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZVNlY3Rpb25cIjtcbmltcG9ydCBSZWFkaW5nQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1JlYWRpbmdDb250YWluZXJcIjtcblxuZnVuY3Rpb24gYm9sZE51bWJlcnModGV4dCkge1xuICBjb25zdCBzcGxpdFRleHQgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcbiAgY29uc3QgbWFwcGVkVGV4dCA9IHNwbGl0VGV4dC5tYXAod29yZCA9PiB7XG4gICAgaWYgKHBhcnNlSW50KHdvcmQpIDwgMTAwKSB7XG4gICAgICByZXR1cm4gYDxzdHJvbmc+JHt3b3JkfTwvc3Ryb25nPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmQ7XG4gIH0pO1xuXG4gIHJldHVybiBtYXBwZWRUZXh0LmpvaW4oXCIgXCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQYXNzYWdlKHBhc3NhZ2UsIGluZGV4KSB7XG4gIGNvbnN0IHRleHQgPSBpc0FycmF5KHBhc3NhZ2UudGV4dCkgPyAoXG4gICAgcGFzc2FnZS50ZXh0Lm1hcCgocGFyYWdyYXBoLCBpbmRleDEpID0+IChcbiAgICAgIDxwXG4gICAgICAgIGtleT17aW5kZXgxfVxuICAgICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBib2xkTnVtYmVycyhwYXJhZ3JhcGgpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICkpXG4gICkgOiAoXG4gICAgPHBcbiAgICAgIGNsYXNzTmFtZT1cImZpcnN0XCJcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgIF9faHRtbDogYm9sZE51bWJlcnMocGFzc2FnZS50ZXh0KVxuICAgICAgfX1cbiAgICAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImZpcnN0XCIgOiBcIlwifT5cbiAgICAgICAgPHN0cm9uZz57cGFzc2FnZS5wYXNzYWdlfTwvc3Ryb25nPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYmxvY2txdW90ZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGluayh7IGluZGV4LCBib29rLCBib29rVmVyc2VzLCBjb3VudCwgcXVlc3Rpb24gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3sgbWFyZ2luVG9wOiA2IH19PlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17YCMke2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBpZD17YHRvcF8ke2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYCR7Y291bnR9KSAke2Jvb2tWZXJzZXN9IC0gJHtxdWVzdGlvbn1gXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBbnN3ZXIoe1xuICBpbmRleCxcbiAgYm9vayxcbiAgYm9va1ZlcnNlcyxcbiAgZm91bmRCb29rVmVyc2VzLFxuICBxdWVzdGlvbixcbiAgYWxsUGFzc2FnZXMsXG4gIHF1aWNrQW5zd2VyLFxuICBmdWxsUG9zdCxcbiAgY291bnQsXG4gIGhpZGVEZXRhaWxzLFxuICB0b2dnbGVEZXRhaWxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgPGEgaHJlZj17YCN0b3BgfSBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5Ub3A6IDI4IH19PlxuICAgICAgICA8RmFDaGV2cm9uVXAgLz4gVG9wXG4gICAgICA8L2E+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtgIyR7Ym9va31gfVxuICAgICAgICBpZD17YCR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpbkxlZnQ6IDIwLCBtYXJnaW5Ub3A6IDI4IH19XG4gICAgICA+XG4gICAgICAgIDxGYUNoZXZyb25VcCAvPiB7Ym9va31cbiAgICAgIDwvYT5cbiAgICAgIDxoM1xuICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgJHtjb3VudH0pICR7Ym9va1ZlcnNlc30gLSAke3F1ZXN0aW9ufWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIHtmb3VuZEJvb2tWZXJzZXMgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgIFNhbWUgYXN7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICB7Ym9va30ge2ZvdW5kQm9va1ZlcnNlc30gLSB7cXVlc3Rpb259XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURldGFpbH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMwMzlCRTVcIiwgZm9udFNpemU6IDE2LCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hpZGVEZXRhaWxzID8gYFNob3cgYCA6IGBIaWRlIGB9IGFuc3dlclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtoaWRlRGV0YWlscyA/IG51bGwgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZpcnN0XCI+UXVpY2sgYW5zd2VyPC9oND5cbiAgICAgICAgICA8cD57cXVpY2tBbnN3ZXJ9PC9wPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICBGdWxsIHBvc3Q6IDxhIGhyZWY9e2Z1bGxQb3N0fT57cXVlc3Rpb259PC9hPlxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoND5QYXNzYWdlczwvaDQ+XG4gICAgICAgICAge2FsbFBhc3NhZ2VzLm1hcCgocGFzc2FnZUdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhc3NhZ2VHcm91cC5oZWFkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtpbmRleCA9PT0gMCA/IFwiZmlyc3RcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntwYXNzYWdlR3JvdXAuaGVhZGluZ308L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIHtwYXNzYWdlR3JvdXAucGFzc2FnZXMubWFwKChwYXNzYWdlLCBpbmRleDEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclBhc3NhZ2UocGFzc2FnZSwgaW5kZXgxKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyUGFzc2FnZShwYXNzYWdlR3JvdXAsIGluZGV4KTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBCaWJsZUNvbnRyYWRpY3Rpb25zID0gKCkgPT4ge1xuICBsZXQgW2RldGFpbHMsIHNldERldGFpbHNdID0gdXNlU3RhdGUoe30pO1xuXG4gIGxldCBsaW5rQ291bnQgPSAwO1xuICBsZXQgYW5zd2VyQ291bnQgPSAwO1xuXG4gIGNvbnN0IGltYWdlX3VybCA9IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9mYUFtRGhZLnBuZ1wiO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGBFeHBsYW5hdGlvbnMgZm9yIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlLCBpbmNsdWRpbmcgcGFzc2FnZXMsIHF1aWNrIGFuc3dlciwgYW5kIGEgbGluayB0byBhIGZ1bGxlciBwb3N0IGZvciBlYWNoIGFsbGVnZWQgQmlibGUgXCJjb250cmFkaWN0aW9uLlwiYDtcbiAgY29uc3QgZGF0ZV9hZGRlZCA9IFwiMjAxOC0xMS0yNlwiO1xuICBjb25zdCB1cGRhdGVkX2F0ID0gXCIyMDE4LTExLTI2XCI7XG5cbiAgY29uc3QgbnVtYmVycyA9IENPTlRSQURJQ1RJT05TLnJlZHVjZShcbiAgICAocmVzdWx0LCBib29rKSA9PiB7XG4gICAgICBib29rLmFuc3dlcnMuZm9yRWFjaChhbnN3ZXIgPT4ge1xuICAgICAgICBpZiAoYW5zd2VyLnNlZSkge1xuICAgICAgICAgIHJlc3VsdC50b3RhbCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbnN3ZXIucXVpY2tBbnN3ZXIgJiYgIWFuc3dlci5zZWUpIHtcbiAgICAgICAgICByZXN1bHQubm9RdWlja0Fuc3dlcisrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbnN3ZXIuZnVsbFBvc3QgJiYgIWFuc3dlci5zZWUpIHtcbiAgICAgICAgICByZXN1bHQubm9GdWxsUG9zdCsrO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHtcbiAgICAgIHRvdGFsOiAwLFxuICAgICAgbm9RdWlja0Fuc3dlcjogMCxcbiAgICAgIG5vRnVsbFBvc3Q6IDBcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgcGFnZVRpdGxlID0gYFwiQ29udHJhZGljdGlvbnNcIiBpbiB0aGUgQmlibGU6IEV2ZXJ5IGFsbGVnZWQgYmlibGljYWwgXCJjb250cmFkaWN0aW9uXCIgZXhwbGFpbmVkYDtcblxuICBjb25zdCBkYXRlUHVibGlzaGVkID0gbmV3IERhdGUoZGF0ZV9hZGRlZCk7XG5cbiAgY29uc3QgbWF0dGhld0luZGV4ID0gZmluZEluZGV4KFxuICAgIENPTlRSQURJQ1RJT05TLFxuICAgIGJvb2sgPT4gYm9vay5ib29rID09PSBcIk1hdHRoZXdcIlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3BhZ2VUaXRsZX0gfCBCaWJsZSBBbnN3ZXJzPC90aXRsZT5cblxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vYmlibGVhbnN3ZXJzLmlvL3RhZ3MvY29udHJhZGljdGlvbnNgfVxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cGFnZVRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZV91cmx9IC8+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiQXJ0aWNsZVwiLFxuICAgICAgICAgICAgICBtYWluRW50aXR5T2ZQYWdlOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIldlYlBhZ2VcIixcbiAgICAgICAgICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vZ29vZ2xlLmNvbS9hcnRpY2xlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaGVhZGxpbmU6IHBhZ2VUaXRsZSxcbiAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgICAgICAgICB1cmw6IGltYWdlX3VybCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRlUHVibGlzaGVkOiBkYXRlUHVibGlzaGVkLFxuICAgICAgICAgICAgICBkYXRlTW9kaWZpZWQ6IG5ldyBEYXRlKHVwZGF0ZWRfYXQpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk1pY2hhZWwgQ2hlbmdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwdWJsaXNoZXI6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCaWJsZSBBbnN3ZXJzXCIsXG4gICAgICAgICAgICAgICAgbG9nbzoge1xuICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9kSlB4UFk5LnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRpdGxlU2VjdGlvblxuICAgICAgICB0aXRsZT17cGFnZVRpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17YEV4cGxhbmF0aW9ucyBmb3IgZXZlcnkgYWxsZWdlZCBcImNvbnRyYWRpY3Rpb25cIiBpbiB0aGUgQmlibGVgfVxuICAgICAgICBpbWFnZV91cmw9e2ltYWdlX3VybH1cbiAgICAgICAgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH1cbiAgICAgICAgdXNlcj17e1xuICAgICAgICAgIG5hbWU6IFwiTWljaGFlbCBDaGVuZ1wiLFxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vOGFOMzFEbi5wbmdcIlxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPFJlYWRpbmdDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZ1wiPlxuICAgICAgICAgIDxhIGlkPVwidG9wXCIgc3R5bGU9e3sgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAuODQpXCIgfX0+XG4gICAgICAgICAgICA8aDM+VGFibGUgb2YgY29udGVudHM8L2gzPlxuICAgICAgICAgIDwvYT5cblxuICAgICAgICAgIDxoND5PdmVydmlldzwvaDQ+XG5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPGEgaHJlZj17YCMke2Jvb2suYm9va31gfSBpZD17YHRvcC0ke2Jvb2suYm9va31gfT5cbiAgICAgICAgICAgICAge2Jvb2suYm9va30gKHtib29rLmFuc3dlcnMubGVuZ3RofSlcbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoND5PbGQgVGVzdGFtZW50PC9oND5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7Q09OVFJBRElDVElPTlMuc2xpY2UoMCwgbWF0dGhld0luZGV4KS5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1pdGVtXCIga2V5PXtib29rLmJvb2t9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCMke2Jvb2suYm9va31gfSBpZD17YHRvcC0ke2Jvb2suYm9va31gfT5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2suYm9va30gKHtib29rLmFuc3dlcnMubGVuZ3RofSlcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGg0Pk5ldyBUZXN0YW1lbnQ8L2g0PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5zbGljZShtYXR0aGV3SW5kZXgpLm1hcChib29rID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWl0ZW1cIiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7Ym9vay5ib29rfWB9IGlkPXtgdG9wLSR7Ym9vay5ib29rfWB9PlxuICAgICAgICAgICAgICAgICAgICB7Ym9vay5ib29rfSAoe2Jvb2suYW5zd2Vycy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDM+V29yayBpbiBwcm9ncmVzczwvaDM+XG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGlzIHBhZ2UgaXMgc3RpbGwgYSB3b3JrIGluIHByb2dyZXNzLiBQbGVhc2UgY2hlY2sgYmFjayB0byBzZWVcbiAgICAgICAgICAgIHVwZGF0ZXMhXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPGgzPlByb2dyZXNzPC9oMz5cblxuICAgICAgICAgIDxwPnRvdGFsOiB7bnVtYmVycy50b3RhbH08L3A+XG4gICAgICAgICAgPHA+bm8gcXVpY2sgYW5zd2VyOiB7bnVtYmVycy5ub1F1aWNrQW5zd2VyfTwvcD5cbiAgICAgICAgICA8cD5ubyBmdWxsIHBvc3Q6IHtudW1iZXJzLm5vRnVsbFBvc3R9PC9wPlxuXG4gICAgICAgICAgPGgzPkludHJvZHVjdGlvbjwvaDM+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIE9wcG9uZW50cyBvZiB0aGUgQmlibGUgY2xhaW0gdGhhdCBpdCBjb250YWlucyBudW1lcm91c1xuICAgICAgICAgICAgaXJyZWNvbmNpbGFibGUgY29udHJhZGljdGlvbnMuIEhvd2V2ZXIsIG5vbmUgb2YgdGhlIFwiYWxsZWdlZFwiXG4gICAgICAgICAgICBjb250cmFkaWN0aW9ucyBpbiB0aGUgQmlibGUgYXJlIHRydWx5IGlycmVjb25jaWxhYmxlLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBwYWdlIGlzIHRvIHByb3ZpZGUgcG9zc2libGUgZXhwbGFuYXRpb25zIGZvclxuICAgICAgICAgICAgZXZlcnkgYWxsZWdlZCBcImNvbnRyYWRpY3Rpb25cIiBpbiB0aGUgQmlibGUuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAge0NPTlRSQURJQ1RJT05TLm1hcChib29rID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxkaXYga2V5PXtib29rLmJvb2t9PlxuICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICBocmVmPXtgI3RvcGB9XG4gICAgICAgICAgICAgICAgICBpZD17Ym9vay5ib29rfVxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjhcbiAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgPEZhQ2hldnJvblVwIC8+XG4gICAgICAgICAgICAgICAgICAmbmJzcDtUb3BcbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICBrZXk9e2Jvb2suYm9va31cbiAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuNTQpXCIgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICB7Ym9vay5ib29rfVxuICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICB7Ym9vay5hbnN3ZXJzLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgbGlua0NvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQm9vayA9IGZpbmQoQ09OVFJBRElDVElPTlMsIGJvb2sgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBib29rLmJvb2sudG9Mb3dlckNhc2UoKSA9PT0gYW5zd2VyLnNlZVswXTtcbiAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRBbnN3ZXIgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9vay5hbnN3ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckRhdGEgPT4gYW5zd2VyRGF0YS5ib29rVmVyc2VzID09PSBhbnN3ZXIuc2VlWzFdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckxpbmsoe1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgICBib29rVmVyc2VzOiBhbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogZm91bmRBbnN3ZXIucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGxpbmtDb3VudFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckxpbmsoe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAuLi5hbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBsaW5rQ291bnRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAge2Jvb2suYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGFuc3dlckNvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQm9vayA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgQ09OVFJBRElDVElPTlMsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vayA9PiBib29rLmJvb2sudG9Mb3dlckNhc2UoKSA9PT0gYW5zd2VyLnNlZVswXVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQW5zd2VyID0gZmluZChcbiAgICAgICAgICAgICAgICAgICAgICBmb3VuZEJvb2suYW5zd2VycyxcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJEYXRhID0+IGFuc3dlckRhdGEuYm9va1ZlcnNlcyA9PT0gYW5zd2VyLnNlZVsxXVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNLZXkgPSBgJHtib29rLmJvb2t9XyR7YW5zd2VyLmJvb2tWZXJzZXN9YDtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWRlRGV0YWlscyA9ICFkZXRhaWxzW2RldGFpbHNLZXldO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJBbnN3ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5mb3VuZEFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgICBmb3VuZEJvb2tWZXJzZXM6IGZvdW5kQW5zd2VyLmJvb2tWZXJzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgYm9va1ZlcnNlczogYW5zd2VyLmJvb2tWZXJzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGFuc3dlckNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIGhpZGVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZURldGFpbCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHNldERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICBbZGV0YWlsc0tleV06ICFkZXRhaWxzW2RldGFpbHNLZXldXG4gICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyQW5zd2VyKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgLi4uYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogYW5zd2VyQ291bnRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFkaW5nQ29udGFpbmVyPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAud3JpdGluZyBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yMjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGgzICsgcCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBvbCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyB1bCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBibG9ja3F1b3RlLFxuICAgICAgICAud3JpdGluZyBoNCArIHAsXG4gICAgICAgIC53cml0aW5nIGg0ICsgb2wsXG4gICAgICAgIC53cml0aW5nIGg0ICsgdWwsXG4gICAgICAgIC53cml0aW5nIGg0ICsgYmxvY2txdW90ZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAgIC53cml0aW5nIHVsLFxuICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBvbCxcbiAgICAgICAgLndyaXRpbmcgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGxpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5maXJzdCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLm5vbWFyZ2luIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmluZGVudCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2UtbGVmdCB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlLXJpZ2h0IHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBhIHtcbiAgICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAucmVmZXJlbmNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAud3JpdGluZyBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgICAud3JpdGluZyBvbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUtY29udGVudHMtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1jb250ZW50cy1pdGVtIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpYmxlQ29udHJhZGljdGlvbnM7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
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
//# sourceMappingURL=contradictions.js.e6027a0d156f4e46dbc8.hot-update.js.map