const __vite__mapDeps=(i,m=__vite__mapDeps,d=(m.f||(m.f=["./cssMode-BNdE3AU6.js","./editor.api2-Bc8ifaNZ.js","./editor-CGi5ri4_.css","./lspLanguageFeatures-Cy319K5H.js","./htmlMode-C5Y82r8u.js","./jsonMode-BoIcXm3m.js","./tsMode-_QuHT4Yz.js","./freemarker2-D1LjM0NH.js","./handlebars-CMTaiJlU.js","./html-DTHzKv6s.js","./javascript-lxERlcbJ.js","./typescript-d6ESk2YQ.js","./liquid-CRLzhPni.js","./mdx-D1-GLFm5.js","./python-C1f9JT78.js","./razor-CnlLKp0o.js","./xml-CGqaEaK7.js","./yaml-Ds-G9R_3.js"])))=>i.map(i=>d[i]);
import{c as e,l as t,n,o as r,r as i,s as a,t as o}from"./editor.api2-Bc8ifaNZ.js";(function(){let e=document.createElement(`link`).relList;if(e&&e.supports&&e.supports(`modulepreload`))return;for(let e of document.querySelectorAll(`link[rel="modulepreload"]`))n(e);new MutationObserver(e=>{for(let t of e)if(t.type===`childList`)for(let e of t.addedNodes)e.tagName===`LINK`&&e.rel===`modulepreload`&&n(e)}).observe(document,{childList:!0,subtree:!0});function t(e){let t={};return e.integrity&&(t.integrity=e.integrity),e.referrerPolicy&&(t.referrerPolicy=e.referrerPolicy),e.crossOrigin===`use-credentials`?t.credentials=`include`:e.crossOrigin===`anonymous`?t.credentials=`omit`:t.credentials=`same-origin`,t}function n(e){if(e.ep)return;e.ep=!0;let n=t(e);fetch(e.href,n)}})();var s=Object.defineProperty,c=Object.defineProperties,l=Object.getOwnPropertyDescriptor,u=Object.getOwnPropertyDescriptors,d=Object.getOwnPropertySymbols,f=Object.prototype.hasOwnProperty,p=Object.prototype.propertyIsEnumerable,m=(e,t)=>(t=Symbol[e])?t:Symbol.for(`Symbol.`+e),h=e=>{throw TypeError(e)},g=(e,t,n)=>t in e?s(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,_=(e,t)=>{for(var n in t||={})f.call(t,n)&&g(e,n,t[n]);if(d)for(var n of d(t))p.call(t,n)&&g(e,n,t[n]);return e},v=(e,t)=>c(e,u(t)),y=(e,t,n,r)=>{for(var i=r>1?void 0:r?l(t,n):t,a=e.length-1,o;a>=0;a--)(o=e[a])&&(i=(r?o(t,n,i):o(i))||i);return r&&i&&s(t,n,i),i},ee=(e,t,n)=>t.has(e)||h(`Cannot `+n),b=(e,t,n)=>(ee(e,t,`read from private field`),n?n.call(e):t.get(e)),te=(e,t,n)=>t.has(e)?h(`Cannot add the same private member more than once`):t instanceof WeakSet?t.add(e):t.set(e,n),ne=(e,t,n,r)=>(ee(e,t,`write to private field`),r?r.call(e,n):t.set(e,n),n),re=function(e,t){this[0]=e,this[1]=t},ie=e=>{var t=e[m(`asyncIterator`)],n=!1,r,i={};return t==null?(t=e[m(`iterator`)](),r=e=>i[e]=n=>t[e](n)):(t=t.call(e),r=e=>i[e]=r=>{if(n){if(n=!1,e===`throw`)throw r;return r}return n=!0,{done:!1,value:new re(new Promise(n=>{var i=t[e](r);i instanceof Object||h(`Object expected`),n(i)}),1)}}),i[m(`iterator`)]=()=>i,r(`next`),`throw`in t?r(`throw`):i.throw=e=>{throw e},`return`in t&&r(`return`),i},ae=new WeakMap,oe=new WeakMap,se=new WeakMap,ce=new WeakSet,le=new WeakMap,ue=class{constructor(e,t){this.handleFormData=e=>{let t=this.options.disabled(this.host),n=this.options.name(this.host),r=this.options.value(this.host),i=this.host.tagName.toLowerCase()===`sl-button`;this.host.isConnected&&!t&&!i&&typeof n==`string`&&n.length>0&&r!==void 0&&(Array.isArray(r)?r.forEach(t=>{e.formData.append(n,t.toString())}):e.formData.append(n,r.toString()))},this.handleFormSubmit=e=>{var t;let n=this.options.disabled(this.host),r=this.options.reportValidity;this.form&&!this.form.noValidate&&((t=ae.get(this.form))==null||t.forEach(e=>{this.setUserInteracted(e,!0)})),this.form&&!this.form.noValidate&&!n&&!r(this.host)&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleFormReset=()=>{this.options.setValue(this.host,this.options.defaultValue(this.host)),this.setUserInteracted(this.host,!1),le.set(this.host,[])},this.handleInteraction=e=>{let t=le.get(this.host);t.includes(e.type)||t.push(e.type),t.length===this.options.assumeInteractionOn.length&&this.setUserInteracted(this.host,!0)},this.checkFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.checkValidity==`function`&&!t.checkValidity())return!1}return!0},this.reportFormValidity=()=>{if(this.form&&!this.form.noValidate){let e=this.form.querySelectorAll(`*`);for(let t of e)if(typeof t.reportValidity==`function`&&!t.reportValidity())return!1}return!0},(this.host=e).addController(this),this.options=_({form:e=>{let t=e.form;if(t){let n=e.getRootNode().querySelector(`#${t}`);if(n)return n}return e.closest(`form`)},name:e=>e.name,value:e=>e.value,defaultValue:e=>e.defaultValue,disabled:e=>e.disabled??!1,reportValidity:e=>typeof e.reportValidity==`function`?e.reportValidity():!0,checkValidity:e=>typeof e.checkValidity==`function`?e.checkValidity():!0,setValue:(e,t)=>e.value=t,assumeInteractionOn:[`sl-input`]},t)}hostConnected(){let e=this.options.form(this.host);e&&this.attachForm(e),le.set(this.host,[]),this.options.assumeInteractionOn.forEach(e=>{this.host.addEventListener(e,this.handleInteraction)})}hostDisconnected(){this.detachForm(),le.delete(this.host),this.options.assumeInteractionOn.forEach(e=>{this.host.removeEventListener(e,this.handleInteraction)})}hostUpdated(){let e=this.options.form(this.host);e||this.detachForm(),e&&this.form!==e&&(this.detachForm(),this.attachForm(e)),this.host.hasUpdated&&this.setValidity(this.host.validity.valid)}attachForm(e){e?(this.form=e,ae.has(this.form)?ae.get(this.form).add(this.host):ae.set(this.form,new Set([this.host])),this.form.addEventListener(`formdata`,this.handleFormData),this.form.addEventListener(`submit`,this.handleFormSubmit),this.form.addEventListener(`reset`,this.handleFormReset),oe.has(this.form)||(oe.set(this.form,this.form.reportValidity),this.form.reportValidity=()=>this.reportFormValidity()),se.has(this.form)||(se.set(this.form,this.form.checkValidity),this.form.checkValidity=()=>this.checkFormValidity())):this.form=void 0}detachForm(){if(!this.form)return;let e=ae.get(this.form);e&&(e.delete(this.host),e.size<=0&&(this.form.removeEventListener(`formdata`,this.handleFormData),this.form.removeEventListener(`submit`,this.handleFormSubmit),this.form.removeEventListener(`reset`,this.handleFormReset),oe.has(this.form)&&(this.form.reportValidity=oe.get(this.form),oe.delete(this.form)),se.has(this.form)&&(this.form.checkValidity=se.get(this.form),se.delete(this.form)),this.form=void 0))}setUserInteracted(e,t){t?ce.add(e):ce.delete(e),e.requestUpdate()}doAction(e,t){if(this.form){let n=document.createElement(`button`);n.type=e,n.style.position=`absolute`,n.style.width=`0`,n.style.height=`0`,n.style.clipPath=`inset(50%)`,n.style.overflow=`hidden`,n.style.whiteSpace=`nowrap`,t&&(n.name=t.name,n.value=t.value,[`formaction`,`formenctype`,`formmethod`,`formnovalidate`,`formtarget`].forEach(e=>{t.hasAttribute(e)&&n.setAttribute(e,t.getAttribute(e))})),this.form.append(n),n.click(),n.remove()}}getForm(){return this.form??null}reset(e){this.doAction(`reset`,e)}submit(e){this.doAction(`submit`,e)}setValidity(e){let t=this.host,n=!!ce.has(t),r=!!t.required;t.toggleAttribute(`data-required`,r),t.toggleAttribute(`data-optional`,!r),t.toggleAttribute(`data-invalid`,!e),t.toggleAttribute(`data-valid`,e),t.toggleAttribute(`data-user-invalid`,!e&&n),t.toggleAttribute(`data-user-valid`,e&&n)}updateValidity(){let e=this.host;this.setValidity(e.validity.valid)}emitInvalidEvent(e){let t=new CustomEvent(`sl-invalid`,{bubbles:!1,composed:!1,cancelable:!0,detail:{}});e||t.preventDefault(),this.host.dispatchEvent(t)||e?.preventDefault()}},de=Object.freeze({badInput:!1,customError:!1,patternMismatch:!1,rangeOverflow:!1,rangeUnderflow:!1,stepMismatch:!1,tooLong:!1,tooShort:!1,typeMismatch:!1,valid:!0,valueMissing:!1}),fe=Object.freeze(v(_({},de),{valid:!1,valueMissing:!0})),pe=Object.freeze(v(_({},de),{valid:!1,customError:!0})),me=globalThis,he=me.ShadowRoot&&(me.ShadyCSS===void 0||me.ShadyCSS.nativeShadow)&&`adoptedStyleSheets`in Document.prototype&&`replace`in CSSStyleSheet.prototype,ge=Symbol(),_e=new WeakMap,ve=class{constructor(e,t,n){if(this._$cssResult$=!0,n!==ge)throw Error("CSSResult is not constructable. Use `unsafeCSS` or `css` instead.");this.cssText=e,this.t=t}get styleSheet(){let e=this.o,t=this.t;if(he&&e===void 0){let n=t!==void 0&&t.length===1;n&&(e=_e.get(t)),e===void 0&&((this.o=e=new CSSStyleSheet).replaceSync(this.cssText),n&&_e.set(t,e))}return e}toString(){return this.cssText}},ye=e=>new ve(typeof e==`string`?e:e+``,void 0,ge),x=(e,...t)=>new ve(e.length===1?e[0]:t.reduce((t,n,r)=>t+(e=>{if(!0===e._$cssResult$)return e.cssText;if(typeof e==`number`)return e;throw Error(`Value passed to 'css' function must be a 'css' function result: `+e+`. Use 'unsafeCSS' to pass non-literal values, but take care to ensure page security.`)})(n)+e[r+1],e[0]),e,ge),be=(e,t)=>{if(he)e.adoptedStyleSheets=t.map(e=>e instanceof CSSStyleSheet?e:e.styleSheet);else for(let n of t){let t=document.createElement(`style`),r=me.litNonce;r!==void 0&&t.setAttribute(`nonce`,r),t.textContent=n.cssText,e.appendChild(t)}},xe=he?e=>e:e=>e instanceof CSSStyleSheet?(e=>{let t=``;for(let n of e.cssRules)t+=n.cssText;return ye(t)})(e):e,{is:Se,defineProperty:Ce,getOwnPropertyDescriptor:we,getOwnPropertyNames:Te,getOwnPropertySymbols:Ee,getPrototypeOf:De}=Object,Oe=globalThis,ke=Oe.trustedTypes,Ae=ke?ke.emptyScript:``,je=Oe.reactiveElementPolyfillSupport,Me=(e,t)=>e,Ne={toAttribute(e,t){switch(t){case Boolean:e=e?Ae:null;break;case Object:case Array:e=e==null?e:JSON.stringify(e)}return e},fromAttribute(e,t){let n=e;switch(t){case Boolean:n=e!==null;break;case Number:n=e===null?null:Number(e);break;case Object:case Array:try{n=JSON.parse(e)}catch{n=null}}return n}},Pe=(e,t)=>!Se(e,t),Fe={attribute:!0,type:String,converter:Ne,reflect:!1,useDefault:!1,hasChanged:Pe};Symbol.metadata??=Symbol(`metadata`),Oe.litPropertyMetadata??=new WeakMap;var Ie=class extends HTMLElement{static addInitializer(e){this._$Ei(),(this.l??=[]).push(e)}static get observedAttributes(){return this.finalize(),this._$Eh&&[...this._$Eh.keys()]}static createProperty(e,t=Fe){if(t.state&&(t.attribute=!1),this._$Ei(),this.prototype.hasOwnProperty(e)&&((t=Object.create(t)).wrapped=!0),this.elementProperties.set(e,t),!t.noAccessor){let n=Symbol(),r=this.getPropertyDescriptor(e,n,t);r!==void 0&&Ce(this.prototype,e,r)}}static getPropertyDescriptor(e,t,n){let{get:r,set:i}=we(this.prototype,e)??{get(){return this[t]},set(e){this[t]=e}};return{get:r,set(t){let a=r?.call(this);i?.call(this,t),this.requestUpdate(e,a,n)},configurable:!0,enumerable:!0}}static getPropertyOptions(e){return this.elementProperties.get(e)??Fe}static _$Ei(){if(this.hasOwnProperty(Me(`elementProperties`)))return;let e=De(this);e.finalize(),e.l!==void 0&&(this.l=[...e.l]),this.elementProperties=new Map(e.elementProperties)}static finalize(){if(this.hasOwnProperty(Me(`finalized`)))return;if(this.finalized=!0,this._$Ei(),this.hasOwnProperty(Me(`properties`))){let e=this.properties,t=[...Te(e),...Ee(e)];for(let n of t)this.createProperty(n,e[n])}let e=this[Symbol.metadata];if(e!==null){let t=litPropertyMetadata.get(e);if(t!==void 0)for(let[e,n]of t)this.elementProperties.set(e,n)}this._$Eh=new Map;for(let[e,t]of this.elementProperties){let n=this._$Eu(e,t);n!==void 0&&this._$Eh.set(n,e)}this.elementStyles=this.finalizeStyles(this.styles)}static finalizeStyles(e){let t=[];if(Array.isArray(e)){let n=new Set(e.flat(1/0).reverse());for(let e of n)t.unshift(xe(e))}else e!==void 0&&t.push(xe(e));return t}static _$Eu(e,t){let n=t.attribute;return!1===n?void 0:typeof n==`string`?n:typeof e==`string`?e.toLowerCase():void 0}constructor(){super(),this._$Ep=void 0,this.isUpdatePending=!1,this.hasUpdated=!1,this._$Em=null,this._$Ev()}_$Ev(){this._$ES=new Promise(e=>this.enableUpdating=e),this._$AL=new Map,this._$E_(),this.requestUpdate(),this.constructor.l?.forEach(e=>e(this))}addController(e){(this._$EO??=new Set).add(e),this.renderRoot!==void 0&&this.isConnected&&e.hostConnected?.()}removeController(e){this._$EO?.delete(e)}_$E_(){let e=new Map,t=this.constructor.elementProperties;for(let n of t.keys())this.hasOwnProperty(n)&&(e.set(n,this[n]),delete this[n]);e.size>0&&(this._$Ep=e)}createRenderRoot(){let e=this.shadowRoot??this.attachShadow(this.constructor.shadowRootOptions);return be(e,this.constructor.elementStyles),e}connectedCallback(){this.renderRoot??=this.createRenderRoot(),this.enableUpdating(!0),this._$EO?.forEach(e=>e.hostConnected?.())}enableUpdating(e){}disconnectedCallback(){this._$EO?.forEach(e=>e.hostDisconnected?.())}attributeChangedCallback(e,t,n){this._$AK(e,n)}_$ET(e,t){let n=this.constructor.elementProperties.get(e),r=this.constructor._$Eu(e,n);if(r!==void 0&&!0===n.reflect){let i=(n.converter?.toAttribute===void 0?Ne:n.converter).toAttribute(t,n.type);this._$Em=e,i==null?this.removeAttribute(r):this.setAttribute(r,i),this._$Em=null}}_$AK(e,t){let n=this.constructor,r=n._$Eh.get(e);if(r!==void 0&&this._$Em!==r){let e=n.getPropertyOptions(r),i=typeof e.converter==`function`?{fromAttribute:e.converter}:e.converter?.fromAttribute===void 0?Ne:e.converter;this._$Em=r;let a=i.fromAttribute(t,e.type);this[r]=a??this._$Ej?.get(r)??a,this._$Em=null}}requestUpdate(e,t,n,r=!1,i){if(e!==void 0){let a=this.constructor;if(!1===r&&(i=this[e]),n??=a.getPropertyOptions(e),!((n.hasChanged??Pe)(i,t)||n.useDefault&&n.reflect&&i===this._$Ej?.get(e)&&!this.hasAttribute(a._$Eu(e,n))))return;this.C(e,t,n)}!1===this.isUpdatePending&&(this._$ES=this._$EP())}C(e,t,{useDefault:n,reflect:r,wrapped:i},a){n&&!(this._$Ej??=new Map).has(e)&&(this._$Ej.set(e,a??t??this[e]),!0!==i||a!==void 0)||(this._$AL.has(e)||(this.hasUpdated||n||(t=void 0),this._$AL.set(e,t)),!0===r&&this._$Em!==e&&(this._$Eq??=new Set).add(e))}async _$EP(){this.isUpdatePending=!0;try{await this._$ES}catch(e){Promise.reject(e)}let e=this.scheduleUpdate();return e!=null&&await e,!this.isUpdatePending}scheduleUpdate(){return this.performUpdate()}performUpdate(){if(!this.isUpdatePending)return;if(!this.hasUpdated){if(this.renderRoot??=this.createRenderRoot(),this._$Ep){for(let[e,t]of this._$Ep)this[e]=t;this._$Ep=void 0}let e=this.constructor.elementProperties;if(e.size>0)for(let[t,n]of e){let{wrapped:e}=n,r=this[t];!0!==e||this._$AL.has(t)||r===void 0||this.C(t,void 0,n,r)}}let e=!1,t=this._$AL;try{e=this.shouldUpdate(t),e?(this.willUpdate(t),this._$EO?.forEach(e=>e.hostUpdate?.()),this.update(t)):this._$EM()}catch(t){throw e=!1,this._$EM(),t}e&&this._$AE(t)}willUpdate(e){}_$AE(e){this._$EO?.forEach(e=>e.hostUpdated?.()),this.hasUpdated||(this.hasUpdated=!0,this.firstUpdated(e)),this.updated(e)}_$EM(){this._$AL=new Map,this.isUpdatePending=!1}get updateComplete(){return this.getUpdateComplete()}getUpdateComplete(){return this._$ES}shouldUpdate(e){return!0}update(e){this._$Eq&&=this._$Eq.forEach(e=>this._$ET(e,this[e])),this._$EM()}updated(e){}firstUpdated(e){}};Ie.elementStyles=[],Ie.shadowRootOptions={mode:`open`},Ie[Me(`elementProperties`)]=new Map,Ie[Me(`finalized`)]=new Map,je?.({ReactiveElement:Ie}),(Oe.reactiveElementVersions??=[]).push(`2.1.2`);var Le=globalThis,Re=e=>e,ze=Le.trustedTypes,Be=ze?ze.createPolicy(`lit-html`,{createHTML:e=>e}):void 0,Ve=`$lit$`,He=`lit$${Math.random().toFixed(9).slice(2)}$`,Ue=`?`+He,We=`<${Ue}>`,Ge=document,Ke=()=>Ge.createComment(``),qe=e=>e===null||typeof e!=`object`&&typeof e!=`function`,Je=Array.isArray,Ye=e=>Je(e)||typeof e?.[Symbol.iterator]==`function`,Xe=`[ 	
\f\r]`,Ze=/<(?:(!--|\/[^a-zA-Z])|(\/?[a-zA-Z][^>\s]*)|(\/?$))/g,Qe=/-->/g,$e=/>/g,et=RegExp(`>|${Xe}(?:([^\\s"'>=/]+)(${Xe}*=${Xe}*(?:[^ \t\n\f\r"'\`<>=]|("|')|))|$)`,`g`),tt=/'/g,nt=/"/g,rt=/^(?:script|style|textarea|title)$/i,S=(e=>(t,...n)=>({_$litType$:e,strings:t,values:n}))(1),it=Symbol.for(`lit-noChange`),C=Symbol.for(`lit-nothing`),at=new WeakMap,ot=Ge.createTreeWalker(Ge,129);function st(e,t){if(!Je(e)||!e.hasOwnProperty(`raw`))throw Error(`invalid template strings array`);return Be===void 0?t:Be.createHTML(t)}var ct=(e,t)=>{let n=e.length-1,r=[],i,a=t===2?`<svg>`:t===3?`<math>`:``,o=Ze;for(let t=0;t<n;t++){let n=e[t],s,c,l=-1,u=0;for(;u<n.length&&(o.lastIndex=u,c=o.exec(n),c!==null);)u=o.lastIndex,o===Ze?c[1]===`!--`?o=Qe:c[1]===void 0?c[2]===void 0?c[3]!==void 0&&(o=et):(rt.test(c[2])&&(i=RegExp(`</`+c[2],`g`)),o=et):o=$e:o===et?c[0]===`>`?(o=i??Ze,l=-1):c[1]===void 0?l=-2:(l=o.lastIndex-c[2].length,s=c[1],o=c[3]===void 0?et:c[3]===`"`?nt:tt):o===nt||o===tt?o=et:o===Qe||o===$e?o=Ze:(o=et,i=void 0);let d=o===et&&e[t+1].startsWith(`/>`)?` `:``;a+=o===Ze?n+We:l>=0?(r.push(s),n.slice(0,l)+Ve+n.slice(l)+He+d):n+He+(l===-2?t:d)}return[st(e,a+(e[n]||`<?>`)+(t===2?`</svg>`:t===3?`</math>`:``)),r]},lt=class e{constructor({strings:t,_$litType$:n},r){let i;this.parts=[];let a=0,o=0,s=t.length-1,c=this.parts,[l,u]=ct(t,n);if(this.el=e.createElement(l,r),ot.currentNode=this.el.content,n===2||n===3){let e=this.el.content.firstChild;e.replaceWith(...e.childNodes)}for(;(i=ot.nextNode())!==null&&c.length<s;){if(i.nodeType===1){if(i.hasAttributes())for(let e of i.getAttributeNames())if(e.endsWith(Ve)){let t=u[o++],n=i.getAttribute(e).split(He),r=/([.?@])?(.*)/.exec(t);c.push({type:1,index:a,name:r[2],strings:n,ctor:r[1]===`.`?mt:r[1]===`?`?ht:r[1]===`@`?gt:pt}),i.removeAttribute(e)}else e.startsWith(He)&&(c.push({type:6,index:a}),i.removeAttribute(e));if(rt.test(i.tagName)){let e=i.textContent.split(He),t=e.length-1;if(t>0){i.textContent=ze?ze.emptyScript:``;for(let n=0;n<t;n++)i.append(e[n],Ke()),ot.nextNode(),c.push({type:2,index:++a});i.append(e[t],Ke())}}}else if(i.nodeType===8)if(i.data===Ue)c.push({type:2,index:a});else{let e=-1;for(;(e=i.data.indexOf(He,e+1))!==-1;)c.push({type:7,index:a}),e+=He.length-1}a++}}static createElement(e,t){let n=Ge.createElement(`template`);return n.innerHTML=e,n}};function ut(e,t,n=e,r){if(t===it)return t;let i=r===void 0?n._$Cl:n._$Co?.[r],a=qe(t)?void 0:t._$litDirective$;return i?.constructor!==a&&(i?._$AO?.(!1),a===void 0?i=void 0:(i=new a(e),i._$AT(e,n,r)),r===void 0?n._$Cl=i:(n._$Co??=[])[r]=i),i!==void 0&&(t=ut(e,i._$AS(e,t.values),i,r)),t}var dt=class{constructor(e,t){this._$AV=[],this._$AN=void 0,this._$AD=e,this._$AM=t}get parentNode(){return this._$AM.parentNode}get _$AU(){return this._$AM._$AU}u(e){let{el:{content:t},parts:n}=this._$AD,r=(e?.creationScope??Ge).importNode(t,!0);ot.currentNode=r;let i=ot.nextNode(),a=0,o=0,s=n[0];for(;s!==void 0;){if(a===s.index){let t;s.type===2?t=new ft(i,i.nextSibling,this,e):s.type===1?t=new s.ctor(i,s.name,s.strings,this,e):s.type===6&&(t=new _t(i,this,e)),this._$AV.push(t),s=n[++o]}a!==s?.index&&(i=ot.nextNode(),a++)}return ot.currentNode=Ge,r}p(e){let t=0;for(let n of this._$AV)n!==void 0&&(n.strings===void 0?n._$AI(e[t]):(n._$AI(e,n,t),t+=n.strings.length-2)),t++}},ft=class e{get _$AU(){return this._$AM?._$AU??this._$Cv}constructor(e,t,n,r){this.type=2,this._$AH=C,this._$AN=void 0,this._$AA=e,this._$AB=t,this._$AM=n,this.options=r,this._$Cv=r?.isConnected??!0}get parentNode(){let e=this._$AA.parentNode,t=this._$AM;return t!==void 0&&e?.nodeType===11&&(e=t.parentNode),e}get startNode(){return this._$AA}get endNode(){return this._$AB}_$AI(e,t=this){e=ut(this,e,t),qe(e)?e===C||e==null||e===``?(this._$AH!==C&&this._$AR(),this._$AH=C):e!==this._$AH&&e!==it&&this._(e):e._$litType$===void 0?e.nodeType===void 0?Ye(e)?this.k(e):this._(e):this.T(e):this.$(e)}O(e){return this._$AA.parentNode.insertBefore(e,this._$AB)}T(e){this._$AH!==e&&(this._$AR(),this._$AH=this.O(e))}_(e){this._$AH!==C&&qe(this._$AH)?this._$AA.nextSibling.data=e:this.T(Ge.createTextNode(e)),this._$AH=e}$(e){let{values:t,_$litType$:n}=e,r=typeof n==`number`?this._$AC(e):(n.el===void 0&&(n.el=lt.createElement(st(n.h,n.h[0]),this.options)),n);if(this._$AH?._$AD===r)this._$AH.p(t);else{let e=new dt(r,this),n=e.u(this.options);e.p(t),this.T(n),this._$AH=e}}_$AC(e){let t=at.get(e.strings);return t===void 0&&at.set(e.strings,t=new lt(e)),t}k(t){Je(this._$AH)||(this._$AH=[],this._$AR());let n=this._$AH,r,i=0;for(let a of t)i===n.length?n.push(r=new e(this.O(Ke()),this.O(Ke()),this,this.options)):r=n[i],r._$AI(a),i++;i<n.length&&(this._$AR(r&&r._$AB.nextSibling,i),n.length=i)}_$AR(e=this._$AA.nextSibling,t){for(this._$AP?.(!1,!0,t);e!==this._$AB;){let t=Re(e).nextSibling;Re(e).remove(),e=t}}setConnected(e){this._$AM===void 0&&(this._$Cv=e,this._$AP?.(e))}},pt=class{get tagName(){return this.element.tagName}get _$AU(){return this._$AM._$AU}constructor(e,t,n,r,i){this.type=1,this._$AH=C,this._$AN=void 0,this.element=e,this.name=t,this._$AM=r,this.options=i,n.length>2||n[0]!==``||n[1]!==``?(this._$AH=Array(n.length-1).fill(new String),this.strings=n):this._$AH=C}_$AI(e,t=this,n,r){let i=this.strings,a=!1;if(i===void 0)e=ut(this,e,t,0),a=!qe(e)||e!==this._$AH&&e!==it,a&&(this._$AH=e);else{let r=e,o,s;for(e=i[0],o=0;o<i.length-1;o++)s=ut(this,r[n+o],t,o),s===it&&(s=this._$AH[o]),a||=!qe(s)||s!==this._$AH[o],s===C?e=C:e!==C&&(e+=(s??``)+i[o+1]),this._$AH[o]=s}a&&!r&&this.j(e)}j(e){e===C?this.element.removeAttribute(this.name):this.element.setAttribute(this.name,e??``)}},mt=class extends pt{constructor(){super(...arguments),this.type=3}j(e){this.element[this.name]=e===C?void 0:e}},ht=class extends pt{constructor(){super(...arguments),this.type=4}j(e){this.element.toggleAttribute(this.name,!!e&&e!==C)}},gt=class extends pt{constructor(e,t,n,r,i){super(e,t,n,r,i),this.type=5}_$AI(e,t=this){if((e=ut(this,e,t,0)??C)===it)return;let n=this._$AH,r=e===C&&n!==C||e.capture!==n.capture||e.once!==n.once||e.passive!==n.passive,i=e!==C&&(n===C||r);r&&this.element.removeEventListener(this.name,this,n),i&&this.element.addEventListener(this.name,this,e),this._$AH=e}handleEvent(e){typeof this._$AH==`function`?this._$AH.call(this.options?.host??this.element,e):this._$AH.handleEvent(e)}},_t=class{constructor(e,t,n){this.element=e,this.type=6,this._$AN=void 0,this._$AM=t,this.options=n}get _$AU(){return this._$AM._$AU}_$AI(e){ut(this,e)}},vt={M:Ve,P:He,A:Ue,C:1,L:ct,R:dt,D:Ye,V:ut,I:ft,H:pt,N:ht,U:gt,B:mt,F:_t},yt=Le.litHtmlPolyfillSupport;yt?.(lt,ft),(Le.litHtmlVersions??=[]).push(`3.3.2`);var bt=(e,t,n)=>{let r=n?.renderBefore??t,i=r._$litPart$;if(i===void 0){let e=n?.renderBefore??null;r._$litPart$=i=new ft(t.insertBefore(Ke(),e),e,void 0,n??{})}return i._$AI(e),i},xt=globalThis,St=class extends Ie{constructor(){super(...arguments),this.renderOptions={host:this},this._$Do=void 0}createRenderRoot(){let e=super.createRenderRoot();return this.renderOptions.renderBefore??=e.firstChild,e}update(e){let t=this.render();this.hasUpdated||(this.renderOptions.isConnected=this.isConnected),super.update(e),this._$Do=bt(t,this.renderRoot,this.renderOptions)}connectedCallback(){super.connectedCallback(),this._$Do?.setConnected(!0)}disconnectedCallback(){super.disconnectedCallback(),this._$Do?.setConnected(!1)}render(){return it}};St._$litElement$=!0,St.finalized=!0,xt.litElementHydrateSupport?.({LitElement:St});var Ct=xt.litElementPolyfillSupport;Ct?.({LitElement:St}),(xt.litElementVersions??=[]).push(`4.2.2`);var wt=x`
  :host {
    display: block;
    outline: 0;
    z-index: 0;
  }

  :host(:focus) {
    outline: none;
  }

  slot:not([name])::slotted(sl-icon) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .tree-item {
    position: relative;
    display: flex;
    align-items: stretch;
    flex-direction: column;
    color: var(--sl-color-neutral-700);
    cursor: pointer;
    user-select: none;
    -webkit-user-select: none;
  }

  .tree-item__checkbox {
    pointer-events: none;
  }

  .tree-item__expand-button,
  .tree-item__checkbox,
  .tree-item__label {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-dense);
    letter-spacing: var(--sl-letter-spacing-normal);
  }

  .tree-item__checkbox::part(base) {
    display: flex;
    align-items: center;
  }

  .tree-item__indentation {
    display: block;
    width: 1em;
    flex-shrink: 0;
  }

  .tree-item__expand-button {
    display: flex;
    align-items: center;
    justify-content: center;
    box-sizing: content-box;
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-x-small);
    width: 1rem;
    height: 1rem;
    flex-shrink: 0;
    cursor: pointer;
  }

  .tree-item__expand-button {
    transition: var(--sl-transition-medium) rotate ease;
  }

  .tree-item--expanded .tree-item__expand-button {
    rotate: 90deg;
  }

  .tree-item--expanded.tree-item--rtl .tree-item__expand-button {
    rotate: -90deg;
  }

  .tree-item--expanded slot[name='expand-icon'],
  .tree-item:not(.tree-item--expanded) slot[name='collapse-icon'] {
    display: none;
  }

  .tree-item:not(.tree-item--has-expand-button) .tree-item__expand-icon-slot {
    display: none;
  }

  .tree-item__expand-button--visible {
    cursor: pointer;
  }

  .tree-item__item {
    display: flex;
    align-items: center;
    border-inline-start: solid 3px transparent;
  }

  .tree-item--disabled .tree-item__item {
    opacity: 0.5;
    outline: none;
    cursor: not-allowed;
  }

  :host(:focus-visible) .tree-item__item {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
    z-index: 2;
  }

  :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
    background-color: var(--sl-color-neutral-100);
    border-inline-start-color: var(--sl-color-primary-600);
  }

  :host(:not([aria-disabled='true'])) .tree-item__expand-button {
    color: var(--sl-color-neutral-600);
  }

  .tree-item__label {
    display: flex;
    align-items: center;
    transition: var(--sl-transition-fast) color;
  }

  .tree-item__children {
    display: block;
    font-size: calc(1em + var(--indent-size, var(--sl-spacing-medium)));
  }

  /* Indentation lines */
  .tree-item__children {
    position: relative;
  }

  .tree-item__children::before {
    content: '';
    position: absolute;
    top: var(--indent-guide-offset);
    bottom: var(--indent-guide-offset);
    left: calc(1em - (var(--indent-guide-width) / 2) - 1px);
    border-inline-end: var(--indent-guide-width) var(--indent-guide-style) var(--indent-guide-color);
    z-index: 1;
  }

  .tree-item--rtl .tree-item__children::before {
    left: auto;
    right: 1em;
  }

  @media (forced-colors: active) {
    :host(:not([aria-disabled='true'])) .tree-item--selected .tree-item__item {
      outline: dashed 1px SelectedItem;
    }
  }
`,Tt=x`
  :host {
    display: inline-block;
  }

  .checkbox {
    position: relative;
    display: inline-flex;
    align-items: flex-start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .checkbox--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .checkbox--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .checkbox--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .checkbox__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 2px;
    background-color: var(--sl-input-background-color);
    color: var(--sl-color-neutral-0);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .checkbox__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  .checkbox__checked-icon,
  .checkbox__indeterminate-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  /* Hover */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Focus */
  .checkbox:not(.checkbox--checked):not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked/indeterminate */
  .checkbox--checked .checkbox__control,
  .checkbox--indeterminate .checkbox__control {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked/indeterminate + hover */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__control:hover,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked/indeterminate + focus */
  .checkbox.checkbox--checked:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control,
  .checkbox.checkbox--indeterminate:not(.checkbox--disabled) .checkbox__input:focus-visible ~ .checkbox__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .checkbox--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .checkbox__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .checkbox__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }
`,Et=(e=`value`)=>(t,n)=>{let r=t.constructor,i=r.prototype.attributeChangedCallback;r.prototype.attributeChangedCallback=function(t,a,o){let s=r.getPropertyOptions(e);if(t===(typeof s.attribute==`string`?s.attribute:e)){let t=s.converter||Ne,r=(typeof t==`function`?t:t?.fromAttribute??Ne.fromAttribute)(o,s.type);this[e]!==r&&(this[n]=r)}i.call(this,t,a,o)}},Dt=x`
  .form-control .form-control__label {
    display: none;
  }

  .form-control .form-control__help-text {
    display: none;
  }

  /* Label */
  .form-control--has-label .form-control__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    margin-bottom: var(--sl-spacing-3x-small);
  }

  .form-control--has-label.form-control--small .form-control__label {
    font-size: var(--sl-input-label-font-size-small);
  }

  .form-control--has-label.form-control--medium .form-control__label {
    font-size: var(--sl-input-label-font-size-medium);
  }

  .form-control--has-label.form-control--large .form-control__label {
    font-size: var(--sl-input-label-font-size-large);
  }

  :host([required]) .form-control--has-label .form-control__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
    color: var(--sl-input-required-content-color);
  }

  /* Help text */
  .form-control--has-help-text .form-control__help-text {
    display: block;
    color: var(--sl-input-help-text-color);
    margin-top: var(--sl-spacing-3x-small);
  }

  .form-control--has-help-text.form-control--small .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-small);
  }

  .form-control--has-help-text.form-control--medium .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-medium);
  }

  .form-control--has-help-text.form-control--large .form-control__help-text {
    font-size: var(--sl-input-help-text-font-size-large);
  }

  .form-control--has-help-text.form-control--radio-group .form-control__help-text {
    margin-top: var(--sl-spacing-2x-small);
  }
`,Ot=class{constructor(e,...t){this.slotNames=[],this.handleSlotChange=e=>{let t=e.target;(this.slotNames.includes(`[default]`)&&!t.name||t.name&&this.slotNames.includes(t.name))&&this.host.requestUpdate()},(this.host=e).addController(this),this.slotNames=t}hasDefaultSlot(){return[...this.host.childNodes].some(e=>{if(e.nodeType===e.TEXT_NODE&&e.textContent.trim()!==``)return!0;if(e.nodeType===e.ELEMENT_NODE){let t=e;if(t.tagName.toLowerCase()===`sl-visually-hidden`)return!1;if(!t.hasAttribute(`slot`))return!0}return!1})}hasNamedSlot(e){return this.host.querySelector(`:scope > [slot="${e}"]`)!==null}test(e){return e===`[default]`?this.hasDefaultSlot():this.hasNamedSlot(e)}hostConnected(){this.host.shadowRoot.addEventListener(`slotchange`,this.handleSlotChange)}hostDisconnected(){this.host.shadowRoot.removeEventListener(`slotchange`,this.handleSlotChange)}};function kt(e){if(!e)return``;let t=e.assignedNodes({flatten:!0}),n=``;return[...t].forEach(e=>{e.nodeType===Node.TEXT_NODE&&(n+=e.textContent)}),n}var At=``;function jt(e){At=e}function Mt(e=``){if(!At){let e=[...document.getElementsByTagName(`script`)],t=e.find(e=>e.hasAttribute(`data-shoelace`));if(t)jt(t.getAttribute(`data-shoelace`));else{let t=e.find(e=>/shoelace(\.min)?\.js($|\?)/.test(e.src)||/shoelace-autoloader(\.min)?\.js($|\?)/.test(e.src)),n=``;t&&(n=t.getAttribute(`src`)),jt(n.split(`/`).slice(0,-1).join(`/`))}}return At.replace(/\/$/,``)+(e?`/${e.replace(/^\//,``)}`:``)}var Nt={name:`default`,resolver:e=>Mt(`assets/icons/${e}.svg`)},Pt={caret:`
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round">
      <polyline points="6 9 12 15 18 9"></polyline>
    </svg>
  `,check:`
    <svg part="checked-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor">
          <g transform="translate(3.428571, 3.428571)">
            <path d="M0,5.71428571 L3.42857143,9.14285714"></path>
            <path d="M9.14285714,0 L3.42857143,9.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"chevron-down":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-down" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M1.646 4.646a.5.5 0 0 1 .708 0L8 10.293l5.646-5.647a.5.5 0 0 1 .708.708l-6 6a.5.5 0 0 1-.708 0l-6-6a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,"chevron-left":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-left" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M11.354 1.646a.5.5 0 0 1 0 .708L5.707 8l5.647 5.646a.5.5 0 0 1-.708.708l-6-6a.5.5 0 0 1 0-.708l6-6a.5.5 0 0 1 .708 0z"/>
    </svg>
  `,"chevron-right":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-chevron-right" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4.646 1.646a.5.5 0 0 1 .708 0l6 6a.5.5 0 0 1 0 .708l-6 6a.5.5 0 0 1-.708-.708L10.293 8 4.646 2.354a.5.5 0 0 1 0-.708z"/>
    </svg>
  `,copy:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-copy" viewBox="0 0 16 16">
      <path fill-rule="evenodd" d="M4 2a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v8a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V2Zm2-1a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1V2a1 1 0 0 0-1-1H6ZM2 5a1 1 0 0 0-1 1v8a1 1 0 0 0 1 1h8a1 1 0 0 0 1-1v-1h1v1a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h1v1H2Z"/>
    </svg>
  `,eye:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye" viewBox="0 0 16 16">
      <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8zM1.173 8a13.133 13.133 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.133 13.133 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5c-2.12 0-3.879-1.168-5.168-2.457A13.134 13.134 0 0 1 1.172 8z"/>
      <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5zM4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0z"/>
    </svg>
  `,"eye-slash":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eye-slash" viewBox="0 0 16 16">
      <path d="M13.359 11.238C15.06 9.72 16 8 16 8s-3-5.5-8-5.5a7.028 7.028 0 0 0-2.79.588l.77.771A5.944 5.944 0 0 1 8 3.5c2.12 0 3.879 1.168 5.168 2.457A13.134 13.134 0 0 1 14.828 8c-.058.087-.122.183-.195.288-.335.48-.83 1.12-1.465 1.755-.165.165-.337.328-.517.486l.708.709z"/>
      <path d="M11.297 9.176a3.5 3.5 0 0 0-4.474-4.474l.823.823a2.5 2.5 0 0 1 2.829 2.829l.822.822zm-2.943 1.299.822.822a3.5 3.5 0 0 1-4.474-4.474l.823.823a2.5 2.5 0 0 0 2.829 2.829z"/>
      <path d="M3.35 5.47c-.18.16-.353.322-.518.487A13.134 13.134 0 0 0 1.172 8l.195.288c.335.48.83 1.12 1.465 1.755C4.121 11.332 5.881 12.5 8 12.5c.716 0 1.39-.133 2.02-.36l.77.772A7.029 7.029 0 0 1 8 13.5C3 13.5 0 8 0 8s.939-1.721 2.641-3.238l.708.709zm10.296 8.884-12-12 .708-.708 12 12-.708.708z"/>
    </svg>
  `,eyedropper:`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-eyedropper" viewBox="0 0 16 16">
      <path d="M13.354.646a1.207 1.207 0 0 0-1.708 0L8.5 3.793l-.646-.647a.5.5 0 1 0-.708.708L8.293 5l-7.147 7.146A.5.5 0 0 0 1 12.5v1.793l-.854.853a.5.5 0 1 0 .708.707L1.707 15H3.5a.5.5 0 0 0 .354-.146L11 7.707l1.146 1.147a.5.5 0 0 0 .708-.708l-.647-.646 3.147-3.146a1.207 1.207 0 0 0 0-1.708l-2-2zM2 12.707l7-7L10.293 7l-7 7H2v-1.293z"></path>
    </svg>
  `,"grip-vertical":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-grip-vertical" viewBox="0 0 16 16">
      <path d="M7 2a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 5a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zM7 8a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm-3 3a1 1 0 1 1-2 0 1 1 0 0 1 2 0zm3 0a1 1 0 1 1-2 0 1 1 0 0 1 2 0z"></path>
    </svg>
  `,indeterminate:`
    <svg part="indeterminate-icon" class="checkbox__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd" stroke-linecap="round">
        <g stroke="currentColor" stroke-width="2">
          <g transform="translate(2.285714, 6.857143)">
            <path d="M10.2857143,1.14285714 L1.14285714,1.14285714"></path>
          </g>
        </g>
      </g>
    </svg>
  `,"person-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-person-fill" viewBox="0 0 16 16">
      <path d="M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
    </svg>
  `,"play-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-play-fill" viewBox="0 0 16 16">
      <path d="m11.596 8.697-6.363 3.692c-.54.313-1.233-.066-1.233-.697V4.308c0-.63.692-1.01 1.233-.696l6.363 3.692a.802.802 0 0 1 0 1.393z"></path>
    </svg>
  `,"pause-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-pause-fill" viewBox="0 0 16 16">
      <path d="M5.5 3.5A1.5 1.5 0 0 1 7 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5zm5 0A1.5 1.5 0 0 1 12 5v6a1.5 1.5 0 0 1-3 0V5a1.5 1.5 0 0 1 1.5-1.5z"></path>
    </svg>
  `,radio:`
    <svg part="checked-icon" class="radio__icon" viewBox="0 0 16 16">
      <g stroke="none" stroke-width="1" fill="none" fill-rule="evenodd">
        <g fill="currentColor">
          <circle cx="8" cy="8" r="3.42857143"></circle>
        </g>
      </g>
    </svg>
  `,"star-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-star-fill" viewBox="0 0 16 16">
      <path d="M3.612 15.443c-.386.198-.824-.149-.746-.592l.83-4.73L.173 6.765c-.329-.314-.158-.888.283-.95l4.898-.696L7.538.792c.197-.39.73-.39.927 0l2.184 4.327 4.898.696c.441.062.612.636.282.95l-3.522 3.356.83 4.73c.078.443-.36.79-.746.592L8 13.187l-4.389 2.256z"/>
    </svg>
  `,"x-lg":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-lg" viewBox="0 0 16 16">
      <path d="M2.146 2.854a.5.5 0 1 1 .708-.708L8 7.293l5.146-5.147a.5.5 0 0 1 .708.708L8.707 8l5.147 5.146a.5.5 0 0 1-.708.708L8 8.707l-5.146 5.147a.5.5 0 0 1-.708-.708L7.293 8 2.146 2.854Z"/>
    </svg>
  `,"x-circle-fill":`
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-x-circle-fill" viewBox="0 0 16 16">
      <path d="M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zM5.354 4.646a.5.5 0 1 0-.708.708L7.293 8l-2.647 2.646a.5.5 0 0 0 .708.708L8 8.707l2.646 2.647a.5.5 0 0 0 .708-.708L8.707 8l2.647-2.646a.5.5 0 0 0-.708-.708L8 7.293 5.354 4.646z"></path>
    </svg>
  `},Ft=[Nt,{name:`system`,resolver:e=>e in Pt?`data:image/svg+xml,${encodeURIComponent(Pt[e])}`:``}],It=[];function Lt(e){It.push(e)}function Rt(e){It=It.filter(t=>t!==e)}function zt(e){return Ft.find(t=>t.name===e)}var Bt=x`
  :host {
    display: inline-block;
    width: 1em;
    height: 1em;
    box-sizing: content-box !important;
  }

  svg {
    display: block;
    height: 100%;
    width: 100%;
  }
`;function w(e,t){let n=_({waitUntilFirstUpdate:!1},t);return(t,r)=>{let{update:i}=t,a=Array.isArray(e)?e:[e];t.update=function(e){a.forEach(t=>{let i=t;if(e.has(i)){let t=e.get(i),a=this[i];t!==a&&(!n.waitUntilFirstUpdate||this.hasUpdated)&&this[r](t,a)}}),i.call(this,e)}}}var T=x`
  :host {
    box-sizing: border-box;
  }

  :host *,
  :host *::before,
  :host *::after {
    box-sizing: inherit;
  }

  [hidden] {
    display: none !important;
  }
`,Vt={attribute:!0,type:String,converter:Ne,reflect:!1,hasChanged:Pe},Ht=(e=Vt,t,n)=>{let{kind:r,metadata:i}=n,a=globalThis.litPropertyMetadata.get(i);if(a===void 0&&globalThis.litPropertyMetadata.set(i,a=new Map),r===`setter`&&((e=Object.create(e)).wrapped=!0),a.set(n.name,e),r===`accessor`){let{name:r}=n;return{set(n){let i=t.get.call(this);t.set.call(this,n),this.requestUpdate(r,i,e,!0,n)},init(t){return t!==void 0&&this.C(r,void 0,e,t),t}}}if(r===`setter`){let{name:r}=n;return function(n){let i=this[r];t.call(this,n),this.requestUpdate(r,i,e,!0,n)}}throw Error(`Unsupported decorator location: `+r)};function E(e){return(t,n)=>typeof n==`object`?Ht(e,t,n):((e,t,n)=>{let r=t.hasOwnProperty(n);return t.constructor.createProperty(n,e),r?Object.getOwnPropertyDescriptor(t,n):void 0})(e,t,n)}function D(e){return E({...e,state:!0,attribute:!1})}function Ut(e){return(t,n)=>{let r=typeof t==`function`?t:t[n];Object.assign(r,e)}}var Wt=(e,t,n)=>(n.configurable=!0,n.enumerable=!0,Reflect.decorate&&typeof t!=`object`&&Object.defineProperty(e,t,n),n);function O(e,t){return(n,r,i)=>{let a=t=>t.renderRoot?.querySelector(e)??null;if(t){let{get:e,set:t}=typeof r==`object`?n:i??(()=>{let e=Symbol();return{get(){return this[e]},set(t){this[e]=t}}})();return Wt(n,r,{get(){let n=e.call(this);return n===void 0&&(n=a(this),(n!==null||this.hasUpdated)&&t.call(this,n)),n}})}return Wt(n,r,{get(){return a(this)}})}}function Gt(e){return(t,n)=>Wt(t,n,{async get(){return await this.updateComplete,this.renderRoot?.querySelector(e)??null}})}var Kt,k=class extends St{constructor(){super(),te(this,Kt,!1),this.initialReflectedProperties=new Map,Object.entries(this.constructor.dependencies).forEach(([e,t])=>{this.constructor.define(e,t)})}emit(e,t){let n=new CustomEvent(e,_({bubbles:!0,cancelable:!1,composed:!0,detail:{}},t));return this.dispatchEvent(n),n}static define(e,t=this,n={}){let r=customElements.get(e);if(!r){try{customElements.define(e,t,n)}catch{customElements.define(e,class extends t{},n)}return}let i=` (unknown version)`,a=i;`version`in t&&t.version&&(i=` v`+t.version),`version`in r&&r.version&&(a=` v`+r.version),!(i&&a&&i===a)&&console.warn(`Attempted to register <${e}>${i}, but <${e}>${a} has already been registered.`)}attributeChangedCallback(e,t,n){b(this,Kt)||(this.constructor.elementProperties.forEach((e,t)=>{e.reflect&&this[t]!=null&&this.initialReflectedProperties.set(t,this[t])}),ne(this,Kt,!0)),super.attributeChangedCallback(e,t,n)}willUpdate(e){super.willUpdate(e),this.initialReflectedProperties.forEach((t,n)=>{e.has(n)&&this[n]==null&&(this[n]=t)})}};Kt=new WeakMap,k.version=`2.20.1`,k.dependencies={},y([E()],k.prototype,`dir`,2),y([E()],k.prototype,`lang`,2);var{I:qt}=vt,Jt=(e,t)=>t===void 0?e?._$litType$!==void 0:e?._$litType$===t,Yt=e=>e.strings===void 0,Xt={},Zt=(e,t=Xt)=>e._$AH=t,Qt=Symbol(),$t=Symbol(),en,tn=new Map,A=class extends k{constructor(){super(...arguments),this.initialRender=!1,this.svg=null,this.label=``,this.library=`default`}async resolveIcon(e,t){let n;if(t?.spriteSheet)return this.svg=S`<svg part="svg">
        <use part="use" href="${e}"></use>
      </svg>`,this.svg;try{if(n=await fetch(e,{mode:`cors`}),!n.ok)return n.status===410?Qt:$t}catch{return $t}try{let e=document.createElement(`div`);e.innerHTML=await n.text();let t=e.firstElementChild;if((t?.tagName)?.toLowerCase()!==`svg`)return Qt;en||=new DOMParser;let r=en.parseFromString(t.outerHTML,`text/html`).body.querySelector(`svg`);return r?(r.part.add(`svg`),document.adoptNode(r)):Qt}catch{return Qt}}connectedCallback(){super.connectedCallback(),Lt(this)}firstUpdated(){this.initialRender=!0,this.setIcon()}disconnectedCallback(){super.disconnectedCallback(),Rt(this)}getIconSource(){let e=zt(this.library);return this.name&&e?{url:e.resolver(this.name),fromLibrary:!0}:{url:this.src,fromLibrary:!1}}handleLabelChange(){typeof this.label==`string`&&this.label.length>0?(this.setAttribute(`role`,`img`),this.setAttribute(`aria-label`,this.label),this.removeAttribute(`aria-hidden`)):(this.removeAttribute(`role`),this.removeAttribute(`aria-label`),this.setAttribute(`aria-hidden`,`true`))}async setIcon(){var e;let{url:t,fromLibrary:n}=this.getIconSource(),r=n?zt(this.library):void 0;if(!t){this.svg=null;return}let i=tn.get(t);if(i||(i=this.resolveIcon(t,r),tn.set(t,i)),!this.initialRender)return;let a=await i;if(a===$t&&tn.delete(t),t===this.getIconSource().url){if(Jt(a)){if(this.svg=a,r){await this.updateComplete;let e=this.shadowRoot.querySelector(`[part='svg']`);typeof r.mutator==`function`&&e&&r.mutator(e)}return}switch(a){case $t:case Qt:this.svg=null,this.emit(`sl-error`);break;default:this.svg=a.cloneNode(!0),(e=r?.mutator)==null||e.call(r,this.svg),this.emit(`sl-load`)}}}render(){return this.svg}};A.styles=[T,Bt],y([D()],A.prototype,`svg`,2),y([E({reflect:!0})],A.prototype,`name`,2),y([E()],A.prototype,`src`,2),y([E()],A.prototype,`label`,2),y([E({reflect:!0})],A.prototype,`library`,2),y([w(`label`)],A.prototype,`handleLabelChange`,1),y([w([`name`,`src`,`library`])],A.prototype,`setIcon`,1);var nn={ATTRIBUTE:1,CHILD:2,PROPERTY:3,BOOLEAN_ATTRIBUTE:4,EVENT:5,ELEMENT:6},rn=e=>(...t)=>({_$litDirective$:e,values:t}),an=class{constructor(e){}get _$AU(){return this._$AM._$AU}_$AT(e,t,n){this._$Ct=e,this._$AM=t,this._$Ci=n}_$AS(e,t){return this.update(e,t)}update(e,t){return this.render(...t)}},j=rn(class extends an{constructor(e){if(super(e),e.type!==nn.ATTRIBUTE||e.name!==`class`||e.strings?.length>2)throw Error("`classMap()` can only be used in the `class` attribute and must be the only part in the attribute.")}render(e){return` `+Object.keys(e).filter(t=>e[t]).join(` `)+` `}update(e,[t]){if(this.st===void 0){this.st=new Set,e.strings!==void 0&&(this.nt=new Set(e.strings.join(` `).split(/\s/).filter(e=>e!==``)));for(let e in t)t[e]&&!this.nt?.has(e)&&this.st.add(e);return this.render(t)}let n=e.element.classList;for(let e of this.st)e in t||(n.remove(e),this.st.delete(e));for(let e in t){let r=!!t[e];r===this.st.has(e)||this.nt?.has(e)||(r?(n.add(e),this.st.add(e)):(n.remove(e),this.st.delete(e)))}return it}}),M=e=>e??C,on=rn(class extends an{constructor(e){if(super(e),e.type!==nn.PROPERTY&&e.type!==nn.ATTRIBUTE&&e.type!==nn.BOOLEAN_ATTRIBUTE)throw Error("The `live` directive is not allowed on child or event bindings");if(!Yt(e))throw Error("`live` bindings can only contain a single expression")}render(e){return e}update(e,[t]){if(t===it||t===C)return t;let n=e.element,r=e.name;if(e.type===nn.PROPERTY){if(t===n[r])return it}else if(e.type===nn.BOOLEAN_ATTRIBUTE){if(!!t===n.hasAttribute(r))return it}else if(e.type===nn.ATTRIBUTE&&n.getAttribute(r)===t+``)return it;return Zt(e),t}}),sn=class extends k{constructor(){super(...arguments),this.formControlController=new ue(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Ot(this,`help-text`),this.hasFocus=!1,this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.checked=!1,this.indeterminate=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleClick(){this.checked=!this.checked,this.indeterminate=!1,this.emit(`sl-change`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleInput(){this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStateChange(){this.input.checked=this.checked,this.input.indeterminate=this.indeterminate,this.formControlController.updateValidity()}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return S`
      <div
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${j({checkbox:!0,"checkbox--checked":this.checked,"checkbox--disabled":this.disabled,"checkbox--focused":this.hasFocus,"checkbox--indeterminate":this.indeterminate,"checkbox--small":this.size===`small`,"checkbox--medium":this.size===`medium`,"checkbox--large":this.size===`large`})}
        >
          <input
            class="checkbox__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${M(this.value)}
            .indeterminate=${on(this.indeterminate)}
            .checked=${on(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
          />

          <span
            part="control${this.checked?` control--checked`:``}${this.indeterminate?` control--indeterminate`:``}"
            class="checkbox__control"
          >
            ${this.checked?S`
                  <sl-icon part="checked-icon" class="checkbox__checked-icon" library="system" name="check"></sl-icon>
                `:``}
            ${!this.checked&&this.indeterminate?S`
                  <sl-icon
                    part="indeterminate-icon"
                    class="checkbox__indeterminate-icon"
                    library="system"
                    name="indeterminate"
                  ></sl-icon>
                `:``}
          </span>

          <div part="label" class="checkbox__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};sn.styles=[T,Dt,Tt],sn.dependencies={"sl-icon":A},y([O(`input[type="checkbox"]`)],sn.prototype,`input`,2),y([D()],sn.prototype,`hasFocus`,2),y([E()],sn.prototype,`title`,2),y([E()],sn.prototype,`name`,2),y([E()],sn.prototype,`value`,2),y([E({reflect:!0})],sn.prototype,`size`,2),y([E({type:Boolean,reflect:!0})],sn.prototype,`disabled`,2),y([E({type:Boolean,reflect:!0})],sn.prototype,`checked`,2),y([E({type:Boolean,reflect:!0})],sn.prototype,`indeterminate`,2),y([Et(`checked`)],sn.prototype,`defaultChecked`,2),y([E({reflect:!0})],sn.prototype,`form`,2),y([E({type:Boolean,reflect:!0})],sn.prototype,`required`,2),y([E({attribute:`help-text`})],sn.prototype,`helpText`,2),y([w(`disabled`,{waitUntilFirstUpdate:!0})],sn.prototype,`handleDisabledChange`,1),y([w([`checked`,`indeterminate`],{waitUntilFirstUpdate:!0})],sn.prototype,`handleStateChange`,1);var cn=x`
  :host {
    --track-width: 2px;
    --track-color: rgb(128 128 128 / 25%);
    --indicator-color: var(--sl-color-primary-600);
    --speed: 2s;

    display: inline-flex;
    width: 1em;
    height: 1em;
    flex: none;
  }

  .spinner {
    flex: 1 1 auto;
    height: 100%;
    width: 100%;
  }

  .spinner__track,
  .spinner__indicator {
    fill: none;
    stroke-width: var(--track-width);
    r: calc(0.5em - var(--track-width) / 2);
    cx: 0.5em;
    cy: 0.5em;
    transform-origin: 50% 50%;
  }

  .spinner__track {
    stroke: var(--track-color);
    transform-origin: 0% 0%;
  }

  .spinner__indicator {
    stroke: var(--indicator-color);
    stroke-linecap: round;
    stroke-dasharray: 150% 75%;
    animation: spin var(--speed) linear infinite;
  }

  @keyframes spin {
    0% {
      transform: rotate(0deg);
      stroke-dasharray: 0.05em, 3em;
    }

    50% {
      transform: rotate(450deg);
      stroke-dasharray: 1.375em, 1.375em;
    }

    100% {
      transform: rotate(1080deg);
      stroke-dasharray: 0.05em, 3em;
    }
  }
`,ln=new Set,un=new Map,dn,fn=`ltr`,pn=`en`,mn=typeof MutationObserver<`u`&&typeof document<`u`&&document.documentElement!==void 0;if(mn){let e=new MutationObserver(gn);fn=document.documentElement.dir||`ltr`,pn=document.documentElement.lang||navigator.language,e.observe(document.documentElement,{attributes:!0,attributeFilter:[`dir`,`lang`]})}function hn(...e){e.map(e=>{let t=e.$code.toLowerCase();un.has(t)?un.set(t,Object.assign(Object.assign({},un.get(t)),e)):un.set(t,e),dn||=e}),gn()}function gn(){mn&&(fn=document.documentElement.dir||`ltr`,pn=document.documentElement.lang||navigator.language),[...ln.keys()].map(e=>{typeof e.requestUpdate==`function`&&e.requestUpdate()})}var _n=class{constructor(e){this.host=e,this.host.addController(this)}hostConnected(){ln.add(this.host)}hostDisconnected(){ln.delete(this.host)}dir(){return`${this.host.dir||fn}`.toLowerCase()}lang(){return`${this.host.lang||pn}`.toLowerCase()}getTranslationData(e){let t=new Intl.Locale(e.replace(/_/g,`-`)),n=t?.language.toLowerCase(),r=(t?.region)?.toLowerCase()??``;return{locale:t,language:n,region:r,primary:un.get(`${n}-${r}`),secondary:un.get(n)}}exists(e,t){let{primary:n,secondary:r}=this.getTranslationData(t.lang??this.lang());return t=Object.assign({includeFallback:!1},t),!!(n&&n[e]||r&&r[e]||t.includeFallback&&dn&&dn[e])}term(e,...t){let{primary:n,secondary:r}=this.getTranslationData(this.lang()),i;if(n&&n[e])i=n[e];else if(r&&r[e])i=r[e];else if(dn&&dn[e])i=dn[e];else return console.error(`No translation found for: ${String(e)}`),String(e);return typeof i==`function`?i(...t):i}date(e,t){return e=new Date(e),new Intl.DateTimeFormat(this.lang(),t).format(e)}number(e,t){return e=Number(e),isNaN(e)?``:new Intl.NumberFormat(this.lang(),t).format(e)}relativeTime(e,t,n){return new Intl.RelativeTimeFormat(this.lang(),n).format(e,t)}},vn={$code:`en`,$name:`English`,$dir:`ltr`,carousel:`Carousel`,clearEntry:`Clear entry`,close:`Close`,copied:`Copied`,copy:`Copy`,currentValue:`Current value`,error:`Error`,goToSlide:(e,t)=>`Go to slide ${e} of ${t}`,hidePassword:`Hide password`,loading:`Loading`,nextSlide:`Next slide`,numOptionsSelected:e=>e===0?`No options selected`:e===1?`1 option selected`:`${e} options selected`,previousSlide:`Previous slide`,progress:`Progress`,remove:`Remove`,resize:`Resize`,scrollToEnd:`Scroll to end`,scrollToStart:`Scroll to start`,selectAColorFromTheScreen:`Select a color from the screen`,showPassword:`Show password`,slideNum:e=>`Slide ${e}`,toggleColorFormat:`Toggle color format`};hn(vn);var yn=vn,N=class extends _n{};hn(yn);var bn=class extends k{constructor(){super(...arguments),this.localize=new N(this)}render(){return S`
      <svg part="base" class="spinner" role="progressbar" aria-label=${this.localize.term(`loading`)}>
        <circle class="spinner__track"></circle>
        <circle class="spinner__indicator"></circle>
      </svg>
    `}};bn.styles=[T,cn];var xn=new Map,Sn=new WeakMap;function Cn(e){return e??{keyframes:[],options:{duration:0}}}function wn(e,t){return t.toLowerCase()===`rtl`?{keyframes:e.rtlKeyframes||e.keyframes,options:e.options}:e}function P(e,t){xn.set(e,Cn(t))}function F(e,t,n){let r=Sn.get(e);if(r?.[t])return wn(r[t],n.dir);let i=xn.get(t);return i?wn(i,n.dir):{keyframes:[],options:{duration:0}}}function I(e,t,n){return new Promise(r=>{if(n?.duration===1/0)throw Error(`Promise-based animations must be finite.`);let i=e.animate(t,v(_({},n),{duration:En()?0:n.duration}));i.addEventListener(`cancel`,r,{once:!0}),i.addEventListener(`finish`,r,{once:!0})})}function Tn(e){return e=e.toString().toLowerCase(),e.indexOf(`ms`)>-1?parseFloat(e):e.indexOf(`s`)>-1?parseFloat(e)*1e3:parseFloat(e)}function En(){return window.matchMedia(`(prefers-reduced-motion: reduce)`).matches}function Dn(e){return Promise.all(e.getAnimations().map(e=>new Promise(t=>{e.cancel(),requestAnimationFrame(t)})))}function On(e,t){return e.map(e=>v(_({},e),{height:e.height===`auto`?`${t}px`:e.height}))}function kn(e,t,n){return e?t(e):n?.(e)}var L=class e extends k{constructor(){super(...arguments),this.localize=new N(this),this.indeterminate=!1,this.isLeaf=!1,this.loading=!1,this.selectable=!1,this.expanded=!1,this.selected=!1,this.disabled=!1,this.lazy=!1}static isTreeItem(e){return e instanceof Element&&e.getAttribute(`role`)===`treeitem`}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`treeitem`),this.setAttribute(`tabindex`,`-1`),this.isNestedItem()&&(this.slot=`children`)}firstUpdated(){this.childrenContainer.hidden=!this.expanded,this.childrenContainer.style.height=this.expanded?`auto`:`0`,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0,this.handleExpandedChange()}async animateCollapse(){this.emit(`sl-collapse`),await Dn(this.childrenContainer);let{keyframes:e,options:t}=F(this,`tree-item.collapse`,{dir:this.localize.dir()});await I(this.childrenContainer,On(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.hidden=!0,this.emit(`sl-after-collapse`)}isNestedItem(){let t=this.parentElement;return!!t&&e.isTreeItem(t)}handleChildrenSlotChange(){this.loading=!1,this.isLeaf=!this.lazy&&this.getChildrenItems().length===0}willUpdate(e){e.has(`selected`)&&!e.has(`indeterminate`)&&(this.indeterminate=!1)}async animateExpand(){this.emit(`sl-expand`),await Dn(this.childrenContainer),this.childrenContainer.hidden=!1;let{keyframes:e,options:t}=F(this,`tree-item.expand`,{dir:this.localize.dir()});await I(this.childrenContainer,On(e,this.childrenContainer.scrollHeight),t),this.childrenContainer.style.height=`auto`,this.emit(`sl-after-expand`)}handleLoadingChange(){this.setAttribute(`aria-busy`,this.loading?`true`:`false`),this.loading||this.animateExpand()}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleExpandedChange(){this.isLeaf?this.removeAttribute(`aria-expanded`):this.setAttribute(`aria-expanded`,this.expanded?`true`:`false`)}handleExpandAnimation(){this.expanded?this.lazy?(this.loading=!0,this.emit(`sl-lazy-load`)):this.animateExpand():this.animateCollapse()}handleLazyChange(){this.emit(`sl-lazy-change`)}getChildrenItems({includeDisabled:t=!0}={}){return this.childrenSlot?[...this.childrenSlot.assignedElements({flatten:!0})].filter(n=>e.isTreeItem(n)&&(t||!n.disabled)):[]}render(){let e=this.localize.dir()===`rtl`,t=!this.loading&&(!this.isLeaf||this.lazy);return S`
      <div
        part="base"
        class="${j({"tree-item":!0,"tree-item--expanded":this.expanded,"tree-item--selected":this.selected,"tree-item--disabled":this.disabled,"tree-item--leaf":this.isLeaf,"tree-item--has-expand-button":t,"tree-item--rtl":this.localize.dir()===`rtl`})}"
      >
        <div
          class="tree-item__item"
          part="
            item
            ${this.disabled?`item--disabled`:``}
            ${this.expanded?`item--expanded`:``}
            ${this.indeterminate?`item--indeterminate`:``}
            ${this.selected?`item--selected`:``}
          "
        >
          <div class="tree-item__indentation" part="indentation"></div>

          <div
            part="expand-button"
            class=${j({"tree-item__expand-button":!0,"tree-item__expand-button--visible":t})}
            aria-hidden="true"
          >
            ${kn(this.loading,()=>S` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `)}
            <slot class="tree-item__expand-icon-slot" name="expand-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
            <slot class="tree-item__expand-icon-slot" name="collapse-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
          </div>

          ${kn(this.selectable,()=>S`
              <sl-checkbox
                part="checkbox"
                exportparts="
                    base:checkbox__base,
                    control:checkbox__control,
                    control--checked:checkbox__control--checked,
                    control--indeterminate:checkbox__control--indeterminate,
                    checked-icon:checkbox__checked-icon,
                    indeterminate-icon:checkbox__indeterminate-icon,
                    label:checkbox__label
                  "
                class="tree-item__checkbox"
                ?disabled="${this.disabled}"
                ?checked="${on(this.selected)}"
                ?indeterminate="${this.indeterminate}"
                tabindex="-1"
              ></sl-checkbox>
            `)}

          <slot class="tree-item__label" part="label"></slot>
        </div>

        <div class="tree-item__children" part="children" role="group">
          <slot name="children" @slotchange="${this.handleChildrenSlotChange}"></slot>
        </div>
      </div>
    `}};L.styles=[T,wt],L.dependencies={"sl-checkbox":sn,"sl-icon":A,"sl-spinner":bn},y([D()],L.prototype,`indeterminate`,2),y([D()],L.prototype,`isLeaf`,2),y([D()],L.prototype,`loading`,2),y([D()],L.prototype,`selectable`,2),y([E({type:Boolean,reflect:!0})],L.prototype,`expanded`,2),y([E({type:Boolean,reflect:!0})],L.prototype,`selected`,2),y([E({type:Boolean,reflect:!0})],L.prototype,`disabled`,2),y([E({type:Boolean,reflect:!0})],L.prototype,`lazy`,2),y([O(`slot:not([name])`)],L.prototype,`defaultSlot`,2),y([O(`slot[name=children]`)],L.prototype,`childrenSlot`,2),y([O(`.tree-item__item`)],L.prototype,`itemElement`,2),y([O(`.tree-item__children`)],L.prototype,`childrenContainer`,2),y([O(`.tree-item__expand-button slot`)],L.prototype,`expandButtonSlot`,2),y([w(`loading`,{waitUntilFirstUpdate:!0})],L.prototype,`handleLoadingChange`,1),y([w(`disabled`)],L.prototype,`handleDisabledChange`,1),y([w(`selected`)],L.prototype,`handleSelectedChange`,1),y([w(`expanded`,{waitUntilFirstUpdate:!0})],L.prototype,`handleExpandedChange`,1),y([w(`expanded`,{waitUntilFirstUpdate:!0})],L.prototype,`handleExpandAnimation`,1),y([w(`lazy`,{waitUntilFirstUpdate:!0})],L.prototype,`handleLazyChange`,1);var An=L;P(`tree-item.expand`,{keyframes:[{height:`0`,opacity:`0`,overflow:`hidden`},{height:`auto`,opacity:`1`,overflow:`hidden`}],options:{duration:250,easing:`cubic-bezier(0.4, 0.0, 0.2, 1)`}}),P(`tree-item.collapse`,{keyframes:[{height:`auto`,opacity:`1`,overflow:`hidden`},{height:`0`,opacity:`0`,overflow:`hidden`}],options:{duration:200,easing:`cubic-bezier(0.4, 0.0, 0.2, 1)`}}),An.define(`sl-tree-item`);var jn=x`
  :host {
    --max-width: 20rem;
    --hide-delay: 0ms;
    --show-delay: 150ms;

    display: contents;
  }

  .tooltip {
    --arrow-size: var(--sl-tooltip-arrow-size);
    --arrow-color: var(--sl-tooltip-background-color);
  }

  .tooltip::part(popup) {
    z-index: var(--sl-z-index-tooltip);
  }

  .tooltip[placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .tooltip[placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .tooltip[placement^='left']::part(popup) {
    transform-origin: right;
  }

  .tooltip[placement^='right']::part(popup) {
    transform-origin: left;
  }

  .tooltip__body {
    display: block;
    width: max-content;
    max-width: var(--max-width);
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    text-align: start;
    white-space: normal;
    color: var(--sl-tooltip-color);
    padding: var(--sl-tooltip-padding);
    pointer-events: none;
    user-select: none;
    -webkit-user-select: none;
  }
`,Mn=x`
  :host {
    --arrow-color: var(--sl-color-neutral-1000);
    --arrow-size: 6px;

    /*
     * These properties are computed to account for the arrow's dimensions after being rotated 45º. The constant
     * 0.7071 is derived from sin(45), which is the diagonal size of the arrow's container after rotating.
     */
    --arrow-size-diagonal: calc(var(--arrow-size) * 0.7071);
    --arrow-padding-offset: calc(var(--arrow-size-diagonal) - var(--arrow-size));

    display: contents;
  }

  .popup {
    position: absolute;
    isolation: isolate;
    max-width: var(--auto-size-available-width, none);
    max-height: var(--auto-size-available-height, none);
  }

  .popup--fixed {
    position: fixed;
  }

  .popup:not(.popup--active) {
    display: none;
  }

  .popup__arrow {
    position: absolute;
    width: calc(var(--arrow-size-diagonal) * 2);
    height: calc(var(--arrow-size-diagonal) * 2);
    rotate: 45deg;
    background: var(--arrow-color);
    z-index: -1;
  }

  /* Hover bridge */
  .popup-hover-bridge:not(.popup-hover-bridge--visible) {
    display: none;
  }

  .popup-hover-bridge {
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--hover-bridge-top-left-x, 0) var(--hover-bridge-top-left-y, 0),
      var(--hover-bridge-top-right-x, 0) var(--hover-bridge-top-right-y, 0),
      var(--hover-bridge-bottom-right-x, 0) var(--hover-bridge-bottom-right-y, 0),
      var(--hover-bridge-bottom-left-x, 0) var(--hover-bridge-bottom-left-y, 0)
    );
  }
`,Nn=Math.min,Pn=Math.max,Fn=Math.round,In=Math.floor,Ln=e=>({x:e,y:e}),Rn={left:`right`,right:`left`,bottom:`top`,top:`bottom`};function zn(e,t,n){return Pn(e,Nn(t,n))}function Bn(e,t){return typeof e==`function`?e(t):e}function Vn(e){return e.split(`-`)[0]}function Hn(e){return e.split(`-`)[1]}function Un(e){return e===`x`?`y`:`x`}function Wn(e){return e===`y`?`height`:`width`}function Gn(e){let t=e[0];return t===`t`||t===`b`?`y`:`x`}function Kn(e){return Un(Gn(e))}function qn(e,t,n){n===void 0&&(n=!1);let r=Hn(e),i=Kn(e),a=Wn(i),o=i===`x`?r===(n?`end`:`start`)?`right`:`left`:r===`start`?`bottom`:`top`;return t.reference[a]>t.floating[a]&&(o=nr(o)),[o,nr(o)]}function Jn(e){let t=nr(e);return[Yn(e),t,Yn(t)]}function Yn(e){return e.includes(`start`)?e.replace(`start`,`end`):e.replace(`end`,`start`)}var Xn=[`left`,`right`],Zn=[`right`,`left`],Qn=[`top`,`bottom`],$n=[`bottom`,`top`];function er(e,t,n){switch(e){case`top`:case`bottom`:return n?t?Zn:Xn:t?Xn:Zn;case`left`:case`right`:return t?Qn:$n;default:return[]}}function tr(e,t,n,r){let i=Hn(e),a=er(Vn(e),n===`start`,r);return i&&(a=a.map(e=>e+`-`+i),t&&(a=a.concat(a.map(Yn)))),a}function nr(e){let t=Vn(e);return Rn[t]+e.slice(t.length)}function rr(e){return{top:0,right:0,bottom:0,left:0,...e}}function ir(e){return typeof e==`number`?{top:e,right:e,bottom:e,left:e}:rr(e)}function ar(e){let{x:t,y:n,width:r,height:i}=e;return{width:r,height:i,top:n,left:t,right:t+r,bottom:n+i,x:t,y:n}}function or(e,t,n){let{reference:r,floating:i}=e,a=Gn(t),o=Kn(t),s=Wn(o),c=Vn(t),l=a===`y`,u=r.x+r.width/2-i.width/2,d=r.y+r.height/2-i.height/2,f=r[s]/2-i[s]/2,p;switch(c){case`top`:p={x:u,y:r.y-i.height};break;case`bottom`:p={x:u,y:r.y+r.height};break;case`right`:p={x:r.x+r.width,y:d};break;case`left`:p={x:r.x-i.width,y:d};break;default:p={x:r.x,y:r.y}}switch(Hn(t)){case`start`:p[o]-=f*(n&&l?-1:1);break;case`end`:p[o]+=f*(n&&l?-1:1);break}return p}async function sr(e,t){t===void 0&&(t={});let{x:n,y:r,platform:i,rects:a,elements:o,strategy:s}=e,{boundary:c=`clippingAncestors`,rootBoundary:l=`viewport`,elementContext:u=`floating`,altBoundary:d=!1,padding:f=0}=Bn(t,e),p=ir(f),m=o[d?u===`floating`?`reference`:`floating`:u],h=ar(await i.getClippingRect({element:await(i.isElement==null?void 0:i.isElement(m))??!0?m:m.contextElement||await(i.getDocumentElement==null?void 0:i.getDocumentElement(o.floating)),boundary:c,rootBoundary:l,strategy:s})),g=u===`floating`?{x:n,y:r,width:a.floating.width,height:a.floating.height}:a.reference,_=await(i.getOffsetParent==null?void 0:i.getOffsetParent(o.floating)),v=await(i.isElement==null?void 0:i.isElement(_))&&await(i.getScale==null?void 0:i.getScale(_))||{x:1,y:1},y=ar(i.convertOffsetParentRelativeRectToViewportRelativeRect?await i.convertOffsetParentRelativeRectToViewportRelativeRect({elements:o,rect:g,offsetParent:_,strategy:s}):g);return{top:(h.top-y.top+p.top)/v.y,bottom:(y.bottom-h.bottom+p.bottom)/v.y,left:(h.left-y.left+p.left)/v.x,right:(y.right-h.right+p.right)/v.x}}var cr=50,lr=async(e,t,n)=>{let{placement:r=`bottom`,strategy:i=`absolute`,middleware:a=[],platform:o}=n,s=o.detectOverflow?o:{...o,detectOverflow:sr},c=await(o.isRTL==null?void 0:o.isRTL(t)),l=await o.getElementRects({reference:e,floating:t,strategy:i}),{x:u,y:d}=or(l,r,c),f=r,p=0,m={};for(let n=0;n<a.length;n++){let h=a[n];if(!h)continue;let{name:g,fn:_}=h,{x:v,y,data:ee,reset:b}=await _({x:u,y:d,initialPlacement:r,placement:f,strategy:i,middlewareData:m,rects:l,platform:s,elements:{reference:e,floating:t}});u=v??u,d=y??d,m[g]={...m[g],...ee},b&&p<cr&&(p++,typeof b==`object`&&(b.placement&&(f=b.placement),b.rects&&(l=b.rects===!0?await o.getElementRects({reference:e,floating:t,strategy:i}):b.rects),{x:u,y:d}=or(l,f,c)),n=-1)}return{x:u,y:d,placement:f,strategy:i,middlewareData:m}},ur=e=>({name:`arrow`,options:e,async fn(t){let{x:n,y:r,placement:i,rects:a,platform:o,elements:s,middlewareData:c}=t,{element:l,padding:u=0}=Bn(e,t)||{};if(l==null)return{};let d=ir(u),f={x:n,y:r},p=Kn(i),m=Wn(p),h=await o.getDimensions(l),g=p===`y`,_=g?`top`:`left`,v=g?`bottom`:`right`,y=g?`clientHeight`:`clientWidth`,ee=a.reference[m]+a.reference[p]-f[p]-a.floating[m],b=f[p]-a.reference[p],te=await(o.getOffsetParent==null?void 0:o.getOffsetParent(l)),ne=te?te[y]:0;(!ne||!await(o.isElement==null?void 0:o.isElement(te)))&&(ne=s.floating[y]||a.floating[m]);let re=ee/2-b/2,ie=ne/2-h[m]/2-1,ae=Nn(d[_],ie),oe=Nn(d[v],ie),se=ae,ce=ne-h[m]-oe,le=ne/2-h[m]/2+re,ue=zn(se,le,ce),de=!c.arrow&&Hn(i)!=null&&le!==ue&&a.reference[m]/2-(le<se?ae:oe)-h[m]/2<0,fe=de?le<se?le-se:le-ce:0;return{[p]:f[p]+fe,data:{[p]:ue,centerOffset:le-ue-fe,...de&&{alignmentOffset:fe}},reset:de}}}),dr=function(e){return e===void 0&&(e={}),{name:`flip`,options:e,async fn(t){var n;let{placement:r,middlewareData:i,rects:a,initialPlacement:o,platform:s,elements:c}=t,{mainAxis:l=!0,crossAxis:u=!0,fallbackPlacements:d,fallbackStrategy:f=`bestFit`,fallbackAxisSideDirection:p=`none`,flipAlignment:m=!0,...h}=Bn(e,t);if((n=i.arrow)!=null&&n.alignmentOffset)return{};let g=Vn(r),_=Gn(o),v=Vn(o)===o,y=await(s.isRTL==null?void 0:s.isRTL(c.floating)),ee=d||(v||!m?[nr(o)]:Jn(o)),b=p!==`none`;!d&&b&&ee.push(...tr(o,m,p,y));let te=[o,...ee],ne=await s.detectOverflow(t,h),re=[],ie=i.flip?.overflows||[];if(l&&re.push(ne[g]),u){let e=qn(r,a,y);re.push(ne[e[0]],ne[e[1]])}if(ie=[...ie,{placement:r,overflows:re}],!re.every(e=>e<=0)){let e=(i.flip?.index||0)+1,t=te[e];if(t&&(!(u===`alignment`&&_!==Gn(t))||ie.every(e=>Gn(e.placement)===_?e.overflows[0]>0:!0)))return{data:{index:e,overflows:ie},reset:{placement:t}};let n=ie.filter(e=>e.overflows[0]<=0).sort((e,t)=>e.overflows[1]-t.overflows[1])[0]?.placement;if(!n)switch(f){case`bestFit`:{let e=ie.filter(e=>{if(b){let t=Gn(e.placement);return t===_||t===`y`}return!0}).map(e=>[e.placement,e.overflows.filter(e=>e>0).reduce((e,t)=>e+t,0)]).sort((e,t)=>e[1]-t[1])[0]?.[0];e&&(n=e);break}case`initialPlacement`:n=o;break}if(r!==n)return{reset:{placement:n}}}return{}}}},fr=new Set([`left`,`top`]);async function pr(e,t){let{placement:n,platform:r,elements:i}=e,a=await(r.isRTL==null?void 0:r.isRTL(i.floating)),o=Vn(n),s=Hn(n),c=Gn(n)===`y`,l=fr.has(o)?-1:1,u=a&&c?-1:1,d=Bn(t,e),{mainAxis:f,crossAxis:p,alignmentAxis:m}=typeof d==`number`?{mainAxis:d,crossAxis:0,alignmentAxis:null}:{mainAxis:d.mainAxis||0,crossAxis:d.crossAxis||0,alignmentAxis:d.alignmentAxis};return s&&typeof m==`number`&&(p=s===`end`?m*-1:m),c?{x:p*u,y:f*l}:{x:f*l,y:p*u}}var mr=function(e){return e===void 0&&(e=0),{name:`offset`,options:e,async fn(t){var n;let{x:r,y:i,placement:a,middlewareData:o}=t,s=await pr(t,e);return a===o.offset?.placement&&(n=o.arrow)!=null&&n.alignmentOffset?{}:{x:r+s.x,y:i+s.y,data:{...s,placement:a}}}}},hr=function(e){return e===void 0&&(e={}),{name:`shift`,options:e,async fn(t){let{x:n,y:r,placement:i,platform:a}=t,{mainAxis:o=!0,crossAxis:s=!1,limiter:c={fn:e=>{let{x:t,y:n}=e;return{x:t,y:n}}},...l}=Bn(e,t),u={x:n,y:r},d=await a.detectOverflow(t,l),f=Gn(Vn(i)),p=Un(f),m=u[p],h=u[f];if(o){let e=p===`y`?`top`:`left`,t=p===`y`?`bottom`:`right`,n=m+d[e],r=m-d[t];m=zn(n,m,r)}if(s){let e=f===`y`?`top`:`left`,t=f===`y`?`bottom`:`right`,n=h+d[e],r=h-d[t];h=zn(n,h,r)}let g=c.fn({...t,[p]:m,[f]:h});return{...g,data:{x:g.x-n,y:g.y-r,enabled:{[p]:o,[f]:s}}}}}},gr=function(e){return e===void 0&&(e={}),{name:`size`,options:e,async fn(t){var n,r;let{placement:i,rects:a,platform:o,elements:s}=t,{apply:c=()=>{},...l}=Bn(e,t),u=await o.detectOverflow(t,l),d=Vn(i),f=Hn(i),p=Gn(i)===`y`,{width:m,height:h}=a.floating,g,_;d===`top`||d===`bottom`?(g=d,_=f===(await(o.isRTL==null?void 0:o.isRTL(s.floating))?`start`:`end`)?`left`:`right`):(_=d,g=f===`end`?`top`:`bottom`);let v=h-u.top-u.bottom,y=m-u.left-u.right,ee=Nn(h-u[g],v),b=Nn(m-u[_],y),te=!t.middlewareData.shift,ne=ee,re=b;if((n=t.middlewareData.shift)!=null&&n.enabled.x&&(re=y),(r=t.middlewareData.shift)!=null&&r.enabled.y&&(ne=v),te&&!f){let e=Pn(u.left,0),t=Pn(u.right,0),n=Pn(u.top,0),r=Pn(u.bottom,0);p?re=m-2*(e!==0||t!==0?e+t:Pn(u.left,u.right)):ne=h-2*(n!==0||r!==0?n+r:Pn(u.top,u.bottom))}await c({...t,availableWidth:re,availableHeight:ne});let ie=await o.getDimensions(s.floating);return m!==ie.width||h!==ie.height?{reset:{rects:!0}}:{}}}};function _r(){return typeof window<`u`}function vr(e){return xr(e)?(e.nodeName||``).toLowerCase():`#document`}function yr(e){var t;return(e==null||(t=e.ownerDocument)==null?void 0:t.defaultView)||window}function br(e){return((xr(e)?e.ownerDocument:e.document)||window.document)?.documentElement}function xr(e){return _r()?e instanceof Node||e instanceof yr(e).Node:!1}function Sr(e){return _r()?e instanceof Element||e instanceof yr(e).Element:!1}function Cr(e){return _r()?e instanceof HTMLElement||e instanceof yr(e).HTMLElement:!1}function wr(e){return!_r()||typeof ShadowRoot>`u`?!1:e instanceof ShadowRoot||e instanceof yr(e).ShadowRoot}function Tr(e){let{overflow:t,overflowX:n,overflowY:r,display:i}=Ir(e);return/auto|scroll|overlay|hidden|clip/.test(t+r+n)&&i!==`inline`&&i!==`contents`}function Er(e){return/^(table|td|th)$/.test(vr(e))}function Dr(e){try{if(e.matches(`:popover-open`))return!0}catch{}try{return e.matches(`:modal`)}catch{return!1}}var Or=/transform|translate|scale|rotate|perspective|filter/,kr=/paint|layout|strict|content/,Ar=e=>!!e&&e!==`none`,jr;function Mr(e){let t=Sr(e)?Ir(e):e;return Ar(t.transform)||Ar(t.translate)||Ar(t.scale)||Ar(t.rotate)||Ar(t.perspective)||!Pr()&&(Ar(t.backdropFilter)||Ar(t.filter))||Or.test(t.willChange||``)||kr.test(t.contain||``)}function Nr(e){let t=Rr(e);for(;Cr(t)&&!Fr(t);){if(Mr(t))return t;if(Dr(t))return null;t=Rr(t)}return null}function Pr(){return jr??=typeof CSS<`u`&&CSS.supports&&CSS.supports(`-webkit-backdrop-filter`,`none`),jr}function Fr(e){return/^(html|body|#document)$/.test(vr(e))}function Ir(e){return yr(e).getComputedStyle(e)}function Lr(e){return Sr(e)?{scrollLeft:e.scrollLeft,scrollTop:e.scrollTop}:{scrollLeft:e.scrollX,scrollTop:e.scrollY}}function Rr(e){if(vr(e)===`html`)return e;let t=e.assignedSlot||e.parentNode||wr(e)&&e.host||br(e);return wr(t)?t.host:t}function zr(e){let t=Rr(e);return Fr(t)?e.ownerDocument?e.ownerDocument.body:e.body:Cr(t)&&Tr(t)?t:zr(t)}function Br(e,t,n){t===void 0&&(t=[]),n===void 0&&(n=!0);let r=zr(e),i=r===e.ownerDocument?.body,a=yr(r);if(i){let e=Vr(a);return t.concat(a,a.visualViewport||[],Tr(r)?r:[],e&&n?Br(e):[])}else return t.concat(r,Br(r,[],n))}function Vr(e){return e.parent&&Object.getPrototypeOf(e.parent)?e.frameElement:null}function Hr(e){let t=Ir(e),n=parseFloat(t.width)||0,r=parseFloat(t.height)||0,i=Cr(e),a=i?e.offsetWidth:n,o=i?e.offsetHeight:r,s=Fn(n)!==a||Fn(r)!==o;return s&&(n=a,r=o),{width:n,height:r,$:s}}function Ur(e){return Sr(e)?e:e.contextElement}function Wr(e){let t=Ur(e);if(!Cr(t))return Ln(1);let n=t.getBoundingClientRect(),{width:r,height:i,$:a}=Hr(t),o=(a?Fn(n.width):n.width)/r,s=(a?Fn(n.height):n.height)/i;return(!o||!Number.isFinite(o))&&(o=1),(!s||!Number.isFinite(s))&&(s=1),{x:o,y:s}}var Gr=Ln(0);function Kr(e){let t=yr(e);return!Pr()||!t.visualViewport?Gr:{x:t.visualViewport.offsetLeft,y:t.visualViewport.offsetTop}}function qr(e,t,n){return t===void 0&&(t=!1),!n||t&&n!==yr(e)?!1:t}function Jr(e,t,n,r){t===void 0&&(t=!1),n===void 0&&(n=!1);let i=e.getBoundingClientRect(),a=Ur(e),o=Ln(1);t&&(r?Sr(r)&&(o=Wr(r)):o=Wr(e));let s=qr(a,n,r)?Kr(a):Ln(0),c=(i.left+s.x)/o.x,l=(i.top+s.y)/o.y,u=i.width/o.x,d=i.height/o.y;if(a){let e=yr(a),t=r&&Sr(r)?yr(r):r,n=e,i=Vr(n);for(;i&&r&&t!==n;){let e=Wr(i),t=i.getBoundingClientRect(),r=Ir(i),a=t.left+(i.clientLeft+parseFloat(r.paddingLeft))*e.x,o=t.top+(i.clientTop+parseFloat(r.paddingTop))*e.y;c*=e.x,l*=e.y,u*=e.x,d*=e.y,c+=a,l+=o,n=yr(i),i=Vr(n)}}return ar({width:u,height:d,x:c,y:l})}function Yr(e,t){let n=Lr(e).scrollLeft;return t?t.left+n:Jr(br(e)).left+n}function Xr(e,t){let n=e.getBoundingClientRect();return{x:n.left+t.scrollLeft-Yr(e,n),y:n.top+t.scrollTop}}function Zr(e){let{elements:t,rect:n,offsetParent:r,strategy:i}=e,a=i===`fixed`,o=br(r),s=t?Dr(t.floating):!1;if(r===o||s&&a)return n;let c={scrollLeft:0,scrollTop:0},l=Ln(1),u=Ln(0),d=Cr(r);if((d||!d&&!a)&&((vr(r)!==`body`||Tr(o))&&(c=Lr(r)),d)){let e=Jr(r);l=Wr(r),u.x=e.x+r.clientLeft,u.y=e.y+r.clientTop}let f=o&&!d&&!a?Xr(o,c):Ln(0);return{width:n.width*l.x,height:n.height*l.y,x:n.x*l.x-c.scrollLeft*l.x+u.x+f.x,y:n.y*l.y-c.scrollTop*l.y+u.y+f.y}}function Qr(e){return Array.from(e.getClientRects())}function $r(e){let t=br(e),n=Lr(e),r=e.ownerDocument.body,i=Pn(t.scrollWidth,t.clientWidth,r.scrollWidth,r.clientWidth),a=Pn(t.scrollHeight,t.clientHeight,r.scrollHeight,r.clientHeight),o=-n.scrollLeft+Yr(e),s=-n.scrollTop;return Ir(r).direction===`rtl`&&(o+=Pn(t.clientWidth,r.clientWidth)-i),{width:i,height:a,x:o,y:s}}var ei=25;function ti(e,t){let n=yr(e),r=br(e),i=n.visualViewport,a=r.clientWidth,o=r.clientHeight,s=0,c=0;if(i){a=i.width,o=i.height;let e=Pr();(!e||e&&t===`fixed`)&&(s=i.offsetLeft,c=i.offsetTop)}let l=Yr(r);if(l<=0){let e=r.ownerDocument,t=e.body,n=getComputedStyle(t),i=e.compatMode===`CSS1Compat`&&parseFloat(n.marginLeft)+parseFloat(n.marginRight)||0,o=Math.abs(r.clientWidth-t.clientWidth-i);o<=ei&&(a-=o)}else l<=ei&&(a+=l);return{width:a,height:o,x:s,y:c}}function ni(e,t){let n=Jr(e,!0,t===`fixed`),r=n.top+e.clientTop,i=n.left+e.clientLeft,a=Cr(e)?Wr(e):Ln(1);return{width:e.clientWidth*a.x,height:e.clientHeight*a.y,x:i*a.x,y:r*a.y}}function ri(e,t,n){let r;if(t===`viewport`)r=ti(e,n);else if(t===`document`)r=$r(br(e));else if(Sr(t))r=ni(t,n);else{let n=Kr(e);r={x:t.x-n.x,y:t.y-n.y,width:t.width,height:t.height}}return ar(r)}function ii(e,t){let n=Rr(e);return n===t||!Sr(n)||Fr(n)?!1:Ir(n).position===`fixed`||ii(n,t)}function ai(e,t){let n=t.get(e);if(n)return n;let r=Br(e,[],!1).filter(e=>Sr(e)&&vr(e)!==`body`),i=null,a=Ir(e).position===`fixed`,o=a?Rr(e):e;for(;Sr(o)&&!Fr(o);){let t=Ir(o),n=Mr(o);!n&&t.position===`fixed`&&(i=null),(a?!n&&!i:!n&&t.position===`static`&&i&&(i.position===`absolute`||i.position===`fixed`)||Tr(o)&&!n&&ii(e,o))?r=r.filter(e=>e!==o):i=t,o=Rr(o)}return t.set(e,r),r}function oi(e){let{element:t,boundary:n,rootBoundary:r,strategy:i}=e,a=[...n===`clippingAncestors`?Dr(t)?[]:ai(t,this._c):[].concat(n),r],o=ri(t,a[0],i),s=o.top,c=o.right,l=o.bottom,u=o.left;for(let e=1;e<a.length;e++){let n=ri(t,a[e],i);s=Pn(n.top,s),c=Nn(n.right,c),l=Nn(n.bottom,l),u=Pn(n.left,u)}return{width:c-u,height:l-s,x:u,y:s}}function si(e){let{width:t,height:n}=Hr(e);return{width:t,height:n}}function ci(e,t,n){let r=Cr(t),i=br(t),a=n===`fixed`,o=Jr(e,!0,a,t),s={scrollLeft:0,scrollTop:0},c=Ln(0);function l(){c.x=Yr(i)}if(r||!r&&!a)if((vr(t)!==`body`||Tr(i))&&(s=Lr(t)),r){let e=Jr(t,!0,a,t);c.x=e.x+t.clientLeft,c.y=e.y+t.clientTop}else i&&l();a&&!r&&i&&l();let u=i&&!r&&!a?Xr(i,s):Ln(0);return{x:o.left+s.scrollLeft-c.x-u.x,y:o.top+s.scrollTop-c.y-u.y,width:o.width,height:o.height}}function li(e){return Ir(e).position===`static`}function ui(e,t){if(!Cr(e)||Ir(e).position===`fixed`)return null;if(t)return t(e);let n=e.offsetParent;return br(e)===n&&(n=n.ownerDocument.body),n}function di(e,t){let n=yr(e);if(Dr(e))return n;if(!Cr(e)){let t=Rr(e);for(;t&&!Fr(t);){if(Sr(t)&&!li(t))return t;t=Rr(t)}return n}let r=ui(e,t);for(;r&&Er(r)&&li(r);)r=ui(r,t);return r&&Fr(r)&&li(r)&&!Mr(r)?n:r||Nr(e)||n}var fi=async function(e){let t=this.getOffsetParent||di,n=this.getDimensions,r=await n(e.floating);return{reference:ci(e.reference,await t(e.floating),e.strategy),floating:{x:0,y:0,width:r.width,height:r.height}}};function pi(e){return Ir(e).direction===`rtl`}var mi={convertOffsetParentRelativeRectToViewportRelativeRect:Zr,getDocumentElement:br,getClippingRect:oi,getOffsetParent:di,getElementRects:fi,getClientRects:Qr,getDimensions:si,getScale:Wr,isElement:Sr,isRTL:pi};function hi(e,t){return e.x===t.x&&e.y===t.y&&e.width===t.width&&e.height===t.height}function gi(e,t){let n=null,r,i=br(e);function a(){var e;clearTimeout(r),(e=n)==null||e.disconnect(),n=null}function o(s,c){s===void 0&&(s=!1),c===void 0&&(c=1),a();let l=e.getBoundingClientRect(),{left:u,top:d,width:f,height:p}=l;if(s||t(),!f||!p)return;let m=In(d),h=In(i.clientWidth-(u+f)),g=In(i.clientHeight-(d+p)),_=In(u),v={rootMargin:-m+`px `+-h+`px `+-g+`px `+-_+`px`,threshold:Pn(0,Nn(1,c))||1},y=!0;function ee(t){let n=t[0].intersectionRatio;if(n!==c){if(!y)return o();n?o(!1,n):r=setTimeout(()=>{o(!1,1e-7)},1e3)}n===1&&!hi(l,e.getBoundingClientRect())&&o(),y=!1}try{n=new IntersectionObserver(ee,{...v,root:i.ownerDocument})}catch{n=new IntersectionObserver(ee,v)}n.observe(e)}return o(!0),a}function _i(e,t,n,r){r===void 0&&(r={});let{ancestorScroll:i=!0,ancestorResize:a=!0,elementResize:o=typeof ResizeObserver==`function`,layoutShift:s=typeof IntersectionObserver==`function`,animationFrame:c=!1}=r,l=Ur(e),u=i||a?[...l?Br(l):[],...t?Br(t):[]]:[];u.forEach(e=>{i&&e.addEventListener(`scroll`,n,{passive:!0}),a&&e.addEventListener(`resize`,n)});let d=l&&s?gi(l,n):null,f=-1,p=null;o&&(p=new ResizeObserver(e=>{let[r]=e;r&&r.target===l&&p&&t&&(p.unobserve(t),cancelAnimationFrame(f),f=requestAnimationFrame(()=>{var e;(e=p)==null||e.observe(t)})),n()}),l&&!c&&p.observe(l),t&&p.observe(t));let m,h=c?Jr(e):null;c&&g();function g(){let t=Jr(e);h&&!hi(h,t)&&n(),h=t,m=requestAnimationFrame(g)}return n(),()=>{var e;u.forEach(e=>{i&&e.removeEventListener(`scroll`,n),a&&e.removeEventListener(`resize`,n)}),d?.(),(e=p)==null||e.disconnect(),p=null,c&&cancelAnimationFrame(m)}}var vi=mr,yi=hr,bi=dr,xi=gr,Si=ur,Ci=(e,t,n)=>{let r=new Map,i={platform:mi,...n},a={...i.platform,_c:r};return lr(e,t,{...i,platform:a})};function wi(e){return Ei(e)}function Ti(e){return e.assignedSlot?e.assignedSlot:e.parentNode instanceof ShadowRoot?e.parentNode.host:e.parentNode}function Ei(e){for(let t=e;t;t=Ti(t))if(t instanceof Element&&getComputedStyle(t).display===`none`)return null;for(let t=Ti(e);t;t=Ti(t)){if(!(t instanceof Element))continue;let e=getComputedStyle(t);if(e.display!==`contents`&&(e.position!==`static`||Mr(e)||t.tagName===`BODY`))return t}return null}function Di(e){return typeof e==`object`&&!!e&&`getBoundingClientRect`in e&&(`contextElement`in e?e.contextElement instanceof Element:!0)}var R=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.active=!1,this.placement=`top`,this.strategy=`absolute`,this.distance=0,this.skidding=0,this.arrow=!1,this.arrowPlacement=`anchor`,this.arrowPadding=10,this.flip=!1,this.flipFallbackPlacements=``,this.flipFallbackStrategy=`best-fit`,this.flipPadding=0,this.shift=!1,this.shiftPadding=0,this.autoSizePadding=0,this.hoverBridge=!1,this.updateHoverBridge=()=>{if(this.hoverBridge&&this.anchorEl){let e=this.anchorEl.getBoundingClientRect(),t=this.popup.getBoundingClientRect(),n=this.placement.includes(`top`)||this.placement.includes(`bottom`),r=0,i=0,a=0,o=0,s=0,c=0,l=0,u=0;n?e.top<t.top?(r=e.left,i=e.bottom,a=e.right,o=e.bottom,s=t.left,c=t.top,l=t.right,u=t.top):(r=t.left,i=t.bottom,a=t.right,o=t.bottom,s=e.left,c=e.top,l=e.right,u=e.top):e.left<t.left?(r=e.right,i=e.top,a=t.left,o=t.top,s=e.right,c=e.bottom,l=t.left,u=t.bottom):(r=t.right,i=t.top,a=e.left,o=e.top,s=t.right,c=t.bottom,l=e.left,u=e.bottom),this.style.setProperty(`--hover-bridge-top-left-x`,`${r}px`),this.style.setProperty(`--hover-bridge-top-left-y`,`${i}px`),this.style.setProperty(`--hover-bridge-top-right-x`,`${a}px`),this.style.setProperty(`--hover-bridge-top-right-y`,`${o}px`),this.style.setProperty(`--hover-bridge-bottom-left-x`,`${s}px`),this.style.setProperty(`--hover-bridge-bottom-left-y`,`${c}px`),this.style.setProperty(`--hover-bridge-bottom-right-x`,`${l}px`),this.style.setProperty(`--hover-bridge-bottom-right-y`,`${u}px`)}}}async connectedCallback(){super.connectedCallback(),await this.updateComplete,this.start()}disconnectedCallback(){super.disconnectedCallback(),this.stop()}async updated(e){super.updated(e),e.has(`active`)&&(this.active?this.start():this.stop()),e.has(`anchor`)&&this.handleAnchorChange(),this.active&&(await this.updateComplete,this.reposition())}async handleAnchorChange(){await this.stop(),this.anchor&&typeof this.anchor==`string`?this.anchorEl=this.getRootNode().getElementById(this.anchor):this.anchor instanceof Element||Di(this.anchor)?this.anchorEl=this.anchor:this.anchorEl=this.querySelector(`[slot="anchor"]`),this.anchorEl instanceof HTMLSlotElement&&(this.anchorEl=this.anchorEl.assignedElements({flatten:!0})[0]),this.anchorEl&&this.active&&this.start()}start(){!this.anchorEl||!this.active||(this.cleanup=_i(this.anchorEl,this.popup,()=>{this.reposition()}))}async stop(){return new Promise(e=>{this.cleanup?(this.cleanup(),this.cleanup=void 0,this.removeAttribute(`data-current-placement`),this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`),requestAnimationFrame(()=>e())):e()})}reposition(){if(!this.active||!this.anchorEl)return;let e=[vi({mainAxis:this.distance,crossAxis:this.skidding})];this.sync?e.push(xi({apply:({rects:e})=>{let t=this.sync===`width`||this.sync===`both`,n=this.sync===`height`||this.sync===`both`;this.popup.style.width=t?`${e.reference.width}px`:``,this.popup.style.height=n?`${e.reference.height}px`:``}})):(this.popup.style.width=``,this.popup.style.height=``),this.flip&&e.push(bi({boundary:this.flipBoundary,fallbackPlacements:this.flipFallbackPlacements,fallbackStrategy:this.flipFallbackStrategy===`best-fit`?`bestFit`:`initialPlacement`,padding:this.flipPadding})),this.shift&&e.push(yi({boundary:this.shiftBoundary,padding:this.shiftPadding})),this.autoSize?e.push(xi({boundary:this.autoSizeBoundary,padding:this.autoSizePadding,apply:({availableWidth:e,availableHeight:t})=>{this.autoSize===`vertical`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-height`,`${t}px`):this.style.removeProperty(`--auto-size-available-height`),this.autoSize===`horizontal`||this.autoSize===`both`?this.style.setProperty(`--auto-size-available-width`,`${e}px`):this.style.removeProperty(`--auto-size-available-width`)}})):(this.style.removeProperty(`--auto-size-available-width`),this.style.removeProperty(`--auto-size-available-height`)),this.arrow&&e.push(Si({element:this.arrowEl,padding:this.arrowPadding}));let t=this.strategy===`absolute`?e=>mi.getOffsetParent(e,wi):mi.getOffsetParent;Ci(this.anchorEl,this.popup,{placement:this.placement,middleware:e,strategy:this.strategy,platform:v(_({},mi),{getOffsetParent:t})}).then(({x:e,y:t,middlewareData:n,placement:r})=>{let i=this.localize.dir()===`rtl`,a={top:`bottom`,right:`left`,bottom:`top`,left:`right`}[r.split(`-`)[0]];if(this.setAttribute(`data-current-placement`,r),Object.assign(this.popup.style,{left:`${e}px`,top:`${t}px`}),this.arrow){let e=n.arrow.x,t=n.arrow.y,r=``,o=``,s=``,c=``;if(this.arrowPlacement===`start`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;r=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``,o=i?n:``,c=i?``:n}else if(this.arrowPlacement===`end`){let n=typeof e==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``;o=i?``:n,c=i?n:``,s=typeof t==`number`?`calc(${this.arrowPadding}px - var(--arrow-padding-offset))`:``}else this.arrowPlacement===`center`?(c=typeof e==`number`?`calc(50% - var(--arrow-size-diagonal))`:``,r=typeof t==`number`?`calc(50% - var(--arrow-size-diagonal))`:``):(c=typeof e==`number`?`${e}px`:``,r=typeof t==`number`?`${t}px`:``);Object.assign(this.arrowEl.style,{top:r,right:o,bottom:s,left:c,[a]:`calc(var(--arrow-size-diagonal) * -1)`})}}),requestAnimationFrame(()=>this.updateHoverBridge()),this.emit(`sl-reposition`)}render(){return S`
      <slot name="anchor" @slotchange=${this.handleAnchorChange}></slot>

      <span
        part="hover-bridge"
        class=${j({"popup-hover-bridge":!0,"popup-hover-bridge--visible":this.hoverBridge&&this.active})}
      ></span>

      <div
        part="popup"
        class=${j({popup:!0,"popup--active":this.active,"popup--fixed":this.strategy===`fixed`,"popup--has-arrow":this.arrow})}
      >
        <slot></slot>
        ${this.arrow?S`<div part="arrow" class="popup__arrow" role="presentation"></div>`:``}
      </div>
    `}};R.styles=[T,Mn],y([O(`.popup`)],R.prototype,`popup`,2),y([O(`.popup__arrow`)],R.prototype,`arrowEl`,2),y([E()],R.prototype,`anchor`,2),y([E({type:Boolean,reflect:!0})],R.prototype,`active`,2),y([E({reflect:!0})],R.prototype,`placement`,2),y([E({reflect:!0})],R.prototype,`strategy`,2),y([E({type:Number})],R.prototype,`distance`,2),y([E({type:Number})],R.prototype,`skidding`,2),y([E({type:Boolean})],R.prototype,`arrow`,2),y([E({attribute:`arrow-placement`})],R.prototype,`arrowPlacement`,2),y([E({attribute:`arrow-padding`,type:Number})],R.prototype,`arrowPadding`,2),y([E({type:Boolean})],R.prototype,`flip`,2),y([E({attribute:`flip-fallback-placements`,converter:{fromAttribute:e=>e.split(` `).map(e=>e.trim()).filter(e=>e!==``),toAttribute:e=>e.join(` `)}})],R.prototype,`flipFallbackPlacements`,2),y([E({attribute:`flip-fallback-strategy`})],R.prototype,`flipFallbackStrategy`,2),y([E({type:Object})],R.prototype,`flipBoundary`,2),y([E({attribute:`flip-padding`,type:Number})],R.prototype,`flipPadding`,2),y([E({type:Boolean})],R.prototype,`shift`,2),y([E({type:Object})],R.prototype,`shiftBoundary`,2),y([E({attribute:`shift-padding`,type:Number})],R.prototype,`shiftPadding`,2),y([E({attribute:`auto-size`})],R.prototype,`autoSize`,2),y([E()],R.prototype,`sync`,2),y([E({type:Object})],R.prototype,`autoSizeBoundary`,2),y([E({attribute:`auto-size-padding`,type:Number})],R.prototype,`autoSizePadding`,2),y([E({attribute:`hover-bridge`,type:Boolean})],R.prototype,`hoverBridge`,2);function Oi(e,t){return new Promise(n=>{function r(i){i.target===e&&(e.removeEventListener(t,r),n())}e.addEventListener(t,r)})}var ki=class extends k{constructor(){super(),this.localize=new N(this),this.content=``,this.placement=`top`,this.disabled=!1,this.distance=8,this.open=!1,this.skidding=0,this.trigger=`hover focus`,this.hoist=!1,this.handleBlur=()=>{this.hasTrigger(`focus`)&&this.hide()},this.handleClick=()=>{this.hasTrigger(`click`)&&(this.open?this.hide():this.show())},this.handleFocus=()=>{this.hasTrigger(`focus`)&&this.show()},this.handleDocumentKeyDown=e=>{e.key===`Escape`&&(e.stopPropagation(),this.hide())},this.handleMouseOver=()=>{if(this.hasTrigger(`hover`)){let e=Tn(getComputedStyle(this).getPropertyValue(`--show-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.show(),e)}},this.handleMouseOut=()=>{if(this.hasTrigger(`hover`)){let e=Tn(getComputedStyle(this).getPropertyValue(`--hide-delay`));clearTimeout(this.hoverTimeout),this.hoverTimeout=window.setTimeout(()=>this.hide(),e)}},this.addEventListener(`blur`,this.handleBlur,!0),this.addEventListener(`focus`,this.handleFocus,!0),this.addEventListener(`click`,this.handleClick),this.addEventListener(`mouseover`,this.handleMouseOver),this.addEventListener(`mouseout`,this.handleMouseOut)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}firstUpdated(){this.body.hidden=!this.open,this.open&&(this.popup.active=!0,this.popup.reposition())}hasTrigger(e){return this.trigger.split(` `).includes(e)}async handleOpenChange(){var e,t;if(this.open){if(this.disabled)return;this.emit(`sl-show`),`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide()}):document.addEventListener(`keydown`,this.handleDocumentKeyDown),await Dn(this.body),this.body.hidden=!1,this.popup.active=!0;let{keyframes:t,options:n}=F(this,`tooltip.show`,{dir:this.localize.dir()});await I(this.popup.popup,t,n),this.popup.reposition(),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),(t=this.closeWatcher)==null||t.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),await Dn(this.body);let{keyframes:e,options:n}=F(this,`tooltip.hide`,{dir:this.localize.dir()});await I(this.popup.popup,e,n),this.popup.active=!1,this.body.hidden=!0,this.emit(`sl-after-hide`)}}async handleOptionsChange(){this.hasUpdated&&(await this.updateComplete,this.popup.reposition())}handleDisabledChange(){this.disabled&&this.open&&this.hide()}async show(){if(!this.open)return this.open=!0,Oi(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Oi(this,`sl-after-hide`)}render(){return S`
      <sl-popup
        part="base"
        exportparts="
          popup:base__popup,
          arrow:base__arrow
        "
        class=${j({tooltip:!0,"tooltip--open":this.open})}
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?`fixed`:`absolute`}
        flip
        shift
        arrow
        hover-bridge
      >
        ${``}
        <slot slot="anchor" aria-describedby="tooltip"></slot>

        ${``}
        <div part="body" id="tooltip" class="tooltip__body" role="tooltip" aria-live=${this.open?`polite`:`off`}>
          <slot name="content">${this.content}</slot>
        </div>
      </sl-popup>
    `}};ki.styles=[T,jn],ki.dependencies={"sl-popup":R},y([O(`slot:not([name])`)],ki.prototype,`defaultSlot`,2),y([O(`.tooltip__body`)],ki.prototype,`body`,2),y([O(`sl-popup`)],ki.prototype,`popup`,2),y([E()],ki.prototype,`content`,2),y([E()],ki.prototype,`placement`,2),y([E({type:Boolean,reflect:!0})],ki.prototype,`disabled`,2),y([E({type:Number})],ki.prototype,`distance`,2),y([E({type:Boolean,reflect:!0})],ki.prototype,`open`,2),y([E({type:Number})],ki.prototype,`skidding`,2),y([E()],ki.prototype,`trigger`,2),y([E({type:Boolean})],ki.prototype,`hoist`,2),y([w(`open`,{waitUntilFirstUpdate:!0})],ki.prototype,`handleOpenChange`,1),y([w([`content`,`distance`,`hoist`,`placement`,`skidding`])],ki.prototype,`handleOptionsChange`,1),y([w(`disabled`)],ki.prototype,`handleDisabledChange`,1),P(`tooltip.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:150,easing:`ease`}}),P(`tooltip.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:150,easing:`ease`}}),ki.define(`sl-tooltip`);var Ai=x`
  :host {
    /*
     * These are actually used by tree item, but we define them here so they can more easily be set and all tree items
     * stay consistent.
     */
    --indent-guide-color: var(--sl-color-neutral-200);
    --indent-guide-offset: 0;
    --indent-guide-style: solid;
    --indent-guide-width: 0;
    --indent-size: var(--sl-spacing-large);

    display: block;

    /*
     * Tree item indentation uses the "em" unit to increment its width on each level, so setting the font size to zero
     * here removes the indentation for all the nodes on the first level.
     */
    font-size: 0;
  }
`;function ji(e,t,n){return(e=>Object.is(e,-0)?0:e)(e<t?t:e>n?n:e)}function Mi(e,t=!1){function n(e){let t=e.getChildrenItems({includeDisabled:!1});if(t.length){let n=t.every(e=>e.selected),r=t.every(e=>!e.selected&&!e.indeterminate);e.selected=n,e.indeterminate=!n&&!r}}function r(e){let t=e.parentElement;An.isTreeItem(t)&&(n(t),r(t))}function i(e){for(let n of e.getChildrenItems())n.selected=t?e.selected||n.selected:!n.disabled&&e.selected,i(n);t&&n(e)}i(e),r(e)}var Ni=class extends k{constructor(){super(),this.selection=`single`,this.clickTarget=null,this.localize=new N(this),this.initTreeItem=e=>{e.selectable=this.selection===`multiple`,[`expand`,`collapse`].filter(e=>!!this.querySelector(`[slot="${e}-icon"]`)).forEach(t=>{let n=e.querySelector(`[slot="${t}-icon"]`),r=this.getExpandButtonIcon(t);r&&(n===null?e.append(r):n.hasAttribute(`data-default`)&&n.replaceWith(r))})},this.handleTreeChanged=e=>{for(let t of e){let e=[...t.addedNodes].filter(An.isTreeItem),n=[...t.removedNodes].filter(An.isTreeItem);e.forEach(this.initTreeItem),this.lastFocusedItem&&n.includes(this.lastFocusedItem)&&(this.lastFocusedItem=null)}},this.handleFocusOut=e=>{let t=e.relatedTarget;(!t||!this.contains(t))&&(this.tabIndex=0)},this.handleFocusIn=e=>{let t=e.target;e.target===this&&this.focusItem(this.lastFocusedItem||this.getAllTreeItems()[0]),An.isTreeItem(t)&&!t.disabled&&(this.lastFocusedItem&&(this.lastFocusedItem.tabIndex=-1),this.lastFocusedItem=t,this.tabIndex=-1,t.tabIndex=0)},this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut),this.addEventListener(`sl-lazy-change`,this.handleSlotChange)}async connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tree`),this.setAttribute(`tabindex`,`0`),await this.updateComplete,this.mutationObserver=new MutationObserver(this.handleTreeChanged),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}getExpandButtonIcon(e){let t=(e===`expand`?this.expandedIconSlot:this.collapsedIconSlot).assignedElements({flatten:!0})[0];if(t){let n=t.cloneNode(!0);return[n,...n.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),n.setAttribute(`data-default`,``),n.slot=`${e}-icon`,n}return null}selectItem(e){let t=[...this.selectedItems];if(this.selection===`multiple`)e.selected=!e.selected,e.lazy&&(e.expanded=!0),Mi(e);else if(this.selection===`single`||e.isLeaf){let t=this.getAllTreeItems();for(let n of t)n.selected=n===e}else this.selection===`leaf`&&(e.expanded=!e.expanded);let n=this.selectedItems;(t.length!==n.length||n.some(e=>!t.includes(e)))&&Promise.all(n.map(e=>e.updateComplete)).then(()=>{this.emit(`sl-selection-change`,{detail:{selection:n}})})}getAllTreeItems(){return[...this.querySelectorAll(`sl-tree-item`)]}focusItem(e){e?.focus()}handleKeyDown(e){if(![`ArrowDown`,`ArrowUp`,`ArrowRight`,`ArrowLeft`,`Home`,`End`,`Enter`,` `].includes(e.key)||e.composedPath().some(e=>[`input`,`textarea`].includes((e?.tagName)?.toLowerCase())))return;let t=this.getFocusableItems(),n=this.localize.dir()===`ltr`,r=this.localize.dir()===`rtl`;if(t.length>0){e.preventDefault();let i=t.findIndex(e=>e.matches(`:focus`)),a=t[i],o=e=>{let n=t[ji(e,0,t.length-1)];this.focusItem(n)},s=e=>{a.expanded=e};e.key===`ArrowDown`?o(i+1):e.key===`ArrowUp`?o(i-1):n&&e.key===`ArrowRight`||r&&e.key===`ArrowLeft`?!a||a.disabled||a.expanded||a.isLeaf&&!a.lazy?o(i+1):s(!0):n&&e.key===`ArrowLeft`||r&&e.key===`ArrowRight`?!a||a.disabled||a.isLeaf||!a.expanded?o(i-1):s(!1):e.key===`Home`?o(0):e.key===`End`?o(t.length-1):(e.key===`Enter`||e.key===` `)&&(a.disabled||this.selectItem(a))}}handleClick(e){let t=e.target,n=t.closest(`sl-tree-item`),r=e.composedPath().some(e=>(e?.classList)?.contains(`tree-item__expand-button`));!n||n.disabled||t!==this.clickTarget||(r?n.expanded=!n.expanded:this.selectItem(n))}handleMouseDown(e){this.clickTarget=e.target}handleSlotChange(){this.getAllTreeItems().forEach(this.initTreeItem)}async handleSelectionChange(){let e=this.selection===`multiple`,t=this.getAllTreeItems();this.setAttribute(`aria-multiselectable`,e?`true`:`false`);for(let n of t)n.selectable=e;e&&(await this.updateComplete,[...this.querySelectorAll(`:scope > sl-tree-item`)].forEach(e=>Mi(e,!0)))}get selectedItems(){return this.getAllTreeItems().filter(e=>e.selected)}getFocusableItems(){let e=this.getAllTreeItems(),t=new Set;return e.filter(e=>{if(e.disabled)return!1;let n=e.parentElement?.closest(`[role=treeitem]`);return n&&(!n.expanded||n.loading||t.has(n))&&t.add(e),!t.has(e)})}render(){return S`
      <div
        part="base"
        class="tree"
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
        <span hidden aria-hidden="true"><slot name="expand-icon"></slot></span>
        <span hidden aria-hidden="true"><slot name="collapse-icon"></slot></span>
      </div>
    `}};Ni.styles=[T,Ai],y([O(`slot:not([name])`)],Ni.prototype,`defaultSlot`,2),y([O(`slot[name=expand-icon]`)],Ni.prototype,`expandedIconSlot`,2),y([O(`slot[name=collapse-icon]`)],Ni.prototype,`collapsedIconSlot`,2),y([E()],Ni.prototype,`selection`,2),y([w(`selection`)],Ni.prototype,`handleSelectionChange`,1),Ni.define(`sl-tree`);var Pi=x`
  :host(:not(:focus-within)) {
    position: absolute !important;
    width: 1px !important;
    height: 1px !important;
    clip: rect(0 0 0 0) !important;
    clip-path: inset(50%) !important;
    border: none !important;
    overflow: hidden !important;
    white-space: nowrap !important;
    padding: 0 !important;
  }
`,Fi=class extends k{render(){return S` <slot></slot> `}};Fi.styles=[T,Pi],Fi.define(`sl-visually-hidden`);var Ii=x`
  :host {
    --padding: 0;

    display: none;
  }

  :host([active]) {
    display: block;
  }

  .tab-panel {
    display: block;
    padding: var(--padding);
  }
`,Li=0,Ri=class extends k{constructor(){super(...arguments),this.attrId=++Li,this.componentId=`sl-tab-panel-${this.attrId}`,this.name=``,this.active=!1}connectedCallback(){super.connectedCallback(),this.id=this.id.length>0?this.id:this.componentId,this.setAttribute(`role`,`tabpanel`)}handleActiveChange(){this.setAttribute(`aria-hidden`,this.active?`false`:`true`)}render(){return S`
      <slot
        part="base"
        class=${j({"tab-panel":!0,"tab-panel--active":this.active})}
      ></slot>
    `}};Ri.styles=[T,Ii],y([E({reflect:!0})],Ri.prototype,`name`,2),y([E({type:Boolean,reflect:!0})],Ri.prototype,`active`,2),y([w(`active`)],Ri.prototype,`handleActiveChange`,1),Ri.define(`sl-tab-panel`);var zi=x`
  :host {
    display: inline-block;
  }

  .tag {
    display: flex;
    align-items: center;
    border: solid 1px;
    line-height: 1;
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
  }

  .tag__remove::part(base) {
    color: inherit;
    padding: 0;
  }

  /*
   * Variant modifiers
   */

  .tag--primary {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-200);
    color: var(--sl-color-primary-800);
  }

  .tag--primary:active > sl-icon-button {
    color: var(--sl-color-primary-600);
  }

  .tag--success {
    background-color: var(--sl-color-success-50);
    border-color: var(--sl-color-success-200);
    color: var(--sl-color-success-800);
  }

  .tag--success:active > sl-icon-button {
    color: var(--sl-color-success-600);
  }

  .tag--neutral {
    background-color: var(--sl-color-neutral-50);
    border-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-800);
  }

  .tag--neutral:active > sl-icon-button {
    color: var(--sl-color-neutral-600);
  }

  .tag--warning {
    background-color: var(--sl-color-warning-50);
    border-color: var(--sl-color-warning-200);
    color: var(--sl-color-warning-800);
  }

  .tag--warning:active > sl-icon-button {
    color: var(--sl-color-warning-600);
  }

  .tag--danger {
    background-color: var(--sl-color-danger-50);
    border-color: var(--sl-color-danger-200);
    color: var(--sl-color-danger-800);
  }

  .tag--danger:active > sl-icon-button {
    color: var(--sl-color-danger-600);
  }

  /*
   * Size modifiers
   */

  .tag--small {
    font-size: var(--sl-button-font-size-small);
    height: calc(var(--sl-input-height-small) * 0.8);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
    padding: 0 var(--sl-spacing-x-small);
  }

  .tag--medium {
    font-size: var(--sl-button-font-size-medium);
    height: calc(var(--sl-input-height-medium) * 0.8);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
    padding: 0 var(--sl-spacing-small);
  }

  .tag--large {
    font-size: var(--sl-button-font-size-large);
    height: calc(var(--sl-input-height-large) * 0.8);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
    padding: 0 var(--sl-spacing-medium);
  }

  .tag__remove {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /*
   * Pill modifier
   */

  .tag--pill {
    border-radius: var(--sl-border-radius-pill);
  }
`,Bi=x`
  :host {
    display: inline-block;
    color: var(--sl-color-neutral-600);
  }

  .icon-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
    -webkit-appearance: none;
  }

  .icon-button:hover:not(.icon-button--disabled),
  .icon-button:focus-visible:not(.icon-button--disabled) {
    color: var(--sl-color-primary-600);
  }

  .icon-button:active:not(.icon-button--disabled) {
    color: var(--sl-color-primary-700);
  }

  .icon-button:focus {
    outline: none;
  }

  .icon-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .icon-button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .icon-button__icon {
    pointer-events: none;
  }
`,Vi=Symbol.for(``),Hi=e=>{if(e?.r===Vi)return e?._$litStatic$},Ui=(e,...t)=>({_$litStatic$:t.reduce((t,n,r)=>t+(e=>{if(e._$litStatic$!==void 0)return e._$litStatic$;throw Error(`Value passed to 'literal' function must be a 'literal' result: ${e}. Use 'unsafeStatic' to pass non-literal values, but\n            take care to ensure page security.`)})(n)+e[r+1],e[0]),r:Vi}),Wi=new Map,Gi=(e=>(t,...n)=>{let r=n.length,i,a,o=[],s=[],c,l=0,u=!1;for(;l<r;){for(c=t[l];l<r&&(a=n[l],i=Hi(a))!==void 0;)c+=i+t[++l],u=!0;l!==r&&s.push(a),o.push(c),l++}if(l===r&&o.push(t[r]),u){let e=o.join(`$$lit$$`);(t=Wi.get(e))===void 0&&(o.raw=o,Wi.set(e,t=o)),n=s}return e(t,...n)})(S),Ki=class extends k{constructor(){super(...arguments),this.hasFocus=!1,this.label=``,this.disabled=!1}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleClick(e){this.disabled&&(e.preventDefault(),e.stopPropagation())}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}render(){let e=!!this.href,t=e?Ui`a`:Ui`button`;return Gi`
      <${t}
        part="base"
        class=${j({"icon-button":!0,"icon-button--disabled":!e&&this.disabled,"icon-button--focused":this.hasFocus})}
        ?disabled=${M(e?void 0:this.disabled)}
        type=${M(e?void 0:`button`)}
        href=${M(e?this.href:void 0)}
        target=${M(e?this.target:void 0)}
        download=${M(e?this.download:void 0)}
        rel=${M(e&&this.target?`noreferrer noopener`:void 0)}
        role=${M(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-label="${this.label}"
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @click=${this.handleClick}
      >
        <sl-icon
          class="icon-button__icon"
          name=${M(this.name)}
          library=${M(this.library)}
          src=${M(this.src)}
          aria-hidden="true"
        ></sl-icon>
      </${t}>
    `}};Ki.styles=[T,Bi],Ki.dependencies={"sl-icon":A},y([O(`.icon-button`)],Ki.prototype,`button`,2),y([D()],Ki.prototype,`hasFocus`,2),y([E()],Ki.prototype,`name`,2),y([E()],Ki.prototype,`library`,2),y([E()],Ki.prototype,`src`,2),y([E()],Ki.prototype,`href`,2),y([E()],Ki.prototype,`target`,2),y([E()],Ki.prototype,`download`,2),y([E()],Ki.prototype,`label`,2),y([E({type:Boolean,reflect:!0})],Ki.prototype,`disabled`,2);var qi=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.variant=`neutral`,this.size=`medium`,this.pill=!1,this.removable=!1}handleRemoveClick(){this.emit(`sl-remove`)}render(){return S`
      <span
        part="base"
        class=${j({tag:!0,"tag--primary":this.variant===`primary`,"tag--success":this.variant===`success`,"tag--neutral":this.variant===`neutral`,"tag--warning":this.variant===`warning`,"tag--danger":this.variant===`danger`,"tag--text":this.variant===`text`,"tag--small":this.size===`small`,"tag--medium":this.size===`medium`,"tag--large":this.size===`large`,"tag--pill":this.pill,"tag--removable":this.removable})}
      >
        <slot part="content" class="tag__content"></slot>

        ${this.removable?S`
              <sl-icon-button
                part="remove-button"
                exportparts="base:remove-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`remove`)}
                class="tag__remove"
                @click=${this.handleRemoveClick}
                tabindex="-1"
              ></sl-icon-button>
            `:``}
      </span>
    `}};qi.styles=[T,zi],qi.dependencies={"sl-icon-button":Ki},y([E({reflect:!0})],qi.prototype,`variant`,2),y([E({reflect:!0})],qi.prototype,`size`,2),y([E({type:Boolean,reflect:!0})],qi.prototype,`pill`,2),y([E({type:Boolean})],qi.prototype,`removable`,2),qi.define(`sl-tag`);var Ji=x`
  :host {
    display: block;
  }

  .textarea {
    display: grid;
    align-items: center;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
    cursor: text;
  }

  /* Standard textareas */
  .textarea--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .textarea--standard:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }
  .textarea--standard:hover:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-hover);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    color: var(--sl-input-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .textarea--standard.textarea--focused:not(.textarea--disabled) .textarea__control {
    color: var(--sl-input-color-focus);
  }

  .textarea--standard.textarea--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control,
  .textarea__size-adjuster {
    grid-area: 1 / 1 / 2 / 2;
  }

  .textarea__size-adjuster {
    visibility: hidden;
    pointer-events: none;
    opacity: 0;
  }

  .textarea--standard.textarea--disabled .textarea__control {
    color: var(--sl-input-color-disabled);
  }

  .textarea--standard.textarea--disabled .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled textareas */
  .textarea--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .textarea--filled:hover:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .textarea--filled.textarea--focused:not(.textarea--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .textarea--filled.textarea--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .textarea__control {
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: 1.4;
    color: var(--sl-input-color);
    border: none;
    background: none;
    box-shadow: none;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .textarea__control::-webkit-search-decoration,
  .textarea__control::-webkit-search-cancel-button,
  .textarea__control::-webkit-search-results-button,
  .textarea__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .textarea__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .textarea__control:focus {
    outline: none;
  }

  /*
   * Size modifiers
   */

  .textarea--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
  }

  .textarea--small .textarea__control {
    padding: 0.5em var(--sl-input-spacing-small);
  }

  .textarea--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .textarea--medium .textarea__control {
    padding: 0.5em var(--sl-input-spacing-medium);
  }

  .textarea--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
  }

  .textarea--large .textarea__control {
    padding: 0.5em var(--sl-input-spacing-large);
  }

  /*
   * Resize types
   */

  .textarea--resize-none .textarea__control {
    resize: none;
  }

  .textarea--resize-vertical .textarea__control {
    resize: vertical;
  }

  .textarea--resize-auto .textarea__control {
    height: auto;
    resize: none;
    overflow-y: hidden;
  }
`,z=class extends k{constructor(){super(...arguments),this.formControlController=new ue(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new Ot(this,`help-text`,`label`),this.hasFocus=!1,this.title=``,this.name=``,this.value=``,this.size=`medium`,this.filled=!1,this.label=``,this.helpText=``,this.placeholder=``,this.rows=4,this.resize=`vertical`,this.disabled=!1,this.readonly=!1,this.form=``,this.required=!1,this.spellcheck=!0,this.defaultValue=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.setTextareaHeight()),this.updateComplete.then(()=>{this.setTextareaHeight(),this.resizeObserver.observe(this.input)})}firstUpdated(){this.formControlController.updateValidity()}disconnectedCallback(){var e;super.disconnectedCallback(),this.input&&((e=this.resizeObserver)==null||e.unobserve(this.input))}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleChange(){this.value=this.input.value,this.setTextareaHeight(),this.emit(`sl-change`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleInput(){this.value=this.input.value,this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}setTextareaHeight(){this.resize===`auto`?(this.sizeAdjuster.style.height=`${this.input.clientHeight}px`,this.input.style.height=`auto`,this.input.style.height=`${this.input.scrollHeight}px`):this.input.style.height=``}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleRowsChange(){this.setTextareaHeight()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity(),this.setTextareaHeight()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}scrollPosition(e){if(e){typeof e.top==`number`&&(this.input.scrollTop=e.top),typeof e.left==`number`&&(this.input.scrollLeft=e.left);return}return{top:this.input.scrollTop,left:this.input.scrollTop}}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value,this.setTextareaHeight())}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return S`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({textarea:!0,"textarea--small":this.size===`small`,"textarea--medium":this.size===`medium`,"textarea--large":this.size===`large`,"textarea--standard":!this.filled,"textarea--filled":this.filled,"textarea--disabled":this.disabled,"textarea--focused":this.hasFocus,"textarea--empty":!this.value,"textarea--resize-none":this.resize===`none`,"textarea--resize-vertical":this.resize===`vertical`,"textarea--resize-auto":this.resize===`auto`})}
          >
            <textarea
              part="textarea"
              id="input"
              class="textarea__control"
              title=${this.title}
              name=${M(this.name)}
              .value=${on(this.value)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${M(this.placeholder)}
              rows=${M(this.rows)}
              minlength=${M(this.minlength)}
              maxlength=${M(this.maxlength)}
              autocapitalize=${M(this.autocapitalize)}
              autocorrect=${M(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${M(this.spellcheck)}
              enterkeyhint=${M(this.enterkeyhint)}
              inputmode=${M(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            ></textarea>
            <!-- This "adjuster" exists to prevent layout shifting. https://github.com/shoelace-style/shoelace/issues/2180 -->
            <div part="textarea-adjuster" class="textarea__size-adjuster" ?hidden=${this.resize!==`auto`}></div>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};z.styles=[T,Dt,Ji],y([O(`.textarea__control`)],z.prototype,`input`,2),y([O(`.textarea__size-adjuster`)],z.prototype,`sizeAdjuster`,2),y([D()],z.prototype,`hasFocus`,2),y([E()],z.prototype,`title`,2),y([E()],z.prototype,`name`,2),y([E()],z.prototype,`value`,2),y([E({reflect:!0})],z.prototype,`size`,2),y([E({type:Boolean,reflect:!0})],z.prototype,`filled`,2),y([E()],z.prototype,`label`,2),y([E({attribute:`help-text`})],z.prototype,`helpText`,2),y([E()],z.prototype,`placeholder`,2),y([E({type:Number})],z.prototype,`rows`,2),y([E()],z.prototype,`resize`,2),y([E({type:Boolean,reflect:!0})],z.prototype,`disabled`,2),y([E({type:Boolean,reflect:!0})],z.prototype,`readonly`,2),y([E({reflect:!0})],z.prototype,`form`,2),y([E({type:Boolean,reflect:!0})],z.prototype,`required`,2),y([E({type:Number})],z.prototype,`minlength`,2),y([E({type:Number})],z.prototype,`maxlength`,2),y([E()],z.prototype,`autocapitalize`,2),y([E()],z.prototype,`autocorrect`,2),y([E()],z.prototype,`autocomplete`,2),y([E({type:Boolean})],z.prototype,`autofocus`,2),y([E()],z.prototype,`enterkeyhint`,2),y([E({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],z.prototype,`spellcheck`,2),y([E()],z.prototype,`inputmode`,2),y([Et()],z.prototype,`defaultValue`,2),y([w(`disabled`,{waitUntilFirstUpdate:!0})],z.prototype,`handleDisabledChange`,1),y([w(`rows`,{waitUntilFirstUpdate:!0})],z.prototype,`handleRowsChange`,1),y([w(`value`,{waitUntilFirstUpdate:!0})],z.prototype,`handleValueChange`,1),z.define(`sl-textarea`);var Yi=x`
  :host {
    display: inline-block;
  }

  .tab {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    border-radius: var(--sl-border-radius-medium);
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-medium) var(--sl-spacing-large);
    white-space: nowrap;
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
    transition:
      var(--transition-speed) box-shadow,
      var(--transition-speed) color;
  }

  .tab:hover:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  :host(:focus) {
    outline: transparent;
  }

  :host(:focus-visible) {
    color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: calc(-1 * var(--sl-focus-ring-width) - var(--sl-focus-ring-offset));
  }

  .tab.tab--active:not(.tab--disabled) {
    color: var(--sl-color-primary-600);
  }

  .tab.tab--closable {
    padding-inline-end: var(--sl-spacing-small);
  }

  .tab.tab--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .tab__close-button {
    font-size: var(--sl-font-size-small);
    margin-inline-start: var(--sl-spacing-small);
  }

  .tab__close-button::part(base) {
    padding: var(--sl-spacing-3x-small);
  }

  @media (forced-colors: active) {
    .tab.tab--active:not(.tab--disabled) {
      outline: solid 1px transparent;
      outline-offset: -3px;
    }
  }
`,Xi=0,Zi=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.attrId=++Xi,this.componentId=`sl-tab-${this.attrId}`,this.panel=``,this.active=!1,this.closable=!1,this.disabled=!1,this.tabIndex=0}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`tab`)}handleCloseClick(e){e.stopPropagation(),this.emit(`sl-close`)}handleActiveChange(){this.setAttribute(`aria-selected`,this.active?`true`:`false`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`),this.disabled&&!this.active?this.tabIndex=-1:this.tabIndex=0}render(){return this.id=this.id.length>0?this.id:this.componentId,S`
      <div
        part="base"
        class=${j({tab:!0,"tab--active":this.active,"tab--closable":this.closable,"tab--disabled":this.disabled})}
      >
        <slot></slot>
        ${this.closable?S`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                class="tab__close-button"
                @click=${this.handleCloseClick}
                tabindex="-1"
              ></sl-icon-button>
            `:``}
      </div>
    `}};Zi.styles=[T,Yi],Zi.dependencies={"sl-icon-button":Ki},y([O(`.tab`)],Zi.prototype,`tab`,2),y([E({reflect:!0})],Zi.prototype,`panel`,2),y([E({type:Boolean,reflect:!0})],Zi.prototype,`active`,2),y([E({type:Boolean,reflect:!0})],Zi.prototype,`closable`,2),y([E({type:Boolean,reflect:!0})],Zi.prototype,`disabled`,2),y([E({type:Number,reflect:!0})],Zi.prototype,`tabIndex`,2),y([w(`active`)],Zi.prototype,`handleActiveChange`,1),y([w(`disabled`)],Zi.prototype,`handleDisabledChange`,1),Zi.define(`sl-tab`);var Qi=x`
  :host {
    --indicator-color: var(--sl-color-primary-600);
    --track-color: var(--sl-color-neutral-200);
    --track-width: 2px;

    display: block;
  }

  .tab-group {
    display: flex;
    border-radius: 0;
  }

  .tab-group__tabs {
    display: flex;
    position: relative;
  }

  .tab-group__indicator {
    position: absolute;
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) width ease;
  }

  .tab-group--has-scroll-controls .tab-group__nav-container {
    position: relative;
    padding: 0 var(--sl-spacing-x-large);
  }

  .tab-group--has-scroll-controls .tab-group__scroll-button--start--hidden,
  .tab-group--has-scroll-controls .tab-group__scroll-button--end--hidden {
    visibility: hidden;
  }

  .tab-group__body {
    display: block;
    overflow: auto;
  }

  .tab-group__scroll-button {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    width: var(--sl-spacing-x-large);
  }

  .tab-group__scroll-button--start {
    left: 0;
  }

  .tab-group__scroll-button--end {
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--start {
    left: auto;
    right: 0;
  }

  .tab-group--rtl .tab-group__scroll-button--end {
    left: 0;
    right: auto;
  }

  /*
   * Top
   */

  .tab-group--top {
    flex-direction: column;
  }

  .tab-group--top .tab-group__nav-container {
    order: 1;
  }

  .tab-group--top .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--top .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--top .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-bottom: solid var(--track-width) var(--track-color);
  }

  .tab-group--top .tab-group__indicator {
    bottom: calc(-1 * var(--track-width));
    border-bottom: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--top .tab-group__body {
    order: 2;
  }

  .tab-group--top ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Bottom
   */

  .tab-group--bottom {
    flex-direction: column;
  }

  .tab-group--bottom .tab-group__nav-container {
    order: 2;
  }

  .tab-group--bottom .tab-group__nav {
    display: flex;
    overflow-x: auto;

    /* Hide scrollbar in Firefox */
    scrollbar-width: none;
  }

  /* Hide scrollbar in Chrome/Safari */
  .tab-group--bottom .tab-group__nav::-webkit-scrollbar {
    width: 0;
    height: 0;
  }

  .tab-group--bottom .tab-group__tabs {
    flex: 1 1 auto;
    position: relative;
    flex-direction: row;
    border-top: solid var(--track-width) var(--track-color);
  }

  .tab-group--bottom .tab-group__indicator {
    top: calc(-1 * var(--track-width));
    border-top: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--bottom .tab-group__body {
    order: 1;
  }

  .tab-group--bottom ::slotted(sl-tab-panel) {
    --padding: var(--sl-spacing-medium) 0;
  }

  /*
   * Start
   */

  .tab-group--start {
    flex-direction: row;
  }

  .tab-group--start .tab-group__nav-container {
    order: 1;
  }

  .tab-group--start .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-inline-end: solid var(--track-width) var(--track-color);
  }

  .tab-group--start .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    border-right: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--start.tab-group--rtl .tab-group__indicator {
    right: auto;
    left: calc(-1 * var(--track-width));
  }

  .tab-group--start .tab-group__body {
    flex: 1 1 auto;
    order: 2;
  }

  .tab-group--start ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }

  /*
   * End
   */

  .tab-group--end {
    flex-direction: row;
  }

  .tab-group--end .tab-group__nav-container {
    order: 2;
  }

  .tab-group--end .tab-group__tabs {
    flex: 0 0 auto;
    flex-direction: column;
    border-left: solid var(--track-width) var(--track-color);
  }

  .tab-group--end .tab-group__indicator {
    left: calc(-1 * var(--track-width));
    border-inline-start: solid var(--track-width) var(--indicator-color);
  }

  .tab-group--end.tab-group--rtl .tab-group__indicator {
    right: calc(-1 * var(--track-width));
    left: auto;
  }

  .tab-group--end .tab-group__body {
    flex: 1 1 auto;
    order: 1;
  }

  .tab-group--end ::slotted(sl-tab-panel) {
    --padding: 0 var(--sl-spacing-medium);
  }
`,$i=x`
  :host {
    display: contents;
  }
`,ea=class extends k{constructor(){super(...arguments),this.observedElements=[],this.disabled=!1}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>{this.emit(`sl-resize`,{detail:{entries:e}})}),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}handleSlotChange(){this.disabled||this.startObserver()}startObserver(){let e=this.shadowRoot.querySelector(`slot`);if(e!==null){let t=e.assignedElements({flatten:!0});this.observedElements.forEach(e=>this.resizeObserver.unobserve(e)),this.observedElements=[],t.forEach(e=>{this.resizeObserver.observe(e),this.observedElements.push(e)})}}stopObserver(){this.resizeObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}render(){return S` <slot @slotchange=${this.handleSlotChange}></slot> `}};ea.styles=[T,$i],y([E({type:Boolean,reflect:!0})],ea.prototype,`disabled`,2),y([w(`disabled`,{waitUntilFirstUpdate:!0})],ea.prototype,`handleDisabledChange`,1);function ta(e,t){return{top:Math.round(e.getBoundingClientRect().top-t.getBoundingClientRect().top),left:Math.round(e.getBoundingClientRect().left-t.getBoundingClientRect().left)}}var na=new Set;function ra(){let e=document.documentElement.clientWidth;return Math.abs(window.innerWidth-e)}function ia(){let e=Number(getComputedStyle(document.body).paddingRight.replace(/px/,``));return isNaN(e)||!e?0:e}function aa(e){if(na.add(e),!document.documentElement.classList.contains(`sl-scroll-lock`)){let e=ra()+ia(),t=getComputedStyle(document.documentElement).scrollbarGutter;(!t||t===`auto`)&&(t=`stable`),e<2&&(t=``),document.documentElement.style.setProperty(`--sl-scroll-lock-gutter`,t),document.documentElement.classList.add(`sl-scroll-lock`),document.documentElement.style.setProperty(`--sl-scroll-lock-size`,`${e}px`)}}function oa(e){na.delete(e),na.size===0&&(document.documentElement.classList.remove(`sl-scroll-lock`),document.documentElement.style.removeProperty(`--sl-scroll-lock-size`))}function sa(e,t,n=`vertical`,r=`smooth`){let i=ta(e,t),a=i.top+t.scrollTop,o=i.left+t.scrollLeft,s=t.scrollLeft,c=t.scrollLeft+t.offsetWidth,l=t.scrollTop,u=t.scrollTop+t.offsetHeight;(n===`horizontal`||n===`both`)&&(o<s?t.scrollTo({left:o,behavior:r}):o+e.clientWidth>c&&t.scrollTo({left:o-t.offsetWidth+e.clientWidth,behavior:r})),(n===`vertical`||n===`both`)&&(a<l?t.scrollTo({top:a,behavior:r}):a+e.clientHeight>u&&t.scrollTo({top:a-t.offsetHeight+e.clientHeight,behavior:r}))}var ca=class extends k{constructor(){super(...arguments),this.tabs=[],this.focusableTabs=[],this.panels=[],this.localize=new N(this),this.hasScrollControls=!1,this.shouldHideScrollStartButton=!1,this.shouldHideScrollEndButton=!1,this.placement=`top`,this.activation=`auto`,this.noScrollControls=!1,this.fixedScrollControls=!1,this.scrollOffset=1}connectedCallback(){let e=Promise.all([customElements.whenDefined(`sl-tab`),customElements.whenDefined(`sl-tab-panel`)]);super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>{this.repositionIndicator(),this.updateScrollControls()}),this.mutationObserver=new MutationObserver(e=>{let t=e.filter(({target:e})=>{if(e===this)return!0;if(e.closest(`sl-tab-group`)!==this)return!1;let t=e.tagName.toLowerCase();return t===`sl-tab`||t===`sl-tab-panel`});if(t.length!==0){if(t.some(e=>![`aria-labelledby`,`aria-controls`].includes(e.attributeName))&&setTimeout(()=>this.setAriaLabels()),t.some(e=>e.attributeName===`disabled`))this.syncTabsAndPanels();else if(t.some(e=>e.attributeName===`active`)){let e=t.filter(e=>e.attributeName===`active`&&e.target.tagName.toLowerCase()===`sl-tab`).map(e=>e.target).find(e=>e.active);e&&this.setActiveTab(e)}}}),this.updateComplete.then(()=>{this.syncTabsAndPanels(),this.mutationObserver.observe(this,{attributes:!0,attributeFilter:[`active`,`disabled`,`name`,`panel`],childList:!0,subtree:!0}),this.resizeObserver.observe(this.nav),e.then(()=>{new IntersectionObserver((e,t)=>{e[0].intersectionRatio>0&&(this.setAriaLabels(),this.setActiveTab(this.getActiveTab()??this.tabs[0],{emitEvents:!1}),t.unobserve(e[0].target))}).observe(this.tabGroup)})})}disconnectedCallback(){var e,t;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect(),this.nav&&((t=this.resizeObserver)==null||t.unobserve(this.nav))}getAllTabs(){return this.shadowRoot.querySelector(`slot[name="nav"]`).assignedElements()}getAllPanels(){return[...this.body.assignedElements()].filter(e=>e.tagName.toLowerCase()===`sl-tab-panel`)}getActiveTab(){return this.tabs.find(e=>e.active)}handleClick(e){let t=e.target.closest(`sl-tab`);t?.closest(`sl-tab-group`)===this&&t!==null&&this.setActiveTab(t,{scrollBehavior:`smooth`})}handleKeyDown(e){let t=e.target.closest(`sl-tab`);if(t?.closest(`sl-tab-group`)===this&&([`Enter`,` `].includes(e.key)&&t!==null&&(this.setActiveTab(t,{scrollBehavior:`smooth`}),e.preventDefault()),[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key))){let t=this.tabs.find(e=>e.matches(`:focus`)),n=this.localize.dir()===`rtl`,r=null;if(t?.tagName.toLowerCase()===`sl-tab`){if(e.key===`Home`)r=this.focusableTabs[0];else if(e.key===`End`)r=this.focusableTabs[this.focusableTabs.length-1];else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowRight`:`ArrowLeft`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowUp`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`backward`)}else if([`top`,`bottom`].includes(this.placement)&&e.key===(n?`ArrowLeft`:`ArrowRight`)||[`start`,`end`].includes(this.placement)&&e.key===`ArrowDown`){let e=this.tabs.findIndex(e=>e===t);r=this.findNextFocusableTab(e,`forward`)}if(!r)return;r.tabIndex=0,r.focus({preventScroll:!0}),this.activation===`auto`?this.setActiveTab(r,{scrollBehavior:`smooth`}):this.tabs.forEach(e=>{e.tabIndex=e===r?0:-1}),[`top`,`bottom`].includes(this.placement)&&sa(r,this.nav,`horizontal`),e.preventDefault()}}}handleScrollToStart(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft+this.nav.clientWidth:this.nav.scrollLeft-this.nav.clientWidth,behavior:`smooth`})}handleScrollToEnd(){this.nav.scroll({left:this.localize.dir()===`rtl`?this.nav.scrollLeft-this.nav.clientWidth:this.nav.scrollLeft+this.nav.clientWidth,behavior:`smooth`})}setActiveTab(e,t){if(t=_({emitEvents:!0,scrollBehavior:`auto`},t),e!==this.activeTab&&!e.disabled){let n=this.activeTab;this.activeTab=e,this.tabs.forEach(e=>{e.active=e===this.activeTab,e.tabIndex=e===this.activeTab?0:-1}),this.panels.forEach(e=>e.active=e.name===this.activeTab?.panel),this.syncIndicator(),[`top`,`bottom`].includes(this.placement)&&sa(this.activeTab,this.nav,`horizontal`,t.scrollBehavior),t.emitEvents&&(n&&this.emit(`sl-tab-hide`,{detail:{name:n.panel}}),this.emit(`sl-tab-show`,{detail:{name:this.activeTab.panel}}))}}setAriaLabels(){this.tabs.forEach(e=>{let t=this.panels.find(t=>t.name===e.panel);t&&(e.setAttribute(`aria-controls`,t.getAttribute(`id`)),t.setAttribute(`aria-labelledby`,e.getAttribute(`id`)))})}repositionIndicator(){let e=this.getActiveTab();if(!e)return;let t=e.clientWidth,n=e.clientHeight,r=this.localize.dir()===`rtl`,i=this.getAllTabs(),a=i.slice(0,i.indexOf(e)).reduce((e,t)=>({left:e.left+t.clientWidth,top:e.top+t.clientHeight}),{left:0,top:0});switch(this.placement){case`top`:case`bottom`:this.indicator.style.width=`${t}px`,this.indicator.style.height=`auto`,this.indicator.style.translate=r?`${-1*a.left}px`:`${a.left}px`;break;case`start`:case`end`:this.indicator.style.width=`auto`,this.indicator.style.height=`${n}px`,this.indicator.style.translate=`0 ${a.top}px`;break}}syncTabsAndPanels(){this.tabs=this.getAllTabs(),this.focusableTabs=this.tabs.filter(e=>!e.disabled),this.panels=this.getAllPanels(),this.syncIndicator(),this.updateComplete.then(()=>this.updateScrollControls())}findNextFocusableTab(e,t){let n=null,r=t===`forward`?1:-1,i=e+r;for(;e<this.tabs.length;){if(n=this.tabs[i]||null,n===null){n=t===`forward`?this.focusableTabs[0]:this.focusableTabs[this.focusableTabs.length-1];break}if(!n.disabled)break;i+=r}return n}updateScrollButtons(){this.hasScrollControls&&!this.fixedScrollControls&&(this.shouldHideScrollStartButton=this.scrollFromStart()<=this.scrollOffset,this.shouldHideScrollEndButton=this.isScrolledToEnd())}isScrolledToEnd(){return this.scrollFromStart()+this.nav.clientWidth>=this.nav.scrollWidth-this.scrollOffset}scrollFromStart(){return this.localize.dir()===`rtl`?-this.nav.scrollLeft:this.nav.scrollLeft}updateScrollControls(){this.noScrollControls?this.hasScrollControls=!1:this.hasScrollControls=[`top`,`bottom`].includes(this.placement)&&this.nav.scrollWidth>this.nav.clientWidth+1,this.updateScrollButtons()}syncIndicator(){this.getActiveTab()?(this.indicator.style.display=`block`,this.repositionIndicator()):this.indicator.style.display=`none`}show(e){let t=this.tabs.find(t=>t.panel===e);t&&this.setActiveTab(t,{scrollBehavior:`smooth`})}render(){let e=this.localize.dir()===`rtl`;return S`
      <div
        part="base"
        class=${j({"tab-group":!0,"tab-group--top":this.placement===`top`,"tab-group--bottom":this.placement===`bottom`,"tab-group--start":this.placement===`start`,"tab-group--end":this.placement===`end`,"tab-group--rtl":this.localize.dir()===`rtl`,"tab-group--has-scroll-controls":this.hasScrollControls})}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
      >
        <div class="tab-group__nav-container" part="nav">
          ${this.hasScrollControls?S`
                <sl-icon-button
                  part="scroll-button scroll-button--start"
                  exportparts="base:scroll-button__base"
                  class=${j({"tab-group__scroll-button":!0,"tab-group__scroll-button--start":!0,"tab-group__scroll-button--start--hidden":this.shouldHideScrollStartButton})}
                  name=${e?`chevron-right`:`chevron-left`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToStart`)}
                  @click=${this.handleScrollToStart}
                ></sl-icon-button>
              `:``}

          <div class="tab-group__nav" @scrollend=${this.updateScrollButtons}>
            <div part="tabs" class="tab-group__tabs" role="tablist">
              <div part="active-tab-indicator" class="tab-group__indicator"></div>
              <sl-resize-observer @sl-resize=${this.syncIndicator}>
                <slot name="nav" @slotchange=${this.syncTabsAndPanels}></slot>
              </sl-resize-observer>
            </div>
          </div>

          ${this.hasScrollControls?S`
                <sl-icon-button
                  part="scroll-button scroll-button--end"
                  exportparts="base:scroll-button__base"
                  class=${j({"tab-group__scroll-button":!0,"tab-group__scroll-button--end":!0,"tab-group__scroll-button--end--hidden":this.shouldHideScrollEndButton})}
                  name=${e?`chevron-left`:`chevron-right`}
                  library="system"
                  tabindex="-1"
                  aria-hidden="true"
                  label=${this.localize.term(`scrollToEnd`)}
                  @click=${this.handleScrollToEnd}
                ></sl-icon-button>
              `:``}
        </div>

        <slot part="body" class="tab-group__body" @slotchange=${this.syncTabsAndPanels}></slot>
      </div>
    `}};ca.styles=[T,Qi],ca.dependencies={"sl-icon-button":Ki,"sl-resize-observer":ea},y([O(`.tab-group`)],ca.prototype,`tabGroup`,2),y([O(`.tab-group__body`)],ca.prototype,`body`,2),y([O(`.tab-group__nav`)],ca.prototype,`nav`,2),y([O(`.tab-group__indicator`)],ca.prototype,`indicator`,2),y([D()],ca.prototype,`hasScrollControls`,2),y([D()],ca.prototype,`shouldHideScrollStartButton`,2),y([D()],ca.prototype,`shouldHideScrollEndButton`,2),y([E()],ca.prototype,`placement`,2),y([E()],ca.prototype,`activation`,2),y([E({attribute:`no-scroll-controls`,type:Boolean})],ca.prototype,`noScrollControls`,2),y([E({attribute:`fixed-scroll-controls`,type:Boolean})],ca.prototype,`fixedScrollControls`,2),y([Ut({passive:!0})],ca.prototype,`updateScrollButtons`,1),y([w(`noScrollControls`,{waitUntilFirstUpdate:!0})],ca.prototype,`updateScrollControls`,1),y([w(`placement`,{waitUntilFirstUpdate:!0})],ca.prototype,`syncIndicator`,1),ca.define(`sl-tab-group`);var la=x`
  :host {
    --border-radius: var(--sl-border-radius-pill);
    --color: var(--sl-color-neutral-200);
    --sheen-color: var(--sl-color-neutral-300);

    display: block;
    position: relative;
  }

  .skeleton {
    display: flex;
    width: 100%;
    height: 100%;
    min-height: 1rem;
  }

  .skeleton__indicator {
    flex: 1 1 auto;
    background: var(--color);
    border-radius: var(--border-radius);
  }

  .skeleton--sheen .skeleton__indicator {
    background: linear-gradient(270deg, var(--sheen-color), var(--color), var(--color), var(--sheen-color));
    background-size: 400% 100%;
    animation: sheen 8s ease-in-out infinite;
  }

  .skeleton--pulse .skeleton__indicator {
    animation: pulse 2s ease-in-out 0.5s infinite;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    :host {
      --color: GrayText;
    }
  }

  @keyframes sheen {
    0% {
      background-position: 200% 0;
    }
    to {
      background-position: -200% 0;
    }
  }

  @keyframes pulse {
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0.4;
    }
    100% {
      opacity: 1;
    }
  }
`,ua=class extends k{constructor(){super(...arguments),this.effect=`none`}render(){return S`
      <div
        part="base"
        class=${j({skeleton:!0,"skeleton--pulse":this.effect===`pulse`,"skeleton--sheen":this.effect===`sheen`})}
      >
        <div part="indicator" class="skeleton__indicator"></div>
      </div>
    `}};ua.styles=[T,la],y([E()],ua.prototype,`effect`,2),ua.define(`sl-skeleton`);var da=x`
  :host {
    --divider-width: 4px;
    --divider-hit-area: 12px;
    --min: 0%;
    --max: 100%;

    display: grid;
  }

  .start,
  .end {
    overflow: hidden;
  }

  .divider {
    flex: 0 0 var(--divider-width);
    display: flex;
    position: relative;
    align-items: center;
    justify-content: center;
    background-color: var(--sl-color-neutral-200);
    color: var(--sl-color-neutral-900);
    z-index: 1;
  }

  .divider:focus {
    outline: none;
  }

  :host(:not([disabled])) .divider:focus-visible {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  :host([disabled]) .divider {
    cursor: not-allowed;
  }

  /* Horizontal */
  :host(:not([vertical], [disabled])) .divider {
    cursor: col-resize;
  }

  :host(:not([vertical])) .divider::after {
    display: flex;
    content: '';
    position: absolute;
    height: 100%;
    left: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    width: var(--divider-hit-area);
  }

  /* Vertical */
  :host([vertical]) {
    flex-direction: column;
  }

  :host([vertical]:not([disabled])) .divider {
    cursor: row-resize;
  }

  :host([vertical]) .divider::after {
    content: '';
    position: absolute;
    width: 100%;
    top: calc(var(--divider-hit-area) / -2 + var(--divider-width) / 2);
    height: var(--divider-hit-area);
  }

  @media (forced-colors: active) {
    .divider {
      outline: solid 1px transparent;
    }
  }
`;function fa(e,t){function n(n){let r=e.getBoundingClientRect(),i=e.ownerDocument.defaultView,a=r.left+i.scrollX,o=r.top+i.scrollY,s=n.pageX-a,c=n.pageY-o;t?.onMove&&t.onMove(s,c)}function r(){document.removeEventListener(`pointermove`,n),document.removeEventListener(`pointerup`,r),t?.onStop&&t.onStop()}document.addEventListener(`pointermove`,n,{passive:!0}),document.addEventListener(`pointerup`,r),t?.initialEvent instanceof PointerEvent&&n(t.initialEvent)}var pa=()=>null,ma=class extends k{constructor(){super(...arguments),this.isCollapsed=!1,this.localize=new N(this),this.positionBeforeCollapsing=0,this.position=50,this.vertical=!1,this.disabled=!1,this.snapValue=``,this.snapFunction=pa,this.snapThreshold=12}toSnapFunction(e){let t=e.split(` `);return({pos:n,size:r,snapThreshold:i,isRtl:a,vertical:o})=>{let s=n,c=1/0;return t.forEach(t=>{let l;if(t.startsWith(`repeat(`)){let t=e.substring(7,e.length-1),i=t.endsWith(`%`),s=Number.parseFloat(t),c=i?s/100*r:s;l=Math.round((a&&!o?r-n:n)/c)*c}else l=t.endsWith(`%`)?Number.parseFloat(t)/100*r:Number.parseFloat(t);a&&!o&&(l=r-l);let u=Math.abs(n-l);u<=i&&u<c&&(s=l,c=u)}),s}}set snap(e){this.snapValue=e??``,e?this.snapFunction=typeof e==`string`?this.toSnapFunction(e):e:this.snapFunction=pa}get snap(){return this.snapValue}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(e=>this.handleResize(e)),this.updateComplete.then(()=>this.resizeObserver.observe(this)),this.detectSize(),this.cachedPositionInPixels=this.percentageToPixels(this.position)}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this)}detectSize(){let{width:e,height:t}=this.getBoundingClientRect();this.size=this.vertical?t:e}percentageToPixels(e){return this.size*(e/100)}pixelsToPercentage(e){return e/this.size*100}handleDrag(e){let t=this.localize.dir()===`rtl`;this.disabled||(e.cancelable&&e.preventDefault(),fa(this,{onMove:(e,n)=>{let r=this.vertical?n:e;this.primary===`end`&&(r=this.size-r),r=this.snapFunction({pos:r,size:this.size,snapThreshold:this.snapThreshold,isRtl:t,vertical:this.vertical})??r,this.position=ji(this.pixelsToPercentage(r),0,100)},initialEvent:e}))}handleKeyDown(e){if(!this.disabled&&[`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`,`Enter`].includes(e.key)){let t=this.position,n=(e.shiftKey?10:1)*(this.primary===`end`?-1:1);if(e.preventDefault(),(e.key===`ArrowLeft`&&!this.vertical||e.key===`ArrowUp`&&this.vertical)&&(t-=n),(e.key===`ArrowRight`&&!this.vertical||e.key===`ArrowDown`&&this.vertical)&&(t+=n),e.key===`Home`&&(t=this.primary===`end`?100:0),e.key===`End`&&(t=this.primary===`end`?0:100),e.key===`Enter`)if(this.isCollapsed)t=this.positionBeforeCollapsing,this.isCollapsed=!1;else{let e=this.position;t=0,requestAnimationFrame(()=>{this.isCollapsed=!0,this.positionBeforeCollapsing=e})}this.position=ji(t,0,100)}}handleResize(e){let{width:t,height:n}=e[0].contentRect;this.size=this.vertical?n:t,(isNaN(this.cachedPositionInPixels)||this.position===1/0)&&(this.cachedPositionInPixels=Number(this.getAttribute(`position-in-pixels`)),this.positionInPixels=Number(this.getAttribute(`position-in-pixels`)),this.position=this.pixelsToPercentage(this.positionInPixels)),this.primary&&(this.position=this.pixelsToPercentage(this.cachedPositionInPixels))}handlePositionChange(){this.cachedPositionInPixels=this.percentageToPixels(this.position),this.isCollapsed=!1,this.positionBeforeCollapsing=0,this.positionInPixels=this.percentageToPixels(this.position),this.emit(`sl-reposition`)}handlePositionInPixelsChange(){this.position=this.pixelsToPercentage(this.positionInPixels)}handleVerticalChange(){this.detectSize()}render(){let e=this.vertical?`gridTemplateRows`:`gridTemplateColumns`,t=this.vertical?`gridTemplateColumns`:`gridTemplateRows`,n=this.localize.dir()===`rtl`,r=`
      clamp(
        0%,
        clamp(
          var(--min),
          ${this.position}% - var(--divider-width) / 2,
          var(--max)
        ),
        calc(100% - var(--divider-width))
      )
    `,i=`auto`;return this.primary===`end`?n&&!this.vertical?this.style[e]=`${r} var(--divider-width) ${i}`:this.style[e]=`${i} var(--divider-width) ${r}`:n&&!this.vertical?this.style[e]=`${i} var(--divider-width) ${r}`:this.style[e]=`${r} var(--divider-width) ${i}`,this.style[t]=``,S`
      <slot name="start" part="panel start" class="start"></slot>

      <div
        part="divider"
        class="divider"
        tabindex=${M(this.disabled?void 0:`0`)}
        role="separator"
        aria-valuenow=${this.position}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-label=${this.localize.term(`resize`)}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleDrag}
        @touchstart=${this.handleDrag}
      >
        <slot name="divider"></slot>
      </div>

      <slot name="end" part="panel end" class="end"></slot>
    `}};ma.styles=[T,da],y([O(`.divider`)],ma.prototype,`divider`,2),y([E({type:Number,reflect:!0})],ma.prototype,`position`,2),y([E({attribute:`position-in-pixels`,type:Number})],ma.prototype,`positionInPixels`,2),y([E({type:Boolean,reflect:!0})],ma.prototype,`vertical`,2),y([E({type:Boolean,reflect:!0})],ma.prototype,`disabled`,2),y([E()],ma.prototype,`primary`,2),y([E({reflect:!0})],ma.prototype,`snap`,1),y([E({type:Number,attribute:`snap-threshold`})],ma.prototype,`snapThreshold`,2),y([w(`position`)],ma.prototype,`handlePositionChange`,1),y([w(`positionInPixels`)],ma.prototype,`handlePositionInPixelsChange`,1),y([w(`vertical`)],ma.prototype,`handleVerticalChange`,1),ma.define(`sl-split-panel`);var ha=x`
  :host {
    display: inline-block;
  }

  :host([size='small']) {
    --height: var(--sl-toggle-size-small);
    --thumb-size: calc(var(--sl-toggle-size-small) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-small);
  }

  :host([size='medium']) {
    --height: var(--sl-toggle-size-medium);
    --thumb-size: calc(var(--sl-toggle-size-medium) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-medium);
  }

  :host([size='large']) {
    --height: var(--sl-toggle-size-large);
    --thumb-size: calc(var(--sl-toggle-size-large) + 4px);
    --width: calc(var(--height) * 2);

    font-size: var(--sl-input-font-size-large);
  }

  .switch {
    position: relative;
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-input-font-family);
    font-size: inherit;
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .switch__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--width);
    height: var(--height);
    background-color: var(--sl-color-neutral-400);
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    border-radius: var(--height);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color;
  }

  .switch__control .switch__thumb {
    width: var(--thumb-size);
    height: var(--thumb-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: 50%;
    border: solid var(--sl-input-border-width) var(--sl-color-neutral-400);
    translate: calc((var(--width) - var(--height)) / -2);
    transition:
      var(--sl-transition-fast) translate ease,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) box-shadow;
  }

  .switch__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-neutral-400);
  }

  /* Focus */
  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-neutral-400);
    border-color: var(--sl-color-neutral-400);
  }

  .switch:not(.switch--checked):not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Checked */
  .switch--checked .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch--checked .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    translate: calc((var(--width) - var(--height)) / 2);
  }

  /* Checked + hover */
  .switch.switch--checked:not(.switch--disabled) .switch__control:hover {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
  }

  /* Checked + focus */
  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
  }

  .switch.switch--checked:not(.switch--disabled) .switch__input:focus-visible ~ .switch__control .switch__thumb {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .switch--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .switch__label {
    display: inline-block;
    line-height: var(--height);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }

  :host([required]) .switch__label::after {
    content: var(--sl-input-required-content);
    color: var(--sl-input-required-content-color);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  @media (forced-colors: active) {
    .switch.switch--checked:not(.switch--disabled) .switch__control:hover .switch__thumb,
    .switch--checked .switch__control .switch__thumb {
      background-color: ButtonText;
    }
  }
`,ga=class extends k{constructor(){super(...arguments),this.formControlController=new ue(this,{value:e=>e.checked?e.value||`on`:void 0,defaultValue:e=>e.defaultChecked,setValue:(e,t)=>e.checked=t}),this.hasSlotController=new Ot(this,`help-text`),this.hasFocus=!1,this.title=``,this.name=``,this.size=`medium`,this.disabled=!1,this.checked=!1,this.defaultChecked=!1,this.form=``,this.required=!1,this.helpText=``}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleInput(){this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleClick(){this.checked=!this.checked,this.emit(`sl-change`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleKeyDown(e){e.key===`ArrowLeft`&&(e.preventDefault(),this.checked=!1,this.emit(`sl-change`),this.emit(`sl-input`)),e.key===`ArrowRight`&&(e.preventDefault(),this.checked=!0,this.emit(`sl-change`),this.emit(`sl-input`))}handleCheckedChange(){this.input.checked=this.checked,this.formControlController.updateValidity()}handleDisabledChange(){this.formControlController.setValidity(!0)}click(){this.input.click()}focus(e){this.input.focus(e)}blur(){this.input.blur()}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`help-text`),t=this.helpText?!0:!!e;return S`
      <div
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-help-text":t})}
      >
        <label
          part="base"
          class=${j({switch:!0,"switch--checked":this.checked,"switch--disabled":this.disabled,"switch--focused":this.hasFocus,"switch--small":this.size===`small`,"switch--medium":this.size===`medium`,"switch--large":this.size===`large`})}
        >
          <input
            class="switch__input"
            type="checkbox"
            title=${this.title}
            name=${this.name}
            value=${M(this.value)}
            .checked=${on(this.checked)}
            .disabled=${this.disabled}
            .required=${this.required}
            role="switch"
            aria-checked=${this.checked?`true`:`false`}
            aria-describedby="help-text"
            @click=${this.handleClick}
            @input=${this.handleInput}
            @invalid=${this.handleInvalid}
            @blur=${this.handleBlur}
            @focus=${this.handleFocus}
            @keydown=${this.handleKeyDown}
          />

          <span part="control" class="switch__control">
            <span part="thumb" class="switch__thumb"></span>
          </span>

          <div part="label" class="switch__label">
            <slot></slot>
          </div>
        </label>

        <div
          aria-hidden=${t?`false`:`true`}
          class="form-control__help-text"
          id="help-text"
          part="form-control-help-text"
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};ga.styles=[T,Dt,ha],y([O(`input[type="checkbox"]`)],ga.prototype,`input`,2),y([D()],ga.prototype,`hasFocus`,2),y([E()],ga.prototype,`title`,2),y([E()],ga.prototype,`name`,2),y([E()],ga.prototype,`value`,2),y([E({reflect:!0})],ga.prototype,`size`,2),y([E({type:Boolean,reflect:!0})],ga.prototype,`disabled`,2),y([E({type:Boolean,reflect:!0})],ga.prototype,`checked`,2),y([Et(`checked`)],ga.prototype,`defaultChecked`,2),y([E({reflect:!0})],ga.prototype,`form`,2),y([E({type:Boolean,reflect:!0})],ga.prototype,`required`,2),y([E({attribute:`help-text`})],ga.prototype,`helpText`,2),y([w(`checked`,{waitUntilFirstUpdate:!0})],ga.prototype,`handleCheckedChange`,1),y([w(`disabled`,{waitUntilFirstUpdate:!0})],ga.prototype,`handleDisabledChange`,1),ga.define(`sl-switch`),ea.define(`sl-resize-observer`);var _a=x`
  :host {
    display: block;
  }

  /** The popup */
  .select {
    flex: 1 1 auto;
    display: inline-flex;
    width: 100%;
    position: relative;
    vertical-align: middle;
  }

  .select::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .select[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .select[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  /* Combobox */
  .select__combobox {
    flex: 1;
    display: flex;
    width: 100%;
    min-width: 0;
    position: relative;
    align-items: center;
    justify-content: start;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: pointer;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  .select__display-input {
    position: relative;
    width: 100%;
    font: inherit;
    border: none;
    background: none;
    color: var(--sl-input-color);
    cursor: inherit;
    overflow: hidden;
    padding: 0;
    margin: 0;
    -webkit-appearance: none;
  }

  .select__display-input::placeholder {
    color: var(--sl-input-placeholder-color);
  }

  .select:not(.select--disabled):hover .select__display-input {
    color: var(--sl-input-color-hover);
  }

  .select__display-input:focus {
    outline: none;
  }

  /* Visually hide the display input when multiple is enabled */
  .select--multiple:not(.select--placeholder-visible) .select__display-input {
    position: absolute;
    z-index: -1;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  .select__value-input {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    padding: 0;
    margin: 0;
    opacity: 0;
    z-index: -1;
  }

  .select__tags {
    display: flex;
    flex: 1;
    align-items: center;
    flex-wrap: wrap;
    margin-inline-start: var(--sl-spacing-2x-small);
  }

  .select__tags::slotted(sl-tag) {
    cursor: pointer !important;
  }

  .select--disabled .select__tags,
  .select--disabled .select__tags::slotted(sl-tag) {
    cursor: not-allowed !important;
  }

  /* Standard selects */
  .select--standard .select__combobox {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .select--standard.select--disabled .select__combobox {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    color: var(--sl-input-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
    outline: none;
  }

  .select--standard:not(.select--disabled).select--open .select__combobox,
  .select--standard:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  /* Filled selects */
  .select--filled .select__combobox {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .select--filled:hover:not(.select--disabled) .select__combobox {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .select--filled.select--disabled .select__combobox {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .select--filled:not(.select--disabled).select--open .select__combobox,
  .select--filled:not(.select--disabled).select--focused .select__combobox {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
  }

  /* Sizes */
  .select--small .select__combobox {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    min-height: var(--sl-input-height-small);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-small);
  }

  .select--small .select__clear {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .select--small.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-block: 2px;
    padding-inline-start: 0;
  }

  .select--small .select__tags {
    gap: 2px;
  }

  .select--medium .select__combobox {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    min-height: var(--sl-input-height-medium);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-medium);
  }

  .select--medium .select__clear {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .select--medium.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 3px;
  }

  .select--medium .select__tags {
    gap: 3px;
  }

  .select--large .select__combobox {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    min-height: var(--sl-input-height-large);
    padding-block: 0;
    padding-inline: var(--sl-input-spacing-large);
  }

  .select--large .select__clear {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large .select__prefix::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__prefix::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .select--large.select--multiple:not(.select--placeholder-visible) .select__combobox {
    padding-inline-start: 0;
    padding-block: 4px;
  }

  .select--large .select__tags {
    gap: 4px;
  }

  /* Pills */
  .select--pill.select--small .select__combobox {
    border-radius: var(--sl-input-height-small);
  }

  .select--pill.select--medium .select__combobox {
    border-radius: var(--sl-input-height-medium);
  }

  .select--pill.select--large .select__combobox {
    border-radius: var(--sl-input-height-large);
  }

  /* Prefix and Suffix */
  .select__prefix,
  .select__suffix {
    flex: 0;
    display: inline-flex;
    align-items: center;
    color: var(--sl-input-placeholder-color);
  }

  .select__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-small);
  }

  /* Clear button */
  .select__clear {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .select__clear:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .select__clear:focus {
    outline: none;
  }

  /* Expand icon */
  .select__expand-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
    rotate: 0;
    margin-inline-start: var(--sl-spacing-small);
  }

  .select--open .select__expand-icon {
    rotate: -180deg;
  }

  /* Listbox */
  .select__listbox {
    display: block;
    position: relative;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding-block: var(--sl-spacing-x-small);
    padding-inline: 0;
    overflow: auto;
    overscroll-behavior: none;

    /* Make sure it adheres to the popup's auto size */
    max-width: var(--auto-size-available-width);
    max-height: var(--auto-size-available-height);
  }

  .select__listbox ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }

  .select__listbox ::slotted(small) {
    display: block;
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-500);
    padding-block: var(--sl-spacing-2x-small);
    padding-inline: var(--sl-spacing-x-large);
  }
`,va=class extends an{constructor(e){if(super(e),this.it=C,e.type!==nn.CHILD)throw Error(this.constructor.directiveName+`() can only be used in child bindings`)}render(e){if(e===C||e==null)return this._t=void 0,this.it=e;if(e===it)return e;if(typeof e!=`string`)throw Error(this.constructor.directiveName+`() called with a non-string value`);if(e===this.it)return this._t;this.it=e;let t=[e];return t.raw=t,this._t={_$litType$:this.constructor.resultType,strings:t,values:[]}}};va.directiveName=`unsafeHTML`,va.resultType=1;var ya=rn(va),B=class extends k{constructor(){super(...arguments),this.formControlController=new ue(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new Ot(this,`help-text`,`label`),this.localize=new N(this),this.typeToSelectString=``,this.hasFocus=!1,this.displayLabel=``,this.selectedOptions=[],this.valueHasChanged=!1,this.name=``,this._value=``,this.defaultValue=``,this.size=`medium`,this.placeholder=``,this.multiple=!1,this.maxOptionsVisible=3,this.disabled=!1,this.clearable=!1,this.open=!1,this.hoist=!1,this.filled=!1,this.pill=!1,this.label=``,this.placement=`bottom`,this.helpText=``,this.form=``,this.required=!1,this.getTag=e=>S`
      <sl-tag
        part="tag"
        exportparts="
              base:tag__base,
              content:tag__content,
              remove-button:tag__remove-button,
              remove-button__base:tag__remove-button__base
            "
        ?pill=${this.pill}
        size=${this.size}
        removable
        @sl-remove=${t=>this.handleTagRemove(t,e)}
      >
        ${e.getTextLabel()}
      </sl-tag>
    `,this.handleDocumentFocusIn=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()},this.handleDocumentKeyDown=e=>{let t=e.target,n=t.closest(`.select__clear`)!==null,r=t.closest(`sl-icon-button`)!==null;if(!(n||r)){if(e.key===`Escape`&&this.open&&!this.closeWatcher&&(e.preventDefault(),e.stopPropagation(),this.hide(),this.displayInput.focus({preventScroll:!0})),e.key===`Enter`||e.key===` `&&this.typeToSelectString===``){if(e.preventDefault(),e.stopImmediatePropagation(),!this.open){this.show();return}this.currentOption&&!this.currentOption.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(this.currentOption):this.setSelectedOptions(this.currentOption),this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})));return}if([`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=this.getAllOptions(),n=t.indexOf(this.currentOption),r=Math.max(0,n);if(e.preventDefault(),!this.open&&(this.show(),this.currentOption))return;e.key===`ArrowDown`?(r=n+1,r>t.length-1&&(r=0)):e.key===`ArrowUp`?(r=n-1,r<0&&(r=t.length-1)):e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),this.setCurrentOption(t[r])}if(e.key&&e.key.length===1||e.key===`Backspace`){let t=this.getAllOptions();if(e.metaKey||e.ctrlKey||e.altKey)return;if(!this.open){if(e.key===`Backspace`)return;this.show()}e.stopPropagation(),e.preventDefault(),clearTimeout(this.typeToSelectTimeout),this.typeToSelectTimeout=window.setTimeout(()=>this.typeToSelectString=``,1e3),e.key===`Backspace`?this.typeToSelectString=this.typeToSelectString.slice(0,-1):this.typeToSelectString+=e.key.toLowerCase();for(let e of t)if(e.getTextLabel().toLowerCase().startsWith(this.typeToSelectString)){this.setCurrentOption(e);break}}}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this&&!t.includes(this)&&this.hide()}}get value(){return this._value}set value(e){e=this.multiple?Array.isArray(e)?e:e.split(` `):Array.isArray(e)?e.join(` `):e,this._value!==e&&(this.valueHasChanged=!0,this._value=e)}get validity(){return this.valueInput.validity}get validationMessage(){return this.valueInput.validationMessage}connectedCallback(){super.connectedCallback(),setTimeout(()=>{this.handleDefaultSlotChange()}),this.open=!1}addOpenListeners(){var e;document.addEventListener(`focusin`,this.handleDocumentFocusIn),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().addEventListener(`focusin`,this.handleDocumentFocusIn),`CloseWatcher`in window&&((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.open&&(this.hide(),this.displayInput.focus({preventScroll:!0}))})}removeOpenListeners(){var e;document.removeEventListener(`focusin`,this.handleDocumentFocusIn),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),this.getRootNode()!==document&&this.getRootNode().removeEventListener(`focusin`,this.handleDocumentFocusIn),(e=this.closeWatcher)==null||e.destroy()}handleFocus(){this.hasFocus=!0,this.displayInput.setSelectionRange(0,0),this.emit(`sl-focus`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleLabelClick(){this.displayInput.focus()}handleComboboxMouseDown(e){let t=e.composedPath().some(e=>e instanceof Element&&e.tagName.toLowerCase()===`sl-icon-button`);this.disabled||t||(e.preventDefault(),this.displayInput.focus({preventScroll:!0}),this.open=!this.open)}handleComboboxKeyDown(e){e.key!==`Tab`&&(e.stopPropagation(),this.handleDocumentKeyDown(e))}handleClearClick(e){e.stopPropagation(),this.valueHasChanged=!0,this.value!==``&&(this.setSelectedOptions([]),this.displayInput.focus({preventScroll:!0}),this.updateComplete.then(()=>{this.emit(`sl-clear`),this.emit(`sl-input`),this.emit(`sl-change`)}))}handleClearMouseDown(e){e.stopPropagation(),e.preventDefault()}handleOptionClick(e){let t=e.target.closest(`sl-option`),n=this.value;t&&!t.disabled&&(this.valueHasChanged=!0,this.multiple?this.toggleOptionSelection(t):this.setSelectedOptions(t),this.updateComplete.then(()=>this.displayInput.focus({preventScroll:!0})),this.value!==n&&this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}),this.multiple||(this.hide(),this.displayInput.focus({preventScroll:!0})))}handleDefaultSlotChange(){customElements.get(`sl-option`)||customElements.whenDefined(`sl-option`).then(()=>this.handleDefaultSlotChange());let e=this.getAllOptions(),t=this.valueHasChanged?this.value:this.defaultValue,n=Array.isArray(t)?t:[t],r=[];e.forEach(e=>r.push(e.value)),this.setSelectedOptions(e.filter(e=>n.includes(e.value)))}handleTagRemove(e,t){e.stopPropagation(),this.valueHasChanged=!0,this.disabled||(this.toggleOptionSelection(t,!1),this.updateComplete.then(()=>{this.emit(`sl-input`),this.emit(`sl-change`)}))}getAllOptions(){return[...this.querySelectorAll(`sl-option`)]}getFirstOption(){return this.querySelector(`sl-option`)}setCurrentOption(e){this.getAllOptions().forEach(e=>{e.current=!1,e.tabIndex=-1}),e&&(this.currentOption=e,e.current=!0,e.tabIndex=0,e.focus())}setSelectedOptions(e){let t=this.getAllOptions(),n=Array.isArray(e)?e:[e];t.forEach(e=>e.selected=!1),n.length&&n.forEach(e=>e.selected=!0),this.selectionChanged()}toggleOptionSelection(e,t){t===!0||t===!1?e.selected=t:e.selected=!e.selected,this.selectionChanged()}selectionChanged(){this.selectedOptions=this.getAllOptions().filter(e=>e.selected);let e=this.valueHasChanged;if(this.multiple)this.value=this.selectedOptions.map(e=>e.value),this.placeholder&&this.value.length===0?this.displayLabel=``:this.displayLabel=this.localize.term(`numOptionsSelected`,this.selectedOptions.length);else{let e=this.selectedOptions[0];this.value=e?.value??``,this.displayLabel=(e?.getTextLabel)?.call(e)??``}this.valueHasChanged=e,this.updateComplete.then(()=>{this.formControlController.updateValidity()})}get tags(){return this.selectedOptions.map((e,t)=>{if(t<this.maxOptionsVisible||this.maxOptionsVisible<=0){let n=this.getTag(e,t);return S`<div @sl-remove=${t=>this.handleTagRemove(t,e)}>
          ${typeof n==`string`?ya(n):n}
        </div>`}else if(t===this.maxOptionsVisible)return S`<sl-tag size=${this.size}>+${this.selectedOptions.length-t}</sl-tag>`;return S``})}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleDisabledChange(){this.disabled&&(this.open=!1,this.handleOpenChange())}attributeChangedCallback(e,t,n){if(super.attributeChangedCallback(e,t,n),e===`value`){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}}handleValueChange(){if(!this.valueHasChanged){let e=this.valueHasChanged;this.value=this.defaultValue,this.valueHasChanged=e}let e=this.getAllOptions(),t=Array.isArray(this.value)?this.value:[this.value];this.setSelectedOptions(e.filter(e=>t.includes(e.value)))}async handleOpenChange(){if(this.open&&!this.disabled){this.setCurrentOption(this.selectedOptions[0]||this.getFirstOption()),this.emit(`sl-show`),this.addOpenListeners(),await Dn(this),this.listbox.hidden=!1,this.popup.active=!0,requestAnimationFrame(()=>{this.setCurrentOption(this.currentOption)});let{keyframes:e,options:t}=F(this,`select.show`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.currentOption&&sa(this.currentOption,this.listbox,`vertical`,`auto`),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),this.removeOpenListeners(),await Dn(this);let{keyframes:e,options:t}=F(this,`select.hide`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.listbox.hidden=!0,this.popup.active=!1,this.emit(`sl-after-hide`)}}async show(){if(this.open||this.disabled){this.open=!1;return}return this.open=!0,Oi(this,`sl-after-show`)}async hide(){if(!this.open||this.disabled){this.open=!1;return}return this.open=!1,Oi(this,`sl-after-hide`)}checkValidity(){return this.valueInput.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.valueInput.reportValidity()}setCustomValidity(e){this.valueInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){this.displayInput.focus(e)}blur(){this.displayInput.blur()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&this.value.length>0,a=this.placeholder&&this.value&&this.value.length<=0;return S`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          id="label"
          part="form-control-label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <sl-popup
            class=${j({select:!0,"select--standard":!0,"select--filled":this.filled,"select--pill":this.pill,"select--open":this.open,"select--disabled":this.disabled,"select--multiple":this.multiple,"select--focused":this.hasFocus,"select--placeholder-visible":a,"select--top":this.placement===`top`,"select--bottom":this.placement===`bottom`,"select--small":this.size===`small`,"select--medium":this.size===`medium`,"select--large":this.size===`large`})}
            placement=${this.placement}
            strategy=${this.hoist?`fixed`:`absolute`}
            flip
            shift
            sync="width"
            auto-size="vertical"
            auto-size-padding="10"
          >
            <div
              part="combobox"
              class="select__combobox"
              slot="anchor"
              @keydown=${this.handleComboboxKeyDown}
              @mousedown=${this.handleComboboxMouseDown}
            >
              <slot part="prefix" name="prefix" class="select__prefix"></slot>

              <input
                part="display-input"
                class="select__display-input"
                type="text"
                placeholder=${this.placeholder}
                .disabled=${this.disabled}
                .value=${this.displayLabel}
                autocomplete="off"
                spellcheck="false"
                autocapitalize="off"
                readonly
                aria-controls="listbox"
                aria-expanded=${this.open?`true`:`false`}
                aria-haspopup="listbox"
                aria-labelledby="label"
                aria-disabled=${this.disabled?`true`:`false`}
                aria-describedby="help-text"
                role="combobox"
                tabindex="0"
                @focus=${this.handleFocus}
                @blur=${this.handleBlur}
              />

              ${this.multiple?S`<div part="tags" class="select__tags">${this.tags}</div>`:``}

              <input
                class="select__value-input"
                type="text"
                ?disabled=${this.disabled}
                ?required=${this.required}
                .value=${Array.isArray(this.value)?this.value.join(`, `):this.value}
                tabindex="-1"
                aria-hidden="true"
                @focus=${()=>this.focus()}
                @invalid=${this.handleInvalid}
              />

              ${i?S`
                    <button
                      part="clear-button"
                      class="select__clear"
                      type="button"
                      aria-label=${this.localize.term(`clearEntry`)}
                      @mousedown=${this.handleClearMouseDown}
                      @click=${this.handleClearClick}
                      tabindex="-1"
                    >
                      <slot name="clear-icon">
                        <sl-icon name="x-circle-fill" library="system"></sl-icon>
                      </slot>
                    </button>
                  `:``}

              <slot name="suffix" part="suffix" class="select__suffix"></slot>

              <slot name="expand-icon" part="expand-icon" class="select__expand-icon">
                <sl-icon library="system" name="chevron-down"></sl-icon>
              </slot>
            </div>

            <div
              id="listbox"
              role="listbox"
              aria-expanded=${this.open?`true`:`false`}
              aria-multiselectable=${this.multiple?`true`:`false`}
              aria-labelledby="label"
              part="listbox"
              class="select__listbox"
              tabindex="-1"
              @mouseup=${this.handleOptionClick}
              @slotchange=${this.handleDefaultSlotChange}
            >
              <slot></slot>
            </div>
          </sl-popup>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};B.styles=[T,Dt,_a],B.dependencies={"sl-icon":A,"sl-popup":R,"sl-tag":qi},y([O(`.select`)],B.prototype,`popup`,2),y([O(`.select__combobox`)],B.prototype,`combobox`,2),y([O(`.select__display-input`)],B.prototype,`displayInput`,2),y([O(`.select__value-input`)],B.prototype,`valueInput`,2),y([O(`.select__listbox`)],B.prototype,`listbox`,2),y([D()],B.prototype,`hasFocus`,2),y([D()],B.prototype,`displayLabel`,2),y([D()],B.prototype,`currentOption`,2),y([D()],B.prototype,`selectedOptions`,2),y([D()],B.prototype,`valueHasChanged`,2),y([E()],B.prototype,`name`,2),y([D()],B.prototype,`value`,1),y([E({attribute:`value`})],B.prototype,`defaultValue`,2),y([E({reflect:!0})],B.prototype,`size`,2),y([E()],B.prototype,`placeholder`,2),y([E({type:Boolean,reflect:!0})],B.prototype,`multiple`,2),y([E({attribute:`max-options-visible`,type:Number})],B.prototype,`maxOptionsVisible`,2),y([E({type:Boolean,reflect:!0})],B.prototype,`disabled`,2),y([E({type:Boolean})],B.prototype,`clearable`,2),y([E({type:Boolean,reflect:!0})],B.prototype,`open`,2),y([E({type:Boolean})],B.prototype,`hoist`,2),y([E({type:Boolean,reflect:!0})],B.prototype,`filled`,2),y([E({type:Boolean,reflect:!0})],B.prototype,`pill`,2),y([E()],B.prototype,`label`,2),y([E({reflect:!0})],B.prototype,`placement`,2),y([E({attribute:`help-text`})],B.prototype,`helpText`,2),y([E({reflect:!0})],B.prototype,`form`,2),y([E({type:Boolean,reflect:!0})],B.prototype,`required`,2),y([E()],B.prototype,`getTag`,2),y([w(`disabled`,{waitUntilFirstUpdate:!0})],B.prototype,`handleDisabledChange`,1),y([w([`defaultValue`,`value`],{waitUntilFirstUpdate:!0})],B.prototype,`handleValueChange`,1),y([w(`open`,{waitUntilFirstUpdate:!0})],B.prototype,`handleOpenChange`,1),P(`select.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),P(`select.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}}),B.define(`sl-select`),bn.define(`sl-spinner`);var ba=x`
  :host {
    --thumb-size: 20px;
    --tooltip-offset: 10px;
    --track-color-active: var(--sl-color-neutral-200);
    --track-color-inactive: var(--sl-color-neutral-200);
    --track-active-offset: 0%;
    --track-height: 6px;

    display: block;
  }

  .range {
    position: relative;
  }

  .range__control {
    --percent: 0%;
    -webkit-appearance: none;
    border-radius: 3px;
    width: 100%;
    height: var(--track-height);
    background: transparent;
    line-height: var(--sl-input-height-medium);
    vertical-align: middle;
    margin: 0;

    background-image: linear-gradient(
      to right,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  .range--rtl .range__control {
    background-image: linear-gradient(
      to left,
      var(--track-color-inactive) 0%,
      var(--track-color-inactive) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) min(var(--percent), var(--track-active-offset)),
      var(--track-color-active) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) max(var(--percent), var(--track-active-offset)),
      var(--track-color-inactive) 100%
    );
  }

  /* Webkit */
  .range__control::-webkit-slider-runnable-track {
    width: 100%;
    height: var(--track-height);
    border-radius: 3px;
    border: none;
  }

  .range__control::-webkit-slider-thumb {
    border: none;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border: solid var(--sl-input-border-width) var(--sl-color-primary-600);
    -webkit-appearance: none;
    margin-top: calc(var(--thumb-size) / -2 + var(--track-height) / 2);
    cursor: pointer;
  }

  .range__control:enabled::-webkit-slider-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-webkit-slider-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-webkit-slider-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* Firefox */
  .range__control::-moz-focus-outer {
    border: 0;
  }

  .range__control::-moz-range-progress {
    background-color: var(--track-color-active);
    border-radius: 3px;
    height: var(--track-height);
  }

  .range__control::-moz-range-track {
    width: 100%;
    height: var(--track-height);
    background-color: var(--track-color-inactive);
    border-radius: 3px;
    border: none;
  }

  .range__control::-moz-range-thumb {
    border: none;
    height: var(--thumb-size);
    width: var(--thumb-size);
    border-radius: 50%;
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
    cursor: pointer;
  }

  .range__control:enabled::-moz-range-thumb:hover {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
  }

  .range__control:enabled:focus-visible::-moz-range-thumb {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .range__control:enabled::-moz-range-thumb:active {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    cursor: grabbing;
  }

  /* States */
  .range__control:focus-visible {
    outline: none;
  }

  .range__control:disabled {
    opacity: 0.5;
  }

  .range__control:disabled::-webkit-slider-thumb {
    cursor: not-allowed;
  }

  .range__control:disabled::-moz-range-thumb {
    cursor: not-allowed;
  }

  /* Tooltip output */
  .range__tooltip {
    position: absolute;
    z-index: var(--sl-z-index-tooltip);
    left: 0;
    border-radius: var(--sl-tooltip-border-radius);
    background-color: var(--sl-tooltip-background-color);
    font-family: var(--sl-tooltip-font-family);
    font-size: var(--sl-tooltip-font-size);
    font-weight: var(--sl-tooltip-font-weight);
    line-height: var(--sl-tooltip-line-height);
    color: var(--sl-tooltip-color);
    opacity: 0;
    padding: var(--sl-tooltip-padding);
    transition: var(--sl-transition-fast) opacity;
    pointer-events: none;
  }

  .range__tooltip:after {
    content: '';
    position: absolute;
    width: 0;
    height: 0;
    left: 50%;
    translate: calc(-1 * var(--sl-tooltip-arrow-size));
  }

  .range--tooltip-visible .range__tooltip {
    opacity: 1;
  }

  /* Tooltip on top */
  .range--tooltip-top .range__tooltip {
    top: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-top .range__tooltip:after {
    border-top: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    top: 100%;
  }

  /* Tooltip on bottom */
  .range--tooltip-bottom .range__tooltip {
    bottom: calc(-1 * var(--thumb-size) - var(--tooltip-offset));
  }

  .range--tooltip-bottom .range__tooltip:after {
    border-bottom: var(--sl-tooltip-arrow-size) solid var(--sl-tooltip-background-color);
    border-left: var(--sl-tooltip-arrow-size) solid transparent;
    border-right: var(--sl-tooltip-arrow-size) solid transparent;
    bottom: 100%;
  }

  @media (forced-colors: active) {
    .range__control,
    .range__tooltip {
      border: solid 1px transparent;
    }

    .range__control::-webkit-slider-thumb {
      border: solid 1px transparent;
    }

    .range__control::-moz-range-thumb {
      border: solid 1px transparent;
    }

    .range__tooltip:after {
      display: none;
    }
  }
`,V=class extends k{constructor(){super(...arguments),this.formControlController=new ue(this),this.hasSlotController=new Ot(this,`help-text`,`label`),this.localize=new N(this),this.hasFocus=!1,this.hasTooltip=!1,this.title=``,this.name=``,this.value=0,this.label=``,this.helpText=``,this.disabled=!1,this.min=0,this.max=100,this.step=1,this.tooltip=`top`,this.tooltipFormatter=e=>e.toString(),this.form=``,this.defaultValue=0}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}connectedCallback(){super.connectedCallback(),this.resizeObserver=new ResizeObserver(()=>this.syncRange()),this.value<this.min&&(this.value=this.min),this.value>this.max&&(this.value=this.max),this.updateComplete.then(()=>{this.syncRange(),this.resizeObserver.observe(this.input)})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.resizeObserver)==null||e.unobserve(this.input)}handleChange(){this.emit(`sl-change`)}handleInput(){this.value=parseFloat(this.input.value),this.emit(`sl-input`),this.syncRange()}handleBlur(){this.hasFocus=!1,this.hasTooltip=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.hasTooltip=!0,this.emit(`sl-focus`)}handleThumbDragStart(){this.hasTooltip=!0}handleThumbDragEnd(){this.hasTooltip=!1}syncProgress(e){this.input.style.setProperty(`--percent`,`${e*100}%`)}syncTooltip(e){if(this.output!==null){let t=this.input.offsetWidth,n=this.output.offsetWidth,r=getComputedStyle(this.input).getPropertyValue(`--thumb-size`),i=this.localize.dir()===`rtl`,a=t*e;if(i){let i=`${t-a}px + ${e} * ${r}`;this.output.style.translate=`calc((${i} - ${n/2}px - ${r} / 2))`}else{let t=`${a}px - ${e} * ${r}`;this.output.style.translate=`calc(${t} - ${n/2}px + ${r} / 2)`}}}handleValueChange(){this.formControlController.updateValidity(),this.input.value=this.value.toString(),this.value=parseFloat(this.input.value),this.syncRange()}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}syncRange(){let e=Math.max(0,(this.value-this.min)/(this.max-this.min));this.syncProgress(e),this.tooltip!==`none`&&this.hasTooltip&&this.updateComplete.then(()=>this.syncTooltip(e))}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}focus(e){this.input.focus(e)}blur(){this.input.blur()}stepUp(){this.input.stepUp(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}stepDown(){this.input.stepDown(),this.value!==Number(this.input.value)&&(this.value=Number(this.input.value))}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t;return S`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--medium":!0,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({range:!0,"range--disabled":this.disabled,"range--focused":this.hasFocus,"range--rtl":this.localize.dir()===`rtl`,"range--tooltip-visible":this.hasTooltip,"range--tooltip-top":this.tooltip===`top`,"range--tooltip-bottom":this.tooltip===`bottom`})}
            @mousedown=${this.handleThumbDragStart}
            @mouseup=${this.handleThumbDragEnd}
            @touchstart=${this.handleThumbDragStart}
            @touchend=${this.handleThumbDragEnd}
          >
            <input
              part="input"
              id="input"
              class="range__control"
              title=${this.title}
              type="range"
              name=${M(this.name)}
              ?disabled=${this.disabled}
              min=${M(this.min)}
              max=${M(this.max)}
              step=${M(this.step)}
              .value=${on(this.value.toString())}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @focus=${this.handleFocus}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @blur=${this.handleBlur}
            />
            ${this.tooltip!==`none`&&!this.disabled?S`
                  <output part="tooltip" class="range__tooltip">
                    ${typeof this.tooltipFormatter==`function`?this.tooltipFormatter(this.value):this.value}
                  </output>
                `:``}
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};V.styles=[T,Dt,ba],y([O(`.range__control`)],V.prototype,`input`,2),y([O(`.range__tooltip`)],V.prototype,`output`,2),y([D()],V.prototype,`hasFocus`,2),y([D()],V.prototype,`hasTooltip`,2),y([E()],V.prototype,`title`,2),y([E()],V.prototype,`name`,2),y([E({type:Number})],V.prototype,`value`,2),y([E()],V.prototype,`label`,2),y([E({attribute:`help-text`})],V.prototype,`helpText`,2),y([E({type:Boolean,reflect:!0})],V.prototype,`disabled`,2),y([E({type:Number})],V.prototype,`min`,2),y([E({type:Number})],V.prototype,`max`,2),y([E({type:Number})],V.prototype,`step`,2),y([E()],V.prototype,`tooltip`,2),y([E({attribute:!1})],V.prototype,`tooltipFormatter`,2),y([E({reflect:!0})],V.prototype,`form`,2),y([Et()],V.prototype,`defaultValue`,2),y([Ut({passive:!0})],V.prototype,`handleThumbDragStart`,1),y([w(`value`,{waitUntilFirstUpdate:!0})],V.prototype,`handleValueChange`,1),y([w(`disabled`,{waitUntilFirstUpdate:!0})],V.prototype,`handleDisabledChange`,1),y([w(`hasTooltip`,{waitUntilFirstUpdate:!0})],V.prototype,`syncRange`,1),V.define(`sl-range`);var xa=x`
  :host {
    --symbol-color: var(--sl-color-neutral-300);
    --symbol-color-active: var(--sl-color-amber-500);
    --symbol-size: 1.2rem;
    --symbol-spacing: var(--sl-spacing-3x-small);

    display: inline-flex;
  }

  .rating {
    position: relative;
    display: inline-flex;
    border-radius: var(--sl-border-radius-medium);
    vertical-align: middle;
  }

  .rating:focus {
    outline: none;
  }

  .rating:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .rating__symbols {
    display: inline-flex;
    position: relative;
    font-size: var(--symbol-size);
    line-height: 0;
    color: var(--symbol-color);
    white-space: nowrap;
    cursor: pointer;
  }

  .rating__symbols > * {
    padding: var(--symbol-spacing);
  }

  .rating__symbol--active,
  .rating__partial--filled {
    color: var(--symbol-color-active);
  }

  .rating__partial-symbol-container {
    position: relative;
  }

  .rating__partial--filled {
    position: absolute;
    top: var(--symbol-spacing);
    left: var(--symbol-spacing);
  }

  .rating__symbol {
    transition: var(--sl-transition-fast) scale;
    pointer-events: none;
  }

  .rating__symbol--hover {
    scale: 1.2;
  }

  .rating--disabled .rating__symbols,
  .rating--readonly .rating__symbols {
    cursor: default;
  }

  .rating--disabled .rating__symbol--hover,
  .rating--readonly .rating__symbol--hover {
    scale: none;
  }

  .rating--disabled {
    opacity: 0.5;
  }

  .rating--disabled .rating__symbols {
    cursor: not-allowed;
  }

  /* Forced colors mode */
  @media (forced-colors: active) {
    .rating__symbol--active {
      color: SelectedItem;
    }
  }
`,Sa=`important`,Ca=` !`+Sa,wa=rn(class extends an{constructor(e){if(super(e),e.type!==nn.ATTRIBUTE||e.name!==`style`||e.strings?.length>2)throw Error("The `styleMap` directive must be used in the `style` attribute and must be the only part in the attribute.")}render(e){return Object.keys(e).reduce((t,n)=>{let r=e[n];return r==null?t:t+`${n=n.includes(`-`)?n:n.replace(/(?:^(webkit|moz|ms|o)|)(?=[A-Z])/g,`-$&`).toLowerCase()}:${r};`},``)}update(e,[t]){let{style:n}=e.element;if(this.ft===void 0)return this.ft=new Set(Object.keys(t)),this.render(t);for(let e of this.ft)t[e]??(this.ft.delete(e),e.includes(`-`)?n.removeProperty(e):n[e]=null);for(let e in t){let r=t[e];if(r!=null){this.ft.add(e);let t=typeof r==`string`&&r.endsWith(Ca);e.includes(`-`)||t?n.setProperty(e,t?r.slice(0,-11):r,t?Sa:``):n[e]=r}}return it}}),Ta=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.hoverValue=0,this.isHovering=!1,this.label=``,this.value=0,this.max=5,this.precision=1,this.readonly=!1,this.disabled=!1,this.getSymbol=()=>`<sl-icon name="star-fill" library="system"></sl-icon>`}getValueFromMousePosition(e){return this.getValueFromXCoordinate(e.clientX)}getValueFromTouchPosition(e){return this.getValueFromXCoordinate(e.touches[0].clientX)}getValueFromXCoordinate(e){let t=this.localize.dir()===`rtl`,{left:n,right:r,width:i}=this.rating.getBoundingClientRect();return ji(t?this.roundToPrecision((r-e)/i*this.max,this.precision):this.roundToPrecision((e-n)/i*this.max,this.precision),0,this.max)}handleClick(e){this.disabled||(this.setValue(this.getValueFromMousePosition(e)),this.emit(`sl-change`))}setValue(e){this.disabled||this.readonly||(this.value=e===this.value?0:e,this.isHovering=!1)}handleKeyDown(e){let t=this.localize.dir()===`ltr`,n=this.localize.dir()===`rtl`,r=this.value;if(!(this.disabled||this.readonly)){if(e.key===`ArrowDown`||t&&e.key===`ArrowLeft`||n&&e.key===`ArrowRight`){let t=e.shiftKey?1:this.precision;this.value=Math.max(0,this.value-t),e.preventDefault()}if(e.key===`ArrowUp`||t&&e.key===`ArrowRight`||n&&e.key===`ArrowLeft`){let t=e.shiftKey?1:this.precision;this.value=Math.min(this.max,this.value+t),e.preventDefault()}e.key===`Home`&&(this.value=0,e.preventDefault()),e.key===`End`&&(this.value=this.max,e.preventDefault()),this.value!==r&&this.emit(`sl-change`)}}handleMouseEnter(e){this.isHovering=!0,this.hoverValue=this.getValueFromMousePosition(e)}handleMouseMove(e){this.hoverValue=this.getValueFromMousePosition(e)}handleMouseLeave(){this.isHovering=!1}handleTouchStart(e){this.isHovering=!0,this.hoverValue=this.getValueFromTouchPosition(e),e.preventDefault()}handleTouchMove(e){this.hoverValue=this.getValueFromTouchPosition(e)}handleTouchEnd(e){this.isHovering=!1,this.setValue(this.hoverValue),this.emit(`sl-change`),e.preventDefault()}roundToPrecision(e,t=.5){let n=1/t;return Math.ceil(e*n)/n}handleHoverValueChange(){this.emit(`sl-hover`,{detail:{phase:`move`,value:this.hoverValue}})}handleIsHoveringChange(){this.emit(`sl-hover`,{detail:{phase:this.isHovering?`start`:`end`,value:this.hoverValue}})}focus(e){this.rating.focus(e)}blur(){this.rating.blur()}render(){let e=this.localize.dir()===`rtl`,t=Array.from(Array(this.max).keys()),n=0;return n=this.disabled||this.readonly?this.value:this.isHovering?this.hoverValue:this.value,S`
      <div
        part="base"
        class=${j({rating:!0,"rating--readonly":this.readonly,"rating--disabled":this.disabled,"rating--rtl":e})}
        role="slider"
        aria-label=${this.label}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-readonly=${this.readonly?`true`:`false`}
        aria-valuenow=${this.value}
        aria-valuemin=${0}
        aria-valuemax=${this.max}
        tabindex=${this.disabled||this.readonly?`-1`:`0`}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mouseenter=${this.handleMouseEnter}
        @touchstart=${this.handleTouchStart}
        @mouseleave=${this.handleMouseLeave}
        @touchend=${this.handleTouchEnd}
        @mousemove=${this.handleMouseMove}
        @touchmove=${this.handleTouchMove}
      >
        <span class="rating__symbols">
          ${t.map(t=>n>t&&n<t+1?S`
                <span
                  class=${j({rating__symbol:!0,"rating__partial-symbol-container":!0,"rating__symbol--hover":this.isHovering&&Math.ceil(n)===t+1})}
                  role="presentation"
                >
                  <div
                    style=${wa({clipPath:e?`inset(0 ${(n-t)*100}% 0 0)`:`inset(0 0 0 ${(n-t)*100}%)`})}
                  >
                    ${ya(this.getSymbol(t+1))}
                  </div>
                  <div
                    class="rating__partial--filled"
                    style=${wa({clipPath:e?`inset(0 0 0 ${100-(n-t)*100}%)`:`inset(0 ${100-(n-t)*100}% 0 0)`})}
                  >
                    ${ya(this.getSymbol(t+1))}
                  </div>
                </span>
              `:S`
              <span
                class=${j({rating__symbol:!0,"rating__symbol--hover":this.isHovering&&Math.ceil(n)===t+1,"rating__symbol--active":n>=t+1})}
                role="presentation"
              >
                ${ya(this.getSymbol(t+1))}
              </span>
            `)}
        </span>
      </div>
    `}};Ta.styles=[T,xa],Ta.dependencies={"sl-icon":A},y([O(`.rating`)],Ta.prototype,`rating`,2),y([D()],Ta.prototype,`hoverValue`,2),y([D()],Ta.prototype,`isHovering`,2),y([E()],Ta.prototype,`label`,2),y([E({type:Number})],Ta.prototype,`value`,2),y([E({type:Number})],Ta.prototype,`max`,2),y([E({type:Number})],Ta.prototype,`precision`,2),y([E({type:Boolean,reflect:!0})],Ta.prototype,`readonly`,2),y([E({type:Boolean,reflect:!0})],Ta.prototype,`disabled`,2),y([E()],Ta.prototype,`getSymbol`,2),y([Ut({passive:!0})],Ta.prototype,`handleTouchMove`,1),y([w(`hoverValue`)],Ta.prototype,`handleHoverValueChange`,1),y([w(`isHovering`)],Ta.prototype,`handleIsHoveringChange`,1),Ta.define(`sl-rating`);var Ea=[{max:276e4,value:6e4,unit:`minute`},{max:72e6,value:36e5,unit:`hour`},{max:5184e5,value:864e5,unit:`day`},{max:24192e5,value:6048e5,unit:`week`},{max:28512e6,value:2592e6,unit:`month`},{max:1/0,value:31536e6,unit:`year`}],Da=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.isoTime=``,this.relativeTime=``,this.date=new Date,this.format=`long`,this.numeric=`auto`,this.sync=!1}disconnectedCallback(){super.disconnectedCallback(),clearTimeout(this.updateTimeout)}render(){let e=new Date,t=new Date(this.date);if(isNaN(t.getMilliseconds()))return this.relativeTime=``,this.isoTime=``,``;let n=t.getTime()-e.getTime(),{unit:r,value:i}=Ea.find(e=>Math.abs(n)<e.max);if(this.isoTime=t.toISOString(),this.relativeTime=this.localize.relativeTime(Math.round(n/i),r,{numeric:this.numeric,style:this.format}),clearTimeout(this.updateTimeout),this.sync){let e;e=Oa(r===`minute`?`second`:r===`hour`?`minute`:r===`day`?`hour`:`day`),this.updateTimeout=window.setTimeout(()=>this.requestUpdate(),e)}return S` <time datetime=${this.isoTime}>${this.relativeTime}</time> `}};y([D()],Da.prototype,`isoTime`,2),y([D()],Da.prototype,`relativeTime`,2),y([E()],Da.prototype,`date`,2),y([E()],Da.prototype,`format`,2),y([E()],Da.prototype,`numeric`,2),y([E({type:Boolean})],Da.prototype,`sync`,2);function Oa(e){let t={second:1e3,minute:6e4,hour:36e5,day:864e5}[e];return t-Date.now()%t}Da.define(`sl-relative-time`);var ka=x`
  :host {
    display: inline-block;
    position: relative;
    width: auto;
    cursor: pointer;
  }

  .button {
    display: inline-flex;
    align-items: stretch;
    justify-content: center;
    width: 100%;
    border-style: solid;
    border-width: var(--sl-input-border-width);
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-font-weight-semibold);
    text-decoration: none;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    vertical-align: middle;
    padding: 0;
    transition:
      var(--sl-transition-x-fast) background-color,
      var(--sl-transition-x-fast) color,
      var(--sl-transition-x-fast) border,
      var(--sl-transition-x-fast) box-shadow;
    cursor: inherit;
  }

  .button::-moz-focus-inner {
    border: 0;
  }

  .button:focus {
    outline: none;
  }

  .button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When disabled, prevent mouse events from bubbling up from children */
  .button--disabled * {
    pointer-events: none;
  }

  .button__prefix,
  .button__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    pointer-events: none;
  }

  .button__label {
    display: inline-block;
  }

  .button__label::slotted(sl-icon) {
    vertical-align: -2px;
  }

  /*
   * Standard buttons
   */

  /* Default */
  .button--standard.button--default {
    background-color: var(--sl-color-neutral-0);
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--standard.button--default:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-50);
    border-color: var(--sl-color-primary-300);
    color: var(--sl-color-primary-700);
  }

  .button--standard.button--default:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-100);
    border-color: var(--sl-color-primary-400);
    color: var(--sl-color-primary-700);
  }

  /* Primary */
  .button--standard.button--primary {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:hover:not(.button--disabled) {
    background-color: var(--sl-color-primary-500);
    border-color: var(--sl-color-primary-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--primary:active:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--standard.button--success {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:hover:not(.button--disabled) {
    background-color: var(--sl-color-success-500);
    border-color: var(--sl-color-success-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--success:active:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--standard.button--neutral {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:hover:not(.button--disabled) {
    background-color: var(--sl-color-neutral-500);
    border-color: var(--sl-color-neutral-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--neutral:active:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--standard.button--warning {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }
  .button--standard.button--warning:hover:not(.button--disabled) {
    background-color: var(--sl-color-warning-500);
    border-color: var(--sl-color-warning-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--warning:active:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--standard.button--danger {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:hover:not(.button--disabled) {
    background-color: var(--sl-color-danger-500);
    border-color: var(--sl-color-danger-500);
    color: var(--sl-color-neutral-0);
  }

  .button--standard.button--danger:active:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /*
   * Outline buttons
   */

  .button--outline {
    background: none;
    border: solid 1px;
  }

  /* Default */
  .button--outline.button--default {
    border-color: var(--sl-input-border-color);
    color: var(--sl-color-neutral-700);
  }

  .button--outline.button--default:hover:not(.button--disabled),
  .button--outline.button--default.button--checked:not(.button--disabled) {
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--default:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Primary */
  .button--outline.button--primary {
    border-color: var(--sl-color-primary-600);
    color: var(--sl-color-primary-600);
  }

  .button--outline.button--primary:hover:not(.button--disabled),
  .button--outline.button--primary.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--primary:active:not(.button--disabled) {
    border-color: var(--sl-color-primary-700);
    background-color: var(--sl-color-primary-700);
    color: var(--sl-color-neutral-0);
  }

  /* Success */
  .button--outline.button--success {
    border-color: var(--sl-color-success-600);
    color: var(--sl-color-success-600);
  }

  .button--outline.button--success:hover:not(.button--disabled),
  .button--outline.button--success.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--success:active:not(.button--disabled) {
    border-color: var(--sl-color-success-700);
    background-color: var(--sl-color-success-700);
    color: var(--sl-color-neutral-0);
  }

  /* Neutral */
  .button--outline.button--neutral {
    border-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-600);
  }

  .button--outline.button--neutral:hover:not(.button--disabled),
  .button--outline.button--neutral.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--neutral:active:not(.button--disabled) {
    border-color: var(--sl-color-neutral-700);
    background-color: var(--sl-color-neutral-700);
    color: var(--sl-color-neutral-0);
  }

  /* Warning */
  .button--outline.button--warning {
    border-color: var(--sl-color-warning-600);
    color: var(--sl-color-warning-600);
  }

  .button--outline.button--warning:hover:not(.button--disabled),
  .button--outline.button--warning.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--warning:active:not(.button--disabled) {
    border-color: var(--sl-color-warning-700);
    background-color: var(--sl-color-warning-700);
    color: var(--sl-color-neutral-0);
  }

  /* Danger */
  .button--outline.button--danger {
    border-color: var(--sl-color-danger-600);
    color: var(--sl-color-danger-600);
  }

  .button--outline.button--danger:hover:not(.button--disabled),
  .button--outline.button--danger.button--checked:not(.button--disabled) {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  .button--outline.button--danger:active:not(.button--disabled) {
    border-color: var(--sl-color-danger-700);
    background-color: var(--sl-color-danger-700);
    color: var(--sl-color-neutral-0);
  }

  @media (forced-colors: active) {
    .button.button--outline.button--checked:not(.button--disabled) {
      outline: solid 2px transparent;
    }
  }

  /*
   * Text buttons
   */

  .button--text {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-600);
  }

  .button--text:hover:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:focus-visible:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-500);
  }

  .button--text:active:not(.button--disabled) {
    background-color: transparent;
    border-color: transparent;
    color: var(--sl-color-primary-700);
  }

  /*
   * Size modifiers
   */

  .button--small {
    height: auto;
    min-height: var(--sl-input-height-small);
    font-size: var(--sl-button-font-size-small);
    line-height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-small);
  }

  .button--medium {
    height: auto;
    min-height: var(--sl-input-height-medium);
    font-size: var(--sl-button-font-size-medium);
    line-height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-medium);
  }

  .button--large {
    height: auto;
    min-height: var(--sl-input-height-large);
    font-size: var(--sl-button-font-size-large);
    line-height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    border-radius: var(--sl-input-border-radius-large);
  }

  /*
   * Pill modifier
   */

  .button--pill.button--small {
    border-radius: var(--sl-input-height-small);
  }

  .button--pill.button--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .button--pill.button--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Circle modifier
   */

  .button--circle {
    padding-left: 0;
    padding-right: 0;
  }

  .button--circle.button--small {
    width: var(--sl-input-height-small);
    border-radius: 50%;
  }

  .button--circle.button--medium {
    width: var(--sl-input-height-medium);
    border-radius: 50%;
  }

  .button--circle.button--large {
    width: var(--sl-input-height-large);
    border-radius: 50%;
  }

  .button--circle .button__prefix,
  .button--circle .button__suffix,
  .button--circle .button__caret {
    display: none;
  }

  /*
   * Caret modifier
   */

  .button--caret .button__suffix {
    display: none;
  }

  .button--caret .button__caret {
    height: auto;
  }

  /*
   * Loading modifier
   */

  .button--loading {
    position: relative;
    cursor: wait;
  }

  .button--loading .button__prefix,
  .button--loading .button__label,
  .button--loading .button__suffix,
  .button--loading .button__caret {
    visibility: hidden;
  }

  .button--loading sl-spinner {
    --indicator-color: currentColor;
    position: absolute;
    font-size: 1em;
    height: 1em;
    width: 1em;
    top: calc(50% - 0.5em);
    left: calc(50% - 0.5em);
  }

  /*
   * Badges
   */

  .button ::slotted(sl-badge) {
    position: absolute;
    top: 0;
    right: 0;
    translate: 50% -50%;
    pointer-events: none;
  }

  .button--rtl ::slotted(sl-badge) {
    right: auto;
    left: 0;
    translate: -50% -50%;
  }

  /*
   * Button spacing
   */

  .button--has-label.button--small .button__label {
    padding: 0 var(--sl-spacing-small);
  }

  .button--has-label.button--medium .button__label {
    padding: 0 var(--sl-spacing-medium);
  }

  .button--has-label.button--large .button__label {
    padding: 0 var(--sl-spacing-large);
  }

  .button--has-prefix.button--small {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--small .button__label {
    padding-inline-start: var(--sl-spacing-x-small);
  }

  .button--has-prefix.button--medium {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--medium .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-prefix.button--large .button__label {
    padding-inline-start: var(--sl-spacing-small);
  }

  .button--has-suffix.button--small,
  .button--caret.button--small {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--small .button__label,
  .button--caret.button--small .button__label {
    padding-inline-end: var(--sl-spacing-x-small);
  }

  .button--has-suffix.button--medium,
  .button--caret.button--medium {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--medium .button__label,
  .button--caret.button--medium .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large,
  .button--caret.button--large {
    padding-inline-end: var(--sl-spacing-small);
  }

  .button--has-suffix.button--large .button__label,
  .button--caret.button--large .button__label {
    padding-inline-end: var(--sl-spacing-small);
  }

  /*
   * Button groups support a variety of button types (e.g. buttons with tooltips, buttons as dropdown triggers, etc.).
   * This means buttons aren't always direct descendants of the button group, thus we can't target them with the
   * ::slotted selector. To work around this, the button group component does some magic to add these special classes to
   * buttons and we style them here instead.
   */

  :host([data-sl-button-group__button--first]:not([data-sl-button-group__button--last])) .button {
    border-start-end-radius: 0;
    border-end-end-radius: 0;
  }

  :host([data-sl-button-group__button--inner]) .button {
    border-radius: 0;
  }

  :host([data-sl-button-group__button--last]:not([data-sl-button-group__button--first])) .button {
    border-start-start-radius: 0;
    border-end-start-radius: 0;
  }

  /* All except the first */
  :host([data-sl-button-group__button]:not([data-sl-button-group__button--first])) {
    margin-inline-start: calc(-1 * var(--sl-input-border-width));
  }

  /* Add a visual separator between solid buttons */
  :host(
      [data-sl-button-group__button]:not(
          [data-sl-button-group__button--first],
          [data-sl-button-group__button--radio],
          [variant='default']
        ):not(:hover)
    )
    .button:after {
    content: '';
    position: absolute;
    top: 0;
    inset-inline-start: 0;
    bottom: 0;
    border-left: solid 1px rgb(128 128 128 / 33%);
    mix-blend-mode: multiply;
  }

  /* Bump hovered, focused, and checked buttons up so their focus ring isn't clipped */
  :host([data-sl-button-group__button--hover]) {
    z-index: 1;
  }

  /* Focus and checked are always on top */
  :host([data-sl-button-group__button--focus]),
  :host([data-sl-button-group__button][checked]) {
    z-index: 2;
  }
`,Aa=x`
  ${ka}

  .button__prefix,
  .button__suffix,
  .button__label {
    display: inline-flex;
    position: relative;
    align-items: center;
  }

  /* We use a hidden input so constraint validation errors work, since they don't appear to show when used with buttons.
    We can't actually hide it, though, otherwise the messages will be suppressed by the browser. */
  .hidden-input {
    all: unset;
    position: absolute;
    top: 0;
    left: 0;
    bottom: 0;
    right: 0;
    outline: dotted 1px red;
    opacity: 0;
    z-index: -1;
  }
`,ja=class extends k{constructor(){super(...arguments),this.hasSlotController=new Ot(this,`[default]`,`prefix`,`suffix`),this.hasFocus=!1,this.checked=!1,this.disabled=!1,this.size=`medium`,this.pill=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`presentation`)}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleClick(e){if(this.disabled){e.preventDefault(),e.stopPropagation();return}this.checked=!0}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}focus(e){this.input.focus(e)}blur(){this.input.blur()}render(){return Gi`
      <div part="base" role="presentation">
        <button
          part="${`button${this.checked?` button--checked`:``}`}"
          role="radio"
          aria-checked="${this.checked}"
          class=${j({button:!0,"button--default":!0,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--checked":this.checked,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--outline":!0,"button--pill":this.pill,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
          aria-disabled=${this.disabled}
          type="button"
          value=${M(this.value)}
          @blur=${this.handleBlur}
          @focus=${this.handleFocus}
          @click=${this.handleClick}
        >
          <slot name="prefix" part="prefix" class="button__prefix"></slot>
          <slot part="label" class="button__label"></slot>
          <slot name="suffix" part="suffix" class="button__suffix"></slot>
        </button>
      </div>
    `}};ja.styles=[T,Aa],y([O(`.button`)],ja.prototype,`input`,2),y([O(`.hidden-input`)],ja.prototype,`hiddenInput`,2),y([D()],ja.prototype,`hasFocus`,2),y([E({type:Boolean,reflect:!0})],ja.prototype,`checked`,2),y([E()],ja.prototype,`value`,2),y([E({type:Boolean,reflect:!0})],ja.prototype,`disabled`,2),y([E({reflect:!0})],ja.prototype,`size`,2),y([E({type:Boolean,reflect:!0})],ja.prototype,`pill`,2),y([w(`disabled`,{waitUntilFirstUpdate:!0})],ja.prototype,`handleDisabledChange`,1),ja.define(`sl-radio-button`);var Ma=x`
  :host {
    display: block;
  }

  .form-control {
    position: relative;
    border: none;
    padding: 0;
    margin: 0;
  }

  .form-control__label {
    padding: 0;
  }

  .radio-group--required .radio-group__label::after {
    content: var(--sl-input-required-content);
    margin-inline-start: var(--sl-input-required-content-offset);
  }

  .visually-hidden {
    position: absolute;
    width: 1px;
    height: 1px;
    padding: 0;
    margin: -1px;
    overflow: hidden;
    clip: rect(0, 0, 0, 0);
    white-space: nowrap;
    border: 0;
  }
`,Na=x`
  :host {
    display: inline-block;
  }

  .button-group {
    display: flex;
    flex-wrap: nowrap;
  }
`,Pa=class extends k{constructor(){super(...arguments),this.disableRole=!1,this.label=``}handleFocus(e){Fa(e.target)?.toggleAttribute(`data-sl-button-group__button--focus`,!0)}handleBlur(e){Fa(e.target)?.toggleAttribute(`data-sl-button-group__button--focus`,!1)}handleMouseOver(e){Fa(e.target)?.toggleAttribute(`data-sl-button-group__button--hover`,!0)}handleMouseOut(e){Fa(e.target)?.toggleAttribute(`data-sl-button-group__button--hover`,!1)}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})];e.forEach(t=>{let n=e.indexOf(t),r=Fa(t);r&&(r.toggleAttribute(`data-sl-button-group__button`,!0),r.toggleAttribute(`data-sl-button-group__button--first`,n===0),r.toggleAttribute(`data-sl-button-group__button--inner`,n>0&&n<e.length-1),r.toggleAttribute(`data-sl-button-group__button--last`,n===e.length-1),r.toggleAttribute(`data-sl-button-group__button--radio`,r.tagName.toLowerCase()===`sl-radio-button`))})}render(){return S`
      <div
        part="base"
        class="button-group"
        role="${this.disableRole?`presentation`:`group`}"
        aria-label=${this.label}
        @focusout=${this.handleBlur}
        @focusin=${this.handleFocus}
        @mouseover=${this.handleMouseOver}
        @mouseout=${this.handleMouseOut}
      >
        <slot @slotchange=${this.handleSlotChange}></slot>
      </div>
    `}};Pa.styles=[T,Na],y([O(`slot`)],Pa.prototype,`defaultSlot`,2),y([D()],Pa.prototype,`disableRole`,2),y([E()],Pa.prototype,`label`,2);function Fa(e){let t=`sl-button, sl-radio-button`;return e.closest(t)??e.querySelector(t)}var Ia=class extends k{constructor(){super(...arguments),this.formControlController=new ue(this),this.hasSlotController=new Ot(this,`help-text`,`label`),this.customValidityMessage=``,this.hasButtonGroup=!1,this.errorMessage=``,this.defaultValue=``,this.label=``,this.helpText=``,this.name=`option`,this.value=``,this.size=`medium`,this.form=``,this.required=!1}get validity(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?fe:de:pe}get validationMessage(){let e=this.required&&!this.value;return this.customValidityMessage===``?e?this.validationInput.validationMessage:``:this.customValidityMessage}connectedCallback(){super.connectedCallback(),this.defaultValue=this.value}firstUpdated(){this.formControlController.updateValidity()}getAllRadios(){return[...this.querySelectorAll(`sl-radio, sl-radio-button`)]}handleRadioClick(e){let t=e.target.closest(`sl-radio, sl-radio-button`),n=this.getAllRadios(),r=this.value;!t||t.disabled||(this.value=t.value,n.forEach(e=>e.checked=e===t),this.value!==r&&(this.emit(`sl-change`),this.emit(`sl-input`)))}handleKeyDown(e){if(![`ArrowUp`,`ArrowDown`,`ArrowLeft`,`ArrowRight`,` `].includes(e.key))return;let t=this.getAllRadios().filter(e=>!e.disabled),n=t.find(e=>e.checked)??t[0],r=e.key===` `?0:[`ArrowUp`,`ArrowLeft`].includes(e.key)?-1:1,i=this.value,a=t.indexOf(n)+r;a<0&&(a=t.length-1),a>t.length-1&&(a=0),this.getAllRadios().forEach(e=>{e.checked=!1,this.hasButtonGroup||e.setAttribute(`tabindex`,`-1`)}),this.value=t[a].value,t[a].checked=!0,this.hasButtonGroup?t[a].shadowRoot.querySelector(`button`).focus():(t[a].setAttribute(`tabindex`,`0`),t[a].focus()),this.value!==i&&(this.emit(`sl-change`),this.emit(`sl-input`)),e.preventDefault()}handleLabelClick(){this.focus()}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}async syncRadioElements(){let e=this.getAllRadios();if(await Promise.all(e.map(async e=>{await e.updateComplete,e.checked=e.value===this.value,e.size=this.size})),this.hasButtonGroup=e.some(e=>e.tagName.toLowerCase()===`sl-radio-button`),e.length>0&&!e.some(e=>e.checked))if(this.hasButtonGroup){let t=e[0].shadowRoot?.querySelector(`button`);t&&t.setAttribute(`tabindex`,`0`)}else e[0].setAttribute(`tabindex`,`0`);if(this.hasButtonGroup){let e=this.shadowRoot?.querySelector(`sl-button-group`);e&&(e.disableRole=!0)}}syncRadios(){if(customElements.get(`sl-radio`)&&customElements.get(`sl-radio-button`)){this.syncRadioElements();return}customElements.get(`sl-radio`)?this.syncRadioElements():customElements.whenDefined(`sl-radio`).then(()=>this.syncRadios()),customElements.get(`sl-radio-button`)?this.syncRadioElements():customElements.whenDefined(`sl-radio-button`).then(()=>this.syncRadios())}updateCheckedRadio(){this.getAllRadios().forEach(e=>e.checked=e.value===this.value),this.formControlController.setValidity(this.validity.valid)}handleSizeChange(){this.syncRadios()}handleValueChange(){this.hasUpdated&&this.updateCheckedRadio()}checkValidity(){let e=this.required&&!this.value,t=this.customValidityMessage!==``;return e||t?(this.formControlController.emitInvalidEvent(),!1):!0}getForm(){return this.formControlController.getForm()}reportValidity(){let e=this.validity.valid;return this.errorMessage=this.customValidityMessage||e?``:this.validationInput.validationMessage,this.formControlController.setValidity(e),this.validationInput.hidden=!0,clearTimeout(this.validationTimeout),e||(this.validationInput.hidden=!1,this.validationInput.reportValidity(),this.validationTimeout=setTimeout(()=>this.validationInput.hidden=!0,1e4)),e}setCustomValidity(e=``){this.customValidityMessage=e,this.errorMessage=e,this.validationInput.setCustomValidity(e),this.formControlController.updateValidity()}focus(e){let t=this.getAllRadios(),n=t.find(e=>e.checked),r=t.find(e=>!e.disabled),i=n||r;i&&i.focus(e)}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=S`
      <slot @slotchange=${this.syncRadios} @click=${this.handleRadioClick} @keydown=${this.handleKeyDown}></slot>
    `;return S`
      <fieldset
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--radio-group":!0,"form-control--has-label":n,"form-control--has-help-text":r})}
        role="radiogroup"
        aria-labelledby="label"
        aria-describedby="help-text"
        aria-errormessage="error-message"
      >
        <label
          part="form-control-label"
          id="label"
          class="form-control__label"
          aria-hidden=${n?`false`:`true`}
          @click=${this.handleLabelClick}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div class="visually-hidden">
            <div id="error-message" aria-live="assertive">${this.errorMessage}</div>
            <label class="radio-group__validation">
              <input
                type="text"
                class="radio-group__validation-input"
                ?required=${this.required}
                tabindex="-1"
                hidden
                @invalid=${this.handleInvalid}
              />
            </label>
          </div>

          ${this.hasButtonGroup?S`
                <sl-button-group part="button-group" exportparts="base:button-group__base" role="presentation">
                  ${i}
                </sl-button-group>
              `:i}
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </fieldset>
    `}};Ia.styles=[T,Dt,Ma],Ia.dependencies={"sl-button-group":Pa},y([O(`slot:not([name])`)],Ia.prototype,`defaultSlot`,2),y([O(`.radio-group__validation-input`)],Ia.prototype,`validationInput`,2),y([D()],Ia.prototype,`hasButtonGroup`,2),y([D()],Ia.prototype,`errorMessage`,2),y([D()],Ia.prototype,`defaultValue`,2),y([E()],Ia.prototype,`label`,2),y([E({attribute:`help-text`})],Ia.prototype,`helpText`,2),y([E()],Ia.prototype,`name`,2),y([E({reflect:!0})],Ia.prototype,`value`,2),y([E({reflect:!0})],Ia.prototype,`size`,2),y([E({reflect:!0})],Ia.prototype,`form`,2),y([E({type:Boolean,reflect:!0})],Ia.prototype,`required`,2),y([w(`size`,{waitUntilFirstUpdate:!0})],Ia.prototype,`handleSizeChange`,1),y([w(`value`)],Ia.prototype,`handleValueChange`,1),Ia.define(`sl-radio-group`);var La=x`
  :host {
    --size: 128px;
    --track-width: 4px;
    --track-color: var(--sl-color-neutral-200);
    --indicator-width: var(--track-width);
    --indicator-color: var(--sl-color-primary-600);
    --indicator-transition-duration: 0.35s;

    display: inline-flex;
  }

  .progress-ring {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
  }

  .progress-ring__image {
    width: var(--size);
    height: var(--size);
    rotate: -90deg;
    transform-origin: 50% 50%;
  }

  .progress-ring__track,
  .progress-ring__indicator {
    --radius: calc(var(--size) / 2 - max(var(--track-width), var(--indicator-width)) * 0.5);
    --circumference: calc(var(--radius) * 2 * 3.141592654);

    fill: none;
    r: var(--radius);
    cx: calc(var(--size) / 2);
    cy: calc(var(--size) / 2);
  }

  .progress-ring__track {
    stroke: var(--track-color);
    stroke-width: var(--track-width);
  }

  .progress-ring__indicator {
    stroke: var(--indicator-color);
    stroke-width: var(--indicator-width);
    stroke-linecap: round;
    transition-property: stroke-dashoffset;
    transition-duration: var(--indicator-transition-duration);
    stroke-dasharray: var(--circumference) var(--circumference);
    stroke-dashoffset: calc(var(--circumference) - var(--percentage) * var(--circumference));
  }

  .progress-ring__label {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    text-align: center;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ra=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.label=``}updated(e){if(super.updated(e),e.has(`value`)){let e=parseFloat(getComputedStyle(this.indicator).getPropertyValue(`r`)),t=2*Math.PI*e;this.indicatorOffset=`${t-this.value/100*t}px`}}render(){return S`
      <div
        part="base"
        class="progress-ring"
        role="progressbar"
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-describedby="label"
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow="${this.value}"
        style="--percentage: ${this.value/100}"
      >
        <svg class="progress-ring__image">
          <circle class="progress-ring__track"></circle>
          <circle class="progress-ring__indicator" style="stroke-dashoffset: ${this.indicatorOffset}"></circle>
        </svg>

        <slot id="label" part="label" class="progress-ring__label"></slot>
      </div>
    `}};Ra.styles=[T,La],y([O(`.progress-ring__indicator`)],Ra.prototype,`indicator`,2),y([D()],Ra.prototype,`indicatorOffset`,2),y([E({type:Number,reflect:!0})],Ra.prototype,`value`,2),y([E()],Ra.prototype,`label`,2),Ra.define(`sl-progress-ring`);var za=x`
  :host {
    display: inline-block;
  }
`,Ba=null,Va=class{};Va.render=function(e,t){Ba(e,t)},self.QrCreator=Va,(function(e){function t(t,n,r,i){var a={},o=e(r,n);o.u(t),o.J(),i||=0;var s=o.h(),c=o.h()+2*i;return a.text=t,a.level=n,a.version=r,a.O=c,a.a=function(e,t){return e-=i,t-=i,0>e||e>=s||0>t||t>=s?!1:o.a(e,t)},a}function n(e,t,n,r,i,a,o,s,c,l){function u(t,n,r,i,o,s,c){t?(e.lineTo(n+s,r+c),e.arcTo(n,r,i,o,a)):e.lineTo(n,r)}o?e.moveTo(t+a,n):e.moveTo(t,n),u(s,r,n,r,i,-a,0),u(c,r,i,t,i,0,-a),u(l,t,i,t,n,a,0),u(o,t,n,r,n,0,a)}function r(e,t,n,r,i,a,o,s,c,l){function u(t,n,r,i){e.moveTo(t+r,n),e.lineTo(t,n),e.lineTo(t,n+i),e.arcTo(t,n,t+r,n,a)}o&&u(t,n,a,a),s&&u(r,n,-a,a),c&&u(r,i,-a,-a),l&&u(t,i,a,-a)}function i(e,t){var n=t.fill;if(typeof n==`string`)e.fillStyle=n;else{var r=n.type,i=n.colorStops;if(n=n.position.map(e=>Math.round(e*t.size)),r===`linear-gradient`)var a=e.createLinearGradient.apply(e,n);else if(r===`radial-gradient`)a=e.createRadialGradient.apply(e,n);else throw Error(`Unsupported fill`);i.forEach(([e,t])=>{a.addColorStop(e,t)}),e.fillStyle=a}}function a(e,a){a:{var o=a.text,s=a.v,c=a.N,l=a.K,u=a.P;for(c=Math.max(1,c||1),l=Math.min(40,l||40);c<=l;c+=1)try{var d=t(o,s,c,u);break a}catch{}d=void 0}if(!d)return null;for(o=e.getContext(`2d`),a.background&&(o.fillStyle=a.background,o.fillRect(a.left,a.top,a.size,a.size)),s=d.O,l=a.size/s,o.beginPath(),u=0;u<s;u+=1)for(c=0;c<s;c+=1){var f=o,p=a.left+c*l,m=a.top+u*l,h=u,g=c,_=d.a,v=p+l,y=m+l,ee=h-1,b=h+1,te=g-1,ne=g+1,re=Math.floor(Math.min(.5,Math.max(0,a.R))*l),ie=_(h,g),ae=_(ee,te),oe=_(ee,g);ee=_(ee,ne);var se=_(h,ne);ne=_(b,ne),g=_(b,g),b=_(b,te),h=_(h,te),p=Math.round(p),m=Math.round(m),v=Math.round(v),y=Math.round(y),ie?n(f,p,m,v,y,re,!oe&&!h,!oe&&!se,!g&&!se,!g&&!h):r(f,p,m,v,y,re,oe&&h&&ae,oe&&se&&ee,g&&se&&ne,g&&h&&b)}return i(o,a),o.fill(),e}var o={minVersion:1,maxVersion:40,ecLevel:`L`,left:0,top:0,size:200,fill:`#000`,background:null,text:`no text`,radius:.5,quiet:0};Ba=function(e,t){var n={};Object.assign(n,o,e),n.N=n.minVersion,n.K=n.maxVersion,n.v=n.ecLevel,n.left=n.left,n.top=n.top,n.size=n.size,n.fill=n.fill,n.background=n.background,n.text=n.text,n.R=n.radius,n.P=n.quiet,t instanceof HTMLCanvasElement?((t.width!==n.size||t.height!==n.size)&&(t.width=n.size,t.height=n.size),t.getContext(`2d`).clearRect(0,0,t.width,t.height),a(t,n)):(e=document.createElement(`canvas`),e.width=n.size,e.height=n.size,n=a(e,n),t.appendChild(n))}})(function(){function e(e){var t=n.s(e);return{S:function(){return 4},b:function(){return t.length},write:function(e){for(var n=0;n<t.length;n+=1)e.put(t[n],8)}}}function t(){var e=[],t=0,n={B:function(){return e},c:function(t){return(e[Math.floor(t/8)]>>>7-t%8&1)==1},put:function(e,t){for(var r=0;r<t;r+=1)n.m((e>>>t-r-1&1)==1)},f:function(){return t},m:function(n){var r=Math.floor(t/8);e.length<=r&&e.push(0),n&&(e[r]|=128>>>t%8),t+=1}};return n}function n(n,o){function c(e,t){for(var n=-1;7>=n;n+=1)if(!(-1>=e+n||f<=e+n))for(var r=-1;7>=r;r+=1)-1>=t+r||f<=t+r||(d[e+n][t+r]=0<=n&&6>=n&&(r==0||r==6)||0<=r&&6>=r&&(n==0||n==6)||2<=n&&4>=n&&2<=r&&4>=r)}function l(e,i){for(var o=f=4*n+17,l=Array(o),h=0;h<o;h+=1){l[h]=Array(o);for(var g=0;g<o;g+=1)l[h][g]=null}for(d=l,c(0,0),c(f-7,0),c(0,f-7),o=a.G(n),l=0;l<o.length;l+=1)for(h=0;h<o.length;h+=1){g=o[l];var _=o[h];if(d[g][_]==null)for(var v=-2;2>=v;v+=1)for(var y=-2;2>=y;y+=1)d[g+v][_+y]=v==-2||v==2||y==-2||y==2||v==0&&y==0}for(o=8;o<f-8;o+=1)d[o][6]??(d[o][6]=o%2==0);for(o=8;o<f-8;o+=1)d[6][o]??(d[6][o]=o%2==0);for(o=a.w(u<<3|i),l=0;15>l;l+=1)h=!e&&(o>>l&1)==1,d[6>l?l:8>l?l+1:f-15+l][8]=h,d[8][8>l?f-l-1:9>l?15-l:14-l]=h;if(d[f-8][8]=!e,7<=n){for(o=a.A(n),l=0;18>l;l+=1)h=!e&&(o>>l&1)==1,d[Math.floor(l/3)][l%3+f-8-3]=h;for(l=0;18>l;l+=1)h=!e&&(o>>l&1)==1,d[l%3+f-8-3][Math.floor(l/3)]=h}if(p==null){for(e=s.I(n,u),o=t(),l=0;l<m.length;l+=1)h=m[l],o.put(4,4),o.put(h.b(),a.f(4,n)),h.write(o);for(l=h=0;l<e.length;l+=1)h+=e[l].j;if(o.f()>8*h)throw Error(`code length overflow. (`+o.f()+`>`+8*h+`)`);for(o.f()+4<=8*h&&o.put(0,4);o.f()%8!=0;)o.m(!1);for(;!(o.f()>=8*h)&&(o.put(236,8),!(o.f()>=8*h));)o.put(17,8);var ee=0;for(h=l=0,g=Array(e.length),_=Array(e.length),v=0;v<e.length;v+=1){var b=e[v].j,te=e[v].o-b;for(l=Math.max(l,b),h=Math.max(h,te),g[v]=Array(b),y=0;y<g[v].length;y+=1)g[v][y]=255&o.B()[y+ee];for(ee+=b,y=a.C(te),b=r(g[v],y.b()-1).l(y),_[v]=Array(y.b()-1),y=0;y<_[v].length;y+=1)te=y+b.b()-_[v].length,_[v][y]=0<=te?b.c(te):0}for(y=o=0;y<e.length;y+=1)o+=e[y].o;for(o=Array(o),y=ee=0;y<l;y+=1)for(v=0;v<e.length;v+=1)y<g[v].length&&(o[ee]=g[v][y],ee+=1);for(y=0;y<h;y+=1)for(v=0;v<e.length;v+=1)y<_[v].length&&(o[ee]=_[v][y],ee+=1);p=o}for(e=p,o=-1,l=f-1,h=7,g=0,i=a.F(i),_=f-1;0<_;_-=2)for(_==6&&--_;;){for(v=0;2>v;v+=1)d[l][_-v]??(y=!1,g<e.length&&(y=(e[g]>>>h&1)==1),i(l,_-v)&&(y=!y),d[l][_-v]=y,--h,h==-1&&(g+=1,h=7));if(l+=o,0>l||f<=l){l-=o,o=-o;break}}}var u=i[o],d=null,f=0,p=null,m=[],h={u:function(t){t=e(t),m.push(t),p=null},a:function(e,t){if(0>e||f<=e||0>t||f<=t)throw Error(e+`,`+t);return d[e][t]},h:function(){return f},J:function(){for(var e=0,t=0,n=0;8>n;n+=1){l(!0,n);var r=a.D(h);(n==0||e>r)&&(e=r,t=n)}l(!1,t)}};return h}function r(e,t){if(e.length===void 0)throw Error(e.length+`/`+t);var n=function(){for(var n=0;n<e.length&&e[n]==0;)n+=1;for(var r=Array(e.length-n+t),i=0;i<e.length-n;i+=1)r[i]=e[i+n];return r}(),i={c:function(e){return n[e]},b:function(){return n.length},multiply:function(e){for(var t=Array(i.b()+e.b()-1),n=0;n<i.b();n+=1)for(var a=0;a<e.b();a+=1)t[n+a]^=o.i(o.g(i.c(n))+o.g(e.c(a)));return r(t,0)},l:function(e){if(0>i.b()-e.b())return i;for(var t=o.g(i.c(0))-o.g(e.c(0)),n=Array(i.b()),a=0;a<i.b();a+=1)n[a]=i.c(a);for(a=0;a<e.b();a+=1)n[a]^=o.i(o.g(e.c(a))+t);return r(n,0).l(e)}};return i}n.s=function(e){for(var t=[],n=0;n<e.length;n++){var r=e.charCodeAt(n);128>r?t.push(r):2048>r?t.push(192|r>>6,128|r&63):55296>r||57344<=r?t.push(224|r>>12,128|r>>6&63,128|r&63):(n++,r=65536+((r&1023)<<10|e.charCodeAt(n)&1023),t.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|r&63))}return t};var i={L:1,M:0,Q:3,H:2},a=function(){function e(e){for(var t=0;e!=0;)t+=1,e>>>=1;return t}var t=[[],[6,18],[6,22],[6,26],[6,30],[6,34],[6,22,38],[6,24,42],[6,26,46],[6,28,50],[6,30,54],[6,32,58],[6,34,62],[6,26,46,66],[6,26,48,70],[6,26,50,74],[6,30,54,78],[6,30,56,82],[6,30,58,86],[6,34,62,90],[6,28,50,72,94],[6,26,50,74,98],[6,30,54,78,102],[6,28,54,80,106],[6,32,58,84,110],[6,30,58,86,114],[6,34,62,90,118],[6,26,50,74,98,122],[6,30,54,78,102,126],[6,26,52,78,104,130],[6,30,56,82,108,134],[6,34,60,86,112,138],[6,30,58,86,114,142],[6,34,62,90,118,146],[6,30,54,78,102,126,150],[6,24,50,76,102,128,154],[6,28,54,80,106,132,158],[6,32,58,84,110,136,162],[6,26,54,82,110,138,166],[6,30,58,86,114,142,170]];return{w:function(t){for(var n=t<<10;0<=e(n)-e(1335);)n^=1335<<e(n)-e(1335);return(t<<10|n)^21522},A:function(t){for(var n=t<<12;0<=e(n)-e(7973);)n^=7973<<e(n)-e(7973);return t<<12|n},G:function(e){return t[e-1]},F:function(e){switch(e){case 0:return function(e,t){return(e+t)%2==0};case 1:return function(e){return e%2==0};case 2:return function(e,t){return t%3==0};case 3:return function(e,t){return(e+t)%3==0};case 4:return function(e,t){return(Math.floor(e/2)+Math.floor(t/3))%2==0};case 5:return function(e,t){return e*t%2+e*t%3==0};case 6:return function(e,t){return(e*t%2+e*t%3)%2==0};case 7:return function(e,t){return(e*t%3+(e+t)%2)%2==0};default:throw Error(`bad maskPattern:`+e)}},C:function(e){for(var t=r([1],0),n=0;n<e;n+=1)t=t.multiply(r([1,o.i(n)],0));return t},f:function(e,t){if(e!=4||1>t||40<t)throw Error(`mode: `+e+`; type: `+t);return 10>t?8:16},D:function(e){for(var t=e.h(),n=0,r=0;r<t;r+=1)for(var i=0;i<t;i+=1){for(var a=0,o=e.a(r,i),s=-1;1>=s;s+=1)if(!(0>r+s||t<=r+s))for(var c=-1;1>=c;c+=1)0>i+c||t<=i+c||(s!=0||c!=0)&&o==e.a(r+s,i+c)&&(a+=1);5<a&&(n+=3+a-5)}for(r=0;r<t-1;r+=1)for(i=0;i<t-1;i+=1)a=0,e.a(r,i)&&(a+=1),e.a(r+1,i)&&(a+=1),e.a(r,i+1)&&(a+=1),e.a(r+1,i+1)&&(a+=1),(a==0||a==4)&&(n+=3);for(r=0;r<t;r+=1)for(i=0;i<t-6;i+=1)e.a(r,i)&&!e.a(r,i+1)&&e.a(r,i+2)&&e.a(r,i+3)&&e.a(r,i+4)&&!e.a(r,i+5)&&e.a(r,i+6)&&(n+=40);for(i=0;i<t;i+=1)for(r=0;r<t-6;r+=1)e.a(r,i)&&!e.a(r+1,i)&&e.a(r+2,i)&&e.a(r+3,i)&&e.a(r+4,i)&&!e.a(r+5,i)&&e.a(r+6,i)&&(n+=40);for(i=a=0;i<t;i+=1)for(r=0;r<t;r+=1)e.a(r,i)&&(a+=1);return n+=Math.abs(100*a/t/t-50)/5*10}}}(),o=function(){for(var e=Array(256),t=Array(256),n=0;8>n;n+=1)e[n]=1<<n;for(n=8;256>n;n+=1)e[n]=e[n-4]^e[n-5]^e[n-6]^e[n-8];for(n=0;255>n;n+=1)t[e[n]]=n;return{g:function(e){if(1>e)throw Error(`glog(`+e+`)`);return t[e]},i:function(t){for(;0>t;)t+=255;for(;256<=t;)t-=255;return e[t]}}}(),s=function(){function e(e,n){switch(n){case i.L:return t[4*(e-1)];case i.M:return t[4*(e-1)+1];case i.Q:return t[4*(e-1)+2];case i.H:return t[4*(e-1)+3]}}var t=[[1,26,19],[1,26,16],[1,26,13],[1,26,9],[1,44,34],[1,44,28],[1,44,22],[1,44,16],[1,70,55],[1,70,44],[2,35,17],[2,35,13],[1,100,80],[2,50,32],[2,50,24],[4,25,9],[1,134,108],[2,67,43],[2,33,15,2,34,16],[2,33,11,2,34,12],[2,86,68],[4,43,27],[4,43,19],[4,43,15],[2,98,78],[4,49,31],[2,32,14,4,33,15],[4,39,13,1,40,14],[2,121,97],[2,60,38,2,61,39],[4,40,18,2,41,19],[4,40,14,2,41,15],[2,146,116],[3,58,36,2,59,37],[4,36,16,4,37,17],[4,36,12,4,37,13],[2,86,68,2,87,69],[4,69,43,1,70,44],[6,43,19,2,44,20],[6,43,15,2,44,16],[4,101,81],[1,80,50,4,81,51],[4,50,22,4,51,23],[3,36,12,8,37,13],[2,116,92,2,117,93],[6,58,36,2,59,37],[4,46,20,6,47,21],[7,42,14,4,43,15],[4,133,107],[8,59,37,1,60,38],[8,44,20,4,45,21],[12,33,11,4,34,12],[3,145,115,1,146,116],[4,64,40,5,65,41],[11,36,16,5,37,17],[11,36,12,5,37,13],[5,109,87,1,110,88],[5,65,41,5,66,42],[5,54,24,7,55,25],[11,36,12,7,37,13],[5,122,98,1,123,99],[7,73,45,3,74,46],[15,43,19,2,44,20],[3,45,15,13,46,16],[1,135,107,5,136,108],[10,74,46,1,75,47],[1,50,22,15,51,23],[2,42,14,17,43,15],[5,150,120,1,151,121],[9,69,43,4,70,44],[17,50,22,1,51,23],[2,42,14,19,43,15],[3,141,113,4,142,114],[3,70,44,11,71,45],[17,47,21,4,48,22],[9,39,13,16,40,14],[3,135,107,5,136,108],[3,67,41,13,68,42],[15,54,24,5,55,25],[15,43,15,10,44,16],[4,144,116,4,145,117],[17,68,42],[17,50,22,6,51,23],[19,46,16,6,47,17],[2,139,111,7,140,112],[17,74,46],[7,54,24,16,55,25],[34,37,13],[4,151,121,5,152,122],[4,75,47,14,76,48],[11,54,24,14,55,25],[16,45,15,14,46,16],[6,147,117,4,148,118],[6,73,45,14,74,46],[11,54,24,16,55,25],[30,46,16,2,47,17],[8,132,106,4,133,107],[8,75,47,13,76,48],[7,54,24,22,55,25],[22,45,15,13,46,16],[10,142,114,2,143,115],[19,74,46,4,75,47],[28,50,22,6,51,23],[33,46,16,4,47,17],[8,152,122,4,153,123],[22,73,45,3,74,46],[8,53,23,26,54,24],[12,45,15,28,46,16],[3,147,117,10,148,118],[3,73,45,23,74,46],[4,54,24,31,55,25],[11,45,15,31,46,16],[7,146,116,7,147,117],[21,73,45,7,74,46],[1,53,23,37,54,24],[19,45,15,26,46,16],[5,145,115,10,146,116],[19,75,47,10,76,48],[15,54,24,25,55,25],[23,45,15,25,46,16],[13,145,115,3,146,116],[2,74,46,29,75,47],[42,54,24,1,55,25],[23,45,15,28,46,16],[17,145,115],[10,74,46,23,75,47],[10,54,24,35,55,25],[19,45,15,35,46,16],[17,145,115,1,146,116],[14,74,46,21,75,47],[29,54,24,19,55,25],[11,45,15,46,46,16],[13,145,115,6,146,116],[14,74,46,23,75,47],[44,54,24,7,55,25],[59,46,16,1,47,17],[12,151,121,7,152,122],[12,75,47,26,76,48],[39,54,24,14,55,25],[22,45,15,41,46,16],[6,151,121,14,152,122],[6,75,47,34,76,48],[46,54,24,10,55,25],[2,45,15,64,46,16],[17,152,122,4,153,123],[29,74,46,14,75,47],[49,54,24,10,55,25],[24,45,15,46,46,16],[4,152,122,18,153,123],[13,74,46,32,75,47],[48,54,24,14,55,25],[42,45,15,32,46,16],[20,147,117,4,148,118],[40,75,47,7,76,48],[43,54,24,22,55,25],[10,45,15,67,46,16],[19,148,118,6,149,119],[18,75,47,31,76,48],[34,54,24,34,55,25],[20,45,15,61,46,16]];return{I:function(t,n){var r=e(t,n);if(r===void 0)throw Error(`bad rs block @ typeNumber:`+t+`/errorCorrectLevel:`+n);t=r.length/3,n=[];for(var i=0;i<t;i+=1)for(var a=r[3*i],o=r[3*i+1],s=r[3*i+2],c=0;c<a;c+=1){var l=s,u={};u.o=o,u.j=l,n.push(u)}return n}}}();return n}());var Ha=QrCreator,Ua=class extends k{constructor(){super(...arguments),this.value=``,this.label=``,this.size=128,this.fill=`black`,this.background=`white`,this.radius=0,this.errorCorrection=`H`}firstUpdated(){this.generate()}generate(){this.hasUpdated&&Ha.render({text:this.value,radius:this.radius,ecLevel:this.errorCorrection,fill:this.fill,background:this.background,size:this.size*2},this.canvas)}render(){return S`
      <canvas
        part="base"
        class="qr-code"
        role="img"
        aria-label=${this.label?.length>0?this.label:this.value}
        style=${wa({width:`${this.size}px`,height:`${this.size}px`})}
      ></canvas>
    `}};Ua.styles=[T,za],y([O(`canvas`)],Ua.prototype,`canvas`,2),y([E()],Ua.prototype,`value`,2),y([E()],Ua.prototype,`label`,2),y([E({type:Number})],Ua.prototype,`size`,2),y([E()],Ua.prototype,`fill`,2),y([E()],Ua.prototype,`background`,2),y([E({type:Number})],Ua.prototype,`radius`,2),y([E({attribute:`error-correction`})],Ua.prototype,`errorCorrection`,2),y([w([`background`,`errorCorrection`,`fill`,`radius`,`size`,`value`])],Ua.prototype,`generate`,1),Ua.define(`sl-qr-code`);var Wa=x`
  :host {
    display: block;
  }

  :host(:focus-visible) {
    outline: 0px;
  }

  .radio {
    display: inline-flex;
    align-items: top;
    font-family: var(--sl-input-font-family);
    font-size: var(--sl-input-font-size-medium);
    font-weight: var(--sl-input-font-weight);
    color: var(--sl-input-label-color);
    vertical-align: middle;
    cursor: pointer;
  }

  .radio--small {
    --toggle-size: var(--sl-toggle-size-small);
    font-size: var(--sl-input-font-size-small);
  }

  .radio--medium {
    --toggle-size: var(--sl-toggle-size-medium);
    font-size: var(--sl-input-font-size-medium);
  }

  .radio--large {
    --toggle-size: var(--sl-toggle-size-large);
    font-size: var(--sl-input-font-size-large);
  }

  .radio__checked-icon {
    display: inline-flex;
    width: var(--toggle-size);
    height: var(--toggle-size);
  }

  .radio__control {
    flex: 0 0 auto;
    position: relative;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    width: var(--toggle-size);
    height: var(--toggle-size);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
    border-radius: 50%;
    background-color: var(--sl-input-background-color);
    color: transparent;
    transition:
      var(--sl-transition-fast) border-color,
      var(--sl-transition-fast) background-color,
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) box-shadow;
  }

  .radio__input {
    position: absolute;
    opacity: 0;
    padding: 0;
    margin: 0;
    pointer-events: none;
  }

  /* Hover */
  .radio:not(.radio--checked):not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-input-border-color-hover);
    background-color: var(--sl-input-background-color-hover);
  }

  /* Checked */
  .radio--checked .radio__control {
    color: var(--sl-color-neutral-0);
    border-color: var(--sl-color-primary-600);
    background-color: var(--sl-color-primary-600);
  }

  /* Checked + hover */
  .radio.radio--checked:not(.radio--disabled) .radio__control:hover {
    border-color: var(--sl-color-primary-500);
    background-color: var(--sl-color-primary-500);
  }

  /* Checked + focus */
  :host(:focus-visible) .radio__control {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  /* Disabled */
  .radio--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  /* When the control isn't checked, hide the circle for Windows High Contrast mode a11y */
  .radio:not(.radio--checked) svg circle {
    opacity: 0;
  }

  .radio__label {
    display: inline-block;
    color: var(--sl-input-label-color);
    line-height: var(--toggle-size);
    margin-inline-start: 0.5em;
    user-select: none;
    -webkit-user-select: none;
  }
`,Ga=class extends k{constructor(){super(),this.checked=!1,this.hasFocus=!1,this.size=`medium`,this.disabled=!1,this.handleBlur=()=>{this.hasFocus=!1,this.emit(`sl-blur`)},this.handleClick=()=>{this.disabled||(this.checked=!0)},this.handleFocus=()=>{this.hasFocus=!0,this.emit(`sl-focus`)},this.addEventListener(`blur`,this.handleBlur),this.addEventListener(`click`,this.handleClick),this.addEventListener(`focus`,this.handleFocus)}connectedCallback(){super.connectedCallback(),this.setInitialAttributes()}setInitialAttributes(){this.setAttribute(`role`,`radio`),this.setAttribute(`tabindex`,`-1`),this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleCheckedChange(){this.setAttribute(`aria-checked`,this.checked?`true`:`false`),this.setAttribute(`tabindex`,this.checked?`0`:`-1`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}render(){return S`
      <span
        part="base"
        class=${j({radio:!0,"radio--checked":this.checked,"radio--disabled":this.disabled,"radio--focused":this.hasFocus,"radio--small":this.size===`small`,"radio--medium":this.size===`medium`,"radio--large":this.size===`large`})}
      >
        <span part="${`control${this.checked?` control--checked`:``}`}" class="radio__control">
          ${this.checked?S` <sl-icon part="checked-icon" class="radio__checked-icon" library="system" name="radio"></sl-icon> `:``}
        </span>

        <slot part="label" class="radio__label"></slot>
      </span>
    `}};Ga.styles=[T,Wa],Ga.dependencies={"sl-icon":A},y([D()],Ga.prototype,`checked`,2),y([D()],Ga.prototype,`hasFocus`,2),y([E()],Ga.prototype,`value`,2),y([E({reflect:!0})],Ga.prototype,`size`,2),y([E({type:Boolean,reflect:!0})],Ga.prototype,`disabled`,2),y([w(`checked`)],Ga.prototype,`handleCheckedChange`,1),y([w(`disabled`,{waitUntilFirstUpdate:!0})],Ga.prototype,`handleDisabledChange`,1),Ga.define(`sl-radio`);var Ka=x`
  :host {
    display: block;
    user-select: none;
    -webkit-user-select: none;
  }

  :host(:focus) {
    outline: none;
  }

  .option {
    position: relative;
    display: flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-x-small) var(--sl-spacing-medium) var(--sl-spacing-x-small) var(--sl-spacing-x-small);
    transition: var(--sl-transition-fast) fill;
    cursor: pointer;
  }

  .option--hover:not(.option--current):not(.option--disabled) {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  .option--current,
  .option--current.option--disabled {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .option--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .option__label {
    flex: 1 1 auto;
    display: inline-block;
    line-height: var(--sl-line-height-dense);
  }

  .option .option__check {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    visibility: hidden;
    padding-inline-end: var(--sl-spacing-2x-small);
  }

  .option--selected .option__check {
    visibility: visible;
  }

  .option__prefix,
  .option__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .option__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .option__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .option {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }
`,qa=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.isInitialized=!1,this.current=!1,this.selected=!1,this.hasHover=!1,this.value=``,this.disabled=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`option`),this.setAttribute(`aria-selected`,`false`)}handleDefaultSlotChange(){this.isInitialized?customElements.whenDefined(`sl-select`).then(()=>{let e=this.closest(`sl-select`);e&&e.handleDefaultSlotChange()}):this.isInitialized=!0}handleMouseEnter(){this.hasHover=!0}handleMouseLeave(){this.hasHover=!1}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleSelectedChange(){this.setAttribute(`aria-selected`,this.selected?`true`:`false`)}handleValueChange(){typeof this.value!=`string`&&(this.value=String(this.value)),this.value.includes(` `)&&(console.error(`Option values cannot include a space. All spaces have been replaced with underscores.`,this),this.value=this.value.replace(/ /g,`_`))}getTextLabel(){let e=this.childNodes,t=``;return[...e].forEach(e=>{e.nodeType===Node.ELEMENT_NODE&&(e.hasAttribute(`slot`)||(t+=e.textContent)),e.nodeType===Node.TEXT_NODE&&(t+=e.textContent)}),t.trim()}render(){return S`
      <div
        part="base"
        class=${j({option:!0,"option--current":this.current,"option--disabled":this.disabled,"option--selected":this.selected,"option--hover":this.hasHover})}
        @mouseenter=${this.handleMouseEnter}
        @mouseleave=${this.handleMouseLeave}
      >
        <sl-icon part="checked-icon" class="option__check" name="check" library="system" aria-hidden="true"></sl-icon>
        <slot part="prefix" name="prefix" class="option__prefix"></slot>
        <slot part="label" class="option__label" @slotchange=${this.handleDefaultSlotChange}></slot>
        <slot part="suffix" name="suffix" class="option__suffix"></slot>
      </div>
    `}};qa.styles=[T,Ka],qa.dependencies={"sl-icon":A},y([O(`.option__label`)],qa.prototype,`defaultSlot`,2),y([D()],qa.prototype,`current`,2),y([D()],qa.prototype,`selected`,2),y([D()],qa.prototype,`hasHover`,2),y([E({reflect:!0})],qa.prototype,`value`,2),y([E({type:Boolean,reflect:!0})],qa.prototype,`disabled`,2),y([w(`disabled`)],qa.prototype,`handleDisabledChange`,1),y([w(`selected`)],qa.prototype,`handleSelectedChange`,1),y([w(`value`)],qa.prototype,`handleValueChange`,1),qa.define(`sl-option`),R.define(`sl-popup`);var Ja=x`
  :host {
    --height: 1rem;
    --track-color: var(--sl-color-neutral-200);
    --indicator-color: var(--sl-color-primary-600);
    --label-color: var(--sl-color-neutral-0);

    display: block;
  }

  .progress-bar {
    position: relative;
    background-color: var(--track-color);
    height: var(--height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset var(--sl-shadow-small);
    overflow: hidden;
  }

  .progress-bar__indicator {
    height: 100%;
    font-family: var(--sl-font-sans);
    font-size: 12px;
    font-weight: var(--sl-font-weight-normal);
    background-color: var(--indicator-color);
    color: var(--label-color);
    text-align: center;
    line-height: var(--height);
    white-space: nowrap;
    overflow: hidden;
    transition:
      400ms width,
      400ms background-color;
    user-select: none;
    -webkit-user-select: none;
  }

  /* Indeterminate */
  .progress-bar--indeterminate .progress-bar__indicator {
    position: absolute;
    animation: indeterminate 2.5s infinite cubic-bezier(0.37, 0, 0.63, 1);
  }

  .progress-bar--indeterminate.progress-bar--rtl .progress-bar__indicator {
    animation-name: indeterminate-rtl;
  }

  @media (forced-colors: active) {
    .progress-bar {
      outline: solid 1px SelectedItem;
      background-color: var(--sl-color-neutral-0);
    }

    .progress-bar__indicator {
      outline: solid 1px SelectedItem;
      background-color: SelectedItem;
    }
  }

  @keyframes indeterminate {
    0% {
      left: -50%;
      width: 50%;
    }
    75%,
    100% {
      left: 100%;
      width: 50%;
    }
  }

  @keyframes indeterminate-rtl {
    0% {
      right: -50%;
      width: 50%;
    }
    75%,
    100% {
      right: 100%;
      width: 50%;
    }
  }
`,Ya=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.indeterminate=!1,this.label=``}render(){return S`
      <div
        part="base"
        class=${j({"progress-bar":!0,"progress-bar--indeterminate":this.indeterminate,"progress-bar--rtl":this.localize.dir()===`rtl`})}
        role="progressbar"
        title=${M(this.title)}
        aria-label=${this.label.length>0?this.label:this.localize.term(`progress`)}
        aria-valuemin="0"
        aria-valuemax="100"
        aria-valuenow=${this.indeterminate?0:this.value}
      >
        <div part="indicator" class="progress-bar__indicator" style=${wa({width:`${this.value}%`})}>
          ${this.indeterminate?``:S` <slot part="label" class="progress-bar__label"></slot> `}
        </div>
      </div>
    `}};Ya.styles=[T,Ja],y([E({type:Number,reflect:!0})],Ya.prototype,`value`,2),y([E({type:Boolean,reflect:!0})],Ya.prototype,`indeterminate`,2),y([E()],Ya.prototype,`label`,2),Ya.define(`sl-progress-bar`);var Xa=x`
  :host {
    display: block;
  }

  .menu-label {
    display: inline-block;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-500);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-x-large);
    user-select: none;
    -webkit-user-select: none;
  }
`,Za=class extends k{render(){return S` <slot part="base" class="menu-label"></slot> `}};Za.styles=[T,Xa],Za.define(`sl-menu-label`);var Qa=x`
  :host {
    display: contents;
  }
`,$a=class extends k{constructor(){super(...arguments),this.attrOldValue=!1,this.charData=!1,this.charDataOldValue=!1,this.childList=!1,this.disabled=!1,this.handleMutation=e=>{this.emit(`sl-mutation`,{detail:{mutationList:e}})}}connectedCallback(){super.connectedCallback(),this.mutationObserver=new MutationObserver(this.handleMutation),this.disabled||this.startObserver()}disconnectedCallback(){super.disconnectedCallback(),this.stopObserver()}startObserver(){let e=typeof this.attr==`string`&&this.attr.length>0,t=e&&this.attr!==`*`?this.attr.split(` `):void 0;try{this.mutationObserver.observe(this,{subtree:!0,childList:this.childList,attributes:e,attributeFilter:t,attributeOldValue:this.attrOldValue,characterData:this.charData,characterDataOldValue:this.charDataOldValue})}catch{}}stopObserver(){this.mutationObserver.disconnect()}handleDisabledChange(){this.disabled?this.stopObserver():this.startObserver()}handleChange(){this.stopObserver(),this.startObserver()}render(){return S` <slot></slot> `}};$a.styles=[T,Qa],y([E({reflect:!0})],$a.prototype,`attr`,2),y([E({attribute:`attr-old-value`,type:Boolean,reflect:!0})],$a.prototype,`attrOldValue`,2),y([E({attribute:`char-data`,type:Boolean,reflect:!0})],$a.prototype,`charData`,2),y([E({attribute:`char-data-old-value`,type:Boolean,reflect:!0})],$a.prototype,`charDataOldValue`,2),y([E({attribute:`child-list`,type:Boolean,reflect:!0})],$a.prototype,`childList`,2),y([E({type:Boolean,reflect:!0})],$a.prototype,`disabled`,2),y([w(`disabled`)],$a.prototype,`handleDisabledChange`,1),y([w(`attr`,{waitUntilFirstUpdate:!0}),w(`attr-old-value`,{waitUntilFirstUpdate:!0}),w(`char-data`,{waitUntilFirstUpdate:!0}),w(`char-data-old-value`,{waitUntilFirstUpdate:!0}),w(`childList`,{waitUntilFirstUpdate:!0})],$a.prototype,`handleChange`,1),$a.define(`sl-mutation-observer`);var eo=x`
  :host {
    display: block;
  }

  .input {
    flex: 1 1 auto;
    display: inline-flex;
    align-items: stretch;
    justify-content: start;
    position: relative;
    width: 100%;
    font-family: var(--sl-input-font-family);
    font-weight: var(--sl-input-font-weight);
    letter-spacing: var(--sl-input-letter-spacing);
    vertical-align: middle;
    overflow: hidden;
    cursor: text;
    transition:
      var(--sl-transition-fast) color,
      var(--sl-transition-fast) border,
      var(--sl-transition-fast) box-shadow,
      var(--sl-transition-fast) background-color;
  }

  /* Standard inputs */
  .input--standard {
    background-color: var(--sl-input-background-color);
    border: solid var(--sl-input-border-width) var(--sl-input-border-color);
  }

  .input--standard:hover:not(.input--disabled) {
    background-color: var(--sl-input-background-color-hover);
    border-color: var(--sl-input-border-color-hover);
  }

  .input--standard.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-background-color-focus);
    border-color: var(--sl-input-border-color-focus);
    box-shadow: 0 0 0 var(--sl-focus-ring-width) var(--sl-input-focus-ring-color);
  }

  .input--standard.input--focused:not(.input--disabled) .input__control {
    color: var(--sl-input-color-focus);
  }

  .input--standard.input--disabled {
    background-color: var(--sl-input-background-color-disabled);
    border-color: var(--sl-input-border-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input--standard.input--disabled .input__control {
    color: var(--sl-input-color-disabled);
  }

  .input--standard.input--disabled .input__control::placeholder {
    color: var(--sl-input-placeholder-color-disabled);
  }

  /* Filled inputs */
  .input--filled {
    border: none;
    background-color: var(--sl-input-filled-background-color);
    color: var(--sl-input-color);
  }

  .input--filled:hover:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-hover);
  }

  .input--filled.input--focused:not(.input--disabled) {
    background-color: var(--sl-input-filled-background-color-focus);
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .input--filled.input--disabled {
    background-color: var(--sl-input-filled-background-color-disabled);
    opacity: 0.5;
    cursor: not-allowed;
  }

  .input__control {
    flex: 1 1 auto;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    min-width: 0;
    height: 100%;
    color: var(--sl-input-color);
    border: none;
    background: inherit;
    box-shadow: none;
    padding: 0;
    margin: 0;
    cursor: inherit;
    -webkit-appearance: none;
  }

  .input__control::-webkit-search-decoration,
  .input__control::-webkit-search-cancel-button,
  .input__control::-webkit-search-results-button,
  .input__control::-webkit-search-results-decoration {
    -webkit-appearance: none;
  }

  .input__control:-webkit-autofill,
  .input__control:-webkit-autofill:hover,
  .input__control:-webkit-autofill:focus,
  .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-background-color-hover) inset !important;
    -webkit-text-fill-color: var(--sl-color-primary-500);
    caret-color: var(--sl-input-color);
  }

  .input--filled .input__control:-webkit-autofill,
  .input--filled .input__control:-webkit-autofill:hover,
  .input--filled .input__control:-webkit-autofill:focus,
  .input--filled .input__control:-webkit-autofill:active {
    box-shadow: 0 0 0 var(--sl-input-height-large) var(--sl-input-filled-background-color) inset !important;
  }

  .input__control::placeholder {
    color: var(--sl-input-placeholder-color);
    user-select: none;
    -webkit-user-select: none;
  }

  .input:hover:not(.input--disabled) .input__control {
    color: var(--sl-input-color-hover);
  }

  .input__control:focus {
    outline: none;
  }

  .input__prefix,
  .input__suffix {
    display: inline-flex;
    flex: 0 0 auto;
    align-items: center;
    cursor: default;
  }

  .input__prefix ::slotted(sl-icon),
  .input__suffix ::slotted(sl-icon) {
    color: var(--sl-input-icon-color);
  }

  /*
   * Size modifiers
   */

  .input--small {
    border-radius: var(--sl-input-border-radius-small);
    font-size: var(--sl-input-font-size-small);
    height: var(--sl-input-height-small);
  }

  .input--small .input__control {
    height: calc(var(--sl-input-height-small) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-small);
  }

  .input--small .input__clear,
  .input--small .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-small) * 2);
  }

  .input--small .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-small);
  }

  .input--small .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-small);
  }

  .input--medium {
    border-radius: var(--sl-input-border-radius-medium);
    font-size: var(--sl-input-font-size-medium);
    height: var(--sl-input-height-medium);
  }

  .input--medium .input__control {
    height: calc(var(--sl-input-height-medium) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-medium);
  }

  .input--medium .input__clear,
  .input--medium .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-medium) * 2);
  }

  .input--medium .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-medium);
  }

  .input--medium .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-medium);
  }

  .input--large {
    border-radius: var(--sl-input-border-radius-large);
    font-size: var(--sl-input-font-size-large);
    height: var(--sl-input-height-large);
  }

  .input--large .input__control {
    height: calc(var(--sl-input-height-large) - var(--sl-input-border-width) * 2);
    padding: 0 var(--sl-input-spacing-large);
  }

  .input--large .input__clear,
  .input--large .input__password-toggle {
    width: calc(1em + var(--sl-input-spacing-large) * 2);
  }

  .input--large .input__prefix ::slotted(*) {
    margin-inline-start: var(--sl-input-spacing-large);
  }

  .input--large .input__suffix ::slotted(*) {
    margin-inline-end: var(--sl-input-spacing-large);
  }

  /*
   * Pill modifier
   */

  .input--pill.input--small {
    border-radius: var(--sl-input-height-small);
  }

  .input--pill.input--medium {
    border-radius: var(--sl-input-height-medium);
  }

  .input--pill.input--large {
    border-radius: var(--sl-input-height-large);
  }

  /*
   * Clearable + Password Toggle
   */

  .input__clear,
  .input__password-toggle {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: inherit;
    color: var(--sl-input-icon-color);
    border: none;
    background: none;
    padding: 0;
    transition: var(--sl-transition-fast) color;
    cursor: pointer;
  }

  .input__clear:hover,
  .input__password-toggle:hover {
    color: var(--sl-input-icon-color-hover);
  }

  .input__clear:focus,
  .input__password-toggle:focus {
    outline: none;
  }

  /* Don't show the browser's password toggle in Edge */
  ::-ms-reveal {
    display: none;
  }

  /* Hide the built-in number spinner */
  .input--no-spin-buttons input[type='number']::-webkit-outer-spin-button,
  .input--no-spin-buttons input[type='number']::-webkit-inner-spin-button {
    -webkit-appearance: none;
    display: none;
  }

  .input--no-spin-buttons input[type='number'] {
    -moz-appearance: textfield;
  }
`,H=class extends k{constructor(){super(...arguments),this.formControlController=new ue(this,{assumeInteractionOn:[`sl-blur`,`sl-input`]}),this.hasSlotController=new Ot(this,`help-text`,`label`),this.localize=new N(this),this.hasFocus=!1,this.title=``,this.__numberInput=Object.assign(document.createElement(`input`),{type:`number`}),this.__dateInput=Object.assign(document.createElement(`input`),{type:`date`}),this.type=`text`,this.name=``,this.value=``,this.defaultValue=``,this.size=`medium`,this.filled=!1,this.pill=!1,this.label=``,this.helpText=``,this.clearable=!1,this.disabled=!1,this.placeholder=``,this.readonly=!1,this.passwordToggle=!1,this.passwordVisible=!1,this.noSpinButtons=!1,this.form=``,this.required=!1,this.spellcheck=!0}get valueAsDate(){return this.__dateInput.type=this.type,this.__dateInput.value=this.value,this.input?.valueAsDate||this.__dateInput.valueAsDate}set valueAsDate(e){this.__dateInput.type=this.type,this.__dateInput.valueAsDate=e,this.value=this.__dateInput.value}get valueAsNumber(){return this.__numberInput.value=this.value,this.input?.valueAsNumber||this.__numberInput.valueAsNumber}set valueAsNumber(e){this.__numberInput.valueAsNumber=e,this.value=this.__numberInput.value}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleChange(){this.value=this.input.value,this.emit(`sl-change`)}handleClearClick(e){e.preventDefault(),this.value!==``&&(this.value=``,this.emit(`sl-clear`),this.emit(`sl-input`),this.emit(`sl-change`)),this.input.focus()}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleInput(){this.value=this.input.value,this.formControlController.updateValidity(),this.emit(`sl-input`)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleKeyDown(e){let t=e.metaKey||e.ctrlKey||e.shiftKey||e.altKey;e.key===`Enter`&&!t&&setTimeout(()=>{!e.defaultPrevented&&!e.isComposing&&this.formControlController.submit()})}handlePasswordToggle(){this.passwordVisible=!this.passwordVisible}handleDisabledChange(){this.formControlController.setValidity(this.disabled)}handleStepChange(){this.input.step=String(this.step),this.formControlController.updateValidity()}async handleValueChange(){await this.updateComplete,this.formControlController.updateValidity()}focus(e){this.input.focus(e)}blur(){this.input.blur()}select(){this.input.select()}setSelectionRange(e,t,n=`none`){this.input.setSelectionRange(e,t,n)}setRangeText(e,t,n,r=`preserve`){let i=t??this.input.selectionStart,a=n??this.input.selectionEnd;this.input.setRangeText(e,i,a,r),this.value!==this.input.value&&(this.value=this.input.value)}showPicker(){`showPicker`in HTMLInputElement.prototype&&this.input.showPicker()}stepUp(){this.input.stepUp(),this.value!==this.input.value&&(this.value=this.input.value)}stepDown(){this.input.stepDown(),this.value!==this.input.value&&(this.value=this.input.value)}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.hasSlotController.test(`label`),t=this.hasSlotController.test(`help-text`),n=this.label?!0:!!e,r=this.helpText?!0:!!t,i=this.clearable&&!this.disabled&&!this.readonly&&(typeof this.value==`number`||this.value.length>0);return S`
      <div
        part="form-control"
        class=${j({"form-control":!0,"form-control--small":this.size===`small`,"form-control--medium":this.size===`medium`,"form-control--large":this.size===`large`,"form-control--has-label":n,"form-control--has-help-text":r})}
      >
        <label
          part="form-control-label"
          class="form-control__label"
          for="input"
          aria-hidden=${n?`false`:`true`}
        >
          <slot name="label">${this.label}</slot>
        </label>

        <div part="form-control-input" class="form-control-input">
          <div
            part="base"
            class=${j({input:!0,"input--small":this.size===`small`,"input--medium":this.size===`medium`,"input--large":this.size===`large`,"input--pill":this.pill,"input--standard":!this.filled,"input--filled":this.filled,"input--disabled":this.disabled,"input--focused":this.hasFocus,"input--empty":!this.value,"input--no-spin-buttons":this.noSpinButtons})}
          >
            <span part="prefix" class="input__prefix">
              <slot name="prefix"></slot>
            </span>

            <input
              part="input"
              id="input"
              class="input__control"
              type=${this.type===`password`&&this.passwordVisible?`text`:this.type}
              title=${this.title}
              name=${M(this.name)}
              ?disabled=${this.disabled}
              ?readonly=${this.readonly}
              ?required=${this.required}
              placeholder=${M(this.placeholder)}
              minlength=${M(this.minlength)}
              maxlength=${M(this.maxlength)}
              min=${M(this.min)}
              max=${M(this.max)}
              step=${M(this.step)}
              .value=${on(this.value)}
              autocapitalize=${M(this.autocapitalize)}
              autocomplete=${M(this.autocomplete)}
              autocorrect=${M(this.autocorrect)}
              ?autofocus=${this.autofocus}
              spellcheck=${this.spellcheck}
              pattern=${M(this.pattern)}
              enterkeyhint=${M(this.enterkeyhint)}
              inputmode=${M(this.inputmode)}
              aria-describedby="help-text"
              @change=${this.handleChange}
              @input=${this.handleInput}
              @invalid=${this.handleInvalid}
              @keydown=${this.handleKeyDown}
              @focus=${this.handleFocus}
              @blur=${this.handleBlur}
            />

            ${i?S`
                  <button
                    part="clear-button"
                    class="input__clear"
                    type="button"
                    aria-label=${this.localize.term(`clearEntry`)}
                    @click=${this.handleClearClick}
                    tabindex="-1"
                  >
                    <slot name="clear-icon">
                      <sl-icon name="x-circle-fill" library="system"></sl-icon>
                    </slot>
                  </button>
                `:``}
            ${this.passwordToggle&&!this.disabled?S`
                  <button
                    part="password-toggle-button"
                    class="input__password-toggle"
                    type="button"
                    aria-label=${this.localize.term(this.passwordVisible?`hidePassword`:`showPassword`)}
                    @click=${this.handlePasswordToggle}
                    tabindex="-1"
                  >
                    ${this.passwordVisible?S`
                          <slot name="show-password-icon">
                            <sl-icon name="eye-slash" library="system"></sl-icon>
                          </slot>
                        `:S`
                          <slot name="hide-password-icon">
                            <sl-icon name="eye" library="system"></sl-icon>
                          </slot>
                        `}
                  </button>
                `:``}

            <span part="suffix" class="input__suffix">
              <slot name="suffix"></slot>
            </span>
          </div>
        </div>

        <div
          part="form-control-help-text"
          id="help-text"
          class="form-control__help-text"
          aria-hidden=${r?`false`:`true`}
        >
          <slot name="help-text">${this.helpText}</slot>
        </div>
      </div>
    `}};H.styles=[T,Dt,eo],H.dependencies={"sl-icon":A},y([O(`.input__control`)],H.prototype,`input`,2),y([D()],H.prototype,`hasFocus`,2),y([E()],H.prototype,`title`,2),y([E({reflect:!0})],H.prototype,`type`,2),y([E()],H.prototype,`name`,2),y([E()],H.prototype,`value`,2),y([Et()],H.prototype,`defaultValue`,2),y([E({reflect:!0})],H.prototype,`size`,2),y([E({type:Boolean,reflect:!0})],H.prototype,`filled`,2),y([E({type:Boolean,reflect:!0})],H.prototype,`pill`,2),y([E()],H.prototype,`label`,2),y([E({attribute:`help-text`})],H.prototype,`helpText`,2),y([E({type:Boolean})],H.prototype,`clearable`,2),y([E({type:Boolean,reflect:!0})],H.prototype,`disabled`,2),y([E()],H.prototype,`placeholder`,2),y([E({type:Boolean,reflect:!0})],H.prototype,`readonly`,2),y([E({attribute:`password-toggle`,type:Boolean})],H.prototype,`passwordToggle`,2),y([E({attribute:`password-visible`,type:Boolean})],H.prototype,`passwordVisible`,2),y([E({attribute:`no-spin-buttons`,type:Boolean})],H.prototype,`noSpinButtons`,2),y([E({reflect:!0})],H.prototype,`form`,2),y([E({type:Boolean,reflect:!0})],H.prototype,`required`,2),y([E()],H.prototype,`pattern`,2),y([E({type:Number})],H.prototype,`minlength`,2),y([E({type:Number})],H.prototype,`maxlength`,2),y([E()],H.prototype,`min`,2),y([E()],H.prototype,`max`,2),y([E()],H.prototype,`step`,2),y([E()],H.prototype,`autocapitalize`,2),y([E()],H.prototype,`autocorrect`,2),y([E()],H.prototype,`autocomplete`,2),y([E({type:Boolean})],H.prototype,`autofocus`,2),y([E()],H.prototype,`enterkeyhint`,2),y([E({type:Boolean,converter:{fromAttribute:e=>!(!e||e===`false`),toAttribute:e=>e?`true`:`false`}})],H.prototype,`spellcheck`,2),y([E()],H.prototype,`inputmode`,2),y([w(`disabled`,{waitUntilFirstUpdate:!0})],H.prototype,`handleDisabledChange`,1),y([w(`step`,{waitUntilFirstUpdate:!0})],H.prototype,`handleStepChange`,1),y([w(`value`,{waitUntilFirstUpdate:!0})],H.prototype,`handleValueChange`,1),H.define(`sl-input`);var to=x`
  :host {
    display: block;
    position: relative;
    background: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    padding: var(--sl-spacing-x-small) 0;
    overflow: auto;
    overscroll-behavior: none;
  }

  ::slotted(sl-divider) {
    --spacing: var(--sl-spacing-x-small);
  }
`,no=class extends k{connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`menu`)}handleClick(e){let t=[`menuitem`,`menuitemcheckbox`],n=e.composedPath(),r=n.find(e=>t.includes((e?.getAttribute)?.call(e,`role`)||``));if(!r||n.find(e=>(e?.getAttribute)?.call(e,`role`)===`menu`)!==this)return;let i=r;i.type===`checkbox`&&(i.checked=!i.checked),this.emit(`sl-select`,{detail:{item:i}})}handleKeyDown(e){if(e.key===`Enter`||e.key===` `){let t=this.getCurrentItem();e.preventDefault(),e.stopPropagation(),t?.click()}else if([`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)){let t=this.getAllItems(),n=this.getCurrentItem(),r=n?t.indexOf(n):0;t.length>0&&(e.preventDefault(),e.stopPropagation(),e.key===`ArrowDown`?r++:e.key===`ArrowUp`?r--:e.key===`Home`?r=0:e.key===`End`&&(r=t.length-1),r<0&&(r=t.length-1),r>t.length-1&&(r=0),this.setCurrentItem(t[r]),t[r].focus())}}handleMouseDown(e){let t=e.target;this.isMenuItem(t)&&this.setCurrentItem(t)}handleSlotChange(){let e=this.getAllItems();e.length>0&&this.setCurrentItem(e[0])}isMenuItem(e){return e.tagName.toLowerCase()===`sl-menu-item`||[`menuitem`,`menuitemcheckbox`,`menuitemradio`].includes(e.getAttribute(`role`)??``)}getAllItems(){return[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>!(e.inert||!this.isMenuItem(e)))}getCurrentItem(){return this.getAllItems().find(e=>e.getAttribute(`tabindex`)===`0`)}setCurrentItem(e){this.getAllItems().forEach(t=>{t.setAttribute(`tabindex`,t===e?`0`:`-1`)})}render(){return S`
      <slot
        @slotchange=${this.handleSlotChange}
        @click=${this.handleClick}
        @keydown=${this.handleKeyDown}
        @mousedown=${this.handleMouseDown}
      ></slot>
    `}};no.styles=[T,to],y([O(`slot`)],no.prototype,`defaultSlot`,2),no.define(`sl-menu`);var ro=x`
  :host {
    --submenu-offset: -2px;

    display: block;
  }

  :host([inert]) {
    display: none;
  }

  .menu-item {
    position: relative;
    display: flex;
    align-items: stretch;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    line-height: var(--sl-line-height-normal);
    letter-spacing: var(--sl-letter-spacing-normal);
    color: var(--sl-color-neutral-700);
    padding: var(--sl-spacing-2x-small) var(--sl-spacing-2x-small);
    transition: var(--sl-transition-fast) fill;
    user-select: none;
    -webkit-user-select: none;
    white-space: nowrap;
    cursor: pointer;
  }

  .menu-item.menu-item--disabled {
    outline: none;
    opacity: 0.5;
    cursor: not-allowed;
  }

  .menu-item.menu-item--loading {
    outline: none;
    cursor: wait;
  }

  .menu-item.menu-item--loading *:not(sl-spinner) {
    opacity: 0.5;
  }

  .menu-item--loading sl-spinner {
    --indicator-color: currentColor;
    --track-width: 1px;
    position: absolute;
    font-size: 0.75em;
    top: calc(50% - 0.5em);
    left: 0.65rem;
    opacity: 1;
  }

  .menu-item .menu-item__label {
    flex: 1 1 auto;
    display: inline-block;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .menu-item .menu-item__prefix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__prefix::slotted(*) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .menu-item .menu-item__suffix {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .menu-item .menu-item__suffix::slotted(*) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  /* Safe triangle */
  .menu-item--submenu-expanded::after {
    content: '';
    position: fixed;
    z-index: calc(var(--sl-z-index-dropdown) - 1);
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    clip-path: polygon(
      var(--safe-triangle-cursor-x, 0) var(--safe-triangle-cursor-y, 0),
      var(--safe-triangle-submenu-start-x, 0) var(--safe-triangle-submenu-start-y, 0),
      var(--safe-triangle-submenu-end-x, 0) var(--safe-triangle-submenu-end-y, 0)
    );
  }

  :host(:focus-visible) {
    outline: none;
  }

  :host(:hover:not([aria-disabled='true'], :focus-visible)) .menu-item,
  .menu-item--submenu-expanded {
    background-color: var(--sl-color-neutral-100);
    color: var(--sl-color-neutral-1000);
  }

  :host(:focus-visible) .menu-item {
    outline: none;
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
    opacity: 1;
  }

  .menu-item .menu-item__check,
  .menu-item .menu-item__chevron {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 1.5em;
    visibility: hidden;
  }

  .menu-item--checked .menu-item__check,
  .menu-item--has-submenu .menu-item__chevron {
    visibility: visible;
  }

  /* Add elevation and z-index to submenus */
  sl-popup::part(popup) {
    box-shadow: var(--sl-shadow-large);
    z-index: var(--sl-z-index-dropdown);
    margin-left: var(--submenu-offset);
  }

  .menu-item--rtl sl-popup::part(popup) {
    margin-left: calc(-1 * var(--submenu-offset));
  }

  @media (forced-colors: active) {
    :host(:hover:not([aria-disabled='true'])) .menu-item,
    :host(:focus-visible) .menu-item {
      outline: dashed 1px SelectedItem;
      outline-offset: -1px;
    }
  }

  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,io=(e,t)=>{let n=e._$AN;if(n===void 0)return!1;for(let e of n)e._$AO?.(t,!1),io(e,t);return!0},ao=e=>{let t,n;do{if((t=e._$AM)===void 0)break;n=t._$AN,n.delete(e),e=t}while(n?.size===0)},oo=e=>{for(let t;t=e._$AM;e=t){let n=t._$AN;if(n===void 0)t._$AN=n=new Set;else if(n.has(e))break;n.add(e),lo(t)}};function so(e){this._$AN===void 0?this._$AM=e:(ao(this),this._$AM=e,oo(this))}function co(e,t=!1,n=0){let r=this._$AH,i=this._$AN;if(i!==void 0&&i.size!==0)if(t)if(Array.isArray(r))for(let e=n;e<r.length;e++)io(r[e],!1),ao(r[e]);else r!=null&&(io(r,!1),ao(r));else io(this,e)}var lo=e=>{e.type==nn.CHILD&&(e._$AP??=co,e._$AQ??=so)},uo=class extends an{constructor(){super(...arguments),this._$AN=void 0}_$AT(e,t,n){super._$AT(e,t,n),oo(this),this.isConnected=e._$AU}_$AO(e,t=!0){e!==this.isConnected&&(this.isConnected=e,e?this.reconnected?.():this.disconnected?.()),t&&(io(this,e),ao(this))}setValue(e){if(Yt(this._$Ct))this._$Ct._$AI(e,this);else{let t=[...this._$Ct._$AH];t[this._$Ci]=e,this._$Ct._$AI(t,this,0)}}disconnected(){}reconnected(){}},fo=()=>new po,po=class{},mo=new WeakMap,ho=rn(class extends uo{render(e){return C}update(e,[t]){let n=t!==this.G;return n&&this.G!==void 0&&this.rt(void 0),(n||this.lt!==this.ct)&&(this.G=t,this.ht=e.options?.host,this.rt(this.ct=e.element)),C}rt(e){if(this.isConnected||(e=void 0),typeof this.G==`function`){let t=this.ht??globalThis,n=mo.get(t);n===void 0&&(n=new WeakMap,mo.set(t,n)),n.get(this.G)!==void 0&&this.G.call(this.ht,void 0),n.set(this.G,e),e!==void 0&&this.G.call(this.ht,e)}else this.G.value=e}get lt(){return typeof this.G==`function`?mo.get(this.ht??globalThis)?.get(this.G):this.G?.value}disconnected(){this.lt===this.ct&&this.rt(void 0)}reconnected(){this.rt(this.ct)}}),go=class{constructor(e,t){this.popupRef=fo(),this.enableSubmenuTimer=-1,this.isConnected=!1,this.isPopupConnected=!1,this.skidding=0,this.submenuOpenDelay=100,this.handleMouseMove=e=>{this.host.style.setProperty(`--safe-triangle-cursor-x`,`${e.clientX}px`),this.host.style.setProperty(`--safe-triangle-cursor-y`,`${e.clientY}px`)},this.handleMouseOver=()=>{this.hasSlotController.test(`submenu`)&&this.enableSubmenu()},this.handleKeyDown=e=>{switch(e.key){case`Escape`:case`Tab`:this.disableSubmenu();break;case`ArrowLeft`:e.target!==this.host&&(e.preventDefault(),e.stopPropagation(),this.host.focus(),this.disableSubmenu());break;case`ArrowRight`:case`Enter`:case` `:this.handleSubmenuEntry(e);break;default:break}},this.handleClick=e=>{e.target===this.host?(e.preventDefault(),e.stopPropagation()):e.target instanceof Element&&(e.target.tagName===`sl-menu-item`||e.target.role?.startsWith(`menuitem`))&&this.disableSubmenu()},this.handleFocusOut=e=>{e.relatedTarget&&e.relatedTarget instanceof Element&&this.host.contains(e.relatedTarget)||this.disableSubmenu()},this.handlePopupMouseover=e=>{e.stopPropagation()},this.handlePopupReposition=()=>{let e=this.host.renderRoot.querySelector(`slot[name='submenu']`)?.assignedElements({flatten:!0}).filter(e=>e.localName===`sl-menu`)[0],t=getComputedStyle(this.host).direction===`rtl`;if(!e)return;let{left:n,top:r,width:i,height:a}=e.getBoundingClientRect();this.host.style.setProperty(`--safe-triangle-submenu-start-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-start-y`,`${r}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-x`,`${t?n+i:n}px`),this.host.style.setProperty(`--safe-triangle-submenu-end-y`,`${r+a}px`)},(this.host=e).addController(this),this.hasSlotController=t}hostConnected(){this.hasSlotController.test(`submenu`)&&!this.host.disabled&&this.addListeners()}hostDisconnected(){this.removeListeners()}hostUpdated(){this.hasSlotController.test(`submenu`)&&!this.host.disabled?(this.addListeners(),this.updateSkidding()):this.removeListeners()}addListeners(){this.isConnected||=(this.host.addEventListener(`mousemove`,this.handleMouseMove),this.host.addEventListener(`mouseover`,this.handleMouseOver),this.host.addEventListener(`keydown`,this.handleKeyDown),this.host.addEventListener(`click`,this.handleClick),this.host.addEventListener(`focusout`,this.handleFocusOut),!0),this.isPopupConnected||this.popupRef.value&&(this.popupRef.value.addEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.addEventListener(`sl-reposition`,this.handlePopupReposition),this.isPopupConnected=!0)}removeListeners(){this.isConnected&&=(this.host.removeEventListener(`mousemove`,this.handleMouseMove),this.host.removeEventListener(`mouseover`,this.handleMouseOver),this.host.removeEventListener(`keydown`,this.handleKeyDown),this.host.removeEventListener(`click`,this.handleClick),this.host.removeEventListener(`focusout`,this.handleFocusOut),!1),this.isPopupConnected&&this.popupRef.value&&(this.popupRef.value.removeEventListener(`mouseover`,this.handlePopupMouseover),this.popupRef.value.removeEventListener(`sl-reposition`,this.handlePopupReposition),this.isPopupConnected=!1)}handleSubmenuEntry(e){let t=this.host.renderRoot.querySelector(`slot[name='submenu']`);if(!t){console.error(`Cannot activate a submenu if no corresponding menuitem can be found.`,this);return}let n=null;for(let e of t.assignedElements())if(n=e.querySelectorAll(`sl-menu-item, [role^='menuitem']`),n.length!==0)break;if(!(!n||n.length===0)){n[0].setAttribute(`tabindex`,`0`);for(let e=1;e!==n.length;++e)n[e].setAttribute(`tabindex`,`-1`);this.popupRef.value&&(e.preventDefault(),e.stopPropagation(),this.popupRef.value.active?n[0]instanceof HTMLElement&&n[0].focus():(this.enableSubmenu(!1),this.host.updateComplete.then(()=>{n[0]instanceof HTMLElement&&n[0].focus()}),this.host.requestUpdate()))}}setSubmenuState(e){this.popupRef.value&&this.popupRef.value.active!==e&&(this.popupRef.value.active=e,this.host.requestUpdate())}enableSubmenu(e=!0){e?(window.clearTimeout(this.enableSubmenuTimer),this.enableSubmenuTimer=window.setTimeout(()=>{this.setSubmenuState(!0)},this.submenuOpenDelay)):this.setSubmenuState(!0)}disableSubmenu(){window.clearTimeout(this.enableSubmenuTimer),this.setSubmenuState(!1)}updateSkidding(){if(!this.host.parentElement?.computedStyleMap)return;let e=this.host.parentElement.computedStyleMap();this.skidding=[`padding-top`,`border-top-width`,`margin-top`].reduce((t,n)=>{let r=e.get(n)??new CSSUnitValue(0,`px`);return t-(r instanceof CSSUnitValue?r:new CSSUnitValue(0,`px`)).to(`px`).value},0)}isExpanded(){return this.popupRef.value?this.popupRef.value.active:!1}renderSubmenu(){let e=getComputedStyle(this.host).direction===`rtl`;return this.isConnected?S`
      <sl-popup
        ${ho(this.popupRef)}
        placement=${e?`left-start`:`right-start`}
        anchor="anchor"
        flip
        flip-fallback-strategy="best-fit"
        skidding="${this.skidding}"
        strategy="fixed"
        auto-size="vertical"
        auto-size-padding="10"
      >
        <slot name="submenu"></slot>
      </sl-popup>
    `:S` <slot name="submenu" hidden></slot> `}},_o=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.type=`normal`,this.checked=!1,this.value=``,this.loading=!1,this.disabled=!1,this.hasSlotController=new Ot(this,`submenu`),this.submenuController=new go(this,this.hasSlotController),this.handleHostClick=e=>{this.disabled&&(e.preventDefault(),e.stopImmediatePropagation())},this.handleMouseOver=e=>{this.focus(),e.stopPropagation()}}connectedCallback(){super.connectedCallback(),this.addEventListener(`click`,this.handleHostClick),this.addEventListener(`mouseover`,this.handleMouseOver)}disconnectedCallback(){super.disconnectedCallback(),this.removeEventListener(`click`,this.handleHostClick),this.removeEventListener(`mouseover`,this.handleMouseOver)}handleDefaultSlotChange(){let e=this.getTextLabel();if(this.cachedTextLabel===void 0){this.cachedTextLabel=e;return}e!==this.cachedTextLabel&&(this.cachedTextLabel=e,this.emit(`slotchange`,{bubbles:!0,composed:!1,cancelable:!1}))}handleCheckedChange(){if(this.checked&&this.type!==`checkbox`){this.checked=!1,console.error(`The checked attribute can only be used on menu items with type="checkbox"`,this);return}this.type===`checkbox`?this.setAttribute(`aria-checked`,this.checked?`true`:`false`):this.removeAttribute(`aria-checked`)}handleDisabledChange(){this.setAttribute(`aria-disabled`,this.disabled?`true`:`false`)}handleTypeChange(){this.type===`checkbox`?(this.setAttribute(`role`,`menuitemcheckbox`),this.setAttribute(`aria-checked`,this.checked?`true`:`false`)):(this.setAttribute(`role`,`menuitem`),this.removeAttribute(`aria-checked`))}getTextLabel(){return kt(this.defaultSlot)}isSubmenu(){return this.hasSlotController.test(`submenu`)}render(){let e=this.localize.dir()===`rtl`,t=this.submenuController.isExpanded();return S`
      <div
        id="anchor"
        part="base"
        class=${j({"menu-item":!0,"menu-item--rtl":e,"menu-item--checked":this.checked,"menu-item--disabled":this.disabled,"menu-item--loading":this.loading,"menu-item--has-submenu":this.isSubmenu(),"menu-item--submenu-expanded":t})}
        ?aria-haspopup="${this.isSubmenu()}"
        ?aria-expanded="${!!t}"
      >
        <span part="checked-icon" class="menu-item__check">
          <sl-icon name="check" library="system" aria-hidden="true"></sl-icon>
        </span>

        <slot name="prefix" part="prefix" class="menu-item__prefix"></slot>

        <slot part="label" class="menu-item__label" @slotchange=${this.handleDefaultSlotChange}></slot>

        <slot name="suffix" part="suffix" class="menu-item__suffix"></slot>

        <span part="submenu-icon" class="menu-item__chevron">
          <sl-icon name=${e?`chevron-left`:`chevron-right`} library="system" aria-hidden="true"></sl-icon>
        </span>

        ${this.submenuController.renderSubmenu()}
        ${this.loading?S` <sl-spinner part="spinner" exportparts="base:spinner__base"></sl-spinner> `:``}
      </div>
    `}};_o.styles=[T,ro],_o.dependencies={"sl-icon":A,"sl-popup":R,"sl-spinner":bn},y([O(`slot:not([name])`)],_o.prototype,`defaultSlot`,2),y([O(`.menu-item`)],_o.prototype,`menuItem`,2),y([E()],_o.prototype,`type`,2),y([E({type:Boolean,reflect:!0})],_o.prototype,`checked`,2),y([E()],_o.prototype,`value`,2),y([E({type:Boolean,reflect:!0})],_o.prototype,`loading`,2),y([E({type:Boolean,reflect:!0})],_o.prototype,`disabled`,2),y([w(`checked`)],_o.prototype,`handleCheckedChange`,1),y([w(`disabled`)],_o.prototype,`handleDisabledChange`,1),y([w(`type`)],_o.prototype,`handleTypeChange`,1),_o.define(`sl-menu-item`);var vo=x`
  :host {
    --divider-width: 2px;
    --handle-size: 2.5rem;

    display: inline-block;
    position: relative;
  }

  .image-comparer {
    max-width: 100%;
    max-height: 100%;
    overflow: hidden;
  }

  .image-comparer__before,
  .image-comparer__after {
    display: block;
    pointer-events: none;
  }

  .image-comparer__before::slotted(img),
  .image-comparer__after::slotted(img),
  .image-comparer__before::slotted(svg),
  .image-comparer__after::slotted(svg) {
    display: block;
    max-width: 100% !important;
    height: auto;
  }

  .image-comparer__after {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100%;
  }

  .image-comparer__divider {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    width: var(--divider-width);
    height: 100%;
    background-color: var(--sl-color-neutral-0);
    translate: calc(var(--divider-width) / -2);
    cursor: ew-resize;
  }

  .image-comparer__handle {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: calc(50% - (var(--handle-size) / 2));
    width: var(--handle-size);
    height: var(--handle-size);
    background-color: var(--sl-color-neutral-0);
    border-radius: var(--sl-border-radius-circle);
    font-size: calc(var(--handle-size) * 0.5);
    color: var(--sl-color-neutral-700);
    cursor: inherit;
    z-index: 10;
  }

  .image-comparer__handle:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`,yo=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.position=50}handleDrag(e){let{width:t}=this.base.getBoundingClientRect(),n=this.localize.dir()===`rtl`;e.preventDefault(),fa(this.base,{onMove:e=>{this.position=parseFloat(ji(e/t*100,0,100).toFixed(2)),n&&(this.position=100-this.position)},initialEvent:e})}handleKeyDown(e){let t=this.localize.dir()===`ltr`,n=this.localize.dir()===`rtl`;if([`ArrowLeft`,`ArrowRight`,`Home`,`End`].includes(e.key)){let r=e.shiftKey?10:1,i=this.position;e.preventDefault(),(t&&e.key===`ArrowLeft`||n&&e.key===`ArrowRight`)&&(i-=r),(t&&e.key===`ArrowRight`||n&&e.key===`ArrowLeft`)&&(i+=r),e.key===`Home`&&(i=0),e.key===`End`&&(i=100),i=ji(i,0,100),this.position=i}}handlePositionChange(){this.emit(`sl-change`)}render(){let e=this.localize.dir()===`rtl`;return S`
      <div
        part="base"
        id="image-comparer"
        class=${j({"image-comparer":!0,"image-comparer--rtl":e})}
        @keydown=${this.handleKeyDown}
      >
        <div class="image-comparer__image">
          <div part="before" class="image-comparer__before">
            <slot name="before"></slot>
          </div>

          <div
            part="after"
            class="image-comparer__after"
            style=${wa({clipPath:e?`inset(0 0 0 ${100-this.position}%)`:`inset(0 ${100-this.position}% 0 0)`})}
          >
            <slot name="after"></slot>
          </div>
        </div>

        <div
          part="divider"
          class="image-comparer__divider"
          style=${wa({left:e?`${100-this.position}%`:`${this.position}%`})}
          @mousedown=${this.handleDrag}
          @touchstart=${this.handleDrag}
        >
          <div
            part="handle"
            class="image-comparer__handle"
            role="scrollbar"
            aria-valuenow=${this.position}
            aria-valuemin="0"
            aria-valuemax="100"
            aria-controls="image-comparer"
            tabindex="0"
          >
            <slot name="handle">
              <sl-icon library="system" name="grip-vertical"></sl-icon>
            </slot>
          </div>
        </div>
      </div>
    `}};yo.styles=[T,vo],yo.scopedElement={"sl-icon":A},y([O(`.image-comparer`)],yo.prototype,`base`,2),y([O(`.image-comparer__handle`)],yo.prototype,`handle`,2),y([E({type:Number,reflect:!0})],yo.prototype,`position`,2),y([w(`position`,{waitUntilFirstUpdate:!0})],yo.prototype,`handlePositionChange`,1),yo.define(`sl-image-comparer`);var bo=x`
  :host {
    display: block;
  }
`,xo=new Map;function So(e,t=`cors`){let n=xo.get(e);if(n!==void 0)return Promise.resolve(n);let r=fetch(e,{mode:t}).then(async t=>{let n={ok:t.ok,status:t.status,html:await t.text()};return xo.set(e,n),n});return xo.set(e,r),r}var Co=class extends k{constructor(){super(...arguments),this.mode=`cors`,this.allowScripts=!1}executeScript(e){let t=document.createElement(`script`);[...e.attributes].forEach(e=>t.setAttribute(e.name,e.value)),t.textContent=e.textContent,e.parentNode.replaceChild(t,e)}async handleSrcChange(){try{let e=this.src,t=await So(e,this.mode);if(e!==this.src)return;if(!t.ok){this.emit(`sl-error`,{detail:{status:t.status}});return}this.innerHTML=t.html,this.allowScripts&&[...this.querySelectorAll(`script`)].forEach(e=>this.executeScript(e)),this.emit(`sl-load`)}catch{this.emit(`sl-error`,{detail:{status:-1}})}}render(){return S`<slot></slot>`}};Co.styles=[T,bo],y([E()],Co.prototype,`src`,2),y([E()],Co.prototype,`mode`,2),y([E({attribute:`allow-scripts`,type:Boolean})],Co.prototype,`allowScripts`,2),y([w(`src`)],Co.prototype,`handleSrcChange`,1),Co.define(`sl-include`),A.define(`sl-icon`),Ki.define(`sl-icon-button`);var wo=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.unit=`byte`,this.display=`short`}render(){if(isNaN(this.value))return``;let e=this.unit===`bit`?[``,`kilo`,`mega`,`giga`,`tera`]:[``,`kilo`,`mega`,`giga`,`tera`,`peta`],t=Math.max(0,Math.min(Math.floor(Math.log10(this.value)/3),e.length-1)),n=e[t]+this.unit,r=parseFloat((this.value/1e3**t).toPrecision(3));return this.localize.number(r,{style:`unit`,unit:n,unitDisplay:this.display})}};y([E({type:Number})],wo.prototype,`value`,2),y([E()],wo.prototype,`unit`,2),y([E()],wo.prototype,`display`,2),wo.define(`sl-format-bytes`);var To=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.date=new Date,this.hourFormat=`auto`}render(){let e=new Date(this.date),t=this.hourFormat===`auto`?void 0:this.hourFormat===`12`;if(!isNaN(e.getMilliseconds()))return S`
      <time datetime=${e.toISOString()}>
        ${this.localize.date(e,{weekday:this.weekday,era:this.era,year:this.year,month:this.month,day:this.day,hour:this.hour,minute:this.minute,second:this.second,timeZoneName:this.timeZoneName,timeZone:this.timeZone,hour12:t})}
      </time>
    `}};y([E()],To.prototype,`date`,2),y([E()],To.prototype,`weekday`,2),y([E()],To.prototype,`era`,2),y([E()],To.prototype,`year`,2),y([E()],To.prototype,`month`,2),y([E()],To.prototype,`day`,2),y([E()],To.prototype,`hour`,2),y([E()],To.prototype,`minute`,2),y([E()],To.prototype,`second`,2),y([E({attribute:`time-zone-name`})],To.prototype,`timeZoneName`,2),y([E({attribute:`time-zone`})],To.prototype,`timeZone`,2),y([E({attribute:`hour-format`})],To.prototype,`hourFormat`,2),To.define(`sl-format-date`);var Eo=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.value=0,this.type=`decimal`,this.noGrouping=!1,this.currency=`USD`,this.currencyDisplay=`symbol`}render(){return isNaN(this.value)?``:this.localize.number(this.value,{style:this.type,currency:this.currency,currencyDisplay:this.currencyDisplay,useGrouping:!this.noGrouping,minimumIntegerDigits:this.minimumIntegerDigits,minimumFractionDigits:this.minimumFractionDigits,maximumFractionDigits:this.maximumFractionDigits,minimumSignificantDigits:this.minimumSignificantDigits,maximumSignificantDigits:this.maximumSignificantDigits})}};y([E({type:Number})],Eo.prototype,`value`,2),y([E()],Eo.prototype,`type`,2),y([E({attribute:`no-grouping`,type:Boolean})],Eo.prototype,`noGrouping`,2),y([E()],Eo.prototype,`currency`,2),y([E({attribute:`currency-display`})],Eo.prototype,`currencyDisplay`,2),y([E({attribute:`minimum-integer-digits`,type:Number})],Eo.prototype,`minimumIntegerDigits`,2),y([E({attribute:`minimum-fraction-digits`,type:Number})],Eo.prototype,`minimumFractionDigits`,2),y([E({attribute:`maximum-fraction-digits`,type:Number})],Eo.prototype,`maximumFractionDigits`,2),y([E({attribute:`minimum-significant-digits`,type:Number})],Eo.prototype,`minimumSignificantDigits`,2),y([E({attribute:`maximum-significant-digits`,type:Number})],Eo.prototype,`maximumSignificantDigits`,2),Eo.define(`sl-format-number`);var Do=x`
  :host {
    --color: var(--sl-panel-border-color);
    --width: var(--sl-panel-border-width);
    --spacing: var(--sl-spacing-medium);
  }

  :host(:not([vertical])) {
    display: block;
    border-top: solid var(--width) var(--color);
    margin: var(--spacing) 0;
  }

  :host([vertical]) {
    display: inline-block;
    height: 100%;
    border-left: solid var(--width) var(--color);
    margin: 0 var(--spacing);
  }
`,Oo=class extends k{constructor(){super(...arguments),this.vertical=!1}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`separator`)}handleVerticalChange(){this.setAttribute(`aria-orientation`,this.vertical?`vertical`:`horizontal`)}};Oo.styles=[T,Do],y([E({type:Boolean,reflect:!0})],Oo.prototype,`vertical`,2),y([w(`vertical`)],Oo.prototype,`handleVerticalChange`,1),Oo.define(`sl-divider`);var ko=x`
  :host {
    --size: 25rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .drawer {
    top: 0;
    inset-inline-start: 0;
    width: 100%;
    height: 100%;
    pointer-events: none;
    overflow: hidden;
  }

  .drawer--contained {
    position: absolute;
    z-index: initial;
  }

  .drawer--fixed {
    position: fixed;
    z-index: var(--sl-z-index-drawer);
  }

  .drawer__panel {
    position: absolute;
    display: flex;
    flex-direction: column;
    z-index: 2;
    max-width: 100%;
    max-height: 100%;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-large);
    overflow: auto;
    pointer-events: all;
  }

  .drawer__panel:focus {
    outline: none;
  }

  .drawer--top .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--end .drawer__panel {
    top: 0;
    inset-inline-end: 0;
    bottom: auto;
    inset-inline-start: auto;
    width: var(--size);
    height: 100%;
  }

  .drawer--bottom .drawer__panel {
    top: auto;
    inset-inline-end: auto;
    bottom: 0;
    inset-inline-start: 0;
    width: 100%;
    height: var(--size);
  }

  .drawer--start .drawer__panel {
    top: 0;
    inset-inline-end: auto;
    bottom: auto;
    inset-inline-start: 0;
    width: var(--size);
    height: 100%;
  }

  .drawer__header {
    display: flex;
  }

  .drawer__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .drawer__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .drawer__header-actions sl-icon-button,
  .drawer__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .drawer__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .drawer__footer {
    text-align: right;
    padding: var(--footer-spacing);
  }

  .drawer__footer ::slotted(sl-button:not(:last-of-type)) {
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .drawer:not(.drawer--has-footer) .drawer__footer {
    display: none;
  }

  .drawer__overlay {
    display: block;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
    pointer-events: all;
  }

  .drawer--contained .drawer__overlay {
    display: none;
  }

  @media (forced-colors: active) {
    .drawer__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`;function*Ao(e=document.activeElement){e!=null&&(yield e,`shadowRoot`in e&&e.shadowRoot&&e.shadowRoot.mode!==`closed`&&(yield*ie(Ao(e.shadowRoot.activeElement))))}function jo(){return[...Ao()].pop()}var Mo=new WeakMap;function No(e){let t=Mo.get(e);return t||(t=window.getComputedStyle(e,null),Mo.set(e,t)),t}function Po(e){if(typeof e.checkVisibility==`function`)return e.checkVisibility({checkOpacity:!1,checkVisibilityCSS:!0});let t=No(e);return t.visibility!==`hidden`&&t.display!==`none`}function Fo(e){let{overflowY:t,overflowX:n}=No(e);return t===`scroll`||n===`scroll`?!0:t!==`auto`||n!==`auto`?!1:e.scrollHeight>e.clientHeight&&t===`auto`||e.scrollWidth>e.clientWidth&&n===`auto`}function Io(e){let t=e.tagName.toLowerCase(),n=Number(e.getAttribute(`tabindex`));if(e.hasAttribute(`tabindex`)&&(isNaN(n)||n<=-1)||e.hasAttribute(`disabled`)||e.closest(`[inert]`))return!1;if(t===`input`&&e.getAttribute(`type`)===`radio`){let t=e.getRootNode(),n=`input[type='radio'][name="${e.getAttribute(`name`)}"]`,r=t.querySelector(`${n}:checked`);return r?r===e:t.querySelector(n)===e}return Po(e)?(t===`audio`||t===`video`)&&e.hasAttribute(`controls`)||e.hasAttribute(`tabindex`)||e.hasAttribute(`contenteditable`)&&e.getAttribute(`contenteditable`)!==`false`||[`button`,`input`,`select`,`textarea`,`a`,`audio`,`video`,`summary`,`iframe`].includes(t)?!0:Fo(e):!1}function Lo(e){let t=zo(e);return{start:t[0]??null,end:t[t.length-1]??null}}function Ro(e,t){return e.getRootNode({composed:!0})?.host!==t}function zo(e){let t=new WeakMap,n=[];function r(i){if(i instanceof Element){if(i.hasAttribute(`inert`)||i.closest(`[inert]`)||t.has(i))return;t.set(i,!0),!n.includes(i)&&Io(i)&&n.push(i),i instanceof HTMLSlotElement&&Ro(i,e)&&i.assignedElements({flatten:!0}).forEach(e=>{r(e)}),i.shadowRoot!==null&&i.shadowRoot.mode===`open`&&r(i.shadowRoot)}for(let e of i.children)r(e)}return r(e),n.sort((e,t)=>{let n=Number(e.getAttribute(`tabindex`))||0;return(Number(t.getAttribute(`tabindex`))||0)-n})}var Bo=[],Vo=class{constructor(e){this.tabDirection=`forward`,this.handleFocusIn=()=>{this.isActive()&&this.checkFocus()},this.handleKeyDown=e=>{var t;if(e.key!==`Tab`||this.isExternalActivated||!this.isActive())return;let n=jo();if(this.previousFocus=n,this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus))return;e.shiftKey?this.tabDirection=`backward`:this.tabDirection=`forward`;let r=zo(this.element),i=r.findIndex(e=>e===n);this.previousFocus=this.currentFocus;let a=this.tabDirection===`forward`?1:-1;for(;;){i+a>=r.length?i=0:i+a<0?i=r.length-1:i+=a,this.previousFocus=this.currentFocus;let n=r[i];if(this.tabDirection===`backward`&&this.previousFocus&&this.possiblyHasTabbableChildren(this.previousFocus)||n&&this.possiblyHasTabbableChildren(n))return;e.preventDefault(),this.currentFocus=n,(t=this.currentFocus)==null||t.focus({preventScroll:!1});let o=[...Ao()];if(o.includes(this.currentFocus)||!o.includes(this.previousFocus))break}setTimeout(()=>this.checkFocus())},this.handleKeyUp=()=>{this.tabDirection=`forward`},this.element=e,this.elementsWithTabbableControls=[`iframe`]}activate(){Bo.push(this.element),document.addEventListener(`focusin`,this.handleFocusIn),document.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keyup`,this.handleKeyUp)}deactivate(){Bo=Bo.filter(e=>e!==this.element),this.currentFocus=null,document.removeEventListener(`focusin`,this.handleFocusIn),document.removeEventListener(`keydown`,this.handleKeyDown),document.removeEventListener(`keyup`,this.handleKeyUp)}isActive(){return Bo[Bo.length-1]===this.element}activateExternal(){this.isExternalActivated=!0}deactivateExternal(){this.isExternalActivated=!1}checkFocus(){if(this.isActive()&&!this.isExternalActivated){let e=zo(this.element);if(!this.element.matches(`:focus-within`)){let t=e[0],n=e[e.length-1],r=this.tabDirection===`forward`?t:n;typeof r?.focus==`function`&&(this.currentFocus=r,r.focus({preventScroll:!1}))}}}possiblyHasTabbableChildren(e){return this.elementsWithTabbableControls.includes(e.tagName.toLowerCase())||e.hasAttribute(`controls`)}},Ho=e=>{var t;let{activeElement:n}=document;n&&e.contains(n)&&((t=document.activeElement)==null||t.blur())};function Uo(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Wo=class extends k{constructor(){super(...arguments),this.hasSlotController=new Ot(this,`footer`),this.localize=new N(this),this.modal=new Vo(this),this.open=!1,this.label=``,this.placement=`end`,this.contained=!1,this.noHeader=!1,this.handleDocumentKeyDown=e=>{this.contained||e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopImmediatePropagation(),this.requestClose(`keyboard`))}}firstUpdated(){this.drawer.hidden=!this.open,this.open&&(this.addOpenListeners(),this.contained||(this.modal.activate(),aa(this)))}disconnectedCallback(){super.disconnectedCallback(),oa(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`sl-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=F(this,`drawer.denyClose`,{dir:this.localize.dir()});I(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var e;`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.contained||(this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`))):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){var e;document.removeEventListener(`keydown`,this.handleDocumentKeyDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.contained||(this.modal.activate(),aa(this));let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([Dn(this.drawer),Dn(this.overlay)]),this.drawer.hidden=!1,requestAnimationFrame(()=>{this.emit(`sl-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=F(this,`drawer.show${Uo(this.placement)}`,{dir:this.localize.dir()}),n=F(this,`drawer.overlay.show`,{dir:this.localize.dir()});await Promise.all([I(this.panel,t.keyframes,t.options),I(this.overlay,n.keyframes,n.options)]),this.emit(`sl-after-show`)}else{Ho(this),this.emit(`sl-hide`),this.removeOpenListeners(),this.contained||(this.modal.deactivate(),oa(this)),await Promise.all([Dn(this.drawer),Dn(this.overlay)]);let e=F(this,`drawer.hide${Uo(this.placement)}`,{dir:this.localize.dir()}),t=F(this,`drawer.overlay.hide`,{dir:this.localize.dir()});await Promise.all([I(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),I(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.drawer.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1;let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`sl-after-hide`)}}handleNoModalChange(){this.open&&!this.contained&&(this.modal.activate(),aa(this)),this.open&&this.contained&&(this.modal.deactivate(),oa(this))}async show(){if(!this.open)return this.open=!0,Oi(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Oi(this,`sl-after-hide`)}render(){return S`
      <div
        part="base"
        class=${j({drawer:!0,"drawer--open":this.open,"drawer--top":this.placement===`top`,"drawer--end":this.placement===`end`,"drawer--bottom":this.placement===`bottom`,"drawer--start":this.placement===`start`,"drawer--contained":this.contained,"drawer--fixed":!this.contained,"drawer--rtl":this.localize.dir()===`rtl`,"drawer--has-footer":this.hasSlotController.test(`footer`)})}
      >
        <div part="overlay" class="drawer__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="drawer__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${M(this.noHeader?this.label:void 0)}
          aria-labelledby=${M(this.noHeader?void 0:`title`)}
          tabindex="0"
        >
          ${this.noHeader?``:S`
                <header part="header" class="drawer__header">
                  <h2 part="title" class="drawer__title" id="title">
                    <!-- If there's no label, use an invisible character to prevent the header from collapsing -->
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="drawer__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="drawer__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click=${()=>this.requestClose(`close-button`)}
                    ></sl-icon-button>
                  </div>
                </header>
              `}

          <slot part="body" class="drawer__body"></slot>

          <footer part="footer" class="drawer__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Wo.styles=[T,ko],Wo.dependencies={"sl-icon-button":Ki},y([O(`.drawer`)],Wo.prototype,`drawer`,2),y([O(`.drawer__panel`)],Wo.prototype,`panel`,2),y([O(`.drawer__overlay`)],Wo.prototype,`overlay`,2),y([E({type:Boolean,reflect:!0})],Wo.prototype,`open`,2),y([E({reflect:!0})],Wo.prototype,`label`,2),y([E({reflect:!0})],Wo.prototype,`placement`,2),y([E({type:Boolean,reflect:!0})],Wo.prototype,`contained`,2),y([E({attribute:`no-header`,type:Boolean,reflect:!0})],Wo.prototype,`noHeader`,2),y([w(`open`,{waitUntilFirstUpdate:!0})],Wo.prototype,`handleOpenChange`,1),y([w(`contained`,{waitUntilFirstUpdate:!0})],Wo.prototype,`handleNoModalChange`,1),P(`drawer.showTop`,{keyframes:[{opacity:0,translate:`0 -100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),P(`drawer.hideTop`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 -100%`}],options:{duration:250,easing:`ease`}}),P(`drawer.showEnd`,{keyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),P(`drawer.hideEnd`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],options:{duration:250,easing:`ease`}}),P(`drawer.showBottom`,{keyframes:[{opacity:0,translate:`0 100%`},{opacity:1,translate:`0 0`}],options:{duration:250,easing:`ease`}}),P(`drawer.hideBottom`,{keyframes:[{opacity:1,translate:`0 0`},{opacity:0,translate:`0 100%`}],options:{duration:250,easing:`ease`}}),P(`drawer.showStart`,{keyframes:[{opacity:0,translate:`-100%`},{opacity:1,translate:`0`}],rtlKeyframes:[{opacity:0,translate:`100%`},{opacity:1,translate:`0`}],options:{duration:250,easing:`ease`}}),P(`drawer.hideStart`,{keyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`-100%`}],rtlKeyframes:[{opacity:1,translate:`0`},{opacity:0,translate:`100%`}],options:{duration:250,easing:`ease`}}),P(`drawer.denyClose`,{keyframes:[{scale:1},{scale:1.01},{scale:1}],options:{duration:250}}),P(`drawer.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),P(`drawer.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Wo.define(`sl-drawer`);var Go=x`
  :host {
    display: inline-block;
  }

  .dropdown::part(popup) {
    z-index: var(--sl-z-index-dropdown);
  }

  .dropdown[data-current-placement^='top']::part(popup) {
    transform-origin: bottom;
  }

  .dropdown[data-current-placement^='bottom']::part(popup) {
    transform-origin: top;
  }

  .dropdown[data-current-placement^='left']::part(popup) {
    transform-origin: right;
  }

  .dropdown[data-current-placement^='right']::part(popup) {
    transform-origin: left;
  }

  .dropdown__trigger {
    display: block;
  }

  .dropdown__panel {
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    box-shadow: var(--sl-shadow-large);
    border-radius: var(--sl-border-radius-medium);
    pointer-events: none;
  }

  .dropdown--open .dropdown__panel {
    display: block;
    pointer-events: all;
  }

  /* When users slot a menu, make sure it conforms to the popup's auto-size */
  ::slotted(sl-menu) {
    max-width: var(--auto-size-available-width) !important;
    max-height: var(--auto-size-available-height) !important;
  }
`,Ko=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.open=!1,this.placement=`bottom-start`,this.disabled=!1,this.stayOpenOnSelect=!1,this.distance=0,this.skidding=0,this.hoist=!1,this.sync=void 0,this.handleKeyDown=e=>{this.open&&e.key===`Escape`&&(e.stopPropagation(),this.hide(),this.focusOnTrigger())},this.handleDocumentKeyDown=e=>{if(e.key===`Escape`&&this.open&&!this.closeWatcher){e.stopPropagation(),this.focusOnTrigger(),this.hide();return}if(e.key===`Tab`){if(this.open&&document.activeElement?.tagName.toLowerCase()===`sl-menu-item`){e.preventDefault(),this.hide(),this.focusOnTrigger();return}let t=(e,n)=>{if(!e)return null;let r=e.closest(n);if(r)return r;let i=e.getRootNode();return i instanceof ShadowRoot?t(i.host,n):null};setTimeout(()=>{let e=this.containingElement?.getRootNode()instanceof ShadowRoot?jo():document.activeElement;(!this.containingElement||t(e,this.containingElement.tagName.toLowerCase())!==this.containingElement)&&this.hide()})}},this.handleDocumentMouseDown=e=>{let t=e.composedPath();this.containingElement&&!t.includes(this.containingElement)&&this.hide()},this.handlePanelSelect=e=>{let t=e.target;!this.stayOpenOnSelect&&t.tagName.toLowerCase()===`sl-menu`&&(this.hide(),this.focusOnTrigger())}}connectedCallback(){super.connectedCallback(),this.containingElement||=this}firstUpdated(){this.panel.hidden=!this.open,this.open&&(this.addOpenListeners(),this.popup.active=!0)}disconnectedCallback(){super.disconnectedCallback(),this.removeOpenListeners(),this.hide()}focusOnTrigger(){let e=this.trigger.assignedElements({flatten:!0})[0];typeof e?.focus==`function`&&e.focus()}getMenu(){return this.panel.assignedElements({flatten:!0}).find(e=>e.tagName.toLowerCase()===`sl-menu`)}handleTriggerClick(){this.open?this.hide():(this.show(),this.focusOnTrigger())}async handleTriggerKeyDown(e){if([` `,`Enter`].includes(e.key)){e.preventDefault(),this.handleTriggerClick();return}let t=this.getMenu();if(t){let n=t.getAllItems(),r=n[0],i=n[n.length-1];[`ArrowDown`,`ArrowUp`,`Home`,`End`].includes(e.key)&&(e.preventDefault(),this.open||(this.show(),await this.updateComplete),n.length>0&&this.updateComplete.then(()=>{(e.key===`ArrowDown`||e.key===`Home`)&&(t.setCurrentItem(r),r.focus()),(e.key===`ArrowUp`||e.key===`End`)&&(t.setCurrentItem(i),i.focus())}))}}handleTriggerKeyUp(e){e.key===` `&&e.preventDefault()}handleTriggerSlotChange(){this.updateAccessibleTrigger()}updateAccessibleTrigger(){let e=this.trigger.assignedElements({flatten:!0}).find(e=>Lo(e).start),t;if(e){switch(e.tagName.toLowerCase()){case`sl-button`:case`sl-icon-button`:t=e.button;break;default:t=e}t.setAttribute(`aria-haspopup`,`true`),t.setAttribute(`aria-expanded`,this.open?`true`:`false`)}}async show(){if(!this.open)return this.open=!0,Oi(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Oi(this,`sl-after-hide`)}reposition(){this.popup.reposition()}addOpenListeners(){var e;this.panel.addEventListener(`sl-select`,this.handlePanelSelect),`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>{this.hide(),this.focusOnTrigger()}):this.panel.addEventListener(`keydown`,this.handleKeyDown),document.addEventListener(`keydown`,this.handleDocumentKeyDown),document.addEventListener(`mousedown`,this.handleDocumentMouseDown)}removeOpenListeners(){var e;this.panel&&(this.panel.removeEventListener(`sl-select`,this.handlePanelSelect),this.panel.removeEventListener(`keydown`,this.handleKeyDown)),document.removeEventListener(`keydown`,this.handleDocumentKeyDown),document.removeEventListener(`mousedown`,this.handleDocumentMouseDown),(e=this.closeWatcher)==null||e.destroy()}async handleOpenChange(){if(this.disabled){this.open=!1;return}if(this.updateAccessibleTrigger(),this.open){this.emit(`sl-show`),this.addOpenListeners(),await Dn(this),this.panel.hidden=!1,this.popup.active=!0;let{keyframes:e,options:t}=F(this,`dropdown.show`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.emit(`sl-after-show`)}else{this.emit(`sl-hide`),this.removeOpenListeners(),await Dn(this);let{keyframes:e,options:t}=F(this,`dropdown.hide`,{dir:this.localize.dir()});await I(this.popup.popup,e,t),this.panel.hidden=!0,this.popup.active=!1,this.emit(`sl-after-hide`)}}render(){return S`
      <sl-popup
        part="base"
        exportparts="popup:base__popup"
        id="dropdown"
        placement=${this.placement}
        distance=${this.distance}
        skidding=${this.skidding}
        strategy=${this.hoist?`fixed`:`absolute`}
        flip
        shift
        auto-size="vertical"
        auto-size-padding="10"
        sync=${M(this.sync?this.sync:void 0)}
        class=${j({dropdown:!0,"dropdown--open":this.open})}
      >
        <slot
          name="trigger"
          slot="anchor"
          part="trigger"
          class="dropdown__trigger"
          @click=${this.handleTriggerClick}
          @keydown=${this.handleTriggerKeyDown}
          @keyup=${this.handleTriggerKeyUp}
          @slotchange=${this.handleTriggerSlotChange}
        ></slot>

        <div aria-hidden=${this.open?`false`:`true`} aria-labelledby="dropdown">
          <slot part="panel" class="dropdown__panel"></slot>
        </div>
      </sl-popup>
    `}};Ko.styles=[T,Go],Ko.dependencies={"sl-popup":R},y([O(`.dropdown`)],Ko.prototype,`popup`,2),y([O(`.dropdown__trigger`)],Ko.prototype,`trigger`,2),y([O(`.dropdown__panel`)],Ko.prototype,`panel`,2),y([E({type:Boolean,reflect:!0})],Ko.prototype,`open`,2),y([E({reflect:!0})],Ko.prototype,`placement`,2),y([E({type:Boolean,reflect:!0})],Ko.prototype,`disabled`,2),y([E({attribute:`stay-open-on-select`,type:Boolean,reflect:!0})],Ko.prototype,`stayOpenOnSelect`,2),y([E({attribute:!1})],Ko.prototype,`containingElement`,2),y([E({type:Number})],Ko.prototype,`distance`,2),y([E({type:Number})],Ko.prototype,`skidding`,2),y([E({type:Boolean})],Ko.prototype,`hoist`,2),y([E({reflect:!0})],Ko.prototype,`sync`,2),y([w(`open`,{waitUntilFirstUpdate:!0})],Ko.prototype,`handleOpenChange`,1),P(`dropdown.show`,{keyframes:[{opacity:0,scale:.9},{opacity:1,scale:1}],options:{duration:100,easing:`ease`}}),P(`dropdown.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.9}],options:{duration:100,easing:`ease`}}),Ko.define(`sl-dropdown`);var qo=x`
  :host {
    --error-color: var(--sl-color-danger-600);
    --success-color: var(--sl-color-success-600);

    display: inline-block;
  }

  .copy-button__button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    font-size: inherit;
    color: inherit;
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-x-fast) color;
  }

  .copy-button--success .copy-button__button {
    color: var(--success-color);
  }

  .copy-button--error .copy-button__button {
    color: var(--error-color);
  }

  .copy-button__button:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .copy-button__button[disabled] {
    opacity: 0.5;
    cursor: not-allowed !important;
  }

  slot {
    display: inline-flex;
  }
`,Jo=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.isCopying=!1,this.status=`rest`,this.value=``,this.from=``,this.disabled=!1,this.copyLabel=``,this.successLabel=``,this.errorLabel=``,this.feedbackDuration=1e3,this.tooltipPlacement=`top`,this.hoist=!1}async handleCopy(){if(this.disabled||this.isCopying)return;this.isCopying=!0;let e=this.value;if(this.from){let t=this.getRootNode(),n=this.from.includes(`.`),r=this.from.includes(`[`)&&this.from.includes(`]`),i=this.from,a=``;n?[i,a]=this.from.trim().split(`.`):r&&([i,a]=this.from.trim().replace(/\]$/,``).split(`[`));let o=`getElementById`in t?t.getElementById(i):null;o?e=r?o.getAttribute(a)||``:n?o[a]||``:o.textContent||``:(this.showStatus(`error`),this.emit(`sl-error`))}if(!e)this.showStatus(`error`),this.emit(`sl-error`);else try{await navigator.clipboard.writeText(e),this.showStatus(`success`),this.emit(`sl-copy`,{detail:{value:e}})}catch{this.showStatus(`error`),this.emit(`sl-error`)}}async showStatus(e){let t=this.copyLabel||this.localize.term(`copy`),n=this.successLabel||this.localize.term(`copied`),r=this.errorLabel||this.localize.term(`error`),i=e===`success`?this.successIcon:this.errorIcon,a=F(this,`copy.in`,{dir:`ltr`}),o=F(this,`copy.out`,{dir:`ltr`});this.tooltip.content=e===`success`?n:r,await this.copyIcon.animate(o.keyframes,o.options).finished,this.copyIcon.hidden=!0,this.status=e,i.hidden=!1,await i.animate(a.keyframes,a.options).finished,setTimeout(async()=>{await i.animate(o.keyframes,o.options).finished,i.hidden=!0,this.status=`rest`,this.copyIcon.hidden=!1,await this.copyIcon.animate(a.keyframes,a.options).finished,this.tooltip.content=t,this.isCopying=!1},this.feedbackDuration)}render(){let e=this.copyLabel||this.localize.term(`copy`);return S`
      <sl-tooltip
        class=${j({"copy-button":!0,"copy-button--success":this.status===`success`,"copy-button--error":this.status===`error`})}
        content=${e}
        placement=${this.tooltipPlacement}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        exportparts="
          base:tooltip__base,
          base__popup:tooltip__base__popup,
          base__arrow:tooltip__base__arrow,
          body:tooltip__body
        "
      >
        <button
          class="copy-button__button"
          part="button"
          type="button"
          ?disabled=${this.disabled}
          @click=${this.handleCopy}
        >
          <slot part="copy-icon" name="copy-icon">
            <sl-icon library="system" name="copy"></sl-icon>
          </slot>
          <slot part="success-icon" name="success-icon" hidden>
            <sl-icon library="system" name="check"></sl-icon>
          </slot>
          <slot part="error-icon" name="error-icon" hidden>
            <sl-icon library="system" name="x-lg"></sl-icon>
          </slot>
        </button>
      </sl-tooltip>
    `}};Jo.styles=[T,qo],Jo.dependencies={"sl-icon":A,"sl-tooltip":ki},y([O(`slot[name="copy-icon"]`)],Jo.prototype,`copyIcon`,2),y([O(`slot[name="success-icon"]`)],Jo.prototype,`successIcon`,2),y([O(`slot[name="error-icon"]`)],Jo.prototype,`errorIcon`,2),y([O(`sl-tooltip`)],Jo.prototype,`tooltip`,2),y([D()],Jo.prototype,`isCopying`,2),y([D()],Jo.prototype,`status`,2),y([E()],Jo.prototype,`value`,2),y([E()],Jo.prototype,`from`,2),y([E({type:Boolean,reflect:!0})],Jo.prototype,`disabled`,2),y([E({attribute:`copy-label`})],Jo.prototype,`copyLabel`,2),y([E({attribute:`success-label`})],Jo.prototype,`successLabel`,2),y([E({attribute:`error-label`})],Jo.prototype,`errorLabel`,2),y([E({attribute:`feedback-duration`,type:Number})],Jo.prototype,`feedbackDuration`,2),y([E({attribute:`tooltip-placement`})],Jo.prototype,`tooltipPlacement`,2),y([E({type:Boolean})],Jo.prototype,`hoist`,2),P(`copy.in`,{keyframes:[{scale:`.25`,opacity:`.25`},{scale:`1`,opacity:`1`}],options:{duration:100}}),P(`copy.out`,{keyframes:[{scale:`1`,opacity:`1`},{scale:`.25`,opacity:`0`}],options:{duration:100}}),Jo.define(`sl-copy-button`);var Yo=x`
  :host {
    display: block;
  }

  .details {
    border: solid 1px var(--sl-color-neutral-200);
    border-radius: var(--sl-border-radius-medium);
    background-color: var(--sl-color-neutral-0);
    overflow-anchor: none;
  }

  .details--disabled {
    opacity: 0.5;
  }

  .details__header {
    display: flex;
    align-items: center;
    border-radius: inherit;
    padding: var(--sl-spacing-medium);
    user-select: none;
    -webkit-user-select: none;
    cursor: pointer;
  }

  .details__header::-webkit-details-marker {
    display: none;
  }

  .details__header:focus {
    outline: none;
  }

  .details__header:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: calc(1px + var(--sl-focus-ring-offset));
  }

  .details--disabled .details__header {
    cursor: not-allowed;
  }

  .details--disabled .details__header:focus-visible {
    outline: none;
    box-shadow: none;
  }

  .details__summary {
    flex: 1 1 auto;
    display: flex;
    align-items: center;
  }

  .details__summary-icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    transition: var(--sl-transition-medium) rotate ease;
  }

  .details--open .details__summary-icon {
    rotate: 90deg;
  }

  .details--open.details--rtl .details__summary-icon {
    rotate: -90deg;
  }

  .details--open slot[name='expand-icon'],
  .details:not(.details--open) slot[name='collapse-icon'] {
    display: none;
  }

  .details__body {
    overflow: hidden;
  }

  .details__content {
    display: block;
    padding: var(--sl-spacing-medium);
  }
`,Xo=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.open=!1,this.disabled=!1}firstUpdated(){this.body.style.height=this.open?`auto`:`0`,this.open&&(this.details.open=!0),this.detailsObserver=new MutationObserver(e=>{for(let t of e)t.type===`attributes`&&t.attributeName===`open`&&(this.details.open?this.show():this.hide())}),this.detailsObserver.observe(this.details,{attributes:!0})}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.detailsObserver)==null||e.disconnect()}handleSummaryClick(e){e.preventDefault(),this.disabled||(this.open?this.hide():this.show(),this.header.focus())}handleSummaryKeyDown(e){(e.key===`Enter`||e.key===` `)&&(e.preventDefault(),this.open?this.hide():this.show()),(e.key===`ArrowUp`||e.key===`ArrowLeft`)&&(e.preventDefault(),this.hide()),(e.key===`ArrowDown`||e.key===`ArrowRight`)&&(e.preventDefault(),this.show())}async handleOpenChange(){if(this.open){if(this.details.open=!0,this.emit(`sl-show`,{cancelable:!0}).defaultPrevented){this.open=!1,this.details.open=!1;return}await Dn(this.body);let{keyframes:e,options:t}=F(this,`details.show`,{dir:this.localize.dir()});await I(this.body,On(e,this.body.scrollHeight),t),this.body.style.height=`auto`,this.emit(`sl-after-show`)}else{if(this.emit(`sl-hide`,{cancelable:!0}).defaultPrevented){this.details.open=!0,this.open=!0;return}await Dn(this.body);let{keyframes:e,options:t}=F(this,`details.hide`,{dir:this.localize.dir()});await I(this.body,On(e,this.body.scrollHeight),t),this.body.style.height=`auto`,this.details.open=!1,this.emit(`sl-after-hide`)}}async show(){if(!(this.open||this.disabled))return this.open=!0,Oi(this,`sl-after-show`)}async hide(){if(!(!this.open||this.disabled))return this.open=!1,Oi(this,`sl-after-hide`)}render(){let e=this.localize.dir()===`rtl`;return S`
      <details
        part="base"
        class=${j({details:!0,"details--open":this.open,"details--disabled":this.disabled,"details--rtl":e})}
      >
        <summary
          part="header"
          id="header"
          class="details__header"
          role="button"
          aria-expanded=${this.open?`true`:`false`}
          aria-controls="content"
          aria-disabled=${this.disabled?`true`:`false`}
          tabindex=${this.disabled?`-1`:`0`}
          @click=${this.handleSummaryClick}
          @keydown=${this.handleSummaryKeyDown}
        >
          <slot name="summary" part="summary" class="details__summary">${this.summary}</slot>

          <span part="summary-icon" class="details__summary-icon">
            <slot name="expand-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
            <slot name="collapse-icon">
              <sl-icon library="system" name=${e?`chevron-left`:`chevron-right`}></sl-icon>
            </slot>
          </span>
        </summary>

        <div class="details__body" role="region" aria-labelledby="header">
          <slot part="content" id="content" class="details__content"></slot>
        </div>
      </details>
    `}};Xo.styles=[T,Yo],Xo.dependencies={"sl-icon":A},y([O(`.details`)],Xo.prototype,`details`,2),y([O(`.details__header`)],Xo.prototype,`header`,2),y([O(`.details__body`)],Xo.prototype,`body`,2),y([O(`.details__expand-icon-slot`)],Xo.prototype,`expandIconSlot`,2),y([E({type:Boolean,reflect:!0})],Xo.prototype,`open`,2),y([E()],Xo.prototype,`summary`,2),y([E({type:Boolean,reflect:!0})],Xo.prototype,`disabled`,2),y([w(`open`,{waitUntilFirstUpdate:!0})],Xo.prototype,`handleOpenChange`,1),P(`details.show`,{keyframes:[{height:`0`,opacity:`0`},{height:`auto`,opacity:`1`}],options:{duration:250,easing:`linear`}}),P(`details.hide`,{keyframes:[{height:`auto`,opacity:`1`},{height:`0`,opacity:`0`}],options:{duration:250,easing:`linear`}}),Xo.define(`sl-details`);var Zo=x`
  :host {
    --width: 31rem;
    --header-spacing: var(--sl-spacing-large);
    --body-spacing: var(--sl-spacing-large);
    --footer-spacing: var(--sl-spacing-large);

    display: contents;
  }

  .dialog {
    display: flex;
    align-items: center;
    justify-content: center;
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    z-index: var(--sl-z-index-dialog);
  }

  .dialog__panel {
    display: flex;
    flex-direction: column;
    z-index: 2;
    width: var(--width);
    max-width: calc(100% - var(--sl-spacing-2x-large));
    max-height: calc(100% - var(--sl-spacing-2x-large));
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    box-shadow: var(--sl-shadow-x-large);
  }

  .dialog__panel:focus {
    outline: none;
  }

  /* Ensure there's enough vertical padding for phones that don't update vh when chrome appears (e.g. iPhone) */
  @media screen and (max-width: 420px) {
    .dialog__panel {
      max-height: 80vh;
    }
  }

  .dialog--open .dialog__panel {
    display: flex;
    opacity: 1;
  }

  .dialog__header {
    flex: 0 0 auto;
    display: flex;
  }

  .dialog__title {
    flex: 1 1 auto;
    font: inherit;
    font-size: var(--sl-font-size-large);
    line-height: var(--sl-line-height-dense);
    padding: var(--header-spacing);
    margin: 0;
  }

  .dialog__header-actions {
    flex-shrink: 0;
    display: flex;
    flex-wrap: wrap;
    justify-content: end;
    gap: var(--sl-spacing-2x-small);
    padding: 0 var(--header-spacing);
  }

  .dialog__header-actions sl-icon-button,
  .dialog__header-actions ::slotted(sl-icon-button) {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
  }

  .dialog__body {
    flex: 1 1 auto;
    display: block;
    padding: var(--body-spacing);
    overflow: auto;
    -webkit-overflow-scrolling: touch;
  }

  .dialog__footer {
    flex: 0 0 auto;
    text-align: right;
    padding: var(--footer-spacing);
  }

  .dialog__footer ::slotted(sl-button:not(:first-of-type)) {
    margin-inline-start: var(--sl-spacing-x-small);
  }

  .dialog:not(.dialog--has-footer) .dialog__footer {
    display: none;
  }

  .dialog__overlay {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
    background-color: var(--sl-overlay-background-color);
  }

  @media (forced-colors: active) {
    .dialog__panel {
      border: solid 1px var(--sl-color-neutral-0);
    }
  }
`,Qo=class extends k{constructor(){super(...arguments),this.hasSlotController=new Ot(this,`footer`),this.localize=new N(this),this.modal=new Vo(this),this.open=!1,this.label=``,this.noHeader=!1,this.handleDocumentKeyDown=e=>{e.key===`Escape`&&this.modal.isActive()&&this.open&&(e.stopPropagation(),this.requestClose(`keyboard`))}}firstUpdated(){this.dialog.hidden=!this.open,this.open&&(this.addOpenListeners(),this.modal.activate(),aa(this))}disconnectedCallback(){super.disconnectedCallback(),this.modal.deactivate(),oa(this),this.removeOpenListeners()}requestClose(e){if(this.emit(`sl-request-close`,{cancelable:!0,detail:{source:e}}).defaultPrevented){let e=F(this,`dialog.denyClose`,{dir:this.localize.dir()});I(this.panel,e.keyframes,e.options);return}this.hide()}addOpenListeners(){var e;`CloseWatcher`in window?((e=this.closeWatcher)==null||e.destroy(),this.closeWatcher=new CloseWatcher,this.closeWatcher.onclose=()=>this.requestClose(`keyboard`)):document.addEventListener(`keydown`,this.handleDocumentKeyDown)}removeOpenListeners(){var e;(e=this.closeWatcher)==null||e.destroy(),document.removeEventListener(`keydown`,this.handleDocumentKeyDown)}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.addOpenListeners(),this.originalTrigger=document.activeElement,this.modal.activate(),aa(this);let e=this.querySelector(`[autofocus]`);e&&e.removeAttribute(`autofocus`),await Promise.all([Dn(this.dialog),Dn(this.overlay)]),this.dialog.hidden=!1,requestAnimationFrame(()=>{this.emit(`sl-initial-focus`,{cancelable:!0}).defaultPrevented||(e?e.focus({preventScroll:!0}):this.panel.focus({preventScroll:!0})),e&&e.setAttribute(`autofocus`,``)});let t=F(this,`dialog.show`,{dir:this.localize.dir()}),n=F(this,`dialog.overlay.show`,{dir:this.localize.dir()});await Promise.all([I(this.panel,t.keyframes,t.options),I(this.overlay,n.keyframes,n.options)]),this.emit(`sl-after-show`)}else{Ho(this),this.emit(`sl-hide`),this.removeOpenListeners(),this.modal.deactivate(),await Promise.all([Dn(this.dialog),Dn(this.overlay)]);let e=F(this,`dialog.hide`,{dir:this.localize.dir()}),t=F(this,`dialog.overlay.hide`,{dir:this.localize.dir()});await Promise.all([I(this.overlay,t.keyframes,t.options).then(()=>{this.overlay.hidden=!0}),I(this.panel,e.keyframes,e.options).then(()=>{this.panel.hidden=!0})]),this.dialog.hidden=!0,this.overlay.hidden=!1,this.panel.hidden=!1,oa(this);let n=this.originalTrigger;typeof n?.focus==`function`&&setTimeout(()=>n.focus()),this.emit(`sl-after-hide`)}}async show(){if(!this.open)return this.open=!0,Oi(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Oi(this,`sl-after-hide`)}render(){return S`
      <div
        part="base"
        class=${j({dialog:!0,"dialog--open":this.open,"dialog--has-footer":this.hasSlotController.test(`footer`)})}
      >
        <div part="overlay" class="dialog__overlay" @click=${()=>this.requestClose(`overlay`)} tabindex="-1"></div>

        <div
          part="panel"
          class="dialog__panel"
          role="dialog"
          aria-modal="true"
          aria-hidden=${this.open?`false`:`true`}
          aria-label=${M(this.noHeader?this.label:void 0)}
          aria-labelledby=${M(this.noHeader?void 0:`title`)}
          tabindex="-1"
        >
          ${this.noHeader?``:S`
                <header part="header" class="dialog__header">
                  <h2 part="title" class="dialog__title" id="title">
                    <slot name="label"> ${this.label.length>0?this.label:`﻿`} </slot>
                  </h2>
                  <div part="header-actions" class="dialog__header-actions">
                    <slot name="header-actions"></slot>
                    <sl-icon-button
                      part="close-button"
                      exportparts="base:close-button__base"
                      class="dialog__close"
                      name="x-lg"
                      label=${this.localize.term(`close`)}
                      library="system"
                      @click="${()=>this.requestClose(`close-button`)}"
                    ></sl-icon-button>
                  </div>
                </header>
              `}
          ${``}
          <div part="body" class="dialog__body" tabindex="-1"><slot></slot></div>

          <footer part="footer" class="dialog__footer">
            <slot name="footer"></slot>
          </footer>
        </div>
      </div>
    `}};Qo.styles=[T,Zo],Qo.dependencies={"sl-icon-button":Ki},y([O(`.dialog`)],Qo.prototype,`dialog`,2),y([O(`.dialog__panel`)],Qo.prototype,`panel`,2),y([O(`.dialog__overlay`)],Qo.prototype,`overlay`,2),y([E({type:Boolean,reflect:!0})],Qo.prototype,`open`,2),y([E({reflect:!0})],Qo.prototype,`label`,2),y([E({attribute:`no-header`,type:Boolean,reflect:!0})],Qo.prototype,`noHeader`,2),y([w(`open`,{waitUntilFirstUpdate:!0})],Qo.prototype,`handleOpenChange`,1),P(`dialog.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),P(`dialog.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),P(`dialog.denyClose`,{keyframes:[{scale:1},{scale:1.02},{scale:1}],options:{duration:250}}),P(`dialog.overlay.show`,{keyframes:[{opacity:0},{opacity:1}],options:{duration:250}}),P(`dialog.overlay.hide`,{keyframes:[{opacity:1},{opacity:0}],options:{duration:250}}),Qo.define(`sl-dialog`),sn.define(`sl-checkbox`);var $o=x`
  :host {
    --grid-width: 280px;
    --grid-height: 200px;
    --grid-handle-size: 16px;
    --slider-height: 15px;
    --slider-handle-size: 17px;
    --swatch-size: 25px;

    display: inline-block;
  }

  .color-picker {
    width: var(--grid-width);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-medium);
    font-weight: var(--sl-font-weight-normal);
    color: var(--color);
    background-color: var(--sl-panel-background-color);
    border-radius: var(--sl-border-radius-medium);
    user-select: none;
    -webkit-user-select: none;
  }

  .color-picker--inline {
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
  }

  .color-picker--inline:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__grid {
    position: relative;
    height: var(--grid-height);
    background-image: linear-gradient(to bottom, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 1) 100%),
      linear-gradient(to right, #fff 0%, rgba(255, 255, 255, 0) 100%);
    border-top-left-radius: var(--sl-border-radius-medium);
    border-top-right-radius: var(--sl-border-radius-medium);
    cursor: crosshair;
    forced-color-adjust: none;
  }

  .color-picker__grid-handle {
    position: absolute;
    width: var(--grid-handle-size);
    height: var(--grid-handle-size);
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    border: solid 2px white;
    margin-top: calc(var(--grid-handle-size) / -2);
    margin-left: calc(var(--grid-handle-size) / -2);
    transition: var(--sl-transition-fast) scale;
  }

  .color-picker__grid-handle--dragging {
    cursor: none;
    scale: 1.5;
  }

  .color-picker__grid-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__controls {
    padding: var(--sl-spacing-small);
    display: flex;
    align-items: center;
  }

  .color-picker__sliders {
    flex: 1 1 auto;
  }

  .color-picker__slider {
    position: relative;
    height: var(--slider-height);
    border-radius: var(--sl-border-radius-pill);
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);
    forced-color-adjust: none;
  }

  .color-picker__slider:not(:last-of-type) {
    margin-bottom: var(--sl-spacing-small);
  }

  .color-picker__slider-handle {
    position: absolute;
    top: calc(50% - var(--slider-handle-size) / 2);
    width: var(--slider-handle-size);
    height: var(--slider-handle-size);
    background-color: white;
    border-radius: 50%;
    box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25);
    margin-left: calc(var(--slider-handle-size) / -2);
  }

  .color-picker__slider-handle:focus-visible {
    outline: var(--sl-focus-ring);
  }

  .color-picker__hue {
    background-image: linear-gradient(
      to right,
      rgb(255, 0, 0) 0%,
      rgb(255, 255, 0) 17%,
      rgb(0, 255, 0) 33%,
      rgb(0, 255, 255) 50%,
      rgb(0, 0, 255) 67%,
      rgb(255, 0, 255) 83%,
      rgb(255, 0, 0) 100%
    );
  }

  .color-picker__alpha .color-picker__alpha-gradient {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
  }

  .color-picker__preview {
    flex: 0 0 auto;
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: 2.25rem;
    height: 2.25rem;
    border: none;
    border-radius: var(--sl-border-radius-circle);
    background: none;
    margin-left: var(--sl-spacing-small);
    cursor: copy;
    forced-color-adjust: none;
  }

  .color-picker__preview:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    box-shadow: inset 0 0 0 1px rgba(0, 0, 0, 0.2);

    /* We use a custom property in lieu of currentColor because of https://bugs.webkit.org/show_bug.cgi?id=216780 */
    background-color: var(--preview-color);
  }

  .color-picker__preview:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__preview-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
  }

  .color-picker__preview-color--copied {
    animation: pulse 0.75s;
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--sl-color-primary-500);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }

  .color-picker__user-input {
    display: flex;
    padding: 0 var(--sl-spacing-small) var(--sl-spacing-small) var(--sl-spacing-small);
  }

  .color-picker__user-input sl-input {
    min-width: 0; /* fix input width in Safari */
    flex: 1 1 auto;
  }

  .color-picker__user-input sl-button-group {
    margin-left: var(--sl-spacing-small);
  }

  .color-picker__user-input sl-button {
    min-width: 3.25rem;
    max-width: 3.25rem;
    font-size: 1rem;
  }

  .color-picker__swatches {
    display: grid;
    grid-template-columns: repeat(8, 1fr);
    grid-gap: 0.5rem;
    justify-items: center;
    border-top: solid 1px var(--sl-color-neutral-200);
    padding: var(--sl-spacing-small);
    forced-color-adjust: none;
  }

  .color-picker__swatch {
    position: relative;
    width: var(--swatch-size);
    height: var(--swatch-size);
    border-radius: var(--sl-border-radius-small);
  }

  .color-picker__swatch .color-picker__swatch-color {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border: solid 1px rgba(0, 0, 0, 0.125);
    border-radius: inherit;
    cursor: pointer;
  }

  .color-picker__swatch:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-picker__transparent-bg {
    background-image: linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, transparent 75%, var(--sl-color-neutral-300) 75%),
      linear-gradient(45deg, var(--sl-color-neutral-300) 25%, transparent 25%);
    background-size: 10px 10px;
    background-position:
      0 0,
      0 0,
      -5px -5px,
      5px 5px;
  }

  .color-picker--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .color-picker--disabled .color-picker__grid,
  .color-picker--disabled .color-picker__grid-handle,
  .color-picker--disabled .color-picker__slider,
  .color-picker--disabled .color-picker__slider-handle,
  .color-picker--disabled .color-picker__preview,
  .color-picker--disabled .color-picker__swatch,
  .color-picker--disabled .color-picker__swatch-color {
    pointer-events: none;
  }

  /*
   * Color dropdown
   */

  .color-dropdown::part(panel) {
    max-height: none;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-radius: var(--sl-border-radius-medium);
    overflow: visible;
  }

  .color-dropdown__trigger {
    display: inline-block;
    position: relative;
    background-color: transparent;
    border: none;
    cursor: pointer;
    forced-color-adjust: none;
  }

  .color-dropdown__trigger.color-dropdown__trigger--small {
    width: var(--sl-input-height-small);
    height: var(--sl-input-height-small);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--medium {
    width: var(--sl-input-height-medium);
    height: var(--sl-input-height-medium);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger.color-dropdown__trigger--large {
    width: var(--sl-input-height-large);
    height: var(--sl-input-height-large);
    border-radius: var(--sl-border-radius-circle);
  }

  .color-dropdown__trigger:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    border-radius: inherit;
    background-color: currentColor;
    box-shadow:
      inset 0 0 0 2px var(--sl-input-border-color),
      inset 0 0 0 4px var(--sl-color-neutral-0);
  }

  .color-dropdown__trigger--empty:before {
    background-color: transparent;
  }

  .color-dropdown__trigger:focus-visible {
    outline: none;
  }

  .color-dropdown__trigger:focus-visible:not(.color-dropdown__trigger--disabled) {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .color-dropdown__trigger.color-dropdown__trigger--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }
`,U=class extends k{constructor(){super(...arguments),this.formControlController=new ue(this,{assumeInteractionOn:[`click`]}),this.hasSlotController=new Ot(this,`[default]`,`prefix`,`suffix`),this.localize=new N(this),this.hasFocus=!1,this.invalid=!1,this.title=``,this.variant=`default`,this.size=`medium`,this.caret=!1,this.disabled=!1,this.loading=!1,this.outline=!1,this.pill=!1,this.circle=!1,this.type=`button`,this.name=``,this.value=``,this.href=``,this.rel=`noreferrer noopener`}get validity(){return this.isButton()?this.button.validity:de}get validationMessage(){return this.isButton()?this.button.validationMessage:``}firstUpdated(){this.isButton()&&this.formControlController.updateValidity()}handleBlur(){this.hasFocus=!1,this.emit(`sl-blur`)}handleFocus(){this.hasFocus=!0,this.emit(`sl-focus`)}handleClick(){this.type===`submit`&&this.formControlController.submit(this),this.type===`reset`&&this.formControlController.reset(this)}handleInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}isButton(){return!this.href}isLink(){return!!this.href}handleDisabledChange(){this.isButton()&&this.formControlController.setValidity(this.disabled)}click(){this.button.click()}focus(e){this.button.focus(e)}blur(){this.button.blur()}checkValidity(){return this.isButton()?this.button.checkValidity():!0}getForm(){return this.formControlController.getForm()}reportValidity(){return this.isButton()?this.button.reportValidity():!0}setCustomValidity(e){this.isButton()&&(this.button.setCustomValidity(e),this.formControlController.updateValidity())}render(){let e=this.isLink(),t=e?Ui`a`:Ui`button`;return Gi`
      <${t}
        part="base"
        class=${j({button:!0,"button--default":this.variant===`default`,"button--primary":this.variant===`primary`,"button--success":this.variant===`success`,"button--neutral":this.variant===`neutral`,"button--warning":this.variant===`warning`,"button--danger":this.variant===`danger`,"button--text":this.variant===`text`,"button--small":this.size===`small`,"button--medium":this.size===`medium`,"button--large":this.size===`large`,"button--caret":this.caret,"button--circle":this.circle,"button--disabled":this.disabled,"button--focused":this.hasFocus,"button--loading":this.loading,"button--standard":!this.outline,"button--outline":this.outline,"button--pill":this.pill,"button--rtl":this.localize.dir()===`rtl`,"button--has-label":this.hasSlotController.test(`[default]`),"button--has-prefix":this.hasSlotController.test(`prefix`),"button--has-suffix":this.hasSlotController.test(`suffix`)})}
        ?disabled=${M(e?void 0:this.disabled)}
        type=${M(e?void 0:this.type)}
        title=${this.title}
        name=${M(e?void 0:this.name)}
        value=${M(e?void 0:this.value)}
        href=${M(e&&!this.disabled?this.href:void 0)}
        target=${M(e?this.target:void 0)}
        download=${M(e?this.download:void 0)}
        rel=${M(e?this.rel:void 0)}
        role=${M(e?void 0:`button`)}
        aria-disabled=${this.disabled?`true`:`false`}
        tabindex=${this.disabled?`-1`:`0`}
        @blur=${this.handleBlur}
        @focus=${this.handleFocus}
        @invalid=${this.isButton()?this.handleInvalid:null}
        @click=${this.handleClick}
      >
        <slot name="prefix" part="prefix" class="button__prefix"></slot>
        <slot part="label" class="button__label"></slot>
        <slot name="suffix" part="suffix" class="button__suffix"></slot>
        ${this.caret?Gi` <sl-icon part="caret" class="button__caret" library="system" name="caret"></sl-icon> `:``}
        ${this.loading?Gi`<sl-spinner part="spinner"></sl-spinner>`:``}
      </${t}>
    `}};U.styles=[T,ka],U.dependencies={"sl-icon":A,"sl-spinner":bn},y([O(`.button`)],U.prototype,`button`,2),y([D()],U.prototype,`hasFocus`,2),y([D()],U.prototype,`invalid`,2),y([E()],U.prototype,`title`,2),y([E({reflect:!0})],U.prototype,`variant`,2),y([E({reflect:!0})],U.prototype,`size`,2),y([E({type:Boolean,reflect:!0})],U.prototype,`caret`,2),y([E({type:Boolean,reflect:!0})],U.prototype,`disabled`,2),y([E({type:Boolean,reflect:!0})],U.prototype,`loading`,2),y([E({type:Boolean,reflect:!0})],U.prototype,`outline`,2),y([E({type:Boolean,reflect:!0})],U.prototype,`pill`,2),y([E({type:Boolean,reflect:!0})],U.prototype,`circle`,2),y([E()],U.prototype,`type`,2),y([E()],U.prototype,`name`,2),y([E()],U.prototype,`value`,2),y([E()],U.prototype,`href`,2),y([E()],U.prototype,`target`,2),y([E()],U.prototype,`rel`,2),y([E()],U.prototype,`download`,2),y([E()],U.prototype,`form`,2),y([E({attribute:`formaction`})],U.prototype,`formAction`,2),y([E({attribute:`formenctype`})],U.prototype,`formEnctype`,2),y([E({attribute:`formmethod`})],U.prototype,`formMethod`,2),y([E({attribute:`formnovalidate`,type:Boolean})],U.prototype,`formNoValidate`,2),y([E({attribute:`formtarget`})],U.prototype,`formTarget`,2),y([w(`disabled`,{waitUntilFirstUpdate:!0})],U.prototype,`handleDisabledChange`,1);function es(e,t){ns(e)&&(e=`100%`);let n=rs(e);return e=t===360?e:Math.min(t,Math.max(0,parseFloat(e))),n&&(e=parseInt(String(e*t),10)/100),Math.abs(e-t)<1e-6?1:(e=t===360?(e<0?e%t+t:e%t)/parseFloat(String(t)):e%t/parseFloat(String(t)),e)}function ts(e){return Math.min(1,Math.max(0,e))}function ns(e){return typeof e==`string`&&e.indexOf(`.`)!==-1&&parseFloat(e)===1}function rs(e){return typeof e==`string`&&e.indexOf(`%`)!==-1}function is(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function as(e){return Number(e)<=1?`${Number(e)*100}%`:e}function os(e){return e.length===1?`0`+e:String(e)}function ss(e,t,n){return{r:es(e,255)*255,g:es(t,255)*255,b:es(n,255)*255}}function cs(e,t,n){e=es(e,255),t=es(t,255),n=es(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=0,s=(r+i)/2;if(r===i)o=0,a=0;else{let c=r-i;switch(o=s>.5?c/(2-r-i):c/(r+i),r){case e:a=(t-n)/c+(t<n?6:0);break;case t:a=(n-e)/c+2;break;case n:a=(e-t)/c+4;break;default:break}a/=6}return{h:a,s:o,l:s}}function ls(e,t,n){return n<0&&(n+=1),n>1&&--n,n<1/6?e+(t-e)*(6*n):n<1/2?t:n<2/3?e+(t-e)*(2/3-n)*6:e}function us(e,t,n){let r,i,a;if(e=es(e,360),t=es(t,100),n=es(n,100),t===0)i=n,a=n,r=n;else{let o=n<.5?n*(1+t):n+t-n*t,s=2*n-o;r=ls(s,o,e+1/3),i=ls(s,o,e),a=ls(s,o,e-1/3)}return{r:r*255,g:i*255,b:a*255}}function ds(e,t,n){e=es(e,255),t=es(t,255),n=es(n,255);let r=Math.max(e,t,n),i=Math.min(e,t,n),a=0,o=r,s=r-i,c=r===0?0:s/r;if(r===i)a=0;else{switch(r){case e:a=(t-n)/s+(t<n?6:0);break;case t:a=(n-e)/s+2;break;case n:a=(e-t)/s+4;break;default:break}a/=6}return{h:a,s:c,v:o}}function fs(e,t,n){e=es(e,360)*6,t=es(t,100),n=es(n,100);let r=Math.floor(e),i=e-r,a=n*(1-t),o=n*(1-i*t),s=n*(1-(1-i)*t),c=r%6,l=[n,o,a,a,s,n][c],u=[s,n,n,o,a,a][c],d=[a,a,s,n,n,o][c];return{r:l*255,g:u*255,b:d*255}}function ps(e,t,n,r){let i=[os(Math.round(e).toString(16)),os(Math.round(t).toString(16)),os(Math.round(n).toString(16))];return r&&i[0].startsWith(i[0].charAt(1))&&i[1].startsWith(i[1].charAt(1))&&i[2].startsWith(i[2].charAt(1))?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0):i.join(``)}function ms(e,t,n,r,i){let a=[os(Math.round(e).toString(16)),os(Math.round(t).toString(16)),os(Math.round(n).toString(16)),os(_s(r))];return i&&a[0].startsWith(a[0].charAt(1))&&a[1].startsWith(a[1].charAt(1))&&a[2].startsWith(a[2].charAt(1))&&a[3].startsWith(a[3].charAt(1))?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0)+a[3].charAt(0):a.join(``)}function hs(e,t,n,r){let i=e/100,a=t/100,o=n/100,s=r/100;return{r:255*(1-i)*(1-s),g:255*(1-a)*(1-s),b:255*(1-o)*(1-s)}}function gs(e,t,n){let r=1-e/255,i=1-t/255,a=1-n/255,o=Math.min(r,i,a);return o===1?(r=0,i=0,a=0):(r=(r-o)/(1-o)*100,i=(i-o)/(1-o)*100,a=(a-o)/(1-o)*100),o*=100,{c:Math.round(r),m:Math.round(i),y:Math.round(a),k:Math.round(o)}}function _s(e){return Math.round(parseFloat(e)*255).toString(16)}function vs(e){return ys(e)/255}function ys(e){return parseInt(e,16)}function bs(e){return{r:e>>16,g:(e&65280)>>8,b:e&255}}var xs={aliceblue:`#f0f8ff`,antiquewhite:`#faebd7`,aqua:`#00ffff`,aquamarine:`#7fffd4`,azure:`#f0ffff`,beige:`#f5f5dc`,bisque:`#ffe4c4`,black:`#000000`,blanchedalmond:`#ffebcd`,blue:`#0000ff`,blueviolet:`#8a2be2`,brown:`#a52a2a`,burlywood:`#deb887`,cadetblue:`#5f9ea0`,chartreuse:`#7fff00`,chocolate:`#d2691e`,coral:`#ff7f50`,cornflowerblue:`#6495ed`,cornsilk:`#fff8dc`,crimson:`#dc143c`,cyan:`#00ffff`,darkblue:`#00008b`,darkcyan:`#008b8b`,darkgoldenrod:`#b8860b`,darkgray:`#a9a9a9`,darkgreen:`#006400`,darkgrey:`#a9a9a9`,darkkhaki:`#bdb76b`,darkmagenta:`#8b008b`,darkolivegreen:`#556b2f`,darkorange:`#ff8c00`,darkorchid:`#9932cc`,darkred:`#8b0000`,darksalmon:`#e9967a`,darkseagreen:`#8fbc8f`,darkslateblue:`#483d8b`,darkslategray:`#2f4f4f`,darkslategrey:`#2f4f4f`,darkturquoise:`#00ced1`,darkviolet:`#9400d3`,deeppink:`#ff1493`,deepskyblue:`#00bfff`,dimgray:`#696969`,dimgrey:`#696969`,dodgerblue:`#1e90ff`,firebrick:`#b22222`,floralwhite:`#fffaf0`,forestgreen:`#228b22`,fuchsia:`#ff00ff`,gainsboro:`#dcdcdc`,ghostwhite:`#f8f8ff`,goldenrod:`#daa520`,gold:`#ffd700`,gray:`#808080`,green:`#008000`,greenyellow:`#adff2f`,grey:`#808080`,honeydew:`#f0fff0`,hotpink:`#ff69b4`,indianred:`#cd5c5c`,indigo:`#4b0082`,ivory:`#fffff0`,khaki:`#f0e68c`,lavenderblush:`#fff0f5`,lavender:`#e6e6fa`,lawngreen:`#7cfc00`,lemonchiffon:`#fffacd`,lightblue:`#add8e6`,lightcoral:`#f08080`,lightcyan:`#e0ffff`,lightgoldenrodyellow:`#fafad2`,lightgray:`#d3d3d3`,lightgreen:`#90ee90`,lightgrey:`#d3d3d3`,lightpink:`#ffb6c1`,lightsalmon:`#ffa07a`,lightseagreen:`#20b2aa`,lightskyblue:`#87cefa`,lightslategray:`#778899`,lightslategrey:`#778899`,lightsteelblue:`#b0c4de`,lightyellow:`#ffffe0`,lime:`#00ff00`,limegreen:`#32cd32`,linen:`#faf0e6`,magenta:`#ff00ff`,maroon:`#800000`,mediumaquamarine:`#66cdaa`,mediumblue:`#0000cd`,mediumorchid:`#ba55d3`,mediumpurple:`#9370db`,mediumseagreen:`#3cb371`,mediumslateblue:`#7b68ee`,mediumspringgreen:`#00fa9a`,mediumturquoise:`#48d1cc`,mediumvioletred:`#c71585`,midnightblue:`#191970`,mintcream:`#f5fffa`,mistyrose:`#ffe4e1`,moccasin:`#ffe4b5`,navajowhite:`#ffdead`,navy:`#000080`,oldlace:`#fdf5e6`,olive:`#808000`,olivedrab:`#6b8e23`,orange:`#ffa500`,orangered:`#ff4500`,orchid:`#da70d6`,palegoldenrod:`#eee8aa`,palegreen:`#98fb98`,paleturquoise:`#afeeee`,palevioletred:`#db7093`,papayawhip:`#ffefd5`,peachpuff:`#ffdab9`,peru:`#cd853f`,pink:`#ffc0cb`,plum:`#dda0dd`,powderblue:`#b0e0e6`,purple:`#800080`,rebeccapurple:`#663399`,red:`#ff0000`,rosybrown:`#bc8f8f`,royalblue:`#4169e1`,saddlebrown:`#8b4513`,salmon:`#fa8072`,sandybrown:`#f4a460`,seagreen:`#2e8b57`,seashell:`#fff5ee`,sienna:`#a0522d`,silver:`#c0c0c0`,skyblue:`#87ceeb`,slateblue:`#6a5acd`,slategray:`#708090`,slategrey:`#708090`,snow:`#fffafa`,springgreen:`#00ff7f`,steelblue:`#4682b4`,tan:`#d2b48c`,teal:`#008080`,thistle:`#d8bfd8`,tomato:`#ff6347`,turquoise:`#40e0d0`,violet:`#ee82ee`,wheat:`#f5deb3`,white:`#ffffff`,whitesmoke:`#f5f5f5`,yellow:`#ffff00`,yellowgreen:`#9acd32`};function Ss(e){let t={r:0,g:0,b:0},n=1,r=null,i=null,a=null,o=!1,s=!1;return typeof e==`string`&&(e=Ds(e)),typeof e==`object`&&(Os(e.r)&&Os(e.g)&&Os(e.b)?(t=ss(e.r,e.g,e.b),o=!0,s=String(e.r).substr(-1)===`%`?`prgb`:`rgb`):Os(e.h)&&Os(e.s)&&Os(e.v)?(r=as(e.s),i=as(e.v),t=fs(e.h,r,i),o=!0,s=`hsv`):Os(e.h)&&Os(e.s)&&Os(e.l)?(r=as(e.s),a=as(e.l),t=us(e.h,r,a),o=!0,s=`hsl`):Os(e.c)&&Os(e.m)&&Os(e.y)&&Os(e.k)&&(t=hs(e.c,e.m,e.y,e.k),o=!0,s=`cmyk`),Object.prototype.hasOwnProperty.call(e,`a`)&&(n=e.a)),n=is(n),{ok:o,format:e.format||s,r:Math.min(255,Math.max(t.r,0)),g:Math.min(255,Math.max(t.g,0)),b:Math.min(255,Math.max(t.b,0)),a:n}}var Cs=`(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)`,ws=`[\\s|\\(]+(`+Cs+`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,Ts=`[\\s|\\(]+(`+Cs+`)[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))[,|\\s]+((?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?))\\s*\\)?`,Es={CSS_UNIT:new RegExp(Cs),rgb:RegExp(`rgb`+ws),rgba:RegExp(`rgba`+Ts),hsl:RegExp(`hsl`+ws),hsla:RegExp(`hsla`+Ts),hsv:RegExp(`hsv`+ws),hsva:RegExp(`hsva`+Ts),cmyk:RegExp(`cmyk`+Ts),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/};function Ds(e){if(e=e.trim().toLowerCase(),e.length===0)return!1;let t=!1;if(xs[e])e=xs[e],t=!0;else if(e===`transparent`)return{r:0,g:0,b:0,a:0,format:`name`};let n=Es.rgb.exec(e);return n?{r:n[1],g:n[2],b:n[3]}:(n=Es.rgba.exec(e),n?{r:n[1],g:n[2],b:n[3],a:n[4]}:(n=Es.hsl.exec(e),n?{h:n[1],s:n[2],l:n[3]}:(n=Es.hsla.exec(e),n?{h:n[1],s:n[2],l:n[3],a:n[4]}:(n=Es.hsv.exec(e),n?{h:n[1],s:n[2],v:n[3]}:(n=Es.hsva.exec(e),n?{h:n[1],s:n[2],v:n[3],a:n[4]}:(n=Es.cmyk.exec(e),n?{c:n[1],m:n[2],y:n[3],k:n[4]}:(n=Es.hex8.exec(e),n?{r:ys(n[1]),g:ys(n[2]),b:ys(n[3]),a:vs(n[4]),format:t?`name`:`hex8`}:(n=Es.hex6.exec(e),n?{r:ys(n[1]),g:ys(n[2]),b:ys(n[3]),format:t?`name`:`hex`}:(n=Es.hex4.exec(e),n?{r:ys(n[1]+n[1]),g:ys(n[2]+n[2]),b:ys(n[3]+n[3]),a:vs(n[4]+n[4]),format:t?`name`:`hex8`}:(n=Es.hex3.exec(e),n?{r:ys(n[1]+n[1]),g:ys(n[2]+n[2]),b:ys(n[3]+n[3]),format:t?`name`:`hex`}:!1))))))))))}function Os(e){return typeof e==`number`?!Number.isNaN(e):Es.CSS_UNIT.test(e)}var ks=class e{constructor(t=``,n={}){if(t instanceof e)return t;typeof t==`number`&&(t=bs(t)),this.originalInput=t;let r=Ss(t);this.originalInput=t,this.r=r.r,this.g=r.g,this.b=r.b,this.a=r.a,this.roundA=Math.round(100*this.a)/100,this.format=n.format??r.format,this.gradientType=n.gradientType,this.r<1&&(this.r=Math.round(this.r)),this.g<1&&(this.g=Math.round(this.g)),this.b<1&&(this.b=Math.round(this.b)),this.isValid=r.ok}isDark(){return this.getBrightness()<128}isLight(){return!this.isDark()}getBrightness(){let e=this.toRgb();return(e.r*299+e.g*587+e.b*114)/1e3}getLuminance(){let e=this.toRgb(),t,n,r,i=e.r/255,a=e.g/255,o=e.b/255;return t=i<=.03928?i/12.92:((i+.055)/1.055)**2.4,n=a<=.03928?a/12.92:((a+.055)/1.055)**2.4,r=o<=.03928?o/12.92:((o+.055)/1.055)**2.4,.2126*t+.7152*n+.0722*r}getAlpha(){return this.a}setAlpha(e){return this.a=is(e),this.roundA=Math.round(100*this.a)/100,this}isMonochrome(){let{s:e}=this.toHsl();return e===0}toHsv(){let e=ds(this.r,this.g,this.b);return{h:e.h*360,s:e.s,v:e.v,a:this.a}}toHsvString(){let e=ds(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.v*100);return this.a===1?`hsv(${t}, ${n}%, ${r}%)`:`hsva(${t}, ${n}%, ${r}%, ${this.roundA})`}toHsl(){let e=cs(this.r,this.g,this.b);return{h:e.h*360,s:e.s,l:e.l,a:this.a}}toHslString(){let e=cs(this.r,this.g,this.b),t=Math.round(e.h*360),n=Math.round(e.s*100),r=Math.round(e.l*100);return this.a===1?`hsl(${t}, ${n}%, ${r}%)`:`hsla(${t}, ${n}%, ${r}%, ${this.roundA})`}toHex(e=!1){return ps(this.r,this.g,this.b,e)}toHexString(e=!1){return`#`+this.toHex(e)}toHex8(e=!1){return ms(this.r,this.g,this.b,this.a,e)}toHex8String(e=!1){return`#`+this.toHex8(e)}toHexShortString(e=!1){return this.a===1?this.toHexString(e):this.toHex8String(e)}toRgb(){return{r:Math.round(this.r),g:Math.round(this.g),b:Math.round(this.b),a:this.a}}toRgbString(){let e=Math.round(this.r),t=Math.round(this.g),n=Math.round(this.b);return this.a===1?`rgb(${e}, ${t}, ${n})`:`rgba(${e}, ${t}, ${n}, ${this.roundA})`}toPercentageRgb(){let e=e=>`${Math.round(es(e,255)*100)}%`;return{r:e(this.r),g:e(this.g),b:e(this.b),a:this.a}}toPercentageRgbString(){let e=e=>Math.round(es(e,255)*100);return this.a===1?`rgb(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%)`:`rgba(${e(this.r)}%, ${e(this.g)}%, ${e(this.b)}%, ${this.roundA})`}toCmyk(){return{...gs(this.r,this.g,this.b)}}toCmykString(){let{c:e,m:t,y:n,k:r}=gs(this.r,this.g,this.b);return`cmyk(${e}, ${t}, ${n}, ${r})`}toName(){if(this.a===0)return`transparent`;if(this.a<1)return!1;let e=`#`+ps(this.r,this.g,this.b,!1);for(let[t,n]of Object.entries(xs))if(e===n)return t;return!1}toString(e){let t=!!e;e??=this.format;let n=!1,r=this.a<1&&this.a>=0;return!t&&r&&(e.startsWith(`hex`)||e===`name`)?e===`name`&&this.a===0?this.toName():this.toRgbString():(e===`rgb`&&(n=this.toRgbString()),e===`prgb`&&(n=this.toPercentageRgbString()),(e===`hex`||e===`hex6`)&&(n=this.toHexString()),e===`hex3`&&(n=this.toHexString(!0)),e===`hex4`&&(n=this.toHex8String(!0)),e===`hex8`&&(n=this.toHex8String()),e===`name`&&(n=this.toName()),e===`hsl`&&(n=this.toHslString()),e===`hsv`&&(n=this.toHsvString()),e===`cmyk`&&(n=this.toCmykString()),n||this.toHexString())}toNumber(){return(Math.round(this.r)<<16)+(Math.round(this.g)<<8)+Math.round(this.b)}clone(){return new e(this.toString())}lighten(t=10){let n=this.toHsl();return n.l+=t/100,n.l=ts(n.l),new e(n)}brighten(t=10){let n=this.toRgb();return n.r=Math.max(0,Math.min(255,n.r-Math.round(255*-(t/100)))),n.g=Math.max(0,Math.min(255,n.g-Math.round(255*-(t/100)))),n.b=Math.max(0,Math.min(255,n.b-Math.round(255*-(t/100)))),new e(n)}darken(t=10){let n=this.toHsl();return n.l-=t/100,n.l=ts(n.l),new e(n)}tint(e=10){return this.mix(`white`,e)}shade(e=10){return this.mix(`black`,e)}desaturate(t=10){let n=this.toHsl();return n.s-=t/100,n.s=ts(n.s),new e(n)}saturate(t=10){let n=this.toHsl();return n.s+=t/100,n.s=ts(n.s),new e(n)}greyscale(){return this.desaturate(100)}spin(t){let n=this.toHsl(),r=(n.h+t)%360;return n.h=r<0?360+r:r,new e(n)}mix(t,n=50){let r=this.toRgb(),i=new e(t).toRgb(),a=n/100;return new e({r:(i.r-r.r)*a+r.r,g:(i.g-r.g)*a+r.g,b:(i.b-r.b)*a+r.b,a:(i.a-r.a)*a+r.a})}analogous(t=6,n=30){let r=this.toHsl(),i=360/n,a=[this];for(r.h=(r.h-(i*t>>1)+720)%360;--t;)r.h=(r.h+i)%360,a.push(new e(r));return a}complement(){let t=this.toHsl();return t.h=(t.h+180)%360,new e(t)}monochromatic(t=6){let n=this.toHsv(),{h:r}=n,{s:i}=n,{v:a}=n,o=[],s=1/t;for(;t--;)o.push(new e({h:r,s:i,v:a})),a=(a+s)%1;return o}splitcomplement(){let t=this.toHsl(),{h:n}=t;return[this,new e({h:(n+72)%360,s:t.s,l:t.l}),new e({h:(n+216)%360,s:t.s,l:t.l})]}onBackground(t){let n=this.toRgb(),r=new e(t).toRgb(),i=n.a+r.a*(1-n.a);return new e({r:(n.r*n.a+r.r*r.a*(1-n.a))/i,g:(n.g*n.a+r.g*r.a*(1-n.a))/i,b:(n.b*n.a+r.b*r.a*(1-n.a))/i,a:i})}triad(){return this.polyad(3)}tetrad(){return this.polyad(4)}polyad(t){let n=this.toHsl(),{h:r}=n,i=[this],a=360/t;for(let o=1;o<t;o++)i.push(new e({h:(r+o*a)%360,s:n.s,l:n.l}));return i}equals(t){let n=new e(t);return this.format===`cmyk`||n.format===`cmyk`?this.toCmykString()===n.toCmykString():this.toRgbString()===n.toRgbString()}},As=`EyeDropper`in window,W=class extends k{constructor(){super(),this.formControlController=new ue(this),this.isSafeValue=!1,this.localize=new N(this),this.hasFocus=!1,this.isDraggingGridHandle=!1,this.isEmpty=!1,this.inputValue=``,this.hue=0,this.saturation=100,this.brightness=100,this.alpha=100,this.value=``,this.defaultValue=``,this.label=``,this.format=`hex`,this.inline=!1,this.size=`medium`,this.noFormatToggle=!1,this.name=``,this.disabled=!1,this.hoist=!1,this.opacity=!1,this.uppercase=!1,this.swatches=``,this.form=``,this.required=!1,this.handleFocusIn=()=>{this.hasFocus=!0,this.emit(`sl-focus`)},this.handleFocusOut=()=>{this.hasFocus=!1,this.emit(`sl-blur`)},this.addEventListener(`focusin`,this.handleFocusIn),this.addEventListener(`focusout`,this.handleFocusOut)}get validity(){return this.input.validity}get validationMessage(){return this.input.validationMessage}firstUpdated(){this.input.updateComplete.then(()=>{this.formControlController.updateValidity()})}handleCopy(){this.input.select(),document.execCommand(`copy`),this.previewButton.focus(),this.previewButton.classList.add(`color-picker__preview-color--copied`),this.previewButton.addEventListener(`animationend`,()=>{this.previewButton.classList.remove(`color-picker__preview-color--copied`)})}handleFormatToggle(){let e=[`hex`,`rgb`,`hsl`,`hsv`];this.format=e[(e.indexOf(this.format)+1)%e.length],this.setColor(this.value),this.emit(`sl-change`),this.emit(`sl-input`)}handleAlphaDrag(e){let t=this.shadowRoot.querySelector(`.color-picker__slider.color-picker__alpha`),n=t.querySelector(`.color-picker__slider-handle`),{width:r}=t.getBoundingClientRect(),i=this.value,a=this.value;n.focus(),e.preventDefault(),fa(t,{onMove:e=>{this.alpha=ji(e/r*100,0,100),this.syncValues(),this.value!==a&&(a=this.value,this.emit(`sl-input`))},onStop:()=>{this.value!==i&&(i=this.value,this.emit(`sl-change`))},initialEvent:e})}handleHueDrag(e){let t=this.shadowRoot.querySelector(`.color-picker__slider.color-picker__hue`),n=t.querySelector(`.color-picker__slider-handle`),{width:r}=t.getBoundingClientRect(),i=this.value,a=this.value;n.focus(),e.preventDefault(),fa(t,{onMove:e=>{this.hue=ji(e/r*360,0,360),this.syncValues(),this.value!==a&&(a=this.value,this.emit(`sl-input`))},onStop:()=>{this.value!==i&&(i=this.value,this.emit(`sl-change`))},initialEvent:e})}handleGridDrag(e){let t=this.shadowRoot.querySelector(`.color-picker__grid`),n=t.querySelector(`.color-picker__grid-handle`),{width:r,height:i}=t.getBoundingClientRect(),a=this.value,o=this.value;n.focus(),e.preventDefault(),this.isDraggingGridHandle=!0,fa(t,{onMove:(e,t)=>{this.saturation=ji(e/r*100,0,100),this.brightness=ji(100-t/i*100,0,100),this.syncValues(),this.value!==o&&(o=this.value,this.emit(`sl-input`))},onStop:()=>{this.isDraggingGridHandle=!1,this.value!==a&&(a=this.value,this.emit(`sl-change`))},initialEvent:e})}handleAlphaKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.alpha=ji(this.alpha-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.alpha=ji(this.alpha+t,0,100),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.alpha=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.alpha=100,this.syncValues()),this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleHueKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.hue=ji(this.hue-t,0,360),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.hue=ji(this.hue+t,0,360),this.syncValues()),e.key===`Home`&&(e.preventDefault(),this.hue=0,this.syncValues()),e.key===`End`&&(e.preventDefault(),this.hue=360,this.syncValues()),this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleGridKeyDown(e){let t=e.shiftKey?10:1,n=this.value;e.key===`ArrowLeft`&&(e.preventDefault(),this.saturation=ji(this.saturation-t,0,100),this.syncValues()),e.key===`ArrowRight`&&(e.preventDefault(),this.saturation=ji(this.saturation+t,0,100),this.syncValues()),e.key===`ArrowUp`&&(e.preventDefault(),this.brightness=ji(this.brightness+t,0,100),this.syncValues()),e.key===`ArrowDown`&&(e.preventDefault(),this.brightness=ji(this.brightness-t,0,100),this.syncValues()),this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleInputChange(e){let t=e.target,n=this.value;e.stopPropagation(),this.input.value?(this.setColor(t.value),t.value=this.value):this.value=``,this.value!==n&&(this.emit(`sl-change`),this.emit(`sl-input`))}handleInputInput(e){this.formControlController.updateValidity(),e.stopPropagation()}handleInputKeyDown(e){if(e.key===`Enter`){let e=this.value;this.input.value?(this.setColor(this.input.value),this.input.value=this.value,this.value!==e&&(this.emit(`sl-change`),this.emit(`sl-input`)),setTimeout(()=>this.input.select())):this.hue=0}}handleInputInvalid(e){this.formControlController.setValidity(!1),this.formControlController.emitInvalidEvent(e)}handleTouchMove(e){e.preventDefault()}parseColor(e){let t=new ks(e);if(!t.isValid)return null;let n=t.toHsl(),r={h:n.h,s:n.s*100,l:n.l*100,a:n.a},i=t.toRgb(),a=t.toHexString(),o=t.toHex8String(),s=t.toHsv(),c={h:s.h,s:s.s*100,v:s.v*100,a:s.a};return{hsl:{h:r.h,s:r.s,l:r.l,string:this.setLetterCase(`hsl(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%)`)},hsla:{h:r.h,s:r.s,l:r.l,a:r.a,string:this.setLetterCase(`hsla(${Math.round(r.h)}, ${Math.round(r.s)}%, ${Math.round(r.l)}%, ${r.a.toFixed(2).toString()})`)},hsv:{h:c.h,s:c.s,v:c.v,string:this.setLetterCase(`hsv(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%)`)},hsva:{h:c.h,s:c.s,v:c.v,a:c.a,string:this.setLetterCase(`hsva(${Math.round(c.h)}, ${Math.round(c.s)}%, ${Math.round(c.v)}%, ${c.a.toFixed(2).toString()})`)},rgb:{r:i.r,g:i.g,b:i.b,string:this.setLetterCase(`rgb(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)})`)},rgba:{r:i.r,g:i.g,b:i.b,a:i.a,string:this.setLetterCase(`rgba(${Math.round(i.r)}, ${Math.round(i.g)}, ${Math.round(i.b)}, ${i.a.toFixed(2).toString()})`)},hex:this.setLetterCase(a),hexa:this.setLetterCase(o)}}setColor(e){let t=this.parseColor(e);return t===null?!1:(this.hue=t.hsva.h,this.saturation=t.hsva.s,this.brightness=t.hsva.v,this.alpha=this.opacity?t.hsva.a*100:100,this.syncValues(),!0)}setLetterCase(e){return typeof e==`string`?this.uppercase?e.toUpperCase():e.toLowerCase():``}async syncValues(){let e=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);e!==null&&(this.format===`hsl`?this.inputValue=this.opacity?e.hsla.string:e.hsl.string:this.format===`rgb`?this.inputValue=this.opacity?e.rgba.string:e.rgb.string:this.format===`hsv`?this.inputValue=this.opacity?e.hsva.string:e.hsv.string:this.inputValue=this.opacity?e.hexa:e.hex,this.isSafeValue=!0,this.value=this.inputValue,await this.updateComplete,this.isSafeValue=!1)}handleAfterHide(){this.previewButton.classList.remove(`color-picker__preview-color--copied`)}handleEyeDropper(){As&&new EyeDropper().open().then(e=>{let t=this.value;this.setColor(e.sRGBHex),this.value!==t&&(this.emit(`sl-change`),this.emit(`sl-input`))}).catch(()=>{})}selectSwatch(e){let t=this.value;this.disabled||(this.setColor(e),this.value!==t&&(this.emit(`sl-change`),this.emit(`sl-input`)))}getHexString(e,t,n,r=100){let i=new ks(`hsva(${e}, ${t}%, ${n}%, ${r/100})`);return i.isValid?i.toHex8String():``}stopNestedEventPropagation(e){e.stopImmediatePropagation()}handleFormatChange(){this.syncValues()}handleOpacityChange(){this.alpha=100}handleValueChange(e,t){if(this.isEmpty=!t,t||(this.hue=0,this.saturation=0,this.brightness=100,this.alpha=100),!this.isSafeValue){let n=this.parseColor(t);n===null?this.inputValue=e??``:(this.inputValue=this.value,this.hue=n.hsva.h,this.saturation=n.hsva.s,this.brightness=n.hsva.v,this.alpha=n.hsva.a*100,this.syncValues())}}focus(e){this.inline?this.base.focus(e):this.trigger.focus(e)}blur(){let e=this.inline?this.base:this.trigger;this.hasFocus&&(e.focus({preventScroll:!0}),e.blur()),this.dropdown?.open&&this.dropdown.hide()}getFormattedValue(e=`hex`){let t=this.parseColor(`hsva(${this.hue}, ${this.saturation}%, ${this.brightness}%, ${this.alpha/100})`);if(t===null)return``;switch(e){case`hex`:return t.hex;case`hexa`:return t.hexa;case`rgb`:return t.rgb.string;case`rgba`:return t.rgba.string;case`hsl`:return t.hsl.string;case`hsla`:return t.hsla.string;case`hsv`:return t.hsv.string;case`hsva`:return t.hsva.string;default:return``}}checkValidity(){return this.input.checkValidity()}getForm(){return this.formControlController.getForm()}reportValidity(){return!this.inline&&!this.validity.valid?(this.dropdown.show(),this.addEventListener(`sl-after-show`,()=>this.input.reportValidity(),{once:!0}),this.disabled||this.formControlController.emitInvalidEvent(),!1):this.input.reportValidity()}setCustomValidity(e){this.input.setCustomValidity(e),this.formControlController.updateValidity()}render(){let e=this.saturation,t=100-this.brightness,n=Array.isArray(this.swatches)?this.swatches:this.swatches.split(`;`).filter(e=>e.trim()!==``),r=S`
      <div
        part="base"
        class=${j({"color-picker":!0,"color-picker--inline":this.inline,"color-picker--disabled":this.disabled,"color-picker--focused":this.hasFocus})}
        aria-disabled=${this.disabled?`true`:`false`}
        aria-labelledby="label"
        tabindex=${this.inline?`0`:`-1`}
      >
        ${this.inline?S`
              <sl-visually-hidden id="label">
                <slot name="label">${this.label}</slot>
              </sl-visually-hidden>
            `:null}

        <div
          part="grid"
          class="color-picker__grid"
          style=${wa({backgroundColor:this.getHexString(this.hue,100,100)})}
          @pointerdown=${this.handleGridDrag}
          @touchmove=${this.handleTouchMove}
        >
          <span
            part="grid-handle"
            class=${j({"color-picker__grid-handle":!0,"color-picker__grid-handle--dragging":this.isDraggingGridHandle})}
            style=${wa({top:`${t}%`,left:`${e}%`,backgroundColor:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            role="application"
            aria-label="HSV"
            tabindex=${M(this.disabled?void 0:`0`)}
            @keydown=${this.handleGridKeyDown}
          ></span>
        </div>

        <div class="color-picker__controls">
          <div class="color-picker__sliders">
            <div
              part="slider hue-slider"
              class="color-picker__hue color-picker__slider"
              @pointerdown=${this.handleHueDrag}
              @touchmove=${this.handleTouchMove}
            >
              <span
                part="slider-handle hue-slider-handle"
                class="color-picker__slider-handle"
                style=${wa({left:`${this.hue===0?0:100/(360/this.hue)}%`})}
                role="slider"
                aria-label="hue"
                aria-orientation="horizontal"
                aria-valuemin="0"
                aria-valuemax="360"
                aria-valuenow=${`${Math.round(this.hue)}`}
                tabindex=${M(this.disabled?void 0:`0`)}
                @keydown=${this.handleHueKeyDown}
              ></span>
            </div>

            ${this.opacity?S`
                  <div
                    part="slider opacity-slider"
                    class="color-picker__alpha color-picker__slider color-picker__transparent-bg"
                    @pointerdown="${this.handleAlphaDrag}"
                    @touchmove=${this.handleTouchMove}
                  >
                    <div
                      class="color-picker__alpha-gradient"
                      style=${wa({backgroundImage:`linear-gradient(
                          to right,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,0)} 0%,
                          ${this.getHexString(this.hue,this.saturation,this.brightness,100)} 100%
                        )`})}
                    ></div>
                    <span
                      part="slider-handle opacity-slider-handle"
                      class="color-picker__slider-handle"
                      style=${wa({left:`${this.alpha}%`})}
                      role="slider"
                      aria-label="alpha"
                      aria-orientation="horizontal"
                      aria-valuemin="0"
                      aria-valuemax="100"
                      aria-valuenow=${Math.round(this.alpha)}
                      tabindex=${M(this.disabled?void 0:`0`)}
                      @keydown=${this.handleAlphaKeyDown}
                    ></span>
                  </div>
                `:``}
          </div>

          <button
            type="button"
            part="preview"
            class="color-picker__preview color-picker__transparent-bg"
            aria-label=${this.localize.term(`copy`)}
            style=${wa({"--preview-color":this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
            @click=${this.handleCopy}
          ></button>
        </div>

        <div class="color-picker__user-input" aria-live="polite">
          <sl-input
            part="input"
            type="text"
            name=${this.name}
            autocomplete="off"
            autocorrect="off"
            autocapitalize="off"
            spellcheck="false"
            value=${this.isEmpty?``:this.inputValue}
            ?required=${this.required}
            ?disabled=${this.disabled}
            aria-label=${this.localize.term(`currentValue`)}
            @keydown=${this.handleInputKeyDown}
            @sl-change=${this.handleInputChange}
            @sl-input=${this.handleInputInput}
            @sl-invalid=${this.handleInputInvalid}
            @sl-blur=${this.stopNestedEventPropagation}
            @sl-focus=${this.stopNestedEventPropagation}
          ></sl-input>

          <sl-button-group>
            ${this.noFormatToggle?``:S`
                  <sl-button
                    part="format-button"
                    aria-label=${this.localize.term(`toggleColorFormat`)}
                    exportparts="
                      base:format-button__base,
                      prefix:format-button__prefix,
                      label:format-button__label,
                      suffix:format-button__suffix,
                      caret:format-button__caret
                    "
                    @click=${this.handleFormatToggle}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    ${this.setLetterCase(this.format)}
                  </sl-button>
                `}
            ${As?S`
                  <sl-button
                    part="eye-dropper-button"
                    exportparts="
                      base:eye-dropper-button__base,
                      prefix:eye-dropper-button__prefix,
                      label:eye-dropper-button__label,
                      suffix:eye-dropper-button__suffix,
                      caret:eye-dropper-button__caret
                    "
                    @click=${this.handleEyeDropper}
                    @sl-blur=${this.stopNestedEventPropagation}
                    @sl-focus=${this.stopNestedEventPropagation}
                  >
                    <sl-icon
                      library="system"
                      name="eyedropper"
                      label=${this.localize.term(`selectAColorFromTheScreen`)}
                    ></sl-icon>
                  </sl-button>
                `:``}
          </sl-button-group>
        </div>

        ${n.length>0?S`
              <div part="swatches" class="color-picker__swatches">
                ${n.map(e=>{let t=this.parseColor(e);return t?S`
                    <div
                      part="swatch"
                      class="color-picker__swatch color-picker__transparent-bg"
                      tabindex=${M(this.disabled?void 0:`0`)}
                      role="button"
                      aria-label=${e}
                      @click=${()=>this.selectSwatch(e)}
                      @keydown=${e=>!this.disabled&&e.key===`Enter`&&this.setColor(t.hexa)}
                    >
                      <div
                        class="color-picker__swatch-color"
                        style=${wa({backgroundColor:t.hexa})}
                      ></div>
                    </div>
                  `:(console.error(`Unable to parse swatch color: "${e}"`,this),``)})}
              </div>
            `:``}
      </div>
    `;return this.inline?r:S`
      <sl-dropdown
        class="color-dropdown"
        aria-disabled=${this.disabled?`true`:`false`}
        .containingElement=${this}
        ?disabled=${this.disabled}
        ?hoist=${this.hoist}
        @sl-after-hide=${this.handleAfterHide}
      >
        <button
          part="trigger"
          slot="trigger"
          class=${j({"color-dropdown__trigger":!0,"color-dropdown__trigger--disabled":this.disabled,"color-dropdown__trigger--small":this.size===`small`,"color-dropdown__trigger--medium":this.size===`medium`,"color-dropdown__trigger--large":this.size===`large`,"color-dropdown__trigger--empty":this.isEmpty,"color-dropdown__trigger--focused":this.hasFocus,"color-picker__transparent-bg":!0})}
          style=${wa({color:this.getHexString(this.hue,this.saturation,this.brightness,this.alpha)})}
          type="button"
        >
          <sl-visually-hidden>
            <slot name="label">${this.label}</slot>
          </sl-visually-hidden>
        </button>
        ${r}
      </sl-dropdown>
    `}};W.styles=[T,$o],W.dependencies={"sl-button-group":Pa,"sl-button":U,"sl-dropdown":Ko,"sl-icon":A,"sl-input":H,"sl-visually-hidden":Fi},y([O(`[part~="base"]`)],W.prototype,`base`,2),y([O(`[part~="input"]`)],W.prototype,`input`,2),y([O(`.color-dropdown`)],W.prototype,`dropdown`,2),y([O(`[part~="preview"]`)],W.prototype,`previewButton`,2),y([O(`[part~="trigger"]`)],W.prototype,`trigger`,2),y([D()],W.prototype,`hasFocus`,2),y([D()],W.prototype,`isDraggingGridHandle`,2),y([D()],W.prototype,`isEmpty`,2),y([D()],W.prototype,`inputValue`,2),y([D()],W.prototype,`hue`,2),y([D()],W.prototype,`saturation`,2),y([D()],W.prototype,`brightness`,2),y([D()],W.prototype,`alpha`,2),y([E()],W.prototype,`value`,2),y([Et()],W.prototype,`defaultValue`,2),y([E()],W.prototype,`label`,2),y([E()],W.prototype,`format`,2),y([E({type:Boolean,reflect:!0})],W.prototype,`inline`,2),y([E({reflect:!0})],W.prototype,`size`,2),y([E({attribute:`no-format-toggle`,type:Boolean})],W.prototype,`noFormatToggle`,2),y([E()],W.prototype,`name`,2),y([E({type:Boolean,reflect:!0})],W.prototype,`disabled`,2),y([E({type:Boolean})],W.prototype,`hoist`,2),y([E({type:Boolean})],W.prototype,`opacity`,2),y([E({type:Boolean})],W.prototype,`uppercase`,2),y([E()],W.prototype,`swatches`,2),y([E({reflect:!0})],W.prototype,`form`,2),y([E({type:Boolean,reflect:!0})],W.prototype,`required`,2),y([Ut({passive:!1})],W.prototype,`handleTouchMove`,1),y([w(`format`,{waitUntilFirstUpdate:!0})],W.prototype,`handleFormatChange`,1),y([w(`opacity`,{waitUntilFirstUpdate:!0})],W.prototype,`handleOpacityChange`,1),y([w(`value`)],W.prototype,`handleValueChange`,1),W.define(`sl-color-picker`);var js=x`
  :host {
    --border-color: var(--sl-color-neutral-200);
    --border-radius: var(--sl-border-radius-medium);
    --border-width: 1px;
    --padding: var(--sl-spacing-large);

    display: inline-block;
  }

  .card {
    display: flex;
    flex-direction: column;
    background-color: var(--sl-panel-background-color);
    box-shadow: var(--sl-shadow-x-small);
    border: solid var(--border-width) var(--border-color);
    border-radius: var(--border-radius);
  }

  .card__image {
    display: flex;
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
    margin: calc(-1 * var(--border-width));
    overflow: hidden;
  }

  .card__image::slotted(img) {
    display: block;
    width: 100%;
  }

  .card:not(.card--has-image) .card__image {
    display: none;
  }

  .card__header {
    display: block;
    border-bottom: solid var(--border-width) var(--border-color);
    padding: calc(var(--padding) / 2) var(--padding);
  }

  .card:not(.card--has-header) .card__header {
    display: none;
  }

  .card:not(.card--has-image) .card__header {
    border-top-left-radius: var(--border-radius);
    border-top-right-radius: var(--border-radius);
  }

  .card__body {
    display: block;
    padding: var(--padding);
  }

  .card--has-footer .card__footer {
    display: block;
    border-top: solid var(--border-width) var(--border-color);
    padding: var(--padding);
  }

  .card:not(.card--has-footer) .card__footer {
    display: none;
  }
`,Ms=class extends k{constructor(){super(...arguments),this.hasSlotController=new Ot(this,`footer`,`header`,`image`)}render(){return S`
      <div
        part="base"
        class=${j({card:!0,"card--has-footer":this.hasSlotController.test(`footer`),"card--has-image":this.hasSlotController.test(`image`),"card--has-header":this.hasSlotController.test(`header`)})}
      >
        <slot name="image" part="image" class="card__image"></slot>
        <slot name="header" part="header" class="card__header"></slot>
        <slot part="body" class="card__body"></slot>
        <slot name="footer" part="footer" class="card__footer"></slot>
      </div>
    `}};Ms.styles=[T,js],Ms.define(`sl-card`);var Ns=class{constructor(e,t){this.timerId=0,this.activeInteractions=0,this.paused=!1,this.stopped=!0,this.pause=()=>{this.activeInteractions++||(this.paused=!0,this.host.requestUpdate())},this.resume=()=>{--this.activeInteractions||(this.paused=!1,this.host.requestUpdate())},e.addController(this),this.host=e,this.tickCallback=t}hostConnected(){this.host.addEventListener(`mouseenter`,this.pause),this.host.addEventListener(`mouseleave`,this.resume),this.host.addEventListener(`focusin`,this.pause),this.host.addEventListener(`focusout`,this.resume),this.host.addEventListener(`touchstart`,this.pause,{passive:!0}),this.host.addEventListener(`touchend`,this.resume)}hostDisconnected(){this.stop(),this.host.removeEventListener(`mouseenter`,this.pause),this.host.removeEventListener(`mouseleave`,this.resume),this.host.removeEventListener(`focusin`,this.pause),this.host.removeEventListener(`focusout`,this.resume),this.host.removeEventListener(`touchstart`,this.pause),this.host.removeEventListener(`touchend`,this.resume)}start(e){this.stop(),this.stopped=!1,this.timerId=window.setInterval(()=>{this.paused||this.tickCallback()},e)}stop(){clearInterval(this.timerId),this.stopped=!0,this.host.requestUpdate()}},Ps=x`
  :host {
    --slide-gap: var(--sl-spacing-medium, 1rem);
    --aspect-ratio: 16 / 9;
    --scroll-hint: 0px;

    display: flex;
  }

  .carousel {
    display: grid;
    grid-template-columns: min-content 1fr min-content;
    grid-template-rows: 1fr min-content;
    grid-template-areas:
      '. slides .'
      '. pagination .';
    gap: var(--sl-spacing-medium);
    align-items: center;
    min-height: 100%;
    min-width: 100%;
    position: relative;
  }

  .carousel__pagination {
    grid-area: pagination;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: var(--sl-spacing-small);
  }

  .carousel__slides {
    grid-area: slides;

    display: grid;
    height: 100%;
    width: 100%;
    align-items: center;
    justify-items: center;
    overflow: auto;
    overscroll-behavior-x: contain;
    scrollbar-width: none;
    aspect-ratio: calc(var(--aspect-ratio) * var(--slides-per-page));
    border-radius: var(--sl-border-radius-small);

    --slide-size: calc((100% - (var(--slides-per-page) - 1) * var(--slide-gap)) / var(--slides-per-page));
  }

  @media (prefers-reduced-motion) {
    :where(.carousel__slides) {
      scroll-behavior: auto;
    }
  }

  .carousel__slides--horizontal {
    grid-auto-flow: column;
    grid-auto-columns: var(--slide-size);
    grid-auto-rows: 100%;
    column-gap: var(--slide-gap);
    scroll-snap-type: x mandatory;
    scroll-padding-inline: var(--scroll-hint);
    padding-inline: var(--scroll-hint);
    overflow-y: hidden;
  }

  .carousel__slides--vertical {
    grid-auto-flow: row;
    grid-auto-columns: 100%;
    grid-auto-rows: var(--slide-size);
    row-gap: var(--slide-gap);
    scroll-snap-type: y mandatory;
    scroll-padding-block: var(--scroll-hint);
    padding-block: var(--scroll-hint);
    overflow-x: hidden;
  }

  .carousel__slides--dragging {
  }

  :host([vertical]) ::slotted(sl-carousel-item) {
    height: 100%;
  }

  .carousel__slides::-webkit-scrollbar {
    display: none;
  }

  .carousel__navigation {
    grid-area: navigation;
    display: contents;
    font-size: var(--sl-font-size-x-large);
  }

  .carousel__navigation-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-small);
    font-size: inherit;
    color: var(--sl-color-neutral-600);
    padding: var(--sl-spacing-x-small);
    cursor: pointer;
    transition: var(--sl-transition-medium) color;
    appearance: none;
  }

  .carousel__navigation-button--disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  .carousel__navigation-button--disabled::part(base) {
    pointer-events: none;
  }

  .carousel__navigation-button--previous {
    grid-column: 1;
    grid-row: 1;
  }

  .carousel__navigation-button--next {
    grid-column: 3;
    grid-row: 1;
  }

  .carousel__pagination-item {
    display: block;
    cursor: pointer;
    background: none;
    border: 0;
    border-radius: var(--sl-border-radius-circle);
    width: var(--sl-spacing-small);
    height: var(--sl-spacing-small);
    background-color: var(--sl-color-neutral-300);
    padding: 0;
    margin: 0;
  }

  .carousel__pagination-item--active {
    background-color: var(--sl-color-neutral-700);
    transform: scale(1.2);
  }

  /* Focus styles */
  .carousel__slides:focus-visible,
  .carousel__navigation-button:focus-visible,
  .carousel__pagination-item:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }
`;function*Fs(e,t){if(e!==void 0){let n=0;for(let r of e)yield t(r,n++)}}function*Is(e,t,n=1){let r=t===void 0?0:e;t??=e;for(let e=r;n>0?e<t:t<e;e+=n)yield e}var G=class extends k{constructor(){super(...arguments),this.loop=!1,this.navigation=!1,this.pagination=!1,this.autoplay=!1,this.autoplayInterval=3e3,this.slidesPerPage=1,this.slidesPerMove=1,this.orientation=`horizontal`,this.mouseDragging=!1,this.activeSlide=0,this.scrolling=!1,this.dragging=!1,this.autoplayController=new Ns(this,()=>this.next()),this.dragStartPosition=[-1,-1],this.localize=new N(this),this.pendingSlideChange=!1,this.handleMouseDrag=e=>{this.dragging||(this.scrollContainer.style.setProperty(`scroll-snap-type`,`none`),this.dragging=!0,this.dragStartPosition=[e.clientX,e.clientY]),this.scrollContainer.scrollBy({left:-e.movementX,top:-e.movementY,behavior:`instant`})},this.handleMouseDragEnd=()=>{let e=this.scrollContainer;document.removeEventListener(`pointermove`,this.handleMouseDrag,{capture:!0});let t=e.scrollLeft,n=e.scrollTop;e.style.removeProperty(`scroll-snap-type`),e.style.setProperty(`overflow`,`hidden`);let r=e.scrollLeft,i=e.scrollTop;e.style.removeProperty(`overflow`),e.style.setProperty(`scroll-snap-type`,`none`),e.scrollTo({left:t,top:n,behavior:`instant`}),requestAnimationFrame(async()=>{(t!==r||n!==i)&&(e.scrollTo({left:r,top:i,behavior:En()?`auto`:`smooth`}),await Oi(e,`scrollend`)),e.style.removeProperty(`scroll-snap-type`),this.dragging=!1,this.dragStartPosition=[-1,-1],this.handleScrollEnd()})},this.handleSlotChange=e=>{e.some(e=>[...e.addedNodes,...e.removedNodes].some(e=>this.isCarouselItem(e)&&!e.hasAttribute(`data-clone`)))&&this.initializeSlides(),this.requestUpdate()}}connectedCallback(){super.connectedCallback(),this.setAttribute(`role`,`region`),this.setAttribute(`aria-label`,this.localize.term(`carousel`))}disconnectedCallback(){var e;super.disconnectedCallback(),(e=this.mutationObserver)==null||e.disconnect()}firstUpdated(){this.initializeSlides(),this.mutationObserver=new MutationObserver(this.handleSlotChange),this.mutationObserver.observe(this,{childList:!0,subtree:!0})}willUpdate(e){(e.has(`slidesPerMove`)||e.has(`slidesPerPage`))&&(this.slidesPerMove=Math.min(this.slidesPerMove,this.slidesPerPage))}getPageCount(){let e=this.getSlides().length,{slidesPerPage:t,slidesPerMove:n,loop:r}=this,i=r?e/n:(e-t)/n+1;return Math.ceil(i)}getCurrentPage(){return Math.ceil(this.activeSlide/this.slidesPerMove)}canScrollNext(){return this.loop||this.getCurrentPage()<this.getPageCount()-1}canScrollPrev(){return this.loop||this.getCurrentPage()>0}getSlides({excludeClones:e=!0}={}){return[...this.children].filter(t=>this.isCarouselItem(t)&&(!e||!t.hasAttribute(`data-clone`)))}handleClick(e){if(this.dragging&&this.dragStartPosition[0]>0&&this.dragStartPosition[1]>0){let t=Math.abs(this.dragStartPosition[0]-e.clientX),n=Math.abs(this.dragStartPosition[1]-e.clientY);Math.sqrt(t*t+n*n)>=10&&e.preventDefault()}}handleKeyDown(e){if([`ArrowLeft`,`ArrowRight`,`ArrowUp`,`ArrowDown`,`Home`,`End`].includes(e.key)){let t=e.target,n=this.localize.dir()===`rtl`,r=t.closest(`[part~="pagination-item"]`)!==null,i=e.key===`ArrowDown`||!n&&e.key===`ArrowRight`||n&&e.key===`ArrowLeft`,a=e.key===`ArrowUp`||!n&&e.key===`ArrowLeft`||n&&e.key===`ArrowRight`;e.preventDefault(),a&&this.previous(),i&&this.next(),e.key===`Home`&&this.goToSlide(0),e.key===`End`&&this.goToSlide(this.getSlides().length-1),r&&this.updateComplete.then(()=>{let e=this.shadowRoot?.querySelector(`[part~="pagination-item--active"]`);e&&e.focus()})}}handleMouseDragStart(e){this.mouseDragging&&e.button===0&&(e.preventDefault(),document.addEventListener(`pointermove`,this.handleMouseDrag,{capture:!0,passive:!0}),document.addEventListener(`pointerup`,this.handleMouseDragEnd,{capture:!0,once:!0}))}handleScroll(){this.scrolling=!0,this.pendingSlideChange||this.synchronizeSlides()}synchronizeSlides(){let e=new IntersectionObserver(t=>{e.disconnect();for(let e of t){let t=e.target;t.toggleAttribute(`inert`,!e.isIntersecting),t.classList.toggle(`--in-view`,e.isIntersecting),t.setAttribute(`aria-hidden`,e.isIntersecting?`false`:`true`)}let n=t.find(e=>e.isIntersecting);if(!n)return;let r=this.getSlides({excludeClones:!1}),i=this.getSlides().length,a=r.indexOf(n.target),o=this.loop?a-this.slidesPerPage:a;if(this.activeSlide=(Math.ceil(o/this.slidesPerMove)*this.slidesPerMove+i)%i,!this.scrolling&&this.loop&&n.target.hasAttribute(`data-clone`)){let e=Number(n.target.getAttribute(`data-clone`));this.goToSlide(e,`instant`)}},{root:this.scrollContainer,threshold:.6});this.getSlides({excludeClones:!1}).forEach(t=>{e.observe(t)})}handleScrollEnd(){!this.scrolling||this.dragging||(this.scrolling=!1,this.pendingSlideChange=!1,this.synchronizeSlides())}isCarouselItem(e){return e instanceof Element&&e.tagName.toLowerCase()===`sl-carousel-item`}initializeSlides(){this.getSlides({excludeClones:!1}).forEach((e,t)=>{e.classList.remove(`--in-view`),e.classList.remove(`--is-active`),e.setAttribute(`role`,`group`),e.setAttribute(`aria-label`,this.localize.term(`slideNum`,t+1)),this.pagination&&(e.setAttribute(`id`,`slide-${t+1}`),e.setAttribute(`role`,`tabpanel`),e.removeAttribute(`aria-label`),e.setAttribute(`aria-labelledby`,`tab-${t+1}`)),e.hasAttribute(`data-clone`)&&e.remove()}),this.updateSlidesSnap(),this.loop&&this.createClones(),this.goToSlide(this.activeSlide,`auto`),this.synchronizeSlides()}createClones(){let e=this.getSlides(),t=this.slidesPerPage,n=e.slice(-t),r=e.slice(0,t);n.reverse().forEach((t,n)=>{let r=t.cloneNode(!0);r.setAttribute(`data-clone`,String(e.length-n-1)),this.prepend(r)}),r.forEach((e,t)=>{let n=e.cloneNode(!0);n.setAttribute(`data-clone`,String(t)),this.append(n)})}handleSlideChange(){let e=this.getSlides();e.forEach((e,t)=>{e.classList.toggle(`--is-active`,t===this.activeSlide)}),this.hasUpdated&&this.emit(`sl-slide-change`,{detail:{index:this.activeSlide,slide:e[this.activeSlide]}})}updateSlidesSnap(){let e=this.getSlides(),t=this.slidesPerMove;e.forEach((e,n)=>{(n+t)%t===0?e.style.removeProperty(`scroll-snap-align`):e.style.setProperty(`scroll-snap-align`,`none`)})}handleAutoplayChange(){this.autoplayController.stop(),this.autoplay&&this.autoplayController.start(this.autoplayInterval)}previous(e=`smooth`){this.goToSlide(this.activeSlide-this.slidesPerMove,e)}next(e=`smooth`){this.goToSlide(this.activeSlide+this.slidesPerMove,e)}goToSlide(e,t=`smooth`){let{slidesPerPage:n,loop:r}=this,i=this.getSlides(),a=this.getSlides({excludeClones:!1});if(!i.length)return;this.activeSlide=r?(e+i.length)%i.length:ji(e,0,i.length-n);let o=this.localize.dir()===`rtl`,s=a[ji(e+(r?n:0)+(o?n-1:0),0,a.length-1)];this.scrollToSlide(s,En()?`auto`:t)}scrollToSlide(e,t=`smooth`){this.pendingSlideChange=!0,window.requestAnimationFrame(()=>{if(!this.scrollContainer)return;let n=this.scrollContainer,r=n.getBoundingClientRect(),i=e.getBoundingClientRect(),a=i.left-r.left,o=i.top-r.top;a||o?(this.pendingSlideChange=!0,n.scrollTo({left:a+n.scrollLeft,top:o+n.scrollTop,behavior:t})):this.pendingSlideChange=!1})}render(){let{slidesPerMove:e,scrolling:t}=this,n=this.getPageCount(),r=this.getCurrentPage(),i=this.canScrollPrev(),a=this.canScrollNext(),o=this.localize.dir()===`ltr`;return S`
      <div part="base" class="carousel">
        <div
          id="scroll-container"
          part="scroll-container"
          class="${j({carousel__slides:!0,"carousel__slides--horizontal":this.orientation===`horizontal`,"carousel__slides--vertical":this.orientation===`vertical`,"carousel__slides--dragging":this.dragging})}"
          style="--slides-per-page: ${this.slidesPerPage};"
          aria-busy="${t?`true`:`false`}"
          aria-atomic="true"
          tabindex="0"
          @keydown=${this.handleKeyDown}
          @mousedown="${this.handleMouseDragStart}"
          @scroll="${this.handleScroll}"
          @scrollend=${this.handleScrollEnd}
          @click=${this.handleClick}
        >
          <slot></slot>
        </div>

        ${this.navigation?S`
              <div part="navigation" class="carousel__navigation">
                <button
                  part="navigation-button navigation-button--previous"
                  class="${j({"carousel__navigation-button":!0,"carousel__navigation-button--previous":!0,"carousel__navigation-button--disabled":!i})}"
                  aria-label="${this.localize.term(`previousSlide`)}"
                  aria-controls="scroll-container"
                  aria-disabled="${i?`false`:`true`}"
                  @click=${i?()=>this.previous():null}
                >
                  <slot name="previous-icon">
                    <sl-icon library="system" name="${o?`chevron-left`:`chevron-right`}"></sl-icon>
                  </slot>
                </button>

                <button
                  part="navigation-button navigation-button--next"
                  class=${j({"carousel__navigation-button":!0,"carousel__navigation-button--next":!0,"carousel__navigation-button--disabled":!a})}
                  aria-label="${this.localize.term(`nextSlide`)}"
                  aria-controls="scroll-container"
                  aria-disabled="${a?`false`:`true`}"
                  @click=${a?()=>this.next():null}
                >
                  <slot name="next-icon">
                    <sl-icon library="system" name="${o?`chevron-right`:`chevron-left`}"></sl-icon>
                  </slot>
                </button>
              </div>
            `:``}
        ${this.pagination?S`
              <div part="pagination" role="tablist" class="carousel__pagination">
                ${Fs(Is(n),t=>{let i=t===r;return S`
                    <button
                      part="pagination-item ${i?`pagination-item--active`:``}"
                      class="${j({"carousel__pagination-item":!0,"carousel__pagination-item--active":i})}"
                      role="tab"
                      id="tab-${t+1}"
                      aria-controls="slide-${t+1}"
                      aria-selected="${i?`true`:`false`}"
                      aria-label="${i?this.localize.term(`slideNum`,t+1):this.localize.term(`goToSlide`,t+1,n)}"
                      tabindex=${i?`0`:`-1`}
                      @click=${()=>this.goToSlide(t*e)}
                      @keydown=${this.handleKeyDown}
                    ></button>
                  `})}
              </div>
            `:``}
      </div>
    `}};G.styles=[T,Ps],G.dependencies={"sl-icon":A},y([E({type:Boolean,reflect:!0})],G.prototype,`loop`,2),y([E({type:Boolean,reflect:!0})],G.prototype,`navigation`,2),y([E({type:Boolean,reflect:!0})],G.prototype,`pagination`,2),y([E({type:Boolean,reflect:!0})],G.prototype,`autoplay`,2),y([E({type:Number,attribute:`autoplay-interval`})],G.prototype,`autoplayInterval`,2),y([E({type:Number,attribute:`slides-per-page`})],G.prototype,`slidesPerPage`,2),y([E({type:Number,attribute:`slides-per-move`})],G.prototype,`slidesPerMove`,2),y([E()],G.prototype,`orientation`,2),y([E({type:Boolean,reflect:!0,attribute:`mouse-dragging`})],G.prototype,`mouseDragging`,2),y([O(`.carousel__slides`)],G.prototype,`scrollContainer`,2),y([O(`.carousel__pagination`)],G.prototype,`paginationContainer`,2),y([D()],G.prototype,`activeSlide`,2),y([D()],G.prototype,`scrolling`,2),y([D()],G.prototype,`dragging`,2),y([Ut({passive:!0})],G.prototype,`handleScroll`,1),y([w(`loop`,{waitUntilFirstUpdate:!0}),w(`slidesPerPage`,{waitUntilFirstUpdate:!0})],G.prototype,`initializeSlides`,1),y([w(`activeSlide`)],G.prototype,`handleSlideChange`,1),y([w(`slidesPerMove`)],G.prototype,`updateSlidesSnap`,1),y([w(`autoplay`)],G.prototype,`handleAutoplayChange`,1),G.define(`sl-carousel`);var Ls=(e,t)=>{let n=0;return function(...r){window.clearTimeout(n),n=window.setTimeout(()=>{e.call(this,...r)},t)}},Rs=(e,t,n)=>{let r=e[t];e[t]=function(...e){r.call(this,...e),n.call(this,r,...e)}};(()=>{if(!(typeof window>`u`)&&!(`onscrollend`in window)){let e=new Set,t=new WeakMap,n=t=>{for(let n of t.changedTouches)e.add(n.identifier)},r=t=>{for(let n of t.changedTouches)e.delete(n.identifier)};document.addEventListener(`touchstart`,n,!0),document.addEventListener(`touchend`,r,!0),document.addEventListener(`touchcancel`,r,!0),Rs(EventTarget.prototype,`addEventListener`,function(n,r){if(r!==`scrollend`)return;let i=Ls(()=>{e.size?i():this.dispatchEvent(new Event(`scrollend`))},100);n.call(this,`scroll`,i,{passive:!0}),t.set(this,i)}),Rs(EventTarget.prototype,`removeEventListener`,function(e,n){if(n!==`scrollend`)return;let r=t.get(this);r&&e.call(this,`scroll`,r,{passive:!0})})}})();var zs=x`
  :host {
    --aspect-ratio: inherit;

    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    width: 100%;
    max-height: 100%;
    aspect-ratio: var(--aspect-ratio);
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  ::slotted(img) {
    width: 100% !important;
    height: 100% !important;
    object-fit: cover;
  }
`,Bs=class extends k{connectedCallback(){super.connectedCallback()}render(){return S` <slot></slot> `}};Bs.styles=[T,zs],Bs.define(`sl-carousel-item`);var Vs=x`
  :host {
    display: inline-flex;
  }

  .breadcrumb-item {
    display: inline-flex;
    align-items: center;
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-semibold);
    color: var(--sl-color-neutral-600);
    line-height: var(--sl-line-height-normal);
    white-space: nowrap;
  }

  .breadcrumb-item__label {
    display: inline-block;
    font-family: inherit;
    font-size: inherit;
    font-weight: inherit;
    line-height: inherit;
    text-decoration: none;
    color: inherit;
    background: none;
    border: none;
    border-radius: var(--sl-border-radius-medium);
    padding: 0;
    margin: 0;
    cursor: pointer;
    transition: var(--sl-transition-fast) --color;
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label {
    color: var(--sl-color-primary-600);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:hover {
    color: var(--sl-color-primary-500);
  }

  :host(:not(:last-of-type)) .breadcrumb-item__label:active {
    color: var(--sl-color-primary-600);
  }

  .breadcrumb-item__label:focus {
    outline: none;
  }

  .breadcrumb-item__label:focus-visible {
    outline: var(--sl-focus-ring);
    outline-offset: var(--sl-focus-ring-offset);
  }

  .breadcrumb-item__prefix,
  .breadcrumb-item__suffix {
    display: none;
    flex: 0 0 auto;
    display: flex;
    align-items: center;
  }

  .breadcrumb-item--has-prefix .breadcrumb-item__prefix {
    display: inline-flex;
    margin-inline-end: var(--sl-spacing-x-small);
  }

  .breadcrumb-item--has-suffix .breadcrumb-item__suffix {
    display: inline-flex;
    margin-inline-start: var(--sl-spacing-x-small);
  }

  :host(:last-of-type) .breadcrumb-item__separator {
    display: none;
  }

  .breadcrumb-item__separator {
    display: inline-flex;
    align-items: center;
    margin: 0 var(--sl-spacing-x-small);
    user-select: none;
    -webkit-user-select: none;
  }
`,Hs=class extends k{constructor(){super(...arguments),this.hasSlotController=new Ot(this,`prefix`,`suffix`),this.renderType=`button`,this.rel=`noreferrer noopener`}setRenderType(){let e=this.defaultSlot.assignedElements({flatten:!0}).filter(e=>e.tagName.toLowerCase()===`sl-dropdown`).length>0;if(this.href){this.renderType=`link`;return}if(e){this.renderType=`dropdown`;return}this.renderType=`button`}hrefChanged(){this.setRenderType()}handleSlotChange(){this.setRenderType()}render(){return S`
      <div
        part="base"
        class=${j({"breadcrumb-item":!0,"breadcrumb-item--has-prefix":this.hasSlotController.test(`prefix`),"breadcrumb-item--has-suffix":this.hasSlotController.test(`suffix`)})}
      >
        <span part="prefix" class="breadcrumb-item__prefix">
          <slot name="prefix"></slot>
        </span>

        ${this.renderType===`link`?S`
              <a
                part="label"
                class="breadcrumb-item__label breadcrumb-item__label--link"
                href="${this.href}"
                target="${M(this.target?this.target:void 0)}"
                rel=${M(this.target?this.rel:void 0)}
              >
                <slot @slotchange=${this.handleSlotChange}></slot>
              </a>
            `:``}
        ${this.renderType===`button`?S`
              <button part="label" type="button" class="breadcrumb-item__label breadcrumb-item__label--button">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </button>
            `:``}
        ${this.renderType===`dropdown`?S`
              <div part="label" class="breadcrumb-item__label breadcrumb-item__label--drop-down">
                <slot @slotchange=${this.handleSlotChange}></slot>
              </div>
            `:``}

        <span part="suffix" class="breadcrumb-item__suffix">
          <slot name="suffix"></slot>
        </span>

        <span part="separator" class="breadcrumb-item__separator" aria-hidden="true">
          <slot name="separator"></slot>
        </span>
      </div>
    `}};Hs.styles=[T,Vs],y([O(`slot:not([name])`)],Hs.prototype,`defaultSlot`,2),y([D()],Hs.prototype,`renderType`,2),y([E()],Hs.prototype,`href`,2),y([E()],Hs.prototype,`target`,2),y([E()],Hs.prototype,`rel`,2),y([w(`href`,{waitUntilFirstUpdate:!0})],Hs.prototype,`hrefChanged`,1),Hs.define(`sl-breadcrumb-item`),Pa.define(`sl-button-group`);var Us=x`
  :host {
    display: inline-block;

    --size: 3rem;
  }

  .avatar {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    position: relative;
    width: var(--size);
    height: var(--size);
    background-color: var(--sl-color-neutral-400);
    font-family: var(--sl-font-sans);
    font-size: calc(var(--size) * 0.5);
    font-weight: var(--sl-font-weight-normal);
    color: var(--sl-color-neutral-0);
    user-select: none;
    -webkit-user-select: none;
    vertical-align: middle;
  }

  .avatar--circle,
  .avatar--circle .avatar__image {
    border-radius: var(--sl-border-radius-circle);
  }

  .avatar--rounded,
  .avatar--rounded .avatar__image {
    border-radius: var(--sl-border-radius-medium);
  }

  .avatar--square {
    border-radius: 0;
  }

  .avatar__icon {
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
  }

  .avatar__initials {
    line-height: 1;
    text-transform: uppercase;
  }

  .avatar__image {
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    object-fit: cover;
    overflow: hidden;
  }
`,Ws=class extends k{constructor(){super(...arguments),this.hasError=!1,this.image=``,this.label=``,this.initials=``,this.loading=`eager`,this.shape=`circle`}handleImageChange(){this.hasError=!1}handleImageLoadError(){this.hasError=!0,this.emit(`sl-error`)}render(){let e=S`
      <img
        part="image"
        class="avatar__image"
        src="${this.image}"
        loading="${this.loading}"
        alt=""
        @error="${this.handleImageLoadError}"
      />
    `,t=S``;return t=this.initials?S`<div part="initials" class="avatar__initials">${this.initials}</div>`:S`
        <div part="icon" class="avatar__icon" aria-hidden="true">
          <slot name="icon">
            <sl-icon name="person-fill" library="system"></sl-icon>
          </slot>
        </div>
      `,S`
      <div
        part="base"
        class=${j({avatar:!0,"avatar--circle":this.shape===`circle`,"avatar--rounded":this.shape===`rounded`,"avatar--square":this.shape===`square`})}
        role="img"
        aria-label=${this.label}
      >
        ${this.image&&!this.hasError?e:t}
      </div>
    `}};Ws.styles=[T,Us],Ws.dependencies={"sl-icon":A},y([D()],Ws.prototype,`hasError`,2),y([E()],Ws.prototype,`image`,2),y([E()],Ws.prototype,`label`,2),y([E()],Ws.prototype,`initials`,2),y([E()],Ws.prototype,`loading`,2),y([E({reflect:!0})],Ws.prototype,`shape`,2),y([w(`image`)],Ws.prototype,`handleImageChange`,1),Ws.define(`sl-avatar`);var Gs=x`
  .breadcrumb {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
`,Ks=class extends k{constructor(){super(...arguments),this.localize=new N(this),this.separatorDir=this.localize.dir(),this.label=``}getSeparator(){let e=this.separatorSlot.assignedElements({flatten:!0})[0].cloneNode(!0);return[e,...e.querySelectorAll(`[id]`)].forEach(e=>e.removeAttribute(`id`)),e.setAttribute(`data-default`,``),e.slot=`separator`,e}handleSlotChange(){let e=[...this.defaultSlot.assignedElements({flatten:!0})].filter(e=>e.tagName.toLowerCase()===`sl-breadcrumb-item`);e.forEach((t,n)=>{let r=t.querySelector(`[slot="separator"]`);r===null?t.append(this.getSeparator()):r.hasAttribute(`data-default`)&&r.replaceWith(this.getSeparator()),n===e.length-1?t.setAttribute(`aria-current`,`page`):t.removeAttribute(`aria-current`)})}render(){return this.separatorDir!==this.localize.dir()&&(this.separatorDir=this.localize.dir(),this.updateComplete.then(()=>this.handleSlotChange())),S`
      <nav part="base" class="breadcrumb" aria-label=${this.label}>
        <slot @slotchange=${this.handleSlotChange}></slot>
      </nav>

      <span hidden aria-hidden="true">
        <slot name="separator">
          <sl-icon name=${this.localize.dir()===`rtl`?`chevron-left`:`chevron-right`} library="system"></sl-icon>
        </slot>
      </span>
    `}};Ks.styles=[T,Gs],Ks.dependencies={"sl-icon":A},y([O(`slot`)],Ks.prototype,`defaultSlot`,2),y([O(`slot[name="separator"]`)],Ks.prototype,`separatorSlot`,2),y([E()],Ks.prototype,`label`,2),Ks.define(`sl-breadcrumb`),U.define(`sl-button`);var qs=x`
  :host {
    --control-box-size: 3rem;
    --icon-size: calc(var(--control-box-size) * 0.625);

    display: inline-flex;
    position: relative;
    cursor: pointer;
  }

  img {
    display: block;
    width: 100%;
    height: 100%;
  }

  img[aria-hidden='true'] {
    display: none;
  }

  .animated-image__control-box {
    display: flex;
    position: absolute;
    align-items: center;
    justify-content: center;
    top: calc(50% - var(--control-box-size) / 2);
    right: calc(50% - var(--control-box-size) / 2);
    width: var(--control-box-size);
    height: var(--control-box-size);
    font-size: var(--icon-size);
    background: none;
    border: solid 2px currentColor;
    background-color: rgb(0 0 0 /50%);
    border-radius: var(--sl-border-radius-circle);
    color: white;
    pointer-events: none;
    transition: var(--sl-transition-fast) opacity;
  }

  :host([play]:hover) .animated-image__control-box {
    opacity: 1;
  }

  :host([play]:not(:hover)) .animated-image__control-box {
    opacity: 0;
  }

  :host([play]) slot[name='play-icon'],
  :host(:not([play])) slot[name='pause-icon'] {
    display: none;
  }
`,Js=class extends k{constructor(){super(...arguments),this.isLoaded=!1}handleClick(){this.play=!this.play}handleLoad(){let e=document.createElement(`canvas`),{width:t,height:n}=this.animatedImage;e.width=t,e.height=n,e.getContext(`2d`).drawImage(this.animatedImage,0,0,t,n),this.frozenFrame=e.toDataURL(`image/gif`),this.isLoaded||=(this.emit(`sl-load`),!0)}handleError(){this.emit(`sl-error`)}handlePlayChange(){this.play&&(this.animatedImage.src=``,this.animatedImage.src=this.src)}handleSrcChange(){this.isLoaded=!1}render(){return S`
      <div class="animated-image">
        <img
          class="animated-image__animated"
          src=${this.src}
          alt=${this.alt}
          crossorigin="anonymous"
          aria-hidden=${this.play?`false`:`true`}
          @click=${this.handleClick}
          @load=${this.handleLoad}
          @error=${this.handleError}
        />

        ${this.isLoaded?S`
              <img
                class="animated-image__frozen"
                src=${this.frozenFrame}
                alt=${this.alt}
                aria-hidden=${this.play?`true`:`false`}
                @click=${this.handleClick}
              />

              <div part="control-box" class="animated-image__control-box">
                <slot name="play-icon"><sl-icon name="play-fill" library="system"></sl-icon></slot>
                <slot name="pause-icon"><sl-icon name="pause-fill" library="system"></sl-icon></slot>
              </div>
            `:``}
      </div>
    `}};Js.styles=[T,qs],Js.dependencies={"sl-icon":A},y([O(`.animated-image__animated`)],Js.prototype,`animatedImage`,2),y([D()],Js.prototype,`frozenFrame`,2),y([D()],Js.prototype,`isLoaded`,2),y([E()],Js.prototype,`src`,2),y([E()],Js.prototype,`alt`,2),y([E({type:Boolean,reflect:!0})],Js.prototype,`play`,2),y([w(`play`,{waitUntilFirstUpdate:!0})],Js.prototype,`handlePlayChange`,1),y([w(`src`)],Js.prototype,`handleSrcChange`,1),Js.define(`sl-animated-image`);var Ys=x`
  :host {
    display: inline-flex;
  }

  .badge {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    font-size: max(12px, 0.75em);
    font-weight: var(--sl-font-weight-semibold);
    letter-spacing: var(--sl-letter-spacing-normal);
    line-height: 1;
    border-radius: var(--sl-border-radius-small);
    border: solid 1px var(--sl-color-neutral-0);
    white-space: nowrap;
    padding: 0.35em 0.6em;
    user-select: none;
    -webkit-user-select: none;
    cursor: inherit;
  }

  /* Variant modifiers */
  .badge--primary {
    background-color: var(--sl-color-primary-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--success {
    background-color: var(--sl-color-success-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--neutral {
    background-color: var(--sl-color-neutral-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--warning {
    background-color: var(--sl-color-warning-600);
    color: var(--sl-color-neutral-0);
  }

  .badge--danger {
    background-color: var(--sl-color-danger-600);
    color: var(--sl-color-neutral-0);
  }

  /* Pill modifier */
  .badge--pill {
    border-radius: var(--sl-border-radius-pill);
  }

  /* Pulse modifier */
  .badge--pulse {
    animation: pulse 1.5s infinite;
  }

  .badge--pulse.badge--primary {
    --pulse-color: var(--sl-color-primary-600);
  }

  .badge--pulse.badge--success {
    --pulse-color: var(--sl-color-success-600);
  }

  .badge--pulse.badge--neutral {
    --pulse-color: var(--sl-color-neutral-600);
  }

  .badge--pulse.badge--warning {
    --pulse-color: var(--sl-color-warning-600);
  }

  .badge--pulse.badge--danger {
    --pulse-color: var(--sl-color-danger-600);
  }

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 var(--pulse-color);
    }
    70% {
      box-shadow: 0 0 0 0.5rem transparent;
    }
    100% {
      box-shadow: 0 0 0 0 transparent;
    }
  }
`,Xs=class extends k{constructor(){super(...arguments),this.variant=`primary`,this.pill=!1,this.pulse=!1}render(){return S`
      <span
        part="base"
        class=${j({badge:!0,"badge--primary":this.variant===`primary`,"badge--success":this.variant===`success`,"badge--neutral":this.variant===`neutral`,"badge--warning":this.variant===`warning`,"badge--danger":this.variant===`danger`,"badge--pill":this.pill,"badge--pulse":this.pulse})}
        role="status"
      >
        <slot></slot>
      </span>
    `}};Xs.styles=[T,Ys],y([E({reflect:!0})],Xs.prototype,`variant`,2),y([E({type:Boolean,reflect:!0})],Xs.prototype,`pill`,2),y([E({type:Boolean,reflect:!0})],Xs.prototype,`pulse`,2),Xs.define(`sl-badge`);var Zs=x`
  :host {
    display: contents;

    /* For better DX, we'll reset the margin here so the base part can inherit it */
    margin: 0;
  }

  .alert {
    position: relative;
    display: flex;
    align-items: stretch;
    background-color: var(--sl-panel-background-color);
    border: solid var(--sl-panel-border-width) var(--sl-panel-border-color);
    border-top-width: calc(var(--sl-panel-border-width) * 3);
    border-radius: var(--sl-border-radius-medium);
    font-family: var(--sl-font-sans);
    font-size: var(--sl-font-size-small);
    font-weight: var(--sl-font-weight-normal);
    line-height: 1.6;
    color: var(--sl-color-neutral-700);
    margin: inherit;
    overflow: hidden;
  }

  .alert:not(.alert--has-icon) .alert__icon,
  .alert:not(.alert--closable) .alert__close-button {
    display: none;
  }

  .alert__icon {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-large);
    padding-inline-start: var(--sl-spacing-large);
  }

  .alert--has-countdown {
    border-bottom: none;
  }

  .alert--primary {
    border-top-color: var(--sl-color-primary-600);
  }

  .alert--primary .alert__icon {
    color: var(--sl-color-primary-600);
  }

  .alert--success {
    border-top-color: var(--sl-color-success-600);
  }

  .alert--success .alert__icon {
    color: var(--sl-color-success-600);
  }

  .alert--neutral {
    border-top-color: var(--sl-color-neutral-600);
  }

  .alert--neutral .alert__icon {
    color: var(--sl-color-neutral-600);
  }

  .alert--warning {
    border-top-color: var(--sl-color-warning-600);
  }

  .alert--warning .alert__icon {
    color: var(--sl-color-warning-600);
  }

  .alert--danger {
    border-top-color: var(--sl-color-danger-600);
  }

  .alert--danger .alert__icon {
    color: var(--sl-color-danger-600);
  }

  .alert__message {
    flex: 1 1 auto;
    display: block;
    padding: var(--sl-spacing-large);
    overflow: hidden;
  }

  .alert__close-button {
    flex: 0 0 auto;
    display: flex;
    align-items: center;
    font-size: var(--sl-font-size-medium);
    margin-inline-end: var(--sl-spacing-medium);
    align-self: center;
  }

  .alert__countdown {
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: calc(var(--sl-panel-border-width) * 3);
    background-color: var(--sl-panel-border-color);
    display: flex;
  }

  .alert__countdown--ltr {
    justify-content: flex-end;
  }

  .alert__countdown .alert__countdown-elapsed {
    height: 100%;
    width: 0;
  }

  .alert--primary .alert__countdown-elapsed {
    background-color: var(--sl-color-primary-600);
  }

  .alert--success .alert__countdown-elapsed {
    background-color: var(--sl-color-success-600);
  }

  .alert--neutral .alert__countdown-elapsed {
    background-color: var(--sl-color-neutral-600);
  }

  .alert--warning .alert__countdown-elapsed {
    background-color: var(--sl-color-warning-600);
  }

  .alert--danger .alert__countdown-elapsed {
    background-color: var(--sl-color-danger-600);
  }

  .alert__timer {
    display: none;
  }
`,Qs=class e extends k{constructor(){super(...arguments),this.hasSlotController=new Ot(this,`icon`,`suffix`),this.localize=new N(this),this.open=!1,this.closable=!1,this.variant=`primary`,this.duration=1/0,this.remainingTime=this.duration}static get toastStack(){return this.currentToastStack||=Object.assign(document.createElement(`div`),{className:`sl-toast-stack`}),this.currentToastStack}firstUpdated(){this.base.hidden=!this.open}restartAutoHide(){this.handleCountdownChange(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),this.open&&this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.duration),this.remainingTime=this.duration,this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100))}pauseAutoHide(){var e;(e=this.countdownAnimation)==null||e.pause(),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval)}resumeAutoHide(){var e;this.duration<1/0&&(this.autoHideTimeout=window.setTimeout(()=>this.hide(),this.remainingTime),this.remainingTimeInterval=window.setInterval(()=>{this.remainingTime-=100},100),(e=this.countdownAnimation)==null||e.play())}handleCountdownChange(){if(this.open&&this.duration<1/0&&this.countdown){let{countdownElement:e}=this;this.countdownAnimation=e.animate([{width:`100%`},{width:`0`}],{duration:this.duration,easing:`linear`})}}handleCloseClick(){this.hide()}async handleOpenChange(){if(this.open){this.emit(`sl-show`),this.duration<1/0&&this.restartAutoHide(),await Dn(this.base),this.base.hidden=!1;let{keyframes:e,options:t}=F(this,`alert.show`,{dir:this.localize.dir()});await I(this.base,e,t),this.emit(`sl-after-show`)}else{Ho(this),this.emit(`sl-hide`),clearTimeout(this.autoHideTimeout),clearInterval(this.remainingTimeInterval),await Dn(this.base);let{keyframes:e,options:t}=F(this,`alert.hide`,{dir:this.localize.dir()});await I(this.base,e,t),this.base.hidden=!0,this.emit(`sl-after-hide`)}}handleDurationChange(){this.restartAutoHide()}async show(){if(!this.open)return this.open=!0,Oi(this,`sl-after-show`)}async hide(){if(this.open)return this.open=!1,Oi(this,`sl-after-hide`)}async toast(){return new Promise(t=>{this.handleCountdownChange(),e.toastStack.parentElement===null&&document.body.append(e.toastStack),e.toastStack.appendChild(this),requestAnimationFrame(()=>{this.clientWidth,this.show()}),this.addEventListener(`sl-after-hide`,()=>{e.toastStack.removeChild(this),t(),e.toastStack.querySelector(`sl-alert`)===null&&e.toastStack.remove()},{once:!0})})}render(){return S`
      <div
        part="base"
        class=${j({alert:!0,"alert--open":this.open,"alert--closable":this.closable,"alert--has-countdown":!!this.countdown,"alert--has-icon":this.hasSlotController.test(`icon`),"alert--primary":this.variant===`primary`,"alert--success":this.variant===`success`,"alert--neutral":this.variant===`neutral`,"alert--warning":this.variant===`warning`,"alert--danger":this.variant===`danger`})}
        role="alert"
        aria-hidden=${this.open?`false`:`true`}
        @mouseenter=${this.pauseAutoHide}
        @mouseleave=${this.resumeAutoHide}
      >
        <div part="icon" class="alert__icon">
          <slot name="icon"></slot>
        </div>

        <div part="message" class="alert__message" aria-live="polite">
          <slot></slot>
        </div>

        ${this.closable?S`
              <sl-icon-button
                part="close-button"
                exportparts="base:close-button__base"
                class="alert__close-button"
                name="x-lg"
                library="system"
                label=${this.localize.term(`close`)}
                @click=${this.handleCloseClick}
              ></sl-icon-button>
            `:``}

        <div role="timer" class="alert__timer">${this.remainingTime}</div>

        ${this.countdown?S`
              <div
                class=${j({alert__countdown:!0,"alert__countdown--ltr":this.countdown===`ltr`})}
              >
                <div class="alert__countdown-elapsed"></div>
              </div>
            `:``}
      </div>
    `}};Qs.styles=[T,Zs],Qs.dependencies={"sl-icon-button":Ki},y([O(`[part~="base"]`)],Qs.prototype,`base`,2),y([O(`.alert__countdown-elapsed`)],Qs.prototype,`countdownElement`,2),y([E({type:Boolean,reflect:!0})],Qs.prototype,`open`,2),y([E({type:Boolean,reflect:!0})],Qs.prototype,`closable`,2),y([E({reflect:!0})],Qs.prototype,`variant`,2),y([E({type:Number})],Qs.prototype,`duration`,2),y([E({type:String,reflect:!0})],Qs.prototype,`countdown`,2),y([D()],Qs.prototype,`remainingTime`,2),y([w(`open`,{waitUntilFirstUpdate:!0})],Qs.prototype,`handleOpenChange`,1),y([w(`duration`)],Qs.prototype,`handleDurationChange`,1);var $s=Qs;P(`alert.show`,{keyframes:[{opacity:0,scale:.8},{opacity:1,scale:1}],options:{duration:250,easing:`ease`}}),P(`alert.hide`,{keyframes:[{opacity:1,scale:1},{opacity:0,scale:.8}],options:{duration:250,easing:`ease`}}),$s.define(`sl-alert`);var ec=[{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`},{offset:.2,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`},{offset:.4,easing:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,transform:`translate3d(0, -30px, 0) scaleY(1.1)`},{offset:.43,easing:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,transform:`translate3d(0, -30px, 0) scaleY(1.1)`},{offset:.53,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`},{offset:.7,easing:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,transform:`translate3d(0, -15px, 0) scaleY(1.05)`},{offset:.8,"transition-timing-function":`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0) scaleY(0.95)`},{offset:.9,transform:`translate3d(0, -4px, 0) scaleY(1.02)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`,transform:`translate3d(0, 0, 0)`}],tc=[{offset:0,opacity:`1`},{offset:.25,opacity:`0`},{offset:.5,opacity:`1`},{offset:.75,opacity:`0`},{offset:1,opacity:`1`}],nc=[{offset:0,transform:`translateX(0)`},{offset:.065,transform:`translateX(-6px) rotateY(-9deg)`},{offset:.185,transform:`translateX(5px) rotateY(7deg)`},{offset:.315,transform:`translateX(-3px) rotateY(-5deg)`},{offset:.435,transform:`translateX(2px) rotateY(3deg)`},{offset:.5,transform:`translateX(0)`}],rc=[{offset:0,transform:`scale(1)`},{offset:.14,transform:`scale(1.3)`},{offset:.28,transform:`scale(1)`},{offset:.42,transform:`scale(1.3)`},{offset:.7,transform:`scale(1)`}],ic=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.111,transform:`translate3d(0, 0, 0)`},{offset:.222,transform:`skewX(-12.5deg) skewY(-12.5deg)`},{offset:.33299999999999996,transform:`skewX(6.25deg) skewY(6.25deg)`},{offset:.444,transform:`skewX(-3.125deg) skewY(-3.125deg)`},{offset:.555,transform:`skewX(1.5625deg) skewY(1.5625deg)`},{offset:.6659999999999999,transform:`skewX(-0.78125deg) skewY(-0.78125deg)`},{offset:.777,transform:`skewX(0.390625deg) skewY(0.390625deg)`},{offset:.888,transform:`skewX(-0.1953125deg) skewY(-0.1953125deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],ac=[{offset:0,transform:`scale3d(1, 1, 1)`},{offset:.5,transform:`scale3d(1.05, 1.05, 1.05)`},{offset:1,transform:`scale3d(1, 1, 1)`}],oc=[{offset:0,transform:`scale3d(1, 1, 1)`},{offset:.3,transform:`scale3d(1.25, 0.75, 1)`},{offset:.4,transform:`scale3d(0.75, 1.25, 1)`},{offset:.5,transform:`scale3d(1.15, 0.85, 1)`},{offset:.65,transform:`scale3d(0.95, 1.05, 1)`},{offset:.75,transform:`scale3d(1.05, 0.95, 1)`},{offset:1,transform:`scale3d(1, 1, 1)`}],sc=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.1,transform:`translate3d(-10px, 0, 0)`},{offset:.2,transform:`translate3d(10px, 0, 0)`},{offset:.3,transform:`translate3d(-10px, 0, 0)`},{offset:.4,transform:`translate3d(10px, 0, 0)`},{offset:.5,transform:`translate3d(-10px, 0, 0)`},{offset:.6,transform:`translate3d(10px, 0, 0)`},{offset:.7,transform:`translate3d(-10px, 0, 0)`},{offset:.8,transform:`translate3d(10px, 0, 0)`},{offset:.9,transform:`translate3d(-10px, 0, 0)`},{offset:1,transform:`translate3d(0, 0, 0)`}],cc=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.1,transform:`translate3d(-10px, 0, 0)`},{offset:.2,transform:`translate3d(10px, 0, 0)`},{offset:.3,transform:`translate3d(-10px, 0, 0)`},{offset:.4,transform:`translate3d(10px, 0, 0)`},{offset:.5,transform:`translate3d(-10px, 0, 0)`},{offset:.6,transform:`translate3d(10px, 0, 0)`},{offset:.7,transform:`translate3d(-10px, 0, 0)`},{offset:.8,transform:`translate3d(10px, 0, 0)`},{offset:.9,transform:`translate3d(-10px, 0, 0)`},{offset:1,transform:`translate3d(0, 0, 0)`}],lc=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.1,transform:`translate3d(0, -10px, 0)`},{offset:.2,transform:`translate3d(0, 10px, 0)`},{offset:.3,transform:`translate3d(0, -10px, 0)`},{offset:.4,transform:`translate3d(0, 10px, 0)`},{offset:.5,transform:`translate3d(0, -10px, 0)`},{offset:.6,transform:`translate3d(0, 10px, 0)`},{offset:.7,transform:`translate3d(0, -10px, 0)`},{offset:.8,transform:`translate3d(0, 10px, 0)`},{offset:.9,transform:`translate3d(0, -10px, 0)`},{offset:1,transform:`translate3d(0, 0, 0)`}],uc=[{offset:.2,transform:`rotate3d(0, 0, 1, 15deg)`},{offset:.4,transform:`rotate3d(0, 0, 1, -10deg)`},{offset:.6,transform:`rotate3d(0, 0, 1, 5deg)`},{offset:.8,transform:`rotate3d(0, 0, 1, -5deg)`},{offset:1,transform:`rotate3d(0, 0, 1, 0deg)`}],dc=[{offset:0,transform:`scale3d(1, 1, 1)`},{offset:.1,transform:`scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)`},{offset:.2,transform:`scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg)`},{offset:.3,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:.4,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)`},{offset:.5,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:.6,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)`},{offset:.7,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:.8,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg)`},{offset:.9,transform:`scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg)`},{offset:1,transform:`scale3d(1, 1, 1)`}],fc=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:.15,transform:`translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg)`},{offset:.3,transform:`translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg)`},{offset:.45,transform:`translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg)`},{offset:.6,transform:`translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg)`},{offset:.75,transform:`translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],pc=[{offset:0,transform:`translateY(-1200px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],mc=[{offset:0,transform:`translateX(-2000px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],hc=[{offset:0,transform:`translateX(2000px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],gc=[{offset:0,transform:`translateY(1200px) scale(0.7)`,opacity:`0.7`},{offset:.8,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`scale(1)`,opacity:`1`}],_c=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateY(700px) scale(0.7)`,opacity:`0.7`}],vc=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateX(-2000px) scale(0.7)`,opacity:`0.7`}],yc=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateX(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateX(2000px) scale(0.7)`,opacity:`0.7`}],bc=[{offset:0,transform:`scale(1)`,opacity:`1`},{offset:.2,transform:`translateY(0px) scale(0.7)`,opacity:`0.7`},{offset:1,transform:`translateY(-700px) scale(0.7)`,opacity:`0.7`}],xc=[{offset:0,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.2,transform:`scale3d(1.1, 1.1, 1.1)`},{offset:.2,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.4,transform:`scale3d(0.9, 0.9, 0.9)`},{offset:.4,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`scale3d(1.03, 1.03, 1.03)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.8,transform:`scale3d(0.97, 0.97, 0.97)`},{offset:.8,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,opacity:`1`,transform:`scale3d(1, 1, 1)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Sc=[{offset:0,opacity:`0`,transform:`translate3d(0, -3000px, 0) scaleY(3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(0, 25px, 0) scaleY(0.9)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(0, -10px, 0) scaleY(0.95)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(0, 5px, 0) scaleY(0.985)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Cc=[{offset:0,opacity:`0`,transform:`translate3d(-3000px, 0, 0) scaleX(3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(25px, 0, 0) scaleX(1)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(-10px, 0, 0) scaleX(0.98)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(5px, 0, 0) scaleX(0.995)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],wc=[{offset:0,opacity:`0`,transform:`translate3d(3000px, 0, 0) scaleX(3)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(-25px, 0, 0) scaleX(1)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(10px, 0, 0) scaleX(0.98)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(-5px, 0, 0) scaleX(0.995)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Tc=[{offset:0,opacity:`0`,transform:`translate3d(0, 3000px, 0) scaleY(5)`},{offset:0,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.6,opacity:`1`,transform:`translate3d(0, -20px, 0) scaleY(0.9)`},{offset:.6,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.75,transform:`translate3d(0, 10px, 0) scaleY(0.95)`},{offset:.75,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:.9,transform:`translate3d(0, -5px, 0) scaleY(0.985)`},{offset:.9,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`},{offset:1,transform:`translate3d(0, 0, 0)`},{offset:1,easing:`cubic-bezier(0.215, 0.61, 0.355, 1)`}],Ec=[{offset:.2,transform:`scale3d(0.9, 0.9, 0.9)`},{offset:.5,opacity:`1`,transform:`scale3d(1.1, 1.1, 1.1)`},{offset:.55,opacity:`1`,transform:`scale3d(1.1, 1.1, 1.1)`},{offset:1,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`}],Dc=[{offset:.2,transform:`translate3d(0, 10px, 0) scaleY(0.985)`},{offset:.4,opacity:`1`,transform:`translate3d(0, -20px, 0) scaleY(0.9)`},{offset:.45,opacity:`1`,transform:`translate3d(0, -20px, 0) scaleY(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(0, 2000px, 0) scaleY(3)`}],Oc=[{offset:.2,opacity:`1`,transform:`translate3d(20px, 0, 0) scaleX(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(-2000px, 0, 0) scaleX(2)`}],kc=[{offset:.2,opacity:`1`,transform:`translate3d(-20px, 0, 0) scaleX(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(2000px, 0, 0) scaleX(2)`}],Ac=[{offset:.2,transform:`translate3d(0, -10px, 0) scaleY(0.985)`},{offset:.4,opacity:`1`,transform:`translate3d(0, 20px, 0) scaleY(0.9)`},{offset:.45,opacity:`1`,transform:`translate3d(0, 20px, 0) scaleY(0.9)`},{offset:1,opacity:`0`,transform:`translate3d(0, -2000px, 0) scaleY(3)`}],jc=[{offset:0,opacity:`0`},{offset:1,opacity:`1`}],Mc=[{offset:0,opacity:`0`,transform:`translate3d(-100%, 100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Nc=[{offset:0,opacity:`0`,transform:`translate3d(100%, 100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Pc=[{offset:0,opacity:`0`,transform:`translate3d(0, -100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Fc=[{offset:0,opacity:`0`,transform:`translate3d(0, -2000px, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Ic=[{offset:0,opacity:`0`,transform:`translate3d(-100%, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Lc=[{offset:0,opacity:`0`,transform:`translate3d(-2000px, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Rc=[{offset:0,opacity:`0`,transform:`translate3d(100%, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],zc=[{offset:0,opacity:`0`,transform:`translate3d(2000px, 0, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Bc=[{offset:0,opacity:`0`,transform:`translate3d(-100%, -100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Vc=[{offset:0,opacity:`0`,transform:`translate3d(100%, -100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Hc=[{offset:0,opacity:`0`,transform:`translate3d(0, 100%, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Uc=[{offset:0,opacity:`0`,transform:`translate3d(0, 2000px, 0)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Wc=[{offset:0,opacity:`1`},{offset:1,opacity:`0`}],Gc=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(-100%, 100%, 0)`}],Kc=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(100%, 100%, 0)`}],qc=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, 100%, 0)`}],Jc=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, 2000px, 0)`}],Yc=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(-100%, 0, 0)`}],Xc=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(-2000px, 0, 0)`}],Zc=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(100%, 0, 0)`}],Qc=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(2000px, 0, 0)`}],$c=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(-100%, -100%, 0)`}],el=[{offset:0,opacity:`1`,transform:`translate3d(0, 0, 0)`},{offset:1,opacity:`0`,transform:`translate3d(100%, -100%, 0)`}],tl=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, -100%, 0)`}],nl=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(0, -2000px, 0)`}],rl=[{offset:0,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg)`,easing:`ease-out`},{offset:.4,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg)`,easing:`ease-out`},{offset:.5,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg)`,easing:`ease-in`},{offset:.8,transform:`perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg)`,easing:`ease-in`},{offset:1,transform:`perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg)`,easing:`ease-in`}],il=[{offset:0,transform:`perspective(400px) rotate3d(1, 0, 0, 90deg)`,easing:`ease-in`,opacity:`0`},{offset:.4,transform:`perspective(400px) rotate3d(1, 0, 0, -20deg)`,easing:`ease-in`},{offset:.6,transform:`perspective(400px) rotate3d(1, 0, 0, 10deg)`,opacity:`1`},{offset:.8,transform:`perspective(400px) rotate3d(1, 0, 0, -5deg)`},{offset:1,transform:`perspective(400px)`}],al=[{offset:0,transform:`perspective(400px) rotate3d(0, 1, 0, 90deg)`,easing:`ease-in`,opacity:`0`},{offset:.4,transform:`perspective(400px) rotate3d(0, 1, 0, -20deg)`,easing:`ease-in`},{offset:.6,transform:`perspective(400px) rotate3d(0, 1, 0, 10deg)`,opacity:`1`},{offset:.8,transform:`perspective(400px) rotate3d(0, 1, 0, -5deg)`},{offset:1,transform:`perspective(400px)`}],ol=[{offset:0,transform:`perspective(400px)`},{offset:.3,transform:`perspective(400px) rotate3d(1, 0, 0, -20deg)`,opacity:`1`},{offset:1,transform:`perspective(400px) rotate3d(1, 0, 0, 90deg)`,opacity:`0`}],sl=[{offset:0,transform:`perspective(400px)`},{offset:.3,transform:`perspective(400px) rotate3d(0, 1, 0, -15deg)`,opacity:`1`},{offset:1,transform:`perspective(400px) rotate3d(0, 1, 0, 90deg)`,opacity:`0`}],cl=[{offset:0,transform:`translate3d(-100%, 0, 0) skewX(30deg)`,opacity:`0`},{offset:.6,transform:`skewX(-20deg)`,opacity:`1`},{offset:.8,transform:`skewX(5deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],ll=[{offset:0,transform:`translate3d(100%, 0, 0) skewX(-30deg)`,opacity:`0`},{offset:.6,transform:`skewX(20deg)`,opacity:`1`},{offset:.8,transform:`skewX(-5deg)`},{offset:1,transform:`translate3d(0, 0, 0)`}],ul=[{offset:0,opacity:`1`},{offset:1,transform:`translate3d(-100%, 0, 0) skewX(-30deg)`,opacity:`0`}],dl=[{offset:0,opacity:`1`},{offset:1,transform:`translate3d(100%, 0, 0) skewX(30deg)`,opacity:`0`}],fl=[{offset:0,transform:`rotate3d(0, 0, 1, -200deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],pl=[{offset:0,transform:`rotate3d(0, 0, 1, -45deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],ml=[{offset:0,transform:`rotate3d(0, 0, 1, 45deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],hl=[{offset:0,transform:`rotate3d(0, 0, 1, 45deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],gl=[{offset:0,transform:`rotate3d(0, 0, 1, -90deg)`,opacity:`0`},{offset:1,transform:`translate3d(0, 0, 0)`,opacity:`1`}],_l=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, 200deg)`,opacity:`0`}],vl=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, 45deg)`,opacity:`0`}],yl=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, -45deg)`,opacity:`0`}],bl=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, -45deg)`,opacity:`0`}],xl=[{offset:0,opacity:`1`},{offset:1,transform:`rotate3d(0, 0, 1, 90deg)`,opacity:`0`}],Sl=[{offset:0,transform:`translate3d(0, -100%, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],Cl=[{offset:0,transform:`translate3d(-100%, 0, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],wl=[{offset:0,transform:`translate3d(100%, 0, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],Tl=[{offset:0,transform:`translate3d(0, 100%, 0)`,visibility:`visible`},{offset:1,transform:`translate3d(0, 0, 0)`}],El=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(0, 100%, 0)`}],Dl=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(-100%, 0, 0)`}],Ol=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(100%, 0, 0)`}],kl=[{offset:0,transform:`translate3d(0, 0, 0)`},{offset:1,visibility:`hidden`,transform:`translate3d(0, -100%, 0)`}],Al=[{offset:0,easing:`ease-in-out`},{offset:.2,transform:`rotate3d(0, 0, 1, 80deg)`,easing:`ease-in-out`},{offset:.4,transform:`rotate3d(0, 0, 1, 60deg)`,easing:`ease-in-out`,opacity:`1`},{offset:.6,transform:`rotate3d(0, 0, 1, 80deg)`,easing:`ease-in-out`},{offset:.8,transform:`rotate3d(0, 0, 1, 60deg)`,easing:`ease-in-out`,opacity:`1`},{offset:1,transform:`translate3d(0, 700px, 0)`,opacity:`0`}],jl=[{offset:0,opacity:`0`,transform:`scale(0.1) rotate(30deg)`,"transform-origin":`center bottom`},{offset:.5,transform:`rotate(-10deg)`},{offset:.7,transform:`rotate(3deg)`},{offset:1,opacity:`1`,transform:`scale(1)`}],Ml=[{offset:0,opacity:`0`,transform:`translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg)`},{offset:1,opacity:`1`,transform:`translate3d(0, 0, 0)`}],Nl=[{offset:0,opacity:`1`},{offset:1,opacity:`0`,transform:`translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg)`}],Pl=[{offset:0,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`},{offset:.5,opacity:`1`}],Fl=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Il=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Ll=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Rl=[{offset:0,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:.6,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],zl=[{offset:0,opacity:`1`},{offset:.5,opacity:`0`,transform:`scale3d(0.3, 0.3, 0.3)`},{offset:1,opacity:`0`}],Bl=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:1,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Vl=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0)`},{offset:1,opacity:`0`,transform:`scale(0.1) translate3d(-2000px, 0, 0)`}],Hl=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0)`},{offset:1,opacity:`0`,transform:`scale(0.1) translate3d(2000px, 0, 0)`}],Ul=[{offset:.4,opacity:`1`,transform:`scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0)`,easing:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`},{offset:1,opacity:`0`,transform:`scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0)`,easing:`cubic-bezier(0.175, 0.885, 0.32, 1)`}],Wl={linear:`linear`,ease:`ease`,easeIn:`ease-in`,easeOut:`ease-out`,easeInOut:`ease-in-out`,easeInSine:`cubic-bezier(0.47, 0, 0.745, 0.715)`,easeOutSine:`cubic-bezier(0.39, 0.575, 0.565, 1)`,easeInOutSine:`cubic-bezier(0.445, 0.05, 0.55, 0.95)`,easeInQuad:`cubic-bezier(0.55, 0.085, 0.68, 0.53)`,easeOutQuad:`cubic-bezier(0.25, 0.46, 0.45, 0.94)`,easeInOutQuad:`cubic-bezier(0.455, 0.03, 0.515, 0.955)`,easeInCubic:`cubic-bezier(0.55, 0.055, 0.675, 0.19)`,easeOutCubic:`cubic-bezier(0.215, 0.61, 0.355, 1)`,easeInOutCubic:`cubic-bezier(0.645, 0.045, 0.355, 1)`,easeInQuart:`cubic-bezier(0.895, 0.03, 0.685, 0.22)`,easeOutQuart:`cubic-bezier(0.165, 0.84, 0.44, 1)`,easeInOutQuart:`cubic-bezier(0.77, 0, 0.175, 1)`,easeInQuint:`cubic-bezier(0.755, 0.05, 0.855, 0.06)`,easeOutQuint:`cubic-bezier(0.23, 1, 0.32, 1)`,easeInOutQuint:`cubic-bezier(0.86, 0, 0.07, 1)`,easeInExpo:`cubic-bezier(0.95, 0.05, 0.795, 0.035)`,easeOutExpo:`cubic-bezier(0.19, 1, 0.22, 1)`,easeInOutExpo:`cubic-bezier(1, 0, 0, 1)`,easeInCirc:`cubic-bezier(0.6, 0.04, 0.98, 0.335)`,easeOutCirc:`cubic-bezier(0.075, 0.82, 0.165, 1)`,easeInOutCirc:`cubic-bezier(0.785, 0.135, 0.15, 0.86)`,easeInBack:`cubic-bezier(0.6, -0.28, 0.735, 0.045)`,easeOutBack:`cubic-bezier(0.175, 0.885, 0.32, 1.275)`,easeInOutBack:`cubic-bezier(0.68, -0.55, 0.265, 1.55)`},Gl=t({backInDown:()=>pc,backInLeft:()=>mc,backInRight:()=>hc,backInUp:()=>gc,backOutDown:()=>_c,backOutLeft:()=>vc,backOutRight:()=>yc,backOutUp:()=>bc,bounce:()=>ec,bounceIn:()=>xc,bounceInDown:()=>Sc,bounceInLeft:()=>Cc,bounceInRight:()=>wc,bounceInUp:()=>Tc,bounceOut:()=>Ec,bounceOutDown:()=>Dc,bounceOutLeft:()=>Oc,bounceOutRight:()=>kc,bounceOutUp:()=>Ac,easings:()=>Wl,fadeIn:()=>jc,fadeInBottomLeft:()=>Mc,fadeInBottomRight:()=>Nc,fadeInDown:()=>Pc,fadeInDownBig:()=>Fc,fadeInLeft:()=>Ic,fadeInLeftBig:()=>Lc,fadeInRight:()=>Rc,fadeInRightBig:()=>zc,fadeInTopLeft:()=>Bc,fadeInTopRight:()=>Vc,fadeInUp:()=>Hc,fadeInUpBig:()=>Uc,fadeOut:()=>Wc,fadeOutBottomLeft:()=>Gc,fadeOutBottomRight:()=>Kc,fadeOutDown:()=>qc,fadeOutDownBig:()=>Jc,fadeOutLeft:()=>Yc,fadeOutLeftBig:()=>Xc,fadeOutRight:()=>Zc,fadeOutRightBig:()=>Qc,fadeOutTopLeft:()=>$c,fadeOutTopRight:()=>el,fadeOutUp:()=>tl,fadeOutUpBig:()=>nl,flash:()=>tc,flip:()=>rl,flipInX:()=>il,flipInY:()=>al,flipOutX:()=>ol,flipOutY:()=>sl,headShake:()=>nc,heartBeat:()=>rc,hinge:()=>Al,jackInTheBox:()=>jl,jello:()=>ic,lightSpeedInLeft:()=>cl,lightSpeedInRight:()=>ll,lightSpeedOutLeft:()=>ul,lightSpeedOutRight:()=>dl,pulse:()=>ac,rollIn:()=>Ml,rollOut:()=>Nl,rotateIn:()=>fl,rotateInDownLeft:()=>pl,rotateInDownRight:()=>ml,rotateInUpLeft:()=>hl,rotateInUpRight:()=>gl,rotateOut:()=>_l,rotateOutDownLeft:()=>vl,rotateOutDownRight:()=>yl,rotateOutUpLeft:()=>bl,rotateOutUpRight:()=>xl,rubberBand:()=>oc,shake:()=>sc,shakeX:()=>cc,shakeY:()=>lc,slideInDown:()=>Sl,slideInLeft:()=>Cl,slideInRight:()=>wl,slideInUp:()=>Tl,slideOutDown:()=>El,slideOutLeft:()=>Dl,slideOutRight:()=>Ol,slideOutUp:()=>kl,swing:()=>uc,tada:()=>dc,wobble:()=>fc,zoomIn:()=>Pl,zoomInDown:()=>Fl,zoomInLeft:()=>Il,zoomInRight:()=>Ll,zoomInUp:()=>Rl,zoomOut:()=>zl,zoomOutDown:()=>Bl,zoomOutLeft:()=>Vl,zoomOutRight:()=>Hl,zoomOutUp:()=>Ul}),Kl=x`
  :host {
    display: contents;
  }
`,ql=class extends k{constructor(){super(...arguments),this.hasStarted=!1,this.name=`none`,this.play=!1,this.delay=0,this.direction=`normal`,this.duration=1e3,this.easing=`linear`,this.endDelay=0,this.fill=`auto`,this.iterations=1/0,this.iterationStart=0,this.playbackRate=1,this.handleAnimationFinish=()=>{this.play=!1,this.hasStarted=!1,this.emit(`sl-finish`)},this.handleAnimationCancel=()=>{this.play=!1,this.hasStarted=!1,this.emit(`sl-cancel`)}}get currentTime(){return this.animation?.currentTime??0}set currentTime(e){this.animation&&(this.animation.currentTime=e)}connectedCallback(){super.connectedCallback(),this.createAnimation()}disconnectedCallback(){super.disconnectedCallback(),this.destroyAnimation()}handleSlotChange(){this.destroyAnimation(),this.createAnimation()}async createAnimation(){let e=Wl[this.easing]??this.easing,t=this.keyframes??Gl[this.name],n=(await this.defaultSlot).assignedElements()[0];return!n||!t?!1:(this.destroyAnimation(),this.animation=n.animate(t,{delay:this.delay,direction:this.direction,duration:this.duration,easing:e,endDelay:this.endDelay,fill:this.fill,iterationStart:this.iterationStart,iterations:this.iterations}),this.animation.playbackRate=this.playbackRate,this.animation.addEventListener(`cancel`,this.handleAnimationCancel),this.animation.addEventListener(`finish`,this.handleAnimationFinish),this.play?(this.hasStarted=!0,this.emit(`sl-start`)):this.animation.pause(),!0)}destroyAnimation(){this.animation&&(this.animation.cancel(),this.animation.removeEventListener(`cancel`,this.handleAnimationCancel),this.animation.removeEventListener(`finish`,this.handleAnimationFinish),this.hasStarted=!1)}handleAnimationChange(){this.hasUpdated&&this.createAnimation()}handlePlayChange(){return this.animation?(this.play&&!this.hasStarted&&(this.hasStarted=!0,this.emit(`sl-start`)),this.play?this.animation.play():this.animation.pause(),!0):!1}handlePlaybackRateChange(){this.animation&&(this.animation.playbackRate=this.playbackRate)}cancel(){var e;(e=this.animation)==null||e.cancel()}finish(){var e;(e=this.animation)==null||e.finish()}render(){return S` <slot @slotchange=${this.handleSlotChange}></slot> `}};ql.styles=[T,Kl],y([Gt(`slot`)],ql.prototype,`defaultSlot`,2),y([E()],ql.prototype,`name`,2),y([E({type:Boolean,reflect:!0})],ql.prototype,`play`,2),y([E({type:Number})],ql.prototype,`delay`,2),y([E()],ql.prototype,`direction`,2),y([E({type:Number})],ql.prototype,`duration`,2),y([E()],ql.prototype,`easing`,2),y([E({attribute:`end-delay`,type:Number})],ql.prototype,`endDelay`,2),y([E()],ql.prototype,`fill`,2),y([E({type:Number})],ql.prototype,`iterations`,2),y([E({attribute:`iteration-start`,type:Number})],ql.prototype,`iterationStart`,2),y([E({attribute:!1})],ql.prototype,`keyframes`,2),y([E({attribute:`playback-rate`,type:Number})],ql.prototype,`playbackRate`,2),y([w([`name`,`delay`,`direction`,`duration`,`easing`,`endDelay`,`fill`,`iterations`,`iterationsStart`,`keyframes`])],ql.prototype,`handleAnimationChange`,1),y([w(`play`)],ql.prototype,`handlePlayChange`,1),y([w(`playbackRate`)],ql.prototype,`handlePlaybackRateChange`,1),ql.define(`sl-animation`);var Jl=`modulepreload`,Yl=function(e,t){return new URL(e,t).href},Xl={},K=function(e,t,n){let r=Promise.resolve();if(t&&t.length>0){let e=document.getElementsByTagName(`link`),i=document.querySelector(`meta[property=csp-nonce]`),a=i?.nonce||i?.getAttribute(`nonce`);function o(e){return Promise.all(e.map(e=>Promise.resolve(e).then(e=>({status:`fulfilled`,value:e}),e=>({status:`rejected`,reason:e}))))}r=o(t.map(t=>{if(t=Yl(t,n),t in Xl)return;Xl[t]=!0;let r=t.endsWith(`.css`),i=r?`[rel="stylesheet"]`:``;if(n)for(let n=e.length-1;n>=0;n--){let i=e[n];if(i.href===t&&(!r||i.rel===`stylesheet`))return}else if(document.querySelector(`link[href="${t}"]${i}`))return;let o=document.createElement(`link`);if(o.rel=r?`stylesheet`:Jl,r||(o.as=`script`),o.crossOrigin=``,o.href=t,a&&o.setAttribute(`nonce`,a),document.head.appendChild(o),r)return new Promise((e,n)=>{o.addEventListener(`load`,e),o.addEventListener(`error`,()=>n(Error(`Unable to preload CSS for ${t}`)))})}))}function i(e){let t=new Event(`vite:preloadError`,{cancelable:!0});if(t.payload=e,window.dispatchEvent(t),!t.defaultPrevented)throw e}return r.then(t=>{for(let e of t||[])e.status===`rejected`&&i(e.reason);return e().catch(i)})},Zl=t({cssDefaults:()=>tu,lessDefaults:()=>ru,scssDefaults:()=>nu}),Ql=class{constructor(e,t,n){this._onDidChange=new o,this._languageId=e,this.setOptions(t),this.setModeConfiguration(n)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this.options}get options(){return this._options}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setDiagnosticsOptions(e){this.setOptions(e)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},$l={validate:!0,lint:{compatibleVendorPrefixes:`ignore`,vendorPrefix:`warning`,duplicateProperties:`warning`,emptyRules:`warning`,importStatement:`ignore`,boxModel:`ignore`,universalSelector:`ignore`,zeroUnits:`ignore`,fontFaceProperties:`warning`,hexColorLength:`error`,argumentsInColorFunction:`error`,unknownProperties:`warning`,ieHack:`ignore`,unknownVendorSpecificProperties:`ignore`,propertyIgnoredDueToDisplay:`warning`,important:`ignore`,float:`ignore`,idSelector:`ignore`},data:{useDefaultDataProvider:!0},format:{newlineBetweenSelectors:!0,newlineBetweenRules:!0,spaceAroundSelectorSeparator:!1,braceStyle:`collapse`,maxPreserveNewLines:void 0,preserveNewLines:!0}},eu={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0,documentFormattingEdits:!0,documentRangeFormattingEdits:!0},tu=new Ql(`css`,$l,eu),nu=new Ql(`scss`,$l,eu),ru=new Ql(`less`,$l,eu);function iu(){return K(()=>import(`./cssMode-BNdE3AU6.js`),__vite__mapDeps([0,1,2,3]),import.meta.url)}e.onLanguage(`less`,()=>{iu().then(e=>e.setupMode(ru))}),e.onLanguage(`scss`,()=>{iu().then(e=>e.setupMode(nu))}),e.onLanguage(`css`,()=>{iu().then(e=>e.setupMode(tu))});var au=t({handlebarDefaults:()=>hu,handlebarLanguageService:()=>mu,htmlDefaults:()=>pu,htmlLanguageService:()=>fu,razorDefaults:()=>_u,razorLanguageService:()=>gu,registerHTMLLanguageService:()=>yu}),ou=class{constructor(e,t,n){this._onDidChange=new o,this._languageId=e,this.setOptions(t),this.setModeConfiguration(n)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get options(){return this._options}get modeConfiguration(){return this._modeConfiguration}setOptions(e){this._options=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}},su={format:{tabSize:4,insertSpaces:!1,wrapLineLength:120,unformatted:`default": "a, abbr, acronym, b, bdo, big, br, button, cite, code, dfn, em, i, img, input, kbd, label, map, object, q, samp, select, small, span, strong, sub, sup, textarea, tt, var`,contentUnformatted:`pre`,indentInnerHtml:!1,preserveNewLines:!0,maxPreserveNewLines:void 0,indentHandlebars:!1,endWithNewline:!1,extraLiners:`head, body, /html`,wrapAttributes:`auto`},suggest:{},data:{useDefaultDataProvider:!0}};function cu(e){return{completionItems:!0,hovers:!0,documentSymbols:!0,links:!0,documentHighlights:!0,rename:!0,colors:!0,foldingRanges:!0,selectionRanges:!0,diagnostics:e===lu,documentFormattingEdits:e===lu,documentRangeFormattingEdits:e===lu}}var lu=`html`,uu=`handlebars`,du=`razor`,fu=yu(lu,su,cu(lu)),pu=fu.defaults,mu=yu(uu,su,cu(uu)),hu=mu.defaults,gu=yu(du,su,cu(du)),_u=gu.defaults;function vu(){return K(()=>import(`./htmlMode-C5Y82r8u.js`),__vite__mapDeps([4,1,2,3]),import.meta.url)}function yu(t,n=su,r=cu(t)){let i=new ou(t,n,r),a,o=e.onLanguage(t,async()=>{a=(await vu()).setupMode(i)});return{defaults:i,dispose(){o.dispose(),a?.dispose(),a=void 0}}}var bu=t({getWorker:()=>Su,jsonDefaults:()=>xu}),xu=new class{constructor(e,t,n){this._onDidChange=new o,this._languageId=e,this.setDiagnosticsOptions(t),this.setModeConfiguration(n)}get onDidChange(){return this._onDidChange.event}get languageId(){return this._languageId}get modeConfiguration(){return this._modeConfiguration}get diagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(this)}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(this)}}(`json`,{validate:!0,allowComments:!0,schemas:[],enableSchemaRequest:!1,schemaRequest:`warning`,schemaValidation:`warning`,comments:`error`,trailingCommas:`error`},{documentFormattingEdits:!0,documentRangeFormattingEdits:!0,completionItems:!0,hovers:!0,documentSymbols:!0,tokens:!0,colors:!0,foldingRanges:!0,diagnostics:!0,selectionRanges:!0}),Su=()=>Cu().then(e=>e.getWorker());function Cu(){return K(()=>import(`./jsonMode-BoIcXm3m.js`),__vite__mapDeps([5,1,2,3]),import.meta.url)}e.register({id:`json`,extensions:[`.json`,`.bowerrc`,`.jshintrc`,`.jscsrc`,`.eslintrc`,`.babelrc`,`.har`],aliases:[`JSON`,`json`],mimetypes:[`application/json`]}),e.onLanguage(`json`,()=>{Cu().then(e=>e.setupMode(xu))});var wu=`5.9.3`,Tu=t({JsxEmit:()=>Du,ModuleKind:()=>Eu,ModuleResolutionKind:()=>Au,NewLineKind:()=>Ou,ScriptTarget:()=>ku,getJavaScriptWorker:()=>Lu,getTypeScriptWorker:()=>Iu,javascriptDefaults:()=>Fu,typescriptDefaults:()=>Pu,typescriptVersion:()=>Mu}),Eu=(e=>(e[e.None=0]=`None`,e[e.CommonJS=1]=`CommonJS`,e[e.AMD=2]=`AMD`,e[e.UMD=3]=`UMD`,e[e.System=4]=`System`,e[e.ES2015=5]=`ES2015`,e[e.ESNext=99]=`ESNext`,e))(Eu||{}),Du=(e=>(e[e.None=0]=`None`,e[e.Preserve=1]=`Preserve`,e[e.React=2]=`React`,e[e.ReactNative=3]=`ReactNative`,e[e.ReactJSX=4]=`ReactJSX`,e[e.ReactJSXDev=5]=`ReactJSXDev`,e))(Du||{}),Ou=(e=>(e[e.CarriageReturnLineFeed=0]=`CarriageReturnLineFeed`,e[e.LineFeed=1]=`LineFeed`,e))(Ou||{}),ku=(e=>(e[e.ES3=0]=`ES3`,e[e.ES5=1]=`ES5`,e[e.ES2015=2]=`ES2015`,e[e.ES2016=3]=`ES2016`,e[e.ES2017=4]=`ES2017`,e[e.ES2018=5]=`ES2018`,e[e.ES2019=6]=`ES2019`,e[e.ES2020=7]=`ES2020`,e[e.ESNext=99]=`ESNext`,e[e.JSON=100]=`JSON`,e[e.Latest=99]=`Latest`,e))(ku||{}),Au=(e=>(e[e.Classic=1]=`Classic`,e[e.NodeJs=2]=`NodeJs`,e))(Au||{}),ju=class{constructor(e,t,n,r,i){this._onDidChange=new o,this._onDidExtraLibsChange=new o,this._extraLibs=Object.create(null),this._removedExtraLibs=Object.create(null),this._eagerModelSync=!1,this.setCompilerOptions(e),this.setDiagnosticsOptions(t),this.setWorkerOptions(n),this.setInlayHintsOptions(r),this.setModeConfiguration(i),this._onDidExtraLibsChangeTimeout=-1}get onDidChange(){return this._onDidChange.event}get onDidExtraLibsChange(){return this._onDidExtraLibsChange.event}get modeConfiguration(){return this._modeConfiguration}get workerOptions(){return this._workerOptions}get inlayHintsOptions(){return this._inlayHintsOptions}getExtraLibs(){return this._extraLibs}addExtraLib(e,t){let n;if(n=t===void 0?`ts:extralib-${Math.random().toString(36).substring(2,15)}`:t,this._extraLibs[n]&&this._extraLibs[n].content===e)return{dispose:()=>{}};let r=1;return this._removedExtraLibs[n]&&(r=this._removedExtraLibs[n]+1),this._extraLibs[n]&&(r=this._extraLibs[n].version+1),this._extraLibs[n]={content:e,version:r},this._fireOnDidExtraLibsChangeSoon(),{dispose:()=>{let e=this._extraLibs[n];e&&e.version===r&&(delete this._extraLibs[n],this._removedExtraLibs[n]=r,this._fireOnDidExtraLibsChangeSoon())}}}setExtraLibs(e){for(let e in this._extraLibs)this._removedExtraLibs[e]=this._extraLibs[e].version;if(this._extraLibs=Object.create(null),e&&e.length>0)for(let t of e){let e=t.filePath||`ts:extralib-${Math.random().toString(36).substring(2,15)}`,n=t.content,r=1;this._removedExtraLibs[e]&&(r=this._removedExtraLibs[e]+1),this._extraLibs[e]={content:n,version:r}}this._fireOnDidExtraLibsChangeSoon()}_fireOnDidExtraLibsChangeSoon(){this._onDidExtraLibsChangeTimeout===-1&&(this._onDidExtraLibsChangeTimeout=window.setTimeout(()=>{this._onDidExtraLibsChangeTimeout=-1,this._onDidExtraLibsChange.fire(void 0)},0))}getCompilerOptions(){return this._compilerOptions}setCompilerOptions(e){this._compilerOptions=e||Object.create(null),this._onDidChange.fire(void 0)}getDiagnosticsOptions(){return this._diagnosticsOptions}setDiagnosticsOptions(e){this._diagnosticsOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setWorkerOptions(e){this._workerOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setInlayHintsOptions(e){this._inlayHintsOptions=e||Object.create(null),this._onDidChange.fire(void 0)}setMaximumWorkerIdleTime(e){}setEagerModelSync(e){this._eagerModelSync=e}getEagerModelSync(){return this._eagerModelSync}setModeConfiguration(e){this._modeConfiguration=e||Object.create(null),this._onDidChange.fire(void 0)}},Mu=wu,Nu={completionItems:!0,hovers:!0,documentSymbols:!0,definitions:!0,references:!0,documentHighlights:!0,rename:!0,diagnostics:!0,documentRangeFormattingEdits:!0,signatureHelp:!0,onTypeFormattingEdits:!0,codeActions:!0,inlayHints:!0},Pu=new ju({allowNonTsExtensions:!0,target:99},{noSemanticValidation:!1,noSyntaxValidation:!1,onlyVisible:!1},{},{},Nu),Fu=new ju({allowNonTsExtensions:!0,allowJs:!0,target:99},{noSemanticValidation:!0,noSyntaxValidation:!1,onlyVisible:!1},{},{},Nu),Iu=()=>Ru().then(e=>e.getTypeScriptWorker()),Lu=()=>Ru().then(e=>e.getJavaScriptWorker());function Ru(){return K(()=>import(`./tsMode-_QuHT4Yz.js`),__vite__mapDeps([6,1,2]),import.meta.url)}e.onLanguage(`typescript`,()=>Ru().then(e=>e.setupTypeScript(Pu))),e.onLanguage(`javascript`,()=>Ru().then(e=>e.setupJavaScript(Fu)));var zu={},Bu={},Vu=class e{static getOrCreate(t){return Bu[t]||(Bu[t]=new e(t)),Bu[t]}constructor(e){this._languageId=e,this._loadingTriggered=!1,this._lazyLoadPromise=new Promise((e,t)=>{this._lazyLoadPromiseResolve=e,this._lazyLoadPromiseReject=t})}load(){return this._loadingTriggered||(this._loadingTriggered=!0,zu[this._languageId].loader().then(e=>this._lazyLoadPromiseResolve(e),e=>this._lazyLoadPromiseReject(e))),this._lazyLoadPromise}};function q(t){let n=t.id;zu[n]=t,e.register(t);let r=Vu.getOrCreate(n);e.registerTokensProviderFactory(n,{create:async()=>(await r.load()).language}),e.onLanguageEncountered(n,async()=>{let t=await r.load();e.setLanguageConfiguration(n,t.conf)})}q({id:`abap`,extensions:[`.abap`],aliases:[`abap`,`ABAP`],loader:()=>K(()=>import(`./abap-jhap-Rx2.js`),[],import.meta.url)}),q({id:`apex`,extensions:[`.cls`],aliases:[`Apex`,`apex`],mimetypes:[`text/x-apex-source`,`text/x-apex`],loader:()=>K(()=>import(`./apex-B9XtvxSu.js`),[],import.meta.url)}),q({id:`azcli`,extensions:[`.azcli`],aliases:[`Azure CLI`,`azcli`],loader:()=>K(()=>import(`./azcli-D5ormoFo.js`),[],import.meta.url)}),q({id:`bat`,extensions:[`.bat`,`.cmd`],aliases:[`Batch`,`bat`],loader:()=>K(()=>import(`./bat-CwUYq4up.js`),[],import.meta.url)}),q({id:`bicep`,extensions:[`.bicep`],aliases:[`Bicep`],loader:()=>K(()=>import(`./bicep-hW-uIdg0.js`),[],import.meta.url)}),q({id:`cameligo`,extensions:[`.mligo`],aliases:[`Cameligo`],loader:()=>K(()=>import(`./cameligo-D9-1Ck_T.js`),[],import.meta.url)}),q({id:`clojure`,extensions:[`.clj`,`.cljs`,`.cljc`,`.edn`],aliases:[`clojure`,`Clojure`],loader:()=>K(()=>import(`./clojure-eKyewdEg.js`),[],import.meta.url)}),q({id:`coffeescript`,extensions:[`.coffee`],aliases:[`CoffeeScript`,`coffeescript`,`coffee`],mimetypes:[`text/x-coffeescript`,`text/coffeescript`],loader:()=>K(()=>import(`./coffee-BG5dVM3c.js`),[],import.meta.url)}),q({id:`c`,extensions:[`.c`,`.h`],aliases:[`C`,`c`],loader:()=>K(()=>import(`./cpp-B7vCLJKK.js`),[],import.meta.url)}),q({id:`cpp`,extensions:[`.cpp`,`.cc`,`.cxx`,`.hpp`,`.hh`,`.hxx`],aliases:[`C++`,`Cpp`,`cpp`],loader:()=>K(()=>import(`./cpp-B7vCLJKK.js`),[],import.meta.url)}),q({id:`csharp`,extensions:[`.cs`,`.csx`,`.cake`],aliases:[`C#`,`csharp`],loader:()=>K(()=>import(`./csharp-Br9K5jQT.js`),[],import.meta.url)}),q({id:`csp`,extensions:[`.csp`],aliases:[`CSP`,`csp`],loader:()=>K(()=>import(`./csp-CWowLsJr.js`),[],import.meta.url)}),q({id:`css`,extensions:[`.css`],aliases:[`CSS`,`css`],mimetypes:[`text/css`],loader:()=>K(()=>import(`./css-BE3X3131.js`),[],import.meta.url)}),q({id:`cypher`,extensions:[`.cypher`,`.cyp`],aliases:[`Cypher`,`OpenCypher`],loader:()=>K(()=>import(`./cypher-CtK9TSLX.js`),[],import.meta.url)}),q({id:`dart`,extensions:[`.dart`],aliases:[`Dart`,`dart`],mimetypes:[`text/x-dart-source`,`text/x-dart`],loader:()=>K(()=>import(`./dart-DH4GCpya.js`),[],import.meta.url)}),q({id:`dockerfile`,extensions:[`.dockerfile`],filenames:[`Dockerfile`],aliases:[`Dockerfile`],loader:()=>K(()=>import(`./dockerfile-DB9tQ5FV.js`),[],import.meta.url)}),q({id:`ecl`,extensions:[`.ecl`],aliases:[`ECL`,`Ecl`,`ecl`],loader:()=>K(()=>import(`./ecl-qWkB4Nqf.js`),[],import.meta.url)}),q({id:`elixir`,extensions:[`.ex`,`.exs`],aliases:[`Elixir`,`elixir`,`ex`],loader:()=>K(()=>import(`./elixir-jiaqC1L-.js`),[],import.meta.url)}),q({id:`flow9`,extensions:[`.flow`],aliases:[`Flow9`,`Flow`,`flow9`,`flow`],loader:()=>K(()=>import(`./flow9-DE7_CeFZ.js`),[],import.meta.url)}),q({id:`fsharp`,extensions:[`.fs`,`.fsi`,`.ml`,`.mli`,`.fsx`,`.fsscript`],aliases:[`F#`,`FSharp`,`fsharp`],loader:()=>K(()=>import(`./fsharp-DR0IQ95q.js`),[],import.meta.url)}),q({id:`freemarker2`,extensions:[`.ftl`,`.ftlh`,`.ftlx`],aliases:[`FreeMarker2`,`Apache FreeMarker2`],loader:()=>K(()=>import(`./freemarker2-D1LjM0NH.js`).then(e=>e.TagAutoInterpolationDollar),__vite__mapDeps([7,1,2]),import.meta.url)}),q({id:`freemarker2.tag-angle.interpolation-dollar`,aliases:[`FreeMarker2 (Angle/Dollar)`,`Apache FreeMarker2 (Angle/Dollar)`],loader:()=>K(()=>import(`./freemarker2-D1LjM0NH.js`).then(e=>e.TagAngleInterpolationDollar),__vite__mapDeps([7,1,2]),import.meta.url)}),q({id:`freemarker2.tag-bracket.interpolation-dollar`,aliases:[`FreeMarker2 (Bracket/Dollar)`,`Apache FreeMarker2 (Bracket/Dollar)`],loader:()=>K(()=>import(`./freemarker2-D1LjM0NH.js`).then(e=>e.TagBracketInterpolationDollar),__vite__mapDeps([7,1,2]),import.meta.url)}),q({id:`freemarker2.tag-angle.interpolation-bracket`,aliases:[`FreeMarker2 (Angle/Bracket)`,`Apache FreeMarker2 (Angle/Bracket)`],loader:()=>K(()=>import(`./freemarker2-D1LjM0NH.js`).then(e=>e.TagAngleInterpolationBracket),__vite__mapDeps([7,1,2]),import.meta.url)}),q({id:`freemarker2.tag-bracket.interpolation-bracket`,aliases:[`FreeMarker2 (Bracket/Bracket)`,`Apache FreeMarker2 (Bracket/Bracket)`],loader:()=>K(()=>import(`./freemarker2-D1LjM0NH.js`).then(e=>e.TagBracketInterpolationBracket),__vite__mapDeps([7,1,2]),import.meta.url)}),q({id:`freemarker2.tag-auto.interpolation-dollar`,aliases:[`FreeMarker2 (Auto/Dollar)`,`Apache FreeMarker2 (Auto/Dollar)`],loader:()=>K(()=>import(`./freemarker2-D1LjM0NH.js`).then(e=>e.TagAutoInterpolationDollar),__vite__mapDeps([7,1,2]),import.meta.url)}),q({id:`freemarker2.tag-auto.interpolation-bracket`,aliases:[`FreeMarker2 (Auto/Bracket)`,`Apache FreeMarker2 (Auto/Bracket)`],loader:()=>K(()=>import(`./freemarker2-D1LjM0NH.js`).then(e=>e.TagAutoInterpolationBracket),__vite__mapDeps([7,1,2]),import.meta.url)}),q({id:`go`,extensions:[`.go`],aliases:[`Go`],loader:()=>K(()=>import(`./go-B27OpVON.js`),[],import.meta.url)}),q({id:`graphql`,extensions:[`.graphql`,`.gql`],aliases:[`GraphQL`,`graphql`,`gql`],mimetypes:[`application/graphql`],loader:()=>K(()=>import(`./graphql-Cw7HtomI.js`),[],import.meta.url)}),q({id:`handlebars`,extensions:[`.handlebars`,`.hbs`],aliases:[`Handlebars`,`handlebars`,`hbs`],mimetypes:[`text/x-handlebars-template`],loader:()=>K(()=>import(`./handlebars-CMTaiJlU.js`),__vite__mapDeps([8,1,2]),import.meta.url)}),q({id:`hcl`,extensions:[`.tf`,`.tfvars`,`.hcl`],aliases:[`Terraform`,`tf`,`HCL`,`hcl`],loader:()=>K(()=>import(`./hcl-CDDd0gYG.js`),[],import.meta.url)}),q({id:`html`,extensions:[`.html`,`.htm`,`.shtml`,`.xhtml`,`.mdoc`,`.jsp`,`.asp`,`.aspx`,`.jshtm`],aliases:[`HTML`,`htm`,`html`,`xhtml`],mimetypes:[`text/html`,`text/x-jshtm`,`text/template`,`text/ng-template`],loader:()=>K(()=>import(`./html-DTHzKv6s.js`),__vite__mapDeps([9,1,2]),import.meta.url)}),q({id:`ini`,extensions:[`.ini`,`.properties`,`.gitconfig`],filenames:[`config`,`.gitattributes`,`.gitconfig`,`.editorconfig`],aliases:[`Ini`,`ini`],loader:()=>K(()=>import(`./ini-ChiSjCUM.js`),[],import.meta.url)}),q({id:`java`,extensions:[`.java`,`.jav`],aliases:[`Java`,`java`],mimetypes:[`text/x-java-source`,`text/x-java`],loader:()=>K(()=>import(`./java-CKVuuvX6.js`),[],import.meta.url)}),q({id:`javascript`,extensions:[`.js`,`.es6`,`.jsx`,`.mjs`,`.cjs`],firstLine:`^#!.*\\bnode`,filenames:[`jakefile`],aliases:[`JavaScript`,`javascript`,`js`],mimetypes:[`text/javascript`],loader:()=>K(()=>import(`./javascript-lxERlcbJ.js`),__vite__mapDeps([10,1,2,11]),import.meta.url)}),q({id:`julia`,extensions:[`.jl`],aliases:[`julia`,`Julia`],loader:()=>K(()=>import(`./julia-BcKGx43g.js`),[],import.meta.url)}),q({id:`kotlin`,extensions:[`.kt`,`.kts`],aliases:[`Kotlin`,`kotlin`],mimetypes:[`text/x-kotlin-source`,`text/x-kotlin`],loader:()=>K(()=>import(`./kotlin-DemwFMfK.js`),[],import.meta.url)}),q({id:`less`,extensions:[`.less`],aliases:[`Less`,`less`],mimetypes:[`text/x-less`,`text/less`],loader:()=>K(()=>import(`./less-BFpYPxgE.js`),[],import.meta.url)}),q({id:`lexon`,extensions:[`.lex`],aliases:[`Lexon`],loader:()=>K(()=>import(`./lexon-DDPF3See.js`),[],import.meta.url)}),q({id:`lua`,extensions:[`.lua`],aliases:[`Lua`,`lua`],loader:()=>K(()=>import(`./lua-CmzM4S9z.js`),[],import.meta.url)}),q({id:`liquid`,extensions:[`.liquid`,`.html.liquid`],aliases:[`Liquid`,`liquid`],mimetypes:[`application/liquid`],loader:()=>K(()=>import(`./liquid-CRLzhPni.js`),__vite__mapDeps([12,1,2]),import.meta.url)}),q({id:`m3`,extensions:[`.m3`,`.i3`,`.mg`,`.ig`],aliases:[`Modula-3`,`Modula3`,`modula3`,`m3`],loader:()=>K(()=>import(`./m3-C75GLUav.js`),[],import.meta.url)}),q({id:`markdown`,extensions:[`.md`,`.markdown`,`.mdown`,`.mkdn`,`.mkd`,`.mdwn`,`.mdtxt`,`.mdtext`],aliases:[`Markdown`,`markdown`],loader:()=>K(()=>import(`./markdown-B6XL0Y9j.js`),[],import.meta.url)}),q({id:`mdx`,extensions:[`.mdx`],aliases:[`MDX`,`mdx`],loader:()=>K(()=>import(`./mdx-D1-GLFm5.js`),__vite__mapDeps([13,1,2]),import.meta.url)}),q({id:`mips`,extensions:[`.s`],aliases:[`MIPS`,`MIPS-V`],mimetypes:[`text/x-mips`,`text/mips`,`text/plaintext`],loader:()=>K(()=>import(`./mips-BG4Fy7Bl.js`),[],import.meta.url)}),q({id:`msdax`,extensions:[`.dax`,`.msdax`],aliases:[`DAX`,`MSDAX`],loader:()=>K(()=>import(`./msdax-H0aqYz0U.js`),[],import.meta.url)}),q({id:`mysql`,extensions:[],aliases:[`MySQL`,`mysql`],loader:()=>K(()=>import(`./mysql-CDbOhBhf.js`),[],import.meta.url)}),q({id:`objective-c`,extensions:[`.m`],aliases:[`Objective-C`],loader:()=>K(()=>import(`./objective-c-DKE6-VEf.js`),[],import.meta.url)}),q({id:`pascal`,extensions:[`.pas`,`.p`,`.pp`],aliases:[`Pascal`,`pas`],mimetypes:[`text/x-pascal-source`,`text/x-pascal`],loader:()=>K(()=>import(`./pascal-DBuqflGM.js`),[],import.meta.url)}),q({id:`pascaligo`,extensions:[`.ligo`],aliases:[`Pascaligo`,`ligo`],loader:()=>K(()=>import(`./pascaligo-BVtulzHb.js`),[],import.meta.url)}),q({id:`perl`,extensions:[`.pl`,`.pm`],aliases:[`Perl`,`pl`],loader:()=>K(()=>import(`./perl-xkTv78ng.js`),[],import.meta.url)}),q({id:`pgsql`,extensions:[],aliases:[`PostgreSQL`,`postgres`,`pg`,`postgre`],loader:()=>K(()=>import(`./pgsql-Cxti3J5E.js`),[],import.meta.url)}),q({id:`php`,extensions:[`.php`,`.php4`,`.php5`,`.phtml`,`.ctp`],aliases:[`PHP`,`php`],mimetypes:[`application/x-php`],loader:()=>K(()=>import(`./php-Bh5BD3dg.js`),[],import.meta.url)}),q({id:`pla`,extensions:[`.pla`],loader:()=>K(()=>import(`./pla-DSsYzlXV.js`),[],import.meta.url)}),q({id:`postiats`,extensions:[`.dats`,`.sats`,`.hats`],aliases:[`ATS`,`ATS/Postiats`],loader:()=>K(()=>import(`./postiats-De0qivlp.js`),[],import.meta.url)}),q({id:`powerquery`,extensions:[`.pq`,`.pqm`],aliases:[`PQ`,`M`,`Power Query`,`Power Query M`],loader:()=>K(()=>import(`./powerquery-KGKq89F-.js`),[],import.meta.url)}),q({id:`powershell`,extensions:[`.ps1`,`.psm1`,`.psd1`],aliases:[`PowerShell`,`powershell`,`ps`,`ps1`],loader:()=>K(()=>import(`./powershell-Djwhihrv.js`),[],import.meta.url)}),q({id:`proto`,extensions:[`.proto`],aliases:[`protobuf`,`Protocol Buffers`],loader:()=>K(()=>import(`./protobuf-Jbp01qUU.js`),[],import.meta.url)}),q({id:`pug`,extensions:[`.jade`,`.pug`],aliases:[`Pug`,`Jade`,`jade`],loader:()=>K(()=>import(`./pug-BntfJCN7.js`),[],import.meta.url)}),q({id:`python`,extensions:[`.py`,`.rpy`,`.pyw`,`.cpy`,`.gyp`,`.gypi`],aliases:[`Python`,`py`],firstLine:`^#!/.*\\bpython[0-9.-]*\\b`,loader:()=>K(()=>import(`./python-C1f9JT78.js`),__vite__mapDeps([14,1,2]),import.meta.url)}),q({id:`qsharp`,extensions:[`.qs`],aliases:[`Q#`,`qsharp`],loader:()=>K(()=>import(`./qsharp-CHH1r_aq.js`),[],import.meta.url)}),q({id:`r`,extensions:[`.r`,`.rhistory`,`.rmd`,`.rprofile`,`.rt`],aliases:[`R`,`r`],loader:()=>K(()=>import(`./r-BbeUcBN9.js`),[],import.meta.url)}),q({id:`razor`,extensions:[`.cshtml`],aliases:[`Razor`,`razor`],mimetypes:[`text/x-cshtml`],loader:()=>K(()=>import(`./razor-CnlLKp0o.js`),__vite__mapDeps([15,1,2]),import.meta.url)}),q({id:`redis`,extensions:[`.redis`],aliases:[`redis`],loader:()=>K(()=>import(`./redis-DR9m_VtD.js`),[],import.meta.url)}),q({id:`redshift`,extensions:[],aliases:[`Redshift`,`redshift`],loader:()=>K(()=>import(`./redshift-D97Qa-FW.js`),[],import.meta.url)}),q({id:`restructuredtext`,extensions:[`.rst`],aliases:[`reStructuredText`,`restructuredtext`],loader:()=>K(()=>import(`./restructuredtext-DQ1MtboI.js`),[],import.meta.url)}),q({id:`ruby`,extensions:[`.rb`,`.rbx`,`.rjs`,`.gemspec`,`.pp`],filenames:[`rakefile`,`Gemfile`],aliases:[`Ruby`,`rb`],loader:()=>K(()=>import(`./ruby-ByLGeogt.js`),[],import.meta.url)}),q({id:`rust`,extensions:[`.rs`,`.rlib`],aliases:[`Rust`,`rust`],loader:()=>K(()=>import(`./rust-CIqtS9ON.js`),[],import.meta.url)}),q({id:`sb`,extensions:[`.sb`],aliases:[`Small Basic`,`sb`],loader:()=>K(()=>import(`./sb-ByVTEZ1d.js`),[],import.meta.url)}),q({id:`scala`,extensions:[`.scala`,`.sc`,`.sbt`],aliases:[`Scala`,`scala`,`SBT`,`Sbt`,`sbt`,`Dotty`,`dotty`],mimetypes:[`text/x-scala-source`,`text/x-scala`,`text/x-sbt`,`text/x-dotty`],loader:()=>K(()=>import(`./scala-DvkPypTh.js`),[],import.meta.url)}),q({id:`scheme`,extensions:[`.scm`,`.ss`,`.sch`,`.rkt`],aliases:[`scheme`,`Scheme`],loader:()=>K(()=>import(`./scheme-CQy1Ya2H.js`),[],import.meta.url)}),q({id:`scss`,extensions:[`.scss`],aliases:[`Sass`,`sass`,`scss`],mimetypes:[`text/x-scss`,`text/scss`],loader:()=>K(()=>import(`./scss-DLIO8qmP.js`),[],import.meta.url)}),q({id:`shell`,extensions:[`.sh`,`.bash`],aliases:[`Shell`,`sh`],loader:()=>K(()=>import(`./shell-BZaILY8J.js`),[],import.meta.url)}),q({id:`sol`,extensions:[`.sol`],aliases:[`sol`,`solidity`,`Solidity`],loader:()=>K(()=>import(`./solidity-D80FpOWz.js`),[],import.meta.url)}),q({id:`aes`,extensions:[`.aes`],aliases:[`aes`,`sophia`,`Sophia`],loader:()=>K(()=>import(`./sophia-DXh1T4eB.js`),[],import.meta.url)}),q({id:`sparql`,extensions:[`.rq`],aliases:[`sparql`,`SPARQL`],loader:()=>K(()=>import(`./sparql-DHSgmKlJ.js`),[],import.meta.url)}),q({id:`sql`,extensions:[`.sql`],aliases:[`SQL`],loader:()=>K(()=>import(`./sql-9GboOSCN.js`),[],import.meta.url)}),q({id:`st`,extensions:[`.st`,`.iecst`,`.iecplc`,`.lc3lib`,`.TcPOU`,`.TcDUT`,`.TcGVL`,`.TcIO`],aliases:[`StructuredText`,`scl`,`stl`],loader:()=>K(()=>import(`./st--m1Z2h3c.js`),[],import.meta.url)}),q({id:`swift`,aliases:[`Swift`,`swift`],extensions:[`.swift`],mimetypes:[`text/swift`],loader:()=>K(()=>import(`./swift-DMo7Bf1r.js`),[],import.meta.url)}),q({id:`systemverilog`,extensions:[`.sv`,`.svh`],aliases:[`SV`,`sv`,`SystemVerilog`,`systemverilog`],loader:()=>K(()=>import(`./systemverilog-D6kP5wsA.js`),[],import.meta.url)}),q({id:`verilog`,extensions:[`.v`,`.vh`],aliases:[`V`,`v`,`Verilog`,`verilog`],loader:()=>K(()=>import(`./systemverilog-D6kP5wsA.js`),[],import.meta.url)}),q({id:`tcl`,extensions:[`.tcl`],aliases:[`tcl`,`Tcl`,`tcltk`,`TclTk`,`tcl/tk`,`Tcl/Tk`],loader:()=>K(()=>import(`./tcl-HAhMyY2Y.js`),[],import.meta.url)}),q({id:`twig`,extensions:[`.twig`],aliases:[`Twig`,`twig`],mimetypes:[`text/x-twig`],loader:()=>K(()=>import(`./twig-RNzllx71.js`),[],import.meta.url)}),q({id:`typescript`,extensions:[`.ts`,`.tsx`,`.cts`,`.mts`],aliases:[`TypeScript`,`ts`,`typescript`],mimetypes:[`text/typescript`],loader:()=>K(()=>import(`./typescript-d6ESk2YQ.js`),__vite__mapDeps([11,1,2]),import.meta.url)}),q({id:`typespec`,extensions:[`.tsp`],aliases:[`TypeSpec`],loader:()=>K(()=>import(`./typespec-DeyXqKVJ.js`),[],import.meta.url)}),q({id:`vb`,extensions:[`.vb`],aliases:[`Visual Basic`,`vb`],loader:()=>K(()=>import(`./vb-BfpeX2r9.js`),[],import.meta.url)}),q({id:`wgsl`,extensions:[`.wgsl`],aliases:[`WebGPU Shading Language`,`WGSL`,`wgsl`],loader:()=>K(()=>import(`./wgsl-B52428dy.js`),[],import.meta.url)}),q({id:`xml`,extensions:[`.xml`,`.xsd`,`.dtd`,`.ascx`,`.csproj`,`.config`,`.props`,`.targets`,`.wxi`,`.wxl`,`.wxs`,`.xaml`,`.svg`,`.svgz`,`.opf`,`.xslt`,`.xsl`],firstLine:`(\\<\\?xml.*)|(\\<svg)|(\\<\\!doctype\\s+svg)`,aliases:[`XML`,`xml`],mimetypes:[`text/xml`,`application/xml`,`application/xaml+xml`,`application/xml-dtd`],loader:()=>K(()=>import(`./xml-CGqaEaK7.js`),__vite__mapDeps([16,1,2]),import.meta.url)}),q({id:`yaml`,extensions:[`.yaml`,`.yml`],aliases:[`YAML`,`yaml`,`YML`,`yml`],mimetypes:[`application/x-yaml`,`text/x-yaml`],loader:()=>K(()=>import(`./yaml-Ds-G9R_3.js`),__vite__mapDeps([17,1,2]),import.meta.url)});var Hu=Object.defineProperty,Uu=(e,t,n)=>t in e?Hu(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,J=(e,t,n)=>Uu(e,typeof t==`symbol`?t:t+``,n),Wu,Gu,Ku,qu,Ju;function Yu(e){return e.method!==void 0}var Xu;(function(e){function t(e){return e}e.create=t})(Xu||={});var Zu;(function(e){e.parseError=-32700,e.invalidRequest=-32600,e.methodNotFound=-32601,e.invalidParams=-32602,e.internalError=-32603;function t(e){return-32099<=e&&e<=-32e3}e.isServerError=t;function n(e){if(!t(e))throw Error(`Invalid range for a server error.`);return e}e.serverError=n,e.unexpectedServerError=-32e3;function r(e){return!0}e.isApplicationError=r;function i(e){return e}e.applicationError=i,e.genericApplicationError=-320100})(Zu||={});var Qu=class{constructor(){J(this,`listeners`,new Set),J(this,`event`,e=>(this.listeners.add(e),{dispose:()=>{this.listeners.delete(e)}}))}fire(e){this.listeners.forEach(t=>t(e))}},$u=class{constructor(e){J(this,`_value`),J(this,`eventEmitter`),this._value=e,this.eventEmitter=new Qu}get value(){return this._value}set value(e){this._value!==e&&(this._value=e,this.eventEmitter.fire(e))}get onChange(){return this.eventEmitter.event}};function ed(e,t){let n=setTimeout(t,e);return{dispose:()=>clearTimeout(n)}}function td(e,t,n){return e instanceof Set?(e.add(t),{dispose:()=>e.delete(t)}):(e.set(t,n),{dispose:()=>e.delete(t)})}var nd=class{constructor(){J(this,`_state`,`none`),J(this,`promise`),J(this,`resolve`,()=>{}),J(this,`reject`,()=>{}),this.promise=new Promise((e,t)=>{this.resolve=e,this.reject=t})}get state(){return this._state}};Wu=class{constructor(){J(this,`_unprocessedMessages`,[]),J(this,`_messageListener`),J(this,`id`,Wu.id++),J(this,`_state`,new $u({state:`open`})),J(this,`state`,this._state)}setListener(e){if(this._messageListener=e,e)for(;this._unprocessedMessages.length>0&&this._messageListener!==void 0;){let e=this._unprocessedMessages.shift();this._messageListener(e)}}send(e){return this._sendImpl(e)}_dispatchReceivedMessage(e){this._unprocessedMessages.length===0&&this._messageListener?this._messageListener(e):this._unprocessedMessages.push(e)}_onConnectionClosed(){this._state.value={state:`closed`,error:void 0}}log(e){return new rd(this,e??new id)}},J(Wu,`id`,0);var rd=class{constructor(e,t){J(this,`baseStream`),J(this,`logger`),this.baseStream=e,this.logger=t}get state(){return this.baseStream.state}setListener(e){if(e===void 0){this.baseStream.setListener(void 0);return}this.baseStream.setListener(t=>{this.logger.log(this.baseStream,`incoming`,t),e(t)})}send(e){return this.logger.log(this.baseStream,`outgoing`,e),this.baseStream.send(e)}toString(){return`StreamLogger/${this.baseStream.toString()}`}},id=class{log(e,t,n){let r=t===`incoming`?`<-`:`->`;console.log(`${r} [${e.toString()}] ${JSON.stringify(n)}`)}},ad=class e{constructor(e){J(this,`connect`),this.connect=e}mapContext(t){return new e(e=>this.connect(e?od(e,t):void 0))}};function od(e,t){return{handleNotification:(n,r)=>e.handleNotification(n,t(r)),handleRequest:(n,r,i)=>e.handleRequest(n,r,t(i))}}var sd=class e{constructor(e,t,n){J(this,`_stream`),J(this,`_listener`),J(this,`_logger`),J(this,`_unprocessedResponses`,new Map),J(this,`_lastUsedRequestId`,0),this._stream=e,this._listener=t,this._logger=n,this._stream.setListener(e=>{Yu(e)?e.id===void 0?this._processNotification(e):this._processRequest(e):this._processResponse(e)})}static createChannel(t,n){let r=!1;return new ad(i=>{if(r)throw Error(`A channel to the stream ${t} was already constructed!`);return r=!0,new e(t,i,n)})}get state(){return this._stream.state}async _processNotification(e){if(e.id!==void 0)throw Error();if(!this._listener){this._logger&&this._logger.debug({text:`Notification ignored`,message:e});return}try{await this._listener.handleNotification({method:e.method,params:e.params||null})}catch(t){this._logger&&this._logger.warn({text:`Exception was thrown while handling notification: ${t}`,exception:t,message:e})}}async _processRequest(e){if(e.id===void 0)throw Error();let t;if(this._listener)try{t=await this._listener.handleRequest({method:e.method,params:e.params||null},e.id)}catch(n){this._logger&&this._logger.warn({text:`Exception was thrown while handling request: ${n}`,message:e,exception:n}),t={error:{code:Zu.internalError,message:`An unexpected exception was thrown.`,data:void 0}}}else this._logger&&this._logger.debug({text:`Received request even though not listening for requests`,message:e}),t={error:{code:Zu.methodNotFound,message:`This endpoint does not listen for requests or notifications.`,data:void 0}};let n;n=`result`in t?{jsonrpc:`2.0`,id:e.id,result:t.result}:{jsonrpc:`2.0`,id:e.id,error:t.error},await this._stream.send(n)}_processResponse(e){let t=``+e.id,n=this._unprocessedResponses.get(t);if(!n){this._logger&&this._logger.debug({text:`Got an unexpected response message`,message:e});return}this._unprocessedResponses.delete(t),n(e)}_newRequestId(){return this._lastUsedRequestId++}sendRequest(e,t,n){let r={jsonrpc:`2.0`,id:this._newRequestId(),method:e.method,params:e.params||void 0};return n&&n(r.id),new Promise((e,t)=>{let n=``+r.id;this._unprocessedResponses.set(n,n=>{`result`in n?e({result:n.result}):(n.error||t(Error(`Response had neither 'result' nor 'error' field set.`)),e({error:n.error}))}),this._stream.send(r).then(void 0,e=>{this._unprocessedResponses.delete(n),t(e)})})}sendNotification(e,t){let n={jsonrpc:`2.0`,id:void 0,method:e.method,params:e.params||void 0};return this._stream.send(n)}toString(){return`StreamChannel/`+this._stream.toString()}},cd;(function(e){function t(){return{deserializeFromJson:e=>({hasErrors:!1,value:e}),serializeToJson:e=>e}}e.sAny=t;function n(){return{deserializeFromJson:e=>({hasErrors:!1,value:{}}),serializeToJson:e=>({})}}e.sEmptyObject=n;function r(){return{deserializeFromJson:e=>({hasErrors:!1,value:void 0}),serializeToJson:e=>null}}e.sVoidFromNull=r})(cd||={});var ld=Symbol(`OptionalMethodNotFound`),ud=class{contextualize(e){return new dd(this,e)}},dd=class extends ud{constructor(e,t){super(),J(this,`underylingTypedChannel`),J(this,`converters`),this.underylingTypedChannel=e,this.converters=t}async request(e,t,n){let r=await this.converters.getSendContext(n);return this.underylingTypedChannel.request(e,t,r)}async notify(e,t,n){let r=await this.converters.getSendContext(n);return this.underylingTypedChannel.notify(e,t,r)}registerNotificationHandler(e,t){return this.underylingTypedChannel.registerNotificationHandler(e,async(e,n)=>await t(e,await this.converters.getNewContext(n)))}registerRequestHandler(e,t){return this.underylingTypedChannel.registerRequestHandler(e,async(e,n,r)=>await t(e,n,await this.converters.getNewContext(r)))}},fd=class e extends ud{constructor(e,t={}){super(),J(this,`channelCtor`),J(this,`_requestSender`),J(this,`_handler`,new Map),J(this,`_unknownNotificationHandler`,new Set),J(this,`_timeout`),J(this,`sendExceptionDetails`,!1),J(this,`_logger`),J(this,`listeningDeferred`,new nd),J(this,`onListening`,this.listeningDeferred.promise),J(this,`_requestDidErrorEventEmitter`,new Qu),J(this,`onRequestDidError`,this._requestDidErrorEventEmitter.event),this.channelCtor=e,this._logger=t.logger,this.sendExceptionDetails=!!t.sendExceptionDetails,this._timeout=ed(1e3,()=>{this._requestSender||console.warn(`"${this.startListen.name}" has not been called within 1 second after construction of this channel. Did you forget to call it?`,this)})}static fromTransport(t,n={}){return new e(sd.createChannel(t,n.logger),n)}startListen(){if(this._requestSender)throw Error(`"${this.startListen.name}" can be called only once, but it already has been called.`);this._timeout&&=(this._timeout.dispose(),void 0),this._requestSender=this.channelCtor.connect({handleRequest:(e,t,n)=>this.handleRequest(e,t,n),handleNotification:(e,t)=>this.handleNotification(e,t)}),this.listeningDeferred.resolve()}checkChannel(e){if(!e)throw Error(`"${this.startListen.name}" must be called before any messages can be sent or received.`);return!0}async handleRequest(e,t,n){let r=this._handler.get(e.method);if(!r)return this._logger&&this._logger.debug({text:`No request handler for "${e.method}".`,data:{requestObject:e}}),{error:{code:Zu.methodNotFound,message:`No request handler for "${e.method}".`,data:{method:e.method}}};if(r.kind!=`request`){let t=`"${e.method}" is registered as notification, but was sent as request.`;return this._logger&&this._logger.debug({text:t,data:{requestObject:e}}),{error:{code:Zu.invalidRequest,message:t,data:{method:e.method}}}}let i=r.requestType.paramsSerializer.deserializeFromJson(e.params);if(i.hasErrors){let t=`Got invalid params: ${i.errorMessage}`;return this._logger&&this._logger.debug({text:t,data:{requestObject:e,errorMessage:i.errorMessage}}),{error:{code:Zu.invalidParams,message:t,data:{errors:i.errorMessage}}}}else{let a=i.value,o;try{let e=await r.handler(a,t,n);if(`error`in e||`errorMessage`in e){let t=e.error?r.requestType.errorSerializer.serializeToJson(e.error):void 0;o={error:{code:e.errorCode||Zu.genericApplicationError,message:e.errorMessage||`An error was returned`,data:t}}}else o={result:r.requestType.resultSerializer.serializeToJson(e.ok)}}catch(t){t instanceof md?o={error:{code:t.code,message:t.message}}:(this._logger&&this._logger.warn({text:`An exception was thrown while handling a request: ${t}.`,exception:t,data:{requestObject:e}}),o={error:{code:Zu.unexpectedServerError,message:this.sendExceptionDetails?`An exception was thrown while handling a request: ${t}.`:`Server has thrown an unexpected exception`}})}return o}}async handleNotification(e,t){let n=this._handler.get(e.method);if(!n){for(let t of this._unknownNotificationHandler)t(e);this._unknownNotificationHandler.size===0&&this._logger&&this._logger.debug({text:`Unhandled notification "${e.method}"`,data:{requestObject:e}});return}if(n.kind!=`notification`){this._logger&&this._logger.debug({text:`"${e.method}" is registered as request, but was sent as notification.`,data:{requestObject:e}});return}let r=n.notificationType.paramsSerializer.deserializeFromJson(e.params);if(r.hasErrors){this._logger&&this._logger.debug({text:`Got invalid params: ${r}`,data:{requestObject:e,errorMessage:r.errorMessage}});return}let i=r.value;for(let r of n.handlers)try{r(i,t)}catch(t){this._logger&&this._logger.warn({text:`An exception was thrown while handling a notification: ${t}.`,exception:t,data:{requestObject:e}})}}registerUnknownNotificationHandler(e){return td(this._unknownNotificationHandler,e)}registerRequestHandler(e,t){if(this._handler.get(e.method))throw Error(`Handler with method "${e.method}" already registered.`);return td(this._handler,e.method,{kind:`request`,requestType:e,handler:t})}registerNotificationHandler(e,t){let n=this._handler.get(e.method);if(!n)n={kind:`notification`,notificationType:e,handlers:new Set},this._handler.set(e.method,n);else{if(n.kind!==`notification`)throw Error(`Method "${e.method}" was already registered as request handler.`);if(n.notificationType!==e)throw Error(`Method "${e.method}" was registered for a different type.`)}return td(n.handlers,t)}getRegisteredTypes(){let e=[];for(let t of this._handler.values())t.kind===`notification`?e.push(t.notificationType):t.kind===`request`&&e.push(t.requestType);return e}async request(e,t,n){if(!this.checkChannel(this._requestSender))throw Error(`Impossible`);let r=e.paramsSerializer.serializeToJson(t);pd(r);let i=await this._requestSender.sendRequest({method:e.method,params:r},n);if(`error`in i){if(e.isOptional&&i.error.code===Zu.methodNotFound)return ld;let t;if(i.error.data!==void 0){let n=e.errorSerializer.deserializeFromJson(i.error.data);if(n.hasErrors)throw Error(n.errorMessage);t=n.value}else t=void 0;let n=new md(i.error.message,t,i.error.code);throw this._requestDidErrorEventEmitter.fire({error:n}),n}else{let t=e.resultSerializer.deserializeFromJson(i.result);if(t.hasErrors)throw Error(`Could not deserialize response: `+t.errorMessage+`

${JSON.stringify(i,null,2)}`);return t.value}}async notify(e,t,n){if(!this.checkChannel(this._requestSender))throw Error();let r=e.paramsSerializer.serializeToJson(t);pd(r),this._requestSender.sendNotification({method:e.method,params:r},n)}};function pd(e){if(e!==null&&Array.isArray(e)&&typeof e!=`object`)throw Error(`Invalid value! Only null, array and object is allowed.`)}var md=class e extends Error{constructor(t,n,r=Zu.genericApplicationError){super(t),J(this,`data`),J(this,`code`),this.data=n,this.code=r,Object.setPrototypeOf(this,e.prototype)}},hd=class e{constructor(e,t,n,r,i=!1){J(this,`method`),J(this,`paramsSerializer`),J(this,`resultSerializer`),J(this,`errorSerializer`),J(this,`isOptional`),J(this,`kind`,`request`),this.method=e,this.paramsSerializer=t,this.resultSerializer=n,this.errorSerializer=r,this.isOptional=i}withMethod(t){return new e(t,this.paramsSerializer,this.resultSerializer,this.errorSerializer)}optional(){return new e(this.method,this.paramsSerializer,this.resultSerializer,this.errorSerializer,!0)}},gd=class e{constructor(e,t){J(this,`method`),J(this,`paramsSerializer`),J(this,`kind`,`notification`),this.method=e,this.paramsSerializer=t}withMethod(t){return new e(t,this.paramsSerializer)}};function Y(e){return new hd((e||{}).method,cd.sAny(),cd.sAny(),cd.sAny())}function X(e){return new gd((e||{}).method,cd.sAny())}var _d=(Gu=Symbol(),Ku=class{constructor(e){J(this,`error`),J(this,Gu),this.error=e}},J(Ku,`factory`,e=>new Ku(e)),Ku);function vd(e){let t=yd(e.server),n=yd(e.client);return new bd(e.tags||[],t,n)}function yd(e){let t={};for(let[n,r]of Object.entries(e)){let e=r.method?r.method:n;t[n]=r.withMethod(e)}return t}var bd=class e{constructor(e=[],t,n){J(this,`tags`),J(this,`server`),J(this,`client`),this.tags=e,this.server=t,this.client=n}_onlyDesignTime(){return Error(`This property is not meant to be accessed at runtime`)}get TContractObject(){throw this._onlyDesignTime()}get TClientInterface(){throw this._onlyDesignTime()}get TServerInterface(){throw this._onlyDesignTime()}get TClientHandler(){throw this._onlyDesignTime()}get TServerHandler(){throw this._onlyDesignTime()}get TTags(){throw this._onlyDesignTime()}getInterface(e,t,n,r){let i=this.buildCounterpart(e,n),a=this.registerHandlers(e,t,r,i);return{counterpart:i,dispose:()=>a.dispose()}}buildCounterpart(e,t){let n={};for(let[r,i]of Object.entries(t)){let t;t=i.kind===`request`?i.isOptional?async(t,n)=>{t===void 0&&(t={});try{return await e.request(i,t,n)}catch(e){if(e&&e.code===Zu.methodNotFound)return ld;throw e}}:(t,n)=>(t===void 0&&(t={}),e.request(i,t,n)):(t,n)=>(t===void 0&&(t={}),e.notify(i,t,n)),n[r]=t}return n}registerHandlers(e,t,n,r){let i=[];for(let[a,o]of Object.entries(t))if(o.kind===`request`){let t=n[a];if(!t)continue;let s=this.createRequestHandler(r,t);i.push(e.registerRequestHandler(o,s))}else{let t=n[a];t&&i.push(e.registerNotificationHandler(o,(e,n)=>{t(e,{context:n,counterpart:r})}))}return{dispose:()=>i.forEach(e=>e.dispose())}}createRequestHandler(e,t){return async(n,r,i)=>{let a=await t(n,{context:i,counterpart:e,newErr:_d.factory,requestId:r});return a instanceof _d?a.error:{ok:a}}}static getServerFromStream(e,t,n,r){let i=fd.fromTransport(t,n),{server:a}=e.getServer(i,r);return i.startListen(),{channel:i,server:a}}static registerServerToStream(e,t,n,r){let i=fd.fromTransport(t,n),{client:a}=e.registerServer(i,r);return i.startListen(),{channel:i,client:a}}getServer(e,t){let{counterpart:n,dispose:r}=this.getInterface(e,this.client,this.server,t);return{server:n,dispose:r}}registerServer(e,t){let{counterpart:n,dispose:r}=this.getInterface(e,this.server,this.client,t);return{client:n,dispose:r}}withContext(){return new e(this.tags,this.server,this.client)}},xd=(function(e){return e.Comment=`comment`,e.Imports=`imports`,e.Region=`region`,e})({}),Z=(function(e){return e[e.File=1]=`File`,e[e.Module=2]=`Module`,e[e.Namespace=3]=`Namespace`,e[e.Package=4]=`Package`,e[e.Class=5]=`Class`,e[e.Method=6]=`Method`,e[e.Property=7]=`Property`,e[e.Field=8]=`Field`,e[e.Constructor=9]=`Constructor`,e[e.Enum=10]=`Enum`,e[e.Interface=11]=`Interface`,e[e.Function=12]=`Function`,e[e.Variable=13]=`Variable`,e[e.Constant=14]=`Constant`,e[e.String=15]=`String`,e[e.Number=16]=`Number`,e[e.Boolean=17]=`Boolean`,e[e.Array=18]=`Array`,e[e.Object=19]=`Object`,e[e.Key=20]=`Key`,e[e.Null=21]=`Null`,e[e.EnumMember=22]=`EnumMember`,e[e.Struct=23]=`Struct`,e[e.Event=24]=`Event`,e[e.Operator=25]=`Operator`,e[e.TypeParameter=26]=`TypeParameter`,e})({}),Sd=(function(e){return e[e.Deprecated=1]=`Deprecated`,e})({}),Cd=(function(e){return e[e.Type=1]=`Type`,e[e.Parameter=2]=`Parameter`,e})({}),Q=(function(e){return e[e.Text=1]=`Text`,e[e.Method=2]=`Method`,e[e.Function=3]=`Function`,e[e.Constructor=4]=`Constructor`,e[e.Field=5]=`Field`,e[e.Variable=6]=`Variable`,e[e.Class=7]=`Class`,e[e.Interface=8]=`Interface`,e[e.Module=9]=`Module`,e[e.Property=10]=`Property`,e[e.Unit=11]=`Unit`,e[e.Value=12]=`Value`,e[e.Enum=13]=`Enum`,e[e.Keyword=14]=`Keyword`,e[e.Snippet=15]=`Snippet`,e[e.Color=16]=`Color`,e[e.File=17]=`File`,e[e.Reference=18]=`Reference`,e[e.Folder=19]=`Folder`,e[e.EnumMember=20]=`EnumMember`,e[e.Constant=21]=`Constant`,e[e.Struct=22]=`Struct`,e[e.Event=23]=`Event`,e[e.Operator=24]=`Operator`,e[e.TypeParameter=25]=`TypeParameter`,e})({}),wd=(function(e){return e[e.Deprecated=1]=`Deprecated`,e})({}),Td=(function(e){return e[e.PlainText=1]=`PlainText`,e[e.Snippet=2]=`Snippet`,e})({}),Ed=(function(e){return e[e.Text=1]=`Text`,e[e.Read=2]=`Read`,e[e.Write=3]=`Write`,e})({}),Dd=(function(e){return e.Empty=``,e.QuickFix=`quickfix`,e.Refactor=`refactor`,e.RefactorExtract=`refactor.extract`,e.RefactorInline=`refactor.inline`,e.RefactorRewrite=`refactor.rewrite`,e.Source=`source`,e.SourceOrganizeImports=`source.organizeImports`,e.SourceFixAll=`source.fixAll`,e})({}),Od=(function(e){return e[e.Error=1]=`Error`,e[e.Warning=2]=`Warning`,e[e.Information=3]=`Information`,e[e.Hint=4]=`Hint`,e})({}),kd=(function(e){return e[e.Unnecessary=1]=`Unnecessary`,e[e.Deprecated=2]=`Deprecated`,e})({}),Ad=(function(e){return e[e.Invoked=1]=`Invoked`,e[e.TriggerCharacter=2]=`TriggerCharacter`,e[e.TriggerForIncompleteCompletions=3]=`TriggerForIncompleteCompletions`,e})({}),jd=(function(e){return e[e.Invoked=1]=`Invoked`,e[e.TriggerCharacter=2]=`TriggerCharacter`,e[e.ContentChange=3]=`ContentChange`,e})({}),Md=(function(e){return e[e.Invoked=1]=`Invoked`,e[e.Automatic=2]=`Automatic`,e})({}),$=class{constructor(e){this.method=e}},Nd={textDocumentImplementation:new $(`textDocument/implementation`),textDocumentTypeDefinition:new $(`textDocument/typeDefinition`),textDocumentDocumentColor:new $(`textDocument/documentColor`),textDocumentColorPresentation:new $(`textDocument/colorPresentation`),textDocumentFoldingRange:new $(`textDocument/foldingRange`),textDocumentDeclaration:new $(`textDocument/declaration`),textDocumentSelectionRange:new $(`textDocument/selectionRange`),textDocumentPrepareCallHierarchy:new $(`textDocument/prepareCallHierarchy`),textDocumentSemanticTokensFull:new $(`textDocument/semanticTokens/full`),textDocumentSemanticTokensFullDelta:new $(`textDocument/semanticTokens/full/delta`),textDocumentLinkedEditingRange:new $(`textDocument/linkedEditingRange`),workspaceWillCreateFiles:new $(`workspace/willCreateFiles`),workspaceWillRenameFiles:new $(`workspace/willRenameFiles`),workspaceWillDeleteFiles:new $(`workspace/willDeleteFiles`),textDocumentMoniker:new $(`textDocument/moniker`),textDocumentPrepareTypeHierarchy:new $(`textDocument/prepareTypeHierarchy`),textDocumentInlineValue:new $(`textDocument/inlineValue`),textDocumentInlayHint:new $(`textDocument/inlayHint`),textDocumentDiagnostic:new $(`textDocument/diagnostic`),textDocumentInlineCompletion:new $(`textDocument/inlineCompletion`),textDocumentWillSaveWaitUntil:new $(`textDocument/willSaveWaitUntil`),textDocumentCompletion:new $(`textDocument/completion`),textDocumentHover:new $(`textDocument/hover`),textDocumentSignatureHelp:new $(`textDocument/signatureHelp`),textDocumentDefinition:new $(`textDocument/definition`),textDocumentReferences:new $(`textDocument/references`),textDocumentDocumentHighlight:new $(`textDocument/documentHighlight`),textDocumentDocumentSymbol:new $(`textDocument/documentSymbol`),textDocumentCodeAction:new $(`textDocument/codeAction`),workspaceSymbol:new $(`workspace/symbol`),textDocumentCodeLens:new $(`textDocument/codeLens`),textDocumentDocumentLink:new $(`textDocument/documentLink`),textDocumentFormatting:new $(`textDocument/formatting`),textDocumentRangeFormatting:new $(`textDocument/rangeFormatting`),textDocumentRangesFormatting:new $(`textDocument/rangesFormatting`),textDocumentOnTypeFormatting:new $(`textDocument/onTypeFormatting`),textDocumentRename:new $(`textDocument/rename`),workspaceExecuteCommand:new $(`workspace/executeCommand`),workspaceDidCreateFiles:new $(`workspace/didCreateFiles`),workspaceDidRenameFiles:new $(`workspace/didRenameFiles`),workspaceDidDeleteFiles:new $(`workspace/didDeleteFiles`),workspaceDidChangeConfiguration:new $(`workspace/didChangeConfiguration`),textDocumentDidOpen:new $(`textDocument/didOpen`),textDocumentDidChange:new $(`textDocument/didChange`),textDocumentDidClose:new $(`textDocument/didClose`),textDocumentDidSave:new $(`textDocument/didSave`),textDocumentWillSave:new $(`textDocument/willSave`),workspaceDidChangeWatchedFiles:new $(`workspace/didChangeWatchedFiles`)};vd({server:{textDocumentImplementation:Y({method:`textDocument/implementation`}),textDocumentTypeDefinition:Y({method:`textDocument/typeDefinition`}),textDocumentDocumentColor:Y({method:`textDocument/documentColor`}),textDocumentColorPresentation:Y({method:`textDocument/colorPresentation`}),textDocumentFoldingRange:Y({method:`textDocument/foldingRange`}),textDocumentDeclaration:Y({method:`textDocument/declaration`}),textDocumentSelectionRange:Y({method:`textDocument/selectionRange`}),textDocumentPrepareCallHierarchy:Y({method:`textDocument/prepareCallHierarchy`}),callHierarchyIncomingCalls:Y({method:`callHierarchy/incomingCalls`}),callHierarchyOutgoingCalls:Y({method:`callHierarchy/outgoingCalls`}),textDocumentSemanticTokensFull:Y({method:`textDocument/semanticTokens/full`}),textDocumentSemanticTokensFullDelta:Y({method:`textDocument/semanticTokens/full/delta`}),textDocumentSemanticTokensRange:Y({method:`textDocument/semanticTokens/range`}),textDocumentLinkedEditingRange:Y({method:`textDocument/linkedEditingRange`}),workspaceWillCreateFiles:Y({method:`workspace/willCreateFiles`}),workspaceWillRenameFiles:Y({method:`workspace/willRenameFiles`}),workspaceWillDeleteFiles:Y({method:`workspace/willDeleteFiles`}),textDocumentMoniker:Y({method:`textDocument/moniker`}),textDocumentPrepareTypeHierarchy:Y({method:`textDocument/prepareTypeHierarchy`}),typeHierarchySupertypes:Y({method:`typeHierarchy/supertypes`}),typeHierarchySubtypes:Y({method:`typeHierarchy/subtypes`}),textDocumentInlineValue:Y({method:`textDocument/inlineValue`}),textDocumentInlayHint:Y({method:`textDocument/inlayHint`}),inlayHintResolve:Y({method:`inlayHint/resolve`}),textDocumentDiagnostic:Y({method:`textDocument/diagnostic`}),workspaceDiagnostic:Y({method:`workspace/diagnostic`}),textDocumentInlineCompletion:Y({method:`textDocument/inlineCompletion`}),initialize:Y({method:`initialize`}),shutdown:Y({method:`shutdown`}),textDocumentWillSaveWaitUntil:Y({method:`textDocument/willSaveWaitUntil`}),textDocumentCompletion:Y({method:`textDocument/completion`}),completionItemResolve:Y({method:`completionItem/resolve`}),textDocumentHover:Y({method:`textDocument/hover`}),textDocumentSignatureHelp:Y({method:`textDocument/signatureHelp`}),textDocumentDefinition:Y({method:`textDocument/definition`}),textDocumentReferences:Y({method:`textDocument/references`}),textDocumentDocumentHighlight:Y({method:`textDocument/documentHighlight`}),textDocumentDocumentSymbol:Y({method:`textDocument/documentSymbol`}),textDocumentCodeAction:Y({method:`textDocument/codeAction`}),codeActionResolve:Y({method:`codeAction/resolve`}),workspaceSymbol:Y({method:`workspace/symbol`}),workspaceSymbolResolve:Y({method:`workspaceSymbol/resolve`}),textDocumentCodeLens:Y({method:`textDocument/codeLens`}),codeLensResolve:Y({method:`codeLens/resolve`}),textDocumentDocumentLink:Y({method:`textDocument/documentLink`}),documentLinkResolve:Y({method:`documentLink/resolve`}),textDocumentFormatting:Y({method:`textDocument/formatting`}),textDocumentRangeFormatting:Y({method:`textDocument/rangeFormatting`}),textDocumentRangesFormatting:Y({method:`textDocument/rangesFormatting`}),textDocumentOnTypeFormatting:Y({method:`textDocument/onTypeFormatting`}),textDocumentRename:Y({method:`textDocument/rename`}),textDocumentPrepareRename:Y({method:`textDocument/prepareRename`}),workspaceExecuteCommand:Y({method:`workspace/executeCommand`}),workspaceDidChangeWorkspaceFolders:X({method:`workspace/didChangeWorkspaceFolders`}),windowWorkDoneProgressCancel:X({method:`window/workDoneProgress/cancel`}),workspaceDidCreateFiles:X({method:`workspace/didCreateFiles`}),workspaceDidRenameFiles:X({method:`workspace/didRenameFiles`}),workspaceDidDeleteFiles:X({method:`workspace/didDeleteFiles`}),notebookDocumentDidOpen:X({method:`notebookDocument/didOpen`}),notebookDocumentDidChange:X({method:`notebookDocument/didChange`}),notebookDocumentDidSave:X({method:`notebookDocument/didSave`}),notebookDocumentDidClose:X({method:`notebookDocument/didClose`}),initialized:X({method:`initialized`}),exit:X({method:`exit`}),workspaceDidChangeConfiguration:X({method:`workspace/didChangeConfiguration`}),textDocumentDidOpen:X({method:`textDocument/didOpen`}),textDocumentDidChange:X({method:`textDocument/didChange`}),textDocumentDidClose:X({method:`textDocument/didClose`}),textDocumentDidSave:X({method:`textDocument/didSave`}),textDocumentWillSave:X({method:`textDocument/willSave`}),workspaceDidChangeWatchedFiles:X({method:`workspace/didChangeWatchedFiles`}),setTrace:X({method:`$/setTrace`}),cancelRequest:X({method:`$/cancelRequest`}),progress:X({method:`$/progress`})},client:{workspaceWorkspaceFolders:Y({method:`workspace/workspaceFolders`}).optional(),workspaceConfiguration:Y({method:`workspace/configuration`}).optional(),workspaceFoldingRangeRefresh:Y({method:`workspace/foldingRange/refresh`}).optional(),windowWorkDoneProgressCreate:Y({method:`window/workDoneProgress/create`}).optional(),workspaceSemanticTokensRefresh:Y({method:`workspace/semanticTokens/refresh`}).optional(),windowShowDocument:Y({method:`window/showDocument`}).optional(),workspaceInlineValueRefresh:Y({method:`workspace/inlineValue/refresh`}).optional(),workspaceInlayHintRefresh:Y({method:`workspace/inlayHint/refresh`}).optional(),workspaceDiagnosticRefresh:Y({method:`workspace/diagnostic/refresh`}).optional(),clientRegisterCapability:Y({method:`client/registerCapability`}).optional(),clientUnregisterCapability:Y({method:`client/unregisterCapability`}).optional(),windowShowMessageRequest:Y({method:`window/showMessageRequest`}).optional(),workspaceCodeLensRefresh:Y({method:`workspace/codeLens/refresh`}).optional(),workspaceApplyEdit:Y({method:`workspace/applyEdit`}).optional(),windowShowMessage:X({method:`window/showMessage`}),windowLogMessage:X({method:`window/logMessage`}),telemetryEvent:X({method:`telemetry/event`}),textDocumentPublishDiagnostics:X({method:`textDocument/publishDiagnostics`}),logTrace:X({method:`$/logTrace`}),cancelRequest:X({method:`$/cancelRequest`}),progress:X({method:`$/progress`})}}),qu=class{constructor(){J(this,`_store`,new Pd)}dispose(){this._store.dispose()}_register(e){if(e===this)throw Error(`Cannot register a disposable on itself!`);return this._store.add(e)}},J(qu,`None`,Object.freeze({dispose(){}}));var Pd=(Ju=class{constructor(){J(this,`_toDispose`,new Set),J(this,`_isDisposed`,!1)}dispose(){this._isDisposed||(this._isDisposed=!0,this.clear())}clear(){if(this._toDispose.size!==0)try{for(let e of this._toDispose)e.dispose()}finally{this._toDispose.clear()}}add(e){if(!e)return e;if(e===this)throw Error(`Cannot register a disposable on itself!`);return this._isDisposed?Ju.DISABLE_DISPOSED_WARNING||console.warn(Error(`Trying to add a disposable to a DisposableStore that has already been disposed of. The added object will be leaked!`).stack):this._toDispose.add(e),e}},J(Ju,`DISABLE_DISPOSED_WARNING`,!1),Ju);new Map([[Dd.Empty,``],[Dd.QuickFix,`quickfix`],[Dd.Refactor,`refactor`],[Dd.RefactorExtract,`refactor.extract`],[Dd.RefactorInline,`refactor.inline`],[Dd.RefactorRewrite,`refactor.rewrite`],[Dd.Source,`source`],[Dd.SourceOrganizeImports,`source.organizeImports`],[Dd.SourceFixAll,`source.fixAll`]]),new Map([[e.CodeActionTriggerType.Invoke,Md.Invoked],[e.CodeActionTriggerType.Auto,Md.Automatic]]),new Map([[Q.Text,e.CompletionItemKind.Text],[Q.Method,e.CompletionItemKind.Method],[Q.Function,e.CompletionItemKind.Function],[Q.Constructor,e.CompletionItemKind.Constructor],[Q.Field,e.CompletionItemKind.Field],[Q.Variable,e.CompletionItemKind.Variable],[Q.Class,e.CompletionItemKind.Class],[Q.Interface,e.CompletionItemKind.Interface],[Q.Module,e.CompletionItemKind.Module],[Q.Property,e.CompletionItemKind.Property],[Q.Unit,e.CompletionItemKind.Unit],[Q.Value,e.CompletionItemKind.Value],[Q.Enum,e.CompletionItemKind.Enum],[Q.Keyword,e.CompletionItemKind.Keyword],[Q.Snippet,e.CompletionItemKind.Snippet],[Q.Color,e.CompletionItemKind.Color],[Q.File,e.CompletionItemKind.File],[Q.Reference,e.CompletionItemKind.Reference],[Q.Folder,e.CompletionItemKind.Folder],[Q.EnumMember,e.CompletionItemKind.EnumMember],[Q.Constant,e.CompletionItemKind.Constant],[Q.Struct,e.CompletionItemKind.Struct],[Q.Event,e.CompletionItemKind.Event],[Q.Operator,e.CompletionItemKind.Operator],[Q.TypeParameter,e.CompletionItemKind.TypeParameter]]),new Map([[wd.Deprecated,e.CompletionItemTag.Deprecated]]),new Map([[e.CompletionTriggerKind.Invoke,Ad.Invoked],[e.CompletionTriggerKind.TriggerCharacter,Ad.TriggerCharacter],[e.CompletionTriggerKind.TriggerForIncompleteCompletions,Ad.TriggerForIncompleteCompletions]]),new Map([[Td.Snippet,e.CompletionItemInsertTextRule.InsertAsSnippet]]),new Map([[Z.File,e.SymbolKind.File],[Z.Module,e.SymbolKind.Module],[Z.Namespace,e.SymbolKind.Namespace],[Z.Package,e.SymbolKind.Package],[Z.Class,e.SymbolKind.Class],[Z.Method,e.SymbolKind.Method],[Z.Property,e.SymbolKind.Property],[Z.Field,e.SymbolKind.Field],[Z.Constructor,e.SymbolKind.Constructor],[Z.Enum,e.SymbolKind.Enum],[Z.Interface,e.SymbolKind.Interface],[Z.Function,e.SymbolKind.Function],[Z.Variable,e.SymbolKind.Variable],[Z.Constant,e.SymbolKind.Constant],[Z.String,e.SymbolKind.String],[Z.Number,e.SymbolKind.Number],[Z.Boolean,e.SymbolKind.Boolean],[Z.Array,e.SymbolKind.Array],[Z.Object,e.SymbolKind.Object],[Z.Key,e.SymbolKind.Key],[Z.Null,e.SymbolKind.Null],[Z.EnumMember,e.SymbolKind.EnumMember],[Z.Struct,e.SymbolKind.Struct],[Z.Event,e.SymbolKind.Event],[Z.Operator,e.SymbolKind.Operator],[Z.TypeParameter,e.SymbolKind.TypeParameter]]),new Map([[Sd.Deprecated,e.SymbolTag.Deprecated]]),new Map([[Ed.Text,e.DocumentHighlightKind.Text],[Ed.Read,e.DocumentHighlightKind.Read],[Ed.Write,e.DocumentHighlightKind.Write]]),new Map([[xd.Comment,e.FoldingRangeKind.Comment],[xd.Imports,e.FoldingRangeKind.Imports],[xd.Region,e.FoldingRangeKind.Region]]),new Map([[n.Error,Od.Error],[n.Warning,Od.Warning],[n.Info,Od.Information],[n.Hint,Od.Hint]]),new Map([[Od.Error,n.Error],[Od.Warning,n.Warning],[Od.Information,n.Info],[Od.Hint,n.Hint]]),new Map([[kd.Unnecessary,i.Unnecessary],[kd.Deprecated,i.Deprecated]]),new Map([[e.SignatureHelpTriggerKind.Invoke,jd.Invoked],[e.SignatureHelpTriggerKind.TriggerCharacter,jd.TriggerCharacter],[e.SignatureHelpTriggerKind.ContentChange,jd.ContentChange]]),new Map([[Cd.Type,e.InlayHintKind.Type],[Cd.Parameter,e.InlayHintKind.Parameter]]),new Map([...Object.values(Nd)].map(e=>[e.method,e])),typeof WebSocket<`u`?WebSocket:typeof MozWebSocket<`u`?MozWebSocket:typeof global<`u`?global.WebSocket||global.MozWebSocket:typeof window<`u`?window.WebSocket||window.MozWebSocket:typeof self<`u`&&(self.WebSocket||self.MozWebSocket);function Fd(e,t){let n=globalThis.MonacoEnvironment;if(n?.createTrustedTypesPolicy)try{return n.createTrustedTypesPolicy(e,t)}catch(e){console.error(e);return}try{return globalThis.trustedTypes?.createPolicy(e,t)}catch(e){console.error(e);return}}var Id=typeof self==`object`&&self.constructor&&self.constructor.name===`DedicatedWorkerGlobalScope`&&globalThis.workerttPolicy!==void 0?globalThis.workerttPolicy:Fd(`defaultWorkerFactory`,{createScriptURL:e=>e});function Ld(e){let t=e.label,n=globalThis.MonacoEnvironment;if(n){if(typeof n.getWorker==`function`)return n.getWorker(`workerMain.js`,t);if(typeof n.getWorkerUrl==`function`){let e=n.getWorkerUrl(`workerMain.js`,t);return new Worker(Id?Id.createScriptURL(e):e,{name:t,type:`module`})}}if(e.createWorker)return e.createWorker();throw Error(`You must define a function MonacoEnvironment.getWorkerUrl or MonacoEnvironment.getWorker`)}function Rd(e){let t=Promise.resolve(Ld({label:e.label??`monaco-editor-worker`,moduleId:e.moduleId,createWorker:e.createWorker})).then(t=>(t.postMessage(`ignore`),t.postMessage(e.createData),t));return r.createWebWorker({worker:t,host:e.host,keepIdleModels:e.keepIdleModels})}function zd(){return a}globalThis.MonacoEnvironment?.globalAPI&&(globalThis.monaco=zd());var Bd=zd();Bd.languages.css=Zl,Bd.languages.html=au,Bd.languages.typescript=Tu,Bd.languages.json=bu;function Vd(e){return new Worker(``+new URL(`editor.worker-C4Ln2gc_.js`,import.meta.url).href,{name:e?.name})}function Hd(e){return new Worker(``+new URL(`json.worker-DqU5Wxnl.js`,import.meta.url).href,{name:e?.name})}function Ud(e){return new Worker(``+new URL(`ts.worker-DyPAEIuH.js`,import.meta.url).href,{name:e?.name})}function Wd(e){return typeof e==`object`&&!!e&&!Array.isArray(e)}function Gd(e){return typeof e==`number`&&!isNaN(e)}function Kd(e){return typeof e==`string`}function qd(e){return typeof e==`boolean`}function Jd(e){return e===null}function Yd(e){return e<0?``:` `.repeat(e)}function Xd(e){return e.charAt(0).toUpperCase()+e.slice(1)}var Zd=new Set(`break.case.catch.class.const.continue.debugger.default.delete.do.else.export.extends.finally.for.function.if.import.in.instanceof.new.return.super.switch.this.throw.try.typeof.var.void.while.with.yield.enum.implements.interface.let.package.private.protected.public.static.await.arguments.eval.true.false.null.undefined.NaN.Infinity.type.interface.namespace.module.declare.as.is.keyof.readonly.required.partial.pick.omit.extends.implements`.split(`.`));function Qd(e){return Zd.has(e)?!1:/^[a-zA-Z_$][0-9a-zA-Z_$]*$/.test(e)}var $d=class{name;type;constructor(e,t){this.name=e,this.type=t}},ef=class e extends $d{_children=[];constructor(e,t){super(e,t)}addChild(e){this._children.push(e)}equal(t){if(!(t instanceof e))return!1;let n=[...this._children].sort((e,t)=>e.name.localeCompare(t.name)),r=[...t._children].sort((e,t)=>e.name.localeCompare(t.name));if(n.length!==r.length)return!1;for(let e=0;e<n.length;e+=1)if(!n[e].equal(r[e]))return!1;return!0}toString(){let e=``,t=[];for(let n=0;n<this._children.length;n+=1){e+=this._children[n].toString();let r=this._children[n].name;Qd(this._children[n].name)||(r=`'${this._children[n].name}'`),t.push(`${Yd(4)}${r}: ${this._children[n].type};`)}return e+`interface ${this.type} {\n${t.join(`
`)}\n}\n\n`}},tf=class e extends $d{_children=[];constructor(e,t){super(e,t)}addChild(e){this._children.push(e)}equal(t){if(!(t instanceof e))return!1;let n=[...this._children],r=[...t._children];if(n.length!==r.length)return!1;for(;n.length>0;){let e=n.pop(),t=r.findIndex(t=>t.equal(e));if(t===-1)return!1;r.splice(t,1)}return n.length===0&&r.length===0}toString(){let e=[],t=``,n=[];for(let r=0;r<this._children.length;r+=1)n.findIndex(e=>e.equal(this._children[r]))===-1&&(n.push(this._children[r]),t+=this._children[r].toString(),e.push(this._children[r].type));return t+`type ${this.type} = (${e.join(` | `)||`unknown`})[];\n\n`}},nf=class e extends $d{constructor(e,t){super(e,t)}equal(t){return t instanceof e?this.name===t.name&&this.type===t.type:!1}toString(){return``}},rf=class{_nameIndices=new Map;_getUniqueName(e){let t=Xd(e);Qd(t)||(t=`UnVariable`);let n=0;return this._nameIndices.has(t)&&(n=this._nameIndices.get(t),t=`${t}_${n+1}`),this._nameIndices.set(t,n+1),t}_createNode(e,t,n){if(Wd(n)){let r=new ef(e,t),i=Object.keys(n);for(let e=0;e<i.length;e+=1){let t=i[e],a=this._getUniqueName(t),o=this._createNode(t,a,n[t]);r.addChild(o)}return r}else if(Array.isArray(n)){let r=new tf(e,t);for(let i=0;i<n.length;i+=1){let a=this._getUniqueName(`${t}_element_${i}`),o=this._createNode(e,a,n[i]);r.addChild(o)}return r}else if(Gd(n))return new nf(e,`number`);else if(Kd(n))return new nf(e,`string`);else if(qd(n))return new nf(e,`boolean`);else if(Jd(n))return new nf(e,`null`);return console.error(`json has unknown type`),new nf(e,`unknown`)}transformByJSON(e){return this._nameIndices.clear(),this._createNode(`Root`,`RootType`,e).toString()}transformByJSONString(e){let t=JSON.parse(e);return this.transformByJSON(t)}convertJSONToDts(e){let t=this.transformByJSON(e),n=[];if(n.push(`declare const root: RootType;`),n.push(`export default root;`),Wd(e)){let t=Object.keys(e);for(let e=0;e<t.length;e+=1)Qd(t[e])?n.push(`export declare const ${t[e]}: RootType['${t[e]}'];`):(n.push(`declare const unVariable_${e}: RootType['${t[e]}'];`),n.push(`export { unVariable_${e} as '${t[e]}' }`))}return t+=n.join(`
`),t}convertJSONStringToDts(e){let t=JSON.parse(e);return this.convertJSONToDts(t)}},af=`1.0.5`,of=document.getElementById(`version_name`);of&&(of.textContent=af),self.MonacoEnvironment={getWorker(e,t){return t===`json`?new Hd:t===`typescript`?new Ud:new Vd}};var sf=document.getElementById(`code`),cf=r.create(sf,{language:`json`,fontFamily:`'cascadia code', monospace`,minimap:{enabled:!1},automaticLayout:!0,placeholder:`Type your JSON here`}),lf=document.getElementById(`output`),uf=r.create(lf,{readOnly:!0,language:`typescript`,fontFamily:`'cascadia code', monospace`,minimap:{enabled:!1},automaticLayout:!0,placeholder:`Generated TypeScript interface code will appear here`}),df=document.getElementById(`mode`),ff=new rf;function pf(){let e=cf.getValue();if(e===``){uf.setValue(``);return}try{let t=JSON.parse(e);if(df.value===`interfaces`){let e=ff.transformByJSON(t);uf.setValue(e)}else{let e=ff.convertJSONToDts(t);uf.setValue(e)}}catch{}}var mf=null;cf.onDidChangeModelContent(()=>{mf!==null&&(clearTimeout(mf),mf=null),mf=window.setTimeout(pf,100)}),df.addEventListener(`sl-change`,pf);export{Pu as n,Rd as t};