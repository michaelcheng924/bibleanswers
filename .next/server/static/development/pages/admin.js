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
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return TagsList; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _CreateTag__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./CreateTag */ "./components/CreateTag.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }




var TagsList =
/*#__PURE__*/
function (_Component) {
  _inherits(TagsList, _Component);

  function TagsList() {
    _classCallCheck(this, TagsList);

    return _possibleConstructorReturn(this, _getPrototypeOf(TagsList).apply(this, arguments));
  }

  _createClass(TagsList, [{
    key: "render",
    value: function render() {
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h2", null, "Tags"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_CreateTag__WEBPACK_IMPORTED_MODULE_1__["default"], {
        headers: this.props.headers
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, this.props.tags.map(function (tag) {
        return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", {
          key: tag.id,
          className: "admin__list-post"
        }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, tag.title, " (", tag.post_slugs.length, ")"), tag.description.length < 160 ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
          style: {
            color: "red"
          }
        }, "Needs description") : null));
      })));
    }
  }]);

  return TagsList;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);



/***/ }),

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_1__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_1___default.a.div(_templateObject());

var Container = function Container(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledContainer, null, children);
};

/* harmony default export */ __webpack_exports__["default"] = (Container);

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
      subtitle: ""
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
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://bibleanswersapi.herokuapp.com/tags", _this.state, headers).then(function () {
        onFetchPostsTags();

        _this.setState({
          slug: "",
          url: "",
          title: "",
          description: "",
          subtitle: ""
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
          subtitle = _this$state.subtitle;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "admin__create-tag"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, JSON.stringify(this.state)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Create Tag"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "slug: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_2___default.a, {
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
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_0__);
function _templateObject() {
  var data = _taggedTemplateLiteral(["\n.writing h3 {\n  font-size: 34px;\n  line-height: 1.15;\n  margin: 0;\n  margin-top: 56px;\n}\n\n.writing h4 {\n  font-size: 26px;\n  line-height: 1.22;\n  margin: 0;\n  margin-top: 30px;\n}\n\n.writing h3 + p,\n.writing h3 + ol,\n.writing h3 + ul,\n.writing h3 + blockquote,\n.writing h4 + p,\n.writing h4 + ol,\n.writing h4 + ul,\n.writing h4 + blockquote {\n  margin-top: 8px;\n}\n\n.writing p,\n.writing ol,\n.writing ul,\n.writing blockquote {\n  font-size: 21px;\n  line-height: 1.58;\n  margin: 0;\n  margin-top: 29px;\n}\n\n.writing ol,\n.writing ul {\n  padding: 0 40px;\n}\n\n.writing li {\n  margin-bottom: 10px;\n}\n\n.writing li:last-child {\n  margin-bottom: 0;\n}\n\n.writing blockquote {\n  border-left: 3px solid rgba(0, 0, 0, .84);\n  font-style: italic;\n  left: -20px;\n  padding-left: 20px;\n  position: relative;\n}\n\n.writing .first {\n  margin-top: 8px;\n}\n\n.writing .nomargin {\n  margin-top: 0;\n}\n\n.writing .indent {\n  margin-left: 20px;\n}\n\n.writing .image {\n  margin-top: 29px;\n}\n\n.writing .image-left {\n  float: left;\n  margin-right: 20px;\n}\n\n.writing .image-right {\n  float: right;\n  margin-left: 20px;\n}\n\n.writing a {\n  color: #689f38;\n  text-decoration: none;\n}\n\n.writing .scripture {\n  color: #039BE5;\n}\n\n.writing .reference {\n  font-size: 14px;\n  margin-left: 2px;\n  position: relative;\n  top: -5px;\n}\n\n@media screen and (max-width: 768px) {\n  .writing h3 {\n    font-size: 30px;\n    margin-top: 28px;\n  }\n\n  .writing h4 {\n    font-size: 24px;\n    margin-top: 22px;\n  }\n\n  .writing p,\n  .writing ol {\n    font-size: 18px;\n    margin-top: 21px;\n  }\n\n  .writing blockquote {\n    font-size: 18px;\n    margin-top: 21px;\n  }\n\n  .writing .image {\n    margin-top: 21px;\n  }\n}\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }


var GlobalStyle = Object(styled_components__WEBPACK_IMPORTED_MODULE_0__["createGlobalStyle"])(_templateObject());
/* harmony default export */ __webpack_exports__["default"] = (GlobalStyle);

/***/ }),

/***/ "./components/ListItem.js":
/*!********************************!*\
  !*** ./components/ListItem.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_3__);
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }

function _templateObject6() {
  var data = _taggedTemplateLiteral(["\n  height: 80px;\n  position: relative;\n"]);

  _templateObject6 = function _templateObject6() {
    return data;
  };

  return data;
}

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  flex-shrink: 0;\n  height: 80px;\n  margin-left: 20px;\n  overflow: hidden;\n  width: 80px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  font-style: italic;\n  margin-top: 8px;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 5px;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n\n  &:hover {\n    background: #eee;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }





var ListItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());
var ListItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject2());
var ListItemSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject3());
var ListItemDate = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject4());
var AnswerImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject5());
var StyledAmpImg = styled_components__WEBPACK_IMPORTED_MODULE_2___default()(react_amphtml__WEBPACK_IMPORTED_MODULE_3__["AmpImg"])(_templateObject6());

var ListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(ListItem, _Component);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          date_added = _this$props.date_added,
          image_url_small = _this$props.image_url_small,
          subtitle = _this$props.subtitle,
          title = _this$props.title;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemTitle, null, title), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemSubtitle, null, subtitle), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(ListItemDate, null, date_added ? moment__WEBPACK_IMPORTED_MODULE_1___default()(new Date(date_added)).format("MMM Do, YYYY") : null)), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(AnswerImageContainer, null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(StyledAmpImg, {
        specName: "default",
        src: image_url_small,
        width: "80",
        height: "80",
        alt: "AMP"
      })));
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_0__["Component"]);

/* harmony default export */ __webpack_exports__["default"] = (ListItem);

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
      axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://bibleanswersapi.herokuapp.com/login", {
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
        axios__WEBPACK_IMPORTED_MODULE_1___default.a.post("http://bibleanswersapi.herokuapp.com/checktoken", {
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
          history = _this$props.history,
          onFetchPostsTags = _this$props.onFetchPostsTags,
          onSetPost = _this$props.onSetPost;
      var post = _this.state.post;

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
      var url = "http://bibleanswersapi.herokuapp.com/posts";

      if (post.id) {
        method = "patch";
        url = "http://bibleanswersapi.herokuapp.com/posts/".concat(post.id);
      }

      axios__WEBPACK_IMPORTED_MODULE_2___default.a[method](url, finalPost, headers).then(function (response) {
        _this.setState({
          success: true
        }, function () {
          setTimeout(function () {
            _this.setState({
              success: false,
              post: response.data
            });
          }, 500);
        });

        onFetchPostsTags();
      });
    });

    _this.keys = {};
    _this.state = {
      post: props.post,
      success: false
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
    key: "deletePost",
    value: function deletePost() {
      var _this2 = this;

      var confirm = window.confirm("Are you sure?");

      if (confirm) {
        axios__WEBPACK_IMPORTED_MODULE_2___default.a.delete("http://bibleanswersapi.herokuapp.com/posts/".concat(this.state.post.id)).then(function () {
          _this2.props.onFetchPostsTags().then(function () {
            _this2.props.history.push("/admin");
          });
        });
      }
    }
  }, {
    key: "renderSaveButtons",
    value: function renderSaveButtons() {
      var success = this.state.success;
      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        className: "admin__save-buttons"
      }, success ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        style: {
          background: "#43A047",
          color: "#fff",
          padding: "5px 10px"
        }
      }, "SUCCESS!") : null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("input", {
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
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, "ID: ", id), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "slug: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
        onChange: this.onChange,
        name: "slug",
        placeholder: "slug",
        value: slug
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "url: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_textarea_autosize__WEBPACK_IMPORTED_MODULE_1___default.a, {
        disabled: true,
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
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, 160 - (description || "").length), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("strong", null, "tags: ")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_select__WEBPACK_IMPORTED_MODULE_3___default.a, {
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
      width: "100%",
      padding: "0 20px"
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

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! axios */ "axios");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash/keyBy */ "lodash/keyBy");
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
      return axios__WEBPACK_IMPORTED_MODULE_1___default.a.get("http://bibleanswersapi.herokuapp.com/initialfetch").then(function (response) {
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
        post: post,
        tags: tags
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

/***/ }),

/***/ "./utils/writing.js":
/*!**************************!*\
  !*** ./utils/writing.js ***!
  \**************************/
/*! exports provided: textRef, renderRefs, getModifiedContent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "textRef", function() { return textRef; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "renderRefs", function() { return renderRefs; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "getModifiedContent", function() { return getModifiedContent; });
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! lodash */ "lodash");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_0__);

function textRef(number) {
  return "<span class=\"superscript\"><a class=\"reference\" href=\"#footnote-".concat(number, "\" id=\"text-").concat(number, "\">[").concat(number, "]</a></span>");
}
function renderRefs(references) {
  return "\n    <h4>References</h4>\n\n    <ol class=\"first\">\n      ".concat(Object(lodash__WEBPACK_IMPORTED_MODULE_0__["map"])(references, function (reference, number) {
    return "<li><a class=\"reference-arrow\" href=\"#text-".concat(number, "\" id=\"footnote-").concat(number, "\">^</a> ").concat(reference, "</li>");
  }).join(" "), "\n    </ol>\n  ");
}
function getModifiedContent(post) {
  return getContentWithReferences(post.html, post.references || "");
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

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

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

/***/ "react-amphtml":
/*!********************************!*\
  !*** external "react-amphtml" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-amphtml");

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

/***/ })

/******/ });
//# sourceMappingURL=admin.js.map