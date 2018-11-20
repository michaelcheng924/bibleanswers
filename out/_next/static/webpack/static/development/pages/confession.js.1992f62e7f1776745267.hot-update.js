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
  var paragraph = _ref.paragraph,
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

/***/ })

})
//# sourceMappingURL=confession.js.1992f62e7f1776745267.hot-update.js.map