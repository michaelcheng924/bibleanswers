webpackHotUpdate("static/development/pages/contradictions.js",{

/***/ "./utils/string.js":
/*!*************************!*\
  !*** ./utils/string.js ***!
  \*************************/
/*! exports provided: matchesSearch, highlightText */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "matchesSearch", function() { return matchesSearch; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "highlightText", function() { return highlightText; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

function matchesSearch(full, search) {
  if (typeof full !== "string" || typeof search !== "string") {
    return false;
  }

  return full.toLowerCase().indexOf(search.toLowerCase()) !== -1;
}
function highlightText(text, search) {
  var lowerSearch = search.toLowerCase();
  var lowerText = text.toLowerCase();
  var startIndex = lowerText.indexOf(lowerSearch);

  if (startIndex === -1) {
    return text;
  }

  var first = text.slice(0, startIndex);
  var highlight = text.slice(startIndex, startIndex + search.length);
  var last = text.slice(startIndex + search.length);
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", null, first, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    className: "highlight"
  }, highlight), last);
}

/***/ })

})
//# sourceMappingURL=contradictions.js.13658f7017b680e458a8.hot-update.js.map