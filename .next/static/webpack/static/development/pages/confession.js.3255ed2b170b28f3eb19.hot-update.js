webpackHotUpdate("static/development/pages/confession.js",{

/***/ "./components/ConfessionParagraph.js":
/*!*******************************************!*\
  !*** ./components/ConfessionParagraph.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var ConfessionParagraph = function ConfessionParagraph(_ref) {
  var paragraph = _ref.paragraph,
      index = _ref.index;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-357908335"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-357908335"
  }, "Chapter ", index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-357908335"
  }, paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: section.superscript,
      className: "jsx-357908335"
    }, section.text, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#ref-".concat(index, "-").concat(section.superscript),
      id: "".concat(index, "-").concat(section.superscript),
      className: "jsx-357908335" + " " + "superscript"
    }, "".concat(section.superscript, " ")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-357908335" + " " + "scripture-section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-357908335" + " " + "nomargin"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-357908335"
  }, "References (click to view)")), paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: section.superscript,
      className: "jsx-357908335" + " " + "nomargin"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(index, "-").concat(section.superscript),
      id: "ref-".concat(index, "-").concat(section.superscript),
      className: "jsx-357908335"
    }, "^ "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-357908335"
    }, section.superscript, "."), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-357908335" + " " + "scripture"
    }, section.scriptures));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-357908335" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-357908335"
  }, "Click on a Scripture above to view passage"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "357908335",
    css: "p.jsx-357908335{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.first.jsx-357908335{margin-top:8px;}.nomargin.jsx-357908335{margin-top:0;}a.jsx-357908335{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}@media screen and (max-width:768px){p.jsx-357908335{font-size:18px;margin-top:21px;}}.superscript.jsx-357908335{color:#689f38;font-size:15px;margin-left:1px;position:relative;top:-6px;}.scripture-section.jsx-357908335{border:1px solid #bdbdbd;margin-top:20px;padding:5px 10px;}.scripture.jsx-357908335{color:#bdbdbd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db25mZXNzaW9uUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDa0IsQUFHMEIsQUFPQSxBQUlGLEFBSUMsQUFNRyxBQU1ILEFBUVcsQUFNWCxhQTdCaEIsQ0FJdUIsQUFZTixBQWNqQixDQXpDbUIsQUFPbkIsQUFjb0IsVUFjRixJQVBBLEVBTmhCLENBckJTLFNBQ08sQUFrQ0MsSUFQQyxZQTFCcEIsQ0FrQ0EsS0FQVyxDQWRYLFFBZUEiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0NvbmZlc3Npb25QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbmZlc3Npb25QYXJhZ3JhcGggPSAoeyBwYXJhZ3JhcGgsIGluZGV4IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg0PkNoYXB0ZXIge2luZGV4ICsgMX08L2g0PlxuICAgICAgPHA+XG4gICAgICAgIHtwYXJhZ3JhcGgubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e3NlY3Rpb24uc3VwZXJzY3JpcHR9PlxuICAgICAgICAgICAgICB7c2VjdGlvbi50ZXh0fVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AjcmVmLSR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICAgIGlkPXtgJHtpbmRleH0tJHtzZWN0aW9uLnN1cGVyc2NyaXB0fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VwZXJzY3JpcHRcIlxuICAgICAgICAgICAgICA+e2Ake3NlY3Rpb24uc3VwZXJzY3JpcHR9IGB9PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmlwdHVyZS1zZWN0aW9uXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCI+XG4gICAgICAgICAgPHN0cm9uZz5SZWZlcmVuY2VzIChjbGljayB0byB2aWV3KTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIHtwYXJhZ3JhcGgubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cCBrZXk9e3NlY3Rpb24uc3VwZXJzY3JpcHR9IGNsYXNzTmFtZT1cIm5vbWFyZ2luXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YCMke2luZGV4fS0ke3NlY3Rpb24uc3VwZXJzY3JpcHR9YH1cbiAgICAgICAgICAgICAgICBpZD17YHJlZi0ke2luZGV4fS0ke3NlY3Rpb24uc3VwZXJzY3JpcHR9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtgXiBgfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e3NlY3Rpb24uc3VwZXJzY3JpcHR9Ljwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2NyaXB0dXJlXCI+e3NlY3Rpb24uc2NyaXB0dXJlc308L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICA8ZW0+Q2xpY2sgb24gYSBTY3JpcHR1cmUgYWJvdmUgdG8gdmlldyBwYXNzYWdlPC9lbT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpcnN0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9tYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAuc3VwZXJzY3JpcHQge1xuICAgICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTVweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMXB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC02cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0dXJlLXNlY3Rpb24ge1xuICAgICAgICAgIGJvcmRlcjogMXB4IHNvbGlkICNiZGJkYmQ7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgICBwYWRkaW5nOiA1cHggMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHR1cmUge1xuICAgICAgICAgIGNvbG9yOiAjYmRiZGJkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25mZXNzaW9uUGFyYWdyYXBoO1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ConfessionParagraph.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfessionParagraph);

/***/ })

})
//# sourceMappingURL=confession.js.3255ed2b170b28f3eb19.hot-update.js.map