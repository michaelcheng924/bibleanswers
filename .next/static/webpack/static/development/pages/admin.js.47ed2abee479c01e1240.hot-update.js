webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./components/PostEditor.js":
/*!**********************************!*\
  !*** ./components/PostEditor.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-textarea-autosize */ "./node_modules/react-textarea-autosize/dist/react-textarea-autosize.esm.browser.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "./node_modules/react-select/dist/react-select.esm.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-simple-code-editor */ "./node_modules/react-simple-code-editor/lib/index.js");
/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-core */ "./node_modules/prismjs/components/prism-core.js");
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-clike */ "./node_modules/prismjs/components/prism-clike.js");
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "./node_modules/prismjs/components/prism-javascript.js");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_writing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/writing */ "./utils/writing.js");
/* harmony import */ var _ReadingContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ReadingContainer */ "./components/ReadingContainer.js");
/* harmony import */ var _CreateTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CreateTag */ "./components/CreateTag.js");
/* harmony import */ var _constants_confessions_london_baptist__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! ../constants/confessions/london-baptist */ "./constants/confessions/london-baptist.js");
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














var HTML_PRESS_MAPPINGS = [{
  key1: 17,
  key2: 72,
  addition: "<h3></h3>",
  cursorOffset: 4
}, {
  key1: 17,
  key2: 74,
  addition: "<h4></h4>",
  cursorOffset: 4
}, {
  key1: 17,
  key2: 80,
  addition: "<p></p>",
  cursorOffset: 3
}, {
  key1: 17,
  key2: 66,
  addition: "<blockquote></blockquote>",
  cursorOffset: 12
}, {
  key1: 17,
  key2: 83,
  addition: "<strong></strong>",
  cursorOffset: 8
}, {
  key1: 17,
  key2: 85,
  addition: "<ul>\n    <li></li>\n  </ul>",
  cursorOffset: 13
}, {
  key1: 17,
  key2: 79,
  addition: "<ol>\n    <li></li>\n  </ol>",
  cursorOffset: 13
}, {
  key1: 17,
  key2: 76,
  addition: "<li></li>",
  cursorOffset: 4
}, {
  key1: 17,
  key2: 70,
  addition: ' class="first"',
  cursorOffset: 15,
  nowrap: true
}];

var PostEditor =
/*#__PURE__*/
function (_Component) {
  _inherits(PostEditor, _Component);

  function PostEditor(props) {
    var _this;

    _classCallCheck(this, PostEditor);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(PostEditor).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "handleKeyPress", function (e) {
      _this.keys[e.keyCode] = e.type === "keydown";

      if (_this.keys[17] && _this.keys[90]) {
        _this.onSave();
      }

      if (_this.keys[17] && _this.keys[65]) {
        _this.props.onSetPost(null);
      }
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      var post = _this.state.post;
      var _event$target = event.target,
          name = _event$target.name,
          value = _event$target.value;

      var updatedPost = _objectSpread({}, post, _defineProperty({}, name, value));

      if (name === "slug") {
        updatedPost.url = "/answers/".concat(value);
      }

      _this.setState({
        post: updatedPost
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onHtmlChange", function (html) {
      _this.setState({
        post: _objectSpread({}, _this.state.post, {
          html: html
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onHtmlPress", function (e) {
      e.persist();
      var post = _this.state.post;
      var index = e.target.selectionStart;
      _this.keys[e.keyCode] = e.type === "keydown";
      var done = false;
      HTML_PRESS_MAPPINGS.forEach(function (item) {
        if (done) {
          return;
        }

        var key1 = item.key1,
            key2 = item.key2,
            addition = item.addition,
            cursorOffset = item.cursorOffset;

        if (_this.keys[key1] && _this.keys[key2]) {
          var newHtml = "".concat(post.html.slice(0, index)).concat(addition).concat(post.html.slice(index));

          _this.setState({
            post: _objectSpread({}, post, {
              html: newHtml
            })
          }, function () {
            setTimeout(function () {
              e.target.selectionStart = index + cursorOffset;
              e.target.selectionEnd = index + cursorOffset;
            });
          });

          done = true;
        }
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelectChange", function (value) {
      var newTagsList = value.map(function (tag) {
        return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_this.props.tags, function (tagData) {
          return tagData.id === tag.value;
        });
      });

      _this.setState({
        post: _objectSpread({}, _this.state.post, {
          tags: newTagsList
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSelectRelatedChange", function (value) {
      _this.setState({
        post: _objectSpread({}, _this.state.post, {
          mapped_related_posts_tags: value.map(function (tag) {
            return Object(lodash__WEBPACK_IMPORTED_MODULE_4__["find"])(_this.props.tags, function (tagData) {
              return tagData.id === tag.value;
            });
          })
        })
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPublishedChange", function () {
      var post = _this.state.post;

      var updatedPost = _objectSpread({}, post, {
        published: !post.published
      });

      _this.setState({
        post: updatedPost
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSave", function () {
      var _this$props = _this.props,
          headers = _this$props.headers,
          onFetchPostsTags = _this$props.onFetchPostsTags;
      var post = _this.state.post;

      if (post.published && (!post.subtitle || !post.date_added)) {
        _this.setState({
          error: true
        });

        return;
      }

      var finalPost = _objectSpread({}, post, {
        tag_ids: post.tags.map(function (tag) {
          return tag.id;
        }),
        related_posts_tags: post.mapped_related_posts_tags.map(function (tag) {
          return tag.id;
        }).join(",")
      });

      delete finalPost.tags;
      var method = "post";
      var url = "https://bibleanswersapi.herokuapp.com/posts";

      if (post.id) {
        method = "patch";
        url = "https://bibleanswersapi.herokuapp.com/posts/".concat(post.id);
      }

      _this.setState({
        saving: true
      });

      axios__WEBPACK_IMPORTED_MODULE_2___default.a[method](url, finalPost, headers).then(function (response) {
        _this.setState({
          success: true
        }, function () {
          setTimeout(function () {
            _this.setState({
              saving: false,
              success: false,
              post: response.data
            });
          }, 500);
        });

        onFetchPostsTags();
      }).catch(function () {
        _this.setState({
          error: true,
          saving: false
        });
      });
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "deletePost", function () {
      var confirm = window.confirm("Are you sure?");

      if (confirm) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete("https://bibleanswersapi.herokuapp.com/posts/".concat(_this.state.post.id)).then(function () {
          _this.props.onFetchPostsTags().then(function () {
            _this.props.history.push("/admin");
          });
        });
      }
    });

    _this.keys = {};
    _this.state = {
      post: props.post,
      saving: false,
      success: false,
      error: false
    };
    return _this;
  }

  _createClass(PostEditor, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      window.scrollTo(0, 0);
      document.addEventListener("keydown", this.handleKeyPress);
      document.addEventListener("keyup", this.handleKeyPress);
      _constants_confessions_london_baptist__WEBPACK_IMPORTED_MODULE_12__["default"].chapters.forEach(function (item, index) {
        if (index > 1) {
          axios__WEBPACK_IMPORTED_MODULE_2___default.a.post("https://bibleanswersapi.herokuapp.com/posts", {
            slug: item.slug,
            url: "/confessions/".concat(item.slug),
            image_url_small: "https://i.imgur.com/AOAnpap.png",
            date_added: "2018-11-19",
            subtitle: "Chapter ".concat(item.chapter, ": ").concat(item.title),
            tag_ids: [2, 4],
            related_posts_tags: "4"
          }, _this2.props.headers);
        }
      });
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(prevProps) {
      if (!prevProps.post.id && this.props.post.id) {
        this.setState({
          post: this.props.post
        });
      }
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this.props.onFetchPostsTags();
      document.removeEventListener("keydown", this.handleKeyPress);
      document.removeEventListener("keyup", this.handleKeyPress);
    }
  }, {
    key: "getMappedTags",
    value: function getMappedTags(tags) {
      if (!tags) {
        return [];
      }

      return tags.map(function (tag) {
        return {
          label: tag.title,
          value: tag.id
        };
      });
    }
  }, {
    key: "renderSaveButtons",
    value: function renderSaveButtons() {
      var _this$state = this.state,
          error = _this$state.error,
          saving = _this$state.saving,
          success = _this$state.success;
      var status = null;

      if (saving) {
        status = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
          src: "https://i.imgur.com/P7fXP4s.gif",
          style: {
            height: 30,
            width: 30
          }
        });
      }

      if (success || error) {
        status = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            background: success ? "#43A047" : "#F44336",
            color: "#fff",
            padding: "5px 10px"
          }
        }, success ? "SUCCESS!" : "ERROR!");
      }

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "admin__save-buttons"
      }, status, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "checkbox",
        onChange: this.onPublishedChange,
        checked: this.state.post.published
      }), "Published", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "small",
        onClick: this.onSave
      }, "Save"));
    }
  }, {
    key: "renderHtml",
    value: function renderHtml() {
      var _this3 = this;

      var post = this.state.post;
      var modifiedContent = Object(_utils_writing__WEBPACK_IMPORTED_MODULE_9__["getModifiedContent"])(post);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-editor__html-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "post-editor__html-content",
        value: post.html,
        onValueChange: this.onHtmlChange,
        onKeyDown: this.onHtmlPress,
        onKeyUp: this.onHtmlPress,
        highlight: function highlight(code) {
          return Object(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_6__["highlight"])(code, prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_6__["languages"].js);
        },
        padding: 10,
        style: {
          fontFamily: '"Fira code", "Fira Mono", monospace',
          fontSize: 16
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-editor__html-content",
        dangerouslySetInnerHTML: {
          __html: modifiedContent
        },
        ref: function ref(htmlEl) {
          return _this3.htmlEl = htmlEl;
        }
      })), this.htmlEl && this.htmlEl.innerText.split(" ").length);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          headers = _this$props2.headers,
          onSetPost = _this$props2.onSetPost,
          tags = _this$props2.tags;
      var post = this.state.post;
      var id = post.id,
          slug = post.slug,
          url = post.url,
          title = post.title,
          description = post.description,
          subtitle = post.subtitle,
          image_url = post.image_url,
          image_url_small = post.image_url_small,
          references = post.references,
          date_added = post.date_added,
          mapped_related_posts_tags = post.mapped_related_posts_tags;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: function onClick() {
          return onSetPost(null);
        }
      }, "Admin Home"), this.renderSaveButtons(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_ReadingContainer__WEBPACK_IMPORTED_MODULE_10__["default"], {
        style: {
          margin: "20px auto"
        }
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "ID: ", id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "slug: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: this.onChange,
        name: "slug",
        placeholder: "slug",
        value: slug
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: this.onChange,
        name: "url",
        placeholder: "url",
        value: url || ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "title: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: this.onChange,
        name: "title",
        placeholder: "Title",
        value: title
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "description: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: this.onChange,
        name: "description",
        placeholder: "Description",
        value: description || ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, 160 - (description || "").length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "tags: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: this.getMappedTags(post.tags),
        isMulti: true,
        name: "colors",
        onChange: this.onSelectChange,
        options: this.getMappedTags(tags)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "related_posts_tags: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3__["default"], {
        value: this.getMappedTags(mapped_related_posts_tags),
        isMulti: true,
        name: "colors",
        onChange: this.onSelectRelatedChange,
        options: this.getMappedTags(tags)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "subtitle: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: this.onChange,
        name: "subtitle",
        placeholder: "Subtitle",
        value: subtitle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "date_added: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: this.onChange,
        name: "date_added",
        placeholder: "date_added",
        value: date_added
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateTag__WEBPACK_IMPORTED_MODULE_11__["default"], {
        headers: headers
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-editor__images"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "image_url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: this.onChange,
        name: "image_url",
        placeholder: "image_url",
        value: image_url || ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: image_url,
        alt: title,
        style: {
          width: 300
        }
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "image_url_small: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: this.onChange,
        name: "image_url_small",
        placeholder: "image_url_small",
        value: image_url_small || ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: image_url_small,
        alt: title,
        style: {
          width: 80
        }
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "references: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__["default"], {
        onChange: this.onChange,
        name: "references",
        placeholder: "references",
        value: references || ""
      })), this.renderHtml(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        className: "small danger",
        onClick: this.deletePost
      }, "Delete"));
    }
  }]);

  return PostEditor;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (PostEditor);

/***/ })

})
//# sourceMappingURL=admin.js.47ed2abee479c01e1240.hot-update.js.map