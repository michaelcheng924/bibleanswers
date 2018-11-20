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
    className: "jsx-708918422"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-708918422"
  }, "Chapter ", index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-708918422"
  }, paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: section.superscript,
      className: "jsx-708918422"
    }, section.text, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#ref-".concat(index, "-").concat(section.superscript),
      id: "".concat(index, "-").concat(section.superscript),
      className: "jsx-708918422" + " " + "superscript"
    }, "".concat(section.superscript, " ")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-708918422" + " " + "scripture-section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-708918422" + " " + "nomargin"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-708918422"
  }, "References (click to view)")), paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: section.superscript,
      className: "jsx-708918422" + " " + "nomargin"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(index, "-").concat(section.superscript),
      id: "ref-".concat(index, "-").concat(section.superscript),
      className: "jsx-708918422"
    }, "^ "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-708918422"
    }, section.superscript, "."), " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      className: "jsx-708918422" + " " + "scripture"
    }, section.scriptures));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-708918422" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-708918422"
  }, "Click on a Scripture above to view passage"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "708918422",
    css: "h3.jsx-708918422{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}h4.jsx-708918422{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}h3.jsx-708918422+p.jsx-708918422,h3.jsx-708918422+ol.jsx-708918422,h3.jsx-708918422+ul.jsx-708918422,h3.jsx-708918422+blockquote.jsx-708918422,h4.jsx-708918422+p.jsx-708918422,h4.jsx-708918422+ol.jsx-708918422,h4.jsx-708918422+ul.jsx-708918422,h4.jsx-708918422+blockquote.jsx-708918422{margin-top:8px;}p.jsx-708918422,ol.jsx-708918422,ul.jsx-708918422,blockquote.jsx-708918422{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}ol.jsx-708918422,ul.jsx-708918422{padding:0 40px;}li.jsx-708918422{margin-bottom:10px;}li.jsx-708918422:last-child{margin-bottom:0;}blockquote.jsx-708918422{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.first.jsx-708918422{margin-top:8px;}.nomargin.jsx-708918422{margin-top:0;}.indent.jsx-708918422{margin-left:20px;}.image.jsx-708918422{margin-top:29px;}.image-left.jsx-708918422{float:left;margin-right:20px;}.image-right.jsx-708918422{float:right;margin-left:20px;}a.jsx-708918422{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.reference.jsx-708918422{font-size:14px;margin-left:2px;position:relative;top:-5px;}@media screen and (max-width:768px){h3.jsx-708918422{font-size:30px;margin-top:28px;}h4.jsx-708918422{font-size:24px;margin-top:22px;}p.jsx-708918422,ol.jsx-708918422{font-size:18px;margin-top:21px;}blockquote.jsx-708918422{font-size:18px;margin-top:21px;}.image.jsx-708918422{margin-top:21px;}}.superscript.jsx-708918422{color:#689f38;font-size:15px;margin-left:1px;position:relative;top:-6px;}.scripture-section.jsx-708918422{border:1px solid #bdbdbd;margin-top:20px;padding:5px 10px;}.scripture.jsx-708918422{color:#bdbdbd;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db25mZXNzaW9uUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQTZDa0IsQUFHMEIsQUFPQSxBQWNBLEFBT0EsQUFRQSxBQUlJLEFBSUgsQUFJMEIsQUFRM0IsQUFJRixBQUlJLEFBSUQsQUFJTCxBQUtDLEFBS0UsQUFLQyxBQVFFLEFBS0EsQUFNQSxBQUtBLEFBS0MsQUFLSixBQVFXLEFBTVgsV0E5REksQ0FLRCxDQWpCbkIsQ0FzQnVCLEFBdUNOLEFBY2pCLENBdkltQixBQU9BLEFBY25CLEFBT21CLEFBUW5CLEFBb0JBLEFBK0JrQixBQVFFLEFBS0EsQUFNQSxBQUtBLENBbkVwQixBQXdCQSxBQWdERSxDQXBERixFQXhCQSxNQXlGa0IsSUF4RGxCLEFBS0EsQUE0Q2tCLEVBbENFLEFBUWxCLEFBS0EsQUFNQSxBQUtBLENBL0dTLEFBT0EsQUFxQkEsT0FtQlMsRUE5Q0YsQUFPQSxBQXFCQSxBQW9HQyxJQVBDLElBbENULFFBdEZYLEFBT0EsQUFxQkEsQUFrQmEsQ0F5Q2IsQUF5Q0EsS0FQVyxDQXpDWCxJQWpDb0IsSUEyRXBCLGNBMUVvQixrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0NvbmZlc3Npb25QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QgZnJvbSBcInJlYWN0XCI7XG5cbmNvbnN0IENvbmZlc3Npb25QYXJhZ3JhcGggPSAoeyBwYXJhZ3JhcGgsIGluZGV4IH0pID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg0PkNoYXB0ZXIge2luZGV4ICsgMX08L2g0PlxuICAgICAgPHA+XG4gICAgICAgIHtwYXJhZ3JhcGgubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e3NlY3Rpb24uc3VwZXJzY3JpcHR9PlxuICAgICAgICAgICAgICB7c2VjdGlvbi50ZXh0fVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AjcmVmLSR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICAgIGlkPXtgJHtpbmRleH0tJHtzZWN0aW9uLnN1cGVyc2NyaXB0fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VwZXJzY3JpcHRcIlxuICAgICAgICAgICAgICA+e2Ake3NlY3Rpb24uc3VwZXJzY3JpcHR9IGB9PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmlwdHVyZS1zZWN0aW9uXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCI+XG4gICAgICAgICAgPHN0cm9uZz5SZWZlcmVuY2VzIChjbGljayB0byB2aWV3KTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIHtwYXJhZ3JhcGgubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cCBrZXk9e3NlY3Rpb24uc3VwZXJzY3JpcHR9IGNsYXNzTmFtZT1cIm5vbWFyZ2luXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YCMke2luZGV4fS0ke3NlY3Rpb24uc3VwZXJzY3JpcHR9YH1cbiAgICAgICAgICAgICAgICBpZD17YHJlZi0ke2luZGV4fS0ke3NlY3Rpb24uc3VwZXJzY3JpcHR9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtgXiBgfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e3NlY3Rpb24uc3VwZXJzY3JpcHR9Ljwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgICAgPHNwYW4gY2xhc3NOYW1lPVwic2NyaXB0dXJlXCI+e3NlY3Rpb24uc2NyaXB0dXJlc308L3NwYW4+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICA8ZW0+Q2xpY2sgb24gYSBTY3JpcHR1cmUgYWJvdmUgdG8gdmlldyBwYXNzYWdlPC9lbT5cbiAgICAgICAgPC9wPlxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDMge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogNTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg0IHtcbiAgICAgICAgICBmb250LXNpemU6IDI2cHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjI7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDMwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBoMyArIHAsXG4gICAgICAgIGgzICsgb2wsXG4gICAgICAgIGgzICsgdWwsXG4gICAgICAgIGgzICsgYmxvY2txdW90ZSxcbiAgICAgICAgaDQgKyBwLFxuICAgICAgICBoNCArIG9sLFxuICAgICAgICBoNCArIHVsLFxuICAgICAgICBoNCArIGJsb2NrcXVvdGUge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAsXG4gICAgICAgIG9sLFxuICAgICAgICB1bCxcbiAgICAgICAgYmxvY2txdW90ZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgb2wsXG4gICAgICAgIHVsIHtcbiAgICAgICAgICBwYWRkaW5nOiAwIDQwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBsaSB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMTBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGxpOmxhc3QtY2hpbGQge1xuICAgICAgICAgIG1hcmdpbi1ib3R0b206IDA7XG4gICAgICAgIH1cblxuICAgICAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgICBib3JkZXItbGVmdDogM3B4IHNvbGlkIHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICAgIGxlZnQ6IC0yMHB4O1xuICAgICAgICAgIHBhZGRpbmctbGVmdDogMjBweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlyc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub21hcmdpbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbmRlbnQge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmltYWdlLWxlZnQge1xuICAgICAgICAgIGZsb2F0OiBsZWZ0O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5pbWFnZS1yaWdodCB7XG4gICAgICAgICAgZmxvYXQ6IHJpZ2h0O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgYSB7XG4gICAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgICB9XG5cbiAgICAgICAgLnJlZmVyZW5jZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAycHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLTVweDtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgaDMge1xuICAgICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjhweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBoNCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDI0cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMnB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIHAsXG4gICAgICAgICAgb2wge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjFweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBibG9ja3F1b3RlIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLmltYWdlIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnN1cGVyc2NyaXB0IHtcbiAgICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdHVyZS1zZWN0aW9uIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0dXJlIHtcbiAgICAgICAgICBjb2xvcjogI2JkYmRiZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmVzc2lvblBhcmFncmFwaDtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ConfessionParagraph.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfessionParagraph);

/***/ })

})
//# sourceMappingURL=confession.js.86ee91900fcf48052134.hot-update.js.map