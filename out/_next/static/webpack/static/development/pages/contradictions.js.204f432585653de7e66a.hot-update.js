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
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].slice(0, 39).map(function (book) {
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
  }, _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].slice(39).map(function (book) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: book.book,
      className: "jsx-1752415582" + " " + "table-contents-item"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(book.book),
      id: "top-".concat(book.book),
      className: "jsx-1752415582"
    }, book.book, " (", book.answers.length, ")"));
  })), _constants_contradictions__WEBPACK_IMPORTED_MODULE_6__["default"].map(function (book) {
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
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_4__["FaChevronUp"], null), "\xA0Top"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h3", {
      key: book.book,
      style: {
        borderBottom: "1px solid rgba(0, 0, 0, .54)"
      },
      className: "jsx-1752415582" + " " + "nomargin"
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
    styleId: "1752415582",
    css: ".writing h3{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing h4{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing h3+p,.writing h3+ol,.writing h3+ul,.writing h3+blockquote,.writing h4+p,.writing h4+ol,.writing h4+ul,.writing h4+blockquote{margin-top:8px;}.writing p,.writing ol,.writing ul,.writing blockquote{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.writing ol,.writing ul{padding:0 40px;}.writing li{margin-bottom:10px;}.writing li:last-child{margin-bottom:0;}.writing blockquote{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing .first{margin-top:8px;}.writing .nomargin{margin-top:0;}.writing .indent{margin-left:20px;}.writing .image{margin-top:29px;}.writing .image-left{float:left;margin-right:20px;}.writing .image-right{float:right;margin-left:20px;}.writing a{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing .reference{font-size:14px;margin-left:2px;position:relative;top:-5px;}.divider{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}@media screen and (max-width:768px){.writing h3{font-size:30px;margin-top:28px;}.writing h4{font-size:24px;margin-top:22px;}.writing p,.writing ol{font-size:18px;margin-top:21px;}.writing blockquote{font-size:18px;margin-top:21px;}.writing .image{margin-top:21px;}}.table-contents-container{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}.table-contents-item{font-size:16px;margin-top:10px;width:150px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29udHJhZGljdGlvbnMuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMll5QixBQUcwQixBQU9BLEFBY0EsQUFPQSxBQVFBLEFBSUksQUFJSCxBQUkwQixBQVEzQixBQUlGLEFBSUksQUFJRCxBQUlMLEFBS0MsQUFLRSxBQUtDLEFBT0QsQUFRRyxBQUtBLEFBTUEsQUFLQSxBQUtDLEFBS0wsQUFLRSxXQTVERyxDQUtELENBakJuQixDQXNCdUIsQUFZTixDQTlGRSxBQU9BLEFBY25CLEFBT21CLEFBUW5CLEFBb0JBLEFBK0JrQixBQWVFLEFBS0EsQUFNQSxBQUtBLEFBZUYsQ0F6RmxCLEFBd0JBLEFBdURFLENBM0RGLEVBeEJBLFVBaUNBLEFBS0EsQUFpQnVCLEVBUEgsQUFlbEIsQUFLQSxBQU1BLEFBS0EsQUFlWSxDQXJJSCxBQU9BLEFBcUJBLE9BbUJTLEVBOUNGLEFBT0EsQUFxQkEsRUF5R2xCLE1BOUNXLFFBdEZYLEFBT0EsQUFxQkEsQUFrQmEsQ0F5Q2IsTUFQQSxJQWpDb0IsTUE4RUgsWUE3RUcsa0JBQ3BCLDBCQTRDb0IsQ0FpQ3BCLGlCQWhDQSIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbnRyYWRpY3Rpb25zLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEhlYWQgZnJvbSBcIm5leHQvaGVhZFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCB7IEZhQ2hldnJvblVwIH0gZnJvbSBcInJlYWN0LWljb25zL2ZhXCI7XG5pbXBvcnQgeyBmaW5kLCBpc0FycmF5IH0gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgQ09OVFJBRElDVElPTlMgZnJvbSBcIi4uL2NvbnN0YW50cy9jb250cmFkaWN0aW9uc1wiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBUaXRsZVNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZVNlY3Rpb25cIjtcbmltcG9ydCBSZWFkaW5nQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1JlYWRpbmdDb250YWluZXJcIjtcblxuZnVuY3Rpb24gYm9sZE51bWJlcnModGV4dCkge1xuICBjb25zdCBzcGxpdFRleHQgPSB0ZXh0LnNwbGl0KFwiIFwiKTtcbiAgY29uc3QgbWFwcGVkVGV4dCA9IHNwbGl0VGV4dC5tYXAod29yZCA9PiB7XG4gICAgaWYgKHBhcnNlSW50KHdvcmQpIDwgMTAwKSB7XG4gICAgICByZXR1cm4gYDxzdHJvbmc+JHt3b3JkfTwvc3Ryb25nPmA7XG4gICAgfVxuXG4gICAgcmV0dXJuIHdvcmQ7XG4gIH0pO1xuXG4gIHJldHVybiBtYXBwZWRUZXh0LmpvaW4oXCIgXCIpO1xufVxuXG5mdW5jdGlvbiByZW5kZXJQYXNzYWdlKHBhc3NhZ2UsIGluZGV4KSB7XG4gIGNvbnN0IHRleHQgPSBpc0FycmF5KHBhc3NhZ2UudGV4dCkgPyAoXG4gICAgcGFzc2FnZS50ZXh0Lm1hcCgocGFyYWdyYXBoLCBpbmRleDEpID0+IChcbiAgICAgIDxwXG4gICAgICAgIGtleT17aW5kZXgxfVxuICAgICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgX19odG1sOiBib2xkTnVtYmVycyhwYXJhZ3JhcGgpXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgICkpXG4gICkgOiAoXG4gICAgPHBcbiAgICAgIGNsYXNzTmFtZT1cImZpcnN0XCJcbiAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgIF9faHRtbDogYm9sZE51bWJlcnMocGFzc2FnZS50ZXh0KVxuICAgICAgfX1cbiAgICAvPlxuICApO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgIDxibG9ja3F1b3RlIGNsYXNzTmFtZT17aW5kZXggPT09IDAgPyBcImZpcnN0XCIgOiBcIlwifT5cbiAgICAgICAgPHN0cm9uZz57cGFzc2FnZS5wYXNzYWdlfTwvc3Ryb25nPlxuICAgICAgICB7dGV4dH1cbiAgICAgIDwvYmxvY2txdW90ZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn1cblxuZnVuY3Rpb24gcmVuZGVyTGluayh7IGluZGV4LCBib29rLCBib29rVmVyc2VzLCBjb3VudCwgcXVlc3Rpb24gfSkge1xuICByZXR1cm4gKFxuICAgIDxkaXYga2V5PXtpbmRleH0gc3R5bGU9e3sgbWFyZ2luVG9wOiA2IH19PlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17YCMke2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBpZD17YHRvcF8ke2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYCR7Y291bnR9KSAke2Jvb2tWZXJzZXN9IC0gJHtxdWVzdGlvbn1gXG4gICAgICAgIH19XG4gICAgICAvPlxuICAgIDwvZGl2PlxuICApO1xufVxuXG5mdW5jdGlvbiByZW5kZXJBbnN3ZXIoe1xuICBpbmRleCxcbiAgYm9vayxcbiAgYm9va1ZlcnNlcyxcbiAgZm91bmRCb29rVmVyc2VzLFxuICBxdWVzdGlvbixcbiAgYWxsUGFzc2FnZXMsXG4gIHF1aWNrQW5zd2VyLFxuICBmdWxsUG9zdCxcbiAgY291bnQsXG4gIGlzRHVwbGljYXRlXG59KSB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgIDxhIGhyZWY9e2AjdG9wYH0gc3R5bGU9e3sgZGlzcGxheTogXCJpbmxpbmUtYmxvY2tcIiwgbWFyZ2luVG9wOiAyOCB9fT5cbiAgICAgICAgPEZhQ2hldnJvblVwIC8+IFRvcFxuICAgICAgPC9hPlxuICAgICAgPGFcbiAgICAgICAgaHJlZj17YCMke2Jvb2t9YH1cbiAgICAgICAgaWQ9e2Ake2Jvb2t9XyR7Ym9va1ZlcnNlc31gfVxuICAgICAgICBzdHlsZT17eyBkaXNwbGF5OiBcImlubGluZS1ibG9ja1wiLCBtYXJnaW5MZWZ0OiAyMCwgbWFyZ2luVG9wOiAyOCB9fVxuICAgICAgPlxuICAgICAgICA8RmFDaGV2cm9uVXAgLz4ge2Jvb2t9XG4gICAgICA8L2E+XG4gICAgICA8aDNcbiAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIlxuICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgIF9faHRtbDogYCR7Y291bnR9KSAke2Jvb2tWZXJzZXN9IC0gJHtxdWVzdGlvbn1gXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICB7aXNEdXBsaWNhdGUgPyAoXG4gICAgICAgIDxwPlxuICAgICAgICAgIFNhbWUgYXN7XCIgXCJ9XG4gICAgICAgICAgPGEgaHJlZj17YCMke2Jvb2t9XyR7Zm91bmRCb29rVmVyc2VzfWB9PlxuICAgICAgICAgICAgPHN0cm9uZz5cbiAgICAgICAgICAgICAge2Jvb2t9IHtmb3VuZEJvb2tWZXJzZXN9IC0ge3F1ZXN0aW9ufSAoanVtcCB0aGVyZSlcbiAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgIDwvYT5cbiAgICAgICAgPC9wPlxuICAgICAgKSA6IChcbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8aDQgY2xhc3NOYW1lPVwiZmlyc3RcIj5RdWljayBhbnN3ZXI8L2g0PlxuICAgICAgICAgIDxwPntxdWlja0Fuc3dlcn08L3A+XG4gICAgICAgICAgPGRpdj5cbiAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICA8c3Ryb25nPlxuICAgICAgICAgICAgICAgIEZ1bGwgcG9zdDogPGEgaHJlZj17ZnVsbFBvc3R9PntxdWVzdGlvbn08L2E+XG4gICAgICAgICAgICAgIDwvc3Ryb25nPlxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGg0PlBhc3NhZ2VzPC9oND5cbiAgICAgICAgICB7YWxsUGFzc2FnZXMubWFwKChwYXNzYWdlR3JvdXAsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICBpZiAocGFzc2FnZUdyb3VwLmhlYWRpbmcgIT09IHVuZGVmaW5lZCkge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYga2V5PXtpbmRleH0+XG4gICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9e2luZGV4ID09PSAwID8gXCJmaXJzdFwiIDogXCJcIn0+XG4gICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+e3Bhc3NhZ2VHcm91cC5oZWFkaW5nfTwvc3Ryb25nPlxuICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAge3Bhc3NhZ2VHcm91cC5wYXNzYWdlcy5tYXAoKHBhc3NhZ2UsIGluZGV4MSkgPT4ge1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyUGFzc2FnZShwYXNzYWdlLCBpbmRleDEpO1xuICAgICAgICAgICAgICAgICAgfSl9XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZW5kZXJQYXNzYWdlKHBhc3NhZ2VHcm91cCwgaW5kZXgpO1xuICAgICAgICAgIH0pfVxuICAgICAgICA8L2Rpdj5cbiAgICAgICl9XG4gICAgPC9kaXY+XG4gICk7XG59XG5cbmNvbnN0IEJpYmxlQ29udHJhZGljdGlvbnMgPSAoKSA9PiB7XG4gIGxldCBsaW5rQ291bnQgPSAwO1xuICBsZXQgYW5zd2VyQ291bnQgPSAwO1xuXG4gIGNvbnN0IGltYWdlX3VybCA9IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS8zOWR1UldrLnBuZ1wiO1xuICBjb25zdCBkZXNjcmlwdGlvbiA9IGBFeHBsYW5hdGlvbnMgZm9yIGV2ZXJ5IGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlLCBpbmNsdWRpbmcgcGFzc2FnZXMsIHF1aWNrIGFuc3dlciwgYW5kIGEgbGluayB0byBhIGZ1bGxlciBwb3N0IGZvciBlYWNoIGFsbGVnZWQgQmlibGUgXCJjb250cmFkaWN0aW9uLlwiYDtcbiAgY29uc3QgZGF0ZV9hZGRlZCA9IFwiMjAxOC0xMS0yNlwiO1xuICBjb25zdCB1cGRhdGVkX2F0ID0gXCIyMDE4LTExLTI2XCI7XG5cbiAgY29uc3QgbnVtYmVycyA9IENPTlRSQURJQ1RJT05TLnJlZHVjZShcbiAgICAocmVzdWx0LCBib29rKSA9PiB7XG4gICAgICBib29rLmFuc3dlcnMuZm9yRWFjaChhbnN3ZXIgPT4ge1xuICAgICAgICBpZiAoYW5zd2VyLnNlZSkge1xuICAgICAgICAgIHJlc3VsdC50b3RhbCsrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbnN3ZXIucXVpY2tBbnN3ZXIpIHtcbiAgICAgICAgICByZXN1bHQubm9RdWlja0Fuc3dlcisrO1xuICAgICAgICB9XG5cbiAgICAgICAgaWYgKCFhbnN3ZXIuZnVsbFBvc3QpIHtcbiAgICAgICAgICByZXN1bHQubm9GdWxsUG9zdCsrO1xuICAgICAgICB9XG4gICAgICB9KTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LFxuICAgIHtcbiAgICAgIHRvdGFsOiAwLFxuICAgICAgbm9RdWlja0Fuc3dlcjogMCxcbiAgICAgIG5vRnVsbFBvc3Q6IDBcbiAgICB9XG4gICk7XG5cbiAgY29uc3QgcGFnZVRpdGxlID0gYEJpYmxlIFwiQ29udHJhZGljdGlvbnNcIjogRXhwbGFuYXRpb25zIGZvciBFdmVyeSAoJHtcbiAgICBudW1iZXJzLnRvdGFsXG4gIH0pIGFsbGVnZWQgXCJjb250cmFkaWN0aW9uXCIgaW4gdGhlIEJpYmxlYDtcblxuICBjb25zdCBkYXRlUHVibGlzaGVkID0gbmV3IERhdGUoZGF0ZV9hZGRlZCk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPEhlYWQ+XG4gICAgICAgIDx0aXRsZT57cGFnZVRpdGxlfSB8IEJpYmxlIEFuc3dlcnM8L3RpdGxlPlxuXG4gICAgICAgIDxtZXRhIG5hbWU9XCJkZXNjcmlwdGlvblwiIGNvbnRlbnQ9e2Rlc2NyaXB0aW9ufSAvPlxuICAgICAgICA8bWV0YVxuICAgICAgICAgIHByb3BlcnR5PVwib2c6dXJsXCJcbiAgICAgICAgICBjb250ZW50PXtgaHR0cHM6Ly9iaWJsZWFuc3dlcnMuaW8vdGFncy9jb250cmFkaWN0aW9uc2B9XG4gICAgICAgIC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6dGl0bGVcIiBjb250ZW50PXtwYWdlVGl0bGV9IC8+XG4gICAgICAgIDxtZXRhIHByb3BlcnR5PVwib2c6ZGVzY3JpcHRpb25cIiBjb250ZW50PXtkZXNjcmlwdGlvbn0gLz5cbiAgICAgICAgPG1ldGEgcHJvcGVydHk9XCJvZzppbWFnZVwiIGNvbnRlbnQ9e2ltYWdlX3VybH0gLz5cblxuICAgICAgICA8c2NyaXB0XG4gICAgICAgICAgdHlwZT1cImFwcGxpY2F0aW9uL2xkK2pzb25cIlxuICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICBfX2h0bWw6IEpTT04uc3RyaW5naWZ5KHtcbiAgICAgICAgICAgICAgXCJAY29udGV4dFwiOiBcImh0dHA6Ly9zY2hlbWEub3JnXCIsXG4gICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJBcnRpY2xlXCIsXG4gICAgICAgICAgICAgIG1haW5FbnRpdHlPZlBhZ2U6IHtcbiAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiV2ViUGFnZVwiLFxuICAgICAgICAgICAgICAgIFwiQGlkXCI6IFwiaHR0cHM6Ly9nb29nbGUuY29tL2FydGljbGVcIlxuICAgICAgICAgICAgICB9LFxuICAgICAgICAgICAgICBoZWFkbGluZTogcGFnZVRpdGxlLFxuICAgICAgICAgICAgICBpbWFnZToge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJJbWFnZU9iamVjdFwiLFxuICAgICAgICAgICAgICAgIHVybDogaW1hZ2VfdXJsLFxuICAgICAgICAgICAgICAgIGhlaWdodDogNDAwLFxuICAgICAgICAgICAgICAgIHdpZHRoOiAxMjAwXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRhdGVQdWJsaXNoZWQ6IGRhdGVQdWJsaXNoZWQsXG4gICAgICAgICAgICAgIGRhdGVNb2RpZmllZDogbmV3IERhdGUodXBkYXRlZF9hdCkudG9JU09TdHJpbmcoKSxcbiAgICAgICAgICAgICAgYXV0aG9yOiB7XG4gICAgICAgICAgICAgICAgXCJAdHlwZVwiOiBcIlBlcnNvblwiLFxuICAgICAgICAgICAgICAgIG5hbWU6IFwiTWljaGFlbCBDaGVuZ1wiXG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIHB1Ymxpc2hlcjoge1xuICAgICAgICAgICAgICAgIFwiQHR5cGVcIjogXCJPcmdhbml6YXRpb25cIixcbiAgICAgICAgICAgICAgICBuYW1lOiBcIkJpYmxlIEFuc3dlcnNcIixcbiAgICAgICAgICAgICAgICBsb2dvOiB7XG4gICAgICAgICAgICAgICAgICBcIkB0eXBlXCI6IFwiSW1hZ2VPYmplY3RcIixcbiAgICAgICAgICAgICAgICAgIHVybDogXCJodHRwczovL2kuaW1ndXIuY29tL2RKUHhQWTkucG5nXCJcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIH0sXG4gICAgICAgICAgICAgIGRlc2NyaXB0aW9uOiBkZXNjcmlwdGlvblxuICAgICAgICAgICAgfSlcbiAgICAgICAgICB9fVxuICAgICAgICAvPlxuICAgICAgPC9IZWFkPlxuXG4gICAgICA8VGl0bGVTZWN0aW9uXG4gICAgICAgIHRpdGxlPXtwYWdlVGl0bGV9XG4gICAgICAgIHN1YnRpdGxlPXtgRXhwbGFuYXRpb25zIGZvciBldmVyeSBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZWB9XG4gICAgICAgIGltYWdlX3VybD17aW1hZ2VfdXJsfVxuICAgICAgICBkYXRlX2FkZGVkPXtkYXRlX2FkZGVkfVxuICAgICAgICB1c2VyPXt7XG4gICAgICAgICAgbmFtZTogXCJNaWNoYWVsIENoZW5nXCIsXG4gICAgICAgICAgaW1hZ2U6IFwiaHR0cHM6Ly9pLmltZ3VyLmNvbS84YU4zMURuLnBuZ1wiXG4gICAgICAgIH19XG4gICAgICAvPlxuXG4gICAgICA8UmVhZGluZ0NvbnRhaW5lcj5cbiAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ3cml0aW5nXCI+XG4gICAgICAgICAgPGgzPldvcmsgaW4gcHJvZ3Jlc3MhPC9oMz5cbiAgICAgICAgICA8cD5cbiAgICAgICAgICAgIFRoaXMgcGFnZSBpcyBzdGlsbCBhIHdvcmsgaW4gcHJvZ3Jlc3MuIFBsZWFzZSBjaGVjayBiYWNrIHRvIHNlZVxuICAgICAgICAgICAgdXBkYXRlcyFcbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8aDM+TnVtYmVyczwvaDM+XG5cbiAgICAgICAgICA8cD5ubyBxdWljayBhbnN3ZXI6IHtudW1iZXJzLm5vUXVpY2tBbnN3ZXJ9PC9wPlxuICAgICAgICAgIDxwPm5vIGZ1bGwgcG9zdDoge251bWJlcnMubm9GdWxsUG9zdH08L3A+XG5cbiAgICAgICAgICA8aDM+SW50cm9kdWN0aW9uPC9oMz5cblxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgT3Bwb25lbnRzIG9mIHRoZSBCaWJsZSBjbGFpbSB0aGF0IGl0IGNvbnRhaW5zIG51bWVyb3VzXG4gICAgICAgICAgICBpcnJlY29uY2lsYWJsZSBjb250cmFkaWN0aW9ucy4gSG93ZXZlciwgbm9uZSBvZiB0aGUgXCJhbGxlZ2VkXCJcbiAgICAgICAgICAgIGNvbnRyYWRpY3Rpb25zIGluIHRoZSBCaWJsZSBhcmUgdHJ1bHkgaXJyZWNvbmNpbGFibGUuXG4gICAgICAgICAgPC9wPlxuXG4gICAgICAgICAgPHA+XG4gICAgICAgICAgICBUaGUgcHVycG9zZSBvZiB0aGlzIHBhZ2UgaXMgdG8gYmUgYSBjb21wcmVoZW5zaXZlIHJlc3BvbnNlIHRvIGV2ZXJ5XG4gICAgICAgICAgICBhbGxlZ2VkIFwiY29udHJhZGljdGlvblwiIGluIHRoZSBCaWJsZS5cbiAgICAgICAgICA8L3A+XG5cbiAgICAgICAgICA8YSBpZD1cInRvcFwiIHN0eWxlPXt7IGNvbG9yOiBcInJnYmEoMCwgMCwgMCwgLjg0KVwiIH19PlxuICAgICAgICAgICAgPGgzPlRhYmxlIG9mIGNvbnRlbnRzPC9oMz5cbiAgICAgICAgICA8L2E+XG5cbiAgICAgICAgICA8aDQ+T2xkIFRlc3RhbWVudDwvaDQ+XG5cbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInRhYmxlLWNvbnRlbnRzLWNvbnRhaW5lclwiPlxuICAgICAgICAgICAge0NPTlRSQURJQ1RJT05TLnNsaWNlKDAsIDM5KS5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1pdGVtXCIga2V5PXtib29rLmJvb2t9PlxuICAgICAgICAgICAgICAgICAgPGEgaHJlZj17YCMke2Jvb2suYm9va31gfSBpZD17YHRvcC0ke2Jvb2suYm9va31gfT5cbiAgICAgICAgICAgICAgICAgICAge2Jvb2suYm9va30gKHtib29rLmFuc3dlcnMubGVuZ3RofSlcbiAgICAgICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPGg0Pk5ldyBUZXN0YW1lbnQ8L2g0PlxuXG4gICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJ0YWJsZS1jb250ZW50cy1jb250YWluZXJcIj5cbiAgICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5zbGljZSgzOSkubWFwKGJvb2sgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwidGFibGUtY29udGVudHMtaXRlbVwiIGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9e2AjJHtib29rLmJvb2t9YH0gaWQ9e2B0b3AtJHtib29rLmJvb2t9YH0+XG4gICAgICAgICAgICAgICAgICAgIHtib29rLmJvb2t9ICh7Ym9vay5hbnN3ZXJzLmxlbmd0aH0pXG4gICAgICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgICAgPC9kaXY+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIHtDT05UUkFESUNUSU9OUy5tYXAoYm9vayA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8ZGl2IGtleT17Ym9vay5ib29rfT5cbiAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgaHJlZj17YCN0b3BgfVxuICAgICAgICAgICAgICAgICAgaWQ9e2Jvb2suYm9va31cbiAgICAgICAgICAgICAgICAgIHN0eWxlPXt7XG4gICAgICAgICAgICAgICAgICAgIGRpc3BsYXk6IFwiZmxleFwiLFxuICAgICAgICAgICAgICAgICAgICBhbGlnbkl0ZW1zOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICBtYXJnaW5Ub3A6IDI4XG4gICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgIDxGYUNoZXZyb25VcCAvPlxuICAgICAgICAgICAgICAgICAgJm5ic3A7VG9wXG4gICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgIDxoM1xuICAgICAgICAgICAgICAgICAga2V5PXtib29rLmJvb2t9XG4gICAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJub21hcmdpblwiXG4gICAgICAgICAgICAgICAgICBzdHlsZT17eyBib3JkZXJCb3R0b206IFwiMXB4IHNvbGlkIHJnYmEoMCwgMCwgMCwgLjU0KVwiIH19XG4gICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAge2Jvb2suYm9va31cbiAgICAgICAgICAgICAgICA8L2gzPlxuXG4gICAgICAgICAgICAgICAge2Jvb2suYW5zd2Vycy5tYXAoKGFuc3dlciwgaW5kZXgpID0+IHtcbiAgICAgICAgICAgICAgICAgIGxpbmtDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyLnNlZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rID0gZmluZChcbiAgICAgICAgICAgICAgICAgICAgICBDT05UUkFESUNUSU9OUyxcbiAgICAgICAgICAgICAgICAgICAgICBib29rID0+IGJvb2suYm9vay50b0xvd2VyQ2FzZSgpID09PSBhbnN3ZXIuc2VlWzBdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRBbnN3ZXIgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2suYW5zd2VycyxcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJEYXRhID0+IGFuc3dlckRhdGEuYm9va1ZlcnNlcyA9PT0gYW5zd2VyLnNlZVsxXVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJMaW5rKHtcbiAgICAgICAgICAgICAgICAgICAgICBpbmRleCxcbiAgICAgICAgICAgICAgICAgICAgICBib29rOiBib29rLmJvb2ssXG4gICAgICAgICAgICAgICAgICAgICAgYm9va1ZlcnNlczogYW5zd2VyLmJvb2tWZXJzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgcXVlc3Rpb246IGZvdW5kQW5zd2VyLnF1ZXN0aW9uLFxuICAgICAgICAgICAgICAgICAgICAgIGNvdW50OiBsaW5rQ291bnRcbiAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJMaW5rKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgLi4uYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogbGlua0NvdW50XG4gICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgIHtib29rLmFuc3dlcnMubWFwKChhbnN3ZXIsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICBhbnN3ZXJDb3VudCsrO1xuXG4gICAgICAgICAgICAgICAgICBpZiAoYW5zd2VyLnNlZSkge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBib29rID0gZmluZChcbiAgICAgICAgICAgICAgICAgICAgICBDT05UUkFESUNUSU9OUyxcbiAgICAgICAgICAgICAgICAgICAgICBib29rID0+IGJvb2suYm9vay50b0xvd2VyQ2FzZSgpID09PSBhbnN3ZXIuc2VlWzBdXG4gICAgICAgICAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgICAgICAgICAgY29uc3QgZm91bmRBbnN3ZXIgPSBmaW5kKFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2suYW5zd2VycyxcbiAgICAgICAgICAgICAgICAgICAgICBhbnN3ZXJEYXRhID0+IGFuc3dlckRhdGEuYm9va1ZlcnNlcyA9PT0gYW5zd2VyLnNlZVsxXVxuICAgICAgICAgICAgICAgICAgICApO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiByZW5kZXJBbnN3ZXIoe1xuICAgICAgICAgICAgICAgICAgICAgIGluZGV4LFxuICAgICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgICAuLi5mb3VuZEFuc3dlcixcbiAgICAgICAgICAgICAgICAgICAgICBmb3VuZEJvb2tWZXJzZXM6IGZvdW5kQW5zd2VyLmJvb2tWZXJzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgYm9va1ZlcnNlczogYW5zd2VyLmJvb2tWZXJzZXMsXG4gICAgICAgICAgICAgICAgICAgICAgY291bnQ6IGFuc3dlckNvdW50LFxuICAgICAgICAgICAgICAgICAgICAgIGlzRHVwbGljYXRlOiB0cnVlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICByZXR1cm4gcmVuZGVyQW5zd2VyKHtcbiAgICAgICAgICAgICAgICAgICAgaW5kZXgsXG4gICAgICAgICAgICAgICAgICAgIGJvb2s6IGJvb2suYm9vayxcbiAgICAgICAgICAgICAgICAgICAgLi4uYW5zd2VyLFxuICAgICAgICAgICAgICAgICAgICBjb3VudDogYW5zd2VyQ291bnRcbiAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgIDwvZGl2PlxuICAgICAgPC9SZWFkaW5nQ29udGFpbmVyPlxuXG4gICAgICA8c3R5bGUganN4IGdsb2JhbD57YFxuICAgICAgICAud3JpdGluZyBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yMjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGgzICsgcCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBvbCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyB1bCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBibG9ja3F1b3RlLFxuICAgICAgICAud3JpdGluZyBoNCArIHAsXG4gICAgICAgIC53cml0aW5nIGg0ICsgb2wsXG4gICAgICAgIC53cml0aW5nIGg0ICsgdWwsXG4gICAgICAgIC53cml0aW5nIGg0ICsgYmxvY2txdW90ZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAgIC53cml0aW5nIHVsLFxuICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBvbCxcbiAgICAgICAgLndyaXRpbmcgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGxpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5maXJzdCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLm5vbWFyZ2luIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmluZGVudCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2UtbGVmdCB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlLXJpZ2h0IHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBhIHtcbiAgICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAucmVmZXJlbmNlIHtcbiAgICAgICAgICBmb250LXNpemU6IDE0cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmRpdmlkZXIge1xuICAgICAgICAgIGRpc3BsYXk6IGJsb2NrO1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzVweDtcbiAgICAgICAgICBsZXR0ZXItc3BhY2luZzogMC42ZW07XG4gICAgICAgICAgdGV4dC1hbGlnbjogY2VudGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAud3JpdGluZyBoMyB7XG4gICAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgICAud3JpdGluZyBvbCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAudGFibGUtY29udGVudHMtY29udGFpbmVyIHtcbiAgICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC50YWJsZS1jb250ZW50cy1pdGVtIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgICB3aWR0aDogMTUwcHg7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEJpYmxlQ29udHJhZGljdGlvbnM7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/contradictions.js */"
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
//# sourceMappingURL=contradictions.js.204f432585653de7e66a.hot-update.js.map