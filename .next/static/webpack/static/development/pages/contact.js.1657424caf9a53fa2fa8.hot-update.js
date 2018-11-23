webpackHotUpdate("static/development/pages/contact.js",{

/***/ "./pages/contact.js":
/*!**************************!*\
  !*** ./pages/contact.js ***!
  \**************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");





var Contact = function Contact() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_1__["Container"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_2__["TitleSection"], {
    title: "Contact us",
    subtitle: "We'd love to hear from you!",
    image_url: "https://i.imgur.com/seKFp6c.png"
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "writing"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Here are several reasons why you might want to contact us:"))));
};

/* harmony default export */ __webpack_exports__["default"] = (Contact);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/contact")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=contact.js.1657424caf9a53fa2fa8.hot-update.js.map