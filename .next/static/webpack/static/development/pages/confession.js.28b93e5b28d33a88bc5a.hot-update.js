webpackHotUpdate("static/development/pages/confession.js",{

/***/ "./components/ScriptureRef.js":
/*!************************************!*\
  !*** ./components/ScriptureRef.js ***!
  \************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "./node_modules/styled-jsx/style.js");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "./node_modules/react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _Container__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Container */ "./components/Container.js");


function _slicedToArray(arr, i) { return _arrayWithHoles(arr) || _iterableToArrayLimit(arr, i) || _nonIterableRest(); }

function _nonIterableRest() { throw new TypeError("Invalid attempt to destructure non-iterable instance"); }

function _iterableToArrayLimit(arr, i) { var _arr = []; var _n = true; var _d = false; var _e = undefined; try { for (var _i = arr[Symbol.iterator](), _s; !(_n = (_s = _i.next()).done); _n = true) { _arr.push(_s.value); if (i && _arr.length === i) break; } } catch (err) { _d = true; _e = err; } finally { try { if (!_n && _i["return"] != null) _i["return"](); } finally { if (_d) throw _e; } } return _arr; }

function _arrayWithHoles(arr) { if (Array.isArray(arr)) return arr; }




var ScriptureRef = function ScriptureRef(_ref) {
  var data = _ref.data;
  return data.passages.map(function (passage, index) {
    var canonical = data.passage_meta[index].canonical;
    var passageText = passage.replace(canonical, "").replace("(ESV)", "");

    var _passageText$split = passageText.split("Footnotes"),
        _passageText$split2 = _slicedToArray(_passageText$split, 2),
        passageTop = _passageText$split2[0],
        footnotesBottom = _passageText$split2[1];

    var passageFootnotes = passageTop.match(/\(\d+\)/g) || [];
    var passageNumbers = passageTop.match(/\[\d+\]/g) || [];
    var passageSections = passageTop.match(/[a-zA-Z ]+\n\n/g) || [];
    var scriptureTopPassage = passageFootnotes.reduce(function (result, match) {
      result = result.replace(match, "<span class=\"scripture-passage-footnote\">".concat(match.replace("(", "").replace(")", ""), "</span>"));
      return result;
    }, passageTop);
    scriptureTopPassage = passageNumbers.reduce(function (result, match) {
      result = result.replace(match, "<strong>".concat(match.replace("[", "").replace("]", ""), "</strong>"));
      return result;
    }, scriptureTopPassage);
    scriptureTopPassage = passageSections.reduce(function (result, match) {
      result = result.replace(match, "<div><strong>".concat(match, "</strong></div>"));
      return result;
    }, scriptureTopPassage);
    var scriptureBottomFootnotes = null;

    if (footnotesBottom) {
      var footnoteNumbers = footnotesBottom.match(/\(\d+\)/g);
      scriptureBottomFootnotes = footnoteNumbers.reduce(function (result, match, index) {
        result = result.replace(match, "<span class=\"scripture-footnumber-number\">".concat(match.replace("(", "").replace(")", "."), "</span>"));
        return result;
      }, footnotesBottom);
    }

    console.log("======", data);
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_Container__WEBPACK_IMPORTED_MODULE_2__["Container"], {
      key: data.passage_meta[index].canonical
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      style: {
        padding: "5px 10px"
      },
      className: "jsx-2024980457"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2024980457"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-2024980457"
    }, "".concat(canonical, " (ESV)"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: scriptureTopPassage
      },
      className: "jsx-2024980457"
    }), footnotesBottom ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-2024980457"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-2024980457" + " " + "small"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
      className: "jsx-2024980457"
    }, "Footnotes")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: scriptureBottomFootnotes
      },
      className: "jsx-2024980457" + " " + "nomargin small"
    })) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "2024980457",
      css: "p.jsx-2024980457{font-size:16px;line-height:1.25;margin:0;margin-top:8px;}.nomargin.jsx-2024980457{margin-top:0;}.small.jsx-2024980457{font-size:13px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9TY3JpcHR1cmVSZWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZvQixBQUc0QixBQU9GLEFBSUUsYUFIakIsRUFQbUIsQUFXbkIsaUJBVlcsU0FDTSxlQUNqQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL2NvbXBvbmVudHMvU2NyaXB0dXJlUmVmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5pbXBvcnQgeyBDb250YWluZXIgfSBmcm9tIFwiLi9Db250YWluZXJcIjtcblxuY29uc3QgU2NyaXB0dXJlUmVmID0gKHsgZGF0YSB9KSA9PiB7XG4gIHJldHVybiBkYXRhLnBhc3NhZ2VzLm1hcCgocGFzc2FnZSwgaW5kZXgpID0+IHtcbiAgICBjb25zdCBjYW5vbmljYWwgPSBkYXRhLnBhc3NhZ2VfbWV0YVtpbmRleF0uY2Fub25pY2FsO1xuICAgIGxldCBwYXNzYWdlVGV4dCA9IHBhc3NhZ2UucmVwbGFjZShjYW5vbmljYWwsIFwiXCIpLnJlcGxhY2UoXCIoRVNWKVwiLCBcIlwiKTtcblxuICAgIGNvbnN0IFtwYXNzYWdlVG9wLCBmb290bm90ZXNCb3R0b21dID0gcGFzc2FnZVRleHQuc3BsaXQoXCJGb290bm90ZXNcIik7XG5cbiAgICBjb25zdCBwYXNzYWdlRm9vdG5vdGVzID0gcGFzc2FnZVRvcC5tYXRjaCgvXFwoXFxkK1xcKS9nKSB8fCBbXTtcbiAgICBjb25zdCBwYXNzYWdlTnVtYmVycyA9IHBhc3NhZ2VUb3AubWF0Y2goL1xcW1xcZCtcXF0vZykgfHwgW107XG4gICAgY29uc3QgcGFzc2FnZVNlY3Rpb25zID0gcGFzc2FnZVRvcC5tYXRjaCgvW2EtekEtWiBdK1xcblxcbi9nKSB8fCBbXTtcblxuICAgIGxldCBzY3JpcHR1cmVUb3BQYXNzYWdlID0gcGFzc2FnZUZvb3Rub3Rlcy5yZWR1Y2UoKHJlc3VsdCwgbWF0Y2gpID0+IHtcbiAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFxuICAgICAgICBtYXRjaCxcbiAgICAgICAgYDxzcGFuIGNsYXNzPVwic2NyaXB0dXJlLXBhc3NhZ2UtZm9vdG5vdGVcIj4ke21hdGNoXG4gICAgICAgICAgLnJlcGxhY2UoXCIoXCIsIFwiXCIpXG4gICAgICAgICAgLnJlcGxhY2UoXCIpXCIsIFwiXCIpfTwvc3Bhbj5gXG4gICAgICApO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHBhc3NhZ2VUb3ApO1xuXG4gICAgc2NyaXB0dXJlVG9wUGFzc2FnZSA9IHBhc3NhZ2VOdW1iZXJzLnJlZHVjZSgocmVzdWx0LCBtYXRjaCkgPT4ge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBgPHN0cm9uZz4ke21hdGNoLnJlcGxhY2UoXCJbXCIsIFwiXCIpLnJlcGxhY2UoXCJdXCIsIFwiXCIpfTwvc3Ryb25nPmBcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgc2NyaXB0dXJlVG9wUGFzc2FnZSk7XG5cbiAgICBzY3JpcHR1cmVUb3BQYXNzYWdlID0gcGFzc2FnZVNlY3Rpb25zLnJlZHVjZSgocmVzdWx0LCBtYXRjaCkgPT4ge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobWF0Y2gsIGA8ZGl2PjxzdHJvbmc+JHttYXRjaH08L3N0cm9uZz48L2Rpdj5gKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBzY3JpcHR1cmVUb3BQYXNzYWdlKTtcblxuICAgIGxldCBzY3JpcHR1cmVCb3R0b21Gb290bm90ZXMgPSBudWxsO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0JvdHRvbSkge1xuICAgICAgY29uc3QgZm9vdG5vdGVOdW1iZXJzID0gZm9vdG5vdGVzQm90dG9tLm1hdGNoKC9cXChcXGQrXFwpL2cpO1xuXG4gICAgICBzY3JpcHR1cmVCb3R0b21Gb290bm90ZXMgPSBmb290bm90ZU51bWJlcnMucmVkdWNlKFxuICAgICAgICAocmVzdWx0LCBtYXRjaCwgaW5kZXgpID0+IHtcbiAgICAgICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcbiAgICAgICAgICAgIG1hdGNoLFxuICAgICAgICAgICAgYDxzcGFuIGNsYXNzPVwic2NyaXB0dXJlLWZvb3RudW1iZXItbnVtYmVyXCI+JHttYXRjaFxuICAgICAgICAgICAgICAucmVwbGFjZShcIihcIiwgXCJcIilcbiAgICAgICAgICAgICAgLnJlcGxhY2UoXCIpXCIsIFwiLlwiKX08L3NwYW4+YFxuICAgICAgICAgICk7XG5cbiAgICAgICAgICByZXR1cm4gcmVzdWx0O1xuICAgICAgICB9LFxuICAgICAgICBmb290bm90ZXNCb3R0b21cbiAgICAgICk7XG4gICAgfVxuICAgIGNvbnNvbGUubG9nKFwiPT09PT09XCIsIGRhdGEpO1xuICAgIHJldHVybiAoXG4gICAgICA8Q29udGFpbmVyIGtleT17ZGF0YS5wYXNzYWdlX21ldGFbaW5kZXhdLmNhbm9uaWNhbH0+XG4gICAgICAgIDxkaXYgc3R5bGU9e3sgcGFkZGluZzogXCI1cHggMTBweFwiIH19PlxuICAgICAgICAgIDxwPlxuICAgICAgICAgICAgPHN0cm9uZz57YCR7Y2Fub25pY2FsfSAoRVNWKWB9PC9zdHJvbmc+XG4gICAgICAgICAgPC9wPlxuICAgICAgICAgIDxwIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2NyaXB0dXJlVG9wUGFzc2FnZSB9fSAvPlxuICAgICAgICAgIHtmb290bm90ZXNCb3R0b20gPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8cCBjbGFzc05hbWU9XCJzbWFsbFwiPlxuICAgICAgICAgICAgICAgIDxlbT5Gb290bm90ZXM8L2VtPlxuICAgICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICAgIDxwXG4gICAgICAgICAgICAgICAgY2xhc3NOYW1lPVwibm9tYXJnaW4gc21hbGxcIlxuICAgICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgICBfX2h0bWw6IHNjcmlwdHVyZUJvdHRvbUZvb3Rub3Rlc1xuICAgICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIC8+XG4gICAgICAgICAgICA8L2Rpdj5cbiAgICAgICAgICApIDogbnVsbH1cbiAgICAgICAgPC9kaXY+XG5cbiAgICAgICAgPHN0eWxlIGpzeD57YFxuICAgICAgICAgIHAge1xuICAgICAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICAgICAgbGluZS1oZWlnaHQ6IDEuMjU7XG4gICAgICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLm5vbWFyZ2luIHtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDA7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgLnNtYWxsIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMTNweDtcbiAgICAgICAgICB9XG4gICAgICAgIGB9PC9zdHlsZT5cbiAgICAgIDwvQ29udGFpbmVyPlxuICAgICk7XG4gIH0pO1xufTtcblxuZXhwb3J0IGRlZmF1bHQgU2NyaXB0dXJlUmVmO1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ScriptureRef.js */"
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ScriptureRef);

/***/ })

})
//# sourceMappingURL=confession.js.28b93e5b28d33a88bc5a.hot-update.js.map