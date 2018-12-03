module.exports =
/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = require('../../../ssr-module-cache.js');
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		var threw = true;
/******/ 		try {
/******/ 			modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 			threw = false;
/******/ 		} finally {
/******/ 			if(threw) delete installedModules[moduleId];
/******/ 		}
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = 3);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/AdminMain.js":
/*!*********************************!*\
  !*** ./components/AdminMain.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-textarea-autosize */ "react-textarea-autosize");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__);
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
      }, showBackup ? "Hide" : "Show", " backup"), showBackup ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
          onSetTag = _this$props.onSetTag,
          posts = _this$props.posts,
          postsBySlug = _this$props.postsBySlug,
          tags = _this$props.tags;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, this.renderBackup(), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "admin__lists"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminPostsList__WEBPACK_IMPORTED_MODULE_2__["default"], {
        headers: headers,
        onFetchPostsTags: onFetchPostsTags,
        onSetPost: onSetPost,
        posts: posts,
        postsBySlug: postsBySlug,
        tags: tags
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_AdminTagsList__WEBPACK_IMPORTED_MODULE_3__["default"], {
        headers: headers,
        onSetTag: onSetTag,
        tags: tags
      })));
    }
  }]);

  return AdminMain;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (AdminMain);

/***/ }),

/***/ "./components/AdminPostsList.js":
/*!**************************************!*\
  !*** ./components/AdminPostsList.js ***!
  \**************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return PostsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
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
var PostItem = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var PostInfo = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());

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
        if (tag.slug === "apologetics" || tag.slug === "theology" || BIBLE_BOOKS[tag.title] || tag.slug === "creeds-confessions") {
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



/***/ }),

/***/ "./components/AdminStyles.js":
/*!***********************************!*\
  !*** ./components/AdminStyles.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\ntextarea {\n  font-size: 16px;\n  padding: 4px 8px;\n  width: 100%;\n}\n\n.admin__login {\n  margin-bottom: 20px;\n  text-align: center;\n}\n\n.admin__login-input {\n  margin-bottom: 10px;\n  width: 250px;\n}\n\n.admin__log-out {\n  border: 0;\n  font-size: 12px;\n  padding: 2px 4px !important;\n}\n\n.admin__update-sitemap {\n  background: #F8BBD0;\n  padding: 20px;\n}\n\n.admin__lists {\n  display: flex;\n  justify-content: space-around;\n}\n\n.admin__filters {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.admin__filter {\n  align-items: center;\n  display: flex;\n  margin-right: 15px;\n}\n\n.admin__save-buttons {\n  align-items: center;\n  display: flex;\n  position: fixed;\n  right: 0;\n  top: 0;\n}\n\n.admin__save-buttons button {\n  margin-left: 10px !important;\n}\n\n.admin__post-selects {\n  display: flex;\n  flex-wrap: wrap;\n}\n\n.admin__post-select {\n  margin-right: 20px;\n  width: 300px;\n}\n\n.post-editor__images {\n  background: #B3E5FC;\n  display: flex;\n  padding: 20px;\n}\n\n.post-editor__html-container {\n  display: flex;\n  justify-content: space-around;\n}\n\n.post-editor__html-content {\n  border: 1px solid rgba(0, 0, 0, .54);\n  flex-grow: 1;\n  font-size: 18px;\n  margin-top: auto;\n  max-width: 700px;\n  padding-left: 20px;\n}\n\n.post-editor__html-editor {\n  font-family: monospace;\n}\n\n.admin__create-tag {\n  background: #BDBDBD;\n  padding: 30px;\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var AdminStyles = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (AdminStyles);

/***/ }),

/***/ "./components/AdminTagsList.js":
/*!*************************************!*\
  !*** ./components/AdminTagsList.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CreateTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTag */ "./components/CreateTag.js");



var TagsList = function TagsList(_ref) {
  var headers = _ref.headers,
      onSetTag = _ref.onSetTag,
      tags = _ref.tags;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Tags"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateTag__WEBPACK_IMPORTED_MODULE_1__["default"], {
    headers: headers
  }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
      key: tag.id,
      className: "admin__list-post",
      onClick: function onClick() {
        return onSetTag(tag);
      }
    }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, tag.title, " (", tag.post_slugs.length, ")"), tag.description.length < 160 || tag.slug.indexOf(" ") !== -1 || !tag.date_added || !tag.image_url ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
      style: {
        color: "red"
      }
    }, "Has error") : null));
  })));
};

/* harmony default export */ __webpack_exports__["default"] = (TagsList);

/***/ }),

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: AmpContainer, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpContainer", function() { return AmpContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  margin: 0;\n  overflow-x: auto;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var AmpContainer = function AmpContainer(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContainer, null, children);
};

var Container = function Container(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1997678190" + " " + "container"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1997678190",
    css: ".container.jsx-1997678190{color:rgba(0,0,0,0.84);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUdtQyx1QkFDakIsU0FDQyxVQUMrQyxzREFDM0QiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbmA7XG5cbmNvbnN0IEFtcENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPFN0eWxlZENvbnRhaW5lcj57Y2hpbGRyZW59PC9TdHlsZWRDb250YWluZXI+XG4pO1xuXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IHsgQW1wQ29udGFpbmVyLCBDb250YWluZXIgfTtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/Container.js */"
  }));
};



/***/ }),

/***/ "./components/CreateTag.js":
/*!*********************************!*\
  !*** ./components/CreateTag.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "react-textarea-autosize");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__);
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





var CreateTag =
/*#__PURE__*/
function (_Component) {
  _inherits(CreateTag, _Component);

  function CreateTag() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, CreateTag);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(CreateTag)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      slug: "",
      url: "",
      title: "",
      description: "",
      subtitle: "",
      image_url: "",
      date_added: ""
    });

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

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "createTag", function () {
      var _this$props = _this.props,
          headers = _this$props.headers,
          onFetchPostsTags = _this$props.onFetchPostsTags;
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://bibleanswersapi.herokuapp.com/tags", _this.state, headers).then(function () {
        onFetchPostsTags();

        _this.setState({
          slug: "",
          url: "",
          title: "",
          description: "",
          subtitle: "",
          image_url: "",
          date_added: ""
        });
      });
    });

    return _this;
  }

  _createClass(CreateTag, [{
    key: "render",
    value: function render() {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Create Tag"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "slug: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "slug",
        placeholder: "slug",
        value: slug
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        disabled: true,
        onChange: this.onChange,
        name: "url",
        placeholder: "url",
        value: url
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "title: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "title",
        placeholder: "title",
        value: title
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "description: ", 160 - description.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "description",
        placeholder: "description",
        value: description
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "subtitle: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "subtitle",
        placeholder: "subtitle",
        value: subtitle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "date_added: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "date_added",
        placeholder: "date_added",
        value: date_added
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "image_url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "image_url",
        placeholder: "image_url",
        value: image_url
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
        src: image_url,
        alt: title,
        style: {
          width: 200
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", {
        onClick: this.createTag
      }, "Create"));
    }
  }]);

  return CreateTag;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (CreateTag);

/***/ }),

/***/ "./components/GlobalStyle.js":
/*!***********************************!*\
  !*** ./components/GlobalStyle.js ***!
  \***********************************/
/*! exports provided: createAmpGlobalStyle */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "createAmpGlobalStyle", function() { return createAmpGlobalStyle; });
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  .writing h3 {\n    font-size: 34px;\n    line-height: 1.15;\n    margin: 0;\n    margin-top: 56px;\n  }\n  \n  .writing h4 {\n    font-size: 26px;\n    line-height: 1.22;\n    margin: 0;\n    margin-top: 30px;\n  }\n  \n  .writing h3 + p,\n  .writing h3 + ol,\n  .writing h3 + ul,\n  .writing h3 + blockquote,\n  .writing h4 + p,\n  .writing h4 + ol,\n  .writing h4 + ul,\n  .writing h4 + blockquote {\n    margin-top: 8px;\n  }\n  \n  .writing p,\n  .writing ol,\n  .writing ul,\n  .writing blockquote {\n    font-size: 21px;\n    line-height: 1.58;\n    margin: 0;\n    margin-top: 29px;\n  }\n  \n  .writing ol,\n  .writing ul {\n    padding: 0 40px;\n  }\n  \n  .writing li {\n    margin-bottom: 10px;\n  }\n  \n  .writing li:last-child {\n    margin-bottom: 0;\n  }\n  \n  .writing blockquote {\n    border-left: 3px solid rgba(0, 0, 0, .84);\n    font-style: italic;\n    left: -20px;\n    padding-left: 20px;\n    position: relative;\n  }\n  \n  .writing .first {\n    margin-top: 8px;\n  }\n  \n  .writing .nomargin {\n    margin-top: 0;\n  }\n  \n  .writing .indent {\n    margin-left: 20px;\n  }\n  \n  .writing .image {\n    margin-top: 29px;\n  }\n  \n  .writing .image-left {\n    float: left;\n    margin-right: 20px;\n  }\n  \n  .writing .image-right {\n    float: right;\n    margin-left: 20px;\n  }\n  \n  .writing a {\n    color: #689f38;\n    text-decoration: none;\n  }\n  \n  .writing .reference {\n    font-size: 14px;\n    margin-left: 2px;\n    position: relative;\n    top: -5px;\n  }\n\n  .divider {\n    display: block;\n    font-size: 35px;\n    letter-spacing: 0.6em;\n    text-align: center;\n  }\n  \n  @media screen and (max-width: 768px) {\n    .writing h3 {\n      font-size: 30px;\n      margin-top: 28px;\n    }\n  \n    .writing h4 {\n      font-size: 24px;\n      margin-top: 22px;\n    }\n  \n    .writing p,\n    .writing ol {\n      font-size: 18px;\n      margin-top: 21px;\n    }\n  \n    .writing blockquote {\n      font-size: 18px;\n      margin-top: 21px;\n    }\n  \n    .writing .image {\n      margin-top: 21px;\n    }\n  }\n\n  ", "\n  "]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var RESURRECTION_HARMONY_STYLES = "/* RESURRECTION HARMONY */\n\n.resurrection-scripture-container {\n  display: flex;\n}\n\n.resurrection-scripture {\n  flex-grow: 1;\n  margin-top: 20px;\n  min-width: 320px;\n}\n\n.resurrection-scripture-title {\n  background: #757575;\n  border-right: 1px solid #fff;\n  color: #fff;\n  padding: 5px 10px;\n}\n\n.resurrection-scripture-text {\n  border: 1px solid #BDBDBD;\n  border-top: 0;\n  padding: 5px 10px;\n}\n\n.scripture-verse {\n  font-size: 13px;\n  font-weight: bold;\n  position: relative;\n  top: -5px;\n}\n\n.writing .purple {\n  color: #9C27B0;\n  font-weight: bold;\n}\n\n.writing .red {\n  color: #F44336;\n  font-weight: bold;\n}\n\n.writing .teal {\n  color: #009688;\n  font-weight: bold;\n}\n\n.writing .orange {\n  color: #FF5722;\n  font-weight: bold;\n}\n\n.writing .orange-1 {\n  color: #EF6C00;\n  font-weight: bold;\n}\n\n.writing .blue {\n  color: #2196F3;\n  font-weight: bold;\n}\n\n.writing .indigo {\n  color: #3F51B5;\n  font-weight: bold;\n}\n\n.writing .pink {\n  color: #E91E63;\n  font-weight: bold;\n}\n\n.writing .cyan {\n  color: #0097A7;\n  font-weight: bold;\n}\n\n.writing .green {\n  color: #43A047;\n  font-weight: bold;\n}\n\n.writing .brown {\n  color: #795548;\n  font-weight: bold;\n}";

function createAmpGlobalStyle(slug) {
  return Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject(), slug === "resurrection-narratives-harmony" ? RESURRECTION_HARMONY_STYLES : "");
}



/***/ }),

/***/ "./components/Login.js":
/*!*****************************!*\
  !*** ./components/Login.js ***!
  \*****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Login; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
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




var Login =
/*#__PURE__*/
function (_Component) {
  _inherits(Login, _Component);

  function Login() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Login);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Login)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      pw: "",
      username: ""
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onSubmit", function (event) {
      event.preventDefault();
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://bibleanswersapi.herokuapp.com/login", {
        password: _this.state.pw,
        username: _this.state.username
      }).then(function (response) {
        if (response.data.success) {
          _this.props.onLoginSuccess(response.data.token);
        }
      });
    });

    return _this;
  }

  _createClass(Login, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      var _this2 = this;

      var token = localStorage.getItem("bible-answers-token");

      if (token) {
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("https://bibleanswersapi.herokuapp.com/checktoken", {
          token: token
        }).then(function (response) {
          if (response.data.success) {
            _this2.props.onLoginSuccess(token);
          }
        });
      }
    }
  }, {
    key: "render",
    value: function render() {
      var _this3 = this;

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("form", {
        className: "admin__login",
        onSubmit: this.onSubmit
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        onChange: function onChange(event) {
          return _this3.setState({
            username: event.target.value
          });
        },
        placeholder: "Username",
        value: this.state.username
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        type: "password",
        onChange: function onChange(event) {
          return _this3.setState({
            pw: event.target.value
          });
        },
        placeholder: "Password",
        value: this.state.pw
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("button", null, "Log in"));
    }
  }]);

  return Login;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/PostEditor.js":
/*!**********************************!*\
  !*** ./components/PostEditor.js ***!
  \**********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-textarea-autosize */ "react-textarea-autosize");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-select */ "react-select");
/* harmony import */ var react_select__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_select__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-simple-code-editor */ "react-simple-code-editor");
/* harmony import */ var react_simple_code_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! prismjs/components/prism-core */ "prismjs/components/prism-core");
/* harmony import */ var prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_core__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! prismjs/components/prism-clike */ "prismjs/components/prism-clike");
/* harmony import */ var prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_clike__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! prismjs/components/prism-javascript */ "prismjs/components/prism-javascript");
/* harmony import */ var prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(prismjs_components_prism_javascript__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _utils_writing__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../utils/writing */ "./utils/writing.js");
/* harmony import */ var _ReadingContainer__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./ReadingContainer */ "./components/ReadingContainer.js");
/* harmony import */ var _CreateTag__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ./CreateTag */ "./components/CreateTag.js");
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
  key2: 69,
  addition: "<em></em>",
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
  key2: 82,
  addition: '<p><a href="" rel="nofollow" target="_blank"></a></p>',
  cursorOffset: 12
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
      window.scrollTo(0, 0);
      document.addEventListener("keydown", this.handleKeyPress);
      document.addEventListener("keyup", this.handleKeyPress);
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
      var _this2 = this;

      var post = this.state.post;
      var modifiedContent = Object(_utils_writing__WEBPACK_IMPORTED_MODULE_9__["getModifiedContent"])(post);
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-editor__html-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_simple_code_editor__WEBPACK_IMPORTED_MODULE_5___default.a, {
        className: "post-editor__html-content",
        value: post.html || "",
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
          return _this2.htmlEl = htmlEl;
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "ID: ", id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "slug: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onChange: this.onChange,
        name: "slug",
        placeholder: "slug",
        value: slug
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onChange: this.onChange,
        name: "url",
        placeholder: "url",
        value: url || ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "title: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onChange: this.onChange,
        name: "title",
        placeholder: "Title",
        value: title
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "description: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onChange: this.onChange,
        name: "description",
        placeholder: "Description",
        value: description || ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, description ? 160 - (description || "").length : null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "tags: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: this.getMappedTags(post.tags),
        isMulti: true,
        name: "colors",
        onChange: this.onSelectChange,
        options: this.getMappedTags(tags)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "related_posts_tags: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
        value: this.getMappedTags(mapped_related_posts_tags),
        isMulti: true,
        name: "colors",
        onChange: this.onSelectRelatedChange,
        options: this.getMappedTags(tags)
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "subtitle: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onChange: this.onChange,
        name: "subtitle",
        placeholder: "Subtitle",
        value: subtitle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "date_added: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onChange: this.onChange,
        name: "date_added",
        placeholder: "date_added",
        value: date_added
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateTag__WEBPACK_IMPORTED_MODULE_11__["default"], {
        headers: headers
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "post-editor__images"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "image_url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      })), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "image_url_small: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
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
      }))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "references: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
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

/***/ }),

/***/ "./components/ReadingContainer.js":
/*!****************************************!*\
  !*** ./components/ReadingContainer.js ***!
  \****************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var children = _ref.children,
      style = _ref.style;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: _objectSpread({
      margin: "0 auto 20px",
      maxWidth: 740,
      padding: "0 20px",
      width: "calc(100% - 40px)"
    }, style)
  }, children);
});

/***/ }),

/***/ "./components/Search.js":
/*!******************************!*\
  !*** ./components/Search.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-icons/fa */ "react-icons/fa");
/* harmony import */ var react_icons_fa__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__);
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




var Search =
/*#__PURE__*/
function (_Component) {
  _inherits(Search, _Component);

  function Search() {
    var _getPrototypeOf2;

    var _this;

    _classCallCheck(this, Search);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = _possibleConstructorReturn(this, (_getPrototypeOf2 = _getPrototypeOf(Search)).call.apply(_getPrototypeOf2, [this].concat(args)));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "state", {
      inputFocused: false
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onChange", function (event) {
      _this.props.onChange(event.target.value);
    });

    return _this;
  }

  _createClass(Search, [{
    key: "render",
    value: function render() {
      var _this2 = this;

      var inputFocused = this.state.inputFocused;
      var _this$props = this.props,
          search = _this$props.search,
          showing = _this$props.showing,
          total = _this$props.total;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "search-container"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaSearch"], {
        style: {
          color: inputFocused ? "#039be5" : "rgba(0,0,0,.54)",
          position: "relative",
          top: 5
        }
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
        className: "search",
        onChange: this.onChange,
        onFocus: function onFocus() {
          return _this2.setState({
            inputFocused: true
          });
        },
        onBlur: function onBlur() {
          return _this2.setState({
            inputFocused: false
          });
        },
        placeholder: "Search",
        style: {
          borderBottom: inputFocused ? "1px solid #039be5" : ""
        },
        value: search
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "results"
      }, "Showing ".concat(showing, "/").concat(total, " results"))), search ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_icons_fa__WEBPACK_IMPORTED_MODULE_1__["FaTimes"], {
        style: {
          color: "#F44336",
          cursor: "pointer",
          position: "relative",
          top: 5
        },
        onClick: this.props.onClearSearch
      }) : null);
    }
  }]);

  return Search;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (Search);

/***/ }),

/***/ "./components/TagEditor.js":
/*!*********************************!*\
  !*** ./components/TagEditor.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react-textarea-autosize */ "react-textarea-autosize");
/* harmony import */ var react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2__);
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
      }, "Admin home"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Create Tag"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "slug: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "slug",
        placeholder: "slug",
        value: slug
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        disabled: true,
        onChange: this.onChange,
        name: "url",
        placeholder: "url",
        value: url
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "title: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "title",
        placeholder: "title",
        value: title
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "description: ", 160 - description.length)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "description",
        placeholder: "description",
        value: description
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "subtitle: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "subtitle",
        placeholder: "subtitle",
        value: subtitle
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "date_added: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
        onChange: this.onChange,
        name: "date_added",
        placeholder: "date_added",
        value: date_added || ""
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "image_url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
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

/***/ }),

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/keyBy */ "lodash/keyBy");
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(lodash_keyBy__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/GlobalStyle */ "./components/GlobalStyle.js");
/* harmony import */ var _components_AdminStyles__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/AdminStyles */ "./components/AdminStyles.js");
/* harmony import */ var _components_Login__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/Login */ "./components/Login.js");
/* harmony import */ var _components_AdminMain__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/AdminMain */ "./components/AdminMain.js");
/* harmony import */ var _components_PostEditor__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../components/PostEditor */ "./components/PostEditor.js");
/* harmony import */ var _components_TagEditor__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../components/TagEditor */ "./components/TagEditor.js");


function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }












var Admin = function Admin() {
  var _useReducer = Object(react__WEBPACK_IMPORTED_MODULE_1__["useReducer"])(function (state, _ref) {
    var type = _ref.type,
        payload = _ref.payload;

    switch (type) {
      case "ON_LOGIN_SUCCESS":
        return _objectSpread({}, state, payload);

      case "ON_FETCH_SUCCESS":
        return _objectSpread({}, state, payload);

      case "ON_SET_POST":
        return _objectSpread({}, state, payload);

      case "ON_SET_TAG":
        return _objectSpread({}, state, payload);

      default:
        return state;
    }
  }, {
    headers: {},
    loggedIn: false,
    post: null,
    posts: [],
    postsBySlug: {},
    tag: null,
    tags: []
  }),
      _useReducer2 = _slicedToArray(_useReducer, 2),
      state = _useReducer2[0],
      dispatch = _useReducer2[1];

  var headers = state.headers,
      post = state.post,
      posts = state.posts,
      postsBySlug = state.postsBySlug,
      tag = state.tag,
      tags = state.tags;

  var onLoginSuccess = function onLoginSuccess(token) {
    onFetchPostsTags();
    localStorage.setItem("bible-answers-token", token);
    dispatch({
      type: "ON_LOGIN_SUCCESS",
      payload: {
        headers: {
          headers: {
            Authorization: "Bearer ".concat(token)
          }
        },
        loggedIn: true
      }
    });
  };

  var onFetchPostsTags = function onFetchPostsTags() {
    return axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://bibleanswersapi.herokuapp.com/initialfetch").then(function (response) {
      var postsBySlug = lodash_keyBy__WEBPACK_IMPORTED_MODULE_3___default()(response.data.posts, "slug");
      var localStoragePost = localStorage.getItem("bible-answers-post");
      var post = localStoragePost ? postsBySlug[localStoragePost] : null;
      dispatch({
        type: "ON_FETCH_SUCCESS",
        payload: {
          post: post,
          postsBySlug: postsBySlug,
          posts: response.data.posts,
          tags: response.data.tags
        }
      });
    });
  };

  var onSetPost = function onSetPost(post) {
    if (post) {
      localStorage.setItem("bible-answers-post", post.slug);
    } else {
      localStorage.setItem("bible-answers-post", null);
    }

    dispatch({
      type: "ON_SET_POST",
      payload: {
        post: post
      }
    });
  };

  var onSetTag = function onSetTag(tag) {
    dispatch({
      type: "ON_SET_TAG",
      payload: {
        tag: tag
      }
    });
  };

  if (!state.loggedIn) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Login__WEBPACK_IMPORTED_MODULE_7__["default"], {
      onLoginSuccess: onLoginSuccess
    });
  }

  var content;

  if (post) {
    content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_PostEditor__WEBPACK_IMPORTED_MODULE_9__["default"], {
      headers: headers,
      onFetchPostsTags: onFetchPostsTags,
      onSetPost: onSetPost,
      post: post,
      tags: tags
    });
  } else if (tag) {
    content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TagEditor__WEBPACK_IMPORTED_MODULE_10__["default"], _extends({
      headers: headers,
      onFetchPostsTags: onFetchPostsTags,
      onSetTag: onSetTag
    }, tag));
  } else if (posts.length) {
    content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AdminMain__WEBPACK_IMPORTED_MODULE_8__["default"], {
      headers: headers,
      onFetchPostsTags: onFetchPostsTags,
      onSetPost: onSetPost,
      onSetTag: onSetTag,
      posts: posts,
      postsBySlug: postsBySlug,
      tags: tags
    });
  } else {
    content = react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
      src: "https://i.imgur.com/P7fXP4s.gif",
      style: {
        height: 30,
        width: 30
      }
    });
  }

  var AmpGlobalStyle = Object(_components_GlobalStyle__WEBPACK_IMPORTED_MODULE_5__["createAmpGlobalStyle"])("resurrection-narratives-harmony");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", {
    className: "jsx-2382587807"
  }, "Admin"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpGlobalStyle, {
    className: "jsx-2382587807"
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_AdminStyles__WEBPACK_IMPORTED_MODULE_6__["default"], null), content, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2382587807",
    css: ".writing.jsx-2382587807 h3.jsx-2382587807{font-size:34px;line-height:1.15;margin:0;margin-top:56px;}.writing.jsx-2382587807 h4.jsx-2382587807{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}.writing.jsx-2382587807 h3.jsx-2382587807+p.jsx-2382587807,.writing.jsx-2382587807 h3.jsx-2382587807+ol.jsx-2382587807,.writing.jsx-2382587807 h3.jsx-2382587807+ul.jsx-2382587807,.writing.jsx-2382587807 h3.jsx-2382587807+blockquote.jsx-2382587807,.writing.jsx-2382587807 h4.jsx-2382587807+p.jsx-2382587807,.writing.jsx-2382587807 h4.jsx-2382587807+ol.jsx-2382587807,.writing.jsx-2382587807 h4.jsx-2382587807+ul.jsx-2382587807,.writing.jsx-2382587807 h4.jsx-2382587807+blockquote.jsx-2382587807{margin-top:8px;}.writing.jsx-2382587807 p.jsx-2382587807,.writing.jsx-2382587807 ol.jsx-2382587807,.writing.jsx-2382587807 ul.jsx-2382587807,.writing.jsx-2382587807 blockquote.jsx-2382587807{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.writing.jsx-2382587807 ol.jsx-2382587807,.writing.jsx-2382587807 ul.jsx-2382587807{padding:0 40px;}.writing.jsx-2382587807 li.jsx-2382587807{margin-bottom:10px;}.writing.jsx-2382587807 li.jsx-2382587807:last-child{margin-bottom:0;}.writing.jsx-2382587807 blockquote.jsx-2382587807{border-left:3px solid rgba(0,0,0,0.84);font-style:italic;left:-20px;padding-left:20px;position:relative;}.writing.jsx-2382587807 .first.jsx-2382587807{margin-top:8px;}.writing.jsx-2382587807 .nomargin.jsx-2382587807{margin-top:0;}.writing.jsx-2382587807 .indent.jsx-2382587807{margin-left:20px;}.writing.jsx-2382587807 .image.jsx-2382587807{margin-top:29px;}.writing.jsx-2382587807 .image-left.jsx-2382587807{float:left;margin-right:20px;}.writing.jsx-2382587807 .image-right.jsx-2382587807{float:right;margin-left:20px;}.writing.jsx-2382587807 a.jsx-2382587807{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}.writing.jsx-2382587807 .scripture.jsx-2382587807{color:#039be5;}.writing.jsx-2382587807 .reference.jsx-2382587807{font-size:14px;margin-left:2px;position:relative;top:-5px;}@media screen and (max-width:768px){.writing.jsx-2382587807 h3.jsx-2382587807{font-size:30px;margin-top:28px;}.writing.jsx-2382587807 h4.jsx-2382587807{font-size:24px;margin-top:22px;}.writing.jsx-2382587807 p.jsx-2382587807,.writing.jsx-2382587807 ol.jsx-2382587807{font-size:18px;margin-top:21px;}.writing.jsx-2382587807 blockquote.jsx-2382587807{font-size:18px;margin-top:21px;}.writing.jsx-2382587807 .image.jsx-2382587807{margin-top:21px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvYWRtaW4uanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBMEtrQixBQUcwQixBQU9BLEFBY0EsQUFPQSxBQVFBLEFBSUksQUFJSCxBQUkwQixBQVEzQixBQUlGLEFBSUksQUFJRCxBQUlMLEFBS0MsQUFLRSxBQUtBLEFBSUMsQUFRRSxBQUtBLEFBTUEsQUFLQSxBQUtDLFdBL0NBLENBS0QsQ0FqQm5CLENBc0J1QixBQUt2QixDQXZGbUIsQUFPQSxBQWNuQixBQU9tQixBQVFuQixBQW9CQSxBQW1Da0IsQUFRRSxBQUtBLEFBTUEsQUFLQSxDQXZFcEIsQUF3QkEsQUFvREUsQ0F4REYsRUF4QkEsVUFpQ0EsQUFLQSxFQWNvQixBQVFsQixBQUtBLEFBTUEsQUFLQSxDQW5IUyxBQU9BLEFBcUJBLE9BbUJTLEVBOUNGLEFBT0EsQUFxQkEsUUErRFAsUUExRlgsQUFPQSxBQXFCQSxBQWtCYSxDQTZDYixNQVhBLElBakNvQixrQkFDQSxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9wYWdlcy9hZG1pbi5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VSZWR1Y2VyIH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgYXhpb3MgZnJvbSBcImF4aW9zXCI7XG5pbXBvcnQga2V5QnkgZnJvbSBcImxvZGFzaC9rZXlCeVwiO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi4vY29tcG9uZW50cy9Db250YWluZXJcIjtcbmltcG9ydCB7IGNyZWF0ZUFtcEdsb2JhbFN0eWxlIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvR2xvYmFsU3R5bGVcIjtcbmltcG9ydCBBZG1pblN0eWxlcyBmcm9tIFwiLi4vY29tcG9uZW50cy9BZG1pblN0eWxlc1wiO1xuaW1wb3J0IExvZ2luIGZyb20gXCIuLi9jb21wb25lbnRzL0xvZ2luXCI7XG5pbXBvcnQgQWRtaW5NYWluIGZyb20gXCIuLi9jb21wb25lbnRzL0FkbWluTWFpblwiO1xuaW1wb3J0IFBvc3RFZGl0b3IgZnJvbSBcIi4uL2NvbXBvbmVudHMvUG9zdEVkaXRvclwiO1xuaW1wb3J0IFRhZ0VkaXRvciBmcm9tIFwiLi4vY29tcG9uZW50cy9UYWdFZGl0b3JcIjtcblxuY29uc3QgQWRtaW4gPSAoKSA9PiB7XG4gIGxldCBbc3RhdGUsIGRpc3BhdGNoXSA9IHVzZVJlZHVjZXIoXG4gICAgKHN0YXRlLCB7IHR5cGUsIHBheWxvYWQgfSkgPT4ge1xuICAgICAgc3dpdGNoICh0eXBlKSB7XG4gICAgICAgIGNhc2UgXCJPTl9MT0dJTl9TVUNDRVNTXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJPTl9GRVRDSF9TVUNDRVNTXCI6XG4gICAgICAgICAgcmV0dXJuIHtcbiAgICAgICAgICAgIC4uLnN0YXRlLFxuICAgICAgICAgICAgLi4ucGF5bG9hZFxuICAgICAgICAgIH07XG4gICAgICAgIGNhc2UgXCJPTl9TRVRfUE9TVFwiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIC4uLnBheWxvYWRcbiAgICAgICAgICB9O1xuICAgICAgICBjYXNlIFwiT05fU0VUX1RBR1wiOlxuICAgICAgICAgIHJldHVybiB7XG4gICAgICAgICAgICAuLi5zdGF0ZSxcbiAgICAgICAgICAgIC4uLnBheWxvYWRcbiAgICAgICAgICB9O1xuICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgIHJldHVybiBzdGF0ZTtcbiAgICAgIH1cbiAgICB9LFxuICAgIHtcbiAgICAgIGhlYWRlcnM6IHt9LFxuICAgICAgbG9nZ2VkSW46IGZhbHNlLFxuICAgICAgcG9zdDogbnVsbCxcbiAgICAgIHBvc3RzOiBbXSxcbiAgICAgIHBvc3RzQnlTbHVnOiB7fSxcbiAgICAgIHRhZzogbnVsbCxcbiAgICAgIHRhZ3M6IFtdXG4gICAgfVxuICApO1xuXG4gIGNvbnN0IHsgaGVhZGVycywgcG9zdCwgcG9zdHMsIHBvc3RzQnlTbHVnLCB0YWcsIHRhZ3MgfSA9IHN0YXRlO1xuXG4gIGNvbnN0IG9uTG9naW5TdWNjZXNzID0gdG9rZW4gPT4ge1xuICAgIG9uRmV0Y2hQb3N0c1RhZ3MoKTtcblxuICAgIGxvY2FsU3RvcmFnZS5zZXRJdGVtKFwiYmlibGUtYW5zd2Vycy10b2tlblwiLCB0b2tlbik7XG5cbiAgICBkaXNwYXRjaCh7XG4gICAgICB0eXBlOiBcIk9OX0xPR0lOX1NVQ0NFU1NcIixcbiAgICAgIHBheWxvYWQ6IHtcbiAgICAgICAgaGVhZGVyczoge1xuICAgICAgICAgIGhlYWRlcnM6IHtcbiAgICAgICAgICAgIEF1dGhvcml6YXRpb246IGBCZWFyZXIgJHt0b2tlbn1gXG4gICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBsb2dnZWRJbjogdHJ1ZVxuICAgICAgfVxuICAgIH0pO1xuICB9O1xuXG4gIGNvbnN0IG9uRmV0Y2hQb3N0c1RhZ3MgPSAoKSA9PiB7XG4gICAgcmV0dXJuIGF4aW9zXG4gICAgICAuZ2V0KFwiaHR0cHM6Ly9iaWJsZWFuc3dlcnNhcGkuaGVyb2t1YXBwLmNvbS9pbml0aWFsZmV0Y2hcIilcbiAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgY29uc3QgcG9zdHNCeVNsdWcgPSBrZXlCeShyZXNwb25zZS5kYXRhLnBvc3RzLCBcInNsdWdcIik7XG5cbiAgICAgICAgY29uc3QgbG9jYWxTdG9yYWdlUG9zdCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKFwiYmlibGUtYW5zd2Vycy1wb3N0XCIpO1xuXG4gICAgICAgIGNvbnN0IHBvc3QgPSBsb2NhbFN0b3JhZ2VQb3N0ID8gcG9zdHNCeVNsdWdbbG9jYWxTdG9yYWdlUG9zdF0gOiBudWxsO1xuXG4gICAgICAgIGRpc3BhdGNoKHtcbiAgICAgICAgICB0eXBlOiBcIk9OX0ZFVENIX1NVQ0NFU1NcIixcbiAgICAgICAgICBwYXlsb2FkOiB7XG4gICAgICAgICAgICBwb3N0LFxuICAgICAgICAgICAgcG9zdHNCeVNsdWcsXG4gICAgICAgICAgICBwb3N0czogcmVzcG9uc2UuZGF0YS5wb3N0cyxcbiAgICAgICAgICAgIHRhZ3M6IHJlc3BvbnNlLmRhdGEudGFnc1xuICAgICAgICAgIH1cbiAgICAgICAgfSk7XG4gICAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvblNldFBvc3QgPSBwb3N0ID0+IHtcbiAgICBpZiAocG9zdCkge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiaWJsZS1hbnN3ZXJzLXBvc3RcIiwgcG9zdC5zbHVnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oXCJiaWJsZS1hbnN3ZXJzLXBvc3RcIiwgbnVsbCk7XG4gICAgfVxuXG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJPTl9TRVRfUE9TVFwiLFxuICAgICAgcGF5bG9hZDogeyBwb3N0IH1cbiAgICB9KTtcbiAgfTtcblxuICBjb25zdCBvblNldFRhZyA9IHRhZyA9PiB7XG4gICAgZGlzcGF0Y2goe1xuICAgICAgdHlwZTogXCJPTl9TRVRfVEFHXCIsXG4gICAgICBwYXlsb2FkOiB7IHRhZyB9XG4gICAgfSk7XG4gIH07XG5cbiAgaWYgKCFzdGF0ZS5sb2dnZWRJbikge1xuICAgIHJldHVybiA8TG9naW4gb25Mb2dpblN1Y2Nlc3M9e29uTG9naW5TdWNjZXNzfSAvPjtcbiAgfVxuXG4gIGxldCBjb250ZW50O1xuXG4gIGlmIChwb3N0KSB7XG4gICAgY29udGVudCA9IChcbiAgICAgIDxQb3N0RWRpdG9yXG4gICAgICAgIGhlYWRlcnM9e2hlYWRlcnN9XG4gICAgICAgIG9uRmV0Y2hQb3N0c1RhZ3M9e29uRmV0Y2hQb3N0c1RhZ3N9XG4gICAgICAgIG9uU2V0UG9zdD17b25TZXRQb3N0fVxuICAgICAgICBwb3N0PXtwb3N0fVxuICAgICAgICB0YWdzPXt0YWdzfVxuICAgICAgLz5cbiAgICApO1xuICB9IGVsc2UgaWYgKHRhZykge1xuICAgIGNvbnRlbnQgPSAoXG4gICAgICA8VGFnRWRpdG9yXG4gICAgICAgIGhlYWRlcnM9e2hlYWRlcnN9XG4gICAgICAgIG9uRmV0Y2hQb3N0c1RhZ3M9e29uRmV0Y2hQb3N0c1RhZ3N9XG4gICAgICAgIG9uU2V0VGFnPXtvblNldFRhZ31cbiAgICAgICAgey4uLnRhZ31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSBlbHNlIGlmIChwb3N0cy5sZW5ndGgpIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPEFkbWluTWFpblxuICAgICAgICBoZWFkZXJzPXtoZWFkZXJzfVxuICAgICAgICBvbkZldGNoUG9zdHNUYWdzPXtvbkZldGNoUG9zdHNUYWdzfVxuICAgICAgICBvblNldFBvc3Q9e29uU2V0UG9zdH1cbiAgICAgICAgb25TZXRUYWc9e29uU2V0VGFnfVxuICAgICAgICBwb3N0cz17cG9zdHN9XG4gICAgICAgIHBvc3RzQnlTbHVnPXtwb3N0c0J5U2x1Z31cbiAgICAgICAgdGFncz17dGFnc31cbiAgICAgIC8+XG4gICAgKTtcbiAgfSBlbHNlIHtcbiAgICBjb250ZW50ID0gKFxuICAgICAgPGltZ1xuICAgICAgICBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL1A3ZlhQNHMuZ2lmXCJcbiAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiAzMCwgd2lkdGg6IDMwIH19XG4gICAgICAvPlxuICAgICk7XG4gIH1cblxuICBjb25zdCBBbXBHbG9iYWxTdHlsZSA9IGNyZWF0ZUFtcEdsb2JhbFN0eWxlKFxuICAgIFwicmVzdXJyZWN0aW9uLW5hcnJhdGl2ZXMtaGFybW9ueVwiXG4gICk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPHRpdGxlPkFkbWluPC90aXRsZT5cbiAgICAgIDxBbXBHbG9iYWxTdHlsZSAvPlxuICAgICAgPEFkbWluU3R5bGVzIC8+XG4gICAgICB7Y29udGVudH1cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAud3JpdGluZyBoMyB7XG4gICAgICAgICAgZm9udC1zaXplOiAzNHB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA1NnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yMjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGgzICsgcCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBvbCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyB1bCxcbiAgICAgICAgLndyaXRpbmcgaDMgKyBibG9ja3F1b3RlLFxuICAgICAgICAud3JpdGluZyBoNCArIHAsXG4gICAgICAgIC53cml0aW5nIGg0ICsgb2wsXG4gICAgICAgIC53cml0aW5nIGg0ICsgdWwsXG4gICAgICAgIC53cml0aW5nIGg0ICsgYmxvY2txdW90ZSB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgcCxcbiAgICAgICAgLndyaXRpbmcgb2wsXG4gICAgICAgIC53cml0aW5nIHVsLFxuICAgICAgICAud3JpdGluZyBibG9ja3F1b3RlIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBvbCxcbiAgICAgICAgLndyaXRpbmcgdWwge1xuICAgICAgICAgIHBhZGRpbmc6IDAgNDBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGxpIHtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgbGk6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLWJvdHRvbTogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIGJsb2NrcXVvdGUge1xuICAgICAgICAgIGJvcmRlci1sZWZ0OiAzcHggc29saWQgcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgICAgbGVmdDogLTIwcHg7XG4gICAgICAgICAgcGFkZGluZy1sZWZ0OiAyMHB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5maXJzdCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLm5vbWFyZ2luIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmluZGVudCB7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2Uge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuaW1hZ2UtbGVmdCB7XG4gICAgICAgICAgZmxvYXQ6IGxlZnQ7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAyMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLndyaXRpbmcgLmltYWdlLXJpZ2h0IHtcbiAgICAgICAgICBmbG9hdDogcmlnaHQ7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyBhIHtcbiAgICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICAud3JpdGluZyAuc2NyaXB0dXJlIHtcbiAgICAgICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICAgICAgfVxuXG4gICAgICAgIC53cml0aW5nIC5yZWZlcmVuY2Uge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMTRweDtcbiAgICAgICAgICBtYXJnaW4tbGVmdDogMnB4O1xuICAgICAgICAgIHBvc2l0aW9uOiByZWxhdGl2ZTtcbiAgICAgICAgICB0b3A6IC01cHg7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIC53cml0aW5nIGgzIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAud3JpdGluZyBwLFxuICAgICAgICAgIC53cml0aW5nIG9sIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLndyaXRpbmcgYmxvY2txdW90ZSB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIC53cml0aW5nIC5pbWFnZSB7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQWRtaW47XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/admin.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Admin);

/***/ }),

/***/ "./utils/writing.js":
/*!**************************!*\
  !*** ./utils/writing.js ***!
  \**************************/
/*! exports provided: boldNumbers, textRef, renderRefs, getModifiedContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "boldNumbers", function() { return boldNumbers; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRef", function() { return textRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRefs", function() { return renderRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModifiedContent", function() { return getModifiedContent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function boldNumbers(text) {
  var splitText = text.split(" ");
  var mappedText = splitText.map(function (word) {
    if (Number(word) < 100) {
      return "<strong>".concat(word, "</strong>");
    }

    return word;
  });
  return mappedText.join(" ");
}
function textRef(number) {
  return "<span class=\"superscript\"><a class=\"reference\" href=\"#footnote-".concat(number, "\" id=\"text-").concat(number, "\">[").concat(number, "]</a></span>");
}
function renderRefs(references) {
  return "\n    <h4>References</h4>\n\n    <ol class=\"first\">\n      ".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(references, function (reference, number) {
    return "<li><a class=\"reference-arrow\" href=\"#text-".concat(number, "\" id=\"footnote-").concat(number, "\">^</a> ").concat(reference, "</li>");
  }).join(" "), "\n    </ol>\n  ");
}
function getModifiedContent(post) {
  return getContentWithReferences(post.html || "", post.references || "");
}

function getContentWithReferences(content, references) {
  if (!references) {
    return content;
  }

  var matches = content.match(/\[[0-9]+\]/g);

  if (matches) {
    content = matches.reduce(function (result, match, index) {
      var number = index + 1;
      return result.replace(match, "<span class=\"superscript\"><a href=\"#footnote-".concat(number, "\" id=\"text-").concat(number, "\">[").concat(number, "]</a></span>"));
    }, content);
  }

  return "\n    ".concat(content, "\n\n    <div class=\"writing\">\n      <h4>References</h4>\n\n      <ol class=\"first\">\n        ").concat(references.split("\n").map(function (reference, index) {
    var number = index + 1;
    return "<li><a class=\"reference-arrow\" href=\"#text-".concat(number, "\" id=\"footnote-").concat(number, "\">^</a> ").concat(reference, "</li>");
  }).join("\n"), "\n      </ol>\n    </div>\n  ");
}

/***/ }),

/***/ 3:
/*!******************************!*\
  !*** multi ./pages/admin.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/admin.js */"./pages/admin.js");


/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("axios");

/***/ }),

/***/ "lodash":
/*!*************************!*\
  !*** external "lodash" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash");

/***/ }),

/***/ "lodash/keyBy":
/*!*******************************!*\
  !*** external "lodash/keyBy" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("lodash/keyBy");

/***/ }),

/***/ "prismjs/components/prism-clike":
/*!*************************************************!*\
  !*** external "prismjs/components/prism-clike" ***!
  \*************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-clike");

/***/ }),

/***/ "prismjs/components/prism-core":
/*!************************************************!*\
  !*** external "prismjs/components/prism-core" ***!
  \************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-core");

/***/ }),

/***/ "prismjs/components/prism-javascript":
/*!******************************************************!*\
  !*** external "prismjs/components/prism-javascript" ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("prismjs/components/prism-javascript");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ "react-icons/fa":
/*!*********************************!*\
  !*** external "react-icons/fa" ***!
  \*********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-icons/fa");

/***/ }),

/***/ "react-select":
/*!*******************************!*\
  !*** external "react-select" ***!
  \*******************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-select");

/***/ }),

/***/ "react-simple-code-editor":
/*!*******************************************!*\
  !*** external "react-simple-code-editor" ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-simple-code-editor");

/***/ }),

/***/ "react-textarea-autosize":
/*!******************************************!*\
  !*** external "react-textarea-autosize" ***!
  \******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-textarea-autosize");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map