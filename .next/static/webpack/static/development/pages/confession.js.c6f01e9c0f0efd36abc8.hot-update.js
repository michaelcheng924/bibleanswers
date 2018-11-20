webpackHotUpdate("static/development/pages/confession.js",{

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
    className: "jsx-894054309"
  }, chapterList ? "Chapter list for the ".concat(name) : "".concat(chapter, ". ").concat(title), " ", "- $", name, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "This is \"".concat(chapter, ". ").concat(title, "\" of the ").concat(name, ". Read the ").concat(name, " while easily viewing Scripture references."),
    className: "jsx-894054309"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_6__["TitleSection"], {
    title: chapterList ? "Chapter list for the ".concat(name) : "".concat(chapter, ". ").concat(title),
    subtitle: "Read and explore the ".concat(name),
    image_url: image_url
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-894054309" + " " + "writing"
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
      className: "jsx-894054309"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-894054309" + " " + "first"
    }, chapter.chapter, ". ", chapter.title));
  }) : null, content ? content.map(function (paragraph, index) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isString"])(paragraph)) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        key: index,
        className: "jsx-894054309"
      }, paragraph);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ConfessionParagraph__WEBPACK_IMPORTED_MODULE_9__["default"], {
      key: index,
      paragraph: paragraph,
      index: index
    });
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
    styleId: "894054309",
    css: ".writing.jsx-894054309 h3.jsx-894054309{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing.jsx-894054309 h4.jsx-894054309{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing.jsx-894054309 h3.jsx-894054309+p.jsx-894054309,.writing.jsx-894054309 h3.jsx-894054309+ol.jsx-894054309,.writing.jsx-894054309 h3.jsx-894054309+ul.jsx-894054309,.writing.jsx-894054309 h3.jsx-894054309+blockquote.jsx-894054309,.writing.jsx-894054309 h4.jsx-894054309+p.jsx-894054309,.writing.jsx-894054309 h4.jsx-894054309+ol.jsx-894054309,.writing.jsx-894054309 h4.jsx-894054309+ul.jsx-894054309,.writing.jsx-894054309 h4.jsx-894054309+blockquote.jsx-894054309{margin-top:8px;}.writing.jsx-894054309 p.jsx-894054309,.writing.jsx-894054309 ol.jsx-894054309,.writing.jsx-894054309 ul.jsx-894054309,.writing.jsx-894054309 blockquote.jsx-894054309{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.writing.jsx-894054309 ol.jsx-894054309,.writing.jsx-894054309 ul.jsx-894054309{padding:0 40px;}.writing.jsx-894054309 li.jsx-894054309{margin-bottom:10px;}.writing.jsx-894054309 li.jsx-894054309:last-child{margin-bottom:0;}.writing.jsx-894054309 blockquote.jsx-894054309{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing.jsx-894054309 .first.jsx-894054309{margin-top:8px;}.writing.jsx-894054309 .nomargin.jsx-894054309{margin-top:0;}.writing.jsx-894054309 .indent.jsx-894054309{margin-left:20px;}.writing.jsx-894054309 .image.jsx-894054309{margin-top:29px;}.writing.jsx-894054309 .image-left.jsx-894054309{float:left;margin-right:20px;}.writing.jsx-894054309 .image-right.jsx-894054309{float:right;margin-left:20px;}.writing.jsx-894054309 a.jsx-894054309{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing.jsx-894054309 .reference.jsx-894054309{font-size:14px;margin-left:2px;position:relative;top:-5px;}@media screen and (max-width:768px){.writing.jsx-894054309 h3.jsx-894054309{font-size:30px;margin-top:28px;}.writing.jsx-894054309 h4.jsx-894054309{font-size:24px;margin-top:22px;}.writing.jsx-894054309 p.jsx-894054309,.writing.jsx-894054309 ol.jsx-894054309{font-size:18px;margin-top:21px;}.writing.jsx-894054309 blockquote.jsx-894054309{font-size:18px;margin-top:21px;}.writing.jsx-894054309 .image.jsx-894054309{margin-top:21px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29uZmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwSGdCLEFBR3dCLEFBT0EsQUFjQSxBQU9BLEFBUUEsQUFJSSxBQUlILEFBSTBCLEFBUTNCLEFBSUYsQUFJSSxBQUlELEFBSUwsQUFLQyxBQUtFLEFBS0MsQUFRRSxBQUtBLEFBTUEsQUFLQSxBQUtDLFdBM0NBLENBS0QsQ0FqQm5CLENBc0J1QixDQWxGSixBQU9BLEFBY25CLEFBT21CLEFBUW5CLEFBb0JBLEFBK0JrQixBQVFFLEFBS0EsQUFNQSxBQUtBLENBbkVwQixBQXdCQSxBQWdERSxDQXBERixFQXhCQSxVQWlDQSxBQUtBLEVBVW9CLEFBUWxCLEFBS0EsQUFNQSxBQUtBLENBL0dTLEFBT0EsQUFxQkEsT0FtQlMsRUE5Q0YsQUFPQSxBQXFCQSxRQTJEUCxRQXRGWCxBQU9BLEFBcUJBLEFBa0JhLENBeUNiLE1BUEEsSUFqQ29CLGtCQUNBLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbmZlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBmaW5kSW5kZXgsIGlzU3RyaW5nIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgTE9ORE9OX0JBUFRJU1QgZnJvbSBcIi4uL2NvbnN0YW50cy9jb25mZXNzaW9ucy9sb25kb24tYmFwdGlzdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBUaXRsZVNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZVNlY3Rpb25cIjtcbmltcG9ydCBSZWFkaW5nQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1JlYWRpbmdDb250YWluZXJcIjtcbmltcG9ydCBDb25mZXNzaW9uTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbmZlc3Npb25OYXZcIjtcbmltcG9ydCBDb25mZXNzaW9uUGFyYWdyYXBoIGZyb20gXCIuLi9jb21wb25lbnRzL0NvbmZlc3Npb25QYXJhZ3JhcGhcIjtcblxuY29uc3QgQ29uZmVzc2lvbiA9ICh7XG4gIGNoYXB0ZXJMaXN0LFxuICBuYW1lLFxuICBpbWFnZV91cmwsXG4gIGNoYXB0ZXIsXG4gIGNoYXB0ZXJzLFxuICB0aXRsZSxcbiAgY29udGVudCxcbiAgcHJldmlvdXMsXG4gIG5leHRcbn0pID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5cbiAgICAgICAge2NoYXB0ZXJMaXN0ID8gYENoYXB0ZXIgbGlzdCBmb3IgdGhlICR7bmFtZX1gIDogYCR7Y2hhcHRlcn0uICR7dGl0bGV9YH17XCIgXCJ9XG4gICAgICAgIC0gJHtuYW1lfSB8IEJpYmxlIEFuc3dlcnNcbiAgICAgIDwvdGl0bGU+XG5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIGNvbnRlbnQ9e2BUaGlzIGlzIFwiJHtjaGFwdGVyfS4gJHt0aXRsZX1cIiBvZiB0aGUgJHtuYW1lfS4gUmVhZCB0aGUgJHtuYW1lfSB3aGlsZSBlYXNpbHkgdmlld2luZyBTY3JpcHR1cmUgcmVmZXJlbmNlcy5gfVxuICAgICAgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8VGl0bGVTZWN0aW9uXG4gICAgICB0aXRsZT17XG4gICAgICAgIGNoYXB0ZXJMaXN0ID8gYENoYXB0ZXIgbGlzdCBmb3IgdGhlICR7bmFtZX1gIDogYCR7Y2hhcHRlcn0uICR7dGl0bGV9YFxuICAgICAgfVxuICAgICAgc3VidGl0bGU9e2BSZWFkIGFuZCBleHBsb3JlIHRoZSAke25hbWV9YH1cbiAgICAgIGltYWdlX3VybD17aW1hZ2VfdXJsfVxuICAgIC8+XG4gICAgPFJlYWRpbmdDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyaXRpbmdcIj5cbiAgICAgICAge2NoYXB0ZXJMaXN0ID8gbnVsbCA6IChcbiAgICAgICAgICA8Q29uZmVzc2lvbk5hdlxuICAgICAgICAgICAgcHJldmlvdXM9e1xuICAgICAgICAgICAgICBwcmV2aW91c1xuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBgL2NvbmZlc3Npb25zLyR7cHJldmlvdXMuc2x1Z31gLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMuY2hhcHRlciA9PT0gXCJQcmVmYWNlXCIgPyBcIlwiIDogXCJDaGFwdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSAke3ByZXZpb3VzLmNoYXB0ZXJ9LiAke3ByZXZpb3VzLnRpdGxlfWBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHQ9e1xuICAgICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGAvY29uZmVzc2lvbnMvJHtuZXh0LnNsdWd9YCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGAke25leHQuY2hhcHRlciA9PT0gXCJQcmVmYWNlXCIgPyBcIlwiIDogXCJDaGFwdGVyXCJ9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgbmV4dC5jaGFwdGVyXG4gICAgICAgICAgICAgICAgICAgIH0uICR7bmV4dC50aXRsZX1gXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7Y2hhcHRlckxpc3RcbiAgICAgICAgICA/IGNoYXB0ZXJzLm1hcChjaGFwdGVyID0+IChcbiAgICAgICAgICAgICAgPGEga2V5PXtjaGFwdGVyLmNoYXB0ZXJ9IGhyZWY9e2AvY29uZmVzc2lvbnMvJHtjaGFwdGVyLnNsdWd9YH0+XG4gICAgICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgICAgICAgIHtjaGFwdGVyLmNoYXB0ZXJ9LiB7Y2hhcHRlci50aXRsZX1cbiAgICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICkpXG4gICAgICAgICAgOiBudWxsfVxuXG4gICAgICAgIHtjb250ZW50XG4gICAgICAgICAgPyBjb250ZW50Lm1hcCgocGFyYWdyYXBoLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICBpZiAoaXNTdHJpbmcocGFyYWdyYXBoKSkge1xuICAgICAgICAgICAgICAgIHJldHVybiA8cCBrZXk9e2luZGV4fT57cGFyYWdyYXBofTwvcD47XG4gICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxDb25mZXNzaW9uUGFyYWdyYXBoXG4gICAgICAgICAgICAgICAgICBrZXk9e2luZGV4fVxuICAgICAgICAgICAgICAgICAgcGFyYWdyYXBoPXtwYXJhZ3JhcGh9XG4gICAgICAgICAgICAgICAgICBpbmRleD17aW5kZXh9XG4gICAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pXG4gICAgICAgICAgOiBudWxsfVxuXG4gICAgICAgIHtjaGFwdGVyTGlzdCA/IG51bGwgOiAoXG4gICAgICAgICAgPENvbmZlc3Npb25OYXZcbiAgICAgICAgICAgIHByZXZpb3VzPXtcbiAgICAgICAgICAgICAgcHJldmlvdXNcbiAgICAgICAgICAgICAgICA/IHtcbiAgICAgICAgICAgICAgICAgICAgaHJlZjogYC9jb25mZXNzaW9ucy8ke3ByZXZpb3VzLnNsdWd9YCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGAke1xuICAgICAgICAgICAgICAgICAgICAgIHByZXZpb3VzLmNoYXB0ZXIgPT09IFwiUHJlZmFjZVwiID8gXCJcIiA6IFwiQ2hhcHRlclwiXG4gICAgICAgICAgICAgICAgICAgIH0gJHtwcmV2aW91cy5jaGFwdGVyfS4gJHtwcmV2aW91cy50aXRsZX1gXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBuZXh0PXtcbiAgICAgICAgICAgICAgbmV4dFxuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBgL2NvbmZlc3Npb25zLyR7bmV4dC5zbHVnfWAsXG4gICAgICAgICAgICAgICAgICAgIGxhYmVsOiBgJHtuZXh0LmNoYXB0ZXIgPT09IFwiUHJlZmFjZVwiID8gXCJcIiA6IFwiQ2hhcHRlclwifSAke1xuICAgICAgICAgICAgICAgICAgICAgIG5leHQuY2hhcHRlclxuICAgICAgICAgICAgICAgICAgICB9LiAke25leHQudGl0bGV9YFxuICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgICAgfVxuICAgICAgICAgIC8+XG4gICAgICAgICl9XG4gICAgICA8L2Rpdj5cbiAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAud3JpdGluZyBoMyB7XG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMTU7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIGgzICsgcCxcbiAgICAgIC53cml0aW5nIGgzICsgb2wsXG4gICAgICAud3JpdGluZyBoMyArIHVsLFxuICAgICAgLndyaXRpbmcgaDMgKyBibG9ja3F1b3RlLFxuICAgICAgLndyaXRpbmcgaDQgKyBwLFxuICAgICAgLndyaXRpbmcgaDQgKyBvbCxcbiAgICAgIC53cml0aW5nIGg0ICsgdWwsXG4gICAgICAud3JpdGluZyBoNCArIGJsb2NrcXVvdGUge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIHAsXG4gICAgICAud3JpdGluZyBvbCxcbiAgICAgIC53cml0aW5nIHVsLFxuICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAud3JpdGluZyB1bCB7XG4gICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgbGkge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyBsaTpsYXN0LWNoaWxkIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBsZWZ0OiAtMjBweDtcbiAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIC5maXJzdCB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgLm5vbWFyZ2luIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgLmluZGVudCB7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAuaW1hZ2UtbGVmdCB7XG4gICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICBtYXJnaW4tcmlnaHQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIC5pbWFnZS1yaWdodCB7XG4gICAgICAgIGZsb2F0OiByaWdodDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIGEge1xuICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAucmVmZXJlbmNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLndyaXRpbmcgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgLndyaXRpbmcgb2wge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuQ29uZmVzc2lvbi5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgaW1hZ2VfdXJsLCBjaGFwdGVycyB9ID0gTE9ORE9OX0JBUFRJU1Q7XG5cbiAgaWYgKHF1ZXJ5LnNsdWcuaW5kZXhPZihcImNoYXB0ZXItbGlzdFwiKSAhPT0gLTEpIHtcbiAgICByZXR1cm4ge1xuICAgICAgY2hhcHRlckxpc3Q6IHRydWUsXG4gICAgICBuYW1lLFxuICAgICAgaW1hZ2VfdXJsLFxuICAgICAgY2hhcHRlcnNcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgY2hhcHRlckluZGV4ID0gZmluZEluZGV4KFxuICAgIGNoYXB0ZXJzLFxuICAgIGNoYXB0ZXIgPT4gY2hhcHRlci5zbHVnID09PSBxdWVyeS5zbHVnXG4gICk7XG5cbiAgY29uc3QgY2hhcHRlciA9XG4gICAgY2hhcHRlckluZGV4IHx8IGNoYXB0ZXJJbmRleCA9PT0gMCA/IGNoYXB0ZXJzW2NoYXB0ZXJJbmRleF0gOiB7fTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaW1hZ2VfdXJsOiBpbWFnZV91cmwsXG4gICAgLi4uY2hhcHRlcixcbiAgICBwcmV2aW91czogY2hhcHRlcnNbY2hhcHRlckluZGV4IC0gMV0sXG4gICAgbmV4dDogY2hhcHRlcnNbY2hhcHRlckluZGV4ICsgMV1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZlc3Npb247XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/confession.js */"
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
//# sourceMappingURL=confession.js.c6f01e9c0f0efd36abc8.hot-update.js.map