webpackHotUpdate("static/development/pages/tag.js",{

/***/ "./components/Author.js":
/*!******************************!*\
  !*** ./components/Author.js ***!
  \******************************/
/*! exports provided: AmpAuthorComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpAuthorComponent", function() { return AmpAuthorComponent; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "./node_modules/moment/moment.js");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-amphtml */ "./node_modules/react-amphtml/index.js");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_3__);
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





var AmpAuthor = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var AmpAuthorInfo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());
var AmpAuthorName = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject3());
var AmpAuthorDate = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject4());
var StyledAmpImage = Object(styled_components__WEBPACK_IMPORTED_MODULE_2__["default"])(react_amphtml__WEBPACK_IMPORTED_MODULE_3__["AmpImg"])(_templateObject5());

var AmpAuthorComponent = function AmpAuthorComponent(_ref) {
  var date_added = _ref.date_added,
      image = _ref.image,
      name = _ref.name;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AmpAuthor, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAmpImage, {
    specName: "default",
    src: image,
    width: "60",
    height: "60",
    alt: "AMP"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AmpAuthorInfo, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AmpAuthorName, null, name), date_added ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AmpAuthorDate, null, moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date(date_added)).format("MMM Do, YYYY")) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AmpAuthorDate, null, "Not published yet")));
};



/***/ })

})
//# sourceMappingURL=tag.js.979363236d57f649e3fa.hot-update.js.map