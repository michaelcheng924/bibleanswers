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
/******/ 	return __webpack_require__(__webpack_require__.s = 46);
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
    css: [".container.jsx-1997678190{color:rgba(0,0,0,0.84);margin:0;padding:0;font-family:Helvetica Neue,Helvetica,Arial,sans-serif;}"]
  }));
};



/***/ }),

/***/ 46:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(47);


/***/ }),

/***/ 47:
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(0);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _components_Container__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(4);
/* harmony import */ var _components_ReadingContainer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(5);




var TermsOfService = function TermsOfService() {
  return react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_ReadingContainer__WEBPACK_IMPORTED_MODULE_2__[/* default */ "a"], {
    style: {
      marginBottom: 20
    }
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement(_components_Container__WEBPACK_IMPORTED_MODULE_1__[/* AmpContainer */ "a"], null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("div", {
    className: "writing"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Welcome to Bible Answers"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "These terms and conditions outline the rules and regulations for the use of Bible Answers's Website."), " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("span", {
    style: {
      textTransform: "capitalize"
    }
  }, " Bible Answers"), " is located at:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("br", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("address", null, "Houston, TX 77065"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "By accessing this website we assume you accept these terms and conditions in full. Do not continue to use Bible Answers's website if you do not accept all of the terms and conditions stated on this page."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The following terminology applies to these Terms and Conditions, Privacy Statement and Disclaimer Notice and any or all Agreements: \u201CClient\u201D, \u201CYou\u201D and \u201CYour\u201D refers to you, the person accessing this website and accepting the Company\u2019s terms and conditions. \u201CThe Company\u201D, \u201COurselves\u201D, \u201CWe\u201D, \u201COur\u201D and \u201CUs\u201D, refers to our Company. \u201CParty\u201D, \u201CParties\u201D, or \u201CUs\u201D, refers to both the Client and ourselves, or either the Client or ourselves. All terms refer to the offer, acceptance and consideration of payment necessary to undertake the process of our assistance to the Client in the most appropriate manner, whether by formal meetings of a fixed duration, or any other means, for the express purpose of meeting the Client\u2019s needs in respect of provision of the Company\u2019s stated services/products, in accordance with and subject to, prevailing law of . Any use of the above terminology or other words in the singular, plural, capitalisation and/or he/she or they, are taken as interchangeable and therefore as referring to same."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Cookies"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We employ the use of cookies. By using Bible Answers's website you consent to the use of cookies in accordance with Bible Answers\u2019s privacy policy."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Most of the modern day interactive web sites use cookies to enable us to retrieve user details for each visit. Cookies are used in some areas of our site to enable the functionality of this area and ease of use for those people visiting. Some of our affiliate / advertising partners may also use cookies."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "License"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Unless otherwise stated, Bible Answers and/or it\u2019s licensors own the intellectual property rights for all material on Bible Answers. All intellectual property rights are reserved. You may view and/or print pages from http://bibleanswers.io for your own personal use subject to restrictions set in these terms and conditions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "You must not:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Republish material from http://bibleanswers.io"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Sell, rent or sub-license material from http://bibleanswers.io"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Reproduce, duplicate or copy material from http://bibleanswers.io")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Redistribute content from Bible Answers (unless content is specifically made for redistribution)."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Hyperlinking to our Content"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "The following organizations may link to our Web site without prior written approval:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Government agencies;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Search engines;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "News organizations;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Online directory distributors when they list us in the directory may link to our Web site in the same manner as they hyperlink to the Web sites of other listed businesses; and"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "Systemwide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", {
    start: "2"
  }, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products or services; and (c) fits within the context of the linking party's site."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "We may consider and approve in our sole discretion other link requests from the following types of organizations:", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "commonly-known consumer and/or business information sources such as Chambers of Commerce, American Automobile Association, AARP and Consumers Union;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "dot.com community sites;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "associations or other groups representing charities, including charity giving sites,"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "online directory distributors;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "internet portals;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "accounting, law and consulting firms whose primary clients are businesses; and"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "educational institutions and trade associations.")))), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We will approve link requests from these organizations if we determine that: (a) the link would not reflect unfavorably on us or our accredited businesses (for example, trade associations or other organizations representing inherently suspect types of business, such as work-at-home opportunities, shall not be allowed to link); (b)the organization does not have an unsatisfactory record with us; (c) the benefit to us from the visibility associated with the hyperlink outweighs the absence of Bible Answers; and (d) where the link is in the context of general resource information or is otherwise consistent with editorial content in a newsletter or similar product furthering the mission of the organization."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "These organizations may link to our home page, to publications or to other Web site information so long as the link: (a) is not in any way misleading; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and it products or services; and (c) fits within the context of the linking party's site."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you are among the organizations listed in paragraph 2 above and are interested in linking to our website, you must notify us by sending an e-mail to", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    href: "mailto:cheng.c.michael@gmail.com",
    title: "send an email to cheng.c.michael@gmail.com"
  }, "cheng.c.michael@gmail.com"), ". Please include your name, your organization name, contact information (such as a phone number and/or e-mail address) as well as the URL of your site, a list of any URLs from which you intend to link to our Web site, and a list of the URL(s) on our site to which you would like to link. Allow 2-3 weeks for a response."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Approved organizations may hyperlink to our Web site as follows:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "By use of our corporate name; or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "By use of the uniform resource locator (Web address) being linked to; or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "By use of any other description of our Web site or material being linked to that makes sense within the context and format of content on the linking party's site.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "No use of Bible Answers\u2019s logo or other artwork will be allowed for linking absent a trademark license agreement."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Iframes"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Without prior approval and express written permission, you may not create frames around our Web pages or use other techniques that alter in any way the visual presentation or appearance of our Web site."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Reservation of Rights"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We reserve the right at any time and in its sole discretion to request that you remove all links or any particular link to our Web site. You agree to immediately remove all links to our Web site upon such request. We also reserve the right to amend these terms and conditions and its linking policy at any time. By continuing to link to our Web site, you agree to be bound to and abide by these linking terms and conditions."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Removal of links from our website"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "If you find any link on our Web site or any linked web site objectionable for any reason, you may contact us about this. We will consider requests to remove links but will have no obligation to do so or to respond directly to you."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "Whilst we endeavour to ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we commit to ensuring that the website remains available or that the material on the website is kept up to date."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Content Liability"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "We shall have no responsibility or liability for any content appearing on your Web site. You agree to indemnify and defend us against all claims arising out of or based upon your Website. No link(s) may appear on any page on your Web site or within any context containing content or materials that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Disclaimer"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website (including, without limitation, any warranties implied by law in respect of satisfactory quality, fitness for purpose and/or the use of reasonable care and skill). Nothing in this disclaimer will:"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("ol", null, react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "limit or exclude our or your liability for death or personal injury resulting from negligence;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "limit or exclude our or your liability for fraud or fraudulent misrepresentation;"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "limit any of our or your liabilities in any way that is not permitted under applicable law; or"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("li", null, "exclude any of our or your liabilities that may not be excluded under applicable law.")), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "The limitations and exclusions of liability set out in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer or in relation to the subject matter of this disclaimer, including liabilities arising in contract, in tort (including negligence) and for breach of statutory duty."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "To the extent that the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature."), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("h3", null, "Credit & Contact Information"), react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("p", null, "This Terms and conditions page was created at", " ", react__WEBPACK_IMPORTED_MODULE_0___default.a.createElement("a", {
    style: {
      color: "inherit",
      textDecoration: "none",
      cursor: "text"
    },
    href: "https://termsandconditionstemplate.com"
  }, "termsandconditionstemplate.com"), " ", "generator. If you have any queries regarding any of our terms, please contact us."))));
};

/* harmony default export */ __webpack_exports__["default"] = (TermsOfService);

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