import{_ as ge,m as Ne,h as It,j as jt,k as Vt,g as U,t as ht,s as Ge,p as Dt,v as Wt,L as xe,a1 as Ye,q as mt,e as pt,l as Nt,i as Gt,o as Ht,w as bt,x as yt,N as qt,a2 as Kt,a3 as Ut,Z as Xe,G as Yt,u as Xt,a4 as Zt,W as Me,a5 as Jt,Y as Ze}from"./Player.vue_vue_type_style_index_0_scoped_e26564da_lang-dfeb7c19.js";import{d as I,a as y,s as re,o as T,b as q,j as te,l as je,n as K,r as g,J as ce,w as ue,p,R as se,K as Qt,B as Ve,e as Rt,f as en,z as De,G as le,A as gt,C as _t,F as wt,g as _e,D as He,i as Ct,Y as tn,W as nn,U as on,m as rn,v as ln}from"./runtime-dom.esm-bundler-75af5957.js";var Ot=function(){if(typeof Map<"u")return Map;function e(t,n){var o=-1;return t.some(function(r,l){return r[0]===n?(o=l,!0):!1}),o}return function(){function t(){this.__entries__=[]}return Object.defineProperty(t.prototype,"size",{get:function(){return this.__entries__.length},enumerable:!0,configurable:!0}),t.prototype.get=function(n){var o=e(this.__entries__,n),r=this.__entries__[o];return r&&r[1]},t.prototype.set=function(n,o){var r=e(this.__entries__,n);~r?this.__entries__[r][1]=o:this.__entries__.push([n,o])},t.prototype.delete=function(n){var o=this.__entries__,r=e(o,n);~r&&o.splice(r,1)},t.prototype.has=function(n){return!!~e(this.__entries__,n)},t.prototype.clear=function(){this.__entries__.splice(0)},t.prototype.forEach=function(n,o){o===void 0&&(o=null);for(var r=0,l=this.__entries__;r<l.length;r++){var i=l[r];n.call(o,i[1],i[0])}},t}()}(),We=typeof window<"u"&&typeof document<"u"&&window.document===document,be=function(){return typeof global<"u"&&global.Math===Math?global:typeof self<"u"&&self.Math===Math?self:typeof window<"u"&&window.Math===Math?window:Function("return this")()}(),an=function(){return typeof requestAnimationFrame=="function"?requestAnimationFrame.bind(be):function(e){return setTimeout(function(){return e(Date.now())},1e3/60)}}(),sn=2;function un(e,t){var n=!1,o=!1,r=0;function l(){n&&(n=!1,e()),o&&c()}function i(){an(l)}function c(){var a=Date.now();if(n){if(a-r<sn)return;o=!0}else n=!0,o=!1,setTimeout(i,t);r=a}return c}var cn=20,fn=["top","right","bottom","left","width","height","size","weight"],dn=typeof MutationObserver<"u",vn=function(){function e(){this.connected_=!1,this.mutationEventsAdded_=!1,this.mutationsObserver_=null,this.observers_=[],this.onTransitionEnd_=this.onTransitionEnd_.bind(this),this.refresh=un(this.refresh.bind(this),cn)}return e.prototype.addObserver=function(t){~this.observers_.indexOf(t)||this.observers_.push(t),this.connected_||this.connect_()},e.prototype.removeObserver=function(t){var n=this.observers_,o=n.indexOf(t);~o&&n.splice(o,1),!n.length&&this.connected_&&this.disconnect_()},e.prototype.refresh=function(){var t=this.updateObservers_();t&&this.refresh()},e.prototype.updateObservers_=function(){var t=this.observers_.filter(function(n){return n.gatherActive(),n.hasActive()});return t.forEach(function(n){return n.broadcastActive()}),t.length>0},e.prototype.connect_=function(){!We||this.connected_||(document.addEventListener("transitionend",this.onTransitionEnd_),window.addEventListener("resize",this.refresh),dn?(this.mutationsObserver_=new MutationObserver(this.refresh),this.mutationsObserver_.observe(document,{attributes:!0,childList:!0,characterData:!0,subtree:!0})):(document.addEventListener("DOMSubtreeModified",this.refresh),this.mutationEventsAdded_=!0),this.connected_=!0)},e.prototype.disconnect_=function(){!We||!this.connected_||(document.removeEventListener("transitionend",this.onTransitionEnd_),window.removeEventListener("resize",this.refresh),this.mutationsObserver_&&this.mutationsObserver_.disconnect(),this.mutationEventsAdded_&&document.removeEventListener("DOMSubtreeModified",this.refresh),this.mutationsObserver_=null,this.mutationEventsAdded_=!1,this.connected_=!1)},e.prototype.onTransitionEnd_=function(t){var n=t.propertyName,o=n===void 0?"":n,r=fn.some(function(l){return!!~o.indexOf(l)});r&&this.refresh()},e.getInstance=function(){return this.instance_||(this.instance_=new e),this.instance_},e.instance_=null,e}(),St=function(e,t){for(var n=0,o=Object.keys(t);n<o.length;n++){var r=o[n];Object.defineProperty(e,r,{value:t[r],enumerable:!1,writable:!1,configurable:!0})}return e},ne=function(e){var t=e&&e.ownerDocument&&e.ownerDocument.defaultView;return t||be},$t=we(0,0,0,0);function ye(e){return parseFloat(e)||0}function Je(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return t.reduce(function(o,r){var l=e["border-"+r+"-width"];return o+ye(l)},0)}function hn(e){for(var t=["top","right","bottom","left"],n={},o=0,r=t;o<r.length;o++){var l=r[o],i=e["padding-"+l];n[l]=ye(i)}return n}function mn(e){var t=e.getBBox();return we(0,0,t.width,t.height)}function pn(e){var t=e.clientWidth,n=e.clientHeight;if(!t&&!n)return $t;var o=ne(e).getComputedStyle(e),r=hn(o),l=r.left+r.right,i=r.top+r.bottom,c=ye(o.width),a=ye(o.height);if(o.boxSizing==="border-box"&&(Math.round(c+l)!==t&&(c-=Je(o,"left","right")+l),Math.round(a+i)!==n&&(a-=Je(o,"top","bottom")+i)),!yn(e)){var d=Math.round(c+l)-t,h=Math.round(a+i)-n;Math.abs(d)!==1&&(c-=d),Math.abs(h)!==1&&(a-=h)}return we(r.left,r.top,c,a)}var bn=function(){return typeof SVGGraphicsElement<"u"?function(e){return e instanceof ne(e).SVGGraphicsElement}:function(e){return e instanceof ne(e).SVGElement&&typeof e.getBBox=="function"}}();function yn(e){return e===ne(e).document.documentElement}function gn(e){return We?bn(e)?mn(e):pn(e):$t}function _n(e){var t=e.x,n=e.y,o=e.width,r=e.height,l=typeof DOMRectReadOnly<"u"?DOMRectReadOnly:Object,i=Object.create(l.prototype);return St(i,{x:t,y:n,width:o,height:r,top:n,right:t+o,bottom:r+n,left:t}),i}function we(e,t,n,o){return{x:e,y:t,width:n,height:o}}var wn=function(){function e(t){this.broadcastWidth=0,this.broadcastHeight=0,this.contentRect_=we(0,0,0,0),this.target=t}return e.prototype.isActive=function(){var t=gn(this.target);return this.contentRect_=t,t.width!==this.broadcastWidth||t.height!==this.broadcastHeight},e.prototype.broadcastRect=function(){var t=this.contentRect_;return this.broadcastWidth=t.width,this.broadcastHeight=t.height,t},e}(),Cn=function(){function e(t,n){var o=_n(n);St(this,{target:t,contentRect:o})}return e}(),On=function(){function e(t,n,o){if(this.activeObservations_=[],this.observations_=new Ot,typeof t!="function")throw new TypeError("The callback provided as parameter 1 is not a function.");this.callback_=t,this.controller_=n,this.callbackCtx_=o}return e.prototype.observe=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof ne(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)||(n.set(t,new wn(t)),this.controller_.addObserver(this),this.controller_.refresh())}},e.prototype.unobserve=function(t){if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");if(!(typeof Element>"u"||!(Element instanceof Object))){if(!(t instanceof ne(t).Element))throw new TypeError('parameter 1 is not of type "Element".');var n=this.observations_;n.has(t)&&(n.delete(t),n.size||this.controller_.removeObserver(this))}},e.prototype.disconnect=function(){this.clearActive(),this.observations_.clear(),this.controller_.removeObserver(this)},e.prototype.gatherActive=function(){var t=this;this.clearActive(),this.observations_.forEach(function(n){n.isActive()&&t.activeObservations_.push(n)})},e.prototype.broadcastActive=function(){if(this.hasActive()){var t=this.callbackCtx_,n=this.activeObservations_.map(function(o){return new Cn(o.target,o.broadcastRect())});this.callback_.call(t,n,t),this.clearActive()}},e.prototype.clearActive=function(){this.activeObservations_.splice(0)},e.prototype.hasActive=function(){return this.activeObservations_.length>0},e}(),Et=typeof WeakMap<"u"?new WeakMap:new Ot,Tt=function(){function e(t){if(!(this instanceof e))throw new TypeError("Cannot call a class as a function.");if(!arguments.length)throw new TypeError("1 argument required, but only 0 present.");var n=vn.getInstance(),o=new On(t,n,this);Et.set(this,o)}return e}();["observe","unobserve","disconnect"].forEach(function(e){Tt.prototype[e]=function(){var t;return(t=Et.get(this))[e].apply(t,arguments)}});var Bt=function(){return typeof be.ResizeObserver<"u"?be.ResizeObserver:Tt}();const Pt=typeof window>"u"?global:window,Sn=Pt.requestAnimationFrame,Qe=Pt.cancelAnimationFrame;function Re(e){let t=0;const n=(...o)=>{t&&Qe(t),t=Sn(()=>{e(...o),t=0})};return n.cancel=()=>{Qe(t),t=0},n}const $n=I({name:"FeedbackIcon",components:{IconLoading:Ne,IconCheckCircleFill:It,IconExclamationCircleFill:jt,IconCloseCircleFill:Vt},props:{type:{type:String}},setup(e){const t=U("feedback-icon");return{cls:y(()=>[t,`${t}-status-${e.type}`])}}});function En(e,t,n,o,r,l){const i=re("icon-loading"),c=re("icon-check-circle-fill"),a=re("icon-exclamation-circle-fill"),d=re("icon-close-circle-fill");return T(),q("span",{class:K(e.cls)},[e.type==="validating"?(T(),te(i,{key:0})):e.type==="success"?(T(),te(c,{key:1})):e.type==="warning"?(T(),te(a,{key:2})):e.type==="error"?(T(),te(d,{key:3})):je("v-if",!0)],2)}var Tn=ge($n,[["render",En]]);const Bn={key:"Enter",code:"Enter"};var Pn=Object.defineProperty,et=Object.getOwnPropertySymbols,zn=Object.prototype.hasOwnProperty,kn=Object.prototype.propertyIsEnumerable,tt=(e,t,n)=>t in e?Pn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,xn=(e,t)=>{for(var n in t||(t={}))zn.call(t,n)&&tt(e,n,t[n]);if(et)for(var n of et(t))kn.call(t,n)&&tt(e,n,t[n]);return e};const zt=(e,t)=>{const n=xn({},e);for(const o of t)o in n&&delete n[o];return n};function Mn(e,t){const n={};return t.forEach(o=>{const r=o;o in e&&(n[r]=e[r])}),n}function Ln(e){const t=g();function n(){if(!e.value)return;const{selectionStart:r,selectionEnd:l,value:i}=e.value;if(r==null||l==null)return;const c=i.slice(0,Math.max(0,r)),a=i.slice(Math.max(0,l));t.value={selectionStart:r,selectionEnd:l,value:i,beforeTxt:c,afterTxt:a}}function o(){if(!e.value||!t.value)return;const{value:r}=e.value,{beforeTxt:l,afterTxt:i,selectionStart:c}=t.value;if(!l||!i||!c)return;let a=r.length;if(r.endsWith(i))a=r.length-i.length;else if(r.startsWith(l))a=l.length;else{const d=l[c-1],h=r.indexOf(d,c-1);h!==-1&&(a=h+1)}e.value.setSelectionRange(a,a)}return[n,o]}var An=Object.defineProperty,nt=Object.getOwnPropertySymbols,Fn=Object.prototype.hasOwnProperty,In=Object.prototype.propertyIsEnumerable,ot=(e,t,n)=>t in e?An(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,rt=(e,t)=>{for(var n in t||(t={}))Fn.call(t,n)&&ot(e,n,t[n]);if(nt)for(var n of nt(t))In.call(t,n)&&ot(e,n,t[n]);return e},jn=I({name:"Input",inheritAttrs:!1,props:{modelValue:String,defaultValue:{type:String,default:""},size:{type:String},allowClear:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},readonly:{type:Boolean,default:!1},error:{type:Boolean,default:!1},placeholder:String,maxLength:{type:[Number,Object],default:0},showWordLimit:{type:Boolean,default:!1},wordLength:{type:Function},wordSlice:{type:Function},inputAttrs:{type:Object},type:{type:String,default:"text"}},emits:{"update:modelValue":e=>!0,input:(e,t)=>!0,change:(e,t)=>!0,pressEnter:e=>!0,clear:e=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:t,slots:n,attrs:o}){const{size:r,disabled:l,error:i,modelValue:c}=ce(e),a=U("input"),d=g(),{mergedSize:h,mergedDisabled:v,mergedError:B,feedback:w,eventHandlers:z}=ht({size:r,disabled:l,error:i}),{mergedSize:x}=Ge(h),[D,W]=Ln(d),L=g(e.defaultValue),P=y(()=>{var u;return(u=e.modelValue)!=null?u:L.value});ue(c,u=>{(Dt(u)||Wt(u))&&(L.value="")});let $=P.value;const j=g(!1),Y=y(()=>e.allowClear&&!e.readonly&&!v.value&&!!P.value),b=g(!1),fe=g(""),A=u=>{var m;return mt(e.wordLength)?e.wordLength(u):(m=u.length)!=null?m:0},X=y(()=>A(P.value)),V=y(()=>B.value||!!(xe(e.maxLength)&&e.maxLength.errorOnly&&X.value>C.value)),k=y(()=>xe(e.maxLength)&&!!e.maxLength.errorOnly),C=y(()=>xe(e.maxLength)?e.maxLength.length:e.maxLength),Ce=y(()=>{const u=A("a");return Math.floor(C.value/u)}),N=u=>{var m,_;C.value&&!k.value&&A(u)>C.value&&(u=(_=(m=e.wordSlice)==null?void 0:m.call(e,u,C.value))!=null?_:u.slice(0,Ce.value)),L.value=u,t("update:modelValue",u)},F=u=>{d.value&&u.target!==d.value&&(u.preventDefault(),d.value.focus())},O=(u,m)=>{var _,E;u!==$&&($=u,t("change",u,m),(E=(_=z.value)==null?void 0:_.onChange)==null||E.call(_,m))},Oe=u=>{var m,_;j.value=!0,$=P.value,t("focus",u),(_=(m=z.value)==null?void 0:m.onFocus)==null||_.call(m,u)},de=u=>{var m,_;j.value=!1,O(P.value,u),t("blur",u),(_=(m=z.value)==null?void 0:m.onBlur)==null||_.call(m,u)},Z=u=>{var m,_,E;const{value:oe,selectionStart:Pe,selectionEnd:ze}=u.target;if(u.type==="compositionend"){if(b.value=!1,fe.value="",C.value&&!k.value&&X.value>=C.value&&A(oe)>C.value&&Pe===ze){G();return}N(oe),t("input",oe,u),(_=(m=z.value)==null?void 0:m.onInput)==null||_.call(m,u),G()}else b.value=!0,fe.value=P.value+((E=u.data)!=null?E:"")},G=()=>{D(),Ve(()=>{d.value&&P.value!==d.value.value&&(d.value.value=P.value,W())})},ve=u=>{var m,_;const{value:E}=u.target;if(!b.value){if(C.value&&!k.value&&X.value>=C.value&&A(E)>C.value&&u.inputType==="insertText"){G();return}N(E),t("input",E,u),(_=(m=z.value)==null?void 0:m.onInput)==null||_.call(m,u),G()}},Se=u=>{N(""),O("",u),t("clear",u)},$e=u=>{const m=u.key||u.code;!b.value&&m===Bn.key&&(O(P.value,u),t("pressEnter",u))},Ee=y(()=>[`${a}-outer`,`${a}-outer-size-${x.value}`,{[`${a}-outer-has-suffix`]:!!n.suffix,[`${a}-outer-disabled`]:v.value}]),qe=y(()=>[`${a}-wrapper`,{[`${a}-error`]:V.value,[`${a}-disabled`]:v.value,[`${a}-focus`]:j.value}]),Ke=y(()=>[a,`${a}-size-${x.value}`]),J=y(()=>zt(o,Ye)),he=y(()=>Mn(o,Ye)),Te=y(()=>{const u=rt(rt({},he.value),e.inputAttrs);return V.value&&(u["aria-invalid"]=!0),u}),Q=u=>{var m;return p("span",se({class:qe.value,onMousedown:F},u?void 0:J.value),[n.prefix&&p("span",{class:`${a}-prefix`},[n.prefix()]),p("input",se({ref:d,class:Ke.value,value:P.value,type:e.type,placeholder:e.placeholder,readonly:e.readonly,disabled:v.value,onInput:ve,onKeydown:$e,onFocus:Oe,onBlur:de,onCompositionstart:Z,onCompositionupdate:Z,onCompositionend:Z},Te.value),null),Y.value&&p(pt,{prefix:a,class:`${a}-clear-btn`,onClick:Se},{default:()=>[p(Nt,null,null)]}),(n.suffix||!!e.maxLength&&e.showWordLimit||!!w.value)&&p("span",{class:[`${a}-suffix`,{[`${a}-suffix-has-feedback`]:w.value}]},[!!e.maxLength&&e.showWordLimit&&p("span",{class:`${a}-word-limit`},[X.value,Qt("/"),C.value]),(m=n.suffix)==null?void 0:m.call(n),!!w.value&&p(Tn,{type:w.value},null)])])};return{inputRef:d,render:()=>n.prepend||n.append?p("span",se({class:Ee.value},J.value),[n.prepend&&p("span",{class:`${a}-prepend`},[n.prepend()]),Q(!0),n.append&&p("span",{class:`${a}-append`},[n.append()])]):Q()}},methods:{focus(){var e;(e=this.inputRef)==null||e.focus()},blur(){var e;(e=this.inputRef)==null||e.blur()}},render(){return this.render()}});const Vn=I({name:"IconSearch",props:{size:{type:[Number,String]},strokeWidth:{type:Number,default:4},strokeLinecap:{type:String,default:"butt",validator:e=>["butt","round","square"].includes(e)},strokeLinejoin:{type:String,default:"miter",validator:e=>["arcs","bevel","miter","miter-clip","round"].includes(e)},rotate:Number,spin:Boolean},emits:{click:e=>!0},setup(e,{emit:t}){const n=U("icon"),o=y(()=>[n,`${n}-search`,{[`${n}-spin`]:e.spin}]),r=y(()=>{const i={};return e.size&&(i.fontSize=Gt(e.size)?`${e.size}px`:e.size),e.rotate&&(i.transform=`rotate(${e.rotate}deg)`),i});return{cls:o,innerStyle:r,onClick:i=>{t("click",i)}}}}),Dn=["stroke-width","stroke-linecap","stroke-linejoin"],Wn=en("path",{d:"M33.072 33.071c6.248-6.248 6.248-16.379 0-22.627-6.249-6.249-16.38-6.249-22.628 0-6.248 6.248-6.248 16.379 0 22.627 6.248 6.248 16.38 6.248 22.628 0Zm0 0 8.485 8.485"},null,-1),Nn=[Wn];function Gn(e,t,n,o,r,l){return T(),q("svg",{viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",stroke:"currentColor",class:K(e.cls),style:Rt(e.innerStyle),"stroke-width":e.strokeWidth,"stroke-linecap":e.strokeLinecap,"stroke-linejoin":e.strokeLinejoin,onClick:t[0]||(t[0]=(...i)=>e.onClick&&e.onClick(...i))},Nn,14,Dn)}var Le=ge(Vn,[["render",Gn]]);const lt=Object.assign(Le,{install:(e,t)=>{var n;const o=(n=t==null?void 0:t.iconPrefix)!=null?n:"";e.component(o+Le.name,Le)}}),kt=Symbol("ArcoButtonGroup"),Hn=I({name:"Button",components:{IconLoading:Ne},props:{type:{type:String},shape:{type:String},status:{type:String},size:{type:String},long:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean},htmlType:{type:String,default:"button"},href:String},emits:{click:e=>!0},setup(e,{emit:t}){const{size:n,disabled:o}=ce(e),r=U("btn"),l=De(kt,void 0),i=y(()=>{var w;return(w=n.value)!=null?w:l==null?void 0:l.size}),c=y(()=>!!(o.value||l!=null&&l.disabled)),{mergedSize:a,mergedDisabled:d}=ht({size:i,disabled:c}),{mergedSize:h}=Ge(a),v=y(()=>{var w,z,x,D,W,L;return[r,`${r}-${(z=(w=e.type)!=null?w:l==null?void 0:l.type)!=null?z:"secondary"}`,`${r}-shape-${(D=(x=e.shape)!=null?x:l==null?void 0:l.shape)!=null?D:"square"}`,`${r}-size-${h.value}`,`${r}-status-${(L=(W=e.status)!=null?W:l==null?void 0:l.status)!=null?L:"normal"}`,{[`${r}-long`]:e.long,[`${r}-loading`]:e.loading,[`${r}-disabled`]:d.value,[`${r}-link`]:Ht(e.href)}]});return{prefixCls:r,cls:v,mergedDisabled:d,handleClick:w=>{if(e.disabled||e.loading){w.preventDefault();return}t("click",w)}}}}),qn=["href"],Kn=["type","disabled"];function Un(e,t,n,o,r,l){const i=re("icon-loading");return e.href?(T(),q("a",{key:0,class:K([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),href:e.mergedDisabled||e.loading?void 0:e.href,onClick:t[0]||(t[0]=(...c)=>e.handleClick&&e.handleClick(...c))},[e.loading||e.$slots.icon?(T(),q("span",{key:0,class:K(`${e.prefixCls}-icon`)},[e.loading?(T(),te(i,{key:0,spin:"true"})):le(e.$slots,"icon",{key:1})],2)):je("v-if",!0),le(e.$slots,"default")],10,qn)):(T(),q("button",{key:1,class:K([e.cls,{[`${e.prefixCls}-only-icon`]:e.$slots.icon&&!e.$slots.default}]),type:e.htmlType,disabled:e.mergedDisabled,onClick:t[1]||(t[1]=(...c)=>e.handleClick&&e.handleClick(...c))},[e.loading||e.$slots.icon?(T(),q("span",{key:0,class:K(`${e.prefixCls}-icon`)},[e.loading?(T(),te(i,{key:0,spin:!0})):le(e.$slots,"icon",{key:1})],2)):je("v-if",!0),le(e.$slots,"default")],10,Kn))}var Ae=ge(Hn,[["render",Un]]);const Yn=I({name:"ButtonGroup",props:{type:{type:String},status:{type:String},shape:{type:String},size:{type:String},disabled:{type:Boolean}},setup(e){const{type:t,size:n,status:o,disabled:r,shape:l}=ce(e),i=U("btn-group");return gt(kt,_t({type:t,size:n,shape:l,status:o,disabled:r})),{prefixCls:i}}});function Xn(e,t,n,o,r,l){return T(),q("div",{class:K(e.prefixCls)},[le(e.$slots,"default")],2)}var Fe=ge(Yn,[["render",Xn]]);const Zn=Object.assign(Ae,{Group:Fe,install:(e,t)=>{bt(e,t);const n=yt(t);e.component(n+Ae.name,Ae),e.component(n+Fe.name,Fe)}});var Co=I({name:"InputSearch",props:{searchButton:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},size:{type:String},buttonText:{type:String},buttonProps:{type:Object}},emits:{search:(e,t)=>!0},setup(e,{emit:t,slots:n}){const{size:o}=ce(e),r=U("input-search"),{mergedSize:l}=Ge(o),i=g(),c=v=>{i.value.inputRef&&t("search",i.value.inputRef.value,v)},a=()=>{var v;return p(wt,null,[e.loading?p(Ne,null,null):p(pt,{onClick:c},{default:()=>[p(lt,null,null)]}),(v=n.suffix)==null?void 0:v.call(n)])},d=()=>{var v;let B={};return e.buttonText||n["button-default"]||n["button-icon"]?B={default:(v=n["button-default"])!=null?v:e.buttonText?()=>e.buttonText:void 0,icon:n["button-icon"]}:B={icon:()=>p(lt,null,null)},p(Zn,se({type:"primary",class:`${r}-btn`,disabled:e.disabled,size:l.value,loading:e.loading},e.buttonProps,{onClick:c}),B)};return{inputRef:i,render:()=>p(jn,{ref:i,class:r,size:l.value,disabled:e.disabled},{prepend:n.prepend,prefix:n.prefix,suffix:e.searchButton?n.suffix:a,append:e.searchButton?d:n.append})}},methods:{focus(){var e;(e=this.inputRef)==null||e.focus()},blur(){var e;(e=this.inputRef)==null||e.blur()}},render(){return this.render()}}),Jn=Object.defineProperty,it=Object.getOwnPropertySymbols,Qn=Object.prototype.hasOwnProperty,Rn=Object.prototype.propertyIsEnumerable,at=(e,t,n)=>t in e?Jn(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,ie=(e,t)=>{for(var n in t||(t={}))Qn.call(t,n)&&at(e,n,t[n]);if(it)for(var n of it(t))Rn.call(t,n)&&at(e,n,t[n]);return e};const eo=()=>{const{height:e,width:t}=Kt();return{width:Math.min(t,window.innerWidth),height:Math.min(e,window.innerHeight)}},st=(e,t)=>{var n,o;const r=e.getBoundingClientRect();return{top:r.top,bottom:r.bottom,left:r.left,right:r.right,scrollTop:r.top-t.top,scrollBottom:r.bottom-t.top,scrollLeft:r.left-t.left,scrollRight:r.right-t.left,width:(n=e.offsetWidth)!=null?n:e.clientWidth,height:(o=e.offsetHeight)!=null?o:e.clientHeight}},to=e=>{switch(e){case"top":case"tl":case"tr":return"top";case"bottom":case"bl":case"br":return"bottom";case"left":case"lt":case"lb":return"left";case"right":case"rt":case"rb":return"right";default:return"top"}},pe=(e,t)=>{switch(t){case"top":switch(e){case"bottom":return"top";case"bl":return"tl";case"br":return"tr";default:return e}case"bottom":switch(e){case"top":return"bottom";case"tl":return"bl";case"tr":return"br";default:return e}case"left":switch(e){case"right":return"left";case"rt":return"lt";case"rb":return"lb";default:return e}case"right":switch(e){case"left":return"right";case"lt":return"rt";case"lb":return"rb";default:return e}default:return e}},no=(e,t,{containerRect:n,triggerRect:o,popupRect:r,offset:l,translate:i})=>{const c=to(e),a=eo(),d={top:n.top+t.top,bottom:a.height-(n.top+t.top+r.height),left:n.left+t.left,right:a.width-(n.left+t.left+r.width)};let h=e;if(c==="top"&&d.top<0)if(o.top>r.height)t.top=-n.top;else{const v=ae("bottom",o,r,{offset:l,translate:i});a.height-(n.top+v.top+r.height)>0&&(h=pe(e,"bottom"),t.top=v.top)}if(c==="bottom"&&d.bottom<0)if(a.height-o.bottom>r.height)t.top=-n.top+(a.height-r.height);else{const v=ae("top",o,r,{offset:l,translate:i});n.top+v.top>0&&(h=pe(e,"top"),t.top=v.top)}if(c==="left"&&d.left<0)if(o.left>r.width)t.left=-n.left;else{const v=ae("right",o,r,{offset:l,translate:i});a.width-(n.left+v.left+r.width)>0&&(h=pe(e,"right"),t.left=v.left)}if(c==="right"&&d.right<0)if(a.width-o.right>r.width)t.left=-n.left+(a.width-r.width);else{const v=ae("left",o,r,{offset:l,translate:i});n.left+v.left>0&&(h=pe(e,"left"),t.left=v.left)}return(c==="top"||c==="bottom")&&(d.left<0?t.left=-n.left:d.right<0&&(t.left=-n.left+(a.width-r.width))),(c==="left"||c==="right")&&(d.top<0?t.top=-n.top:d.bottom<0&&(t.top=-n.top+(a.height-r.height))),{popupPosition:t,position:h}},ae=(e,t,n,{offset:o=0,translate:r=[0,0]}={})=>{var l;const i=(l=qt(r)?r:r[e])!=null?l:[0,0];switch(e){case"top":return{left:t.scrollLeft+Math.round(t.width/2)-Math.round(n.width/2)+i[0],top:t.scrollTop-n.height-o+i[1]};case"tl":return{left:t.scrollLeft+i[0],top:t.scrollTop-n.height-o+i[1]};case"tr":return{left:t.scrollRight-n.width+i[0],top:t.scrollTop-n.height-o+i[1]};case"bottom":return{left:t.scrollLeft+Math.round(t.width/2)-Math.round(n.width/2)+i[0],top:t.scrollBottom+o+i[1]};case"bl":return{left:t.scrollLeft+i[0],top:t.scrollBottom+o+i[1]};case"br":return{left:t.scrollRight-n.width+i[0],top:t.scrollBottom+o+i[1]};case"left":return{left:t.scrollLeft-n.width-o+i[0],top:t.scrollTop+Math.round(t.height/2)-Math.round(n.height/2)+i[1]};case"lt":return{left:t.scrollLeft-n.width-o+i[0],top:t.scrollTop+i[1]};case"lb":return{left:t.scrollLeft-n.width-o+i[0],top:t.scrollBottom-n.height+i[1]};case"right":return{left:t.scrollRight+o+i[0],top:t.scrollTop+Math.round(t.height/2)-Math.round(n.height/2)+i[1]};case"rt":return{left:t.scrollRight+o+i[0],top:t.scrollTop+i[1]};case"rb":return{left:t.scrollRight+o+i[0],top:t.scrollBottom-n.height+i[1]};default:return{left:0,top:0}}},oo=e=>{let t="0";["top","bottom"].includes(e)?t="50%":["left","lt","lb","tr","br"].includes(e)&&(t="100%");let n="0";return["left","right"].includes(e)?n="50%":["top","tl","tr","lb","rb"].includes(e)&&(n="100%"),`${t} ${n}`},ro=(e,t,n,o,{offset:r=0,translate:l=[0,0],customStyle:i={},autoFitPosition:c=!1}={})=>{let a=e,d=ae(e,n,o,{offset:r,translate:l});if(c){const v=no(e,d,{containerRect:t,popupRect:o,triggerRect:n,offset:r,translate:l});d=v.popupPosition,a=v.position}return{style:ie({left:`${d.left}px`,top:`${d.top}px`},i),position:a}},lo=(e,t,n,{customStyle:o={}})=>{if(["top","tl","tr","bottom","bl","br"].includes(e)){let l=Math.abs(t.scrollLeft+t.width/2-n.scrollLeft);return l>n.width-8&&(t.width>n.width?l=n.width/2:l=n.width-8),["top","tl","tr"].includes(e)?ie({left:`${l}px`,bottom:"0",transform:"translate(-50%,50%) rotate(45deg)"},o):ie({left:`${l}px`,top:"0",transform:"translate(-50%,-50%) rotate(45deg)"},o)}let r=Math.abs(t.scrollTop+t.height/2-n.scrollTop);return r>n.height-8&&(t.height>n.height?r=n.height/2:r=n.height-8),["left","lt","lb"].includes(e)?ie({top:`${r}px`,right:"0",transform:"translate(50%,-50%) rotate(45deg)"},o):ie({top:`${r}px`,left:"0",transform:"translate(-50%,-50%) rotate(45deg)"},o)},io=e=>e.scrollHeight>e.offsetHeight||e.scrollWidth>e.offsetWidth,ut=e=>{var t;const n=[];let o=e;for(;o&&o!==document.documentElement;)io(o)&&n.push(o),o=(t=o.parentElement)!=null?t:void 0;return n},xt=()=>{const e={},t=g(),n=()=>{const o=Ut(e.value);o!==t.value&&(t.value=o)};return _e(()=>n()),He(()=>n()),{children:e,firstElement:t}};var ct=I({name:"ResizeObserver",props:{watchOnUpdated:Boolean},emits:["resize"],setup(e,{emit:t,slots:n}){const{children:o,firstElement:r}=xt();let l;const i=a=>{a&&(l=new Bt(d=>{const h=d[0];t("resize",h)}),l.observe(a))},c=()=>{l&&(l.disconnect(),l=null)};return ue(r,a=>{l&&c(),a&&i(a)}),Ct(()=>{l&&c()}),()=>{var a;return o.value=(a=n.default)==null?void 0:a.call(n),o.value}}});function ao(e,t){const n=g(e[t]);return He(()=>{const o=e[t];n.value!==o&&(n.value=o)}),n}const ft=Symbol("ArcoTrigger"),so=({elementRef:e,onResize:t})=>{let n;return{createResizeObserver:()=>{e.value&&(n=new Bt(l=>{const i=l[0];mt(t)&&t(i)}),n.observe(e.value))},destroyResizeObserver:()=>{n&&(n.disconnect(),n=null)}}};var uo=I({name:"ClientOnly",setup(e,{slots:t}){const n=g(!1);return _e(()=>n.value=!0),()=>{var o;return n.value?(o=t.default)==null?void 0:o.call(t):null}}});const co=({popupContainer:e,visible:t,defaultContainer:n="body",documentContainer:o})=>{const r=g(e.value),l=g(),i=()=>{const c=Xe(e.value),a=c?e.value:n,d=c??(o?document.documentElement:Xe(n));a!==r.value&&(r.value=a),d!==l.value&&(l.value=d)};return _e(()=>i()),ue(t,c=>{r.value!==e.value&&c&&i()}),{teleportContainer:r,containerRef:l}};var fo=Object.defineProperty,vo=Object.defineProperties,ho=Object.getOwnPropertyDescriptors,dt=Object.getOwnPropertySymbols,mo=Object.prototype.hasOwnProperty,po=Object.prototype.propertyIsEnumerable,vt=(e,t,n)=>t in e?fo(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,bo=(e,t)=>{for(var n in t||(t={}))mo.call(t,n)&&vt(e,n,t[n]);if(dt)for(var n of dt(t))po.call(t,n)&&vt(e,n,t[n]);return e},yo=(e,t)=>vo(e,ho(t));const go=["onClick","onMouseenter","onMouseleave","onFocusin","onFocusout","onContextmenu"];var Ie=I({name:"Trigger",inheritAttrs:!1,props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"bottom"},disabled:{type:Boolean,default:!1},popupOffset:{type:Number,default:0},popupTranslate:{type:[Array,Object]},showArrow:{type:Boolean,default:!1},alignPoint:{type:Boolean,default:!1},popupHoverStay:{type:Boolean,default:!0},blurToClose:{type:Boolean,default:!0},clickToClose:{type:Boolean,default:!0},clickOutsideToClose:{type:Boolean,default:!0},unmountOnClose:{type:Boolean,default:!0},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupStyle:{type:Object},animationName:{type:String,default:"fade-in"},duration:{type:[Number,Object]},mouseEnterDelay:{type:Number,default:100},mouseLeaveDelay:{type:Number,default:100},focusDelay:{type:Number,default:0},autoFitPopupWidth:{type:Boolean,default:!1},autoFitPopupMinWidth:{type:Boolean,default:!1},autoFixPosition:{type:Boolean,default:!0},popupContainer:{type:[String,Object]},updateAtScroll:{type:Boolean,default:!1},autoFitTransformOrigin:{type:Boolean,default:!1},hideEmpty:{type:Boolean,default:!1},openedClass:{type:[String,Array,Object]},autoFitPosition:{type:Boolean,default:!0},renderToBody:{type:Boolean,default:!0},preventFocus:{type:Boolean,default:!1},scrollToClose:{type:Boolean,default:!1},scrollToCloseDistance:{type:Number,default:0}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0,show:()=>!0,hide:()=>!0,resize:()=>!0},setup(e,{emit:t,slots:n,attrs:o}){const{popupContainer:r}=ce(e),l=U("trigger"),i=y(()=>zt(o,go)),c=De(Yt,void 0),a=y(()=>[].concat(e.trigger)),d=new Set,h=De(ft,void 0),{children:v,firstElement:B}=xt(),w=g(),z=g(e.defaultPopupVisible),x=g(e.position),D=g({}),W=g({}),L=g({}),P=g(),$=g({top:0,left:0});let j=null,Y=null;const b=y(()=>{var s;return(s=e.popupVisible)!=null?s:z.value}),{teleportContainer:fe,containerRef:A}=co({popupContainer:r,visible:b,documentContainer:!0}),{zIndex:X}=Xt("popup",{visible:b});let V=0,k=!1,C=!1;const Ce=()=>{V&&(window.clearTimeout(V),V=0)},N=s=>{if(e.alignPoint){const{pageX:f,pageY:S}=s;$.value={top:S,left:f}}},F=()=>{if(!B.value||!w.value||!A.value)return;const s=A.value.getBoundingClientRect(),f=e.alignPoint?{top:$.value.top,bottom:$.value.top,left:$.value.left,right:$.value.left,scrollTop:$.value.top,scrollBottom:$.value.top,scrollLeft:$.value.left,scrollRight:$.value.left,width:0,height:0}:st(B.value,s),S=()=>st(w.value,s),R=S(),{style:H,position:ee}=ro(e.position,s,f,R,{offset:e.popupOffset,translate:e.popupTranslate,customStyle:e.popupStyle,autoFitPosition:e.autoFitPosition});e.autoFitTransformOrigin&&(W.value={transformOrigin:oo(ee)}),e.autoFitPopupMinWidth?H.minWidth=`${f.width}px`:e.autoFitPopupWidth&&(H.width=`${f.width}px`),x.value!==ee&&(x.value=ee),D.value=H,e.showArrow&&Ve(()=>{L.value=lo(ee,f,S(),{customStyle:e.arrowStyle})})},O=(s,f)=>{if(s===b.value&&V===0)return;const S=()=>{z.value=s,t("update:popupVisible",s),t("popupVisibleChange",s),s&&Ve(()=>{F()})};s||(j=null,Y=null),f?(Ce(),s!==b.value&&(V=window.setTimeout(S,f))):S()},Oe=s=>{var f;(f=o.onClick)==null||f.call(o,s),!(e.disabled||b.value&&!e.clickToClose)&&(a.value.includes("click")?(N(s),O(!b.value)):a.value.includes("contextMenu")&&b.value&&O(!1))},de=s=>{var f;(f=o.onMouseenter)==null||f.call(o,s),!(e.disabled||!a.value.includes("hover"))&&(N(s),O(!0,e.mouseEnterDelay))},Z=s=>{h==null||h.onMouseenter(s),de(s)},G=s=>{var f;(f=o.onMouseleave)==null||f.call(o,s),!(e.disabled||!a.value.includes("hover"))&&O(!1,e.mouseLeaveDelay)},ve=s=>{h==null||h.onMouseleave(s),G(s)},Se=s=>{var f;(f=o.onFocusin)==null||f.call(o,s),!(e.disabled||!a.value.includes("focus"))&&O(!0,e.focusDelay)},$e=s=>{var f;(f=o.onFocusout)==null||f.call(o,s),!(e.disabled||!a.value.includes("focus"))&&e.blurToClose&&O(!1)},Ee=s=>{var f;(f=o.onContextmenu)==null||f.call(o,s),!(e.disabled||!a.value.includes("contextMenu")||b.value&&!e.clickToClose)&&(N(s),O(!b.value),s.preventDefault())};gt(ft,_t({onMouseenter:Z,onMouseleave:ve,addChildRef:s=>{d.add(s),h==null||h.addChildRef(s)},removeChildRef:s=>{d.delete(s),h==null||h.removeChildRef(s)}}));const J=()=>{Ze(document.documentElement,"mousedown",Q),k=!1},he=ao(n,"content"),Te=y(()=>{var s;return e.hideEmpty&&Zt((s=he.value)==null?void 0:s.call(he))}),Q=s=>{var f,S,R;if(!((f=B.value)!=null&&f.contains(s.target)||(S=w.value)!=null&&S.contains(s.target))){for(const H of d)if((R=H.value)!=null&&R.contains(s.target))return;J(),O(!1)}},Be=(s,f)=>{const[S,R]=s,{scrollTop:H,scrollLeft:ee}=f;return Math.abs(H-S)>=e.scrollToCloseDistance||Math.abs(ee-R)>=e.scrollToCloseDistance},u=Re(s=>{if(b.value)if(e.scrollToClose||c!=null&&c.scrollToClose){const f=s.target;j||(j=[f.scrollTop,f.scrollLeft]),Be(j,f)?O(!1):F()}else F()}),m=()=>{Ze(window,"scroll",_),C=!1},_=Re(s=>{const f=s.target.documentElement;Y||(Y=[f.scrollTop,f.scrollLeft]),Be(Y,f)&&(O(!1),m())}),E=()=>{b.value&&F()},oe=()=>{E(),t("resize")},Pe=s=>{e.preventFocus&&s.preventDefault()};h==null||h.addChildRef(w);const ze=y(()=>b.value?e.openedClass:void 0);let M;ue(b,s=>{if(e.clickOutsideToClose&&(!s&&k?J():s&&!k&&(Me(document.documentElement,"mousedown",Q),k=!0)),(e.scrollToClose||c!=null&&c.scrollToClose)&&(Me(window,"scroll",_),C=!0),e.updateAtScroll||c!=null&&c.updateAtScroll){if(s){M=ut(B.value);for(const f of M)f.addEventListener("scroll",u)}else if(M){for(const f of M)f.removeEventListener("scroll",u);M=void 0}}s&&(ke.value=!0)}),ue(()=>[e.autoFitPopupWidth,e.autoFitPopupMinWidth],()=>{b.value&&F()});const{createResizeObserver:Mt,destroyResizeObserver:Lt}=so({elementRef:A,onResize:E});_e(()=>{if(Mt(),b.value&&(F(),e.clickOutsideToClose&&!k&&(Me(document.documentElement,"mousedown",Q),k=!0),e.updateAtScroll||c!=null&&c.updateAtScroll)){M=ut(B.value);for(const s of M)s.addEventListener("scroll",u)}}),He(()=>{b.value&&F()}),tn(()=>{O(!1)}),Ct(()=>{if(h==null||h.removeChildRef(w),Lt(),k&&J(),C&&m(),M){for(const s of M)s.removeEventListener("scroll",u);M=void 0}});const ke=g(b.value),me=g(!1),Ue=()=>{me.value=!0},At=()=>{me.value=!1,b.value&&t("show")},Ft=()=>{me.value=!1,b.value||(ke.value=!1,t("hide"))};return()=>{var s,f;return v.value=(f=(s=n.default)==null?void 0:s.call(n))!=null?f:[],Jt(v.value,{class:ze.value,onClick:Oe,onMouseenter:de,onMouseleave:G,onFocusin:Se,onFocusout:$e,onContextmenu:Ee}),p(wt,null,[e.autoFixPosition?p(ct,{onResize:oe},{default:()=>[v.value]}):v.value,p(uo,null,{default:()=>[p(nn,{to:fe.value,disabled:!e.renderToBody},{default:()=>[(!e.unmountOnClose||b.value||ke.value)&&!Te.value&&p(ct,{onResize:E},{default:()=>[p("div",se({ref:w,class:[`${l}-popup`,`${l}-position-${x.value}`],style:yo(bo({},D.value),{zIndex:X.value,pointerEvents:me.value?"none":"auto"}),"trigger-placement":x.value,onMouseenter:Z,onMouseleave:ve,onMousedown:Pe},i.value),[p(on,{name:e.animationName,duration:e.duration,appear:!0,onBeforeEnter:Ue,onAfterEnter:At,onBeforeLeave:Ue,onAfterLeave:Ft},{default:()=>{var S;return[rn(p("div",{class:`${l}-popup-wrapper`,style:W.value},[p("div",{class:[`${l}-content`,e.contentClass],style:e.contentStyle},[(S=n.content)==null?void 0:S.call(n)]),e.showArrow&&p("div",{ref:P,class:[`${l}-arrow`,e.arrowClass],style:L.value},null)]),[[ln,b.value]])]}})])]})]})]})])}}});const Oo=Object.assign(Ie,{install:(e,t)=>{bt(e,t);const n=yt(t);e.component(n+Ie.name,Ie)}});export{Zn as B,uo as C,Co as I,ct as R,Oo as T,jn as _,Bt as i,zt as o,Mn as p,co as u};
