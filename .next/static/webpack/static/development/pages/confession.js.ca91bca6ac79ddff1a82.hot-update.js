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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_3__);


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

  var _useState3 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(null),
      _useState4 = _slicedToArray(_useState3, 2),
      activeScriptureText = _useState4[0],
      setActiveScriptureText = _useState4[1];

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3076614471"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-3076614471"
  }, "Chapter ", index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3076614471"
  }, paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: section.superscript,
      className: "jsx-3076614471"
    }, section.text, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#ref-".concat(index, "-").concat(section.superscript),
      id: "".concat(index, "-").concat(section.superscript),
      className: "jsx-3076614471" + " " + "superscript"
    }, "".concat(section.superscript, " ")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3076614471" + " " + "scripture-section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3076614471" + " " + "nomargin"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-3076614471"
  }, "References (click to view)")), paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      key: section.superscript,
      className: "jsx-3076614471" + " " + "nomargin"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(index, "-").concat(section.superscript),
      id: "ref-".concat(index, "-").concat(section.superscript),
      className: "jsx-3076614471"
    }, "^ "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-3076614471"
    }, section.superscript, "."), " ", section.scriptures.map(function (scripture, index) {
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()("scripture", {
        "scripture--active": scripture === activeScripture
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        key: scripture,
        className: "jsx-3076614471"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: function onClick() {
          var savedActiveScripture = scripture === activeScripture ? null : scripture;
          setActiveScripture(savedActiveScripture);

          if (savedActiveScripture) {
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://bibleanswersapi.herokuapp.com/passages?passages=".concat(encodeURIComponent(savedActiveScripture))).then(function (response) {
              setActiveScriptureText(response.data.passages);
            });
          }
        },
        className: "jsx-3076614471" + " " + (classNames || "")
      }, scripture), index === section.scriptures.length - 1 ? "" : ", ");
    }));
  }), activeScriptureText ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-3076614471"
  }, activeScriptureText) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3076614471",
    css: "h4.jsx-3076614471{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}p.jsx-3076614471{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}h4.jsx-3076614471+p.jsx-3076614471{margin-top:8px;}.first.jsx-3076614471{margin-top:8px;}.nomargin.jsx-3076614471{margin-top:0;}a.jsx-3076614471{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}@media screen and (max-width:768px){h4.jsx-3076614471{font-size:24px;margin-top:22px;}p.jsx-3076614471{font-size:18px;margin-top:21px;}}.superscript.jsx-3076614471{color:#689f38;font-size:15px;margin-left:1px;position:relative;top:-6px;}.scripture-section.jsx-3076614471{border:1px solid #bdbdbd;margin-top:20px;padding:5px 10px;}.scripture.jsx-3076614471{color:rgba(0,0,0,0.54);cursor:pointer;}.scripture--active.jsx-3076614471{color:rgba(0,0,0,0.84);font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db25mZXNzaW9uUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlGa0IsQUFHMEIsQUFPQSxBQU9BLEFBSUEsQUFJRixBQUlDLEFBTUcsQUFLQSxBQU1ILEFBUVcsQUFNQyxBQUtBLGFBdkM1QixDQUl1QixBQWlCTixDQTNDRSxBQU9BLEFBT25CLEFBSUEsQUFjb0IsQUFLQSxRQW9CSCxBQUtFLEVBWEQsSUFQQSxFQVhoQixBQUtBLENBckNTLEFBT0EsTUFrRFgsRUFLQSxDQTdEa0IsQUFPQSxBQTJDQyxJQVBDLFlBMUNwQixBQU9BLENBMkNBLEtBUFcsQ0FuQlgsUUFvQkEiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0NvbmZlc3Npb25QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjc3MgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcblxuY29uc3QgQ29uZmVzc2lvblBhcmFncmFwaCA9ICh7IHBhcmFncmFwaCwgaW5kZXggfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlU2NyaXB0dXJlLCBzZXRBY3RpdmVTY3JpcHR1cmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY3RpdmVTY3JpcHR1cmVUZXh0LCBzZXRBY3RpdmVTY3JpcHR1cmVUZXh0XSA9IHVzZVN0YXRlKG51bGwpO1xuXG4gIHJldHVybiAoXG4gICAgPGRpdj5cbiAgICAgIDxoND5DaGFwdGVyIHtpbmRleCArIDF9PC9oND5cbiAgICAgIDxwPlxuICAgICAgICB7cGFyYWdyYXBoLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHNwYW4ga2V5PXtzZWN0aW9uLnN1cGVyc2NyaXB0fT5cbiAgICAgICAgICAgICAge3NlY3Rpb24udGV4dH1cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgI3JlZi0ke2luZGV4fS0ke3NlY3Rpb24uc3VwZXJzY3JpcHR9YH1cbiAgICAgICAgICAgICAgICBpZD17YCR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICAgIGNsYXNzTmFtZT1cInN1cGVyc2NyaXB0XCJcbiAgICAgICAgICAgICAgPntgJHtzZWN0aW9uLnN1cGVyc2NyaXB0fSBgfTwvYT5cbiAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICApO1xuICAgICAgICB9KX1cbiAgICAgIDwvcD5cblxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJzY3JpcHR1cmUtc2VjdGlvblwiPlxuICAgICAgICA8cCBjbGFzc05hbWU9XCJub21hcmdpblwiPlxuICAgICAgICAgIDxzdHJvbmc+UmVmZXJlbmNlcyAoY2xpY2sgdG8gdmlldyk8L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICB7cGFyYWdyYXBoLm1hcChzZWN0aW9uID0+IHtcbiAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgPHAga2V5PXtzZWN0aW9uLnN1cGVyc2NyaXB0fSBjbGFzc05hbWU9XCJub21hcmdpblwiPlxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AjJHtpbmRleH0tJHtzZWN0aW9uLnN1cGVyc2NyaXB0fWB9XG4gICAgICAgICAgICAgICAgaWQ9e2ByZWYtJHtpbmRleH0tJHtzZWN0aW9uLnN1cGVyc2NyaXB0fWB9XG4gICAgICAgICAgICAgID5cbiAgICAgICAgICAgICAgICB7YF4gYH1cbiAgICAgICAgICAgICAgPC9hPlxuICAgICAgICAgICAgICA8c3Ryb25nPntzZWN0aW9uLnN1cGVyc2NyaXB0fS48L3N0cm9uZz57XCIgXCJ9XG4gICAgICAgICAgICAgIHtzZWN0aW9uLnNjcmlwdHVyZXMubWFwKChzY3JpcHR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgY29uc3QgY2xhc3NOYW1lcyA9IGNzcyhcInNjcmlwdHVyZVwiLCB7XG4gICAgICAgICAgICAgICAgICBcInNjcmlwdHVyZS0tYWN0aXZlXCI6IHNjcmlwdHVyZSA9PT0gYWN0aXZlU2NyaXB0dXJlXG4gICAgICAgICAgICAgICAgfSk7XG5cbiAgICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtzY3JpcHR1cmV9PlxuICAgICAgICAgICAgICAgICAgICA8c3BhblxuICAgICAgICAgICAgICAgICAgICAgIGNsYXNzTmFtZT17Y2xhc3NOYW1lc31cbiAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlZEFjdGl2ZVNjcmlwdHVyZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdHVyZSA9PT0gYWN0aXZlU2NyaXB0dXJlID8gbnVsbCA6IHNjcmlwdHVyZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlU2NyaXB0dXJlKHNhdmVkQWN0aXZlU2NyaXB0dXJlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhdmVkQWN0aXZlU2NyaXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwczovL2JpYmxlYW5zd2Vyc2FwaS5oZXJva3VhcHAuY29tL3Bhc3NhZ2VzP3Bhc3NhZ2VzPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZEFjdGl2ZVNjcmlwdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVNjcmlwdHVyZVRleHQocmVzcG9uc2UuZGF0YS5wYXNzYWdlcyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfSk7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgIHtzY3JpcHR1cmV9XG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSBzZWN0aW9uLnNjcmlwdHVyZXMubGVuZ3RoIC0gMSA/IFwiXCIgOiBgLCBgfVxuICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgIH0pfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHthY3RpdmVTY3JpcHR1cmVUZXh0ID8gPHA+e2FjdGl2ZVNjcmlwdHVyZVRleHR9PC9wPiA6IG51bGx9XG4gICAgICA8L2Rpdj5cblxuICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICBoNCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyNnB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjIyO1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAzMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgcCB7XG4gICAgICAgICAgZm9udC1zaXplOiAyMXB4O1xuICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU4O1xuICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyOXB4O1xuICAgICAgICB9XG5cbiAgICAgICAgaDQgKyBwIHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAuZmlyc3Qge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5ub21hcmdpbiB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIGEge1xuICAgICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgICAgfVxuXG4gICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgaDQge1xuICAgICAgICAgICAgZm9udC1zaXplOiAyNHB4O1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjJweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLnN1cGVyc2NyaXB0IHtcbiAgICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgICBmb250LXNpemU6IDE1cHg7XG4gICAgICAgICAgbWFyZ2luLWxlZnQ6IDFweDtcbiAgICAgICAgICBwb3NpdGlvbjogcmVsYXRpdmU7XG4gICAgICAgICAgdG9wOiAtNnB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdHVyZS1zZWN0aW9uIHtcbiAgICAgICAgICBib3JkZXI6IDFweCBzb2xpZCAjYmRiZGJkO1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgICAgcGFkZGluZzogNXB4IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0dXJlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0dXJlLS1hY3RpdmUge1xuICAgICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBDb25mZXNzaW9uUGFyYWdyYXBoO1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ConfessionParagraph.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfessionParagraph);

/***/ })

})
//# sourceMappingURL=confession.js.ca91bca6ac79ddff1a82.hot-update.js.map