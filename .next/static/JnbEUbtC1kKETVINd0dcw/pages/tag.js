(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{21:function(e,t,n){e.exports=n(75)},30:function(e,t,n){e.exports=n(71)},37:function(e,t,n){"use strict";n.r(t),t.default=function(e,t){return t=t||{},new Promise(function(n,r){var a=new XMLHttpRequest;for(var i in a.open(t.method||"get",e,!0),t.headers)a.setRequestHeader(i,t.headers[i]);function l(){var e,t=[],n=[],r={};return a.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(a,i,l){t.push(i=i.toLowerCase()),n.push([i,l]),r[i]=(e=r[i])?e+","+l:l}),{ok:2==(a.status/100|0),status:a.status,statusText:a.statusText,url:a.responseURL,clone:l,text:function(){return Promise.resolve(a.responseText)},json:function(){return Promise.resolve(a.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([a.response]))},headers:{keys:function(){return t},entries:function(){return n},get:function(e){return r[e.toLowerCase()]},has:function(e){return e.toLowerCase()in r}}}}a.withCredentials="include"==t.credentials,a.onload=function(){n(l())},a.onerror=r,a.send(t.body||null)})}},38:function(e,t,n){e.exports=window.fetch||(window.fetch=n(37).default||n(37))},39:function(e,t,n){"use strict";var r=n(3),a=n.n(r),i=n(0),l=n.n(i),o=n(2),c=n(9),s=n(1),u=n.n(s);function m(){var e=h(["\n  border-radius: 30px;\n  flex-shrink: 0;\n"]);return m=function(){return e},e}function d(){var e=h(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n"]);return d=function(){return e},e}function p(){var e=h(["\n  font-size: 16px;\n  margin-bottom: 4px;\n"]);return p=function(){return e},e}function f(){var e=h(["\n  margin-left: 20px;\n"]);return f=function(){return e},e}function x(){var e=h(["\n  align-items: center;\n  display: flex;\n  margin-top: 20px;\n  max-width: 500px;\n"]);return x=function(){return e},e}function h(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var g=o.b.div(x()),b=o.b.div(f()),w=o.b.div(p()),v=o.b.div(d()),y=Object(o.b)(c.AmpImg)(m()),E=function(e){var t=e.date_added,n=e.image,r=e.name;return l.a.createElement(g,null,l.a.createElement(y,{specName:"default",src:n,width:"60",height:"60",alt:"AMP"}),l.a.createElement(b,null,l.a.createElement(w,null,r),t?l.a.createElement(v,null,u()(new Date(t)).format("MMM Do, YYYY")):l.a.createElement(v,null,"Not published yet")))},j=function(e){var t=e.date_added,n=e.image,r=e.name;return l.a.createElement("div",{className:"jsx-2530676027 author"},l.a.createElement("img",{src:n,className:"jsx-2530676027 image"}),l.a.createElement("div",{className:"jsx-2530676027 author-info"},l.a.createElement("div",{className:"jsx-2530676027 author-name"},r),t?l.a.createElement("div",{className:"jsx-2530676027 author-date"},u()(new Date(t)).format("MMM Do, YYYY")):l.a.createElement("div",{className:"jsx-2530676027 author-date"},"Not published yet")),l.a.createElement(a.a,{styleId:"2530676027",css:[".author.jsx-2530676027{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-top:20px;max-width:500px;}",".author-info.jsx-2530676027{margin-left:20px;}",".author-name.jsx-2530676027{font-size:16px;margin-bottom:4px;}",".author-date.jsx-2530676027{color:rgba(0,0,0,0.54);font-size:16px;}",".image.jsx-2530676027{border-radius:30px;-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:60px;width:60px;}"]}))};function k(){var e=Y(["\n  display: none;\n\n  @media screen and (max-width: 1199px) {\n    display: block;\n    font-size: 35px;\n    letter-spacing: 0.6em;\n    text-align: center;\n  }\n"]);return k=function(){return e},e}function _(){var e=Y(["\n  background-position: center;\n  width: 100%;\n"]);return _=function(){return e},e}function O(){var e=Y(["\n  align-items: center;\n  display: flex;\n  margin-left: 20px;\n  max-height: 400px;\n  overflow: hidden;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-height: 500px;\n    order: -1;\n    width: 100%;\n  }\n"]);return O=function(){return e},e}function z(){var e=Y(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);return z=function(){return e},e}function P(){var e=Y(["\n  font-size: 56px;\n  font-weight: 500;\n  line-height: 64px;\n  margin: 0;\n  margin-bottom: 16px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 40px;\n    margin-bottom: 8px;\n  }\n"]);return P=function(){return e},e}function N(){var e=Y(["\n  margin-left: auto;\n  max-width: 552px;\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-width: none;\n    padding: 0;\n    width: 100%;\n  }\n"]);return N=function(){return e},e}function I(){var e=Y(["\n  align-items: center;\n  display: flex;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin: 30px auto 0;\n    max-width: 740px;\n    width: calc(100% - 40px);\n  }\n"]);return I=function(){return e},e}function M(){var e=Y(["\n  display: flex;\n  margin: 0 65px;\n\n  @media screen and (max-width: 1199px) {\n    flex-direction: column;\n    margin: 0;\n  }\n"]);return M=function(){return e},e}function Y(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}n.d(t,"a",function(){return B}),n.d(t,"b",function(){return $});var A=o.b.div(M()),S=o.b.div(I()),D=o.b.div(N()),T=o.b.h1(P()),C=o.b.div(z()),H=o.b.div(O()),R=Object(o.b)(c.AmpImg)(_()),L=o.b.div(k()),B=function(e){var t=e.title,n=e.subtitle,r=e.image_url,a=e.date_added,i=e.user;return l.a.createElement(A,null,l.a.createElement(S,null,l.a.createElement(D,null,l.a.createElement(T,null,t),l.a.createElement(C,null,n||"Help us write this article!"),i?l.a.createElement(E,{date_added:a,image:i.image,name:i.name}):null,l.a.createElement(L,null,"..."))),l.a.createElement(H,null,l.a.createElement(R,{specName:"default",src:r||"https://i.imgur.com/SmPYB60.png",width:"1200",height:"400",layout:"responsive",alt:"AMP"})))},J=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-3214516492 title-section"},t,l.a.createElement(a.a,{styleId:"3214516492",css:[".title-section.jsx-3214516492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 65px;}","@media screen and (max-width:1199px){.title-section.jsx-3214516492{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}}"]}))},q=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-2927809135 title-info-container"},t,l.a.createElement(a.a,{styleId:"2927809135",css:[".title-info-container.jsx-2927809135{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:calc(50% - 10px);}","@media screen and (max-width:1199px){.title-info-container.jsx-2927809135{margin:30px auto 0;max-width:740px;width:calc(100% - 40px);}}"]}))},G=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-1249011680 title-info"},t,l.a.createElement(a.a,{styleId:"1249011680",css:[".title-info.jsx-1249011680{margin-left:auto;max-width:552px;}","@media screen and (max-width:1199px){.title-info.jsx-1249011680{margin-left:0;max-width:none;padding:0;width:100%;}}"]}))},X=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-2529258625 title-text"},t,l.a.createElement(a.a,{styleId:"2529258625",css:[".title-text.jsx-2529258625{font-size:56px;font-weight:500;line-height:64px;margin:0;margin-bottom:16px;}","@media screen and (max-width:1199px){.title-text.jsx-2529258625{font-size:36px;font-weight:500;line-height:40px;margin-bottom:8px;}}"]}))},Q=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-3750299911 subtitle"},t,l.a.createElement(a.a,{styleId:"3750299911",css:[".subtitle.jsx-3750299911{color:rgba(0,0,0,0.54);font-size:23px;font-weight:400;line-height:28px;margin-bottom:30px;}","@media screen and (max-width:1199px){.subtitle.jsx-3750299911{font-size:20px;line-height:24px;margin-bottom:10px;}}"]}))},U=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-2130314682 cover-image-container"},t,l.a.createElement(a.a,{styleId:"2130314682",css:[".cover-image-container.jsx-2130314682{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:20px;max-height:400px;overflow:hidden;width:calc(50% - 10px);}","@media screen and (max-width:1199px){.cover-image-container.jsx-2130314682{margin-left:0;max-height:500px;-webkit-order:-1;-ms-flex-order:-1;order:-1;width:100%;}}"]}))},W=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-1611578801 divider"},t,l.a.createElement(a.a,{styleId:"1611578801",css:[".divider.jsx-1611578801{display:none;}","@media screen and (max-width:1199px){.divider.jsx-1611578801{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}}"]}))},$=function(e){var t=e.title,n=e.subtitle,r=e.image_url,a=e.date_added,i=e.user;return l.a.createElement(J,null,l.a.createElement(q,null,l.a.createElement(G,null,l.a.createElement(X,null,t),l.a.createElement(Q,null,n||"Help us write this article!"),i?l.a.createElement(j,{date_added:a,image:i.image,name:i.name}):null,l.a.createElement(W,null,"..."))),l.a.createElement(U,null,l.a.createElement("img",{src:r,style:{width:"100%"}})))}},44:function(e,t,n){"use strict";n.d(t,"a",function(){return Y}),n.d(t,"b",function(){return H});var r=n(3),a=n.n(r),i=n(0),l=n.n(i),o=n(1),c=n.n(o),s=n(2),u=n(9);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function d(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function p(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}function f(e,t,n){return t&&p(e.prototype,t),n&&p(e,n),e}function x(e,t){return!t||"object"!==m(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function h(e){return(h=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function g(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&b(e,t)}function b(e,t){return(b=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}function w(){var e=_(["\n  height: 80px;\n  position: relative;\n"]);return w=function(){return e},e}function v(){var e=_(["\n  flex-shrink: 0;\n  height: 80px;\n  margin-left: 20px;\n  overflow: hidden;\n  width: 80px;\n"]);return v=function(){return e},e}function y(){var e=_(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  font-style: italic;\n  margin-top: 8px;\n"]);return y=function(){return e},e}function E(){var e=_(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 5px;\n"]);return E=function(){return e},e}function j(){var e=_(["\n  color: rgba(0, 0, 0, 0.84);\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n"]);return j=function(){return e},e}function k(){var e=_(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n\n  &:hover {\n    background: #eee;\n  }\n"]);return k=function(){return e},e}function _(e,t){return t||(t=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}var O=s.b.div(k()),z=s.b.div(j()),P=s.b.div(E()),N=s.b.div(y()),I=s.b.div(v()),M=Object(s.b)(u.AmpImg)(w()),Y=function(e){function t(){return d(this,t),x(this,h(t).apply(this,arguments))}return g(t,i["Component"]),f(t,[{key:"render",value:function(){var e=this.props,t=e.date_added,n=e.image_url_small,r=e.subtitle,a=e.title;e.noAmp;return l.a.createElement(O,null,l.a.createElement("div",null,l.a.createElement(z,null,a),l.a.createElement(P,null,r),l.a.createElement(N,null,t?c()(new Date(t)).format("MMM Do, YYYY"):null)),l.a.createElement(I,null,l.a.createElement(M,{specName:"default",src:n,width:"80",height:"80",alt:"AMP"})))}}]),t}(),A=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-3189911355 list-item-container"},t," ",l.a.createElement(a.a,{styleId:"3189911355",css:[".list-item-container.jsx-3189911355{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}",".list-item-container.jsx-3189911355:hover{background:#eee;}"]}))},S=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-2566256794 list-item-title"},t," ",l.a.createElement(a.a,{styleId:"2566256794",css:[".list-item-title.jsx-2566256794{color:rgba(0,0,0,0.84);font-size:20px;font-weight:600;line-height:25px;}"]}))},D=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-544464814 list-item-subtitle"},t," ",l.a.createElement(a.a,{styleId:"544464814",css:[".list-item-subtitle.jsx-544464814{color:rgba(0,0,0,0.54);font-size:16px;line-height:20px;margin-top:5px;}"]}))},T=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-1809973229 list-item-date"},t," ",l.a.createElement(a.a,{styleId:"1809973229",css:[".list-item-date.jsx-1809973229{color:rgba(0,0,0,0.54);font-size:12px;font-style:italic;margin-top:8px;}"]}))},C=function(e){var t=e.children;return l.a.createElement("div",{className:"jsx-697107138 answer-image-container"},t," ",l.a.createElement(a.a,{styleId:"697107138",css:[".answer-image-container.jsx-697107138{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:80px;margin-left:20px;overflow:hidden;width:80px;}"]}))},H=function(e){function t(){return d(this,t),x(this,h(t).apply(this,arguments))}return g(t,i["Component"]),f(t,[{key:"render",value:function(){var e=this.props,t=e.date_added,n=e.image_url_small,r=e.subtitle,a=e.title;e.noAmp;return l.a.createElement(A,null,l.a.createElement("div",null,l.a.createElement(S,null,a),l.a.createElement(D,null,r),l.a.createElement(T,null,t?c()(new Date(t)).format("MMM Do, YYYY"):null)),l.a.createElement(C,null,l.a.createElement("img",{src:n,alt:a,style:{height:80,width:80}})))}}]),t}()},772:function(e,t,n){__NEXT_REGISTER_PAGE("/tag",function(){return e.exports=n(773),{page:e.exports.default}})},773:function(e,t,n){"use strict";n.r(t);var r=n(21),a=n.n(r),i=n(0),l=n.n(i),o=n(30),c=n.n(o),s=n(2),u=n(38),m=n.n(u),d=n(14),p=n(39),f=n(13),x=n(44);function h(e,t,n,r,a,i,l){try{var o=e[i](l),c=o.value}catch(e){return void n(e)}o.done?t(c):Promise.resolve(c).then(r,a)}function g(){var e=function(e,t){t||(t=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(t)}}))}(["\n  color: #689f38;\n  text-decoration: none;\n"]);return g=function(){return e},e}var b=s.b.a(g()),w=function(e){var t=e.url,n=e.title,r=e.subtitle,a=e.description,i=e.image_url,o=e.date_added,s=e.updated_at,u=e.posts,m=void 0===u?[]:u,h=e.user,g=void 0===h?{}:h;if(!n)return[l.a.createElement("h1",null,"Tag not found"),l.a.createElement("a",{href:"/"},"Bible Answers Home")];var w="".concat(m.length,' "').concat(n,'" Questions and Answers'),v=o?new Date(o):new Date;return l.a.createElement(d.a,null,l.a.createElement(c.a,null,l.a.createElement("title",null,w," | Bible Answers"),l.a.createElement("meta",{name:"description",content:a}),l.a.createElement("meta",{property:"og:url",content:"https://bibleanswers.io".concat(t)}),l.a.createElement("meta",{property:"og:title",content:n}),l.a.createElement("meta",{property:"og:description",content:a}),l.a.createElement("meta",{property:"og:image",content:i}),l.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"https://google.com/article"},headline:n,image:{"@type":"ImageObject",url:i,height:400,width:1200},datePublished:v,dateModified:new Date(s).toISOString(),author:{"@type":"Person",name:"Michael Cheng"},publisher:{"@type":"Organization",name:"Bible Answers",logo:{"@type":"ImageObject",url:"https://i.imgur.com/dJPxPY9.png"}},description:a})}})),l.a.createElement(p.a,{title:w,subtitle:r,image_url:i,date_added:o,user:g}),l.a.createElement(f.a,{style:{padding:0,width:"initial"}},m.map(function(e){return l.a.createElement(b,{href:e.url,key:e.url},l.a.createElement(x.a,e))})))};w.getInitialProps=function(){var e,t=(e=a.a.mark(function e(t){var n,r,i;return a.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.query,e.next=3,m()("https://bibleanswersapi.herokuapp.com/tags/".concat(n.slug));case 3:return r=e.sent,e.next=6,r.json();case 6:return i=e.sent,e.abrupt("return",i);case 8:case"end":return e.stop()}},e,this)}),function(){var t=this,n=arguments;return new Promise(function(r,a){var i=e.apply(t,n);function l(e){h(i,r,a,l,o,"next",e)}function o(e){h(i,r,a,l,o,"throw",e)}l(void 0)})});return function(e){return t.apply(this,arguments)}}(),t.default=w}},[[772,1,0]]]);