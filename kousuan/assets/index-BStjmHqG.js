function V3(e,t){for(var n=0;n<t.length;n++){const r=t[n];if(typeof r!="string"&&!Array.isArray(r)){for(const i in r)if(i!=="default"&&!(i in e)){const o=Object.getOwnPropertyDescriptor(r,i);o&&Object.defineProperty(e,i,o.get?o:{enumerable:!0,get:()=>r[i]})}}}return Object.freeze(Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}))}(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const i of document.querySelectorAll('link[rel="modulepreload"]'))r(i);new MutationObserver(i=>{for(const o of i)if(o.type==="childList")for(const s of o.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&r(s)}).observe(document,{childList:!0,subtree:!0});function n(i){const o={};return i.integrity&&(o.integrity=i.integrity),i.referrerPolicy&&(o.referrerPolicy=i.referrerPolicy),i.crossOrigin==="use-credentials"?o.credentials="include":i.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function r(i){if(i.ep)return;i.ep=!0;const o=n(i);fetch(i.href,o)}})();var $r=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function hr(e){return e&&e.__esModule&&Object.prototype.hasOwnProperty.call(e,"default")?e.default:e}var W3={exports:{}},Au={},U3={exports:{}},ae={};/**
 * @license React
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var tl=Symbol.for("react.element"),v8=Symbol.for("react.portal"),x8=Symbol.for("react.fragment"),y8=Symbol.for("react.strict_mode"),w8=Symbol.for("react.profiler"),b8=Symbol.for("react.provider"),C8=Symbol.for("react.context"),k8=Symbol.for("react.forward_ref"),j8=Symbol.for("react.suspense"),E8=Symbol.for("react.memo"),S8=Symbol.for("react.lazy"),Zp=Symbol.iterator;function L8(e){return e===null||typeof e!="object"?null:(e=Zp&&e[Zp]||e["@@iterator"],typeof e=="function"?e:null)}var H3={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},q3=Object.assign,Z3={};function Go(e,t,n){this.props=e,this.context=t,this.refs=Z3,this.updater=n||H3}Go.prototype.isReactComponent={};Go.prototype.setState=function(e,t){if(typeof e!="object"&&typeof e!="function"&&e!=null)throw Error("setState(...): takes an object of state variables to update or a function which returns an object of state variables.");this.updater.enqueueSetState(this,e,t,"setState")};Go.prototype.forceUpdate=function(e){this.updater.enqueueForceUpdate(this,e,"forceUpdate")};function Q3(){}Q3.prototype=Go.prototype;function U1(e,t,n){this.props=e,this.context=t,this.refs=Z3,this.updater=n||H3}var H1=U1.prototype=new Q3;H1.constructor=U1;q3(H1,Go.prototype);H1.isPureReactComponent=!0;var Qp=Array.isArray,G3=Object.prototype.hasOwnProperty,q1={current:null},K3={key:!0,ref:!0,__self:!0,__source:!0};function Y3(e,t,n){var r,i={},o=null,s=null;if(t!=null)for(r in t.ref!==void 0&&(s=t.ref),t.key!==void 0&&(o=""+t.key),t)G3.call(t,r)&&!K3.hasOwnProperty(r)&&(i[r]=t[r]);var l=arguments.length-2;if(l===1)i.children=n;else if(1<l){for(var c=Array(l),u=0;u<l;u++)c[u]=arguments[u+2];i.children=c}if(e&&e.defaultProps)for(r in l=e.defaultProps,l)i[r]===void 0&&(i[r]=l[r]);return{$$typeof:tl,type:e,key:o,ref:s,props:i,_owner:q1.current}}function $8(e,t){return{$$typeof:tl,type:e.type,key:t,ref:e.ref,props:e.props,_owner:e._owner}}function Z1(e){return typeof e=="object"&&e!==null&&e.$$typeof===tl}function _8(e){var t={"=":"=0",":":"=2"};return"$"+e.replace(/[=:]/g,function(n){return t[n]})}var Gp=/\/+/g;function Id(e,t){return typeof e=="object"&&e!==null&&e.key!=null?_8(""+e.key):t.toString(36)}function bc(e,t,n,r,i){var o=typeof e;(o==="undefined"||o==="boolean")&&(e=null);var s=!1;if(e===null)s=!0;else switch(o){case"string":case"number":s=!0;break;case"object":switch(e.$$typeof){case tl:case v8:s=!0}}if(s)return s=e,i=i(s),e=r===""?"."+Id(s,0):r,Qp(i)?(n="",e!=null&&(n=e.replace(Gp,"$&/")+"/"),bc(i,t,n,"",function(u){return u})):i!=null&&(Z1(i)&&(i=$8(i,n+(!i.key||s&&s.key===i.key?"":(""+i.key).replace(Gp,"$&/")+"/")+e)),t.push(i)),1;if(s=0,r=r===""?".":r+":",Qp(e))for(var l=0;l<e.length;l++){o=e[l];var c=r+Id(o,l);s+=bc(o,t,n,c,i)}else if(c=L8(e),typeof c=="function")for(e=c.call(e),l=0;!(o=e.next()).done;)o=o.value,c=r+Id(o,l++),s+=bc(o,t,n,c,i);else if(o==="object")throw t=String(e),Error("Objects are not valid as a React child (found: "+(t==="[object Object]"?"object with keys {"+Object.keys(e).join(", ")+"}":t)+"). If you meant to render a collection of children, use an array instead.");return s}function bl(e,t,n){if(e==null)return e;var r=[],i=0;return bc(e,r,"","",function(o){return t.call(n,o,i++)}),r}function F8(e){if(e._status===-1){var t=e._result;t=t(),t.then(function(n){(e._status===0||e._status===-1)&&(e._status=1,e._result=n)},function(n){(e._status===0||e._status===-1)&&(e._status=2,e._result=n)}),e._status===-1&&(e._status=0,e._result=t)}if(e._status===1)return e._result.default;throw e._result}var gt={current:null},Cc={transition:null},O8={ReactCurrentDispatcher:gt,ReactCurrentBatchConfig:Cc,ReactCurrentOwner:q1};function X3(){throw Error("act(...) is not supported in production builds of React.")}ae.Children={map:bl,forEach:function(e,t,n){bl(e,function(){t.apply(this,arguments)},n)},count:function(e){var t=0;return bl(e,function(){t++}),t},toArray:function(e){return bl(e,function(t){return t})||[]},only:function(e){if(!Z1(e))throw Error("React.Children.only expected to receive a single React element child.");return e}};ae.Component=Go;ae.Fragment=x8;ae.Profiler=w8;ae.PureComponent=U1;ae.StrictMode=y8;ae.Suspense=j8;ae.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=O8;ae.act=X3;ae.cloneElement=function(e,t,n){if(e==null)throw Error("React.cloneElement(...): The argument must be a React element, but you passed "+e+".");var r=q3({},e.props),i=e.key,o=e.ref,s=e._owner;if(t!=null){if(t.ref!==void 0&&(o=t.ref,s=q1.current),t.key!==void 0&&(i=""+t.key),e.type&&e.type.defaultProps)var l=e.type.defaultProps;for(c in t)G3.call(t,c)&&!K3.hasOwnProperty(c)&&(r[c]=t[c]===void 0&&l!==void 0?l[c]:t[c])}var c=arguments.length-2;if(c===1)r.children=n;else if(1<c){l=Array(c);for(var u=0;u<c;u++)l[u]=arguments[u+2];r.children=l}return{$$typeof:tl,type:e.type,key:i,ref:o,props:r,_owner:s}};ae.createContext=function(e){return e={$$typeof:C8,_currentValue:e,_currentValue2:e,_threadCount:0,Provider:null,Consumer:null,_defaultValue:null,_globalName:null},e.Provider={$$typeof:b8,_context:e},e.Consumer=e};ae.createElement=Y3;ae.createFactory=function(e){var t=Y3.bind(null,e);return t.type=e,t};ae.createRef=function(){return{current:null}};ae.forwardRef=function(e){return{$$typeof:k8,render:e}};ae.isValidElement=Z1;ae.lazy=function(e){return{$$typeof:S8,_payload:{_status:-1,_result:e},_init:F8}};ae.memo=function(e,t){return{$$typeof:E8,type:e,compare:t===void 0?null:t}};ae.startTransition=function(e){var t=Cc.transition;Cc.transition={};try{e()}finally{Cc.transition=t}};ae.unstable_act=X3;ae.useCallback=function(e,t){return gt.current.useCallback(e,t)};ae.useContext=function(e){return gt.current.useContext(e)};ae.useDebugValue=function(){};ae.useDeferredValue=function(e){return gt.current.useDeferredValue(e)};ae.useEffect=function(e,t){return gt.current.useEffect(e,t)};ae.useId=function(){return gt.current.useId()};ae.useImperativeHandle=function(e,t,n){return gt.current.useImperativeHandle(e,t,n)};ae.useInsertionEffect=function(e,t){return gt.current.useInsertionEffect(e,t)};ae.useLayoutEffect=function(e,t){return gt.current.useLayoutEffect(e,t)};ae.useMemo=function(e,t){return gt.current.useMemo(e,t)};ae.useReducer=function(e,t,n){return gt.current.useReducer(e,t,n)};ae.useRef=function(e){return gt.current.useRef(e)};ae.useState=function(e){return gt.current.useState(e)};ae.useSyncExternalStore=function(e,t,n){return gt.current.useSyncExternalStore(e,t,n)};ae.useTransition=function(){return gt.current.useTransition()};ae.version="18.3.1";U3.exports=ae;var f=U3.exports;const k=hr(f),N8=V3({__proto__:null,default:k},[f]);/**
 * @license React
 * react-jsx-runtime.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var P8=f,R8=Symbol.for("react.element"),M8=Symbol.for("react.fragment"),T8=Object.prototype.hasOwnProperty,A8=P8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,I8={key:!0,ref:!0,__self:!0,__source:!0};function J3(e,t,n){var r,i={},o=null,s=null;n!==void 0&&(o=""+n),t.key!==void 0&&(o=""+t.key),t.ref!==void 0&&(s=t.ref);for(r in t)T8.call(t,r)&&!I8.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps,t)i[r]===void 0&&(i[r]=t[r]);return{$$typeof:R8,type:e,key:o,ref:s,props:i,_owner:A8.current}}Au.Fragment=M8;Au.jsx=J3;Au.jsxs=J3;W3.exports=Au;var a=W3.exports,o0={},e4={exports:{}},Zt={},t4={exports:{}},n4={};/**
 * @license React
 * scheduler.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */(function(e){function t(S,_){var O=S.length;S.push(_);e:for(;0<O;){var A=O-1>>>1,B=S[A];if(0<i(B,_))S[A]=_,S[O]=B,O=A;else break e}}function n(S){return S.length===0?null:S[0]}function r(S){if(S.length===0)return null;var _=S[0],O=S.pop();if(O!==_){S[0]=O;e:for(var A=0,B=S.length,G=B>>>1;A<G;){var H=2*(A+1)-1,W=S[H],Q=H+1,ee=S[Q];if(0>i(W,O))Q<B&&0>i(ee,W)?(S[A]=ee,S[Q]=O,A=Q):(S[A]=W,S[H]=O,A=H);else if(Q<B&&0>i(ee,O))S[A]=ee,S[Q]=O,A=Q;else break e}}return _}function i(S,_){var O=S.sortIndex-_.sortIndex;return O!==0?O:S.id-_.id}if(typeof performance=="object"&&typeof performance.now=="function"){var o=performance;e.unstable_now=function(){return o.now()}}else{var s=Date,l=s.now();e.unstable_now=function(){return s.now()-l}}var c=[],u=[],d=1,p=null,g=3,w=!1,y=!1,x=!1,C=typeof setTimeout=="function"?setTimeout:null,m=typeof clearTimeout=="function"?clearTimeout:null,v=typeof setImmediate<"u"?setImmediate:null;typeof navigator<"u"&&navigator.scheduling!==void 0&&navigator.scheduling.isInputPending!==void 0&&navigator.scheduling.isInputPending.bind(navigator.scheduling);function h(S){for(var _=n(u);_!==null;){if(_.callback===null)r(u);else if(_.startTime<=S)r(u),_.sortIndex=_.expirationTime,t(c,_);else break;_=n(u)}}function b(S){if(x=!1,h(S),!y)if(n(c)!==null)y=!0,P(j);else{var _=n(u);_!==null&&N(b,_.startTime-S)}}function j(S,_){y=!1,x&&(x=!1,m(F),F=-1),w=!0;var O=g;try{for(h(_),p=n(c);p!==null&&(!(p.expirationTime>_)||S&&!D());){var A=p.callback;if(typeof A=="function"){p.callback=null,g=p.priorityLevel;var B=A(p.expirationTime<=_);_=e.unstable_now(),typeof B=="function"?p.callback=B:p===n(c)&&r(c),h(_)}else r(c);p=n(c)}if(p!==null)var G=!0;else{var H=n(u);H!==null&&N(b,H.startTime-_),G=!1}return G}finally{p=null,g=O,w=!1}}var E=!1,$=null,F=-1,M=5,R=-1;function D(){return!(e.unstable_now()-R<M)}function T(){if($!==null){var S=e.unstable_now();R=S;var _=!0;try{_=$(!0,S)}finally{_?V():(E=!1,$=null)}}else E=!1}var V;if(typeof v=="function")V=function(){v(T)};else if(typeof MessageChannel<"u"){var z=new MessageChannel,I=z.port2;z.port1.onmessage=T,V=function(){I.postMessage(null)}}else V=function(){C(T,0)};function P(S){$=S,E||(E=!0,V())}function N(S,_){F=C(function(){S(e.unstable_now())},_)}e.unstable_IdlePriority=5,e.unstable_ImmediatePriority=1,e.unstable_LowPriority=4,e.unstable_NormalPriority=3,e.unstable_Profiling=null,e.unstable_UserBlockingPriority=2,e.unstable_cancelCallback=function(S){S.callback=null},e.unstable_continueExecution=function(){y||w||(y=!0,P(j))},e.unstable_forceFrameRate=function(S){0>S||125<S?console.error("forceFrameRate takes a positive int between 0 and 125, forcing frame rates higher than 125 fps is not supported"):M=0<S?Math.floor(1e3/S):5},e.unstable_getCurrentPriorityLevel=function(){return g},e.unstable_getFirstCallbackNode=function(){return n(c)},e.unstable_next=function(S){switch(g){case 1:case 2:case 3:var _=3;break;default:_=g}var O=g;g=_;try{return S()}finally{g=O}},e.unstable_pauseExecution=function(){},e.unstable_requestPaint=function(){},e.unstable_runWithPriority=function(S,_){switch(S){case 1:case 2:case 3:case 4:case 5:break;default:S=3}var O=g;g=S;try{return _()}finally{g=O}},e.unstable_scheduleCallback=function(S,_,O){var A=e.unstable_now();switch(typeof O=="object"&&O!==null?(O=O.delay,O=typeof O=="number"&&0<O?A+O:A):O=A,S){case 1:var B=-1;break;case 2:B=250;break;case 5:B=1073741823;break;case 4:B=1e4;break;default:B=5e3}return B=O+B,S={id:d++,callback:_,priorityLevel:S,startTime:O,expirationTime:B,sortIndex:-1},O>A?(S.sortIndex=O,t(u,S),n(c)===null&&S===n(u)&&(x?(m(F),F=-1):x=!0,N(b,O-A))):(S.sortIndex=B,t(c,S),y||w||(y=!0,P(j))),S},e.unstable_shouldYield=D,e.unstable_wrapCallback=function(S){var _=g;return function(){var O=g;g=_;try{return S.apply(this,arguments)}finally{g=O}}}})(n4);t4.exports=n4;var z8=t4.exports;/**
 * @license React
 * react-dom.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var D8=f,qt=z8;function q(e){for(var t="https://reactjs.org/docs/error-decoder.html?invariant="+e,n=1;n<arguments.length;n++)t+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+e+"; visit "+t+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var r4=new Set,ya={};function Mi(e,t){_o(e,t),_o(e+"Capture",t)}function _o(e,t){for(ya[e]=t,e=0;e<t.length;e++)r4.add(t[e])}var cr=!(typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"),s0=Object.prototype.hasOwnProperty,B8=/^[:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD][:A-Z_a-z\u00C0-\u00D6\u00D8-\u00F6\u00F8-\u02FF\u0370-\u037D\u037F-\u1FFF\u200C-\u200D\u2070-\u218F\u2C00-\u2FEF\u3001-\uD7FF\uF900-\uFDCF\uFDF0-\uFFFD\-.0-9\u00B7\u0300-\u036F\u203F-\u2040]*$/,Kp={},Yp={};function V8(e){return s0.call(Yp,e)?!0:s0.call(Kp,e)?!1:B8.test(e)?Yp[e]=!0:(Kp[e]=!0,!1)}function W8(e,t,n,r){if(n!==null&&n.type===0)return!1;switch(typeof t){case"function":case"symbol":return!0;case"boolean":return r?!1:n!==null?!n.acceptsBooleans:(e=e.toLowerCase().slice(0,5),e!=="data-"&&e!=="aria-");default:return!1}}function U8(e,t,n,r){if(t===null||typeof t>"u"||W8(e,t,n,r))return!0;if(r)return!1;if(n!==null)switch(n.type){case 3:return!t;case 4:return t===!1;case 5:return isNaN(t);case 6:return isNaN(t)||1>t}return!1}function vt(e,t,n,r,i,o,s){this.acceptsBooleans=t===2||t===3||t===4,this.attributeName=r,this.attributeNamespace=i,this.mustUseProperty=n,this.propertyName=e,this.type=t,this.sanitizeURL=o,this.removeEmptyString=s}var st={};"children dangerouslySetInnerHTML defaultValue defaultChecked innerHTML suppressContentEditableWarning suppressHydrationWarning style".split(" ").forEach(function(e){st[e]=new vt(e,0,!1,e,null,!1,!1)});[["acceptCharset","accept-charset"],["className","class"],["htmlFor","for"],["httpEquiv","http-equiv"]].forEach(function(e){var t=e[0];st[t]=new vt(t,1,!1,e[1],null,!1,!1)});["contentEditable","draggable","spellCheck","value"].forEach(function(e){st[e]=new vt(e,2,!1,e.toLowerCase(),null,!1,!1)});["autoReverse","externalResourcesRequired","focusable","preserveAlpha"].forEach(function(e){st[e]=new vt(e,2,!1,e,null,!1,!1)});"allowFullScreen async autoFocus autoPlay controls default defer disabled disablePictureInPicture disableRemotePlayback formNoValidate hidden loop noModule noValidate open playsInline readOnly required reversed scoped seamless itemScope".split(" ").forEach(function(e){st[e]=new vt(e,3,!1,e.toLowerCase(),null,!1,!1)});["checked","multiple","muted","selected"].forEach(function(e){st[e]=new vt(e,3,!0,e,null,!1,!1)});["capture","download"].forEach(function(e){st[e]=new vt(e,4,!1,e,null,!1,!1)});["cols","rows","size","span"].forEach(function(e){st[e]=new vt(e,6,!1,e,null,!1,!1)});["rowSpan","start"].forEach(function(e){st[e]=new vt(e,5,!1,e.toLowerCase(),null,!1,!1)});var Q1=/[\-:]([a-z])/g;function G1(e){return e[1].toUpperCase()}"accent-height alignment-baseline arabic-form baseline-shift cap-height clip-path clip-rule color-interpolation color-interpolation-filters color-profile color-rendering dominant-baseline enable-background fill-opacity fill-rule flood-color flood-opacity font-family font-size font-size-adjust font-stretch font-style font-variant font-weight glyph-name glyph-orientation-horizontal glyph-orientation-vertical horiz-adv-x horiz-origin-x image-rendering letter-spacing lighting-color marker-end marker-mid marker-start overline-position overline-thickness paint-order panose-1 pointer-events rendering-intent shape-rendering stop-color stop-opacity strikethrough-position strikethrough-thickness stroke-dasharray stroke-dashoffset stroke-linecap stroke-linejoin stroke-miterlimit stroke-opacity stroke-width text-anchor text-decoration text-rendering underline-position underline-thickness unicode-bidi unicode-range units-per-em v-alphabetic v-hanging v-ideographic v-mathematical vector-effect vert-adv-y vert-origin-x vert-origin-y word-spacing writing-mode xmlns:xlink x-height".split(" ").forEach(function(e){var t=e.replace(Q1,G1);st[t]=new vt(t,1,!1,e,null,!1,!1)});"xlink:actuate xlink:arcrole xlink:role xlink:show xlink:title xlink:type".split(" ").forEach(function(e){var t=e.replace(Q1,G1);st[t]=new vt(t,1,!1,e,"http://www.w3.org/1999/xlink",!1,!1)});["xml:base","xml:lang","xml:space"].forEach(function(e){var t=e.replace(Q1,G1);st[t]=new vt(t,1,!1,e,"http://www.w3.org/XML/1998/namespace",!1,!1)});["tabIndex","crossOrigin"].forEach(function(e){st[e]=new vt(e,1,!1,e.toLowerCase(),null,!1,!1)});st.xlinkHref=new vt("xlinkHref",1,!1,"xlink:href","http://www.w3.org/1999/xlink",!0,!1);["src","href","action","formAction"].forEach(function(e){st[e]=new vt(e,1,!1,e.toLowerCase(),null,!0,!0)});function K1(e,t,n,r){var i=st.hasOwnProperty(t)?st[t]:null;(i!==null?i.type!==0:r||!(2<t.length)||t[0]!=="o"&&t[0]!=="O"||t[1]!=="n"&&t[1]!=="N")&&(U8(t,n,i,r)&&(n=null),r||i===null?V8(t)&&(n===null?e.removeAttribute(t):e.setAttribute(t,""+n)):i.mustUseProperty?e[i.propertyName]=n===null?i.type===3?!1:"":n:(t=i.attributeName,r=i.attributeNamespace,n===null?e.removeAttribute(t):(i=i.type,n=i===3||i===4&&n===!0?"":""+n,r?e.setAttributeNS(r,t,n):e.setAttribute(t,n))))}var pr=D8.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED,Cl=Symbol.for("react.element"),ro=Symbol.for("react.portal"),io=Symbol.for("react.fragment"),Y1=Symbol.for("react.strict_mode"),a0=Symbol.for("react.profiler"),i4=Symbol.for("react.provider"),o4=Symbol.for("react.context"),X1=Symbol.for("react.forward_ref"),l0=Symbol.for("react.suspense"),c0=Symbol.for("react.suspense_list"),J1=Symbol.for("react.memo"),jr=Symbol.for("react.lazy"),s4=Symbol.for("react.offscreen"),Xp=Symbol.iterator;function us(e){return e===null||typeof e!="object"?null:(e=Xp&&e[Xp]||e["@@iterator"],typeof e=="function"?e:null)}var Ae=Object.assign,zd;function Ws(e){if(zd===void 0)try{throw Error()}catch(n){var t=n.stack.trim().match(/\n( *(at )?)/);zd=t&&t[1]||""}return`
`+zd+e}var Dd=!1;function Bd(e,t){if(!e||Dd)return"";Dd=!0;var n=Error.prepareStackTrace;Error.prepareStackTrace=void 0;try{if(t)if(t=function(){throw Error()},Object.defineProperty(t.prototype,"props",{set:function(){throw Error()}}),typeof Reflect=="object"&&Reflect.construct){try{Reflect.construct(t,[])}catch(u){var r=u}Reflect.construct(e,[],t)}else{try{t.call()}catch(u){r=u}e.call(t.prototype)}else{try{throw Error()}catch(u){r=u}e()}}catch(u){if(u&&r&&typeof u.stack=="string"){for(var i=u.stack.split(`
`),o=r.stack.split(`
`),s=i.length-1,l=o.length-1;1<=s&&0<=l&&i[s]!==o[l];)l--;for(;1<=s&&0<=l;s--,l--)if(i[s]!==o[l]){if(s!==1||l!==1)do if(s--,l--,0>l||i[s]!==o[l]){var c=`
`+i[s].replace(" at new "," at ");return e.displayName&&c.includes("<anonymous>")&&(c=c.replace("<anonymous>",e.displayName)),c}while(1<=s&&0<=l);break}}}finally{Dd=!1,Error.prepareStackTrace=n}return(e=e?e.displayName||e.name:"")?Ws(e):""}function H8(e){switch(e.tag){case 5:return Ws(e.type);case 16:return Ws("Lazy");case 13:return Ws("Suspense");case 19:return Ws("SuspenseList");case 0:case 2:case 15:return e=Bd(e.type,!1),e;case 11:return e=Bd(e.type.render,!1),e;case 1:return e=Bd(e.type,!0),e;default:return""}}function u0(e){if(e==null)return null;if(typeof e=="function")return e.displayName||e.name||null;if(typeof e=="string")return e;switch(e){case io:return"Fragment";case ro:return"Portal";case a0:return"Profiler";case Y1:return"StrictMode";case l0:return"Suspense";case c0:return"SuspenseList"}if(typeof e=="object")switch(e.$$typeof){case o4:return(e.displayName||"Context")+".Consumer";case i4:return(e._context.displayName||"Context")+".Provider";case X1:var t=e.render;return e=e.displayName,e||(e=t.displayName||t.name||"",e=e!==""?"ForwardRef("+e+")":"ForwardRef"),e;case J1:return t=e.displayName||null,t!==null?t:u0(e.type)||"Memo";case jr:t=e._payload,e=e._init;try{return u0(e(t))}catch{}}return null}function q8(e){var t=e.type;switch(e.tag){case 24:return"Cache";case 9:return(t.displayName||"Context")+".Consumer";case 10:return(t._context.displayName||"Context")+".Provider";case 18:return"DehydratedFragment";case 11:return e=t.render,e=e.displayName||e.name||"",t.displayName||(e!==""?"ForwardRef("+e+")":"ForwardRef");case 7:return"Fragment";case 5:return t;case 4:return"Portal";case 3:return"Root";case 6:return"Text";case 16:return u0(t);case 8:return t===Y1?"StrictMode":"Mode";case 22:return"Offscreen";case 12:return"Profiler";case 21:return"Scope";case 13:return"Suspense";case 19:return"SuspenseList";case 25:return"TracingMarker";case 1:case 0:case 17:case 2:case 14:case 15:if(typeof t=="function")return t.displayName||t.name||null;if(typeof t=="string")return t}return null}function Ur(e){switch(typeof e){case"boolean":case"number":case"string":case"undefined":return e;case"object":return e;default:return""}}function a4(e){var t=e.type;return(e=e.nodeName)&&e.toLowerCase()==="input"&&(t==="checkbox"||t==="radio")}function Z8(e){var t=a4(e)?"checked":"value",n=Object.getOwnPropertyDescriptor(e.constructor.prototype,t),r=""+e[t];if(!e.hasOwnProperty(t)&&typeof n<"u"&&typeof n.get=="function"&&typeof n.set=="function"){var i=n.get,o=n.set;return Object.defineProperty(e,t,{configurable:!0,get:function(){return i.call(this)},set:function(s){r=""+s,o.call(this,s)}}),Object.defineProperty(e,t,{enumerable:n.enumerable}),{getValue:function(){return r},setValue:function(s){r=""+s},stopTracking:function(){e._valueTracker=null,delete e[t]}}}}function kl(e){e._valueTracker||(e._valueTracker=Z8(e))}function l4(e){if(!e)return!1;var t=e._valueTracker;if(!t)return!0;var n=t.getValue(),r="";return e&&(r=a4(e)?e.checked?"true":"false":e.value),e=r,e!==n?(t.setValue(e),!0):!1}function Uc(e){if(e=e||(typeof document<"u"?document:void 0),typeof e>"u")return null;try{return e.activeElement||e.body}catch{return e.body}}function d0(e,t){var n=t.checked;return Ae({},t,{defaultChecked:void 0,defaultValue:void 0,value:void 0,checked:n??e._wrapperState.initialChecked})}function Jp(e,t){var n=t.defaultValue==null?"":t.defaultValue,r=t.checked!=null?t.checked:t.defaultChecked;n=Ur(t.value!=null?t.value:n),e._wrapperState={initialChecked:r,initialValue:n,controlled:t.type==="checkbox"||t.type==="radio"?t.checked!=null:t.value!=null}}function c4(e,t){t=t.checked,t!=null&&K1(e,"checked",t,!1)}function f0(e,t){c4(e,t);var n=Ur(t.value),r=t.type;if(n!=null)r==="number"?(n===0&&e.value===""||e.value!=n)&&(e.value=""+n):e.value!==""+n&&(e.value=""+n);else if(r==="submit"||r==="reset"){e.removeAttribute("value");return}t.hasOwnProperty("value")?h0(e,t.type,n):t.hasOwnProperty("defaultValue")&&h0(e,t.type,Ur(t.defaultValue)),t.checked==null&&t.defaultChecked!=null&&(e.defaultChecked=!!t.defaultChecked)}function e2(e,t,n){if(t.hasOwnProperty("value")||t.hasOwnProperty("defaultValue")){var r=t.type;if(!(r!=="submit"&&r!=="reset"||t.value!==void 0&&t.value!==null))return;t=""+e._wrapperState.initialValue,n||t===e.value||(e.value=t),e.defaultValue=t}n=e.name,n!==""&&(e.name=""),e.defaultChecked=!!e._wrapperState.initialChecked,n!==""&&(e.name=n)}function h0(e,t,n){(t!=="number"||Uc(e.ownerDocument)!==e)&&(n==null?e.defaultValue=""+e._wrapperState.initialValue:e.defaultValue!==""+n&&(e.defaultValue=""+n))}var Us=Array.isArray;function xo(e,t,n,r){if(e=e.options,t){t={};for(var i=0;i<n.length;i++)t["$"+n[i]]=!0;for(n=0;n<e.length;n++)i=t.hasOwnProperty("$"+e[n].value),e[n].selected!==i&&(e[n].selected=i),i&&r&&(e[n].defaultSelected=!0)}else{for(n=""+Ur(n),t=null,i=0;i<e.length;i++){if(e[i].value===n){e[i].selected=!0,r&&(e[i].defaultSelected=!0);return}t!==null||e[i].disabled||(t=e[i])}t!==null&&(t.selected=!0)}}function p0(e,t){if(t.dangerouslySetInnerHTML!=null)throw Error(q(91));return Ae({},t,{value:void 0,defaultValue:void 0,children:""+e._wrapperState.initialValue})}function t2(e,t){var n=t.value;if(n==null){if(n=t.children,t=t.defaultValue,n!=null){if(t!=null)throw Error(q(92));if(Us(n)){if(1<n.length)throw Error(q(93));n=n[0]}t=n}t==null&&(t=""),n=t}e._wrapperState={initialValue:Ur(n)}}function u4(e,t){var n=Ur(t.value),r=Ur(t.defaultValue);n!=null&&(n=""+n,n!==e.value&&(e.value=n),t.defaultValue==null&&e.defaultValue!==n&&(e.defaultValue=n)),r!=null&&(e.defaultValue=""+r)}function n2(e){var t=e.textContent;t===e._wrapperState.initialValue&&t!==""&&t!==null&&(e.value=t)}function d4(e){switch(e){case"svg":return"http://www.w3.org/2000/svg";case"math":return"http://www.w3.org/1998/Math/MathML";default:return"http://www.w3.org/1999/xhtml"}}function m0(e,t){return e==null||e==="http://www.w3.org/1999/xhtml"?d4(t):e==="http://www.w3.org/2000/svg"&&t==="foreignObject"?"http://www.w3.org/1999/xhtml":e}var jl,f4=function(e){return typeof MSApp<"u"&&MSApp.execUnsafeLocalFunction?function(t,n,r,i){MSApp.execUnsafeLocalFunction(function(){return e(t,n,r,i)})}:e}(function(e,t){if(e.namespaceURI!=="http://www.w3.org/2000/svg"||"innerHTML"in e)e.innerHTML=t;else{for(jl=jl||document.createElement("div"),jl.innerHTML="<svg>"+t.valueOf().toString()+"</svg>",t=jl.firstChild;e.firstChild;)e.removeChild(e.firstChild);for(;t.firstChild;)e.appendChild(t.firstChild)}});function wa(e,t){if(t){var n=e.firstChild;if(n&&n===e.lastChild&&n.nodeType===3){n.nodeValue=t;return}}e.textContent=t}var Js={animationIterationCount:!0,aspectRatio:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridArea:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0},Q8=["Webkit","ms","Moz","O"];Object.keys(Js).forEach(function(e){Q8.forEach(function(t){t=t+e.charAt(0).toUpperCase()+e.substring(1),Js[t]=Js[e]})});function h4(e,t,n){return t==null||typeof t=="boolean"||t===""?"":n||typeof t!="number"||t===0||Js.hasOwnProperty(e)&&Js[e]?(""+t).trim():t+"px"}function p4(e,t){e=e.style;for(var n in t)if(t.hasOwnProperty(n)){var r=n.indexOf("--")===0,i=h4(n,t[n],r);n==="float"&&(n="cssFloat"),r?e.setProperty(n,i):e[n]=i}}var G8=Ae({menuitem:!0},{area:!0,base:!0,br:!0,col:!0,embed:!0,hr:!0,img:!0,input:!0,keygen:!0,link:!0,meta:!0,param:!0,source:!0,track:!0,wbr:!0});function g0(e,t){if(t){if(G8[e]&&(t.children!=null||t.dangerouslySetInnerHTML!=null))throw Error(q(137,e));if(t.dangerouslySetInnerHTML!=null){if(t.children!=null)throw Error(q(60));if(typeof t.dangerouslySetInnerHTML!="object"||!("__html"in t.dangerouslySetInnerHTML))throw Error(q(61))}if(t.style!=null&&typeof t.style!="object")throw Error(q(62))}}function v0(e,t){if(e.indexOf("-")===-1)return typeof t.is=="string";switch(e){case"annotation-xml":case"color-profile":case"font-face":case"font-face-src":case"font-face-uri":case"font-face-format":case"font-face-name":case"missing-glyph":return!1;default:return!0}}var x0=null;function eh(e){return e=e.target||e.srcElement||window,e.correspondingUseElement&&(e=e.correspondingUseElement),e.nodeType===3?e.parentNode:e}var y0=null,yo=null,wo=null;function r2(e){if(e=il(e)){if(typeof y0!="function")throw Error(q(280));var t=e.stateNode;t&&(t=Vu(t),y0(e.stateNode,e.type,t))}}function m4(e){yo?wo?wo.push(e):wo=[e]:yo=e}function g4(){if(yo){var e=yo,t=wo;if(wo=yo=null,r2(e),t)for(e=0;e<t.length;e++)r2(t[e])}}function v4(e,t){return e(t)}function x4(){}var Vd=!1;function y4(e,t,n){if(Vd)return e(t,n);Vd=!0;try{return v4(e,t,n)}finally{Vd=!1,(yo!==null||wo!==null)&&(x4(),g4())}}function ba(e,t){var n=e.stateNode;if(n===null)return null;var r=Vu(n);if(r===null)return null;n=r[t];e:switch(t){case"onClick":case"onClickCapture":case"onDoubleClick":case"onDoubleClickCapture":case"onMouseDown":case"onMouseDownCapture":case"onMouseMove":case"onMouseMoveCapture":case"onMouseUp":case"onMouseUpCapture":case"onMouseEnter":(r=!r.disabled)||(e=e.type,r=!(e==="button"||e==="input"||e==="select"||e==="textarea")),e=!r;break e;default:e=!1}if(e)return null;if(n&&typeof n!="function")throw Error(q(231,t,typeof n));return n}var w0=!1;if(cr)try{var ds={};Object.defineProperty(ds,"passive",{get:function(){w0=!0}}),window.addEventListener("test",ds,ds),window.removeEventListener("test",ds,ds)}catch{w0=!1}function K8(e,t,n,r,i,o,s,l,c){var u=Array.prototype.slice.call(arguments,3);try{t.apply(n,u)}catch(d){this.onError(d)}}var ea=!1,Hc=null,qc=!1,b0=null,Y8={onError:function(e){ea=!0,Hc=e}};function X8(e,t,n,r,i,o,s,l,c){ea=!1,Hc=null,K8.apply(Y8,arguments)}function J8(e,t,n,r,i,o,s,l,c){if(X8.apply(this,arguments),ea){if(ea){var u=Hc;ea=!1,Hc=null}else throw Error(q(198));qc||(qc=!0,b0=u)}}function Ti(e){var t=e,n=e;if(e.alternate)for(;t.return;)t=t.return;else{e=t;do t=e,t.flags&4098&&(n=t.return),e=t.return;while(e)}return t.tag===3?n:null}function w4(e){if(e.tag===13){var t=e.memoizedState;if(t===null&&(e=e.alternate,e!==null&&(t=e.memoizedState)),t!==null)return t.dehydrated}return null}function i2(e){if(Ti(e)!==e)throw Error(q(188))}function ex(e){var t=e.alternate;if(!t){if(t=Ti(e),t===null)throw Error(q(188));return t!==e?null:e}for(var n=e,r=t;;){var i=n.return;if(i===null)break;var o=i.alternate;if(o===null){if(r=i.return,r!==null){n=r;continue}break}if(i.child===o.child){for(o=i.child;o;){if(o===n)return i2(i),e;if(o===r)return i2(i),t;o=o.sibling}throw Error(q(188))}if(n.return!==r.return)n=i,r=o;else{for(var s=!1,l=i.child;l;){if(l===n){s=!0,n=i,r=o;break}if(l===r){s=!0,r=i,n=o;break}l=l.sibling}if(!s){for(l=o.child;l;){if(l===n){s=!0,n=o,r=i;break}if(l===r){s=!0,r=o,n=i;break}l=l.sibling}if(!s)throw Error(q(189))}}if(n.alternate!==r)throw Error(q(190))}if(n.tag!==3)throw Error(q(188));return n.stateNode.current===n?e:t}function b4(e){return e=ex(e),e!==null?C4(e):null}function C4(e){if(e.tag===5||e.tag===6)return e;for(e=e.child;e!==null;){var t=C4(e);if(t!==null)return t;e=e.sibling}return null}var k4=qt.unstable_scheduleCallback,o2=qt.unstable_cancelCallback,tx=qt.unstable_shouldYield,nx=qt.unstable_requestPaint,Be=qt.unstable_now,rx=qt.unstable_getCurrentPriorityLevel,th=qt.unstable_ImmediatePriority,j4=qt.unstable_UserBlockingPriority,Zc=qt.unstable_NormalPriority,ix=qt.unstable_LowPriority,E4=qt.unstable_IdlePriority,Iu=null,Vn=null;function ox(e){if(Vn&&typeof Vn.onCommitFiberRoot=="function")try{Vn.onCommitFiberRoot(Iu,e,void 0,(e.current.flags&128)===128)}catch{}}var kn=Math.clz32?Math.clz32:lx,sx=Math.log,ax=Math.LN2;function lx(e){return e>>>=0,e===0?32:31-(sx(e)/ax|0)|0}var El=64,Sl=4194304;function Hs(e){switch(e&-e){case 1:return 1;case 2:return 2;case 4:return 4;case 8:return 8;case 16:return 16;case 32:return 32;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return e&4194240;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return e&130023424;case 134217728:return 134217728;case 268435456:return 268435456;case 536870912:return 536870912;case 1073741824:return 1073741824;default:return e}}function Qc(e,t){var n=e.pendingLanes;if(n===0)return 0;var r=0,i=e.suspendedLanes,o=e.pingedLanes,s=n&268435455;if(s!==0){var l=s&~i;l!==0?r=Hs(l):(o&=s,o!==0&&(r=Hs(o)))}else s=n&~i,s!==0?r=Hs(s):o!==0&&(r=Hs(o));if(r===0)return 0;if(t!==0&&t!==r&&!(t&i)&&(i=r&-r,o=t&-t,i>=o||i===16&&(o&4194240)!==0))return t;if(r&4&&(r|=n&16),t=e.entangledLanes,t!==0)for(e=e.entanglements,t&=r;0<t;)n=31-kn(t),i=1<<n,r|=e[n],t&=~i;return r}function cx(e,t){switch(e){case 1:case 2:case 4:return t+250;case 8:case 16:case 32:case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:return t+5e3;case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:return-1;case 134217728:case 268435456:case 536870912:case 1073741824:return-1;default:return-1}}function ux(e,t){for(var n=e.suspendedLanes,r=e.pingedLanes,i=e.expirationTimes,o=e.pendingLanes;0<o;){var s=31-kn(o),l=1<<s,c=i[s];c===-1?(!(l&n)||l&r)&&(i[s]=cx(l,t)):c<=t&&(e.expiredLanes|=l),o&=~l}}function C0(e){return e=e.pendingLanes&-1073741825,e!==0?e:e&1073741824?1073741824:0}function S4(){var e=El;return El<<=1,!(El&4194240)&&(El=64),e}function Wd(e){for(var t=[],n=0;31>n;n++)t.push(e);return t}function nl(e,t,n){e.pendingLanes|=t,t!==536870912&&(e.suspendedLanes=0,e.pingedLanes=0),e=e.eventTimes,t=31-kn(t),e[t]=n}function dx(e,t){var n=e.pendingLanes&~t;e.pendingLanes=t,e.suspendedLanes=0,e.pingedLanes=0,e.expiredLanes&=t,e.mutableReadLanes&=t,e.entangledLanes&=t,t=e.entanglements;var r=e.eventTimes;for(e=e.expirationTimes;0<n;){var i=31-kn(n),o=1<<i;t[i]=0,r[i]=-1,e[i]=-1,n&=~o}}function nh(e,t){var n=e.entangledLanes|=t;for(e=e.entanglements;n;){var r=31-kn(n),i=1<<r;i&t|e[r]&t&&(e[r]|=t),n&=~i}}var be=0;function L4(e){return e&=-e,1<e?4<e?e&268435455?16:536870912:4:1}var $4,rh,_4,F4,O4,k0=!1,Ll=[],Mr=null,Tr=null,Ar=null,Ca=new Map,ka=new Map,Sr=[],fx="mousedown mouseup touchcancel touchend touchstart auxclick dblclick pointercancel pointerdown pointerup dragend dragstart drop compositionend compositionstart keydown keypress keyup input textInput copy cut paste click change contextmenu reset submit".split(" ");function s2(e,t){switch(e){case"focusin":case"focusout":Mr=null;break;case"dragenter":case"dragleave":Tr=null;break;case"mouseover":case"mouseout":Ar=null;break;case"pointerover":case"pointerout":Ca.delete(t.pointerId);break;case"gotpointercapture":case"lostpointercapture":ka.delete(t.pointerId)}}function fs(e,t,n,r,i,o){return e===null||e.nativeEvent!==o?(e={blockedOn:t,domEventName:n,eventSystemFlags:r,nativeEvent:o,targetContainers:[i]},t!==null&&(t=il(t),t!==null&&rh(t)),e):(e.eventSystemFlags|=r,t=e.targetContainers,i!==null&&t.indexOf(i)===-1&&t.push(i),e)}function hx(e,t,n,r,i){switch(t){case"focusin":return Mr=fs(Mr,e,t,n,r,i),!0;case"dragenter":return Tr=fs(Tr,e,t,n,r,i),!0;case"mouseover":return Ar=fs(Ar,e,t,n,r,i),!0;case"pointerover":var o=i.pointerId;return Ca.set(o,fs(Ca.get(o)||null,e,t,n,r,i)),!0;case"gotpointercapture":return o=i.pointerId,ka.set(o,fs(ka.get(o)||null,e,t,n,r,i)),!0}return!1}function N4(e){var t=di(e.target);if(t!==null){var n=Ti(t);if(n!==null){if(t=n.tag,t===13){if(t=w4(n),t!==null){e.blockedOn=t,O4(e.priority,function(){_4(n)});return}}else if(t===3&&n.stateNode.current.memoizedState.isDehydrated){e.blockedOn=n.tag===3?n.stateNode.containerInfo:null;return}}}e.blockedOn=null}function kc(e){if(e.blockedOn!==null)return!1;for(var t=e.targetContainers;0<t.length;){var n=j0(e.domEventName,e.eventSystemFlags,t[0],e.nativeEvent);if(n===null){n=e.nativeEvent;var r=new n.constructor(n.type,n);x0=r,n.target.dispatchEvent(r),x0=null}else return t=il(n),t!==null&&rh(t),e.blockedOn=n,!1;t.shift()}return!0}function a2(e,t,n){kc(e)&&n.delete(t)}function px(){k0=!1,Mr!==null&&kc(Mr)&&(Mr=null),Tr!==null&&kc(Tr)&&(Tr=null),Ar!==null&&kc(Ar)&&(Ar=null),Ca.forEach(a2),ka.forEach(a2)}function hs(e,t){e.blockedOn===t&&(e.blockedOn=null,k0||(k0=!0,qt.unstable_scheduleCallback(qt.unstable_NormalPriority,px)))}function ja(e){function t(i){return hs(i,e)}if(0<Ll.length){hs(Ll[0],e);for(var n=1;n<Ll.length;n++){var r=Ll[n];r.blockedOn===e&&(r.blockedOn=null)}}for(Mr!==null&&hs(Mr,e),Tr!==null&&hs(Tr,e),Ar!==null&&hs(Ar,e),Ca.forEach(t),ka.forEach(t),n=0;n<Sr.length;n++)r=Sr[n],r.blockedOn===e&&(r.blockedOn=null);for(;0<Sr.length&&(n=Sr[0],n.blockedOn===null);)N4(n),n.blockedOn===null&&Sr.shift()}var bo=pr.ReactCurrentBatchConfig,Gc=!0;function mx(e,t,n,r){var i=be,o=bo.transition;bo.transition=null;try{be=1,ih(e,t,n,r)}finally{be=i,bo.transition=o}}function gx(e,t,n,r){var i=be,o=bo.transition;bo.transition=null;try{be=4,ih(e,t,n,r)}finally{be=i,bo.transition=o}}function ih(e,t,n,r){if(Gc){var i=j0(e,t,n,r);if(i===null)Jd(e,t,r,Kc,n),s2(e,r);else if(hx(i,e,t,n,r))r.stopPropagation();else if(s2(e,r),t&4&&-1<fx.indexOf(e)){for(;i!==null;){var o=il(i);if(o!==null&&$4(o),o=j0(e,t,n,r),o===null&&Jd(e,t,r,Kc,n),o===i)break;i=o}i!==null&&r.stopPropagation()}else Jd(e,t,r,null,n)}}var Kc=null;function j0(e,t,n,r){if(Kc=null,e=eh(r),e=di(e),e!==null)if(t=Ti(e),t===null)e=null;else if(n=t.tag,n===13){if(e=w4(t),e!==null)return e;e=null}else if(n===3){if(t.stateNode.current.memoizedState.isDehydrated)return t.tag===3?t.stateNode.containerInfo:null;e=null}else t!==e&&(e=null);return Kc=e,null}function P4(e){switch(e){case"cancel":case"click":case"close":case"contextmenu":case"copy":case"cut":case"auxclick":case"dblclick":case"dragend":case"dragstart":case"drop":case"focusin":case"focusout":case"input":case"invalid":case"keydown":case"keypress":case"keyup":case"mousedown":case"mouseup":case"paste":case"pause":case"play":case"pointercancel":case"pointerdown":case"pointerup":case"ratechange":case"reset":case"resize":case"seeked":case"submit":case"touchcancel":case"touchend":case"touchstart":case"volumechange":case"change":case"selectionchange":case"textInput":case"compositionstart":case"compositionend":case"compositionupdate":case"beforeblur":case"afterblur":case"beforeinput":case"blur":case"fullscreenchange":case"focus":case"hashchange":case"popstate":case"select":case"selectstart":return 1;case"drag":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"mousemove":case"mouseout":case"mouseover":case"pointermove":case"pointerout":case"pointerover":case"scroll":case"toggle":case"touchmove":case"wheel":case"mouseenter":case"mouseleave":case"pointerenter":case"pointerleave":return 4;case"message":switch(rx()){case th:return 1;case j4:return 4;case Zc:case ix:return 16;case E4:return 536870912;default:return 16}default:return 16}}var _r=null,oh=null,jc=null;function R4(){if(jc)return jc;var e,t=oh,n=t.length,r,i="value"in _r?_r.value:_r.textContent,o=i.length;for(e=0;e<n&&t[e]===i[e];e++);var s=n-e;for(r=1;r<=s&&t[n-r]===i[o-r];r++);return jc=i.slice(e,1<r?1-r:void 0)}function Ec(e){var t=e.keyCode;return"charCode"in e?(e=e.charCode,e===0&&t===13&&(e=13)):e=t,e===10&&(e=13),32<=e||e===13?e:0}function $l(){return!0}function l2(){return!1}function Qt(e){function t(n,r,i,o,s){this._reactName=n,this._targetInst=i,this.type=r,this.nativeEvent=o,this.target=s,this.currentTarget=null;for(var l in e)e.hasOwnProperty(l)&&(n=e[l],this[l]=n?n(o):o[l]);return this.isDefaultPrevented=(o.defaultPrevented!=null?o.defaultPrevented:o.returnValue===!1)?$l:l2,this.isPropagationStopped=l2,this}return Ae(t.prototype,{preventDefault:function(){this.defaultPrevented=!0;var n=this.nativeEvent;n&&(n.preventDefault?n.preventDefault():typeof n.returnValue!="unknown"&&(n.returnValue=!1),this.isDefaultPrevented=$l)},stopPropagation:function(){var n=this.nativeEvent;n&&(n.stopPropagation?n.stopPropagation():typeof n.cancelBubble!="unknown"&&(n.cancelBubble=!0),this.isPropagationStopped=$l)},persist:function(){},isPersistent:$l}),t}var Ko={eventPhase:0,bubbles:0,cancelable:0,timeStamp:function(e){return e.timeStamp||Date.now()},defaultPrevented:0,isTrusted:0},sh=Qt(Ko),rl=Ae({},Ko,{view:0,detail:0}),vx=Qt(rl),Ud,Hd,ps,zu=Ae({},rl,{screenX:0,screenY:0,clientX:0,clientY:0,pageX:0,pageY:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,getModifierState:ah,button:0,buttons:0,relatedTarget:function(e){return e.relatedTarget===void 0?e.fromElement===e.srcElement?e.toElement:e.fromElement:e.relatedTarget},movementX:function(e){return"movementX"in e?e.movementX:(e!==ps&&(ps&&e.type==="mousemove"?(Ud=e.screenX-ps.screenX,Hd=e.screenY-ps.screenY):Hd=Ud=0,ps=e),Ud)},movementY:function(e){return"movementY"in e?e.movementY:Hd}}),c2=Qt(zu),xx=Ae({},zu,{dataTransfer:0}),yx=Qt(xx),wx=Ae({},rl,{relatedTarget:0}),qd=Qt(wx),bx=Ae({},Ko,{animationName:0,elapsedTime:0,pseudoElement:0}),Cx=Qt(bx),kx=Ae({},Ko,{clipboardData:function(e){return"clipboardData"in e?e.clipboardData:window.clipboardData}}),jx=Qt(kx),Ex=Ae({},Ko,{data:0}),u2=Qt(Ex),Sx={Esc:"Escape",Spacebar:" ",Left:"ArrowLeft",Up:"ArrowUp",Right:"ArrowRight",Down:"ArrowDown",Del:"Delete",Win:"OS",Menu:"ContextMenu",Apps:"ContextMenu",Scroll:"ScrollLock",MozPrintableKey:"Unidentified"},Lx={8:"Backspace",9:"Tab",12:"Clear",13:"Enter",16:"Shift",17:"Control",18:"Alt",19:"Pause",20:"CapsLock",27:"Escape",32:" ",33:"PageUp",34:"PageDown",35:"End",36:"Home",37:"ArrowLeft",38:"ArrowUp",39:"ArrowRight",40:"ArrowDown",45:"Insert",46:"Delete",112:"F1",113:"F2",114:"F3",115:"F4",116:"F5",117:"F6",118:"F7",119:"F8",120:"F9",121:"F10",122:"F11",123:"F12",144:"NumLock",145:"ScrollLock",224:"Meta"},$x={Alt:"altKey",Control:"ctrlKey",Meta:"metaKey",Shift:"shiftKey"};function _x(e){var t=this.nativeEvent;return t.getModifierState?t.getModifierState(e):(e=$x[e])?!!t[e]:!1}function ah(){return _x}var Fx=Ae({},rl,{key:function(e){if(e.key){var t=Sx[e.key]||e.key;if(t!=="Unidentified")return t}return e.type==="keypress"?(e=Ec(e),e===13?"Enter":String.fromCharCode(e)):e.type==="keydown"||e.type==="keyup"?Lx[e.keyCode]||"Unidentified":""},code:0,location:0,ctrlKey:0,shiftKey:0,altKey:0,metaKey:0,repeat:0,locale:0,getModifierState:ah,charCode:function(e){return e.type==="keypress"?Ec(e):0},keyCode:function(e){return e.type==="keydown"||e.type==="keyup"?e.keyCode:0},which:function(e){return e.type==="keypress"?Ec(e):e.type==="keydown"||e.type==="keyup"?e.keyCode:0}}),Ox=Qt(Fx),Nx=Ae({},zu,{pointerId:0,width:0,height:0,pressure:0,tangentialPressure:0,tiltX:0,tiltY:0,twist:0,pointerType:0,isPrimary:0}),d2=Qt(Nx),Px=Ae({},rl,{touches:0,targetTouches:0,changedTouches:0,altKey:0,metaKey:0,ctrlKey:0,shiftKey:0,getModifierState:ah}),Rx=Qt(Px),Mx=Ae({},Ko,{propertyName:0,elapsedTime:0,pseudoElement:0}),Tx=Qt(Mx),Ax=Ae({},zu,{deltaX:function(e){return"deltaX"in e?e.deltaX:"wheelDeltaX"in e?-e.wheelDeltaX:0},deltaY:function(e){return"deltaY"in e?e.deltaY:"wheelDeltaY"in e?-e.wheelDeltaY:"wheelDelta"in e?-e.wheelDelta:0},deltaZ:0,deltaMode:0}),Ix=Qt(Ax),zx=[9,13,27,32],lh=cr&&"CompositionEvent"in window,ta=null;cr&&"documentMode"in document&&(ta=document.documentMode);var Dx=cr&&"TextEvent"in window&&!ta,M4=cr&&(!lh||ta&&8<ta&&11>=ta),f2=" ",h2=!1;function T4(e,t){switch(e){case"keyup":return zx.indexOf(t.keyCode)!==-1;case"keydown":return t.keyCode!==229;case"keypress":case"mousedown":case"focusout":return!0;default:return!1}}function A4(e){return e=e.detail,typeof e=="object"&&"data"in e?e.data:null}var oo=!1;function Bx(e,t){switch(e){case"compositionend":return A4(t);case"keypress":return t.which!==32?null:(h2=!0,f2);case"textInput":return e=t.data,e===f2&&h2?null:e;default:return null}}function Vx(e,t){if(oo)return e==="compositionend"||!lh&&T4(e,t)?(e=R4(),jc=oh=_r=null,oo=!1,e):null;switch(e){case"paste":return null;case"keypress":if(!(t.ctrlKey||t.altKey||t.metaKey)||t.ctrlKey&&t.altKey){if(t.char&&1<t.char.length)return t.char;if(t.which)return String.fromCharCode(t.which)}return null;case"compositionend":return M4&&t.locale!=="ko"?null:t.data;default:return null}}var Wx={color:!0,date:!0,datetime:!0,"datetime-local":!0,email:!0,month:!0,number:!0,password:!0,range:!0,search:!0,tel:!0,text:!0,time:!0,url:!0,week:!0};function p2(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t==="input"?!!Wx[e.type]:t==="textarea"}function I4(e,t,n,r){m4(r),t=Yc(t,"onChange"),0<t.length&&(n=new sh("onChange","change",null,n,r),e.push({event:n,listeners:t}))}var na=null,Ea=null;function Ux(e){G4(e,0)}function Du(e){var t=lo(e);if(l4(t))return e}function Hx(e,t){if(e==="change")return t}var z4=!1;if(cr){var Zd;if(cr){var Qd="oninput"in document;if(!Qd){var m2=document.createElement("div");m2.setAttribute("oninput","return;"),Qd=typeof m2.oninput=="function"}Zd=Qd}else Zd=!1;z4=Zd&&(!document.documentMode||9<document.documentMode)}function g2(){na&&(na.detachEvent("onpropertychange",D4),Ea=na=null)}function D4(e){if(e.propertyName==="value"&&Du(Ea)){var t=[];I4(t,Ea,e,eh(e)),y4(Ux,t)}}function qx(e,t,n){e==="focusin"?(g2(),na=t,Ea=n,na.attachEvent("onpropertychange",D4)):e==="focusout"&&g2()}function Zx(e){if(e==="selectionchange"||e==="keyup"||e==="keydown")return Du(Ea)}function Qx(e,t){if(e==="click")return Du(t)}function Gx(e,t){if(e==="input"||e==="change")return Du(t)}function Kx(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var Ln=typeof Object.is=="function"?Object.is:Kx;function Sa(e,t){if(Ln(e,t))return!0;if(typeof e!="object"||e===null||typeof t!="object"||t===null)return!1;var n=Object.keys(e),r=Object.keys(t);if(n.length!==r.length)return!1;for(r=0;r<n.length;r++){var i=n[r];if(!s0.call(t,i)||!Ln(e[i],t[i]))return!1}return!0}function v2(e){for(;e&&e.firstChild;)e=e.firstChild;return e}function x2(e,t){var n=v2(e);e=0;for(var r;n;){if(n.nodeType===3){if(r=e+n.textContent.length,e<=t&&r>=t)return{node:n,offset:t-e};e=r}e:{for(;n;){if(n.nextSibling){n=n.nextSibling;break e}n=n.parentNode}n=void 0}n=v2(n)}}function B4(e,t){return e&&t?e===t?!0:e&&e.nodeType===3?!1:t&&t.nodeType===3?B4(e,t.parentNode):"contains"in e?e.contains(t):e.compareDocumentPosition?!!(e.compareDocumentPosition(t)&16):!1:!1}function V4(){for(var e=window,t=Uc();t instanceof e.HTMLIFrameElement;){try{var n=typeof t.contentWindow.location.href=="string"}catch{n=!1}if(n)e=t.contentWindow;else break;t=Uc(e.document)}return t}function ch(e){var t=e&&e.nodeName&&e.nodeName.toLowerCase();return t&&(t==="input"&&(e.type==="text"||e.type==="search"||e.type==="tel"||e.type==="url"||e.type==="password")||t==="textarea"||e.contentEditable==="true")}function Yx(e){var t=V4(),n=e.focusedElem,r=e.selectionRange;if(t!==n&&n&&n.ownerDocument&&B4(n.ownerDocument.documentElement,n)){if(r!==null&&ch(n)){if(t=r.start,e=r.end,e===void 0&&(e=t),"selectionStart"in n)n.selectionStart=t,n.selectionEnd=Math.min(e,n.value.length);else if(e=(t=n.ownerDocument||document)&&t.defaultView||window,e.getSelection){e=e.getSelection();var i=n.textContent.length,o=Math.min(r.start,i);r=r.end===void 0?o:Math.min(r.end,i),!e.extend&&o>r&&(i=r,r=o,o=i),i=x2(n,o);var s=x2(n,r);i&&s&&(e.rangeCount!==1||e.anchorNode!==i.node||e.anchorOffset!==i.offset||e.focusNode!==s.node||e.focusOffset!==s.offset)&&(t=t.createRange(),t.setStart(i.node,i.offset),e.removeAllRanges(),o>r?(e.addRange(t),e.extend(s.node,s.offset)):(t.setEnd(s.node,s.offset),e.addRange(t)))}}for(t=[],e=n;e=e.parentNode;)e.nodeType===1&&t.push({element:e,left:e.scrollLeft,top:e.scrollTop});for(typeof n.focus=="function"&&n.focus(),n=0;n<t.length;n++)e=t[n],e.element.scrollLeft=e.left,e.element.scrollTop=e.top}}var Xx=cr&&"documentMode"in document&&11>=document.documentMode,so=null,E0=null,ra=null,S0=!1;function y2(e,t,n){var r=n.window===n?n.document:n.nodeType===9?n:n.ownerDocument;S0||so==null||so!==Uc(r)||(r=so,"selectionStart"in r&&ch(r)?r={start:r.selectionStart,end:r.selectionEnd}:(r=(r.ownerDocument&&r.ownerDocument.defaultView||window).getSelection(),r={anchorNode:r.anchorNode,anchorOffset:r.anchorOffset,focusNode:r.focusNode,focusOffset:r.focusOffset}),ra&&Sa(ra,r)||(ra=r,r=Yc(E0,"onSelect"),0<r.length&&(t=new sh("onSelect","select",null,t,n),e.push({event:t,listeners:r}),t.target=so)))}function _l(e,t){var n={};return n[e.toLowerCase()]=t.toLowerCase(),n["Webkit"+e]="webkit"+t,n["Moz"+e]="moz"+t,n}var ao={animationend:_l("Animation","AnimationEnd"),animationiteration:_l("Animation","AnimationIteration"),animationstart:_l("Animation","AnimationStart"),transitionend:_l("Transition","TransitionEnd")},Gd={},W4={};cr&&(W4=document.createElement("div").style,"AnimationEvent"in window||(delete ao.animationend.animation,delete ao.animationiteration.animation,delete ao.animationstart.animation),"TransitionEvent"in window||delete ao.transitionend.transition);function Bu(e){if(Gd[e])return Gd[e];if(!ao[e])return e;var t=ao[e],n;for(n in t)if(t.hasOwnProperty(n)&&n in W4)return Gd[e]=t[n];return e}var U4=Bu("animationend"),H4=Bu("animationiteration"),q4=Bu("animationstart"),Z4=Bu("transitionend"),Q4=new Map,w2="abort auxClick cancel canPlay canPlayThrough click close contextMenu copy cut drag dragEnd dragEnter dragExit dragLeave dragOver dragStart drop durationChange emptied encrypted ended error gotPointerCapture input invalid keyDown keyPress keyUp load loadedData loadedMetadata loadStart lostPointerCapture mouseDown mouseMove mouseOut mouseOver mouseUp paste pause play playing pointerCancel pointerDown pointerMove pointerOut pointerOver pointerUp progress rateChange reset resize seeked seeking stalled submit suspend timeUpdate touchCancel touchEnd touchStart volumeChange scroll toggle touchMove waiting wheel".split(" ");function Xr(e,t){Q4.set(e,t),Mi(t,[e])}for(var Kd=0;Kd<w2.length;Kd++){var Yd=w2[Kd],Jx=Yd.toLowerCase(),e7=Yd[0].toUpperCase()+Yd.slice(1);Xr(Jx,"on"+e7)}Xr(U4,"onAnimationEnd");Xr(H4,"onAnimationIteration");Xr(q4,"onAnimationStart");Xr("dblclick","onDoubleClick");Xr("focusin","onFocus");Xr("focusout","onBlur");Xr(Z4,"onTransitionEnd");_o("onMouseEnter",["mouseout","mouseover"]);_o("onMouseLeave",["mouseout","mouseover"]);_o("onPointerEnter",["pointerout","pointerover"]);_o("onPointerLeave",["pointerout","pointerover"]);Mi("onChange","change click focusin focusout input keydown keyup selectionchange".split(" "));Mi("onSelect","focusout contextmenu dragend focusin keydown keyup mousedown mouseup selectionchange".split(" "));Mi("onBeforeInput",["compositionend","keypress","textInput","paste"]);Mi("onCompositionEnd","compositionend focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionStart","compositionstart focusout keydown keypress keyup mousedown".split(" "));Mi("onCompositionUpdate","compositionupdate focusout keydown keypress keyup mousedown".split(" "));var qs="abort canplay canplaythrough durationchange emptied encrypted ended error loadeddata loadedmetadata loadstart pause play playing progress ratechange resize seeked seeking stalled suspend timeupdate volumechange waiting".split(" "),t7=new Set("cancel close invalid load scroll toggle".split(" ").concat(qs));function b2(e,t,n){var r=e.type||"unknown-event";e.currentTarget=n,J8(r,t,void 0,e),e.currentTarget=null}function G4(e,t){t=(t&4)!==0;for(var n=0;n<e.length;n++){var r=e[n],i=r.event;r=r.listeners;e:{var o=void 0;if(t)for(var s=r.length-1;0<=s;s--){var l=r[s],c=l.instance,u=l.currentTarget;if(l=l.listener,c!==o&&i.isPropagationStopped())break e;b2(i,l,u),o=c}else for(s=0;s<r.length;s++){if(l=r[s],c=l.instance,u=l.currentTarget,l=l.listener,c!==o&&i.isPropagationStopped())break e;b2(i,l,u),o=c}}}if(qc)throw e=b0,qc=!1,b0=null,e}function Le(e,t){var n=t[O0];n===void 0&&(n=t[O0]=new Set);var r=e+"__bubble";n.has(r)||(K4(t,e,2,!1),n.add(r))}function Xd(e,t,n){var r=0;t&&(r|=4),K4(n,e,r,t)}var Fl="_reactListening"+Math.random().toString(36).slice(2);function La(e){if(!e[Fl]){e[Fl]=!0,r4.forEach(function(n){n!=="selectionchange"&&(t7.has(n)||Xd(n,!1,e),Xd(n,!0,e))});var t=e.nodeType===9?e:e.ownerDocument;t===null||t[Fl]||(t[Fl]=!0,Xd("selectionchange",!1,t))}}function K4(e,t,n,r){switch(P4(t)){case 1:var i=mx;break;case 4:i=gx;break;default:i=ih}n=i.bind(null,t,n,e),i=void 0,!w0||t!=="touchstart"&&t!=="touchmove"&&t!=="wheel"||(i=!0),r?i!==void 0?e.addEventListener(t,n,{capture:!0,passive:i}):e.addEventListener(t,n,!0):i!==void 0?e.addEventListener(t,n,{passive:i}):e.addEventListener(t,n,!1)}function Jd(e,t,n,r,i){var o=r;if(!(t&1)&&!(t&2)&&r!==null)e:for(;;){if(r===null)return;var s=r.tag;if(s===3||s===4){var l=r.stateNode.containerInfo;if(l===i||l.nodeType===8&&l.parentNode===i)break;if(s===4)for(s=r.return;s!==null;){var c=s.tag;if((c===3||c===4)&&(c=s.stateNode.containerInfo,c===i||c.nodeType===8&&c.parentNode===i))return;s=s.return}for(;l!==null;){if(s=di(l),s===null)return;if(c=s.tag,c===5||c===6){r=o=s;continue e}l=l.parentNode}}r=r.return}y4(function(){var u=o,d=eh(n),p=[];e:{var g=Q4.get(e);if(g!==void 0){var w=sh,y=e;switch(e){case"keypress":if(Ec(n)===0)break e;case"keydown":case"keyup":w=Ox;break;case"focusin":y="focus",w=qd;break;case"focusout":y="blur",w=qd;break;case"beforeblur":case"afterblur":w=qd;break;case"click":if(n.button===2)break e;case"auxclick":case"dblclick":case"mousedown":case"mousemove":case"mouseup":case"mouseout":case"mouseover":case"contextmenu":w=c2;break;case"drag":case"dragend":case"dragenter":case"dragexit":case"dragleave":case"dragover":case"dragstart":case"drop":w=yx;break;case"touchcancel":case"touchend":case"touchmove":case"touchstart":w=Rx;break;case U4:case H4:case q4:w=Cx;break;case Z4:w=Tx;break;case"scroll":w=vx;break;case"wheel":w=Ix;break;case"copy":case"cut":case"paste":w=jx;break;case"gotpointercapture":case"lostpointercapture":case"pointercancel":case"pointerdown":case"pointermove":case"pointerout":case"pointerover":case"pointerup":w=d2}var x=(t&4)!==0,C=!x&&e==="scroll",m=x?g!==null?g+"Capture":null:g;x=[];for(var v=u,h;v!==null;){h=v;var b=h.stateNode;if(h.tag===5&&b!==null&&(h=b,m!==null&&(b=ba(v,m),b!=null&&x.push($a(v,b,h)))),C)break;v=v.return}0<x.length&&(g=new w(g,y,null,n,d),p.push({event:g,listeners:x}))}}if(!(t&7)){e:{if(g=e==="mouseover"||e==="pointerover",w=e==="mouseout"||e==="pointerout",g&&n!==x0&&(y=n.relatedTarget||n.fromElement)&&(di(y)||y[ur]))break e;if((w||g)&&(g=d.window===d?d:(g=d.ownerDocument)?g.defaultView||g.parentWindow:window,w?(y=n.relatedTarget||n.toElement,w=u,y=y?di(y):null,y!==null&&(C=Ti(y),y!==C||y.tag!==5&&y.tag!==6)&&(y=null)):(w=null,y=u),w!==y)){if(x=c2,b="onMouseLeave",m="onMouseEnter",v="mouse",(e==="pointerout"||e==="pointerover")&&(x=d2,b="onPointerLeave",m="onPointerEnter",v="pointer"),C=w==null?g:lo(w),h=y==null?g:lo(y),g=new x(b,v+"leave",w,n,d),g.target=C,g.relatedTarget=h,b=null,di(d)===u&&(x=new x(m,v+"enter",y,n,d),x.target=h,x.relatedTarget=C,b=x),C=b,w&&y)t:{for(x=w,m=y,v=0,h=x;h;h=Di(h))v++;for(h=0,b=m;b;b=Di(b))h++;for(;0<v-h;)x=Di(x),v--;for(;0<h-v;)m=Di(m),h--;for(;v--;){if(x===m||m!==null&&x===m.alternate)break t;x=Di(x),m=Di(m)}x=null}else x=null;w!==null&&C2(p,g,w,x,!1),y!==null&&C!==null&&C2(p,C,y,x,!0)}}e:{if(g=u?lo(u):window,w=g.nodeName&&g.nodeName.toLowerCase(),w==="select"||w==="input"&&g.type==="file")var j=Hx;else if(p2(g))if(z4)j=Gx;else{j=Zx;var E=qx}else(w=g.nodeName)&&w.toLowerCase()==="input"&&(g.type==="checkbox"||g.type==="radio")&&(j=Qx);if(j&&(j=j(e,u))){I4(p,j,n,d);break e}E&&E(e,g,u),e==="focusout"&&(E=g._wrapperState)&&E.controlled&&g.type==="number"&&h0(g,"number",g.value)}switch(E=u?lo(u):window,e){case"focusin":(p2(E)||E.contentEditable==="true")&&(so=E,E0=u,ra=null);break;case"focusout":ra=E0=so=null;break;case"mousedown":S0=!0;break;case"contextmenu":case"mouseup":case"dragend":S0=!1,y2(p,n,d);break;case"selectionchange":if(Xx)break;case"keydown":case"keyup":y2(p,n,d)}var $;if(lh)e:{switch(e){case"compositionstart":var F="onCompositionStart";break e;case"compositionend":F="onCompositionEnd";break e;case"compositionupdate":F="onCompositionUpdate";break e}F=void 0}else oo?T4(e,n)&&(F="onCompositionEnd"):e==="keydown"&&n.keyCode===229&&(F="onCompositionStart");F&&(M4&&n.locale!=="ko"&&(oo||F!=="onCompositionStart"?F==="onCompositionEnd"&&oo&&($=R4()):(_r=d,oh="value"in _r?_r.value:_r.textContent,oo=!0)),E=Yc(u,F),0<E.length&&(F=new u2(F,e,null,n,d),p.push({event:F,listeners:E}),$?F.data=$:($=A4(n),$!==null&&(F.data=$)))),($=Dx?Bx(e,n):Vx(e,n))&&(u=Yc(u,"onBeforeInput"),0<u.length&&(d=new u2("onBeforeInput","beforeinput",null,n,d),p.push({event:d,listeners:u}),d.data=$))}G4(p,t)})}function $a(e,t,n){return{instance:e,listener:t,currentTarget:n}}function Yc(e,t){for(var n=t+"Capture",r=[];e!==null;){var i=e,o=i.stateNode;i.tag===5&&o!==null&&(i=o,o=ba(e,n),o!=null&&r.unshift($a(e,o,i)),o=ba(e,t),o!=null&&r.push($a(e,o,i))),e=e.return}return r}function Di(e){if(e===null)return null;do e=e.return;while(e&&e.tag!==5);return e||null}function C2(e,t,n,r,i){for(var o=t._reactName,s=[];n!==null&&n!==r;){var l=n,c=l.alternate,u=l.stateNode;if(c!==null&&c===r)break;l.tag===5&&u!==null&&(l=u,i?(c=ba(n,o),c!=null&&s.unshift($a(n,c,l))):i||(c=ba(n,o),c!=null&&s.push($a(n,c,l)))),n=n.return}s.length!==0&&e.push({event:t,listeners:s})}var n7=/\r\n?/g,r7=/\u0000|\uFFFD/g;function k2(e){return(typeof e=="string"?e:""+e).replace(n7,`
`).replace(r7,"")}function Ol(e,t,n){if(t=k2(t),k2(e)!==t&&n)throw Error(q(425))}function Xc(){}var L0=null,$0=null;function _0(e,t){return e==="textarea"||e==="noscript"||typeof t.children=="string"||typeof t.children=="number"||typeof t.dangerouslySetInnerHTML=="object"&&t.dangerouslySetInnerHTML!==null&&t.dangerouslySetInnerHTML.__html!=null}var F0=typeof setTimeout=="function"?setTimeout:void 0,i7=typeof clearTimeout=="function"?clearTimeout:void 0,j2=typeof Promise=="function"?Promise:void 0,o7=typeof queueMicrotask=="function"?queueMicrotask:typeof j2<"u"?function(e){return j2.resolve(null).then(e).catch(s7)}:F0;function s7(e){setTimeout(function(){throw e})}function ef(e,t){var n=t,r=0;do{var i=n.nextSibling;if(e.removeChild(n),i&&i.nodeType===8)if(n=i.data,n==="/$"){if(r===0){e.removeChild(i),ja(t);return}r--}else n!=="$"&&n!=="$?"&&n!=="$!"||r++;n=i}while(n);ja(t)}function Ir(e){for(;e!=null;e=e.nextSibling){var t=e.nodeType;if(t===1||t===3)break;if(t===8){if(t=e.data,t==="$"||t==="$!"||t==="$?")break;if(t==="/$")return null}}return e}function E2(e){e=e.previousSibling;for(var t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="$"||n==="$!"||n==="$?"){if(t===0)return e;t--}else n==="/$"&&t++}e=e.previousSibling}return null}var Yo=Math.random().toString(36).slice(2),Dn="__reactFiber$"+Yo,_a="__reactProps$"+Yo,ur="__reactContainer$"+Yo,O0="__reactEvents$"+Yo,a7="__reactListeners$"+Yo,l7="__reactHandles$"+Yo;function di(e){var t=e[Dn];if(t)return t;for(var n=e.parentNode;n;){if(t=n[ur]||n[Dn]){if(n=t.alternate,t.child!==null||n!==null&&n.child!==null)for(e=E2(e);e!==null;){if(n=e[Dn])return n;e=E2(e)}return t}e=n,n=e.parentNode}return null}function il(e){return e=e[Dn]||e[ur],!e||e.tag!==5&&e.tag!==6&&e.tag!==13&&e.tag!==3?null:e}function lo(e){if(e.tag===5||e.tag===6)return e.stateNode;throw Error(q(33))}function Vu(e){return e[_a]||null}var N0=[],co=-1;function Jr(e){return{current:e}}function Oe(e){0>co||(e.current=N0[co],N0[co]=null,co--)}function Se(e,t){co++,N0[co]=e.current,e.current=t}var Hr={},ft=Jr(Hr),Lt=Jr(!1),ji=Hr;function Fo(e,t){var n=e.type.contextTypes;if(!n)return Hr;var r=e.stateNode;if(r&&r.__reactInternalMemoizedUnmaskedChildContext===t)return r.__reactInternalMemoizedMaskedChildContext;var i={},o;for(o in n)i[o]=t[o];return r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=t,e.__reactInternalMemoizedMaskedChildContext=i),i}function $t(e){return e=e.childContextTypes,e!=null}function Jc(){Oe(Lt),Oe(ft)}function S2(e,t,n){if(ft.current!==Hr)throw Error(q(168));Se(ft,t),Se(Lt,n)}function Y4(e,t,n){var r=e.stateNode;if(t=t.childContextTypes,typeof r.getChildContext!="function")return n;r=r.getChildContext();for(var i in r)if(!(i in t))throw Error(q(108,q8(e)||"Unknown",i));return Ae({},n,r)}function eu(e){return e=(e=e.stateNode)&&e.__reactInternalMemoizedMergedChildContext||Hr,ji=ft.current,Se(ft,e),Se(Lt,Lt.current),!0}function L2(e,t,n){var r=e.stateNode;if(!r)throw Error(q(169));n?(e=Y4(e,t,ji),r.__reactInternalMemoizedMergedChildContext=e,Oe(Lt),Oe(ft),Se(ft,e)):Oe(Lt),Se(Lt,n)}var ir=null,Wu=!1,tf=!1;function X4(e){ir===null?ir=[e]:ir.push(e)}function c7(e){Wu=!0,X4(e)}function ei(){if(!tf&&ir!==null){tf=!0;var e=0,t=be;try{var n=ir;for(be=1;e<n.length;e++){var r=n[e];do r=r(!0);while(r!==null)}ir=null,Wu=!1}catch(i){throw ir!==null&&(ir=ir.slice(e+1)),k4(th,ei),i}finally{be=t,tf=!1}}return null}var uo=[],fo=0,tu=null,nu=0,tn=[],nn=0,Ei=null,or=1,sr="";function si(e,t){uo[fo++]=nu,uo[fo++]=tu,tu=e,nu=t}function J4(e,t,n){tn[nn++]=or,tn[nn++]=sr,tn[nn++]=Ei,Ei=e;var r=or;e=sr;var i=32-kn(r)-1;r&=~(1<<i),n+=1;var o=32-kn(t)+i;if(30<o){var s=i-i%5;o=(r&(1<<s)-1).toString(32),r>>=s,i-=s,or=1<<32-kn(t)+i|n<<i|r,sr=o+e}else or=1<<o|n<<i|r,sr=e}function uh(e){e.return!==null&&(si(e,1),J4(e,1,0))}function dh(e){for(;e===tu;)tu=uo[--fo],uo[fo]=null,nu=uo[--fo],uo[fo]=null;for(;e===Ei;)Ei=tn[--nn],tn[nn]=null,sr=tn[--nn],tn[nn]=null,or=tn[--nn],tn[nn]=null}var Wt=null,Dt=null,Ne=!1,wn=null;function e9(e,t){var n=an(5,null,null,0);n.elementType="DELETED",n.stateNode=t,n.return=e,t=e.deletions,t===null?(e.deletions=[n],e.flags|=16):t.push(n)}function $2(e,t){switch(e.tag){case 5:var n=e.type;return t=t.nodeType!==1||n.toLowerCase()!==t.nodeName.toLowerCase()?null:t,t!==null?(e.stateNode=t,Wt=e,Dt=Ir(t.firstChild),!0):!1;case 6:return t=e.pendingProps===""||t.nodeType!==3?null:t,t!==null?(e.stateNode=t,Wt=e,Dt=null,!0):!1;case 13:return t=t.nodeType!==8?null:t,t!==null?(n=Ei!==null?{id:or,overflow:sr}:null,e.memoizedState={dehydrated:t,treeContext:n,retryLane:1073741824},n=an(18,null,null,0),n.stateNode=t,n.return=e,e.child=n,Wt=e,Dt=null,!0):!1;default:return!1}}function P0(e){return(e.mode&1)!==0&&(e.flags&128)===0}function R0(e){if(Ne){var t=Dt;if(t){var n=t;if(!$2(e,t)){if(P0(e))throw Error(q(418));t=Ir(n.nextSibling);var r=Wt;t&&$2(e,t)?e9(r,n):(e.flags=e.flags&-4097|2,Ne=!1,Wt=e)}}else{if(P0(e))throw Error(q(418));e.flags=e.flags&-4097|2,Ne=!1,Wt=e}}}function _2(e){for(e=e.return;e!==null&&e.tag!==5&&e.tag!==3&&e.tag!==13;)e=e.return;Wt=e}function Nl(e){if(e!==Wt)return!1;if(!Ne)return _2(e),Ne=!0,!1;var t;if((t=e.tag!==3)&&!(t=e.tag!==5)&&(t=e.type,t=t!=="head"&&t!=="body"&&!_0(e.type,e.memoizedProps)),t&&(t=Dt)){if(P0(e))throw t9(),Error(q(418));for(;t;)e9(e,t),t=Ir(t.nextSibling)}if(_2(e),e.tag===13){if(e=e.memoizedState,e=e!==null?e.dehydrated:null,!e)throw Error(q(317));e:{for(e=e.nextSibling,t=0;e;){if(e.nodeType===8){var n=e.data;if(n==="/$"){if(t===0){Dt=Ir(e.nextSibling);break e}t--}else n!=="$"&&n!=="$!"&&n!=="$?"||t++}e=e.nextSibling}Dt=null}}else Dt=Wt?Ir(e.stateNode.nextSibling):null;return!0}function t9(){for(var e=Dt;e;)e=Ir(e.nextSibling)}function Oo(){Dt=Wt=null,Ne=!1}function fh(e){wn===null?wn=[e]:wn.push(e)}var u7=pr.ReactCurrentBatchConfig;function ms(e,t,n){if(e=n.ref,e!==null&&typeof e!="function"&&typeof e!="object"){if(n._owner){if(n=n._owner,n){if(n.tag!==1)throw Error(q(309));var r=n.stateNode}if(!r)throw Error(q(147,e));var i=r,o=""+e;return t!==null&&t.ref!==null&&typeof t.ref=="function"&&t.ref._stringRef===o?t.ref:(t=function(s){var l=i.refs;s===null?delete l[o]:l[o]=s},t._stringRef=o,t)}if(typeof e!="string")throw Error(q(284));if(!n._owner)throw Error(q(290,e))}return e}function Pl(e,t){throw e=Object.prototype.toString.call(t),Error(q(31,e==="[object Object]"?"object with keys {"+Object.keys(t).join(", ")+"}":e))}function F2(e){var t=e._init;return t(e._payload)}function n9(e){function t(m,v){if(e){var h=m.deletions;h===null?(m.deletions=[v],m.flags|=16):h.push(v)}}function n(m,v){if(!e)return null;for(;v!==null;)t(m,v),v=v.sibling;return null}function r(m,v){for(m=new Map;v!==null;)v.key!==null?m.set(v.key,v):m.set(v.index,v),v=v.sibling;return m}function i(m,v){return m=Vr(m,v),m.index=0,m.sibling=null,m}function o(m,v,h){return m.index=h,e?(h=m.alternate,h!==null?(h=h.index,h<v?(m.flags|=2,v):h):(m.flags|=2,v)):(m.flags|=1048576,v)}function s(m){return e&&m.alternate===null&&(m.flags|=2),m}function l(m,v,h,b){return v===null||v.tag!==6?(v=cf(h,m.mode,b),v.return=m,v):(v=i(v,h),v.return=m,v)}function c(m,v,h,b){var j=h.type;return j===io?d(m,v,h.props.children,b,h.key):v!==null&&(v.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jr&&F2(j)===v.type)?(b=i(v,h.props),b.ref=ms(m,v,h),b.return=m,b):(b=Nc(h.type,h.key,h.props,null,m.mode,b),b.ref=ms(m,v,h),b.return=m,b)}function u(m,v,h,b){return v===null||v.tag!==4||v.stateNode.containerInfo!==h.containerInfo||v.stateNode.implementation!==h.implementation?(v=uf(h,m.mode,b),v.return=m,v):(v=i(v,h.children||[]),v.return=m,v)}function d(m,v,h,b,j){return v===null||v.tag!==7?(v=yi(h,m.mode,b,j),v.return=m,v):(v=i(v,h),v.return=m,v)}function p(m,v,h){if(typeof v=="string"&&v!==""||typeof v=="number")return v=cf(""+v,m.mode,h),v.return=m,v;if(typeof v=="object"&&v!==null){switch(v.$$typeof){case Cl:return h=Nc(v.type,v.key,v.props,null,m.mode,h),h.ref=ms(m,null,v),h.return=m,h;case ro:return v=uf(v,m.mode,h),v.return=m,v;case jr:var b=v._init;return p(m,b(v._payload),h)}if(Us(v)||us(v))return v=yi(v,m.mode,h,null),v.return=m,v;Pl(m,v)}return null}function g(m,v,h,b){var j=v!==null?v.key:null;if(typeof h=="string"&&h!==""||typeof h=="number")return j!==null?null:l(m,v,""+h,b);if(typeof h=="object"&&h!==null){switch(h.$$typeof){case Cl:return h.key===j?c(m,v,h,b):null;case ro:return h.key===j?u(m,v,h,b):null;case jr:return j=h._init,g(m,v,j(h._payload),b)}if(Us(h)||us(h))return j!==null?null:d(m,v,h,b,null);Pl(m,h)}return null}function w(m,v,h,b,j){if(typeof b=="string"&&b!==""||typeof b=="number")return m=m.get(h)||null,l(v,m,""+b,j);if(typeof b=="object"&&b!==null){switch(b.$$typeof){case Cl:return m=m.get(b.key===null?h:b.key)||null,c(v,m,b,j);case ro:return m=m.get(b.key===null?h:b.key)||null,u(v,m,b,j);case jr:var E=b._init;return w(m,v,h,E(b._payload),j)}if(Us(b)||us(b))return m=m.get(h)||null,d(v,m,b,j,null);Pl(v,b)}return null}function y(m,v,h,b){for(var j=null,E=null,$=v,F=v=0,M=null;$!==null&&F<h.length;F++){$.index>F?(M=$,$=null):M=$.sibling;var R=g(m,$,h[F],b);if(R===null){$===null&&($=M);break}e&&$&&R.alternate===null&&t(m,$),v=o(R,v,F),E===null?j=R:E.sibling=R,E=R,$=M}if(F===h.length)return n(m,$),Ne&&si(m,F),j;if($===null){for(;F<h.length;F++)$=p(m,h[F],b),$!==null&&(v=o($,v,F),E===null?j=$:E.sibling=$,E=$);return Ne&&si(m,F),j}for($=r(m,$);F<h.length;F++)M=w($,m,F,h[F],b),M!==null&&(e&&M.alternate!==null&&$.delete(M.key===null?F:M.key),v=o(M,v,F),E===null?j=M:E.sibling=M,E=M);return e&&$.forEach(function(D){return t(m,D)}),Ne&&si(m,F),j}function x(m,v,h,b){var j=us(h);if(typeof j!="function")throw Error(q(150));if(h=j.call(h),h==null)throw Error(q(151));for(var E=j=null,$=v,F=v=0,M=null,R=h.next();$!==null&&!R.done;F++,R=h.next()){$.index>F?(M=$,$=null):M=$.sibling;var D=g(m,$,R.value,b);if(D===null){$===null&&($=M);break}e&&$&&D.alternate===null&&t(m,$),v=o(D,v,F),E===null?j=D:E.sibling=D,E=D,$=M}if(R.done)return n(m,$),Ne&&si(m,F),j;if($===null){for(;!R.done;F++,R=h.next())R=p(m,R.value,b),R!==null&&(v=o(R,v,F),E===null?j=R:E.sibling=R,E=R);return Ne&&si(m,F),j}for($=r(m,$);!R.done;F++,R=h.next())R=w($,m,F,R.value,b),R!==null&&(e&&R.alternate!==null&&$.delete(R.key===null?F:R.key),v=o(R,v,F),E===null?j=R:E.sibling=R,E=R);return e&&$.forEach(function(T){return t(m,T)}),Ne&&si(m,F),j}function C(m,v,h,b){if(typeof h=="object"&&h!==null&&h.type===io&&h.key===null&&(h=h.props.children),typeof h=="object"&&h!==null){switch(h.$$typeof){case Cl:e:{for(var j=h.key,E=v;E!==null;){if(E.key===j){if(j=h.type,j===io){if(E.tag===7){n(m,E.sibling),v=i(E,h.props.children),v.return=m,m=v;break e}}else if(E.elementType===j||typeof j=="object"&&j!==null&&j.$$typeof===jr&&F2(j)===E.type){n(m,E.sibling),v=i(E,h.props),v.ref=ms(m,E,h),v.return=m,m=v;break e}n(m,E);break}else t(m,E);E=E.sibling}h.type===io?(v=yi(h.props.children,m.mode,b,h.key),v.return=m,m=v):(b=Nc(h.type,h.key,h.props,null,m.mode,b),b.ref=ms(m,v,h),b.return=m,m=b)}return s(m);case ro:e:{for(E=h.key;v!==null;){if(v.key===E)if(v.tag===4&&v.stateNode.containerInfo===h.containerInfo&&v.stateNode.implementation===h.implementation){n(m,v.sibling),v=i(v,h.children||[]),v.return=m,m=v;break e}else{n(m,v);break}else t(m,v);v=v.sibling}v=uf(h,m.mode,b),v.return=m,m=v}return s(m);case jr:return E=h._init,C(m,v,E(h._payload),b)}if(Us(h))return y(m,v,h,b);if(us(h))return x(m,v,h,b);Pl(m,h)}return typeof h=="string"&&h!==""||typeof h=="number"?(h=""+h,v!==null&&v.tag===6?(n(m,v.sibling),v=i(v,h),v.return=m,m=v):(n(m,v),v=cf(h,m.mode,b),v.return=m,m=v),s(m)):n(m,v)}return C}var No=n9(!0),r9=n9(!1),ru=Jr(null),iu=null,ho=null,hh=null;function ph(){hh=ho=iu=null}function mh(e){var t=ru.current;Oe(ru),e._currentValue=t}function M0(e,t,n){for(;e!==null;){var r=e.alternate;if((e.childLanes&t)!==t?(e.childLanes|=t,r!==null&&(r.childLanes|=t)):r!==null&&(r.childLanes&t)!==t&&(r.childLanes|=t),e===n)break;e=e.return}}function Co(e,t){iu=e,hh=ho=null,e=e.dependencies,e!==null&&e.firstContext!==null&&(e.lanes&t&&(jt=!0),e.firstContext=null)}function un(e){var t=e._currentValue;if(hh!==e)if(e={context:e,memoizedValue:t,next:null},ho===null){if(iu===null)throw Error(q(308));ho=e,iu.dependencies={lanes:0,firstContext:e}}else ho=ho.next=e;return t}var fi=null;function gh(e){fi===null?fi=[e]:fi.push(e)}function i9(e,t,n,r){var i=t.interleaved;return i===null?(n.next=n,gh(t)):(n.next=i.next,i.next=n),t.interleaved=n,dr(e,r)}function dr(e,t){e.lanes|=t;var n=e.alternate;for(n!==null&&(n.lanes|=t),n=e,e=e.return;e!==null;)e.childLanes|=t,n=e.alternate,n!==null&&(n.childLanes|=t),n=e,e=e.return;return n.tag===3?n.stateNode:null}var Er=!1;function vh(e){e.updateQueue={baseState:e.memoizedState,firstBaseUpdate:null,lastBaseUpdate:null,shared:{pending:null,interleaved:null,lanes:0},effects:null}}function o9(e,t){e=e.updateQueue,t.updateQueue===e&&(t.updateQueue={baseState:e.baseState,firstBaseUpdate:e.firstBaseUpdate,lastBaseUpdate:e.lastBaseUpdate,shared:e.shared,effects:e.effects})}function ar(e,t){return{eventTime:e,lane:t,tag:0,payload:null,callback:null,next:null}}function zr(e,t,n){var r=e.updateQueue;if(r===null)return null;if(r=r.shared,me&2){var i=r.pending;return i===null?t.next=t:(t.next=i.next,i.next=t),r.pending=t,dr(e,n)}return i=r.interleaved,i===null?(t.next=t,gh(r)):(t.next=i.next,i.next=t),r.interleaved=t,dr(e,n)}function Sc(e,t,n){if(t=t.updateQueue,t!==null&&(t=t.shared,(n&4194240)!==0)){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nh(e,n)}}function O2(e,t){var n=e.updateQueue,r=e.alternate;if(r!==null&&(r=r.updateQueue,n===r)){var i=null,o=null;if(n=n.firstBaseUpdate,n!==null){do{var s={eventTime:n.eventTime,lane:n.lane,tag:n.tag,payload:n.payload,callback:n.callback,next:null};o===null?i=o=s:o=o.next=s,n=n.next}while(n!==null);o===null?i=o=t:o=o.next=t}else i=o=t;n={baseState:r.baseState,firstBaseUpdate:i,lastBaseUpdate:o,shared:r.shared,effects:r.effects},e.updateQueue=n;return}e=n.lastBaseUpdate,e===null?n.firstBaseUpdate=t:e.next=t,n.lastBaseUpdate=t}function ou(e,t,n,r){var i=e.updateQueue;Er=!1;var o=i.firstBaseUpdate,s=i.lastBaseUpdate,l=i.shared.pending;if(l!==null){i.shared.pending=null;var c=l,u=c.next;c.next=null,s===null?o=u:s.next=u,s=c;var d=e.alternate;d!==null&&(d=d.updateQueue,l=d.lastBaseUpdate,l!==s&&(l===null?d.firstBaseUpdate=u:l.next=u,d.lastBaseUpdate=c))}if(o!==null){var p=i.baseState;s=0,d=u=c=null,l=o;do{var g=l.lane,w=l.eventTime;if((r&g)===g){d!==null&&(d=d.next={eventTime:w,lane:0,tag:l.tag,payload:l.payload,callback:l.callback,next:null});e:{var y=e,x=l;switch(g=t,w=n,x.tag){case 1:if(y=x.payload,typeof y=="function"){p=y.call(w,p,g);break e}p=y;break e;case 3:y.flags=y.flags&-65537|128;case 0:if(y=x.payload,g=typeof y=="function"?y.call(w,p,g):y,g==null)break e;p=Ae({},p,g);break e;case 2:Er=!0}}l.callback!==null&&l.lane!==0&&(e.flags|=64,g=i.effects,g===null?i.effects=[l]:g.push(l))}else w={eventTime:w,lane:g,tag:l.tag,payload:l.payload,callback:l.callback,next:null},d===null?(u=d=w,c=p):d=d.next=w,s|=g;if(l=l.next,l===null){if(l=i.shared.pending,l===null)break;g=l,l=g.next,g.next=null,i.lastBaseUpdate=g,i.shared.pending=null}}while(!0);if(d===null&&(c=p),i.baseState=c,i.firstBaseUpdate=u,i.lastBaseUpdate=d,t=i.shared.interleaved,t!==null){i=t;do s|=i.lane,i=i.next;while(i!==t)}else o===null&&(i.shared.lanes=0);Li|=s,e.lanes=s,e.memoizedState=p}}function N2(e,t,n){if(e=t.effects,t.effects=null,e!==null)for(t=0;t<e.length;t++){var r=e[t],i=r.callback;if(i!==null){if(r.callback=null,r=n,typeof i!="function")throw Error(q(191,i));i.call(r)}}}var ol={},Wn=Jr(ol),Fa=Jr(ol),Oa=Jr(ol);function hi(e){if(e===ol)throw Error(q(174));return e}function xh(e,t){switch(Se(Oa,t),Se(Fa,e),Se(Wn,ol),e=t.nodeType,e){case 9:case 11:t=(t=t.documentElement)?t.namespaceURI:m0(null,"");break;default:e=e===8?t.parentNode:t,t=e.namespaceURI||null,e=e.tagName,t=m0(t,e)}Oe(Wn),Se(Wn,t)}function Po(){Oe(Wn),Oe(Fa),Oe(Oa)}function s9(e){hi(Oa.current);var t=hi(Wn.current),n=m0(t,e.type);t!==n&&(Se(Fa,e),Se(Wn,n))}function yh(e){Fa.current===e&&(Oe(Wn),Oe(Fa))}var Re=Jr(0);function su(e){for(var t=e;t!==null;){if(t.tag===13){var n=t.memoizedState;if(n!==null&&(n=n.dehydrated,n===null||n.data==="$?"||n.data==="$!"))return t}else if(t.tag===19&&t.memoizedProps.revealOrder!==void 0){if(t.flags&128)return t}else if(t.child!==null){t.child.return=t,t=t.child;continue}if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return null;t=t.return}t.sibling.return=t.return,t=t.sibling}return null}var nf=[];function wh(){for(var e=0;e<nf.length;e++)nf[e]._workInProgressVersionPrimary=null;nf.length=0}var Lc=pr.ReactCurrentDispatcher,rf=pr.ReactCurrentBatchConfig,Si=0,Te=null,He=null,Ge=null,au=!1,ia=!1,Na=0,d7=0;function at(){throw Error(q(321))}function bh(e,t){if(t===null)return!1;for(var n=0;n<t.length&&n<e.length;n++)if(!Ln(e[n],t[n]))return!1;return!0}function Ch(e,t,n,r,i,o){if(Si=o,Te=t,t.memoizedState=null,t.updateQueue=null,t.lanes=0,Lc.current=e===null||e.memoizedState===null?m7:g7,e=n(r,i),ia){o=0;do{if(ia=!1,Na=0,25<=o)throw Error(q(301));o+=1,Ge=He=null,t.updateQueue=null,Lc.current=v7,e=n(r,i)}while(ia)}if(Lc.current=lu,t=He!==null&&He.next!==null,Si=0,Ge=He=Te=null,au=!1,t)throw Error(q(300));return e}function kh(){var e=Na!==0;return Na=0,e}function An(){var e={memoizedState:null,baseState:null,baseQueue:null,queue:null,next:null};return Ge===null?Te.memoizedState=Ge=e:Ge=Ge.next=e,Ge}function dn(){if(He===null){var e=Te.alternate;e=e!==null?e.memoizedState:null}else e=He.next;var t=Ge===null?Te.memoizedState:Ge.next;if(t!==null)Ge=t,He=e;else{if(e===null)throw Error(q(310));He=e,e={memoizedState:He.memoizedState,baseState:He.baseState,baseQueue:He.baseQueue,queue:He.queue,next:null},Ge===null?Te.memoizedState=Ge=e:Ge=Ge.next=e}return Ge}function Pa(e,t){return typeof t=="function"?t(e):t}function of(e){var t=dn(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=He,i=r.baseQueue,o=n.pending;if(o!==null){if(i!==null){var s=i.next;i.next=o.next,o.next=s}r.baseQueue=i=o,n.pending=null}if(i!==null){o=i.next,r=r.baseState;var l=s=null,c=null,u=o;do{var d=u.lane;if((Si&d)===d)c!==null&&(c=c.next={lane:0,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null}),r=u.hasEagerState?u.eagerState:e(r,u.action);else{var p={lane:d,action:u.action,hasEagerState:u.hasEagerState,eagerState:u.eagerState,next:null};c===null?(l=c=p,s=r):c=c.next=p,Te.lanes|=d,Li|=d}u=u.next}while(u!==null&&u!==o);c===null?s=r:c.next=l,Ln(r,t.memoizedState)||(jt=!0),t.memoizedState=r,t.baseState=s,t.baseQueue=c,n.lastRenderedState=r}if(e=n.interleaved,e!==null){i=e;do o=i.lane,Te.lanes|=o,Li|=o,i=i.next;while(i!==e)}else i===null&&(n.lanes=0);return[t.memoizedState,n.dispatch]}function sf(e){var t=dn(),n=t.queue;if(n===null)throw Error(q(311));n.lastRenderedReducer=e;var r=n.dispatch,i=n.pending,o=t.memoizedState;if(i!==null){n.pending=null;var s=i=i.next;do o=e(o,s.action),s=s.next;while(s!==i);Ln(o,t.memoizedState)||(jt=!0),t.memoizedState=o,t.baseQueue===null&&(t.baseState=o),n.lastRenderedState=o}return[o,r]}function a9(){}function l9(e,t){var n=Te,r=dn(),i=t(),o=!Ln(r.memoizedState,i);if(o&&(r.memoizedState=i,jt=!0),r=r.queue,jh(d9.bind(null,n,r,e),[e]),r.getSnapshot!==t||o||Ge!==null&&Ge.memoizedState.tag&1){if(n.flags|=2048,Ra(9,u9.bind(null,n,r,i,t),void 0,null),Je===null)throw Error(q(349));Si&30||c9(n,t,i)}return i}function c9(e,t,n){e.flags|=16384,e={getSnapshot:t,value:n},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.stores=[e]):(n=t.stores,n===null?t.stores=[e]:n.push(e))}function u9(e,t,n,r){t.value=n,t.getSnapshot=r,f9(t)&&h9(e)}function d9(e,t,n){return n(function(){f9(t)&&h9(e)})}function f9(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!Ln(e,n)}catch{return!0}}function h9(e){var t=dr(e,1);t!==null&&jn(t,e,1,-1)}function P2(e){var t=An();return typeof e=="function"&&(e=e()),t.memoizedState=t.baseState=e,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:Pa,lastRenderedState:e},t.queue=e,e=e.dispatch=p7.bind(null,Te,e),[t.memoizedState,e]}function Ra(e,t,n,r){return e={tag:e,create:t,destroy:n,deps:r,next:null},t=Te.updateQueue,t===null?(t={lastEffect:null,stores:null},Te.updateQueue=t,t.lastEffect=e.next=e):(n=t.lastEffect,n===null?t.lastEffect=e.next=e:(r=n.next,n.next=e,e.next=r,t.lastEffect=e)),e}function p9(){return dn().memoizedState}function $c(e,t,n,r){var i=An();Te.flags|=e,i.memoizedState=Ra(1|t,n,void 0,r===void 0?null:r)}function Uu(e,t,n,r){var i=dn();r=r===void 0?null:r;var o=void 0;if(He!==null){var s=He.memoizedState;if(o=s.destroy,r!==null&&bh(r,s.deps)){i.memoizedState=Ra(t,n,o,r);return}}Te.flags|=e,i.memoizedState=Ra(1|t,n,o,r)}function R2(e,t){return $c(8390656,8,e,t)}function jh(e,t){return Uu(2048,8,e,t)}function m9(e,t){return Uu(4,2,e,t)}function g9(e,t){return Uu(4,4,e,t)}function v9(e,t){if(typeof t=="function")return e=e(),t(e),function(){t(null)};if(t!=null)return e=e(),t.current=e,function(){t.current=null}}function x9(e,t,n){return n=n!=null?n.concat([e]):null,Uu(4,4,v9.bind(null,t,e),n)}function Eh(){}function y9(e,t){var n=dn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bh(t,r[1])?r[0]:(n.memoizedState=[e,t],e)}function w9(e,t){var n=dn();t=t===void 0?null:t;var r=n.memoizedState;return r!==null&&t!==null&&bh(t,r[1])?r[0]:(e=e(),n.memoizedState=[e,t],e)}function b9(e,t,n){return Si&21?(Ln(n,t)||(n=S4(),Te.lanes|=n,Li|=n,e.baseState=!0),t):(e.baseState&&(e.baseState=!1,jt=!0),e.memoizedState=n)}function f7(e,t){var n=be;be=n!==0&&4>n?n:4,e(!0);var r=rf.transition;rf.transition={};try{e(!1),t()}finally{be=n,rf.transition=r}}function C9(){return dn().memoizedState}function h7(e,t,n){var r=Br(e);if(n={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null},k9(e))j9(t,n);else if(n=i9(e,t,n,r),n!==null){var i=mt();jn(n,e,r,i),E9(n,t,r)}}function p7(e,t,n){var r=Br(e),i={lane:r,action:n,hasEagerState:!1,eagerState:null,next:null};if(k9(e))j9(t,i);else{var o=e.alternate;if(e.lanes===0&&(o===null||o.lanes===0)&&(o=t.lastRenderedReducer,o!==null))try{var s=t.lastRenderedState,l=o(s,n);if(i.hasEagerState=!0,i.eagerState=l,Ln(l,s)){var c=t.interleaved;c===null?(i.next=i,gh(t)):(i.next=c.next,c.next=i),t.interleaved=i;return}}catch{}finally{}n=i9(e,t,i,r),n!==null&&(i=mt(),jn(n,e,r,i),E9(n,t,r))}}function k9(e){var t=e.alternate;return e===Te||t!==null&&t===Te}function j9(e,t){ia=au=!0;var n=e.pending;n===null?t.next=t:(t.next=n.next,n.next=t),e.pending=t}function E9(e,t,n){if(n&4194240){var r=t.lanes;r&=e.pendingLanes,n|=r,t.lanes=n,nh(e,n)}}var lu={readContext:un,useCallback:at,useContext:at,useEffect:at,useImperativeHandle:at,useInsertionEffect:at,useLayoutEffect:at,useMemo:at,useReducer:at,useRef:at,useState:at,useDebugValue:at,useDeferredValue:at,useTransition:at,useMutableSource:at,useSyncExternalStore:at,useId:at,unstable_isNewReconciler:!1},m7={readContext:un,useCallback:function(e,t){return An().memoizedState=[e,t===void 0?null:t],e},useContext:un,useEffect:R2,useImperativeHandle:function(e,t,n){return n=n!=null?n.concat([e]):null,$c(4194308,4,v9.bind(null,t,e),n)},useLayoutEffect:function(e,t){return $c(4194308,4,e,t)},useInsertionEffect:function(e,t){return $c(4,2,e,t)},useMemo:function(e,t){var n=An();return t=t===void 0?null:t,e=e(),n.memoizedState=[e,t],e},useReducer:function(e,t,n){var r=An();return t=n!==void 0?n(t):t,r.memoizedState=r.baseState=t,e={pending:null,interleaved:null,lanes:0,dispatch:null,lastRenderedReducer:e,lastRenderedState:t},r.queue=e,e=e.dispatch=h7.bind(null,Te,e),[r.memoizedState,e]},useRef:function(e){var t=An();return e={current:e},t.memoizedState=e},useState:P2,useDebugValue:Eh,useDeferredValue:function(e){return An().memoizedState=e},useTransition:function(){var e=P2(!1),t=e[0];return e=f7.bind(null,e[1]),An().memoizedState=e,[t,e]},useMutableSource:function(){},useSyncExternalStore:function(e,t,n){var r=Te,i=An();if(Ne){if(n===void 0)throw Error(q(407));n=n()}else{if(n=t(),Je===null)throw Error(q(349));Si&30||c9(r,t,n)}i.memoizedState=n;var o={value:n,getSnapshot:t};return i.queue=o,R2(d9.bind(null,r,o,e),[e]),r.flags|=2048,Ra(9,u9.bind(null,r,o,n,t),void 0,null),n},useId:function(){var e=An(),t=Je.identifierPrefix;if(Ne){var n=sr,r=or;n=(r&~(1<<32-kn(r)-1)).toString(32)+n,t=":"+t+"R"+n,n=Na++,0<n&&(t+="H"+n.toString(32)),t+=":"}else n=d7++,t=":"+t+"r"+n.toString(32)+":";return e.memoizedState=t},unstable_isNewReconciler:!1},g7={readContext:un,useCallback:y9,useContext:un,useEffect:jh,useImperativeHandle:x9,useInsertionEffect:m9,useLayoutEffect:g9,useMemo:w9,useReducer:of,useRef:p9,useState:function(){return of(Pa)},useDebugValue:Eh,useDeferredValue:function(e){var t=dn();return b9(t,He.memoizedState,e)},useTransition:function(){var e=of(Pa)[0],t=dn().memoizedState;return[e,t]},useMutableSource:a9,useSyncExternalStore:l9,useId:C9,unstable_isNewReconciler:!1},v7={readContext:un,useCallback:y9,useContext:un,useEffect:jh,useImperativeHandle:x9,useInsertionEffect:m9,useLayoutEffect:g9,useMemo:w9,useReducer:sf,useRef:p9,useState:function(){return sf(Pa)},useDebugValue:Eh,useDeferredValue:function(e){var t=dn();return He===null?t.memoizedState=e:b9(t,He.memoizedState,e)},useTransition:function(){var e=sf(Pa)[0],t=dn().memoizedState;return[e,t]},useMutableSource:a9,useSyncExternalStore:l9,useId:C9,unstable_isNewReconciler:!1};function vn(e,t){if(e&&e.defaultProps){t=Ae({},t),e=e.defaultProps;for(var n in e)t[n]===void 0&&(t[n]=e[n]);return t}return t}function T0(e,t,n,r){t=e.memoizedState,n=n(r,t),n=n==null?t:Ae({},t,n),e.memoizedState=n,e.lanes===0&&(e.updateQueue.baseState=n)}var Hu={isMounted:function(e){return(e=e._reactInternals)?Ti(e)===e:!1},enqueueSetState:function(e,t,n){e=e._reactInternals;var r=mt(),i=Br(e),o=ar(r,i);o.payload=t,n!=null&&(o.callback=n),t=zr(e,o,i),t!==null&&(jn(t,e,i,r),Sc(t,e,i))},enqueueReplaceState:function(e,t,n){e=e._reactInternals;var r=mt(),i=Br(e),o=ar(r,i);o.tag=1,o.payload=t,n!=null&&(o.callback=n),t=zr(e,o,i),t!==null&&(jn(t,e,i,r),Sc(t,e,i))},enqueueForceUpdate:function(e,t){e=e._reactInternals;var n=mt(),r=Br(e),i=ar(n,r);i.tag=2,t!=null&&(i.callback=t),t=zr(e,i,r),t!==null&&(jn(t,e,r,n),Sc(t,e,r))}};function M2(e,t,n,r,i,o,s){return e=e.stateNode,typeof e.shouldComponentUpdate=="function"?e.shouldComponentUpdate(r,o,s):t.prototype&&t.prototype.isPureReactComponent?!Sa(n,r)||!Sa(i,o):!0}function S9(e,t,n){var r=!1,i=Hr,o=t.contextType;return typeof o=="object"&&o!==null?o=un(o):(i=$t(t)?ji:ft.current,r=t.contextTypes,o=(r=r!=null)?Fo(e,i):Hr),t=new t(n,o),e.memoizedState=t.state!==null&&t.state!==void 0?t.state:null,t.updater=Hu,e.stateNode=t,t._reactInternals=e,r&&(e=e.stateNode,e.__reactInternalMemoizedUnmaskedChildContext=i,e.__reactInternalMemoizedMaskedChildContext=o),t}function T2(e,t,n,r){e=t.state,typeof t.componentWillReceiveProps=="function"&&t.componentWillReceiveProps(n,r),typeof t.UNSAFE_componentWillReceiveProps=="function"&&t.UNSAFE_componentWillReceiveProps(n,r),t.state!==e&&Hu.enqueueReplaceState(t,t.state,null)}function A0(e,t,n,r){var i=e.stateNode;i.props=n,i.state=e.memoizedState,i.refs={},vh(e);var o=t.contextType;typeof o=="object"&&o!==null?i.context=un(o):(o=$t(t)?ji:ft.current,i.context=Fo(e,o)),i.state=e.memoizedState,o=t.getDerivedStateFromProps,typeof o=="function"&&(T0(e,t,o,n),i.state=e.memoizedState),typeof t.getDerivedStateFromProps=="function"||typeof i.getSnapshotBeforeUpdate=="function"||typeof i.UNSAFE_componentWillMount!="function"&&typeof i.componentWillMount!="function"||(t=i.state,typeof i.componentWillMount=="function"&&i.componentWillMount(),typeof i.UNSAFE_componentWillMount=="function"&&i.UNSAFE_componentWillMount(),t!==i.state&&Hu.enqueueReplaceState(i,i.state,null),ou(e,n,i,r),i.state=e.memoizedState),typeof i.componentDidMount=="function"&&(e.flags|=4194308)}function Ro(e,t){try{var n="",r=t;do n+=H8(r),r=r.return;while(r);var i=n}catch(o){i=`
Error generating stack: `+o.message+`
`+o.stack}return{value:e,source:t,stack:i,digest:null}}function af(e,t,n){return{value:e,source:null,stack:n??null,digest:t??null}}function I0(e,t){try{console.error(t.value)}catch(n){setTimeout(function(){throw n})}}var x7=typeof WeakMap=="function"?WeakMap:Map;function L9(e,t,n){n=ar(-1,n),n.tag=3,n.payload={element:null};var r=t.value;return n.callback=function(){uu||(uu=!0,Q0=r),I0(e,t)},n}function $9(e,t,n){n=ar(-1,n),n.tag=3;var r=e.type.getDerivedStateFromError;if(typeof r=="function"){var i=t.value;n.payload=function(){return r(i)},n.callback=function(){I0(e,t)}}var o=e.stateNode;return o!==null&&typeof o.componentDidCatch=="function"&&(n.callback=function(){I0(e,t),typeof r!="function"&&(Dr===null?Dr=new Set([this]):Dr.add(this));var s=t.stack;this.componentDidCatch(t.value,{componentStack:s!==null?s:""})}),n}function A2(e,t,n){var r=e.pingCache;if(r===null){r=e.pingCache=new x7;var i=new Set;r.set(t,i)}else i=r.get(t),i===void 0&&(i=new Set,r.set(t,i));i.has(n)||(i.add(n),e=N7.bind(null,e,t,n),t.then(e,e))}function I2(e){do{var t;if((t=e.tag===13)&&(t=e.memoizedState,t=t!==null?t.dehydrated!==null:!0),t)return e;e=e.return}while(e!==null);return null}function z2(e,t,n,r,i){return e.mode&1?(e.flags|=65536,e.lanes=i,e):(e===t?e.flags|=65536:(e.flags|=128,n.flags|=131072,n.flags&=-52805,n.tag===1&&(n.alternate===null?n.tag=17:(t=ar(-1,1),t.tag=2,zr(n,t,1))),n.lanes|=1),e)}var y7=pr.ReactCurrentOwner,jt=!1;function ht(e,t,n,r){t.child=e===null?r9(t,null,n,r):No(t,e.child,n,r)}function D2(e,t,n,r,i){n=n.render;var o=t.ref;return Co(t,i),r=Ch(e,t,n,r,o,i),n=kh(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,fr(e,t,i)):(Ne&&n&&uh(t),t.flags|=1,ht(e,t,r,i),t.child)}function B2(e,t,n,r,i){if(e===null){var o=n.type;return typeof o=="function"&&!Ph(o)&&o.defaultProps===void 0&&n.compare===null&&n.defaultProps===void 0?(t.tag=15,t.type=o,_9(e,t,o,r,i)):(e=Nc(n.type,null,r,t,t.mode,i),e.ref=t.ref,e.return=t,t.child=e)}if(o=e.child,!(e.lanes&i)){var s=o.memoizedProps;if(n=n.compare,n=n!==null?n:Sa,n(s,r)&&e.ref===t.ref)return fr(e,t,i)}return t.flags|=1,e=Vr(o,r),e.ref=t.ref,e.return=t,t.child=e}function _9(e,t,n,r,i){if(e!==null){var o=e.memoizedProps;if(Sa(o,r)&&e.ref===t.ref)if(jt=!1,t.pendingProps=r=o,(e.lanes&i)!==0)e.flags&131072&&(jt=!0);else return t.lanes=e.lanes,fr(e,t,i)}return z0(e,t,n,r,i)}function F9(e,t,n){var r=t.pendingProps,i=r.children,o=e!==null?e.memoizedState:null;if(r.mode==="hidden")if(!(t.mode&1))t.memoizedState={baseLanes:0,cachePool:null,transitions:null},Se(mo,It),It|=n;else{if(!(n&1073741824))return e=o!==null?o.baseLanes|n:n,t.lanes=t.childLanes=1073741824,t.memoizedState={baseLanes:e,cachePool:null,transitions:null},t.updateQueue=null,Se(mo,It),It|=e,null;t.memoizedState={baseLanes:0,cachePool:null,transitions:null},r=o!==null?o.baseLanes:n,Se(mo,It),It|=r}else o!==null?(r=o.baseLanes|n,t.memoizedState=null):r=n,Se(mo,It),It|=r;return ht(e,t,i,n),t.child}function O9(e,t){var n=t.ref;(e===null&&n!==null||e!==null&&e.ref!==n)&&(t.flags|=512,t.flags|=2097152)}function z0(e,t,n,r,i){var o=$t(n)?ji:ft.current;return o=Fo(t,o),Co(t,i),n=Ch(e,t,n,r,o,i),r=kh(),e!==null&&!jt?(t.updateQueue=e.updateQueue,t.flags&=-2053,e.lanes&=~i,fr(e,t,i)):(Ne&&r&&uh(t),t.flags|=1,ht(e,t,n,i),t.child)}function V2(e,t,n,r,i){if($t(n)){var o=!0;eu(t)}else o=!1;if(Co(t,i),t.stateNode===null)_c(e,t),S9(t,n,r),A0(t,n,r,i),r=!0;else if(e===null){var s=t.stateNode,l=t.memoizedProps;s.props=l;var c=s.context,u=n.contextType;typeof u=="object"&&u!==null?u=un(u):(u=$t(n)?ji:ft.current,u=Fo(t,u));var d=n.getDerivedStateFromProps,p=typeof d=="function"||typeof s.getSnapshotBeforeUpdate=="function";p||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==r||c!==u)&&T2(t,s,r,u),Er=!1;var g=t.memoizedState;s.state=g,ou(t,r,s,i),c=t.memoizedState,l!==r||g!==c||Lt.current||Er?(typeof d=="function"&&(T0(t,n,d,r),c=t.memoizedState),(l=Er||M2(t,n,l,r,g,c,u))?(p||typeof s.UNSAFE_componentWillMount!="function"&&typeof s.componentWillMount!="function"||(typeof s.componentWillMount=="function"&&s.componentWillMount(),typeof s.UNSAFE_componentWillMount=="function"&&s.UNSAFE_componentWillMount()),typeof s.componentDidMount=="function"&&(t.flags|=4194308)):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),t.memoizedProps=r,t.memoizedState=c),s.props=r,s.state=c,s.context=u,r=l):(typeof s.componentDidMount=="function"&&(t.flags|=4194308),r=!1)}else{s=t.stateNode,o9(e,t),l=t.memoizedProps,u=t.type===t.elementType?l:vn(t.type,l),s.props=u,p=t.pendingProps,g=s.context,c=n.contextType,typeof c=="object"&&c!==null?c=un(c):(c=$t(n)?ji:ft.current,c=Fo(t,c));var w=n.getDerivedStateFromProps;(d=typeof w=="function"||typeof s.getSnapshotBeforeUpdate=="function")||typeof s.UNSAFE_componentWillReceiveProps!="function"&&typeof s.componentWillReceiveProps!="function"||(l!==p||g!==c)&&T2(t,s,r,c),Er=!1,g=t.memoizedState,s.state=g,ou(t,r,s,i);var y=t.memoizedState;l!==p||g!==y||Lt.current||Er?(typeof w=="function"&&(T0(t,n,w,r),y=t.memoizedState),(u=Er||M2(t,n,u,r,g,y,c)||!1)?(d||typeof s.UNSAFE_componentWillUpdate!="function"&&typeof s.componentWillUpdate!="function"||(typeof s.componentWillUpdate=="function"&&s.componentWillUpdate(r,y,c),typeof s.UNSAFE_componentWillUpdate=="function"&&s.UNSAFE_componentWillUpdate(r,y,c)),typeof s.componentDidUpdate=="function"&&(t.flags|=4),typeof s.getSnapshotBeforeUpdate=="function"&&(t.flags|=1024)):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),t.memoizedProps=r,t.memoizedState=y),s.props=r,s.state=y,s.context=c,r=u):(typeof s.componentDidUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=4),typeof s.getSnapshotBeforeUpdate!="function"||l===e.memoizedProps&&g===e.memoizedState||(t.flags|=1024),r=!1)}return D0(e,t,n,r,o,i)}function D0(e,t,n,r,i,o){O9(e,t);var s=(t.flags&128)!==0;if(!r&&!s)return i&&L2(t,n,!1),fr(e,t,o);r=t.stateNode,y7.current=t;var l=s&&typeof n.getDerivedStateFromError!="function"?null:r.render();return t.flags|=1,e!==null&&s?(t.child=No(t,e.child,null,o),t.child=No(t,null,l,o)):ht(e,t,l,o),t.memoizedState=r.state,i&&L2(t,n,!0),t.child}function N9(e){var t=e.stateNode;t.pendingContext?S2(e,t.pendingContext,t.pendingContext!==t.context):t.context&&S2(e,t.context,!1),xh(e,t.containerInfo)}function W2(e,t,n,r,i){return Oo(),fh(i),t.flags|=256,ht(e,t,n,r),t.child}var B0={dehydrated:null,treeContext:null,retryLane:0};function V0(e){return{baseLanes:e,cachePool:null,transitions:null}}function P9(e,t,n){var r=t.pendingProps,i=Re.current,o=!1,s=(t.flags&128)!==0,l;if((l=s)||(l=e!==null&&e.memoizedState===null?!1:(i&2)!==0),l?(o=!0,t.flags&=-129):(e===null||e.memoizedState!==null)&&(i|=1),Se(Re,i&1),e===null)return R0(t),e=t.memoizedState,e!==null&&(e=e.dehydrated,e!==null)?(t.mode&1?e.data==="$!"?t.lanes=8:t.lanes=1073741824:t.lanes=1,null):(s=r.children,e=r.fallback,o?(r=t.mode,o=t.child,s={mode:"hidden",children:s},!(r&1)&&o!==null?(o.childLanes=0,o.pendingProps=s):o=Qu(s,r,0,null),e=yi(e,r,n,null),o.return=t,e.return=t,o.sibling=e,t.child=o,t.child.memoizedState=V0(n),t.memoizedState=B0,e):Sh(t,s));if(i=e.memoizedState,i!==null&&(l=i.dehydrated,l!==null))return w7(e,t,s,r,l,i,n);if(o){o=r.fallback,s=t.mode,i=e.child,l=i.sibling;var c={mode:"hidden",children:r.children};return!(s&1)&&t.child!==i?(r=t.child,r.childLanes=0,r.pendingProps=c,t.deletions=null):(r=Vr(i,c),r.subtreeFlags=i.subtreeFlags&14680064),l!==null?o=Vr(l,o):(o=yi(o,s,n,null),o.flags|=2),o.return=t,r.return=t,r.sibling=o,t.child=r,r=o,o=t.child,s=e.child.memoizedState,s=s===null?V0(n):{baseLanes:s.baseLanes|n,cachePool:null,transitions:s.transitions},o.memoizedState=s,o.childLanes=e.childLanes&~n,t.memoizedState=B0,r}return o=e.child,e=o.sibling,r=Vr(o,{mode:"visible",children:r.children}),!(t.mode&1)&&(r.lanes=n),r.return=t,r.sibling=null,e!==null&&(n=t.deletions,n===null?(t.deletions=[e],t.flags|=16):n.push(e)),t.child=r,t.memoizedState=null,r}function Sh(e,t){return t=Qu({mode:"visible",children:t},e.mode,0,null),t.return=e,e.child=t}function Rl(e,t,n,r){return r!==null&&fh(r),No(t,e.child,null,n),e=Sh(t,t.pendingProps.children),e.flags|=2,t.memoizedState=null,e}function w7(e,t,n,r,i,o,s){if(n)return t.flags&256?(t.flags&=-257,r=af(Error(q(422))),Rl(e,t,s,r)):t.memoizedState!==null?(t.child=e.child,t.flags|=128,null):(o=r.fallback,i=t.mode,r=Qu({mode:"visible",children:r.children},i,0,null),o=yi(o,i,s,null),o.flags|=2,r.return=t,o.return=t,r.sibling=o,t.child=r,t.mode&1&&No(t,e.child,null,s),t.child.memoizedState=V0(s),t.memoizedState=B0,o);if(!(t.mode&1))return Rl(e,t,s,null);if(i.data==="$!"){if(r=i.nextSibling&&i.nextSibling.dataset,r)var l=r.dgst;return r=l,o=Error(q(419)),r=af(o,r,void 0),Rl(e,t,s,r)}if(l=(s&e.childLanes)!==0,jt||l){if(r=Je,r!==null){switch(s&-s){case 4:i=2;break;case 16:i=8;break;case 64:case 128:case 256:case 512:case 1024:case 2048:case 4096:case 8192:case 16384:case 32768:case 65536:case 131072:case 262144:case 524288:case 1048576:case 2097152:case 4194304:case 8388608:case 16777216:case 33554432:case 67108864:i=32;break;case 536870912:i=268435456;break;default:i=0}i=i&(r.suspendedLanes|s)?0:i,i!==0&&i!==o.retryLane&&(o.retryLane=i,dr(e,i),jn(r,e,i,-1))}return Nh(),r=af(Error(q(421))),Rl(e,t,s,r)}return i.data==="$?"?(t.flags|=128,t.child=e.child,t=P7.bind(null,e),i._reactRetry=t,null):(e=o.treeContext,Dt=Ir(i.nextSibling),Wt=t,Ne=!0,wn=null,e!==null&&(tn[nn++]=or,tn[nn++]=sr,tn[nn++]=Ei,or=e.id,sr=e.overflow,Ei=t),t=Sh(t,r.children),t.flags|=4096,t)}function U2(e,t,n){e.lanes|=t;var r=e.alternate;r!==null&&(r.lanes|=t),M0(e.return,t,n)}function lf(e,t,n,r,i){var o=e.memoizedState;o===null?e.memoizedState={isBackwards:t,rendering:null,renderingStartTime:0,last:r,tail:n,tailMode:i}:(o.isBackwards=t,o.rendering=null,o.renderingStartTime=0,o.last=r,o.tail=n,o.tailMode=i)}function R9(e,t,n){var r=t.pendingProps,i=r.revealOrder,o=r.tail;if(ht(e,t,r.children,n),r=Re.current,r&2)r=r&1|2,t.flags|=128;else{if(e!==null&&e.flags&128)e:for(e=t.child;e!==null;){if(e.tag===13)e.memoizedState!==null&&U2(e,n,t);else if(e.tag===19)U2(e,n,t);else if(e.child!==null){e.child.return=e,e=e.child;continue}if(e===t)break e;for(;e.sibling===null;){if(e.return===null||e.return===t)break e;e=e.return}e.sibling.return=e.return,e=e.sibling}r&=1}if(Se(Re,r),!(t.mode&1))t.memoizedState=null;else switch(i){case"forwards":for(n=t.child,i=null;n!==null;)e=n.alternate,e!==null&&su(e)===null&&(i=n),n=n.sibling;n=i,n===null?(i=t.child,t.child=null):(i=n.sibling,n.sibling=null),lf(t,!1,i,n,o);break;case"backwards":for(n=null,i=t.child,t.child=null;i!==null;){if(e=i.alternate,e!==null&&su(e)===null){t.child=i;break}e=i.sibling,i.sibling=n,n=i,i=e}lf(t,!0,n,null,o);break;case"together":lf(t,!1,null,null,void 0);break;default:t.memoizedState=null}return t.child}function _c(e,t){!(t.mode&1)&&e!==null&&(e.alternate=null,t.alternate=null,t.flags|=2)}function fr(e,t,n){if(e!==null&&(t.dependencies=e.dependencies),Li|=t.lanes,!(n&t.childLanes))return null;if(e!==null&&t.child!==e.child)throw Error(q(153));if(t.child!==null){for(e=t.child,n=Vr(e,e.pendingProps),t.child=n,n.return=t;e.sibling!==null;)e=e.sibling,n=n.sibling=Vr(e,e.pendingProps),n.return=t;n.sibling=null}return t.child}function b7(e,t,n){switch(t.tag){case 3:N9(t),Oo();break;case 5:s9(t);break;case 1:$t(t.type)&&eu(t);break;case 4:xh(t,t.stateNode.containerInfo);break;case 10:var r=t.type._context,i=t.memoizedProps.value;Se(ru,r._currentValue),r._currentValue=i;break;case 13:if(r=t.memoizedState,r!==null)return r.dehydrated!==null?(Se(Re,Re.current&1),t.flags|=128,null):n&t.child.childLanes?P9(e,t,n):(Se(Re,Re.current&1),e=fr(e,t,n),e!==null?e.sibling:null);Se(Re,Re.current&1);break;case 19:if(r=(n&t.childLanes)!==0,e.flags&128){if(r)return R9(e,t,n);t.flags|=128}if(i=t.memoizedState,i!==null&&(i.rendering=null,i.tail=null,i.lastEffect=null),Se(Re,Re.current),r)break;return null;case 22:case 23:return t.lanes=0,F9(e,t,n)}return fr(e,t,n)}var M9,W0,T9,A9;M9=function(e,t){for(var n=t.child;n!==null;){if(n.tag===5||n.tag===6)e.appendChild(n.stateNode);else if(n.tag!==4&&n.child!==null){n.child.return=n,n=n.child;continue}if(n===t)break;for(;n.sibling===null;){if(n.return===null||n.return===t)return;n=n.return}n.sibling.return=n.return,n=n.sibling}};W0=function(){};T9=function(e,t,n,r){var i=e.memoizedProps;if(i!==r){e=t.stateNode,hi(Wn.current);var o=null;switch(n){case"input":i=d0(e,i),r=d0(e,r),o=[];break;case"select":i=Ae({},i,{value:void 0}),r=Ae({},r,{value:void 0}),o=[];break;case"textarea":i=p0(e,i),r=p0(e,r),o=[];break;default:typeof i.onClick!="function"&&typeof r.onClick=="function"&&(e.onclick=Xc)}g0(n,r);var s;n=null;for(u in i)if(!r.hasOwnProperty(u)&&i.hasOwnProperty(u)&&i[u]!=null)if(u==="style"){var l=i[u];for(s in l)l.hasOwnProperty(s)&&(n||(n={}),n[s]="")}else u!=="dangerouslySetInnerHTML"&&u!=="children"&&u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&u!=="autoFocus"&&(ya.hasOwnProperty(u)?o||(o=[]):(o=o||[]).push(u,null));for(u in r){var c=r[u];if(l=i!=null?i[u]:void 0,r.hasOwnProperty(u)&&c!==l&&(c!=null||l!=null))if(u==="style")if(l){for(s in l)!l.hasOwnProperty(s)||c&&c.hasOwnProperty(s)||(n||(n={}),n[s]="");for(s in c)c.hasOwnProperty(s)&&l[s]!==c[s]&&(n||(n={}),n[s]=c[s])}else n||(o||(o=[]),o.push(u,n)),n=c;else u==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,l=l?l.__html:void 0,c!=null&&l!==c&&(o=o||[]).push(u,c)):u==="children"?typeof c!="string"&&typeof c!="number"||(o=o||[]).push(u,""+c):u!=="suppressContentEditableWarning"&&u!=="suppressHydrationWarning"&&(ya.hasOwnProperty(u)?(c!=null&&u==="onScroll"&&Le("scroll",e),o||l===c||(o=[])):(o=o||[]).push(u,c))}n&&(o=o||[]).push("style",n);var u=o;(t.updateQueue=u)&&(t.flags|=4)}};A9=function(e,t,n,r){n!==r&&(t.flags|=4)};function gs(e,t){if(!Ne)switch(e.tailMode){case"hidden":t=e.tail;for(var n=null;t!==null;)t.alternate!==null&&(n=t),t=t.sibling;n===null?e.tail=null:n.sibling=null;break;case"collapsed":n=e.tail;for(var r=null;n!==null;)n.alternate!==null&&(r=n),n=n.sibling;r===null?t||e.tail===null?e.tail=null:e.tail.sibling=null:r.sibling=null}}function lt(e){var t=e.alternate!==null&&e.alternate.child===e.child,n=0,r=0;if(t)for(var i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags&14680064,r|=i.flags&14680064,i.return=e,i=i.sibling;else for(i=e.child;i!==null;)n|=i.lanes|i.childLanes,r|=i.subtreeFlags,r|=i.flags,i.return=e,i=i.sibling;return e.subtreeFlags|=r,e.childLanes=n,t}function C7(e,t,n){var r=t.pendingProps;switch(dh(t),t.tag){case 2:case 16:case 15:case 0:case 11:case 7:case 8:case 12:case 9:case 14:return lt(t),null;case 1:return $t(t.type)&&Jc(),lt(t),null;case 3:return r=t.stateNode,Po(),Oe(Lt),Oe(ft),wh(),r.pendingContext&&(r.context=r.pendingContext,r.pendingContext=null),(e===null||e.child===null)&&(Nl(t)?t.flags|=4:e===null||e.memoizedState.isDehydrated&&!(t.flags&256)||(t.flags|=1024,wn!==null&&(Y0(wn),wn=null))),W0(e,t),lt(t),null;case 5:yh(t);var i=hi(Oa.current);if(n=t.type,e!==null&&t.stateNode!=null)T9(e,t,n,r,i),e.ref!==t.ref&&(t.flags|=512,t.flags|=2097152);else{if(!r){if(t.stateNode===null)throw Error(q(166));return lt(t),null}if(e=hi(Wn.current),Nl(t)){r=t.stateNode,n=t.type;var o=t.memoizedProps;switch(r[Dn]=t,r[_a]=o,e=(t.mode&1)!==0,n){case"dialog":Le("cancel",r),Le("close",r);break;case"iframe":case"object":case"embed":Le("load",r);break;case"video":case"audio":for(i=0;i<qs.length;i++)Le(qs[i],r);break;case"source":Le("error",r);break;case"img":case"image":case"link":Le("error",r),Le("load",r);break;case"details":Le("toggle",r);break;case"input":Jp(r,o),Le("invalid",r);break;case"select":r._wrapperState={wasMultiple:!!o.multiple},Le("invalid",r);break;case"textarea":t2(r,o),Le("invalid",r)}g0(n,o),i=null;for(var s in o)if(o.hasOwnProperty(s)){var l=o[s];s==="children"?typeof l=="string"?r.textContent!==l&&(o.suppressHydrationWarning!==!0&&Ol(r.textContent,l,e),i=["children",l]):typeof l=="number"&&r.textContent!==""+l&&(o.suppressHydrationWarning!==!0&&Ol(r.textContent,l,e),i=["children",""+l]):ya.hasOwnProperty(s)&&l!=null&&s==="onScroll"&&Le("scroll",r)}switch(n){case"input":kl(r),e2(r,o,!0);break;case"textarea":kl(r),n2(r);break;case"select":case"option":break;default:typeof o.onClick=="function"&&(r.onclick=Xc)}r=i,t.updateQueue=r,r!==null&&(t.flags|=4)}else{s=i.nodeType===9?i:i.ownerDocument,e==="http://www.w3.org/1999/xhtml"&&(e=d4(n)),e==="http://www.w3.org/1999/xhtml"?n==="script"?(e=s.createElement("div"),e.innerHTML="<script><\/script>",e=e.removeChild(e.firstChild)):typeof r.is=="string"?e=s.createElement(n,{is:r.is}):(e=s.createElement(n),n==="select"&&(s=e,r.multiple?s.multiple=!0:r.size&&(s.size=r.size))):e=s.createElementNS(e,n),e[Dn]=t,e[_a]=r,M9(e,t,!1,!1),t.stateNode=e;e:{switch(s=v0(n,r),n){case"dialog":Le("cancel",e),Le("close",e),i=r;break;case"iframe":case"object":case"embed":Le("load",e),i=r;break;case"video":case"audio":for(i=0;i<qs.length;i++)Le(qs[i],e);i=r;break;case"source":Le("error",e),i=r;break;case"img":case"image":case"link":Le("error",e),Le("load",e),i=r;break;case"details":Le("toggle",e),i=r;break;case"input":Jp(e,r),i=d0(e,r),Le("invalid",e);break;case"option":i=r;break;case"select":e._wrapperState={wasMultiple:!!r.multiple},i=Ae({},r,{value:void 0}),Le("invalid",e);break;case"textarea":t2(e,r),i=p0(e,r),Le("invalid",e);break;default:i=r}g0(n,i),l=i;for(o in l)if(l.hasOwnProperty(o)){var c=l[o];o==="style"?p4(e,c):o==="dangerouslySetInnerHTML"?(c=c?c.__html:void 0,c!=null&&f4(e,c)):o==="children"?typeof c=="string"?(n!=="textarea"||c!=="")&&wa(e,c):typeof c=="number"&&wa(e,""+c):o!=="suppressContentEditableWarning"&&o!=="suppressHydrationWarning"&&o!=="autoFocus"&&(ya.hasOwnProperty(o)?c!=null&&o==="onScroll"&&Le("scroll",e):c!=null&&K1(e,o,c,s))}switch(n){case"input":kl(e),e2(e,r,!1);break;case"textarea":kl(e),n2(e);break;case"option":r.value!=null&&e.setAttribute("value",""+Ur(r.value));break;case"select":e.multiple=!!r.multiple,o=r.value,o!=null?xo(e,!!r.multiple,o,!1):r.defaultValue!=null&&xo(e,!!r.multiple,r.defaultValue,!0);break;default:typeof i.onClick=="function"&&(e.onclick=Xc)}switch(n){case"button":case"input":case"select":case"textarea":r=!!r.autoFocus;break e;case"img":r=!0;break e;default:r=!1}}r&&(t.flags|=4)}t.ref!==null&&(t.flags|=512,t.flags|=2097152)}return lt(t),null;case 6:if(e&&t.stateNode!=null)A9(e,t,e.memoizedProps,r);else{if(typeof r!="string"&&t.stateNode===null)throw Error(q(166));if(n=hi(Oa.current),hi(Wn.current),Nl(t)){if(r=t.stateNode,n=t.memoizedProps,r[Dn]=t,(o=r.nodeValue!==n)&&(e=Wt,e!==null))switch(e.tag){case 3:Ol(r.nodeValue,n,(e.mode&1)!==0);break;case 5:e.memoizedProps.suppressHydrationWarning!==!0&&Ol(r.nodeValue,n,(e.mode&1)!==0)}o&&(t.flags|=4)}else r=(n.nodeType===9?n:n.ownerDocument).createTextNode(r),r[Dn]=t,t.stateNode=r}return lt(t),null;case 13:if(Oe(Re),r=t.memoizedState,e===null||e.memoizedState!==null&&e.memoizedState.dehydrated!==null){if(Ne&&Dt!==null&&t.mode&1&&!(t.flags&128))t9(),Oo(),t.flags|=98560,o=!1;else if(o=Nl(t),r!==null&&r.dehydrated!==null){if(e===null){if(!o)throw Error(q(318));if(o=t.memoizedState,o=o!==null?o.dehydrated:null,!o)throw Error(q(317));o[Dn]=t}else Oo(),!(t.flags&128)&&(t.memoizedState=null),t.flags|=4;lt(t),o=!1}else wn!==null&&(Y0(wn),wn=null),o=!0;if(!o)return t.flags&65536?t:null}return t.flags&128?(t.lanes=n,t):(r=r!==null,r!==(e!==null&&e.memoizedState!==null)&&r&&(t.child.flags|=8192,t.mode&1&&(e===null||Re.current&1?qe===0&&(qe=3):Nh())),t.updateQueue!==null&&(t.flags|=4),lt(t),null);case 4:return Po(),W0(e,t),e===null&&La(t.stateNode.containerInfo),lt(t),null;case 10:return mh(t.type._context),lt(t),null;case 17:return $t(t.type)&&Jc(),lt(t),null;case 19:if(Oe(Re),o=t.memoizedState,o===null)return lt(t),null;if(r=(t.flags&128)!==0,s=o.rendering,s===null)if(r)gs(o,!1);else{if(qe!==0||e!==null&&e.flags&128)for(e=t.child;e!==null;){if(s=su(e),s!==null){for(t.flags|=128,gs(o,!1),r=s.updateQueue,r!==null&&(t.updateQueue=r,t.flags|=4),t.subtreeFlags=0,r=n,n=t.child;n!==null;)o=n,e=r,o.flags&=14680066,s=o.alternate,s===null?(o.childLanes=0,o.lanes=e,o.child=null,o.subtreeFlags=0,o.memoizedProps=null,o.memoizedState=null,o.updateQueue=null,o.dependencies=null,o.stateNode=null):(o.childLanes=s.childLanes,o.lanes=s.lanes,o.child=s.child,o.subtreeFlags=0,o.deletions=null,o.memoizedProps=s.memoizedProps,o.memoizedState=s.memoizedState,o.updateQueue=s.updateQueue,o.type=s.type,e=s.dependencies,o.dependencies=e===null?null:{lanes:e.lanes,firstContext:e.firstContext}),n=n.sibling;return Se(Re,Re.current&1|2),t.child}e=e.sibling}o.tail!==null&&Be()>Mo&&(t.flags|=128,r=!0,gs(o,!1),t.lanes=4194304)}else{if(!r)if(e=su(s),e!==null){if(t.flags|=128,r=!0,n=e.updateQueue,n!==null&&(t.updateQueue=n,t.flags|=4),gs(o,!0),o.tail===null&&o.tailMode==="hidden"&&!s.alternate&&!Ne)return lt(t),null}else 2*Be()-o.renderingStartTime>Mo&&n!==1073741824&&(t.flags|=128,r=!0,gs(o,!1),t.lanes=4194304);o.isBackwards?(s.sibling=t.child,t.child=s):(n=o.last,n!==null?n.sibling=s:t.child=s,o.last=s)}return o.tail!==null?(t=o.tail,o.rendering=t,o.tail=t.sibling,o.renderingStartTime=Be(),t.sibling=null,n=Re.current,Se(Re,r?n&1|2:n&1),t):(lt(t),null);case 22:case 23:return Oh(),r=t.memoizedState!==null,e!==null&&e.memoizedState!==null!==r&&(t.flags|=8192),r&&t.mode&1?It&1073741824&&(lt(t),t.subtreeFlags&6&&(t.flags|=8192)):lt(t),null;case 24:return null;case 25:return null}throw Error(q(156,t.tag))}function k7(e,t){switch(dh(t),t.tag){case 1:return $t(t.type)&&Jc(),e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 3:return Po(),Oe(Lt),Oe(ft),wh(),e=t.flags,e&65536&&!(e&128)?(t.flags=e&-65537|128,t):null;case 5:return yh(t),null;case 13:if(Oe(Re),e=t.memoizedState,e!==null&&e.dehydrated!==null){if(t.alternate===null)throw Error(q(340));Oo()}return e=t.flags,e&65536?(t.flags=e&-65537|128,t):null;case 19:return Oe(Re),null;case 4:return Po(),null;case 10:return mh(t.type._context),null;case 22:case 23:return Oh(),null;case 24:return null;default:return null}}var Ml=!1,dt=!1,j7=typeof WeakSet=="function"?WeakSet:Set,Y=null;function po(e,t){var n=e.ref;if(n!==null)if(typeof n=="function")try{n(null)}catch(r){Ie(e,t,r)}else n.current=null}function U0(e,t,n){try{n()}catch(r){Ie(e,t,r)}}var H2=!1;function E7(e,t){if(L0=Gc,e=V4(),ch(e)){if("selectionStart"in e)var n={start:e.selectionStart,end:e.selectionEnd};else e:{n=(n=e.ownerDocument)&&n.defaultView||window;var r=n.getSelection&&n.getSelection();if(r&&r.rangeCount!==0){n=r.anchorNode;var i=r.anchorOffset,o=r.focusNode;r=r.focusOffset;try{n.nodeType,o.nodeType}catch{n=null;break e}var s=0,l=-1,c=-1,u=0,d=0,p=e,g=null;t:for(;;){for(var w;p!==n||i!==0&&p.nodeType!==3||(l=s+i),p!==o||r!==0&&p.nodeType!==3||(c=s+r),p.nodeType===3&&(s+=p.nodeValue.length),(w=p.firstChild)!==null;)g=p,p=w;for(;;){if(p===e)break t;if(g===n&&++u===i&&(l=s),g===o&&++d===r&&(c=s),(w=p.nextSibling)!==null)break;p=g,g=p.parentNode}p=w}n=l===-1||c===-1?null:{start:l,end:c}}else n=null}n=n||{start:0,end:0}}else n=null;for($0={focusedElem:e,selectionRange:n},Gc=!1,Y=t;Y!==null;)if(t=Y,e=t.child,(t.subtreeFlags&1028)!==0&&e!==null)e.return=t,Y=e;else for(;Y!==null;){t=Y;try{var y=t.alternate;if(t.flags&1024)switch(t.tag){case 0:case 11:case 15:break;case 1:if(y!==null){var x=y.memoizedProps,C=y.memoizedState,m=t.stateNode,v=m.getSnapshotBeforeUpdate(t.elementType===t.type?x:vn(t.type,x),C);m.__reactInternalSnapshotBeforeUpdate=v}break;case 3:var h=t.stateNode.containerInfo;h.nodeType===1?h.textContent="":h.nodeType===9&&h.documentElement&&h.removeChild(h.documentElement);break;case 5:case 6:case 4:case 17:break;default:throw Error(q(163))}}catch(b){Ie(t,t.return,b)}if(e=t.sibling,e!==null){e.return=t.return,Y=e;break}Y=t.return}return y=H2,H2=!1,y}function oa(e,t,n){var r=t.updateQueue;if(r=r!==null?r.lastEffect:null,r!==null){var i=r=r.next;do{if((i.tag&e)===e){var o=i.destroy;i.destroy=void 0,o!==void 0&&U0(t,n,o)}i=i.next}while(i!==r)}}function qu(e,t){if(t=t.updateQueue,t=t!==null?t.lastEffect:null,t!==null){var n=t=t.next;do{if((n.tag&e)===e){var r=n.create;n.destroy=r()}n=n.next}while(n!==t)}}function H0(e){var t=e.ref;if(t!==null){var n=e.stateNode;switch(e.tag){case 5:e=n;break;default:e=n}typeof t=="function"?t(e):t.current=e}}function I9(e){var t=e.alternate;t!==null&&(e.alternate=null,I9(t)),e.child=null,e.deletions=null,e.sibling=null,e.tag===5&&(t=e.stateNode,t!==null&&(delete t[Dn],delete t[_a],delete t[O0],delete t[a7],delete t[l7])),e.stateNode=null,e.return=null,e.dependencies=null,e.memoizedProps=null,e.memoizedState=null,e.pendingProps=null,e.stateNode=null,e.updateQueue=null}function z9(e){return e.tag===5||e.tag===3||e.tag===4}function q2(e){e:for(;;){for(;e.sibling===null;){if(e.return===null||z9(e.return))return null;e=e.return}for(e.sibling.return=e.return,e=e.sibling;e.tag!==5&&e.tag!==6&&e.tag!==18;){if(e.flags&2||e.child===null||e.tag===4)continue e;e.child.return=e,e=e.child}if(!(e.flags&2))return e.stateNode}}function q0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.nodeType===8?n.parentNode.insertBefore(e,t):n.insertBefore(e,t):(n.nodeType===8?(t=n.parentNode,t.insertBefore(e,n)):(t=n,t.appendChild(e)),n=n._reactRootContainer,n!=null||t.onclick!==null||(t.onclick=Xc));else if(r!==4&&(e=e.child,e!==null))for(q0(e,t,n),e=e.sibling;e!==null;)q0(e,t,n),e=e.sibling}function Z0(e,t,n){var r=e.tag;if(r===5||r===6)e=e.stateNode,t?n.insertBefore(e,t):n.appendChild(e);else if(r!==4&&(e=e.child,e!==null))for(Z0(e,t,n),e=e.sibling;e!==null;)Z0(e,t,n),e=e.sibling}var rt=null,xn=!1;function mr(e,t,n){for(n=n.child;n!==null;)D9(e,t,n),n=n.sibling}function D9(e,t,n){if(Vn&&typeof Vn.onCommitFiberUnmount=="function")try{Vn.onCommitFiberUnmount(Iu,n)}catch{}switch(n.tag){case 5:dt||po(n,t);case 6:var r=rt,i=xn;rt=null,mr(e,t,n),rt=r,xn=i,rt!==null&&(xn?(e=rt,n=n.stateNode,e.nodeType===8?e.parentNode.removeChild(n):e.removeChild(n)):rt.removeChild(n.stateNode));break;case 18:rt!==null&&(xn?(e=rt,n=n.stateNode,e.nodeType===8?ef(e.parentNode,n):e.nodeType===1&&ef(e,n),ja(e)):ef(rt,n.stateNode));break;case 4:r=rt,i=xn,rt=n.stateNode.containerInfo,xn=!0,mr(e,t,n),rt=r,xn=i;break;case 0:case 11:case 14:case 15:if(!dt&&(r=n.updateQueue,r!==null&&(r=r.lastEffect,r!==null))){i=r=r.next;do{var o=i,s=o.destroy;o=o.tag,s!==void 0&&(o&2||o&4)&&U0(n,t,s),i=i.next}while(i!==r)}mr(e,t,n);break;case 1:if(!dt&&(po(n,t),r=n.stateNode,typeof r.componentWillUnmount=="function"))try{r.props=n.memoizedProps,r.state=n.memoizedState,r.componentWillUnmount()}catch(l){Ie(n,t,l)}mr(e,t,n);break;case 21:mr(e,t,n);break;case 22:n.mode&1?(dt=(r=dt)||n.memoizedState!==null,mr(e,t,n),dt=r):mr(e,t,n);break;default:mr(e,t,n)}}function Z2(e){var t=e.updateQueue;if(t!==null){e.updateQueue=null;var n=e.stateNode;n===null&&(n=e.stateNode=new j7),t.forEach(function(r){var i=R7.bind(null,e,r);n.has(r)||(n.add(r),r.then(i,i))})}}function mn(e,t){var n=t.deletions;if(n!==null)for(var r=0;r<n.length;r++){var i=n[r];try{var o=e,s=t,l=s;e:for(;l!==null;){switch(l.tag){case 5:rt=l.stateNode,xn=!1;break e;case 3:rt=l.stateNode.containerInfo,xn=!0;break e;case 4:rt=l.stateNode.containerInfo,xn=!0;break e}l=l.return}if(rt===null)throw Error(q(160));D9(o,s,i),rt=null,xn=!1;var c=i.alternate;c!==null&&(c.return=null),i.return=null}catch(u){Ie(i,t,u)}}if(t.subtreeFlags&12854)for(t=t.child;t!==null;)B9(t,e),t=t.sibling}function B9(e,t){var n=e.alternate,r=e.flags;switch(e.tag){case 0:case 11:case 14:case 15:if(mn(t,e),Nn(e),r&4){try{oa(3,e,e.return),qu(3,e)}catch(x){Ie(e,e.return,x)}try{oa(5,e,e.return)}catch(x){Ie(e,e.return,x)}}break;case 1:mn(t,e),Nn(e),r&512&&n!==null&&po(n,n.return);break;case 5:if(mn(t,e),Nn(e),r&512&&n!==null&&po(n,n.return),e.flags&32){var i=e.stateNode;try{wa(i,"")}catch(x){Ie(e,e.return,x)}}if(r&4&&(i=e.stateNode,i!=null)){var o=e.memoizedProps,s=n!==null?n.memoizedProps:o,l=e.type,c=e.updateQueue;if(e.updateQueue=null,c!==null)try{l==="input"&&o.type==="radio"&&o.name!=null&&c4(i,o),v0(l,s);var u=v0(l,o);for(s=0;s<c.length;s+=2){var d=c[s],p=c[s+1];d==="style"?p4(i,p):d==="dangerouslySetInnerHTML"?f4(i,p):d==="children"?wa(i,p):K1(i,d,p,u)}switch(l){case"input":f0(i,o);break;case"textarea":u4(i,o);break;case"select":var g=i._wrapperState.wasMultiple;i._wrapperState.wasMultiple=!!o.multiple;var w=o.value;w!=null?xo(i,!!o.multiple,w,!1):g!==!!o.multiple&&(o.defaultValue!=null?xo(i,!!o.multiple,o.defaultValue,!0):xo(i,!!o.multiple,o.multiple?[]:"",!1))}i[_a]=o}catch(x){Ie(e,e.return,x)}}break;case 6:if(mn(t,e),Nn(e),r&4){if(e.stateNode===null)throw Error(q(162));i=e.stateNode,o=e.memoizedProps;try{i.nodeValue=o}catch(x){Ie(e,e.return,x)}}break;case 3:if(mn(t,e),Nn(e),r&4&&n!==null&&n.memoizedState.isDehydrated)try{ja(t.containerInfo)}catch(x){Ie(e,e.return,x)}break;case 4:mn(t,e),Nn(e);break;case 13:mn(t,e),Nn(e),i=e.child,i.flags&8192&&(o=i.memoizedState!==null,i.stateNode.isHidden=o,!o||i.alternate!==null&&i.alternate.memoizedState!==null||(_h=Be())),r&4&&Z2(e);break;case 22:if(d=n!==null&&n.memoizedState!==null,e.mode&1?(dt=(u=dt)||d,mn(t,e),dt=u):mn(t,e),Nn(e),r&8192){if(u=e.memoizedState!==null,(e.stateNode.isHidden=u)&&!d&&e.mode&1)for(Y=e,d=e.child;d!==null;){for(p=Y=d;Y!==null;){switch(g=Y,w=g.child,g.tag){case 0:case 11:case 14:case 15:oa(4,g,g.return);break;case 1:po(g,g.return);var y=g.stateNode;if(typeof y.componentWillUnmount=="function"){r=g,n=g.return;try{t=r,y.props=t.memoizedProps,y.state=t.memoizedState,y.componentWillUnmount()}catch(x){Ie(r,n,x)}}break;case 5:po(g,g.return);break;case 22:if(g.memoizedState!==null){G2(p);continue}}w!==null?(w.return=g,Y=w):G2(p)}d=d.sibling}e:for(d=null,p=e;;){if(p.tag===5){if(d===null){d=p;try{i=p.stateNode,u?(o=i.style,typeof o.setProperty=="function"?o.setProperty("display","none","important"):o.display="none"):(l=p.stateNode,c=p.memoizedProps.style,s=c!=null&&c.hasOwnProperty("display")?c.display:null,l.style.display=h4("display",s))}catch(x){Ie(e,e.return,x)}}}else if(p.tag===6){if(d===null)try{p.stateNode.nodeValue=u?"":p.memoizedProps}catch(x){Ie(e,e.return,x)}}else if((p.tag!==22&&p.tag!==23||p.memoizedState===null||p===e)&&p.child!==null){p.child.return=p,p=p.child;continue}if(p===e)break e;for(;p.sibling===null;){if(p.return===null||p.return===e)break e;d===p&&(d=null),p=p.return}d===p&&(d=null),p.sibling.return=p.return,p=p.sibling}}break;case 19:mn(t,e),Nn(e),r&4&&Z2(e);break;case 21:break;default:mn(t,e),Nn(e)}}function Nn(e){var t=e.flags;if(t&2){try{e:{for(var n=e.return;n!==null;){if(z9(n)){var r=n;break e}n=n.return}throw Error(q(160))}switch(r.tag){case 5:var i=r.stateNode;r.flags&32&&(wa(i,""),r.flags&=-33);var o=q2(e);Z0(e,o,i);break;case 3:case 4:var s=r.stateNode.containerInfo,l=q2(e);q0(e,l,s);break;default:throw Error(q(161))}}catch(c){Ie(e,e.return,c)}e.flags&=-3}t&4096&&(e.flags&=-4097)}function S7(e,t,n){Y=e,V9(e)}function V9(e,t,n){for(var r=(e.mode&1)!==0;Y!==null;){var i=Y,o=i.child;if(i.tag===22&&r){var s=i.memoizedState!==null||Ml;if(!s){var l=i.alternate,c=l!==null&&l.memoizedState!==null||dt;l=Ml;var u=dt;if(Ml=s,(dt=c)&&!u)for(Y=i;Y!==null;)s=Y,c=s.child,s.tag===22&&s.memoizedState!==null?K2(i):c!==null?(c.return=s,Y=c):K2(i);for(;o!==null;)Y=o,V9(o),o=o.sibling;Y=i,Ml=l,dt=u}Q2(e)}else i.subtreeFlags&8772&&o!==null?(o.return=i,Y=o):Q2(e)}}function Q2(e){for(;Y!==null;){var t=Y;if(t.flags&8772){var n=t.alternate;try{if(t.flags&8772)switch(t.tag){case 0:case 11:case 15:dt||qu(5,t);break;case 1:var r=t.stateNode;if(t.flags&4&&!dt)if(n===null)r.componentDidMount();else{var i=t.elementType===t.type?n.memoizedProps:vn(t.type,n.memoizedProps);r.componentDidUpdate(i,n.memoizedState,r.__reactInternalSnapshotBeforeUpdate)}var o=t.updateQueue;o!==null&&N2(t,o,r);break;case 3:var s=t.updateQueue;if(s!==null){if(n=null,t.child!==null)switch(t.child.tag){case 5:n=t.child.stateNode;break;case 1:n=t.child.stateNode}N2(t,s,n)}break;case 5:var l=t.stateNode;if(n===null&&t.flags&4){n=l;var c=t.memoizedProps;switch(t.type){case"button":case"input":case"select":case"textarea":c.autoFocus&&n.focus();break;case"img":c.src&&(n.src=c.src)}}break;case 6:break;case 4:break;case 12:break;case 13:if(t.memoizedState===null){var u=t.alternate;if(u!==null){var d=u.memoizedState;if(d!==null){var p=d.dehydrated;p!==null&&ja(p)}}}break;case 19:case 17:case 21:case 22:case 23:case 25:break;default:throw Error(q(163))}dt||t.flags&512&&H0(t)}catch(g){Ie(t,t.return,g)}}if(t===e){Y=null;break}if(n=t.sibling,n!==null){n.return=t.return,Y=n;break}Y=t.return}}function G2(e){for(;Y!==null;){var t=Y;if(t===e){Y=null;break}var n=t.sibling;if(n!==null){n.return=t.return,Y=n;break}Y=t.return}}function K2(e){for(;Y!==null;){var t=Y;try{switch(t.tag){case 0:case 11:case 15:var n=t.return;try{qu(4,t)}catch(c){Ie(t,n,c)}break;case 1:var r=t.stateNode;if(typeof r.componentDidMount=="function"){var i=t.return;try{r.componentDidMount()}catch(c){Ie(t,i,c)}}var o=t.return;try{H0(t)}catch(c){Ie(t,o,c)}break;case 5:var s=t.return;try{H0(t)}catch(c){Ie(t,s,c)}}}catch(c){Ie(t,t.return,c)}if(t===e){Y=null;break}var l=t.sibling;if(l!==null){l.return=t.return,Y=l;break}Y=t.return}}var L7=Math.ceil,cu=pr.ReactCurrentDispatcher,Lh=pr.ReactCurrentOwner,ln=pr.ReactCurrentBatchConfig,me=0,Je=null,Ue=null,ot=0,It=0,mo=Jr(0),qe=0,Ma=null,Li=0,Zu=0,$h=0,sa=null,Ct=null,_h=0,Mo=1/0,tr=null,uu=!1,Q0=null,Dr=null,Tl=!1,Fr=null,du=0,aa=0,G0=null,Fc=-1,Oc=0;function mt(){return me&6?Be():Fc!==-1?Fc:Fc=Be()}function Br(e){return e.mode&1?me&2&&ot!==0?ot&-ot:u7.transition!==null?(Oc===0&&(Oc=S4()),Oc):(e=be,e!==0||(e=window.event,e=e===void 0?16:P4(e.type)),e):1}function jn(e,t,n,r){if(50<aa)throw aa=0,G0=null,Error(q(185));nl(e,n,r),(!(me&2)||e!==Je)&&(e===Je&&(!(me&2)&&(Zu|=n),qe===4&&Lr(e,ot)),_t(e,r),n===1&&me===0&&!(t.mode&1)&&(Mo=Be()+500,Wu&&ei()))}function _t(e,t){var n=e.callbackNode;ux(e,t);var r=Qc(e,e===Je?ot:0);if(r===0)n!==null&&o2(n),e.callbackNode=null,e.callbackPriority=0;else if(t=r&-r,e.callbackPriority!==t){if(n!=null&&o2(n),t===1)e.tag===0?c7(Y2.bind(null,e)):X4(Y2.bind(null,e)),o7(function(){!(me&6)&&ei()}),n=null;else{switch(L4(r)){case 1:n=th;break;case 4:n=j4;break;case 16:n=Zc;break;case 536870912:n=E4;break;default:n=Zc}n=K9(n,W9.bind(null,e))}e.callbackPriority=t,e.callbackNode=n}}function W9(e,t){if(Fc=-1,Oc=0,me&6)throw Error(q(327));var n=e.callbackNode;if(ko()&&e.callbackNode!==n)return null;var r=Qc(e,e===Je?ot:0);if(r===0)return null;if(r&30||r&e.expiredLanes||t)t=fu(e,r);else{t=r;var i=me;me|=2;var o=H9();(Je!==e||ot!==t)&&(tr=null,Mo=Be()+500,xi(e,t));do try{F7();break}catch(l){U9(e,l)}while(!0);ph(),cu.current=o,me=i,Ue!==null?t=0:(Je=null,ot=0,t=qe)}if(t!==0){if(t===2&&(i=C0(e),i!==0&&(r=i,t=K0(e,i))),t===1)throw n=Ma,xi(e,0),Lr(e,r),_t(e,Be()),n;if(t===6)Lr(e,r);else{if(i=e.current.alternate,!(r&30)&&!$7(i)&&(t=fu(e,r),t===2&&(o=C0(e),o!==0&&(r=o,t=K0(e,o))),t===1))throw n=Ma,xi(e,0),Lr(e,r),_t(e,Be()),n;switch(e.finishedWork=i,e.finishedLanes=r,t){case 0:case 1:throw Error(q(345));case 2:ai(e,Ct,tr);break;case 3:if(Lr(e,r),(r&130023424)===r&&(t=_h+500-Be(),10<t)){if(Qc(e,0)!==0)break;if(i=e.suspendedLanes,(i&r)!==r){mt(),e.pingedLanes|=e.suspendedLanes&i;break}e.timeoutHandle=F0(ai.bind(null,e,Ct,tr),t);break}ai(e,Ct,tr);break;case 4:if(Lr(e,r),(r&4194240)===r)break;for(t=e.eventTimes,i=-1;0<r;){var s=31-kn(r);o=1<<s,s=t[s],s>i&&(i=s),r&=~o}if(r=i,r=Be()-r,r=(120>r?120:480>r?480:1080>r?1080:1920>r?1920:3e3>r?3e3:4320>r?4320:1960*L7(r/1960))-r,10<r){e.timeoutHandle=F0(ai.bind(null,e,Ct,tr),r);break}ai(e,Ct,tr);break;case 5:ai(e,Ct,tr);break;default:throw Error(q(329))}}}return _t(e,Be()),e.callbackNode===n?W9.bind(null,e):null}function K0(e,t){var n=sa;return e.current.memoizedState.isDehydrated&&(xi(e,t).flags|=256),e=fu(e,t),e!==2&&(t=Ct,Ct=n,t!==null&&Y0(t)),e}function Y0(e){Ct===null?Ct=e:Ct.push.apply(Ct,e)}function $7(e){for(var t=e;;){if(t.flags&16384){var n=t.updateQueue;if(n!==null&&(n=n.stores,n!==null))for(var r=0;r<n.length;r++){var i=n[r],o=i.getSnapshot;i=i.value;try{if(!Ln(o(),i))return!1}catch{return!1}}}if(n=t.child,t.subtreeFlags&16384&&n!==null)n.return=t,t=n;else{if(t===e)break;for(;t.sibling===null;){if(t.return===null||t.return===e)return!0;t=t.return}t.sibling.return=t.return,t=t.sibling}}return!0}function Lr(e,t){for(t&=~$h,t&=~Zu,e.suspendedLanes|=t,e.pingedLanes&=~t,e=e.expirationTimes;0<t;){var n=31-kn(t),r=1<<n;e[n]=-1,t&=~r}}function Y2(e){if(me&6)throw Error(q(327));ko();var t=Qc(e,0);if(!(t&1))return _t(e,Be()),null;var n=fu(e,t);if(e.tag!==0&&n===2){var r=C0(e);r!==0&&(t=r,n=K0(e,r))}if(n===1)throw n=Ma,xi(e,0),Lr(e,t),_t(e,Be()),n;if(n===6)throw Error(q(345));return e.finishedWork=e.current.alternate,e.finishedLanes=t,ai(e,Ct,tr),_t(e,Be()),null}function Fh(e,t){var n=me;me|=1;try{return e(t)}finally{me=n,me===0&&(Mo=Be()+500,Wu&&ei())}}function $i(e){Fr!==null&&Fr.tag===0&&!(me&6)&&ko();var t=me;me|=1;var n=ln.transition,r=be;try{if(ln.transition=null,be=1,e)return e()}finally{be=r,ln.transition=n,me=t,!(me&6)&&ei()}}function Oh(){It=mo.current,Oe(mo)}function xi(e,t){e.finishedWork=null,e.finishedLanes=0;var n=e.timeoutHandle;if(n!==-1&&(e.timeoutHandle=-1,i7(n)),Ue!==null)for(n=Ue.return;n!==null;){var r=n;switch(dh(r),r.tag){case 1:r=r.type.childContextTypes,r!=null&&Jc();break;case 3:Po(),Oe(Lt),Oe(ft),wh();break;case 5:yh(r);break;case 4:Po();break;case 13:Oe(Re);break;case 19:Oe(Re);break;case 10:mh(r.type._context);break;case 22:case 23:Oh()}n=n.return}if(Je=e,Ue=e=Vr(e.current,null),ot=It=t,qe=0,Ma=null,$h=Zu=Li=0,Ct=sa=null,fi!==null){for(t=0;t<fi.length;t++)if(n=fi[t],r=n.interleaved,r!==null){n.interleaved=null;var i=r.next,o=n.pending;if(o!==null){var s=o.next;o.next=i,r.next=s}n.pending=r}fi=null}return e}function U9(e,t){do{var n=Ue;try{if(ph(),Lc.current=lu,au){for(var r=Te.memoizedState;r!==null;){var i=r.queue;i!==null&&(i.pending=null),r=r.next}au=!1}if(Si=0,Ge=He=Te=null,ia=!1,Na=0,Lh.current=null,n===null||n.return===null){qe=1,Ma=t,Ue=null;break}e:{var o=e,s=n.return,l=n,c=t;if(t=ot,l.flags|=32768,c!==null&&typeof c=="object"&&typeof c.then=="function"){var u=c,d=l,p=d.tag;if(!(d.mode&1)&&(p===0||p===11||p===15)){var g=d.alternate;g?(d.updateQueue=g.updateQueue,d.memoizedState=g.memoizedState,d.lanes=g.lanes):(d.updateQueue=null,d.memoizedState=null)}var w=I2(s);if(w!==null){w.flags&=-257,z2(w,s,l,o,t),w.mode&1&&A2(o,u,t),t=w,c=u;var y=t.updateQueue;if(y===null){var x=new Set;x.add(c),t.updateQueue=x}else y.add(c);break e}else{if(!(t&1)){A2(o,u,t),Nh();break e}c=Error(q(426))}}else if(Ne&&l.mode&1){var C=I2(s);if(C!==null){!(C.flags&65536)&&(C.flags|=256),z2(C,s,l,o,t),fh(Ro(c,l));break e}}o=c=Ro(c,l),qe!==4&&(qe=2),sa===null?sa=[o]:sa.push(o),o=s;do{switch(o.tag){case 3:o.flags|=65536,t&=-t,o.lanes|=t;var m=L9(o,c,t);O2(o,m);break e;case 1:l=c;var v=o.type,h=o.stateNode;if(!(o.flags&128)&&(typeof v.getDerivedStateFromError=="function"||h!==null&&typeof h.componentDidCatch=="function"&&(Dr===null||!Dr.has(h)))){o.flags|=65536,t&=-t,o.lanes|=t;var b=$9(o,l,t);O2(o,b);break e}}o=o.return}while(o!==null)}Z9(n)}catch(j){t=j,Ue===n&&n!==null&&(Ue=n=n.return);continue}break}while(!0)}function H9(){var e=cu.current;return cu.current=lu,e===null?lu:e}function Nh(){(qe===0||qe===3||qe===2)&&(qe=4),Je===null||!(Li&268435455)&&!(Zu&268435455)||Lr(Je,ot)}function fu(e,t){var n=me;me|=2;var r=H9();(Je!==e||ot!==t)&&(tr=null,xi(e,t));do try{_7();break}catch(i){U9(e,i)}while(!0);if(ph(),me=n,cu.current=r,Ue!==null)throw Error(q(261));return Je=null,ot=0,qe}function _7(){for(;Ue!==null;)q9(Ue)}function F7(){for(;Ue!==null&&!tx();)q9(Ue)}function q9(e){var t=G9(e.alternate,e,It);e.memoizedProps=e.pendingProps,t===null?Z9(e):Ue=t,Lh.current=null}function Z9(e){var t=e;do{var n=t.alternate;if(e=t.return,t.flags&32768){if(n=k7(n,t),n!==null){n.flags&=32767,Ue=n;return}if(e!==null)e.flags|=32768,e.subtreeFlags=0,e.deletions=null;else{qe=6,Ue=null;return}}else if(n=C7(n,t,It),n!==null){Ue=n;return}if(t=t.sibling,t!==null){Ue=t;return}Ue=t=e}while(t!==null);qe===0&&(qe=5)}function ai(e,t,n){var r=be,i=ln.transition;try{ln.transition=null,be=1,O7(e,t,n,r)}finally{ln.transition=i,be=r}return null}function O7(e,t,n,r){do ko();while(Fr!==null);if(me&6)throw Error(q(327));n=e.finishedWork;var i=e.finishedLanes;if(n===null)return null;if(e.finishedWork=null,e.finishedLanes=0,n===e.current)throw Error(q(177));e.callbackNode=null,e.callbackPriority=0;var o=n.lanes|n.childLanes;if(dx(e,o),e===Je&&(Ue=Je=null,ot=0),!(n.subtreeFlags&2064)&&!(n.flags&2064)||Tl||(Tl=!0,K9(Zc,function(){return ko(),null})),o=(n.flags&15990)!==0,n.subtreeFlags&15990||o){o=ln.transition,ln.transition=null;var s=be;be=1;var l=me;me|=4,Lh.current=null,E7(e,n),B9(n,e),Yx($0),Gc=!!L0,$0=L0=null,e.current=n,S7(n),nx(),me=l,be=s,ln.transition=o}else e.current=n;if(Tl&&(Tl=!1,Fr=e,du=i),o=e.pendingLanes,o===0&&(Dr=null),ox(n.stateNode),_t(e,Be()),t!==null)for(r=e.onRecoverableError,n=0;n<t.length;n++)i=t[n],r(i.value,{componentStack:i.stack,digest:i.digest});if(uu)throw uu=!1,e=Q0,Q0=null,e;return du&1&&e.tag!==0&&ko(),o=e.pendingLanes,o&1?e===G0?aa++:(aa=0,G0=e):aa=0,ei(),null}function ko(){if(Fr!==null){var e=L4(du),t=ln.transition,n=be;try{if(ln.transition=null,be=16>e?16:e,Fr===null)var r=!1;else{if(e=Fr,Fr=null,du=0,me&6)throw Error(q(331));var i=me;for(me|=4,Y=e.current;Y!==null;){var o=Y,s=o.child;if(Y.flags&16){var l=o.deletions;if(l!==null){for(var c=0;c<l.length;c++){var u=l[c];for(Y=u;Y!==null;){var d=Y;switch(d.tag){case 0:case 11:case 15:oa(8,d,o)}var p=d.child;if(p!==null)p.return=d,Y=p;else for(;Y!==null;){d=Y;var g=d.sibling,w=d.return;if(I9(d),d===u){Y=null;break}if(g!==null){g.return=w,Y=g;break}Y=w}}}var y=o.alternate;if(y!==null){var x=y.child;if(x!==null){y.child=null;do{var C=x.sibling;x.sibling=null,x=C}while(x!==null)}}Y=o}}if(o.subtreeFlags&2064&&s!==null)s.return=o,Y=s;else e:for(;Y!==null;){if(o=Y,o.flags&2048)switch(o.tag){case 0:case 11:case 15:oa(9,o,o.return)}var m=o.sibling;if(m!==null){m.return=o.return,Y=m;break e}Y=o.return}}var v=e.current;for(Y=v;Y!==null;){s=Y;var h=s.child;if(s.subtreeFlags&2064&&h!==null)h.return=s,Y=h;else e:for(s=v;Y!==null;){if(l=Y,l.flags&2048)try{switch(l.tag){case 0:case 11:case 15:qu(9,l)}}catch(j){Ie(l,l.return,j)}if(l===s){Y=null;break e}var b=l.sibling;if(b!==null){b.return=l.return,Y=b;break e}Y=l.return}}if(me=i,ei(),Vn&&typeof Vn.onPostCommitFiberRoot=="function")try{Vn.onPostCommitFiberRoot(Iu,e)}catch{}r=!0}return r}finally{be=n,ln.transition=t}}return!1}function X2(e,t,n){t=Ro(n,t),t=L9(e,t,1),e=zr(e,t,1),t=mt(),e!==null&&(nl(e,1,t),_t(e,t))}function Ie(e,t,n){if(e.tag===3)X2(e,e,n);else for(;t!==null;){if(t.tag===3){X2(t,e,n);break}else if(t.tag===1){var r=t.stateNode;if(typeof t.type.getDerivedStateFromError=="function"||typeof r.componentDidCatch=="function"&&(Dr===null||!Dr.has(r))){e=Ro(n,e),e=$9(t,e,1),t=zr(t,e,1),e=mt(),t!==null&&(nl(t,1,e),_t(t,e));break}}t=t.return}}function N7(e,t,n){var r=e.pingCache;r!==null&&r.delete(t),t=mt(),e.pingedLanes|=e.suspendedLanes&n,Je===e&&(ot&n)===n&&(qe===4||qe===3&&(ot&130023424)===ot&&500>Be()-_h?xi(e,0):$h|=n),_t(e,t)}function Q9(e,t){t===0&&(e.mode&1?(t=Sl,Sl<<=1,!(Sl&130023424)&&(Sl=4194304)):t=1);var n=mt();e=dr(e,t),e!==null&&(nl(e,t,n),_t(e,n))}function P7(e){var t=e.memoizedState,n=0;t!==null&&(n=t.retryLane),Q9(e,n)}function R7(e,t){var n=0;switch(e.tag){case 13:var r=e.stateNode,i=e.memoizedState;i!==null&&(n=i.retryLane);break;case 19:r=e.stateNode;break;default:throw Error(q(314))}r!==null&&r.delete(t),Q9(e,n)}var G9;G9=function(e,t,n){if(e!==null)if(e.memoizedProps!==t.pendingProps||Lt.current)jt=!0;else{if(!(e.lanes&n)&&!(t.flags&128))return jt=!1,b7(e,t,n);jt=!!(e.flags&131072)}else jt=!1,Ne&&t.flags&1048576&&J4(t,nu,t.index);switch(t.lanes=0,t.tag){case 2:var r=t.type;_c(e,t),e=t.pendingProps;var i=Fo(t,ft.current);Co(t,n),i=Ch(null,t,r,e,i,n);var o=kh();return t.flags|=1,typeof i=="object"&&i!==null&&typeof i.render=="function"&&i.$$typeof===void 0?(t.tag=1,t.memoizedState=null,t.updateQueue=null,$t(r)?(o=!0,eu(t)):o=!1,t.memoizedState=i.state!==null&&i.state!==void 0?i.state:null,vh(t),i.updater=Hu,t.stateNode=i,i._reactInternals=t,A0(t,r,e,n),t=D0(null,t,r,!0,o,n)):(t.tag=0,Ne&&o&&uh(t),ht(null,t,i,n),t=t.child),t;case 16:r=t.elementType;e:{switch(_c(e,t),e=t.pendingProps,i=r._init,r=i(r._payload),t.type=r,i=t.tag=T7(r),e=vn(r,e),i){case 0:t=z0(null,t,r,e,n);break e;case 1:t=V2(null,t,r,e,n);break e;case 11:t=D2(null,t,r,e,n);break e;case 14:t=B2(null,t,r,vn(r.type,e),n);break e}throw Error(q(306,r,""))}return t;case 0:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vn(r,i),z0(e,t,r,i,n);case 1:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vn(r,i),V2(e,t,r,i,n);case 3:e:{if(N9(t),e===null)throw Error(q(387));r=t.pendingProps,o=t.memoizedState,i=o.element,o9(e,t),ou(t,r,null,n);var s=t.memoizedState;if(r=s.element,o.isDehydrated)if(o={element:r,isDehydrated:!1,cache:s.cache,pendingSuspenseBoundaries:s.pendingSuspenseBoundaries,transitions:s.transitions},t.updateQueue.baseState=o,t.memoizedState=o,t.flags&256){i=Ro(Error(q(423)),t),t=W2(e,t,r,n,i);break e}else if(r!==i){i=Ro(Error(q(424)),t),t=W2(e,t,r,n,i);break e}else for(Dt=Ir(t.stateNode.containerInfo.firstChild),Wt=t,Ne=!0,wn=null,n=r9(t,null,r,n),t.child=n;n;)n.flags=n.flags&-3|4096,n=n.sibling;else{if(Oo(),r===i){t=fr(e,t,n);break e}ht(e,t,r,n)}t=t.child}return t;case 5:return s9(t),e===null&&R0(t),r=t.type,i=t.pendingProps,o=e!==null?e.memoizedProps:null,s=i.children,_0(r,i)?s=null:o!==null&&_0(r,o)&&(t.flags|=32),O9(e,t),ht(e,t,s,n),t.child;case 6:return e===null&&R0(t),null;case 13:return P9(e,t,n);case 4:return xh(t,t.stateNode.containerInfo),r=t.pendingProps,e===null?t.child=No(t,null,r,n):ht(e,t,r,n),t.child;case 11:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vn(r,i),D2(e,t,r,i,n);case 7:return ht(e,t,t.pendingProps,n),t.child;case 8:return ht(e,t,t.pendingProps.children,n),t.child;case 12:return ht(e,t,t.pendingProps.children,n),t.child;case 10:e:{if(r=t.type._context,i=t.pendingProps,o=t.memoizedProps,s=i.value,Se(ru,r._currentValue),r._currentValue=s,o!==null)if(Ln(o.value,s)){if(o.children===i.children&&!Lt.current){t=fr(e,t,n);break e}}else for(o=t.child,o!==null&&(o.return=t);o!==null;){var l=o.dependencies;if(l!==null){s=o.child;for(var c=l.firstContext;c!==null;){if(c.context===r){if(o.tag===1){c=ar(-1,n&-n),c.tag=2;var u=o.updateQueue;if(u!==null){u=u.shared;var d=u.pending;d===null?c.next=c:(c.next=d.next,d.next=c),u.pending=c}}o.lanes|=n,c=o.alternate,c!==null&&(c.lanes|=n),M0(o.return,n,t),l.lanes|=n;break}c=c.next}}else if(o.tag===10)s=o.type===t.type?null:o.child;else if(o.tag===18){if(s=o.return,s===null)throw Error(q(341));s.lanes|=n,l=s.alternate,l!==null&&(l.lanes|=n),M0(s,n,t),s=o.sibling}else s=o.child;if(s!==null)s.return=o;else for(s=o;s!==null;){if(s===t){s=null;break}if(o=s.sibling,o!==null){o.return=s.return,s=o;break}s=s.return}o=s}ht(e,t,i.children,n),t=t.child}return t;case 9:return i=t.type,r=t.pendingProps.children,Co(t,n),i=un(i),r=r(i),t.flags|=1,ht(e,t,r,n),t.child;case 14:return r=t.type,i=vn(r,t.pendingProps),i=vn(r.type,i),B2(e,t,r,i,n);case 15:return _9(e,t,t.type,t.pendingProps,n);case 17:return r=t.type,i=t.pendingProps,i=t.elementType===r?i:vn(r,i),_c(e,t),t.tag=1,$t(r)?(e=!0,eu(t)):e=!1,Co(t,n),S9(t,r,i),A0(t,r,i,n),D0(null,t,r,!0,e,n);case 19:return R9(e,t,n);case 22:return F9(e,t,n)}throw Error(q(156,t.tag))};function K9(e,t){return k4(e,t)}function M7(e,t,n,r){this.tag=e,this.key=n,this.sibling=this.child=this.return=this.stateNode=this.type=this.elementType=null,this.index=0,this.ref=null,this.pendingProps=t,this.dependencies=this.memoizedState=this.updateQueue=this.memoizedProps=null,this.mode=r,this.subtreeFlags=this.flags=0,this.deletions=null,this.childLanes=this.lanes=0,this.alternate=null}function an(e,t,n,r){return new M7(e,t,n,r)}function Ph(e){return e=e.prototype,!(!e||!e.isReactComponent)}function T7(e){if(typeof e=="function")return Ph(e)?1:0;if(e!=null){if(e=e.$$typeof,e===X1)return 11;if(e===J1)return 14}return 2}function Vr(e,t){var n=e.alternate;return n===null?(n=an(e.tag,t,e.key,e.mode),n.elementType=e.elementType,n.type=e.type,n.stateNode=e.stateNode,n.alternate=e,e.alternate=n):(n.pendingProps=t,n.type=e.type,n.flags=0,n.subtreeFlags=0,n.deletions=null),n.flags=e.flags&14680064,n.childLanes=e.childLanes,n.lanes=e.lanes,n.child=e.child,n.memoizedProps=e.memoizedProps,n.memoizedState=e.memoizedState,n.updateQueue=e.updateQueue,t=e.dependencies,n.dependencies=t===null?null:{lanes:t.lanes,firstContext:t.firstContext},n.sibling=e.sibling,n.index=e.index,n.ref=e.ref,n}function Nc(e,t,n,r,i,o){var s=2;if(r=e,typeof e=="function")Ph(e)&&(s=1);else if(typeof e=="string")s=5;else e:switch(e){case io:return yi(n.children,i,o,t);case Y1:s=8,i|=8;break;case a0:return e=an(12,n,t,i|2),e.elementType=a0,e.lanes=o,e;case l0:return e=an(13,n,t,i),e.elementType=l0,e.lanes=o,e;case c0:return e=an(19,n,t,i),e.elementType=c0,e.lanes=o,e;case s4:return Qu(n,i,o,t);default:if(typeof e=="object"&&e!==null)switch(e.$$typeof){case i4:s=10;break e;case o4:s=9;break e;case X1:s=11;break e;case J1:s=14;break e;case jr:s=16,r=null;break e}throw Error(q(130,e==null?e:typeof e,""))}return t=an(s,n,t,i),t.elementType=e,t.type=r,t.lanes=o,t}function yi(e,t,n,r){return e=an(7,e,r,t),e.lanes=n,e}function Qu(e,t,n,r){return e=an(22,e,r,t),e.elementType=s4,e.lanes=n,e.stateNode={isHidden:!1},e}function cf(e,t,n){return e=an(6,e,null,t),e.lanes=n,e}function uf(e,t,n){return t=an(4,e.children!==null?e.children:[],e.key,t),t.lanes=n,t.stateNode={containerInfo:e.containerInfo,pendingChildren:null,implementation:e.implementation},t}function A7(e,t,n,r,i){this.tag=t,this.containerInfo=e,this.finishedWork=this.pingCache=this.current=this.pendingChildren=null,this.timeoutHandle=-1,this.callbackNode=this.pendingContext=this.context=null,this.callbackPriority=0,this.eventTimes=Wd(0),this.expirationTimes=Wd(-1),this.entangledLanes=this.finishedLanes=this.mutableReadLanes=this.expiredLanes=this.pingedLanes=this.suspendedLanes=this.pendingLanes=0,this.entanglements=Wd(0),this.identifierPrefix=r,this.onRecoverableError=i,this.mutableSourceEagerHydrationData=null}function Rh(e,t,n,r,i,o,s,l,c){return e=new A7(e,t,n,l,c),t===1?(t=1,o===!0&&(t|=8)):t=0,o=an(3,null,null,t),e.current=o,o.stateNode=e,o.memoizedState={element:r,isDehydrated:n,cache:null,transitions:null,pendingSuspenseBoundaries:null},vh(o),e}function I7(e,t,n){var r=3<arguments.length&&arguments[3]!==void 0?arguments[3]:null;return{$$typeof:ro,key:r==null?null:""+r,children:e,containerInfo:t,implementation:n}}function Y9(e){if(!e)return Hr;e=e._reactInternals;e:{if(Ti(e)!==e||e.tag!==1)throw Error(q(170));var t=e;do{switch(t.tag){case 3:t=t.stateNode.context;break e;case 1:if($t(t.type)){t=t.stateNode.__reactInternalMemoizedMergedChildContext;break e}}t=t.return}while(t!==null);throw Error(q(171))}if(e.tag===1){var n=e.type;if($t(n))return Y4(e,n,t)}return t}function X9(e,t,n,r,i,o,s,l,c){return e=Rh(n,r,!0,e,i,o,s,l,c),e.context=Y9(null),n=e.current,r=mt(),i=Br(n),o=ar(r,i),o.callback=t??null,zr(n,o,i),e.current.lanes=i,nl(e,i,r),_t(e,r),e}function Gu(e,t,n,r){var i=t.current,o=mt(),s=Br(i);return n=Y9(n),t.context===null?t.context=n:t.pendingContext=n,t=ar(o,s),t.payload={element:e},r=r===void 0?null:r,r!==null&&(t.callback=r),e=zr(i,t,s),e!==null&&(jn(e,i,s,o),Sc(e,i,s)),s}function hu(e){if(e=e.current,!e.child)return null;switch(e.child.tag){case 5:return e.child.stateNode;default:return e.child.stateNode}}function J2(e,t){if(e=e.memoizedState,e!==null&&e.dehydrated!==null){var n=e.retryLane;e.retryLane=n!==0&&n<t?n:t}}function Mh(e,t){J2(e,t),(e=e.alternate)&&J2(e,t)}function z7(){return null}var J9=typeof reportError=="function"?reportError:function(e){console.error(e)};function Th(e){this._internalRoot=e}Ku.prototype.render=Th.prototype.render=function(e){var t=this._internalRoot;if(t===null)throw Error(q(409));Gu(e,t,null,null)};Ku.prototype.unmount=Th.prototype.unmount=function(){var e=this._internalRoot;if(e!==null){this._internalRoot=null;var t=e.containerInfo;$i(function(){Gu(null,e,null,null)}),t[ur]=null}};function Ku(e){this._internalRoot=e}Ku.prototype.unstable_scheduleHydration=function(e){if(e){var t=F4();e={blockedOn:null,target:e,priority:t};for(var n=0;n<Sr.length&&t!==0&&t<Sr[n].priority;n++);Sr.splice(n,0,e),n===0&&N4(e)}};function Ah(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11)}function Yu(e){return!(!e||e.nodeType!==1&&e.nodeType!==9&&e.nodeType!==11&&(e.nodeType!==8||e.nodeValue!==" react-mount-point-unstable "))}function em(){}function D7(e,t,n,r,i){if(i){if(typeof r=="function"){var o=r;r=function(){var u=hu(s);o.call(u)}}var s=X9(t,r,e,0,null,!1,!1,"",em);return e._reactRootContainer=s,e[ur]=s.current,La(e.nodeType===8?e.parentNode:e),$i(),s}for(;i=e.lastChild;)e.removeChild(i);if(typeof r=="function"){var l=r;r=function(){var u=hu(c);l.call(u)}}var c=Rh(e,0,!1,null,null,!1,!1,"",em);return e._reactRootContainer=c,e[ur]=c.current,La(e.nodeType===8?e.parentNode:e),$i(function(){Gu(t,c,n,r)}),c}function Xu(e,t,n,r,i){var o=n._reactRootContainer;if(o){var s=o;if(typeof i=="function"){var l=i;i=function(){var c=hu(s);l.call(c)}}Gu(t,s,e,i)}else s=D7(n,t,e,i,r);return hu(s)}$4=function(e){switch(e.tag){case 3:var t=e.stateNode;if(t.current.memoizedState.isDehydrated){var n=Hs(t.pendingLanes);n!==0&&(nh(t,n|1),_t(t,Be()),!(me&6)&&(Mo=Be()+500,ei()))}break;case 13:$i(function(){var r=dr(e,1);if(r!==null){var i=mt();jn(r,e,1,i)}}),Mh(e,1)}};rh=function(e){if(e.tag===13){var t=dr(e,134217728);if(t!==null){var n=mt();jn(t,e,134217728,n)}Mh(e,134217728)}};_4=function(e){if(e.tag===13){var t=Br(e),n=dr(e,t);if(n!==null){var r=mt();jn(n,e,t,r)}Mh(e,t)}};F4=function(){return be};O4=function(e,t){var n=be;try{return be=e,t()}finally{be=n}};y0=function(e,t,n){switch(t){case"input":if(f0(e,n),t=n.name,n.type==="radio"&&t!=null){for(n=e;n.parentNode;)n=n.parentNode;for(n=n.querySelectorAll("input[name="+JSON.stringify(""+t)+'][type="radio"]'),t=0;t<n.length;t++){var r=n[t];if(r!==e&&r.form===e.form){var i=Vu(r);if(!i)throw Error(q(90));l4(r),f0(r,i)}}}break;case"textarea":u4(e,n);break;case"select":t=n.value,t!=null&&xo(e,!!n.multiple,t,!1)}};v4=Fh;x4=$i;var B7={usingClientEntryPoint:!1,Events:[il,lo,Vu,m4,g4,Fh]},vs={findFiberByHostInstance:di,bundleType:0,version:"18.3.1",rendererPackageName:"react-dom"},V7={bundleType:vs.bundleType,version:vs.version,rendererPackageName:vs.rendererPackageName,rendererConfig:vs.rendererConfig,overrideHookState:null,overrideHookStateDeletePath:null,overrideHookStateRenamePath:null,overrideProps:null,overridePropsDeletePath:null,overridePropsRenamePath:null,setErrorHandler:null,setSuspenseHandler:null,scheduleUpdate:null,currentDispatcherRef:pr.ReactCurrentDispatcher,findHostInstanceByFiber:function(e){return e=b4(e),e===null?null:e.stateNode},findFiberByHostInstance:vs.findFiberByHostInstance||z7,findHostInstancesForRefresh:null,scheduleRefresh:null,scheduleRoot:null,setRefreshHandler:null,getCurrentFiber:null,reconcilerVersion:"18.3.1-next-f1338f8080-20240426"};if(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__<"u"){var Al=__REACT_DEVTOOLS_GLOBAL_HOOK__;if(!Al.isDisabled&&Al.supportsFiber)try{Iu=Al.inject(V7),Vn=Al}catch{}}Zt.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=B7;Zt.createPortal=function(e,t){var n=2<arguments.length&&arguments[2]!==void 0?arguments[2]:null;if(!Ah(t))throw Error(q(200));return I7(e,t,null,n)};Zt.createRoot=function(e,t){if(!Ah(e))throw Error(q(299));var n=!1,r="",i=J9;return t!=null&&(t.unstable_strictMode===!0&&(n=!0),t.identifierPrefix!==void 0&&(r=t.identifierPrefix),t.onRecoverableError!==void 0&&(i=t.onRecoverableError)),t=Rh(e,1,!1,null,null,n,!1,r,i),e[ur]=t.current,La(e.nodeType===8?e.parentNode:e),new Th(t)};Zt.findDOMNode=function(e){if(e==null)return null;if(e.nodeType===1)return e;var t=e._reactInternals;if(t===void 0)throw typeof e.render=="function"?Error(q(188)):(e=Object.keys(e).join(","),Error(q(268,e)));return e=b4(t),e=e===null?null:e.stateNode,e};Zt.flushSync=function(e){return $i(e)};Zt.hydrate=function(e,t,n){if(!Yu(t))throw Error(q(200));return Xu(null,e,t,!0,n)};Zt.hydrateRoot=function(e,t,n){if(!Ah(e))throw Error(q(405));var r=n!=null&&n.hydratedSources||null,i=!1,o="",s=J9;if(n!=null&&(n.unstable_strictMode===!0&&(i=!0),n.identifierPrefix!==void 0&&(o=n.identifierPrefix),n.onRecoverableError!==void 0&&(s=n.onRecoverableError)),t=X9(t,null,e,1,n??null,i,!1,o,s),e[ur]=t.current,La(e),r)for(e=0;e<r.length;e++)n=r[e],i=n._getVersion,i=i(n._source),t.mutableSourceEagerHydrationData==null?t.mutableSourceEagerHydrationData=[n,i]:t.mutableSourceEagerHydrationData.push(n,i);return new Ku(t)};Zt.render=function(e,t,n){if(!Yu(t))throw Error(q(200));return Xu(null,e,t,!1,n)};Zt.unmountComponentAtNode=function(e){if(!Yu(e))throw Error(q(40));return e._reactRootContainer?($i(function(){Xu(null,null,e,!1,function(){e._reactRootContainer=null,e[ur]=null})}),!0):!1};Zt.unstable_batchedUpdates=Fh;Zt.unstable_renderSubtreeIntoContainer=function(e,t,n,r){if(!Yu(n))throw Error(q(200));if(e==null||e._reactInternals===void 0)throw Error(q(38));return Xu(e,t,n,!1,r)};Zt.version="18.3.1-next-f1338f8080-20240426";function e5(){if(!(typeof __REACT_DEVTOOLS_GLOBAL_HOOK__>"u"||typeof __REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE!="function"))try{__REACT_DEVTOOLS_GLOBAL_HOOK__.checkDCE(e5)}catch(e){console.error(e)}}e5(),e4.exports=Zt;var Xo=e4.exports;const W7=hr(Xo),U7=V3({__proto__:null,default:W7},[Xo]);var tm=Xo;o0.createRoot=tm.createRoot,o0.hydrateRoot=tm.hydrateRoot;/**
 * @remix-run/router v1.23.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Ta(){return Ta=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ta.apply(this,arguments)}var Or;(function(e){e.Pop="POP",e.Push="PUSH",e.Replace="REPLACE"})(Or||(Or={}));const nm="popstate";function H7(e){e===void 0&&(e={});function t(i,o){let{pathname:s="/",search:l="",hash:c=""}=Ai(i.location.hash.substr(1));return!s.startsWith("/")&&!s.startsWith(".")&&(s="/"+s),X0("",{pathname:s,search:l,hash:c},o.state&&o.state.usr||null,o.state&&o.state.key||"default")}function n(i,o){let s=i.document.querySelector("base"),l="";if(s&&s.getAttribute("href")){let c=i.location.href,u=c.indexOf("#");l=u===-1?c:c.slice(0,u)}return l+"#"+(typeof o=="string"?o:t5(o))}function r(i,o){Ih(i.pathname.charAt(0)==="/","relative pathnames are not supported in hash history.push("+JSON.stringify(o)+")")}return Z7(t,n,r,e)}function Ze(e,t){if(e===!1||e===null||typeof e>"u")throw new Error(t)}function Ih(e,t){if(!e){typeof console<"u"&&console.warn(t);try{throw new Error(t)}catch{}}}function q7(){return Math.random().toString(36).substr(2,8)}function rm(e,t){return{usr:e.state,key:e.key,idx:t}}function X0(e,t,n,r){return n===void 0&&(n=null),Ta({pathname:typeof e=="string"?e:e.pathname,search:"",hash:""},typeof t=="string"?Ai(t):t,{state:n,key:t&&t.key||r||q7()})}function t5(e){let{pathname:t="/",search:n="",hash:r=""}=e;return n&&n!=="?"&&(t+=n.charAt(0)==="?"?n:"?"+n),r&&r!=="#"&&(t+=r.charAt(0)==="#"?r:"#"+r),t}function Ai(e){let t={};if(e){let n=e.indexOf("#");n>=0&&(t.hash=e.substr(n),e=e.substr(0,n));let r=e.indexOf("?");r>=0&&(t.search=e.substr(r),e=e.substr(0,r)),e&&(t.pathname=e)}return t}function Z7(e,t,n,r){r===void 0&&(r={});let{window:i=document.defaultView,v5Compat:o=!1}=r,s=i.history,l=Or.Pop,c=null,u=d();u==null&&(u=0,s.replaceState(Ta({},s.state,{idx:u}),""));function d(){return(s.state||{idx:null}).idx}function p(){l=Or.Pop;let C=d(),m=C==null?null:C-u;u=C,c&&c({action:l,location:x.location,delta:m})}function g(C,m){l=Or.Push;let v=X0(x.location,C,m);n&&n(v,C),u=d()+1;let h=rm(v,u),b=x.createHref(v);try{s.pushState(h,"",b)}catch(j){if(j instanceof DOMException&&j.name==="DataCloneError")throw j;i.location.assign(b)}o&&c&&c({action:l,location:x.location,delta:1})}function w(C,m){l=Or.Replace;let v=X0(x.location,C,m);n&&n(v,C),u=d();let h=rm(v,u),b=x.createHref(v);s.replaceState(h,"",b),o&&c&&c({action:l,location:x.location,delta:0})}function y(C){let m=i.location.origin!=="null"?i.location.origin:i.location.href,v=typeof C=="string"?C:t5(C);return v=v.replace(/ $/,"%20"),Ze(m,"No window.location.(origin|href) available to create URL for href: "+v),new URL(v,m)}let x={get action(){return l},get location(){return e(i,s)},listen(C){if(c)throw new Error("A history only accepts one active listener");return i.addEventListener(nm,p),c=C,()=>{i.removeEventListener(nm,p),c=null}},createHref(C){return t(i,C)},createURL:y,encodeLocation(C){let m=y(C);return{pathname:m.pathname,search:m.search,hash:m.hash}},push:g,replace:w,go(C){return s.go(C)}};return x}var im;(function(e){e.data="data",e.deferred="deferred",e.redirect="redirect",e.error="error"})(im||(im={}));function Q7(e,t,n){return n===void 0&&(n="/"),G7(e,t,n)}function G7(e,t,n,r){let i=typeof t=="string"?Ai(t):t,o=i5(i.pathname||"/",n);if(o==null)return null;let s=n5(e);K7(s);let l=null;for(let c=0;l==null&&c<s.length;++c){let u=ly(o);l=oy(s[c],u)}return l}function n5(e,t,n,r){t===void 0&&(t=[]),n===void 0&&(n=[]),r===void 0&&(r="");let i=(o,s,l)=>{let c={relativePath:l===void 0?o.path||"":l,caseSensitive:o.caseSensitive===!0,childrenIndex:s,route:o};c.relativePath.startsWith("/")&&(Ze(c.relativePath.startsWith(r),'Absolute route path "'+c.relativePath+'" nested under path '+('"'+r+'" is not valid. An absolute child route path ')+"must start with the combined path of all its parent routes."),c.relativePath=c.relativePath.slice(r.length));let u=wi([r,c.relativePath]),d=n.concat(c);o.children&&o.children.length>0&&(Ze(o.index!==!0,"Index routes must not have child routes. Please remove "+('all child routes from route path "'+u+'".')),n5(o.children,t,d,u)),!(o.path==null&&!o.index)&&t.push({path:u,score:ry(u,o.index),routesMeta:d})};return e.forEach((o,s)=>{var l;if(o.path===""||!((l=o.path)!=null&&l.includes("?")))i(o,s);else for(let c of r5(o.path))i(o,s,c)}),t}function r5(e){let t=e.split("/");if(t.length===0)return[];let[n,...r]=t,i=n.endsWith("?"),o=n.replace(/\?$/,"");if(r.length===0)return i?[o,""]:[o];let s=r5(r.join("/")),l=[];return l.push(...s.map(c=>c===""?o:[o,c].join("/"))),i&&l.push(...s),l.map(c=>e.startsWith("/")&&c===""?"/":c)}function K7(e){e.sort((t,n)=>t.score!==n.score?n.score-t.score:iy(t.routesMeta.map(r=>r.childrenIndex),n.routesMeta.map(r=>r.childrenIndex)))}const Y7=/^:[\w-]+$/,X7=3,J7=2,ey=1,ty=10,ny=-2,om=e=>e==="*";function ry(e,t){let n=e.split("/"),r=n.length;return n.some(om)&&(r+=ny),t&&(r+=J7),n.filter(i=>!om(i)).reduce((i,o)=>i+(Y7.test(o)?X7:o===""?ey:ty),r)}function iy(e,t){return e.length===t.length&&e.slice(0,-1).every((r,i)=>r===t[i])?e[e.length-1]-t[t.length-1]:0}function oy(e,t,n){let{routesMeta:r}=e,i={},o="/",s=[];for(let l=0;l<r.length;++l){let c=r[l],u=l===r.length-1,d=o==="/"?t:t.slice(o.length)||"/",p=sy({path:c.relativePath,caseSensitive:c.caseSensitive,end:u},d),g=c.route;if(!p)return null;Object.assign(i,p.params),s.push({params:i,pathname:wi([o,p.pathname]),pathnameBase:py(wi([o,p.pathnameBase])),route:g}),p.pathnameBase!=="/"&&(o=wi([o,p.pathnameBase]))}return s}function sy(e,t){typeof e=="string"&&(e={path:e,caseSensitive:!1,end:!0});let[n,r]=ay(e.path,e.caseSensitive,e.end),i=t.match(n);if(!i)return null;let o=i[0],s=o.replace(/(.)\/+$/,"$1"),l=i.slice(1);return{params:r.reduce((u,d,p)=>{let{paramName:g,isOptional:w}=d;if(g==="*"){let x=l[p]||"";s=o.slice(0,o.length-x.length).replace(/(.)\/+$/,"$1")}const y=l[p];return w&&!y?u[g]=void 0:u[g]=(y||"").replace(/%2F/g,"/"),u},{}),pathname:o,pathnameBase:s,pattern:e}}function ay(e,t,n){t===void 0&&(t=!1),n===void 0&&(n=!0),Ih(e==="*"||!e.endsWith("*")||e.endsWith("/*"),'Route path "'+e+'" will be treated as if it were '+('"'+e.replace(/\*$/,"/*")+'" because the `*` character must ')+"always follow a `/` in the pattern. To get rid of this warning, "+('please change the route path to "'+e.replace(/\*$/,"/*")+'".'));let r=[],i="^"+e.replace(/\/*\*?$/,"").replace(/^\/*/,"/").replace(/[\\.*+^${}|()[\]]/g,"\\$&").replace(/\/:([\w-]+)(\?)?/g,(s,l,c)=>(r.push({paramName:l,isOptional:c!=null}),c?"/?([^\\/]+)?":"/([^\\/]+)"));return e.endsWith("*")?(r.push({paramName:"*"}),i+=e==="*"||e==="/*"?"(.*)$":"(?:\\/(.+)|\\/*)$"):n?i+="\\/*$":e!==""&&e!=="/"&&(i+="(?:(?=\\/|$))"),[new RegExp(i,t?void 0:"i"),r]}function ly(e){try{return e.split("/").map(t=>decodeURIComponent(t).replace(/\//g,"%2F")).join("/")}catch(t){return Ih(!1,'The URL path "'+e+'" could not be decoded because it is is a malformed URL segment. This is probably due to a bad percent '+("encoding ("+t+").")),e}}function i5(e,t){if(t==="/")return e;if(!e.toLowerCase().startsWith(t.toLowerCase()))return null;let n=t.endsWith("/")?t.length-1:t.length,r=e.charAt(n);return r&&r!=="/"?null:e.slice(n)||"/"}function cy(e,t){t===void 0&&(t="/");let{pathname:n,search:r="",hash:i=""}=typeof e=="string"?Ai(e):e;return{pathname:n?n.startsWith("/")?n:uy(n,t):t,search:my(r),hash:gy(i)}}function uy(e,t){let n=t.replace(/\/+$/,"").split("/");return e.split("/").forEach(i=>{i===".."?n.length>1&&n.pop():i!=="."&&n.push(i)}),n.length>1?n.join("/"):"/"}function df(e,t,n,r){return"Cannot include a '"+e+"' character in a manually specified "+("`to."+t+"` field ["+JSON.stringify(r)+"].  Please separate it out to the ")+("`to."+n+"` field. Alternatively you may provide the full path as ")+'a string in <Link to="..."> and the router will parse it for you.'}function dy(e){return e.filter((t,n)=>n===0||t.route.path&&t.route.path.length>0)}function fy(e,t){let n=dy(e);return t?n.map((r,i)=>i===n.length-1?r.pathname:r.pathnameBase):n.map(r=>r.pathnameBase)}function hy(e,t,n,r){r===void 0&&(r=!1);let i;typeof e=="string"?i=Ai(e):(i=Ta({},e),Ze(!i.pathname||!i.pathname.includes("?"),df("?","pathname","search",i)),Ze(!i.pathname||!i.pathname.includes("#"),df("#","pathname","hash",i)),Ze(!i.search||!i.search.includes("#"),df("#","search","hash",i)));let o=e===""||i.pathname==="",s=o?"/":i.pathname,l;if(s==null)l=n;else{let p=t.length-1;if(!r&&s.startsWith("..")){let g=s.split("/");for(;g[0]==="..";)g.shift(),p-=1;i.pathname=g.join("/")}l=p>=0?t[p]:"/"}let c=cy(i,l),u=s&&s!=="/"&&s.endsWith("/"),d=(o||s===".")&&n.endsWith("/");return!c.pathname.endsWith("/")&&(u||d)&&(c.pathname+="/"),c}const wi=e=>e.join("/").replace(/\/\/+/g,"/"),py=e=>e.replace(/\/+$/,"").replace(/^\/*/,"/"),my=e=>!e||e==="?"?"":e.startsWith("?")?e:"?"+e,gy=e=>!e||e==="#"?"":e.startsWith("#")?e:"#"+e;function vy(e){return e!=null&&typeof e.status=="number"&&typeof e.statusText=="string"&&typeof e.internal=="boolean"&&"data"in e}const o5=["post","put","patch","delete"];new Set(o5);const xy=["get",...o5];new Set(xy);/**
 * React Router v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */function Aa(){return Aa=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Aa.apply(this,arguments)}const zh=f.createContext(null),yy=f.createContext(null),Ju=f.createContext(null),ed=f.createContext(null),Ii=f.createContext({outlet:null,matches:[],isDataRoute:!1}),s5=f.createContext(null);function td(){return f.useContext(ed)!=null}function nd(){return td()||Ze(!1),f.useContext(ed).location}function a5(e){f.useContext(Ju).static||f.useLayoutEffect(e)}function ze(){let{isDataRoute:e}=f.useContext(Ii);return e?Ny():wy()}function wy(){td()||Ze(!1);let e=f.useContext(zh),{basename:t,future:n,navigator:r}=f.useContext(Ju),{matches:i}=f.useContext(Ii),{pathname:o}=nd(),s=JSON.stringify(fy(i,n.v7_relativeSplatPath)),l=f.useRef(!1);return a5(()=>{l.current=!0}),f.useCallback(function(u,d){if(d===void 0&&(d={}),!l.current)return;if(typeof u=="number"){r.go(u);return}let p=hy(u,JSON.parse(s),o,d.relative==="path");e==null&&t!=="/"&&(p.pathname=p.pathname==="/"?t:wi([t,p.pathname])),(d.replace?r.replace:r.push)(p,d.state,d)},[t,r,s,o,e])}function l5(){let{matches:e}=f.useContext(Ii),t=e[e.length-1];return t?t.params:{}}function by(e,t){return Cy(e,t)}function Cy(e,t,n,r){td()||Ze(!1);let{navigator:i,static:o}=f.useContext(Ju),{matches:s}=f.useContext(Ii),l=s[s.length-1],c=l?l.params:{};l&&l.pathname;let u=l?l.pathnameBase:"/";l&&l.route;let d=nd(),p;if(t){var g;let m=typeof t=="string"?Ai(t):t;u==="/"||(g=m.pathname)!=null&&g.startsWith(u)||Ze(!1),p=m}else p=d;let w=p.pathname||"/",y=w;if(u!=="/"){let m=u.replace(/^\//,"").split("/");y="/"+w.replace(/^\//,"").split("/").slice(m.length).join("/")}let x=Q7(e,{pathname:y}),C=Ly(x&&x.map(m=>Object.assign({},m,{params:Object.assign({},c,m.params),pathname:wi([u,i.encodeLocation?i.encodeLocation(m.pathname).pathname:m.pathname]),pathnameBase:m.pathnameBase==="/"?u:wi([u,i.encodeLocation?i.encodeLocation(m.pathnameBase).pathname:m.pathnameBase])})),s,n,r);return t&&C?f.createElement(ed.Provider,{value:{location:Aa({pathname:"/",search:"",hash:"",state:null,key:"default"},p),navigationType:Or.Pop}},C):C}function ky(){let e=Oy(),t=vy(e)?e.status+" "+e.statusText:e instanceof Error?e.message:JSON.stringify(e),n=e instanceof Error?e.stack:null,i={padding:"0.5rem",backgroundColor:"rgba(200,200,200, 0.5)"};return f.createElement(f.Fragment,null,f.createElement("h2",null,"Unexpected Application Error!"),f.createElement("h3",{style:{fontStyle:"italic"}},t),n?f.createElement("pre",{style:i},n):null,null)}const jy=f.createElement(ky,null);class Ey extends f.Component{constructor(t){super(t),this.state={location:t.location,revalidation:t.revalidation,error:t.error}}static getDerivedStateFromError(t){return{error:t}}static getDerivedStateFromProps(t,n){return n.location!==t.location||n.revalidation!=="idle"&&t.revalidation==="idle"?{error:t.error,location:t.location,revalidation:t.revalidation}:{error:t.error!==void 0?t.error:n.error,location:n.location,revalidation:t.revalidation||n.revalidation}}componentDidCatch(t,n){console.error("React Router caught the following error during render",t,n)}render(){return this.state.error!==void 0?f.createElement(Ii.Provider,{value:this.props.routeContext},f.createElement(s5.Provider,{value:this.state.error,children:this.props.component})):this.props.children}}function Sy(e){let{routeContext:t,match:n,children:r}=e,i=f.useContext(zh);return i&&i.static&&i.staticContext&&(n.route.errorElement||n.route.ErrorBoundary)&&(i.staticContext._deepestRenderedBoundaryId=n.route.id),f.createElement(Ii.Provider,{value:t},r)}function Ly(e,t,n,r){var i;if(t===void 0&&(t=[]),n===void 0&&(n=null),r===void 0&&(r=null),e==null){var o;if(!n)return null;if(n.errors)e=n.matches;else if((o=r)!=null&&o.v7_partialHydration&&t.length===0&&!n.initialized&&n.matches.length>0)e=n.matches;else return null}let s=e,l=(i=n)==null?void 0:i.errors;if(l!=null){let d=s.findIndex(p=>p.route.id&&(l==null?void 0:l[p.route.id])!==void 0);d>=0||Ze(!1),s=s.slice(0,Math.min(s.length,d+1))}let c=!1,u=-1;if(n&&r&&r.v7_partialHydration)for(let d=0;d<s.length;d++){let p=s[d];if((p.route.HydrateFallback||p.route.hydrateFallbackElement)&&(u=d),p.route.id){let{loaderData:g,errors:w}=n,y=p.route.loader&&g[p.route.id]===void 0&&(!w||w[p.route.id]===void 0);if(p.route.lazy||y){c=!0,u>=0?s=s.slice(0,u+1):s=[s[0]];break}}}return s.reduceRight((d,p,g)=>{let w,y=!1,x=null,C=null;n&&(w=l&&p.route.id?l[p.route.id]:void 0,x=p.route.errorElement||jy,c&&(u<0&&g===0?(Py("route-fallback"),y=!0,C=null):u===g&&(y=!0,C=p.route.hydrateFallbackElement||null)));let m=t.concat(s.slice(0,g+1)),v=()=>{let h;return w?h=x:y?h=C:p.route.Component?h=f.createElement(p.route.Component,null):p.route.element?h=p.route.element:h=d,f.createElement(Sy,{match:p,routeContext:{outlet:d,matches:m,isDataRoute:n!=null},children:h})};return n&&(p.route.ErrorBoundary||p.route.errorElement||g===0)?f.createElement(Ey,{location:n.location,revalidation:n.revalidation,component:x,error:w,children:v(),routeContext:{outlet:null,matches:m,isDataRoute:!0}}):v()},null)}var c5=function(e){return e.UseBlocker="useBlocker",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e}(c5||{}),u5=function(e){return e.UseBlocker="useBlocker",e.UseLoaderData="useLoaderData",e.UseActionData="useActionData",e.UseRouteError="useRouteError",e.UseNavigation="useNavigation",e.UseRouteLoaderData="useRouteLoaderData",e.UseMatches="useMatches",e.UseRevalidator="useRevalidator",e.UseNavigateStable="useNavigate",e.UseRouteId="useRouteId",e}(u5||{});function $y(e){let t=f.useContext(zh);return t||Ze(!1),t}function _y(e){let t=f.useContext(yy);return t||Ze(!1),t}function Fy(e){let t=f.useContext(Ii);return t||Ze(!1),t}function d5(e){let t=Fy(),n=t.matches[t.matches.length-1];return n.route.id||Ze(!1),n.route.id}function Oy(){var e;let t=f.useContext(s5),n=_y(),r=d5();return t!==void 0?t:(e=n.errors)==null?void 0:e[r]}function Ny(){let{router:e}=$y(c5.UseNavigateStable),t=d5(u5.UseNavigateStable),n=f.useRef(!1);return a5(()=>{n.current=!0}),f.useCallback(function(i,o){o===void 0&&(o={}),n.current&&(typeof i=="number"?e.navigate(i):e.navigate(i,Aa({fromRouteId:t},o)))},[e,t])}const sm={};function Py(e,t,n){sm[e]||(sm[e]=!0)}function Ry(e,t){e==null||e.v7_startTransition,e==null||e.v7_relativeSplatPath}function $e(e){Ze(!1)}function My(e){let{basename:t="/",children:n=null,location:r,navigationType:i=Or.Pop,navigator:o,static:s=!1,future:l}=e;td()&&Ze(!1);let c=t.replace(/^\/*/,"/"),u=f.useMemo(()=>({basename:c,navigator:o,static:s,future:Aa({v7_relativeSplatPath:!1},l)}),[c,l,o,s]);typeof r=="string"&&(r=Ai(r));let{pathname:d="/",search:p="",hash:g="",state:w=null,key:y="default"}=r,x=f.useMemo(()=>{let C=i5(d,c);return C==null?null:{location:{pathname:C,search:p,hash:g,state:w,key:y},navigationType:i}},[c,d,p,g,w,y,i]);return x==null?null:f.createElement(Ju.Provider,{value:u},f.createElement(ed.Provider,{children:n,value:x}))}function Ty(e){let{children:t,location:n}=e;return by(J0(t),n)}new Promise(()=>{});function J0(e,t){t===void 0&&(t=[]);let n=[];return f.Children.forEach(e,(r,i)=>{if(!f.isValidElement(r))return;let o=[...t,i];if(r.type===f.Fragment){n.push.apply(n,J0(r.props.children,o));return}r.type!==$e&&Ze(!1),!r.props.index||!r.props.children||Ze(!1);let s={id:r.props.id||o.join("-"),caseSensitive:r.props.caseSensitive,element:r.props.element,Component:r.props.Component,index:r.props.index,path:r.props.path,loader:r.props.loader,action:r.props.action,errorElement:r.props.errorElement,ErrorBoundary:r.props.ErrorBoundary,hasErrorBoundary:r.props.ErrorBoundary!=null||r.props.errorElement!=null,shouldRevalidate:r.props.shouldRevalidate,handle:r.props.handle,lazy:r.props.lazy};r.props.children&&(s.children=J0(r.props.children,o)),n.push(s)}),n}/**
 * React Router DOM v6.30.0
 *
 * Copyright (c) Remix Software Inc.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE.md file in the root directory of this source tree.
 *
 * @license MIT
 */const Ay="6";try{window.__reactRouterVersion=Ay}catch{}const Iy="startTransition",am=N8[Iy];function zy(e){let{basename:t,children:n,future:r,window:i}=e,o=f.useRef();o.current==null&&(o.current=H7({window:i,v5Compat:!0}));let s=o.current,[l,c]=f.useState({action:s.action,location:s.location}),{v7_startTransition:u}=r||{},d=f.useCallback(p=>{u&&am?am(()=>c(p)):c(p)},[c,u]);return f.useLayoutEffect(()=>s.listen(d),[s,d]),f.useEffect(()=>Ry(r),[r]),f.createElement(My,{basename:t,children:n,location:l.location,navigationType:l.action,navigator:s,future:r})}var lm;(function(e){e.UseScrollRestoration="useScrollRestoration",e.UseSubmit="useSubmit",e.UseSubmitFetcher="useSubmitFetcher",e.UseFetcher="useFetcher",e.useViewTransitionState="useViewTransitionState"})(lm||(lm={}));var cm;(function(e){e.UseFetcher="useFetcher",e.UseFetchers="useFetchers",e.UseScrollRestoration="useScrollRestoration"})(cm||(cm={}));const Jo=!!(typeof window<"u"&&typeof document<"u"&&window.document&&window.document.createElement);Jo&&document.addEventListener("touchstart",()=>{},!0);var pu=function(){return pu=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},pu.apply(this,arguments)};function rd(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(e!=null&&typeof Object.getOwnPropertySymbols=="function")for(var i=0,r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]]);return n}function $n(e,t,n,r){function i(o){return o instanceof n?o:new n(function(s){s(o)})}return new(n||(n=Promise))(function(o,s){function l(d){try{u(r.next(d))}catch(p){s(p)}}function c(d){try{u(r.throw(d))}catch(p){s(p)}}function u(d){d.done?o(d.value):i(d.value).then(l,c)}u((r=r.apply(e,t||[])).next())})}function Dy(e){var t=typeof Symbol=="function"&&Symbol.iterator,n=t&&e[t],r=0;if(n)return n.call(e);if(e&&typeof e.length=="number")return{next:function(){return e&&r>=e.length&&(e=void 0),{value:e&&e[r++],done:!e}}};throw new TypeError(t?"Object is not iterable.":"Symbol.iterator is not defined.")}function _i(e,t){var n=typeof Symbol=="function"&&e[Symbol.iterator];if(!n)return e;var r=n.call(e),i,o=[],s;try{for(;(t===void 0||t-- >0)&&!(i=r.next()).done;)o.push(i.value)}catch(l){s={error:l}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(s)throw s.error}}return o}function f5(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}const Rt="${label}不是一个有效的${type}",h5={locale:"zh-CH",common:{confirm:"确定",cancel:"取消",loading:"加载中",close:"关闭"},Calendar:{title:"日期选择",confirm:"确认",start:"开始",end:"结束",today:"今日",markItems:["一","二","三","四","五","六","日"],yearAndMonth:"${year}年${month}月"},Cascader:{placeholder:"请选择"},Dialog:{ok:"我知道了"},DatePicker:{tillNow:"至今"},ErrorBlock:{default:{title:"页面遇到一些小问题",description:"待会来试试"},busy:{title:"前方拥堵",description:"刷新试试"},disconnected:{title:"网络有点忙",description:"动动手指帮忙修复"},empty:{title:"没有找到你需要的东西",description:"找找其他的吧"}},Form:{required:"必填",optional:"选填",defaultValidateMessages:{default:"字段验证错误${label}",required:"请输入${label}",enum:"${label}必须是其中一个[${enum}]",whitespace:"${label}不能为空字符",date:{format:"${label}日期格式无效",parse:"${label}不能转换为日期",invalid:"${label}是一个无效日期"},types:{string:Rt,method:Rt,array:Rt,object:Rt,number:Rt,date:Rt,boolean:Rt,integer:Rt,float:Rt,regexp:Rt,email:Rt,url:Rt,hex:Rt},string:{len:"${label}须为${len}个字符",min:"${label}最少${min}个字符",max:"${label}最多${max}个字符",range:"${label}须在${min}-${max}字符之间"},number:{len:"${label}必须等于${len}",min:"${label}最小值为${min}",max:"${label}最大值为${max}",range:"${label}须在${min}-${max}之间"},array:{len:"须为${len}个${label}",min:"最少${min}个${label}",max:"最多${max}个${label}",range:"${label}数量须在${min}-${max}之间"},pattern:{mismatch:"${label}与模式不匹配${pattern}"}}},ImageUploader:{uploading:"上传中...",upload:"上传"},InfiniteScroll:{noMore:"没有更多了",failedToLoad:"加载失败",retry:"重新加载"},Input:{clear:"清除"},Mask:{name:"背景蒙层"},Modal:{ok:"我知道了"},PasscodeInput:{name:"密码输入框"},PullToRefresh:{pulling:"下拉刷新",canRelease:"释放立即刷新",complete:"刷新成功"},SearchBar:{name:"搜索框"},Slider:{name:"滑动输入条"},Stepper:{decrease:"减少",increase:"增加"},Switch:{name:"开关"},Selector:{name:"选择组"}},By={current:{locale:h5}};function sl(){return By.current}const p5=k.createContext(null),Vy=e=>{const{children:t}=e,n=rd(e,["children"]),r=xt();return k.createElement(p5.Provider,{value:Object.assign(Object.assign({},r),n)},t)};function xt(){var e;return(e=f.useContext(p5))!==null&&e!==void 0?e:sl()}function Gt(e,t){const n=e;for(const r in t)t.hasOwnProperty(r)&&(n[r]=t[r]);return n}var m5={exports:{}};/*!
	Copyright (c) 2018 Jed Watson.
	Licensed under the MIT License (MIT), see
	http://jedwatson.github.io/classnames
*/(function(e){(function(){var t={}.hasOwnProperty;function n(){for(var o="",s=0;s<arguments.length;s++){var l=arguments[s];l&&(o=i(o,r(l)))}return o}function r(o){if(typeof o=="string"||typeof o=="number")return o;if(typeof o!="object")return"";if(Array.isArray(o))return n.apply(null,o);if(o.toString!==Object.prototype.toString&&!o.toString.toString().includes("[native code]"))return o.toString();var s="";for(var l in o)t.call(o,l)&&o[l]&&(s=i(s,l));return s}function i(o,s){return s?o?o+" "+s:o+s:o}e.exports?(n.default=n,e.exports=n):window.classNames=n})()})(m5);var Wy=m5.exports;const X=hr(Wy);function ne(e,t){const n=Object.assign({},t.props);e.className&&(n.className=X(t.props.className,e.className)),e.style&&(n.style=Object.assign(Object.assign({},n.style),e.style)),e.tabIndex!==void 0&&(n.tabIndex=e.tabIndex);for(const r in e)e.hasOwnProperty(r)&&(r.startsWith("data-")||r.startsWith("aria-"))&&(n[r]=e[r]);return k.cloneElement(t,n)}function oe(...e){const t={};return e.forEach(n=>{n&&Object.keys(n).forEach(r=>{n[r]!==void 0&&(t[r]=n[r])})}),t}function g5(e,...t){for(let n=t.length-1;n>=0;n-=1)if(t[n]!==void 0)return t[n];return e}var v5=function(e){return function(t,n){var r=f.useRef(!1);e(function(){return function(){r.current=!1}},[]),e(function(){if(!r.current)r.current=!0;else return t()},n)}},Uy=function(e){return typeof e=="function"};function al(e){var t=f.useRef(e);t.current=f.useMemo(function(){return e},[e]);var n=f.useRef();return n.current||(n.current=function(){for(var r=[],i=0;i<arguments.length;i++)r[i]=arguments[i];return t.current.apply(this,r)}),n.current}const x5=v5(f.useEffect);function um(e,t){if(e===t)return!0;for(var n=0;n<e.length;n++)if(!Object.is(e[n],t[n]))return!1;return!0}function ll(e){var t=f.useRef(e);return t.current=e,t}var Dh=function(e){var t=ll(e);f.useEffect(function(){return function(){t.current()}},[])};function Hy(e){var t=typeof e;return e!=null&&(t=="object"||t=="function")}var Bh=Hy,qy=typeof $r=="object"&&$r&&$r.Object===Object&&$r,Zy=qy,Qy=Zy,Gy=typeof self=="object"&&self&&self.Object===Object&&self,Ky=Qy||Gy||Function("return this")(),y5=Ky,Yy=y5,Xy=function(){return Yy.Date.now()},Jy=Xy,ew=/\s/;function tw(e){for(var t=e.length;t--&&ew.test(e.charAt(t)););return t}var nw=tw,rw=nw,iw=/^\s+/;function ow(e){return e&&e.slice(0,rw(e)+1).replace(iw,"")}var sw=ow,aw=y5,lw=aw.Symbol,w5=lw,dm=w5,b5=Object.prototype,cw=b5.hasOwnProperty,uw=b5.toString,xs=dm?dm.toStringTag:void 0;function dw(e){var t=cw.call(e,xs),n=e[xs];try{e[xs]=void 0;var r=!0}catch{}var i=uw.call(e);return r&&(t?e[xs]=n:delete e[xs]),i}var fw=dw,hw=Object.prototype,pw=hw.toString;function mw(e){return pw.call(e)}var gw=mw,fm=w5,vw=fw,xw=gw,yw="[object Null]",ww="[object Undefined]",hm=fm?fm.toStringTag:void 0;function bw(e){return e==null?e===void 0?ww:yw:hm&&hm in Object(e)?vw(e):xw(e)}var Cw=bw;function kw(e){return e!=null&&typeof e=="object"}var jw=kw,Ew=Cw,Sw=jw,Lw="[object Symbol]";function $w(e){return typeof e=="symbol"||Sw(e)&&Ew(e)==Lw}var _w=$w,Fw=sw,pm=Bh,Ow=_w,mm=NaN,Nw=/^[-+]0x[0-9a-f]+$/i,Pw=/^0b[01]+$/i,Rw=/^0o[0-7]+$/i,Mw=parseInt;function Tw(e){if(typeof e=="number")return e;if(Ow(e))return mm;if(pm(e)){var t=typeof e.valueOf=="function"?e.valueOf():e;e=pm(t)?t+"":t}if(typeof e!="string")return e===0?e:+e;e=Fw(e);var n=Pw.test(e);return n||Rw.test(e)?Mw(e.slice(2),n?2:8):Nw.test(e)?mm:+e}var Aw=Tw,Iw=Bh,ff=Jy,gm=Aw,zw="Expected a function",Dw=Math.max,Bw=Math.min;function Vw(e,t,n){var r,i,o,s,l,c,u=0,d=!1,p=!1,g=!0;if(typeof e!="function")throw new TypeError(zw);t=gm(t)||0,Iw(n)&&(d=!!n.leading,p="maxWait"in n,o=p?Dw(gm(n.maxWait)||0,t):o,g="trailing"in n?!!n.trailing:g);function w(E){var $=r,F=i;return r=i=void 0,u=E,s=e.apply(F,$),s}function y(E){return u=E,l=setTimeout(m,t),d?w(E):s}function x(E){var $=E-c,F=E-u,M=t-$;return p?Bw(M,o-F):M}function C(E){var $=E-c,F=E-u;return c===void 0||$>=t||$<0||p&&F>=o}function m(){var E=ff();if(C(E))return v(E);l=setTimeout(m,x(E))}function v(E){return l=void 0,g&&r?w(E):(r=i=void 0,s)}function h(){l!==void 0&&clearTimeout(l),u=0,r=c=i=l=void 0}function b(){return l===void 0?s:v(ff())}function j(){var E=ff(),$=C(E);if(r=arguments,i=this,c=E,$){if(l===void 0)return y(c);if(p)return clearTimeout(l),l=setTimeout(m,t),w(c)}return l===void 0&&(l=setTimeout(m,t)),s}return j.cancel=h,j.flush=b,j}var C5=Vw;const Ww=hr(C5);var k5=!!(typeof window<"u"&&window.document&&window.document.createElement),Uw=C5,Hw=Bh,qw="Expected a function";function Zw(e,t,n){var r=!0,i=!0;if(typeof e!="function")throw new TypeError(qw);return Hw(n)&&(r="leading"in n?!!n.leading:r,i="trailing"in n?!!n.trailing:i),Uw(e,t,{leading:r,maxWait:t,trailing:i})}var Qw=Zw;const Gw=hr(Qw);var j5=function(){var e=_i(f.useState({}),2),t=e[1];return f.useCallback(function(){return t({})},[])};function To(e,t){if(k5){if(!e)return t;var n;return Uy(e)?n=e():"current"in e?n=e.current:n=e,n}}var Kw=function(e){return e.every(function(t){var n=To(t);return n?n.getRootNode()instanceof ShadowRoot:!1})},Yw=function(e){return e?e.getRootNode():document},Xw=function(e){if(!e||!document.getRootNode)return document;var t=Array.isArray(e)?e:[e];return Kw(t)?Yw(To(t[0])):document},Jw=function(e){var t=function(n,r,i){var o=f.useRef(!1),s=f.useRef([]),l=f.useRef([]),c=f.useRef();e(function(){var u,d=Array.isArray(i)?i:[i],p=d.map(function(g){return To(g)});if(!o.current){o.current=!0,s.current=p,l.current=r,c.current=n();return}(p.length!==s.current.length||!um(s.current,p)||!um(l.current,r))&&((u=c.current)===null||u===void 0||u.call(c),s.current=p,l.current=r,c.current=n())}),Dh(function(){var u;(u=c.current)===null||u===void 0||u.call(c),o.current=!1})};return t},E5=Jw(f.useEffect);function eb(e,t,n){n===void 0&&(n="click");var r=ll(e);E5(function(){var i=function(l){var c=Array.isArray(t)?t:[t];c.some(function(u){var d=To(u);return!d||d.contains(l.target)})||r.current(l)},o=Xw(t),s=Array.isArray(n)?n:[n];return s.forEach(function(l){return o.addEventListener(l,i)}),function(){s.forEach(function(l){return o.removeEventListener(l,i)})}},Array.isArray(n)?n:[n],t)}var S5={exports:{}};(function(e,t){(function(n,r){e.exports=r()})($r,function(){var n=1e3,r=6e4,i=36e5,o="millisecond",s="second",l="minute",c="hour",u="day",d="week",p="month",g="quarter",w="year",y="date",x="Invalid Date",C=/^(\d{4})[-/]?(\d{1,2})?[-/]?(\d{0,2})[Tt\s]*(\d{1,2})?:?(\d{1,2})?:?(\d{1,2})?[.:]?(\d+)?$/,m=/\[([^\]]+)]|Y{1,4}|M{1,4}|D{1,2}|d{1,4}|H{1,2}|h{1,2}|a|A|m{1,2}|s{1,2}|Z{1,2}|SSS/g,v={name:"en",weekdays:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),ordinal:function(z){var I=["th","st","nd","rd"],P=z%100;return"["+z+(I[(P-20)%10]||I[P]||I[0])+"]"}},h=function(z,I,P){var N=String(z);return!N||N.length>=I?z:""+Array(I+1-N.length).join(P)+z},b={s:h,z:function(z){var I=-z.utcOffset(),P=Math.abs(I),N=Math.floor(P/60),S=P%60;return(I<=0?"+":"-")+h(N,2,"0")+":"+h(S,2,"0")},m:function z(I,P){if(I.date()<P.date())return-z(P,I);var N=12*(P.year()-I.year())+(P.month()-I.month()),S=I.clone().add(N,p),_=P-S<0,O=I.clone().add(N+(_?-1:1),p);return+(-(N+(P-S)/(_?S-O:O-S))||0)},a:function(z){return z<0?Math.ceil(z)||0:Math.floor(z)},p:function(z){return{M:p,y:w,w:d,d:u,D:y,h:c,m:l,s,ms:o,Q:g}[z]||String(z||"").toLowerCase().replace(/s$/,"")},u:function(z){return z===void 0}},j="en",E={};E[j]=v;var $="$isDayjsObject",F=function(z){return z instanceof T||!(!z||!z[$])},M=function z(I,P,N){var S;if(!I)return j;if(typeof I=="string"){var _=I.toLowerCase();E[_]&&(S=_),P&&(E[_]=P,S=_);var O=I.split("-");if(!S&&O.length>1)return z(O[0])}else{var A=I.name;E[A]=I,S=A}return!N&&S&&(j=S),S||!N&&j},R=function(z,I){if(F(z))return z.clone();var P=typeof I=="object"?I:{};return P.date=z,P.args=arguments,new T(P)},D=b;D.l=M,D.i=F,D.w=function(z,I){return R(z,{locale:I.$L,utc:I.$u,x:I.$x,$offset:I.$offset})};var T=function(){function z(P){this.$L=M(P.locale,null,!0),this.parse(P),this.$x=this.$x||P.x||{},this[$]=!0}var I=z.prototype;return I.parse=function(P){this.$d=function(N){var S=N.date,_=N.utc;if(S===null)return new Date(NaN);if(D.u(S))return new Date;if(S instanceof Date)return new Date(S);if(typeof S=="string"&&!/Z$/i.test(S)){var O=S.match(C);if(O){var A=O[2]-1||0,B=(O[7]||"0").substring(0,3);return _?new Date(Date.UTC(O[1],A,O[3]||1,O[4]||0,O[5]||0,O[6]||0,B)):new Date(O[1],A,O[3]||1,O[4]||0,O[5]||0,O[6]||0,B)}}return new Date(S)}(P),this.init()},I.init=function(){var P=this.$d;this.$y=P.getFullYear(),this.$M=P.getMonth(),this.$D=P.getDate(),this.$W=P.getDay(),this.$H=P.getHours(),this.$m=P.getMinutes(),this.$s=P.getSeconds(),this.$ms=P.getMilliseconds()},I.$utils=function(){return D},I.isValid=function(){return this.$d.toString()!==x},I.isSame=function(P,N){var S=R(P);return this.startOf(N)<=S&&S<=this.endOf(N)},I.isAfter=function(P,N){return R(P)<this.startOf(N)},I.isBefore=function(P,N){return this.endOf(N)<R(P)},I.$g=function(P,N,S){return D.u(P)?this[N]:this.set(S,P)},I.unix=function(){return Math.floor(this.valueOf()/1e3)},I.valueOf=function(){return this.$d.getTime()},I.startOf=function(P,N){var S=this,_=!!D.u(N)||N,O=D.p(P),A=function(K,te){var re=D.w(S.$u?Date.UTC(S.$y,te,K):new Date(S.$y,te,K),S);return _?re:re.endOf(u)},B=function(K,te){return D.w(S.toDate()[K].apply(S.toDate("s"),(_?[0,0,0,0]:[23,59,59,999]).slice(te)),S)},G=this.$W,H=this.$M,W=this.$D,Q="set"+(this.$u?"UTC":"");switch(O){case w:return _?A(1,0):A(31,11);case p:return _?A(1,H):A(0,H+1);case d:var ee=this.$locale().weekStart||0,fe=(G<ee?G+7:G)-ee;return A(_?W-fe:W+(6-fe),H);case u:case y:return B(Q+"Hours",0);case c:return B(Q+"Minutes",1);case l:return B(Q+"Seconds",2);case s:return B(Q+"Milliseconds",3);default:return this.clone()}},I.endOf=function(P){return this.startOf(P,!1)},I.$set=function(P,N){var S,_=D.p(P),O="set"+(this.$u?"UTC":""),A=(S={},S[u]=O+"Date",S[y]=O+"Date",S[p]=O+"Month",S[w]=O+"FullYear",S[c]=O+"Hours",S[l]=O+"Minutes",S[s]=O+"Seconds",S[o]=O+"Milliseconds",S)[_],B=_===u?this.$D+(N-this.$W):N;if(_===p||_===w){var G=this.clone().set(y,1);G.$d[A](B),G.init(),this.$d=G.set(y,Math.min(this.$D,G.daysInMonth())).$d}else A&&this.$d[A](B);return this.init(),this},I.set=function(P,N){return this.clone().$set(P,N)},I.get=function(P){return this[D.p(P)]()},I.add=function(P,N){var S,_=this;P=Number(P);var O=D.p(N),A=function(H){var W=R(_);return D.w(W.date(W.date()+Math.round(H*P)),_)};if(O===p)return this.set(p,this.$M+P);if(O===w)return this.set(w,this.$y+P);if(O===u)return A(1);if(O===d)return A(7);var B=(S={},S[l]=r,S[c]=i,S[s]=n,S)[O]||1,G=this.$d.getTime()+P*B;return D.w(G,this)},I.subtract=function(P,N){return this.add(-1*P,N)},I.format=function(P){var N=this,S=this.$locale();if(!this.isValid())return S.invalidDate||x;var _=P||"YYYY-MM-DDTHH:mm:ssZ",O=D.z(this),A=this.$H,B=this.$m,G=this.$M,H=S.weekdays,W=S.months,Q=S.meridiem,ee=function(te,re,ve,we){return te&&(te[re]||te(N,_))||ve[re].slice(0,we)},fe=function(te){return D.s(A%12||12,te,"0")},K=Q||function(te,re,ve){var we=te<12?"AM":"PM";return ve?we.toLowerCase():we};return _.replace(m,function(te,re){return re||function(ve){switch(ve){case"YY":return String(N.$y).slice(-2);case"YYYY":return D.s(N.$y,4,"0");case"M":return G+1;case"MM":return D.s(G+1,2,"0");case"MMM":return ee(S.monthsShort,G,W,3);case"MMMM":return ee(W,G);case"D":return N.$D;case"DD":return D.s(N.$D,2,"0");case"d":return String(N.$W);case"dd":return ee(S.weekdaysMin,N.$W,H,2);case"ddd":return ee(S.weekdaysShort,N.$W,H,3);case"dddd":return H[N.$W];case"H":return String(A);case"HH":return D.s(A,2,"0");case"h":return fe(1);case"hh":return fe(2);case"a":return K(A,B,!0);case"A":return K(A,B,!1);case"m":return String(B);case"mm":return D.s(B,2,"0");case"s":return String(N.$s);case"ss":return D.s(N.$s,2,"0");case"SSS":return D.s(N.$ms,3,"0");case"Z":return O}return null}(te)||O.replace(":","")})},I.utcOffset=function(){return 15*-Math.round(this.$d.getTimezoneOffset()/15)},I.diff=function(P,N,S){var _,O=this,A=D.p(N),B=R(P),G=(B.utcOffset()-this.utcOffset())*r,H=this-B,W=function(){return D.m(O,B)};switch(A){case w:_=W()/12;break;case p:_=W();break;case g:_=W()/3;break;case d:_=(H-G)/6048e5;break;case u:_=(H-G)/864e5;break;case c:_=H/i;break;case l:_=H/r;break;case s:_=H/n;break;default:_=H}return S?_:D.a(_)},I.daysInMonth=function(){return this.endOf(p).$D},I.$locale=function(){return E[this.$L]},I.locale=function(P,N){if(!P)return this.$L;var S=this.clone(),_=M(P,N,!0);return _&&(S.$L=_),S},I.clone=function(){return D.w(this.$d,this)},I.toDate=function(){return new Date(this.valueOf())},I.toJSON=function(){return this.isValid()?this.toISOString():null},I.toISOString=function(){return this.$d.toISOString()},I.toString=function(){return this.$d.toUTCString()},z}(),V=T.prototype;return R.prototype=V,[["$ms",o],["$s",s],["$m",l],["$H",c],["$W",u],["$M",p],["$y",w],["$D",y]].forEach(function(z){V[z[1]]=function(I){return this.$g(I,z[0],z[1])}}),R.extend=function(z,I){return z.$i||(z(I,T,R),z.$i=!0),R},R.locale=M,R.isDayjs=F,R.unix=function(z){return R(1e3*z)},R.en=E[j],R.Ls=E,R.p={},R})})(S5);var tb=S5.exports;const ci=hr(tb);function nb(){var e=(typeof global>"u"?"undefined":typeof global)=="object"&&global&&global.Object===Object&&global,t=typeof self=="object"&&self&&self.Object===Object&&self;return e||t}nb()||(global.Date=Date);function rb(e,t){var n,r=ll(e),i=(n=t==null?void 0:t.wait)!==null&&n!==void 0?n:1e3,o=f.useMemo(function(){return Ww(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return r.current.apply(r,f5([],_i(s),!1))},i,t)},[]);return Dh(function(){o.cancel()}),{run:o,cancel:o.cancel,flush:o.flush}}function ib(e,t,n){var r=_i(f.useState({}),2),i=r[0],o=r[1],s=rb(function(){o({})},n).run;f.useEffect(function(){return s()},t),x5(e,[i])}var ob=typeof Element<"u",sb=typeof Map=="function",ab=typeof Set=="function",lb=typeof ArrayBuffer=="function"&&!!ArrayBuffer.isView;function Pc(e,t){if(e===t)return!0;if(e&&t&&typeof e=="object"&&typeof t=="object"){if(e.constructor!==t.constructor)return!1;var n,r,i;if(Array.isArray(e)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(!Pc(e[r],t[r]))return!1;return!0}var o;if(sb&&e instanceof Map&&t instanceof Map){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;for(o=e.entries();!(r=o.next()).done;)if(!Pc(r.value[1],t.get(r.value[0])))return!1;return!0}if(ab&&e instanceof Set&&t instanceof Set){if(e.size!==t.size)return!1;for(o=e.entries();!(r=o.next()).done;)if(!t.has(r.value[0]))return!1;return!0}if(lb&&ArrayBuffer.isView(e)&&ArrayBuffer.isView(t)){if(n=e.length,n!=t.length)return!1;for(r=n;r--!==0;)if(e[r]!==t[r])return!1;return!0}if(e.constructor===RegExp)return e.source===t.source&&e.flags===t.flags;if(e.valueOf!==Object.prototype.valueOf&&typeof e.valueOf=="function"&&typeof t.valueOf=="function")return e.valueOf()===t.valueOf();if(e.toString!==Object.prototype.toString&&typeof e.toString=="function"&&typeof t.toString=="function")return e.toString()===t.toString();if(i=Object.keys(e),n=i.length,n!==Object.keys(t).length)return!1;for(r=n;r--!==0;)if(!Object.prototype.hasOwnProperty.call(t,i[r]))return!1;if(ob&&e instanceof Element)return!1;for(r=n;r--!==0;)if(!((i[r]==="_owner"||i[r]==="__v"||i[r]==="__o")&&e.$$typeof)&&!Pc(e[i[r]],t[i[r]]))return!1;return!0}return e!==e&&t!==t}var cb=function(t,n){try{return Pc(t,n)}catch(r){if((r.message||"").match(/stack|recursion/i))return console.warn("react-fast-compare cannot handle circular refs"),!1;throw r}};const ub=hr(cb);function db(e){var t=_i(f.useState(e),2),n=t[0],r=t[1],i=ll(n),o=f.useCallback(function(){return i.current},[]);return[n,r,o]}(function(){if(typeof window!="object")return;if("IntersectionObserver"in window&&"IntersectionObserverEntry"in window&&"intersectionRatio"in window.IntersectionObserverEntry.prototype){"isIntersecting"in window.IntersectionObserverEntry.prototype||Object.defineProperty(window.IntersectionObserverEntry.prototype,"isIntersecting",{get:function(){return this.intersectionRatio>0}});return}function e(h){try{return h.defaultView&&h.defaultView.frameElement||null}catch{return null}}var t=function(h){for(var b=h,j=e(b);j;)b=j.ownerDocument,j=e(b);return b}(window.document),n=[],r=null,i=null;function o(h){this.time=h.time,this.target=h.target,this.rootBounds=y(h.rootBounds),this.boundingClientRect=y(h.boundingClientRect),this.intersectionRect=y(h.intersectionRect||w()),this.isIntersecting=!!h.intersectionRect;var b=this.boundingClientRect,j=b.width*b.height,E=this.intersectionRect,$=E.width*E.height;j?this.intersectionRatio=Number(($/j).toFixed(4)):this.intersectionRatio=this.isIntersecting?1:0}function s(h,b){var j=b||{};if(typeof h!="function")throw new Error("callback must be a function");if(j.root&&j.root.nodeType!=1&&j.root.nodeType!=9)throw new Error("root must be a Document or Element");this._checkForIntersections=c(this._checkForIntersections.bind(this),this.THROTTLE_TIMEOUT),this._callback=h,this._observationTargets=[],this._queuedEntries=[],this._rootMarginValues=this._parseRootMargin(j.rootMargin),this.thresholds=this._initThresholds(j.threshold),this.root=j.root||null,this.rootMargin=this._rootMarginValues.map(function(E){return E.value+E.unit}).join(" "),this._monitoringDocuments=[],this._monitoringUnsubscribes=[]}s.prototype.THROTTLE_TIMEOUT=100,s.prototype.POLL_INTERVAL=null,s.prototype.USE_MUTATION_OBSERVER=!0,s._setupCrossOriginUpdater=function(){return r||(r=function(h,b){!h||!b?i=w():i=x(h,b),n.forEach(function(j){j._checkForIntersections()})}),r},s._resetCrossOriginUpdater=function(){r=null,i=null},s.prototype.observe=function(h){var b=this._observationTargets.some(function(j){return j.element==h});if(!b){if(!(h&&h.nodeType==1))throw new Error("target must be an Element");this._registerInstance(),this._observationTargets.push({element:h,entry:null}),this._monitorIntersections(h.ownerDocument),this._checkForIntersections()}},s.prototype.unobserve=function(h){this._observationTargets=this._observationTargets.filter(function(b){return b.element!=h}),this._unmonitorIntersections(h.ownerDocument),this._observationTargets.length==0&&this._unregisterInstance()},s.prototype.disconnect=function(){this._observationTargets=[],this._unmonitorAllIntersections(),this._unregisterInstance()},s.prototype.takeRecords=function(){var h=this._queuedEntries.slice();return this._queuedEntries=[],h},s.prototype._initThresholds=function(h){var b=h||[0];return Array.isArray(b)||(b=[b]),b.sort().filter(function(j,E,$){if(typeof j!="number"||isNaN(j)||j<0||j>1)throw new Error("threshold must be a number between 0 and 1 inclusively");return j!==$[E-1]})},s.prototype._parseRootMargin=function(h){var b=h||"0px",j=b.split(/\s+/).map(function(E){var $=/^(-?\d*\.?\d+)(px|%)$/.exec(E);if(!$)throw new Error("rootMargin must be specified in pixels or percent");return{value:parseFloat($[1]),unit:$[2]}});return j[1]=j[1]||j[0],j[2]=j[2]||j[0],j[3]=j[3]||j[1],j},s.prototype._monitorIntersections=function(h){var b=h.defaultView;if(b&&this._monitoringDocuments.indexOf(h)==-1){var j=this._checkForIntersections,E=null,$=null;this.POLL_INTERVAL?E=b.setInterval(j,this.POLL_INTERVAL):(u(b,"resize",j,!0),u(h,"scroll",j,!0),this.USE_MUTATION_OBSERVER&&"MutationObserver"in b&&($=new b.MutationObserver(j),$.observe(h,{attributes:!0,childList:!0,characterData:!0,subtree:!0}))),this._monitoringDocuments.push(h),this._monitoringUnsubscribes.push(function(){var R=h.defaultView;R&&(E&&R.clearInterval(E),d(R,"resize",j,!0)),d(h,"scroll",j,!0),$&&$.disconnect()});var F=this.root&&(this.root.ownerDocument||this.root)||t;if(h!=F){var M=e(h);M&&this._monitorIntersections(M.ownerDocument)}}},s.prototype._unmonitorIntersections=function(h){var b=this._monitoringDocuments.indexOf(h);if(b!=-1){var j=this.root&&(this.root.ownerDocument||this.root)||t,E=this._observationTargets.some(function(M){var R=M.element.ownerDocument;if(R==h)return!0;for(;R&&R!=j;){var D=e(R);if(R=D&&D.ownerDocument,R==h)return!0}return!1});if(!E){var $=this._monitoringUnsubscribes[b];if(this._monitoringDocuments.splice(b,1),this._monitoringUnsubscribes.splice(b,1),$(),h!=j){var F=e(h);F&&this._unmonitorIntersections(F.ownerDocument)}}}},s.prototype._unmonitorAllIntersections=function(){var h=this._monitoringUnsubscribes.slice(0);this._monitoringDocuments.length=0,this._monitoringUnsubscribes.length=0;for(var b=0;b<h.length;b++)h[b]()},s.prototype._checkForIntersections=function(){if(!(!this.root&&r&&!i)){var h=this._rootIsInDom(),b=h?this._getRootRect():w();this._observationTargets.forEach(function(j){var E=j.element,$=g(E),F=this._rootContainsTarget(E),M=j.entry,R=h&&F&&this._computeTargetAndRootIntersection(E,$,b),D=null;this._rootContainsTarget(E)?(!r||this.root)&&(D=b):D=w();var T=j.entry=new o({time:l(),target:E,boundingClientRect:$,rootBounds:D,intersectionRect:R});M?h&&F?this._hasCrossedThreshold(M,T)&&this._queuedEntries.push(T):M&&M.isIntersecting&&this._queuedEntries.push(T):this._queuedEntries.push(T)},this),this._queuedEntries.length&&this._callback(this.takeRecords(),this)}},s.prototype._computeTargetAndRootIntersection=function(h,b,j){if(window.getComputedStyle(h).display!="none"){for(var E=b,$=m(h),F=!1;!F&&$;){var M=null,R=$.nodeType==1?window.getComputedStyle($):{};if(R.display=="none")return null;if($==this.root||$.nodeType==9)if(F=!0,$==this.root||$==t)r&&!this.root?!i||i.width==0&&i.height==0?($=null,M=null,E=null):M=i:M=j;else{var D=m($),T=D&&g(D),V=D&&this._computeTargetAndRootIntersection(D,T,j);T&&V?($=D,M=x(T,V)):($=null,E=null)}else{var z=$.ownerDocument;$!=z.body&&$!=z.documentElement&&R.overflow!="visible"&&(M=g($))}if(M&&(E=p(M,E)),!E)break;$=$&&m($)}return E}},s.prototype._getRootRect=function(){var h;if(this.root&&!v(this.root))h=g(this.root);else{var b=v(this.root)?this.root:t,j=b.documentElement,E=b.body;h={top:0,left:0,right:j.clientWidth||E.clientWidth,width:j.clientWidth||E.clientWidth,bottom:j.clientHeight||E.clientHeight,height:j.clientHeight||E.clientHeight}}return this._expandRectByRootMargin(h)},s.prototype._expandRectByRootMargin=function(h){var b=this._rootMarginValues.map(function(E,$){return E.unit=="px"?E.value:E.value*($%2?h.width:h.height)/100}),j={top:h.top-b[0],right:h.right+b[1],bottom:h.bottom+b[2],left:h.left-b[3]};return j.width=j.right-j.left,j.height=j.bottom-j.top,j},s.prototype._hasCrossedThreshold=function(h,b){var j=h&&h.isIntersecting?h.intersectionRatio||0:-1,E=b.isIntersecting?b.intersectionRatio||0:-1;if(j!==E)for(var $=0;$<this.thresholds.length;$++){var F=this.thresholds[$];if(F==j||F==E||F<j!=F<E)return!0}},s.prototype._rootIsInDom=function(){return!this.root||C(t,this.root)},s.prototype._rootContainsTarget=function(h){var b=this.root&&(this.root.ownerDocument||this.root)||t;return C(b,h)&&(!this.root||b==h.ownerDocument)},s.prototype._registerInstance=function(){n.indexOf(this)<0&&n.push(this)},s.prototype._unregisterInstance=function(){var h=n.indexOf(this);h!=-1&&n.splice(h,1)};function l(){return window.performance&&performance.now&&performance.now()}function c(h,b){var j=null;return function(){j||(j=setTimeout(function(){h(),j=null},b))}}function u(h,b,j,E){typeof h.addEventListener=="function"?h.addEventListener(b,j,E):typeof h.attachEvent=="function"&&h.attachEvent("on"+b,j)}function d(h,b,j,E){typeof h.removeEventListener=="function"?h.removeEventListener(b,j,E):typeof h.detachEvent=="function"&&h.detachEvent("on"+b,j)}function p(h,b){var j=Math.max(h.top,b.top),E=Math.min(h.bottom,b.bottom),$=Math.max(h.left,b.left),F=Math.min(h.right,b.right),M=F-$,R=E-j;return M>=0&&R>=0&&{top:j,bottom:E,left:$,right:F,width:M,height:R}||null}function g(h){var b;try{b=h.getBoundingClientRect()}catch{}return b?(b.width&&b.height||(b={top:b.top,right:b.right,bottom:b.bottom,left:b.left,width:b.right-b.left,height:b.bottom-b.top}),b):w()}function w(){return{top:0,bottom:0,left:0,right:0,width:0,height:0}}function y(h){return!h||"x"in h?h:{top:h.top,y:h.top,bottom:h.bottom,left:h.left,x:h.left,right:h.right,width:h.width,height:h.height}}function x(h,b){var j=b.top-h.top,E=b.left-h.left;return{top:j,left:E,height:b.height,width:b.width,bottom:j+b.height,right:E+b.width}}function C(h,b){for(var j=b;j;){if(j==h)return!0;j=m(j)}return!1}function m(h){var b=h.parentNode;return h.nodeType==9&&h!=t?e(h):(b&&b.assignedSlot&&(b=b.assignedSlot.parentNode),b&&b.nodeType==11&&b.host?b.host:b)}function v(h){return h&&h.nodeType===9}window.IntersectionObserver=s,window.IntersectionObserverEntry=o})();function fb(e,t){var n={},r=n.callback,i=rd(n,["callback"]),o=_i(f.useState(),2),s=o[0],l=o[1],c=_i(f.useState(),2),u=c[0],d=c[1];return E5(function(){var p=Array.isArray(e)?e:[e],g=p.map(function(y){return To(y)}).filter(Boolean);if(g.length){var w=new IntersectionObserver(function(y){var x,C;try{for(var m=Dy(y),v=m.next();!v.done;v=m.next()){var h=v.value;d(h.intersectionRatio),l(h.isIntersecting),r==null||r(h)}}catch(b){x={error:b}}finally{try{v&&!v.done&&(C=m.return)&&C.call(m)}finally{if(x)throw x.error}}},pu(pu({},i),{root:To(void 0)}));return g.forEach(function(y){return w.observe(y)}),function(){w.disconnect()}}},[void 0,void 0,r],e),[s,u]}var Ft=k5?f.useLayoutEffect:f.useEffect,Vh=function(){var e=f.useRef(!1);return f.useEffect(function(){return e.current=!1,function(){e.current=!0}},[]),e};function hb(e,t){var n,r=ll(e),i=(n=t==null?void 0:t.wait)!==null&&n!==void 0?n:1e3,o=f.useMemo(function(){return Gw(function(){for(var s=[],l=0;l<arguments.length;l++)s[l]=arguments[l];return r.current.apply(r,f5([],_i(s),!1))},i,t)},[]);return Dh(function(){o.cancel()}),{run:o,cancel:o.cancel,flush:o.flush}}const vm=10;function pb(e,t){return e>t&&e>vm?"horizontal":t>e&&t>vm?"vertical":""}function mb(){const e=f.useRef(0),t=f.useRef(0),n=f.useRef(0),r=f.useRef(0),i=f.useRef(0),o=f.useRef(0),s=f.useRef(""),l=()=>s.current==="vertical",c=()=>s.current==="horizontal",u=()=>{n.current=0,r.current=0,i.current=0,o.current=0,s.current=""};return{move:g=>{const w=g.touches[0];n.current=w.clientX<0?0:w.clientX-e.current,r.current=w.clientY-t.current,i.current=Math.abs(n.current),o.current=Math.abs(r.current),s.current||(s.current=pb(i.current,o.current))},start:g=>{u(),e.current=g.touches[0].clientX,t.current=g.touches[0].clientY},reset:u,startX:e,startY:t,deltaX:n,deltaY:r,offsetX:i,offsetY:o,direction:s,isVertical:l,isHorizontal:c}}const gb=Jo?window:void 0,vb=["scroll","auto","overlay"];function xb(e){return e.nodeType===1}function yb(e,t=gb){let n=e;for(;n&&n!==t&&xb(n);){if(n===document.body)return t;const{overflowY:r}=window.getComputedStyle(n);if(vb.includes(r)&&n.scrollHeight>n.clientHeight)return n;n=n.parentNode}return t}let mu=!1;if(Jo)try{const e={};Object.defineProperty(e,"passive",{get(){mu=!0}}),window.addEventListener("test-passive",null,e)}catch{}let ys=0;const xm="adm-overflow-hidden";function wb(e){let t=e==null?void 0:e.parentElement;for(;t;){if(t.clientHeight<t.scrollHeight)return t;t=t.parentElement}return null}function Wh(e,t){const n=mb(),r=s=>{n.move(s);const l=n.deltaY.current>0?"10":"01",c=yb(s.target,e.current);if(!c)return;if(t==="strict"){const y=wb(s.target);if(y===document.body||y===document.documentElement){s.preventDefault();return}}const{scrollHeight:u,offsetHeight:d,scrollTop:p}=c,{height:g}=c.getBoundingClientRect();let w="11";p===0?w=d>=u?"00":"01":u<=Math.round(g+p)&&(w="10"),w!=="11"&&n.isVertical()&&!(parseInt(w,2)&parseInt(l,2))&&s.cancelable&&mu&&s.preventDefault()},i=()=>{document.addEventListener("touchstart",n.start),document.addEventListener("touchmove",r,mu?{passive:!1}:!1),ys||document.body.classList.add(xm),ys++},o=()=>{ys&&(document.removeEventListener("touchstart",n.start),document.removeEventListener("touchmove",r),ys--,ys||document.body.classList.remove(xm))};f.useEffect(()=>{if(t)return i(),()=>{o()}},[t])}let Uh=ul();const ie=e=>cl(e,Uh);let Hh=ul();ie.write=e=>cl(e,Hh);let id=ul();ie.onStart=e=>cl(e,id);let qh=ul();ie.onFrame=e=>cl(e,qh);let Zh=ul();ie.onFinish=e=>cl(e,Zh);let jo=[];ie.setTimeout=(e,t)=>{let n=ie.now()+t,r=()=>{let o=jo.findIndex(s=>s.cancel==r);~o&&jo.splice(o,1),Pr-=~o?1:0},i={time:n,handler:e,cancel:r};return jo.splice(L5(n),0,i),Pr+=1,$5(),i};let L5=e=>~(~jo.findIndex(t=>t.time>e)||~jo.length);ie.cancel=e=>{id.delete(e),qh.delete(e),Zh.delete(e),Uh.delete(e),Hh.delete(e)};ie.sync=e=>{e1=!0,ie.batchedUpdates(e),e1=!1};ie.throttle=e=>{let t;function n(){try{e(...t)}finally{t=null}}function r(...i){t=i,ie.onStart(n)}return r.handler=e,r.cancel=()=>{id.delete(n),t=null},r};let Qh=typeof window<"u"?window.requestAnimationFrame:()=>{};ie.use=e=>Qh=e;ie.now=typeof performance<"u"?()=>performance.now():Date.now;ie.batchedUpdates=e=>e();ie.catch=console.error;ie.frameLoop="always";ie.advance=()=>{ie.frameLoop!=="demand"?console.warn("Cannot call the manual advancement of rafz whilst frameLoop is not set as demand"):F5()};let Nr=-1,Pr=0,e1=!1;function cl(e,t){e1?(t.delete(e),e(0)):(t.add(e),$5())}function $5(){Nr<0&&(Nr=0,ie.frameLoop!=="demand"&&Qh(_5))}function bb(){Nr=-1}function _5(){~Nr&&(Qh(_5),ie.batchedUpdates(F5))}function F5(){let e=Nr;Nr=ie.now();let t=L5(Nr);if(t&&(O5(jo.splice(0,t),n=>n.handler()),Pr-=t),!Pr){bb();return}id.flush(),Uh.flush(e?Math.min(64,Nr-e):16.667),qh.flush(),Hh.flush(),Zh.flush()}function ul(){let e=new Set,t=e;return{add(n){Pr+=t==e&&!e.has(n)?1:0,e.add(n)},delete(n){return Pr-=t==e&&e.has(n)?1:0,e.delete(n)},flush(n){t.size&&(e=new Set,Pr-=t.size,O5(t,r=>r(n)&&e.add(r)),Pr+=e.size,t=e)}}}function O5(e,t){e.forEach(n=>{try{t(n)}catch(r){ie.catch(r)}})}function t1(){}const Cb=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Z={arr:Array.isArray,obj:e=>!!e&&e.constructor.name==="Object",fun:e=>typeof e=="function",str:e=>typeof e=="string",num:e=>typeof e=="number",und:e=>e===void 0};function nr(e,t){if(Z.arr(e)){if(!Z.arr(t)||e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}return e===t}const ue=(e,t)=>e.forEach(t);function qn(e,t,n){if(Z.arr(e)){for(let r=0;r<e.length;r++)t.call(n,e[r],`${r}`);return}for(const r in e)e.hasOwnProperty(r)&&t.call(n,e[r],r)}const Bt=e=>Z.und(e)?[]:Z.arr(e)?e:[e];function la(e,t){if(e.size){const n=Array.from(e);e.clear(),ue(n,t)}}const Zs=(e,...t)=>la(e,n=>n(...t)),Gh=()=>typeof window>"u"||!window.navigator||/ServerSideRendering|^Deno\//.test(window.navigator.userAgent);let Kh,N5,Wr=null,P5=!1,Yh=t1;const kb=e=>{e.to&&(N5=e.to),e.now&&(ie.now=e.now),e.colors!==void 0&&(Wr=e.colors),e.skipAnimation!=null&&(P5=e.skipAnimation),e.createStringInterpolator&&(Kh=e.createStringInterpolator),e.requestAnimationFrame&&ie.use(e.requestAnimationFrame),e.batchedUpdates&&(ie.batchedUpdates=e.batchedUpdates),e.willAdvance&&(Yh=e.willAdvance),e.frameLoop&&(ie.frameLoop=e.frameLoop)};var Zn=Object.freeze({__proto__:null,get createStringInterpolator(){return Kh},get to(){return N5},get colors(){return Wr},get skipAnimation(){return P5},get willAdvance(){return Yh},assign:kb});const ca=new Set;let sn=[],hf=[],gu=0;const od={get idle(){return!ca.size&&!sn.length},start(e){gu>e.priority?(ca.add(e),ie.onStart(jb)):(R5(e),ie(n1))},advance:n1,sort(e){if(gu)ie.onFrame(()=>od.sort(e));else{const t=sn.indexOf(e);~t&&(sn.splice(t,1),M5(e))}},clear(){sn=[],ca.clear()}};function jb(){ca.forEach(R5),ca.clear(),ie(n1)}function R5(e){sn.includes(e)||M5(e)}function M5(e){sn.splice(Eb(sn,t=>t.priority>e.priority),0,e)}function n1(e){const t=hf;for(let n=0;n<sn.length;n++){const r=sn[n];gu=r.priority,r.idle||(Yh(r),r.advance(e),r.idle||t.push(r))}return gu=0,hf=sn,hf.length=0,sn=t,sn.length>0}function Eb(e,t){const n=e.findIndex(t);return n<0?e.length:n}const Sb={transparent:0,aliceblue:4042850303,antiquewhite:4209760255,aqua:16777215,aquamarine:2147472639,azure:4043309055,beige:4126530815,bisque:4293182719,black:255,blanchedalmond:4293643775,blue:65535,blueviolet:2318131967,brown:2771004159,burlywood:3736635391,burntsienna:3934150143,cadetblue:1604231423,chartreuse:2147418367,chocolate:3530104575,coral:4286533887,cornflowerblue:1687547391,cornsilk:4294499583,crimson:3692313855,cyan:16777215,darkblue:35839,darkcyan:9145343,darkgoldenrod:3095792639,darkgray:2846468607,darkgreen:6553855,darkgrey:2846468607,darkkhaki:3182914559,darkmagenta:2332068863,darkolivegreen:1433087999,darkorange:4287365375,darkorchid:2570243327,darkred:2332033279,darksalmon:3918953215,darkseagreen:2411499519,darkslateblue:1211993087,darkslategray:793726975,darkslategrey:793726975,darkturquoise:13554175,darkviolet:2483082239,deeppink:4279538687,deepskyblue:12582911,dimgray:1768516095,dimgrey:1768516095,dodgerblue:512819199,firebrick:2988581631,floralwhite:4294635775,forestgreen:579543807,fuchsia:4278255615,gainsboro:3705462015,ghostwhite:4177068031,gold:4292280575,goldenrod:3668254975,gray:2155905279,green:8388863,greenyellow:2919182335,grey:2155905279,honeydew:4043305215,hotpink:4285117695,indianred:3445382399,indigo:1258324735,ivory:4294963455,khaki:4041641215,lavender:3873897215,lavenderblush:4293981695,lawngreen:2096890111,lemonchiffon:4294626815,lightblue:2916673279,lightcoral:4034953471,lightcyan:3774873599,lightgoldenrodyellow:4210742015,lightgray:3553874943,lightgreen:2431553791,lightgrey:3553874943,lightpink:4290167295,lightsalmon:4288707327,lightseagreen:548580095,lightskyblue:2278488831,lightslategray:2005441023,lightslategrey:2005441023,lightsteelblue:2965692159,lightyellow:4294959359,lime:16711935,limegreen:852308735,linen:4210091775,magenta:4278255615,maroon:2147483903,mediumaquamarine:1724754687,mediumblue:52735,mediumorchid:3126187007,mediumpurple:2473647103,mediumseagreen:1018393087,mediumslateblue:2070474495,mediumspringgreen:16423679,mediumturquoise:1221709055,mediumvioletred:3340076543,midnightblue:421097727,mintcream:4127193855,mistyrose:4293190143,moccasin:4293178879,navajowhite:4292783615,navy:33023,oldlace:4260751103,olive:2155872511,olivedrab:1804477439,orange:4289003775,orangered:4282712319,orchid:3664828159,palegoldenrod:4008225535,palegreen:2566625535,paleturquoise:2951671551,palevioletred:3681588223,papayawhip:4293907967,peachpuff:4292524543,peru:3448061951,pink:4290825215,plum:3718307327,powderblue:2967529215,purple:2147516671,rebeccapurple:1714657791,red:4278190335,rosybrown:3163525119,royalblue:1097458175,saddlebrown:2336560127,salmon:4202722047,sandybrown:4104413439,seagreen:780883967,seashell:4294307583,sienna:2689740287,silver:3233857791,skyblue:2278484991,slateblue:1784335871,slategray:1887473919,slategrey:1887473919,snow:4294638335,springgreen:16744447,steelblue:1182971135,tan:3535047935,teal:8421631,thistle:3636451583,tomato:4284696575,turquoise:1088475391,violet:4001558271,wheat:4125012991,white:4294967295,whitesmoke:4126537215,yellow:4294902015,yellowgreen:2597139199},Cn="[-+]?\\d*\\.?\\d+",vu=Cn+"%";function sd(...e){return"\\(\\s*("+e.join(")\\s*,\\s*(")+")\\s*\\)"}const Lb=new RegExp("rgb"+sd(Cn,Cn,Cn)),$b=new RegExp("rgba"+sd(Cn,Cn,Cn,Cn)),_b=new RegExp("hsl"+sd(Cn,vu,vu)),Fb=new RegExp("hsla"+sd(Cn,vu,vu,Cn)),Ob=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Nb=/^#([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,Pb=/^#([0-9a-fA-F]{6})$/,Rb=/^#([0-9a-fA-F]{8})$/;function Mb(e){let t;return typeof e=="number"?e>>>0===e&&e>=0&&e<=4294967295?e:null:(t=Pb.exec(e))?parseInt(t[1]+"ff",16)>>>0:Wr&&Wr[e]!==void 0?Wr[e]:(t=Lb.exec(e))?(Bi(t[1])<<24|Bi(t[2])<<16|Bi(t[3])<<8|255)>>>0:(t=$b.exec(e))?(Bi(t[1])<<24|Bi(t[2])<<16|Bi(t[3])<<8|bm(t[4]))>>>0:(t=Ob.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+"ff",16)>>>0:(t=Rb.exec(e))?parseInt(t[1],16)>>>0:(t=Nb.exec(e))?parseInt(t[1]+t[1]+t[2]+t[2]+t[3]+t[3]+t[4]+t[4],16)>>>0:(t=_b.exec(e))?(ym(wm(t[1]),Il(t[2]),Il(t[3]))|255)>>>0:(t=Fb.exec(e))?(ym(wm(t[1]),Il(t[2]),Il(t[3]))|bm(t[4]))>>>0:null}function pf(e,t,n){return n<0&&(n+=1),n>1&&(n-=1),n<1/6?e+(t-e)*6*n:n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function ym(e,t,n){const r=n<.5?n*(1+t):n+t-n*t,i=2*n-r,o=pf(i,r,e+1/3),s=pf(i,r,e),l=pf(i,r,e-1/3);return Math.round(o*255)<<24|Math.round(s*255)<<16|Math.round(l*255)<<8}function Bi(e){const t=parseInt(e,10);return t<0?0:t>255?255:t}function wm(e){return(parseFloat(e)%360+360)%360/360}function bm(e){const t=parseFloat(e);return t<0?0:t>1?255:Math.round(t*255)}function Il(e){const t=parseFloat(e);return t<0?0:t>100?1:t/100}function Cm(e){let t=Mb(e);if(t===null)return e;t=t||0;let n=(t&4278190080)>>>24,r=(t&16711680)>>>16,i=(t&65280)>>>8,o=(t&255)/255;return`rgba(${n}, ${r}, ${i}, ${o})`}const Ia=(e,t,n)=>{if(Z.fun(e))return e;if(Z.arr(e))return Ia({range:e,output:t,extrapolate:n});if(Z.str(e.output[0]))return Kh(e);const r=e,i=r.output,o=r.range||[0,1],s=r.extrapolateLeft||r.extrapolate||"extend",l=r.extrapolateRight||r.extrapolate||"extend",c=r.easing||(u=>u);return u=>{const d=Ab(u,o);return Tb(u,o[d],o[d+1],i[d],i[d+1],c,s,l,r.map)}};function Tb(e,t,n,r,i,o,s,l,c){let u=c?c(e):e;if(u<t){if(s==="identity")return u;s==="clamp"&&(u=t)}if(u>n){if(l==="identity")return u;l==="clamp"&&(u=n)}return r===i?r:t===n?e<=t?r:i:(t===-1/0?u=-u:n===1/0?u=u-t:u=(u-t)/(n-t),u=o(u),r===-1/0?u=-u:i===1/0?u=u+r:u=u*(i-r)+r,u)}function Ab(e,t){for(var n=1;n<t.length-1&&!(t[n]>=e);++n);return n-1}const Ib={linear:e=>e};function r1(){return r1=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},r1.apply(this,arguments)}const Ao=Symbol.for("FluidValue.get"),Fi=Symbol.for("FluidValue.observers"),rn=e=>!!(e&&e[Ao]),bt=e=>e&&e[Ao]?e[Ao]():e,km=e=>e[Fi]||null;function zb(e,t){e.eventObserved?e.eventObserved(t):e(t)}function za(e,t){let n=e[Fi];n&&n.forEach(r=>{zb(r,t)})}class T5{constructor(t){if(this[Ao]=void 0,this[Fi]=void 0,!t&&!(t=this.get))throw Error("Unknown getter");Db(this,t)}}const Db=(e,t)=>A5(e,Ao,t);function es(e,t){if(e[Ao]){let n=e[Fi];n||A5(e,Fi,n=new Set),n.has(t)||(n.add(t),e.observerAdded&&e.observerAdded(n.size,t))}return t}function Da(e,t){let n=e[Fi];if(n&&n.has(t)){const r=n.size-1;r?n.delete(t):e[Fi]=null,e.observerRemoved&&e.observerRemoved(r,t)}}const A5=(e,t,n)=>Object.defineProperty(e,t,{value:n,writable:!0,configurable:!0}),Rc=/[+\-]?(?:0|[1-9]\d*)(?:\.\d*)?(?:[eE][+\-]?\d+)?/g,Bb=/(#(?:[0-9a-f]{2}){2,4}|(#[0-9a-f]{3})|(rgb|hsl)a?\((-?\d+%?[,\s]+){2,3}\s*[\d\.]+%?\))/gi,jm=new RegExp(`(${Rc.source})(%|[a-z]+)`,"i"),Vb=/rgba\(([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+), ([0-9\.-]+)\)/gi,ad=/var\((--[a-zA-Z0-9-_]+),? ?([a-zA-Z0-9 ()%#.,-]+)?\)/,I5=e=>{const[t,n]=Wb(e);if(!t||Gh())return e;const r=window.getComputedStyle(document.documentElement).getPropertyValue(t);if(r)return r.trim();if(n&&n.startsWith("--")){const i=window.getComputedStyle(document.documentElement).getPropertyValue(n);return i||e}else{if(n&&ad.test(n))return I5(n);if(n)return n}return e},Wb=e=>{const t=ad.exec(e);if(!t)return[,];const[,n,r]=t;return[n,r]};let mf;const Ub=(e,t,n,r,i)=>`rgba(${Math.round(t)}, ${Math.round(n)}, ${Math.round(r)}, ${i})`,z5=e=>{mf||(mf=Wr?new RegExp(`(${Object.keys(Wr).join("|")})(?!\\w)`,"g"):/^\b$/);const t=e.output.map(o=>bt(o).replace(ad,I5).replace(Bb,Cm).replace(mf,Cm)),n=t.map(o=>o.match(Rc).map(Number)),i=n[0].map((o,s)=>n.map(l=>{if(!(s in l))throw Error('The arity of each "output" value must be equal');return l[s]})).map(o=>Ia(r1({},e,{output:o})));return o=>{var s;const l=!jm.test(t[0])&&((s=t.find(u=>jm.test(u)))==null?void 0:s.replace(Rc,""));let c=0;return t[0].replace(Rc,()=>`${i[c++](o)}${l||""}`).replace(Vb,Ub)}},Xh="react-spring: ",D5=e=>{const t=e;let n=!1;if(typeof t!="function")throw new TypeError(`${Xh}once requires a function parameter`);return(...r)=>{n||(t(...r),n=!0)}},Hb=D5(console.warn);function qb(){Hb(`${Xh}The "interpolate" function is deprecated in v9 (use "to" instead)`)}const Zb=D5(console.warn);function Qb(){Zb(`${Xh}Directly calling start instead of using the api object is deprecated in v9 (use ".start" instead), this will be removed in later 0.X.0 versions`)}function ld(e){return Z.str(e)&&(e[0]=="#"||/\d/.test(e)||!Gh()&&ad.test(e)||e in(Wr||{}))}const Jh=Gh()?f.useEffect:f.useLayoutEffect,Gb=()=>{const e=f.useRef(!1);return Jh(()=>(e.current=!0,()=>{e.current=!1}),[]),e};function B5(){const e=f.useState()[1],t=Gb();return()=>{t.current&&e(Math.random())}}function Kb(e,t){const[n]=f.useState(()=>({inputs:t,result:e()})),r=f.useRef(),i=r.current;let o=i;return o?t&&o.inputs&&Yb(t,o.inputs)||(o={inputs:t,result:e()}):o=n,f.useEffect(()=>{r.current=o,i==n&&(n.inputs=n.result=void 0)},[o]),o.result}function Yb(e,t){if(e.length!==t.length)return!1;for(let n=0;n<e.length;n++)if(e[n]!==t[n])return!1;return!0}const V5=e=>f.useEffect(e,Xb),Xb=[];function Em(e){const t=f.useRef();return f.useEffect(()=>{t.current=e}),t.current}const Ba=Symbol.for("Animated:node"),Jb=e=>!!e&&e[Ba]===e,In=e=>e&&e[Ba],ep=(e,t)=>Cb(e,Ba,t),cd=e=>e&&e[Ba]&&e[Ba].getPayload();class W5{constructor(){this.payload=void 0,ep(this,this)}getPayload(){return this.payload||[]}}class ts extends W5{constructor(t){super(),this.done=!0,this.elapsedTime=void 0,this.lastPosition=void 0,this.lastVelocity=void 0,this.v0=void 0,this.durationProgress=0,this._value=t,Z.num(this._value)&&(this.lastPosition=this._value)}static create(t){return new ts(t)}getPayload(){return[this]}getValue(){return this._value}setValue(t,n){return Z.num(t)&&(this.lastPosition=t,n&&(t=Math.round(t/n)*n,this.done&&(this.lastPosition=t))),this._value===t?!1:(this._value=t,!0)}reset(){const{done:t}=this;this.done=!1,Z.num(this._value)&&(this.elapsedTime=0,this.durationProgress=0,this.lastPosition=this._value,t&&(this.lastVelocity=null),this.v0=null)}}class Io extends ts{constructor(t){super(0),this._string=null,this._toString=void 0,this._toString=Ia({output:[t,t]})}static create(t){return new Io(t)}getValue(){let t=this._string;return t??(this._string=this._toString(this._value))}setValue(t){if(Z.str(t)){if(t==this._string)return!1;this._string=t,this._value=1}else if(super.setValue(t))this._string=null;else return!1;return!0}reset(t){t&&(this._toString=Ia({output:[this.getValue(),t]})),this._value=0,super.reset()}}const xu={dependencies:null};class ud extends W5{constructor(t){super(),this.source=t,this.setValue(t)}getValue(t){const n={};return qn(this.source,(r,i)=>{Jb(r)?n[i]=r.getValue(t):rn(r)?n[i]=bt(r):t||(n[i]=r)}),n}setValue(t){this.source=t,this.payload=this._makePayload(t)}reset(){this.payload&&ue(this.payload,t=>t.reset())}_makePayload(t){if(t){const n=new Set;return qn(t,this._addToPayload,n),Array.from(n)}}_addToPayload(t){xu.dependencies&&rn(t)&&xu.dependencies.add(t);const n=cd(t);n&&ue(n,r=>this.add(r))}}class tp extends ud{constructor(t){super(t)}static create(t){return new tp(t)}getValue(){return this.source.map(t=>t.getValue())}setValue(t){const n=this.getPayload();return t.length==n.length?n.map((r,i)=>r.setValue(t[i])).some(Boolean):(super.setValue(t.map(eC)),!0)}}function eC(e){return(ld(e)?Io:ts).create(e)}function i1(e){const t=In(e);return t?t.constructor:Z.arr(e)?tp:ld(e)?Io:ts}function yu(){return yu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},yu.apply(this,arguments)}const Sm=(e,t)=>{const n=!Z.fun(e)||e.prototype&&e.prototype.isReactComponent;return f.forwardRef((r,i)=>{const o=f.useRef(null),s=n&&f.useCallback(y=>{o.current=rC(i,y)},[i]),[l,c]=nC(r,t),u=B5(),d=()=>{const y=o.current;if(n&&!y)return;(y?t.applyAnimatedValues(y,l.getValue(!0)):!1)===!1&&u()},p=new tC(d,c),g=f.useRef();Jh(()=>(g.current=p,ue(c,y=>es(y,p)),()=>{g.current&&(ue(g.current.deps,y=>Da(y,g.current)),ie.cancel(g.current.update))})),f.useEffect(d,[]),V5(()=>()=>{const y=g.current;ue(y.deps,x=>Da(x,y))});const w=t.getComponentProps(l.getValue());return f.createElement(e,yu({},w,{ref:s}))})};class tC{constructor(t,n){this.update=t,this.deps=n}eventObserved(t){t.type=="change"&&ie.write(this.update)}}function nC(e,t){const n=new Set;return xu.dependencies=n,e.style&&(e=yu({},e,{style:t.createAnimatedStyle(e.style)})),e=new ud(e),xu.dependencies=null,[e,n]}function rC(e,t){return e&&(Z.fun(e)?e(t):e.current=t),t}const Lm=Symbol.for("AnimatedComponent"),iC=(e,{applyAnimatedValues:t=()=>!1,createAnimatedStyle:n=i=>new ud(i),getComponentProps:r=i=>i}={})=>{const i={applyAnimatedValues:t,createAnimatedStyle:n,getComponentProps:r},o=s=>{const l=$m(s)||"Anonymous";return Z.str(s)?s=o[s]||(o[s]=Sm(s,i)):s=s[Lm]||(s[Lm]=Sm(s,i)),s.displayName=`Animated(${l})`,s};return qn(e,(s,l)=>{Z.arr(e)&&(l=$m(s)),o[l]=o(s)}),{animated:o}},$m=e=>Z.str(e)?e:e&&Z.str(e.displayName)?e.displayName:Z.fun(e)&&e.name||null;function Ye(){return Ye=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Ye.apply(this,arguments)}function ui(e,...t){return Z.fun(e)?e(...t):e}const ua=(e,t)=>e===!0||!!(t&&e&&(Z.fun(e)?e(t):Bt(e).includes(t))),U5=(e,t)=>Z.obj(e)?t&&e[t]:e,H5=(e,t)=>e.default===!0?e[t]:e.default?e.default[t]:void 0,oC=e=>e,np=(e,t=oC)=>{let n=sC;e.default&&e.default!==!0&&(e=e.default,n=Object.keys(e));const r={};for(const i of n){const o=t(e[i],i);Z.und(o)||(r[i]=o)}return r},sC=["config","onProps","onStart","onChange","onPause","onResume","onRest"],aC={config:1,from:1,to:1,ref:1,loop:1,reset:1,pause:1,cancel:1,reverse:1,immediate:1,default:1,delay:1,onProps:1,onStart:1,onChange:1,onPause:1,onResume:1,onRest:1,onResolve:1,items:1,trail:1,sort:1,expires:1,initial:1,enter:1,update:1,leave:1,children:1,onDestroyed:1,keys:1,callId:1,parentId:1};function lC(e){const t={};let n=0;if(qn(e,(r,i)=>{aC[i]||(t[i]=r,n++)}),n)return t}function q5(e){const t=lC(e);if(t){const n={to:t};return qn(e,(r,i)=>i in t||(n[i]=r)),n}return Ye({},e)}function Va(e){return e=bt(e),Z.arr(e)?e.map(Va):ld(e)?Zn.createStringInterpolator({range:[0,1],output:[e,e]})(1):e}function cC(e){for(const t in e)return!0;return!1}function o1(e){return Z.fun(e)||Z.arr(e)&&Z.obj(e[0])}function uC(e,t){var n;(n=e.ref)==null||n.delete(e),t==null||t.delete(e)}function dC(e,t){if(t&&e.ref!==t){var n;(n=e.ref)==null||n.delete(e),t.add(e),e.ref=t}}const fC={default:{tension:170,friction:26}},s1=Ye({},fC.default,{mass:1,damping:1,easing:Ib.linear,clamp:!1});class hC{constructor(){this.tension=void 0,this.friction=void 0,this.frequency=void 0,this.damping=void 0,this.mass=void 0,this.velocity=0,this.restVelocity=void 0,this.precision=void 0,this.progress=void 0,this.duration=void 0,this.easing=void 0,this.clamp=void 0,this.bounce=void 0,this.decay=void 0,this.round=void 0,Object.assign(this,s1)}}function pC(e,t,n){n&&(n=Ye({},n),_m(n,t),t=Ye({},n,t)),_m(e,t),Object.assign(e,t);for(const s in s1)e[s]==null&&(e[s]=s1[s]);let{mass:r,frequency:i,damping:o}=e;return Z.und(i)||(i<.01&&(i=.01),o<0&&(o=0),e.tension=Math.pow(2*Math.PI/i,2)*r,e.friction=4*Math.PI*o*r/i),e}function _m(e,t){if(!Z.und(t.decay))e.duration=void 0;else{const n=!Z.und(t.tension)||!Z.und(t.friction);(n||!Z.und(t.frequency)||!Z.und(t.damping)||!Z.und(t.mass))&&(e.duration=void 0,e.decay=void 0),n&&(e.frequency=void 0)}}const Fm=[];class mC{constructor(){this.changed=!1,this.values=Fm,this.toValues=null,this.fromValues=Fm,this.to=void 0,this.from=void 0,this.config=new hC,this.immediate=!1}}function Z5(e,{key:t,props:n,defaultProps:r,state:i,actions:o}){return new Promise((s,l)=>{var c;let u,d,p=ua((c=n.cancel)!=null?c:r==null?void 0:r.cancel,t);if(p)y();else{Z.und(n.pause)||(i.paused=ua(n.pause,t));let x=r==null?void 0:r.pause;x!==!0&&(x=i.paused||ua(x,t)),u=ui(n.delay||0,t),x?(i.resumeQueue.add(w),o.pause()):(o.resume(),w())}function g(){i.resumeQueue.add(w),i.timeouts.delete(d),d.cancel(),u=d.time-ie.now()}function w(){u>0&&!Zn.skipAnimation?(i.delayed=!0,d=ie.setTimeout(y,u),i.pauseQueue.add(g),i.timeouts.add(d)):y()}function y(){i.delayed&&(i.delayed=!1),i.pauseQueue.delete(g),i.timeouts.delete(d),e<=(i.cancelId||0)&&(p=!0);try{o.start(Ye({},n,{callId:e,cancel:p}),s)}catch(x){l(x)}}})}const rp=(e,t)=>t.length==1?t[0]:t.some(n=>n.cancelled)?Eo(e.get()):t.every(n=>n.noop)?Q5(e.get()):bn(e.get(),t.every(n=>n.finished)),Q5=e=>({value:e,noop:!0,finished:!0,cancelled:!1}),bn=(e,t,n=!1)=>({value:e,finished:t,cancelled:n}),Eo=e=>({value:e,cancelled:!0,finished:!1});function G5(e,t,n,r){const{callId:i,parentId:o,onRest:s}=t,{asyncTo:l,promise:c}=n;return!o&&e===l&&!t.reset?c:n.promise=(async()=>{n.asyncId=i,n.asyncTo=e;const u=np(t,(C,m)=>m==="onRest"?void 0:C);let d,p;const g=new Promise((C,m)=>(d=C,p=m)),w=C=>{const m=i<=(n.cancelId||0)&&Eo(r)||i!==n.asyncId&&bn(r,!1);if(m)throw C.result=m,p(C),C},y=(C,m)=>{const v=new Om,h=new Nm;return(async()=>{if(Zn.skipAnimation)throw Wa(n),h.result=bn(r,!1),p(h),h;w(v);const b=Z.obj(C)?Ye({},C):Ye({},m,{to:C});b.parentId=i,qn(u,(E,$)=>{Z.und(b[$])&&(b[$]=E)});const j=await r.start(b);return w(v),n.paused&&await new Promise(E=>{n.resumeQueue.add(E)}),j})()};let x;if(Zn.skipAnimation)return Wa(n),bn(r,!1);try{let C;Z.arr(e)?C=(async m=>{for(const v of m)await y(v)})(e):C=Promise.resolve(e(y,r.stop.bind(r))),await Promise.all([C.then(d),g]),x=bn(r.get(),!0,!1)}catch(C){if(C instanceof Om)x=C.result;else if(C instanceof Nm)x=C.result;else throw C}finally{i==n.asyncId&&(n.asyncId=o,n.asyncTo=o?l:void 0,n.promise=o?c:void 0)}return Z.fun(s)&&ie.batchedUpdates(()=>{s(x,r,r.item)}),x})()}function Wa(e,t){la(e.timeouts,n=>n.cancel()),e.pauseQueue.clear(),e.resumeQueue.clear(),e.asyncId=e.asyncTo=e.promise=void 0,t&&(e.cancelId=t)}class Om extends Error{constructor(){super("An async animation has been interrupted. You see this error because you forgot to use `await` or `.catch(...)` on its returned promise."),this.result=void 0}}class Nm extends Error{constructor(){super("SkipAnimationSignal"),this.result=void 0}}const a1=e=>e instanceof ip;let gC=1;class ip extends T5{constructor(...t){super(...t),this.id=gC++,this.key=void 0,this._priority=0}get priority(){return this._priority}set priority(t){this._priority!=t&&(this._priority=t,this._onPriorityChange(t))}get(){const t=In(this);return t&&t.getValue()}to(...t){return Zn.to(this,t)}interpolate(...t){return qb(),Zn.to(this,t)}toJSON(){return this.get()}observerAdded(t){t==1&&this._attach()}observerRemoved(t){t==0&&this._detach()}_attach(){}_detach(){}_onChange(t,n=!1){za(this,{type:"change",parent:this,value:t,idle:n})}_onPriorityChange(t){this.idle||od.sort(this),za(this,{type:"priority",parent:this,priority:t})}}const Oi=Symbol.for("SpringPhase"),K5=1,Y5=2,X5=4,gf=e=>(e[Oi]&K5)>0,gr=e=>(e[Oi]&Y5)>0,ws=e=>(e[Oi]&X5)>0,Pm=(e,t)=>t?e[Oi]|=Y5|K5:e[Oi]&=-3,Rm=(e,t)=>t?e[Oi]|=X5:e[Oi]&=-5;class vC extends ip{constructor(t,n){if(super(),this.key=void 0,this.animation=new mC,this.queue=void 0,this.defaultProps={},this._state={paused:!1,delayed:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._pendingCalls=new Set,this._lastCallId=0,this._lastToId=0,this._memoizedDuration=0,!Z.und(t)||!Z.und(n)){const r=Z.obj(t)?Ye({},t):Ye({},n,{from:t});Z.und(r.default)&&(r.default=!0),this.start(r)}}get idle(){return!(gr(this)||this._state.asyncTo)||ws(this)}get goal(){return bt(this.animation.to)}get velocity(){const t=In(this);return t instanceof ts?t.lastVelocity||0:t.getPayload().map(n=>n.lastVelocity||0)}get hasAnimated(){return gf(this)}get isAnimating(){return gr(this)}get isPaused(){return ws(this)}get isDelayed(){return this._state.delayed}advance(t){let n=!0,r=!1;const i=this.animation;let{config:o,toValues:s}=i;const l=cd(i.to);!l&&rn(i.to)&&(s=Bt(bt(i.to))),i.values.forEach((d,p)=>{if(d.done)return;const g=d.constructor==Io?1:l?l[p].lastPosition:s[p];let w=i.immediate,y=g;if(!w){if(y=d.lastPosition,o.tension<=0){d.done=!0;return}let x=d.elapsedTime+=t;const C=i.fromValues[p],m=d.v0!=null?d.v0:d.v0=Z.arr(o.velocity)?o.velocity[p]:o.velocity;let v;const h=o.precision||(C==g?.005:Math.min(1,Math.abs(g-C)*.001));if(Z.und(o.duration))if(o.decay){const b=o.decay===!0?.998:o.decay,j=Math.exp(-(1-b)*x);y=C+m/(1-b)*(1-j),w=Math.abs(d.lastPosition-y)<=h,v=m*j}else{v=d.lastVelocity==null?m:d.lastVelocity;const b=o.restVelocity||h/10,j=o.clamp?0:o.bounce,E=!Z.und(j),$=C==g?d.v0>0:C<g;let F,M=!1;const R=1,D=Math.ceil(t/R);for(let T=0;T<D&&(F=Math.abs(v)>b,!(!F&&(w=Math.abs(g-y)<=h,w)));++T){E&&(M=y==g||y>g==$,M&&(v=-v*j,y=g));const V=-o.tension*1e-6*(y-g),z=-o.friction*.001*v,I=(V+z)/o.mass;v=v+I*R,y=y+v*R}}else{let b=1;o.duration>0&&(this._memoizedDuration!==o.duration&&(this._memoizedDuration=o.duration,d.durationProgress>0&&(d.elapsedTime=o.duration*d.durationProgress,x=d.elapsedTime+=t)),b=(o.progress||0)+x/this._memoizedDuration,b=b>1?1:b<0?0:b,d.durationProgress=b),y=C+o.easing(b)*(g-C),v=(y-d.lastPosition)/t,w=b==1}d.lastVelocity=v,Number.isNaN(y)&&(console.warn("Got NaN while animating:",this),w=!0)}l&&!l[p].done&&(w=!1),w?d.done=!0:n=!1,d.setValue(y,o.round)&&(r=!0)});const c=In(this),u=c.getValue();if(n){const d=bt(i.to);(u!==d||r)&&!o.decay?(c.setValue(d),this._onChange(d)):r&&o.decay&&this._onChange(u),this._stop()}else r&&this._onChange(u)}set(t){return ie.batchedUpdates(()=>{this._stop(),this._focus(t),this._set(t)}),this}pause(){this._update({pause:!0})}resume(){this._update({pause:!1})}finish(){if(gr(this)){const{to:t,config:n}=this.animation;ie.batchedUpdates(()=>{this._onStart(),n.decay||this._set(t,!1),this._stop()})}return this}update(t){return(this.queue||(this.queue=[])).push(t),this}start(t,n){let r;return Z.und(t)?(r=this.queue||[],this.queue=[]):r=[Z.obj(t)?t:Ye({},n,{to:t})],Promise.all(r.map(i=>this._update(i))).then(i=>rp(this,i))}stop(t){const{to:n}=this.animation;return this._focus(this.get()),Wa(this._state,t&&this._lastCallId),ie.batchedUpdates(()=>this._stop(n,t)),this}reset(){this._update({reset:!0})}eventObserved(t){t.type=="change"?this._start():t.type=="priority"&&(this.priority=t.priority+1)}_prepareNode(t){const n=this.key||"";let{to:r,from:i}=t;r=Z.obj(r)?r[n]:r,(r==null||o1(r))&&(r=void 0),i=Z.obj(i)?i[n]:i,i==null&&(i=void 0);const o={to:r,from:i};return gf(this)||(t.reverse&&([r,i]=[i,r]),i=bt(i),Z.und(i)?In(this)||this._set(r):this._set(i)),o}_update(t,n){let r=Ye({},t);const{key:i,defaultProps:o}=this;r.default&&Object.assign(o,np(r,(c,u)=>/^on/.test(u)?U5(c,i):c)),Tm(this,r,"onProps"),Cs(this,"onProps",r,this);const s=this._prepareNode(r);if(Object.isFrozen(this))throw Error("Cannot animate a `SpringValue` object that is frozen. Did you forget to pass your component to `animated(...)` before animating its props?");const l=this._state;return Z5(++this._lastCallId,{key:i,props:r,defaultProps:o,state:l,actions:{pause:()=>{ws(this)||(Rm(this,!0),Zs(l.pauseQueue),Cs(this,"onPause",bn(this,bs(this,this.animation.to)),this))},resume:()=>{ws(this)&&(Rm(this,!1),gr(this)&&this._resume(),Zs(l.resumeQueue),Cs(this,"onResume",bn(this,bs(this,this.animation.to)),this))},start:this._merge.bind(this,s)}}).then(c=>{if(r.loop&&c.finished&&!(n&&c.noop)){const u=J5(r);if(u)return this._update(u,!0)}return c})}_merge(t,n,r){if(n.cancel)return this.stop(!0),r(Eo(this));const i=!Z.und(t.to),o=!Z.und(t.from);if(i||o)if(n.callId>this._lastToId)this._lastToId=n.callId;else return r(Eo(this));const{key:s,defaultProps:l,animation:c}=this,{to:u,from:d}=c;let{to:p=u,from:g=d}=t;o&&!i&&(!n.default||Z.und(p))&&(p=g),n.reverse&&([p,g]=[g,p]);const w=!nr(g,d);w&&(c.from=g),g=bt(g);const y=!nr(p,u);y&&this._focus(p);const x=o1(n.to),{config:C}=c,{decay:m,velocity:v}=C;(i||o)&&(C.velocity=0),n.config&&!x&&pC(C,ui(n.config,s),n.config!==l.config?ui(l.config,s):void 0);let h=In(this);if(!h||Z.und(p))return r(bn(this,!0));const b=Z.und(n.reset)?o&&!n.default:!Z.und(g)&&ua(n.reset,s),j=b?g:this.get(),E=Va(p),$=Z.num(E)||Z.arr(E)||ld(E),F=!x&&(!$||ua(l.immediate||n.immediate,s));if(y){const T=i1(p);if(T!==h.constructor)if(F)h=this._set(E);else throw Error(`Cannot animate between ${h.constructor.name} and ${T.name}, as the "to" prop suggests`)}const M=h.constructor;let R=rn(p),D=!1;if(!R){const T=b||!gf(this)&&w;(y||T)&&(D=nr(Va(j),E),R=!D),(!nr(c.immediate,F)&&!F||!nr(C.decay,m)||!nr(C.velocity,v))&&(R=!0)}if(D&&gr(this)&&(c.changed&&!b?R=!0:R||this._stop(u)),!x&&((R||rn(u))&&(c.values=h.getPayload(),c.toValues=rn(p)?null:M==Io?[1]:Bt(E)),c.immediate!=F&&(c.immediate=F,!F&&!b&&this._set(u)),R)){const{onRest:T}=c;ue(yC,z=>Tm(this,n,z));const V=bn(this,bs(this,u));Zs(this._pendingCalls,V),this._pendingCalls.add(r),c.changed&&ie.batchedUpdates(()=>{c.changed=!b,T==null||T(V,this),b?ui(l.onRest,V):c.onStart==null||c.onStart(V,this)})}b&&this._set(j),x?r(G5(n.to,n,this._state,this)):R?this._start():gr(this)&&!y?this._pendingCalls.add(r):r(Q5(j))}_focus(t){const n=this.animation;t!==n.to&&(km(this)&&this._detach(),n.to=t,km(this)&&this._attach())}_attach(){let t=0;const{to:n}=this.animation;rn(n)&&(es(n,this),a1(n)&&(t=n.priority+1)),this.priority=t}_detach(){const{to:t}=this.animation;rn(t)&&Da(t,this)}_set(t,n=!0){const r=bt(t);if(!Z.und(r)){const i=In(this);if(!i||!nr(r,i.getValue())){const o=i1(r);!i||i.constructor!=o?ep(this,o.create(r)):i.setValue(r),i&&ie.batchedUpdates(()=>{this._onChange(r,n)})}}return In(this)}_onStart(){const t=this.animation;t.changed||(t.changed=!0,Cs(this,"onStart",bn(this,bs(this,t.to)),this))}_onChange(t,n){n||(this._onStart(),ui(this.animation.onChange,t,this)),ui(this.defaultProps.onChange,t,this),super._onChange(t,n)}_start(){const t=this.animation;In(this).reset(bt(t.to)),t.immediate||(t.fromValues=t.values.map(n=>n.lastPosition)),gr(this)||(Pm(this,!0),ws(this)||this._resume())}_resume(){Zn.skipAnimation?this.finish():od.start(this)}_stop(t,n){if(gr(this)){Pm(this,!1);const r=this.animation;ue(r.values,o=>{o.done=!0}),r.toValues&&(r.onChange=r.onPause=r.onResume=void 0),za(this,{type:"idle",parent:this});const i=n?Eo(this.get()):bn(this.get(),bs(this,t??r.to));Zs(this._pendingCalls,i),r.changed&&(r.changed=!1,Cs(this,"onRest",i,this))}}}function bs(e,t){const n=Va(t),r=Va(e.get());return nr(r,n)}function J5(e,t=e.loop,n=e.to){let r=ui(t);if(r){const i=r!==!0&&q5(r),o=(i||e).reverse,s=!i||i.reset;return Ua(Ye({},e,{loop:t,default:!1,pause:void 0,to:!o||o1(n)?n:void 0,from:s?e.from:void 0,reset:s},i))}}function Ua(e){const{to:t,from:n}=e=q5(e),r=new Set;return Z.obj(t)&&Mm(t,r),Z.obj(n)&&Mm(n,r),e.keys=r.size?Array.from(r):null,e}function xC(e){const t=Ua(e);return Z.und(t.default)&&(t.default=np(t)),t}function Mm(e,t){qn(e,(n,r)=>n!=null&&t.add(r))}const yC=["onStart","onRest","onChange","onPause","onResume"];function Tm(e,t,n){e.animation[n]=t[n]!==H5(t,n)?U5(t[n],e.key):void 0}function Cs(e,t,...n){var r,i,o,s;(r=(i=e.animation)[t])==null||r.call(i,...n),(o=(s=e.defaultProps)[t])==null||o.call(s,...n)}const wC=["onStart","onChange","onRest"];let bC=1,CC=class{constructor(t,n){this.id=bC++,this.springs={},this.queue=[],this.ref=void 0,this._flush=void 0,this._initialProps=void 0,this._lastAsyncId=0,this._active=new Set,this._changed=new Set,this._started=!1,this._item=void 0,this._state={paused:!1,pauseQueue:new Set,resumeQueue:new Set,timeouts:new Set},this._events={onStart:new Map,onChange:new Map,onRest:new Map},this._onFrame=this._onFrame.bind(this),n&&(this._flush=n),t&&this.start(Ye({default:!0},t))}get idle(){return!this._state.asyncTo&&Object.values(this.springs).every(t=>t.idle&&!t.isDelayed&&!t.isPaused)}get item(){return this._item}set item(t){this._item=t}get(){const t={};return this.each((n,r)=>t[r]=n.get()),t}set(t){for(const n in t){const r=t[n];Z.und(r)||this.springs[n].set(r)}}update(t){return t&&this.queue.push(Ua(t)),this}start(t){let{queue:n}=this;return t?n=Bt(t).map(Ua):this.queue=[],this._flush?this._flush(this,n):(i6(this,n),l1(this,n))}stop(t,n){if(t!==!!t&&(n=t),n){const r=this.springs;ue(Bt(n),i=>r[i].stop(!!t))}else Wa(this._state,this._lastAsyncId),this.each(r=>r.stop(!!t));return this}pause(t){if(Z.und(t))this.start({pause:!0});else{const n=this.springs;ue(Bt(t),r=>n[r].pause())}return this}resume(t){if(Z.und(t))this.start({pause:!1});else{const n=this.springs;ue(Bt(t),r=>n[r].resume())}return this}each(t){qn(this.springs,t)}_onFrame(){const{onStart:t,onChange:n,onRest:r}=this._events,i=this._active.size>0,o=this._changed.size>0;(i&&!this._started||o&&!this._started)&&(this._started=!0,la(t,([c,u])=>{u.value=this.get(),c(u,this,this._item)}));const s=!i&&this._started,l=o||s&&r.size?this.get():null;o&&n.size&&la(n,([c,u])=>{u.value=l,c(u,this,this._item)}),s&&(this._started=!1,la(r,([c,u])=>{u.value=l,c(u,this,this._item)}))}eventObserved(t){if(t.type=="change")this._changed.add(t.parent),t.idle||this._active.add(t.parent);else if(t.type=="idle")this._active.delete(t.parent);else return;ie.onFrame(this._onFrame)}};function l1(e,t){return Promise.all(t.map(n=>e6(e,n))).then(n=>rp(e,n))}async function e6(e,t,n){const{keys:r,to:i,from:o,loop:s,onRest:l,onResolve:c}=t,u=Z.obj(t.default)&&t.default;s&&(t.loop=!1),i===!1&&(t.to=null),o===!1&&(t.from=null);const d=Z.arr(i)||Z.fun(i)?i:void 0;d?(t.to=void 0,t.onRest=void 0,u&&(u.onRest=void 0)):ue(wC,x=>{const C=t[x];if(Z.fun(C)){const m=e._events[x];t[x]=({finished:v,cancelled:h})=>{const b=m.get(C);b?(v||(b.finished=!1),h&&(b.cancelled=!0)):m.set(C,{value:null,finished:v||!1,cancelled:h||!1})},u&&(u[x]=t[x])}});const p=e._state;t.pause===!p.paused?(p.paused=t.pause,Zs(t.pause?p.pauseQueue:p.resumeQueue)):p.paused&&(t.pause=!0);const g=(r||Object.keys(e.springs)).map(x=>e.springs[x].start(t)),w=t.cancel===!0||H5(t,"cancel")===!0;(d||w&&p.asyncId)&&g.push(Z5(++e._lastAsyncId,{props:t,state:p,actions:{pause:t1,resume:t1,start(x,C){w?(Wa(p,e._lastAsyncId),C(Eo(e))):(x.onRest=l,C(G5(d,x,p,e)))}}})),p.paused&&await new Promise(x=>{p.resumeQueue.add(x)});const y=rp(e,await Promise.all(g));if(s&&y.finished&&!(n&&y.noop)){const x=J5(t,s,i);if(x)return i6(e,[x]),e6(e,x,!0)}return c&&ie.batchedUpdates(()=>c(y,e,e.item)),y}function Am(e,t){const n=Ye({},e.springs);return t&&ue(Bt(t),r=>{Z.und(r.keys)&&(r=Ua(r)),Z.obj(r.to)||(r=Ye({},r,{to:void 0})),r6(n,r,i=>n6(i))}),t6(e,n),n}function t6(e,t){qn(t,(n,r)=>{e.springs[r]||(e.springs[r]=n,es(n,e))})}function n6(e,t){const n=new vC;return n.key=e,t&&es(n,t),n}function r6(e,t,n){t.keys&&ue(t.keys,r=>{(e[r]||(e[r]=n(r)))._prepareNode(t)})}function i6(e,t){ue(t,n=>{r6(e.springs,n,r=>n6(r,e))})}function kC(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const jC=["children"],dd=e=>{let{children:t}=e,n=kC(e,jC);const r=f.useContext(wu),i=n.pause||!!r.pause,o=n.immediate||!!r.immediate;n=Kb(()=>({pause:i,immediate:o}),[i,o]);const{Provider:s}=wu;return f.createElement(s,{value:n},t)},wu=EC(dd,{});dd.Provider=wu.Provider;dd.Consumer=wu.Consumer;function EC(e,t){return Object.assign(e,f.createContext(t)),e.Provider._context=e,e.Consumer._context=e,e}const SC=()=>{const e=[],t=function(i){Qb();const o=[];return ue(e,(s,l)=>{if(Z.und(i))o.push(s.start());else{const c=n(i,s,l);c&&o.push(s.start(c))}}),o};t.current=e,t.add=function(r){e.includes(r)||e.push(r)},t.delete=function(r){const i=e.indexOf(r);~i&&e.splice(i,1)},t.pause=function(){return ue(e,r=>r.pause(...arguments)),this},t.resume=function(){return ue(e,r=>r.resume(...arguments)),this},t.set=function(r){ue(e,i=>i.set(r))},t.start=function(r){const i=[];return ue(e,(o,s)=>{if(Z.und(r))i.push(o.start());else{const l=this._getProps(r,o,s);l&&i.push(o.start(l))}}),i},t.stop=function(){return ue(e,r=>r.stop(...arguments)),this},t.update=function(r){return ue(e,(i,o)=>i.update(this._getProps(r,i,o))),this};const n=function(i,o,s){return Z.fun(i)?i(s,o):i};return t._getProps=n,t};function LC(e,t,n){const r=Z.fun(t)&&t;r&&!n&&(n=[]);const i=f.useMemo(()=>r||arguments.length==3?SC():void 0,[]),o=f.useRef(0),s=B5(),l=f.useMemo(()=>({ctrls:[],queue:[],flush(m,v){const h=Am(m,v);return o.current>0&&!l.queue.length&&!Object.keys(h).some(j=>!m.springs[j])?l1(m,v):new Promise(j=>{t6(m,h),l.queue.push(()=>{j(l1(m,v))}),s()})}}),[]),c=f.useRef([...l.ctrls]),u=[],d=Em(e)||0;f.useMemo(()=>{ue(c.current.slice(e,d),m=>{uC(m,i),m.stop(!0)}),c.current.length=e,p(d,e)},[e]),f.useMemo(()=>{p(0,Math.min(d,e))},n);function p(m,v){for(let h=m;h<v;h++){const b=c.current[h]||(c.current[h]=new CC(null,l.flush)),j=r?r(h,b):t[h];j&&(u[h]=xC(j))}}const g=c.current.map((m,v)=>Am(m,u[v])),w=f.useContext(dd),y=Em(w),x=w!==y&&cC(w);Jh(()=>{o.current++,l.ctrls=c.current;const{queue:m}=l;m.length&&(l.queue=[],ue(m,v=>v())),ue(c.current,(v,h)=>{i==null||i.add(v),x&&v.start({default:w});const b=u[h];b&&(dC(v,b.ref),v.ref?v.queue.push(b):v.start(b))})}),V5(()=>()=>{ue(l.ctrls,m=>m.stop(!0))});const C=g.map(m=>Ye({},m));return i?[C,i]:C}function Un(e,t){const n=Z.fun(e),[[r],i]=LC(1,n?e:[e],n?t||[]:t);return n||arguments.length==2?[r,i]:r}let Im;(function(e){e.MOUNT="mount",e.ENTER="enter",e.UPDATE="update",e.LEAVE="leave"})(Im||(Im={}));class $C extends ip{constructor(t,n){super(),this.key=void 0,this.idle=!0,this.calc=void 0,this._active=new Set,this.source=t,this.calc=Ia(...n);const r=this._get(),i=i1(r);ep(this,i.create(r))}advance(t){const n=this._get(),r=this.get();nr(n,r)||(In(this).setValue(n),this._onChange(n,this.idle)),!this.idle&&zm(this._active)&&vf(this)}_get(){const t=Z.arr(this.source)?this.source.map(bt):Bt(bt(this.source));return this.calc(...t)}_start(){this.idle&&!zm(this._active)&&(this.idle=!1,ue(cd(this),t=>{t.done=!1}),Zn.skipAnimation?(ie.batchedUpdates(()=>this.advance()),vf(this)):od.start(this))}_attach(){let t=1;ue(Bt(this.source),n=>{rn(n)&&es(n,this),a1(n)&&(n.idle||this._active.add(n),t=Math.max(t,n.priority+1))}),this.priority=t,this._start()}_detach(){ue(Bt(this.source),t=>{rn(t)&&Da(t,this)}),this._active.clear(),vf(this)}eventObserved(t){t.type=="change"?t.idle?this.advance():(this._active.add(t.parent),this._start()):t.type=="idle"?this._active.delete(t.parent):t.type=="priority"&&(this.priority=Bt(this.source).reduce((n,r)=>Math.max(n,(a1(r)?r.priority:0)+1),0))}}function _C(e){return e.idle!==!1}function zm(e){return!e.size||Array.from(e).every(_C)}function vf(e){e.idle||(e.idle=!0,ue(cd(e),t=>{t.done=!0}),za(e,{type:"idle",parent:e}))}Zn.assign({createStringInterpolator:z5,to:(e,t)=>new $C(e,t)});function op(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}const FC=["style","children","scrollTop","scrollLeft","viewBox"],o6=/^--/;function OC(e,t){return t==null||typeof t=="boolean"||t===""?"":typeof t=="number"&&t!==0&&!o6.test(e)&&!(da.hasOwnProperty(e)&&da[e])?t+"px":(""+t).trim()}const Dm={};function NC(e,t){if(!e.nodeType||!e.setAttribute)return!1;const n=e.nodeName==="filter"||e.parentNode&&e.parentNode.nodeName==="filter",r=t,{style:i,children:o,scrollTop:s,scrollLeft:l,viewBox:c}=r,u=op(r,FC),d=Object.values(u),p=Object.keys(u).map(g=>n||e.hasAttribute(g)?g:Dm[g]||(Dm[g]=g.replace(/([A-Z])/g,w=>"-"+w.toLowerCase())));o!==void 0&&(e.textContent=o);for(let g in i)if(i.hasOwnProperty(g)){const w=OC(g,i[g]);o6.test(g)?e.style.setProperty(g,w):e.style[g]=w}p.forEach((g,w)=>{e.setAttribute(g,d[w])}),s!==void 0&&(e.scrollTop=s),l!==void 0&&(e.scrollLeft=l),c!==void 0&&e.setAttribute("viewBox",c)}let da={animationIterationCount:!0,borderImageOutset:!0,borderImageSlice:!0,borderImageWidth:!0,boxFlex:!0,boxFlexGroup:!0,boxOrdinalGroup:!0,columnCount:!0,columns:!0,flex:!0,flexGrow:!0,flexPositive:!0,flexShrink:!0,flexNegative:!0,flexOrder:!0,gridRow:!0,gridRowEnd:!0,gridRowSpan:!0,gridRowStart:!0,gridColumn:!0,gridColumnEnd:!0,gridColumnSpan:!0,gridColumnStart:!0,fontWeight:!0,lineClamp:!0,lineHeight:!0,opacity:!0,order:!0,orphans:!0,tabSize:!0,widows:!0,zIndex:!0,zoom:!0,fillOpacity:!0,floodOpacity:!0,stopOpacity:!0,strokeDasharray:!0,strokeDashoffset:!0,strokeMiterlimit:!0,strokeOpacity:!0,strokeWidth:!0};const PC=(e,t)=>e+t.charAt(0).toUpperCase()+t.substring(1),RC=["Webkit","Ms","Moz","O"];da=Object.keys(da).reduce((e,t)=>(RC.forEach(n=>e[PC(n,t)]=e[t]),e),da);const MC=["x","y","z"],TC=/^(matrix|translate|scale|rotate|skew)/,AC=/^(translate)/,IC=/^(rotate|skew)/,xf=(e,t)=>Z.num(e)&&e!==0?e+t:e,Mc=(e,t)=>Z.arr(e)?e.every(n=>Mc(n,t)):Z.num(e)?e===t:parseFloat(e)===t;class zC extends ud{constructor(t){let{x:n,y:r,z:i}=t,o=op(t,MC);const s=[],l=[];(n||r||i)&&(s.push([n||0,r||0,i||0]),l.push(c=>[`translate3d(${c.map(u=>xf(u,"px")).join(",")})`,Mc(c,0)])),qn(o,(c,u)=>{if(u==="transform")s.push([c||""]),l.push(d=>[d,d===""]);else if(TC.test(u)){if(delete o[u],Z.und(c))return;const d=AC.test(u)?"px":IC.test(u)?"deg":"";s.push(Bt(c)),l.push(u==="rotate3d"?([p,g,w,y])=>[`rotate3d(${p},${g},${w},${xf(y,d)})`,Mc(y,0)]:p=>[`${u}(${p.map(g=>xf(g,d)).join(",")})`,Mc(p,u.startsWith("scale")?1:0)])}}),s.length&&(o.transform=new DC(s,l)),super(o)}}class DC extends T5{constructor(t,n){super(),this._value=null,this.inputs=t,this.transforms=n}get(){return this._value||(this._value=this._get())}_get(){let t="",n=!0;return ue(this.inputs,(r,i)=>{const o=bt(r[0]),[s,l]=this.transforms[i](Z.arr(o)?o:r.map(bt));t+=" "+s,n=n&&l}),n?"none":t}observerAdded(t){t==1&&ue(this.inputs,n=>ue(n,r=>rn(r)&&es(r,this)))}observerRemoved(t){t==0&&ue(this.inputs,n=>ue(n,r=>rn(r)&&Da(r,this)))}eventObserved(t){t.type=="change"&&(this._value=null),za(this,t)}}const BC=["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","head","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","title","tr","track","u","ul","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"],VC=["scrollTop","scrollLeft"];Zn.assign({batchedUpdates:Xo.unstable_batchedUpdates,createStringInterpolator:z5,colors:Sb});const WC=iC(BC,{applyAnimatedValues:NC,createAnimatedStyle:e=>new zC(e),getComponentProps:e=>op(e,VC)}),Et=WC.animated;function UC(e){return(typeof e=="function"?e():e)||document.body}function fd(e,t){if(Jo&&e){const n=UC(e);return Xo.createPortal(t,n)}return t}function HC(e){const t=f.useRef(e);return e&&(t.current=!0),!!t.current}const hd=e=>s6(e.active,e.forceRender,e.destroyOnClose)?e.children:null;function s6(e,t,n){const r=HC(e);return t||e?!0:r?!n:!1}const qC={click:"onClick",touchstart:"onTouchStart"};function zo(e,t){const n=Object.assign({},t.props);for(const r of e){const i=qC[r];n[i]=function(o){var s,l;o.stopPropagation(),(l=(s=t.props)[i])===null||l===void 0||l.call(s,o)}}return k.cloneElement(t,n)}const yf="adm-mask",ZC={default:.55,thin:.35,thick:.75},QC={black:"0, 0, 0",white:"255, 255, 255"},GC={visible:!0,destroyOnClose:!1,forceRender:!1,color:"black",opacity:"default",disableBodyScroll:!0,getContainer:null,stopPropagation:["click"]},sp=e=>{const t=oe(GC,e),{locale:n}=xt(),r=f.useRef(null);Wh(r,t.visible&&t.disableBodyScroll);const i=f.useMemo(()=>{var d;const p=(d=ZC[t.opacity])!==null&&d!==void 0?d:t.opacity,g=QC[t.color];return g?`rgba(${g}, ${p})`:t.color},[t.color,t.opacity]),[o,s]=f.useState(t.visible),l=Vh(),{opacity:c}=Un({opacity:t.visible?1:0,config:{precision:.01,mass:1,tension:250,friction:30,clamp:!0},onStart:()=>{s(!0)},onRest:()=>{var d,p;l.current||(s(t.visible),t.visible?(d=t.afterShow)===null||d===void 0||d.call(t):(p=t.afterClose)===null||p===void 0||p.call(t))}}),u=zo(t.stopPropagation,ne(t,k.createElement(Et.div,{className:yf,ref:r,"aria-hidden":!0,style:Object.assign(Object.assign({},t.style),{background:i,opacity:c,display:o?void 0:"none"}),onClick:d=>{var p;d.target===d.currentTarget&&((p=t.onMaskClick)===null||p===void 0||p.call(t,d))}},t.onMaskClick&&k.createElement("div",{className:`${yf}-aria-button`,role:"button","aria-label":n.Mask.name,onClick:t.onMaskClick}),k.createElement("div",{className:`${yf}-content`},t.children))));return k.createElement(hd,{active:o,forceRender:t.forceRender,destroyOnClose:t.destroyOnClose},fd(t.getContainer,u))};function KC(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"AddOutline-AddOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"AddOutline-add"},f.createElement("rect",{id:"AddOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M25.1,6.5 C25.3209139,6.5 25.5,6.6790861 25.5,6.9 L25.5,22.5 L41.1,22.5 C41.3209139,22.5 41.5,22.6790861 41.5,22.9 L41.5,25.1 C41.5,25.3209139 41.3209139,25.5 41.1,25.5 L25.5,25.5 L25.5,41.1 C25.5,41.3209139 25.3209139,41.5 25.1,41.5 L22.9,41.5 C22.6790861,41.5 22.5,41.3209139 22.5,41.1 L22.5,25.5 L6.9,25.5 C6.6790861,25.5 6.5,25.3209139 6.5,25.1 L6.5,22.9 C6.5,22.6790861 6.6790861,22.5 6.9,22.5 L22.5,22.5 L22.5,6.9 C22.5,6.6790861 22.6790861,6.5 22.9,6.5 L25.1,6.5 Z",id:"AddOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}function YC(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"AppOutline-AppOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"AppOutline-编组"},f.createElement("rect",{id:"AppOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M38.6673097,11.5277497 L27.3505965,4.90817356 C25.2828181,3.69727548 22.7306145,3.69727548 20.6583507,4.90817356 L9.33715206,11.5277497 C7.2693737,12.7386478 6,14.9675973 6,17.3804238 L6,30.6195762 C6,33.0324027 7.27385912,35.265837 9.33715206,36.4722503 L20.6538653,43.0918264 C22.7261291,44.3027245 25.2738473,44.3027245 27.3461111,43.0918264 L38.6628243,36.4722503 C40.7306027,35.265837 41.9999882,33.0324027 41.9999882,30.6195762 L41.9999882,17.3849086 C42.0044618,14.9675973 40.7350881,12.7386478 38.6673097,11.5277497 Z M8.62397037,17.3804238 C8.62397037,15.8914677 9.40443335,14.5191165 10.673807,13.7746384 L21.9591223,7.16851665 C23.2240106,6.42852338 24.7804512,6.42852338 26.0453394,7.16851665 L32.4908872,10.9447247 L12.9479147,22.3764996 L8.62397037,19.8470681 L8.62397037,17.3804238 Z M23.7398339,19.0622267 L32.4729455,24.1704227 L24.2466863,28.9826214 L15.5135746,23.8744254 L23.7398339,19.0622267 L23.7398339,19.0622267 Z M10.673807,34.1984527 C9.40443335,33.4584595 8.62397037,32.0816235 8.62397037,30.5926673 L8.62397037,22.8474044 L21.6810263,30.485032 L13.0017397,35.5618343 L10.673807,34.1984527 L10.673807,34.1984527 Z M39.3804914,30.5926673 C39.3804914,32.0816235 38.6000284,33.4539747 37.3306547,34.1984527 L26.0453394,40.8045745 C24.7804512,41.5445678 23.2240106,41.5445678 21.9591223,40.8045745 L15.5629142,37.0597601 L35.0386054,25.6683485 L39.3804914,28.2067496 L39.3804914,30.5926673 L39.3804914,30.5926673 Z M39.3804914,25.2108981 L35.6486224,23.0267967 L26.3054938,17.5643009 L35.0565471,12.4471353 L37.3306547,13.7791232 C38.6000284,14.5191165 39.3804914,15.8959525 39.3804914,17.3849086 L39.3804914,25.2108981 L39.3804914,25.2108981 Z",id:"AppOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function XC(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"ArrowsAltOutline-ArrowsAltOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"ArrowsAltOutline-编组"},f.createElement("rect",{id:"ArrowsAltOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M27.54027,25.4192995 L37.9992424,35.878922 L37.9992424,35.878922 L37.9999293,26.5005854 C37.9999455,26.2796715 38.1790447,26.1005985 38.3999586,26.1006147 C38.506035,26.1006225 38.6077646,26.1427646 38.682772,26.217772 L40.8828427,28.4178427 C40.9578573,28.4928573 41,28.5945988 41,28.7006854 L41,38.0000814 L41,38.0000814 C41,39.5977189 39.7511139,40.9036635 38.1763494,40.9949074 L38.0000214,41 L28.7016885,41 C28.5956001,41 28.4938569,40.9578558 28.4188421,40.882839 L26.2188213,38.6827611 C26.0626136,38.5265493 26.0626169,38.2732833 26.2188286,38.1170756 C26.2938429,38.0420633 26.3955829,37.999922 26.5016677,37.999922 L35.8782424,37.999922 L35.8782424,37.999922 L25.4189935,27.540576 C25.2627863,27.3843648 25.2627869,27.1310998 25.4189948,26.9748893 L26.9745934,25.4192907 C27.1307943,25.2630722 27.3840603,25.2630722 27.54027,25.4192819 C27.5402729,25.4192848 27.5402759,25.4192878 27.54027,25.4192995 Z M19.5801734,7.11717343 L21.78015,9.31715001 C21.9363597,9.47335972 21.9363597,9.72662572 21.78015,9.88283543 C21.7051347,9.95785072 21.6033919,9.99999352 21.4973043,9.99999272 L12.1212424,9.99992204 L12.1212424,9.99992204 L22.5812531,20.4603418 C22.7374521,20.6165579 22.7374496,20.8698197 22.5812476,21.0260328 L21.025649,22.5816313 C20.8694312,22.7378225 20.6161755,22.7378285 20.4599503,22.5816447 L9.9992424,12.121922 L9.9992424,12.121922 L9.99992925,21.4981366 C9.99994543,21.7190505 9.82087245,21.8981497 9.59995855,21.8981659 C9.49386181,21.8981736 9.39210827,21.8560303 9.31708654,21.7810086 L7.11716153,19.5810836 C7.04214447,19.5060665 7.00000153,19.4043208 7.00000424,19.2982306 L7.0002424,10.0009006 L7.0002424,10.0009006 C7.0002424,8.40323116 8.24915346,7.09726047 9.82394948,7.00601469 L10.000221,7.00092204 L19.2972917,7.00001615 C19.4033918,7.00000581 19.5051493,7.04214933 19.5801734,7.11717343 Z",id:"ArrowsAltOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function a6(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"BellOutline-BellOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"BellOutline-编组"},f.createElement("rect",{id:"BellOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M7,38 L7.00004975,37.9645627 C5.30387842,37.7219693 4,36.2632532 4,34.5 L4,32.6568542 C4,31.5959883 4.42142736,30.5785726 5.17157288,29.8284271 L7,28 L7,21 C7,11.6111593 14.6111593,4 24,4 C33.3888407,4 41,11.6111593 41,21 L41,28 L42.8284271,29.8284271 C43.5785726,30.5785726 44,31.5959883 44,32.6568542 L44,34.5 C44,36.2629068 42.6966339,37.7213961 41.0009499,37.9644196 L41,38 L30.9290789,38.0002251 C30.4437524,41.3924095 27.5263939,44 24,44 C20.4736061,44 17.5562476,41.3924095 17.0709211,38.0002251 L7,38 Z M27.8737446,38.0009238 L20.125,38 L20.1799062,38.189716 C20.6864262,39.8178673 22.2051622,41 24,41 C25.794488,41 27.3129817,39.8183281 27.8197974,38.1906681 L27.8737446,38.0009238 Z M24,7 C16.3724998,7 10.1696731,13.0997524 10.003422,20.687355 L10,21 L10,29.0769553 C10,29.1830419 9.95785726,29.2847834 9.88284271,29.359798 L7.29289322,31.9497475 L7.29289322,31.9497475 C7.1366129,32.1060278 7.03740171,32.3087092 7.00867243,32.5254103 L7,32.6568542 L7,34.5 C7,34.7178229 7.14158244,34.9070074 7.33767609,34.9738837 L7.4247998,34.9947837 L7.466,35 L40.533,35 L40.5753422,34.9947633 C40.7851759,34.9646902 40.9529292,34.7989963 40.9915889,34.5913076 L41,34.5 L41,32.6568542 C41,32.4358405 40.9268355,32.2223702 40.7939194,32.0488247 L40.7071068,31.9497475 L38.1171573,29.359798 C38.0421427,29.2847834 38,29.1830419 38,29.0769553 L38,21 C38,13.2680135 31.7319865,7 24,7 Z",id:"BellOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function en(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"CalculatorOutline-CalculatorOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"CalculatorOutline-编组"},f.createElement("rect",{id:"CalculatorOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M38,4 C41.3137085,4 44,6.6862915 44,10 L44,38 C44,41.3137085 41.3137085,44 38,44 L10,44 C6.6862915,44 4,41.3137085 4,38 L4,10 C4,6.6862915 6.6862915,4 10,4 L38,4 Z M38,7 L10,7 C8.40231912,7 7.09633912,8.24891996 7.00509269,9.82372721 L7,10 L7,38 C7,39.5976809 8.24891996,40.9036609 9.82372721,40.9949073 L10,41 L38,41 C39.5976809,41 40.9036609,39.75108 40.9949073,38.1762728 L41,38 L41,10 C41,8.40231912 39.75108,7.09633912 38.1762728,7.00509269 L38,7 Z M24,22.4 L24,24.6 C24,24.8209139 23.8209139,25 23.6,25 L6.4,25 C6.1790861,25 6,24.8209139 6,24.6 L6,22.4 C6,22.1790861 6.1790861,22 6.4,22 L23.6,22 C23.8209139,22 24,22.1790861 24,22.4 Z M19,31.4 L19,33.6 C19,33.8209139 18.8209139,34 18.6,34 L10.4,34 C10.1790861,34 10,33.8209139 10,33.6 L10,31.4 C10,31.1790861 10.1790861,31 10.4,31 L18.6,31 C18.8209139,31 19,31.1790861 19,31.4 Z M38,20.4 L38,22.6 C38,22.8209139 37.8209139,23 37.6,23 L29.4,23 C29.1790861,23 29,22.8209139 29,22.6 L29,20.4 C29,20.1790861 29.1790861,20 29.4,20 L37.6,20 C37.8209139,20 38,20.1790861 38,20.4 Z M38,25.4 L38,27.6 C38,27.8209139 37.8209139,28 37.6,28 L29.4,28 C29.1790861,28 29,27.8209139 29,27.6 L29,25.4 C29,25.1790861 29.1790861,25 29.4,25 L37.6,25 C37.8209139,25 38,25.1790861 38,25.4 Z M19,13.4 L19,15.6 C19,15.8209139 18.8209139,16 18.6,16 L10.4,16 C10.1790861,16 10,15.8209139 10,15.6 L10,13.4 C10,13.1790861 10.1790861,13 10.4,13 L18.6,13 C18.8209139,13 19,13.1790861 19,13.4 Z M25,6.4 L25,42.6 C25,42.8209139 24.8209139,43 24.6,43 L22.4,43 C22.1790861,43 22,42.8209139 22,42.6 L22,6.4 C22,6.1790861 22.1790861,6 22.4,6 L24.6,6 C24.8209139,6 25,6.1790861 25,6.4 Z M16,10.4 L16,18.6 C16,18.8209139 15.8209139,19 15.6,19 L13.4,19 C13.1790861,19 13,18.8209139 13,18.6 L13,10.4 C13,10.1790861 13.1790861,10 13.4,10 L15.6,10 C15.8209139,10 16,10.1790861 16,10.4 Z",id:"CalculatorOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function ap(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"CalendarOutline-CalendarOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"CalendarOutline-编组"},f.createElement("rect",{id:"CalendarOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M18,4.4 L18,7 L18,7 L30,7 L30,4.4 C30,4.1790861 30.1790861,4 30.4,4 L32.6,4 C32.8209139,4 33,4.1790861 33,4.4 L33,7 L33,7 L37,7 C40.3137085,7 43,9.6862915 43,13 L43,38 C43,41.3137085 40.3137085,44 37,44 L11,44 C7.6862915,44 5,41.3137085 5,38 L5,13 C5,9.6862915 7.6862915,7 11,7 L15,7 L15,4.4 C15,4.1790861 15.1790861,4 15.4,4 L17.6,4 C17.8209139,4 18,4.1790861 18,4.4 Z M40,20 L8,20 L8,38 C8,39.5976809 9.24891996,40.9036609 10.8237272,40.9949073 L11,41 L37,41 C38.5976809,41 39.9036609,39.75108 39.9949073,38.1762728 L40,38 L40,20 Z M15,10 L11,10 C9.40231912,10 8.09633912,11.24892 8.00509269,12.8237272 L8,13 L8,17 L40,17 L40,13 C40,11.4023191 38.75108,10.0963391 37.1762728,10.0050927 L37,10 L33,10 L33,12.6 C33,12.8209139 32.8209139,13 32.6,13 L30.4,13 C30.1790861,13 30,12.8209139 30,12.6 L30,10 L30,10 L18,10 L18,12.6 C18,12.8209139 17.8209139,13 17.6,13 L15.4,13 C15.1790861,13 15,12.8209139 15,12.6 L15,10 L15,10 Z",id:"CalendarOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function c1(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"CameraOutline-CameraOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"CameraOutline-编组"},f.createElement("rect",{id:"CameraOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M29.7352369,5 L29.7352369,5 C30.8779691,5 31.9107146,5.6794308 32.3609512,6.72709926 L33.6600003,9.74999944 L38.2857146,9.74999944 L38.2857143,9.74999944 C41.441625,9.74999931 44,12.301973 44,15.449997 L44,37.3000024 L44,37.3000024 C44,40.448022 41.441625,43 38.2857143,43 L9.71428593,43 L9.71428568,43 C6.55837498,43 4,40.448022 4,37.3000024 C4,37.3000024 4,37.3000024 4,37.3000024 L4,15.449997 L4,15.4499979 C4,12.3019783 6.55837052,9.7500003 9.71428568,9.7500003 L14.3399999,9.7500003 L15.639049,6.72710012 L15.6390488,6.72710065 C16.0892854,5.67942774 17.1220309,5 18.2647631,5 L29.7352541,5 L29.7352369,5 Z M29.6874418,8 L18.3125379,8 L16.2885949,12.7058932 L9.8333318,12.7058932 L9.83333193,12.7058932 C8.33302878,12.7058098 7.09273709,13.8712377 7.00472224,15.3637716 L7,15.5294187 L7,37.1764725 L7,37.1766294 C7,38.6717398 8.16954247,39.9076725 9.66726906,39.9953033 L9.83333427,40 L38.1666681,40 L38.1666681,40 C39.6669712,40 40.9072629,38.8346555 40.9952778,37.3421215 L41,37.1764745 L41,15.5294206 L41,15.5292634 C41,14.034153 39.8304575,12.7982203 38.3327309,12.7105895 L38.1666662,12.7058928 L31.711403,12.7058928 L29.68746,8 L29.6874418,8 Z M24.5,16 C29.7468582,16 34,20.2531552 34,25.5 C34,30.7468582 29.7468448,35 24.5,35 C19.2531418,35 15,30.7468448 15,25.5 C15,20.2531418 19.2531552,16 24.5,16 Z M24.5,19 L24.5,19 C20.9101422,19 18,21.9101552 18,25.5 C18,29.0898579 20.9101552,32 24.5,32 L24.5,32 C28.0898578,32 31,29.0898448 31,25.5 C31,21.9101421 28.0898448,19 24.5,19 L24.5,19 Z M36.5,15 L36.5,15 C37.3284266,15 38,15.6715734 38,16.5 C38,17.3284266 37.3284266,18 36.5,18 L36.5,18 C35.6715734,18 35,17.3284266 35,16.5 C35,15.6715734 35.6715734,15 36.5,15 L36.5,15 Z",id:"CameraOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function lp(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"CheckCircleFill-CheckCircleFill",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"CheckCircleFill-编组"},f.createElement("rect",{id:"CheckCircleFill-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M35.8202936,17 L32.7086692,17 C32.6025922,17 32.500859,17.0421352 32.4258461,17.1171378 L32.4258461,17.1171378 L21.3922352,28.1492247 L16.3591562,23.1163755 C16.2841422,23.0413649 16.1824034,22.9992247 16.0763199,22.9992247 L16.0763199,22.9992247 L12.9653996,22.9992247 C12.859342,22.9992247 12.7576259,23.0413445 12.6826161,23.1163228 C12.5263737,23.2724998 12.5263207,23.5257658 12.6824977,23.6820082 C12.8583452,23.8579294 13.0341927,24.0338505 13.2100402,24.2097716 C13.2577488,24.2575002 13.3065097,24.3063074 13.3562592,24.3561283 L13.6661084,24.6666997 C14.3074913,25.3100963 15.0728595,26.0807873 15.8520136,26.8666654 L16.4372421,27.4571699 C18.2552812,29.2922548 19.9983838,31.0574343 20.2666114,31.3285298 L20.301004,31.3632341 C20.8867904,31.9490205 21.8365379,31.9490205 22.4223243,31.3632341 L22.4223243,31.3632341 L36.1031319,17.6828471 C36.1781492,17.6078322 36.2202936,17.5060887 36.2202936,17.4 C36.2202936,17.1790861 36.0412075,17 35.8202936,17 L35.8202936,17 Z",id:"CheckCircleFill-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function fa(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"CheckCircleOutline-CheckCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"CheckCircleOutline-编组"},f.createElement("rect",{id:"CheckCircleOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M35.9397591,17.682013 L23.3431458,30.2781746 L23.3431458,30.2781746 C22.7573593,30.863961 21.8076118,30.863961 21.2218254,30.2781746 L21.1448618,30.1962736 C21.0355278,30.1325525 20.932526,30.0538463 20.8388348,29.9601551 L13.5613926,22.681994 C13.4051906,22.5257765 13.4052031,22.2725106 13.5614206,22.1163086 C13.636434,22.0413025 13.7381696,21.9991652 13.8442493,21.9991652 L16.9549543,21.9991652 C17.0610359,21.9991652 17.1627731,22.041304 17.2377869,22.1163124 L22.25,27.1281652 L22.25,27.1281652 L32.2624756,17.1163137 C32.3374894,17.0413045 32.4392272,16.9991652 32.5453095,16.9991652 L35.6569214,16.9991652 C35.8778353,16.9991652 36.0569214,17.1782513 36.0569214,17.3991652 C36.0569214,17.5052543 36.0147767,17.6069981 35.9397591,17.682013 Z",id:"CheckCircleOutline-形状",fill:"currentColor"}))))}function ha(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"CheckOutline-CheckOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"CheckOutline-编组"},f.createElement("rect",{id:"CheckOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M44.309608,12.6841286 L21.2180499,35.5661955 L21.2180499,35.5661955 C20.6343343,36.1446015 19.6879443,36.1446015 19.1042286,35.5661955 C19.0538201,35.5162456 19.0077648,35.4636155 18.9660627,35.4087682 C18.9113105,35.368106 18.8584669,35.3226694 18.808302,35.2729607 L3.6903839,20.2920499 C3.53346476,20.1365529 3.53231192,19.8832895 3.68780898,19.7263704 C3.7629255,19.6505669 3.86521855,19.6079227 3.97193622,19.6079227 L7.06238923,19.6079227 C7.16784214,19.6079227 7.26902895,19.6495648 7.34393561,19.7237896 L20.160443,32.4236157 L20.160443,32.4236157 L40.656066,12.115858 C40.7309719,12.0416387 40.8321549,12 40.9376034,12 L44.0280571,12 C44.248971,12 44.4280571,12.1790861 44.4280571,12.4 C44.4280571,12.5067183 44.3854124,12.609012 44.309608,12.6841286 Z",id:"CheckOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}function JC(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"ClockCircleFill-ClockCircleFill",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"ClockCircleFill-编组"},f.createElement("rect",{id:"ClockCircleFill-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24.6,14 L22.4,14 C22.1790861,14 22,14.1790861 22,14.4 L22,14.4 L22,23.1715729 L22.0065089,23.3850222 C22.0584325,24.2354066 22.4192395,25.0405598 23.0251263,25.6464466 L23.0251263,25.6464466 L31.1564971,33.7778175 C31.3127068,33.9340272 31.5659728,33.9340272 31.7221825,33.7778175 L31.7221825,33.7778175 L33.2778175,32.2221825 C33.4340272,32.0659728 33.4340272,31.8127068 33.2778175,31.6564971 L33.2778175,31.6564971 L25.1464466,23.5251263 L25.0952092,23.4650801 C25.0337142,23.38027 25,23.2776595 25,23.1715729 L25,23.1715729 L25,14.4 C25,14.1790861 24.8209139,14 24.6,14 L24.6,14 Z",id:"ClockCircleFill-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function Ha(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"ClockCircleOutline-ClockCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"ClockCircleOutline-编组"},f.createElement("rect",{id:"ClockCircleOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M24.6,14 C24.8209139,14 25,14.1790861 25,14.4 L25,23.1715729 C25,23.2776595 25.0337142,23.38027 25.0952092,23.4650801 L25.1464466,23.5251263 L33.2778175,31.6564971 C33.4340272,31.8127068 33.4340272,32.0659728 33.2778175,32.2221825 L31.7221825,33.7778175 C31.5659728,33.9340272 31.3127068,33.9340272 31.1564971,33.7778175 L23.0251263,25.6464466 C22.4192395,25.0405598 22.0584325,24.2354066 22.0065089,23.3850222 L22,23.1715729 L22,14.4 C22,14.1790861 22.1790861,14 22.4,14 L24.6,14 Z",id:"ClockCircleOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function cp(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"CloseCircleFill-CloseCircleFill",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"CloseCircleFill-编组"},f.createElement("rect",{id:"CloseCircleFill-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M18.6753876,16 L15.5637812,16 C15.4576916,16 15.3559474,16.0421451 15.2809323,16.1171635 C15.124726,16.2733766 15.1247316,16.5266426 15.2809447,16.6828489 L15.2809447,16.6828489 L22.299066,23.7006641 L14.6828159,31.3171619 C14.6078042,31.3921761 14.5656632,31.4939157 14.5656632,31.6 C14.5656632,31.8209139 14.7447493,32 14.9656632,32 L14.9656632,32 L18.0753284,32 C18.1814068,32 18.2831412,31.9578638 18.3581544,31.8828594 L18.3581544,31.8828594 L24.420066,25.8216641 L30.4818451,31.8828564 C30.5568585,31.9578626 30.6585942,32 30.7646741,32 L30.7646741,32 L33.8763476,32 C33.9824309,32 34.0841695,31.9578599 34.1591835,31.8828496 C34.315397,31.7266436 34.3154031,31.4733776 34.1591972,31.3171641 L34.1591972,31.3171641 L26.542066,23.6996641 L33.5591874,16.6828489 C33.6342057,16.6078338 33.6763508,16.5060896 33.6763508,16.4 C33.6763508,16.1790861 33.4972647,16 33.2763508,16 L33.2763508,16 L30.1637654,16 C30.0576705,16 29.9559218,16.0421493 29.8809058,16.1171741 L29.8809058,16.1171741 L24.420066,21.5786641 L18.9582218,16.1171488 C18.883208,16.0421394 18.7814701,16 18.6753876,16 L18.6753876,16 Z",id:"CloseCircleFill-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function l6(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"CloseCircleOutline-CloseCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"CloseCircleOutline-编组"},f.createElement("rect",{id:"CloseCircleOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M18.3750018,16.1171551 L23.9998449,21.7419127 L23.9998449,21.7419127 L29.624688,16.1171551 C29.6997023,16.0421419 29.801443,16 29.9075285,16 L33.0200651,16 C33.240979,16 33.4200651,16.1790861 33.4200651,16.4 C33.4200651,16.5060962 33.3779147,16.6078461 33.3028882,16.6828623 L26.1208449,23.8639127 L26.1208449,23.8639127 L33.5750057,31.3171396 C33.7312252,31.4733395 33.731241,31.7266055 33.5750411,31.882825 C33.5000251,31.9578504 33.398276,32 33.2921807,32 L30.1796562,32 C30.0735583,32 29.9718069,31.9578483 29.8967904,31.8828197 L23.9998449,25.9849127 L23.9998449,25.9849127 L18.1011057,31.8828617 C18.0260927,31.9578646 17.9243593,32 17.8182819,32 L14.7076208,32 C14.4867069,32 14.3076208,31.8209139 14.3076208,31.6 C14.3076208,31.4939151 14.3497622,31.3921749 14.4247747,31.3171607 L21.8778449,23.8639127 L21.8778449,23.8639127 L14.6966968,16.6828443 C14.5404862,16.5266354 14.5404848,16.2733694 14.6966936,16.1171589 C14.7717083,16.0421433 14.8734505,16 14.9795379,16 L18.0921612,16 C18.1982468,16 18.2999874,16.0421419 18.3750018,16.1171551 Z",id:"CloseCircleOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function dl(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"CloseOutline-CloseOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"CloseOutline-编组"},f.createElement("rect",{id:"CloseOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M10.6085104,8.11754663 L24.1768397,21.8195031 L24.1768397,21.8195031 L37.7443031,8.1175556 C37.8194278,8.04168616 37.9217669,7.999 38.0285372,7.999 L41.1040268,7.999 C41.3249407,7.999 41.5040268,8.1780861 41.5040268,8.399 C41.5040268,8.50440471 41.4624226,8.60554929 41.3882578,8.68044752 L26.2773302,23.9408235 L26.2773302,23.9408235 L41.5021975,39.3175645 C41.65763,39.4745475 41.6563731,39.7278104 41.4993901,39.8832429 C41.4244929,39.9574004 41.3233534,39.999 41.2179546,39.999 L38.1434012,39.999 C38.0366291,39.999 37.9342885,39.9563124 37.8591634,39.8804408 L24.1768397,26.0621438 L24.1768397,26.0621438 L10.4936501,39.8804497 C10.4185257,39.9563159 10.3161889,39.999 10.2094212,39.999 L7.13584526,39.999 C6.91493136,39.999 6.73584526,39.8199139 6.73584526,39.599 C6.73584526,39.4936017 6.77744443,39.3924627 6.85160121,39.3175656 L22.0763492,23.9408235 L22.0763492,23.9408235 L6.96554081,8.68044639 C6.81010226,8.52346929 6.81134951,8.27020637 6.9683266,8.11476782 C7.04322474,8.04060377 7.14436883,7.999 7.24977299,7.999 L10.3242852,7.999 C10.4310511,7.999 10.5333863,8.04168267 10.6085104,8.11754663 Z",id:"CloseOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}function up(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"ContentOutline-ContentOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"ContentOutline-编组"},f.createElement("rect",{id:"ContentOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M18.627907,6 L18.8394678,6.00378739 C20.724163,6.07094117 22.7022235,7.02609453 24.0009305,8.46795145 C25.2977765,7.02609453 27.275837,6.07094117 29.1605322,6.00378739 L29.372093,6 L39.1395349,6 C42.3026203,6 44.8804189,8.56557489 44.9959578,11.7750617 L45,12 L45,34 C45,37.2383969 42.4940896,39.8775718 39.359242,39.9958615 L39.1395349,40 L28.1436109,40.0006895 C27.1582748,41.2217963 25.6679035,42 24,42 C22.3320965,42 20.8417252,41.2217963 19.8563891,40.0006895 L8.86046512,40 L8.64075798,39.9958615 C5.57881379,39.8803227 3.11689412,37.3597859 3.00404223,34.2249383 L3,34 L3,12 L3.00404223,11.7750617 C3.11689412,8.64021412 5.57881379,6.11967731 8.64075798,6.00413847 L8.86046512,6 L18.627907,6 Z M21.6070926,37.0005393 C21.8335444,38.1413907 22.8188346,39 24,39 C25.1811654,39 26.1664556,38.1413907 26.3929074,37.0005393 L39.1395349,37 L39.3117083,36.9949073 C40.7929224,36.9070404 41.9789697,35.6927538 42.0647932,34.1762728 L42.0697674,34 L42.0697674,12 L42.0647932,11.8237272 C41.9789697,10.3072462 40.7929224,9.09295962 39.3117083,9.00509269 L39.1395349,9 L29.372093,9 L29.1999196,9.00509269 C27.7147766,9.09319269 25.6158244,10.3136959 25.472835,11.8358011 L25.4651163,12 L25.4651163,31.6 C25.4651163,31.8209139 25.2860302,32 25.0651163,32 L22.9348837,32 C22.7139698,32 22.5348837,31.8209139 22.5348837,31.6 L22.5348837,12 L22.5348837,12 L22.527165,11.8358011 C22.3892824,10.3680568 20.4326537,9.18075619 18.9614346,9.01882731 L18.8000804,9.00509269 L18.627907,9 L8.86046512,9 L8.6882917,9.00509269 C7.26632621,9.08944495 6.11638638,10.2119055 5.95073519,11.6432528 L5.93520682,11.8237272 L5.93023256,12 L5.93023256,34 L5.93520682,34.1762728 C6.01759739,35.6320946 7.11395422,36.8094139 8.51201433,36.9790092 L8.6882917,36.9949073 L8.86046512,37 L21.6070926,37.0005393 Z M18.627907,24.4 L18.627907,26.6 C18.627907,26.8209139 18.4488209,27 18.227907,27 L9.26046512,27 C9.03955122,27 8.86046512,26.8209139 8.86046512,26.6 L8.86046512,24.4 C8.86046512,24.1790861 9.03955122,24 9.26046512,24 L18.227907,24 C18.4488209,24 18.627907,24.1790861 18.627907,24.4 Z M39.1395349,24.4 L39.1395349,26.6 C39.1395349,26.8209139 38.9604488,27 38.7395349,27 L28.7953488,27 C28.5744349,27 28.3953488,26.8209139 28.3953488,26.6 L28.3953488,24.4 C28.3953488,24.1790861 28.5744349,24 28.7953488,24 L38.7395349,24 C38.9604488,24 39.1395349,24.1790861 39.1395349,24.4 Z M18.627907,18.4 L18.627907,20.6 C18.627907,20.8209139 18.4488209,21 18.227907,21 L9.26046512,21 C9.03955122,21 8.86046512,20.8209139 8.86046512,20.6 L8.86046512,18.4 C8.86046512,18.1790861 9.03955122,18 9.26046512,18 L18.227907,18 C18.4488209,18 18.627907,18.1790861 18.627907,18.4 Z M39.1395349,18.4 L39.1395349,20.6 C39.1395349,20.8209139 38.9604488,21 38.7395349,21 L28.7953488,21 C28.5744349,21 28.3953488,20.8209139 28.3953488,20.6 L28.3953488,18.4 C28.3953488,18.1790861 28.5744349,18 28.7953488,18 L38.7395349,18 C38.9604488,18 39.1395349,18.1790861 39.1395349,18.4 Z",id:"ContentOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function ek(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"DownOutline-DownOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",null,f.createElement("rect",{id:"DownOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M5.11219264,16.3947957 L22.6612572,34.5767382 L22.6612572,34.5767382 C23.2125856,35.1304785 24.0863155,35.1630514 24.6755735,34.6744571 L24.7825775,34.5767382 L42.8834676,16.3956061 C42.9580998,16.320643 43,16.2191697 43,16.1133896 L43,12.9866673 C43,12.7657534 42.8209139,12.5866673 42.6,12.5866673 C42.4936115,12.5866673 42.391606,12.6290496 42.316542,12.7044413 L23.7816937,31.3201933 L23.7816937,31.3201933 L5.6866816,12.7237117 C5.53262122,12.5653818 5.27937888,12.5619207 5.121049,12.7159811 C5.04365775,12.7912854 5,12.8946805 5,13.0026627 L5,16.1170064 C5,16.2206403 5.04022164,16.3202292 5.11219264,16.3947957 Z",id:"DownOutline-down",fill:"currentColor",fillRule:"nonzero"}))))}function tk(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"EditSOutline-EditSOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"EditSOutline-编组"},f.createElement("rect",{id:"EditSOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M39.1558113,6.84476948 L39.1547876,6.84478452 C41.6150708,9.30533949 41.6150708,13.2945216 39.1547875,15.7550568 L14.2175882,40.6933641 C14.0205351,40.8899288 13.7535085,41 13.475183,41 L7.10015653,41 C5.94027729,41 5.00000168,40.0596889 5.00000168,38.8997532 L5.00000168,32.525535 C4.9995034,32.2468348 5.1098075,31.9793647 5.30661943,31.7820434 L30.2469685,6.84477025 C32.707296,4.38507671 36.6954838,4.38507671 39.1558113,6.84476948 Z M41.5764707,38 C41.8588237,38 42,38.1333332 42,38.4000001 L42,40.5999999 C42,40.8666668 41.8588237,41 41.5764707,41 L24.4235293,41 C24.1411763,41 24,40.8666668 24,40.5999999 L24,38.4000001 C24,38.1333332 24.1411763,38 24.4235293,38 L41.5764707,38 Z M28.172,13.371 L8.2730898,33.272167 C8.19433904,33.3510089 8.15023081,33.4579141 8.15023081,33.5693515 L8.15023081,37.4317018 C8.15023081,37.663779 8.33819467,37.8517506 8.57026108,37.8517506 L12.4303379,37.8517506 C12.5419214,37.8517506 12.6488431,37.8069757 12.7275092,37.7278363 L32.628,17.827 L28.172,13.371 Z M41.5555549,31 C41.8518518,31 42,31.1333332 42,31.4000001 L42,33.5999999 C42,33.8666668 41.8518518,34 41.5555549,34 L32.4444451,34 C32.1481482,34 32,33.8666668 32,33.5999999 L32,31.4000001 C32,31.1333332 32.1481482,31 32.4444451,31 L41.5555549,31 Z M32.607562,8.94503104 L32.4721022,9.07104573 L30.371,11.172 L34.827,15.628 L36.9275554,13.5288315 C38.1074041,12.3492947 38.1631188,10.4544078 37.0546144,9.20757614 L36.9286053,9.07316031 L36.9286254,9.07104573 C35.7488554,7.89144977 33.8540626,7.83619529 32.607562,8.94503104 Z",id:"EditSOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function nk(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"ExclamationCircleFill-ExclamationCircleFill",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",null,f.createElement("rect",{id:"ExclamationCircleFill-矩形",fill:"#D76060",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M25.1,31 L22.9,31 C22.6790861,31 22.5,31.1790861 22.5,31.4 L22.5,31.4 L22.5,33.6 C22.5,33.8209139 22.6790861,34 22.9,34 L22.9,34 L25.1,34 C25.3209139,34 25.5,33.8209139 25.5,33.6 L25.5,33.6 L25.5,31.4 C25.5,31.1790861 25.3209139,31 25.1,31 L25.1,31 Z M25.1,14 L22.9,14 C22.6790861,14 22.5,14.1790861 22.5,14.4 L22.5,14.4 L22.5,27.6 C22.5,27.8209139 22.6790861,28 22.9,28 L22.9,28 L25.1,28 C25.3209139,28 25.5,27.8209139 25.5,27.6 L25.5,27.6 L25.5,14.4 C25.5,14.1790861 25.3209139,14 25.1,14 L25.1,14 Z",id:"ExclamationCircleFill-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function c6(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"ExclamationCircleOutline-ExclamationCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"ExclamationCircleOutline-编组"},f.createElement("rect",{id:"ExclamationCircleOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M25.1,31 C25.3209139,31 25.5,31.1790861 25.5,31.4 L25.5,33.6 C25.5,33.8209139 25.3209139,34 25.1,34 L22.9,34 C22.6790861,34 22.5,33.8209139 22.5,33.6 L22.5,31.4 C22.5,31.1790861 22.6790861,31 22.9,31 L25.1,31 Z M25.1,14 C25.3209139,14 25.5,14.1790861 25.5,14.4 L25.5,27.6 C25.5,27.8209139 25.3209139,28 25.1,28 L22.9,28 C22.6790861,28 22.5,27.8209139 22.5,27.6 L22.5,14.4 C22.5,14.1790861 22.6790861,14 22.9,14 L25.1,14 Z",id:"ExclamationCircleOutline-形状结合",fill:"currentColor"}))))}function u6(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"FileOutline-FileOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"FileOutline-编组"},f.createElement("rect",{id:"FileOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M38,4 C41.3137085,4 44,6.6862915 44,10 L44,38 C44,41.3137085 41.3137085,44 38,44 L10,44 C6.6862915,44 4,41.3137085 4,38 L4,10 C4,6.6862915 6.6862915,4 10,4 L38,4 Z M38,7 L10,7 C8.40231912,7 7.09633912,8.24891996 7.00509269,9.82372721 L7,10 L7,38 C7,39.5976809 8.24891996,40.9036609 9.82372721,40.9949073 L10,41 L38,41 C39.5976809,41 40.9036609,39.75108 40.9949073,38.1762728 L41,38 L41,10 C41,8.40231912 39.75108,7.09633912 38.1762728,7.00509269 L38,7 Z M23.6,29 C23.8209139,29 24,29.1790861 24,29.4 L24,31.6 C24,31.8209139 23.8209139,32 23.6,32 L14.4,32 C14.1790861,32 14,31.8209139 14,31.6 L14,29.4 C14,29.1790861 14.1790861,29 14.4,29 L23.6,29 Z M33.6,23 C33.8209139,23 34,23.1790861 34,23.4 L34,25.6 C34,25.8209139 33.8209139,26 33.6,26 L14.4,26 C14.1790861,26 14,25.8209139 14,25.6 L14,23.4 C14,23.1790861 14.1790861,23 14.4,23 L33.6,23 Z M33.6,17 C33.8209139,17 34,17.1790861 34,17.4 L34,19.6 C34,19.8209139 33.8209139,20 33.6,20 L14.4,20 C14.1790861,20 14,19.8209139 14,19.6 L14,17.4 C14,17.1790861 14.1790861,17 14.4,17 L33.6,17 Z",id:"FileOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function rk(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"FilterOutline-FilterOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"FilterOutline-编组"},f.createElement("rect",{id:"FilterOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M38,4 C40.209139,4 42,5.76907707 42,7.95134424 L42,10.9773332 C42,11.5050389 41.7864467,12.0082085 41.4113229,12.3772068 L30,22.7810491 L30,37.3492129 C30,38.7371734 29.2628047,40.0233629 28.057983,40.7374627 L21.0289915,43.7181542 C20.081831,44.2795378 18.8533105,43.9761435 18.2850141,43.0405042 C18.0985157,42.7334543 18,42.3821079 18,42.0240293 L18,22.7810491 L6.7196312,12.4950865 C6.26364602,12.119721 6,11.5636728 6,10.9773332 L6,7.95134424 C6,5.76907707 7.790861,4 10,4 L38,4 Z M38,6.96350818 L10,6.96350818 C9.48716416,6.96350818 9.06449284,7.3448526 9.00672773,7.83614169 L9,7.95134424 L9,10.3374937 C9,10.450388 9.04770634,10.5580256 9.13134834,10.6338487 L20.8686517,21.2739462 C20.9522937,21.3497694 21,21.4574069 21,21.5703012 L21,39.7002583 C21,39.9211722 21.1790861,40.1002583 21.4,40.1002583 C21.4482784,40.1002583 21.496158,40.0915183 21.5413228,40.0744612 L26.5144958,38.1962754 L26.5144958,38.1962754 C26.7780505,38.0400661 26.9520986,37.7743552 26.9914926,37.477912 L27,37.3492129 L27,21.5702904 C27,21.4574024 27.047701,21.3497702 27.1313349,21.2739476 L38.8686651,10.6328595 C38.952299,10.5570368 39,10.4494047 39,10.3365167 L39,7.95134424 L39,7.95134424 C39,7.4447465 38.6139598,7.02721653 38.1166211,6.97015407 L38,6.96350818 Z M42,36.0229179 L42,38.186426 C42,38.4073399 41.8209139,38.586426 41.6,38.586426 L34.4,38.586426 C34.1790861,38.586426 34,38.4073399 34,38.186426 L34,36.0229179 C34,35.802004 34.1790861,35.6229179 34.4,35.6229179 L41.6,35.6229179 C41.8209139,35.6229179 42,35.802004 42,36.0229179 Z M42,30.0959015 L42,32.2594097 C42,32.4803236 41.8209139,32.6594097 41.6,32.6594097 L34.4,32.6594097 C34.1790861,32.6594097 34,32.4803236 34,32.2594097 L34,30.0959015 C34,29.8749876 34.1790861,29.6959015 34.4,29.6959015 L41.6,29.6959015 C41.8209139,29.6959015 42,29.8749876 42,30.0959015 Z M42,24.1688851 L42,26.3323933 C42,26.5533072 41.8209139,26.7323933 41.6,26.7323933 L34.4,26.7323933 C34.1790861,26.7323933 34,26.5533072 34,26.3323933 L34,24.1688851 C34,23.9479712 34.1790861,23.7688851 34.4,23.7688851 L41.6,23.7688851 C41.8209139,23.7688851 42,23.9479712 42,24.1688851 Z",id:"FilterOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function Bm(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"FireFill-FireFill",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"FireFill-编组"},f.createElement("rect",{id:"FireFill-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M28.8108503,7.56598922 C30.6177257,11.2247948 29.7435561,14.4566853 29.3686834,16.547422 C28.9938108,18.6381586 27.8320537,21.667736 26.811586,22.9814259 C25.4534588,24.7297988 25.096928,26.8463629 27.1867256,27.9151175 C30.7994494,29.0194852 35.136931,20.7401744 32.9972358,12.4787872 L32.9972358,12.375382 C38.2946065,17.7800278 40.9640387,23.7306532 41,30.2286368 C41,30.53058 40.9308437,30.8256296 40.9059475,31.1289515 C40.0608578,41.5122137 31.1757433,46 24.9695754,46 C18.7634076,46 5.11895825,43.6837232 7.21715963,26.29786 C8.10965742,20.0019947 13.6519693,16.3384878 16.5060011,13.0395238 C18.1058217,11.1902976 20.2628465,8.94509773 23.0862649,2 C26.0599847,3.53866958 27.8638693,5.6256273 28.8108503,7.56598922 Z",id:"FireFill-蒙版备份-2",fill:"currentColor",fillRule:"nonzero"}))))}function ik(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"GiftOutline-GiftOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"GiftOutline-编组"},f.createElement("rect",{id:"GiftOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M7.35714432,38.3552973 L7.35714432,22.2434408 C5.67521035,21.8137701 4.5,20.3149571 4.5,18.5988506 L4.5,13.8949232 C4.5,11.8166032 6.20558112,10.131794 8.30952403,10.131794 L21.2961816,10.131794 L18.2323722,7.105298 C18.0835181,6.95842036 18.0833842,6.72015204 18.2320725,6.57310905 L19.7142792,5.1098976 C19.8629752,4.96336749 20.1036785,4.96336749 20.2523732,5.1098976 L24.0238034,8.83539647 L27.7952337,5.1098976 C27.9439298,4.96336746 28.184633,4.96336746 28.3333277,5.10989762 L29.8152346,6.572813 C29.9640887,6.71969064 29.9642227,6.95795896 29.8155343,7.10500195 L26.7504698,10.1308547 L39.6904761,10.1317956 C41.7944188,10.1317955 43.5,11.8166048 43.5,13.8949243 L43.5,18.5988517 C43.5,20.3144618 42.3252227,21.8134283 40.6433469,22.2433159 L40.6433469,38.3553047 C40.6433469,41.4727817 38.0849708,44 34.9290587,44 L13.0714145,44 C9.91552047,44 7.35714432,41.4727743 7.35714432,38.3552973 Z M10.5952327,22.3619794 L10.5952327,38.5119811 C10.5952327,40.0212666 11.6430835,40.9068069 13.1069265,40.9952592 L13.2692348,41 L22.5,41 L22.5,22.3619794 L10.5952327,22.3619794 Z M25.4523759,22.3619794 L25.4523759,41 L34.6666647,41 C36.141751,41 37.3611961,40.1857096 37.4477316,38.679183 L37.4523759,38.511983 L37.4523759,22.3619794 L25.4523759,22.3619794 Z M8.30951107,12.9541687 C7.82667604,12.9541687 7.42028746,13.3112023 7.36379637,13.7848782 L7.3571297,13.8949497 L7.3571297,18.5988772 C7.3571297,19.0757079 7.71844817,19.4771957 8.19795597,19.5330605 L8.30950915,19.5396605 L22.5,19.5396605 L22.5,13 L8.30951107,12.9541687 Z M25.4523759,12.9541401 L25.4523759,19.5396318 L39.6904631,19.5396318 C40.1732982,19.5396318 40.5796867,19.1825982 40.6361778,18.7089223 L40.6428445,18.5988507 L40.6428445,13.8949233 C40.6428445,13.4180927 40.2815265,13.0166049 39.8020182,12.9607401 L39.6904651,12.9541401 L25.4523759,12.9541401 Z",id:"GiftOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function ok(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"InformationCircleFill-InformationCircleFill",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"InformationCircleFill-编组"},f.createElement("rect",{id:"InformationCircleFill-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M25.6,20 L21.4,20 C21.1790861,20 21,20.1790861 21,20.4 L21,20.4 L21,22.6 C21,22.8209139 21.1790861,23 21.4,23 L21.4,23 L22.6,23 C22.8209139,23 23,23.1790861 23,23.4 L23,23.4 L23,34.6 C23,34.8209139 23.1790861,35 23.4,35 L23.4,35 L25.6,35 C25.8209139,35 26,34.8209139 26,34.6 L26,34.6 L26,20.4 C26,20.1790861 25.8209139,20 25.6,20 L25.6,20 Z M25.6,14 L23.4,14 C23.1790861,14 23,14.1790861 23,14.4 L23,14.4 L23,16.6 C23,16.8209139 23.1790861,17 23.4,17 L23.4,17 L25.6,17 C25.8209139,17 26,16.8209139 26,16.6 L26,16.6 L26,14.4 C26,14.1790861 25.8209139,14 25.6,14 L25.6,14 Z",id:"InformationCircleFill-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function d6(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"LeftOutline-LeftOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"LeftOutline-编组"},f.createElement("rect",{id:"LeftOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M31.7053818,5.11219264 L13.5234393,22.6612572 L13.5234393,22.6612572 C12.969699,23.2125856 12.9371261,24.0863155 13.4257204,24.6755735 L13.5234393,24.7825775 L31.7045714,42.8834676 C31.7795345,42.9580998 31.8810078,43 31.9867879,43 L35.1135102,43 C35.3344241,43 35.5135102,42.8209139 35.5135102,42.6 C35.5135102,42.4936115 35.4711279,42.391606 35.3957362,42.316542 L16.7799842,23.7816937 L16.7799842,23.7816937 L35.3764658,5.6866816 C35.5347957,5.53262122 35.5382568,5.27937888 35.3841964,5.121049 C35.3088921,5.04365775 35.205497,5 35.0975148,5 L31.9831711,5 C31.8795372,5 31.7799483,5.04022164 31.7053818,5.11219264 Z",id:"LeftOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}function Vm(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"LikeOutline-LikeOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"LikeOutline-编组"},f.createElement("rect",{id:"LikeOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M20.0245195,4.1214011 L23.7315534,5.49221472 C26.7196757,6.59718406 28.2994291,9.8932279 27.3528533,12.9445563 L37.0825854,12.9440637 C40.3506833,12.9440637 43,15.6357217 43,18.9560501 C43,19.1198466 42.9934114,19.2835746 42.9802505,19.4468244 L41.6877924,37.478788 C41.4362984,40.5983809 38.8709296,43 35.7901273,43 L8.94494304,43 C6.76621116,43 5,41.2055614 5,38.9920091 L5,16.9520546 C5,14.7385024 6.76621116,12.9440637 8.94494304,12.9440637 L14.763734,12.9438317 L17.4963776,5.31913403 C17.8689627,4.27910467 19.0008504,3.74286138 20.0245195,4.1214011 Z M13.476,15.9490857 L8.94494304,15.9500569 L8.94494304,15.9500569 C8.439166,15.9500569 8.02231243,16.3368683 7.96534241,16.8352005 L7.95870728,16.9520546 L7.95870728,38.9920091 C7.95870728,39.5058694 8.33943392,39.9293852 8.82992712,39.9872657 L8.94494304,39.9940068 L13.476,39.9940068 C13.6969139,39.9940068 13.876,39.8149207 13.876,39.5940068 L13.876,16.349 C13.8760857,16.1280861 13.6969996,15.949 13.4760857,15.949 C13.4760571,15.949 13.4760286,15.949 13.476,15.9490857 Z M22.7196159,8.31692433 L20.3174269,7.42886785 C20.110219,7.35226593 19.8801457,7.45814297 19.8035438,7.66535083 C19.8030863,7.66658827 19.802635,7.66782796 19.8021898,7.66906986 L16.857463,15.8835487 C16.8419374,15.9268582 16.834,15.9725215 16.834,16.0185297 L16.834,39.5940068 C16.834,39.8149207 17.0130861,39.9940068 17.234,39.9940068 L35.7901273,39.9940068 L35.7901273,39.9940068 C37.2712823,39.9940068 38.5141636,38.8837909 38.7193674,37.4117363 L38.7389599,37.2334008 L40.031418,19.2014373 C40.0379984,19.1198123 40.0412927,19.0379483 40.0412927,18.9560501 C40.0412927,17.3551775 38.8095632,16.0465885 37.2566231,15.9551598 L37.0827986,15.9500569 L23.860993,15.9508136 C23.6400791,15.9508263 23.4609828,15.7717504 23.4609702,15.5508365 C23.4609679,15.5106459 23.4670227,15.4706843 23.4789307,15.4322983 L24.5309842,12.0409582 L24.5309842,12.0409582 C24.9874031,10.569672 24.2659471,8.98929997 22.88219,8.38255136 L22.7196159,8.31692433 Z",id:"LikeOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function qa(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"LockOutline-LockOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"LockOutline-编组"},f.createElement("rect",{id:"LockOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,4 C30.627417,4 36,9.36227094 36,15.9769674 L36,22.042 L37,22.0422265 C39.209139,22.0422265 41,23.8296501 41,26.0345489 L41,40.0076775 C41,42.2125764 39.209139,44 37,44 L11,44 C8.790861,44 7,42.2125764 7,40.0076775 L7,26.0345489 C7,23.8296501 8.790861,22.0422265 11,22.0422265 L12,22.042 L12,15.9769674 C12,9.36227094 17.372583,4 24,4 Z M37,25.0364683 L11,25.0364683 C10.4871642,25.0364683 10.0644928,25.4217676 10.0067277,25.9181517 L10,26.0345489 L10,40.0076775 C10,40.5195291 10.3860402,40.9413891 10.8833789,40.9990433 L11,41.0057582 L37,41.0057582 C37.5128358,41.0057582 37.9355072,40.6204589 37.9932723,40.1240748 L38,40.0076775 L38,26.0345489 C38,25.5226974 37.6139598,25.1008374 37.1166211,25.0431831 L37,25.0364683 Z M26,30.350096 L26,35.5385797 C26,35.7594936 25.8209139,35.9385797 25.6,35.9385797 L23.4,35.9385797 C23.1790861,35.9385797 23,35.7594936 23,35.5385797 L23,30.350096 C23,30.1291821 23.1790861,29.950096 23.4,29.950096 L25.6,29.950096 C25.8209139,29.950096 26,30.1291821 26,30.350096 Z M24,6.99424184 C19.1181973,6.99424184 15.1442086,10.8735952 15.0038371,15.7121145 L15,15.9769674 L15,21.9654511 L33,21.9654511 L33,15.9769674 C33,11.1045347 29.1131863,7.13817363 24.2653623,6.99807158 L24,6.99424184 Z",id:"LockOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function sk(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"MailOutline-MailOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"MailOutline-编组"},f.createElement("rect",{id:"MailOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M39,6 C42.3137085,6 45,8.6862915 45,12 L45,36 C45,39.3137085 42.3137085,42 39,42 L9,42 C5.6862915,42 3,39.3137085 3,36 L3,12 C3,8.6862915 5.6862915,6 9,6 L39,6 Z M42,15.5 L24.1708025,23.9193433 C24.0626598,23.9704106 23.9373402,23.9704106 23.8291975,23.9193433 L6,15.5 L6,15.5 L6,36 C6,37.5976809 7.24891996,38.9036609 8.82372721,38.9949073 L9,39 L39,39 C40.5976809,39 41.9036609,37.75108 41.9949073,36.1762728 L42,36 L42,15.5 Z M39,9 L9,9 C7.40231912,9 6.09633912,10.24892 6.00509269,11.8237272 L6,12 L6,12.146 L23.8292039,20.5643558 C23.9373431,20.6154155 24.0626555,20.6154127 24.1707925,20.564348 L42,12.145 L42,12.145 L42,12 C42,10.4023191 40.75108,9.09633912 39.1762728,9.00509269 L39,9 Z",id:"MailOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function En(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"MessageOutline-MessageOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"MessageOutline-编组"},f.createElement("rect",{id:"MessageOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,5 C35.0454654,5 44,13.5065417 44,23.9999335 C44,34.3816935 35.234974,42.8187175 24.3517967,42.9970537 L24,42.999934 C20.5361038,43.0086689 17.1256565,42.1499296 14.0827434,40.5027329 L9.12272736,42.6506288 C8.20180797,43.0490167 7.13075643,42.6289802 6.73046083,41.7124519 C6.57362597,41.3533578 6.53805635,40.953324 6.6290919,40.5723965 L7.89727419,35.2705244 C5.44727043,32.1174388 4,28.2188348 4,23.999959 C4,13.5065671 12.9545346,5 24,5 Z M24.0000207,7.7142478 C14.4327303,7.7142478 6.7272871,15.0337886 6.7272871,23.9999335 C6.7272871,27.3746822 7.816377,30.5920198 9.81910787,33.2999345 L10.0545624,33.6102666 L10.851834,34.636263 L9.70274404,39.4387082 L14.2191094,37.4844293 L15.3900175,38.1213809 C17.9854744,39.5319012 20.9309429,40.2855624 24.0000207,40.2855624 C33.5672971,40.2855624 41.2727403,32.9660501 41.2727403,23.9999051 C41.2727403,15.0337601 33.5672971,7.7142478 24.0000207,7.7142478 Z M16.2500001,22 C17.2164956,22 18,22.7835004 18,23.75 C18,24.7164955 17.2164997,25.5 16.2500001,25.5 L16.2499999,25.5 C15.2835044,25.5 14.5,24.7164996 14.5,23.75 C14.5,22.7835045 15.2835003,22 16.2499999,22 L16.2500001,22 Z M32.2500001,22 C33.2164956,22 34,22.7835004 34,23.75 C34,24.7164955 33.2164997,25.5 32.2500001,25.5 L32.2499999,25.5 C31.2835044,25.5 30.5,24.7164996 30.5,23.75 C30.5,22.7835045 31.2835003,22 32.2499999,22 L32.2500001,22 Z M24.2500001,22 C25.2164956,22 26,22.7835004 26,23.75 C26,24.7164955 25.2164997,25.5 24.2500001,25.5 L24.2499999,25.5 C23.2835044,25.5 22.5,24.7164996 22.5,23.75 C22.5,22.7835045 23.2835003,22 24.2499999,22 L24.2500001,22 Z",id:"MessageOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function ak(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"MinusOutline-MinusOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"MinusOutline-add"},f.createElement("rect",{id:"MinusOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M41.1,22.5 C41.3209139,22.5 41.5,22.6790861 41.5,22.9 L41.5,25.1 C41.5,25.3209139 41.3209139,25.5 41.1,25.5 L6.9,25.5 C6.6790861,25.5 6.5,25.3209139 6.5,25.1 L6.5,22.9 C6.5,22.6790861 6.6790861,22.5 6.9,22.5 L41.1,22.5 Z",id:"MinusOutline-路径",fill:"currentColor",fillRule:"nonzero"}))))}function lk(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"PictureOutline-PictureOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"PictureOutline-编组"},f.createElement("rect",{id:"PictureOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M38,4 C41.3137085,4 44,6.6862915 44,10 L44,38 C44,41.3137085 41.3137085,44 38,44 L10,44 C6.6862915,44 4,41.3137085 4,38 L4,10 C4,6.6862915 6.6862915,4 10,4 L38,4 Z M38,7 L10,7 C8.40231912,7 7.09633912,8.24891996 7.00509269,9.82372721 L7,10 L7,38 C7,39.5976809 8.24891996,40.9036609 9.82372721,40.9949073 L10,41 L38,41 C39.5976809,41 40.9036609,39.75108 40.9949073,38.1762728 L41,38 L41,37.332 L32.7808252,29.1126218 C32.0818755,28.4136721 30.9683937,28.3819016 30.2317592,29.0173105 L30.1291748,29.1126218 L17.242,41.9990101 L13,41.9990101 L28.6265729,26.372583 C30.18867,24.8104858 32.72133,24.8104858 34.2834271,26.372583 L40.3171606,32.4061764 C40.4733721,32.5623843 40.7266381,32.5623814 40.882846,32.4061699 C40.9578585,32.3311556 41,32.2294154 41,32.1233304 L41,10 C41,8.40231912 39.75108,7.09633912 38.1762728,7.00509269 L38,7 Z",id:"PictureOutline-形状",fill:"currentColor",fillRule:"nonzero"}),f.createElement("path",{d:"M16,12 C18.7614237,12 21,14.2385763 21,17 C21,19.7614237 18.7614237,22 16,22 C13.2385763,22 11,19.7614237 11,17 C11,14.2385763 13.2385763,12 16,12 Z M16,15 C14.8954305,15 14,15.8954305 14,17 C14,18.1045695 14.8954305,19 16,19 C17.1045695,19 18,18.1045695 18,17 C18,15.8954305 17.1045695,15 16,15 Z",id:"PictureOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function ck(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"PieOutline-PieOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"PieOutline-编组"},f.createElement("rect",{id:"PieOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M5,24 C5,34.4934102 13.5065898,43 24,43 C28.7011913,43 33.0035955,41.2925892 36.3209311,38.4640488 L23.6849707,26.2605272 C22.6716546,25.2847412 22.0731878,23.9603561 22.0062863,22.5617979 L22,22.298766 L22.000568,5.10394836 C12.4469657,6.1030808 5,14.1818744 5,24 Z M42.9741311,25.0000926 L26.698,25 L38.4444316,36.3439015 C41.0824856,33.2598601 42.7500619,29.320914 42.9741311,25.0000926 Z M25.0000926,5.02586892 L25,22 L42.8960516,22.000568 C41.9310576,12.7733932 34.361933,5.51135535 25.0000926,5.02586892 Z",id:"PieOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function bu(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"QuestionCircleOutline-QuestionCircleOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"QuestionCircleOutline-编组"},f.createElement("rect",{id:"QuestionCircleOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M26,32.4 L26,34.6 C26,34.8209139 25.8209139,35 25.6,35 L23.4,35 C23.1790861,35 23,34.8209139 23,34.6 L23,32.4 C23,32.1790861 23.1790861,32 23.4,32 L25.6,32 C25.8209139,32 26,32.1790861 26,32.4 Z M24,12 C27.8659932,12 31,15.1340068 31,19 C31,22.1706393 28.8919961,24.8489278 26.0010432,25.7098107 L26.0001268,28.6 C25.9999299,28.8208643 25.8208644,28.9998731 25.6,29 L23.4,29 C23.1790861,29 23,28.8209139 23,28.6 L23,23.4 C23,23.1790861 23.1790861,23 23.4,23 L24,23 L24,23 C26.209139,23 28,21.209139 28,19 C28,16.790861 26.209139,15 24,15 C21.790861,15 20,16.790861 20,19 L17,19 C17,15.1340068 20.1340068,12 24,12 Z",id:"QuestionCircleOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function Rr(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"RightOutline-RightOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"RightOutline-RightOutlined"},f.createElement("rect",{id:"RightOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M17.3947957,5.11219264 L35.5767382,22.6612572 L35.5767382,22.6612572 C36.1304785,23.2125856 36.1630514,24.0863155 35.6744571,24.6755735 L35.5767382,24.7825775 L17.3956061,42.8834676 C17.320643,42.9580998 17.2191697,43 17.1133896,43 L13.9866673,43 C13.7657534,43 13.5866673,42.8209139 13.5866673,42.6 C13.5866673,42.4936115 13.6290496,42.391606 13.7044413,42.316542 L32.3201933,23.7816937 L32.3201933,23.7816937 L13.7237117,5.6866816 C13.5653818,5.53262122 13.5619207,5.27937888 13.7159811,5.121049 C13.7912854,5.04365775 13.8946805,5 14.0026627,5 L17.1170064,5 C17.2206403,5 17.3202292,5.04022164 17.3947957,5.11219264 Z",id:"RightOutline-right",fill:"currentColor",fillRule:"nonzero"}))))}function ns(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"SetOutline-SetOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"SetOutline-编组"},f.createElement("rect",{id:"SetOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M29.6635785,4.09347573 C29.6943765,4.10280636 29.7218319,4.11121584 29.7459445,4.11870417 C32.9286193,5.10710452 35.7780984,6.89542969 38.0773907,9.25862405 C38.1048534,9.28685006 38.137705,9.32098069 38.1759455,9.36101594 L38.1758731,9.36108506 C38.2958121,9.4866534 38.3210097,9.67527399 38.2382375,9.82792234 C38.2019091,9.89491908 38.1723405,9.95145741 38.1495317,9.99753731 C37.2499501,11.8149357 37.2312381,14.0542329 38.2894192,15.9551742 C39.3113653,17.7910221 41.0990205,18.8824923 42.9924218,19.046176 C43.0308388,19.0494971 43.0769297,19.0526108 43.1306946,19.055517 L43.1306891,19.0556186 C43.3097688,19.0652987 43.4605039,19.1930174 43.4994562,19.3680772 C43.5181604,19.4521376 43.5334344,19.5224186 43.5452782,19.5789201 C43.8434094,21.0011724 44,22.4782234 44,23.9932074 C44,25.9110818 43.7490484,27.768165 43.2793445,29.5310609 C43.2673008,29.5762635 43.2521361,29.6318295 43.2338504,29.6977589 L43.2339096,29.6977753 C43.1896789,29.8572501 43.0518211,29.9730289 42.8871024,29.9890386 C42.8573588,29.9919295 42.8310363,29.994728 42.8081347,29.9974341 C40.9832456,30.2130642 39.2780401,31.2924244 38.2894192,33.0684062 C37.3690455,34.721787 37.2633405,36.6311336 37.8431283,38.2964388 C37.8645836,38.3580642 37.894274,38.4365116 37.9321995,38.531781 L37.9323132,38.5317357 C37.9914458,38.6802779 37.956476,38.8497628 37.843378,38.9627686 C37.7865957,39.0195046 37.7392204,39.0664065 37.7012522,39.1034741 C35.4293099,41.3215235 32.6557522,42.9941892 29.5759974,43.9196324 C29.4537483,43.9563673 29.2860191,44.0037796 29.0728098,44.0618692 L29.0728273,44.0619334 C28.91719,44.1043373 28.751312,44.0491222 28.6521374,43.9219001 C28.5788324,43.8278638 28.5179309,43.752778 28.4694329,43.6966426 C27.3705613,42.4247239 25.7753243,41.6250222 24,41.6250222 C22.2788787,41.6250222 20.727016,42.3766374 19.6328956,43.5806625 C19.5591199,43.661849 19.4643813,43.7758944 19.34868,43.9227986 L19.3486175,43.9227494 C19.2493155,44.0488316 19.0842591,44.1033371 18.9294019,44.0611842 C18.7099668,44.0014529 18.5375942,43.9527361 18.4122839,43.9150337 C15.3282444,42.9871326 12.5518465,41.3090762 10.2781268,39.0843168 C10.2449964,39.0518999 10.2042406,39.0115257 10.1558594,38.9631942 L10.1558261,38.9632275 C10.04253,38.8500478 10.0076468,38.680209 10.0671608,38.5315358 C10.0959923,38.4595114 10.1191005,38.3992875 10.1364852,38.3508643 C10.7388765,36.6729735 10.6410312,34.7398891 9.71058084,33.0684062 C8.77900775,31.3949064 7.21116421,30.3399516 5.50695414,30.0424689 C5.40889863,30.0253526 5.27714893,30.0081907 5.11170504,29.9909832 L5.11171738,29.9908645 C4.94823645,29.9738612 4.81180998,29.8585556 4.76780345,29.7001935 C4.74656016,29.6237473 4.7291408,29.5599484 4.71554538,29.508797 C4.24893773,27.7532311 4,25.903371 4,23.9932074 C4,22.4054758 4.17199022,20.8594077 4.49770159,19.3739511 C4.49806505,19.3722935 4.49843334,19.3706159 4.49880646,19.3689185 L4.49883435,19.3689247 C4.5374295,19.1933462 4.68842311,19.0650888 4.86793244,19.0554044 C4.90654419,19.0533214 4.94037279,19.0511226 4.96941824,19.0488081 C6.87752944,18.896758 8.68194132,17.8030464 9.71058084,15.9551742 C10.7160785,14.1488746 10.7492438,12.0370719 9.97851139,10.271735 C9.92961058,10.1597293 9.85632321,10.0117916 9.75864928,9.82792177 L9.75863681,9.8279284 C9.67757981,9.67533972 9.70365562,9.48795295 9.8232933,9.36329195 C9.95974282,9.22111323 10.0692945,9.10887896 10.1519482,9.02658914 C12.326484,6.86162837 14.9722368,5.2013723 17.9137138,4.22786185 C18.0198088,4.19274868 18.1613328,4.14821666 18.3382858,4.09426578 L18.3382697,4.0942132 C18.5189812,4.03911642 18.7136034,4.11794967 18.8050299,4.28327804 C18.8832892,4.42479596 18.9491374,4.53716566 19.0025746,4.62038717 C20.0780793,6.29534615 21.9148218,7.39855818 24,7.39855818 C26.1773809,7.39855818 28.0838696,6.19562513 29.1353621,4.39557165 C29.1469048,4.37581178 29.1669487,4.3394508 29.1954939,4.28648874 L29.1955161,4.28650073 C29.2857772,4.11903248 29.4815071,4.0383151 29.6635785,4.09347573 Z M30.291723,7.85114089 L30.291723,7.85114089 L30.291723,7.85114089 C28.6437806,9.52218192 26.4047627,10.5100549 24,10.5100549 C21.6223815,10.5100549 19.4098701,9.54440347 17.7697895,7.91280929 L17.7132092,7.85462809 C17.6100913,7.74859263 17.4522642,7.71712891 17.3163679,7.77551557 L17.3163679,7.77551557 L17.3163679,7.77551557 C15.9322776,8.39005242 14.633762,9.19368235 13.4541246,10.1628476 L13.3867297,10.2196976 C13.2694828,10.3185994 13.2191193,10.475839 13.2570868,10.6244556 L13.2575903,10.6264267 L13.2575903,10.6264267 C13.7725685,12.8102642 13.5205613,15.1562719 12.464932,17.2183236 L12.3086571,17.5109225 C11.1920953,19.5167402 9.43480152,20.9698965 7.40855181,21.6828434 C7.40091095,21.6855318 7.38973993,21.6893285 7.37503876,21.6942335 L7.37504204,21.6942433 C7.22714595,21.7435875 7.12139963,21.8743708 7.1041119,22.0293199 C7.10248639,22.0438892 7.10118391,22.055854 7.10020446,22.0652143 C7.05194441,22.526416 7.02100448,22.9912373 7.00762775,23.4589912 L7,23.9932074 C7,24.9613003 7.07495263,25.917621 7.22258691,26.855785 L7.25959287,27.0722616 C7.28391536,27.2139796 7.3823706,27.3317948 7.51754776,27.380812 C7.59686483,27.4095736 7.65871065,27.4326633 7.70308522,27.4500811 C9.51548077,28.1614794 11.0888905,29.4725697 12.1509777,31.2401084 L12.3086571,31.5126578 C13.3435133,33.371698 13.7095027,35.4923797 13.4194465,37.5343141 C13.4191519,37.5363877 13.4187954,37.5388325 13.418377,37.5416483 L13.4183868,37.5416498 C13.3977083,37.6808038 13.4516529,37.8205903 13.5604504,37.9097785 C13.5795524,37.9254377 13.5927649,37.936209 13.6000877,37.9420922 C14.9359782,39.0153738 16.4186528,39.8773318 18.0012021,40.4960686 C18.0180019,40.5026369 18.0499461,40.5147385 18.0970346,40.5323735 L18.0970476,40.5323389 C18.2301703,40.5821942 18.3797517,40.5576453 18.4899563,40.4678557 C18.5407032,40.4265096 18.5745502,40.3992232 18.5914976,40.3859965 C20.0437878,39.2525436 21.8148223,38.5847722 23.692736,38.5189087 L24,38.5135255 C26.0546357,38.5135255 27.9962679,39.2344251 29.5525918,40.5011394 L29.5625019,40.5094288 C29.6390288,40.5734408 29.7436987,40.5922165 29.8377034,40.5587945 L29.8377034,40.5587945 L29.8377034,40.5587945 C31.4665237,39.9410888 32.9918221,39.0671383 34.3628695,37.9713833 C34.3758544,37.9610056 34.4017031,37.9399379 34.4404158,37.9081801 L34.4404118,37.9081753 C34.5491233,37.818994 34.6030242,37.679281 34.582378,37.5401939 C34.5701682,37.4579399 34.562495,37.4043003 34.5593585,37.379275 C34.3224766,35.4892434 34.6454399,33.5395462 35.5385639,31.7984312 L35.691343,31.5126578 C36.7621637,29.5890102 38.4237823,28.1708936 40.3512816,27.4294657 L40.4811388,27.3826779 C40.6164373,27.3339296 40.7151527,27.2163026 40.7396867,27.0745981 L40.7775003,26.8561932 L40.7775003,26.8561932 C40.8955662,26.1052033 40.9671265,25.3429213 40.9910279,24.5725001 L41,23.9932074 C41,23.3339341 40.9652437,22.6802401 40.8963936,22.0340808 C40.8962979,22.0331827 40.8961981,22.0322526 40.8960941,22.0312906 L40.8960534,22.031295 C40.879315,21.876429 40.7741874,21.7453695 40.6266425,21.6954283 C40.6235192,21.6943711 40.6208408,21.6934535 40.6186073,21.6926756 C38.6753505,21.0158623 36.9771921,19.6590351 35.8512449,17.7871679 L35.691343,17.5109225 C34.5050786,15.3798894 34.2028644,12.9138423 34.7426714,10.6260269 L34.7435697,10.6224291 C34.7805548,10.4742946 34.7299853,10.3180262 34.6132258,10.2196445 L34.5460544,10.1630459 L34.5460544,10.1630459 C33.3663284,9.19377043 32.0677839,8.39009518 30.6836701,7.77553631 L30.6752045,7.77193094 C30.5433665,7.71578291 30.3905255,7.74735294 30.291723,7.85114089 Z M24,16.7330484 C27.8659932,16.7330484 31,19.9835323 31,23.9932074 C31,28.0028825 27.8659932,31.2533664 24,31.2533664 C20.1340068,31.2533664 17,28.0028825 17,23.9932074 C17,19.9835323 20.1340068,16.7330484 24,16.7330484 Z M24,19.8445451 C21.790861,19.8445451 20,21.7019645 20,23.9932074 C20,26.2844503 21.790861,28.1418697 24,28.1418697 C26.209139,28.1418697 28,26.2844503 28,23.9932074 C28,21.7019645 26.209139,19.8445451 24,19.8445451 Z",id:"SetOutline-形状",fill:"currentColor",fillRule:"nonzero"}))))}function uk(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"SmileOutline-SmileOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"SmileOutline-编组"},f.createElement("rect",{id:"SmileOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24,2 C36.1502645,2 46,11.8497355 46,24 C46,36.1502645 36.1502645,46 24,46 C11.8497355,46 2,36.1502645 2,24 C2,11.8497355 11.8497355,2 24,2 Z M24,5 C13.5065898,5 5,13.5065898 5,24 C5,34.4934102 13.5065898,43 24,43 C34.4934102,43 43,34.4934102 43,24 C43,13.5065898 34.4934102,5 24,5 Z M14.0458046,26.5174634 C14.1287685,26.3971688 14.2935421,26.3669063 14.4138242,26.4498883 C14.4436571,26.4704632 14.4708829,26.4890663 14.4955018,26.5056975 C17.208648,28.3385613 20.4793419,29.408785 24,29.408785 C27.5197511,29.408785 30.7896669,28.3391126 33.5024013,26.5071138 L33.5024013,26.5071138 L33.5581039,26.4770566 C33.5969468,26.4608325 33.6388099,26.4523573 33.6813205,26.4523573 C33.8578812,26.4523573 34.0010118,26.595488 34.0009735,26.7720486 L34.0009735,26.7720486 L34.0006746,29.4995669 C34.0006492,29.6440904 33.9226882,29.7773677 33.7966693,29.8481229 C33.6527935,29.9290566 33.537965,29.9925674 33.4521837,30.0386552 C30.6375036,31.5509024 27.4189364,32.408785 24,32.408785 C20.5458697,32.408785 17.296255,31.5331498 14.4610235,29.991747 C14.3953412,29.9560382 14.3093075,29.9081912 14.2029223,29.848206 C14.0772269,29.7773329 13.9994637,29.6442379 13.9993289,29.4999385 L13.9993289,29.4999385 L13.9990265,26.6676828 L13.9990265,26.6676828 L14.0043844,26.614705 C14.0114748,26.5800114 14.0254953,26.5469111 14.0458046,26.5174634 Z M16,18 C17.1045695,18 18,18.8954305 18,20 C18,21.1045695 17.1045695,22 16,22 C14.8954305,22 14,21.1045695 14,20 C14,18.8954305 14.8954305,18 16,18 Z M32,18 C33.1045695,18 34,18.8954305 34,20 C34,21.1045695 33.1045695,22 32,22 C30.8954305,22 30,21.1045695 30,20 C30,18.8954305 30.8954305,18 32,18 Z",id:"SmileOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function gn(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"StarFill-StarFill",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"StarFill-编组"},f.createElement("rect",{id:"StarFill-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M25.845596,4.44900551 C26.6681364,4.87129848 27.3339158,5.56388467 27.7398638,6.41954369 L31.6608321,14.6841788 L40.4283838,16.0094747 C42.70793,16.354049 44.2873463,18.5557239 43.9561089,20.9270533 C43.8242084,21.8713291 43.3967517,22.7440386 42.7399141,23.4100762 L36.3956541,29.8431975 L37.8933307,38.9269105 C38.2827237,41.2886581 36.7579187,43.531608 34.4875834,43.9366794 C33.5835239,44.097981 32.6535618,43.9447589 31.8416658,43.5007338 L23.9997292,39.2119863 L16.1577926,43.5007338 C14.1189044,44.6157998 11.5971068,43.8003441 10.5251999,41.6793627 C10.0983609,40.8347767 9.95106936,39.8673708 10.1061277,38.9269105 L11.6038043,29.8431975 L5.25954433,23.4100762 C3.61004918,21.7374773 3.57629754,18.9905481 5.18415792,17.274638 C5.82441637,16.5913537 6.66334736,16.146686 7.57107463,16.0094747 L16.3386263,14.6841788 L20.2595946,6.41954369 C21.2790387,4.27075478 23.7799767,3.38851478 25.845596,4.44900551 Z",id:"StarFill-路径",fill:"currentColor",fillRule:"nonzero"}))))}function Ut(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"StarOutline-StarOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"StarOutline-编组"},f.createElement("rect",{id:"StarOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M25.845596,4.44900551 C26.6681364,4.87129848 27.3339158,5.56388467 27.7398638,6.41954369 L31.6608321,14.6841788 L40.4283838,16.0094747 C42.70793,16.354049 44.2873463,18.5557239 43.9561089,20.9270533 C43.8242084,21.8713291 43.3967517,22.7440386 42.7399141,23.4100762 L36.3956541,29.8431975 L37.8933307,38.9269105 C38.2827237,41.2886581 36.7579187,43.531608 34.4875834,43.9366794 C33.5835239,44.097981 32.6535618,43.9447589 31.8416658,43.5007338 L23.9997292,39.2119863 L16.1577926,43.5007338 C14.1189044,44.6157998 11.5971068,43.8003441 10.5251999,41.6793627 C10.0983609,40.8347767 9.95106936,39.8673708 10.1061277,38.9269105 L11.6038043,29.8431975 L5.25954433,23.4100762 C3.61004918,21.7374773 3.57629754,18.9905481 5.18415792,17.274638 C5.82441637,16.5913537 6.66334736,16.146686 7.57107463,16.0094747 L16.3386263,14.6841788 L20.2595946,6.41954369 C21.2790387,4.27075478 23.7799767,3.38851478 25.845596,4.44900551 Z M24.4649084,7.19036662 C23.9817424,6.94156666 23.4040248,7.11599174 23.1183508,7.57685715 L23.0577862,7.68823318 L18.3736364,17.5910426 L7.89955916,19.179032 C7.67090127,19.2136991 7.45957327,19.3260467 7.29829119,19.498682 C6.92442428,19.8988667 6.90290967,20.5210094 7.2286221,20.9467347 L7.31728114,21.0488319 L14.8963946,28.757094 L13.1072086,39.6413349 C13.0681492,39.878947 13.1052522,40.1233671 13.2127736,40.336756 C13.4635018,40.8343559 14.0291474,41.0475463 14.5198909,40.8498968 L14.6316323,40.7969348 L23.9999318,35.6580933 L33.3682313,40.7969348 C33.5727491,40.90912 33.807008,40.9478323 34.034742,40.9070787 C34.5657928,40.8120455 34.9349139,40.3166295 34.9064008,39.7685831 L34.8926549,39.6413349 L33.1034689,28.757094 L40.6825824,21.0488319 C40.8480408,20.880554 40.9557178,20.6600595 40.9889438,20.4214834 C41.066423,19.8651498 40.7289068,19.3457755 40.2205412,19.2047137 L40.1003044,19.179032 L29.6262272,17.5910426 L24.9420774,7.68823318 C24.8602703,7.51528387 24.7365739,7.36870333 24.5842817,7.2623615 L24.4649084,7.19036662 Z",id:"StarOutline-星形",fill:"currentColor",fillRule:"nonzero"}))))}function f6(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"UnorderedListOutline-UnorderedListOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"UnorderedListOutline-编组"},f.createElement("rect",{id:"UnorderedListOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M8.5,32 C10.9852814,32 13,34.0147186 13,36.5 C13,38.9852814 10.9852814,41 8.5,41 C6.01471863,41 4,38.9852814 4,36.5 C4,34.0147186 6.01471863,32 8.5,32 Z M8.5,35 C7.67157288,35 7,35.6715729 7,36.5 C7,37.3284271 7.67157288,38 8.5,38 C9.32842712,38 10,37.3284271 10,36.5 C10,35.6715729 9.32842712,35 8.5,35 Z M43.6,35 C43.8209139,35 44,35.1790861 44,35.4 L44,37.6 C44,37.8209139 43.8209139,38 43.6,38 L16.4,38 C16.1790861,38 16,37.8209139 16,37.6 L16,35.4 C16,35.1790861 16.1790861,35 16.4,35 L43.6,35 Z M8.5,19 C10.9852814,19 13,21.0147186 13,23.5 C13,25.9852814 10.9852814,28 8.5,28 C6.01471863,28 4,25.9852814 4,23.5 C4,21.0147186 6.01471863,19 8.5,19 Z M8.5,22 C7.67157288,22 7,22.6715729 7,23.5 C7,24.3284271 7.67157288,25 8.5,25 C9.32842712,25 10,24.3284271 10,23.5 C10,22.6715729 9.32842712,22 8.5,22 Z M43.6,22 C43.8209139,22 44,22.1790861 44,22.4 L44,24.6 C44,24.8209139 43.8209139,25 43.6,25 L16.4,25 C16.1790861,25 16,24.8209139 16,24.6 L16,22.4 C16,22.1790861 16.1790861,22 16.4,22 L43.6,22 Z M8.5,6 C10.9852814,6 13,8.01471863 13,10.5 C13,12.9852814 10.9852814,15 8.5,15 C6.01471863,15 4,12.9852814 4,10.5 C4,8.01471863 6.01471863,6 8.5,6 Z M8.5,9 C7.67157288,9 7,9.67157288 7,10.5 C7,11.3284271 7.67157288,12 8.5,12 C9.32842712,12 10,11.3284271 10,10.5 C10,9.67157288 9.32842712,9 8.5,9 Z M43.6,9 C43.8209139,9 44,9.1790861 44,9.4 L44,11.6 C44,11.8209139 43.8209139,12 43.6,12 L16.4,12 C16.1790861,12 16,11.8209139 16,11.6 L16,9.4 C16,9.1790861 16.1790861,9 16.4,9 L43.6,9 Z",id:"UnorderedListOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}function qr(e){return f.createElement("svg",Object.assign({width:"1em",height:"1em",viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg",xmlnsXlink:"http://www.w3.org/1999/xlink"},e,{style:Object.assign({verticalAlign:"-0.125em"},e.style),className:["antd-mobile-icon",e.className].filter(Boolean).join(" ")}),f.createElement("g",{id:"UserOutline-UserOutline",stroke:"none",strokeWidth:1,fill:"none",fillRule:"evenodd"},f.createElement("g",{id:"UserOutline-编组"},f.createElement("rect",{id:"UserOutline-矩形",fill:"#FFFFFF",opacity:0,x:0,y:0,width:48,height:48}),f.createElement("path",{d:"M24.5,4 C30.0112644,4 34.479027,8.46775399 34.479027,13.9790078 L34.479027,18.0209922 C34.479027,21.7144498 32.4724515,24.9392476 29.4899594,26.6647285 L29.4895135,27 L40.4649873,32.8658886 C42.8766161,34.1547938 44.2604463,36.7822067 43.9591026,39.5 C43.6750656,42.0617054 41.5099747,44 38.9325658,44 L10.0674342,44 C7.49002529,44 5.32493441,42.0617054 5.04089744,39.5 C4.73955374,36.7822067 6.12338392,34.1547938 8.53501271,32.8658886 L19.5104865,27 L19.5100406,26.6647285 C16.5275485,24.9392476 14.520973,21.7144498 14.520973,18.0209922 L14.520973,13.9790078 C14.520973,8.46775399 18.9887356,4 24.5,4 Z M24.5,7 C20.7258932,7 17.6514878,9.9957724 17.5250256,13.7390798 L17.5209788,13.9790078 L17.5209788,18.0209922 C17.5209788,20.4528116 18.7728519,22.6635411 20.7856095,23.9310701 L21.0123556,24.0679885 L22.3083607,24.817775 C22.4317831,24.8891793 22.5078628,25.0208861 22.5080524,25.1634751 L22.5125654,28.5568164 C22.512762,28.7046068 22.4314515,28.8404631 22.3011089,28.9101252 L9.94909066,35.5117138 L9.94909066,35.5117138 C8.6194532,36.2223442 7.85648652,37.670953 8.0226306,39.1693924 C8.13239999,40.1593932 8.93277672,40.9205158 9.91149276,40.9941531 L10.0674342,41 L38.9325658,41 C39.9810601,41 40.8618227,40.2114985 40.9773694,39.1693924 C41.1359615,37.7390639 40.4479878,36.3541389 39.2286771,35.6131276 L39.0509093,35.5117138 L26.6988911,28.9101252 C26.5685485,28.8404631 26.487238,28.7046068 26.4874346,28.5568164 L26.4919476,25.1634751 C26.4921372,25.0208861 26.5682169,24.8891793 26.6916393,24.817775 L27.9876444,24.0679885 L27.9876444,24.0679885 C30.0560904,22.8713167 31.3818366,20.7046996 31.4738944,18.2902478 L31.4790212,18.0209922 L31.4790212,13.9790078 C31.4790212,10.1246082 28.354407,7 24.5,7 Z",id:"UserOutline-形状结合",fill:"currentColor",fillRule:"nonzero"}))))}const h6={closeOnMaskClick:!1,closeIcon:k.createElement(dl,null),destroyOnClose:!1,disableBodyScroll:!0,forceRender:!1,getContainer:()=>document.body,mask:!0,showCloseButton:!1,stopPropagation:["click"],visible:!1};function p6(e){const[t,n]=f.useState(e);return Ft(()=>{n(e)},[e]),t}function dk(e,t,n){return Math.max(t,Math.min(e,n))}const it={toVector(e,t){return e===void 0&&(e=t),Array.isArray(e)?e:[e,e]},add(e,t){return[e[0]+t[0],e[1]+t[1]]},sub(e,t){return[e[0]-t[0],e[1]-t[1]]},addTo(e,t){e[0]+=t[0],e[1]+=t[1]},subTo(e,t){e[0]-=t[0],e[1]-=t[1]}};function Wm(e,t,n){return t===0||Math.abs(t)===1/0?Math.pow(e,n*5):e*t*n/(t+n*e)}function Um(e,t,n,r=.15){return r===0?dk(e,t,n):e<t?-Wm(t-e,n-t,r)+t:e>n?+Wm(e-n,n-t,r)+n:e}function fk(e,[t,n],[r,i]){const[[o,s],[l,c]]=e;return[Um(t,o,s,r),Um(n,l,c,i)]}function hk(e,t){if(typeof e!="object"||e===null)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(typeof r!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function pk(e){var t=hk(e,"string");return typeof t=="symbol"?t:String(t)}function pt(e,t,n){return t=pk(t),t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function Hm(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function Me(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?Hm(Object(n),!0).forEach(function(r){pt(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):Hm(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}const m6={pointer:{start:"down",change:"move",end:"up"},mouse:{start:"down",change:"move",end:"up"},touch:{start:"start",change:"move",end:"end"},gesture:{start:"start",change:"change",end:"end"}};function qm(e){return e?e[0].toUpperCase()+e.slice(1):""}const mk=["enter","leave"];function gk(e=!1,t){return e&&!mk.includes(t)}function vk(e,t="",n=!1){const r=m6[e],i=r&&r[t]||t;return"on"+qm(e)+qm(i)+(gk(n,i)?"Capture":"")}const xk=["gotpointercapture","lostpointercapture"];function yk(e){let t=e.substring(2).toLowerCase();const n=!!~t.indexOf("passive");n&&(t=t.replace("passive",""));const r=xk.includes(t)?"capturecapture":"capture",i=!!~t.indexOf(r);return i&&(t=t.replace("capture","")),{device:t,capture:i,passive:n}}function wk(e,t=""){const n=m6[e],r=n&&n[t]||t;return e+r}function pd(e){return"touches"in e}function g6(e){return pd(e)?"touch":"pointerType"in e?e.pointerType:"mouse"}function bk(e){return Array.from(e.touches).filter(t=>{var n,r;return t.target===e.currentTarget||((n=e.currentTarget)===null||n===void 0||(r=n.contains)===null||r===void 0?void 0:r.call(n,t.target))})}function Ck(e){return e.type==="touchend"||e.type==="touchcancel"?e.changedTouches:e.targetTouches}function v6(e){return pd(e)?Ck(e)[0]:e}function kk(e){return bk(e).map(t=>t.identifier)}function wf(e){const t=v6(e);return pd(e)?t.identifier:t.pointerId}function Zm(e){const t=v6(e);return[t.clientX,t.clientY]}const Qm=40,Gm=800;function jk(e){let{deltaX:t,deltaY:n,deltaMode:r}=e;return r===1?(t*=Qm,n*=Qm):r===2&&(t*=Gm,n*=Gm),[t,n]}function Ek(e){const t={};if("buttons"in e&&(t.buttons=e.buttons),"shiftKey"in e){const{shiftKey:n,altKey:r,metaKey:i,ctrlKey:o}=e;Object.assign(t,{shiftKey:n,altKey:r,metaKey:i,ctrlKey:o})}return t}function Cu(e,...t){return typeof e=="function"?e(...t):e}function Sk(){}function Lk(...e){return e.length===0?Sk:e.length===1?e[0]:function(){let t;for(const n of e)t=n.apply(this,arguments)||t;return t}}function Km(e,t){return Object.assign({},t,e||{})}const $k=32;class _k{constructor(t,n,r){this.ctrl=t,this.args=n,this.key=r,this.state||(this.state={},this.computeValues([0,0]),this.computeInitial(),this.init&&this.init(),this.reset())}get state(){return this.ctrl.state[this.key]}set state(t){this.ctrl.state[this.key]=t}get shared(){return this.ctrl.state.shared}get eventStore(){return this.ctrl.gestureEventStores[this.key]}get timeoutStore(){return this.ctrl.gestureTimeoutStores[this.key]}get config(){return this.ctrl.config[this.key]}get sharedConfig(){return this.ctrl.config.shared}get handler(){return this.ctrl.handlers[this.key]}reset(){const{state:t,shared:n,ingKey:r,args:i}=this;n[r]=t._active=t.active=t._blocked=t._force=!1,t._step=[!1,!1],t.intentional=!1,t._movement=[0,0],t._distance=[0,0],t._direction=[0,0],t._delta=[0,0],t._bounds=[[-1/0,1/0],[-1/0,1/0]],t.args=i,t.axis=void 0,t.memo=void 0,t.elapsedTime=t.timeDelta=0,t.direction=[0,0],t.distance=[0,0],t.overflow=[0,0],t._movementBound=[!1,!1],t.velocity=[0,0],t.movement=[0,0],t.delta=[0,0],t.timeStamp=0}start(t){const n=this.state,r=this.config;n._active||(this.reset(),this.computeInitial(),n._active=!0,n.target=t.target,n.currentTarget=t.currentTarget,n.lastOffset=r.from?Cu(r.from,n):n.offset,n.offset=n.lastOffset,n.startTime=n.timeStamp=t.timeStamp)}computeValues(t){const n=this.state;n._values=t,n.values=this.config.transform(t)}computeInitial(){const t=this.state;t._initial=t._values,t.initial=t.values}compute(t){const{state:n,config:r,shared:i}=this;n.args=this.args;let o=0;if(t&&(n.event=t,r.preventDefault&&t.cancelable&&n.event.preventDefault(),n.type=t.type,i.touches=this.ctrl.pointerIds.size||this.ctrl.touchIds.size,i.locked=!!document.pointerLockElement,Object.assign(i,Ek(t)),i.down=i.pressed=i.buttons%2===1||i.touches>0,o=t.timeStamp-n.timeStamp,n.timeStamp=t.timeStamp,n.elapsedTime=n.timeStamp-n.startTime),n._active){const E=n._delta.map(Math.abs);it.addTo(n._distance,E)}this.axisIntent&&this.axisIntent(t);const[s,l]=n._movement,[c,u]=r.threshold,{_step:d,values:p}=n;if(r.hasCustomTransform?(d[0]===!1&&(d[0]=Math.abs(s)>=c&&p[0]),d[1]===!1&&(d[1]=Math.abs(l)>=u&&p[1])):(d[0]===!1&&(d[0]=Math.abs(s)>=c&&Math.sign(s)*c),d[1]===!1&&(d[1]=Math.abs(l)>=u&&Math.sign(l)*u)),n.intentional=d[0]!==!1||d[1]!==!1,!n.intentional)return;const g=[0,0];if(r.hasCustomTransform){const[E,$]=p;g[0]=d[0]!==!1?E-d[0]:0,g[1]=d[1]!==!1?$-d[1]:0}else g[0]=d[0]!==!1?s-d[0]:0,g[1]=d[1]!==!1?l-d[1]:0;this.restrictToAxis&&!n._blocked&&this.restrictToAxis(g);const w=n.offset,y=n._active&&!n._blocked||n.active;y&&(n.first=n._active&&!n.active,n.last=!n._active&&n.active,n.active=i[this.ingKey]=n._active,t&&(n.first&&("bounds"in r&&(n._bounds=Cu(r.bounds,n)),this.setup&&this.setup()),n.movement=g,this.computeOffset()));const[x,C]=n.offset,[[m,v],[h,b]]=n._bounds;n.overflow=[x<m?-1:x>v?1:0,C<h?-1:C>b?1:0],n._movementBound[0]=n.overflow[0]?n._movementBound[0]===!1?n._movement[0]:n._movementBound[0]:!1,n._movementBound[1]=n.overflow[1]?n._movementBound[1]===!1?n._movement[1]:n._movementBound[1]:!1;const j=n._active?r.rubberband||[0,0]:[0,0];if(n.offset=fk(n._bounds,n.offset,j),n.delta=it.sub(n.offset,w),this.computeMovement(),y&&(!n.last||o>$k)){n.delta=it.sub(n.offset,w);const E=n.delta.map(Math.abs);it.addTo(n.distance,E),n.direction=n.delta.map(Math.sign),n._direction=n._delta.map(Math.sign),!n.first&&o>0&&(n.velocity=[E[0]/o,E[1]/o],n.timeDelta=o)}}emit(){const t=this.state,n=this.shared,r=this.config;if(t._active||this.clean(),(t._blocked||!t.intentional)&&!t._force&&!r.triggerAllEvents)return;const i=this.handler(Me(Me(Me({},n),t),{},{[this.aliasKey]:t.values}));i!==void 0&&(t.memo=i)}clean(){this.eventStore.clean(),this.timeoutStore.clean()}}function Fk([e,t],n){const r=Math.abs(e),i=Math.abs(t);if(r>i&&r>n)return"x";if(i>r&&i>n)return"y"}class x6 extends _k{constructor(...t){super(...t),pt(this,"aliasKey","xy")}reset(){super.reset(),this.state.axis=void 0}init(){this.state.offset=[0,0],this.state.lastOffset=[0,0]}computeOffset(){this.state.offset=it.add(this.state.lastOffset,this.state.movement)}computeMovement(){this.state.movement=it.sub(this.state.offset,this.state.lastOffset)}axisIntent(t){const n=this.state,r=this.config;if(!n.axis&&t){const i=typeof r.axisThreshold=="object"?r.axisThreshold[g6(t)]:r.axisThreshold;n.axis=Fk(n._movement,i)}n._blocked=(r.lockDirection||!!r.axis)&&!n.axis||!!r.axis&&r.axis!==n.axis}restrictToAxis(t){if(this.config.axis||this.config.lockDirection)switch(this.state.axis){case"x":t[1]=0;break;case"y":t[0]=0;break}}}const Ok=e=>e,Ym=.15,y6={enabled(e=!0){return e},eventOptions(e,t,n){return Me(Me({},n.shared.eventOptions),e)},preventDefault(e=!1){return e},triggerAllEvents(e=!1){return e},rubberband(e=0){switch(e){case!0:return[Ym,Ym];case!1:return[0,0];default:return it.toVector(e)}},from(e){if(typeof e=="function")return e;if(e!=null)return it.toVector(e)},transform(e,t,n){const r=e||n.shared.transform;return this.hasCustomTransform=!!r,r||Ok},threshold(e){return it.toVector(e,0)}},Nk=0,rs=Me(Me({},y6),{},{axis(e,t,{axis:n}){if(this.lockDirection=n==="lock",!this.lockDirection)return n},axisThreshold(e=Nk){return e},bounds(e={}){if(typeof e=="function")return o=>rs.bounds(e(o));if("current"in e)return()=>e.current;if(typeof HTMLElement=="function"&&e instanceof HTMLElement)return e;const{left:t=-1/0,right:n=1/0,top:r=-1/0,bottom:i=1/0}=e;return[[t,n],[r,i]]}}),Xm={ArrowRight:(e,t=1)=>[e*t,0],ArrowLeft:(e,t=1)=>[-1*e*t,0],ArrowUp:(e,t=1)=>[0,-1*e*t],ArrowDown:(e,t=1)=>[0,e*t]};class Pk extends x6{constructor(...t){super(...t),pt(this,"ingKey","dragging")}reset(){super.reset();const t=this.state;t._pointerId=void 0,t._pointerActive=!1,t._keyboardActive=!1,t._preventScroll=!1,t._delayed=!1,t.swipe=[0,0],t.tap=!1,t.canceled=!1,t.cancel=this.cancel.bind(this)}setup(){const t=this.state;if(t._bounds instanceof HTMLElement){const n=t._bounds.getBoundingClientRect(),r=t.currentTarget.getBoundingClientRect(),i={left:n.left-r.left+t.offset[0],right:n.right-r.right+t.offset[0],top:n.top-r.top+t.offset[1],bottom:n.bottom-r.bottom+t.offset[1]};t._bounds=rs.bounds(i)}}cancel(){const t=this.state;t.canceled||(t.canceled=!0,t._active=!1,setTimeout(()=>{this.compute(),this.emit()},0))}setActive(){this.state._active=this.state._pointerActive||this.state._keyboardActive}clean(){this.pointerClean(),this.state._pointerActive=!1,this.state._keyboardActive=!1,super.clean()}pointerDown(t){const n=this.config,r=this.state;if(t.buttons!=null&&(Array.isArray(n.pointerButtons)?!n.pointerButtons.includes(t.buttons):n.pointerButtons!==-1&&n.pointerButtons!==t.buttons))return;const i=this.ctrl.setEventIds(t);n.pointerCapture&&t.target.setPointerCapture(t.pointerId),!(i&&i.size>1&&r._pointerActive)&&(this.start(t),this.setupPointer(t),r._pointerId=wf(t),r._pointerActive=!0,this.computeValues(Zm(t)),this.computeInitial(),n.preventScrollAxis&&g6(t)!=="mouse"?(r._active=!1,this.setupScrollPrevention(t)):n.delay>0?(this.setupDelayTrigger(t),n.triggerAllEvents&&(this.compute(t),this.emit())):this.startPointerDrag(t))}startPointerDrag(t){const n=this.state;n._active=!0,n._preventScroll=!0,n._delayed=!1,this.compute(t),this.emit()}pointerMove(t){const n=this.state,r=this.config;if(!n._pointerActive)return;const i=wf(t);if(n._pointerId!==void 0&&i!==n._pointerId)return;const o=Zm(t);if(document.pointerLockElement===t.target?n._delta=[t.movementX,t.movementY]:(n._delta=it.sub(o,n._values),this.computeValues(o)),it.addTo(n._movement,n._delta),this.compute(t),n._delayed&&n.intentional){this.timeoutStore.remove("dragDelay"),n.active=!1,this.startPointerDrag(t);return}if(r.preventScrollAxis&&!n._preventScroll)if(n.axis)if(n.axis===r.preventScrollAxis||r.preventScrollAxis==="xy"){n._active=!1,this.clean();return}else{this.timeoutStore.remove("startPointerDrag"),this.startPointerDrag(t);return}else return;this.emit()}pointerUp(t){this.ctrl.setEventIds(t);try{this.config.pointerCapture&&t.target.hasPointerCapture(t.pointerId)&&t.target.releasePointerCapture(t.pointerId)}catch{}const n=this.state,r=this.config;if(!n._active||!n._pointerActive)return;const i=wf(t);if(n._pointerId!==void 0&&i!==n._pointerId)return;this.state._pointerActive=!1,this.setActive(),this.compute(t);const[o,s]=n._distance;if(n.tap=o<=r.tapsThreshold&&s<=r.tapsThreshold,n.tap&&r.filterTaps)n._force=!0;else{const[l,c]=n._delta,[u,d]=n._movement,[p,g]=r.swipe.velocity,[w,y]=r.swipe.distance,x=r.swipe.duration;if(n.elapsedTime<x){const C=Math.abs(l/n.timeDelta),m=Math.abs(c/n.timeDelta);C>p&&Math.abs(u)>w&&(n.swipe[0]=Math.sign(l)),m>g&&Math.abs(d)>y&&(n.swipe[1]=Math.sign(c))}}this.emit()}pointerClick(t){!this.state.tap&&t.detail>0&&(t.preventDefault(),t.stopPropagation())}setupPointer(t){const n=this.config,r=n.device;n.pointerLock&&t.currentTarget.requestPointerLock(),n.pointerCapture||(this.eventStore.add(this.sharedConfig.window,r,"change",this.pointerMove.bind(this)),this.eventStore.add(this.sharedConfig.window,r,"end",this.pointerUp.bind(this)),this.eventStore.add(this.sharedConfig.window,r,"cancel",this.pointerUp.bind(this)))}pointerClean(){this.config.pointerLock&&document.pointerLockElement===this.state.currentTarget&&document.exitPointerLock()}preventScroll(t){this.state._preventScroll&&t.cancelable&&t.preventDefault()}setupScrollPrevention(t){this.state._preventScroll=!1,Rk(t);const n=this.eventStore.add(this.sharedConfig.window,"touch","change",this.preventScroll.bind(this),{passive:!1});this.eventStore.add(this.sharedConfig.window,"touch","end",n),this.eventStore.add(this.sharedConfig.window,"touch","cancel",n),this.timeoutStore.add("startPointerDrag",this.startPointerDrag.bind(this),this.config.preventScrollDelay,t)}setupDelayTrigger(t){this.state._delayed=!0,this.timeoutStore.add("dragDelay",()=>{this.state._step=[0,0],this.startPointerDrag(t)},this.config.delay)}keyDown(t){const n=Xm[t.key];if(n){const r=this.state,i=t.shiftKey?10:t.altKey?.1:1;this.start(t),r._delta=n(this.config.keyboardDisplacement,i),r._keyboardActive=!0,it.addTo(r._movement,r._delta),this.compute(t),this.emit()}}keyUp(t){t.key in Xm&&(this.state._keyboardActive=!1,this.setActive(),this.compute(t),this.emit())}bind(t){const n=this.config.device;t(n,"start",this.pointerDown.bind(this)),this.config.pointerCapture&&(t(n,"change",this.pointerMove.bind(this)),t(n,"end",this.pointerUp.bind(this)),t(n,"cancel",this.pointerUp.bind(this)),t("lostPointerCapture","",this.pointerUp.bind(this))),this.config.keys&&(t("key","down",this.keyDown.bind(this)),t("key","up",this.keyUp.bind(this))),this.config.filterTaps&&t("click","",this.pointerClick.bind(this),{capture:!0,passive:!1})}}function Rk(e){"persist"in e&&typeof e.persist=="function"&&e.persist()}const fl=typeof window<"u"&&window.document&&window.document.createElement;function w6(){return fl&&"ontouchstart"in window}function Mk(){return w6()||fl&&window.navigator.maxTouchPoints>1}function Tk(){return fl&&"onpointerdown"in window}function Ak(){return fl&&"exitPointerLock"in window.document}function Ik(){try{return"constructor"in GestureEvent}catch{return!1}}const on={isBrowser:fl,gesture:Ik(),touch:w6(),touchscreen:Mk(),pointer:Tk(),pointerLock:Ak()},zk=250,Dk=180,Bk=.5,Vk=50,Wk=250,Uk=10,Jm={mouse:0,touch:0,pen:8},Hk=Me(Me({},rs),{},{device(e,t,{pointer:{touch:n=!1,lock:r=!1,mouse:i=!1}={}}){return this.pointerLock=r&&on.pointerLock,on.touch&&n?"touch":this.pointerLock?"mouse":on.pointer&&!i?"pointer":on.touch?"touch":"mouse"},preventScrollAxis(e,t,{preventScroll:n}){if(this.preventScrollDelay=typeof n=="number"?n:n||n===void 0&&e?zk:void 0,!(!on.touchscreen||n===!1))return e||(n!==void 0?"y":void 0)},pointerCapture(e,t,{pointer:{capture:n=!0,buttons:r=1,keys:i=!0}={}}){return this.pointerButtons=r,this.keys=i,!this.pointerLock&&this.device==="pointer"&&n},threshold(e,t,{filterTaps:n=!1,tapsThreshold:r=3,axis:i=void 0}){const o=it.toVector(e,n?r:i?1:0);return this.filterTaps=n,this.tapsThreshold=r,o},swipe({velocity:e=Bk,distance:t=Vk,duration:n=Wk}={}){return{velocity:this.transform(it.toVector(e)),distance:this.transform(it.toVector(t)),duration:n}},delay(e=0){switch(e){case!0:return Dk;case!1:return 0;default:return e}},axisThreshold(e){return e?Me(Me({},Jm),e):Jm},keyboardDisplacement(e=Uk){return e}});function qk(e){const[t,n]=e.overflow,[r,i]=e._delta,[o,s]=e._direction;(t<0&&r>0&&o<0||t>0&&r<0&&o>0)&&(e._movement[0]=e._movementBound[0]),(n<0&&i>0&&s<0||n>0&&i<0&&s>0)&&(e._movement[1]=e._movementBound[1])}Me(Me({},y6),{},{device(e,t,{shared:n,pointer:{touch:r=!1}={}}){if(n.target&&!on.touch&&on.gesture)return"gesture";if(on.touch&&r)return"touch";if(on.touchscreen){if(on.pointer)return"pointer";if(on.touch)return"touch"}},bounds(e,t,{scaleBounds:n={},angleBounds:r={}}){const i=s=>{const l=Km(Cu(n,s),{min:-1/0,max:1/0});return[l.min,l.max]},o=s=>{const l=Km(Cu(r,s),{min:-1/0,max:1/0});return[l.min,l.max]};return typeof n!="function"&&typeof r!="function"?[i(),o()]:s=>[i(s),o(s)]},threshold(e,t,n){return this.lockDirection=n.axis==="lock",it.toVector(e,this.lockDirection?[.1,3]:0)},modifierKey(e){return e===void 0?"ctrlKey":e},pinchOnWheel(e=!0){return e}});Me(Me({},rs),{},{mouseOnly:(e=!0)=>e});class Zk extends x6{constructor(...t){super(...t),pt(this,"ingKey","wheeling")}wheel(t){this.state._active||this.start(t),this.wheelChange(t),this.timeoutStore.add("wheelEnd",this.wheelEnd.bind(this))}wheelChange(t){const n=this.state;n._delta=jk(t),it.addTo(n._movement,n._delta),qk(n),this.compute(t),this.emit()}wheelEnd(){this.state._active&&(this.state._active=!1,this.compute(),this.emit())}bind(t){t("wheel","",this.wheel.bind(this))}}const Qk=rs;Me(Me({},rs),{},{mouseOnly:(e=!0)=>e});const b6=new Map,u1=new Map;function C6(e){b6.set(e.key,e.engine),u1.set(e.key,e.resolver)}const Gk={key:"drag",engine:Pk,resolver:Hk},Kk={key:"wheel",engine:Zk,resolver:Qk};function Yk(e,t){if(e==null)return{};var n={},r=Object.keys(e),i,o;for(o=0;o<r.length;o++)i=r[o],!(t.indexOf(i)>=0)&&(n[i]=e[i]);return n}function Xk(e,t){if(e==null)return{};var n=Yk(e,t),r,i;if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(i=0;i<o.length;i++)r=o[i],!(t.indexOf(r)>=0)&&Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const Jk={target(e){if(e)return()=>"current"in e?e.current:e},enabled(e=!0){return e},window(e=on.isBrowser?window:void 0){return e},eventOptions({passive:e=!0,capture:t=!1}={}){return{passive:e,capture:t}},transform(e){return e}},ej=["target","eventOptions","window","enabled","transform"];function Tc(e={},t){const n={};for(const[r,i]of Object.entries(t))switch(typeof i){case"function":n[r]=i.call(n,e[r],r,e);break;case"object":n[r]=Tc(e[r],i);break;case"boolean":i&&(n[r]=e[r]);break}return n}function tj(e,t,n={}){const r=e,{target:i,eventOptions:o,window:s,enabled:l,transform:c}=r,u=Xk(r,ej);if(n.shared=Tc({target:i,eventOptions:o,window:s,enabled:l,transform:c},Jk),t){const d=u1.get(t);n[t]=Tc(Me({shared:n.shared},u),d)}else for(const d in u){const p=u1.get(d);p&&(n[d]=Tc(Me({shared:n.shared},u[d]),p))}return n}class k6{constructor(t,n){pt(this,"_listeners",new Set),this._ctrl=t,this._gestureKey=n}add(t,n,r,i,o){const s=this._listeners,l=wk(n,r),c=this._gestureKey?this._ctrl.config[this._gestureKey].eventOptions:{},u=Me(Me({},c),o);t.addEventListener(l,i,u);const d=()=>{t.removeEventListener(l,i,u),s.delete(d)};return s.add(d),d}clean(){this._listeners.forEach(t=>t()),this._listeners.clear()}}class nj{constructor(){pt(this,"_timeouts",new Map)}add(t,n,r=140,...i){this.remove(t),this._timeouts.set(t,window.setTimeout(n,r,...i))}remove(t){const n=this._timeouts.get(t);n&&window.clearTimeout(n)}clean(){this._timeouts.forEach(t=>void window.clearTimeout(t)),this._timeouts.clear()}}class rj{constructor(t){pt(this,"gestures",new Set),pt(this,"_targetEventStore",new k6(this)),pt(this,"gestureEventStores",{}),pt(this,"gestureTimeoutStores",{}),pt(this,"handlers",{}),pt(this,"config",{}),pt(this,"pointerIds",new Set),pt(this,"touchIds",new Set),pt(this,"state",{shared:{shiftKey:!1,metaKey:!1,ctrlKey:!1,altKey:!1}}),ij(this,t)}setEventIds(t){if(pd(t))return this.touchIds=new Set(kk(t)),this.touchIds;if("pointerId"in t)return t.type==="pointerup"||t.type==="pointercancel"?this.pointerIds.delete(t.pointerId):t.type==="pointerdown"&&this.pointerIds.add(t.pointerId),this.pointerIds}applyHandlers(t,n){this.handlers=t,this.nativeHandlers=n}applyConfig(t,n){this.config=tj(t,n,this.config)}clean(){this._targetEventStore.clean();for(const t of this.gestures)this.gestureEventStores[t].clean(),this.gestureTimeoutStores[t].clean()}effect(){return this.config.shared.target&&this.bind(),()=>this._targetEventStore.clean()}bind(...t){const n=this.config.shared,r={};let i;if(!(n.target&&(i=n.target(),!i))){if(n.enabled){for(const s of this.gestures){const l=this.config[s],c=eg(r,l.eventOptions,!!i);if(l.enabled){const u=b6.get(s);new u(this,t,s).bind(c)}}const o=eg(r,n.eventOptions,!!i);for(const s in this.nativeHandlers)o(s,"",l=>this.nativeHandlers[s](Me(Me({},this.state.shared),{},{event:l,args:t})),void 0,!0)}for(const o in r)r[o]=Lk(...r[o]);if(!i)return r;for(const o in r){const{device:s,capture:l,passive:c}=yk(o);this._targetEventStore.add(i,s,"",r[o],{capture:l,passive:c})}}}}function Vi(e,t){e.gestures.add(t),e.gestureEventStores[t]=new k6(e,t),e.gestureTimeoutStores[t]=new nj}function ij(e,t){t.drag&&Vi(e,"drag"),t.wheel&&Vi(e,"wheel"),t.scroll&&Vi(e,"scroll"),t.move&&Vi(e,"move"),t.pinch&&Vi(e,"pinch"),t.hover&&Vi(e,"hover")}const eg=(e,t,n)=>(r,i,o,s={},l=!1)=>{var c,u;const d=(c=s.capture)!==null&&c!==void 0?c:t.capture,p=(u=s.passive)!==null&&u!==void 0?u:t.passive;let g=l?r:vk(r,i,d);n&&p&&(g+="Passive"),e[g]=e[g]||[],e[g].push(o)};function j6(e,t={},n,r){const i=k.useMemo(()=>new rj(e),[]);if(i.applyHandlers(e,r),i.applyConfig(t,n),k.useEffect(i.effect.bind(i)),k.useEffect(()=>i.clean.bind(i),[]),t.target===void 0)return i.bind.bind(i)}function md(e,t){return C6(Gk),j6({drag:e},t||{},"drag")}function oj(e,t){return C6(Kk),j6({wheel:e},t||{},"wheel")}const zl="adm-popup",sj=Object.assign(Object.assign({},h6),{closeOnSwipe:!1,position:"bottom"}),dp=e=>{const{locale:t,popup:n={}}=xt(),r=oe(sj,n,e),i=X(`${zl}-body`,r.bodyClassName,`${zl}-body-position-${r.position}`),[o,s]=f.useState(r.visible),l=f.useRef(null);Wh(l,r.disableBodyScroll&&o?"strict":!1),Ft(()=>{r.visible&&s(!0)},[r.visible]);const c=Vh(),{percent:u}=Un({percent:r.visible?0:100,config:{precision:.1,mass:.4,tension:300,friction:30},onRest:()=>{var w,y;c.current||(s(r.visible),r.visible?(w=r.afterShow)===null||w===void 0||w.call(r):(y=r.afterClose)===null||y===void 0||y.call(r))}}),d=md(({swipe:[,w]})=>{var y;r.closeOnSwipe&&(w===1&&r.position==="bottom"||w===-1&&r.position==="top")&&((y=r.onClose)===null||y===void 0||y.call(r))},{axis:"y",enabled:["top","bottom"].includes(r.position)}),p=p6(o&&r.visible),g=zo(r.stopPropagation,ne(r,k.createElement("div",Object.assign({className:zl,onClick:r.onClick,style:{display:o?void 0:"none",touchAction:["top","bottom"].includes(r.position)?"none":"auto"}},d()),r.mask&&k.createElement(sp,{visible:p,forceRender:r.forceRender,destroyOnClose:r.destroyOnClose,onMaskClick:w=>{var y,x;(y=r.onMaskClick)===null||y===void 0||y.call(r,w),r.closeOnMaskClick&&((x=r.onClose)===null||x===void 0||x.call(r))},className:r.maskClassName,style:r.maskStyle,disableBodyScroll:!1,stopPropagation:r.stopPropagation}),k.createElement(Et.div,{className:i,style:Object.assign(Object.assign({},r.bodyStyle),{pointerEvents:u.to(w=>w===0?"unset":"none"),transform:u.to(w=>r.position==="bottom"?`translate(0, ${w}%)`:r.position==="top"?`translate(0, -${w}%)`:r.position==="left"?`translate(-${w}%, 0)`:r.position==="right"?`translate(${w}%, 0)`:"none")}),ref:l},r.showCloseButton&&k.createElement("a",{className:X(`${zl}-close-icon`,"adm-plain-anchor"),onClick:()=>{var w;(w=r.onClose)===null||w===void 0||w.call(r)},role:"button","aria-label":t.common.close},r.closeIcon),r.children))));return k.createElement(hd,{active:o,forceRender:r.forceRender,destroyOnClose:r.destroyOnClose},fd(r.getContainer,g))},tg="adm-safe-area",E6=e=>ne(e,k.createElement("div",{className:X(tg,`${tg}-position-${e.position}`)})),ku=Object.assign({},U7),{version:aj,render:lj,unmountComponentAtNode:cj}=ku;let gd;try{Number((aj||"").split(".")[0])>=18&&ku.createRoot&&(gd=ku.createRoot)}catch{}function ng(e){const{__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED:t}=ku;t&&typeof t=="object"&&(t.usingClientEntryPoint=e)}const ju="__antd_mobile_root__";function uj(e,t){lj(e,t)}function dj(e,t){ng(!0);const n=t[ju]||gd(t);ng(!1),n.render(e),t[ju]=n}function fj(e,t){if(gd){dj(e,t);return}uj(e,t)}function hj(e){return cj(e)}function pj(e){return $n(this,void 0,void 0,function*(){return Promise.resolve().then(()=>{var t;(t=e[ju])===null||t===void 0||t.unmount(),delete e[ju]})})}function mj(e){return gd?pj(e):hj(e)}function S6(e){const t=document.createElement("div");document.body.appendChild(t);function n(){mj(t)&&t.parentNode&&t.parentNode.removeChild(t)}return fj(e,t),n}function Eu(e){const t=k.forwardRef((i,o)=>{const[s,l]=f.useState(!1),c=f.useRef(!1),[u,d]=f.useState(e),p=f.useRef(0);f.useEffect(()=>{c.current?w():l(!0)},[]);function g(){var y,x;c.current=!0,l(!1),(x=(y=u.props).onClose)===null||x===void 0||x.call(y)}function w(){var y,x;r(),(x=(y=u.props).afterClose)===null||x===void 0||x.call(y)}return f.useImperativeHandle(o,()=>({close:g,replace:y=>{var x,C;p.current++,(C=(x=u.props).afterClose)===null||C===void 0||C.call(x),d(y)}})),k.cloneElement(u,Object.assign(Object.assign({},u.props),{key:p.current,visible:s,onClose:g,afterClose:w}))}),n=k.createRef(),r=S6(k.createElement(t,{ref:n}));return{close:()=>$n(this,void 0,void 0,function*(){var i,o,s;n.current?(s=n.current)===null||s===void 0||s.close():(r(),(o=(i=e.props).afterClose)===null||o===void 0||o.call(i))}),replace:i=>{var o;(o=n.current)===null||o===void 0||o.replace(i)},isRendered:()=>!!n.current}}const rg="adm-auto-center",Za=e=>ne(e,k.createElement("div",{className:rg},k.createElement("div",{className:`${rg}-content`},e.children))),gj=f.memo(()=>k.createElement("svg",{className:"adm-avatar-fallback",width:"88px",height:"88px",viewBox:"0 0 88 88",version:"1.1"},k.createElement("title",null,"编组 3"),k.createElement("defs",null,k.createElement("polygon",{id:"path-1",points:"0 0 88 0 88 88 0 88"})),k.createElement("g",{id:"页面-1",stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},k.createElement("g",{id:"语雀",transform:"translate(-495.000000, -71.000000)"},k.createElement("g",{id:"编组-3",transform:"translate(495.000000, 71.000000)"},k.createElement("mask",{id:"mask-2",fill:"white"},k.createElement("use",{xlinkHref:"#path-1"})),k.createElement("use",{id:"Mask",fill:"#EEEEEE",fillRule:"nonzero",xlinkHref:"#path-1"}),k.createElement("path",{d:"M44.5707528,16 L43.4292117,16 L42.9575197,16.0086403 L42.9575195,16.0086403 C36.5215787,16.2615464 31.4341803,21.5678078 31.4344832,28.0273864 L31.4344832,34.7776551 L31.4495601,35.3716788 L31.4495593,35.3716628 C31.599687,38.5368723 32.9422041,41.5269327 35.2058513,43.7376716 L38.2147759,46.6775505 L38.4086219,46.8913989 C38.7747759,47.3385365 38.9750835,47.9001589 38.9750835,48.4833848 L38.9750835,48.8938006 L38.9556989,49.1897326 L38.9556989,49.1897325 C38.8577746,49.9812662 38.3754713,50.67284 37.667703,51.036605 L18.7375269,60.7440265 L18.4101421,60.9276334 L18.4101423,60.9276333 C16.9141658,61.8418636 16.0009389,63.4714674 16,65.2283758 L16,66.070809 L16.0129231,66.3948217 C16.1766149,68.4123376 17.860922,70 19.91569,70 L68.0843101,70 L68.08431,70 C70.2460467,70 71.9988087,68.243122 72,66.0751224 L72,65.2326893 C72,63.3382982 70.9446194,61.6037466 69.2624598,60.7440295 L50.3322837,51.036608 L50.3322835,51.0366079 C49.5291218,50.6249082 49.0240448,49.7962466 49.024903,48.8916436 L49.024903,48.4812278 C49.024903,47.8029608 49.3005955,47.1527756 49.7852106,46.6775603 L52.7941352,43.7376813 L52.7941354,43.7376811 C55.204308,41.3832325 56.5636029,38.151975 56.5633606,34.7776456 L56.5633606,28.0273769 L56.5633606,28.0273774 C56.5633606,21.3848531 51.1940878,16 44.5707524,16 L44.5707528,16 Z",id:"形状",fill:"#CCCCCC",fillRule:"nonzero",mask:"url(#mask-2)"}))))));var fp={},vj=$r&&$r.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(fp,"__esModule",{value:!0});var hp=fp.staged=void 0;const xj=vj(f);function L6(e){return typeof e=="function"?xj.default.createElement(yj,{stage:e}):e}function yj(e){const t=e.stage();return L6(t)}function wj(e){return function(n,r){const i=e(n,r);return L6(i)}}hp=fp.staged=wj;function pi(e){return typeof e=="number"?`${e}px`:e}const bj=e=>{const t=f.useRef(null),[n]=fb(t);return f.useEffect(()=>{n&&e.onActive()},[n]),k.createElement("div",{ref:t})},pp=v5(Ft),Cj=()=>k.createElement("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},k.createElement("path",{d:"M41.396 6.234c1.923 0 3.487 1.574 3.487 3.505v29.14c0 1.937-1.568 3.51-3.491 3.51H6.604c-1.923 0-3.487-1.573-3.487-3.51V9.745c0-1.936 1.564-3.51 3.487-3.51Zm0 2.847H6.604c-.355 0-.654.3-.654.658V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.405 2.405 0 0 1 1.933.752l4.182 4.525 7.58-11.005a2.374 2.374 0 0 1 1.96-1.01c.79 0 1.532.38 1.966 1.01L42.05 34.89V9.74a.664.664 0 0 0-.654-.658Zm-28.305 2.763a3.119 3.119 0 0 1 3.117 3.117 3.119 3.119 0 0 1-3.117 3.117 3.122 3.122 0 0 1-3.117-3.117 3.119 3.119 0 0 1 3.117-3.117Z",fill:"#DBDBDB",fillRule:"nonzero"})),kj=()=>k.createElement("svg",{viewBox:"0 0 48 48",xmlns:"http://www.w3.org/2000/svg"},k.createElement("path",{d:"M19.233 6.233 17.42 9.08l-10.817.001a.665.665 0 0 0-.647.562l-.007.096V34.9l5.989-8.707a2.373 2.373 0 0 1 1.801-1.005 2.415 2.415 0 0 1 1.807.625l.126.127 4.182 4.525 2.267-3.292 5.461 7.841-4.065 7.375H6.604c-1.86 0-3.382-1.47-3.482-3.317l-.005-.192V9.744c0-1.872 1.461-3.405 3.296-3.505l.19-.005h12.63Zm22.163 0c1.86 0 3.382 1.472 3.482 3.314l.005.192v29.14a3.507 3.507 0 0 1-3.3 3.505l-.191.006H27.789l3.63-6.587.06-.119a1.87 1.87 0 0 0-.163-1.853l-6.928-9.949 3.047-4.422a2.374 2.374 0 0 1 1.96-1.01 2.4 2.4 0 0 1 1.86.87l.106.14L42.05 34.89V9.74a.664.664 0 0 0-.654-.658H21.855l1.812-2.848h17.73Zm-28.305 5.611c.794 0 1.52.298 2.07.788l-.843 1.325-.067.114a1.87 1.87 0 0 0 .11 1.959l.848 1.217c-.556.515-1.3.83-2.118.83a3.122 3.122 0 0 1-3.117-3.116 3.119 3.119 0 0 1 3.117-3.117Z",fill:"#DBDBDB",fillRule:"nonzero"})),Su="adm-image",jj={fit:"fill",placeholder:k.createElement("div",{className:`${Su}-tip`},k.createElement(Cj,null)),fallback:k.createElement("div",{className:`${Su}-tip`},k.createElement(kj,null)),lazy:!1,draggable:!1},Zr=hp(e=>{const t=oe(jj,e),[n,r]=f.useState(!1),[i,o]=f.useState(!1),s=f.useRef(null),l=f.useRef(null);let c=t.src,u=t.srcSet;const[d,p]=f.useState(!t.lazy);c=d?t.src:void 0,u=d?t.srcSet:void 0,pp(()=>{r(!1),o(!1)},[c]),f.useEffect(()=>{var y;!((y=l.current)===null||y===void 0)&&y.complete&&r(!0)},[]);function g(){if(i)return k.createElement(k.Fragment,null,t.fallback);const y=k.createElement("img",{ref:l,id:t.id,className:`${Su}-img`,src:c,alt:t.alt,onClick:t.onClick,onLoad:x=>{var C;r(!0),(C=t.onLoad)===null||C===void 0||C.call(t,x)},onError:x=>{var C;o(!0),(C=t.onError)===null||C===void 0||C.call(t,x)},style:{objectFit:t.fit,display:n?"block":"none"},crossOrigin:t.crossOrigin,decoding:t.decoding,loading:t.loading,referrerPolicy:t.referrerPolicy,sizes:t.sizes,srcSet:u,useMap:t.useMap,draggable:t.draggable});return k.createElement(k.Fragment,null,!n&&t.placeholder,y)}const w={};return t.width&&(w["--width"]=pi(t.width),w.width=pi(t.width)),t.height&&(w["--height"]=pi(t.height),w.height=pi(t.height)),ne(t,k.createElement("div",{ref:s,className:Su,style:w,onClick:t.onContainerClick},t.lazy&&!d&&k.createElement(bj,{onActive:()=>{p(!0)}}),g()))}),Ej="adm-avatar",Sj={fallback:k.createElement(gj,null),fit:"cover"},$6=e=>{const t=oe(Sj,e);return ne(t,k.createElement(Zr,{className:Ej,src:t.src,fallback:t.fallback,placeholder:t.fallback,alt:t.alt,lazy:t.lazy,fit:t.fit,onClick:t.onClick,onError:t.onError,onLoad:t.onLoad}))},Wi="adm-badge",_6=k.createElement(k.Fragment,null),Lj=e=>{const{content:t,color:n,children:r}=e,i=t===_6,o=X(Wi,{[`${Wi}-fixed`]:!!r,[`${Wi}-dot`]:i,[`${Wi}-bordered`]:e.bordered}),s=t||t===0?ne(e,k.createElement("div",{className:o,style:{"--color":n}},!i&&k.createElement("div",{className:`${Wi}-content`},t))):null;return r?k.createElement("div",{className:X(`${Wi}-wrapper`,e.wrapperClassName),style:e.wrapperStyle},r,s):s},Qa=Gt(Lj,{dot:_6}),$j="adm-dot-loading",_j={default:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",white:"var(--adm-color-white)"},Fj={color:"default"},Oj=f.memo(e=>{var t;const n=oe(Fj,e);return ne(n,k.createElement("div",{style:{color:(t=_j[n.color])!==null&&t!==void 0?t:n.color},className:X("adm-loading",$j)},k.createElement("svg",{height:"1em",viewBox:"0 0 100 40",style:{verticalAlign:"-0.125em"}},k.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},k.createElement("g",{transform:"translate(-100.000000, -71.000000)"},k.createElement("g",{transform:"translate(95.000000, 71.000000)"},k.createElement("g",{transform:"translate(5.000000, 0.000000)"},[0,1,2].map(r=>k.createElement("rect",{key:r,fill:"currentColor",x:20+r*26,y:"16",width:"8",height:"8",rx:"2"},k.createElement("animate",{attributeName:"y",from:"16",to:"16",dur:"2s",begin:`${r*.2}s`,repeatCount:"indefinite",values:"16; 6; 26; 16; 16",keyTimes:"0; 0.1; 0.3; 0.4; 1"}))))))))))});function F6(e){return!!e&&typeof e=="object"&&typeof e.then=="function"}function Nj(){return Jo?/ios|iphone|ipad|ipod/.test(navigator.userAgent.toLowerCase()):!1}const Yt="adm-button",Pj={color:"default",fill:"solid",block:!1,loading:!1,loadingIcon:k.createElement(Oj,{color:"currentColor"}),type:"button",shape:"default",size:"middle"},J=f.forwardRef((e,t)=>{const n=oe(Pj,e),[r,i]=f.useState(!1),o=f.useRef(null),s=n.loading==="auto"?r:n.loading,l=n.disabled||s;f.useImperativeHandle(t,()=>({get nativeElement(){return o.current}}));const c=u=>$n(void 0,void 0,void 0,function*(){if(!n.onClick)return;const d=n.onClick(u);if(F6(d))try{i(!0),yield d,i(!1)}catch(p){throw i(!1),p}});return ne(n,k.createElement("button",{ref:o,type:n.type,onClick:c,className:X(Yt,{[`${Yt}-${n.color}`]:n.color,[`${Yt}-block`]:n.block,[`${Yt}-disabled`]:l,[`${Yt}-fill-outline`]:n.fill==="outline",[`${Yt}-fill-none`]:n.fill==="none",[`${Yt}-mini`]:n.size==="mini",[`${Yt}-small`]:n.size==="small",[`${Yt}-large`]:n.size==="large",[`${Yt}-loading`]:s},`${Yt}-shape-${n.shape}`),disabled:l,onMouseDown:n.onMouseDown,onMouseUp:n.onMouseUp,onTouchStart:n.onTouchStart,onTouchEnd:n.onTouchEnd},s?k.createElement("div",{className:`${Yt}-loading-wrapper`},n.loadingIcon,n.loadingText):k.createElement("span",null,n.children)))}),ig=()=>k.createElement("svg",{height:"1em",viewBox:"0 0 44 44"},k.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},k.createElement("g",{transform:"translate(-100.000000, -22.000000)"},k.createElement("g",{transform:"translate(100.000000, 22.000000)"},k.createElement("rect",{x:"0",y:"0",width:"44",height:"44"}),k.createElement("g",{transform:"translate(12.000000, 4.000000)",fill:"currentColor",fillRule:"nonzero"},k.createElement("path",{d:"M19.4833058,2.71985611 L3.53051139,17.0699744 C3.0173831,17.5315665 2.97522952,18.3220903 3.43630803,18.8357433 L3.43630796,18.8357432 C3.46601289,18.8688164 3.49745845,18.9002801 3.53051133,18.9300007 L19.4833057,33.2801611 C20.1234001,33.8559077 20.1759552,34.8420707 19.6007967,35.4827774 C19.0256382,36.1235263 18.0404824,36.1761351 17.400388,35.6003885 L1.44759367,21.2502703 L1.4475933,21.25027 C1.33208743,21.1463692 1.22220259,21.036372 1.11840792,20.920748 C-0.49302969,19.1256817 -0.345639536,16.3628317 1.4475933,14.7497465 L17.4003877,0.399628282 C18.0404821,-0.176160428 19.0256378,-0.123509422 19.6007963,0.517239417 C20.1759548,1.1579461 20.1233997,2.14410915 19.4833053,2.7198557 L19.4833058,2.71985611 Z"})))))),og=()=>k.createElement("svg",{height:"1em",viewBox:"0 0 44 44"},k.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},k.createElement("g",{transform:"translate(-24.000000, -22.000000)"},k.createElement("g",{transform:"translate(24.000000, 22.000000)"},k.createElement("rect",{x:"0",y:"0",width:"44",height:"44"}),k.createElement("g",{transform:"translate(7.000000, 4.000000)",fill:"currentColor",fillRule:"nonzero"},k.createElement("path",{d:"M19.4833058,2.71985611 L3.53051139,17.0699744 C3.0173831,17.5315665 2.97522952,18.3220903 3.43630803,18.8357433 L3.43630796,18.8357432 C3.46601289,18.8688164 3.49745845,18.9002801 3.53051133,18.9300007 L19.4833057,33.2801611 C20.1234001,33.8559077 20.1759552,34.8420707 19.6007967,35.4827774 C19.0256382,36.1235263 18.0404824,36.1761351 17.400388,35.6003885 L1.44759367,21.2502703 L1.4475933,21.25027 C1.33208743,21.1463692 1.22220259,21.036372 1.11840792,20.920748 C-0.49302969,19.1256817 -0.345639536,16.3628317 1.4475933,14.7497465 L17.4003877,0.399628282 C18.0404821,-0.176160428 19.0256378,-0.123509422 19.6007963,0.517239417 C20.1759548,1.1579461 20.1233997,2.14410915 19.4833053,2.7198557 L19.4833058,2.71985611 Z"}),k.createElement("path",{d:"M19.5305114,17.0699744 C19.0173831,17.5315665 18.9752295,18.3220903 19.436308,18.8357433 C19.4660129,18.8688164 19.4974585,18.9002801 19.5305113,18.9300007 L29.4833057,27.2801611 C30.1234001,27.8559077 30.1759552,28.8420707 29.6007967,29.4827774 C29.0256382,30.1235263 28.0404824,30.1761351 27.400388,29.6003885 L17.4475937,21.2502703 C17.3320874,21.1463692 17.2222026,21.036372 17.1184079,20.920748 C15.5069703,19.1256817 15.6543605,16.3628317 17.4475933,14.7497465 L27.4003877,6.39962828 C28.0404821,5.82383957 29.0256378,5.87649058 29.6007963,6.51723942 C30.1759548,7.1579461 30.1233997,8.14410915 29.4833053,8.7198557 L19.5305114,17.0699744 Z"}))))));var O6={exports:{}};(function(e,t){(function(n,r){e.exports=r()})($r,function(){var n="day";return function(r,i,o){var s=function(u){return u.add(4-u.isoWeekday(),n)},l=i.prototype;l.isoWeekYear=function(){return s(this).year()},l.isoWeek=function(u){if(!this.$utils().u(u))return this.add(7*(u-this.isoWeek()),n);var d,p,g,w,y=s(this),x=(d=this.isoWeekYear(),p=this.$u,g=(p?o.utc:o)().year(d).startOf("year"),w=4-g.isoWeekday(),g.isoWeekday()>4&&(w+=7),g.add(w,n));return y.diff(x,"week")+1},l.isoWeekday=function(u){return this.$utils().u(u)?this.day()||7:this.day(this.day()%7?u:u-7)};var c=l.startOf;l.startOf=function(u,d){var p=this.$utils(),g=!!p.u(d)||d;return p.p(u)==="isoweek"?g?this.date(this.date()-(this.isoWeekday()-1)).startOf("day"):this.date(this.date()-1-(this.isoWeekday()-1)+7).endOf("day"):c.bind(this)(u,d)}}})})(O6);var Rj=O6.exports;const Mj=hr(Rj);function Ot(e){const{value:t,defaultValue:n,onChange:r}=e,i=j5(),o=f.useRef(t!==void 0?t:n);t!==void 0&&(o.current=t);const s=al((l,c=!1)=>{const u=typeof l=="function"?l(o.current):l;if(!(!c&&u===o.current))return o.current=u,i(),r==null?void 0:r(u)});return[o.current,s]}function Tj(e,t){return e.replace(/\$\{\w+\}/g,n=>{const r=n.slice(2,-1);return t[r]})}function sg(e,t){return e===void 0||t===null?null:Array.isArray(t)?t:[t,t]}function bf(e){return ci().year(e.year).month(e.month-1).date(1)}ci.extend(Mj);const Ee="adm-calendar",Aj={weekStartsOn:"Sunday",defaultValue:null,allowClear:!0,prevMonthButton:k.createElement(ig,null),prevYearButton:k.createElement(og,null),nextMonthButton:k.createElement(ig,null),nextYearButton:k.createElement(og,null)},Ij=f.forwardRef((e,t)=>{const n=ci(),r=oe(Aj,e),{locale:i}=xt(),o=[...i.Calendar.markItems];if(r.weekStartsOn==="Sunday"){const h=o.pop();h&&o.unshift(h)}const[s,l]=Ot({value:r.value===void 0?void 0:sg(r.selectionMode,r.value),defaultValue:sg(r.selectionMode,r.defaultValue),onChange:h=>{var b,j;r.selectionMode==="single"?(b=r.onChange)===null||b===void 0||b.call(r,h?h[0]:null):r.selectionMode==="range"&&((j=r.onChange)===null||j===void 0||j.call(r,h))}}),[c,u]=f.useState(!1),[d,p]=f.useState(()=>ci(s?s[0]:n).date(1));x5(()=>{var h;(h=r.onPageChange)===null||h===void 0||h.call(r,d.year(),d.month()+1)},[d]),f.useImperativeHandle(t,()=>({jumpTo:h=>{let b;typeof h=="function"?b=h({year:d.year(),month:d.month()+1}):b=h,p(bf(b))},jumpToToday:()=>{p(ci().date(1))}}));const g=(h,b,j)=>{const E=d[h](b,j);if(h==="subtract"&&r.minPage){const $=bf(r.minPage);if(E.isBefore($,j))return}if(h==="add"&&r.maxPage){const $=bf(r.maxPage);if(E.isAfter($,j))return}p(E)},w=k.createElement("div",{className:`${Ee}-header`},k.createElement("a",{className:`${Ee}-arrow-button ${Ee}-arrow-button-year`,onClick:()=>{g("subtract",1,"year")}},r.prevYearButton),k.createElement("a",{className:`${Ee}-arrow-button ${Ee}-arrow-button-month`,onClick:()=>{g("subtract",1,"month")}},r.prevMonthButton),k.createElement("div",{className:`${Ee}-title`},Tj(i.Calendar.yearAndMonth,{year:d.year().toString(),month:(d.month()+1).toString()})),k.createElement("a",{className:X(`${Ee}-arrow-button`,`${Ee}-arrow-button-right`,`${Ee}-arrow-button-right-month`),onClick:()=>{g("add",1,"month")}},r.nextMonthButton),k.createElement("a",{className:X(`${Ee}-arrow-button`,`${Ee}-arrow-button-right`,`${Ee}-arrow-button-right-year`),onClick:()=>{g("add",1,"year")}},r.nextYearButton)),y=f.useMemo(()=>r.max&&ci(r.max),[r.max]),x=f.useMemo(()=>r.min&&ci(r.min),[r.min]);function C(){var h;const b=[];let j=d.subtract(d.isoWeekday(),"day");for(r.weekStartsOn==="Monday"&&(j=j.add(1,"day"));b.length<6*7;){const E=j;let $=!1,F=!1,M=!1,R=!1,D=!1;if(s){const[z,I]=s;F=E.isSame(z,"day"),M=E.isSame(I,"day"),$=F||M||E.isAfter(z,"day")&&E.isBefore(I,"day"),$&&(R=(b.length%7===0||E.isSame(E.startOf("month"),"day"))&&!F,D=(b.length%7===6||E.isSame(E.endOf("month"),"day"))&&!M)}const T=E.month()===d.month(),V=r.shouldDisableDate?r.shouldDisableDate(E.toDate()):y&&E.isAfter(y,"day")||x&&E.isBefore(x,"day");b.push(k.createElement("div",{key:E.valueOf(),className:X(`${Ee}-cell`,(V||!T)&&`${Ee}-cell-disabled`,T&&{[`${Ee}-cell-today`]:E.isSame(n,"day"),[`${Ee}-cell-selected`]:$,[`${Ee}-cell-selected-begin`]:F,[`${Ee}-cell-selected-end`]:M,[`${Ee}-cell-selected-row-begin`]:R,[`${Ee}-cell-selected-row-end`]:D}),onClick:()=>{if(!r.selectionMode||V)return;const z=E.toDate();T||p(E.clone().date(1));function I(){if(!r.allowClear||!s)return!1;const[P,N]=s;return E.isSame(P,"date")&&E.isSame(N,"day")}if(r.selectionMode==="single"){if(r.allowClear&&I()){l(null);return}l([z,z])}else if(r.selectionMode==="range"){if(!s){l([z,z]),u(!0);return}if(I()){l(null),u(!1);return}if(c){const P=s[0];l(P>z?[z,P]:[P,z]),u(!1)}else l([z,z]),u(!0)}}},k.createElement("div",{className:`${Ee}-cell-top`},r.renderDate?r.renderDate(E.toDate()):E.date()),k.createElement("div",{className:`${Ee}-cell-bottom`},(h=r.renderLabel)===null||h===void 0?void 0:h.call(r,E.toDate())))),j=j.add(1,"day")}return b}const m=k.createElement("div",{className:`${Ee}-cells`},C()),v=k.createElement("div",{className:`${Ee}-mark`},o.map((h,b)=>k.createElement("div",{key:b,className:`${Ee}-mark-cell`},h)));return ne(r,k.createElement("div",{className:Ee},w,v,m))});function ag(e){var t=f.useRef();t.current=e;var n=f.useCallback(function(){for(var r,i=arguments.length,o=new Array(i),s=0;s<i;s++)o[s]=arguments[s];return(r=t.current)===null||r===void 0?void 0:r.call.apply(r,[t].concat(o))},[]);return n}function N6(e){if(Array.isArray(e))return e}function zj(e,t){var n=e==null?null:typeof Symbol<"u"&&e[Symbol.iterator]||e["@@iterator"];if(n!=null){var r,i,o,s,l=[],c=!0,u=!1;try{if(o=(n=n.call(e)).next,t===0){if(Object(n)!==n)return;c=!1}else for(;!(c=(r=o.call(n)).done)&&(l.push(r.value),l.length!==t);c=!0);}catch(d){u=!0,i=d}finally{try{if(!c&&n.return!=null&&(s=n.return(),Object(s)!==s))return}finally{if(u)throw i}}return l}}function d1(e,t){(t==null||t>e.length)&&(t=e.length);for(var n=0,r=Array(t);n<t;n++)r[n]=e[n];return r}function mp(e,t){if(e){if(typeof e=="string")return d1(e,t);var n={}.toString.call(e).slice(8,-1);return n==="Object"&&e.constructor&&(n=e.constructor.name),n==="Map"||n==="Set"?Array.from(e):n==="Arguments"||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?d1(e,t):void 0}}function P6(){throw new TypeError(`Invalid attempt to destructure non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function Qr(e,t){return N6(e)||zj(e,t)||mp(e,t)||P6()}function Dj(){return!!(typeof window<"u"&&window.document&&window.document.createElement)}var lg=Dj()?f.useLayoutEffect:f.useEffect,Bj=function(t,n){var r=f.useRef(!0);lg(function(){return t(r.current)},n),lg(function(){return r.current=!1,function(){r.current=!0}},[])},cg=function(t,n){Bj(function(r){if(!r)return t()},n)};function ug(e){var t=f.useRef(!1),n=f.useState(e),r=Qr(n,2),i=r[0],o=r[1];f.useEffect(function(){return t.current=!1,function(){t.current=!0}},[]);function s(l,c){c&&t.current||o(l)}return[i,s]}function Cf(e){return e!==void 0}function Vj(e,t){var n=t||{},r=n.defaultValue,i=n.value,o=n.onChange,s=n.postState,l=ug(function(){return Cf(i)?i:Cf(r)?typeof r=="function"?r():r:typeof e=="function"?e():e}),c=Qr(l,2),u=c[0],d=c[1],p=i!==void 0?i:u,g=s?s(p):p,w=ag(o),y=ug([p]),x=Qr(y,2),C=x[0],m=x[1];cg(function(){var h=C[0];u!==h&&w(u,h)},[C]),cg(function(){Cf(i)||d(i)},[i]);var v=ag(function(h,b){d(h,b),m([p],b)});return[g,v]}function et(e){"@babel/helpers - typeof";return et=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(t){return typeof t}:function(t){return t&&typeof Symbol=="function"&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},et(e)}var R6={exports:{}},Ce={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var gp=Symbol.for("react.element"),vp=Symbol.for("react.portal"),vd=Symbol.for("react.fragment"),xd=Symbol.for("react.strict_mode"),yd=Symbol.for("react.profiler"),wd=Symbol.for("react.provider"),bd=Symbol.for("react.context"),Wj=Symbol.for("react.server_context"),Cd=Symbol.for("react.forward_ref"),kd=Symbol.for("react.suspense"),jd=Symbol.for("react.suspense_list"),Ed=Symbol.for("react.memo"),Sd=Symbol.for("react.lazy"),Uj=Symbol.for("react.offscreen"),M6;M6=Symbol.for("react.module.reference");function hn(e){if(typeof e=="object"&&e!==null){var t=e.$$typeof;switch(t){case gp:switch(e=e.type,e){case vd:case yd:case xd:case kd:case jd:return e;default:switch(e=e&&e.$$typeof,e){case Wj:case bd:case Cd:case Sd:case Ed:case wd:return e;default:return t}}case vp:return t}}}Ce.ContextConsumer=bd;Ce.ContextProvider=wd;Ce.Element=gp;Ce.ForwardRef=Cd;Ce.Fragment=vd;Ce.Lazy=Sd;Ce.Memo=Ed;Ce.Portal=vp;Ce.Profiler=yd;Ce.StrictMode=xd;Ce.Suspense=kd;Ce.SuspenseList=jd;Ce.isAsyncMode=function(){return!1};Ce.isConcurrentMode=function(){return!1};Ce.isContextConsumer=function(e){return hn(e)===bd};Ce.isContextProvider=function(e){return hn(e)===wd};Ce.isElement=function(e){return typeof e=="object"&&e!==null&&e.$$typeof===gp};Ce.isForwardRef=function(e){return hn(e)===Cd};Ce.isFragment=function(e){return hn(e)===vd};Ce.isLazy=function(e){return hn(e)===Sd};Ce.isMemo=function(e){return hn(e)===Ed};Ce.isPortal=function(e){return hn(e)===vp};Ce.isProfiler=function(e){return hn(e)===yd};Ce.isStrictMode=function(e){return hn(e)===xd};Ce.isSuspense=function(e){return hn(e)===kd};Ce.isSuspenseList=function(e){return hn(e)===jd};Ce.isValidElementType=function(e){return typeof e=="string"||typeof e=="function"||e===vd||e===yd||e===xd||e===kd||e===jd||e===Uj||typeof e=="object"&&e!==null&&(e.$$typeof===Sd||e.$$typeof===Ed||e.$$typeof===wd||e.$$typeof===bd||e.$$typeof===Cd||e.$$typeof===M6||e.getModuleId!==void 0)};Ce.typeOf=hn;R6.exports=Ce;var f1=R6.exports,Hj=Symbol.for("react.element"),qj=Symbol.for("react.transitional.element"),Zj=Symbol.for("react.fragment");function Qj(e){return e&&et(e)==="object"&&(e.$$typeof===Hj||e.$$typeof===qj)&&e.type===Zj}Number(f.version.split(".")[0]);function Bn(e,t){for(var n=e,r=0;r<t.length;r+=1){if(n==null)return;n=n[t[r]]}return n}function Gj(e,t){if(et(e)!="object"||!e)return e;var n=e[Symbol.toPrimitive];if(n!==void 0){var r=n.call(e,t);if(et(r)!="object")return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return(t==="string"?String:Number)(e)}function T6(e){var t=Gj(e,"string");return et(t)=="symbol"?t:t+""}function U(e,t,n){return(t=T6(t))in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function dg(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter(function(i){return Object.getOwnPropertyDescriptor(e,i).enumerable})),n.push.apply(n,r)}return n}function pe(e){for(var t=1;t<arguments.length;t++){var n=arguments[t]!=null?arguments[t]:{};t%2?dg(Object(n),!0).forEach(function(r){U(e,r,n[r])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):dg(Object(n)).forEach(function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(n,r))})}return e}function Kj(e){if(Array.isArray(e))return d1(e)}function A6(e){if(typeof Symbol<"u"&&e[Symbol.iterator]!=null||e["@@iterator"]!=null)return Array.from(e)}function Yj(){throw new TypeError(`Invalid attempt to spread non-iterable instance.
In order to be iterable, non-array objects must have a [Symbol.iterator]() method.`)}function he(e){return Kj(e)||A6(e)||mp(e)||Yj()}function Xj(e){return N6(e)||A6(e)||mp(e)||P6()}function I6(e,t,n,r){if(!t.length)return n;var i=Xj(t),o=i[0],s=i.slice(1),l;return!e&&typeof o=="number"?l=[]:Array.isArray(e)?l=he(e):l=pe({},e),r&&n===void 0&&s.length===1?delete l[o][s[0]]:l[o]=I6(l[o],s,n,r),l}function yn(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;return t.length&&r&&n===void 0&&!Bn(e,t.slice(0,-1))?e:I6(e,t,n,r)}function Jj(e){return et(e)==="object"&&e!==null&&Object.getPrototypeOf(e)===Object.prototype}function fg(e){return Array.isArray(e)?[]:{}}var eE=typeof Reflect>"u"?Object.keys:Reflect.ownKeys;function Qs(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=fg(t[0]);return t.forEach(function(i){function o(s,l){var c=new Set(l),u=Bn(i,s),d=Array.isArray(u);if(d||Jj(u)){if(!c.has(u)){c.add(u);var p=Bn(r,s);d?r=yn(r,s,[]):(!p||et(p)!=="object")&&(r=yn(r,s,fg(u))),eE(u).forEach(function(g){o([].concat(he(s),[g]),c)})}}else r=yn(r,s,u)}o([])}),r}var h1={},tE=function(t){};function nE(e,t){}function rE(e,t){}function iE(){h1={}}function z6(e,t,n){!t&&!h1[n]&&(e(!1,n),h1[n]=!0)}function cn(e,t){z6(nE,e,t)}function oE(e,t){z6(rE,e,t)}cn.preMessage=tE;cn.resetWarned=iE;cn.noteOnce=oE;function sE(e,t){const n=al(e);Ft(()=>{const r=t.current;if(r)if(window.ResizeObserver){let i;const o=new ResizeObserver(()=>{i=window.requestAnimationFrame(()=>n(r))});return o.observe(r),()=>{window.cancelAnimationFrame(i),o.disconnect()}}else n(r)},[t])}function aE(e,t,n){if(e&&typeof MutationObserver<"u"){let r=new MutationObserver(()=>{n()});return r.observe(e,t),()=>{r&&(r.disconnect(),r=null)}}return()=>{}}function lE(e,t,n){const r=al(e);f.useEffect(()=>aE(t.current,n,r),[t])}function lr(e,t,n){let r=e;return t!==void 0&&(r=Math.max(e,t)),n!==void 0&&(r=Math.min(r,n)),r}function xp(e,t){let n=0;function r(i){k.Children.forEach(i,o=>{f1.isFragment(o)?r(o.props.children):(t(o,n),n+=1)})}r(e)}const Ui="adm-card",tt=e=>{const t=()=>e.title||e.extra?k.createElement("div",{className:X(`${Ui}-header`,e.headerClassName),style:e.headerStyle,onClick:e.onHeaderClick},e.icon&&k.createElement("div",{className:`${Ui}-header-icon`},e.icon),k.createElement("div",{className:`${Ui}-header-title`},e.title),e.extra&&k.createElement("div",{className:`${Ui}-header-extra`},e.extra)):null,n=()=>e.children?k.createElement("div",{className:X(`${Ui}-body`,e.bodyClassName),style:e.bodyStyle,onClick:e.onBodyClick},e.children):null;return ne(e,k.createElement("div",{className:Ui,onClick:e.onClick},t(),n()))};function hg(e,t,n){return e*t*n/(t+n*e)}function pg(e,t,n,r,i=.15){return i===0?lr(e,t,n):e<t?-hg(t-e,r,i)+t:e>n?+hg(e-n,r,i)+n:e}function cE(e){if(e==null||e==="")return 0;const t=e.trim();return t.endsWith("px")?parseFloat(t):t.endsWith("rem")?parseFloat(t)*parseFloat(window.getComputedStyle(document.documentElement).fontSize):t.endsWith("vw")?parseFloat(t)*window.innerWidth/100:0}const Pn="adm-picker-view",D6=f.memo(e=>{const{value:t,column:n,renderLabel:r}=e;function i(m){e.onSelect(m,e.index)}const[{y:o},s]=Un(()=>({from:{y:0},config:{tension:400,mass:.8}})),l=f.useRef(!1),c=f.useRef(null),u=f.useRef(null),d=f.useRef(34);Ft(()=>{const m=u.current;m&&(d.current=cE(window.getComputedStyle(m).getPropertyValue("height")))}),Ft(()=>{if(l.current||t===null)return;const m=n.findIndex(h=>h.value===t);if(m<0)return;const v=m*-d.current;s.start({y:v,immediate:o.goal!==v})},[t,n]),Ft(()=>{if(n.length===0)t!==null&&i(null);else if(!n.some(m=>m.value===t)){const m=n[0];i(m.value)}},[n,t]);function p(m){const v=m*-d.current;s.start({y:v});const h=n[m];h&&i(h.value)}const g=m=>{const{direction:[,v],distance:[,h],velocity:[,b],offset:[,j],last:E}=m;return{direction:v,distance:h,velocity:b,offset:j,last:E}},w=m=>{l.current=!0;const v=-((n.length-1)*d.current),h=0,{direction:b,last:j,velocity:E,offset:$}=g(m);if(j){l.current=!1;const F=$+E*b*50,M=lr(F,v,h),R=-Math.round(M/d.current);p(R)}else{const F=$;s.start({y:pg(F,v,h,d.current*50,.2)})}},y=m=>{l.current=!0;const v=-((n.length-1)*d.current),h=0,{direction:b,last:j,velocity:E,distance:$}=g(m),F=-b,M=o.get();if(j){l.current=!1;const R=E*F*50,D=M+$*F+R,T=lr(D,v,h),V=-Math.round(T/d.current);p(V)}else{const R=M+$*F;s.start({y:pg(R,v,h,d.current*50,.2)})}};md(m=>{m.event.stopPropagation(),w(m)},{axis:"y",from:()=>[0,o.get()],filterTaps:!0,pointer:{touch:!0},target:c}),oj(m=>{m.event.stopPropagation(),y(m)},{target:e.mouseWheel?c:void 0,axis:"y",from:()=>[0,o.get()],preventDefault:!0,eventOptions:mu?{passive:!1}:void 0});let x=null;function C(){if(x===null)return null;const m=n[x],v=x-1,h=x+1,b=n[v],j=n[h];return k.createElement("div",{className:`${Pn}-column-accessible`},k.createElement("div",{className:`${Pn}-column-accessible-current`,role:"button","aria-label":m?`当前选择的是：${m.label}`:"当前未选择"},"-"),k.createElement("div",{className:`${Pn}-column-accessible-button`,onClick:()=>{b&&p(v)},role:b?"button":"text","aria-label":b?`选择上一项：${b.label}`:"没有上一项"},"-"),k.createElement("div",{className:`${Pn}-column-accessible-button`,onClick:()=>{j&&p(h)},role:j?"button":"text","aria-label":j?`选择下一项：${j.label}`:"没有下一项"},"-"))}return k.createElement("div",{className:`${Pn}-column`},k.createElement("div",{className:`${Pn}-item-height-measure`,ref:u}),k.createElement(Et.div,{ref:c,style:{translateY:o},className:`${Pn}-column-wheel`,"aria-hidden":!0},n.map((m,v)=>{var h;const b=e.value===m.value;b&&(x=v);function j(){l.current=!1,p(v)}return k.createElement("div",{key:(h=m.key)!==null&&h!==void 0?h:m.value,"data-selected":b,className:X(`${Pn}-column-item`,{[`${Pn}-column-item-active`]:b}),onClick:j,"aria-hidden":!b,"aria-label":b?"active":""},k.createElement("div",{className:`${Pn}-column-item-label`},r(m)))})),C())},(e,t)=>!(e.index!==t.index||e.value!==t.value||e.onSelect!==t.onSelect||e.renderLabel!==t.renderLabel||e.mouseWheel!==t.mouseWheel||!ub(e.column,t.column)));D6.displayName="Wheel";function mg(e){let t=null;return()=>(t===null&&(t=e()),t)}function B6(e,t){const n=mg(()=>(typeof e=="function"?e(t):e).map(s=>s.map(l=>typeof l=="string"?{label:l,value:l}:l))),r=mg(()=>t.map((o,s)=>{var l;const c=n()[s];return c&&(l=c.find(u=>u.value===o))!==null&&l!==void 0?l:null}));return{get columns(){return n()},get items(){return r()}}}function V6(e,t){return f.useMemo(()=>B6(e,t),[e,t])}const W6=e=>e.label;var U6={exports:{}},H6={};/**
 * @license React
 * use-sync-external-store-shim.production.js
 *
 * Copyright (c) Meta Platforms, Inc. and affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Do=f;function uE(e,t){return e===t&&(e!==0||1/e===1/t)||e!==e&&t!==t}var dE=typeof Object.is=="function"?Object.is:uE,fE=Do.useState,hE=Do.useEffect,pE=Do.useLayoutEffect,mE=Do.useDebugValue;function gE(e,t){var n=t(),r=fE({inst:{value:n,getSnapshot:t}}),i=r[0].inst,o=r[1];return pE(function(){i.value=n,i.getSnapshot=t,kf(i)&&o({inst:i})},[e,n,t]),hE(function(){return kf(i)&&o({inst:i}),e(function(){kf(i)&&o({inst:i})})},[e]),mE(n),n}function kf(e){var t=e.getSnapshot;e=e.value;try{var n=t();return!dE(e,n)}catch{return!0}}function vE(e,t){return t()}var xE=typeof window>"u"||typeof window.document>"u"||typeof window.document.createElement>"u"?vE:gE;H6.useSyncExternalStore=Do.useSyncExternalStore!==void 0?Do.useSyncExternalStore:xE;U6.exports=H6;var yE=U6.exports;let wE=!1;const gg=new Set;function vg(){return wE}function bE(e){return gg.add(e),()=>{gg.delete(e)}}function CE(){return yE.useSyncExternalStore(bE,vg,vg)}const jf="adm-spin-loading",kE={default:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",white:"var(--adm-color-white)"},jE={color:"default"},EE=15*3.14159265358979*2,q6=f.memo(e=>{var t;const n=oe(jE,e),r=CE(),{percent:i}=Un({cancel:r,loop:{reverse:!0},from:{percent:80},to:{percent:30},config:{duration:1200}});return ne(n,k.createElement(Et.div,{className:jf,style:{"--color":(t=kE[n.color])!==null&&t!==void 0?t:n.color,"--percent":i}},k.createElement("svg",{className:`${jf}-svg`,viewBox:"0 0 32 32"},k.createElement(Et.circle,{className:`${jf}-fill`,fill:"transparent",strokeWidth:"2",strokeDasharray:EE,strokeDashoffset:i,strokeLinecap:"square",r:15,cx:16,cy:16}))))}),to="adm-picker-view",SE={defaultValue:[],renderLabel:W6,mouseWheel:!1,loadingContent:k.createElement("div",{className:`${to}-loading-content`},k.createElement(q6,null))},Z6=f.memo(e=>{const t=oe(SE,e),[n,r]=f.useState(t.value===void 0?t.defaultValue:t.value);f.useEffect(()=>{t.value!==void 0&&t.value!==n&&r(t.value)},[t.value]),f.useEffect(()=>{if(t.value===n)return;const l=window.setTimeout(()=>{t.value!==void 0&&t.value!==n&&r(t.value)},1e3);return()=>{window.clearTimeout(l)}},[t.value,n]);const i=V6(t.columns,n),o=i.columns;ib(()=>{var l;t.value!==n&&((l=t.onChange)===null||l===void 0||l.call(t,n,i))},[n],{wait:0,leading:!1,trailing:!0});const s=f.useCallback((l,c)=>{r(u=>{const d=[...u];return d[c]=l,d})},[]);return ne(t,k.createElement("div",{className:`${to}`},t.loading?t.loadingContent:k.createElement(k.Fragment,null,o.map((l,c)=>k.createElement(D6,{key:c,index:c,column:l,value:n[c],onSelect:s,renderLabel:t.renderLabel,mouseWheel:t.mouseWheel})),k.createElement("div",{className:`${to}-mask`},k.createElement("div",{className:`${to}-mask-top`}),k.createElement("div",{className:`${to}-mask-middle`}),k.createElement("div",{className:`${to}-mask-bottom`})))))});Z6.displayName="PickerView";const vr="adm-picker",LE={defaultValue:[],closeOnMaskClick:!0,renderLabel:W6,destroyOnClose:!1,forceRender:!1},yp=f.memo(f.forwardRef((e,t)=>{var n;const{locale:r}=xt(),i=oe(LE,{confirmText:r.common.confirm,cancelText:r.common.cancel},e),[o,s]=Ot({value:i.visible,defaultValue:!1,onChange:C=>{var m;C===!1&&((m=i.onClose)===null||m===void 0||m.call(i))}}),l={toggle:()=>{s(C=>!C)},open:()=>{s(!0)},close:()=>{s(!1)}};f.useImperativeHandle(t,()=>l);const[c,u]=Ot(Object.assign(Object.assign({},i),{onChange:C=>{var m;const v=B6(i.columns,C);(m=i.onConfirm)===null||m===void 0||m.call(i,C,v)}})),d=V6(i.columns,c),[p,g]=f.useState(c);f.useEffect(()=>{p!==c&&g(c)},[o]),f.useEffect(()=>{o||g(c)},[c]);const w=al((C,m)=>{var v;g(C),o&&((v=i.onSelect)===null||v===void 0||v.call(i,C,m))}),y=ne(i,k.createElement("div",{className:vr},k.createElement("div",{className:`${vr}-header`},k.createElement("a",{role:"button",className:`${vr}-header-button`,onClick:()=>{var C;(C=i.onCancel)===null||C===void 0||C.call(i),s(!1)}},i.cancelText),k.createElement("div",{className:`${vr}-header-title`},i.title),k.createElement("a",{role:"button",className:X(`${vr}-header-button`,i.loading&&`${vr}-header-button-disabled`),onClick:()=>{i.loading||(u(p,!0),s(!1))},"aria-disabled":i.loading},i.confirmText)),k.createElement("div",{className:`${vr}-body`},k.createElement(Z6,{loading:i.loading,loadingContent:i.loadingContent,columns:i.columns,renderLabel:i.renderLabel,value:p,mouseWheel:i.mouseWheel,onChange:w})))),x=k.createElement(dp,{style:i.popupStyle,className:X(`${vr}-popup`,i.popupClassName),visible:o,position:"bottom",onMaskClick:()=>{var C;i.closeOnMaskClick&&((C=i.onCancel)===null||C===void 0||C.call(i),s(!1))},getContainer:i.getContainer,destroyOnClose:i.destroyOnClose,afterShow:i.afterShow,afterClose:i.afterClose,onClick:i.onClick,forceRender:i.forceRender,stopPropagation:i.stopPropagation},y,k.createElement(E6,{position:"bottom"}));return k.createElement(k.Fragment,null,x,(n=i.children)===null||n===void 0?void 0:n.call(i,d.items,l))}));yp.displayName="Picker";function $E(e){return new Promise(t=>{const n=()=>{const[i,o]=f.useState(!1);return f.useEffect(()=>{o(!0)},[]),k.createElement(yp,Object.assign({},e,{visible:i,onConfirm:(s,l)=>{var c;(c=e.onConfirm)===null||c===void 0||c.call(e,s,l),t(s)},onClose:()=>{var s;(s=e.onClose)===null||s===void 0||s.call(e),o(!1),t(null)},afterClose:()=>{var s;(s=e.afterClose)===null||s===void 0||s.call(e),r()}}))},r=S6(k.createElement(n,null))})}const Ef=Gt(yp,{prompt:$E}),yt="adm-tabs",_E=()=>null,FE={activeLineMode:"auto",stretch:!0,direction:"ltr"},OE=e=>{var t;const n=oe(FE,e),r=f.useRef(null),i=f.useRef(null),o={};let s=null;const l=[],c=n.direction==="rtl";xp(n.children,(j,E)=>{if(!f.isValidElement(j))return;const $=j.key;if(typeof $!="string")return;E===0&&(s=$);const F=l.push(j);o[$]=F-1});const[u,d]=Ot({value:n.activeKey,defaultValue:(t=n.defaultActiveKey)!==null&&t!==void 0?t:s,onChange:j=>{var E;j!==null&&((E=n.onChange)===null||E===void 0||E.call(n,j))}}),[{x:p,width:g},w]=Un(()=>({x:0,width:0,config:{tension:300,clamp:!0}})),[{scrollLeft:y},x]=Un(()=>({scrollLeft:0,config:{tension:300,clamp:!0}})),[{leftMaskOpacity:C,rightMaskOpacity:m},v]=Un(()=>({leftMaskOpacity:0,rightMaskOpacity:0,config:{clamp:!0}}));function h(j=!1,E=!1){const $=r.current;if(!$)return;const F=o[u];if(F===void 0){w.start({x:0,width:0,immediate:!0});return}const M=i.current;if(!M)return;const R=$.children.item(F+1),D=R.children.item(0),T=D.offsetLeft,V=D.offsetWidth,z=R.offsetLeft,I=R.offsetWidth,P=$.offsetWidth,N=$.scrollWidth,S=$.scrollLeft,_=M.offsetWidth;let O=0,A=0;if(n.activeLineMode==="auto"?(O=T,A=V):n.activeLineMode==="full"?(O=z,A=I):O=T+(V-_)/2,c){const H=["auto","full"].includes(n.activeLineMode)?A:_;O=-(P-O-H)}w.start({x:O,width:A,immediate:j});const B=N-P;if(B<=0)return;let G=0;c?G=-lr(P/2-T+V/2-_,0,B):G=lr(T-(P-V)/2,0,B),(!E||n.autoScroll!==!1)&&x.start({scrollLeft:G,from:{scrollLeft:S},immediate:j})}Ft(()=>{h(!p.isAnimating)},[]),pp(()=>{h()},[u,c,n.activeLineMode]),sE(()=>{h(!p.isAnimating)},r),lE(()=>{h(!p.isAnimating,!0)},r,{subtree:!0,childList:!0,characterData:!0});const{run:b}=hb((j=!1)=>{const E=r.current;if(!E)return;const $=E.scrollLeft;let F=!1,M=!1;c?(F=Math.round(-$)+E.offsetWidth<E.scrollWidth,M=$<0):(F=$>0,M=$+E.offsetWidth<E.scrollWidth),v.start({leftMaskOpacity:F?1:0,rightMaskOpacity:M?1:0,immediate:j})},{wait:100,trailing:!0,leading:!0});return Ft(()=>{b(!0)},[]),ne(n,k.createElement("div",{className:yt,style:{direction:n.direction}},k.createElement("div",{className:`${yt}-header`},k.createElement(Et.div,{className:X(`${yt}-header-mask`,`${yt}-header-mask-left`),style:{opacity:C}}),k.createElement(Et.div,{className:X(`${yt}-header-mask`,`${yt}-header-mask-right`),style:{opacity:m}}),k.createElement(Et.div,{className:`${yt}-tab-list`,ref:r,scrollLeft:y,onScroll:b,role:"tablist"},k.createElement(Et.div,{ref:i,className:`${yt}-tab-line`,style:{width:n.activeLineMode==="fixed"?"var(--fixed-active-line-width, 30px)":g,x:p}}),l.map(j=>ne(j.props,k.createElement("div",{key:j.key,className:X(`${yt}-tab-wrapper`,{[`${yt}-tab-wrapper-stretch`]:n.stretch})},k.createElement("div",{onClick:()=>{const{key:E}=j;j.props.disabled||E!=null&&d(E.toString())},className:X(`${yt}-tab`,{[`${yt}-tab-active`]:j.key===u,[`${yt}-tab-disabled`]:j.props.disabled}),role:"tab","aria-selected":j.key===u},j.props.title)))))),l.map(j=>{if(j.props.children===void 0)return null;const E=j.key===u;return k.createElement(hd,{key:j.key,active:E,forceRender:j.props.forceRender,destroyOnClose:j.props.destroyOnClose},k.createElement("div",{className:`${yt}-content`,style:{display:E?"block":"none"}},j.props.children))})))},Fe=Gt(OE,{Tab:_E}),ks="adm-list",NE={mode:"default"},PE=f.forwardRef((e,t)=>{const n=oe(NE,e),r=f.useRef(null);return f.useImperativeHandle(t,()=>({get nativeElement(){return r.current}})),ne(n,k.createElement("div",{className:X(ks,`${ks}-${n.mode}`),ref:r},n.header&&k.createElement("div",{className:`${ks}-header`},n.header),k.createElement("div",{className:`${ks}-body`},k.createElement("div",{className:`${ks}-body-inner`},n.children))))});function Gs(e){return e!=null&&e!==!1}const Kn="adm-list-item",RE=e=>{var t,n;const{arrow:r,arrowIcon:i}=e,{list:o={}}=xt(),s=(t=e.clickable)!==null&&t!==void 0?t:!!e.onClick,l=(n=r??i)!==null&&n!==void 0?n:s,c=g5(o.arrowIcon,r!==!0?r:null,i!==!0?i:null),u=k.createElement("div",{className:`${Kn}-content`},Gs(e.prefix)&&k.createElement("div",{className:`${Kn}-content-prefix`},e.prefix),k.createElement("div",{className:`${Kn}-content-main`},Gs(e.title)&&k.createElement("div",{className:`${Kn}-title`},e.title),e.children,Gs(e.description)&&k.createElement("div",{className:`${Kn}-description`},e.description)),Gs(e.extra)&&k.createElement("div",{className:`${Kn}-content-extra`},e.extra),l&&k.createElement("div",{className:`${Kn}-content-arrow`},c||k.createElement(Rr,null)));return ne(e,k.createElement(s?"a":"div",{className:X(`${Kn}`,s?["adm-plain-anchor"]:[],e.disabled&&`${Kn}-disabled`),onClick:e.disabled?void 0:e.onClick},u))},ce=Gt(PE,{Item:RE}),ME=(e={})=>f.useMemo(()=>{const{label:n="label",value:r="value",disabled:i="disabled",children:o="children"}=e;return[n,r,o,i]},[JSON.stringify(e)]),js="adm-center-popup",TE=Object.assign(Object.assign({},h6),{getContainer:null}),Q6=e=>{const{popup:t={}}=xt(),n=oe(TE,t,e),r=Vh(),i=Un({scale:n.visible?1:.8,opacity:n.visible?1:0,config:{mass:1.2,tension:200,friction:25,clamp:!0},onRest:()=>{var p,g;r.current||(s(n.visible),n.visible?(p=n.afterShow)===null||p===void 0||p.call(n):(g=n.afterClose)===null||g===void 0||g.call(n))}}),[o,s]=f.useState(n.visible);Ft(()=>{n.visible&&s(!0)},[n.visible]);const l=f.useRef(null);Wh(l,n.disableBodyScroll&&o);const c=p6(o&&n.visible),u=k.createElement("div",{className:X(`${js}-body`,n.bodyClassName),style:n.bodyStyle},n.children),d=zo(n.stopPropagation,ne(n,k.createElement("div",{className:js,style:{display:o?void 0:"none",pointerEvents:o?void 0:"none"}},n.mask&&k.createElement(sp,{visible:c,forceRender:n.forceRender,destroyOnClose:n.destroyOnClose,onMaskClick:p=>{var g,w;(g=n.onMaskClick)===null||g===void 0||g.call(n,p),n.closeOnMaskClick&&((w=n.onClose)===null||w===void 0||w.call(n))},style:n.maskStyle,className:X(`${js}-mask`,n.maskClassName),disableBodyScroll:!1,stopPropagation:n.stopPropagation}),k.createElement("div",{className:`${js}-wrap`,role:n.role,"aria-label":n["aria-label"]},k.createElement(Et.div,{style:Object.assign(Object.assign({},i),{pointerEvents:i.opacity.to(p=>p===1?"unset":"none")}),ref:l},n.showCloseButton&&k.createElement("a",{className:X(`${js}-close`,"adm-plain-anchor"),onClick:()=>{var p;(p=n.onClose)===null||p===void 0||p.call(n)}},n.closeIcon),u)))));return k.createElement(hd,{active:o,forceRender:n.forceRender,destroyOnClose:n.destroyOnClose},fd(n.getContainer,d))},G6=f.createContext(null),AE={disabled:!1,defaultValue:[]},IE=e=>{const t=oe(AE,e),[n,r]=Ot(t);return k.createElement(G6.Provider,{value:{value:n,disabled:t.disabled,check:i=>{r([...n,i])},uncheck:i=>{r(n.filter(o=>o!==i))}}},t.children)},K6=f.memo(e=>ne(e,k.createElement("svg",{viewBox:"0 0 40 40"},k.createElement("path",{d:"M31.5541766,15 L28.0892433,15 L28.0892434,15 C27.971052,15 27.8576674,15.044522 27.7740471,15.1239792 L18.2724722,24.1625319 L13.2248725,19.3630279 L13.2248725,19.3630279 C13.1417074,19.2834412 13.0287551,19.2384807 12.9107898,19.2380079 L9.44474455,19.2380079 L9.44474454,19.2380079 C9.19869815,19.2384085 8.99957935,19.4284738 9,19.66253 C9,19.7747587 9.04719253,19.8823283 9.13066188,19.9616418 L17.0907466,27.5338228 C17.4170809,27.8442545 17.8447695,28 18.2713393,28 L18.2980697,28 C18.7168464,27.993643 19.133396,27.8378975 19.4530492,27.5338228 L31.8693384,15.7236361 L31.8693384,15.7236361 C32.0434167,15.5582251 32.0435739,15.2898919 31.8696892,15.1242941 C31.7860402,15.0446329 31.6725052,15 31.5541421,15 L31.5541766,15 Z",fill:"currentColor"})))),zE=f.memo(e=>ne(e,k.createElement("svg",{viewBox:"0 0 40 40"},k.createElement("path",{d:"M20,9 C26.0752953,9 31,13.9247047 31,20 C31,26.0752953 26.0752953,31 20,31 C13.9247047,31 9,26.0752953 9,20 C9,13.9247047 13.9247047,9 20,9 Z",fill:"currentColor"})))),Y6=e=>{const t=f.useRef(null),n=al(r=>{r.stopPropagation(),r.stopImmediatePropagation();const i=r.target.checked;i!==e.checked&&e.onChange(i)});return f.useEffect(()=>{if(e.disabled||!t.current)return;const r=t.current;return r.addEventListener("click",n),()=>{r.removeEventListener("click",n)}},[e.disabled,e.onChange]),k.createElement("input",{ref:t,type:e.type,checked:e.checked,onChange:()=>{},disabled:e.disabled,id:e.id})},xr="adm-checkbox",DE={defaultChecked:!1,indeterminate:!1},BE=f.forwardRef((e,t)=>{const n=f.useContext(G6),r=oe(DE,e);let[i,o]=Ot({value:r.checked,defaultValue:r.defaultChecked,onChange:r.onChange}),s=r.disabled;const{value:l}=r;n&&l!==void 0&&(i=n.value.includes(l),o=u=>{var d;u?n.check(l):n.uncheck(l),(d=r.onChange)===null||d===void 0||d.call(r,u)},s=s||n.disabled),f.useImperativeHandle(t,()=>({check:()=>{o(!0)},uncheck:()=>{o(!1)},toggle:()=>{o(!i)}}));const c=()=>r.icon?k.createElement("div",{className:`${xr}-custom-icon`},r.icon(i,r.indeterminate)):k.createElement("div",{className:`${xr}-icon`},r.indeterminate?k.createElement(zE,null):i&&k.createElement(K6,null));return ne(r,k.createElement("label",{onClick:r.onClick,className:X(xr,{[`${xr}-checked`]:i&&!r.indeterminate,[`${xr}-indeterminate`]:r.indeterminate,[`${xr}-disabled`]:s,[`${xr}-block`]:r.block})},k.createElement(Y6,{type:"checkbox",checked:i,onChange:o,disabled:s,id:r.id}),c(),r.children&&k.createElement("div",{className:`${xr}-content`},r.children)))}),X6=Gt(BE,{Group:IE}),VE=e=>{const{action:t}=e;return ne(e.action,k.createElement(J,{key:t.key,onClick:e.onAction,className:X("adm-dialog-button",{"adm-dialog-button-bold":t.bold}),fill:"none",shape:"rectangular",block:!0,color:t.danger?"danger":"primary",loading:"auto",disabled:t.disabled},t.text))},WE={actions:[],closeOnAction:!1,closeOnMaskClick:!1,getContainer:null},J6=e=>{const t=oe(WE,e),n=k.createElement(k.Fragment,null,!!t.image&&k.createElement("div",{className:Rn("image-container")},k.createElement(Zr,{src:t.image,alt:"dialog header image",width:"100%"})),!!t.header&&k.createElement("div",{className:Rn("header")},k.createElement(Za,null,t.header)),!!t.title&&k.createElement("div",{className:Rn("title")},t.title),k.createElement("div",{className:X(Rn("content"),!t.content&&Rn("content-empty"))},typeof t.content=="string"?k.createElement(Za,null,t.content):t.content),k.createElement("div",{className:Rn("footer")},t.actions.map((r,i)=>{const o=Array.isArray(r)?r:[r];return k.createElement("div",{className:Rn("action-row"),key:i},o.map((s,l)=>k.createElement(VE,{key:s.key,action:s,onAction:()=>$n(void 0,void 0,void 0,function*(){var c,u,d;yield Promise.all([(c=s.onClick)===null||c===void 0?void 0:c.call(s),(u=t.onAction)===null||u===void 0?void 0:u.call(t,s,l)]),t.closeOnAction&&((d=t.onClose)===null||d===void 0||d.call(t))})})))})));return k.createElement(Q6,{className:X(Rn(),t.className),style:t.style,afterClose:t.afterClose,afterShow:t.afterShow,onMaskClick:t.closeOnMaskClick?()=>{var r;(r=t.onClose)===null||r===void 0||r.call(t)}:void 0,visible:t.visible,getContainer:t.getContainer,bodyStyle:t.bodyStyle,bodyClassName:X(Rn("body"),t.image&&Rn("with-image"),t.bodyClassName),maskStyle:t.maskStyle,maskClassName:t.maskClassName,stopPropagation:t.stopPropagation,disableBodyScroll:t.disableBodyScroll,destroyOnClose:t.destroyOnClose,forceRender:t.forceRender,role:"dialog","aria-label":t["aria-label"]},n)};function Rn(e=""){return"adm-dialog"+(e&&"-")+e}const p1=new Set;function wp(e){const t=Eu(k.createElement(J6,Object.assign({},e,{afterClose:()=>{var n;p1.delete(t.close),(n=e.afterClose)===null||n===void 0||n.call(e)}})));return p1.add(t.close),t}function UE(e){const t={confirmText:sl().locale.Dialog.ok},n=oe(t,e);return new Promise(r=>{wp(Object.assign(Object.assign({},n),{closeOnAction:!0,actions:[{key:"confirm",text:n.confirmText}],onAction:n.onConfirm,onClose:()=>{var i;(i=n.onClose)===null||i===void 0||i.call(n),r()}}))})}const HE={confirmText:"确认",cancelText:"取消"};function qE(e){const{locale:t}=sl(),n=oe(HE,{confirmText:t.common.confirm,cancelText:t.common.cancel},e);return new Promise(r=>{wp(Object.assign(Object.assign({},n),{closeOnAction:!0,onClose:()=>{var i;(i=n.onClose)===null||i===void 0||i.call(n),r(!1)},actions:[[{key:"cancel",text:n.cancelText,onClick:()=>$n(this,void 0,void 0,function*(){var i;yield(i=n.onCancel)===null||i===void 0?void 0:i.call(n),r(!1)})},{key:"confirm",text:n.confirmText,bold:!0,onClick:()=>$n(this,void 0,void 0,function*(){var i;yield(i=n.onConfirm)===null||i===void 0?void 0:i.call(n),r(!0)})}]]}))})}function ZE(){p1.forEach(e=>{e()})}const Ld=Gt(J6,{show:wp,alert:UE,confirm:qE,clear:ZE});var xg;(function(e){e[e.HIGH_SURROGATE_START=55296]="HIGH_SURROGATE_START",e[e.HIGH_SURROGATE_END=56319]="HIGH_SURROGATE_END",e[e.LOW_SURROGATE_START=56320]="LOW_SURROGATE_START",e[e.REGIONAL_INDICATOR_START=127462]="REGIONAL_INDICATOR_START",e[e.REGIONAL_INDICATOR_END=127487]="REGIONAL_INDICATOR_END",e[e.FITZPATRICK_MODIFIER_START=127995]="FITZPATRICK_MODIFIER_START",e[e.FITZPATRICK_MODIFIER_END=127999]="FITZPATRICK_MODIFIER_END",e[e.VARIATION_MODIFIER_START=65024]="VARIATION_MODIFIER_START",e[e.VARIATION_MODIFIER_END=65039]="VARIATION_MODIFIER_END",e[e.DIACRITICAL_MARKS_START=8400]="DIACRITICAL_MARKS_START",e[e.DIACRITICAL_MARKS_END=8447]="DIACRITICAL_MARKS_END",e[e.SUBDIVISION_INDICATOR_START=127988]="SUBDIVISION_INDICATOR_START",e[e.TAGS_START=917504]="TAGS_START",e[e.TAGS_END=917631]="TAGS_END",e[e.ZWJ=8205]="ZWJ"})(xg||(xg={}));const QE=Object.freeze([776,2359,2367,2984,3007,3021,3633,3635,3648,3657,4352,4449,4520]);var yg;function Sf(e){if(typeof e!="string")throw new TypeError("string cannot be undefined or null");const t=[];let n=0,r=0;for(;n<e.length;)r+=GE(n+r,e),nS(e[n+r])&&r++,JE(e[n+r])&&r++,eS(e[n+r])&&r++,rS(e[n+r])?r++:(t.push(e.substring(n,n+r)),n+=r,r=0);return t}function GE(e,t){const n=t[e];if(!KE(n)||e===t.length-1)return 1;const r=n+t[e+1];let i=t.substring(e+2,e+5);return wg(r)&&wg(i)?4:YE(r)&&tS(i)?t.slice(e).indexOf(String.fromCodePoint(917631))+2:XE(i)?4:2}function KE(e){return e&&zi(e[0].charCodeAt(0),55296,56319)}function wg(e){return zi(bp(e),127462,127487)}function YE(e){return zi(bp(e),127988,127988)}function XE(e){return zi(bp(e),127995,127999)}function JE(e){return typeof e=="string"&&zi(e.charCodeAt(0),65024,65039)}function eS(e){return typeof e=="string"&&zi(e.charCodeAt(0),8400,8447)}function tS(e){const t=e.codePointAt(0);return typeof e=="string"&&typeof t=="number"&&zi(t,917504,917631)}function nS(e){return typeof e=="string"&&QE.includes(e.charCodeAt(0))}function rS(e){return typeof e=="string"&&e.charCodeAt(0)===8205}function bp(e){return(e.charCodeAt(0)-55296<<10)+(e.charCodeAt(1)-56320)+65536}function zi(e,t,n){return e>=t&&e<=n}(function(e){e[e.unit_1=1]="unit_1",e[e.unit_2=2]="unit_2",e[e.unit_4=4]="unit_4"})(yg||(yg={}));const iS=e=>ne(e,k.createElement("svg",{viewBox:"0 0 64 41"},k.createElement("g",{transform:"translate(0 1)",fill:"none",fillRule:"evenodd"},k.createElement("ellipse",{fill:"#f5f5f5",cx:"32",cy:"33",rx:"32",ry:"7"}),k.createElement("g",{stroke:"#d9d9d9"},k.createElement("path",{d:"M55 12.76L44.854 1.258C44.367.474 43.656 0 42.907 0H21.093c-.749 0-1.46.474-1.947 1.257L9 12.761V22h46v-9.24z"}),k.createElement("path",{d:"M41.613 15.931c0-1.605.994-2.93 2.227-2.931H55v18.137C55 33.26 53.68 35 52.05 35h-40.1C10.32 35 9 33.259 9 31.137V13h11.16c1.233 0 2.227 1.323 2.227 2.928v.022c0 1.605 1.005 2.901 2.237 2.901h14.752c1.232 0 2.237-1.308 2.237-2.913v-.007z",fill:"#fafafa"}))))),Es="adm-empty",Cp=e=>{function t(){const{image:n}=e;return n===void 0?k.createElement(iS,{className:`${Es}-image`,style:e.imageStyle}):typeof n=="string"?k.createElement("img",{className:`${Es}-image`,style:e.imageStyle,src:n,alt:"empty"}):n}return ne(e,k.createElement("div",{className:Es},k.createElement("div",{className:`${Es}-image-container`},t()),e.description&&k.createElement("div",{className:X(`${Es}-description`)},e.description)))};function oS(e,t){return e.reduce((n,r)=>Math.abs(n-t)<Math.abs(r-t)?n:r)}function Lu(){return Lu=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)({}).hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},Lu.apply(null,arguments)}function sS(e,t){if(e==null)return{};var n={};for(var r in e)if({}.hasOwnProperty.call(e,r)){if(t.indexOf(r)!==-1)continue;n[r]=e[r]}return n}function kp(e,t){if(e==null)return{};var n,r,i=sS(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)===-1&&{}.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}function _n(){_n=function(){return t};var e,t={},n=Object.prototype,r=n.hasOwnProperty,i=Object.defineProperty||function(P,N,S){P[N]=S.value},o=typeof Symbol=="function"?Symbol:{},s=o.iterator||"@@iterator",l=o.asyncIterator||"@@asyncIterator",c=o.toStringTag||"@@toStringTag";function u(P,N,S){return Object.defineProperty(P,N,{value:S,enumerable:!0,configurable:!0,writable:!0}),P[N]}try{u({},"")}catch{u=function(S,_,O){return S[_]=O}}function d(P,N,S,_){var O=N&&N.prototype instanceof m?N:m,A=Object.create(O.prototype),B=new z(_||[]);return i(A,"_invoke",{value:R(P,S,B)}),A}function p(P,N,S){try{return{type:"normal",arg:P.call(N,S)}}catch(_){return{type:"throw",arg:_}}}t.wrap=d;var g="suspendedStart",w="suspendedYield",y="executing",x="completed",C={};function m(){}function v(){}function h(){}var b={};u(b,s,function(){return this});var j=Object.getPrototypeOf,E=j&&j(j(I([])));E&&E!==n&&r.call(E,s)&&(b=E);var $=h.prototype=m.prototype=Object.create(b);function F(P){["next","throw","return"].forEach(function(N){u(P,N,function(S){return this._invoke(N,S)})})}function M(P,N){function S(O,A,B,G){var H=p(P[O],P,A);if(H.type!=="throw"){var W=H.arg,Q=W.value;return Q&&et(Q)=="object"&&r.call(Q,"__await")?N.resolve(Q.__await).then(function(ee){S("next",ee,B,G)},function(ee){S("throw",ee,B,G)}):N.resolve(Q).then(function(ee){W.value=ee,B(W)},function(ee){return S("throw",ee,B,G)})}G(H.arg)}var _;i(this,"_invoke",{value:function(A,B){function G(){return new N(function(H,W){S(A,B,H,W)})}return _=_?_.then(G,G):G()}})}function R(P,N,S){var _=g;return function(O,A){if(_===y)throw Error("Generator is already running");if(_===x){if(O==="throw")throw A;return{value:e,done:!0}}for(S.method=O,S.arg=A;;){var B=S.delegate;if(B){var G=D(B,S);if(G){if(G===C)continue;return G}}if(S.method==="next")S.sent=S._sent=S.arg;else if(S.method==="throw"){if(_===g)throw _=x,S.arg;S.dispatchException(S.arg)}else S.method==="return"&&S.abrupt("return",S.arg);_=y;var H=p(P,N,S);if(H.type==="normal"){if(_=S.done?x:w,H.arg===C)continue;return{value:H.arg,done:S.done}}H.type==="throw"&&(_=x,S.method="throw",S.arg=H.arg)}}}function D(P,N){var S=N.method,_=P.iterator[S];if(_===e)return N.delegate=null,S==="throw"&&P.iterator.return&&(N.method="return",N.arg=e,D(P,N),N.method==="throw")||S!=="return"&&(N.method="throw",N.arg=new TypeError("The iterator does not provide a '"+S+"' method")),C;var O=p(_,P.iterator,N.arg);if(O.type==="throw")return N.method="throw",N.arg=O.arg,N.delegate=null,C;var A=O.arg;return A?A.done?(N[P.resultName]=A.value,N.next=P.nextLoc,N.method!=="return"&&(N.method="next",N.arg=e),N.delegate=null,C):A:(N.method="throw",N.arg=new TypeError("iterator result is not an object"),N.delegate=null,C)}function T(P){var N={tryLoc:P[0]};1 in P&&(N.catchLoc=P[1]),2 in P&&(N.finallyLoc=P[2],N.afterLoc=P[3]),this.tryEntries.push(N)}function V(P){var N=P.completion||{};N.type="normal",delete N.arg,P.completion=N}function z(P){this.tryEntries=[{tryLoc:"root"}],P.forEach(T,this),this.reset(!0)}function I(P){if(P||P===""){var N=P[s];if(N)return N.call(P);if(typeof P.next=="function")return P;if(!isNaN(P.length)){var S=-1,_=function O(){for(;++S<P.length;)if(r.call(P,S))return O.value=P[S],O.done=!1,O;return O.value=e,O.done=!0,O};return _.next=_}}throw new TypeError(et(P)+" is not iterable")}return v.prototype=h,i($,"constructor",{value:h,configurable:!0}),i(h,"constructor",{value:v,configurable:!0}),v.displayName=u(h,c,"GeneratorFunction"),t.isGeneratorFunction=function(P){var N=typeof P=="function"&&P.constructor;return!!N&&(N===v||(N.displayName||N.name)==="GeneratorFunction")},t.mark=function(P){return Object.setPrototypeOf?Object.setPrototypeOf(P,h):(P.__proto__=h,u(P,c,"GeneratorFunction")),P.prototype=Object.create($),P},t.awrap=function(P){return{__await:P}},F(M.prototype),u(M.prototype,l,function(){return this}),t.AsyncIterator=M,t.async=function(P,N,S,_,O){O===void 0&&(O=Promise);var A=new M(d(P,N,S,_),O);return t.isGeneratorFunction(N)?A:A.next().then(function(B){return B.done?B.value:A.next()})},F($),u($,c,"Generator"),u($,s,function(){return this}),u($,"toString",function(){return"[object Generator]"}),t.keys=function(P){var N=Object(P),S=[];for(var _ in N)S.push(_);return S.reverse(),function O(){for(;S.length;){var A=S.pop();if(A in N)return O.value=A,O.done=!1,O}return O.done=!0,O}},t.values=I,z.prototype={constructor:z,reset:function(N){if(this.prev=0,this.next=0,this.sent=this._sent=e,this.done=!1,this.delegate=null,this.method="next",this.arg=e,this.tryEntries.forEach(V),!N)for(var S in this)S.charAt(0)==="t"&&r.call(this,S)&&!isNaN(+S.slice(1))&&(this[S]=e)},stop:function(){this.done=!0;var N=this.tryEntries[0].completion;if(N.type==="throw")throw N.arg;return this.rval},dispatchException:function(N){if(this.done)throw N;var S=this;function _(W,Q){return B.type="throw",B.arg=N,S.next=W,Q&&(S.method="next",S.arg=e),!!Q}for(var O=this.tryEntries.length-1;O>=0;--O){var A=this.tryEntries[O],B=A.completion;if(A.tryLoc==="root")return _("end");if(A.tryLoc<=this.prev){var G=r.call(A,"catchLoc"),H=r.call(A,"finallyLoc");if(G&&H){if(this.prev<A.catchLoc)return _(A.catchLoc,!0);if(this.prev<A.finallyLoc)return _(A.finallyLoc)}else if(G){if(this.prev<A.catchLoc)return _(A.catchLoc,!0)}else{if(!H)throw Error("try statement without catch or finally");if(this.prev<A.finallyLoc)return _(A.finallyLoc)}}}},abrupt:function(N,S){for(var _=this.tryEntries.length-1;_>=0;--_){var O=this.tryEntries[_];if(O.tryLoc<=this.prev&&r.call(O,"finallyLoc")&&this.prev<O.finallyLoc){var A=O;break}}A&&(N==="break"||N==="continue")&&A.tryLoc<=S&&S<=A.finallyLoc&&(A=null);var B=A?A.completion:{};return B.type=N,B.arg=S,A?(this.method="next",this.next=A.finallyLoc,C):this.complete(B)},complete:function(N,S){if(N.type==="throw")throw N.arg;return N.type==="break"||N.type==="continue"?this.next=N.arg:N.type==="return"?(this.rval=this.arg=N.arg,this.method="return",this.next="end"):N.type==="normal"&&S&&(this.next=S),C},finish:function(N){for(var S=this.tryEntries.length-1;S>=0;--S){var _=this.tryEntries[S];if(_.finallyLoc===N)return this.complete(_.completion,_.afterLoc),V(_),C}},catch:function(N){for(var S=this.tryEntries.length-1;S>=0;--S){var _=this.tryEntries[S];if(_.tryLoc===N){var O=_.completion;if(O.type==="throw"){var A=O.arg;V(_)}return A}}throw Error("illegal catch attempt")},delegateYield:function(N,S,_){return this.delegate={iterator:I(N),resultName:S,nextLoc:_},this.method==="next"&&(this.arg=e),C}},t}function bg(e,t,n,r,i,o,s){try{var l=e[o](s),c=l.value}catch(u){return void n(u)}l.done?t(c):Promise.resolve(c).then(r,i)}function hl(e){return function(){var t=this,n=arguments;return new Promise(function(r,i){var o=e.apply(t,n);function s(c){bg(o,r,i,s,l,"next",c)}function l(c){bg(o,r,i,s,l,"throw",c)}s(void 0)})}}function pl(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function aS(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,T6(r.key),r)}}function ml(e,t,n){return t&&aS(e.prototype,t),Object.defineProperty(e,"prototype",{writable:!1}),e}function xe(e){if(e===void 0)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}function m1(e,t){return m1=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(n,r){return n.__proto__=r,n},m1(e,t)}function lS(e,t){if(typeof t!="function"&&t!==null)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),Object.defineProperty(e,"prototype",{writable:!1}),t&&m1(e,t)}function $u(e){return $u=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(t){return t.__proto__||Object.getPrototypeOf(t)},$u(e)}function ev(){try{var e=!Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}))}catch{}return(ev=function(){return!!e})()}function cS(e,t){if(t&&(et(t)=="object"||typeof t=="function"))return t;if(t!==void 0)throw new TypeError("Derived constructors may only return object or undefined");return xe(e)}function uS(e){var t=ev();return function(){var n,r=$u(e);if(t){var i=$u(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return cS(this,n)}}function g1(e){var t=arguments.length>1&&arguments[1]!==void 0?arguments[1]:{},n=[];return k.Children.forEach(e,function(r){r==null&&!t.keepEmpty||(Array.isArray(r)?n=n.concat(g1(r)):Qj(r)&&r.props?n=n.concat(g1(r.props.children,t)):n.push(r))}),n}function Cg(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1,r=new Set;function i(o,s){var l=arguments.length>2&&arguments[2]!==void 0?arguments[2]:1,c=r.has(o);if(cn(!c,"Warning: There may be circular references"),c)return!1;if(o===s)return!0;if(n&&l>1)return!1;r.add(o);var u=l+1;if(Array.isArray(o)){if(!Array.isArray(s)||o.length!==s.length)return!1;for(var d=0;d<o.length;d++)if(!i(o[d],s[d],u))return!1;return!0}if(o&&s&&et(o)==="object"&&et(s)==="object"){var p=Object.keys(o);return p.length!==Object.keys(s).length?!1:p.every(function(g){return i(o[g],s[g],u)})}return!1}return i(e,t)}var mi="RC_FORM_INTERNAL_HOOKS",ke=function(){cn(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},Ni=f.createContext({getFieldValue:ke,getFieldsValue:ke,getFieldError:ke,getFieldWarning:ke,getFieldsError:ke,isFieldsTouched:ke,isFieldTouched:ke,isFieldValidating:ke,isFieldsValidating:ke,resetFields:ke,setFields:ke,setFieldValue:ke,setFieldsValue:ke,validateFields:ke,submit:ke,getInternalHooks:function(){return ke(),{dispatch:ke,initEntityValue:ke,registerField:ke,useSubscribe:ke,setInitialValues:ke,destroyForm:ke,setCallbacks:ke,registerWatch:ke,getFields:ke,setValidateMessages:ke,setPreserve:ke,getInitialValue:ke}}}),_u=f.createContext(null);function v1(e){return e==null?[]:Array.isArray(e)?e:[e]}function dS(e){return e&&!!e._init}function gi(){return gi=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e},gi.apply(this,arguments)}function fS(e,t){e.prototype=Object.create(t.prototype),e.prototype.constructor=e,Ga(e,t)}function x1(e){return x1=Object.setPrototypeOf?Object.getPrototypeOf.bind():function(n){return n.__proto__||Object.getPrototypeOf(n)},x1(e)}function Ga(e,t){return Ga=Object.setPrototypeOf?Object.setPrototypeOf.bind():function(r,i){return r.__proto__=i,r},Ga(e,t)}function hS(){if(typeof Reflect>"u"||!Reflect.construct||Reflect.construct.sham)return!1;if(typeof Proxy=="function")return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){})),!0}catch{return!1}}function Ac(e,t,n){return hS()?Ac=Reflect.construct.bind():Ac=function(i,o,s){var l=[null];l.push.apply(l,o);var c=Function.bind.apply(i,l),u=new c;return s&&Ga(u,s.prototype),u},Ac.apply(null,arguments)}function pS(e){return Function.toString.call(e).indexOf("[native code]")!==-1}function y1(e){var t=typeof Map=="function"?new Map:void 0;return y1=function(r){if(r===null||!pS(r))return r;if(typeof r!="function")throw new TypeError("Super expression must either be null or a function");if(typeof t<"u"){if(t.has(r))return t.get(r);t.set(r,i)}function i(){return Ac(r,arguments,x1(this).constructor)}return i.prototype=Object.create(r.prototype,{constructor:{value:i,enumerable:!1,writable:!0,configurable:!0}}),Ga(i,r)},y1(e)}var mS=/%[sdj%]/g,gS=function(){};function w1(e){if(!e||!e.length)return null;var t={};return e.forEach(function(n){var r=n.field;t[r]=t[r]||[],t[r].push(n)}),t}function Vt(e){for(var t=arguments.length,n=new Array(t>1?t-1:0),r=1;r<t;r++)n[r-1]=arguments[r];var i=0,o=n.length;if(typeof e=="function")return e.apply(null,n);if(typeof e=="string"){var s=e.replace(mS,function(l){if(l==="%%")return"%";if(i>=o)return l;switch(l){case"%s":return String(n[i++]);case"%d":return Number(n[i++]);case"%j":try{return JSON.stringify(n[i++])}catch{return"[Circular]"}break;default:return l}});return s}return e}function vS(e){return e==="string"||e==="url"||e==="hex"||e==="email"||e==="date"||e==="pattern"}function Qe(e,t){return!!(e==null||t==="array"&&Array.isArray(e)&&!e.length||vS(t)&&typeof e=="string"&&!e)}function xS(e,t,n){var r=[],i=0,o=e.length;function s(l){r.push.apply(r,l||[]),i++,i===o&&n(r)}e.forEach(function(l){t(l,s)})}function kg(e,t,n){var r=0,i=e.length;function o(s){if(s&&s.length){n(s);return}var l=r;r=r+1,l<i?t(e[l],o):n([])}o([])}function yS(e){var t=[];return Object.keys(e).forEach(function(n){t.push.apply(t,e[n]||[])}),t}var jg=function(e){fS(t,e);function t(n,r){var i;return i=e.call(this,"Async Validation Error")||this,i.errors=n,i.fields=r,i}return t}(y1(Error));function wS(e,t,n,r,i){if(t.first){var o=new Promise(function(g,w){var y=function(m){return r(m),m.length?w(new jg(m,w1(m))):g(i)},x=yS(e);kg(x,n,y)});return o.catch(function(g){return g}),o}var s=t.firstFields===!0?Object.keys(e):t.firstFields||[],l=Object.keys(e),c=l.length,u=0,d=[],p=new Promise(function(g,w){var y=function(C){if(d.push.apply(d,C),u++,u===c)return r(d),d.length?w(new jg(d,w1(d))):g(i)};l.length||(r(d),g(i)),l.forEach(function(x){var C=e[x];s.indexOf(x)!==-1?kg(C,n,y):xS(C,n,y)})});return p.catch(function(g){return g}),p}function bS(e){return!!(e&&e.message!==void 0)}function CS(e,t){for(var n=e,r=0;r<t.length;r++){if(n==null)return n;n=n[t[r]]}return n}function Eg(e,t){return function(n){var r;return e.fullFields?r=CS(t,e.fullFields):r=t[n.field||e.fullField],bS(n)?(n.field=n.field||e.fullField,n.fieldValue=r,n):{message:typeof n=="function"?n():n,fieldValue:r,field:n.field||e.fullField}}}function Sg(e,t){if(t){for(var n in t)if(t.hasOwnProperty(n)){var r=t[n];typeof r=="object"&&typeof e[n]=="object"?e[n]=gi({},e[n],r):e[n]=r}}return e}var tv=function(t,n,r,i,o,s){t.required&&(!r.hasOwnProperty(t.field)||Qe(n,s||t.type))&&i.push(Vt(o.messages.required,t.fullField))},kS=function(t,n,r,i,o){(/^\s+$/.test(n)||n==="")&&i.push(Vt(o.messages.whitespace,t.fullField))},Dl,jS=function(){if(Dl)return Dl;var e="[a-fA-F\\d:]",t=function(b){return b&&b.includeBoundaries?"(?:(?<=\\s|^)(?="+e+")|(?<="+e+")(?=\\s|$))":""},n="(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)(?:\\.(?:25[0-5]|2[0-4]\\d|1\\d\\d|[1-9]\\d|\\d)){3}",r="[a-fA-F\\d]{1,4}",i=(`
(?:
(?:`+r+":){7}(?:"+r+`|:)|                                    // 1:2:3:4:5:6:7::  1:2:3:4:5:6:7:8
(?:`+r+":){6}(?:"+n+"|:"+r+`|:)|                             // 1:2:3:4:5:6::    1:2:3:4:5:6::8   1:2:3:4:5:6::8  1:2:3:4:5:6::1.2.3.4
(?:`+r+":){5}(?::"+n+"|(?::"+r+`){1,2}|:)|                   // 1:2:3:4:5::      1:2:3:4:5::7:8   1:2:3:4:5::8    1:2:3:4:5::7:1.2.3.4
(?:`+r+":){4}(?:(?::"+r+"){0,1}:"+n+"|(?::"+r+`){1,3}|:)| // 1:2:3:4::        1:2:3:4::6:7:8   1:2:3:4::8      1:2:3:4::6:7:1.2.3.4
(?:`+r+":){3}(?:(?::"+r+"){0,2}:"+n+"|(?::"+r+`){1,4}|:)| // 1:2:3::          1:2:3::5:6:7:8   1:2:3::8        1:2:3::5:6:7:1.2.3.4
(?:`+r+":){2}(?:(?::"+r+"){0,3}:"+n+"|(?::"+r+`){1,5}|:)| // 1:2::            1:2::4:5:6:7:8   1:2::8          1:2::4:5:6:7:1.2.3.4
(?:`+r+":){1}(?:(?::"+r+"){0,4}:"+n+"|(?::"+r+`){1,6}|:)| // 1::              1::3:4:5:6:7:8   1::8            1::3:4:5:6:7:1.2.3.4
(?::(?:(?::`+r+"){0,5}:"+n+"|(?::"+r+`){1,7}|:))             // ::2:3:4:5:6:7:8  ::2:3:4:5:6:7:8  ::8             ::1.2.3.4
)(?:%[0-9a-zA-Z]{1,})?                                             // %eth0            %1
`).replace(/\s*\/\/.*$/gm,"").replace(/\n/g,"").trim(),o=new RegExp("(?:^"+n+"$)|(?:^"+i+"$)"),s=new RegExp("^"+n+"$"),l=new RegExp("^"+i+"$"),c=function(b){return b&&b.exact?o:new RegExp("(?:"+t(b)+n+t(b)+")|(?:"+t(b)+i+t(b)+")","g")};c.v4=function(h){return h&&h.exact?s:new RegExp(""+t(h)+n+t(h),"g")},c.v6=function(h){return h&&h.exact?l:new RegExp(""+t(h)+i+t(h),"g")};var u="(?:(?:[a-z]+:)?//)",d="(?:\\S+(?::\\S*)?@)?",p=c.v4().source,g=c.v6().source,w="(?:(?:[a-z\\u00a1-\\uffff0-9][-_]*)*[a-z\\u00a1-\\uffff0-9]+)",y="(?:\\.(?:[a-z\\u00a1-\\uffff0-9]-*)*[a-z\\u00a1-\\uffff0-9]+)*",x="(?:\\.(?:[a-z\\u00a1-\\uffff]{2,}))",C="(?::\\d{2,5})?",m='(?:[/?#][^\\s"]*)?',v="(?:"+u+"|www\\.)"+d+"(?:localhost|"+p+"|"+g+"|"+w+y+x+")"+C+m;return Dl=new RegExp("(?:^"+v+"$)","i"),Dl},Lg={email:/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+\.)+[a-zA-Z\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]{2,}))$/,hex:/^#?([a-f0-9]{6}|[a-f0-9]{3})$/i},Ks={integer:function(t){return Ks.number(t)&&parseInt(t,10)===t},float:function(t){return Ks.number(t)&&!Ks.integer(t)},array:function(t){return Array.isArray(t)},regexp:function(t){if(t instanceof RegExp)return!0;try{return!!new RegExp(t)}catch{return!1}},date:function(t){return typeof t.getTime=="function"&&typeof t.getMonth=="function"&&typeof t.getYear=="function"&&!isNaN(t.getTime())},number:function(t){return isNaN(t)?!1:typeof t=="number"},object:function(t){return typeof t=="object"&&!Ks.array(t)},method:function(t){return typeof t=="function"},email:function(t){return typeof t=="string"&&t.length<=320&&!!t.match(Lg.email)},url:function(t){return typeof t=="string"&&t.length<=2048&&!!t.match(jS())},hex:function(t){return typeof t=="string"&&!!t.match(Lg.hex)}},ES=function(t,n,r,i,o){if(t.required&&n===void 0){tv(t,n,r,i,o);return}var s=["integer","float","array","regexp","object","method","email","number","date","url","hex"],l=t.type;s.indexOf(l)>-1?Ks[l](n)||i.push(Vt(o.messages.types[l],t.fullField,t.type)):l&&typeof n!==t.type&&i.push(Vt(o.messages.types[l],t.fullField,t.type))},SS=function(t,n,r,i,o){var s=typeof t.len=="number",l=typeof t.min=="number",c=typeof t.max=="number",u=/[\uD800-\uDBFF][\uDC00-\uDFFF]/g,d=n,p=null,g=typeof n=="number",w=typeof n=="string",y=Array.isArray(n);if(g?p="number":w?p="string":y&&(p="array"),!p)return!1;y&&(d=n.length),w&&(d=n.replace(u,"_").length),s?d!==t.len&&i.push(Vt(o.messages[p].len,t.fullField,t.len)):l&&!c&&d<t.min?i.push(Vt(o.messages[p].min,t.fullField,t.min)):c&&!l&&d>t.max?i.push(Vt(o.messages[p].max,t.fullField,t.max)):l&&c&&(d<t.min||d>t.max)&&i.push(Vt(o.messages[p].range,t.fullField,t.min,t.max))},Hi="enum",LS=function(t,n,r,i,o){t[Hi]=Array.isArray(t[Hi])?t[Hi]:[],t[Hi].indexOf(n)===-1&&i.push(Vt(o.messages[Hi],t.fullField,t[Hi].join(", ")))},$S=function(t,n,r,i,o){if(t.pattern){if(t.pattern instanceof RegExp)t.pattern.lastIndex=0,t.pattern.test(n)||i.push(Vt(o.messages.pattern.mismatch,t.fullField,n,t.pattern));else if(typeof t.pattern=="string"){var s=new RegExp(t.pattern);s.test(n)||i.push(Vt(o.messages.pattern.mismatch,t.fullField,n,t.pattern))}}},le={required:tv,whitespace:kS,type:ES,range:SS,enum:LS,pattern:$S},_S=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n,"string")&&!t.required)return r();le.required(t,n,i,s,o,"string"),Qe(n,"string")||(le.type(t,n,i,s,o),le.range(t,n,i,s,o),le.pattern(t,n,i,s,o),t.whitespace===!0&&le.whitespace(t,n,i,s,o))}r(s)},FS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n)&&!t.required)return r();le.required(t,n,i,s,o),n!==void 0&&le.type(t,n,i,s,o)}r(s)},OS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(n===""&&(n=void 0),Qe(n)&&!t.required)return r();le.required(t,n,i,s,o),n!==void 0&&(le.type(t,n,i,s,o),le.range(t,n,i,s,o))}r(s)},NS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n)&&!t.required)return r();le.required(t,n,i,s,o),n!==void 0&&le.type(t,n,i,s,o)}r(s)},PS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n)&&!t.required)return r();le.required(t,n,i,s,o),Qe(n)||le.type(t,n,i,s,o)}r(s)},RS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n)&&!t.required)return r();le.required(t,n,i,s,o),n!==void 0&&(le.type(t,n,i,s,o),le.range(t,n,i,s,o))}r(s)},MS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n)&&!t.required)return r();le.required(t,n,i,s,o),n!==void 0&&(le.type(t,n,i,s,o),le.range(t,n,i,s,o))}r(s)},TS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(n==null&&!t.required)return r();le.required(t,n,i,s,o,"array"),n!=null&&(le.type(t,n,i,s,o),le.range(t,n,i,s,o))}r(s)},AS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n)&&!t.required)return r();le.required(t,n,i,s,o),n!==void 0&&le.type(t,n,i,s,o)}r(s)},IS="enum",zS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n)&&!t.required)return r();le.required(t,n,i,s,o),n!==void 0&&le[IS](t,n,i,s,o)}r(s)},DS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n,"string")&&!t.required)return r();le.required(t,n,i,s,o),Qe(n,"string")||le.pattern(t,n,i,s,o)}r(s)},BS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n,"date")&&!t.required)return r();if(le.required(t,n,i,s,o),!Qe(n,"date")){var c;n instanceof Date?c=n:c=new Date(n),le.type(t,c,i,s,o),c&&le.range(t,c.getTime(),i,s,o)}}r(s)},VS=function(t,n,r,i,o){var s=[],l=Array.isArray(n)?"array":typeof n;le.required(t,n,i,s,o,l),r(s)},Lf=function(t,n,r,i,o){var s=t.type,l=[],c=t.required||!t.required&&i.hasOwnProperty(t.field);if(c){if(Qe(n,s)&&!t.required)return r();le.required(t,n,i,l,o,s),Qe(n,s)||le.type(t,n,i,l,o)}r(l)},WS=function(t,n,r,i,o){var s=[],l=t.required||!t.required&&i.hasOwnProperty(t.field);if(l){if(Qe(n)&&!t.required)return r();le.required(t,n,i,s,o)}r(s)},pa={string:_S,method:FS,number:OS,boolean:NS,regexp:PS,integer:RS,float:MS,array:TS,object:AS,enum:zS,pattern:DS,date:BS,url:Lf,hex:Lf,email:Lf,required:VS,any:WS};function b1(){return{default:"Validation error on field %s",required:"%s is required",enum:"%s must be one of %s",whitespace:"%s cannot be empty",date:{format:"%s date %s is invalid for format %s",parse:"%s date could not be parsed, %s is invalid ",invalid:"%s date %s is invalid"},types:{string:"%s is not a %s",method:"%s is not a %s (function)",array:"%s is not an %s",object:"%s is not an %s",number:"%s is not a %s",date:"%s is not a %s",boolean:"%s is not a %s",integer:"%s is not an %s",float:"%s is not a %s",regexp:"%s is not a valid %s",email:"%s is not a valid %s",url:"%s is not a valid %s",hex:"%s is not a valid %s"},string:{len:"%s must be exactly %s characters",min:"%s must be at least %s characters",max:"%s cannot be longer than %s characters",range:"%s must be between %s and %s characters"},number:{len:"%s must equal %s",min:"%s cannot be less than %s",max:"%s cannot be greater than %s",range:"%s must be between %s and %s"},array:{len:"%s must be exactly %s in length",min:"%s cannot be less than %s in length",max:"%s cannot be greater than %s in length",range:"%s must be between %s and %s in length"},pattern:{mismatch:"%s value %s does not match pattern %s"},clone:function(){var t=JSON.parse(JSON.stringify(this));return t.clone=this.clone,t}}}var C1=b1(),gl=function(){function e(n){this.rules=null,this._messages=C1,this.define(n)}var t=e.prototype;return t.define=function(r){var i=this;if(!r)throw new Error("Cannot configure a schema with no rules");if(typeof r!="object"||Array.isArray(r))throw new Error("Rules must be an object");this.rules={},Object.keys(r).forEach(function(o){var s=r[o];i.rules[o]=Array.isArray(s)?s:[s]})},t.messages=function(r){return r&&(this._messages=Sg(b1(),r)),this._messages},t.validate=function(r,i,o){var s=this;i===void 0&&(i={}),o===void 0&&(o=function(){});var l=r,c=i,u=o;if(typeof c=="function"&&(u=c,c={}),!this.rules||Object.keys(this.rules).length===0)return u&&u(null,l),Promise.resolve(l);function d(x){var C=[],m={};function v(b){if(Array.isArray(b)){var j;C=(j=C).concat.apply(j,b)}else C.push(b)}for(var h=0;h<x.length;h++)v(x[h]);C.length?(m=w1(C),u(C,m)):u(null,l)}if(c.messages){var p=this.messages();p===C1&&(p=b1()),Sg(p,c.messages),c.messages=p}else c.messages=this.messages();var g={},w=c.keys||Object.keys(this.rules);w.forEach(function(x){var C=s.rules[x],m=l[x];C.forEach(function(v){var h=v;typeof h.transform=="function"&&(l===r&&(l=gi({},l)),m=l[x]=h.transform(m)),typeof h=="function"?h={validator:h}:h=gi({},h),h.validator=s.getValidationMethod(h),h.validator&&(h.field=x,h.fullField=h.fullField||x,h.type=s.getType(h),g[x]=g[x]||[],g[x].push({rule:h,value:m,source:l,field:x}))})});var y={};return wS(g,c,function(x,C){var m=x.rule,v=(m.type==="object"||m.type==="array")&&(typeof m.fields=="object"||typeof m.defaultField=="object");v=v&&(m.required||!m.required&&x.value),m.field=x.field;function h(E,$){return gi({},$,{fullField:m.fullField+"."+E,fullFields:m.fullFields?[].concat(m.fullFields,[E]):[E]})}function b(E){E===void 0&&(E=[]);var $=Array.isArray(E)?E:[E];!c.suppressWarning&&$.length&&e.warning("async-validator:",$),$.length&&m.message!==void 0&&($=[].concat(m.message));var F=$.map(Eg(m,l));if(c.first&&F.length)return y[m.field]=1,C(F);if(!v)C(F);else{if(m.required&&!x.value)return m.message!==void 0?F=[].concat(m.message).map(Eg(m,l)):c.error&&(F=[c.error(m,Vt(c.messages.required,m.field))]),C(F);var M={};m.defaultField&&Object.keys(x.value).map(function(T){M[T]=m.defaultField}),M=gi({},M,x.rule.fields);var R={};Object.keys(M).forEach(function(T){var V=M[T],z=Array.isArray(V)?V:[V];R[T]=z.map(h.bind(null,T))});var D=new e(R);D.messages(c.messages),x.rule.options&&(x.rule.options.messages=c.messages,x.rule.options.error=c.error),D.validate(x.value,x.rule.options||c,function(T){var V=[];F&&F.length&&V.push.apply(V,F),T&&T.length&&V.push.apply(V,T),C(V.length?V:null)})}}var j;if(m.asyncValidator)j=m.asyncValidator(m,x.value,b,x.source,c);else if(m.validator){try{j=m.validator(m,x.value,b,x.source,c)}catch(E){console.error==null||console.error(E),c.suppressValidatorError||setTimeout(function(){throw E},0),b(E.message)}j===!0?b():j===!1?b(typeof m.message=="function"?m.message(m.fullField||m.field):m.message||(m.fullField||m.field)+" fails"):j instanceof Array?b(j):j instanceof Error&&b(j.message)}j&&j.then&&j.then(function(){return b()},function(E){return b(E)})},function(x){d(x)},l)},t.getType=function(r){if(r.type===void 0&&r.pattern instanceof RegExp&&(r.type="pattern"),typeof r.validator!="function"&&r.type&&!pa.hasOwnProperty(r.type))throw new Error(Vt("Unknown rule type %s",r.type));return r.type||"string"},t.getValidationMethod=function(r){if(typeof r.validator=="function")return r.validator;var i=Object.keys(r),o=i.indexOf("message");return o!==-1&&i.splice(o,1),i.length===1&&i[0]==="required"?pa.required:pa[this.getType(r)]||void 0},e}();gl.register=function(t,n){if(typeof n!="function")throw new Error("Cannot register a validator by type, validator is not a function");pa[t]=n};gl.warning=gS;gl.messages=C1;gl.validators=pa;var Mt="'${name}' is not a valid ${type}",nv={default:"Validation error on field '${name}'",required:"'${name}' is required",enum:"'${name}' must be one of [${enum}]",whitespace:"'${name}' cannot be empty",date:{format:"'${name}' is invalid for format date",parse:"'${name}' could not be parsed as date",invalid:"'${name}' is invalid date"},types:{string:Mt,method:Mt,array:Mt,object:Mt,number:Mt,date:Mt,boolean:Mt,integer:Mt,float:Mt,regexp:Mt,email:Mt,url:Mt,hex:Mt},string:{len:"'${name}' must be exactly ${len} characters",min:"'${name}' must be at least ${min} characters",max:"'${name}' cannot be longer than ${max} characters",range:"'${name}' must be between ${min} and ${max} characters"},number:{len:"'${name}' must equal ${len}",min:"'${name}' cannot be less than ${min}",max:"'${name}' cannot be greater than ${max}",range:"'${name}' must be between ${min} and ${max}"},array:{len:"'${name}' must be exactly ${len} in length",min:"'${name}' cannot be less than ${min} in length",max:"'${name}' cannot be greater than ${max} in length",range:"'${name}' must be between ${min} and ${max} in length"},pattern:{mismatch:"'${name}' does not match pattern ${pattern}"}},$g=gl;function US(e,t){return e.replace(/\$\{\w+\}/g,function(n){var r=n.slice(2,-1);return t[r]})}var _g="CODE_LOGIC_ERROR";function k1(e,t,n,r,i){return j1.apply(this,arguments)}function j1(){return j1=hl(_n().mark(function e(t,n,r,i,o){var s,l,c,u,d,p,g,w,y;return _n().wrap(function(C){for(;;)switch(C.prev=C.next){case 0:return s=pe({},r),delete s.ruleIndex,$g.warning=function(){},s.validator&&(l=s.validator,s.validator=function(){try{return l.apply(void 0,arguments)}catch(m){return console.error(m),Promise.reject(_g)}}),c=null,s&&s.type==="array"&&s.defaultField&&(c=s.defaultField,delete s.defaultField),u=new $g(U({},t,[s])),d=Qs(nv,i.validateMessages),u.messages(d),p=[],C.prev=10,C.next=13,Promise.resolve(u.validate(U({},t,n),pe({},i)));case 13:C.next=18;break;case 15:C.prev=15,C.t0=C.catch(10),C.t0.errors&&(p=C.t0.errors.map(function(m,v){var h=m.message,b=h===_g?d.default:h;return f.isValidElement(b)?f.cloneElement(b,{key:"error_".concat(v)}):b}));case 18:if(!(!p.length&&c)){C.next=23;break}return C.next=21,Promise.all(n.map(function(m,v){return k1("".concat(t,".").concat(v),m,c,i,o)}));case 21:return g=C.sent,C.abrupt("return",g.reduce(function(m,v){return[].concat(he(m),he(v))},[]));case 23:return w=pe(pe({},r),{},{name:t,enum:(r.enum||[]).join(", ")},o),y=p.map(function(m){return typeof m=="string"?US(m,w):m}),C.abrupt("return",y);case 26:case"end":return C.stop()}},e,null,[[10,15]])})),j1.apply(this,arguments)}function HS(e,t,n,r,i,o){var s=e.join("."),l=n.map(function(d,p){var g=d.validator,w=pe(pe({},d),{},{ruleIndex:p});return g&&(w.validator=function(y,x,C){var m=!1,v=function(){for(var j=arguments.length,E=new Array(j),$=0;$<j;$++)E[$]=arguments[$];Promise.resolve().then(function(){cn(!m,"Your validator function has already return a promise. `callback` will be ignored."),m||C.apply(void 0,E)})},h=g(y,x,v);m=h&&typeof h.then=="function"&&typeof h.catch=="function",cn(m,"`callback` is deprecated. Please return a promise instead."),m&&h.then(function(){C()}).catch(function(b){C(b||" ")})}),w}).sort(function(d,p){var g=d.warningOnly,w=d.ruleIndex,y=p.warningOnly,x=p.ruleIndex;return!!g==!!y?w-x:g?1:-1}),c;if(i===!0)c=new Promise(function(){var d=hl(_n().mark(function p(g,w){var y,x,C;return _n().wrap(function(v){for(;;)switch(v.prev=v.next){case 0:y=0;case 1:if(!(y<l.length)){v.next=12;break}return x=l[y],v.next=5,k1(s,t,x,r,o);case 5:if(C=v.sent,!C.length){v.next=9;break}return w([{errors:C,rule:x}]),v.abrupt("return");case 9:y+=1,v.next=1;break;case 12:g([]);case 13:case"end":return v.stop()}},p)}));return function(p,g){return d.apply(this,arguments)}}());else{var u=l.map(function(d){return k1(s,t,d,r,o).then(function(p){return{errors:p,rule:d}})});c=(i?ZS(u):qS(u)).then(function(d){return Promise.reject(d)})}return c.catch(function(d){return d}),c}function qS(e){return E1.apply(this,arguments)}function E1(){return E1=hl(_n().mark(function e(t){return _n().wrap(function(r){for(;;)switch(r.prev=r.next){case 0:return r.abrupt("return",Promise.all(t).then(function(i){var o,s=(o=[]).concat.apply(o,he(i));return s}));case 1:case"end":return r.stop()}},e)})),E1.apply(this,arguments)}function ZS(e){return S1.apply(this,arguments)}function S1(){return S1=hl(_n().mark(function e(t){var n;return _n().wrap(function(i){for(;;)switch(i.prev=i.next){case 0:return n=0,i.abrupt("return",new Promise(function(o){t.forEach(function(s){s.then(function(l){l.errors.length&&o([l]),n+=1,n===t.length&&o([])})})}));case 2:case"end":return i.stop()}},e)})),S1.apply(this,arguments)}function De(e){return v1(e)}function Fg(e,t){var n={};return t.forEach(function(r){var i=Bn(e,r);n=yn(n,r,i)}),n}function So(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return e&&e.some(function(r){return rv(t,r,n)})}function rv(e,t){var n=arguments.length>2&&arguments[2]!==void 0?arguments[2]:!1;return!e||!t||!n&&e.length!==t.length?!1:t.every(function(r,i){return e[i]===r})}function QS(e,t){if(e===t)return!0;if(!e&&t||e&&!t||!e||!t||et(e)!=="object"||et(t)!=="object")return!1;var n=Object.keys(e),r=Object.keys(t),i=new Set([].concat(n,r));return he(i).every(function(o){var s=e[o],l=t[o];return typeof s=="function"&&typeof l=="function"?!0:s===l})}function GS(e){var t=arguments.length<=1?void 0:arguments[1];return t&&t.target&&et(t.target)==="object"&&e in t.target?t.target[e]:t}function Og(e,t,n){var r=e.length;if(t<0||t>=r||n<0||n>=r)return e;var i=e[t],o=t-n;return o>0?[].concat(he(e.slice(0,n)),[i],he(e.slice(n,t)),he(e.slice(t+1,r))):o<0?[].concat(he(e.slice(0,t)),he(e.slice(t+1,n+1)),[i],he(e.slice(n+1,r))):e}var KS=["name"],Xt=[];function Ng(e,t,n,r,i,o){return typeof e=="function"?e(t,n,"source"in o?{source:o.source}:{}):r!==i}var jp=function(e){lS(n,e);var t=uS(n);function n(r){var i;if(pl(this,n),i=t.call(this,r),U(xe(i),"state",{resetCount:0}),U(xe(i),"cancelRegisterFunc",null),U(xe(i),"mounted",!1),U(xe(i),"touched",!1),U(xe(i),"dirty",!1),U(xe(i),"validatePromise",void 0),U(xe(i),"prevValidating",void 0),U(xe(i),"errors",Xt),U(xe(i),"warnings",Xt),U(xe(i),"cancelRegister",function(){var c=i.props,u=c.preserve,d=c.isListField,p=c.name;i.cancelRegisterFunc&&i.cancelRegisterFunc(d,u,De(p)),i.cancelRegisterFunc=null}),U(xe(i),"getNamePath",function(){var c=i.props,u=c.name,d=c.fieldContext,p=d.prefixName,g=p===void 0?[]:p;return u!==void 0?[].concat(he(g),he(u)):[]}),U(xe(i),"getRules",function(){var c=i.props,u=c.rules,d=u===void 0?[]:u,p=c.fieldContext;return d.map(function(g){return typeof g=="function"?g(p):g})}),U(xe(i),"refresh",function(){i.mounted&&i.setState(function(c){var u=c.resetCount;return{resetCount:u+1}})}),U(xe(i),"metaCache",null),U(xe(i),"triggerMetaEvent",function(c){var u=i.props.onMetaChange;if(u){var d=pe(pe({},i.getMeta()),{},{destroy:c});Cg(i.metaCache,d)||u(d),i.metaCache=d}else i.metaCache=null}),U(xe(i),"onStoreChange",function(c,u,d){var p=i.props,g=p.shouldUpdate,w=p.dependencies,y=w===void 0?[]:w,x=p.onReset,C=d.store,m=i.getNamePath(),v=i.getValue(c),h=i.getValue(C),b=u&&So(u,m);switch(d.type==="valueUpdate"&&d.source==="external"&&!Cg(v,h)&&(i.touched=!0,i.dirty=!0,i.validatePromise=null,i.errors=Xt,i.warnings=Xt,i.triggerMetaEvent()),d.type){case"reset":if(!u||b){i.touched=!1,i.dirty=!1,i.validatePromise=void 0,i.errors=Xt,i.warnings=Xt,i.triggerMetaEvent(),x==null||x(),i.refresh();return}break;case"remove":{if(g){i.reRender();return}break}case"setField":{var j=d.data;if(b){"touched"in j&&(i.touched=j.touched),"validating"in j&&!("originRCField"in j)&&(i.validatePromise=j.validating?Promise.resolve([]):null),"errors"in j&&(i.errors=j.errors||Xt),"warnings"in j&&(i.warnings=j.warnings||Xt),i.dirty=!0,i.triggerMetaEvent(),i.reRender();return}else if("value"in j&&So(u,m,!0)){i.reRender();return}if(g&&!m.length&&Ng(g,c,C,v,h,d)){i.reRender();return}break}case"dependenciesUpdate":{var E=y.map(De);if(E.some(function($){return So(d.relatedFields,$)})){i.reRender();return}break}default:if(b||(!y.length||m.length||g)&&Ng(g,c,C,v,h,d)){i.reRender();return}break}g===!0&&i.reRender()}),U(xe(i),"validateRules",function(c){var u=i.getNamePath(),d=i.getValue(),p=c||{},g=p.triggerName,w=p.validateOnly,y=w===void 0?!1:w,x=Promise.resolve().then(hl(_n().mark(function C(){var m,v,h,b,j,E,$;return _n().wrap(function(M){for(;;)switch(M.prev=M.next){case 0:if(i.mounted){M.next=2;break}return M.abrupt("return",[]);case 2:if(m=i.props,v=m.validateFirst,h=v===void 0?!1:v,b=m.messageVariables,j=m.validateDebounce,E=i.getRules(),g&&(E=E.filter(function(R){return R}).filter(function(R){var D=R.validateTrigger;if(!D)return!0;var T=v1(D);return T.includes(g)})),!(j&&g)){M.next=10;break}return M.next=8,new Promise(function(R){setTimeout(R,j)});case 8:if(i.validatePromise===x){M.next=10;break}return M.abrupt("return",[]);case 10:return $=HS(u,d,E,c,h,b),$.catch(function(R){return R}).then(function(){var R=arguments.length>0&&arguments[0]!==void 0?arguments[0]:Xt;if(i.validatePromise===x){var D;i.validatePromise=null;var T=[],V=[];(D=R.forEach)===null||D===void 0||D.call(R,function(z){var I=z.rule.warningOnly,P=z.errors,N=P===void 0?Xt:P;I?V.push.apply(V,he(N)):T.push.apply(T,he(N))}),i.errors=T,i.warnings=V,i.triggerMetaEvent(),i.reRender()}}),M.abrupt("return",$);case 13:case"end":return M.stop()}},C)})));return y||(i.validatePromise=x,i.dirty=!0,i.errors=Xt,i.warnings=Xt,i.triggerMetaEvent(),i.reRender()),x}),U(xe(i),"isFieldValidating",function(){return!!i.validatePromise}),U(xe(i),"isFieldTouched",function(){return i.touched}),U(xe(i),"isFieldDirty",function(){if(i.dirty||i.props.initialValue!==void 0)return!0;var c=i.props.fieldContext,u=c.getInternalHooks(mi),d=u.getInitialValue;return d(i.getNamePath())!==void 0}),U(xe(i),"getErrors",function(){return i.errors}),U(xe(i),"getWarnings",function(){return i.warnings}),U(xe(i),"isListField",function(){return i.props.isListField}),U(xe(i),"isList",function(){return i.props.isList}),U(xe(i),"isPreserve",function(){return i.props.preserve}),U(xe(i),"getMeta",function(){i.prevValidating=i.isFieldValidating();var c={touched:i.isFieldTouched(),validating:i.prevValidating,errors:i.errors,warnings:i.warnings,name:i.getNamePath(),validated:i.validatePromise===null};return c}),U(xe(i),"getOnlyChild",function(c){if(typeof c=="function"){var u=i.getMeta();return pe(pe({},i.getOnlyChild(c(i.getControlled(),u,i.props.fieldContext))),{},{isFunction:!0})}var d=g1(c);return d.length!==1||!f.isValidElement(d[0])?{child:d,isFunction:!1}:{child:d[0],isFunction:!1}}),U(xe(i),"getValue",function(c){var u=i.props.fieldContext.getFieldsValue,d=i.getNamePath();return Bn(c||u(!0),d)}),U(xe(i),"getControlled",function(){var c=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},u=i.props,d=u.name,p=u.trigger,g=u.validateTrigger,w=u.getValueFromEvent,y=u.normalize,x=u.valuePropName,C=u.getValueProps,m=u.fieldContext,v=g!==void 0?g:m.validateTrigger,h=i.getNamePath(),b=m.getInternalHooks,j=m.getFieldsValue,E=b(mi),$=E.dispatch,F=i.getValue(),M=C||function(z){return U({},x,z)},R=c[p],D=d!==void 0?M(F):{},T=pe(pe({},c),D);T[p]=function(){i.touched=!0,i.dirty=!0,i.triggerMetaEvent();for(var z,I=arguments.length,P=new Array(I),N=0;N<I;N++)P[N]=arguments[N];w?z=w.apply(void 0,P):z=GS.apply(void 0,[x].concat(P)),y&&(z=y(z,F,j(!0))),$({type:"updateValue",namePath:h,value:z}),R&&R.apply(void 0,P)};var V=v1(v||[]);return V.forEach(function(z){var I=T[z];T[z]=function(){I&&I.apply(void 0,arguments);var P=i.props.rules;P&&P.length&&$({type:"validateField",namePath:h,triggerName:z})}}),T}),r.fieldContext){var o=r.fieldContext.getInternalHooks,s=o(mi),l=s.initEntityValue;l(xe(i))}return i}return ml(n,[{key:"componentDidMount",value:function(){var i=this.props,o=i.shouldUpdate,s=i.fieldContext;if(this.mounted=!0,s){var l=s.getInternalHooks,c=l(mi),u=c.registerField;this.cancelRegisterFunc=u(this)}o===!0&&this.reRender()}},{key:"componentWillUnmount",value:function(){this.cancelRegister(),this.triggerMetaEvent(!0),this.mounted=!1}},{key:"reRender",value:function(){this.mounted&&this.forceUpdate()}},{key:"render",value:function(){var i=this.state.resetCount,o=this.props.children,s=this.getOnlyChild(o),l=s.child,c=s.isFunction,u;return c?u=l:f.isValidElement(l)?u=f.cloneElement(l,this.getControlled(l.props)):(cn(!l,"`children` of Field is not validate ReactElement."),u=l),f.createElement(f.Fragment,{key:i},u)}}]),n}(f.Component);U(jp,"contextType",Ni);U(jp,"defaultProps",{trigger:"onChange",valuePropName:"value"});function Ep(e){var t=e.name,n=kp(e,KS),r=f.useContext(Ni),i=f.useContext(_u),o=t!==void 0?De(t):void 0,s="keep";return n.isListField||(s="_".concat((o||[]).join("_"))),f.createElement(jp,Lu({key:s,name:o,isListField:!!i},n,{fieldContext:r}))}function iv(e){var t=e.name,n=e.initialValue,r=e.children,i=e.rules,o=e.validateTrigger,s=e.isListField,l=f.useContext(Ni),c=f.useContext(_u),u=f.useRef({keys:[],id:0}),d=u.current,p=f.useMemo(function(){var x=De(l.prefixName)||[];return[].concat(he(x),he(De(t)))},[l.prefixName,t]),g=f.useMemo(function(){return pe(pe({},l),{},{prefixName:p})},[l,p]),w=f.useMemo(function(){return{getKey:function(C){var m=p.length,v=C[m];return[d.keys[v],C.slice(m+1)]}}},[p]);if(typeof r!="function")return cn(!1,"Form.List only accepts function as children."),null;var y=function(C,m,v){var h=v.source;return h==="internal"?!1:C!==m};return f.createElement(_u.Provider,{value:w},f.createElement(Ni.Provider,{value:g},f.createElement(Ep,{name:[],shouldUpdate:y,rules:i,validateTrigger:o,initialValue:n,isList:!0,isListField:s??!!c},function(x,C){var m=x.value,v=m===void 0?[]:m,h=x.onChange,b=l.getFieldValue,j=function(){var M=b(p||[]);return M||[]},E={add:function(M,R){var D=j();R>=0&&R<=D.length?(d.keys=[].concat(he(d.keys.slice(0,R)),[d.id],he(d.keys.slice(R))),h([].concat(he(D.slice(0,R)),[M],he(D.slice(R))))):(d.keys=[].concat(he(d.keys),[d.id]),h([].concat(he(D),[M]))),d.id+=1},remove:function(M){var R=j(),D=new Set(Array.isArray(M)?M:[M]);D.size<=0||(d.keys=d.keys.filter(function(T,V){return!D.has(V)}),h(R.filter(function(T,V){return!D.has(V)})))},move:function(M,R){if(M!==R){var D=j();M<0||M>=D.length||R<0||R>=D.length||(d.keys=Og(d.keys,M,R),h(Og(D,M,R)))}}},$=v||[];return Array.isArray($)||($=[]),r($.map(function(F,M){var R=d.keys[M];return R===void 0&&(d.keys[M]=d.id,R=d.keys[M],d.id+=1),{name:M,key:R,isListField:!0}}),E,C)})))}function YS(e){var t=!1,n=e.length,r=[];return e.length?new Promise(function(i,o){e.forEach(function(s,l){s.catch(function(c){return t=!0,c}).then(function(c){n-=1,r[l]=c,!(n>0)&&(t&&o(r),i(r))})})}):Promise.resolve([])}var ov="__@field_split__";function $f(e){return e.map(function(t){return"".concat(et(t),":").concat(t)}).join(ov)}var qi=function(){function e(){pl(this,e),U(this,"kvs",new Map)}return ml(e,[{key:"set",value:function(n,r){this.kvs.set($f(n),r)}},{key:"get",value:function(n){return this.kvs.get($f(n))}},{key:"update",value:function(n,r){var i=this.get(n),o=r(i);o?this.set(n,o):this.delete(n)}},{key:"delete",value:function(n){this.kvs.delete($f(n))}},{key:"map",value:function(n){return he(this.kvs.entries()).map(function(r){var i=Qr(r,2),o=i[0],s=i[1],l=o.split(ov);return n({key:l.map(function(c){var u=c.match(/^([^:]*):(.*)$/),d=Qr(u,3),p=d[1],g=d[2];return p==="number"?Number(g):g}),value:s})})}},{key:"toJSON",value:function(){var n={};return this.map(function(r){var i=r.key,o=r.value;return n[i.join(".")]=o,null}),n}}]),e}(),XS=["name"],JS=ml(function e(t){var n=this;pl(this,e),U(this,"formHooked",!1),U(this,"forceRootUpdate",void 0),U(this,"subscribable",!0),U(this,"store",{}),U(this,"fieldEntities",[]),U(this,"initialValues",{}),U(this,"callbacks",{}),U(this,"validateMessages",null),U(this,"preserve",null),U(this,"lastValidatePromise",null),U(this,"getForm",function(){return{getFieldValue:n.getFieldValue,getFieldsValue:n.getFieldsValue,getFieldError:n.getFieldError,getFieldWarning:n.getFieldWarning,getFieldsError:n.getFieldsError,isFieldsTouched:n.isFieldsTouched,isFieldTouched:n.isFieldTouched,isFieldValidating:n.isFieldValidating,isFieldsValidating:n.isFieldsValidating,resetFields:n.resetFields,setFields:n.setFields,setFieldValue:n.setFieldValue,setFieldsValue:n.setFieldsValue,validateFields:n.validateFields,submit:n.submit,_init:!0,getInternalHooks:n.getInternalHooks}}),U(this,"getInternalHooks",function(r){return r===mi?(n.formHooked=!0,{dispatch:n.dispatch,initEntityValue:n.initEntityValue,registerField:n.registerField,useSubscribe:n.useSubscribe,setInitialValues:n.setInitialValues,destroyForm:n.destroyForm,setCallbacks:n.setCallbacks,setValidateMessages:n.setValidateMessages,getFields:n.getFields,setPreserve:n.setPreserve,getInitialValue:n.getInitialValue,registerWatch:n.registerWatch}):(cn(!1,"`getInternalHooks` is internal usage. Should not call directly."),null)}),U(this,"useSubscribe",function(r){n.subscribable=r}),U(this,"prevWithoutPreserves",null),U(this,"setInitialValues",function(r,i){if(n.initialValues=r||{},i){var o,s=Qs(r,n.store);(o=n.prevWithoutPreserves)===null||o===void 0||o.map(function(l){var c=l.key;s=yn(s,c,Bn(r,c))}),n.prevWithoutPreserves=null,n.updateStore(s)}}),U(this,"destroyForm",function(){var r=new qi;n.getFieldEntities(!0).forEach(function(i){n.isMergedPreserve(i.isPreserve())||r.set(i.getNamePath(),!0)}),n.prevWithoutPreserves=r}),U(this,"getInitialValue",function(r){var i=Bn(n.initialValues,r);return r.length?Qs(i):i}),U(this,"setCallbacks",function(r){n.callbacks=r}),U(this,"setValidateMessages",function(r){n.validateMessages=r}),U(this,"setPreserve",function(r){n.preserve=r}),U(this,"watchList",[]),U(this,"registerWatch",function(r){return n.watchList.push(r),function(){n.watchList=n.watchList.filter(function(i){return i!==r})}}),U(this,"notifyWatch",function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:[];if(n.watchList.length){var i=n.getFieldsValue(),o=n.getFieldsValue(!0);n.watchList.forEach(function(s){s(i,o,r)})}}),U(this,"timeoutId",null),U(this,"warningUnhooked",function(){}),U(this,"updateStore",function(r){n.store=r}),U(this,"getFieldEntities",function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1;return r?n.fieldEntities.filter(function(i){return i.getNamePath().length}):n.fieldEntities}),U(this,"getFieldsMap",function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!1,i=new qi;return n.getFieldEntities(r).forEach(function(o){var s=o.getNamePath();i.set(s,o)}),i}),U(this,"getFieldEntitiesForNamePathList",function(r){if(!r)return n.getFieldEntities(!0);var i=n.getFieldsMap(!0);return r.map(function(o){var s=De(o);return i.get(s)||{INVALIDATE_NAME_PATH:De(o)}})}),U(this,"getFieldsValue",function(r,i){n.warningUnhooked();var o,s,l;if(r===!0||Array.isArray(r)?(o=r,s=i):r&&et(r)==="object"&&(l=r.strict,s=r.filter),o===!0&&!s)return n.store;var c=n.getFieldEntitiesForNamePathList(Array.isArray(o)?o:null),u=[];return c.forEach(function(d){var p,g,w="INVALIDATE_NAME_PATH"in d?d.INVALIDATE_NAME_PATH:d.getNamePath();if(l){var y,x;if((y=(x=d).isList)!==null&&y!==void 0&&y.call(x))return}else if(!o&&(p=(g=d).isListField)!==null&&p!==void 0&&p.call(g))return;if(!s)u.push(w);else{var C="getMeta"in d?d.getMeta():null;s(C)&&u.push(w)}}),Fg(n.store,u.map(De))}),U(this,"getFieldValue",function(r){n.warningUnhooked();var i=De(r);return Bn(n.store,i)}),U(this,"getFieldsError",function(r){n.warningUnhooked();var i=n.getFieldEntitiesForNamePathList(r);return i.map(function(o,s){return o&&!("INVALIDATE_NAME_PATH"in o)?{name:o.getNamePath(),errors:o.getErrors(),warnings:o.getWarnings()}:{name:De(r[s]),errors:[],warnings:[]}})}),U(this,"getFieldError",function(r){n.warningUnhooked();var i=De(r),o=n.getFieldsError([i])[0];return o.errors}),U(this,"getFieldWarning",function(r){n.warningUnhooked();var i=De(r),o=n.getFieldsError([i])[0];return o.warnings}),U(this,"isFieldsTouched",function(){n.warningUnhooked();for(var r=arguments.length,i=new Array(r),o=0;o<r;o++)i[o]=arguments[o];var s=i[0],l=i[1],c,u=!1;i.length===0?c=null:i.length===1?Array.isArray(s)?(c=s.map(De),u=!1):(c=null,u=s):(c=s.map(De),u=l);var d=n.getFieldEntities(!0),p=function(C){return C.isFieldTouched()};if(!c)return u?d.every(function(x){return p(x)||x.isList()}):d.some(p);var g=new qi;c.forEach(function(x){g.set(x,[])}),d.forEach(function(x){var C=x.getNamePath();c.forEach(function(m){m.every(function(v,h){return C[h]===v})&&g.update(m,function(v){return[].concat(he(v),[x])})})});var w=function(C){return C.some(p)},y=g.map(function(x){var C=x.value;return C});return u?y.every(w):y.some(w)}),U(this,"isFieldTouched",function(r){return n.warningUnhooked(),n.isFieldsTouched([r])}),U(this,"isFieldsValidating",function(r){n.warningUnhooked();var i=n.getFieldEntities();if(!r)return i.some(function(s){return s.isFieldValidating()});var o=r.map(De);return i.some(function(s){var l=s.getNamePath();return So(o,l)&&s.isFieldValidating()})}),U(this,"isFieldValidating",function(r){return n.warningUnhooked(),n.isFieldsValidating([r])}),U(this,"resetWithFieldInitialValue",function(){var r=arguments.length>0&&arguments[0]!==void 0?arguments[0]:{},i=new qi,o=n.getFieldEntities(!0);o.forEach(function(c){var u=c.props.initialValue,d=c.getNamePath();if(u!==void 0){var p=i.get(d)||new Set;p.add({entity:c,value:u}),i.set(d,p)}});var s=function(u){u.forEach(function(d){var p=d.props.initialValue;if(p!==void 0){var g=d.getNamePath(),w=n.getInitialValue(g);if(w!==void 0)cn(!1,"Form already set 'initialValues' with path '".concat(g.join("."),"'. Field can not overwrite it."));else{var y=i.get(g);if(y&&y.size>1)cn(!1,"Multiple Field with path '".concat(g.join("."),"' set 'initialValue'. Can not decide which one to pick."));else if(y){var x=n.getFieldValue(g),C=d.isListField();!C&&(!r.skipExist||x===void 0)&&n.updateStore(yn(n.store,g,he(y)[0].value))}}}})},l;r.entities?l=r.entities:r.namePathList?(l=[],r.namePathList.forEach(function(c){var u=i.get(c);if(u){var d;(d=l).push.apply(d,he(he(u).map(function(p){return p.entity})))}})):l=o,s(l)}),U(this,"resetFields",function(r){n.warningUnhooked();var i=n.store;if(!r){n.updateStore(Qs(n.initialValues)),n.resetWithFieldInitialValue(),n.notifyObservers(i,null,{type:"reset"}),n.notifyWatch();return}var o=r.map(De);o.forEach(function(s){var l=n.getInitialValue(s);n.updateStore(yn(n.store,s,l))}),n.resetWithFieldInitialValue({namePathList:o}),n.notifyObservers(i,o,{type:"reset"}),n.notifyWatch(o)}),U(this,"setFields",function(r){n.warningUnhooked();var i=n.store,o=[];r.forEach(function(s){var l=s.name,c=kp(s,XS),u=De(l);o.push(u),"value"in c&&n.updateStore(yn(n.store,u,c.value)),n.notifyObservers(i,[u],{type:"setField",data:s})}),n.notifyWatch(o)}),U(this,"getFields",function(){var r=n.getFieldEntities(!0),i=r.map(function(o){var s=o.getNamePath(),l=o.getMeta(),c=pe(pe({},l),{},{name:s,value:n.getFieldValue(s)});return Object.defineProperty(c,"originRCField",{value:!0}),c});return i}),U(this,"initEntityValue",function(r){var i=r.props.initialValue;if(i!==void 0){var o=r.getNamePath(),s=Bn(n.store,o);s===void 0&&n.updateStore(yn(n.store,o,i))}}),U(this,"isMergedPreserve",function(r){var i=r!==void 0?r:n.preserve;return i??!0}),U(this,"registerField",function(r){n.fieldEntities.push(r);var i=r.getNamePath();if(n.notifyWatch([i]),r.props.initialValue!==void 0){var o=n.store;n.resetWithFieldInitialValue({entities:[r],skipExist:!0}),n.notifyObservers(o,[r.getNamePath()],{type:"valueUpdate",source:"internal"})}return function(s,l){var c=arguments.length>2&&arguments[2]!==void 0?arguments[2]:[];if(n.fieldEntities=n.fieldEntities.filter(function(p){return p!==r}),!n.isMergedPreserve(l)&&(!s||c.length>1)){var u=s?void 0:n.getInitialValue(i);if(i.length&&n.getFieldValue(i)!==u&&n.fieldEntities.every(function(p){return!rv(p.getNamePath(),i)})){var d=n.store;n.updateStore(yn(d,i,u,!0)),n.notifyObservers(d,[i],{type:"remove"}),n.triggerDependenciesUpdate(d,i)}}n.notifyWatch([i])}}),U(this,"dispatch",function(r){switch(r.type){case"updateValue":{var i=r.namePath,o=r.value;n.updateValue(i,o);break}case"validateField":{var s=r.namePath,l=r.triggerName;n.validateFields([s],{triggerName:l});break}}}),U(this,"notifyObservers",function(r,i,o){if(n.subscribable){var s=pe(pe({},o),{},{store:n.getFieldsValue(!0)});n.getFieldEntities().forEach(function(l){var c=l.onStoreChange;c(r,i,s)})}else n.forceRootUpdate()}),U(this,"triggerDependenciesUpdate",function(r,i){var o=n.getDependencyChildrenFields(i);return o.length&&n.validateFields(o),n.notifyObservers(r,o,{type:"dependenciesUpdate",relatedFields:[i].concat(he(o))}),o}),U(this,"updateValue",function(r,i){var o=De(r),s=n.store;n.updateStore(yn(n.store,o,i)),n.notifyObservers(s,[o],{type:"valueUpdate",source:"internal"}),n.notifyWatch([o]);var l=n.triggerDependenciesUpdate(s,o),c=n.callbacks.onValuesChange;if(c){var u=Fg(n.store,[o]);c(u,n.getFieldsValue())}n.triggerOnFieldsChange([o].concat(he(l)))}),U(this,"setFieldsValue",function(r){n.warningUnhooked();var i=n.store;if(r){var o=Qs(n.store,r);n.updateStore(o)}n.notifyObservers(i,null,{type:"valueUpdate",source:"external"}),n.notifyWatch()}),U(this,"setFieldValue",function(r,i){n.setFields([{name:r,value:i}])}),U(this,"getDependencyChildrenFields",function(r){var i=new Set,o=[],s=new qi;n.getFieldEntities().forEach(function(c){var u=c.props.dependencies;(u||[]).forEach(function(d){var p=De(d);s.update(p,function(){var g=arguments.length>0&&arguments[0]!==void 0?arguments[0]:new Set;return g.add(c),g})})});var l=function c(u){var d=s.get(u)||new Set;d.forEach(function(p){if(!i.has(p)){i.add(p);var g=p.getNamePath();p.isFieldDirty()&&g.length&&(o.push(g),c(g))}})};return l(r),o}),U(this,"triggerOnFieldsChange",function(r,i){var o=n.callbacks.onFieldsChange;if(o){var s=n.getFields();if(i){var l=new qi;i.forEach(function(u){var d=u.name,p=u.errors;l.set(d,p)}),s.forEach(function(u){u.errors=l.get(u.name)||u.errors})}var c=s.filter(function(u){var d=u.name;return So(r,d)});c.length&&o(c,s)}}),U(this,"validateFields",function(r,i){n.warningUnhooked();var o,s;Array.isArray(r)||typeof r=="string"||typeof i=="string"?(o=r,s=i):s=r;var l=!!o,c=l?o.map(De):[],u=[],d=String(Date.now()),p=new Set,g=s||{},w=g.recursive,y=g.dirty;n.getFieldEntities(!0).forEach(function(v){if(l||c.push(v.getNamePath()),!(!v.props.rules||!v.props.rules.length)&&!(y&&!v.isFieldDirty())){var h=v.getNamePath();if(p.add(h.join(d)),!l||So(c,h,w)){var b=v.validateRules(pe({validateMessages:pe(pe({},nv),n.validateMessages)},s));u.push(b.then(function(){return{name:h,errors:[],warnings:[]}}).catch(function(j){var E,$=[],F=[];return(E=j.forEach)===null||E===void 0||E.call(j,function(M){var R=M.rule.warningOnly,D=M.errors;R?F.push.apply(F,he(D)):$.push.apply($,he(D))}),$.length?Promise.reject({name:h,errors:$,warnings:F}):{name:h,errors:$,warnings:F}}))}}});var x=YS(u);n.lastValidatePromise=x,x.catch(function(v){return v}).then(function(v){var h=v.map(function(b){var j=b.name;return j});n.notifyObservers(n.store,h,{type:"validateFinish"}),n.triggerOnFieldsChange(h,v)});var C=x.then(function(){return n.lastValidatePromise===x?Promise.resolve(n.getFieldsValue(c)):Promise.reject([])}).catch(function(v){var h=v.filter(function(b){return b&&b.errors.length});return Promise.reject({values:n.getFieldsValue(c),errorFields:h,outOfDate:n.lastValidatePromise!==x})});C.catch(function(v){return v});var m=c.filter(function(v){return p.has(v.join(d))});return n.triggerOnFieldsChange(m),C}),U(this,"submit",function(){n.warningUnhooked(),n.validateFields().then(function(r){var i=n.callbacks.onFinish;if(i)try{i(r)}catch(o){console.error(o)}}).catch(function(r){var i=n.callbacks.onFinishFailed;i&&i(r)})}),this.forceRootUpdate=t});function Sp(e){var t=f.useRef(),n=f.useState({}),r=Qr(n,2),i=r[1];if(!t.current)if(e)t.current=e;else{var o=function(){i({})},s=new JS(o);t.current=s.getForm()}return[t.current]}var L1=f.createContext({triggerFormChange:function(){},triggerFormFinish:function(){},registerForm:function(){},unregisterForm:function(){}}),eL=function(t){var n=t.validateMessages,r=t.onFormChange,i=t.onFormFinish,o=t.children,s=f.useContext(L1),l=f.useRef({});return f.createElement(L1.Provider,{value:pe(pe({},s),{},{validateMessages:pe(pe({},s.validateMessages),n),triggerFormChange:function(u,d){r&&r(u,{changedFields:d,forms:l.current}),s.triggerFormChange(u,d)},triggerFormFinish:function(u,d){i&&i(u,{values:d,forms:l.current}),s.triggerFormFinish(u,d)},registerForm:function(u,d){u&&(l.current=pe(pe({},l.current),{},U({},u,d))),s.registerForm(u,d)},unregisterForm:function(u){var d=pe({},l.current);delete d[u],l.current=d,s.unregisterForm(u)}})},o)},tL=["name","initialValues","fields","form","preserve","children","component","validateMessages","validateTrigger","onValuesChange","onFieldsChange","onFinish","onFinishFailed"],nL=function(t,n){var r=t.name,i=t.initialValues,o=t.fields,s=t.form,l=t.preserve,c=t.children,u=t.component,d=u===void 0?"form":u,p=t.validateMessages,g=t.validateTrigger,w=g===void 0?"onChange":g,y=t.onValuesChange,x=t.onFieldsChange,C=t.onFinish,m=t.onFinishFailed,v=kp(t,tL),h=f.useContext(L1),b=Sp(s),j=Qr(b,1),E=j[0],$=E.getInternalHooks(mi),F=$.useSubscribe,M=$.setInitialValues,R=$.setCallbacks,D=$.setValidateMessages,T=$.setPreserve,V=$.destroyForm;f.useImperativeHandle(n,function(){return E}),f.useEffect(function(){return h.registerForm(r,E),function(){h.unregisterForm(r)}},[h,E,r]),D(pe(pe({},h.validateMessages),p)),R({onValuesChange:y,onFieldsChange:function(B){if(h.triggerFormChange(r,B),x){for(var G=arguments.length,H=new Array(G>1?G-1:0),W=1;W<G;W++)H[W-1]=arguments[W];x.apply(void 0,[B].concat(H))}},onFinish:function(B){h.triggerFormFinish(r,B),C&&C(B)},onFinishFailed:m}),T(l);var z=f.useRef(null);M(i,!z.current),z.current||(z.current=!0),f.useEffect(function(){return V},[]);var I,P=typeof c=="function";if(P){var N=E.getFieldsValue(!0);I=c(N,E)}else I=c;F(!P);var S=f.useRef();f.useEffect(function(){QS(S.current||[],o||[])||E.setFields(o||[]),S.current=o},[o,E]);var _=f.useMemo(function(){return pe(pe({},E),{},{validateTrigger:w})},[E,w]),O=f.createElement(_u.Provider,{value:null},f.createElement(Ni.Provider,{value:_},I));return d===!1?O:f.createElement(d,Lu({},v,{onSubmit:function(B){B.preventDefault(),B.stopPropagation(),E.submit()},onReset:function(B){var G;B.preventDefault(),E.resetFields(),(G=v.onReset)===null||G===void 0||G.call(v,B)}}),O)};function Pg(e){try{return JSON.stringify(e)}catch{return Math.random()}}function Lp(){for(var e=arguments.length,t=new Array(e),n=0;n<e;n++)t[n]=arguments[n];var r=t[0],i=t[1],o=i===void 0?{}:i,s=dS(o)?{form:o}:o,l=s.form,c=f.useState(),u=Qr(c,2),d=u[0],p=u[1],g=f.useMemo(function(){return Pg(d)},[d]),w=f.useRef(g);w.current=g;var y=f.useContext(Ni),x=l||y,C=x&&x._init,m=De(r),v=f.useRef(m);return v.current=m,f.useEffect(function(){if(C){var h=x.getFieldsValue,b=x.getInternalHooks,j=b(mi),E=j.registerWatch,$=function(D,T){var V=s.preserve?T:D;return typeof r=="function"?r(V):Bn(V,v.current)},F=E(function(R,D){var T=$(R,D),V=Pg(T);w.current!==V&&(w.current=V,p(T))}),M=$(h(),h(!0));return d!==M&&p(M),F}},[C]),d}var rL=f.forwardRef(nL),is=rL;is.FormProvider=eL;is.Field=Ep;is.List=iv;is.useForm=Sp;is.useWatch=Lp;const sv={name:void 0,hasFeedback:!0,layout:"vertical",requiredMarkStyle:"asterisk",disabled:!1},$p=k.createContext(sv),Rg=k.createContext(null),av=()=>null;var iL=function(t){return oL(t)&&!sL(t)};function oL(e){return!!e&&typeof e=="object"}function sL(e){var t=Object.prototype.toString.call(e);return t==="[object RegExp]"||t==="[object Date]"||cL(e)}var aL=typeof Symbol=="function"&&Symbol.for,lL=aL?Symbol.for("react.element"):60103;function cL(e){return e.$$typeof===lL}function uL(e){return Array.isArray(e)?[]:{}}function Ka(e,t){return t.clone!==!1&&t.isMergeableObject(e)?Bo(uL(e),e,t):e}function dL(e,t,n){return e.concat(t).map(function(r){return Ka(r,n)})}function fL(e,t){if(!t.customMerge)return Bo;var n=t.customMerge(e);return typeof n=="function"?n:Bo}function hL(e){return Object.getOwnPropertySymbols?Object.getOwnPropertySymbols(e).filter(function(t){return Object.propertyIsEnumerable.call(e,t)}):[]}function Mg(e){return Object.keys(e).concat(hL(e))}function lv(e,t){try{return t in e}catch{return!1}}function pL(e,t){return lv(e,t)&&!(Object.hasOwnProperty.call(e,t)&&Object.propertyIsEnumerable.call(e,t))}function mL(e,t,n){var r={};return n.isMergeableObject(e)&&Mg(e).forEach(function(i){r[i]=Ka(e[i],n)}),Mg(t).forEach(function(i){pL(e,i)||(lv(e,i)&&n.isMergeableObject(t[i])?r[i]=fL(i,n)(e[i],t[i],n):r[i]=Ka(t[i],n))}),r}function Bo(e,t,n){n=n||{},n.arrayMerge=n.arrayMerge||dL,n.isMergeableObject=n.isMergeableObject||iL,n.cloneUnlessOtherwiseSpecified=Ka;var r=Array.isArray(t),i=Array.isArray(e),o=r===i;return o?r?n.arrayMerge(e,t,n):mL(e,t,n):Ka(t,n)}Bo.all=function(t,n){if(!Array.isArray(t))throw new Error("first argument should be an array");return t.reduce(function(r,i){return Bo(r,i,n)},{})};var gL=Bo,vL=gL;const xL=hr(vL),cv=e=>k.createElement(iv,{name:e.name,initialValue:e.initialValue},(t,n)=>{const r=t.map(o=>({index:o.name,key:o.key})),i=e.children(r,n).map((o,s)=>{var l;return k.createElement(ce,{key:r[s].key,mode:"card",header:(l=e.renderHeader)===null||l===void 0?void 0:l.call(e,r[s],n)},o)});return e.renderAdd&&i.push(k.createElement(ce,{key:"add",mode:"card"},k.createElement(ce.Item,{className:"adm-form-list-operation",onClick:()=>{e.onAdd?e.onAdd(n):n.add()},arrow:!1},e.renderAdd()))),k.createElement(k.Fragment,null,i)}),Tg="adm-form",yL=sv,wL=f.forwardRef((e,t)=>{const n=oe(yL,e),{className:r,style:i,hasFeedback:o,children:s,layout:l,footer:c,mode:u,disabled:d,requiredMarkStyle:p}=n,g=rd(n,["className","style","hasFeedback","children","layout","footer","mode","disabled","requiredMarkStyle"]),{locale:w}=xt(),y=f.useMemo(()=>xL(w.Form.defaultValidateMessages,g.validateMessages||{}),[w.Form.defaultValidateMessages,g.validateMessages]),x=[];let C=null,m=[],v=0;function h(){m.length!==0&&(v+=1,x.push(k.createElement(ce,{header:C,key:v,mode:u},m)),m=[])}return xp(n.children,b=>{if(k.isValidElement(b)){if(b.type===av){h(),C=b.props.children;return}if(b.type===cv){h(),x.push(b);return}}m.push(b)}),h(),k.createElement(is,Object.assign({className:X(Tg,r),style:i,ref:t},g,{validateMessages:y}),k.createElement($p.Provider,{value:{name:g.name,hasFeedback:o,layout:l,requiredMarkStyle:p,disabled:d}},x),c&&k.createElement("div",{className:`${Tg}-footer`},c))});var Ya={},uv={exports:{}},dv={exports:{}};(function(e){function t(n){"@babel/helpers - typeof";return e.exports=t=typeof Symbol=="function"&&typeof Symbol.iterator=="symbol"?function(r){return typeof r}:function(r){return r&&typeof Symbol=="function"&&r.constructor===Symbol&&r!==Symbol.prototype?"symbol":typeof r},e.exports.__esModule=!0,e.exports.default=e.exports,t(n)}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(dv);var bL=dv.exports;(function(e){var t=bL.default;function n(i){if(typeof WeakMap!="function")return null;var o=new WeakMap,s=new WeakMap;return(n=function(c){return c?s:o})(i)}function r(i,o){if(!o&&i&&i.__esModule)return i;if(i===null||t(i)!="object"&&typeof i!="function")return{default:i};var s=n(o);if(s&&s.has(i))return s.get(i);var l={__proto__:null},c=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var u in i)if(u!=="default"&&{}.hasOwnProperty.call(i,u)){var d=c?Object.getOwnPropertyDescriptor(i,u):null;d&&(d.get||d.set)?Object.defineProperty(l,u,d):l[u]=i[u]}return l.default=i,s&&s.set(i,l),l}e.exports=r,e.exports.__esModule=!0,e.exports.default=e.exports})(uv);var CL=uv.exports,fv={exports:{}};(function(e){function t(n){return n&&n.__esModule?n:{default:n}}e.exports=t,e.exports.__esModule=!0,e.exports.default=e.exports})(fv);var kL=fv.exports,pn={};Object.defineProperty(pn,"__esModule",{value:!0});pn.call=_p;pn.default=void 0;pn.note=pv;pn.noteOnce=gv;pn.preMessage=void 0;pn.resetWarned=mv;pn.warning=hv;pn.warningOnce=vl;var $1={},jL=pn.preMessage=function(t){};function hv(e,t){}function pv(e,t){}function mv(){$1={}}function _p(e,t,n){!t&&!$1[n]&&(e(!1,n),$1[n]=!0)}function vl(e,t){_p(hv,e,t)}function gv(e,t){_p(pv,e,t)}vl.preMessage=jL;vl.resetWarned=mv;vl.noteOnce=gv;pn.default=vl;var EL=CL.default,SL=kL.default;Object.defineProperty(Ya,"__esModule",{value:!0});var vv=Ya.default=Ya.HOOK_MARK=void 0,LL=SL(pn),$L=EL(f);Ya.HOOK_MARK="RC_FORM_INTERNAL_HOOKS";var je=function(){(0,LL.default)(!1,"Can not find FormContext. Please make sure you wrap Field under Form.")},_L=$L.createContext({getFieldValue:je,getFieldsValue:je,getFieldError:je,getFieldWarning:je,getFieldsError:je,isFieldsTouched:je,isFieldTouched:je,isFieldValidating:je,isFieldsValidating:je,resetFields:je,setFields:je,setFieldValue:je,setFieldsValue:je,validateFields:je,submit:je,getInternalHooks:function(){return je(),{dispatch:je,initEntityValue:je,registerField:je,useSubscribe:je,setInitialValues:je,destroyForm:je,setCallbacks:je,registerWatch:je,getFields:je,setValidateMessages:je,setPreserve:je,getInitialValue:je}}});vv=Ya.default=_L;function FL(...e){let t;for(t=0;t<e.length&&e[t]===void 0;t++);return e[t]}const OL=["top","right","bottom","left"],Vo=Math.min,bi=Math.max,Fu=Math.round,Bl=Math.floor,Hn=e=>({x:e,y:e}),NL={left:"right",right:"left",bottom:"top",top:"bottom"},PL={start:"end",end:"start"};function _1(e,t,n){return bi(e,Vo(t,n))}function Gr(e,t){return typeof e=="function"?e(t):e}function Kr(e){return e.split("-")[0]}function xl(e){return e.split("-")[1]}function Fp(e){return e==="x"?"y":"x"}function Op(e){return e==="y"?"height":"width"}function Pi(e){return["top","bottom"].includes(Kr(e))?"y":"x"}function Np(e){return Fp(Pi(e))}function RL(e,t,n){n===void 0&&(n=!1);const r=xl(e),i=Np(e),o=Op(i);let s=i==="x"?r===(n?"end":"start")?"right":"left":r==="start"?"bottom":"top";return t.reference[o]>t.floating[o]&&(s=Ou(s)),[s,Ou(s)]}function ML(e){const t=Ou(e);return[F1(e),t,F1(t)]}function F1(e){return e.replace(/start|end/g,t=>PL[t])}function TL(e,t,n){const r=["left","right"],i=["right","left"],o=["top","bottom"],s=["bottom","top"];switch(e){case"top":case"bottom":return n?t?i:r:t?r:i;case"left":case"right":return t?o:s;default:return[]}}function AL(e,t,n,r){const i=xl(e);let o=TL(Kr(e),n==="start",r);return i&&(o=o.map(s=>s+"-"+i),t&&(o=o.concat(o.map(F1)))),o}function Ou(e){return e.replace(/left|right|bottom|top/g,t=>NL[t])}function IL(e){return{top:0,right:0,bottom:0,left:0,...e}}function xv(e){return typeof e!="number"?IL(e):{top:e,right:e,bottom:e,left:e}}function Nu(e){const{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function Ag(e,t,n){let{reference:r,floating:i}=e;const o=Pi(t),s=Np(t),l=Op(s),c=Kr(t),u=o==="y",d=r.x+r.width/2-i.width/2,p=r.y+r.height/2-i.height/2,g=r[l]/2-i[l]/2;let w;switch(c){case"top":w={x:d,y:r.y-i.height};break;case"bottom":w={x:d,y:r.y+r.height};break;case"right":w={x:r.x+r.width,y:p};break;case"left":w={x:r.x-i.width,y:p};break;default:w={x:r.x,y:r.y}}switch(xl(t)){case"start":w[s]-=g*(n&&u?-1:1);break;case"end":w[s]+=g*(n&&u?-1:1);break}return w}const zL=async(e,t,n)=>{const{placement:r="bottom",strategy:i="absolute",middleware:o=[],platform:s}=n,l=o.filter(Boolean),c=await(s.isRTL==null?void 0:s.isRTL(t));let u=await s.getElementRects({reference:e,floating:t,strategy:i}),{x:d,y:p}=Ag(u,r,c),g=r,w={},y=0;for(let x=0;x<l.length;x++){const{name:C,fn:m}=l[x],{x:v,y:h,data:b,reset:j}=await m({x:d,y:p,initialPlacement:r,placement:g,strategy:i,middlewareData:w,rects:u,platform:s,elements:{reference:e,floating:t}});d=v??d,p=h??p,w={...w,[C]:{...w[C],...b}},j&&y<=50&&(y++,typeof j=="object"&&(j.placement&&(g=j.placement),j.rects&&(u=j.rects===!0?await s.getElementRects({reference:e,floating:t,strategy:i}):j.rects),{x:d,y:p}=Ag(u,g,c)),x=-1)}return{x:d,y:p,placement:g,strategy:i,middlewareData:w}};async function Pu(e,t){var n;t===void 0&&(t={});const{x:r,y:i,platform:o,rects:s,elements:l,strategy:c}=e,{boundary:u="clippingAncestors",rootBoundary:d="viewport",elementContext:p="floating",altBoundary:g=!1,padding:w=0}=Gr(t,e),y=xv(w),C=l[g?p==="floating"?"reference":"floating":p],m=Nu(await o.getClippingRect({element:(n=await(o.isElement==null?void 0:o.isElement(C)))==null||n?C:C.contextElement||await(o.getDocumentElement==null?void 0:o.getDocumentElement(l.floating)),boundary:u,rootBoundary:d,strategy:c})),v=p==="floating"?{x:r,y:i,width:s.floating.width,height:s.floating.height}:s.reference,h=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l.floating)),b=await(o.isElement==null?void 0:o.isElement(h))?await(o.getScale==null?void 0:o.getScale(h))||{x:1,y:1}:{x:1,y:1},j=Nu(o.convertOffsetParentRelativeRectToViewportRelativeRect?await o.convertOffsetParentRelativeRectToViewportRelativeRect({elements:l,rect:v,offsetParent:h,strategy:c}):v);return{top:(m.top-j.top+y.top)/b.y,bottom:(j.bottom-m.bottom+y.bottom)/b.y,left:(m.left-j.left+y.left)/b.x,right:(j.right-m.right+y.right)/b.x}}const DL=e=>({name:"arrow",options:e,async fn(t){const{x:n,y:r,placement:i,rects:o,platform:s,elements:l,middlewareData:c}=t,{element:u,padding:d=0}=Gr(e,t)||{};if(u==null)return{};const p=xv(d),g={x:n,y:r},w=Np(i),y=Op(w),x=await s.getDimensions(u),C=w==="y",m=C?"top":"left",v=C?"bottom":"right",h=C?"clientHeight":"clientWidth",b=o.reference[y]+o.reference[w]-g[w]-o.floating[y],j=g[w]-o.reference[w],E=await(s.getOffsetParent==null?void 0:s.getOffsetParent(u));let $=E?E[h]:0;(!$||!await(s.isElement==null?void 0:s.isElement(E)))&&($=l.floating[h]||o.floating[y]);const F=b/2-j/2,M=$/2-x[y]/2-1,R=Vo(p[m],M),D=Vo(p[v],M),T=R,V=$-x[y]-D,z=$/2-x[y]/2+F,I=_1(T,z,V),P=!c.arrow&&xl(i)!=null&&z!==I&&o.reference[y]/2-(z<T?R:D)-x[y]/2<0,N=P?z<T?z-T:z-V:0;return{[w]:g[w]+N,data:{[w]:I,centerOffset:z-I-N,...P&&{alignmentOffset:N}},reset:P}}}),BL=function(e){return e===void 0&&(e={}),{name:"flip",options:e,async fn(t){var n,r;const{placement:i,middlewareData:o,rects:s,initialPlacement:l,platform:c,elements:u}=t,{mainAxis:d=!0,crossAxis:p=!0,fallbackPlacements:g,fallbackStrategy:w="bestFit",fallbackAxisSideDirection:y="none",flipAlignment:x=!0,...C}=Gr(e,t);if((n=o.arrow)!=null&&n.alignmentOffset)return{};const m=Kr(i),v=Pi(l),h=Kr(l)===l,b=await(c.isRTL==null?void 0:c.isRTL(u.floating)),j=g||(h||!x?[Ou(l)]:ML(l)),E=y!=="none";!g&&E&&j.push(...AL(l,x,y,b));const $=[l,...j],F=await Pu(t,C),M=[];let R=((r=o.flip)==null?void 0:r.overflows)||[];if(d&&M.push(F[m]),p){const z=RL(i,s,b);M.push(F[z[0]],F[z[1]])}if(R=[...R,{placement:i,overflows:M}],!M.every(z=>z<=0)){var D,T;const z=(((D=o.flip)==null?void 0:D.index)||0)+1,I=$[z];if(I)return{data:{index:z,overflows:R},reset:{placement:I}};let P=(T=R.filter(N=>N.overflows[0]<=0).sort((N,S)=>N.overflows[1]-S.overflows[1])[0])==null?void 0:T.placement;if(!P)switch(w){case"bestFit":{var V;const N=(V=R.filter(S=>{if(E){const _=Pi(S.placement);return _===v||_==="y"}return!0}).map(S=>[S.placement,S.overflows.filter(_=>_>0).reduce((_,O)=>_+O,0)]).sort((S,_)=>S[1]-_[1])[0])==null?void 0:V[0];N&&(P=N);break}case"initialPlacement":P=l;break}if(i!==P)return{reset:{placement:P}}}return{}}}};function Ig(e,t){return{top:e.top-t.height,right:e.right-t.width,bottom:e.bottom-t.height,left:e.left-t.width}}function zg(e){return OL.some(t=>e[t]>=0)}const VL=function(e){return e===void 0&&(e={}),{name:"hide",options:e,async fn(t){const{rects:n}=t,{strategy:r="referenceHidden",...i}=Gr(e,t);switch(r){case"referenceHidden":{const o=await Pu(t,{...i,elementContext:"reference"}),s=Ig(o,n.reference);return{data:{referenceHiddenOffsets:s,referenceHidden:zg(s)}}}case"escaped":{const o=await Pu(t,{...i,altBoundary:!0}),s=Ig(o,n.floating);return{data:{escapedOffsets:s,escaped:zg(s)}}}default:return{}}}}};async function WL(e,t){const{placement:n,platform:r,elements:i}=e,o=await(r.isRTL==null?void 0:r.isRTL(i.floating)),s=Kr(n),l=xl(n),c=Pi(n)==="y",u=["left","top"].includes(s)?-1:1,d=o&&c?-1:1,p=Gr(t,e);let{mainAxis:g,crossAxis:w,alignmentAxis:y}=typeof p=="number"?{mainAxis:p,crossAxis:0,alignmentAxis:null}:{mainAxis:p.mainAxis||0,crossAxis:p.crossAxis||0,alignmentAxis:p.alignmentAxis};return l&&typeof y=="number"&&(w=l==="end"?y*-1:y),c?{x:w*d,y:g*u}:{x:g*u,y:w*d}}const UL=function(e){return e===void 0&&(e=0),{name:"offset",options:e,async fn(t){var n,r;const{x:i,y:o,placement:s,middlewareData:l}=t,c=await WL(t,e);return s===((n=l.offset)==null?void 0:n.placement)&&(r=l.arrow)!=null&&r.alignmentOffset?{}:{x:i+c.x,y:o+c.y,data:{...c,placement:s}}}}},HL=function(e){return e===void 0&&(e={}),{name:"shift",options:e,async fn(t){const{x:n,y:r,placement:i}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:l={fn:C=>{let{x:m,y:v}=C;return{x:m,y:v}}},...c}=Gr(e,t),u={x:n,y:r},d=await Pu(t,c),p=Pi(Kr(i)),g=Fp(p);let w=u[g],y=u[p];if(o){const C=g==="y"?"top":"left",m=g==="y"?"bottom":"right",v=w+d[C],h=w-d[m];w=_1(v,w,h)}if(s){const C=p==="y"?"top":"left",m=p==="y"?"bottom":"right",v=y+d[C],h=y-d[m];y=_1(v,y,h)}const x=l.fn({...t,[g]:w,[p]:y});return{...x,data:{x:x.x-n,y:x.y-r,enabled:{[g]:o,[p]:s}}}}}},qL=function(e){return e===void 0&&(e={}),{options:e,fn(t){const{x:n,y:r,placement:i,rects:o,middlewareData:s}=t,{offset:l=0,mainAxis:c=!0,crossAxis:u=!0}=Gr(e,t),d={x:n,y:r},p=Pi(i),g=Fp(p);let w=d[g],y=d[p];const x=Gr(l,t),C=typeof x=="number"?{mainAxis:x,crossAxis:0}:{mainAxis:0,crossAxis:0,...x};if(c){const h=g==="y"?"height":"width",b=o.reference[g]-o.floating[h]+C.mainAxis,j=o.reference[g]+o.reference[h]-C.mainAxis;w<b?w=b:w>j&&(w=j)}if(u){var m,v;const h=g==="y"?"width":"height",b=["top","left"].includes(Kr(i)),j=o.reference[p]-o.floating[h]+(b&&((m=s.offset)==null?void 0:m[p])||0)+(b?0:C.crossAxis),E=o.reference[p]+o.reference[h]+(b?0:((v=s.offset)==null?void 0:v[p])||0)-(b?C.crossAxis:0);y<j?y=j:y>E&&(y=E)}return{[g]:w,[p]:y}}}};function $d(){return typeof window<"u"}function os(e){return yv(e)?(e.nodeName||"").toLowerCase():"#document"}function Ht(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function Gn(e){var t;return(t=(yv(e)?e.ownerDocument:e.document)||window.document)==null?void 0:t.documentElement}function yv(e){return $d()?e instanceof Node||e instanceof Ht(e).Node:!1}function Fn(e){return $d()?e instanceof Element||e instanceof Ht(e).Element:!1}function Qn(e){return $d()?e instanceof HTMLElement||e instanceof Ht(e).HTMLElement:!1}function Dg(e){return!$d()||typeof ShadowRoot>"u"?!1:e instanceof ShadowRoot||e instanceof Ht(e).ShadowRoot}function yl(e){const{overflow:t,overflowX:n,overflowY:r,display:i}=On(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&!["inline","contents"].includes(i)}function ZL(e){return["table","td","th"].includes(os(e))}function _d(e){return[":popover-open",":modal"].some(t=>{try{return e.matches(t)}catch{return!1}})}function Pp(e){const t=Rp(),n=Fn(e)?On(e):e;return["transform","translate","scale","rotate","perspective"].some(r=>n[r]?n[r]!=="none":!1)||(n.containerType?n.containerType!=="normal":!1)||!t&&(n.backdropFilter?n.backdropFilter!=="none":!1)||!t&&(n.filter?n.filter!=="none":!1)||["transform","translate","scale","rotate","perspective","filter"].some(r=>(n.willChange||"").includes(r))||["paint","layout","strict","content"].some(r=>(n.contain||"").includes(r))}function QL(e){let t=Yr(e);for(;Qn(t)&&!Wo(t);){if(Pp(t))return t;if(_d(t))return null;t=Yr(t)}return null}function Rp(){return typeof CSS>"u"||!CSS.supports?!1:CSS.supports("-webkit-backdrop-filter","none")}function Wo(e){return["html","body","#document"].includes(os(e))}function On(e){return Ht(e).getComputedStyle(e)}function Fd(e){return Fn(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Yr(e){if(os(e)==="html")return e;const t=e.assignedSlot||e.parentNode||Dg(e)&&e.host||Gn(e);return Dg(t)?t.host:t}function wv(e){const t=Yr(e);return Wo(t)?e.ownerDocument?e.ownerDocument.body:e.body:Qn(t)&&yl(t)?t:wv(t)}function Xa(e,t,n){var r;t===void 0&&(t=[]),n===void 0&&(n=!0);const i=wv(e),o=i===((r=e.ownerDocument)==null?void 0:r.body),s=Ht(i);if(o){const l=O1(s);return t.concat(s,s.visualViewport||[],yl(i)?i:[],l&&n?Xa(l):[])}return t.concat(i,Xa(i,[],n))}function O1(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function bv(e){const t=On(e);let n=parseFloat(t.width)||0,r=parseFloat(t.height)||0;const i=Qn(e),o=i?e.offsetWidth:n,s=i?e.offsetHeight:r,l=Fu(n)!==o||Fu(r)!==s;return l&&(n=o,r=s),{width:n,height:r,$:l}}function Mp(e){return Fn(e)?e:e.contextElement}function Lo(e){const t=Mp(e);if(!Qn(t))return Hn(1);const n=t.getBoundingClientRect(),{width:r,height:i,$:o}=bv(t);let s=(o?Fu(n.width):n.width)/r,l=(o?Fu(n.height):n.height)/i;return(!s||!Number.isFinite(s))&&(s=1),(!l||!Number.isFinite(l))&&(l=1),{x:s,y:l}}const GL=Hn(0);function Cv(e){const t=Ht(e);return!Rp()||!t.visualViewport?GL:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function KL(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==Ht(e)?!1:t}function Ri(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);const i=e.getBoundingClientRect(),o=Mp(e);let s=Hn(1);t&&(r?Fn(r)&&(s=Lo(r)):s=Lo(e));const l=KL(o,n,r)?Cv(o):Hn(0);let c=(i.left+l.x)/s.x,u=(i.top+l.y)/s.y,d=i.width/s.x,p=i.height/s.y;if(o){const g=Ht(o),w=r&&Fn(r)?Ht(r):r;let y=g,x=O1(y);for(;x&&r&&w!==y;){const C=Lo(x),m=x.getBoundingClientRect(),v=On(x),h=m.left+(x.clientLeft+parseFloat(v.paddingLeft))*C.x,b=m.top+(x.clientTop+parseFloat(v.paddingTop))*C.y;c*=C.x,u*=C.y,d*=C.x,p*=C.y,c+=h,u+=b,y=Ht(x),x=O1(y)}}return Nu({width:d,height:p,x:c,y:u})}function Tp(e,t){const n=Fd(e).scrollLeft;return t?t.left+n:Ri(Gn(e)).left+n}function kv(e,t,n){n===void 0&&(n=!1);const r=e.getBoundingClientRect(),i=r.left+t.scrollLeft-(n?0:Tp(e,r)),o=r.top+t.scrollTop;return{x:i,y:o}}function YL(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e;const o=i==="fixed",s=Gn(r),l=t?_d(t.floating):!1;if(r===s||l&&o)return n;let c={scrollLeft:0,scrollTop:0},u=Hn(1);const d=Hn(0),p=Qn(r);if((p||!p&&!o)&&((os(r)!=="body"||yl(s))&&(c=Fd(r)),Qn(r))){const w=Ri(r);u=Lo(r),d.x=w.x+r.clientLeft,d.y=w.y+r.clientTop}const g=s&&!p&&!o?kv(s,c,!0):Hn(0);return{width:n.width*u.x,height:n.height*u.y,x:n.x*u.x-c.scrollLeft*u.x+d.x+g.x,y:n.y*u.y-c.scrollTop*u.y+d.y+g.y}}function XL(e){return Array.from(e.getClientRects())}function JL(e){const t=Gn(e),n=Fd(e),r=e.ownerDocument.body,i=bi(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),o=bi(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight);let s=-n.scrollLeft+Tp(e);const l=-n.scrollTop;return On(r).direction==="rtl"&&(s+=bi(t.clientWidth,r.clientWidth)-i),{width:i,height:o,x:s,y:l}}function e$(e,t){const n=Ht(e),r=Gn(e),i=n.visualViewport;let o=r.clientWidth,s=r.clientHeight,l=0,c=0;if(i){o=i.width,s=i.height;const u=Rp();(!u||u&&t==="fixed")&&(l=i.offsetLeft,c=i.offsetTop)}return{width:o,height:s,x:l,y:c}}function t$(e,t){const n=Ri(e,!0,t==="fixed"),r=n.top+e.clientTop,i=n.left+e.clientLeft,o=Qn(e)?Lo(e):Hn(1),s=e.clientWidth*o.x,l=e.clientHeight*o.y,c=i*o.x,u=r*o.y;return{width:s,height:l,x:c,y:u}}function Bg(e,t,n){let r;if(t==="viewport")r=e$(e,n);else if(t==="document")r=JL(Gn(e));else if(Fn(t))r=t$(t,n);else{const i=Cv(e);r={x:t.x-i.x,y:t.y-i.y,width:t.width,height:t.height}}return Nu(r)}function jv(e,t){const n=Yr(e);return n===t||!Fn(n)||Wo(n)?!1:On(n).position==="fixed"||jv(n,t)}function n$(e,t){const n=t.get(e);if(n)return n;let r=Xa(e,[],!1).filter(l=>Fn(l)&&os(l)!=="body"),i=null;const o=On(e).position==="fixed";let s=o?Yr(e):e;for(;Fn(s)&&!Wo(s);){const l=On(s),c=Pp(s);!c&&l.position==="fixed"&&(i=null),(o?!c&&!i:!c&&l.position==="static"&&!!i&&["absolute","fixed"].includes(i.position)||yl(s)&&!c&&jv(e,s))?r=r.filter(d=>d!==s):i=l,s=Yr(s)}return t.set(e,r),r}function r$(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e;const s=[...n==="clippingAncestors"?_d(t)?[]:n$(t,this._c):[].concat(n),r],l=s[0],c=s.reduce((u,d)=>{const p=Bg(t,d,i);return u.top=bi(p.top,u.top),u.right=Vo(p.right,u.right),u.bottom=Vo(p.bottom,u.bottom),u.left=bi(p.left,u.left),u},Bg(t,l,i));return{width:c.right-c.left,height:c.bottom-c.top,x:c.left,y:c.top}}function i$(e){const{width:t,height:n}=bv(e);return{width:t,height:n}}function o$(e,t,n){const r=Qn(t),i=Gn(t),o=n==="fixed",s=Ri(e,!0,o,t);let l={scrollLeft:0,scrollTop:0};const c=Hn(0);if(r||!r&&!o)if((os(t)!=="body"||yl(i))&&(l=Fd(t)),r){const g=Ri(t,!0,o,t);c.x=g.x+t.clientLeft,c.y=g.y+t.clientTop}else i&&(c.x=Tp(i));const u=i&&!r&&!o?kv(i,l):Hn(0),d=s.left+l.scrollLeft-c.x-u.x,p=s.top+l.scrollTop-c.y-u.y;return{x:d,y:p,width:s.width,height:s.height}}function _f(e){return On(e).position==="static"}function Vg(e,t){if(!Qn(e)||On(e).position==="fixed")return null;if(t)return t(e);let n=e.offsetParent;return Gn(e)===n&&(n=n.ownerDocument.body),n}function Ev(e,t){const n=Ht(e);if(_d(e))return n;if(!Qn(e)){let i=Yr(e);for(;i&&!Wo(i);){if(Fn(i)&&!_f(i))return i;i=Yr(i)}return n}let r=Vg(e,t);for(;r&&ZL(r)&&_f(r);)r=Vg(r,t);return r&&Wo(r)&&_f(r)&&!Pp(r)?n:r||QL(e)||n}const s$=async function(e){const t=this.getOffsetParent||Ev,n=this.getDimensions,r=await n(e.floating);return{reference:o$(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function a$(e){return On(e).direction==="rtl"}const l$={convertOffsetParentRelativeRectToViewportRelativeRect:YL,getDocumentElement:Gn,getClippingRect:r$,getOffsetParent:Ev,getElementRects:s$,getClientRects:XL,getDimensions:i$,getScale:Lo,isElement:Fn,isRTL:a$};function Sv(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function c$(e,t){let n=null,r;const i=Gn(e);function o(){var l;clearTimeout(r),(l=n)==null||l.disconnect(),n=null}function s(l,c){l===void 0&&(l=!1),c===void 0&&(c=1),o();const u=e.getBoundingClientRect(),{left:d,top:p,width:g,height:w}=u;if(l||t(),!g||!w)return;const y=Bl(p),x=Bl(i.clientWidth-(d+g)),C=Bl(i.clientHeight-(p+w)),m=Bl(d),h={rootMargin:-y+"px "+-x+"px "+-C+"px "+-m+"px",threshold:bi(0,Vo(1,c))||1};let b=!0;function j(E){const $=E[0].intersectionRatio;if($!==c){if(!b)return s();$?s(!1,$):r=setTimeout(()=>{s(!1,1e-7)},1e3)}$===1&&!Sv(u,e.getBoundingClientRect())&&s(),b=!1}try{n=new IntersectionObserver(j,{...h,root:i.ownerDocument})}catch{n=new IntersectionObserver(j,h)}n.observe(e)}return s(!0),o}function u$(e,t,n,r){r===void 0&&(r={});const{ancestorScroll:i=!0,ancestorResize:o=!0,elementResize:s=typeof ResizeObserver=="function",layoutShift:l=typeof IntersectionObserver=="function",animationFrame:c=!1}=r,u=Mp(e),d=i||o?[...u?Xa(u):[],...Xa(t)]:[];d.forEach(m=>{i&&m.addEventListener("scroll",n,{passive:!0}),o&&m.addEventListener("resize",n)});const p=u&&l?c$(u,n):null;let g=-1,w=null;s&&(w=new ResizeObserver(m=>{let[v]=m;v&&v.target===u&&w&&(w.unobserve(t),cancelAnimationFrame(g),g=requestAnimationFrame(()=>{var h;(h=w)==null||h.observe(t)})),n()}),u&&!c&&w.observe(u),w.observe(t));let y,x=c?Ri(e):null;c&&C();function C(){const m=Ri(e);x&&!Sv(x,m)&&n(),x=m,y=requestAnimationFrame(C)}return n(),()=>{var m;d.forEach(v=>{i&&v.removeEventListener("scroll",n),o&&v.removeEventListener("resize",n)}),p==null||p(),(m=w)==null||m.disconnect(),w=null,c&&cancelAnimationFrame(y)}}const d$=UL,f$=HL,h$=BL,p$=VL,m$=DL,g$=qL,v$=(e,t,n)=>{const r=new Map,i={platform:l$,...n},o={...i.platform,_c:r};return zL(e,t,{...i,platform:o})};let go=null,$o=null;Jo&&(go=document.createElement("div"),go.className="adm-px-tester",go.style.setProperty("--size","10"),document.body.appendChild(go),$o=document.createElement("div"),$o.className="adm-px-tester",document.body.appendChild($o));function Ff(e){return go===null||$o===null||go.getBoundingClientRect().height===10?e:($o.style.setProperty("--size",e.toString()),$o.getBoundingClientRect().height)}const x$=f.memo(e=>ne(e,k.createElement("svg",{viewBox:"0 0 30 16"},k.createElement("g",{fill:"currentColor"},k.createElement("path",{d:"M0,0 L30,0 L18.07289,14.312538 C16.65863,16.009645 14.13637,16.238942 12.43926,14.824685 C12.25341,14.669808 12.08199,14.49839 11.92711,14.312538 L0,0 L0,0 Z"}))))),y$={topLeft:"top-start",topRight:"top-end",bottomLeft:"bottom-start",bottomRight:"bottom-end",leftTop:"left-start",leftBottom:"left-end",rightTop:"right-start",rightBottom:"right-end"};function w$(e){var t;return(t=y$[e])!==null&&t!==void 0?t:e}class b$ extends k.Component{constructor(){super(...arguments),this.element=null}componentDidMount(){this.componentDidUpdate()}componentDidUpdate(){const t=Xo.findDOMNode(this);t instanceof Element?this.element=t:this.element=null}render(){return k.Children.only(this.props.children)}}const ti="adm-popover",C$={placement:"top",defaultVisible:!1,stopPropagation:["click"],getContainer:()=>document.body,mode:"light"},Lv=f.forwardRef((e,t)=>{const n=oe(C$,e),r=w$(n.placement),[i,o]=Ot({value:n.visible,defaultValue:n.defaultVisible,onChange:n.onVisibleChange});f.useImperativeHandle(t,()=>({show:()=>o(!0),hide:()=>o(!1),visible:i}),[i]);const s=f.useRef(null),l=f.useRef(null),c=f.useRef(null),u=zo(n.stopPropagation,ne(n,k.createElement("div",{className:X(ti,`${ti}-${n.mode}`,{[`${ti}-hidden`]:!i}),ref:l},k.createElement("div",{className:`${ti}-arrow`,ref:c},k.createElement(x$,{className:`${ti}-arrow-icon`})),k.createElement("div",{className:`${ti}-inner`},k.createElement("div",{className:`${ti}-inner-content`},n.content))))),[d,p]=f.useState(null);function g(){var y,x,C;return $n(this,void 0,void 0,function*(){const m=(x=(y=s.current)===null||y===void 0?void 0:y.element)!==null&&x!==void 0?x:null,v=l.current,h=c.current;if(p(m),!m||!v||!h)return;const{x:b,y:j,placement:E,middlewareData:$}=yield v$(m,v,{placement:r,middleware:[d$(Ff(12)),f$({padding:Ff(4),crossAxis:!1,limiter:g$()}),h$(),p$(),m$({element:h,padding:Ff(12)})]});Object.assign(v.style,{left:`${b}px`,top:`${j}px`});const F=E.split("-")[0],M={top:"bottom",right:"left",bottom:"top",left:"right"}[F],{x:R,y:D}=(C=$.arrow)!==null&&C!==void 0?C:{};Object.assign(h.style,{left:R!=null?`${R}px`:"",top:D!=null?`${D}px`:"",right:"",bottom:"",[M]:"calc(var(--arrow-size) * -1)"});const T={top:"0deg",bottom:"180deg",left:"270deg",right:"90deg"}[F];h.style.setProperty("--arrow-icon-rotate",T)})}Ft(()=>{g()}),f.useEffect(()=>{if(!d||!n.trigger)return;function y(){o(x=>!x)}return d.addEventListener("click",y),()=>{d.removeEventListener("click",y)}},[d,n.trigger]),f.useEffect(()=>{const y=l.current;if(!(!d||!y||!i))return u$(d,y,g,{elementResize:typeof ResizeObserver<"u"})},[d,i]),eb(()=>{n.trigger&&o(!1)},[()=>{var y;return(y=s.current)===null||y===void 0?void 0:y.element},l],["click","touchmove"]);const w=s6(i,!1,n.destroyOnHide);return k.createElement(k.Fragment,null,k.createElement(b$,{ref:s},n.children),w&&fd(n.getContainer,u))}),yr="adm-popover-menu",k$=f.forwardRef((e,t)=>{const n=f.useRef(null);f.useImperativeHandle(t,()=>n.current,[]);const r=f.useCallback(o=>{var s;const{onAction:l}=e;l&&l(o),(s=n.current)===null||s===void 0||s.hide()},[e.onAction]),i=f.useMemo(()=>{const o=(e==null?void 0:e.maxCount)&&e.actions.length>(e==null?void 0:e.maxCount),s=(e==null?void 0:e.maxCount)&&(e==null?void 0:e.maxCount)*48;return k.createElement("div",{className:`${yr}-list`},k.createElement("div",{className:X(`${yr}-list-inner`,{[`${yr}-list-scroll`]:o}),style:{height:s}},e.actions.map((l,c)=>{var u;return k.createElement("a",{key:(u=l.key)!==null&&u!==void 0?u:c,className:X(`${yr}-item`,"adm-plain-anchor",{[`${yr}-item-disabled`]:l.disabled}),onClick:()=>{var d;l.disabled||(r(l),(d=l.onClick)===null||d===void 0||d.call(l))}},l.icon&&k.createElement("div",{className:`${yr}-item-icon`},l.icon),k.createElement("div",{className:`${yr}-item-text`},l.text))})))},[e.actions,r]);return k.createElement(Lv,Object.assign({ref:n},e,{className:X(yr,e.className),content:i}),e.children)}),j$=Gt(Lv,{Menu:k$});function Of(e){return e===void 0||e===!1?[]:Array.isArray(e)?e:[e]}function E$(e){const t=e.prototype;return!!(t&&t.isReactComponent)}function S$(e){return typeof e=="function"&&!E$(e)&&e.defaultProps===void 0}function $v(e){return f1.isFragment(e)?!1:f1.isMemo(e)?$v(e.type):!S$(e.type)}const L$="__SPLIT__",wt="adm-form-item",$$=k.memo(({children:e})=>e,(e,t)=>e.value===t.value&&e.update===t.update),_$=e=>{var t;const{locale:n,form:r={}}=xt(),{style:i,extra:o,label:s,help:l,helpIcon:c,required:u,children:d,htmlFor:p,hidden:g,arrow:w,arrowIcon:y,childElementPosition:x="normal"}=oe(r,e),C=f.useContext($p),m=e.hasFeedback!==void 0?e.hasFeedback:C.hasFeedback,v=e.layout||C.layout,h=(t=e.disabled)!==null&&t!==void 0?t:C.disabled,b=(()=>{const{requiredMarkStyle:$}=C;switch($){case"asterisk":return u&&k.createElement("span",{className:`${wt}-required-asterisk`},"*");case"text-required":return u&&k.createElement("span",{className:`${wt}-required-text`},"(",n.Form.required,")");case"text-optional":return!u&&k.createElement("span",{className:`${wt}-required-text`},"(",n.Form.optional,")");case"none":return null;default:return null}})(),j=!!s&&k.createElement("label",{className:`${wt}-label`,htmlFor:p},s,b,l&&k.createElement(j$,{content:l,mode:"dark",trigger:"click"},k.createElement("span",{className:`${wt}-label-help`,onClick:$=>{$.stopPropagation(),$.preventDefault()}},c||k.createElement(bu,null)))),E=(!!e.description||m)&&k.createElement(k.Fragment,null,e.description,m&&k.createElement(k.Fragment,null,e.errors.map(($,F)=>k.createElement("div",{key:`error-${F}`,className:`${wt}-feedback-error`},$)),e.warnings.map(($,F)=>k.createElement("div",{key:`warning-${F}`,className:`${wt}-feedback-warning`},$))));return ne(e,k.createElement(ce.Item,{style:i,title:v==="vertical"&&j,prefix:v==="horizontal"&&j,extra:o,description:E,className:X(wt,`${wt}-${v}`,{[`${wt}-hidden`]:g,[`${wt}-has-error`]:e.errors.length}),disabled:h,onClick:e.onClick,clickable:e.clickable,arrowIcon:y||w},k.createElement("div",{className:X(`${wt}-child`,`${wt}-child-position-${x}`)},k.createElement("div",{className:X(`${wt}-child-inner`)},d))))},F$=e=>{const{style:t,label:n,help:r,helpIcon:i,extra:o,hasFeedback:s,name:l,required:c,noStyle:u,hidden:d,layout:p,childElementPosition:g,description:w,disabled:y,rules:x,children:C,messageVariables:m,trigger:v="onChange",validateTrigger:h=v,onClick:b,shouldUpdate:j,dependencies:E,clickable:$,arrow:F,arrowIcon:M}=e,R=rd(e,["style","label","help","helpIcon","extra","hasFeedback","name","required","noStyle","hidden","layout","childElementPosition","description","disabled","rules","children","messageVariables","trigger","validateTrigger","onClick","shouldUpdate","dependencies","clickable","arrow","arrowIcon"]),{name:D}=f.useContext($p),{validateTrigger:T}=f.useContext(vv),V=FL(h,T,v),z=f.useRef(null),I=f.useRef(0);I.current+=1;const[P,N]=f.useState({}),S=f.useCallback((H,W)=>{N(Q=>{const ee=Object.assign({},Q),fe=W.join(L$);return H.destroy?delete ee[fe]:ee[fe]=H,ee})},[N]);function _(H,W,Q,ee){var fe,K;if(u&&!d)return H;const te=(fe=Q==null?void 0:Q.errors)!==null&&fe!==void 0?fe:[],re=Object.keys(P).reduce((Pe,Nt)=>{var Kt,Pt;const cs=(Pt=(Kt=P[Nt])===null||Kt===void 0?void 0:Kt.errors)!==null&&Pt!==void 0?Pt:[];return cs.length&&(Pe=[...Pe,...cs]),Pe},te),ve=(K=Q==null?void 0:Q.warnings)!==null&&K!==void 0?K:[],we=Object.keys(P).reduce((Pe,Nt)=>{var Kt,Pt;const cs=(Pt=(Kt=P[Nt])===null||Kt===void 0?void 0:Kt.warnings)!==null&&Pt!==void 0?Pt:[];return cs.length&&(Pe=[...Pe,...cs]),Pe},ve);return ne(e,k.createElement(_$,{style:t,label:n,extra:o,help:r,helpIcon:i,description:w,required:ee,disabled:y,hasFeedback:s,htmlFor:W,errors:re,warnings:we,onClick:b&&(Pe=>b(Pe,z)),hidden:d,layout:p,childElementPosition:g,clickable:$,arrow:F,arrowIcon:M},k.createElement(Rg.Provider,{value:S},H)))}const O=typeof C=="function";if(!l&&!O&&!e.dependencies)return _(C);let A={};A.label=typeof n=="string"?n:"",m&&(A=Object.assign(Object.assign({},A),m));const B=f.useContext(Rg),G=H=>{if(u&&B){const W=H.name;B(H,W)}};return k.createElement(Ep,Object.assign({},R,{name:l,shouldUpdate:j,dependencies:E,rules:x,trigger:v,validateTrigger:V,onMetaChange:G,messageVariables:A}),(H,W,Q)=>{let ee=null;const fe=c!==void 0?c:x&&x.some(re=>!!(re&&typeof re=="object"&&re.required)),K=Of(l).length&&W?W.name:[],te=(K.length>0&&D?[D,...K]:K).join("_");if(O)(j||E)&&!l&&(ee=C(Q));else if(!(E&&!l))if(k.isValidElement(C)){C.props.defaultValue;const re=Object.assign(Object.assign({},C.props),H);$v(C)&&(re.ref=we=>{const Pe=C.ref;Pe&&(typeof Pe=="function"&&Pe(we),"current"in Pe&&(Pe.current=we)),z.current=we}),re.id||(re.id=te),new Set([...Of(v),...Of(V)]).forEach(we=>{re[we]=(...Pe)=>{var Nt,Kt,Pt;(Nt=H[we])===null||Nt===void 0||Nt.call(H,...Pe),(Pt=(Kt=C.props)[we])===null||Pt===void 0||Pt.call(Kt,...Pe)}}),ee=k.createElement($$,{value:H[e.valuePropName||"value"],update:I.current},k.cloneElement(C,re))}else ee=C;return _(ee,te,W,fe)})},O$=e=>{const t=j5(),n=f.useContext(Ni),r=n.getFieldsValue(e.to),i=k.useMemo(()=>e.children(r,n),[JSON.stringify(r),e.children]);return k.createElement(k.Fragment,null,i,e.to.map(o=>k.createElement(N$,{key:o.toString(),form:n,namePath:o,onChange:t})))},N$=f.memo(e=>{const t=Lp(e.namePath,e.form);return pp(()=>{e.onChange()},[t]),null}),kt=Gt(wL,{Item:F$,Subscribe:O$,Header:av,Array:cv,useForm:Sp,useWatch:Lp}),_v="adm-grid",P$=e=>{const t={"--columns":e.columns.toString()},{gap:n}=e;return n!==void 0&&(Array.isArray(n)?(t["--gap-horizontal"]=pi(n[0]),t["--gap-vertical"]=pi(n[1])):t["--gap"]=pi(n)),ne(e,k.createElement("div",{className:_v,style:t},e.children))},R$=e=>{const t=oe({span:1},e),n={"--item-span":t.span};return ne(t,k.createElement("div",{className:`${_v}-item`,style:n,onClick:t.onClick},t.children))},zt=Gt(P$,{Item:R$}),ni="adm-space",M$={direction:"horizontal"},ge=e=>{const t=oe(M$,e),{direction:n,onClick:r}=t;return ne(t,k.createElement("div",{className:X(ni,{[`${ni}-wrap`]:t.wrap,[`${ni}-block`]:t.block,[`${ni}-${n}`]:!0,[`${ni}-align-${t.align}`]:!!t.align,[`${ni}-justify-${t.justify}`]:!!t.justify}),onClick:r},k.Children.map(t.children,i=>i!=null&&k.createElement("div",{className:`${ni}-item`},i))))};function Fv({onEnterPress:e,onKeyDown:t,nativeInputRef:n,enterKeyHint:r}){const i=o=>{e&&(o.code==="Enter"||o.keyCode===13)&&e(o),t==null||t(o)};return Ft(()=>{const o=n.current;if(!(!r||!o))return o.setAttribute("enterkeyhint",r),()=>{o.removeAttribute("enterkeyhint")}},[r]),i}const Vl="adm-input",T$={defaultValue:"",clearIcon:k.createElement(cp,null),onlyShowClearWhenFocus:!0},Xe=f.forwardRef((e,t)=>{const{locale:n,input:r={}}=xt(),i=oe(T$,r,e),[o,s]=Ot(i),[l,c]=f.useState(!1),u=f.useRef(!1),d=f.useRef(null),p=Fv({onEnterPress:i.onEnterPress,onKeyDown:i.onKeyDown,nativeInputRef:d,enterKeyHint:i.enterKeyHint});f.useImperativeHandle(t,()=>({clear:()=>{s("")},focus:()=>{var y;(y=d.current)===null||y===void 0||y.focus()},blur:()=>{var y;(y=d.current)===null||y===void 0||y.blur()},get nativeElement(){return d.current}}));function g(){let y=o;if(i.type==="number"){const x=y&&lr(parseFloat(y),i.min,i.max).toString();Number(y)!==Number(x)&&(y=x)}y!==o&&s(y)}const w=!i.clearable||!o||i.readOnly?!1:i.onlyShowClearWhenFocus?l:!0;return ne(i,k.createElement("div",{className:X(`${Vl}`,i.disabled&&`${Vl}-disabled`)},k.createElement("input",{ref:d,className:`${Vl}-element`,value:o,onChange:y=>{s(y.target.value)},onFocus:y=>{var x;c(!0),(x=i.onFocus)===null||x===void 0||x.call(i,y)},onBlur:y=>{var x;c(!1),g(),(x=i.onBlur)===null||x===void 0||x.call(i,y)},onPaste:i.onPaste,id:i.id,placeholder:i.placeholder,disabled:i.disabled,readOnly:i.readOnly,maxLength:i.maxLength,minLength:i.minLength,max:i.max,min:i.min,autoComplete:i.autoComplete,enterKeyHint:i.enterKeyHint,autoFocus:i.autoFocus,pattern:i.pattern,inputMode:i.inputMode,type:i.type,name:i.name,autoCapitalize:i.autoCapitalize,autoCorrect:i.autoCorrect,onKeyDown:p,onKeyUp:i.onKeyUp,onCompositionStart:y=>{var x;u.current=!0,(x=i.onCompositionStart)===null||x===void 0||x.call(i,y)},onCompositionEnd:y=>{var x;u.current=!1,(x=i.onCompositionEnd)===null||x===void 0||x.call(i,y)},onClick:i.onClick,step:i.step,role:i.role,"aria-valuenow":i["aria-valuenow"],"aria-valuemax":i["aria-valuemax"],"aria-valuemin":i["aria-valuemin"],"aria-label":i["aria-label"]}),w&&k.createElement("div",{className:`${Vl}-clear`,onMouseDown:y=>{y.preventDefault()},onClick:()=>{var y,x;s(""),(y=i.onClear)===null||y===void 0||y.call(i),Nj()&&u.current&&(u.current=!1,(x=d.current)===null||x===void 0||x.blur())},"aria-label":n.Input.clear},i.clearIcon)))}),A$=e=>{const{action:t}=e;return ne(e.action,k.createElement(J,{key:t.key,onClick:e.onAction,className:X("adm-modal-button",{"adm-modal-button-primary":e.action.primary}),fill:e.action.primary?"solid":"none",size:e.action.primary?"large":"middle",block:!0,color:t.danger?"danger":"primary",loading:"auto",disabled:t.disabled},t.text))},I$={actions:[],closeOnAction:!1,closeOnMaskClick:!1,getContainer:null},Ov=e=>{const t=oe(I$,e),n=k.createElement(k.Fragment,null,!!t.image&&k.createElement("div",{className:Yn("image-container")},k.createElement(Zr,{src:t.image,alt:"modal header image",width:"100%"})),!!t.header&&k.createElement("div",{className:Yn("header")},k.createElement(Za,null,t.header)),!!t.title&&k.createElement("div",{className:Yn("title")},t.title),k.createElement("div",{className:Yn("content")},typeof t.content=="string"?k.createElement(Za,null,t.content):t.content),k.createElement(ge,{direction:"vertical",block:!0,className:X(Yn("footer"),t.actions.length===0&&Yn("footer-empty"))},t.actions.map((r,i)=>k.createElement(A$,{key:r.key,action:r,onAction:()=>$n(void 0,void 0,void 0,function*(){var o,s,l;yield Promise.all([(o=r.onClick)===null||o===void 0?void 0:o.call(r),(s=t.onAction)===null||s===void 0?void 0:s.call(t,r,i)]),t.closeOnAction&&((l=t.onClose)===null||l===void 0||l.call(t))})}))));return k.createElement(Q6,{className:X(Yn(),t.className),style:t.style,afterClose:t.afterClose,afterShow:t.afterShow,showCloseButton:t.showCloseButton,closeOnMaskClick:t.closeOnMaskClick,onClose:t.onClose,visible:t.visible,getContainer:t.getContainer,bodyStyle:t.bodyStyle,bodyClassName:X(Yn("body"),t.image&&Yn("with-image"),t.bodyClassName),maskStyle:t.maskStyle,maskClassName:t.maskClassName,stopPropagation:t.stopPropagation,disableBodyScroll:t.disableBodyScroll,destroyOnClose:t.destroyOnClose,forceRender:t.forceRender},n)};function Yn(e=""){return"adm-modal"+(e&&"-")+e}const N1=new Set;function Ap(e){const t=Eu(k.createElement(Ov,Object.assign({},e,{afterClose:()=>{var n;N1.delete(t.close),(n=e.afterClose)===null||n===void 0||n.call(e)}})));return N1.add(t.close),t}function z$(e){const t={confirmText:sl().locale.Modal.ok},n=oe(t,e);return new Promise(r=>{Ap(Object.assign(Object.assign({},n),{closeOnAction:!0,actions:[{key:"confirm",text:n.confirmText,primary:!0}],onAction:n.onConfirm,onClose:()=>{var i;(i=n.onClose)===null||i===void 0||i.call(n),r()}}))})}const D$={confirmText:"确认",cancelText:"取消"};function B$(e){const{locale:t}=sl(),n=oe(D$,{confirmText:t.common.confirm,cancelText:t.common.cancel},e);return new Promise(r=>{Ap(Object.assign(Object.assign({},n),{closeOnAction:!0,onClose:()=>{var i;(i=n.onClose)===null||i===void 0||i.call(n),r(!1)},actions:[{key:"confirm",text:n.confirmText,primary:!0,onClick:()=>$n(this,void 0,void 0,function*(){var i;yield(i=n.onConfirm)===null||i===void 0?void 0:i.call(n),r(!0)})},{key:"cancel",text:n.cancelText,onClick:()=>$n(this,void 0,void 0,function*(){var i;yield(i=n.onCancel)===null||i===void 0?void 0:i.call(n),r(!1)})}]}))})}function V$(){N1.forEach(e=>{e()})}const Nf=Gt(Ov,{show:Ap,alert:z$,confirm:B$,clear:V$}),Zi="adm-nav-bar",Wg=k.createElement(d6,null),Ve=e=>{const{navBar:t={}}=xt(),n=oe(t,e),{back:r,backIcon:i,backArrow:o}=n,s=t.backIcon||Wg,l=g5(Wg,t.backIcon,o===!0?s:o,i===!0?s:i);return ne(n,k.createElement("div",{className:X(Zi)},k.createElement("div",{className:`${Zi}-left`,role:"button"},r!==null&&k.createElement("div",{className:`${Zi}-back`,onClick:n.onBack},l&&k.createElement("span",{className:`${Zi}-back-arrow`},l),k.createElement("span",{"aria-hidden":"true"},r)),n.left),k.createElement("div",{className:`${Zi}-title`},n.children),k.createElement("div",{className:`${Zi}-right`},n.right)))},Ss="adm-page-indicator",W$={color:"primary",direction:"horizontal"},U$=f.memo(e=>{const t=oe(W$,e),n=[];for(let r=0;r<t.total;r++)n.push(k.createElement("div",{key:r,className:X(`${Ss}-dot`,{[`${Ss}-dot-active`]:t.current===r})}));return ne(t,k.createElement("div",{className:X(Ss,`${Ss}-${t.direction}`,`${Ss}-color-${t.color}`)},n))}),Ls="adm-progress-bar",H$={percent:0,rounded:!0,text:!1},Nv=e=>{const t=oe(H$,e),n={width:`${t.percent}%`},r=function(){return t.text===!0?`${t.percent}%`:typeof t.text=="function"?t.text(t.percent):t.text}();return ne(t,k.createElement("div",{className:X(Ls,t.rounded&&`${Ls}-rounded`)},k.createElement("div",{className:`${Ls}-trail`},k.createElement("div",{className:`${Ls}-fill`,style:n})),Gs(r)&&k.createElement("div",{className:`${Ls}-text`},r)))},Pv=f.createContext(null),q$={disabled:!1,defaultValue:null},Z$=e=>{const t=oe(q$,e),[n,r]=Ot({value:t.value,defaultValue:t.defaultValue,onChange:i=>{var o;i!==null&&((o=t.onChange)===null||o===void 0||o.call(t,i))}});return k.createElement(Pv.Provider,{value:{value:n===null?[]:[n],check:i=>{r(i)},uncheck:()=>{},disabled:t.disabled}},t.children)},ri="adm-radio",Q$={defaultChecked:!1},G$=e=>{const t=oe(Q$,e),n=f.useContext(Pv);let[r,i]=Ot({value:t.checked,defaultValue:t.defaultChecked,onChange:t.onChange}),o=t.disabled;const{value:s}=t;n&&s!==void 0&&(r=n.value.includes(s),i=c=>{var u;c?n.check(s):n.uncheck(s),(u=t.onChange)===null||u===void 0||u.call(t,c)},o=o||n.disabled);const l=()=>t.icon?k.createElement("div",{className:`${ri}-custom-icon`},t.icon(r)):k.createElement("div",{className:`${ri}-icon`},r&&k.createElement(K6,null));return ne(t,k.createElement("label",{onClick:t.onClick,className:X(ri,{[`${ri}-checked`]:r,[`${ri}-disabled`]:o,[`${ri}-block`]:t.block})},k.createElement(Y6,{type:"radio",checked:r,onChange:i,disabled:o,id:t.id}),l(),t.children&&k.createElement("div",{className:`${ri}-content`},t.children)))},Wl=Gt(G$,{Group:Z$}),K$=e=>{const{result:t={}}=xt(),{successIcon:n=k.createElement(lp,null),errorIcon:r=k.createElement(cp,null),infoIcon:i=k.createElement(ok,null),waitingIcon:o=k.createElement(JC,null),warningIcon:s=k.createElement(nk,null)}=t||{};switch(e){case"success":return n;case"error":return r;case"info":return i;case"waiting":return o;case"warning":return s;default:return null}},$s="adm-result",Y$={status:"info"},ss=e=>{const t=oe(Y$,e),{status:n,title:r,description:i,icon:o}=t,s=K$(n);return n?ne(t,k.createElement("div",{className:X($s,`${$s}-${n}`)},k.createElement("div",{className:`${$s}-icon`},o||s),k.createElement("div",{className:`${$s}-title`},r),!!i&&k.createElement("div",{className:`${$s}-description`},i))):null},X$=f.memo(()=>k.createElement("svg",{width:"17px",height:"13px",viewBox:"0 0 17 13",version:"1.1",xmlns:"http://www.w3.org/2000/svg"},k.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd",strokeLinecap:"round",strokeLinejoin:"round"},k.createElement("g",{transform:"translate(-2832.000000, -1103.000000)",stroke:"#FFFFFF",strokeWidth:"3"},k.createElement("g",{transform:"translate(2610.000000, 955.000000)"},k.createElement("g",{transform:"translate(24.000000, 91.000000)"},k.createElement("g",{transform:"translate(179.177408, 36.687816)"},k.createElement("polyline",{points:"34.2767388 22 24.797043 31.4796958 21 27.6826527"})))))))),ii="adm-selector",J$={multiple:!1,defaultValue:[],showCheckMark:!0},ma=e=>{const t=oe(J$,e),[n,r,,i]=ME(t.fieldNames),[o,s]=Ot({value:t.value,defaultValue:t.defaultValue,onChange:u=>{var d;const p={get items(){return t.options.filter(g=>u.includes(g[r]))}};(d=t.onChange)===null||d===void 0||d.call(t,u,p)}}),{locale:l}=xt(),c=t.options.map(u=>{const d=(o||[]).includes(u[r]),p=u[i]||t.disabled,g=X(`${ii}-item`,{[`${ii}-item-active`]:d&&!t.multiple,[`${ii}-item-multiple-active`]:d&&t.multiple,[`${ii}-item-disabled`]:p});return k.createElement("div",{key:u[r],className:g,onClick:()=>{if(!p)if(t.multiple){const w=d?o.filter(y=>y!==u[r]):[...o,u[r]];s(w)}else{const w=d?[]:[u[r]];s(w)}},role:"option","aria-selected":d&&!t.multiple||d&&t.multiple},u[n],u.description&&k.createElement("div",{className:`${ii}-item-description`},u.description),d&&t.showCheckMark&&k.createElement("div",{className:`${ii}-check-mark-wrapper`},k.createElement(X$,null)))});return ne(t,k.createElement("div",{className:ii,role:"listbox","aria-label":l.Selector.name},t.columns?k.createElement(zt,{columns:t.columns},c):k.createElement(ge,{wrap:!0},c)))};function P1(){return typeof BigInt=="function"}function Rv(e){return!e&&e!==0&&!Number.isNaN(e)||!String(e).trim()}function ga(e){var t=e.trim(),n=t.startsWith("-");n&&(t=t.slice(1)),t=t.replace(/(\.\d*[^0])0*$/,"$1").replace(/\.0*$/,"").replace(/^0+/,""),t.startsWith(".")&&(t="0".concat(t));var r=t||"0",i=r.split("."),o=i[0]||"0",s=i[1]||"0";o==="0"&&s==="0"&&(n=!1);var l=n?"-":"";return{negative:n,negativeStr:l,trimStr:r,integerStr:o,decimalStr:s,fullStr:"".concat(l).concat(r)}}function Ip(e){var t=String(e);return!Number.isNaN(Number(t))&&t.includes("e")}function Ys(e){var t=String(e);if(Ip(e)){var n=Number(t.slice(t.indexOf("e-")+2)),r=t.match(/\.(\d+)/);return r!=null&&r[1]&&(n+=r[1].length),n}return t.includes(".")&&Tv(t)?t.length-t.indexOf(".")-1:0}function Mv(e){var t=String(e);if(Ip(e)){if(e>Number.MAX_SAFE_INTEGER)return String(P1()?BigInt(e).toString():Number.MAX_SAFE_INTEGER);if(e<Number.MIN_SAFE_INTEGER)return String(P1()?BigInt(e).toString():Number.MIN_SAFE_INTEGER);t=e.toFixed(Ys(t))}return ga(t).fullStr}function Tv(e){return typeof e=="number"?!Number.isNaN(e):e?/^\s*-?\d+(\.\d+)?\s*$/.test(e)||/^\s*-?\d+\.\s*$/.test(e)||/^\s*-?\.\d+\s*$/.test(e):!1}var e_=function(){function e(t){if(pl(this,e),U(this,"origin",""),U(this,"negative",void 0),U(this,"integer",void 0),U(this,"decimal",void 0),U(this,"decimalLen",void 0),U(this,"empty",void 0),U(this,"nan",void 0),Rv(t)){this.empty=!0;return}if(this.origin=String(t),t==="-"||Number.isNaN(t)){this.nan=!0;return}var n=t;if(Ip(n)&&(n=Number(n)),n=typeof n=="string"?n:Mv(n),Tv(n)){var r=ga(n);this.negative=r.negative;var i=r.trimStr.split(".");this.integer=BigInt(i[0]);var o=i[1]||"0";this.decimal=BigInt(o),this.decimalLen=o.length}else this.nan=!0}return ml(e,[{key:"getMark",value:function(){return this.negative?"-":""}},{key:"getIntegerStr",value:function(){return this.integer.toString()}},{key:"getDecimalStr",value:function(){return this.decimal.toString().padStart(this.decimalLen,"0")}},{key:"alignDecimal",value:function(n){var r="".concat(this.getMark()).concat(this.getIntegerStr()).concat(this.getDecimalStr().padEnd(n,"0"));return BigInt(r)}},{key:"negate",value:function(){var n=new e(this.toString());return n.negative=!n.negative,n}},{key:"cal",value:function(n,r,i){var o=Math.max(this.getDecimalStr().length,n.getDecimalStr().length),s=this.alignDecimal(o),l=n.alignDecimal(o),c=r(s,l).toString(),u=i(o),d=ga(c),p=d.negativeStr,g=d.trimStr,w="".concat(p).concat(g.padStart(u+1,"0"));return new e("".concat(w.slice(0,-u),".").concat(w.slice(-u)))}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var r=new e(n);return r.isInvalidate()?this:this.cal(r,function(i,o){return i+o},function(i){return i})}},{key:"multi",value:function(n){var r=new e(n);return this.isInvalidate()||r.isInvalidate()?new e(NaN):this.cal(r,function(i,o){return i*o},function(i){return i*2})}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return this.nan}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toString()===(n==null?void 0:n.toString())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.isNaN()?NaN:Number(this.toString())}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":ga("".concat(this.getMark()).concat(this.getIntegerStr(),".").concat(this.getDecimalStr())).fullStr:this.origin}}]),e}(),t_=function(){function e(t){if(pl(this,e),U(this,"origin",""),U(this,"number",void 0),U(this,"empty",void 0),Rv(t)){this.empty=!0;return}this.origin=String(t),this.number=Number(t)}return ml(e,[{key:"negate",value:function(){return new e(-this.toNumber())}},{key:"add",value:function(n){if(this.isInvalidate())return new e(n);var r=Number(n);if(Number.isNaN(r))return this;var i=this.number+r;if(i>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var o=Math.max(Ys(this.number),Ys(r));return new e(i.toFixed(o))}},{key:"multi",value:function(n){var r=Number(n);if(this.isInvalidate()||Number.isNaN(r))return new e(NaN);var i=this.number*r;if(i>Number.MAX_SAFE_INTEGER)return new e(Number.MAX_SAFE_INTEGER);if(i<Number.MIN_SAFE_INTEGER)return new e(Number.MIN_SAFE_INTEGER);var o=Math.max(Ys(this.number),Ys(r));return new e(i.toFixed(o))}},{key:"isEmpty",value:function(){return this.empty}},{key:"isNaN",value:function(){return Number.isNaN(this.number)}},{key:"isInvalidate",value:function(){return this.isEmpty()||this.isNaN()}},{key:"equals",value:function(n){return this.toNumber()===(n==null?void 0:n.toNumber())}},{key:"lessEquals",value:function(n){return this.add(n.negate().toString()).toNumber()<=0}},{key:"toNumber",value:function(){return this.number}},{key:"toString",value:function(){var n=arguments.length>0&&arguments[0]!==void 0?arguments[0]:!0;return n?this.isInvalidate()?"":Mv(this.number):this.origin}}]),e}();function Cr(e){return P1()?new e_(e):new t_(e)}function Av(e,t,n){var r=arguments.length>3&&arguments[3]!==void 0?arguments[3]:!1;if(e==="")return"";var i=ga(e),o=i.negativeStr,s=i.integerStr,l=i.decimalStr,c="".concat(t).concat(l),u="".concat(o).concat(s);if(n>=0){var d=Number(l[n]);if(d>=5&&!r){var p=Cr(e).add("".concat(o,"0.").concat("0".repeat(n)).concat(10-d));return Av(p.toString(),t,n,r)}return n===0?u:"".concat(u).concat(t).concat(l.padEnd(n,"0").slice(0,n))}return c===".0"?u:"".concat(u).concat(c)}const Qi="adm-stepper",n_={step:1,disabled:!1,allowEmpty:!1};function r_(e,t){const n=oe(n_,e),{defaultValue:r=0,value:i,onChange:o,disabled:s,step:l,max:c,min:u,inputReadOnly:d,digits:p,stringMode:g,formatter:w,parser:y}=n,{locale:x}=xt();f.useImperativeHandle(t,()=>({focus:()=>{var _;(_=T.current)===null||_===void 0||_.focus()},blur:()=>{var _;(_=T.current)===null||_===void 0||_.blur()},get nativeElement(){var _,O;return(O=(_=T.current)===null||_===void 0?void 0:_.nativeElement)!==null&&O!==void 0?O:null}}));const C=_=>(p!==void 0?Av(_.toString(),".",p):_).toString(),m=_=>g?_.toString():_.toNumber(),v=_=>{if(_==="")return null;if(y)return String(y(_));const O=Cr(_);return O.isInvalidate()?null:O.toString()},h=_=>_===null?"":w?w(_):C(_),[b,j]=Vj(r,{value:i,onChange:_=>{o==null||o(_)}}),[E,$]=f.useState(()=>h(b));function F(_){if(_.isNaN())return;let O=_;if(u!==void 0){const A=Cr(u);O.lessEquals(A)&&(O=A)}if(c!==void 0){const A=Cr(c);A.lessEquals(O)&&(O=A)}p!==void 0&&(O=Cr(C(m(O)))),j(m(O))}const M=_=>{$(_);const O=v(_);O===null?n.allowEmpty?j(null):j(r):F(Cr(O))},[R,D]=f.useState(!1),T=k.useRef(null);function V(_){D(_),_&&$(b!=null?String(b):"")}f.useEffect(()=>{var _,O,A;R&&((A=(O=(_=T.current)===null||_===void 0?void 0:_.nativeElement)===null||O===void 0?void 0:O.select)===null||A===void 0||A.call(O))},[R]),f.useEffect(()=>{R||$(h(b))},[R,b,p]);const z=_=>{let O=Cr(l);_||(O=O.negate()),F(Cr(b??0).add(O.toString()))},I=()=>{z(!1)},P=()=>{z(!0)},N=()=>s?!0:b===null?!1:u!==void 0?b<=u:!1,S=()=>s?!0:b===null?!1:c!==void 0?b>=c:!1;return ne(n,k.createElement("div",{className:X(Qi,{[`${Qi}-active`]:R})},k.createElement(J,{className:`${Qi}-minus`,onClick:I,disabled:N(),fill:"none",shape:"rectangular",color:"primary","aria-label":x.Stepper.decrease},k.createElement(ak,null)),k.createElement("div",{className:`${Qi}-middle`},k.createElement(Xe,{ref:T,className:`${Qi}-input`,onFocus:_=>{var O;V(!0),(O=n.onFocus)===null||O===void 0||O.call(n,_)},value:E,onChange:_=>{s||M(_)},disabled:s,onBlur:_=>{var O;V(!1),(O=n.onBlur)===null||O===void 0||O.call(n,_)},readOnly:d,role:"spinbutton","aria-valuenow":Number(E),"aria-valuemax":Number(c),"aria-valuemin":Number(u),inputMode:"decimal"})),k.createElement(J,{className:`${Qi}-plus`,onClick:P,disabled:S(),fill:"none",shape:"rectangular",color:"primary","aria-label":x.Stepper.increase},k.createElement(KC,null))))}const Ug=f.forwardRef(r_),wr="adm-swipe-action",i_={rightActions:[],leftActions:[],closeOnTouchOutside:!0,closeOnAction:!0,stopPropagation:[]},o_=f.forwardRef((e,t)=>{const n=oe(i_,e),r=f.useRef(null),i=f.useRef(null),o=f.useRef(null);function s(m){const v=m.current;return v?v.offsetWidth:0}function l(){return s(i)}function c(){return s(o)}const[{x:u},d]=Un(()=>({x:0,config:{tension:200,friction:30}}),[]),p=f.useRef(!1),g=f.useRef(null);function w(){var m;(m=g.current)===null||m===void 0||m.call(g),p.current=!1}const y=md(m=>{var v;if(g.current=m.cancel,!m.intentional||(m.down&&(p.current=!0),!p.current))return;const[h]=m.offset;if(m.last){const b=l(),j=c();let E=h+m.velocity[0]*m.direction[0]*50;h>0?E=Math.max(0,E):h<0?E=Math.min(0,E):E=0;const $=oS([-j,0,b],E);d.start({x:$}),$!==0&&((v=e.onActionsReveal)===null||v===void 0||v.call(e,$>0?"left":"right")),window.setTimeout(()=>{p.current=!1})}else d.start({x:h,immediate:!0})},{from:()=>[u.get(),0],bounds:()=>{const m=l();return{left:-c(),right:m}},axis:"x",preventScroll:!0,pointer:{touch:!0},triggerAllEvents:!0}),x=()=>{var m;d.start({x:0}),w(),(m=n.onClose)===null||m===void 0||m.call(n)};f.useImperativeHandle(t,()=>({show:(m="right")=>{var v;m==="right"?d.start({x:-c()}):m==="left"&&d.start({x:l()}),(v=e.onActionsReveal)===null||v===void 0||v.call(e,m)},close:x})),f.useEffect(()=>{if(!n.closeOnTouchOutside)return;function m(v){if(u.get()===0)return;const h=r.current;h&&!h.contains(v.target)&&x()}return document.addEventListener("touchstart",m),()=>{document.removeEventListener("touchstart",m)}},[n.closeOnTouchOutside]);function C(m){var v,h;const b=(v=m.color)!==null&&v!==void 0?v:"light";return k.createElement(J,{key:m.key,className:`${wr}-action-button`,style:{"--background-color":(h=s_[b])!==null&&h!==void 0?h:b},onClick:j=>{var E,$;n.closeOnAction&&x(),(E=m.onClick)===null||E===void 0||E.call(m,j),($=n.onAction)===null||$===void 0||$.call(n,m,j)}},m.text)}return ne(n,k.createElement("div",Object.assign({className:wr},y(),{ref:r,onClickCapture:m=>{p.current&&(m.stopPropagation(),m.preventDefault())}}),k.createElement(Et.div,{className:`${wr}-track`,style:{x:u}},zo(n.stopPropagation,k.createElement("div",{className:`${wr}-actions ${wr}-actions-left`,ref:i},n.leftActions.map(C))),k.createElement("div",{className:`${wr}-content`,onClickCapture:m=>{u.goal!==0&&(m.preventDefault(),m.stopPropagation(),x())}},k.createElement(Et.div,{style:{pointerEvents:u.to(m=>m!==0&&u.goal!==0?"none":"auto")}},n.children)),zo(n.stopPropagation,k.createElement("div",{className:`${wr}-actions ${wr}-actions-right`,ref:o},n.rightActions.map(C))))))}),s_={light:"var(--adm-color-light)",weak:"var(--adm-color-weak)",primary:"var(--adm-color-primary)",success:"var(--adm-color-success)",warning:"var(--adm-color-warning)",danger:"var(--adm-color-danger)"},Iv=e=>ne(e,k.createElement("div",{className:"adm-swiper-item",onClick:e.onClick},e.children));function a_(e){const[t,n]=f.useState(e),r=f.useRef(t);return f.useEffect(()=>{r.current=t},[t]),[t,n,r]}function l_(e,t){const n=Object.keys(e),r=Object.keys(t),i=new Set([...n,...r]),o={};return i.forEach(s=>{const l=e[s],c=t[s];typeof l=="function"&&typeof c=="function"?o[s]=function(...u){l(...u),c(...u)}:o[s]=l||c}),o}const Mn="adm-swiper",c_={mousedown:"onMouseDown",mousemove:"onMouseMove",mouseup:"onMouseUp"},u_={defaultIndex:0,allowTouchMove:!0,autoplay:!1,autoplayInterval:3e3,loop:!1,direction:"horizontal",slideSize:100,trackOffset:0,stuckAtBoundary:!0,rubberband:!0,stopPropagation:[]};let Ul;const d_=f.forwardRef(hp((e,t)=>{const n=oe(u_,e),{direction:r,total:i,children:o,indicator:s}=n,[l]=f.useState({}),c=f.useRef(null),u=r==="vertical",d=n.slideSize/100,p=n.trackOffset/100,{validChildren:g,count:w,renderChildren:y}=f.useMemo(()=>{let C=0,m,v;return typeof o=="function"?m=o:v=k.Children.map(o,h=>!k.isValidElement(h)||h.type!==Iv?null:(C++,h)),{renderChildren:m,validChildren:v,count:C}},[o]),x=i??w;return x===0||!g&&!y?null:()=>{let C=n.loop;d*(x-1)<1&&(C=!1);const m=f.useRef(null);function v(){const K=m.current;return K?(u?K.offsetHeight:K.offsetWidth)*n.slideSize/100:0}const[h,b,j]=db(n.defaultIndex),[E,$,F]=a_(!1);function M(K){let te=0,re=x-1;return n.stuckAtBoundary&&(te+=p/d,re-=(1-d-p)/d),lr(K,te,re)}const[{position:R},D]=Un(()=>({position:M(h)*100,config:{tension:200,friction:30},onRest:()=>{if(F.current||!C)return;const K=R.get(),te=100*x,re=Pf(K,te);re!==K&&D.start({position:re,immediate:!0})}}),[x]),T=f.useRef(null);function V(){var K;(K=T.current)===null||K===void 0||K.call(T),F.current=!1}const z=md(K=>{if(T.current=K.cancel,!K.intentional||(K.first&&!Ul&&(Ul=l),Ul!==l))return;Ul=K.last?void 0:l;const te=v();if(!te)return;const re=u?1:0,ve=K.offset[re],we=K.direction[re],Pe=K.velocity[re];if($(!0),!K.last)D.start({position:ve*100/te,immediate:!0});else{const Nt=Math.floor(ve/te),Kt=Nt+1,Pt=Math.round((ve+Pe*2e3*we)/te);I(lr(Pt,Nt,Kt)),window.setTimeout(()=>{$(!1)})}},{transform:([K,te])=>[-K,-te],from:()=>{const K=v();return[R.get()/100*K,R.get()/100*K]},triggerAllEvents:!0,bounds:()=>{if(C)return{};const K=v(),te=M(0)*K,re=M(x-1)*K;return u?{top:te,bottom:re}:{left:te,right:re}},rubberband:n.rubberband,axis:u?"y":"x",preventScroll:!u,pointer:{touch:!0}});function I(K,te=!1){var re;const ve=Math.round(K),we=C?Pf(ve,x):lr(ve,0,x-1);we!==j()&&((re=n.onIndexChange)===null||re===void 0||re.call(n,we)),b(we),D.start({position:(C?ve:M(ve))*100,immediate:te})}function P(){I(Math.round(R.get()/100)+1)}function N(){I(Math.round(R.get()/100)-1)}f.useImperativeHandle(t,()=>({swipeTo:I,swipeNext:P,swipePrev:N})),Ft(()=>{const K=x-1;h>K&&I(K,!0)});const{autoplay:S,autoplayInterval:_}=n,O=()=>{c.current=window.setTimeout(()=>{S==="reverse"?N():P(),O()},_)};f.useEffect(()=>{if(!(!S||E))return O(),()=>{c.current&&window.clearTimeout(c.current)}},[S,_,E,x]);function A(K,te){let re={};return C&&(re={[u?"y":"x"]:R.to(ve=>{let we=-ve+K*100;const Pe=x*100,Nt=Pe/2;return we=Pf(we+Nt,Pe)-Nt,`${we}%`}),[u?"top":"left"]:`-${K*100}%`}),k.createElement(Et.div,{className:X(`${Mn}-slide`,{[`${Mn}-slide-active`]:h===K}),style:re,key:K},te)}function B(){if(y&&i){const te=Math.max(h-2,0),re=Math.min(h+2,i-1),ve=[];for(let we=te;we<=re;we+=1)ve.push(A(we,y(we)));return k.createElement(k.Fragment,null,k.createElement("div",{className:`${Mn}-slide-placeholder`,style:{width:`${te*100}%`}}),ve)}return k.Children.map(g,(K,te)=>A(te,K))}function G(){return C?k.createElement("div",{className:`${Mn}-track-inner`},B()):k.createElement(Et.div,{className:`${Mn}-track-inner`,style:{[u?"y":"x"]:R.to(K=>`${-K}%`)}},B())}const H={"--slide-size":`${n.slideSize}%`,"--track-offset":`${n.trackOffset}%`},W=Object.assign({},n.allowTouchMove?z():{}),Q={};for(const K of n.stopPropagation){const te=c_[K];Q[te]=function(re){re.stopPropagation()}}const ee=l_(W,Q);let fe=null;return typeof s=="function"?fe=s(x,h):s!==!1&&(fe=k.createElement("div",{className:`${Mn}-indicator`},k.createElement(U$,Object.assign({},n.indicatorProps,{total:x,current:h,direction:r})))),ne(n,k.createElement("div",{className:X(Mn,`${Mn}-${r}`),style:H},k.createElement("div",Object.assign({ref:m,className:X(`${Mn}-track`,{[`${Mn}-track-allow-touch-move`]:n.allowTouchMove}),onClickCapture:K=>{F.current&&K.stopPropagation(),V()}},ee),G()),fe))}}));function Pf(e,t){const n=e%t;return n<0?n+t:n}const Rf=Gt(d_,{Item:Iv}),f_=f.memo(e=>ne(e,k.createElement("svg",{width:"28px",height:"28px",viewBox:"0 0 28 28"},k.createElement("g",{stroke:"none",strokeWidth:"1",fill:"none",fillRule:"evenodd"},k.createElement("g",{transform:"translate(-137.000000, -840.000000)",fill:"#1576FE"},k.createElement("g",{transform:"translate(80.000000, 823.000000)"},k.createElement("g",{transform:"translate(53.000000, 13.000000)"},k.createElement("path",{d:"M17.9996753,31.5 C10.5556724,31.5 4.5,25.4443275 4.5,18.0003247 C4.5,10.5563219 10.5556724,4.5 17.9996753,4.5 C18.5355492,4.5 18.9702974,4.93474816 18.9702974,5.47062208 C18.9702974,6.006496 18.5355492,6.44124416 17.9996753,6.44124416 C11.6261524,6.44124416 6.44124416,11.6267709 6.44124416,18.0002938 C6.44124416,24.3738167 11.6261524,29.5587249 17.9996753,29.5587249 C24.3731982,29.5587249 29.5587249,24.3738167 29.5587249,18.0002938 C29.5587249,14.7964616 28.2778291,11.8169616 25.9523687,9.61220279 C25.5637302,9.24317094 25.5473089,8.62893223 25.9157222,8.23967523 C26.2841356,7.84976878 26.8989928,7.83461537 27.2882498,8.20302872 C30.0042351,10.7787368 31.5,14.2580826 31.5,18.0002938 C31.5,25.4443275 25.4436781,31.5 17.9996753,31.5 Z"})))))))),oi="adm-switch",h_={defaultChecked:!1},va=e=>{const t=oe(h_,e),n=t.disabled||t.loading||!1,[r,i]=f.useState(!1),{locale:o}=xt(),[s,l]=Ot({value:t.checked,defaultValue:t.defaultChecked,onChange:t.onChange});function c(){return $n(this,void 0,void 0,function*(){if(n||t.loading||r)return;const u=!s;if(t.beforeChange){i(!0);try{yield t.beforeChange(u),i(!1)}catch(p){throw i(!1),p}}const d=l(u);if(F6(d)){i(!0);try{yield d,i(!1)}catch(p){throw i(!1),p}}})}return ne(t,k.createElement("div",{onClick:c,className:X(oi,{[`${oi}-checked`]:s,[`${oi}-disabled`]:n||r}),role:"switch","aria-label":o.Switch.name,"aria-checked":s,"aria-disabled":n},k.createElement("div",{className:`${oi}-checkbox`},k.createElement("div",{className:`${oi}-handle`},(t.loading||r)&&k.createElement(f_,{className:`${oi}-spin-icon`})),k.createElement("div",{className:`${oi}-inner`},s?t.checkedText:t.uncheckedText))))},p_=()=>null,Xn="adm-tab-bar",m_={safeArea:!1},g_=e=>{var t;const n=oe(m_,e);let r=null;const i=[];xp(n.children,(l,c)=>{if(!f.isValidElement(l))return;const u=l.key;typeof u=="string"&&(c===0&&(r=u),i.push(l))});const[o,s]=Ot({value:n.activeKey,defaultValue:(t=n.defaultActiveKey)!==null&&t!==void 0?t:r,onChange:l=>{var c;l!==null&&((c=n.onChange)===null||c===void 0||c.call(n,l))}});return ne(n,k.createElement("div",{className:Xn},k.createElement("div",{className:`${Xn}-wrap`},i.map(l=>{const c=l.key===o;function u(){const d=l.props.icon&&k.createElement("div",{className:`${Xn}-item-icon`},typeof l.props.icon=="function"?l.props.icon(c):l.props.icon),p=l.props.title&&k.createElement("div",{className:X(`${Xn}-item-title`,!!d&&`${Xn}-item-title-with-icon`)},typeof l.props.title=="function"?l.props.title(c):l.props.title);return d?k.createElement(k.Fragment,null,k.createElement(Qa,{content:l.props.badge,className:`${Xn}-icon-badge`},d),p):p?k.createElement(Qa,{content:l.props.badge,className:`${Xn}-title-badge`},p):null}return ne(l.props,k.createElement("div",{key:l.key,onClick:()=>{var d,p;const{key:g}=l;g!=null&&(s(g.toString()),(p=(d=l.props).onClick)===null||p===void 0||p.call(d))},className:X(`${Xn}-item`,{[`${Xn}-item-active`]:c})},u()))})),n.safeArea&&k.createElement(E6,{position:"bottom"})))},Hg=Gt(g_,{Item:p_}),qg="adm-tag",v_={default:"var(--adm-color-text-secondary, #666666)",primary:"var(--adm-color-primary, #1677ff)",success:"var(--adm-color-success, #00b578)",warning:"var(--adm-color-warning, #ff8f1f)",danger:"var(--adm-color-danger, #ff3141)"},x_={color:"default",fill:"solid",round:!1},ut=e=>{var t;const n=oe(x_,e),r=(t=v_[n.color])!==null&&t!==void 0?t:n.color,i={"--border-color":r,"--text-color":n.fill==="outline"?r:"#ffffff","--background-color":n.fill==="outline"?"transparent":r};return ne(n,k.createElement("span",{style:i,onClick:n.onClick,className:X(qg,{[`${qg}-round`]:n.round})},n.children))},_s="adm-text-area",zv={rows:2,showCount:!1,autoSize:!1,defaultValue:""},Dv=f.forwardRef((e,t)=>{const n=oe(zv,e),{autoSize:r,showCount:i,maxLength:o}=n,[s,l]=Ot(Object.assign(Object.assign({},n),{value:n.value===null?"":n.value}));n.value;const c=f.useRef(null),u=f.useRef("auto"),d=f.useRef(null),p=Fv({onEnterPress:n.onEnterPress,onKeyDown:n.onKeyDown,nativeInputRef:c,enterKeyHint:n.enterKeyHint});f.useImperativeHandle(t,()=>({clear:()=>{l("")},focus:()=>{var C;(C=c.current)===null||C===void 0||C.focus()},blur:()=>{var C;(C=c.current)===null||C===void 0||C.blur()},get nativeElement(){return c.current}})),Ft(()=>{if(!r)return;const C=c.current,m=d.current;if(!C||(C.style.height=u.current,!m))return;let v=m.scrollHeight;if(typeof r=="object"){const h=window.getComputedStyle(C),b=parseFloat(h.lineHeight);r.minRows&&(v=Math.max(v,r.minRows*b)),r.maxRows&&(v=Math.min(v,r.maxRows*b))}u.current=`${v}px`,C.style.height=`${v}px`},[s,r]);const g=f.useRef(!1);let w;const y=Sf(s).length;typeof i=="function"?w=i(y,o):i&&(w=k.createElement("div",{className:`${_s}-count`},o===void 0?y:y+"/"+o));let x=n.rows;return typeof r=="object"&&(r.maxRows&&x>r.maxRows&&(x=r.maxRows),r.minRows&&x<r.minRows&&(x=r.minRows)),ne(n,k.createElement("div",{className:_s},k.createElement("textarea",{ref:c,className:`${_s}-element`,rows:x,value:s,placeholder:n.placeholder,onChange:C=>{let m=C.target.value;o&&!g.current&&(m=Sf(m).slice(0,o).join("")),l(m)},id:n.id,onCompositionStart:C=>{var m;g.current=!0,(m=n.onCompositionStart)===null||m===void 0||m.call(n,C)},onCompositionEnd:C=>{var m;if(g.current=!1,o){const v=C.target.value;l(Sf(v).slice(0,o).join(""))}(m=n.onCompositionEnd)===null||m===void 0||m.call(n,C)},autoComplete:n.autoComplete,autoFocus:n.autoFocus,disabled:n.disabled,readOnly:n.readOnly,name:n.name,onFocus:n.onFocus,onBlur:n.onBlur,onClick:n.onClick,onKeyDown:p}),w,r&&k.createElement("textarea",{ref:d,className:`${_s}-element ${_s}-element-hidden`,value:s,rows:x,"aria-hidden":!0,readOnly:!0})))});Dv.defaultProps=zv;const Jn="adm-toast",y_={maskClickable:!0,stopPropagation:["click"]},w_=e=>{const t=oe(y_,e),{maskClickable:n,content:r,icon:i,position:o}=t,s=f.useMemo(()=>{if(i==null)return null;switch(i){case"success":return k.createElement(ha,{className:`${Jn}-icon-success`});case"fail":return k.createElement(dl,{className:`${Jn}-icon-fail`});case"loading":return k.createElement(q6,{color:"white",className:`${Jn}-loading`});default:return i}},[i]),l=f.useMemo(()=>{switch(o){case"top":return"20%";case"bottom":return"80%";default:return"50%"}},[o]);return k.createElement(sp,{visible:t.visible,destroyOnClose:!0,opacity:0,disableBodyScroll:!n,getContainer:t.getContainer,afterClose:t.afterClose,style:Object.assign({pointerEvents:n?"none":"auto"},t.maskStyle),className:X(`${Jn}-mask`,t.maskClassName),stopPropagation:t.stopPropagation},k.createElement("div",{className:X(`${Jn}-wrap`)},k.createElement("div",{style:{top:l},className:X(`${Jn}-main`,i?`${Jn}-main-icon`:`${Jn}-main-text`)},s&&k.createElement("div",{className:`${Jn}-icon`},s),k.createElement(Za,null,r))))};let At=null,Mf=null;const Ic={duration:2e3,position:"center",maskClickable:!0},b_=e=>k.createElement(w_,Object.assign({},e));function C_(e){var t;const n=oe(Ic,typeof e=="string"?{content:e}:e),r=k.createElement(b_,Object.assign({},n,{onClose:()=>{At=null}}));return At?!((t=At.isRendered)===null||t===void 0)&&t.call(At)?At.replace(r):(At.close(),At=Eu(r)):At=Eu(r),Mf&&window.clearTimeout(Mf),n.duration!==0&&(Mf=window.setTimeout(()=>{Bv()},n.duration)),At}function Bv(){At==null||At.close(),At=null}function k_(e){e.duration!==void 0&&(Ic.duration=e.duration),e.position!==void 0&&(Ic.position=e.position),e.maskClickable!==void 0&&(Ic.maskClickable=e.maskClickable)}const de={show:C_,clear:Bv,config:k_};var St=function(){return St=Object.assign||function(t){for(var n,r=1,i=arguments.length;r<i;r++){n=arguments[r];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(t[o]=n[o])}return t},St.apply(this,arguments)};function Ja(e,t,n){if(n||arguments.length===2)for(var r=0,i=t.length,o;r<i;r++)(o||!(r in t))&&(o||(o=Array.prototype.slice.call(t,0,r)),o[r]=t[r]);return e.concat(o||Array.prototype.slice.call(t))}var _e="-ms-",xa="-moz-",ye="-webkit-",Vv="comm",Od="rule",zp="decl",j_="@import",Wv="@keyframes",E_="@layer",Uv=Math.abs,Dp=String.fromCharCode,R1=Object.assign;function S_(e,t){return Ke(e,0)^45?(((t<<2^Ke(e,0))<<2^Ke(e,1))<<2^Ke(e,2))<<2^Ke(e,3):0}function Hv(e){return e.trim()}function rr(e,t){return(e=t.exec(e))?e[0]:e}function se(e,t,n){return e.replace(t,n)}function zc(e,t,n){return e.indexOf(t,n)}function Ke(e,t){return e.charCodeAt(t)|0}function Uo(e,t,n){return e.slice(t,n)}function zn(e){return e.length}function qv(e){return e.length}function Xs(e,t){return t.push(e),e}function L_(e,t){return e.map(t).join("")}function Zg(e,t){return e.filter(function(n){return!rr(n,t)})}var Nd=1,Ho=1,Zv=0,fn=0,We=0,as="";function Pd(e,t,n,r,i,o,s,l){return{value:e,root:t,parent:n,type:r,props:i,children:o,line:Nd,column:Ho,length:s,return:"",siblings:l}}function kr(e,t){return R1(Pd("",null,null,"",null,null,0,e.siblings),e,{length:-e.length},t)}function Gi(e){for(;e.root;)e=kr(e.root,{children:[e]});Xs(e,e.siblings)}function $_(){return We}function __(){return We=fn>0?Ke(as,--fn):0,Ho--,We===10&&(Ho=1,Nd--),We}function Sn(){return We=fn<Zv?Ke(as,fn++):0,Ho++,We===10&&(Ho=1,Nd++),We}function Ci(){return Ke(as,fn)}function Dc(){return fn}function Rd(e,t){return Uo(as,e,t)}function M1(e){switch(e){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function F_(e){return Nd=Ho=1,Zv=zn(as=e),fn=0,[]}function O_(e){return as="",e}function Tf(e){return Hv(Rd(fn-1,T1(e===91?e+2:e===40?e+1:e)))}function N_(e){for(;(We=Ci())&&We<33;)Sn();return M1(e)>2||M1(We)>3?"":" "}function P_(e,t){for(;--t&&Sn()&&!(We<48||We>102||We>57&&We<65||We>70&&We<97););return Rd(e,Dc()+(t<6&&Ci()==32&&Sn()==32))}function T1(e){for(;Sn();)switch(We){case e:return fn;case 34:case 39:e!==34&&e!==39&&T1(We);break;case 40:e===41&&T1(e);break;case 92:Sn();break}return fn}function R_(e,t){for(;Sn()&&e+We!==57;)if(e+We===84&&Ci()===47)break;return"/*"+Rd(t,fn-1)+"*"+Dp(e===47?e:Sn())}function M_(e){for(;!M1(Ci());)Sn();return Rd(e,fn)}function T_(e){return O_(Bc("",null,null,null,[""],e=F_(e),0,[0],e))}function Bc(e,t,n,r,i,o,s,l,c){for(var u=0,d=0,p=s,g=0,w=0,y=0,x=1,C=1,m=1,v=0,h="",b=i,j=o,E=r,$=h;C;)switch(y=v,v=Sn()){case 40:if(y!=108&&Ke($,p-1)==58){zc($+=se(Tf(v),"&","&\f"),"&\f",Uv(u?l[u-1]:0))!=-1&&(m=-1);break}case 34:case 39:case 91:$+=Tf(v);break;case 9:case 10:case 13:case 32:$+=N_(y);break;case 92:$+=P_(Dc()-1,7);continue;case 47:switch(Ci()){case 42:case 47:Xs(A_(R_(Sn(),Dc()),t,n,c),c);break;default:$+="/"}break;case 123*x:l[u++]=zn($)*m;case 125*x:case 59:case 0:switch(v){case 0:case 125:C=0;case 59+d:m==-1&&($=se($,/\f/g,"")),w>0&&zn($)-p&&Xs(w>32?Gg($+";",r,n,p-1,c):Gg(se($," ","")+";",r,n,p-2,c),c);break;case 59:$+=";";default:if(Xs(E=Qg($,t,n,u,d,i,l,h,b=[],j=[],p,o),o),v===123)if(d===0)Bc($,t,E,E,b,o,p,l,j);else switch(g===99&&Ke($,3)===110?100:g){case 100:case 108:case 109:case 115:Bc(e,E,E,r&&Xs(Qg(e,E,E,0,0,i,l,h,i,b=[],p,j),j),i,j,p,l,r?b:j);break;default:Bc($,E,E,E,[""],j,0,l,j)}}u=d=w=0,x=m=1,h=$="",p=s;break;case 58:p=1+zn($),w=y;default:if(x<1){if(v==123)--x;else if(v==125&&x++==0&&__()==125)continue}switch($+=Dp(v),v*x){case 38:m=d>0?1:($+="\f",-1);break;case 44:l[u++]=(zn($)-1)*m,m=1;break;case 64:Ci()===45&&($+=Tf(Sn())),g=Ci(),d=p=zn(h=$+=M_(Dc())),v++;break;case 45:y===45&&zn($)==2&&(x=0)}}return o}function Qg(e,t,n,r,i,o,s,l,c,u,d,p){for(var g=i-1,w=i===0?o:[""],y=qv(w),x=0,C=0,m=0;x<r;++x)for(var v=0,h=Uo(e,g+1,g=Uv(C=s[x])),b=e;v<y;++v)(b=Hv(C>0?w[v]+" "+h:se(h,/&\f/g,w[v])))&&(c[m++]=b);return Pd(e,t,n,i===0?Od:l,c,u,d,p)}function A_(e,t,n,r){return Pd(e,t,n,Vv,Dp($_()),Uo(e,2,-2),0,r)}function Gg(e,t,n,r,i){return Pd(e,t,n,zp,Uo(e,0,r),Uo(e,r+1,-1),r,i)}function Qv(e,t,n){switch(S_(e,t)){case 5103:return ye+"print-"+e+e;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return ye+e+e;case 4789:return xa+e+e;case 5349:case 4246:case 4810:case 6968:case 2756:return ye+e+xa+e+_e+e+e;case 5936:switch(Ke(e,t+11)){case 114:return ye+e+_e+se(e,/[svh]\w+-[tblr]{2}/,"tb")+e;case 108:return ye+e+_e+se(e,/[svh]\w+-[tblr]{2}/,"tb-rl")+e;case 45:return ye+e+_e+se(e,/[svh]\w+-[tblr]{2}/,"lr")+e}case 6828:case 4268:case 2903:return ye+e+_e+e+e;case 6165:return ye+e+_e+"flex-"+e+e;case 5187:return ye+e+se(e,/(\w+).+(:[^]+)/,ye+"box-$1$2"+_e+"flex-$1$2")+e;case 5443:return ye+e+_e+"flex-item-"+se(e,/flex-|-self/g,"")+(rr(e,/flex-|baseline/)?"":_e+"grid-row-"+se(e,/flex-|-self/g,""))+e;case 4675:return ye+e+_e+"flex-line-pack"+se(e,/align-content|flex-|-self/g,"")+e;case 5548:return ye+e+_e+se(e,"shrink","negative")+e;case 5292:return ye+e+_e+se(e,"basis","preferred-size")+e;case 6060:return ye+"box-"+se(e,"-grow","")+ye+e+_e+se(e,"grow","positive")+e;case 4554:return ye+se(e,/([^-])(transform)/g,"$1"+ye+"$2")+e;case 6187:return se(se(se(e,/(zoom-|grab)/,ye+"$1"),/(image-set)/,ye+"$1"),e,"")+e;case 5495:case 3959:return se(e,/(image-set\([^]*)/,ye+"$1$`$1");case 4968:return se(se(e,/(.+:)(flex-)?(.*)/,ye+"box-pack:$3"+_e+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+ye+e+e;case 4200:if(!rr(e,/flex-|baseline/))return _e+"grid-column-align"+Uo(e,t)+e;break;case 2592:case 3360:return _e+se(e,"template-","")+e;case 4384:case 3616:return n&&n.some(function(r,i){return t=i,rr(r.props,/grid-\w+-end/)})?~zc(e+(n=n[t].value),"span",0)?e:_e+se(e,"-start","")+e+_e+"grid-row-span:"+(~zc(n,"span",0)?rr(n,/\d+/):+rr(n,/\d+/)-+rr(e,/\d+/))+";":_e+se(e,"-start","")+e;case 4896:case 4128:return n&&n.some(function(r){return rr(r.props,/grid-\w+-start/)})?e:_e+se(se(e,"-end","-span"),"span ","")+e;case 4095:case 3583:case 4068:case 2532:return se(e,/(.+)-inline(.+)/,ye+"$1$2")+e;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(zn(e)-1-t>6)switch(Ke(e,t+1)){case 109:if(Ke(e,t+4)!==45)break;case 102:return se(e,/(.+:)(.+)-([^]+)/,"$1"+ye+"$2-$3$1"+xa+(Ke(e,t+3)==108?"$3":"$2-$3"))+e;case 115:return~zc(e,"stretch",0)?Qv(se(e,"stretch","fill-available"),t,n)+e:e}break;case 5152:case 5920:return se(e,/(.+?):(\d+)(\s*\/\s*(span)?\s*(\d+))?(.*)/,function(r,i,o,s,l,c,u){return _e+i+":"+o+u+(s?_e+i+"-span:"+(l?c:+c-+o)+u:"")+e});case 4949:if(Ke(e,t+6)===121)return se(e,":",":"+ye)+e;break;case 6444:switch(Ke(e,Ke(e,14)===45?18:11)){case 120:return se(e,/(.+:)([^;\s!]+)(;|(\s+)?!.+)?/,"$1"+ye+(Ke(e,14)===45?"inline-":"")+"box$3$1"+ye+"$2$3$1"+_e+"$2box$3")+e;case 100:return se(e,":",":"+_e)+e}break;case 5719:case 2647:case 2135:case 3927:case 2391:return se(e,"scroll-","scroll-snap-")+e}return e}function Ru(e,t){for(var n="",r=0;r<e.length;r++)n+=t(e[r],r,e,t)||"";return n}function I_(e,t,n,r){switch(e.type){case E_:if(e.children.length)break;case j_:case zp:return e.return=e.return||e.value;case Vv:return"";case Wv:return e.return=e.value+"{"+Ru(e.children,r)+"}";case Od:if(!zn(e.value=e.props.join(",")))return""}return zn(n=Ru(e.children,r))?e.return=e.value+"{"+n+"}":""}function z_(e){var t=qv(e);return function(n,r,i,o){for(var s="",l=0;l<t;l++)s+=e[l](n,r,i,o)||"";return s}}function D_(e){return function(t){t.root||(t=t.return)&&e(t)}}function B_(e,t,n,r){if(e.length>-1&&!e.return)switch(e.type){case zp:e.return=Qv(e.value,e.length,n);return;case Wv:return Ru([kr(e,{value:se(e.value,"@","@"+ye)})],r);case Od:if(e.length)return L_(n=e.props,function(i){switch(rr(i,r=/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":Gi(kr(e,{props:[se(i,/:(read-\w+)/,":"+xa+"$1")]})),Gi(kr(e,{props:[i]})),R1(e,{props:Zg(n,r)});break;case"::placeholder":Gi(kr(e,{props:[se(i,/:(plac\w+)/,":"+ye+"input-$1")]})),Gi(kr(e,{props:[se(i,/:(plac\w+)/,":"+xa+"$1")]})),Gi(kr(e,{props:[se(i,/:(plac\w+)/,_e+"input-$1")]})),Gi(kr(e,{props:[i]})),R1(e,{props:Zg(n,r)});break}return""})}}var V_={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Tt={},qo=typeof process<"u"&&Tt!==void 0&&(Tt.REACT_APP_SC_ATTR||Tt.SC_ATTR)||"data-styled",Gv="active",Kv="data-styled-version",Md="6.1.16",Bp=`/*!sc*/
`,Mu=typeof window<"u"&&"HTMLElement"in window,W_=!!(typeof SC_DISABLE_SPEEDY=="boolean"?SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==void 0&&Tt.REACT_APP_SC_DISABLE_SPEEDY!==""?Tt.REACT_APP_SC_DISABLE_SPEEDY!=="false"&&Tt.REACT_APP_SC_DISABLE_SPEEDY:typeof process<"u"&&Tt!==void 0&&Tt.SC_DISABLE_SPEEDY!==void 0&&Tt.SC_DISABLE_SPEEDY!==""&&Tt.SC_DISABLE_SPEEDY!=="false"&&Tt.SC_DISABLE_SPEEDY),Td=Object.freeze([]),Zo=Object.freeze({});function U_(e,t,n){return n===void 0&&(n=Zo),e.theme!==n.theme&&e.theme||t||n.theme}var Yv=new Set(["a","abbr","address","area","article","aside","audio","b","base","bdi","bdo","big","blockquote","body","br","button","canvas","caption","cite","code","col","colgroup","data","datalist","dd","del","details","dfn","dialog","div","dl","dt","em","embed","fieldset","figcaption","figure","footer","form","h1","h2","h3","h4","h5","h6","header","hgroup","hr","html","i","iframe","img","input","ins","kbd","keygen","label","legend","li","link","main","map","mark","menu","menuitem","meta","meter","nav","noscript","object","ol","optgroup","option","output","p","param","picture","pre","progress","q","rp","rt","ruby","s","samp","script","section","select","small","source","span","strong","style","sub","summary","sup","table","tbody","td","textarea","tfoot","th","thead","time","tr","track","u","ul","use","var","video","wbr","circle","clipPath","defs","ellipse","foreignObject","g","image","line","linearGradient","marker","mask","path","pattern","polygon","polyline","radialGradient","rect","stop","svg","text","tspan"]),H_=/[!"#$%&'()*+,./:;<=>?@[\\\]^`{|}~-]+/g,q_=/(^-|-$)/g;function Kg(e){return e.replace(H_,"-").replace(q_,"")}var Z_=/(a)(d)/gi,Hl=52,Yg=function(e){return String.fromCharCode(e+(e>25?39:97))};function A1(e){var t,n="";for(t=Math.abs(e);t>Hl;t=t/Hl|0)n=Yg(t%Hl)+n;return(Yg(t%Hl)+n).replace(Z_,"$1-$2")}var Af,Xv=5381,vo=function(e,t){for(var n=t.length;n;)e=33*e^t.charCodeAt(--n);return e},Jv=function(e){return vo(Xv,e)};function e8(e){return A1(Jv(e)>>>0)}function Q_(e){return e.displayName||e.name||"Component"}function If(e){return typeof e=="string"&&!0}var t8=typeof Symbol=="function"&&Symbol.for,n8=t8?Symbol.for("react.memo"):60115,G_=t8?Symbol.for("react.forward_ref"):60112,K_={childContextTypes:!0,contextType:!0,contextTypes:!0,defaultProps:!0,displayName:!0,getDefaultProps:!0,getDerivedStateFromError:!0,getDerivedStateFromProps:!0,mixins:!0,propTypes:!0,type:!0},Y_={name:!0,length:!0,prototype:!0,caller:!0,callee:!0,arguments:!0,arity:!0},r8={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},X_=((Af={})[G_]={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},Af[n8]=r8,Af);function Xg(e){return("type"in(t=e)&&t.type.$$typeof)===n8?r8:"$$typeof"in e?X_[e.$$typeof]:K_;var t}var J_=Object.defineProperty,eF=Object.getOwnPropertyNames,Jg=Object.getOwnPropertySymbols,tF=Object.getOwnPropertyDescriptor,nF=Object.getPrototypeOf,e3=Object.prototype;function i8(e,t,n){if(typeof t!="string"){if(e3){var r=nF(t);r&&r!==e3&&i8(e,r,n)}var i=eF(t);Jg&&(i=i.concat(Jg(t)));for(var o=Xg(e),s=Xg(t),l=0;l<i.length;++l){var c=i[l];if(!(c in Y_||n&&n[c]||s&&c in s||o&&c in o)){var u=tF(t,c);try{J_(e,c,u)}catch{}}}}return e}function Qo(e){return typeof e=="function"}function Vp(e){return typeof e=="object"&&"styledComponentId"in e}function vi(e,t){return e&&t?"".concat(e," ").concat(t):e||t||""}function I1(e,t){if(e.length===0)return"";for(var n=e[0],r=1;r<e.length;r++)n+=e[r];return n}function el(e){return e!==null&&typeof e=="object"&&e.constructor.name===Object.name&&!("props"in e&&e.$$typeof)}function z1(e,t,n){if(n===void 0&&(n=!1),!n&&!el(e)&&!Array.isArray(e))return t;if(Array.isArray(t))for(var r=0;r<t.length;r++)e[r]=z1(e[r],t[r]);else if(el(t))for(var r in t)e[r]=z1(e[r],t[r]);return e}function Wp(e,t){Object.defineProperty(e,"toString",{value:t})}function wl(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];return new Error("An error occurred. See https://github.com/styled-components/styled-components/blob/main/packages/styled-components/src/utils/errors.md#".concat(e," for more information.").concat(t.length>0?" Args: ".concat(t.join(", ")):""))}var rF=function(){function e(t){this.groupSizes=new Uint32Array(512),this.length=512,this.tag=t}return e.prototype.indexOfGroup=function(t){for(var n=0,r=0;r<t;r++)n+=this.groupSizes[r];return n},e.prototype.insertRules=function(t,n){if(t>=this.groupSizes.length){for(var r=this.groupSizes,i=r.length,o=i;t>=o;)if((o<<=1)<0)throw wl(16,"".concat(t));this.groupSizes=new Uint32Array(o),this.groupSizes.set(r),this.length=o;for(var s=i;s<o;s++)this.groupSizes[s]=0}for(var l=this.indexOfGroup(t+1),c=(s=0,n.length);s<c;s++)this.tag.insertRule(l,n[s])&&(this.groupSizes[t]++,l++)},e.prototype.clearGroup=function(t){if(t<this.length){var n=this.groupSizes[t],r=this.indexOfGroup(t),i=r+n;this.groupSizes[t]=0;for(var o=r;o<i;o++)this.tag.deleteRule(r)}},e.prototype.getGroup=function(t){var n="";if(t>=this.length||this.groupSizes[t]===0)return n;for(var r=this.groupSizes[t],i=this.indexOfGroup(t),o=i+r,s=i;s<o;s++)n+="".concat(this.tag.getRule(s)).concat(Bp);return n},e}(),Vc=new Map,Tu=new Map,Wc=1,ql=function(e){if(Vc.has(e))return Vc.get(e);for(;Tu.has(Wc);)Wc++;var t=Wc++;return Vc.set(e,t),Tu.set(t,e),t},iF=function(e,t){Wc=t+1,Vc.set(e,t),Tu.set(t,e)},oF="style[".concat(qo,"][").concat(Kv,'="').concat(Md,'"]'),sF=new RegExp("^".concat(qo,'\\.g(\\d+)\\[id="([\\w\\d-]+)"\\].*?"([^"]*)')),aF=function(e,t,n){for(var r,i=n.split(","),o=0,s=i.length;o<s;o++)(r=i[o])&&e.registerName(t,r)},lF=function(e,t){for(var n,r=((n=t.textContent)!==null&&n!==void 0?n:"").split(Bp),i=[],o=0,s=r.length;o<s;o++){var l=r[o].trim();if(l){var c=l.match(sF);if(c){var u=0|parseInt(c[1],10),d=c[2];u!==0&&(iF(d,u),aF(e,d,c[3]),e.getTag().insertRules(u,i)),i.length=0}else i.push(l)}}},t3=function(e){for(var t=document.querySelectorAll(oF),n=0,r=t.length;n<r;n++){var i=t[n];i&&i.getAttribute(qo)!==Gv&&(lF(e,i),i.parentNode&&i.parentNode.removeChild(i))}};function cF(){return typeof __webpack_nonce__<"u"?__webpack_nonce__:null}var o8=function(e){var t=document.head,n=e||t,r=document.createElement("style"),i=function(l){var c=Array.from(l.querySelectorAll("style[".concat(qo,"]")));return c[c.length-1]}(n),o=i!==void 0?i.nextSibling:null;r.setAttribute(qo,Gv),r.setAttribute(Kv,Md);var s=cF();return s&&r.setAttribute("nonce",s),n.insertBefore(r,o),r},uF=function(){function e(t){this.element=o8(t),this.element.appendChild(document.createTextNode("")),this.sheet=function(n){if(n.sheet)return n.sheet;for(var r=document.styleSheets,i=0,o=r.length;i<o;i++){var s=r[i];if(s.ownerNode===n)return s}throw wl(17)}(this.element),this.length=0}return e.prototype.insertRule=function(t,n){try{return this.sheet.insertRule(n,t),this.length++,!0}catch{return!1}},e.prototype.deleteRule=function(t){this.sheet.deleteRule(t),this.length--},e.prototype.getRule=function(t){var n=this.sheet.cssRules[t];return n&&n.cssText?n.cssText:""},e}(),dF=function(){function e(t){this.element=o8(t),this.nodes=this.element.childNodes,this.length=0}return e.prototype.insertRule=function(t,n){if(t<=this.length&&t>=0){var r=document.createTextNode(n);return this.element.insertBefore(r,this.nodes[t]||null),this.length++,!0}return!1},e.prototype.deleteRule=function(t){this.element.removeChild(this.nodes[t]),this.length--},e.prototype.getRule=function(t){return t<this.length?this.nodes[t].textContent:""},e}(),fF=function(){function e(t){this.rules=[],this.length=0}return e.prototype.insertRule=function(t,n){return t<=this.length&&(this.rules.splice(t,0,n),this.length++,!0)},e.prototype.deleteRule=function(t){this.rules.splice(t,1),this.length--},e.prototype.getRule=function(t){return t<this.length?this.rules[t]:""},e}(),n3=Mu,hF={isServer:!Mu,useCSSOMInjection:!W_},s8=function(){function e(t,n,r){t===void 0&&(t=Zo),n===void 0&&(n={});var i=this;this.options=St(St({},hF),t),this.gs=n,this.names=new Map(r),this.server=!!t.isServer,!this.server&&Mu&&n3&&(n3=!1,t3(this)),Wp(this,function(){return function(o){for(var s=o.getTag(),l=s.length,c="",u=function(p){var g=function(m){return Tu.get(m)}(p);if(g===void 0)return"continue";var w=o.names.get(g),y=s.getGroup(p);if(w===void 0||!w.size||y.length===0)return"continue";var x="".concat(qo,".g").concat(p,'[id="').concat(g,'"]'),C="";w!==void 0&&w.forEach(function(m){m.length>0&&(C+="".concat(m,","))}),c+="".concat(y).concat(x,'{content:"').concat(C,'"}').concat(Bp)},d=0;d<l;d++)u(d);return c}(i)})}return e.registerId=function(t){return ql(t)},e.prototype.rehydrate=function(){!this.server&&Mu&&t3(this)},e.prototype.reconstructWithOptions=function(t,n){return n===void 0&&(n=!0),new e(St(St({},this.options),t),this.gs,n&&this.names||void 0)},e.prototype.allocateGSInstance=function(t){return this.gs[t]=(this.gs[t]||0)+1},e.prototype.getTag=function(){return this.tag||(this.tag=(t=function(n){var r=n.useCSSOMInjection,i=n.target;return n.isServer?new fF(i):r?new uF(i):new dF(i)}(this.options),new rF(t)));var t},e.prototype.hasNameForId=function(t,n){return this.names.has(t)&&this.names.get(t).has(n)},e.prototype.registerName=function(t,n){if(ql(t),this.names.has(t))this.names.get(t).add(n);else{var r=new Set;r.add(n),this.names.set(t,r)}},e.prototype.insertRules=function(t,n,r){this.registerName(t,n),this.getTag().insertRules(ql(t),r)},e.prototype.clearNames=function(t){this.names.has(t)&&this.names.get(t).clear()},e.prototype.clearRules=function(t){this.getTag().clearGroup(ql(t)),this.clearNames(t)},e.prototype.clearTag=function(){this.tag=void 0},e}(),pF=/&/g,mF=/^\s*\/\/.*$/gm;function a8(e,t){return e.map(function(n){return n.type==="rule"&&(n.value="".concat(t," ").concat(n.value),n.value=n.value.replaceAll(",",",".concat(t," ")),n.props=n.props.map(function(r){return"".concat(t," ").concat(r)})),Array.isArray(n.children)&&n.type!=="@keyframes"&&(n.children=a8(n.children,t)),n})}function gF(e){var t,n,r,i=Zo,o=i.options,s=o===void 0?Zo:o,l=i.plugins,c=l===void 0?Td:l,u=function(g,w,y){return y.startsWith(n)&&y.endsWith(n)&&y.replaceAll(n,"").length>0?".".concat(t):g},d=c.slice();d.push(function(g){g.type===Od&&g.value.includes("&")&&(g.props[0]=g.props[0].replace(pF,n).replace(r,u))}),s.prefix&&d.push(B_),d.push(I_);var p=function(g,w,y,x){w===void 0&&(w=""),y===void 0&&(y=""),x===void 0&&(x="&"),t=x,n=w,r=new RegExp("\\".concat(n,"\\b"),"g");var C=g.replace(mF,""),m=T_(y||w?"".concat(y," ").concat(w," { ").concat(C," }"):C);s.namespace&&(m=a8(m,s.namespace));var v=[];return Ru(m,z_(d.concat(D_(function(h){return v.push(h)})))),v};return p.hash=c.length?c.reduce(function(g,w){return w.name||wl(15),vo(g,w.name)},Xv).toString():"",p}var vF=new s8,D1=gF(),l8=k.createContext({shouldForwardProp:void 0,styleSheet:vF,stylis:D1});l8.Consumer;k.createContext(void 0);function r3(){return f.useContext(l8)}var c8=function(){function e(t,n){var r=this;this.inject=function(i,o){o===void 0&&(o=D1);var s=r.name+o.hash;i.hasNameForId(r.id,s)||i.insertRules(r.id,s,o(r.rules,s,"@keyframes"))},this.name=t,this.id="sc-keyframes-".concat(t),this.rules=n,Wp(this,function(){throw wl(12,String(r.name))})}return e.prototype.getName=function(t){return t===void 0&&(t=D1),this.name+t.hash},e}(),xF=function(e){return e>="A"&&e<="Z"};function i3(e){for(var t="",n=0;n<e.length;n++){var r=e[n];if(n===1&&r==="-"&&e[0]==="-")return e;xF(r)?t+="-"+r.toLowerCase():t+=r}return t.startsWith("ms-")?"-"+t:t}var u8=function(e){return e==null||e===!1||e===""},d8=function(e){var t,n,r=[];for(var i in e){var o=e[i];e.hasOwnProperty(i)&&!u8(o)&&(Array.isArray(o)&&o.isCss||Qo(o)?r.push("".concat(i3(i),":"),o,";"):el(o)?r.push.apply(r,Ja(Ja(["".concat(i," {")],d8(o),!1),["}"],!1)):r.push("".concat(i3(i),": ").concat((t=i,(n=o)==null||typeof n=="boolean"||n===""?"":typeof n!="number"||n===0||t in V_||t.startsWith("--")?String(n).trim():"".concat(n,"px")),";")))}return r};function ki(e,t,n,r){if(u8(e))return[];if(Vp(e))return[".".concat(e.styledComponentId)];if(Qo(e)){if(!Qo(o=e)||o.prototype&&o.prototype.isReactComponent||!t)return[e];var i=e(t);return ki(i,t,n,r)}var o;return e instanceof c8?n?(e.inject(n,r),[e.getName(r)]):[e]:el(e)?d8(e):Array.isArray(e)?Array.prototype.concat.apply(Td,e.map(function(s){return ki(s,t,n,r)})):[e.toString()]}function yF(e){for(var t=0;t<e.length;t+=1){var n=e[t];if(Qo(n)&&!Vp(n))return!1}return!0}var wF=Jv(Md),bF=function(){function e(t,n,r){this.rules=t,this.staticRulesId="",this.isStatic=(r===void 0||r.isStatic)&&yF(t),this.componentId=n,this.baseHash=vo(wF,n),this.baseStyle=r,s8.registerId(n)}return e.prototype.generateAndInjectStyles=function(t,n,r){var i=this.baseStyle?this.baseStyle.generateAndInjectStyles(t,n,r):"";if(this.isStatic&&!r.hash)if(this.staticRulesId&&n.hasNameForId(this.componentId,this.staticRulesId))i=vi(i,this.staticRulesId);else{var o=I1(ki(this.rules,t,n,r)),s=A1(vo(this.baseHash,o)>>>0);if(!n.hasNameForId(this.componentId,s)){var l=r(o,".".concat(s),void 0,this.componentId);n.insertRules(this.componentId,s,l)}i=vi(i,s),this.staticRulesId=s}else{for(var c=vo(this.baseHash,r.hash),u="",d=0;d<this.rules.length;d++){var p=this.rules[d];if(typeof p=="string")u+=p;else if(p){var g=I1(ki(p,t,n,r));c=vo(c,g+d),u+=g}}if(u){var w=A1(c>>>0);n.hasNameForId(this.componentId,w)||n.insertRules(this.componentId,w,r(u,".".concat(w),void 0,this.componentId)),i=vi(i,w)}}return i},e}(),f8=k.createContext(void 0);f8.Consumer;var zf={};function CF(e,t,n){var r=Vp(e),i=e,o=!If(e),s=t.attrs,l=s===void 0?Td:s,c=t.componentId,u=c===void 0?function(b,j){var E=typeof b!="string"?"sc":Kg(b);zf[E]=(zf[E]||0)+1;var $="".concat(E,"-").concat(e8(Md+E+zf[E]));return j?"".concat(j,"-").concat($):$}(t.displayName,t.parentComponentId):c,d=t.displayName,p=d===void 0?function(b){return If(b)?"styled.".concat(b):"Styled(".concat(Q_(b),")")}(e):d,g=t.displayName&&t.componentId?"".concat(Kg(t.displayName),"-").concat(t.componentId):t.componentId||u,w=r&&i.attrs?i.attrs.concat(l).filter(Boolean):l,y=t.shouldForwardProp;if(r&&i.shouldForwardProp){var x=i.shouldForwardProp;if(t.shouldForwardProp){var C=t.shouldForwardProp;y=function(b,j){return x(b,j)&&C(b,j)}}else y=x}var m=new bF(n,g,r?i.componentStyle:void 0);function v(b,j){return function(E,$,F){var M=E.attrs,R=E.componentStyle,D=E.defaultProps,T=E.foldedComponentIds,V=E.styledComponentId,z=E.target,I=k.useContext(f8),P=r3(),N=E.shouldForwardProp||P.shouldForwardProp,S=U_($,I,D)||Zo,_=function(W,Q,ee){for(var fe,K=St(St({},Q),{className:void 0,theme:ee}),te=0;te<W.length;te+=1){var re=Qo(fe=W[te])?fe(K):fe;for(var ve in re)K[ve]=ve==="className"?vi(K[ve],re[ve]):ve==="style"?St(St({},K[ve]),re[ve]):re[ve]}return Q.className&&(K.className=vi(K.className,Q.className)),K}(M,$,S),O=_.as||z,A={};for(var B in _)_[B]===void 0||B[0]==="$"||B==="as"||B==="theme"&&_.theme===S||(B==="forwardedAs"?A.as=_.forwardedAs:N&&!N(B,O)||(A[B]=_[B]));var G=function(W,Q){var ee=r3(),fe=W.generateAndInjectStyles(Q,ee.styleSheet,ee.stylis);return fe}(R,_),H=vi(T,V);return G&&(H+=" "+G),_.className&&(H+=" "+_.className),A[If(O)&&!Yv.has(O)?"class":"className"]=H,F&&(A.ref=F),f.createElement(O,A)}(h,b,j)}v.displayName=p;var h=k.forwardRef(v);return h.attrs=w,h.componentStyle=m,h.displayName=p,h.shouldForwardProp=y,h.foldedComponentIds=r?vi(i.foldedComponentIds,i.styledComponentId):"",h.styledComponentId=g,h.target=r?i.target:e,Object.defineProperty(h,"defaultProps",{get:function(){return this._foldedDefaultProps},set:function(b){this._foldedDefaultProps=r?function(j){for(var E=[],$=1;$<arguments.length;$++)E[$-1]=arguments[$];for(var F=0,M=E;F<M.length;F++)z1(j,M[F],!0);return j}({},i.defaultProps,b):b}}),Wp(h,function(){return".".concat(h.styledComponentId)}),o&&i8(h,e,{attrs:!0,componentStyle:!0,displayName:!0,foldedComponentIds:!0,shouldForwardProp:!0,styledComponentId:!0,target:!0}),h}function o3(e,t){for(var n=[e[0]],r=0,i=t.length;r<i;r+=1)n.push(t[r],e[r+1]);return n}var s3=function(e){return Object.assign(e,{isCss:!0})};function h8(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];if(Qo(e)||el(e))return s3(ki(o3(Td,Ja([e],t,!0))));var r=e;return t.length===0&&r.length===1&&typeof r[0]=="string"?ki(r):s3(ki(o3(r,t)))}function B1(e,t,n){if(n===void 0&&(n=Zo),!t)throw wl(1,t);var r=function(i){for(var o=[],s=1;s<arguments.length;s++)o[s-1]=arguments[s];return e(t,n,h8.apply(void 0,Ja([i],o,!1)))};return r.attrs=function(i){return B1(e,t,St(St({},n),{attrs:Array.prototype.concat(n.attrs,i).filter(Boolean)}))},r.withConfig=function(i){return B1(e,t,St(St({},n),i))},r}var p8=function(e){return B1(CF,e)},L=p8;Yv.forEach(function(e){L[e]=p8(e)});function Up(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];var r=I1(h8.apply(void 0,Ja([e],t,!1))),i=e8(r);return new c8(i,r)}const kF=""+new URL("logo-CU3Yeies.png",import.meta.url).href,Ad=Up`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,jF=L.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  background-color: #ffffff;
  padding: 40px 24px;
  box-sizing: border-box;
  text-align: center;
`,EF=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  animation: ${Ad} 0.8s ease-out;
  padding-top: 20vh;
`,SF=L(Zr)`
  width: 150px;
  height: 150px;
  margin-bottom: 24px;
  animation: ${Ad} 0.8s ease-out;
`,LF=L.p`
  font-size: 18px;
  color: #666;
  margin-bottom: 48px;
  line-height: 1.6;
  animation: ${Ad} 0.8s ease-out 0.2s both;
`,$F=L.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 16px;
  padding: 0 16px 32px;
  animation: ${Ad} 0.8s ease-out 0.4s both;
`,_F=L(J)`
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  height: 48px;
  background: linear-gradient(90deg, #268bff 0%, #0f69ff 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
  transition: transform 0.2s ease;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgba(0, 123, 255, 0.15);
  }
`,FF=L(J)`
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  height: 48px;
  background: transparent;
  color: #0f69ff;
  border: 1px solid #0f69ff;
  transition: background-color 0.2s ease, color 0.2s ease;

  &:active {
    background-color: rgba(15, 105, 255, 0.05);
    transform: scale(0.98);
  }
`,OF=L.div`
  text-align: center;
  color: #888;
  margin-top: 16px;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s ease;

  &:hover {
    color: #555;
  }

  &:active {
    color: #0f69ff;
  }
`,NF=()=>{const e=ze(),t=()=>{e("/home")};return a.jsxs(jF,{children:[a.jsxs(EF,{children:[a.jsx(SF,{src:kF,alt:"速算星球 Logo",fit:"contain"}),a.jsxs(LF,{children:["开启你的速算之旅，",a.jsx("br",{}),"让学习变得更智能、更有趣。"]})]}),a.jsxs($F,{children:[a.jsx(_F,{block:!0,onClick:()=>e("/login"),children:"登录"}),a.jsx(FF,{block:!0,onClick:()=>e("/register"),children:"注册"}),a.jsx(OF,{onClick:t,children:"直接体验"})]})]})},Hp=Up`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,PF=L.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  box-sizing: border-box;
`,RF=L(Ve)`
  background: transparent;
  --height: 50px;
  color: #333;
  flex-shrink: 0;
  margin: 0 -24px;
  padding: 0 24px;
  border-bottom: 1px solid #eee;
`,MF=L.div`
  padding: 40px 0 32px;
  animation: ${Hp} 0.6s ease-out;
  text-align: left;
`,TF=L.h1`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`,AF=L.p`
  font-size: 15px;
  color: #888;
  margin: 0;
`,IF=L.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${Hp} 0.7s ease-out;
`,zF=L(kt)`
  .adm-list {
    background: transparent;
    --border-inner: none;
    --border-top: none;
    --border-bottom: none;
  }

  .adm-list-item {
    background: transparent;
    padding: 0;
    margin-bottom: 24px;
    border-bottom: 1px solid #eee;
    border-radius: 0;
    box-shadow: none;
    transition: border-color 0.3s ease;

    &:focus-within {
      border-bottom-color: #0f69ff;
    }
  }

  .adm-list-item-content {
    padding: 8px 0;
  }
`,a3=L.div`
  display: flex;
  align-items: center;

  .icon {
    color: #aaa;
    margin-right: 12px;
    font-size: 18px;
  }

  .adm-input {
    flex: 1;
    font-size: 16px;
    padding: 4px 0;
  }
`,DF=L.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin: 16px 0 32px;
  font-size: 14px;

  .remember-me {
    display: flex;
    align-items: center;
    color: #666;
  }

  .forgot-password a {
    color: #0f69ff;
    text-decoration: none;

    &:active {
      opacity: 0.7;
    }
  }
`,BF=L(J)`
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  height: 48px;
  background: linear-gradient(90deg, #268bff 0%, #0f69ff 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
  transition: transform 0.2s ease;
  margin-bottom: 24px;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgba(0, 123, 255, 0.15);
  }
`,VF=L.div`
  text-align: center;
  color: #888;
  margin-top: 16px;
  margin-bottom: 40px;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s ease;
  animation: ${Hp} 1s ease-out;

  span {
    color: #0f69ff;
    font-weight: 500;
    margin-left: 4px;
  }

  &:hover {
    color: #555;
    span {
      color: #0056b3;
    }
  }

  &:active {
    color: #0f69ff;
  }
`,WF=()=>{const e=ze(),[t,n]=f.useState(!1),r=i=>{console.log("登录信息:",i),de.show({icon:"success",content:"登录成功"}),setTimeout(()=>e("/home"),1e3)};return a.jsxs(PF,{children:[a.jsx(RF,{onBack:()=>e(-1),children:"登录"}),a.jsxs(MF,{children:[a.jsx(TF,{children:"欢迎回来!"}),a.jsx(AF,{children:"请输入您的凭证以继续"})]}),a.jsxs(IF,{children:[a.jsxs(zF,{layout:"vertical",onFinish:r,children:[a.jsx(kt.Item,{name:"username",rules:[{required:!0,message:"请输入用户名"}],children:a.jsxs(a3,{children:[a.jsx(qr,{className:"icon"}),a.jsx(Xe,{placeholder:"用户名或邮箱",clearable:!0})]})}),a.jsx(kt.Item,{name:"password",rules:[{required:!0,message:"请输入密码"}],children:a.jsxs(a3,{children:[a.jsx(qa,{className:"icon"}),a.jsx(Xe,{placeholder:"密码",type:"password",clearable:!0})]})}),a.jsxs(DF,{children:[a.jsxs("div",{className:"remember-me",children:[a.jsx(X6,{checked:t,onChange:n,style:{"--icon-size":"18px",marginRight:"6px"}}),a.jsx("span",{children:"记住我"})]}),a.jsx("div",{className:"forgot-password",children:a.jsx("a",{href:"#",children:"忘记密码?"})})]}),a.jsx("button",{type:"submit",style:{background:"none",border:"none",padding:0,margin:0,display:"block",width:"100%"},children:a.jsx(BF,{block:!0,children:"登录"})})]}),a.jsxs(VF,{children:["还没有账号？",a.jsx("span",{onClick:()=>e("/register"),children:"立即注册"})]})]})]})},qp=Up`
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
`,UF=L.div`
  min-height: 100vh;
  background: #ffffff;
  display: flex;
  flex-direction: column;
  padding: 0 24px;
  box-sizing: border-box;
`,HF=L(Ve)`
  background: transparent;
  --height: 50px;
  color: #333;
  flex-shrink: 0;
  margin: 0 -24px;
  padding: 0 24px;
  border-bottom: 1px solid #eee;
`,qF=L.div`
  padding: 40px 0 32px;
  animation: ${qp} 0.6s ease-out;
  text-align: left;
`,ZF=L.h1`
  font-size: 26px;
  font-weight: 600;
  margin-bottom: 8px;
  color: #333;
`,QF=L.p`
  font-size: 15px;
  color: #888;
  margin: 0;
`,GF=L.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  animation: ${qp} 0.7s ease-out;
`,KF=L(kt)`
  .adm-list {
    background: transparent;
    --border-inner: none;
    --border-top: none;
    --border-bottom: none;
  }

  .adm-list-item {
    background: transparent;
    padding: 0;
    margin-bottom: 24px;
    border-bottom: 1px solid #eee;
    border-radius: 0;
    box-shadow: none;
    transition: border-color 0.3s ease;

    &:focus-within {
      border-bottom-color: #0f69ff;
    }
  }

  .adm-list-item-content {
    padding: 8px 0;
  }
`,Df=L.div`
  display: flex;
  align-items: center;

  .icon {
    color: #aaa;
    margin-right: 12px;
    font-size: 18px;
  }

  .adm-input {
    flex: 1;
    font-size: 16px;
    padding: 4px 0;
  }
`,YF=L(J)`
  border-radius: 50px;
  font-size: 16px;
  font-weight: 500;
  height: 48px;
  background: linear-gradient(90deg, #268bff 0%, #0f69ff 100%);
  color: white;
  border: none;
  box-shadow: 0 4px 12px rgba(0, 123, 255, 0.2);
  transition: transform 0.2s ease;
  margin-top: 16px;
  margin-bottom: 24px;

  &:active {
    transform: scale(0.98);
    box-shadow: 0 2px 6px rgba(0, 123, 255, 0.15);
  }
`,XF=L.p`
  text-align: center;
  font-size: 12px;
  color: #aaa;
  margin-top: -16px;
  margin-bottom: 24px;
  line-height: 1.5;

  a {
    color: #888;
    text-decoration: underline;
    &:active {
      color: #0f69ff;
    }
  }
`,JF=L.div`
  text-align: center;
  color: #888;
  margin-top: 16px;
  margin-bottom: 40px;
  font-size: 14px;
  cursor: pointer;
  transition: color 0.2s ease;
  animation: ${qp} 1s ease-out;

  span {
    color: #0f69ff;
    font-weight: 500;
    margin-left: 4px;
  }

  &:hover {
    color: #555;
    span {
      color: #0056b3;
    }
  }

  &:active {
    color: #0f69ff;
  }
`,eO=()=>{const e=ze(),[t]=kt.useForm(),n=async r=>{console.log("注册信息:",r),de.show({icon:"loading",content:"正在注册...",duration:0}),await new Promise(i=>setTimeout(i,1500)),de.clear(),de.show({icon:"success",content:"注册成功!"}),setTimeout(()=>e("/login"),1e3)};return a.jsxs(UF,{children:[a.jsx(HF,{onBack:()=>e(-1),children:"注册新账号"}),a.jsxs(qF,{children:[a.jsx(ZF,{children:"创建您的账号"}),a.jsx(QF,{children:"加入速算星球，开始学习之旅"})]}),a.jsxs(GF,{children:[a.jsxs(KF,{form:t,layout:"vertical",onFinish:n,children:[a.jsx(kt.Item,{name:"username",rules:[{required:!0,message:"请输入用户名"},{min:4,message:"用户名至少需要4个字符"}],children:a.jsxs(Df,{children:[a.jsx(qr,{className:"icon"}),a.jsx(Xe,{placeholder:"用户名 (至少4个字符)",clearable:!0})]})}),a.jsx(kt.Item,{name:"password",rules:[{required:!0,message:"请输入密码"},{min:6,message:"密码至少需要6个字符"}],children:a.jsxs(Df,{children:[a.jsx(qa,{className:"icon"}),a.jsx(Xe,{placeholder:"密码 (至少6个字符)",type:"password",clearable:!0})]})}),a.jsx(kt.Item,{name:"confirmPassword",dependencies:["password"],rules:[{required:!0,message:"请再次输入密码"},({getFieldValue:r})=>({validator(i,o){return!o||r("password")===o?Promise.resolve():Promise.reject(new Error("两次输入的密码不一致"))}})],children:a.jsxs(Df,{children:[a.jsx(qa,{className:"icon"}),a.jsx(Xe,{placeholder:"确认密码",type:"password",clearable:!0})]})}),a.jsx("button",{type:"submit",style:{background:"none",border:"none",padding:0,margin:0,display:"block",width:"100%"},children:a.jsx(YF,{block:!0,children:"立即注册"})}),a.jsxs(XF,{children:["注册即表示您同意 ",a.jsx("a",{href:"#",children:"服务条款"})," 和 ",a.jsx("a",{href:"#",children:"隐私政策"})]})]}),a.jsxs(JF,{children:["已有账号？",a.jsx("span",{onClick:()=>e("/login"),children:"立即登录"})]})]})]})},ls=()=>{const e=ze(),t=nd(),n=[{key:"/home",title:"首页",icon:a.jsx(YC,{})},{key:"/practice",title:"练习",icon:a.jsx(f6,{})},{key:"/ai-tutor",title:"AI辅导",icon:a.jsx(En,{})},{key:"/profile",title:"我的",icon:a.jsx(qr,{})}];return a.jsx(Hg,{activeKey:t.pathname,onChange:r=>e(r),style:{position:"fixed",bottom:0,left:0,right:0,width:"100%",background:"#fff",borderTop:"1px solid #eee"},children:n.map(r=>a.jsx(Hg.Item,{icon:r.icon,title:r.title},r.key))})},tO=()=>a.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",stroke:"currentColor",strokeWidth:"4",strokeLinejoin:"round"}),a.jsx("path",{d:"M24.0078 12L24.0078 24.0077L32.4875 32.4875",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),nO=()=>a.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{x:"4",y:"8",width:"40",height:"36",rx:"2",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 16H44",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M16 4V12",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M32 4V12",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M16 28H20",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M28 28H32",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M16 36H20",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M28 36H32",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),rO=L.div`
  padding: 20px;
  padding-bottom: 70px;
  background: #f5f5f5;
  min-height: 100vh;
`,iO=L.div`
  margin-bottom: 24px;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,oO=L.div`
  flex: 1;
`,sO=L.h1`
  font-size: 24px;
  margin-bottom: 8px;
  background: linear-gradient(90deg, #1677ff, #4098ff);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-weight: bold;
`,aO=L.p`
  color: #666;
  margin: 0;
`,lO=L.div`
  width: 48px;
  height: 48px;
  border-radius: 24px;
  background: linear-gradient(135deg, #1677ff 0%, #4096ff 100%);
  box-shadow: 0 3px 8px rgba(22, 119, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-left: 16px;
  color: white;
  font-size: 24px;
  cursor: pointer;
`,V1=L(tt)`
  margin-bottom: 20px;
  border-radius: 16px;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.03);
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.08);
  }
`,cO=L(V1)`
  background: linear-gradient(135deg, #1677ff 0%, #4096ff 100%);
  color: white;
  padding: 8px 0;
`,uO=L.div`
  color: white;
  margin-bottom: 12px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: space-between;
`,dO=L.div`
  display: flex;
  justify-content: space-between;
  margin-top: 8px;
  font-size: 13px;
`,Zl=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 16px;
  border-radius: 12px;
  transition: all 0.3s ease;
  
  .icon {
    font-size: 32px;
    margin-bottom: 10px;
    color: #1677ff;
    background: #f0f7ff;
    width: 60px;
    height: 60px;
    border-radius: 30px;
    display: flex;
    align-items: center;
    justify-content: center;
    box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);
    transition: all 0.3s ease;
  }
  
  .text {
    font-size: 15px;
    color: #333;
    font-weight: 500;
  }
  
  &:hover {
    background: #f0f7ff;
    
    .icon {
      transform: scale(1.05);
      background: #1677ff;
      color: white;
    }
  }
`,l3=L.div`
  font-size: 17px;
  font-weight: bold;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  .more {
    color: #999;
    font-size: 14px;
    font-weight: normal;
    display: flex;
    align-items: center;
  }
`,fO=L.div`
  display: flex;
  align-items: center;
  padding: 12px 8px;
  border-bottom: 1px solid #f5f5f5;
  
  &:last-child {
    border-bottom: none;
  }
  
  .icon {
    width: 36px;
    height: 36px;
    border-radius: 18px;
    background: #f0f7ff;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 12px;
    flex-shrink: 0;
    color: #1677ff;
  }
  
  .content {
    flex: 1;
    
    .title {
      font-weight: 500;
      margin-bottom: 4px;
    }
    
    .info {
      color: #999;
      font-size: 12px;
      display: flex;
      align-items: center;
      
      .divider {
        margin: 0 8px;
      }
    }
  }
  
  .score {
    font-weight: bold;
    color: #1677ff;
    margin-left: 12px;
  }
`,hO=L(Qa)`
  --right: -6px;
  --top: -6px;
  --color: #ff4d4f;
`,c3=[{id:1,type:"基础练习",date:"今天",time:"10:30",score:"95分",icon:a.jsx(en,{})},{id:2,type:"计时挑战",date:"昨天",time:"15:45",score:"88分",icon:a.jsx(tO,{})},{id:3,type:"每日一练",date:"10-15",time:"09:15",score:"100分",icon:a.jsx(nO,{})}],pO=()=>{const e=ze();return a.jsxs(a.Fragment,{children:[a.jsxs(rO,{children:[a.jsxs(iO,{children:[a.jsxs(oO,{children:[a.jsx(sO,{children:"你好，小明！"}),a.jsx(aO,{children:"今天也要加油学习哦～"})]}),a.jsx(hO,{content:3,children:a.jsx(lO,{onClick:()=>e("/profile"),children:a.jsx(qr,{})})})]}),a.jsx(cO,{children:a.jsxs("div",{style:{padding:"12px 16px"},children:[a.jsxs(uO,{children:[a.jsx("span",{children:"今日学习进度"}),a.jsx("span",{children:"60%"})]}),a.jsx(Nv,{percent:60,style:{"--track-color":"rgba(255, 255, 255, 0.2)","--fill-color":"#fff","--track-width":"10px"}}),a.jsxs(dO,{children:[a.jsx("span",{children:"已完成 3 次练习"}),a.jsx("span",{children:"目标 5 次"})]})]})}),a.jsx(V1,{children:a.jsxs("div",{style:{padding:"16px"},children:[a.jsx(l3,{children:"快速入口"}),a.jsxs(zt,{columns:2,gap:16,children:[a.jsx(zt.Item,{onClick:()=>e("/practice"),children:a.jsxs(Zl,{children:[a.jsx("div",{className:"icon",children:a.jsx(en,{})}),a.jsx("span",{className:"text",children:"开始练习"})]})}),a.jsx(zt.Item,{onClick:()=>e("/mistakes"),children:a.jsxs(Zl,{children:[a.jsx("div",{className:"icon",children:a.jsx(up,{})}),a.jsx("span",{className:"text",children:"错题本"})]})}),a.jsx(zt.Item,{onClick:()=>e("/ai-tutor"),children:a.jsxs(Zl,{children:[a.jsx("div",{className:"icon",children:a.jsx(En,{})}),a.jsx("span",{className:"text",children:"AI辅导"})]})}),a.jsx(zt.Item,{onClick:()=>e("/report"),children:a.jsxs(Zl,{children:[a.jsx("div",{className:"icon",children:a.jsx(ck,{})}),a.jsx("span",{className:"text",children:"学习报告"})]})})]})]})}),a.jsx(V1,{children:a.jsxs("div",{style:{padding:"16px"},children:[a.jsxs(l3,{children:[a.jsx("span",{children:"最近练习"}),a.jsxs("span",{className:"more",onClick:()=>e("/history"),children:["查看全部 ",a.jsx(Rr,{style:{fontSize:12}})]})]}),c3.length>0?c3.map(n=>a.jsxs(fO,{onClick:()=>e(`/practice-detail/${n.id}`),children:[a.jsx("div",{className:"icon",children:n.icon}),a.jsxs("div",{className:"content",children:[a.jsx("div",{className:"title",children:n.type}),a.jsxs("div",{className:"info",children:[a.jsx("span",{children:n.date}),a.jsx("span",{className:"divider",children:"•"}),a.jsx("span",{children:n.time})]})]}),a.jsx("div",{className:"score",children:n.score})]},n.id)):a.jsx("div",{style:{textAlign:"center",padding:"20px 0",color:"#999"},children:"暂无练习记录"})]})})]}),a.jsx(ls,{})]})},mO=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 70px;
  padding-top: 16px;
`,gO=L.div`
  padding: 16px;
`,Bf=L(tt)`
  border-radius: 16px;
  margin-bottom: 20px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  
  .adm-card-body {
    padding: 18px;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.09);
    transition: all 0.3s ease;
  }
`,Vf=L.div`
  font-size: 19px;
  font-weight: bold;
  margin-bottom: 10px;
  display: flex;
  align-items: center;
  gap: 8px;
  
  .icon {
    font-size: 22px;
    margin-right: 6px;
    color: #1677ff;
  }
`,Wf=L.div`
  font-size: 14px;
  color: #666;
  margin-bottom: 18px;
  line-height: 1.5;
`,Ql=L.div`
  border-radius: 14px;
  height: 130px;
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 16px;
  box-sizing: border-box;
  cursor: pointer;
  transition: all 0.3s ease;
  overflow: hidden;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  text-align: center;
  
  &:active {
    transform: scale(0.98);
  }
  
  &.primary {
    background-color: var(--adm-color-primary);
    color: white;
  }
  
  &.success {
    background-color: var(--adm-color-success);
    color: white;
  }
  
  &.warning {
    background-color: var(--adm-color-warning);
    color: white;
  }
  
  &.danger {
    background-color: var(--adm-color-danger);
    color: white;
  }
`,Gl=L.div`
  width: 60px;
  height: 60px;
  border-radius: 30px;
  background-color: rgba(255, 255, 255, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  font-size: 32px;
`,Kl=L.div`
  font-weight: bold;
  font-size: 17px;
  margin-bottom: 6px;
`,Yl=L.div`
  font-size: 13px;
  color: rgba(255, 255, 255, 0.8);
  text-align: center;
`,vO=L(Qa)`
  .adm-badge-content {
    padding: 2px 6px;
    font-size: 12px;
    font-weight: bold;
    border-radius: 8px;
  }
`,xO=L(J)`
  height: 50px;
  border-radius: 10px;
  font-size: 16px;
  font-weight: 500;
  box-shadow: 0 2px 6px rgba(22, 119, 255, 0.2);
  
  &:active {
    transform: scale(0.98);
  }
`,u3=L(J)`
  height: 48px;
  border-radius: 10px;
  font-size: 15px;
  margin-bottom: 10px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:active {
    transform: scale(0.98);
  }
`,yO=()=>{const e=ze();return a.jsxs(mO,{children:[a.jsxs(gO,{children:[a.jsxs(Bf,{children:[a.jsxs(Vf,{children:[a.jsx(f6,{className:"icon"}),a.jsx("span",{children:"选择练习模式"})]}),a.jsx(Wf,{children:"根据您的学习需求选择合适的练习模式"}),a.jsxs(zt,{columns:2,gap:16,style:{marginBottom:"12px"},children:[a.jsx(zt.Item,{children:a.jsxs(Ql,{className:"primary",onClick:()=>e("/basic-practice"),children:[a.jsx(Gl,{children:a.jsx(fa,{})}),a.jsx(Kl,{children:"基础练习"}),a.jsx(Yl,{children:"自由答题，时间不限"})]})}),a.jsx(zt.Item,{children:a.jsxs("div",{style:{position:"relative",width:"100%",height:"100%"},children:[a.jsx(vO,{content:"推荐",style:{position:"absolute",right:-3,top:-3,zIndex:10}}),a.jsxs(Ql,{className:"success",onClick:()=>e("/timed-practice"),children:[a.jsx(Gl,{children:a.jsx(Ha,{})}),a.jsx(Kl,{children:"计时挑战"}),a.jsx(Yl,{children:"限时回答，提高速度"})]})]})}),a.jsx(zt.Item,{children:a.jsxs(Ql,{className:"warning",onClick:()=>e("/mistake-practice"),children:[a.jsx(Gl,{children:a.jsx(c6,{})}),a.jsx(Kl,{children:"错题训练"}),a.jsx(Yl,{children:"针对性解决薄弱点"})]})}),a.jsx(zt.Item,{children:a.jsxs(Ql,{className:"danger",onClick:()=>e("/level-practice"),children:[a.jsx(Gl,{children:a.jsx(Ut,{})}),a.jsx(Kl,{children:"闯关模式"}),a.jsx(Yl,{children:"逐级挑战，收集成就"})]})})]})]}),a.jsxs(Bf,{children:[a.jsxs(Vf,{children:[a.jsx(ap,{className:"icon"}),a.jsx("span",{children:"每日练习"})]}),a.jsx(Wf,{children:"已完成今日 0/10 题，坚持练习获得额外奖励！"}),a.jsx(xO,{color:"primary",block:!0,onClick:()=>e("/daily-practice"),children:"开始每日练习"})]}),a.jsxs(Bf,{children:[a.jsxs(Vf,{children:[a.jsx(Ut,{className:"icon"}),a.jsx("span",{children:"个性化学习计划"})]}),a.jsx(Wf,{children:"根据您的学习情况，我们为您推荐以下专题训练"}),a.jsxs(ge,{direction:"vertical",style:{width:"100%"},children:[a.jsx(u3,{color:"default",fill:"outline",block:!0,onClick:()=>e("/custom-practice?topic=加法"),children:"加法运算专项"}),a.jsx(u3,{color:"default",fill:"outline",block:!0,onClick:()=>e("/custom-practice?topic=连加连减"),children:"连加连减专项"})]})]})]}),a.jsx(ls,{})]})},wO=L.div`
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 80px;
`,bO=L(Ve)`
  background: white;
  --height: 52px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  .adm-nav-bar-back-arrow {
    font-size: 20px;
    color: #333;
  }
`,CO=L.div`
  padding: 16px 20px;
  max-width: 800px;
  margin: 0 auto;
`,kO=L(tt)`
  margin-bottom: 20px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 16px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  background: white;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 24px rgba(0, 0, 0, 0.08);
  }
  
  .adm-card-header {
    padding: 0;
    border-bottom: none;
    background: transparent;
  }
  
  .adm-card-body {
    padding: 20px 16px;
  }
`,jO=L.div`
  font-size: 22px;
  font-weight: 600;
  margin-bottom: 20px;
  color: #222;
  position: relative;
  padding-bottom: 12px;
  border-bottom: 1px dashed #eee;
  
  &::before {
    content: '问题';
    position: absolute;
    top: 0;
    right: 0;
    background: #e6f4ff;
    color: #1677ff;
    padding: 4px 10px;
    border-radius: 12px;
    font-size: 14px;
    font-weight: 500;
  }
`,EO=L.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-bottom: 16px;
`,d3=L.div`
  display: flex;
  align-items: center;
  gap: 10px;
  padding: 12px 16px;
  border-radius: 12px;
  background: ${e=>e.isCorrect?"#f6ffed":"#fff2f0"};
  border: 1px solid ${e=>e.isCorrect?"#b7eb8f":"#ffccc7"};
  font-size: 16px;
  color: #333;
  
  svg {
    font-size: 18px;
    color: ${e=>e.isCorrect?"#52c41a":"#ff4d4f"};
  }
`,SO=L.div`
  background: #f0f7ff;
  color: #1677ff;
  padding: 14px 16px;
  margin: 16px 0;
  font-size: 15px;
  border-radius: 12px;
  position: relative;
  line-height: 1.6;
  
  &::before {
    content: '分析';
    position: absolute;
    top: -10px;
    left: 12px;
    background: #1677ff;
    color: white;
    padding: 2px 10px;
    border-radius: 10px;
    font-size: 13px;
    font-weight: 500;
  }
`,LO=L.div`
  margin: 16px 0;
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  
  .adm-tag {
    padding: 4px 12px;
    font-size: 14px;
    border-radius: 16px;
  }
`,$O=L(J)`
  border-radius: 24px;
  font-size: 15px;
  font-weight: 500;
  padding: 10px 0;
  box-shadow: 0 4px 12px rgba(22, 119, 255, 0.15);
  
  &:hover {
    opacity: 0.9;
  }
`,_O=L.div`
  display: flex;
  align-items: center;
  gap: 6px;
  color: #999;
  font-size: 14px;
  padding: 14px 16px 0;
  
  &::before {
    content: '';
    display: inline-block;
    width: 6px;
    height: 6px;
    border-radius: 50%;
    background: #1677ff;
    margin-right: 2px;
  }
`,FO=L(Cp)`
  margin-top: 60px;
  
  .adm-empty-description {
    color: #888;
    font-size: 16px;
  }
`,OO=()=>{const e=[{id:1,question:"12 + 15 = ?",userAnswer:"28",correctAnswer:"27",analysis:"计算时要注意进位，可以先算个位再算十位。个位：2+5=7，十位：1+1=2，所以结果是27。",tags:["加法","进位"],date:"2024-02-20"},{id:2,question:"45 - 17 = ?",userAnswer:"32",correctAnswer:"28",analysis:"减法计算时要注意借位，可以先算个位再算十位。个位：5-7需要借位，变成15-7=8，十位：4-1-1=2，所以结果是28。",tags:["减法","借位"],date:"2024-02-20"}];return a.jsxs(wO,{children:[a.jsx(bO,{onBack:()=>window.history.back(),children:"错题本"}),a.jsx(CO,{children:e.length>0?e.map(t=>a.jsxs(kO,{title:a.jsx(_O,{children:t.date}),children:[a.jsx(jO,{children:t.question}),a.jsxs(EO,{children:[a.jsxs(d3,{isCorrect:!1,children:[a.jsx(cp,{})," 你的答案：",t.userAnswer]}),a.jsxs(d3,{isCorrect:!0,children:[a.jsx(lp,{})," 正确答案：",t.correctAnswer]})]}),a.jsx(SO,{children:t.analysis}),a.jsx(LO,{children:t.tags.map(n=>a.jsx(ut,{color:"primary",fill:"outline",children:n},n))}),a.jsx($O,{color:"primary",fill:"outline",block:!0,children:"重新练习此类题目"})]},t.id)):a.jsx(FO,{image:a.jsx(u6,{style:{fontSize:64,color:"#bbb"}}),description:"暂无错题记录，继续加油哦！"})}),a.jsx(ls,{})]})},NO=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 70px;
  padding-top: 16px;
  display: flex;
  flex-direction: column;
`,PO=L.div`
  padding: 16px;
  flex: 1;
  overflow-y: auto;
`,Ki=L.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 8px;
  display: flex;
  align-items: center;
  gap: 8px;
`,li=L(tt)`
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,RO=L.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.05);
  margin-bottom: 16px;
`,f3=L.div`
  font-size: 20px;
  font-weight: bold;
  text-align: center;
  margin: 10px 0 20px;
`,MO=L.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 12px;
  margin-bottom: 16px;
`,TO=L.div`
  padding: 12px;
  border-radius: 8px;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
  background: ${e=>e.correct?"#d4f7dc":e.wrong?"#ffe0e0":e.selected?"#e6f7ff":"#f5f7fa"};
  border: 2px solid ${e=>e.correct?"#52c41a":e.wrong?"#ff4d4f":e.selected?"#1677ff":"#e8e8e8"};
  cursor: pointer;
  transition: all 0.3s ease;
  
  &:hover {
    background: ${e=>e.correct?"#d4f7dc":e.wrong?"#ffe0e0":"#e6f7ff"};
  }
`,AO=L.div`
  background: #f0f9ff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  text-align: center;
  box-shadow: 0 2px 6px rgba(24, 144, 255, 0.1);
`,h3=L.div`
  font-weight: bold;
  font-size: 16px;
  margin-bottom: 12px;
  color: #1677ff;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  
  &::before, &::after {
    content: '';
    height: 1px;
    flex: 1;
    background: linear-gradient(to right, transparent, #1677ff, transparent);
  }
`,IO=L.div`
  font-size: 24px;
  font-weight: bold;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 8px;
  color: #1677ff;
`,zO=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 16px 0;
  gap: 12px;
`,p3=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 12px;
  width: 100%;
`,Xl=L.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
  text-align: center;
  width: 100%;
`,Jl=L.div`
  font-weight: bold;
  font-size: 18px;
  margin-bottom: 8px;
  color: #333;
`,Fs=L.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 5px;
  margin-top: 8px;
`,Os=L.div`
  width: ${e=>e.isResult?"28px":e.small?"20px":"24px"};
  height: ${e=>e.isResult?"28px":e.small?"20px":"24px"};
  border-radius: 50%;
  background-color: ${e=>e.isResult?"#52c41a":e.highlighted?"#1677ff":e.tens?"#FF9800":e.ones?"#9c27b0":"#f0f0f0"};
  color: ${e=>e.highlighted||e.tens||e.ones||e.isResult?"#fff":"#666"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: ${e=>e.isResult?"14px":e.small?"10px":"12px"};
  font-weight: bold;
  transition: all 0.3s ease;
  
  &:hover {
    transform: scale(1.1);
  }
`,DO=L.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 3px 8px rgba(0, 0, 0, 0.05);
`,ec=L.div`
  display: flex;
  align-items: center;
  margin-bottom: 10px;
  gap: 12px;
`,tc=L.div`
  width: 28px;
  height: 28px;
  border-radius: 50%;
  background-color: #1677ff;
  color: white;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: bold;
`,nc=L.div`
  flex: 1;
  font-size: 14px;
  line-height: 1.5;
`,BO=L.div`
  background: #f9f9f9;
  border-radius: 8px;
  padding: 12px;
  margin-top: 12px;
  display: flex;
  flex-direction: column;
  gap: 12px;
`,Uf=L.div`
  display: flex;
  justify-content: center;
  font-size: 18px;
  font-weight: 500;
  color: #333;
`,Ns=L.span`
  color: #1677ff;
  font-weight: bold;
`,VO=L.div`
  display: inline-block;
  background: #ffe58f;
  border: 1px solid #ffd666;
  color: #873800;
  padding: 4px 12px;
  border-radius: 16px;
  font-size: 13px;
  margin-bottom: 16px;
`,WO=L.div`
  margin-bottom: 16px;
  display: flex;
  flex-direction: column;
  gap: 16px;
  height: calc(55vh - 120px);
  min-height: 400px;
  overflow-y: auto;
  padding-right: 4px;
  padding-bottom: 8px;
  
  &::-webkit-scrollbar {
    width: 4px;
  }
  
  &::-webkit-scrollbar-thumb {
    background-color: rgba(22, 119, 255, 0.3);
    border-radius: 4px;
  }
`,m3=L.div`
  display: flex;
  margin-bottom: 12px;
  justify-content: ${e=>e.isUser?"flex-end":"flex-start"};
  animation: ${e=>e.isUser?"fadeInRight":"fadeInLeft"} 0.3s ease forwards;
  
  @keyframes fadeInRight {
    from {
      opacity: 0;
      transform: translateX(20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
  
  @keyframes fadeInLeft {
    from {
      opacity: 0;
      transform: translateX(-20px);
    }
    to {
      opacity: 1;
      transform: translateX(0);
    }
  }
`,Hf=L.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: ${e=>e.isUser?"#1677ff":"#f0f9ff"};
  margin: ${e=>e.isUser?"0 0 0 8px":"0 8px 0 0"};
  display: flex;
  align-items: center;
  justify-content: center;
  flex-shrink: 0;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  svg {
    font-size: 18px;
    color: ${e=>e.isUser?"white":"#1677ff"};
  }
`,g3=L.div`
  max-width: 70%;
  padding: 12px 16px;
  border-radius: 18px;
  background: ${e=>e.isUser?"linear-gradient(135deg, #1677ff, #0e5ecd)":"#fff"};
  color: ${e=>e.isUser?"#fff":"#333"};
  box-shadow: 0 2px 8px rgba(0, 0, 0, ${e=>e.isUser?"0.15":"0.05"});
  position: relative;
  
  &::before {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    border: 8px solid transparent;
    ${e=>e.isUser?"border-left-color: #0e5ecd; right: -16px;":"border-right-color: #fff; left: -16px;"}
    top: 10px;
    display: ${e=>e.isUser?"none":"block"};
  }
`,UO=L.div`
  font-size: 11px;
  color: ${e=>e.color||"rgba(0, 0, 0, 0.45)"};
  margin-top: 4px;
  text-align: right;
`,HO=L.div`
  padding: 12px;
  background: #fff;
  border-radius: 12px;
  margin-bottom: 16px;
  box-shadow: 0 -2px 10px rgba(0, 0, 0, 0.03);
  position: relative;
`,qO=L(Xe)`
  border-radius: 24px;
  background: #f5f7fa;
  padding: 10px 16px;
  font-size: 15px;
  transition: all 0.3s ease;
  border: 1px solid transparent;
  flex: 1;
  min-width: 0;
  
  &:hover, &:focus {
    background: #fff;
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.2);
  }
`,ZO=L(J)`
  border-radius: 24px;
  padding: 4px 12px;
  font-weight: bold;
  box-shadow: 0 2px 6px rgba(22, 119, 255, 0.2);
  transition: all 0.3s ease;
  flex-shrink: 0;
  
  &:active {
    transform: scale(0.95);
  }
`,QO=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
`,Yi=L(ut)`
  padding: 6px 12px;
  border-radius: 16px;
  font-size: 13px;
  transition: all 0.2s ease;
  
  &:active {
    transform: scale(0.95);
  }
`,GO=L(li)`
  position: relative;
  overflow: hidden;
  
  &::after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 80px;
    height: 80px;
    background: linear-gradient(135deg, transparent 50%, rgba(22, 119, 255, 0.1) 50%);
    border-radius: 0 0 0 80px;
    pointer-events: none;
  }
`,KO=L.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
`,YO=L.div`
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background-color: #f0f9ff;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1677ff;
  font-size: 24px;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.2);
`,XO=L.div`
  flex: 1;
`,JO=L.div`
  font-weight: bold;
  font-size: 16px;
  color: #1677ff;
`,eN=L.div`
  font-size: 13px;
  color: #52c41a;
  display: flex;
  align-items: center;
  gap: 4px;
  
  &::before {
    content: '';
    display: inline-block;
    width: 8px;
    height: 8px;
    border-radius: 50%;
    background-color: #52c41a;
  }
`,tN=L.div`
  width: 40px;
  height: 40px;
  border-radius: 50%;
  background: #f5f7fa;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #1677ff;
  margin-left: 8px;
  margin-right: 8px;
  flex-shrink: 0;
  transition: all 0.2s ease;
  
  &:active {
    background: rgba(22, 119, 255, 0.1);
    transform: scale(0.95);
  }
`,v3=L.div`
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 8px;
  overflow: hidden;
  margin-bottom: 12px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    display: block;
    height: 100%;
    width: ${e=>e.percent}%;
    background-color: ${e=>e.color||"#1677ff"};
    background-image: linear-gradient(
      45deg,
      rgba(255, 255, 255, 0.2) 25%,
      transparent 25%,
      transparent 50%,
      rgba(255, 255, 255, 0.2) 50%,
      rgba(255, 255, 255, 0.2) 75%,
      transparent 75%,
      transparent
    );
    background-size: 16px 16px;
    border-radius: 8px;
    transition: width 0.5s ease;
  }
`,x3=L.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 6px;
  font-size: 14px;
`,y3=L.span`
  font-weight: 500;
  display: flex;
  align-items: center;
  gap: 6px;
  
  .icon {
    font-size: 16px;
    color: #1677ff;
  }
`,w3=L.span`
  font-weight: bold;
  font-size: 14px;
  color: ${e=>e.color||"#1677ff"};
  background-color: ${e=>`${e.color||"#1677ff"}10`};
  padding: 2px 8px;
  border-radius: 10px;
`,nN=L.div`
  font-size: 15px;
  font-weight: 500;
  margin-bottom: 12px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 6px;
  
  .icon {
    font-size: 16px;
    color: #1677ff;
  }
`,rN=L.div`
  margin-bottom: 20px;
`,iN=L.div`
  display: flex;
  align-items: center;
  background: #fff;
  border-radius: 12px;
  padding: 14px 16px;
  margin-bottom: 10px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.06);
  position: relative;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
  
  &::after {
    content: '';
    position: absolute;
    left: 0;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #1677ff;
    border-radius: 4px 0 0 4px;
  }
`,oN=L.div`
  width: 36px;
  height: 36px;
  border-radius: 50%;
  background-color: #f0f7ff;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 12px;
  flex-shrink: 0;
  color: #1677ff;
`,sN=L.div`
  flex: 1;
`,aN=L.div`
  font-weight: bold;
  font-size: 15px;
  margin-bottom: 4px;
`,lN=L.div`
  font-size: 13px;
  color: #666;
  display: flex;
  align-items: center;
  gap: 8px;
`,cN=L.div`
  padding: 2px 8px;
  border-radius: 10px;
  font-size: 12px;
  font-weight: 500;
  margin-right: 8px;
  background-color: ${e=>e.status==="completed"?"#d4f7dc":e.status==="in-progress"?"#e6f7ff":"#f5f5f5"};
  color: ${e=>e.status==="completed"?"#52c41a":e.status==="in-progress"?"#1677ff":"#999"};
`;L.div`
  color: #1677ff;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
  margin-left: auto;
  
  .icon {
    font-size: 12px;
    margin-left: 4px;
  }
`;const uN=L(J)`
  border-radius: 20px;
  font-weight: 500;
  padding: 6px 16px;
  box-shadow: 0 2px 6px rgba(22, 119, 255, 0.2);
  transition: all 0.3s ease;
  height: auto;
  
  &:active {
    transform: scale(0.97);
  }
`,dN=L(J)`
  border-radius: 24px;
  font-weight: 500;
  height: 44px;
  font-size: 15px;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.15);
  
  &:active {
    transform: scale(0.98);
  }
`,fN=()=>{const[e,t]=f.useState(""),[n,r]=f.useState("interactive"),[i,o]=f.useState(null),[s,l]=f.useState(!1),[c,u]=f.useState({question:"12 + 8 = ?",options:["18","19","20","21"],correctAnswer:"20"}),[d,p]=f.useState([{title:"加法进位",progress:65,color:"#1677ff",icon:a.jsx(en,{})},{title:"连加连减",progress:40,color:"#ff7a45",icon:a.jsx(en,{})},{title:"乘法口诀",progress:80,color:"#52c41a",icon:a.jsx(en,{})},{title:"应用题解析",progress:25,color:"#722ed1",icon:a.jsx(en,{})}]),g=[{id:1,name:"加法进位专题",icon:a.jsx(en,{}),progress:"3/5",status:"in-progress",description:"掌握加法进位的原理和方法"},{id:2,name:"退位减法专题",icon:a.jsx(en,{}),progress:"1/5",status:"in-progress",description:"学习退位减法的计算技巧"},{id:3,name:"混合运算专题",icon:a.jsx(en,{}),progress:"0/5",status:"not-started",description:"综合运用加减法解决问题"}],[w,y]=f.useState([{id:1,content:'你好！我是你的AI数学老师，我可以帮你解决口算问题，提供可视化解释！试试问我"怎么计算25+17?"',isUser:!1,time:new Date}]),[x,C]=f.useState(!1),m=()=>{if(!e.trim())return;const F={id:Date.now(),content:e,isUser:!0,time:new Date};y(M=>[...M,F]),C(!0),setTimeout(()=>{C(!1);const M=e.toLowerCase();let R="让我来帮你分析一下这个问题...";M.includes("25+17")||M.includes("25 + 17")?(R=`25 + 17 可以拆解为 25 + 10 + 7。

先算 25 + 10 = 35，再算 35 + 7 = 42。

所以 25 + 17 = 42`,r("visual"),u({question:"25 + 17 = ?",options:["41","42","43","44"],correctAnswer:"42"})):M.includes("进位加法")||M.includes("加法进位")?R=`进位加法是指当两数相加的个位数之和大于或等于10时，需要向十位进1的加法计算。

例如：18 + 5 = 23，个位数 8 + 5 = 13，需要向十位进1，最终结果是 23。

这种计算可以用拆分法：
1. 把第二个加数拆成两部分
2. 先加到整十数
3. 再加剩余的数`:(M.includes("连加")||M.includes("技巧"))&&(R=`连加题的计算技巧是先找出凑整十或整百的数，优先计算它们。

例如：25 + 18 + 7 + 32，可以先算 25 + 7 = 32，然后 18 + 32 = 50，最后 50 + 32 = 82。

查找可以凑成整数的组合可以大大提高计算速度！`);const D={id:Date.now()+1,content:R,isUser:!1,time:new Date};y(T=>[...T,D])},1500),t("")},v=F=>{o(F),setTimeout(()=>{l(!0)},500)},h=()=>{const F=Math.floor(Math.random()*20)+10,M=Math.floor(Math.random()*10)+5,R=(F+M).toString(),T=[...[(F+M-1).toString(),(F+M+1).toString(),(F+M+2).toString()],R].sort(()=>Math.random()-.5);u({question:`${F} + ${M} = ?`,options:T,correctAnswer:R}),o(null),l(!1)},b=()=>c.question.split("+").map(M=>parseInt(M.trim())).filter(M=>!isNaN(M)),j=F=>{const M=Math.floor(F/10)*10,R=F%10;return{tens:M,ones:R}},E=()=>{const F=b();if(F.length<2)return null;const M=F[0],R=F[1],D=M+R,{tens:T,ones:V}=j(M),{tens:z,ones:I}=j(R);return a.jsxs(a.Fragment,{children:[a.jsx(VO,{children:"计算小技巧：拆分法"}),a.jsxs(Xl,{children:[a.jsx(Jl,{children:"原始数字"}),a.jsxs(p3,{children:[a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("div",{style:{fontSize:"24px",fontWeight:"bold"},children:M}),a.jsx(Fs,{children:Array.from({length:M},(P,N)=>a.jsx(Os,{highlighted:!0,children:N+1},N))})]}),a.jsx(IO,{children:"+"}),a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx("div",{style:{fontSize:"24px",fontWeight:"bold"},children:R}),a.jsx(Fs,{children:Array.from({length:R},(P,N)=>a.jsx(Os,{highlighted:!0,children:N+1},N))})]})]})]}),a.jsx(h3,{children:"拆分运算"}),a.jsxs(Xl,{children:[a.jsx(Jl,{children:"把数字拆成十位和个位"}),a.jsx(p3,{children:a.jsxs("div",{style:{textAlign:"center"},children:[a.jsxs("div",{style:{fontSize:"18px"},children:[M," = ",a.jsx(Ns,{children:T})," + ",a.jsx(Ns,{children:V})]}),a.jsxs("div",{style:{display:"flex",gap:"10px",justifyContent:"center",marginTop:"10px"},children:[a.jsxs("div",{children:[a.jsxs("div",{style:{fontSize:"16px",marginBottom:"4px"},children:["十位: ",T]}),a.jsx(Fs,{children:Array.from({length:T/10},(P,N)=>a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center"},children:[a.jsx("div",{style:{display:"flex"},children:Array.from({length:10},(S,_)=>a.jsx(Os,{tens:!0,small:!0,children:_+1},_))}),a.jsxs("div",{style:{marginTop:"2px",fontSize:"12px"},children:["10×",N+1]})]},N))})]}),V>0&&a.jsxs("div",{children:[a.jsxs("div",{style:{fontSize:"16px",marginBottom:"4px"},children:["个位: ",V]}),a.jsx(Fs,{children:Array.from({length:V},(P,N)=>a.jsx(Os,{ones:!0,children:N+1},N))})]})]})]})})]}),a.jsxs(Xl,{children:[a.jsx(Jl,{children:"计算拆分之后的加法"}),a.jsxs(BO,{children:[a.jsxs(Uf,{children:[T," + ",z," = ",a.jsx(Ns,{children:T+z})," (十位相加)"]}),a.jsxs(Uf,{children:[V," + ",I," = ",a.jsx(Ns,{children:V+I})," (个位相加)"]}),a.jsxs(Uf,{children:[T+z," + ",V+I," = ",a.jsx(Ns,{children:D})," (结果)"]})]})]}),a.jsxs(DO,{children:[a.jsx(h3,{children:"解题步骤"}),a.jsxs(ec,{children:[a.jsx(tc,{children:"1"}),a.jsxs(nc,{children:["将",M,"拆分为",T," + ",V,"，将",R,"拆分为",z," + ",I]})]}),a.jsxs(ec,{children:[a.jsx(tc,{children:"2"}),a.jsxs(nc,{children:["计算十位数相加：",T," + ",z," = ",T+z]})]}),a.jsxs(ec,{children:[a.jsx(tc,{children:"3"}),a.jsxs(nc,{children:["计算个位数相加：",V," + ",I," = ",V+I]})]}),a.jsxs(ec,{children:[a.jsx(tc,{children:"4"}),a.jsxs(nc,{children:["将结果相加：",T+z," + ",V+I," = ",D]})]})]}),a.jsxs(Xl,{children:[a.jsx(Jl,{children:"最终结果"}),a.jsxs("div",{style:{fontSize:"28px",fontWeight:"bold",margin:"10px 0",color:"#52c41a"},children:[M," + ",R," = ",D]}),a.jsx(Fs,{children:Array.from({length:D},(P,N)=>a.jsx(Os,{isResult:!0,children:N+1},N))})]})]})},$=F=>{const M=F.getHours().toString().padStart(2,"0"),R=F.getMinutes().toString().padStart(2,"0");return`${M}:${R}`};return a.jsxs(NO,{children:[a.jsxs(Fe,{activeKey:n,onChange:r,children:[a.jsx(Fe.Tab,{title:"互动练习"},"interactive"),a.jsx(Fe.Tab,{title:"可视化学习"},"visual"),a.jsx(Fe.Tab,{title:"向老师提问"},"chat"),a.jsx(Fe.Tab,{title:"学习进度"},"progress")]}),a.jsxs(PO,{children:[n==="interactive"&&a.jsxs(a.Fragment,{children:[a.jsxs(li,{children:[a.jsxs(Ki,{children:[a.jsx(en,{})," 今日挑战"]}),a.jsxs(RO,{children:[a.jsx(f3,{children:c.question}),a.jsx(MO,{children:c.options.map((F,M)=>a.jsx(TO,{selected:i===F,correct:s&&F===c.correctAnswer,wrong:s&&i===F&&F!==c.correctAnswer,onClick:()=>v(F),children:F},M))}),s&&a.jsxs(AO,{children:[a.jsx("div",{style:{marginBottom:"8px",fontWeight:"bold"},children:i===c.correctAnswer?"答对了！👍":`正确答案是: ${c.correctAnswer}`}),a.jsx("div",{children:c.question.includes("+")&&"加法计算技巧：先算整十数，再加各位数"})]}),a.jsx(J,{block:!0,color:"primary",onClick:h,children:s?"下一题":"换一题"})]})]}),a.jsxs(li,{children:[a.jsxs(Ki,{children:[a.jsx(c1,{})," 趣味视频讲解"]}),a.jsxs(Rf,{autoplay:!0,children:[a.jsx(Rf.Item,{children:a.jsxs("div",{style:{borderRadius:"8px",overflow:"hidden"},children:[a.jsx(Zr,{src:"https://img.freepik.com/free-vector/hand-drawn-mathematics-background_23-2148157873.jpg",fit:"cover"}),a.jsx("div",{style:{padding:"8px",background:"rgba(0,0,0,0.5)",color:"white",position:"absolute",bottom:0,width:"100%"},children:"加法进位口诀"})]})}),a.jsx(Rf.Item,{children:a.jsxs("div",{style:{borderRadius:"8px",overflow:"hidden"},children:[a.jsx(Zr,{src:"https://img.freepik.com/free-vector/hand-drawn-mathematics-background_23-2148157868.jpg",fit:"cover"}),a.jsx("div",{style:{padding:"8px",background:"rgba(0,0,0,0.5)",color:"white",position:"absolute",bottom:0,width:"100%"},children:"连加速算技巧"})]})})]})]})]}),n==="visual"&&a.jsxs(li,{children:[a.jsxs(Ki,{children:[a.jsx(lk,{})," 可视化学习"]}),a.jsxs("div",{children:[a.jsx(f3,{children:c.question}),a.jsx(zO,{children:E()}),a.jsx(J,{block:!0,color:"primary",onClick:h,children:"换一题"})]})]}),n==="chat"&&a.jsxs(a.Fragment,{children:[a.jsxs(GO,{children:[a.jsxs(KO,{children:[a.jsx(YO,{children:a.jsx(En,{})}),a.jsxs(XO,{children:[a.jsx(JO,{children:"数学智能助手"}),a.jsx(eN,{children:"在线，可以提问"})]})]}),a.jsxs(WO,{children:[w.map(F=>a.jsxs(m3,{isUser:F.isUser,children:[!F.isUser&&a.jsx(Hf,{children:a.jsx(En,{})}),a.jsxs(g3,{isUser:F.isUser,children:[F.content,F.time&&a.jsx(UO,{color:F.isUser?"rgba(255,255,255,0.7)":void 0,children:$(F.time)})]}),F.isUser&&a.jsx(Hf,{isUser:!0,children:a.jsx(qr,{})})]},F.id)),x&&a.jsxs(m3,{children:[a.jsx(Hf,{children:a.jsx(En,{})}),a.jsxs(g3,{children:[a.jsxs("div",{style:{display:"flex",gap:"4px"},children:[a.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#1677ff",animation:"bounce 1s infinite"}}),a.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#1677ff",animation:"bounce 1s infinite 0.2s"}}),a.jsx("span",{style:{width:"8px",height:"8px",borderRadius:"50%",backgroundColor:"#1677ff",animation:"bounce 1s infinite 0.4s"}})]}),a.jsx("style",{children:`
                                                @keyframes bounce {
                                                    0%, 100% { transform: translateY(0); }
                                                    50% { transform: translateY(-5px); }
                                                }
                                            `})]})]})]}),a.jsx(HO,{children:a.jsxs("div",{style:{display:"flex",width:"100%",alignItems:"center"},children:[a.jsx(qO,{value:e,onChange:t,placeholder:"例如：怎么计算25+17?",onEnterPress:m}),a.jsx(tN,{children:a.jsx(c1,{})}),a.jsx(ZO,{color:"primary",onClick:m,size:"small",children:"发送"})]})})]}),a.jsxs(li,{children:[a.jsxs(Ki,{children:[a.jsx(Ut,{})," 热门问题"]}),a.jsxs(QO,{children:[a.jsx(Yi,{color:"primary",fill:"outline",onClick:()=>t("怎么计算25+17?"),children:"怎么计算25+17?"}),a.jsx(Yi,{color:"success",fill:"outline",onClick:()=>t("进位加法怎么算?"),children:"进位加法怎么算?"}),a.jsx(Yi,{color:"warning",fill:"outline",onClick:()=>t("连加题有什么技巧?"),children:"连加题有什么技巧?"}),a.jsx(Yi,{color:"danger",fill:"outline",onClick:()=>t("退位减法怎么教孩子?"),children:"退位减法怎么教孩子?"}),a.jsx(Yi,{color:"#722ed1",fill:"outline",onClick:()=>t("口算有哪些常见错误?"),children:"口算有哪些常见错误?"}),a.jsx(Yi,{color:"#13c2c2",fill:"outline",onClick:()=>t("如何提高计算速度?"),children:"如何提高计算速度?"})]})]})]}),n==="progress"&&a.jsxs(a.Fragment,{children:[a.jsxs(li,{children:[a.jsxs(Ki,{children:[a.jsx(qr,{})," 个人学习进度"]}),a.jsxs("div",{style:{marginBottom:"20px"},children:[a.jsxs(x3,{children:[a.jsxs(y3,{children:[a.jsx(Ut,{className:"icon"}),"总体掌握度"]}),a.jsx(w3,{children:"68%"})]}),a.jsx(v3,{percent:68})]}),d.map((F,M)=>a.jsxs("div",{style:{marginBottom:"16px"},children:[a.jsxs(x3,{children:[a.jsxs(y3,{children:[F.icon,F.title]}),a.jsxs(w3,{color:F.color,children:[F.progress,"%"]})]}),a.jsx(v3,{percent:F.progress,color:F.color})]},M))]}),a.jsxs(li,{children:[a.jsxs(Ki,{children:[a.jsx(Ut,{})," 个性化学习计划"]}),a.jsxs(nN,{children:[a.jsx(ap,{className:"icon"}),"推荐学习路径"]}),a.jsx(rN,{children:g.map(F=>a.jsxs(iN,{children:[a.jsx(oN,{children:F.icon}),a.jsxs(sN,{children:[a.jsx(aN,{children:F.name}),a.jsxs(lN,{children:[a.jsx(cN,{status:F.status,children:F.status==="completed"?"已完成":F.status==="in-progress"?`进行中 ${F.progress}`:"未开始"}),F.description]})]}),a.jsx(uN,{size:"small",color:"primary",children:F.status==="not-started"?"开始学习":"继续学习"})]},F.id))}),a.jsx(dN,{color:"primary",block:!0,children:"查看完整学习计划"})]})]})]}),a.jsx(ls,{})]})},hN=L.div`
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 80px;
  padding-top: 24px;
`,pN=L(tt)`
  margin: 16px 20px 24px;
  border-radius: 16px;
  background: linear-gradient(135deg, #1677ff 0%, #4096ff 100%);
  color: white;
  box-shadow: 0 4px 20px rgba(22, 119, 255, 0.15);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 24px rgba(22, 119, 255, 0.2);
  }
`,mN=L.div`
  display: flex;
  align-items: center;
  padding: 24px 0;
  
  .avatar {
    margin-right: 20px;
    border: 3px solid rgba(255, 255, 255, 0.2);
    border-radius: 50%;
    transition: all 0.3s ease;
    
    &:hover {
      border-color: rgba(255, 255, 255, 0.4);
      transform: scale(1.05);
    }
  }
  
  .name {
    font-size: 24px;
    font-weight: bold;
    margin-bottom: 8px;
    text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  }
  
  .grade {
    opacity: 0.9;
    font-size: 15px;
    background: rgba(255, 255, 255, 0.15);
    padding: 4px 12px;
    border-radius: 12px;
    display: inline-block;
  }
`,gN=L.div`
  display: flex;
  justify-content: space-around;
  padding: 20px 0;
  border-top: 1px solid rgba(255, 255, 255, 0.15);
  margin-top: 8px;
  
  .stat-item {
    text-align: center;
    position: relative;
    
    &:not(:last-child)::after {
      content: '';
      position: absolute;
      right: -10px;
      top: 50%;
      transform: translateY(-50%);
      height: 24px;
      width: 1px;
      background: rgba(255, 255, 255, 0.15);
    }
    
    .value {
      font-size: 24px;
      font-weight: bold;
      margin-bottom: 6px;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
    }
    
    .label {
      font-size: 13px;
      opacity: 0.9;
      color: rgba(255, 255, 255, 0.9);
    }
  }
`,vN=L(ce)`
  margin: 0 20px 24px;
  border-radius: 12px;
  overflow: hidden;
  background: white;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
  
  .adm-list-item {
    padding: 16px;
    
    .adm-list-item-content-prefix {
      font-size: 20px;
      color: #1677ff;
      margin-right: 12px;
    }
    
    .adm-list-item-content-main {
      font-size: 16px;
      color: #333;
    }
    
    .adm-list-item-content-arrow {
      color: #999;
      font-size: 16px;
    }
  }
`,xN=L(J)`
  margin: 0 20px;
  height: 48px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  --text-color: #ff4d4f;
  --border-color: rgba(255, 77, 79, 0.3);
  width: calc(100% - 40px);
  max-width: 100%;
  box-sizing: border-box;
  
  &:hover {
    --text-color: #ff7875;
    --border-color: rgba(255, 77, 79, 0.5);
  }
`,yN=()=>{const e=ze(),t=()=>{e("/user-profile-detail")},n=()=>{e("/notifications")},r=()=>{e("/feedback")};return a.jsxs(hN,{children:[a.jsxs(pN,{children:[a.jsxs(mN,{children:[a.jsx($6,{className:"avatar",src:"",style:{"--size":"72px","--border-radius":"36px",background:"#fff"}}),a.jsxs("div",{children:[a.jsx("div",{className:"name",children:"小明"}),a.jsx("div",{className:"grade",children:"三年级二班"})]})]}),a.jsxs(gN,{children:[a.jsxs("div",{className:"stat-item",children:[a.jsx("div",{className:"value",children:"120"}),a.jsx("div",{className:"label",children:"累计练习"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("div",{className:"value",children:"85%"}),a.jsx("div",{className:"label",children:"正确率"})]}),a.jsxs("div",{className:"stat-item",children:[a.jsx("div",{className:"value",children:"15"}),a.jsx("div",{className:"label",children:"连续打卡"})]})]})]}),a.jsxs(vN,{children:[a.jsx(ce.Item,{prefix:a.jsx(qr,{}),onClick:t,arrow:a.jsx(Rr,{}),children:"个人资料"}),a.jsx(ce.Item,{prefix:a.jsx(En,{}),onClick:n,arrow:a.jsx(Rr,{}),children:"消息通知"}),a.jsx(ce.Item,{prefix:a.jsx(ns,{}),onClick:()=>e("/settings"),arrow:a.jsx(Rr,{}),children:"系统设置"}),a.jsx(ce.Item,{prefix:a.jsx(bu,{}),onClick:r,arrow:a.jsx(Rr,{}),children:"帮助与反馈"})]}),a.jsx(xN,{block:!0,color:"danger",fill:"outline",onClick:()=>e("/login"),children:"退出登录"}),a.jsx(ls,{})]})},wN=L.div`
  min-height: 100vh;
  background: #f5f7fa;
  padding-bottom: 70px;
`,bN=L(Ve)`
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
  font-weight: 600;
`,CN=L.div`
  padding: 16px;
`,W1=L(tt)`
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  
  .adm-card-header {
    border-bottom: 1px solid #f5f5f5;
    padding-bottom: 12px;
    font-weight: 600;
  }
  
  .adm-card-header-title {
    font-size: 16px;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 8px;
      color: #1677ff;
    }
  }
`,kN=L.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 12px;
  margin-bottom: 16px;
`,rc=L.div`
  background: #ffffff;
  border-radius: 12px;
  padding: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  
  .label {
    color: #666;
    font-size: 13px;
    margin-bottom: 8px;
  }
  
  .value {
    font-size: 22px;
    font-weight: bold;
    color: #1677ff;
  }
  
  .trend {
    display: flex;
    align-items: center;
    font-size: 12px;
    margin-top: 6px;
    
    &.up {
      color: #22bb33;
    }
    
    &.down {
      color: #ff4d4f;
    }
  }
`,jN=L(W1)`
  .title {
    font-size: 16px;
    margin-bottom: 16px;
    font-weight: 600;
    display: flex;
    align-items: center;
    
    svg {
      margin-right: 8px;
      color: #1677ff;
    }
  }
`,EN=L.div`
  margin-bottom: 20px;
  
  .header {
    display: flex;
    justify-content: space-between;
    margin-bottom: 8px;
    
    .name {
      font-weight: 500;
    }
    
    .percent {
      font-weight: 600;
      color: #1677ff;
    }
  }
`,SN=L(Nv)`
  --track-width: 10px;
  --fill-color: ${e=>e.percent&&e.percent>=80?"#22bb33":e.percent&&e.percent>=60?"#1677ff":e.percent&&e.percent>=40?"#faad14":"#ff4d4f"};
  border-radius: 5px;
`,LN=L.div`
  .item {
    display: flex;
    margin-bottom: 12px;
    padding-bottom: 12px;
    border-bottom: 1px solid #f5f5f5;
    
    &:last-child {
      margin-bottom: 0;
      padding-bottom: 0;
      border-bottom: none;
    }
    
    .icon {
      color: #1677ff;
      margin-right: 12px;
      flex-shrink: 0;
      font-size: 20px;
    }
    
    .content {
      flex: 1;
      
      .title {
        font-weight: 500;
        margin-bottom: 4px;
      }
      
      .desc {
        color: #666;
        font-size: 13px;
        line-height: 1.5;
      }
    }
  }
`,$N=L(ut)`
  margin-right: 8px;
  margin-bottom: 8px;
  padding: 6px 10px;
  border-radius: 16px;
  background: #e6f4ff;
  color: #1677ff;
  font-size: 12px;
`,_N=L(Fe)`
  --title-font-size: 14px;
  --active-line-color: #1677ff;
  --active-title-color: #1677ff;
  margin-bottom: 16px;
  
  .adm-tabs-header {
    border-bottom: 1px solid #f0f0f0;
  }
`,FN=L.div`
  display: flex;
  gap: 12px;
  margin-top: 20px;
  padding: 0 4px;
`,ON=L(J)`
  border-radius: 20px;
  margin-top: 8px;
  --background-color: #1677ff;
`,b3=L(J)`
  flex: 1;
  height: 44px;
  border-radius: 22px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  
  svg {
    font-size: 18px;
    margin-right: 6px;
  }
  
  &.share-button {
    color: #1677ff;
    background: #f0f7ff;
    border: 1px solid #d4e8ff;
    
    &:active {
      background: #e6f1ff;
      transform: scale(0.98);
    }
  }
  
  &.download-button {
    color: white;
    background: linear-gradient(135deg, #1677ff 0%, #0e5cdb 100%);
    border: none;
    
    &:active {
      background: linear-gradient(135deg, #0e5cdb 0%, #0a4db8 100%);
      transform: scale(0.98);
    }
  }
`,NN=()=>{const[e,t]=f.useState("week"),n={week:{totalQuestions:120,correctRate:85,averageTime:"15秒",streak:5,improvement:12,weakPoints:["减法借位","乘法进位","两位数除法","多位数加法"]},month:{totalQuestions:480,correctRate:78,averageTime:"18秒",streak:22,improvement:25,weakPoints:["乘法进位","分数运算","两位数除法"]}},r=[{name:"加法",progress:90,examples:35},{name:"减法",progress:75,examples:30},{name:"乘法",progress:60,examples:28},{name:"除法",progress:70,examples:27}],i=[{title:"加强减法借位练习",description:"根据你的练习情况，减法借位是你当前的薄弱环节，建议在下周增加此类题目的练习频率。",icon:a.jsx(u6,{})},{title:"增加乘法练习频率",description:"乘法是你的进步空间较大的区域，建议每天安排15分钟专项练习。",icon:a.jsx(Vm,{})},{title:"保持每日练习习惯",description:"你已经连续练习5天，继续保持将获得额外的积分奖励！",icon:a.jsx(Ut,{})}],o=()=>{de.show({content:"分享成功！",position:"center"})},s=()=>{de.show({content:"报告下载中...",position:"center"})},l=()=>{de.show({content:"已生成专项练习!",position:"center"})},c=n[e];return a.jsxs(wN,{children:[a.jsx(bN,{children:"学习报告"}),a.jsxs(CN,{children:[a.jsxs(_N,{activeKey:e,onChange:u=>t(u),children:[a.jsx(Fe.Tab,{title:"本周数据"},"week"),a.jsx(Fe.Tab,{title:"本月数据"},"month")]}),a.jsxs(kN,{children:[a.jsxs(rc,{children:[a.jsx("div",{className:"label",children:"练习题目"}),a.jsx("div",{className:"value",children:c.totalQuestions}),a.jsx("div",{className:"trend up",children:"↑ 较上期增加15题"})]}),a.jsxs(rc,{children:[a.jsx("div",{className:"label",children:"正确率"}),a.jsxs("div",{className:"value",children:[c.correctRate,"%"]}),a.jsx("div",{className:"trend up",children:"↑ 较上期提升5%"})]}),a.jsxs(rc,{children:[a.jsx("div",{className:"label",children:"平均用时"}),a.jsx("div",{className:"value",children:c.averageTime}),a.jsx("div",{className:"trend down",children:"↓ 较上期减少3秒"})]}),a.jsxs(rc,{children:[a.jsx("div",{className:"label",children:"连续练习"}),a.jsxs("div",{className:"value",children:[c.streak,"天"]}),a.jsx("div",{className:"trend up",children:"↑ 个人最佳"})]})]}),a.jsxs(W1,{title:a.jsxs("div",{children:[a.jsx(ns,{})," 待加强项"]}),children:[a.jsx(ge,{wrap:!0,children:c.weakPoints.map(u=>a.jsx($N,{children:u},u))}),a.jsx(ON,{color:"primary",block:!0,onClick:l,children:"生成针对性练习"})]}),a.jsxs(jN,{children:[a.jsxs("div",{className:"title",children:[a.jsx(Vm,{})," 各类型掌握程度"]}),r.map(u=>a.jsxs(EN,{children:[a.jsxs("div",{className:"header",children:[a.jsxs("span",{className:"name",children:[u.name," (",u.examples,"题)"]}),a.jsxs("span",{className:"percent",children:[u.progress,"%"]})]}),a.jsx(SN,{percent:u.progress})]},u.name))]}),a.jsx(W1,{title:a.jsxs("div",{children:[a.jsx(Ut,{})," 学习建议"]}),children:a.jsx(LN,{children:i.map((u,d)=>a.jsxs("div",{className:"item",children:[a.jsx("div",{className:"icon",children:u.icon}),a.jsxs("div",{className:"content",children:[a.jsx("div",{className:"title",children:u.title}),a.jsx("div",{className:"desc",children:u.description})]})]},d))})}),a.jsxs(FN,{children:[a.jsxs(b3,{className:"share-button",onClick:o,children:[a.jsx(Ut,{})," 分享报告"]}),a.jsxs(b3,{className:"download-button",onClick:s,children:[a.jsx(ek,{})," 下载报告"]})]})]}),a.jsx(ls,{})]})},PN=L.div`
  min-height: 100vh;
  background: #f5f5f5;
`,RN=[{label:"一年级",value:"一年级"},{label:"二年级",value:"二年级"},{label:"三年级",value:"三年级"},{label:"四年级",value:"四年级"},{label:"五年级",value:"五年级"},{label:"六年级",value:"六年级"}],MN=[{label:"15秒",value:15},{label:"30秒",value:30},{label:"45秒",value:45},{label:"60秒",value:60},{label:"90秒",value:90}],TN=[{label:"5题",value:5},{label:"10题",value:10},{label:"15题",value:15},{label:"20题",value:20},{label:"25题",value:25},{label:"30题",value:30},{label:"40题",value:40},{label:"50题",value:50}],AN=()=>{const e=ze(),[t,n]=f.useState(30),[r,i]=f.useState(20),[o,s]=f.useState("一年级"),[l,c]=f.useState(!1),[u,d]=f.useState(!1),[p,g]=f.useState(!1),w=C=>{n(C[0]),c(!1)},y=C=>{i(C[0]),d(!1)},x=C=>{s(C[0]),g(!1)};return a.jsxs(PN,{children:[a.jsx(Ve,{onBack:()=>e(-1),children:"系统设置"}),a.jsxs(ce,{style:{margin:"20px"},children:[a.jsx(ce.Item,{extra:a.jsx(va,{}),children:"声音效果"}),a.jsx(ce.Item,{extra:a.jsx(va,{}),children:"震动反馈"}),a.jsx(ce.Item,{extra:a.jsx(va,{defaultChecked:!0}),children:"每日提醒"})]}),a.jsxs(ce,{header:"练习设置",style:{margin:"20px"},children:[a.jsx(ce.Item,{extra:`${t}秒`,onClick:()=>c(!0),arrow:!0,children:"答题时间"}),a.jsx(ce.Item,{extra:`${r}题`,onClick:()=>d(!0),arrow:!0,children:"每组题目数量"}),a.jsx(ce.Item,{extra:o,onClick:()=>g(!0),arrow:!0,children:"默认难度等级"})]}),a.jsxs(ce,{header:"关于",style:{margin:"20px"},children:[a.jsx(ce.Item,{extra:"1.0.0",children:"当前版本"}),a.jsx(ce.Item,{onClick:()=>e("/user-agreement"),children:"用户协议"}),a.jsx(ce.Item,{onClick:()=>e("/privacy-policy"),children:"隐私政策"})]}),a.jsx(Ef,{columns:[MN],visible:l,onClose:()=>c(!1),value:[t],onConfirm:w,title:"选择答题时间"}),a.jsx(Ef,{columns:[TN],visible:u,onClose:()=>d(!1),value:[r],onConfirm:y,title:"选择每组题目数量"}),a.jsx(Ef,{columns:[RN],visible:p,onClose:()=>g(!1),value:[o],onConfirm:x,title:"选择难度等级"})]})},IN=L.div`
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 32px;
`,zN=L(Ve)`
  background: white;
  --height: 52px;
  font-size: 18px;
  font-weight: 500;
  color: #333;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.04);
`,DN=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 0;
  background: linear-gradient(to bottom, #fff, #f9fbff);
  margin-bottom: 16px;
  position: relative;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.03);
  
  .avatar-wrapper {
    position: relative;
    margin-bottom: 16px;
    
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      border-radius: 50%;
      box-shadow: 0 4px 16px rgba(22, 119, 255, 0.15);
      pointer-events: none;
    }
  }
  
  .avatar {
    border: 3px solid rgba(255, 255, 255, 0.9);
    transition: all 0.3s ease;
    
    &:hover {
      transform: scale(1.03);
    }
  }
  
  .upload-text {
    margin-top: 12px;
    color: #1677ff;
    font-size: 15px;
    display: flex;
    align-items: center;
    gap: 4px;
    padding: 6px 16px;
    background: rgba(22, 119, 255, 0.06);
    border-radius: 16px;
    transition: all 0.2s ease;
    
    &:hover {
      background: rgba(22, 119, 255, 0.1);
      transform: translateY(-1px);
    }
    
    &:active {
      transform: translateY(0);
    }
  }
`,BN=L(kt)`
  background: #fff;
  padding: 8px 20px 16px;
  margin: 0 16px;
  border-radius: 16px;
  box-shadow: 0 2px 12px rgba(0, 0, 0, 0.04);
  
  .adm-list {
    --border-inner: 1px solid #f0f0f0;
    --border-top: none;
    --border-bottom: none;
    --padding-left: 0;
    --padding-right: 0;
  }
  
  .adm-list-item {
    padding-left: 0;
    padding-right: 0;
  }
  
  .adm-list-item-content {
    padding-right: 0;
  }
  
  .form-buttons {
    display: flex;
    gap: 16px;
    margin: 28px 0 8px;
  }
  
  .adm-form-item-label {
    font-size: 15px;
    font-weight: 500;
    padding-left: 0;
    min-width: 80px;
  }
  
  .adm-input {
    --font-size: 15px;
    --color: #333;
    --placeholder-color: #bbb;
    padding: 10px 0;
    background-color: transparent;
    transition: all 0.2s ease;
    
    &:focus {
      --color: #1677ff;
    }
  }
  
  .adm-input-readonly {
    --color: #666;
  }
`,ic=L.div`
  display: flex;
  align-items: center;
  
  .icon {
    margin-right: 10px;
    color: #1677ff;
    font-size: 18px;
  }
`,qf=L(J)`
  height: 46px;
  border-radius: 12px;
  font-size: 16px;
  font-weight: 500;
  
  &.primary {
    --background-color: #1677ff;
    --text-color: white;
    box-shadow: 0 4px 12px rgba(22, 119, 255, 0.2);
    
    &:hover {
      --background-color: #4096ff;
    }
  }
  
  &.cancel {
    --background-color: #f5f5f5;
    --text-color: #666;
    
    &:hover {
      --background-color: #e8e8e8;
    }
  }
`,oc=L.div`
  margin-bottom: 8px;
  
  &.editing {
    .adm-input {
      background-color: #f9fbff;
      padding: 10px 12px;
      border-radius: 8px;
    }
  }
`,VN=()=>{const e=ze(),[t]=kt.useForm(),[n,r]=f.useState(!1),i={name:"小明",grade:"三年级二班",phone:"138****1234",email:"xiaoming@example.com"},o=()=>{e(-1)},s=()=>{r(!0)},l=()=>{t.setFieldsValue(i),r(!1)},c=()=>{t.validateFields().then(d=>{console.log("保存的信息:",d),de.show({icon:"success",content:"保存成功",position:"center"}),r(!1)}).catch(d=>{console.log("表单验证失败:",d)})},u=()=>{de.show({content:"头像上传功能开发中...",position:"center"})};return a.jsxs(IN,{children:[a.jsx(zN,{onBack:o,children:"个人资料"}),a.jsxs(DN,{children:[a.jsx("div",{className:"avatar-wrapper",children:a.jsx($6,{src:"",className:"avatar",style:{"--size":"90px","--border-radius":"45px",background:"#fff"}})}),a.jsxs("div",{className:"upload-text",onClick:u,children:[a.jsx(c1,{})," 更换头像"]})]}),a.jsxs(BN,{form:t,initialValues:i,footer:n?a.jsxs("div",{className:"form-buttons",children:[a.jsx(qf,{block:!0,className:"cancel",onClick:l,children:"取消"}),a.jsx(qf,{block:!0,className:"primary",onClick:c,children:"保存"})]}):a.jsx(qf,{block:!0,className:"primary",onClick:s,style:{margin:"28px 0 8px"},children:"编辑资料"}),children:[a.jsx(oc,{className:n?"editing":"",children:a.jsx(kt.Item,{name:"name",label:a.jsxs(ic,{children:[a.jsx(qr,{className:"icon"})," 姓名"]}),children:a.jsx(Xe,{placeholder:"请输入姓名",readOnly:!n})})}),a.jsx(oc,{className:n?"editing":"",children:a.jsx(kt.Item,{name:"grade",label:a.jsxs(ic,{children:[a.jsx(tk,{className:"icon"})," 班级"]}),children:a.jsx(Xe,{placeholder:"请输入班级",readOnly:!n})})}),a.jsx(oc,{className:n?"editing":"",children:a.jsx(kt.Item,{name:"phone",label:a.jsxs(ic,{children:[a.jsx(En,{className:"icon"})," 手机号"]}),children:a.jsx(Xe,{placeholder:"请输入手机号",readOnly:!n})})}),a.jsx(oc,{className:n?"editing":"",children:a.jsx(kt.Item,{name:"email",label:a.jsxs(ic,{children:[a.jsx(sk,{className:"icon"})," 邮箱"]}),children:a.jsx(Xe,{placeholder:"请输入邮箱",readOnly:!n})})})]})]})},WN=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 24px;
`,UN=L(Ve)`
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`,HN=L(Fe)`
  --adm-color-primary: #1677ff;
  background: #fff;
  margin-bottom: 12px;
  
  .adm-tabs-tab {
    font-size: 15px;
  }
`,qN=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 60px 0;
  color: #999;
  
  .text {
    margin-top: 12px;
    font-size: 14px;
  }
`,ZN=L(ce.Item)`
  &.unread {
    background: rgba(22, 119, 255, 0.05);
  }
  
  .time {
    font-size: 12px;
    color: #999;
    margin-top: 4px;
  }
  
  .content {
    margin-top: 8px;
    color: #666;
    font-size: 14px;
    line-height: 1.5;
  }
`,QN=L.div`
  position: absolute;
  top: 8px;
  right: 8px;
  width: 8px;
  height: 8px;
  border-radius: 4px;
  background-color: #ff3141;
`,GN=L.button`
  display: block;
  width: calc(100% - 24px);
  margin: 16px 12px;
  padding: 12px 0;
  background: #fff;
  border: 1px solid #1677ff;
  border-radius: 8px;
  color: #1677ff;
  font-size: 15px;
  text-align: center;
  cursor: pointer;
  transition: all 0.3s;

  &:hover {
    background: rgba(22, 119, 255, 0.05);
  }

  &:active {
    background: rgba(22, 119, 255, 0.1);
  }
`,Zf=L(Qa)`
  .adm-badge-content {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    min-width: 16px;
    min-height: 16px;
    padding: 0 4px;
    line-height: 1;
  }
`,KN=()=>{const e=ze(),[t,n]=f.useState("all"),[r,i]=f.useState([{id:"1",title:"练习提醒",content:"今天还没完成每日练习，快来挑战一下吧！",time:"10分钟前",read:!1,type:"system"},{id:"2",title:"新功能上线",content:"口算挑战赛功能已上线，快来参与吧！",time:"2小时前",read:!0,type:"system"},{id:"3",title:"老师回复",content:"你的问题已解答，请查看详情。",time:"昨天",read:!1,type:"message"},{id:"4",title:"系统维护通知",content:"系统将于明天凌晨2:00-4:00进行维护，请提前安排好学习时间。",time:"3天前",read:!0,type:"system"}]),o=()=>{e(-1)},s=y=>{p(y),e(`/notification-detail/${y}`)},l=t==="all"?r:r.filter(y=>y.type===(t==="system"?"system":"message")),c=r.filter(y=>!y.read).length,u=r.filter(y=>!y.read&&y.type==="system").length,d=r.filter(y=>!y.read&&y.type==="message").length,p=y=>{i(x=>x.map(C=>C.id===y?{...C,read:!0}:C))},g=y=>{i(x=>x.filter(C=>C.id!==y))},w=()=>{i(y=>y.map(x=>({...x,read:!0})))};return a.jsxs(WN,{children:[a.jsx(UN,{onBack:o,children:"消息通知"}),a.jsxs(HN,{activeKey:t,onChange:n,children:[a.jsx(Fe.Tab,{title:a.jsxs(a.Fragment,{children:["全部",c>0&&a.jsx(Zf,{content:c,style:{marginLeft:4}})]})},"all"),a.jsx(Fe.Tab,{title:a.jsxs(a.Fragment,{children:["系统通知",u>0&&a.jsx(Zf,{content:u,style:{marginLeft:4}})]})},"system"),a.jsx(Fe.Tab,{title:a.jsxs(a.Fragment,{children:["消息提醒",d>0&&a.jsx(Zf,{content:d,style:{marginLeft:4}})]})},"message")]}),l.length>0?a.jsxs(a.Fragment,{children:[a.jsx(ce,{children:l.map(y=>a.jsx(o_,{rightActions:[{key:"delete",text:"删除",color:"danger",onClick:()=>g(y.id)}],children:a.jsxs(ZN,{className:y.read?"":"unread",prefix:a.jsxs("div",{style:{position:"relative"},children:[y.type==="system"?a.jsx(a6,{style:{fontSize:24}}):a.jsx(En,{style:{fontSize:24}}),!y.read&&a.jsx(QN,{})]}),onClick:()=>s(y.id),children:[a.jsx("div",{children:y.title}),a.jsx("div",{className:"time",children:y.time}),a.jsx("div",{className:"content",children:y.content})]})},y.id))}),c>0&&a.jsx(GN,{onClick:w,children:"全部标记为已读"})]}):a.jsxs(qN,{children:[a.jsx(Cp,{image:a.jsx(l6,{style:{fontSize:48,color:"#ccc"}}),description:"暂无消息通知"}),a.jsx("div",{className:"text",children:"现在没有任何通知，所有新消息将显示在这里"})]})]})},C3=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 24px;
`,k3=L(Ve)`
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`,j3=L.div`
  background: #fff;
  margin: 12px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,YN=L.div`
  display: flex;
  align-items: center;
  margin-bottom: 16px;
  
  .icon {
    margin-right: 8px;
    display: flex;
    width: 32px;
    height: 32px;
    background: #f0f7ff;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    color: #1677ff;
  }
  
  .title {
    font-size: 18px;
    font-weight: 500;
  }
`,XN=L.div`
  font-size: 13px;
  color: #999;
  margin-bottom: 16px;
`,JN=L.div`
  font-size: 15px;
  line-height: 1.6;
  color: #333;
`,eP=L.div`
  margin: 16px 12px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden; // 防止 List.Item 边框溢出圆角
`,tP=L.div`
  padding: 12px 16px;
  font-size: 15px;
  font-weight: 500;
  color: #333;
  border-bottom: 1px solid #f0f0f0;
`,nP=L(ce.Item)`
  .adm-list-item-content-prefix {
    font-size: 16px;
    color: #999;
    margin-right: 10px;
  }
  .adm-list-item-content-main {
    font-size: 14px;
    color: #666;
  }
  .adm-list-item-content-extra {
    font-size: 12px;
    color: #999;
  }
`,sc=[{id:"5",title:"老师评价提醒",content:'李老师刚刚评价了你的"进位加法"练习，认为你进步很大，但在连续进位方面还需要加强练习。加油！',time:"5分钟前",read:!1,type:"message"},{id:"1",title:"练习提醒",content:'今天的"两位数乘法"每日练习还未完成，快来挑战一下，巩固所学知识吧！',time:"10分钟前",read:!1,type:"system"},{id:"11",title:"系统维护通知",content:"原定于今晚的系统维护已顺利完成，服务已恢复正常，感谢您的耐心等待。",time:"30分钟前",read:!0,type:"system"},{id:"6",title:"排行榜更新",content:'恭喜你！在"每周速算之星"排行榜中，你的排名上升了 5 位，目前位列第 12 名！继续努力！',time:"1小时前",read:!0,type:"system"},{id:"12",title:"老师回复",content:'关于你提出的"负数乘法"的疑问，记住"负负得正，正负得负"的口诀是关键。我们下次课上可以再详细讲解几个例子。',time:"2小时前",read:!1,type:"message"},{id:"9",title:"练习提醒",content:'昨天的"除法练习"你表现很棒，今天继续保持哦！去完成新的练习吧！',time:"昨天上午",read:!0,type:"system"},{id:"3",title:"老师回复",content:'您关于 100 以内加减法进位的问题，关键在于理解"凑十法"。例如 8 + 7，可以把 7 分成 2 和 5，先算 8 + 2 = 10，再算 10 + 5 = 15。多加练习就能熟练掌握了！',time:"昨天",read:!1,type:"message"},{id:"2",title:"新功能上线",content:'全新的"错题本"功能已经上线！系统会自动收录你的错题，方便你随时回顾和练习。快去"我的错题"看看吧！',time:"2天前",read:!0,type:"system"},{id:"7",title:"练习完成通知",content:'你已成功完成"混合运算专项练习"，用时 5 分 30 秒，正确率 95%。详细报告已生成，可在"学习报告"中查看。',time:"2天前",read:!0,type:"system"},{id:"13",title:"新功能上线",content:'我们推出了"AI智能辅导"功能，它可以根据你的学习情况智能推荐练习题目，快来体验一下吧！就在首页哦。',time:"3天前",read:!0,type:"system"},{id:"4",title:"系统维护通知",content:"为了提供更好的服务，系统将于本周日凌晨 2:00 至 4:00 进行升级维护，届时可能无法登录，请提前安排好学习时间。",time:"3天前",read:!0,type:"system"},{id:"14",title:"系统维护通知",content:"【提醒】系统维护将在今晚开始，请注意保存练习进度。",time:"3天前晚上",read:!0,type:"system"},{id:"10",title:"练习提醒",content:'你设置的"周末加法冲刺"练习时间到了，开始挑战吧！',time:"上周六",read:!0,type:"system"},{id:"8",title:"欢迎加入！",content:'欢迎来到小学数学口算训练系统！在这里，你可以通过各种有趣的练习提升口算能力。先从"每日练习"开始吧！',time:"一周前",read:!0,type:"system"}],rP=()=>{const e=ze(),{id:t}=l5(),n=sc.find(o=>o.id===t),r=()=>{e(-1)};if(!n)return a.jsxs(C3,{children:[a.jsx(k3,{onBack:r,children:"消息详情"}),a.jsx(j3,{children:a.jsx("div",{children:"消息不存在"})})]});const i=sc.filter(o=>o.title===n.title&&o.id!==n.id).sort((o,s)=>sc.indexOf(o)-sc.indexOf(s));return a.jsxs(C3,{children:[a.jsx(k3,{onBack:r,children:"消息详情"}),a.jsxs(j3,{children:[a.jsxs(YN,{children:[a.jsx("div",{className:"icon",children:n.type==="system"?a.jsx(a6,{}):a.jsx(En,{})}),a.jsx("div",{className:"title",children:n.title})]}),a.jsx(XN,{children:n.time}),a.jsx(JN,{children:n.content})]}),i.length>0&&a.jsxs(eP,{children:[a.jsxs(tP,{children:["历史",n.title]}),a.jsx(ce,{children:i.map(o=>a.jsx(nP,{prefix:a.jsx(Ha,{}),extra:o.time,children:o.content},o.id))})]})]})},iP=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 24px;
`,oP=L(Ve)`
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`,m8=L.div`
  background: #fff;
  margin: 12px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,sP=L.div`
  display: flex;
  margin: 12px;
  gap: 12px;
`,E3=L.div`
  flex: 1;
  padding: 12px 0;
  text-align: center;
  background-color: ${e=>e.active?"#e6f4ff":"#fff"};
  color: ${e=>e.active?"#1677ff":"#333"};
  border-radius: 8px;
  font-size: 15px;
  font-weight: 500;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  transition: all 0.3s ease;
  
  svg {
    margin-right: 8px;
    color: ${e=>e.active?"#1677ff":"#999"};
  }
  
  &:hover {
    background-color: ${e=>e.active?"#e6f4ff":"#f7f7f7"};
  }
`,g8=L.div`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  
  svg {
    margin-right: 8px;
    color: #1677ff;
  }
`,aP=L(Dv)`
  --font-size: 15px;
  margin-bottom: 20px;
  background: #f7f7f7;
  border-radius: 12px;
  padding: 8px 12px;
  --placeholder-color: #999;
  min-height: 120px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.03);
  border: 1px solid #ebebeb;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #1677ff;
    background: #f0f7ff;
  }
`,lP=L(Xe)`
  --font-size: 15px;
  margin-bottom: 20px;
  background: #f7f7f7;
  border-radius: 12px;
  padding: 12px;
  --placeholder-color: #999;
  height: 48px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.03);
  border: 1px solid #ebebeb;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #1677ff;
    background: #f0f7ff;
  }
`,cP=L.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  
  .stars {
    display: flex;
    margin-top: 8px;
  }
  
  .star {
    font-size: 24px;
    margin-right: 8px;
    color: #ffcb45;
    cursor: pointer;
  }
`,uP=L(J)`
  margin-top: 8px;
  border-radius: 20px;
`,dP=L.div`
  margin-bottom: 20px;
  padding: 16px;
  border-radius: 12px;
  background: #f9fafc;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.03);
  transition: all 0.3s ease;
  border-left: 3px solid #1677ff;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  }
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .question {
    font-size: 16px;
    font-weight: 600;
    color: #1a1a1a;
    margin-bottom: 12px;
    display: flex;
    align-items: flex-start;
    
    &:before {
      content: 'Q';
      min-width: 24px;
      height: 24px;
      border-radius: 12px;
      background: #1677ff;
      color: white;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      font-size: 14px;
      font-weight: bold;
    }
  }
  
  .answer {
    font-size: 15px;
    color: #4d4d4d;
    line-height: 1.6;
    margin-left: 32px;
    padding-top: 2px;
    display: flex;
    align-items: flex-start;
    
    &:before {
      content: 'A';
      min-width: 24px;
      height: 24px;
      border-radius: 12px;
      background: #f0f0f0;
      color: #666;
      display: flex;
      align-items: center;
      justify-content: center;
      margin-right: 8px;
      margin-left: -32px;
      font-size: 14px;
      font-weight: bold;
    }
  }
`,fP=L(m8)`
  padding: 20px;
  background: white;
  border-radius: 12px;
`,hP=L(g8)`
  font-size: 18px;
  margin-bottom: 24px;
  padding-bottom: 12px;
  border-bottom: 1px solid #f0f0f0;
  
  svg {
    font-size: 20px;
    color: #1677ff;
  }
`,pP=()=>{const e=ze(),[t,n]=f.useState("feedback"),[r,i]=f.useState(""),[o,s]=f.useState(""),[l,c]=f.useState(0),u=()=>{e(-1)},d=async()=>{if(!r.trim()){de.show({content:"请填写反馈内容",position:"center"});return}de.show({icon:"loading",content:"提交中...",duration:1e3}),setTimeout(()=>{Ld.alert({content:"感谢您的反馈！我们会尽快处理。",confirmText:"确定",onConfirm:()=>{i(""),s(""),c(0)}})},1e3)},p=[{question:"如何开始我的第一次练习？",answer:'在首页点击"开始练习"按钮，或者在底部导航栏选择"练习"，然后选择合适的练习模式即可开始练习。'},{question:"如何查看我的错题集？",answer:'在"我的"页面找到"错题集"，或者在练习页面选择"错题练习"，系统会自动记录并整理您做错的题目。'},{question:"如何使用AI辅导功能？",answer:'点击底部导航栏的"AI辅导"，您可以向AI助手提问，获取针对性的解答和视觉化的解释。'},{question:"如何更改练习难度？",answer:'在"设置"页面的"练习设置"中，您可以调整默认难度等级，也可以在开始练习前选择难度。'},{question:"如何查看学习报告？",answer:'在"我的"页面找到"学习报告"，系统会自动生成您的练习数据统计和进步报告。'}];return a.jsxs(iP,{children:[a.jsx(oP,{onBack:u,children:"帮助与反馈"}),a.jsxs(sP,{children:[a.jsxs(E3,{active:t==="feedback",onClick:()=>n("feedback"),children:[a.jsx(En,{})," 意见反馈"]}),a.jsxs(E3,{active:t==="faq",onClick:()=>n("faq"),children:[a.jsx(bu,{})," 常见问题"]})]}),t==="feedback"?a.jsxs(m8,{children:[a.jsxs(g8,{children:[a.jsx(En,{})," 问题反馈"]}),a.jsx(aP,{placeholder:"请描述您遇到的问题或建议...",value:r,onChange:i,rows:5,maxLength:300,showCount:!0}),a.jsx(lP,{placeholder:"留下您的联系方式（选填）",value:o,onChange:s}),a.jsxs(cP,{children:[a.jsx("div",{style:{fontSize:"14px",color:"#666"},children:"应用评分"}),a.jsx("div",{className:"stars",children:[1,2,3,4,5].map(g=>a.jsx("div",{className:"star",onClick:()=>c(g),children:g<=l?a.jsx(gn,{}):a.jsx(Ut,{})},g))})]}),a.jsx(uP,{color:"primary",block:!0,onClick:d,disabled:!r.trim(),children:"提交反馈"})]}):a.jsxs(fP,{children:[a.jsxs(hP,{children:[a.jsx(bu,{})," 常见问题"]}),p.map((g,w)=>a.jsxs(dP,{children:[a.jsx("div",{className:"question",children:g.question}),a.jsx("div",{className:"answer",children:g.answer})]},w))]})]})},mP=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 20px;
`,gP=L(Ve)`
  background-color: #fff;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  position: sticky;
  top: 0;
  z-index: 100;
`,vP=L.div`
  padding: 16px;
`,xP=L(Fe)`
  --active-line-color: #1677ff;
  --active-title-color: #1677ff;
  --fixed-active-line-width: 30px;
  background-color: #fff;
  position: sticky;
  top: 45px;
  z-index: 99;
  
  .adm-tabs-header {
    border-bottom: 1px solid #f0f0f0;
    padding: 0 8px;
  }
  
  .adm-tabs-tab {
    font-size: 15px;
    padding: 12px 0;
  }
`,yP=L.div`
  background: #fff;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 16px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
  }
`,wP=L.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,bP=L.div`
  font-size: 16px;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  .icon {
    margin-right: 8px;
    display: flex;
    width: 32px;
    height: 32px;
    background: #f0f7ff;
    border-radius: 16px;
    align-items: center;
    justify-content: center;
    color: #1677ff;
  }
`,CP=L.div`
  font-size: 13px;
  color: #999;
`,kP=L.div`
  margin-bottom: 12px;
`,Ps=L.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 8px;
  font-size: 14px;
  
  .label {
    color: #666;
  }
  
  .value {
    font-weight: 500;
  }
`,jP=L.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-top: 1px solid #f5f5f5;
  padding-top: 12px;
  margin-top: 12px;
`,EP=L.div`
  display: flex;
  gap: 8px;
`,SP=L.div`
  color: #1677ff;
  font-size: 14px;
  display: flex;
  align-items: center;
  cursor: pointer;
`,LP=L(Cp)`
  margin: 60px 0;
  
  .adm-empty-description {
    color: #999;
    font-size: 15px;
  }
`,$P=L.div`
  padding: 12px 16px;
  background-color: #fff;
  margin-bottom: 16px;
  box-shadow: 0 1px 4px rgba(0, 0, 0, 0.05);
  position: relative;
`,_P=L.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 12px;
`,Qf=L.div`
  font-size: 15px;
  font-weight: 500;
  display: flex;
  align-items: center;
  
  .filter-icon {
    margin-right: 6px;
    color: #1677ff;
  }
`,S3=L.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 16px;
  
  .adm-tag {
    padding: 4px 12px;
    font-size: 13px;
    transition: all 0.2s ease;
  }
`,FP=L.span`
  color: #1677ff;
  font-size: 13px;
  display: flex;
  align-items: center;
  cursor: pointer;
  
  .close-icon {
    margin-right: 4px;
  }
`,OP=()=>a.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M24 44C35.0457 44 44 35.0457 44 24C44 12.9543 35.0457 4 24 4C12.9543 4 4 12.9543 4 24C4 35.0457 12.9543 44 24 44Z",stroke:"currentColor",strokeWidth:"4",strokeLinejoin:"round"}),a.jsx("path",{d:"M24.0078 12L24.0078 24.0077L32.4875 32.4875",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),NP=()=>a.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("rect",{x:"4",y:"8",width:"40",height:"36",rx:"2",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M4 16H44",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M16 4V12",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M32 4V12",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M16 28H20",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M28 28H32",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M16 36H20",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M28 36H32",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),PP=()=>a.jsxs("svg",{width:"1em",height:"1em",viewBox:"0 0 48 48",fill:"none",xmlns:"http://www.w3.org/2000/svg",children:[a.jsx("path",{d:"M24 36C35.0457 36 44 27.0457 44 16H4C4 27.0457 12.9543 36 24 36Z",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M15 29V44H33V29",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M44 8C44 5.79086 42.2091 4 40 4H8C5.79086 4 4 5.79086 4 8V16H44V8Z",stroke:"currentColor",strokeWidth:"4",strokeLinejoin:"round"}),a.jsx("path",{d:"M18 16V22",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"}),a.jsx("path",{d:"M30 16V22",stroke:"currentColor",strokeWidth:"4",strokeLinecap:"round",strokeLinejoin:"round"})]}),RP=[{id:1,type:"基础练习",date:"2023-04-02",time:"10:30",details:{total:10,correct:9,accuracy:"90%",timeSpent:"180秒"},difficulty:"简单",questionType:"加法",icon:a.jsx(en,{})},{id:2,type:"计时挑战",date:"2023-04-01",time:"15:45",details:{total:15,correct:12,accuracy:"80%",timeSpent:"60秒"},difficulty:"中等",questionType:"减法",icon:a.jsx(OP,{})},{id:3,type:"每日一练",date:"2023-03-31",time:"09:15",details:{total:10,correct:10,accuracy:"100%",timeSpent:"120秒"},difficulty:"简单",questionType:"混合",icon:a.jsx(NP,{})},{id:4,type:"关卡挑战",date:"2023-03-30",time:"14:20",details:{total:12,correct:10,accuracy:"83%",timeSpent:"240秒",stars:2},difficulty:"中等",questionType:"乘法",icon:a.jsx(PP,{})},{id:5,type:"自定义练习",date:"2023-03-29",time:"11:05",details:{total:20,correct:15,accuracy:"75%",timeSpent:"300秒"},difficulty:"困难",questionType:"除法",icon:a.jsx(ns,{})},{id:6,type:"错题练习",date:"2023-03-28",time:"16:30",details:{total:8,correct:6,accuracy:"75%",timeSpent:"160秒"},difficulty:"混合",questionType:"混合",icon:a.jsx(up,{})}],MP=()=>{const e=ze(),[t,n]=f.useState("all"),[r,i]=f.useState([]),[o,s]=f.useState("all"),[l,c]=f.useState("all"),[u,d]=f.useState(!0);f.useEffect(()=>{let w=[...RP];if(t!=="all"&&(w=w.filter(y=>y.type===t)),o!=="all"){const y=new Date,x=new Date(y.getFullYear(),y.getMonth(),y.getDate());switch(o){case"today":w=w.filter(v=>new Date(v.date).getTime()===x.getTime());break;case"week":const C=new Date(x);C.setDate(C.getDate()-7),w=w.filter(v=>new Date(v.date)>=C);break;case"month":const m=new Date(x);m.setMonth(m.getMonth()-1),w=w.filter(v=>new Date(v.date)>=m);break}}l!=="all"&&(w=w.filter(y=>y.questionType===l)),i(w)},[t,o,l]);const p=()=>{s("all"),c("all")},g=w=>{const y=new Date(w),x=new Date,C=new Date(x.getFullYear(),x.getMonth(),x.getDate()),m=new Date(C);return m.setDate(m.getDate()-1),y.getTime()===C.getTime()?"今天":y.getTime()===m.getTime()?"昨天":`${y.getMonth()+1}-${y.getDate()}`};return a.jsxs(mP,{children:[a.jsx(gP,{onBack:()=>e(-1),children:"练习历史"}),a.jsxs(xP,{activeKey:t,onChange:n,children:[a.jsx(Fe.Tab,{title:"全部"},"all"),a.jsx(Fe.Tab,{title:"基础练习"},"基础练习"),a.jsx(Fe.Tab,{title:"计时挑战"},"计时挑战"),a.jsx(Fe.Tab,{title:"每日一练"},"每日一练"),a.jsx(Fe.Tab,{title:"关卡挑战"},"关卡挑战")]}),a.jsxs($P,{children:[a.jsxs(_P,{children:[a.jsxs(Qf,{children:[a.jsx(rk,{className:"filter-icon"})," 筛选"]}),a.jsxs(FP,{onClick:p,children:[a.jsx(dl,{className:"close-icon"})," 重置"]})]}),a.jsx(Qf,{style:{fontSize:"14px",color:"#666",marginBottom:"8px"},children:"时间范围"}),a.jsxs(S3,{children:[a.jsx(ut,{color:o==="all"?"primary":"default",onClick:()=>s("all"),round:!0,children:"全部时间"}),a.jsx(ut,{color:o==="today"?"primary":"default",onClick:()=>s("today"),round:!0,children:"今天"}),a.jsx(ut,{color:o==="week"?"primary":"default",onClick:()=>s("week"),round:!0,children:"本周"}),a.jsx(ut,{color:o==="month"?"primary":"default",onClick:()=>s("month"),round:!0,children:"本月"})]}),a.jsx(Qf,{style:{fontSize:"14px",color:"#666",marginBottom:"8px"},children:"题目类型"}),a.jsxs(S3,{children:[a.jsx(ut,{color:l==="all"?"primary":"default",onClick:()=>c("all"),round:!0,children:"全部"}),a.jsx(ut,{color:l==="加法"?"primary":"default",onClick:()=>c("加法"),round:!0,children:"加法"}),a.jsx(ut,{color:l==="减法"?"primary":"default",onClick:()=>c("减法"),round:!0,children:"减法"}),a.jsx(ut,{color:l==="乘法"?"primary":"default",onClick:()=>c("乘法"),round:!0,children:"乘法"}),a.jsx(ut,{color:l==="除法"?"primary":"default",onClick:()=>c("除法"),round:!0,children:"除法"}),a.jsx(ut,{color:l==="混合"?"primary":"default",onClick:()=>c("混合"),round:!0,children:"混合"})]})]}),a.jsxs(vP,{children:[r.length>0?r.map(w=>a.jsxs(yP,{children:[a.jsxs(wP,{children:[a.jsxs(bP,{children:[a.jsx("div",{className:"icon",children:w.icon}),w.type]}),a.jsxs(CP,{children:[g(w.date)," ",w.time]})]}),a.jsxs(kP,{children:[a.jsxs(Ps,{children:[a.jsx("span",{className:"label",children:"题目数量"}),a.jsxs("span",{className:"value",children:[w.details.total,"题"]})]}),a.jsxs(Ps,{children:[a.jsx("span",{className:"label",children:"正确数量"}),a.jsxs("span",{className:"value",children:[w.details.correct,"题"]})]}),a.jsxs(Ps,{children:[a.jsx("span",{className:"label",children:"正确率"}),a.jsx("span",{className:"value",children:w.details.accuracy})]}),a.jsxs(Ps,{children:[a.jsx("span",{className:"label",children:"用时"}),a.jsx("span",{className:"value",children:w.details.timeSpent})]}),w.details.stars!==void 0&&a.jsxs(Ps,{children:[a.jsx("span",{className:"label",children:"获得星星"}),a.jsx("span",{className:"value",children:[...Array(w.details.stars)].map((y,x)=>a.jsx(Ut,{style:{color:"#ffc107",marginRight:"2px"}},x))})]})]}),a.jsxs(jP,{children:[a.jsxs(EP,{children:[a.jsx(ut,{color:"default",round:!0,children:w.difficulty}),a.jsx(ut,{color:"default",round:!0,children:w.questionType})]}),a.jsxs(SP,{onClick:()=>e(`/practice-detail/${w.id}`),children:["查看详情 ",a.jsx(Rr,{style:{fontSize:12}})]})]})]},w.id)):a.jsx(LP,{image:a.jsx(ge,{style:{fontSize:48,color:"#d9d9d9"},children:a.jsx(up,{})}),description:"暂无符合条件的练习记录"}),r.length===0&&a.jsx(J,{color:"primary",onClick:()=>e("/practice"),style:{marginTop:16,width:"100%"},children:"去练习"})]})]})},L3=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 20px;
`,$3=L.div`
  padding: 16px;
`,TP=L(tt)`
  margin-bottom: 16px;
  border-radius: 12px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
  overflow: hidden;
`,AP=L(TP)`
  background: linear-gradient(135deg, #1677ff 0%, #4096ff 100%);
  color: white;
`,IP=L.div`
  padding: 16px;
`,zP=L.div`
  font-size: 20px;
  font-weight: 500;
  margin-bottom: 16px;
  display: flex;
  align-items: center;
  
  .icon {
    margin-right: 8px;
    font-size: 24px;
  }
`,ac=L.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 12px;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  .label {
    color: rgba(255, 255, 255, 0.8);
  }
  
  .value {
    font-weight: 500;
  }
`,_3=L.div`
  font-size: 16px;
  font-weight: 500;
  margin-bottom: 16px;
  color: #333;
  display: flex;
  align-items: center;
  
  &::after {
    content: '';
    flex: 1;
    height: 1px;
    background: #f0f0f0;
    margin-left: 12px;
  }
`,Xi=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 16px;
  flex: 1;
  
  .value {
    font-size: 24px;
    font-weight: bold;
    color: #1677ff;
    margin-bottom: 8px;
  }
  
  .label {
    font-size: 13px;
    color: #666;
  }
`,F3=L.div`
  display: flex;
  gap: 12px;
  margin-bottom: 16px;
`,DP=L.div`
  background: white;
  border-radius: 12px;
  padding: 16px;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  
  .number {
    width: 24px;
    height: 24px;
    border-radius: 12px;
    background: #f0f7ff;
    color: #1677ff;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 12px;
    font-weight: 500;
    margin-right: 12px;
  }
  
  .question {
    font-size: 16px;
    font-weight: 500;
    margin-bottom: 4px;
  }
  
  .answers {
    font-size: 14px;
    
    .user-answer {
      margin-right: 8px;
    }
    
    .correct {
      color: #52c41a;
    }
    
    .wrong {
      color: #ff4d4f;
    }
    
    .correct-answer {
      color: #666;
    }
  }
`,BP=L.div`
  flex: 1;
`,VP=L.div`
  width: 40px;
  height: 40px;
  border-radius: 20px;
  background: ${e=>e.correct?"#f6ffed":"#fff1f0"};
  color: ${e=>e.correct?"#52c41a":"#ff4d4f"};
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 20px;
  margin-left: 12px;
`,WP=L.div`
  display: flex;
  gap: 12px;
  margin-top: 8px;
`,UP=L(J)`
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 48px;
  height: 48px;
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.15);
`,HP=L.div`
  width: 100%;
  height: 8px;
  background-color: rgba(255, 255, 255, 0.3);
  border-radius: 4px;
  overflow: hidden;
  margin-top: 16px;
  
  &::after {
    content: '';
    display: block;
    width: ${e=>e.percent}%;
    height: 100%;
    background-color: #fff;
    transition: width 0.3s ease;
  }
`,qP={id:1,type:"基础练习",date:"2023-04-02",time:"10:30",details:{total:10,correct:8,accuracy:"80%",timeSpent:"180秒",averageTime:"18秒/题"},difficulty:"中等",questionType:"加法",questions:[{id:1,question:"5 + 3 = ?",correctAnswer:"8",userAnswer:"8",isCorrect:!0},{id:2,question:"12 + 7 = ?",correctAnswer:"19",userAnswer:"19",isCorrect:!0},{id:3,question:"24 + 18 = ?",correctAnswer:"42",userAnswer:"42",isCorrect:!0},{id:4,question:"35 + 27 = ?",correctAnswer:"62",userAnswer:"62",isCorrect:!0},{id:5,question:"49 + 33 = ?",correctAnswer:"82",userAnswer:"83",isCorrect:!1},{id:6,question:"56 + 29 = ?",correctAnswer:"85",userAnswer:"85",isCorrect:!0},{id:7,question:"71 + 45 = ?",correctAnswer:"116",userAnswer:"116",isCorrect:!0},{id:8,question:"83 + 59 = ?",correctAnswer:"142",userAnswer:"142",isCorrect:!0},{id:9,question:"97 + 64 = ?",correctAnswer:"161",userAnswer:"162",isCorrect:!1},{id:10,question:"108 + 73 = ?",correctAnswer:"181",userAnswer:"181",isCorrect:!0}]},ZP=()=>{const e=ze(),{id:t}=l5(),[n,r]=f.useState(null),[i,o]=f.useState(!1);f.useEffect(()=>{r(qP);const c=()=>{o(window.scrollY>300)};return window.addEventListener("scroll",c),()=>{window.removeEventListener("scroll",c)}},[t]);const s=()=>{window.scrollTo({top:0,behavior:"smooth"})};if(!n)return a.jsxs(L3,{children:[a.jsx(Ve,{onBack:()=>e(-1),children:"练习详情"}),a.jsx($3,{children:a.jsx("div",{style:{textAlign:"center",padding:"80px 0",color:"#999"},children:"加载中..."})})]});const l=n.details.correct/n.details.total*100;return a.jsxs(L3,{children:[a.jsx(Ve,{onBack:()=>e(-1),children:"练习详情"}),a.jsxs($3,{children:[a.jsx(AP,{children:a.jsxs(IP,{children:[a.jsxs(zP,{children:[a.jsx("div",{className:"icon",children:a.jsx(en,{})}),n.type]}),a.jsxs(ac,{children:[a.jsx("div",{className:"label",children:"日期"}),a.jsxs("div",{className:"value",children:[n.date," ",n.time]})]}),a.jsxs(ac,{children:[a.jsx("div",{className:"label",children:"难度"}),a.jsx("div",{className:"value",children:n.difficulty})]}),a.jsxs(ac,{children:[a.jsx("div",{className:"label",children:"题目类型"}),a.jsx("div",{className:"value",children:n.questionType})]}),a.jsx(HP,{percent:l}),a.jsxs(ac,{style:{marginTop:"10px"},children:[a.jsx("div",{className:"label",children:"正确率"}),a.jsx("div",{className:"value",children:n.details.accuracy})]})]})}),a.jsx(_3,{children:"练习统计"}),a.jsxs(F3,{children:[a.jsxs(Xi,{children:[a.jsx("div",{className:"value",children:n.details.total}),a.jsx("div",{className:"label",children:"总题数"})]}),a.jsxs(Xi,{children:[a.jsx("div",{className:"value",children:n.details.correct}),a.jsx("div",{className:"label",children:"正确题数"})]}),a.jsxs(Xi,{children:[a.jsx("div",{className:"value",children:n.details.timeSpent}),a.jsx("div",{className:"label",children:"总用时"})]})]}),a.jsxs(F3,{children:[a.jsxs(Xi,{children:[a.jsx("div",{className:"value",children:n.details.averageTime}),a.jsx("div",{className:"label",children:"平均用时"})]}),a.jsxs(Xi,{children:[a.jsx("div",{className:"value",children:n.details.accuracy}),a.jsx("div",{className:"label",children:"正确率"})]}),a.jsxs(Xi,{children:[a.jsx("div",{className:"value",children:n.details.total-n.details.correct}),a.jsx("div",{className:"label",children:"错误题数"})]})]}),a.jsx(_3,{children:"答题详情"}),a.jsx(ge,{direction:"vertical",style:{width:"100%"},children:n.questions.map((c,u)=>a.jsxs(DP,{children:[a.jsx("div",{className:"number",children:u+1}),a.jsxs(BP,{children:[a.jsx("div",{className:"question",children:c.question}),a.jsxs("div",{className:"answers",children:[a.jsx("span",{className:`user-answer ${c.isCorrect?"correct":"wrong"}`,children:c.userAnswer}),!c.isCorrect&&a.jsxs("span",{className:"correct-answer",children:["正确答案: ",c.correctAnswer]})]})]}),a.jsx(VP,{correct:c.isCorrect,children:c.isCorrect?a.jsx(ha,{}):a.jsx(dl,{})})]},c.id))}),a.jsxs(WP,{children:[a.jsx(J,{block:!0,color:"primary",onClick:()=>e("/practice"),children:"继续练习"}),a.jsx(J,{block:!0,onClick:()=>e("/history"),children:"返回历史"})]}),i&&a.jsx(UP,{color:"primary",onClick:s,children:a.jsx(d6,{style:{transform:"rotate(90deg)"}})})]})]})},QP=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 24px;
`,GP=L(Ve)`
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`,KP=L.div`
  background: #fff;
  margin: 12px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,YP=L.h1`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`,br=L.h2`
  font-size: 17px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 12px;
  color: #222;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
`,ct=L.p`
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 16px;
  color: #444;
  text-align: justify;
`,XP=()=>{const e=ze();return a.jsxs(QP,{children:[a.jsx(GP,{onBack:()=>e(-1),children:"用户协议"}),a.jsxs(KP,{children:[a.jsx(YP,{children:"小学数学口算分级训练系统用户协议"}),a.jsx(ct,{children:'欢迎使用小学数学口算分级训练系统！请您在使用我们的产品和服务前仔细阅读本用户协议。 本协议是您与小学数学口算分级训练系统（以下简称"本系统"）之间关于用户使用本系统服务所订立的协议。'}),a.jsx(br,{children:"1. 服务内容"}),a.jsx(ct,{children:"本系统为用户提供小学数学口算题目的训练、练习、测试、评估及相关学习服务。 用户可以根据自己的学习需求，选择适合自己的学习内容和难度进行练习。"}),a.jsx(br,{children:"2. 账号注册与安全"}),a.jsx(ct,{children:"2.1 用户在使用本系统前需要注册账号，并提供相关的个人信息。"}),a.jsx(ct,{children:"2.2 用户应当保证所提供的个人资料真实、准确，并在资料变更时及时更新。"}),a.jsx(ct,{children:"2.3 用户应当妥善保管账号及密码，因用户保管不善造成的损失由用户自行承担。"}),a.jsx(br,{children:"3. 用户行为规范"}),a.jsx(ct,{children:"3.1 用户在使用本系统时应当遵守中华人民共和国相关法律法规。"}),a.jsx(ct,{children:"3.2 用户不得利用本系统从事任何违法或不当的活动，包括但不限于： - 散布违法、有害信息 - 侵犯他人知识产权 - 干扰系统正常运行 - 其他违反法律法规的行为"}),a.jsx(br,{children:"4. 知识产权"}),a.jsx(ct,{children:"4.1 本系统的所有内容，包括但不限于文字、图片、音频、视频、软件、程序、数据等，均受知识产权法律法规保护。"}),a.jsx(ct,{children:"4.2 未经本系统许可，用户不得擅自复制、修改、传播或使用本系统的任何内容。"}),a.jsx(br,{children:"5. 服务变更、中断或终止"}),a.jsx(ct,{children:"5.1 本系统保留随时变更、中断或终止部分或全部服务的权利。"}),a.jsx(ct,{children:"5.2 用户如违反本协议规定，本系统有权暂停或终止对该用户的服务。"}),a.jsx(br,{children:"6. 免责声明"}),a.jsx(ct,{children:"6.1 用户因第三方如电信部门的通讯线路故障、技术问题、网络、电脑故障、系统不稳定性及其他不可抗力原因而遭受的经济损失，本系统不承担责任。"}),a.jsx(ct,{children:"6.2 本系统不保证服务一定能满足用户的所有需求，也不保证服务不会中断，对服务的及时性、安全性、准确性也不作保证。"}),a.jsx(br,{children:"7. 协议修改"}),a.jsx(ct,{children:"本系统有权在必要时修改本协议条款。如本协议有任何变更，本系统将在网站上公布修改内容。修改后的协议一旦公布即代替原协议。"}),a.jsx(br,{children:"8. 适用法律与争议解决"}),a.jsx(ct,{children:"本协议的订立、执行和解释及争议的解决均适用中华人民共和国法律。如发生本协议相关的任何争议，双方应友好协商解决；协商不成功的，任何一方均有权将争议提交至本系统所在地有管辖权的人民法院。"}),a.jsx(ct,{style:{marginTop:"30px",textAlign:"right"},children:"最后更新日期：2025年4月12日"})]})]})},JP=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 24px;
`,eR=L(Ve)`
  background: #fff;
  border-bottom: 1px solid #f0f0f0;
`,tR=L.div`
  background: #fff;
  margin: 12px;
  padding: 16px;
  border-radius: 8px;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.05);
`,nR=L.h1`
  font-size: 20px;
  font-weight: 600;
  text-align: center;
  margin-bottom: 20px;
  color: #333;
`,er=L.h2`
  font-size: 17px;
  font-weight: 500;
  margin-top: 24px;
  margin-bottom: 12px;
  color: #222;
  padding-bottom: 8px;
  border-bottom: 1px solid #f0f0f0;
`,Jt=L.p`
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 16px;
  color: #444;
  text-align: justify;
`,nt=L.li`
  font-size: 15px;
  line-height: 1.8;
  margin-bottom: 8px;
  color: #444;
  margin-left: 16px;
`,lc=L.ul`
  margin-bottom: 16px;
`,rR=()=>{const e=ze();return a.jsxs(JP,{children:[a.jsx(eR,{onBack:()=>e(-1),children:"隐私政策"}),a.jsxs(tR,{children:[a.jsx(nR,{children:"小学数学口算分级训练系统隐私政策"}),a.jsx(Jt,{children:'小学数学口算分级训练系统（以下简称"本系统"）非常重视用户的隐私保护， 并会尽全力保护您的个人信息安全。本隐私政策旨在向您说明我们如何收集、使用、储存和共享您的信息， 以及您享有的相关权利。请在使用我们的服务前仔细阅读本政策。'}),a.jsx(er,{children:"1. 我们收集的信息"}),a.jsx(Jt,{children:"为了向您提供更好的服务，我们可能会收集以下类型的信息："}),a.jsxs(lc,{children:[a.jsxs(nt,{children:[a.jsx("strong",{children:"账号信息："}),"当您注册账号时，我们会收集您提供的用户名、密码、年级信息等。"]}),a.jsxs(nt,{children:[a.jsx("strong",{children:"学习数据："}),"包括您的练习记录、错题记录、练习时长、正确率等学习相关数据。"]}),a.jsxs(nt,{children:[a.jsx("strong",{children:"设备信息："}),"我们可能会收集您使用的设备型号、操作系统版本、设备识别码、IP地址等信息。"]}),a.jsxs(nt,{children:[a.jsx("strong",{children:"使用情况数据："}),"包括您如何使用我们的服务，例如访问时间、使用频率、使用偏好等。"]})]}),a.jsx(er,{children:"2. 我们如何使用这些信息"}),a.jsx(Jt,{children:"我们使用收集到的信息主要用于以下目的："}),a.jsxs(lc,{children:[a.jsx(nt,{children:"提供、维护和改进我们的服务。"}),a.jsx(nt,{children:"根据您的学习情况提供个性化的学习内容和建议。"}),a.jsx(nt,{children:"生成学习报告和统计分析，帮助您了解自己的学习进度。"}),a.jsx(nt,{children:"发送系统通知，如更新提醒、活动通知等。"}),a.jsx(nt,{children:"改进我们的产品和服务，开发新功能。"}),a.jsx(nt,{children:"检测和防止欺诈行为或其他非法活动。"})]}),a.jsx(er,{children:"3. 信息的共享与披露"}),a.jsx(Jt,{children:"我们重视您的隐私，不会将您的个人信息出售给第三方。但在以下情况下，我们可能会共享您的信息："}),a.jsxs(lc,{children:[a.jsx(nt,{children:"在征得您同意的情况下，与第三方共享您的信息。"}),a.jsx(nt,{children:"为了遵守适用的法律法规或响应法律程序的要求。"}),a.jsx(nt,{children:"如果我们认为披露是为了保护我们的权利、财产或安全，以及我们用户或公众的权利、财产或安全所必需的。"})]}),a.jsx(er,{children:"4. 数据安全"}),a.jsx(Jt,{children:"我们采取各种安全措施保护您的个人信息不被未经授权的访问、使用或披露。这些措施包括数据加密、 访问控制以及安全存储等。但请理解，由于互联网的开放性，没有任何安全措施是万无一失的， 我们无法保证您的个人信息在所有情况下都是绝对安全的。"}),a.jsx(er,{children:"5. 数据存储和跨境转移"}),a.jsx(Jt,{children:"我们主要在中国境内收集和存储您的个人信息。但为了向您提供服务，我们可能会将您的数据存储在中国境内或境外的服务器上。 我们将确保这些数据的存储和处理符合本隐私政策和适用的法律。"}),a.jsx(er,{children:"6. 儿童隐私"}),a.jsx(Jt,{children:"我们的服务主要面向小学生，我们非常重视儿童的隐私保护。如果用户未满14岁，请在监护人的指导下使用我们的服务， 并请监护人阅读本隐私政策。我们收集儿童个人信息前会征得监护人的同意， 并且仅收集为提供服务所必需的信息。"}),a.jsx(er,{children:"7. 您的权利"}),a.jsx(Jt,{children:"根据适用的法律，您对自己的个人信息享有以下权利："}),a.jsxs(lc,{children:[a.jsx(nt,{children:"访问、更正或删除您的个人信息。"}),a.jsx(nt,{children:"要求我们限制对您个人信息的处理。"}),a.jsx(nt,{children:"在某些情况下，拒绝我们处理您的个人信息。"}),a.jsx(nt,{children:"要求获取您提供给我们的个人信息的可移植副本。"})]}),a.jsx(Jt,{children:"如果您想行使这些权利，请通过本系统的反馈功能或联系我们的客服。"}),a.jsx(er,{children:"8. 隐私政策的更新"}),a.jsx(Jt,{children:"我们可能会不时更新本隐私政策。如有重大变更，我们会在应用内通知您，并在变更生效前获取您的同意。 我们鼓励您定期查看本隐私政策，以了解我们如何保护您的信息。"}),a.jsx(er,{children:"9. 联系我们"}),a.jsx(Jt,{children:"如果您对本隐私政策有任何疑问、意见或建议，请通过应用内的反馈功能或发送电子邮件至support@mathpractice.example.com与我们联系。"}),a.jsx(Jt,{style:{marginTop:"30px",textAlign:"right"},children:"最后更新日期：2024年4月12日"})]})]})},iR=L.div`
  min-height: 100vh;
  background: linear-gradient(to bottom, #f8faff, #f0f5ff);
  padding-bottom: 20px;
  padding-top: 10px;
`,O3=L.div`
  padding: 16px;
  max-width: 540px;
  margin: 0 auto;
`,Gf=L(tt)`
  margin-bottom: 16px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 10, 60, 0.08);
  border: none;
  background: #ffffff;
  transition: all 0.3s ease;
  
  .adm-card-body {
    padding: 18px;
  }
  
  &:hover {
    box-shadow: 0 6px 16px rgba(0, 10, 60, 0.12);
    transform: translateY(-2px);
  }
`,oR=L.div`
  font-size: 36px;
  font-weight: 600;
  text-align: center;
  margin: 24px 0;
  color: #303133;
  letter-spacing: 0.5px;
  
  @media (max-width: 375px) {
    font-size: 32px;
  }
`,sR=L.div`
  text-align: center;
  color: #5e6d82;
  margin-bottom: 20px;
  font-size: 15px;
  position: relative;
  
  &:after {
    content: '';
    display: block;
    width: 60px;
    height: 3px;
    background: linear-gradient(to right, #e1efff, #1677ff);
    margin: 8px auto 0;
    border-radius: 3px;
  }
`,aR=L(Xe)`
  text-align: center;
  font-size: 28px;
  width: 160px;
  margin: 0 auto;
  height: 60px;
  border-radius: 12px;
  border: 2px solid #e1efff;
  background: #f9fbff;
  box-shadow: inset 0 2px 4px rgba(0, 10, 60, 0.06);
  transition: all 0.3s ease;
  font-weight: 500;
  
  &:focus, &:hover {
    border-color: #1677ff;
    box-shadow: 0 0 0 2px rgba(22, 119, 255, 0.15);
  }
  
  .adm-input {
    text-align: center;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  input {
    text-align: center;
    font-size: 28px;
    font-weight: 500;
  }
`,lR=L(ge)`
  width: 100%;
  justify-content: center;
  margin-top: 28px;
`,cR=L(tt)`
  margin-bottom: 16px;
  border-radius: 16px;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 10, 60, 0.08);
  border: none;
  
  .adm-card-body {
    padding: 18px;
  }
`,Rs=L.div`
  font-size: 17px;
  font-weight: 600;
  margin-bottom: 16px;
  color: #303133;
  display: flex;
  align-items: center;
  
  &:before {
    content: '';
    display: inline-block;
    width: 4px;
    height: 16px;
    background: #1677ff;
    margin-right: 8px;
    border-radius: 2px;
  }
`,uR=L.div`
  width: 100%;
  height: 10px;
  background-color: #e8edf3;
  border-radius: 5px;
  overflow: hidden;
  margin-bottom: 20px;
  box-shadow: inset 0 1px 2px rgba(0, 0, 0, 0.05);
  
  &:after {
    content: '';
    display: block;
    width: ${e=>e.percent}%;
    height: 100%;
    background: linear-gradient(to right, #4dabff, #1677ff);
    transition: width 0.4s cubic-bezier(0.22, 0.61, 0.36, 1);
    border-radius: 5px;
    box-shadow: 0 1px 3px rgba(22, 119, 255, 0.4);
  }
`,no=L.div`
  display: flex;
  justify-content: space-between;
  padding: 12px 0;
  border-bottom: 1px solid #eef1f6;
  font-size: 15px;
  
  &:last-child {
    border-bottom: none;
  }
  
  span:first-child {
    color: #606266;
  }
  
  span:last-child {
    color: #303133;
    font-weight: 500;
  }
`,dR=L(J)`
  width: 38px;
  height: 38px;
  border-radius: 19px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.3rem;
  background: linear-gradient(135deg, #f0f7ff 0%, #e6f3ff 100%);
  color: #1677ff;
  box-shadow: 0 2px 8px rgba(22, 119, 255, 0.2);
  border: 1px solid #d4e8ff;
  transition: all 0.3s ease;
  margin-left: auto;
  
  &:hover, &:active {
    background: linear-gradient(135deg, #e6f1ff 0%, #d4e8ff 100%);
    transform: scale(0.95);
    box-shadow: 0 1px 4px rgba(22, 119, 255, 0.3);
  }
  
  &:disabled {
    opacity: 0.6;
    background: #f5f5f5;
    color: #999;
    box-shadow: none;
  }
`,N3=L(Ve)`
  background: transparent;
  --height: 52px;
  font-size: 18px;
  font-weight: 600;
  color: #303133;
  margin-bottom: 8px;
`,fR=L(no)`
  padding: 14px 8px;
  background: ${e=>e.isCorrect?"rgba(82, 196, 26, 0.05)":"rgba(255, 77, 79, 0.05)"};
  margin-bottom: 8px;
  border-radius: 8px;
  border: none;
  
  &:last-child {
    margin-bottom: 0;
  }
`,Ms=L.span`
  font-weight: 600;
  ${e=>e.highlight&&"color: #1677ff;"}
  ${e=>e.positive&&"color: #52c41a;"}
  ${e=>e.negative&&"color: #ff4d4f;"}
`,hR=L(ss)`
  background: #ffffff;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 10, 60, 0.08);
  margin-bottom: 20px;
  padding: 28px 20px;
  
  .adm-result-title {
    font-size: 24px;
    font-weight: 600;
    color: #303133;
  }
  
  .adm-result-description {
    font-size: 15px;
    color: #606266;
    margin-top: 12px;
    padding: 0 16px;
    line-height: 1.6;
  }
`,pR=L.div`
  padding: 0 6px;
`,Ts=L.span`
  display: inline-block;
  padding: 3px 8px;
  border-radius: 12px;
  font-size: 13px;
  font-weight: 500;
  margin-right: 8px;
  
  ${e=>e.type==="time"&&`
    background-color: #e6f7ff;
    color: #1677ff;
  `}
  
  ${e=>e.type==="accuracy"&&`
    background-color: #f6ffed;
    color: #52c41a;
  `}
  
  ${e=>e.type==="count"&&`
    background-color: #fff7e6;
    color: #fa8c16;
  `}
`,As=L.span`
  margin-right: 6px;
  display: inline-flex;
  align-items: center;
`,Kf=L(ma)`
  --checked-color: #1677ff;
  --checked-text-color: #ffffff;
  --border-radius: 10px;
  --border: 1px solid #e8edf3;
  --checked-border: 1px solid #1677ff;
  --padding: 8px 12px;
  
  .adm-selector-item-checked .adm-selector-item-text {
    color: #ffffff;
    font-weight: 500;
  }
`,mR=(e,t)=>{let n,r,i,o,s;switch(e){case"加法":t===1?(n=Math.floor(Math.random()*10),r=Math.floor(Math.random()*10),o=`${n} + ${r} = ?`,s=String(n+r)):t===2?(n=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*90)+10,o=`${n} + ${r} = ?`,s=String(n+r)):(n=Math.floor(Math.random()*900)+100,r=Math.floor(Math.random()*900)+100,o=`${n} + ${r} = ?`,s=String(n+r));break;case"减法":t===1?(r=Math.floor(Math.random()*9)+1,n=Math.floor(Math.random()*9)+r,o=`${n} - ${r} = ?`,s=String(n-r)):t===2?(r=Math.floor(Math.random()*90)+10,n=Math.floor(Math.random()*90)+r,o=`${n} - ${r} = ?`,s=String(n-r)):(r=Math.floor(Math.random()*900)+100,n=Math.floor(Math.random()*900)+r,o=`${n} - ${r} = ?`,s=String(n-r));break;case"乘法":t===1?(n=Math.floor(Math.random()*9)+1,r=Math.floor(Math.random()*9)+1,o=`${n} × ${r} = ?`,s=String(n*r)):t===2?(n=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*9)+1,o=`${n} × ${r} = ?`,s=String(n*r)):(n=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*90)+10,o=`${n} × ${r} = ?`,s=String(n*r));break;case"除法":t===1?(r=Math.floor(Math.random()*9)+1,n=r*(Math.floor(Math.random()*9)+1),o=`${n} ÷ ${r} = ?`,s=String(n/r)):t===2?(r=Math.floor(Math.random()*9)+1,n=r*(Math.floor(Math.random()*9)+10),o=`${n} ÷ ${r} = ?`,s=String(n/r)):(r=Math.floor(Math.random()*90)+10,n=r*(Math.floor(Math.random()*9)+1),o=`${n} ÷ ${r} = ?`,s=String(n/r));break;case"混合运算":n=Math.floor(Math.random()*20)+1,r=Math.floor(Math.random()*20)+1,i=Math.floor(Math.random()*20)+1;const l=["+","-"],c=l[Math.floor(Math.random()*l.length)],u=l[Math.floor(Math.random()*l.length)];o=`${n} ${c} ${r} ${u} ${i} = ?`,c==="+"&&u==="+"?s=String(n+r+i):c==="+"&&u==="-"?s=String(n+r-i):c==="-"&&u==="+"?s=String(n-r+i):s=String(n-r-i);break;default:n=Math.floor(Math.random()*10),r=Math.floor(Math.random()*10),o=`${n} + ${r} = ?`,s=String(n+r)}return{question:o,answer:s}},gR=()=>{const e=ze(),[t,n]=f.useState(["加法"]),[r,i]=f.useState(["1"]),[o,s]=f.useState(["10"]),[l,c]=f.useState(!1),[u,d]=f.useState(""),[p,g]=f.useState({question:"",answer:""}),[w,y]=f.useState([]),[x,C]=f.useState(0),[m,v]=f.useState([]),[h,b]=f.useState(0),[j,E]=f.useState(0),[$,F]=f.useState(0),[M,R]=f.useState(0),[D,T]=f.useState(!1),V=()=>{const O=[],A=parseInt(o[0]),B=parseInt(r[0]),G=t[0];for(let H=0;H<A;H++)O.push(mR(G,B));y(O),g(O[0]),C(0),v([]),b(0),E(0),F(Date.now()),R(0),T(!1)};f.useEffect(()=>{V()},[]);const z=()=>{if(!u.trim()){de.show({icon:"fail",content:"请输入答案"});return}const O=u===p.answer,A={...p,userAnswer:u,isCorrect:O};O?(de.show({icon:"success",content:"回答正确！"}),b(B=>B+1)):(de.show({icon:"fail",content:`答案不正确，正确答案是 ${p.answer}`}),E(B=>B+1)),v([...m,A]),x<w.length-1?(C(x+1),g(w[x+1]),d("")):(R(Date.now()),T(!0))},I=()=>{Ld.confirm({content:"确定要结束本次练习吗？",onConfirm:()=>{e("/practice")}})},P=()=>{V()},N=w.length>0?Math.round(m.length/w.length*100):0,S=()=>{const O=M||Date.now();return Math.round((O-$)/1e3)},_=()=>m.length>0?Math.round(h/m.length*100):0;return a.jsxs(iR,{children:[a.jsx(N3,{onBack:I,right:a.jsx(dR,{onClick:()=>c(!0),children:a.jsx(ns,{})}),children:"基础练习"}),D?a.jsxs(O3,{children:[a.jsx(hR,{status:"success",title:"练习完成!",description:a.jsxs(ge,{direction:"vertical",style:{width:"100%",marginTop:"12px"},children:[a.jsxs(ge,{wrap:!0,children:[a.jsxs(Ts,{type:"count",children:["总题数: ",w.length]}),a.jsxs(Ts,{type:"accuracy",children:["正确: ",h]}),a.jsxs(Ts,{type:"count",children:["错误: ",j]})]}),a.jsxs(ge,{wrap:!0,children:[a.jsxs(Ts,{type:"accuracy",children:["正确率: ",_(),"%"]}),a.jsxs(Ts,{type:"time",children:["用时: ",S(),"秒"]})]})]}),icon:a.jsx(uk,{style:{fontSize:"48px",color:"#1677ff"}})}),a.jsxs(ge,{direction:"vertical",style:{width:"100%",marginBottom:"24px"},children:[a.jsx(J,{color:"primary",block:!0,onClick:P,style:{borderRadius:"12px",height:"44px",fontSize:"16px",fontWeight:500,boxShadow:"0 2px 8px rgba(22, 119, 255, 0.15)",marginBottom:"12px"},children:"再来一组"}),a.jsx(J,{block:!0,onClick:()=>e("/practice"),style:{borderRadius:"12px",height:"44px",fontSize:"16px",border:"1px solid #dcdfe6"},children:"返回选择"})]}),a.jsxs(Gf,{children:[a.jsx(Rs,{children:"答题详情"}),m.map((O,A)=>a.jsxs(fR,{isCorrect:O.isCorrect,children:[a.jsx("span",{style:{flex:1,fontWeight:"500"},children:O.question}),a.jsxs("span",{style:{color:O.isCorrect?"#52c41a":"#ff4d4f",marginLeft:"16px",fontWeight:"600",display:"flex",alignItems:"center"},children:[O.userAnswer," ",O.isCorrect?a.jsx(ha,{style:{marginLeft:"4px"}}):a.jsxs(a.Fragment,{children:[a.jsx(dl,{style:{marginLeft:"4px"}})," ",a.jsxs("span",{style:{color:"#606266",marginLeft:"4px"},children:["(",O.answer,")"]})]})]})]},A))]})]}):a.jsxs(O3,{children:[a.jsx(uR,{percent:N}),a.jsxs(Gf,{children:[a.jsxs(sR,{children:["第 ",x+1," 题 / 共 ",w.length," 题"]}),a.jsx(oR,{children:p.question}),a.jsxs(ge,{direction:"vertical",style:{width:"100%"},children:[a.jsx(aR,{placeholder:"请输入答案",value:u,onChange:d,type:"number"}),a.jsx(lR,{children:a.jsx(J,{color:"primary",onClick:z,size:"large",style:{borderRadius:"28px",fontSize:"16px",fontWeight:500,padding:"8px 36px",boxShadow:"0 4px 10px rgba(22, 119, 255, 0.2)"},children:"提交答案"})})]})]}),a.jsxs(Gf,{children:[a.jsx(Rs,{children:"练习统计"}),a.jsxs(no,{children:[a.jsxs("span",{children:[a.jsx(As,{children:a.jsx(XC,{})}),"已完成题目"]}),a.jsxs(Ms,{highlight:!0,children:[m.length," / ",w.length]})]}),a.jsxs(no,{children:[a.jsxs("span",{children:[a.jsx(As,{children:a.jsx(ha,{})}),"正确题数"]}),a.jsxs(Ms,{positive:!0,children:[h," 题"]})]}),a.jsxs(no,{children:[a.jsxs("span",{children:[a.jsx(As,{children:a.jsx(l6,{})}),"错误题数"]}),a.jsxs(Ms,{negative:!0,children:[j," 题"]})]}),a.jsxs(no,{children:[a.jsxs("span",{children:[a.jsx(As,{children:a.jsx(ha,{})}),"正确率"]}),a.jsxs(Ms,{positive:!0,children:[_(),"%"]})]}),a.jsxs(no,{children:[a.jsxs("span",{children:[a.jsx(As,{children:a.jsx(Ha,{})}),"用时"]}),a.jsxs(Ms,{highlight:!0,children:[S()," 秒"]})]})]})]}),a.jsxs(dp,{visible:l,onMaskClick:()=>c(!1),bodyStyle:{borderTopLeftRadius:"16px",borderTopRightRadius:"16px",padding:"16px",maxHeight:"75vh",overflowY:"auto"},children:[a.jsx(N3,{right:a.jsx(J,{color:"primary",fill:"none",onClick:()=>c(!1),style:{fontWeight:500},children:"完成"}),style:{marginBottom:"12px"},children:"练习设置"}),a.jsx(pR,{children:a.jsxs(cR,{children:[a.jsx(Rs,{children:"题目类型"}),a.jsx(Kf,{options:[{label:"加法",value:"加法"},{label:"减法",value:"减法"},{label:"乘法",value:"乘法"},{label:"除法",value:"除法"},{label:"混合运算",value:"混合运算"}],value:t,onChange:O=>{O.length>0&&n(O)}}),a.jsx(Rs,{style:{marginTop:"20px"},children:"难度级别"}),a.jsx(Kf,{options:[{label:"初级",value:"1"},{label:"中级",value:"2"},{label:"高级",value:"3"}],value:r,onChange:O=>{O.length>0&&i(O)}}),a.jsx(Rs,{style:{marginTop:"20px"},children:"题目数量"}),a.jsx(Kf,{options:[{label:"10题",value:"10"},{label:"20题",value:"20"},{label:"30题",value:"30"}],value:o,onChange:O=>{O.length>0&&s(O)}}),a.jsx(J,{color:"primary",block:!0,style:{marginTop:"24px",borderRadius:"12px",height:"44px",fontSize:"16px",fontWeight:500,boxShadow:"0 2px 8px rgba(22, 119, 255, 0.15)"},onClick:()=>{V(),c(!1)},children:"应用设置并重新开始"})]})})]})]})},vR=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 20px;
`,cc=L.div`
  padding: 16px;
`,uc=L(tt)`
  margin-bottom: 16px;
  border-radius: 12px;
`,xR=L.div`
  font-size: 32px;
  text-align: center;
  margin: 20px 0;
`,yR=L.div`
  text-align: center;
  font-size: 24px;
  font-weight: bold;
  margin: 10px 0;
  color: ${e=>e.color||"#1677ff"};
`,wR=L(Xe)`
  text-align: center;
  font-size: 24px;
  width: 120px;
  margin: 0 auto;
`,bR=L(ge)`
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`,CR=L(tt)`
  margin-bottom: 16px;
  border-radius: 12px;
`,Is=L.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`,Ji=L.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`,kR=L.div`
  display: inline-block;
  padding: 4px 12px;
  border-radius: 12px;
  font-size: 14px;
  font-weight: bold;
  background-color: ${e=>e.color||"#1677ff"};
  color: white;
`,jR=L.div`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
  
  &:after {
    content: '';
    display: block;
    width: ${e=>e.percent}%;
    height: 100%;
    background-color: #1677ff;
    transition: width 0.3s ease;
  }
`,ER=L(J)`
  width: 36px;
  height: 36px;
  border-radius: 18px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.2rem;
  background: linear-gradient(135deg, #f0f7ff 0%, #e6f3ff 100%);
  color: #1677ff;
  box-shadow: 0 2px 6px rgba(22, 119, 255, 0.15);
  border: 1px solid #d4e8ff;
  transition: all 0.3s ease;
  margin-left: auto;
  
  &:hover, &:active {
    background: linear-gradient(135deg, #e6f1ff 0%, #d4e8ff 100%);
    transform: scale(0.95);
  }
  
  &:disabled {
    opacity: 0.6;
    background: #f5f5f5;
    color: #999;
    box-shadow: none;
  }
`;L.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
`;const SR=(e,t)=>{let n,r,i,o;switch(e){case"加法":t===1?(n=Math.floor(Math.random()*10),r=Math.floor(Math.random()*10),i=`${n} + ${r} = ?`,o=String(n+r)):t===2?(n=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*90)+10,i=`${n} + ${r} = ?`,o=String(n+r)):(n=Math.floor(Math.random()*900)+100,r=Math.floor(Math.random()*900)+100,i=`${n} + ${r} = ?`,o=String(n+r));break;case"减法":t===1?(r=Math.floor(Math.random()*9)+1,n=Math.floor(Math.random()*9)+r,i=`${n} - ${r} = ?`,o=String(n-r)):t===2?(r=Math.floor(Math.random()*90)+10,n=Math.floor(Math.random()*90)+r,i=`${n} - ${r} = ?`,o=String(n-r)):(r=Math.floor(Math.random()*900)+100,n=Math.floor(Math.random()*900)+r,i=`${n} - ${r} = ?`,o=String(n-r));break;case"乘法":t===1?(n=Math.floor(Math.random()*9)+1,r=Math.floor(Math.random()*9)+1,i=`${n} × ${r} = ?`,o=String(n*r)):t===2?(n=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*9)+1,i=`${n} × ${r} = ?`,o=String(n*r)):(n=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*90)+10,i=`${n} × ${r} = ?`,o=String(n*r));break;default:n=Math.floor(Math.random()*10),r=Math.floor(Math.random()*10),i=`${n} + ${r} = ?`,o=String(n+r)}return{question:i,answer:o}},LR=e=>e<=2?{level:"超神",color:"#722ed1"}:e<=3?{level:"极速",color:"#eb2f96"}:e<=5?{level:"神速",color:"#fa8c16"}:e<=7?{level:"快速",color:"#52c41a"}:e<=10?{level:"一般",color:"#1677ff"}:{level:"需提高",color:"#8c8c8c"},$R=()=>{const e=ze(),[t,n]=f.useState(["加法"]),[r,i]=f.useState(["1"]),[o,s]=f.useState(["60"]),[l,c]=f.useState(!1),[u,d]=f.useState(""),[p,g]=f.useState({question:"",answer:""}),[w,y]=f.useState([]),[x,C]=f.useState(60),[m,v]=f.useState(!1),[h,b]=f.useState(!1),[j,E]=f.useState(3),[$,F]=f.useState(0),[M,R]=f.useState(!1),[D,T]=f.useState(0),[V,z]=f.useState(0),I=f.useRef(null),P=f.useRef(null),N=()=>{const W=SR(t[0],parseInt(r[0]));g(W),F(Date.now())},S=()=>{b(!0),E(3),P.current=setInterval(()=>{E(W=>W<=1?(P.current&&clearInterval(P.current),b(!1),C(parseInt(o[0])),v(!0),N(),0):W-1)},1e3)};f.useEffect(()=>(m?I.current=setInterval(()=>{C(W=>W<=1?(I.current&&clearInterval(I.current),v(!1),R(!0),0):W-1)},1e3):I.current&&clearInterval(I.current),()=>{I.current&&clearInterval(I.current),P.current&&clearInterval(P.current)}),[m]);const _=()=>{T(0),z(0),y([]),R(!1),d(""),S()},O=()=>{if(!u.trim()){de.show({icon:"fail",content:"请输入答案"});return}const W=Math.round((Date.now()-$)/1e3),Q=u===p.answer,ee={...p,userAnswer:u,isCorrect:Q,timeSpent:W};Q?(de.show({icon:"success",content:"回答正确！"}),T(fe=>fe+1)):(de.show({icon:"fail",content:`答案不正确，正确答案是 ${p.answer}`}),z(fe=>fe+1)),y(fe=>[...fe,ee]),N(),d("")},A=()=>{Ld.confirm({content:"确定要结束本次练习吗？",onConfirm:()=>{I.current&&clearInterval(I.current),P.current&&clearInterval(P.current),e("/practice")}})},B=()=>{if(w.length===0)return 0;const W=w.reduce((Q,ee)=>Q+(ee.timeSpent||0),0);return Math.round(W/w.length*10)/10},G=()=>{const W=B();return LR(W)},H=()=>x<=10?"#ff4d4f":x<=30?"#faad14":"#1677ff";return a.jsxs(vR,{children:[a.jsx(Ve,{onBack:A,right:a.jsx(ER,{onClick:()=>c(!0),disabled:m||h,children:a.jsx(ns,{})}),children:"计时挑战"}),h?a.jsxs(cc,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"calc(100vh - 90px)"},children:[a.jsx(Ha,{style:{fontSize:48,marginBottom:32}}),a.jsx("div",{style:{fontSize:64,fontWeight:"bold"},children:j}),a.jsx("div",{style:{marginTop:16},children:"准备开始..."})]}):!M&&!m&&!h?a.jsxs(cc,{style:{display:"flex",flexDirection:"column",justifyContent:"center",alignItems:"center",height:"calc(100vh - 90px)"},children:[a.jsx(Ha,{style:{fontSize:48,marginBottom:32}}),a.jsx("div",{style:{marginBottom:16,textAlign:"center"},children:"计时挑战模式将在有限时间内，测试你的计算速度和准确性"}),a.jsx(J,{color:"primary",size:"large",onClick:S,style:{marginTop:16},children:"开始挑战"})]}):M?a.jsxs(cc,{children:[a.jsx(ss,{status:"success",title:"挑战完成!",description:`总题数: ${w.length} | 正确: ${D} | 正确率: ${w.length>0?Math.round(D/w.length*100):0}%`,style:{padding:"24px 0"}}),a.jsx(uc,{children:a.jsxs("div",{style:{display:"flex",flexDirection:"column",alignItems:"center",marginBottom:16},children:[a.jsx("div",{style:{marginBottom:8},children:"你的平均用时"}),a.jsxs("div",{style:{fontSize:36,fontWeight:"bold",marginBottom:8},children:[B()," 秒/题"]}),a.jsx(kR,{color:G().color,children:G().level})]})}),a.jsxs(ge,{direction:"vertical",style:{width:"100%",marginTop:16},children:[a.jsx(J,{color:"primary",block:!0,onClick:_,children:"再次挑战"}),a.jsx(J,{block:!0,onClick:()=>e("/practice"),children:"返回选择"})]}),a.jsxs(uc,{style:{marginTop:"20px"},children:[a.jsx(Is,{children:"答题详情"}),w.map((W,Q)=>a.jsxs(Ji,{children:[a.jsx("span",{style:{flex:1},children:W.question}),a.jsxs(ge,{style:{marginLeft:16},children:[a.jsxs("span",{style:{color:W.isCorrect?"#52c41a":"#ff4d4f"},children:[W.userAnswer," ",W.isCorrect?"✓":`✗ (${W.answer})`]}),a.jsxs("span",{style:{color:"#8c8c8c",fontSize:12},children:[W.timeSpent,"秒"]})]})]},Q))]})]}):a.jsxs(cc,{children:[a.jsxs(uc,{children:[a.jsx("div",{style:{textAlign:"center",marginBottom:8},children:"剩余时间"}),a.jsx(jR,{percent:x/parseInt(o[0])*100}),a.jsxs(yR,{color:H(),children:[x," 秒"]}),a.jsx(xR,{children:p.question}),a.jsxs(ge,{direction:"vertical",style:{width:"100%"},children:[a.jsx(wR,{placeholder:"请输入答案",value:u,onChange:d,type:"number"}),a.jsx(bR,{children:a.jsx(J,{color:"primary",onClick:O,size:"large",style:{borderRadius:"24px"},children:"提交答案"})})]})]}),a.jsxs(uc,{children:[a.jsx(Is,{children:"实时统计"}),a.jsxs(Ji,{children:[a.jsx("span",{children:"已完成题目"}),a.jsxs("span",{children:[w.length," 题"]})]}),a.jsxs(Ji,{children:[a.jsx("span",{children:"正确题数"}),a.jsxs("span",{children:[D," 题"]})]}),a.jsxs(Ji,{children:[a.jsx("span",{children:"错误题数"}),a.jsxs("span",{children:[V," 题"]})]}),a.jsxs(Ji,{children:[a.jsx("span",{children:"正确率"}),a.jsxs("span",{children:[w.length>0?Math.round(D/w.length*100):0,"%"]})]}),a.jsxs(Ji,{children:[a.jsx("span",{children:"平均用时"}),a.jsxs("span",{children:[B()," 秒/题"]})]})]})]}),a.jsxs(dp,{visible:l,onMaskClick:()=>c(!1),bodyStyle:{borderTopLeftRadius:"12px",borderTopRightRadius:"12px",padding:"16px"},children:[a.jsx(Ve,{right:a.jsx(J,{onClick:()=>c(!1),children:"完成"}),style:{marginBottom:"8px"},children:"挑战设置"}),a.jsxs(CR,{children:[a.jsx(Is,{children:"题目类型"}),a.jsx(ma,{options:[{label:"加法",value:"加法"},{label:"减法",value:"减法"},{label:"乘法",value:"乘法"}],value:t,onChange:W=>{W.length>0&&n(W)}}),a.jsx(Is,{style:{marginTop:"16px"},children:"难度级别"}),a.jsx(ma,{options:[{label:"初级",value:"1"},{label:"中级",value:"2"},{label:"高级",value:"3"}],value:r,onChange:W=>{W.length>0&&i(W)}}),a.jsx(Is,{style:{marginTop:"16px"},children:"时间限制"}),a.jsx(ma,{options:[{label:"30秒",value:"30"},{label:"60秒",value:"60"},{label:"120秒",value:"120"}],value:o,onChange:W=>{W.length>0&&s(W)}}),a.jsx(J,{color:"primary",block:!0,style:{marginTop:"16px"},onClick:()=>{c(!1),_()},children:"应用设置并开始"})]})]})]})},_R=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 20px;
`,Yf=L.div`
  padding: 16px;
`,dc=L(tt)`
  margin-bottom: 16px;
  border-radius: 12px;
`,FR=L.div`
  font-size: 28px;
  text-align: center;
  margin: 20px 0;
`,OR=L(Xe)`
  text-align: center;
  font-size: 24px;
  width: 120px;
  margin: 0 auto;
`,NR=L(ge)`
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`,Xf=L.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
`,PR=L.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 40px 0;
  color: #999;
`,RR=L.div`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
  
  &:after {
    content: '';
    display: block;
    width: ${e=>e.percent}%;
    height: 100%;
    background-color: #ff9800;
    transition: width 0.3s ease;
  }
`,zs=L.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`,MR=()=>{const e=["加法","减法","乘法","除法","混合运算"],t=[];for(let n=0;n<20;n++){const r=e[Math.floor(Math.random()*e.length)];let i="",o="";if(r==="加法"){const l=Math.floor(Math.random()*90)+10,c=Math.floor(Math.random()*90)+10;i=`${l} + ${c} = ?`,o=String(l+c)}else if(r==="减法"){const l=Math.floor(Math.random()*90)+10,c=Math.floor(Math.random()*90)+10+l;i=`${c} - ${l} = ?`,o=String(c-l)}else if(r==="乘法"){const l=Math.floor(Math.random()*12)+1,c=Math.floor(Math.random()*12)+1;i=`${l} × ${c} = ?`,o=String(l*c)}else if(r==="除法"){const l=Math.floor(Math.random()*9)+1,c=l*(Math.floor(Math.random()*12)+1);i=`${c} ÷ ${l} = ?`,o=String(c/l)}else{const l=Math.floor(Math.random()*20)+1,c=Math.floor(Math.random()*20)+1,u=Math.floor(Math.random()*20)+1;i=`${l} + ${c} - ${u} = ?`,o=String(l+c-u)}const s=new Date;s.setDate(s.getDate()-Math.floor(Math.random()*14)),t.push({id:n+1,question:i,answer:o,category:r,date:s.toISOString().split("T")[0],frequency:Math.floor(Math.random()*3)+1})}return t},TR=()=>{var D;const e=ze(),[t,n]=f.useState([]),[r,i]=f.useState([]),[o,s]=f.useState([]),[l,c]=f.useState("all"),[u,d]=f.useState(!1),[p,g]=f.useState(0),[w,y]=f.useState(""),[x,C]=f.useState([]),[m,v]=f.useState(!1);f.useEffect(()=>{const T=MR();n(T),i(T)},[]),f.useEffect(()=>{i(l==="all"?t:t.filter(T=>T.category===l))},[l,t]);const h=T=>{const V=t.map(I=>I.id===T.id?{...I,selected:!I.selected}:I);n(V);const z=V.filter(I=>I.selected);s(z)},b=()=>{if(o.length===0){de.show({icon:"fail",content:"请至少选择一道题目"});return}d(!0),g(0),y(""),C([]),v(!1)},j=()=>{if(!w.trim()){de.show({icon:"fail",content:"请输入答案"});return}const T=o[p],V=w===T.answer;V?de.show({icon:"success",content:"回答正确！"}):de.show({icon:"fail",content:`答案不正确，正确答案是 ${T.answer}`}),C([...x,{question:T.question,answer:T.answer,userAnswer:w,isCorrect:V}]),p<o.length-1?(g(p+1),y("")):v(!0)},E=()=>{Ld.confirm({content:"确定要结束本次练习吗？",onConfirm:()=>{d(!1)}})},$=o.length>0?Math.round((p+1)/o.length*100):0,F=()=>x.length>0?Math.round(x.filter(T=>T.isCorrect).length/x.length*100):0,M=T=>{const V=r.map(I=>({...I,selected:T})),z=t.map(I=>V.find(N=>N.id===I.id)||I);n(z),s(z.filter(I=>I.selected))},R=T=>{switch(T){case"加法":return"#1677ff";case"减法":return"#52c41a";case"乘法":return"#fa8c16";case"除法":return"#eb2f96";case"混合运算":return"#722ed1";default:return"#8c8c8c"}};return a.jsxs(_R,{children:[a.jsx(Ve,{onBack:()=>e("/practice"),children:"错题训练"}),u?m?a.jsxs(Yf,{children:[a.jsx(ss,{status:"success",title:"专项训练完成!",description:`您完成了 ${o.length} 道题目的训练，正确率达到 ${F()}%`,icon:a.jsx(fa,{}),style:{padding:"24px 0"}}),a.jsxs(ge,{direction:"vertical",style:{width:"100%"},children:[a.jsx(J,{color:"warning",block:!0,onClick:()=>d(!1),children:"返回错题本"}),a.jsx(J,{block:!0,onClick:()=>e("/practice"),children:"返回练习中心"})]}),a.jsxs(dc,{style:{marginTop:"20px"},children:[a.jsx(Xf,{children:"答题详情"}),x.map((T,V)=>a.jsxs(zs,{children:[a.jsx("span",{style:{flex:1},children:T.question}),a.jsxs("span",{style:{color:T.isCorrect?"#52c41a":"#ff4d4f",marginLeft:"16px"},children:[T.userAnswer," ",T.isCorrect?"✓":`✗ (${T.answer})`]})]},V))]})]}):a.jsxs(Yf,{children:[a.jsx(RR,{percent:$}),a.jsxs(dc,{children:[a.jsxs("div",{style:{textAlign:"center",color:"#666",marginBottom:8},children:["第 ",p+1," 题 / 共 ",o.length," 题"]}),a.jsx(FR,{children:(D=o[p])==null?void 0:D.question}),a.jsxs(ge,{direction:"vertical",style:{width:"100%"},children:[a.jsx(OR,{placeholder:"请输入答案",value:w,onChange:y}),a.jsxs(NR,{children:[a.jsx(J,{color:"warning",onClick:j,size:"large",style:{borderRadius:"24px"},children:"提交答案"}),a.jsx(J,{onClick:E,size:"large",style:{borderRadius:"24px"},children:"结束练习"})]})]})]}),a.jsxs(dc,{children:[a.jsx(Xf,{children:"当前进度"}),a.jsxs(zs,{children:[a.jsx("span",{children:"已完成题目"}),a.jsxs("span",{children:[x.length," / ",o.length]})]}),a.jsxs(zs,{children:[a.jsx("span",{children:"正确题数"}),a.jsxs("span",{children:[x.filter(T=>T.isCorrect).length," 题"]})]}),a.jsxs(zs,{children:[a.jsx("span",{children:"错误题数"}),a.jsxs("span",{children:[x.filter(T=>!T.isCorrect).length," 题"]})]}),a.jsxs(zs,{children:[a.jsx("span",{children:"正确率"}),a.jsxs("span",{children:[F(),"%"]})]})]})]}):a.jsxs(Yf,{children:[a.jsxs(dc,{children:[a.jsx(Xf,{children:"错题分类"}),a.jsxs(Fe,{activeKey:l,onChange:c,style:{"--fixed-active-line-width":"30px","--active-line-color":"#ff9800","--active-title-color":"#ff9800"},children:[a.jsx(Fe.Tab,{title:"全部"},"all"),a.jsx(Fe.Tab,{title:"加法"},"加法"),a.jsx(Fe.Tab,{title:"减法"},"减法"),a.jsx(Fe.Tab,{title:"乘法"},"乘法"),a.jsx(Fe.Tab,{title:"除法"},"除法"),a.jsx(Fe.Tab,{title:"混合"},"混合运算")]}),a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",margin:"12px 0"},children:[a.jsxs("div",{children:["已选择: ",a.jsx("span",{style:{fontWeight:"bold",color:"#ff9800"},children:o.length})," 题"]}),a.jsxs(ge,{children:[a.jsx(J,{size:"mini",onClick:()=>M(!0),children:"全选"}),a.jsx(J,{size:"mini",onClick:()=>M(!1),children:"清空"})]})]}),r.length>0?a.jsx(ce,{style:{"--border-top":"none","--border-inner":"1px solid #f5f5f5","--border-bottom":"none","--padding-left":"0px"},children:r.map(T=>a.jsx(ce.Item,{prefix:a.jsx(X6,{checked:!!T.selected,onChange:()=>h(T)}),title:T.question,description:a.jsxs(ge,{style:{marginTop:4},children:[a.jsx(ut,{color:R(T.category),round:!0,style:{fontSize:12,padding:"0 6px"},children:T.category}),a.jsxs("span",{style:{fontSize:12,color:"#999"},children:["错误",T.frequency,"次"]}),a.jsx("span",{style:{fontSize:12,color:"#999"},children:T.date})]})},T.id))}):a.jsxs(PR,{children:[a.jsx(c6,{style:{fontSize:48,marginBottom:16}}),a.jsx("span",{children:"没有找到相关错题"})]})]}),a.jsxs(J,{color:"warning",block:!0,size:"large",onClick:b,disabled:o.length===0,style:{marginTop:16,borderRadius:8},children:["开始专项训练 (",o.length,"题)"]})]})]})},AR=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 20px;
`,Jf=L.div`
  padding: 16px;
`,IR=L(tt)`
  margin-bottom: 16px;
  border-radius: 12px;
`,e0=L(tt)`
  margin-bottom: 16px;
  border-radius: 12px;
`,Ds=L.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,zR=L.div`
  position: relative;
  height: 80px;
  border-radius: 10px;
  background-color: ${e=>{if(e.disabled)return"#f0f0f0";switch(e.type){case"加法":return"rgba(22, 119, 255, 0.05)";case"减法":return"rgba(82, 196, 26, 0.05)";case"乘法":return"rgba(250, 140, 22, 0.05)";case"混合运算":return"rgba(114, 46, 209, 0.05)";default:return"#fff"}}};
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0 2px 6px rgba(0, 0, 0, 0.08);
  overflow: hidden;
  opacity: ${e=>e.disabled?.7:1};
  transition: all 0.2s ease;
  border: 1px solid ${e=>{if(e.disabled)return"#e8e8e8";switch(e.type){case"加法":return"rgba(22, 119, 255, 0.2)";case"减法":return"rgba(82, 196, 26, 0.2)";case"乘法":return"rgba(250, 140, 22, 0.2)";case"混合运算":return"rgba(114, 46, 209, 0.2)";default:return"#e8e8e8"}}};
  
  &:after {
    content: ${e=>e.completed?"'✓'":"none"};
    position: absolute;
    top: 4px;
    right: 4px;
    font-size: 10px;
    background-color: ${e=>{switch(e.type){case"加法":return"#1677ff";case"减法":return"#52c41a";case"乘法":return"#fa8c16";case"混合运算":return"#722ed1";default:return"#52c41a"}}};
    color: white;
    width: 14px;
    height: 14px;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
  }
  
  &:active {
    transform: scale(0.97);
  }
  
  &:not(:disabled):hover {
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.12);
  }
`,DR=L.div`
  font-size: 22px;
  font-weight: bold;
  color: ${e=>{switch(e.type){case"加法":return"#1677ff";case"减法":return"#52c41a";case"乘法":return"#fa8c16";case"混合运算":return"#722ed1";default:return"#333"}}};
  margin-bottom: 2px;
`,BR=L.div`
  font-size: 12px;
  color: #666;
  margin-top: 2px;
  margin-bottom: 2px;
`,VR=L.div`
  display: flex;
  margin-top: 4px;
`,WR=L.div`
  font-size: 32px;
  text-align: center;
  margin: 20px 0;
`,UR=L(Xe)`
  text-align: center;
  font-size: 24px;
  width: 120px;
  margin: 0 auto;
`,HR=L(ge)`
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`,fc=L(J)`
  border-radius: 8px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
  font-size: 15px;
  
  &.adm-button-primary {
    background: linear-gradient(to right, #1677ff, #0958d9);
  }
`,qR=L.div`
  width: 100%;
  height: 6px;
  background-color: #f5f5f5;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 16px;
  
  &:after {
    content: '';
    display: block;
    width: ${e=>e.percent}%;
    height: 100%;
    background-color: ${e=>e.color};
    transition: width 0.3s ease;
  }
`,ZR=L.div`
  text-align: center;
  margin-bottom: 8px;
  font-size: 13px;
  color: #666;
  
  & > span {
    color: ${e=>e.percent<30?"#ff4d4f":e.percent<70?"#fa8c16":"#52c41a"};
    font-weight: bold;
  }
`;L.div`
  display: inline-block;
  padding: 4px 8px;
  border-radius: 12px;
  font-size: 12px;
  color: white;
  background-color: #ff9800;
  margin-left: 8px;
`;const hc=L.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`,QR=L(zt)`
  padding: 4px 0;
`,GR=L(tt)`
  margin-bottom: 16px;
  border-radius: 12px;
  background: linear-gradient(to right bottom, #fff, #f9f9f9);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(to bottom, #ffcb45, #fa8c16);
  }
`,KR=L.div`
  position: relative;
  padding-top: 8px;
  padding-left: 10px;
`,pc=L.div`
  display: flex;
  align-items: center;
  padding: 10px 12px;
  border-radius: 8px;
  background-color: #fafafa;
  margin-bottom: 12px;
  transition: all 0.2s ease;
  border: 1px solid #f0f0f0;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    transform: translateX(4px);
    background-color: #f0f0f0;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.08);
    border-color: #e6e6e6;
  }
`,mc=L.div`
  width: 32px;
  height: 32px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 12px;
  color: white;
  font-size: 16px;
  background-color: ${e=>{switch(e.type){case"star1":return"#fa8c16";case"star2":return"#faad14";case"star3":return"#ffcb45";case"unlock":return"#1677ff";default:return"#d9d9d9"}}};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  flex-shrink: 0;
`,gc=L.div`
  flex: 1;
`,vc=L.div`
  font-weight: bold;
  font-size: 14px;
  color: #333;
  margin-bottom: 2px;
`,xc=L.div`
  font-size: 12px;
  color: #666;
`,t0=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,YR=L(tt)`
  margin-bottom: 16px;
  border-radius: 12px;
  background: linear-gradient(to right bottom, #fff, #f8f8ff);
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.05);
  overflow: hidden;
  position: relative;
  
  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 6px;
    height: 100%;
    background: linear-gradient(to bottom, #ffcb45, #1677ff);
  }
`,P3=L.div`
  position: relative;
  padding: 14px 12px;
  border-radius: 8px;
  background-color: #fafafa;
  margin-bottom: 12px;
  transition: all 0.2s ease;
  border: 1px solid #f0f0f0;
  
  &:last-child {
    margin-bottom: 0;
  }
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.08);
  }
`,R3=L.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 8px;
`,M3=L.div`
  font-weight: bold;
  font-size: 15px;
  color: #333;
  display: flex;
  align-items: center;
`,T3=L.div`
  width: 26px;
  height: 26px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  margin-right: 10px;
  color: white;
  font-size: 14px;
  background-color: ${e=>e.type==="master"?"#ff9800":"#ffcb45"};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.15);
  flex-shrink: 0;
`,A3=L.div`
  font-size: 14px;
  font-weight: bold;
  color: #1677ff;
`,I3=L.div`
  position: relative;
  height: 10px;
  background-color: #f0f0f0;
  border-radius: 5px;
  overflow: hidden;
  margin-top: 2px;
`,z3=L.div`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: ${e=>e.percent}%;
  background-color: ${e=>e.color};
  border-radius: 5px;
  transition: width 0.5s ease;
  
  &:after {
    content: '';
    position: absolute;
    top: 0;
    right: 0;
    width: 8px;
    height: 100%;
    background: linear-gradient(to right, transparent, rgba(255, 255, 255, 0.3));
  }
`,yc=L.div`
  position: absolute;
  top: -4px;
  right: -4px;
  background-color: ${e=>e.percent===100?"#52c41a":"#1677ff"};
  color: white;
  font-size: 12px;
  padding: 2px 6px;
  border-radius: 10px;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  font-weight: bold;
`,XR=(e,t)=>{let n,r,i,o,s;switch(e){case"加法":t===1?(n=Math.floor(Math.random()*10),r=Math.floor(Math.random()*10),o=`${n} + ${r} = ?`,s=String(n+r)):t===2?(n=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*90)+10,o=`${n} + ${r} = ?`,s=String(n+r)):(n=Math.floor(Math.random()*900)+100,r=Math.floor(Math.random()*900)+100,o=`${n} + ${r} = ?`,s=String(n+r));break;case"减法":t===1?(r=Math.floor(Math.random()*9)+1,n=Math.floor(Math.random()*9)+r,o=`${n} - ${r} = ?`,s=String(n-r)):t===2?(r=Math.floor(Math.random()*90)+10,n=Math.floor(Math.random()*90)+10+r,o=`${n} - ${r} = ?`,s=String(n-r)):(r=Math.floor(Math.random()*900)+100,n=Math.floor(Math.random()*900)+100+r,o=`${n} - ${r} = ?`,s=String(n-r));break;case"乘法":t===1?(n=Math.floor(Math.random()*9)+1,r=Math.floor(Math.random()*9)+1,o=`${n} × ${r} = ?`,s=String(n*r)):t===2?(n=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*9)+1,o=`${n} × ${r} = ?`,s=String(n*r)):(n=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*90)+10,o=`${n} × ${r} = ?`,s=String(n*r));break;case"混合运算":n=Math.floor(Math.random()*20)+1,r=Math.floor(Math.random()*20)+1,i=Math.floor(Math.random()*20)+1;const l=["+","-"],c=l[Math.floor(Math.random()*l.length)],u=l[Math.floor(Math.random()*l.length)];o=`${n} ${c} ${r} ${u} ${i} = ?`,c==="+"&&u==="+"?s=String(n+r+i):c==="+"&&u==="-"?s=String(n+r-i):c==="-"&&u==="+"?s=String(n-r+i):s=String(n-r-i);break;default:n=Math.floor(Math.random()*10),r=Math.floor(Math.random()*10),o=`${n} + ${r} = ?`,s=String(n+r)}return{question:o,answer:s}},JR=()=>{const e=[],t=["加法","减法","乘法","混合运算"];for(let n=1;n<=16;n++){const r=Math.ceil(n/4),i=n<=4;e.push({id:n,name:`第${n}关`,type:t[(n-1)%4],difficulty:r,questions:5+r*2,reward:n%4===0?"金币×50":"金币×10",completed:!1,stars:0,locked:!i})}return e},eM=()=>{var N;const e=ze(),[t,n]=f.useState([]),[r,i]=f.useState(null),[o,s]=f.useState(!1),[l,c]=f.useState([]),[u,d]=f.useState(0),[p,g]=f.useState(""),[w,y]=f.useState([]),[x,C]=f.useState(0),[m,v]=f.useState(0),[h,b]=f.useState(0),[j,E]=f.useState(!1),[$,F]=f.useState(0),[M,R]=f.useState(!1);f.useEffect(()=>{const S=localStorage.getItem("levelProgress");if(S)n(JSON.parse(S));else{const _=JR();n(_),localStorage.setItem("levelProgress",JSON.stringify(_))}},[]);const D=S=>{if(S.locked){de.show({icon:"fail",content:"请先完成前面的关卡"});return}i(S),Nf.confirm({title:S.name,content:a.jsxs("div",{children:[a.jsxs("p",{style:{display:"flex",alignItems:"center"},children:[a.jsx("span",{style:{minWidth:"76px"},children:"类型:"}),a.jsx("span",{style:{color:S.type==="加法"?"#1677ff":S.type==="减法"?"#52c41a":S.type==="乘法"?"#fa8c16":"#722ed1",fontWeight:"bold"},children:S.type})]}),a.jsxs("p",{style:{display:"flex",alignItems:"center"},children:[a.jsx("span",{style:{minWidth:"76px"},children:"难度:"}),a.jsx("span",{style:{color:"#fa8c16"},children:"★".repeat(S.difficulty)})]}),a.jsxs("p",{style:{display:"flex",alignItems:"center"},children:[a.jsx("span",{style:{minWidth:"76px"},children:"题目数量:"}),a.jsxs("span",{children:[S.questions,"题"]})]}),a.jsxs("p",{style:{display:"flex",alignItems:"center"},children:[a.jsx("span",{style:{minWidth:"76px"},children:"通关奖励:"}),a.jsx("span",{style:{color:"#ff9800",fontWeight:"bold"},children:S.reward})]}),S.completed&&a.jsxs("p",{style:{display:"flex",alignItems:"center"},children:[a.jsx("span",{style:{minWidth:"76px"},children:"最高评分:"}),a.jsxs("span",{children:[[...Array(S.stars)].map((_,O)=>a.jsx(gn,{style:{fontSize:16,color:"#ffcb45"}},O)),[...Array(3-S.stars)].map((_,O)=>a.jsx(Ut,{style:{fontSize:16,color:"#d9d9d9"}},O))]})]})]}),closeOnMaskClick:!0,confirmText:S.completed?"重新挑战":"开始挑战",cancelText:"返回",onConfirm:()=>{T(S)}})},T=S=>{const _=[];for(let O=0;O<S.questions;O++)_.push(XR(S.type,S.difficulty));c(_),d(0),g(""),y([]),C(0),v(S.questions*10),b(Date.now()),s(!0),i(S),E(!1)},V=()=>{if(!p.trim()){de.show({icon:"fail",content:"请输入答案"});return}const S=l[u],_=p===S.answer,O=[...l];O[u]={...S,userAnswer:p,isCorrect:_},c(O);let A=x;_?(de.show({icon:"success",content:"回答正确！"}),A=x+1,C(A)):(de.show({icon:"fail",content:`答案不正确，正确答案是 ${S.answer}`}),y([...w,{question:S.question,answer:S.answer,userAnswer:p}])),u<l.length-1?(d(u+1),g("")):z(A)},z=S=>{if(!r)return;const _=S!==void 0?S:x;S!==void 0&&S!==x&&C(S);const O=_/l.length,A=(Date.now()-h)/1e3,B=A/l.length;console.log("正确率:",O,"正确题数:",_,"总题数:",l.length),console.log("总时间(秒):",A,"平均时间(秒/题):",B);let G=0;O>=.9?B<5?(G=3,console.log("给予3星 - 正确率>=90%且平均<5秒/题")):(G=2,console.log("给予2星 - 正确率>=90%")):O>=.7?(G=1,console.log("给予1星 - 正确率>=70%")):console.log("不给星 - 正确率<70%"),O===1&&G<2&&(G=2,console.log("调整: 100%正确率至少给2星")),F(G),console.log("最终给予星级:",G);const H=[...t],W=H.findIndex(Q=>Q.id===r.id);if(W>=0){const Q=H[W],ee=Math.max(Q.stars,G);console.log("关卡之前星级:",Q.stars,"新星级:",ee);const fe={...Q,completed:!0,stars:ee};if(H[W]=fe,i(fe),!Q.completed&&Q.id<H.length){const K=H.findIndex(te=>te.id===Q.id+1);K>=0&&H[K].locked&&(H[K]={...H[K],locked:!1})}}n(H),localStorage.setItem("levelProgress",JSON.stringify(H)),console.log("保存到localStorage的关卡数据:",JSON.stringify(H)),s(!1),E(!0),W>=0&&(!t[W].completed||G>t[W].stars)&&R(!0)},I=()=>{Nf.confirm({title:"确定要放弃本次挑战吗？",content:"你将失去当前的进度",confirmText:"确定放弃",cancelText:"继续挑战",onConfirm:()=>{s(!1)}})},P=l.length>0?Math.round((u+1)/l.length*100):0;return a.jsxs(AR,{children:[a.jsx(Ve,{onBack:()=>{o?I():e("/practice")},style:{"--border-bottom":"1px solid #f0f0f0","--height":"46px",backgroundColor:"#fff"},children:"闯关模式"}),!o&&!j?a.jsxs(Jf,{children:[a.jsxs(IR,{children:[a.jsxs(Ds,{children:[a.jsx("span",{children:"选择关卡"}),a.jsxs("span",{style:{fontSize:14,color:"#999"},children:["已通关: ",t.filter(S=>S.completed).length,"/",t.length]})]}),a.jsxs(ZR,{percent:Math.round(t.filter(S=>S.completed).length/t.length*100),children:["完成进度: ",a.jsxs("span",{children:[Math.round(t.filter(S=>S.completed).length/t.length*100),"%"]})]}),a.jsx(QR,{columns:4,gap:8,children:t.map(S=>a.jsx(zt.Item,{children:a.jsx(zR,{disabled:S.locked,type:S.type,completed:S.completed,onClick:()=>D(S),children:S.locked?a.jsx(qa,{style:{fontSize:22,color:"#999"}}):a.jsxs(a.Fragment,{children:[a.jsx(DR,{type:S.type,children:S.id}),a.jsx(BR,{children:S.type}),a.jsx(VR,{children:[1,2,3].map(_=>a.jsx("span",{style:{margin:"0 1px"},children:S.completed&&_<=S.stars?a.jsx(gn,{style:{fontSize:12,color:"#ffcb45"}}):a.jsx(Ut,{style:{fontSize:12,color:"#d9d9d9"}})},_))})]})})},S.id))})]}),a.jsxs(GR,{children:[a.jsx(Ds,{children:"闯关指南"}),a.jsxs(KR,{children:[a.jsxs(pc,{children:[a.jsx(mc,{type:"star1",children:a.jsx(t0,{children:a.jsx(gn,{style:{fontSize:16}})})}),a.jsxs(gc,{children:[a.jsx(vc,{children:"一星评价"}),a.jsx(xc,{children:"答题正确率达到 70% 以上即可获得"})]})]}),a.jsxs(pc,{children:[a.jsx(mc,{type:"star2",children:a.jsxs(t0,{children:[a.jsx(gn,{style:{fontSize:16}}),a.jsx(gn,{style:{fontSize:16,marginLeft:2}})]})}),a.jsxs(gc,{children:[a.jsx(vc,{children:"二星评价"}),a.jsx(xc,{children:"答题正确率达到 90% 以上可获得"})]})]}),a.jsxs(pc,{children:[a.jsx(mc,{type:"star3",children:a.jsxs(t0,{children:[a.jsx(gn,{style:{fontSize:14}}),a.jsx(gn,{style:{fontSize:14,margin:"0 1px"}}),a.jsx(gn,{style:{fontSize:14}})]})}),a.jsxs(gc,{children:[a.jsx(vc,{children:"三星评价"}),a.jsx(xc,{children:"正确率达到 90% 且平均答题时间少于 5 秒"})]})]}),a.jsxs(pc,{children:[a.jsx(mc,{type:"unlock",children:a.jsx(qa,{style:{fontSize:16}})}),a.jsxs(gc,{children:[a.jsx(vc,{children:"解锁规则"}),a.jsx(xc,{children:"完成前一个关卡即可解锁下一个关卡，挑战更高难度"})]})]})]})]}),a.jsxs(YR,{children:[a.jsx(Ds,{children:"成就进度"}),a.jsxs(ge,{direction:"vertical",style:{width:"100%",padding:"4px 8px"},children:[a.jsxs(P3,{children:[a.jsxs(R3,{children:[a.jsxs(M3,{children:[a.jsx(T3,{type:"master",children:a.jsx(Rr,{style:{fontSize:16}})}),"闯关大师"]}),a.jsxs(A3,{children:[t.filter(S=>S.completed).length,"/",t.length]})]}),a.jsx(I3,{children:a.jsx(z3,{percent:Math.round(t.filter(S=>S.completed).length/t.length*100),color:"#ff9800"})}),Math.round(t.filter(S=>S.completed).length/t.length*100)===100&&a.jsx(yc,{percent:100,children:"已完成"}),Math.round(t.filter(S=>S.completed).length/t.length*100)>0&&Math.round(t.filter(S=>S.completed).length/t.length*100)<100&&a.jsx(yc,{percent:Math.round(t.filter(S=>S.completed).length/t.length*100),children:"进行中"})]}),a.jsxs(P3,{children:[a.jsxs(R3,{children:[a.jsxs(M3,{children:[a.jsx(T3,{type:"star",children:a.jsx(gn,{style:{fontSize:14}})}),"三星收集"]}),a.jsxs(A3,{children:[t.filter(S=>S.stars===3).length,"/",t.length]})]}),a.jsx(I3,{children:a.jsx(z3,{percent:Math.round(t.filter(S=>S.stars===3).length/t.length*100),color:"#ffcb45"})}),Math.round(t.filter(S=>S.stars===3).length/t.length*100)===100&&a.jsx(yc,{percent:100,children:"已完成"}),Math.round(t.filter(S=>S.stars===3).length/t.length*100)>0&&Math.round(t.filter(S=>S.stars===3).length/t.length*100)<100&&a.jsx(yc,{percent:Math.round(t.filter(S=>S.stars===3).length/t.length*100),children:"进行中"})]})]})]})]}):o?a.jsxs(Jf,{children:[a.jsx(qR,{percent:P,color:(r==null?void 0:r.type)==="加法"?"#1677ff":(r==null?void 0:r.type)==="减法"?"#52c41a":(r==null?void 0:r.type)==="乘法"?"#fa8c16":"#722ed1"}),a.jsxs(e0,{children:[a.jsxs("div",{style:{textAlign:"center",color:"#666",marginBottom:8},children:[r==null?void 0:r.name," · 第 ",u+1," 题 / 共 ",l.length," 题"]}),a.jsx(WR,{children:(N=l[u])==null?void 0:N.question}),a.jsxs(ge,{direction:"vertical",style:{width:"100%"},children:[a.jsx(UR,{placeholder:"请输入答案",value:p,onChange:g}),a.jsxs(HR,{children:[a.jsx(fc,{color:"primary",onClick:V,size:"middle",children:"提交答案"}),a.jsx(fc,{onClick:I,size:"middle",children:"放弃挑战"})]})]})]}),a.jsxs(e0,{children:[a.jsx(Ds,{children:"当前进度"}),a.jsxs(hc,{children:[a.jsx("span",{children:"已答对"}),a.jsxs("span",{children:[x," 题"]})]}),a.jsxs(hc,{children:[a.jsx("span",{children:"已答错"}),a.jsxs("span",{children:[w.length," 题"]})]}),a.jsxs(hc,{children:[a.jsx("span",{children:"正确率"}),a.jsxs("span",{children:[l.length>0?Math.round(x/(u+1)*100):0,"%"]})]})]})]}):a.jsxs(Jf,{children:[a.jsx(ss,{status:$>0?"success":"warning",title:a.jsxs("span",{style:{display:"flex",alignItems:"center",justifyContent:"center"},children:[r==null?void 0:r.name," 挑战完成!",$>0?a.jsxs(ge,{style:{marginLeft:12},children:[[...Array($)].map((S,_)=>a.jsx(gn,{style:{fontSize:20,color:"#ffcb45"}},_)),[...Array(3-$)].map((S,_)=>a.jsx(Ut,{style:{fontSize:20,color:"#d9d9d9"}},_))]}):null]}),description:`正确: ${x}/${l.length} | 正确率: ${Math.round(x/l.length*100)}%`,style:{padding:"24px 0"}}),a.jsxs(ge,{direction:"vertical",style:{width:"100%"},children:[a.jsx(fc,{color:"primary",block:!0,onClick:()=>{r&&T(r)},children:"再次挑战"}),a.jsx(fc,{block:!0,onClick:()=>{E(!1),i(null)},children:"返回关卡选择"})]}),w.length>0&&a.jsxs(e0,{style:{marginTop:"20px"},children:[a.jsx(Ds,{children:"错误题目"}),w.map((S,_)=>a.jsxs(hc,{children:[a.jsx("span",{style:{flex:1},children:S.question}),a.jsxs("span",{style:{color:"#ff4d4f",marginLeft:"16px"},children:[S.userAnswer," ✗ (",S.answer,")"]})]},_))]})]}),a.jsx(Nf,{visible:M,onClose:()=>R(!1),closeOnMaskClick:!0,title:"恭喜获得奖励",content:a.jsxs("div",{style:{textAlign:"center"},children:[a.jsx(ik,{style:{fontSize:48,color:"#ff9800",marginBottom:16}}),a.jsxs("div",{style:{background:"#fff8e1",padding:"12px",borderRadius:"8px",marginBottom:"16px",display:"flex",justifyContent:"center",alignItems:"center"},children:[a.jsx(Zr,{src:"/src/assets/coin.png",width:32,height:32,style:{marginRight:8}}),a.jsx("span",{style:{fontSize:20,fontWeight:"bold",color:"#ff9800"},children:(r==null?void 0:r.reward.replace("金币×",""))||"10"})]}),$>((r==null?void 0:r.stars)||0)&&(r==null?void 0:r.completed)&&a.jsx("p",{style:{color:"#666"},children:"你的评分提升了！"}),a.jsx(J,{color:"primary",style:{marginTop:16,borderRadius:"8px"},onClick:()=>R(!1),block:!0,children:"领取奖励"})]})})]})},tM=L.div`
  min-height: 100vh;
  background: #f5f5f5;
  padding-bottom: 20px;
`,n0=L.div`
  padding: 16px;
`,eo=L(tt)`
  margin-bottom: 16px;
  border-radius: 12px;
`,nM=L.div`
  font-size: 32px;
  text-align: center;
  margin: 20px 0;
`,rM=L(Xe)`
  text-align: center;
  font-size: 24px;
  width: 120px;
  margin: 0 auto;
`,iM=L(ge)`
  width: 100%;
  justify-content: center;
  margin-top: 20px;
`,Bs=L.div`
  font-size: 16px;
  font-weight: bold;
  margin-bottom: 12px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`,D3=L.div`
  width: 100%;
  height: 8px;
  background-color: #f0f0f0;
  border-radius: 4px;
  overflow: hidden;
  margin-bottom: 16px;
  
  &:after {
    content: '';
    display: block;
    width: ${e=>e.percent}%;
    height: 100%;
    background-color: #f5222d;
    transition: width 0.3s ease;
  }
`,Tn=L.div`
  display: flex;
  justify-content: space-between;
  padding: 8px 0;
  border-bottom: 1px solid #f0f0f0;
  
  &:last-child {
    border-bottom: none;
  }
`,oM=L.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #fff2f0;
  border-radius: 8px;
  padding: 12px;
  margin-bottom: 16px;
`,sM=L.div`
  font-size: 28px;
  font-weight: bold;
  color: #f5222d;
  margin: 0 8px;
`,aM=L.div`
  background: white;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 16px;
`,lM=()=>{const e=["加法","减法","乘法","混合"],t=new Date().getDate(),n=e[t%e.length];let r,i,o,s,l;switch(n){case"加法":r=Math.floor(Math.random()*90)+10,i=Math.floor(Math.random()*90)+10,s=`${r} + ${i} = ?`,l=String(r+i);break;case"减法":i=Math.floor(Math.random()*90)+10,r=Math.floor(Math.random()*90)+10+i,s=`${r} - ${i} = ?`,l=String(r-i);break;case"乘法":r=Math.floor(Math.random()*12)+1,i=Math.floor(Math.random()*12)+1,s=`${r} × ${i} = ?`,l=String(r*i);break;case"混合":default:r=Math.floor(Math.random()*20)+1,i=Math.floor(Math.random()*20)+1,o=Math.floor(Math.random()*20)+1,s=`${r} + ${i} - ${o} = ?`,l=String(r+i-o)}return{question:s,answer:l}},B3=()=>{const e=new Date;return`${e.getFullYear()}-${String(e.getMonth()+1).padStart(2,"0")}-${String(e.getDate()).padStart(2,"0")}`},cM=()=>{var N;const e=ze(),[t,n]=f.useState(!1),[r,i]=f.useState(0),[o,s]=f.useState([]),[l]=f.useState(10),[c,u]=f.useState(0),[d,p]=f.useState(!1),[g,w]=f.useState(!1),[y,x]=f.useState([]),[C,m]=f.useState(0),[v,h]=f.useState(""),[b,j]=f.useState(0),[E,$]=f.useState(0),[F,M]=f.useState(!1);f.useEffect(()=>{const S=localStorage.getItem("dailyPracticeData");if(S){const _=JSON.parse(S),O=B3();n(_.completedDates.includes(O)),s(_.completedDates||[]),R(_.completedDates),_.completedDates.includes(O)?u(l):u(_.todayProgress||0)}},[]);const R=S=>{if(!S||S.length===0){i(0);return}const _=[...S].sort((H,W)=>new Date(W).getTime()-new Date(H).getTime()),O=new Date(_[0]),A=new Date;if(A.setHours(0,0,0,0),O.setHours(0,0,0,0),O.getTime()!==A.getTime()){const H=new Date(A);if(H.setDate(H.getDate()-1),O.getTime()!==H.getTime()){i(0);return}}let B=1,G=O;for(let H=1;H<_.length;H++){const W=new Date(_[H]);W.setHours(0,0,0,0);const Q=new Date(G);if(Q.setDate(Q.getDate()-1),W.getTime()!==Q.getTime())break;B++,G=W}i(B)},D=()=>{if(t){de.show({icon:"success",content:"今日练习已完成，明天再来吧！"});return}const S=l-c,_=[];for(let O=0;O<S;O++)_.push(lM());x(_),m(0),h(""),j(0),$(0),w(!0)},T=()=>{if(!v.trim()){de.show({icon:"fail",content:"请输入答案"});return}const S=y[C],_=v===S.answer;_?(de.show({icon:"success",content:"回答正确！"}),j(B=>B+1)):(de.show({icon:"fail",content:`答案不正确，正确答案是 ${S.answer}`}),$(B=>B+1));const O=[...y];O[C]={...S,userAnswer:v,isCorrect:_},x(O);const A=c+1;u(A),V(A),C<y.length-1?(m(C+1),h("")):z()},V=S=>{const _=B3(),O=localStorage.getItem("dailyPracticeData");let A=O?JSON.parse(O):{completedDates:[]};A.todayProgress=S,S>=l&&!A.completedDates.includes(_)&&(A.completedDates.push(_),s(A.completedDates),R(A.completedDates),n(!0)),localStorage.setItem("dailyPracticeData",JSON.stringify(A))},z=()=>{w(!1),M(!0),t||de.show({icon:"success",content:"恭喜完成今日练习！",duration:2e3})},I=()=>{de.show({content:"进度已保存，下次可继续完成"}),w(!1)},P=l>0?Math.round(c/l*100):0;return a.jsxs(tM,{children:[a.jsx(Ve,{onBack:()=>{g?I():e("/practice")},children:"每日练习"}),!g&&!F?a.jsxs(n0,{children:[a.jsxs(oM,{children:[a.jsx(Bm,{style:{fontSize:24,color:"#f5222d"}}),a.jsx(sM,{children:r}),a.jsxs("div",{children:[a.jsx("div",{style:{fontWeight:"bold"},children:"连续打卡"}),a.jsx("div",{style:{fontSize:12,color:"#666"},children:"坚持每天练习获得奖励"})]})]}),a.jsxs(eo,{children:[a.jsxs(Bs,{children:[a.jsx("span",{children:"今日进度"}),a.jsxs("span",{style:{fontSize:14,color:"#999",cursor:"pointer"},onClick:()=>p(!d),children:[a.jsx(ap,{style:{marginRight:4}}),"打卡记录"]})]}),a.jsx(D3,{percent:P}),a.jsxs("div",{style:{textAlign:"center",fontSize:14,marginTop:-8,marginBottom:8},children:[c,"/",l]}),a.jsx("div",{style:{textAlign:"center",margin:"16px 0"},children:t?a.jsxs("div",{style:{color:"#52c41a",fontWeight:"bold",display:"flex",alignItems:"center",justifyContent:"center"},children:[a.jsx(lp,{style:{marginRight:8}}),"今日练习已完成"]}):a.jsxs("div",{style:{color:"#666"},children:["还需完成 ",l-c," 题"]})}),a.jsx(J,{color:t?"success":"danger",block:!0,size:"large",onClick:D,disabled:t,style:{marginTop:16,borderRadius:8},children:t?"今日已完成":"继续练习"})]}),d&&a.jsxs(aM,{children:[a.jsx(Bs,{style:{padding:"12px 16px 0"},children:"打卡日历"}),a.jsx(Ij,{selectionMode:"single"})]}),a.jsxs(eo,{children:[a.jsx(Bs,{children:"打卡奖励"}),a.jsxs(Tn,{children:[a.jsx("span",{children:"连续3天"}),a.jsx("span",{children:"金币 +30"})]}),a.jsxs(Tn,{children:[a.jsx("span",{children:"连续7天"}),a.jsx("span",{children:"金币 +100"})]}),a.jsxs(Tn,{children:[a.jsx("span",{children:"连续15天"}),a.jsx("span",{children:"金币 +200 + 解锁特殊题库"})]}),a.jsxs(Tn,{children:[a.jsx("span",{children:"连续30天"}),a.jsx("span",{children:"金币 +500 + 限定徽章"})]})]})]}):g?a.jsxs(n0,{children:[a.jsx(D3,{percent:(C+1)/y.length*100}),a.jsxs(eo,{children:[a.jsxs("div",{style:{textAlign:"center",color:"#666",marginBottom:8},children:["第 ",C+1," 题 / 剩余 ",y.length-C," 题"]}),a.jsx(nM,{children:(N=y[C])==null?void 0:N.question}),a.jsxs(ge,{direction:"vertical",style:{width:"100%"},children:[a.jsx(rM,{placeholder:"请输入答案",value:v,onChange:h}),a.jsxs(iM,{children:[a.jsx(J,{color:"danger",onClick:T,size:"large",style:{borderRadius:"24px"},children:"提交答案"}),a.jsx(J,{onClick:I,size:"large",style:{borderRadius:"24px"},children:"暂时离开"})]})]})]}),a.jsxs(eo,{children:[a.jsx(Bs,{children:"当前进度"}),a.jsxs(Tn,{children:[a.jsx("span",{children:"总进度"}),a.jsxs("span",{children:[c," / ",l]})]}),a.jsxs(Tn,{children:[a.jsx("span",{children:"本次正确"}),a.jsxs("span",{children:[b," 题"]})]}),a.jsxs(Tn,{children:[a.jsx("span",{children:"本次错误"}),a.jsxs("span",{children:[E," 题"]})]})]})]}):a.jsxs(n0,{children:[a.jsx(ss,{status:"success",title:"每日练习完成!",description:`你已完成今日 ${l} 题目标，已连续打卡 ${r} 天`,style:{padding:"24px 0"}}),a.jsx(eo,{children:a.jsxs("div",{style:{display:"flex",justifyContent:"center",alignItems:"center",flexDirection:"column",padding:"16px 0"},children:[a.jsx(Bm,{style:{fontSize:28,color:"#f5222d",marginBottom:8}}),a.jsxs("div",{style:{fontSize:20,fontWeight:"bold",marginBottom:8,color:"#f5222d"},children:["连续打卡 ",r," 天"]}),r>=3&&a.jsxs("div",{style:{background:"#fff2f0",padding:"8px 16px",borderRadius:"16px",color:"#f5222d",fontSize:14,display:"flex",alignItems:"center"},children:[a.jsx(Zr,{src:"/src/assets/coin.png",width:20,height:20,style:{marginRight:4}}),r>=30?"+500":r>=15?"+200":r>=7?"+100":"+30"]})]})}),a.jsx(ge,{direction:"vertical",style:{width:"100%",marginTop:16},children:a.jsx(J,{onClick:()=>M(!1),children:"返回"})}),a.jsxs(eo,{style:{marginTop:"20px"},children:[a.jsx(Bs,{children:"本次练习"}),a.jsxs(Tn,{children:[a.jsx("span",{children:"正确题数"}),a.jsxs("span",{children:[b," 题"]})]}),a.jsxs(Tn,{children:[a.jsx("span",{children:"错误题数"}),a.jsxs("span",{children:[E," 题"]})]}),a.jsxs(Tn,{children:[a.jsx("span",{children:"正确率"}),a.jsxs("span",{children:[Math.round(b/(b+E)*100),"%"]})]})]})]})]})},uM=L.div`
  min-height: 100vh;
  background: #f7f8fa;
  padding-bottom: 20px;
  overflow-x: hidden;
`,r0=L.div`
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
`,wc=L(tt)`
  margin-bottom: 24px;
  border-radius: 16px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
  background: #fff;
  overflow: hidden;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 6px 16px rgba(0, 0, 0, 0.08);
  }
`,dM=L.div`
  font-size: 38px;
  text-align: center;
  margin: 32px 0;
  font-weight: bold;
  color: #333;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
`,fM=L(Xe)`
  text-align: center;
  font-size: 28px;
  width: 140px;
  margin: 0 auto;
  height: 56px;
  border-radius: 12px;
  background: #f5f7fa;
  border: 2px solid #e8e8e8;
  transition: all 0.3s ease;
  
  &:focus {
    border-color: #1677ff;
    box-shadow: 0 0 0 3px rgba(22, 119, 255, 0.1);
  }
`,hM=L(ge)`
  width: 100%;
  justify-content: center;
  margin-top: 28px;
  gap: 16px;
`,i0=L.div`
  font-size: 18px;
  font-weight: bold;
  margin-bottom: 16px;
  color: #333;
  display: flex;
  align-items: center;
  gap: 8px;
  
  svg {
    font-size: 20px;
    color: #1677ff;
  }
`,pM=L.div`
  width: 100%;
  height: 12px;
  background-color: #f0f0f0;
  border-radius: 6px;
  overflow: hidden;
  margin-bottom: 24px;
  box-shadow: inset 0 2px 4px rgba(0, 0, 0, 0.05);
  
  &:after {
    content: '';
    display: block;
    width: ${e=>e.percent}%;
    height: 100%;
    background: linear-gradient(90deg, #1677ff, #4096ff);
    border-radius: 6px;
    transition: width 0.5s ease;
    box-shadow: 0 2px 4px rgba(22, 119, 255, 0.2);
  }
`,Vs=L.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 0;
  border-bottom: 1px solid #f0f0f0;
  font-size: 15px;
  
  &:last-child {
    border-bottom: none;
  }
  
  span:first-child {
    color: #666;
  }
  
  span:last-child {
    font-weight: 500;
    color: #333;
  }
`,mM=(e,t,n)=>{let r,i,o,s,l;const c=()=>Math.floor(Math.random()*(t[1]-t[0]+1))+t[0];switch(e){case"加法":r=c(),i=c(),s=`${r} + ${i} = ?`,l=String(r+i);break;case"减法":r=c(),i=c(),!n&&r<i&&([r,i]=[i,r]),s=`${r} - ${i} = ?`,l=String(r-i);break;case"乘法":r=c(),i=c(),s=`${r} × ${i} = ?`,l=String(r*i);break;case"除法":i=Math.max(1,c());const u=c();r=i*u,s=`${r} ÷ ${i} = ?`,l=String(u);break;case"混合加减":if(r=c(),i=c(),o=c(),!n)r<i+o?(s=`${r} + ${i} - ${o} = ?`,l=String(r+i-o)):(s=`${r} - ${i} + ${o} = ?`,l=String(r-i+o));else{const d=Math.random()>.5?"+":"-";s=`${r} ${d} ${i} ${d==="+"?"-":"+"} ${o} = ?`,l=String(d==="+"?r+i-o:r-i+o)}break;default:r=c(),i=c(),s=`${r} + ${i} = ?`,l=String(r+i)}return{question:s,answer:l}},gM=()=>{var H;const e=ze(),t=nd(),[n,r]=f.useState(["加法"]),[i,o]=f.useState(10),[s,l]=f.useState([1,100]),[c,u]=f.useState(!1),[d,p]=f.useState(!1),[g,w]=f.useState(20),[y,x]=f.useState(!0),[C,m]=f.useState([]),[v,h]=f.useState(0),[b,j]=f.useState(""),[E,$]=f.useState([]),[F,M]=f.useState(0),[R,D]=f.useState(0),[T,V]=f.useState(0),[z,I]=f.useState(null),[P,N]=f.useState(!1);f.useEffect(()=>{const Q=new URLSearchParams(t.search).get("topic");Q&&["加法","减法","乘法","除法","混合加减"].includes(Q)&&r([Q])},[t]);const S=()=>{const W=[];for(let Q=0;Q<i;Q++){const ee=n.length>1?n[Math.floor(Math.random()*n.length)]:n[0];W.push(mM(ee,s,c))}m(W),h(0),j(""),$([]),M(0),D(0),d&&V(g),x(!1)};f.useEffect(()=>{if(d&&T>0&&!y&&!P){const W=setInterval(()=>{V(Q=>Q<=1?(_(),g):Q-1)},1e3);return I(W),()=>clearInterval(W)}else z&&clearInterval(z)},[d,T,y,P]);const _=()=>{const W=C[v],Q=b===W.answer;Q?M(ee=>ee+1):D(ee=>ee+1),$([...E,{...W,userAnswer:b,isCorrect:Q}]),v<C.length-1?(h(v+1),j(""),V(g)):(z&&clearInterval(z),N(!0))},O=()=>{if(!b.trim()){de.show({icon:"fail",content:"请输入答案"});return}const W=C[v],Q=b===W.answer;Q?(de.show({icon:"success",content:"回答正确！"}),M(ee=>ee+1)):(de.show({icon:"fail",content:`答案不正确，正确答案是 ${W.answer}`}),D(ee=>ee+1)),$([...E,{...W,userAnswer:b,isCorrect:Q}]),v<C.length-1?(h(v+1),j(""),d&&V(g)):(z&&clearInterval(z),N(!0))},A=()=>{N(!1),x(!0)},B=()=>{de.show({content:"已退出当前练习"}),z&&clearInterval(z),N(!1),x(!0)},G=C.length>0?Math.round((v+1)/C.length*100):0;return a.jsxs(uM,{children:[a.jsx(Ve,{onBack:()=>{y?e("/practice"):B()},style:{backgroundColor:"#fff",borderBottom:"1px solid #f0f0f0","--height":"52px","--border-bottom":"none"},children:"自定义练习"}),y?a.jsxs(r0,{children:[a.jsxs(wc,{children:[a.jsxs(i0,{children:[a.jsx(ns,{})," 练习设置"]}),a.jsxs(ce,{style:{"--border-top":"none","--border-inner":"1px solid #f5f5f5","--border-bottom":"none","--padding-left":"0","--padding-right":"0","--font-size":"15px","--title-font-size":"15px",background:"transparent"},children:[a.jsx(ce.Item,{title:"运算类型",children:a.jsx(ma,{options:[{label:"加法",value:"加法"},{label:"减法",value:"减法"},{label:"乘法",value:"乘法"},{label:"除法",value:"除法"},{label:"混合加减",value:"混合加减"}],value:n,multiple:!0,onChange:W=>{W.length>0&&r(W)},style:{"--border-radius":"8px","--padding":"8px 12px","--gap":"12px","--checked-color":"#1677ff","--checked-text-color":"#fff","--text-color":"#333","--border":"solid 1px #e8e8e8","--checked-border":"solid 1px #1677ff","--background":"#fff","--checked-background":"#1677ff","--active-background":"#f5f7fa"}})}),a.jsx(ce.Item,{title:"题目数量",children:a.jsx(Ug,{min:1,max:100,value:i,onChange:o,style:{"--button-background-color":"#f5f7fa","--input-background-color":"#fff","--input-width":"60px","--height":"36px","--border-radius":"8px","--border-color":"#e8e8e8"}})}),a.jsx(ce.Item,{title:"数字范围",children:a.jsx(Wl.Group,{value:JSON.stringify(s),onChange:W=>l(JSON.parse(W)),style:{"--gap":"12px","--icon-size":"20px"},children:a.jsxs(ge,{direction:"vertical",style:{width:"100%","--gap":"16px"},children:[a.jsx(Wl,{value:"[1,10]",children:"个位数 (1-10)"}),a.jsx(Wl,{value:"[1,100]",children:"两位数 (1-100)"}),a.jsx(Wl,{value:"[1,1000]",children:"三位数 (1-1000)"})]})})}),a.jsx(ce.Item,{title:"允许负数结果",extra:a.jsx(va,{checked:c,onChange:u,style:{"--checked-color":"#1677ff","--height":"28px","--width":"48px"}})}),a.jsx(ce.Item,{title:"启用计时器",extra:a.jsx(va,{checked:d,onChange:p,style:{"--checked-color":"#1677ff","--height":"28px","--width":"48px"}})}),d&&a.jsx(ce.Item,{title:"每题时间(秒)",children:a.jsx(Ug,{min:5,max:60,value:g,onChange:w,style:{"--button-background-color":"#f5f7fa","--input-background-color":"#fff","--input-width":"60px","--height":"36px","--border-radius":"8px","--border-color":"#e8e8e8"}})})]})]}),a.jsx(J,{color:"primary",block:!0,size:"large",onClick:S,style:{marginTop:24,height:"48px",borderRadius:"12px",fontSize:"16px",fontWeight:500,boxShadow:"0 4px 12px rgba(22, 119, 255, 0.2)"},children:"开始练习"})]}):P?a.jsxs(r0,{children:[a.jsx(ss,{status:"success",title:"练习完成!",icon:a.jsx(fa,{style:{fontSize:64,color:"#52c41a"}}),description:a.jsxs("div",{style:{display:"flex",justifyContent:"center",gap:"16px",marginTop:"16px",fontSize:"16px",color:"#666"},children:[a.jsxs("span",{children:["总题数: ",C.length]}),a.jsxs("span",{style:{color:"#52c41a"},children:["正确: ",F]}),a.jsxs("span",{style:{color:"#ff4d4f"},children:["错误: ",R]}),a.jsxs("span",{style:{color:Math.round(F/E.length*100)>=80?"#52c41a":"#ff4d4f"},children:["正确率: ",Math.round(F/E.length*100),"%"]})]}),style:{padding:"32px 0",background:"#fff",borderRadius:"16px",boxShadow:"0 4px 12px rgba(0, 0, 0, 0.05)",marginBottom:"24px"}}),a.jsxs(ge,{direction:"vertical",style:{width:"100%","--gap":"16px"},children:[a.jsx(J,{color:"primary",block:!0,onClick:A,style:{height:"48px",borderRadius:"24px",fontSize:"16px",fontWeight:500,boxShadow:"0 4px 12px rgba(22, 119, 255, 0.2)"},children:"重新设置"}),a.jsx(J,{block:!0,onClick:()=>e("/practice"),style:{height:"48px",borderRadius:"24px",fontSize:"16px",color:"#666"},children:"返回练习中心"})]}),a.jsxs(wc,{style:{marginTop:"24px"},children:[a.jsxs(i0,{children:[a.jsx(fa,{})," 答题详情"]}),E.map((W,Q)=>a.jsxs(Vs,{children:[a.jsx("span",{style:{flex:1,fontSize:"16px"},children:W.question}),a.jsxs("span",{style:{marginLeft:"16px",color:W.isCorrect?"#52c41a":"#ff4d4f",fontWeight:"bold",display:"flex",alignItems:"center",gap:"4px"},children:[W.userAnswer||"(未作答)",a.jsx("span",{style:{fontSize:"14px",opacity:.8,fontWeight:"normal"},children:W.isCorrect?"✓":`✗ (${W.answer})`})]})]},Q))]})]}):a.jsxs(r0,{children:[a.jsxs("div",{style:{display:"flex",justifyContent:"space-between",alignItems:"center",marginBottom:16,color:"#666"},children:[a.jsxs("span",{children:["进度: ",G,"%"]}),a.jsxs("span",{children:["第 ",v+1," 题 / 共 ",C.length," 题"]})]}),a.jsx(pM,{percent:G}),a.jsxs(wc,{children:[d&&a.jsxs("div",{style:{textAlign:"center",fontSize:"16px",color:T<=5?"#ff4d4f":"#666",marginBottom:16,fontWeight:T<=5?"bold":"normal",animation:T<=5?"pulse 1s infinite":"none"},children:["剩余时间: ",T," 秒"]}),a.jsx(dM,{children:(H=C[v])==null?void 0:H.question}),a.jsxs(ge,{direction:"vertical",style:{width:"100%","--gap":"24px"},children:[a.jsx(fM,{placeholder:"请输入答案",value:b,onChange:j}),a.jsxs(hM,{children:[a.jsx(J,{color:"primary",onClick:O,size:"large",style:{width:"140px",height:"44px",borderRadius:"22px",fontSize:"16px",fontWeight:500,boxShadow:"0 4px 12px rgba(22, 119, 255, 0.2)"},children:"提交答案"}),a.jsx(J,{onClick:B,size:"large",style:{width:"140px",height:"44px",borderRadius:"22px",fontSize:"16px",color:"#666"},children:"退出练习"})]})]})]}),a.jsxs(wc,{children:[a.jsxs(i0,{children:[a.jsx(fa,{})," 练习统计"]}),a.jsxs(Vs,{children:[a.jsx("span",{children:"已完成题目"}),a.jsxs("span",{style:{color:"#1677ff"},children:[E.length," / ",C.length]})]}),a.jsxs(Vs,{children:[a.jsx("span",{children:"正确题数"}),a.jsxs("span",{style:{color:"#52c41a"},children:[F," 题"]})]}),a.jsxs(Vs,{children:[a.jsx("span",{children:"错误题数"}),a.jsxs("span",{style:{color:"#ff4d4f"},children:[R," 题"]})]}),a.jsxs(Vs,{children:[a.jsx("span",{children:"正确率"}),a.jsxs("span",{style:{color:E.length>0?Math.round(F/E.length*100)>=80?"#52c41a":"#ff4d4f":"#666"},children:[E.length>0?Math.round(F/E.length*100):0,"%"]})]})]})]})]})},vM=()=>a.jsx(Vy,{locale:h5,children:a.jsx(zy,{children:a.jsxs(Ty,{children:[a.jsx($e,{path:"/",element:a.jsx(NF,{})}),a.jsx($e,{path:"/login",element:a.jsx(WF,{})}),a.jsx($e,{path:"/register",element:a.jsx(eO,{})}),a.jsx($e,{path:"/home",element:a.jsx(pO,{})}),a.jsx($e,{path:"/practice",element:a.jsx(yO,{})}),a.jsx($e,{path:"/mistakes",element:a.jsx(OO,{})}),a.jsx($e,{path:"/ai-tutor",element:a.jsx(fN,{})}),a.jsx($e,{path:"/profile",element:a.jsx(yN,{})}),a.jsx($e,{path:"/report",element:a.jsx(NN,{})}),a.jsx($e,{path:"/settings",element:a.jsx(AN,{})}),a.jsx($e,{path:"/user-profile-detail",element:a.jsx(VN,{})}),a.jsx($e,{path:"/notifications",element:a.jsx(KN,{})}),a.jsx($e,{path:"/notification-detail/:id",element:a.jsx(rP,{})}),a.jsx($e,{path:"/feedback",element:a.jsx(pP,{})}),a.jsx($e,{path:"/history",element:a.jsx(MP,{})}),a.jsx($e,{path:"/practice-detail/:id",element:a.jsx(ZP,{})}),a.jsx($e,{path:"/user-agreement",element:a.jsx(XP,{})}),a.jsx($e,{path:"/privacy-policy",element:a.jsx(rR,{})}),a.jsx($e,{path:"/basic-practice",element:a.jsx(gR,{})}),a.jsx($e,{path:"/timed-practice",element:a.jsx($R,{})}),a.jsx($e,{path:"/mistake-practice",element:a.jsx(TR,{})}),a.jsx($e,{path:"/level-practice",element:a.jsx(eM,{})}),a.jsx($e,{path:"/daily-practice",element:a.jsx(cM,{})}),a.jsx($e,{path:"/custom-practice",element:a.jsx(gM,{})})]})})});o0.createRoot(document.getElementById("root")).render(a.jsx(k.StrictMode,{children:a.jsx(vM,{})}));
