webpackHotUpdate("static/development/pages/post.js",{

/***/ "./pages/post.js":
/*!***********************!*\
  !*** ./pages/post.js ***!
  \***********************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* WEBPACK VAR INJECTION */(function(Buffer, module) {/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "./node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "./node_modules/next/head.js");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "./node_modules/styled-components/dist/styled-components.browser.esm.js");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-amphtml */ "./node_modules/react-amphtml/index.js");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var react_amphtml_helpers__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! react-amphtml/helpers */ "./node_modules/react-amphtml/helpers.js");
/* harmony import */ var react_amphtml_helpers__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(react_amphtml_helpers__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! isomorphic-unfetch */ "./node_modules/isomorphic-unfetch/browser.js");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");
/* harmony import */ var _components_TitleSection__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../components/TitleSection */ "./components/TitleSection.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _toConsumableArray(arr) { return _arrayWithoutHoles(arr) || _iterableToArray(arr) || _nonIterableSpread(); }

function _nonIterableSpread() { throw new TypeError("Invalid attempt to spread non-iterable instance"); }

function _iterableToArray(iter) { if (Symbol.iterator in Object(iter) || Object.prototype.toString.call(iter) === "[object Arguments]") return Array.from(iter); }

function _arrayWithoutHoles(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = new Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  position: relative;\n  min-height: 2rem;\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  filter: ", ";\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }









var Container = styled_components__WEBPACK_IMPORTED_MODULE_3__["default"].div(_templateObject());
var StyledAmpImg = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["AmpImg"])(_templateObject2(), function (props) {
  switch (props["data-filter"]) {
    case 1:
      return "blur(10px)";

    case 2:
      return "hue-rotate(180deg)";

    case 3:
      return "invert(100%)";

    case 4:
      return "grayscale(100%)";

    case 5:
      return "sepia(100%)";

    case 6:
      return "saturate(100%)";

    default:
      return "none";
  }
});
var RelativeAmpList = Object(styled_components__WEBPACK_IMPORTED_MODULE_3__["default"])(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["AmpList"])(_templateObject3());
var defaultHeading = {
  text: "Hello, World!"
};

var Post = function Post(_ref) {
  var post = _ref.post;

  if (!post) {
    return [react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Post not found"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "https://bibleanswers.io"
    }, "Bible Answers Home"))];
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Container, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, post.title, " | Bible Answers")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_TitleSection__WEBPACK_IMPORTED_MODULE_8__["default"], post), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("label", {
    htmlFor: "headingInputElement"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("b", null, "Type your heading:")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["AmpState"], {
    specName: "amp-state",
    id: "headingInput"
  }, defaultHeading), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_amphtml_helpers__WEBPACK_IMPORTED_MODULE_5__["Action"], {
    events: {
      change: ["AMP.setState({ headingInput: { text: event.value } })"]
    }
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("input", _extends({}, props, {
      type: "text",
      id: "headingInputElement"
    }));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_amphtml_helpers__WEBPACK_IMPORTED_MODULE_5__["Action"], {
    events: {
      tap: ["AMP.setState({ heading: { text: headingInput.text } })"]
    }
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", props, "Set Heading");
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_amphtml_helpers__WEBPACK_IMPORTED_MODULE_5__["Action"], {
    events: {
      tap: ["awesome-carousel.toggleVisibility"]
    }
  }, function (props) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("button", props, "Toggle Carousel Visibility");
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["AmpCarousel"], {
    id: "awesome-carousel",
    height: "610",
    layout: "fixed-height",
    type: "carousel"
  }, _toConsumableArray(Array(6)).map(function (v, index) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAmpImg, {
      specName: "default",
      key: Buffer.from(Math.random().toString()).toString("base64"),
      "data-filter": index,
      src: "/static/amp.jpg",
      width: "1080",
      height: "610",
      alt: "AMP"
    });
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h1", null, "Hacker News"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(RelativeAmpList, {
    specName: "default",
    src: "https://www.graphqlhub.com/graphql?query=".concat(encodeURIComponent("\n              {\n                hn {\n                  topStories {\n                    id\n                    title\n                    score\n                    descendants\n                  }\n                }\n              }\n            ")),
    items: "data.hn.topStories",
    layout: "fill"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["Template"], {
    specName: "default",
    type: "amp-mustache"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "https://news.ycombinator.com/item?id={{id}}",
    target: "_blank",
    rel: "noopener noreferrer"
  }, "{{title}} ⭐ {{score}} 💬 {{descendants}}")))));
};

Post.getInitialProps =
/*#__PURE__*/
function () {
  var _ref3 = _asyncToGenerator(
  /*#__PURE__*/
  _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee(_ref2) {
    var query, res, data;
    return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            query = _ref2.query;
            _context.next = 3;
            return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_6___default()("http://bibleanswersapi.herokuapp.com/posts/".concat(query.slug));

          case 3:
            res = _context.sent;
            _context.next = 6;
            return res.json();

          case 6:
            data = _context.sent;
            return _context.abrupt("return", {
              post: data
            });

          case 8:
          case "end":
            return _context.stop();
        }
      }
    }, _callee, this);
  }));

  return function (_x) {
    return _ref3.apply(this, arguments);
  };
}();

/* harmony default export */ __webpack_exports__["default"] = (Post);
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
    })(typeof __webpack_exports__ !== 'undefined' ? __webpack_exports__.default : (module.exports.default || module.exports), "/post")
  
/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../node_modules/buffer/index.js */ "./node_modules/buffer/index.js").Buffer, __webpack_require__(/*! ./../node_modules/webpack/buildin/harmony-module.js */ "./node_modules/webpack/buildin/harmony-module.js")(module)))

/***/ })

})
//# sourceMappingURL=post.js.f55a449e9c7e4570bf09.hot-update.js.map