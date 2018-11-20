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

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: data.passage_meta[index].canonical,
      style: {
        width: 320,
        padding: "10px 20px"
      },
      className: "jsx-1381132870"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1381132870" + " " + "first"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-1381132870"
    }, "".concat(canonical, " (ESV)"))), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: scriptureTopPassage
      },
      className: "jsx-1381132870" + " " + "first"
    }), footnotesBottom ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-1381132870"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      className: "jsx-1381132870" + " " + "first"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("em", {
      className: "jsx-1381132870"
    }, "Footnotes")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("p", {
      dangerouslySetInnerHTML: {
        __html: scriptureBottomFootnotes
      },
      className: "jsx-1381132870" + " " + "first"
    })) : null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "1381132870",
      css: "p.jsx-1381132870{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}.first.jsx-1381132870{margin-top:8px;}@media screen and (max-width:768px){p.jsx-1381132870{font-size:18px;margin-top:21px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9TY3JpcHR1cmVSZWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBcUZvQixBQUc0QixBQU9BLEFBS0UsZUFYQSxBQU9uQixBQUtvQixnQkFDbEIsQ0FaUyxTQUNPLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL2NvbXBvbmVudHMvU2NyaXB0dXJlUmVmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTY3JpcHR1cmVSZWYgPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIGRhdGEucGFzc2FnZXMubWFwKChwYXNzYWdlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNhbm9uaWNhbCA9IGRhdGEucGFzc2FnZV9tZXRhW2luZGV4XS5jYW5vbmljYWw7XG4gICAgbGV0IHBhc3NhZ2VUZXh0ID0gcGFzc2FnZS5yZXBsYWNlKGNhbm9uaWNhbCwgXCJcIikucmVwbGFjZShcIihFU1YpXCIsIFwiXCIpO1xuXG4gICAgY29uc3QgW3Bhc3NhZ2VUb3AsIGZvb3Rub3Rlc0JvdHRvbV0gPSBwYXNzYWdlVGV4dC5zcGxpdChcIkZvb3Rub3Rlc1wiKTtcblxuICAgIGNvbnN0IHBhc3NhZ2VGb290bm90ZXMgPSBwYXNzYWdlVG9wLm1hdGNoKC9cXChcXGQrXFwpL2cpIHx8IFtdO1xuICAgIGNvbnN0IHBhc3NhZ2VOdW1iZXJzID0gcGFzc2FnZVRvcC5tYXRjaCgvXFxbXFxkK1xcXS9nKSB8fCBbXTtcbiAgICBjb25zdCBwYXNzYWdlU2VjdGlvbnMgPSBwYXNzYWdlVG9wLm1hdGNoKC9bYS16QS1aIF0rXFxuXFxuL2cpIHx8IFtdO1xuXG4gICAgbGV0IHNjcmlwdHVyZVRvcFBhc3NhZ2UgPSBwYXNzYWdlRm9vdG5vdGVzLnJlZHVjZSgocmVzdWx0LCBtYXRjaCkgPT4ge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBgPHNwYW4gY2xhc3M9XCJzY3JpcHR1cmUtcGFzc2FnZS1mb290bm90ZVwiPiR7bWF0Y2hcbiAgICAgICAgICAucmVwbGFjZShcIihcIiwgXCJcIilcbiAgICAgICAgICAucmVwbGFjZShcIilcIiwgXCJcIil9PC9zcGFuPmBcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgcGFzc2FnZVRvcCk7XG5cbiAgICBzY3JpcHR1cmVUb3BQYXNzYWdlID0gcGFzc2FnZU51bWJlcnMucmVkdWNlKChyZXN1bHQsIG1hdGNoKSA9PiB7XG4gICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIGA8c3Ryb25nPiR7bWF0Y2gucmVwbGFjZShcIltcIiwgXCJcIikucmVwbGFjZShcIl1cIiwgXCJcIil9PC9zdHJvbmc+YFxuICAgICAgKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBzY3JpcHR1cmVUb3BQYXNzYWdlKTtcblxuICAgIHNjcmlwdHVyZVRvcFBhc3NhZ2UgPSBwYXNzYWdlU2VjdGlvbnMucmVkdWNlKChyZXN1bHQsIG1hdGNoKSA9PiB7XG4gICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShtYXRjaCwgYDxkaXY+PHN0cm9uZz4ke21hdGNofTwvc3Ryb25nPjwvZGl2PmApO1xuXG4gICAgICByZXR1cm4gcmVzdWx0O1xuICAgIH0sIHNjcmlwdHVyZVRvcFBhc3NhZ2UpO1xuXG4gICAgbGV0IHNjcmlwdHVyZUJvdHRvbUZvb3Rub3RlcyA9IG51bGw7XG5cbiAgICBpZiAoZm9vdG5vdGVzQm90dG9tKSB7XG4gICAgICBjb25zdCBmb290bm90ZU51bWJlcnMgPSBmb290bm90ZXNCb3R0b20ubWF0Y2goL1xcKFxcZCtcXCkvZyk7XG5cbiAgICAgIHNjcmlwdHVyZUJvdHRvbUZvb3Rub3RlcyA9IGZvb3Rub3RlTnVtYmVycy5yZWR1Y2UoXG4gICAgICAgIChyZXN1bHQsIG1hdGNoLCBpbmRleCkgPT4ge1xuICAgICAgICAgIHJlc3VsdCA9IHJlc3VsdC5yZXBsYWNlKFxuICAgICAgICAgICAgbWF0Y2gsXG4gICAgICAgICAgICBgPHNwYW4gY2xhc3M9XCJzY3JpcHR1cmUtZm9vdG51bWJlci1udW1iZXJcIj4ke21hdGNoXG4gICAgICAgICAgICAgIC5yZXBsYWNlKFwiKFwiLCBcIlwiKVxuICAgICAgICAgICAgICAucmVwbGFjZShcIilcIiwgXCIuXCIpfTwvc3Bhbj5gXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rub3Rlc0JvdHRvbVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdlxuICAgICAgICBrZXk9e2RhdGEucGFzc2FnZV9tZXRhW2luZGV4XS5jYW5vbmljYWx9XG4gICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMjAsIHBhZGRpbmc6IFwiMTBweCAyMHB4XCIgfX1cbiAgICAgID5cbiAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICA8c3Ryb25nPntgJHtjYW5vbmljYWx9IChFU1YpYH08L3N0cm9uZz5cbiAgICAgICAgPC9wPlxuICAgICAgICA8cFxuICAgICAgICAgIGNsYXNzTmFtZT1cImZpcnN0XCJcbiAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17eyBfX2h0bWw6IHNjcmlwdHVyZVRvcFBhc3NhZ2UgfX1cbiAgICAgICAgLz5cbiAgICAgICAge2Zvb3Rub3Rlc0JvdHRvbSA/IChcbiAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgPHAgY2xhc3NOYW1lPVwiZmlyc3RcIj5cbiAgICAgICAgICAgICAgPGVtPkZvb3Rub3RlczwvZW0+XG4gICAgICAgICAgICA8L3A+XG4gICAgICAgICAgICA8cFxuICAgICAgICAgICAgICBjbGFzc05hbWU9XCJmaXJzdFwiXG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBzY3JpcHR1cmVCb3R0b21Gb290bm90ZXNcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgIC8+XG4gICAgICAgICAgPC9kaXY+XG4gICAgICAgICkgOiBudWxsfVxuXG4gICAgICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgICAgICBwIHtcbiAgICAgICAgICAgIGZvbnQtc2l6ZTogMjFweDtcbiAgICAgICAgICAgIGxpbmUtaGVpZ2h0OiAxLjU4O1xuICAgICAgICAgICAgbWFyZ2luOiAwO1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogMjlweDtcbiAgICAgICAgICB9XG5cbiAgICAgICAgICAuZmlyc3Qge1xuICAgICAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgICAgIH1cblxuICAgICAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgICAgICBwIHtcbiAgICAgICAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICAgICAgICBtYXJnaW4tdG9wOiAyMXB4O1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cbiAgICAgICAgYH08L3N0eWxlPlxuICAgICAgPC9kaXY+XG4gICAgKTtcbiAgfSk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBTY3JpcHR1cmVSZWY7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ScriptureRef.js */"
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ScriptureRef);

/***/ })

})
//# sourceMappingURL=confession.js.e799de375982a82910ea.hot-update.js.map