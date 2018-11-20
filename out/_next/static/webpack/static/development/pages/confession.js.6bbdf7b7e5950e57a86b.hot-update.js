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
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Popover */ "./components/Popover/index.js");
/* harmony import */ var _ScriptureRef__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./ScriptureRef */ "./components/ScriptureRef.js");


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

  var _useState5 = Object(react__WEBPACK_IMPORTED_MODULE_1__["useState"])(false),
      _useState6 = _slicedToArray(_useState5, 2),
      loading = _useState6[0],
      setLoading = _useState6[1];

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
    }, section.superscript, "."), " ", section.scriptures ? section.scriptures.map(function (scripture, index) {
      var classNames = classnames__WEBPACK_IMPORTED_MODULE_2___default()("scripture", {
        "scripture--active": scripture === activeScripture
      });
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        key: scripture,
        className: "jsx-3076614471"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Popover__WEBPACK_IMPORTED_MODULE_4__["default"], {
        isOpen: scripture === activeScripture,
        body: activeScriptureText ? loading ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
          src: "https://i.imgur.com/P7fXP4s.gif",
          style: {
            display: "flex",
            height: 25,
            width: 25,
            textAlign: "center",
            margin: "8px auto 0"
          },
          className: "jsx-3076614471"
        }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScriptureRef__WEBPACK_IMPORTED_MODULE_5__["default"], {
          key: index,
          data: activeScriptureText
        }) : null,
        place: "below"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        onClick: function onClick() {
          var savedActiveScripture = scripture === activeScripture ? null : scripture;
          setActiveScripture(savedActiveScripture);

          if (savedActiveScripture) {
            setLoading(true);
            axios__WEBPACK_IMPORTED_MODULE_3___default.a.get("https://bibleanswersapi.herokuapp.com/passages?passages=".concat(encodeURIComponent(savedActiveScripture))).then(function (response) {
              setLoading(false);
              setActiveScriptureText(response.data);
            });
          } else {
            setActiveScriptureText(null);
          }
        },
        className: "jsx-3076614471" + " " + (classNames || "")
      }, scripture)), index === section.scriptures.length - 1 ? "" : "; ");
    }) : null);
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3076614471",
    css: "h4.jsx-3076614471{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}p.jsx-3076614471{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}h4.jsx-3076614471+p.jsx-3076614471{margin-top:8px;}.first.jsx-3076614471{margin-top:8px;}.nomargin.jsx-3076614471{margin-top:0;}a.jsx-3076614471{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}@media screen and (max-width:768px){h4.jsx-3076614471{font-size:24px;margin-top:22px;}p.jsx-3076614471{font-size:18px;margin-top:21px;}}.superscript.jsx-3076614471{color:#689f38;font-size:15px;margin-left:1px;position:relative;top:-6px;}.scripture-section.jsx-3076614471{border:1px solid #bdbdbd;margin-top:20px;padding:5px 10px;}.scripture.jsx-3076614471{color:rgba(0,0,0,0.54);cursor:pointer;}.scripture--active.jsx-3076614471{color:rgba(0,0,0,0.84);font-weight:bold;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db25mZXNzaW9uUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQXVJa0IsQUFHMEIsQUFPQSxBQU9BLEFBSUEsQUFJRixBQUlDLEFBTUcsQUFLQSxBQU1ILEFBUVcsQUFNQyxBQUtBLGFBdkM1QixDQUl1QixBQWlCTixDQTNDRSxBQU9BLEFBT25CLEFBSUEsQUFjb0IsQUFLQSxRQW9CSCxBQUtFLEVBWEQsSUFQQSxFQVhoQixBQUtBLENBckNTLEFBT0EsTUFrRFgsRUFLQSxDQTdEa0IsQUFPQSxBQTJDQyxJQVBDLFlBMUNwQixBQU9BLENBMkNBLEtBUFcsQ0FuQlgsUUFvQkEiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0NvbmZlc3Npb25QYXJhZ3JhcGguanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBjc3MgZnJvbSBcImNsYXNzbmFtZXNcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuL1BvcG92ZXJcIjtcblxuaW1wb3J0IFNjcmlwdHVyZVJlZiBmcm9tIFwiLi9TY3JpcHR1cmVSZWZcIjtcblxuY29uc3QgQ29uZmVzc2lvblBhcmFncmFwaCA9ICh7IHBhcmFncmFwaCwgaW5kZXggfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlU2NyaXB0dXJlLCBzZXRBY3RpdmVTY3JpcHR1cmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY3RpdmVTY3JpcHR1cmVUZXh0LCBzZXRBY3RpdmVTY3JpcHR1cmVUZXh0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg0PkNoYXB0ZXIge2luZGV4ICsgMX08L2g0PlxuICAgICAgPHA+XG4gICAgICAgIHtwYXJhZ3JhcGgubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e3NlY3Rpb24uc3VwZXJzY3JpcHR9PlxuICAgICAgICAgICAgICB7c2VjdGlvbi50ZXh0fVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AjcmVmLSR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICAgIGlkPXtgJHtpbmRleH0tJHtzZWN0aW9uLnN1cGVyc2NyaXB0fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VwZXJzY3JpcHRcIlxuICAgICAgICAgICAgICA+e2Ake3NlY3Rpb24uc3VwZXJzY3JpcHR9IGB9PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmlwdHVyZS1zZWN0aW9uXCI+XG4gICAgICAgIDxwIGNsYXNzTmFtZT1cIm5vbWFyZ2luXCI+XG4gICAgICAgICAgPHN0cm9uZz5SZWZlcmVuY2VzIChjbGljayB0byB2aWV3KTwvc3Ryb25nPlxuICAgICAgICA8L3A+XG4gICAgICAgIHtwYXJhZ3JhcGgubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8cCBrZXk9e3NlY3Rpb24uc3VwZXJzY3JpcHR9IGNsYXNzTmFtZT1cIm5vbWFyZ2luXCI+XG4gICAgICAgICAgICAgIDxhXG4gICAgICAgICAgICAgICAgaHJlZj17YCMke2luZGV4fS0ke3NlY3Rpb24uc3VwZXJzY3JpcHR9YH1cbiAgICAgICAgICAgICAgICBpZD17YHJlZi0ke2luZGV4fS0ke3NlY3Rpb24uc3VwZXJzY3JpcHR9YH1cbiAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgIHtgXiBgfVxuICAgICAgICAgICAgICA8L2E+XG4gICAgICAgICAgICAgIDxzdHJvbmc+e3NlY3Rpb24uc3VwZXJzY3JpcHR9Ljwvc3Ryb25nPntcIiBcIn1cbiAgICAgICAgICAgICAge3NlY3Rpb24uc2NyaXB0dXJlc1xuICAgICAgICAgICAgICAgID8gc2VjdGlvbi5zY3JpcHR1cmVzLm1hcCgoc2NyaXB0dXJlLCBpbmRleCkgPT4ge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBjbGFzc05hbWVzID0gY3NzKFwic2NyaXB0dXJlXCIsIHtcbiAgICAgICAgICAgICAgICAgICAgICBcInNjcmlwdHVyZS0tYWN0aXZlXCI6IHNjcmlwdHVyZSA9PT0gYWN0aXZlU2NyaXB0dXJlXG4gICAgICAgICAgICAgICAgICAgIH0pO1xuXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtzY3JpcHR1cmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXtzY3JpcHR1cmUgPT09IGFjdGl2ZVNjcmlwdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2NyaXB0dXJlVGV4dCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL1A3ZlhQNHMuZ2lmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjhweCBhdXRvIDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2NyaXB0dXJlUmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXthY3RpdmVTY3JpcHR1cmVUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U9XCJiZWxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPXtjbGFzc05hbWVzfVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9uQ2xpY2s9eygpID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNvbnN0IHNhdmVkQWN0aXZlU2NyaXB0dXJlID1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2NyaXB0dXJlID09PSBhY3RpdmVTY3JpcHR1cmVcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA/IG51bGxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IHNjcmlwdHVyZTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlU2NyaXB0dXJlKHNhdmVkQWN0aXZlU2NyaXB0dXJlKTtcblxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaWYgKHNhdmVkQWN0aXZlU2NyaXB0dXJlKSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcodHJ1ZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYXhpb3NcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAuZ2V0KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYGh0dHBzOi8vYmlibGVhbnN3ZXJzYXBpLmhlcm9rdWFwcC5jb20vcGFzc2FnZXM/cGFzc2FnZXM9JHtlbmNvZGVVUklDb21wb25lbnQoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNhdmVkQWN0aXZlU2NyaXB0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApfWBcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICApXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLnRoZW4ocmVzcG9uc2UgPT4ge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0TG9hZGluZyhmYWxzZSk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRBY3RpdmVTY3JpcHR1cmVUZXh0KHJlc3BvbnNlLmRhdGEpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0pO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgfSBlbHNlIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlU2NyaXB0dXJlVGV4dChudWxsKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAge3NjcmlwdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICAgICAgICAgICAgICAgPC9Qb3BvdmVyPlxuICAgICAgICAgICAgICAgICAgICAgICAge2luZGV4ID09PSBzZWN0aW9uLnNjcmlwdHVyZXMubGVuZ3RoIC0gMSA/IFwiXCIgOiBgOyBgfVxuICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgICAgICAgIH0pXG4gICAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgICAgPC9wPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHsvKiB7YWN0aXZlU2NyaXB0dXJlVGV4dCA/IChcbiAgICAgICAgICBsb2FkaW5nID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL1A3ZlhQNHMuZ2lmXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjhweCBhdXRvIDBcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFNjcmlwdHVyZVJlZiBrZXk9e2luZGV4fSBkYXRhPXthY3RpdmVTY3JpcHR1cmVUZXh0fSAvPlxuICAgICAgICAgIClcbiAgICAgICAgKSA6IG51bGx9ICovfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yMjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ODtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg0ICsgcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpcnN0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9tYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdXBlcnNjcmlwdCB7XG4gICAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHR1cmUtc2VjdGlvbiB7XG4gICAgICAgICAgYm9yZGVyOiAxcHggc29saWQgI2JkYmRiZDtcbiAgICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICAgIHBhZGRpbmc6IDVweCAxMHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdHVyZSB7XG4gICAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLnNjcmlwdHVyZS0tYWN0aXZlIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgICBmb250LXdlaWdodDogYm9sZDtcbiAgICAgICAgfVxuICAgICAgYH08L3N0eWxlPlxuICAgIDwvZGl2PlxuICApO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgQ29uZmVzc2lvblBhcmFncmFwaDtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ConfessionParagraph.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfessionParagraph);

/***/ }),

/***/ "./components/Popover/index.js":
/*!*************************************!*\
  !*** ./components/Popover/index.js ***!
  \*************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! css-vendor */ "./node_modules/css-vendor/lib/index.js");
/* harmony import */ var css_vendor__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(css_vendor__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! debug */ "./node_modules/next/node_modules/debug/src/browser.js");
/* harmony import */ var debug__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(debug__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! lodash */ "./node_modules/lodash/lodash.js");
/* harmony import */ var lodash__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(lodash__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-dom */ "./node_modules/react-dom/index.js");
/* harmony import */ var react_dom__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_dom__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _layout__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./layout */ "./components/Popover/layout.js");
/* harmony import */ var _on_resize__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./on-resize */ "./components/Popover/on-resize.js");
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./platform */ "./components/Popover/platform.js");
/* harmony import */ var _tip__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./tip */ "./components/Popover/tip.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./utils */ "./components/Popover/utils.js");
function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }

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











var log = debug__WEBPACK_IMPORTED_MODULE_1___default()("react-popover");
var supportedCSSValue = _utils__WEBPACK_IMPORTED_MODULE_9__["default"].clientOnly(css_vendor__WEBPACK_IMPORTED_MODULE_0__["supportedValue"]);

var jsprefix = function jsprefix(x) {
  return "".concat(css_vendor__WEBPACK_IMPORTED_MODULE_0__["prefix"].js).concat(x);
};

var cssprefix = function cssprefix(x) {
  return "".concat(css_vendor__WEBPACK_IMPORTED_MODULE_0__["prefix"].css).concat(x);
};

var cssvalue = function cssvalue(prop, value) {
  return supportedCSSValue(prop, value) || cssprefix(value);
};

var coreStyle = {
  position: "absolute",
  top: 0,
  left: 0,
  display: cssvalue("display", "flex")
};
var faces = {
  above: "down",
  right: "left",
  below: "up",
  left: "right"
};
/* Flow mappings. Each map maps the flow domain to another domain. */

var flowToTipTranslations = {
  row: "translateY",
  column: "translateX"
};
var flowToPopoverTranslations = {
  row: "translateX",
  column: "translateY"
};

var Popover =
/*#__PURE__*/
function (_React$Component) {
  _inherits(Popover, _React$Component);

  // static propTypes = {
  //   body: T.node.isRequired,
  //   children: T.element.isRequired,
  //   appendTarget: T.object,
  //   className: T.string,
  //   enterExitTransitionDurationMs: T.number,
  //   isOpen: T.bool,
  //   offset: T.number,
  //   place: T.oneOf(Layout.validTypeValues),
  //   preferPlace: T.oneOf(Layout.validTypeValues),
  //   refreshIntervalMs: T.oneOfType([T.number, T.bool]),
  //   style: T.object,
  //   tipSize: T.number,
  //   onOuterAction: T.func
  // };
  function Popover(props) {
    var _this;

    _classCallCheck(this, Popover);

    _this = _possibleConstructorReturn(this, _getPrototypeOf(Popover).call(this, props));

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkTargetReposition", function () {
      if (_this.measureTargetBounds()) _this.resolvePopoverLayout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "checkForOuterAction", function (event) {
      var isOuterAction = !_this.containerEl.contains(event.target) && !_this.targetEl.contains(event.target);
      if (isOuterAction) _this.props.onOuterAction(event);
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onTargetResize", function () {
      log("Recalculating layout because _target_ resized!");

      _this.measureTargetBounds();

      _this.resolvePopoverLayout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onPopoverResize", function () {
      log("Recalculating layout because _popover_ resized!");

      _this.measurePopoverSize();

      _this.resolvePopoverLayout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFrameScroll", function () {
      log("Recalculating layout because _frame_ scrolled!");

      _this.measureTargetBounds();

      _this.resolvePopoverLayout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "onFrameResize", function () {
      log("Recalculating layout because _frame_ resized!");

      _this.measureFrameBounds();

      _this.resolvePopoverLayout();
    });

    _defineProperty(_assertThisInitialized(_assertThisInitialized(_this)), "getContainerNodeRef", function (containerEl) {
      Object.assign(_assertThisInitialized(_assertThisInitialized(_this)), {
        containerEl: containerEl
      });
    });

    _this.state = {
      standing: "above",
      exited: !_this.props.isOpen,
      // for animation-dependent rendering, should popover close/open?
      exiting: false,
      // for tracking in-progress animations
      toggle: _this.props.isOpen || false // for business logic tracking, should popover close/open?

    };
    return _this;
  }

  _createClass(Popover, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      /* Our component needs a DOM Node reference to the child so that it can be
      measured so that we can correctly layout the popover. We do not have any
      control over the child so cannot leverage refs. We could wrap our own
      primitive component around the child but that could lead to breaking the
      uses layout (e.g. the child is a flex item). Leveraging findDOMNode seems
      to be the only functional solution, despite all the general warnings not to
      use it. We have a legitimate use-case. */
      // eslint-disable-next-line
      this.targetEl = react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.findDOMNode(this);
      if (this.props.isOpen) this.enter();
    }
  }, {
    key: "UNSAFE_componentWillReceiveProps",
    value: function UNSAFE_componentWillReceiveProps(propsNext) {
      //log(`Component received props!`, propsNext)
      var willOpen = !this.props.isOpen && propsNext.isOpen;
      var willClose = this.props.isOpen && !propsNext.isOpen;
      if (willOpen) this.open();else if (willClose) this.close();
    }
  }, {
    key: "componentDidUpdate",
    value: function componentDidUpdate(propsPrev, statePrev) {
      //log(`Component did update!`)
      var didOpen = !statePrev.toggle && this.state.toggle;
      var didClose = statePrev.toggle && !this.state.toggle;
      if (didOpen) this.enter();else if (didClose) this.exit();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      /* If the Popover is unmounted while animating,
      clear the animation so no setState occured */
      this.animateExitStop();
      /* If the Popover was never opened then then tracking
      initialization never took place and so calling untrack
      would be an error. Also see issue 55. */

      if (this.hasTracked) this.untrackPopover();
    }
  }, {
    key: "resolvePopoverLayout",
    value: function resolvePopoverLayout() {
      /* Find the optimal zone to position self. Measure the size of each zone and use the one with
      the greatest area. */
      var pickerSettings = {
        preferPlace: this.props.preferPlace,
        place: this.props.place
      };
      /* This is a kludge that solves a general problem very specifically for Popover.
      The problem is subtle. When Popover positioning changes such that it resolves at
      a different orientation, its Size will change because the Tip will toggle between
      extending Height or Width. The general problem of course is that calculating
      zone positioning based on current size is non-trivial if the Size can change once
      resolved to a different zone. Infinite recursion can be triggered as we noted here:
      https://github.com/littlebits/react-popover/issues/18. As an example of how this
      could happen in another way: Imagine the user changes the CSS styling of the popover
      based on whether it was `row` or `column` flow. TODO: Find a solution to generally
      solve this problem so that the user is free to change the Popover styles in any
      way at any time for any arbitrary trigger. There may be value in investigating the
      http://overconstrained.io community for its general layout system via the
      constraint-solver Cassowary. */

      if (this.zone) this.size[this.zone.flow === "row" ? "h" : "w"] += this.props.tipSize;
      var zone = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].pickZone(pickerSettings, this.frameBounds, this.targetBounds, this.size);
      if (this.zone) this.size[this.zone.flow === "row" ? "h" : "w"] -= this.props.tipSize;
      var tb = this.targetBounds;
      this.zone = zone;
      log("zone", zone);
      this.setState({
        standing: zone.standing
      });
      var axis = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].axes[zone.flow];
      log("axes", axis);
      var dockingEdgeBufferLength = Math.round(getComputedStyle(this.bodyEl).borderRadius.slice(0, -2)) || 0;
      var scrollSize = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].El.calcScrollSize(this.frameEl);
      scrollSize.main = scrollSize[axis.main.size];
      scrollSize.cross = scrollSize[axis.cross.size];
      /* When positioning self on the cross-axis do not exceed frame bounds. The strategy to achieve
      this is thus: First position cross-axis self to the cross-axis-center of the the target. Then,
      offset self by the amount that self is past the boundaries of frame. */

      var pos = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].calcRelPos(zone, tb, this.size);
      /* Offset allows users to control the distance betweent the tip and the target. */

      pos[axis.main.start] += this.props.offset * zone.order;
      /* Constrain containerEl Position within frameEl. Try not to penetrate a visually-pleasing buffer from
      frameEl. `frameBuffer` length is based on tipSize and its offset. */

      var frameBuffer = this.props.tipSize + this.props.offset;
      var hangingBufferLength = dockingEdgeBufferLength * 2 + this.props.tipSize * 2 + frameBuffer;
      var frameCrossStart = this.frameBounds[axis.cross.start];
      var frameCrossEnd = this.frameBounds[axis.cross.end];
      var frameCrossLength = this.frameBounds[axis.cross.size];
      var frameCrossInnerLength = frameCrossLength - frameBuffer * 2;
      var frameCrossInnerStart = frameCrossStart + frameBuffer;
      var frameCrossInnerEnd = frameCrossEnd - frameBuffer;
      var popoverCrossStart = pos[axis.cross.start];
      var popoverCrossEnd = pos[axis.cross.end];
      /* If the popover dose not fit into frameCrossLength then just position it to the `frameCrossStart`.
      popoverCrossLength` will now be forced to overflow into the `Frame` */

      if (pos.crossLength > frameCrossLength) {
        log("popoverCrossLength does not fit frame.");
        pos[axis.cross.start] = 0;
        /* If the `popoverCrossStart` is forced beyond some threshold of `targetCrossLength` then bound
        it (`popoverCrossStart`). */
      } else if (tb[axis.cross.end] < hangingBufferLength) {
        log("popoverCrossStart cannot hang any further without losing target.");
        pos[axis.cross.start] = tb[axis.cross.end] - hangingBufferLength;
        /* checking if the cross start of the target area is within the frame and it makes sense
        to try fitting popover into the frame. */
      } else if (tb[axis.cross.start] > frameCrossInnerEnd) {
        log("popoverCrossStart cannot hang any further without losing target.");
        pos[axis.cross.start] = tb[axis.cross.start] - this.size[axis.cross.size];
        /* If the `popoverCrossStart` does not fit within the inner frame (honouring buffers) then
        just center the popover in the remaining `frameCrossLength`. */
      } else if (pos.crossLength > frameCrossInnerLength) {
        log("popoverCrossLength does not fit within buffered frame.");
        pos[axis.cross.start] = (frameCrossLength - pos.crossLength) / 2;
      } else if (popoverCrossStart < frameCrossInnerStart) {
        log("popoverCrossStart cannot reverse without exceeding frame.");
        pos[axis.cross.start] = frameCrossInnerStart;
      } else if (popoverCrossEnd > frameCrossInnerEnd) {
        log("popoverCrossEnd cannot travel without exceeding frame.");
        pos[axis.cross.start] = pos[axis.cross.start] - (pos[axis.cross.end] - frameCrossInnerEnd);
      }
      /* So far the link position has been calculated relative to the target. To calculate the absolute
      position we need to factor the `Frame``s scroll position */


      pos[axis.cross.start] += scrollSize.cross;
      pos[axis.main.start] += scrollSize.main;
      /* Apply `flow` and `order` styles. This can impact subsequent measurements of height and width
      of the container. When tip changes orientation position due to changes from/to `row`/`column`
      width`/`height` will be impacted. Our layout monitoring will catch these cases and automatically
      recalculate layout. */

      if (this.containerEl) {
        this.containerEl.style.flexFlow = zone.flow;
        this.containerEl.style[jsprefix("FlexFlow")] = this.containerEl.style.flexFlow;
      }

      this.bodyEl.style.order = zone.order;
      this.bodyEl.style[jsprefix("Order")] = this.bodyEl.style.order;
      /* Apply Absolute Positioning. */

      log("pos", pos);

      if (this.containerEl) {
        this.containerEl.style.top = "".concat(pos.y, "px");
        this.containerEl.style.left = "".concat(pos.x, "px");
      }
      /* Calculate Tip Position */


      var tipCrossPos =
      /* Get the absolute tipCrossCenter. Tip is positioned relative to containerEl
      but it aims at targetCenter which is positioned relative to frameEl... we
      need to cancel the containerEl positioning so as to hit our intended position. */
      _layout__WEBPACK_IMPORTED_MODULE_5__["default"].centerOfBoundsFromBounds(zone.flow, "cross", tb, pos) +
      /* centerOfBounds does not account for scroll so we need to manually add that
      here. */
      scrollSize.cross -
      /* Center tip relative to self. We do not have to calcualte half-of-tip-size since tip-size
      specifies the length from base to tip which is half of total length already. */
      this.props.tipSize;
      if (tipCrossPos < dockingEdgeBufferLength) tipCrossPos = dockingEdgeBufferLength;else if (tipCrossPos > pos.crossLength - dockingEdgeBufferLength - this.props.tipSize * 2) {
        tipCrossPos = pos.crossLength - dockingEdgeBufferLength - this.props.tipSize * 2;
      }
      this.tipEl.style.transform = "".concat(flowToTipTranslations[zone.flow], "(").concat(tipCrossPos, "px)");
      this.tipEl.style[jsprefix("Transform")] = this.tipEl.style.transform;
    }
  }, {
    key: "measurePopoverSize",
    value: function measurePopoverSize() {
      this.size = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].El.calcSize(this.containerEl);
    }
  }, {
    key: "measureTargetBounds",
    value: function measureTargetBounds() {
      var newTargetBounds = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].El.calcBounds(this.targetEl);

      if (this.targetBounds && _layout__WEBPACK_IMPORTED_MODULE_5__["default"].equalCoords(this.targetBounds, newTargetBounds)) {
        return false;
      }

      this.targetBounds = newTargetBounds;
      return true;
    }
  }, {
    key: "open",
    value: function open() {
      if (this.state.exiting) this.animateExitStop();
      this.setState({
        toggle: true,
        exited: false
      });
    }
  }, {
    key: "close",
    value: function close() {
      this.setState({
        toggle: false
      });
    }
  }, {
    key: "enter",
    value: function enter() {
      if (_platform__WEBPACK_IMPORTED_MODULE_7__["default"].isServer) return;
      log("enter!");
      this.trackPopover();
      this.animateEnter();
    }
  }, {
    key: "exit",
    value: function exit() {
      log("exit!");
      this.animateExit();
      this.untrackPopover();
    }
  }, {
    key: "animateExitStop",
    value: function animateExitStop() {
      clearTimeout(this.exitingAnimationTimer1);
      clearTimeout(this.exitingAnimationTimer2);
      this.setState({
        exiting: false
      });
    }
  }, {
    key: "animateExit",
    value: function animateExit() {
      var _this2 = this;

      this.setState({
        exiting: true
      });
      this.exitingAnimationTimer2 = setTimeout(function () {
        setTimeout(function () {
          if (_this2.containerEl) {
            _this2.containerEl.style.transform = "".concat(flowToPopoverTranslations[_this2.zone.flow], "(").concat(_this2.zone.order * 50, "px)");
            _this2.containerEl.style.opacity = "0";
          }
        }, 0);
      }, 0);
      this.exitingAnimationTimer1 = setTimeout(function () {
        _this2.setState({
          exited: true,
          exiting: false
        });
      }, this.props.enterExitTransitionDurationMs);
    }
  }, {
    key: "animateEnter",
    value: function animateEnter() {
      /* Prepare `entering` style so that we can then animate it toward `entered`. */
      this.containerEl.style.transform = "".concat(flowToPopoverTranslations[this.zone.flow], "(").concat(this.zone.order * 50, "px)");
      this.containerEl.style[jsprefix("Transform")] = this.containerEl.style.transform;
      this.containerEl.style.opacity = "0";
      /* After initial layout apply transition animations. */

      /* Hack: http://stackoverflow.com/questions/3485365/how-can-i-force-webkit-to-redraw-repaint-to-propagate-style-changes */

      this.containerEl.offsetHeight; // eslint-disable-line no-unused-expressions

      /* If enterExitTransitionDurationMs is falsy, tip animation should be also disabled */

      if (this.props.enterExitTransitionDurationMs) {
        this.tipEl.style.transition = "transform 150ms ease-in";
        this.tipEl.style[jsprefix("Transition")] = "".concat(cssprefix("transform"), " 150ms ease-in");
      }

      this.containerEl.style.transitionProperty = "top, left, opacity, transform";
      this.containerEl.style.transitionDuration = "".concat(this.props.enterExitTransitionDurationMs, "ms");
      this.containerEl.style.transitionTimingFunction = "cubic-bezier(0.230, 1.000, 0.320, 1.000)";
      this.containerEl.style.opacity = "1";
      this.containerEl.style.transform = "translateY(0)";
      this.containerEl.style[jsprefix("Transform")] = this.containerEl.style.transform;
    }
  }, {
    key: "trackPopover",
    value: function trackPopover() {
      var minScrollRefreshIntervalMs = 200;
      var minResizeRefreshIntervalMs = 200;
      /* Get references to DOM elements. */

      this.bodyEl = this.containerEl.querySelector(".Popover-body");
      this.tipEl = this.containerEl.querySelector(".Popover-tip");
      /* Note: frame is hardcoded to window now but we think it will
      be a nice feature in the future to allow other frames to be used
      such as local elements that further constrain the popover`s world. */

      this.frameEl = _platform__WEBPACK_IMPORTED_MODULE_7__["default"].window;
      this.hasTracked = true;
      /* Set a general interval for checking if target position changed. There is no way
      to know this information without polling. */

      if (this.props.refreshIntervalMs) {
        this.checkLayoutInterval = setInterval(this.checkTargetReposition, this.props.refreshIntervalMs);
      }
      /* Watch for boundary changes in all deps, and when one of them changes, recalculate layout.
      This layout monitoring must be bound immediately because a layout recalculation can recursively
      cause a change in boundaries. So if we did a one-time force-layout before watching boundaries
      our final position calculations could be wrong. See comments in resolver function for details
      about which parts can trigger recursive recalculation. */


      this.onFrameScroll = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"])(this.onFrameScroll, minScrollRefreshIntervalMs);
      this.onFrameResize = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"])(this.onFrameResize, minResizeRefreshIntervalMs);
      this.onPopoverResize = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"])(this.onPopoverResize, minResizeRefreshIntervalMs);
      this.onTargetResize = Object(lodash__WEBPACK_IMPORTED_MODULE_2__["throttle"])(this.onTargetResize, minResizeRefreshIntervalMs);
      this.frameEl.addEventListener("scroll", this.onFrameScroll);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].on(this.frameEl, this.onFrameResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].on(this.containerEl, this.onPopoverResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].on(this.targetEl, this.onTargetResize);
      /* Track user actions on the page. Anything that occurs _outside_ the Popover boundaries
      should close the Popover. */

      _platform__WEBPACK_IMPORTED_MODULE_7__["default"].document.addEventListener("mousedown", this.checkForOuterAction);
      _platform__WEBPACK_IMPORTED_MODULE_7__["default"].document.addEventListener("touchstart", this.checkForOuterAction);
      /* Kickstart layout at first boot. */

      this.measurePopoverSize();
      this.measureFrameBounds();
      this.measureTargetBounds();
      this.resolvePopoverLayout();
    }
  }, {
    key: "untrackPopover",
    value: function untrackPopover() {
      clearInterval(this.checkLayoutInterval);
      this.frameEl.removeEventListener("scroll", this.onFrameScroll);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].off(this.frameEl, this.onFrameResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].off(this.containerEl, this.onPopoverResize);
      _on_resize__WEBPACK_IMPORTED_MODULE_6__["default"].off(this.targetEl, this.onTargetResize);
      _platform__WEBPACK_IMPORTED_MODULE_7__["default"].document.removeEventListener("mousedown", this.checkForOuterAction);
      _platform__WEBPACK_IMPORTED_MODULE_7__["default"].document.removeEventListener("touchstart", this.checkForOuterAction);
      this.hasTracked = false;
    }
  }, {
    key: "measureFrameBounds",
    value: function measureFrameBounds() {
      this.frameBounds = _layout__WEBPACK_IMPORTED_MODULE_5__["default"].El.calcBounds(this.frameEl);
    }
  }, {
    key: "render",
    value: function render() {
      var _this$props = this.props,
          _this$props$className = _this$props.className,
          className = _this$props$className === void 0 ? "" : _this$props$className,
          _this$props$style = _this$props.style,
          style = _this$props$style === void 0 ? {} : _this$props$style,
          tipSize = _this$props.tipSize,
          _this$props$width = _this$props.width,
          width = _this$props$width === void 0 ? 230 : _this$props$width;
      var standing = this.state.standing;
      var popoverProps = {
        className: "Popover Popover-".concat(standing, " ").concat(className),
        style: _objectSpread({}, coreStyle, style)
      };
      var popover = this.state.exited ? null : react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", _extends({
        ref: this.getContainerNodeRef
      }, popoverProps), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement("div", {
        className: "Popover-body",
        children: this.props.body,
        style: {
          background: "#fff",
          borderRadius: 3,
          boxShadow: "0 1px 2px rgba(0,0,0,.25), 0 0 1px rgba(0,0,0,.35)",
          position: "relative",
          top: -8,
          width: width
        }
      }), react__WEBPACK_IMPORTED_MODULE_3___default.a.createElement(_tip__WEBPACK_IMPORTED_MODULE_8__["default"], {
        direction: faces[standing],
        size: tipSize
      }));
      return [this.props.children, _platform__WEBPACK_IMPORTED_MODULE_7__["default"].isClient && react_dom__WEBPACK_IMPORTED_MODULE_4___default.a.createPortal(popover, this.props.appendTarget)];
    }
  }]);

  return Popover;
}(react__WEBPACK_IMPORTED_MODULE_3___default.a.Component);

_defineProperty(Popover, "defaultProps", {
  tipSize: 7,
  preferPlace: null,
  place: null,
  offset: 4,
  isOpen: false,
  onOuterAction: _utils__WEBPACK_IMPORTED_MODULE_9__["default"].noop,
  enterExitTransitionDurationMs: 500,
  children: null,
  refreshIntervalMs: 200,
  appendTarget: _platform__WEBPACK_IMPORTED_MODULE_7__["default"].isClient ? _platform__WEBPACK_IMPORTED_MODULE_7__["default"].document.body : null
});

/* harmony default export */ __webpack_exports__["default"] = (Popover);

/***/ }),

/***/ "./components/Popover/layout.js":
/*!**************************************!*\
  !*** ./components/Popover/layout.js ***!
  \**************************************/
/*! exports provided: default, El, types, validTypeValues, calcRelPos, place, pickZone, axes, centerOfSize, centerOfBounds, centerOfBoundsFromBounds, doesFitWithin, equalCoords */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "El", function() { return El; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "types", function() { return types; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "validTypeValues", function() { return validTypeValues; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "calcRelPos", function() { return calcRelPos; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "place", function() { return place; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "pickZone", function() { return pickZone; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "axes", function() { return axes; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerOfSize", function() { return centerOfSize; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerOfBounds", function() { return centerOfBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "centerOfBoundsFromBounds", function() { return centerOfBoundsFromBounds; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "doesFitWithin", function() { return doesFitWithin; });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "./components/Popover/platform.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./components/Popover/utils.js");
/* harmony reexport (safe) */ __webpack_require__.d(__webpack_exports__, "equalCoords", function() { return _utils__WEBPACK_IMPORTED_MODULE_1__["equalRecords"]; });

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }



/* Axes System

This allows us to at-will work in a different orientation
without having to manually keep track of knowing if we should be using
x or y positions. */

var axes = {
  row: {},
  column: {}
};
axes.row.main = {
  start: "x",
  end: "x2",
  size: "w"
};
axes.row.cross = {
  start: "y",
  end: "y2",
  size: "h"
};
axes.column.main = axes.row.cross;
axes.column.cross = axes.row.main;
var types = [{
  name: "side",
  values: ["start", "end"]
}, {
  name: "standing",
  values: ["above", "right", "below", "left"]
}, {
  name: "flow",
  values: ["column", "row"]
}];
var validTypeValues = types.reduce(function (xs, _ref) {
  var values = _ref.values;
  return xs.concat(values);
}, []);

var centerOfSize = function centerOfSize(flow, axis, size) {
  return size[axes[flow][axis].size] / 2;
};

var centerOfBounds = function centerOfBounds(flow, axis, bounds) {
  return bounds[axes[flow][axis].start] + bounds[axes[flow][axis].size] / 2;
};

var centerOfBoundsFromBounds = function centerOfBoundsFromBounds(flow, axis, boundsTo, boundsFrom) {
  return centerOfBounds(flow, axis, boundsTo) - boundsFrom[axes[flow][axis].start];
};

var place = function place(flow, axis, align, bounds, size) {
  var axisProps = axes[flow][axis];
  return align === "center" ? centerOfBounds(flow, axis, bounds) - centerOfSize(flow, axis, size) : align === "end" ? bounds[axisProps.end] : align === "start" ?
  /* DOM rendering unfolds leftward. Therefore if the slave is positioned before
  the master then the slave`s position must in addition be pulled back
  by its [the slave`s] own length. */
  bounds[axisProps.start] - size[axisProps.size] : null;
};
/* Element Layout Queries */


var El = {};

El.calcBounds = function (el) {
  if (el === _platform__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    return {
      x: 0,
      y: 0,
      x2: el.innerWidth + 18,
      y2: el.innerHeight,
      w: el.innerWidth,
      h: el.innerHeight
    };
  }

  var b = el.getBoundingClientRect();
  return {
    x: b.left,
    y: b.top,
    x2: b.right,
    y2: b.bottom,
    w: b.right - b.left,
    h: b.bottom - b.top
  };
};

El.calcSize = function (el) {
  return el === _platform__WEBPACK_IMPORTED_MODULE_0__["window"] ? {
    w: el.innerWidth,
    h: el.innerHeight
  } : {
    w: el.offsetWidth,
    h: el.offsetHeight
  };
};

El.calcScrollSize = function (el) {
  return el === _platform__WEBPACK_IMPORTED_MODULE_0__["window"] ? {
    w: el.scrollX || el.pageXOffset,
    h: el.scrollY || el.pageYOffset
  } : {
    w: el.scrollLeft,
    h: el.scrollTop
  };
};
/* Misc Utilities */


var getPreferenceType = function getPreferenceType(preference) {
  return types.reduce(function (found, type) {
    return found ? found : type.values.indexOf(preference) !== -1 ? type.name : null;
  }, null);
};
/* Dimension Fit Checks */


var fitWithinChecker = function fitWithinChecker(dimension) {
  return function (domainSize, itemSize) {
    return domainSize[dimension] >= itemSize[dimension];
  };
};

var doesWidthFitWithin = fitWithinChecker("w");
var doesHeightFitWithin = fitWithinChecker("h");

var doesFitWithin = function doesFitWithin(domainSize, itemSize) {
  return doesWidthFitWithin(domainSize, itemSize) && doesHeightFitWithin(domainSize, itemSize);
};
/* Errors */


var createPreferenceError = function createPreferenceError(givenValue) {
  return new Error("The given layout placement of \"".concat(givenValue, "\" is not a valid choice. Valid choices are: ").concat(validTypeValues.join(" | "), "."));
};
/* Algorithm for picking the best fitting zone for popover. The current technique will loop through all zones picking the last one that fits.
In the case that none fit we should pick the least-not-fitting zone. */


var pickZone = function pickZone(opts, frameBounds, targetBounds, size) {
  var t = targetBounds;
  var f = frameBounds;
  var zones = [{
    side: "start",
    standing: "above",
    flow: "column",
    order: -1,
    w: f.x2,
    h: t.y
  }, {
    side: "end",
    standing: "right",
    flow: "row",
    order: 1,
    w: f.x2 - t.x2,
    h: f.y2
  }, {
    side: "end",
    standing: "below",
    flow: "column",
    order: 1,
    w: f.x2,
    h: f.y2 - t.y2
  }, {
    side: "start",
    standing: "left",
    flow: "row",
    order: -1,
    w: t.x,
    h: f.y2
  }];
  /* Order the zones by the amount of popup that would be cut out if that zone is used.
     The first one in the array is the one that cuts the least amount.
      const area = size.w * size.h  // Popup area is constant and it does not change the order
  */

  zones.forEach(function (z) {
    // TODO Update to satisfy linter
    // eslint-disable-next-line no-param-reassign
    z.cutOff =
    /* area */
    -Math.max(0, Math.min(z.w, size.w)) * Math.max(0, Math.min(z.h, size.h));
  });
  zones.sort(function (a, b) {
    return a.cutOff - b.cutOff;
  });
  var availZones = zones.filter(function (zone) {
    return doesFitWithin(zone, size);
  });
  /* If a place is required pick it from the available zones if possible. */

  if (opts.place) {
    var type = getPreferenceType(opts.place);
    if (!type) throw createPreferenceError(opts.place);

    var finder = function finder(z) {
      return z[type] === opts.place;
    };

    return Object(_utils__WEBPACK_IMPORTED_MODULE_1__["find"])(finder, availZones) || Object(_utils__WEBPACK_IMPORTED_MODULE_1__["find"])(finder, zones);
  }
  /* If the preferred side is part of the available zones, use that otherwise
  pick the largest available zone. If there are no available zones, pick the
  largest zone. */


  if (opts.preferPlace) {
    var preferenceType = getPreferenceType(opts.preferPlace);
    if (!preferenceType) throw createPreferenceError(opts.preferPlace); // Try to fit first in zone where the pop up fit completely

    var preferredAvailZones = availZones.filter(function (zone) {
      return zone[preferenceType] === opts.preferPlace;
    });
    if (preferredAvailZones.length) return preferredAvailZones[0]; // If there are not areas where the pop up fit completely, it uses the preferred ones
    // in order from the one the fit better

    var preferredZones = zones.filter(function (zone) {
      return zone[preferenceType] === opts.preferPlace;
    });
    if (!availZones.length && preferredZones.length) return preferredZones[0];
  } // Return a zone that fit completely or the one that fit the best


  return availZones.length ? availZones[0] : zones[0];
};
/* TODO Document this. */


var calcRelPos = function calcRelPos(zone, masterBounds, slaveSize) {
  var _ref2;

  var _axes$zone$flow = axes[zone.flow],
      main = _axes$zone$flow.main,
      cross = _axes$zone$flow.cross;
  /* TODO: The slave is hard-coded to align cross-center with master. */

  var crossAlign = "center";
  var mainStart = place(zone.flow, "main", zone.side, masterBounds, slaveSize);
  var mainSize = slaveSize[main.size];
  var crossStart = place(zone.flow, "cross", crossAlign, masterBounds, slaveSize);
  var crossSize = slaveSize[cross.size];
  return _ref2 = {}, _defineProperty(_ref2, main.start, mainStart), _defineProperty(_ref2, "mainLength", mainSize), _defineProperty(_ref2, main.end, mainStart + mainSize), _defineProperty(_ref2, cross.start, crossStart), _defineProperty(_ref2, "crossLength", crossSize), _defineProperty(_ref2, cross.end, crossStart + crossSize), _ref2;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  El: El,
  types: types,
  validTypeValues: validTypeValues,
  calcRelPos: calcRelPos,
  place: place,
  pickZone: pickZone,
  axes: axes,
  centerOfSize: centerOfSize,
  centerOfBounds: centerOfBounds,
  centerOfBoundsFromBounds: centerOfBoundsFromBounds,
  doesFitWithin: doesFitWithin,
  equalCoords: _utils__WEBPACK_IMPORTED_MODULE_1__["equalRecords"]
});


/***/ }),

/***/ "./components/Popover/on-resize.js":
/*!*****************************************!*\
  !*** ./components/Popover/on-resize.js ***!
  \*****************************************/
/*! exports provided: default, on, off, addEventListener, removeEventListener */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "on", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "off", function() { return off; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "addEventListener", function() { return on; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "removeEventListener", function() { return off; });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "./components/Popover/platform.js");
/* harmony import */ var _utils__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./utils */ "./components/Popover/utils.js");
/* eslint no-param-reassign: 0 */


var requestAnimationFrame = _platform__WEBPACK_IMPORTED_MODULE_0__["isServer"] ? _utils__WEBPACK_IMPORTED_MODULE_1__["noop"] : _platform__WEBPACK_IMPORTED_MODULE_0__["window"].requestAnimationFrame || _platform__WEBPACK_IMPORTED_MODULE_0__["window"].mozRequestAnimationFrame || _platform__WEBPACK_IMPORTED_MODULE_0__["window"].webkitRequestAnimationFrame || function (fn) {
  _platform__WEBPACK_IMPORTED_MODULE_0__["window"].setTimeout(fn, 20);
};
var cancelAnimationFrame = _platform__WEBPACK_IMPORTED_MODULE_0__["isServer"] ? _utils__WEBPACK_IMPORTED_MODULE_1__["noop"] : _platform__WEBPACK_IMPORTED_MODULE_0__["window"].cancelAnimationFrame || _platform__WEBPACK_IMPORTED_MODULE_0__["window"].mozCancelAnimationFrame || _platform__WEBPACK_IMPORTED_MODULE_0__["window"].webkitCancelAnimationFrame || _platform__WEBPACK_IMPORTED_MODULE_0__["window"].clearTimeout;
var isIE = _platform__WEBPACK_IMPORTED_MODULE_0__["isServer"] ? false : navigator.userAgent.match(/Trident/);
var namespace = "__resizeDetector__";

var uninitialize = function uninitialize(el) {
  el[namespace].destroy();
  el[namespace] = undefined;
};

var createElementHack = function createElementHack() {
  var el = document.createElement("object");
  el.className = "resize-sensor";
  el.setAttribute("style", "display: block; position: absolute; top: 0; left: 0; height: 100%; width: 100%; overflow: hidden; pointer-events: none; z-index: -1;");
  el.setAttribute("class", "resize-sensor");
  el.setAttribute("tabindex", "-1");
  el.type = "text/html";
  el.data = "about:blank";
  return el;
};

var initialize = function initialize(el) {
  var detector = el[namespace] = {};
  detector.listeners = [];

  var onResize = function onResize(e) {
    /* Keep in mind e.target could be el OR objEl. In this current implementation we don't seem to need to know this but its important
    to not forget e.g. in some future refactoring scenario. */
    if (detector.resizeRAF) cancelAnimationFrame(detector.resizeRAF);
    detector.resizeRAF = requestAnimationFrame(function () {
      detector.listeners.forEach(function (fn) {
        fn(e);
      });
    });
  };

  if (isIE) {
    /* We do not support ie8 and below (or ie9 in compat mode).
    Therefore there is no presence of `attachEvent` here. */
    el.addEventListener("onresize", onResize);

    detector.destroy = function () {
      el.removeEventListener("onresize", onResize);
    };
  } else {
    if (getComputedStyle(el).position === "static") {
      detector.elWasStaticPosition = true;
      el.style.position = "relative";
    }

    var objEl = createElementHack();

    objEl.onload = function ()
    /* event */
    {
      this.contentDocument.defaultView.addEventListener("resize", onResize);
    };

    detector.destroy = function () {
      if (detector.elWasStaticPosition) el.style.position = "";

      if (el.contains(objEl)) {
        // Event handlers will be automatically removed.
        // http://stackoverflow.com/questions/12528049/if-a-dom-element-is-removed-are-its-listeners-also-removed-from-memory
        el.removeChild(objEl);
      }
    };

    el.appendChild(objEl);
  }
};

var on = function on(el, fn) {
  /* Window object natively publishes resize events. We handle it as a
  special case here so that users do not have to think about two APIs. */
  if (el === _platform__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    _platform__WEBPACK_IMPORTED_MODULE_0__["window"].addEventListener("resize", fn);
    return;
  }
  /* Not caching namespace read here beacuse not guaranteed that its available. */


  if (!el[namespace]) initialize(el);
  el[namespace].listeners.push(fn);
};

var off = function off(el, fn) {
  if (el === _platform__WEBPACK_IMPORTED_MODULE_0__["window"]) {
    _platform__WEBPACK_IMPORTED_MODULE_0__["window"].removeEventListener("resize", fn);
    return;
  }

  var detector = el[namespace];
  if (!detector) return;
  var i = detector.listeners.indexOf(fn);
  if (i !== -1) detector.listeners.splice(i, 1);
  if (!detector.listeners.length) uninitialize(el);
};

/* harmony default export */ __webpack_exports__["default"] = ({
  on: on,
  off: off,
  addEventListener: on,
  removeEventListener: off
});


/***/ }),

/***/ "./components/Popover/platform.js":
/*!****************************************!*\
  !*** ./components/Popover/platform.js ***!
  \****************************************/
/*! exports provided: default, isServer, isClient, window, document */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isServer", function() { return isServer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isClient", function() { return isClient; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "window", function() { return WINDOW; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "document", function() { return DOCUMENT; });
var isServer = typeof window === "undefined";
var isClient = !isServer;
var WINDOW = isClient ? window : null;
var DOCUMENT = isClient ? document : null;
/* harmony default export */ __webpack_exports__["default"] = ({
  isServer: isServer,
  isClient: isClient,
  window: WINDOW,
  document: DOCUMENT
});


/***/ }),

/***/ "./components/Popover/tip.js":
/*!***********************************!*\
  !*** ./components/Popover/tip.js ***!
  \***********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);


var Tip = function Tip(props) {
  var direction = props.direction;
  var size = props.size || 24;
  var isPortrait = direction === "up" || direction === "down";
  var mainLength = size;
  var crossLength = size * 2;
  var svgProps = {
    className: "Popover-tip",
    width: isPortrait ? crossLength : mainLength,
    height: isPortrait ? mainLength : crossLength
  };
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", svgProps, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    style: {
      background: "#fff",
      borderBottomWidth: 0,
      borderRightWidth: 0,
      boxShadow: "-1px -1px 1px -1px rgba(0,0,0,.54)",
      height: 14,
      transform: "rotate(45deg)",
      width: 14
    }
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (Tip);

/***/ }),

/***/ "./components/Popover/utils.js":
/*!*************************************!*\
  !*** ./components/Popover/utils.js ***!
  \*************************************/
/*! exports provided: default, find, equalRecords, noop, clientOnly */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "find", function() { return find; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "equalRecords", function() { return equalRecords; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "noop", function() { return noop; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "clientOnly", function() { return clientOnly; });
/* harmony import */ var _platform__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./platform */ "./components/Popover/platform.js");


var find = function find(f, xs) {
  return xs.reduce(function (b, x) {
    return b ? b : f(x) ? x : null;
  }, null);
};

var equalRecords = function equalRecords(o1, o2) {
  for (var key in o1) {
    if (o1[key] !== o2[key]) return false;
  }

  return true;
};

var noop = function noop() {
  return undefined;
};

var clientOnly = function clientOnly(f) {
  return _platform__WEBPACK_IMPORTED_MODULE_0__["isClient"] ? f : noop;
};

/* harmony default export */ __webpack_exports__["default"] = ({
  find: find,
  equalRecords: equalRecords,
  noop: noop,
  clientOnly: clientOnly
});


/***/ }),

/***/ "./node_modules/css-vendor/lib/index.js":
/*!**********************************************!*\
  !*** ./node_modules/css-vendor/lib/index.js ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.supportedValue = exports.supportedProperty = exports.supportedKeyframes = exports.prefix = undefined;

var _prefix = __webpack_require__(/*! ./prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _supportedKeyframes = __webpack_require__(/*! ./supported-keyframes */ "./node_modules/css-vendor/lib/supported-keyframes.js");

var _supportedKeyframes2 = _interopRequireDefault(_supportedKeyframes);

var _supportedProperty = __webpack_require__(/*! ./supported-property */ "./node_modules/css-vendor/lib/supported-property.js");

var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

var _supportedValue = __webpack_require__(/*! ./supported-value */ "./node_modules/css-vendor/lib/supported-value.js");

var _supportedValue2 = _interopRequireDefault(_supportedValue);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * CSS Vendor prefix detection and property feature testing.
 *
 * @copyright Oleg Slobodskoi 2015
 * @website https://github.com/jsstyles/css-vendor
 * @license MIT
 */

exports['default'] = {
  prefix: _prefix2['default'],
  supportedKeyframes: _supportedKeyframes2['default'],
  supportedProperty: _supportedProperty2['default'],
  supportedValue: _supportedValue2['default']
};
exports.prefix = _prefix2['default'];
exports.supportedKeyframes = _supportedKeyframes2['default'];
exports.supportedProperty = _supportedProperty2['default'];
exports.supportedValue = _supportedValue2['default'];

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/appearence.js":
/*!***********************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/appearence.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support old appearance props syntax.
// https://caniuse.com/#search=appearance
exports['default'] = {
  noPrefill: ['appearance'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'appearance') return false;
    if (_prefix2['default'].js === 'ms') return '-webkit-' + prop;
    return _prefix2['default'].css + prop;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/break-props-old.js":
/*!****************************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/break-props-old.js ***!
  \****************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support old break-* props syntax.
// https://caniuse.com/#search=multicolumn
// https://github.com/postcss/autoprefixer/issues/491
// https://github.com/postcss/autoprefixer/issues/177
exports['default'] = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^break-/.test(prop)) return false;
    if (_prefix2['default'].js === 'Webkit') {
      var jsProp = 'WebkitColumn' + (0, _pascalize2['default'])(prop);
      return jsProp in style ? _prefix2['default'].css + 'column-' + prop : false;
    }
    if (_prefix2['default'].js === 'Moz') {
      var _jsProp = 'page' + (0, _pascalize2['default'])(prop);
      return _jsProp in style ? 'page-' + prop : false;
    }
    return false;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/color-adjust.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/color-adjust.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support old color-adjust prop syntax.
// https://caniuse.com/#search=color-adjust
exports['default'] = {
  noPrefill: ['color-adjust'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'color-adjust') return false;
    if (_prefix2['default'].js === 'Webkit') return _prefix2['default'].css + 'print-' + prop;
    return prop;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/flex-2009.js":
/*!**********************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/flex-2009.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propMap = {
  flex: 'box-flex',
  'flex-grow': 'box-flex',
  'flex-direction': ['box-orient', 'box-direction'],
  order: 'box-ordinal-group',
  'align-items': 'box-align',
  'flex-flow': ['box-orient', 'box-direction'],
  'justify-content': 'box-pack'
};

var propKeys = Object.keys(propMap);

var prefixCss = function prefixCss(p) {
  return _prefix2['default'].css + p;
};

// Support old flex spec from 2009.
exports['default'] = {
  supportedProperty: function supportedProperty(prop, style, _ref) {
    var multiple = _ref.multiple;

    if (propKeys.indexOf(prop) > -1) {
      var newProp = propMap[prop];
      if (!Array.isArray(newProp)) {
        return _prefix2['default'].js + (0, _pascalize2['default'])(newProp) in style ? _prefix2['default'].css + newProp : false;
      }
      if (!multiple) return false;
      for (var i = 0; i < newProp.length; i++) {
        if (!(_prefix2['default'].js + (0, _pascalize2['default'])(newProp[0]) in style)) {
          return false;
        }
      }
      return newProp.map(prefixCss);
    }
    return false;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/flex-2012.js":
/*!**********************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/flex-2012.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var propMap = {
  'flex-grow': 'flex-positive',
  'flex-shrink': 'flex-negative',
  'flex-basis': 'flex-preferred-size',
  'justify-content': 'flex-pack',
  order: 'flex-order',
  'align-items': 'flex-align',
  'align-content': 'flex-line-pack'
  // 'align-self' is handled by 'align-self' plugin.


  // Support old flex spec from 2012.
};exports['default'] = {
  supportedProperty: function supportedProperty(prop, style) {
    var newProp = propMap[prop];
    if (!newProp) return false;
    return _prefix2['default'].js + (0, _pascalize2['default'])(newProp) in style ? _prefix2['default'].css + newProp : false;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/index.js":
/*!******************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/index.js ***!
  \******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.noPrefill = exports.propertyDetectors = undefined;

var _appearence = __webpack_require__(/*! ./appearence */ "./node_modules/css-vendor/lib/plugins/appearence.js");

var _appearence2 = _interopRequireDefault(_appearence);

var _breakPropsOld = __webpack_require__(/*! ./break-props-old */ "./node_modules/css-vendor/lib/plugins/break-props-old.js");

var _breakPropsOld2 = _interopRequireDefault(_breakPropsOld);

var _colorAdjust = __webpack_require__(/*! ./color-adjust */ "./node_modules/css-vendor/lib/plugins/color-adjust.js");

var _colorAdjust2 = _interopRequireDefault(_colorAdjust);

var _flex = __webpack_require__(/*! ./flex-2009 */ "./node_modules/css-vendor/lib/plugins/flex-2009.js");

var _flex2 = _interopRequireDefault(_flex);

var _flex3 = __webpack_require__(/*! ./flex-2012 */ "./node_modules/css-vendor/lib/plugins/flex-2012.js");

var _flex4 = _interopRequireDefault(_flex3);

var _inlineLogicalOld = __webpack_require__(/*! ./inline-logical-old */ "./node_modules/css-vendor/lib/plugins/inline-logical-old.js");

var _inlineLogicalOld2 = _interopRequireDefault(_inlineLogicalOld);

var _mask = __webpack_require__(/*! ./mask */ "./node_modules/css-vendor/lib/plugins/mask.js");

var _mask2 = _interopRequireDefault(_mask);

var _prefixed = __webpack_require__(/*! ./prefixed */ "./node_modules/css-vendor/lib/plugins/prefixed.js");

var _prefixed2 = _interopRequireDefault(_prefixed);

var _scrollSnap = __webpack_require__(/*! ./scroll-snap */ "./node_modules/css-vendor/lib/plugins/scroll-snap.js");

var _scrollSnap2 = _interopRequireDefault(_scrollSnap);

var _overscrollBehavior = __webpack_require__(/*! ./overscroll-behavior */ "./node_modules/css-vendor/lib/plugins/overscroll-behavior.js");

var _overscrollBehavior2 = _interopRequireDefault(_overscrollBehavior);

var _transform = __webpack_require__(/*! ./transform */ "./node_modules/css-vendor/lib/plugins/transform.js");

var _transform2 = _interopRequireDefault(_transform);

var _transition = __webpack_require__(/*! ./transition */ "./node_modules/css-vendor/lib/plugins/transition.js");

var _transition2 = _interopRequireDefault(_transition);

var _unprefixed = __webpack_require__(/*! ./unprefixed */ "./node_modules/css-vendor/lib/plugins/unprefixed.js");

var _unprefixed2 = _interopRequireDefault(_unprefixed);

var _writingMode = __webpack_require__(/*! ./writing-mode */ "./node_modules/css-vendor/lib/plugins/writing-mode.js");

var _writingMode2 = _interopRequireDefault(_writingMode);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

function _toConsumableArray(arr) { if (Array.isArray(arr)) { for (var i = 0, arr2 = Array(arr.length); i < arr.length; i++) { arr2[i] = arr[i]; } return arr2; } else { return Array.from(arr); } }

// Please, keep order plugins:
// plugins = [
//   ...plugins,
//    breakPropsOld,
//    inlineLogicalOld,
//    unprefixed,
//    prefixed,
//    scrollSnap,
//    scrollChaining,
//    flex2012,
//    flex2009
// ]
// Plugins without 'noPrefill' value, going last.
// 'flex-*' plugins should be at the bottom.
// 'flex2009' going after 'flex2012'.
// 'prefixed' going after 'unprefixed'
var plugins = [_appearence2['default'], _transform2['default'], _transition2['default'], _mask2['default'], _writingMode2['default'], _colorAdjust2['default'], _breakPropsOld2['default'], _inlineLogicalOld2['default'], _unprefixed2['default'], _prefixed2['default'], _scrollSnap2['default'], _overscrollBehavior2['default'], _flex4['default'], _flex2['default']];

var propertyDetectors = exports.propertyDetectors = plugins.filter(function (p) {
  return p.supportedProperty;
}).map(function (p) {
  return p.supportedProperty;
});

var noPrefill = exports.noPrefill = plugins.filter(function (p) {
  return p.noPrefill;
}).reduce(function (a, p) {
  a.push.apply(a, _toConsumableArray(p.noPrefill));
  return a;
}, []);

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/inline-logical-old.js":
/*!*******************************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/inline-logical-old.js ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support old inline-logical syntax.
// See https://github.com/postcss/autoprefixer/issues/324.
exports['default'] = {
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^(border|margin|padding)-inline/.test(prop)) return false;
    if (_prefix2['default'].js === 'Moz') return prop;
    var newProp = prop.replace('-inline', '');
    return _prefix2['default'].js + (0, _pascalize2['default'])(newProp) in style ? _prefix2['default'].css + newProp : false;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/mask.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/mask.js ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

var _camelize = __webpack_require__(/*! ../utils/camelize */ "./node_modules/css-vendor/lib/utils/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Mask property support cannot detect directly in WebKit browsers,
// but we can use a longhand property instead.
// https://caniuse.com/#search=mask
exports['default'] = {
  noPrefill: ['mask'],
  supportedProperty: function supportedProperty(prop, style) {
    if (!/^mask/.test(prop)) return false;
    if (_prefix2['default'].js === 'Webkit') {
      var longhand = 'mask-image';
      if ((0, _camelize2['default'])(longhand) in style) {
        return prop;
      }
      if (_prefix2['default'].js + (0, _pascalize2['default'])(longhand) in style) {
        return _prefix2['default'].css + prop;
      }
    }
    return prop;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/overscroll-behavior.js":
/*!********************************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/overscroll-behavior.js ***!
  \********************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support overscroll-behavior props syntax.
// https://caniuse.com/#search=overscroll-behavior
exports['default'] = {
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'overscroll-behavior') return false;
    if (_prefix2['default'].js === 'ms') {
      return _prefix2['default'].css + 'scroll-chaining';
    }
    return prop;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/prefixed.js":
/*!*********************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/prefixed.js ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _pascalize = __webpack_require__(/*! ../utils/pascalize */ "./node_modules/css-vendor/lib/utils/pascalize.js");

var _pascalize2 = _interopRequireDefault(_pascalize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Test if property is supported with vendor prefix.
exports['default'] = {
  supportedProperty: function supportedProperty(prop, style) {
    var pascalized = (0, _pascalize2['default'])(prop);
    if (_prefix2['default'].js + pascalized in style) return _prefix2['default'].css + prop;
    // Try webkit fallback.
    if (_prefix2['default'].js !== 'Webkit' && 'Webkit' + pascalized in style) return prop;
    return false;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/scroll-snap.js":
/*!************************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/scroll-snap.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support scroll-snap props syntax.
// https://caniuse.com/#search=scroll-snap
exports['default'] = {
  supportedProperty: function supportedProperty(prop) {
    if (prop.substring(0, 11) !== 'scroll-snap') return false;
    if (_prefix2['default'].js === 'ms') {
      return '' + _prefix2['default'].css + prop;
    }
    return prop;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/transform.js":
/*!**********************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/transform.js ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support transform prop syntax.
// https://caniuse.com/#search=transform
exports['default'] = {
  noPrefill: ['transform'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transform') return false;
    if (options.transform) {
      return prop;
    }
    return _prefix2['default'].css + prop;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/transition.js":
/*!***********************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/transition.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support transition prop syntax.
// https://caniuse.com/#search=transition
exports['default'] = {
  noPrefill: ['transition'],
  supportedProperty: function supportedProperty(prop, style, options) {
    if (prop !== 'transition') return false;
    if (options.transition) {
      return prop;
    }
    return _prefix2['default'].css + prop;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/unprefixed.js":
/*!***********************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/unprefixed.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _camelize = __webpack_require__(/*! ../utils/camelize */ "./node_modules/css-vendor/lib/utils/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Test if a property supported as it is.
// Camelization is required because we can't test using.
// CSS syntax for e.g. in FF.
exports['default'] = {
  supportedProperty: function supportedProperty(prop, style) {
    return (0, _camelize2['default'])(prop) in style ? prop : false;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/plugins/writing-mode.js":
/*!*************************************************************!*\
  !*** ./node_modules/css-vendor/lib/plugins/writing-mode.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _prefix = __webpack_require__(/*! ../prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

// Support writing-mode prop syntax.
// https://caniuse.com/#search=writing-mode
exports['default'] = {
  noPrefill: ['writing-mode'],
  supportedProperty: function supportedProperty(prop) {
    if (prop !== 'writing-mode') return false;
    if (_prefix2['default'].js === 'Webkit' || _prefix2['default'].js === 'ms') {
      return _prefix2['default'].css + prop;
    }
    return prop;
  }
};

/***/ }),

/***/ "./node_modules/css-vendor/lib/prefix.js":
/*!***********************************************!*\
  !*** ./node_modules/css-vendor/lib/prefix.js ***!
  \***********************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});

var _isInBrowser = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var js = ''; // Export javascript style and css style vendor prefixes.
// Based on "transform" support test.

var css = '';

// We should not do anything if required serverside.
if (_isInBrowser2['default']) {
  // Order matters. We need to check Webkit the last one because
  // other vendors use to add Webkit prefixes to some properties
  var jsCssMap = {
    Moz: '-moz-',
    ms: '-ms-',
    O: '-o-',
    Webkit: '-webkit-'
  };

  var _document$createEleme = document.createElement('p'),
      style = _document$createEleme.style;

  var testProp = 'Transform';

  for (var key in jsCssMap) {
    if (key + testProp in style) {
      js = key;
      css = jsCssMap[key];
      break;
    }
  }

  // Correctly detect the Edge browser.
  if (js === 'Webkit' && 'msHyphens' in style) {
    js = 'ms';
    css = jsCssMap.ms;
  }
}

/**
 * Vendor prefix string for the current browser.
 *
 * @type {{js: String, css: String}}
 * @api public
 */
exports['default'] = { js: js, css: css };

/***/ }),

/***/ "./node_modules/css-vendor/lib/supported-keyframes.js":
/*!************************************************************!*\
  !*** ./node_modules/css-vendor/lib/supported-keyframes.js ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedKeyframes;

var _prefix = __webpack_require__(/*! ./prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Test if a keyframe at-rule should be prefixed or not
 *
 * @param {String} vendor prefix string for the current browser.
 * @return {String}
 * @api public
 */

function supportedKeyframes(key) {
  // Keyframes is already prefixed. e.g. key = '@-webkit-keyframes a'
  if (key[1] === '-') return key;
  // No need to prefix IE/Edge. Older browsers will ignore unsupported rules.
  // https://caniuse.com/#search=keyframes
  if (_prefix2['default'].js === 'ms') return key;
  return '@' + _prefix2['default'].css + 'keyframes' + key.substr(10);
}

/***/ }),

/***/ "./node_modules/css-vendor/lib/supported-property.js":
/*!***********************************************************!*\
  !*** ./node_modules/css-vendor/lib/supported-property.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedProperty;

var _isInBrowser = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _plugins = __webpack_require__(/*! ./plugins */ "./node_modules/css-vendor/lib/plugins/index.js");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var el = void 0;
var cache = {};

if (_isInBrowser2['default']) {
  el = document.createElement('p');

  // We test every property on vendor prefix requirement.
  // Once tested, result is cached. It gives us up to 70% perf boost.
  // http://jsperf.com/element-style-object-access-vs-plain-object
  //
  // Prefill cache with known css properties to reduce amount of
  // properties we need to feature test at runtime.
  // http://davidwalsh.name/vendor-prefix
  var computed = window.getComputedStyle(document.documentElement, '');
  for (var key in computed) {
    // eslint-disable-next-line no-restricted-globals
    if (!isNaN(key)) cache[computed[key]] = computed[key];
  }

  // Properties that cannot be correctly detected using the
  // cache prefill method.
  _plugins.noPrefill.forEach(function (x) {
    return delete cache[x];
  });
}

/**
 * Test if a property is supported, returns supported property with vendor
 * prefix if required. Returns `false` if not supported.
 *
 * @param {String} prop dash separated
 * @param {Object} [options]
 * @return {String|Boolean}
 * @api public
 */

function supportedProperty(prop) {
  var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

  // For server-side rendering.
  if (!el) return prop;

  // Remove cache for benchmark tests or return property from the cache.
  if ("development" !== 'benchmark' && cache[prop] != null) {
    return cache[prop];
  }

  // Check if 'transition' or 'transform' natively supported in browser.
  if (prop === 'transition' || prop === 'transform') {
    options[prop] = prop in el.style;
  }

  // Find a plugin for current prefix property.
  for (var i = 0; i < _plugins.propertyDetectors.length; i++) {
    cache[prop] = _plugins.propertyDetectors[i](prop, el.style, options);
    // Break loop, if value found.
    if (cache[prop]) break;
  }

  // Reset styles for current property.
  // Firefox can even throw an error for invalid properties, e.g., "0".
  try {
    el.style[prop] = '';
  } catch (err) {
    return false;
  }

  return cache[prop];
}

/***/ }),

/***/ "./node_modules/css-vendor/lib/supported-value.js":
/*!********************************************************!*\
  !*** ./node_modules/css-vendor/lib/supported-value.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = supportedValue;

var _isInBrowser = __webpack_require__(/*! is-in-browser */ "./node_modules/is-in-browser/dist/module.js");

var _isInBrowser2 = _interopRequireDefault(_isInBrowser);

var _prefix = __webpack_require__(/*! ./prefix */ "./node_modules/css-vendor/lib/prefix.js");

var _prefix2 = _interopRequireDefault(_prefix);

var _supportedProperty = __webpack_require__(/*! ./supported-property */ "./node_modules/css-vendor/lib/supported-property.js");

var _supportedProperty2 = _interopRequireDefault(_supportedProperty);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

var cache = {};
var transitionProperties = {
  transition: 1,
  'transition-property': 1,
  '-webkit-transition': 1,
  '-webkit-transition-property': 1
};
var transPropsRegExp = /(^\s*[\w-]+)|, (\s*[\w-]+)(?![^()]*\))/g;
var el = void 0;

/**
 * Returns prefixed value transition/transform if needed.
 *
 * @param {String} match
 * @param {String} p1
 * @param {String} p2
 * @return {String}
 * @api private
 */
function prefixTransitionCallback(match, p1, p2) {
  if (p1 === 'all') return 'all';
  if (p2 === 'all') return ', all';
  return p1 ? (0, _supportedProperty2['default'])(p1) : ', ' + (0, _supportedProperty2['default'])(p2);
}

if (_isInBrowser2['default']) el = document.createElement('p');

/**
 * Returns prefixed value if needed. Returns `false` if value is not supported.
 *
 * @param {String} property
 * @param {String} value
 * @return {String|Boolean}
 * @api public
 */

function supportedValue(property, value) {
  // For server-side rendering.
  if (!el) return value;

  // It is a string or a number as a string like '1'.
  // We want only prefixable values here.
  // eslint-disable-next-line no-restricted-globals
  if (typeof value !== 'string' || !isNaN(parseInt(value, 10))) {
    return value;
  }

  // Create cache key for current value.
  var cacheKey = property + value;

  // Remove cache for benchmark tests or return value from cache.
  if ("development" !== 'benchmark' && cache[cacheKey] != null) {
    return cache[cacheKey];
  }

  // IE can even throw an error in some cases, for e.g. style.content = 'bar'.
  try {
    // Test value as it is.
    el.style[property] = value;
  } catch (err) {
    // Return false if value not supported.
    cache[cacheKey] = false;
    return false;
  }

  // If 'transition' or 'transition-property' property.
  if (transitionProperties[property]) {
    value = value.replace(transPropsRegExp, prefixTransitionCallback);
  } else if (el.style[property] === '') {
    // Value with a vendor prefix.
    value = _prefix2['default'].css + value;

    // Hardcode test to convert "flex" to "-ms-flexbox" for IE10.
    if (value === '-ms-flex') value = '-ms-flexbox';

    // Test prefixed value.
    el.style[property] = value;

    // Return false if value not supported.
    if (el.style[property] === '') {
      cache[cacheKey] = false;
      return false;
    }
  }

  // Reset styles for current property.
  el.style[property] = '';

  // Write current value to cache.
  cache[cacheKey] = value;

  return cache[cacheKey];
}

/***/ }),

/***/ "./node_modules/css-vendor/lib/utils/camelize.js":
/*!*******************************************************!*\
  !*** ./node_modules/css-vendor/lib/utils/camelize.js ***!
  \*******************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = camelize;
var regExp = /[-\s]+(.)?/g;

/**
 * Replaces the letter with the capital letter
 *
 * @param {String} match
 * @param {String} c
 * @return {String}
 * @api private
 */
function toUpper(match, c) {
  return c ? c.toUpperCase() : '';
}

/**
 * Convert dash separated strings to camel-cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */
function camelize(str) {
  return str.replace(regExp, toUpper);
}

/***/ }),

/***/ "./node_modules/css-vendor/lib/utils/pascalize.js":
/*!********************************************************!*\
  !*** ./node_modules/css-vendor/lib/utils/pascalize.js ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

"use strict";


Object.defineProperty(exports, "__esModule", {
  value: true
});
exports['default'] = pascalize;

var _camelize = __webpack_require__(/*! ./camelize */ "./node_modules/css-vendor/lib/utils/camelize.js");

var _camelize2 = _interopRequireDefault(_camelize);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { 'default': obj }; }

/**
 * Convert dash separated strings to pascal cased.
 *
 * @param {String} str
 * @return {String}
 * @api private
 */
function pascalize(str) {
  return (0, _camelize2['default'])('-' + str);
}

/***/ }),

/***/ "./node_modules/is-in-browser/dist/module.js":
/*!***************************************************!*\
  !*** ./node_modules/is-in-browser/dist/module.js ***!
  \***************************************************/
/*! exports provided: isBrowser, default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "isBrowser", function() { return isBrowser; });
var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };

var isBrowser = (typeof window === "undefined" ? "undefined" : _typeof(window)) === "object" && (typeof document === "undefined" ? "undefined" : _typeof(document)) === 'object' && document.nodeType === 9;

/* harmony default export */ __webpack_exports__["default"] = (isBrowser);


/***/ }),

/***/ "./node_modules/ms/index.js":
/*!**********************************!*\
  !*** ./node_modules/ms/index.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports) {

/**
 * Helpers.
 */

var s = 1000;
var m = s * 60;
var h = m * 60;
var d = h * 24;
var y = d * 365.25;

/**
 * Parse or format the given `val`.
 *
 * Options:
 *
 *  - `long` verbose formatting [false]
 *
 * @param {String|Number} val
 * @param {Object} [options]
 * @throws {Error} throw an error if val is not a non-empty string or a number
 * @return {String|Number}
 * @api public
 */

module.exports = function(val, options) {
  options = options || {};
  var type = typeof val;
  if (type === 'string' && val.length > 0) {
    return parse(val);
  } else if (type === 'number' && isNaN(val) === false) {
    return options.long ? fmtLong(val) : fmtShort(val);
  }
  throw new Error(
    'val is not a non-empty string or a valid number. val=' +
      JSON.stringify(val)
  );
};

/**
 * Parse the given `str` and return milliseconds.
 *
 * @param {String} str
 * @return {Number}
 * @api private
 */

function parse(str) {
  str = String(str);
  if (str.length > 100) {
    return;
  }
  var match = /^((?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|years?|yrs?|y)?$/i.exec(
    str
  );
  if (!match) {
    return;
  }
  var n = parseFloat(match[1]);
  var type = (match[2] || 'ms').toLowerCase();
  switch (type) {
    case 'years':
    case 'year':
    case 'yrs':
    case 'yr':
    case 'y':
      return n * y;
    case 'days':
    case 'day':
    case 'd':
      return n * d;
    case 'hours':
    case 'hour':
    case 'hrs':
    case 'hr':
    case 'h':
      return n * h;
    case 'minutes':
    case 'minute':
    case 'mins':
    case 'min':
    case 'm':
      return n * m;
    case 'seconds':
    case 'second':
    case 'secs':
    case 'sec':
    case 's':
      return n * s;
    case 'milliseconds':
    case 'millisecond':
    case 'msecs':
    case 'msec':
    case 'ms':
      return n;
    default:
      return undefined;
  }
}

/**
 * Short format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtShort(ms) {
  if (ms >= d) {
    return Math.round(ms / d) + 'd';
  }
  if (ms >= h) {
    return Math.round(ms / h) + 'h';
  }
  if (ms >= m) {
    return Math.round(ms / m) + 'm';
  }
  if (ms >= s) {
    return Math.round(ms / s) + 's';
  }
  return ms + 'ms';
}

/**
 * Long format for `ms`.
 *
 * @param {Number} ms
 * @return {String}
 * @api private
 */

function fmtLong(ms) {
  return plural(ms, d, 'day') ||
    plural(ms, h, 'hour') ||
    plural(ms, m, 'minute') ||
    plural(ms, s, 'second') ||
    ms + ' ms';
}

/**
 * Pluralization helper.
 */

function plural(ms, n, name) {
  if (ms < n) {
    return;
  }
  if (ms < n * 1.5) {
    return Math.floor(ms / n) + ' ' + name;
  }
  return Math.ceil(ms / n) + ' ' + name + 's';
}


/***/ }),

/***/ "./node_modules/next/node_modules/debug/src/browser.js":
/*!*************************************************************!*\
  !*** ./node_modules/next/node_modules/debug/src/browser.js ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

/* WEBPACK VAR INJECTION */(function(process) {/**
 * This is the web browser implementation of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = __webpack_require__(/*! ./debug */ "./node_modules/next/node_modules/debug/src/debug.js");
exports.log = log;
exports.formatArgs = formatArgs;
exports.save = save;
exports.load = load;
exports.useColors = useColors;
exports.storage = 'undefined' != typeof chrome
               && 'undefined' != typeof chrome.storage
                  ? chrome.storage.local
                  : localstorage();

/**
 * Colors.
 */

exports.colors = [
  'lightseagreen',
  'forestgreen',
  'goldenrod',
  'dodgerblue',
  'darkorchid',
  'crimson'
];

/**
 * Currently only WebKit-based Web Inspectors, Firefox >= v31,
 * and the Firebug extension (any Firefox version) are known
 * to support "%c" CSS customizations.
 *
 * TODO: add a `localStorage` variable to explicitly enable/disable colors
 */

function useColors() {
  // NB: In an Electron preload script, document will be defined but not fully
  // initialized. Since we know we're in Chrome, we'll just detect this case
  // explicitly
  if (typeof window !== 'undefined' && window.process && window.process.type === 'renderer') {
    return true;
  }

  // is webkit? http://stackoverflow.com/a/16459606/376773
  // document is undefined in react-native: https://github.com/facebook/react-native/pull/1632
  return (typeof document !== 'undefined' && document.documentElement && document.documentElement.style && document.documentElement.style.WebkitAppearance) ||
    // is firebug? http://stackoverflow.com/a/398120/376773
    (typeof window !== 'undefined' && window.console && (window.console.firebug || (window.console.exception && window.console.table))) ||
    // is firefox >= v31?
    // https://developer.mozilla.org/en-US/docs/Tools/Web_Console#Styling_messages
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/) && parseInt(RegExp.$1, 10) >= 31) ||
    // double check webkit in userAgent just in case we are in a worker
    (typeof navigator !== 'undefined' && navigator.userAgent && navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/));
}

/**
 * Map %j to `JSON.stringify()`, since no Web Inspectors do that by default.
 */

exports.formatters.j = function(v) {
  try {
    return JSON.stringify(v);
  } catch (err) {
    return '[UnexpectedJSONParseError]: ' + err.message;
  }
};


/**
 * Colorize log arguments if enabled.
 *
 * @api public
 */

function formatArgs(args) {
  var useColors = this.useColors;

  args[0] = (useColors ? '%c' : '')
    + this.namespace
    + (useColors ? ' %c' : ' ')
    + args[0]
    + (useColors ? '%c ' : ' ')
    + '+' + exports.humanize(this.diff);

  if (!useColors) return;

  var c = 'color: ' + this.color;
  args.splice(1, 0, c, 'color: inherit')

  // the final "%c" is somewhat tricky, because there could be other
  // arguments passed either before or after the %c, so we need to
  // figure out the correct index to insert the CSS into
  var index = 0;
  var lastC = 0;
  args[0].replace(/%[a-zA-Z%]/g, function(match) {
    if ('%%' === match) return;
    index++;
    if ('%c' === match) {
      // we only are interested in the *last* %c
      // (the user may have provided their own)
      lastC = index;
    }
  });

  args.splice(lastC, 0, c);
}

/**
 * Invokes `console.log()` when available.
 * No-op when `console.log` is not a "function".
 *
 * @api public
 */

function log() {
  // this hackery is required for IE8/9, where
  // the `console.log` function doesn't have 'apply'
  return 'object' === typeof console
    && console.log
    && Function.prototype.apply.call(console.log, console, arguments);
}

/**
 * Save `namespaces`.
 *
 * @param {String} namespaces
 * @api private
 */

function save(namespaces) {
  try {
    if (null == namespaces) {
      exports.storage.removeItem('debug');
    } else {
      exports.storage.debug = namespaces;
    }
  } catch(e) {}
}

/**
 * Load `namespaces`.
 *
 * @return {String} returns the previously persisted debug modes
 * @api private
 */

function load() {
  var r;
  try {
    r = exports.storage.debug;
  } catch(e) {}

  // If debug isn't set in LS, and we're in Electron, try to load $DEBUG
  if (!r && typeof process !== 'undefined' && 'env' in process) {
    r = process.env.DEBUG;
  }

  return r;
}

/**
 * Enable namespaces listed in `localStorage.debug` initially.
 */

exports.enable(load());

/**
 * Localstorage attempts to return the localstorage.
 *
 * This is necessary because safari throws
 * when a user disables cookies/localstorage
 * and you attempt to access it.
 *
 * @return {LocalStorage}
 * @api private
 */

function localstorage() {
  try {
    return window.localStorage;
  } catch (e) {}
}

/* WEBPACK VAR INJECTION */}.call(this, __webpack_require__(/*! ./../../../../process/browser.js */ "./node_modules/process/browser.js")))

/***/ }),

/***/ "./node_modules/next/node_modules/debug/src/debug.js":
/*!***********************************************************!*\
  !*** ./node_modules/next/node_modules/debug/src/debug.js ***!
  \***********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {


/**
 * This is the common logic for both the Node.js and web browser
 * implementations of `debug()`.
 *
 * Expose `debug()` as the module.
 */

exports = module.exports = createDebug.debug = createDebug['default'] = createDebug;
exports.coerce = coerce;
exports.disable = disable;
exports.enable = enable;
exports.enabled = enabled;
exports.humanize = __webpack_require__(/*! ms */ "./node_modules/ms/index.js");

/**
 * The currently active debug mode names, and names to skip.
 */

exports.names = [];
exports.skips = [];

/**
 * Map of special "%n" handling functions, for the debug "format" argument.
 *
 * Valid key names are a single, lower or upper-case letter, i.e. "n" and "N".
 */

exports.formatters = {};

/**
 * Previous log timestamp.
 */

var prevTime;

/**
 * Select a color.
 * @param {String} namespace
 * @return {Number}
 * @api private
 */

function selectColor(namespace) {
  var hash = 0, i;

  for (i in namespace) {
    hash  = ((hash << 5) - hash) + namespace.charCodeAt(i);
    hash |= 0; // Convert to 32bit integer
  }

  return exports.colors[Math.abs(hash) % exports.colors.length];
}

/**
 * Create a debugger with the given `namespace`.
 *
 * @param {String} namespace
 * @return {Function}
 * @api public
 */

function createDebug(namespace) {

  function debug() {
    // disabled?
    if (!debug.enabled) return;

    var self = debug;

    // set `diff` timestamp
    var curr = +new Date();
    var ms = curr - (prevTime || curr);
    self.diff = ms;
    self.prev = prevTime;
    self.curr = curr;
    prevTime = curr;

    // turn the `arguments` into a proper Array
    var args = new Array(arguments.length);
    for (var i = 0; i < args.length; i++) {
      args[i] = arguments[i];
    }

    args[0] = exports.coerce(args[0]);

    if ('string' !== typeof args[0]) {
      // anything else let's inspect with %O
      args.unshift('%O');
    }

    // apply any `formatters` transformations
    var index = 0;
    args[0] = args[0].replace(/%([a-zA-Z%])/g, function(match, format) {
      // if we encounter an escaped % then don't increase the array index
      if (match === '%%') return match;
      index++;
      var formatter = exports.formatters[format];
      if ('function' === typeof formatter) {
        var val = args[index];
        match = formatter.call(self, val);

        // now we need to remove `args[index]` since it's inlined in the `format`
        args.splice(index, 1);
        index--;
      }
      return match;
    });

    // apply env-specific formatting (colors, etc.)
    exports.formatArgs.call(self, args);

    var logFn = debug.log || exports.log || console.log.bind(console);
    logFn.apply(self, args);
  }

  debug.namespace = namespace;
  debug.enabled = exports.enabled(namespace);
  debug.useColors = exports.useColors();
  debug.color = selectColor(namespace);

  // env-specific initialization logic for debug instances
  if ('function' === typeof exports.init) {
    exports.init(debug);
  }

  return debug;
}

/**
 * Enables a debug mode by namespaces. This can include modes
 * separated by a colon and wildcards.
 *
 * @param {String} namespaces
 * @api public
 */

function enable(namespaces) {
  exports.save(namespaces);

  exports.names = [];
  exports.skips = [];

  var split = (typeof namespaces === 'string' ? namespaces : '').split(/[\s,]+/);
  var len = split.length;

  for (var i = 0; i < len; i++) {
    if (!split[i]) continue; // ignore empty strings
    namespaces = split[i].replace(/\*/g, '.*?');
    if (namespaces[0] === '-') {
      exports.skips.push(new RegExp('^' + namespaces.substr(1) + '$'));
    } else {
      exports.names.push(new RegExp('^' + namespaces + '$'));
    }
  }
}

/**
 * Disable debug output.
 *
 * @api public
 */

function disable() {
  exports.enable('');
}

/**
 * Returns true if the given mode name is enabled, false otherwise.
 *
 * @param {String} name
 * @return {Boolean}
 * @api public
 */

function enabled(name) {
  var i, len;
  for (i = 0, len = exports.skips.length; i < len; i++) {
    if (exports.skips[i].test(name)) {
      return false;
    }
  }
  for (i = 0, len = exports.names.length; i < len; i++) {
    if (exports.names[i].test(name)) {
      return true;
    }
  }
  return false;
}

/**
 * Coerce `val`.
 *
 * @param {Mixed} val
 * @return {Mixed}
 * @api private
 */

function coerce(val) {
  if (val instanceof Error) return val.stack || val.message;
  return val;
}


/***/ })

})
//# sourceMappingURL=confession.js.6bbdf7b7e5950e57a86b.hot-update.js.map