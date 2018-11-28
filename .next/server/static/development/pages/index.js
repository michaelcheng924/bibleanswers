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

/***/ "./components/TopLinks.js":
/*!********************************!*\
  !*** ./components/TopLinks.js ***!
  \********************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);



var TopLinks = function TopLinks() {
  return react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("div", {
    className: "jsx-1169056107" + " " + "top-links"
  }, react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/gospel",
    className: "jsx-1169056107"
  }, "Gospel Summary"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement("a", {
    href: "/statement-of-faith",
    className: "jsx-1169056107"
  }, "Statement of Faith"), react__WEBPACK_IMPORTED_MODULE_1___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default.a, {
    styleId: "1169056107",
    css: ".top-links.jsx-1169056107{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:center;-webkit-justify-content:center;-ms-flex-pack:center;justify-content:center;padding-top:10px;}a.jsx-1169056107{color:rgba(0,0,0,0.54);margin-bottom:10px;margin-right:20px;-webkit-text-decoration:none;text-decoration:none;text-transform:uppercase;}a.jsx-1169056107:last-child{margin-right:0;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvY29tcG9uZW50cy9Ub3BMaW5rcy5qcyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiQUFRa0IsQUFHd0IsQUFNYSxBQVFYLGVBQ2pCLFFBUnFCLG1CQUNELGtCQUNHLGNBUkUsb0NBU0UseUJBQzNCLHNDQVRtQixpQkFDbkIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9jb21wb25lbnRzL1RvcExpbmtzLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0IGZyb20gXCJyZWFjdFwiO1xuXG5jb25zdCBUb3BMaW5rcyA9ICgpID0+IHtcbiAgcmV0dXJuIChcbiAgICA8ZGl2IGNsYXNzTmFtZT1cInRvcC1saW5rc1wiPlxuICAgICAgPGEgaHJlZj1cIi9nb3NwZWxcIj5Hb3NwZWwgU3VtbWFyeTwvYT5cbiAgICAgIDxhIGhyZWY9XCIvc3RhdGVtZW50LW9mLWZhaXRoXCI+U3RhdGVtZW50IG9mIEZhaXRoPC9hPlxuXG4gICAgICA8c3R5bGUganN4PntgXG4gICAgICAgIC50b3AtbGlua3Mge1xuICAgICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgICAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XG4gICAgICAgICAgcGFkZGluZy10b3A6IDEwcHg7XG4gICAgICAgIH1cblxuICAgICAgICBhIHtcbiAgICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU0KTtcbiAgICAgICAgICBtYXJnaW4tYm90dG9tOiAxMHB4O1xuICAgICAgICAgIG1hcmdpbi1yaWdodDogMjBweDtcbiAgICAgICAgICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XG4gICAgICAgICAgdGV4dC10cmFuc2Zvcm06IHVwcGVyY2FzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIGE6bGFzdC1jaGlsZCB7XG4gICAgICAgICAgbWFyZ2luLXJpZ2h0OiAwO1xuICAgICAgICB9XG4gICAgICBgfTwvc3R5bGU+XG4gICAgPC9kaXY+XG4gICk7XG59O1xuXG5leHBvcnQgZGVmYXVsdCBUb3BMaW5rcztcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/components/TopLinks.js */"
  }));
};

/* harmony default export */ __webpack_exports__["default"] = (TopLinks);

/***/ }),

/***/ "./pages/index.js":
/*!************************!*\
  !*** ./pages/index.js ***!
  \************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime/regenerator */ "@babel/runtime/regenerator");
/* harmony import */ var _babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! styled-jsx/style */ "styled-jsx/style");
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! isomorphic-unfetch */ "isomorphic-unfetch");
/* harmony import */ var isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../components/Container */ "./components/Container.js");
/* harmony import */ var _components_ListItem__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../components/ListItem */ "./components/ListItem.js");
/* harmony import */ var _components_TopLinks__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/TopLinks */ "./components/TopLinks.js");
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../components/ReadingContainer */ "./components/ReadingContainer.js");



function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

function _extends() { _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; }; return _extends.apply(this, arguments); }








var Title = function Title(_ref) {
  var children = _ref.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4048152006" + " " + "title"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "4048152006",
    css: ".title.jsx-4048152006{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;font-size:34px;font-weight:bold;line-height:1.15;margin-top:20px;padding:0 20px;}@media screen and (max-width:768px){.title.jsx-4048152006{font-size:30px;}}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBV2dCLEFBRzRCLEFBV0YsZUFDakIsOEVBWGEsMEVBQ0UsZUFDRSxpQkFDQSxpQkFDRCxnQkFDRCxlQUNqQiIsImZpbGUiOiIvVXNlcnMvbWljaGFlbC5jaGVuZy9jb2RlL25leHQtYmlibGVhbnN3ZXJzL3BhZ2VzL2luZGV4LmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IGZldGNoIGZyb20gXCJpc29tb3JwaGljLXVuZmV0Y2hcIjtcblxuaW1wb3J0IHsgQ29udGFpbmVyIH0gZnJvbSBcIi4uL2NvbXBvbmVudHMvQ29udGFpbmVyXCI7XG5pbXBvcnQgeyBMaXN0SXRlbSB9IGZyb20gXCIuLi9jb21wb25lbnRzL0xpc3RJdGVtXCI7XG5pbXBvcnQgVG9wTGlua3MgZnJvbSBcIi4uL2NvbXBvbmVudHMvVG9wTGlua3NcIjtcbmltcG9ydCBSZWFkaW5nQ29udGFpbmVyIGZyb20gXCIuLi9jb21wb25lbnRzL1JlYWRpbmdDb250YWluZXJcIjtcblxuY29uc3QgVGl0bGUgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGl0bGVcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50aXRsZSB7XG4gICAgICAgIGFsaWduLWl0ZW1zOiBjZW50ZXI7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZvbnQtc2l6ZTogMzRweDtcbiAgICAgICAgZm9udC13ZWlnaHQ6IGJvbGQ7XG4gICAgICAgIGxpbmUtaGVpZ2h0OiAxLjE1O1xuICAgICAgICBtYXJnaW4tdG9wOiAyMHB4O1xuICAgICAgICBwYWRkaW5nOiAwIDIwcHg7XG4gICAgICB9XG5cbiAgICAgIEBtZWRpYSBzY3JlZW4gYW5kIChtYXgtd2lkdGg6IDc2OHB4KSB7XG4gICAgICAgIC50aXRsZSB7XG4gICAgICAgICAgZm9udC1zaXplOiAzMHB4O1xuICAgICAgICB9XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFBvc3RzVGFnc0NvbnRhaW5lciA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJwb3N0LXRhZ3MtY29udGFpbmVyXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAucG9zdC10YWdzLWNvbnRhaW5lciB7XG4gICAgICAgIGRpc3BsYXk6IGZsZXg7XG4gICAgICAgIGZsZXgtd3JhcDogd3JhcDtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvZGl2PlxuKTtcblxuY29uc3QgVGFnVGV4dCA9ICh7IGNoaWxkcmVuIH0pID0+IChcbiAgPGRpdiBjbGFzc05hbWU9XCJ0YWctdGV4dFwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnRhZy10ZXh0IHtcbiAgICAgICAgY29sb3I6ICM2ODlmMzg7XG4gICAgICAgIGN1cnNvcjogcG9pbnRlcjtcbiAgICAgICAgZm9udC1zaXplOiAxOHB4O1xuICAgICAgICBtYXJnaW4tYm90dG9tOiA2cHg7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IExpbmtUYWcgPSAoeyBjaGlsZHJlbiwgaHJlZiB9KSA9PiAoXG4gIDxhIGNsYXNzTmFtZT1cImxpbmstdGFnXCIgaHJlZj17aHJlZn0+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAubGluay10YWcge1xuICAgICAgICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjg0KTtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9hPlxuKTtcblxuY29uc3QgTW9yZUxpbmsgPSAoeyBjaGlsZHJlbiwgaHJlZiB9KSA9PiAoXG4gIDxhIGNsYXNzTmFtZT1cIm1vcmUtbGlua1wiIGhyZWY9e2hyZWZ9PlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLm1vcmUtbGluayB7XG4gICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLXRvcDogMTBweDtcbiAgICAgICAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9hPlxuKTtcblxuY29uc3QgSG9tZSA9ICh7IHJlY2VudFBvc3RzID0gW10sIHRhZ3MgPSBbXSwgcG9zdHNDb3VudCB9KSA9PiB7XG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgdmFyIGN4ID0gXCIwMDI2MDIwMjI0NjczMzk3MjE1MDk6bzdxa2F3bWFrZXlcIjtcbiAgICB2YXIgZ2NzZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzY3JpcHRcIik7XG4gICAgZ2NzZS50eXBlID0gXCJ0ZXh0L2phdmFzY3JpcHRcIjtcbiAgICBnY3NlLmFzeW5jID0gdHJ1ZTtcbiAgICBnY3NlLnNyYyA9IFwiaHR0cHM6Ly9jc2UuZ29vZ2xlLmNvbS9jc2UuanM/Y3g9XCIgKyBjeDtcbiAgICB2YXIgcyA9IGRvY3VtZW50LmdldEVsZW1lbnRzQnlUYWdOYW1lKFwic2NyaXB0XCIpWzBdO1xuICAgIHMucGFyZW50Tm9kZS5pbnNlcnRCZWZvcmUoZ2NzZSwgcyk7XG5cbiAgICBjb25zdCBwbGFjZWhvbGRlckludGVydmFsID0gc2V0SW50ZXJ2YWwoKCkgPT4ge1xuICAgICAgY29uc3Qgc2VhcmNoQm94ID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoXCJnc2MtaS1pZDFcIik7XG5cbiAgICAgIGlmIChzZWFyY2hCb3gpIHtcbiAgICAgICAgc2VhcmNoQm94LnBsYWNlaG9sZGVyID0gXCJTZWFyY2ggQmlibGUgQW5zd2Vyc1wiO1xuICAgICAgICBjbGVhckludGVydmFsKHBsYWNlaG9sZGVySW50ZXJ2YWwpO1xuICAgICAgfVxuICAgIH0sIDUwKTtcbiAgfSk7XG5cbiAgcmV0dXJuIChcbiAgICA8Q29udGFpbmVyPlxuICAgICAgPHRpdGxlPlxuICAgICAgICBCaWJsZSBBbnN3ZXJzIHwgRXhwbGFpbmluZyBhbmQgRGVmZW5kaW5nIHRoZSBDaHJpc3RpYW4gV29ybGR2aWV3XG4gICAgICA8L3RpdGxlPlxuXG4gICAgICA8VG9wTGlua3MgLz5cblxuICAgICAgPFBvc3RzVGFnc0NvbnRhaW5lcj5cbiAgICAgICAgPFJlYWRpbmdDb250YWluZXIgc3R5bGU9e3sgcGFkZGluZzogMCwgd2lkdGg6IFwiaW5pdGlhbFwiIH19PlxuICAgICAgICAgIDxkaXYgc3R5bGU9e3sgbWFyZ2luVG9wOiAyMCB9fT5cbiAgICAgICAgICAgIDxkaXZcbiAgICAgICAgICAgICAgZGFuZ2Vyb3VzbHlTZXRJbm5lckhUTUw9e3tcbiAgICAgICAgICAgICAgICBfX2h0bWw6IFwiPGdjc2U6c2VhcmNoYm94PjwvZ2NzZTpzZWFyY2hib3g+XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgd2lkdGg6IDMyMCwgbWFyZ2luOiBcIjAgYXV0b1wiIH19XG4gICAgICAgICAgICAvPlxuXG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBcIjxnY3NlOnNlYXJjaHJlc3VsdHM+PC9nY3NlOnNlYXJjaHJlc3VsdHM+XCJcbiAgICAgICAgICAgICAgfX1cbiAgICAgICAgICAgICAgc3R5bGU9e3sgbWFyZ2luOiBcIjAgYXV0b1wiIH19XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvZGl2PlxuXG4gICAgICAgICAgPFRpdGxlPlJlY2VudCBwb3N0czwvVGl0bGU+XG4gICAgICAgICAge3JlY2VudFBvc3RzLm1hcChwb3N0ID0+IHtcbiAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgIDxMaW5rVGFnIGtleT17cG9zdC51cmx9IGhyZWY9e3Bvc3QudXJsfT5cbiAgICAgICAgICAgICAgICA8TGlzdEl0ZW0gey4uLnBvc3R9IG5vQW1wIC8+XG4gICAgICAgICAgICAgIDwvTGlua1RhZz5cbiAgICAgICAgICAgICk7XG4gICAgICAgICAgfSl9XG4gICAgICAgICAgPGNlbnRlcj5cbiAgICAgICAgICAgIDxNb3JlTGluayBocmVmPVwiYWxsLXBvc3RzXCI+QWxsIHtwb3N0c0NvdW50fSBwb3N0czwvTW9yZUxpbms+XG4gICAgICAgICAgPC9jZW50ZXI+XG4gICAgICAgIDwvUmVhZGluZ0NvbnRhaW5lcj5cblxuICAgICAgICA8UmVhZGluZ0NvbnRhaW5lciBzdHlsZT17eyB3aWR0aDogXCJpbml0aWFsXCIgfX0+XG4gICAgICAgICAgPFRpdGxlIHN0eWxlPXt7IHBhZGRpbmc6IDAgfX0+VGFnczwvVGl0bGU+XG4gICAgICAgICAgPHVsPlxuICAgICAgICAgICAge3RhZ3MubWFwKHRhZyA9PiB7XG4gICAgICAgICAgICAgIHJldHVybiAoXG4gICAgICAgICAgICAgICAgPExpbmtUYWcga2V5PXt0YWcudXJsfSBocmVmPXt0YWcudXJsfT5cbiAgICAgICAgICAgICAgICAgIDxsaT5cbiAgICAgICAgICAgICAgICAgICAgPFRhZ1RleHQ+XG4gICAgICAgICAgICAgICAgICAgICAge3RhZy50aXRsZX0gKHt0YWcucG9zdHNfY291bnR9KVxuICAgICAgICAgICAgICAgICAgICA8L1RhZ1RleHQ+XG4gICAgICAgICAgICAgICAgICA8L2xpPlxuICAgICAgICAgICAgICAgIDwvTGlua1RhZz5cbiAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH0pfVxuICAgICAgICAgIDwvdWw+XG4gICAgICAgICAgPE1vcmVMaW5rIGhyZWY9XCIvcG9zdHMtaW4tcHJvZ3Jlc3NcIj5Qb3N0cyBpbiBwcm9ncmVzczwvTW9yZUxpbms+XG4gICAgICAgIDwvUmVhZGluZ0NvbnRhaW5lcj5cbiAgICAgIDwvUG9zdHNUYWdzQ29udGFpbmVyPlxuICAgIDwvQ29udGFpbmVyPlxuICApO1xufTtcblxuSG9tZS5nZXRJbml0aWFsUHJvcHMgPSBhc3luYyBmdW5jdGlvbigpIHtcbiAgY29uc3QgcmVzID0gYXdhaXQgZmV0Y2goXCJodHRwczovL2JpYmxlYW5zd2Vyc2FwaS5oZXJva3VhcHAuY29tL2hvbWVmZXRjaFwiKTtcblxuICBjb25zdCBkYXRhID0gYXdhaXQgcmVzLmpzb24oKTtcblxuICByZXR1cm4ge1xuICAgIHJlY2VudFBvc3RzOiBkYXRhLnJlY2VudF9wb3N0cyxcbiAgICB0YWdzOiBkYXRhLnRhZ3MsXG4gICAgcG9zdHNDb3VudDogZGF0YS5wb3N0c19jb3VudFxuICB9O1xufTtcblxuZXhwb3J0IGRlZmF1bHQgSG9tZTtcbiJdfQ== */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/index.js */"
  }));
};

var PostsTagsContainer = function PostsTagsContainer(_ref2) {
  var children = _ref2.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-3148850039" + " " + "post-tags-container"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "3148850039",
    css: ".post-tags-container.jsx-3148850039{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-flex-wrap:wrap;-ms-flex-wrap:wrap;flex-wrap:wrap;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBa0NnQixBQUdzQiwwRUFDRSx5REFDakIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbVwiO1xuaW1wb3J0IFRvcExpbmtzIGZyb20gXCIuLi9jb21wb25lbnRzL1RvcExpbmtzXCI7XG5pbXBvcnQgUmVhZGluZ0NvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWFkaW5nQ29udGFpbmVyXCI7XG5cbmNvbnN0IFRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBQb3N0c1RhZ3NDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9zdC10YWdzLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBvc3QtdGFncy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRhZ1RleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGFnLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50YWctdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaW5rVGFnID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9XCJsaW5rLXRhZ1wiIGhyZWY9e2hyZWZ9PlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmstdGFnIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYT5cbik7XG5cbmNvbnN0IE1vcmVMaW5rID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9XCJtb3JlLWxpbmtcIiBocmVmPXtocmVmfT5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tb3JlLWxpbmsge1xuICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYT5cbik7XG5cbmNvbnN0IEhvbWUgPSAoeyByZWNlbnRQb3N0cyA9IFtdLCB0YWdzID0gW10sIHBvc3RzQ291bnQgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBjeCA9IFwiMDAyNjAyMDIyNDY3MzM5NzIxNTA5Om83cWthd21ha2V5XCI7XG4gICAgdmFyIGdjc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIGdjc2UudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgZ2NzZS5hc3luYyA9IHRydWU7XG4gICAgZ2NzZS5zcmMgPSBcImh0dHBzOi8vY3NlLmdvb2dsZS5jb20vY3NlLmpzP2N4PVwiICsgY3g7XG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdjc2UsIHMpO1xuXG4gICAgY29uc3QgcGxhY2Vob2xkZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3NjLWktaWQxXCIpO1xuXG4gICAgICBpZiAoc2VhcmNoQm94KSB7XG4gICAgICAgIHNlYXJjaEJveC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIEJpYmxlIEFuc3dlcnNcIjtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwbGFjZWhvbGRlckludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDx0aXRsZT5cbiAgICAgICAgQmlibGUgQW5zd2VycyB8IEV4cGxhaW5pbmcgYW5kIERlZmVuZGluZyB0aGUgQ2hyaXN0aWFuIFdvcmxkdmlld1xuICAgICAgPC90aXRsZT5cblxuICAgICAgPFRvcExpbmtzIC8+XG5cbiAgICAgIDxQb3N0c1RhZ3NDb250YWluZXI+XG4gICAgICAgIDxSZWFkaW5nQ29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmc6IDAsIHdpZHRoOiBcImluaXRpYWxcIiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBcIjxnY3NlOnNlYXJjaGJveD48L2djc2U6c2VhcmNoYm94PlwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMjAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogXCI8Z2NzZTpzZWFyY2hyZXN1bHRzPjwvZ2NzZTpzZWFyY2hyZXN1bHRzPlwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxUaXRsZT5SZWNlbnQgcG9zdHM8L1RpdGxlPlxuICAgICAgICAgIHtyZWNlbnRQb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlua1RhZyBrZXk9e3Bvc3QudXJsfSBocmVmPXtwb3N0LnVybH0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIHsuLi5wb3N0fSBub0FtcCAvPlxuICAgICAgICAgICAgICA8L0xpbmtUYWc+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICA8TW9yZUxpbmsgaHJlZj1cImFsbC1wb3N0c1wiPkFsbCB7cG9zdHNDb3VudH0gcG9zdHM8L01vcmVMaW5rPlxuICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICAgICAgPFJlYWRpbmdDb250YWluZXIgc3R5bGU9e3sgd2lkdGg6IFwiaW5pdGlhbFwiIH19PlxuICAgICAgICAgIDxUaXRsZSBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlRhZ3M8L1RpdGxlPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0YWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rVGFnIGtleT17dGFnLnVybH0gaHJlZj17dGFnLnVybH0+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxUYWdUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIHt0YWcudGl0bGV9ICh7dGFnLnBvc3RzX2NvdW50fSlcbiAgICAgICAgICAgICAgICAgICAgPC9UYWdUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbmtUYWc+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxNb3JlTGluayBocmVmPVwiL3Bvc3RzLWluLXByb2dyZXNzXCI+UG9zdHMgaW4gcHJvZ3Jlc3M8L01vcmVMaW5rPlxuICAgICAgICA8L1JlYWRpbmdDb250YWluZXI+XG4gICAgICA8L1Bvc3RzVGFnc0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9iaWJsZWFuc3dlcnNhcGkuaGVyb2t1YXBwLmNvbS9ob21lZmV0Y2hcIik7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICByZWNlbnRQb3N0czogZGF0YS5yZWNlbnRfcG9zdHMsXG4gICAgdGFnczogZGF0YS50YWdzLFxuICAgIHBvc3RzQ291bnQ6IGRhdGEucG9zdHNfY291bnRcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/index.js */"
  }));
};

var TagText = function TagText(_ref3) {
  var children = _ref3.children;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    className: "jsx-4045598409" + " " + "tag-text"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "4045598409",
    css: ".tag-text.jsx-4045598409{color:#689f38;cursor:pointer;font-size:18px;margin-bottom:6px;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBOENnQixBQUd1QixjQUNDLGVBQ0EsZUFDRyxrQkFDcEIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbVwiO1xuaW1wb3J0IFRvcExpbmtzIGZyb20gXCIuLi9jb21wb25lbnRzL1RvcExpbmtzXCI7XG5pbXBvcnQgUmVhZGluZ0NvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWFkaW5nQ29udGFpbmVyXCI7XG5cbmNvbnN0IFRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBQb3N0c1RhZ3NDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9zdC10YWdzLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBvc3QtdGFncy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRhZ1RleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGFnLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50YWctdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaW5rVGFnID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9XCJsaW5rLXRhZ1wiIGhyZWY9e2hyZWZ9PlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmstdGFnIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYT5cbik7XG5cbmNvbnN0IE1vcmVMaW5rID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9XCJtb3JlLWxpbmtcIiBocmVmPXtocmVmfT5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tb3JlLWxpbmsge1xuICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYT5cbik7XG5cbmNvbnN0IEhvbWUgPSAoeyByZWNlbnRQb3N0cyA9IFtdLCB0YWdzID0gW10sIHBvc3RzQ291bnQgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBjeCA9IFwiMDAyNjAyMDIyNDY3MzM5NzIxNTA5Om83cWthd21ha2V5XCI7XG4gICAgdmFyIGdjc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIGdjc2UudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgZ2NzZS5hc3luYyA9IHRydWU7XG4gICAgZ2NzZS5zcmMgPSBcImh0dHBzOi8vY3NlLmdvb2dsZS5jb20vY3NlLmpzP2N4PVwiICsgY3g7XG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdjc2UsIHMpO1xuXG4gICAgY29uc3QgcGxhY2Vob2xkZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3NjLWktaWQxXCIpO1xuXG4gICAgICBpZiAoc2VhcmNoQm94KSB7XG4gICAgICAgIHNlYXJjaEJveC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIEJpYmxlIEFuc3dlcnNcIjtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwbGFjZWhvbGRlckludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDx0aXRsZT5cbiAgICAgICAgQmlibGUgQW5zd2VycyB8IEV4cGxhaW5pbmcgYW5kIERlZmVuZGluZyB0aGUgQ2hyaXN0aWFuIFdvcmxkdmlld1xuICAgICAgPC90aXRsZT5cblxuICAgICAgPFRvcExpbmtzIC8+XG5cbiAgICAgIDxQb3N0c1RhZ3NDb250YWluZXI+XG4gICAgICAgIDxSZWFkaW5nQ29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmc6IDAsIHdpZHRoOiBcImluaXRpYWxcIiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBcIjxnY3NlOnNlYXJjaGJveD48L2djc2U6c2VhcmNoYm94PlwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMjAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogXCI8Z2NzZTpzZWFyY2hyZXN1bHRzPjwvZ2NzZTpzZWFyY2hyZXN1bHRzPlwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxUaXRsZT5SZWNlbnQgcG9zdHM8L1RpdGxlPlxuICAgICAgICAgIHtyZWNlbnRQb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlua1RhZyBrZXk9e3Bvc3QudXJsfSBocmVmPXtwb3N0LnVybH0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIHsuLi5wb3N0fSBub0FtcCAvPlxuICAgICAgICAgICAgICA8L0xpbmtUYWc+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICA8TW9yZUxpbmsgaHJlZj1cImFsbC1wb3N0c1wiPkFsbCB7cG9zdHNDb3VudH0gcG9zdHM8L01vcmVMaW5rPlxuICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICAgICAgPFJlYWRpbmdDb250YWluZXIgc3R5bGU9e3sgd2lkdGg6IFwiaW5pdGlhbFwiIH19PlxuICAgICAgICAgIDxUaXRsZSBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlRhZ3M8L1RpdGxlPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0YWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rVGFnIGtleT17dGFnLnVybH0gaHJlZj17dGFnLnVybH0+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxUYWdUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIHt0YWcudGl0bGV9ICh7dGFnLnBvc3RzX2NvdW50fSlcbiAgICAgICAgICAgICAgICAgICAgPC9UYWdUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbmtUYWc+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxNb3JlTGluayBocmVmPVwiL3Bvc3RzLWluLXByb2dyZXNzXCI+UG9zdHMgaW4gcHJvZ3Jlc3M8L01vcmVMaW5rPlxuICAgICAgICA8L1JlYWRpbmdDb250YWluZXI+XG4gICAgICA8L1Bvc3RzVGFnc0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9iaWJsZWFuc3dlcnNhcGkuaGVyb2t1YXBwLmNvbS9ob21lZmV0Y2hcIik7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICByZWNlbnRQb3N0czogZGF0YS5yZWNlbnRfcG9zdHMsXG4gICAgdGFnczogZGF0YS50YWdzLFxuICAgIHBvc3RzQ291bnQ6IGRhdGEucG9zdHNfY291bnRcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/index.js */"
  }));
};

var LinkTag = function LinkTag(_ref4) {
  var children = _ref4.children,
      href = _ref4.href;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: href,
    className: "jsx-251089003" + " " + "link-tag"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "251089003",
    css: ".link-tag.jsx-251089003{color:rgba(0,0,0,0.84);-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBNERnQixBQUdtQyx1QkFDTCxrREFDdkIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbVwiO1xuaW1wb3J0IFRvcExpbmtzIGZyb20gXCIuLi9jb21wb25lbnRzL1RvcExpbmtzXCI7XG5pbXBvcnQgUmVhZGluZ0NvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWFkaW5nQ29udGFpbmVyXCI7XG5cbmNvbnN0IFRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBQb3N0c1RhZ3NDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9zdC10YWdzLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBvc3QtdGFncy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRhZ1RleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGFnLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50YWctdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaW5rVGFnID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9XCJsaW5rLXRhZ1wiIGhyZWY9e2hyZWZ9PlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmstdGFnIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYT5cbik7XG5cbmNvbnN0IE1vcmVMaW5rID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9XCJtb3JlLWxpbmtcIiBocmVmPXtocmVmfT5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tb3JlLWxpbmsge1xuICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYT5cbik7XG5cbmNvbnN0IEhvbWUgPSAoeyByZWNlbnRQb3N0cyA9IFtdLCB0YWdzID0gW10sIHBvc3RzQ291bnQgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBjeCA9IFwiMDAyNjAyMDIyNDY3MzM5NzIxNTA5Om83cWthd21ha2V5XCI7XG4gICAgdmFyIGdjc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIGdjc2UudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgZ2NzZS5hc3luYyA9IHRydWU7XG4gICAgZ2NzZS5zcmMgPSBcImh0dHBzOi8vY3NlLmdvb2dsZS5jb20vY3NlLmpzP2N4PVwiICsgY3g7XG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdjc2UsIHMpO1xuXG4gICAgY29uc3QgcGxhY2Vob2xkZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3NjLWktaWQxXCIpO1xuXG4gICAgICBpZiAoc2VhcmNoQm94KSB7XG4gICAgICAgIHNlYXJjaEJveC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIEJpYmxlIEFuc3dlcnNcIjtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwbGFjZWhvbGRlckludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDx0aXRsZT5cbiAgICAgICAgQmlibGUgQW5zd2VycyB8IEV4cGxhaW5pbmcgYW5kIERlZmVuZGluZyB0aGUgQ2hyaXN0aWFuIFdvcmxkdmlld1xuICAgICAgPC90aXRsZT5cblxuICAgICAgPFRvcExpbmtzIC8+XG5cbiAgICAgIDxQb3N0c1RhZ3NDb250YWluZXI+XG4gICAgICAgIDxSZWFkaW5nQ29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmc6IDAsIHdpZHRoOiBcImluaXRpYWxcIiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBcIjxnY3NlOnNlYXJjaGJveD48L2djc2U6c2VhcmNoYm94PlwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMjAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogXCI8Z2NzZTpzZWFyY2hyZXN1bHRzPjwvZ2NzZTpzZWFyY2hyZXN1bHRzPlwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxUaXRsZT5SZWNlbnQgcG9zdHM8L1RpdGxlPlxuICAgICAgICAgIHtyZWNlbnRQb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlua1RhZyBrZXk9e3Bvc3QudXJsfSBocmVmPXtwb3N0LnVybH0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIHsuLi5wb3N0fSBub0FtcCAvPlxuICAgICAgICAgICAgICA8L0xpbmtUYWc+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICA8TW9yZUxpbmsgaHJlZj1cImFsbC1wb3N0c1wiPkFsbCB7cG9zdHNDb3VudH0gcG9zdHM8L01vcmVMaW5rPlxuICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICAgICAgPFJlYWRpbmdDb250YWluZXIgc3R5bGU9e3sgd2lkdGg6IFwiaW5pdGlhbFwiIH19PlxuICAgICAgICAgIDxUaXRsZSBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlRhZ3M8L1RpdGxlPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0YWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rVGFnIGtleT17dGFnLnVybH0gaHJlZj17dGFnLnVybH0+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxUYWdUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIHt0YWcudGl0bGV9ICh7dGFnLnBvc3RzX2NvdW50fSlcbiAgICAgICAgICAgICAgICAgICAgPC9UYWdUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbmtUYWc+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxNb3JlTGluayBocmVmPVwiL3Bvc3RzLWluLXByb2dyZXNzXCI+UG9zdHMgaW4gcHJvZ3Jlc3M8L01vcmVMaW5rPlxuICAgICAgICA8L1JlYWRpbmdDb250YWluZXI+XG4gICAgICA8L1Bvc3RzVGFnc0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9iaWJsZWFuc3dlcnNhcGkuaGVyb2t1YXBwLmNvbS9ob21lZmV0Y2hcIik7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICByZWNlbnRQb3N0czogZGF0YS5yZWNlbnRfcG9zdHMsXG4gICAgdGFnczogZGF0YS50YWdzLFxuICAgIHBvc3RzQ291bnQ6IGRhdGEucG9zdHNfY291bnRcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/index.js */"
  }));
};

var MoreLink = function MoreLink(_ref5) {
  var children = _ref5.children,
      href = _ref5.href;
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("a", {
    href: href,
    className: "jsx-1238150795" + " " + "more-link"
  }, children, " ", react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(styled_jsx_style__WEBPACK_IMPORTED_MODULE_1___default.a, {
    styleId: "1238150795",
    css: ".more-link.jsx-1238150795{color:#689f38;cursor:pointer;font-size:18px;margin-top:10px;-webkit-text-decoration:none;text-decoration:none;}\n/*# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi9Vc2Vycy9taWNoYWVsLmNoZW5nL2NvZGUvbmV4dC1iaWJsZWFuc3dlcnMvcGFnZXMvaW5kZXguanMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBd0VnQixBQUd1QixjQUNDLGVBQ0EsZUFDQyxnQkFDSyxrREFDdkIiLCJmaWxlIjoiL1VzZXJzL21pY2hhZWwuY2hlbmcvY29kZS9uZXh0LWJpYmxlYW5zd2Vycy9wYWdlcy9pbmRleC5qcyIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCBmZXRjaCBmcm9tIFwiaXNvbW9ycGhpYy11bmZldGNoXCI7XG5cbmltcG9ydCB7IENvbnRhaW5lciB9IGZyb20gXCIuLi9jb21wb25lbnRzL0NvbnRhaW5lclwiO1xuaW1wb3J0IHsgTGlzdEl0ZW0gfSBmcm9tIFwiLi4vY29tcG9uZW50cy9MaXN0SXRlbVwiO1xuaW1wb3J0IFRvcExpbmtzIGZyb20gXCIuLi9jb21wb25lbnRzL1RvcExpbmtzXCI7XG5pbXBvcnQgUmVhZGluZ0NvbnRhaW5lciBmcm9tIFwiLi4vY29tcG9uZW50cy9SZWFkaW5nQ29udGFpbmVyXCI7XG5cbmNvbnN0IFRpdGxlID0gKHsgY2hpbGRyZW4gfSkgPT4gKFxuICA8ZGl2IGNsYXNzTmFtZT1cInRpdGxlXCI+XG4gICAge2NoaWxkcmVufXtcIiBcIn1cbiAgICA8c3R5bGUganN4PntgXG4gICAgICAudGl0bGUge1xuICAgICAgICBhbGlnbi1pdGVtczogY2VudGVyO1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmb250LXNpemU6IDM0cHg7XG4gICAgICAgIGZvbnQtd2VpZ2h0OiBib2xkO1xuICAgICAgICBsaW5lLWhlaWdodDogMS4xNTtcbiAgICAgICAgbWFyZ2luLXRvcDogMjBweDtcbiAgICAgICAgcGFkZGluZzogMCAyMHB4O1xuICAgICAgfVxuXG4gICAgICBAbWVkaWEgc2NyZWVuIGFuZCAobWF4LXdpZHRoOiA3NjhweCkge1xuICAgICAgICAudGl0bGUge1xuICAgICAgICAgIGZvbnQtc2l6ZTogMzBweDtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBQb3N0c1RhZ3NDb250YWluZXIgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwicG9zdC10YWdzLWNvbnRhaW5lclwiPlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLnBvc3QtdGFncy1jb250YWluZXIge1xuICAgICAgICBkaXNwbGF5OiBmbGV4O1xuICAgICAgICBmbGV4LXdyYXA6IHdyYXA7XG4gICAgICB9XG4gICAgYH08L3N0eWxlPlxuICA8L2Rpdj5cbik7XG5cbmNvbnN0IFRhZ1RleHQgPSAoeyBjaGlsZHJlbiB9KSA9PiAoXG4gIDxkaXYgY2xhc3NOYW1lPVwidGFnLXRleHRcIj5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC50YWctdGV4dCB7XG4gICAgICAgIGNvbG9yOiAjNjg5ZjM4O1xuICAgICAgICBjdXJzb3I6IHBvaW50ZXI7XG4gICAgICAgIGZvbnQtc2l6ZTogMThweDtcbiAgICAgICAgbWFyZ2luLWJvdHRvbTogNnB4O1xuICAgICAgfVxuICAgIGB9PC9zdHlsZT5cbiAgPC9kaXY+XG4pO1xuXG5jb25zdCBMaW5rVGFnID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9XCJsaW5rLXRhZ1wiIGhyZWY9e2hyZWZ9PlxuICAgIHtjaGlsZHJlbn17XCIgXCJ9XG4gICAgPHN0eWxlIGpzeD57YFxuICAgICAgLmxpbmstdGFnIHtcbiAgICAgICAgY29sb3I6IHJnYmEoMCwgMCwgMCwgMC44NCk7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYT5cbik7XG5cbmNvbnN0IE1vcmVMaW5rID0gKHsgY2hpbGRyZW4sIGhyZWYgfSkgPT4gKFxuICA8YSBjbGFzc05hbWU9XCJtb3JlLWxpbmtcIiBocmVmPXtocmVmfT5cbiAgICB7Y2hpbGRyZW59e1wiIFwifVxuICAgIDxzdHlsZSBqc3g+e2BcbiAgICAgIC5tb3JlLWxpbmsge1xuICAgICAgICBjb2xvcjogIzY4OWYzODtcbiAgICAgICAgY3Vyc29yOiBwb2ludGVyO1xuICAgICAgICBmb250LXNpemU6IDE4cHg7XG4gICAgICAgIG1hcmdpbi10b3A6IDEwcHg7XG4gICAgICAgIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcbiAgICAgIH1cbiAgICBgfTwvc3R5bGU+XG4gIDwvYT5cbik7XG5cbmNvbnN0IEhvbWUgPSAoeyByZWNlbnRQb3N0cyA9IFtdLCB0YWdzID0gW10sIHBvc3RzQ291bnQgfSkgPT4ge1xuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIHZhciBjeCA9IFwiMDAyNjAyMDIyNDY3MzM5NzIxNTA5Om83cWthd21ha2V5XCI7XG4gICAgdmFyIGdjc2UgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KFwic2NyaXB0XCIpO1xuICAgIGdjc2UudHlwZSA9IFwidGV4dC9qYXZhc2NyaXB0XCI7XG4gICAgZ2NzZS5hc3luYyA9IHRydWU7XG4gICAgZ2NzZS5zcmMgPSBcImh0dHBzOi8vY3NlLmdvb2dsZS5jb20vY3NlLmpzP2N4PVwiICsgY3g7XG4gICAgdmFyIHMgPSBkb2N1bWVudC5nZXRFbGVtZW50c0J5VGFnTmFtZShcInNjcmlwdFwiKVswXTtcbiAgICBzLnBhcmVudE5vZGUuaW5zZXJ0QmVmb3JlKGdjc2UsIHMpO1xuXG4gICAgY29uc3QgcGxhY2Vob2xkZXJJbnRlcnZhbCA9IHNldEludGVydmFsKCgpID0+IHtcbiAgICAgIGNvbnN0IHNlYXJjaEJveCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKFwiZ3NjLWktaWQxXCIpO1xuXG4gICAgICBpZiAoc2VhcmNoQm94KSB7XG4gICAgICAgIHNlYXJjaEJveC5wbGFjZWhvbGRlciA9IFwiU2VhcmNoIEJpYmxlIEFuc3dlcnNcIjtcbiAgICAgICAgY2xlYXJJbnRlcnZhbChwbGFjZWhvbGRlckludGVydmFsKTtcbiAgICAgIH1cbiAgICB9LCA1MCk7XG4gIH0pO1xuXG4gIHJldHVybiAoXG4gICAgPENvbnRhaW5lcj5cbiAgICAgIDx0aXRsZT5cbiAgICAgICAgQmlibGUgQW5zd2VycyB8IEV4cGxhaW5pbmcgYW5kIERlZmVuZGluZyB0aGUgQ2hyaXN0aWFuIFdvcmxkdmlld1xuICAgICAgPC90aXRsZT5cblxuICAgICAgPFRvcExpbmtzIC8+XG5cbiAgICAgIDxQb3N0c1RhZ3NDb250YWluZXI+XG4gICAgICAgIDxSZWFkaW5nQ29udGFpbmVyIHN0eWxlPXt7IHBhZGRpbmc6IDAsIHdpZHRoOiBcImluaXRpYWxcIiB9fT5cbiAgICAgICAgICA8ZGl2IHN0eWxlPXt7IG1hcmdpblRvcDogMjAgfX0+XG4gICAgICAgICAgICA8ZGl2XG4gICAgICAgICAgICAgIGRhbmdlcm91c2x5U2V0SW5uZXJIVE1MPXt7XG4gICAgICAgICAgICAgICAgX19odG1sOiBcIjxnY3NlOnNlYXJjaGJveD48L2djc2U6c2VhcmNoYm94PlwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IHdpZHRoOiAzMjAsIG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgLz5cblxuICAgICAgICAgICAgPGRpdlxuICAgICAgICAgICAgICBkYW5nZXJvdXNseVNldElubmVySFRNTD17e1xuICAgICAgICAgICAgICAgIF9faHRtbDogXCI8Z2NzZTpzZWFyY2hyZXN1bHRzPjwvZ2NzZTpzZWFyY2hyZXN1bHRzPlwiXG4gICAgICAgICAgICAgIH19XG4gICAgICAgICAgICAgIHN0eWxlPXt7IG1hcmdpbjogXCIwIGF1dG9cIiB9fVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L2Rpdj5cblxuICAgICAgICAgIDxUaXRsZT5SZWNlbnQgcG9zdHM8L1RpdGxlPlxuICAgICAgICAgIHtyZWNlbnRQb3N0cy5tYXAocG9zdCA9PiB7XG4gICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICA8TGlua1RhZyBrZXk9e3Bvc3QudXJsfSBocmVmPXtwb3N0LnVybH0+XG4gICAgICAgICAgICAgICAgPExpc3RJdGVtIHsuLi5wb3N0fSBub0FtcCAvPlxuICAgICAgICAgICAgICA8L0xpbmtUYWc+XG4gICAgICAgICAgICApO1xuICAgICAgICAgIH0pfVxuICAgICAgICAgIDxjZW50ZXI+XG4gICAgICAgICAgICA8TW9yZUxpbmsgaHJlZj1cImFsbC1wb3N0c1wiPkFsbCB7cG9zdHNDb3VudH0gcG9zdHM8L01vcmVMaW5rPlxuICAgICAgICAgIDwvY2VudGVyPlxuICAgICAgICA8L1JlYWRpbmdDb250YWluZXI+XG5cbiAgICAgICAgPFJlYWRpbmdDb250YWluZXIgc3R5bGU9e3sgd2lkdGg6IFwiaW5pdGlhbFwiIH19PlxuICAgICAgICAgIDxUaXRsZSBzdHlsZT17eyBwYWRkaW5nOiAwIH19PlRhZ3M8L1RpdGxlPlxuICAgICAgICAgIDx1bD5cbiAgICAgICAgICAgIHt0YWdzLm1hcCh0YWcgPT4ge1xuICAgICAgICAgICAgICByZXR1cm4gKFxuICAgICAgICAgICAgICAgIDxMaW5rVGFnIGtleT17dGFnLnVybH0gaHJlZj17dGFnLnVybH0+XG4gICAgICAgICAgICAgICAgICA8bGk+XG4gICAgICAgICAgICAgICAgICAgIDxUYWdUZXh0PlxuICAgICAgICAgICAgICAgICAgICAgIHt0YWcudGl0bGV9ICh7dGFnLnBvc3RzX2NvdW50fSlcbiAgICAgICAgICAgICAgICAgICAgPC9UYWdUZXh0PlxuICAgICAgICAgICAgICAgICAgPC9saT5cbiAgICAgICAgICAgICAgICA8L0xpbmtUYWc+XG4gICAgICAgICAgICAgICk7XG4gICAgICAgICAgICB9KX1cbiAgICAgICAgICA8L3VsPlxuICAgICAgICAgIDxNb3JlTGluayBocmVmPVwiL3Bvc3RzLWluLXByb2dyZXNzXCI+UG9zdHMgaW4gcHJvZ3Jlc3M8L01vcmVMaW5rPlxuICAgICAgICA8L1JlYWRpbmdDb250YWluZXI+XG4gICAgICA8L1Bvc3RzVGFnc0NvbnRhaW5lcj5cbiAgICA8L0NvbnRhaW5lcj5cbiAgKTtcbn07XG5cbkhvbWUuZ2V0SW5pdGlhbFByb3BzID0gYXN5bmMgZnVuY3Rpb24oKSB7XG4gIGNvbnN0IHJlcyA9IGF3YWl0IGZldGNoKFwiaHR0cHM6Ly9iaWJsZWFuc3dlcnNhcGkuaGVyb2t1YXBwLmNvbS9ob21lZmV0Y2hcIik7XG5cbiAgY29uc3QgZGF0YSA9IGF3YWl0IHJlcy5qc29uKCk7XG5cbiAgcmV0dXJuIHtcbiAgICByZWNlbnRQb3N0czogZGF0YS5yZWNlbnRfcG9zdHMsXG4gICAgdGFnczogZGF0YS50YWdzLFxuICAgIHBvc3RzQ291bnQ6IGRhdGEucG9zdHNfY291bnRcbiAgfTtcbn07XG5cbmV4cG9ydCBkZWZhdWx0IEhvbWU7XG4iXX0= */\n/*@ sourceURL=/Users/michael.cheng/code/next-bibleanswers/pages/index.js */"
  }));
};

var Home = function Home(_ref6) {
  var _ref6$recentPosts = _ref6.recentPosts,
      recentPosts = _ref6$recentPosts === void 0 ? [] : _ref6$recentPosts,
      _ref6$tags = _ref6.tags,
      tags = _ref6$tags === void 0 ? [] : _ref6$tags,
      postsCount = _ref6.postsCount;
  Object(react__WEBPACK_IMPORTED_MODULE_2__["useEffect"])(function () {
    var cx = "002602022467339721509:o7qkawmakey";
    var gcse = document.createElement("script");
    gcse.type = "text/javascript";
    gcse.async = true;
    gcse.src = "https://cse.google.com/cse.js?cx=" + cx;
    var s = document.getElementsByTagName("script")[0];
    s.parentNode.insertBefore(gcse, s);
    var placeholderInterval = setInterval(function () {
      var searchBox = document.getElementById("gsc-i-id1");

      if (searchBox) {
        searchBox.placeholder = "Search Bible Answers";
        clearInterval(placeholderInterval);
      }
    }, 50);
  });
  return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_4__["Container"], null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("title", null, "Bible Answers | Explaining and Defending the Christian Worldview"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_TopLinks__WEBPACK_IMPORTED_MODULE_6__["default"], null), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(PostsTagsContainer, null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      padding: 0,
      width: "initial"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    style: {
      marginTop: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: "<gcse:searchbox></gcse:searchbox>"
    },
    style: {
      width: 320,
      margin: "0 auto"
    }
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("div", {
    dangerouslySetInnerHTML: {
      __html: "<gcse:searchresults></gcse:searchresults>"
    },
    style: {
      margin: "0 auto"
    }
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title, null, "Recent posts"), recentPosts.map(function (post) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinkTag, {
      key: post.url,
      href: post.url
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ListItem__WEBPACK_IMPORTED_MODULE_5__["ListItem"], _extends({}, post, {
      noAmp: true
    })));
  }), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("center", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MoreLink, {
    href: "all-posts"
  }, "All ", postsCount, " posts"))), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_7__["default"], {
    style: {
      width: "initial"
    }
  }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(Title, {
    style: {
      padding: 0
    }
  }, "Tags"), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("ul", null, tags.map(function (tag) {
    return react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(LinkTag, {
      key: tag.url,
      href: tag.url
    }, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(TagText, null, tag.title, " (", tag.posts_count, ")")));
  })), react__WEBPACK_IMPORTED_MODULE_2___default.a.createElement(MoreLink, {
    href: "/posts-in-progress"
  }, "Posts in progress"))));
};

Home.getInitialProps =
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
          return isomorphic_unfetch__WEBPACK_IMPORTED_MODULE_3___default()("https://bibleanswersapi.herokuapp.com/homefetch");

        case 2:
          res = _context.sent;
          _context.next = 5;
          return res.json();

        case 5:
          data = _context.sent;
          return _context.abrupt("return", {
            recentPosts: data.recent_posts,
            tags: data.tags,
            postsCount: data.posts_count
          });

        case 7:
        case "end":
          return _context.stop();
      }
    }
  }, _callee, this);
}));
/* harmony default export */ __webpack_exports__["default"] = (Home);

/***/ }),

/***/ 6:
/*!******************************!*\
  !*** multi ./pages/index.js ***!
  \******************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/index.js */"./pages/index.js");


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
//# sourceMappingURL=index.js.map