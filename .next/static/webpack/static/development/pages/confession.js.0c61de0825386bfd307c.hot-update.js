webpackHotUpdate("static/development/pages/confession.js",{

/***/ "./components/ConfessionParagraph.js":
/*!*******************************************!*\
  !*** ./components/ConfessionParagraph.js ***!
  \*******************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! classnames */ "./node_modules/classnames/index.js");
/* harmony import */ var classnames__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(classnames__WEBPACK_IMPORTED_MODULE_2__);


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ConfessionParagraph = function ConfessionParagraph(_ref) {
  var paragraph = _ref.paragraph,
      index = _ref.index;

  var _useState = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState2 = _slicedToArray(_useState, 2),
      activeScripture = _useState2[0],
      setActiveScripture = _useState2[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1576889090"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-1576889090"
  }, "Chapter ", index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1576889090"
  }, paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: section.superscript,
      className: "jsx-1576889090"
    }, section.text, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#ref-".concat(index, "-").concat(section.superscript),
      id: "".concat(index, "-").concat(section.superscript),
      className: "jsx-1576889090" + " " + "superscript"
    }, "".concat(section.superscript, " ")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1576889090" + " " + "scripture-section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1576889090" + " " + "nomargin"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-1576889090"
  }, "References (click to view)")), paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: section.superscript,
      className: "jsx-1576889090" + " " + "nomargin"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(index, "-").concat(section.superscript),
      id: "ref-".concat(index, "-").concat(section.superscript),
      className: "jsx-1576889090"
    }, "^ "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-1576889090"
    }, section.superscript, "."), " ", section.scriptures.map(function (scripture, index) {
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()("scripture", {
        "scripture--active": scripture === activeScripture
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        key: scripture,
        onClick: function onClick() {
          return setActiveScripture();
        },
        className: "jsx-1576889090" + " " + (classNames || "")
      }, scripture, index === section.scriptures.length - 1 ? "" : ",");
    }));
  }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-1576889090" + " " + "first"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
    className: "jsx-1576889090"
  }, "Click on a Scripture above to view passage"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1576889090",
    css: "p.jsx-1576889090{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.first.jsx-1576889090{margin-top:8px;}.nomargin.jsx-1576889090{margin-top:0;}a.jsx-1576889090{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}@media screen and (max-width:768px){p.jsx-1576889090{font-size:18px;margin-top:21px;}}.superscript.jsx-1576889090{color:#689f38;font-size:15px;margin-left:1px;position:relative;top:-6px;}.scripture-section.jsx-1576889090{border:1px solid #bdbdbd;margin-top:20px;padding:5px 10px;}.scripture.jsx-1576889090{color:rgba(0,0,0,0.54);cursor:pointer;margin-right:5px;}.scripture--active.jsx-1576889090{color:rgba(0,0,0,0.84);}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db25mZXNzaW9uUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQStEa0IsQUFHMEIsQUFPQSxBQUlGLEFBSUMsQUFNRyxBQU1ILEFBUVcsQUFNQyxBQU1BLGFBbkM1QixDQUl1QixBQVlOLENBM0JFLEFBT25CLEFBY29CLFFBb0JILEFBTWpCLEVBWmtCLElBUEEsRUFOaEIsQ0FyQlMsTUF5Q1EsR0F4Q0QsQUFrQ0MsSUFQQyxVQWNwQixFQXhDQSxDQWtDQSxLQVBXLENBZFgsUUFlQSIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL2NvbXBvbmVudHMvQ29uZmVzc2lvblBhcmFncmFwaC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGNzcyBmcm9tIFwiY2xhc3NuYW1lc1wiO1xuXG5jb25zdCBDb25mZXNzaW9uUGFyYWdyYXBoID0gKHsgcGFyYWdyYXBoLCBpbmRleCB9KSA9PiB7XG4gIGNvbnN0IFthY3RpdmVTY3JpcHR1cmUsIHNldEFjdGl2ZVNjcmlwdHVyZV0gPSB1c2VTdGF0ZShudWxsKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXY+XG4gICAgICA8aDQ+Q2hhcHRlciB7aW5kZXggKyAxfTwvaDQ+XG4gICAgICA8cD5cbiAgICAgICAge3BhcmFncmFwaC5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxzcGFuIGtleT17c2VjdGlvbi5zdXBlcnNjcmlwdH0+XG4gICAgICAgICAgICAgIHtzZWN0aW9uLnRleHR9XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YCNyZWYtJHtpbmRleH0tJHtzZWN0aW9uLnN1cGVyc2NyaXB0fWB9XG4gICAgICAgICAgICAgICAgaWQ9e2Ake2luZGV4fS0ke3NlY3Rpb24uc3VwZXJzY3JpcHR9YH1cbiAgICAgICAgICAgICAgICBjbGFzc05hbWU9XCJzdXBlcnNjcmlwdFwiXG4gICAgICAgICAgICAgID57YCR7c2VjdGlvbi5zdXBlcnNjcmlwdH0gYH08L2E+XG4gICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgKTtcbiAgICAgICAgfSl9XG4gICAgICA8L3A+XG5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyaXB0dXJlLXNlY3Rpb25cIj5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwibm9tYXJnaW5cIj5cbiAgICAgICAgICA8c3Ryb25nPlJlZmVyZW5jZXMgKGNsaWNrIHRvIHZpZXcpPC9zdHJvbmc+XG4gICAgICAgIDwvcD5cbiAgICAgICAge3BhcmFncmFwaC5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxwIGtleT17c2VjdGlvbi5zdXBlcnNjcmlwdH0gY2xhc3NOYW1lPVwibm9tYXJnaW5cIj5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgIyR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICAgIGlkPXtgcmVmLSR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2BeIGB9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHN0cm9uZz57c2VjdGlvbi5zdXBlcnNjcmlwdH0uPC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAgICB7c2VjdGlvbi5zY3JpcHR1cmVzLm1hcCgoc2NyaXB0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgIGNvbnN0IGNsYXNzTmFtZXMgPSBjc3MoXCJzY3JpcHR1cmVcIiwge1xuICAgICAgICAgICAgICAgICAgXCJzY3JpcHR1cmUtLWFjdGl2ZVwiOiBzY3JpcHR1cmUgPT09IGFjdGl2ZVNjcmlwdHVyZVxuICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgIGtleT17c2NyaXB0dXJlfVxuICAgICAgICAgICAgICAgICAgICBjbGFzc05hbWU9e2NsYXNzTmFtZXN9XG4gICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHNldEFjdGl2ZVNjcmlwdHVyZSgpfVxuICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICB7c2NyaXB0dXJlfVxuICAgICAgICAgICAgICAgICAgICB7aW5kZXggPT09IHNlY3Rpb24uc2NyaXB0dXJlcy5sZW5ndGggLSAxID8gXCJcIiA6IGAsYH1cbiAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICApO1xuICAgICAgICAgICAgICB9KX1cbiAgICAgICAgICAgIDwvcD5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cblxuICAgICAgICA8cCBjbGFzc05hbWU9XCJmaXJzdFwiPlxuICAgICAgICAgIDxlbT5DbGljayBvbiBhIFNjcmlwdHVyZSBhYm92ZSB0byB2aWV3IHBhc3NhZ2U8L2VtPlxuICAgICAgICA8L3A+XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBwIHtcbiAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgbGluZS1oZWlnaHQ6IDEuNTg7XG4gICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlyc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub21hcmdpbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdXBlcnNjcmlwdCB7XG4gICAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHR1cmUtc2VjdGlvbiB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdHVyZSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogNXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdHVyZS0tYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmVzc2lvblBhcmFncmFwaDtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ConfessionParagraph.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfessionParagraph);

/***/ })

})
//# sourceMappingURL=confession.js.0c61de0825386bfd307c.hot-update.js.map