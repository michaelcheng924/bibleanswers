(window.webpackJsonp=window.webpackJsonp||[]).push([[27],{13:function(e,t,n){e.exports=n(70)},22:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var i=new XMLHttpRequest;for(var a in i.open(t.method||"get",e,!0),t.headers)i.setRequestHeader(a,t.headers[a]);function o(){var e,t=[],n=[],r={};return i.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(i,a,o){t.push(a=a.toLowerCase()),n.push([a,o]),r[a]=(e=r[a])?e+","+o:o}),{ok:2==(i.status/100|0),status:i.status,statusText:i.statusText,url:i.responseURL,clone:o,text:function(){return Promise.resolve(i.responseText)},json:function(){return Promise.resolve(i.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([i.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}i.withCredentials="include"==t.credentials,i.onload=function(){n(o())},i.onerror=r,i.send(t.body||null)})}},23:function(e,t,n){e.exports=window.fetch||(window.fetch=n(22).default||n(22))},29:function(e,t,n){e.exports=n(38)},30:function(e,t,n){"use strict";var r=n(3),i=n.n(r),a=n(0),o=n.n(a),l=n(2),c=n(6),u=n(1),s=n.n(u);function f(){var e=h(["\n  border-radius: 30px;\n  flex-shrink: 0;\n"]);return f=function(){return e},e}function d(){var e=h(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n"]);return d=function(){return e},e}function p(){var e=h(["\n  font-size: 16px;\n  margin-bottom: 4px;\n"]);return p=function(){return e},e}function m(){var e=h(["\n  margin-left: 20px;\n"]);return m=function(){return e},e}function x(){var e=h(["\n  align-items: center;\n  display: flex;\n  margin-top: 20px;\n  max-width: 500px;\n"]);return x=function(){return e},e}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g=l.b.div(x()),v=l.b.div(m()),b=l.b.div(p()),w=l.b.div(d()),y=Object(l.b)(c.AmpImg)(f()),E=function(e){var t=e.date_added,n=e.image,r=e.name;return o.a.createElement(g,null,o.a.createElement(y,{specName:"default",src:n,width:"60",height:"60",alt:"AMP"}),o.a.createElement(v,null,o.a.createElement(b,null,r),t?o.a.createElement(w,null,s()(new Date(t)).format("MMM Do, YYYY")):o.a.createElement(w,null,"Not published yet")))};function j(){var e=N(["\n  display: none;\n\n  @media screen and (max-width: 1199px) {\n    display: block;\n    font-size: 35px;\n    letter-spacing: 0.6em;\n    text-align: center;\n  }\n"]);return j=function(){return e},e}function k(){var e=N(["\n  background-position: center;\n  width: 100%;\n"]);return k=function(){return e},e}function O(){var e=N(["\n  align-items: center;\n  display: flex;\n  margin-left: 20px;\n  max-height: 400px;\n  overflow: hidden;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-height: 500px;\n    order: -1;\n    width: 100%;\n  }\n"]);return O=function(){return e},e}function _(){var e=N(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);return _=function(){return e},e}function z(){var e=N(["\n  font-size: 56px;\n  font-weight: 500;\n  line-height: 64px;\n  margin: 0;\n  margin-bottom: 16px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 40px;\n    margin-bottom: 8px;\n  }\n"]);return z=function(){return e},e}function P(){var e=N(["\n  margin-left: auto;\n  max-width: 552px;\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-width: none;\n    padding: 0;\n    width: 100%;\n  }\n"]);return P=function(){return e},e}function M(){var e=N(["\n  align-items: center;\n  display: flex;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin: 30px auto 0;\n    max-width: 740px;\n    width: calc(100% - 40px);\n  }\n"]);return M=function(){return e},e}function S(){var e=N(["\n  display: flex;\n  margin: 0 65px;\n\n  @media screen and (max-width: 1199px) {\n    flex-direction: column;\n    margin: 0;\n  }\n"]);return S=function(){return e},e}function N(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",function(){return U}),n.d(t,"b",function(){return X});var A=l.b.div(S()),I=l.b.div(M()),C=l.b.div(P()),D=l.b.h1(z()),T=l.b.div(_()),Y=l.b.div(O()),H=Object(l.b)(c.AmpImg)(k()),R=l.b.div(j()),U=function(e){var t=e.title,n=e.subtitle,r=e.image_url,i=e.date_added,a=e.user;return o.a.createElement(A,null,o.a.createElement(I,null,o.a.createElement(C,null,o.a.createElement(D,null,t),o.a.createElement(T,null,n||"Help us write this article!"),a?o.a.createElement(E,{date_added:i,image:a.image,name:a.name}):null,o.a.createElement(R,null,"..."))),o.a.createElement(Y,null,o.a.createElement(H,{specName:"default",src:r||"https://i.imgur.com/SmPYB60.png",width:"1200",height:"400",layout:"responsive",alt:"AMP"})))},B=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-3214516492 title-section"},t,o.a.createElement(i.a,{styleId:"3214516492",css:[".title-section.jsx-3214516492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 65px;}","@media screen and (max-width:1199px){.title-section.jsx-3214516492{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}}"]}))},L=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-2927809135 title-info-container"},t,o.a.createElement(i.a,{styleId:"2927809135",css:[".title-info-container.jsx-2927809135{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:calc(50% - 10px);}","@media screen and (max-width:1199px){.title-info-container.jsx-2927809135{margin:30px auto 0;max-width:740px;width:calc(100% - 40px);}}"]}))},J=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-1249011680 title-info"},t,o.a.createElement(i.a,{styleId:"1249011680",css:[".title-info.jsx-1249011680{margin-left:auto;max-width:552px;}","@media screen and (max-width:1199px){.title-info.jsx-1249011680{margin-left:0;max-width:none;padding:0;width:100%;}}"]}))},q=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-2529258625 title-text"},t,o.a.createElement(i.a,{styleId:"2529258625",css:[".title-text.jsx-2529258625{font-size:56px;font-weight:500;line-height:64px;margin:0;margin-bottom:16px;}","@media screen and (max-width:1199px){.title-text.jsx-2529258625{font-size:36px;font-weight:500;line-height:40px;margin-bottom:8px;}}"]}))},F=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-3750299911 subtitle"},t,o.a.createElement(i.a,{styleId:"3750299911",css:[".subtitle.jsx-3750299911{color:rgba(0,0,0,0.54);font-size:23px;font-weight:400;line-height:28px;margin-bottom:30px;}","@media screen and (max-width:1199px){.subtitle.jsx-3750299911{font-size:20px;line-height:24px;margin-bottom:10px;}}"]}))},W=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-2130314682 cover-image-container"},t,o.a.createElement(i.a,{styleId:"2130314682",css:[".cover-image-container.jsx-2130314682{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:20px;max-height:400px;overflow:hidden;width:calc(50% - 10px);}","@media screen and (max-width:1199px){.cover-image-container.jsx-2130314682{margin-left:0;max-height:500px;-webkit-order:-1;-ms-flex-order:-1;order:-1;width:100%;}}"]}))},G=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-1611578801 divider"},t,o.a.createElement(i.a,{styleId:"1611578801",css:[".divider.jsx-1611578801{display:none;}","@media screen and (max-width:1199px){.divider.jsx-1611578801{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}}"]}))},X=function(e){var t=e.title,n=e.subtitle,r=e.image_url,i=e.date_added,a=e.user;return o.a.createElement(B,null,o.a.createElement(L,null,o.a.createElement(J,null,o.a.createElement(q,null,t),o.a.createElement(F,null,n||"Help us write this article!"),a?o.a.createElement(E,{date_added:i,image:a.image,name:a.name}):null,o.a.createElement(G,null,"..."))),o.a.createElement(W,null,o.a.createElement("img",{src:r,style:{width:"100%"}})))}},38:function(e,t,n){"use strict";var r=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.defaultHead=h,t.default=void 0;var i=r(n(25)),a=r(n(8)),o=r(n(9)),l=r(n(18)),c=r(n(19)),u=r(n(20)),s=r(n(14)),f=r(n(0)),d=r(n(12)),p=r(n(39)),m=function(e){function t(){return(0,a.default)(this,t),(0,l.default)(this,(0,c.default)(t).apply(this,arguments))}return(0,u.default)(t,e),(0,o.default)(t,[{key:"render",value:function(){return null}}]),t}(f.default.Component);(0,s.default)(m,"contextTypes",{headManager:d.default.object});var x="next-head";function h(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:x;return[f.default.createElement("meta",{key:"charSet",charSet:"utf-8",className:e})]}var g=["name","httpEquiv","charSet","itemProp","property"],v=["article:tag","og:image","og:image:alt","og:image:width","og:image:height","og:image:type","og:image:secure_url","og:image:url"];var b=(0,p.default)(function(e){return e.map(function(e){return f.default.Children.toArray(e.props.children)}).reduce(function(e,t){return e.concat(t)},[]).reduce(function(e,t){return f.default.Fragment&&t.type===f.default.Fragment?e.concat(f.default.Children.toArray(t.props.children)):e.concat(t)},[]).reverse().concat(h("")).filter(Boolean).filter((t=new i.default,n=new i.default,r=new i.default,a={},function(e){if(e.key&&0===e.key.indexOf(".$")){if(t.has(e.key))return!1;t.add(e.key)}switch(e.type){case"title":case"base":if(n.has(e.type))return!1;n.add(e.type);break;case"meta":for(var o=0,l=g.length;o<l;o++){var c=g[o];if(e.props.hasOwnProperty(c))if("charSet"===c){if(r.has(c))return!1;r.add(c)}else{var u=e.props[c],s=a[c]||new i.default;if(s.has(u)&&-1===v.indexOf(u))return!1;s.add(u),a[c]=s}}}return!0})).reverse().map(function(e,t){var n=(e.props&&e.props.className?e.props.className+" ":"")+x,r=e.key||t;return f.default.cloneElement(e,{key:r,className:n})});var t,n,r,a},function(e){this.context&&this.context.headManager&&this.context.headManager.updateHead(e)},function(e){return e})(m);t.default=b},39:function(e,t,n){"use strict";var r=n(33),i=n(5);Object.defineProperty(t,"__esModule",{value:!0}),t.default=function(e,t,n){if("function"!=typeof e)throw new Error("Expected reduceComponentsToState to be a function.");if("function"!=typeof t)throw new Error("Expected handleStateChangeOnClient to be a function.");if(void 0!==n&&"function"!=typeof n)throw new Error("Expected mapStateOnServer to either be undefined or a function.");return function(r){if("function"!=typeof r)throw new Error("Expected WrappedComponent to be a React component.");var i,h=new p.default;function g(r){i=e((0,d.default)(h)),v.canUseDOM?t.call(r,i):n&&(i=n(i))}var v=function(e){function t(e){var n;return(0,a.default)(this,t),n=(0,o.default)(this,(0,l.default)(t).call(this,e)),t.canUseDOM||(h.add((0,s.default)((0,s.default)(n))),g((0,s.default)((0,s.default)(n)))),n}return(0,u.default)(t,e),(0,c.default)(t,null,[{key:"peek",value:function(){return i}},{key:"rewind",value:function(){if(t.canUseDOM)throw new Error("You may only call rewind() on the server. Call peek() to read the current state.");var e=i;return i=void 0,h.clear(),e}}]),(0,c.default)(t,[{key:"componentDidMount",value:function(){h.add(this),g(this)}},{key:"componentDidUpdate",value:function(){g(this)}},{key:"componentWillUnmount",value:function(){h.delete(this),g(this)}},{key:"render",value:function(){return m.default.createElement(r,null,this.props.children)}}]),t}(m.Component);return(0,f.default)(v,"canUseDOM","undefined"!=typeof window),(0,f.default)(v,"contextTypes",r.contextTypes),(0,f.default)(v,"displayName","SideEffect(".concat((0,x.getDisplayName)(r),")")),v}};var a=i(n(8)),o=i(n(18)),l=i(n(19)),c=i(n(9)),u=i(n(20)),s=i(n(64)),f=i(n(14)),d=i(n(40)),p=i(n(25)),m=r(n(0)),x=n(28)},40:function(e,t,n){var r=n(41),i=n(42),a=n(50);e.exports=function(e){return r(e)||i(e)||a()}},41:function(e,t,n){var r=n(59);e.exports=function(e){if(r(e)){for(var t=0,n=new Array(e.length);t<e.length;t++)n[t]=e[t];return n}}},42:function(e,t,n){var r=n(43),i=n(47);e.exports=function(e){if(i(Object(e))||"[object Arguments]"===Object.prototype.toString.call(e))return r(e)}},43:function(e,t,n){e.exports=n(44)},44:function(e,t,n){n(17),n(45),e.exports=n(4).Array.from},45:function(e,t,n){"use strict";var r=n(27),i=n(10),a=n(32),o=n(72),l=n(73),c=n(56),u=n(46),s=n(58);i(i.S+i.F*!n(74)(function(e){Array.from(e)}),"Array",{from:function(e){var t,n,i,f,d=a(e),p="function"==typeof this?this:Array,m=arguments.length,x=m>1?arguments[1]:void 0,h=void 0!==x,g=0,v=s(d);if(h&&(x=r(x,m>2?arguments[2]:void 0,2)),null==v||p==Array&&l(v))for(n=new p(t=c(d.length));t>g;g++)u(n,g,h?x(d[g],g):d[g]);else for(f=v.call(d),n=new p;!(i=f.next()).done;g++)u(n,g,h?o(f,x,[i.value,g],!0):i.value);return n.length=g,n}})},46:function(e,t,n){"use strict";var r=n(24),i=n(51);e.exports=function(e,t,n){t in e?r.f(e,t,i(0,n)):e[t]=n}},47:function(e,t,n){e.exports=n(48)},48:function(e,t,n){n(34),n(17),e.exports=n(49)},49:function(e,t,n){var r=n(57),i=n(16)("iterator"),a=n(37);e.exports=n(4).isIterable=function(e){var t=Object(e);return void 0!==t[i]||"@@iterator"in t||a.hasOwnProperty(r(t))}},50:function(e,t){e.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance")}},562:function(e,t,n){__NEXT_REGISTER_PAGE("/tag",function(){return e.exports=n(563),{page:e.exports.default}})},563:function(e,t,n){"use strict";n.r(t);var r=n(13),i=n.n(r),a=n(0),o=n.n(a),l=n(29),c=n.n(l),u=n(2),s=n(23),f=n.n(s),d=n(15),p=n(30),m=n(11),x=n(66);function h(e,t,n,r,i,a,o){try{var l=e[a](o),c=l.value}catch(e){return void n(e)}l.done?t(c):Promise.resolve(c).then(r,i)}function g(){var e=y(["\n  color: #689f38;\n  text-decoration: none;\n"]);return g=function(){return e},e}function v(){var e=y(["\n  display: block;\n  font-size: 35px;\n  letter-spacing: 0.6em;\n  text-align: center;\n"]);return v=function(){return e},e}function b(){var e=y(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);return b=function(){return e},e}function w(){var e=y(["\n  align-items: center;\n  display: flex;\n  font-size: 34px;\n  line-height: 1.15;\n\n  @media screen and (max-width: 768px) {\n    font-size: 30px;\n  }\n"]);return w=function(){return e},e}function y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}u.b.h2(w()),u.b.div(b()),u.b.div(v());var E=u.b.a(g()),j=function(e){var t=e.title,n=e.subtitle,r=e.description,i=e.image_url,a=e.date_added,l=e.updated_at,u=e.posts,s=void 0===u?[]:u,f=e.user,h=void 0===f?{}:f;if(!t)return[o.a.createElement("h1",null,"Tag not found"),o.a.createElement("a",{href:"/"},"Bible Answers Home")];var g="".concat(s.length,' "').concat(t,'" Questions and Answers'),v=a?new Date(a):new Date;return o.a.createElement(d.a,null,o.a.createElement(c.a,null,o.a.createElement("title",null,g," | Bible Answers"),o.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"https://google.com/article"},headline:t,image:{"@type":"ImageObject",url:i,height:400,width:1200},datePublished:v,dateModified:new Date(l).toISOString(),author:{"@type":"Person",name:"Michael Cheng"},publisher:{"@type":"Organization",name:"Bible Answers",logo:{"@type":"ImageObject",url:"https://i.imgur.com/dJPxPY9.png"}},description:r})}})),o.a.createElement(p.a,{title:g,subtitle:n,image_url:i,date_added:a,user:h}),o.a.createElement(m.a,{style:{padding:0,width:"initial"}},s.map(function(e){return o.a.createElement(E,{href:e.url,key:e.url},o.a.createElement(x.a,e))})))};j.getInitialProps=function(){var e,t=(e=i.a.mark(function e(t){var n,r,a;return i.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,e.next=3,f()("https://bibleanswersapi.herokuapp.com/tags/".concat(n.slug));case 3:return r=e.sent,e.next=6,r.json();case 6:return a=e.sent,e.abrupt("return",a);case 8:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,i){var a=e.apply(t,n);function o(e){h(a,r,i,o,l,"next",e)}function l(e){h(a,r,i,o,l,"throw",e)}o(void 0)})});return function(e){return t.apply(this,arguments)}}(),t.default=j},66:function(e,t,n){"use strict";n.d(t,"a",function(){return A}),n.d(t,"b",function(){return H});var r=n(3),i=n.n(r),a=n(0),o=n.n(a),l=n(1),c=n.n(l),u=n(2),s=n(6);function f(e){return(f="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function m(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function x(e,t){return!t||"object"!==f(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&v(e,t)}function v(e,t){return(v=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function b(){var e=O(["\n  height: 80px;\n  position: relative;\n"]);return b=function(){return e},e}function w(){var e=O(["\n  flex-shrink: 0;\n  height: 80px;\n  margin-left: 20px;\n  overflow: hidden;\n  width: 80px;\n"]);return w=function(){return e},e}function y(){var e=O(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  font-style: italic;\n  margin-top: 8px;\n"]);return y=function(){return e},e}function E(){var e=O(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 5px;\n"]);return E=function(){return e},e}function j(){var e=O(["\n  color: rgba(0, 0, 0, 0.84);\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n"]);return j=function(){return e},e}function k(){var e=O(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n\n  &:hover {\n    background: #eee;\n  }\n"]);return k=function(){return e},e}function O(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var _=u.b.div(k()),z=u.b.div(j()),P=u.b.div(E()),M=u.b.div(y()),S=u.b.div(w()),N=Object(u.b)(s.AmpImg)(b()),A=function(e){function t(){return d(this,t),x(this,h(t).apply(this,arguments))}return g(t,a["Component"]),m(t,[{key:"render",value:function(){var e=this.props,t=e.date_added,n=e.image_url_small,r=e.subtitle,i=e.title;e.noAmp;return o.a.createElement(_,null,o.a.createElement("div",null,o.a.createElement(z,null,i),o.a.createElement(P,null,r),o.a.createElement(M,null,t?c()(new Date(t)).format("MMM Do, YYYY"):null)),o.a.createElement(S,null,o.a.createElement(N,{specName:"default",src:n,width:"80",height:"80",alt:"AMP"})))}}]),t}(),I=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-3189911355 list-item-container"},t," ",o.a.createElement(i.a,{styleId:"3189911355",css:[".list-item-container.jsx-3189911355{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}",".list-item-container.jsx-3189911355:hover{background:#eee;}"]}))},C=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-2566256794 list-item-title"},t," ",o.a.createElement(i.a,{styleId:"2566256794",css:[".list-item-title.jsx-2566256794{color:rgba(0,0,0,0.84);font-size:20px;font-weight:600;line-height:25px;}"]}))},D=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-544464814 list-item-subtitle"},t," ",o.a.createElement(i.a,{styleId:"544464814",css:[".list-item-subtitle.jsx-544464814{color:rgba(0,0,0,0.54);font-size:16px;line-height:20px;margin-top:5px;}"]}))},T=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-1809973229 list-item-date"},t," ",o.a.createElement(i.a,{styleId:"1809973229",css:[".list-item-date.jsx-1809973229{color:rgba(0,0,0,0.54);font-size:12px;font-style:italic;margin-top:8px;}"]}))},Y=function(e){var t=e.children;return o.a.createElement("div",{className:"jsx-697107138 answer-image-container"},t," ",o.a.createElement(i.a,{styleId:"697107138",css:[".answer-image-container.jsx-697107138{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:80px;margin-left:20px;overflow:hidden;width:80px;}"]}))},H=function(e){function t(){return d(this,t),x(this,h(t).apply(this,arguments))}return g(t,a["Component"]),m(t,[{key:"render",value:function(){var e=this.props,t=e.date_added,n=e.image_url_small,r=e.subtitle,i=e.title;e.noAmp;return o.a.createElement(I,null,o.a.createElement("div",null,o.a.createElement(C,null,i),o.a.createElement(D,null,r),o.a.createElement(T,null,t?c()(new Date(t)).format("MMM Do, YYYY"):null)),o.a.createElement(Y,null,o.a.createElement("img",{src:n,alt:i,style:{height:80,width:80}})))}}]),t}()}},[[562,1,0]]]);