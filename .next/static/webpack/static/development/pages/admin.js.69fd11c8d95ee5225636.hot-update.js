webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./components/AdminMain.js":
/*!*********************************!*\
  !*** ./components/AdminMain.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var _AdminPostsList__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./AdminPostsList */ "./components/AdminPostsList.js");
/* harmony import */ var _AdminTagsList__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./AdminTagsList */ "./components/AdminTagsList.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }






var AdminMain =
/*#__PURE__*/
function (_Component) {
  _inherits(AdminMain, _Component);

  function AdminMain() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, AdminMain);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(AdminMain)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      showBackup: false
    });

    return _this;
  }

  _createClass(AdminMain, [{
    key: "renderBackup",
    value: function renderBackup() {
      var _this2 = this;

      var showBackup = this.state.showBackup;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.setState({
            showBackup: !showBackup
          });
        }
      }, showBackup ? "Hide" : "Show", " backup"), showBackup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
        value: JSON.stringify(this.props.posts.map(function (post) {
          var modifiedPost = _objectSpread({}, post, {
            tags: post.tags.map(function (tag) {
              return tag.title;
            })
          });

          delete modifiedPost["mapped_related_posts_tags"];
          return modifiedPost;
        }))
      }) : null);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          headers = _this$props.headers,
          onFetchPostsTags = _this$props.onFetchPostsTags,
          onSetPost = _this$props.onSetPost,
          posts = _this$props.posts,
          tags = _this$props.tags;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderBackup(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "admin__lists"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminPostsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        headers: headers,
        onFetchPostsTags: onFetchPostsTags,
        onSetPost: onSetPost,
        posts: posts,
        tags: tags
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminTagsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        headers: headers,
        tags: tags
      })));
    }
  }]);

  return AdminMain;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AdminMain);

/***/ })

})
//# sourceMappingURL=admin.js.69fd11c8d95ee5225636.hot-update.js.map