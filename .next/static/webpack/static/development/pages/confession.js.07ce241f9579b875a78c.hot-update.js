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
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! axios */ "./node_modules/axios/index.js");
/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(axios__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _Popover__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./Popover */ "./components/Popover/index.js");
/* harmony import */ var _ScriptureRef__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./ScriptureRef */ "./components/ScriptureRef.js");


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

  Object(react__WEBPACK_IMPORTED_MODULE_1__["useEffect"])(function () {
    document.addEventListener("click", handleClick);
    return function () {
      document.removeEventListener("click", handleClick);
    };
  });

  function handleClick(event) {
    if (!event.target.classList.contains("scripture")) {
      setActiveScripture(null);
      setActiveScriptureText(null);
    }
  }

  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-158773186"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("h4", {
    className: "jsx-158773186"
  }, "Chapter ", index + 1), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
    className: "jsx-158773186"
  }, paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
      key: section.superscript,
      className: "jsx-158773186"
    }, section.text, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#ref-".concat(index, "-").concat(section.superscript),
      id: "".concat(index, "-").concat(section.superscript),
      className: "jsx-158773186" + " " + "superscript"
    }, "".concat(section.superscript, " ")));
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-158773186" + " " + "scripture-section"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-158773186"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
    className: "jsx-158773186"
  }, "References (click to view)")), paragraph.map(function (section) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: section.superscript,
      className: "jsx-158773186"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      href: "#".concat(index, "-").concat(section.superscript),
      id: "ref-".concat(index, "-").concat(section.superscript),
      className: "jsx-158773186"
    }, "^ "), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-158773186"
    }, section.superscript, "."), " ", section.scriptures ? section.scriptures.map(function (scripture, index) {
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("span", {
        key: scripture,
        className: "jsx-158773186"
      }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Popover__WEBPACK_IMPORTED_MODULE_3__["default"], {
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
          className: "jsx-158773186"
        }) : react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_ScriptureRef__WEBPACK_IMPORTED_MODULE_4__["default"], {
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
            axios__WEBPACK_IMPORTED_MODULE_2___default.a.get("https://bibleanswersapi.herokuapp.com/passages?passages=".concat(encodeURIComponent(savedActiveScripture))).then(function (response) {
              setLoading(false);
              setActiveScriptureText(response.data);
            });
          } else {
            setActiveScriptureText(null);
          }
        },
        className: "jsx-158773186" + " " + "scripture"
      }, scripture)), index === section.scriptures.length - 1 ? "" : "; ");
    }) : null);
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "158773186",
    css: "h4.jsx-158773186{font-size:26px;line-height:1.22;margin:0;margin-top:30px;}p.jsx-158773186{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}h4.jsx-158773186+p.jsx-158773186{margin-top:8px;}.first.jsx-158773186{margin-top:8px;}.nomargin.jsx-158773186{margin-top:0;}a.jsx-158773186{color:#689f38;-webkit-text-decoration:none;text-decoration:none;}@media screen and (max-width:768px){h4.jsx-158773186{font-size:24px;margin-top:22px;}p.jsx-158773186{font-size:18px;margin-top:21px;}}.superscript.jsx-158773186{color:#689f38;font-size:15px;margin-left:1px;position:relative;top:-6px;}.scripture-section.jsx-158773186{font-size:14px;margin-top:20px;}.scripture.jsx-158773186{color:#039be5;cursor:pointer;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db25mZXNzaW9uUGFyYWdyYXBoLmpzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJBQWlKa0IsQUFHMEIsQUFPQSxBQU9BLEFBSUEsQUFJRixBQUlDLEFBTUcsQUFLQSxBQU1ILEFBUUMsQUFLRCxhQWpDaEIsQ0FJdUIsQUFpQk4sQUFhQSxDQXhERSxBQU9BLEFBT25CLEFBSUEsQUFjb0IsQUFLQSxBQWNGLGNBUEEsQUFhbEIsRUF4QkUsQUFLQSxBQWNGLENBbkRXLEFBT0EsU0FOTyxBQU9BLElBb0NFLFlBMUNwQixBQU9BLE1Bb0NXLENBbkJYLFFBb0JBIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db25mZXNzaW9uUGFyYWdyYXBoLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBheGlvcyBmcm9tIFwiYXhpb3NcIjtcbmltcG9ydCBQb3BvdmVyIGZyb20gXCIuL1BvcG92ZXJcIjtcblxuaW1wb3J0IFNjcmlwdHVyZVJlZiBmcm9tIFwiLi9TY3JpcHR1cmVSZWZcIjtcblxuY29uc3QgQ29uZmVzc2lvblBhcmFncmFwaCA9ICh7IHBhcmFncmFwaCwgaW5kZXggfSkgPT4ge1xuICBjb25zdCBbYWN0aXZlU2NyaXB0dXJlLCBzZXRBY3RpdmVTY3JpcHR1cmVdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFthY3RpdmVTY3JpcHR1cmVUZXh0LCBzZXRBY3RpdmVTY3JpcHR1cmVUZXh0XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbbG9hZGluZywgc2V0TG9hZGluZ10gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBkb2N1bWVudC5hZGRFdmVudExpc3RlbmVyKFwiY2xpY2tcIiwgaGFuZGxlQ2xpY2spO1xuXG4gICAgcmV0dXJuICgpID0+IHtcbiAgICAgIGRvY3VtZW50LnJlbW92ZUV2ZW50TGlzdGVuZXIoXCJjbGlja1wiLCBoYW5kbGVDbGljayk7XG4gICAgfTtcbiAgfSk7XG5cbiAgZnVuY3Rpb24gaGFuZGxlQ2xpY2soZXZlbnQpIHtcbiAgICBpZiAoIWV2ZW50LnRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoXCJzY3JpcHR1cmVcIikpIHtcbiAgICAgIHNldEFjdGl2ZVNjcmlwdHVyZShudWxsKTtcbiAgICAgIHNldEFjdGl2ZVNjcmlwdHVyZVRleHQobnVsbCk7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIChcbiAgICA8ZGl2PlxuICAgICAgPGg0PkNoYXB0ZXIge2luZGV4ICsgMX08L2g0PlxuICAgICAgPHA+XG4gICAgICAgIHtwYXJhZ3JhcGgubWFwKHNlY3Rpb24gPT4ge1xuICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICA8c3BhbiBrZXk9e3NlY3Rpb24uc3VwZXJzY3JpcHR9PlxuICAgICAgICAgICAgICB7c2VjdGlvbi50ZXh0fVxuICAgICAgICAgICAgICA8YVxuICAgICAgICAgICAgICAgIGhyZWY9e2AjcmVmLSR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICAgIGlkPXtgJHtpbmRleH0tJHtzZWN0aW9uLnN1cGVyc2NyaXB0fWB9XG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic3VwZXJzY3JpcHRcIlxuICAgICAgICAgICAgICA+e2Ake3NlY3Rpb24uc3VwZXJzY3JpcHR9IGB9PC9hPlxuICAgICAgICAgICAgPC9zcGFuPlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuICAgICAgPC9wPlxuXG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmlwdHVyZS1zZWN0aW9uXCI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPHN0cm9uZz5SZWZlcmVuY2VzIChjbGljayB0byB2aWV3KTwvc3Ryb25nPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAge3BhcmFncmFwaC5tYXAoc2VjdGlvbiA9PiB7XG4gICAgICAgICAgcmV0dXJuIChcbiAgICAgICAgICAgIDxkaXYga2V5PXtzZWN0aW9uLnN1cGVyc2NyaXB0fT5cbiAgICAgICAgICAgICAgPGFcbiAgICAgICAgICAgICAgICBocmVmPXtgIyR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICAgIGlkPXtgcmVmLSR7aW5kZXh9LSR7c2VjdGlvbi5zdXBlcnNjcmlwdH1gfVxuICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAge2BeIGB9XG4gICAgICAgICAgICAgIDwvYT5cbiAgICAgICAgICAgICAgPHN0cm9uZz57c2VjdGlvbi5zdXBlcnNjcmlwdH0uPC9zdHJvbmc+e1wiIFwifVxuICAgICAgICAgICAgICB7c2VjdGlvbi5zY3JpcHR1cmVzXG4gICAgICAgICAgICAgICAgPyBzZWN0aW9uLnNjcmlwdHVyZXMubWFwKChzY3JpcHR1cmUsIGluZGV4KSA9PiB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgICAgICAgPHNwYW4ga2V5PXtzY3JpcHR1cmV9PlxuICAgICAgICAgICAgICAgICAgICAgICAgPFBvcG92ZXJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgaXNPcGVuPXtzY3JpcHR1cmUgPT09IGFjdGl2ZVNjcmlwdHVyZX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgYm9keT17XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYWN0aXZlU2NyaXB0dXJlVGV4dCA/IChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGxvYWRpbmcgPyAoXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL1A3ZlhQNHMuZ2lmXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzdHlsZT17e1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgZGlzcGxheTogXCJmbGV4XCIsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgd2lkdGg6IDI1LFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgdGV4dEFsaWduOiBcImNlbnRlclwiLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgbWFyZ2luOiBcIjhweCBhdXRvIDBcIlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICApIDogKFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA8U2NyaXB0dXJlUmVmXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAga2V5PXtpbmRleH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBkYXRhPXthY3RpdmVTY3JpcHR1cmVUZXh0fVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICkgOiBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgcGxhY2U9XCJiZWxvd1wiXG4gICAgICAgICAgICAgICAgICAgICAgICA+XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDxzcGFuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwic2NyaXB0dXJlXCJcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvbkNsaWNrPXsoKSA9PiB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICBjb25zdCBzYXZlZEFjdGl2ZVNjcmlwdHVyZSA9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNjcmlwdHVyZSA9PT0gYWN0aXZlU2NyaXB0dXJlXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgPyBudWxsXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgOiBzY3JpcHR1cmU7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVNjcmlwdHVyZShzYXZlZEFjdGl2ZVNjcmlwdHVyZSk7XG5cbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGlmIChzYXZlZEFjdGl2ZVNjcmlwdHVyZSkge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzZXRMb2FkaW5nKHRydWUpO1xuXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGF4aW9zXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgLmdldChcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGBodHRwczovL2JpYmxlYW5zd2Vyc2FwaS5oZXJva3VhcHAuY29tL3Bhc3NhZ2VzP3Bhc3NhZ2VzPSR7ZW5jb2RlVVJJQ29tcG9uZW50KFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBzYXZlZEFjdGl2ZVNjcmlwdHVyZVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKX1gXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIC50aGVuKHJlc3BvbnNlID0+IHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldExvYWRpbmcoZmFsc2UpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgc2V0QWN0aXZlU2NyaXB0dXJlVGV4dChyZXNwb25zZS5kYXRhKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9KTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHNldEFjdGl2ZVNjcmlwdHVyZVRleHQobnVsbCk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgICAgICAgICAgICAgPlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHtzY3JpcHR1cmV9XG4gICAgICAgICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cbiAgICAgICAgICAgICAgICAgICAgICAgIDwvUG9wb3Zlcj5cbiAgICAgICAgICAgICAgICAgICAgICAgIHtpbmRleCA9PT0gc2VjdGlvbi5zY3JpcHR1cmVzLmxlbmd0aCAtIDEgPyBcIlwiIDogYDsgYH1cbiAgICAgICAgICAgICAgICAgICAgICA8L3NwYW4+XG4gICAgICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICAgICAgICB9KVxuICAgICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICk7XG4gICAgICAgIH0pfVxuXG4gICAgICAgIHsvKiB7YWN0aXZlU2NyaXB0dXJlVGV4dCA/IChcbiAgICAgICAgICBsb2FkaW5nID8gKFxuICAgICAgICAgICAgPGltZ1xuICAgICAgICAgICAgICBzcmM9XCJodHRwczovL2kuaW1ndXIuY29tL1A3ZlhQNHMuZ2lmXCJcbiAgICAgICAgICAgICAgc3R5bGU9e3tcbiAgICAgICAgICAgICAgICBkaXNwbGF5OiBcImZsZXhcIixcbiAgICAgICAgICAgICAgICBoZWlnaHQ6IDI1LFxuICAgICAgICAgICAgICAgIHdpZHRoOiAyNSxcbiAgICAgICAgICAgICAgICB0ZXh0QWxpZ246IFwiY2VudGVyXCIsXG4gICAgICAgICAgICAgICAgbWFyZ2luOiBcIjhweCBhdXRvIDBcIlxuICAgICAgICAgICAgICB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICApIDogKFxuICAgICAgICAgICAgPFNjcmlwdHVyZVJlZiBrZXk9e2luZGV4fSBkYXRhPXthY3RpdmVTY3JpcHR1cmVUZXh0fSAvPlxuICAgICAgICAgIClcbiAgICAgICAgKSA6IG51bGx9ICovfVxuICAgICAgPC9kaXY+XG5cbiAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgaDQge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjZweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS4yMjtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMzBweDtcbiAgICAgICAgfVxuXG4gICAgICAgIHAge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICBsaW5lLWhlaWdodDogMS41ODtcbiAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgfVxuXG4gICAgICAgIGg0ICsgcCB7XG4gICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICB9XG5cbiAgICAgICAgLmZpcnN0IHtcbiAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgIH1cblxuICAgICAgICAubm9tYXJnaW4ge1xuICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgIH1cblxuICAgICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAgIGg0IHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjRweDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDIycHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC5zdXBlcnNjcmlwdCB7XG4gICAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgICAgZm9udC1zaXplOiAxNXB4O1xuICAgICAgICAgIG1hcmdpbi1sZWZ0OiAxcHg7XG4gICAgICAgICAgcG9zaXRpb246IHJlbGF0aXZlO1xuICAgICAgICAgIHRvcDogLTZweDtcbiAgICAgICAgfVxuXG4gICAgICAgIC5zY3JpcHR1cmUtc2VjdGlvbiB7XG4gICAgICAgICAgZm9udC1zaXplOiAxNHB4O1xuICAgICAgICAgIG1hcmdpbi10b3A6IDIwcHg7XG4gICAgICAgIH1cblxuICAgICAgICAuc2NyaXB0dXJlIHtcbiAgICAgICAgICBjb2xvcjogIzAzOWJlNTtcbiAgICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIH1cbiAgICAgIGB9PC9zdHlsZT5cbiAgICA8L2Rpdj5cbiAgKTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IENvbmZlc3Npb25QYXJhZ3JhcGg7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ConfessionParagraph.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (ConfessionParagraph);

/***/ })

})
//# sourceMappingURL=confession.js.07ce241f9579b875a78c.hot-update.js.map