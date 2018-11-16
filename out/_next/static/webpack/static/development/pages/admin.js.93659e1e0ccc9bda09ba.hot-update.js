webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/keyBy */ "./node_modules/lodash/keyBy.js");
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash_keyBy__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/GlobalStyle */ "./components/GlobalStyle.js");
/* harmony import */ var _components_AdminStyles__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/AdminStyles */ "./components/AdminStyles.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Login */ "./components/Login.js");
/* harmony import */ var _components_AdminMain__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/AdminMain */ "./components/AdminMain.js");
/* harmony import */ var _components_PostEditor__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/PostEditor */ "./components/PostEditor.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }











var Admin =
/*#__PURE__*/
function (_Component) {
  _inherits(Admin, _Component);

  function Admin() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Admin);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Admin)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      headers: {},
      loggedIn: false,
      post: null,
      posts: [],
      postsBySlug: {},
      tags: []
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onLoginSuccess", function (token) {
      _this.onFetchPostsTags();

      localStorage.setItem("bible-answers-token", token);

      _this.setState({
        headers: {
          headers: {
            Authorization: "Bearer ".concat(token)
          }
        },
        loggedIn: true
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFetchPostsTags", function () {
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://bibleanswersapi.herokuapp.com/initialfetch").then(function (response) {
        _this.setState({
          posts: response.data.posts,
          postsBySlug: lodash_keyBy__WEBPACK_IMPORTED_MODULE_2___default()(response.data.posts, "slug"),
          tags: response.data.tags
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSetPost", function (post) {
      _this.setState({
        post: post
      });
    });

    return _this;
  }

  _createClass(Admin, [{
    key: "render",
    value: function render() {
      var _this$state = this.state,
          headers = _this$state.headers,
          loggedIn = _this$state.loggedIn,
          post = _this$state.post,
          posts = _this$state.posts,
          postsBySlug = _this$state.postsBySlug,
          tags = _this$state.tags;

      if (!loggedIn) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_6__["default"], {
          onLoginSuccess: this.onLoginSuccess
        });
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_3__["default"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_4__["default"], null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdminStyles__WEBPACK_IMPORTED_MODULE_5__["default"], null), post ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_PostEditor__WEBPACK_IMPORTED_MODULE_8__["default"], {
        headers: headers,
        onFetchPostsTags: this.onFetchPostsTags,
        onSetPost: this.onSetPost,
        post: post
      }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_AdminMain__WEBPACK_IMPORTED_MODULE_7__["default"], {
        headers: headers,
        onFetchPostsTags: this.onFetchPostsTags,
        onSetPost: this.onSetPost,
        posts: posts,
        postsBySlug: postsBySlug,
        tags: tags
      }));
    }
  }]);

  return Admin;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Admin);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/admin")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=admin.js.93659e1e0ccc9bda09ba.hot-update.js.map