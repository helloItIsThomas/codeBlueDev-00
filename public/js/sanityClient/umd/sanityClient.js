(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.SanityClient = {}));
})(this, (function (exports) { 'use strict';

  function _mergeNamespaces(n, m) {
    m.forEach(function (e) {
      e && typeof e !== 'string' && !Array.isArray(e) && Object.keys(e).forEach(function (k) {
        if (k !== 'default' && !(k in n)) {
          var d = Object.getOwnPropertyDescriptor(e, k);
          Object.defineProperty(n, k, d.get ? d : {
            enumerable: true,
            get: function () { return e[k]; }
          });
        }
      });
    });
    return Object.freeze(n);
  }

  const e=!(typeof navigator>"u")&&"ReactNative"===navigator.product,t={timeout:e?6e4:12e4},r=function(r){const a={...t,..."string"==typeof r?{url:r}:r};if(a.timeout=n$1(a.timeout),a.query){const{url:t,searchParams:r}=function(t){const r=t.indexOf("?");if(-1===r)return {url:t,searchParams:new URLSearchParams};const n=t.slice(0,r),a=t.slice(r+1);if(!e)return {url:n,searchParams:new URLSearchParams(a)};if("function"!=typeof decodeURIComponent)throw new Error("Broken `URLSearchParams` implementation, and `decodeURIComponent` is not defined");const s=new URLSearchParams;for(const e of a.split("&")){const[t,r]=e.split("=");t&&s.append(o$1(t),o$1(r||""));}return {url:n,searchParams:s}}(a.url);for(const[e,o]of Object.entries(a.query)){if(undefined!==o)if(Array.isArray(o))for(const t of o)r.append(e,t);else r.append(e,o);const n=r.toString();n&&(a.url=`${t}?${n}`);}}return a.method=a.body&&!a.method?"POST":(a.method||"GET").toUpperCase(),a};function o$1(e){return decodeURIComponent(e.replace(/\+/g," "))}function n$1(e){if(false===e||0===e)return  false;if(e.connect||e.socket)return e;const r=Number(e);return isNaN(r)?n$1(t.timeout):{connect:r,socket:r}}const a$2=/^https?:\/\//i,s$2=function(e){if(!a$2.test(e.url))throw new Error(`"${e.url}" is not a valid URL`)};function c$3(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}

  const o=["request","response","progress","error","abort"],s$1=["processOptions","validateOptions","interceptRequest","finalizeOptions","onRequest","onResponse","onError","onReturn","onHeaders"];function n(r$1,a){const i=[],u=s$1.reduce(((e,t)=>(e[t]=e[t]||[],e)),{processOptions:[r],validateOptions:[s$2]});function l(e){const t=o.reduce(((e,t)=>(e[t]=function(){const e=/* @__PURE__ */Object.create(null);let t=0;return {publish:function(t){for(const r in e)e[r](t);},subscribe:function(r){const o=t++;return e[o]=r,function(){delete e[o];}}}}(),e)),{}),r=(e=>function(t,r,...o){const s="onError"===t;let n=r;for(let r=0;r<e[t].length&&(n=(0, e[t][r])(n,...o),!s||n);r++);return n})(u),s=r("processOptions",e);r("validateOptions",s);const n={options:s,channels:t,applyMiddleware:r};let i;const l=t.request.subscribe((e=>{i=a(e,((o,s)=>((e,o,s)=>{let n=e,a=o;if(!n)try{a=r("onResponse",o,s);}catch(e){a=null,n=e;}n=n&&r("onError",n,s),n?t.error.publish(n):a&&t.response.publish(a);})(o,s,e)));}));t.abort.subscribe((()=>{l(),i&&i.abort();}));const c=r("onReturn",t,n);return c===t&&t.request.publish(n),c}return l.use=function(e){if(!e)throw new Error("Tried to add middleware that resolved to falsey value");if("function"==typeof e)throw new Error("Tried to add middleware that was a function. It probably expects you to pass options to it.");if(e.onReturn&&u.onReturn.length>0)throw new Error("Tried to add new middleware with `onReturn` handler, but another handler has already been registered for this event");return s$1.forEach((t=>{e[t]&&u[t].push(e[t]);})),i.push(e),l},l.clone=()=>n(i,a),r$1.forEach(l.use),l}var a$1,i,u$2=/* @__PURE__ */c$3(function(){if(i)return a$1;i=1;var e=function(e){return e.replace(/^\s+|\s+$/g,"")};return a$1=function(t){if(!t)return {};for(var r={},o=e(t).split("\n"),s=0;s<o.length;s++){var n=o[s],a=n.indexOf(":"),i=e(n.slice(0,a)).toLowerCase(),u=e(n.slice(a+1));typeof r[i]>"u"?r[i]=u:(l=r[i],"[object Array]"===Object.prototype.toString.call(l)?r[i].push(u):r[i]=[r[i],u]);}var l;return r}}());let l$1 = class l{onabort;onerror;onreadystatechange;ontimeout;readyState=0;response;responseText="";responseType="";status;statusText;withCredentials;#e;#t;#r;#o={};#s;#n={};#a;open(e,t,r){this.#e=e,this.#t=t,this.#r="",this.readyState=1,this.onreadystatechange?.(),this.#s=undefined;}abort(){this.#s&&this.#s.abort();}getAllResponseHeaders(){return this.#r}setRequestHeader(e,t){this.#o[e]=t;}setInit(e,t=true){this.#n=e,this.#a=t;}send(e){const t="arraybuffer"!==this.responseType,r={...this.#n,method:this.#e,headers:this.#o,body:e};"function"==typeof AbortController&&this.#a&&(this.#s=new AbortController,typeof EventTarget<"u"&&this.#s.signal instanceof EventTarget&&(r.signal=this.#s.signal)),typeof document<"u"&&(r.credentials=this.withCredentials?"include":"omit"),fetch(this.#t,r).then((e=>(e.headers.forEach(((e,t)=>{this.#r+=`${t}: ${e}\r\n`;})),this.status=e.status,this.statusText=e.statusText,this.readyState=3,this.onreadystatechange?.(),t?e.text():e.arrayBuffer()))).then((e=>{"string"==typeof e?this.responseText=e:this.response=e,this.readyState=4,this.onreadystatechange?.();})).catch((e=>{"AbortError"!==e.name?this.onerror?.(e):this.onabort?.();}));}};const c$2="function"==typeof XMLHttpRequest?"xhr":"fetch",h="xhr"===c$2?XMLHttpRequest:l$1,d$1=(e,t)=>{const r=e.options,o=e.applyMiddleware("finalizeOptions",r),s={},n=e.applyMiddleware("interceptRequest",undefined,{adapter:c$2,context:e});if(n){const e=setTimeout(t,0,null,n);return {abort:()=>clearTimeout(e)}}let a=new h;a instanceof l$1&&"object"==typeof o.fetch&&a.setInit(o.fetch,o.useAbortSignal??true);const i=o.headers,d=o.timeout;let p=false,f=false,b=false;if(a.onerror=e=>{m(a instanceof l$1?e instanceof Error?e:new Error(`Request error while attempting to reach is ${o.url}`,{cause:e}):new Error(`Request error while attempting to reach is ${o.url}${e.lengthComputable?`(${e.loaded} of ${e.total} bytes transferred)`:""}`));},a.ontimeout=e=>{m(new Error(`Request timeout while attempting to reach ${o.url}${e.lengthComputable?`(${e.loaded} of ${e.total} bytes transferred)`:""}`));},a.onabort=()=>{w(true),p=true;},a.onreadystatechange=()=>{d&&(w(),s.socket=setTimeout((()=>y("ESOCKETTIMEDOUT")),d.socket)),!p&&4===a.readyState&&0!==a.status&&function(){if(!(p||f||b)){if(0===a.status)return void m(new Error("Unknown XHR error"));w(),f=true,t(null,{body:a.response||(""===a.responseType||"text"===a.responseType?a.responseText:""),url:o.url,method:o.method,headers:u$2(a.getAllResponseHeaders()),statusCode:a.status,statusMessage:a.statusText});}}();},a.open(o.method,o.url,true),a.withCredentials=!!o.withCredentials,i&&a.setRequestHeader)for(const e in i)i.hasOwnProperty(e)&&a.setRequestHeader(e,i[e]);return o.rawBody&&(a.responseType="arraybuffer"),e.applyMiddleware("onRequest",{options:o,adapter:c$2,request:a,context:e}),a.send(o.body||null),d&&(s.connect=setTimeout((()=>y("ETIMEDOUT")),d.connect)),{abort:function(){p=true,a&&a.abort();}};function y(t){b=true,a.abort();const r=new Error("ESOCKETTIMEDOUT"===t?`Socket timed out on request to ${o.url}`:`Connection timed out on request to ${o.url}`);r.code=t,e.channels.error.publish(r);}function w(e){(e||p||a.readyState>=2&&s.connect)&&clearTimeout(s.connect),s.socket&&clearTimeout(s.socket);}function m(e){if(f)return;w(true),f=true,a=null;const r=e||new Error(`Network error while attempting to reach ${o.url}`);r.isNetworkError=true,r.request=o,t(r);}},p$1=(e=[],t=d$1)=>n(e,t),f$1="browser";

  var a,c$1,u$1,l,p,d={exports:{}};/* @__PURE__ */c$3((p||(p=1,function(e,t){t.formatArgs=function(t){if(t[0]=(this.useColors?"%c":"")+this.namespace+(this.useColors?" %c":" ")+t[0]+(this.useColors?"%c ":" ")+"+"+e.exports.humanize(this.diff),!this.useColors)return;const s="color: "+this.color;t.splice(1,0,s,"color: inherit");let n=0,r=0;t[0].replace(/%[a-zA-Z%]/g,(e=>{"%%"!==e&&(n++,"%c"===e&&(r=n));})),t.splice(r,0,s);},t.save=function(e){try{e?t.storage.setItem("debug",e):t.storage.removeItem("debug");}catch{}},t.load=function(){let e;try{e=t.storage.getItem("debug");}catch{}return !e&&typeof process<"u"&&"env"in process&&(e=process.env.DEBUG),e},t.useColors=function(){return !(!(typeof window<"u"&&window.process)||"renderer"!==window.process.type&&!window.process.__nwjs)||!(typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/(edge|trident)\/(\d+)/))&&(typeof document<"u"&&document.documentElement&&document.documentElement.style&&document.documentElement.style.WebkitAppearance||typeof window<"u"&&window.console&&(window.console.firebug||window.console.exception&&window.console.table)||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/firefox\/(\d+)/)&&parseInt(RegExp.$1,10)>=31||typeof navigator<"u"&&navigator.userAgent&&navigator.userAgent.toLowerCase().match(/applewebkit\/(\d+)/))},t.storage=function(){try{return localStorage}catch{}}(),t.destroy=/* @__PURE__ */(()=>{let e=false;return ()=>{e||(e=true,console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`."));}})(),t.colors=["#0000CC","#0000FF","#0033CC","#0033FF","#0066CC","#0066FF","#0099CC","#0099FF","#00CC00","#00CC33","#00CC66","#00CC99","#00CCCC","#00CCFF","#3300CC","#3300FF","#3333CC","#3333FF","#3366CC","#3366FF","#3399CC","#3399FF","#33CC00","#33CC33","#33CC66","#33CC99","#33CCCC","#33CCFF","#6600CC","#6600FF","#6633CC","#6633FF","#66CC00","#66CC33","#9900CC","#9900FF","#9933CC","#9933FF","#99CC00","#99CC33","#CC0000","#CC0033","#CC0066","#CC0099","#CC00CC","#CC00FF","#CC3300","#CC3333","#CC3366","#CC3399","#CC33CC","#CC33FF","#CC6600","#CC6633","#CC9900","#CC9933","#CCCC00","#CCCC33","#FF0000","#FF0033","#FF0066","#FF0099","#FF00CC","#FF00FF","#FF3300","#FF3333","#FF3366","#FF3399","#FF33CC","#FF33FF","#FF6600","#FF6633","#FF9900","#FF9933","#FFCC00","#FFCC33"],t.log=console.debug||console.log||(()=>{}),e.exports=(l?u$1:(l=1,u$1=function(e){function t(e){let n,r,o,i=null;function a(...e){if(!a.enabled)return;const s=a,r=Number(/* @__PURE__ */new Date),o=r-(n||r);s.diff=o,s.prev=n,s.curr=r,n=r,e[0]=t.coerce(e[0]),"string"!=typeof e[0]&&e.unshift("%O");let i=0;e[0]=e[0].replace(/%([a-zA-Z%])/g,((n,r)=>{if("%%"===n)return "%";i++;const o=t.formatters[r];if("function"==typeof o){const t=e[i];n=o.call(s,t),e.splice(i,1),i--;}return n})),t.formatArgs.call(s,e),(s.log||t.log).apply(s,e);}return a.namespace=e,a.useColors=t.useColors(),a.color=t.selectColor(e),a.extend=s,a.destroy=t.destroy,Object.defineProperty(a,"enabled",{enumerable:true,configurable:false,get:()=>null!==i?i:(r!==t.namespaces&&(r=t.namespaces,o=t.enabled(e)),o),set:e=>{i=e;}}),"function"==typeof t.init&&t.init(a),a}function s(e,s){const n=t(this.namespace+(typeof s>"u"?":":s)+e);return n.log=this.log,n}function n(e){return e.toString().substring(2,e.toString().length-2).replace(/\.\*\?$/,"*")}return t.debug=t,t.default=t,t.coerce=function(e){return e instanceof Error?e.stack||e.message:e},t.disable=function(){const e=[...t.names.map(n),...t.skips.map(n).map((e=>"-"+e))].join(",");return t.enable(""),e},t.enable=function(e){let s;t.save(e),t.namespaces=e,t.names=[],t.skips=[];const n=("string"==typeof e?e:"").split(/[\s,]+/),r=n.length;for(s=0;s<r;s++)n[s]&&("-"===(e=n[s].replace(/\*/g,".*?"))[0]?t.skips.push(new RegExp("^"+e.slice(1)+"$")):t.names.push(new RegExp("^"+e+"$")));},t.enabled=function(e){if("*"===e[e.length-1])return  true;let s,n;for(s=0,n=t.skips.length;s<n;s++)if(t.skips[s].test(e))return  false;for(s=0,n=t.names.length;s<n;s++)if(t.names[s].test(e))return  true;return  false},t.humanize=function(){if(c$1)return a;c$1=1;var e=1e3,t=60*e,s=60*t,n=24*s,r=7*n;function o(e,t,s,n){var r=t>=1.5*s;return Math.round(e/s)+" "+n+(r?"s":"")}return a=function(i,a){a=a||{};var c,u,l=typeof i;if("string"===l&&i.length>0)return function(o){if(!((o=String(o)).length>100)){var i=/^(-?(?:\d+)?\.?\d+) *(milliseconds?|msecs?|ms|seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)?$/i.exec(o);if(i){var a=parseFloat(i[1]);switch((i[2]||"ms").toLowerCase()){case "years":case "year":case "yrs":case "yr":case "y":return 315576e5*a;case "weeks":case "week":case "w":return a*r;case "days":case "day":case "d":return a*n;case "hours":case "hour":case "hrs":case "hr":case "h":return a*s;case "minutes":case "minute":case "mins":case "min":case "m":return a*t;case "seconds":case "second":case "secs":case "sec":case "s":return a*e;case "milliseconds":case "millisecond":case "msecs":case "msec":case "ms":return a;default:return}}}}(i);if("number"===l&&isFinite(i))return a.long?(c=i,(u=Math.abs(c))>=n?o(c,u,n,"day"):u>=s?o(c,u,s,"hour"):u>=t?o(c,u,t,"minute"):u>=e?o(c,u,e,"second"):c+" ms"):function(r){var o=Math.abs(r);return o>=n?Math.round(r/n)+"d":o>=s?Math.round(r/s)+"h":o>=t?Math.round(r/t)+"m":o>=e?Math.round(r/e)+"s":r+"ms"}(i);throw new Error("val is not a non-empty string or a valid number. val="+JSON.stringify(i))}}(),t.destroy=function(){console.warn("Instance method `debug.destroy()` is deprecated and no longer does anything. It will be removed in the next major version of `debug`.");},Object.keys(e).forEach((s=>{t[s]=e[s];})),t.names=[],t.skips=[],t.formatters={},t.selectColor=function(e){let s=0;for(let t=0;t<e.length;t++)s=(s<<5)-s+e.charCodeAt(t),s|=0;return t.colors[Math.abs(s)%t.colors.length]},t.enable(t.load()),t}))(t);const{formatters:s}=e.exports;s.j=function(e){try{return JSON.stringify(e)}catch(e){return "[UnexpectedJSONParseError]: "+e.message}};}(d,d.exports)),d.exports));const F=typeof Buffer>"u"?()=>false:e=>Buffer.isBuffer(e);function O$1(e){return "[object Object]"===Object.prototype.toString.call(e)}function j(e){if(false===O$1(e))return  false;const t=e.constructor;if(undefined===t)return  true;const s=t.prototype;return !(false===O$1(s)||false===s.hasOwnProperty("isPrototypeOf"))}const v=["boolean","string","number"];function x(){return {processOptions:e=>{const t=e.body;return !t||"function"==typeof t.pipe||F(t)||-1===v.indexOf(typeof t)&&!Array.isArray(t)&&!j(t)?e:Object.assign({},e,{body:JSON.stringify(e.body),headers:Object.assign({},e.headers,{"Content-Type":"application/json"})})}}}function E$1(e){return {onResponse:s=>{const n=s.headers["content-type"]||"",r=e&&e.force||-1!==n.indexOf("application/json");return s.body&&n&&r?Object.assign({},s,{body:t(s.body)}):s},processOptions:e=>Object.assign({},e,{headers:Object.assign({Accept:"application/json"},e.headers)})};function t(e){try{return JSON.parse(e)}catch(e){throw e.message=`Failed to parsed response body as JSON: ${e.message}`,e}}}let k={};typeof globalThis<"u"?k=globalThis:typeof window<"u"?k=window:typeof global<"u"?k=global:typeof self<"u"&&(k=self);var q=k;function A(e={}){const t=e.implementation||q.Observable;if(!t)throw new Error("`Observable` is not available in global scope, and no implementation was passed");return {onReturn:(e,s)=>new t((t=>(e.error.subscribe((e=>t.error(e))),e.progress.subscribe((e=>t.next(Object.assign({type:"progress"},e)))),e.response.subscribe((e=>{t.next(Object.assign({type:"response"},e)),t.complete();})),e.request.publish(s),()=>e.abort.publish())))}}function S$1(){return {onRequest:e=>{if("xhr"!==e.adapter)return;const t=e.request,s=e.context;function n(e){return t=>{const n=t.lengthComputable?t.loaded/t.total*100:-1;s.channels.progress.publish({stage:e,percent:n,total:t.total,loaded:t.loaded,lengthComputable:t.lengthComputable});}}"upload"in t&&"onprogress"in t.upload&&(t.upload.onprogress=n("upload")),"onprogress"in t&&(t.onprogress=n("download"));}}}var M=(e,t,s)=>("GET"===s.method||"HEAD"===s.method)&&(e.isNetworkError||false);function _$1(e){return 100*Math.pow(2,e)+100*Math.random()}const P=(e={})=>(e=>{const t=e.maxRetries||5,s=e.retryDelay||_$1,n=e.shouldRetry;return {onError:(e,r)=>{const o=r.options,i=o.maxRetries||t,a=o.retryDelay||s,c=o.shouldRetry||n,u=o.attemptNumber||0;if(null!==(l=o.body)&&"object"==typeof l&&"function"==typeof l.pipe||!c(e,u,o)||u>=i)return e;var l;const p=Object.assign({},r,{options:Object.assign({},o,{attemptNumber:u+1})});return setTimeout((()=>r.channels.request.publish(p)),a(u)),null}}})({shouldRetry:M,...e});P.shouldRetry=M;

  /******************************************************************************
  Copyright (c) Microsoft Corporation.

  Permission to use, copy, modify, and/or distribute this software for any
  purpose with or without fee is hereby granted.

  THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
  REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
  AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
  INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
  LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
  OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
  PERFORMANCE OF THIS SOFTWARE.
  ***************************************************************************** */
  /* global Reflect, Promise, SuppressedError, Symbol, Iterator */

  var extendStatics = function(d, b) {
    extendStatics = Object.setPrototypeOf ||
        ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
        function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
    return extendStatics(d, b);
  };

  function __extends(d, b) {
    if (typeof b !== "function" && b !== null)
        throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
    extendStatics(d, b);
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
  }

  function __awaiter(thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
  }

  function __generator(thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g = Object.create((typeof Iterator === "function" ? Iterator : Object).prototype);
    return g.next = verb(0), g["throw"] = verb(1), g["return"] = verb(2), typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (g && (g = 0, op[0] && (_ = 0)), _) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : undefined, done: true };
    }
  }

  function __values(o) {
    var s = typeof Symbol === "function" && Symbol.iterator, m = s && o[s], i = 0;
    if (m) return m.call(o);
    if (o && typeof o.length === "number") return {
        next: function () {
            if (o && i >= o.length) o = undefined;
            return { value: o && o[i++], done: !o };
        }
    };
    throw new TypeError(s ? "Object is not iterable." : "Symbol.iterator is not defined.");
  }

  function __read(o, n) {
    var m = typeof Symbol === "function" && o[Symbol.iterator];
    if (!m) return o;
    var i = m.call(o), r, ar = [], e;
    try {
        while ((n === void 0 || n-- > 0) && !(r = i.next()).done) ar.push(r.value);
    }
    catch (error) { e = { error: error }; }
    finally {
        try {
            if (r && !r.done && (m = i["return"])) m.call(i);
        }
        finally { if (e) throw e.error; }
    }
    return ar;
  }

  function __spreadArray(to, from, pack) {
    if (pack || arguments.length === 2) for (var i = 0, l = from.length, ar; i < l; i++) {
        if (ar || !(i in from)) {
            if (!ar) ar = Array.prototype.slice.call(from, 0, i);
            ar[i] = from[i];
        }
    }
    return to.concat(ar || Array.prototype.slice.call(from));
  }

  function __await(v) {
    return this instanceof __await ? (this.v = v, this) : new __await(v);
  }

  function __asyncGenerator(thisArg, _arguments, generator) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var g = generator.apply(thisArg, _arguments || []), i, q = [];
    return i = Object.create((typeof AsyncIterator === "function" ? AsyncIterator : Object).prototype), verb("next"), verb("throw"), verb("return", awaitReturn), i[Symbol.asyncIterator] = function () { return this; }, i;
    function awaitReturn(f) { return function (v) { return Promise.resolve(v).then(f, reject); }; }
    function verb(n, f) { if (g[n]) { i[n] = function (v) { return new Promise(function (a, b) { q.push([n, v, a, b]) > 1 || resume(n, v); }); }; if (f) i[n] = f(i[n]); } }
    function resume(n, v) { try { step(g[n](v)); } catch (e) { settle(q[0][3], e); } }
    function step(r) { r.value instanceof __await ? Promise.resolve(r.value.v).then(fulfill, reject) : settle(q[0][2], r); }
    function fulfill(value) { resume("next", value); }
    function reject(value) { resume("throw", value); }
    function settle(f, v) { if (f(v), q.shift(), q.length) resume(q[0][0], q[0][1]); }
  }

  function __asyncValues(o) {
    if (!Symbol.asyncIterator) throw new TypeError("Symbol.asyncIterator is not defined.");
    var m = o[Symbol.asyncIterator], i;
    return m ? m.call(o) : (o = typeof __values === "function" ? __values(o) : o[Symbol.iterator](), i = {}, verb("next"), verb("throw"), verb("return"), i[Symbol.asyncIterator] = function () { return this; }, i);
    function verb(n) { i[n] = o[n] && function (v) { return new Promise(function (resolve, reject) { v = o[n](v), settle(resolve, reject, v.done, v.value); }); }; }
    function settle(resolve, reject, d, v) { Promise.resolve(v).then(function(v) { resolve({ value: v, done: d }); }, reject); }
  }

  typeof SuppressedError === "function" ? SuppressedError : function (error, suppressed, message) {
    var e = new Error(message);
    return e.name = "SuppressedError", e.error = error, e.suppressed = suppressed, e;
  };

  function isFunction(value) {
      return typeof value === 'function';
  }

  function createErrorClass(createImpl) {
      var _super = function (instance) {
          Error.call(instance);
          instance.stack = new Error().stack;
      };
      var ctorFunc = createImpl(_super);
      ctorFunc.prototype = Object.create(Error.prototype);
      ctorFunc.prototype.constructor = ctorFunc;
      return ctorFunc;
  }

  var UnsubscriptionError = createErrorClass(function (_super) {
      return function UnsubscriptionErrorImpl(errors) {
          _super(this);
          this.message = errors
              ? errors.length + " errors occurred during unsubscription:\n" + errors.map(function (err, i) { return i + 1 + ") " + err.toString(); }).join('\n  ')
              : '';
          this.name = 'UnsubscriptionError';
          this.errors = errors;
      };
  });

  function arrRemove(arr, item) {
      if (arr) {
          var index = arr.indexOf(item);
          0 <= index && arr.splice(index, 1);
      }
  }

  var Subscription = (function () {
      function Subscription(initialTeardown) {
          this.initialTeardown = initialTeardown;
          this.closed = false;
          this._parentage = null;
          this._finalizers = null;
      }
      Subscription.prototype.unsubscribe = function () {
          var e_1, _a, e_2, _b;
          var errors;
          if (!this.closed) {
              this.closed = true;
              var _parentage = this._parentage;
              if (_parentage) {
                  this._parentage = null;
                  if (Array.isArray(_parentage)) {
                      try {
                          for (var _parentage_1 = __values(_parentage), _parentage_1_1 = _parentage_1.next(); !_parentage_1_1.done; _parentage_1_1 = _parentage_1.next()) {
                              var parent_1 = _parentage_1_1.value;
                              parent_1.remove(this);
                          }
                      }
                      catch (e_1_1) { e_1 = { error: e_1_1 }; }
                      finally {
                          try {
                              if (_parentage_1_1 && !_parentage_1_1.done && (_a = _parentage_1.return)) _a.call(_parentage_1);
                          }
                          finally { if (e_1) throw e_1.error; }
                      }
                  }
                  else {
                      _parentage.remove(this);
                  }
              }
              var initialFinalizer = this.initialTeardown;
              if (isFunction(initialFinalizer)) {
                  try {
                      initialFinalizer();
                  }
                  catch (e) {
                      errors = e instanceof UnsubscriptionError ? e.errors : [e];
                  }
              }
              var _finalizers = this._finalizers;
              if (_finalizers) {
                  this._finalizers = null;
                  try {
                      for (var _finalizers_1 = __values(_finalizers), _finalizers_1_1 = _finalizers_1.next(); !_finalizers_1_1.done; _finalizers_1_1 = _finalizers_1.next()) {
                          var finalizer = _finalizers_1_1.value;
                          try {
                              execFinalizer(finalizer);
                          }
                          catch (err) {
                              errors = errors !== null && errors !== void 0 ? errors : [];
                              if (err instanceof UnsubscriptionError) {
                                  errors = __spreadArray(__spreadArray([], __read(errors)), __read(err.errors));
                              }
                              else {
                                  errors.push(err);
                              }
                          }
                      }
                  }
                  catch (e_2_1) { e_2 = { error: e_2_1 }; }
                  finally {
                      try {
                          if (_finalizers_1_1 && !_finalizers_1_1.done && (_b = _finalizers_1.return)) _b.call(_finalizers_1);
                      }
                      finally { if (e_2) throw e_2.error; }
                  }
              }
              if (errors) {
                  throw new UnsubscriptionError(errors);
              }
          }
      };
      Subscription.prototype.add = function (teardown) {
          var _a;
          if (teardown && teardown !== this) {
              if (this.closed) {
                  execFinalizer(teardown);
              }
              else {
                  if (teardown instanceof Subscription) {
                      if (teardown.closed || teardown._hasParent(this)) {
                          return;
                      }
                      teardown._addParent(this);
                  }
                  (this._finalizers = (_a = this._finalizers) !== null && _a !== undefined ? _a : []).push(teardown);
              }
          }
      };
      Subscription.prototype._hasParent = function (parent) {
          var _parentage = this._parentage;
          return _parentage === parent || (Array.isArray(_parentage) && _parentage.includes(parent));
      };
      Subscription.prototype._addParent = function (parent) {
          var _parentage = this._parentage;
          this._parentage = Array.isArray(_parentage) ? (_parentage.push(parent), _parentage) : _parentage ? [_parentage, parent] : parent;
      };
      Subscription.prototype._removeParent = function (parent) {
          var _parentage = this._parentage;
          if (_parentage === parent) {
              this._parentage = null;
          }
          else if (Array.isArray(_parentage)) {
              arrRemove(_parentage, parent);
          }
      };
      Subscription.prototype.remove = function (teardown) {
          var _finalizers = this._finalizers;
          _finalizers && arrRemove(_finalizers, teardown);
          if (teardown instanceof Subscription) {
              teardown._removeParent(this);
          }
      };
      Subscription.EMPTY = (function () {
          var empty = new Subscription();
          empty.closed = true;
          return empty;
      })();
      return Subscription;
  }());
  var EMPTY_SUBSCRIPTION = Subscription.EMPTY;
  function isSubscription(value) {
      return (value instanceof Subscription ||
          (value && 'closed' in value && isFunction(value.remove) && isFunction(value.add) && isFunction(value.unsubscribe)));
  }
  function execFinalizer(finalizer) {
      if (isFunction(finalizer)) {
          finalizer();
      }
      else {
          finalizer.unsubscribe();
      }
  }

  var config = {
      onUnhandledError: null,
      onStoppedNotification: null,
      Promise: undefined,
      useDeprecatedSynchronousErrorHandling: false,
      useDeprecatedNextContext: false,
  };

  var timeoutProvider = {
      setTimeout: function (handler, timeout) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
              args[_i - 2] = arguments[_i];
          }
          return setTimeout.apply(undefined, __spreadArray([handler, timeout], __read(args)));
      },
      clearTimeout: function (handle) {
          var delegate = timeoutProvider.delegate;
          return ((delegate === null || delegate === undefined ? undefined : delegate.clearTimeout) || clearTimeout)(handle);
      },
      delegate: undefined,
  };

  function reportUnhandledError(err) {
      timeoutProvider.setTimeout(function () {
          {
              throw err;
          }
      });
  }

  function noop() { }

  function errorContext(cb) {
      {
          cb();
      }
  }

  var Subscriber = (function (_super) {
      __extends(Subscriber, _super);
      function Subscriber(destination) {
          var _this = _super.call(this) || this;
          _this.isStopped = false;
          if (destination) {
              _this.destination = destination;
              if (isSubscription(destination)) {
                  destination.add(_this);
              }
          }
          else {
              _this.destination = EMPTY_OBSERVER;
          }
          return _this;
      }
      Subscriber.create = function (next, error, complete) {
          return new SafeSubscriber(next, error, complete);
      };
      Subscriber.prototype.next = function (value) {
          if (this.isStopped) ;
          else {
              this._next(value);
          }
      };
      Subscriber.prototype.error = function (err) {
          if (this.isStopped) ;
          else {
              this.isStopped = true;
              this._error(err);
          }
      };
      Subscriber.prototype.complete = function () {
          if (this.isStopped) ;
          else {
              this.isStopped = true;
              this._complete();
          }
      };
      Subscriber.prototype.unsubscribe = function () {
          if (!this.closed) {
              this.isStopped = true;
              _super.prototype.unsubscribe.call(this);
              this.destination = null;
          }
      };
      Subscriber.prototype._next = function (value) {
          this.destination.next(value);
      };
      Subscriber.prototype._error = function (err) {
          try {
              this.destination.error(err);
          }
          finally {
              this.unsubscribe();
          }
      };
      Subscriber.prototype._complete = function () {
          try {
              this.destination.complete();
          }
          finally {
              this.unsubscribe();
          }
      };
      return Subscriber;
  }(Subscription));
  var ConsumerObserver = (function () {
      function ConsumerObserver(partialObserver) {
          this.partialObserver = partialObserver;
      }
      ConsumerObserver.prototype.next = function (value) {
          var partialObserver = this.partialObserver;
          if (partialObserver.next) {
              try {
                  partialObserver.next(value);
              }
              catch (error) {
                  handleUnhandledError(error);
              }
          }
      };
      ConsumerObserver.prototype.error = function (err) {
          var partialObserver = this.partialObserver;
          if (partialObserver.error) {
              try {
                  partialObserver.error(err);
              }
              catch (error) {
                  handleUnhandledError(error);
              }
          }
          else {
              handleUnhandledError(err);
          }
      };
      ConsumerObserver.prototype.complete = function () {
          var partialObserver = this.partialObserver;
          if (partialObserver.complete) {
              try {
                  partialObserver.complete();
              }
              catch (error) {
                  handleUnhandledError(error);
              }
          }
      };
      return ConsumerObserver;
  }());
  var SafeSubscriber = (function (_super) {
      __extends(SafeSubscriber, _super);
      function SafeSubscriber(observerOrNext, error, complete) {
          var _this = _super.call(this) || this;
          var partialObserver;
          if (isFunction(observerOrNext) || !observerOrNext) {
              partialObserver = {
                  next: (observerOrNext !== null && observerOrNext !== undefined ? observerOrNext : undefined),
                  error: error !== null && error !== undefined ? error : undefined,
                  complete: complete !== null && complete !== undefined ? complete : undefined,
              };
          }
          else {
              {
                  partialObserver = observerOrNext;
              }
          }
          _this.destination = new ConsumerObserver(partialObserver);
          return _this;
      }
      return SafeSubscriber;
  }(Subscriber));
  function handleUnhandledError(error) {
      {
          reportUnhandledError(error);
      }
  }
  function defaultErrorHandler(err) {
      throw err;
  }
  var EMPTY_OBSERVER = {
      closed: true,
      next: noop,
      error: defaultErrorHandler,
      complete: noop,
  };

  var observable = (function () { return (typeof Symbol === 'function' && Symbol.observable) || '@@observable'; })();

  function identity(x) {
      return x;
  }

  function pipe() {
      var fns = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          fns[_i] = arguments[_i];
      }
      return pipeFromArray(fns);
  }
  function pipeFromArray(fns) {
      if (fns.length === 0) {
          return identity;
      }
      if (fns.length === 1) {
          return fns[0];
      }
      return function piped(input) {
          return fns.reduce(function (prev, fn) { return fn(prev); }, input);
      };
  }

  var Observable = (function () {
      function Observable(subscribe) {
          if (subscribe) {
              this._subscribe = subscribe;
          }
      }
      Observable.prototype.lift = function (operator) {
          var observable = new Observable();
          observable.source = this;
          observable.operator = operator;
          return observable;
      };
      Observable.prototype.subscribe = function (observerOrNext, error, complete) {
          var _this = this;
          var subscriber = isSubscriber(observerOrNext) ? observerOrNext : new SafeSubscriber(observerOrNext, error, complete);
          errorContext(function () {
              var _a = _this, operator = _a.operator, source = _a.source;
              subscriber.add(operator
                  ?
                      operator.call(subscriber, source)
                  : source
                      ?
                          _this._subscribe(subscriber)
                      :
                          _this._trySubscribe(subscriber));
          });
          return subscriber;
      };
      Observable.prototype._trySubscribe = function (sink) {
          try {
              return this._subscribe(sink);
          }
          catch (err) {
              sink.error(err);
          }
      };
      Observable.prototype.forEach = function (next, promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var subscriber = new SafeSubscriber({
                  next: function (value) {
                      try {
                          next(value);
                      }
                      catch (err) {
                          reject(err);
                          subscriber.unsubscribe();
                      }
                  },
                  error: reject,
                  complete: resolve,
              });
              _this.subscribe(subscriber);
          });
      };
      Observable.prototype._subscribe = function (subscriber) {
          var _a;
          return (_a = this.source) === null || _a === undefined ? undefined : _a.subscribe(subscriber);
      };
      Observable.prototype[observable] = function () {
          return this;
      };
      Observable.prototype.pipe = function () {
          var operations = [];
          for (var _i = 0; _i < arguments.length; _i++) {
              operations[_i] = arguments[_i];
          }
          return pipeFromArray(operations)(this);
      };
      Observable.prototype.toPromise = function (promiseCtor) {
          var _this = this;
          promiseCtor = getPromiseCtor(promiseCtor);
          return new promiseCtor(function (resolve, reject) {
              var value;
              _this.subscribe(function (x) { return (value = x); }, function (err) { return reject(err); }, function () { return resolve(value); });
          });
      };
      Observable.create = function (subscribe) {
          return new Observable(subscribe);
      };
      return Observable;
  }());
  function getPromiseCtor(promiseCtor) {
      var _a;
      return (_a = promiseCtor !== null && promiseCtor !== undefined ? promiseCtor : config.Promise) !== null && _a !== undefined ? _a : Promise;
  }
  function isObserver(value) {
      return value && isFunction(value.next) && isFunction(value.error) && isFunction(value.complete);
  }
  function isSubscriber(value) {
      return (value && value instanceof Subscriber) || (isObserver(value) && isSubscription(value));
  }

  function hasLift(source) {
      return isFunction(source === null || source === undefined ? undefined : source.lift);
  }
  function operate(init) {
      return function (source) {
          if (hasLift(source)) {
              return source.lift(function (liftedSource) {
                  try {
                      return init(liftedSource, this);
                  }
                  catch (err) {
                      this.error(err);
                  }
              });
          }
          throw new TypeError('Unable to lift unknown Observable type');
      };
  }

  function createOperatorSubscriber(destination, onNext, onComplete, onError, onFinalize) {
      return new OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize);
  }
  var OperatorSubscriber = (function (_super) {
      __extends(OperatorSubscriber, _super);
      function OperatorSubscriber(destination, onNext, onComplete, onError, onFinalize, shouldUnsubscribe) {
          var _this = _super.call(this, destination) || this;
          _this.onFinalize = onFinalize;
          _this.shouldUnsubscribe = shouldUnsubscribe;
          _this._next = onNext
              ? function (value) {
                  try {
                      onNext(value);
                  }
                  catch (err) {
                      destination.error(err);
                  }
              }
              : _super.prototype._next;
          _this._error = onError
              ? function (err) {
                  try {
                      onError(err);
                  }
                  catch (err) {
                      destination.error(err);
                  }
                  finally {
                      this.unsubscribe();
                  }
              }
              : _super.prototype._error;
          _this._complete = onComplete
              ? function () {
                  try {
                      onComplete();
                  }
                  catch (err) {
                      destination.error(err);
                  }
                  finally {
                      this.unsubscribe();
                  }
              }
              : _super.prototype._complete;
          return _this;
      }
      OperatorSubscriber.prototype.unsubscribe = function () {
          var _a;
          if (!this.shouldUnsubscribe || this.shouldUnsubscribe()) {
              var closed_1 = this.closed;
              _super.prototype.unsubscribe.call(this);
              !closed_1 && ((_a = this.onFinalize) === null || _a === undefined ? undefined : _a.call(this));
          }
      };
      return OperatorSubscriber;
  }(Subscriber));

  var ObjectUnsubscribedError = createErrorClass(function (_super) {
      return function ObjectUnsubscribedErrorImpl() {
          _super(this);
          this.name = 'ObjectUnsubscribedError';
          this.message = 'object unsubscribed';
      };
  });

  var Subject = (function (_super) {
      __extends(Subject, _super);
      function Subject() {
          var _this = _super.call(this) || this;
          _this.closed = false;
          _this.currentObservers = null;
          _this.observers = [];
          _this.isStopped = false;
          _this.hasError = false;
          _this.thrownError = null;
          return _this;
      }
      Subject.prototype.lift = function (operator) {
          var subject = new AnonymousSubject(this, this);
          subject.operator = operator;
          return subject;
      };
      Subject.prototype._throwIfClosed = function () {
          if (this.closed) {
              throw new ObjectUnsubscribedError();
          }
      };
      Subject.prototype.next = function (value) {
          var _this = this;
          errorContext(function () {
              var e_1, _a;
              _this._throwIfClosed();
              if (!_this.isStopped) {
                  if (!_this.currentObservers) {
                      _this.currentObservers = Array.from(_this.observers);
                  }
                  try {
                      for (var _b = __values(_this.currentObservers), _c = _b.next(); !_c.done; _c = _b.next()) {
                          var observer = _c.value;
                          observer.next(value);
                      }
                  }
                  catch (e_1_1) { e_1 = { error: e_1_1 }; }
                  finally {
                      try {
                          if (_c && !_c.done && (_a = _b.return)) _a.call(_b);
                      }
                      finally { if (e_1) throw e_1.error; }
                  }
              }
          });
      };
      Subject.prototype.error = function (err) {
          var _this = this;
          errorContext(function () {
              _this._throwIfClosed();
              if (!_this.isStopped) {
                  _this.hasError = _this.isStopped = true;
                  _this.thrownError = err;
                  var observers = _this.observers;
                  while (observers.length) {
                      observers.shift().error(err);
                  }
              }
          });
      };
      Subject.prototype.complete = function () {
          var _this = this;
          errorContext(function () {
              _this._throwIfClosed();
              if (!_this.isStopped) {
                  _this.isStopped = true;
                  var observers = _this.observers;
                  while (observers.length) {
                      observers.shift().complete();
                  }
              }
          });
      };
      Subject.prototype.unsubscribe = function () {
          this.isStopped = this.closed = true;
          this.observers = this.currentObservers = null;
      };
      Object.defineProperty(Subject.prototype, "observed", {
          get: function () {
              var _a;
              return ((_a = this.observers) === null || _a === undefined ? undefined : _a.length) > 0;
          },
          enumerable: false,
          configurable: true
      });
      Subject.prototype._trySubscribe = function (subscriber) {
          this._throwIfClosed();
          return _super.prototype._trySubscribe.call(this, subscriber);
      };
      Subject.prototype._subscribe = function (subscriber) {
          this._throwIfClosed();
          this._checkFinalizedStatuses(subscriber);
          return this._innerSubscribe(subscriber);
      };
      Subject.prototype._innerSubscribe = function (subscriber) {
          var _this = this;
          var _a = this, hasError = _a.hasError, isStopped = _a.isStopped, observers = _a.observers;
          if (hasError || isStopped) {
              return EMPTY_SUBSCRIPTION;
          }
          this.currentObservers = null;
          observers.push(subscriber);
          return new Subscription(function () {
              _this.currentObservers = null;
              arrRemove(observers, subscriber);
          });
      };
      Subject.prototype._checkFinalizedStatuses = function (subscriber) {
          var _a = this, hasError = _a.hasError, thrownError = _a.thrownError, isStopped = _a.isStopped;
          if (hasError) {
              subscriber.error(thrownError);
          }
          else if (isStopped) {
              subscriber.complete();
          }
      };
      Subject.prototype.asObservable = function () {
          var observable = new Observable();
          observable.source = this;
          return observable;
      };
      Subject.create = function (destination, source) {
          return new AnonymousSubject(destination, source);
      };
      return Subject;
  }(Observable));
  var AnonymousSubject = (function (_super) {
      __extends(AnonymousSubject, _super);
      function AnonymousSubject(destination, source) {
          var _this = _super.call(this) || this;
          _this.destination = destination;
          _this.source = source;
          return _this;
      }
      AnonymousSubject.prototype.next = function (value) {
          var _a, _b;
          (_b = (_a = this.destination) === null || _a === undefined ? undefined : _a.next) === null || _b === undefined ? undefined : _b.call(_a, value);
      };
      AnonymousSubject.prototype.error = function (err) {
          var _a, _b;
          (_b = (_a = this.destination) === null || _a === undefined ? undefined : _a.error) === null || _b === undefined ? undefined : _b.call(_a, err);
      };
      AnonymousSubject.prototype.complete = function () {
          var _a, _b;
          (_b = (_a = this.destination) === null || _a === undefined ? undefined : _a.complete) === null || _b === undefined ? undefined : _b.call(_a);
      };
      AnonymousSubject.prototype._subscribe = function (subscriber) {
          var _a, _b;
          return (_b = (_a = this.source) === null || _a === undefined ? undefined : _a.subscribe(subscriber)) !== null && _b !== undefined ? _b : EMPTY_SUBSCRIPTION;
      };
      return AnonymousSubject;
  }(Subject));

  var dateTimestampProvider = {
      now: function () {
          return (dateTimestampProvider.delegate || Date).now();
      },
      delegate: undefined,
  };

  var ReplaySubject = (function (_super) {
      __extends(ReplaySubject, _super);
      function ReplaySubject(_bufferSize, _windowTime, _timestampProvider) {
          if (_bufferSize === undefined) { _bufferSize = Infinity; }
          if (_windowTime === undefined) { _windowTime = Infinity; }
          if (_timestampProvider === undefined) { _timestampProvider = dateTimestampProvider; }
          var _this = _super.call(this) || this;
          _this._bufferSize = _bufferSize;
          _this._windowTime = _windowTime;
          _this._timestampProvider = _timestampProvider;
          _this._buffer = [];
          _this._infiniteTimeWindow = true;
          _this._infiniteTimeWindow = _windowTime === Infinity;
          _this._bufferSize = Math.max(1, _bufferSize);
          _this._windowTime = Math.max(1, _windowTime);
          return _this;
      }
      ReplaySubject.prototype.next = function (value) {
          var _a = this, isStopped = _a.isStopped, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow, _timestampProvider = _a._timestampProvider, _windowTime = _a._windowTime;
          if (!isStopped) {
              _buffer.push(value);
              !_infiniteTimeWindow && _buffer.push(_timestampProvider.now() + _windowTime);
          }
          this._trimBuffer();
          _super.prototype.next.call(this, value);
      };
      ReplaySubject.prototype._subscribe = function (subscriber) {
          this._throwIfClosed();
          this._trimBuffer();
          var subscription = this._innerSubscribe(subscriber);
          var _a = this, _infiniteTimeWindow = _a._infiniteTimeWindow, _buffer = _a._buffer;
          var copy = _buffer.slice();
          for (var i = 0; i < copy.length && !subscriber.closed; i += _infiniteTimeWindow ? 1 : 2) {
              subscriber.next(copy[i]);
          }
          this._checkFinalizedStatuses(subscriber);
          return subscription;
      };
      ReplaySubject.prototype._trimBuffer = function () {
          var _a = this, _bufferSize = _a._bufferSize, _timestampProvider = _a._timestampProvider, _buffer = _a._buffer, _infiniteTimeWindow = _a._infiniteTimeWindow;
          var adjustedBufferSize = (_infiniteTimeWindow ? 1 : 2) * _bufferSize;
          _bufferSize < Infinity && adjustedBufferSize < _buffer.length && _buffer.splice(0, _buffer.length - adjustedBufferSize);
          if (!_infiniteTimeWindow) {
              var now = _timestampProvider.now();
              var last = 0;
              for (var i = 1; i < _buffer.length && _buffer[i] <= now; i += 2) {
                  last = i;
              }
              last && _buffer.splice(0, last + 1);
          }
      };
      return ReplaySubject;
  }(Subject));

  var Action = (function (_super) {
      __extends(Action, _super);
      function Action(scheduler, work) {
          return _super.call(this) || this;
      }
      Action.prototype.schedule = function (state, delay) {
          return this;
      };
      return Action;
  }(Subscription));

  var intervalProvider = {
      setInterval: function (handler, timeout) {
          var args = [];
          for (var _i = 2; _i < arguments.length; _i++) {
              args[_i - 2] = arguments[_i];
          }
          return setInterval.apply(undefined, __spreadArray([handler, timeout], __read(args)));
      },
      clearInterval: function (handle) {
          return (clearInterval)(handle);
      },
      delegate: undefined,
  };

  var AsyncAction = (function (_super) {
      __extends(AsyncAction, _super);
      function AsyncAction(scheduler, work) {
          var _this = _super.call(this, scheduler, work) || this;
          _this.scheduler = scheduler;
          _this.work = work;
          _this.pending = false;
          return _this;
      }
      AsyncAction.prototype.schedule = function (state, delay) {
          var _a;
          if (delay === undefined) { delay = 0; }
          if (this.closed) {
              return this;
          }
          this.state = state;
          var id = this.id;
          var scheduler = this.scheduler;
          if (id != null) {
              this.id = this.recycleAsyncId(scheduler, id, delay);
          }
          this.pending = true;
          this.delay = delay;
          this.id = (_a = this.id) !== null && _a !== undefined ? _a : this.requestAsyncId(scheduler, this.id, delay);
          return this;
      };
      AsyncAction.prototype.requestAsyncId = function (scheduler, _id, delay) {
          if (delay === undefined) { delay = 0; }
          return intervalProvider.setInterval(scheduler.flush.bind(scheduler, this), delay);
      };
      AsyncAction.prototype.recycleAsyncId = function (_scheduler, id, delay) {
          if (delay === undefined) { delay = 0; }
          if (delay != null && this.delay === delay && this.pending === false) {
              return id;
          }
          if (id != null) {
              intervalProvider.clearInterval(id);
          }
          return undefined;
      };
      AsyncAction.prototype.execute = function (state, delay) {
          if (this.closed) {
              return new Error('executing a cancelled action');
          }
          this.pending = false;
          var error = this._execute(state, delay);
          if (error) {
              return error;
          }
          else if (this.pending === false && this.id != null) {
              this.id = this.recycleAsyncId(this.scheduler, this.id, null);
          }
      };
      AsyncAction.prototype._execute = function (state, _delay) {
          var errored = false;
          var errorValue;
          try {
              this.work(state);
          }
          catch (e) {
              errored = true;
              errorValue = e ? e : new Error('Scheduled action threw falsy error');
          }
          if (errored) {
              this.unsubscribe();
              return errorValue;
          }
      };
      AsyncAction.prototype.unsubscribe = function () {
          if (!this.closed) {
              var _a = this, id = _a.id, scheduler = _a.scheduler;
              var actions = scheduler.actions;
              this.work = this.state = this.scheduler = null;
              this.pending = false;
              arrRemove(actions, this);
              if (id != null) {
                  this.id = this.recycleAsyncId(scheduler, id, null);
              }
              this.delay = null;
              _super.prototype.unsubscribe.call(this);
          }
      };
      return AsyncAction;
  }(Action));

  var Scheduler = (function () {
      function Scheduler(schedulerActionCtor, now) {
          if (now === undefined) { now = Scheduler.now; }
          this.schedulerActionCtor = schedulerActionCtor;
          this.now = now;
      }
      Scheduler.prototype.schedule = function (work, delay, state) {
          if (delay === undefined) { delay = 0; }
          return new this.schedulerActionCtor(this, work).schedule(state, delay);
      };
      Scheduler.now = dateTimestampProvider.now;
      return Scheduler;
  }());

  var AsyncScheduler = (function (_super) {
      __extends(AsyncScheduler, _super);
      function AsyncScheduler(SchedulerAction, now) {
          if (now === undefined) { now = Scheduler.now; }
          var _this = _super.call(this, SchedulerAction, now) || this;
          _this.actions = [];
          _this._active = false;
          return _this;
      }
      AsyncScheduler.prototype.flush = function (action) {
          var actions = this.actions;
          if (this._active) {
              actions.push(action);
              return;
          }
          var error;
          this._active = true;
          do {
              if ((error = action.execute(action.state, action.delay))) {
                  break;
              }
          } while ((action = actions.shift()));
          this._active = false;
          if (error) {
              while ((action = actions.shift())) {
                  action.unsubscribe();
              }
              throw error;
          }
      };
      return AsyncScheduler;
  }(Scheduler));

  var asyncScheduler = new AsyncScheduler(AsyncAction);
  var async = asyncScheduler;

  var EMPTY = new Observable(function (subscriber) { return subscriber.complete(); });

  function isScheduler(value) {
      return value && isFunction(value.schedule);
  }

  function last(arr) {
      return arr[arr.length - 1];
  }
  function popResultSelector(args) {
      return isFunction(last(args)) ? args.pop() : undefined;
  }
  function popScheduler(args) {
      return isScheduler(last(args)) ? args.pop() : undefined;
  }

  var isArrayLike = (function (x) { return x && typeof x.length === 'number' && typeof x !== 'function'; });

  function isPromise(value) {
      return isFunction(value === null || value === undefined ? undefined : value.then);
  }

  function isInteropObservable(input) {
      return isFunction(input[observable]);
  }

  function isAsyncIterable(obj) {
      return Symbol.asyncIterator && isFunction(obj === null || obj === undefined ? undefined : obj[Symbol.asyncIterator]);
  }

  function createInvalidObservableTypeError(input) {
      return new TypeError("You provided " + (input !== null && typeof input === 'object' ? 'an invalid object' : "'" + input + "'") + " where a stream was expected. You can provide an Observable, Promise, ReadableStream, Array, AsyncIterable, or Iterable.");
  }

  function getSymbolIterator() {
      if (typeof Symbol !== 'function' || !Symbol.iterator) {
          return '@@iterator';
      }
      return Symbol.iterator;
  }
  var iterator = getSymbolIterator();

  function isIterable(input) {
      return isFunction(input === null || input === undefined ? undefined : input[iterator]);
  }

  function readableStreamLikeToAsyncGenerator(readableStream) {
      return __asyncGenerator(this, arguments, function readableStreamLikeToAsyncGenerator_1() {
          var reader, _a, value, done;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      reader = readableStream.getReader();
                      _b.label = 1;
                  case 1:
                      _b.trys.push([1, , 9, 10]);
                      _b.label = 2;
                  case 2:
                      return [4, __await(reader.read())];
                  case 3:
                      _a = _b.sent(), value = _a.value, done = _a.done;
                      if (!done) return [3, 5];
                      return [4, __await(undefined)];
                  case 4: return [2, _b.sent()];
                  case 5: return [4, __await(value)];
                  case 6: return [4, _b.sent()];
                  case 7:
                      _b.sent();
                      return [3, 2];
                  case 8: return [3, 10];
                  case 9:
                      reader.releaseLock();
                      return [7];
                  case 10: return [2];
              }
          });
      });
  }
  function isReadableStreamLike(obj) {
      return isFunction(obj === null || obj === undefined ? undefined : obj.getReader);
  }

  function innerFrom(input) {
      if (input instanceof Observable) {
          return input;
      }
      if (input != null) {
          if (isInteropObservable(input)) {
              return fromInteropObservable(input);
          }
          if (isArrayLike(input)) {
              return fromArrayLike(input);
          }
          if (isPromise(input)) {
              return fromPromise(input);
          }
          if (isAsyncIterable(input)) {
              return fromAsyncIterable(input);
          }
          if (isIterable(input)) {
              return fromIterable(input);
          }
          if (isReadableStreamLike(input)) {
              return fromReadableStreamLike(input);
          }
      }
      throw createInvalidObservableTypeError(input);
  }
  function fromInteropObservable(obj) {
      return new Observable(function (subscriber) {
          var obs = obj[observable]();
          if (isFunction(obs.subscribe)) {
              return obs.subscribe(subscriber);
          }
          throw new TypeError('Provided object does not correctly implement Symbol.observable');
      });
  }
  function fromArrayLike(array) {
      return new Observable(function (subscriber) {
          for (var i = 0; i < array.length && !subscriber.closed; i++) {
              subscriber.next(array[i]);
          }
          subscriber.complete();
      });
  }
  function fromPromise(promise) {
      return new Observable(function (subscriber) {
          promise
              .then(function (value) {
              if (!subscriber.closed) {
                  subscriber.next(value);
                  subscriber.complete();
              }
          }, function (err) { return subscriber.error(err); })
              .then(null, reportUnhandledError);
      });
  }
  function fromIterable(iterable) {
      return new Observable(function (subscriber) {
          var e_1, _a;
          try {
              for (var iterable_1 = __values(iterable), iterable_1_1 = iterable_1.next(); !iterable_1_1.done; iterable_1_1 = iterable_1.next()) {
                  var value = iterable_1_1.value;
                  subscriber.next(value);
                  if (subscriber.closed) {
                      return;
                  }
              }
          }
          catch (e_1_1) { e_1 = { error: e_1_1 }; }
          finally {
              try {
                  if (iterable_1_1 && !iterable_1_1.done && (_a = iterable_1.return)) _a.call(iterable_1);
              }
              finally { if (e_1) throw e_1.error; }
          }
          subscriber.complete();
      });
  }
  function fromAsyncIterable(asyncIterable) {
      return new Observable(function (subscriber) {
          process$1(asyncIterable, subscriber).catch(function (err) { return subscriber.error(err); });
      });
  }
  function fromReadableStreamLike(readableStream) {
      return fromAsyncIterable(readableStreamLikeToAsyncGenerator(readableStream));
  }
  function process$1(asyncIterable, subscriber) {
      var asyncIterable_1, asyncIterable_1_1;
      var e_2, _a;
      return __awaiter(this, undefined, undefined, function () {
          var value, e_2_1;
          return __generator(this, function (_b) {
              switch (_b.label) {
                  case 0:
                      _b.trys.push([0, 5, 6, 11]);
                      asyncIterable_1 = __asyncValues(asyncIterable);
                      _b.label = 1;
                  case 1: return [4, asyncIterable_1.next()];
                  case 2:
                      if (!(asyncIterable_1_1 = _b.sent(), !asyncIterable_1_1.done)) return [3, 4];
                      value = asyncIterable_1_1.value;
                      subscriber.next(value);
                      if (subscriber.closed) {
                          return [2];
                      }
                      _b.label = 3;
                  case 3: return [3, 1];
                  case 4: return [3, 11];
                  case 5:
                      e_2_1 = _b.sent();
                      e_2 = { error: e_2_1 };
                      return [3, 11];
                  case 6:
                      _b.trys.push([6, , 9, 10]);
                      if (!(asyncIterable_1_1 && !asyncIterable_1_1.done && (_a = asyncIterable_1.return))) return [3, 8];
                      return [4, _a.call(asyncIterable_1)];
                  case 7:
                      _b.sent();
                      _b.label = 8;
                  case 8: return [3, 10];
                  case 9:
                      if (e_2) throw e_2.error;
                      return [7];
                  case 10: return [7];
                  case 11:
                      subscriber.complete();
                      return [2];
              }
          });
      });
  }

  function executeSchedule(parentSubscription, scheduler, work, delay, repeat) {
      if (delay === undefined) { delay = 0; }
      if (repeat === undefined) { repeat = false; }
      var scheduleSubscription = scheduler.schedule(function () {
          work();
          if (repeat) {
              parentSubscription.add(this.schedule(null, delay));
          }
          else {
              this.unsubscribe();
          }
      }, delay);
      parentSubscription.add(scheduleSubscription);
      if (!repeat) {
          return scheduleSubscription;
      }
  }

  function observeOn(scheduler, delay) {
      if (delay === undefined) { delay = 0; }
      return operate(function (source, subscriber) {
          source.subscribe(createOperatorSubscriber(subscriber, function (value) { return executeSchedule(subscriber, scheduler, function () { return subscriber.next(value); }, delay); }, function () { return executeSchedule(subscriber, scheduler, function () { return subscriber.complete(); }, delay); }, function (err) { return executeSchedule(subscriber, scheduler, function () { return subscriber.error(err); }, delay); }));
      });
  }

  function subscribeOn(scheduler, delay) {
      if (delay === undefined) { delay = 0; }
      return operate(function (source, subscriber) {
          subscriber.add(scheduler.schedule(function () { return source.subscribe(subscriber); }, delay));
      });
  }

  function scheduleObservable(input, scheduler) {
      return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
  }

  function schedulePromise(input, scheduler) {
      return innerFrom(input).pipe(subscribeOn(scheduler), observeOn(scheduler));
  }

  function scheduleArray(input, scheduler) {
      return new Observable(function (subscriber) {
          var i = 0;
          return scheduler.schedule(function () {
              if (i === input.length) {
                  subscriber.complete();
              }
              else {
                  subscriber.next(input[i++]);
                  if (!subscriber.closed) {
                      this.schedule();
                  }
              }
          });
      });
  }

  function scheduleIterable(input, scheduler) {
      return new Observable(function (subscriber) {
          var iterator$1;
          executeSchedule(subscriber, scheduler, function () {
              iterator$1 = input[iterator]();
              executeSchedule(subscriber, scheduler, function () {
                  var _a;
                  var value;
                  var done;
                  try {
                      (_a = iterator$1.next(), value = _a.value, done = _a.done);
                  }
                  catch (err) {
                      subscriber.error(err);
                      return;
                  }
                  if (done) {
                      subscriber.complete();
                  }
                  else {
                      subscriber.next(value);
                  }
              }, 0, true);
          });
          return function () { return isFunction(iterator$1 === null || iterator$1 === undefined ? undefined : iterator$1.return) && iterator$1.return(); };
      });
  }

  function scheduleAsyncIterable(input, scheduler) {
      if (!input) {
          throw new Error('Iterable cannot be null');
      }
      return new Observable(function (subscriber) {
          executeSchedule(subscriber, scheduler, function () {
              var iterator = input[Symbol.asyncIterator]();
              executeSchedule(subscriber, scheduler, function () {
                  iterator.next().then(function (result) {
                      if (result.done) {
                          subscriber.complete();
                      }
                      else {
                          subscriber.next(result.value);
                      }
                  });
              }, 0, true);
          });
      });
  }

  function scheduleReadableStreamLike(input, scheduler) {
      return scheduleAsyncIterable(readableStreamLikeToAsyncGenerator(input), scheduler);
  }

  function scheduled(input, scheduler) {
      if (input != null) {
          if (isInteropObservable(input)) {
              return scheduleObservable(input, scheduler);
          }
          if (isArrayLike(input)) {
              return scheduleArray(input, scheduler);
          }
          if (isPromise(input)) {
              return schedulePromise(input, scheduler);
          }
          if (isAsyncIterable(input)) {
              return scheduleAsyncIterable(input, scheduler);
          }
          if (isIterable(input)) {
              return scheduleIterable(input, scheduler);
          }
          if (isReadableStreamLike(input)) {
              return scheduleReadableStreamLike(input, scheduler);
          }
      }
      throw createInvalidObservableTypeError(input);
  }

  function from(input, scheduler) {
      return scheduler ? scheduled(input, scheduler) : innerFrom(input);
  }

  function of() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
      }
      var scheduler = popScheduler(args);
      return from(args, scheduler);
  }

  function throwError(errorOrErrorFactory, scheduler) {
      var errorFactory = isFunction(errorOrErrorFactory) ? errorOrErrorFactory : function () { return errorOrErrorFactory; };
      var init = function (subscriber) { return subscriber.error(errorFactory()); };
      return new Observable(init);
  }

  function isObservable(obj) {
      return !!obj && (obj instanceof Observable || (isFunction(obj.lift) && isFunction(obj.subscribe)));
  }

  var EmptyError = createErrorClass(function (_super) { return function EmptyErrorImpl() {
      _super(this);
      this.name = 'EmptyError';
      this.message = 'no elements in sequence';
  }; });

  function lastValueFrom(source, config) {
      return new Promise(function (resolve, reject) {
          var _hasValue = false;
          var _value;
          source.subscribe({
              next: function (value) {
                  _value = value;
                  _hasValue = true;
              },
              error: reject,
              complete: function () {
                  if (_hasValue) {
                      resolve(_value);
                  }
                  else {
                      reject(new EmptyError());
                  }
              },
          });
      });
  }

  function isValidDate$1(value) {
      return value instanceof Date && !isNaN(value);
  }

  function map(project, thisArg) {
      return operate(function (source, subscriber) {
          var index = 0;
          source.subscribe(createOperatorSubscriber(subscriber, function (value) {
              subscriber.next(project.call(thisArg, value, index++));
          }));
      });
  }

  var isArray$2 = Array.isArray;
  function callOrApply(fn, args) {
      return isArray$2(args) ? fn.apply(undefined, __spreadArray([], __read(args))) : fn(args);
  }
  function mapOneOrManyArgs(fn) {
      return map(function (args) { return callOrApply(fn, args); });
  }

  function combineLatestInit(observables, scheduler, valueTransform) {
      if (valueTransform === undefined) { valueTransform = identity; }
      return function (subscriber) {
          maybeSchedule(scheduler, function () {
              var length = observables.length;
              var values = new Array(length);
              var active = length;
              var remainingFirstValues = length;
              var _loop_1 = function (i) {
                  maybeSchedule(scheduler, function () {
                      var source = from(observables[i], scheduler);
                      var hasFirstValue = false;
                      source.subscribe(createOperatorSubscriber(subscriber, function (value) {
                          values[i] = value;
                          if (!hasFirstValue) {
                              hasFirstValue = true;
                              remainingFirstValues--;
                          }
                          if (!remainingFirstValues) {
                              subscriber.next(valueTransform(values.slice()));
                          }
                      }, function () {
                          if (!--active) {
                              subscriber.complete();
                          }
                      }));
                  }, subscriber);
              };
              for (var i = 0; i < length; i++) {
                  _loop_1(i);
              }
          });
      };
  }
  function maybeSchedule(scheduler, execute, subscription) {
      {
          execute();
      }
  }

  function mergeInternals(source, subscriber, project, concurrent, onBeforeNext, expand, innerSubScheduler, additionalFinalizer) {
      var buffer = [];
      var active = 0;
      var index = 0;
      var isComplete = false;
      var checkComplete = function () {
          if (isComplete && !buffer.length && !active) {
              subscriber.complete();
          }
      };
      var outerNext = function (value) { return (active < concurrent ? doInnerSub(value) : buffer.push(value)); };
      var doInnerSub = function (value) {
          active++;
          var innerComplete = false;
          innerFrom(project(value, index++)).subscribe(createOperatorSubscriber(subscriber, function (innerValue) {
              {
                  subscriber.next(innerValue);
              }
          }, function () {
              innerComplete = true;
          }, undefined, function () {
              if (innerComplete) {
                  try {
                      active--;
                      var _loop_1 = function () {
                          var bufferedValue = buffer.shift();
                          if (innerSubScheduler) ;
                          else {
                              doInnerSub(bufferedValue);
                          }
                      };
                      while (buffer.length && active < concurrent) {
                          _loop_1();
                      }
                      checkComplete();
                  }
                  catch (err) {
                      subscriber.error(err);
                  }
              }
          }));
      };
      source.subscribe(createOperatorSubscriber(subscriber, outerNext, function () {
          isComplete = true;
          checkComplete();
      }));
      return function () {
      };
  }

  function mergeMap(project, resultSelector, concurrent) {
      if (concurrent === undefined) { concurrent = Infinity; }
      if (isFunction(resultSelector)) {
          return mergeMap(function (a, i) { return map(function (b, ii) { return resultSelector(a, b, i, ii); })(innerFrom(project(a, i))); }, concurrent);
      }
      else if (typeof resultSelector === 'number') {
          concurrent = resultSelector;
      }
      return operate(function (source, subscriber) { return mergeInternals(source, subscriber, project, concurrent); });
  }

  function mergeAll(concurrent) {
      return mergeMap(identity, concurrent);
  }

  function concatAll() {
      return mergeAll(1);
  }

  function concat() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
      }
      return concatAll()(from(args, popScheduler(args)));
  }

  function defer(observableFactory) {
      return new Observable(function (subscriber) {
          innerFrom(observableFactory()).subscribe(subscriber);
      });
  }

  function timer(dueTime, intervalOrScheduler, scheduler) {
      if (scheduler === undefined) { scheduler = async; }
      return new Observable(function (subscriber) {
          var due = isValidDate$1(dueTime) ? 1e3 - scheduler.now() : dueTime;
          if (due < 0) {
              due = 0;
          }
          var n = 0;
          return scheduler.schedule(function () {
              if (!subscriber.closed) {
                  subscriber.next(n++);
                  {
                      subscriber.complete();
                  }
              }
          }, due);
      });
  }

  var isArray$1 = Array.isArray;
  function argsOrArgArray(args) {
      return args.length === 1 && isArray$1(args[0]) ? args[0] : args;
  }

  function filter(predicate, thisArg) {
      return operate(function (source, subscriber) {
          var index = 0;
          source.subscribe(createOperatorSubscriber(subscriber, function (value) { return predicate.call(thisArg, value, index++) && subscriber.next(value); }));
      });
  }

  function catchError(selector) {
      return operate(function (source, subscriber) {
          var innerSub = null;
          var syncUnsub = false;
          var handledResult;
          innerSub = source.subscribe(createOperatorSubscriber(subscriber, undefined, undefined, function (err) {
              handledResult = innerFrom(selector(err, catchError(selector)(source)));
              if (innerSub) {
                  innerSub.unsubscribe();
                  innerSub = null;
                  handledResult.subscribe(subscriber);
              }
              else {
                  syncUnsub = true;
              }
          }));
          if (syncUnsub) {
              innerSub.unsubscribe();
              innerSub = null;
              handledResult.subscribe(subscriber);
          }
      });
  }

  function combineLatest() {
      var args = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          args[_i] = arguments[_i];
      }
      var resultSelector = popResultSelector(args);
      return resultSelector
          ? pipe(combineLatest.apply(undefined, __spreadArray([], __read(args))), mapOneOrManyArgs(resultSelector))
          : operate(function (source, subscriber) {
              combineLatestInit(__spreadArray([source], __read(argsOrArgArray(args))))(subscriber);
          });
  }

  function combineLatestWith() {
      var otherSources = [];
      for (var _i = 0; _i < arguments.length; _i++) {
          otherSources[_i] = arguments[_i];
      }
      return combineLatest.apply(undefined, __spreadArray([], __read(otherSources)));
  }

  function share(options) {
      if (options === undefined) { options = {}; }
      var _a = options.connector, connector = _a === undefined ? function () { return new Subject(); } : _a, _b = options.resetOnError, resetOnError = _b === undefined ? true : _b, _c = options.resetOnComplete, resetOnComplete = _c === undefined ? true : _c, _d = options.resetOnRefCountZero, resetOnRefCountZero = _d === undefined ? true : _d;
      return function (wrapperSource) {
          var connection;
          var resetConnection;
          var subject;
          var refCount = 0;
          var hasCompleted = false;
          var hasErrored = false;
          var cancelReset = function () {
              resetConnection === null || resetConnection === undefined ? undefined : resetConnection.unsubscribe();
              resetConnection = undefined;
          };
          var reset = function () {
              cancelReset();
              connection = subject = undefined;
              hasCompleted = hasErrored = false;
          };
          var resetAndUnsubscribe = function () {
              var conn = connection;
              reset();
              conn === null || conn === undefined ? undefined : conn.unsubscribe();
          };
          return operate(function (source, subscriber) {
              refCount++;
              if (!hasErrored && !hasCompleted) {
                  cancelReset();
              }
              var dest = (subject = subject !== null && subject !== void 0 ? subject : connector());
              subscriber.add(function () {
                  refCount--;
                  if (refCount === 0 && !hasErrored && !hasCompleted) {
                      resetConnection = handleReset(resetAndUnsubscribe, resetOnRefCountZero);
                  }
              });
              dest.subscribe(subscriber);
              if (!connection &&
                  refCount > 0) {
                  connection = new SafeSubscriber({
                      next: function (value) { return dest.next(value); },
                      error: function (err) {
                          hasErrored = true;
                          cancelReset();
                          resetConnection = handleReset(reset, resetOnError, err);
                          dest.error(err);
                      },
                      complete: function () {
                          hasCompleted = true;
                          cancelReset();
                          resetConnection = handleReset(reset, resetOnComplete);
                          dest.complete();
                      },
                  });
                  innerFrom(source).subscribe(connection);
              }
          })(wrapperSource);
      };
  }
  function handleReset(reset, on) {
      var args = [];
      for (var _i = 2; _i < arguments.length; _i++) {
          args[_i - 2] = arguments[_i];
      }
      if (on === true) {
          reset();
          return;
      }
      if (on === false) {
          return;
      }
      var onSubscriber = new SafeSubscriber({
          next: function () {
              onSubscriber.unsubscribe();
              reset();
          },
      });
      return innerFrom(on.apply(undefined, __spreadArray([], __read(args)))).subscribe(onSubscriber);
  }

  function shareReplay(configOrBufferSize, windowTime, scheduler) {
      var bufferSize;
      var refCount = false;
      {
          bufferSize = (configOrBufferSize );
      }
      return share({
          connector: function () { return new ReplaySubject(bufferSize, windowTime, scheduler); },
          resetOnError: true,
          resetOnComplete: false,
          resetOnRefCountZero: refCount,
      });
  }

  var s = { 0: 8203, 1: 8204, 2: 8205, 3: 8290, 4: 8291, 5: 8288, 6: 65279, 7: 8289, 8: 119155, 9: 119156, a: 119157, b: 119158, c: 119159, d: 119160, e: 119161, f: 119162 }, c = { 0: 8203, 1: 8204, 2: 8205, 3: 65279 }, u = new Array(4).fill(String.fromCodePoint(c[0])).join("");
  function E(t) {
    let e = JSON.stringify(t);
    return `${u}${Array.from(e).map((r) => {
    let n = r.charCodeAt(0);
    if (n > 255) throw new Error(`Only ASCII edit info can be encoded. Error attempting to encode ${e} on character ${r} (${n})`);
    return Array.from(n.toString(4).padStart(4, "0")).map((o) => String.fromCodePoint(c[o])).join("");
  }).join("")}`;
  }
  function I(t) {
    return !Number.isNaN(Number(t)) || /[a-z]/i.test(t) && !/\d+(?:[-:\/]\d+){2}(?:T\d+(?:[-:\/]\d+){1,2}(\.\d+)?Z?)?/.test(t) ? false : !!Date.parse(t);
  }
  function T(t) {
    try {
      new URL(t, t.startsWith("/") ? "https://acme.com" : void 0);
    } catch {
      return false;
    }
    return true;
  }
  function C(t, e, r = "auto") {
    return r === true || r === "auto" && (I(t) || T(t)) ? t : `${t}${E(e)}`;
  }
  Object.fromEntries(Object.entries(c).map((t) => t.reverse()));
  Object.fromEntries(Object.entries(s).map((t) => t.reverse()));
  var S = `${Object.values(s).map((t) => `\\u{${t.toString(16)}}`).join("")}`, f = new RegExp(`[${S}]{4,}`, "gu");
  function _(t) {
    var e;
    return { cleaned: t.replace(f, ""), encoded: ((e = t.match(f)) == null ? undefined : e[0]) || "" };
  }
  function O(t) {
    return t && JSON.parse(_(JSON.stringify(t)).cleaned);
  }
  function stegaClean(result) {
    return O(result);
  }

  class ClientError extends Error {
    response;
    statusCode = 400;
    responseBody;
    details;
    constructor(res) {
      const props = extractErrorProps(res);
      super(props.message), Object.assign(this, props);
    }
  }
  class ServerError extends Error {
    response;
    statusCode = 500;
    responseBody;
    details;
    constructor(res) {
      const props = extractErrorProps(res);
      super(props.message), Object.assign(this, props);
    }
  }
  function extractErrorProps(res) {
    const body = res.body, props = {
      response: res,
      statusCode: res.statusCode,
      responseBody: stringifyBody(body, res),
      message: "",
      details: undefined
    };
    if (body.error && body.message)
      return props.message = `${body.error} - ${body.message}`, props;
    if (isMutationError(body) || isActionError(body)) {
      const allItems = body.error.items || [], items = allItems.slice(0, 5).map((item) => item.error?.description).filter(Boolean);
      let itemsStr = items.length ? `:
- ${items.join(`
- `)}` : "";
      return allItems.length > 5 && (itemsStr += `
...and ${allItems.length - 5} more`), props.message = `${body.error.description}${itemsStr}`, props.details = body.error, props;
    }
    return body.error && body.error.description ? (props.message = body.error.description, props.details = body.error, props) : (props.message = body.error || body.message || httpErrorMessage(res), props);
  }
  function isMutationError(body) {
    return isPlainObject(body) && isPlainObject(body.error) && body.error.type === "mutationError" && typeof body.error.description == "string";
  }
  function isActionError(body) {
    return isPlainObject(body) && isPlainObject(body.error) && body.error.type === "actionError" && typeof body.error.description == "string";
  }
  function isPlainObject(obj) {
    return typeof obj == "object" && obj !== null && !Array.isArray(obj);
  }
  function httpErrorMessage(res) {
    const statusMessage = res.statusMessage ? ` ${res.statusMessage}` : "";
    return `${res.method}-request to ${res.url} resulted in HTTP ${res.statusCode}${statusMessage}`;
  }
  function stringifyBody(body, res) {
    return (res.headers["content-type"] || "").toLowerCase().indexOf("application/json") !== -1 ? JSON.stringify(body, null, 2) : body;
  }
  class CorsOriginError extends Error {
    projectId;
    addOriginUrl;
    constructor({ projectId: projectId2 }) {
      super("CorsOriginError"), this.name = "CorsOriginError", this.projectId = projectId2;
      const url = new URL(`https://sanity.io/manage/project/${projectId2}/api`);
      if (typeof location < "u") {
        const { origin } = location;
        url.searchParams.set("cors", "add"), url.searchParams.set("origin", origin), this.addOriginUrl = url, this.message = `The current origin is not allowed to connect to the Live Content API. Add it here: ${url}`;
      } else
        this.message = `The current origin is not allowed to connect to the Live Content API. Change your configuration here: ${url}`;
    }
  }
  const httpError = {
    onResponse: (res) => {
      if (res.statusCode >= 500)
        throw new ServerError(res);
      if (res.statusCode >= 400)
        throw new ClientError(res);
      return res;
    }
  };
  function printWarnings() {
    const seen = {};
    return {
      onResponse: (res) => {
        const warn = res.headers["x-sanity-warning"], warnings = Array.isArray(warn) ? warn : [warn];
        for (const msg of warnings)
          !msg || seen[msg] || (seen[msg] = true, console.warn(msg));
        return res;
      }
    };
  }
  function defineHttpRequest(envMiddleware2) {
    return p$1([
      P({ shouldRetry }),
      ...envMiddleware2,
      printWarnings(),
      x(),
      E$1(),
      S$1(),
      httpError,
      A({ implementation: Observable })
    ]);
  }
  function shouldRetry(err, attempt, options) {
    if (options.maxRetries === 0) return false;
    const isSafe = options.method === "GET" || options.method === "HEAD", isQuery = (options.uri || options.url).startsWith("/data/query"), isRetriableResponse = err.response && (err.response.statusCode === 429 || err.response.statusCode === 502 || err.response.statusCode === 503);
    return (isSafe || isQuery) && isRetriableResponse ? true : P.shouldRetry(err, attempt, options);
  }
  const BASE_URL = "https://www.sanity.io/help/";
  function generateHelpUrl(slug) {
    return BASE_URL + slug;
  }
  const VALID_ASSET_TYPES = ["image", "file"], VALID_INSERT_LOCATIONS = ["before", "after", "replace"], dataset = (name) => {
    if (!/^(~[a-z0-9]{1}[-\w]{0,63}|[a-z0-9]{1}[-\w]{0,63})$/.test(name))
      throw new Error(
        "Datasets can only contain lowercase characters, numbers, underscores and dashes, and start with tilde, and be maximum 64 characters"
      );
  }, projectId = (id) => {
    if (!/^[-a-z0-9]+$/i.test(id))
      throw new Error("`projectId` can only contain only a-z, 0-9 and dashes");
  }, validateAssetType = (type) => {
    if (VALID_ASSET_TYPES.indexOf(type) === -1)
      throw new Error(`Invalid asset type: ${type}. Must be one of ${VALID_ASSET_TYPES.join(", ")}`);
  }, validateObject = (op, val) => {
    if (val === null || typeof val != "object" || Array.isArray(val))
      throw new Error(`${op}() takes an object of properties`);
  }, validateDocumentId = (op, id) => {
    if (typeof id != "string" || !/^[a-z0-9_][a-z0-9_.-]{0,127}$/i.test(id) || id.includes(".."))
      throw new Error(`${op}(): "${id}" is not a valid document ID`);
  }, requireDocumentId = (op, doc) => {
    if (!doc._id)
      throw new Error(`${op}() requires that the document contains an ID ("_id" property)`);
    validateDocumentId(op, doc._id);
  }, validateInsert = (at, selector, items) => {
    const signature = "insert(at, selector, items)";
    if (VALID_INSERT_LOCATIONS.indexOf(at) === -1) {
      const valid = VALID_INSERT_LOCATIONS.map((loc) => `"${loc}"`).join(", ");
      throw new Error(`${signature} takes an "at"-argument which is one of: ${valid}`);
    }
    if (typeof selector != "string")
      throw new Error(`${signature} takes a "selector"-argument which must be a string`);
    if (!Array.isArray(items))
      throw new Error(`${signature} takes an "items"-argument which must be an array`);
  }, hasDataset = (config) => {
    if (!config.dataset)
      throw new Error("`dataset` must be provided to perform queries");
    return config.dataset || "";
  }, requestTag = (tag) => {
    if (typeof tag != "string" || !/^[a-z0-9._-]{1,75}$/i.test(tag))
      throw new Error(
        "Tag can only contain alphanumeric characters, underscores, dashes and dots, and be between one and 75 characters long."
      );
    return tag;
  };
  function once(fn) {
    let didCall = false, returnValue;
    return (...args) => (didCall || (returnValue = fn(...args), didCall = true), returnValue);
  }
  const createWarningPrinter = (message) => (
    // eslint-disable-next-line no-console
    once((...args) => console.warn(message.join(" "), ...args))
  ), printCdnAndWithCredentialsWarning = createWarningPrinter([
    "Because you set `withCredentials` to true, we will override your `useCdn`",
    "setting to be false since (cookie-based) credentials are never set on the CDN"
  ]), printCdnWarning = createWarningPrinter([
    "Since you haven't set a value for `useCdn`, we will deliver content using our",
    "global, edge-cached API-CDN. If you wish to have content delivered faster, set",
    "`useCdn: false` to use the Live API. Note: You may incur higher costs using the live API."
  ]), printCdnPreviewDraftsWarning = createWarningPrinter([
    "The Sanity client is configured with the `perspective` set to `previewDrafts`, which doesn't support the API-CDN.",
    "The Live API will be used instead. Set `useCdn: false` in your configuration to hide this warning."
  ]), printBrowserTokenWarning = createWarningPrinter([
    "You have configured Sanity client to use a token in the browser. This may cause unintentional security issues.",
    `See ${generateHelpUrl(
    "js-client-browser-token"
  )} for more information and how to hide this warning.`
  ]), printNoApiVersionSpecifiedWarning = createWarningPrinter([
    "Using the Sanity client without specifying an API version is deprecated.",
    `See ${generateHelpUrl("js-client-api-version")}`
  ]), printNoDefaultExport = createWarningPrinter([
    "The default export of @sanity/client has been deprecated. Use the named export `createClient` instead."
  ]), defaultCdnHost = "apicdn.sanity.io", defaultConfig = {
    apiHost: "https://api.sanity.io",
    apiVersion: "1",
    useProjectHostname: true,
    stega: { enabled: false }
  }, LOCALHOSTS = ["localhost", "127.0.0.1", "0.0.0.0"], isLocal = (host) => LOCALHOSTS.indexOf(host) !== -1;
  function validateApiVersion(apiVersion) {
    if (apiVersion === "1" || apiVersion === "X")
      return;
    const apiDate = new Date(apiVersion);
    if (!(/^\d{4}-\d{2}-\d{2}$/.test(apiVersion) && apiDate instanceof Date && apiDate.getTime() > 0))
      throw new Error("Invalid API version string, expected `1` or date in format `YYYY-MM-DD`");
  }
  function validateApiPerspective(perspective) {
    if (Array.isArray(perspective)) {
      for (const perspectiveValue of perspective)
        if (perspectiveValue !== "published" && perspectiveValue !== "drafts" && !(typeof perspectiveValue == "string" && perspectiveValue.startsWith("r") && perspectiveValue !== "raw"))
          throw new TypeError(
            "Invalid API perspective value, expected `published`, `drafts` or a valid release identifier string"
          );
      return;
    }
    switch (perspective) {
      case "previewDrafts":
      case "drafts":
      case "published":
      case "raw":
        return;
      default:
        throw new TypeError(
          "Invalid API perspective string, expected `published`, `previewDrafts` or `raw`"
        );
    }
  }
  const initConfig = (config, prevConfig) => {
    const specifiedConfig = {
      ...prevConfig,
      ...config,
      stega: {
        ...typeof prevConfig.stega == "boolean" ? { enabled: prevConfig.stega } : prevConfig.stega || defaultConfig.stega,
        ...typeof config.stega == "boolean" ? { enabled: config.stega } : config.stega || {}
      }
    };
    specifiedConfig.apiVersion || printNoApiVersionSpecifiedWarning();
    const newConfig = {
      ...defaultConfig,
      ...specifiedConfig
    }, projectBased = newConfig.useProjectHostname;
    if (typeof Promise > "u") {
      const helpUrl = generateHelpUrl("js-client-promise-polyfill");
      throw new Error(`No native Promise-implementation found, polyfill needed - see ${helpUrl}`);
    }
    if (projectBased && !newConfig.projectId)
      throw new Error("Configuration must contain `projectId`");
    if (typeof newConfig.perspective < "u" && validateApiPerspective(newConfig.perspective), "encodeSourceMap" in newConfig)
      throw new Error(
        "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMap' is not supported in '@sanity/client'. Did you mean 'stega.enabled'?"
      );
    if ("encodeSourceMapAtPath" in newConfig)
      throw new Error(
        "It looks like you're using options meant for '@sanity/preview-kit/client'. 'encodeSourceMapAtPath' is not supported in '@sanity/client'. Did you mean 'stega.filter'?"
      );
    if (typeof newConfig.stega.enabled != "boolean")
      throw new Error(`stega.enabled must be a boolean, received ${newConfig.stega.enabled}`);
    if (newConfig.stega.enabled && newConfig.stega.studioUrl === undefined)
      throw new Error("stega.studioUrl must be defined when stega.enabled is true");
    if (newConfig.stega.enabled && typeof newConfig.stega.studioUrl != "string" && typeof newConfig.stega.studioUrl != "function")
      throw new Error(
        `stega.studioUrl must be a string or a function, received ${newConfig.stega.studioUrl}`
      );
    const isBrowser = typeof window < "u" && window.location && window.location.hostname, isLocalhost = isBrowser && isLocal(window.location.hostname);
    isBrowser && isLocalhost && newConfig.token && newConfig.ignoreBrowserTokenWarning !== true ? printBrowserTokenWarning() : typeof newConfig.useCdn > "u" && printCdnWarning(), projectBased && projectId(newConfig.projectId), newConfig.dataset && dataset(newConfig.dataset), "requestTagPrefix" in newConfig && (newConfig.requestTagPrefix = newConfig.requestTagPrefix ? requestTag(newConfig.requestTagPrefix).replace(/\.+$/, "") : undefined), newConfig.apiVersion = `${newConfig.apiVersion}`.replace(/^v/, ""), newConfig.isDefaultApi = newConfig.apiHost === defaultConfig.apiHost, newConfig.useCdn === true && newConfig.withCredentials && printCdnAndWithCredentialsWarning(), newConfig.useCdn = newConfig.useCdn !== false && !newConfig.withCredentials, validateApiVersion(newConfig.apiVersion);
    const hostParts = newConfig.apiHost.split("://", 2), protocol = hostParts[0], host = hostParts[1], cdnHost = newConfig.isDefaultApi ? defaultCdnHost : host;
    return newConfig.useProjectHostname ? (newConfig.url = `${protocol}://${newConfig.projectId}.${host}/v${newConfig.apiVersion}`, newConfig.cdnUrl = `${protocol}://${newConfig.projectId}.${cdnHost}/v${newConfig.apiVersion}`) : (newConfig.url = `${newConfig.apiHost}/v${newConfig.apiVersion}`, newConfig.cdnUrl = newConfig.url), newConfig;
  };
  class ConnectionFailedError extends Error {
    name = "ConnectionFailedError";
  }
  class DisconnectError extends Error {
    name = "DisconnectError";
    reason;
    constructor(message, reason, options = {}) {
      super(message, options), this.reason = reason;
    }
  }
  class ChannelError extends Error {
    name = "ChannelError";
    data;
    constructor(message, data) {
      super(message), this.data = data;
    }
  }
  class MessageError extends Error {
    name = "MessageError";
    data;
    constructor(message, data, options = {}) {
      super(message, options), this.data = data;
    }
  }
  class MessageParseError extends Error {
    name = "MessageParseError";
  }
  const REQUIRED_EVENTS = ["channelError", "disconnect"];
  function connectEventSource(initEventSource, events) {
    return defer(() => {
      const es = initEventSource();
      return isObservable(es) ? es : of(es);
    }).pipe(mergeMap((es) => connectWithESInstance(es, events)));
  }
  function connectWithESInstance(es, events) {
    return new Observable((observer) => {
      const emitOpen = events.includes("open"), emitReconnect = events.includes("reconnect");
      function onError(evt) {
        if ("data" in evt) {
          const [parseError, event] = parseEvent(evt);
          observer.error(
            parseError ? new MessageParseError("Unable to parse EventSource error message", { cause: event }) : new MessageError((event?.data).message, event)
          );
          return;
        }
        es.readyState === es.CLOSED ? observer.error(new ConnectionFailedError("EventSource connection failed")) : emitReconnect && observer.next({ type: "reconnect" });
      }
      function onOpen() {
        observer.next({ type: "open" });
      }
      function onMessage(message) {
        const [parseError, event] = parseEvent(message);
        if (parseError) {
          observer.error(
            new MessageParseError("Unable to parse EventSource message", { cause: parseError })
          );
          return;
        }
        if (message.type === "channelError") {
          observer.error(new ChannelError(extractErrorMessage(event?.data), event.data));
          return;
        }
        if (message.type === "disconnect") {
          observer.error(
            new DisconnectError(
              `Server disconnected client: ${event.data?.reason || "unknown error"}`
            )
          );
          return;
        }
        observer.next({
          type: message.type,
          id: message.lastEventId,
          ...event.data ? { data: event.data } : {}
        });
      }
      es.addEventListener("error", onError), emitOpen && es.addEventListener("open", onOpen);
      const cleanedEvents = [.../* @__PURE__ */ new Set([...REQUIRED_EVENTS, ...events])].filter((type) => type !== "error" && type !== "open" && type !== "reconnect");
      return cleanedEvents.forEach((type) => es.addEventListener(type, onMessage)), () => {
        es.removeEventListener("error", onError), emitOpen && es.removeEventListener("open", onOpen), cleanedEvents.forEach((type) => es.removeEventListener(type, onMessage)), es.close();
      };
    });
  }
  function parseEvent(message) {
    try {
      const data = typeof message.data == "string" && JSON.parse(message.data);
      return [
        null,
        {
          type: message.type,
          id: message.lastEventId,
          ...isEmptyObject(data) ? {} : { data }
        }
      ];
    } catch (err) {
      return [err, null];
    }
  }
  function extractErrorMessage(err) {
    return err.error ? err.error.description ? err.error.description : typeof err.error == "string" ? err.error : JSON.stringify(err.error, null, 2) : err.message || "Unknown listener error";
  }
  function isEmptyObject(data) {
    for (const _ in data)
      return false;
    return true;
  }
  function getSelection(sel) {
    if (typeof sel == "string")
      return { id: sel };
    if (Array.isArray(sel))
      return { query: "*[_id in $ids]", params: { ids: sel } };
    if (typeof sel == "object" && sel !== null && "query" in sel && typeof sel.query == "string")
      return "params" in sel && typeof sel.params == "object" && sel.params !== null ? { query: sel.query, params: sel.params } : { query: sel.query };
    const selectionOpts = [
      "* Document ID (<docId>)",
      "* Array of document IDs",
      "* Object containing `query`"
    ].join(`
`);
    throw new Error(`Unknown selection - must be one of:

${selectionOpts}`);
  }
  class BasePatch {
    selection;
    operations;
    constructor(selection, operations = {}) {
      this.selection = selection, this.operations = operations;
    }
    /**
     * Sets the given attributes to the document. Does NOT merge objects.
     * The operation is added to the current patch, ready to be commited by `commit()`
     *
     * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
     */
    set(attrs) {
      return this._assign("set", attrs);
    }
    /**
     * Sets the given attributes to the document if they are not currently set. Does NOT merge objects.
     * The operation is added to the current patch, ready to be commited by `commit()`
     *
     * @param attrs - Attributes to set. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "value"\}
     */
    setIfMissing(attrs) {
      return this._assign("setIfMissing", attrs);
    }
    /**
     * Performs a "diff-match-patch" operation on the string attributes provided.
     * The operation is added to the current patch, ready to be commited by `commit()`
     *
     * @param attrs - Attributes to perform operation on. To set a deep attribute, use JSONMatch, eg: \{"nested.prop": "dmp"\}
     */
    diffMatchPatch(attrs) {
      return validateObject("diffMatchPatch", attrs), this._assign("diffMatchPatch", attrs);
    }
    /**
     * Unsets the attribute paths provided.
     * The operation is added to the current patch, ready to be commited by `commit()`
     *
     * @param attrs - Attribute paths to unset.
     */
    unset(attrs) {
      if (!Array.isArray(attrs))
        throw new Error("unset(attrs) takes an array of attributes to unset, non-array given");
      return this.operations = Object.assign({}, this.operations, { unset: attrs }), this;
    }
    /**
     * Increment a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
     *
     * @param attrs - Object of attribute paths to increment, values representing the number to increment by.
     */
    inc(attrs) {
      return this._assign("inc", attrs);
    }
    /**
     * Decrement a numeric value. Each entry in the argument is either an attribute or a JSON path. The value may be a positive or negative integer or floating-point value. The operation will fail if target value is not a numeric value, or doesn't exist.
     *
     * @param attrs - Object of attribute paths to decrement, values representing the number to decrement by.
     */
    dec(attrs) {
      return this._assign("dec", attrs);
    }
    /**
     * Provides methods for modifying arrays, by inserting, appending and replacing elements via a JSONPath expression.
     *
     * @param at - Location to insert at, relative to the given selector, or 'replace' the matched path
     * @param selector - JSONPath expression, eg `comments[-1]` or `blocks[_key=="abc123"]`
     * @param items - Array of items to insert/replace
     */
    insert(at, selector, items) {
      return validateInsert(at, selector, items), this._assign("insert", { [at]: selector, items });
    }
    /**
     * Append the given items to the array at the given JSONPath
     *
     * @param selector - Attribute/path to append to, eg `comments` or `person.hobbies`
     * @param items - Array of items to append to the array
     */
    append(selector, items) {
      return this.insert("after", `${selector}[-1]`, items);
    }
    /**
     * Prepend the given items to the array at the given JSONPath
     *
     * @param selector - Attribute/path to prepend to, eg `comments` or `person.hobbies`
     * @param items - Array of items to prepend to the array
     */
    prepend(selector, items) {
      return this.insert("before", `${selector}[0]`, items);
    }
    /**
     * Change the contents of an array by removing existing elements and/or adding new elements.
     *
     * @param selector - Attribute or JSONPath expression for array
     * @param start - Index at which to start changing the array (with origin 0). If greater than the length of the array, actual starting index will be set to the length of the array. If negative, will begin that many elements from the end of the array (with origin -1) and will be set to 0 if absolute value is greater than the length of the array.x
     * @param deleteCount - An integer indicating the number of old array elements to remove.
     * @param items - The elements to add to the array, beginning at the start index. If you don't specify any elements, splice() will only remove elements from the array.
     */
    splice(selector, start, deleteCount, items) {
      const delAll = typeof deleteCount > "u" || deleteCount === -1, startIndex = start < 0 ? start - 1 : start, delCount = delAll ? -1 : Math.max(0, start + deleteCount), delRange = startIndex < 0 && delCount >= 0 ? "" : delCount, rangeSelector = `${selector}[${startIndex}:${delRange}]`;
      return this.insert("replace", rangeSelector, items || []);
    }
    /**
     * Adds a revision clause, preventing the document from being patched if the `_rev` property does not match the given value
     *
     * @param rev - Revision to lock the patch to
     */
    ifRevisionId(rev) {
      return this.operations.ifRevisionID = rev, this;
    }
    /**
     * Return a plain JSON representation of the patch
     */
    serialize() {
      return { ...getSelection(this.selection), ...this.operations };
    }
    /**
     * Return a plain JSON representation of the patch
     */
    toJSON() {
      return this.serialize();
    }
    /**
     * Clears the patch of all operations
     */
    reset() {
      return this.operations = {}, this;
    }
    _assign(op, props, merge = true) {
      return validateObject(op, props), this.operations = Object.assign({}, this.operations, {
        [op]: Object.assign({}, merge && this.operations[op] || {}, props)
      }), this;
    }
    _set(op, props) {
      return this._assign(op, props, false);
    }
  }
  class ObservablePatch extends BasePatch {
    #client;
    constructor(selection, operations, client) {
      super(selection, operations), this.#client = client;
    }
    /**
     * Clones the patch
     */
    clone() {
      return new ObservablePatch(this.selection, { ...this.operations }, this.#client);
    }
    commit(options) {
      if (!this.#client)
        throw new Error(
          "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
        );
      const returnFirst = typeof this.selection == "string", opts = Object.assign({ returnFirst, returnDocuments: true }, options);
      return this.#client.mutate({ patch: this.serialize() }, opts);
    }
  }
  class Patch extends BasePatch {
    #client;
    constructor(selection, operations, client) {
      super(selection, operations), this.#client = client;
    }
    /**
     * Clones the patch
     */
    clone() {
      return new Patch(this.selection, { ...this.operations }, this.#client);
    }
    commit(options) {
      if (!this.#client)
        throw new Error(
          "No `client` passed to patch, either provide one or pass the patch to a clients `mutate()` method"
        );
      const returnFirst = typeof this.selection == "string", opts = Object.assign({ returnFirst, returnDocuments: true }, options);
      return this.#client.mutate({ patch: this.serialize() }, opts);
    }
  }
  const defaultMutateOptions = { returnDocuments: false };
  class BaseTransaction {
    operations;
    trxId;
    constructor(operations = [], transactionId) {
      this.operations = operations, this.trxId = transactionId;
    }
    /**
     * Creates a new Sanity document. If `_id` is provided and already exists, the mutation will fail. If no `_id` is given, one will automatically be generated by the database.
     * The operation is added to the current transaction, ready to be commited by `commit()`
     *
     * @param doc - Document to create. Requires a `_type` property.
     */
    create(doc) {
      return validateObject("create", doc), this._add({ create: doc });
    }
    /**
     * Creates a new Sanity document. If a document with the same `_id` already exists, the create operation will be ignored.
     * The operation is added to the current transaction, ready to be commited by `commit()`
     *
     * @param doc - Document to create if it does not already exist. Requires `_id` and `_type` properties.
     */
    createIfNotExists(doc) {
      const op = "createIfNotExists";
      return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
    }
    /**
     * Creates a new Sanity document, or replaces an existing one if the same `_id` is already used.
     * The operation is added to the current transaction, ready to be commited by `commit()`
     *
     * @param doc - Document to create or replace. Requires `_id` and `_type` properties.
     */
    createOrReplace(doc) {
      const op = "createOrReplace";
      return validateObject(op, doc), requireDocumentId(op, doc), this._add({ [op]: doc });
    }
    /**
     * Deletes the document with the given document ID
     * The operation is added to the current transaction, ready to be commited by `commit()`
     *
     * @param documentId - Document ID to delete
     */
    delete(documentId) {
      return validateDocumentId("delete", documentId), this._add({ delete: { id: documentId } });
    }
    transactionId(id) {
      return id ? (this.trxId = id, this) : this.trxId;
    }
    /**
     * Return a plain JSON representation of the transaction
     */
    serialize() {
      return [...this.operations];
    }
    /**
     * Return a plain JSON representation of the transaction
     */
    toJSON() {
      return this.serialize();
    }
    /**
     * Clears the transaction of all operations
     */
    reset() {
      return this.operations = [], this;
    }
    _add(mut) {
      return this.operations.push(mut), this;
    }
  }
  class Transaction extends BaseTransaction {
    #client;
    constructor(operations, client, transactionId) {
      super(operations, transactionId), this.#client = client;
    }
    /**
     * Clones the transaction
     */
    clone() {
      return new Transaction([...this.operations], this.#client, this.trxId);
    }
    commit(options) {
      if (!this.#client)
        throw new Error(
          "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
        );
      return this.#client.mutate(
        this.serialize(),
        Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {})
      );
    }
    patch(patchOrDocumentId, patchOps) {
      const isBuilder = typeof patchOps == "function", isPatch = typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof Patch, isMutationSelection = typeof patchOrDocumentId == "object" && ("query" in patchOrDocumentId || "id" in patchOrDocumentId);
      if (isPatch)
        return this._add({ patch: patchOrDocumentId.serialize() });
      if (isBuilder) {
        const patch = patchOps(new Patch(patchOrDocumentId, {}, this.#client));
        if (!(patch instanceof Patch))
          throw new Error("function passed to `patch()` must return the patch");
        return this._add({ patch: patch.serialize() });
      }
      if (isMutationSelection) {
        const patch = new Patch(patchOrDocumentId, patchOps || {}, this.#client);
        return this._add({ patch: patch.serialize() });
      }
      return this._add({ patch: { id: patchOrDocumentId, ...patchOps } });
    }
  }
  class ObservableTransaction extends BaseTransaction {
    #client;
    constructor(operations, client, transactionId) {
      super(operations, transactionId), this.#client = client;
    }
    /**
     * Clones the transaction
     */
    clone() {
      return new ObservableTransaction([...this.operations], this.#client, this.trxId);
    }
    commit(options) {
      if (!this.#client)
        throw new Error(
          "No `client` passed to transaction, either provide one or pass the transaction to a clients `mutate()` method"
        );
      return this.#client.mutate(
        this.serialize(),
        Object.assign({ transactionId: this.trxId }, defaultMutateOptions, options || {})
      );
    }
    patch(patchOrDocumentId, patchOps) {
      const isBuilder = typeof patchOps == "function";
      if (typeof patchOrDocumentId != "string" && patchOrDocumentId instanceof ObservablePatch)
        return this._add({ patch: patchOrDocumentId.serialize() });
      if (isBuilder) {
        const patch = patchOps(new ObservablePatch(patchOrDocumentId, {}, this.#client));
        if (!(patch instanceof ObservablePatch))
          throw new Error("function passed to `patch()` must return the patch");
        return this._add({ patch: patch.serialize() });
      }
      return this._add({ patch: { id: patchOrDocumentId, ...patchOps } });
    }
  }
  const projectHeader = "X-Sanity-Project-ID";
  function requestOptions(config, overrides = {}) {
    const headers = {}, token = overrides.token || config.token;
    token && (headers.Authorization = `Bearer ${token}`), !overrides.useGlobalApi && !config.useProjectHostname && config.projectId && (headers[projectHeader] = config.projectId);
    const withCredentials = !!(typeof overrides.withCredentials > "u" ? config.token || config.withCredentials : overrides.withCredentials), timeout = typeof overrides.timeout > "u" ? config.timeout : overrides.timeout;
    return Object.assign({}, overrides, {
      headers: Object.assign({}, headers, overrides.headers || {}),
      timeout: typeof timeout > "u" ? 5 * 60 * 1e3 : timeout,
      proxy: overrides.proxy || config.proxy,
      json: true,
      withCredentials,
      fetch: typeof overrides.fetch == "object" && typeof config.fetch == "object" ? { ...config.fetch, ...overrides.fetch } : overrides.fetch || config.fetch
    });
  }
  const encodeQueryString = ({
    query,
    params = {},
    options = {}
  }) => {
    const searchParams = new URLSearchParams(), { tag, includeMutations, returnQuery, ...opts } = options;
    tag && searchParams.append("tag", tag), searchParams.append("query", query);
    for (const [key, value] of Object.entries(params))
      searchParams.append(`$${key}`, JSON.stringify(value));
    for (const [key, value] of Object.entries(opts))
      value && searchParams.append(key, `${value}`);
    return returnQuery === false && searchParams.append("returnQuery", "false"), includeMutations === false && searchParams.append("includeMutations", "false"), `?${searchParams}`;
  }, excludeFalsey = (param, defValue) => param === false ? undefined : typeof param > "u" ? defValue : param, getMutationQuery = (options = {}) => ({
    dryRun: options.dryRun,
    returnIds: true,
    returnDocuments: excludeFalsey(options.returnDocuments, true),
    visibility: options.visibility || "sync",
    autoGenerateArrayKeys: options.autoGenerateArrayKeys,
    skipCrossDatasetReferenceValidation: options.skipCrossDatasetReferenceValidation
  }), isResponse = (event) => event.type === "response", getBody = (event) => event.body, indexBy = (docs, attr) => docs.reduce((indexed, doc) => (indexed[attr(doc)] = doc, indexed), /* @__PURE__ */ Object.create(null)), getQuerySizeLimit = 11264;
  function _fetch(client, httpRequest, _stega, query, _params = {}, options = {}) {
    const stega = "stega" in options ? {
      ..._stega || {},
      ...typeof options.stega == "boolean" ? { enabled: options.stega } : options.stega || {}
    } : _stega, params = stega.enabled ? stegaClean(_params) : _params, mapResponse = options.filterResponse === false ? (res) => res : (res) => res.result, { cache, next, ...opts } = {
      // Opt out of setting a `signal` on an internal `fetch` if one isn't provided.
      // This is necessary in React Server Components to avoid opting out of Request Memoization.
      useAbortSignal: typeof options.signal < "u",
      // Set `resultSourceMap' when stega is enabled, as it's required for encoding.
      resultSourceMap: stega.enabled ? "withKeyArraySelector" : options.resultSourceMap,
      ...options,
      // Default to not returning the query, unless `filterResponse` is `false`,
      // or `returnQuery` is explicitly set. `true` is the default in Content Lake, so skip if truthy
      returnQuery: options.filterResponse === false && options.returnQuery !== false
    }, reqOpts = typeof cache < "u" || typeof next < "u" ? { ...opts, fetch: { cache, next } } : opts, $request = _dataRequest(client, httpRequest, "query", { query, params }, reqOpts);
    return stega.enabled ? $request.pipe(
      combineLatestWith(
        from(
          Promise.resolve().then(function () { return stegaEncodeSourceMap$2; }).then(function(n) {
            return n.stegaEncodeSourceMap$1;
          }).then(
            ({ stegaEncodeSourceMap }) => stegaEncodeSourceMap
          )
        )
      ),
      map(
        ([res, stegaEncodeSourceMap]) => {
          const result = stegaEncodeSourceMap(res.result, res.resultSourceMap, stega);
          return mapResponse({ ...res, result });
        }
      )
    ) : $request.pipe(map(mapResponse));
  }
  function _getDocument(client, httpRequest, id, opts = {}) {
    const options = {
      uri: _getDataUrl(client, "doc", id),
      json: true,
      tag: opts.tag,
      signal: opts.signal
    };
    return _requestObservable(client, httpRequest, options).pipe(
      filter(isResponse),
      map((event) => event.body.documents && event.body.documents[0])
    );
  }
  function _getDocuments(client, httpRequest, ids, opts = {}) {
    const options = {
      uri: _getDataUrl(client, "doc", ids.join(",")),
      json: true,
      tag: opts.tag,
      signal: opts.signal
    };
    return _requestObservable(client, httpRequest, options).pipe(
      filter(isResponse),
      map((event) => {
        const indexed = indexBy(event.body.documents || [], (doc) => doc._id);
        return ids.map((id) => indexed[id] || null);
      })
    );
  }
  function _createIfNotExists(client, httpRequest, doc, options) {
    return requireDocumentId("createIfNotExists", doc), _create(client, httpRequest, doc, "createIfNotExists", options);
  }
  function _createOrReplace(client, httpRequest, doc, options) {
    return requireDocumentId("createOrReplace", doc), _create(client, httpRequest, doc, "createOrReplace", options);
  }
  function _delete(client, httpRequest, selection, options) {
    return _dataRequest(
      client,
      httpRequest,
      "mutate",
      { mutations: [{ delete: getSelection(selection) }] },
      options
    );
  }
  function _mutate(client, httpRequest, mutations, options) {
    let mut;
    mutations instanceof Patch || mutations instanceof ObservablePatch ? mut = { patch: mutations.serialize() } : mutations instanceof Transaction || mutations instanceof ObservableTransaction ? mut = mutations.serialize() : mut = mutations;
    const muts = Array.isArray(mut) ? mut : [mut], transactionId = options && options.transactionId || undefined;
    return _dataRequest(client, httpRequest, "mutate", { mutations: muts, transactionId }, options);
  }
  function _action(client, httpRequest, actions, options) {
    const acts = Array.isArray(actions) ? actions : [actions], transactionId = options && options.transactionId || undefined, skipCrossDatasetReferenceValidation = options && options.skipCrossDatasetReferenceValidation || undefined, dryRun = options && options.dryRun || undefined;
    return _dataRequest(
      client,
      httpRequest,
      "actions",
      { actions: acts, transactionId, skipCrossDatasetReferenceValidation, dryRun },
      options
    );
  }
  function _dataRequest(client, httpRequest, endpoint, body, options = {}) {
    const isMutation = endpoint === "mutate", isAction = endpoint === "actions", isQuery = endpoint === "query", strQuery = isMutation || isAction ? "" : encodeQueryString(body), useGet = !isMutation && !isAction && strQuery.length < getQuerySizeLimit, stringQuery = useGet ? strQuery : "", returnFirst = options.returnFirst, { timeout, token, tag, headers, returnQuery, lastLiveEventId, cacheMode } = options, uri = _getDataUrl(client, endpoint, stringQuery), reqOptions = {
      method: useGet ? "GET" : "POST",
      uri,
      json: true,
      body: useGet ? undefined : body,
      query: isMutation && getMutationQuery(options),
      timeout,
      headers,
      token,
      tag,
      returnQuery,
      perspective: options.perspective,
      resultSourceMap: options.resultSourceMap,
      lastLiveEventId: Array.isArray(lastLiveEventId) ? lastLiveEventId[0] : lastLiveEventId,
      cacheMode,
      canUseCdn: isQuery,
      signal: options.signal,
      fetch: options.fetch,
      useAbortSignal: options.useAbortSignal,
      useCdn: options.useCdn
    };
    return _requestObservable(client, httpRequest, reqOptions).pipe(
      filter(isResponse),
      map(getBody),
      map((res) => {
        if (!isMutation)
          return res;
        const results = res.results || [];
        if (options.returnDocuments)
          return returnFirst ? results[0] && results[0].document : results.map((mut) => mut.document);
        const key = returnFirst ? "documentId" : "documentIds", ids = returnFirst ? results[0] && results[0].id : results.map((mut) => mut.id);
        return {
          transactionId: res.transactionId,
          results,
          [key]: ids
        };
      })
    );
  }
  function _create(client, httpRequest, doc, op, options = {}) {
    const mutation = { [op]: doc }, opts = Object.assign({ returnFirst: true, returnDocuments: true }, options);
    return _dataRequest(client, httpRequest, "mutate", { mutations: [mutation] }, opts);
  }
  function _requestObservable(client, httpRequest, options) {
    const uri = options.url || options.uri, config = client.config(), canUseCdn = typeof options.canUseCdn > "u" ? ["GET", "HEAD"].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/") === 0 : options.canUseCdn;
    let useCdn = (options.useCdn ?? config.useCdn) && canUseCdn;
    const tag = options.tag && config.requestTagPrefix ? [config.requestTagPrefix, options.tag].join(".") : options.tag || config.requestTagPrefix;
    if (tag && options.tag !== null && (options.query = { tag: requestTag(tag), ...options.query }), ["GET", "HEAD", "POST"].indexOf(options.method || "GET") >= 0 && uri.indexOf("/data/query/") === 0) {
      const resultSourceMap = options.resultSourceMap ?? config.resultSourceMap;
      resultSourceMap !== undefined && resultSourceMap !== false && (options.query = { resultSourceMap, ...options.query });
      const perspectiveOption = options.perspective || config.perspective;
      typeof perspectiveOption < "u" && (validateApiPerspective(perspectiveOption), options.query = {
        perspective: Array.isArray(perspectiveOption) ? perspectiveOption.join(",") : perspectiveOption,
        ...options.query
      }, perspectiveOption === "previewDrafts" && useCdn && (useCdn = false, printCdnPreviewDraftsWarning())), options.lastLiveEventId && (options.query = { ...options.query, lastLiveEventId: options.lastLiveEventId }), options.returnQuery === false && (options.query = { returnQuery: "false", ...options.query }), useCdn && options.cacheMode == "noStale" && (options.query = { cacheMode: "noStale", ...options.query });
    }
    const reqOptions = requestOptions(
      config,
      Object.assign({}, options, {
        url: _getUrl(client, uri, useCdn)
      })
    ), request = new Observable(
      (subscriber) => httpRequest(reqOptions, config.requester).subscribe(subscriber)
    );
    return options.signal ? request.pipe(_withAbortSignal(options.signal)) : request;
  }
  function _request(client, httpRequest, options) {
    return _requestObservable(client, httpRequest, options).pipe(
      filter((event) => event.type === "response"),
      map((event) => event.body)
    );
  }
  function _getDataUrl(client, operation, path) {
    const config = client.config(), catalog = hasDataset(config), baseUri = `/${operation}/${catalog}`;
    return `/data${path ? `${baseUri}/${path}` : baseUri}`.replace(/\/($|\?)/, "$1");
  }
  function _getUrl(client, uri, canUseCdn = false) {
    const { url, cdnUrl } = client.config();
    return `${canUseCdn ? cdnUrl : url}/${uri.replace(/^\//, "")}`;
  }
  function _withAbortSignal(signal) {
    return (input) => new Observable((observer) => {
      const abort = () => observer.error(_createAbortError(signal));
      if (signal && signal.aborted) {
        abort();
        return;
      }
      const subscription = input.subscribe(observer);
      return signal.addEventListener("abort", abort), () => {
        signal.removeEventListener("abort", abort), subscription.unsubscribe();
      };
    });
  }
  const isDomExceptionSupported = !!globalThis.DOMException;
  function _createAbortError(signal) {
    if (isDomExceptionSupported)
      return new DOMException(signal?.reason ?? "The operation was aborted.", "AbortError");
    const error = new Error(signal?.reason ?? "The operation was aborted.");
    return error.name = "AbortError", error;
  }
  class ObservableAssetsClient {
    #client;
    #httpRequest;
    constructor(client, httpRequest) {
      this.#client = client, this.#httpRequest = httpRequest;
    }
    upload(assetType, body, options) {
      return _upload(this.#client, this.#httpRequest, assetType, body, options);
    }
  }
  class AssetsClient {
    #client;
    #httpRequest;
    constructor(client, httpRequest) {
      this.#client = client, this.#httpRequest = httpRequest;
    }
    upload(assetType, body, options) {
      const observable2 = _upload(this.#client, this.#httpRequest, assetType, body, options);
      return lastValueFrom(
        observable2.pipe(
          filter((event) => event.type === "response"),
          map(
            (event) => event.body.document
          )
        )
      );
    }
  }
  function _upload(client, httpRequest, assetType, body, opts = {}) {
    validateAssetType(assetType);
    let meta = opts.extract || undefined;
    meta && !meta.length && (meta = ["none"]);
    const dataset2 = hasDataset(client.config()), assetEndpoint = assetType === "image" ? "images" : "files", options = optionsFromFile(opts, body), { tag, label, title, description, creditLine, filename, source } = options, query = {
      label,
      title,
      description,
      filename,
      meta,
      creditLine
    };
    return source && (query.sourceId = source.id, query.sourceName = source.name, query.sourceUrl = source.url), _requestObservable(client, httpRequest, {
      tag,
      method: "POST",
      timeout: options.timeout || 0,
      uri: `/assets/${assetEndpoint}/${dataset2}`,
      headers: options.contentType ? { "Content-Type": options.contentType } : {},
      query,
      body
    });
  }
  function optionsFromFile(opts, file) {
    return typeof File > "u" || !(file instanceof File) ? opts : Object.assign(
      {
        filename: opts.preserveFilename === false ? undefined : file.name,
        contentType: file.type
      },
      opts
    );
  }
  var defaults = (obj, defaults2) => Object.keys(defaults2).concat(Object.keys(obj)).reduce((target, prop) => (target[prop] = typeof obj[prop] > "u" ? defaults2[prop] : obj[prop], target), {});
  const pick = (obj, props) => props.reduce((selection, prop) => (typeof obj[prop] > "u" || (selection[prop] = obj[prop]), selection), {}), eventSourcePolyfill = defer(() => Promise.resolve().then(function () { return browser$1; })).pipe(
    map(({ default: EventSource2 }) => EventSource2),
    shareReplay(1)
  );
  function reconnectOnConnectionFailure() {
    return function(source) {
      return source.pipe(
        catchError((err, caught) => err instanceof ConnectionFailedError ? concat(of({ type: "reconnect" }), timer(1e3).pipe(mergeMap(() => caught))) : throwError(() => err))
      );
    };
  }
  const MAX_URL_LENGTH = 14800, possibleOptions = [
    "includePreviousRevision",
    "includeResult",
    "includeMutations",
    "visibility",
    "effectFormat",
    "tag"
  ], defaultOptions = {
    includeResult: true
  };
  function _listen(query, params, opts = {}) {
    const { url, token, withCredentials, requestTagPrefix } = this.config(), tag = opts.tag && requestTagPrefix ? [requestTagPrefix, opts.tag].join(".") : opts.tag, options = { ...defaults(opts, defaultOptions), tag }, listenOpts = pick(options, possibleOptions), qs = encodeQueryString({ query, params, options: { tag, ...listenOpts } }), uri = `${url}${_getDataUrl(this, "listen", qs)}`;
    if (uri.length > MAX_URL_LENGTH)
      return throwError(() => new Error("Query too large for listener"));
    const listenFor = options.events ? options.events : ["mutation"], esOptions = {};
    return (token || withCredentials) && (esOptions.withCredentials = true), token && (esOptions.headers = {
      Authorization: `Bearer ${token}`
    }), connectEventSource(() => (
      // use polyfill if there is no global EventSource or if we need to set headers
      (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : of(EventSource)).pipe(map((EventSource2) => new EventSource2(uri, esOptions)))
    ), listenFor).pipe(
      reconnectOnConnectionFailure(),
      filter((event) => listenFor.includes(event.type)),
      map(
        (event) => ({
          type: event.type,
          ..."data" in event ? event.data : {}
        })
      )
    );
  }
  const requiredApiVersion = "2021-03-26";
  class LiveClient {
    #client;
    constructor(client) {
      this.#client = client;
    }
    /**
     * Requires `apiVersion` to be `2021-03-26` or later.
     */
    events({
      includeDrafts = false,
      tag: _tag
    } = {}) {
      const {
        projectId: projectId2,
        apiVersion: _apiVersion,
        token,
        withCredentials,
        requestTagPrefix
      } = this.#client.config(), apiVersion = _apiVersion.replace(/^v/, "");
      if (apiVersion !== "X" && apiVersion < requiredApiVersion)
        throw new Error(
          `The live events API requires API version ${requiredApiVersion} or later. The current API version is ${apiVersion}. Please update your API version to use this feature.`
        );
      if (includeDrafts && !token && !withCredentials)
        throw new Error(
          "The live events API requires a token or withCredentials when 'includeDrafts: true'. Please update your client configuration. The token should have the lowest possible access role."
        );
      if (includeDrafts && apiVersion !== "X")
        throw new Error(
          "The live events API requires API version X when 'includeDrafts: true'. This API is experimental and may change or even be removed."
        );
      const path = _getDataUrl(this.#client, "live/events"), url = new URL(this.#client.getUrl(path, false)), tag = _tag && requestTagPrefix ? [requestTagPrefix, _tag].join(".") : _tag;
      tag && url.searchParams.set("tag", tag), includeDrafts && url.searchParams.set("includeDrafts", "true");
      const esOptions = {};
      includeDrafts && token && (esOptions.headers = {
        Authorization: `Bearer ${token}`
      }), includeDrafts && withCredentials && (esOptions.withCredentials = true);
      const events = connectEventSource(() => (
        // use polyfill if there is no global EventSource or if we need to set headers
        (typeof EventSource > "u" || esOptions.headers ? eventSourcePolyfill : of(EventSource)).pipe(map((EventSource2) => new EventSource2(url.href, esOptions)))
      ), [
        "message",
        "restart",
        "welcome",
        "reconnect"
      ]).pipe(
        reconnectOnConnectionFailure(),
        map((event) => {
          if (event.type === "message") {
            const { data, ...rest } = event;
            return { ...rest, tags: data.tags };
          }
          return event;
        })
      ), checkCors = fetchObservable(url, {
        method: "OPTIONS",
        mode: "cors",
        credentials: esOptions.withCredentials ? "include" : "omit",
        headers: esOptions.headers
      }).pipe(
        mergeMap(() => EMPTY),
        catchError(() => {
          throw new CorsOriginError({ projectId: projectId2 });
        })
      );
      return concat(checkCors, events);
    }
  }
  function fetchObservable(url, init) {
    return new Observable((observer) => {
      const controller = new AbortController(), signal = controller.signal;
      return fetch(url, { ...init, signal: controller.signal }).then(
        (response) => {
          observer.next(response), observer.complete();
        },
        (err) => {
          signal.aborted || observer.error(err);
        }
      ), () => controller.abort();
    });
  }
  class ObservableDatasetsClient {
    #client;
    #httpRequest;
    constructor(client, httpRequest) {
      this.#client = client, this.#httpRequest = httpRequest;
    }
    /**
     * Create a new dataset with the given name
     *
     * @param name - Name of the dataset to create
     * @param options - Options for the dataset
     */
    create(name, options) {
      return _modify(this.#client, this.#httpRequest, "PUT", name, options);
    }
    /**
     * Edit a dataset with the given name
     *
     * @param name - Name of the dataset to edit
     * @param options - New options for the dataset
     */
    edit(name, options) {
      return _modify(this.#client, this.#httpRequest, "PATCH", name, options);
    }
    /**
     * Delete a dataset with the given name
     *
     * @param name - Name of the dataset to delete
     */
    delete(name) {
      return _modify(this.#client, this.#httpRequest, "DELETE", name);
    }
    /**
     * Fetch a list of datasets for the configured project
     */
    list() {
      return _request(this.#client, this.#httpRequest, {
        uri: "/datasets",
        tag: null
      });
    }
  }
  class DatasetsClient {
    #client;
    #httpRequest;
    constructor(client, httpRequest) {
      this.#client = client, this.#httpRequest = httpRequest;
    }
    /**
     * Create a new dataset with the given name
     *
     * @param name - Name of the dataset to create
     * @param options - Options for the dataset
     */
    create(name, options) {
      return lastValueFrom(
        _modify(this.#client, this.#httpRequest, "PUT", name, options)
      );
    }
    /**
     * Edit a dataset with the given name
     *
     * @param name - Name of the dataset to edit
     * @param options - New options for the dataset
     */
    edit(name, options) {
      return lastValueFrom(
        _modify(this.#client, this.#httpRequest, "PATCH", name, options)
      );
    }
    /**
     * Delete a dataset with the given name
     *
     * @param name - Name of the dataset to delete
     */
    delete(name) {
      return lastValueFrom(_modify(this.#client, this.#httpRequest, "DELETE", name));
    }
    /**
     * Fetch a list of datasets for the configured project
     */
    list() {
      return lastValueFrom(
        _request(this.#client, this.#httpRequest, { uri: "/datasets", tag: null })
      );
    }
  }
  function _modify(client, httpRequest, method, name, options) {
    return dataset(name), _request(client, httpRequest, {
      method,
      uri: `/datasets/${name}`,
      body: options,
      tag: null
    });
  }
  class ObservableProjectsClient {
    #client;
    #httpRequest;
    constructor(client, httpRequest) {
      this.#client = client, this.#httpRequest = httpRequest;
    }
    list(options) {
      const uri = options?.includeMembers === false ? "/projects?includeMembers=false" : "/projects";
      return _request(this.#client, this.#httpRequest, { uri });
    }
    /**
     * Fetch a project by project ID
     *
     * @param projectId - ID of the project to fetch
     */
    getById(projectId2) {
      return _request(this.#client, this.#httpRequest, { uri: `/projects/${projectId2}` });
    }
  }
  class ProjectsClient {
    #client;
    #httpRequest;
    constructor(client, httpRequest) {
      this.#client = client, this.#httpRequest = httpRequest;
    }
    list(options) {
      const uri = options?.includeMembers === false ? "/projects?includeMembers=false" : "/projects";
      return lastValueFrom(_request(this.#client, this.#httpRequest, { uri }));
    }
    /**
     * Fetch a project by project ID
     *
     * @param projectId - ID of the project to fetch
     */
    getById(projectId2) {
      return lastValueFrom(
        _request(this.#client, this.#httpRequest, { uri: `/projects/${projectId2}` })
      );
    }
  }
  class ObservableUsersClient {
    #client;
    #httpRequest;
    constructor(client, httpRequest) {
      this.#client = client, this.#httpRequest = httpRequest;
    }
    /**
     * Fetch a user by user ID
     *
     * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
     */
    getById(id) {
      return _request(
        this.#client,
        this.#httpRequest,
        { uri: `/users/${id}` }
      );
    }
  }
  class UsersClient {
    #client;
    #httpRequest;
    constructor(client, httpRequest) {
      this.#client = client, this.#httpRequest = httpRequest;
    }
    /**
     * Fetch a user by user ID
     *
     * @param id - User ID of the user to fetch. If `me` is provided, a minimal response including the users role is returned.
     */
    getById(id) {
      return lastValueFrom(
        _request(this.#client, this.#httpRequest, {
          uri: `/users/${id}`
        })
      );
    }
  }
  class ObservableSanityClient {
    assets;
    datasets;
    live;
    projects;
    users;
    /**
     * Private properties
     */
    #clientConfig;
    #httpRequest;
    /**
     * Instance properties
     */
    listen = _listen;
    constructor(httpRequest, config = defaultConfig) {
      this.config(config), this.#httpRequest = httpRequest, this.assets = new ObservableAssetsClient(this, this.#httpRequest), this.datasets = new ObservableDatasetsClient(this, this.#httpRequest), this.live = new LiveClient(this), this.projects = new ObservableProjectsClient(this, this.#httpRequest), this.users = new ObservableUsersClient(this, this.#httpRequest);
    }
    /**
     * Clone the client - returns a new instance
     */
    clone() {
      return new ObservableSanityClient(this.#httpRequest, this.config());
    }
    config(newConfig) {
      if (newConfig === undefined)
        return { ...this.#clientConfig };
      if (this.#clientConfig && this.#clientConfig.allowReconfigure === false)
        throw new Error(
          "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
        );
      return this.#clientConfig = initConfig(newConfig, this.#clientConfig || {}), this;
    }
    /**
     * Clone the client with a new (partial) configuration.
     *
     * @param newConfig - New client configuration properties, shallowly merged with existing configuration
     */
    withConfig(newConfig) {
      const thisConfig = this.config();
      return new ObservableSanityClient(this.#httpRequest, {
        ...thisConfig,
        ...newConfig,
        stega: {
          ...thisConfig.stega || {},
          ...typeof newConfig?.stega == "boolean" ? { enabled: newConfig.stega } : newConfig?.stega || {}
        }
      });
    }
    fetch(query, params, options) {
      return _fetch(
        this,
        this.#httpRequest,
        this.#clientConfig.stega,
        query,
        params,
        options
      );
    }
    /**
     * Fetch a single document with the given ID.
     *
     * @param id - Document ID to fetch
     * @param options - Request options
     */
    getDocument(id, options) {
      return _getDocument(this, this.#httpRequest, id, options);
    }
    /**
     * Fetch multiple documents in one request.
     * Should be used sparingly - performing a query is usually a better option.
     * The order/position of documents is preserved based on the original array of IDs.
     * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
     *
     * @param ids - Document IDs to fetch
     * @param options - Request options
     */
    getDocuments(ids, options) {
      return _getDocuments(this, this.#httpRequest, ids, options);
    }
    create(document, options) {
      return _create(this, this.#httpRequest, document, "create", options);
    }
    createIfNotExists(document, options) {
      return _createIfNotExists(this, this.#httpRequest, document, options);
    }
    createOrReplace(document, options) {
      return _createOrReplace(this, this.#httpRequest, document, options);
    }
    delete(selection, options) {
      return _delete(this, this.#httpRequest, selection, options);
    }
    mutate(operations, options) {
      return _mutate(this, this.#httpRequest, operations, options);
    }
    /**
     * Create a new buildable patch of operations to perform
     *
     * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
     * @param operations - Optional object of patch operations to initialize the patch instance with
     * @returns Patch instance - call `.commit()` to perform the operations defined
     */
    patch(selection, operations) {
      return new ObservablePatch(selection, operations, this);
    }
    /**
     * Create a new transaction of mutations
     *
     * @param operations - Optional array of mutation operations to initialize the transaction instance with
     */
    transaction(operations) {
      return new ObservableTransaction(operations, this);
    }
    /**
     * Perform action operations against the configured dataset
     *
     * @param operations - Action operation(s) to execute
     * @param options - Action options
     */
    action(operations, options) {
      return _action(this, this.#httpRequest, operations, options);
    }
    /**
     * Perform an HTTP request against the Sanity API
     *
     * @param options - Request options
     */
    request(options) {
      return _request(this, this.#httpRequest, options);
    }
    /**
     * Get a Sanity API URL for the URI provided
     *
     * @param uri - URI/path to build URL for
     * @param canUseCdn - Whether or not to allow using the API CDN for this route
     */
    getUrl(uri, canUseCdn) {
      return _getUrl(this, uri, canUseCdn);
    }
    /**
     * Get a Sanity API URL for the data operation and path provided
     *
     * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
     * @param path - Path to append after the operation
     */
    getDataUrl(operation, path) {
      return _getDataUrl(this, operation, path);
    }
  }
  class SanityClient {
    assets;
    datasets;
    live;
    projects;
    users;
    /**
     * Observable version of the Sanity client, with the same configuration as the promise-based one
     */
    observable;
    /**
     * Private properties
     */
    #clientConfig;
    #httpRequest;
    /**
     * Instance properties
     */
    listen = _listen;
    constructor(httpRequest, config = defaultConfig) {
      this.config(config), this.#httpRequest = httpRequest, this.assets = new AssetsClient(this, this.#httpRequest), this.datasets = new DatasetsClient(this, this.#httpRequest), this.live = new LiveClient(this), this.projects = new ProjectsClient(this, this.#httpRequest), this.users = new UsersClient(this, this.#httpRequest), this.observable = new ObservableSanityClient(httpRequest, config);
    }
    /**
     * Clone the client - returns a new instance
     */
    clone() {
      return new SanityClient(this.#httpRequest, this.config());
    }
    config(newConfig) {
      if (newConfig === undefined)
        return { ...this.#clientConfig };
      if (this.#clientConfig && this.#clientConfig.allowReconfigure === false)
        throw new Error(
          "Existing client instance cannot be reconfigured - use `withConfig(newConfig)` to return a new client"
        );
      return this.observable && this.observable.config(newConfig), this.#clientConfig = initConfig(newConfig, this.#clientConfig || {}), this;
    }
    /**
     * Clone the client with a new (partial) configuration.
     *
     * @param newConfig - New client configuration properties, shallowly merged with existing configuration
     */
    withConfig(newConfig) {
      const thisConfig = this.config();
      return new SanityClient(this.#httpRequest, {
        ...thisConfig,
        ...newConfig,
        stega: {
          ...thisConfig.stega || {},
          ...typeof newConfig?.stega == "boolean" ? { enabled: newConfig.stega } : newConfig?.stega || {}
        }
      });
    }
    fetch(query, params, options) {
      return lastValueFrom(
        _fetch(
          this,
          this.#httpRequest,
          this.#clientConfig.stega,
          query,
          params,
          options
        )
      );
    }
    /**
     * Fetch a single document with the given ID.
     *
     * @param id - Document ID to fetch
     * @param options - Request options
     */
    getDocument(id, options) {
      return lastValueFrom(_getDocument(this, this.#httpRequest, id, options));
    }
    /**
     * Fetch multiple documents in one request.
     * Should be used sparingly - performing a query is usually a better option.
     * The order/position of documents is preserved based on the original array of IDs.
     * If any of the documents are missing, they will be replaced by a `null` entry in the returned array
     *
     * @param ids - Document IDs to fetch
     * @param options - Request options
     */
    getDocuments(ids, options) {
      return lastValueFrom(_getDocuments(this, this.#httpRequest, ids, options));
    }
    create(document, options) {
      return lastValueFrom(
        _create(this, this.#httpRequest, document, "create", options)
      );
    }
    createIfNotExists(document, options) {
      return lastValueFrom(
        _createIfNotExists(this, this.#httpRequest, document, options)
      );
    }
    createOrReplace(document, options) {
      return lastValueFrom(
        _createOrReplace(this, this.#httpRequest, document, options)
      );
    }
    delete(selection, options) {
      return lastValueFrom(_delete(this, this.#httpRequest, selection, options));
    }
    mutate(operations, options) {
      return lastValueFrom(_mutate(this, this.#httpRequest, operations, options));
    }
    /**
     * Create a new buildable patch of operations to perform
     *
     * @param selection - Document ID, an array of document IDs, or an object with `query` and optional `params`, defining which document(s) to patch
     * @param operations - Optional object of patch operations to initialize the patch instance with
     * @returns Patch instance - call `.commit()` to perform the operations defined
     */
    patch(documentId, operations) {
      return new Patch(documentId, operations, this);
    }
    /**
     * Create a new transaction of mutations
     *
     * @param operations - Optional array of mutation operations to initialize the transaction instance with
     */
    transaction(operations) {
      return new Transaction(operations, this);
    }
    /**
     * Perform action operations against the configured dataset
     * Returns a promise that resolves to the transaction result
     *
     * @param operations - Action operation(s) to execute
     * @param options - Action options
     */
    action(operations, options) {
      return lastValueFrom(_action(this, this.#httpRequest, operations, options));
    }
    /**
     * Perform a request against the Sanity API
     * NOTE: Only use this for Sanity API endpoints, not for your own APIs!
     *
     * @param options - Request options
     * @returns Promise resolving to the response body
     */
    request(options) {
      return lastValueFrom(_request(this, this.#httpRequest, options));
    }
    /**
     * Perform an HTTP request a `/data` sub-endpoint
     * NOTE: Considered internal, thus marked as deprecated. Use `request` instead.
     *
     * @deprecated - Use `request()` or your own HTTP library instead
     * @param endpoint - Endpoint to hit (mutate, query etc)
     * @param body - Request body
     * @param options - Request options
     * @internal
     */
    dataRequest(endpoint, body, options) {
      return lastValueFrom(_dataRequest(this, this.#httpRequest, endpoint, body, options));
    }
    /**
     * Get a Sanity API URL for the URI provided
     *
     * @param uri - URI/path to build URL for
     * @param canUseCdn - Whether or not to allow using the API CDN for this route
     */
    getUrl(uri, canUseCdn) {
      return _getUrl(this, uri, canUseCdn);
    }
    /**
     * Get a Sanity API URL for the data operation and path provided
     *
     * @param operation - Data operation (eg `query`, `mutate`, `listen` or similar)
     * @param path - Path to append after the operation
     */
    getDataUrl(operation, path) {
      return _getDataUrl(this, operation, path);
    }
  }
  function defineCreateClientExports(envMiddleware2, ClassConstructor) {
    return { requester: defineHttpRequest(envMiddleware2), createClient: (config) => {
      const clientRequester = defineHttpRequest(envMiddleware2);
      return new ClassConstructor(
        (options, requester2) => (requester2 || clientRequester)({
          maxRedirects: 0,
          maxRetries: config.maxRetries,
          retryDelay: config.retryDelay,
          ...options
        }),
        config
      );
    } };
  }
  function defineDeprecatedCreateClient(createClient2) {
    return function(config) {
      return printNoDefaultExport(), createClient2(config);
    };
  }
  var envMiddleware = [];
  const exp = defineCreateClientExports(envMiddleware, SanityClient), requester = exp.requester, createClient = exp.createClient, deprecatedCreateClient = defineDeprecatedCreateClient(createClient);

  const reKeySegment = /_key\s*==\s*['"](.*)['"]/;
  function isKeySegment(segment) {
    return typeof segment == "string" ? reKeySegment.test(segment.trim()) : typeof segment == "object" && "_key" in segment;
  }
  function toString(path) {
    if (!Array.isArray(path))
      throw new Error("Path is not an array");
    return path.reduce((target, segment, i) => {
      const segmentType = typeof segment;
      if (segmentType === "number")
        return `${target}[${segment}]`;
      if (segmentType === "string")
        return `${target}${i === 0 ? "" : "."}${segment}`;
      if (isKeySegment(segment) && segment._key)
        return `${target}[_key=="${segment._key}"]`;
      if (Array.isArray(segment)) {
        const [from, to] = segment;
        return `${target}[${from}:${to}]`;
      }
      throw new Error(`Unsupported path segment \`${JSON.stringify(segment)}\``);
    }, "");
  }
  const ESCAPE = {
    "\f": "\\f",
    "\n": "\\n",
    "\r": "\\r",
    "	": "\\t",
    "'": "\\'",
    "\\": "\\\\"
  }, UNESCAPE = {
    "\\f": "\f",
    "\\n": `
`,
    "\\r": "\r",
    "\\t": "	",
    "\\'": "'",
    "\\\\": "\\"
  };
  function jsonPath(path) {
    return `$${path.map((segment) => typeof segment == "string" ? `['${segment.replace(/[\f\n\r\t'\\]/g, (match) => ESCAPE[match])}']` : typeof segment == "number" ? `[${segment}]` : segment._key !== "" ? `[?(@._key=='${segment._key.replace(/['\\]/g, (match) => ESCAPE[match])}')]` : `[${segment._index}]`).join("")}`;
  }
  function parseJsonPath(path) {
    const parsed = [], parseRe = /\['(.*?)'\]|\[(\d+)\]|\[\?\(@\._key=='(.*?)'\)\]/g;
    let match;
    for (; (match = parseRe.exec(path)) !== null; ) {
      if (match[1] !== undefined) {
        const key = match[1].replace(/\\(\\|f|n|r|t|')/g, (m) => UNESCAPE[m]);
        parsed.push(key);
        continue;
      }
      if (match[2] !== undefined) {
        parsed.push(parseInt(match[2], 10));
        continue;
      }
      if (match[3] !== undefined) {
        const _key = match[3].replace(/\\(\\')/g, (m) => UNESCAPE[m]);
        parsed.push({
          _key,
          _index: -1
        });
        continue;
      }
    }
    return parsed;
  }
  function jsonPathToStudioPath(path) {
    return path.map((segment) => {
      if (typeof segment == "string" || typeof segment == "number")
        return segment;
      if (segment._key !== "")
        return { _key: segment._key };
      if (segment._index !== -1)
        return segment._index;
      throw new Error(`invalid segment:${JSON.stringify(segment)}`);
    });
  }
  function jsonPathToMappingPath(path) {
    return path.map((segment) => {
      if (typeof segment == "string" || typeof segment == "number")
        return segment;
      if (segment._index !== -1)
        return segment._index;
      throw new Error(`invalid segment:${JSON.stringify(segment)}`);
    });
  }
  function resolveMapping(resultPath, csm) {
    if (!csm?.mappings)
      return;
    const resultMappingPath = jsonPath(jsonPathToMappingPath(resultPath));
    if (csm.mappings[resultMappingPath] !== undefined)
      return {
        mapping: csm.mappings[resultMappingPath],
        matchedPath: resultMappingPath,
        pathSuffix: ""
      };
    const mappings = Object.entries(csm.mappings).filter(([key]) => resultMappingPath.startsWith(key)).sort(([key1], [key2]) => key2.length - key1.length);
    if (mappings.length == 0)
      return;
    const [matchedPath, mapping] = mappings[0], pathSuffix = resultMappingPath.substring(matchedPath.length);
    return { mapping, matchedPath, pathSuffix };
  }
  function isArray(value) {
    return value !== null && Array.isArray(value);
  }
  function isRecord(value) {
    return typeof value == "object" && value !== null;
  }
  function walkMap(value, mappingFn, path = []) {
    if (isArray(value))
      return value.map((v, idx) => {
        if (isRecord(v)) {
          const _key = v._key;
          if (typeof _key == "string")
            return walkMap(v, mappingFn, path.concat({ _key, _index: idx }));
        }
        return walkMap(v, mappingFn, path.concat(idx));
      });
    if (isRecord(value)) {
      if (value._type === "block" || value._type === "span") {
        const result = { ...value };
        return value._type === "block" ? result.children = walkMap(value.children, mappingFn, path.concat("children")) : value._type === "span" && (result.text = walkMap(value.text, mappingFn, path.concat("text"))), result;
      }
      return Object.fromEntries(
        Object.entries(value).map(([k, v]) => [k, walkMap(v, mappingFn, path.concat(k))])
      );
    }
    return mappingFn(value, path);
  }
  function encodeIntoResult(result, csm, encoder) {
    return walkMap(result, (value, path) => {
      if (typeof value != "string")
        return value;
      const resolveMappingResult = resolveMapping(path, csm);
      if (!resolveMappingResult)
        return value;
      const { mapping, matchedPath } = resolveMappingResult;
      if (mapping.type !== "value" || mapping.source.type !== "documentValue")
        return value;
      const sourceDocument = csm.documents[mapping.source.document], sourcePath = csm.paths[mapping.source.path], matchPathSegments = parseJsonPath(matchedPath), fullSourceSegments = parseJsonPath(sourcePath).concat(path.slice(matchPathSegments.length));
      return encoder({
        sourcePath: fullSourceSegments,
        sourceDocument,
        resultPath: path,
        value
      });
    });
  }
  const DRAFTS_PREFIX = "drafts.";
  function getPublishedId(id) {
    return id.startsWith(DRAFTS_PREFIX) ? id.slice(DRAFTS_PREFIX.length) : id;
  }
  function createEditUrl(options) {
    const {
      baseUrl,
      workspace: _workspace = "default",
      tool: _tool = "default",
      id: _id,
      type,
      path,
      projectId,
      dataset
    } = options;
    if (!baseUrl)
      throw new Error("baseUrl is required");
    if (!path)
      throw new Error("path is required");
    if (!_id)
      throw new Error("id is required");
    if (baseUrl !== "/" && baseUrl.endsWith("/"))
      throw new Error("baseUrl must not end with a slash");
    const workspace = _workspace === "default" ? undefined : _workspace, tool = _tool === "default" ? undefined : _tool, id = getPublishedId(_id), stringifiedPath = Array.isArray(path) ? toString(jsonPathToStudioPath(path)) : path, searchParams = new URLSearchParams({
      baseUrl,
      id,
      type,
      path: stringifiedPath
    });
    workspace && searchParams.set("workspace", workspace), tool && searchParams.set("tool", tool), projectId && searchParams.set("projectId", projectId), dataset && searchParams.set("dataset", dataset), _id.startsWith(DRAFTS_PREFIX) && searchParams.set("isDraft", "");
    const segments = [baseUrl === "/" ? "" : baseUrl];
    workspace && segments.push(workspace);
    const routerParams = [
      "mode=presentation",
      `id=${id}`,
      `type=${type}`,
      `path=${encodeURIComponent(stringifiedPath)}`
    ];
    return tool && routerParams.push(`tool=${tool}`), segments.push("intent", "edit", `${routerParams.join(";")}?${searchParams}`), segments.join("/");
  }
  function resolveStudioBaseRoute(studioUrl) {
    let baseUrl = typeof studioUrl == "string" ? studioUrl : studioUrl.baseUrl;
    return baseUrl !== "/" && (baseUrl = baseUrl.replace(/\/$/, "")), typeof studioUrl == "string" ? { baseUrl } : { ...studioUrl, baseUrl };
  }
  const filterDefault = ({ sourcePath, resultPath, value }) => {
    if (isValidDate(value) || isValidURL(value))
      return false;
    const endPath = sourcePath.at(-1);
    return !(sourcePath.at(-2) === "slug" && endPath === "current" || typeof endPath == "string" && (endPath.startsWith("_") || endPath.endsWith("Id")) || sourcePath.some(
      (path) => path === "meta" || path === "metadata" || path === "openGraph" || path === "seo"
    ) || hasTypeLike(sourcePath) || hasTypeLike(resultPath) || typeof endPath == "string" && denylist.has(endPath));
  }, denylist = /* @__PURE__ */ new Set([
    "color",
    "colour",
    "currency",
    "email",
    "format",
    "gid",
    "hex",
    "href",
    "hsl",
    "hsla",
    "icon",
    "id",
    "index",
    "key",
    "language",
    "layout",
    "link",
    "linkAction",
    "locale",
    "lqip",
    "page",
    "path",
    "ref",
    "rgb",
    "rgba",
    "route",
    "secret",
    "slug",
    "status",
    "tag",
    "template",
    "theme",
    "type",
    "textTheme",
    "unit",
    "url",
    "username",
    "variant",
    "website"
  ]);
  function isValidDate(dateString) {
    return /^\d{4}-\d{2}-\d{2}/.test(dateString) ? !!Date.parse(dateString) : false;
  }
  function isValidURL(url) {
    try {
      new URL(url, url.startsWith("/") ? "https://acme.com" : void 0);
    } catch {
      return false;
    }
    return true;
  }
  function hasTypeLike(path) {
    return path.some((segment) => typeof segment == "string" && segment.match(/type/i) !== null);
  }
  const TRUNCATE_LENGTH = 20;
  function stegaEncodeSourceMap(result, resultSourceMap, config) {
    const { filter, logger, enabled } = config;
    if (!enabled) {
      const msg = "config.enabled must be true, don't call this function otherwise";
      throw logger?.error?.(`[@sanity/client]: ${msg}`, { result, resultSourceMap, config }), new TypeError(msg);
    }
    if (!resultSourceMap)
      return logger?.error?.("[@sanity/client]: Missing Content Source Map from response body", {
        result,
        resultSourceMap,
        config
      }), result;
    if (!config.studioUrl) {
      const msg = "config.studioUrl must be defined";
      throw logger?.error?.(`[@sanity/client]: ${msg}`, { result, resultSourceMap, config }), new TypeError(msg);
    }
    const report = {
      encoded: [],
      skipped: []
    }, resultWithStega = encodeIntoResult(
      result,
      resultSourceMap,
      ({ sourcePath, sourceDocument, resultPath, value }) => {
        if ((typeof filter == "function" ? filter({ sourcePath, resultPath, filterDefault, sourceDocument, value }) : filterDefault({ sourcePath, resultPath, filterDefault, sourceDocument, value })) === false)
          return logger && report.skipped.push({
            path: prettyPathForLogging(sourcePath),
            value: `${value.slice(0, TRUNCATE_LENGTH)}${value.length > TRUNCATE_LENGTH ? "..." : ""}`,
            length: value.length
          }), value;
        logger && report.encoded.push({
          path: prettyPathForLogging(sourcePath),
          value: `${value.slice(0, TRUNCATE_LENGTH)}${value.length > TRUNCATE_LENGTH ? "..." : ""}`,
          length: value.length
        });
        const { baseUrl, workspace, tool } = resolveStudioBaseRoute(
          typeof config.studioUrl == "function" ? config.studioUrl(sourceDocument) : config.studioUrl
        );
        if (!baseUrl) return value;
        const { _id: id, _type: type, _projectId: projectId, _dataset: dataset } = sourceDocument;
        return C(
          value,
          {
            origin: "sanity.io",
            href: createEditUrl({
              baseUrl,
              workspace,
              tool,
              id,
              type,
              path: sourcePath,
              ...!config.omitCrossDatasetReferenceData && { dataset, projectId }
            })
          },
          // We use custom logic to determine if we should skip encoding
          false
        );
      }
    );
    if (logger) {
      const isSkipping = report.skipped.length, isEncoding = report.encoded.length;
      if ((isSkipping || isEncoding) && ((logger?.groupCollapsed || logger.log)?.("[@sanity/client]: Encoding source map into result"), logger.log?.(
        `[@sanity/client]: Paths encoded: ${report.encoded.length}, skipped: ${report.skipped.length}`
      )), report.encoded.length > 0 && (logger?.log?.("[@sanity/client]: Table of encoded paths"), (logger?.table || logger.log)?.(report.encoded)), report.skipped.length > 0) {
        const skipped = /* @__PURE__ */ new Set();
        for (const { path } of report.skipped)
          skipped.add(path.replace(reKeySegment, "0").replace(/\[\d+\]/g, "[]"));
        logger?.log?.("[@sanity/client]: List of skipped paths", [...skipped.values()]);
      }
      (isSkipping || isEncoding) && logger?.groupEnd?.();
    }
    return resultWithStega;
  }
  function prettyPathForLogging(path) {
    return toString(jsonPathToStudioPath(path));
  }
  var stegaEncodeSourceMap$1 = /* @__PURE__ */ Object.freeze({
    __proto__: null,
    stegaEncodeSourceMap
  });

  var stegaEncodeSourceMap$2 = /*#__PURE__*/Object.freeze({
    __proto__: null,
    encodeIntoResult: encodeIntoResult,
    stegaEncodeSourceMap: stegaEncodeSourceMap,
    stegaEncodeSourceMap$1: stegaEncodeSourceMap$1
  });

  function getDefaultExportFromCjs (x) {
  	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
  }

  var eventsource$1 = {exports: {}};

  /** @license
   * eventsource.js
   * Available under MIT License (MIT)
   * https://github.com/Yaffle/EventSource/
   */
  var eventsource = eventsource$1.exports;

  var hasRequiredEventsource;

  function requireEventsource () {
  	if (hasRequiredEventsource) return eventsource$1.exports;
  	hasRequiredEventsource = 1;
  	(function (module, exports) {
  		/*jslint indent: 2, vars: true, plusplus: true */
  		/*global setTimeout, clearTimeout */

  		(function (global) {

  		  var setTimeout = global.setTimeout;
  		  var clearTimeout = global.clearTimeout;
  		  var XMLHttpRequest = global.XMLHttpRequest;
  		  var XDomainRequest = global.XDomainRequest;
  		  var ActiveXObject = global.ActiveXObject;
  		  var NativeEventSource = global.EventSource;

  		  var document = global.document;
  		  var Promise = global.Promise;
  		  var fetch = global.fetch;
  		  var Response = global.Response;
  		  var TextDecoder = global.TextDecoder;
  		  var TextEncoder = global.TextEncoder;
  		  var AbortController = global.AbortController;

  		  if (typeof window !== "undefined" && typeof document !== "undefined" && !("readyState" in document) && document.body == null) { // Firefox 2
  		    document.readyState = "loading";
  		    window.addEventListener("load", function (event) {
  		      document.readyState = "complete";
  		    }, false);
  		  }

  		  if (XMLHttpRequest == null && ActiveXObject != null) { // https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/Using_XMLHttpRequest_in_IE6
  		    XMLHttpRequest = function () {
  		      return new ActiveXObject("Microsoft.XMLHTTP");
  		    };
  		  }

  		  if (Object.create == undefined) {
  		    Object.create = function (C) {
  		      function F(){}
  		      F.prototype = C;
  		      return new F();
  		    };
  		  }

  		  if (!Date.now) {
  		    Date.now = function now() {
  		      return new Date().getTime();
  		    };
  		  }

  		  // see #118 (Promise#finally with polyfilled Promise)
  		  // see #123 (data URLs crash Edge)
  		  // see #125 (CSP violations)
  		  // see pull/#138
  		  // => No way to polyfill Promise#finally

  		  if (AbortController == undefined) {
  		    var originalFetch2 = fetch;
  		    fetch = function (url, options) {
  		      var signal = options.signal;
  		      return originalFetch2(url, {headers: options.headers, credentials: options.credentials, cache: options.cache}).then(function (response) {
  		        var reader = response.body.getReader();
  		        signal._reader = reader;
  		        if (signal._aborted) {
  		          signal._reader.cancel();
  		        }
  		        return {
  		          status: response.status,
  		          statusText: response.statusText,
  		          headers: response.headers,
  		          body: {
  		            getReader: function () {
  		              return reader;
  		            }
  		          }
  		        };
  		      });
  		    };
  		    AbortController = function () {
  		      this.signal = {
  		        _reader: null,
  		        _aborted: false
  		      };
  		      this.abort = function () {
  		        if (this.signal._reader != null) {
  		          this.signal._reader.cancel();
  		        }
  		        this.signal._aborted = true;
  		      };
  		    };
  		  }

  		  function TextDecoderPolyfill() {
  		    this.bitsNeeded = 0;
  		    this.codePoint = 0;
  		  }

  		  TextDecoderPolyfill.prototype.decode = function (octets) {
  		    function valid(codePoint, shift, octetsCount) {
  		      if (octetsCount === 1) {
  		        return codePoint >= 0x0080 >> shift && codePoint << shift <= 0x07FF;
  		      }
  		      if (octetsCount === 2) {
  		        return codePoint >= 0x0800 >> shift && codePoint << shift <= 0xD7FF || codePoint >= 0xE000 >> shift && codePoint << shift <= 0xFFFF;
  		      }
  		      if (octetsCount === 3) {
  		        return codePoint >= 0x010000 >> shift && codePoint << shift <= 0x10FFFF;
  		      }
  		      throw new Error();
  		    }
  		    function octetsCount(bitsNeeded, codePoint) {
  		      if (bitsNeeded === 6 * 1) {
  		        return codePoint >> 6 > 15 ? 3 : codePoint > 31 ? 2 : 1;
  		      }
  		      if (bitsNeeded === 6 * 2) {
  		        return codePoint > 15 ? 3 : 2;
  		      }
  		      if (bitsNeeded === 6 * 3) {
  		        return 3;
  		      }
  		      throw new Error();
  		    }
  		    var REPLACER = 0xFFFD;
  		    var string = "";
  		    var bitsNeeded = this.bitsNeeded;
  		    var codePoint = this.codePoint;
  		    for (var i = 0; i < octets.length; i += 1) {
  		      var octet = octets[i];
  		      if (bitsNeeded !== 0) {
  		        if (octet < 128 || octet > 191 || !valid(codePoint << 6 | octet & 63, bitsNeeded - 6, octetsCount(bitsNeeded, codePoint))) {
  		          bitsNeeded = 0;
  		          codePoint = REPLACER;
  		          string += String.fromCharCode(codePoint);
  		        }
  		      }
  		      if (bitsNeeded === 0) {
  		        if (octet >= 0 && octet <= 127) {
  		          bitsNeeded = 0;
  		          codePoint = octet;
  		        } else if (octet >= 192 && octet <= 223) {
  		          bitsNeeded = 6 * 1;
  		          codePoint = octet & 31;
  		        } else if (octet >= 224 && octet <= 239) {
  		          bitsNeeded = 6 * 2;
  		          codePoint = octet & 15;
  		        } else if (octet >= 240 && octet <= 247) {
  		          bitsNeeded = 6 * 3;
  		          codePoint = octet & 7;
  		        } else {
  		          bitsNeeded = 0;
  		          codePoint = REPLACER;
  		        }
  		        if (bitsNeeded !== 0 && !valid(codePoint, bitsNeeded, octetsCount(bitsNeeded, codePoint))) {
  		          bitsNeeded = 0;
  		          codePoint = REPLACER;
  		        }
  		      } else {
  		        bitsNeeded -= 6;
  		        codePoint = codePoint << 6 | octet & 63;
  		      }
  		      if (bitsNeeded === 0) {
  		        if (codePoint <= 0xFFFF) {
  		          string += String.fromCharCode(codePoint);
  		        } else {
  		          string += String.fromCharCode(0xD800 + (codePoint - 0xFFFF - 1 >> 10));
  		          string += String.fromCharCode(0xDC00 + (codePoint - 0xFFFF - 1 & 0x3FF));
  		        }
  		      }
  		    }
  		    this.bitsNeeded = bitsNeeded;
  		    this.codePoint = codePoint;
  		    return string;
  		  };

  		  // Firefox < 38 throws an error with stream option
  		  var supportsStreamOption = function () {
  		    try {
  		      return new TextDecoder().decode(new TextEncoder().encode("test"), {stream: true}) === "test";
  		    } catch (error) {
  		      console.debug("TextDecoder does not support streaming option. Using polyfill instead: " + error);
  		    }
  		    return false;
  		  };

  		  // IE, Edge
  		  if (TextDecoder == undefined || TextEncoder == undefined || !supportsStreamOption()) {
  		    TextDecoder = TextDecoderPolyfill;
  		  }

  		  var k = function () {
  		  };

  		  function XHRWrapper(xhr) {
  		    this.withCredentials = false;
  		    this.readyState = 0;
  		    this.status = 0;
  		    this.statusText = "";
  		    this.responseText = "";
  		    this.onprogress = k;
  		    this.onload = k;
  		    this.onerror = k;
  		    this.onreadystatechange = k;
  		    this._contentType = "";
  		    this._xhr = xhr;
  		    this._sendTimeout = 0;
  		    this._abort = k;
  		  }

  		  XHRWrapper.prototype.open = function (method, url) {
  		    this._abort(true);

  		    var that = this;
  		    var xhr = this._xhr;
  		    var state = 1;
  		    var timeout = 0;

  		    this._abort = function (silent) {
  		      if (that._sendTimeout !== 0) {
  		        clearTimeout(that._sendTimeout);
  		        that._sendTimeout = 0;
  		      }
  		      if (state === 1 || state === 2 || state === 3) {
  		        state = 4;
  		        xhr.onload = k;
  		        xhr.onerror = k;
  		        xhr.onabort = k;
  		        xhr.onprogress = k;
  		        xhr.onreadystatechange = k;
  		        // IE 8 - 9: XDomainRequest#abort() does not fire any event
  		        // Opera < 10: XMLHttpRequest#abort() does not fire any event
  		        xhr.abort();
  		        if (timeout !== 0) {
  		          clearTimeout(timeout);
  		          timeout = 0;
  		        }
  		        if (!silent) {
  		          that.readyState = 4;
  		          that.onabort(null);
  		          that.onreadystatechange();
  		        }
  		      }
  		      state = 0;
  		    };

  		    var onStart = function () {
  		      if (state === 1) {
  		        //state = 2;
  		        var status = 0;
  		        var statusText = "";
  		        var contentType = undefined;
  		        if (!("contentType" in xhr)) {
  		          try {
  		            status = xhr.status;
  		            statusText = xhr.statusText;
  		            contentType = xhr.getResponseHeader("Content-Type");
  		          } catch (error) {
  		            // IE < 10 throws exception for `xhr.status` when xhr.readyState === 2 || xhr.readyState === 3
  		            // Opera < 11 throws exception for `xhr.status` when xhr.readyState === 2
  		            // https://bugs.webkit.org/show_bug.cgi?id=29121
  		            status = 0;
  		            statusText = "";
  		            contentType = undefined;
  		            // Firefox < 14, Chrome ?, Safari ?
  		            // https://bugs.webkit.org/show_bug.cgi?id=29658
  		            // https://bugs.webkit.org/show_bug.cgi?id=77854
  		          }
  		        } else {
  		          status = 200;
  		          statusText = "OK";
  		          contentType = xhr.contentType;
  		        }
  		        if (status !== 0) {
  		          state = 2;
  		          that.readyState = 2;
  		          that.status = status;
  		          that.statusText = statusText;
  		          that._contentType = contentType;
  		          that.onreadystatechange();
  		        }
  		      }
  		    };
  		    var onProgress = function () {
  		      onStart();
  		      if (state === 2 || state === 3) {
  		        state = 3;
  		        var responseText = "";
  		        try {
  		          responseText = xhr.responseText;
  		        } catch (error) {
  		          // IE 8 - 9 with XMLHttpRequest
  		        }
  		        that.readyState = 3;
  		        that.responseText = responseText;
  		        that.onprogress();
  		      }
  		    };
  		    var onFinish = function (type, event) {
  		      if (event == null || event.preventDefault == null) {
  		        event = {
  		          preventDefault: k
  		        };
  		      }
  		      // Firefox 52 fires "readystatechange" (xhr.readyState === 4) without final "readystatechange" (xhr.readyState === 3)
  		      // IE 8 fires "onload" without "onprogress"
  		      onProgress();
  		      if (state === 1 || state === 2 || state === 3) {
  		        state = 4;
  		        if (timeout !== 0) {
  		          clearTimeout(timeout);
  		          timeout = 0;
  		        }
  		        that.readyState = 4;
  		        if (type === "load") {
  		          that.onload(event);
  		        } else if (type === "error") {
  		          that.onerror(event);
  		        } else if (type === "abort") {
  		          that.onabort(event);
  		        } else {
  		          throw new TypeError();
  		        }
  		        that.onreadystatechange();
  		      }
  		    };
  		    var onReadyStateChange = function (event) {
  		      if (xhr != undefined) { // Opera 12
  		        if (xhr.readyState === 4) {
  		          if (!("onload" in xhr) || !("onerror" in xhr) || !("onabort" in xhr)) {
  		            onFinish(xhr.responseText === "" ? "error" : "load", event);
  		          }
  		        } else if (xhr.readyState === 3) {
  		          if (!("onprogress" in xhr)) { // testing XMLHttpRequest#responseText too many times is too slow in IE 11
  		            // and in Firefox 3.6
  		            onProgress();
  		          }
  		        } else if (xhr.readyState === 2) {
  		          onStart();
  		        }
  		      }
  		    };
  		    var onTimeout = function () {
  		      timeout = setTimeout(function () {
  		        onTimeout();
  		      }, 500);
  		      if (xhr.readyState === 3) {
  		        onProgress();
  		      }
  		    };

  		    // XDomainRequest#abort removes onprogress, onerror, onload
  		    if ("onload" in xhr) {
  		      xhr.onload = function (event) {
  		        onFinish("load", event);
  		      };
  		    }
  		    if ("onerror" in xhr) {
  		      xhr.onerror = function (event) {
  		        onFinish("error", event);
  		      };
  		    }
  		    // improper fix to match Firefox behaviour, but it is better than just ignore abort
  		    // see https://bugzilla.mozilla.org/show_bug.cgi?id=768596
  		    // https://bugzilla.mozilla.org/show_bug.cgi?id=880200
  		    // https://code.google.com/p/chromium/issues/detail?id=153570
  		    // IE 8 fires "onload" without "onprogress
  		    if ("onabort" in xhr) {
  		      xhr.onabort = function (event) {
  		        onFinish("abort", event);
  		      };
  		    }

  		    if ("onprogress" in xhr) {
  		      xhr.onprogress = onProgress;
  		    }

  		    // IE 8 - 9 (XMLHTTPRequest)
  		    // Opera < 12
  		    // Firefox < 3.5
  		    // Firefox 3.5 - 3.6 - ? < 9.0
  		    // onprogress is not fired sometimes or delayed
  		    // see also #64 (significant lag in IE 11)
  		    if ("onreadystatechange" in xhr) {
  		      xhr.onreadystatechange = function (event) {
  		        onReadyStateChange(event);
  		      };
  		    }

  		    if ("contentType" in xhr || !("ontimeout" in XMLHttpRequest.prototype)) {
  		      url += (url.indexOf("?") === -1 ? "?" : "&") + "padding=true";
  		    }
  		    xhr.open(method, url, true);

  		    if ("readyState" in xhr) {
  		      // workaround for Opera 12 issue with "progress" events
  		      // #91 (XMLHttpRequest onprogress not fired for streaming response in Edge 14-15-?)
  		      timeout = setTimeout(function () {
  		        onTimeout();
  		      }, 0);
  		    }
  		  };
  		  XHRWrapper.prototype.abort = function () {
  		    this._abort(false);
  		  };
  		  XHRWrapper.prototype.getResponseHeader = function (name) {
  		    return this._contentType;
  		  };
  		  XHRWrapper.prototype.setRequestHeader = function (name, value) {
  		    var xhr = this._xhr;
  		    if ("setRequestHeader" in xhr) {
  		      xhr.setRequestHeader(name, value);
  		    }
  		  };
  		  XHRWrapper.prototype.getAllResponseHeaders = function () {
  		    // XMLHttpRequest#getAllResponseHeaders returns null for CORS requests in Firefox 3.6.28
  		    return this._xhr.getAllResponseHeaders != undefined ? this._xhr.getAllResponseHeaders() || "" : "";
  		  };
  		  XHRWrapper.prototype.send = function () {
  		    // loading indicator in Safari < ? (6), Chrome < 14, Firefox
  		    // https://bugzilla.mozilla.org/show_bug.cgi?id=736723
  		    if ((!("ontimeout" in XMLHttpRequest.prototype) || (!("sendAsBinary" in XMLHttpRequest.prototype) && !("mozAnon" in XMLHttpRequest.prototype))) &&
  		        document != undefined &&
  		        document.readyState != undefined &&
  		        document.readyState !== "complete") {
  		      var that = this;
  		      that._sendTimeout = setTimeout(function () {
  		        that._sendTimeout = 0;
  		        that.send();
  		      }, 4);
  		      return;
  		    }

  		    var xhr = this._xhr;
  		    // withCredentials should be set after "open" for Safari and Chrome (< 19 ?)
  		    if ("withCredentials" in xhr) {
  		      xhr.withCredentials = this.withCredentials;
  		    }
  		    try {
  		      // xhr.send(); throws "Not enough arguments" in Firefox 3.0
  		      xhr.send(undefined);
  		    } catch (error1) {
  		      // Safari 5.1.7, Opera 12
  		      throw error1;
  		    }
  		  };

  		  function toLowerCase(name) {
  		    return name.replace(/[A-Z]/g, function (c) {
  		      return String.fromCharCode(c.charCodeAt(0) + 0x20);
  		    });
  		  }

  		  function HeadersPolyfill(all) {
  		    // Get headers: implemented according to mozilla's example code: https://developer.mozilla.org/en-US/docs/Web/API/XMLHttpRequest/getAllResponseHeaders#Example
  		    var map = Object.create(null);
  		    var array = all.split("\r\n");
  		    for (var i = 0; i < array.length; i += 1) {
  		      var line = array[i];
  		      var parts = line.split(": ");
  		      var name = parts.shift();
  		      var value = parts.join(": ");
  		      map[toLowerCase(name)] = value;
  		    }
  		    this._map = map;
  		  }
  		  HeadersPolyfill.prototype.get = function (name) {
  		    return this._map[toLowerCase(name)];
  		  };

  		  if (XMLHttpRequest != null && XMLHttpRequest.HEADERS_RECEIVED == null) { // IE < 9, Firefox 3.6
  		    XMLHttpRequest.HEADERS_RECEIVED = 2;
  		  }

  		  function XHRTransport() {
  		  }

  		  XHRTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  		    xhr.open("GET", url);
  		    var offset = 0;
  		    xhr.onprogress = function () {
  		      var responseText = xhr.responseText;
  		      var chunk = responseText.slice(offset);
  		      offset += chunk.length;
  		      onProgressCallback(chunk);
  		    };
  		    xhr.onerror = function (event) {
  		      event.preventDefault();
  		      onFinishCallback(new Error("NetworkError"));
  		    };
  		    xhr.onload = function () {
  		      onFinishCallback(null);
  		    };
  		    xhr.onabort = function () {
  		      onFinishCallback(null);
  		    };
  		    xhr.onreadystatechange = function () {
  		      if (xhr.readyState === XMLHttpRequest.HEADERS_RECEIVED) {
  		        var status = xhr.status;
  		        var statusText = xhr.statusText;
  		        var contentType = xhr.getResponseHeader("Content-Type");
  		        var headers = xhr.getAllResponseHeaders();
  		        onStartCallback(status, statusText, contentType, new HeadersPolyfill(headers));
  		      }
  		    };
  		    xhr.withCredentials = withCredentials;
  		    for (var name in headers) {
  		      if (Object.prototype.hasOwnProperty.call(headers, name)) {
  		        xhr.setRequestHeader(name, headers[name]);
  		      }
  		    }
  		    xhr.send();
  		    return xhr;
  		  };

  		  function HeadersWrapper(headers) {
  		    this._headers = headers;
  		  }
  		  HeadersWrapper.prototype.get = function (name) {
  		    return this._headers.get(name);
  		  };

  		  function FetchTransport() {
  		  }

  		  FetchTransport.prototype.open = function (xhr, onStartCallback, onProgressCallback, onFinishCallback, url, withCredentials, headers) {
  		    var reader = null;
  		    var controller = new AbortController();
  		    var signal = controller.signal;
  		    var textDecoder = new TextDecoder();
  		    fetch(url, {
  		      headers: headers,
  		      credentials: withCredentials ? "include" : "same-origin",
  		      signal: signal,
  		      cache: "no-store"
  		    }).then(function (response) {
  		      reader = response.body.getReader();
  		      onStartCallback(response.status, response.statusText, response.headers.get("Content-Type"), new HeadersWrapper(response.headers));
  		      // see https://github.com/promises-aplus/promises-spec/issues/179
  		      return new Promise(function (resolve, reject) {
  		        var readNextChunk = function () {
  		          reader.read().then(function (result) {
  		            if (result.done) {
  		              //Note: bytes in textDecoder are ignored
  		              resolve(undefined);
  		            } else {
  		              var chunk = textDecoder.decode(result.value, {stream: true});
  		              onProgressCallback(chunk);
  		              readNextChunk();
  		            }
  		          })["catch"](function (error) {
  		            reject(error);
  		          });
  		        };
  		        readNextChunk();
  		      });
  		    })["catch"](function (error) {
  		      if (error.name === "AbortError") {
  		        return undefined;
  		      } else {
  		        return error;
  		      }
  		    }).then(function (error) {
  		      onFinishCallback(error);
  		    });
  		    return {
  		      abort: function () {
  		        if (reader != null) {
  		          reader.cancel(); // https://bugzilla.mozilla.org/show_bug.cgi?id=1583815
  		        }
  		        controller.abort();
  		      }
  		    };
  		  };

  		  function EventTarget() {
  		    this._listeners = Object.create(null);
  		  }

  		  function throwError(e) {
  		    setTimeout(function () {
  		      throw e;
  		    }, 0);
  		  }

  		  EventTarget.prototype.dispatchEvent = function (event) {
  		    event.target = this;
  		    var typeListeners = this._listeners[event.type];
  		    if (typeListeners != undefined) {
  		      var length = typeListeners.length;
  		      for (var i = 0; i < length; i += 1) {
  		        var listener = typeListeners[i];
  		        try {
  		          if (typeof listener.handleEvent === "function") {
  		            listener.handleEvent(event);
  		          } else {
  		            listener.call(this, event);
  		          }
  		        } catch (e) {
  		          throwError(e);
  		        }
  		      }
  		    }
  		  };
  		  EventTarget.prototype.addEventListener = function (type, listener) {
  		    type = String(type);
  		    var listeners = this._listeners;
  		    var typeListeners = listeners[type];
  		    if (typeListeners == undefined) {
  		      typeListeners = [];
  		      listeners[type] = typeListeners;
  		    }
  		    var found = false;
  		    for (var i = 0; i < typeListeners.length; i += 1) {
  		      if (typeListeners[i] === listener) {
  		        found = true;
  		      }
  		    }
  		    if (!found) {
  		      typeListeners.push(listener);
  		    }
  		  };
  		  EventTarget.prototype.removeEventListener = function (type, listener) {
  		    type = String(type);
  		    var listeners = this._listeners;
  		    var typeListeners = listeners[type];
  		    if (typeListeners != undefined) {
  		      var filtered = [];
  		      for (var i = 0; i < typeListeners.length; i += 1) {
  		        if (typeListeners[i] !== listener) {
  		          filtered.push(typeListeners[i]);
  		        }
  		      }
  		      if (filtered.length === 0) {
  		        delete listeners[type];
  		      } else {
  		        listeners[type] = filtered;
  		      }
  		    }
  		  };

  		  function Event(type) {
  		    this.type = type;
  		    this.target = undefined;
  		  }

  		  function MessageEvent(type, options) {
  		    Event.call(this, type);
  		    this.data = options.data;
  		    this.lastEventId = options.lastEventId;
  		  }

  		  MessageEvent.prototype = Object.create(Event.prototype);

  		  function ConnectionEvent(type, options) {
  		    Event.call(this, type);
  		    this.status = options.status;
  		    this.statusText = options.statusText;
  		    this.headers = options.headers;
  		  }

  		  ConnectionEvent.prototype = Object.create(Event.prototype);

  		  function ErrorEvent(type, options) {
  		    Event.call(this, type);
  		    this.error = options.error;
  		  }

  		  ErrorEvent.prototype = Object.create(Event.prototype);

  		  var WAITING = -1;
  		  var CONNECTING = 0;
  		  var OPEN = 1;
  		  var CLOSED = 2;

  		  var AFTER_CR = -1;
  		  var FIELD_START = 0;
  		  var FIELD = 1;
  		  var VALUE_START = 2;
  		  var VALUE = 3;

  		  var contentTypeRegExp = /^text\/event\-stream(;.*)?$/i;

  		  var MINIMUM_DURATION = 1000;
  		  var MAXIMUM_DURATION = 18000000;

  		  var parseDuration = function (value, def) {
  		    var n = value == null ? def : parseInt(value, 10);
  		    if (n !== n) {
  		      n = def;
  		    }
  		    return clampDuration(n);
  		  };
  		  var clampDuration = function (n) {
  		    return Math.min(Math.max(n, MINIMUM_DURATION), MAXIMUM_DURATION);
  		  };

  		  var fire = function (that, f, event) {
  		    try {
  		      if (typeof f === "function") {
  		        f.call(that, event);
  		      }
  		    } catch (e) {
  		      throwError(e);
  		    }
  		  };

  		  function EventSourcePolyfill(url, options) {
  		    EventTarget.call(this);
  		    options = options || {};

  		    this.onopen = undefined;
  		    this.onmessage = undefined;
  		    this.onerror = undefined;

  		    this.url = undefined;
  		    this.readyState = undefined;
  		    this.withCredentials = undefined;
  		    this.headers = undefined;

  		    this._close = undefined;

  		    start(this, url, options);
  		  }

  		  function getBestXHRTransport() {
  		    return (XMLHttpRequest != undefined && ("withCredentials" in XMLHttpRequest.prototype)) || XDomainRequest == undefined
  		        ? new XMLHttpRequest()
  		        : new XDomainRequest();
  		  }

  		  var isFetchSupported = fetch != undefined && Response != undefined && "body" in Response.prototype;

  		  function start(es, url, options) {
  		    url = String(url);
  		    var withCredentials = Boolean(options.withCredentials);
  		    var lastEventIdQueryParameterName = options.lastEventIdQueryParameterName || "lastEventId";

  		    var initialRetry = clampDuration(1000);
  		    var heartbeatTimeout = parseDuration(options.heartbeatTimeout, 45000);

  		    var lastEventId = "";
  		    var retry = initialRetry;
  		    var wasActivity = false;
  		    var textLength = 0;
  		    var headers = options.headers || {};
  		    var TransportOption = options.Transport;
  		    var xhr = isFetchSupported && TransportOption == undefined ? undefined : new XHRWrapper(TransportOption != undefined ? new TransportOption() : getBestXHRTransport());
  		    var transport = TransportOption != null && typeof TransportOption !== "string" ? new TransportOption() : (xhr == undefined ? new FetchTransport() : new XHRTransport());
  		    var abortController = undefined;
  		    var timeout = 0;
  		    var currentState = WAITING;
  		    var dataBuffer = "";
  		    var lastEventIdBuffer = "";
  		    var eventTypeBuffer = "";

  		    var textBuffer = "";
  		    var state = FIELD_START;
  		    var fieldStart = 0;
  		    var valueStart = 0;

  		    var onStart = function (status, statusText, contentType, headers) {
  		      if (currentState === CONNECTING) {
  		        if (status === 200 && contentType != undefined && contentTypeRegExp.test(contentType)) {
  		          currentState = OPEN;
  		          wasActivity = Date.now();
  		          retry = initialRetry;
  		          es.readyState = OPEN;
  		          var event = new ConnectionEvent("open", {
  		            status: status,
  		            statusText: statusText,
  		            headers: headers
  		          });
  		          es.dispatchEvent(event);
  		          fire(es, es.onopen, event);
  		        } else {
  		          var message = "";
  		          if (status !== 200) {
  		            if (statusText) {
  		              statusText = statusText.replace(/\s+/g, " ");
  		            }
  		            message = "EventSource's response has a status " + status + " " + statusText + " that is not 200. Aborting the connection.";
  		          } else {
  		            message = "EventSource's response has a Content-Type specifying an unsupported type: " + (contentType == undefined ? "-" : contentType.replace(/\s+/g, " ")) + ". Aborting the connection.";
  		          }
  		          close();
  		          var event = new ConnectionEvent("error", {
  		            status: status,
  		            statusText: statusText,
  		            headers: headers
  		          });
  		          es.dispatchEvent(event);
  		          fire(es, es.onerror, event);
  		          console.error(message);
  		        }
  		      }
  		    };

  		    var onProgress = function (textChunk) {
  		      if (currentState === OPEN) {
  		        var n = -1;
  		        for (var i = 0; i < textChunk.length; i += 1) {
  		          var c = textChunk.charCodeAt(i);
  		          if (c === "\n".charCodeAt(0) || c === "\r".charCodeAt(0)) {
  		            n = i;
  		          }
  		        }
  		        var chunk = (n !== -1 ? textBuffer : "") + textChunk.slice(0, n + 1);
  		        textBuffer = (n === -1 ? textBuffer : "") + textChunk.slice(n + 1);
  		        if (textChunk !== "") {
  		          wasActivity = Date.now();
  		          textLength += textChunk.length;
  		        }
  		        for (var position = 0; position < chunk.length; position += 1) {
  		          var c = chunk.charCodeAt(position);
  		          if (state === AFTER_CR && c === "\n".charCodeAt(0)) {
  		            state = FIELD_START;
  		          } else {
  		            if (state === AFTER_CR) {
  		              state = FIELD_START;
  		            }
  		            if (c === "\r".charCodeAt(0) || c === "\n".charCodeAt(0)) {
  		              if (state !== FIELD_START) {
  		                if (state === FIELD) {
  		                  valueStart = position + 1;
  		                }
  		                var field = chunk.slice(fieldStart, valueStart - 1);
  		                var value = chunk.slice(valueStart + (valueStart < position && chunk.charCodeAt(valueStart) === " ".charCodeAt(0) ? 1 : 0), position);
  		                if (field === "data") {
  		                  dataBuffer += "\n";
  		                  dataBuffer += value;
  		                } else if (field === "id") {
  		                  lastEventIdBuffer = value;
  		                } else if (field === "event") {
  		                  eventTypeBuffer = value;
  		                } else if (field === "retry") {
  		                  initialRetry = parseDuration(value, initialRetry);
  		                  retry = initialRetry;
  		                } else if (field === "heartbeatTimeout") {
  		                  heartbeatTimeout = parseDuration(value, heartbeatTimeout);
  		                  if (timeout !== 0) {
  		                    clearTimeout(timeout);
  		                    timeout = setTimeout(function () {
  		                      onTimeout();
  		                    }, heartbeatTimeout);
  		                  }
  		                }
  		              }
  		              if (state === FIELD_START) {
  		                if (dataBuffer !== "") {
  		                  lastEventId = lastEventIdBuffer;
  		                  if (eventTypeBuffer === "") {
  		                    eventTypeBuffer = "message";
  		                  }
  		                  var event = new MessageEvent(eventTypeBuffer, {
  		                    data: dataBuffer.slice(1),
  		                    lastEventId: lastEventIdBuffer
  		                  });
  		                  es.dispatchEvent(event);
  		                  if (eventTypeBuffer === "open") {
  		                    fire(es, es.onopen, event);
  		                  } else if (eventTypeBuffer === "message") {
  		                    fire(es, es.onmessage, event);
  		                  } else if (eventTypeBuffer === "error") {
  		                    fire(es, es.onerror, event);
  		                  }
  		                  if (currentState === CLOSED) {
  		                    return;
  		                  }
  		                }
  		                dataBuffer = "";
  		                eventTypeBuffer = "";
  		              }
  		              state = c === "\r".charCodeAt(0) ? AFTER_CR : FIELD_START;
  		            } else {
  		              if (state === FIELD_START) {
  		                fieldStart = position;
  		                state = FIELD;
  		              }
  		              if (state === FIELD) {
  		                if (c === ":".charCodeAt(0)) {
  		                  valueStart = position + 1;
  		                  state = VALUE_START;
  		                }
  		              } else if (state === VALUE_START) {
  		                state = VALUE;
  		              }
  		            }
  		          }
  		        }
  		      }
  		    };

  		    var onFinish = function (error) {
  		      if (currentState === OPEN || currentState === CONNECTING) {
  		        currentState = WAITING;
  		        if (timeout !== 0) {
  		          clearTimeout(timeout);
  		          timeout = 0;
  		        }
  		        timeout = setTimeout(function () {
  		          onTimeout();
  		        }, retry);
  		        retry = clampDuration(Math.min(initialRetry * 16, retry * 2));

  		        es.readyState = CONNECTING;
  		        var event = new ErrorEvent("error", {error: error});
  		        es.dispatchEvent(event);
  		        fire(es, es.onerror, event);
  		        if (error != undefined) {
  		          console.error(error);
  		        }
  		      }
  		    };

  		    var close = function () {
  		      currentState = CLOSED;
  		      if (abortController != undefined) {
  		        abortController.abort();
  		        abortController = undefined;
  		      }
  		      if (timeout !== 0) {
  		        clearTimeout(timeout);
  		        timeout = 0;
  		      }
  		      es.readyState = CLOSED;
  		    };

  		    var onTimeout = function () {
  		      timeout = 0;

  		      if (currentState !== WAITING) {
  		        if (!wasActivity && abortController != undefined) {
  		          onFinish(new Error("No activity within " + heartbeatTimeout + " milliseconds." + " " + (currentState === CONNECTING ? "No response received." : textLength + " chars received.") + " " + "Reconnecting."));
  		          if (abortController != undefined) {
  		            abortController.abort();
  		            abortController = undefined;
  		          }
  		        } else {
  		          var nextHeartbeat = Math.max((wasActivity || Date.now()) + heartbeatTimeout - Date.now(), 1);
  		          wasActivity = false;
  		          timeout = setTimeout(function () {
  		            onTimeout();
  		          }, nextHeartbeat);
  		        }
  		        return;
  		      }

  		      wasActivity = false;
  		      textLength = 0;
  		      timeout = setTimeout(function () {
  		        onTimeout();
  		      }, heartbeatTimeout);

  		      currentState = CONNECTING;
  		      dataBuffer = "";
  		      eventTypeBuffer = "";
  		      lastEventIdBuffer = lastEventId;
  		      textBuffer = "";
  		      fieldStart = 0;
  		      valueStart = 0;
  		      state = FIELD_START;

  		      // https://bugzilla.mozilla.org/show_bug.cgi?id=428916
  		      // Request header field Last-Event-ID is not allowed by Access-Control-Allow-Headers.
  		      var requestURL = url;
  		      if (url.slice(0, 5) !== "data:" && url.slice(0, 5) !== "blob:") {
  		        if (lastEventId !== "") {
  		          // Remove the lastEventId parameter if it's already part of the request URL.
  		          var i = url.indexOf("?");
  		          requestURL = i === -1 ? url : url.slice(0, i + 1) + url.slice(i + 1).replace(/(?:^|&)([^=&]*)(?:=[^&]*)?/g, function (p, paramName) {
  		            return paramName === lastEventIdQueryParameterName ? '' : p;
  		          });
  		          // Append the current lastEventId to the request URL.
  		          requestURL += (url.indexOf("?") === -1 ? "?" : "&") + lastEventIdQueryParameterName +"=" + encodeURIComponent(lastEventId);
  		        }
  		      }
  		      var withCredentials = es.withCredentials;
  		      var requestHeaders = {};
  		      requestHeaders["Accept"] = "text/event-stream";
  		      var headers = es.headers;
  		      if (headers != undefined) {
  		        for (var name in headers) {
  		          if (Object.prototype.hasOwnProperty.call(headers, name)) {
  		            requestHeaders[name] = headers[name];
  		          }
  		        }
  		      }
  		      try {
  		        abortController = transport.open(xhr, onStart, onProgress, onFinish, requestURL, withCredentials, requestHeaders);
  		      } catch (error) {
  		        close();
  		        throw error;
  		      }
  		    };

  		    es.url = url;
  		    es.readyState = CONNECTING;
  		    es.withCredentials = withCredentials;
  		    es.headers = headers;
  		    es._close = close;

  		    onTimeout();
  		  }

  		  EventSourcePolyfill.prototype = Object.create(EventTarget.prototype);
  		  EventSourcePolyfill.prototype.CONNECTING = CONNECTING;
  		  EventSourcePolyfill.prototype.OPEN = OPEN;
  		  EventSourcePolyfill.prototype.CLOSED = CLOSED;
  		  EventSourcePolyfill.prototype.close = function () {
  		    this._close();
  		  };

  		  EventSourcePolyfill.CONNECTING = CONNECTING;
  		  EventSourcePolyfill.OPEN = OPEN;
  		  EventSourcePolyfill.CLOSED = CLOSED;
  		  EventSourcePolyfill.prototype.withCredentials = undefined;

  		  var R = NativeEventSource;
  		  if (XMLHttpRequest != undefined && (NativeEventSource == undefined || !("withCredentials" in NativeEventSource.prototype))) {
  		    // Why replace a native EventSource ?
  		    // https://bugzilla.mozilla.org/show_bug.cgi?id=444328
  		    // https://bugzilla.mozilla.org/show_bug.cgi?id=831392
  		    // https://code.google.com/p/chromium/issues/detail?id=260144
  		    // https://code.google.com/p/chromium/issues/detail?id=225654
  		    // ...
  		    R = EventSourcePolyfill;
  		  }

  		  (function (factory) {
  		    {
  		      var v = factory(exports);
  		      if (v !== undefined) module.exports = v;
  		    }
  		  })(function (exports) {
  		    exports.EventSourcePolyfill = EventSourcePolyfill;
  		    exports.NativeEventSource = NativeEventSource;
  		    exports.EventSource = R;
  		  });
  		}(typeof globalThis === 'undefined' ? (typeof window !== 'undefined' ? window : typeof self !== 'undefined' ? self : eventsource) : globalThis)); 
  	} (eventsource$1, eventsource$1.exports));
  	return eventsource$1.exports;
  }

  var browser$2;
  var hasRequiredBrowser;

  function requireBrowser () {
  	if (hasRequiredBrowser) return browser$2;
  	hasRequiredBrowser = 1;
  	browser$2 = requireEventsource().EventSourcePolyfill;
  	return browser$2;
  }

  var browserExports = /*@__PURE__*/ requireBrowser();
  var browser = /*@__PURE__*/getDefaultExportFromCjs(browserExports);

  var browser$1 = /*#__PURE__*/_mergeNamespaces({
    __proto__: null,
    default: browser
  }, [browserExports]);

  exports.BasePatch = BasePatch;
  exports.BaseTransaction = BaseTransaction;
  exports.ChannelError = ChannelError;
  exports.ClientError = ClientError;
  exports.ConnectionFailedError = ConnectionFailedError;
  exports.CorsOriginError = CorsOriginError;
  exports.DisconnectError = DisconnectError;
  exports.MessageError = MessageError;
  exports.MessageParseError = MessageParseError;
  exports.ObservablePatch = ObservablePatch;
  exports.ObservableSanityClient = ObservableSanityClient;
  exports.ObservableTransaction = ObservableTransaction;
  exports.Patch = Patch;
  exports.SanityClient = SanityClient;
  exports.ServerError = ServerError;
  exports.Transaction = Transaction;
  exports.connectEventSource = connectEventSource;
  exports.createClient = createClient;
  exports.default = deprecatedCreateClient;
  exports.requester = requester;
  exports.unstable__adapter = c$2;
  exports.unstable__environment = f$1;
  exports.validateApiPerspective = validateApiPerspective;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
