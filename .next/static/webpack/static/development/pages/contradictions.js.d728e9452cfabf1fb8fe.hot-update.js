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
/* harmony import */ var _utils_string__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../utils/string */ "./utils/string.js");
/* harmony import */ var _utils_writing__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../utils/writing */ "./utils/writing.js");
/* harmony import */ var _constants_contradictions__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../constants/contradictions */ "./constants/contradictions/index.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }













function getSearchResults(search) {
  var clonedContradictions = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"]);
  Object(lodash__WEBPACK_IMPORTED_MODULE_4__["remove"])(clonedContradictions, function (book) {
    var matchesBook = Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["matchesSearch"])(book.book, search);
    var answers = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["remove"])(book.answers, function (answer) {
      var matchesQuestion = Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["matchesSearch"])(answer.question, search);
      var matchesPassage = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["some"])(answer.allPassages, function (data) {
        if (data.passages) {
          return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["some"])(data.passages, function (passage) {
            return Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["matchesSearch"])(passage.passage, search);
          });
        }

        return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["some"])(data, function (passage) {
          return Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["matchesSearch"])(passage.passage, search);
        });
      });
      return !matchesQuestion && !matchesPassage;
    });
    return !matchesBook && !answers.length;
  });
  return clonedContradictions;
}

function renderPassage(passage, index) {
  var text = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["isArray"])(passage.text) ? passage.text.map(function (paragraph, index1) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index1,
      className: "first",
      dangerouslySetInnerHTML: {
        __html: Object(_utils_writing__WEBPACK_IMPORTED_MODULE_7__["boldNumbers"])(paragraph)
      }
    });
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "first",
    dangerouslySetInnerHTML: {
      __html: Object(_utils_writing__WEBPACK_IMPORTED_MODULE_7__["boldNumbers"])(passage.text)
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
  var numbers = _constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"].reduce(function (result, book) {
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
  var matthewIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["findIndex"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"], function (book) {
    return book.book === "Matthew";
  });
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_9__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
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
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_10__["TitleSection"], {
    title: pageTitle,
    subtitle: "Explanations for every alleged \"contradiction\" in the Bible",
    image_url: image_url,
    date_added: date_added,
    user: {
      name: "Michael Cheng",
      image: "https://i.imgur.com/8aN31Dn.png"
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_11__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-767158461" + " " + "search"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaSearch"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "search__input",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Search by passage or keyword",
    value: search
  })), search ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-767158461" + " " + "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-767158461" + " " + "first"
  }, "Search results"), getSearchResults(search).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-767158461"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      key: book.book,
      className: "jsx-767158461"
    }, book.book), book.answers.map(function (answer) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: answer.bookVerses,
        className: "jsx-767158461"
      }, answer.question);
    }));
  })) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
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
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"].slice(0, matthewIndex).map(function (book) {
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
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"].slice(matthewIndex).map(function (book) {
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
  }, "Frequently asked questions")), _constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (book) {
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
        var foundBook = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"], function (book) {
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
        var foundBook = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"], function (book) {
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
    css: ".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}p:first-child,.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}.writing ol,.writing ul{padding:0 40px;}.writing li{margin-bottom:10px;}.writing li:last-child{margin-bottom:0;}.writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing .first{margin-top:8px;}.writing .nomargin{margin-top:0;}.writing .indent{margin-left:20px;}.writing .image{margin-top:29px;}.writing .image-left{float:left;margin-right:20px;}.writing .image-right{float:right;margin-left:20px;}.writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}.table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.table-contents-item{font-size:16px;margin-top:10px;width:150px;}.writing .link-target{color:rgba(0,0,0,0.84);}.search{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#bdbdbd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px 0;}.search__input{margin-left:10px;width:320px;}.search__input input{text-align:center;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMGV5QixBQUcwQixBQU9BLEFBVUEsQUFlQSxBQUtBLEFBSUksQUFJSCxBQUkwQixBQVEzQixBQUlGLEFBSUksQUFJRCxBQUlMLEFBS0MsQUFLRSxBQUtDLEFBT0QsQUFRRyxBQUtBLEFBTUEsQUFLQSxBQUtDLEFBS0wsQUFLRSxBQU1XLEFBSVAsQUFRRixBQUtDLFdBbkZBLENBS0QsQ0FqQm5CLENBc0J1QixBQVlOLENBL0ZFLEFBT0EsQUFVQSxBQWVuQixBQUtBLEFBb0JBLEFBK0JrQixBQWVFLEFBS0EsQUFNQSxBQUtBLEFBZUYsQ0F6RmxCLEFBd0JBLEFBdURFLENBM0RGLEFBdUZjLENBS2QsQ0FwSEEsSUFtR0EsTUFsRUEsQUFLQSxBQWlCdUIsQUF5RHZCLEVBaEVvQixBQWVsQixBQUtBLEFBTUEsQUFLQSxBQWVZLENBdElILEFBT0EsQUFVQSxPQStCUyxFQS9DRixBQU9BLEFBVUEsRUFxSGxCLE1BOUNXLFFBdkZYLEFBT0EsQUFVQSxBQThCYSxDQXlDYixNQVBBLElBakNvQixNQThFSCxZQTdFRyxPQTRGSixXQTNGaEIsR0E0RmUsdUJBaERLLENBaUNwQixpQkFoQ0EsaUNBZ0R5QixtR0FDVCxjQUNoQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbnRyYWRpY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25VcCwgRmFTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGNsb25lRGVlcCwgZmluZCwgZmluZEluZGV4LCBpc0FycmF5LCByZW1vdmUsIHNvbWUgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcblxuaW1wb3J0IHsgbWF0Y2hlc1NlYXJjaCB9IGZyb20gXCIuLi91dGlscy9zdHJpbmdcIjtcbmltcG9ydCB7IGJvbGROdW1iZXJzIH0gZnJvbSBcIi4uL3V0aWxzL3dyaXRpbmdcIjtcbmltcG9ydCBDT05UUkFESUNUSU9OUyBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnRyYWRpY3Rpb25zXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCB7IFRpdGxlU2VjdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RpdGxlU2VjdGlvblwiO1xuaW1wb3J0IFJlYWRpbmdDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVhZGluZ0NvbnRhaW5lclwiO1xuXG5mdW5jdGlvbiBnZXRTZWFyY2hSZXN1bHRzKHNlYXJjaCkge1xuICBjb25zdCBjbG9uZWRDb250cmFkaWN0aW9ucyA9IGNsb25lRGVlcChDT05UUkFESUNUSU9OUyk7XG5cbiAgcmVtb3ZlKGNsb25lZENvbnRyYWRpY3Rpb25zLCBib29rID0+IHtcbiAgICBjb25zdCBtYXRjaGVzQm9vayA9IG1hdGNoZXNTZWFyY2goYm9vay5ib29rLCBzZWFyY2gpO1xuICAgIGNvbnN0IGFuc3dlcnMgPSByZW1vdmUoYm9vay5hbnN3ZXJzLCBhbnN3ZXIgPT4ge1xuICAgICAgY29uc3QgbWF0Y2hlc1F1ZXN0aW9uID0gbWF0Y2hlc1NlYXJjaChhbnN3ZXIucXVlc3Rpb24sIHNlYXJjaCk7XG4gICAgICBjb25zdCBtYXRjaGVzUGFzc2FnZSA9IHNvbWUoYW5zd2VyLmFsbFBhc3NhZ2VzLCBkYXRhID0+IHtcbiAgICAgICAgaWYgKGRhdGEucGFzc2FnZXMpIHtcbiAgICAgICAgICByZXR1cm4gc29tZShkYXRhLnBhc3NhZ2VzLCBwYXNzYWdlID0+XG4gICAgICAgICAgICBtYXRjaGVzU2VhcmNoKHBhc3NhZ2UucGFzc2FnZSwgc2VhcmNoKVxuICAgICAgICAgICk7XG4gICAgICAgIH1cblxuICAgICAgICByZXR1cm4gc29tZShkYXRhLCBwYXNzYWdlID0+IG1hdGNoZXNTZWFyY2gocGFzc2FnZS5wYXNzYWdlLCBzZWFyY2gpKTtcbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gIW1hdGNoZXNRdWVzdGlvbiAmJiAhbWF0Y2hlc1Bhc3NhZ2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gIW1hdGNoZXNCb29rICYmICFhbnN3ZXJzLmxlbmd0aDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNsb25lZENvbnRyYWRpY3Rpb25zO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQYXNzYWdlKHBhc3NhZ2UsIGluZGV4KSB7XG4gIGNvbnN0IHRleHQgPSBpc0FycmF5KHBhc3NhZ2UudGV4dCkgPyAoXG4gICAgcGFzc2FnZS50ZXh0Lm1hcCgocGFyYWdyYXBoLCBpbmRleDEpID0+IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtpbmRleDF9XG4gICAgICAgIGNsYXNzTmFtZT1cImZpcnN0XCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGJvbGROdW1iZXJzKHBhcmFncmFwaClcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKSlcbiAgKSA6IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICBfX2h0bWw6IGJvbGROdW1iZXJzKHBhc3NhZ2UudGV4dClcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9e2luZGV4ID09PSAwID8gXCJmaXJzdFwiIDogXCJcIn0+XG4gICAgICAgIDxzdHJvbmc+e3Bhc3NhZ2UucGFzc2FnZX08L3N0cm9uZz5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpbmsoeyBpbmRleCwgYm9vaywgYm9va1ZlcnNlcywgY291bnQsIHF1ZXN0aW9uIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IG1hcmdpblRvcDogNiB9fT5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e2AjJHtib29rfV8ke2Jvb2tWZXJzZXN9YH1cbiAgICAgICAgaWQ9e2B0b3BfJHtib29rfV8ke2Jvb2tWZXJzZXN9YH1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGAke2NvdW50fSkgJHtib29rVmVyc2VzfSAtICR7cXVlc3Rpb259YFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQW5zd2VyKHtcbiAgaW5kZXgsXG4gIGJvb2ssXG4gIGJvb2tWZXJzZXMsXG4gIGZvdW5kQm9va1ZlcnNlcyxcbiAgcXVlc3Rpb24sXG4gIGFsbFBhc3NhZ2VzLFxuICBxdWlja0Fuc3dlcixcbiAgZnVsbFBvc3QsXG4gIGNvdW50LFxuICBoaWRlRGV0YWlscyxcbiAgdG9nZ2xlRGV0YWlsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJvcmRlcjogXCIzcHggc29saWQgcmdiYSgwLCAwLCAwLCAuNTQpXCIsXG4gICAgICAgIGJvcmRlckJvdHRvbTogMCxcbiAgICAgICAgYm9yZGVyTGVmdDogMCxcbiAgICAgICAgYm9yZGVyUmlnaHQ6IDAsXG4gICAgICAgIG1hcmdpblRvcDogMjBcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGEgaHJlZj17YCN0b3BgfSBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICA8RmFDaGV2cm9uVXAgLz4gVG9wXG4gICAgICA8L2E+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtgIyR7Ym9va31gfVxuICAgICAgICBpZD17YCR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpbkxlZnQ6IDIwLCBtYXJnaW5Ub3A6IDIwIH19XG4gICAgICA+XG4gICAgICAgIDxGYUNoZXZyb25VcCAvPiB7Ym9va31cbiAgICAgIDwvYT5cbiAgICAgIDxoM1xuICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgJHtjb3VudH0pICR7Ym9va1ZlcnNlc30gLSAke3F1ZXN0aW9ufWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIHtmb3VuZEJvb2tWZXJzZXMgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgIFNhbWUgYXN7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICB7Ym9va30ge2ZvdW5kQm9va1ZlcnNlc30gLSB7cXVlc3Rpb259XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURldGFpbH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMwMzlCRTVcIiwgZm9udFNpemU6IDE2LCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hpZGVEZXRhaWxzID8gYFNob3cgYCA6IGBIaWRlIGB9IGFuc3dlclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtoaWRlRGV0YWlscyA/IG51bGwgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZpcnN0XCI+UXVpY2sgYW5zd2VyPC9oND5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcXVpY2tBbnN3ZXIgfX0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgRnVsbCBwb3N0OntcIiBcIn1cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtmdWxsUG9zdH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICB7cXVlc3Rpb259XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoND5QYXNzYWdlczwvaDQ+XG4gICAgICAgICAge2FsbFBhc3NhZ2VzLm1hcCgocGFzc2FnZUdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhc3NhZ2VHcm91cC5oZWFkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtpbmRleCA9PT0gMCA/IFwiZmlyc3RcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntwYXNzYWdlR3JvdXAuaGVhZGluZ308L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIHtwYXNzYWdlR3JvdXAucGFzc2FnZXMubWFwKChwYXNzYWdlLCBpbmRleDEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclBhc3NhZ2UocGFzc2FnZSwgaW5kZXgxKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyUGFzc2FnZShwYXNzYWdlR3JvdXAsIGluZGV4KTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBCaWJsZUNvbnRyYWRpY3Rpb25zID0gKCkgPT4ge1xuICBsZXQgW2RldGFpbHMsIHNldERldGFpbHNdID0gdXNlU3RhdGUoe30pO1xuICBsZXQgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGxldCBsaW5rQ291bnQgPSAwO1xuICBsZXQgYW5zd2VyQ291bnQgPSAwO1xuXG4gIGNvbnN0IGltYWdlX3VybCA9IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9mYUFtRGhZLnBuZ1wiO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGBFeHBsYW5hdGlvbnMgZm9yIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlLCBpbmNsdWRpbmcgcGFzc2FnZXMsIHF1aWNrIGFuc3dlciwgYW5kIGEgbGluayB0byBhIGZ1bGxlciBwb3N0IGZvciBlYWNoIGFsbGVnZWQgQmlibGUgXCJjb250cmFkaWN0aW9uLlwiYDtcbiAgY29uc3QgZGF0ZV9hZGRlZCA9IFwiMjAxOC0xMS0yNlwiO1xuICBjb25zdCB1cGRhdGVkX2F0ID0gXCIyMDE4LTExLTI2XCI7XG5cbiAgY29uc3QgbnVtYmVycyA9IENPTlRSQURJQ1RJT05TLnJlZHVjZShcbiAgICAocmVzdWx0LCBib29rKSA9PiB7XG4gICAgICBib29rLmFuc3dlcnMuZm9yRWFjaChhbnN3ZXIgPT4ge1xuICAgICAgICBpZiAoIWFuc3dlci5zZWUpIHtcbiAgICAgICAgICByZXN1bHQudG90YWwrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5zd2VyLnF1aWNrQW5zd2VyICYmICFhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgcmVzdWx0Lm5vUXVpY2tBbnN3ZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5zd2VyLmZ1bGxQb3N0ICYmICFhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgcmVzdWx0Lm5vRnVsbFBvc3QrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICB7XG4gICAgICB0b3RhbDogMCxcbiAgICAgIG5vUXVpY2tBbnN3ZXI6IDAsXG4gICAgICBub0Z1bGxQb3N0OiAwXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHBhZ2VUaXRsZSA9IGBcIkNvbnRyYWRpY3Rpb25zXCIgaW4gdGhlIEJpYmxlOiBFdmVyeSBhbGxlZ2VkIGJpYmxpY2FsIFwiY29udHJhZGljdGlvblwiIGV4cGxhaW5lZGA7XG5cbiAgY29uc3QgZGF0ZVB1Ymxpc2hlZCA9IG5ldyBEYXRlKGRhdGVfYWRkZWQpO1xuXG4gIGNvbnN0IG1hdHRoZXdJbmRleCA9IGZpbmRJbmRleChcbiAgICBDT05UUkFESUNUSU9OUyxcbiAgICBib29rID0+IGJvb2suYm9vayA9PT0gXCJNYXR0aGV3XCJcbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwYWdlVGl0bGV9IHwgQmlibGUgQW5zd2VyczwvdGl0bGU+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL2JpYmxlYW5zd2Vycy5pby90YWdzL2NvbnRyYWRpY3Rpb25zYH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3BhZ2VUaXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1hZ2VfdXJsfSAvPlxuXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFydGljbGVcIixcbiAgICAgICAgICAgICAgbWFpbkVudGl0eU9mUGFnZToge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgICAgICAgICAgICAgXCJAaWRcIjogXCJodHRwczovL2dvb2dsZS5jb20vYXJ0aWNsZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGhlYWRsaW5lOiBwYWdlVGl0bGUsXG4gICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgdXJsOiBpbWFnZV91cmwsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0ZVB1Ymxpc2hlZDogZGF0ZVB1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSh1cGRhdGVkX2F0KS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJNaWNoYWVsIENoZW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHVibGlzaGVyOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmlibGUgQW5zd2Vyc1wiLFxuICAgICAgICAgICAgICAgIGxvZ286IHtcbiAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vZEpQeFBZOS5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUaXRsZVNlY3Rpb25cbiAgICAgICAgdGl0bGU9e3BhZ2VUaXRsZX1cbiAgICAgICAgc3VidGl0bGU9e2BFeHBsYW5hdGlvbnMgZm9yIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlYH1cbiAgICAgICAgaW1hZ2VfdXJsPXtpbWFnZV91cmx9XG4gICAgICAgIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9XG4gICAgICAgIHVzZXI9e3tcbiAgICAgICAgICBuYW1lOiBcIk1pY2hhZWwgQ2hlbmdcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tLzhhTjMxRG4ucG5nXCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxSZWFkaW5nQ29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgIDxGYVNlYXJjaCAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaF9faW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHBhc3NhZ2Ugb3Iga2V5d29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2VhcmNoID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZ1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+U2VhcmNoIHJlc3VsdHM8L2gzPlxuXG4gICAgICAgICAgICB7Z2V0U2VhcmNoUmVzdWx0cyhzZWFyY2gpLm1hcChib29rID0+IChcbiAgICAgICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgICAgICA8aDQga2V5PXtib29rLmJvb2t9Pntib29rLmJvb2t9PC9oND5cbiAgICAgICAgICAgICAgICB7Ym9vay5hbnN3ZXJzLm1hcChhbnN3ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgcmV0dXJuIDxwIGtleT17YW5zd2VyLmJvb2tWZXJzZXN9PnthbnN3ZXIucXVlc3Rpb259PC9wPjtcbiAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICApKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyaXRpbmdcIj5cbiAgICAgICAgICAgIDxhIGlkPVwidG9wXCIgc3R5bGU9e3sgY29sb3I6IFwicmdiYSgwLCAwLCAwLCAuODQpXCIgfX0+XG4gICAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmaXJzdFwiPlRhYmxlIG9mIGNvbnRlbnRzPC9oMz5cbiAgICAgICAgICAgIDwvYT5cblxuICAgICAgICAgICAgPGg0Pk92ZXJ2aWV3PC9oND5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtgI2ludHJvZHVjdGlvbmB9PjEuIEludHJvZHVjdGlvbjwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgICAgICA8YSBocmVmPXtgI2ZhcXNgfT4yLiBGcmVxdWVudGx5IGFza2VkIHF1ZXN0aW9uczwvYT5cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDQ+T2xkIFRlc3RhbWVudDwvaDQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5zbGljZSgwLCBtYXR0aGV3SW5kZXgpLm1hcChib29rID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1pdGVtXCIga2V5PXtib29rLmJvb2t9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7Ym9vay5ib29rfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9ICh7Ym9vay5hbnN3ZXJzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoND5OZXcgVGVzdGFtZW50PC9oND5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAge0NPTlRSQURJQ1RJT05TLnNsaWNlKG1hdHRoZXdJbmRleCkubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWl0ZW1cIiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtib29rLmJvb2t9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge2Jvb2suYm9va30gKHtib29rLmFuc3dlcnMubGVuZ3RofSlcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGgzPldvcmsgaW4gcHJvZ3Jlc3M8L2gzPlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoaXMgcGFnZSBpcyBzdGlsbCBhIHdvcmsgaW4gcHJvZ3Jlc3MuIFBsZWFzZSBjaGVjayBiYWNrIHRvIHNlZVxuICAgICAgICAgICAgICB1cGRhdGVzIVxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPlRvdGFsIGV4cGxhbmF0aW9uczoge251bWJlcnMudG90YWx9PC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgICAgUXVpY2sgYW5zd2VycyByZW1haW5pbmc6IHtudW1iZXJzLm5vUXVpY2tBbnN3ZXJ9XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPkZ1bGwgcG9zdCByZW1haW5pbmc6IHtudW1iZXJzLm5vRnVsbFBvc3R9PC9wPlxuXG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxhIGlkPVwiaW50cm9kdWN0aW9uXCIgY2xhc3NOYW1lPVwibGluay10YXJnZXRcIj5cbiAgICAgICAgICAgICAgICBJbnRyb2R1Y3Rpb25cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIE9wcG9uZW50cyBvZiB0aGUgQmlibGUgY2xhaW0gdGhhdCBpdCBjb250YWlucyBudW1lcm91c1xuICAgICAgICAgICAgICBpcnJlY29uY2lsYWJsZSBjb250cmFkaWN0aW9ucy4gSG93ZXZlciwgbm9uZSBvZiB0aGUgXCJhbGxlZ2VkXCJcbiAgICAgICAgICAgICAgY29udHJhZGljdGlvbnMgaW4gdGhlIEJpYmxlIGFyZSB0cnVseSBpcnJlY29uY2lsYWJsZS5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIFRoZSBwdXJwb3NlIG9mIHRoaXMgcGFnZSBpcyB0byBwcm92aWRlIHBvc3NpYmxlIGV4cGxhbmF0aW9ucyBmb3JcbiAgICAgICAgICAgICAgZXZlcnkgYWxsZWdlZCBcImNvbnRyYWRpY3Rpb25cIiBpbiB0aGUgQmlibGUuXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGEgaWQ9XCJmYXFzXCIgY2xhc3NOYW1lPVwibGluay10YXJnZXRcIj5cbiAgICAgICAgICAgICAgICBGcmVxdWVudGx5IGFza2VkIHF1ZXN0aW9uc1xuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICB7Q09OVFJBRElDVElPTlMubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtib29rLmJvb2t9PlxuICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgaHJlZj17YCN0b3BgfVxuICAgICAgICAgICAgICAgICAgICBpZD17Ym9vay5ib29rfVxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICAgIGFsaWduSXRlbXM6IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgICAgICAgbWFyZ2luVG9wOiAyOFxuICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICA8RmFDaGV2cm9uVXAgLz5cbiAgICAgICAgICAgICAgICAgICAgJm5ic3A7VG9wXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8aDNcbiAgICAgICAgICAgICAgICAgICAga2V5PXtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCJcbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgYm9yZGVyQm90dG9tOiBcIjFweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC41NClcIiB9fVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7Ym9vay5ib29rfVxuICAgICAgICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAgICAgICAge2Jvb2suYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgbGlua0NvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEJvb2sgPSBmaW5kKENPTlRSQURJQ1RJT05TLCBib29rID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBib29rLmJvb2sudG9Mb3dlckNhc2UoKSA9PT0gYW5zd2VyLnNlZVswXTtcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQW5zd2VyID0gZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9vay5hbnN3ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyRGF0YSA9PiBhbnN3ZXJEYXRhLmJvb2tWZXJzZXMgPT09IGFuc3dlci5zZWVbMV1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckxpbmsoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgICAgICBib29rVmVyc2VzOiBhbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHF1ZXN0aW9uOiBmb3VuZEFuc3dlci5xdWVzdGlvbixcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBsaW5rQ291bnRcbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJMaW5rKHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgICAgLi4uYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBsaW5rQ291bnRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgICAge2Jvb2suYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgYW5zd2VyQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyLnNlZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQm9vayA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICBDT05UUkFESUNUSU9OUyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2sgPT4gYm9vay5ib29rLnRvTG93ZXJDYXNlKCkgPT09IGFuc3dlci5zZWVbMF1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRBbnN3ZXIgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRCb29rLmFuc3dlcnMsXG4gICAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJEYXRhID0+IGFuc3dlckRhdGEuYm9va1ZlcnNlcyA9PT0gYW5zd2VyLnNlZVsxXVxuICAgICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBkZXRhaWxzS2V5ID0gYCR7Ym9vay5ib29rfV8ke2Fuc3dlci5ib29rVmVyc2VzfWA7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBoaWRlRGV0YWlscyA9ICFkZXRhaWxzW2RldGFpbHNLZXldO1xuXG4gICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckFuc3dlcih7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgICAgIC4uLmZvdW5kQW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgICAgZm91bmRCb29rVmVyc2VzOiBmb3VuZEFuc3dlci5ib29rVmVyc2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9va1ZlcnNlczogYW5zd2VyLmJvb2tWZXJzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogYW5zd2VyQ291bnQsXG4gICAgICAgICAgICAgICAgICAgICAgICBoaWRlRGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgIHRvZ2dsZURldGFpbCgpIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0RGV0YWlscyh7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLi4uZGV0YWlscyxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBbZGV0YWlsc0tleV06ICFkZXRhaWxzW2RldGFpbHNLZXldXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckFuc3dlcih7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogYW5zd2VyQ291bnRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApfVxuICAgICAgPC9SZWFkaW5nQ29udGFpbmVyPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAud3JpdGluZyBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yMjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIHAsXG4gICAgICAgIC53cml0aW5nIG9sLFxuICAgICAgICAud3JpdGluZyB1bCxcbiAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcDpmaXJzdC1jaGlsZCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBwLFxuICAgICAgICAud3JpdGluZyBoMyArIG9sLFxuICAgICAgICAud3JpdGluZyBoMyArIHVsLFxuICAgICAgICAud3JpdGluZyBoMyArIGJsb2NrcXVvdGUsXG4gICAgICAgIC53cml0aW5nIGg0ICsgcCxcbiAgICAgICAgLndyaXRpbmcgaDQgKyBvbCxcbiAgICAgICAgLndyaXRpbmcgaDQgKyB1bCxcbiAgICAgICAgLndyaXRpbmcgaDQgKyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBvbCxcbiAgICAgICAgLndyaXRpbmcgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGxpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5maXJzdCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLm5vbWFyZ2luIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmluZGVudCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2UtbGVmdCB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlLXJpZ2h0IHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBhIHtcbiAgICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAucmVmZXJlbmNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAud3JpdGluZyBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgICAud3JpdGluZyBvbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUtY29udGVudHMtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1jb250ZW50cy1pdGVtIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAubGluay10YXJnZXQge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaCB7XG4gICAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGp1c3RpZnktY29udGVudDogY2VudGVyO1xuICAgICAgICAgIG1hcmdpbjogMjBweCAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaF9faW5wdXQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAzMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2hfX2lucHV0IGlucHV0IHtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpYmxlQ29udHJhZGljdGlvbnM7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
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
//# sourceMappingURL=contradictions.js.d728e9452cfabf1fb8fe.hot-update.js.map