var AdminBro=function(e,t,r,n,a,o,i,l,u,c,s){"use strict";function d(e){return e&&"object"==typeof e&&"default"in e?e:{default:e}}var f=d(e),h=d(a),p=d(o),m=d(u),g="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:{};function x(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}function w(e,t,r){return e(r={path:t,exports:{},require:function(e,t){return function(){throw new Error("Dynamic requires are not currently supported by @rollup/plugin-commonjs")}(null==t&&r.path)}},r.exports),r.exports}var y=w((function(e){var t=function(e){var t=Object.prototype,r=t.hasOwnProperty,n="function"==typeof Symbol?Symbol:{},a=n.iterator||"@@iterator",o=n.asyncIterator||"@@asyncIterator",i=n.toStringTag||"@@toStringTag";function l(e,t,r){return Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}),e[t]}try{l({},"")}catch(e){l=function(e,t,r){return e[t]=r}}function u(e,t,r,n){var a=t&&t.prototype instanceof d?t:d,o=Object.create(a.prototype),i=new b(n||[]);return o._invoke=function(e,t,r){var n="suspendedStart";return function(a,o){if("executing"===n)throw new Error("Generator is already running");if("completed"===n){if("throw"===a)throw o;return S()}for(r.method=a,r.arg=o;;){var i=r.delegate;if(i){var l=E(i,r);if(l){if(l===s)continue;return l}}if("next"===r.method)r.sent=r._sent=r.arg;else if("throw"===r.method){if("suspendedStart"===n)throw n="completed",r.arg;r.dispatchException(r.arg)}else"return"===r.method&&r.abrupt("return",r.arg);n="executing";var u=c(e,t,r);if("normal"===u.type){if(n=r.done?"completed":"suspendedYield",u.arg===s)continue;return{value:u.arg,done:r.done}}"throw"===u.type&&(n="completed",r.method="throw",r.arg=u.arg)}}}(e,r,i),o}function c(e,t,r){try{return{type:"normal",arg:e.call(t,r)}}catch(e){return{type:"throw",arg:e}}}e.wrap=u;var s={};function d(){}function f(){}function h(){}var p={};p[a]=function(){return this};var m=Object.getPrototypeOf,g=m&&m(m(A([])));g&&g!==t&&r.call(g,a)&&(p=g);var x=h.prototype=d.prototype=Object.create(p);function w(e){["next","throw","return"].forEach((function(t){l(e,t,(function(e){return this._invoke(t,e)}))}))}function y(e,t){var n;this._invoke=function(a,o){function i(){return new t((function(n,i){!function n(a,o,i,l){var u=c(e[a],e,o);if("throw"!==u.type){var s=u.arg,d=s.value;return d&&"object"==typeof d&&r.call(d,"__await")?t.resolve(d.__await).then((function(e){n("next",e,i,l)}),(function(e){n("throw",e,i,l)})):t.resolve(d).then((function(e){s.value=e,i(s)}),(function(e){return n("throw",e,i,l)}))}l(u.arg)}(a,o,n,i)}))}return n=n?n.then(i,i):i()}}function E(e,t){var r=e.iterator[t.method];if(void 0===r){if(t.delegate=null,"throw"===t.method){if(e.iterator.return&&(t.method="return",t.arg=void 0,E(e,t),"throw"===t.method))return s;t.method="throw",t.arg=new TypeError("The iterator does not provide a 'throw' method")}return s}var n=c(r,e.iterator,t.arg);if("throw"===n.type)return t.method="throw",t.arg=n.arg,t.delegate=null,s;var a=n.arg;return a?a.done?(t[e.resultName]=a.value,t.next=e.nextLoc,"return"!==t.method&&(t.method="next",t.arg=void 0),t.delegate=null,s):a:(t.method="throw",t.arg=new TypeError("iterator result is not an object"),t.delegate=null,s)}function v(e){var t={tryLoc:e[0]};1 in e&&(t.catchLoc=e[1]),2 in e&&(t.finallyLoc=e[2],t.afterLoc=e[3]),this.tryEntries.push(t)}function I(e){var t=e.completion||{};t.type="normal",delete t.arg,e.completion=t}function b(e){this.tryEntries=[{tryLoc:"root"}],e.forEach(v,this),this.reset(!0)}function A(e){if(e){var t=e[a];if(t)return t.call(e);if("function"==typeof e.next)return e;if(!isNaN(e.length)){var n=-1,o=function t(){for(;++n<e.length;)if(r.call(e,n))return t.value=e[n],t.done=!1,t;return t.value=void 0,t.done=!0,t};return o.next=o}}return{next:S}}function S(){return{value:void 0,done:!0}}return f.prototype=x.constructor=h,h.constructor=f,f.displayName=l(h,i,"GeneratorFunction"),e.isGeneratorFunction=function(e){var t="function"==typeof e&&e.constructor;return!!t&&(t===f||"GeneratorFunction"===(t.displayName||t.name))},e.mark=function(e){return Object.setPrototypeOf?Object.setPrototypeOf(e,h):(e.__proto__=h,l(e,i,"GeneratorFunction")),e.prototype=Object.create(x),e},e.awrap=function(e){return{__await:e}},w(y.prototype),y.prototype[o]=function(){return this},e.AsyncIterator=y,e.async=function(t,r,n,a,o){void 0===o&&(o=Promise);var i=new y(u(t,r,n,a),o);return e.isGeneratorFunction(r)?i:i.next().then((function(e){return e.done?e.value:i.next()}))},w(x),l(x,i,"Generator"),x[a]=function(){return this},x.toString=function(){return"[object Generator]"},e.keys=function(e){var t=[];for(var r in e)t.push(r);return t.reverse(),function r(){for(;t.length;){var n=t.pop();if(n in e)return r.value=n,r.done=!1,r}return r.done=!0,r}},e.values=A,b.prototype={constructor:b,reset:function(e){if(this.prev=0,this.next=0,this.sent=this._sent=void 0,this.done=!1,this.delegate=null,this.method="next",this.arg=void 0,this.tryEntries.forEach(I),!e)for(var t in this)"t"===t.charAt(0)&&r.call(this,t)&&!isNaN(+t.slice(1))&&(this[t]=void 0)},stop:function(){this.done=!0;var e=this.tryEntries[0].completion;if("throw"===e.type)throw e.arg;return this.rval},dispatchException:function(e){if(this.done)throw e;var t=this;function n(r,n){return i.type="throw",i.arg=e,t.next=r,n&&(t.method="next",t.arg=void 0),!!n}for(var a=this.tryEntries.length-1;a>=0;--a){var o=this.tryEntries[a],i=o.completion;if("root"===o.tryLoc)return n("end");if(o.tryLoc<=this.prev){var l=r.call(o,"catchLoc"),u=r.call(o,"finallyLoc");if(l&&u){if(this.prev<o.catchLoc)return n(o.catchLoc,!0);if(this.prev<o.finallyLoc)return n(o.finallyLoc)}else if(l){if(this.prev<o.catchLoc)return n(o.catchLoc,!0)}else{if(!u)throw new Error("try statement without catch or finally");if(this.prev<o.finallyLoc)return n(o.finallyLoc)}}}},abrupt:function(e,t){for(var n=this.tryEntries.length-1;n>=0;--n){var a=this.tryEntries[n];if(a.tryLoc<=this.prev&&r.call(a,"finallyLoc")&&this.prev<a.finallyLoc){var o=a;break}}o&&("break"===e||"continue"===e)&&o.tryLoc<=t&&t<=o.finallyLoc&&(o=null);var i=o?o.completion:{};return i.type=e,i.arg=t,o?(this.method="next",this.next=o.finallyLoc,s):this.complete(i)},complete:function(e,t){if("throw"===e.type)throw e.arg;return"break"===e.type||"continue"===e.type?this.next=e.arg:"return"===e.type?(this.rval=this.arg=e.arg,this.method="return",this.next="end"):"normal"===e.type&&t&&(this.next=t),s},finish:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.finallyLoc===e)return this.complete(r.completion,r.afterLoc),I(r),s}},catch:function(e){for(var t=this.tryEntries.length-1;t>=0;--t){var r=this.tryEntries[t];if(r.tryLoc===e){var n=r.completion;if("throw"===n.type){var a=n.arg;I(r)}return a}}throw new Error("illegal catch attempt")},delegateYield:function(e,t,r){return this.delegate={iterator:A(e),resultName:t,nextLoc:r},"next"===this.method&&(this.arg=void 0),s}},e}(e.exports);try{regeneratorRuntime=t}catch(e){Function("r","regeneratorRuntime = r")(t)}}));let E={};try{E=window}catch(e){if("window is not defined"!==e.message)throw e;E={isOnServer:!0}}const v=e=>{if(E.isOnServer)return;const t=[E.location.origin,E.REDUX_STATE.paths.loginPath].join("");e.request.responseURL&&e.request.responseURL.match(t)&&(alert("Your session expired. You will be redirected to login screen"),E.location.assign(t))};class I{constructor(){this.baseURL=I.getBaseUrl(),this.client=m.default.create({baseURL:this.baseURL})}static getBaseUrl(){var e;return E.isOnServer?"":[E.location.origin,null===(e=E.REDUX_STATE)||void 0===e?void 0:e.paths.rootPath].join("")}async searchRecords({resourceId:e,query:t}){if(E.isOnServer)return[];const r=await this.resourceAction({resourceId:e,actionName:"search",query:t});return v(r),r.data.records}async resourceAction(e){const{resourceId:t,actionName:r,data:n,query:a,...o}=e;let i=`/api/resources/${t}/actions/${r}`;if(a){i=[i,encodeURIComponent(a)].join("/")}const l=await this.client.request({url:i,method:n?"POST":"GET",...o,data:n});return v(l),l}async publicResourceAction(e){const{resourceId:t,actionName:r,data:n,query:a,...o}=e;let i=`/public/api/resources/${t}/actions/${r}`;if(a){i=[i,encodeURIComponent(a)].join("/")}return await this.client.request({url:i,method:n?"POST":"GET",...o,data:n})}async recordAction(e){const{resourceId:t,recordId:r,actionName:n,data:a,...o}=e,i=await this.client.request({url:`/api/resources/${t}/records/${r}/${n}`,method:a?"POST":"GET",...o,data:a});return v(i),i}async bulkAction(e){const{resourceId:t,recordIds:r,actionName:n,data:a,...o}=e,i=new URLSearchParams;i.set("recordIds",(r||[]).join(","));const l=await this.client.request({url:`/api/resources/${t}/bulk/${n}`,method:a?"POST":"GET",...o,data:a,params:i});return v(l),l}async getDashboard(e={}){const t=await this.client.get("/api/dashboard",e);return v(t),t}async getPage(e){const{pageName:t,...r}=e,n=await this.client.request({url:"/api/pages/"+t,...r});return v(n),n}}var b=function(e,t,r,n){var a=-1,o=null==e?0:e.length;for(n&&o&&(r=e[++a]);++a<o;)r=t(r,e[a],a,e);return r};var A=function(e){return function(t){return null==e?void 0:e[t]}}({"À":"A","Á":"A","Â":"A","Ã":"A","Ä":"A","Å":"A","à":"a","á":"a","â":"a","ã":"a","ä":"a","å":"a","Ç":"C","ç":"c","Ð":"D","ð":"d","È":"E","É":"E","Ê":"E","Ë":"E","è":"e","é":"e","ê":"e","ë":"e","Ì":"I","Í":"I","Î":"I","Ï":"I","ì":"i","í":"i","î":"i","ï":"i","Ñ":"N","ñ":"n","Ò":"O","Ó":"O","Ô":"O","Õ":"O","Ö":"O","Ø":"O","ò":"o","ó":"o","ô":"o","õ":"o","ö":"o","ø":"o","Ù":"U","Ú":"U","Û":"U","Ü":"U","ù":"u","ú":"u","û":"u","ü":"u","Ý":"Y","ý":"y","ÿ":"y","Æ":"Ae","æ":"ae","Þ":"Th","þ":"th","ß":"ss","Ā":"A","Ă":"A","Ą":"A","ā":"a","ă":"a","ą":"a","Ć":"C","Ĉ":"C","Ċ":"C","Č":"C","ć":"c","ĉ":"c","ċ":"c","č":"c","Ď":"D","Đ":"D","ď":"d","đ":"d","Ē":"E","Ĕ":"E","Ė":"E","Ę":"E","Ě":"E","ē":"e","ĕ":"e","ė":"e","ę":"e","ě":"e","Ĝ":"G","Ğ":"G","Ġ":"G","Ģ":"G","ĝ":"g","ğ":"g","ġ":"g","ģ":"g","Ĥ":"H","Ħ":"H","ĥ":"h","ħ":"h","Ĩ":"I","Ī":"I","Ĭ":"I","Į":"I","İ":"I","ĩ":"i","ī":"i","ĭ":"i","į":"i","ı":"i","Ĵ":"J","ĵ":"j","Ķ":"K","ķ":"k","ĸ":"k","Ĺ":"L","Ļ":"L","Ľ":"L","Ŀ":"L","Ł":"L","ĺ":"l","ļ":"l","ľ":"l","ŀ":"l","ł":"l","Ń":"N","Ņ":"N","Ň":"N","Ŋ":"N","ń":"n","ņ":"n","ň":"n","ŋ":"n","Ō":"O","Ŏ":"O","Ő":"O","ō":"o","ŏ":"o","ő":"o","Ŕ":"R","Ŗ":"R","Ř":"R","ŕ":"r","ŗ":"r","ř":"r","Ś":"S","Ŝ":"S","Ş":"S","Š":"S","ś":"s","ŝ":"s","ş":"s","š":"s","Ţ":"T","Ť":"T","Ŧ":"T","ţ":"t","ť":"t","ŧ":"t","Ũ":"U","Ū":"U","Ŭ":"U","Ů":"U","Ű":"U","Ų":"U","ũ":"u","ū":"u","ŭ":"u","ů":"u","ű":"u","ų":"u","Ŵ":"W","ŵ":"w","Ŷ":"Y","ŷ":"y","Ÿ":"Y","Ź":"Z","Ż":"Z","Ž":"Z","ź":"z","ż":"z","ž":"z","Ĳ":"IJ","ĳ":"ij","Œ":"Oe","œ":"oe","ŉ":"'n","ſ":"s"}),S="object"==typeof g&&g&&g.Object===Object&&g,L="object"==typeof self&&self&&self.Object===Object&&self,T=(S||L||Function("return this")()).Symbol;var N=function(e,t){for(var r=-1,n=null==e?0:e.length,a=Array(n);++r<n;)a[r]=t(e[r],r,e);return a},B=Array.isArray,P=Object.prototype,U=P.hasOwnProperty,O=P.toString,_=T?T.toStringTag:void 0;var R=function(e){var t=U.call(e,_),r=e[_];try{e[_]=void 0;var n=!0}catch(e){}var a=O.call(e);return n&&(t?e[_]=r:delete e[_]),a},j=Object.prototype.toString;var C=function(e){return j.call(e)},G=T?T.toStringTag:void 0;var D=function(e){return null==e?void 0===e?"[object Undefined]":"[object Null]":G&&G in Object(e)?R(e):C(e)};var $=function(e){return null!=e&&"object"==typeof e};var W=function(e){return"symbol"==typeof e||$(e)&&"[object Symbol]"==D(e)},k=T?T.prototype:void 0,Z=k?k.toString:void 0;var F=function e(t){if("string"==typeof t)return t;if(B(t))return N(t,e)+"";if(W(t))return Z?Z.call(t):"";var r=t+"";return"0"==r&&1/t==-1/0?"-0":r};var q=function(e){return null==e?"":F(e)},H=/[\xc0-\xd6\xd8-\xf6\xf8-\xff\u0100-\u017f]/g,M=RegExp("[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]","g");var z=function(e){return(e=q(e))&&e.replace(H,A).replace(M,"")},V=/[^\x00-\x2f\x3a-\x40\x5b-\x60\x7b-\x7f]+/g;var Y=function(e){return e.match(V)||[]},X=/[a-z][A-Z]|[A-Z]{2}[a-z]|[0-9][a-zA-Z]|[a-zA-Z][0-9]|[^a-zA-Z0-9 ]/;var J=function(e){return X.test(e)},K="\\xac\\xb1\\xd7\\xf7\\x00-\\x2f\\x3a-\\x40\\x5b-\\x60\\x7b-\\xbf\\u2000-\\u206f \\t\\x0b\\f\\xa0\\ufeff\\n\\r\\u2028\\u2029\\u1680\\u180e\\u2000\\u2001\\u2002\\u2003\\u2004\\u2005\\u2006\\u2007\\u2008\\u2009\\u200a\\u202f\\u205f\\u3000",Q="["+K+"]",ee="\\d+",te="[\\u2700-\\u27bf]",re="[a-z\\xdf-\\xf6\\xf8-\\xff]",ne="[^\\ud800-\\udfff"+K+ee+"\\u2700-\\u27bfa-z\\xdf-\\xf6\\xf8-\\xffA-Z\\xc0-\\xd6\\xd8-\\xde]",ae="(?:\\ud83c[\\udde6-\\uddff]){2}",oe="[\\ud800-\\udbff][\\udc00-\\udfff]",ie="[A-Z\\xc0-\\xd6\\xd8-\\xde]",le="(?:"+re+"|"+ne+")",ue="(?:"+ie+"|"+ne+")",ce="(?:[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]|\\ud83c[\\udffb-\\udfff])?",se="[\\ufe0e\\ufe0f]?"+ce+("(?:\\u200d(?:"+["[^\\ud800-\\udfff]",ae,oe].join("|")+")[\\ufe0e\\ufe0f]?"+ce+")*"),de="(?:"+[te,ae,oe].join("|")+")"+se,fe=RegExp([ie+"?"+re+"+(?:['’](?:d|ll|m|re|s|t|ve))?(?="+[Q,ie,"$"].join("|")+")",ue+"+(?:['’](?:D|LL|M|RE|S|T|VE))?(?="+[Q,ie+le,"$"].join("|")+")",ie+"?"+le+"+(?:['’](?:d|ll|m|re|s|t|ve))?",ie+"+(?:['’](?:D|LL|M|RE|S|T|VE))?","\\d*(?:1ST|2ND|3RD|(?![123])\\dTH)(?=\\b|[a-z_])","\\d*(?:1st|2nd|3rd|(?![123])\\dth)(?=\\b|[A-Z_])",ee,de].join("|"),"g");var he=function(e){return e.match(fe)||[]};var pe=function(e,t,r){return e=q(e),void 0===(t=r?void 0:t)?J(e)?he(e):Y(e):e.match(t)||[]},me=RegExp("['’]","g");var ge=function(e){return function(t){return b(pe(z(t).replace(me,"")),e,"")}};var xe=function(e,t,r){var n=-1,a=e.length;t<0&&(t=-t>a?0:a+t),(r=r>a?a:r)<0&&(r+=a),a=t>r?0:r-t>>>0,t>>>=0;for(var o=Array(a);++n<a;)o[n]=e[n+t];return o};var we=function(e,t,r){var n=e.length;return r=void 0===r?n:r,!t&&r>=n?e:xe(e,t,r)},ye=RegExp("[\\u200d\\ud800-\\udfff\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff\\ufe0e\\ufe0f]");var Ee=function(e){return ye.test(e)};var ve=function(e){return e.split("")},Ie="[\\ud800-\\udfff]",be="[\\u0300-\\u036f\\ufe20-\\ufe2f\\u20d0-\\u20ff]",Ae="\\ud83c[\\udffb-\\udfff]",Se="[^\\ud800-\\udfff]",Le="(?:\\ud83c[\\udde6-\\uddff]){2}",Te="[\\ud800-\\udbff][\\udc00-\\udfff]",Ne="(?:"+be+"|"+Ae+")"+"?",Be="[\\ufe0e\\ufe0f]?"+Ne+("(?:\\u200d(?:"+[Se,Le,Te].join("|")+")[\\ufe0e\\ufe0f]?"+Ne+")*"),Pe="(?:"+[Se+be+"?",be,Le,Te,Ie].join("|")+")",Ue=RegExp(Ae+"(?="+Ae+")|"+Pe+Be,"g");var Oe=function(e){return e.match(Ue)||[]};var _e=function(e){return Ee(e)?Oe(e):ve(e)};var Re=function(e){return function(t){t=q(t);var r=Ee(t)?_e(t):void 0,n=r?r[0]:t.charAt(0),a=r?we(r,1).join(""):t.slice(1);return n[e]()+a}}("toUpperCase"),je=ge((function(e,t,r){return e+(r?" ":"")+Re(t)}));const Ce=(e,t,r,n,a)=>{const o=("string"==typeof n?a:n)||{},i=(e=>e.split(".").join("&#46;"))(r);let l=[`${t}.${i}`];return n&&(l=[`resources.${n}.${t}.${i}`,...l]),e.exists(l)?e.t(l,o):o.defaultValue??je(r)};new I;let Ge={};try{Ge=window}catch(e){if("window is not defined"!==e.message)throw e}const De=new Date;class $e{constructor({options:e}={}){let t=$e.getPaths(e);t=t||{rootPath:"/admin"},this.options=t}static getPaths(e){var t;return e||(null===(t=Ge.REDUX_STATE)||void 0===t?void 0:t.paths)}urlBuilder(e=[],t=""){const r=new RegExp("/{1,}","g");let{rootPath:n}=this.options;n.startsWith("/")||(n="/"+n);return`${[n,...e].join("/").replace(r,"/")}${t}`}loginUrl(){return this.options.loginPath}signupUrl(){return this.options.signupPath}forgotPasswordUrl(){return this.options.forgotPasswordPath}changePasswordUrl(){return this.options.changePasswordPath}logoutUrl(){return this.options.logoutPath}impersonateUrl(){return this.options.impersonatePath}impersonateLogoutUrl(){return this.options.impersonateLogoutPath}dashboardUrl(){return this.options.rootPath}pageUrl(e){return this.urlBuilder(["pages",e])}publicPageUrl(e){return this.urlBuilder(["public",e])}editUrl(e,t,r){return this.recordActionUrl({resourceId:e,recordId:t,actionName:"edit",search:r})}showUrl(e,t,r){return this.recordActionUrl({resourceId:e,recordId:t,actionName:"show",search:r})}deleteUrl(e,t,r){return this.recordActionUrl({resourceId:e,recordId:t,actionName:"delete",search:r})}newUrl(e,t){return this.resourceActionUrl({resourceId:e,actionName:"new",search:t})}listUrl(e,t){return this.resourceActionUrl({resourceId:e,actionName:"list",search:t})}bulkDeleteUrl(e,t,r){return this.bulkActionUrl({resourceId:e,recordIds:t,actionName:"bulkDelete",search:r})}resourceActionUrl({resourceId:e,actionName:t,search:r}){return this.urlBuilder(["resources",e,"actions",t],r)}resourceUrl({resourceId:e,search:t}){return this.urlBuilder(["resources",e],t)}recordActionUrl({resourceId:e,recordId:t,actionName:r,search:n}){return this.urlBuilder(["resources",e,"records",t,r],n)}bulkActionUrl({resourceId:e,recordIds:t,actionName:r,search:n}){const a=this.urlBuilder(["resources",e,"bulk",r]);if(t&&t.length){const e=new URLSearchParams(n);return e.set("recordIds",t.join(",")),`${a}?${e.toString()}`}return`${a}${n||""}`}assetPath(e){if(this.options.assetsCDN){return`${new URL(e,this.options.assetsCDN).href}?date=${De.getTime()}`}return this.urlBuilder(["frontend","assets",e])}}new $e,new I;const We=()=>{const{i18n:e,...t}=n.useTranslation();return{...t,i18n:e,...(e=>{const t=(t,r,n)=>Ce(e,"actions",t,r,n),r=(t,r,n)=>Ce(e,"buttons",t,r,n),n=(t,r,n)=>Ce(e,"labels",t,r,n),a=(t,r,n)=>Ce(e,"properties",t,r,n),o=(t,r,n)=>Ce(e,"messages",t,r,n);return{translateAction:t,ta:t,translateButton:r,tb:r,translateLabel:n,tl:n,translateProperty:a,tp:a,translateMessage:o,tm:o,t:e.t,translate:e.t}})(e)}};new I;var ke=x(w((function(e){function t(){return e.exports=t=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},e.exports.default=e.exports,e.exports.__esModule=!0,t.apply(this,arguments)}e.exports=t,e.exports.default=e.exports,e.exports.__esModule=!0})));function Ze(e,t,r){if("undefined"==typeof window)return e;return n=>{let a=window;a=window;let o=e;return a.AdminBro&&a.AdminBro.UserComponents&&a.AdminBro.UserComponents[t]?(o=a.AdminBro.UserComponents[t],r?f.default.createElement(o,ke({},n,{OriginalComponent:e})):f.default.createElement(o,n)):f.default.createElement(o,n)}}const Fe=p.default(l.Box).withConfig({displayName:"login__Wrapper",componentId:"sc-8h2m0l-0"})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]),qe=p.default.img.withConfig({displayName:"login__StyledLogo",componentId:"sc-8h2m0l-1"})(["max-width:200px;margin:"," 0;"],l.themeGet("space","md")),He=Ze(e=>{const{action:r,message:n}=e,{translateLabel:a,translateButton:o,translateProperty:i,translateMessage:u}=We(),c=t.useSelector(e=>e.branding);return f.default.createElement(Fe,{flex:!0,variant:"grey"},f.default.createElement(l.Box,{bg:"white",height:"440px",flex:!0,boxShadow:"login",width:[1,2/3,"auto"]},f.default.createElement(l.Box,{bg:"primary100",color:"white",p:"x3",width:"380px",flexGrow:0,display:["none","none","block"],position:"relative"},f.default.createElement(l.H2,{fontWeight:"lighter"},a("loginWelcome")),f.default.createElement(l.Text,{fontWeight:"lighter",mt:"default"},u("loginWelcome")),f.default.createElement(l.Text,{textAlign:"center",p:"xxl"},f.default.createElement(l.Box,{display:"inline",mr:"default"},f.default.createElement(l.Illustration,{variant:"Planet",width:82,height:91})),f.default.createElement(l.Box,{display:"inline"},f.default.createElement(l.Illustration,{variant:"Astronaut",width:82,height:91})),f.default.createElement(l.Box,{display:"inline",position:"relative",top:"-20px"},f.default.createElement(l.Illustration,{variant:"FlagInCog",width:82,height:91})))),f.default.createElement(l.Box,{as:"form",action:r,method:"POST",p:"x3",flexGrow:1,width:["100%","100%","480px"]},f.default.createElement(l.H5,{marginBottom:"xxl"},c.logo?f.default.createElement(qe,{src:c.logo,alt:c.companyName}):c.companyName),n&&f.default.createElement(l.MessageBox,{my:"lg",message:n.split(" ").length>1?n:u(n),variant:"danger"}),f.default.createElement(l.FormGroup,null,f.default.createElement(l.Label,{required:!0},i("email")),f.default.createElement(l.Input,{name:"email",placeholder:i("email")})),f.default.createElement(l.FormGroup,null,f.default.createElement(l.Label,{required:!0},i("password")),f.default.createElement(l.Input,{type:"password",name:"password",placeholder:i("password"),autoComplete:"new-password"})),f.default.createElement(l.Text,{mt:"xl",textAlign:"center"},f.default.createElement(l.Button,{variant:"primary"},o("login"))))),c.softwareBrothers?f.default.createElement(l.Box,{mt:"xxl"},f.default.createElement(l.SoftwareBrothers,null)):null)},"Login"),Me=p.default(l.Box).withConfig({displayName:"forgot-password__Wrapper",componentId:"w4phas-0"})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]),ze=p.default.img.withConfig({displayName:"forgot-password__StyledLogo",componentId:"w4phas-1"})(["max-width:200px;margin:"," 0;"],l.themeGet("space","md")),Ve=Ze(e=>{const{action:r}=e,{translateLabel:n,translateMessage:a}=We(),o=t.useSelector(e=>e.branding);return f.default.createElement(Me,{flex:!0,variant:"grey"},f.default.createElement(l.Box,{bg:"white",height:"440px",flex:!0,boxShadow:"login",width:[1,2/3,"auto"]},f.default.createElement(l.Box,{bg:"primary100",color:"white",p:"x3",width:"380px",flexGrow:0,display:["none","none","block"],position:"relative"},f.default.createElement(l.H2,{fontWeight:"lighter"},n("loginWelcome")),f.default.createElement(l.Text,{fontWeight:"lighter",mt:"default"},a("loginWelcome")),f.default.createElement(l.Text,{textAlign:"center",p:"xxl"},f.default.createElement(l.Box,{display:"inline",mr:"default"},f.default.createElement(l.Illustration,{variant:"Planet",width:82,height:91})),f.default.createElement(l.Box,{display:"inline"},f.default.createElement(l.Illustration,{variant:"Astronaut",width:82,height:91})),f.default.createElement(l.Box,{display:"inline",position:"relative",top:"-20px"},f.default.createElement(l.Illustration,{variant:"FlagInCog",width:82,height:91})))),f.default.createElement(l.Box,{as:"form",action:r,method:"POST",p:"x3",flexGrow:1,width:["100%","100%","480px"]},f.default.createElement(l.H5,{marginBottom:"xxl"},o.logo?f.default.createElement(ze,{src:o.logo,alt:o.companyName}):o.companyName),f.default.createElement(l.Text,{mt:"xl",textAlign:"center"},"Forgot password not implemented yet."))),o.softwareBrothers?f.default.createElement(l.Box,{mt:"xxl"},f.default.createElement(l.SoftwareBrothers,null)):null)},"ForgotPassword"),Ye=p.default(l.Box).withConfig({displayName:"change-password__Wrapper",componentId:"sc-23muzi-0"})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]),Xe=p.default.img.withConfig({displayName:"change-password__StyledLogo",componentId:"sc-23muzi-1"})(["max-width:200px;margin:"," 0;"],l.themeGet("space","md")),Je=Ze(e=>{const{action:r}=e,{translateLabel:n,translateMessage:a}=We(),o=t.useSelector(e=>e.branding);return f.default.createElement(Ye,{flex:!0,variant:"grey"},f.default.createElement(l.Box,{bg:"white",height:"440px",flex:!0,boxShadow:"login",width:[1,2/3,"auto"]},f.default.createElement(l.Box,{bg:"primary100",color:"white",p:"x3",width:"380px",flexGrow:0,display:["none","none","block"],position:"relative"},f.default.createElement(l.H2,{fontWeight:"lighter"},n("loginWelcome")),f.default.createElement(l.Text,{fontWeight:"lighter",mt:"default"},a("loginWelcome")),f.default.createElement(l.Text,{textAlign:"center",p:"xxl"},f.default.createElement(l.Box,{display:"inline",mr:"default"},f.default.createElement(l.Illustration,{variant:"Planet",width:82,height:91})),f.default.createElement(l.Box,{display:"inline"},f.default.createElement(l.Illustration,{variant:"Astronaut",width:82,height:91})),f.default.createElement(l.Box,{display:"inline",position:"relative",top:"-20px"},f.default.createElement(l.Illustration,{variant:"FlagInCog",width:82,height:91})))),f.default.createElement(l.Box,{as:"form",action:r,method:"POST",p:"x3",flexGrow:1,width:["100%","100%","480px"]},f.default.createElement(l.H5,{marginBottom:"xxl"},o.logo?f.default.createElement(Xe,{src:o.logo,alt:o.companyName}):o.companyName),f.default.createElement(l.Text,{mt:"xl",textAlign:"center"},"Change password not implemented yet."))),o.softwareBrothers?f.default.createElement(l.Box,{mt:"xxl"},f.default.createElement(l.SoftwareBrothers,null)):null)},"ChangePassword"),Ke=p.default(l.Box).withConfig({displayName:"signup__Wrapper",componentId:"eu1rs5-0"})(["align-items:center;justify-content:center;flex-direction:column;height:100%;"]),Qe=p.default.img.withConfig({displayName:"signup__StyledLogo",componentId:"eu1rs5-1"})(["max-width:200px;margin:"," 0;"],l.themeGet("space","md")),et=Ze(e=>{const{action:r}=e,{translateLabel:n,translateMessage:a}=We(),o=t.useSelector(e=>e.branding);return f.default.createElement(Ke,{flex:!0,variant:"grey"},f.default.createElement(l.Box,{bg:"white",height:"440px",flex:!0,boxShadow:"login",width:[1,2/3,"auto"]},f.default.createElement(l.Box,{bg:"primary100",color:"white",p:"x3",width:"380px",flexGrow:0,display:["none","none","block"],position:"relative"},f.default.createElement(l.H2,{fontWeight:"lighter"},n("loginWelcome")),f.default.createElement(l.Text,{fontWeight:"lighter",mt:"default"},a("loginWelcome")),f.default.createElement(l.Text,{textAlign:"center",p:"xxl"},f.default.createElement(l.Box,{display:"inline",mr:"default"},f.default.createElement(l.Illustration,{variant:"Planet",width:82,height:91})),f.default.createElement(l.Box,{display:"inline"},f.default.createElement(l.Illustration,{variant:"Astronaut",width:82,height:91})),f.default.createElement(l.Box,{display:"inline",position:"relative",top:"-20px"},f.default.createElement(l.Illustration,{variant:"FlagInCog",width:82,height:91})))),f.default.createElement(l.Box,{as:"form",action:r,method:"POST",p:"x3",flexGrow:1,width:["100%","100%","480px"]},f.default.createElement(l.H5,{marginBottom:"xxl"},o.logo?f.default.createElement(Qe,{src:o.logo,alt:o.companyName}):o.companyName),f.default.createElement(l.Text,{mt:"xl",textAlign:"center"},"Signup not implemented yet."))),o.softwareBrothers?f.default.createElement(l.Box,{mt:"xxl"},f.default.createElement(l.SoftwareBrothers,null)):null)},"Signup"),tt=o.createGlobalStyle`
  html, body, #app {
    width: 100%;
    height: 100%;
    margin: 0;
    padding: 0;
  }
`,rt=e=>{const t=new $e;return f.default.createElement(f.default.Fragment,null,f.default.createElement(tt,null),f.default.createElement(i.Switch,null,f.default.createElement(i.Route,{path:t.forgotPasswordUrl()},f.default.createElement(Ve,e)),f.default.createElement(i.Route,{path:t.changePasswordUrl()},f.default.createElement(Je,e)),f.default.createElement(i.Route,{path:t.signupUrl()},f.default.createElement(et,e)),f.default.createElement(i.Route,null,f.default.createElement(He,e))))},nt={rootPath:"/admin",logoutPath:"/admin/logout",impersonatePath:"/admin/impersonate",impersonateLogoutPath:"/admin/impersonate/logout",loginPath:"/admin/login",signupPath:"/admin/signup",forgotPasswordPath:"/admin/forgot-password",changePasswordPath:"/admin/change-password"},at=s.combineReducers({resources:(e=[],t)=>{switch(t.type){case"RESOURCES_INITIALIZE":return t.data;default:return e}},branding:(e={},t)=>{switch(t.type){case"BRANDING_INITIALIZE":return t.data;default:return e}},assets:(e={},t)=>{switch(t.type){case"ASSETS_INITIALIZE":return t.data;default:return e}},paths:(e=nt,t)=>{switch(t.type){case"PATHS_INITIALIZE":return t.data;default:return e}},session:(e=null,t)=>{switch(t.type){case"SESSION_INITIALIZE":return t.data;default:return e}},dashboard:(e={},t)=>{switch(t.type){case"DASHBOARD_INITIALIZE":return t.data;default:return e}},notices:(e=[],t)=>{switch(t.type){case"ADD_NOTICE":return[t.data];case"DROP_NOTICE":return e.filter(e=>e.id!==t.data.noticeId);case"SET_NOTICE_PROGRESS":return e.map(e=>({...e,progress:e.id===t.data.noticeId?t.data.progress:e.progress}));default:return e}},versions:(e={},t)=>{switch(t.type){case"VERSIONS_INITIALIZE":return{admin:t.data.admin,app:t.data.app};default:return e}},pages:(e=[],t)=>{switch(t.type){case"PAGES_INITIALIZE":return t.data;default:return e}},locale:(e={language:"en",translations:{}},t)=>{switch(t.type){case"LOCALE_INITIALIZE":return t.data;default:return e}}});const ot=((e={})=>s.createStore(at,e))(window.REDUX_STATE),it=window.THEME,lt=window.LOGIN,{locale:ut}=window.REDUX_STATE;h.default.use(n.initReactI18next).init({resources:{[ut.language]:{translation:ut.translations}},lng:ut.language,interpolation:{escapeValue:!1}});const ct=f.default.createElement(t.Provider,{store:ot},f.default.createElement(n.I18nextProvider,{i18n:h.default},f.default.createElement(o.ThemeProvider,{theme:it},f.default.createElement(r.BrowserRouter,null,f.default.createElement(rt,{action:lt.action,message:lt.errorMessage})))));return window.regeneratorRuntime=y,{Application:ct,ApiClient:I,ViewHelpers:$e,UserComponents:{},env:{NODE_ENV:"production"}}}(React,ReactRedux,ReactRouterDOM,ReactI18Next,i18n,styled,ReactRouter,AdminBroDesignSystem,axios,flat,Redux);
