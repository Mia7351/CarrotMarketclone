var Uc=Object.defineProperty;var Fc=(n,e,t)=>e in n?Uc(n,e,{enumerable:!0,configurable:!0,writable:!0,value:t}):n[e]=t;var Di=(n,e,t)=>(Fc(n,typeof e!="symbol"?e+"":e,t),t);(function(){const e=document.createElement("link").relList;if(e&&e.supports&&e.supports("modulepreload"))return;for(const s of document.querySelectorAll('link[rel="modulepreload"]'))i(s);new MutationObserver(s=>{for(const r of s)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&i(o)}).observe(document,{childList:!0,subtree:!0});function t(s){const r={};return s.integrity&&(r.integrity=s.integrity),s.referrerPolicy&&(r.referrerPolicy=s.referrerPolicy),s.crossOrigin==="use-credentials"?r.credentials="include":s.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(s){if(s.ep)return;s.ep=!0;const r=t(s);fetch(s.href,r)}})();function B(){}function Yo(n,e){for(const t in e)n[t]=e[t];return n}function Qo(n){return n()}function kr(){return Object.create(null)}function Je(n){n.forEach(Qo)}function Es(n){return typeof n=="function"}function ye(n,e){return n!=n?e==e:n!==e||n&&typeof n=="object"||typeof n=="function"}let kn;function $n(n,e){return n===e?!0:(kn||(kn=document.createElement("a")),kn.href=e,n===kn.href)}function $c(n){return Object.keys(n).length===0}function Xo(n,...e){if(n==null){for(const i of e)i(void 0);return B}const t=n.subscribe(...e);return t.unsubscribe?()=>t.unsubscribe():t}function Bc(n,e,t){n.$$.on_destroy.push(Xo(e,t))}function m(n,e){n.appendChild(e)}function V(n,e,t){n.insertBefore(e,t||null)}function $(n){n.parentNode&&n.parentNode.removeChild(n)}function Wc(n,e){for(let t=0;t<n.length;t+=1)n[t]&&n[t].d(e)}function C(n){return document.createElement(n)}function Yt(n){return document.createElementNS("http://www.w3.org/2000/svg",n)}function tt(n){return document.createTextNode(n)}function x(){return tt(" ")}function di(){return tt("")}function we(n,e,t,i){return n.addEventListener(e,t,i),()=>n.removeEventListener(e,t,i)}function Hc(n){return function(e){return e.preventDefault(),n.call(this,e)}}function w(n,e,t){t==null?n.removeAttribute(e):n.getAttribute(e)!==t&&n.setAttribute(e,t)}function Jo(n){return n===""?null:+n}function Vc(n){return Array.from(n.childNodes)}function Vt(n,e){e=""+e,n.data!==e&&(n.data=e)}function Be(n,e){n.value=e??""}function jc(n,e,{bubbles:t=!1,cancelable:i=!1}={}){return new CustomEvent(n,{detail:e,bubbles:t,cancelable:i})}function Bn(n,e){return new n(e)}let sn;function Qt(n){sn=n}function fi(){if(!sn)throw new Error("Function called outside component initialization");return sn}function Zo(n){fi().$$.on_mount.push(n)}function qc(n){fi().$$.after_update.push(n)}function zc(n){fi().$$.on_destroy.push(n)}function Gc(){const n=fi();return(e,t,{cancelable:i=!1}={})=>{const s=n.$$.callbacks[e];if(s){const r=jc(e,t,{cancelable:i});return s.slice().forEach(o=>{o.call(n,r)}),!r.defaultPrevented}return!0}}function Nr(n,e){const t=n.$$.callbacks[e.type];t&&t.slice().forEach(i=>i.call(this,e))}const bt=[],Ar=[];let Tt=[];const Pr=[],ea=Promise.resolve();let Xi=!1;function ta(){Xi||(Xi=!0,ea.then(na))}function Kc(){return ta(),ea}function Ji(n){Tt.push(n)}const xi=new Set;let wt=0;function na(){if(wt!==0)return;const n=sn;do{try{for(;wt<bt.length;){const e=bt[wt];wt++,Qt(e),Yc(e.$$)}}catch(e){throw bt.length=0,wt=0,e}for(Qt(null),bt.length=0,wt=0;Ar.length;)Ar.pop()();for(let e=0;e<Tt.length;e+=1){const t=Tt[e];xi.has(t)||(xi.add(t),t())}Tt.length=0}while(bt.length);for(;Pr.length;)Pr.pop()();Xi=!1,xi.clear(),Qt(n)}function Yc(n){if(n.fragment!==null){n.update(),Je(n.before_update);const e=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,e),n.after_update.forEach(Ji)}}function Qc(n){const e=[],t=[];Tt.forEach(i=>n.indexOf(i)===-1?e.push(i):t.push(i)),t.forEach(i=>i()),Tt=e}const xn=new Set;let nt;function _i(){nt={r:0,c:[],p:nt}}function pi(){nt.r||Je(nt.c),nt=nt.p}function re(n,e){n&&n.i&&(xn.delete(n),n.i(e))}function ce(n,e,t,i){if(n&&n.o){if(xn.has(n))return;xn.add(n),nt.c.push(()=>{xn.delete(n),i&&(t&&n.d(1),i())}),n.o(e)}else i&&i()}function Or(n){return(n==null?void 0:n.length)!==void 0?n:Array.from(n)}function Wn(n,e){const t={},i={},s={$$scope:1};let r=n.length;for(;r--;){const o=n[r],a=e[r];if(a){for(const l in o)l in a||(i[l]=1);for(const l in a)s[l]||(t[l]=a[l],s[l]=1);n[r]=a}else for(const l in o)s[l]=1}for(const o in i)o in t||(t[o]=void 0);return t}function Hn(n){return typeof n=="object"&&n!==null?n:{}}function Te(n){n&&n.c()}function me(n,e,t){const{fragment:i,after_update:s}=n.$$;i&&i.m(e,t),Ji(()=>{const r=n.$$.on_mount.map(Qo).filter(Es);n.$$.on_destroy?n.$$.on_destroy.push(...r):Je(r),n.$$.on_mount=[]}),s.forEach(Ji)}function ve(n,e){const t=n.$$;t.fragment!==null&&(Qc(t.after_update),Je(t.on_destroy),t.fragment&&t.fragment.d(e),t.on_destroy=t.fragment=null,t.ctx=[])}function Xc(n,e){n.$$.dirty[0]===-1&&(bt.push(n),ta(),n.$$.dirty.fill(0)),n.$$.dirty[e/31|0]|=1<<e%31}function Re(n,e,t,i,s,r,o,a=[-1]){const l=sn;Qt(n);const c=n.$$={fragment:null,ctx:[],props:r,update:B,not_equal:s,bound:kr(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(e.context||(l?l.$$.context:[])),callbacks:kr(),dirty:a,skip_bound:!1,root:e.target||l.$$.root};o&&o(c.root);let u=!1;if(c.ctx=t?t(n,e.props||{},(h,d,...f)=>{const _=f.length?f[0]:d;return c.ctx&&s(c.ctx[h],c.ctx[h]=_)&&(!c.skip_bound&&c.bound[h]&&c.bound[h](_),u&&Xc(n,h)),d}):[],c.update(),u=!0,Je(c.before_update),c.fragment=i?i(c.ctx):!1,e.target){if(e.hydrate){const h=Vc(e.target);c.fragment&&c.fragment.l(h),h.forEach($)}else c.fragment&&c.fragment.c();e.intro&&re(n.$$.fragment),me(n,e.target,e.anchor),na()}Qt(l)}class ke{constructor(){Di(this,"$$");Di(this,"$$set")}$destroy(){ve(this,1),this.$destroy=B}$on(e,t){if(!Es(t))return B;const i=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return i.push(t),()=>{const s=i.indexOf(t);s!==-1&&i.splice(s,1)}}$set(e){this.$$set&&!$c(e)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}const Jc="4";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(Jc);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ia={NODE_CLIENT:!1,NODE_ADMIN:!1,SDK_VERSION:"${JSCORE_VERSION}"};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const p=function(n,e){if(!n)throw Ft(e)},Ft=function(n){return new Error("Firebase Database ("+ia.SDK_VERSION+") INTERNAL ASSERT FAILED: "+n)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):(s&64512)===55296&&i+1<n.length&&(n.charCodeAt(i+1)&64512)===56320?(s=65536+((s&1023)<<10)+(n.charCodeAt(++i)&1023),e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},Zc=function(n){const e=[];let t=0,i=0;for(;t<n.length;){const s=n[t++];if(s<128)e[i++]=String.fromCharCode(s);else if(s>191&&s<224){const r=n[t++];e[i++]=String.fromCharCode((s&31)<<6|r&63)}else if(s>239&&s<365){const r=n[t++],o=n[t++],a=n[t++],l=((s&7)<<18|(r&63)<<12|(o&63)<<6|a&63)-65536;e[i++]=String.fromCharCode(55296+(l>>10)),e[i++]=String.fromCharCode(56320+(l&1023))}else{const r=n[t++],o=n[t++];e[i++]=String.fromCharCode((s&15)<<12|(r&63)<<6|o&63)}}return e.join("")},Is={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:typeof atob=="function",encodeByteArray(n,e){if(!Array.isArray(n))throw Error("encodeByteArray takes an array as a parameter");this.init_();const t=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,i=[];for(let s=0;s<n.length;s+=3){const r=n[s],o=s+1<n.length,a=o?n[s+1]:0,l=s+2<n.length,c=l?n[s+2]:0,u=r>>2,h=(r&3)<<4|a>>4;let d=(a&15)<<2|c>>6,f=c&63;l||(f=64,o||(d=64)),i.push(t[u],t[h],t[d],t[f])}return i.join("")},encodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(n):this.encodeByteArray(sa(n),e)},decodeString(n,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(n):Zc(this.decodeStringToByteArray(n,e))},decodeStringToByteArray(n,e){this.init_();const t=e?this.charToByteMapWebSafe_:this.charToByteMap_,i=[];for(let s=0;s<n.length;){const r=t[n.charAt(s++)],a=s<n.length?t[n.charAt(s)]:0;++s;const c=s<n.length?t[n.charAt(s)]:64;++s;const h=s<n.length?t[n.charAt(s)]:64;if(++s,r==null||a==null||c==null||h==null)throw new eu;const d=r<<2|a>>4;if(i.push(d),c!==64){const f=a<<4&240|c>>2;if(i.push(f),h!==64){const _=c<<6&192|h;i.push(_)}}}return i},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let n=0;n<this.ENCODED_VALS.length;n++)this.byteToCharMap_[n]=this.ENCODED_VALS.charAt(n),this.charToByteMap_[this.byteToCharMap_[n]]=n,this.byteToCharMapWebSafe_[n]=this.ENCODED_VALS_WEBSAFE.charAt(n),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[n]]=n,n>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(n)]=n,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(n)]=n)}}};class eu extends Error{constructor(){super(...arguments),this.name="DecodeBase64StringError"}}const ra=function(n){const e=sa(n);return Is.encodeByteArray(e,!0)},Vn=function(n){return ra(n).replace(/\./g,"")},jn=function(n){try{return Is.decodeString(n,!0)}catch(e){console.error("base64Decode failed: ",e)}return null};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function tu(n){return oa(void 0,n)}function oa(n,e){if(!(e instanceof Object))return e;switch(e.constructor){case Date:const t=e;return new Date(t.getTime());case Object:n===void 0&&(n={});break;case Array:n=[];break;default:return e}for(const t in e)!e.hasOwnProperty(t)||!nu(t)||(n[t]=oa(n[t],e[t]));return n}function nu(n){return n!=="__proto__"}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function iu(){if(typeof self<"u")return self;if(typeof window<"u")return window;if(typeof global<"u")return global;throw new Error("Unable to locate global object.")}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const su=()=>iu().__FIREBASE_DEFAULTS__,ru=()=>{if(typeof process>"u"||typeof process.env>"u")return;const n={}.__FIREBASE_DEFAULTS__;if(n)return JSON.parse(n)},ou=()=>{if(typeof document>"u")return;let n;try{n=document.cookie.match(/__FIREBASE_DEFAULTS__=([^;]+)/)}catch{return}const e=n&&jn(n[1]);return e&&JSON.parse(e)},gi=()=>{try{return su()||ru()||ou()}catch(n){console.info(`Unable to get __FIREBASE_DEFAULTS__ due to: ${n}`);return}},aa=n=>{var e,t;return(t=(e=gi())===null||e===void 0?void 0:e.emulatorHosts)===null||t===void 0?void 0:t[n]},la=n=>{const e=aa(n);if(!e)return;const t=e.lastIndexOf(":");if(t<=0||t+1===e.length)throw new Error(`Invalid host ${e} with no separate hostname and port!`);const i=parseInt(e.substring(t+1),10);return e[0]==="["?[e.substring(1,t-1),i]:[e.substring(0,t),i]},ca=()=>{var n;return(n=gi())===null||n===void 0?void 0:n.config},ua=n=>{var e;return(e=gi())===null||e===void 0?void 0:e[`_${n}`]};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mi{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}wrapCallback(e){return(t,i)=>{t?this.reject(t):this.resolve(i),typeof e=="function"&&(this.promise.catch(()=>{}),e.length===1?e(t):e(t,i))}}}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ha(n,e){if(n.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');const t={alg:"none",type:"JWT"},i=e||"demo-project",s=n.iat||0,r=n.sub||n.user_id;if(!r)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");const o=Object.assign({iss:`https://securetoken.google.com/${i}`,aud:i,iat:s,exp:s+3600,auth_time:s,sub:r,user_id:r,firebase:{sign_in_provider:"custom",identities:{}}},n),a="";return[Vn(JSON.stringify(t)),Vn(JSON.stringify(o)),a].join(".")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ne(){return typeof navigator<"u"&&typeof navigator.userAgent=="string"?navigator.userAgent:""}function bs(){return typeof window<"u"&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(ne())}function au(){var n;const e=(n=gi())===null||n===void 0?void 0:n.forceEnvironment;if(e==="node")return!0;if(e==="browser")return!1;try{return Object.prototype.toString.call(global.process)==="[object process]"}catch{return!1}}function lu(){const n=typeof chrome=="object"?chrome.runtime:typeof browser=="object"?browser.runtime:void 0;return typeof n=="object"&&n.id!==void 0}function da(){return typeof navigator=="object"&&navigator.product==="ReactNative"}function cu(){const n=ne();return n.indexOf("MSIE ")>=0||n.indexOf("Trident/")>=0}function fa(){return ia.NODE_ADMIN===!0}function uu(){try{return typeof indexedDB=="object"}catch{return!1}}function hu(){return new Promise((n,e)=>{try{let t=!0;const i="validate-browser-context-for-indexeddb-analytics-module",s=self.indexedDB.open(i);s.onsuccess=()=>{s.result.close(),t||self.indexedDB.deleteDatabase(i),n(!0)},s.onupgradeneeded=()=>{t=!1},s.onerror=()=>{var r;e(((r=s.error)===null||r===void 0?void 0:r.message)||"")}}catch(t){e(t)}})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const du="FirebaseError";class Me extends Error{constructor(e,t,i){super(t),this.code=e,this.customData=i,this.name=du,Object.setPrototypeOf(this,Me.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,gn.prototype.create)}}class gn{constructor(e,t,i){this.service=e,this.serviceName=t,this.errors=i}create(e,...t){const i=t[0]||{},s=`${this.service}/${e}`,r=this.errors[e],o=r?fu(r,i):"Error",a=`${this.serviceName}: ${o} (${s}).`;return new Me(s,a,i)}}function fu(n,e){return n.replace(_u,(t,i)=>{const s=e[i];return s!=null?String(s):`<${i}?>`})}const _u=/\{\$([^}]+)}/g;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rn(n){return JSON.parse(n)}function Z(n){return JSON.stringify(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _a=function(n){let e={},t={},i={},s="";try{const r=n.split(".");e=rn(jn(r[0])||""),t=rn(jn(r[1])||""),s=r[2],i=t.d||{},delete t.d}catch{}return{header:e,claims:t,data:i,signature:s}},pu=function(n){const e=_a(n),t=e.claims;return!!t&&typeof t=="object"&&t.hasOwnProperty("iat")},gu=function(n){const e=_a(n).claims;return typeof e=="object"&&e.admin===!0};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ue(n,e){return Object.prototype.hasOwnProperty.call(n,e)}function Ot(n,e){if(Object.prototype.hasOwnProperty.call(n,e))return n[e]}function Zi(n){for(const e in n)if(Object.prototype.hasOwnProperty.call(n,e))return!1;return!0}function qn(n,e,t){const i={};for(const s in n)Object.prototype.hasOwnProperty.call(n,s)&&(i[s]=e.call(t,n[s],s,n));return i}function zn(n,e){if(n===e)return!0;const t=Object.keys(n),i=Object.keys(e);for(const s of t){if(!i.includes(s))return!1;const r=n[s],o=e[s];if(Dr(r)&&Dr(o)){if(!zn(r,o))return!1}else if(r!==o)return!1}for(const s of i)if(!t.includes(s))return!1;return!0}function Dr(n){return n!==null&&typeof n=="object"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $t(n){const e=[];for(const[t,i]of Object.entries(n))Array.isArray(i)?i.forEach(s=>{e.push(encodeURIComponent(t)+"="+encodeURIComponent(s))}):e.push(encodeURIComponent(t)+"="+encodeURIComponent(i));return e.length?"&"+e.join("&"):""}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mu{constructor(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=512/8,this.pad_[0]=128;for(let e=1;e<this.blockSize;++e)this.pad_[e]=0;this.reset()}reset(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0}compress_(e,t){t||(t=0);const i=this.W_;if(typeof e=="string")for(let h=0;h<16;h++)i[h]=e.charCodeAt(t)<<24|e.charCodeAt(t+1)<<16|e.charCodeAt(t+2)<<8|e.charCodeAt(t+3),t+=4;else for(let h=0;h<16;h++)i[h]=e[t]<<24|e[t+1]<<16|e[t+2]<<8|e[t+3],t+=4;for(let h=16;h<80;h++){const d=i[h-3]^i[h-8]^i[h-14]^i[h-16];i[h]=(d<<1|d>>>31)&4294967295}let s=this.chain_[0],r=this.chain_[1],o=this.chain_[2],a=this.chain_[3],l=this.chain_[4],c,u;for(let h=0;h<80;h++){h<40?h<20?(c=a^r&(o^a),u=1518500249):(c=r^o^a,u=1859775393):h<60?(c=r&o|a&(r|o),u=2400959708):(c=r^o^a,u=3395469782);const d=(s<<5|s>>>27)+c+l+u+i[h]&4294967295;l=a,a=o,o=(r<<30|r>>>2)&4294967295,r=s,s=d}this.chain_[0]=this.chain_[0]+s&4294967295,this.chain_[1]=this.chain_[1]+r&4294967295,this.chain_[2]=this.chain_[2]+o&4294967295,this.chain_[3]=this.chain_[3]+a&4294967295,this.chain_[4]=this.chain_[4]+l&4294967295}update(e,t){if(e==null)return;t===void 0&&(t=e.length);const i=t-this.blockSize;let s=0;const r=this.buf_;let o=this.inbuf_;for(;s<t;){if(o===0)for(;s<=i;)this.compress_(e,s),s+=this.blockSize;if(typeof e=="string"){for(;s<t;)if(r[o]=e.charCodeAt(s),++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}else for(;s<t;)if(r[o]=e[s],++o,++s,o===this.blockSize){this.compress_(r),o=0;break}}this.inbuf_=o,this.total_+=t}digest(){const e=[];let t=this.total_*8;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(let s=this.blockSize-1;s>=56;s--)this.buf_[s]=t&255,t/=256;this.compress_(this.buf_);let i=0;for(let s=0;s<5;s++)for(let r=24;r>=0;r-=8)e[i]=this.chain_[s]>>r&255,++i;return e}}function vu(n,e){const t=new yu(n,e);return t.subscribe.bind(t)}class yu{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then(()=>{e(this)}).catch(i=>{this.error(i)})}next(e){this.forEachObserver(t=>{t.next(e)})}error(e){this.forEachObserver(t=>{t.error(e)}),this.close(e)}complete(){this.forEachObserver(e=>{e.complete()}),this.close()}subscribe(e,t,i){let s;if(e===void 0&&t===void 0&&i===void 0)throw new Error("Missing Observer.");wu(e,["next","error","complete"])?s=e:s={next:e,error:t,complete:i},s.next===void 0&&(s.next=Li),s.error===void 0&&(s.error=Li),s.complete===void 0&&(s.complete=Li);const r=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then(()=>{try{this.finalError?s.error(this.finalError):s.complete()}catch{}}),this.observers.push(s),r}unsubscribeOne(e){this.observers===void 0||this.observers[e]===void 0||(delete this.observers[e],this.observerCount-=1,this.observerCount===0&&this.onNoObservers!==void 0&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then(()=>{if(this.observers!==void 0&&this.observers[e]!==void 0)try{t(this.observers[e])}catch(i){typeof console<"u"&&console.error&&console.error(i)}})}close(e){this.finalized||(this.finalized=!0,e!==void 0&&(this.finalError=e),this.task.then(()=>{this.observers=void 0,this.onNoObservers=void 0}))}}function wu(n,e){if(typeof n!="object"||n===null)return!1;for(const t of e)if(t in n&&typeof n[t]=="function")return!0;return!1}function Li(){}function Cs(n,e){return`${n} failed: ${e} argument `}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eu=function(n){const e=[];let t=0;for(let i=0;i<n.length;i++){let s=n.charCodeAt(i);if(s>=55296&&s<=56319){const r=s-55296;i++,p(i<n.length,"Surrogate pair missing trail surrogate.");const o=n.charCodeAt(i)-56320;s=65536+(r<<10)+o}s<128?e[t++]=s:s<2048?(e[t++]=s>>6|192,e[t++]=s&63|128):s<65536?(e[t++]=s>>12|224,e[t++]=s>>6&63|128,e[t++]=s&63|128):(e[t++]=s>>18|240,e[t++]=s>>12&63|128,e[t++]=s>>6&63|128,e[t++]=s&63|128)}return e},vi=function(n){let e=0;for(let t=0;t<n.length;t++){const i=n.charCodeAt(t);i<128?e++:i<2048?e+=2:i>=55296&&i<=56319?(e+=4,t++):e+=3}return e};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(n){return n&&n._delegate?n._delegate:n}class Ye{constructor(e,t,i){this.name=e,this.instanceFactory=t,this.type=i,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ze="[DEFAULT]";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Iu{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const i=new mi;if(this.instancesDeferred.set(t,i),this.isInitialized(t)||this.shouldAutoInitialize())try{const s=this.getOrInitializeService({instanceIdentifier:t});s&&i.resolve(s)}catch{}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const i=this.normalizeInstanceIdentifier(e==null?void 0:e.identifier),s=(t=e==null?void 0:e.optional)!==null&&t!==void 0?t:!1;if(this.isInitialized(i)||this.shouldAutoInitialize())try{return this.getOrInitializeService({instanceIdentifier:i})}catch(r){if(s)return null;throw r}else{if(s)return null;throw Error(`Service ${this.name} is not available`)}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,!!this.shouldAutoInitialize()){if(Cu(e))try{this.getOrInitializeService({instanceIdentifier:Ze})}catch{}for(const[t,i]of this.instancesDeferred.entries()){const s=this.normalizeInstanceIdentifier(t);try{const r=this.getOrInitializeService({instanceIdentifier:s});i.resolve(r)}catch{}}}}clearInstance(e=Ze){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter(t=>"INTERNAL"in t).map(t=>t.INTERNAL.delete()),...e.filter(t=>"_delete"in t).map(t=>t._delete())])}isComponentSet(){return this.component!=null}isInitialized(e=Ze){return this.instances.has(e)}getOptions(e=Ze){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,i=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(i))throw Error(`${this.name}(${i}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const s=this.getOrInitializeService({instanceIdentifier:i,options:t});for(const[r,o]of this.instancesDeferred.entries()){const a=this.normalizeInstanceIdentifier(r);i===a&&o.resolve(s)}return s}onInit(e,t){var i;const s=this.normalizeInstanceIdentifier(t),r=(i=this.onInitCallbacks.get(s))!==null&&i!==void 0?i:new Set;r.add(e),this.onInitCallbacks.set(s,r);const o=this.instances.get(s);return o&&e(o,s),()=>{r.delete(e)}}invokeOnInitCallbacks(e,t){const i=this.onInitCallbacks.get(t);if(i)for(const s of i)try{s(e,t)}catch{}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let i=this.instances.get(e);if(!i&&this.component&&(i=this.component.instanceFactory(this.container,{instanceIdentifier:bu(e),options:t}),this.instances.set(e,i),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(i,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,i)}catch{}return i||null}normalizeInstanceIdentifier(e=Ze){return this.component?this.component.multipleInstances?e:Ze:e}shouldAutoInitialize(){return!!this.component&&this.component.instantiationMode!=="EXPLICIT"}}function bu(n){return n===Ze?void 0:n}function Cu(n){return n.instantiationMode==="EAGER"}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Tu{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){this.getProvider(e.name).isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new Iu(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var F;(function(n){n[n.DEBUG=0]="DEBUG",n[n.VERBOSE=1]="VERBOSE",n[n.INFO=2]="INFO",n[n.WARN=3]="WARN",n[n.ERROR=4]="ERROR",n[n.SILENT=5]="SILENT"})(F||(F={}));const Su={debug:F.DEBUG,verbose:F.VERBOSE,info:F.INFO,warn:F.WARN,error:F.ERROR,silent:F.SILENT},Ru=F.INFO,ku={[F.DEBUG]:"log",[F.VERBOSE]:"log",[F.INFO]:"info",[F.WARN]:"warn",[F.ERROR]:"error"},Nu=(n,e,...t)=>{if(e<n.logLevel)return;const i=new Date().toISOString(),s=ku[e];if(s)console[s](`[${i}]  ${n.name}:`,...t);else throw new Error(`Attempted to log a message with an invalid logType (value: ${e})`)};class Ts{constructor(e){this.name=e,this._logLevel=Ru,this._logHandler=Nu,this._userLogHandler=null}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in F))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel=typeof e=="string"?Su[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if(typeof e!="function")throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,F.DEBUG,...e),this._logHandler(this,F.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,F.VERBOSE,...e),this._logHandler(this,F.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,F.INFO,...e),this._logHandler(this,F.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,F.WARN,...e),this._logHandler(this,F.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,F.ERROR,...e),this._logHandler(this,F.ERROR,...e)}}const Au=(n,e)=>e.some(t=>n instanceof t);let xr,Lr;function Pu(){return xr||(xr=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function Ou(){return Lr||(Lr=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const pa=new WeakMap,es=new WeakMap,ga=new WeakMap,Mi=new WeakMap,Ss=new WeakMap;function Du(n){const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("success",r),n.removeEventListener("error",o)},r=()=>{t(ze(n.result)),s()},o=()=>{i(n.error),s()};n.addEventListener("success",r),n.addEventListener("error",o)});return e.then(t=>{t instanceof IDBCursor&&pa.set(t,n)}).catch(()=>{}),Ss.set(e,n),e}function xu(n){if(es.has(n))return;const e=new Promise((t,i)=>{const s=()=>{n.removeEventListener("complete",r),n.removeEventListener("error",o),n.removeEventListener("abort",o)},r=()=>{t(),s()},o=()=>{i(n.error||new DOMException("AbortError","AbortError")),s()};n.addEventListener("complete",r),n.addEventListener("error",o),n.addEventListener("abort",o)});es.set(n,e)}let ts={get(n,e,t){if(n instanceof IDBTransaction){if(e==="done")return es.get(n);if(e==="objectStoreNames")return n.objectStoreNames||ga.get(n);if(e==="store")return t.objectStoreNames[1]?void 0:t.objectStore(t.objectStoreNames[0])}return ze(n[e])},set(n,e,t){return n[e]=t,!0},has(n,e){return n instanceof IDBTransaction&&(e==="done"||e==="store")?!0:e in n}};function Lu(n){ts=n(ts)}function Mu(n){return n===IDBDatabase.prototype.transaction&&!("objectStoreNames"in IDBTransaction.prototype)?function(e,...t){const i=n.call(Ui(this),e,...t);return ga.set(i,e.sort?e.sort():[e]),ze(i)}:Ou().includes(n)?function(...e){return n.apply(Ui(this),e),ze(pa.get(this))}:function(...e){return ze(n.apply(Ui(this),e))}}function Uu(n){return typeof n=="function"?Mu(n):(n instanceof IDBTransaction&&xu(n),Au(n,Pu())?new Proxy(n,ts):n)}function ze(n){if(n instanceof IDBRequest)return Du(n);if(Mi.has(n))return Mi.get(n);const e=Uu(n);return e!==n&&(Mi.set(n,e),Ss.set(e,n)),e}const Ui=n=>Ss.get(n);function Fu(n,e,{blocked:t,upgrade:i,blocking:s,terminated:r}={}){const o=indexedDB.open(n,e),a=ze(o);return i&&o.addEventListener("upgradeneeded",l=>{i(ze(o.result),l.oldVersion,l.newVersion,ze(o.transaction),l)}),t&&o.addEventListener("blocked",l=>t(l.oldVersion,l.newVersion,l)),a.then(l=>{r&&l.addEventListener("close",()=>r()),s&&l.addEventListener("versionchange",c=>s(c.oldVersion,c.newVersion,c))}).catch(()=>{}),a}const $u=["get","getKey","getAll","getAllKeys","count"],Bu=["put","add","delete","clear"],Fi=new Map;function Mr(n,e){if(!(n instanceof IDBDatabase&&!(e in n)&&typeof e=="string"))return;if(Fi.get(e))return Fi.get(e);const t=e.replace(/FromIndex$/,""),i=e!==t,s=Bu.includes(t);if(!(t in(i?IDBIndex:IDBObjectStore).prototype)||!(s||$u.includes(t)))return;const r=async function(o,...a){const l=this.transaction(o,s?"readwrite":"readonly");let c=l.store;return i&&(c=c.index(a.shift())),(await Promise.all([c[t](...a),s&&l.done]))[0]};return Fi.set(e,r),r}Lu(n=>({...n,get:(e,t,i)=>Mr(e,t)||n.get(e,t,i),has:(e,t)=>!!Mr(e,t)||n.has(e,t)}));/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wu{constructor(e){this.container=e}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(Hu(t)){const i=t.getImmediate();return`${i.library}/${i.version}`}else return null}).filter(t=>t).join(" ")}}function Hu(n){const e=n.getComponent();return(e==null?void 0:e.type)==="VERSION"}const ns="@firebase/app",Ur="0.9.18";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ct=new Ts("@firebase/app"),Vu="@firebase/app-compat",ju="@firebase/analytics-compat",qu="@firebase/analytics",zu="@firebase/app-check-compat",Gu="@firebase/app-check",Ku="@firebase/auth",Yu="@firebase/auth-compat",Qu="@firebase/database",Xu="@firebase/database-compat",Ju="@firebase/functions",Zu="@firebase/functions-compat",eh="@firebase/installations",th="@firebase/installations-compat",nh="@firebase/messaging",ih="@firebase/messaging-compat",sh="@firebase/performance",rh="@firebase/performance-compat",oh="@firebase/remote-config",ah="@firebase/remote-config-compat",lh="@firebase/storage",ch="@firebase/storage-compat",uh="@firebase/firestore",hh="@firebase/firestore-compat",dh="firebase",fh="10.3.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const is="[DEFAULT]",_h={[ns]:"fire-core",[Vu]:"fire-core-compat",[qu]:"fire-analytics",[ju]:"fire-analytics-compat",[Gu]:"fire-app-check",[zu]:"fire-app-check-compat",[Ku]:"fire-auth",[Yu]:"fire-auth-compat",[Qu]:"fire-rtdb",[Xu]:"fire-rtdb-compat",[Ju]:"fire-fn",[Zu]:"fire-fn-compat",[eh]:"fire-iid",[th]:"fire-iid-compat",[nh]:"fire-fcm",[ih]:"fire-fcm-compat",[sh]:"fire-perf",[rh]:"fire-perf-compat",[oh]:"fire-rc",[ah]:"fire-rc-compat",[lh]:"fire-gcs",[ch]:"fire-gcs-compat",[uh]:"fire-fst",[hh]:"fire-fst-compat","fire-js":"fire-js",[dh]:"fire-js-all"};/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gn=new Map,ss=new Map;function ph(n,e){try{n.container.addComponent(e)}catch(t){ct.debug(`Component ${e.name} failed to register with FirebaseApp ${n.name}`,t)}}function ut(n){const e=n.name;if(ss.has(e))return ct.debug(`There were multiple attempts to register component ${e}.`),!1;ss.set(e,n);for(const t of Gn.values())ph(t,n);return!0}function yi(n,e){const t=n.container.getProvider("heartbeat").getImmediate({optional:!0});return t&&t.triggerHeartbeat(),n.container.getProvider(e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const gh={"no-app":"No Firebase App '{$appName}' has been created - call initializeApp() first","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","no-options":"Need to provide options, when not being deployed to hosting via source.","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function.","idb-open":"Error thrown when opening IndexedDB. Original error: {$originalErrorMessage}.","idb-get":"Error thrown when reading from IndexedDB. Original error: {$originalErrorMessage}.","idb-set":"Error thrown when writing to IndexedDB. Original error: {$originalErrorMessage}.","idb-delete":"Error thrown when deleting from IndexedDB. Original error: {$originalErrorMessage}."},Ge=new gn("app","Firebase",gh);/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mh{constructor(e,t,i){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=i,this.container.addComponent(new Ye("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw Ge.create("app-deleted",{appName:this._name})}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const mt=fh;function ma(n,e={}){let t=n;typeof e!="object"&&(e={name:e});const i=Object.assign({name:is,automaticDataCollectionEnabled:!1},e),s=i.name;if(typeof s!="string"||!s)throw Ge.create("bad-app-name",{appName:String(s)});if(t||(t=ca()),!t)throw Ge.create("no-options");const r=Gn.get(s);if(r){if(zn(t,r.options)&&zn(i,r.config))return r;throw Ge.create("duplicate-app",{appName:s})}const o=new Tu(s);for(const l of ss.values())o.addComponent(l);const a=new mh(t,i,o);return Gn.set(s,a),a}function Rs(n=is){const e=Gn.get(n);if(!e&&n===is&&ca())return ma();if(!e)throw Ge.create("no-app",{appName:n});return e}function Ie(n,e,t){var i;let s=(i=_h[n])!==null&&i!==void 0?i:n;t&&(s+=`-${t}`);const r=s.match(/\s|\//),o=e.match(/\s|\//);if(r||o){const a=[`Unable to register library "${s}" with version "${e}":`];r&&a.push(`library name "${s}" contains illegal characters (whitespace or "/")`),r&&o&&a.push("and"),o&&a.push(`version name "${e}" contains illegal characters (whitespace or "/")`),ct.warn(a.join(" "));return}ut(new Ye(`${s}-version`,()=>({library:s,version:e}),"VERSION"))}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const vh="firebase-heartbeat-database",yh=1,on="firebase-heartbeat-store";let $i=null;function va(){return $i||($i=Fu(vh,yh,{upgrade:(n,e)=>{switch(e){case 0:n.createObjectStore(on)}}}).catch(n=>{throw Ge.create("idb-open",{originalErrorMessage:n.message})})),$i}async function wh(n){try{return await(await va()).transaction(on).objectStore(on).get(ya(n))}catch(e){if(e instanceof Me)ct.warn(e.message);else{const t=Ge.create("idb-get",{originalErrorMessage:e==null?void 0:e.message});ct.warn(t.message)}}}async function Fr(n,e){try{const i=(await va()).transaction(on,"readwrite");await i.objectStore(on).put(e,ya(n)),await i.done}catch(t){if(t instanceof Me)ct.warn(t.message);else{const i=Ge.create("idb-set",{originalErrorMessage:t==null?void 0:t.message});ct.warn(i.message)}}}function ya(n){return`${n.name}!${n.options.appId}`}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Eh=1024,Ih=30*24*60*60*1e3;class bh{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new Th(t),this._heartbeatsCachePromise=this._storage.read().then(i=>(this._heartbeatsCache=i,i))}async triggerHeartbeat(){const t=this.container.getProvider("platform-logger").getImmediate().getPlatformInfoString(),i=$r();if(this._heartbeatsCache===null&&(this._heartbeatsCache=await this._heartbeatsCachePromise),!(this._heartbeatsCache.lastSentHeartbeatDate===i||this._heartbeatsCache.heartbeats.some(s=>s.date===i)))return this._heartbeatsCache.heartbeats.push({date:i,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter(s=>{const r=new Date(s.date).valueOf();return Date.now()-r<=Ih}),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(this._heartbeatsCache===null&&await this._heartbeatsCachePromise,this._heartbeatsCache===null||this._heartbeatsCache.heartbeats.length===0)return"";const e=$r(),{heartbeatsToSend:t,unsentEntries:i}=Ch(this._heartbeatsCache.heartbeats),s=Vn(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,i.length>0?(this._heartbeatsCache.heartbeats=i,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),s}}function $r(){return new Date().toISOString().substring(0,10)}function Ch(n,e=Eh){const t=[];let i=n.slice();for(const s of n){const r=t.find(o=>o.agent===s.agent);if(r){if(r.dates.push(s.date),Br(t)>e){r.dates.pop();break}}else if(t.push({agent:s.agent,dates:[s.date]}),Br(t)>e){t.pop();break}i=i.slice(1)}return{heartbeatsToSend:t,unsentEntries:i}}class Th{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return uu()?hu().then(()=>!0).catch(()=>!1):!1}async read(){return await this._canUseIndexedDBPromise?await wh(this.app)||{heartbeats:[]}:{heartbeats:[]}}async overwrite(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:e.heartbeats})}else return}async add(e){var t;if(await this._canUseIndexedDBPromise){const s=await this.read();return Fr(this.app,{lastSentHeartbeatDate:(t=e.lastSentHeartbeatDate)!==null&&t!==void 0?t:s.lastSentHeartbeatDate,heartbeats:[...s.heartbeats,...e.heartbeats]})}else return}}function Br(n){return Vn(JSON.stringify({version:2,heartbeats:n})).length}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sh(n){ut(new Ye("platform-logger",e=>new Wu(e),"PRIVATE")),ut(new Ye("heartbeat",e=>new bh(e),"PRIVATE")),Ie(ns,Ur,n),Ie(ns,Ur,"esm2017"),Ie("fire-js","")}Sh("");function ks(n,e){var t={};for(var i in n)Object.prototype.hasOwnProperty.call(n,i)&&e.indexOf(i)<0&&(t[i]=n[i]);if(n!=null&&typeof Object.getOwnPropertySymbols=="function")for(var s=0,i=Object.getOwnPropertySymbols(n);s<i.length;s++)e.indexOf(i[s])<0&&Object.prototype.propertyIsEnumerable.call(n,i[s])&&(t[i[s]]=n[i[s]]);return t}function wa(){return{"dependent-sdk-initialized-before-auth":"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const Rh=wa,Ea=new gn("auth","Firebase",wa());/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Kn=new Ts("@firebase/auth");function kh(n,...e){Kn.logLevel<=F.WARN&&Kn.warn(`Auth (${mt}): ${n}`,...e)}function Ln(n,...e){Kn.logLevel<=F.ERROR&&Kn.error(`Auth (${mt}): ${n}`,...e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(n,...e){throw Ns(n,...e)}function be(n,...e){return Ns(n,...e)}function Ia(n,e,t){const i=Object.assign(Object.assign({},Rh()),{[e]:t});return new gn("auth","Firebase",i).create(e,{appName:n.name})}function Nh(n,e,t){const i=t;if(!(e instanceof i))throw i.name!==e.constructor.name&&Se(n,"argument-error"),Ia(n,"argument-error",`Type of ${e.constructor.name} does not match expected instance.Did you pass a reference from a different Auth SDK?`)}function Ns(n,...e){if(typeof n!="string"){const t=e[0],i=[...e.slice(1)];return i[0]&&(i[0].appName=n.name),n._errorFactory.create(t,...i)}return Ea.create(n,...e)}function R(n,e,...t){if(!n)throw Ns(e,...t)}function Ne(n){const e="INTERNAL ASSERTION FAILED: "+n;throw Ln(e),new Error(e)}function De(n,e){n||Ne(e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function rs(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.href)||""}function Ah(){return Wr()==="http:"||Wr()==="https:"}function Wr(){var n;return typeof self<"u"&&((n=self.location)===null||n===void 0?void 0:n.protocol)||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ph(){return typeof navigator<"u"&&navigator&&"onLine"in navigator&&typeof navigator.onLine=="boolean"&&(Ah()||lu()||"connection"in navigator)?navigator.onLine:!0}function Oh(){if(typeof navigator>"u")return null;const n=navigator;return n.languages&&n.languages[0]||n.language||null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mn{constructor(e,t){this.shortDelay=e,this.longDelay=t,De(t>e,"Short delay should be less than long delay!"),this.isMobile=bs()||da()}get(){return Ph()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function As(n,e){De(n.emulator,"Emulator should always be set here");const{url:t}=n.emulator;return e?`${t}${e.startsWith("/")?e.slice(1):e}`:t}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ba{static initialize(e,t,i){this.fetchImpl=e,t&&(this.headersImpl=t),i&&(this.responseImpl=i)}static fetch(){if(this.fetchImpl)return this.fetchImpl;if(typeof self<"u"&&"fetch"in self)return self.fetch;Ne("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){if(this.headersImpl)return this.headersImpl;if(typeof self<"u"&&"Headers"in self)return self.Headers;Ne("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){if(this.responseImpl)return this.responseImpl;if(typeof self<"u"&&"Response"in self)return self.Response;Ne("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Dh={CREDENTIAL_MISMATCH:"custom-token-mismatch",MISSING_CUSTOM_TOKEN:"internal-error",INVALID_IDENTIFIER:"invalid-email",MISSING_CONTINUE_URI:"internal-error",INVALID_PASSWORD:"wrong-password",MISSING_PASSWORD:"missing-password",EMAIL_EXISTS:"email-already-in-use",PASSWORD_LOGIN_DISABLED:"operation-not-allowed",INVALID_IDP_RESPONSE:"invalid-credential",INVALID_PENDING_TOKEN:"invalid-credential",FEDERATED_USER_ID_ALREADY_LINKED:"credential-already-in-use",MISSING_REQ_TYPE:"internal-error",EMAIL_NOT_FOUND:"user-not-found",RESET_PASSWORD_EXCEED_LIMIT:"too-many-requests",EXPIRED_OOB_CODE:"expired-action-code",INVALID_OOB_CODE:"invalid-action-code",MISSING_OOB_CODE:"internal-error",CREDENTIAL_TOO_OLD_LOGIN_AGAIN:"requires-recent-login",INVALID_ID_TOKEN:"invalid-user-token",TOKEN_EXPIRED:"user-token-expired",USER_NOT_FOUND:"user-token-expired",TOO_MANY_ATTEMPTS_TRY_LATER:"too-many-requests",PASSWORD_DOES_NOT_MEET_REQUIREMENTS:"password-does-not-meet-requirements",INVALID_CODE:"invalid-verification-code",INVALID_SESSION_INFO:"invalid-verification-id",INVALID_TEMPORARY_PROOF:"invalid-credential",MISSING_SESSION_INFO:"missing-verification-id",SESSION_EXPIRED:"code-expired",MISSING_ANDROID_PACKAGE_NAME:"missing-android-pkg-name",UNAUTHORIZED_DOMAIN:"unauthorized-continue-uri",INVALID_OAUTH_CLIENT_ID:"invalid-oauth-client-id",ADMIN_ONLY_OPERATION:"admin-restricted-operation",INVALID_MFA_PENDING_CREDENTIAL:"invalid-multi-factor-session",MFA_ENROLLMENT_NOT_FOUND:"multi-factor-info-not-found",MISSING_MFA_ENROLLMENT_ID:"missing-multi-factor-info",MISSING_MFA_PENDING_CREDENTIAL:"missing-multi-factor-session",SECOND_FACTOR_EXISTS:"second-factor-already-in-use",SECOND_FACTOR_LIMIT_EXCEEDED:"maximum-second-factor-count-exceeded",BLOCKING_FUNCTION_ERROR_RESPONSE:"internal-error",RECAPTCHA_NOT_ENABLED:"recaptcha-not-enabled",MISSING_RECAPTCHA_TOKEN:"missing-recaptcha-token",INVALID_RECAPTCHA_TOKEN:"invalid-recaptcha-token",INVALID_RECAPTCHA_ACTION:"invalid-recaptcha-action",MISSING_CLIENT_TYPE:"missing-client-type",MISSING_RECAPTCHA_VERSION:"missing-recaptcha-version",INVALID_RECAPTCHA_VERSION:"invalid-recaptcha-version",INVALID_REQ_TYPE:"invalid-req-type"};/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xh=new mn(3e4,6e4);function Ca(n,e){return n.tenantId&&!e.tenantId?Object.assign(Object.assign({},e),{tenantId:n.tenantId}):e}async function vn(n,e,t,i,s={}){return Ta(n,s,async()=>{let r={},o={};i&&(e==="GET"?o=i:r={body:JSON.stringify(i)});const a=$t(Object.assign({key:n.config.apiKey},o)).slice(1),l=await n._getAdditionalHeaders();return l["Content-Type"]="application/json",n.languageCode&&(l["X-Firebase-Locale"]=n.languageCode),ba.fetch()(Sa(n,n.config.apiHost,t,a),Object.assign({method:e,headers:l,referrerPolicy:"no-referrer"},r))})}async function Ta(n,e,t){n._canInitEmulator=!1;const i=Object.assign(Object.assign({},Dh),e);try{const s=new Mh(n),r=await Promise.race([t(),s.promise]);s.clearNetworkTimeout();const o=await r.json();if("needConfirmation"in o)throw Nn(n,"account-exists-with-different-credential",o);if(r.ok&&!("errorMessage"in o))return o;{const a=r.ok?o.errorMessage:o.error.message,[l,c]=a.split(" : ");if(l==="FEDERATED_USER_ID_ALREADY_LINKED")throw Nn(n,"credential-already-in-use",o);if(l==="EMAIL_EXISTS")throw Nn(n,"email-already-in-use",o);if(l==="USER_DISABLED")throw Nn(n,"user-disabled",o);const u=i[l]||l.toLowerCase().replace(/[_\s]+/g,"-");if(c)throw Ia(n,u,c);Se(n,u)}}catch(s){if(s instanceof Me)throw s;Se(n,"network-request-failed",{message:String(s)})}}async function Lh(n,e,t,i,s={}){const r=await vn(n,e,t,i,s);return"mfaPendingCredential"in r&&Se(n,"multi-factor-auth-required",{_serverResponse:r}),r}function Sa(n,e,t,i){const s=`${e}${t}?${i}`;return n.config.emulator?As(n.config,s):`${n.config.apiScheme}://${s}`}class Mh{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise((t,i)=>{this.timer=setTimeout(()=>i(be(this.auth,"network-request-failed")),xh.get())})}clearNetworkTimeout(){clearTimeout(this.timer)}}function Nn(n,e,t){const i={appName:n.name};t.email&&(i.email=t.email),t.phoneNumber&&(i.phoneNumber=t.phoneNumber);const s=be(n,e,i);return s.customData._tokenResponse=t,s}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Uh(n,e){return vn(n,"POST","/v1/accounts:delete",e)}async function Fh(n,e){return vn(n,"POST","/v1/accounts:lookup",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xt(n){if(n)try{const e=new Date(Number(n));if(!isNaN(e.getTime()))return e.toUTCString()}catch{}}async function $h(n,e=!1){const t=ie(n),i=await t.getIdToken(e),s=Ps(i);R(s&&s.exp&&s.auth_time&&s.iat,t.auth,"internal-error");const r=typeof s.firebase=="object"?s.firebase:void 0,o=r==null?void 0:r.sign_in_provider;return{claims:s,token:i,authTime:Xt(Bi(s.auth_time)),issuedAtTime:Xt(Bi(s.iat)),expirationTime:Xt(Bi(s.exp)),signInProvider:o||null,signInSecondFactor:(r==null?void 0:r.sign_in_second_factor)||null}}function Bi(n){return Number(n)*1e3}function Ps(n){const[e,t,i]=n.split(".");if(e===void 0||t===void 0||i===void 0)return Ln("JWT malformed, contained fewer than 3 sections"),null;try{const s=jn(t);return s?JSON.parse(s):(Ln("Failed to decode base64 JWT payload"),null)}catch(s){return Ln("Caught error parsing JWT payload as JSON",s==null?void 0:s.toString()),null}}function Bh(n){const e=Ps(n);return R(e,"internal-error"),R(typeof e.exp<"u","internal-error"),R(typeof e.iat<"u","internal-error"),Number(e.exp)-Number(e.iat)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function an(n,e,t=!1){if(t)return e;try{return await e}catch(i){throw i instanceof Me&&Wh(i)&&n.auth.currentUser===n&&await n.auth.signOut(),i}}function Wh({code:n}){return n==="auth/user-disabled"||n==="auth/user-token-expired"}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hh{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,this.timerId!==null&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const i=this.errorBackoff;return this.errorBackoff=Math.min(this.errorBackoff*2,96e4),i}else{this.errorBackoff=3e4;const s=((t=this.user.stsTokenManager.expirationTime)!==null&&t!==void 0?t:0)-Date.now()-3e5;return Math.max(0,s)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout(async()=>{await this.iteration()},t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){(e==null?void 0:e.code)==="auth/network-request-failed"&&this.schedule(!0);return}this.schedule()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ra{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=Xt(this.lastLoginAt),this.creationTime=Xt(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Yn(n){var e;const t=n.auth,i=await n.getIdToken(),s=await an(n,Fh(t,{idToken:i}));R(s==null?void 0:s.users.length,t,"internal-error");const r=s.users[0];n._notifyReloadListener(r);const o=!((e=r.providerUserInfo)===null||e===void 0)&&e.length?qh(r.providerUserInfo):[],a=jh(n.providerData,o),l=n.isAnonymous,c=!(n.email&&r.passwordHash)&&!(a!=null&&a.length),u=l?c:!1,h={uid:r.localId,displayName:r.displayName||null,photoURL:r.photoUrl||null,email:r.email||null,emailVerified:r.emailVerified||!1,phoneNumber:r.phoneNumber||null,tenantId:r.tenantId||null,providerData:a,metadata:new Ra(r.createdAt,r.lastLoginAt),isAnonymous:u};Object.assign(n,h)}async function Vh(n){const e=ie(n);await Yn(e),await e.auth._persistUserIfCurrent(e),e.auth._notifyListenersIfCurrent(e)}function jh(n,e){return[...n.filter(i=>!e.some(s=>s.providerId===i.providerId)),...e]}function qh(n){return n.map(e=>{var{providerId:t}=e,i=ks(e,["providerId"]);return{providerId:t,uid:i.rawId||"",displayName:i.displayName||null,email:i.email||null,phoneNumber:i.phoneNumber||null,photoURL:i.photoUrl||null}})}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zh(n,e){const t=await Ta(n,{},async()=>{const i=$t({grant_type:"refresh_token",refresh_token:e}).slice(1),{tokenApiHost:s,apiKey:r}=n.config,o=Sa(n,s,"/v1/token",`key=${r}`),a=await n._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",ba.fetch()(o,{method:"POST",headers:a,body:i})});return{accessToken:t.access_token,expiresIn:t.expires_in,refreshToken:t.refresh_token}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ln{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){R(e.idToken,"internal-error"),R(typeof e.idToken<"u","internal-error"),R(typeof e.refreshToken<"u","internal-error");const t="expiresIn"in e&&typeof e.expiresIn<"u"?Number(e.expiresIn):Bh(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return R(!this.accessToken||this.refreshToken,e,"user-token-expired"),!t&&this.accessToken&&!this.isExpired?this.accessToken:this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:i,refreshToken:s,expiresIn:r}=await zh(e,t);this.updateTokensAndExpiration(i,s,Number(r))}updateTokensAndExpiration(e,t,i){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+i*1e3}static fromJSON(e,t){const{refreshToken:i,accessToken:s,expirationTime:r}=t,o=new ln;return i&&(R(typeof i=="string","internal-error",{appName:e}),o.refreshToken=i),s&&(R(typeof s=="string","internal-error",{appName:e}),o.accessToken=s),r&&(R(typeof r=="number","internal-error",{appName:e}),o.expirationTime=r),o}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new ln,this.toJSON())}_performRefresh(){return Ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function We(n,e){R(typeof n=="string"||typeof n>"u","internal-error",{appName:e})}class ot{constructor(e){var{uid:t,auth:i,stsTokenManager:s}=e,r=ks(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new Hh(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=i,this.stsTokenManager=s,this.accessToken=s.accessToken,this.displayName=r.displayName||null,this.email=r.email||null,this.emailVerified=r.emailVerified||!1,this.phoneNumber=r.phoneNumber||null,this.photoURL=r.photoURL||null,this.isAnonymous=r.isAnonymous||!1,this.tenantId=r.tenantId||null,this.providerData=r.providerData?[...r.providerData]:[],this.metadata=new Ra(r.createdAt||void 0,r.lastLoginAt||void 0)}async getIdToken(e){const t=await an(this,this.stsTokenManager.getToken(this.auth,e));return R(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return $h(this,e)}reload(){return Vh(this)}_assign(e){this!==e&&(R(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map(t=>Object.assign({},t)),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){const t=new ot(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}));return t.metadata._copy(this.metadata),t}_onReload(e){R(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let i=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),i=!0),t&&await Yn(this),await this.auth._persistUserIfCurrent(this),i&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await an(this,Uh(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map(e=>Object.assign({},e)),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var i,s,r,o,a,l,c,u;const h=(i=t.displayName)!==null&&i!==void 0?i:void 0,d=(s=t.email)!==null&&s!==void 0?s:void 0,f=(r=t.phoneNumber)!==null&&r!==void 0?r:void 0,_=(o=t.photoURL)!==null&&o!==void 0?o:void 0,v=(a=t.tenantId)!==null&&a!==void 0?a:void 0,E=(l=t._redirectEventId)!==null&&l!==void 0?l:void 0,k=(c=t.createdAt)!==null&&c!==void 0?c:void 0,T=(u=t.lastLoginAt)!==null&&u!==void 0?u:void 0,{uid:I,emailVerified:g,isAnonymous:y,providerData:b,stsTokenManager:U}=t;R(I&&U,e,"internal-error");const D=ln.fromJSON(this.name,U);R(typeof I=="string",e,"internal-error"),We(h,e.name),We(d,e.name),R(typeof g=="boolean",e,"internal-error"),R(typeof y=="boolean",e,"internal-error"),We(f,e.name),We(_,e.name),We(v,e.name),We(E,e.name),We(k,e.name),We(T,e.name);const O=new ot({uid:I,auth:e,email:d,emailVerified:g,displayName:h,isAnonymous:y,photoURL:_,phoneNumber:f,tenantId:v,stsTokenManager:D,createdAt:k,lastLoginAt:T});return b&&Array.isArray(b)&&(O.providerData=b.map(M=>Object.assign({},M))),E&&(O._redirectEventId=E),O}static async _fromIdTokenResponse(e,t,i=!1){const s=new ln;s.updateFromServerResponse(t);const r=new ot({uid:t.localId,auth:e,stsTokenManager:s,isAnonymous:i});return await Yn(r),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hr=new Map;function Ae(n){De(n instanceof Function,"Expected a class definition");let e=Hr.get(n);return e?(De(e instanceof n,"Instance stored in cache mismatched with class"),e):(e=new n,Hr.set(n,e),e)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ka{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return t===void 0?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}ka.type="NONE";const Vr=ka;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Mn(n,e,t){return`firebase:${n}:${e}:${t}`}class St{constructor(e,t,i){this.persistence=e,this.auth=t,this.userKey=i;const{config:s,name:r}=this.auth;this.fullUserKey=Mn(this.userKey,s.apiKey,r),this.fullPersistenceKey=Mn("persistence",s.apiKey,r),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?ot._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();if(await this.removeCurrentUser(),this.persistence=e,t)return this.setCurrentUser(t)}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,i="authUser"){if(!t.length)return new St(Ae(Vr),e,i);const s=(await Promise.all(t.map(async c=>{if(await c._isAvailable())return c}))).filter(c=>c);let r=s[0]||Ae(Vr);const o=Mn(i,e.config.apiKey,e.name);let a=null;for(const c of t)try{const u=await c._get(o);if(u){const h=ot._fromJSON(e,u);c!==r&&(a=h),r=c;break}}catch{}const l=s.filter(c=>c._shouldAllowMigration);return!r._shouldAllowMigration||!l.length?new St(r,e,i):(r=l[0],a&&await r._set(o,a.toJSON()),await Promise.all(t.map(async c=>{if(c!==r)try{await c._remove(o)}catch{}})),new St(r,e,i))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function jr(n){const e=n.toLowerCase();if(e.includes("opera/")||e.includes("opr/")||e.includes("opios/"))return"Opera";if(Pa(e))return"IEMobile";if(e.includes("msie")||e.includes("trident/"))return"IE";if(e.includes("edge/"))return"Edge";if(Na(e))return"Firefox";if(e.includes("silk/"))return"Silk";if(Da(e))return"Blackberry";if(xa(e))return"Webos";if(Os(e))return"Safari";if((e.includes("chrome/")||Aa(e))&&!e.includes("edge/"))return"Chrome";if(Oa(e))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,i=n.match(t);if((i==null?void 0:i.length)===2)return i[1]}return"Other"}function Na(n=ne()){return/firefox\//i.test(n)}function Os(n=ne()){const e=n.toLowerCase();return e.includes("safari/")&&!e.includes("chrome/")&&!e.includes("crios/")&&!e.includes("android")}function Aa(n=ne()){return/crios\//i.test(n)}function Pa(n=ne()){return/iemobile/i.test(n)}function Oa(n=ne()){return/android/i.test(n)}function Da(n=ne()){return/blackberry/i.test(n)}function xa(n=ne()){return/webos/i.test(n)}function wi(n=ne()){return/iphone|ipad|ipod/i.test(n)||/macintosh/i.test(n)&&/mobile/i.test(n)}function Gh(n=ne()){var e;return wi(n)&&!!(!((e=window.navigator)===null||e===void 0)&&e.standalone)}function Kh(){return cu()&&document.documentMode===10}function La(n=ne()){return wi(n)||Oa(n)||xa(n)||Da(n)||/windows phone/i.test(n)||Pa(n)}function Yh(){try{return!!(window&&window!==window.top)}catch{return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ma(n,e=[]){let t;switch(n){case"Browser":t=jr(ne());break;case"Worker":t=`${jr(ne())}-${n}`;break;default:t=n}const i=e.length?e.join(","):"FirebaseCore-web";return`${t}/JsCore/${mt}/${i}`}/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qh{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const i=r=>new Promise((o,a)=>{try{const l=e(r);o(l)}catch(l){a(l)}});i.onAbort=t,this.queue.push(i);const s=this.queue.length-1;return()=>{this.queue[s]=()=>Promise.resolve()}}async runMiddleware(e){if(this.auth.currentUser===e)return;const t=[];try{for(const i of this.queue)await i(e),i.onAbort&&t.push(i.onAbort)}catch(i){t.reverse();for(const s of t)try{s()}catch{}throw this.auth._errorFactory.create("login-blocked",{originalMessage:i==null?void 0:i.message})}}}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Xh(n,e={}){return vn(n,"GET","/v2/passwordPolicy",Ca(n,e))}/**
 * @license
 * Copyright 2023 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Jh=6;class Zh{constructor(e){var t,i,s,r;const o=e.customStrengthOptions;this.customStrengthOptions={},this.customStrengthOptions.minPasswordLength=(t=o.minPasswordLength)!==null&&t!==void 0?t:Jh,o.maxPasswordLength&&(this.customStrengthOptions.maxPasswordLength=o.maxPasswordLength),o.containsLowercaseCharacter!==void 0&&(this.customStrengthOptions.containsLowercaseLetter=o.containsLowercaseCharacter),o.containsUppercaseCharacter!==void 0&&(this.customStrengthOptions.containsUppercaseLetter=o.containsUppercaseCharacter),o.containsNumericCharacter!==void 0&&(this.customStrengthOptions.containsNumericCharacter=o.containsNumericCharacter),o.containsNonAlphanumericCharacter!==void 0&&(this.customStrengthOptions.containsNonAlphanumericCharacter=o.containsNonAlphanumericCharacter),this.enforcementState=e.enforcementState,this.enforcementState==="ENFORCEMENT_STATE_UNSPECIFIED"&&(this.enforcementState="OFF"),this.allowedNonAlphanumericCharacters=(s=(i=e.allowedNonAlphanumericCharacters)===null||i===void 0?void 0:i.join(""))!==null&&s!==void 0?s:"",this.forceUpgradeOnSignin=(r=e.forceUpgradeOnSignin)!==null&&r!==void 0?r:!1,this.schemaVersion=e.schemaVersion}validatePassword(e){var t,i,s,r,o,a;const l={isValid:!0,passwordPolicy:this};return this.validatePasswordLengthOptions(e,l),this.validatePasswordCharacterOptions(e,l),l.isValid&&(l.isValid=(t=l.meetsMinPasswordLength)!==null&&t!==void 0?t:!0),l.isValid&&(l.isValid=(i=l.meetsMaxPasswordLength)!==null&&i!==void 0?i:!0),l.isValid&&(l.isValid=(s=l.containsLowercaseLetter)!==null&&s!==void 0?s:!0),l.isValid&&(l.isValid=(r=l.containsUppercaseLetter)!==null&&r!==void 0?r:!0),l.isValid&&(l.isValid=(o=l.containsNumericCharacter)!==null&&o!==void 0?o:!0),l.isValid&&(l.isValid=(a=l.containsNonAlphanumericCharacter)!==null&&a!==void 0?a:!0),l}validatePasswordLengthOptions(e,t){const i=this.customStrengthOptions.minPasswordLength,s=this.customStrengthOptions.maxPasswordLength;i&&(t.meetsMinPasswordLength=e.length>=i),s&&(t.meetsMaxPasswordLength=e.length<=s)}validatePasswordCharacterOptions(e,t){this.updatePasswordCharacterOptionsStatuses(t,!1,!1,!1,!1);let i;for(let s=0;s<e.length;s++)i=e.charAt(s),this.updatePasswordCharacterOptionsStatuses(t,i>="a"&&i<="z",i>="A"&&i<="Z",i>="0"&&i<="9",this.allowedNonAlphanumericCharacters.includes(i))}updatePasswordCharacterOptionsStatuses(e,t,i,s,r){this.customStrengthOptions.containsLowercaseLetter&&(e.containsLowercaseLetter||(e.containsLowercaseLetter=t)),this.customStrengthOptions.containsUppercaseLetter&&(e.containsUppercaseLetter||(e.containsUppercaseLetter=i)),this.customStrengthOptions.containsNumericCharacter&&(e.containsNumericCharacter||(e.containsNumericCharacter=s)),this.customStrengthOptions.containsNonAlphanumericCharacter&&(e.containsNonAlphanumericCharacter||(e.containsNonAlphanumericCharacter=r))}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ed{constructor(e,t,i,s){this.app=e,this.heartbeatServiceProvider=t,this.appCheckServiceProvider=i,this.config=s,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new qr(this),this.idTokenSubscription=new qr(this),this.beforeStateQueue=new Qh(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION=1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=Ea,this._agentRecaptchaConfig=null,this._tenantRecaptchaConfigs={},this._projectPasswordPolicy=null,this._tenantPasswordPolicies={},this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=s.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=Ae(t)),this._initializationPromise=this.queue(async()=>{var i,s;if(!this._deleted&&(this.persistenceManager=await St.create(this,e),!this._deleted)){if(!((i=this._popupRedirectResolver)===null||i===void 0)&&i._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch{}await this.initializeCurrentUser(t),this.lastNotifiedUid=((s=this.currentUser)===null||s===void 0?void 0:s.uid)||null,!this._deleted&&(this._isInitialized=!0)}}),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();if(!(!this.currentUser&&!e)){if(this.currentUser&&e&&this.currentUser.uid===e.uid){this._currentUser._assign(e),await this.currentUser.getIdToken();return}await this._updateCurrentUser(e,!0)}}async initializeCurrentUser(e){var t;const i=await this.assertedPersistence.getCurrentUser();let s=i,r=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const o=(t=this.redirectUser)===null||t===void 0?void 0:t._redirectEventId,a=s==null?void 0:s._redirectEventId,l=await this.tryRedirectSignIn(e);(!o||o===a)&&(l!=null&&l.user)&&(s=l.user,r=!0)}if(!s)return this.directlySetCurrentUser(null);if(!s._redirectEventId){if(r)try{await this.beforeStateQueue.runMiddleware(s)}catch(o){s=i,this._popupRedirectResolver._overrideRedirectResult(this,()=>Promise.reject(o))}return s?this.reloadAndSetCurrentUserOrClear(s):this.directlySetCurrentUser(null)}return R(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===s._redirectEventId?this.directlySetCurrentUser(s):this.reloadAndSetCurrentUserOrClear(s)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch{await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Yn(e)}catch(t){if((t==null?void 0:t.code)!=="auth/network-request-failed")return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=Oh()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?ie(e):null;return t&&R(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&R(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue(async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()})}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue(async()=>{await this.assertedPersistence.setPersistence(Ae(e))})}_getRecaptchaConfig(){return this.tenantId==null?this._agentRecaptchaConfig:this._tenantRecaptchaConfigs[this.tenantId]}async validatePassword(e){this._getPasswordPolicyInternal()||await this._updatePasswordPolicy();const t=this._getPasswordPolicyInternal();return t.schemaVersion!==this.EXPECTED_PASSWORD_POLICY_SCHEMA_VERSION?Promise.reject(this._errorFactory.create("unsupported-password-policy-schema-version",{})):t.validatePassword(e)}_getPasswordPolicyInternal(){return this.tenantId===null?this._projectPasswordPolicy:this._tenantPasswordPolicies[this.tenantId]}async _updatePasswordPolicy(){const e=await Xh(this),t=new Zh(e);this.tenantId===null?this._projectPasswordPolicy=t:this._tenantPasswordPolicies[this.tenantId]=t}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new gn("auth","Firebase",e())}onAuthStateChanged(e,t,i){return this.registerStateListener(this.authStateSubscription,e,t,i)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,i){return this.registerStateListener(this.idTokenSubscription,e,t,i)}authStateReady(){return new Promise((e,t)=>{if(this.currentUser)e();else{const i=this.onAuthStateChanged(()=>{i(),e()},t)}})}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:(e=this._currentUser)===null||e===void 0?void 0:e.toJSON()}}async _setRedirectUser(e,t){const i=await this.getOrInitRedirectPersistenceManager(t);return e===null?i.removeCurrentUser():i.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&Ae(e)||this._popupRedirectResolver;R(t,this,"argument-error"),this.redirectPersistenceManager=await St.create(this,[Ae(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,i;return this._isInitialized&&await this.queue(async()=>{}),((t=this._currentUser)===null||t===void 0?void 0:t._redirectEventId)===e?this._currentUser:((i=this.redirectUser)===null||i===void 0?void 0:i._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue(async()=>this.directlySetCurrentUser(e))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const i=(t=(e=this.currentUser)===null||e===void 0?void 0:e.uid)!==null&&t!==void 0?t:null;this.lastNotifiedUid!==i&&(this.lastNotifiedUid=i,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,i,s){if(this._deleted)return()=>{};const r=typeof t=="function"?t:t.next.bind(t);let o=!1;const a=this._isInitialized?Promise.resolve():this._initializationPromise;if(R(a,this,"internal-error"),a.then(()=>{o||r(this.currentUser)}),typeof t=="function"){const l=e.addObserver(t,i,s);return()=>{o=!0,l()}}else{const l=e.addObserver(t);return()=>{o=!0,l()}}}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh(),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return R(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){!e||this.frameworks.includes(e)||(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ma(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={"X-Client-Version":this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const i=await((e=this.heartbeatServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getHeartbeatsHeader());i&&(t["X-Firebase-Client"]=i);const s=await this._getAppCheckToken();return s&&(t["X-Firebase-AppCheck"]=s),t}async _getAppCheckToken(){var e;const t=await((e=this.appCheckServiceProvider.getImmediate({optional:!0}))===null||e===void 0?void 0:e.getToken());return t!=null&&t.error&&kh(`Error while retrieving App Check token: ${t.error}`),t==null?void 0:t.token}}function yn(n){return ie(n)}class qr{constructor(e){this.auth=e,this.observer=null,this.addObserver=vu(t=>this.observer=t)}get next(){return R(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function td(){var n,e;return(e=(n=document.getElementsByTagName("head"))===null||n===void 0?void 0:n[0])!==null&&e!==void 0?e:document}function nd(n){return new Promise((e,t)=>{const i=document.createElement("script");i.setAttribute("src",n),i.onload=e,i.onerror=s=>{const r=be("internal-error");r.customData=s,t(r)},i.type="text/javascript",i.charset="UTF-8",td().appendChild(i)})}function id(n){return`__${n}${Math.floor(Math.random()*1e6)}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function sd(n,e){const t=yi(n,"auth");if(t.isInitialized()){const s=t.getImmediate(),r=t.getOptions();if(zn(r,e??{}))return s;Se(s,"already-initialized")}return t.initialize({options:e})}function rd(n,e){const t=(e==null?void 0:e.persistence)||[],i=(Array.isArray(t)?t:[t]).map(Ae);e!=null&&e.errorMap&&n._updateErrorMap(e.errorMap),n._initializeWithPersistence(i,e==null?void 0:e.popupRedirectResolver)}function od(n,e,t){const i=yn(n);R(i._canInitEmulator,i,"emulator-config-failed"),R(/^https?:\/\//.test(e),i,"invalid-emulator-scheme");const s=!!(t!=null&&t.disableWarnings),r=Ua(e),{host:o,port:a}=ad(e),l=a===null?"":`:${a}`;i.config.emulator={url:`${r}//${o}${l}/`},i.settings.appVerificationDisabledForTesting=!0,i.emulatorConfig=Object.freeze({host:o,port:a,protocol:r.replace(":",""),options:Object.freeze({disableWarnings:s})}),s||ld()}function Ua(n){const e=n.indexOf(":");return e<0?"":n.substr(0,e+1)}function ad(n){const e=Ua(n),t=/(\/\/)?([^?#/]+)/.exec(n.substr(e.length));if(!t)return{host:"",port:null};const i=t[2].split("@").pop()||"",s=/^(\[[^\]]+\])(:|$)/.exec(i);if(s){const r=s[1];return{host:r,port:zr(i.substr(r.length+1))}}else{const[r,o]=i.split(":");return{host:r,port:zr(o)}}}function zr(n){if(!n)return null;const e=Number(n);return isNaN(e)?null:e}function ld(){function n(){const e=document.createElement("p"),t=e.style;e.innerText="Running in emulator mode. Do not use with production credentials.",t.position="fixed",t.width="100%",t.backgroundColor="#ffffff",t.border=".1em solid #000000",t.color="#b50000",t.bottom="0px",t.left="0px",t.margin="0px",t.zIndex="10000",t.textAlign="center",e.classList.add("firebase-emulator-warning"),document.body.appendChild(e)}typeof console<"u"&&typeof console.info=="function"&&console.info("WARNING: You are using the Auth Emulator, which is intended for local testing only.  Do not use with production credentials."),typeof window<"u"&&typeof document<"u"&&(document.readyState==="loading"?window.addEventListener("DOMContentLoaded",n):n())}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fa{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return Ne("not implemented")}_getIdTokenResponse(e){return Ne("not implemented")}_linkToIdToken(e,t){return Ne("not implemented")}_getReauthenticationResolver(e){return Ne("not implemented")}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Rt(n,e){return Lh(n,"POST","/v1/accounts:signInWithIdp",Ca(n,e))}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const cd="http://localhost";class ht extends Fa{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new ht(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):Se("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t=typeof e=="string"?JSON.parse(e):e,{providerId:i,signInMethod:s}=t,r=ks(t,["providerId","signInMethod"]);if(!i||!s)return null;const o=new ht(i,s);return o.idToken=r.idToken||void 0,o.accessToken=r.accessToken||void 0,o.secret=r.secret,o.nonce=r.nonce,o.pendingToken=r.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Rt(e,t)}_linkToIdToken(e,t){const i=this.buildRequest();return i.idToken=t,Rt(e,i)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Rt(e,t)}buildRequest(){const e={requestUri:cd,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t.id_token=this.idToken),this.accessToken&&(t.access_token=this.accessToken),this.secret&&(t.oauth_token_secret=this.secret),t.providerId=this.providerId,this.nonce&&!this.pendingToken&&(t.nonce=this.nonce),e.postBody=$t(t)}return e}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wn extends Ds{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class He extends wn{constructor(){super("facebook.com")}static credential(e){return ht._fromParams({providerId:He.PROVIDER_ID,signInMethod:He.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return He.credentialFromTaggedObject(e)}static credentialFromError(e){return He.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return He.credential(e.oauthAccessToken)}catch{return null}}}He.FACEBOOK_SIGN_IN_METHOD="facebook.com";He.PROVIDER_ID="facebook.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class de extends wn{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return ht._fromParams({providerId:de.PROVIDER_ID,signInMethod:de.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return de.credentialFromTaggedObject(e)}static credentialFromError(e){return de.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:i}=e;if(!t&&!i)return null;try{return de.credential(t,i)}catch{return null}}}de.GOOGLE_SIGN_IN_METHOD="google.com";de.PROVIDER_ID="google.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ve extends wn{constructor(){super("github.com")}static credential(e){return ht._fromParams({providerId:Ve.PROVIDER_ID,signInMethod:Ve.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ve.credentialFromTaggedObject(e)}static credentialFromError(e){return Ve.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e)||!e.oauthAccessToken)return null;try{return Ve.credential(e.oauthAccessToken)}catch{return null}}}Ve.GITHUB_SIGN_IN_METHOD="github.com";Ve.PROVIDER_ID="github.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends wn{constructor(){super("twitter.com")}static credential(e,t){return ht._fromParams({providerId:je.PROVIDER_ID,signInMethod:je.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return je.credentialFromTaggedObject(e)}static credentialFromError(e){return je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:i}=e;if(!t||!i)return null;try{return je.credential(t,i)}catch{return null}}}je.TWITTER_SIGN_IN_METHOD="twitter.com";je.PROVIDER_ID="twitter.com";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dt{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,i,s=!1){const r=await ot._fromIdTokenResponse(e,i,s),o=Gr(i);return new Dt({user:r,providerId:o,_tokenResponse:i,operationType:t})}static async _forOperation(e,t,i){await e._updateTokensIfNecessary(i,!0);const s=Gr(i);return new Dt({user:e,providerId:s,_tokenResponse:i,operationType:t})}}function Gr(n){return n.providerId?n.providerId:"phoneNumber"in n?"phone":null}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn extends Me{constructor(e,t,i,s){var r;super(t.code,t.message),this.operationType=i,this.user=s,Object.setPrototypeOf(this,Qn.prototype),this.customData={appName:e.name,tenantId:(r=e.tenantId)!==null&&r!==void 0?r:void 0,_serverResponse:t.customData._serverResponse,operationType:i}}static _fromErrorAndOperation(e,t,i,s){return new Qn(e,t,i,s)}}function $a(n,e,t,i){return(e==="reauthenticate"?t._getReauthenticationResolver(n):t._getIdTokenResponse(n)).catch(r=>{throw r.code==="auth/multi-factor-auth-required"?Qn._fromErrorAndOperation(n,r,e,i):r})}async function ud(n,e,t=!1){const i=await an(n,e._linkToIdToken(n.auth,await n.getIdToken()),t);return Dt._forOperation(n,"link",i)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function hd(n,e,t=!1){const{auth:i}=n,s="reauthenticate";try{const r=await an(n,$a(i,s,e,n),t);R(r.idToken,i,"internal-error");const o=Ps(r.idToken);R(o,i,"internal-error");const{sub:a}=o;return R(n.uid===a,i,"user-mismatch"),Dt._forOperation(n,s,r)}catch(r){throw(r==null?void 0:r.code)==="auth/user-not-found"&&Se(i,"user-mismatch"),r}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ba(n,e,t=!1){const i="signIn",s=await $a(n,i,e),r=await Dt._fromIdTokenResponse(n,i,s);return t||await n._updateCurrentUser(r.user),r}async function dd(n,e){return Ba(yn(n),e)}function fd(n,e,t,i){return ie(n).onIdTokenChanged(e,t,i)}function _d(n,e,t){return ie(n).beforeAuthStateChanged(e,t)}const Xn="__sak";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Wa{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(Xn,"1"),this.storage.removeItem(Xn),Promise.resolve(!0)):Promise.resolve(!1)}catch{return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pd(){const n=ne();return Os(n)||wi(n)}const gd=1e3,md=10;class Ha extends Wa{constructor(){super(()=>window.localStorage,"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=pd()&&Yh(),this.fallbackToPolling=La(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const i=this.storage.getItem(t),s=this.localCache[t];i!==s&&e(t,s,i)}}onStorageEvent(e,t=!1){if(!e.key){this.forAllChangedKeys((o,a,l)=>{this.notifyListeners(o,l)});return}const i=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const o=this.storage.getItem(i);if(e.newValue!==o)e.newValue!==null?this.storage.setItem(i,e.newValue):this.storage.removeItem(i);else if(this.localCache[i]===e.newValue&&!t)return}const s=()=>{const o=this.storage.getItem(i);!t&&this.localCache[i]===o||this.notifyListeners(i,o)},r=this.storage.getItem(i);Kh()&&r!==e.newValue&&e.newValue!==e.oldValue?setTimeout(s,md):s()}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t&&JSON.parse(t))}startPolling(){this.stopPolling(),this.pollTimer=setInterval(()=>{this.forAllChangedKeys((e,t,i)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:i}),!0)})},gd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){Object.keys(this.listeners).length===0&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}Ha.type="LOCAL";const vd=Ha;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Va extends Wa{constructor(){super(()=>window.sessionStorage,"SESSION")}_addListener(e,t){}_removeListener(e,t){}}Va.type="SESSION";const ja=Va;/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function yd(n){return Promise.all(n.map(async e=>{try{return{fulfilled:!0,value:await e}}catch(t){return{fulfilled:!1,reason:t}}}))}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ei{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find(s=>s.isListeningto(e));if(t)return t;const i=new Ei(e);return this.receivers.push(i),i}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:i,eventType:s,data:r}=t.data,o=this.handlersMap[s];if(!(o!=null&&o.size))return;t.ports[0].postMessage({status:"ack",eventId:i,eventType:s});const a=Array.from(o).map(async c=>c(t.origin,r)),l=await yd(a);t.ports[0].postMessage({status:"done",eventId:i,eventType:s,response:l})}_subscribe(e,t){Object.keys(this.handlersMap).length===0&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),(!t||this.handlersMap[e].size===0)&&delete this.handlersMap[e],Object.keys(this.handlersMap).length===0&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}Ei.receivers=[];/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xs(n="",e=10){let t="";for(let i=0;i<e;i++)t+=Math.floor(Math.random()*10);return n+t}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wd{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,i=50){const s=typeof MessageChannel<"u"?new MessageChannel:null;if(!s)throw new Error("connection_unavailable");let r,o;return new Promise((a,l)=>{const c=xs("",20);s.port1.start();const u=setTimeout(()=>{l(new Error("unsupported_event"))},i);o={messageChannel:s,onMessage(h){const d=h;if(d.data.eventId===c)switch(d.data.status){case"ack":clearTimeout(u),r=setTimeout(()=>{l(new Error("timeout"))},3e3);break;case"done":clearTimeout(r),a(d.data.response);break;default:clearTimeout(u),clearTimeout(r),l(new Error("invalid_response"));break}}},this.handlers.add(o),s.port1.addEventListener("message",o.onMessage),this.target.postMessage({eventType:e,eventId:c,data:t},[s.port2])}).finally(()=>{o&&this.removeMessageHandler(o)})}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ce(){return window}function Ed(n){Ce().location.href=n}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function qa(){return typeof Ce().WorkerGlobalScope<"u"&&typeof Ce().importScripts=="function"}async function Id(){if(!(navigator!=null&&navigator.serviceWorker))return null;try{return(await navigator.serviceWorker.ready).active}catch{return null}}function bd(){var n;return((n=navigator==null?void 0:navigator.serviceWorker)===null||n===void 0?void 0:n.controller)||null}function Cd(){return qa()?self:null}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const za="firebaseLocalStorageDb",Td=1,Jn="firebaseLocalStorage",Ga="fbase_key";class En{constructor(e){this.request=e}toPromise(){return new Promise((e,t)=>{this.request.addEventListener("success",()=>{e(this.request.result)}),this.request.addEventListener("error",()=>{t(this.request.error)})})}}function Ii(n,e){return n.transaction([Jn],e?"readwrite":"readonly").objectStore(Jn)}function Sd(){const n=indexedDB.deleteDatabase(za);return new En(n).toPromise()}function os(){const n=indexedDB.open(za,Td);return new Promise((e,t)=>{n.addEventListener("error",()=>{t(n.error)}),n.addEventListener("upgradeneeded",()=>{const i=n.result;try{i.createObjectStore(Jn,{keyPath:Ga})}catch(s){t(s)}}),n.addEventListener("success",async()=>{const i=n.result;i.objectStoreNames.contains(Jn)?e(i):(i.close(),await Sd(),e(await os()))})})}async function Kr(n,e,t){const i=Ii(n,!0).put({[Ga]:e,value:t});return new En(i).toPromise()}async function Rd(n,e){const t=Ii(n,!1).get(e),i=await new En(t).toPromise();return i===void 0?null:i.value}function Yr(n,e){const t=Ii(n,!0).delete(e);return new En(t).toPromise()}const kd=800,Nd=3;class Ka{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then(()=>{},()=>{})}async _openDb(){return this.db?this.db:(this.db=await os(),this.db)}async _withRetries(e){let t=0;for(;;)try{const i=await this._openDb();return await e(i)}catch(i){if(t++>Nd)throw i;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return qa()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=Ei._getInstance(Cd()),this.receiver._subscribe("keyChanged",async(e,t)=>({keyProcessed:(await this._poll()).includes(t.key)})),this.receiver._subscribe("ping",async(e,t)=>["keyChanged"])}async initializeSender(){var e,t;if(this.activeServiceWorker=await Id(),!this.activeServiceWorker)return;this.sender=new wd(this.activeServiceWorker);const i=await this.sender._send("ping",{},800);i&&!((e=i[0])===null||e===void 0)&&e.fulfilled&&!((t=i[0])===null||t===void 0)&&t.value.includes("keyChanged")&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(!(!this.sender||!this.activeServiceWorker||bd()!==this.activeServiceWorker))try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch{}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await os();return await Kr(e,Xn,"1"),await Yr(e,Xn),!0}catch{}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite(async()=>(await this._withRetries(i=>Kr(i,e,t)),this.localCache[e]=t,this.notifyServiceWorker(e)))}async _get(e){const t=await this._withRetries(i=>Rd(i,e));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite(async()=>(await this._withRetries(t=>Yr(t,e)),delete this.localCache[e],this.notifyServiceWorker(e)))}async _poll(){const e=await this._withRetries(s=>{const r=Ii(s,!1).getAll();return new En(r).toPromise()});if(!e)return[];if(this.pendingWrites!==0)return[];const t=[],i=new Set;for(const{fbase_key:s,value:r}of e)i.add(s),JSON.stringify(this.localCache[s])!==JSON.stringify(r)&&(this.notifyListeners(s,r),t.push(s));for(const s of Object.keys(this.localCache))this.localCache[s]&&!i.has(s)&&(this.notifyListeners(s,null),t.push(s));return t}notifyListeners(e,t){this.localCache[e]=t;const i=this.listeners[e];if(i)for(const s of Array.from(i))s(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval(async()=>this._poll(),kd)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){Object.keys(this.listeners).length===0&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),this.listeners[e].size===0&&delete this.listeners[e]),Object.keys(this.listeners).length===0&&this.stopPolling()}}Ka.type="LOCAL";const Ad=Ka;new mn(3e4,6e4);/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ya(n,e){return e?Ae(e):(R(n._popupRedirectResolver,n,"argument-error"),n._popupRedirectResolver)}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ls extends Fa{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Rt(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Rt(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Rt(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Pd(n){return Ba(n.auth,new Ls(n),n.bypassAuthState)}function Od(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),hd(t,new Ls(n),n.bypassAuthState)}async function Dd(n){const{auth:e,user:t}=n;return R(t,e,"internal-error"),ud(t,new Ls(n),n.bypassAuthState)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qa{constructor(e,t,i,s,r=!1){this.auth=e,this.resolver=i,this.user=s,this.bypassAuthState=r,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise(async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(i){this.reject(i)}})}async onAuthEvent(e){const{urlResponse:t,sessionId:i,postBody:s,tenantId:r,error:o,type:a}=e;if(o){this.reject(o);return}const l={auth:this.auth,requestUri:t,sessionId:i,tenantId:r||void 0,postBody:s||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(a)(l))}catch(c){this.reject(c)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Pd;case"linkViaPopup":case"linkViaRedirect":return Dd;case"reauthViaPopup":case"reauthViaRedirect":return Od;default:Se(this.auth,"internal-error")}}resolve(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){De(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const xd=new mn(2e3,1e4);async function Ld(n,e,t){const i=yn(n);Nh(n,e,Ds);const s=Ya(i,t);return new it(i,"signInViaPopup",e,s).executeNotNull()}class it extends Qa{constructor(e,t,i,s,r){super(e,t,s,r),this.provider=i,this.authWindow=null,this.pollId=null,it.currentPopupAction&&it.currentPopupAction.cancel(),it.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return R(e,this.auth,"internal-error"),e}async onExecution(){De(this.filter.length===1,"Popup operations only handle one event");const e=xs();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch(t=>{this.reject(t)}),this.resolver._isIframeWebStorageSupported(this.auth,t=>{t||this.reject(be(this.auth,"web-storage-unsupported"))}),this.pollUserCancellation()}get eventId(){var e;return((e=this.authWindow)===null||e===void 0?void 0:e.associatedEvent)||null}cancel(){this.reject(be(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,it.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,i;if(!((i=(t=this.authWindow)===null||t===void 0?void 0:t.window)===null||i===void 0)&&i.closed){this.pollId=window.setTimeout(()=>{this.pollId=null,this.reject(be(this.auth,"popup-closed-by-user"))},8e3);return}this.pollId=window.setTimeout(e,xd.get())};e()}}it.currentPopupAction=null;/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Md="pendingRedirect",Un=new Map;class Ud extends Qa{constructor(e,t,i=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,i),this.eventId=null}async execute(){let e=Un.get(this.auth._key());if(!e){try{const i=await Fd(this.resolver,this.auth)?await super.execute():null;e=()=>Promise.resolve(i)}catch(t){e=()=>Promise.reject(t)}Un.set(this.auth._key(),e)}return this.bypassAuthState||Un.set(this.auth._key(),()=>Promise.resolve(null)),e()}async onAuthEvent(e){if(e.type==="signInViaRedirect")return super.onAuthEvent(e);if(e.type==="unknown"){this.resolve(null);return}if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}async onExecution(){}cleanUp(){}}async function Fd(n,e){const t=Wd(e),i=Bd(n);if(!await i._isAvailable())return!1;const s=await i._get(t)==="true";return await i._remove(t),s}function $d(n,e){Un.set(n._key(),e)}function Bd(n){return Ae(n._redirectPersistence)}function Wd(n){return Mn(Md,n.config.apiKey,n.name)}async function Hd(n,e,t=!1){const i=yn(n),s=Ya(i,e),o=await new Ud(i,s,t).execute();return o&&!t&&(delete o.user._redirectEventId,await i._persistUserIfCurrent(o.user),await i._setRedirectUser(null,e)),o}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Vd=10*60*1e3;class jd{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach(i=>{this.isEventForConsumer(e,i)&&(t=!0,this.sendToConsumer(e,i),this.saveEventToCache(e))}),this.hasHandledPotentialRedirect||!qd(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var i;if(e.error&&!Xa(e)){const s=((i=e.error.code)===null||i===void 0?void 0:i.split("auth/")[1])||"internal-error";t.onError(be(this.auth,s))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const i=t.eventId===null||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&i}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=Vd&&this.cachedEventUids.clear(),this.cachedEventUids.has(Qr(e))}saveEventToCache(e){this.cachedEventUids.add(Qr(e)),this.lastProcessedEventTime=Date.now()}}function Qr(n){return[n.type,n.eventId,n.sessionId,n.tenantId].filter(e=>e).join("-")}function Xa({type:n,error:e}){return n==="unknown"&&(e==null?void 0:e.code)==="auth/no-auth-event"}function qd(n){switch(n.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return Xa(n);default:return!1}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function zd(n,e={}){return vn(n,"GET","/v1/projects",e)}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Gd=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,Kd=/^https?/;async function Yd(n){if(n.config.emulator)return;const{authorizedDomains:e}=await zd(n);for(const t of e)try{if(Qd(t))return}catch{}Se(n,"unauthorized-domain")}function Qd(n){const e=rs(),{protocol:t,hostname:i}=new URL(e);if(n.startsWith("chrome-extension://")){const o=new URL(n);return o.hostname===""&&i===""?t==="chrome-extension:"&&n.replace("chrome-extension://","")===e.replace("chrome-extension://",""):t==="chrome-extension:"&&o.hostname===i}if(!Kd.test(t))return!1;if(Gd.test(n))return i===n;const s=n.replace(/\./g,"\\.");return new RegExp("^(.+\\."+s+"|"+s+")$","i").test(i)}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Xd=new mn(3e4,6e4);function Xr(){const n=Ce().___jsl;if(n!=null&&n.H){for(const e of Object.keys(n.H))if(n.H[e].r=n.H[e].r||[],n.H[e].L=n.H[e].L||[],n.H[e].r=[...n.H[e].L],n.CP)for(let t=0;t<n.CP.length;t++)n.CP[t]=null}}function Jd(n){return new Promise((e,t)=>{var i,s,r;function o(){Xr(),gapi.load("gapi.iframes",{callback:()=>{e(gapi.iframes.getContext())},ontimeout:()=>{Xr(),t(be(n,"network-request-failed"))},timeout:Xd.get()})}if(!((s=(i=Ce().gapi)===null||i===void 0?void 0:i.iframes)===null||s===void 0)&&s.Iframe)e(gapi.iframes.getContext());else if(!((r=Ce().gapi)===null||r===void 0)&&r.load)o();else{const a=id("iframefcb");return Ce()[a]=()=>{gapi.load?o():t(be(n,"network-request-failed"))},nd(`https://apis.google.com/js/api.js?onload=${a}`).catch(l=>t(l))}}).catch(e=>{throw Fn=null,e})}let Fn=null;function Zd(n){return Fn=Fn||Jd(n),Fn}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ef=new mn(5e3,15e3),tf="__/auth/iframe",nf="emulator/auth/iframe",sf={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},rf=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function of(n){const e=n.config;R(e.authDomain,n,"auth-domain-config-required");const t=e.emulator?As(e,nf):`https://${n.config.authDomain}/${tf}`,i={apiKey:e.apiKey,appName:n.name,v:mt},s=rf.get(n.config.apiHost);s&&(i.eid=s);const r=n._getFrameworks();return r.length&&(i.fw=r.join(",")),`${t}?${$t(i).slice(1)}`}async function af(n){const e=await Zd(n),t=Ce().gapi;return R(t,n,"internal-error"),e.open({where:document.body,url:of(n),messageHandlersFilter:t.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:sf,dontclear:!0},i=>new Promise(async(s,r)=>{await i.restyle({setHideOnLeave:!1});const o=be(n,"network-request-failed"),a=Ce().setTimeout(()=>{r(o)},ef.get());function l(){Ce().clearTimeout(a),s(i)}i.ping(l).then(l,()=>{r(o)})}))}/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const lf={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},cf=500,uf=600,hf="_blank",df="http://localhost";class Jr{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch{}}}function ff(n,e,t,i=cf,s=uf){const r=Math.max((window.screen.availHeight-s)/2,0).toString(),o=Math.max((window.screen.availWidth-i)/2,0).toString();let a="";const l=Object.assign(Object.assign({},lf),{width:i.toString(),height:s.toString(),top:r,left:o}),c=ne().toLowerCase();t&&(a=Aa(c)?hf:t),Na(c)&&(e=e||df,l.scrollbars="yes");const u=Object.entries(l).reduce((d,[f,_])=>`${d}${f}=${_},`,"");if(Gh(c)&&a!=="_self")return _f(e||"",a),new Jr(null);const h=window.open(e||"",a,u);R(h,n,"popup-blocked");try{h.focus()}catch{}return new Jr(h)}function _f(n,e){const t=document.createElement("a");t.href=n,t.target=e;const i=document.createEvent("MouseEvent");i.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),t.dispatchEvent(i)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const pf="__/auth/handler",gf="emulator/auth/handler",mf=encodeURIComponent("fac");async function Zr(n,e,t,i,s,r){R(n.config.authDomain,n,"auth-domain-config-required"),R(n.config.apiKey,n,"invalid-api-key");const o={apiKey:n.config.apiKey,appName:n.name,authType:t,redirectUrl:i,v:mt,eventId:s};if(e instanceof Ds){e.setDefaultLanguage(n.languageCode),o.providerId=e.providerId||"",Zi(e.getCustomParameters())||(o.customParameters=JSON.stringify(e.getCustomParameters()));for(const[u,h]of Object.entries(r||{}))o[u]=h}if(e instanceof wn){const u=e.getScopes().filter(h=>h!=="");u.length>0&&(o.scopes=u.join(","))}n.tenantId&&(o.tid=n.tenantId);const a=o;for(const u of Object.keys(a))a[u]===void 0&&delete a[u];const l=await n._getAppCheckToken(),c=l?`#${mf}=${encodeURIComponent(l)}`:"";return`${vf(n)}?${$t(a).slice(1)}${c}`}function vf({config:n}){return n.emulator?As(n,gf):`https://${n.authDomain}/${pf}`}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Wi="webStorageSupport";class yf{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=ja,this._completeRedirectFn=Hd,this._overrideRedirectResult=$d}async _openPopup(e,t,i,s){var r;De((r=this.eventManagers[e._key()])===null||r===void 0?void 0:r.manager,"_initialize() not called before _openPopup()");const o=await Zr(e,t,i,rs(),s);return ff(e,o,xs())}async _openRedirect(e,t,i,s){await this._originValidation(e);const r=await Zr(e,t,i,rs(),s);return Ed(r),new Promise(()=>{})}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:s,promise:r}=this.eventManagers[t];return s?Promise.resolve(s):(De(r,"If manager is not set, promise should be"),r)}const i=this.initAndGetManager(e);return this.eventManagers[t]={promise:i},i.catch(()=>{delete this.eventManagers[t]}),i}async initAndGetManager(e){const t=await af(e),i=new jd(e);return t.register("authEvent",s=>(R(s==null?void 0:s.authEvent,e,"invalid-auth-event"),{status:i.onEvent(s.authEvent)?"ACK":"ERROR"}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:i},this.iframes[e._key()]=t,i}_isIframeWebStorageSupported(e,t){this.iframes[e._key()].send(Wi,{type:Wi},s=>{var r;const o=(r=s==null?void 0:s[0])===null||r===void 0?void 0:r[Wi];o!==void 0&&t(!!o),Se(e,"internal-error")},gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Yd(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return La()||Os()||wi()}}const wf=yf;var eo="@firebase/auth",to="1.3.0";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ef{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),((e=this.auth.currentUser)===null||e===void 0?void 0:e.uid)||null}async getToken(e){return this.assertAuthConfigured(),await this.auth._initializationPromise,this.auth.currentUser?{accessToken:await this.auth.currentUser.getIdToken(e)}:null}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged(i=>{e((i==null?void 0:i.stsTokenManager.accessToken)||null)});this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){R(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function If(n){switch(n){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function bf(n){ut(new Ye("auth",(e,{options:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("heartbeat"),r=e.getProvider("app-check-internal"),{apiKey:o,authDomain:a}=i.options;R(o&&!o.includes(":"),"invalid-api-key",{appName:i.name});const l={apiKey:o,authDomain:a,clientPlatform:n,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ma(n)},c=new ed(i,s,r,l);return rd(c,t),c},"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback((e,t,i)=>{e.getProvider("auth-internal").initialize()})),ut(new Ye("auth-internal",e=>{const t=yn(e.getProvider("auth").getImmediate());return(i=>new Ef(i))(t)},"PRIVATE").setInstantiationMode("EXPLICIT")),Ie(eo,to,If(n)),Ie(eo,to,"esm2017")}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Cf=5*60,Tf=ua("authIdTokenMaxAge")||Cf;let no=null;const Sf=n=>async e=>{const t=e&&await e.getIdTokenResult(),i=t&&(new Date().getTime()-Date.parse(t.issuedAtTime))/1e3;if(i&&i>Tf)return;const s=t==null?void 0:t.token;no!==s&&(no=s,await fetch(n,{method:s?"POST":"DELETE",headers:s?{Authorization:`Bearer ${s}`}:{}}))};function Ms(n=Rs()){const e=yi(n,"auth");if(e.isInitialized())return e.getImmediate();const t=sd(n,{popupRedirectResolver:wf,persistence:[Ad,vd,ja]}),i=ua("authTokenSyncURL");if(i){const r=Sf(i);_d(t,r,()=>r(t.currentUser)),fd(t,o=>r(o))}const s=aa("auth");return s&&od(t,`http://${s}`),t}bf("Browser");const Et=[];function Ja(n,e){return{subscribe:Us(n,e).subscribe}}function Us(n,e=B){let t;const i=new Set;function s(a){if(ye(n,a)&&(n=a,t)){const l=!Et.length;for(const c of i)c[1](),Et.push(c,n);if(l){for(let c=0;c<Et.length;c+=2)Et[c][0](Et[c+1]);Et.length=0}}}function r(a){s(a(n))}function o(a,l=B){const c=[a,l];return i.add(c),i.size===1&&(t=e(s,r)||B),a(n),()=>{i.delete(c),i.size===0&&t&&(t(),t=null)}}return{set:s,update:r,subscribe:o}}function Za(n,e,t){const i=!Array.isArray(n),s=i?[n]:n;if(!s.every(Boolean))throw new Error("derived() expects stores as input, got a falsy value");const r=e.length<2;return Ja(t,(o,a)=>{let l=!1;const c=[];let u=0,h=B;const d=()=>{if(u)return;h();const _=e(i?c[0]:c,o,a);r?o(_):h=Es(_)?_:B},f=s.map((_,v)=>Xo(_,E=>{c[v]=E,u&=~(1<<v),l&&d()},()=>{u|=1<<v}));return l=!0,d(),function(){Je(f),h(),l=!1}})}const Zn=Us(null);function Rf(n){let e,t,i,s,r,o;return{c(){e=C("div"),t=C("div"),t.textContent="로그인하기",i=x(),s=C("button"),s.innerHTML='<img class="google-img svelte-1hcitc0" src="https://w7.pngwing.com/pngs/506/509/png-transparent-google-company-text-logo.png" alt=""/> <div>Google로 시작하기</div> <div></div>',w(s,"class","login-btn svelte-1hcitc0")},m(a,l){V(a,e,l),m(e,t),m(e,i),m(e,s),r||(o=we(s,"click",n[0]),r=!0)},p:B,i:B,o:B,d(a){a&&$(e),r=!1,o()}}}function kf(n){const e=new de,t=Ms();return[async()=>{try{const s=await Ld(t,e),o=de.credentialFromResult(s).accessToken,a=s.user;Zn.set(a),localStorage.setItem("token",o)}catch(s){console.error(s)}}]}class Nf extends ke{constructor(e){super(),Re(this,e,kf,Rf,ye,{})}}const io="@firebase/database",so="1.0.1";/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let el="";function Af(n){el=n}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pf{constructor(e){this.domStorage_=e,this.prefix_="firebase:"}set(e,t){t==null?this.domStorage_.removeItem(this.prefixedName_(e)):this.domStorage_.setItem(this.prefixedName_(e),Z(t))}get(e){const t=this.domStorage_.getItem(this.prefixedName_(e));return t==null?null:rn(t)}remove(e){this.domStorage_.removeItem(this.prefixedName_(e))}prefixedName_(e){return this.prefix_+e}toString(){return this.domStorage_.toString()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Of{constructor(){this.cache_={},this.isInMemoryStorage=!0}set(e,t){t==null?delete this.cache_[e]:this.cache_[e]=t}get(e){return Ue(this.cache_,e)?this.cache_[e]:null}remove(e){delete this.cache_[e]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const tl=function(n){try{if(typeof window<"u"&&typeof window[n]<"u"){const e=window[n];return e.setItem("firebase:sentinel","cache"),e.removeItem("firebase:sentinel"),new Pf(e)}}catch{}return new Of},st=tl("localStorage"),as=tl("sessionStorage");/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kt=new Ts("@firebase/database"),Df=function(){let n=1;return function(){return n++}}(),nl=function(n){const e=Eu(n),t=new mu;t.update(e);const i=t.digest();return Is.encodeByteArray(i)},In=function(...n){let e="";for(let t=0;t<n.length;t++){const i=n[t];Array.isArray(i)||i&&typeof i=="object"&&typeof i.length=="number"?e+=In.apply(null,i):typeof i=="object"?e+=Z(i):e+=i,e+=" "}return e};let at=null,ro=!0;const xf=function(n,e){p(!e||n===!0||n===!1,"Can't turn on custom loggers persistently."),n===!0?(kt.logLevel=F.VERBOSE,at=kt.log.bind(kt),e&&as.set("logging_enabled",!0)):typeof n=="function"?at=n:(at=null,as.remove("logging_enabled"))},te=function(...n){if(ro===!0&&(ro=!1,at===null&&as.get("logging_enabled")===!0&&xf(!0)),at){const e=In.apply(null,n);at(e)}},bn=function(n){return function(...e){te(n,...e)}},ls=function(...n){const e="FIREBASE INTERNAL ERROR: "+In(...n);kt.error(e)},xe=function(...n){const e=`FIREBASE FATAL ERROR: ${In(...n)}`;throw kt.error(e),new Error(e)},le=function(...n){const e="FIREBASE WARNING: "+In(...n);kt.warn(e)},Lf=function(){typeof window<"u"&&window.location&&window.location.protocol&&window.location.protocol.indexOf("https:")!==-1&&le("Insecure Firebase access from a secure page. Please use https in calls to new Firebase().")},il=function(n){return typeof n=="number"&&(n!==n||n===Number.POSITIVE_INFINITY||n===Number.NEGATIVE_INFINITY)},Mf=function(n){if(document.readyState==="complete")n();else{let e=!1;const t=function(){if(!document.body){setTimeout(t,Math.floor(10));return}e||(e=!0,n())};document.addEventListener?(document.addEventListener("DOMContentLoaded",t,!1),window.addEventListener("load",t,!1)):document.attachEvent&&(document.attachEvent("onreadystatechange",()=>{document.readyState==="complete"&&t()}),window.attachEvent("onload",t))}},xt="[MIN_NAME]",dt="[MAX_NAME]",Bt=function(n,e){if(n===e)return 0;if(n===xt||e===dt)return-1;if(e===xt||n===dt)return 1;{const t=oo(n),i=oo(e);return t!==null?i!==null?t-i===0?n.length-e.length:t-i:-1:i!==null?1:n<e?-1:1}},Uf=function(n,e){return n===e?0:n<e?-1:1},jt=function(n,e){if(e&&n in e)return e[n];throw new Error("Missing required key ("+n+") in object: "+Z(e))},Fs=function(n){if(typeof n!="object"||n===null)return Z(n);const e=[];for(const i in n)e.push(i);e.sort();let t="{";for(let i=0;i<e.length;i++)i!==0&&(t+=","),t+=Z(e[i]),t+=":",t+=Fs(n[e[i]]);return t+="}",t},sl=function(n,e){const t=n.length;if(t<=e)return[n];const i=[];for(let s=0;s<t;s+=e)s+e>t?i.push(n.substring(s,t)):i.push(n.substring(s,s+e));return i};function ue(n,e){for(const t in n)n.hasOwnProperty(t)&&e(t,n[t])}const rl=function(n){p(!il(n),"Invalid JSON number");const e=11,t=52,i=(1<<e-1)-1;let s,r,o,a,l;n===0?(r=0,o=0,s=1/n===-1/0?1:0):(s=n<0,n=Math.abs(n),n>=Math.pow(2,1-i)?(a=Math.min(Math.floor(Math.log(n)/Math.LN2),i),r=a+i,o=Math.round(n*Math.pow(2,t-a)-Math.pow(2,t))):(r=0,o=Math.round(n/Math.pow(2,1-i-t))));const c=[];for(l=t;l;l-=1)c.push(o%2?1:0),o=Math.floor(o/2);for(l=e;l;l-=1)c.push(r%2?1:0),r=Math.floor(r/2);c.push(s?1:0),c.reverse();const u=c.join("");let h="";for(l=0;l<64;l+=8){let d=parseInt(u.substr(l,8),2).toString(16);d.length===1&&(d="0"+d),h=h+d}return h.toLowerCase()},Ff=function(){return!!(typeof window=="object"&&window.chrome&&window.chrome.extension&&!/^chrome/.test(window.location.href))},$f=function(){return typeof Windows=="object"&&typeof Windows.UI=="object"};function Bf(n,e){let t="Unknown Error";n==="too_big"?t="The data requested exceeds the maximum size that can be accessed with a single request.":n==="permission_denied"?t="Client doesn't have permission to access the desired data.":n==="unavailable"&&(t="The service is unavailable");const i=new Error(n+" at "+e._path.toString()+": "+t);return i.code=n.toUpperCase(),i}const Wf=new RegExp("^-?(0*)\\d{1,10}$"),Hf=-2147483648,Vf=2147483647,oo=function(n){if(Wf.test(n)){const e=Number(n);if(e>=Hf&&e<=Vf)return e}return null},Wt=function(n){try{n()}catch(e){setTimeout(()=>{const t=e.stack||"";throw le("Exception was thrown by user callback.",t),e},Math.floor(0))}},jf=function(){return(typeof window=="object"&&window.navigator&&window.navigator.userAgent||"").search(/googlebot|google webmaster tools|bingbot|yahoo! slurp|baiduspider|yandexbot|duckduckbot/i)>=0},Jt=function(n,e){const t=setTimeout(n,e);return typeof t=="number"&&typeof Deno<"u"&&Deno.unrefTimer?Deno.unrefTimer(t):typeof t=="object"&&t.unref&&t.unref(),t};/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qf{constructor(e,t){this.appName_=e,this.appCheckProvider=t,this.appCheck=t==null?void 0:t.getImmediate({optional:!0}),this.appCheck||t==null||t.get().then(i=>this.appCheck=i)}getToken(e){return this.appCheck?this.appCheck.getToken(e):new Promise((t,i)=>{setTimeout(()=>{this.appCheck?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){var t;(t=this.appCheckProvider)===null||t===void 0||t.get().then(i=>i.addTokenListener(e))}notifyForInvalidToken(){le(`Provided AppCheck credentials for the app named "${this.appName_}" are invalid. This usually indicates your app was not initialized correctly.`)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zf{constructor(e,t,i){this.appName_=e,this.firebaseOptions_=t,this.authProvider_=i,this.auth_=null,this.auth_=i.getImmediate({optional:!0}),this.auth_||i.onInit(s=>this.auth_=s)}getToken(e){return this.auth_?this.auth_.getToken(e).catch(t=>t&&t.code==="auth/token-not-initialized"?(te("Got auth/token-not-initialized error.  Treating as null token."),null):Promise.reject(t)):new Promise((t,i)=>{setTimeout(()=>{this.auth_?this.getToken(e).then(t,i):t(null)},0)})}addTokenChangeListener(e){this.auth_?this.auth_.addAuthTokenListener(e):this.authProvider_.get().then(t=>t.addAuthTokenListener(e))}removeTokenChangeListener(e){this.authProvider_.get().then(t=>t.removeAuthTokenListener(e))}notifyForInvalidToken(){let e='Provided authentication credentials for the app named "'+this.appName_+'" are invalid. This usually indicates your app was not initialized correctly. ';"credential"in this.firebaseOptions_?e+='Make sure the "credential" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':"serviceAccount"in this.firebaseOptions_?e+='Make sure the "serviceAccount" property provided to initializeApp() is authorized to access the specified "databaseURL" and is from the correct project.':e+='Make sure the "apiKey" and "databaseURL" properties provided to initializeApp() match the values provided for your app at https://console.firebase.google.com/.',le(e)}}class Nt{constructor(e){this.accessToken=e}getToken(e){return Promise.resolve({accessToken:this.accessToken})}addTokenChangeListener(e){e(this.accessToken)}removeTokenChangeListener(e){}notifyForInvalidToken(){}}Nt.OWNER="owner";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $s="5",ol="v",al="s",ll="r",cl="f",ul=/(console\.firebase|firebase-console-\w+\.corp|firebase\.corp)\.google\.com/,hl="ls",dl="p",cs="ac",fl="websocket",_l="long_polling";/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pl{constructor(e,t,i,s,r=!1,o="",a=!1,l=!1){this.secure=t,this.namespace=i,this.webSocketOnly=s,this.nodeAdmin=r,this.persistenceKey=o,this.includeNamespaceInQueryParams=a,this.isUsingEmulator=l,this._host=e.toLowerCase(),this._domain=this._host.substr(this._host.indexOf(".")+1),this.internalHost=st.get("host:"+e)||this._host}isCacheableHost(){return this.internalHost.substr(0,2)==="s-"}isCustomHost(){return this._domain!=="firebaseio.com"&&this._domain!=="firebaseio-demo.com"}get host(){return this._host}set host(e){e!==this.internalHost&&(this.internalHost=e,this.isCacheableHost()&&st.set("host:"+this._host,this.internalHost))}toString(){let e=this.toURLString();return this.persistenceKey&&(e+="<"+this.persistenceKey+">"),e}toURLString(){const e=this.secure?"https://":"http://",t=this.includeNamespaceInQueryParams?`?ns=${this.namespace}`:"";return`${e}${this.host}/${t}`}}function Gf(n){return n.host!==n.internalHost||n.isCustomHost()||n.includeNamespaceInQueryParams}function gl(n,e,t){p(typeof e=="string","typeof type must == string"),p(typeof t=="object","typeof params must == object");let i;if(e===fl)i=(n.secure?"wss://":"ws://")+n.internalHost+"/.ws?";else if(e===_l)i=(n.secure?"https://":"http://")+n.internalHost+"/.lp?";else throw new Error("Unknown connection type: "+e);Gf(n)&&(t.ns=n.namespace);const s=[];return ue(t,(r,o)=>{s.push(r+"="+o)}),i+s.join("&")}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kf{constructor(){this.counters_={}}incrementCounter(e,t=1){Ue(this.counters_,e)||(this.counters_[e]=0),this.counters_[e]+=t}get(){return tu(this.counters_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hi={},Vi={};function Bs(n){const e=n.toString();return Hi[e]||(Hi[e]=new Kf),Hi[e]}function Yf(n,e){const t=n.toString();return Vi[t]||(Vi[t]=e()),Vi[t]}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qf{constructor(e){this.onMessage_=e,this.pendingResponses=[],this.currentResponseNum=0,this.closeAfterResponse=-1,this.onClose=null}closeAfter(e,t){this.closeAfterResponse=e,this.onClose=t,this.closeAfterResponse<this.currentResponseNum&&(this.onClose(),this.onClose=null)}handleResponse(e,t){for(this.pendingResponses[e]=t;this.pendingResponses[this.currentResponseNum];){const i=this.pendingResponses[this.currentResponseNum];delete this.pendingResponses[this.currentResponseNum];for(let s=0;s<i.length;++s)i[s]&&Wt(()=>{this.onMessage_(i[s])});if(this.currentResponseNum===this.closeAfterResponse){this.onClose&&(this.onClose(),this.onClose=null);break}this.currentResponseNum++}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const ao="start",Xf="close",Jf="pLPCommand",Zf="pRTLPCB",ml="id",vl="pw",yl="ser",e_="cb",t_="seg",n_="ts",i_="d",s_="dframe",wl=1870,El=30,r_=wl-El,o_=25e3,a_=3e4;class Ct{constructor(e,t,i,s,r,o,a){this.connId=e,this.repoInfo=t,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.transportSessionId=o,this.lastSessionId=a,this.bytesSent=0,this.bytesReceived=0,this.everConnected_=!1,this.log_=bn(e),this.stats_=Bs(t),this.urlFn=l=>(this.appCheckToken&&(l[cs]=this.appCheckToken),gl(t,_l,l))}open(e,t){this.curSegmentNum=0,this.onDisconnect_=t,this.myPacketOrderer=new Qf(e),this.isClosed_=!1,this.connectTimeoutTimer_=setTimeout(()=>{this.log_("Timed out trying to connect."),this.onClosed_(),this.connectTimeoutTimer_=null},Math.floor(a_)),Mf(()=>{if(this.isClosed_)return;this.scriptTagHolder=new Ws((...r)=>{const[o,a,l,c,u]=r;if(this.incrementIncomingBytes_(r),!!this.scriptTagHolder)if(this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null),this.everConnected_=!0,o===ao)this.id=a,this.password=l;else if(o===Xf)a?(this.scriptTagHolder.sendNewPolls=!1,this.myPacketOrderer.closeAfter(a,()=>{this.onClosed_()})):this.onClosed_();else throw new Error("Unrecognized command received: "+o)},(...r)=>{const[o,a]=r;this.incrementIncomingBytes_(r),this.myPacketOrderer.handleResponse(o,a)},()=>{this.onClosed_()},this.urlFn);const i={};i[ao]="t",i[yl]=Math.floor(Math.random()*1e8),this.scriptTagHolder.uniqueCallbackIdentifier&&(i[e_]=this.scriptTagHolder.uniqueCallbackIdentifier),i[ol]=$s,this.transportSessionId&&(i[al]=this.transportSessionId),this.lastSessionId&&(i[hl]=this.lastSessionId),this.applicationId&&(i[dl]=this.applicationId),this.appCheckToken&&(i[cs]=this.appCheckToken),typeof location<"u"&&location.hostname&&ul.test(location.hostname)&&(i[ll]=cl);const s=this.urlFn(i);this.log_("Connecting via long-poll to "+s),this.scriptTagHolder.addTag(s,()=>{})})}start(){this.scriptTagHolder.startLongPoll(this.id,this.password),this.addDisconnectPingFrame(this.id,this.password)}static forceAllow(){Ct.forceAllow_=!0}static forceDisallow(){Ct.forceDisallow_=!0}static isAvailable(){return Ct.forceAllow_?!0:!Ct.forceDisallow_&&typeof document<"u"&&document.createElement!=null&&!Ff()&&!$f()}markConnectionHealthy(){}shutdown_(){this.isClosed_=!0,this.scriptTagHolder&&(this.scriptTagHolder.close(),this.scriptTagHolder=null),this.myDisconnFrame&&(document.body.removeChild(this.myDisconnFrame),this.myDisconnFrame=null),this.connectTimeoutTimer_&&(clearTimeout(this.connectTimeoutTimer_),this.connectTimeoutTimer_=null)}onClosed_(){this.isClosed_||(this.log_("Longpoll is closing itself"),this.shutdown_(),this.onDisconnect_&&(this.onDisconnect_(this.everConnected_),this.onDisconnect_=null))}close(){this.isClosed_||(this.log_("Longpoll is being closed."),this.shutdown_())}send(e){const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=ra(t),s=sl(i,r_);for(let r=0;r<s.length;r++)this.scriptTagHolder.enqueueSegment(this.curSegmentNum,s.length,s[r]),this.curSegmentNum++}addDisconnectPingFrame(e,t){this.myDisconnFrame=document.createElement("iframe");const i={};i[s_]="t",i[ml]=e,i[vl]=t,this.myDisconnFrame.src=this.urlFn(i),this.myDisconnFrame.style.display="none",document.body.appendChild(this.myDisconnFrame)}incrementIncomingBytes_(e){const t=Z(e).length;this.bytesReceived+=t,this.stats_.incrementCounter("bytes_received",t)}}class Ws{constructor(e,t,i,s){this.onDisconnect=i,this.urlFn=s,this.outstandingRequests=new Set,this.pendingSegs=[],this.currentSerial=Math.floor(Math.random()*1e8),this.sendNewPolls=!0;{this.uniqueCallbackIdentifier=Df(),window[Jf+this.uniqueCallbackIdentifier]=e,window[Zf+this.uniqueCallbackIdentifier]=t,this.myIFrame=Ws.createIFrame_();let r="";this.myIFrame.src&&this.myIFrame.src.substr(0,11)==="javascript:"&&(r='<script>document.domain="'+document.domain+'";<\/script>');const o="<html><body>"+r+"</body></html>";try{this.myIFrame.doc.open(),this.myIFrame.doc.write(o),this.myIFrame.doc.close()}catch(a){te("frame writing exception"),a.stack&&te(a.stack),te(a)}}}static createIFrame_(){const e=document.createElement("iframe");if(e.style.display="none",document.body){document.body.appendChild(e);try{e.contentWindow.document||te("No IE domain setting required")}catch{const i=document.domain;e.src="javascript:void((function(){document.open();document.domain='"+i+"';document.close();})())"}}else throw"Document body has not initialized. Wait to initialize Firebase until after the document is ready.";return e.contentDocument?e.doc=e.contentDocument:e.contentWindow?e.doc=e.contentWindow.document:e.document&&(e.doc=e.document),e}close(){this.alive=!1,this.myIFrame&&(this.myIFrame.doc.body.textContent="",setTimeout(()=>{this.myIFrame!==null&&(document.body.removeChild(this.myIFrame),this.myIFrame=null)},Math.floor(0)));const e=this.onDisconnect;e&&(this.onDisconnect=null,e())}startLongPoll(e,t){for(this.myID=e,this.myPW=t,this.alive=!0;this.newRequest_(););}newRequest_(){if(this.alive&&this.sendNewPolls&&this.outstandingRequests.size<(this.pendingSegs.length>0?2:1)){this.currentSerial++;const e={};e[ml]=this.myID,e[vl]=this.myPW,e[yl]=this.currentSerial;let t=this.urlFn(e),i="",s=0;for(;this.pendingSegs.length>0&&this.pendingSegs[0].d.length+El+i.length<=wl;){const o=this.pendingSegs.shift();i=i+"&"+t_+s+"="+o.seg+"&"+n_+s+"="+o.ts+"&"+i_+s+"="+o.d,s++}return t=t+i,this.addLongPollTag_(t,this.currentSerial),!0}else return!1}enqueueSegment(e,t,i){this.pendingSegs.push({seg:e,ts:t,d:i}),this.alive&&this.newRequest_()}addLongPollTag_(e,t){this.outstandingRequests.add(t);const i=()=>{this.outstandingRequests.delete(t),this.newRequest_()},s=setTimeout(i,Math.floor(o_)),r=()=>{clearTimeout(s),i()};this.addTag(e,r)}addTag(e,t){setTimeout(()=>{try{if(!this.sendNewPolls)return;const i=this.myIFrame.doc.createElement("script");i.type="text/javascript",i.async=!0,i.src=e,i.onload=i.onreadystatechange=function(){const s=i.readyState;(!s||s==="loaded"||s==="complete")&&(i.onload=i.onreadystatechange=null,i.parentNode&&i.parentNode.removeChild(i),t())},i.onerror=()=>{te("Long-poll script failed to load: "+e),this.sendNewPolls=!1,this.close()},this.myIFrame.doc.body.appendChild(i)}catch{}},Math.floor(1))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l_=16384,c_=45e3;let ei=null;typeof MozWebSocket<"u"?ei=MozWebSocket:typeof WebSocket<"u"&&(ei=WebSocket);class fe{constructor(e,t,i,s,r,o,a){this.connId=e,this.applicationId=i,this.appCheckToken=s,this.authToken=r,this.keepaliveTimer=null,this.frames=null,this.totalFrames=0,this.bytesSent=0,this.bytesReceived=0,this.log_=bn(this.connId),this.stats_=Bs(t),this.connURL=fe.connectionURL_(t,o,a,s,i),this.nodeAdmin=t.nodeAdmin}static connectionURL_(e,t,i,s,r){const o={};return o[ol]=$s,typeof location<"u"&&location.hostname&&ul.test(location.hostname)&&(o[ll]=cl),t&&(o[al]=t),i&&(o[hl]=i),s&&(o[cs]=s),r&&(o[dl]=r),gl(e,fl,o)}open(e,t){this.onDisconnect=t,this.onMessage=e,this.log_("Websocket connecting to "+this.connURL),this.everConnected_=!1,st.set("previous_websocket_failure",!0);try{let i;fa(),this.mySock=new ei(this.connURL,[],i)}catch(i){this.log_("Error instantiating WebSocket.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_();return}this.mySock.onopen=()=>{this.log_("Websocket connected."),this.everConnected_=!0},this.mySock.onclose=()=>{this.log_("Websocket connection was disconnected."),this.mySock=null,this.onClosed_()},this.mySock.onmessage=i=>{this.handleIncomingFrame(i)},this.mySock.onerror=i=>{this.log_("WebSocket error.  Closing connection.");const s=i.message||i.data;s&&this.log_(s),this.onClosed_()}}start(){}static forceDisallow(){fe.forceDisallow_=!0}static isAvailable(){let e=!1;if(typeof navigator<"u"&&navigator.userAgent){const t=/Android ([0-9]{0,}\.[0-9]{0,})/,i=navigator.userAgent.match(t);i&&i.length>1&&parseFloat(i[1])<4.4&&(e=!0)}return!e&&ei!==null&&!fe.forceDisallow_}static previouslyFailed(){return st.isInMemoryStorage||st.get("previous_websocket_failure")===!0}markConnectionHealthy(){st.remove("previous_websocket_failure")}appendFrame_(e){if(this.frames.push(e),this.frames.length===this.totalFrames){const t=this.frames.join("");this.frames=null;const i=rn(t);this.onMessage(i)}}handleNewFrameCount_(e){this.totalFrames=e,this.frames=[]}extractFrameCount_(e){if(p(this.frames===null,"We already have a frame buffer"),e.length<=6){const t=Number(e);if(!isNaN(t))return this.handleNewFrameCount_(t),null}return this.handleNewFrameCount_(1),e}handleIncomingFrame(e){if(this.mySock===null)return;const t=e.data;if(this.bytesReceived+=t.length,this.stats_.incrementCounter("bytes_received",t.length),this.resetKeepAlive(),this.frames!==null)this.appendFrame_(t);else{const i=this.extractFrameCount_(t);i!==null&&this.appendFrame_(i)}}send(e){this.resetKeepAlive();const t=Z(e);this.bytesSent+=t.length,this.stats_.incrementCounter("bytes_sent",t.length);const i=sl(t,l_);i.length>1&&this.sendString_(String(i.length));for(let s=0;s<i.length;s++)this.sendString_(i[s])}shutdown_(){this.isClosed_=!0,this.keepaliveTimer&&(clearInterval(this.keepaliveTimer),this.keepaliveTimer=null),this.mySock&&(this.mySock.close(),this.mySock=null)}onClosed_(){this.isClosed_||(this.log_("WebSocket is closing itself"),this.shutdown_(),this.onDisconnect&&(this.onDisconnect(this.everConnected_),this.onDisconnect=null))}close(){this.isClosed_||(this.log_("WebSocket is being closed"),this.shutdown_())}resetKeepAlive(){clearInterval(this.keepaliveTimer),this.keepaliveTimer=setInterval(()=>{this.mySock&&this.sendString_("0"),this.resetKeepAlive()},Math.floor(c_))}sendString_(e){try{this.mySock.send(e)}catch(t){this.log_("Exception thrown from WebSocket.send():",t.message||t.data,"Closing connection."),setTimeout(this.onClosed_.bind(this),0)}}}fe.responsesRequiredToBeHealthy=2;fe.healthyTimeout=3e4;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class cn{constructor(e){this.initTransports_(e)}static get ALL_TRANSPORTS(){return[Ct,fe]}static get IS_TRANSPORT_INITIALIZED(){return this.globalTransportInitialized_}initTransports_(e){const t=fe&&fe.isAvailable();let i=t&&!fe.previouslyFailed();if(e.webSocketOnly&&(t||le("wss:// URL used, but browser isn't known to support websockets.  Trying anyway."),i=!0),i)this.transports_=[fe];else{const s=this.transports_=[];for(const r of cn.ALL_TRANSPORTS)r&&r.isAvailable()&&s.push(r);cn.globalTransportInitialized_=!0}}initialTransport(){if(this.transports_.length>0)return this.transports_[0];throw new Error("No transports available")}upgradeTransport(){return this.transports_.length>1?this.transports_[1]:null}}cn.globalTransportInitialized_=!1;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const u_=6e4,h_=5e3,d_=10*1024,f_=100*1024,ji="t",lo="d",__="s",co="r",p_="e",uo="o",ho="a",fo="n",_o="p",g_="h";class m_{constructor(e,t,i,s,r,o,a,l,c,u){this.id=e,this.repoInfo_=t,this.applicationId_=i,this.appCheckToken_=s,this.authToken_=r,this.onMessage_=o,this.onReady_=a,this.onDisconnect_=l,this.onKill_=c,this.lastSessionId=u,this.connectionCount=0,this.pendingDataMessages=[],this.state_=0,this.log_=bn("c:"+this.id+":"),this.transportManager_=new cn(t),this.log_("Connection created"),this.start_()}start_(){const e=this.transportManager_.initialTransport();this.conn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,null,this.lastSessionId),this.primaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.conn_),i=this.disconnReceiver_(this.conn_);this.tx_=this.conn_,this.rx_=this.conn_,this.secondaryConn_=null,this.isHealthy_=!1,setTimeout(()=>{this.conn_&&this.conn_.open(t,i)},Math.floor(0));const s=e.healthyTimeout||0;s>0&&(this.healthyTimeout_=Jt(()=>{this.healthyTimeout_=null,this.isHealthy_||(this.conn_&&this.conn_.bytesReceived>f_?(this.log_("Connection exceeded healthy timeout but has received "+this.conn_.bytesReceived+" bytes.  Marking connection healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()):this.conn_&&this.conn_.bytesSent>d_?this.log_("Connection exceeded healthy timeout but has sent "+this.conn_.bytesSent+" bytes.  Leaving connection alive."):(this.log_("Closing unhealthy connection after timeout."),this.close()))},Math.floor(s)))}nextTransportId_(){return"c:"+this.id+":"+this.connectionCount++}disconnReceiver_(e){return t=>{e===this.conn_?this.onConnectionLost_(t):e===this.secondaryConn_?(this.log_("Secondary connection lost."),this.onSecondaryConnectionLost_()):this.log_("closing an old connection")}}connReceiver_(e){return t=>{this.state_!==2&&(e===this.rx_?this.onPrimaryMessageReceived_(t):e===this.secondaryConn_?this.onSecondaryMessageReceived_(t):this.log_("message on old connection"))}}sendRequest(e){const t={t:"d",d:e};this.sendData_(t)}tryCleanupConnection(){this.tx_===this.secondaryConn_&&this.rx_===this.secondaryConn_&&(this.log_("cleaning up and promoting a connection: "+this.secondaryConn_.connId),this.conn_=this.secondaryConn_,this.secondaryConn_=null)}onSecondaryControl_(e){if(ji in e){const t=e[ji];t===ho?this.upgradeIfSecondaryHealthy_():t===co?(this.log_("Got a reset on secondary, closing it"),this.secondaryConn_.close(),(this.tx_===this.secondaryConn_||this.rx_===this.secondaryConn_)&&this.close()):t===uo&&(this.log_("got pong on secondary."),this.secondaryResponsesRequired_--,this.upgradeIfSecondaryHealthy_())}}onSecondaryMessageReceived_(e){const t=jt("t",e),i=jt("d",e);if(t==="c")this.onSecondaryControl_(i);else if(t==="d")this.pendingDataMessages.push(i);else throw new Error("Unknown protocol layer: "+t)}upgradeIfSecondaryHealthy_(){this.secondaryResponsesRequired_<=0?(this.log_("Secondary connection is healthy."),this.isHealthy_=!0,this.secondaryConn_.markConnectionHealthy(),this.proceedWithUpgrade_()):(this.log_("sending ping on secondary."),this.secondaryConn_.send({t:"c",d:{t:_o,d:{}}}))}proceedWithUpgrade_(){this.secondaryConn_.start(),this.log_("sending client ack on secondary"),this.secondaryConn_.send({t:"c",d:{t:ho,d:{}}}),this.log_("Ending transmission on primary"),this.conn_.send({t:"c",d:{t:fo,d:{}}}),this.tx_=this.secondaryConn_,this.tryCleanupConnection()}onPrimaryMessageReceived_(e){const t=jt("t",e),i=jt("d",e);t==="c"?this.onControl_(i):t==="d"&&this.onDataMessage_(i)}onDataMessage_(e){this.onPrimaryResponse_(),this.onMessage_(e)}onPrimaryResponse_(){this.isHealthy_||(this.primaryResponsesRequired_--,this.primaryResponsesRequired_<=0&&(this.log_("Primary connection is healthy."),this.isHealthy_=!0,this.conn_.markConnectionHealthy()))}onControl_(e){const t=jt(ji,e);if(lo in e){const i=e[lo];if(t===g_){const s=Object.assign({},i);this.repoInfo_.isUsingEmulator&&(s.h=this.repoInfo_.host),this.onHandshake_(s)}else if(t===fo){this.log_("recvd end transmission on primary"),this.rx_=this.secondaryConn_;for(let s=0;s<this.pendingDataMessages.length;++s)this.onDataMessage_(this.pendingDataMessages[s]);this.pendingDataMessages=[],this.tryCleanupConnection()}else t===__?this.onConnectionShutdown_(i):t===co?this.onReset_(i):t===p_?ls("Server Error: "+i):t===uo?(this.log_("got pong on primary."),this.onPrimaryResponse_(),this.sendPingOnPrimaryIfNecessary_()):ls("Unknown control packet command: "+t)}}onHandshake_(e){const t=e.ts,i=e.v,s=e.h;this.sessionId=e.s,this.repoInfo_.host=s,this.state_===0&&(this.conn_.start(),this.onConnectionEstablished_(this.conn_,t),$s!==i&&le("Protocol version mismatch detected"),this.tryStartUpgrade_())}tryStartUpgrade_(){const e=this.transportManager_.upgradeTransport();e&&this.startUpgrade_(e)}startUpgrade_(e){this.secondaryConn_=new e(this.nextTransportId_(),this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,this.sessionId),this.secondaryResponsesRequired_=e.responsesRequiredToBeHealthy||0;const t=this.connReceiver_(this.secondaryConn_),i=this.disconnReceiver_(this.secondaryConn_);this.secondaryConn_.open(t,i),Jt(()=>{this.secondaryConn_&&(this.log_("Timed out trying to upgrade."),this.secondaryConn_.close())},Math.floor(u_))}onReset_(e){this.log_("Reset packet received.  New host: "+e),this.repoInfo_.host=e,this.state_===1?this.close():(this.closeConnections_(),this.start_())}onConnectionEstablished_(e,t){this.log_("Realtime connection established."),this.conn_=e,this.state_=1,this.onReady_&&(this.onReady_(t,this.sessionId),this.onReady_=null),this.primaryResponsesRequired_===0?(this.log_("Primary connection is healthy."),this.isHealthy_=!0):Jt(()=>{this.sendPingOnPrimaryIfNecessary_()},Math.floor(h_))}sendPingOnPrimaryIfNecessary_(){!this.isHealthy_&&this.state_===1&&(this.log_("sending ping on primary."),this.sendData_({t:"c",d:{t:_o,d:{}}}))}onSecondaryConnectionLost_(){const e=this.secondaryConn_;this.secondaryConn_=null,(this.tx_===e||this.rx_===e)&&this.close()}onConnectionLost_(e){this.conn_=null,!e&&this.state_===0?(this.log_("Realtime connection failed."),this.repoInfo_.isCacheableHost()&&(st.remove("host:"+this.repoInfo_.host),this.repoInfo_.internalHost=this.repoInfo_.host)):this.state_===1&&this.log_("Realtime connection lost."),this.close()}onConnectionShutdown_(e){this.log_("Connection shutdown command received. Shutting down..."),this.onKill_&&(this.onKill_(e),this.onKill_=null),this.onDisconnect_=null,this.close()}sendData_(e){if(this.state_!==1)throw"Connection is not connected";this.tx_.send(e)}close(){this.state_!==2&&(this.log_("Closing realtime connection."),this.state_=2,this.closeConnections_(),this.onDisconnect_&&(this.onDisconnect_(),this.onDisconnect_=null))}closeConnections_(){this.log_("Shutting down all connections"),this.conn_&&(this.conn_.close(),this.conn_=null),this.secondaryConn_&&(this.secondaryConn_.close(),this.secondaryConn_=null),this.healthyTimeout_&&(clearTimeout(this.healthyTimeout_),this.healthyTimeout_=null)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Il{put(e,t,i,s){}merge(e,t,i,s){}refreshAuthToken(e){}refreshAppCheckToken(e){}onDisconnectPut(e,t,i){}onDisconnectMerge(e,t,i){}onDisconnectCancel(e,t){}reportStats(e){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bl{constructor(e){this.allowedEvents_=e,this.listeners_={},p(Array.isArray(e)&&e.length>0,"Requires a non-empty array")}trigger(e,...t){if(Array.isArray(this.listeners_[e])){const i=[...this.listeners_[e]];for(let s=0;s<i.length;s++)i[s].callback.apply(i[s].context,t)}}on(e,t,i){this.validateEventType_(e),this.listeners_[e]=this.listeners_[e]||[],this.listeners_[e].push({callback:t,context:i});const s=this.getInitialEvent(e);s&&t.apply(i,s)}off(e,t,i){this.validateEventType_(e);const s=this.listeners_[e]||[];for(let r=0;r<s.length;r++)if(s[r].callback===t&&(!i||i===s[r].context)){s.splice(r,1);return}}validateEventType_(e){p(this.allowedEvents_.find(t=>t===e),"Unknown event: "+e)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ti extends bl{constructor(){super(["online"]),this.online_=!0,typeof window<"u"&&typeof window.addEventListener<"u"&&!bs()&&(window.addEventListener("online",()=>{this.online_||(this.online_=!0,this.trigger("online",!0))},!1),window.addEventListener("offline",()=>{this.online_&&(this.online_=!1,this.trigger("online",!1))},!1))}static getInstance(){return new ti}getInitialEvent(e){return p(e==="online","Unknown event type: "+e),[this.online_]}currentlyOnline(){return this.online_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const po=32,go=768;class W{constructor(e,t){if(t===void 0){this.pieces_=e.split("/");let i=0;for(let s=0;s<this.pieces_.length;s++)this.pieces_[s].length>0&&(this.pieces_[i]=this.pieces_[s],i++);this.pieces_.length=i,this.pieceNum_=0}else this.pieces_=e,this.pieceNum_=t}toString(){let e="";for(let t=this.pieceNum_;t<this.pieces_.length;t++)this.pieces_[t]!==""&&(e+="/"+this.pieces_[t]);return e||"/"}}function L(){return new W("")}function N(n){return n.pieceNum_>=n.pieces_.length?null:n.pieces_[n.pieceNum_]}function Qe(n){return n.pieces_.length-n.pieceNum_}function H(n){let e=n.pieceNum_;return e<n.pieces_.length&&e++,new W(n.pieces_,e)}function Cl(n){return n.pieceNum_<n.pieces_.length?n.pieces_[n.pieces_.length-1]:null}function v_(n){let e="";for(let t=n.pieceNum_;t<n.pieces_.length;t++)n.pieces_[t]!==""&&(e+="/"+encodeURIComponent(String(n.pieces_[t])));return e||"/"}function Tl(n,e=0){return n.pieces_.slice(n.pieceNum_+e)}function Sl(n){if(n.pieceNum_>=n.pieces_.length)return null;const e=[];for(let t=n.pieceNum_;t<n.pieces_.length-1;t++)e.push(n.pieces_[t]);return new W(e,0)}function Y(n,e){const t=[];for(let i=n.pieceNum_;i<n.pieces_.length;i++)t.push(n.pieces_[i]);if(e instanceof W)for(let i=e.pieceNum_;i<e.pieces_.length;i++)t.push(e.pieces_[i]);else{const i=e.split("/");for(let s=0;s<i.length;s++)i[s].length>0&&t.push(i[s])}return new W(t,0)}function P(n){return n.pieceNum_>=n.pieces_.length}function oe(n,e){const t=N(n),i=N(e);if(t===null)return e;if(t===i)return oe(H(n),H(e));throw new Error("INTERNAL ERROR: innerPath ("+e+") is not within outerPath ("+n+")")}function Hs(n,e){if(Qe(n)!==Qe(e))return!1;for(let t=n.pieceNum_,i=e.pieceNum_;t<=n.pieces_.length;t++,i++)if(n.pieces_[t]!==e.pieces_[i])return!1;return!0}function _e(n,e){let t=n.pieceNum_,i=e.pieceNum_;if(Qe(n)>Qe(e))return!1;for(;t<n.pieces_.length;){if(n.pieces_[t]!==e.pieces_[i])return!1;++t,++i}return!0}class y_{constructor(e,t){this.errorPrefix_=t,this.parts_=Tl(e,0),this.byteLength_=Math.max(1,this.parts_.length);for(let i=0;i<this.parts_.length;i++)this.byteLength_+=vi(this.parts_[i]);Rl(this)}}function w_(n,e){n.parts_.length>0&&(n.byteLength_+=1),n.parts_.push(e),n.byteLength_+=vi(e),Rl(n)}function E_(n){const e=n.parts_.pop();n.byteLength_-=vi(e),n.parts_.length>0&&(n.byteLength_-=1)}function Rl(n){if(n.byteLength_>go)throw new Error(n.errorPrefix_+"has a key path longer than "+go+" bytes ("+n.byteLength_+").");if(n.parts_.length>po)throw new Error(n.errorPrefix_+"path specified exceeds the maximum depth that can be written ("+po+") or object contains a cycle "+et(n))}function et(n){return n.parts_.length===0?"":"in property '"+n.parts_.join(".")+"'"}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vs extends bl{constructor(){super(["visible"]);let e,t;typeof document<"u"&&typeof document.addEventListener<"u"&&(typeof document.hidden<"u"?(t="visibilitychange",e="hidden"):typeof document.mozHidden<"u"?(t="mozvisibilitychange",e="mozHidden"):typeof document.msHidden<"u"?(t="msvisibilitychange",e="msHidden"):typeof document.webkitHidden<"u"&&(t="webkitvisibilitychange",e="webkitHidden")),this.visible_=!0,t&&document.addEventListener(t,()=>{const i=!document[e];i!==this.visible_&&(this.visible_=i,this.trigger("visible",i))},!1)}static getInstance(){return new Vs}getInitialEvent(e){return p(e==="visible","Unknown event type: "+e),[this.visible_]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const qt=1e3,I_=60*5*1e3,mo=30*1e3,b_=1.3,C_=3e4,T_="server_kill",vo=3;class Oe extends Il{constructor(e,t,i,s,r,o,a,l){if(super(),this.repoInfo_=e,this.applicationId_=t,this.onDataUpdate_=i,this.onConnectStatus_=s,this.onServerInfoUpdate_=r,this.authTokenProvider_=o,this.appCheckTokenProvider_=a,this.authOverride_=l,this.id=Oe.nextPersistentConnectionId_++,this.log_=bn("p:"+this.id+":"),this.interruptReasons_={},this.listens=new Map,this.outstandingPuts_=[],this.outstandingGets_=[],this.outstandingPutCount_=0,this.outstandingGetCount_=0,this.onDisconnectRequestQueue_=[],this.connected_=!1,this.reconnectDelay_=qt,this.maxReconnectDelay_=I_,this.securityDebugCallback_=null,this.lastSessionId=null,this.establishConnectionTimer_=null,this.visible_=!1,this.requestCBHash_={},this.requestNumber_=0,this.realtime_=null,this.authToken_=null,this.appCheckToken_=null,this.forceTokenRefresh_=!1,this.invalidAuthTokenCount_=0,this.invalidAppCheckTokenCount_=0,this.firstConnection_=!0,this.lastConnectionAttemptTime_=null,this.lastConnectionEstablishedTime_=null,l&&!fa())throw new Error("Auth override specified in options, but not supported on non Node.js platforms");Vs.getInstance().on("visible",this.onVisible_,this),e.host.indexOf("fblocal")===-1&&ti.getInstance().on("online",this.onOnline_,this)}sendRequest(e,t,i){const s=++this.requestNumber_,r={r:s,a:e,b:t};this.log_(Z(r)),p(this.connected_,"sendRequest call when we're not connected not allowed."),this.realtime_.sendRequest(r),i&&(this.requestCBHash_[s]=i)}get(e){this.initConnection_();const t=new mi,s={action:"g",request:{p:e._path.toString(),q:e._queryObject},onComplete:o=>{const a=o.d;o.s==="ok"?t.resolve(a):t.reject(a)}};this.outstandingGets_.push(s),this.outstandingGetCount_++;const r=this.outstandingGets_.length-1;return this.connected_&&this.sendGet_(r),t.promise}listen(e,t,i,s){this.initConnection_();const r=e._queryIdentifier,o=e._path.toString();this.log_("Listen called for "+o+" "+r),this.listens.has(o)||this.listens.set(o,new Map),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"listen() called for non-default but complete query"),p(!this.listens.get(o).has(r),"listen() called twice for same path/queryId.");const a={onComplete:s,hashFn:t,query:e,tag:i};this.listens.get(o).set(r,a),this.connected_&&this.sendListen_(a)}sendGet_(e){const t=this.outstandingGets_[e];this.sendRequest("g",t.request,i=>{delete this.outstandingGets_[e],this.outstandingGetCount_--,this.outstandingGetCount_===0&&(this.outstandingGets_=[]),t.onComplete&&t.onComplete(i)})}sendListen_(e){const t=e.query,i=t._path.toString(),s=t._queryIdentifier;this.log_("Listen on "+i+" for "+s);const r={p:i},o="q";e.tag&&(r.q=t._queryObject,r.t=e.tag),r.h=e.hashFn(),this.sendRequest(o,r,a=>{const l=a.d,c=a.s;Oe.warnOnListenWarnings_(l,t),(this.listens.get(i)&&this.listens.get(i).get(s))===e&&(this.log_("listen response",a),c!=="ok"&&this.removeListen_(i,s),e.onComplete&&e.onComplete(c,l))})}static warnOnListenWarnings_(e,t){if(e&&typeof e=="object"&&Ue(e,"w")){const i=Ot(e,"w");if(Array.isArray(i)&&~i.indexOf("no_index")){const s='".indexOn": "'+t._queryParams.getIndex().toString()+'"',r=t._path.toString();le(`Using an unspecified index. Your data will be downloaded and filtered on the client. Consider adding ${s} at ${r} to your security rules for better performance.`)}}}refreshAuthToken(e){this.authToken_=e,this.log_("Auth token refreshed"),this.authToken_?this.tryAuth():this.connected_&&this.sendRequest("unauth",{},()=>{}),this.reduceReconnectDelayIfAdminCredential_(e)}reduceReconnectDelayIfAdminCredential_(e){(e&&e.length===40||gu(e))&&(this.log_("Admin auth credential detected.  Reducing max reconnect time."),this.maxReconnectDelay_=mo)}refreshAppCheckToken(e){this.appCheckToken_=e,this.log_("App check token refreshed"),this.appCheckToken_?this.tryAppCheck():this.connected_&&this.sendRequest("unappeck",{},()=>{})}tryAuth(){if(this.connected_&&this.authToken_){const e=this.authToken_,t=pu(e)?"auth":"gauth",i={cred:e};this.authOverride_===null?i.noauth=!0:typeof this.authOverride_=="object"&&(i.authvar=this.authOverride_),this.sendRequest(t,i,s=>{const r=s.s,o=s.d||"error";this.authToken_===e&&(r==="ok"?this.invalidAuthTokenCount_=0:this.onAuthRevoked_(r,o))})}}tryAppCheck(){this.connected_&&this.appCheckToken_&&this.sendRequest("appcheck",{token:this.appCheckToken_},e=>{const t=e.s,i=e.d||"error";t==="ok"?this.invalidAppCheckTokenCount_=0:this.onAppCheckRevoked_(t,i)})}unlisten(e,t){const i=e._path.toString(),s=e._queryIdentifier;this.log_("Unlisten called for "+i+" "+s),p(e._queryParams.isDefault()||!e._queryParams.loadsAllData(),"unlisten() called for non-default but complete query"),this.removeListen_(i,s)&&this.connected_&&this.sendUnlisten_(i,s,e._queryObject,t)}sendUnlisten_(e,t,i,s){this.log_("Unlisten on "+e+" for "+t);const r={p:e},o="n";s&&(r.q=i,r.t=s),this.sendRequest(o,r)}onDisconnectPut(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("o",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"o",data:t,onComplete:i})}onDisconnectMerge(e,t,i){this.initConnection_(),this.connected_?this.sendOnDisconnect_("om",e,t,i):this.onDisconnectRequestQueue_.push({pathString:e,action:"om",data:t,onComplete:i})}onDisconnectCancel(e,t){this.initConnection_(),this.connected_?this.sendOnDisconnect_("oc",e,null,t):this.onDisconnectRequestQueue_.push({pathString:e,action:"oc",data:null,onComplete:t})}sendOnDisconnect_(e,t,i,s){const r={p:t,d:i};this.log_("onDisconnect "+e,r),this.sendRequest(e,r,o=>{s&&setTimeout(()=>{s(o.s,o.d)},Math.floor(0))})}put(e,t,i,s){this.putInternal("p",e,t,i,s)}merge(e,t,i,s){this.putInternal("m",e,t,i,s)}putInternal(e,t,i,s,r){this.initConnection_();const o={p:t,d:i};r!==void 0&&(o.h=r),this.outstandingPuts_.push({action:e,request:o,onComplete:s}),this.outstandingPutCount_++;const a=this.outstandingPuts_.length-1;this.connected_?this.sendPut_(a):this.log_("Buffering put: "+t)}sendPut_(e){const t=this.outstandingPuts_[e].action,i=this.outstandingPuts_[e].request,s=this.outstandingPuts_[e].onComplete;this.outstandingPuts_[e].queued=this.connected_,this.sendRequest(t,i,r=>{this.log_(t+" response",r),delete this.outstandingPuts_[e],this.outstandingPutCount_--,this.outstandingPutCount_===0&&(this.outstandingPuts_=[]),s&&s(r.s,r.d)})}reportStats(e){if(this.connected_){const t={c:e};this.log_("reportStats",t),this.sendRequest("s",t,i=>{if(i.s!=="ok"){const r=i.d;this.log_("reportStats","Error sending stats: "+r)}})}}onDataMessage_(e){if("r"in e){this.log_("from server: "+Z(e));const t=e.r,i=this.requestCBHash_[t];i&&(delete this.requestCBHash_[t],i(e.b))}else{if("error"in e)throw"A server-side error has occurred: "+e.error;"a"in e&&this.onDataPush_(e.a,e.b)}}onDataPush_(e,t){this.log_("handleServerMessage",e,t),e==="d"?this.onDataUpdate_(t.p,t.d,!1,t.t):e==="m"?this.onDataUpdate_(t.p,t.d,!0,t.t):e==="c"?this.onListenRevoked_(t.p,t.q):e==="ac"?this.onAuthRevoked_(t.s,t.d):e==="apc"?this.onAppCheckRevoked_(t.s,t.d):e==="sd"?this.onSecurityDebugPacket_(t):ls("Unrecognized action received from server: "+Z(e)+`
Are you using the latest client?`)}onReady_(e,t){this.log_("connection ready"),this.connected_=!0,this.lastConnectionEstablishedTime_=new Date().getTime(),this.handleTimestamp_(e),this.lastSessionId=t,this.firstConnection_&&this.sendConnectStats_(),this.restoreState_(),this.firstConnection_=!1,this.onConnectStatus_(!0)}scheduleConnect_(e){p(!this.realtime_,"Scheduling a connect when we're already connected/ing?"),this.establishConnectionTimer_&&clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=setTimeout(()=>{this.establishConnectionTimer_=null,this.establishConnection_()},Math.floor(e))}initConnection_(){!this.realtime_&&this.firstConnection_&&this.scheduleConnect_(0)}onVisible_(e){e&&!this.visible_&&this.reconnectDelay_===this.maxReconnectDelay_&&(this.log_("Window became visible.  Reducing delay."),this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0)),this.visible_=e}onOnline_(e){e?(this.log_("Browser went online."),this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0)):(this.log_("Browser went offline.  Killing connection."),this.realtime_&&this.realtime_.close())}onRealtimeDisconnect_(){if(this.log_("data client disconnected"),this.connected_=!1,this.realtime_=null,this.cancelSentTransactions_(),this.requestCBHash_={},this.shouldReconnect_()){this.visible_?this.lastConnectionEstablishedTime_&&(new Date().getTime()-this.lastConnectionEstablishedTime_>C_&&(this.reconnectDelay_=qt),this.lastConnectionEstablishedTime_=null):(this.log_("Window isn't visible.  Delaying reconnect."),this.reconnectDelay_=this.maxReconnectDelay_,this.lastConnectionAttemptTime_=new Date().getTime());const e=new Date().getTime()-this.lastConnectionAttemptTime_;let t=Math.max(0,this.reconnectDelay_-e);t=Math.random()*t,this.log_("Trying to reconnect in "+t+"ms"),this.scheduleConnect_(t),this.reconnectDelay_=Math.min(this.maxReconnectDelay_,this.reconnectDelay_*b_)}this.onConnectStatus_(!1)}async establishConnection_(){if(this.shouldReconnect_()){this.log_("Making a connection attempt"),this.lastConnectionAttemptTime_=new Date().getTime(),this.lastConnectionEstablishedTime_=null;const e=this.onDataMessage_.bind(this),t=this.onReady_.bind(this),i=this.onRealtimeDisconnect_.bind(this),s=this.id+":"+Oe.nextConnectionId_++,r=this.lastSessionId;let o=!1,a=null;const l=function(){a?a.close():(o=!0,i())},c=function(h){p(a,"sendRequest call when we're not connected not allowed."),a.sendRequest(h)};this.realtime_={close:l,sendRequest:c};const u=this.forceTokenRefresh_;this.forceTokenRefresh_=!1;try{const[h,d]=await Promise.all([this.authTokenProvider_.getToken(u),this.appCheckTokenProvider_.getToken(u)]);o?te("getToken() completed but was canceled"):(te("getToken() completed. Creating connection."),this.authToken_=h&&h.accessToken,this.appCheckToken_=d&&d.token,a=new m_(s,this.repoInfo_,this.applicationId_,this.appCheckToken_,this.authToken_,e,t,i,f=>{le(f+" ("+this.repoInfo_.toString()+")"),this.interrupt(T_)},r))}catch(h){this.log_("Failed to get token: "+h),o||(this.repoInfo_.nodeAdmin&&le(h),l())}}}interrupt(e){te("Interrupting connection for reason: "+e),this.interruptReasons_[e]=!0,this.realtime_?this.realtime_.close():(this.establishConnectionTimer_&&(clearTimeout(this.establishConnectionTimer_),this.establishConnectionTimer_=null),this.connected_&&this.onRealtimeDisconnect_())}resume(e){te("Resuming connection for reason: "+e),delete this.interruptReasons_[e],Zi(this.interruptReasons_)&&(this.reconnectDelay_=qt,this.realtime_||this.scheduleConnect_(0))}handleTimestamp_(e){const t=e-new Date().getTime();this.onServerInfoUpdate_({serverTimeOffset:t})}cancelSentTransactions_(){for(let e=0;e<this.outstandingPuts_.length;e++){const t=this.outstandingPuts_[e];t&&"h"in t.request&&t.queued&&(t.onComplete&&t.onComplete("disconnect"),delete this.outstandingPuts_[e],this.outstandingPutCount_--)}this.outstandingPutCount_===0&&(this.outstandingPuts_=[])}onListenRevoked_(e,t){let i;t?i=t.map(r=>Fs(r)).join("$"):i="default";const s=this.removeListen_(e,i);s&&s.onComplete&&s.onComplete("permission_denied")}removeListen_(e,t){const i=new W(e).toString();let s;if(this.listens.has(i)){const r=this.listens.get(i);s=r.get(t),r.delete(t),r.size===0&&this.listens.delete(i)}else s=void 0;return s}onAuthRevoked_(e,t){te("Auth token revoked: "+e+"/"+t),this.authToken_=null,this.forceTokenRefresh_=!0,this.realtime_.close(),(e==="invalid_token"||e==="permission_denied")&&(this.invalidAuthTokenCount_++,this.invalidAuthTokenCount_>=vo&&(this.reconnectDelay_=mo,this.authTokenProvider_.notifyForInvalidToken()))}onAppCheckRevoked_(e,t){te("App check token revoked: "+e+"/"+t),this.appCheckToken_=null,this.forceTokenRefresh_=!0,(e==="invalid_token"||e==="permission_denied")&&(this.invalidAppCheckTokenCount_++,this.invalidAppCheckTokenCount_>=vo&&this.appCheckTokenProvider_.notifyForInvalidToken())}onSecurityDebugPacket_(e){this.securityDebugCallback_?this.securityDebugCallback_(e):"msg"in e&&console.log("FIREBASE: "+e.msg.replace(`
`,`
FIREBASE: `))}restoreState_(){this.tryAuth(),this.tryAppCheck();for(const e of this.listens.values())for(const t of e.values())this.sendListen_(t);for(let e=0;e<this.outstandingPuts_.length;e++)this.outstandingPuts_[e]&&this.sendPut_(e);for(;this.onDisconnectRequestQueue_.length;){const e=this.onDisconnectRequestQueue_.shift();this.sendOnDisconnect_(e.action,e.pathString,e.data,e.onComplete)}for(let e=0;e<this.outstandingGets_.length;e++)this.outstandingGets_[e]&&this.sendGet_(e)}sendConnectStats_(){const e={};let t="js";e["sdk."+t+"."+el.replace(/\./g,"-")]=1,bs()?e["framework.cordova"]=1:da()&&(e["framework.reactnative"]=1),this.reportStats(e)}shouldReconnect_(){const e=ti.getInstance().currentlyOnline();return Zi(this.interruptReasons_)&&e}}Oe.nextPersistentConnectionId_=0;Oe.nextConnectionId_=0;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.name=e,this.node=t}static Wrap(e,t){return new A(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bi{getCompare(){return this.compare.bind(this)}indexedValueChanged(e,t){const i=new A(xt,e),s=new A(xt,t);return this.compare(i,s)!==0}minPost(){return A.MIN}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let An;class kl extends bi{static get __EMPTY_NODE(){return An}static set __EMPTY_NODE(e){An=e}compare(e,t){return Bt(e.name,t.name)}isDefinedOn(e){throw Ft("KeyIndex.isDefinedOn not expected to be called.")}indexedValueChanged(e,t){return!1}minPost(){return A.MIN}maxPost(){return new A(dt,An)}makePost(e,t){return p(typeof e=="string","KeyIndex indexValue must always be a string."),new A(e,An)}toString(){return".key"}}const At=new kl;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pn{constructor(e,t,i,s,r=null){this.isReverse_=s,this.resultGenerator_=r,this.nodeStack_=[];let o=1;for(;!e.isEmpty();)if(e=e,o=t?i(e.key,t):1,s&&(o*=-1),o<0)this.isReverse_?e=e.left:e=e.right;else if(o===0){this.nodeStack_.push(e);break}else this.nodeStack_.push(e),this.isReverse_?e=e.right:e=e.left}getNext(){if(this.nodeStack_.length===0)return null;let e=this.nodeStack_.pop(),t;if(this.resultGenerator_?t=this.resultGenerator_(e.key,e.value):t={key:e.key,value:e.value},this.isReverse_)for(e=e.left;!e.isEmpty();)this.nodeStack_.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack_.push(e),e=e.left;return t}hasNext(){return this.nodeStack_.length>0}peek(){if(this.nodeStack_.length===0)return null;const e=this.nodeStack_[this.nodeStack_.length-1];return this.resultGenerator_?this.resultGenerator_(e.key,e.value):{key:e.key,value:e.value}}}class J{constructor(e,t,i,s,r){this.key=e,this.value=t,this.color=i??J.RED,this.left=s??ae.EMPTY_NODE,this.right=r??ae.EMPTY_NODE}copy(e,t,i,s,r){return new J(e??this.key,t??this.value,i??this.color,s??this.left,r??this.right)}count(){return this.left.count()+1+this.right.count()}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||!!e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min_(){return this.left.isEmpty()?this:this.left.min_()}minKey(){return this.min_().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,i){let s=this;const r=i(e,s.key);return r<0?s=s.copy(null,null,null,s.left.insert(e,t,i),null):r===0?s=s.copy(null,t,null,null,null):s=s.copy(null,null,null,null,s.right.insert(e,t,i)),s.fixUp_()}removeMin_(){if(this.left.isEmpty())return ae.EMPTY_NODE;let e=this;return!e.left.isRed_()&&!e.left.left.isRed_()&&(e=e.moveRedLeft_()),e=e.copy(null,null,null,e.left.removeMin_(),null),e.fixUp_()}remove(e,t){let i,s;if(i=this,t(e,i.key)<0)!i.left.isEmpty()&&!i.left.isRed_()&&!i.left.left.isRed_()&&(i=i.moveRedLeft_()),i=i.copy(null,null,null,i.left.remove(e,t),null);else{if(i.left.isRed_()&&(i=i.rotateRight_()),!i.right.isEmpty()&&!i.right.isRed_()&&!i.right.left.isRed_()&&(i=i.moveRedRight_()),t(e,i.key)===0){if(i.right.isEmpty())return ae.EMPTY_NODE;s=i.right.min_(),i=i.copy(s.key,s.value,null,null,i.right.removeMin_())}i=i.copy(null,null,null,null,i.right.remove(e,t))}return i.fixUp_()}isRed_(){return this.color}fixUp_(){let e=this;return e.right.isRed_()&&!e.left.isRed_()&&(e=e.rotateLeft_()),e.left.isRed_()&&e.left.left.isRed_()&&(e=e.rotateRight_()),e.left.isRed_()&&e.right.isRed_()&&(e=e.colorFlip_()),e}moveRedLeft_(){let e=this.colorFlip_();return e.right.left.isRed_()&&(e=e.copy(null,null,null,null,e.right.rotateRight_()),e=e.rotateLeft_(),e=e.colorFlip_()),e}moveRedRight_(){let e=this.colorFlip_();return e.left.left.isRed_()&&(e=e.rotateRight_(),e=e.colorFlip_()),e}rotateLeft_(){const e=this.copy(null,null,J.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight_(){const e=this.copy(null,null,J.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip_(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth_(){const e=this.check_();return Math.pow(2,e)<=this.count()+1}check_(){if(this.isRed_()&&this.left.isRed_())throw new Error("Red node has red child("+this.key+","+this.value+")");if(this.right.isRed_())throw new Error("Right child of ("+this.key+","+this.value+") is red");const e=this.left.check_();if(e!==this.right.check_())throw new Error("Black depths differ");return e+(this.isRed_()?0:1)}}J.RED=!0;J.BLACK=!1;class S_{copy(e,t,i,s,r){return this}insert(e,t,i){return new J(e,t,null)}remove(e,t){return this}count(){return 0}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}check_(){return 0}isRed_(){return!1}}class ae{constructor(e,t=ae.EMPTY_NODE){this.comparator_=e,this.root_=t}insert(e,t){return new ae(this.comparator_,this.root_.insert(e,t,this.comparator_).copy(null,null,J.BLACK,null,null))}remove(e){return new ae(this.comparator_,this.root_.remove(e,this.comparator_).copy(null,null,J.BLACK,null,null))}get(e){let t,i=this.root_;for(;!i.isEmpty();){if(t=this.comparator_(e,i.key),t===0)return i.value;t<0?i=i.left:t>0&&(i=i.right)}return null}getPredecessorKey(e){let t,i=this.root_,s=null;for(;!i.isEmpty();)if(t=this.comparator_(e,i.key),t===0){if(i.left.isEmpty())return s?s.key:null;for(i=i.left;!i.right.isEmpty();)i=i.right;return i.key}else t<0?i=i.left:t>0&&(s=i,i=i.right);throw new Error("Attempted to find predecessor key for a nonexistent key.  What gives?")}isEmpty(){return this.root_.isEmpty()}count(){return this.root_.count()}minKey(){return this.root_.minKey()}maxKey(){return this.root_.maxKey()}inorderTraversal(e){return this.root_.inorderTraversal(e)}reverseTraversal(e){return this.root_.reverseTraversal(e)}getIterator(e){return new Pn(this.root_,null,this.comparator_,!1,e)}getIteratorFrom(e,t){return new Pn(this.root_,e,this.comparator_,!1,t)}getReverseIteratorFrom(e,t){return new Pn(this.root_,e,this.comparator_,!0,t)}getReverseIterator(e){return new Pn(this.root_,null,this.comparator_,!0,e)}}ae.EMPTY_NODE=new S_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R_(n,e){return Bt(n.name,e.name)}function js(n,e){return Bt(n,e)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let us;function k_(n){us=n}const Nl=function(n){return typeof n=="number"?"number:"+rl(n):"string:"+n},Al=function(n){if(n.isLeafNode()){const e=n.val();p(typeof e=="string"||typeof e=="number"||typeof e=="object"&&Ue(e,".sv"),"Priority must be a string or number.")}else p(n===us||n.isEmpty(),"priority of unexpected type.");p(n===us||n.getPriority().isEmpty(),"Priority nodes can't have a priority of their own.")};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let yo;class X{constructor(e,t=X.__childrenNodeConstructor.EMPTY_NODE){this.value_=e,this.priorityNode_=t,this.lazyHash_=null,p(this.value_!==void 0&&this.value_!==null,"LeafNode shouldn't be created with null/undefined value."),Al(this.priorityNode_)}static set __childrenNodeConstructor(e){yo=e}static get __childrenNodeConstructor(){return yo}isLeafNode(){return!0}getPriority(){return this.priorityNode_}updatePriority(e){return new X(this.value_,e)}getImmediateChild(e){return e===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}getChild(e){return P(e)?this:N(e)===".priority"?this.priorityNode_:X.__childrenNodeConstructor.EMPTY_NODE}hasChild(){return!1}getPredecessorChildName(e,t){return null}updateImmediateChild(e,t){return e===".priority"?this.updatePriority(t):t.isEmpty()&&e!==".priority"?this:X.__childrenNodeConstructor.EMPTY_NODE.updateImmediateChild(e,t).updatePriority(this.priorityNode_)}updateChild(e,t){const i=N(e);return i===null?t:t.isEmpty()&&i!==".priority"?this:(p(i!==".priority"||Qe(e)===1,".priority must be the last token in a path"),this.updateImmediateChild(i,X.__childrenNodeConstructor.EMPTY_NODE.updateChild(H(e),t)))}isEmpty(){return!1}numChildren(){return 0}forEachChild(e,t){return!1}val(e){return e&&!this.getPriority().isEmpty()?{".value":this.getValue(),".priority":this.getPriority().val()}:this.getValue()}hash(){if(this.lazyHash_===null){let e="";this.priorityNode_.isEmpty()||(e+="priority:"+Nl(this.priorityNode_.val())+":");const t=typeof this.value_;e+=t+":",t==="number"?e+=rl(this.value_):e+=this.value_,this.lazyHash_=nl(e)}return this.lazyHash_}getValue(){return this.value_}compareTo(e){return e===X.__childrenNodeConstructor.EMPTY_NODE?1:e instanceof X.__childrenNodeConstructor?-1:(p(e.isLeafNode(),"Unknown node type"),this.compareToLeafNode_(e))}compareToLeafNode_(e){const t=typeof e.value_,i=typeof this.value_,s=X.VALUE_TYPE_ORDER.indexOf(t),r=X.VALUE_TYPE_ORDER.indexOf(i);return p(s>=0,"Unknown leaf type: "+t),p(r>=0,"Unknown leaf type: "+i),s===r?i==="object"?0:this.value_<e.value_?-1:this.value_===e.value_?0:1:r-s}withIndex(){return this}isIndexed(){return!0}equals(e){if(e===this)return!0;if(e.isLeafNode()){const t=e;return this.value_===t.value_&&this.priorityNode_.equals(t.priorityNode_)}else return!1}}X.VALUE_TYPE_ORDER=["object","boolean","number","string"];/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let Pl,Ol;function N_(n){Pl=n}function A_(n){Ol=n}class P_ extends bi{compare(e,t){const i=e.node.getPriority(),s=t.node.getPriority(),r=i.compareTo(s);return r===0?Bt(e.name,t.name):r}isDefinedOn(e){return!e.getPriority().isEmpty()}indexedValueChanged(e,t){return!e.getPriority().equals(t.getPriority())}minPost(){return A.MIN}maxPost(){return new A(dt,new X("[PRIORITY-POST]",Ol))}makePost(e,t){const i=Pl(e);return new A(t,new X("[PRIORITY-POST]",i))}toString(){return".priority"}}const q=new P_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O_=Math.log(2);class D_{constructor(e){const t=r=>parseInt(Math.log(r)/O_,10),i=r=>parseInt(Array(r+1).join("1"),2);this.count=t(e+1),this.current_=this.count-1;const s=i(this.count);this.bits_=e+1&s}nextBitIsOne(){const e=!(this.bits_&1<<this.current_);return this.current_--,e}}const ni=function(n,e,t,i){n.sort(e);const s=function(l,c){const u=c-l;let h,d;if(u===0)return null;if(u===1)return h=n[l],d=t?t(h):h,new J(d,h.node,J.BLACK,null,null);{const f=parseInt(u/2,10)+l,_=s(l,f),v=s(f+1,c);return h=n[f],d=t?t(h):h,new J(d,h.node,J.BLACK,_,v)}},r=function(l){let c=null,u=null,h=n.length;const d=function(_,v){const E=h-_,k=h;h-=_;const T=s(E+1,k),I=n[E],g=t?t(I):I;f(new J(g,I.node,v,null,T))},f=function(_){c?(c.left=_,c=_):(u=_,c=_)};for(let _=0;_<l.count;++_){const v=l.nextBitIsOne(),E=Math.pow(2,l.count-(_+1));v?d(E,J.BLACK):(d(E,J.BLACK),d(E,J.RED))}return u},o=new D_(n.length),a=r(o);return new ae(i||e,a)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let qi;const It={};class Pe{constructor(e,t){this.indexes_=e,this.indexSet_=t}static get Default(){return p(It&&q,"ChildrenNode.ts has not been loaded"),qi=qi||new Pe({".priority":It},{".priority":q}),qi}get(e){const t=Ot(this.indexes_,e);if(!t)throw new Error("No index defined for "+e);return t instanceof ae?t:null}hasIndex(e){return Ue(this.indexSet_,e.toString())}addIndex(e,t){p(e!==At,"KeyIndex always exists and isn't meant to be added to the IndexMap.");const i=[];let s=!1;const r=t.getIterator(A.Wrap);let o=r.getNext();for(;o;)s=s||e.isDefinedOn(o.node),i.push(o),o=r.getNext();let a;s?a=ni(i,e.getCompare()):a=It;const l=e.toString(),c=Object.assign({},this.indexSet_);c[l]=e;const u=Object.assign({},this.indexes_);return u[l]=a,new Pe(u,c)}addToIndexes(e,t){const i=qn(this.indexes_,(s,r)=>{const o=Ot(this.indexSet_,r);if(p(o,"Missing index implementation for "+r),s===It)if(o.isDefinedOn(e.node)){const a=[],l=t.getIterator(A.Wrap);let c=l.getNext();for(;c;)c.name!==e.name&&a.push(c),c=l.getNext();return a.push(e),ni(a,o.getCompare())}else return It;else{const a=t.get(e.name);let l=s;return a&&(l=l.remove(new A(e.name,a))),l.insert(e,e.node)}});return new Pe(i,this.indexSet_)}removeFromIndexes(e,t){const i=qn(this.indexes_,s=>{if(s===It)return s;{const r=t.get(e.name);return r?s.remove(new A(e.name,r)):s}});return new Pe(i,this.indexSet_)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zt;class S{constructor(e,t,i){this.children_=e,this.priorityNode_=t,this.indexMap_=i,this.lazyHash_=null,this.priorityNode_&&Al(this.priorityNode_),this.children_.isEmpty()&&p(!this.priorityNode_||this.priorityNode_.isEmpty(),"An empty node cannot have a priority")}static get EMPTY_NODE(){return zt||(zt=new S(new ae(js),null,Pe.Default))}isLeafNode(){return!1}getPriority(){return this.priorityNode_||zt}updatePriority(e){return this.children_.isEmpty()?this:new S(this.children_,e,this.indexMap_)}getImmediateChild(e){if(e===".priority")return this.getPriority();{const t=this.children_.get(e);return t===null?zt:t}}getChild(e){const t=N(e);return t===null?this:this.getImmediateChild(t).getChild(H(e))}hasChild(e){return this.children_.get(e)!==null}updateImmediateChild(e,t){if(p(t,"We should always be passing snapshot nodes"),e===".priority")return this.updatePriority(t);{const i=new A(e,t);let s,r;t.isEmpty()?(s=this.children_.remove(e),r=this.indexMap_.removeFromIndexes(i,this.children_)):(s=this.children_.insert(e,t),r=this.indexMap_.addToIndexes(i,this.children_));const o=s.isEmpty()?zt:this.priorityNode_;return new S(s,o,r)}}updateChild(e,t){const i=N(e);if(i===null)return t;{p(N(e)!==".priority"||Qe(e)===1,".priority must be the last token in a path");const s=this.getImmediateChild(i).updateChild(H(e),t);return this.updateImmediateChild(i,s)}}isEmpty(){return this.children_.isEmpty()}numChildren(){return this.children_.count()}val(e){if(this.isEmpty())return null;const t={};let i=0,s=0,r=!0;if(this.forEachChild(q,(o,a)=>{t[o]=a.val(e),i++,r&&S.INTEGER_REGEXP_.test(o)?s=Math.max(s,Number(o)):r=!1}),!e&&r&&s<2*i){const o=[];for(const a in t)o[a]=t[a];return o}else return e&&!this.getPriority().isEmpty()&&(t[".priority"]=this.getPriority().val()),t}hash(){if(this.lazyHash_===null){let e="";this.getPriority().isEmpty()||(e+="priority:"+Nl(this.getPriority().val())+":"),this.forEachChild(q,(t,i)=>{const s=i.hash();s!==""&&(e+=":"+t+":"+s)}),this.lazyHash_=e===""?"":nl(e)}return this.lazyHash_}getPredecessorChildName(e,t,i){const s=this.resolveIndex_(i);if(s){const r=s.getPredecessorKey(new A(e,t));return r?r.name:null}else return this.children_.getPredecessorKey(e)}getFirstChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.minKey();return i&&i.name}else return this.children_.minKey()}getFirstChild(e){const t=this.getFirstChildName(e);return t?new A(t,this.children_.get(t)):null}getLastChildName(e){const t=this.resolveIndex_(e);if(t){const i=t.maxKey();return i&&i.name}else return this.children_.maxKey()}getLastChild(e){const t=this.getLastChildName(e);return t?new A(t,this.children_.get(t)):null}forEachChild(e,t){const i=this.resolveIndex_(e);return i?i.inorderTraversal(s=>t(s.name,s.node)):this.children_.inorderTraversal(t)}getIterator(e){return this.getIteratorFrom(e.minPost(),e)}getIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getIteratorFrom(e,s=>s);{const s=this.children_.getIteratorFrom(e.name,A.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)<0;)s.getNext(),r=s.peek();return s}}getReverseIterator(e){return this.getReverseIteratorFrom(e.maxPost(),e)}getReverseIteratorFrom(e,t){const i=this.resolveIndex_(t);if(i)return i.getReverseIteratorFrom(e,s=>s);{const s=this.children_.getReverseIteratorFrom(e.name,A.Wrap);let r=s.peek();for(;r!=null&&t.compare(r,e)>0;)s.getNext(),r=s.peek();return s}}compareTo(e){return this.isEmpty()?e.isEmpty()?0:-1:e.isLeafNode()||e.isEmpty()?1:e===Cn?-1:0}withIndex(e){if(e===At||this.indexMap_.hasIndex(e))return this;{const t=this.indexMap_.addIndex(e,this.children_);return new S(this.children_,this.priorityNode_,t)}}isIndexed(e){return e===At||this.indexMap_.hasIndex(e)}equals(e){if(e===this)return!0;if(e.isLeafNode())return!1;{const t=e;if(this.getPriority().equals(t.getPriority()))if(this.children_.count()===t.children_.count()){const i=this.getIterator(q),s=t.getIterator(q);let r=i.getNext(),o=s.getNext();for(;r&&o;){if(r.name!==o.name||!r.node.equals(o.node))return!1;r=i.getNext(),o=s.getNext()}return r===null&&o===null}else return!1;else return!1}}resolveIndex_(e){return e===At?null:this.indexMap_.get(e.toString())}}S.INTEGER_REGEXP_=/^(0|[1-9]\d*)$/;class x_ extends S{constructor(){super(new ae(js),S.EMPTY_NODE,Pe.Default)}compareTo(e){return e===this?0:1}equals(e){return e===this}getPriority(){return this}getImmediateChild(e){return S.EMPTY_NODE}isEmpty(){return!1}}const Cn=new x_;Object.defineProperties(A,{MIN:{value:new A(xt,S.EMPTY_NODE)},MAX:{value:new A(dt,Cn)}});kl.__EMPTY_NODE=S.EMPTY_NODE;X.__childrenNodeConstructor=S;k_(Cn);A_(Cn);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const L_=!0;function ee(n,e=null){if(n===null)return S.EMPTY_NODE;if(typeof n=="object"&&".priority"in n&&(e=n[".priority"]),p(e===null||typeof e=="string"||typeof e=="number"||typeof e=="object"&&".sv"in e,"Invalid priority type found: "+typeof e),typeof n=="object"&&".value"in n&&n[".value"]!==null&&(n=n[".value"]),typeof n!="object"||".sv"in n){const t=n;return new X(t,ee(e))}if(!(n instanceof Array)&&L_){const t=[];let i=!1;if(ue(n,(o,a)=>{if(o.substring(0,1)!=="."){const l=ee(a);l.isEmpty()||(i=i||!l.getPriority().isEmpty(),t.push(new A(o,l)))}}),t.length===0)return S.EMPTY_NODE;const r=ni(t,R_,o=>o.name,js);if(i){const o=ni(t,q.getCompare());return new S(r,ee(e),new Pe({".priority":o},{".priority":q}))}else return new S(r,ee(e),Pe.Default)}else{let t=S.EMPTY_NODE;return ue(n,(i,s)=>{if(Ue(n,i)&&i.substring(0,1)!=="."){const r=ee(s);(r.isLeafNode()||!r.isEmpty())&&(t=t.updateImmediateChild(i,r))}}),t.updatePriority(ee(e))}}N_(ee);/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M_ extends bi{constructor(e){super(),this.indexPath_=e,p(!P(e)&&N(e)!==".priority","Can't create PathIndex with empty path or .priority key")}extractChild(e){return e.getChild(this.indexPath_)}isDefinedOn(e){return!e.getChild(this.indexPath_).isEmpty()}compare(e,t){const i=this.extractChild(e.node),s=this.extractChild(t.node),r=i.compareTo(s);return r===0?Bt(e.name,t.name):r}makePost(e,t){const i=ee(e),s=S.EMPTY_NODE.updateChild(this.indexPath_,i);return new A(t,s)}maxPost(){const e=S.EMPTY_NODE.updateChild(this.indexPath_,Cn);return new A(dt,e)}toString(){return Tl(this.indexPath_,0).join("/")}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class U_ extends bi{compare(e,t){const i=e.node.compareTo(t.node);return i===0?Bt(e.name,t.name):i}isDefinedOn(e){return!0}indexedValueChanged(e,t){return!e.equals(t)}minPost(){return A.MIN}maxPost(){return A.MAX}makePost(e,t){const i=ee(e);return new A(t,i)}toString(){return".value"}}const F_=new U_;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dl(n){return{type:"value",snapshotNode:n}}function Lt(n,e){return{type:"child_added",snapshotNode:e,childName:n}}function un(n,e){return{type:"child_removed",snapshotNode:e,childName:n}}function hn(n,e,t){return{type:"child_changed",snapshotNode:e,childName:n,oldSnap:t}}function $_(n,e){return{type:"child_moved",snapshotNode:e,childName:n}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qs{constructor(e){this.index_=e}updateChild(e,t,i,s,r,o){p(e.isIndexed(this.index_),"A node must be indexed if only a child is updated");const a=e.getImmediateChild(t);return a.getChild(s).equals(i.getChild(s))&&a.isEmpty()===i.isEmpty()||(o!=null&&(i.isEmpty()?e.hasChild(t)?o.trackChildChange(un(t,a)):p(e.isLeafNode(),"A child remove without an old child only makes sense on a leaf node"):a.isEmpty()?o.trackChildChange(Lt(t,i)):o.trackChildChange(hn(t,i,a))),e.isLeafNode()&&i.isEmpty())?e:e.updateImmediateChild(t,i).withIndex(this.index_)}updateFullNode(e,t,i){return i!=null&&(e.isLeafNode()||e.forEachChild(q,(s,r)=>{t.hasChild(s)||i.trackChildChange(un(s,r))}),t.isLeafNode()||t.forEachChild(q,(s,r)=>{if(e.hasChild(s)){const o=e.getImmediateChild(s);o.equals(r)||i.trackChildChange(hn(s,r,o))}else i.trackChildChange(Lt(s,r))})),t.withIndex(this.index_)}updatePriority(e,t){return e.isEmpty()?S.EMPTY_NODE:e.updatePriority(t)}filtersNodes(){return!1}getIndexedFilter(){return this}getIndex(){return this.index_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dn{constructor(e){this.indexedFilter_=new qs(e.getIndex()),this.index_=e.getIndex(),this.startPost_=dn.getStartPost_(e),this.endPost_=dn.getEndPost_(e),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}getStartPost(){return this.startPost_}getEndPost(){return this.endPost_}matches(e){const t=this.startIsInclusive_?this.index_.compare(this.getStartPost(),e)<=0:this.index_.compare(this.getStartPost(),e)<0,i=this.endIsInclusive_?this.index_.compare(e,this.getEndPost())<=0:this.index_.compare(e,this.getEndPost())<0;return t&&i}updateChild(e,t,i,s,r,o){return this.matches(new A(t,i))||(i=S.EMPTY_NODE),this.indexedFilter_.updateChild(e,t,i,s,r,o)}updateFullNode(e,t,i){t.isLeafNode()&&(t=S.EMPTY_NODE);let s=t.withIndex(this.index_);s=s.updatePriority(S.EMPTY_NODE);const r=this;return t.forEachChild(q,(o,a)=>{r.matches(new A(o,a))||(s=s.updateImmediateChild(o,S.EMPTY_NODE))}),this.indexedFilter_.updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.indexedFilter_}getIndex(){return this.index_}static getStartPost_(e){if(e.hasStart()){const t=e.getIndexStartName();return e.getIndex().makePost(e.getIndexStartValue(),t)}else return e.getIndex().minPost()}static getEndPost_(e){if(e.hasEnd()){const t=e.getIndexEndName();return e.getIndex().makePost(e.getIndexEndValue(),t)}else return e.getIndex().maxPost()}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B_{constructor(e){this.withinDirectionalStart=t=>this.reverse_?this.withinEndPost(t):this.withinStartPost(t),this.withinDirectionalEnd=t=>this.reverse_?this.withinStartPost(t):this.withinEndPost(t),this.withinStartPost=t=>{const i=this.index_.compare(this.rangedFilter_.getStartPost(),t);return this.startIsInclusive_?i<=0:i<0},this.withinEndPost=t=>{const i=this.index_.compare(t,this.rangedFilter_.getEndPost());return this.endIsInclusive_?i<=0:i<0},this.rangedFilter_=new dn(e),this.index_=e.getIndex(),this.limit_=e.getLimit(),this.reverse_=!e.isViewFromLeft(),this.startIsInclusive_=!e.startAfterSet_,this.endIsInclusive_=!e.endBeforeSet_}updateChild(e,t,i,s,r,o){return this.rangedFilter_.matches(new A(t,i))||(i=S.EMPTY_NODE),e.getImmediateChild(t).equals(i)?e:e.numChildren()<this.limit_?this.rangedFilter_.getIndexedFilter().updateChild(e,t,i,s,r,o):this.fullLimitUpdateChild_(e,t,i,r,o)}updateFullNode(e,t,i){let s;if(t.isLeafNode()||t.isEmpty())s=S.EMPTY_NODE.withIndex(this.index_);else if(this.limit_*2<t.numChildren()&&t.isIndexed(this.index_)){s=S.EMPTY_NODE.withIndex(this.index_);let r;this.reverse_?r=t.getReverseIteratorFrom(this.rangedFilter_.getEndPost(),this.index_):r=t.getIteratorFrom(this.rangedFilter_.getStartPost(),this.index_);let o=0;for(;r.hasNext()&&o<this.limit_;){const a=r.getNext();if(this.withinDirectionalStart(a))if(this.withinDirectionalEnd(a))s=s.updateImmediateChild(a.name,a.node),o++;else break;else continue}}else{s=t.withIndex(this.index_),s=s.updatePriority(S.EMPTY_NODE);let r;this.reverse_?r=s.getReverseIterator(this.index_):r=s.getIterator(this.index_);let o=0;for(;r.hasNext();){const a=r.getNext();o<this.limit_&&this.withinDirectionalStart(a)&&this.withinDirectionalEnd(a)?o++:s=s.updateImmediateChild(a.name,S.EMPTY_NODE)}}return this.rangedFilter_.getIndexedFilter().updateFullNode(e,s,i)}updatePriority(e,t){return e}filtersNodes(){return!0}getIndexedFilter(){return this.rangedFilter_.getIndexedFilter()}getIndex(){return this.index_}fullLimitUpdateChild_(e,t,i,s,r){let o;if(this.reverse_){const h=this.index_.getCompare();o=(d,f)=>h(f,d)}else o=this.index_.getCompare();const a=e;p(a.numChildren()===this.limit_,"");const l=new A(t,i),c=this.reverse_?a.getFirstChild(this.index_):a.getLastChild(this.index_),u=this.rangedFilter_.matches(l);if(a.hasChild(t)){const h=a.getImmediateChild(t);let d=s.getChildAfterChild(this.index_,c,this.reverse_);for(;d!=null&&(d.name===t||a.hasChild(d.name));)d=s.getChildAfterChild(this.index_,d,this.reverse_);const f=d==null?1:o(d,l);if(u&&!i.isEmpty()&&f>=0)return r!=null&&r.trackChildChange(hn(t,i,h)),a.updateImmediateChild(t,i);{r!=null&&r.trackChildChange(un(t,h));const v=a.updateImmediateChild(t,S.EMPTY_NODE);return d!=null&&this.rangedFilter_.matches(d)?(r!=null&&r.trackChildChange(Lt(d.name,d.node)),v.updateImmediateChild(d.name,d.node)):v}}else return i.isEmpty()?e:u&&o(c,l)>=0?(r!=null&&(r.trackChildChange(un(c.name,c.node)),r.trackChildChange(Lt(t,i))),a.updateImmediateChild(t,i).updateImmediateChild(c.name,S.EMPTY_NODE)):e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zs{constructor(){this.limitSet_=!1,this.startSet_=!1,this.startNameSet_=!1,this.startAfterSet_=!1,this.endSet_=!1,this.endNameSet_=!1,this.endBeforeSet_=!1,this.limit_=0,this.viewFrom_="",this.indexStartValue_=null,this.indexStartName_="",this.indexEndValue_=null,this.indexEndName_="",this.index_=q}hasStart(){return this.startSet_}isViewFromLeft(){return this.viewFrom_===""?this.startSet_:this.viewFrom_==="l"}getIndexStartValue(){return p(this.startSet_,"Only valid if start has been set"),this.indexStartValue_}getIndexStartName(){return p(this.startSet_,"Only valid if start has been set"),this.startNameSet_?this.indexStartName_:xt}hasEnd(){return this.endSet_}getIndexEndValue(){return p(this.endSet_,"Only valid if end has been set"),this.indexEndValue_}getIndexEndName(){return p(this.endSet_,"Only valid if end has been set"),this.endNameSet_?this.indexEndName_:dt}hasLimit(){return this.limitSet_}hasAnchoredLimit(){return this.limitSet_&&this.viewFrom_!==""}getLimit(){return p(this.limitSet_,"Only valid if limit has been set"),this.limit_}getIndex(){return this.index_}loadsAllData(){return!(this.startSet_||this.endSet_||this.limitSet_)}isDefault(){return this.loadsAllData()&&this.index_===q}copy(){const e=new zs;return e.limitSet_=this.limitSet_,e.limit_=this.limit_,e.startSet_=this.startSet_,e.startAfterSet_=this.startAfterSet_,e.indexStartValue_=this.indexStartValue_,e.startNameSet_=this.startNameSet_,e.indexStartName_=this.indexStartName_,e.endSet_=this.endSet_,e.endBeforeSet_=this.endBeforeSet_,e.indexEndValue_=this.indexEndValue_,e.endNameSet_=this.endNameSet_,e.indexEndName_=this.indexEndName_,e.index_=this.index_,e.viewFrom_=this.viewFrom_,e}}function W_(n){return n.loadsAllData()?new qs(n.getIndex()):n.hasLimit()?new B_(n):new dn(n)}function wo(n){const e={};if(n.isDefault())return e;let t;if(n.index_===q?t="$priority":n.index_===F_?t="$value":n.index_===At?t="$key":(p(n.index_ instanceof M_,"Unrecognized index type!"),t=n.index_.toString()),e.orderBy=Z(t),n.startSet_){const i=n.startAfterSet_?"startAfter":"startAt";e[i]=Z(n.indexStartValue_),n.startNameSet_&&(e[i]+=","+Z(n.indexStartName_))}if(n.endSet_){const i=n.endBeforeSet_?"endBefore":"endAt";e[i]=Z(n.indexEndValue_),n.endNameSet_&&(e[i]+=","+Z(n.indexEndName_))}return n.limitSet_&&(n.isViewFromLeft()?e.limitToFirst=n.limit_:e.limitToLast=n.limit_),e}function Eo(n){const e={};if(n.startSet_&&(e.sp=n.indexStartValue_,n.startNameSet_&&(e.sn=n.indexStartName_),e.sin=!n.startAfterSet_),n.endSet_&&(e.ep=n.indexEndValue_,n.endNameSet_&&(e.en=n.indexEndName_),e.ein=!n.endBeforeSet_),n.limitSet_){e.l=n.limit_;let t=n.viewFrom_;t===""&&(n.isViewFromLeft()?t="l":t="r"),e.vf=t}return n.index_!==q&&(e.i=n.index_.toString()),e}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ii extends Il{constructor(e,t,i,s){super(),this.repoInfo_=e,this.onDataUpdate_=t,this.authTokenProvider_=i,this.appCheckTokenProvider_=s,this.log_=bn("p:rest:"),this.listens_={}}reportStats(e){throw new Error("Method not implemented.")}static getListenId_(e,t){return t!==void 0?"tag$"+t:(p(e._queryParams.isDefault(),"should have a tag if it's not a default query."),e._path.toString())}listen(e,t,i,s){const r=e._path.toString();this.log_("Listen called for "+r+" "+e._queryIdentifier);const o=ii.getListenId_(e,i),a={};this.listens_[o]=a;const l=wo(e._queryParams);this.restRequest_(r+".json",l,(c,u)=>{let h=u;if(c===404&&(h=null,c=null),c===null&&this.onDataUpdate_(r,h,!1,i),Ot(this.listens_,o)===a){let d;c?c===401?d="permission_denied":d="rest_error:"+c:d="ok",s(d,null)}})}unlisten(e,t){const i=ii.getListenId_(e,t);delete this.listens_[i]}get(e){const t=wo(e._queryParams),i=e._path.toString(),s=new mi;return this.restRequest_(i+".json",t,(r,o)=>{let a=o;r===404&&(a=null,r=null),r===null?(this.onDataUpdate_(i,a,!1,null),s.resolve(a)):s.reject(new Error(a))}),s.promise}refreshAuthToken(e){}restRequest_(e,t={},i){return t.format="export",Promise.all([this.authTokenProvider_.getToken(!1),this.appCheckTokenProvider_.getToken(!1)]).then(([s,r])=>{s&&s.accessToken&&(t.auth=s.accessToken),r&&r.token&&(t.ac=r.token);const o=(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host+e+"?ns="+this.repoInfo_.namespace+$t(t);this.log_("Sending REST request for "+o);const a=new XMLHttpRequest;a.onreadystatechange=()=>{if(i&&a.readyState===4){this.log_("REST Response for "+o+" received. status:",a.status,"response:",a.responseText);let l=null;if(a.status>=200&&a.status<300){try{l=rn(a.responseText)}catch{le("Failed to parse JSON response for "+o+": "+a.responseText)}i(null,l)}else a.status!==401&&a.status!==404&&le("Got unsuccessful REST response for "+o+" Status: "+a.status),i(a.status);i=null}},a.open("GET",o,!0),a.send()})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class H_{constructor(){this.rootNode_=S.EMPTY_NODE}getNode(e){return this.rootNode_.getChild(e)}updateSnapshot(e,t){this.rootNode_=this.rootNode_.updateChild(e,t)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function si(){return{value:null,children:new Map}}function xl(n,e,t){if(P(e))n.value=t,n.children.clear();else if(n.value!==null)n.value=n.value.updateChild(e,t);else{const i=N(e);n.children.has(i)||n.children.set(i,si());const s=n.children.get(i);e=H(e),xl(s,e,t)}}function hs(n,e,t){n.value!==null?t(e,n.value):V_(n,(i,s)=>{const r=new W(e.toString()+"/"+i);hs(s,r,t)})}function V_(n,e){n.children.forEach((t,i)=>{e(i,t)})}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class j_{constructor(e){this.collection_=e,this.last_=null}get(){const e=this.collection_.get(),t=Object.assign({},e);return this.last_&&ue(this.last_,(i,s)=>{t[i]=t[i]-s}),this.last_=e,t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Io=10*1e3,q_=30*1e3,z_=5*60*1e3;class G_{constructor(e,t){this.server_=t,this.statsToReport_={},this.statsListener_=new j_(e);const i=Io+(q_-Io)*Math.random();Jt(this.reportStats_.bind(this),Math.floor(i))}reportStats_(){const e=this.statsListener_.get(),t={};let i=!1;ue(e,(s,r)=>{r>0&&Ue(this.statsToReport_,s)&&(t[s]=r,i=!0)}),i&&this.server_.reportStats(t),Jt(this.reportStats_.bind(this),Math.floor(Math.random()*2*z_))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var pe;(function(n){n[n.OVERWRITE=0]="OVERWRITE",n[n.MERGE=1]="MERGE",n[n.ACK_USER_WRITE=2]="ACK_USER_WRITE",n[n.LISTEN_COMPLETE=3]="LISTEN_COMPLETE"})(pe||(pe={}));function Ll(){return{fromUser:!0,fromServer:!1,queryId:null,tagged:!1}}function Gs(){return{fromUser:!1,fromServer:!0,queryId:null,tagged:!1}}function Ks(n){return{fromUser:!1,fromServer:!0,queryId:n,tagged:!0}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ri{constructor(e,t,i){this.path=e,this.affectedTree=t,this.revert=i,this.type=pe.ACK_USER_WRITE,this.source=Ll()}operationForChild(e){if(P(this.path)){if(this.affectedTree.value!=null)return p(this.affectedTree.children.isEmpty(),"affectedTree should not have overlapping affected paths."),this;{const t=this.affectedTree.subtree(new W(e));return new ri(L(),t,this.revert)}}else return p(N(this.path)===e,"operationForChild called for unrelated child."),new ri(H(this.path),this.affectedTree,this.revert)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fn{constructor(e,t){this.source=e,this.path=t,this.type=pe.LISTEN_COMPLETE}operationForChild(e){return P(this.path)?new fn(this.source,L()):new fn(this.source,H(this.path))}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ft{constructor(e,t,i){this.source=e,this.path=t,this.snap=i,this.type=pe.OVERWRITE}operationForChild(e){return P(this.path)?new ft(this.source,L(),this.snap.getImmediateChild(e)):new ft(this.source,H(this.path),this.snap)}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _n{constructor(e,t,i){this.source=e,this.path=t,this.children=i,this.type=pe.MERGE}operationForChild(e){if(P(this.path)){const t=this.children.subtree(new W(e));return t.isEmpty()?null:t.value?new ft(this.source,L(),t.value):new _n(this.source,L(),t)}else return p(N(this.path)===e,"Can't get a merge for a child not on the path of the operation"),new _n(this.source,H(this.path),this.children)}toString(){return"Operation("+this.path+": "+this.source.toString()+" merge: "+this.children.toString()+")"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _t{constructor(e,t,i){this.node_=e,this.fullyInitialized_=t,this.filtered_=i}isFullyInitialized(){return this.fullyInitialized_}isFiltered(){return this.filtered_}isCompleteForPath(e){if(P(e))return this.isFullyInitialized()&&!this.filtered_;const t=N(e);return this.isCompleteForChild(t)}isCompleteForChild(e){return this.isFullyInitialized()&&!this.filtered_||this.node_.hasChild(e)}getNode(){return this.node_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class K_{constructor(e){this.query_=e,this.index_=this.query_._queryParams.getIndex()}}function Y_(n,e,t,i){const s=[],r=[];return e.forEach(o=>{o.type==="child_changed"&&n.index_.indexedValueChanged(o.oldSnap,o.snapshotNode)&&r.push($_(o.childName,o.snapshotNode))}),Gt(n,s,"child_removed",e,i,t),Gt(n,s,"child_added",e,i,t),Gt(n,s,"child_moved",r,i,t),Gt(n,s,"child_changed",e,i,t),Gt(n,s,"value",e,i,t),s}function Gt(n,e,t,i,s,r){const o=i.filter(a=>a.type===t);o.sort((a,l)=>X_(n,a,l)),o.forEach(a=>{const l=Q_(n,a,r);s.forEach(c=>{c.respondsTo(a.type)&&e.push(c.createEvent(l,n.query_))})})}function Q_(n,e,t){return e.type==="value"||e.type==="child_removed"||(e.prevName=t.getPredecessorChildName(e.childName,e.snapshotNode,n.index_)),e}function X_(n,e,t){if(e.childName==null||t.childName==null)throw Ft("Should only compare child_ events.");const i=new A(e.childName,e.snapshotNode),s=new A(t.childName,t.snapshotNode);return n.index_.compare(i,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(n,e){return{eventCache:n,serverCache:e}}function Zt(n,e,t,i){return Ci(new _t(e,t,i),n.serverCache)}function Ml(n,e,t,i){return Ci(n.eventCache,new _t(e,t,i))}function ds(n){return n.eventCache.isFullyInitialized()?n.eventCache.getNode():null}function pt(n){return n.serverCache.isFullyInitialized()?n.serverCache.getNode():null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let zi;const J_=()=>(zi||(zi=new ae(Uf)),zi);class j{constructor(e,t=J_()){this.value=e,this.children=t}static fromObject(e){let t=new j(null);return ue(e,(i,s)=>{t=t.set(new W(i),s)}),t}isEmpty(){return this.value===null&&this.children.isEmpty()}findRootMostMatchingPathAndValue(e,t){if(this.value!=null&&t(this.value))return{path:L(),value:this.value};if(P(e))return null;{const i=N(e),s=this.children.get(i);if(s!==null){const r=s.findRootMostMatchingPathAndValue(H(e),t);return r!=null?{path:Y(new W(i),r.path),value:r.value}:null}else return null}}findRootMostValueAndPath(e){return this.findRootMostMatchingPathAndValue(e,()=>!0)}subtree(e){if(P(e))return this;{const t=N(e),i=this.children.get(t);return i!==null?i.subtree(H(e)):new j(null)}}set(e,t){if(P(e))return new j(t,this.children);{const i=N(e),r=(this.children.get(i)||new j(null)).set(H(e),t),o=this.children.insert(i,r);return new j(this.value,o)}}remove(e){if(P(e))return this.children.isEmpty()?new j(null):new j(null,this.children);{const t=N(e),i=this.children.get(t);if(i){const s=i.remove(H(e));let r;return s.isEmpty()?r=this.children.remove(t):r=this.children.insert(t,s),this.value===null&&r.isEmpty()?new j(null):new j(this.value,r)}else return this}}get(e){if(P(e))return this.value;{const t=N(e),i=this.children.get(t);return i?i.get(H(e)):null}}setTree(e,t){if(P(e))return t;{const i=N(e),r=(this.children.get(i)||new j(null)).setTree(H(e),t);let o;return r.isEmpty()?o=this.children.remove(i):o=this.children.insert(i,r),new j(this.value,o)}}fold(e){return this.fold_(L(),e)}fold_(e,t){const i={};return this.children.inorderTraversal((s,r)=>{i[s]=r.fold_(Y(e,s),t)}),t(e,this.value,i)}findOnPath(e,t){return this.findOnPath_(e,L(),t)}findOnPath_(e,t,i){const s=this.value?i(t,this.value):!1;if(s)return s;if(P(e))return null;{const r=N(e),o=this.children.get(r);return o?o.findOnPath_(H(e),Y(t,r),i):null}}foreachOnPath(e,t){return this.foreachOnPath_(e,L(),t)}foreachOnPath_(e,t,i){if(P(e))return this;{this.value&&i(t,this.value);const s=N(e),r=this.children.get(s);return r?r.foreachOnPath_(H(e),Y(t,s),i):new j(null)}}foreach(e){this.foreach_(L(),e)}foreach_(e,t){this.children.inorderTraversal((i,s)=>{s.foreach_(Y(e,i),t)}),this.value&&t(e,this.value)}foreachChild(e){this.children.inorderTraversal((t,i)=>{i.value&&e(t,i.value)})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ge{constructor(e){this.writeTree_=e}static empty(){return new ge(new j(null))}}function en(n,e,t){if(P(e))return new ge(new j(t));{const i=n.writeTree_.findRootMostValueAndPath(e);if(i!=null){const s=i.path;let r=i.value;const o=oe(s,e);return r=r.updateChild(o,t),new ge(n.writeTree_.set(s,r))}else{const s=new j(t),r=n.writeTree_.setTree(e,s);return new ge(r)}}}function bo(n,e,t){let i=n;return ue(t,(s,r)=>{i=en(i,Y(e,s),r)}),i}function Co(n,e){if(P(e))return ge.empty();{const t=n.writeTree_.setTree(e,new j(null));return new ge(t)}}function fs(n,e){return vt(n,e)!=null}function vt(n,e){const t=n.writeTree_.findRootMostValueAndPath(e);return t!=null?n.writeTree_.get(t.path).getChild(oe(t.path,e)):null}function To(n){const e=[],t=n.writeTree_.value;return t!=null?t.isLeafNode()||t.forEachChild(q,(i,s)=>{e.push(new A(i,s))}):n.writeTree_.children.inorderTraversal((i,s)=>{s.value!=null&&e.push(new A(i,s.value))}),e}function Ke(n,e){if(P(e))return n;{const t=vt(n,e);return t!=null?new ge(new j(t)):new ge(n.writeTree_.subtree(e))}}function _s(n){return n.writeTree_.isEmpty()}function Mt(n,e){return Ul(L(),n.writeTree_,e)}function Ul(n,e,t){if(e.value!=null)return t.updateChild(n,e.value);{let i=null;return e.children.inorderTraversal((s,r)=>{s===".priority"?(p(r.value!==null,"Priority writes must always be leaf nodes"),i=r.value):t=Ul(Y(n,s),r,t)}),!t.getChild(n).isEmpty()&&i!==null&&(t=t.updateChild(Y(n,".priority"),i)),t}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(n,e){return Wl(e,n)}function Z_(n,e,t,i,s){p(i>n.lastWriteId,"Stacking an older write on top of newer ones"),s===void 0&&(s=!0),n.allWrites.push({path:e,snap:t,writeId:i,visible:s}),s&&(n.visibleWrites=en(n.visibleWrites,e,t)),n.lastWriteId=i}function ep(n,e){for(let t=0;t<n.allWrites.length;t++){const i=n.allWrites[t];if(i.writeId===e)return i}return null}function tp(n,e){const t=n.allWrites.findIndex(a=>a.writeId===e);p(t>=0,"removeWrite called with nonexistent writeId.");const i=n.allWrites[t];n.allWrites.splice(t,1);let s=i.visible,r=!1,o=n.allWrites.length-1;for(;s&&o>=0;){const a=n.allWrites[o];a.visible&&(o>=t&&np(a,i.path)?s=!1:_e(i.path,a.path)&&(r=!0)),o--}if(s){if(r)return ip(n),!0;if(i.snap)n.visibleWrites=Co(n.visibleWrites,i.path);else{const a=i.children;ue(a,l=>{n.visibleWrites=Co(n.visibleWrites,Y(i.path,l))})}return!0}else return!1}function np(n,e){if(n.snap)return _e(n.path,e);for(const t in n.children)if(n.children.hasOwnProperty(t)&&_e(Y(n.path,t),e))return!0;return!1}function ip(n){n.visibleWrites=Fl(n.allWrites,sp,L()),n.allWrites.length>0?n.lastWriteId=n.allWrites[n.allWrites.length-1].writeId:n.lastWriteId=-1}function sp(n){return n.visible}function Fl(n,e,t){let i=ge.empty();for(let s=0;s<n.length;++s){const r=n[s];if(e(r)){const o=r.path;let a;if(r.snap)_e(t,o)?(a=oe(t,o),i=en(i,a,r.snap)):_e(o,t)&&(a=oe(o,t),i=en(i,L(),r.snap.getChild(a)));else if(r.children){if(_e(t,o))a=oe(t,o),i=bo(i,a,r.children);else if(_e(o,t))if(a=oe(o,t),P(a))i=bo(i,L(),r.children);else{const l=Ot(r.children,N(a));if(l){const c=l.getChild(H(a));i=en(i,L(),c)}}}else throw Ft("WriteRecord should have .snap or .children")}}return i}function $l(n,e,t,i,s){if(!i&&!s){const r=vt(n.visibleWrites,e);if(r!=null)return r;{const o=Ke(n.visibleWrites,e);if(_s(o))return t;if(t==null&&!fs(o,L()))return null;{const a=t||S.EMPTY_NODE;return Mt(o,a)}}}else{const r=Ke(n.visibleWrites,e);if(!s&&_s(r))return t;if(!s&&t==null&&!fs(r,L()))return null;{const o=function(c){return(c.visible||s)&&(!i||!~i.indexOf(c.writeId))&&(_e(c.path,e)||_e(e,c.path))},a=Fl(n.allWrites,o,e),l=t||S.EMPTY_NODE;return Mt(a,l)}}}function rp(n,e,t){let i=S.EMPTY_NODE;const s=vt(n.visibleWrites,e);if(s)return s.isLeafNode()||s.forEachChild(q,(r,o)=>{i=i.updateImmediateChild(r,o)}),i;if(t){const r=Ke(n.visibleWrites,e);return t.forEachChild(q,(o,a)=>{const l=Mt(Ke(r,new W(o)),a);i=i.updateImmediateChild(o,l)}),To(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}else{const r=Ke(n.visibleWrites,e);return To(r).forEach(o=>{i=i.updateImmediateChild(o.name,o.node)}),i}}function op(n,e,t,i,s){p(i||s,"Either existingEventSnap or existingServerSnap must exist");const r=Y(e,t);if(fs(n.visibleWrites,r))return null;{const o=Ke(n.visibleWrites,r);return _s(o)?s.getChild(t):Mt(o,s.getChild(t))}}function ap(n,e,t,i){const s=Y(e,t),r=vt(n.visibleWrites,s);if(r!=null)return r;if(i.isCompleteForChild(t)){const o=Ke(n.visibleWrites,s);return Mt(o,i.getNode().getImmediateChild(t))}else return null}function lp(n,e){return vt(n.visibleWrites,e)}function cp(n,e,t,i,s,r,o){let a;const l=Ke(n.visibleWrites,e),c=vt(l,L());if(c!=null)a=c;else if(t!=null)a=Mt(l,t);else return[];if(a=a.withIndex(o),!a.isEmpty()&&!a.isLeafNode()){const u=[],h=o.getCompare(),d=r?a.getReverseIteratorFrom(i,o):a.getIteratorFrom(i,o);let f=d.getNext();for(;f&&u.length<s;)h(f,i)!==0&&u.push(f),f=d.getNext();return u}else return[]}function up(){return{visibleWrites:ge.empty(),allWrites:[],lastWriteId:-1}}function oi(n,e,t,i){return $l(n.writeTree,n.treePath,e,t,i)}function Qs(n,e){return rp(n.writeTree,n.treePath,e)}function So(n,e,t,i){return op(n.writeTree,n.treePath,e,t,i)}function ai(n,e){return lp(n.writeTree,Y(n.treePath,e))}function hp(n,e,t,i,s,r){return cp(n.writeTree,n.treePath,e,t,i,s,r)}function Xs(n,e,t){return ap(n.writeTree,n.treePath,e,t)}function Bl(n,e){return Wl(Y(n.treePath,e),n.writeTree)}function Wl(n,e){return{treePath:n,writeTree:e}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dp{constructor(){this.changeMap=new Map}trackChildChange(e){const t=e.type,i=e.childName;p(t==="child_added"||t==="child_changed"||t==="child_removed","Only child changes supported for tracking"),p(i!==".priority","Only non-priority child changes can be tracked.");const s=this.changeMap.get(i);if(s){const r=s.type;if(t==="child_added"&&r==="child_removed")this.changeMap.set(i,hn(i,e.snapshotNode,s.snapshotNode));else if(t==="child_removed"&&r==="child_added")this.changeMap.delete(i);else if(t==="child_removed"&&r==="child_changed")this.changeMap.set(i,un(i,s.oldSnap));else if(t==="child_changed"&&r==="child_added")this.changeMap.set(i,Lt(i,e.snapshotNode));else if(t==="child_changed"&&r==="child_changed")this.changeMap.set(i,hn(i,e.snapshotNode,s.oldSnap));else throw Ft("Illegal combination of changes: "+e+" occurred after "+s)}else this.changeMap.set(i,e)}getChanges(){return Array.from(this.changeMap.values())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fp{getCompleteChild(e){return null}getChildAfterChild(e,t,i){return null}}const Hl=new fp;class Js{constructor(e,t,i=null){this.writes_=e,this.viewCache_=t,this.optCompleteServerCache_=i}getCompleteChild(e){const t=this.viewCache_.eventCache;if(t.isCompleteForChild(e))return t.getNode().getImmediateChild(e);{const i=this.optCompleteServerCache_!=null?new _t(this.optCompleteServerCache_,!0,!1):this.viewCache_.serverCache;return Xs(this.writes_,e,i)}}getChildAfterChild(e,t,i){const s=this.optCompleteServerCache_!=null?this.optCompleteServerCache_:pt(this.viewCache_),r=hp(this.writes_,s,t,1,i,e);return r.length===0?null:r[0]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _p(n){return{filter:n}}function pp(n,e){p(e.eventCache.getNode().isIndexed(n.filter.getIndex()),"Event snap not indexed"),p(e.serverCache.getNode().isIndexed(n.filter.getIndex()),"Server snap not indexed")}function gp(n,e,t,i,s){const r=new dp;let o,a;if(t.type===pe.OVERWRITE){const c=t;c.source.fromUser?o=ps(n,e,c.path,c.snap,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered()&&!P(c.path),o=li(n,e,c.path,c.snap,i,s,a,r))}else if(t.type===pe.MERGE){const c=t;c.source.fromUser?o=vp(n,e,c.path,c.children,i,s,r):(p(c.source.fromServer,"Unknown source."),a=c.source.tagged||e.serverCache.isFiltered(),o=gs(n,e,c.path,c.children,i,s,a,r))}else if(t.type===pe.ACK_USER_WRITE){const c=t;c.revert?o=Ep(n,e,c.path,i,s,r):o=yp(n,e,c.path,c.affectedTree,i,s,r)}else if(t.type===pe.LISTEN_COMPLETE)o=wp(n,e,t.path,i,r);else throw Ft("Unknown operation type: "+t.type);const l=r.getChanges();return mp(e,o,l),{viewCache:o,changes:l}}function mp(n,e,t){const i=e.eventCache;if(i.isFullyInitialized()){const s=i.getNode().isLeafNode()||i.getNode().isEmpty(),r=ds(n);(t.length>0||!n.eventCache.isFullyInitialized()||s&&!i.getNode().equals(r)||!i.getNode().getPriority().equals(r.getPriority()))&&t.push(Dl(ds(e)))}}function Vl(n,e,t,i,s,r){const o=e.eventCache;if(ai(i,t)!=null)return e;{let a,l;if(P(t))if(p(e.serverCache.isFullyInitialized(),"If change path is empty, we must have complete server data"),e.serverCache.isFiltered()){const c=pt(e),u=c instanceof S?c:S.EMPTY_NODE,h=Qs(i,u);a=n.filter.updateFullNode(e.eventCache.getNode(),h,r)}else{const c=oi(i,pt(e));a=n.filter.updateFullNode(e.eventCache.getNode(),c,r)}else{const c=N(t);if(c===".priority"){p(Qe(t)===1,"Can't have a priority with additional path components");const u=o.getNode();l=e.serverCache.getNode();const h=So(i,t,u,l);h!=null?a=n.filter.updatePriority(u,h):a=o.getNode()}else{const u=H(t);let h;if(o.isCompleteForChild(c)){l=e.serverCache.getNode();const d=So(i,t,o.getNode(),l);d!=null?h=o.getNode().getImmediateChild(c).updateChild(u,d):h=o.getNode().getImmediateChild(c)}else h=Xs(i,c,e.serverCache);h!=null?a=n.filter.updateChild(o.getNode(),c,h,u,s,r):a=o.getNode()}}return Zt(e,a,o.isFullyInitialized()||P(t),n.filter.filtersNodes())}}function li(n,e,t,i,s,r,o,a){const l=e.serverCache;let c;const u=o?n.filter:n.filter.getIndexedFilter();if(P(t))c=u.updateFullNode(l.getNode(),i,null);else if(u.filtersNodes()&&!l.isFiltered()){const f=l.getNode().updateChild(t,i);c=u.updateFullNode(l.getNode(),f,null)}else{const f=N(t);if(!l.isCompleteForPath(t)&&Qe(t)>1)return e;const _=H(t),E=l.getNode().getImmediateChild(f).updateChild(_,i);f===".priority"?c=u.updatePriority(l.getNode(),E):c=u.updateChild(l.getNode(),f,E,_,Hl,null)}const h=Ml(e,c,l.isFullyInitialized()||P(t),u.filtersNodes()),d=new Js(s,h,r);return Vl(n,h,t,s,d,a)}function ps(n,e,t,i,s,r,o){const a=e.eventCache;let l,c;const u=new Js(s,e,r);if(P(t))c=n.filter.updateFullNode(e.eventCache.getNode(),i,o),l=Zt(e,c,!0,n.filter.filtersNodes());else{const h=N(t);if(h===".priority")c=n.filter.updatePriority(e.eventCache.getNode(),i),l=Zt(e,c,a.isFullyInitialized(),a.isFiltered());else{const d=H(t),f=a.getNode().getImmediateChild(h);let _;if(P(d))_=i;else{const v=u.getCompleteChild(h);v!=null?Cl(d)===".priority"&&v.getChild(Sl(d)).isEmpty()?_=v:_=v.updateChild(d,i):_=S.EMPTY_NODE}if(f.equals(_))l=e;else{const v=n.filter.updateChild(a.getNode(),h,_,d,u,o);l=Zt(e,v,a.isFullyInitialized(),n.filter.filtersNodes())}}}return l}function Ro(n,e){return n.eventCache.isCompleteForChild(e)}function vp(n,e,t,i,s,r,o){let a=e;return i.foreach((l,c)=>{const u=Y(t,l);Ro(e,N(u))&&(a=ps(n,a,u,c,s,r,o))}),i.foreach((l,c)=>{const u=Y(t,l);Ro(e,N(u))||(a=ps(n,a,u,c,s,r,o))}),a}function ko(n,e,t){return t.foreach((i,s)=>{e=e.updateChild(i,s)}),e}function gs(n,e,t,i,s,r,o,a){if(e.serverCache.getNode().isEmpty()&&!e.serverCache.isFullyInitialized())return e;let l=e,c;P(t)?c=i:c=new j(null).setTree(t,i);const u=e.serverCache.getNode();return c.children.inorderTraversal((h,d)=>{if(u.hasChild(h)){const f=e.serverCache.getNode().getImmediateChild(h),_=ko(n,f,d);l=li(n,l,new W(h),_,s,r,o,a)}}),c.children.inorderTraversal((h,d)=>{const f=!e.serverCache.isCompleteForChild(h)&&d.value===null;if(!u.hasChild(h)&&!f){const _=e.serverCache.getNode().getImmediateChild(h),v=ko(n,_,d);l=li(n,l,new W(h),v,s,r,o,a)}}),l}function yp(n,e,t,i,s,r,o){if(ai(s,t)!=null)return e;const a=e.serverCache.isFiltered(),l=e.serverCache;if(i.value!=null){if(P(t)&&l.isFullyInitialized()||l.isCompleteForPath(t))return li(n,e,t,l.getNode().getChild(t),s,r,a,o);if(P(t)){let c=new j(null);return l.getNode().forEachChild(At,(u,h)=>{c=c.set(new W(u),h)}),gs(n,e,t,c,s,r,a,o)}else return e}else{let c=new j(null);return i.foreach((u,h)=>{const d=Y(t,u);l.isCompleteForPath(d)&&(c=c.set(u,l.getNode().getChild(d)))}),gs(n,e,t,c,s,r,a,o)}}function wp(n,e,t,i,s){const r=e.serverCache,o=Ml(e,r.getNode(),r.isFullyInitialized()||P(t),r.isFiltered());return Vl(n,o,t,i,Hl,s)}function Ep(n,e,t,i,s,r){let o;if(ai(i,t)!=null)return e;{const a=new Js(i,e,s),l=e.eventCache.getNode();let c;if(P(t)||N(t)===".priority"){let u;if(e.serverCache.isFullyInitialized())u=oi(i,pt(e));else{const h=e.serverCache.getNode();p(h instanceof S,"serverChildren would be complete if leaf node"),u=Qs(i,h)}u=u,c=n.filter.updateFullNode(l,u,r)}else{const u=N(t);let h=Xs(i,u,e.serverCache);h==null&&e.serverCache.isCompleteForChild(u)&&(h=l.getImmediateChild(u)),h!=null?c=n.filter.updateChild(l,u,h,H(t),a,r):e.eventCache.getNode().hasChild(u)?c=n.filter.updateChild(l,u,S.EMPTY_NODE,H(t),a,r):c=l,c.isEmpty()&&e.serverCache.isFullyInitialized()&&(o=oi(i,pt(e)),o.isLeafNode()&&(c=n.filter.updateFullNode(c,o,r)))}return o=e.serverCache.isFullyInitialized()||ai(i,L())!=null,Zt(e,c,o,n.filter.filtersNodes())}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ip{constructor(e,t){this.query_=e,this.eventRegistrations_=[];const i=this.query_._queryParams,s=new qs(i.getIndex()),r=W_(i);this.processor_=_p(r);const o=t.serverCache,a=t.eventCache,l=s.updateFullNode(S.EMPTY_NODE,o.getNode(),null),c=r.updateFullNode(S.EMPTY_NODE,a.getNode(),null),u=new _t(l,o.isFullyInitialized(),s.filtersNodes()),h=new _t(c,a.isFullyInitialized(),r.filtersNodes());this.viewCache_=Ci(h,u),this.eventGenerator_=new K_(this.query_)}get query(){return this.query_}}function bp(n){return n.viewCache_.serverCache.getNode()}function Cp(n,e){const t=pt(n.viewCache_);return t&&(n.query._queryParams.loadsAllData()||!P(e)&&!t.getImmediateChild(N(e)).isEmpty())?t.getChild(e):null}function No(n){return n.eventRegistrations_.length===0}function Tp(n,e){n.eventRegistrations_.push(e)}function Ao(n,e,t){const i=[];if(t){p(e==null,"A cancel should cancel all event registrations.");const s=n.query._path;n.eventRegistrations_.forEach(r=>{const o=r.createCancelEvent(t,s);o&&i.push(o)})}if(e){let s=[];for(let r=0;r<n.eventRegistrations_.length;++r){const o=n.eventRegistrations_[r];if(!o.matches(e))s.push(o);else if(e.hasAnyCallback()){s=s.concat(n.eventRegistrations_.slice(r+1));break}}n.eventRegistrations_=s}else n.eventRegistrations_=[];return i}function Po(n,e,t,i){e.type===pe.MERGE&&e.source.queryId!==null&&(p(pt(n.viewCache_),"We should always have a full cache before handling merges"),p(ds(n.viewCache_),"Missing event cache, even though we have a server cache"));const s=n.viewCache_,r=gp(n.processor_,s,e,t,i);return pp(n.processor_,r.viewCache),p(r.viewCache.serverCache.isFullyInitialized()||!s.serverCache.isFullyInitialized(),"Once a server snap is complete, it should never go back"),n.viewCache_=r.viewCache,jl(n,r.changes,r.viewCache.eventCache.getNode(),null)}function Sp(n,e){const t=n.viewCache_.eventCache,i=[];return t.getNode().isLeafNode()||t.getNode().forEachChild(q,(r,o)=>{i.push(Lt(r,o))}),t.isFullyInitialized()&&i.push(Dl(t.getNode())),jl(n,i,t.getNode(),e)}function jl(n,e,t,i){const s=i?[i]:n.eventRegistrations_;return Y_(n.eventGenerator_,e,t,s)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ci;class Rp{constructor(){this.views=new Map}}function kp(n){p(!ci,"__referenceConstructor has already been defined"),ci=n}function Np(){return p(ci,"Reference.ts has not been loaded"),ci}function Ap(n){return n.views.size===0}function Zs(n,e,t,i){const s=e.source.queryId;if(s!==null){const r=n.views.get(s);return p(r!=null,"SyncTree gave us an op for an invalid query."),Po(r,e,t,i)}else{let r=[];for(const o of n.views.values())r=r.concat(Po(o,e,t,i));return r}}function Pp(n,e,t,i,s){const r=e._queryIdentifier,o=n.views.get(r);if(!o){let a=oi(t,s?i:null),l=!1;a?l=!0:i instanceof S?(a=Qs(t,i),l=!1):(a=S.EMPTY_NODE,l=!1);const c=Ci(new _t(a,l,!1),new _t(i,s,!1));return new Ip(e,c)}return o}function Op(n,e,t,i,s,r){const o=Pp(n,e,i,s,r);return n.views.has(e._queryIdentifier)||n.views.set(e._queryIdentifier,o),Tp(o,t),Sp(o,t)}function Dp(n,e,t,i){const s=e._queryIdentifier,r=[];let o=[];const a=Xe(n);if(s==="default")for(const[l,c]of n.views.entries())o=o.concat(Ao(c,t,i)),No(c)&&(n.views.delete(l),c.query._queryParams.loadsAllData()||r.push(c.query));else{const l=n.views.get(s);l&&(o=o.concat(Ao(l,t,i)),No(l)&&(n.views.delete(s),l.query._queryParams.loadsAllData()||r.push(l.query)))}return a&&!Xe(n)&&r.push(new(Np())(e._repo,e._path)),{removed:r,events:o}}function ql(n){const e=[];for(const t of n.views.values())t.query._queryParams.loadsAllData()||e.push(t);return e}function Pt(n,e){let t=null;for(const i of n.views.values())t=t||Cp(i,e);return t}function zl(n,e){if(e._queryParams.loadsAllData())return Ti(n);{const i=e._queryIdentifier;return n.views.get(i)}}function Gl(n,e){return zl(n,e)!=null}function Xe(n){return Ti(n)!=null}function Ti(n){for(const e of n.views.values())if(e.query._queryParams.loadsAllData())return e;return null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let ui;function xp(n){p(!ui,"__referenceConstructor has already been defined"),ui=n}function Lp(){return p(ui,"Reference.ts has not been loaded"),ui}let Mp=1;class Oo{constructor(e){this.listenProvider_=e,this.syncPointTree_=new j(null),this.pendingWriteTree_=up(),this.tagToQueryMap=new Map,this.queryToTagMap=new Map}}function Kl(n,e,t,i,s){return Z_(n.pendingWriteTree_,e,t,i,s),s?Tn(n,new ft(Ll(),e,t)):[]}function rt(n,e,t=!1){const i=ep(n.pendingWriteTree_,e);if(tp(n.pendingWriteTree_,e)){let r=new j(null);return i.snap!=null?r=r.set(L(),!0):ue(i.children,o=>{r=r.set(new W(o),!0)}),Tn(n,new ri(i.path,r,t))}else return[]}function Si(n,e,t){return Tn(n,new ft(Gs(),e,t))}function Up(n,e,t){const i=j.fromObject(t);return Tn(n,new _n(Gs(),e,i))}function Fp(n,e){return Tn(n,new fn(Gs(),e))}function $p(n,e,t){const i=tr(n,t);if(i){const s=nr(i),r=s.path,o=s.queryId,a=oe(r,e),l=new fn(Ks(o),a);return ir(n,r,l)}else return[]}function ms(n,e,t,i,s=!1){const r=e._path,o=n.syncPointTree_.get(r);let a=[];if(o&&(e._queryIdentifier==="default"||Gl(o,e))){const l=Dp(o,e,t,i);Ap(o)&&(n.syncPointTree_=n.syncPointTree_.remove(r));const c=l.removed;if(a=l.events,!s){const u=c.findIndex(d=>d._queryParams.loadsAllData())!==-1,h=n.syncPointTree_.findOnPath(r,(d,f)=>Xe(f));if(u&&!h){const d=n.syncPointTree_.subtree(r);if(!d.isEmpty()){const f=Hp(d);for(let _=0;_<f.length;++_){const v=f[_],E=v.query,k=Xl(n,v);n.listenProvider_.startListening(tn(E),hi(n,E),k.hashFn,k.onComplete)}}}!h&&c.length>0&&!i&&(u?n.listenProvider_.stopListening(tn(e),null):c.forEach(d=>{const f=n.queryToTagMap.get(Ri(d));n.listenProvider_.stopListening(tn(d),f)}))}Vp(n,c)}return a}function Bp(n,e,t,i){const s=tr(n,i);if(s!=null){const r=nr(s),o=r.path,a=r.queryId,l=oe(o,e),c=new ft(Ks(a),l,t);return ir(n,o,c)}else return[]}function Wp(n,e,t,i){const s=tr(n,i);if(s){const r=nr(s),o=r.path,a=r.queryId,l=oe(o,e),c=j.fromObject(t),u=new _n(Ks(a),l,c);return ir(n,o,u)}else return[]}function Do(n,e,t,i=!1){const s=e._path;let r=null,o=!1;n.syncPointTree_.foreachOnPath(s,(d,f)=>{const _=oe(d,s);r=r||Pt(f,_),o=o||Xe(f)});let a=n.syncPointTree_.get(s);a?(o=o||Xe(a),r=r||Pt(a,L())):(a=new Rp,n.syncPointTree_=n.syncPointTree_.set(s,a));let l;r!=null?l=!0:(l=!1,r=S.EMPTY_NODE,n.syncPointTree_.subtree(s).foreachChild((f,_)=>{const v=Pt(_,L());v&&(r=r.updateImmediateChild(f,v))}));const c=Gl(a,e);if(!c&&!e._queryParams.loadsAllData()){const d=Ri(e);p(!n.queryToTagMap.has(d),"View does not exist, but we have a tag");const f=jp();n.queryToTagMap.set(d,f),n.tagToQueryMap.set(f,d)}const u=Ys(n.pendingWriteTree_,s);let h=Op(a,e,t,u,r,l);if(!c&&!o&&!i){const d=zl(a,e);h=h.concat(qp(n,e,d))}return h}function er(n,e,t){const s=n.pendingWriteTree_,r=n.syncPointTree_.findOnPath(e,(o,a)=>{const l=oe(o,e),c=Pt(a,l);if(c)return c});return $l(s,e,r,t,!0)}function Tn(n,e){return Yl(e,n.syncPointTree_,null,Ys(n.pendingWriteTree_,L()))}function Yl(n,e,t,i){if(P(n.path))return Ql(n,e,t,i);{const s=e.get(L());t==null&&s!=null&&(t=Pt(s,L()));let r=[];const o=N(n.path),a=n.operationForChild(o),l=e.children.get(o);if(l&&a){const c=t?t.getImmediateChild(o):null,u=Bl(i,o);r=r.concat(Yl(a,l,c,u))}return s&&(r=r.concat(Zs(s,n,i,t))),r}}function Ql(n,e,t,i){const s=e.get(L());t==null&&s!=null&&(t=Pt(s,L()));let r=[];return e.children.inorderTraversal((o,a)=>{const l=t?t.getImmediateChild(o):null,c=Bl(i,o),u=n.operationForChild(o);u&&(r=r.concat(Ql(u,a,l,c)))}),s&&(r=r.concat(Zs(s,n,i,t))),r}function Xl(n,e){const t=e.query,i=hi(n,t);return{hashFn:()=>(bp(e)||S.EMPTY_NODE).hash(),onComplete:s=>{if(s==="ok")return i?$p(n,t._path,i):Fp(n,t._path);{const r=Bf(s,t);return ms(n,t,null,r)}}}}function hi(n,e){const t=Ri(e);return n.queryToTagMap.get(t)}function Ri(n){return n._path.toString()+"$"+n._queryIdentifier}function tr(n,e){return n.tagToQueryMap.get(e)}function nr(n){const e=n.indexOf("$");return p(e!==-1&&e<n.length-1,"Bad queryKey."),{queryId:n.substr(e+1),path:new W(n.substr(0,e))}}function ir(n,e,t){const i=n.syncPointTree_.get(e);p(i,"Missing sync point for query tag that we're tracking");const s=Ys(n.pendingWriteTree_,e);return Zs(i,t,s,null)}function Hp(n){return n.fold((e,t,i)=>{if(t&&Xe(t))return[Ti(t)];{let s=[];return t&&(s=ql(t)),ue(i,(r,o)=>{s=s.concat(o)}),s}})}function tn(n){return n._queryParams.loadsAllData()&&!n._queryParams.isDefault()?new(Lp())(n._repo,n._path):n}function Vp(n,e){for(let t=0;t<e.length;++t){const i=e[t];if(!i._queryParams.loadsAllData()){const s=Ri(i),r=n.queryToTagMap.get(s);n.queryToTagMap.delete(s),n.tagToQueryMap.delete(r)}}}function jp(){return Mp++}function qp(n,e,t){const i=e._path,s=hi(n,e),r=Xl(n,t),o=n.listenProvider_.startListening(tn(e),s,r.hashFn,r.onComplete),a=n.syncPointTree_.subtree(i);if(s)p(!Xe(a.value),"If we're adding a query, it shouldn't be shadowed");else{const l=a.fold((c,u,h)=>{if(!P(c)&&u&&Xe(u))return[Ti(u).query];{let d=[];return u&&(d=d.concat(ql(u).map(f=>f.query))),ue(h,(f,_)=>{d=d.concat(_)}),d}});for(let c=0;c<l.length;++c){const u=l[c];n.listenProvider_.stopListening(tn(u),hi(n,u))}}return o}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(e){this.node_=e}getImmediateChild(e){const t=this.node_.getImmediateChild(e);return new sr(t)}node(){return this.node_}}class rr{constructor(e,t){this.syncTree_=e,this.path_=t}getImmediateChild(e){const t=Y(this.path_,e);return new rr(this.syncTree_,t)}node(){return er(this.syncTree_,this.path_)}}const zp=function(n){return n=n||{},n.timestamp=n.timestamp||new Date().getTime(),n},xo=function(n,e,t){if(!n||typeof n!="object")return n;if(p(".sv"in n,"Unexpected leaf node or priority contents"),typeof n[".sv"]=="string")return Gp(n[".sv"],e,t);if(typeof n[".sv"]=="object")return Kp(n[".sv"],e);p(!1,"Unexpected server value: "+JSON.stringify(n,null,2))},Gp=function(n,e,t){switch(n){case"timestamp":return t.timestamp;default:p(!1,"Unexpected server value: "+n)}},Kp=function(n,e,t){n.hasOwnProperty("increment")||p(!1,"Unexpected server value: "+JSON.stringify(n,null,2));const i=n.increment;typeof i!="number"&&p(!1,"Unexpected increment value: "+i);const s=e.node();if(p(s!==null&&typeof s<"u","Expected ChildrenNode.EMPTY_NODE for nulls"),!s.isLeafNode())return i;const o=s.getValue();return typeof o!="number"?i:o+i},Yp=function(n,e,t,i){return or(e,new rr(t,n),i)},Jl=function(n,e,t){return or(n,new sr(e),t)};function or(n,e,t){const i=n.getPriority().val(),s=xo(i,e.getImmediateChild(".priority"),t);let r;if(n.isLeafNode()){const o=n,a=xo(o.getValue(),e,t);return a!==o.getValue()||s!==o.getPriority().val()?new X(a,ee(s)):n}else{const o=n;return r=o,s!==o.getPriority().val()&&(r=r.updatePriority(new X(s))),o.forEachChild(q,(a,l)=>{const c=or(l,e.getImmediateChild(a),t);c!==l&&(r=r.updateImmediateChild(a,c))}),r}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ar{constructor(e="",t=null,i={children:{},childCount:0}){this.name=e,this.parent=t,this.node=i}}function lr(n,e){let t=e instanceof W?e:new W(e),i=n,s=N(t);for(;s!==null;){const r=Ot(i.node.children,s)||{children:{},childCount:0};i=new ar(s,i,r),t=H(t),s=N(t)}return i}function Ht(n){return n.node.value}function Zl(n,e){n.node.value=e,vs(n)}function ec(n){return n.node.childCount>0}function Qp(n){return Ht(n)===void 0&&!ec(n)}function ki(n,e){ue(n.node.children,(t,i)=>{e(new ar(t,n,i))})}function tc(n,e,t,i){t&&!i&&e(n),ki(n,s=>{tc(s,e,!0,i)}),t&&i&&e(n)}function Xp(n,e,t){let i=t?n:n.parent;for(;i!==null;){if(e(i))return!0;i=i.parent}return!1}function Sn(n){return new W(n.parent===null?n.name:Sn(n.parent)+"/"+n.name)}function vs(n){n.parent!==null&&Jp(n.parent,n.name,n)}function Jp(n,e,t){const i=Qp(t),s=Ue(n.node.children,e);i&&s?(delete n.node.children[e],n.node.childCount--,vs(n)):!i&&!s&&(n.node.children[e]=t.node,n.node.childCount++,vs(n))}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zp=/[\[\].#$\/\u0000-\u001F\u007F]/,eg=/[\[\].#$\u0000-\u001F\u007F]/,Gi=10*1024*1024,nc=function(n){return typeof n=="string"&&n.length!==0&&!Zp.test(n)},ic=function(n){return typeof n=="string"&&n.length!==0&&!eg.test(n)},tg=function(n){return n&&(n=n.replace(/^\/*\.info(\/|$)/,"/")),ic(n)},sc=function(n,e,t,i){i&&e===void 0||cr(Cs(n,"value"),e,t)},cr=function(n,e,t){const i=t instanceof W?new y_(t,n):t;if(e===void 0)throw new Error(n+"contains undefined "+et(i));if(typeof e=="function")throw new Error(n+"contains a function "+et(i)+" with contents = "+e.toString());if(il(e))throw new Error(n+"contains "+e.toString()+" "+et(i));if(typeof e=="string"&&e.length>Gi/3&&vi(e)>Gi)throw new Error(n+"contains a string greater than "+Gi+" utf8 bytes "+et(i)+" ('"+e.substring(0,50)+"...')");if(e&&typeof e=="object"){let s=!1,r=!1;if(ue(e,(o,a)=>{if(o===".value")s=!0;else if(o!==".priority"&&o!==".sv"&&(r=!0,!nc(o)))throw new Error(n+" contains an invalid key ("+o+") "+et(i)+`.  Keys must be non-empty strings and can't contain ".", "#", "$", "/", "[", or "]"`);w_(i,o),cr(n,a,i),E_(i)}),s&&r)throw new Error(n+' contains ".value" child '+et(i)+" in addition to actual children.")}},rc=function(n,e,t,i){if(!(i&&t===void 0)&&!ic(t))throw new Error(Cs(n,e)+'was an invalid path = "'+t+`". Paths must be non-empty strings and can't contain ".", "#", "$", "[", or "]"`)},ng=function(n,e,t,i){t&&(t=t.replace(/^\/*\.info(\/|$)/,"/")),rc(n,e,t,i)},oc=function(n,e){if(N(e)===".info")throw new Error(n+" failed = Can't modify data under /.info/")},ig=function(n,e){const t=e.path.toString();if(typeof e.repoInfo.host!="string"||e.repoInfo.host.length===0||!nc(e.repoInfo.namespace)&&e.repoInfo.host.split(":")[0]!=="localhost"||t.length!==0&&!tg(t))throw new Error(Cs(n,"url")+`must be a valid firebase URL and the path can't contain ".", "#", "$", "[", or "]".`)};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sg{constructor(){this.eventLists_=[],this.recursionDepth_=0}}function ur(n,e){let t=null;for(let i=0;i<e.length;i++){const s=e[i],r=s.getPath();t!==null&&!Hs(r,t.path)&&(n.eventLists_.push(t),t=null),t===null&&(t={events:[],path:r}),t.events.push(s)}t&&n.eventLists_.push(t)}function ac(n,e,t){ur(n,t),lc(n,i=>Hs(i,e))}function Le(n,e,t){ur(n,t),lc(n,i=>_e(i,e)||_e(e,i))}function lc(n,e){n.recursionDepth_++;let t=!0;for(let i=0;i<n.eventLists_.length;i++){const s=n.eventLists_[i];if(s){const r=s.path;e(r)?(rg(n.eventLists_[i]),n.eventLists_[i]=null):t=!1}}t&&(n.eventLists_=[]),n.recursionDepth_--}function rg(n){for(let e=0;e<n.events.length;e++){const t=n.events[e];if(t!==null){n.events[e]=null;const i=t.getEventRunner();at&&te("event: "+t.toString()),Wt(i)}}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const og="repo_interrupt",ag=25;class lg{constructor(e,t,i,s){this.repoInfo_=e,this.forceRestClient_=t,this.authTokenProvider_=i,this.appCheckProvider_=s,this.dataUpdateCount=0,this.statsListener_=null,this.eventQueue_=new sg,this.nextWriteId_=1,this.interceptServerDataCallback_=null,this.onDisconnect_=si(),this.transactionQueueTree_=new ar,this.persistentConnection_=null,this.key=this.repoInfo_.toURLString()}toString(){return(this.repoInfo_.secure?"https://":"http://")+this.repoInfo_.host}}function cg(n,e,t){if(n.stats_=Bs(n.repoInfo_),n.forceRestClient_||jf())n.server_=new ii(n.repoInfo_,(i,s,r,o)=>{Lo(n,i,s,r,o)},n.authTokenProvider_,n.appCheckProvider_),setTimeout(()=>Mo(n,!0),0);else{if(typeof t<"u"&&t!==null){if(typeof t!="object")throw new Error("Only objects are supported for option databaseAuthVariableOverride");try{Z(t)}catch(i){throw new Error("Invalid authOverride provided: "+i)}}n.persistentConnection_=new Oe(n.repoInfo_,e,(i,s,r,o)=>{Lo(n,i,s,r,o)},i=>{Mo(n,i)},i=>{ug(n,i)},n.authTokenProvider_,n.appCheckProvider_,t),n.server_=n.persistentConnection_}n.authTokenProvider_.addTokenChangeListener(i=>{n.server_.refreshAuthToken(i)}),n.appCheckProvider_.addTokenChangeListener(i=>{n.server_.refreshAppCheckToken(i.token)}),n.statsReporter_=Yf(n.repoInfo_,()=>new G_(n.stats_,n.server_)),n.infoData_=new H_,n.infoSyncTree_=new Oo({startListening:(i,s,r,o)=>{let a=[];const l=n.infoData_.getNode(i._path);return l.isEmpty()||(a=Si(n.infoSyncTree_,i._path,l),setTimeout(()=>{o("ok")},0)),a},stopListening:()=>{}}),dr(n,"connected",!1),n.serverSyncTree_=new Oo({startListening:(i,s,r,o)=>(n.server_.listen(i,r,s,(a,l)=>{const c=o(a,l);Le(n.eventQueue_,i._path,c)}),[]),stopListening:(i,s)=>{n.server_.unlisten(i,s)}})}function cc(n){const t=n.infoData_.getNode(new W(".info/serverTimeOffset")).val()||0;return new Date().getTime()+t}function hr(n){return zp({timestamp:cc(n)})}function Lo(n,e,t,i,s){n.dataUpdateCount++;const r=new W(e);t=n.interceptServerDataCallback_?n.interceptServerDataCallback_(e,t):t;let o=[];if(s)if(i){const l=qn(t,c=>ee(c));o=Wp(n.serverSyncTree_,r,l,s)}else{const l=ee(t);o=Bp(n.serverSyncTree_,r,l,s)}else if(i){const l=qn(t,c=>ee(c));o=Up(n.serverSyncTree_,r,l)}else{const l=ee(t);o=Si(n.serverSyncTree_,r,l)}let a=r;o.length>0&&(a=Ni(n,r)),Le(n.eventQueue_,a,o)}function Mo(n,e){dr(n,"connected",e),e===!1&&dg(n)}function ug(n,e){ue(e,(t,i)=>{dr(n,t,i)})}function dr(n,e,t){const i=new W("/.info/"+e),s=ee(t);n.infoData_.updateSnapshot(i,s);const r=Si(n.infoSyncTree_,i,s);Le(n.eventQueue_,i,r)}function uc(n){return n.nextWriteId_++}function hg(n,e,t,i,s){fr(n,"set",{path:e.toString(),value:t,priority:i});const r=hr(n),o=ee(t,i),a=er(n.serverSyncTree_,e),l=Jl(o,a,r),c=uc(n),u=Kl(n.serverSyncTree_,e,l,c,!0);ur(n.eventQueue_,u),n.server_.put(e.toString(),o.val(!0),(d,f)=>{const _=d==="ok";_||le("set at "+e+" failed: "+d);const v=rt(n.serverSyncTree_,c,!_);Le(n.eventQueue_,e,v),pg(n,s,d,f)});const h=pc(n,e);Ni(n,h),Le(n.eventQueue_,h,[])}function dg(n){fr(n,"onDisconnectEvents");const e=hr(n),t=si();hs(n.onDisconnect_,L(),(s,r)=>{const o=Yp(s,r,n.serverSyncTree_,e);xl(t,s,o)});let i=[];hs(t,L(),(s,r)=>{i=i.concat(Si(n.serverSyncTree_,s,r));const o=pc(n,s);Ni(n,o)}),n.onDisconnect_=si(),Le(n.eventQueue_,L(),i)}function fg(n,e,t){let i;N(e._path)===".info"?i=Do(n.infoSyncTree_,e,t):i=Do(n.serverSyncTree_,e,t),ac(n.eventQueue_,e._path,i)}function Uo(n,e,t){let i;N(e._path)===".info"?i=ms(n.infoSyncTree_,e,t):i=ms(n.serverSyncTree_,e,t),ac(n.eventQueue_,e._path,i)}function _g(n){n.persistentConnection_&&n.persistentConnection_.interrupt(og)}function fr(n,...e){let t="";n.persistentConnection_&&(t=n.persistentConnection_.id+":"),te(t,...e)}function pg(n,e,t,i){e&&Wt(()=>{if(t==="ok")e(null);else{const s=(t||"error").toUpperCase();let r=s;i&&(r+=": "+i);const o=new Error(r);o.code=s,e(o)}})}function hc(n,e,t){return er(n.serverSyncTree_,e,t)||S.EMPTY_NODE}function _r(n,e=n.transactionQueueTree_){if(e||Ai(n,e),Ht(e)){const t=fc(n,e);p(t.length>0,"Sending zero length transaction queue"),t.every(s=>s.status===0)&&gg(n,Sn(e),t)}else ec(e)&&ki(e,t=>{_r(n,t)})}function gg(n,e,t){const i=t.map(c=>c.currentWriteId),s=hc(n,e,i);let r=s;const o=s.hash();for(let c=0;c<t.length;c++){const u=t[c];p(u.status===0,"tryToSendTransactionQueue_: items in queue should all be run."),u.status=1,u.retryCount++;const h=oe(e,u.path);r=r.updateChild(h,u.currentOutputSnapshotRaw)}const a=r.val(!0),l=e;n.server_.put(l.toString(),a,c=>{fr(n,"transaction put response",{path:l.toString(),status:c});let u=[];if(c==="ok"){const h=[];for(let d=0;d<t.length;d++)t[d].status=2,u=u.concat(rt(n.serverSyncTree_,t[d].currentWriteId)),t[d].onComplete&&h.push(()=>t[d].onComplete(null,!0,t[d].currentOutputSnapshotResolved)),t[d].unwatcher();Ai(n,lr(n.transactionQueueTree_,e)),_r(n,n.transactionQueueTree_),Le(n.eventQueue_,e,u);for(let d=0;d<h.length;d++)Wt(h[d])}else{if(c==="datastale")for(let h=0;h<t.length;h++)t[h].status===3?t[h].status=4:t[h].status=0;else{le("transaction at "+l.toString()+" failed: "+c);for(let h=0;h<t.length;h++)t[h].status=4,t[h].abortReason=c}Ni(n,e)}},o)}function Ni(n,e){const t=dc(n,e),i=Sn(t),s=fc(n,t);return mg(n,s,i),i}function mg(n,e,t){if(e.length===0)return;const i=[];let s=[];const o=e.filter(a=>a.status===0).map(a=>a.currentWriteId);for(let a=0;a<e.length;a++){const l=e[a],c=oe(t,l.path);let u=!1,h;if(p(c!==null,"rerunTransactionsUnderNode_: relativePath should not be null."),l.status===4)u=!0,h=l.abortReason,s=s.concat(rt(n.serverSyncTree_,l.currentWriteId,!0));else if(l.status===0)if(l.retryCount>=ag)u=!0,h="maxretry",s=s.concat(rt(n.serverSyncTree_,l.currentWriteId,!0));else{const d=hc(n,l.path,o);l.currentInputSnapshot=d;const f=e[a].update(d.val());if(f!==void 0){cr("transaction failed: Data returned ",f,l.path);let _=ee(f);typeof f=="object"&&f!=null&&Ue(f,".priority")||(_=_.updatePriority(d.getPriority()));const E=l.currentWriteId,k=hr(n),T=Jl(_,d,k);l.currentOutputSnapshotRaw=_,l.currentOutputSnapshotResolved=T,l.currentWriteId=uc(n),o.splice(o.indexOf(E),1),s=s.concat(Kl(n.serverSyncTree_,l.path,T,l.currentWriteId,l.applyLocally)),s=s.concat(rt(n.serverSyncTree_,E,!0))}else u=!0,h="nodata",s=s.concat(rt(n.serverSyncTree_,l.currentWriteId,!0))}Le(n.eventQueue_,t,s),s=[],u&&(e[a].status=2,function(d){setTimeout(d,Math.floor(0))}(e[a].unwatcher),e[a].onComplete&&(h==="nodata"?i.push(()=>e[a].onComplete(null,!1,e[a].currentInputSnapshot)):i.push(()=>e[a].onComplete(new Error(h),!1,null))))}Ai(n,n.transactionQueueTree_);for(let a=0;a<i.length;a++)Wt(i[a]);_r(n,n.transactionQueueTree_)}function dc(n,e){let t,i=n.transactionQueueTree_;for(t=N(e);t!==null&&Ht(i)===void 0;)i=lr(i,t),e=H(e),t=N(e);return i}function fc(n,e){const t=[];return _c(n,e,t),t.sort((i,s)=>i.order-s.order),t}function _c(n,e,t){const i=Ht(e);if(i)for(let s=0;s<i.length;s++)t.push(i[s]);ki(e,s=>{_c(n,s,t)})}function Ai(n,e){const t=Ht(e);if(t){let i=0;for(let s=0;s<t.length;s++)t[s].status!==2&&(t[i]=t[s],i++);t.length=i,Zl(e,t.length>0?t:void 0)}ki(e,i=>{Ai(n,i)})}function pc(n,e){const t=Sn(dc(n,e)),i=lr(n.transactionQueueTree_,e);return Xp(i,s=>{Ki(n,s)}),Ki(n,i),tc(i,s=>{Ki(n,s)}),t}function Ki(n,e){const t=Ht(e);if(t){const i=[];let s=[],r=-1;for(let o=0;o<t.length;o++)t[o].status===3||(t[o].status===1?(p(r===o-1,"All SENT items should be at beginning of queue."),r=o,t[o].status=3,t[o].abortReason="set"):(p(t[o].status===0,"Unexpected transaction status in abort"),t[o].unwatcher(),s=s.concat(rt(n.serverSyncTree_,t[o].currentWriteId,!0)),t[o].onComplete&&i.push(t[o].onComplete.bind(null,new Error("set"),!1,null))));r===-1?Zl(e,void 0):t.length=r+1,Le(n.eventQueue_,Sn(e),s);for(let o=0;o<i.length;o++)Wt(i[o])}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function vg(n){let e="";const t=n.split("/");for(let i=0;i<t.length;i++)if(t[i].length>0){let s=t[i];try{s=decodeURIComponent(s.replace(/\+/g," "))}catch{}e+="/"+s}return e}function yg(n){const e={};n.charAt(0)==="?"&&(n=n.substring(1));for(const t of n.split("&")){if(t.length===0)continue;const i=t.split("=");i.length===2?e[decodeURIComponent(i[0])]=decodeURIComponent(i[1]):le(`Invalid query segment '${t}' in query '${n}'`)}return e}const Fo=function(n,e){const t=wg(n),i=t.namespace;t.domain==="firebase.com"&&xe(t.host+" is no longer supported. Please use <YOUR FIREBASE>.firebaseio.com instead"),(!i||i==="undefined")&&t.domain!=="localhost"&&xe("Cannot parse Firebase url. Please use https://<YOUR FIREBASE>.firebaseio.com"),t.secure||Lf();const s=t.scheme==="ws"||t.scheme==="wss";return{repoInfo:new pl(t.host,t.secure,i,s,e,"",i!==t.subdomain),path:new W(t.pathString)}},wg=function(n){let e="",t="",i="",s="",r="",o=!0,a="https",l=443;if(typeof n=="string"){let c=n.indexOf("//");c>=0&&(a=n.substring(0,c-1),n=n.substring(c+2));let u=n.indexOf("/");u===-1&&(u=n.length);let h=n.indexOf("?");h===-1&&(h=n.length),e=n.substring(0,Math.min(u,h)),u<h&&(s=vg(n.substring(u,h)));const d=yg(n.substring(Math.min(n.length,h)));c=e.indexOf(":"),c>=0?(o=a==="https"||a==="wss",l=parseInt(e.substring(c+1),10)):c=e.length;const f=e.slice(0,c);if(f.toLowerCase()==="localhost")t="localhost";else if(f.split(".").length<=2)t=f;else{const _=e.indexOf(".");i=e.substring(0,_).toLowerCase(),t=e.substring(_+1),r=i}"ns"in d&&(r=d.ns)}return{host:e,port:l,domain:t,subdomain:i,secure:o,scheme:a,pathString:s,namespace:r}};/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $o="-0123456789ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz",Eg=function(){let n=0;const e=[];return function(t){const i=t===n;n=t;let s;const r=new Array(8);for(s=7;s>=0;s--)r[s]=$o.charAt(t%64),t=Math.floor(t/64);p(t===0,"Cannot push at time == 0");let o=r.join("");if(i){for(s=11;s>=0&&e[s]===63;s--)e[s]=0;e[s]++}else for(s=0;s<12;s++)e[s]=Math.floor(Math.random()*64);for(s=0;s<12;s++)o+=$o.charAt(e[s]);return p(o.length===20,"nextPushId: Length should be 20."),o}}();/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gc{constructor(e,t,i,s){this.eventType=e,this.eventRegistration=t,this.snapshot=i,this.prevName=s}getPath(){const e=this.snapshot.ref;return this.eventType==="value"?e._path:e.parent._path}getEventType(){return this.eventType}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.getPath().toString()+":"+this.eventType+":"+Z(this.snapshot.exportVal())}}class mc{constructor(e,t,i){this.eventRegistration=e,this.error=t,this.path=i}getPath(){return this.path}getEventType(){return"cancel"}getEventRunner(){return this.eventRegistration.getEventRunner(this)}toString(){return this.path.toString()+":cancel"}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ig{constructor(e,t){this.snapshotCallback=e,this.cancelCallback=t}onValue(e,t){this.snapshotCallback.call(null,e,t)}onCancel(e){return p(this.hasCancelCallback,"Raising a cancel event on a listener with no cancel callback"),this.cancelCallback.call(null,e)}get hasCancelCallback(){return!!this.cancelCallback}matches(e){return this.snapshotCallback===e.snapshotCallback||this.snapshotCallback.userCallback!==void 0&&this.snapshotCallback.userCallback===e.snapshotCallback.userCallback&&this.snapshotCallback.context===e.snapshotCallback.context}}/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class pr{constructor(e,t,i,s){this._repo=e,this._path=t,this._queryParams=i,this._orderByCalled=s}get key(){return P(this._path)?null:Cl(this._path)}get ref(){return new Fe(this._repo,this._path)}get _queryIdentifier(){const e=Eo(this._queryParams),t=Fs(e);return t==="{}"?"default":t}get _queryObject(){return Eo(this._queryParams)}isEqual(e){if(e=ie(e),!(e instanceof pr))return!1;const t=this._repo===e._repo,i=Hs(this._path,e._path),s=this._queryIdentifier===e._queryIdentifier;return t&&i&&s}toJSON(){return this.toString()}toString(){return this._repo.toString()+v_(this._path)}}class Fe extends pr{constructor(e,t){super(e,t,new zs,!1)}get parent(){const e=Sl(this._path);return e===null?null:new Fe(this._repo,e)}get root(){let e=this;for(;e.parent!==null;)e=e.parent;return e}}class pn{constructor(e,t,i){this._node=e,this.ref=t,this._index=i}get priority(){return this._node.getPriority().val()}get key(){return this.ref.key}get size(){return this._node.numChildren()}child(e){const t=new W(e),i=Ut(this.ref,e);return new pn(this._node.getChild(t),i,q)}exists(){return!this._node.isEmpty()}exportVal(){return this._node.val(!0)}forEach(e){return this._node.isLeafNode()?!1:!!this._node.forEachChild(this._index,(i,s)=>e(new pn(s,Ut(this.ref,i),q)))}hasChild(e){const t=new W(e);return!this._node.getChild(t).isEmpty()}hasChildren(){return this._node.isLeafNode()?!1:!this._node.isEmpty()}toJSON(){return this.exportVal()}val(){return this._node.val()}}function vc(n,e){return n=ie(n),n._checkNotDeleted("ref"),e!==void 0?Ut(n._root,e):n._root}function Ut(n,e){return n=ie(n),N(n._path)===null?ng("child","path",e,!1):rc("child","path",e,!1),new Fe(n._repo,Y(n._path,e))}function bg(n,e){n=ie(n),oc("push",n._path),sc("push",e,n._path,!0);const t=cc(n._repo),i=Eg(t),s=Ut(n,i),r=Ut(n,i);let o;return e!=null?o=Cg(r,e).then(()=>r):o=Promise.resolve(r),s.then=o.then.bind(o),s.catch=o.then.bind(o,void 0),s}function Cg(n,e){n=ie(n),oc("set",n._path),sc("set",e,n._path,!1);const t=new mi;return hg(n._repo,n._path,e,null,t.wrapCallback(()=>{})),t.promise}class gr{constructor(e){this.callbackContext=e}respondsTo(e){return e==="value"}createEvent(e,t){const i=t._queryParams.getIndex();return new gc("value",this,new pn(e.snapshotNode,new Fe(t._repo,t._path),i))}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,null)}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new mc(this,e,t):null}matches(e){return e instanceof gr?!e.callbackContext||!this.callbackContext?!0:e.callbackContext.matches(this.callbackContext):!1}hasAnyCallback(){return this.callbackContext!==null}}class mr{constructor(e,t){this.eventType=e,this.callbackContext=t}respondsTo(e){let t=e==="children_added"?"child_added":e;return t=t==="children_removed"?"child_removed":t,this.eventType===t}createCancelEvent(e,t){return this.callbackContext.hasCancelCallback?new mc(this,e,t):null}createEvent(e,t){p(e.childName!=null,"Child events should have a childName.");const i=Ut(new Fe(t._repo,t._path),e.childName),s=t._queryParams.getIndex();return new gc(e.type,this,new pn(e.snapshotNode,i,s),e.prevName)}getEventRunner(e){return e.getEventType()==="cancel"?()=>this.callbackContext.onCancel(e.error):()=>this.callbackContext.onValue(e.snapshot,e.prevName)}matches(e){return e instanceof mr?this.eventType===e.eventType&&(!this.callbackContext||!e.callbackContext||this.callbackContext.matches(e.callbackContext)):!1}hasAnyCallback(){return!!this.callbackContext}}function Tg(n,e,t,i,s){let r;if(typeof i=="object"&&(r=void 0,s=i),typeof i=="function"&&(r=i),s&&s.onlyOnce){const l=t,c=(u,h)=>{Uo(n._repo,n,a),l(u,h)};c.userCallback=t.userCallback,c.context=t.context,t=c}const o=new Ig(t,r||void 0),a=e==="value"?new gr(o):new mr(e,o);return fg(n._repo,n,a),()=>Uo(n._repo,n,a)}function Sg(n,e,t,i){return Tg(n,"value",e,t,i)}kp(Fe);xp(Fe);/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rg="FIREBASE_DATABASE_EMULATOR_HOST",ys={};let kg=!1;function Ng(n,e,t,i){n.repoInfo_=new pl(`${e}:${t}`,!1,n.repoInfo_.namespace,n.repoInfo_.webSocketOnly,n.repoInfo_.nodeAdmin,n.repoInfo_.persistenceKey,n.repoInfo_.includeNamespaceInQueryParams,!0),i&&(n.authTokenProvider_=i)}function Ag(n,e,t,i,s){let r=i||n.options.databaseURL;r===void 0&&(n.options.projectId||xe("Can't determine Firebase Database URL. Be sure to include  a Project ID when calling firebase.initializeApp()."),te("Using default host for project ",n.options.projectId),r=`${n.options.projectId}-default-rtdb.firebaseio.com`);let o=Fo(r,s),a=o.repoInfo,l,c;typeof process<"u"&&process.env&&(c=process.env[Rg]),c?(l=!0,r=`http://${c}?ns=${a.namespace}`,o=Fo(r,s),a=o.repoInfo):l=!o.repoInfo.secure;const u=s&&l?new Nt(Nt.OWNER):new zf(n.name,n.options,e);ig("Invalid Firebase Database URL",o),P(o.path)||xe("Database URL must point to the root of a Firebase Database (not including a child path).");const h=Og(a,n,u,new qf(n.name,t));return new Dg(h,n)}function Pg(n,e){const t=ys[e];(!t||t[n.key]!==n)&&xe(`Database ${e}(${n.repoInfo_}) has already been deleted.`),_g(n),delete t[n.key]}function Og(n,e,t,i){let s=ys[e.name];s||(s={},ys[e.name]=s);let r=s[n.toURLString()];return r&&xe("Database initialized multiple times. Please make sure the format of the database URL matches with each database() call."),r=new lg(n,kg,t,i),s[n.toURLString()]=r,r}class Dg{constructor(e,t){this._repoInternal=e,this.app=t,this.type="database",this._instanceStarted=!1}get _repo(){return this._instanceStarted||(cg(this._repoInternal,this.app.options.appId,this.app.options.databaseAuthVariableOverride),this._instanceStarted=!0),this._repoInternal}get _root(){return this._rootInternal||(this._rootInternal=new Fe(this._repo,L())),this._rootInternal}_delete(){return this._rootInternal!==null&&(Pg(this._repo,this.app.name),this._repoInternal=null,this._rootInternal=null),Promise.resolve()}_checkNotDeleted(e){this._rootInternal===null&&xe("Cannot call "+e+" on a deleted database.")}}function vr(n=Rs(),e){const t=yi(n,"database").getImmediate({identifier:e});if(!t._instanceStarted){const i=la("database");i&&xg(t,...i)}return t}function xg(n,e,t,i={}){n=ie(n),n._checkNotDeleted("useEmulator"),n._instanceStarted&&xe("Cannot call useEmulator() after instance has already been initialized.");const s=n._repoInternal;let r;if(s.repoInfo_.nodeAdmin)i.mockUserToken&&xe('mockUserToken is not supported by the Admin SDK. For client access with mock users, please use the "firebase" package instead of "firebase-admin".'),r=new Nt(Nt.OWNER);else if(i.mockUserToken){const o=typeof i.mockUserToken=="string"?i.mockUserToken:ha(i.mockUserToken,n.app.options.projectId);r=new Nt(o)}Ng(s,e,t,r)}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Lg(n){Af(mt),ut(new Ye("database",(e,{instanceIdentifier:t})=>{const i=e.getProvider("app").getImmediate(),s=e.getProvider("auth-internal"),r=e.getProvider("app-check-internal");return Ag(i,s,r,t)},"PUBLIC").setMultipleInstances(!0)),Ie(io,so,n),Ie(io,so,"esm2017")}Oe.prototype.simpleListen=function(n,e){this.sendRequest("q",{p:n},e)};Oe.prototype.echo=function(n,e){this.sendRequest("echo",{d:n},e)};Lg();function Mg(n){let e,t,i;return{c(){e=Yt("svg"),t=Yt("path"),i=Yt("path"),w(t,"d","M11.47 3.84a.75.75 0 011.06 0l8.69 8.69a.75.75 0 101.06-1.06l-8.689-8.69a2.25 2.25 0 00-3.182 0l-8.69 8.69a.75.75 0 001.061 1.06l8.69-8.69z"),w(i,"d","M12 5.432l8.159 8.159c.03.03.06.058.091.086v6.198c0 1.035-.84 1.875-1.875 1.875H15a.75.75 0 01-.75-.75v-4.5a.75.75 0 00-.75-.75h-3a.75.75 0 00-.75.75V21a.75.75 0 01-.75.75H5.625a1.875 1.875 0 01-1.875-1.875v-6.198a2.29 2.29 0 00.091-.086L12 5.43z"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"viewBox","0 0 24 24"),w(e,"fill","currentColor"),w(e,"class","w-6 h-6")},m(s,r){V(s,e,r),m(e,t),m(e,i)},d(s){s&&$(e)}}}function Ug(n){let e,t;return{c(){e=C("img"),$n(e.src,t="assets/home.svg")||w(e,"src",t),w(e,"alt","home")},m(i,s){V(i,e,s)},d(i){i&&$(e)}}}function Fg(n){let e,t;return{c(){e=C("img"),$n(e.src,t="assets/user.svg")||w(e,"src",t),w(e,"alt","user")},m(i,s){V(i,e,s)},d(i){i&&$(e)}}}function $g(n){let e,t;return{c(){e=Yt("svg"),t=Yt("path"),w(t,"fill-rule","evenodd"),w(t,"d","M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z"),w(t,"clip-rule","evenodd"),w(e,"xmlns","http://www.w3.org/2000/svg"),w(e,"viewBox","0 0 24 24"),w(e,"fill","currentColor"),w(e,"class","w-6 h-6")},m(i,s){V(i,e,s),m(e,t)},d(i){i&&$(e)}}}function Bg(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,_,v,E,k,T,I;function g(M,Q){return M[0]=="home"?Ug:Mg}let y=g(n),b=y(n);function U(M,Q){return M[0]==="my"?$g:Fg}let D=U(n),O=D(n);return{c(){e=C("footer"),t=C("div"),i=C("button"),s=C("div"),b.c(),r=x(),o=C("div"),o.textContent="홈",a=x(),l=C("div"),l.innerHTML='<div class="footer-icons__img"><img src="assets/doc.svg" alt="doc"/></div> <div class="footer-icons__desc">동네생활</div>',c=x(),u=C("div"),u.innerHTML='<div class="footer-icons__img"><img src="assets/location.svg" alt="location"/></div> <div class="footer-icons__desc">내 근처</div>',h=x(),d=C("div"),d.innerHTML='<div class="footer-icons__img"><img src="assets/chat.svg" alt="chat"/></div> <div class="footer-icons__desc">채팅</div>',f=x(),_=C("button"),v=C("div"),O.c(),E=x(),k=C("div"),k.textContent="나의 당근",w(s,"class","footer-icons__img"),w(o,"class","footer-icons__desc"),w(i,"class","footer-icons"),w(l,"class","footer-icons"),w(u,"class","footer-icons"),w(d,"class","footer-icons"),w(v,"class","footer-icons__img"),w(k,"class","footer-icons__desc"),w(_,"class","footer-icons"),w(t,"class","footer-block")},m(M,Q){V(M,e,Q),m(e,t),m(t,i),m(i,s),b.m(s,null),m(i,r),m(i,o),m(t,a),m(t,l),m(t,c),m(t,u),m(t,h),m(t,d),m(t,f),m(t,_),m(_,v),O.m(v,null),m(_,E),m(_,k),T||(I=[we(i,"click",n[1]),we(_,"click",n[2])],T=!0)},p(M,[Q]){y!==(y=g(M))&&(b.d(1),b=y(M),b&&(b.c(),b.m(s,null))),D!==(D=U(M))&&(O.d(1),O=D(M),O&&(O.c(),O.m(v,null)))},i:B,o:B,d(M){M&&$(e),b.d(),O.d(),T=!1,Je(I)}}}function Wg(n,e,t){let{location:i}=e;const s=()=>window.location.hash="/",r=()=>window.location.hash="/my";return n.$$set=o=>{"location"in o&&t(0,i=o.location)},[i,s,r]}class yr extends ke{constructor(e){super(),Re(this,e,Wg,Bg,ye,{location:0})}}function Bo(n,e,t){const i=n.slice();return i[6]=e[t],i}function Wo(n){let e,t,i,s,r,o,a,l,c=n[6].title+"",u,h,d,f=n[6].place+"",_,v,E=n[1](n[6].insertAt)+"",k,T,I,g=n[6].price+"",y,b,U,D=n[6].description+"",O;return{c(){e=C("div"),t=C("div"),i=C("img"),o=x(),a=C("div"),l=C("div"),u=tt(c),h=x(),d=C("div"),_=tt(f),v=x(),k=tt(E),T=x(),I=C("div"),y=tt(g),b=x(),U=C("div"),O=tt(D),w(i,"alt",s=n[6].title),$n(i.src,r=n[6].imgUrl)||w(i,"src",r),w(t,"class","item-list__img"),w(l,"class","item-list__info-title"),w(d,"class","item-list__info-meta"),w(I,"class","item-list__info-price"),w(a,"class","item-list__info"),w(e,"class","item-list")},m(M,Q){V(M,e,Q),m(e,t),m(t,i),m(e,o),m(e,a),m(a,l),m(l,u),m(a,h),m(a,d),m(d,_),m(d,v),m(d,k),m(a,T),m(a,I),m(I,y),m(a,b),m(a,U),m(U,O)},p(M,Q){Q&1&&s!==(s=M[6].title)&&w(i,"alt",s),Q&1&&!$n(i.src,r=M[6].imgUrl)&&w(i,"src",r),Q&1&&c!==(c=M[6].title+"")&&Vt(u,c),Q&1&&f!==(f=M[6].place+"")&&Vt(_,f),Q&1&&E!==(E=M[1](M[6].insertAt)+"")&&Vt(k,E),Q&1&&g!==(g=M[6].price+"")&&Vt(y,g),Q&1&&D!==(D=M[6].description+"")&&Vt(O,D)},d(M){M&&$(e)}}}function Hg(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,_,v,E,k=Or(n[0]),T=[];for(let I=0;I<k.length;I+=1)T[I]=Wo(Bo(n,k,I));return f=new yr({props:{location:"home"}}),{c(){e=C("header"),t=C("div"),i=C("div"),i.textContent=`${n[2]}:${n[3]}`,s=x(),r=C("div"),r.innerHTML='<img src="assets/chart-bar.svg" alt="chart-bar"/> <img src="assets/wifi.svg" alt="wifi"/> <img src="assets/battery.svg" alt="battery"/>',o=x(),a=C("div"),a.innerHTML='<div class="menu-bar__location"><div>역삼1동</div> <div class="menu-bar__location-icon"><img src="assets/arrow-down.svg" alt="arrow-down"/></div></div> <div class="menu-bar__icons"><img src="assets/search.svg" alt="search"/> <img src="assets/menu.svg" alt="menu"/> <img src="assets/alert.svg" alt="alert"/></div>',l=x(),c=C("main");for(let I=0;I<T.length;I+=1)T[I].c();u=x(),h=C("a"),h.textContent="+ 글쓰기",d=x(),Te(f.$$.fragment),_=x(),v=C("div"),v.textContent="화면 사이즈를 줄여주세요.",w(i,"class","info-bar__time svelte-19kx2d2"),w(r,"class","info-bar__icons"),w(t,"class","info-bar"),w(a,"class","menu-bar"),w(h,"class","write-btn"),w(h,"href","#/write"),w(v,"class","media-info-msg")},m(I,g){V(I,e,g),m(e,t),m(t,i),m(t,s),m(t,r),m(e,o),m(e,a),V(I,l,g),V(I,c,g);for(let y=0;y<T.length;y+=1)T[y]&&T[y].m(c,null);m(c,u),m(c,h),V(I,d,g),me(f,I,g),V(I,_,g),V(I,v,g),E=!0},p(I,[g]){if(g&3){k=Or(I[0]);let y;for(y=0;y<k.length;y+=1){const b=Bo(I,k,y);T[y]?T[y].p(b,g):(T[y]=Wo(b),T[y].c(),T[y].m(c,u))}for(;y<T.length;y+=1)T[y].d(1);T.length=k.length}},i(I){E||(re(f.$$.fragment,I),E=!0)},o(I){ce(f.$$.fragment,I),E=!1},d(I){I&&($(e),$(l),$(c),$(d),$(_),$(v)),Wc(T,I),ve(f,I)}}}function Vg(n,e,t){let i;const s=c=>{const u=new Date().getTime()-324e5,h=new Date(u-c),d=h.getHours(),f=h.getMinutes(),_=h.getSeconds();return d>0?`${d}시간 전`:f>0?`${f}분 전`:_>=0?`${_}초 전`:"방금 전"};let r=new Date().getHours(),o=new Date().getMinutes();const a=vr(),l=vc(a,"items/");return Zo(()=>{Sg(l,c=>{const u=c.val();t(0,i=Object.values(u).reverse())})}),t(0,i=[]),[i,s,r,o]}class jg extends ke{constructor(e){super(),Re(this,e,Vg,Hg,ye,{})}}function qg(n){let e;return{c(){e=C("div"),e.textContent="잘못된 경로입니다"},m(t,i){V(t,e,i)},p:B,i:B,o:B,d(t){t&&$(e)}}}class zg extends ke{constructor(e){super(),Re(this,e,null,qg,ye,{})}}function Gg(n){let e;return{c(){e=C("form"),e.innerHTML='<div>회원가입</div> <div><label for="id">아이디</label> <input type="text" id="id" name="id" required=""/></div> <div><label for="password">패스워드</label> <input type="password" id="password" name="password" required=""/></div> <div><label for="password2">패스워드 확인</label> <input type="password" id="password2" name="password2" required=""/></div> <div><label for="name">이름</label> <input type="text" id="name" name="name" required=""/></div> <div><label for="email">이메일</label> <input type="email" id="email" name="email" required=""/></div> <div><button type="submit">회원 가입하기</button></div> <div id="info"></div>',w(e,"id","signup-form"),w(e,"action","/signup"),w(e,"method","POST")},m(t,i){V(t,e,i)},p:B,i:B,o:B,d(t){t&&$(e)}}}class Kg extends ke{constructor(e){super(),Re(this,e,null,Gg,ye,{})}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const yc="firebasestorage.googleapis.com",wc="storageBucket",Yg=2*60*1e3,Qg=10*60*1e3;/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class G extends Me{constructor(e,t,i=0){super(Yi(e),`Firebase Storage: ${t} (${Yi(e)})`),this.status_=i,this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,G.prototype)}get status(){return this.status_}set status(e){this.status_=e}_codeEquals(e){return Yi(e)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(e){this.customData.serverResponse=e,this.customData.serverResponse?this.message=`${this._baseMessage}
${this.customData.serverResponse}`:this.message=this._baseMessage}}var z;(function(n){n.UNKNOWN="unknown",n.OBJECT_NOT_FOUND="object-not-found",n.BUCKET_NOT_FOUND="bucket-not-found",n.PROJECT_NOT_FOUND="project-not-found",n.QUOTA_EXCEEDED="quota-exceeded",n.UNAUTHENTICATED="unauthenticated",n.UNAUTHORIZED="unauthorized",n.UNAUTHORIZED_APP="unauthorized-app",n.RETRY_LIMIT_EXCEEDED="retry-limit-exceeded",n.INVALID_CHECKSUM="invalid-checksum",n.CANCELED="canceled",n.INVALID_EVENT_NAME="invalid-event-name",n.INVALID_URL="invalid-url",n.INVALID_DEFAULT_BUCKET="invalid-default-bucket",n.NO_DEFAULT_BUCKET="no-default-bucket",n.CANNOT_SLICE_BLOB="cannot-slice-blob",n.SERVER_FILE_WRONG_SIZE="server-file-wrong-size",n.NO_DOWNLOAD_URL="no-download-url",n.INVALID_ARGUMENT="invalid-argument",n.INVALID_ARGUMENT_COUNT="invalid-argument-count",n.APP_DELETED="app-deleted",n.INVALID_ROOT_OPERATION="invalid-root-operation",n.INVALID_FORMAT="invalid-format",n.INTERNAL_ERROR="internal-error",n.UNSUPPORTED_ENVIRONMENT="unsupported-environment"})(z||(z={}));function Yi(n){return"storage/"+n}function wr(){const n="An unknown error occurred, please check the error payload for server response.";return new G(z.UNKNOWN,n)}function Xg(n){return new G(z.OBJECT_NOT_FOUND,"Object '"+n+"' does not exist.")}function Jg(n){return new G(z.QUOTA_EXCEEDED,"Quota for bucket '"+n+"' exceeded, please view quota on https://firebase.google.com/pricing/.")}function Zg(){const n="User is not authenticated, please authenticate using Firebase Authentication and try again.";return new G(z.UNAUTHENTICATED,n)}function em(){return new G(z.UNAUTHORIZED_APP,"This app does not have permission to access Firebase Storage on this project.")}function tm(n){return new G(z.UNAUTHORIZED,"User does not have permission to access '"+n+"'.")}function nm(){return new G(z.RETRY_LIMIT_EXCEEDED,"Max retry time for operation exceeded, please try again.")}function im(){return new G(z.CANCELED,"User canceled the upload/download.")}function sm(n){return new G(z.INVALID_URL,"Invalid URL '"+n+"'.")}function rm(n){return new G(z.INVALID_DEFAULT_BUCKET,"Invalid default bucket '"+n+"'.")}function om(){return new G(z.NO_DEFAULT_BUCKET,"No default bucket found. Did you set the '"+wc+"' property when initializing the app?")}function am(){return new G(z.CANNOT_SLICE_BLOB,"Cannot slice blob for upload. Please retry the upload.")}function lm(){return new G(z.NO_DOWNLOAD_URL,"The given file does not have any download URLs.")}function cm(n){return new G(z.UNSUPPORTED_ENVIRONMENT,`${n} is missing. Make sure to install the required polyfills. See https://firebase.google.com/docs/web/environments-js-sdk#polyfills for more information.`)}function ws(n){return new G(z.INVALID_ARGUMENT,n)}function Ec(){return new G(z.APP_DELETED,"The Firebase app was deleted.")}function um(n){return new G(z.INVALID_ROOT_OPERATION,"The operation '"+n+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}function nn(n,e){return new G(z.INVALID_FORMAT,"String does not match format '"+n+"': "+e)}function Kt(n){throw new G(z.INTERNAL_ERROR,"Internal error: "+n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class he{constructor(e,t){this.bucket=e,this.path_=t}get path(){return this.path_}get isRoot(){return this.path.length===0}fullServerUrl(){const e=encodeURIComponent;return"/b/"+e(this.bucket)+"/o/"+e(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(e,t){let i;try{i=he.makeFromUrl(e,t)}catch{return new he(e,"")}if(i.path==="")return i;throw rm(e)}static makeFromUrl(e,t){let i=null;const s="([A-Za-z0-9.\\-_]+)";function r(g){g.path.charAt(g.path.length-1)==="/"&&(g.path_=g.path_.slice(0,-1))}const o="(/(.*))?$",a=new RegExp("^gs://"+s+o,"i"),l={bucket:1,path:3};function c(g){g.path_=decodeURIComponent(g.path)}const u="v[A-Za-z0-9_]+",h=t.replace(/[.]/g,"\\."),d="(/([^?#]*).*)?$",f=new RegExp(`^https?://${h}/${u}/b/${s}/o${d}`,"i"),_={bucket:1,path:3},v=t===yc?"(?:storage.googleapis.com|storage.cloud.google.com)":t,E="([^?#]*)",k=new RegExp(`^https?://${v}/${s}/${E}`,"i"),I=[{regex:a,indices:l,postModify:r},{regex:f,indices:_,postModify:c},{regex:k,indices:{bucket:1,path:2},postModify:c}];for(let g=0;g<I.length;g++){const y=I[g],b=y.regex.exec(e);if(b){const U=b[y.indices.bucket];let D=b[y.indices.path];D||(D=""),i=new he(U,D),y.postModify(i);break}}if(i==null)throw sm(e);return i}}class hm{constructor(e){this.promise_=Promise.reject(e)}getPromise(){return this.promise_}cancel(e=!1){}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dm(n,e,t){let i=1,s=null,r=null,o=!1,a=0;function l(){return a===2}let c=!1;function u(...E){c||(c=!0,e.apply(null,E))}function h(E){s=setTimeout(()=>{s=null,n(f,l())},E)}function d(){r&&clearTimeout(r)}function f(E,...k){if(c){d();return}if(E){d(),u.call(null,E,...k);return}if(l()||o){d(),u.call(null,E,...k);return}i<64&&(i*=2);let I;a===1?(a=2,I=0):I=(i+Math.random())*1e3,h(I)}let _=!1;function v(E){_||(_=!0,d(),!c&&(s!==null?(E||(a=2),clearTimeout(s),h(0)):E||(a=1)))}return h(0),r=setTimeout(()=>{o=!0,v(!0)},t),v}function fm(n){n(!1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function _m(n){return n!==void 0}function pm(n){return typeof n=="object"&&!Array.isArray(n)}function Er(n){return typeof n=="string"||n instanceof String}function Ho(n){return Ir()&&n instanceof Blob}function Ir(){return typeof Blob<"u"&&!au()}function Vo(n,e,t,i){if(i<e)throw ws(`Invalid value for '${n}'. Expected ${e} or greater.`);if(i>t)throw ws(`Invalid value for '${n}'. Expected ${t} or less.`)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function br(n,e,t){let i=e;return t==null&&(i=`https://${e}`),`${t}://${i}/v0${n}`}function Ic(n){const e=encodeURIComponent;let t="?";for(const i in n)if(n.hasOwnProperty(i)){const s=e(i)+"="+e(n[i]);t=t+s+"&"}return t=t.slice(0,-1),t}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var lt;(function(n){n[n.NO_ERROR=0]="NO_ERROR",n[n.NETWORK_ERROR=1]="NETWORK_ERROR",n[n.ABORT=2]="ABORT"})(lt||(lt={}));/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function gm(n,e){const t=n>=500&&n<600,s=[408,429].indexOf(n)!==-1,r=e.indexOf(n)!==-1;return t||s||r}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class mm{constructor(e,t,i,s,r,o,a,l,c,u,h,d=!0){this.url_=e,this.method_=t,this.headers_=i,this.body_=s,this.successCodes_=r,this.additionalRetryCodes_=o,this.callback_=a,this.errorCallback_=l,this.timeout_=c,this.progressCallback_=u,this.connectionFactory_=h,this.retry=d,this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.promise_=new Promise((f,_)=>{this.resolve_=f,this.reject_=_,this.start_()})}start_(){const e=(i,s)=>{if(s){i(!1,new On(!1,null,!0));return}const r=this.connectionFactory_();this.pendingConnection_=r;const o=a=>{const l=a.loaded,c=a.lengthComputable?a.total:-1;this.progressCallback_!==null&&this.progressCallback_(l,c)};this.progressCallback_!==null&&r.addUploadProgressListener(o),r.send(this.url_,this.method_,this.body_,this.headers_).then(()=>{this.progressCallback_!==null&&r.removeUploadProgressListener(o),this.pendingConnection_=null;const a=r.getErrorCode()===lt.NO_ERROR,l=r.getStatus();if(!a||gm(l,this.additionalRetryCodes_)&&this.retry){const u=r.getErrorCode()===lt.ABORT;i(!1,new On(!1,null,u));return}const c=this.successCodes_.indexOf(l)!==-1;i(!0,new On(c,r))})},t=(i,s)=>{const r=this.resolve_,o=this.reject_,a=s.connection;if(s.wasSuccessCode)try{const l=this.callback_(a,a.getResponse());_m(l)?r(l):r()}catch(l){o(l)}else if(a!==null){const l=wr();l.serverResponse=a.getErrorText(),this.errorCallback_?o(this.errorCallback_(a,l)):o(l)}else if(s.canceled){const l=this.appDelete_?Ec():im();o(l)}else{const l=nm();o(l)}};this.canceled_?t(!1,new On(!1,null,!0)):this.backoffId_=dm(e,t,this.timeout_)}getPromise(){return this.promise_}cancel(e){this.canceled_=!0,this.appDelete_=e||!1,this.backoffId_!==null&&fm(this.backoffId_),this.pendingConnection_!==null&&this.pendingConnection_.abort()}}class On{constructor(e,t,i){this.wasSuccessCode=e,this.connection=t,this.canceled=!!i}}function vm(n,e){e!==null&&e.length>0&&(n.Authorization="Firebase "+e)}function ym(n,e){n["X-Firebase-Storage-Version"]="webjs/"+(e??"AppManager")}function wm(n,e){e&&(n["X-Firebase-GMPID"]=e)}function Em(n,e){e!==null&&(n["X-Firebase-AppCheck"]=e)}function Im(n,e,t,i,s,r,o=!0){const a=Ic(n.urlParams),l=n.url+a,c=Object.assign({},n.headers);return wm(c,e),vm(c,t),ym(c,r),Em(c,i),new mm(l,n.method,c,n.body,n.successCodes,n.additionalRetryCodes,n.handler,n.errorHandler,n.timeout,n.progressCallback,s,o)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function bm(){return typeof BlobBuilder<"u"?BlobBuilder:typeof WebKitBlobBuilder<"u"?WebKitBlobBuilder:void 0}function Cm(...n){const e=bm();if(e!==void 0){const t=new e;for(let i=0;i<n.length;i++)t.append(n[i]);return t.getBlob()}else{if(Ir())return new Blob(n);throw new G(z.UNSUPPORTED_ENVIRONMENT,"This browser doesn't seem to support creating Blobs")}}function Tm(n,e,t){return n.webkitSlice?n.webkitSlice(e,t):n.mozSlice?n.mozSlice(e,t):n.slice?n.slice(e,t):null}/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sm(n){if(typeof atob>"u")throw cm("base-64");return atob(n)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ee={RAW:"raw",BASE64:"base64",BASE64URL:"base64url",DATA_URL:"data_url"};class Qi{constructor(e,t){this.data=e,this.contentType=t||null}}function Rm(n,e){switch(n){case Ee.RAW:return new Qi(bc(e));case Ee.BASE64:case Ee.BASE64URL:return new Qi(Cc(n,e));case Ee.DATA_URL:return new Qi(Nm(e),Am(e))}throw wr()}function bc(n){const e=[];for(let t=0;t<n.length;t++){let i=n.charCodeAt(t);if(i<=127)e.push(i);else if(i<=2047)e.push(192|i>>6,128|i&63);else if((i&64512)===55296)if(!(t<n.length-1&&(n.charCodeAt(t+1)&64512)===56320))e.push(239,191,189);else{const r=i,o=n.charCodeAt(++t);i=65536|(r&1023)<<10|o&1023,e.push(240|i>>18,128|i>>12&63,128|i>>6&63,128|i&63)}else(i&64512)===56320?e.push(239,191,189):e.push(224|i>>12,128|i>>6&63,128|i&63)}return new Uint8Array(e)}function km(n){let e;try{e=decodeURIComponent(n)}catch{throw nn(Ee.DATA_URL,"Malformed data URL.")}return bc(e)}function Cc(n,e){switch(n){case Ee.BASE64:{const s=e.indexOf("-")!==-1,r=e.indexOf("_")!==-1;if(s||r)throw nn(n,"Invalid character '"+(s?"-":"_")+"' found: is it base64url encoded?");break}case Ee.BASE64URL:{const s=e.indexOf("+")!==-1,r=e.indexOf("/")!==-1;if(s||r)throw nn(n,"Invalid character '"+(s?"+":"/")+"' found: is it base64 encoded?");e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let t;try{t=Sm(e)}catch(s){throw s.message.includes("polyfill")?s:nn(n,"Invalid character found")}const i=new Uint8Array(t.length);for(let s=0;s<t.length;s++)i[s]=t.charCodeAt(s);return i}class Tc{constructor(e){this.base64=!1,this.contentType=null;const t=e.match(/^data:([^,]+)?,/);if(t===null)throw nn(Ee.DATA_URL,"Must be formatted 'data:[<mediatype>][;base64],<data>");const i=t[1]||null;i!=null&&(this.base64=Pm(i,";base64"),this.contentType=this.base64?i.substring(0,i.length-7):i),this.rest=e.substring(e.indexOf(",")+1)}}function Nm(n){const e=new Tc(n);return e.base64?Cc(Ee.BASE64,e.rest):km(e.rest)}function Am(n){return new Tc(n).contentType}function Pm(n,e){return n.length>=e.length?n.substring(n.length-e.length)===e:!1}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class qe{constructor(e,t){let i=0,s="";Ho(e)?(this.data_=e,i=e.size,s=e.type):e instanceof ArrayBuffer?(t?this.data_=new Uint8Array(e):(this.data_=new Uint8Array(e.byteLength),this.data_.set(new Uint8Array(e))),i=this.data_.length):e instanceof Uint8Array&&(t?this.data_=e:(this.data_=new Uint8Array(e.length),this.data_.set(e)),i=e.length),this.size_=i,this.type_=s}size(){return this.size_}type(){return this.type_}slice(e,t){if(Ho(this.data_)){const i=this.data_,s=Tm(i,e,t);return s===null?null:new qe(s)}else{const i=new Uint8Array(this.data_.buffer,e,t-e);return new qe(i,!0)}}static getBlob(...e){if(Ir()){const t=e.map(i=>i instanceof qe?i.data_:i);return new qe(Cm.apply(null,t))}else{const t=e.map(o=>Er(o)?Rm(Ee.RAW,o).data:o.data_);let i=0;t.forEach(o=>{i+=o.byteLength});const s=new Uint8Array(i);let r=0;return t.forEach(o=>{for(let a=0;a<o.length;a++)s[r++]=o[a]}),new qe(s,!0)}}uploadData(){return this.data_}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Sc(n){let e;try{e=JSON.parse(n)}catch{return null}return pm(e)?e:null}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Om(n){if(n.length===0)return null;const e=n.lastIndexOf("/");return e===-1?"":n.slice(0,e)}function Dm(n,e){const t=e.split("/").filter(i=>i.length>0).join("/");return n.length===0?t:n+"/"+t}function Rc(n){const e=n.lastIndexOf("/",n.length-2);return e===-1?n:n.slice(e+1)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xm(n,e){return e}class se{constructor(e,t,i,s){this.server=e,this.local=t||e,this.writable=!!i,this.xform=s||xm}}let Dn=null;function Lm(n){return!Er(n)||n.length<2?n:Rc(n)}function kc(){if(Dn)return Dn;const n=[];n.push(new se("bucket")),n.push(new se("generation")),n.push(new se("metageneration")),n.push(new se("name","fullPath",!0));function e(r,o){return Lm(o)}const t=new se("name");t.xform=e,n.push(t);function i(r,o){return o!==void 0?Number(o):o}const s=new se("size");return s.xform=i,n.push(s),n.push(new se("timeCreated")),n.push(new se("updated")),n.push(new se("md5Hash",null,!0)),n.push(new se("cacheControl",null,!0)),n.push(new se("contentDisposition",null,!0)),n.push(new se("contentEncoding",null,!0)),n.push(new se("contentLanguage",null,!0)),n.push(new se("contentType",null,!0)),n.push(new se("metadata","customMetadata",!0)),Dn=n,Dn}function Mm(n,e){function t(){const i=n.bucket,s=n.fullPath,r=new he(i,s);return e._makeStorageReference(r)}Object.defineProperty(n,"ref",{get:t})}function Um(n,e,t){const i={};i.type="file";const s=t.length;for(let r=0;r<s;r++){const o=t[r];i[o.local]=o.xform(i,e[o.server])}return Mm(i,n),i}function Nc(n,e,t){const i=Sc(e);return i===null?null:Um(n,i,t)}function Fm(n,e,t,i){const s=Sc(e);if(s===null||!Er(s.downloadTokens))return null;const r=s.downloadTokens;if(r.length===0)return null;const o=encodeURIComponent;return r.split(",").map(c=>{const u=n.bucket,h=n.fullPath,d="/b/"+o(u)+"/o/"+o(h),f=br(d,t,i),_=Ic({alt:"media",token:c});return f+_})[0]}function $m(n,e){const t={},i=e.length;for(let s=0;s<i;s++){const r=e[s];r.writable&&(t[r.server]=n[r.local])}return JSON.stringify(t)}class Ac{constructor(e,t,i,s){this.url=e,this.method=t,this.handler=i,this.timeout=s,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Pc(n){if(!n)throw wr()}function Bm(n,e){function t(i,s){const r=Nc(n,s,e);return Pc(r!==null),r}return t}function Wm(n,e){function t(i,s){const r=Nc(n,s,e);return Pc(r!==null),Fm(r,s,n.host,n._protocol)}return t}function Oc(n){function e(t,i){let s;return t.getStatus()===401?t.getErrorText().includes("Firebase App Check token is invalid")?s=em():s=Zg():t.getStatus()===402?s=Jg(n.bucket):t.getStatus()===403?s=tm(n.path):s=i,s.status=t.getStatus(),s.serverResponse=i.serverResponse,s}return e}function Hm(n){const e=Oc(n);function t(i,s){let r=e(i,s);return i.getStatus()===404&&(r=Xg(n.path)),r.serverResponse=s.serverResponse,r}return t}function Vm(n,e,t){const i=e.fullServerUrl(),s=br(i,n.host,n._protocol),r="GET",o=n.maxOperationRetryTime,a=new Ac(s,r,Wm(n,t),o);return a.errorHandler=Hm(e),a}function jm(n,e){return n&&n.contentType||e&&e.type()||"application/octet-stream"}function qm(n,e,t){const i=Object.assign({},t);return i.fullPath=n.path,i.size=e.size(),i.contentType||(i.contentType=jm(null,e)),i}function zm(n,e,t,i,s){const r=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};function a(){let I="";for(let g=0;g<2;g++)I=I+Math.random().toString().slice(2);return I}const l=a();o["Content-Type"]="multipart/related; boundary="+l;const c=qm(e,i,s),u=$m(c,t),h="--"+l+`\r
Content-Type: application/json; charset=utf-8\r
\r
`+u+`\r
--`+l+`\r
Content-Type: `+c.contentType+`\r
\r
`,d=`\r
--`+l+"--",f=qe.getBlob(h,i,d);if(f===null)throw am();const _={name:c.fullPath},v=br(r,n.host,n._protocol),E="POST",k=n.maxUploadRetryTime,T=new Ac(v,E,Bm(n,t),k);return T.urlParams=_,T.headers=o,T.body=f.uploadData(),T.errorHandler=Oc(e),T}class Gm{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.initXhr(),this.errorCode_=lt.NO_ERROR,this.sendPromise_=new Promise(e=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=lt.ABORT,e()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=lt.NETWORK_ERROR,e()}),this.xhr_.addEventListener("load",()=>{e()})})}send(e,t,i,s){if(this.sent_)throw Kt("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(t,e,!0),s!==void 0)for(const r in s)s.hasOwnProperty(r)&&this.xhr_.setRequestHeader(r,s[r].toString());return i!==void 0?this.xhr_.send(i):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw Kt("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw Kt("cannot .getStatus() before sending");try{return this.xhr_.status}catch{return-1}}getResponse(){if(!this.sent_)throw Kt("cannot .getResponse() before sending");return this.xhr_.response}getErrorText(){if(!this.sent_)throw Kt("cannot .getErrorText() before sending");return this.xhr_.statusText}abort(){this.xhr_.abort()}getResponseHeader(e){return this.xhr_.getResponseHeader(e)}addUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.addEventListener("progress",e)}removeUploadProgressListener(e){this.xhr_.upload!=null&&this.xhr_.upload.removeEventListener("progress",e)}}class Km extends Gm{initXhr(){this.xhr_.responseType="text"}}function Dc(){return new Km}/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gt{constructor(e,t){this._service=e,t instanceof he?this._location=t:this._location=he.makeFromUrl(t,e.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(e,t){return new gt(e,t)}get root(){const e=new he(this._location.bucket,"");return this._newRef(this._service,e)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return Rc(this._location.path)}get storage(){return this._service}get parent(){const e=Om(this._location.path);if(e===null)return null;const t=new he(this._location.bucket,e);return new gt(this._service,t)}_throwIfRoot(e){if(this._location.path==="")throw um(e)}}function Ym(n,e,t){n._throwIfRoot("uploadBytes");const i=zm(n.storage,n._location,kc(),new qe(e,!0),t);return n.storage.makeRequestWithTokens(i,Dc).then(s=>({metadata:s,ref:n}))}function Qm(n){n._throwIfRoot("getDownloadURL");const e=Vm(n.storage,n._location,kc());return n.storage.makeRequestWithTokens(e,Dc).then(t=>{if(t===null)throw lm();return t})}function Xm(n,e){const t=Dm(n._location.path,e),i=new he(n._location.bucket,t);return new gt(n.storage,i)}/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Jm(n){return/^[A-Za-z]+:\/\//.test(n)}function Zm(n,e){return new gt(n,e)}function xc(n,e){if(n instanceof Cr){const t=n;if(t._bucket==null)throw om();const i=new gt(t,t._bucket);return e!=null?xc(i,e):i}else return e!==void 0?Xm(n,e):n}function ev(n,e){if(e&&Jm(e)){if(n instanceof Cr)return Zm(n,e);throw ws("To use ref(service, url), the first argument must be a Storage instance.")}else return xc(n,e)}function jo(n,e){const t=e==null?void 0:e[wc];return t==null?null:he.makeFromBucketSpec(t,n)}function tv(n,e,t,i={}){n.host=`${e}:${t}`,n._protocol="http";const{mockUserToken:s}=i;s&&(n._overrideAuthToken=typeof s=="string"?s:ha(s,n.app.options.projectId))}class Cr{constructor(e,t,i,s,r){this.app=e,this._authProvider=t,this._appCheckProvider=i,this._url=s,this._firebaseVersion=r,this._bucket=null,this._host=yc,this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=Yg,this._maxUploadRetryTime=Qg,this._requests=new Set,s!=null?this._bucket=he.makeFromBucketSpec(s,this._host):this._bucket=jo(this._host,this.app.options)}get host(){return this._host}set host(e){this._host=e,this._url!=null?this._bucket=he.makeFromBucketSpec(this._url,e):this._bucket=jo(e,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(e){Vo("time",0,Number.POSITIVE_INFINITY,e),this._maxUploadRetryTime=e}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(e){Vo("time",0,Number.POSITIVE_INFINITY,e),this._maxOperationRetryTime=e}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const e=this._authProvider.getImmediate({optional:!0});if(e){const t=await e.getToken();if(t!==null)return t.accessToken}return null}async _getAppCheckToken(){const e=this._appCheckProvider.getImmediate({optional:!0});return e?(await e.getToken()).token:null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(e=>e.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(e){return new gt(this,e)}_makeRequest(e,t,i,s,r=!0){if(this._deleted)return new hm(Ec());{const o=Im(e,this._appId,i,s,t,this._firebaseVersion,r);return this._requests.add(o),o.getPromise().then(()=>this._requests.delete(o),()=>this._requests.delete(o)),o}}async makeRequestWithTokens(e,t){const[i,s]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(e,t,i,s).getPromise()}}const qo="@firebase/storage",zo="0.11.2";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Lc="storage";function nv(n,e,t){return n=ie(n),Ym(n,e,t)}function iv(n){return n=ie(n),Qm(n)}function sv(n,e){return n=ie(n),ev(n,e)}function Mc(n=Rs(),e){n=ie(n);const i=yi(n,Lc).getImmediate({identifier:e}),s=la("storage");return s&&rv(i,...s),i}function rv(n,e,t,i={}){tv(n,e,t,i)}function ov(n,{instanceIdentifier:e}){const t=n.getProvider("app").getImmediate(),i=n.getProvider("auth-internal"),s=n.getProvider("app-check-internal");return new Cr(t,i,s,e,mt)}function av(){ut(new Ye(Lc,ov,"PUBLIC").setMultipleInstances(!0)),Ie(qo,zo,""),Ie(qo,zo,"esm2017")}av();function lv(n){let e,t,i,s,r,o,a,l,c,u,h,d,f,_,v,E,k,T,I,g,y,b,U,D,O,M,Q,Pi,yt,Rn,Oi,Rr;return yt=new yr({props:{location:"write"}}),{c(){e=C("form"),t=C("div"),i=C("label"),i.textContent="이미지",s=x(),r=C("input"),o=x(),a=C("div"),l=C("label"),l.textContent="제목",c=x(),u=C("input"),h=x(),d=C("div"),f=C("label"),f.textContent="가격",_=x(),v=C("input"),E=x(),k=C("div"),T=C("label"),T.textContent="설명",I=x(),g=C("input"),y=x(),b=C("div"),U=C("label"),U.textContent="장소",D=x(),O=C("input"),M=x(),Q=C("div"),Q.innerHTML='<button class="write-button svelte-1wa78ag" type="submit">제출</button>',Pi=x(),Te(yt.$$.fragment),w(i,"for","image"),w(r,"type","file"),w(r,"id","image"),w(r,"name","image"),w(l,"for","title"),w(u,"type","text"),w(u,"id","title"),w(u,"name","title"),w(f,"for","price"),w(v,"type","number"),w(v,"id","price"),w(v,"name","price"),w(T,"for","description"),w(g,"type","text"),w(g,"id","description"),w(g,"name","description"),w(U,"for","place"),w(O,"type","text"),w(O,"id","place"),w(O,"name","place"),w(e,"id","write-form")},m(K,$e){V(K,e,$e),m(e,t),m(t,i),m(t,s),m(t,r),m(e,o),m(e,a),m(a,l),m(a,c),m(a,u),Be(u,n[0]),m(e,h),m(e,d),m(d,f),m(d,_),m(d,v),Be(v,n[1]),m(e,E),m(e,k),m(k,T),m(k,I),m(k,g),Be(g,n[2]),m(e,y),m(e,b),m(b,U),m(b,D),m(b,O),Be(O,n[3]),m(e,M),m(e,Q),V(K,Pi,$e),me(yt,K,$e),Rn=!0,Oi||(Rr=[we(r,"change",n[6]),we(u,"input",n[7]),we(v,"input",n[8]),we(g,"input",n[9]),we(O,"input",n[10]),we(e,"submit",Hc(n[5]))],Oi=!0)},p(K,[$e]){$e&1&&u.value!==K[0]&&Be(u,K[0]),$e&2&&Jo(v.value)!==K[1]&&Be(v,K[1]),$e&4&&g.value!==K[2]&&Be(g,K[2]),$e&8&&O.value!==K[3]&&Be(O,K[3])},i(K){Rn||(re(yt.$$.fragment,K),Rn=!0)},o(K){ce(yt.$$.fragment,K),Rn=!1},d(K){K&&($(e),$(Pi)),ve(yt,K),Oi=!1,Je(Rr)}}}function cv(n,e,t){let i,s,r,o,a;const l=Mc(),c=vr();function u(T){bg(vc(c,"items/"),{title:i,price:s,description:r,place:o,insertAt:new Date().getTime(),imgUrl:T}),alert("글쓰기가 완료되었습니다!"),window.location.hash="/"}const h=async()=>{const T=a[0],I=T.name,g=sv(l,I);return await nv(g,T),await iv(g)},d=async()=>{const T=await h();u(T)};function f(){a=this.files,t(4,a)}function _(){i=this.value,t(0,i)}function v(){s=Jo(this.value),t(1,s)}function E(){r=this.value,t(2,r)}function k(){o=this.value,t(3,o)}return[i,s,r,o,a,d,f,_,v,E,k]}class uv extends ke{constructor(e){super(),Re(this,e,cv,lv,ye,{})}}function hv(n,e){if(n instanceof RegExp)return{keys:!1,pattern:n};var t,i,s,r,o=[],a="",l=n.split("/");for(l[0]||l.shift();s=l.shift();)t=s[0],t==="*"?(o.push("wild"),a+="/(.*)"):t===":"?(i=s.indexOf("?",1),r=s.indexOf(".",1),o.push(s.substring(1,~i?i:~r?r:s.length)),a+=~i&&!~r?"(?:/([^/]+?))?":"/([^/]+?)",~r&&(a+=(~i?"?":"")+"\\"+s.substring(r))):a+="/"+s;return{keys:o,pattern:new RegExp("^"+a+(e?"(?=$|/)":"/?$"),"i")}}function dv(n){let e,t,i;const s=[n[2]];var r=n[0];function o(a,l){let c={};if(l!==void 0&&l&4)c=Wn(s,[Hn(a[2])]);else for(let u=0;u<s.length;u+=1)c=Yo(c,s[u]);return{props:c}}return r&&(e=Bn(r,o(n)),e.$on("routeEvent",n[7])),{c(){e&&Te(e.$$.fragment),t=di()},m(a,l){e&&me(e,a,l),V(a,t,l),i=!0},p(a,l){if(l&1&&r!==(r=a[0])){if(e){_i();const c=e;ce(c.$$.fragment,1,0,()=>{ve(c,1)}),pi()}r?(e=Bn(r,o(a,l)),e.$on("routeEvent",a[7]),Te(e.$$.fragment),re(e.$$.fragment,1),me(e,t.parentNode,t)):e=null}else if(r){const c=l&4?Wn(s,[Hn(a[2])]):{};e.$set(c)}},i(a){i||(e&&re(e.$$.fragment,a),i=!0)},o(a){e&&ce(e.$$.fragment,a),i=!1},d(a){a&&$(t),e&&ve(e,a)}}}function fv(n){let e,t,i;const s=[{params:n[1]},n[2]];var r=n[0];function o(a,l){let c={};if(l!==void 0&&l&6)c=Wn(s,[l&2&&{params:a[1]},l&4&&Hn(a[2])]);else for(let u=0;u<s.length;u+=1)c=Yo(c,s[u]);return{props:c}}return r&&(e=Bn(r,o(n)),e.$on("routeEvent",n[6])),{c(){e&&Te(e.$$.fragment),t=di()},m(a,l){e&&me(e,a,l),V(a,t,l),i=!0},p(a,l){if(l&1&&r!==(r=a[0])){if(e){_i();const c=e;ce(c.$$.fragment,1,0,()=>{ve(c,1)}),pi()}r?(e=Bn(r,o(a,l)),e.$on("routeEvent",a[6]),Te(e.$$.fragment),re(e.$$.fragment,1),me(e,t.parentNode,t)):e=null}else if(r){const c=l&6?Wn(s,[l&2&&{params:a[1]},l&4&&Hn(a[2])]):{};e.$set(c)}},i(a){i||(e&&re(e.$$.fragment,a),i=!0)},o(a){e&&ce(e.$$.fragment,a),i=!1},d(a){a&&$(t),e&&ve(e,a)}}}function _v(n){let e,t,i,s;const r=[fv,dv],o=[];function a(l,c){return l[1]?0:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=di()},m(l,c){o[e].m(l,c),V(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(_i(),ce(o[u],1,1,()=>{o[u]=null}),pi(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),re(t,1),t.m(i.parentNode,i))},i(l){s||(re(t),s=!0)},o(l){ce(t),s=!1},d(l){l&&$(i),o[e].d(l)}}}function Go(){const n=window.location.href.indexOf("#/");let e=n>-1?window.location.href.substr(n+1):"/";const t=e.indexOf("?");let i="";return t>-1&&(i=e.substr(t+1),e=e.substr(0,t)),{location:e,querystring:i}}const Tr=Ja(null,function(e){e(Go());const t=()=>{e(Go())};return window.addEventListener("hashchange",t,!1),function(){window.removeEventListener("hashchange",t,!1)}});Za(Tr,n=>n.location);Za(Tr,n=>n.querystring);const Ko=Us(void 0);function pv(n){n?window.scrollTo(n.__svelte_spa_router_scrollX,n.__svelte_spa_router_scrollY):window.scrollTo(0,0)}function gv(n,e,t){let{routes:i={}}=e,{prefix:s=""}=e,{restoreScrollState:r=!1}=e;class o{constructor(y,b){if(!b||typeof b!="function"&&(typeof b!="object"||b._sveltesparouter!==!0))throw Error("Invalid component object");if(!y||typeof y=="string"&&(y.length<1||y.charAt(0)!="/"&&y.charAt(0)!="*")||typeof y=="object"&&!(y instanceof RegExp))throw Error('Invalid value for "path" argument - strings must start with / or *');const{pattern:U,keys:D}=hv(y);this.path=y,typeof b=="object"&&b._sveltesparouter===!0?(this.component=b.component,this.conditions=b.conditions||[],this.userData=b.userData,this.props=b.props||{}):(this.component=()=>Promise.resolve(b),this.conditions=[],this.props={}),this._pattern=U,this._keys=D}match(y){if(s){if(typeof s=="string")if(y.startsWith(s))y=y.substr(s.length)||"/";else return null;else if(s instanceof RegExp){const O=y.match(s);if(O&&O[0])y=y.substr(O[0].length)||"/";else return null}}const b=this._pattern.exec(y);if(b===null)return null;if(this._keys===!1)return b;const U={};let D=0;for(;D<this._keys.length;){try{U[this._keys[D]]=decodeURIComponent(b[D+1]||"")||null}catch{U[this._keys[D]]=null}D++}return U}async checkConditions(y){for(let b=0;b<this.conditions.length;b++)if(!await this.conditions[b](y))return!1;return!0}}const a=[];i instanceof Map?i.forEach((g,y)=>{a.push(new o(y,g))}):Object.keys(i).forEach(g=>{a.push(new o(g,i[g]))});let l=null,c=null,u={};const h=Gc();async function d(g,y){await Kc(),h(g,y)}let f=null,_=null;r&&(_=g=>{g.state&&(g.state.__svelte_spa_router_scrollY||g.state.__svelte_spa_router_scrollX)?f=g.state:f=null},window.addEventListener("popstate",_),qc(()=>{pv(f)}));let v=null,E=null;const k=Tr.subscribe(async g=>{v=g;let y=0;for(;y<a.length;){const b=a[y].match(g.location);if(!b){y++;continue}const U={route:a[y].path,location:g.location,querystring:g.querystring,userData:a[y].userData,params:b&&typeof b=="object"&&Object.keys(b).length?b:null};if(!await a[y].checkConditions(U)){t(0,l=null),E=null,d("conditionsFailed",U);return}d("routeLoading",Object.assign({},U));const D=a[y].component;if(E!=D){D.loading?(t(0,l=D.loading),E=D,t(1,c=D.loadingParams),t(2,u={}),d("routeLoaded",Object.assign({},U,{component:l,name:l.name,params:c}))):(t(0,l=null),E=null);const O=await D();if(g!=v)return;t(0,l=O&&O.default||O),E=D}b&&typeof b=="object"&&Object.keys(b).length?t(1,c=b):t(1,c=null),t(2,u=a[y].props),d("routeLoaded",Object.assign({},U,{component:l,name:l.name,params:c})).then(()=>{Ko.set(c)});return}t(0,l=null),E=null,Ko.set(void 0)});zc(()=>{k(),_&&window.removeEventListener("popstate",_)});function T(g){Nr.call(this,n,g)}function I(g){Nr.call(this,n,g)}return n.$$set=g=>{"routes"in g&&t(3,i=g.routes),"prefix"in g&&t(4,s=g.prefix),"restoreScrollState"in g&&t(5,r=g.restoreScrollState)},n.$$.update=()=>{n.$$.dirty&32&&(history.scrollRestoration=r?"manual":"auto")},[l,c,u,i,s,r,T,I]}class mv extends ke{constructor(e){super(),Re(this,e,gv,_v,ye,{routes:3,prefix:4,restoreScrollState:5})}}function vv(n){let e;return{c(){e=C("div"),e.innerHTML='<div class="lds-spinner svelte-hj495"><div class="svelte-hj495"></div> <div class="svelte-hj495"></div> <div class="svelte-hj495"></div> <div class="svelte-hj495"></div> <div class="svelte-hj495"></div> <div class="svelte-hj495"></div> <div class="svelte-hj495"></div> <div class="svelte-hj495"></div> <div class="svelte-hj495"></div> <div class="svelte-hj495"></div> <div class="svelte-hj495"></div> <div class="svelte-hj495"></div></div>',w(e,"class","wrapper svelte-hj495")},m(t,i){V(t,e,i)},p:B,i:B,o:B,d(t){t&&$(e)}}}class yv extends ke{constructor(e){super(),Re(this,e,null,vv,ye,{})}}function wv(n){let e,t,i,s,r,o,a,l;return r=new yr({props:{location:"my"}}),{c(){e=C("div"),e.textContent="나의 당근",t=x(),i=C("button"),i.textContent="로그아웃",s=x(),Te(r.$$.fragment),w(i,"class","svelte-1er8viy")},m(c,u){V(c,e,u),V(c,t,u),V(c,i,u),V(c,s,u),me(r,c,u),o=!0,a||(l=we(i,"click",n[0]),a=!0)},p:B,i(c){o||(re(r.$$.fragment,c),o=!0)},o(c){ce(r.$$.fragment,c),o=!1},d(c){c&&($(e),$(t),$(i),$(s)),ve(r,c),a=!1,l()}}}function Ev(n){return[()=>{Zn.set(null),localStorage.removeItem("token")}]}class Iv extends ke{constructor(e){super(),Re(this,e,Ev,wv,ye,{})}}function bv(n){let e,t;return e=new mv({props:{routes:n[2]}}),{c(){Te(e.$$.fragment)},m(i,s){me(e,i,s),t=!0},p:B,i(i){t||(re(e.$$.fragment,i),t=!0)},o(i){ce(e.$$.fragment,i),t=!1},d(i){ve(e,i)}}}function Cv(n){let e,t;return e=new Nf({}),{c(){Te(e.$$.fragment)},m(i,s){me(e,i,s),t=!0},p:B,i(i){t||(re(e.$$.fragment,i),t=!0)},o(i){ce(e.$$.fragment,i),t=!1},d(i){ve(e,i)}}}function Tv(n){let e,t;return e=new yv({}),{c(){Te(e.$$.fragment)},m(i,s){me(e,i,s),t=!0},p:B,i(i){t||(re(e.$$.fragment,i),t=!0)},o(i){ce(e.$$.fragment,i),t=!1},d(i){ve(e,i)}}}function Sv(n){let e,t,i,s;const r=[Tv,Cv,bv],o=[];function a(l,c){return l[0]?0:l[1]?2:1}return e=a(n),t=o[e]=r[e](n),{c(){t.c(),i=di()},m(l,c){o[e].m(l,c),V(l,i,c),s=!0},p(l,[c]){let u=e;e=a(l),e===u?o[e].p(l,c):(_i(),ce(o[u],1,1,()=>{o[u]=null}),pi(),t=o[e],t?t.p(l,c):(t=o[e]=r[e](l),t.c()),re(t,1),t.m(i.parentNode,i))},i(l){s||(re(t),s=!0)},o(l){ce(t),s=!1},d(l){l&&$(i),o[e].d(l)}}}function Rv(n,e,t){let i;Bc(n,Zn,l=>t(1,i=l));let s=!0;const r=Ms(),o=async()=>{const l=localStorage.getItem("token");if(!l)return t(0,s=!1);const c=de.credential(null,l),h=(await dd(r,c)).user;Zn.set(h),t(0,s=!1)},a={"/":jg,"/signup":Kg,"/write":uv,"/my":Iv,"*":zg};return Zo(()=>o()),[s,i,a]}class kv extends ke{constructor(e){super(),Re(this,e,Rv,Sv,ye,{})}}var Nv="firebase",Av="10.3.1";/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Ie(Nv,Av,"app");const Pv={apiKey:"AIzaSyAsbaUqlHi_WD_E0wvIDGy6ff6iY756HgA",authDomain:"carrot-market-87fd7.firebaseapp.com",databaseURL:"https://carrot-market-87fd7-default-rtdb.asia-southeast1.firebasedatabase.app",projectId:"carrot-market-87fd7",storageBucket:"carrot-market-87fd7.appspot.com",messagingSenderId:"395731904525",appId:{}.VITE_VITE_APP_ID,measurementId:"G-KFF8XZ6HXQ"},Sr=ma(Pv);vr(Sr);Mc(Sr);Ms(Sr);new kv({target:document.getElementById("app")});
