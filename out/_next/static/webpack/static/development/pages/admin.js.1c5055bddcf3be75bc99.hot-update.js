webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./components/TagEditor.js":
/*!*********************************!*\
  !*** ./components/TagEditor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
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





var UpdateTag =
/*#__PURE__*/
function (_Component) {
  _inherits(UpdateTag, _Component);

  function UpdateTag() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, UpdateTag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(UpdateTag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", _objectSpread({}, _this.props, {
      date_added: "2018-11-19"
    }));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      var newState = _defineProperty({}, name, value);

      if (name === "slug") {
        newState.url = "/tags/".concat(value);
      }

      _this.setState(newState);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "updateTag", function () {
      var _this$props = _this.props,
          id = _this$props.id,
          headers = _this$props.headers,
          onFetchPostsTags = _this$props.onFetchPostsTags;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.patch("https://bibleanswersapi.herokuapp.com/tags/".concat(id), _this.state, headers).then(function () {
        onFetchPostsTags();
      });
    });

    return _this;
  }

  _createClass(UpdateTag, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var _this$state = this.state,
          slug = _this$state.slug,
          url = _this$state.url,
          title = _this$state.title,
          description = _this$state.description,
          subtitle = _this$state.subtitle,
          image_url = _this$state.image_url,
          date_added = _this$state.date_added;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "admin__create-tag"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return _this2.props.onSetTag(null);
        }
      }, "Admin home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Create Tag"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "slug: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: this.onChange,
        name: "slug",
        placeholder: "slug",
        value: slug
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
        disabled: true,
        onChange: this.onChange,
        name: "url",
        placeholder: "url",
        value: url
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "title: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: this.onChange,
        name: "title",
        placeholder: "title",
        value: title
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "description: ", 160 - description.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: this.onChange,
        name: "description",
        placeholder: "description",
        value: description
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "subtitle: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: this.onChange,
        name: "subtitle",
        placeholder: "subtitle",
        value: subtitle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "date_added: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: this.onChange,
        name: "date_added",
        placeholder: "date_added",
        value: date_added || ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "image_url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__["default"], {
        onChange: this.onChange,
        name: "image_url",
        placeholder: "image_url",
        value: image_url || ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: image_url,
        alt: title,
        style: {
          width: 200
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.updateTag
      }, "Update"));
    }
  }]);

  return UpdateTag;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (UpdateTag);

/***/ })

})
//# sourceMappingURL=admin.js.1c5055bddcf3be75bc99.hot-update.js.map