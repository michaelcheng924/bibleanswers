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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(""),
      _useState4 = _slicedToArray(_useState3, 2),
      search = _useState4[0],
      setSearch = _useState4[1];

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
    className: "jsx-767158461"
  }, pageTitle, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description,
    className: "jsx-767158461"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: "https://bibleanswers.io/tags/contradictions",
    className: "jsx-767158461"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: pageTitle,
    className: "jsx-767158461"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: description,
    className: "jsx-767158461"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: image_url,
    className: "jsx-767158461"
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
    className: "jsx-767158461"
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
    className: "jsx-767158461" + " " + "search"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaSearch"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "search__input",
    onChange: setSearch,
    placeholder: "Search by passage or keyword",
    value: search
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-767158461" + " " + "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "top",
    style: {
      color: "rgba(0, 0, 0, .84)"
    },
    className: "jsx-767158461"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-767158461" + " " + "first"
  }, "Table of contents")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-767158461"
  }, "Overview"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-767158461" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#introduction",
    className: "jsx-767158461"
  }, "1. Introduction")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-767158461" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#faqs",
    className: "jsx-767158461"
  }, "2. Frequently asked questions")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-767158461"
  }, "Old Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-767158461" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_7__["default"].slice(0, matthewIndex).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-767158461" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      className: "jsx-767158461"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-767158461"
  }, "New Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-767158461" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_7__["default"].slice(matthewIndex).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-767158461" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      className: "jsx-767158461"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-767158461"
  }, "Work in progress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-767158461"
  }, "This page is still a work in progress. Please check back to see updates!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-767158461" + " " + "first"
  }, "Total explanations: ", numbers.total), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-767158461" + " " + "first"
  }, "Quick answers remaining: ", numbers.noQuickAnswer), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-767158461" + " " + "first"
  }, "Full post remaining: ", numbers.noFullPost), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-767158461"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "introduction",
    className: "jsx-767158461" + " " + "link-target"
  }, "Introduction")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-767158461"
  }, "Opponents of the Bible claim that it contains numerous irreconcilable contradictions. However, none of the \"alleged\" contradictions in the Bible are truly irreconcilable."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-767158461"
  }, "The purpose of this page is to provide possible explanations for every alleged \"contradiction\" in the Bible."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-767158461"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "faqs",
    className: "jsx-767158461" + " " + "link-target"
  }, "Frequently asked questions")), _constants_contradictions__WEBPACK_IMPORTED_MODULE_7__["default"].map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-767158461"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#top",
      id: book.book,
      style: {
        display: "flex",
        alignItems: "center",
        marginTop: 28
      },
      className: "jsx-767158461"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), "\xA0Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      key: book.book,
      style: {
        borderBottom: "1px solid rgba(0, 0, 0, .54)"
      },
      className: "jsx-767158461" + " " + "nomargin"
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
    styleId: "767158461",
    css: ".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}p:first-child,.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}.writing ol,.writing ul{padding:0 40px;}.writing li{margin-bottom:10px;}.writing li:last-child{margin-bottom:0;}.writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing .first{margin-top:8px;}.writing .nomargin{margin-top:0;}.writing .indent{margin-left:20px;}.writing .image{margin-top:29px;}.writing .image-left{float:left;margin-right:20px;}.writing .image-right{float:right;margin-left:20px;}.writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}.table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.table-contents-item{font-size:16px;margin-top:10px;width:150px;}.writing .link-target{color:rgba(0,0,0,0.84);}.search{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#bdbdbd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px 0;}.search__input{margin-left:10px;width:320px;}.search__input input{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ2N5QixBQUcwQixBQU9BLEFBVUEsQUFlQSxBQUtBLEFBSUksQUFJSCxBQUkwQixBQVEzQixBQUlGLEFBSUksQUFJRCxBQUlMLEFBS0MsQUFLRSxBQUtDLEFBT0QsQUFRRyxBQUtBLEFBTUEsQUFLQSxBQUtDLEFBS0wsQUFLRSxBQU1XLEFBSVAsQUFRRixBQUtDLFdBbkZBLENBS0QsQ0FqQm5CLENBc0J1QixBQVlOLENBL0ZFLEFBT0EsQUFVQSxBQWVuQixBQUtBLEFBb0JBLEFBK0JrQixBQWVFLEFBS0EsQUFNQSxBQUtBLEFBZUYsQ0F6RmxCLEFBd0JBLEFBdURFLENBM0RGLEFBdUZjLENBS2QsQ0FwSEEsSUFtR0EsTUFsRUEsQUFLQSxBQWlCdUIsQUF5RHZCLEVBaEVvQixBQWVsQixBQUtBLEFBTUEsQUFLQSxBQWVZLENBdElILEFBT0EsQUFVQSxPQStCUyxFQS9DRixBQU9BLEFBVUEsRUFxSGxCLE1BOUNXLFFBdkZYLEFBT0EsQUFVQSxBQThCYSxDQXlDYixNQVBBLElBakNvQixNQThFSCxZQTdFRyxPQTRGSixXQTNGaEIsR0E0RmUsdUJBaERLLENBaUNwQixpQkFoQ0EsaUNBZ0R5QixtR0FDVCxjQUNoQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbnRyYWRpY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25VcCwgRmFTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGZpbmQsIGZpbmRJbmRleCwgaXNBcnJheSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuXG5pbXBvcnQgeyBib2xkTnVtYmVycyB9IGZyb20gXCIuLi91dGlscy93cml0aW5nXCI7XG5pbXBvcnQgQ09OVFJBRElDVElPTlMgZnJvbSBcIi4uL2NvbnN0YW50cy9jb250cmFkaWN0aW9uc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBUaXRsZVNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZVNlY3Rpb25cIjtcbmltcG9ydCBSZWFkaW5nQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1JlYWRpbmdDb250YWluZXJcIjtcblxuZnVuY3Rpb24gcmVuZGVyUGFzc2FnZShwYXNzYWdlLCBpbmRleCkge1xuICBjb25zdCB0ZXh0ID0gaXNBcnJheShwYXNzYWdlLnRleHQpID8gKFxuICAgIHBhc3NhZ2UudGV4dC5tYXAoKHBhcmFncmFwaCwgaW5kZXgxKSA9PiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17aW5kZXgxfVxuICAgICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBib2xkTnVtYmVycyhwYXJhZ3JhcGgpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICkpXG4gICkgOiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmlyc3RcIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgX19odG1sOiBib2xkTnVtYmVycyhwYXNzYWdlLnRleHQpXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPXtpbmRleCA9PT0gMCA/IFwiZmlyc3RcIiA6IFwiXCJ9PlxuICAgICAgICA8c3Ryb25nPntwYXNzYWdlLnBhc3NhZ2V9PC9zdHJvbmc+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9ibG9ja3F1b3RlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaW5rKHsgaW5kZXgsIGJvb2ssIGJvb2tWZXJzZXMsIGNvdW50LCBxdWVzdGlvbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBtYXJnaW5Ub3A6IDYgfX0+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtgIyR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIGlkPXtgdG9wXyR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgJHtjb3VudH0pICR7Ym9va1ZlcnNlc30gLSAke3F1ZXN0aW9ufWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFuc3dlcih7XG4gIGluZGV4LFxuICBib29rLFxuICBib29rVmVyc2VzLFxuICBmb3VuZEJvb2tWZXJzZXMsXG4gIHF1ZXN0aW9uLFxuICBhbGxQYXNzYWdlcyxcbiAgcXVpY2tBbnN3ZXIsXG4gIGZ1bGxQb3N0LFxuICBjb3VudCxcbiAgaGlkZURldGFpbHMsXG4gIHRvZ2dsZURldGFpbFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGtleT17aW5kZXh9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBib3JkZXI6IFwiM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjU0KVwiLFxuICAgICAgICBib3JkZXJCb3R0b206IDAsXG4gICAgICAgIGJvcmRlckxlZnQ6IDAsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAwLFxuICAgICAgICBtYXJnaW5Ub3A6IDIwXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxhIGhyZWY9e2AjdG9wYH0gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgPEZhQ2hldnJvblVwIC8+IFRvcFxuICAgICAgPC9hPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17YCMke2Jvb2t9YH1cbiAgICAgICAgaWQ9e2Ake2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luVG9wOiAyMCB9fVxuICAgICAgPlxuICAgICAgICA8RmFDaGV2cm9uVXAgLz4ge2Jvb2t9XG4gICAgICA8L2E+XG4gICAgICA8aDNcbiAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYCR7Y291bnR9KSAke2Jvb2tWZXJzZXN9IC0gJHtxdWVzdGlvbn1gXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICB7Zm91bmRCb29rVmVyc2VzID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICBTYW1lIGFze1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAge2Jvb2t9IHtmb3VuZEJvb2tWZXJzZXN9IC0ge3F1ZXN0aW9ufVxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEZXRhaWx9XG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMDM5QkU1XCIsIGZvbnRTaXplOiAxNiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoaWRlRGV0YWlscyA/IGBTaG93IGAgOiBgSGlkZSBgfSBhbnN3ZXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7aGlkZURldGFpbHMgPyBudWxsIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmaXJzdFwiPlF1aWNrIGFuc3dlcjwvaDQ+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHF1aWNrQW5zd2VyIH19IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIEZ1bGwgcG9zdDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17ZnVsbFBvc3R9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAge3F1ZXN0aW9ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDQ+UGFzc2FnZXM8L2g0PlxuICAgICAgICAgIHthbGxQYXNzYWdlcy5tYXAoKHBhc3NhZ2VHcm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXNzYWdlR3JvdXAuaGVhZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImZpcnN0XCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cGFzc2FnZUdyb3VwLmhlYWRpbmd9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7cGFzc2FnZUdyb3VwLnBhc3NhZ2VzLm1hcCgocGFzc2FnZSwgaW5kZXgxKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJQYXNzYWdlKHBhc3NhZ2UsIGluZGV4MSk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclBhc3NhZ2UocGFzc2FnZUdyb3VwLCBpbmRleCk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgQmlibGVDb250cmFkaWN0aW9ucyA9ICgpID0+IHtcbiAgbGV0IFtkZXRhaWxzLCBzZXREZXRhaWxzXSA9IHVzZVN0YXRlKHt9KTtcbiAgbGV0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBsZXQgbGlua0NvdW50ID0gMDtcbiAgbGV0IGFuc3dlckNvdW50ID0gMDtcblxuICBjb25zdCBpbWFnZV91cmwgPSBcImh0dHBzOi8vaS5pbWd1ci5jb20vZmFBbURoWS5wbmdcIjtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgRXhwbGFuYXRpb25zIGZvciBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZSwgaW5jbHVkaW5nIHBhc3NhZ2VzLCBxdWljayBhbnN3ZXIsIGFuZCBhIGxpbmsgdG8gYSBmdWxsZXIgcG9zdCBmb3IgZWFjaCBhbGxlZ2VkIEJpYmxlIFwiY29udHJhZGljdGlvbi5cImA7XG4gIGNvbnN0IGRhdGVfYWRkZWQgPSBcIjIwMTgtMTEtMjZcIjtcbiAgY29uc3QgdXBkYXRlZF9hdCA9IFwiMjAxOC0xMS0yNlwiO1xuXG4gIGNvbnN0IG51bWJlcnMgPSBDT05UUkFESUNUSU9OUy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwgYm9vaykgPT4ge1xuICAgICAgYm9vay5hbnN3ZXJzLmZvckVhY2goYW5zd2VyID0+IHtcbiAgICAgICAgaWYgKCFhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgcmVzdWx0LnRvdGFsKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFuc3dlci5xdWlja0Fuc3dlciAmJiAhYW5zd2VyLnNlZSkge1xuICAgICAgICAgIHJlc3VsdC5ub1F1aWNrQW5zd2VyKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFuc3dlci5mdWxsUG9zdCAmJiAhYW5zd2VyLnNlZSkge1xuICAgICAgICAgIHJlc3VsdC5ub0Z1bGxQb3N0Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAge1xuICAgICAgdG90YWw6IDAsXG4gICAgICBub1F1aWNrQW5zd2VyOiAwLFxuICAgICAgbm9GdWxsUG9zdDogMFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBwYWdlVGl0bGUgPSBgXCJDb250cmFkaWN0aW9uc1wiIGluIHRoZSBCaWJsZTogRXZlcnkgYWxsZWdlZCBiaWJsaWNhbCBcImNvbnRyYWRpY3Rpb25cIiBleHBsYWluZWRgO1xuXG4gIGNvbnN0IGRhdGVQdWJsaXNoZWQgPSBuZXcgRGF0ZShkYXRlX2FkZGVkKTtcblxuICBjb25zdCBtYXR0aGV3SW5kZXggPSBmaW5kSW5kZXgoXG4gICAgQ09OVFJBRElDVElPTlMsXG4gICAgYm9vayA9PiBib29rLmJvb2sgPT09IFwiTWF0dGhld1wiXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cGFnZVRpdGxlfSB8IEJpYmxlIEFuc3dlcnM8L3RpdGxlPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9iaWJsZWFuc3dlcnMuaW8vdGFncy9jb250cmFkaWN0aW9uc2B9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwYWdlVGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlX3VybH0gLz5cblxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnXCIsXG4gICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJBcnRpY2xlXCIsXG4gICAgICAgICAgICAgIG1haW5FbnRpdHlPZlBhZ2U6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICAgICAgICAgICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly9nb29nbGUuY29tL2FydGljbGVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBoZWFkbGluZTogcGFnZVRpdGxlLFxuICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgICAgICAgIHVybDogaW1hZ2VfdXJsLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGVQdWJsaXNoZWQ6IGRhdGVQdWJsaXNoZWQsXG4gICAgICAgICAgICAgIGRhdGVNb2RpZmllZDogbmV3IERhdGUodXBkYXRlZF9hdCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTWljaGFlbCBDaGVuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHB1Ymxpc2hlcjoge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJpYmxlIEFuc3dlcnNcIixcbiAgICAgICAgICAgICAgICBsb2dvOiB7XG4gICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2kuaW1ndXIuY29tL2RKUHhQWTkucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGl0bGVTZWN0aW9uXG4gICAgICAgIHRpdGxlPXtwYWdlVGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtgRXhwbGFuYXRpb25zIGZvciBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZWB9XG4gICAgICAgIGltYWdlX3VybD17aW1hZ2VfdXJsfVxuICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICB1c2VyPXt7XG4gICAgICAgICAgbmFtZTogXCJNaWNoYWVsIENoZW5nXCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS84YU4zMURuLnBuZ1wiXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8UmVhZGluZ0NvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICA8RmFTZWFyY2ggLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hfX2lucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtzZXRTZWFyY2h9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBwYXNzYWdlIG9yIGtleXdvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cml0aW5nXCI+XG4gICAgICAgICAgPGEgaWQ9XCJ0b3BcIiBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIC44NClcIiB9fT5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmaXJzdFwiPlRhYmxlIG9mIGNvbnRlbnRzPC9oMz5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8aDQ+T3ZlcnZpZXc8L2g0PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgICAgPGEgaHJlZj17YCNpbnRyb2R1Y3Rpb25gfT4xLiBJbnRyb2R1Y3Rpb248L2E+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgICAgPGEgaHJlZj17YCNmYXFzYH0+Mi4gRnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvbnM8L2E+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDQ+T2xkIFRlc3RhbWVudDwvaDQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge0NPTlRSQURJQ1RJT05TLnNsaWNlKDAsIG1hdHRoZXdJbmRleCkubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtaXRlbVwiIGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtib29rLmJvb2t9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9ICh7Ym9vay5hbnN3ZXJzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoND5OZXcgVGVzdGFtZW50PC9oND5cblxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICB7Q09OVFJBRElDVElPTlMuc2xpY2UobWF0dGhld0luZGV4KS5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1pdGVtXCIga2V5PXtib29rLmJvb2t9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCMke2Jvb2suYm9va31gfT5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2suYm9va30gKHtib29rLmFuc3dlcnMubGVuZ3RofSlcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGgzPldvcmsgaW4gcHJvZ3Jlc3M8L2gzPlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgVGhpcyBwYWdlIGlzIHN0aWxsIGEgd29yayBpbiBwcm9ncmVzcy4gUGxlYXNlIGNoZWNrIGJhY2sgdG8gc2VlXG4gICAgICAgICAgICB1cGRhdGVzIVxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+VG90YWwgZXhwbGFuYXRpb25zOiB7bnVtYmVycy50b3RhbH08L3A+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgIFF1aWNrIGFuc3dlcnMgcmVtYWluaW5nOiB7bnVtYmVycy5ub1F1aWNrQW5zd2VyfVxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPkZ1bGwgcG9zdCByZW1haW5pbmc6IHtudW1iZXJzLm5vRnVsbFBvc3R9PC9wPlxuXG4gICAgICAgICAgPGgzPlxuICAgICAgICAgICAgPGEgaWQ9XCJpbnRyb2R1Y3Rpb25cIiBjbGFzc05hbWU9XCJsaW5rLXRhcmdldFwiPlxuICAgICAgICAgICAgICBJbnRyb2R1Y3Rpb25cbiAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBPcHBvbmVudHMgb2YgdGhlIEJpYmxlIGNsYWltIHRoYXQgaXQgY29udGFpbnMgbnVtZXJvdXNcbiAgICAgICAgICAgIGlycmVjb25jaWxhYmxlIGNvbnRyYWRpY3Rpb25zLiBIb3dldmVyLCBub25lIG9mIHRoZSBcImFsbGVnZWRcIlxuICAgICAgICAgICAgY29udHJhZGljdGlvbnMgaW4gdGhlIEJpYmxlIGFyZSB0cnVseSBpcnJlY29uY2lsYWJsZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgcGFnZSBpcyB0byBwcm92aWRlIHBvc3NpYmxlIGV4cGxhbmF0aW9ucyBmb3JcbiAgICAgICAgICAgIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlLlxuICAgICAgICAgIDwvcD5cblxuICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgIDxhIGlkPVwiZmFxc1wiIGNsYXNzTmFtZT1cImxpbmstdGFyZ2V0XCI+XG4gICAgICAgICAgICAgIEZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25zXG4gICAgICAgICAgICA8L2E+XG4gICAgICAgICAgPC9oMz5cblxuICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YCN0b3BgfVxuICAgICAgICAgICAgICAgICAgaWQ9e2Jvb2suYm9va31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDI4XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25VcCAvPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7VG9wXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAga2V5PXtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjU0KVwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2Jvb2suYm9va31cbiAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAge2Jvb2suYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxpbmtDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyLnNlZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEJvb2sgPSBmaW5kKENPTlRSQURJQ1RJT05TLCBib29rID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9vay5ib29rLnRvTG93ZXJDYXNlKCkgPT09IGFuc3dlci5zZWVbMF07XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQW5zd2VyID0gZmluZChcbiAgICAgICAgICAgICAgICAgICAgICBmb3VuZEJvb2suYW5zd2VycyxcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJEYXRhID0+IGFuc3dlckRhdGEuYm9va1ZlcnNlcyA9PT0gYW5zd2VyLnNlZVsxXVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJMaW5rKHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgICAgYm9va1ZlcnNlczogYW5zd2VyLmJvb2tWZXJzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IGZvdW5kQW5zd2VyLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBsaW5rQ291bnRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJMaW5rKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgLi4uYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogbGlua0NvdW50XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgIHtib29rLmFuc3dlcnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBhbnN3ZXJDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyLnNlZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEJvb2sgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIENPTlRSQURJQ1RJT05TLFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2sgPT4gYm9vay5ib29rLnRvTG93ZXJDYXNlKCkgPT09IGFuc3dlci5zZWVbMF1cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEFuc3dlciA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgZm91bmRCb29rLmFuc3dlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VyRGF0YSA9PiBhbnN3ZXJEYXRhLmJvb2tWZXJzZXMgPT09IGFuc3dlci5zZWVbMV1cbiAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzS2V5ID0gYCR7Ym9vay5ib29rfV8ke2Fuc3dlci5ib29rVmVyc2VzfWA7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZURldGFpbHMgPSAhZGV0YWlsc1tkZXRhaWxzS2V5XTtcblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyQW5zd2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgICAgLi4uZm91bmRBbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgZm91bmRCb29rVmVyc2VzOiBmb3VuZEFuc3dlci5ib29rVmVyc2VzLFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2tWZXJzZXM6IGFuc3dlci5ib29rVmVyc2VzLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBhbnN3ZXJDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICBoaWRlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVEZXRhaWwoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICBzZXREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgW2RldGFpbHNLZXldOiAhZGV0YWlsc1tkZXRhaWxzS2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckFuc3dlcih7XG4gICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgIC4uLmFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgY291bnQ6IGFuc3dlckNvdW50XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgIDwvUmVhZGluZ0NvbnRhaW5lcj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLndyaXRpbmcgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBwLFxuICAgICAgICAud3JpdGluZyBvbCxcbiAgICAgICAgLndyaXRpbmcgdWwsXG4gICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ODtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHA6Zmlyc3QtY2hpbGQsXG4gICAgICAgIC53cml0aW5nIGgzICsgcCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBvbCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyB1bCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBibG9ja3F1b3RlLFxuICAgICAgICAud3JpdGluZyBoNCArIHAsXG4gICAgICAgIC53cml0aW5nIGg0ICsgb2wsXG4gICAgICAgIC53cml0aW5nIGg0ICsgdWwsXG4gICAgICAgIC53cml0aW5nIGg0ICsgYmxvY2txdW90ZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAgIC53cml0aW5nIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBsaSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuZmlyc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5ub21hcmdpbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbmRlbnQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlLWxlZnQge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZS1yaWdodCB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYSB7XG4gICAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLnJlZmVyZW5jZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLndyaXRpbmcgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIHAsXG4gICAgICAgICAgLndyaXRpbmcgb2wge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgLmltYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWNvbnRlbnRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUtY29udGVudHMtaXRlbSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmxpbmstdGFyZ2V0IHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2hfX2lucHV0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoX19pbnB1dCBpbnB1dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCaWJsZUNvbnRyYWRpY3Rpb25zO1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
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
//# sourceMappingURL=contradictions.js.3a3a6548fc50fbbad8ea.hot-update.js.map