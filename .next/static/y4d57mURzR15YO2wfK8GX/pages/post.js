(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{13:function(e,n,t){e.exports=t(58)},19:function(e,n,t){e.exports=t(63)},24:function(e,n,t){"use strict";t.r(n),n.default=function(e,n){return n=n||{},new Promise(function(t,i){var r=new XMLHttpRequest;for(var a in r.open(n.method||"get",e,!0),n.headers)r.setRequestHeader(a,n.headers[a]);function o(){var e,n=[],t=[],i={};return r.getAllResponseHeaders().replace(/^(.*?):[^\S\n]*([\s\S]*?)$/gm,function(r,a,o){n.push(a=a.toLowerCase()),t.push([a,o]),i[a]=(e=i[a])?e+","+o:o}),{ok:2==(r.status/100|0),status:r.status,statusText:r.statusText,url:r.responseURL,clone:o,text:function(){return Promise.resolve(r.responseText)},json:function(){return Promise.resolve(r.responseText).then(JSON.parse)},blob:function(){return Promise.resolve(new Blob([r.response]))},headers:{keys:function(){return n},entries:function(){return t},get:function(e){return i[e.toLowerCase()]},has:function(e){return e.toLowerCase()in i}}}}r.withCredentials="include"==n.credentials,r.onload=function(){t(o())},r.onerror=i,r.send(n.body||null)})}},25:function(e,n,t){e.exports=window.fetch||(window.fetch=t(24).default||t(24))},27:function(e,n,t){"use strict";var i=t(3),r=t.n(i),a=t(0),o=t.n(a),l=t(2),c=t(6),s=t(1),u=t.n(s);function m(){var e=x(["\n  border-radius: 30px;\n  flex-shrink: 0;\n"]);return m=function(){return e},e}function p(){var e=x(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n"]);return p=function(){return e},e}function d(){var e=x(["\n  font-size: 16px;\n  margin-bottom: 4px;\n"]);return d=function(){return e},e}function f(){var e=x(["\n  margin-left: 20px;\n"]);return f=function(){return e},e}function g(){var e=x(["\n  align-items: center;\n  display: flex;\n  margin-top: 20px;\n  max-width: 500px;\n"]);return g=function(){return e},e}function x(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var h=l.b.div(g()),w=l.b.div(f()),b=l.b.div(d()),v=l.b.div(p()),y=Object(l.b)(c.AmpImg)(m()),E=function(e){var n=e.date_added,t=e.image,i=e.name;return o.a.createElement(h,null,o.a.createElement(y,{specName:"default",src:t,width:"60",height:"60",alt:"AMP"}),o.a.createElement(w,null,o.a.createElement(b,null,i),n?o.a.createElement(v,null,u()(new Date(n)).format("MMM Do, YYYY")):o.a.createElement(v,null,"Not published yet")))};function j(){var e=A(["\n  display: none;\n\n  @media screen and (max-width: 1199px) {\n    display: block;\n    font-size: 35px;\n    letter-spacing: 0.6em;\n    text-align: center;\n  }\n"]);return j=function(){return e},e}function k(){var e=A(["\n  background-position: center;\n  width: 100%;\n"]);return k=function(){return e},e}function z(){var e=A(["\n  align-items: center;\n  display: flex;\n  margin-left: 20px;\n  max-height: 400px;\n  overflow: hidden;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-height: 500px;\n    order: -1;\n    width: 100%;\n  }\n"]);return z=function(){return e},e}function O(){var e=A(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 23px;\n  font-weight: 400;\n  line-height: 28px;\n  margin-bottom: 30px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 20px;\n    line-height: 24px;\n    margin-bottom: 10px;\n  }\n"]);return O=function(){return e},e}function _(){var e=A(["\n  font-size: 56px;\n  font-weight: 500;\n  line-height: 64px;\n  margin: 0;\n  margin-bottom: 16px;\n\n  @media screen and (max-width: 1199px) {\n    font-size: 36px;\n    font-weight: 500;\n    line-height: 40px;\n    margin-bottom: 8px;\n  }\n"]);return _=function(){return e},e}function N(){var e=A(["\n  margin-left: auto;\n  max-width: 552px;\n\n  @media screen and (max-width: 1199px) {\n    margin-left: 0;\n    max-width: none;\n    padding: 0;\n    width: 100%;\n  }\n"]);return N=function(){return e},e}function P(){var e=A(["\n  align-items: center;\n  display: flex;\n  width: calc(50% - 10px);\n\n  @media screen and (max-width: 1199px) {\n    margin: 30px auto 0;\n    max-width: 740px;\n    width: calc(100% - 40px);\n  }\n"]);return P=function(){return e},e}function I(){var e=A(["\n  display: flex;\n  margin: 0 65px;\n\n  @media screen and (max-width: 1199px) {\n    flex-direction: column;\n    margin: 0;\n  }\n"]);return I=function(){return e},e}function A(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}t.d(n,"a",function(){return q}),t.d(n,"b",function(){return X});var S=l.b.div(I()),M=l.b.div(P()),Y=l.b.div(N()),T=l.b.h1(_()),B=l.b.div(O()),C=l.b.div(z()),D=Object(l.b)(c.AmpImg)(k()),R=l.b.div(j()),q=function(e){var n=e.title,t=e.subtitle,i=e.image_url,r=e.date_added,a=e.user;return o.a.createElement(S,null,o.a.createElement(M,null,o.a.createElement(Y,null,o.a.createElement(T,null,n),o.a.createElement(B,null,t||"Help us write this article!"),a?o.a.createElement(E,{date_added:r,image:a.image,name:a.name}):null,o.a.createElement(R,null,"..."))),o.a.createElement(C,null,o.a.createElement(D,{specName:"default",src:i||"https://i.imgur.com/SmPYB60.png",width:"1200",height:"400",layout:"responsive",alt:"AMP"})))},H=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-3214516492 title-section"},n,o.a.createElement(r.a,{styleId:"3214516492",css:[".title-section.jsx-3214516492{display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin:0 65px;}","@media screen and (max-width:1199px){.title-section.jsx-3214516492{-webkit-flex-direction:column;-ms-flex-direction:column;flex-direction:column;margin:0;}}"]}))},L=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-2927809135 title-info-container"},n,o.a.createElement(r.a,{styleId:"2927809135",css:[".title-info-container.jsx-2927809135{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;width:calc(50% - 10px);}","@media screen and (max-width:1199px){.title-info-container.jsx-2927809135{margin:30px auto 0;max-width:740px;width:calc(100% - 40px);}}"]}))},F=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-1249011680 title-info"},n,o.a.createElement(r.a,{styleId:"1249011680",css:[".title-info.jsx-1249011680{margin-left:auto;max-width:552px;}","@media screen and (max-width:1199px){.title-info.jsx-1249011680{margin-left:0;max-width:none;padding:0;width:100%;}}"]}))},J=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-2529258625 title-text"},n,o.a.createElement(r.a,{styleId:"2529258625",css:[".title-text.jsx-2529258625{font-size:56px;font-weight:500;line-height:64px;margin:0;margin-bottom:16px;}","@media screen and (max-width:1199px){.title-text.jsx-2529258625{font-size:36px;font-weight:500;line-height:40px;margin-bottom:8px;}}"]}))},W=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-3750299911 subtitle"},n,o.a.createElement(r.a,{styleId:"3750299911",css:[".subtitle.jsx-3750299911{color:rgba(0,0,0,0.54);font-size:23px;font-weight:400;line-height:28px;margin-bottom:30px;}","@media screen and (max-width:1199px){.subtitle.jsx-3750299911{font-size:20px;line-height:24px;margin-bottom:10px;}}"]}))},G=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-2130314682 cover-image-container"},n,o.a.createElement(r.a,{styleId:"2130314682",css:[".cover-image-container.jsx-2130314682{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;margin-left:20px;max-height:400px;overflow:hidden;width:calc(50% - 10px);}","@media screen and (max-width:1199px){.cover-image-container.jsx-2130314682{margin-left:0;max-height:500px;-webkit-order:-1;-ms-flex-order:-1;order:-1;width:100%;}}"]}))},U=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-1611578801 divider"},n,o.a.createElement(r.a,{styleId:"1611578801",css:[".divider.jsx-1611578801{display:none;}","@media screen and (max-width:1199px){.divider.jsx-1611578801{display:block;font-size:35px;-webkit-letter-spacing:0.6em;-moz-letter-spacing:0.6em;-ms-letter-spacing:0.6em;letter-spacing:0.6em;text-align:center;}}"]}))},X=function(e){var n=e.title,t=e.subtitle,i=e.image_url,r=e.date_added,a=e.user;return o.a.createElement(H,null,o.a.createElement(L,null,o.a.createElement(F,null,o.a.createElement(J,null,n),o.a.createElement(W,null,t||"Help us write this article!"),a?o.a.createElement(E,{date_added:r,image:a.image,name:a.name}):null,o.a.createElement(U,null,"..."))),o.a.createElement(G,null,o.a.createElement("img",{src:i,style:{width:"100%"}})))}},30:function(e,n,t){"use strict";t.d(n,"a",function(){return S}),t.d(n,"b",function(){return D});var i=t(3),r=t.n(i),a=t(0),o=t.n(a),l=t(1),c=t.n(l),s=t(2),u=t(6);function m(e){return(m="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function p(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function d(e,n){for(var t=0;t<n.length;t++){var i=n[t];i.enumerable=i.enumerable||!1,i.configurable=!0,"value"in i&&(i.writable=!0),Object.defineProperty(e,i.key,i)}}function f(e,n,t){return n&&d(e.prototype,n),t&&d(e,t),e}function g(e,n){return!n||"object"!==m(n)&&"function"!=typeof n?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):n}function x(e){return(x=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,n){if("function"!=typeof n&&null!==n)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(n&&n.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),n&&w(e,n)}function w(e,n){return(w=Object.setPrototypeOf||function(e,n){return e.__proto__=n,e})(e,n)}function b(){var e=z(["\n  height: 80px;\n  position: relative;\n"]);return b=function(){return e},e}function v(){var e=z(["\n  flex-shrink: 0;\n  height: 80px;\n  margin-left: 20px;\n  overflow: hidden;\n  width: 80px;\n"]);return v=function(){return e},e}function y(){var e=z(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 12px;\n  font-style: italic;\n  margin-top: 8px;\n"]);return y=function(){return e},e}function E(){var e=z(["\n  color: rgba(0, 0, 0, 0.54);\n  font-size: 16px;\n  line-height: 20px;\n  margin-top: 5px;\n"]);return E=function(){return e},e}function j(){var e=z(["\n  color: rgba(0, 0, 0, 0.84);\n  font-size: 20px;\n  font-weight: 600;\n  line-height: 25px;\n"]);return j=function(){return e},e}function k(){var e=z(["\n  align-items: center;\n  cursor: pointer;\n  display: flex;\n  justify-content: space-between;\n  margin-bottom: 20px;\n  padding: 10px 20px;\n  text-decoration: none;\n\n  &:hover {\n    background: #eee;\n  }\n"]);return k=function(){return e},e}function z(e,n){return n||(n=e.slice(0)),Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}var O=s.b.div(k()),_=s.b.div(j()),N=s.b.div(E()),P=s.b.div(y()),I=s.b.div(v()),A=Object(s.b)(u.AmpImg)(b()),S=function(e){function n(){return p(this,n),g(this,x(n).apply(this,arguments))}return h(n,a["Component"]),f(n,[{key:"render",value:function(){var e=this.props,n=e.date_added,t=e.image_url_small,i=e.subtitle,r=e.title;e.noAmp;return o.a.createElement(O,null,o.a.createElement("div",null,o.a.createElement(_,null,r),o.a.createElement(N,null,i),o.a.createElement(P,null,n?c()(new Date(n)).format("MMM Do, YYYY"):null)),o.a.createElement(I,null,o.a.createElement(A,{specName:"default",src:t,width:"80",height:"80",alt:"AMP"})))}}]),n}(),M=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-3189911355 list-item-container"},n," ",o.a.createElement(r.a,{styleId:"3189911355",css:[".list-item-container.jsx-3189911355{-webkit-align-items:center;-webkit-box-align:center;-ms-flex-align:center;align-items:center;cursor:pointer;display:-webkit-box;display:-webkit-flex;display:-ms-flexbox;display:flex;-webkit-box-pack:justify;-webkit-justify-content:space-between;-ms-flex-pack:justify;justify-content:space-between;margin-bottom:20px;padding:10px 20px;-webkit-text-decoration:none;text-decoration:none;}",".list-item-container.jsx-3189911355:hover{background:#eee;}"]}))},Y=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-2566256794 list-item-title"},n," ",o.a.createElement(r.a,{styleId:"2566256794",css:[".list-item-title.jsx-2566256794{color:rgba(0,0,0,0.84);font-size:20px;font-weight:600;line-height:25px;}"]}))},T=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-544464814 list-item-subtitle"},n," ",o.a.createElement(r.a,{styleId:"544464814",css:[".list-item-subtitle.jsx-544464814{color:rgba(0,0,0,0.54);font-size:16px;line-height:20px;margin-top:5px;}"]}))},B=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-1809973229 list-item-date"},n," ",o.a.createElement(r.a,{styleId:"1809973229",css:[".list-item-date.jsx-1809973229{color:rgba(0,0,0,0.54);font-size:12px;font-style:italic;margin-top:8px;}"]}))},C=function(e){var n=e.children;return o.a.createElement("div",{className:"jsx-697107138 answer-image-container"},n," ",o.a.createElement(r.a,{styleId:"697107138",css:[".answer-image-container.jsx-697107138{-webkit-flex-shrink:0;-ms-flex-negative:0;flex-shrink:0;height:80px;margin-left:20px;overflow:hidden;width:80px;}"]}))},D=function(e){function n(){return p(this,n),g(this,x(n).apply(this,arguments))}return h(n,a["Component"]),f(n,[{key:"render",value:function(){var e=this.props,n=e.date_added,t=e.image_url_small,i=e.subtitle,r=e.title;e.noAmp;return o.a.createElement(M,null,o.a.createElement("div",null,o.a.createElement(Y,null,r),o.a.createElement(T,null,i),o.a.createElement(B,null,n?c()(new Date(n)).format("MMM Do, YYYY"):null)),o.a.createElement(C,null,o.a.createElement("img",{src:t,alt:r,style:{height:80,width:80}})))}}]),n}()},48:function(e,n,t){"use strict";t.d(n,"a",function(){return o});var i=t(2);function r(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  .writing h3 {\n    font-size: 34px;\n    line-height: 1.15;\n    margin: 0;\n    margin-top: 56px;\n  }\n  \n  .writing h4 {\n    font-size: 26px;\n    line-height: 1.22;\n    margin: 0;\n    margin-top: 30px;\n  }\n  \n  .writing h3 + p,\n  .writing h3 + ol,\n  .writing h3 + ul,\n  .writing h3 + blockquote,\n  .writing h4 + p,\n  .writing h4 + ol,\n  .writing h4 + ul,\n  .writing h4 + blockquote {\n    margin-top: 8px;\n  }\n  \n  .writing p,\n  .writing ol,\n  .writing ul,\n  .writing blockquote {\n    font-size: 21px;\n    line-height: 1.58;\n    margin: 0;\n    margin-top: 29px;\n  }\n  \n  .writing ol,\n  .writing ul {\n    padding: 0 40px;\n  }\n  \n  .writing li {\n    margin-bottom: 10px;\n  }\n  \n  .writing li:last-child {\n    margin-bottom: 0;\n  }\n  \n  .writing blockquote {\n    border-left: 3px solid rgba(0, 0, 0, .84);\n    font-style: italic;\n    left: -20px;\n    padding-left: 20px;\n    position: relative;\n  }\n  \n  .writing .first {\n    margin-top: 8px;\n  }\n  \n  .writing .nomargin {\n    margin-top: 0;\n  }\n  \n  .writing .indent {\n    margin-left: 20px;\n  }\n  \n  .writing .image {\n    margin-top: 29px;\n  }\n  \n  .writing .image-left {\n    float: left;\n    margin-right: 20px;\n  }\n  \n  .writing .image-right {\n    float: right;\n    margin-left: 20px;\n  }\n  \n  .writing a {\n    color: #689f38;\n    text-decoration: none;\n  }\n  \n  .writing .reference {\n    font-size: 14px;\n    margin-left: 2px;\n    position: relative;\n    top: -5px;\n  }\n\n  .divider {\n    display: block;\n    font-size: 35px;\n    letter-spacing: 0.6em;\n    text-align: center;\n  }\n  \n  @media screen and (max-width: 768px) {\n    .writing h3 {\n      font-size: 30px;\n      margin-top: 28px;\n    }\n  \n    .writing h4 {\n      font-size: 24px;\n      margin-top: 22px;\n    }\n  \n    .writing p,\n    .writing ol {\n      font-size: 18px;\n      margin-top: 21px;\n    }\n  \n    .writing blockquote {\n      font-size: 18px;\n      margin-top: 21px;\n    }\n  \n    .writing .image {\n      margin-top: 21px;\n    }\n  }\n\n  ","\n  "]);return r=function(){return e},e}var a="/* RESURRECTION HARMONY */\n\n.resurrection-scripture-container {\n  display: flex;\n}\n\n.resurrection-scripture {\n  flex-grow: 1;\n  margin-top: 20px;\n  min-width: 320px;\n}\n\n.resurrection-scripture-title {\n  background: #757575;\n  border-right: 1px solid #fff;\n  color: #fff;\n  padding: 5px 10px;\n}\n\n.resurrection-scripture-text {\n  border: 1px solid #BDBDBD;\n  border-top: 0;\n  padding: 5px 10px;\n}\n\n.scripture-verse {\n  font-size: 13px;\n  font-weight: bold;\n  position: relative;\n  top: -5px;\n}\n\n.writing .purple {\n  color: #9C27B0;\n  font-weight: bold;\n}\n\n.writing .red {\n  color: #F44336;\n  font-weight: bold;\n}\n\n.writing .teal {\n  color: #009688;\n  font-weight: bold;\n}\n\n.writing .orange {\n  color: #FF5722;\n  font-weight: bold;\n}\n\n.writing .orange-1 {\n  color: #EF6C00;\n  font-weight: bold;\n}\n\n.writing .blue {\n  color: #2196F3;\n  font-weight: bold;\n}\n\n.writing .indigo {\n  color: #3F51B5;\n  font-weight: bold;\n}\n\n.writing .pink {\n  color: #E91E63;\n  font-weight: bold;\n}\n\n.writing .cyan {\n  color: #0097A7;\n  font-weight: bold;\n}\n\n.writing .green {\n  color: #43A047;\n  font-weight: bold;\n}\n\n.writing .brown {\n  color: #795548;\n  font-weight: bold;\n}";function o(e){return Object(i.a)(r(),"resurrection-narratives-harmony"===e?a:"")}},576:function(e,n,t){__NEXT_REGISTER_PAGE("/post",function(){return e.exports=t(597),{page:e.exports.default}})},597:function(e,n,t){"use strict";t.r(n);var i=t(13),r=t.n(i),a=t(0),o=t.n(a),l=t(19),c=t.n(l),s=t(2),u=t(6),m=t(25),p=t.n(m),d=t(48),f=t(9),g=t(8),x=t(27),h=function(e){var n=e.description,t=e.title;return o.a.createElement("div",{className:"writing"},o.a.createElement("h3",null,t),o.a.createElement("p",{className:"first"},n),o.a.createElement("h3",null,"This article still needs to be written!"),o.a.createElement("p",{className:"first"},"Would you consider helping us write this article? If you would like to help others learn more about the Christian faith, as well as have an article be attributed to you as the author (with a link to your website, if you have one), simply send an email to"," ",o.a.createElement("strong",null,"cheng.c.michael@gmail.com"),", and we can provide you with more specific instructions for contributing!"))},w=t(30);function b(e,n,t,i,r,a,o){try{var l=e[a](o),c=l.value}catch(e){return void t(e)}l.done?n(c):Promise.resolve(c).then(i,r)}function v(){var e=function(e,n){n||(n=e.slice(0));return Object.freeze(Object.defineProperties(e,{raw:{value:Object.freeze(n)}}))}(["\n  position: relative;\n  min-height: 2rem;\n"]);return v=function(){return e},e}var y=Object(s.b)(u.AmpList)(v()),E=function(e){var n=e.post,t=e.slug;if(!n)return[o.a.createElement("h1",null,"Post not found"),o.a.createElement("div",null,o.a.createElement("a",{href:"https://bibleanswers.io"},"Bible Answers Home"))];var i=n.url,r=n.title,a=n.description,l=n.image_url,s=n.date_added,m=n.updated_at,p=n.html,b=n.published,v=s?new Date(s):new Date,E=Object(d.a)(t);return o.a.createElement(f.a,null,o.a.createElement(c.a,null,o.a.createElement("title",null,r," | Bible Answers"),o.a.createElement("meta",{name:"description",content:a}),o.a.createElement("meta",{property:"og:url",content:"https://bibleanswers.io".concat(i)}),o.a.createElement("meta",{property:"og:title",content:r}),o.a.createElement("meta",{property:"og:description",content:a}),o.a.createElement("meta",{property:"og:image",content:l}),o.a.createElement("script",{type:"application/ld+json",dangerouslySetInnerHTML:{__html:JSON.stringify({"@context":"http://schema.org","@type":"Article",mainEntityOfPage:{"@type":"WebPage","@id":"https://google.com/article"},headline:r,image:{"@type":"ImageObject",url:l,height:400,width:1200},datePublished:v,dateModified:new Date(m).toISOString(),author:{"@type":"Person",name:"Michael Cheng"},publisher:{"@type":"Organization",name:"Bible Answers",logo:{"@type":"ImageObject",url:"https://i.imgur.com/dJPxPY9.png"}},description:a})}})),o.a.createElement(E,{slug:t}),o.a.createElement(x.a,n),o.a.createElement(g.a,null,b?o.a.createElement("div",{dangerouslySetInnerHTML:{__html:p}}):o.a.createElement(h,{description:a,title:r}),o.a.createElement("div",{className:"divider"},"..."),o.a.createElement("div",{className:"writing"},o.a.createElement("h4",null,"Take your study of the Bible to the next level"),o.a.createElement("p",null,"Note: We do ",o.a.createElement("strong",null,"not")," earn any commision on these products. We recommend them solely because we think they are valuable tools for growing in your knowledge of God's word."),o.a.createElement("p",{className:"first"},o.a.createElement("a",{href:"https://www.logos.com",target:"_blank"},"Logos Bible Software")),o.a.createElement("p",{className:"first"},o.a.createElement("a",{href:"https://www.accordancebible.com/",target:"_blank"},"Accordance Bible Software"))),o.a.createElement("div",{className:"writing"},o.a.createElement("h3",null,"Related posts"),o.a.createElement(y,{specName:"default",src:"https://bibleanswersapi.herokuapp.com/relatedposts/".concat(t),items:"items",layout:"fill"},o.a.createElement(u.Template,{specName:"default",type:"amp-mustache"},o.a.createElement("a",{href:"{{url}}"},o.a.createElement(w.a,{title:"{{title}}",subtitle:"{{subtitle}}",image_url_small:"{{image_url_small}}"})))))))};E.getInitialProps=function(){var e,n=(e=r.a.mark(function e(n){var t,i,a,o;return r.a.wrap(function(e){for(;;)switch(e.prev=e.next){case 0:return t=n.req,i=n.query,e.next=3,p()("https://bibleanswersapi.herokuapp.com/posts/".concat(i.slug||t.url.slice(1)));case 3:return a=e.sent,e.next=6,a.json();case 6:return o=e.sent,e.abrupt("return",{post:o,slug:i.slug||t.url.slice(1)});case 8:case"end":return e.stop()}},e,this)}),function(){var n=this,t=arguments;return new Promise(function(i,r){var a=e.apply(n,t);function o(e){b(a,i,r,o,l,"next",e)}function l(e){b(a,i,r,o,l,"throw",e)}o(void 0)})});return function(e){return n.apply(this,arguments)}}();n.default=E}},[[576,1,0]]]);