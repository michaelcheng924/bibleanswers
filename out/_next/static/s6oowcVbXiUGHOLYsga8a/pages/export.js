(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{540:function(t,e,n){__NEXT_REGISTER_PAGE("/export",function(){return t.exports=n(541),{page:t.exports.default}})},541:function(t,e,n){"use strict";n.r(e);var r=n(34),o=n.n(r),a=n(0),u=n.n(a),i=n(90),c=n.n(i);function s(t,e,n,r,o,a,u){try{var i=t[a](u),c=i.value}catch(t){return void n(t)}i.done?e(c):Promise.resolve(c).then(r,o)}function p(t){return(p="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function f(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function l(t,e){return!e||"object"!==p(e)&&"function"!=typeof e?function(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}(t):e}function y(t){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function b(t,e){return(b=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}var h,g,m,v,w=function(t){function e(){return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e),l(this,y(e).apply(this,arguments))}var n,r,o;return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&b(t,e)}(e,a["Component"]),n=e,(r=[{key:"render",value:function(){var t=this,e=this.props,n=e.posts,r=e.tags,o='module.exports = {\n      exportPathMap: function() {\n        return {\n          "/": { page: "/" },\n          "/all-posts": { page: "/all-posts" },\n          "/posts-in-progress": { page: "/posts-in-progress" },\n          "/admin": { page: "/admin" },\n          '.concat(n.map(function(t){return'"'.concat(t.url,'": { page: "/post", query: { slug: "').concat(t.slug,'" } },\n')}).concat(r.map(function(t,e){return'"'.concat(t.url,'": { page: "/tag", query: { slug: "').concat(t.slug,'" } }').concat(e===r.length-1?"":",","\n")})).join(""),"\n        };\n      }\n    };");return u.a.createElement("div",null,n.length,u.a.createElement("div",null,u.a.createElement("textarea",{value:o,style:{width:"100%",height:"1000px",fontSize:16},ref:function(e){return t.textarea=e}})))}}])&&f(n.prototype,r),o&&f(n,o),e}();g=w,m="getInitialProps",h=o.a.mark(function t(){var e,n;return o.a.wrap(function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,c()("http://bibleanswersapi.herokuapp.com/export");case 2:return e=t.sent,t.next=5,e.json();case 5:return n=t.sent,t.abrupt("return",{posts:n.posts,tags:n.tags});case 7:case"end":return t.stop()}},t,this)}),v=function(){var t=this,e=arguments;return new Promise(function(n,r){var o=h.apply(t,e);function a(t){s(o,n,r,a,u,"next",t)}function u(t){s(o,n,r,a,u,"throw",t)}a(void 0)})},m in g?Object.defineProperty(g,m,{value:v,enumerable:!0,configurable:!0,writable:!0}):g[m]=v,e.default=w}},[[540,1,0]]]);