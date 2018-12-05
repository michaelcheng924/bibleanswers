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













function hasPassageMatch(allPassages, search) {
  return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["some"])(allPassages, function (data) {
    if (data.passages) {
      return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["some"])(data.passages, function (passage) {
        return Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["matchesSearch"])(passage.passage, search);
      });
    }

    return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["some"])(data, function (passage) {
      return Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["matchesSearch"])(passage.passage, search);
    });
  });
}

function getSearchResults(search) {
  var clonedContradictions = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["cloneDeep"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"]);
  Object(lodash__WEBPACK_IMPORTED_MODULE_4__["remove"])(clonedContradictions, function (book) {
    var matchesBook = Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["matchesSearch"])(book.book, search);
    Object(lodash__WEBPACK_IMPORTED_MODULE_4__["remove"])(book.answers, function (answer) {
      var matchesQuestion = Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["matchesSearch"])(answer.question, search);
      var matchesPassage = hasPassageMatch(answer.allPassages, search);
      return !matchesQuestion && !matchesPassage;
    });
    return !matchesBook && !book.answers.length;
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
  var searchResults;

  if (search) {
    searchResults = getSearchResults(search);
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_9__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2897691386"
  }, pageTitle, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: description,
    className: "jsx-2897691386"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:url",
    content: "https://bibleanswers.io/tags/contradictions",
    className: "jsx-2897691386"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:title",
    content: pageTitle,
    className: "jsx-2897691386"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:description",
    content: description,
    className: "jsx-2897691386"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    property: "og:image",
    content: image_url,
    className: "jsx-2897691386"
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
    className: "jsx-2897691386"
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
    className: "jsx-2897691386" + " " + "search"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaSearch"], null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_material_ui_core_TextField__WEBPACK_IMPORTED_MODULE_5___default.a, {
    className: "search__input",
    onChange: function onChange(e) {
      return setSearch(e.target.value);
    },
    placeholder: "Search by passage or keyword",
    value: search
  })), search ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2897691386" + " " + "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2897691386" + " " + "first"
  }, "Search results"), searchResults.length ? searchResults.map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-2897691386"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-2897691386"
    }, Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["highlightText"])(book.book, search)), book.answers.map(function (answer) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: answer.question,
        className: "jsx-2897691386"
      }, Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["highlightText"])(answer.question, search), hasPassageMatch(answer.allPassages, search) ? " (".concat(answer.allPassages.map(function (data) {
        if (data.passages) {
          return data.passages.map(function (passage, index) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              key: index,
              className: "jsx-2897691386"
            }, Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["highlightText"])(passage.passage, search));
          });
        }

        return data.map(function (passage, index) {
          return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
            key: index,
            className: "jsx-2897691386"
          }, Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["highlightText"])(passage.passage, search));
        });
      }), ")") : null);
    }));
  }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-2897691386"
  }, "No search results")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2897691386" + " " + "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "top",
    style: {
      color: "rgba(0, 0, 0, .84)"
    },
    className: "jsx-2897691386"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2897691386" + " " + "first"
  }, "Table of contents")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-2897691386"
  }, "Overview"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2897691386" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#introduction",
    className: "jsx-2897691386"
  }, "1. Introduction")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2897691386" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "#faqs",
    className: "jsx-2897691386"
  }, "2. Frequently asked questions")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-2897691386"
  }, "Old Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2897691386" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"].slice(0, matthewIndex).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-2897691386" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      className: "jsx-2897691386"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-2897691386"
  }, "New Testament"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2897691386" + " " + "table-contents-container"
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"].slice(matthewIndex).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-2897691386" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      className: "jsx-2897691386"
    }, book.book, " (", book.answers.length, ")"));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2897691386"
  }, "Work in progress"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2897691386"
  }, "This page is still a work in progress. Please check back to see updates!"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2897691386" + " " + "first"
  }, "Total explanations: ", numbers.total), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2897691386" + " " + "first"
  }, "Quick answers remaining: ", numbers.noQuickAnswer), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2897691386" + " " + "first"
  }, "Full post remaining: ", numbers.noFullPost), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2897691386"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "introduction",
    className: "jsx-2897691386" + " " + "link-target"
  }, "Introduction")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2897691386"
  }, "Opponents of the Bible claim that it contains numerous irreconcilable contradictions. However, none of the \"alleged\" contradictions in the Bible are truly irreconcilable."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-2897691386"
  }, "The purpose of this page is to provide possible explanations for every alleged \"contradiction\" in the Bible."), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
    className: "jsx-2897691386"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    id: "faqs",
    className: "jsx-2897691386" + " " + "link-target"
  }, "Frequently asked questions")), _constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"].map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-2897691386"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#top",
      id: book.book,
      style: {
        display: "flex",
        alignItems: "center",
        marginTop: 28
      },
      className: "jsx-2897691386"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_3__["FaChevronUp"], null), "\xA0Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      key: book.book,
      style: {
        borderBottom: "1px solid rgba(0, 0, 0, .54)"
      },
      className: "jsx-2897691386" + " " + "nomargin"
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
    styleId: "2897691386",
    css: ".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}p:first-child,.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}.writing ol,.writing ul{padding:0 40px;}.writing li{margin-bottom:10px;}.writing li:last-child{margin-bottom:0;}.writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing .first{margin-top:8px;}.writing .nomargin{margin-top:0;}.writing .indent{margin-left:20px;}.writing .image{margin-top:29px;}.writing .image-left{float:left;margin-right:20px;}.writing .image-right{float:right;margin-left:20px;}.writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}.table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.table-contents-item{font-size:16px;margin-top:10px;width:150px;}.writing .link-target{color:rgba(0,0,0,0.84);}.search{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#bdbdbd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px 0;}.search__input{margin-left:10px;width:320px;}.search__input input{text-align:center;}.highlight{color:#039be5;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNmdCeUIsQUFHMEIsQUFPQSxBQVVBLEFBZUEsQUFLQSxBQUlJLEFBSUgsQUFJMEIsQUFRM0IsQUFJRixBQUlJLEFBSUQsQUFJTCxBQUtDLEFBS0UsQUFLQyxBQU9ELEFBUUcsQUFLQSxBQU1BLEFBS0EsQUFLQyxBQUtMLEFBS0UsQUFNVyxBQUlQLEFBUUYsQUFLQyxBQUlKLFdBdkZJLENBS0QsQ0FqQm5CLENBc0J1QixBQVlOLEFBa0VFLENBaktBLEFBT0EsQUFVQSxBQWVuQixBQUtBLEFBb0JBLEFBK0JrQixBQWVFLEFBS0EsQUFNQSxBQUtBLEFBZUYsQ0F6RmxCLEFBd0JBLEFBdURFLENBM0RGLEFBdUZjLENBS2QsQ0FwSEEsSUFtR0EsTUFsRUEsQUFLQSxBQWlCdUIsQUF5RHZCLEVBaEVvQixBQWVsQixBQUtBLEFBTUEsQUFLQSxBQWVZLEFBMkJkLENBaktXLEFBT0EsQUFVQSxPQStCUyxFQS9DRixBQU9BLEFBVUEsRUFxSGxCLE1BOUNXLFFBdkZYLEFBT0EsQUFVQSxBQThCYSxDQXlDYixNQVBBLElBakNvQixNQThFSCxZQTdFRyxPQTRGSixXQTNGaEIsR0E0RmUsdUJBaERLLENBaUNwQixpQkFoQ0EsaUNBZ0R5QixtR0FDVCxjQUNoQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbnRyYWRpY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25VcCwgRmFTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGNsb25lRGVlcCwgZmluZCwgZmluZEluZGV4LCBpc0FycmF5LCByZW1vdmUsIHNvbWUgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcblxuaW1wb3J0IHsgaGlnaGxpZ2h0VGV4dCwgbWF0Y2hlc1NlYXJjaCB9IGZyb20gXCIuLi91dGlscy9zdHJpbmdcIjtcbmltcG9ydCB7IGJvbGROdW1iZXJzIH0gZnJvbSBcIi4uL3V0aWxzL3dyaXRpbmdcIjtcbmltcG9ydCBDT05UUkFESUNUSU9OUyBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnRyYWRpY3Rpb25zXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCB7IFRpdGxlU2VjdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RpdGxlU2VjdGlvblwiO1xuaW1wb3J0IFJlYWRpbmdDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVhZGluZ0NvbnRhaW5lclwiO1xuXG5mdW5jdGlvbiBoYXNQYXNzYWdlTWF0Y2goYWxsUGFzc2FnZXMsIHNlYXJjaCkge1xuICByZXR1cm4gc29tZShhbGxQYXNzYWdlcywgZGF0YSA9PiB7XG4gICAgaWYgKGRhdGEucGFzc2FnZXMpIHtcbiAgICAgIHJldHVybiBzb21lKGRhdGEucGFzc2FnZXMsIHBhc3NhZ2UgPT5cbiAgICAgICAgbWF0Y2hlc1NlYXJjaChwYXNzYWdlLnBhc3NhZ2UsIHNlYXJjaClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvbWUoZGF0YSwgcGFzc2FnZSA9PiBtYXRjaGVzU2VhcmNoKHBhc3NhZ2UucGFzc2FnZSwgc2VhcmNoKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTZWFyY2hSZXN1bHRzKHNlYXJjaCkge1xuICBjb25zdCBjbG9uZWRDb250cmFkaWN0aW9ucyA9IGNsb25lRGVlcChDT05UUkFESUNUSU9OUyk7XG5cbiAgcmVtb3ZlKGNsb25lZENvbnRyYWRpY3Rpb25zLCBib29rID0+IHtcbiAgICBjb25zdCBtYXRjaGVzQm9vayA9IG1hdGNoZXNTZWFyY2goYm9vay5ib29rLCBzZWFyY2gpO1xuICAgIHJlbW92ZShib29rLmFuc3dlcnMsIGFuc3dlciA9PiB7XG4gICAgICBjb25zdCBtYXRjaGVzUXVlc3Rpb24gPSBtYXRjaGVzU2VhcmNoKGFuc3dlci5xdWVzdGlvbiwgc2VhcmNoKTtcbiAgICAgIGNvbnN0IG1hdGNoZXNQYXNzYWdlID0gaGFzUGFzc2FnZU1hdGNoKGFuc3dlci5hbGxQYXNzYWdlcywgc2VhcmNoKTtcblxuICAgICAgcmV0dXJuICFtYXRjaGVzUXVlc3Rpb24gJiYgIW1hdGNoZXNQYXNzYWdlO1xuICAgIH0pO1xuXG4gICAgcmV0dXJuICFtYXRjaGVzQm9vayAmJiAhYm9vay5hbnN3ZXJzLmxlbmd0aDtcbiAgfSk7XG5cbiAgcmV0dXJuIGNsb25lZENvbnRyYWRpY3Rpb25zO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQYXNzYWdlKHBhc3NhZ2UsIGluZGV4KSB7XG4gIGNvbnN0IHRleHQgPSBpc0FycmF5KHBhc3NhZ2UudGV4dCkgPyAoXG4gICAgcGFzc2FnZS50ZXh0Lm1hcCgocGFyYWdyYXBoLCBpbmRleDEpID0+IChcbiAgICAgIDxkaXZcbiAgICAgICAga2V5PXtpbmRleDF9XG4gICAgICAgIGNsYXNzTmFtZT1cImZpcnN0XCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGJvbGROdW1iZXJzKHBhcmFncmFwaClcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgKSlcbiAgKSA6IChcbiAgICA8ZGl2XG4gICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICBfX2h0bWw6IGJvbGROdW1iZXJzKHBhc3NhZ2UudGV4dClcbiAgICAgIH19XG4gICAgLz5cbiAgKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICA8YmxvY2txdW90ZSBjbGFzc05hbWU9e2luZGV4ID09PSAwID8gXCJmaXJzdFwiIDogXCJcIn0+XG4gICAgICAgIDxzdHJvbmc+e3Bhc3NhZ2UucGFzc2FnZX08L3N0cm9uZz5cbiAgICAgICAge3RleHR9XG4gICAgICA8L2Jsb2NrcXVvdGU+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckxpbmsoeyBpbmRleCwgYm9vaywgYm9va1ZlcnNlcywgY291bnQsIHF1ZXN0aW9uIH0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9IHN0eWxlPXt7IG1hcmdpblRvcDogNiB9fT5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e2AjJHtib29rfV8ke2Jvb2tWZXJzZXN9YH1cbiAgICAgICAgaWQ9e2B0b3BfJHtib29rfV8ke2Jvb2tWZXJzZXN9YH1cbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGAke2NvdW50fSkgJHtib29rVmVyc2VzfSAtICR7cXVlc3Rpb259YFxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyQW5zd2VyKHtcbiAgaW5kZXgsXG4gIGJvb2ssXG4gIGJvb2tWZXJzZXMsXG4gIGZvdW5kQm9va1ZlcnNlcyxcbiAgcXVlc3Rpb24sXG4gIGFsbFBhc3NhZ2VzLFxuICBxdWlja0Fuc3dlcixcbiAgZnVsbFBvc3QsXG4gIGNvdW50LFxuICBoaWRlRGV0YWlscyxcbiAgdG9nZ2xlRGV0YWlsXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdlxuICAgICAga2V5PXtpbmRleH1cbiAgICAgIHN0eWxlPXt7XG4gICAgICAgIGJvcmRlcjogXCIzcHggc29saWQgcmdiYSgwLCAwLCAwLCAuNTQpXCIsXG4gICAgICAgIGJvcmRlckJvdHRvbTogMCxcbiAgICAgICAgYm9yZGVyTGVmdDogMCxcbiAgICAgICAgYm9yZGVyUmlnaHQ6IDAsXG4gICAgICAgIG1hcmdpblRvcDogMjBcbiAgICAgIH19XG4gICAgPlxuICAgICAgPGEgaHJlZj17YCN0b3BgfSBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5Ub3A6IDIwIH19PlxuICAgICAgICA8RmFDaGV2cm9uVXAgLz4gVG9wXG4gICAgICA8L2E+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtgIyR7Ym9va31gfVxuICAgICAgICBpZD17YCR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpbkxlZnQ6IDIwLCBtYXJnaW5Ub3A6IDIwIH19XG4gICAgICA+XG4gICAgICAgIDxGYUNoZXZyb25VcCAvPiB7Ym9va31cbiAgICAgIDwvYT5cbiAgICAgIDxoM1xuICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgJHtjb3VudH0pICR7Ym9va1ZlcnNlc30gLSAke3F1ZXN0aW9ufWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIHtmb3VuZEJvb2tWZXJzZXMgPyAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgIFNhbWUgYXN7XCIgXCJ9XG4gICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICB7Ym9va30ge2ZvdW5kQm9va1ZlcnNlc30gLSB7cXVlc3Rpb259XG4gICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICA8L3A+XG4gICAgICAgICAgPHBcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e3RvZ2dsZURldGFpbH1cbiAgICAgICAgICAgIHN0eWxlPXt7IGNvbG9yOiBcIiMwMzlCRTVcIiwgZm9udFNpemU6IDE2LCBjdXJzb3I6IFwicG9pbnRlclwiIH19XG4gICAgICAgICAgPlxuICAgICAgICAgICAge2hpZGVEZXRhaWxzID8gYFNob3cgYCA6IGBIaWRlIGB9IGFuc3dlclxuICAgICAgICAgIDwvcD5cbiAgICAgICAgPC9kaXY+XG4gICAgICApIDogbnVsbH1cbiAgICAgIHtoaWRlRGV0YWlscyA/IG51bGwgOiAoXG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPGg0IGNsYXNzTmFtZT1cImZpcnN0XCI+UXVpY2sgYW5zd2VyPC9oND5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogcXVpY2tBbnN3ZXIgfX0gLz5cbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHA+XG4gICAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgICAgRnVsbCBwb3N0OntcIiBcIn1cbiAgICAgICAgICAgICAgICA8YSBocmVmPXtmdWxsUG9zdH0gdGFyZ2V0PVwiX2JsYW5rXCI+XG4gICAgICAgICAgICAgICAgICB7cXVlc3Rpb259XG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8L3N0cm9uZz5cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxoND5QYXNzYWdlczwvaDQ+XG4gICAgICAgICAge2FsbFBhc3NhZ2VzLm1hcCgocGFzc2FnZUdyb3VwLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgaWYgKHBhc3NhZ2VHcm91cC5oZWFkaW5nICE9PSB1bmRlZmluZWQpIHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPXtpbmRleCA9PT0gMCA/IFwiZmlyc3RcIiA6IFwiXCJ9PlxuICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntwYXNzYWdlR3JvdXAuaGVhZGluZ308L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgIHtwYXNzYWdlR3JvdXAucGFzc2FnZXMubWFwKChwYXNzYWdlLCBpbmRleDEpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlclBhc3NhZ2UocGFzc2FnZSwgaW5kZXgxKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmVuZGVyUGFzc2FnZShwYXNzYWdlR3JvdXAsIGluZGV4KTtcbiAgICAgICAgICB9KX1cbiAgICAgICAgPC9kaXY+XG4gICAgICApfVxuICAgIDwvZGl2PlxuICApO1xufVxuXG5jb25zdCBCaWJsZUNvbnRyYWRpY3Rpb25zID0gKCkgPT4ge1xuICBsZXQgW2RldGFpbHMsIHNldERldGFpbHNdID0gdXNlU3RhdGUoe30pO1xuICBsZXQgW3NlYXJjaCwgc2V0U2VhcmNoXSA9IHVzZVN0YXRlKFwiXCIpO1xuXG4gIGxldCBsaW5rQ291bnQgPSAwO1xuICBsZXQgYW5zd2VyQ291bnQgPSAwO1xuXG4gIGNvbnN0IGltYWdlX3VybCA9IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9mYUFtRGhZLnBuZ1wiO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGBFeHBsYW5hdGlvbnMgZm9yIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlLCBpbmNsdWRpbmcgcGFzc2FnZXMsIHF1aWNrIGFuc3dlciwgYW5kIGEgbGluayB0byBhIGZ1bGxlciBwb3N0IGZvciBlYWNoIGFsbGVnZWQgQmlibGUgXCJjb250cmFkaWN0aW9uLlwiYDtcbiAgY29uc3QgZGF0ZV9hZGRlZCA9IFwiMjAxOC0xMS0yNlwiO1xuICBjb25zdCB1cGRhdGVkX2F0ID0gXCIyMDE4LTExLTI2XCI7XG5cbiAgY29uc3QgbnVtYmVycyA9IENPTlRSQURJQ1RJT05TLnJlZHVjZShcbiAgICAocmVzdWx0LCBib29rKSA9PiB7XG4gICAgICBib29rLmFuc3dlcnMuZm9yRWFjaChhbnN3ZXIgPT4ge1xuICAgICAgICBpZiAoIWFuc3dlci5zZWUpIHtcbiAgICAgICAgICByZXN1bHQudG90YWwrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5zd2VyLnF1aWNrQW5zd2VyICYmICFhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgcmVzdWx0Lm5vUXVpY2tBbnN3ZXIrKztcbiAgICAgICAgfVxuXG4gICAgICAgIGlmICghYW5zd2VyLmZ1bGxQb3N0ICYmICFhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgcmVzdWx0Lm5vRnVsbFBvc3QrKztcbiAgICAgICAgfVxuICAgICAgfSk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSxcbiAgICB7XG4gICAgICB0b3RhbDogMCxcbiAgICAgIG5vUXVpY2tBbnN3ZXI6IDAsXG4gICAgICBub0Z1bGxQb3N0OiAwXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHBhZ2VUaXRsZSA9IGBcIkNvbnRyYWRpY3Rpb25zXCIgaW4gdGhlIEJpYmxlOiBFdmVyeSBhbGxlZ2VkIGJpYmxpY2FsIFwiY29udHJhZGljdGlvblwiIGV4cGxhaW5lZGA7XG5cbiAgY29uc3QgZGF0ZVB1Ymxpc2hlZCA9IG5ldyBEYXRlKGRhdGVfYWRkZWQpO1xuXG4gIGNvbnN0IG1hdHRoZXdJbmRleCA9IGZpbmRJbmRleChcbiAgICBDT05UUkFESUNUSU9OUyxcbiAgICBib29rID0+IGJvb2suYm9vayA9PT0gXCJNYXR0aGV3XCJcbiAgKTtcblxuICBsZXQgc2VhcmNoUmVzdWx0cztcblxuICBpZiAoc2VhcmNoKSB7XG4gICAgc2VhcmNoUmVzdWx0cyA9IGdldFNlYXJjaFJlc3VsdHMoc2VhcmNoKTtcbiAgfVxuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDxIZWFkPlxuICAgICAgICA8dGl0bGU+e3BhZ2VUaXRsZX0gfCBCaWJsZSBBbnN3ZXJzPC90aXRsZT5cblxuICAgICAgICA8bWV0YSBuYW1lPVwiZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGFcbiAgICAgICAgICBwcm9wZXJ0eT1cIm9nOnVybFwiXG4gICAgICAgICAgY29udGVudD17YGh0dHBzOi8vYmlibGVhbnN3ZXJzLmlvL3RhZ3MvY29udHJhZGljdGlvbnNgfVxuICAgICAgICAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOnRpdGxlXCIgY29udGVudD17cGFnZVRpdGxlfSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6aW1hZ2VcIiBjb250ZW50PXtpbWFnZV91cmx9IC8+XG5cbiAgICAgICAgPHNjcmlwdFxuICAgICAgICAgIHR5cGU9XCJhcHBsaWNhdGlvbi9sZCtqc29uXCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgX19odG1sOiBKU09OLnN0cmluZ2lmeSh7XG4gICAgICAgICAgICAgIFwiQGNvbnRleHRcIjogXCJodHRwOi8vc2NoZW1hLm9yZ1wiLFxuICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiQXJ0aWNsZVwiLFxuICAgICAgICAgICAgICBtYWluRW50aXR5T2ZQYWdlOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIldlYlBhZ2VcIixcbiAgICAgICAgICAgICAgICBcIkBpZFwiOiBcImh0dHBzOi8vZ29vZ2xlLmNvbS9hcnRpY2xlXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgaGVhZGxpbmU6IHBhZ2VUaXRsZSxcbiAgICAgICAgICAgICAgaW1hZ2U6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgICAgICAgICB1cmw6IGltYWdlX3VybCxcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDQwMCxcbiAgICAgICAgICAgICAgICB3aWR0aDogMTIwMFxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkYXRlUHVibGlzaGVkOiBkYXRlUHVibGlzaGVkLFxuICAgICAgICAgICAgICBkYXRlTW9kaWZpZWQ6IG5ldyBEYXRlKHVwZGF0ZWRfYXQpLnRvSVNPU3RyaW5nKCksXG4gICAgICAgICAgICAgIGF1dGhvcjoge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJQZXJzb25cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIk1pY2hhZWwgQ2hlbmdcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBwdWJsaXNoZXI6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiT3JnYW5pemF0aW9uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJCaWJsZSBBbnN3ZXJzXCIsXG4gICAgICAgICAgICAgICAgbG9nbzoge1xuICAgICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgICB1cmw6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS9kSlB4UFk5LnBuZ1wiXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBkZXNjcmlwdGlvbjogZGVzY3JpcHRpb25cbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgfX1cbiAgICAgICAgLz5cbiAgICAgIDwvSGVhZD5cblxuICAgICAgPFRpdGxlU2VjdGlvblxuICAgICAgICB0aXRsZT17cGFnZVRpdGxlfVxuICAgICAgICBzdWJ0aXRsZT17YEV4cGxhbmF0aW9ucyBmb3IgZXZlcnkgYWxsZWdlZCBcImNvbnRyYWRpY3Rpb25cIiBpbiB0aGUgQmlibGVgfVxuICAgICAgICBpbWFnZV91cmw9e2ltYWdlX3VybH1cbiAgICAgICAgZGF0ZV9hZGRlZD17ZGF0ZV9hZGRlZH1cbiAgICAgICAgdXNlcj17e1xuICAgICAgICAgIG5hbWU6IFwiTWljaGFlbCBDaGVuZ1wiLFxuICAgICAgICAgIGltYWdlOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vOGFOMzFEbi5wbmdcIlxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAgPFJlYWRpbmdDb250YWluZXI+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2VhcmNoXCI+XG4gICAgICAgICAgPEZhU2VhcmNoIC8+XG4gICAgICAgICAgPFRleHRGaWVsZFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwic2VhcmNoX19pbnB1dFwiXG4gICAgICAgICAgICBvbkNoYW5nZT17ZSA9PiBzZXRTZWFyY2goZS50YXJnZXQudmFsdWUpfVxuICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJTZWFyY2ggYnkgcGFzc2FnZSBvciBrZXl3b3JkXCJcbiAgICAgICAgICAgIHZhbHVlPXtzZWFyY2h9XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIHtzZWFyY2ggPyAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cml0aW5nXCI+XG4gICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZmlyc3RcIj5TZWFyY2ggcmVzdWx0czwvaDM+XG5cbiAgICAgICAgICAgIHtzZWFyY2hSZXN1bHRzLmxlbmd0aCA/IChcbiAgICAgICAgICAgICAgc2VhcmNoUmVzdWx0cy5tYXAoYm9vayA9PiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgICA8aDQ+e2hpZ2hsaWdodFRleHQoYm9vay5ib29rLCBzZWFyY2gpfTwvaDQ+XG4gICAgICAgICAgICAgICAgICB7Ym9vay5hbnN3ZXJzLm1hcChhbnN3ZXIgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXYga2V5PXthbnN3ZXIucXVlc3Rpb259PlxuICAgICAgICAgICAgICAgICAgICAgICAge2hpZ2hsaWdodFRleHQoYW5zd2VyLnF1ZXN0aW9uLCBzZWFyY2gpfVxuICAgICAgICAgICAgICAgICAgICAgICAge2hhc1Bhc3NhZ2VNYXRjaChhbnN3ZXIuYWxsUGFzc2FnZXMsIHNlYXJjaClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPyBgICgke2Fuc3dlci5hbGxQYXNzYWdlcy5tYXAoZGF0YSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXNzYWdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5wYXNzYWdlcy5tYXAoKHBhc3NhZ2UsIGluZGV4KSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGlnaGxpZ2h0VGV4dChwYXNzYWdlLnBhc3NhZ2UsIHNlYXJjaCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGRhdGEubWFwKChwYXNzYWdlLCBpbmRleCkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8c3BhbiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aGlnaGxpZ2h0VGV4dChwYXNzYWdlLnBhc3NhZ2UsIHNlYXJjaCl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfSlgXG4gICAgICAgICAgICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApKVxuICAgICAgICAgICAgKSA6IChcbiAgICAgICAgICAgICAgPGg0Pk5vIHNlYXJjaCByZXN1bHRzPC9oND5cbiAgICAgICAgICAgICl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiAoXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cml0aW5nXCI+XG4gICAgICAgICAgICA8YSBpZD1cInRvcFwiIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgLjg0KVwiIH19PlxuICAgICAgICAgICAgICA8aDMgY2xhc3NOYW1lPVwiZmlyc3RcIj5UYWJsZSBvZiBjb250ZW50czwvaDM+XG4gICAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICAgIDxoND5PdmVydmlldzwvaDQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17YCNpbnRyb2R1Y3Rpb25gfT4xLiBJbnRyb2R1Y3Rpb248L2E+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgICAgPGEgaHJlZj17YCNmYXFzYH0+Mi4gRnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvbnM8L2E+XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGg0Pk9sZCBUZXN0YW1lbnQ8L2g0PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICB7Q09OVFJBRElDVElPTlMuc2xpY2UoMCwgbWF0dGhld0luZGV4KS5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtaXRlbVwiIGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCMke2Jvb2suYm9va31gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5ib29rfSAoe2Jvb2suYW5zd2Vycy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDQ+TmV3IFRlc3RhbWVudDwvaDQ+XG5cbiAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtY29udGFpbmVyXCI+XG4gICAgICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5zbGljZShtYXR0aGV3SW5kZXgpLm1hcChib29rID0+IHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1pdGVtXCIga2V5PXtib29rLmJvb2t9PlxuICAgICAgICAgICAgICAgICAgICA8YSBocmVmPXtgIyR7Ym9vay5ib29rfWB9PlxuICAgICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9ICh7Ym9vay5hbnN3ZXJzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoMz5Xb3JrIGluIHByb2dyZXNzPC9oMz5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGlzIHBhZ2UgaXMgc3RpbGwgYSB3b3JrIGluIHByb2dyZXNzLiBQbGVhc2UgY2hlY2sgYmFjayB0byBzZWVcbiAgICAgICAgICAgICAgdXBkYXRlcyFcbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5Ub3RhbCBleHBsYW5hdGlvbnM6IHtudW1iZXJzLnRvdGFsfTwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICAgIFF1aWNrIGFuc3dlcnMgcmVtYWluaW5nOiB7bnVtYmVycy5ub1F1aWNrQW5zd2VyfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5GdWxsIHBvc3QgcmVtYWluaW5nOiB7bnVtYmVycy5ub0Z1bGxQb3N0fTwvcD5cblxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8YSBpZD1cImludHJvZHVjdGlvblwiIGNsYXNzTmFtZT1cImxpbmstdGFyZ2V0XCI+XG4gICAgICAgICAgICAgICAgSW50cm9kdWN0aW9uXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBPcHBvbmVudHMgb2YgdGhlIEJpYmxlIGNsYWltIHRoYXQgaXQgY29udGFpbnMgbnVtZXJvdXNcbiAgICAgICAgICAgICAgaXJyZWNvbmNpbGFibGUgY29udHJhZGljdGlvbnMuIEhvd2V2ZXIsIG5vbmUgb2YgdGhlIFwiYWxsZWdlZFwiXG4gICAgICAgICAgICAgIGNvbnRyYWRpY3Rpb25zIGluIHRoZSBCaWJsZSBhcmUgdHJ1bHkgaXJyZWNvbmNpbGFibGUuXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICBUaGUgcHVycG9zZSBvZiB0aGlzIHBhZ2UgaXMgdG8gcHJvdmlkZSBwb3NzaWJsZSBleHBsYW5hdGlvbnMgZm9yXG4gICAgICAgICAgICAgIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlLlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8aDM+XG4gICAgICAgICAgICAgIDxhIGlkPVwiZmFxc1wiIGNsYXNzTmFtZT1cImxpbmstdGFyZ2V0XCI+XG4gICAgICAgICAgICAgICAgRnJlcXVlbnRseSBhc2tlZCBxdWVzdGlvbnNcbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgPC9oMz5cblxuICAgICAgICAgICAge0NPTlRSQURJQ1RJT05TLm1hcChib29rID0+IHtcbiAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgIGhyZWY9e2AjdG9wYH1cbiAgICAgICAgICAgICAgICAgICAgaWQ9e2Jvb2suYm9va31cbiAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgIG1hcmdpblRvcDogMjhcbiAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgPEZhQ2hldnJvblVwIC8+XG4gICAgICAgICAgICAgICAgICAgICZuYnNwO1RvcFxuICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPGgzXG4gICAgICAgICAgICAgICAgICAgIGtleT17Ym9vay5ib29rfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGJvcmRlckJvdHRvbTogXCIxcHggc29saWQgcmdiYSgwLCAwLCAwLCAuNTQpXCIgfX1cbiAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2suYm9va31cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgIHtib29rLmFuc3dlcnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGxpbmtDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRCb29rID0gZmluZChDT05UUkFESUNUSU9OUywgYm9vayA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYm9vay5ib29rLnRvTG93ZXJDYXNlKCkgPT09IGFuc3dlci5zZWVbMF07XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEFuc3dlciA9IGZpbmQoXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEJvb2suYW5zd2VycyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGFuc3dlckRhdGEgPT4gYW5zd2VyRGF0YS5ib29rVmVyc2VzID09PSBhbnN3ZXIuc2VlWzFdXG4gICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJMaW5rKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9va1ZlcnNlczogYW5zd2VyLmJvb2tWZXJzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBxdWVzdGlvbjogZm91bmRBbnN3ZXIucXVlc3Rpb24sXG4gICAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbGlua0NvdW50XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyTGluayh7XG4gICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgIC4uLmFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgICBjb3VudDogbGlua0NvdW50XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSl9XG5cbiAgICAgICAgICAgICAgICAgIHtib29rLmFuc3dlcnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGFuc3dlckNvdW50Kys7XG5cbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBjb25zdCBmb3VuZEJvb2sgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgICAgQ09OVFJBRElDVElPTlMsXG4gICAgICAgICAgICAgICAgICAgICAgICBib29rID0+IGJvb2suYm9vay50b0xvd2VyQ2FzZSgpID09PSBhbnN3ZXIuc2VlWzBdXG4gICAgICAgICAgICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQW5zd2VyID0gZmluZChcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9vay5hbnN3ZXJzLFxuICAgICAgICAgICAgICAgICAgICAgICAgYW5zd2VyRGF0YSA9PiBhbnN3ZXJEYXRhLmJvb2tWZXJzZXMgPT09IGFuc3dlci5zZWVbMV1cbiAgICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZGV0YWlsc0tleSA9IGAke2Jvb2suYm9va31fJHthbnN3ZXIuYm9va1ZlcnNlc31gO1xuXG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgaGlkZURldGFpbHMgPSAhZGV0YWlsc1tkZXRhaWxzS2V5XTtcblxuICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJBbnN3ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5mb3VuZEFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgICAgIGZvdW5kQm9va1ZlcnNlczogZm91bmRBbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tWZXJzZXM6IGFuc3dlci5ib29rVmVyc2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGFuc3dlckNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgICAgaGlkZURldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICB0b2dnbGVEZXRhaWwoKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNldERldGFpbHMoe1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC4uLmRldGFpbHMsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgW2RldGFpbHNLZXldOiAhZGV0YWlsc1tkZXRhaWxzS2V5XVxuICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJBbnN3ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5hbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGFuc3dlckNvdW50XG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvUmVhZGluZ0NvbnRhaW5lcj5cblxuICAgICAgPHN0eWxlIGpzeCBnbG9iYWw+e2BcbiAgICAgICAgLndyaXRpbmcgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBwLFxuICAgICAgICAud3JpdGluZyBvbCxcbiAgICAgICAgLndyaXRpbmcgdWwsXG4gICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ODtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHA6Zmlyc3QtY2hpbGQsXG4gICAgICAgIC53cml0aW5nIGgzICsgcCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBvbCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyB1bCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBibG9ja3F1b3RlLFxuICAgICAgICAud3JpdGluZyBoNCArIHAsXG4gICAgICAgIC53cml0aW5nIGg0ICsgb2wsXG4gICAgICAgIC53cml0aW5nIGg0ICsgdWwsXG4gICAgICAgIC53cml0aW5nIGg0ICsgYmxvY2txdW90ZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAgIC53cml0aW5nIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBsaSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuZmlyc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5ub21hcmdpbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbmRlbnQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlLWxlZnQge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZS1yaWdodCB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYSB7XG4gICAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLnJlZmVyZW5jZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5kaXZpZGVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBibG9jaztcbiAgICAgICAgICBmb250LXNpemU6IDM1cHg7XG4gICAgICAgICAgbGV0dGVyLXNwYWNpbmc6IDAuNmVtO1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgLndyaXRpbmcgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIHAsXG4gICAgICAgICAgLndyaXRpbmcgb2wge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgLmltYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWNvbnRlbnRzLWNvbnRhaW5lciB7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUtY29udGVudHMtaXRlbSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDE1MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmxpbmstdGFyZ2V0IHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2gge1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcbiAgICAgICAgICBtYXJnaW46IDIwcHggMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zZWFyY2hfX2lucHV0IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMTBweDtcbiAgICAgICAgICB3aWR0aDogMzIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoX19pbnB1dCBpbnB1dCB7XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLmhpZ2hsaWdodCB7XG4gICAgICAgICAgY29sb3I6ICMwMzliZTU7XG4gICAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpYmxlQ29udHJhZGljdGlvbnM7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
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
//# sourceMappingURL=contradictions.js.a84fb47ed8469e3a039d.hot-update.js.map