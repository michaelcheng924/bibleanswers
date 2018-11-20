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
      result = result.replace(match, "<span class=\"scripture-passage-number\">".concat(match.replace("[", "").replace("]", ""), "</span>"));
      return result;
    }, scriptureTopPassage);
    scriptureTopPassage = passageSections.reduce(function (result, match) {
      result = result.replace(match, "<strong>".concat(match, "</strong><br><br>"));
      return result;
    }, scriptureTopPassage);
    var scriptureBottomFootnotes = null;

    if (footnotesBottom) {
      var footnoteNumbers = footnotesBottom.match(/\(\d+\)/g);
      scriptureBottomFootnotes = footnoteNumbers.reduce(function (result, match, index) {
        var spacing = index === 0 ? "" : "<br><br>";
        result = result.replace(match, "".concat(spacing, "<span class=\"scripture-footnumber-number\">").concat(match.replace("(", "").replace(")", "."), "</span>"));
        return result;
      }, footnotesBottom);
    }

    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      key: data.passage_meta[index].canonical,
      className: "jsx-3943398622"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3943398622" + " " + "scripture-header"
    }, "".concat(canonical, " (ESV)")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3943398622" + " " + "scripture-text"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: scriptureTopPassage
      },
      className: "jsx-3943398622"
    }), footnotesBottom ? react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      className: "jsx-3943398622"
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3943398622"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("strong", {
      className: "jsx-3943398622"
    }, "Footnotes"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3943398622"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("br", {
      className: "jsx-3943398622"
    }), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
      dangerouslySetInnerHTML: {
        __html: scriptureBottomFootnotes
      },
      className: "jsx-3943398622"
    })) : null), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
      styleId: "3943398622",
      css: "p.jsx-3943398622{font-size:21px;line-height:1.58;margin:0;margin-top:29px;}@media screen and (max-width:768px){p.jsx-3943398622{font-size:18px;margin-top:21px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9TY3JpcHR1cmVSZWYuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUZvQixBQUc0QixBQVFFLGVBUEEsQUFRQyxnQkFDbEIsQ0FSUyxTQUNPLGdCQUNsQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL2NvbXBvbmVudHMvU2NyaXB0dXJlUmVmLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBTY3JpcHR1cmVSZWYgPSAoeyBkYXRhIH0pID0+IHtcbiAgcmV0dXJuIGRhdGEucGFzc2FnZXMubWFwKChwYXNzYWdlLCBpbmRleCkgPT4ge1xuICAgIGNvbnN0IGNhbm9uaWNhbCA9IGRhdGEucGFzc2FnZV9tZXRhW2luZGV4XS5jYW5vbmljYWw7XG4gICAgbGV0IHBhc3NhZ2VUZXh0ID0gcGFzc2FnZS5yZXBsYWNlKGNhbm9uaWNhbCwgXCJcIikucmVwbGFjZShcIihFU1YpXCIsIFwiXCIpO1xuXG4gICAgY29uc3QgW3Bhc3NhZ2VUb3AsIGZvb3Rub3Rlc0JvdHRvbV0gPSBwYXNzYWdlVGV4dC5zcGxpdChcIkZvb3Rub3Rlc1wiKTtcblxuICAgIGNvbnN0IHBhc3NhZ2VGb290bm90ZXMgPSBwYXNzYWdlVG9wLm1hdGNoKC9cXChcXGQrXFwpL2cpIHx8IFtdO1xuICAgIGNvbnN0IHBhc3NhZ2VOdW1iZXJzID0gcGFzc2FnZVRvcC5tYXRjaCgvXFxbXFxkK1xcXS9nKSB8fCBbXTtcbiAgICBjb25zdCBwYXNzYWdlU2VjdGlvbnMgPSBwYXNzYWdlVG9wLm1hdGNoKC9bYS16QS1aIF0rXFxuXFxuL2cpIHx8IFtdO1xuXG4gICAgbGV0IHNjcmlwdHVyZVRvcFBhc3NhZ2UgPSBwYXNzYWdlRm9vdG5vdGVzLnJlZHVjZSgocmVzdWx0LCBtYXRjaCkgPT4ge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoXG4gICAgICAgIG1hdGNoLFxuICAgICAgICBgPHNwYW4gY2xhc3M9XCJzY3JpcHR1cmUtcGFzc2FnZS1mb290bm90ZVwiPiR7bWF0Y2hcbiAgICAgICAgICAucmVwbGFjZShcIihcIiwgXCJcIilcbiAgICAgICAgICAucmVwbGFjZShcIilcIiwgXCJcIil9PC9zcGFuPmBcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgcGFzc2FnZVRvcCk7XG5cbiAgICBzY3JpcHR1cmVUb3BQYXNzYWdlID0gcGFzc2FnZU51bWJlcnMucmVkdWNlKChyZXN1bHQsIG1hdGNoKSA9PiB7XG4gICAgICByZXN1bHQgPSByZXN1bHQucmVwbGFjZShcbiAgICAgICAgbWF0Y2gsXG4gICAgICAgIGA8c3BhbiBjbGFzcz1cInNjcmlwdHVyZS1wYXNzYWdlLW51bWJlclwiPiR7bWF0Y2hcbiAgICAgICAgICAucmVwbGFjZShcIltcIiwgXCJcIilcbiAgICAgICAgICAucmVwbGFjZShcIl1cIiwgXCJcIil9PC9zcGFuPmBcbiAgICAgICk7XG5cbiAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgfSwgc2NyaXB0dXJlVG9wUGFzc2FnZSk7XG5cbiAgICBzY3JpcHR1cmVUb3BQYXNzYWdlID0gcGFzc2FnZVNlY3Rpb25zLnJlZHVjZSgocmVzdWx0LCBtYXRjaCkgPT4ge1xuICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UobWF0Y2gsIGA8c3Ryb25nPiR7bWF0Y2h9PC9zdHJvbmc+PGJyPjxicj5gKTtcblxuICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICB9LCBzY3JpcHR1cmVUb3BQYXNzYWdlKTtcblxuICAgIGxldCBzY3JpcHR1cmVCb3R0b21Gb290bm90ZXMgPSBudWxsO1xuXG4gICAgaWYgKGZvb3Rub3Rlc0JvdHRvbSkge1xuICAgICAgY29uc3QgZm9vdG5vdGVOdW1iZXJzID0gZm9vdG5vdGVzQm90dG9tLm1hdGNoKC9cXChcXGQrXFwpL2cpO1xuXG4gICAgICBzY3JpcHR1cmVCb3R0b21Gb290bm90ZXMgPSBmb290bm90ZU51bWJlcnMucmVkdWNlKFxuICAgICAgICAocmVzdWx0LCBtYXRjaCwgaW5kZXgpID0+IHtcbiAgICAgICAgICBjb25zdCBzcGFjaW5nID0gaW5kZXggPT09IDAgPyBcIlwiIDogXCI8YnI+PGJyPlwiO1xuXG4gICAgICAgICAgcmVzdWx0ID0gcmVzdWx0LnJlcGxhY2UoXG4gICAgICAgICAgICBtYXRjaCxcbiAgICAgICAgICAgIGAke3NwYWNpbmd9PHNwYW4gY2xhc3M9XCJzY3JpcHR1cmUtZm9vdG51bWJlci1udW1iZXJcIj4ke21hdGNoXG4gICAgICAgICAgICAgIC5yZXBsYWNlKFwiKFwiLCBcIlwiKVxuICAgICAgICAgICAgICAucmVwbGFjZShcIilcIiwgXCIuXCIpfTwvc3Bhbj5gXG4gICAgICAgICAgKTtcblxuICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH0sXG4gICAgICAgIGZvb3Rub3Rlc0JvdHRvbVxuICAgICAgKTtcbiAgICB9XG5cbiAgICByZXR1cm4gKFxuICAgICAgPGRpdiBrZXk9e2RhdGEucGFzc2FnZV9tZXRhW2luZGV4XS5jYW5vbmljYWx9PlxuICAgICAgICA8ZGl2IGNsYXNzTmFtZT1cInNjcmlwdHVyZS1oZWFkZXJcIj57YCR7Y2Fub25pY2FsfSAoRVNWKWB9PC9kaXY+XG4gICAgICAgIDxkaXYgY2xhc3NOYW1lPVwic2NyaXB0dXJlLXRleHRcIj5cbiAgICAgICAgICA8ZGl2IGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7IF9faHRtbDogc2NyaXB0dXJlVG9wUGFzc2FnZSB9fSAvPlxuICAgICAgICAgIHtmb290bm90ZXNCb3R0b20gPyAoXG4gICAgICAgICAgICA8ZGl2PlxuICAgICAgICAgICAgICA8YnIgLz5cbiAgICAgICAgICAgICAgPHN0cm9uZz5Gb290bm90ZXM8L3N0cm9uZz5cbiAgICAgICAgICAgICAgPGJyIC8+XG4gICAgICAgICAgICAgIDxiciAvPlxuICAgICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICAgIF9faHRtbDogc2NyaXB0dXJlQm90dG9tRm9vdG5vdGVzXG4gICAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgLz5cbiAgICAgICAgICAgIDwvZGl2PlxuICAgICAgICAgICkgOiBudWxsfVxuICAgICAgICA8L2Rpdj5cblxuICAgICAgICA8c3R5bGUganN4PntgXG4gICAgICAgICAgcCB7XG4gICAgICAgICAgICBmb250LXNpemU6IDIxcHg7XG4gICAgICAgICAgICBsaW5lLWhlaWdodDogMS41ODtcbiAgICAgICAgICAgIG1hcmdpbjogMDtcbiAgICAgICAgICAgIG1hcmdpbi10b3A6IDI5cHg7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgQG1lZGlhIHNjcmVlbiBhbmQgKG1heC13aWR0aDogNzY4cHgpIHtcbiAgICAgICAgICAgIHAge1xuICAgICAgICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgICAgICAgIG1hcmdpbi10b3A6IDIxcHg7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgfVxuICAgICAgICBgfTwvc3R5bGU+XG4gICAgICA8L2Rpdj5cbiAgICApO1xuICB9KTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IFNjcmlwdHVyZVJlZjtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ScriptureRef.js */"
    }));
  });
};

/* harmony default export */ __webpack_exports__["default"] = (ScriptureRef);

/***/ })

})
//# sourceMappingURL=confession.js.16ea98ac6529a5978844.hot-update.js.map