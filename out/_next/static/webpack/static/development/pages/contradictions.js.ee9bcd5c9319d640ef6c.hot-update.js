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
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @material-ui/core/TextField */ "./node_modules/@material-ui/core/TextField/index.js");
/* harmony import */ var _material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _utils_writing__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/writing */ "./utils/writing.js");
/* harmony import */ var _constants_contradictions__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../constants/contradictions */ "./constants/contradictions/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












function renderPassage(passage, index) {
  var text = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isArray"])(passage.text) ? passage.text.map(function (paragraph, index1) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index1,
      className: "first",
      dangerouslySetInnerHTML: {
        __html: Object(_utils_writing__WEBPACK_IMPORTED_MODULE_6__["boldNumbers"])(paragraph)
      }
    });
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "first",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_writing__WEBPACK_IMPORTED_MODULE_6__["boldNumbers"])(passage.text)
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
    key: index,
    style: {
      border: "3px solid rgba(0, 0, 0, .54)",
      borderBottom: 0,
      borderLeft: 0,
      borderRight: 0,
      marginTop: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#top",
    style: {
      display: "inline-block",
      marginTop: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), " Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#".concat(book),
    id: "".concat(book, "_").concat(bookVerses),
    style: {
      display: "inline-block",
      marginLeft: 20,
      marginTop: 20
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
  }, "Quick answer"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: quickAnswer
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", null, "Full post:", " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: fullPost,
    target: "_blank"
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
  var numbers = _constants_contradictions__WEBPACK_IMPORTED_MODULE_7__["default"].reduce(function (result, book) {
    book.answers.forEach(function (answer) {
      if (!answer.see) {
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
  var matthewIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_7__["default"], function (book) {
    return book.book === "Matthew";
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_8__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-1032469568"
  }, pageTitle, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description,
    className: "jsx-1032469568"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: "https://bibleanswers.io/tags/contradictions",
    className: "jsx-1032469568"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: pageTitle,
    className: "jsx-1032469568"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: description,
    className: "jsx-1032469568"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: image_url,
    className: "jsx-1032469568"
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
    className: "jsx-1032469568"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_9__["TitleSection"], {
    title: pageTitle,
    subtitle: "Explanations for every alleged \"contradiction\" in the Bible",
    image_url: image_url,
    date_added: date_added,
    user: {
      name: "Michael Cheng",
      image: "https://i.imgur.com/8aN31Dn.png"
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_10__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "search"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "search__input",
    placeholder: "Search by passage or keyword"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "top",
    style: {
      color: "rgba(0, 0, 0, .84)"
    },
    className: "jsx-1032469568"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, "Table of contents")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1032469568"
  }, "Overview"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#introduction",
    className: "jsx-1032469568"
  }, "1. Introduction")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#faqs",
    className: "jsx-1032469568"
  }, "2. Frequently asked questions")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1032469568"
  }, "Old Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_7__["default"].slice(0, matthewIndex).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1032469568" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      className: "jsx-1032469568"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1032469568"
  }, "New Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1032469568" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_7__["default"].slice(matthewIndex).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1032469568" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      className: "jsx-1032469568"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, "Work in progress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568"
  }, "This page is still a work in progress. Please check back to see updates!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568" + " " + "first"
  }, "Total explanations: ", numbers.total), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568" + " " + "first"
  }, "Quick answers remaining: ", numbers.noQuickAnswer), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568" + " " + "first"
  }, "Full post remaining: ", numbers.noFullPost), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "introduction",
    className: "jsx-1032469568" + " " + "link-target"
  }, "Introduction")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568"
  }, "Opponents of the Bible claim that it contains numerous irreconcilable contradictions. However, none of the \"alleged\" contradictions in the Bible are truly irreconcilable."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1032469568"
  }, "The purpose of this page is to provide possible explanations for every alleged \"contradiction\" in the Bible."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-1032469568"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "faqs",
    className: "jsx-1032469568" + " " + "link-target"
  }, "Frequently asked questions")), _constants_contradictions__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1032469568"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#top",
      id: book.book,
      style: {
        display: "flex",
        alignItems: "center",
        marginTop: 28
      },
      className: "jsx-1032469568"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), "\xA0Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      key: book.book,
      style: {
        borderBottom: "1px solid rgba(0, 0, 0, .54)"
      },
      className: "jsx-1032469568" + " " + "nomargin"
    }, book.book), book.answers.map(function (answer, index) {
      linkCount++;

      if (answer.see) {
        var foundBook = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_7__["default"], function (book) {
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
        var foundBook = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_7__["default"], function (book) {
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
    styleId: "1032469568",
    css: ".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}p:first-child,.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}.writing ol,.writing ul{padding:0 40px;}.writing li{margin-bottom:10px;}.writing li:last-child{margin-bottom:0;}.writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing .first{margin-top:8px;}.writing .nomargin{margin-top:0;}.writing .indent{margin-left:20px;}.writing .image{margin-top:29px;}.writing .image-left{float:left;margin-right:20px;}.writing .image-right{float:right;margin-left:20px;}.writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}.table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.table-contents-item{font-size:16px;margin-top:10px;width:150px;}.writing .link-target{color:rgba(0,0,0,0.84);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNGJ5QixBQUcwQixBQU9BLEFBVUEsQUFlQSxBQUtBLEFBSUksQUFJSCxBQUkwQixBQVEzQixBQUlGLEFBSUksQUFJRCxBQUlMLEFBS0MsQUFLRSxBQUtDLEFBT0QsQUFRRyxBQUtBLEFBTUEsQUFLQSxBQUtDLEFBS0wsQUFLRSxBQU1XLFdBbEVSLENBS0QsQ0FqQm5CLENBc0J1QixBQVlOLENBL0ZFLEFBT0EsQUFVQSxBQWVuQixBQUtBLEFBb0JBLEFBK0JrQixBQWVFLEFBS0EsQUFNQSxBQUtBLEFBZUYsQ0F6RmxCLEFBd0JBLEFBdURFLENBM0RGLEVBeEJBLElBbUdBLE1BbEVBLEFBS0EsQUFpQnVCLEVBUEgsQUFlbEIsQUFLQSxBQU1BLEFBS0EsQUFlWSxDQXRJSCxBQU9BLEFBVUEsT0ErQlMsRUEvQ0YsQUFPQSxBQVVBLEVBcUhsQixNQTlDVyxRQXZGWCxBQU9BLEFBVUEsQUE4QmEsQ0F5Q2IsTUFQQSxJQWpDb0IsTUE4RUgsWUE3RUcsa0JBQ3BCLDBCQTRDb0IsQ0FpQ3BCLGlCQWhDQSIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbnRyYWRpY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25VcCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgZmluZCwgZmluZEluZGV4LCBpc0FycmF5IH0gZnJvbSBcImxvZGFzaFwiO1xuaW1wb3J0IFRleHRGaWVsZCBmcm9tIFwiQG1hdGVyaWFsLXVpL2NvcmUvVGV4dEZpZWxkXCI7XG5cbmltcG9ydCB7IGJvbGROdW1iZXJzIH0gZnJvbSBcIi4uL3V0aWxzL3dyaXRpbmdcIjtcbmltcG9ydCBDT05UUkFESUNUSU9OUyBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnRyYWRpY3Rpb25zXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCB7IFRpdGxlU2VjdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RpdGxlU2VjdGlvblwiO1xuaW1wb3J0IFJlYWRpbmdDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVhZGluZ0NvbnRhaW5lclwiO1xuXG5mdW5jdGlvbiByZW5kZXJQYXNzYWdlKHBhc3NhZ2UsIGluZGV4KSB7XG4gIGNvbnN0IHRleHQgPSBpc0FycmF5KHBhc3NhZ2UudGV4dCkgPyAoXG4gICAgcGFzc2FnZS50ZXh0Lm1hcCgocGFyYWdyYXBoLCBpbmRleDEpID0+IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtpbmRleDF9XG4gICAgICAgIGNsYXNzTmFtZT1cImZpcnN0XCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGJvbGROdW1iZXJzKHBhcmFncmFwaClcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKSlcbiAgKSA6IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICBfX2h0bWw6IGJvbGROdW1iZXJzKHBhc3NhZ2UudGV4dClcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9e2luZGV4ID09PSAwID8gXCJmaXJzdFwiIDogXCJcIn0+XG4gICAgICAgIDxzdHJvbmc+e3Bhc3NhZ2UucGFzc2FnZX08L3N0cm9uZz5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpbmsoeyBpbmRleCwgYm9vaywgYm9va1ZlcnNlcywgY291bnQsIHF1ZXN0aW9uIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IG1hcmdpblRvcDogNiB9fT5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e2AjJHtib29rfV8ke2Jvb2tWZXJzZXN9YH1cbiAgICAgICAgaWQ9e2B0b3BfJHtib29rfV8ke2Jvb2tWZXJzZXN9YH1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGAke2NvdW50fSkgJHtib29rVmVyc2VzfSAtICR7cXVlc3Rpb259YFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQW5zd2VyKHtcbiAgaW5kZXgsXG4gIGJvb2ssXG4gIGJvb2tWZXJzZXMsXG4gIGZvdW5kQm9va1ZlcnNlcyxcbiAgcXVlc3Rpb24sXG4gIGFsbFBhc3NhZ2VzLFxuICBxdWlja0Fuc3dlcixcbiAgZnVsbFBvc3QsXG4gIGNvdW50LFxuICBoaWRlRGV0YWlscyxcbiAgdG9nZ2xlRGV0YWlsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJvcmRlcjogXCIzcHggc29saWQgcmdiYSgwLCAwLCAwLCAuNTQpXCIsXG4gICAgICAgIGJvcmRlckJvdHRvbTogMCxcbiAgICAgICAgYm9yZGVyTGVmdDogMCxcbiAgICAgICAgYm9yZGVyUmlnaHQ6IDAsXG4gICAgICAgIG1hcmdpblRvcDogMjBcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGEgaHJlZj17YCN0b3BgfSBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICA8RmFDaGV2cm9uVXAgLz4gVG9wXG4gICAgICA8L2E+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtgIyR7Ym9va31gfVxuICAgICAgICBpZD17YCR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpbkxlZnQ6IDIwLCBtYXJnaW5Ub3A6IDIwIH19XG4gICAgICA+XG4gICAgICAgIDxGYUNoZXZyb25VcCAvPiB7Ym9va31cbiAgICAgIDwvYT5cbiAgICAgIDxoM1xuICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgJHtjb3VudH0pICR7Ym9va1ZlcnNlc30gLSAke3F1ZXN0aW9ufWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIHtmb3VuZEJvb2tWZXJzZXMgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgIFNhbWUgYXN7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICB7Ym9va30ge2ZvdW5kQm9va1ZlcnNlc30gLSB7cXVlc3Rpb259XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURldGFpbH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMwMzlCRTVcIiwgZm9udFNpemU6IDE2LCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hpZGVEZXRhaWxzID8gYFNob3cgYCA6IGBIaWRlIGB9IGFuc3dlclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtoaWRlRGV0YWlscyA/IG51bGwgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZpcnN0XCI+UXVpY2sgYW5zd2VyPC9oND5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcXVpY2tBbnN3ZXIgfX0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgRnVsbCBwb3N0OntcIiBcIn1cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtmdWxsUG9zdH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICB7cXVlc3Rpb259XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoND5QYXNzYWdlczwvaDQ+XG4gICAgICAgICAge2FsbFBhc3NhZ2VzLm1hcCgocGFzc2FnZUdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhc3NhZ2VHcm91cC5oZWFkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtpbmRleCA9PT0gMCA/IFwiZmlyc3RcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntwYXNzYWdlR3JvdXAuaGVhZGluZ308L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIHtwYXNzYWdlR3JvdXAucGFzc2FnZXMubWFwKChwYXNzYWdlLCBpbmRleDEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclBhc3NhZ2UocGFzc2FnZSwgaW5kZXgxKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyUGFzc2FnZShwYXNzYWdlR3JvdXAsIGluZGV4KTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBCaWJsZUNvbnRyYWRpY3Rpb25zID0gKCkgPT4ge1xuICBsZXQgW2RldGFpbHMsIHNldERldGFpbHNdID0gdXNlU3RhdGUoe30pO1xuXG4gIGxldCBsaW5rQ291bnQgPSAwO1xuICBsZXQgYW5zd2VyQ291bnQgPSAwO1xuXG4gIGNvbnN0IGltYWdlX3VybCA9IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9mYUFtRGhZLnBuZ1wiO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGBFeHBsYW5hdGlvbnMgZm9yIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlLCBpbmNsdWRpbmcgcGFzc2FnZXMsIHF1aWNrIGFuc3dlciwgYW5kIGEgbGluayB0byBhIGZ1bGxlciBwb3N0IGZvciBlYWNoIGFsbGVnZWQgQmlibGUgXCJjb250cmFkaWN0aW9uLlwiYDtcbiAgY29uc3QgZGF0ZV9hZGRlZCA9IFwiMjAxOC0xMS0yNlwiO1xuICBjb25zdCB1cGRhdGVkX2F0ID0gXCIyMDE4LTExLTI2XCI7XG5cbiAgY29uc3QgbnVtYmVycyA9IENPTlRSQURJQ1RJT05TLnJlZHVjZShcbiAgICAocmVzdWx0LCBib29rKSA9PiB7XG4gICAgICBib29rLmFuc3dlcnMuZm9yRWFjaChhbnN3ZXIgPT4ge1xuICAgICAgICBpZiAoIWFuc3dlci5zZWUpIHtcbiAgICAgICAgICByZXN1bHQudG90YWwrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5zd2VyLnF1aWNrQW5zd2VyICYmICFhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgcmVzdWx0Lm5vUXVpY2tBbnN3ZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5zd2VyLmZ1bGxQb3N0ICYmICFhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgcmVzdWx0Lm5vRnVsbFBvc3QrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICB7XG4gICAgICB0b3RhbDogMCxcbiAgICAgIG5vUXVpY2tBbnN3ZXI6IDAsXG4gICAgICBub0Z1bGxQb3N0OiAwXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHBhZ2VUaXRsZSA9IGBcIkNvbnRyYWRpY3Rpb25zXCIgaW4gdGhlIEJpYmxlOiBFdmVyeSBhbGxlZ2VkIGJpYmxpY2FsIFwiY29udHJhZGljdGlvblwiIGV4cGxhaW5lZGA7XG5cbiAgY29uc3QgZGF0ZVB1Ymxpc2hlZCA9IG5ldyBEYXRlKGRhdGVfYWRkZWQpO1xuXG4gIGNvbnN0IG1hdHRoZXdJbmRleCA9IGZpbmRJbmRleChcbiAgICBDT05UUkFESUNUSU9OUyxcbiAgICBib29rID0+IGJvb2suYm9vayA9PT0gXCJNYXR0aGV3XCJcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwYWdlVGl0bGV9IHwgQmlibGUgQW5zd2VyczwvdGl0bGU+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL2JpYmxlYW5zd2Vycy5pby90YWdzL2NvbnRyYWRpY3Rpb25zYH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3BhZ2VUaXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1hZ2VfdXJsfSAvPlxuXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFydGljbGVcIixcbiAgICAgICAgICAgICAgbWFpbkVudGl0eU9mUGFnZToge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgICAgICAgICAgICAgXCJAaWRcIjogXCJodHRwczovL2dvb2dsZS5jb20vYXJ0aWNsZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGhlYWRsaW5lOiBwYWdlVGl0bGUsXG4gICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgdXJsOiBpbWFnZV91cmwsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0ZVB1Ymxpc2hlZDogZGF0ZVB1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSh1cGRhdGVkX2F0KS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJNaWNoYWVsIENoZW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHVibGlzaGVyOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmlibGUgQW5zd2Vyc1wiLFxuICAgICAgICAgICAgICAgIGxvZ286IHtcbiAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vZEpQeFBZOS5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUaXRsZVNlY3Rpb25cbiAgICAgICAgdGl0bGU9e3BhZ2VUaXRsZX1cbiAgICAgICAgc3VidGl0bGU9e2BFeHBsYW5hdGlvbnMgZm9yIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlYH1cbiAgICAgICAgaW1hZ2VfdXJsPXtpbWFnZV91cmx9XG4gICAgICAgIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9XG4gICAgICAgIHVzZXI9e3tcbiAgICAgICAgICBuYW1lOiBcIk1pY2hhZWwgQ2hlbmdcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tLzhhTjMxRG4ucG5nXCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxSZWFkaW5nQ29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaF9faW5wdXRcIlxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgcGFzc2FnZSBvciBrZXl3b3JkXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cml0aW5nXCI+XG4gICAgICAgICAgPGEgaWQ9XCJ0b3BcIiBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIC44NClcIiB9fT5cbiAgICAgICAgICAgIDxoMz5UYWJsZSBvZiBjb250ZW50czwvaDM+XG4gICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgPGg0Pk92ZXJ2aWV3PC9oND5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e2AjaW50cm9kdWN0aW9uYH0+MS4gSW50cm9kdWN0aW9uPC9hPlxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgIDxhIGhyZWY9e2AjZmFxc2B9PjIuIEZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25zPC9hPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGg0Pk9sZCBUZXN0YW1lbnQ8L2g0PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5zbGljZSgwLCBtYXR0aGV3SW5kZXgpLm1hcChib29rID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWl0ZW1cIiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7Ym9vay5ib29rfWB9PlxuICAgICAgICAgICAgICAgICAgICB7Ym9vay5ib29rfSAoe2Jvb2suYW5zd2Vycy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDQ+TmV3IFRlc3RhbWVudDwvaDQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge0NPTlRSQURJQ1RJT05TLnNsaWNlKG1hdHRoZXdJbmRleCkubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtaXRlbVwiIGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtib29rLmJvb2t9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9ICh7Ym9vay5hbnN3ZXJzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoMz5Xb3JrIGluIHByb2dyZXNzPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoaXMgcGFnZSBpcyBzdGlsbCBhIHdvcmsgaW4gcHJvZ3Jlc3MuIFBsZWFzZSBjaGVjayBiYWNrIHRvIHNlZVxuICAgICAgICAgICAgdXBkYXRlcyFcbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPlRvdGFsIGV4cGxhbmF0aW9uczoge251bWJlcnMudG90YWx9PC9wPlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICBRdWljayBhbnN3ZXJzIHJlbWFpbmluZzoge251bWJlcnMubm9RdWlja0Fuc3dlcn1cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5GdWxsIHBvc3QgcmVtYWluaW5nOiB7bnVtYmVycy5ub0Z1bGxQb3N0fTwvcD5cblxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIDxhIGlkPVwiaW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwibGluay10YXJnZXRcIj5cbiAgICAgICAgICAgICAgSW50cm9kdWN0aW9uXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9oMz5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgT3Bwb25lbnRzIG9mIHRoZSBCaWJsZSBjbGFpbSB0aGF0IGl0IGNvbnRhaW5zIG51bWVyb3VzXG4gICAgICAgICAgICBpcnJlY29uY2lsYWJsZSBjb250cmFkaWN0aW9ucy4gSG93ZXZlciwgbm9uZSBvZiB0aGUgXCJhbGxlZ2VkXCJcbiAgICAgICAgICAgIGNvbnRyYWRpY3Rpb25zIGluIHRoZSBCaWJsZSBhcmUgdHJ1bHkgaXJyZWNvbmNpbGFibGUuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGUgcHVycG9zZSBvZiB0aGlzIHBhZ2UgaXMgdG8gcHJvdmlkZSBwb3NzaWJsZSBleHBsYW5hdGlvbnMgZm9yXG4gICAgICAgICAgICBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8aDM+XG4gICAgICAgICAgICA8YSBpZD1cImZhcXNcIiBjbGFzc05hbWU9XCJsaW5rLXRhcmdldFwiPlxuICAgICAgICAgICAgICBGcmVxdWVudGx5IGFza2VkIHF1ZXN0aW9uc1xuICAgICAgICAgICAgPC9hPlxuICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICB7Q09OVFJBRElDVElPTlMubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgIGhyZWY9e2AjdG9wYH1cbiAgICAgICAgICAgICAgICAgIGlkPXtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyOFxuICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uVXAgLz5cbiAgICAgICAgICAgICAgICAgICZuYnNwO1RvcFxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgIGtleT17Ym9vay5ib29rfVxuICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC41NClcIiB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgIHtib29rLmFuc3dlcnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBsaW5rQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRCb29rID0gZmluZChDT05UUkFESUNUSU9OUywgYm9vayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGJvb2suYm9vay50b0xvd2VyQ2FzZSgpID09PSBhbnN3ZXIuc2VlWzBdO1xuICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEFuc3dlciA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgZm91bmRCb29rLmFuc3dlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VyRGF0YSA9PiBhbnN3ZXJEYXRhLmJvb2tWZXJzZXMgPT09IGFuc3dlci5zZWVbMV1cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyTGluayh7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2tWZXJzZXM6IGFuc3dlci5ib29rVmVyc2VzLFxuICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBmb3VuZEFuc3dlci5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbGlua0NvdW50XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyTGluayh7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgIC4uLmFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IGxpbmtDb3VudFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICB7Ym9vay5hbnN3ZXJzLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgYW5zd2VyQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRCb29rID0gZmluZChcbiAgICAgICAgICAgICAgICAgICAgICBDT05UUkFESUNUSU9OUyxcbiAgICAgICAgICAgICAgICAgICAgICBib29rID0+IGJvb2suYm9vay50b0xvd2VyQ2FzZSgpID09PSBhbnN3ZXIuc2VlWzBdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRBbnN3ZXIgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9vay5hbnN3ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckRhdGEgPT4gYW5zd2VyRGF0YS5ib29rVmVyc2VzID09PSBhbnN3ZXIuc2VlWzFdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0tleSA9IGAke2Jvb2suYm9va31fJHthbnN3ZXIuYm9va1ZlcnNlc31gO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVEZXRhaWxzID0gIWRldGFpbHNbZGV0YWlsc0tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckFuc3dlcih7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmZvdW5kQW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9va1ZlcnNlczogZm91bmRBbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBib29rVmVyc2VzOiBhbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogYW5zd2VyQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgaGlkZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRGV0YWlsKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXRhaWxzS2V5XTogIWRldGFpbHNbZGV0YWlsc0tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJBbnN3ZXIoe1xuICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAuLi5hbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgIGNvdW50OiBhbnN3ZXJDb3VudFxuICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgKTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAgIC53cml0aW5nIHVsLFxuICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwOmZpcnN0LWNoaWxkLFxuICAgICAgICAud3JpdGluZyBoMyArIHAsXG4gICAgICAgIC53cml0aW5nIGgzICsgb2wsXG4gICAgICAgIC53cml0aW5nIGgzICsgdWwsXG4gICAgICAgIC53cml0aW5nIGgzICsgYmxvY2txdW90ZSxcbiAgICAgICAgLndyaXRpbmcgaDQgKyBwLFxuICAgICAgICAud3JpdGluZyBoNCArIG9sLFxuICAgICAgICAud3JpdGluZyBoNCArIHVsLFxuICAgICAgICAud3JpdGluZyBoNCArIGJsb2NrcXVvdGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIG9sLFxuICAgICAgICAud3JpdGluZyB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgbGkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmZpcnN0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAubm9tYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW5kZW50IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZS1sZWZ0IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2UtcmlnaHQge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGEge1xuICAgICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5yZWZlcmVuY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBwLFxuICAgICAgICAgIC53cml0aW5nIG9sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1jb250ZW50cy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWNvbnRlbnRzLWl0ZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5saW5rLXRhcmdldCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpYmxlQ29udHJhZGljdGlvbnM7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
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
//# sourceMappingURL=contradictions.js.ee9bcd5c9319d640ef6c.hot-update.js.map