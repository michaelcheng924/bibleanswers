webpackHotUpdate("static/development/pages/contradictions.js",{

/***/ "./components/Author.js":
/*!******************************!*\
  !*** ./components/Author.js ***!
  \******************************/
/*! exports provided: AmpAuthorComponent, AuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpAuthorComponent", function() { return AmpAuthorComponent; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthorComponent", function() { return AuthorComponent; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-amphtml */ "./node_modules/react-amphtml/index.js");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_4__);


function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  border-radius: 30px;\n  flex-shrink: 0;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  font-size: 16px;\n  margin-bottom: 4px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  margin-left: 20px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  margin-top: 20px;\n  max-width: 500px;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var AmpAuthor = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var AmpAuthorInfo = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject2());
var AmpAuthorName = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject3());
var AmpAuthorDate = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject4());
var StyledAmpImage = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["AmpImg"])(_templateObject5());

var AmpAuthorComponent = function AmpAuthorComponent(_ref) {
  var date_added = _ref.date_added,
      image = _ref.image,
      name = _ref.name;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAuthor, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAmpImage, {
    specName: "default",
    src: image,
    width: "60",
    height: "60",
    alt: "AMP"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAuthorInfo, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAuthorName, null, name), date_added ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAuthorDate, null, moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date_added)).format("MMM Do, YYYY")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAuthorDate, null, "Not published yet")));
};

var AuthorComponent = function AuthorComponent(_ref2) {
  var date_added = _ref2.date_added,
      image = _ref2.image,
      name = _ref2.name;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
    src: image,
    className: "jsx-2530676027" + " " + "image"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-info"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-name"
  }, name), date_added ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-date"
  }, moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date_added)).format("MMM Do, YYYY")) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2530676027" + " " + "author-date"
  }, "Not published yet")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2530676027",
    css: ".author.jsx-2530676027{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;max-width:500px;}.author-info.jsx-2530676027{margin-left:20px;}.author-name.jsx-2530676027{font-size:16px;margin-bottom:4px;}.author-date.jsx-2530676027{color:rgba(0,0,0,0.54);font-size:16px;}.image.jsx-2530676027{border-radius:30px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:60px;width:60px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9BdXRob3IuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBb0VrQixBQUc4QixBQU9GLEFBSUYsQUFLVyxBQUtQLGVBVEQsRUFKcEIsRUFjZ0IsSUFMQyxVQUpqQixLQUtBLHFDQUtjLFlBQ0QsTUF2QkUsS0F3QmYscUVBdkJrQixnQkFDQSxnQkFDbEIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0F1dGhvci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIEFtcCBmcm9tIFwicmVhY3QtYW1waHRtbFwiO1xuXG5jb25zdCBBbXBBdXRob3IgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBtYXJnaW4tdG9wOiAyMHB4O1xuICBtYXgtd2lkdGg6IDUwMHB4O1xuYDtcblxuY29uc3QgQW1wQXV0aG9ySW5mbyA9IHN0eWxlZC5kaXZgXG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuYDtcblxuY29uc3QgQW1wQXV0aG9yTmFtZSA9IHN0eWxlZC5kaXZgXG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xuYDtcblxuY29uc3QgQW1wQXV0aG9yRGF0ZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDE2cHg7XG5gO1xuXG5jb25zdCBTdHlsZWRBbXBJbWFnZSA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgYm9yZGVyLXJhZGl1czogMzBweDtcbiAgZmxleC1zaHJpbms6IDA7XG5gO1xuXG5jb25zdCBBbXBBdXRob3JDb21wb25lbnQgPSAoeyBkYXRlX2FkZGVkLCBpbWFnZSwgbmFtZSB9KSA9PiAoXG4gIDxBbXBBdXRob3I+XG4gICAgPFN0eWxlZEFtcEltYWdlXG4gICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgc3JjPXtpbWFnZX1cbiAgICAgIHdpZHRoPVwiNjBcIlxuICAgICAgaGVpZ2h0PVwiNjBcIlxuICAgICAgYWx0PVwiQU1QXCJcbiAgICAvPlxuICAgIDxBbXBBdXRob3JJbmZvPlxuICAgICAgPEFtcEF1dGhvck5hbWU+e25hbWV9PC9BbXBBdXRob3JOYW1lPlxuICAgICAge2RhdGVfYWRkZWQgPyAoXG4gICAgICAgIDxBbXBBdXRob3JEYXRlPlxuICAgICAgICAgIHttb21lbnQobmV3IERhdGUoZGF0ZV9hZGRlZCkpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKX1cbiAgICAgICAgPC9BbXBBdXRob3JEYXRlPlxuICAgICAgKSA6IChcbiAgICAgICAgPEFtcEF1dGhvckRhdGU+Tm90IHB1Ymxpc2hlZCB5ZXQ8L0FtcEF1dGhvckRhdGU+XG4gICAgICApfVxuICAgIDwvQW1wQXV0aG9ySW5mbz5cbiAgPC9BbXBBdXRob3I+XG4pO1xuXG5jb25zdCBBdXRob3JDb21wb25lbnQgPSAoeyBkYXRlX2FkZGVkLCBpbWFnZSwgbmFtZSB9KSA9PiB7XG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3JcIj5cbiAgICAgIDxpbWcgc3JjPXtpbWFnZX0gY2xhc3NOYW1lPVwiaW1hZ2VcIiAvPlxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJhdXRob3ItaW5mb1wiPlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1uYW1lXCI+e25hbWV9PC9kaXY+XG4gICAgICAgIHtkYXRlX2FkZGVkID8gKFxuICAgICAgICAgIDxkaXYgY2xhc3NOYW1lPVwiYXV0aG9yLWRhdGVcIj5cbiAgICAgICAgICAgIHttb21lbnQobmV3IERhdGUoZGF0ZV9hZGRlZCkpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKX1cbiAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgKSA6IChcbiAgICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cImF1dGhvci1kYXRlXCI+Tm90IHB1Ymxpc2hlZCB5ZXQ8L2Rpdj5cbiAgICAgICAgKX1cbiAgICAgIDwvZGl2PlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC5hdXRob3Ige1xuICAgICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIG1heC13aWR0aDogNTAwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuYXV0aG9yLWluZm8ge1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvci1uYW1lIHtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogNHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmF1dGhvci1kYXRlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuaW1hZ2Uge1xuICAgICAgICAgIGJvcmRlci1yYWRpdXM6IDMwcHg7XG4gICAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgICAgaGVpZ2h0OiA2MHB4O1xuICAgICAgICAgIHdpZHRoOiA2MHB4O1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgeyBBbXBBdXRob3JDb21wb25lbnQsIEF1dGhvckNvbXBvbmVudCB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/Author.js */"
  }));
};



/***/ })

})
//# sourceMappingURL=contradictions.js.39f9d0d88ac24d304a1a.hot-update.js.map