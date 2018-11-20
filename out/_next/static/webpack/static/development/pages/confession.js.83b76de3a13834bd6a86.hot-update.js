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
    className: "jsx-39270593"
  }, chapterList ? "Chapter list for the ".concat(name) : "".concat(chapter, ". ").concat(title), " ", "- $", name, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "This is \"".concat(chapter, ". ").concat(title, "\" of the ").concat(name, ". Read the ").concat(name, " while easily viewing Scripture references."),
    className: "jsx-39270593"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_6__["TitleSection"], {
    title: chapterList ? "Chapter list for the ".concat(name) : "".concat(chapter, ". ").concat(title),
    subtitle: "Read and explore the ".concat(name),
    image_url: image_url
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-39270593" + " " + "writing"
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
      href: "/confessions/".concat(chapter.slug),
      className: "jsx-39270593"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-39270593" + " " + "first"
    }, chapter.chapter, ". ", chapter.title));
  }) : null, content ? content.map(function (paragraph) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isString"])(paragraph)) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-39270593"
      }, paragraph);
    }
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
    styleId: "39270593",
    css: ".writing.jsx-39270593 h3.jsx-39270593{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing.jsx-39270593 h4.jsx-39270593{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing.jsx-39270593 h3.jsx-39270593+p.jsx-39270593,.writing.jsx-39270593 h3.jsx-39270593+ol.jsx-39270593,.writing.jsx-39270593 h3.jsx-39270593+ul.jsx-39270593,.writing.jsx-39270593 h3.jsx-39270593+blockquote.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+p.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+ol.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+ul.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+blockquote.jsx-39270593{margin-top:8px;}.writing.jsx-39270593 p.jsx-39270593,.writing.jsx-39270593 ol.jsx-39270593,.writing.jsx-39270593 ul.jsx-39270593,.writing.jsx-39270593 blockquote.jsx-39270593{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.writing.jsx-39270593 ol.jsx-39270593,.writing.jsx-39270593 ul.jsx-39270593{padding:0 40px;}.writing.jsx-39270593 li.jsx-39270593{margin-bottom:10px;}.writing.jsx-39270593 li.jsx-39270593:last-child{margin-bottom:0;}.writing.jsx-39270593 blockquote.jsx-39270593{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing.jsx-39270593 .first.jsx-39270593{margin-top:8px;}.writing.jsx-39270593 .nomargin.jsx-39270593{margin-top:0;}.writing.jsx-39270593 .indent.jsx-39270593{margin-left:20px;}.writing.jsx-39270593 .image.jsx-39270593{margin-top:29px;}.writing.jsx-39270593 .image-left.jsx-39270593{float:left;margin-right:20px;}.writing.jsx-39270593 .image-right.jsx-39270593{float:right;margin-left:20px;}.writing.jsx-39270593 a.jsx-39270593{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing.jsx-39270593 .scripture.jsx-39270593{color:#039be5;}.writing.jsx-39270593 .reference.jsx-39270593{font-size:14px;margin-left:2px;position:relative;top:-5px;}@media screen and (max-width:768px){.writing.jsx-39270593 h3.jsx-39270593{font-size:30px;margin-top:28px;}.writing.jsx-39270593 h4.jsx-39270593{font-size:24px;margin-top:22px;}.writing.jsx-39270593 p.jsx-39270593,.writing.jsx-39270593 ol.jsx-39270593{font-size:18px;margin-top:21px;}.writing.jsx-39270593 blockquote.jsx-39270593{font-size:18px;margin-top:21px;}.writing.jsx-39270593 .image.jsx-39270593{margin-top:21px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29uZmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFpSGdCLEFBR3dCLEFBT0EsQUFjQSxBQU9BLEFBUUEsQUFJSSxBQUlILEFBSTBCLEFBUTNCLEFBSUYsQUFJSSxBQUlELEFBSUwsQUFLQyxBQUtFLEFBS0EsQUFJQyxBQVFFLEFBS0EsQUFNQSxBQUtBLEFBS0MsV0EvQ0EsQ0FLRCxDQWpCbkIsQ0FzQnVCLEFBS3ZCLENBdkZtQixBQU9BLEFBY25CLEFBT21CLEFBUW5CLEFBb0JBLEFBbUNrQixBQVFFLEFBS0EsQUFNQSxBQUtBLENBdkVwQixBQXdCQSxBQW9ERSxDQXhERixFQXhCQSxVQWlDQSxBQUtBLEVBY29CLEFBUWxCLEFBS0EsQUFNQSxBQUtBLENBbkhTLEFBT0EsQUFxQkEsT0FtQlMsRUE5Q0YsQUFPQSxBQXFCQSxRQStEUCxRQTFGWCxBQU9BLEFBcUJBLEFBa0JhLENBNkNiLE1BWEEsSUFqQ29CLGtCQUNBLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbmZlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBmaW5kSW5kZXgsIGlzU3RyaW5nIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgTE9ORE9OX0JBUFRJU1QgZnJvbSBcIi4uL2NvbnN0YW50cy9jb25mZXNzaW9ucy9sb25kb24tYmFwdGlzdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBUaXRsZVNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZVNlY3Rpb25cIjtcbmltcG9ydCBSZWFkaW5nQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1JlYWRpbmdDb250YWluZXJcIjtcbmltcG9ydCBDb25mZXNzaW9uTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbmZlc3Npb25OYXZcIjtcblxuY29uc3QgQ29uZmVzc2lvbiA9ICh7XG4gIGNoYXB0ZXJMaXN0LFxuICBuYW1lLFxuICBpbWFnZV91cmwsXG4gIGNoYXB0ZXIsXG4gIGNoYXB0ZXJzLFxuICB0aXRsZSxcbiAgY29udGVudCxcbiAgcHJldmlvdXMsXG4gIG5leHRcbn0pID0+IChcbiAgPENvbnRhaW5lcj5cbiAgICA8SGVhZD5cbiAgICAgIDx0aXRsZT5cbiAgICAgICAge2NoYXB0ZXJMaXN0ID8gYENoYXB0ZXIgbGlzdCBmb3IgdGhlICR7bmFtZX1gIDogYCR7Y2hhcHRlcn0uICR7dGl0bGV9YH17XCIgXCJ9XG4gICAgICAgIC0gJHtuYW1lfSB8IEJpYmxlIEFuc3dlcnNcbiAgICAgIDwvdGl0bGU+XG5cbiAgICAgIDxtZXRhXG4gICAgICAgIG5hbWU9XCJkZXNjcmlwdGlvblwiXG4gICAgICAgIGNvbnRlbnQ9e2BUaGlzIGlzIFwiJHtjaGFwdGVyfS4gJHt0aXRsZX1cIiBvZiB0aGUgJHtuYW1lfS4gUmVhZCB0aGUgJHtuYW1lfSB3aGlsZSBlYXNpbHkgdmlld2luZyBTY3JpcHR1cmUgcmVmZXJlbmNlcy5gfVxuICAgICAgLz5cbiAgICA8L0hlYWQ+XG5cbiAgICA8VGl0bGVTZWN0aW9uXG4gICAgICB0aXRsZT17XG4gICAgICAgIGNoYXB0ZXJMaXN0ID8gYENoYXB0ZXIgbGlzdCBmb3IgdGhlICR7bmFtZX1gIDogYCR7Y2hhcHRlcn0uICR7dGl0bGV9YFxuICAgICAgfVxuICAgICAgc3VidGl0bGU9e2BSZWFkIGFuZCBleHBsb3JlIHRoZSAke25hbWV9YH1cbiAgICAgIGltYWdlX3VybD17aW1hZ2VfdXJsfVxuICAgIC8+XG4gICAgPFJlYWRpbmdDb250YWluZXI+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cIndyaXRpbmdcIj5cbiAgICAgICAge2NoYXB0ZXJMaXN0ID8gbnVsbCA6IChcbiAgICAgICAgICA8Q29uZmVzc2lvbk5hdlxuICAgICAgICAgICAgcHJldmlvdXM9e1xuICAgICAgICAgICAgICBwcmV2aW91c1xuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBgL2NvbmZlc3Npb25zLyR7cHJldmlvdXMuc2x1Z31gLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMuY2hhcHRlciA9PT0gXCJQcmVmYWNlXCIgPyBcIlwiIDogXCJDaGFwdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSAke3ByZXZpb3VzLmNoYXB0ZXJ9LiAke3ByZXZpb3VzLnRpdGxlfWBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHQ9e1xuICAgICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGAvY29uZmVzc2lvbnMvJHtuZXh0LnNsdWd9YCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGAke25leHQuY2hhcHRlciA9PT0gXCJQcmVmYWNlXCIgPyBcIlwiIDogXCJDaGFwdGVyXCJ9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgbmV4dC5jaGFwdGVyXG4gICAgICAgICAgICAgICAgICAgIH0uICR7bmV4dC50aXRsZX1gXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cblxuICAgICAgICB7Y2hhcHRlckxpc3RcbiAgICAgICAgICA/IGNoYXB0ZXJzLm1hcChjaGFwdGVyID0+IChcbiAgICAgICAgICAgICAgPGEgaHJlZj17YC9jb25mZXNzaW9ucy8ke2NoYXB0ZXIuc2x1Z31gfT5cbiAgICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgICAgICAgICAge2NoYXB0ZXIuY2hhcHRlcn0uIHtjaGFwdGVyLnRpdGxlfVxuICAgICAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgKSlcbiAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAge2NvbnRlbnRcbiAgICAgICAgICA/IGNvbnRlbnQubWFwKHBhcmFncmFwaCA9PiB7XG4gICAgICAgICAgICAgIGlmIChpc1N0cmluZyhwYXJhZ3JhcGgpKSB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIDxwPntwYXJhZ3JhcGh9PC9wPjtcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfSlcbiAgICAgICAgICA6IG51bGx9XG5cbiAgICAgICAge2NoYXB0ZXJMaXN0ID8gbnVsbCA6IChcbiAgICAgICAgICA8Q29uZmVzc2lvbk5hdlxuICAgICAgICAgICAgcHJldmlvdXM9e1xuICAgICAgICAgICAgICBwcmV2aW91c1xuICAgICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgICBocmVmOiBgL2NvbmZlc3Npb25zLyR7cHJldmlvdXMuc2x1Z31gLFxuICAgICAgICAgICAgICAgICAgICBsYWJlbDogYCR7XG4gICAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMuY2hhcHRlciA9PT0gXCJQcmVmYWNlXCIgPyBcIlwiIDogXCJDaGFwdGVyXCJcbiAgICAgICAgICAgICAgICAgICAgfSAke3ByZXZpb3VzLmNoYXB0ZXJ9LiAke3ByZXZpb3VzLnRpdGxlfWBcbiAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIG5leHQ9e1xuICAgICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICAgIGhyZWY6IGAvY29uZmVzc2lvbnMvJHtuZXh0LnNsdWd9YCxcbiAgICAgICAgICAgICAgICAgICAgbGFiZWw6IGAke25leHQuY2hhcHRlciA9PT0gXCJQcmVmYWNlXCIgPyBcIlwiIDogXCJDaGFwdGVyXCJ9ICR7XG4gICAgICAgICAgICAgICAgICAgICAgbmV4dC5jaGFwdGVyXG4gICAgICAgICAgICAgICAgICAgIH0uICR7bmV4dC50aXRsZX1gXG4gICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgICB9XG4gICAgICAgICAgLz5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuICAgIDwvUmVhZGluZ0NvbnRhaW5lcj5cblxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyBoNCB7XG4gICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XG4gICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgaDMgKyBwLFxuICAgICAgLndyaXRpbmcgaDMgKyBvbCxcbiAgICAgIC53cml0aW5nIGgzICsgdWwsXG4gICAgICAud3JpdGluZyBoMyArIGJsb2NrcXVvdGUsXG4gICAgICAud3JpdGluZyBoNCArIHAsXG4gICAgICAud3JpdGluZyBoNCArIG9sLFxuICAgICAgLndyaXRpbmcgaDQgKyB1bCxcbiAgICAgIC53cml0aW5nIGg0ICsgYmxvY2txdW90ZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgcCxcbiAgICAgIC53cml0aW5nIG9sLFxuICAgICAgLndyaXRpbmcgdWwsXG4gICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS41ODtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyBvbCxcbiAgICAgIC53cml0aW5nIHVsIHtcbiAgICAgICAgcGFkZGluZzogMCA0MHB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyBsaSB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDEwcHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAwO1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgYm9yZGVyLWxlZnQ6IDNweCBzb2xpZCByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICBwYWRkaW5nLWxlZnQ6IDIwcHg7XG4gICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgLmZpcnN0IHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAubm9tYXJnaW4ge1xuICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAuaW5kZW50IHtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIC5pbWFnZS1sZWZ0IHtcbiAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgLmltYWdlLXJpZ2h0IHtcbiAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgYSB7XG4gICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIC5zY3JpcHR1cmUge1xuICAgICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgLnJlZmVyZW5jZSB7XG4gICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDJweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICB0b3A6IC01cHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICBmb250LXNpemU6IDMwcHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIHAsXG4gICAgICAgIC53cml0aW5nIG9sIHtcbiAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L0NvbnRhaW5lcj5cbik7XG5cbkNvbmZlc3Npb24uZ2V0SW5pdGlhbFByb3BzID0gKHsgcXVlcnkgfSkgPT4ge1xuICBjb25zdCB7IG5hbWUsIGltYWdlX3VybCwgY2hhcHRlcnMgfSA9IExPTkRPTl9CQVBUSVNUO1xuXG4gIGlmIChxdWVyeS5zbHVnLmluZGV4T2YoXCJjaGFwdGVyLWxpc3RcIikgIT09IC0xKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXB0ZXJMaXN0OiB0cnVlLFxuICAgICAgbmFtZSxcbiAgICAgIGltYWdlX3VybCxcbiAgICAgIGNoYXB0ZXJzXG4gICAgfTtcbiAgfVxuXG4gIGNvbnN0IGNoYXB0ZXJJbmRleCA9IGZpbmRJbmRleChcbiAgICBjaGFwdGVycyxcbiAgICBjaGFwdGVyID0+IGNoYXB0ZXIuc2x1ZyA9PT0gcXVlcnkuc2x1Z1xuICApO1xuXG4gIGNvbnN0IGNoYXB0ZXIgPVxuICAgIGNoYXB0ZXJJbmRleCB8fCBjaGFwdGVySW5kZXggPT09IDAgPyBjaGFwdGVyc1tjaGFwdGVySW5kZXhdIDoge307XG5cbiAgcmV0dXJuIHtcbiAgICBuYW1lOiBuYW1lLFxuICAgIGltYWdlX3VybDogaW1hZ2VfdXJsLFxuICAgIC4uLmNoYXB0ZXIsXG4gICAgcHJldmlvdXM6IGNoYXB0ZXJzW2NoYXB0ZXJJbmRleCAtIDFdLFxuICAgIG5leHQ6IGNoYXB0ZXJzW2NoYXB0ZXJJbmRleCArIDFdXG4gIH07XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25mZXNzaW9uO1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/confession.js */"
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
//# sourceMappingURL=confession.js.83b76de3a13834bd6a86.hot-update.js.map