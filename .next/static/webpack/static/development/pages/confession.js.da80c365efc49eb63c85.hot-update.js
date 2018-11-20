webpackHotUpdate("static/development/pages/confession.js",{

/***/ "./components/ConfessionParagraph.js":
/*!*******************************************!*\
  !*** ./components/ConfessionParagraph.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var ConfessionParagraph = function ConfessionParagraph(_ref) {
  var section = _ref.section,
      index = _ref.index;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Chapter ", index + 1), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      key: section.superscript
    }, section.text, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#ref-".concat(index, "-").concat(section.superscript),
      id: "".concat(index, "-").concat(section.superscript),
      className: "superscript"
    }, "".concat(section.superscript, " ")));
  })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "scripture-section"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "nomargin"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "References (click to view)")), paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
      key: section.superscript,
      className: "nomargin"
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
      href: "#".concat(index, "-").concat(section.superscript),
      id: "ref-".concat(index, "-").concat(section.superscript)
    }, "^ "), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, section.superscript, "."), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
      className: "scripture"
    }, section.scriptures));
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "first"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("em", null, "Click on a Scripture above to view passage"))));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfessionParagraph);

/***/ }),

/***/ "./pages/confession.js":
/*!*****************************!*\
  !*** ./pages/confession.js ***!
  \*****************************/
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
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _constants_confessions_london_baptist__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../constants/confessions/london-baptist */ "./constants/confessions/london-baptist.js");
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");
/* harmony import */ var _components_ConfessionNav__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/ConfessionNav */ "./components/ConfessionNav.js");
/* harmony import */ var _components_ConfessionParagraph__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/ConfessionParagraph */ "./components/ConfessionParagraph.js");


function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Confession = function Confession(_ref) {
  var chapterList = _ref.chapterList,
      name = _ref.name,
      image_url = _ref.image_url,
      chapter = _ref.chapter,
      chapters = _ref.chapters,
      title = _ref.title,
      content = _ref.content,
      previous = _ref.previous,
      next = _ref.next;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_5__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-490352305"
  }, chapterList ? "Chapter list for the ".concat(name) : "".concat(chapter, ". ").concat(title), " ", "- $", name, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "This is \"".concat(chapter, ". ").concat(title, "\" of the ").concat(name, ". Read the ").concat(name, " while easily viewing Scripture references."),
    className: "jsx-490352305"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_6__["TitleSection"], {
    title: chapterList ? "Chapter list for the ".concat(name) : "".concat(chapter, ". ").concat(title),
    subtitle: "Read and explore the ".concat(name),
    image_url: image_url
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-490352305" + " " + "writing"
  }, chapterList ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ConfessionNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    previous: previous ? {
      href: "/confessions/".concat(previous.slug),
      label: "".concat(previous.chapter === "Preface" ? "" : "Chapter", " ").concat(previous.chapter, ". ").concat(previous.title)
    } : null,
    next: next ? {
      href: "/confessions/".concat(next.slug),
      label: "".concat(next.chapter === "Preface" ? "" : "Chapter", " ").concat(next.chapter, ". ").concat(next.title)
    } : null
  }), chapterList ? chapters.map(function (chapter) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      key: chapter.chapter,
      href: "/confessions/".concat(chapter.slug),
      className: "jsx-490352305"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-490352305" + " " + "first"
    }, chapter.chapter, ". ", chapter.title));
  }) : null, content ? content.map(function (paragraph, index) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isString"])(paragraph)) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-490352305"
      }, paragraph);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: index,
      className: "jsx-490352305"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
      className: "jsx-490352305"
    }, "Chapter ", index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-490352305"
    }, paragraph.map(function (section) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        key: section.superscript,
        className: "jsx-490352305"
      }, section.text, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#ref-".concat(index, "-").concat(section.superscript),
        id: "".concat(index, "-").concat(section.superscript),
        className: "jsx-490352305" + " " + "superscript"
      }, "".concat(section.superscript, " ")));
    })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-490352305" + " " + "scripture-section"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-490352305" + " " + "nomargin"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-490352305"
    }, "References (click to view)")), paragraph.map(function (section) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: section.superscript,
        className: "jsx-490352305" + " " + "nomargin"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
        href: "#".concat(index, "-").concat(section.superscript),
        id: "ref-".concat(index, "-").concat(section.superscript),
        className: "jsx-490352305"
      }, "^ "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
        className: "jsx-490352305"
      }, section.superscript, "."), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        className: "jsx-490352305" + " " + "scripture"
      }, section.scriptures));
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-490352305" + " " + "first"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
      className: "jsx-490352305"
    }, "Click on a Scripture above to view passage"))));
  }) : null, chapterList ? null : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ConfessionNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    previous: previous ? {
      href: "/confessions/".concat(previous.slug),
      label: "".concat(previous.chapter === "Preface" ? "" : "Chapter", " ").concat(previous.chapter, ". ").concat(previous.title)
    } : null,
    next: next ? {
      href: "/confessions/".concat(next.slug),
      label: "".concat(next.chapter === "Preface" ? "" : "Chapter", " ").concat(next.chapter, ". ").concat(next.title)
    } : null
  }))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "490352305",
    css: ".writing.jsx-490352305 h3.jsx-490352305{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing.jsx-490352305 h4.jsx-490352305{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing.jsx-490352305 h3.jsx-490352305+p.jsx-490352305,.writing.jsx-490352305 h3.jsx-490352305+ol.jsx-490352305,.writing.jsx-490352305 h3.jsx-490352305+ul.jsx-490352305,.writing.jsx-490352305 h3.jsx-490352305+blockquote.jsx-490352305,.writing.jsx-490352305 h4.jsx-490352305+p.jsx-490352305,.writing.jsx-490352305 h4.jsx-490352305+ol.jsx-490352305,.writing.jsx-490352305 h4.jsx-490352305+ul.jsx-490352305,.writing.jsx-490352305 h4.jsx-490352305+blockquote.jsx-490352305{margin-top:8px;}.writing.jsx-490352305 p.jsx-490352305,.writing.jsx-490352305 ol.jsx-490352305,.writing.jsx-490352305 ul.jsx-490352305,.writing.jsx-490352305 blockquote.jsx-490352305{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.writing.jsx-490352305 ol.jsx-490352305,.writing.jsx-490352305 ul.jsx-490352305{padding:0 40px;}.writing.jsx-490352305 li.jsx-490352305{margin-bottom:10px;}.writing.jsx-490352305 li.jsx-490352305:last-child{margin-bottom:0;}.writing.jsx-490352305 blockquote.jsx-490352305{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing.jsx-490352305 .first.jsx-490352305{margin-top:8px;}.writing.jsx-490352305 .nomargin.jsx-490352305{margin-top:0;}.writing.jsx-490352305 .indent.jsx-490352305{margin-left:20px;}.writing.jsx-490352305 .image.jsx-490352305{margin-top:29px;}.writing.jsx-490352305 .image-left.jsx-490352305{float:left;margin-right:20px;}.writing.jsx-490352305 .image-right.jsx-490352305{float:right;margin-left:20px;}.writing.jsx-490352305 a.jsx-490352305{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing.jsx-490352305 .reference.jsx-490352305{font-size:14px;margin-left:2px;position:relative;top:-5px;}@media screen and (max-width:768px){.writing.jsx-490352305 h3.jsx-490352305{font-size:30px;margin-top:28px;}.writing.jsx-490352305 h4.jsx-490352305{font-size:24px;margin-top:22px;}.writing.jsx-490352305 p.jsx-490352305,.writing.jsx-490352305 ol.jsx-490352305{font-size:18px;margin-top:21px;}.writing.jsx-490352305 blockquote.jsx-490352305{font-size:18px;margin-top:21px;}.writing.jsx-490352305 .image.jsx-490352305{margin-top:21px;}}.superscript.jsx-490352305{color:#689f38;font-size:15px;margin-left:1px;position:relative;top:-6px;}.scripture-section.jsx-490352305{border:1px solid #bdbdbd;margin-top:20px;padding:5px 10px;}.scripture.jsx-490352305{color:#bdbdbd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29uZmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFnS2dCLEFBR3dCLEFBT0EsQUFjQSxBQU9BLEFBUUEsQUFJSSxBQUlILEFBSTBCLEFBUTNCLEFBSUYsQUFJSSxBQUlELEFBSUwsQUFLQyxBQUtFLEFBS0MsQUFRRSxBQUtBLEFBTUEsQUFLQSxBQUtDLEFBS0osQUFRVyxBQU1YLFdBOURJLENBS0QsQ0FqQm5CLENBc0J1QixBQXVDTixBQWNqQixDQXZJbUIsQUFPQSxBQWNuQixBQU9tQixBQVFuQixBQW9CQSxBQStCa0IsQUFRRSxBQUtBLEFBTUEsQUFLQSxDQW5FcEIsQUF3QkEsQUFnREUsQ0FwREYsRUF4QkEsTUF5RmtCLElBeERsQixBQUtBLEFBNENrQixFQWxDRSxBQVFsQixBQUtBLEFBTUEsQUFLQSxDQS9HUyxBQU9BLEFBcUJBLE9BbUJTLEVBOUNGLEFBT0EsQUFxQkEsQUFvR0MsSUFQQyxJQWxDVCxRQXRGWCxBQU9BLEFBcUJBLEFBa0JhLENBeUNiLEFBeUNBLEtBUFcsQ0F6Q1gsSUFqQ29CLElBMkVwQixjQTFFb0Isa0JBQ3BCIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29uZmVzc2lvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBIZWFkIGZyb20gXCJuZXh0L2hlYWRcIjtcbmltcG9ydCB7IGZpbmRJbmRleCwgaXNTdHJpbmcgfSBmcm9tIFwibG9kYXNoXCI7XG5cbmltcG9ydCBMT05ET05fQkFQVElTVCBmcm9tIFwiLi4vY29uc3RhbnRzL2NvbmZlc3Npb25zL2xvbmRvbi1iYXB0aXN0XCI7XG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCB7IFRpdGxlU2VjdGlvbiB9IGZyb20gXCIuLi9jb21wb25lbnRzL1RpdGxlU2VjdGlvblwiO1xuaW1wb3J0IFJlYWRpbmdDb250YWluZXIgZnJvbSBcIi4uL2NvbXBvbmVudHMvUmVhZGluZ0NvbnRhaW5lclwiO1xuaW1wb3J0IENvbmZlc3Npb25OYXYgZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29uZmVzc2lvbk5hdlwiO1xuaW1wb3J0IENvbmZlc3Npb25QYXJhZ3JhcGggZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29uZmVzc2lvblBhcmFncmFwaFwiO1xuXG5jb25zdCBDb25mZXNzaW9uID0gKHtcbiAgY2hhcHRlckxpc3QsXG4gIG5hbWUsXG4gIGltYWdlX3VybCxcbiAgY2hhcHRlcixcbiAgY2hhcHRlcnMsXG4gIHRpdGxlLFxuICBjb250ZW50LFxuICBwcmV2aW91cyxcbiAgbmV4dFxufSkgPT4gKFxuICA8Q29udGFpbmVyPlxuICAgIDxIZWFkPlxuICAgICAgPHRpdGxlPlxuICAgICAgICB7Y2hhcHRlckxpc3QgPyBgQ2hhcHRlciBsaXN0IGZvciB0aGUgJHtuYW1lfWAgOiBgJHtjaGFwdGVyfS4gJHt0aXRsZX1gfXtcIiBcIn1cbiAgICAgICAgLSAke25hbWV9IHwgQmlibGUgQW5zd2Vyc1xuICAgICAgPC90aXRsZT5cblxuICAgICAgPG1ldGFcbiAgICAgICAgbmFtZT1cImRlc2NyaXB0aW9uXCJcbiAgICAgICAgY29udGVudD17YFRoaXMgaXMgXCIke2NoYXB0ZXJ9LiAke3RpdGxlfVwiIG9mIHRoZSAke25hbWV9LiBSZWFkIHRoZSAke25hbWV9IHdoaWxlIGVhc2lseSB2aWV3aW5nIFNjcmlwdHVyZSByZWZlcmVuY2VzLmB9XG4gICAgICAvPlxuICAgIDwvSGVhZD5cblxuICAgIDxUaXRsZVNlY3Rpb25cbiAgICAgIHRpdGxlPXtcbiAgICAgICAgY2hhcHRlckxpc3QgPyBgQ2hhcHRlciBsaXN0IGZvciB0aGUgJHtuYW1lfWAgOiBgJHtjaGFwdGVyfS4gJHt0aXRsZX1gXG4gICAgICB9XG4gICAgICBzdWJ0aXRsZT17YFJlYWQgYW5kIGV4cGxvcmUgdGhlICR7bmFtZX1gfVxuICAgICAgaW1hZ2VfdXJsPXtpbWFnZV91cmx9XG4gICAgLz5cbiAgICA8UmVhZGluZ0NvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZ1wiPlxuICAgICAgICB7Y2hhcHRlckxpc3QgPyBudWxsIDogKFxuICAgICAgICAgIDxDb25mZXNzaW9uTmF2XG4gICAgICAgICAgICBwcmV2aW91cz17XG4gICAgICAgICAgICAgIHByZXZpb3VzXG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGAvY29uZmVzc2lvbnMvJHtwcmV2aW91cy5zbHVnfWAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBgJHtcbiAgICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5jaGFwdGVyID09PSBcIlByZWZhY2VcIiA/IFwiXCIgOiBcIkNoYXB0ZXJcIlxuICAgICAgICAgICAgICAgICAgICB9ICR7cHJldmlvdXMuY2hhcHRlcn0uICR7cHJldmlvdXMudGl0bGV9YFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgbmV4dD17XG4gICAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYC9jb25mZXNzaW9ucy8ke25leHQuc2x1Z31gLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYCR7bmV4dC5jaGFwdGVyID09PSBcIlByZWZhY2VcIiA/IFwiXCIgOiBcIkNoYXB0ZXJcIn0gJHtcbiAgICAgICAgICAgICAgICAgICAgICBuZXh0LmNoYXB0ZXJcbiAgICAgICAgICAgICAgICAgICAgfS4gJHtuZXh0LnRpdGxlfWBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAvPlxuICAgICAgICApfVxuXG4gICAgICAgIHtjaGFwdGVyTGlzdFxuICAgICAgICAgID8gY2hhcHRlcnMubWFwKGNoYXB0ZXIgPT4gKFxuICAgICAgICAgICAgICA8YSBrZXk9e2NoYXB0ZXIuY2hhcHRlcn0gaHJlZj17YC9jb25mZXNzaW9ucy8ke2NoYXB0ZXIuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgICAgICAgICAge2NoYXB0ZXIuY2hhcHRlcn0uIHtjaGFwdGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAge2NvbnRlbnRcbiAgICAgICAgICA/IGNvbnRlbnQubWFwKChwYXJhZ3JhcGgsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc1N0cmluZyhwYXJhZ3JhcGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxwPntwYXJhZ3JhcGh9PC9wPjtcbiAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPGRpdiBrZXk9e2luZGV4fT5cbiAgICAgICAgICAgICAgICAgIDxoND5DaGFwdGVyIHtpbmRleCArIDF9PC9oND5cbiAgICAgICAgICAgICAgICAgIDxwPlxuICAgICAgICAgICAgICAgICAgICB7cGFyYWdyYXBoLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtzZWN0aW9uLnN1cGVyc2NyaXB0fT5cbiAgICAgICAgICAgICAgICAgICAgICAgICAge3NlY3Rpb24udGV4dH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBocmVmPXtgI3JlZi0ke2luZGV4fS0ke3NlY3Rpb24uc3VwZXJzY3JpcHR9YH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBpZD17YCR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1cGVyc2NyaXB0XCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgPntgJHtzZWN0aW9uLnN1cGVyc2NyaXB0fSBgfTwvYT5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgICAgICAgIDwvcD5cblxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JpcHR1cmUtc2VjdGlvblwiPlxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJub21hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxzdHJvbmc+UmVmZXJlbmNlcyAoY2xpY2sgdG8gdmlldyk8L3N0cm9uZz5cbiAgICAgICAgICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICAgICAgICAgICB7cGFyYWdyYXBoLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgICAgICAgPHAga2V5PXtzZWN0aW9uLnN1cGVyc2NyaXB0fSBjbGFzc05hbWU9XCJub21hcmdpblwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtpbmRleH0tJHtzZWN0aW9uLnN1cGVyc2NyaXB0fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgaWQ9e2ByZWYtJHtpbmRleH0tJHtzZWN0aW9uLnN1cGVyc2NyaXB0fWB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7YF4gYH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICAgICAgICAgICAgICA8c3Ryb25nPntzZWN0aW9uLnN1cGVyc2NyaXB0fS48L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzTmFtZT1cInNjcmlwdHVyZVwiPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzZWN0aW9uLnNjcmlwdHVyZXN9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICAgICAgICB9KX1cblxuICAgICAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgICAgICAgICAgICAgIDxlbT5DbGljayBvbiBhIFNjcmlwdHVyZSBhYm92ZSB0byB2aWV3IHBhc3NhZ2U8L2VtPlxuICAgICAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBudWxsfVxuXG4gICAgICAgIHtjaGFwdGVyTGlzdCA/IG51bGwgOiAoXG4gICAgICAgICAgPENvbmZlc3Npb25OYXZcbiAgICAgICAgICAgIHByZXZpb3VzPXtcbiAgICAgICAgICAgICAgcHJldmlvdXNcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYC9jb25mZXNzaW9ucy8ke3ByZXZpb3VzLnNsdWd9YCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGAke1xuICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzLmNoYXB0ZXIgPT09IFwiUHJlZmFjZVwiID8gXCJcIiA6IFwiQ2hhcHRlclwiXG4gICAgICAgICAgICAgICAgICAgIH0gJHtwcmV2aW91cy5jaGFwdGVyfS4gJHtwcmV2aW91cy50aXRsZX1gXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXh0PXtcbiAgICAgICAgICAgICAgbmV4dFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBgL2NvbmZlc3Npb25zLyR7bmV4dC5zbHVnfWAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBgJHtuZXh0LmNoYXB0ZXIgPT09IFwiUHJlZmFjZVwiID8gXCJcIiA6IFwiQ2hhcHRlclwifSAke1xuICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2hhcHRlclxuICAgICAgICAgICAgICAgICAgICB9LiAke25leHQudGl0bGV9YFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAud3JpdGluZyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIGgzICsgcCxcbiAgICAgIC53cml0aW5nIGgzICsgb2wsXG4gICAgICAud3JpdGluZyBoMyArIHVsLFxuICAgICAgLndyaXRpbmcgaDMgKyBibG9ja3F1b3RlLFxuICAgICAgLndyaXRpbmcgaDQgKyBwLFxuICAgICAgLndyaXRpbmcgaDQgKyBvbCxcbiAgICAgIC53cml0aW5nIGg0ICsgdWwsXG4gICAgICAud3JpdGluZyBoNCArIGJsb2NrcXVvdGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIHAsXG4gICAgICAud3JpdGluZyBvbCxcbiAgICAgIC53cml0aW5nIHVsLFxuICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAud3JpdGluZyB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIC5maXJzdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgLm5vbWFyZ2luIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgLmluZGVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAuaW1hZ2UtbGVmdCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIC5pbWFnZS1yaWdodCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIGEge1xuICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAucmVmZXJlbmNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLndyaXRpbmcgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgLndyaXRpbmcgb2wge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgIH1cbiAgICAgIH1cblxuICAgICAgLnN1cGVyc2NyaXB0IHtcbiAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC02cHg7XG4gICAgICB9XG5cbiAgICAgIC5zY3JpcHR1cmUtc2VjdGlvbiB7XG4gICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgfVxuXG4gICAgICAuc2NyaXB0dXJlIHtcbiAgICAgICAgY29sb3I6ICNiZGJkYmQ7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbkNvbmZlc3Npb24uZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGltYWdlX3VybCwgY2hhcHRlcnMgfSA9IExPTkRPTl9CQVBUSVNUO1xuXG4gIGlmIChxdWVyeS5zbHVnLmluZGV4T2YoXCJjaGFwdGVyLWxpc3RcIikgIT09IC0xKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXB0ZXJMaXN0OiB0cnVlLFxuICAgICAgbmFtZSxcbiAgICAgIGltYWdlX3VybCxcbiAgICAgIGNoYXB0ZXJzXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGNoYXB0ZXJJbmRleCA9IGZpbmRJbmRleChcbiAgICBjaGFwdGVycyxcbiAgICBjaGFwdGVyID0+IGNoYXB0ZXIuc2x1ZyA9PT0gcXVlcnkuc2x1Z1xuICApO1xuXG4gIGNvbnN0IGNoYXB0ZXIgPVxuICAgIGNoYXB0ZXJJbmRleCB8fCBjaGFwdGVySW5kZXggPT09IDAgPyBjaGFwdGVyc1tjaGFwdGVySW5kZXhdIDoge307XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGltYWdlX3VybDogaW1hZ2VfdXJsLFxuICAgIC4uLmNoYXB0ZXIsXG4gICAgcHJldmlvdXM6IGNoYXB0ZXJzW2NoYXB0ZXJJbmRleCAtIDFdLFxuICAgIG5leHQ6IGNoYXB0ZXJzW2NoYXB0ZXJJbmRleCArIDFdXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25mZXNzaW9uO1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/confession.js */"
  }));
};

Confession.getInitialProps = function (_ref2) {
  var query = _ref2.query;
  var name = _constants_confessions_london_baptist__WEBPACK_IMPORTED_MODULE_4__["default"].name,
      image_url = _constants_confessions_london_baptist__WEBPACK_IMPORTED_MODULE_4__["default"].image_url,
      chapters = _constants_confessions_london_baptist__WEBPACK_IMPORTED_MODULE_4__["default"].chapters;

  if (query.slug.indexOf("chapter-list") !== -1) {
    return {
      chapterList: true,
      name: name,
      image_url: image_url,
      chapters: chapters
    };
  }

  var chapterIndex = Object(lodash__WEBPACK_IMPORTED_MODULE_3__["findIndex"])(chapters, function (chapter) {
    return chapter.slug === query.slug;
  });
  var chapter = chapterIndex || chapterIndex === 0 ? chapters[chapterIndex] : {};
  return _objectSpread({
    name: name,
    image_url: image_url
  }, chapter, {
    previous: chapters[chapterIndex - 1],
    next: chapters[chapterIndex + 1]
  });
};

/* harmony default export */ __webpack_exports__["default"] = (Confession);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/confession")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=confession.js.da80c365efc49eb63c85.hot-update.js.map