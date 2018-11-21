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

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  flex-grow: 1;\n  font-size: 20px;\n  font-weight: bold;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var BIBLE_BOOKS = {
  Genesis: true,
  Exodus: true,
  Leviticus: true,
  Numbers: true,
  Deuteronomy: true,
  Joshua: true,
  Judges: true,
  Ruth: true,
  "1 Samuel": true,
  "2 Samuel": true,
  "1 Kings": true,
  "2 Kings": true,
  "1 Chronicles": true,
  "2 Chronicles": true,
  Ezra: true,
  Nehemiah: true,
  Esther: true,
  Job: true,
  Psalms: true,
  Proverbs: true,
  Ecclesiastes: true,
  "Song of Solomon": true,
  Isaiah: true,
  Jeremiah: true,
  Lamentations: true,
  Ezekiel: true,
  Daniel: true,
  Hosea: true,
  Joel: true,
  Amos: true,
  Obadiah: true,
  Jonah: true,
  Micah: true,
  Nahum: true,
  Habakkuk: true,
  Zephaniah: true,
  Haggai: true,
  Zechariah: true,
  Malachi: true,
  Matthew: true,
  Mark: true,
  Luke: true,
  John: true,
  Acts: true,
  Romans: true,
  "1 Corinthians": true,
  "2 Corinthians": true,
  Galatians: true,
  Ephesians: true,
  Philippians: true,
  Colossians: true,
  "1 Thessalonians": true,
  "2 Thessalonians": true,
  "1 Timothy": true,
  "2 Timothy": true,
  Titus: true,
  Philemon: true,
  Hebrews: true,
  James: true,
  "1 Peter": true,
  "2 Peter": true,
  "1 John": true,
  "2 John": true,
  "3 John": true,
  Jude: true,
  Revelation: true
};
var PostItem = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject());
var PostInfo = styled_components__WEBPACK_IMPORTED_MODULE_2__["default"].div(_templateObject2());

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

      if (!post.published) {
        errors.push("Not published");
      }

      if (!post.tags.length) {
        errors.push("No tags");
      }

      if (!post.mapped_related_posts_tags.length) {
        errors.push("No related posts");
      }

      if (!post.description || post.description.length < 160) {
        errors.push("Needs description");
      }

      if (post.slug.indexOf(" ") !== -1) {
        errors.push("Slug has space");
      }

      return errors;
    }
  }, {
    key: "renderAll",
    value: function renderAll() {
      var _this2 = this;

      this.props.posts.sort(function (a, b) {
        return new Date(b.updated_at) - new Date(a.updated_at);
      });
      return this.props.posts.map(function (post) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostItem, {
          key: post.id,
          onClick: function onClick() {
            return _this2.props.onSetPost(post);
          }
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(PostInfo, null, post.title), post.image_url_small ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
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
        if (tag.slug === "apologetics" || tag.slug === "theology" || BIBLE_BOOKS[tag.title]) {
          return null;
        }

        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          key: tag.id,
          className: "writing"
        }, Object(lodash__WEBPACK_IMPORTED_MODULE_1__["some"])(tag.post_slugs, function (slug) {
          return _this3.needsWork(postsBySlug[slug]).length;
        }) ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", {
          className: "nomargin"
        }, tag.title), tag.post_slugs.map(function (slug) {
          var post = postsBySlug[slug];

          var needsWork = _this3.needsWork(post);

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
            key: "".concat(tag.slug, "-\n                        **").concat(post.slug),
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
//# sourceMappingURL=admin.js.7e6f4e9d93d1ec328c0b.hot-update.js.map