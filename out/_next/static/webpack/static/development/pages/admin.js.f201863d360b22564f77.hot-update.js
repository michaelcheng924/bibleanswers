webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./components/AdminPostsList.js":
/*!**************************************!*\
  !*** ./components/AdminPostsList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var _Search__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Search */ "./components/Search.js");
/* harmony import */ var _ListItem__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ListItem */ "./components/ListItem.js");
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

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }






var PostItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());

var PostsList =
/*#__PURE__*/
function (_Component) {
  _inherits(PostsList, _Component);

  function PostsList(props) {
    var _this;

    _classCallCheck(this, PostsList);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostsList).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onNewPostClick", function () {
      _this.props.onSetPost({
        published: false,
        slug: "",
        title: "",
        description: "",
        subtitle: "",
        image_url: "",
        image_url_small: "",
        references: "",
        html: "<div class=\"writing\">\n  <h3>Initial</h3>\n</div>",
        date_added: "",
        related_posts_tags: [],
        mapped_related_posts_tags: [],
        tag_ids: [],
        tags: []
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (e) {
      _this.keys[e.keyCode] = e.type === "keydown";

      if (_this.keys[17] && _this.keys[78]) {
        _this.setState({
          showNeedsWork: !_this.state.showNeedsWork
        });
      }
    });

    _this.keys = {};
    _this.state = {
      showNeedsWork: false
    };
    return _this;
  }

  _createClass(PostsList, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      document.addEventListener("keydown", this.handleKeyPress);
      document.addEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      document.removeEventListener("keydown", this.handleKeyPress);
      document.removeEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "needsWork",
    value: function needsWork(post) {
      var errors = [];
      console.log("======", post);

      if (!post.published) {
        errors.push("Not published");
      }

      if (!post.tags.length) {
        errors.push("No tags");
      }

      if (!post.related_posts_tags) {
        errors.push("No related posts");
      }

      if (!post.description || post.description.length < 160) {
        errors.push("Needs description");
      }

      return errors;
    }
  }, {
    key: "renderAll",
    value: function renderAll() {
      var _this2 = this;

      return this.props.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostItem, {
          key: post.id,
          onClick: function onClick() {
            return _this2.props.onSetPost(post);
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.title), post.image_url_small ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: post.image_url_small,
          alt: post.title
        }) : null);
      });
    }
  }, {
    key: "renderNeedsWork",
    value: function renderNeedsWork() {
      var _this3 = this;

      var _this$props = this.props,
          onSetPost = _this$props.onSetPost,
          posts = _this$props.posts,
          postsBySlug = _this$props.postsBySlug,
          tags = _this$props.tags;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, tags.map(function (tag) {
        if (tag.slug === "apologetics" || tag.slug === "theology") {
          return null;
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: tag.id,
          className: "writing"
        }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["some"])(tag.posts, function (post) {
          return _this3.needsWork(postsBySlug[post.slug]).length;
        }) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "nomargin"
        }, tag.title), tag.posts.map(function (post) {
          var needsWork = _this3.needsWork(postsBySlug[post.slug]);

          if (!needsWork.length) {
            return null;
          }

          var needsWorkErrors = needsWork.map(function (error) {
            return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
              key: error,
              style: {
                color: "red"
              }
            }, error);
          });
          return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
            key: post.id,
            onClick: function onClick() {
              return onSetPost(post);
            }
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, post.title), needsWorkErrors);
        })) : null);
      }));
    }
  }, {
    key: "render",
    value: function render() {
      var _this4 = this;

      var showNeedsWork = this.state.showNeedsWork;
      var posts = this.props.posts;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Posts (", posts.length, ")"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "admin__log-out",
        onClick: this.onNewPostClick
      }, "New Post"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_Search__WEBPACK_IMPORTED_MODULE_3__["default"], {
        showing: posts.length,
        total: posts.length
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "admin__filters"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "admin__filter"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        onChange: function onChange() {
          return _this4.setState({
            showNeedsWork: !showNeedsWork
          });
        },
        value: showNeedsWork
      }), "Needs work")), showNeedsWork ? this.renderNeedsWork() : this.renderAll());
    }
  }]);

  return PostsList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ })

})
//# sourceMappingURL=admin.js.f201863d360b22564f77.hot-update.js.map