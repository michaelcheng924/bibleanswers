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


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }













function getFoundAnswer(see) {
  var foundBook = Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_constants_contradictions__WEBPACK_IMPORTED_MODULE_8__["default"], function (book) {
    return book.book.toLowerCase() === see[0];
  });
  return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(foundBook.answers, function (answerData) {
    return answerData.bookVerses === see[1];
  });
}

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
      if (answer.see) {
        answer = _objectSpread({}, getFoundAnswer(answer.see), {
          bookVerses: answer.bookVerses
        });
      }

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
      if (answer.see) {
        answer = getFoundAnswer(answer.see);
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
        key: "".concat(answer.bookVerses, "_").concat(answer.question),
        style: {
          marginBottom: 5
        },
        className: "jsx-2897691386"
      }, Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["highlightText"])(answer.question, search), hasPassageMatch(answer.allPassages, search) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-2897691386"
      }, " (", answer.allPassages.map(function (data, index) {
        if (data.passages) {
          return data.passages.map(function (passage, index1) {
            return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
              key: index1,
              className: "jsx-2897691386"
            }, Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["highlightText"])(passage.passage, search), index1 === data.passages.length - 1 && index === data.length - 1 ? "" : ", ");
          });
        }

        return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
          key: index,
          className: "jsx-2897691386"
        }, Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["highlightText"])(passage.passage, search), index === data.length - 1 ? "" : ", ");
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
        var foundAnswer = getFoundAnswer(answer.see);
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
        var foundAnswer = getFoundAnswer(answer.see);
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
    css: ".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}p:first-child,.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}.writing ol,.writing ul{padding:0 40px;}.writing li{margin-bottom:10px;}.writing li:last-child{margin-bottom:0;}.writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing .first{margin-top:8px;}.writing .nomargin{margin-top:0;}.writing .indent{margin-left:20px;}.writing .image{margin-top:29px;}.writing .image-left{float:left;margin-right:20px;}.writing .image-right{float:right;margin-left:20px;}.writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}.table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.table-contents-item{font-size:16px;margin-top:10px;width:150px;}.writing .link-target{color:rgba(0,0,0,0.84);}.search{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#bdbdbd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px 0;}.search__input{margin-left:10px;width:320px;}.search__input input{text-align:center;}.highlight{color:#039be5;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBZ2lCeUIsQUFHMEIsQUFPQSxBQVVBLEFBZUEsQUFLQSxBQUlJLEFBSUgsQUFJMEIsQUFRM0IsQUFJRixBQUlJLEFBSUQsQUFJTCxBQUtDLEFBS0UsQUFLQyxBQU9ELEFBUUcsQUFLQSxBQU1BLEFBS0EsQUFLQyxBQUtMLEFBS0UsQUFNVyxBQUlQLEFBUUYsQUFLQyxBQUlKLFdBdkZJLENBS0QsQ0FqQm5CLENBc0J1QixBQVlOLEFBa0VFLENBaktBLEFBT0EsQUFVQSxBQWVuQixBQUtBLEFBb0JBLEFBK0JrQixBQWVFLEFBS0EsQUFNQSxBQUtBLEFBZUYsQ0F6RmxCLEFBd0JBLEFBdURFLENBM0RGLEFBdUZjLENBS2QsQ0FwSEEsSUFtR0EsTUFsRUEsQUFLQSxBQWlCdUIsQUF5RHZCLEVBaEVvQixBQWVsQixBQUtBLEFBTUEsQUFLQSxBQWVZLEFBMkJkLENBaktXLEFBT0EsQUFVQSxPQStCUyxFQS9DRixBQU9BLEFBVUEsRUFxSGxCLE1BOUNXLFFBdkZYLEFBT0EsQUFVQSxBQThCYSxDQXlDYixNQVBBLElBakNvQixNQThFSCxZQTdFRyxPQTRGSixXQTNGaEIsR0E0RmUsdUJBaERLLENBaUNwQixpQkFoQ0EsaUNBZ0R5QixtR0FDVCxjQUNoQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbnRyYWRpY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBGYUNoZXZyb25VcCwgRmFTZWFyY2ggfSBmcm9tIFwicmVhY3QtaWNvbnMvZmFcIjtcbmltcG9ydCB7IGNsb25lRGVlcCwgZmluZCwgZmluZEluZGV4LCBpc0FycmF5LCByZW1vdmUsIHNvbWUgfSBmcm9tIFwibG9kYXNoXCI7XG5pbXBvcnQgVGV4dEZpZWxkIGZyb20gXCJAbWF0ZXJpYWwtdWkvY29yZS9UZXh0RmllbGRcIjtcblxuaW1wb3J0IHsgaGlnaGxpZ2h0VGV4dCwgbWF0Y2hlc1NlYXJjaCB9IGZyb20gXCIuLi91dGlscy9zdHJpbmdcIjtcbmltcG9ydCB7IGJvbGROdW1iZXJzIH0gZnJvbSBcIi4uL3V0aWxzL3dyaXRpbmdcIjtcbmltcG9ydCBDT05UUkFESUNUSU9OUyBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbnRyYWRpY3Rpb25zXCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCB7IFRpdGxlU2VjdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RpdGxlU2VjdGlvblwiO1xuaW1wb3J0IFJlYWRpbmdDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVhZGluZ0NvbnRhaW5lclwiO1xuXG5mdW5jdGlvbiBnZXRGb3VuZEFuc3dlcihzZWUpIHtcbiAgY29uc3QgZm91bmRCb29rID0gZmluZChDT05UUkFESUNUSU9OUywgYm9vayA9PiB7XG4gICAgcmV0dXJuIGJvb2suYm9vay50b0xvd2VyQ2FzZSgpID09PSBzZWVbMF07XG4gIH0pO1xuXG4gIHJldHVybiBmaW5kKFxuICAgIGZvdW5kQm9vay5hbnN3ZXJzLFxuICAgIGFuc3dlckRhdGEgPT4gYW5zd2VyRGF0YS5ib29rVmVyc2VzID09PSBzZWVbMV1cbiAgKTtcbn1cblxuZnVuY3Rpb24gaGFzUGFzc2FnZU1hdGNoKGFsbFBhc3NhZ2VzLCBzZWFyY2gpIHtcbiAgcmV0dXJuIHNvbWUoYWxsUGFzc2FnZXMsIGRhdGEgPT4ge1xuICAgIGlmIChkYXRhLnBhc3NhZ2VzKSB7XG4gICAgICByZXR1cm4gc29tZShkYXRhLnBhc3NhZ2VzLCBwYXNzYWdlID0+XG4gICAgICAgIG1hdGNoZXNTZWFyY2gocGFzc2FnZS5wYXNzYWdlLCBzZWFyY2gpXG4gICAgICApO1xuICAgIH1cblxuICAgIHJldHVybiBzb21lKGRhdGEsIHBhc3NhZ2UgPT4gbWF0Y2hlc1NlYXJjaChwYXNzYWdlLnBhc3NhZ2UsIHNlYXJjaCkpO1xuICB9KTtcbn1cblxuZnVuY3Rpb24gZ2V0U2VhcmNoUmVzdWx0cyhzZWFyY2gpIHtcbiAgY29uc3QgY2xvbmVkQ29udHJhZGljdGlvbnMgPSBjbG9uZURlZXAoQ09OVFJBRElDVElPTlMpO1xuXG4gIHJlbW92ZShjbG9uZWRDb250cmFkaWN0aW9ucywgYm9vayA9PiB7XG4gICAgY29uc3QgbWF0Y2hlc0Jvb2sgPSBtYXRjaGVzU2VhcmNoKGJvb2suYm9vaywgc2VhcmNoKTtcbiAgICByZW1vdmUoYm9vay5hbnN3ZXJzLCBhbnN3ZXIgPT4ge1xuICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgYW5zd2VyID0ge1xuICAgICAgICAgIC4uLmdldEZvdW5kQW5zd2VyKGFuc3dlci5zZWUpLFxuICAgICAgICAgIGJvb2tWZXJzZXM6IGFuc3dlci5ib29rVmVyc2VzXG4gICAgICAgIH07XG4gICAgICB9XG5cbiAgICAgIGNvbnN0IG1hdGNoZXNRdWVzdGlvbiA9IG1hdGNoZXNTZWFyY2goYW5zd2VyLnF1ZXN0aW9uLCBzZWFyY2gpO1xuICAgICAgY29uc3QgbWF0Y2hlc1Bhc3NhZ2UgPSBoYXNQYXNzYWdlTWF0Y2goYW5zd2VyLmFsbFBhc3NhZ2VzLCBzZWFyY2gpO1xuXG4gICAgICByZXR1cm4gIW1hdGNoZXNRdWVzdGlvbiAmJiAhbWF0Y2hlc1Bhc3NhZ2U7XG4gICAgfSk7XG5cbiAgICByZXR1cm4gIW1hdGNoZXNCb29rICYmICFib29rLmFuc3dlcnMubGVuZ3RoO1xuICB9KTtcblxuICByZXR1cm4gY2xvbmVkQ29udHJhZGljdGlvbnM7XG59XG5cbmZ1bmN0aW9uIHJlbmRlclBhc3NhZ2UocGFzc2FnZSwgaW5kZXgpIHtcbiAgY29uc3QgdGV4dCA9IGlzQXJyYXkocGFzc2FnZS50ZXh0KSA/IChcbiAgICBwYXNzYWdlLnRleHQubWFwKChwYXJhZ3JhcGgsIGluZGV4MSkgPT4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2luZGV4MX1cbiAgICAgICAgY2xhc3NOYW1lPVwiZmlyc3RcIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYm9sZE51bWJlcnMocGFyYWdyYXBoKVxuICAgICAgICB9fVxuICAgICAgLz5cbiAgICApKVxuICApIDogKFxuICAgIDxkaXZcbiAgICAgIGNsYXNzTmFtZT1cImZpcnN0XCJcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgIF9faHRtbDogYm9sZE51bWJlcnMocGFzc2FnZS50ZXh0KVxuICAgICAgfX1cbiAgICAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImZpcnN0XCIgOiBcIlwifT5cbiAgICAgICAgPHN0cm9uZz57cGFzc2FnZS5wYXNzYWdlfTwvc3Ryb25nPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYmxvY2txdW90ZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGluayh7IGluZGV4LCBib29rLCBib29rVmVyc2VzLCBjb3VudCwgcXVlc3Rpb24gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3sgbWFyZ2luVG9wOiA2IH19PlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17YCMke2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBpZD17YHRvcF8ke2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYCR7Y291bnR9KSAke2Jvb2tWZXJzZXN9IC0gJHtxdWVzdGlvbn1gXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBbnN3ZXIoe1xuICBpbmRleCxcbiAgYm9vayxcbiAgYm9va1ZlcnNlcyxcbiAgZm91bmRCb29rVmVyc2VzLFxuICBxdWVzdGlvbixcbiAgYWxsUGFzc2FnZXMsXG4gIHF1aWNrQW5zd2VyLFxuICBmdWxsUG9zdCxcbiAgY291bnQsXG4gIGhpZGVEZXRhaWxzLFxuICB0b2dnbGVEZXRhaWxcbn0pIHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2XG4gICAgICBrZXk9e2luZGV4fVxuICAgICAgc3R5bGU9e3tcbiAgICAgICAgYm9yZGVyOiBcIjNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIC41NClcIixcbiAgICAgICAgYm9yZGVyQm90dG9tOiAwLFxuICAgICAgICBib3JkZXJMZWZ0OiAwLFxuICAgICAgICBib3JkZXJSaWdodDogMCxcbiAgICAgICAgbWFyZ2luVG9wOiAyMFxuICAgICAgfX1cbiAgICA+XG4gICAgICA8YSBocmVmPXtgI3RvcGB9IHN0eWxlPXt7IGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgIDxGYUNoZXZyb25VcCAvPiBUb3BcbiAgICAgIDwvYT5cbiAgICAgIDxhXG4gICAgICAgIGhyZWY9e2AjJHtib29rfWB9XG4gICAgICAgIGlkPXtgJHtib29rfV8ke2Jvb2tWZXJzZXN9YH1cbiAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWFyZ2luTGVmdDogMjAsIG1hcmdpblRvcDogMjAgfX1cbiAgICAgID5cbiAgICAgICAgPEZhQ2hldnJvblVwIC8+IHtib29rfVxuICAgICAgPC9hPlxuICAgICAgPGgzXG4gICAgICAgIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCJcbiAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICBfX2h0bWw6IGAke2NvdW50fSkgJHtib29rVmVyc2VzfSAtICR7cXVlc3Rpb259YFxuICAgICAgICB9fVxuICAgICAgLz5cblxuICAgICAge2ZvdW5kQm9va1ZlcnNlcyA/IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgICAgU2FtZSBhc3tcIiBcIn1cbiAgICAgICAgICAgIDxzdHJvbmc+XG4gICAgICAgICAgICAgIHtib29rfSB7Zm91bmRCb29rVmVyc2VzfSAtIHtxdWVzdGlvbn1cbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvcD5cbiAgICAgICAgICA8cFxuICAgICAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIlxuICAgICAgICAgICAgb25DbGljaz17dG9nZ2xlRGV0YWlsfVxuICAgICAgICAgICAgc3R5bGU9e3sgY29sb3I6IFwiIzAzOUJFNVwiLCBmb250U2l6ZTogMTYsIGN1cnNvcjogXCJwb2ludGVyXCIgfX1cbiAgICAgICAgICA+XG4gICAgICAgICAgICB7aGlkZURldGFpbHMgPyBgU2hvdyBgIDogYEhpZGUgYH0gYW5zd2VyXG4gICAgICAgICAgPC9wPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICkgOiBudWxsfVxuICAgICAge2hpZGVEZXRhaWxzID8gbnVsbCA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZmlyc3RcIj5RdWljayBhbnN3ZXI8L2g0PlxuICAgICAgICAgIDxkaXYgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3sgX19odG1sOiBxdWlja0Fuc3dlciB9fSAvPlxuICAgICAgICAgIDxkaXY+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAgICBGdWxsIHBvc3Q6e1wiIFwifVxuICAgICAgICAgICAgICAgIDxhIGhyZWY9e2Z1bGxQb3N0fSB0YXJnZXQ9XCJfYmxhbmtcIj5cbiAgICAgICAgICAgICAgICAgIHtxdWVzdGlvbn1cbiAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGg0PlBhc3NhZ2VzPC9oND5cbiAgICAgICAgICB7YWxsUGFzc2FnZXMubWFwKChwYXNzYWdlR3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFzc2FnZUdyb3VwLmhlYWRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2luZGV4ID09PSAwID8gXCJmaXJzdFwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3Bhc3NhZ2VHcm91cC5oZWFkaW5nfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAge3Bhc3NhZ2VHcm91cC5wYXNzYWdlcy5tYXAoKHBhc3NhZ2UsIGluZGV4MSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyUGFzc2FnZShwYXNzYWdlLCBpbmRleDEpO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZW5kZXJQYXNzYWdlKHBhc3NhZ2VHcm91cCwgaW5kZXgpO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IEJpYmxlQ29udHJhZGljdGlvbnMgPSAoKSA9PiB7XG4gIGxldCBbZGV0YWlscywgc2V0RGV0YWlsc10gPSB1c2VTdGF0ZSh7fSk7XG4gIGxldCBbc2VhcmNoLCBzZXRTZWFyY2hdID0gdXNlU3RhdGUoXCJcIik7XG5cbiAgbGV0IGxpbmtDb3VudCA9IDA7XG4gIGxldCBhbnN3ZXJDb3VudCA9IDA7XG5cbiAgY29uc3QgaW1hZ2VfdXJsID0gXCJodHRwczovL2kuaW1ndXIuY29tL2ZhQW1EaFkucG5nXCI7XG4gIGNvbnN0IGRlc2NyaXB0aW9uID0gYEV4cGxhbmF0aW9ucyBmb3IgZXZlcnkgYWxsZWdlZCBcImNvbnRyYWRpY3Rpb25cIiBpbiB0aGUgQmlibGUsIGluY2x1ZGluZyBwYXNzYWdlcywgcXVpY2sgYW5zd2VyLCBhbmQgYSBsaW5rIHRvIGEgZnVsbGVyIHBvc3QgZm9yIGVhY2ggYWxsZWdlZCBCaWJsZSBcImNvbnRyYWRpY3Rpb24uXCJgO1xuICBjb25zdCBkYXRlX2FkZGVkID0gXCIyMDE4LTExLTI2XCI7XG4gIGNvbnN0IHVwZGF0ZWRfYXQgPSBcIjIwMTgtMTEtMjZcIjtcblxuICBjb25zdCBudW1iZXJzID0gQ09OVFJBRElDVElPTlMucmVkdWNlKFxuICAgIChyZXN1bHQsIGJvb2spID0+IHtcbiAgICAgIGJvb2suYW5zd2Vycy5mb3JFYWNoKGFuc3dlciA9PiB7XG4gICAgICAgIGlmICghYW5zd2VyLnNlZSkge1xuICAgICAgICAgIHJlc3VsdC50b3RhbCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbnN3ZXIucXVpY2tBbnN3ZXIgJiYgIWFuc3dlci5zZWUpIHtcbiAgICAgICAgICByZXN1bHQubm9RdWlja0Fuc3dlcisrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbnN3ZXIuZnVsbFBvc3QgJiYgIWFuc3dlci5zZWUpIHtcbiAgICAgICAgICByZXN1bHQubm9GdWxsUG9zdCsrO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHtcbiAgICAgIHRvdGFsOiAwLFxuICAgICAgbm9RdWlja0Fuc3dlcjogMCxcbiAgICAgIG5vRnVsbFBvc3Q6IDBcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgcGFnZVRpdGxlID0gYFwiQ29udHJhZGljdGlvbnNcIiBpbiB0aGUgQmlibGU6IEV2ZXJ5IGFsbGVnZWQgYmlibGljYWwgXCJjb250cmFkaWN0aW9uXCIgZXhwbGFpbmVkYDtcblxuICBjb25zdCBkYXRlUHVibGlzaGVkID0gbmV3IERhdGUoZGF0ZV9hZGRlZCk7XG5cbiAgY29uc3QgbWF0dGhld0luZGV4ID0gZmluZEluZGV4KFxuICAgIENPTlRSQURJQ1RJT05TLFxuICAgIGJvb2sgPT4gYm9vay5ib29rID09PSBcIk1hdHRoZXdcIlxuICApO1xuXG4gIGxldCBzZWFyY2hSZXN1bHRzO1xuXG4gIGlmIChzZWFyY2gpIHtcbiAgICBzZWFyY2hSZXN1bHRzID0gZ2V0U2VhcmNoUmVzdWx0cyhzZWFyY2gpO1xuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cGFnZVRpdGxlfSB8IEJpYmxlIEFuc3dlcnM8L3RpdGxlPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9iaWJsZWFuc3dlcnMuaW8vdGFncy9jb250cmFkaWN0aW9uc2B9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwYWdlVGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlX3VybH0gLz5cblxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnXCIsXG4gICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJBcnRpY2xlXCIsXG4gICAgICAgICAgICAgIG1haW5FbnRpdHlPZlBhZ2U6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICAgICAgICAgICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly9nb29nbGUuY29tL2FydGljbGVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBoZWFkbGluZTogcGFnZVRpdGxlLFxuICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgICAgICAgIHVybDogaW1hZ2VfdXJsLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGVQdWJsaXNoZWQ6IGRhdGVQdWJsaXNoZWQsXG4gICAgICAgICAgICAgIGRhdGVNb2RpZmllZDogbmV3IERhdGUodXBkYXRlZF9hdCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTWljaGFlbCBDaGVuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHB1Ymxpc2hlcjoge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJpYmxlIEFuc3dlcnNcIixcbiAgICAgICAgICAgICAgICBsb2dvOiB7XG4gICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2kuaW1ndXIuY29tL2RKUHhQWTkucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGl0bGVTZWN0aW9uXG4gICAgICAgIHRpdGxlPXtwYWdlVGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtgRXhwbGFuYXRpb25zIGZvciBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZWB9XG4gICAgICAgIGltYWdlX3VybD17aW1hZ2VfdXJsfVxuICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICB1c2VyPXt7XG4gICAgICAgICAgbmFtZTogXCJNaWNoYWVsIENoZW5nXCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS84YU4zMURuLnBuZ1wiXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8UmVhZGluZ0NvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzZWFyY2hcIj5cbiAgICAgICAgICA8RmFTZWFyY2ggLz5cbiAgICAgICAgICA8VGV4dEZpZWxkXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJzZWFyY2hfX2lucHV0XCJcbiAgICAgICAgICAgIG9uQ2hhbmdlPXtlID0+IHNldFNlYXJjaChlLnRhcmdldC52YWx1ZSl9XG4gICAgICAgICAgICBwbGFjZWhvbGRlcj1cIlNlYXJjaCBieSBwYXNzYWdlIG9yIGtleXdvcmRcIlxuICAgICAgICAgICAgdmFsdWU9e3NlYXJjaH1cbiAgICAgICAgICAvPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3NlYXJjaCA/IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyaXRpbmdcIj5cbiAgICAgICAgICAgIDxoMyBjbGFzc05hbWU9XCJmaXJzdFwiPlNlYXJjaCByZXN1bHRzPC9oMz5cblxuICAgICAgICAgICAge3NlYXJjaFJlc3VsdHMubGVuZ3RoID8gKFxuICAgICAgICAgICAgICBzZWFyY2hSZXN1bHRzLm1hcChib29rID0+IChcbiAgICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgIDxoND57aGlnaGxpZ2h0VGV4dChib29rLmJvb2ssIHNlYXJjaCl9PC9oND5cbiAgICAgICAgICAgICAgICAgIHtib29rLmFuc3dlcnMubWFwKGFuc3dlciA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0gZ2V0Rm91bmRBbnN3ZXIoYW5zd2VyLnNlZSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7YW5zd2VyLmJvb2tWZXJzZXN9XyR7YW5zd2VyLnF1ZXN0aW9ufWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBtYXJnaW5Cb3R0b206IDUgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGlnaGxpZ2h0VGV4dChhbnN3ZXIucXVlc3Rpb24sIHNlYXJjaCl9XG4gICAgICAgICAgICAgICAgICAgICAgICB7aGFzUGFzc2FnZU1hdGNoKGFuc3dlci5hbGxQYXNzYWdlcywgc2VhcmNoKSA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2AgKGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge2Fuc3dlci5hbGxQYXNzYWdlcy5tYXAoKGRhdGEsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZiAoZGF0YS5wYXNzYWdlcykge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gZGF0YS5wYXNzYWdlcy5tYXAoKHBhc3NhZ2UsIGluZGV4MSkgPT4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXgxfT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoaWdobGlnaHRUZXh0KHBhc3NhZ2UucGFzc2FnZSwgc2VhcmNoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleDEgPT09IGRhdGEucGFzc2FnZXMubGVuZ3RoIC0gMSAmJlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXggPT09IGRhdGEubGVuZ3RoIC0gMVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IFwiXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBgLCBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGtleT17aW5kZXh9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtoaWdobGlnaHRUZXh0KHBhc3NhZ2UucGFzc2FnZSwgc2VhcmNoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IGRhdGEubGVuZ3RoIC0gMSA/IFwiXCIgOiBgLCBgfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIClcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgKSA6IG51bGx9XG4gICAgICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxoND5ObyBzZWFyY2ggcmVzdWx0czwvaDQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZ1wiPlxuICAgICAgICAgICAgPGEgaWQ9XCJ0b3BcIiBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIC44NClcIiB9fT5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+VGFibGUgb2YgY29udGVudHM8L2gzPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8aDQ+T3ZlcnZpZXc8L2g0PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AjaW50cm9kdWN0aW9uYH0+MS4gSW50cm9kdWN0aW9uPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AjZmFxc2B9PjIuIEZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25zPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoND5PbGQgVGVzdGFtZW50PC9oND5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAge0NPTlRSQURJQ1RJT05TLnNsaWNlKDAsIG1hdHRoZXdJbmRleCkubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWl0ZW1cIiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtib29rLmJvb2t9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge2Jvb2suYm9va30gKHtib29rLmFuc3dlcnMubGVuZ3RofSlcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGg0Pk5ldyBUZXN0YW1lbnQ8L2g0PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICB7Q09OVFJBRElDVElPTlMuc2xpY2UobWF0dGhld0luZGV4KS5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtaXRlbVwiIGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCMke2Jvb2suYm9va31gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5ib29rfSAoe2Jvb2suYW5zd2Vycy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDM+V29yayBpbiBwcm9ncmVzczwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhpcyBwYWdlIGlzIHN0aWxsIGEgd29yayBpbiBwcm9ncmVzcy4gUGxlYXNlIGNoZWNrIGJhY2sgdG8gc2VlXG4gICAgICAgICAgICAgIHVwZGF0ZXMhXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+VG90YWwgZXhwbGFuYXRpb25zOiB7bnVtYmVycy50b3RhbH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgICAgICBRdWljayBhbnN3ZXJzIHJlbWFpbmluZzoge251bWJlcnMubm9RdWlja0Fuc3dlcn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+RnVsbCBwb3N0IHJlbWFpbmluZzoge251bWJlcnMubm9GdWxsUG9zdH08L3A+XG5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGEgaWQ9XCJpbnRyb2R1Y3Rpb25cIiBjbGFzc05hbWU9XCJsaW5rLXRhcmdldFwiPlxuICAgICAgICAgICAgICAgIEludHJvZHVjdGlvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3Bwb25lbnRzIG9mIHRoZSBCaWJsZSBjbGFpbSB0aGF0IGl0IGNvbnRhaW5zIG51bWVyb3VzXG4gICAgICAgICAgICAgIGlycmVjb25jaWxhYmxlIGNvbnRyYWRpY3Rpb25zLiBIb3dldmVyLCBub25lIG9mIHRoZSBcImFsbGVnZWRcIlxuICAgICAgICAgICAgICBjb250cmFkaWN0aW9ucyBpbiB0aGUgQmlibGUgYXJlIHRydWx5IGlycmVjb25jaWxhYmxlLlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBwYWdlIGlzIHRvIHByb3ZpZGUgcG9zc2libGUgZXhwbGFuYXRpb25zIGZvclxuICAgICAgICAgICAgICBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZS5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8YSBpZD1cImZhcXNcIiBjbGFzc05hbWU9XCJsaW5rLXRhcmdldFwiPlxuICAgICAgICAgICAgICAgIEZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25zXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgI3RvcGB9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDI4XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25VcCAvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtUb3BcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAgICBrZXk9e2Jvb2suYm9va31cbiAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIlxuICAgICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjU0KVwiIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAgICB7Ym9vay5hbnN3ZXJzLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBsaW5rQ291bnQrKztcblxuICAgICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyLnNlZSkge1xuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGZvdW5kQW5zd2VyID0gZ2V0Rm91bmRBbnN3ZXIoYW5zd2VyLnNlZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyTGluayh7XG4gICAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tWZXJzZXM6IGFuc3dlci5ib29rVmVyc2VzLFxuICAgICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IGZvdW5kQW5zd2VyLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGxpbmtDb3VudFxuICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlbmRlckxpbmsoe1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5hbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGxpbmtDb3VudFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuXG4gICAgICAgICAgICAgICAgICB7Ym9vay5hbnN3ZXJzLm1hcCgoYW5zd2VyLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBhbnN3ZXJDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRBbnN3ZXIgPSBnZXRGb3VuZEFuc3dlcihhbnN3ZXIuc2VlKTtcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGRldGFpbHNLZXkgPSBgJHtib29rLmJvb2t9XyR7YW5zd2VyLmJvb2tWZXJzZXN9YDtcblxuICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IGhpZGVEZXRhaWxzID0gIWRldGFpbHNbZGV0YWlsc0tleV07XG5cbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyQW5zd2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgICAgYm9vazogYm9vay5ib29rLFxuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZm91bmRBbnN3ZXIsXG4gICAgICAgICAgICAgICAgICAgICAgICBmb3VuZEJvb2tWZXJzZXM6IGZvdW5kQW5zd2VyLmJvb2tWZXJzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgICBib29rVmVyc2VzOiBhbnN3ZXIuYm9va1ZlcnNlcyxcbiAgICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBhbnN3ZXJDb3VudCxcbiAgICAgICAgICAgICAgICAgICAgICAgIGhpZGVEZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgdG9nZ2xlRGV0YWlsKCkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICBzZXREZXRhaWxzKHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAuLi5kZXRhaWxzLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIFtkZXRhaWxzS2V5XTogIWRldGFpbHNbZGV0YWlsc0tleV1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyQW5zd2VyKHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgICAgLi4uYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBhbnN3ZXJDb3VudFxuICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAgIC53cml0aW5nIHVsLFxuICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwOmZpcnN0LWNoaWxkLFxuICAgICAgICAud3JpdGluZyBoMyArIHAsXG4gICAgICAgIC53cml0aW5nIGgzICsgb2wsXG4gICAgICAgIC53cml0aW5nIGgzICsgdWwsXG4gICAgICAgIC53cml0aW5nIGgzICsgYmxvY2txdW90ZSxcbiAgICAgICAgLndyaXRpbmcgaDQgKyBwLFxuICAgICAgICAud3JpdGluZyBoNCArIG9sLFxuICAgICAgICAud3JpdGluZyBoNCArIHVsLFxuICAgICAgICAud3JpdGluZyBoNCArIGJsb2NrcXVvdGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIG9sLFxuICAgICAgICAud3JpdGluZyB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgbGkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmZpcnN0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAubm9tYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW5kZW50IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZS1sZWZ0IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2UtcmlnaHQge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGEge1xuICAgICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5yZWZlcmVuY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBwLFxuICAgICAgICAgIC53cml0aW5nIG9sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1jb250ZW50cy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWNvbnRlbnRzLWl0ZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5saW5rLXRhcmdldCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoX19pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaF9faW5wdXQgaW5wdXQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCaWJsZUNvbnRyYWRpY3Rpb25zO1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
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
//# sourceMappingURL=contradictions.js.60ddaf323b5ad66d57a5.hot-update.js.map