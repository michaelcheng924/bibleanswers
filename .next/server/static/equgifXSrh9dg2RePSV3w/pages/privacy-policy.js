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
/******/ 	return __webpack_require__(__webpack_require__.s = 47);
/******/ })
/************************************************************************/
/******/ ({

/***/ 0:
/***/ (function(module, exports) {

module.exports = require("react");

/***/ }),

/***/ 1:
/***/ (function(module, exports) {

module.exports = require("styled-components");

/***/ }),

/***/ 2:
/***/ (function(module, exports) {

module.exports = require("styled-jsx/style");

/***/ }),

/***/ 4:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AmpContainer; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "b", function() { return Container; });
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(2);
/* harmony import */ var styled_jsx_style__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(styled_jsx_style__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(1);
/* harmony import */ var styled_components__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(styled_components__WEBPACK_IMPORTED_MODULE_2__);


function _templateObject() {
  var data = _taggedTemplateLiteral(["\n  color: rgba(0, 0, 0, 0.84);\n  margin: 0;\n  padding: 0;\n  font-family: Helvetica Neue, Helvetica, Arial, sans-serif;\n"]);

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
    css: [".container.jsx-1997678190{color:rgba(0,0,0,0.84);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}"]
  }));
};



/***/ }),

/***/ 47:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(48);


/***/ }),

/***/ 48:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




var PrivacyPolicy = function PrivacyPolicy() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    style: {
      marginBottom: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_1__[/* AmpContainer */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "writing"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h1", null, "Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", {
    className: "first"
  }, "Effective date: October 22, 2018"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bible Answers (\"us\", \"we\", or \"our\") operates the http://bibleanswers.io website (the \"Service\")."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This page informs you of our policies regarding the collection, use, and disclosure of personal data when you use our Service and the choices you have associated with that data. Our Privacy Policy for Bible Answers is managed through", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://www.freeprivacypolicy.com/free-privacy-policy-generator.php"
  }, "Free Privacy Policy"), "."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We use your data to provide and improve the Service. By using the Service, you agree to the collection and use of information in accordance with this policy. Unless otherwise defined in this Privacy Policy, terms used in this Privacy Policy have the same meanings as in our Terms and Conditions, accessible from http://bibleanswers.io"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Information Collection And Use"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We collect several different types of information for various purposes to provide and improve our Service to you."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Types of Data Collected"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Personal Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "While using our Service, we may ask you to provide us with certain personally identifiable information that can be used to contact or identify you (\"Personal Data\"). Personally identifiable information may include, but is not limited to:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Cookies and Usage Data")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Usage Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We may also collect information how the Service is accessed and used (\"Usage Data\"). This Usage Data may include information such as your computer's Internet Protocol address (e.g. IP address), browser type, browser version, the pages of our Service that you visit, the time and date of your visit, the time spent on those pages, unique device identifiers and other diagnostic data."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Tracking & Cookies Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We use cookies and similar tracking technologies to track the activity on our Service and hold certain information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Cookies are files with small amount of data which may include an anonymous unique identifier. Cookies are sent to your browser from a website and stored on your device. Tracking technologies also used are beacons, tags, and scripts to collect and track information and to improve and analyze our Service."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, you may not be able to use some portions of our Service."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Examples of Cookies we use:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Session Cookies."), " We use Session Cookies to operate our Service."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Preference Cookies."), " We use Preference Cookies to remember your preferences and various settings."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Security Cookies."), " We use Security Cookies for security purposes.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Use of Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bible Answers uses the collected data for various purposes:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To provide and maintain the Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To notify you about changes to our Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To allow you to participate in interactive features of our Service when you choose to do so"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To provide customer care and support"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To provide analysis or valuable information so that we can improve the Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To monitor the usage of the Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To detect, prevent and address technical issues")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Transfer Of Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your information, including Personal Data, may be transferred to \u2014 and maintained on \u2014 computers located outside of your state, province, country or other governmental jurisdiction where the data protection laws may differ than those from your jurisdiction."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you are located outside United States and choose to provide information to us, please note that we transfer the data, including Personal Data, to United States and process it there."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Your consent to this Privacy Policy followed by your submission of such information represents your agreement to that transfer."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bible Answers will take all steps reasonably necessary to ensure that your data is treated securely and in accordance with this Privacy Policy and no transfer of your Personal Data will take place to an organization or a country unless there are adequate controls in place including the security of your data and other personal information."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Disclosure Of Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Legal Requirements"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Bible Answers may disclose your Personal Data in the good faith belief that such action is necessary to:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To comply with a legal obligation"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To protect and defend the rights or property of Bible Answers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To prevent or investigate possible wrongdoing in connection with the Service"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To protect the personal safety of users of the Service or the public"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "To protect against legal liability")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Security Of Data"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The security of your data is important to us, but remember that no method of transmission over the Internet, or method of electronic storage is 100% secure. While we strive to use commercially acceptable means to protect your Personal Data, we cannot guarantee its absolute security."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Service Providers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We may employ third party companies and individuals to facilitate our Service (\"Service Providers\"), to provide the Service on our behalf, to perform Service-related services or to assist us in analyzing how our Service is used."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "These third parties have access to your Personal Data only to perform these tasks on our behalf and are obligated not to disclose or use it for any other purpose."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Analytics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We may use third-party Service Providers to monitor and analyze the use of our Service."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h4", null, "Google Analytics"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Google Analytics is a web analytics service offered by Google that tracks and reports website traffic. Google uses the data collected to track and monitor the use of our Service. This data is shared with other Google services. Google may use the collected data to contextualize and personalize the ads of its own advertising network."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You can opt-out of having made your activity on the Service available to Google Analytics by installing the Google Analytics opt-out browser add-on. The add-on prevents the Google Analytics JavaScript (ga.js, analytics.js, and dc.js) from sharing information with Google Analytics about visits activity."), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "For more information on the privacy practices of Google, please visit the Google Privacy & Terms web page:", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "https://policies.google.com/privacy?hl=en"
  }, "https://policies.google.com/privacy?hl=en")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Links To Other Sites"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Our Service may contain links to other sites that are not operated by us. If you click on a third party link, you will be directed to that third party's site. We h4ly advise you to review the Privacy Policy of every site you visit."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We have no control over and assume no responsibility for the content, privacy policies or practices of any third party sites or services."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Children's Privacy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Our Service does not address anyone under the age of 18 (\"Children\")."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We do not knowingly collect personally identifiable information from anyone under the age of 18. If you are a parent or guardian and you are aware that your Children has provided us with Personal Data, please contact us. If we become aware that we have collected Personal Data from children without verification of parental consent, we take steps to remove that information from our servers."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Changes To This Privacy Policy"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We may update our Privacy Policy from time to time. We will notify you of any changes by posting the new Privacy Policy on this page."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We will let you know via email and/or a prominent notice on our Service, prior to the change becoming effective and update the \"effective date\" at the top of this Privacy Policy."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You are advised to review this Privacy Policy periodically for any changes. Changes to this Privacy Policy are effective when they are posted on this page."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Contact Us"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you have any questions about this Privacy Policy, please contact us:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ul", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "By visiting this page on our website: http://bibleanswers.io/contact")))));
};

/* harmony default export */ __webpack_exports__["default"] = (PrivacyPolicy);

/***/ }),

/***/ 5:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
function _objectSpread(target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i] != null ? arguments[i] : {}; var ownKeys = Object.keys(source); if (typeof Object.getOwnPropertySymbols === 'function') { ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function (sym) { return Object.getOwnPropertyDescriptor(source, sym).enumerable; })); } ownKeys.forEach(function (key) { _defineProperty(target, key, source[key]); }); } return target; }

function _defineProperty(obj, key, value) { if (key in obj) { Object.defineProperty(obj, key, { value: value, enumerable: true, configurable: true, writable: true }); } else { obj[key] = value; } return obj; }


/* harmony default export */ __webpack_exports__["a"] = (function (_ref) {
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

/***/ })

/******/ });