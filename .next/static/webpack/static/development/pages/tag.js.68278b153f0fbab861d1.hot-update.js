webpackHotUpdate("static/development/pages/tag.js",{

/***/ "./pages/tag.js":
/*!**********************!*\
  !*** ./pages/tag.js ***!
  \**********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Tag = function Tag() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "TAG");
}; // Tag.getInitialProps = async function({ query }) {
//   const res = await fetch("http://bibleanswersapi.herokuapp.com/homefetch");
//   const data = await res.json();
//   return {
//     recentPosts: data.recent_posts,
//     tags: data.tags
//   };
// };


/* harmony default export */ __webpack_exports__["default"] = (Tag);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/tag")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=tag.js.68278b153f0fbab861d1.hot-update.js.map