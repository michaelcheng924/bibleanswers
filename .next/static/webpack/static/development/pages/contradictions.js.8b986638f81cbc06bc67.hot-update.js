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
        answer = _objectSpread({}, getFoundAnswer(answer.see), {
          bookVerses: answer.bookVerses
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        key: "".concat(answer.bookVerses, "_").concat(answer.question),
        href: answer.fullPost,
        target: "_blank",
        style: {
          display: "block",
          marginBottom: 5
        },
        className: "jsx-2897691386"
      }, "".concat(answer.bookVerses, " - "), Object(_utils_string__WEBPACK_IMPORTED_MODULE_6__["highlightText"])(answer.question, search), hasPassageMatch(answer.allPassages, search) ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
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
      className: "jsx-2897691386" + " " + "nomargin"
    }, book.book), book.answers.map(function (answer, index) {
      if (answer.see) {
        answer = _objectSpread({}, getFoundAnswer(answer.see), {
          bookVerses: answer.bookVerses
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        key: "".concat(answer.bookVerses, "_").concat(answer.question),
        href: answer.fullPost,
        target: "_blank",
        style: {
          display: "block",
          marginBottom: 5
        },
        dangerouslySetInnerHTML: {
          __html: "".concat(answer.bookVerses, " - ").concat(answer.question)
        },
        className: "jsx-2897691386"
      });
    }));
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2897691386",
    css: ".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}p:first-child,.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}.writing ol,.writing ul{padding:0 40px;}.writing li{margin-bottom:10px;}.writing li:last-child{margin-bottom:0;}.writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing .first{margin-top:8px;}.writing .nomargin{margin-top:0;}.writing .indent{margin-left:20px;}.writing .image{margin-top:29px;}.writing .image-left{float:left;margin-right:20px;}.writing .image-right{float:right;margin-left:20px;}.writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}.table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.table-contents-item{font-size:16px;margin-top:10px;width:150px;}.writing .link-target{color:rgba(0,0,0,0.84);}.search{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;color:#bdbdbd;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;margin:20px 0;}.search__input{margin-left:10px;width:320px;}.search__input input{text-align:center;}.highlight{color:#039be5;font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNmZ5QixBQUcwQixBQU9BLEFBVUEsQUFlQSxBQUtBLEFBSUksQUFJSCxBQUkwQixBQVEzQixBQUlGLEFBSUksQUFJRCxBQUlMLEFBS0MsQUFLRSxBQUtDLEFBT0QsQUFRRyxBQUtBLEFBTUEsQUFLQSxBQUtDLEFBS0wsQUFLRSxBQU1XLEFBSVAsQUFRRixBQUtDLEFBSUosV0F2RkksQ0FLRCxDQWpCbkIsQ0FzQnVCLEFBWU4sQUFrRUUsQ0FqS0EsQUFPQSxBQVVBLEFBZW5CLEFBS0EsQUFvQkEsQUErQmtCLEFBZUUsQUFLQSxBQU1BLEFBS0EsQUFlRixDQXpGbEIsQUF3QkEsQUF1REUsQ0EzREYsQUF1RmMsQ0FLZCxDQXBIQSxJQW1HQSxNQWxFQSxBQUtBLEFBaUJ1QixBQXlEdkIsRUFoRW9CLEFBZWxCLEFBS0EsQUFNQSxBQUtBLEFBZVksQUEyQmQsQ0FqS1csQUFPQSxBQVVBLE9BK0JTLEVBL0NGLEFBT0EsQUFVQSxFQXFIbEIsTUE5Q1csUUF2RlgsQUFPQSxBQVVBLEFBOEJhLENBeUNiLE1BUEEsSUFqQ29CLE1BOEVILFlBN0VHLE9BNEZKLFdBM0ZoQixHQTRGZSx1QkFoREssQ0FpQ3BCLGlCQWhDQSxpQ0FnRHlCLG1HQUNULGNBQ2hCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IEZhQ2hldnJvblVwLCBGYVNlYXJjaCB9IGZyb20gXCJyZWFjdC1pY29ucy9mYVwiO1xuaW1wb3J0IHsgY2xvbmVEZWVwLCBmaW5kLCBmaW5kSW5kZXgsIGlzQXJyYXksIHJlbW92ZSwgc29tZSB9IGZyb20gXCJsb2Rhc2hcIjtcbmltcG9ydCBUZXh0RmllbGQgZnJvbSBcIkBtYXRlcmlhbC11aS9jb3JlL1RleHRGaWVsZFwiO1xuXG5pbXBvcnQgeyBoaWdobGlnaHRUZXh0LCBtYXRjaGVzU2VhcmNoIH0gZnJvbSBcIi4uL3V0aWxzL3N0cmluZ1wiO1xuaW1wb3J0IHsgYm9sZE51bWJlcnMgfSBmcm9tIFwiLi4vdXRpbHMvd3JpdGluZ1wiO1xuaW1wb3J0IENPTlRSQURJQ1RJT05TIGZyb20gXCIuLi9jb25zdGFudHMvY29udHJhZGljdGlvbnNcIjtcbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgVGl0bGVTZWN0aW9uIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvVGl0bGVTZWN0aW9uXCI7XG5pbXBvcnQgUmVhZGluZ0NvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWFkaW5nQ29udGFpbmVyXCI7XG5cbmZ1bmN0aW9uIGdldEZvdW5kQW5zd2VyKHNlZSkge1xuICBjb25zdCBmb3VuZEJvb2sgPSBmaW5kKENPTlRSQURJQ1RJT05TLCBib29rID0+IHtcbiAgICByZXR1cm4gYm9vay5ib29rLnRvTG93ZXJDYXNlKCkgPT09IHNlZVswXTtcbiAgfSk7XG5cbiAgcmV0dXJuIGZpbmQoXG4gICAgZm91bmRCb29rLmFuc3dlcnMsXG4gICAgYW5zd2VyRGF0YSA9PiBhbnN3ZXJEYXRhLmJvb2tWZXJzZXMgPT09IHNlZVsxXVxuICApO1xufVxuXG5mdW5jdGlvbiBoYXNQYXNzYWdlTWF0Y2goYWxsUGFzc2FnZXMsIHNlYXJjaCkge1xuICByZXR1cm4gc29tZShhbGxQYXNzYWdlcywgZGF0YSA9PiB7XG4gICAgaWYgKGRhdGEucGFzc2FnZXMpIHtcbiAgICAgIHJldHVybiBzb21lKGRhdGEucGFzc2FnZXMsIHBhc3NhZ2UgPT5cbiAgICAgICAgbWF0Y2hlc1NlYXJjaChwYXNzYWdlLnBhc3NhZ2UsIHNlYXJjaClcbiAgICAgICk7XG4gICAgfVxuXG4gICAgcmV0dXJuIHNvbWUoZGF0YSwgcGFzc2FnZSA9PiBtYXRjaGVzU2VhcmNoKHBhc3NhZ2UucGFzc2FnZSwgc2VhcmNoKSk7XG4gIH0pO1xufVxuXG5mdW5jdGlvbiBnZXRTZWFyY2hSZXN1bHRzKHNlYXJjaCkge1xuICBjb25zdCBjbG9uZWRDb250cmFkaWN0aW9ucyA9IGNsb25lRGVlcChDT05UUkFESUNUSU9OUyk7XG5cbiAgcmVtb3ZlKGNsb25lZENvbnRyYWRpY3Rpb25zLCBib29rID0+IHtcbiAgICBjb25zdCBtYXRjaGVzQm9vayA9IG1hdGNoZXNTZWFyY2goYm9vay5ib29rLCBzZWFyY2gpO1xuICAgIHJlbW92ZShib29rLmFuc3dlcnMsIGFuc3dlciA9PiB7XG4gICAgICBpZiAoYW5zd2VyLnNlZSkge1xuICAgICAgICBhbnN3ZXIgPSB7XG4gICAgICAgICAgLi4uZ2V0Rm91bmRBbnN3ZXIoYW5zd2VyLnNlZSksXG4gICAgICAgICAgYm9va1ZlcnNlczogYW5zd2VyLmJvb2tWZXJzZXNcbiAgICAgICAgfTtcbiAgICAgIH1cblxuICAgICAgY29uc3QgbWF0Y2hlc1F1ZXN0aW9uID0gbWF0Y2hlc1NlYXJjaChhbnN3ZXIucXVlc3Rpb24sIHNlYXJjaCk7XG4gICAgICBjb25zdCBtYXRjaGVzUGFzc2FnZSA9IGhhc1Bhc3NhZ2VNYXRjaChhbnN3ZXIuYWxsUGFzc2FnZXMsIHNlYXJjaCk7XG5cbiAgICAgIHJldHVybiAhbWF0Y2hlc1F1ZXN0aW9uICYmICFtYXRjaGVzUGFzc2FnZTtcbiAgICB9KTtcblxuICAgIHJldHVybiAhbWF0Y2hlc0Jvb2sgJiYgIWJvb2suYW5zd2Vycy5sZW5ndGg7XG4gIH0pO1xuXG4gIHJldHVybiBjbG9uZWRDb250cmFkaWN0aW9ucztcbn1cblxuZnVuY3Rpb24gcmVuZGVyUGFzc2FnZShwYXNzYWdlLCBpbmRleCkge1xuICBjb25zdCB0ZXh0ID0gaXNBcnJheShwYXNzYWdlLnRleHQpID8gKFxuICAgIHBhc3NhZ2UudGV4dC5tYXAoKHBhcmFncmFwaCwgaW5kZXgxKSA9PiAoXG4gICAgICA8ZGl2XG4gICAgICAgIGtleT17aW5kZXgxfVxuICAgICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBib2xkTnVtYmVycyhwYXJhZ3JhcGgpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICkpXG4gICkgOiAoXG4gICAgPGRpdlxuICAgICAgY2xhc3NOYW1lPVwiZmlyc3RcIlxuICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgX19odG1sOiBib2xkTnVtYmVycyhwYXNzYWdlLnRleHQpXG4gICAgICB9fVxuICAgIC8+XG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2IGtleT17aW5kZXh9PlxuICAgICAgPGJsb2NrcXVvdGUgY2xhc3NOYW1lPXtpbmRleCA9PT0gMCA/IFwiZmlyc3RcIiA6IFwiXCJ9PlxuICAgICAgICA8c3Ryb25nPntwYXNzYWdlLnBhc3NhZ2V9PC9zdHJvbmc+XG4gICAgICAgIHt0ZXh0fVxuICAgICAgPC9ibG9ja3F1b3RlPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJMaW5rKHsgaW5kZXgsIGJvb2ssIGJvb2tWZXJzZXMsIGNvdW50LCBxdWVzdGlvbiB9KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2luZGV4fSBzdHlsZT17eyBtYXJnaW5Ub3A6IDYgfX0+XG4gICAgICA8YVxuICAgICAgICBocmVmPXtgIyR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIGlkPXtgdG9wXyR7Ym9va31fJHtib29rVmVyc2VzfWB9XG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBgJHtjb3VudH0pICR7Ym9va1ZlcnNlc30gLSAke3F1ZXN0aW9ufWBcbiAgICAgICAgfX1cbiAgICAgIC8+XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmZ1bmN0aW9uIHJlbmRlckFuc3dlcih7XG4gIGluZGV4LFxuICBib29rLFxuICBib29rVmVyc2VzLFxuICBmb3VuZEJvb2tWZXJzZXMsXG4gIHF1ZXN0aW9uLFxuICBhbGxQYXNzYWdlcyxcbiAgcXVpY2tBbnN3ZXIsXG4gIGZ1bGxQb3N0LFxuICBjb3VudCxcbiAgaGlkZURldGFpbHMsXG4gIHRvZ2dsZURldGFpbFxufSkge1xuICByZXR1cm4gKFxuICAgIDxkaXZcbiAgICAgIGtleT17aW5kZXh9XG4gICAgICBzdHlsZT17e1xuICAgICAgICBib3JkZXI6IFwiM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjU0KVwiLFxuICAgICAgICBib3JkZXJCb3R0b206IDAsXG4gICAgICAgIGJvcmRlckxlZnQ6IDAsXG4gICAgICAgIGJvcmRlclJpZ2h0OiAwLFxuICAgICAgICBtYXJnaW5Ub3A6IDIwXG4gICAgICB9fVxuICAgID5cbiAgICAgIDxhIGhyZWY9e2AjdG9wYH0gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgPEZhQ2hldnJvblVwIC8+IFRvcFxuICAgICAgPC9hPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17YCMke2Jvb2t9YH1cbiAgICAgICAgaWQ9e2Ake2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luVG9wOiAyMCB9fVxuICAgICAgPlxuICAgICAgICA8RmFDaGV2cm9uVXAgLz4ge2Jvb2t9XG4gICAgICA8L2E+XG4gICAgICA8aDNcbiAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYCR7Y291bnR9KSAke2Jvb2tWZXJzZXN9IC0gJHtxdWVzdGlvbn1gXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICB7Zm91bmRCb29rVmVyc2VzID8gKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICBTYW1lIGFze1wiIFwifVxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAge2Jvb2t9IHtmb3VuZEJvb2tWZXJzZXN9IC0ge3F1ZXN0aW9ufVxuICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwXG4gICAgICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgICAgICBvbkNsaWNrPXt0b2dnbGVEZXRhaWx9XG4gICAgICAgICAgICBzdHlsZT17eyBjb2xvcjogXCIjMDM5QkU1XCIsIGZvbnRTaXplOiAxNiwgY3Vyc29yOiBcInBvaW50ZXJcIiB9fVxuICAgICAgICAgID5cbiAgICAgICAgICAgIHtoaWRlRGV0YWlscyA/IGBTaG93IGAgOiBgSGlkZSBgfSBhbnN3ZXJcbiAgICAgICAgICA8L3A+XG4gICAgICAgIDwvZGl2PlxuICAgICAgKSA6IG51bGx9XG4gICAgICB7aGlkZURldGFpbHMgPyBudWxsIDogKFxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxoNCBjbGFzc05hbWU9XCJmaXJzdFwiPlF1aWNrIGFuc3dlcjwvaDQ+XG4gICAgICAgICAgPGRpdiBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHF1aWNrQW5zd2VyIH19IC8+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIEZ1bGwgcG9zdDp7XCIgXCJ9XG4gICAgICAgICAgICAgICAgPGEgaHJlZj17ZnVsbFBvc3R9IHRhcmdldD1cIl9ibGFua1wiPlxuICAgICAgICAgICAgICAgICAge3F1ZXN0aW9ufVxuICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPC9zdHJvbmc+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICA8aDQ+UGFzc2FnZXM8L2g0PlxuICAgICAgICAgIHthbGxQYXNzYWdlcy5tYXAoKHBhc3NhZ2VHcm91cCwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgIGlmIChwYXNzYWdlR3JvdXAuaGVhZGluZyAhPT0gdW5kZWZpbmVkKSB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImZpcnN0XCIgOiBcIlwifT5cbiAgICAgICAgICAgICAgICAgICAgPHN0cm9uZz57cGFzc2FnZUdyb3VwLmhlYWRpbmd9PC9zdHJvbmc+XG4gICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICB7cGFzc2FnZUdyb3VwLnBhc3NhZ2VzLm1hcCgocGFzc2FnZSwgaW5kZXgxKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJQYXNzYWdlKHBhc3NhZ2UsIGluZGV4MSk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHJlbmRlclBhc3NhZ2UocGFzc2FnZUdyb3VwLCBpbmRleCk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgKX1cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuY29uc3QgQmlibGVDb250cmFkaWN0aW9ucyA9ICgpID0+IHtcbiAgbGV0IFtkZXRhaWxzLCBzZXREZXRhaWxzXSA9IHVzZVN0YXRlKHt9KTtcbiAgbGV0IFtzZWFyY2gsIHNldFNlYXJjaF0gPSB1c2VTdGF0ZShcIlwiKTtcblxuICBsZXQgbGlua0NvdW50ID0gMDtcbiAgbGV0IGFuc3dlckNvdW50ID0gMDtcblxuICBjb25zdCBpbWFnZV91cmwgPSBcImh0dHBzOi8vaS5pbWd1ci5jb20vZmFBbURoWS5wbmdcIjtcbiAgY29uc3QgZGVzY3JpcHRpb24gPSBgRXhwbGFuYXRpb25zIGZvciBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZSwgaW5jbHVkaW5nIHBhc3NhZ2VzLCBxdWljayBhbnN3ZXIsIGFuZCBhIGxpbmsgdG8gYSBmdWxsZXIgcG9zdCBmb3IgZWFjaCBhbGxlZ2VkIEJpYmxlIFwiY29udHJhZGljdGlvbi5cImA7XG4gIGNvbnN0IGRhdGVfYWRkZWQgPSBcIjIwMTgtMTEtMjZcIjtcbiAgY29uc3QgdXBkYXRlZF9hdCA9IFwiMjAxOC0xMS0yNlwiO1xuXG4gIGNvbnN0IG51bWJlcnMgPSBDT05UUkFESUNUSU9OUy5yZWR1Y2UoXG4gICAgKHJlc3VsdCwgYm9vaykgPT4ge1xuICAgICAgYm9vay5hbnN3ZXJzLmZvckVhY2goYW5zd2VyID0+IHtcbiAgICAgICAgaWYgKCFhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgcmVzdWx0LnRvdGFsKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFuc3dlci5xdWlja0Fuc3dlciAmJiAhYW5zd2VyLnNlZSkge1xuICAgICAgICAgIHJlc3VsdC5ub1F1aWNrQW5zd2VyKys7XG4gICAgICAgIH1cblxuICAgICAgICBpZiAoIWFuc3dlci5mdWxsUG9zdCAmJiAhYW5zd2VyLnNlZSkge1xuICAgICAgICAgIHJlc3VsdC5ub0Z1bGxQb3N0Kys7XG4gICAgICAgIH1cbiAgICAgIH0pO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sXG4gICAge1xuICAgICAgdG90YWw6IDAsXG4gICAgICBub1F1aWNrQW5zd2VyOiAwLFxuICAgICAgbm9GdWxsUG9zdDogMFxuICAgIH1cbiAgKTtcblxuICBjb25zdCBwYWdlVGl0bGUgPSBgXCJDb250cmFkaWN0aW9uc1wiIGluIHRoZSBCaWJsZTogRXZlcnkgYWxsZWdlZCBiaWJsaWNhbCBcImNvbnRyYWRpY3Rpb25cIiBleHBsYWluZWRgO1xuXG4gIGNvbnN0IGRhdGVQdWJsaXNoZWQgPSBuZXcgRGF0ZShkYXRlX2FkZGVkKTtcblxuICBjb25zdCBtYXR0aGV3SW5kZXggPSBmaW5kSW5kZXgoXG4gICAgQ09OVFJBRElDVElPTlMsXG4gICAgYm9vayA9PiBib29rLmJvb2sgPT09IFwiTWF0dGhld1wiXG4gICk7XG5cbiAgbGV0IHNlYXJjaFJlc3VsdHM7XG5cbiAgaWYgKHNlYXJjaCkge1xuICAgIHNlYXJjaFJlc3VsdHMgPSBnZXRTZWFyY2hSZXN1bHRzKHNlYXJjaCk7XG4gIH1cblxuICByZXR1cm4gKFxuICAgIDxDb250YWluZXI+XG4gICAgICA8SGVhZD5cbiAgICAgICAgPHRpdGxlPntwYWdlVGl0bGV9IHwgQmlibGUgQW5zd2VyczwvdGl0bGU+XG5cbiAgICAgICAgPG1ldGEgbmFtZT1cImRlc2NyaXB0aW9uXCIgY29udGVudD17ZGVzY3JpcHRpb259IC8+XG4gICAgICAgIDxtZXRhXG4gICAgICAgICAgcHJvcGVydHk9XCJvZzp1cmxcIlxuICAgICAgICAgIGNvbnRlbnQ9e2BodHRwczovL2JpYmxlYW5zd2Vycy5pby90YWdzL2NvbnRyYWRpY3Rpb25zYH1cbiAgICAgICAgLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzp0aXRsZVwiIGNvbnRlbnQ9e3BhZ2VUaXRsZX0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzpkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YSBwcm9wZXJ0eT1cIm9nOmltYWdlXCIgY29udGVudD17aW1hZ2VfdXJsfSAvPlxuXG4gICAgICAgIDxzY3JpcHRcbiAgICAgICAgICB0eXBlPVwiYXBwbGljYXRpb24vbGQranNvblwiXG4gICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgIF9faHRtbDogSlNPTi5zdHJpbmdpZnkoe1xuICAgICAgICAgICAgICBcIkBjb250ZXh0XCI6IFwiaHR0cDovL3NjaGVtYS5vcmdcIixcbiAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkFydGljbGVcIixcbiAgICAgICAgICAgICAgbWFpbkVudGl0eU9mUGFnZToge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJXZWJQYWdlXCIsXG4gICAgICAgICAgICAgICAgXCJAaWRcIjogXCJodHRwczovL2dvb2dsZS5jb20vYXJ0aWNsZVwiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGhlYWRsaW5lOiBwYWdlVGl0bGUsXG4gICAgICAgICAgICAgIGltYWdlOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIkltYWdlT2JqZWN0XCIsXG4gICAgICAgICAgICAgICAgdXJsOiBpbWFnZV91cmwsXG4gICAgICAgICAgICAgICAgaGVpZ2h0OiA0MDAsXG4gICAgICAgICAgICAgICAgd2lkdGg6IDEyMDBcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGF0ZVB1Ymxpc2hlZDogZGF0ZVB1Ymxpc2hlZCxcbiAgICAgICAgICAgICAgZGF0ZU1vZGlmaWVkOiBuZXcgRGF0ZSh1cGRhdGVkX2F0KS50b0lTT1N0cmluZygpLFxuICAgICAgICAgICAgICBhdXRob3I6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiUGVyc29uXCIsXG4gICAgICAgICAgICAgICAgbmFtZTogXCJNaWNoYWVsIENoZW5nXCJcbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgcHVibGlzaGVyOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIk9yZ2FuaXphdGlvblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiQmlibGUgQW5zd2Vyc1wiLFxuICAgICAgICAgICAgICAgIGxvZ286IHtcbiAgICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgICAgICAgICAgdXJsOiBcImh0dHBzOi8vaS5pbWd1ci5jb20vZEpQeFBZOS5wbmdcIlxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgfSxcbiAgICAgICAgICAgICAgZGVzY3JpcHRpb246IGRlc2NyaXB0aW9uXG4gICAgICAgICAgICB9KVxuICAgICAgICAgIH19XG4gICAgICAgIC8+XG4gICAgICA8L0hlYWQ+XG5cbiAgICAgIDxUaXRsZVNlY3Rpb25cbiAgICAgICAgdGl0bGU9e3BhZ2VUaXRsZX1cbiAgICAgICAgc3VidGl0bGU9e2BFeHBsYW5hdGlvbnMgZm9yIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlYH1cbiAgICAgICAgaW1hZ2VfdXJsPXtpbWFnZV91cmx9XG4gICAgICAgIGRhdGVfYWRkZWQ9e2RhdGVfYWRkZWR9XG4gICAgICAgIHVzZXI9e3tcbiAgICAgICAgICBuYW1lOiBcIk1pY2hhZWwgQ2hlbmdcIixcbiAgICAgICAgICBpbWFnZTogXCJodHRwczovL2kuaW1ndXIuY29tLzhhTjMxRG4ucG5nXCJcbiAgICAgICAgfX1cbiAgICAgIC8+XG5cbiAgICAgIDxSZWFkaW5nQ29udGFpbmVyPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNlYXJjaFwiPlxuICAgICAgICAgIDxGYVNlYXJjaCAvPlxuICAgICAgICAgIDxUZXh0RmllbGRcbiAgICAgICAgICAgIGNsYXNzTmFtZT1cInNlYXJjaF9faW5wdXRcIlxuICAgICAgICAgICAgb25DaGFuZ2U9e2UgPT4gc2V0U2VhcmNoKGUudGFyZ2V0LnZhbHVlKX1cbiAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiU2VhcmNoIGJ5IHBhc3NhZ2Ugb3Iga2V5d29yZFwiXG4gICAgICAgICAgICB2YWx1ZT17c2VhcmNofVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICB7c2VhcmNoID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZ1wiPlxuICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+U2VhcmNoIHJlc3VsdHM8L2gzPlxuXG4gICAgICAgICAgICB7c2VhcmNoUmVzdWx0cy5sZW5ndGggPyAoXG4gICAgICAgICAgICAgIHNlYXJjaFJlc3VsdHMubWFwKGJvb2sgPT4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtib29rLmJvb2t9PlxuICAgICAgICAgICAgICAgICAgPGg0PntoaWdobGlnaHRUZXh0KGJvb2suYm9vaywgc2VhcmNoKX08L2g0PlxuICAgICAgICAgICAgICAgICAge2Jvb2suYW5zd2Vycy5tYXAoYW5zd2VyID0+IHtcbiAgICAgICAgICAgICAgICAgICAgaWYgKGFuc3dlci5zZWUpIHtcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXIgPSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAuLi5nZXRGb3VuZEFuc3dlcihhbnN3ZXIuc2VlKSxcbiAgICAgICAgICAgICAgICAgICAgICAgIGJvb2tWZXJzZXM6IGFuc3dlci5ib29rVmVyc2VzXG4gICAgICAgICAgICAgICAgICAgICAgfTtcbiAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgIGtleT17YCR7YW5zd2VyLmJvb2tWZXJzZXN9XyR7YW5zd2VyLnF1ZXN0aW9ufWB9XG4gICAgICAgICAgICAgICAgICAgICAgICBocmVmPXthbnN3ZXIuZnVsbFBvc3R9XG4gICAgICAgICAgICAgICAgICAgICAgICB0YXJnZXQ9XCJfYmxhbmtcIlxuICAgICAgICAgICAgICAgICAgICAgICAgc3R5bGU9e3sgZGlzcGxheTogXCJibG9ja1wiLCBtYXJnaW5Cb3R0b206IDUgfX1cbiAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICB7YCR7YW5zd2VyLmJvb2tWZXJzZXN9IC0gYH1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoaWdobGlnaHRUZXh0KGFuc3dlci5xdWVzdGlvbiwgc2VhcmNoKX1cbiAgICAgICAgICAgICAgICAgICAgICAgIHtoYXNQYXNzYWdlTWF0Y2goYW5zd2VyLmFsbFBhc3NhZ2VzLCBzZWFyY2gpID8gKFxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YCAoYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YW5zd2VyLmFsbFBhc3NhZ2VzLm1hcCgoZGF0YSwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChkYXRhLnBhc3NhZ2VzKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBkYXRhLnBhc3NhZ2VzLm1hcCgocGFzc2FnZSwgaW5kZXgxKSA9PiAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleDF9PlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hpZ2hsaWdodFRleHQocGFzc2FnZS5wYXNzYWdlLCBzZWFyY2gpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4MSA9PT0gZGF0YS5wYXNzYWdlcy5sZW5ndGggLSAxICYmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBpbmRleCA9PT0gZGF0YS5sZW5ndGggLSAxXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gXCJcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IGAsIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAge2hpZ2hsaWdodFRleHQocGFzc2FnZS5wYXNzYWdlLCBzZWFyY2gpfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gZGF0YS5sZW5ndGggLSAxID8gXCJcIiA6IGAsIGB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKSlcbiAgICAgICAgICAgICkgOiAoXG4gICAgICAgICAgICAgIDxoND5ObyBzZWFyY2ggcmVzdWx0czwvaDQ+XG4gICAgICAgICAgICApfVxuICAgICAgICAgIDwvZGl2PlxuICAgICAgICApIDogKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZ1wiPlxuICAgICAgICAgICAgPGEgaWQ9XCJ0b3BcIiBzdHlsZT17eyBjb2xvcjogXCJyZ2JhKDAsIDAsIDAsIC44NClcIiB9fT5cbiAgICAgICAgICAgICAgPGgzIGNsYXNzTmFtZT1cImZpcnN0XCI+VGFibGUgb2YgY29udGVudHM8L2gzPlxuICAgICAgICAgICAgPC9hPlxuXG4gICAgICAgICAgICA8aDQ+T3ZlcnZpZXc8L2g0PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AjaW50cm9kdWN0aW9uYH0+MS4gSW50cm9kdWN0aW9uPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImZpcnN0XCI+XG4gICAgICAgICAgICAgIDxhIGhyZWY9e2AjZmFxc2B9PjIuIEZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25zPC9hPlxuICAgICAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgICAgIDxoND5PbGQgVGVzdGFtZW50PC9oND5cblxuICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgICAge0NPTlRSQURJQ1RJT05TLnNsaWNlKDAsIG1hdHRoZXdJbmRleCkubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWl0ZW1cIiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtib29rLmJvb2t9YH0+XG4gICAgICAgICAgICAgICAgICAgICAge2Jvb2suYm9va30gKHtib29rLmFuc3dlcnMubGVuZ3RofSlcbiAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgICAgPGg0Pk5ldyBUZXN0YW1lbnQ8L2g0PlxuXG4gICAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAgICB7Q09OVFJBRElDVElPTlMuc2xpY2UobWF0dGhld0luZGV4KS5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtaXRlbVwiIGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCMke2Jvb2suYm9va31gfT5cbiAgICAgICAgICAgICAgICAgICAgICB7Ym9vay5ib29rfSAoe2Jvb2suYW5zd2Vycy5sZW5ndGh9KVxuICAgICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgICA8aDM+V29yayBpbiBwcm9ncmVzczwvaDM+XG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhpcyBwYWdlIGlzIHN0aWxsIGEgd29yayBpbiBwcm9ncmVzcy4gUGxlYXNlIGNoZWNrIGJhY2sgdG8gc2VlXG4gICAgICAgICAgICAgIHVwZGF0ZXMhXG4gICAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+VG90YWwgZXhwbGFuYXRpb25zOiB7bnVtYmVycy50b3RhbH08L3A+XG4gICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgICAgICBRdWljayBhbnN3ZXJzIHJlbWFpbmluZzoge251bWJlcnMubm9RdWlja0Fuc3dlcn1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgIDxwIGNsYXNzTmFtZT1cImZpcnN0XCI+RnVsbCBwb3N0IHJlbWFpbmluZzoge251bWJlcnMubm9GdWxsUG9zdH08L3A+XG5cbiAgICAgICAgICAgIDxoMz5cbiAgICAgICAgICAgICAgPGEgaWQ9XCJpbnRyb2R1Y3Rpb25cIiBjbGFzc05hbWU9XCJsaW5rLXRhcmdldFwiPlxuICAgICAgICAgICAgICAgIEludHJvZHVjdGlvblxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgT3Bwb25lbnRzIG9mIHRoZSBCaWJsZSBjbGFpbSB0aGF0IGl0IGNvbnRhaW5zIG51bWVyb3VzXG4gICAgICAgICAgICAgIGlycmVjb25jaWxhYmxlIGNvbnRyYWRpY3Rpb25zLiBIb3dldmVyLCBub25lIG9mIHRoZSBcImFsbGVnZWRcIlxuICAgICAgICAgICAgICBjb250cmFkaWN0aW9ucyBpbiB0aGUgQmlibGUgYXJlIHRydWx5IGlycmVjb25jaWxhYmxlLlxuICAgICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgICA8cD5cbiAgICAgICAgICAgICAgVGhlIHB1cnBvc2Ugb2YgdGhpcyBwYWdlIGlzIHRvIHByb3ZpZGUgcG9zc2libGUgZXhwbGFuYXRpb25zIGZvclxuICAgICAgICAgICAgICBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZS5cbiAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgPGgzPlxuICAgICAgICAgICAgICA8YSBpZD1cImZhcXNcIiBjbGFzc05hbWU9XCJsaW5rLXRhcmdldFwiPlxuICAgICAgICAgICAgICAgIEZyZXF1ZW50bHkgYXNrZWQgcXVlc3Rpb25zXG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2Jvb2suYm9va30+XG4gICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICBocmVmPXtgI3RvcGB9XG4gICAgICAgICAgICAgICAgICAgIGlkPXtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgYWxpZ25JdGVtczogXCJjZW50ZXJcIixcbiAgICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDI4XG4gICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25VcCAvPlxuICAgICAgICAgICAgICAgICAgICAmbmJzcDtUb3BcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICAgIDxoMyBrZXk9e2Jvb2suYm9va30gY2xhc3NOYW1lPVwibm9tYXJnaW5cIj5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2suYm9va31cbiAgICAgICAgICAgICAgICAgIDwvaDM+XG5cbiAgICAgICAgICAgICAgICAgIHtib29rLmFuc3dlcnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIGlmIChhbnN3ZXIuc2VlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgYW5zd2VyID0ge1xuICAgICAgICAgICAgICAgICAgICAgICAgLi4uZ2V0Rm91bmRBbnN3ZXIoYW5zd2VyLnNlZSksXG4gICAgICAgICAgICAgICAgICAgICAgICBib29rVmVyc2VzOiBhbnN3ZXIuYm9va1ZlcnNlc1xuICAgICAgICAgICAgICAgICAgICAgIH07XG4gICAgICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgICAgICAgICBrZXk9e2Ake2Fuc3dlci5ib29rVmVyc2VzfV8ke2Fuc3dlci5xdWVzdGlvbn1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgaHJlZj17YW5zd2VyLmZ1bGxQb3N0fVxuICAgICAgICAgICAgICAgICAgICAgICAgdGFyZ2V0PVwiX2JsYW5rXCJcbiAgICAgICAgICAgICAgICAgICAgICAgIHN0eWxlPXt7IGRpc3BsYXk6IFwiYmxvY2tcIiwgbWFyZ2luQm90dG9tOiA1IH19XG4gICAgICAgICAgICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICBfX2h0bWw6IGAke2Fuc3dlci5ib29rVmVyc2VzfSAtICR7YW5zd2VyLnF1ZXN0aW9ufWBcbiAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgfSl9XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICl9XG4gICAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICAgIDxzdHlsZSBqc3ggZ2xvYmFsPntgXG4gICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAgIC53cml0aW5nIHVsLFxuICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICBwOmZpcnN0LWNoaWxkLFxuICAgICAgICAud3JpdGluZyBoMyArIHAsXG4gICAgICAgIC53cml0aW5nIGgzICsgb2wsXG4gICAgICAgIC53cml0aW5nIGgzICsgdWwsXG4gICAgICAgIC53cml0aW5nIGgzICsgYmxvY2txdW90ZSxcbiAgICAgICAgLndyaXRpbmcgaDQgKyBwLFxuICAgICAgICAud3JpdGluZyBoNCArIG9sLFxuICAgICAgICAud3JpdGluZyBoNCArIHVsLFxuICAgICAgICAud3JpdGluZyBoNCArIGJsb2NrcXVvdGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIG9sLFxuICAgICAgICAud3JpdGluZyB1bCB7XG4gICAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgbGkge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmZpcnN0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAubm9tYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW5kZW50IHtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5pbWFnZS1sZWZ0IHtcbiAgICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2UtcmlnaHQge1xuICAgICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGEge1xuICAgICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5yZWZlcmVuY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZGl2aWRlciB7XG4gICAgICAgICAgZGlzcGxheTogYmxvY2s7XG4gICAgICAgICAgZm9udC1zaXplOiAzNXB4O1xuICAgICAgICAgIGxldHRlci1zcGFjaW5nOiAwLjZlbTtcbiAgICAgICAgICB0ZXh0LWFsaWduOiBjZW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBwLFxuICAgICAgICAgIC53cml0aW5nIG9sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1jb250ZW50cy1jb250YWluZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAgZmxleC13cmFwOiB3cmFwO1xuICAgICAgICB9XG5cbiAgICAgICAgLnRhYmxlLWNvbnRlbnRzLWl0ZW0ge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAxMHB4O1xuICAgICAgICAgIHdpZHRoOiAxNTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5saW5rLXRhcmdldCB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoIHtcbiAgICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgbWFyZ2luOiAyMHB4IDA7XG4gICAgICAgIH1cblxuICAgICAgICAuc2VhcmNoX19pbnB1dCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDEwcHg7XG4gICAgICAgICAgd2lkdGg6IDMyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNlYXJjaF9faW5wdXQgaW5wdXQge1xuICAgICAgICAgIHRleHQtYWxpZ246IGNlbnRlcjtcbiAgICAgICAgfVxuXG4gICAgICAgIC5oaWdobGlnaHQge1xuICAgICAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9Db250YWluZXI+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBCaWJsZUNvbnRyYWRpY3Rpb25zO1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
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
//# sourceMappingURL=contradictions.js.8b986638f81cbc06bc67.hot-update.js.map