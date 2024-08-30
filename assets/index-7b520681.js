import{_ as m,g as y,w as V,x as v}from"./Player.vue_vue_type_style_index_0_scoped_e26564da_lang-dfeb7c19.js";import{T as w}from"./index-a7c0e6e7.js";import{d as P,r as S,a as r,s as h,o as $,j,k as g,f,n as a,G as i,K as d,t as C}from"./runtime-dom.esm-bundler-75af5957.js";const O=P({name:"Popover",components:{Trigger:w},props:{popupVisible:{type:Boolean,default:void 0},defaultPopupVisible:{type:Boolean,default:!1},title:String,content:String,trigger:{type:[String,Array],default:"hover"},position:{type:String,default:"top"},contentClass:{type:[String,Array,Object]},contentStyle:{type:Object},arrowClass:{type:[String,Array,Object]},arrowStyle:{type:Object},popupContainer:{type:[String,Object]}},emits:{"update:popupVisible":e=>!0,popupVisibleChange:e=>!0},setup(e,{emit:o}){const t=y("popover"),s=S(e.defaultPopupVisible),u=r(()=>{var n;return(n=e.popupVisible)!=null?n:s.value}),c=n=>{s.value=n,o("update:popupVisible",n),o("popupVisibleChange",n)},p=r(()=>[`${t}-popup-content`,e.contentClass]),b=r(()=>[`${t}-popup-arrow`,e.arrowClass]);return{prefixCls:t,computedPopupVisible:u,contentCls:p,arrowCls:b,handlePopupVisibleChange:c}}});function B(e,o,t,s,u,c){const p=h("trigger");return $(),j(p,{class:a(e.prefixCls),trigger:e.trigger,position:e.position,"popup-visible":e.computedPopupVisible,"popup-offset":10,"content-class":e.contentCls,"content-style":e.contentStyle,"arrow-class":e.arrowCls,"arrow-style":e.arrowStyle,"show-arrow":"","popup-container":e.popupContainer,"animation-name":"zoom-in-fade-out","auto-fit-transform-origin":"",onPopupVisibleChange:e.handlePopupVisibleChange},{content:g(()=>[f("div",{class:a(`${e.prefixCls}-title`)},[i(e.$slots,"title",{},()=>[d(C(e.title),1)])],2),f("div",{class:a(`${e.prefixCls}-content`)},[i(e.$slots,"content",{},()=>[d(C(e.content),1)])],2)]),default:g(()=>[i(e.$slots,"default")]),_:3},8,["class","trigger","position","popup-visible","content-class","content-style","arrow-class","arrow-style","popup-container","onPopupVisibleChange"])}var l=m(O,[["render",B]]);const z=Object.assign(l,{install:(e,o)=>{V(e,o);const t=v(o);e.component(t+l.name,l)}});export{z as P};
