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
/******/ 	return __webpack_require__(__webpack_require__.s = 0);
/******/ })
/************************************************************************/
/******/ ({

/***/ "./components/Nav.js":
/*!***************************!*\
  !*** ./components/Nav.js ***!
  \***************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

/* harmony default export */ __webpack_exports__["default"] = (function (_ref) {
  var isAmp = _ref.isAmp;
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("nav", {
    style: {
      alignItems: "center",
      display: "flex",
      height: 60,
      padding: "0 20px"
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "/"
  }, isAmp ? react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("amp-img", {
    src: "https://i.imgur.com/dJPxPY9.png",
    height: "29",
    width: "170",
    alt: "Bible Answers logo"
  }) : react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("img", {
    src: "https://i.imgur.com/dJPxPY9.png",
    alt: "Bible Answers logo",
    style: {
      height: 29,
      width: 170
    }
  })));
});

/***/ }),

/***/ "./constants/sitemap.js":
/*!******************************!*\
  !*** ./constants/sitemap.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
var SITEMAP = "<?xml version=\"1.0\" encoding=\"UTF-8\"?>\n<urlset\n      xmlns=\"http://www.sitemaps.org/schemas/sitemap/0.9\"\n      xmlns:xsi=\"http://www.w3.org/2001/XMLSchema-instance\"\n      xsi:schemaLocation=\"http://www.sitemaps.org/schemas/sitemap/0.9\n            http://www.sitemaps.org/schemas/sitemap/0.9/sitemap.xsd\">\n<!-- created with Free Online Sitemap Generator www.xml-sitemaps.com -->\n\n\n<url>\n  <loc>https://bibleanswers.io/</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>1.00</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-people-live-hundreds-years-genesis-5</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/genesis-4-17-cain-wife</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/genesis-3-16-pain-women-child-bearing</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/genesis-3-9-gods-omniscience</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/baptism-necessary-acts-2-38</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/are-there-one-many-gods</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/baptism-necessary-acts-22-16</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/baptism-necessary-galatians-3-27</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/baptism-necessary-salvation-1-peter-3-21</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/resurrection-narratives-harmony</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/all-posts</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/1%20corinthians</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/1%20john</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/agnosticism</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/apologetics</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/authorship</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/bad-logic</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/baptism</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/contradictions</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/calvinism</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/creation</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/creeds-confessions</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/deuteronomy</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/faith</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/genesis</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/baptism-necessary</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/is-god-good</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/isaiah</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/jesus-existence</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/john</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/luke</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/mark</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/matthew</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/presuppositional-apologetics</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/resurrection-narratives-harmony</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/textual-criticism</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/gospel</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/theology</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/trinity</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/tags/worldview</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/posts-in-progress</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.80</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/agnosticism</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/genesis-1-2-plants</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/matthew-luke-genealogy</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-jesus-exist</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/bible-disagreements</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/problem-of-evil</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-many-angels-tomb</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-many-women-went-tomb</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/irenaeus-authorship</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/is-faith-blind</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/justin-martyr-mark</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/papias-authorship</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/were-angels-sitting-standing</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/tacitus</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/lucian</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/rylands-p52</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/what-is-presuppositional-apologetics</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/when-women-arrive-tomb</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/when-stone-rolled-away</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/where-were-angels</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/jesus-appear-first</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/foreknowledge</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/apostles-creed</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/athanasian-creed</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/chalcedonian-creed</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/nicene-creed</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/thirty-nine-articles</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/gospel</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-many-charioteers-were-killed</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-many-fighting-men-were-there-in-israel-judah</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-many-horsemen-did-david-capture</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-many-years-famine-threatened-david-seven-three</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/who-incited-david-to-count-people-israel</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/do-sons-bear-sins-father</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/god-author-confusion-babel</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/should-we-acquire-wisdom</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/does-god-love-hate-people</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-many-baths-could-be-held</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-many-stalls-horses-did-solomon-have</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-many-supervisors-solomon</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-it-wrong-god-send-lying-spirit</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/should-we-let-good-works-be-seen</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-saul-know-who-david-was</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/who-killed-goliath-david-elhanan</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/who-killed-saul-saul-or-amalekite</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/has-anyone-seen-god</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-long-jehoiachin-rule-jerusalem</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-old-ahaziah-began-to-rule-over-jerusalem</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/how-old-jehoiachin-when-he-became-king</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/is-bible-wrong-about-diameter-bowl</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/who-king-abijahs-mother-maacah-micaiah</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-anyone-ascend-heaven-before-jesus</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-god-immoral-kill-42-lads-for-saying-elisha-bald</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-lot-righteous-gave-daughters-to-crows</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/will-earth-remain-forever</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-michal-have-any-children</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/does-god-create-evil</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/are-genesis-1-2-contradictory</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/can-we-call-someone-fool</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-abraham-have-one-or-two-children</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-all-of-egypts-livestock-die</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-coniah-have-children</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-god-destroy-nineveh</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-god-speak-about-sacrifices-at-exodus</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-jacob-worship-head-bed-or-leaning-staff</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-jesus-abolish-the-law</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/did-old-testament-prophecy-jesus-coming-from-nazareth</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/do-job-1-21-ecclesiastes-5-15-teach-reincarnation</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/do-badger-rabbit-chew-cud</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/do-we-still-need-to-keep-sabbath</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/does-god-change-his-mind</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/does-god-exist</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/does-god-tempt-people</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/baptism-necessary-john-3-5</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/does-song-solomon-8-8-promote-child-marriage</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/noah-how-many-kinds</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/if-god-not-man-can-jesus-be-god</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/if-job-blameless-why-god-allow-satan-afflict-him</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/is-god-god-peace-war</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/is-god-good-bad-people</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/is-jesus-god-creator-all-things</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/isaiah-7-14-maiden-virgin</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/is-it-sin-make-graven-images</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/is-it-wrong-man-wear-womens-clothing-vice-versa</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/is-bad-bird</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/should-we-call-anyone-father-besides-god</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/cosmological-argument-gods-existence</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/moral-argument-gods-existence</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/ontological-argument-gods-existence</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/teleological-argument-gods-existence</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/to-whom-jesus-teach-lords-prayer</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-god-not-able-to-drive-out-inhabitants-valley</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-immoral-god-command-destruction-women-children</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-immoral-god-command-stoning-rebellious-sin</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-immoral-god-command-stoning-woman-not-being-virgin</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-it-immoral-leave-only-virgins-alive</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-it-immoral-israelites-destroy-all-people</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-it-wrong-man-killed-gathering-sticks-sabbath</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-it-wrong-god-give%20laws-buying%20slaves</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/was-it-wrong-for-slaves-to-be-property</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/is-wrong-psalmist-talk-about-killing-children</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/were-one-two-animals-brought-jesus</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/where-did-jesus-first-meet-simon-peter-andrew</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/where-did-devil-take-jesus-first</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/who-bought-joseph-ishmaelites-midianites</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/sons-of-god-genesis-6</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/why-statistics-ezra-2-nehemiah-7-different</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/why-did-god-command-abraham-to-kill-son-isaac</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/why-did-god-kill-man-spilling-seed</loc>\n  <lastmod>2018-11-15T00:31:49+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/why-sacrifice-animals-without-blemish</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n<url>\n  <loc>https://bibleanswers.io/answers/born-of-water-meaning</loc>\n  <lastmod>2018-11-15T00:31:50+00:00</lastmod>\n  <priority>0.64</priority>\n</url>\n\n\n</urlset>";
/* harmony default export */ __webpack_exports__["default"] = (SITEMAP);

/***/ }),

/***/ "./pages/_document.js":
/*!****************************!*\
  !*** ./pages/_document.js ***!
  \****************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return MyDocument; });
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! next/document */ "next/document");
/* harmony import */ var next_document__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(next_document__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! styled-components */ "styled-components");
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! react-amphtml/setup */ "react-amphtml/setup");
/* harmony import */ var react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! react-amphtml */ "react-amphtml");
/* harmony import */ var react_amphtml__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(react_amphtml__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _constants_sitemap__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../constants/sitemap */ "./constants/sitemap.js");
/* harmony import */ var _components_Nav__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../components/Nav */ "./components/Nav.js");


function _typeof(obj) { if (typeof Symbol === "function" && typeof Symbol.iterator === "symbol") { _typeof = function _typeof(obj) { return typeof obj; }; } else { _typeof = function _typeof(obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; }; } return _typeof(obj); }

function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } }

function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); return Constructor; }

function _possibleConstructorReturn(self, call) { if (call && (_typeof(call) === "object" || typeof call === "function")) { return call; } return _assertThisInitialized(self); }

function _assertThisInitialized(self) { if (self === void 0) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return self; }

function _getPrototypeOf(o) { _getPrototypeOf = Object.setPrototypeOf ? Object.getPrototypeOf : function _getPrototypeOf(o) { return o.__proto__ || Object.getPrototypeOf(o); }; return _getPrototypeOf(o); }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function"); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, writable: true, configurable: true } }); if (superClass) _setPrototypeOf(subClass, superClass); }

function _setPrototypeOf(o, p) { _setPrototypeOf = Object.setPrototypeOf || function _setPrototypeOf(o, p) { o.__proto__ = p; return o; }; return _setPrototypeOf(o, p); }








var MyDocument =
/*#__PURE__*/
function (_Document) {
  _inherits(MyDocument, _Document);

  function MyDocument() {
    _classCallCheck(this, MyDocument);

    return _possibleConstructorReturn(this, _getPrototypeOf(MyDocument).apply(this, arguments));
  }

  _createClass(MyDocument, [{
    key: "render",
    value: function render() {
      var _this$props = this.props,
          title = _this$props.title,
          metaDescription = _this$props.metaDescription,
          schemaInfo = _this$props.schemaInfo,
          url = _this$props.url,
          ampScriptTags = _this$props.ampScriptTags,
          ampStyleTag = _this$props.ampStyleTag,
          html = _this$props.html;
      /* eslint-disable react/no-danger */

      return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_amphtml__WEBPACK_IMPORTED_MODULE_4__["Html"], {
        specName: "html \u26A1 for top-level html",
        lang: "en",
        amp: "amp"
      }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("head", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("link", {
        rel: "icon",
        href: "https://i.imgur.com/lnlvtFf.png"
      }), title, metaDescription, schemaInfo, Object(react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3__["headerBoilerplate"])(url), ampScriptTags, ampStyleTag), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("body", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Nav__WEBPACK_IMPORTED_MODULE_6__["default"], {
        isAmp: true
      }), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
        dangerouslySetInnerHTML: {
          __html: html
        }
      })));
    }
  }], [{
    key: "getInitialProps",
    value: function getInitialProps(_ref) {
      var req = _ref.req,
          res = _ref.res,
          renderPage = _ref.renderPage;

      if (req.url === "/sitemap") {
        res.set("Content-Type", "text/xml");
        res.send(_constants_sitemap__WEBPACK_IMPORTED_MODULE_5__["default"]);
      }

      var ampScripts = new react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3__["AmpScripts"]();
      var sheet = new styled_components__WEBPACK_IMPORTED_MODULE_2__["ServerStyleSheet"]();
      var page = renderPage(function (App) {
        return function (props) {
          return sheet.collectStyles(react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(react_amphtml_setup__WEBPACK_IMPORTED_MODULE_3__["AmpScriptsManager"], {
            ampScripts: ampScripts
          }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(App, props)));
        };
      });
      var ampScriptTags = ampScripts.getScriptElements(); // AMP only allows for 1 style tag, so we need to compbine all the style
      // tags generated by styled-components

      /* eslint-disable react/no-danger */

      var ampStyleTag = react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("style", {
        "amp-custom": "",
        dangerouslySetInnerHTML: {
          __html: sheet.getStyleElement().reduce(function (css) {
            var _ref2 = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {},
                _ref2$props = _ref2.props;

            _ref2$props = _ref2$props === void 0 ? {} : _ref2$props;
            var _ref2$props$dangerous = _ref2$props.dangerouslySetInnerHTML;
            _ref2$props$dangerous = _ref2$props$dangerous === void 0 ? {} : _ref2$props$dangerous;

            var _ref2$props$dangerous2 = _ref2$props$dangerous.__html,
                __html = _ref2$props$dangerous2 === void 0 ? "" : _ref2$props$dangerous2;

            return "".concat(css).concat(__html);
          }, "")
        }
      });
      /* eslint-enable */
      // Get the dynamic `<title />` from the head generated by next.js

      var title = page.head.filter(function (_ref3) {
        var type = _ref3.type;
        return type === "title";
      }).slice(0, 1) || react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("title", null, "ampreact");
      var metaDescription = page.head.filter(function (_ref4) {
        var type = _ref4.type;
        return type === "meta";
      }).slice(1, 2) || null;
      var schemaInfo = page.head.filter(function (_ref5) {
        var type = _ref5.type;
        return type === "script";
      }).slice(0, 1) || null;
      return _objectSpread({}, page, {
        title: title,
        metaDescription: metaDescription,
        schemaInfo: schemaInfo,
        url: req.url,
        ampScriptTags: ampScriptTags,
        ampStyleTag: ampStyleTag
      });
    }
  }]);

  return MyDocument;
}(next_document__WEBPACK_IMPORTED_MODULE_1___default.a);



/***/ }),

/***/ 0:
/*!**********************************!*\
  !*** multi ./pages/_document.js ***!
  \**********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! ./pages/_document.js */"./pages/_document.js");


/***/ }),

/***/ "next/document":
/*!********************************!*\
  !*** external "next/document" ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("next/document");

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

/***/ "react-amphtml/setup":
/*!**************************************!*\
  !*** external "react-amphtml/setup" ***!
  \**************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("react-amphtml/setup");

/***/ }),

/***/ "styled-components":
/*!************************************!*\
  !*** external "styled-components" ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ })

/******/ });
//# sourceMappingURL=_document.js.map