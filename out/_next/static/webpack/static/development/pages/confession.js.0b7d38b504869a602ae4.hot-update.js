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
  var name = _ref.name,
      image_url = _ref.image_url,
      chapter = _ref.chapter,
      title = _ref.title,
      content = _ref.content,
      previous = _ref.previous,
      next = _ref.next;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_5__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-39270593"
  }, "".concat(chapter, ". ").concat(title), " - $", name, " | Bible Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "This is \"".concat(chapter, ". ").concat(title, "\" of the ").concat(name, ". Read the ").concat(name, " while easily viewing Scripture references."),
    className: "jsx-39270593"
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_6__["TitleSection"], {
    title: "".concat(chapter, ". ").concat(title),
    subtitle: "Read and explore the ".concat(name),
    image_url: image_url
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__["default"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-39270593" + " " + "writing"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ConfessionNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
    previous: previous ? {
      href: "/confessions/".concat(previous.slug),
      label: "".concat(previous.chapter === "Preface" ? "" : "Chapter", " ").concat(previous.chapter, ". ").concat(previous.title)
    } : null,
    next: next ? {
      href: "/confessions/".concat(next.slug),
      label: "".concat(next.chapter === "Preface" ? "" : "Chapter", " ").concat(next.chapter, ". ").concat(next.title)
    } : null
  }), content.map(function (paragraph) {
    if (Object(lodash__WEBPACK_IMPORTED_MODULE_3__["isString"])(paragraph)) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
        className: "jsx-39270593"
      }, paragraph);
    }
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ConfessionNav__WEBPACK_IMPORTED_MODULE_8__["default"], {
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
    css: ".writing.jsx-39270593 h3.jsx-39270593{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing.jsx-39270593 h4.jsx-39270593{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing.jsx-39270593 h3.jsx-39270593+p.jsx-39270593,.writing.jsx-39270593 h3.jsx-39270593+ol.jsx-39270593,.writing.jsx-39270593 h3.jsx-39270593+ul.jsx-39270593,.writing.jsx-39270593 h3.jsx-39270593+blockquote.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+p.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+ol.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+ul.jsx-39270593,.writing.jsx-39270593 h4.jsx-39270593+blockquote.jsx-39270593{margin-top:8px;}.writing.jsx-39270593 p.jsx-39270593,.writing.jsx-39270593 ol.jsx-39270593,.writing.jsx-39270593 ul.jsx-39270593,.writing.jsx-39270593 blockquote.jsx-39270593{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.writing.jsx-39270593 ol.jsx-39270593,.writing.jsx-39270593 ul.jsx-39270593{padding:0 40px;}.writing.jsx-39270593 li.jsx-39270593{margin-bottom:10px;}.writing.jsx-39270593 li.jsx-39270593:last-child{margin-bottom:0;}.writing.jsx-39270593 blockquote.jsx-39270593{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing.jsx-39270593 .first.jsx-39270593{margin-top:8px;}.writing.jsx-39270593 .nomargin.jsx-39270593{margin-top:0;}.writing.jsx-39270593 .indent.jsx-39270593{margin-left:20px;}.writing.jsx-39270593 .image.jsx-39270593{margin-top:29px;}.writing.jsx-39270593 .image-left.jsx-39270593{float:left;margin-right:20px;}.writing.jsx-39270593 .image-right.jsx-39270593{float:right;margin-left:20px;}.writing.jsx-39270593 a.jsx-39270593{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing.jsx-39270593 .scripture.jsx-39270593{color:#039be5;}.writing.jsx-39270593 .reference.jsx-39270593{font-size:14px;margin-left:2px;position:relative;top:-5px;}@media screen and (max-width:768px){.writing.jsx-39270593 h3.jsx-39270593{font-size:30px;margin-top:28px;}.writing.jsx-39270593 h4.jsx-39270593{font-size:24px;margin-top:22px;}.writing.jsx-39270593 p.jsx-39270593,.writing.jsx-39270593 ol.jsx-39270593{font-size:18px;margin-top:21px;}.writing.jsx-39270593 blockquote.jsx-39270593{font-size:18px;margin-top:21px;}.writing.jsx-39270593 .image.jsx-39270593{margin-top:21px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvY29uZmVzc2lvbi5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUE0RmdCLEFBR3dCLEFBT0EsQUFjQSxBQU9BLEFBUUEsQUFJSSxBQUlILEFBSTBCLEFBUTNCLEFBSUYsQUFJSSxBQUlELEFBSUwsQUFLQyxBQUtFLEFBS0EsQUFJQyxBQVFFLEFBS0EsQUFNQSxBQUtBLEFBS0MsV0EvQ0EsQ0FLRCxDQWpCbkIsQ0FzQnVCLEFBS3ZCLENBdkZtQixBQU9BLEFBY25CLEFBT21CLEFBUW5CLEFBb0JBLEFBbUNrQixBQVFFLEFBS0EsQUFNQSxBQUtBLENBdkVwQixBQXdCQSxBQW9ERSxDQXhERixFQXhCQSxVQWlDQSxBQUtBLEVBY29CLEFBUWxCLEFBS0EsQUFNQSxBQUtBLENBbkhTLEFBT0EsQUFxQkEsT0FtQlMsRUE5Q0YsQUFPQSxBQXFCQSxRQStEUCxRQTFGWCxBQU9BLEFBcUJBLEFBa0JhLENBNkNiLE1BWEEsSUFqQ29CLGtCQUNBLGtCQUNwQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2NvbmZlc3Npb24uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgSGVhZCBmcm9tIFwibmV4dC9oZWFkXCI7XG5pbXBvcnQgeyBmaW5kSW5kZXgsIGlzU3RyaW5nIH0gZnJvbSBcImxvZGFzaFwiO1xuXG5pbXBvcnQgTE9ORE9OX0JBUFRJU1QgZnJvbSBcIi4uL2NvbnN0YW50cy9jb25mZXNzaW9ucy9sb25kb24tYmFwdGlzdFwiO1xuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBUaXRsZVNlY3Rpb24gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9UaXRsZVNlY3Rpb25cIjtcbmltcG9ydCBSZWFkaW5nQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1JlYWRpbmdDb250YWluZXJcIjtcbmltcG9ydCBDb25mZXNzaW9uTmF2IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbmZlc3Npb25OYXZcIjtcblxuY29uc3QgQ29uZmVzc2lvbiA9ICh7XG4gIG5hbWUsXG4gIGltYWdlX3VybCxcbiAgY2hhcHRlcixcbiAgdGl0bGUsXG4gIGNvbnRlbnQsXG4gIHByZXZpb3VzLFxuICBuZXh0XG59KSA9PiAoXG4gIDxDb250YWluZXI+XG4gICAgPEhlYWQ+XG4gICAgICA8dGl0bGU+XG4gICAgICAgIHtgJHtjaGFwdGVyfS4gJHt0aXRsZX1gfSAtICR7bmFtZX0gfCBCaWJsZSBBbnN3ZXJzXG4gICAgICA8L3RpdGxlPlxuXG4gICAgICA8bWV0YVxuICAgICAgICBuYW1lPVwiZGVzY3JpcHRpb25cIlxuICAgICAgICBjb250ZW50PXtgVGhpcyBpcyBcIiR7Y2hhcHRlcn0uICR7dGl0bGV9XCIgb2YgdGhlICR7bmFtZX0uIFJlYWQgdGhlICR7bmFtZX0gd2hpbGUgZWFzaWx5IHZpZXdpbmcgU2NyaXB0dXJlIHJlZmVyZW5jZXMuYH1cbiAgICAgIC8+XG4gICAgPC9IZWFkPlxuXG4gICAgPFRpdGxlU2VjdGlvblxuICAgICAgdGl0bGU9e2Ake2NoYXB0ZXJ9LiAke3RpdGxlfWB9XG4gICAgICBzdWJ0aXRsZT17YFJlYWQgYW5kIGV4cGxvcmUgdGhlICR7bmFtZX1gfVxuICAgICAgaW1hZ2VfdXJsPXtpbWFnZV91cmx9XG4gICAgLz5cbiAgICA8UmVhZGluZ0NvbnRhaW5lcj5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwid3JpdGluZ1wiPlxuICAgICAgICA8Q29uZmVzc2lvbk5hdlxuICAgICAgICAgIHByZXZpb3VzPXtcbiAgICAgICAgICAgIHByZXZpb3VzXG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgaHJlZjogYC9jb25mZXNzaW9ucy8ke3ByZXZpb3VzLnNsdWd9YCxcbiAgICAgICAgICAgICAgICAgIGxhYmVsOiBgJHtwcmV2aW91cy5jaGFwdGVyID09PSBcIlByZWZhY2VcIiA/IFwiXCIgOiBcIkNoYXB0ZXJcIn0gJHtcbiAgICAgICAgICAgICAgICAgICAgcHJldmlvdXMuY2hhcHRlclxuICAgICAgICAgICAgICAgICAgfS4gJHtwcmV2aW91cy50aXRsZX1gXG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICA6IG51bGxcbiAgICAgICAgICB9XG4gICAgICAgICAgbmV4dD17XG4gICAgICAgICAgICBuZXh0XG4gICAgICAgICAgICAgID8ge1xuICAgICAgICAgICAgICAgICAgaHJlZjogYC9jb25mZXNzaW9ucy8ke25leHQuc2x1Z31gLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGAke25leHQuY2hhcHRlciA9PT0gXCJQcmVmYWNlXCIgPyBcIlwiIDogXCJDaGFwdGVyXCJ9ICR7XG4gICAgICAgICAgICAgICAgICAgIG5leHQuY2hhcHRlclxuICAgICAgICAgICAgICAgICAgfS4gJHtuZXh0LnRpdGxlfWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgLz5cblxuICAgICAgICB7Y29udGVudC5tYXAocGFyYWdyYXBoID0+IHtcbiAgICAgICAgICBpZiAoaXNTdHJpbmcocGFyYWdyYXBoKSkge1xuICAgICAgICAgICAgcmV0dXJuIDxwPntwYXJhZ3JhcGh9PC9wPjtcbiAgICAgICAgICB9XG4gICAgICAgIH0pfVxuXG4gICAgICAgIDxDb25mZXNzaW9uTmF2XG4gICAgICAgICAgcHJldmlvdXM9e1xuICAgICAgICAgICAgcHJldmlvdXNcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBocmVmOiBgL2NvbmZlc3Npb25zLyR7cHJldmlvdXMuc2x1Z31gLFxuICAgICAgICAgICAgICAgICAgbGFiZWw6IGAke3ByZXZpb3VzLmNoYXB0ZXIgPT09IFwiUHJlZmFjZVwiID8gXCJcIiA6IFwiQ2hhcHRlclwifSAke1xuICAgICAgICAgICAgICAgICAgICBwcmV2aW91cy5jaGFwdGVyXG4gICAgICAgICAgICAgICAgICB9LiAke3ByZXZpb3VzLnRpdGxlfWBcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgIDogbnVsbFxuICAgICAgICAgIH1cbiAgICAgICAgICBuZXh0PXtcbiAgICAgICAgICAgIG5leHRcbiAgICAgICAgICAgICAgPyB7XG4gICAgICAgICAgICAgICAgICBocmVmOiBgL2NvbmZlc3Npb25zLyR7bmV4dC5zbHVnfWAsXG4gICAgICAgICAgICAgICAgICBsYWJlbDogYCR7bmV4dC5jaGFwdGVyID09PSBcIlByZWZhY2VcIiA/IFwiXCIgOiBcIkNoYXB0ZXJcIn0gJHtcbiAgICAgICAgICAgICAgICAgICAgbmV4dC5jaGFwdGVyXG4gICAgICAgICAgICAgICAgICB9LiAke25leHQudGl0bGV9YFxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgOiBudWxsXG4gICAgICAgICAgfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgPC9SZWFkaW5nQ29udGFpbmVyPlxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLndyaXRpbmcgaDMge1xuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDU2cHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIGg0IHtcbiAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMS4yMjtcbiAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyBoMyArIHAsXG4gICAgICAud3JpdGluZyBoMyArIG9sLFxuICAgICAgLndyaXRpbmcgaDMgKyB1bCxcbiAgICAgIC53cml0aW5nIGgzICsgYmxvY2txdW90ZSxcbiAgICAgIC53cml0aW5nIGg0ICsgcCxcbiAgICAgIC53cml0aW5nIGg0ICsgb2wsXG4gICAgICAud3JpdGluZyBoNCArIHVsLFxuICAgICAgLndyaXRpbmcgaDQgKyBibG9ja3F1b3RlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyBwLFxuICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAud3JpdGluZyB1bCxcbiAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU4O1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIG9sLFxuICAgICAgLndyaXRpbmcgdWwge1xuICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIGxpIHtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAuZmlyc3Qge1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIC5ub21hcmdpbiB7XG4gICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICB9XG5cbiAgICAgIC53cml0aW5nIC5pbmRlbnQge1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgLmltYWdlIHtcbiAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgLmltYWdlLWxlZnQge1xuICAgICAgICBmbG9hdDogbGVmdDtcbiAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAuaW1hZ2UtcmlnaHQge1xuICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyBhIHtcbiAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLndyaXRpbmcgLnNjcmlwdHVyZSB7XG4gICAgICAgIGNvbG9yOiAjMDM5YmU1O1xuICAgICAgfVxuXG4gICAgICAud3JpdGluZyAucmVmZXJlbmNlIHtcbiAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIHRvcDogLTVweDtcbiAgICAgIH1cblxuICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgLndyaXRpbmcgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgLndyaXRpbmcgb2wge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgIH1cbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvQ29udGFpbmVyPlxuKTtcblxuQ29uZmVzc2lvbi5nZXRJbml0aWFsUHJvcHMgPSAoeyBxdWVyeSB9KSA9PiB7XG4gIGNvbnN0IHsgbmFtZSwgaW1hZ2VfdXJsLCBjaGFwdGVycyB9ID0gTE9ORE9OX0JBUFRJU1Q7XG4gIGlmIChxdWVyeS5zbHVnLmluZGV4T2YoXCJjaGFwdGVyLWxpc3RcIikgIT09IC0xKSB7XG4gICAgcmV0dXJuIHtcbiAgICAgIGNoYXB0ZXJMaXN0OiB0cnVlLFxuICAgICAgY2hhcHRlcnNcbiAgICB9O1xuICB9XG5cbiAgY29uc3QgY2hhcHRlckluZGV4ID0gZmluZEluZGV4KFxuICAgIGNoYXB0ZXJzLFxuICAgIGNoYXB0ZXIgPT4gY2hhcHRlci5zbHVnID09PSBxdWVyeS5zbHVnXG4gICk7XG5cbiAgY29uc3QgY2hhcHRlciA9XG4gICAgY2hhcHRlckluZGV4IHx8IGNoYXB0ZXJJbmRleCA9PT0gMCA/IGNoYXB0ZXJzW2NoYXB0ZXJJbmRleF0gOiB7fTtcblxuICByZXR1cm4ge1xuICAgIG5hbWU6IG5hbWUsXG4gICAgaW1hZ2VfdXJsOiBpbWFnZV91cmwsXG4gICAgLi4uY2hhcHRlcixcbiAgICBwcmV2aW91czogY2hhcHRlcnNbY2hhcHRlckluZGV4IC0gMV0sXG4gICAgbmV4dDogY2hhcHRlcnNbY2hhcHRlckluZGV4ICsgMV1cbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZlc3Npb247XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/confession.js */"
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
//# sourceMappingURL=confession.js.0b7d38b504869a602ae4.hot-update.js.map