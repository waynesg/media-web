const je="modulepreload",Re=function(D){return"/"+D},ge={},qe=function(Y,_,O){if(!_||_.length===0)return Y();const q=document.getElementsByTagName("link");return Promise.all(_.map(v=>{if(v=Re(v),v in ge)return;ge[v]=!0;const m=v.endsWith(".css"),k=m?'[rel="stylesheet"]':"";if(!!O)for(let U=q.length-1;U>=0;U--){const S=q[U];if(S.href===v&&(!m||S.rel==="stylesheet"))return}else if(document.querySelector(`link[href="${v}"]${k}`))return;const E=document.createElement("link");if(E.rel=m?"stylesheet":je,m||(E.as="script",E.crossOrigin=""),E.href=v,document.head.appendChild(E),m)return new Promise((U,S)=>{E.addEventListener("load",U),E.addEventListener("error",()=>S(new Error(`Unable to preload CSS for ${v}`)))})})).then(()=>Y()).catch(v=>{const m=new Event("vite:preloadError",{cancelable:!0});if(m.payload=v,window.dispatchEvent(m),!m.defaultPrevented)throw v})};var Ae=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function Ue(D){return D&&D.__esModule&&Object.prototype.hasOwnProperty.call(D,"default")?D.default:D}var we={exports:{}};(function(D,Y){(function(_,O){D.exports=O()})(Ae,function(){function _(t){return(_=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(e){return typeof e}:function(e){return e&&typeof Symbol=="function"&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(t)}function O(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}function q(t,e){for(var r=0;r<e.length;r++){var u=e[r];u.enumerable=u.enumerable||!1,u.configurable=!0,"value"in u&&(u.writable=!0),Object.defineProperty(t,u.key,u)}}function v(t,e,r){e&&q(t.prototype,e),r&&q(t,r),Object.defineProperty(t,"prototype",{writable:!1})}function m(t,e,r){e in t?Object.defineProperty(t,e,{value:r,enumerable:!0,configurable:!0,writable:!0}):t[e]=r}function k(t,e){if(typeof e!="function"&&e!==null)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),Object.defineProperty(t,"prototype",{writable:!1}),e&&E(t,e)}function M(t){return(M=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(e){return e.__proto__||Object.getPrototypeOf(e)})(t)}function E(t,e){return(E=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,u){return r.__proto__=u,r})(t,e)}function U(t,e){if(e&&(typeof e=="object"||typeof e=="function"))return e;if(e!==void 0)throw new TypeError("Derived constructors may only return object or undefined");if(e=t,e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function S(t){var e=function(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}();return function(){var r,u=M(t);return U(this,e?(r=M(this).constructor,Reflect.construct(u,arguments,r)):u.apply(this,arguments))}}function Q(t,e){(e==null||e>t.length)&&(e=t.length);for(var r=0,u=new Array(e);r<e;r++)u[r]=t[r];return u}function ee(t,e){var r,u=typeof Symbol<"u"&&t[Symbol.iterator]||t["@@iterator"];if(!u){if(Array.isArray(t)||(u=function(n,a){if(n){if(typeof n=="string")return Q(n,a);var c=Object.prototype.toString.call(n).slice(8,-1);return(c=c==="Object"&&n.constructor?n.constructor.name:c)==="Map"||c==="Set"?Array.from(n):c==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(c)?Q(n,a):void 0}}(t))||e&&t&&typeof t.length=="number")return u&&(t=u),r=0,{s:e=function(){},n:function(){return r>=t.length?{done:!0}:{done:!1,value:t[r++]}},e:function(n){throw n},f:e};throw new TypeError(`Invalid attempt to iterate non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}var l,o=!0,f=!1;return{s:function(){u=u.call(t)},n:function(){var n=u.next();return o=n.done,n},e:function(n){f=!0,l=n},f:function(){try{o||u.return==null||u.return()}finally{if(f)throw l}}}}function te(){if(d.url)window.location.href=d.url;else if(d.rewriteHTML)try{document.documentElement.innerHTML=d.rewriteHTML}catch{document.documentElement.innerText=d.rewriteHTML}else{try{window.opener=null,window.open("","_self"),window.close(),window.history.back()}catch(t){console.log(t)}setTimeout(function(){window.location.href=d.timeOutUrl||"https://theajack.github.io/disable-devtool/404.html?h=".concat(encodeURIComponent(location.host))},500)}}var d={md5:"",ondevtoolopen:te,ondevtoolclose:null,url:"",timeOutUrl:"",tkName:"ddtk",interval:500,disableMenu:!0,stopIntervalTime:5e3,clearIntervalWhenDevOpenTrigger:!1,detectors:[0,1,3,4,5,6,7],clearLog:!0,disableSelect:!1,disableCopy:!1,disableCut:!1,disablePaste:!1,ignore:null,disableIframeParents:!0,seo:!0,rewriteHTML:""},be=["detectors","ondevtoolclose","ignore"];function Te(t){var e,r=0<arguments.length&&t!==void 0?t:{};for(e in d){var u=e;r[u]===void 0||_(d[u])!==_(r[u])&&be.indexOf(u)===-1||(d[u]=r[u])}typeof d.ondevtoolclose=="function"&&d.clearIntervalWhenDevOpenTrigger===!0&&(d.clearIntervalWhenDevOpenTrigger=!1,console.warn("【DISABLE-DEVTOOL】clearIntervalWhenDevOpenTrigger 在使用 ondevtoolclose 时无效"))}function W(){return new Date().getTime()}function ne(t){var e=W();return t(),W()-e}function Oe(t,e){function r(f){return function(){t&&t();var n=f.apply(void 0,arguments);return e&&e(),n}}var u=window.alert,l=window.confirm,o=window.prompt;try{window.alert=r(u),window.confirm=r(l),window.prompt=r(o)}catch{}}var p={iframe:!1,pc:!1,qqBrowser:!1,firefox:!1,macos:!1,edge:!1,oldEdge:!1,ie:!1,iosChrome:!1,iosEdge:!1,chrome:!1,seoBot:!1,mobile:!1};function Se(){function t(R){return e.indexOf(R)!==-1}var e=navigator.userAgent.toLowerCase(),r=function(){var A=navigator,R=A.platform,A=A.maxTouchPoints;if(typeof A=="number")return 1<A;if(typeof R=="string"){if(A=R.toLowerCase(),/(mac|win)/i.test(A))return!1;if(/(android|iphone|ipad|ipod|arch)/i.test(A))return!0}return/(iphone|ipad|ipod|ios|android)/i.test(navigator.userAgent.toLowerCase())}(),u=!!window.top&&window!==window.top,l=!r,o=t("qqbrowser"),f=t("firefox"),n=t("macintosh"),a=t("edge"),c=a&&!t("chrome"),i=c||t("trident")||t("msie"),s=t("crios"),B=t("edgios"),j=t("chrome")||s,z=!r&&/(googlebot|baiduspider|bingbot|applebot|petalbot|yandexbot|bytespider|chrome\-lighthouse|moto g power)/i.test(e);Object.assign(p,{iframe:u,pc:l,qqBrowser:o,firefox:f,macos:n,edge:a,oldEdge:c,ie:i,iosChrome:s,iosEdge:B,chrome:j,seoBot:z,mobile:r})}function De(){for(var t=function(){for(var u={},l=0;l<500;l++)u["".concat(l)]="".concat(l);return u}(),e=[],r=0;r<50;r++)e.push(t);return e}var x,$,oe,I=window.console||{log:function(){},table:function(){},clear:function(){}};function V(){d.clearLog&&oe()}var re="",ie=!1;function ae(){var t=d.ignore;if(t){if(typeof t=="function")return t();if(t.length!==0){var e=location.href;if(re===e)return ie;re=e;var r,u=!1,l=ee(t);try{for(l.s();!(r=l.n()).done;){var o=r.value;if(typeof o=="string"){if(e.indexOf(o)!==-1){u=!0;break}}else if(o.test(e)){u=!0;break}}}catch(f){l.e(f)}finally{l.f()}return ie=u}}}var ce=function(){return!1};function X(t){var e,r,u=74,l=73,o=85,f=83,n=123,a=p.macos?function(i,s){return i.metaKey&&i.altKey&&(s===l||s===u)}:function(i,s){return i.ctrlKey&&i.shiftKey&&(s===l||s===u)},c=p.macos?function(i,s){return i.metaKey&&i.altKey&&s===o||i.metaKey&&s===f}:function(i,s){return i.ctrlKey&&(s===f||s===o)};t.addEventListener("keydown",function(i){var s=(i=i||t.event).keyCode||i.which;if(s===n||a(i,s)||c(i,s))return Z(t,i)},!0),e=t,d.disableMenu&&e.addEventListener("contextmenu",function(i){if(i.pointerType!=="touch")return Z(e,i)}),r=t,d.disableSelect&&F(r,"selectstart"),r=t,d.disableCopy&&F(r,"copy"),r=t,d.disableCut&&F(r,"cut"),r=t,d.disablePaste&&F(r,"paste")}function F(t,e){t.addEventListener(e,function(r){return Z(t,r)})}function Z(t,e){if(!ae()&&!ce())return(e=e||t.event).returnValue=!1,e.preventDefault(),!1}var y,J=!1,N={};function ue(t){N[t]=!1}function se(){for(var t in N)if(N[t])return J=!0;return J=!1}(h=y=y||{})[h.Unknown=-1]="Unknown",h[h.RegToString=0]="RegToString",h[h.DefineId=1]="DefineId",h[h.Size=2]="Size",h[h.DateToString=3]="DateToString",h[h.FuncToString=4]="FuncToString",h[h.Debugger=5]="Debugger",h[h.Performance=6]="Performance",h[h.DebugLib=7]="DebugLib";var L=function(){function t(u){var r=u.type,u=u.enabled,u=u===void 0||u;O(this,t),this.type=y.Unknown,this.enabled=!0,this.type=r,this.enabled=u,this.enabled&&(r=this,ve.push(r),this.init())}return v(t,[{key:"onDevToolOpen",value:function(){var e;console.warn("You don't have permission to use DEVTOOL!【type = ".concat(this.type,"】")),d.clearIntervalWhenDevOpenTrigger&&he(),window.clearTimeout(de),d.ondevtoolopen(this.type,te),e=this.type,N[e]=!0}},{key:"init",value:function(){}}]),t}(),le=function(){k(e,L);var t=S(e);function e(){return O(this,e),t.call(this,{type:y.DebugLib})}return v(e,[{key:"init",value:function(){}},{key:"detect",value:function(){var r;(((r=(r=window.eruda)==null?void 0:r._devTools)==null?void 0:r._isShow)===!0||window._vcOrigConsole&&window.document.querySelector("#__vconsole.vc-toggle"))&&this.onDevToolOpen()}}],[{key:"isUsing",value:function(){return!!window.eruda||!!window._vcOrigConsole}}]),e}(),fe=0,de=0,ve=[],ke=0;function Ee(t){function e(){c=!0}function r(){c=!1}var u,l,o,f,n,a,c=!1;function i(){(a[f]===o?l:u)()}Oe(e,r),u=r,l=e,(a=document).hidden!==void 0?(o="hidden",n="visibilitychange",f="visibilityState"):a.mozHidden!==void 0?(o="mozHidden",n="mozvisibilitychange",f="mozVisibilityState"):a.msHidden!==void 0?(o="msHidden",n="msvisibilitychange",f="msVisibilityState"):a.webkitHidden!==void 0&&(o="webkitHidden",n="webkitvisibilitychange",f="webkitVisibilityState"),a.removeEventListener(n,i,!1),a.addEventListener(n,i,!1),fe=window.setInterval(function(){if(!(t.isSuspend||c||ae())){var s,B,j=ee(ve);try{for(j.s();!(s=j.n()).done;){var z=s.value;ue(z.type),z.detect(ke++)}}catch(R){j.e(R)}finally{j.f()}V(),typeof d.ondevtoolclose=="function"&&(B=J,!se()&&B&&d.ondevtoolclose())}},d.interval),de=setTimeout(function(){p.pc||le.isUsing()||he()},d.stopIntervalTime)}function he(){window.clearInterval(fe)}var K=8;function pe(t){for(var e=function(o,f){o[f>>5]|=128<<f%32,o[14+(f+64>>>9<<4)]=f;for(var n=1732584193,a=-271733879,c=-1732584194,i=271733878,s=0;s<o.length;s+=16){var B=n,j=a,z=c,R=i;n=g(n,a,c,i,o[s+0],7,-680876936),i=g(i,n,a,c,o[s+1],12,-389564586),c=g(c,i,n,a,o[s+2],17,606105819),a=g(a,c,i,n,o[s+3],22,-1044525330),n=g(n,a,c,i,o[s+4],7,-176418897),i=g(i,n,a,c,o[s+5],12,1200080426),c=g(c,i,n,a,o[s+6],17,-1473231341),a=g(a,c,i,n,o[s+7],22,-45705983),n=g(n,a,c,i,o[s+8],7,1770035416),i=g(i,n,a,c,o[s+9],12,-1958414417),c=g(c,i,n,a,o[s+10],17,-42063),a=g(a,c,i,n,o[s+11],22,-1990404162),n=g(n,a,c,i,o[s+12],7,1804603682),i=g(i,n,a,c,o[s+13],12,-40341101),c=g(c,i,n,a,o[s+14],17,-1502002290),a=g(a,c,i,n,o[s+15],22,1236535329),n=w(n,a,c,i,o[s+1],5,-165796510),i=w(i,n,a,c,o[s+6],9,-1069501632),c=w(c,i,n,a,o[s+11],14,643717713),a=w(a,c,i,n,o[s+0],20,-373897302),n=w(n,a,c,i,o[s+5],5,-701558691),i=w(i,n,a,c,o[s+10],9,38016083),c=w(c,i,n,a,o[s+15],14,-660478335),a=w(a,c,i,n,o[s+4],20,-405537848),n=w(n,a,c,i,o[s+9],5,568446438),i=w(i,n,a,c,o[s+14],9,-1019803690),c=w(c,i,n,a,o[s+3],14,-187363961),a=w(a,c,i,n,o[s+8],20,1163531501),n=w(n,a,c,i,o[s+13],5,-1444681467),i=w(i,n,a,c,o[s+2],9,-51403784),c=w(c,i,n,a,o[s+7],14,1735328473),a=w(a,c,i,n,o[s+12],20,-1926607734),n=b(n,a,c,i,o[s+5],4,-378558),i=b(i,n,a,c,o[s+8],11,-2022574463),c=b(c,i,n,a,o[s+11],16,1839030562),a=b(a,c,i,n,o[s+14],23,-35309556),n=b(n,a,c,i,o[s+1],4,-1530992060),i=b(i,n,a,c,o[s+4],11,1272893353),c=b(c,i,n,a,o[s+7],16,-155497632),a=b(a,c,i,n,o[s+10],23,-1094730640),n=b(n,a,c,i,o[s+13],4,681279174),i=b(i,n,a,c,o[s+0],11,-358537222),c=b(c,i,n,a,o[s+3],16,-722521979),a=b(a,c,i,n,o[s+6],23,76029189),n=b(n,a,c,i,o[s+9],4,-640364487),i=b(i,n,a,c,o[s+12],11,-421815835),c=b(c,i,n,a,o[s+15],16,530742520),a=b(a,c,i,n,o[s+2],23,-995338651),n=T(n,a,c,i,o[s+0],6,-198630844),i=T(i,n,a,c,o[s+7],10,1126891415),c=T(c,i,n,a,o[s+14],15,-1416354905),a=T(a,c,i,n,o[s+5],21,-57434055),n=T(n,a,c,i,o[s+12],6,1700485571),i=T(i,n,a,c,o[s+3],10,-1894986606),c=T(c,i,n,a,o[s+10],15,-1051523),a=T(a,c,i,n,o[s+1],21,-2054922799),n=T(n,a,c,i,o[s+8],6,1873313359),i=T(i,n,a,c,o[s+15],10,-30611744),c=T(c,i,n,a,o[s+6],15,-1560198380),a=T(a,c,i,n,o[s+13],21,1309151649),n=T(n,a,c,i,o[s+4],6,-145523070),i=T(i,n,a,c,o[s+11],10,-1120210379),c=T(c,i,n,a,o[s+2],15,718787259),a=T(a,c,i,n,o[s+9],21,-343485551),n=C(n,B),a=C(a,j),c=C(c,z),i=C(i,R)}return Array(n,a,c,i)}(function(o){for(var f=Array(),n=(1<<K)-1,a=0;a<o.length*K;a+=K)f[a>>5]|=(o.charCodeAt(a/K)&n)<<a%32;return f}(t),t.length*K),r="0123456789abcdef",u="",l=0;l<4*e.length;l++)u+=r.charAt(e[l>>2]>>l%4*8+4&15)+r.charAt(e[l>>2]>>l%4*8&15);return u}function G(t,e,r,u,l,o){return C((e=C(C(e,t),C(u,o)))<<l|e>>>32-l,r)}function g(t,e,r,u,l,o,f){return G(e&r|~e&u,t,e,l,o,f)}function w(t,e,r,u,l,o,f){return G(e&u|r&~u,t,e,l,o,f)}function b(t,e,r,u,l,o,f){return G(e^r^u,t,e,l,o,f)}function T(t,e,r,u,l,o,f){return G(r^(e|~u),t,e,l,o,f)}function C(t,e){var r=(65535&t)+(65535&e);return(t>>16)+(e>>16)+(r>>16)<<16|65535&r}var h=function(){k(e,L);var t=S(e);function e(){return O(this,e),t.call(this,{type:y.RegToString,enabled:p.qqBrowser||p.firefox})}return v(e,[{key:"init",value:function(){var r=this;this.lastTime=0,this.reg=/./,x(this.reg),this.reg.toString=function(){var u;return p.qqBrowser?(u=new Date().getTime(),r.lastTime&&u-r.lastTime<100?r.onDevToolOpen():r.lastTime=u):p.firefox&&r.onDevToolOpen(),""}}},{key:"detect",value:function(){x(this.reg)}}]),e}(),Pe=function(){k(e,L);var t=S(e);function e(){return O(this,e),t.call(this,{type:y.DefineId})}return v(e,[{key:"init",value:function(){var r=this;this.div=document.createElement("div"),this.div.__defineGetter__("id",function(){r.onDevToolOpen()}),Object.defineProperty(this.div,"id",{get:function(){r.onDevToolOpen()}})}},{key:"detect",value:function(){x(this.div)}}]),e}(),_e=function(){k(e,L);var t=S(e);function e(){return O(this,e),t.call(this,{type:y.Size,enabled:!p.iframe&&!p.edge})}return v(e,[{key:"init",value:function(){var r=this;this.checkWindowSizeUneven(),window.addEventListener("resize",function(){setTimeout(function(){r.checkWindowSizeUneven()},100)},!0)}},{key:"detect",value:function(){}},{key:"checkWindowSizeUneven",value:function(){var r=function(){if(ye(window.devicePixelRatio))return window.devicePixelRatio;var l=window.screen;return!(ye(l)||!l.deviceXDPI||!l.logicalXDPI)&&l.deviceXDPI/l.logicalXDPI}();if(r!==!1){var u=200<window.outerWidth-window.innerWidth*r,r=300<window.outerHeight-window.innerHeight*r;if(u||r)return this.onDevToolOpen(),!1;ue(this.type)}return!0}}]),e}();function ye(t){return t!=null}var P,xe=function(){k(e,L);var t=S(e);function e(){return O(this,e),t.call(this,{type:y.DateToString,enabled:!p.iosChrome&&!p.iosEdge})}return v(e,[{key:"init",value:function(){var r=this;this.count=0,this.date=new Date,this.date.toString=function(){return r.count++,""}}},{key:"detect",value:function(){this.count=0,x(this.date),V(),2<=this.count&&this.onDevToolOpen()}}]),e}(),Ie=function(){k(e,L);var t=S(e);function e(){return O(this,e),t.call(this,{type:y.FuncToString,enabled:!p.iosChrome&&!p.iosEdge})}return v(e,[{key:"init",value:function(){var r=this;this.count=0,this.func=function(){},this.func.toString=function(){return r.count++,""}}},{key:"detect",value:function(){this.count=0,x(this.func),V(),2<=this.count&&this.onDevToolOpen()}}]),e}(),Le=function(){k(e,L);var t=S(e);function e(){return O(this,e),t.call(this,{type:y.Debugger,enabled:p.iosChrome||p.iosEdge})}return v(e,[{key:"detect",value:function(){var r=W();100<W()-r&&this.onDevToolOpen()}}]),e}(),Ce=function(){k(e,L);var t=S(e);function e(){return O(this,e),t.call(this,{type:y.Performance,enabled:p.chrome||!p.mobile})}return v(e,[{key:"init",value:function(){this.maxPrintTime=0,this.largeObjectArray=De()}},{key:"detect",value:function(){var r=this,u=ne(function(){$(r.largeObjectArray)}),l=ne(function(){x(r.largeObjectArray)});if(this.maxPrintTime=Math.max(this.maxPrintTime,l),V(),u===0||this.maxPrintTime===0)return!1;u>10*this.maxPrintTime&&this.onDevToolOpen()}}]),e}(),me=(m(P={},y.RegToString,h),m(P,y.DefineId,Pe),m(P,y.Size,_e),m(P,y.DateToString,xe),m(P,y.FuncToString,Ie),m(P,y.Debugger,Le),m(P,y.Performance,Ce),m(P,y.DebugLib,le),P),H=Object.assign(function(t){function e(){var o=0<arguments.length&&arguments[0]!==void 0?arguments[0]:"";return{success:!o,reason:o}}if(H.isRunning)return e("already running");if(Se(),oe=p.ie?(x=function(){return I.log.apply(I,arguments)},$=function(){return I.table.apply(I,arguments)},function(){return I.clear()}):(x=I.log,$=I.table,I.clear),Te(t),d.md5&&pe(function(o){var f=window.location.search,n=window.location.hash;return(f=f===""&&n!==""?"?".concat(n.split("?")[1]):f)!==""&&f!==void 0&&(n=new RegExp("(^|&)"+o+"=([^&]*)(&|$)","i"),o=f.substr(1).match(n),o!=null)?unescape(o[2]):""}(d.tkName))===d.md5)return e("token passed");if(d.seo&&p.seoBot)return e("seobot");H.isRunning=!0,Ee(H);var r=H,u=(ce=function(){return r.isSuspend},window.top),l=window.parent;if(X(window),d.disableIframeParents&&u&&l&&u!==window){for(;l!==u;)X(l),l=l.parent;X(u)}return(d.detectors==="all"?Object.keys(me):d.detectors).forEach(function(o){new me[o]}),e()},{isRunning:!1,isSuspend:!1,md5:pe,version:"0.3.7",DetectorType:y,isDevToolOpened:se});return h=function(){if(typeof window>"u"||!window.document)return null;var t=document.querySelector("[disable-devtool-auto]");if(!t)return null;var e=["disable-menu","disable-select","disable-copy","disable-cut","disable-paste","clear-log"],r=["interval"],u={};return["md5","url","tk-name","detectors"].concat(e,r).forEach(function(l){var o=t.getAttribute(l);o!==null&&(r.indexOf(l)!==-1?o=parseInt(o):e.indexOf(l)!==-1?o=o!=="false":l==="detector"&&o!=="all"&&(o=o.split(" ")),u[function(f){if(f.indexOf("-")===-1)return f;var n=!1;return f.split("").map(function(a){return a==="-"?(n=!0,""):n?(n=!1,a.toUpperCase()):a}).join("")}(l)]=o)}),u}(),h&&H(h),H})})(we);var He=we.exports;const Ke=Ue(He),Be=/debug/i.test(window.location.href),ze=navigator.userAgent.includes("Chrome")&&!navigator.userAgent.includes("Chromium")&&!navigator.userAgent.includes("Edg"),Me=(!/Linux/i.test(navigator.platform)||!ze)&&!Be,We="TV_THEME",Ve="GODTV_AUTH",Fe="UNLOOP_KEY",Ne={bfzym3u8:"BF",hhm3u8:"HH",ffm3u8:"FF",lzm3u8:"LZ",snm3u8:"SN",kcm3u8:"KC"};export{Ve as A,Ke as D,Be as I,Ne as R,We as S,Fe as U,qe as _,Me as a,Ae as c,Ue as g};
