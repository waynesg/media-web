import{S as Z}from"./constants-e8ac43b8.js";import{r as C,a as A,d as R,g as ce,D as ke,E as ue,s as O,o as f,b as I,n as _,G as $,j as H,l as F,f as b,p as g,k as Ce,T as be,H as we,C as Se,I as ne,J as $e,w as de,F as se,K as j,t as D,e as _e,u as M,m as B,v as E,B as Ie,L as Ve,M as Te}from"./runtime-dom.esm-bundler-75af5957.js";import{_ as fe,e as Oe,f as Pe,h as Me,j as Fe,k as Le,l as Be,m as x,g as ee,u as Ee,n as ae,o as He,p as he,q as me,r as Ae,M as Ue,s as ze,t as je,v as De,w as Ge,x as Ne,X as We,y as G,S as te,z as Re,B as Ke,C as qe,D as Xe,E as Ye,F as Je,V as Qe}from"./Player.vue_vue_type_style_index_0_scoped_e26564da_lang-dfeb7c19.js";import{_ as Ze}from"./_plugin-vue_export-helper-c450468a.js";var P=(e=>(e.DARK="dark",e.LIGHT="light",e))(P||{});function ve(e){document.documentElement.setAttribute("app-theme",e),localStorage.setItem(Z,e)}function Tl(){const e=localStorage.getItem(Z)||P.LIGHT;ve(e)}function Ol(){const e=C(localStorage.getItem(Z)||P.LIGHT);function l(){e.value=e.value===P.LIGHT?P.DARK:P.LIGHT,ve(e.value)}const s=A(()=>e.value===P.DARK),o=A(()=>e.value===P.LIGHT);return{theme:e,isDark:s,isLight:o,switchTheme:l}}const xe=R({name:"Message",components:{AIconHover:Oe,IconInfoCircleFill:Pe,IconCheckCircleFill:Me,IconExclamationCircleFill:Fe,IconCloseCircleFill:Le,IconClose:Be,IconLoading:x},props:{type:{type:String,default:"info"},closable:{type:Boolean,default:!1},showIcon:{type:Boolean,default:!0},duration:{type:Number,default:3e3},resetOnUpdate:{type:Boolean,default:!1},resetOnHover:{type:Boolean,default:!1}},emits:["close"],setup(e,{emit:l}){const s=ee("message");let o=0;const r=()=>{l("close")},n=()=>{e.duration>0&&(o=window.setTimeout(r,e.duration))},a=()=>{o&&(window.clearTimeout(o),o=0)};return ce(()=>{n()}),ke(()=>{e.resetOnUpdate&&(a(),n())}),ue(()=>{a()}),{handleMouseEnter:()=>{e.resetOnHover&&a()},handleMouseLeave:()=>{e.resetOnHover&&n()},prefixCls:s,handleClose:r}}});function el(e,l,s,o,r,n){const a=O("icon-info-circle-fill"),t=O("icon-check-circle-fill"),h=O("icon-exclamation-circle-fill"),m=O("icon-close-circle-fill"),v=O("icon-loading"),p=O("icon-close"),w=O("a-icon-hover");return f(),I("li",{role:"alert",class:_([e.prefixCls,`${e.prefixCls}-${e.type}`,{[`${e.prefixCls}-closable`]:e.closable}]),onMouseenter:l[1]||(l[1]=(...d)=>e.handleMouseEnter&&e.handleMouseEnter(...d)),onMouseleave:l[2]||(l[2]=(...d)=>e.handleMouseLeave&&e.handleMouseLeave(...d))},[e.showIcon&&!(e.type==="normal"&&!e.$slots.icon)?(f(),I("span",{key:0,class:_(`${e.prefixCls}-icon`)},[$(e.$slots,"icon",{},()=>[e.type==="info"?(f(),H(a,{key:0})):e.type==="success"?(f(),H(t,{key:1})):e.type==="warning"?(f(),H(h,{key:2})):e.type==="error"?(f(),H(m,{key:3})):e.type==="loading"?(f(),H(v,{key:4})):F("v-if",!0)])],2)):F("v-if",!0),b("span",{class:_(`${e.prefixCls}-content`)},[$(e.$slots,"default")],2),e.closable?(f(),I("span",{key:1,class:_(`${e.prefixCls}-close-btn`),onClick:l[0]||(l[0]=(...d)=>e.handleClose&&e.handleClose(...d))},[g(w,null,{default:Ce(()=>[g(p)]),_:1})],2)):F("v-if",!0)],34)}var ll=fe(xe,[["render",el]]);function nl(e){return typeof e=="function"||Object.prototype.toString.call(e)==="[object Object]"&&!we(e)}var sl=R({name:"MessageList",props:{messages:{type:Array,default:()=>[]},position:{type:String,default:"top"}},emits:["close","afterClose"],setup(e,l){const s=ee("message-list"),{zIndex:o}=Ee("message",{runOnMounted:!0});return()=>{let r;return g(be,{class:[s,`${s}-${e.position}`],name:"fade-message",tag:"ul",style:{zIndex:o.value},onAfterLeave:()=>l.emit("afterClose")},nl(r=e.messages.map(n=>{const a={default:ae(n.content),icon:ae(n.icon)};return g(ll,{key:n.id,type:n.type,duration:n.duration,closable:n.closable,resetOnUpdate:n.resetOnUpdate,resetOnHover:n.resetOnHover,onClose:()=>l.emit("close",n.id)},a)}))?r:{default:()=>[r]})}}}),al=Object.defineProperty,tl=Object.defineProperties,ol=Object.getOwnPropertyDescriptors,oe=Object.getOwnPropertySymbols,il=Object.prototype.hasOwnProperty,rl=Object.prototype.propertyIsEnumerable,ie=(e,l,s)=>l in e?al(e,l,{enumerable:!0,configurable:!0,writable:!0,value:s}):e[l]=s,W=(e,l)=>{for(var s in l||(l={}))il.call(l,s)&&ie(e,s,l[s]);if(oe)for(var s of oe(l))rl.call(l,s)&&ie(e,s,l[s]);return e},pe=(e,l)=>tl(e,ol(l));class cl{constructor(l,s){this.messageCount=0,this.add=n=>{var a;this.messageCount++;const t=(a=n.id)!=null?a:`__arco_message_${this.messageCount}`;if(this.messageIds.has(t))return this.update(t,n);const h=Se(W({id:t},n));return this.messages.value.push(h),this.messageIds.add(t),{close:()=>this.remove(t)}},this.update=(n,a)=>{for(let t=0;t<this.messages.value.length;t++)if(this.messages.value[t].id===n){const h=!he(a.duration);Object.assign(this.messages.value[t],pe(W({},a),{id:n,resetOnUpdate:h}));break}return{close:()=>this.remove(n)}},this.remove=n=>{for(let a=0;a<this.messages.value.length;a++){const t=this.messages.value[a];if(t.id===n){me(t.onClose)&&t.onClose(n),this.messages.value.splice(a,1),this.messageIds.delete(n);break}}},this.clear=()=>{this.messages.value.splice(0)},this.destroy=()=>{this.messages.value.length===0&&this.container&&(ne(null,this.container),document.body.removeChild(this.container),this.container=null,U[this.position]=void 0)};const{position:o="top"}=l;this.container=Ae("message"),this.messageIds=new Set,this.messages=C([]),this.position=o;const r=g(sl,{messages:this.messages.value,position:o,onClose:this.remove,onAfterClose:this.destroy});(s??re._context)&&(r.appContext=s??re._context),ne(r,this.container),document.body.appendChild(this.container)}}const U={},ye=[...Ue,"loading","normal"],N=ye.reduce((e,l)=>(e[l]=(s,o)=>{He(s)&&(s={content:s});const r=W({type:l},s),{position:n="top"}=r;return U[n]||(U[n]=new cl(r,o)),U[n].add(r)},e),{});N.clear=e=>{var l;e?(l=U[e])==null||l.clear():Object.values(U).forEach(s=>s==null?void 0:s.clear())};const re=pe(W({},N),{install:e=>{const l={clear:N.clear};for(const s of ye)l[s]=(o,r=e._context)=>N[s](o,r);e.config.globalProperties.$message=l},_context:null}),ul=R({name:"Switch",components:{IconLoading:x},props:{modelValue:{type:[String,Number,Boolean],default:void 0},defaultChecked:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1},loading:{type:Boolean,default:!1},type:{type:String,default:"circle"},size:{type:String},checkedValue:{type:[String,Number,Boolean],default:!0},uncheckedValue:{type:[String,Number,Boolean],default:!1},checkedColor:{type:String},uncheckedColor:{type:String},beforeChange:{type:Function},checkedText:{type:String},uncheckedText:{type:String}},emits:{"update:modelValue":e=>!0,change:(e,l)=>!0,focus:e=>!0,blur:e=>!0},setup(e,{emit:l}){const{disabled:s,size:o,modelValue:r}=$e(e),n=ee("switch"),{mergedSize:a}=ze(o),{mergedDisabled:t,mergedSize:h,eventHandlers:m}=je({disabled:s,size:a}),v=C(e.defaultChecked?e.checkedValue:e.uncheckedValue),p=A(()=>{var c;return((c=e.modelValue)!=null?c:v.value)===e.checkedValue}),w=C(e.loading),d=A(()=>w.value||e.loading),S=(c,u)=>{var k,V;v.value=c?e.checkedValue:e.uncheckedValue,l("update:modelValue",v.value),l("change",v.value,u),(V=(k=m.value)==null?void 0:k.onChange)==null||V.call(k,u)},K=async c=>{if(d.value||t.value)return;const u=!p.value,k=u?e.checkedValue:e.uncheckedValue,V=e.beforeChange;if(me(V)){w.value=!0;try{const L=await V(k);(L??!0)&&S(u,c)}finally{w.value=!1}}else S(u,c)},q=c=>{var u,k;l("focus",c),(k=(u=m.value)==null?void 0:u.onFocus)==null||k.call(u,c)},X=c=>{var u,k;l("blur",c),(k=(u=m.value)==null?void 0:u.onBlur)==null||k.call(u,c)};de(r,c=>{(he(c)||De(c))&&(v.value=e.uncheckedValue)});const Y=A(()=>[n,`${n}-type-${e.type}`,{[`${n}-small`]:h.value==="small"||h.value==="mini",[`${n}-checked`]:p.value,[`${n}-disabled`]:t.value,[`${n}-loading`]:d.value,[`${n}-custom-color`]:e.type==="line"&&(e.checkedColor||e.uncheckedColor)}]),J=A(()=>{if(p.value&&e.checkedColor)return e.type==="line"?{"--custom-color":e.checkedColor}:{backgroundColor:e.checkedColor};if(!p.value&&e.uncheckedColor)return e.type==="line"?{"--custom-color":e.uncheckedColor}:{backgroundColor:e.uncheckedColor}});return{prefixCls:n,cls:Y,mergedDisabled:t,buttonStyle:J,computedCheck:p,computedLoading:d,handleClick:K,handleFocus:q,handleBlur:X}}}),dl=["aria-checked","disabled"];function fl(e,l,s,o,r,n){const a=O("icon-loading");return f(),I("button",{type:"button",role:"switch","aria-checked":e.computedCheck,class:_(e.cls),style:_e(e.buttonStyle),disabled:e.mergedDisabled,onClick:l[0]||(l[0]=(...t)=>e.handleClick&&e.handleClick(...t)),onFocus:l[1]||(l[1]=(...t)=>e.handleFocus&&e.handleFocus(...t)),onBlur:l[2]||(l[2]=(...t)=>e.handleBlur&&e.handleBlur(...t))},[b("span",{class:_(`${e.prefixCls}-handle`)},[b("span",{class:_(`${e.prefixCls}-handle-icon`)},[e.computedLoading?(f(),H(a,{key:0})):(f(),I(se,{key:1},[e.computedCheck?$(e.$slots,"checked-icon",{key:0}):$(e.$slots,"unchecked-icon",{key:1})],2112))],2)],2),F("  prettier-ignore  "),e.type!=="line"&&e.size!=="small"&&(e.$slots.checked||e.checkedText||e.$slots.unchecked||e.uncheckedText)?(f(),I(se,{key:0},[b("span",{class:_(`${e.prefixCls}-text-holder`)},[e.computedCheck?$(e.$slots,"checked",{key:0},()=>[j(D(e.checkedText),1)]):$(e.$slots,"unchecked",{key:1},()=>[j(D(e.uncheckedText),1)])],2),b("span",{class:_(`${e.prefixCls}-text`)},[e.computedCheck?$(e.$slots,"checked",{key:0},()=>[j(D(e.checkedText),1)]):$(e.$slots,"unchecked",{key:1},()=>[j(D(e.uncheckedText),1)])],2)],64)):F("v-if",!0)],46,dl)}var Q=fe(ul,[["render",fl]]);const Pl=Object.assign(Q,{install:(e,l)=>{Ge(e,l);const s=Ne(l);e.component(s+Q.name,Q)}}),hl=e=>(Ve("data-v-e26564da"),e=e(),Te(),e),ml={key:0,class:"player-loading"},vl=hl(()=>b("div",{class:"player-canvas"},null,-1)),pl={key:0,class:"player-progress"},yl={class:"player-toolbar"},gl={class:"player-icon player-state"},kl={class:"player-icon player-volume"},Cl={class:"player-volume-panel player-volume-panel-show"},bl={class:"player-toolbar-extra"},wl={class:"player-icon player-fullscreen"},Sl=R({__name:"Player",props:{url:{},startTime:{},isLive:{type:Boolean}},emits:["timeupdate","ended"],setup(e,{emit:l}){const s=l,o=e;async function r(i){const{origin:y}=new URL(i);if(i.endsWith(".m3u8"))return i;const z={method:"GET",headers:{},mode:"cors",cache:"default",referrerPolicy:"no-referrer-when-downgrade"};try{const le=await(await fetch(i,z)).text();let T=le.match(/http[s]?:\/\/.*?\.m3u8/);if(T)return T[0];if(T=le.match(/var main = "(.*?)";/),T&&T[1])return T[1].startsWith("http")?T[1]:`${y}${T[1]}`}catch{return Qe.playUrl({url:i})}}let n=null;const a=C(null),t=C(!1),h=C(!1),m=C(!1),v=C(!1),p=C(!1),w=C(0),d=C(0),S=C(0);function K(){t.value=!0}function q(i){p.value=!0,n.seek(i).finally(()=>{t.value=!1,p.value=!1})}function X(i){n.setVolume(i)}function Y(){if(!a.value)return;const i=a.value;i.requestFullscreen().then(()=>{n.resize(i.clientWidth,i.clientHeight)}),h.value=!0}function J(){if(!a.value)return;const i=a.value;document.exitFullscreen().then(()=>{n.resize(i.clientWidth,i.clientHeight)}),h.value=!1}function c(){n.play().then(()=>{m.value=!0})}function u(){n.pause().then(()=>{m.value=!1})}function k(){if(m.value){u();return}c()}function V(){document.visibilityState==="hidden"&&u()}async function L(){p.value=!0;const i=await r(o.url);n.load(i).then(async()=>{if(d.value=Number(n.getDuration()),w.value=Number(n.getVolume()),n.on("time",y=>{t.value||(S.value=Number(y),s("timeupdate",S.value))}),n.on("ended",()=>{S.value=d.value,s("ended"),Ie(()=>{L()})}),o.startTime&&S.value!==d.value&&await n.seek(o.startTime),n.play({video:!0,audio:!0}).then(()=>{m.value=!0}).finally(()=>{p.value=!1}),a.value){let y;a.value.onmousemove=()=>{v.value=!0,window.clearTimeout(y),y=window.setTimeout(()=>{v.value=!1},5*1e3)},v.value=!0,y=window.setTimeout(()=>{v.value=!1},5*1e3)}})}return de(()=>o.url,(i,y)=>{i!==y&&(p.value=!1,m.value=!1,w.value=0,S.value=0,d.value=0,n.stop().then(()=>{L()}))}),document.addEventListener("visibilitychange",V),ce(()=>{n=new We({container:a.value,enableHardware:G.enableHardware,enableWebGPU:G.enableWebGPU,enableAudioWebcodec:G.enableAudioWebcodec,enableVideoWebcodec:G.enableVideoWebcodec,loop:!1,jitterBufferMax:4,jitterBufferMin:1,lowLatency:!0,isLive:o.isLive,checkUseMES:()=>!1}),L()}),ue(()=>{document.removeEventListener("visibilitychange",V),n.destroy()}),(i,y)=>(f(),I("div",{ref_key:"playerRef",ref:a,class:"player",onDblclick:k},[p.value?(f(),I("div",ml,[g(M(x))])):F("",!0),vl,b("div",{class:_(["player-controler",{"player-controler-show":!m.value||v.value}])},[i.isLive?F("",!0):(f(),I("div",pl,[g(te,{modelValue:S.value,"onUpdate:modelValue":y[0]||(y[0]=z=>S.value=z),max:d.value,onChange:K,onOnAfterChange:q},null,8,["modelValue","max"])])),b("div",yl,[b("div",gl,[B(g(M(Re),{onClick:c},null,512),[[E,!m.value]]),B(g(M(Ke),{onClick:u},null,512),[[E,m.value]])]),b("div",kl,[B(g(M(qe),null,null,512),[[E,w.value]]),B(g(M(Xe),null,null,512),[[E,!w.value]]),b("div",Cl,[g(te,{modelValue:w.value,"onUpdate:modelValue":y[1]||(y[1]=z=>w.value=z),max:3,step:.2,onChange:X},null,8,["modelValue"])])]),b("div",bl,[$(i.$slots,"toolbar-extra",{},void 0,!0),b("div",wl,[B(g(M(Ye),{onClick:Y},null,512),[[E,!h.value]]),B(g(M(Je),{onClick:J},null,512),[[E,h.value]])])])])],2),$(i.$slots,"default",{controllerVisible:v.value},void 0,!0)],544))}}),Ml=Ze(Sl,[["__scopeId","data-v-e26564da"]]);export{re as M,Ml as P,Pl as S,Tl as i,Ol as u};
