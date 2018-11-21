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
/******/ 	return __webpack_require__(__webpack_require__.s = 6);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Container.js":
/*!*********************************!*\
  !*** ./components/Container.js ***!
  \*********************************/
/*! exports provided: AmpContainer, Container */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpContainer", function() { return AmpContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Container", function() { return Container; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  margin: 0;\n  overflow-x: auto;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }



var StyledContainer = styled_components__WEBPACK_IMPORTED_MODULE_2___default.a.div(_templateObject());

var AmpContainer = function AmpContainer(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledContainer, null, children);
};

var Container = function Container(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1997678190" + " " + "container"
  }, children, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1997678190",
    css: ".container.jsx-1997678190{color:rgba(0,0,0,0.84);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Db250YWluZXIuanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBbUJnQixBQUdtQyx1QkFDakIsU0FDQyxVQUMrQyxzREFDM0QiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0NvbnRhaW5lci5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5cbmNvbnN0IFN0eWxlZENvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICBtYXJnaW46IDA7XG4gIG92ZXJmbG93LXg6IGF1dG87XG4gIHBhZGRpbmc6IDA7XG4gIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbmA7XG5cbmNvbnN0IEFtcENvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPFN0eWxlZENvbnRhaW5lcj57Y2hpbGRyZW59PC9TdHlsZWRDb250YWluZXI+XG4pO1xuXG5jb25zdCBDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufVxuXG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmNvbnRhaW5lciB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBtYXJnaW46IDA7XG4gICAgICAgIHBhZGRpbmc6IDA7XG4gICAgICAgIGZvbnQtZmFtaWx5OiBIZWx2ZXRpY2EgTmV1ZSwgSGVsdmV0aWNhLCBBcmlhbCwgc2Fucy1zZXJpZjtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuZXhwb3J0IHsgQW1wQ29udGFpbmVyLCBDb250YWluZXIgfTtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/Container.js */"
  }));
};



/***/ }),

/***/ "./components/ListItem.js":
/*!********************************!*\
  !*** ./components/ListItem.js ***!
  \********************************/
/*! exports provided: AmpListItem, ListItem */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AmpListItem", function() { return AmpListItem; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "ListItem", function() { return ListItem; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! moment */ "moment");
/* harmony import */ var moment__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(moment__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_4__);


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





var AmpListItemContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject());
var AmpListItemTitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject2());
var AmpListItemSubtitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var AmpListItemDate = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4());
var AmpAnswerImageContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject5());
var StyledAmpImg = styled_components__WEBPACK_IMPORTED_MODULE_3___default()(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["AmpImg"])(_templateObject6());

var AmpListItem =
/*#__PURE__*/
function (_Component) {
  _inherits(AmpListItem, _Component);

  function AmpListItem() {
    _classCallCheck(this, AmpListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(AmpListItem).apply(this, arguments));
  }

  _createClass(AmpListItem, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          date_added = _this$props.date_added,
          image_url_small = _this$props.image_url_small,
          subtitle = _this$props.subtitle,
          title = _this$props.title,
          noAmp = _this$props.noAmp;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpListItemContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpListItemTitle, null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpListItemSubtitle, null, subtitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpListItemDate, null, date_added ? moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date_added)).format("MMM Do, YYYY") : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AmpAnswerImageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(StyledAmpImg, {
        specName: "default",
        src: image_url_small,
        width: "80",
        height: "80",
        alt: "AMP"
      })));
    }
  }]);

  return AmpListItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);

var ListItemContainer = function ListItemContainer(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-3189911355" + " " + "list-item-container"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "3189911355",
    css: ".list-item-container.jsx-3189911355{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}.list-item-container.jsx-3189911355:hover{background:#eee;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFxRmdCLEFBRzRCLEFBVUgsZ0JBQ2xCLDZFQVZpQixlQUNGLDBFQUNpQixtSEFDWCxtQkFDRCxrQkFDRyxrREFDdkIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmNvbnN0IEFtcExpc3RJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtU3VidGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuYDtcblxuY29uc3QgQW1wTGlzdEl0ZW1EYXRlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiA4cHg7XG5gO1xuXG5jb25zdCBBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogODBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jbGFzcyBBbXBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFtcExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvQW1wTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8QW1wTGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9BbXBMaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxBbXBMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0FtcExpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgc3JjPXtpbWFnZV91cmxfc21hbGx9XG4gICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjgwXCJcbiAgICAgICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvQW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBMaXN0SXRlbUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmxpc3QtaXRlbS1jb250YWluZXI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS10aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1zdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RJdGVtRGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZGF0ZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1kYXRlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEFuc3dlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hbnN3ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8TGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9MaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0xpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlX3VybF9zbWFsbH1cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDgwLCB3aWR0aDogODAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Fuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgPC9MaXN0SXRlbUNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEFtcExpc3RJdGVtLCBMaXN0SXRlbSB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ListItem.js */"
  }));
};

var ListItemTitle = function ListItemTitle(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-2566256794" + " " + "list-item-title"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "2566256794",
    css: ".list-item-title.jsx-2566256794{color:rgba(0,0,0,0.84);font-size:20px;font-weight:600;line-height:25px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUEwR2dCLEFBR21DLHVCQUNYLGVBQ0MsZ0JBQ0MsaUJBQ25CIiwiZmlsZSI6Ii9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyBDb21wb25lbnQgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBtb21lbnQgZnJvbSBcIm1vbWVudFwiO1xuaW1wb3J0IHN0eWxlZCBmcm9tIFwic3R5bGVkLWNvbXBvbmVudHNcIjtcbmltcG9ydCAqIGFzIEFtcCBmcm9tIFwicmVhY3QtYW1waHRtbFwiO1xuXG5jb25zdCBBbXBMaXN0SXRlbUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gIGN1cnNvcjogcG9pbnRlcjtcbiAgZGlzcGxheTogZmxleDtcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcblxuICAmOmhvdmVyIHtcbiAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICB9XG5gO1xuXG5jb25zdCBBbXBMaXN0SXRlbVRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gIGZvbnQtc2l6ZTogMjBweDtcbiAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgbGluZS1oZWlnaHQ6IDI1cHg7XG5gO1xuXG5jb25zdCBBbXBMaXN0SXRlbVN1YnRpdGxlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMTZweDtcbiAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gIG1hcmdpbi10b3A6IDVweDtcbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtRGF0ZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDEycHg7XG4gIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgbWFyZ2luLXRvcDogOHB4O1xuYDtcblxuY29uc3QgQW1wQW5zd2VySW1hZ2VDb250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBmbGV4LXNocmluazogMDtcbiAgaGVpZ2h0OiA4MHB4O1xuICBtYXJnaW4tbGVmdDogMjBweDtcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgd2lkdGg6IDgwcHg7XG5gO1xuXG5jb25zdCBTdHlsZWRBbXBJbWcgPSBzdHlsZWQoQW1wLkFtcEltZylgXG4gIGhlaWdodDogODBweDtcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xuYDtcblxuY2xhc3MgQW1wTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRlX2FkZGVkLCBpbWFnZV91cmxfc21hbGwsIHN1YnRpdGxlLCB0aXRsZSwgbm9BbXAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPEFtcExpc3RJdGVtQ29udGFpbmVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxBbXBMaXN0SXRlbVRpdGxlPnt0aXRsZX08L0FtcExpc3RJdGVtVGl0bGU+XG4gICAgICAgICAgPEFtcExpc3RJdGVtU3VidGl0bGU+e3N1YnRpdGxlfTwvQW1wTGlzdEl0ZW1TdWJ0aXRsZT5cbiAgICAgICAgICA8QW1wTGlzdEl0ZW1EYXRlPlxuICAgICAgICAgICAge2RhdGVfYWRkZWRcbiAgICAgICAgICAgICAgPyBtb21lbnQobmV3IERhdGUoZGF0ZV9hZGRlZCkpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKVxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPC9BbXBMaXN0SXRlbURhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QW1wQW5zd2VySW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgPFN0eWxlZEFtcEltZ1xuICAgICAgICAgICAgc3BlY05hbWU9XCJkZWZhdWx0XCJcbiAgICAgICAgICAgIHNyYz17aW1hZ2VfdXJsX3NtYWxsfVxuICAgICAgICAgICAgd2lkdGg9XCI4MFwiXG4gICAgICAgICAgICBoZWlnaHQ9XCI4MFwiXG4gICAgICAgICAgICBhbHQ9XCJBTVBcIlxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQW1wQW5zd2VySW1hZ2VDb250YWluZXI+XG4gICAgICA8L0FtcExpc3RJdGVtQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuY29uc3QgTGlzdEl0ZW1Db250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1jb250YWluZXIge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgICAgICAgcGFkZGluZzogMTBweCAyMHB4O1xuICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICB9XG5cbiAgICAgIC5saXN0LWl0ZW0tY29udGFpbmVyOmhvdmVyIHtcbiAgICAgICAgYmFja2dyb3VuZDogI2VlZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTGlzdEl0ZW1UaXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tdGl0bGVcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saXN0LWl0ZW0tdGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgZm9udC1zaXplOiAyMHB4O1xuICAgICAgICBmb250LXdlaWdodDogNjAwO1xuICAgICAgICBsaW5lLWhlaWdodDogMjVweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTGlzdEl0ZW1TdWJ0aXRsZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tc3VidGl0bGVcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saXN0LWl0ZW0tc3VidGl0bGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAxNnB4O1xuICAgICAgICBsaW5lLWhlaWdodDogMjBweDtcbiAgICAgICAgbWFyZ2luLXRvcDogNXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbURhdGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLWRhdGVcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saXN0LWl0ZW0tZGF0ZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDEycHg7XG4gICAgICAgIGZvbnQtc3R5bGU6IGl0YWxpYztcbiAgICAgICAgbWFyZ2luLXRvcDogOHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBBbnN3ZXJJbWFnZUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJhbnN3ZXItaW1hZ2UtY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAuYW5zd2VyLWltYWdlLWNvbnRhaW5lciB7XG4gICAgICAgIGZsZXgtc2hyaW5rOiAwO1xuICAgICAgICBoZWlnaHQ6IDgwcHg7XG4gICAgICAgIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICAgICAgICBvdmVyZmxvdzogaGlkZGVuO1xuICAgICAgICB3aWR0aDogODBweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY2xhc3MgTGlzdEl0ZW0gZXh0ZW5kcyBDb21wb25lbnQge1xuICByZW5kZXIoKSB7XG4gICAgY29uc3QgeyBkYXRlX2FkZGVkLCBpbWFnZV91cmxfc21hbGwsIHN1YnRpdGxlLCB0aXRsZSwgbm9BbXAgfSA9IHRoaXMucHJvcHM7XG5cbiAgICByZXR1cm4gKFxuICAgICAgPExpc3RJdGVtQ29udGFpbmVyPlxuICAgICAgICA8ZGl2PlxuICAgICAgICAgIDxMaXN0SXRlbVRpdGxlPnt0aXRsZX08L0xpc3RJdGVtVGl0bGU+XG4gICAgICAgICAgPExpc3RJdGVtU3VidGl0bGU+e3N1YnRpdGxlfTwvTGlzdEl0ZW1TdWJ0aXRsZT5cbiAgICAgICAgICA8TGlzdEl0ZW1EYXRlPlxuICAgICAgICAgICAge2RhdGVfYWRkZWRcbiAgICAgICAgICAgICAgPyBtb21lbnQobmV3IERhdGUoZGF0ZV9hZGRlZCkpLmZvcm1hdChcIk1NTSBEbywgWVlZWVwiKVxuICAgICAgICAgICAgICA6IG51bGx9XG4gICAgICAgICAgPC9MaXN0SXRlbURhdGU+XG4gICAgICAgIDwvZGl2PlxuICAgICAgICA8QW5zd2VySW1hZ2VDb250YWluZXI+XG4gICAgICAgICAgPGltZ1xuICAgICAgICAgICAgc3JjPXtpbWFnZV91cmxfc21hbGx9XG4gICAgICAgICAgICBhbHQ9e3RpdGxlfVxuICAgICAgICAgICAgc3R5bGU9e3sgaGVpZ2h0OiA4MCwgd2lkdGg6IDgwIH19XG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvTGlzdEl0ZW1Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5leHBvcnQgeyBBbXBMaXN0SXRlbSwgTGlzdEl0ZW0gfTtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ListItem.js */"
  }));
};

var ListItemSubtitle = function ListItemSubtitle(_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-544464814" + " " + "list-item-subtitle"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "544464814",
    css: ".list-item-subtitle.jsx-544464814{color:rgba(0,0,0,0.54);font-size:16px;line-height:20px;margin-top:5px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUF3SGdCLEFBR21DLHVCQUNYLGVBQ0UsaUJBQ0YsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmNvbnN0IEFtcExpc3RJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtU3VidGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuYDtcblxuY29uc3QgQW1wTGlzdEl0ZW1EYXRlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiA4cHg7XG5gO1xuXG5jb25zdCBBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogODBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jbGFzcyBBbXBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFtcExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvQW1wTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8QW1wTGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9BbXBMaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxBbXBMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0FtcExpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgc3JjPXtpbWFnZV91cmxfc21hbGx9XG4gICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjgwXCJcbiAgICAgICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvQW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBMaXN0SXRlbUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmxpc3QtaXRlbS1jb250YWluZXI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS10aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1zdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RJdGVtRGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZGF0ZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1kYXRlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEFuc3dlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hbnN3ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8TGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9MaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0xpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlX3VybF9zbWFsbH1cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDgwLCB3aWR0aDogODAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Fuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgPC9MaXN0SXRlbUNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEFtcExpc3RJdGVtLCBMaXN0SXRlbSB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ListItem.js */"
  }));
};

var ListItemDate = function ListItemDate(_ref4) {
  var children = _ref4.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1809973229" + " " + "list-item-date"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1809973229",
    css: ".list-item-date.jsx-1809973229{color:rgba(0,0,0,0.54);font-size:12px;font-style:italic;margin-top:8px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFzSWdCLEFBR21DLHVCQUNYLGVBQ0csa0JBQ0gsZUFDakIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL0xpc3RJdGVtLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IENvbXBvbmVudCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IG1vbWVudCBmcm9tIFwibW9tZW50XCI7XG5pbXBvcnQgc3R5bGVkIGZyb20gXCJzdHlsZWQtY29tcG9uZW50c1wiO1xuaW1wb3J0ICogYXMgQW1wIGZyb20gXCJyZWFjdC1hbXBodG1sXCI7XG5cbmNvbnN0IEFtcExpc3RJdGVtQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgY3Vyc29yOiBwb2ludGVyO1xuICBkaXNwbGF5OiBmbGV4O1xuICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuXG4gICY6aG92ZXIge1xuICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gIH1cbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtVGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgZm9udC1zaXplOiAyMHB4O1xuICBmb250LXdlaWdodDogNjAwO1xuICBsaW5lLWhlaWdodDogMjVweDtcbmA7XG5cbmNvbnN0IEFtcExpc3RJdGVtU3VidGl0bGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAxNnB4O1xuICBsaW5lLWhlaWdodDogMjBweDtcbiAgbWFyZ2luLXRvcDogNXB4O1xuYDtcblxuY29uc3QgQW1wTGlzdEl0ZW1EYXRlID0gc3R5bGVkLmRpdmBcbiAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gIGZvbnQtc2l6ZTogMTJweDtcbiAgZm9udC1zdHlsZTogaXRhbGljO1xuICBtYXJnaW4tdG9wOiA4cHg7XG5gO1xuXG5jb25zdCBBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lciA9IHN0eWxlZC5kaXZgXG4gIGZsZXgtc2hyaW5rOiAwO1xuICBoZWlnaHQ6IDgwcHg7XG4gIG1hcmdpbi1sZWZ0OiAyMHB4O1xuICBvdmVyZmxvdzogaGlkZGVuO1xuICB3aWR0aDogODBweDtcbmA7XG5cbmNvbnN0IFN0eWxlZEFtcEltZyA9IHN0eWxlZChBbXAuQW1wSW1nKWBcbiAgaGVpZ2h0OiA4MHB4O1xuICBwb3NpdGlvbjogcmVsYXRpdmU7XG5gO1xuXG5jbGFzcyBBbXBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8QW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPEFtcExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvQW1wTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8QW1wTGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9BbXBMaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxBbXBMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0FtcExpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8U3R5bGVkQW1wSW1nXG4gICAgICAgICAgICBzcGVjTmFtZT1cImRlZmF1bHRcIlxuICAgICAgICAgICAgc3JjPXtpbWFnZV91cmxfc21hbGx9XG4gICAgICAgICAgICB3aWR0aD1cIjgwXCJcbiAgICAgICAgICAgIGhlaWdodD1cIjgwXCJcbiAgICAgICAgICAgIGFsdD1cIkFNUFwiXG4gICAgICAgICAgLz5cbiAgICAgICAgPC9BbXBBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgIDwvQW1wTGlzdEl0ZW1Db250YWluZXI+XG4gICAgKTtcbiAgfVxufVxuXG5jb25zdCBMaXN0SXRlbUNvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLWNvbnRhaW5lciB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZGlzcGxheTogZmxleDtcbiAgICAgICAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xuICAgICAgICBtYXJnaW4tYm90dG9tOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAxMHB4IDIwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cblxuICAgICAgLmxpc3QtaXRlbS1jb250YWluZXI6aG92ZXIge1xuICAgICAgICBiYWNrZ3JvdW5kOiAjZWVlO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS10aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS10aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICAgICAgICBmb250LXNpemU6IDIwcHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiA2MDA7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyNXB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaXN0SXRlbVN1YnRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1zdWJ0aXRsZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1zdWJ0aXRsZSB7XG4gICAgICAgIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICAgICAgICBmb250LXNpemU6IDE2cHg7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICAgICAgICBtYXJnaW4tdG9wOiA1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RJdGVtRGF0ZSA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJsaXN0LWl0ZW0tZGF0ZVwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpc3QtaXRlbS1kYXRlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTJweDtcbiAgICAgICAgZm9udC1zdHlsZTogaXRhbGljO1xuICAgICAgICBtYXJnaW4tdG9wOiA4cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IEFuc3dlckltYWdlQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImFuc3dlci1pbWFnZS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5hbnN3ZXItaW1hZ2UtY29udGFpbmVyIHtcbiAgICAgICAgZmxleC1zaHJpbms6IDA7XG4gICAgICAgIGhlaWdodDogODBweDtcbiAgICAgICAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gICAgICAgIG92ZXJmbG93OiBoaWRkZW47XG4gICAgICAgIHdpZHRoOiA4MHB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jbGFzcyBMaXN0SXRlbSBleHRlbmRzIENvbXBvbmVudCB7XG4gIHJlbmRlcigpIHtcbiAgICBjb25zdCB7IGRhdGVfYWRkZWQsIGltYWdlX3VybF9zbWFsbCwgc3VidGl0bGUsIHRpdGxlLCBub0FtcCB9ID0gdGhpcy5wcm9wcztcblxuICAgIHJldHVybiAoXG4gICAgICA8TGlzdEl0ZW1Db250YWluZXI+XG4gICAgICAgIDxkaXY+XG4gICAgICAgICAgPExpc3RJdGVtVGl0bGU+e3RpdGxlfTwvTGlzdEl0ZW1UaXRsZT5cbiAgICAgICAgICA8TGlzdEl0ZW1TdWJ0aXRsZT57c3VidGl0bGV9PC9MaXN0SXRlbVN1YnRpdGxlPlxuICAgICAgICAgIDxMaXN0SXRlbURhdGU+XG4gICAgICAgICAgICB7ZGF0ZV9hZGRlZFxuICAgICAgICAgICAgICA/IG1vbWVudChuZXcgRGF0ZShkYXRlX2FkZGVkKSkuZm9ybWF0KFwiTU1NIERvLCBZWVlZXCIpXG4gICAgICAgICAgICAgIDogbnVsbH1cbiAgICAgICAgICA8L0xpc3RJdGVtRGF0ZT5cbiAgICAgICAgPC9kaXY+XG4gICAgICAgIDxBbnN3ZXJJbWFnZUNvbnRhaW5lcj5cbiAgICAgICAgICA8aW1nXG4gICAgICAgICAgICBzcmM9e2ltYWdlX3VybF9zbWFsbH1cbiAgICAgICAgICAgIGFsdD17dGl0bGV9XG4gICAgICAgICAgICBzdHlsZT17eyBoZWlnaHQ6IDgwLCB3aWR0aDogODAgfX1cbiAgICAgICAgICAvPlxuICAgICAgICA8L0Fuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgPC9MaXN0SXRlbUNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmV4cG9ydCB7IEFtcExpc3RJdGVtLCBMaXN0SXRlbSB9O1xuIl19 */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ListItem.js */"
  }));
};

var AnswerImageContainer = function AnswerImageContainer(_ref5) {
  var children = _ref5.children;
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-697107138" + " " + "answer-image-container"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "697107138",
    css: ".answer-image-container.jsx-697107138{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:80px;margin-left:20px;overflow:hidden;width:80px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9MaXN0SXRlbS5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFvSmdCLEFBR3VCLHdEQUNGLFlBQ0ssaUJBQ0QsZ0JBQ0wsV0FDYiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL2NvbXBvbmVudHMvTGlzdEl0ZW0uanMiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgUmVhY3QsIHsgQ29tcG9uZW50IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgbW9tZW50IGZyb20gXCJtb21lbnRcIjtcbmltcG9ydCBzdHlsZWQgZnJvbSBcInN0eWxlZC1jb21wb25lbnRzXCI7XG5pbXBvcnQgKiBhcyBBbXAgZnJvbSBcInJlYWN0LWFtcGh0bWxcIjtcblxuY29uc3QgQW1wTGlzdEl0ZW1Db250YWluZXIgPSBzdHlsZWQuZGl2YFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xuICBjdXJzb3I6IHBvaW50ZXI7XG4gIGRpc3BsYXk6IGZsZXg7XG4gIGp1c3RpZnktY29udGVudDogc3BhY2UtYmV0d2VlbjtcbiAgbWFyZ2luLWJvdHRvbTogMjBweDtcbiAgcGFkZGluZzogMTBweCAyMHB4O1xuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG5cbiAgJjpob3ZlciB7XG4gICAgYmFja2dyb3VuZDogI2VlZTtcbiAgfVxuYDtcblxuY29uc3QgQW1wTGlzdEl0ZW1UaXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuODQpO1xuICBmb250LXNpemU6IDIwcHg7XG4gIGZvbnQtd2VpZ2h0OiA2MDA7XG4gIGxpbmUtaGVpZ2h0OiAyNXB4O1xuYDtcblxuY29uc3QgQW1wTGlzdEl0ZW1TdWJ0aXRsZSA9IHN0eWxlZC5kaXZgXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNTQpO1xuICBmb250LXNpemU6IDE2cHg7XG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xuICBtYXJnaW4tdG9wOiA1cHg7XG5gO1xuXG5jb25zdCBBbXBMaXN0SXRlbURhdGUgPSBzdHlsZWQuZGl2YFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgZm9udC1zaXplOiAxMnB4O1xuICBmb250LXN0eWxlOiBpdGFsaWM7XG4gIG1hcmdpbi10b3A6IDhweDtcbmA7XG5cbmNvbnN0IEFtcEFuc3dlckltYWdlQ29udGFpbmVyID0gc3R5bGVkLmRpdmBcbiAgZmxleC1zaHJpbms6IDA7XG4gIGhlaWdodDogODBweDtcbiAgbWFyZ2luLWxlZnQ6IDIwcHg7XG4gIG92ZXJmbG93OiBoaWRkZW47XG4gIHdpZHRoOiA4MHB4O1xuYDtcblxuY29uc3QgU3R5bGVkQW1wSW1nID0gc3R5bGVkKEFtcC5BbXBJbWcpYFxuICBoZWlnaHQ6IDgwcHg7XG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcbmA7XG5cbmNsYXNzIEFtcExpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0ZV9hZGRlZCwgaW1hZ2VfdXJsX3NtYWxsLCBzdWJ0aXRsZSwgdGl0bGUsIG5vQW1wIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxBbXBMaXN0SXRlbUNvbnRhaW5lcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8QW1wTGlzdEl0ZW1UaXRsZT57dGl0bGV9PC9BbXBMaXN0SXRlbVRpdGxlPlxuICAgICAgICAgIDxBbXBMaXN0SXRlbVN1YnRpdGxlPntzdWJ0aXRsZX08L0FtcExpc3RJdGVtU3VidGl0bGU+XG4gICAgICAgICAgPEFtcExpc3RJdGVtRGF0ZT5cbiAgICAgICAgICAgIHtkYXRlX2FkZGVkXG4gICAgICAgICAgICAgID8gbW9tZW50KG5ldyBEYXRlKGRhdGVfYWRkZWQpKS5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIilcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDwvQW1wTGlzdEl0ZW1EYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFtcEFuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgICAgIDxTdHlsZWRBbXBJbWdcbiAgICAgICAgICAgIHNwZWNOYW1lPVwiZGVmYXVsdFwiXG4gICAgICAgICAgICBzcmM9e2ltYWdlX3VybF9zbWFsbH1cbiAgICAgICAgICAgIHdpZHRoPVwiODBcIlxuICAgICAgICAgICAgaGVpZ2h0PVwiODBcIlxuICAgICAgICAgICAgYWx0PVwiQU1QXCJcbiAgICAgICAgICAvPlxuICAgICAgICA8L0FtcEFuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgPC9BbXBMaXN0SXRlbUNvbnRhaW5lcj5cbiAgICApO1xuICB9XG59XG5cbmNvbnN0IExpc3RJdGVtQ29udGFpbmVyID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1jb250YWluZXJcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5saXN0LWl0ZW0tY29udGFpbmVyIHtcbiAgICAgICAgYWxpZ24taXRlbXM6IGNlbnRlcjtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBqdXN0aWZ5LWNvbnRlbnQ6IHNwYWNlLWJldHdlZW47XG4gICAgICAgIG1hcmdpbi1ib3R0b206IDIwcHg7XG4gICAgICAgIHBhZGRpbmc6IDEwcHggMjBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuXG4gICAgICAubGlzdC1pdGVtLWNvbnRhaW5lcjpob3ZlciB7XG4gICAgICAgIGJhY2tncm91bmQ6ICNlZWU7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RJdGVtVGl0bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLXRpdGxlXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLXRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMjBweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IDYwMDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDI1cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpc3RJdGVtU3VidGl0bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwibGlzdC1pdGVtLXN1YnRpdGxlXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLXN1YnRpdGxlIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC41NCk7XG4gICAgICAgIGZvbnQtc2l6ZTogMTZweDtcbiAgICAgICAgbGluZS1oZWlnaHQ6IDIwcHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDVweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgTGlzdEl0ZW1EYXRlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cImxpc3QtaXRlbS1kYXRlXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGlzdC1pdGVtLWRhdGUge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgZm9udC1zaXplOiAxMnB4O1xuICAgICAgICBmb250LXN0eWxlOiBpdGFsaWM7XG4gICAgICAgIG1hcmdpbi10b3A6IDhweDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgQW5zd2VySW1hZ2VDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwiYW5zd2VyLWltYWdlLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmFuc3dlci1pbWFnZS1jb250YWluZXIge1xuICAgICAgICBmbGV4LXNocmluazogMDtcbiAgICAgICAgaGVpZ2h0OiA4MHB4O1xuICAgICAgICBtYXJnaW4tbGVmdDogMjBweDtcbiAgICAgICAgb3ZlcmZsb3c6IGhpZGRlbjtcbiAgICAgICAgd2lkdGg6IDgwcHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNsYXNzIExpc3RJdGVtIGV4dGVuZHMgQ29tcG9uZW50IHtcbiAgcmVuZGVyKCkge1xuICAgIGNvbnN0IHsgZGF0ZV9hZGRlZCwgaW1hZ2VfdXJsX3NtYWxsLCBzdWJ0aXRsZSwgdGl0bGUsIG5vQW1wIH0gPSB0aGlzLnByb3BzO1xuXG4gICAgcmV0dXJuIChcbiAgICAgIDxMaXN0SXRlbUNvbnRhaW5lcj5cbiAgICAgICAgPGRpdj5cbiAgICAgICAgICA8TGlzdEl0ZW1UaXRsZT57dGl0bGV9PC9MaXN0SXRlbVRpdGxlPlxuICAgICAgICAgIDxMaXN0SXRlbVN1YnRpdGxlPntzdWJ0aXRsZX08L0xpc3RJdGVtU3VidGl0bGU+XG4gICAgICAgICAgPExpc3RJdGVtRGF0ZT5cbiAgICAgICAgICAgIHtkYXRlX2FkZGVkXG4gICAgICAgICAgICAgID8gbW9tZW50KG5ldyBEYXRlKGRhdGVfYWRkZWQpKS5mb3JtYXQoXCJNTU0gRG8sIFlZWVlcIilcbiAgICAgICAgICAgICAgOiBudWxsfVxuICAgICAgICAgIDwvTGlzdEl0ZW1EYXRlPlxuICAgICAgICA8L2Rpdj5cbiAgICAgICAgPEFuc3dlckltYWdlQ29udGFpbmVyPlxuICAgICAgICAgIDxpbWdcbiAgICAgICAgICAgIHNyYz17aW1hZ2VfdXJsX3NtYWxsfVxuICAgICAgICAgICAgYWx0PXt0aXRsZX1cbiAgICAgICAgICAgIHN0eWxlPXt7IGhlaWdodDogODAsIHdpZHRoOiA4MCB9fVxuICAgICAgICAgIC8+XG4gICAgICAgIDwvQW5zd2VySW1hZ2VDb250YWluZXI+XG4gICAgICA8L0xpc3RJdGVtQ29udGFpbmVyPlxuICAgICk7XG4gIH1cbn1cblxuZXhwb3J0IHsgQW1wTGlzdEl0ZW0sIExpc3RJdGVtIH07XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/ListItem.js */"
  }));
};

var ListItem =
/*#__PURE__*/
function (_Component2) {
  _inherits(ListItem, _Component2);

  function ListItem() {
    _classCallCheck(this, ListItem);

    return _possibleConstructorReturn(this, _getPrototypeOf(ListItem).apply(this, arguments));
  }

  _createClass(ListItem, [{
    key: "render",
    value: function render() {
      var _this$props2 = this.props,
          date_added = _this$props2.date_added,
          image_url_small = _this$props2.image_url_small,
          subtitle = _this$props2.subtitle,
          title = _this$props2.title,
          noAmp = _this$props2.noAmp;
      return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItemContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItemTitle, null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItemSubtitle, null, subtitle), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(ListItemDate, null, date_added ? moment__WEBPACK_IMPORTED_MODULE_2___default()(new Date(date_added)).format("MMM Do, YYYY") : null)), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(AnswerImageContainer, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("img", {
        src: image_url_small,
        alt: title,
        style: {
          height: 80,
          width: 80
        }
      })));
    }
  }]);

  return ListItem;
}(react__WEBPACK_IMPORTED_MODULE_1__["Component"]);



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
      padding: "0 20px",
      width: "calc(100% - 40px)"
    }, style)
  }, children);
});

/***/ }),

/***/ "./pages/all-posts.js":
/*!****************************!*\
  !*** ./pages/all-posts.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/head */ "next/head");
/* harmony import */ var next_head__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(next_head__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");


function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _templateObject5() {
  var data = _taggedTemplateLiteral(["\n  margin-bottom: 10px;\n"]);

  _templateObject5 = function _templateObject5() {
    return data;
  };

  return data;
}

function _templateObject4() {
  var data = _taggedTemplateLiteral(["\n  display: block;\n  font-size: 35px;\n  letter-spacing: 0.6em;\n  text-align: center;\n"]);

  _templateObject4 = function _templateObject4() {
    return data;
  };

  return data;
}

function _templateObject3() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);

  _templateObject3 = function _templateObject3() {
    return data;
  };

  return data;
}

function _templateObject2() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  font-size: 34px;\n  line-height: 1.15;\n  padding: 0 20px;\n\n  @media screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);

  _templateObject2 = function _templateObject2() {
    return data;
  };

  return data;
}

function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  align-items: center;\n  display: flex;\n  font-size: 34px;\n  line-height: 1.15;\n\n  @media screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);

  _templateObject = function _templateObject() {
    return data;
  };

  return data;
}

function _taggedTemplateLiteral(strings, raw) { if (!raw) { raw = strings.slice(0); } return Object.freeze(Object.defineProperties(strings, { raw: { value: Object.freeze(raw) } })); }








var Title = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h1(_templateObject());
var Heading = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.h2(_templateObject2());
var Subtitle = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject3());
var Divider = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.div(_templateObject4());
var PostContainer = styled_components__WEBPACK_IMPORTED_MODULE_3___default.a.li(_templateObject5());

var AllPosts = function AllPosts(_ref) {
  var _ref$posts = _ref.posts,
      posts = _ref$posts === void 0 ? [] : _ref$posts;
  var title = "".concat(posts.length, " Bible Questions and Answers | Bible Answers");
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_5__["AmpContainer"], null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(next_head__WEBPACK_IMPORTED_MODULE_2___default.a, null, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("title", null, title), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("meta", {
    name: "description",
    content: "All ".concat(posts.length, " of Bible Questions questions and answers. Learn how to explain and defend the Christian faith.")
  })), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      marginBottom: 0
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Title, null, posts.length, " Bible Questions and Answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Subtitle, null, "Browse all of our questions and answers"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Divider, null, "...")), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_6__["default"], {
    style: {
      padding: 0,
      width: "initial"
    }
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(Heading, null, "All posts"), posts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
      key: post.url,
      href: post.url,
      style: {
        textDecoration: "none"
      }
    }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(_components_ListItem__WEBPACK_IMPORTED_MODULE_7__["AmpListItem"], post));
  })));
};

AllPosts.getInitialProps =
/*#__PURE__*/
_asyncToGenerator(
/*#__PURE__*/
_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.mark(function _callee() {
  var res, data;
  return _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default.a.wrap(function _callee$(_context) {
    while (1) {
      switch (_context.prev = _context.next) {
        case 0:
          _context.next = 2;
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_4___default()("https://bibleanswersapi.herokuapp.com/all_posts");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          data.sort(function (a, b) {
            return new Date(b.date_added) - new Date(a.date_added);
          });
          return _context.abrupt("return", {
            posts: data
          });

        case 8:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (AllPosts);

/***/ }),

/***/ 6:
/*!**********************************!*\
  !*** multi ./pages/all-posts.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/all-posts.js */"./pages/all-posts.js");


/***/ }),

/***/ "@babel/runtime/regenerator":
/*!*********************************************!*\
  !*** external "@babel/runtime/regenerator" ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("@babel/runtime/regenerator");

/***/ }),

/***/ "isomorphic-unfetch":
/*!*************************************!*\
  !*** external "isomorphic-unfetch" ***!
  \*************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("isomorphic-unfetch");

/***/ }),

/***/ "moment":
/*!*************************!*\
  !*** external "moment" ***!
  \*************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("moment");

/***/ }),

/***/ "next/head":
/*!****************************!*\
  !*** external "next/head" ***!
  \****************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/head");

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

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ "styled-jsx/style":
/*!***********************************!*\
  !*** external "styled-jsx/style" ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ })

/******/ });
//# sourceMappingURL=all-posts.js.map