webpackHotUpdate("static/development/pages/admin.js",{

/***/ "./pages/admin.js":
/*!************************!*\
  !*** ./pages/admin.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(module) {/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var lodash_keyBy__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! lodash/keyBy */ "./node_modules/lodash/keyBy.js");
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
//# sourceMappingURL=admin.js.22687f9645ce9c79927d.hot-update.js.map