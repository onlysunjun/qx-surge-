
`
try {
    let body = $response.body;
    if (/<\/html>|<\/body>/.test(body)) {
        body = body.replace('</body>', `<script>
 const result=function(){
function GM_deleteValue(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({key:e,name:"ApiDeleteValue",uuid:_uuid},e=>e?t():n())})}function GM_getValue(e,t){return new Promise(n=>{chrome.runtime.sendMessage({key:e,name:"ApiGetValue",uuid:_uuid},e=>{n(void 0!==e?e:t)})})}function GM_listValues(){return new Promise(e=>{chrome.runtime.sendMessage({name:"ApiListValues",uuid:_uuid},t=>e(t))})}function GM_setValue(e,t){return new Promise((n,r)=>{chrome.runtime.sendMessage({key:e,name:"ApiSetValue",uuid:_uuid,value:t},e=>{void 0!==e?n(e):(console.warn("set value failed:",chrome.runtime.lastError),r())})})}function GM_getResourceUrl(e){return new Promise((t,n)=>{chrome.runtime.sendMessage({name:"ApiGetResourceBlob",resourceName:e,uuid:_uuid},r=>{r?t(URL.createObjectURL(r.blob)):n("No resource named "+e)})})}function GM_notification(e,t,n,r){let o;if("object"==typeof e?(o=e,"function"==typeof t&&(o.ondone=t)):o={title:t,text:e,image:n,onclick:r},"string"!=typeof o.text)throw new Error(_("gm_notif_text_must_be_string"));"string"!=typeof o.title&&(o.title=_("extName")),"string"!=typeof o.image&&(o.image="skin/icon.svg");let i=chrome.runtime.connect({name:"UserScriptNotification"});i.onMessage.addListener(e=>{const t=e.type;"function"==typeof o[t]&&o[t]()}),i.postMessage({details:{title:o.title,text:o.text,image:o.image},name:"create",uuid:_uuid})}function GM_openInTab(e,t){let n;try{n=new URL(e,location.href)}catch(t){throw new Error(_("gm_opentab_bad_URL",e))}chrome.runtime.sendMessage({active:!1===t,name:"ApiOpenInTab",url:n.href,uuid:_uuid})}function GM_setClipboard(e){document.addEventListener("copy",function t(n){document.removeEventListener("copy",t,!0),n.stopImmediatePropagation(),n.preventDefault(),n.clipboardData.setData("text/plain",e)},!0),document.execCommand("copy")}function GM_xmlHttpRequest(e){if(!e)throw new Error(_("xhr_no_details"));if(!e.url)throw new Error(_("xhr_no_url"));let t;try{t=new URL(e.url,location.href)}catch(t){throw new Error(_("xhr_bad_url",e.url,t))}if("http:"!=t.protocol&&"https:"!=t.protocol&&"ftp:"!=t.protocol)throw new Error(_("xhr_bad_url_scheme",e.url));let n=chrome.runtime.connect({name:"UserScriptXhr"});n.onMessage.addListener(function(t){if(t.responseState.responseXML)try{t.responseState.responseXML=(new DOMParser).parseFromString(t.responseState.responseText,"application/xml")}catch(e){console.warn("GM_xhr could not parse XML:",e),t.responseState.responseXML=null}let n=("up"==t.src?e.upload:e)["on"+t.type];n&&n(t.responseState)});let r={};Object.keys(e).forEach(t=>{let n=e[t];r[t]=n,"function"==typeof n&&(r[t]=!0)}),r.upload={},e.upload&&Object.keys(e=>r.upload[e]=!0),r.url=t.href,n.postMessage({details:r,name:"open",uuid:_uuid})}
// ==UserScript==
// @name         115转存助手ui优化版
// @name:zh      115转存助手ui优化版
// @description  115转存助手ui优化版v3.1特别版(2021.10.05)
// @author       Never4Ever
// @namespace    Fake115Upload@Never4Ever
// @version      143.2021.1005.6
// @match        https://115.com/*

// @grant        GM_xmlhttpRequest
// @grant        GM_log
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_setClipboard
// @grant        GM_deleteValue
// @grant        unsafeWindow
// @grant        GM_registerMenuCommand

// @connect      proapi.115.com
// @connect      webapi.115.com
// @connect      115.com

// ==/UserScript==


!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?module.exports=t():"function"==typeof define&&define.amd?define(t):(e=e||self).Sweetalert2=t()}(this,function(){"use strict";const l=Object.freeze({cancel:"cancel",backdrop:"backdrop",close:"close",esc:"esc",timer:"timer"}),t="SweetAlert2:",o=e=>e.charAt(0).toUpperCase()+e.slice(1),a=e=>Array.prototype.slice.call(e),s=e=>{console.warn("".concat(t," ").concat("object"==typeof e?e.join(" "):e))},r=e=>{console.error("".concat(t," ").concat(e))},n=[],i=(e,t)=>{t='"'.concat(e,'" is deprecated and will be removed in the next major release. Please use "').concat(t,'" instead.'),n.includes(t)||(n.push(t),s(t))},c=e=>"function"==typeof e?e():e,u=e=>e&&"function"==typeof e.toPromise,d=e=>u(e)?e.toPromise():Promise.resolve(e),p=e=>e&&Promise.resolve(e)===e,m=e=>e instanceof Element||(e=>"object"==typeof e&&e.jquery)(e);var e=e=>{const t={};for(const n in e)t[e[n]]="swal2-"+e[n];return t};const h=e(["container","shown","height-auto","iosfix","popup","modal","no-backdrop","no-transition","toast","toast-shown","show","hide","close","title","html-container","actions","confirm","deny","cancel","default-outline","footer","icon","icon-content","image","input","file","range","select","radio","checkbox","label","textarea","inputerror","input-label","validation-message","progress-steps","active-progress-step","progress-step","progress-step-line","loader","loading","styled","top","top-start","top-end","top-left","top-right","center","center-start","center-end","center-left","center-right","bottom","bottom-start","bottom-end","bottom-left","bottom-right","grow-row","grow-column","grow-fullscreen","rtl","timer-progress-bar","timer-progress-bar-container","scrollbar-measure","icon-success","icon-warning","icon-info","icon-question","icon-error"]),g=e(["success","warning","info","question","error"]),b=()=>document.body.querySelector(".".concat(h.container)),f=e=>{const t=b();return t?t.querySelector(e):null},y=e=>f(".".concat(e)),v=()=>y(h.popup),w=()=>y(h.icon),C=()=>y(h.title),k=()=>y(h["html-container"]),A=()=>y(h.image),B=()=>y(h["progress-steps"]),x=()=>y(h["validation-message"]),P=()=>f(".".concat(h.actions," .").concat(h.confirm)),E=()=>f(".".concat(h.actions," .").concat(h.deny));const S=()=>f(".".concat(h.loader)),T=()=>f(".".concat(h.actions," .").concat(h.cancel)),L=()=>y(h.actions),O=()=>y(h.footer),j=()=>y(h["timer-progress-bar"]),D=()=>y(h.close),I=()=>{const e=a(v().querySelectorAll('[tabindex]:not([tabindex="-1"]):not([tabindex="0"])')).sort((e,t)=>(e=parseInt(e.getAttribute("tabindex")),(t=parseInt(t.getAttribute("tabindex")))<e?1:e<t?-1:0));var t=a(v().querySelectorAll('\n  a[href],\n  area[href],\n  input:not([disabled]),\n  select:not([disabled]),\n  textarea:not([disabled]),\n  button:not([disabled]),\n  iframe,\n  object,\n  embed,\n  [tabindex="0"],\n  [contenteditable],\n  audio[controls],\n  video[controls],\n  summary\n')).filter(e=>"-1"!==e.getAttribute("tabindex"));return(t=>{const n=[];for(let e=0;e<t.length;e++)-1===n.indexOf(t[e])&&n.push(t[e]);return n})(e.concat(t)).filter(e=>G(e))},M=()=>!H()&&!document.body.classList.contains(h["no-backdrop"]),H=()=>document.body.classList.contains(h["toast-shown"]);const q={previousBodyPadding:null},V=(t,e)=>{if(t.textContent="",e){const n=new DOMParser,o=n.parseFromString(e,"text/html");a(o.querySelector("head").childNodes).forEach(e=>{t.appendChild(e)}),a(o.querySelector("body").childNodes).forEach(e=>{t.appendChild(e)})}},N=(t,e)=>{if(!e)return!1;var n=e.split(/\s+/);for(let e=0;e<n.length;e++)if(!t.classList.contains(n[e]))return!1;return!0},U=(e,t,n)=>{var o,i;if(o=e,i=t,a(o.classList).forEach(e=>{Object.values(h).includes(e)||Object.values(g).includes(e)||Object.values(i.showClass).includes(e)||o.classList.remove(e)}),t.customClass&&t.customClass[n]){if("string"!=typeof t.customClass[n]&&!t.customClass[n].forEach)return s("Invalid type of customClass.".concat(n,'! Expected string or iterable object, got "').concat(typeof t.customClass[n],'"'));W(e,t.customClass[n])}},F=(e,t)=>{if(!t)return null;switch(t){case"select":case"textarea":case"file":return K(e,h[t]);case"checkbox":return e.querySelector(".".concat(h.checkbox," input"));case"radio":return e.querySelector(".".concat(h.radio," input:checked"))||e.querySelector(".".concat(h.radio," input:first-child"));case"range":return e.querySelector(".".concat(h.range," input"));default:return K(e,h.input)}},R=e=>{var t;e.focus(),"file"!==e.type&&(t=e.value,e.value="",e.value=t)},z=(e,t,n)=>{e&&t&&(t="string"==typeof t?t.split(/\s+/).filter(Boolean):t).forEach(t=>{e.forEach?e.forEach(e=>{n?e.classList.add(t):e.classList.remove(t)}):n?e.classList.add(t):e.classList.remove(t)})},W=(e,t)=>{z(e,t,!0)},_=(e,t)=>{z(e,t,!1)},K=(t,n)=>{for(let e=0;e<t.childNodes.length;e++)if(N(t.childNodes[e],n))return t.childNodes[e]},Y=(e,t,n)=>{(n=n==="".concat(parseInt(n))?parseInt(n):n)||0===parseInt(n)?e.style[t]="number"==typeof n?"".concat(n,"px"):n:e.style.removeProperty(t)},Z=(e,t="flex")=>{e.style.display=t},J=e=>{e.style.display="none"},X=(e,t,n,o)=>{const i=e.querySelector(t);i&&(i.style[n]=o)},\$=(e,t,n)=>{t?Z(e,n):J(e)},G=e=>!(!e||!(e.offsetWidth||e.offsetHeight||e.getClientRects().length)),Q=()=>!G(P())&&!G(E())&&!G(T()),ee=e=>!!(e.scrollHeight>e.clientHeight),te=e=>{const t=window.getComputedStyle(e);var n=parseFloat(t.getPropertyValue("animation-duration")||"0"),e=parseFloat(t.getPropertyValue("transition-duration")||"0");return 0<n||0<e},ne=(e,t=!1)=>{const n=j();G(n)&&(t&&(n.style.transition="none",n.style.width="100%"),setTimeout(()=>{n.style.transition="width ".concat(e/1e3,"s linear"),n.style.width="0%"},10))},oe=()=>"undefined"==typeof window||"undefined"==typeof document,ie='\n <div aria-labelledby="'.concat(h.title,'" aria-describedby="').concat(h["html-container"],'" class="').concat(h.popup,'" tabindex="-1">\n   <button type="button" class="').concat(h.close,'"></button>\n   <ul class="').concat(h["progress-steps"],'"></ul>\n   <div class="').concat(h.icon,'"></div>\n   <img class="').concat(h.image,'" />\n   <h2 class="').concat(h.title,'" id="').concat(h.title,'"></h2>\n   <div class="').concat(h["html-container"],'" id="').concat(h["html-container"],'"></div>\n   <input class="').concat(h.input,'" />\n   <input type="file" class="').concat(h.file,'" />\n   <div class="').concat(h.range,'">\n     <input type="range" />\n     <output></output>\n   </div>\n   <select class="').concat(h.select,'"></select>\n   <div class="').concat(h.radio,'"></div>\n   <label for="').concat(h.checkbox,'" class="').concat(h.checkbox,'">\n     <input type="checkbox" />\n     <span class="').concat(h.label,'"></span>\n   </label>\n   <textarea class="').concat(h.textarea,'"></textarea>\n   <div class="').concat(h["validation-message"],'" id="').concat(h["validation-message"],'"></div>\n   <div class="').concat(h.actions,'">\n     <div class="').concat(h.loader,'"></div>\n     <button type="button" class="').concat(h.confirm,'"></button>\n     <button type="button" class="').concat(h.deny,'"></button>\n     <button type="button" class="').concat(h.cancel,'"></button>\n   </div>\n   <div class="').concat(h.footer,'"></div>\n   <div class="').concat(h["timer-progress-bar-container"],'">\n     <div class="').concat(h["timer-progress-bar"],'"></div>\n   </div>\n </div>\n').replace(/(^|\n)\s*/g,""),ae=()=>{ln.isVisible()&&ln.resetValidationMessage()},se=e=>{var t=(()=>{const e=b();return!!e&&(e.remove(),_([document.documentElement,document.body],[h["no-backdrop"],h["toast-shown"],h["has-column"]]),!0)})();if(oe())r("SweetAlert2 requires document to initialize");else{const n=document.createElement("div");n.className=h.container,t&&W(n,h["no-transition"]),V(n,ie);const o="string"==typeof(t=e.target)?document.querySelector(t):t;o.appendChild(n),(e=>{const t=v();t.setAttribute("role",e.toast?"alert":"dialog"),t.setAttribute("aria-live",e.toast?"polite":"assertive"),e.toast||t.setAttribute("aria-modal","true")})(e),e=o,"rtl"===window.getComputedStyle(e).direction&&W(b(),h.rtl),(()=>{const e=v(),t=K(e,h.input),n=K(e,h.file),o=e.querySelector(".".concat(h.range," input")),i=e.querySelector(".".concat(h.range," output")),a=K(e,h.select),s=e.querySelector(".".concat(h.checkbox," input")),r=K(e,h.textarea);t.oninput=ae,n.onchange=ae,a.onchange=ae,s.onchange=ae,r.oninput=ae,o.oninput=()=>{ae(),i.value=o.value},o.onchange=()=>{ae(),o.nextSibling.value=o.value}})()}},re=(e,t)=>{e instanceof HTMLElement?t.appendChild(e):"object"==typeof e?ce(e,t):e&&V(t,e)},ce=(e,t)=>{e.jquery?le(t,e):V(t,e.toString())},le=(t,n)=>{if(t.textContent="",0 in n)for(let e=0;e in n;e++)t.appendChild(n[e].cloneNode(!0));else t.appendChild(n.cloneNode(!0))},ue=(()=>{if(oe())return!1;var e=document.createElement("div"),t={WebkitAnimation:"webkitAnimationEnd",OAnimation:"oAnimationEnd oanimationend",animation:"animationend"};for(const n in t)if(Object.prototype.hasOwnProperty.call(t,n)&&void 0!==e.style[n])return t[n];return!1})(),de=(e,t)=>{const n=L();var o=S(),i=P(),a=E(),s=T();(t.showConfirmButton||t.showDenyButton||t.showCancelButton?Z:J)(n),U(n,t,"actions"),pe(i,"confirm",t),pe(a,"deny",t),pe(s,"cancel",t),function(e,t,n,o){if(!o.buttonsStyling)return _([e,t,n],h.styled);W([e,t,n],h.styled),o.confirmButtonColor&&(e.style.backgroundColor=o.confirmButtonColor,W(e,h["default-outline"]));o.denyButtonColor&&(t.style.backgroundColor=o.denyButtonColor,W(t,h["default-outline"]));o.cancelButtonColor&&(n.style.backgroundColor=o.cancelButtonColor,W(n,h["default-outline"]))}(i,a,s,t),t.reverseButtons&&(n.insertBefore(s,o),n.insertBefore(a,o),n.insertBefore(i,o)),V(o,t.loaderHtml),U(o,t,"loader")};function pe(e,t,n){\$(e,n["show".concat(o(t),"Button")],"inline-block"),V(e,n["".concat(t,"ButtonText")]),e.setAttribute("aria-label",n["".concat(t,"ButtonAriaLabel")]),e.className=h[t],U(e,n,"".concat(t,"Button")),W(e,n["".concat(t,"ButtonClass")])}const me=(e,t)=>{var n,o,i=b();i&&(o=i,"string"==typeof(n=t.backdrop)?o.style.background=n:n||W([document.documentElement,document.body],h["no-backdrop"]),o=i,(n=t.position)in h?W(o,h[n]):(s('The "position" parameter is not valid, defaulting to "center"'),W(o,h.center)),n=i,!(o=t.grow)||"string"!=typeof o||(o="grow-".concat(o))in h&&W(n,h[o]),U(i,t,"container"))};var he={promise:new WeakMap,innerParams:new WeakMap,domCache:new WeakMap};const ge=["input","file","range","select","radio","checkbox","textarea"],be=e=>{if(!ke[e.input])return r('Unexpected type of input! Expected "text", "email", "password", "number", "tel", "select", "radio", "checkbox", "textarea", "file" or "url", got "'.concat(e.input,'"'));var t=Ce(e.input);const n=ke[e.input](t,e);Z(n),setTimeout(()=>{R(n)})},fe=(e,t)=>{const n=F(v(),e);if(n){(t=>{for(let e=0;e<t.attributes.length;e++){var n=t.attributes[e].name;["type","value","style"].includes(n)||t.removeAttribute(n)}})(n);for(const o in t)n.setAttribute(o,t[o])}},ye=e=>{var t=Ce(e.input);e.customClass&&W(t,e.customClass.input)},ve=(e,t)=>{e.placeholder&&!t.inputPlaceholder||(e.placeholder=t.inputPlaceholder)},we=(e,t,n)=>{if(n.inputLabel){e.id=h.input;const i=document.createElement("label");var o=h["input-label"];i.setAttribute("for",e.id),i.className=o,W(i,n.customClass.inputLabel),i.innerText=n.inputLabel,t.insertAdjacentElement("beforebegin",i)}},Ce=e=>{e=h[e]||h.input;return K(v(),e)},ke={};ke.text=ke.email=ke.password=ke.number=ke.tel=ke.url=(e,t)=>("string"==typeof t.inputValue||"number"==typeof t.inputValue?e.value=t.inputValue:p(t.inputValue)||s('Unexpected type of inputValue! Expected "string", "number" or "Promise", got "'.concat(typeof t.inputValue,'"')),we(e,e,t),ve(e,t),e.type=t.input,e),ke.file=(e,t)=>(we(e,e,t),ve(e,t),e),ke.range=(e,t)=>{const n=e.querySelector("input"),o=e.querySelector("output");return n.value=t.inputValue,n.type=t.input,o.value=t.inputValue,we(n,e,t),e},ke.select=(e,t)=>{if(e.textContent="",t.inputPlaceholder){const n=document.createElement("option");V(n,t.inputPlaceholder),n.value="",n.disabled=!0,n.selected=!0,e.appendChild(n)}return we(e,e,t),e},ke.radio=e=>(e.textContent="",e),ke.checkbox=(e,t)=>{const n=F(v(),"checkbox");n.value=1,n.id=h.checkbox,n.checked=Boolean(t.inputValue);var o=e.querySelector("span");return V(o,t.inputPlaceholder),e},ke.textarea=(n,e)=>{n.value=e.inputValue,ve(n,e),we(n,n,e);return setTimeout(()=>{if("MutationObserver"in window){const t=parseInt(window.getComputedStyle(v()).width);new MutationObserver(()=>{var e,e=n.offsetWidth+(e=n,parseInt(window.getComputedStyle(e).marginLeft)+parseInt(window.getComputedStyle(e).marginRight));e>t?v().style.width="".concat(e,"px"):v().style.width=null}).observe(n,{attributes:!0,attributeFilter:["style"]})}}),n};const Ae=(e,t)=>{const n=k();U(n,t,"htmlContainer"),t.html?(re(t.html,n),Z(n,"block")):t.text?(n.textContent=t.text,Z(n,"block")):J(n),((e,o)=>{const i=v();e=he.innerParams.get(e);const a=!e||o.input!==e.input;ge.forEach(e=>{var t=h[e];const n=K(i,t);fe(e,o.inputAttributes),n.className=t,a&&J(n)}),o.input&&(a&&be(o),ye(o))})(e,t)},Be=(e,t)=>{for(const n in g)t.icon!==n&&_(e,g[n]);W(e,g[t.icon]),Ee(e,t),xe(),U(e,t,"icon")},xe=()=>{const e=v();var t=window.getComputedStyle(e).getPropertyValue("background-color");const n=e.querySelectorAll("[class^=swal2-success-circular-line], .swal2-success-fix");for(let e=0;e<n.length;e++)n[e].style.backgroundColor=t},Pe=(e,t)=>{var n;e.textContent="",t.iconHtml?V(e,Se(t.iconHtml)):"success"===t.icon?V(e,'\n      <div class="swal2-success-circular-line-left"></div>\n      <span class="swal2-success-line-tip"></span> <span class="swal2-success-line-long"></span>\n      <div class="swal2-success-ring"></div> <div class="swal2-success-fix"></div>\n      <div class="swal2-success-circular-line-right"></div>\n    '):"error"===t.icon?V(e,'\n      <span class="swal2-x-mark">\n        <span class="swal2-x-mark-line-left"></span>\n        <span class="swal2-x-mark-line-right"></span>\n      </span>\n    '):(n={question:"?",warning:"!",info:"i"},V(e,Se(n[t.icon])))},Ee=(e,t)=>{if(t.iconColor){e.style.color=t.iconColor,e.style.borderColor=t.iconColor;for(const n of[".swal2-success-line-tip",".swal2-success-line-long",".swal2-x-mark-line-left",".swal2-x-mark-line-right"])X(e,n,"backgroundColor",t.iconColor);X(e,".swal2-success-ring","borderColor",t.iconColor)}},Se=e=>'<div class="'.concat(h["icon-content"],'">').concat(e,"</div>"),Te=(e,o)=>{const i=B();if(!o.progressSteps||0===o.progressSteps.length)return J(i);Z(i),i.textContent="",o.currentProgressStep>=o.progressSteps.length&&s("Invalid currentProgressStep parameter, it should be less than progressSteps.length (currentProgressStep like JS arrays starts from 0)"),o.progressSteps.forEach((e,t)=>{var n,e=(n=e,e=document.createElement("li"),W(e,h["progress-step"]),V(e,n),e);i.appendChild(e),t===o.currentProgressStep&&W(e,h["active-progress-step"]),t!==o.progressSteps.length-1&&(t=(e=>{const t=document.createElement("li");return W(t,h["progress-step-line"]),e.progressStepsDistance&&(t.style.width=e.progressStepsDistance),t})(o),i.appendChild(t))})},Le=(e,t)=>{e.className="".concat(h.popup," ").concat(G(e)?t.showClass.popup:""),t.toast?(W([document.documentElement,document.body],h["toast-shown"]),W(e,h.toast)):W(e,h.modal),U(e,t,"popup"),"string"==typeof t.customClass&&W(e,t.customClass),t.icon&&W(e,h["icon-".concat(t.icon)])},Oe=(e,t)=>{var n,o,i;(e=>{var t=b();const n=v();e.toast?(Y(t,"width",e.width),n.style.width="100%",n.insertBefore(S(),w())):Y(n,"width",e.width),Y(n,"padding",e.padding),e.background&&(n.style.background=e.background),J(x()),Le(n,e)})(t),me(0,t),Te(0,t),i=e,n=t,o=he.innerParams.get(i),i=w(),o&&n.icon===o.icon?(Pe(i,n),Be(i,n)):n.icon||n.iconHtml?n.icon&&-1===Object.keys(g).indexOf(n.icon)?(r('Unknown icon! Expected "success", "error", "warning", "info" or "question", got "'.concat(n.icon,'"')),J(i)):(Z(i),Pe(i,n),Be(i,n),W(i,n.showClass.icon)):J(i),(e=>{const t=A();if(!e.imageUrl)return J(t);Z(t,""),t.setAttribute("src",e.imageUrl),t.setAttribute("alt",e.imageAlt),Y(t,"width",e.imageWidth),Y(t,"height",e.imageHeight),t.className=h.image,U(t,e,"image")})(t),(e=>{const t=C();\$(t,e.title||e.titleText,"block"),e.title&&re(e.title,t),e.titleText&&(t.innerText=e.titleText),U(t,e,"title")})(t),(e=>{const t=D();V(t,e.closeButtonHtml),U(t,e,"closeButton"),\$(t,e.showCloseButton),t.setAttribute("aria-label",e.closeButtonAriaLabel)})(t),Ae(e,t),de(0,t),i=t,e=O(),\$(e,i.footer),i.footer&&re(i.footer,e),U(e,i,"footer"),"function"==typeof t.didRender&&t.didRender(v())};const je=()=>P()&&P().click();const De=e=>{let t=v();t||ln.fire(),t=v();var n=S();H()?J(w()):Ie(t,e),Z(n),t.setAttribute("data-loading",!0),t.setAttribute("aria-busy",!0),t.focus()},Ie=(e,t)=>{var n=L();const o=S();!t&&G(P())&&(t=P()),Z(n),t&&(J(t),o.setAttribute("data-button-to-replace",t.className)),o.parentNode.insertBefore(o,t),W([e,n],h.loading)},Me={},He=o=>new Promise(e=>{if(!o)return e();var t=window.scrollX,n=window.scrollY;Me.restoreFocusTimeout=setTimeout(()=>{Me.previousActiveElement&&Me.previousActiveElement.focus?(Me.previousActiveElement.focus(),Me.previousActiveElement=null):document.body&&document.body.focus(),e()},100),window.scrollTo(t,n)});const qe=()=>{if(Me.timeout)return(()=>{const e=j();var t=parseInt(window.getComputedStyle(e).width);e.style.removeProperty("transition"),e.style.width="100%";var n=parseInt(window.getComputedStyle(e).width),n=parseInt(t/n*100);e.style.removeProperty("transition"),e.style.width="".concat(n,"%")})(),Me.timeout.stop()},Ve=()=>{if(Me.timeout){var e=Me.timeout.start();return ne(e),e}};let Ne=!1;const Ue={};const Fe=t=>{for(let e=t.target;e&&e!==document;e=e.parentNode)for(const o in Ue){var n=e.getAttribute(o);if(n)return void Ue[o].fire({template:n})}},Re={title:"",titleText:"",text:"",html:"",footer:"",icon:void 0,iconColor:void 0,iconHtml:void 0,template:void 0,toast:!1,showClass:{popup:"swal2-show",backdrop:"swal2-backdrop-show",icon:"swal2-icon-show"},hideClass:{popup:"swal2-hide",backdrop:"swal2-backdrop-hide",icon:"swal2-icon-hide"},customClass:{},target:"body",backdrop:!0,heightAuto:!0,allowOutsideClick:!0,allowEscapeKey:!0,allowEnterKey:!0,stopKeydownPropagation:!0,keydownListenerCapture:!1,showConfirmButton:!0,showDenyButton:!1,showCancelButton:!1,preConfirm:void 0,preDeny:void 0,confirmButtonText:"OK",confirmButtonAriaLabel:"",confirmButtonColor:void 0,denyButtonText:"No",denyButtonAriaLabel:"",denyButtonColor:void 0,cancelButtonText:"Cancel",cancelButtonAriaLabel:"",cancelButtonColor:void 0,buttonsStyling:!0,reverseButtons:!1,focusConfirm:!0,focusDeny:!1,focusCancel:!1,returnFocus:!0,showCloseButton:!1,closeButtonHtml:"&times;",closeButtonAriaLabel:"Close this dialog",loaderHtml:"",showLoaderOnConfirm:!1,showLoaderOnDeny:!1,imageUrl:void 0,imageWidth:void 0,imageHeight:void 0,imageAlt:"",timer:void 0,timerProgressBar:!1,width:void 0,padding:void 0,background:void 0,input:void 0,inputPlaceholder:"",inputLabel:"",inputValue:"",inputOptions:{},inputAutoTrim:!0,inputAttributes:{},inputValidator:void 0,returnInputValueOnDeny:!1,validationMessage:void 0,grow:!1,position:"center",progressSteps:[],currentProgressStep:void 0,progressStepsDistance:void 0,willOpen:void 0,didOpen:void 0,didRender:void 0,willClose:void 0,didClose:void 0,didDestroy:void 0,scrollbarPadding:!0},ze=["allowEscapeKey","allowOutsideClick","background","buttonsStyling","cancelButtonAriaLabel","cancelButtonColor","cancelButtonText","closeButtonAriaLabel","closeButtonHtml","confirmButtonAriaLabel","confirmButtonColor","confirmButtonText","currentProgressStep","customClass","denyButtonAriaLabel","denyButtonColor","denyButtonText","didClose","didDestroy","footer","hideClass","html","icon","iconColor","iconHtml","imageAlt","imageHeight","imageUrl","imageWidth","preConfirm","preDeny","progressSteps","returnFocus","reverseButtons","showCancelButton","showCloseButton","showConfirmButton","showDenyButton","text","title","titleText","willClose"],We={},_e=["allowOutsideClick","allowEnterKey","backdrop","focusConfirm","focusDeny","focusCancel","returnFocus","heightAuto","keydownListenerCapture"],Ke=e=>Object.prototype.hasOwnProperty.call(Re,e);const Ye=e=>We[e],Ze=e=>{!e.backdrop&&e.allowOutsideClick&&s('"allowOutsideClick" parameter requires \`backdrop\` parameter to be set to \`true\`');for(const o in e)n=o,Ke(n)||s('Unknown parameter "'.concat(n,'"')),e.toast&&(t=o,_e.includes(t)&&s('The parameter "'.concat(t,'" is incompatible with toasts'))),t=o,Ye(t)&&i(t,Ye(t));var t,n};var Je=Object.freeze({isValidParameter:Ke,isUpdatableParameter:e=>-1!==ze.indexOf(e),isDeprecatedParameter:Ye,argsToParams:n=>{const o={};return"object"!=typeof n[0]||m(n[0])?["title","html","icon"].forEach((e,t)=>{t=n[t];"string"==typeof t||m(t)?o[e]=t:void 0!==t&&r("Unexpected type of ".concat(e,'! Expected "string" or "Element", got ').concat(typeof t))}):Object.assign(o,n[0]),o},isVisible:()=>G(v()),clickConfirm:je,clickDeny:()=>E()&&E().click(),clickCancel:()=>T()&&T().click(),getContainer:b,getPopup:v,getTitle:C,getHtmlContainer:k,getImage:A,getIcon:w,getInputLabel:()=>y(h["input-label"]),getCloseButton:D,getActions:L,getConfirmButton:P,getDenyButton:E,getCancelButton:T,getLoader:S,getFooter:O,getTimerProgressBar:j,getFocusableElements:I,getValidationMessage:x,isLoading:()=>v().hasAttribute("data-loading"),fire:function(...e){return new this(...e)},mixin:function(n){class e extends this{_main(e,t){return super._main(e,Object.assign({},n,t))}}return e},showLoading:De,enableLoading:De,getTimerLeft:()=>Me.timeout&&Me.timeout.getTimerLeft(),stopTimer:qe,resumeTimer:Ve,toggleTimer:()=>{var e=Me.timeout;return e&&(e.running?qe:Ve)()},increaseTimer:e=>{if(Me.timeout){e=Me.timeout.increase(e);return ne(e,!0),e}},isTimerRunning:()=>Me.timeout&&Me.timeout.isRunning(),bindClickHandler:function(e="data-swal-template"){Ue[e]=this,Ne||(document.body.addEventListener("click",Fe),Ne=!0)}});function Xe(){var e=he.innerParams.get(this);if(e){const t=he.domCache.get(this);J(t.loader),H()?e.icon&&Z(w()):(e=>{const t=e.popup.getElementsByClassName(e.loader.getAttribute("data-button-to-replace"));if(t.length)Z(t[0],"inline-block");else if(Q())J(e.actions)})(t),_([t.popup,t.actions],h.loading),t.popup.removeAttribute("aria-busy"),t.popup.removeAttribute("data-loading"),t.confirmButton.disabled=!1,t.denyButton.disabled=!1,t.cancelButton.disabled=!1}}const \$e=()=>{null===q.previousBodyPadding&&document.body.scrollHeight>window.innerHeight&&(q.previousBodyPadding=parseInt(window.getComputedStyle(document.body).getPropertyValue("padding-right")),document.body.style.paddingRight="".concat(q.previousBodyPadding+(()=>{const e=document.createElement("div");e.className=h["scrollbar-measure"],document.body.appendChild(e);var t=e.getBoundingClientRect().width-e.clientWidth;return document.body.removeChild(e),t})(),"px"))},Ge=()=>{navigator.userAgent.match(/(CriOS|FxiOS|EdgiOS|YaBrowser|UCBrowser)/i)||v().scrollHeight>window.innerHeight-44&&(b().style.paddingBottom="".concat(44,"px"))},Qe=()=>{const e=b();let t;e.ontouchstart=e=>{t=et(e)},e.ontouchmove=e=>{t&&(e.preventDefault(),e.stopPropagation())}},et=e=>{var t=e.target,n=b();return!tt(e)&&!nt(e)&&(t===n||!(ee(n)||"INPUT"===t.tagName||"TEXTAREA"===t.tagName||ee(k())&&k().contains(t)))},tt=e=>e.touches&&e.touches.length&&"stylus"===e.touches[0].touchType,nt=e=>e.touches&&1<e.touches.length,ot=()=>{const e=a(document.body.children);e.forEach(e=>{e.hasAttribute("data-previous-aria-hidden")?(e.setAttribute("aria-hidden",e.getAttribute("data-previous-aria-hidden")),e.removeAttribute("data-previous-aria-hidden")):e.removeAttribute("aria-hidden")})};var it={swalPromiseResolve:new WeakMap};function at(e,t,n,o){H()?ct(e,o):(He(n).then(()=>ct(e,o)),Me.keydownTarget.removeEventListener("keydown",Me.keydownHandler,{capture:Me.keydownListenerCapture}),Me.keydownHandlerAdded=!1),/^((?!chrome|android).)*safari/i.test(navigator.userAgent)?(t.setAttribute("style","display:none !important"),t.removeAttribute("class"),t.innerHTML=""):t.remove(),M()&&(null!==q.previousBodyPadding&&(document.body.style.paddingRight="".concat(q.previousBodyPadding,"px"),q.previousBodyPadding=null),N(document.body,h.iosfix)&&(t=parseInt(document.body.style.top,10),_(document.body,h.iosfix),document.body.style.top="",document.body.scrollTop=-1*t),ot()),_([document.documentElement,document.body],[h.shown,h["height-auto"],h["no-backdrop"],h["toast-shown"]])}function st(e){var t=v();if(t){e=void 0!==(o=e)?Object.assign({isConfirmed:!1,isDenied:!1,isDismissed:!1},o):{isConfirmed:!1,isDenied:!1,isDismissed:!0};var n=he.innerParams.get(this);if(n&&!N(t,n.hideClass.popup)){const i=it.swalPromiseResolve.get(this);_(t,n.showClass.popup),W(t,n.hideClass.popup);var o=b();_(o,n.showClass.backdrop),W(o,n.hideClass.backdrop),((e,t,n)=>{const o=b(),i=ue&&te(t);if(typeof n.willClose==="function")n.willClose(t);if(i)rt(e,t,o,n.returnFocus,n.didClose);else at(e,o,n.returnFocus,n.didClose)})(this,t,n),i(e)}}}const rt=(e,t,n,o,i)=>{Me.swalCloseEventFinishedCallback=at.bind(null,e,n,o,i),t.addEventListener(ue,function(e){e.target===t&&(Me.swalCloseEventFinishedCallback(),delete Me.swalCloseEventFinishedCallback)})},ct=(e,t)=>{setTimeout(()=>{"function"==typeof t&&t.bind(e.params)(),e._destroy()})};function lt(e,t,n){const o=he.domCache.get(e);t.forEach(e=>{o[e].disabled=n})}function ut(e,t){if(!e)return!1;if("radio"===e.type){const n=e.parentNode.parentNode,o=n.querySelectorAll("input");for(let e=0;e<o.length;e++)o[e].disabled=t}else e.disabled=t}class dt{constructor(e,t){this.callback=e,this.remaining=t,this.running=!1,this.start()}start(){return this.running||(this.running=!0,this.started=new Date,this.id=setTimeout(this.callback,this.remaining)),this.remaining}stop(){return this.running&&(this.running=!1,clearTimeout(this.id),this.remaining-=new Date-this.started),this.remaining}increase(e){var t=this.running;return t&&this.stop(),this.remaining+=e,t&&this.start(),this.remaining}getTimerLeft(){return this.running&&(this.stop(),this.start()),this.remaining}isRunning(){return this.running}}var pt={email:(e,t)=>/^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9.-]+\.[a-zA-Z0-9-]{2,24}\$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid email address"),url:(e,t)=>/^https?:\/\/(www\.)?[-a-zA-Z0-9@:%._+~#=]{1,256}\.[a-z]{2,63}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)\$/.test(e)?Promise.resolve():Promise.resolve(t||"Invalid URL")};function mt(e){var t,n;(t=e).inputValidator||Object.keys(pt).forEach(e=>{t.input===e&&(t.inputValidator=pt[e])}),e.showLoaderOnConfirm&&!e.preConfirm&&s("showLoaderOnConfirm is set to true, but preConfirm is not defined.\nshowLoaderOnConfirm should be used together with preConfirm, see usage example:\nhttps://sweetalert2.github.io/#ajax-request"),(n=e).target&&("string"!=typeof n.target||document.querySelector(n.target))&&("string"==typeof n.target||n.target.appendChild)||(s('Target parameter is not valid, defaulting to "body"'),n.target="body"),"string"==typeof e.title&&(e.title=e.title.split("\n").join("<br />")),se(e)}const ht=["swal-title","swal-html","swal-footer"],gt=e=>{e="string"==typeof e.template?document.querySelector(e.template):e.template;if(!e)return{};e=e.content;return kt(e),Object.assign(bt(e),ft(e),yt(e),vt(e),wt(e),Ct(e,ht))},bt=e=>{const o={};return a(e.querySelectorAll("swal-param")).forEach(e=>{At(e,["name","value"]);var t=e.getAttribute("name");let n=e.getAttribute("value");"boolean"==typeof Re[t]&&"false"===n&&(n=!1),"object"==typeof Re[t]&&(n=JSON.parse(n)),o[t]=n}),o},ft=e=>{const n={};return a(e.querySelectorAll("swal-button")).forEach(e=>{At(e,["type","color","aria-label"]);var t=e.getAttribute("type");n["".concat(t,"ButtonText")]=e.innerHTML,n["show".concat(o(t),"Button")]=!0,e.hasAttribute("color")&&(n["".concat(t,"ButtonColor")]=e.getAttribute("color")),e.hasAttribute("aria-label")&&(n["".concat(t,"ButtonAriaLabel")]=e.getAttribute("aria-label"))}),n},yt=e=>{const t={},n=e.querySelector("swal-image");return n&&(At(n,["src","width","height","alt"]),n.hasAttribute("src")&&(t.imageUrl=n.getAttribute("src")),n.hasAttribute("width")&&(t.imageWidth=n.getAttribute("width")),n.hasAttribute("height")&&(t.imageHeight=n.getAttribute("height")),n.hasAttribute("alt")&&(t.imageAlt=n.getAttribute("alt"))),t},vt=e=>{const t={},n=e.querySelector("swal-icon");return n&&(At(n,["type","color"]),n.hasAttribute("type")&&(t.icon=n.getAttribute("type")),n.hasAttribute("color")&&(t.iconColor=n.getAttribute("color")),t.iconHtml=n.innerHTML),t},wt=e=>{const n={},t=e.querySelector("swal-input");t&&(At(t,["type","label","placeholder","value"]),n.input=t.getAttribute("type")||"text",t.hasAttribute("label")&&(n.inputLabel=t.getAttribute("label")),t.hasAttribute("placeholder")&&(n.inputPlaceholder=t.getAttribute("placeholder")),t.hasAttribute("value")&&(n.inputValue=t.getAttribute("value")));e=e.querySelectorAll("swal-input-option");return e.length&&(n.inputOptions={},a(e).forEach(e=>{At(e,["value"]);var t=e.getAttribute("value"),e=e.innerHTML;n.inputOptions[t]=e})),n},Ct=(e,t)=>{const n={};for(const o in t){const i=t[o],a=e.querySelector(i);a&&(At(a,[]),n[i.replace(/^swal-/,"")]=a.innerHTML.trim())}return n},kt=e=>{const t=ht.concat(["swal-param","swal-button","swal-image","swal-icon","swal-input","swal-input-option"]);a(e.children).forEach(e=>{e=e.tagName.toLowerCase();-1===t.indexOf(e)&&s("Unrecognized element <".concat(e,">"))})},At=(t,n)=>{a(t.attributes).forEach(e=>{-1===n.indexOf(e.name)&&s(['Unrecognized attribute "'.concat(e.name,'" on <').concat(t.tagName.toLowerCase(),">."),"".concat(n.length?"Allowed attributes are: ".concat(n.join(", ")):"To set the value, use HTML within the element.")])})},Bt=e=>{const t=b(),n=v();"function"==typeof e.willOpen&&e.willOpen(n);var o=window.getComputedStyle(document.body).overflowY;St(t,n,e),setTimeout(()=>{Pt(t,n)},10),M()&&(Et(t,e.scrollbarPadding,o),(()=>{const e=a(document.body.children);e.forEach(e=>{e===b()||e.contains(b())||(e.hasAttribute("aria-hidden")&&e.setAttribute("data-previous-aria-hidden",e.getAttribute("aria-hidden")),e.setAttribute("aria-hidden","true"))})})()),H()||Me.previousActiveElement||(Me.previousActiveElement=document.activeElement),"function"==typeof e.didOpen&&setTimeout(()=>e.didOpen(n)),_(t,h["no-transition"])},xt=e=>{const t=v();if(e.target===t){const n=b();t.removeEventListener(ue,xt),n.style.overflowY="auto"}},Pt=(e,t)=>{ue&&te(t)?(e.style.overflowY="hidden",t.addEventListener(ue,xt)):e.style.overflowY="auto"},Et=(e,t,n)=>{var o;(/iPad|iPhone|iPod/.test(navigator.userAgent)&&!window.MSStream||"MacIntel"===navigator.platform&&1<navigator.maxTouchPoints)&&!N(document.body,h.iosfix)&&(o=document.body.scrollTop,document.body.style.top="".concat(-1*o,"px"),W(document.body,h.iosfix),Qe(),Ge()),t&&"hidden"!==n&&\$e(),setTimeout(()=>{e.scrollTop=0})},St=(e,t,n)=>{W(e,n.showClass.backdrop),t.style.setProperty("opacity","0","important"),Z(t,"grid"),setTimeout(()=>{W(t,n.showClass.popup),t.style.removeProperty("opacity")},10),W([document.documentElement,document.body],h.shown),n.heightAuto&&n.backdrop&&!n.toast&&W([document.documentElement,document.body],h["height-auto"])},Tt=e=>e.checked?1:0,Lt=e=>e.checked?e.value:null,Ot=e=>e.files.length?null!==e.getAttribute("multiple")?e.files:e.files[0]:null,jt=(t,n)=>{const o=v(),i=e=>It[n.input](o,Mt(e),n);u(n.inputOptions)||p(n.inputOptions)?(De(P()),d(n.inputOptions).then(e=>{t.hideLoading(),i(e)})):"object"==typeof n.inputOptions?i(n.inputOptions):r("Unexpected type of inputOptions! Expected object, Map or Promise, got ".concat(typeof n.inputOptions))},Dt=(t,n)=>{const o=t.getInput();J(o),d(n.inputValue).then(e=>{o.value="number"===n.input?parseFloat(e)||0:"".concat(e),Z(o),o.focus(),t.hideLoading()}).catch(e=>{r("Error in inputValue promise: ".concat(e)),o.value="",Z(o),o.focus(),t.hideLoading()})},It={select:(e,t,i)=>{const a=K(e,h.select),s=(e,t,n)=>{const o=document.createElement("option");o.value=n,V(o,t),o.selected=Ht(n,i.inputValue),e.appendChild(o)};t.forEach(e=>{var t=e[0];const n=e[1];if(Array.isArray(n)){const o=document.createElement("optgroup");o.label=t,o.disabled=!1,a.appendChild(o),n.forEach(e=>s(o,e[1],e[0]))}else s(a,n,t)}),a.focus()},radio:(e,t,a)=>{const s=K(e,h.radio);t.forEach(e=>{var t=e[0],e=e[1];const n=document.createElement("input"),o=document.createElement("label");n.type="radio",n.name=h.radio,n.value=t,Ht(t,a.inputValue)&&(n.checked=!0);const i=document.createElement("span");V(i,e),i.className=h.label,o.appendChild(n),o.appendChild(i),s.appendChild(o)});const n=s.querySelectorAll("input");n.length&&n[0].focus()}},Mt=n=>{const o=[];return"undefined"!=typeof Map&&n instanceof Map?n.forEach((e,t)=>{let n=e;"object"==typeof n&&(n=Mt(n)),o.push([t,n])}):Object.keys(n).forEach(e=>{let t=n[e];"object"==typeof t&&(t=Mt(t)),o.push([e,t])}),o},Ht=(e,t)=>t&&t.toString()===e.toString(),qt=(e,t)=>{var n=he.innerParams.get(e),o=((e,t)=>{const n=e.getInput();if(!n)return null;switch(t.input){case"checkbox":return Tt(n);case"radio":return Lt(n);case"file":return Ot(n);default:return t.inputAutoTrim?n.value.trim():n.value}})(e,n);n.inputValidator?Vt(e,o,t):e.getInput().checkValidity()?("deny"===t?Nt:Ft)(e,o):(e.enableButtons(),e.showValidationMessage(n.validationMessage))},Vt=(t,n,o)=>{const e=he.innerParams.get(t);t.disableInput();const i=Promise.resolve().then(()=>d(e.inputValidator(n,e.validationMessage)));i.then(e=>{t.enableButtons(),t.enableInput(),e?t.showValidationMessage(e):("deny"===o?Nt:Ft)(t,n)})},Nt=(t,n)=>{const e=he.innerParams.get(t||void 0);if(e.showLoaderOnDeny&&De(E()),e.preDeny){const o=Promise.resolve().then(()=>d(e.preDeny(n,e.validationMessage)));o.then(e=>{!1===e?t.hideLoading():t.closePopup({isDenied:!0,value:void 0===e?n:e})})}else t.closePopup({isDenied:!0,value:n})},Ut=(e,t)=>{e.closePopup({isConfirmed:!0,value:t})},Ft=(t,n)=>{const e=he.innerParams.get(t||void 0);if(e.showLoaderOnConfirm&&De(),e.preConfirm){t.resetValidationMessage();const o=Promise.resolve().then(()=>d(e.preConfirm(n,e.validationMessage)));o.then(e=>{G(x())||!1===e?t.hideLoading():Ut(t,void 0===e?n:e)})}else Ut(t,n)},Rt=(e,t,n)=>{const o=I();if(o.length)return(t+=n)===o.length?t=0:-1===t&&(t=o.length-1),o[t].focus();v().focus()},zt=["ArrowRight","ArrowDown"],Wt=["ArrowLeft","ArrowUp"],_t=(e,t,n)=>{var o=he.innerParams.get(e);o&&(o.stopKeydownPropagation&&t.stopPropagation(),"Enter"===t.key?Kt(e,t,o):"Tab"===t.key?Yt(t,o):[...zt,...Wt].includes(t.key)?Zt(t.key):"Escape"===t.key&&Jt(t,o,n))},Kt=(e,t,n)=>{t.isComposing||t.target&&e.getInput()&&t.target.outerHTML===e.getInput().outerHTML&&(["textarea","file"].includes(n.input)||(je(),t.preventDefault()))},Yt=(e,t)=>{var n=e.target,o=I();let i=-1;for(let e=0;e<o.length;e++)if(n===o[e]){i=e;break}e.shiftKey?Rt(0,i,-1):Rt(0,i,1),e.stopPropagation(),e.preventDefault()},Zt=e=>{const t=P(),n=E(),o=T();if([t,n,o].includes(document.activeElement)){e=zt.includes(e)?"nextElementSibling":"previousElementSibling";const i=document.activeElement[e];i&&i.focus()}},Jt=(e,t,n)=>{c(t.allowEscapeKey)&&(e.preventDefault(),n(l.esc))},Xt=(t,e,n)=>{e.popup.onclick=()=>{var e=he.innerParams.get(t);e.showConfirmButton||e.showDenyButton||e.showCancelButton||e.showCloseButton||e.timer||e.input||n(l.close)}};let \$t=!1;const Gt=t=>{t.popup.onmousedown=()=>{t.container.onmouseup=function(e){t.container.onmouseup=void 0,e.target===t.container&&(\$t=!0)}}},Qt=t=>{t.container.onmousedown=()=>{t.popup.onmouseup=function(e){t.popup.onmouseup=void 0,e.target!==t.popup&&!t.popup.contains(e.target)||(\$t=!0)}}},en=(n,o,i)=>{o.container.onclick=e=>{var t=he.innerParams.get(n);\$t?\$t=!1:e.target===o.container&&c(t.allowOutsideClick)&&i(l.backdrop)}};const tn=(e,t,n)=>{var o=j();J(o),t.timer&&(e.timeout=new dt(()=>{n("timer"),delete e.timeout},t.timer),t.timerProgressBar&&(Z(o),setTimeout(()=>{e.timeout&&e.timeout.running&&ne(t.timer)})))},nn=(e,t)=>{if(!t.toast)return c(t.allowEnterKey)?void(on(e,t)||Rt(0,-1,1)):an()},on=(e,t)=>t.focusDeny&&G(e.denyButton)?(e.denyButton.focus(),!0):t.focusCancel&&G(e.cancelButton)?(e.cancelButton.focus(),!0):!(!t.focusConfirm||!G(e.confirmButton))&&(e.confirmButton.focus(),!0),an=()=>{document.activeElement&&"function"==typeof document.activeElement.blur&&document.activeElement.blur()};const sn=e=>{for(const t in e)e[t]=new WeakMap};e=Object.freeze({hideLoading:Xe,disableLoading:Xe,getInput:function(e){var t=he.innerParams.get(e||this);return(e=he.domCache.get(e||this))?F(e.popup,t.input):null},close:st,closePopup:st,closeModal:st,closeToast:st,enableButtons:function(){lt(this,["confirmButton","denyButton","cancelButton"],!1)},disableButtons:function(){lt(this,["confirmButton","denyButton","cancelButton"],!0)},enableInput:function(){return ut(this.getInput(),!1)},disableInput:function(){return ut(this.getInput(),!0)},showValidationMessage:function(e){const t=he.domCache.get(this);var n=he.innerParams.get(this);V(t.validationMessage,e),t.validationMessage.className=h["validation-message"],n.customClass&&n.customClass.validationMessage&&W(t.validationMessage,n.customClass.validationMessage),Z(t.validationMessage);const o=this.getInput();o&&(o.setAttribute("aria-invalid",!0),o.setAttribute("aria-describedby",h["validation-message"]),R(o),W(o,h.inputerror))},resetValidationMessage:function(){var e=he.domCache.get(this);e.validationMessage&&J(e.validationMessage);const t=this.getInput();t&&(t.removeAttribute("aria-invalid"),t.removeAttribute("aria-describedby"),_(t,h.inputerror))},getProgressSteps:function(){return he.domCache.get(this).progressSteps},_main:function(e,t={}){Ze(Object.assign({},t,e)),Me.currentInstance&&(Me.currentInstance._destroy(),M()&&ot()),Me.currentInstance=this,mt(e=((e,t)=>{const n=gt(e),o=Object.assign({},Re,t,n,e);return o.showClass=Object.assign({},Re.showClass,o.showClass),o.hideClass=Object.assign({},Re.hideClass,o.hideClass),o})(e,t)),Object.freeze(e),Me.timeout&&(Me.timeout.stop(),delete Me.timeout),clearTimeout(Me.restoreFocusTimeout);var s,r,c,t=(e=>{const t={popup:v(),container:b(),actions:L(),confirmButton:P(),denyButton:E(),cancelButton:T(),loader:S(),closeButton:D(),validationMessage:x(),progressSteps:B()};return he.domCache.set(e,t),t})(this);return Oe(this,e),he.innerParams.set(this,e),s=this,r=t,c=e,new Promise(e=>{const t=e=>{s.closePopup({isDismissed:!0,dismiss:e})};var n,o,i,a;it.swalPromiseResolve.set(s,e),r.confirmButton.onclick=()=>(e=>{var t=he.innerParams.get(e);e.disableButtons(),t.input?qt(e,"confirm"):Ft(e,!0)})(s),r.denyButton.onclick=()=>(e=>{var t=he.innerParams.get(e);e.disableButtons(),t.returnInputValueOnDeny?qt(e,"deny"):Nt(e,!1)})(s),r.cancelButton.onclick=()=>((e,t)=>{e.disableButtons(),t(l.cancel)})(s,t),r.closeButton.onclick=()=>t(l.close),n=s,a=r,e=t,he.innerParams.get(n).toast?Xt(n,a,e):(Gt(a),Qt(a),en(n,a,e)),o=s,a=Me,e=c,i=t,a.keydownTarget&&a.keydownHandlerAdded&&(a.keydownTarget.removeEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!1),e.toast||(a.keydownHandler=e=>_t(o,e,i),a.keydownTarget=e.keydownListenerCapture?window:v(),a.keydownListenerCapture=e.keydownListenerCapture,a.keydownTarget.addEventListener("keydown",a.keydownHandler,{capture:a.keydownListenerCapture}),a.keydownHandlerAdded=!0),e=s,"select"===(a=c).input||"radio"===a.input?jt(e,a):["text","email","number","tel","textarea"].includes(a.input)&&(u(a.inputValue)||p(a.inputValue))&&(De(P()),Dt(e,a)),Bt(c),tn(Me,c,t),nn(r,c),setTimeout(()=>{r.container.scrollTop=0})})},update:function(t){var e=v(),n=he.innerParams.get(this);if(!e||N(e,n.hideClass.popup))return s("You're trying to update the closed or closing popup, that won't work. Use the update() method in preConfirm parameter or show a new popup.");const o={};Object.keys(t).forEach(e=>{ln.isUpdatableParameter(e)?o[e]=t[e]:s('Invalid parameter to update: "'.concat(e,'". Updatable params are listed here: https://github.com/sweetalert2/sweetalert2/blob/master/src/utils/params.js\n\nIf you think this parameter should be updatable, request it here: https://github.com/sweetalert2/sweetalert2/issues/new?template=02_feature_request.md'))}),n=Object.assign({},n,o),Oe(this,n),he.innerParams.set(this,n),Object.defineProperties(this,{params:{value:Object.assign({},this.params,t),writable:!1,enumerable:!0}})},_destroy:function(){var e=he.domCache.get(this);const t=he.innerParams.get(this);t&&(e.popup&&Me.swalCloseEventFinishedCallback&&(Me.swalCloseEventFinishedCallback(),delete Me.swalCloseEventFinishedCallback),Me.deferDisposalTimer&&(clearTimeout(Me.deferDisposalTimer),delete Me.deferDisposalTimer),"function"==typeof t.didDestroy&&t.didDestroy(),delete this.params,delete Me.keydownHandler,delete Me.keydownTarget,sn(he),sn(it),delete Me.currentInstance)}});let rn;class cn{constructor(...e){"undefined"!=typeof window&&(rn=this,e=Object.freeze(this.constructor.argsToParams(e)),Object.defineProperties(this,{params:{value:e,writable:!1,enumerable:!0,configurable:!0}}),e=this._main(this.params),he.promise.set(this,e))}then(e){const t=he.promise.get(this);return t.then(e)}finally(e){const t=he.promise.get(this);return t.finally(e)}}Object.assign(cn.prototype,e),Object.assign(cn,Je),Object.keys(e).forEach(t=>{cn[t]=function(...e){if(rn)return rn[t](...e)}}),cn.DismissReason=l,cn.version="11.1.7";const ln=cn;return ln.default=ln,ln}),void 0!==this&&this.Sweetalert2&&(this.swal=this.sweetAlert=this.Swal=this.SweetAlert=this.Sweetalert2);
"undefined"!=typeof document&&function(e,t){var n=e.createElement("style");if(e.getElementsByTagName("head")[0].appendChild(n),n.styleSheet)n.styleSheet.disabled||(n.styleSheet.cssText=t);else try{n.innerHTML=t}catch(e){n.innerText=t}}(document,".swal2-popup.swal2-toast{box-sizing:border-box;grid-column:1/4!important;grid-row:1/4!important;grid-template-columns:1fr 99fr 1fr;padding:1em;overflow-y:hidden;background:#fff;box-shadow:0 0 1px rgba(0,0,0,.075),0 1px 2px rgba(0,0,0,.075),1px 2px 4px rgba(0,0,0,.075),1px 3px 8px rgba(0,0,0,.075),2px 4px 16px rgba(0,0,0,.075);pointer-events:all}.swal2-popup.swal2-toast>*{grid-column:2}.swal2-popup.swal2-toast .swal2-title{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-loading{justify-content:center}.swal2-popup.swal2-toast .swal2-input{height:2em;margin:.5em;font-size:1em}.swal2-popup.swal2-toast .swal2-validation-message{font-size:1em}.swal2-popup.swal2-toast .swal2-footer{margin:.5em 0 0;padding:.5em 0 0;font-size:.8em}.swal2-popup.swal2-toast .swal2-close{grid-column:3/3;grid-row:1/99;align-self:center;width:.8em;height:.8em;margin:0;font-size:2em}.swal2-popup.swal2-toast .swal2-html-container{margin:.5em 1em;padding:0;font-size:1em;text-align:initial}.swal2-popup.swal2-toast .swal2-html-container:empty{padding:0}.swal2-popup.swal2-toast .swal2-loader{grid-column:1;grid-row:1/99;align-self:center;width:2em;height:2em;margin:.25em}.swal2-popup.swal2-toast .swal2-icon{grid-column:1;grid-row:1/99;align-self:center;width:2em;min-width:2em;height:2em;margin:0 .5em 0 0}.swal2-popup.swal2-toast .swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:1.8em;font-weight:700}.swal2-popup.swal2-toast .swal2-icon.swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line]{top:.875em;width:1.375em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class\$=left]{left:.3125em}.swal2-popup.swal2-toast .swal2-icon.swal2-error [class^=swal2-x-mark-line][class\$=right]{right:.3125em}.swal2-popup.swal2-toast .swal2-actions{justify-content:flex-start;height:auto;margin:0;margin-top:.5em;padding:0 .5em}.swal2-popup.swal2-toast .swal2-styled{margin:.25em .5em;padding:.4em .6em;font-size:1em}.swal2-popup.swal2-toast .swal2-success{border-color:#a5dc86}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line]{position:absolute;width:1.6em;height:3em;transform:rotate(45deg);border-radius:50%}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class\$=left]{top:-.8em;left:-.5em;transform:rotate(-45deg);transform-origin:2em 2em;border-radius:4em 0 0 4em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-circular-line][class\$=right]{top:-.25em;left:.9375em;transform-origin:0 1.5em;border-radius:0 4em 4em 0}.swal2-popup.swal2-toast .swal2-success .swal2-success-ring{width:2em;height:2em}.swal2-popup.swal2-toast .swal2-success .swal2-success-fix{top:0;left:.4375em;width:.4375em;height:2.6875em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line]{height:.3125em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class\$=tip]{top:1.125em;left:.1875em;width:.75em}.swal2-popup.swal2-toast .swal2-success [class^=swal2-success-line][class\$=long]{top:.9375em;right:.1875em;width:1.375em}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-toast-animate-success-line-tip .75s;animation:swal2-toast-animate-success-line-tip .75s}.swal2-popup.swal2-toast .swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-toast-animate-success-line-long .75s;animation:swal2-toast-animate-success-line-long .75s}.swal2-popup.swal2-toast.swal2-show{-webkit-animation:swal2-toast-show .5s;animation:swal2-toast-show .5s}.swal2-popup.swal2-toast.swal2-hide{-webkit-animation:swal2-toast-hide .1s forwards;animation:swal2-toast-hide .1s forwards}.swal2-container{display:grid;position:fixed;z-index:1060;top:0;right:0;bottom:0;left:0;box-sizing:border-box;grid-template-areas:\"top-start     top            top-end\" \"center-start  center         center-end\" \"bottom-start  bottom-center  bottom-end\";grid-template-rows:minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto) minmax(-webkit-min-content,auto);grid-template-rows:minmax(min-content,auto) minmax(min-content,auto) minmax(min-content,auto);height:100%;padding:.625em;overflow-x:hidden;transition:background-color .1s;-webkit-overflow-scrolling:touch}.swal2-container.swal2-backdrop-show,.swal2-container.swal2-noanimation{background:rgba(0,0,0,.4)}.swal2-container.swal2-backdrop-hide{background:0 0!important}.swal2-container.swal2-bottom-start,.swal2-container.swal2-center-start,.swal2-container.swal2-top-start{grid-template-columns:minmax(0,1fr) auto auto}.swal2-container.swal2-bottom,.swal2-container.swal2-center,.swal2-container.swal2-top{grid-template-columns:auto minmax(0,1fr) auto}.swal2-container.swal2-bottom-end,.swal2-container.swal2-center-end,.swal2-container.swal2-top-end{grid-template-columns:auto auto minmax(0,1fr)}.swal2-container.swal2-top-start>.swal2-popup{align-self:start}.swal2-container.swal2-top>.swal2-popup{grid-column:2;align-self:start;justify-self:center}.swal2-container.swal2-top-end>.swal2-popup,.swal2-container.swal2-top-right>.swal2-popup{grid-column:3;align-self:start;justify-self:end}.swal2-container.swal2-center-left>.swal2-popup,.swal2-container.swal2-center-start>.swal2-popup{grid-row:2;align-self:center}.swal2-container.swal2-center>.swal2-popup{grid-column:2;grid-row:2;align-self:center;justify-self:center}.swal2-container.swal2-center-end>.swal2-popup,.swal2-container.swal2-center-right>.swal2-popup{grid-column:3;grid-row:2;align-self:center;justify-self:end}.swal2-container.swal2-bottom-left>.swal2-popup,.swal2-container.swal2-bottom-start>.swal2-popup{grid-column:1;grid-row:3;align-self:end}.swal2-container.swal2-bottom>.swal2-popup{grid-column:2;grid-row:3;justify-self:center;align-self:end}.swal2-container.swal2-bottom-end>.swal2-popup,.swal2-container.swal2-bottom-right>.swal2-popup{grid-column:3;grid-row:3;align-self:end;justify-self:end}.swal2-container.swal2-grow-fullscreen>.swal2-popup,.swal2-container.swal2-grow-row>.swal2-popup{grid-column:1/4;width:100%}.swal2-container.swal2-grow-column>.swal2-popup,.swal2-container.swal2-grow-fullscreen>.swal2-popup{grid-row:1/4;align-self:stretch}.swal2-container.swal2-no-transition{transition:none!important}.swal2-popup{display:none;position:relative;box-sizing:border-box;grid-template-columns:minmax(0,100%);width:32em;max-width:100%;padding:0 0 1.25em;border:none;border-radius:5px;background:#fff;color:#545454;font-family:inherit;font-size:1rem}.swal2-popup:focus{outline:0}.swal2-popup.swal2-loading{overflow-y:hidden}.swal2-title{position:relative;max-width:100%;margin:0;padding:.8em 1em 0;color:#595959;font-size:1.875em;font-weight:600;text-align:center;text-transform:none;word-wrap:break-word}.swal2-actions{display:flex;z-index:1;box-sizing:border-box;flex-wrap:wrap;align-items:center;justify-content:center;width:auto;margin:1.25em auto 0;padding:0}.swal2-actions:not(.swal2-loading) .swal2-styled[disabled]{opacity:.4}.swal2-actions:not(.swal2-loading) .swal2-styled:hover{background-image:linear-gradient(rgba(0,0,0,.1),rgba(0,0,0,.1))}.swal2-actions:not(.swal2-loading) .swal2-styled:active{background-image:linear-gradient(rgba(0,0,0,.2),rgba(0,0,0,.2))}.swal2-loader{display:none;align-items:center;justify-content:center;width:2.2em;height:2.2em;margin:0 1.875em;-webkit-animation:swal2-rotate-loading 1.5s linear 0s infinite normal;animation:swal2-rotate-loading 1.5s linear 0s infinite normal;border-width:.25em;border-style:solid;border-radius:100%;border-color:#2778c4 transparent #2778c4 transparent}.swal2-styled{margin:.3125em;padding:.625em 1.1em;transition:box-shadow .1s;box-shadow:0 0 0 3px transparent;font-weight:500}.swal2-styled:not([disabled]){cursor:pointer}.swal2-styled.swal2-confirm{border:0;border-radius:.25em;background:initial;background-color:#7367f0;color:#fff;font-size:1em}.swal2-styled.swal2-confirm:focus{box-shadow:0 0 0 3px rgba(115,103,240,.5)}.swal2-styled.swal2-deny{border:0;border-radius:.25em;background:initial;background-color:#ea5455;color:#fff;font-size:1em}.swal2-styled.swal2-deny:focus{box-shadow:0 0 0 3px rgba(234,84,85,.5)}.swal2-styled.swal2-cancel{border:0;border-radius:.25em;background:initial;background-color:#6e7d88;color:#fff;font-size:1em}.swal2-styled.swal2-cancel:focus{box-shadow:0 0 0 3px rgba(110,125,136,.5)}.swal2-styled.swal2-default-outline:focus{box-shadow:0 0 0 3px rgba(100,150,200,.5)}.swal2-styled:focus{outline:0}.swal2-styled::-moz-focus-inner{border:0}.swal2-footer{justify-content:center;margin:1em 0 0;padding:1em 1em 0;border-top:1px solid #eee;color:#545454;font-size:1em}.swal2-timer-progress-bar-container{position:absolute;right:0;bottom:0;left:0;grid-column:auto!important;height:.25em;overflow:hidden;border-bottom-right-radius:5px;border-bottom-left-radius:5px}.swal2-timer-progress-bar{width:100%;height:.25em;background:rgba(0,0,0,.2)}.swal2-image{max-width:100%;margin:2em auto 1em}.swal2-close{z-index:2;align-items:center;justify-content:center;width:1.2em;height:1.2em;margin-top:0;margin-right:0;margin-bottom:-1.2em;padding:0;overflow:hidden;transition:color .1s,box-shadow .1s;border:none;border-radius:5px;background:0 0;color:#ccc;font-family:serif;font-family:monospace;font-size:2.5em;cursor:pointer;justify-self:end}.swal2-close:hover{transform:none;background:0 0;color:#f27474}.swal2-close:focus{outline:0;box-shadow:inset 0 0 0 3px rgba(100,150,200,.5)}.swal2-close::-moz-focus-inner{border:0}.swal2-html-container{z-index:1;justify-content:center;margin:1em 1.6em .3em;padding:0;overflow:auto;color:#545454;font-size:1.125em;font-weight:400;line-height:normal;text-align:center;word-wrap:break-word;word-break:break-word}.swal2-checkbox,.swal2-file,.swal2-input,.swal2-radio,.swal2-select,.swal2-textarea{margin:1em 2em 0}.swal2-file,.swal2-input,.swal2-textarea{box-sizing:border-box;width:auto;transition:border-color .1s,box-shadow .1s;border:1px solid #d9d9d9;border-radius:.1875em;background:inherit;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px transparent;color:inherit;font-size:1.125em}.swal2-file.swal2-inputerror,.swal2-input.swal2-inputerror,.swal2-textarea.swal2-inputerror{border-color:#f27474!important;box-shadow:0 0 2px #f27474!important}.swal2-file:focus,.swal2-input:focus,.swal2-textarea:focus{border:1px solid #b4dbed;outline:0;box-shadow:inset 0 1px 1px rgba(0,0,0,.06),0 0 0 3px rgba(100,150,200,.5)}.swal2-file::-moz-placeholder,.swal2-input::-moz-placeholder,.swal2-textarea::-moz-placeholder{color:#ccc}.swal2-file:-ms-input-placeholder,.swal2-input:-ms-input-placeholder,.swal2-textarea:-ms-input-placeholder{color:#ccc}.swal2-file::placeholder,.swal2-input::placeholder,.swal2-textarea::placeholder{color:#ccc}.swal2-range{margin:1em 2em 0;background:#fff}.swal2-range input{width:80%}.swal2-range output{width:20%;color:inherit;font-weight:600;text-align:center}.swal2-range input,.swal2-range output{height:2.625em;padding:0;font-size:1.125em;line-height:2.625em}.swal2-input{height:2.625em;padding:0 .75em}.swal2-file{width:75%;margin-right:auto;margin-left:auto;background:inherit;font-size:1.125em}.swal2-textarea{height:6.75em;padding:.75em}.swal2-select{min-width:50%;max-width:100%;padding:.375em .625em;background:inherit;color:inherit;font-size:1.125em}.swal2-checkbox,.swal2-radio{align-items:center;justify-content:center;background:#fff;color:inherit}.swal2-checkbox label,.swal2-radio label{margin:0 .6em;font-size:1.125em}.swal2-checkbox input,.swal2-radio input{flex-shrink:0;margin:0 .4em}.swal2-input-label{display:flex;justify-content:center;margin:1em auto 0}.swal2-validation-message{align-items:center;justify-content:center;margin:1em 0 0;padding:.625em;overflow:hidden;background:#f0f0f0;color:#666;font-size:1em;font-weight:300}.swal2-validation-message::before{content:\"!\";display:inline-block;width:1.5em;min-width:1.5em;height:1.5em;margin:0 .625em;border-radius:50%;background-color:#f27474;color:#fff;font-weight:600;line-height:1.5em;text-align:center}.swal2-icon{position:relative;box-sizing:content-box;justify-content:center;width:5em;height:5em;margin:2.5em auto .6em;border:.25em solid transparent;border-radius:50%;border-color:#000;font-family:inherit;line-height:5em;cursor:default;-webkit-user-select:none;-moz-user-select:none;-ms-user-select:none;user-select:none}.swal2-icon .swal2-icon-content{display:flex;align-items:center;font-size:3.75em}.swal2-icon.swal2-error{border-color:#f27474;color:#f27474}.swal2-icon.swal2-error .swal2-x-mark{position:relative;flex-grow:1}.swal2-icon.swal2-error [class^=swal2-x-mark-line]{display:block;position:absolute;top:2.3125em;width:2.9375em;height:.3125em;border-radius:.125em;background-color:#f27474}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class\$=left]{left:1.0625em;transform:rotate(45deg)}.swal2-icon.swal2-error [class^=swal2-x-mark-line][class\$=right]{right:1em;transform:rotate(-45deg)}.swal2-icon.swal2-error.swal2-icon-show{-webkit-animation:swal2-animate-error-icon .5s;animation:swal2-animate-error-icon .5s}.swal2-icon.swal2-error.swal2-icon-show .swal2-x-mark{-webkit-animation:swal2-animate-error-x-mark .5s;animation:swal2-animate-error-x-mark .5s}.swal2-icon.swal2-warning{border-color:#facea8;color:#f8bb86}.swal2-icon.swal2-info{border-color:#9de0f6;color:#3fc3ee}.swal2-icon.swal2-question{border-color:#c9dae1;color:#87adbd}.swal2-icon.swal2-success{border-color:#a5dc86;color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-circular-line]{position:absolute;width:3.75em;height:7.5em;transform:rotate(45deg);border-radius:50%}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class\$=left]{top:-.4375em;left:-2.0635em;transform:rotate(-45deg);transform-origin:3.75em 3.75em;border-radius:7.5em 0 0 7.5em}.swal2-icon.swal2-success [class^=swal2-success-circular-line][class\$=right]{top:-.6875em;left:1.875em;transform:rotate(-45deg);transform-origin:0 3.75em;border-radius:0 7.5em 7.5em 0}.swal2-icon.swal2-success .swal2-success-ring{position:absolute;z-index:2;top:-.25em;left:-.25em;box-sizing:content-box;width:100%;height:100%;border:.25em solid rgba(165,220,134,.3);border-radius:50%}.swal2-icon.swal2-success .swal2-success-fix{position:absolute;z-index:1;top:.5em;left:1.625em;width:.4375em;height:5.625em;transform:rotate(-45deg)}.swal2-icon.swal2-success [class^=swal2-success-line]{display:block;position:absolute;z-index:2;height:.3125em;border-radius:.125em;background-color:#a5dc86}.swal2-icon.swal2-success [class^=swal2-success-line][class\$=tip]{top:2.875em;left:.8125em;width:1.5625em;transform:rotate(45deg)}.swal2-icon.swal2-success [class^=swal2-success-line][class\$=long]{top:2.375em;right:.5em;width:2.9375em;transform:rotate(-45deg)}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-tip{-webkit-animation:swal2-animate-success-line-tip .75s;animation:swal2-animate-success-line-tip .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-line-long{-webkit-animation:swal2-animate-success-line-long .75s;animation:swal2-animate-success-line-long .75s}.swal2-icon.swal2-success.swal2-icon-show .swal2-success-circular-line-right{-webkit-animation:swal2-rotate-success-circular-line 4.25s ease-in;animation:swal2-rotate-success-circular-line 4.25s ease-in}.swal2-progress-steps{flex-wrap:wrap;align-items:center;max-width:100%;margin:1.25em auto;padding:0;background:inherit;font-weight:600}.swal2-progress-steps li{display:inline-block;position:relative}.swal2-progress-steps .swal2-progress-step{z-index:20;flex-shrink:0;width:2em;height:2em;border-radius:2em;background:#2778c4;color:#fff;line-height:2em;text-align:center}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step{background:#2778c4}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step{background:#add8e6;color:#fff}.swal2-progress-steps .swal2-progress-step.swal2-active-progress-step~.swal2-progress-step-line{background:#add8e6}.swal2-progress-steps .swal2-progress-step-line{z-index:10;flex-shrink:0;width:2.5em;height:.4em;margin:0 -1px;background:#2778c4}[class^=swal2]{-webkit-tap-highlight-color:transparent}.swal2-show{-webkit-animation:swal2-show .3s;animation:swal2-show .3s}.swal2-hide{-webkit-animation:swal2-hide .15s forwards;animation:swal2-hide .15s forwards}.swal2-noanimation{transition:none}.swal2-scrollbar-measure{position:absolute;top:-9999px;width:50px;height:50px;overflow:scroll}.swal2-rtl .swal2-close{margin-right:initial;margin-left:0}.swal2-rtl .swal2-timer-progress-bar{right:0;left:auto}@-webkit-keyframes swal2-toast-show{0\%{transform:translateY(-.625em) rotateZ(2deg)}33\%{transform:translateY(0) rotateZ(-2deg)}66\%{transform:translateY(.3125em) rotateZ(2deg)}100\%{transform:translateY(0) rotateZ(0)}}@keyframes swal2-toast-show{0\%{transform:translateY(-.625em) rotateZ(2deg)}33\%{transform:translateY(0) rotateZ(-2deg)}66\%{transform:translateY(.3125em) rotateZ(2deg)}100\%{transform:translateY(0) rotateZ(0)}}@-webkit-keyframes swal2-toast-hide{100\%{transform:rotateZ(1deg);opacity:0}}@keyframes swal2-toast-hide{100\%{transform:rotateZ(1deg);opacity:0}}@-webkit-keyframes swal2-toast-animate-success-line-tip{0\%{top:.5625em;left:.0625em;width:0}54\%{top:.125em;left:.125em;width:0}70\%{top:.625em;left:-.25em;width:1.625em}84\%{top:1.0625em;left:.75em;width:.5em}100\%{top:1.125em;left:.1875em;width:.75em}}@keyframes swal2-toast-animate-success-line-tip{0\%{top:.5625em;left:.0625em;width:0}54\%{top:.125em;left:.125em;width:0}70\%{top:.625em;left:-.25em;width:1.625em}84\%{top:1.0625em;left:.75em;width:.5em}100\%{top:1.125em;left:.1875em;width:.75em}}@-webkit-keyframes swal2-toast-animate-success-line-long{0\%{top:1.625em;right:1.375em;width:0}65\%{top:1.25em;right:.9375em;width:0}84\%{top:.9375em;right:0;width:1.125em}100\%{top:.9375em;right:.1875em;width:1.375em}}@keyframes swal2-toast-animate-success-line-long{0\%{top:1.625em;right:1.375em;width:0}65\%{top:1.25em;right:.9375em;width:0}84\%{top:.9375em;right:0;width:1.125em}100\%{top:.9375em;right:.1875em;width:1.375em}}@-webkit-keyframes swal2-show{0\%{transform:scale(.7)}45\%{transform:scale(1.05)}80\%{transform:scale(.95)}100\%{transform:scale(1)}}@keyframes swal2-show{0\%{transform:scale(.7)}45\%{transform:scale(1.05)}80\%{transform:scale(.95)}100\%{transform:scale(1)}}@-webkit-keyframes swal2-hide{0\%{transform:scale(1);opacity:1}100\%{transform:scale(.5);opacity:0}}@keyframes swal2-hide{0\%{transform:scale(1);opacity:1}100\%{transform:scale(.5);opacity:0}}@-webkit-keyframes swal2-animate-success-line-tip{0\%{top:1.1875em;left:.0625em;width:0}54\%{top:1.0625em;left:.125em;width:0}70\%{top:2.1875em;left:-.375em;width:3.125em}84\%{top:3em;left:1.3125em;width:1.0625em}100\%{top:2.8125em;left:.8125em;width:1.5625em}}@keyframes swal2-animate-success-line-tip{0\%{top:1.1875em;left:.0625em;width:0}54\%{top:1.0625em;left:.125em;width:0}70\%{top:2.1875em;left:-.375em;width:3.125em}84\%{top:3em;left:1.3125em;width:1.0625em}100\%{top:2.8125em;left:.8125em;width:1.5625em}}@-webkit-keyframes swal2-animate-success-line-long{0\%{top:3.375em;right:2.875em;width:0}65\%{top:3.375em;right:2.875em;width:0}84\%{top:2.1875em;right:0;width:3.4375em}100\%{top:2.375em;right:.5em;width:2.9375em}}@keyframes swal2-animate-success-line-long{0\%{top:3.375em;right:2.875em;width:0}65\%{top:3.375em;right:2.875em;width:0}84\%{top:2.1875em;right:0;width:3.4375em}100\%{top:2.375em;right:.5em;width:2.9375em}}@-webkit-keyframes swal2-rotate-success-circular-line{0\%{transform:rotate(-45deg)}5\%{transform:rotate(-45deg)}12\%{transform:rotate(-405deg)}100\%{transform:rotate(-405deg)}}@keyframes swal2-rotate-success-circular-line{0\%{transform:rotate(-45deg)}5\%{transform:rotate(-45deg)}12\%{transform:rotate(-405deg)}100\%{transform:rotate(-405deg)}}@-webkit-keyframes swal2-animate-error-x-mark{0\%{margin-top:1.625em;transform:scale(.4);opacity:0}50\%{margin-top:1.625em;transform:scale(.4);opacity:0}80\%{margin-top:-.375em;transform:scale(1.15)}100\%{margin-top:0;transform:scale(1);opacity:1}}@keyframes swal2-animate-error-x-mark{0\%{margin-top:1.625em;transform:scale(.4);opacity:0}50\%{margin-top:1.625em;transform:scale(.4);opacity:0}80\%{margin-top:-.375em;transform:scale(1.15)}100\%{margin-top:0;transform:scale(1);opacity:1}}@-webkit-keyframes swal2-animate-error-icon{0\%{transform:rotateX(100deg);opacity:0}100\%{transform:rotateX(0);opacity:1}}@keyframes swal2-animate-error-icon{0\%{transform:rotateX(100deg);opacity:0}100\%{transform:rotateX(0);opacity:1}}@-webkit-keyframes swal2-rotate-loading{0\%{transform:rotate(0)}100\%{transform:rotate(360deg)}}@keyframes swal2-rotate-loading{0\%{transform:rotate(0)}100\%{transform:rotate(360deg)}}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow:hidden}body.swal2-height-auto{height:auto!important}body.swal2-no-backdrop .swal2-container{background-color:transparent!important;pointer-events:none}body.swal2-no-backdrop .swal2-container .swal2-popup{pointer-events:all}body.swal2-no-backdrop .swal2-container .swal2-modal{box-shadow:0 0 10px rgba(0,0,0,.4)}@media print{body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown){overflow-y:scroll!important}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown)>[aria-hidden=true]{display:none}body.swal2-shown:not(.swal2-no-backdrop):not(.swal2-toast-shown) .swal2-container{position:static!important}}body.swal2-toast-shown .swal2-container{box-sizing:border-box;width:360px;max-width:100%;background-color:transparent;pointer-events:none}body.swal2-toast-shown .swal2-container.swal2-top{top:0;right:auto;bottom:auto;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-top-end,body.swal2-toast-shown .swal2-container.swal2-top-right{top:0;right:0;bottom:auto;left:auto}body.swal2-toast-shown .swal2-container.swal2-top-left,body.swal2-toast-shown .swal2-container.swal2-top-start{top:0;right:auto;bottom:auto;left:0}body.swal2-toast-shown .swal2-container.swal2-center-left,body.swal2-toast-shown .swal2-container.swal2-center-start{top:50%;right:auto;bottom:auto;left:0;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-center{top:50%;right:auto;bottom:auto;left:50%;transform:translate(-50%,-50%)}body.swal2-toast-shown .swal2-container.swal2-center-end,body.swal2-toast-shown .swal2-container.swal2-center-right{top:50%;right:0;bottom:auto;left:auto;transform:translateY(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-left,body.swal2-toast-shown .swal2-container.swal2-bottom-start{top:auto;right:auto;bottom:0;left:0}body.swal2-toast-shown .swal2-container.swal2-bottom{top:auto;right:auto;bottom:0;left:50%;transform:translateX(-50%)}body.swal2-toast-shown .swal2-container.swal2-bottom-end,body.swal2-toast-shown .swal2-container.swal2-bottom-right{top:auto;right:0;bottom:0;left:auto}");


 /*--- waitForKeyElements(): A utility function, for Greasemonkey scripts,
that detects and handles AJAXed content.

Usage example:
waitForKeyElements ("div.comments", commentCallbackFunction);

//--- Page-specific function to do what we want when the node is found.
function commentCallbackFunction (jNode) {
  jNode.text ("This comment changed by waitForKeyElements().");
}

IMPORTANT: This function requires your script to have loaded jQuery.
*/

function waitForKeyElements(
    selectorTxt, /* Required: The jQuery selector string that
specifies the desired element(s).
*/
    actionFunction, /* Required: The code to run when elements are
found. It is passed a jNode to the matched
element.
*/
    bWaitOnce, /* Optional: If false, will continue to scan for
new elements even after the first match is
found.
*/
    iframeSelector /* Optional: If set, identifies the iframe to
search.
*/
) {
    var targetNodes, btargetsFound;

    if (typeof iframeSelector == "undefined")
        targetNodes = \$(selectorTxt);
    else
        targetNodes = \$(iframeSelector).contents()
            .find(selectorTxt);

    if (targetNodes && targetNodes.length > 0) {
        btargetsFound = true;
        /*--- Found target node(s). Go through each and act if they
        are new.
        */
        targetNodes.each(function () {
            var jThis = \$(this);
            var alreadyFound = jThis.data('alreadyFound') || false;

            if (!alreadyFound) {
                //--- Call the payload function.
                var cancelFound = actionFunction(jThis);
                if (cancelFound)
                    btargetsFound = false;
                else
                    jThis.data('alreadyFound', true);
            }
        });
    }
    else {
        btargetsFound = false;
    }

    //--- Get the timer-control variable for this selector.
    var controlObj = waitForKeyElements.controlObj || {};
    var controlKey = selectorTxt.replace(/[^\w]/g, "_");
    var timeControl = controlObj[controlKey];

    //--- Now set or clear the timer as appropriate.
    if (btargetsFound && bWaitOnce && timeControl) {
        //--- The only condition where we need to clear the timer.
        clearInterval(timeControl);
        delete controlObj[controlKey];
    }
    else {
        //--- Set a timer, if needed.
        if (!timeControl) {
            timeControl = setInterval(function () {
                waitForKeyElements(selectorTxt,
                    actionFunction,
                    bWaitOnce,
                    iframeSelector
                );
            },
                300
            );
            controlObj[controlKey] = timeControl;
        }
    }
    waitForKeyElements.controlObj = controlObj;
}



/*
优化说明
    1、改成中文 "确定"、"取消" 按钮。
    2、select 新增了 textContents 数组。
	3、新增了skin: 'tab'换页切换菜单样式
	4、更新部分翻译
	5、优化字体显示效果
	6、优化同一行内CSS样式
*/


// The GM_config constructor
function GM_configStruct() {
    // call init() if settings were passed to constructor
    if (arguments.length) {
      GM_configInit(this, arguments);
      this.onInit();
    }
  }

  // This is the initializer function
  function GM_configInit(config, args) {
      // Initialize instance variables
      if (typeof config.fields == "undefined") {
          config.fields = {};
          config.onInit = config.onInit || function() {};
          config.onOpen = config.onOpen || function() {};
          config.onSave = config.onSave || function() {};
          config.onClose = config.onClose || function() {};
          config.onReset = config.onReset || function() {};
          config.isOpen = false;
          config.title = '用户脚本设置';
          config.css = {
              basic: [
                  "#GM_config * { font-family: arial,tahoma,myriad pro,sans-serif; }",
                  "#GM_config { background: #FFF; }",
                  "#GM_config input[type='radio'] { margin-right: 8px; }",
                  "#GM_config .indent40 { margin-left: 40%; }",
                  "#GM_config .field_label { font-size: 14px; font-weight: bold; margin-right: 6px; }",
                  "#GM_config .radio_label { font-size: 14px; }",
                  "#GM_config .block { display: block; }",
                  "#GM_config .saveclose_buttons { margin: 16px 10px 10px; padding: 2px 12px; }",
                  "#GM_config .reset, #GM_config .reset a," +
                    " #GM_config_buttons_holder { color: #000; text-align: right; }",
                  "#GM_config .config_header { font-size: 20pt; margin: 0; }",
                  "#GM_config .config_desc, #GM_config .section_desc, #GM_config .reset { font-size: 9pt; }",
                  "#GM_config .center { text-align: center; }",
                  "#GM_config .section_header_holder { margin-top: 8px; }",
                  "#GM_config .config_var { margin: 0 0 4px; }",
                  "#GM_config .section_header { background: #414141; border: 1px solid #000; color: #FFF;" +
                    " font-size: 12pt; margin: 0; }",
                  "#GM_config .section_desc { background: #EFEFEF; border: 1px solid #CCC; color: #575757;" +
                    " font-size: 10pt; margin: 0 0 6px; }",
                  // newer
                  "#GM_config input[type='number'] { width: 60px; }",
                  "#GM_config .nav-tabs { margin: 10 0}",
                  "#GM_config .nav-tabs > div { display: inline; padding: 3px 10px; }",
                  "#pv-prefs .section_header_holder { padding-left: 10px; }",
                  ].join('\n') + '\n',
              skin_tab: [
                  "#GM_config { background: #EEE; }",
                  "#GM_config textarea { width: 98%; height: 45px; margin-top: 5px; }",
                  "#GM_config .field_label { display: inline-block; font-weight: normal; }",
                  // 在同一行内的设置
                  "#GM_config .inline input[type='checkbox'] {margin: 3px 3px 3px 0px;}",
                  "#GM_config .inline .config_var { margin-left: 15px; }",
                  // 内容样式
                  "#GM_config .config_var { font-size: 14px; padding: 5px; margin: 0; }",
                  "#GM_config .config_header a { text-decoration: none; color: #000; }",
                  "#GM_config .nav-tabs { margin: 20 0}",
                  "#GM_config .nav-tabs > div { font-size: 15px; color: #999; cursor: pointer; padding: 10px 20px; }",
                  "#GM_config .nav-tabs > .active { cursor: default; color: #FFF; }",
                  "#GM_config .nav-tabs > div:hover { color: #FFF; }",
                  ].join('\n') + '\n',
              skin_1: [  // 仿 Mouseover Popup Image Viewer 样式
                  "#GM_config { background: #EEE; }",
                  "#GM_config textarea { width: 98%; height: 45px; margin-top: 5px; }",
                  "#GM_config .config_var { font-size: 12px; }",
                  "#GM_config .inline .config_var { margin-left: 15px; }",
                  "#GM_config .field_label { display: inline-block; font-weight: normal; }",
                  "#GM_config { padding: 20px 30px; margin: 0; }",
                  "#GM_config .config_header { margin-bottom: 10px; }",
                  "#GM_config div.config_var { padding: 7px 0; }",
                  ].join('\n') + '\n',
              basicPrefix: "GM_config",
              stylish: ""
          };
      }

    if (args.length == 1 &&
      typeof args[0].id == "string" &&
      typeof args[0].appendChild != "function") var settings = args[0];
    else {
      // Provide backwards-compatibility with argument style intialization
      var settings = {};

      // loop through GM_config.init() arguments
      for (var i = 0, l = args.length, arg; i < l; ++i) {
        arg = args[i];

        // An element to use as the config window
        if (typeof arg.appendChild == "function") {
          settings.frame = arg;
          continue;
        }

              switch (typeof arg) {
                  case 'object':
                      for (var j in arg) { // could be a callback functions or settings object
                          if (typeof arg[j] != "function") { // we are in the settings object
                              if (typeof arg[j] == 'string') {
                                  settings.frameStyle = arg;
                              } else {
                                  settings.fields = arg; // store settings object
                              }
                              break; // leave the loop
                          } // otherwise it must be a callback function
                          if (!settings.events) settings.events = {};
                          settings.events[j] = arg[j];
                      }
                      break;
                  case 'function': // passing a bare function is set to open callback
                      settings.events = {open: arg};
                      break;
                  case 'string': // could be custom CSS or the title string
                      // if (/[\w\.]+\s*\{\s*[\w-]+\s*:\s*\w+[\s|\S]*\}/.test(arg))
                      if (/[\w\.]+\s*\{\s*[\w-]+\s*:[\s|\S]*\}/.test(arg))
                          settings.css = arg;
                      else if (arg)
                          settings.title = arg;
                      break;
              }
          }
      }

    /* Initialize everything using the new settings object */
    // Set the id
    if (settings.id) config.id = settings.id;
    else if (typeof config.id == "undefined") config.id = 'GM_config';

    // Set the title
    if (settings.title) config.title = settings.title;

    // Set the custom css
    if (settings.css) config.css.stylish = settings.css;

      if (settings.skin) {
          var skin = config.css['skin_' + settings.skin];
          if (skin) {
              config.css.basic += skin;
          }
      }

      // Set the frame
      if (settings.frame) config.frame = settings.frame;
      if (settings.frameStyle) config.frameStyle = settings.frameStyle;

      config.isTabs = settings.isTabs;

    // Set the event callbacks
    if (settings.events) {
      var events = settings.events;
      for (var e in events)
        config["on" + e.charAt(0).toUpperCase() + e.slice(1)] = events[e];
    }

      // Create the fields
      if (settings.fields) {
          var stored = config.read(), // read the stored settings
                  fields = settings.fields,
                  customTypes = settings.types || {};

      for (var id in fields) {
        var field = fields[id];

              // for each field definition create a field object
              if (field)
                  config.fields[id] = new GM_configField(field, stored[id], id,
                      customTypes[field.type]);
              else if (config.fields[id]) delete config.fields[id];
          }
      }

    // If the id has changed we must modify the default style
    if (config.id != config.css.basicPrefix) {
      config.css.basic = config.css.basic.replace(
        new RegExp('#' + config.css.basicPrefix, 'gm'), '#' + config.id);
      config.css.basicPrefix = config.id;
    }
  }

  GM_configStruct.prototype = {
    // Support old method of initalizing
    init: function() {
      GM_configInit(this, arguments);
      this.onInit();
    },

    // call GM_config.open() from your script to open the menu
    open: function () {
      // Die if the menu is already open on this page
      // You can have multiple instances but you can't open the same instance twice
      var match = document.getElementById(this.id);
      if (match && (match.tagName == "IFRAME" || match.childNodes.length > 0)) return;

      // Sometimes "this" gets overwritten so create an alias
      var config = this;

      // Function to build the mighty config window :)
      function buildConfigWin (body, head) {
        var create = config.create,
            fields = config.fields,
            configId = config.id,
            bodyWrapper = create('div', {id: configId + '_wrapper'});

        // Append the style which is our default style plus the user style
        head.appendChild(
          create('style', {
          type: 'text/css',
          textContent: config.css.basic + config.css.stylish
        }));

        // Add header and title
        bodyWrapper.appendChild(create('div', {
          id: configId + '_header',
          className: 'config_header block center'
        }, config.title));

              // Append elements
              var section = bodyWrapper,
                      secNum = 0; // Section count
              var lastParentNode = null;

        // loop through fields
        for (var id in fields) {
          var field = fields[id],
              settings = field.settings;

          if (settings.section) { // the start of a new section
            section = bodyWrapper.appendChild(create('div', {
                className: 'section_header_holder',
                id: configId + '_section_' + secNum
              }));

            if (Object.prototype.toString.call(settings.section) !== '[object Array]')
              settings.section = [settings.section];

            if (settings.section[0])
              section.appendChild(create('div', {
                className: 'section_header center',
                id: configId + '_section_header_' + secNum
              }, settings.section[0]));

            if (settings.section[1])
              section.appendChild(create('p', {
                className: 'section_desc center',
                id: configId + '_section_desc_' + secNum
              }, settings.section[1]));
            ++secNum;
          }

                  if (settings.line == 'start' && lastParentNode) {  // 切换到下一行
                      lastParentNode = null;
                  }

                  // Create field elements and append to current section
                  (lastParentNode || section).appendChild((field.wrapper = field.toNode(configId, lastParentNode)));

                  if (settings.line == 'start') {
                      lastParentNode = field.wrapper;
                      lastParentNode.classList.add('inline')
                  } else if (settings.line == 'end') {
                      lastParentNode = null;
                  }
              }

        // Add save and close buttons
        bodyWrapper.appendChild(create('div',
          {id: configId + '_buttons_holder'},

                  create('button', {
                      id: configId + '_saveBtn',
                      textContent: '确定',
                      title: '部分选项需要刷新页面才能生效',
                      className: 'saveclose_buttons',
                      onclick: function () {
                          config.save();
                          config.close();
                      }
                  }),

                  create('button', {
                      id: configId + '_closeBtn',
                      textContent: '取消',
                      title: '取消本次设置，所有选项还原',
                      className: 'saveclose_buttons',
                      onclick: function () {
                          config.close()
                      }
                  }),

          create('div',
            {className: 'reset_holder block'},

                      // Reset link
                      create('a', {
                          id: configId + '_resetLink',
                          textContent: '恢复默认设置',
                          href: '#',
                          title: '恢复所有设置的内容为默认值',
                          className: 'reset',
                          onclick: function (e) {
                              e.preventDefault();
                              config.reset()
                          }
                      })
              )));

        body.appendChild(bodyWrapper); // Paint everything to window at once
        config.center(); // Show and center iframe
        window.addEventListener('resize', config.center, false); // Center frame on resize

              // Call the open() callback function
              config.onOpen(config.frame.contentDocument || config.frame.ownerDocument,
                                          config.frame.contentWindow || window,
                                          config.frame);

              if (config.isTabs) {
                  config.toTabs();
              }

        // Close frame on window close
        window.addEventListener('beforeunload', function () {
            config.close();
        }, false);

        // Now that everything is loaded, make it visible
        config.frame.style.display = "block";
        config.isOpen = true;
      }

          // Change this in the onOpen callback using this.frame.setAttribute('style', '')
          var defaultStyle = 'bottom: auto; border: 1px solid #000; display: none; height: 75%;'
              + ' left: 0; margin: 0; max-height: 95%; max-width: 95%; opacity: 0;'
              + ' overflow: auto; padding: 0; position: fixed; right: auto; top: 0;'
              + ' width: 75%; z-index: 999999999;';

          // Either use the element passed to init() or create an iframe
          if (this.frame) {
              this.frame.id = this.id; // Allows for prefixing styles with the config id
              this.frame.setAttribute('style', defaultStyle);
              buildConfigWin(this.frame, this.frame.ownerDocument.getElementsByTagName('head')[0]);
          } else {
              // Create frame
              document.body.appendChild((this.frame = this.create('iframe', {
                  id: this.id,
                  style: defaultStyle
              })));

              if (this.frameStyle) {
                  Object.keys(this.frameStyle).forEach(function(key) {
                      config.frame.style[key] = config.frameStyle[key];
                  })
              }

        // In WebKit src can't be set until it is added to the page
        this.frame.src = 'about:blank';
        // we wait for the iframe to load before we can modify it
        this.frame.addEventListener('load', function(e) {
            var frame = config.frame;
            var body = frame.contentDocument.getElementsByTagName('body')[0];
            body.id = config.id; // Allows for prefixing styles with the config id
            buildConfigWin(body, frame.contentDocument.getElementsByTagName('head')[0]);
        }, false);
      }
    },

    save: function () {
      var forgotten = this.write();
      this.onSave(forgotten); // Call the save() callback function
    },

      close: function() {
          if (!this.frame) return;
          // If frame is an iframe then remove it
          if (this.frame.contentDocument) {
              this.remove(this.frame);
              this.frame = null;
          } else { // else wipe its content
              this.frame.innerHTML = "";
              this.frame.style.display = "none";
          }

      // Null out all the fields so we don't leak memory
      var fields = this.fields;
      for (var id in fields) {
        var field = fields[id];
        field.wrapper = null;
        field.node = null;
      }

      this.onClose(); //  Call the close() callback function
      this.isOpen = false;
    },

    set: function (name, val) {
      this.fields[name].value = val;

      if (this.fields[name].node) {
        this.fields[name].reload();
      }
    },

    get: function (name, getLive) {
      var field = this.fields[name],
          fieldVal = null;

      if (getLive && field.node) {
        fieldVal = field.toValue();
      }

      return fieldVal != null ? fieldVal : field.value;
    },

    write: function (store, obj) {
      if (!obj) {
        var values = {},
            forgotten = {},
            fields = this.fields;

        for (var id in fields) {
          var field = fields[id];
          var value = field.toValue();

          if (field.save) {
            if (value != null) {
              values[id] = value;
              field.value = value;
            } else
              values[id] = field.value;
          } else
            forgotten[id] = value;
        }
      }
      try {
        this.setValue(store || this.id, this.stringify(obj || values));
      } catch(e) {
        this.log("GM_config failed to save settings!");
      }

      return forgotten;
    },

    read: function (store) {
      try {
        var rval = this.parser(this.getValue(store || this.id, '{}'));
      } catch(e) {
        this.log("GM_config failed to read saved settings!");
        var rval = {};
      }
      return rval;
    },

    reset: function () {
      var fields = this.fields;

      // Reset all the fields
      for (var id in fields) fields[id].reset();

      this.onReset(); // Call the reset() callback function
    },

      create: function () {
          switch(arguments.length) {
              case 1:
                  var A = document.createTextNode(arguments[0]);
                  break;
              default:
                  var A = document.createElement(arguments[0]),
                          B = arguments[1];
                  for (var b in B) {
                      if (b.indexOf("on") == 0)
                          A.addEventListener(b.substring(2), B[b], false);
                      else if (",style,accesskey,id,name,src,href,which,for".indexOf("," +
                                       b.toLowerCase()) != -1)
                          A.setAttribute(b, B[b]);
                      else if (typeof B[b] != 'undefined')
                          A[b] = B[b];
                  }
                  if (typeof arguments[2] == "string")
                      A.innerHTML = arguments[2];
                  else
                      for (var i = 2, len = arguments.length; i < len; ++i)
                          A.appendChild(arguments[i]);
          }
          return A;
      },

    center: function () {
      var node = this.frame;
      if (!node) return;
      var style = node.style,
          beforeOpacity = style.opacity;
      if (style.display == 'none') style.opacity = '0';
      style.display = '';
      style.top = Math.floor((window.innerHeight / 2) - (node.offsetHeight / 2)) + 'px';
      style.left = Math.floor((window.innerWidth / 2) - (node.offsetWidth / 2)) + 'px';
      style.opacity = '1';
    },

      remove: function (el) {
          if (el && el.parentNode) el.parentNode.removeChild(el);
      },

      toTabs: function() {  // 转为 tab 的形式
          var body = this.frame.tagName == 'IFRAME' ? this.frame.contentWindow.document : this.frame,
              configId = this.id;
          var \$ = function(id) {
              return body.getElementById(configId + '_' + id);
          };

          var headers = body.querySelectorAll('.section_header');
          if (!headers.length) return;

          var anch = this.create('div', {
              // id: configId + '_tab_holder',
              className: 'nav-tabs',
          });

          for (var i = 0, header; i < headers.length; i++) {
              header = headers[i];
              if (i == 0) {
                  header.classList.add('active');
              }
              anch.appendChild(header);
          }

          anch.addEventListener('click', this.toggleTab.bind(this), false);

          \$('section_0').parentNode.insertBefore(anch, \$('section_0'));

          var curTab = localStorage.getItem('picviewerCE.config.curTab') || 0;
          this.toggleTab(parseInt(curTab, 10));
      },
      toggleTab: function(e) {
          var body = this.frame.tagName == 'IFRAME' ? this.frame.contentWindow.document : this.frame,
              configId = this.id;

          var curTab = typeof e == 'number' ? e : /\_(\d+)/.exec(e.target.id)[1];

          [].forEach.call(body.querySelectorAll('.section_header'), function(header, i) {
              if (i == curTab) {
                  header.classList.add('active');
              } else {
                  header.classList.remove('active');
              }
          });

          [].forEach.call(body.querySelectorAll('.section_header_holder'), function(holder, i) {
              holder.style.display = (i == curTab) ? 'block' : 'none';
          });

          localStorage.setItem('picviewerCE.config.curTab', curTab)
      }
  };

  // Define a bunch of API stuff
  (function() {
    var isGM = typeof GM_getValue != 'undefined' &&
               typeof GM_getValue('a', 'b') != 'undefined',
        setValue, getValue, stringify, parser;

    // Define value storing and reading API
    if (!isGM) {
      setValue = function (name, value) {
        return localStorage.setItem(name, value);
      };
      getValue = function(name, def){
        var s = localStorage.getItem(name);
        return s == null ? def : s
      };

      // We only support JSON parser outside GM
      stringify = JSON.stringify;
      parser = JSON.parse;
    } else {
      setValue = GM_setValue;
      getValue = GM_getValue;
      stringify = typeof JSON == "undefined" ?
        function(obj) {
          return obj.toSource();
      } : JSON.stringify;
      parser = typeof JSON == "undefined" ?
        function(jsonData) {
          return (new Function('return ' + jsonData + ';'))();
      } : JSON.parse;
    }

    GM_configStruct.prototype.isGM = isGM;
    GM_configStruct.prototype.setValue = setValue;
    GM_configStruct.prototype.getValue = getValue;
    GM_configStruct.prototype.stringify = stringify;
    GM_configStruct.prototype.parser = parser;
    GM_configStruct.prototype.log =  window.console ?
      console.log : (isGM && typeof GM_log != 'undefined' ?
        GM_log : (window.opera ?
          opera.postError : function(){ /* no logging */ }
    ));
  })();

  function GM_configDefaultValue(type, options) {
    var value;

      if (type && type.indexOf('unsigned ') == 0)
          type = type.substring(9);

    switch (type) {
      case 'radio': case 'select':
        value = options[0];
        break;
      case 'checkbox':
        value = false;
        break;
      case 'int': case 'integer':
      case 'float': case 'number':
        value = 0;
        break;
      default:
        value = '';
    }

    return value;
  }

  function GM_configField(settings, stored, id, customType) {
      // Store the field's settings
      this.settings = settings;
      this.id = id;
      this.node = null;
      this.wrapper = null;
      this.save = typeof settings.save == "undefined" ? true : settings.save;

      // Buttons are static and don't have a stored value
      if (settings.type == "button") this.save = false;
      if (settings.type == "span") this.save = false;

    // if a default value wasn't passed through init() then
    //   if the type is custom use its default value
    //   else use default value for type
    // else use the default value passed through init()
    this['default'] = typeof settings['default'] == "undefined" ?
      customType ?
        customType['default']
        : GM_configDefaultValue(settings.type, settings.options)
      : settings['default'];

    // Store the field's value
    this.value = typeof stored == "undefined" ? this['default'] : stored;

    // Setup methods for a custom type
    if (customType) {
      this.toNode = customType.toNode;
      this.toValue = customType.toValue;
      this.reset = customType.reset;
    }
  }

  GM_configField.prototype = {
    create: GM_configStruct.prototype.create,

      toNode: function(configId, lastParentNode) {
          var field = this.settings,
                  value = this.value,
                  options = field.options,
                  type = field.type,
                  id = this.id,
                  labelPos = field.labelPos,
                  create = this.create;

          function addLabel(pos, labelEl, parentNode, beforeEl) {
              if (!beforeEl) {
                  beforeEl = lastParentNode ? parentNode.lastChild : parentNode.firstChild;  // oneLine 的修正
              }

              switch (pos) {
                  case 'right': case 'below':
                      if (pos == 'below')
                          parentNode.appendChild(create('br', {}));
                      parentNode.appendChild(labelEl);
                      break;
                  default:
                      if (pos == 'above')
                          parentNode.insertBefore(create('br', {}), beforeEl);
                      parentNode.insertBefore(labelEl, beforeEl);
              }
          }

      var retNode = create('div', { className: 'config_var',
            id: configId + '_' + id + '_var',
            title: field.title || '' }),
          firstProp;

      // Retrieve the first prop
      for (var i in field) { firstProp = i; break; }

      var label = field.label && type != "button" ?
        create('label', {
          id: configId + '_' + id + '_field_label',
          for: configId + '_field_' + id,
          className: 'field_label'
        }, field.label) : null;

          switch (type) {
              case 'span':
                  label = null;

                  this.node = create('span', {
                      innerHTML: field.label,
                      className: 'field_label',
                      title: field.title,
                      style: field.style
                  });
                  retNode = this.node;
                  break;
              case 'textarea':
                  retNode.appendChild((this.node = create('textarea', {
                      innerHTML: value,
                      id: configId + '_field_' + id,
                      className: 'block' + (field.className ? (" " + field.className) : ''),
                      cols: (field.cols ? field.cols : 20),
                      rows: (field.rows ? field.rows : 2),
                      placeholder: field.placeholder
                  })));
                  break;
              case 'radio':
                  var wrap = create('div', {
                      id: configId + '_field_' + id,
                      className: field.className
                  });
                  this.node = wrap;

          for (var i = 0, len = options.length; i < len; ++i) {
            var radLabel = create('label', {
              className: 'radio_label'
            }, options[i]);

            var rad = wrap.appendChild(create('input', {
              value: options[i],
              type: 'radio',
              name: id,
              checked: options[i] == value
            }));

            var radLabelPos = labelPos &&
              (labelPos == 'left' || labelPos == 'right') ?
              labelPos : firstProp == 'options' ? 'left' : 'right';

            addLabel(radLabelPos, radLabel, wrap, rad);
          }

          retNode.appendChild(wrap);
          break;
        case 'select':
          var wrap = create('select', {
            id: configId + '_field_' + id
          });
          this.node = wrap;

          for (var i = 0, len = options.length; i < len; ++i) {
            var option = options[i];
            wrap.appendChild(create('option', {
              value: option,
              selected: option == value
            }, option));
          }

          retNode.appendChild(wrap);
          break;
        default: // fields using input elements
          var props = {
            id: configId + '_field_' + id,
            type: type,
            value: type == 'button' ? field.label : value
          };

          switch (type) {
            case 'checkbox':
              props.checked = value;
              break;
            case 'button':
              props.size = field.size ? field.size : 25;
              if (field.script) field.click = field.script;
              if (field.click) props.onclick = field.click;
              break;
            case 'hidden':
              break;
            default:
              // type = text, int, or float
              props.type = 'text';
              props.size = field.size ? field.size : 25;
          }

          retNode.appendChild((this.node = create('input', props)));
      }

      if (label) {
        // If the label is passed first, insert it before the field
        // else insert it after
        if (!labelPos)
          labelPos = firstProp == "label" || type == "radio" ?
            "left" : "right";

        addLabel(labelPos, label, retNode);
      }

      return retNode;
    },

    toValue: function() {
      var node = this.node,
          field = this.settings,
          type = field.type,
          unsigned = false,
          rval = null;

      if (!node) return rval;

      if (type.indexOf('unsigned ') == 0) {
        type = type.substring(9);
        unsigned = true;
      }

      switch (type) {
        case 'checkbox':
          rval = node.checked;
          break;
        case 'select':
          rval = node[node.selectedIndex].value;
          break;
        case 'radio':
          var radios = node.getElementsByTagName('input');
          for (var i = 0, len = radios.length; i < len; ++i)
            if (radios[i].checked)
              rval = radios[i].value;
          break;
        case 'button':
          break;
        case 'int': case 'integer':
        case 'float': case 'number':
          var num = Number(node.value);
          var warn = '输入字符 "' + field.label + '" 要求必须为' +
            (unsigned ? ' 正 ' : 'n ') + '整数值';

          if (isNaN(num) || (type.substr(0, 3) == 'int' &&
              Math.ceil(num) != Math.floor(num)) ||
              (unsigned && num < 0)) {
            alert(warn + '.');
            return null;
          }

          if (!this._checkNumberRange(num, warn))
            return null;
          rval = num;
          break;
        default:
          rval = node.value;
          break;
      }

      return rval; // value read successfully
    },

    reset: function() {
      var node = this.node,
          field = this.settings,
          type = field.type;

      if (!node) return;

          switch (type) {
              case 'checkbox':
                  node.checked = this['default'];
                  break;
              case 'select':
                  for (var i = 0, len = node.options.length; i < len; ++i)
                  if (node.options[i].value == this['default'])
                          node.selectedIndex = i;
                  break;
              case 'radio':
                  var radios = node.getElementsByTagName('input');
                  for (var i = 0, len = radios.length; i < len; ++i)
                      if (radios[i].value == this['default'])
                          radios[i].checked = true;
                  break;
              case 'button' :
                  break;
              default:
                  node.value = this['default'];
                  break;
              }
      },

    remove: function(el) {
      GM_configStruct.prototype.remove(el || this.wrapper);
      this.wrapper = null;
      this.node = null;
    },

    reload: function() {
      var wrapper = this.wrapper;
      if (wrapper) {
        var fieldParent = wrapper.parentNode;
        fieldParent.insertBefore((this.wrapper = this.toNode()), wrapper);
        this.remove(wrapper);
      }
    },

    _checkNumberRange: function(num, warn) {
      var field = this.settings;
      if (typeof field.min == "number" && num < field.min) {
        alert(warn + ' greater than or equal to ' + field.min + '.');
        return null;
      }

      if (typeof field.max == "number" && num > field.max) {
        alert(warn + ' less than or equal to ' + field.max + '.');
        return null;
      }
      return true;
    }
  };

  // Create default instance of GM_config
  var GM_config = new GM_configStruct();




!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.forge=t():e.forge=t()}(window,(function(){return function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}return r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=34)}([function(e,t){e.exports={options:{usePureJavaScript:!1}}},function(e,t,r){(function(t){var a=r(0),n=r(37),i=e.exports=a.util=a.util||{};function s(e){if(8!==e&&16!==e&&24!==e&&32!==e)throw new Error("Only 8, 16, 24, or 32 bits supported: "+e)}function o(e){if(this.data="",this.read=0,"string"==typeof e)this.data=e;else if(i.isArrayBuffer(e)||i.isArrayBufferView(e))if("undefined"!=typeof Buffer&&e instanceof Buffer)this.data=e.toString("binary");else{var t=new Uint8Array(e);try{this.data=String.fromCharCode.apply(null,t)}catch(e){for(var r=0;r<t.length;++r)this.putByte(t[r])}}else(e instanceof o||"object"==typeof e&&"string"==typeof e.data&&"number"==typeof e.read)&&(this.data=e.data,this.read=e.read);this._constructedStringLength=0}!function(){if("undefined"!=typeof process&&process.nextTick&&!process.browser)return i.nextTick=process.nextTick,void("function"==typeof setImmediate?i.setImmediate=setImmediate:i.setImmediate=i.nextTick);if("function"==typeof setImmediate)return i.setImmediate=function(){return setImmediate.apply(void 0,arguments)},void(i.nextTick=function(e){return setImmediate(e)});if(i.setImmediate=function(e){setTimeout(e,0)},"undefined"!=typeof window&&"function"==typeof window.postMessage){var e="forge.setImmediate",t=[];i.setImmediate=function(r){t.push(r),1===t.length&&window.postMessage(e,"*")},window.addEventListener("message",(function(r){if(r.source===window&&r.data===e){r.stopPropagation();var a=t.slice();t.length=0,a.forEach((function(e){e()}))}}),!0)}if("undefined"!=typeof MutationObserver){var r=Date.now(),a=!0,n=document.createElement("div");t=[];new MutationObserver((function(){var e=t.slice();t.length=0,e.forEach((function(e){e()}))})).observe(n,{attributes:!0});var s=i.setImmediate;i.setImmediate=function(e){Date.now()-r>15?(r=Date.now(),s(e)):(t.push(e),1===t.length&&n.setAttribute("a",a=!a))}}i.nextTick=i.setImmediate}(),i.isNodejs="undefined"!=typeof process&&process.versions&&process.versions.node,i.globalScope=i.isNodejs?t:"undefined"==typeof self?window:self,i.isArray=Array.isArray||function(e){return"[object Array]"===Object.prototype.toString.call(e)},i.isArrayBuffer=function(e){return"undefined"!=typeof ArrayBuffer&&e instanceof ArrayBuffer},i.isArrayBufferView=function(e){return e&&i.isArrayBuffer(e.buffer)&&void 0!==e.byteLength},i.ByteBuffer=o,i.ByteStringBuffer=o;i.ByteStringBuffer.prototype._optimizeConstructedString=function(e){this._constructedStringLength+=e,this._constructedStringLength>4096&&(this.data.substr(0,1),this._constructedStringLength=0)},i.ByteStringBuffer.prototype.length=function(){return this.data.length-this.read},i.ByteStringBuffer.prototype.isEmpty=function(){return this.length()<=0},i.ByteStringBuffer.prototype.putByte=function(e){return this.putBytes(String.fromCharCode(e))},i.ByteStringBuffer.prototype.fillWithByte=function(e,t){e=String.fromCharCode(e);for(var r=this.data;t>0;)1&t&&(r+=e),(t>>>=1)>0&&(e+=e);return this.data=r,this._optimizeConstructedString(t),this},i.ByteStringBuffer.prototype.putBytes=function(e){return this.data+=e,this._optimizeConstructedString(e.length),this},i.ByteStringBuffer.prototype.putString=function(e){return this.putBytes(i.encodeUtf8(e))},i.ByteStringBuffer.prototype.putInt16=function(e){return this.putBytes(String.fromCharCode(e>>8&255)+String.fromCharCode(255&e))},i.ByteStringBuffer.prototype.putInt24=function(e){return this.putBytes(String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(255&e))},i.ByteStringBuffer.prototype.putInt32=function(e){return this.putBytes(String.fromCharCode(e>>24&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(255&e))},i.ByteStringBuffer.prototype.putInt16Le=function(e){return this.putBytes(String.fromCharCode(255&e)+String.fromCharCode(e>>8&255))},i.ByteStringBuffer.prototype.putInt24Le=function(e){return this.putBytes(String.fromCharCode(255&e)+String.fromCharCode(e>>8&255)+String.fromCharCode(e>>16&255))},i.ByteStringBuffer.prototype.putInt32Le=function(e){return this.putBytes(String.fromCharCode(255&e)+String.fromCharCode(e>>8&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>24&255))},i.ByteStringBuffer.prototype.putInt=function(e,t){s(t);var r="";do{t-=8,r+=String.fromCharCode(e>>t&255)}while(t>0);return this.putBytes(r)},i.ByteStringBuffer.prototype.putSignedInt=function(e,t){return e<0&&(e+=2<<t-1),this.putInt(e,t)},i.ByteStringBuffer.prototype.putBuffer=function(e){return this.putBytes(e.getBytes())},i.ByteStringBuffer.prototype.getByte=function(){return this.data.charCodeAt(this.read++)},i.ByteStringBuffer.prototype.getInt16=function(){var e=this.data.charCodeAt(this.read)<<8^this.data.charCodeAt(this.read+1);return this.read+=2,e},i.ByteStringBuffer.prototype.getInt24=function(){var e=this.data.charCodeAt(this.read)<<16^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2);return this.read+=3,e},i.ByteStringBuffer.prototype.getInt32=function(){var e=this.data.charCodeAt(this.read)<<24^this.data.charCodeAt(this.read+1)<<16^this.data.charCodeAt(this.read+2)<<8^this.data.charCodeAt(this.read+3);return this.read+=4,e},i.ByteStringBuffer.prototype.getInt16Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8;return this.read+=2,e},i.ByteStringBuffer.prototype.getInt24Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16;return this.read+=3,e},i.ByteStringBuffer.prototype.getInt32Le=function(){var e=this.data.charCodeAt(this.read)^this.data.charCodeAt(this.read+1)<<8^this.data.charCodeAt(this.read+2)<<16^this.data.charCodeAt(this.read+3)<<24;return this.read+=4,e},i.ByteStringBuffer.prototype.getInt=function(e){s(e);var t=0;do{t=(t<<8)+this.data.charCodeAt(this.read++),e-=8}while(e>0);return t},i.ByteStringBuffer.prototype.getSignedInt=function(e){var t=this.getInt(e),r=2<<e-2;return t>=r&&(t-=r<<1),t},i.ByteStringBuffer.prototype.getBytes=function(e){var t;return e?(e=Math.min(this.length(),e),t=this.data.slice(this.read,this.read+e),this.read+=e):0===e?t="":(t=0===this.read?this.data:this.data.slice(this.read),this.clear()),t},i.ByteStringBuffer.prototype.bytes=function(e){return void 0===e?this.data.slice(this.read):this.data.slice(this.read,this.read+e)},i.ByteStringBuffer.prototype.at=function(e){return this.data.charCodeAt(this.read+e)},i.ByteStringBuffer.prototype.setAt=function(e,t){return this.data=this.data.substr(0,this.read+e)+String.fromCharCode(t)+this.data.substr(this.read+e+1),this},i.ByteStringBuffer.prototype.last=function(){return this.data.charCodeAt(this.data.length-1)},i.ByteStringBuffer.prototype.copy=function(){var e=i.createBuffer(this.data);return e.read=this.read,e},i.ByteStringBuffer.prototype.compact=function(){return this.read>0&&(this.data=this.data.slice(this.read),this.read=0),this},i.ByteStringBuffer.prototype.clear=function(){return this.data="",this.read=0,this},i.ByteStringBuffer.prototype.truncate=function(e){var t=Math.max(0,this.length()-e);return this.data=this.data.substr(this.read,t),this.read=0,this},i.ByteStringBuffer.prototype.toHex=function(){for(var e="",t=this.read;t<this.data.length;++t){var r=this.data.charCodeAt(t);r<16&&(e+="0"),e+=r.toString(16)}return e},i.ByteStringBuffer.prototype.toString=function(){return i.decodeUtf8(this.bytes())},i.DataBuffer=function(e,t){t=t||{},this.read=t.readOffset||0,this.growSize=t.growSize||1024;var r=i.isArrayBuffer(e),a=i.isArrayBufferView(e);if(r||a)return this.data=r?new DataView(e):new DataView(e.buffer,e.byteOffset,e.byteLength),void(this.write="writeOffset"in t?t.writeOffset:this.data.byteLength);this.data=new DataView(new ArrayBuffer(0)),this.write=0,null!=e&&this.putBytes(e),"writeOffset"in t&&(this.write=t.writeOffset)},i.DataBuffer.prototype.length=function(){return this.write-this.read},i.DataBuffer.prototype.isEmpty=function(){return this.length()<=0},i.DataBuffer.prototype.accommodate=function(e,t){if(this.length()>=e)return this;t=Math.max(t||this.growSize,e);var r=new Uint8Array(this.data.buffer,this.data.byteOffset,this.data.byteLength),a=new Uint8Array(this.length()+t);return a.set(r),this.data=new DataView(a.buffer),this},i.DataBuffer.prototype.putByte=function(e){return this.accommodate(1),this.data.setUint8(this.write++,e),this},i.DataBuffer.prototype.fillWithByte=function(e,t){this.accommodate(t);for(var r=0;r<t;++r)this.data.setUint8(e);return this},i.DataBuffer.prototype.putBytes=function(e,t){if(i.isArrayBufferView(e)){var r=(a=new Uint8Array(e.buffer,e.byteOffset,e.byteLength)).byteLength-a.byteOffset;return this.accommodate(r),new Uint8Array(this.data.buffer,this.write).set(a),this.write+=r,this}if(i.isArrayBuffer(e)){var a=new Uint8Array(e);return this.accommodate(a.byteLength),new Uint8Array(this.data.buffer).set(a,this.write),this.write+=a.byteLength,this}if(e instanceof i.DataBuffer||"object"==typeof e&&"number"==typeof e.read&&"number"==typeof e.write&&i.isArrayBufferView(e.data)){a=new Uint8Array(e.data.byteLength,e.read,e.length());return this.accommodate(a.byteLength),new Uint8Array(e.data.byteLength,this.write).set(a),this.write+=a.byteLength,this}if(e instanceof i.ByteStringBuffer&&(e=e.data,t="binary"),t=t||"binary","string"==typeof e){var n;if("hex"===t)return this.accommodate(Math.ceil(e.length/2)),n=new Uint8Array(this.data.buffer,this.write),this.write+=i.binary.hex.decode(e,n,this.write),this;if("base64"===t)return this.accommodate(3*Math.ceil(e.length/4)),n=new Uint8Array(this.data.buffer,this.write),this.write+=i.binary.base64.decode(e,n,this.write),this;if("utf8"===t&&(e=i.encodeUtf8(e),t="binary"),"binary"===t||"raw"===t)return this.accommodate(e.length),n=new Uint8Array(this.data.buffer,this.write),this.write+=i.binary.raw.decode(n),this;if("utf16"===t)return this.accommodate(2*e.length),n=new Uint16Array(this.data.buffer,this.write),this.write+=i.text.utf16.encode(n),this;throw new Error("Invalid encoding: "+t)}throw Error("Invalid parameter: "+e)},i.DataBuffer.prototype.putBuffer=function(e){return this.putBytes(e),e.clear(),this},i.DataBuffer.prototype.putString=function(e){return this.putBytes(e,"utf16")},i.DataBuffer.prototype.putInt16=function(e){return this.accommodate(2),this.data.setInt16(this.write,e),this.write+=2,this},i.DataBuffer.prototype.putInt24=function(e){return this.accommodate(3),this.data.setInt16(this.write,e>>8&65535),this.data.setInt8(this.write,e>>16&255),this.write+=3,this},i.DataBuffer.prototype.putInt32=function(e){return this.accommodate(4),this.data.setInt32(this.write,e),this.write+=4,this},i.DataBuffer.prototype.putInt16Le=function(e){return this.accommodate(2),this.data.setInt16(this.write,e,!0),this.write+=2,this},i.DataBuffer.prototype.putInt24Le=function(e){return this.accommodate(3),this.data.setInt8(this.write,e>>16&255),this.data.setInt16(this.write,e>>8&65535,!0),this.write+=3,this},i.DataBuffer.prototype.putInt32Le=function(e){return this.accommodate(4),this.data.setInt32(this.write,e,!0),this.write+=4,this},i.DataBuffer.prototype.putInt=function(e,t){s(t),this.accommodate(t/8);do{t-=8,this.data.setInt8(this.write++,e>>t&255)}while(t>0);return this},i.DataBuffer.prototype.putSignedInt=function(e,t){return s(t),this.accommodate(t/8),e<0&&(e+=2<<t-1),this.putInt(e,t)},i.DataBuffer.prototype.getByte=function(){return this.data.getInt8(this.read++)},i.DataBuffer.prototype.getInt16=function(){var e=this.data.getInt16(this.read);return this.read+=2,e},i.DataBuffer.prototype.getInt24=function(){var e=this.data.getInt16(this.read)<<8^this.data.getInt8(this.read+2);return this.read+=3,e},i.DataBuffer.prototype.getInt32=function(){var e=this.data.getInt32(this.read);return this.read+=4,e},i.DataBuffer.prototype.getInt16Le=function(){var e=this.data.getInt16(this.read,!0);return this.read+=2,e},i.DataBuffer.prototype.getInt24Le=function(){var e=this.data.getInt8(this.read)^this.data.getInt16(this.read+1,!0)<<8;return this.read+=3,e},i.DataBuffer.prototype.getInt32Le=function(){var e=this.data.getInt32(this.read,!0);return this.read+=4,e},i.DataBuffer.prototype.getInt=function(e){s(e);var t=0;do{t=(t<<8)+this.data.getInt8(this.read++),e-=8}while(e>0);return t},i.DataBuffer.prototype.getSignedInt=function(e){var t=this.getInt(e),r=2<<e-2;return t>=r&&(t-=r<<1),t},i.DataBuffer.prototype.getBytes=function(e){var t;return e?(e=Math.min(this.length(),e),t=this.data.slice(this.read,this.read+e),this.read+=e):0===e?t="":(t=0===this.read?this.data:this.data.slice(this.read),this.clear()),t},i.DataBuffer.prototype.bytes=function(e){return void 0===e?this.data.slice(this.read):this.data.slice(this.read,this.read+e)},i.DataBuffer.prototype.at=function(e){return this.data.getUint8(this.read+e)},i.DataBuffer.prototype.setAt=function(e,t){return this.data.setUint8(e,t),this},i.DataBuffer.prototype.last=function(){return this.data.getUint8(this.write-1)},i.DataBuffer.prototype.copy=function(){return new i.DataBuffer(this)},i.DataBuffer.prototype.compact=function(){if(this.read>0){var e=new Uint8Array(this.data.buffer,this.read),t=new Uint8Array(e.byteLength);t.set(e),this.data=new DataView(t),this.write-=this.read,this.read=0}return this},i.DataBuffer.prototype.clear=function(){return this.data=new DataView(new ArrayBuffer(0)),this.read=this.write=0,this},i.DataBuffer.prototype.truncate=function(e){return this.write=Math.max(0,this.length()-e),this.read=Math.min(this.read,this.write),this},i.DataBuffer.prototype.toHex=function(){for(var e="",t=this.read;t<this.data.byteLength;++t){var r=this.data.getUint8(t);r<16&&(e+="0"),e+=r.toString(16)}return e},i.DataBuffer.prototype.toString=function(e){var t=new Uint8Array(this.data,this.read,this.length());if("binary"===(e=e||"utf8")||"raw"===e)return i.binary.raw.encode(t);if("hex"===e)return i.binary.hex.encode(t);if("base64"===e)return i.binary.base64.encode(t);if("utf8"===e)return i.text.utf8.decode(t);if("utf16"===e)return i.text.utf16.decode(t);throw new Error("Invalid encoding: "+e)},i.createBuffer=function(e,t){return t=t||"raw",void 0!==e&&"utf8"===t&&(e=i.encodeUtf8(e)),new i.ByteBuffer(e)},i.fillString=function(e,t){for(var r="";t>0;)1&t&&(r+=e),(t>>>=1)>0&&(e+=e);return r},i.xorBytes=function(e,t,r){for(var a="",n="",i="",s=0,o=0;r>0;--r,++s)n=e.charCodeAt(s)^t.charCodeAt(s),o>=10&&(a+=i,i="",o=0),i+=String.fromCharCode(n),++o;return a+=i},i.hexToBytes=function(e){var t="",r=0;for(!0&e.length&&(r=1,t+=String.fromCharCode(parseInt(e[0],16)));r<e.length;r+=2)t+=String.fromCharCode(parseInt(e.substr(r,2),16));return t},i.bytesToHex=function(e){return i.createBuffer(e).toHex()},i.int32ToBytes=function(e){return String.fromCharCode(e>>24&255)+String.fromCharCode(e>>16&255)+String.fromCharCode(e>>8&255)+String.fromCharCode(255&e)};var c="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",u=[62,-1,-1,-1,63,52,53,54,55,56,57,58,59,60,61,-1,-1,-1,64,-1,-1,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25,-1,-1,-1,-1,-1,-1,26,27,28,29,30,31,32,33,34,35,36,37,38,39,40,41,42,43,44,45,46,47,48,49,50,51],l="123456789ABCDEFGHJKLMNPQRSTUVWXYZabcdefghijkmnopqrstuvwxyz";i.encode64=function(e,t){for(var r,a,n,i="",s="",o=0;o<e.length;)r=e.charCodeAt(o++),a=e.charCodeAt(o++),n=e.charCodeAt(o++),i+=c.charAt(r>>2),i+=c.charAt((3&r)<<4|a>>4),isNaN(a)?i+="==":(i+=c.charAt((15&a)<<2|n>>6),i+=isNaN(n)?"=":c.charAt(63&n)),t&&i.length>t&&(s+=i.substr(0,t)+"\r\n",i=i.substr(t));return s+=i},i.decode64=function(e){e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var t,r,a,n,i="",s=0;s<e.length;)t=u[e.charCodeAt(s++)-43],r=u[e.charCodeAt(s++)-43],a=u[e.charCodeAt(s++)-43],n=u[e.charCodeAt(s++)-43],i+=String.fromCharCode(t<<2|r>>4),64!==a&&(i+=String.fromCharCode((15&r)<<4|a>>2),64!==n&&(i+=String.fromCharCode((3&a)<<6|n)));return i},i.encodeUtf8=function(e){return unescape(encodeURIComponent(e))},i.decodeUtf8=function(e){return decodeURIComponent(escape(e))},i.binary={raw:{},hex:{},base64:{},base58:{},baseN:{encode:n.encode,decode:n.decode}},i.binary.raw.encode=function(e){return String.fromCharCode.apply(null,e)},i.binary.raw.decode=function(e,t,r){var a=t;a||(a=new Uint8Array(e.length));for(var n=r=r||0,i=0;i<e.length;++i)a[n++]=e.charCodeAt(i);return t?n-r:a},i.binary.hex.encode=i.bytesToHex,i.binary.hex.decode=function(e,t,r){var a=t;a||(a=new Uint8Array(Math.ceil(e.length/2)));var n=0,i=r=r||0;for(1&e.length&&(n=1,a[i++]=parseInt(e[0],16));n<e.length;n+=2)a[i++]=parseInt(e.substr(n,2),16);return t?i-r:a},i.binary.base64.encode=function(e,t){for(var r,a,n,i="",s="",o=0;o<e.byteLength;)r=e[o++],a=e[o++],n=e[o++],i+=c.charAt(r>>2),i+=c.charAt((3&r)<<4|a>>4),isNaN(a)?i+="==":(i+=c.charAt((15&a)<<2|n>>6),i+=isNaN(n)?"=":c.charAt(63&n)),t&&i.length>t&&(s+=i.substr(0,t)+"\r\n",i=i.substr(t));return s+=i},i.binary.base64.decode=function(e,t,r){var a,n,i,s,o=t;o||(o=new Uint8Array(3*Math.ceil(e.length/4))),e=e.replace(/[^A-Za-z0-9\+\/\=]/g,"");for(var c=0,l=r=r||0;c<e.length;)a=u[e.charCodeAt(c++)-43],n=u[e.charCodeAt(c++)-43],i=u[e.charCodeAt(c++)-43],s=u[e.charCodeAt(c++)-43],o[l++]=a<<2|n>>4,64!==i&&(o[l++]=(15&n)<<4|i>>2,64!==s&&(o[l++]=(3&i)<<6|s));return t?l-r:o.subarray(0,l)},i.binary.base58.encode=function(e,t){return i.binary.baseN.encode(e,l,t)},i.binary.base58.decode=function(e,t){return i.binary.baseN.decode(e,l,t)},i.text={utf8:{},utf16:{}},i.text.utf8.encode=function(e,t,r){e=i.encodeUtf8(e);var a=t;a||(a=new Uint8Array(e.length));for(var n=r=r||0,s=0;s<e.length;++s)a[n++]=e.charCodeAt(s);return t?n-r:a},i.text.utf8.decode=function(e){return i.decodeUtf8(String.fromCharCode.apply(null,e))},i.text.utf16.encode=function(e,t,r){var a=t;a||(a=new Uint8Array(2*e.length));for(var n=new Uint16Array(a.buffer),i=r=r||0,s=r,o=0;o<e.length;++o)n[s++]=e.charCodeAt(o),i+=2;return t?i-r:a},i.text.utf16.decode=function(e){return String.fromCharCode.apply(null,new Uint16Array(e.buffer))},i.deflate=function(e,t,r){if(t=i.decode64(e.deflate(i.encode64(t)).rval),r){var a=2;32&t.charCodeAt(1)&&(a=6),t=t.substring(a,t.length-4)}return t},i.inflate=function(e,t,r){var a=e.inflate(i.encode64(t)).rval;return null===a?null:i.decode64(a)};var p=function(e,t,r){if(!e)throw new Error("WebStorage not available.");var a;if(null===r?a=e.removeItem(t):(r=i.encode64(JSON.stringify(r)),a=e.setItem(t,r)),void 0!==a&&!0!==a.rval){var n=new Error(a.error.message);throw n.id=a.error.id,n.name=a.error.name,n}},f=function(e,t){if(!e)throw new Error("WebStorage not available.");var r=e.getItem(t);if(e.init)if(null===r.rval){if(r.error){var a=new Error(r.error.message);throw a.id=r.error.id,a.name=r.error.name,a}r=null}else r=r.rval;return null!==r&&(r=JSON.parse(i.decode64(r))),r},h=function(e,t,r,a){var n=f(e,t);null===n&&(n={}),n[r]=a,p(e,t,n)},d=function(e,t,r){var a=f(e,t);return null!==a&&(a=r in a?a[r]:null),a},y=function(e,t,r){var a=f(e,t);if(null!==a&&r in a){delete a[r];var n=!0;for(var i in a){n=!1;break}n&&(a=null),p(e,t,a)}},g=function(e,t){p(e,t,null)},m=function(e,t,r){var a,n=null;void 0===r&&(r=["web","flash"]);var i=!1,s=null;for(var o in r){a=r[o];try{if("flash"===a||"both"===a){if(null===t[0])throw new Error("Flash local storage not available.");n=e.apply(this,t),i="flash"===a}"web"!==a&&"both"!==a||(t[0]=localStorage,n=e.apply(this,t),i=!0)}catch(e){s=e}if(i)break}if(!i)throw s;return n};i.setItem=function(e,t,r,a,n){m(h,arguments,n)},i.getItem=function(e,t,r,a){return m(d,arguments,a)},i.removeItem=function(e,t,r,a){m(y,arguments,a)},i.clearItems=function(e,t,r){m(g,arguments,r)},i.parseUrl=function(e){var t=/^(https?):\/\/([^:&^\/]*):?(\d*)(.*)\$/g;t.lastIndex=0;var r=t.exec(e),a=null===r?null:{full:e,scheme:r[1],host:r[2],port:r[3],path:r[4]};return a&&(a.fullHost=a.host,a.port?(80!==a.port&&"http"===a.scheme||443!==a.port&&"https"===a.scheme)&&(a.fullHost+=":"+a.port):"http"===a.scheme?a.port=80:"https"===a.scheme&&(a.port=443),a.full=a.scheme+"://"+a.fullHost),a};var v=null;i.getQueryVariables=function(e){var t,r=function(e){for(var t={},r=e.split("&"),a=0;a<r.length;a++){var n,i,s=r[a].indexOf("=");s>0?(n=r[a].substring(0,s),i=r[a].substring(s+1)):(n=r[a],i=null),n in t||(t[n]=[]),n in Object.prototype||null===i||t[n].push(unescape(i))}return t};return void 0===e?(null===v&&(v="undefined"!=typeof window&&window.location&&window.location.search?r(window.location.search.substring(1)):{}),t=v):t=r(e),t},i.parseFragment=function(e){var t=e,r="",a=e.indexOf("?");a>0&&(t=e.substring(0,a),r=e.substring(a+1));var n=t.split("/");return n.length>0&&""===n[0]&&n.shift(),{pathString:t,queryString:r,path:n,query:""===r?{}:i.getQueryVariables(r)}},i.makeRequest=function(e){var t=i.parseFragment(e),r={path:t.pathString,query:t.queryString,getPath:function(e){return void 0===e?t.path:t.path[e]},getQuery:function(e,r){var a;return void 0===e?a=t.query:(a=t.query[e])&&void 0!==r&&(a=a[r]),a},getQueryLast:function(e,t){var a=r.getQuery(e);return a?a[a.length-1]:t}};return r},i.makeLink=function(e,t,r){e=jQuery.isArray(e)?e.join("/"):e;var a=jQuery.param(t||{});return r=r||"",e+(a.length>0?"?"+a:"")+(r.length>0?"#"+r:"")},i.isEmpty=function(e){for(var t in e)if(e.hasOwnProperty(t))return!1;return!0},i.format=function(e){for(var t,r,a=/%./g,n=0,i=[],s=0;t=a.exec(e);){(r=e.substring(s,a.lastIndex-2)).length>0&&i.push(r),s=a.lastIndex;var o=t[0][1];switch(o){case"s":case"o":n<arguments.length?i.push(arguments[1+n++]):i.push("<?>");break;case"%":i.push("%");break;default:i.push("<%"+o+"?>")}}return i.push(e.substring(s)),i.join("")},i.formatNumber=function(e,t,r,a){var n=e,i=isNaN(t=Math.abs(t))?2:t,s=void 0===r?",":r,o=void 0===a?".":a,c=n<0?"-":"",u=parseInt(n=Math.abs(+n||0).toFixed(i),10)+"",l=u.length>3?u.length%3:0;return c+(l?u.substr(0,l)+o:"")+u.substr(l).replace(/(\d{3})(?=\d)/g,"\$1"+o)+(i?s+Math.abs(n-u).toFixed(i).slice(2):"")},i.formatSize=function(e){return e=e>=1073741824?i.formatNumber(e/1073741824,2,".","")+" GiB":e>=1048576?i.formatNumber(e/1048576,2,".","")+" MiB":e>=1024?i.formatNumber(e/1024,0)+" KiB":i.formatNumber(e,0)+" bytes"},i.bytesFromIP=function(e){return-1!==e.indexOf(".")?i.bytesFromIPv4(e):-1!==e.indexOf(":")?i.bytesFromIPv6(e):null},i.bytesFromIPv4=function(e){if(4!==(e=e.split(".")).length)return null;for(var t=i.createBuffer(),r=0;r<e.length;++r){var a=parseInt(e[r],10);if(isNaN(a))return null;t.putByte(a)}return t.getBytes()},i.bytesFromIPv6=function(e){for(var t=0,r=2*(8-(e=e.split(":").filter((function(e){return 0===e.length&&++t,!0}))).length+t),a=i.createBuffer(),n=0;n<8;++n)if(e[n]&&0!==e[n].length){var s=i.hexToBytes(e[n]);s.length<2&&a.putByte(0),a.putBytes(s)}else a.fillWithByte(0,r),r=0;return a.getBytes()},i.bytesToIP=function(e){return 4===e.length?i.bytesToIPv4(e):16===e.length?i.bytesToIPv6(e):null},i.bytesToIPv4=function(e){if(4!==e.length)return null;for(var t=[],r=0;r<e.length;++r)t.push(e.charCodeAt(r));return t.join(".")},i.bytesToIPv6=function(e){if(16!==e.length)return null;for(var t=[],r=[],a=0,n=0;n<e.length;n+=2){for(var s=i.bytesToHex(e[n]+e[n+1]);"0"===s[0]&&"0"!==s;)s=s.substr(1);if("0"===s){var o=r[r.length-1],c=t.length;o&&c===o.end+1?(o.end=c,o.end-o.start>r[a].end-r[a].start&&(a=r.length-1)):r.push({start:c,end:c})}t.push(s)}if(r.length>0){var u=r[a];u.end-u.start>0&&(t.splice(u.start,u.end-u.start+1,""),0===u.start&&t.unshift(""),7===u.end&&t.push(""))}return t.join(":")},i.estimateCores=function(e,t){if("function"==typeof e&&(t=e,e={}),e=e||{},"cores"in i&&!e.update)return t(null,i.cores);if("undefined"!=typeof navigator&&"hardwareConcurrency"in navigator&&navigator.hardwareConcurrency>0)return i.cores=navigator.hardwareConcurrency,t(null,i.cores);if("undefined"==typeof Worker)return i.cores=1,t(null,i.cores);if("undefined"==typeof Blob)return i.cores=2,t(null,i.cores);var r=URL.createObjectURL(new Blob(["(",function(){self.addEventListener("message",(function(e){for(var t=Date.now(),r=t+4;Date.now()<r;);self.postMessage({st:t,et:r})}))}.toString(),")()"],{type:"application/javascript"}));!function e(a,n,s){if(0===n){var o=Math.floor(a.reduce((function(e,t){return e+t}),0)/a.length);return i.cores=Math.max(1,o),URL.revokeObjectURL(r),t(null,i.cores)}!function(e,t){for(var a=[],n=[],i=0;i<e;++i){var s=new Worker(r);s.addEventListener("message",(function(r){if(n.push(r.data),n.length===e){for(var i=0;i<e;++i)a[i].terminate();t(null,n)}})),a.push(s)}for(i=0;i<e;++i)a[i].postMessage(i)}(s,(function(t,r){a.push(function(e,t){for(var r=[],a=0;a<e;++a)for(var n=t[a],i=r[a]=[],s=0;s<e;++s)if(a!==s){var o=t[s];(n.st>o.st&&n.st<o.et||o.st>n.st&&o.st<n.et)&&i.push(s)}return r.reduce((function(e,t){return Math.max(e,t.length)}),0)}(s,r)),e(a,n-1,s)}))}([],5,16)}}).call(this,r(36))},function(e,t,r){var a=r(0);r(5),r(23),r(24),r(1),a.random&&a.random.getBytes?e.exports=a.random:function(t){var r={},n=new Array(4),i=a.util.createBuffer();function s(){var e=a.prng.create(r);return e.getBytes=function(t,r){return e.generate(t,r)},e.getBytesSync=function(t){return e.generate(t)},e}r.formatKey=function(e){var t=a.util.createBuffer(e);return(e=new Array(4))[0]=t.getInt32(),e[1]=t.getInt32(),e[2]=t.getInt32(),e[3]=t.getInt32(),a.aes._expandKey(e,!1)},r.formatSeed=function(e){var t=a.util.createBuffer(e);return(e=new Array(4))[0]=t.getInt32(),e[1]=t.getInt32(),e[2]=t.getInt32(),e[3]=t.getInt32(),e},r.cipher=function(e,t){return a.aes._updateBlock(e,t,n,!1),i.putInt32(n[0]),i.putInt32(n[1]),i.putInt32(n[2]),i.putInt32(n[3]),i.getBytes()},r.increment=function(e){return++e[3],e},r.md=a.md.sha256;var o=s(),c=null,u=a.util.globalScope,l=u.crypto||u.msCrypto;if(l&&l.getRandomValues&&(c=function(e){return l.getRandomValues(e)}),a.options.usePureJavaScript||!a.util.isNodejs&&!c){if("undefined"==typeof window||window.document,o.collectInt(+new Date,32),"undefined"!=typeof navigator){var p="";for(var f in navigator)try{"string"==typeof navigator[f]&&(p+=navigator[f])}catch(e){}o.collect(p),p=null}t&&(t().mousemove((function(e){o.collectInt(e.clientX,16),o.collectInt(e.clientY,16)})),t().keypress((function(e){o.collectInt(e.charCode,8)})))}if(a.random)for(var f in o)a.random[f]=o[f];else a.random=o;a.random.createInstance=s,e.exports=a.random}("undefined"!=typeof jQuery?jQuery:null)},function(e,t,r){var a=r(0);r(1),r(6);var n=e.exports=a.asn1=a.asn1||{};function i(e,t,r){if(r>t){var a=new Error("Too few bytes to parse DER.");throw a.available=e.length(),a.remaining=t,a.requested=r,a}}n.Class={UNIVERSAL:0,APPLICATION:64,CONTEXT_SPECIFIC:128,PRIVATE:192},n.Type={NONE:0,BOOLEAN:1,INTEGER:2,BITSTRING:3,OCTETSTRING:4,NULL:5,OID:6,ODESC:7,EXTERNAL:8,REAL:9,ENUMERATED:10,EMBEDDED:11,UTF8:12,ROID:13,SEQUENCE:16,SET:17,PRINTABLESTRING:19,IA5STRING:22,UTCTIME:23,GENERALIZEDTIME:24,BMPSTRING:30},n.create=function(e,t,r,i,s){if(a.util.isArray(i)){for(var o=[],c=0;c<i.length;++c)void 0!==i[c]&&o.push(i[c]);i=o}var u={tagClass:e,type:t,constructed:r,composed:r||a.util.isArray(i),value:i};return s&&"bitStringContents"in s&&(u.bitStringContents=s.bitStringContents,u.original=n.copy(u)),u},n.copy=function(e,t){var r;if(a.util.isArray(e)){r=[];for(var i=0;i<e.length;++i)r.push(n.copy(e[i],t));return r}return"string"==typeof e?e:(r={tagClass:e.tagClass,type:e.type,constructed:e.constructed,composed:e.composed,value:n.copy(e.value,t)},t&&!t.excludeBitStringContents&&(r.bitStringContents=e.bitStringContents),r)},n.equals=function(e,t,r){if(a.util.isArray(e)){if(!a.util.isArray(t))return!1;if(e.length!==t.length)return!1;for(var i=0;i<e.length;++i)if(!n.equals(e[i],t[i]))return!1;return!0}if(typeof e!=typeof t)return!1;if("string"==typeof e)return e===t;var s=e.tagClass===t.tagClass&&e.type===t.type&&e.constructed===t.constructed&&e.composed===t.composed&&n.equals(e.value,t.value);return r&&r.includeBitStringContents&&(s=s&&e.bitStringContents===t.bitStringContents),s},n.getBerValueLength=function(e){var t=e.getByte();if(128!==t)return 128&t?e.getInt((127&t)<<3):t};n.fromDer=function(e,t){return void 0===t&&(t={strict:!0,decodeBitStrings:!0}),"boolean"==typeof t&&(t={strict:t,decodeBitStrings:!0}),"strict"in t||(t.strict=!0),"decodeBitStrings"in t||(t.decodeBitStrings=!0),"string"==typeof e&&(e=a.util.createBuffer(e)),function e(t,r,a,s){var o;i(t,r,2);var c=t.getByte();r--;var u=192&c,l=31&c;o=t.length();var p,f,h=function(e,t){var r=e.getByte();if(t--,128!==r){var a;if(128&r){var n=127&r;i(e,t,n),a=e.getInt(n<<3)}else a=r;if(a<0)throw new Error("Negative length: "+a);return a}}(t,r);if(r-=o-t.length(),void 0!==h&&h>r){if(s.strict){var d=new Error("Too few bytes to read ASN.1 value.");throw d.available=t.length(),d.remaining=r,d.requested=h,d}h=r}var y=32==(32&c);if(y)if(p=[],void 0===h)for(;;){if(i(t,r,2),t.bytes(2)===String.fromCharCode(0,0)){t.getBytes(2),r-=2;break}o=t.length(),p.push(e(t,r,a+1,s)),r-=o-t.length()}else for(;h>0;)o=t.length(),p.push(e(t,h,a+1,s)),r-=o-t.length(),h-=o-t.length();void 0===p&&u===n.Class.UNIVERSAL&&l===n.Type.BITSTRING&&(f=t.bytes(h));if(void 0===p&&s.decodeBitStrings&&u===n.Class.UNIVERSAL&&l===n.Type.BITSTRING&&h>1){var g=t.read,m=r,v=0;if(l===n.Type.BITSTRING&&(i(t,r,1),v=t.getByte(),r--),0===v)try{o=t.length();var C={verbose:s.verbose,strict:!0,decodeBitStrings:!0},E=e(t,r,a+1,C),S=o-t.length();r-=S,l==n.Type.BITSTRING&&S++;var T=E.tagClass;S!==h||T!==n.Class.UNIVERSAL&&T!==n.Class.CONTEXT_SPECIFIC||(p=[E])}catch(e){}void 0===p&&(t.read=g,r=m)}if(void 0===p){if(void 0===h){if(s.strict)throw new Error("Non-constructed ASN.1 object of indefinite length.");h=r}if(l===n.Type.BMPSTRING)for(p="";h>0;h-=2)i(t,r,2),p+=String.fromCharCode(t.getInt16()),r-=2;else p=t.getBytes(h)}var I=void 0===f?null:{bitStringContents:f};return n.create(u,l,y,p,I)}(e,e.length(),0,t)},n.toDer=function(e){var t=a.util.createBuffer(),r=e.tagClass|e.type,i=a.util.createBuffer(),s=!1;if("bitStringContents"in e&&(s=!0,e.original&&(s=n.equals(e,e.original))),s)i.putBytes(e.bitStringContents);else if(e.composed){e.constructed?r|=32:i.putByte(0);for(var o=0;o<e.value.length;++o)void 0!==e.value[o]&&i.putBuffer(n.toDer(e.value[o]))}else if(e.type===n.Type.BMPSTRING)for(o=0;o<e.value.length;++o)i.putInt16(e.value.charCodeAt(o));else e.type===n.Type.INTEGER&&e.value.length>1&&(0===e.value.charCodeAt(0)&&0==(128&e.value.charCodeAt(1))||255===e.value.charCodeAt(0)&&128==(128&e.value.charCodeAt(1)))?i.putBytes(e.value.substr(1)):i.putBytes(e.value);if(t.putByte(r),i.length()<=127)t.putByte(127&i.length());else{var c=i.length(),u="";do{u+=String.fromCharCode(255&c),c>>>=8}while(c>0);t.putByte(128|u.length);for(o=u.length-1;o>=0;--o)t.putByte(u.charCodeAt(o))}return t.putBuffer(i),t},n.oidToDer=function(e){var t,r,n,i,s=e.split("."),o=a.util.createBuffer();o.putByte(40*parseInt(s[0],10)+parseInt(s[1],10));for(var c=2;c<s.length;++c){t=!0,r=[],n=parseInt(s[c],10);do{i=127&n,n>>>=7,t||(i|=128),r.push(i),t=!1}while(n>0);for(var u=r.length-1;u>=0;--u)o.putByte(r[u])}return o},n.derToOid=function(e){var t;"string"==typeof e&&(e=a.util.createBuffer(e));var r=e.getByte();t=Math.floor(r/40)+"."+r%40;for(var n=0;e.length()>0;)n<<=7,128&(r=e.getByte())?n+=127&r:(t+="."+(n+r),n=0);return t},n.utcTimeToDate=function(e){var t=new Date,r=parseInt(e.substr(0,2),10);r=r>=50?1900+r:2e3+r;var a=parseInt(e.substr(2,2),10)-1,n=parseInt(e.substr(4,2),10),i=parseInt(e.substr(6,2),10),s=parseInt(e.substr(8,2),10),o=0;if(e.length>11){var c=e.charAt(10),u=10;"+"!==c&&"-"!==c&&(o=parseInt(e.substr(10,2),10),u+=2)}if(t.setUTCFullYear(r,a,n),t.setUTCHours(i,s,o,0),u&&("+"===(c=e.charAt(u))||"-"===c)){var l=60*parseInt(e.substr(u+1,2),10)+parseInt(e.substr(u+4,2),10);l*=6e4,"+"===c?t.setTime(+t-l):t.setTime(+t+l)}return t},n.generalizedTimeToDate=function(e){var t=new Date,r=parseInt(e.substr(0,4),10),a=parseInt(e.substr(4,2),10)-1,n=parseInt(e.substr(6,2),10),i=parseInt(e.substr(8,2),10),s=parseInt(e.substr(10,2),10),o=parseInt(e.substr(12,2),10),c=0,u=0,l=!1;"Z"===e.charAt(e.length-1)&&(l=!0);var p=e.length-5,f=e.charAt(p);"+"!==f&&"-"!==f||(u=60*parseInt(e.substr(p+1,2),10)+parseInt(e.substr(p+4,2),10),u*=6e4,"+"===f&&(u*=-1),l=!0);return"."===e.charAt(14)&&(c=1e3*parseFloat(e.substr(14),10)),l?(t.setUTCFullYear(r,a,n),t.setUTCHours(i,s,o,c),t.setTime(+t+u)):(t.setFullYear(r,a,n),t.setHours(i,s,o,c)),t},n.dateToUtcTime=function(e){if("string"==typeof e)return e;var t="",r=[];r.push((""+e.getUTCFullYear()).substr(2)),r.push(""+(e.getUTCMonth()+1)),r.push(""+e.getUTCDate()),r.push(""+e.getUTCHours()),r.push(""+e.getUTCMinutes()),r.push(""+e.getUTCSeconds());for(var a=0;a<r.length;++a)r[a].length<2&&(t+="0"),t+=r[a];return t+="Z"},n.dateToGeneralizedTime=function(e){if("string"==typeof e)return e;var t="",r=[];r.push(""+e.getUTCFullYear()),r.push(""+(e.getUTCMonth()+1)),r.push(""+e.getUTCDate()),r.push(""+e.getUTCHours()),r.push(""+e.getUTCMinutes()),r.push(""+e.getUTCSeconds());for(var a=0;a<r.length;++a)r[a].length<2&&(t+="0"),t+=r[a];return t+="Z"},n.integerToDer=function(e){var t=a.util.createBuffer();if(e>=-128&&e<128)return t.putSignedInt(e,8);if(e>=-32768&&e<32768)return t.putSignedInt(e,16);if(e>=-8388608&&e<8388608)return t.putSignedInt(e,24);if(e>=-2147483648&&e<2147483648)return t.putSignedInt(e,32);var r=new Error("Integer too large; max is 32-bits.");throw r.integer=e,r},n.derToInteger=function(e){"string"==typeof e&&(e=a.util.createBuffer(e));var t=8*e.length();if(t>32)throw new Error("Integer too large; max is 32-bits.");return e.getSignedInt(t)},n.validate=function(e,t,r,i){var s=!1;if(e.tagClass!==t.tagClass&&void 0!==t.tagClass||e.type!==t.type&&void 0!==t.type)i&&(e.tagClass!==t.tagClass&&i.push("["+t.name+'] Expected tag class "'+t.tagClass+'", got "'+e.tagClass+'"'),e.type!==t.type&&i.push("["+t.name+'] Expected type "'+t.type+'", got "'+e.type+'"'));else if(e.constructed===t.constructed||void 0===t.constructed){if(s=!0,t.value&&a.util.isArray(t.value))for(var o=0,c=0;s&&c<t.value.length;++c)s=t.value[c].optional||!1,e.value[o]&&((s=n.validate(e.value[o],t.value[c],r,i))?++o:t.value[c].optional&&(s=!0)),!s&&i&&i.push("["+t.name+'] Tag class "'+t.tagClass+'", type "'+t.type+'" expected value length "'+t.value.length+'", got "'+e.value.length+'"');if(s&&r)if(t.capture&&(r[t.capture]=e.value),t.captureAsn1&&(r[t.captureAsn1]=e),t.captureBitStringContents&&"bitStringContents"in e&&(r[t.captureBitStringContents]=e.bitStringContents),t.captureBitStringValue&&"bitStringContents"in e)if(e.bitStringContents.length<2)r[t.captureBitStringValue]="";else{if(0!==e.bitStringContents.charCodeAt(0))throw new Error("captureBitStringValue only supported for zero unused bits");r[t.captureBitStringValue]=e.bitStringContents.slice(1)}}else i&&i.push("["+t.name+'] Expected constructed "'+t.constructed+'", got "'+e.constructed+'"');return s};var s=/[^\\u0000-\\u00ff]/;n.prettyPrint=function(e,t,r){var i="";r=r||2,(t=t||0)>0&&(i+="\n");for(var o="",c=0;c<t*r;++c)o+=" ";switch(i+=o+"Tag: ",e.tagClass){case n.Class.UNIVERSAL:i+="Universal:";break;case n.Class.APPLICATION:i+="Application:";break;case n.Class.CONTEXT_SPECIFIC:i+="Context-Specific:";break;case n.Class.PRIVATE:i+="Private:"}if(e.tagClass===n.Class.UNIVERSAL)switch(i+=e.type,e.type){case n.Type.NONE:i+=" (None)";break;case n.Type.BOOLEAN:i+=" (Boolean)";break;case n.Type.INTEGER:i+=" (Integer)";break;case n.Type.BITSTRING:i+=" (Bit string)";break;case n.Type.OCTETSTRING:i+=" (Octet string)";break;case n.Type.NULL:i+=" (Null)";break;case n.Type.OID:i+=" (Object Identifier)";break;case n.Type.ODESC:i+=" (Object Descriptor)";break;case n.Type.EXTERNAL:i+=" (External or Instance of)";break;case n.Type.REAL:i+=" (Real)";break;case n.Type.ENUMERATED:i+=" (Enumerated)";break;case n.Type.EMBEDDED:i+=" (Embedded PDV)";break;case n.Type.UTF8:i+=" (UTF8)";break;case n.Type.ROID:i+=" (Relative Object Identifier)";break;case n.Type.SEQUENCE:i+=" (Sequence)";break;case n.Type.SET:i+=" (Set)";break;case n.Type.PRINTABLESTRING:i+=" (Printable String)";break;case n.Type.IA5String:i+=" (IA5String (ASCII))";break;case n.Type.UTCTIME:i+=" (UTC time)";break;case n.Type.GENERALIZEDTIME:i+=" (Generalized time)";break;case n.Type.BMPSTRING:i+=" (BMP String)"}else i+=e.type;if(i+="\n",i+=o+"Constructed: "+e.constructed+"\n",e.composed){var u=0,l="";for(c=0;c<e.value.length;++c)void 0!==e.value[c]&&(u+=1,l+=n.prettyPrint(e.value[c],t+1,r),c+1<e.value.length&&(l+=","));i+=o+"Sub values: "+u+l}else{if(i+=o+"Value: ",e.type===n.Type.OID){var p=n.derToOid(e.value);i+=p,a.pki&&a.pki.oids&&p in a.pki.oids&&(i+=" ("+a.pki.oids[p]+") ")}if(e.type===n.Type.INTEGER)try{i+=n.derToInteger(e.value)}catch(t){i+="0x"+a.util.bytesToHex(e.value)}else if(e.type===n.Type.BITSTRING){if(e.value.length>1?i+="0x"+a.util.bytesToHex(e.value.slice(1)):i+="(none)",e.value.length>0){var f=e.value.charCodeAt(0);1==f?i+=" (1 unused bit shown)":f>1&&(i+=" ("+f+" unused bits shown)")}}else e.type===n.Type.OCTETSTRING?(s.test(e.value)||(i+="("+e.value+") "),i+="0x"+a.util.bytesToHex(e.value)):e.type===n.Type.UTF8?i+=a.util.decodeUtf8(e.value):e.type===n.Type.PRINTABLESTRING||e.type===n.Type.IA5String?i+=e.value:s.test(e.value)?i+="0x"+a.util.bytesToHex(e.value):0===e.value.length?i+="[null]":i+=e.value}return i}},function(e,t,r){var a=r(0);e.exports=a.md=a.md||{},a.md.algorithms=a.md.algorithms||{}},function(e,t,r){var a=r(0);function n(e,t){a.cipher.registerAlgorithm(e,(function(){return new a.aes.Algorithm(e,t)}))}r(13),r(19),r(1),e.exports=a.aes=a.aes||{},a.aes.startEncrypting=function(e,t,r,a){var n=d({key:e,output:r,decrypt:!1,mode:a});return n.start(t),n},a.aes.createEncryptionCipher=function(e,t){return d({key:e,output:null,decrypt:!1,mode:t})},a.aes.startDecrypting=function(e,t,r,a){var n=d({key:e,output:r,decrypt:!0,mode:a});return n.start(t),n},a.aes.createDecryptionCipher=function(e,t){return d({key:e,output:null,decrypt:!0,mode:t})},a.aes.Algorithm=function(e,t){l||p();var r=this;r.name=e,r.mode=new t({blockSize:16,cipher:{encrypt:function(e,t){return h(r._w,e,t,!1)},decrypt:function(e,t){return h(r._w,e,t,!0)}}}),r._init=!1},a.aes.Algorithm.prototype.initialize=function(e){if(!this._init){var t,r=e.key;if("string"!=typeof r||16!==r.length&&24!==r.length&&32!==r.length){if(a.util.isArray(r)&&(16===r.length||24===r.length||32===r.length)){t=r,r=a.util.createBuffer();for(var n=0;n<t.length;++n)r.putByte(t[n])}}else r=a.util.createBuffer(r);if(!a.util.isArray(r)){t=r,r=[];var i=t.length();if(16===i||24===i||32===i){i>>>=2;for(n=0;n<i;++n)r.push(t.getInt32())}}if(!a.util.isArray(r)||4!==r.length&&6!==r.length&&8!==r.length)throw new Error("Invalid key parameter.");var s=this.mode.name,o=-1!==["CFB","OFB","CTR","GCM"].indexOf(s);this._w=f(r,e.decrypt&&!o),this._init=!0}},a.aes._expandKey=function(e,t){return l||p(),f(e,t)},a.aes._updateBlock=h,n("AES-ECB",a.cipher.modes.ecb),n("AES-CBC",a.cipher.modes.cbc),n("AES-CFB",a.cipher.modes.cfb),n("AES-OFB",a.cipher.modes.ofb),n("AES-CTR",a.cipher.modes.ctr),n("AES-GCM",a.cipher.modes.gcm);var i,s,o,c,u,l=!1;function p(){l=!0,o=[0,1,2,4,8,16,32,64,128,27,54];for(var e=new Array(256),t=0;t<128;++t)e[t]=t<<1,e[t+128]=t+128<<1^283;i=new Array(256),s=new Array(256),c=new Array(4),u=new Array(4);for(t=0;t<4;++t)c[t]=new Array(256),u[t]=new Array(256);var r,a,n,p,f,h,d,y=0,g=0;for(t=0;t<256;++t){p=(p=g^g<<1^g<<2^g<<3^g<<4)>>8^255&p^99,i[y]=p,s[p]=y,h=(f=e[p])<<24^p<<16^p<<8^p^f,d=((r=e[y])^(a=e[r])^(n=e[a]))<<24^(y^n)<<16^(y^a^n)<<8^y^r^n;for(var m=0;m<4;++m)c[m][y]=h,u[m][p]=d,h=h<<24|h>>>8,d=d<<24|d>>>8;0===y?y=g=1:(y=r^e[e[e[r^n]]],g^=e[e[g]])}}function f(e,t){for(var r,a=e.slice(0),n=1,s=a.length,c=4*(s+6+1),l=s;l<c;++l)r=a[l-1],l%s==0?(r=i[r>>>16&255]<<24^i[r>>>8&255]<<16^i[255&r]<<8^i[r>>>24]^o[n]<<24,n++):s>6&&l%s==4&&(r=i[r>>>24]<<24^i[r>>>16&255]<<16^i[r>>>8&255]<<8^i[255&r]),a[l]=a[l-s]^r;if(t){for(var p,f=u[0],h=u[1],d=u[2],y=u[3],g=a.slice(0),m=(l=0,(c=a.length)-4);l<c;l+=4,m-=4)if(0===l||l===c-4)g[l]=a[m],g[l+1]=a[m+3],g[l+2]=a[m+2],g[l+3]=a[m+1];else for(var v=0;v<4;++v)p=a[m+v],g[l+(3&-v)]=f[i[p>>>24]]^h[i[p>>>16&255]]^d[i[p>>>8&255]]^y[i[255&p]];a=g}return a}function h(e,t,r,a){var n,o,l,p,f,h,d,y,g,m,v,C,E=e.length/4-1;a?(n=u[0],o=u[1],l=u[2],p=u[3],f=s):(n=c[0],o=c[1],l=c[2],p=c[3],f=i),h=t[0]^e[0],d=t[a?3:1]^e[1],y=t[2]^e[2],g=t[a?1:3]^e[3];for(var S=3,T=1;T<E;++T)m=n[h>>>24]^o[d>>>16&255]^l[y>>>8&255]^p[255&g]^e[++S],v=n[d>>>24]^o[y>>>16&255]^l[g>>>8&255]^p[255&h]^e[++S],C=n[y>>>24]^o[g>>>16&255]^l[h>>>8&255]^p[255&d]^e[++S],g=n[g>>>24]^o[h>>>16&255]^l[d>>>8&255]^p[255&y]^e[++S],h=m,d=v,y=C;r[0]=f[h>>>24]<<24^f[d>>>16&255]<<16^f[y>>>8&255]<<8^f[255&g]^e[++S],r[a?3:1]=f[d>>>24]<<24^f[y>>>16&255]<<16^f[g>>>8&255]<<8^f[255&h]^e[++S],r[2]=f[y>>>24]<<24^f[g>>>16&255]<<16^f[h>>>8&255]<<8^f[255&d]^e[++S],r[a?1:3]=f[g>>>24]<<24^f[h>>>16&255]<<16^f[d>>>8&255]<<8^f[255&y]^e[++S]}function d(e){var t,r="AES-"+((e=e||{}).mode||"CBC").toUpperCase(),n=(t=e.decrypt?a.cipher.createDecipher(r,e.key):a.cipher.createCipher(r,e.key)).start;return t.start=function(e,r){var i=null;r instanceof a.util.ByteBuffer&&(i=r,r={}),(r=r||{}).output=i,r.iv=e,n.call(t,r)},t}},function(e,t,r){var a=r(0);a.pki=a.pki||{};var n=e.exports=a.pki.oids=a.oids=a.oids||{};function i(e,t){n[e]=t,n[t]=e}function s(e,t){n[e]=t}i("1.2.840.113549.1.1.1","rsaEncryption"),i("1.2.840.113549.1.1.4","md5WithRSAEncryption"),i("1.2.840.113549.1.1.5","sha1WithRSAEncryption"),i("1.2.840.113549.1.1.7","RSAES-OAEP"),i("1.2.840.113549.1.1.8","mgf1"),i("1.2.840.113549.1.1.9","pSpecified"),i("1.2.840.113549.1.1.10","RSASSA-PSS"),i("1.2.840.113549.1.1.11","sha256WithRSAEncryption"),i("1.2.840.113549.1.1.12","sha384WithRSAEncryption"),i("1.2.840.113549.1.1.13","sha512WithRSAEncryption"),i("1.3.101.112","EdDSA25519"),i("1.2.840.10040.4.3","dsa-with-sha1"),i("1.3.14.3.2.7","desCBC"),i("1.3.14.3.2.26","sha1"),i("2.16.840.1.101.3.4.2.1","sha256"),i("2.16.840.1.101.3.4.2.2","sha384"),i("2.16.840.1.101.3.4.2.3","sha512"),i("1.2.840.113549.2.5","md5"),i("1.2.840.113549.1.7.1","data"),i("1.2.840.113549.1.7.2","signedData"),i("1.2.840.113549.1.7.3","envelopedData"),i("1.2.840.113549.1.7.4","signedAndEnvelopedData"),i("1.2.840.113549.1.7.5","digestedData"),i("1.2.840.113549.1.7.6","encryptedData"),i("1.2.840.113549.1.9.1","emailAddress"),i("1.2.840.113549.1.9.2","unstructuredName"),i("1.2.840.113549.1.9.3","contentType"),i("1.2.840.113549.1.9.4","messageDigest"),i("1.2.840.113549.1.9.5","signingTime"),i("1.2.840.113549.1.9.6","counterSignature"),i("1.2.840.113549.1.9.7","challengePassword"),i("1.2.840.113549.1.9.8","unstructuredAddress"),i("1.2.840.113549.1.9.14","extensionRequest"),i("1.2.840.113549.1.9.20","friendlyName"),i("1.2.840.113549.1.9.21","localKeyId"),i("1.2.840.113549.1.9.22.1","x509Certificate"),i("1.2.840.113549.1.12.10.1.1","keyBag"),i("1.2.840.113549.1.12.10.1.2","pkcs8ShroudedKeyBag"),i("1.2.840.113549.1.12.10.1.3","certBag"),i("1.2.840.113549.1.12.10.1.4","crlBag"),i("1.2.840.113549.1.12.10.1.5","secretBag"),i("1.2.840.113549.1.12.10.1.6","safeContentsBag"),i("1.2.840.113549.1.5.13","pkcs5PBES2"),i("1.2.840.113549.1.5.12","pkcs5PBKDF2"),i("1.2.840.113549.1.12.1.1","pbeWithSHAAnd128BitRC4"),i("1.2.840.113549.1.12.1.2","pbeWithSHAAnd40BitRC4"),i("1.2.840.113549.1.12.1.3","pbeWithSHAAnd3-KeyTripleDES-CBC"),i("1.2.840.113549.1.12.1.4","pbeWithSHAAnd2-KeyTripleDES-CBC"),i("1.2.840.113549.1.12.1.5","pbeWithSHAAnd128BitRC2-CBC"),i("1.2.840.113549.1.12.1.6","pbewithSHAAnd40BitRC2-CBC"),i("1.2.840.113549.2.7","hmacWithSHA1"),i("1.2.840.113549.2.8","hmacWithSHA224"),i("1.2.840.113549.2.9","hmacWithSHA256"),i("1.2.840.113549.2.10","hmacWithSHA384"),i("1.2.840.113549.2.11","hmacWithSHA512"),i("1.2.840.113549.3.7","des-EDE3-CBC"),i("2.16.840.1.101.3.4.1.2","aes128-CBC"),i("2.16.840.1.101.3.4.1.22","aes192-CBC"),i("2.16.840.1.101.3.4.1.42","aes256-CBC"),i("2.5.4.3","commonName"),i("2.5.4.5","serialName"),i("2.5.4.6","countryName"),i("2.5.4.7","localityName"),i("2.5.4.8","stateOrProvinceName"),i("2.5.4.9","streetAddress"),i("2.5.4.10","organizationName"),i("2.5.4.11","organizationalUnitName"),i("2.5.4.13","description"),i("2.5.4.15","businessCategory"),i("2.5.4.17","postalCode"),i("1.3.6.1.4.1.311.60.2.1.2","jurisdictionOfIncorporationStateOrProvinceName"),i("1.3.6.1.4.1.311.60.2.1.3","jurisdictionOfIncorporationCountryName"),i("2.16.840.1.113730.1.1","nsCertType"),i("2.16.840.1.113730.1.13","nsComment"),s("2.5.29.1","authorityKeyIdentifier"),s("2.5.29.2","keyAttributes"),s("2.5.29.3","certificatePolicies"),s("2.5.29.4","keyUsageRestriction"),s("2.5.29.5","policyMapping"),s("2.5.29.6","subtreesConstraint"),s("2.5.29.7","subjectAltName"),s("2.5.29.8","issuerAltName"),s("2.5.29.9","subjectDirectoryAttributes"),s("2.5.29.10","basicConstraints"),s("2.5.29.11","nameConstraints"),s("2.5.29.12","policyConstraints"),s("2.5.29.13","basicConstraints"),i("2.5.29.14","subjectKeyIdentifier"),i("2.5.29.15","keyUsage"),s("2.5.29.16","privateKeyUsagePeriod"),i("2.5.29.17","subjectAltName"),i("2.5.29.18","issuerAltName"),i("2.5.29.19","basicConstraints"),s("2.5.29.20","cRLNumber"),s("2.5.29.21","cRLReason"),s("2.5.29.22","expirationDate"),s("2.5.29.23","instructionCode"),s("2.5.29.24","invalidityDate"),s("2.5.29.25","cRLDistributionPoints"),s("2.5.29.26","issuingDistributionPoint"),s("2.5.29.27","deltaCRLIndicator"),s("2.5.29.28","issuingDistributionPoint"),s("2.5.29.29","certificateIssuer"),s("2.5.29.30","nameConstraints"),i("2.5.29.31","cRLDistributionPoints"),i("2.5.29.32","certificatePolicies"),s("2.5.29.33","policyMappings"),s("2.5.29.34","policyConstraints"),i("2.5.29.35","authorityKeyIdentifier"),s("2.5.29.36","policyConstraints"),i("2.5.29.37","extKeyUsage"),s("2.5.29.46","freshestCRL"),s("2.5.29.54","inhibitAnyPolicy"),i("1.3.6.1.4.1.11129.2.4.2","timestampList"),i("1.3.6.1.5.5.7.1.1","authorityInfoAccess"),i("1.3.6.1.5.5.7.3.1","serverAuth"),i("1.3.6.1.5.5.7.3.2","clientAuth"),i("1.3.6.1.5.5.7.3.3","codeSigning"),i("1.3.6.1.5.5.7.3.4","emailProtection"),i("1.3.6.1.5.5.7.3.8","timeStamping")},function(e,t,r){var a=r(0);r(1);var n=e.exports=a.pem=a.pem||{};function i(e){for(var t=e.name+": ",r=[],a=function(e,t){return" "+t},n=0;n<e.values.length;++n)r.push(e.values[n].replace(/^(\S+\r\n)/,a));t+=r.join(",")+"\r\n";var i=0,s=-1;for(n=0;n<t.length;++n,++i)if(i>65&&-1!==s){var o=t[s];","===o?(++s,t=t.substr(0,s)+"\r\n "+t.substr(s)):t=t.substr(0,s)+"\r\n"+o+t.substr(s+1),i=n-s-1,s=-1,++n}else" "!==t[n]&&"\t"!==t[n]&&","!==t[n]||(s=n);return t}function s(e){return e.replace(/^\s+/,"")}n.encode=function(e,t){t=t||{};var r,n="-----BEGIN "+e.type+"-----\r\n";if(e.procType&&(n+=i(r={name:"Proc-Type",values:[String(e.procType.version),e.procType.type]})),e.contentDomain&&(n+=i(r={name:"Content-Domain",values:[e.contentDomain]})),e.dekInfo&&(r={name:"DEK-Info",values:[e.dekInfo.algorithm]},e.dekInfo.parameters&&r.values.push(e.dekInfo.parameters),n+=i(r)),e.headers)for(var s=0;s<e.headers.length;++s)n+=i(e.headers[s]);return e.procType&&(n+="\r\n"),n+=a.util.encode64(e.body,t.maxline||64)+"\r\n",n+="-----END "+e.type+"-----\r\n"},n.decode=function(e){for(var t,r=[],n=/\s*-----BEGIN ([A-Z0-9- ]+)-----\r?\n?([\x21-\x7e\s]+?(?:\r?\n\r?\n))?([:A-Za-z0-9+\/=\s]+?)-----END \1-----/g,i=/([\x21-\x7e]+):\s*([\x21-\x7e\s^:]+)/,o=/\r?\n/;t=n.exec(e);){var c={type:t[1],procType:null,contentDomain:null,dekInfo:null,headers:[],body:a.util.decode64(t[3])};if(r.push(c),t[2]){for(var u=t[2].split(o),l=0;t&&l<u.length;){for(var p=u[l].replace(/\s+\$/,""),f=l+1;f<u.length;++f){var h=u[f];if(!/\s/.test(h[0]))break;p+=h,l=f}if(t=p.match(i)){for(var d={name:t[1],values:[]},y=t[2].split(","),g=0;g<y.length;++g)d.values.push(s(y[g]));if(c.procType)if(c.contentDomain||"Content-Domain"!==d.name)if(c.dekInfo||"DEK-Info"!==d.name)c.headers.push(d);else{if(0===d.values.length)throw new Error('Invalid PEM formatted message. The "DEK-Info" header must have at least one subfield.');c.dekInfo={algorithm:y[0],parameters:y[1]||null}}else c.contentDomain=y[0]||"";else{if("Proc-Type"!==d.name)throw new Error('Invalid PEM formatted message. The first encapsulated header must be "Proc-Type".');if(2!==d.values.length)throw new Error('Invalid PEM formatted message. The "Proc-Type" header must have two subfields.');c.procType={version:y[0],type:y[1]}}}++l}if("ENCRYPTED"===c.procType&&!c.dekInfo)throw new Error('Invalid PEM formatted message. The "DEK-Info" header must be present if "Proc-Type" is "ENCRYPTED".')}}if(0===r.length)throw new Error("Invalid PEM formatted message.");return r}},function(e,t,r){var a=r(0);r(4),r(1),(e.exports=a.hmac=a.hmac||{}).create=function(){var e=null,t=null,r=null,n=null,i={start:function(i,s){if(null!==i)if("string"==typeof i){if(!((i=i.toLowerCase())in a.md.algorithms))throw new Error('Unknown hash algorithm "'+i+'"');t=a.md.algorithms[i].create()}else t=i;if(null===s)s=e;else{if("string"==typeof s)s=a.util.createBuffer(s);else if(a.util.isArray(s)){var o=s;s=a.util.createBuffer();for(var c=0;c<o.length;++c)s.putByte(o[c])}var u=s.length();u>t.blockLength&&(t.start(),t.update(s.bytes()),s=t.digest()),r=a.util.createBuffer(),n=a.util.createBuffer(),u=s.length();for(c=0;c<u;++c){o=s.at(c);r.putByte(54^o),n.putByte(92^o)}if(u<t.blockLength)for(o=t.blockLength-u,c=0;c<o;++c)r.putByte(54),n.putByte(92);e=s,r=r.bytes(),n=n.bytes()}t.start(),t.update(r)},update:function(e){t.update(e)},getMac:function(){var e=t.digest().bytes();return t.start(),t.update(n),t.update(e),t.digest()}};return i.digest=i.getMac,i}},function(e,t,r){var a=r(0);r(4),r(1);var n=e.exports=a.sha1=a.sha1||{};a.md.sha1=a.md.algorithms.sha1=n,n.create=function(){s||(i=String.fromCharCode(128),i+=a.util.fillString(String.fromCharCode(0),64),s=!0);var e=null,t=a.util.createBuffer(),r=new Array(80),n={algorithm:"sha1",blockLength:64,digestLength:20,messageLength:0,fullMessageLength:null,messageLengthSize:8,start:function(){n.messageLength=0,n.fullMessageLength=n.messageLength64=[];for(var r=n.messageLengthSize/4,i=0;i<r;++i)n.fullMessageLength.push(0);return t=a.util.createBuffer(),e={h0:1732584193,h1:4023233417,h2:2562383102,h3:271733878,h4:3285377520},n}};return n.start(),n.update=function(i,s){"utf8"===s&&(i=a.util.encodeUtf8(i));var c=i.length;n.messageLength+=c,c=[c/4294967296>>>0,c>>>0];for(var u=n.fullMessageLength.length-1;u>=0;--u)n.fullMessageLength[u]+=c[1],c[1]=c[0]+(n.fullMessageLength[u]/4294967296>>>0),n.fullMessageLength[u]=n.fullMessageLength[u]>>>0,c[0]=c[1]/4294967296>>>0;return t.putBytes(i),o(e,r,t),(t.read>2048||0===t.length())&&t.compact(),n},n.digest=function(){var s=a.util.createBuffer();s.putBytes(t.bytes());var c,u=n.fullMessageLength[n.fullMessageLength.length-1]+n.messageLengthSize&n.blockLength-1;s.putBytes(i.substr(0,n.blockLength-u));for(var l=8*n.fullMessageLength[0],p=0;p<n.fullMessageLength.length-1;++p)l+=(c=8*n.fullMessageLength[p+1])/4294967296>>>0,s.putInt32(l>>>0),l=c>>>0;s.putInt32(l);var f={h0:e.h0,h1:e.h1,h2:e.h2,h3:e.h3,h4:e.h4};o(f,r,s);var h=a.util.createBuffer();return h.putInt32(f.h0),h.putInt32(f.h1),h.putInt32(f.h2),h.putInt32(f.h3),h.putInt32(f.h4),h},n};var i=null,s=!1;function o(e,t,r){for(var a,n,i,s,o,c,u,l=r.length();l>=64;){for(n=e.h0,i=e.h1,s=e.h2,o=e.h3,c=e.h4,u=0;u<16;++u)a=r.getInt32(),t[u]=a,a=(n<<5|n>>>27)+(o^i&(s^o))+c+1518500249+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;for(;u<20;++u)a=(a=t[u-3]^t[u-8]^t[u-14]^t[u-16])<<1|a>>>31,t[u]=a,a=(n<<5|n>>>27)+(o^i&(s^o))+c+1518500249+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;for(;u<32;++u)a=(a=t[u-3]^t[u-8]^t[u-14]^t[u-16])<<1|a>>>31,t[u]=a,a=(n<<5|n>>>27)+(i^s^o)+c+1859775393+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;for(;u<40;++u)a=(a=t[u-6]^t[u-16]^t[u-28]^t[u-32])<<2|a>>>30,t[u]=a,a=(n<<5|n>>>27)+(i^s^o)+c+1859775393+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;for(;u<60;++u)a=(a=t[u-6]^t[u-16]^t[u-28]^t[u-32])<<2|a>>>30,t[u]=a,a=(n<<5|n>>>27)+(i&s|o&(i^s))+c+2400959708+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;for(;u<80;++u)a=(a=t[u-6]^t[u-16]^t[u-28]^t[u-32])<<2|a>>>30,t[u]=a,a=(n<<5|n>>>27)+(i^s^o)+c+3395469782+a,c=o,o=s,s=(i<<30|i>>>2)>>>0,i=n,n=a;e.h0=e.h0+n|0,e.h1=e.h1+i|0,e.h2=e.h2+s|0,e.h3=e.h3+o|0,e.h4=e.h4+c|0,l-=64}}},function(e,t,r){var a=r(0);function n(e,t){a.cipher.registerAlgorithm(e,(function(){return new a.des.Algorithm(e,t)}))}r(13),r(19),r(1),e.exports=a.des=a.des||{},a.des.startEncrypting=function(e,t,r,a){var n=d({key:e,output:r,decrypt:!1,mode:a||(null===t?"ECB":"CBC")});return n.start(t),n},a.des.createEncryptionCipher=function(e,t){return d({key:e,output:null,decrypt:!1,mode:t})},a.des.startDecrypting=function(e,t,r,a){var n=d({key:e,output:r,decrypt:!0,mode:a||(null===t?"ECB":"CBC")});return n.start(t),n},a.des.createDecryptionCipher=function(e,t){return d({key:e,output:null,decrypt:!0,mode:t})},a.des.Algorithm=function(e,t){var r=this;r.name=e,r.mode=new t({blockSize:8,cipher:{encrypt:function(e,t){return h(r._keys,e,t,!1)},decrypt:function(e,t){return h(r._keys,e,t,!0)}}}),r._init=!1},a.des.Algorithm.prototype.initialize=function(e){if(!this._init){var t=a.util.createBuffer(e.key);if(0===this.name.indexOf("3DES")&&24!==t.length())throw new Error("Invalid Triple-DES key size: "+8*t.length());this._keys=function(e){for(var t,r=[0,4,536870912,536870916,65536,65540,536936448,536936452,512,516,536871424,536871428,66048,66052,536936960,536936964],a=[0,1,1048576,1048577,67108864,67108865,68157440,68157441,256,257,1048832,1048833,67109120,67109121,68157696,68157697],n=[0,8,2048,2056,16777216,16777224,16779264,16779272,0,8,2048,2056,16777216,16777224,16779264,16779272],i=[0,2097152,134217728,136314880,8192,2105344,134225920,136323072,131072,2228224,134348800,136445952,139264,2236416,134356992,136454144],s=[0,262144,16,262160,0,262144,16,262160,4096,266240,4112,266256,4096,266240,4112,266256],o=[0,1024,32,1056,0,1024,32,1056,33554432,33555456,33554464,33555488,33554432,33555456,33554464,33555488],c=[0,268435456,524288,268959744,2,268435458,524290,268959746,0,268435456,524288,268959744,2,268435458,524290,268959746],u=[0,65536,2048,67584,536870912,536936448,536872960,536938496,131072,196608,133120,198656,537001984,537067520,537004032,537069568],l=[0,262144,0,262144,2,262146,2,262146,33554432,33816576,33554432,33816576,33554434,33816578,33554434,33816578],p=[0,268435456,8,268435464,0,268435456,8,268435464,1024,268436480,1032,268436488,1024,268436480,1032,268436488],f=[0,32,0,32,1048576,1048608,1048576,1048608,8192,8224,8192,8224,1056768,1056800,1056768,1056800],h=[0,16777216,512,16777728,2097152,18874368,2097664,18874880,67108864,83886080,67109376,83886592,69206016,85983232,69206528,85983744],d=[0,4096,134217728,134221824,524288,528384,134742016,134746112,16,4112,134217744,134221840,524304,528400,134742032,134746128],y=[0,4,256,260,0,4,256,260,1,5,257,261,1,5,257,261],g=e.length()>8?3:1,m=[],v=[0,0,1,1,1,1,1,1,0,1,1,1,1,1,1,0],C=0,E=0;E<g;E++){var S=e.getInt32(),T=e.getInt32();S^=(t=252645135&(S>>>4^T))<<4,S^=t=65535&((T^=t)>>>-16^S),S^=(t=858993459&(S>>>2^(T^=t<<-16)))<<2,S^=t=65535&((T^=t)>>>-16^S),S^=(t=1431655765&(S>>>1^(T^=t<<-16)))<<1,S^=t=16711935&((T^=t)>>>8^S),t=(S^=(t=1431655765&(S>>>1^(T^=t<<8)))<<1)<<8|(T^=t)>>>20&240,S=T<<24|T<<8&16711680|T>>>8&65280|T>>>24&240,T=t;for(var I=0;I<v.length;++I){v[I]?(S=S<<2|S>>>26,T=T<<2|T>>>26):(S=S<<1|S>>>27,T=T<<1|T>>>27);var b=r[(S&=-15)>>>28]|a[S>>>24&15]|n[S>>>20&15]|i[S>>>16&15]|s[S>>>12&15]|o[S>>>8&15]|c[S>>>4&15],A=u[(T&=-15)>>>28]|l[T>>>24&15]|p[T>>>20&15]|f[T>>>16&15]|h[T>>>12&15]|d[T>>>8&15]|y[T>>>4&15];t=65535&(A>>>16^b),m[C++]=b^t,m[C++]=A^t<<16}}return m}(t),this._init=!0}},n("DES-ECB",a.cipher.modes.ecb),n("DES-CBC",a.cipher.modes.cbc),n("DES-CFB",a.cipher.modes.cfb),n("DES-OFB",a.cipher.modes.ofb),n("DES-CTR",a.cipher.modes.ctr),n("3DES-ECB",a.cipher.modes.ecb),n("3DES-CBC",a.cipher.modes.cbc),n("3DES-CFB",a.cipher.modes.cfb),n("3DES-OFB",a.cipher.modes.ofb),n("3DES-CTR",a.cipher.modes.ctr);var i=[16843776,0,65536,16843780,16842756,66564,4,65536,1024,16843776,16843780,1024,16778244,16842756,16777216,4,1028,16778240,16778240,66560,66560,16842752,16842752,16778244,65540,16777220,16777220,65540,0,1028,66564,16777216,65536,16843780,4,16842752,16843776,16777216,16777216,1024,16842756,65536,66560,16777220,1024,4,16778244,66564,16843780,65540,16842752,16778244,16777220,1028,66564,16843776,1028,16778240,16778240,0,65540,66560,0,16842756],s=[-2146402272,-2147450880,32768,1081376,1048576,32,-2146435040,-2147450848,-2147483616,-2146402272,-2146402304,-2147483648,-2147450880,1048576,32,-2146435040,1081344,1048608,-2147450848,0,-2147483648,32768,1081376,-2146435072,1048608,-2147483616,0,1081344,32800,-2146402304,-2146435072,32800,0,1081376,-2146435040,1048576,-2147450848,-2146435072,-2146402304,32768,-2146435072,-2147450880,32,-2146402272,1081376,32,32768,-2147483648,32800,-2146402304,1048576,-2147483616,1048608,-2147450848,-2147483616,1048608,1081344,0,-2147450880,32800,-2147483648,-2146435040,-2146402272,1081344],o=[520,134349312,0,134348808,134218240,0,131592,134218240,131080,134217736,134217736,131072,134349320,131080,134348800,520,134217728,8,134349312,512,131584,134348800,134348808,131592,134218248,131584,131072,134218248,8,134349320,512,134217728,134349312,134217728,131080,520,131072,134349312,134218240,0,512,131080,134349320,134218240,134217736,512,0,134348808,134218248,131072,134217728,134349320,8,131592,131584,134217736,134348800,134218248,520,134348800,131592,8,134348808,131584],c=[8396801,8321,8321,128,8396928,8388737,8388609,8193,0,8396800,8396800,8396929,129,0,8388736,8388609,1,8192,8388608,8396801,128,8388608,8193,8320,8388737,1,8320,8388736,8192,8396928,8396929,129,8388736,8388609,8396800,8396929,129,0,0,8396800,8320,8388736,8388737,1,8396801,8321,8321,128,8396929,129,1,8192,8388609,8193,8396928,8388737,8193,8320,8388608,8396801,128,8388608,8192,8396928],u=[256,34078976,34078720,1107296512,524288,256,1073741824,34078720,1074266368,524288,33554688,1074266368,1107296512,1107820544,524544,1073741824,33554432,1074266112,1074266112,0,1073742080,1107820800,1107820800,33554688,1107820544,1073742080,0,1107296256,34078976,33554432,1107296256,524544,524288,1107296512,256,33554432,1073741824,34078720,1107296512,1074266368,33554688,1073741824,1107820544,34078976,1074266368,256,33554432,1107820544,1107820800,524544,1107296256,1107820800,34078720,0,1074266112,1107296256,524544,33554688,1073742080,524288,0,1074266112,34078976,1073742080],l=[536870928,541065216,16384,541081616,541065216,16,541081616,4194304,536887296,4210704,4194304,536870928,4194320,536887296,536870912,16400,0,4194320,536887312,16384,4210688,536887312,16,541065232,541065232,0,4210704,541081600,16400,4210688,541081600,536870912,536887296,16,541065232,4210688,541081616,4194304,16400,536870928,4194304,536887296,536870912,16400,536870928,541081616,4210688,541065216,4210704,541081600,0,541065232,16,16384,541065216,4210704,16384,4194320,536887312,0,541081600,536870912,4194320,536887312],p=[2097152,69206018,67110914,0,2048,67110914,2099202,69208064,69208066,2097152,0,67108866,2,67108864,69206018,2050,67110912,2099202,2097154,67110912,67108866,69206016,69208064,2097154,69206016,2048,2050,69208066,2099200,2,67108864,2099200,67108864,2099200,2097152,67110914,67110914,69206018,69206018,2,2097154,67108864,67110912,2097152,69208064,2050,2099202,69208064,2050,67108866,69208066,69206016,2099200,0,2,69208066,0,2099202,69206016,2048,67108866,67110912,2048,2097154],f=[268439616,4096,262144,268701760,268435456,268439616,64,268435456,262208,268697600,268701760,266240,268701696,266304,4096,64,268697600,268435520,268439552,4160,266240,262208,268697664,268701696,4160,0,0,268697664,268435520,268439552,266304,262144,266304,262144,268701696,4096,64,268697664,4096,266304,268439552,64,268435520,268697600,268697664,268435456,262144,268439616,0,268701760,262208,268435520,268697600,268439552,268439616,0,268701760,266240,266240,4160,4160,262208,268435456,268701696];function h(e,t,r,a){var n,h,d=32===e.length?3:9;n=3===d?a?[30,-2,-2]:[0,32,2]:a?[94,62,-2,32,64,2,30,-2,-2]:[0,32,2,62,30,-2,64,96,2];var y=t[0],g=t[1];y^=(h=252645135&(y>>>4^g))<<4,y^=(h=65535&(y>>>16^(g^=h)))<<16,y^=h=858993459&((g^=h)>>>2^y),y^=h=16711935&((g^=h<<2)>>>8^y),y=(y^=(h=1431655765&(y>>>1^(g^=h<<8)))<<1)<<1|y>>>31,g=(g^=h)<<1|g>>>31;for(var m=0;m<d;m+=3){for(var v=n[m+1],C=n[m+2],E=n[m];E!=v;E+=C){var S=g^e[E],T=(g>>>4|g<<28)^e[E+1];h=y,y=g,g=h^(s[S>>>24&63]|c[S>>>16&63]|l[S>>>8&63]|f[63&S]|i[T>>>24&63]|o[T>>>16&63]|u[T>>>8&63]|p[63&T])}h=y,y=g,g=h}g=g>>>1|g<<31,g^=h=1431655765&((y=y>>>1|y<<31)>>>1^g),g^=(h=16711935&(g>>>8^(y^=h<<1)))<<8,g^=(h=858993459&(g>>>2^(y^=h)))<<2,g^=h=65535&((y^=h)>>>16^g),g^=h=252645135&((y^=h<<16)>>>4^g),y^=h<<4,r[0]=y,r[1]=g}function d(e){var t,r="DES-"+((e=e||{}).mode||"CBC").toUpperCase(),n=(t=e.decrypt?a.cipher.createDecipher(r,e.key):a.cipher.createCipher(r,e.key)).start;return t.start=function(e,r){var i=null;r instanceof a.util.ByteBuffer&&(i=r,r={}),(r=r||{}).output=i,r.iv=e,n.call(t,r)},t}},function(e,t,r){var a=r(0);if(r(3),r(12),r(6),r(26),r(27),r(2),r(1),void 0===n)var n=a.jsbn.BigInteger;var i=a.util.isNodejs?r(16):null,s=a.asn1,o=a.util;a.pki=a.pki||{},e.exports=a.pki.rsa=a.rsa=a.rsa||{};var c=a.pki,u=[6,4,2,4,2,4,6,2],l={name:"PrivateKeyInfo",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"PrivateKeyInfo.version",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"PrivateKeyInfo.privateKeyAlgorithm",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:s.Class.UNIVERSAL,type:s.Type.OID,constructed:!1,capture:"privateKeyOid"}]},{name:"PrivateKeyInfo",tagClass:s.Class.UNIVERSAL,type:s.Type.OCTETSTRING,constructed:!1,capture:"privateKey"}]},p={name:"RSAPrivateKey",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"RSAPrivateKey.version",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"RSAPrivateKey.modulus",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyModulus"},{name:"RSAPrivateKey.publicExponent",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyPublicExponent"},{name:"RSAPrivateKey.privateExponent",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyPrivateExponent"},{name:"RSAPrivateKey.prime1",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyPrime1"},{name:"RSAPrivateKey.prime2",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyPrime2"},{name:"RSAPrivateKey.exponent1",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyExponent1"},{name:"RSAPrivateKey.exponent2",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyExponent2"},{name:"RSAPrivateKey.coefficient",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"privateKeyCoefficient"}]},f={name:"RSAPublicKey",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"RSAPublicKey.modulus",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"publicKeyModulus"},{name:"RSAPublicKey.exponent",tagClass:s.Class.UNIVERSAL,type:s.Type.INTEGER,constructed:!1,capture:"publicKeyExponent"}]},h=a.pki.rsa.publicKeyValidator={name:"SubjectPublicKeyInfo",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,captureAsn1:"subjectPublicKeyInfo",value:[{name:"SubjectPublicKeyInfo.AlgorithmIdentifier",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:s.Class.UNIVERSAL,type:s.Type.OID,constructed:!1,capture:"publicKeyOid"}]},{name:"SubjectPublicKeyInfo.subjectPublicKey",tagClass:s.Class.UNIVERSAL,type:s.Type.BITSTRING,constructed:!1,value:[{name:"SubjectPublicKeyInfo.subjectPublicKey.RSAPublicKey",tagClass:s.Class.UNIVERSAL,type:s.Type.SEQUENCE,constructed:!0,optional:!0,captureAsn1:"rsaPublicKey"}]}]},d=function(e){var t;if(!(e.algorithm in c.oids)){var r=new Error("Unknown message digest algorithm.");throw r.algorithm=e.algorithm,r}t=c.oids[e.algorithm];var a=s.oidToDer(t).getBytes(),n=s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[]),i=s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[]);i.value.push(s.create(s.Class.UNIVERSAL,s.Type.OID,!1,a)),i.value.push(s.create(s.Class.UNIVERSAL,s.Type.NULL,!1,""));var o=s.create(s.Class.UNIVERSAL,s.Type.OCTETSTRING,!1,e.digest().getBytes());return n.value.push(i),n.value.push(o),s.toDer(n).getBytes()},y=function(e,t,r){if(r)return e.modPow(t.e,t.n);if(!t.p||!t.q)return e.modPow(t.d,t.n);var i;t.dP||(t.dP=t.d.mod(t.p.subtract(n.ONE))),t.dQ||(t.dQ=t.d.mod(t.q.subtract(n.ONE))),t.qInv||(t.qInv=t.q.modInverse(t.p));do{i=new n(a.util.bytesToHex(a.random.getBytes(t.n.bitLength()/8)),16)}while(i.compareTo(t.n)>=0||!i.gcd(t.n).equals(n.ONE));for(var s=(e=e.multiply(i.modPow(t.e,t.n)).mod(t.n)).mod(t.p).modPow(t.dP,t.p),o=e.mod(t.q).modPow(t.dQ,t.q);s.compareTo(o)<0;)s=s.add(t.p);var c=s.subtract(o).multiply(t.qInv).mod(t.p).multiply(t.q).add(o);return c=c.multiply(i.modInverse(t.n)).mod(t.n)};function g(e,t,r){var n=a.util.createBuffer(),i=Math.ceil(t.n.bitLength()/8);if(e.length>i-11){var s=new Error("Message is too long for PKCS#1 v1.5 padding.");throw s.length=e.length,s.max=i-11,s}n.putByte(0),n.putByte(r);var o,c=i-3-e.length;if(0===r||1===r){o=0===r?0:255;for(var u=0;u<c;++u)n.putByte(o)}else for(;c>0;){var l=0,p=a.random.getBytes(c);for(u=0;u<c;++u)0===(o=p.charCodeAt(u))?++l:n.putByte(o);c=l}return n.putByte(0),n.putBytes(e),n}function m(e,t,r,n){var i=Math.ceil(t.n.bitLength()/8),s=a.util.createBuffer(e),o=s.getByte(),c=s.getByte();if(0!==o||r&&0!==c&&1!==c||!r&&2!=c||r&&0===c&&void 0===n)throw new Error("Encryption block is invalid.");var u=0;if(0===c){u=i-3-n;for(var l=0;l<u;++l)if(0!==s.getByte())throw new Error("Encryption block is invalid.")}else if(1===c)for(u=0;s.length()>1;){if(255!==s.getByte()){--s.read;break}++u}else if(2===c)for(u=0;s.length()>1;){if(0===s.getByte()){--s.read;break}++u}if(0!==s.getByte()||u!==i-3-s.length())throw new Error("Encryption block is invalid.");return s.getBytes()}function v(e,t,r){"function"==typeof t&&(r=t,t={});var i={algorithm:{name:(t=t||{}).algorithm||"PRIMEINC",options:{workers:t.workers||2,workLoad:t.workLoad||100,workerScript:t.workerScript}}};function s(){o(e.pBits,(function(t,a){return t?r(t):(e.p=a,null!==e.q?u(t,e.q):void o(e.qBits,u))}))}function o(e,t){a.prime.generateProbablePrime(e,i,t)}function u(t,a){if(t)return r(t);if(e.q=a,e.p.compareTo(e.q)<0){var i=e.p;e.p=e.q,e.q=i}if(0!==e.p.subtract(n.ONE).gcd(e.e).compareTo(n.ONE))return e.p=null,void s();if(0!==e.q.subtract(n.ONE).gcd(e.e).compareTo(n.ONE))return e.q=null,void o(e.qBits,u);if(e.p1=e.p.subtract(n.ONE),e.q1=e.q.subtract(n.ONE),e.phi=e.p1.multiply(e.q1),0!==e.phi.gcd(e.e).compareTo(n.ONE))return e.p=e.q=null,void s();if(e.n=e.p.multiply(e.q),e.n.bitLength()!==e.bits)return e.q=null,void o(e.qBits,u);var l=e.e.modInverse(e.phi);e.keys={privateKey:c.rsa.setPrivateKey(e.n,e.e,l,e.p,e.q,l.mod(e.p1),l.mod(e.q1),e.q.modInverse(e.p)),publicKey:c.rsa.setPublicKey(e.n,e.e)},r(null,e.keys)}"prng"in t&&(i.prng=t.prng),s()}function C(e){var t=e.toString(16);t[0]>="8"&&(t="00"+t);var r=a.util.hexToBytes(t);return r.length>1&&(0===r.charCodeAt(0)&&0==(128&r.charCodeAt(1))||255===r.charCodeAt(0)&&128==(128&r.charCodeAt(1)))?r.substr(1):r}function E(e){return e<=100?27:e<=150?18:e<=200?15:e<=250?12:e<=300?9:e<=350?8:e<=400?7:e<=500?6:e<=600?5:e<=800?4:e<=1250?3:2}function S(e){return a.util.isNodejs&&"function"==typeof i[e]}function T(e){return void 0!==o.globalScope&&"object"==typeof o.globalScope.crypto&&"object"==typeof o.globalScope.crypto.subtle&&"function"==typeof o.globalScope.crypto.subtle[e]}function I(e){return void 0!==o.globalScope&&"object"==typeof o.globalScope.msCrypto&&"object"==typeof o.globalScope.msCrypto.subtle&&"function"==typeof o.globalScope.msCrypto.subtle[e]}function b(e){for(var t=a.util.hexToBytes(e.toString(16)),r=new Uint8Array(t.length),n=0;n<t.length;++n)r[n]=t.charCodeAt(n);return r}c.rsa.encrypt=function(e,t,r){var i,s=r,o=Math.ceil(t.n.bitLength()/8);!1!==r&&!0!==r?(s=2===r,i=g(e,t,r)):(i=a.util.createBuffer()).putBytes(e);for(var c=new n(i.toHex(),16),u=y(c,t,s).toString(16),l=a.util.createBuffer(),p=o-Math.ceil(u.length/2);p>0;)l.putByte(0),--p;return l.putBytes(a.util.hexToBytes(u)),l.getBytes()},c.rsa.decrypt=function(e,t,r,i){var s=Math.ceil(t.n.bitLength()/8);if(e.length!==s){var o=new Error("Encrypted message length is invalid.");throw o.length=e.length,o.expected=s,o}var c=new n(a.util.createBuffer(e).toHex(),16);if(c.compareTo(t.n)>=0)throw new Error("Encrypted message is invalid.");for(var u=y(c,t,r).toString(16),l=a.util.createBuffer(),p=s-Math.ceil(u.length/2);p>0;)l.putByte(0),--p;return l.putBytes(a.util.hexToBytes(u)),!1!==i?m(l.getBytes(),t,r):l.getBytes()},c.rsa.createKeyPairGenerationState=function(e,t,r){"string"==typeof e&&(e=parseInt(e,10)),e=e||2048;var i,s=(r=r||{}).prng||a.random,o={nextBytes:function(e){for(var t=s.getBytesSync(e.length),r=0;r<e.length;++r)e[r]=t.charCodeAt(r)}},c=r.algorithm||"PRIMEINC";if("PRIMEINC"!==c)throw new Error("Invalid key generation algorithm: "+c);return(i={algorithm:c,state:0,bits:e,rng:o,eInt:t||65537,e:new n(null),p:null,q:null,qBits:e>>1,pBits:e-(e>>1),pqState:0,num:null,keys:null}).e.fromInt(i.eInt),i},c.rsa.stepKeyPairGenerationState=function(e,t){"algorithm"in e||(e.algorithm="PRIMEINC");var r=new n(null);r.fromInt(30);for(var a,i=0,s=function(e,t){return e|t},o=+new Date,l=0;null===e.keys&&(t<=0||l<t);){if(0===e.state){var p=null===e.p?e.pBits:e.qBits,f=p-1;0===e.pqState?(e.num=new n(p,e.rng),e.num.testBit(f)||e.num.bitwiseTo(n.ONE.shiftLeft(f),s,e.num),e.num.dAddOffset(31-e.num.mod(r).byteValue(),0),i=0,++e.pqState):1===e.pqState?e.num.bitLength()>p?e.pqState=0:e.num.isProbablePrime(E(e.num.bitLength()))?++e.pqState:e.num.dAddOffset(u[i++%8],0):2===e.pqState?e.pqState=0===e.num.subtract(n.ONE).gcd(e.e).compareTo(n.ONE)?3:0:3===e.pqState&&(e.pqState=0,null===e.p?e.p=e.num:e.q=e.num,null!==e.p&&null!==e.q&&++e.state,e.num=null)}else if(1===e.state)e.p.compareTo(e.q)<0&&(e.num=e.p,e.p=e.q,e.q=e.num),++e.state;else if(2===e.state)e.p1=e.p.subtract(n.ONE),e.q1=e.q.subtract(n.ONE),e.phi=e.p1.multiply(e.q1),++e.state;else if(3===e.state)0===e.phi.gcd(e.e).compareTo(n.ONE)?++e.state:(e.p=null,e.q=null,e.state=0);else if(4===e.state)e.n=e.p.multiply(e.q),e.n.bitLength()===e.bits?++e.state:(e.q=null,e.state=0);else if(5===e.state){var h=e.e.modInverse(e.phi);e.keys={privateKey:c.rsa.setPrivateKey(e.n,e.e,h,e.p,e.q,h.mod(e.p1),h.mod(e.q1),e.q.modInverse(e.p)),publicKey:c.rsa.setPublicKey(e.n,e.e)}}l+=(a=+new Date)-o,o=a}return null!==e.keys},c.rsa.generateKeyPair=function(e,t,r,n){if(1===arguments.length?"object"==typeof e?(r=e,e=void 0):"function"==typeof e&&(n=e,e=void 0):2===arguments.length?"number"==typeof e?"function"==typeof t?(n=t,t=void 0):"number"!=typeof t&&(r=t,t=void 0):(r=e,n=t,e=void 0,t=void 0):3===arguments.length&&("number"==typeof t?"function"==typeof r&&(n=r,r=void 0):(n=r,r=t,t=void 0)),r=r||{},void 0===e&&(e=r.bits||2048),void 0===t&&(t=r.e||65537),!a.options.usePureJavaScript&&!r.prng&&e>=256&&e<=16384&&(65537===t||3===t))if(n){if(S("generateKeyPair"))return i.generateKeyPair("rsa",{modulusLength:e,publicExponent:t,publicKeyEncoding:{type:"spki",format:"pem"},privateKeyEncoding:{type:"pkcs8",format:"pem"}},(function(e,t,r){if(e)return n(e);n(null,{privateKey:c.privateKeyFromPem(r),publicKey:c.publicKeyFromPem(t)})}));if(T("generateKey")&&T("exportKey"))return o.globalScope.crypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:e,publicExponent:b(t),hash:{name:"SHA-256"}},!0,["sign","verify"]).then((function(e){return o.globalScope.crypto.subtle.exportKey("pkcs8",e.privateKey)})).then(void 0,(function(e){n(e)})).then((function(e){if(e){var t=c.privateKeyFromAsn1(s.fromDer(a.util.createBuffer(e)));n(null,{privateKey:t,publicKey:c.setRsaPublicKey(t.n,t.e)})}}));if(I("generateKey")&&I("exportKey")){var u=o.globalScope.msCrypto.subtle.generateKey({name:"RSASSA-PKCS1-v1_5",modulusLength:e,publicExponent:b(t),hash:{name:"SHA-256"}},!0,["sign","verify"]);return u.oncomplete=function(e){var t=e.target.result,r=o.globalScope.msCrypto.subtle.exportKey("pkcs8",t.privateKey);r.oncomplete=function(e){var t=e.target.result,r=c.privateKeyFromAsn1(s.fromDer(a.util.createBuffer(t)));n(null,{privateKey:r,publicKey:c.setRsaPublicKey(r.n,r.e)})},r.onerror=function(e){n(e)}},void(u.onerror=function(e){n(e)})}}else if(S("generateKeyPairSync")){var l=i.generateKeyPairSync("rsa",{modulusLength:e,publicExponent:t,publicKeyEncoding:{type:"spki",format:"pem"},privateKeyEncoding:{type:"pkcs8",format:"pem"}});return{privateKey:c.privateKeyFromPem(l.privateKey),publicKey:c.publicKeyFromPem(l.publicKey)}}var p=c.rsa.createKeyPairGenerationState(e,t,r);if(!n)return c.rsa.stepKeyPairGenerationState(p,0),p.keys;v(p,r,n)},c.setRsaPublicKey=c.rsa.setPublicKey=function(e,t){var r={n:e,e:t,encrypt:function(e,t,n){if("string"==typeof t?t=t.toUpperCase():void 0===t&&(t="RSAES-PKCS1-V1_5"),"RSAES-PKCS1-V1_5"===t)t={encode:function(e,t,r){return g(e,t,2).getBytes()}};else if("RSA-OAEP"===t||"RSAES-OAEP"===t)t={encode:function(e,t){return a.pkcs1.encode_rsa_oaep(t,e,n)}};else if(-1!==["RAW","NONE","NULL",null].indexOf(t))t={encode:function(e){return e}};else if("string"==typeof t)throw new Error('Unsupported encryption scheme: "'+t+'".');var i=t.encode(e,r,!0);return c.rsa.encrypt(i,r,!0)},verify:function(e,t,a){"string"==typeof a?a=a.toUpperCase():void 0===a&&(a="RSASSA-PKCS1-V1_5"),"RSASSA-PKCS1-V1_5"===a?a={verify:function(e,t){return t=m(t,r,!0),e===s.fromDer(t).value[1].value}}:"NONE"!==a&&"NULL"!==a&&null!==a||(a={verify:function(e,t){return e===(t=m(t,r,!0))}});var n=c.rsa.decrypt(t,r,!0,!1);return a.verify(e,n,r.n.bitLength())}};return r},c.setRsaPrivateKey=c.rsa.setPrivateKey=function(e,t,r,n,i,s,o,u){var l={n:e,e:t,d:r,p:n,q:i,dP:s,dQ:o,qInv:u,decrypt:function(e,t,r){"string"==typeof t?t=t.toUpperCase():void 0===t&&(t="RSAES-PKCS1-V1_5");var n=c.rsa.decrypt(e,l,!1,!1);if("RSAES-PKCS1-V1_5"===t)t={decode:m};else if("RSA-OAEP"===t||"RSAES-OAEP"===t)t={decode:function(e,t){return a.pkcs1.decode_rsa_oaep(t,e,r)}};else{if(-1===["RAW","NONE","NULL",null].indexOf(t))throw new Error('Unsupported encryption scheme: "'+t+'".');t={decode:function(e){return e}}}return t.decode(n,l,!1)},sign:function(e,t){var r=!1;"string"==typeof t&&(t=t.toUpperCase()),void 0===t||"RSASSA-PKCS1-V1_5"===t?(t={encode:d},r=1):"NONE"!==t&&"NULL"!==t&&null!==t||(t={encode:function(){return e}},r=1);var a=t.encode(e,l.n.bitLength());return c.rsa.encrypt(a,l,r)}};return l},c.wrapRsaPrivateKey=function(e){return s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,s.integerToDer(0).getBytes()),s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.OID,!1,s.oidToDer(c.oids.rsaEncryption).getBytes()),s.create(s.Class.UNIVERSAL,s.Type.NULL,!1,"")]),s.create(s.Class.UNIVERSAL,s.Type.OCTETSTRING,!1,s.toDer(e).getBytes())])},c.privateKeyFromAsn1=function(e){var t,r,i,o,u,f,h,d,y={},g=[];if(s.validate(e,l,y,g)&&(e=s.fromDer(a.util.createBuffer(y.privateKey))),y={},g=[],!s.validate(e,p,y,g)){var m=new Error("Cannot read private key. ASN.1 object does not contain an RSAPrivateKey.");throw m.errors=g,m}return t=a.util.createBuffer(y.privateKeyModulus).toHex(),r=a.util.createBuffer(y.privateKeyPublicExponent).toHex(),i=a.util.createBuffer(y.privateKeyPrivateExponent).toHex(),o=a.util.createBuffer(y.privateKeyPrime1).toHex(),u=a.util.createBuffer(y.privateKeyPrime2).toHex(),f=a.util.createBuffer(y.privateKeyExponent1).toHex(),h=a.util.createBuffer(y.privateKeyExponent2).toHex(),d=a.util.createBuffer(y.privateKeyCoefficient).toHex(),c.setRsaPrivateKey(new n(t,16),new n(r,16),new n(i,16),new n(o,16),new n(u,16),new n(f,16),new n(h,16),new n(d,16))},c.privateKeyToAsn1=c.privateKeyToRSAPrivateKey=function(e){return s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,s.integerToDer(0).getBytes()),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,C(e.n)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,C(e.e)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,C(e.d)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,C(e.p)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,C(e.q)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,C(e.dP)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,C(e.dQ)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,C(e.qInv))])},c.publicKeyFromAsn1=function(e){var t={},r=[];if(s.validate(e,h,t,r)){var i,o=s.derToOid(t.publicKeyOid);if(o!==c.oids.rsaEncryption)throw(i=new Error("Cannot read public key. Unknown OID.")).oid=o,i;e=t.rsaPublicKey}if(r=[],!s.validate(e,f,t,r))throw(i=new Error("Cannot read public key. ASN.1 object does not contain an RSAPublicKey.")).errors=r,i;var u=a.util.createBuffer(t.publicKeyModulus).toHex(),l=a.util.createBuffer(t.publicKeyExponent).toHex();return c.setRsaPublicKey(new n(u,16),new n(l,16))},c.publicKeyToAsn1=c.publicKeyToSubjectPublicKeyInfo=function(e){return s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.OID,!1,s.oidToDer(c.oids.rsaEncryption).getBytes()),s.create(s.Class.UNIVERSAL,s.Type.NULL,!1,"")]),s.create(s.Class.UNIVERSAL,s.Type.BITSTRING,!1,[c.publicKeyToRSAPublicKey(e)])])},c.publicKeyToRSAPublicKey=function(e){return s.create(s.Class.UNIVERSAL,s.Type.SEQUENCE,!0,[s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,C(e.n)),s.create(s.Class.UNIVERSAL,s.Type.INTEGER,!1,C(e.e))])}},function(e,t,r){var a,n=r(0);e.exports=n.jsbn=n.jsbn||{};function i(e,t,r){this.data=[],null!=e&&("number"==typeof e?this.fromNumber(e,t,r):null==t&&"string"!=typeof e?this.fromString(e,256):this.fromString(e,t))}function s(){return new i(null)}function o(e,t,r,a,n,i){for(var s=16383&t,o=t>>14;--i>=0;){var c=16383&this.data[e],u=this.data[e++]>>14,l=o*c+u*s;n=((c=s*c+((16383&l)<<14)+r.data[a]+n)>>28)+(l>>14)+o*u,r.data[a++]=268435455&c}return n}n.jsbn.BigInteger=i,"undefined"==typeof navigator?(i.prototype.am=o,a=28):"Microsoft Internet Explorer"==navigator.appName?(i.prototype.am=function(e,t,r,a,n,i){for(var s=32767&t,o=t>>15;--i>=0;){var c=32767&this.data[e],u=this.data[e++]>>15,l=o*c+u*s;n=((c=s*c+((32767&l)<<15)+r.data[a]+(1073741823&n))>>>30)+(l>>>15)+o*u+(n>>>30),r.data[a++]=1073741823&c}return n},a=30):"Netscape"!=navigator.appName?(i.prototype.am=function(e,t,r,a,n,i){for(;--i>=0;){var s=t*this.data[e++]+r.data[a]+n;n=Math.floor(s/67108864),r.data[a++]=67108863&s}return n},a=26):(i.prototype.am=o,a=28),i.prototype.DB=a,i.prototype.DM=(1<<a)-1,i.prototype.DV=1<<a;i.prototype.FV=Math.pow(2,52),i.prototype.F1=52-a,i.prototype.F2=2*a-52;var c,u,l=new Array;for(c="0".charCodeAt(0),u=0;u<=9;++u)l[c++]=u;for(c="a".charCodeAt(0),u=10;u<36;++u)l[c++]=u;for(c="A".charCodeAt(0),u=10;u<36;++u)l[c++]=u;function p(e){return"0123456789abcdefghijklmnopqrstuvwxyz".charAt(e)}function f(e,t){var r=l[e.charCodeAt(t)];return null==r?-1:r}function h(e){var t=s();return t.fromInt(e),t}function d(e){var t,r=1;return 0!=(t=e>>>16)&&(e=t,r+=16),0!=(t=e>>8)&&(e=t,r+=8),0!=(t=e>>4)&&(e=t,r+=4),0!=(t=e>>2)&&(e=t,r+=2),0!=(t=e>>1)&&(e=t,r+=1),r}function y(e){this.m=e}function g(e){this.m=e,this.mp=e.invDigit(),this.mpl=32767&this.mp,this.mph=this.mp>>15,this.um=(1<<e.DB-15)-1,this.mt2=2*e.t}function m(e,t){return e&t}function v(e,t){return e|t}function C(e,t){return e^t}function E(e,t){return e&~t}function S(e){if(0==e)return-1;var t=0;return 0==(65535&e)&&(e>>=16,t+=16),0==(255&e)&&(e>>=8,t+=8),0==(15&e)&&(e>>=4,t+=4),0==(3&e)&&(e>>=2,t+=2),0==(1&e)&&++t,t}function T(e){for(var t=0;0!=e;)e&=e-1,++t;return t}function I(){}function b(e){return e}function A(e){this.r2=s(),this.q3=s(),i.ONE.dlShiftTo(2*e.t,this.r2),this.mu=this.r2.divide(e),this.m=e}y.prototype.convert=function(e){return e.s<0||e.compareTo(this.m)>=0?e.mod(this.m):e},y.prototype.revert=function(e){return e},y.prototype.reduce=function(e){e.divRemTo(this.m,null,e)},y.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},y.prototype.sqrTo=function(e,t){e.squareTo(t),this.reduce(t)},g.prototype.convert=function(e){var t=s();return e.abs().dlShiftTo(this.m.t,t),t.divRemTo(this.m,null,t),e.s<0&&t.compareTo(i.ZERO)>0&&this.m.subTo(t,t),t},g.prototype.revert=function(e){var t=s();return e.copyTo(t),this.reduce(t),t},g.prototype.reduce=function(e){for(;e.t<=this.mt2;)e.data[e.t++]=0;for(var t=0;t<this.m.t;++t){var r=32767&e.data[t],a=r*this.mpl+((r*this.mph+(e.data[t]>>15)*this.mpl&this.um)<<15)&e.DM;for(r=t+this.m.t,e.data[r]+=this.m.am(0,a,e,t,0,this.m.t);e.data[r]>=e.DV;)e.data[r]-=e.DV,e.data[++r]++}e.clamp(),e.drShiftTo(this.m.t,e),e.compareTo(this.m)>=0&&e.subTo(this.m,e)},g.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},g.prototype.sqrTo=function(e,t){e.squareTo(t),this.reduce(t)},i.prototype.copyTo=function(e){for(var t=this.t-1;t>=0;--t)e.data[t]=this.data[t];e.t=this.t,e.s=this.s},i.prototype.fromInt=function(e){this.t=1,this.s=e<0?-1:0,e>0?this.data[0]=e:e<-1?this.data[0]=e+this.DV:this.t=0},i.prototype.fromString=function(e,t){var r;if(16==t)r=4;else if(8==t)r=3;else if(256==t)r=8;else if(2==t)r=1;else if(32==t)r=5;else{if(4!=t)return void this.fromRadix(e,t);r=2}this.t=0,this.s=0;for(var a=e.length,n=!1,s=0;--a>=0;){var o=8==r?255&e[a]:f(e,a);o<0?"-"==e.charAt(a)&&(n=!0):(n=!1,0==s?this.data[this.t++]=o:s+r>this.DB?(this.data[this.t-1]|=(o&(1<<this.DB-s)-1)<<s,this.data[this.t++]=o>>this.DB-s):this.data[this.t-1]|=o<<s,(s+=r)>=this.DB&&(s-=this.DB))}8==r&&0!=(128&e[0])&&(this.s=-1,s>0&&(this.data[this.t-1]|=(1<<this.DB-s)-1<<s)),this.clamp(),n&&i.ZERO.subTo(this,this)},i.prototype.clamp=function(){for(var e=this.s&this.DM;this.t>0&&this.data[this.t-1]==e;)--this.t},i.prototype.dlShiftTo=function(e,t){var r;for(r=this.t-1;r>=0;--r)t.data[r+e]=this.data[r];for(r=e-1;r>=0;--r)t.data[r]=0;t.t=this.t+e,t.s=this.s},i.prototype.drShiftTo=function(e,t){for(var r=e;r<this.t;++r)t.data[r-e]=this.data[r];t.t=Math.max(this.t-e,0),t.s=this.s},i.prototype.lShiftTo=function(e,t){var r,a=e%this.DB,n=this.DB-a,i=(1<<n)-1,s=Math.floor(e/this.DB),o=this.s<<a&this.DM;for(r=this.t-1;r>=0;--r)t.data[r+s+1]=this.data[r]>>n|o,o=(this.data[r]&i)<<a;for(r=s-1;r>=0;--r)t.data[r]=0;t.data[s]=o,t.t=this.t+s+1,t.s=this.s,t.clamp()},i.prototype.rShiftTo=function(e,t){t.s=this.s;var r=Math.floor(e/this.DB);if(r>=this.t)t.t=0;else{var a=e%this.DB,n=this.DB-a,i=(1<<a)-1;t.data[0]=this.data[r]>>a;for(var s=r+1;s<this.t;++s)t.data[s-r-1]|=(this.data[s]&i)<<n,t.data[s-r]=this.data[s]>>a;a>0&&(t.data[this.t-r-1]|=(this.s&i)<<n),t.t=this.t-r,t.clamp()}},i.prototype.subTo=function(e,t){for(var r=0,a=0,n=Math.min(e.t,this.t);r<n;)a+=this.data[r]-e.data[r],t.data[r++]=a&this.DM,a>>=this.DB;if(e.t<this.t){for(a-=e.s;r<this.t;)a+=this.data[r],t.data[r++]=a&this.DM,a>>=this.DB;a+=this.s}else{for(a+=this.s;r<e.t;)a-=e.data[r],t.data[r++]=a&this.DM,a>>=this.DB;a-=e.s}t.s=a<0?-1:0,a<-1?t.data[r++]=this.DV+a:a>0&&(t.data[r++]=a),t.t=r,t.clamp()},i.prototype.multiplyTo=function(e,t){var r=this.abs(),a=e.abs(),n=r.t;for(t.t=n+a.t;--n>=0;)t.data[n]=0;for(n=0;n<a.t;++n)t.data[n+r.t]=r.am(0,a.data[n],t,n,0,r.t);t.s=0,t.clamp(),this.s!=e.s&&i.ZERO.subTo(t,t)},i.prototype.squareTo=function(e){for(var t=this.abs(),r=e.t=2*t.t;--r>=0;)e.data[r]=0;for(r=0;r<t.t-1;++r){var a=t.am(r,t.data[r],e,2*r,0,1);(e.data[r+t.t]+=t.am(r+1,2*t.data[r],e,2*r+1,a,t.t-r-1))>=t.DV&&(e.data[r+t.t]-=t.DV,e.data[r+t.t+1]=1)}e.t>0&&(e.data[e.t-1]+=t.am(r,t.data[r],e,2*r,0,1)),e.s=0,e.clamp()},i.prototype.divRemTo=function(e,t,r){var a=e.abs();if(!(a.t<=0)){var n=this.abs();if(n.t<a.t)return null!=t&&t.fromInt(0),void(null!=r&&this.copyTo(r));null==r&&(r=s());var o=s(),c=this.s,u=e.s,l=this.DB-d(a.data[a.t-1]);l>0?(a.lShiftTo(l,o),n.lShiftTo(l,r)):(a.copyTo(o),n.copyTo(r));var p=o.t,f=o.data[p-1];if(0!=f){var h=f*(1<<this.F1)+(p>1?o.data[p-2]>>this.F2:0),y=this.FV/h,g=(1<<this.F1)/h,m=1<<this.F2,v=r.t,C=v-p,E=null==t?s():t;for(o.dlShiftTo(C,E),r.compareTo(E)>=0&&(r.data[r.t++]=1,r.subTo(E,r)),i.ONE.dlShiftTo(p,E),E.subTo(o,o);o.t<p;)o.data[o.t++]=0;for(;--C>=0;){var S=r.data[--v]==f?this.DM:Math.floor(r.data[v]*y+(r.data[v-1]+m)*g);if((r.data[v]+=o.am(0,S,r,C,0,p))<S)for(o.dlShiftTo(C,E),r.subTo(E,r);r.data[v]<--S;)r.subTo(E,r)}null!=t&&(r.drShiftTo(p,t),c!=u&&i.ZERO.subTo(t,t)),r.t=p,r.clamp(),l>0&&r.rShiftTo(l,r),c<0&&i.ZERO.subTo(r,r)}}},i.prototype.invDigit=function(){if(this.t<1)return 0;var e=this.data[0];if(0==(1&e))return 0;var t=3&e;return(t=(t=(t=(t=t*(2-(15&e)*t)&15)*(2-(255&e)*t)&255)*(2-((65535&e)*t&65535))&65535)*(2-e*t%this.DV)%this.DV)>0?this.DV-t:-t},i.prototype.isEven=function(){return 0==(this.t>0?1&this.data[0]:this.s)},i.prototype.exp=function(e,t){if(e>4294967295||e<1)return i.ONE;var r=s(),a=s(),n=t.convert(this),o=d(e)-1;for(n.copyTo(r);--o>=0;)if(t.sqrTo(r,a),(e&1<<o)>0)t.mulTo(a,n,r);else{var c=r;r=a,a=c}return t.revert(r)},i.prototype.toString=function(e){if(this.s<0)return"-"+this.negate().toString(e);var t;if(16==e)t=4;else if(8==e)t=3;else if(2==e)t=1;else if(32==e)t=5;else{if(4!=e)return this.toRadix(e);t=2}var r,a=(1<<t)-1,n=!1,i="",s=this.t,o=this.DB-s*this.DB%t;if(s-- >0)for(o<this.DB&&(r=this.data[s]>>o)>0&&(n=!0,i=p(r));s>=0;)o<t?(r=(this.data[s]&(1<<o)-1)<<t-o,r|=this.data[--s]>>(o+=this.DB-t)):(r=this.data[s]>>(o-=t)&a,o<=0&&(o+=this.DB,--s)),r>0&&(n=!0),n&&(i+=p(r));return n?i:"0"},i.prototype.negate=function(){var e=s();return i.ZERO.subTo(this,e),e},i.prototype.abs=function(){return this.s<0?this.negate():this},i.prototype.compareTo=function(e){var t=this.s-e.s;if(0!=t)return t;var r=this.t;if(0!=(t=r-e.t))return this.s<0?-t:t;for(;--r>=0;)if(0!=(t=this.data[r]-e.data[r]))return t;return 0},i.prototype.bitLength=function(){return this.t<=0?0:this.DB*(this.t-1)+d(this.data[this.t-1]^this.s&this.DM)},i.prototype.mod=function(e){var t=s();return this.abs().divRemTo(e,null,t),this.s<0&&t.compareTo(i.ZERO)>0&&e.subTo(t,t),t},i.prototype.modPowInt=function(e,t){var r;return r=e<256||t.isEven()?new y(t):new g(t),this.exp(e,r)},i.ZERO=h(0),i.ONE=h(1),I.prototype.convert=b,I.prototype.revert=b,I.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r)},I.prototype.sqrTo=function(e,t){e.squareTo(t)},A.prototype.convert=function(e){if(e.s<0||e.t>2*this.m.t)return e.mod(this.m);if(e.compareTo(this.m)<0)return e;var t=s();return e.copyTo(t),this.reduce(t),t},A.prototype.revert=function(e){return e},A.prototype.reduce=function(e){for(e.drShiftTo(this.m.t-1,this.r2),e.t>this.m.t+1&&(e.t=this.m.t+1,e.clamp()),this.mu.multiplyUpperTo(this.r2,this.m.t+1,this.q3),this.m.multiplyLowerTo(this.q3,this.m.t+1,this.r2);e.compareTo(this.r2)<0;)e.dAddOffset(1,this.m.t+1);for(e.subTo(this.r2,e);e.compareTo(this.m)>=0;)e.subTo(this.m,e)},A.prototype.mulTo=function(e,t,r){e.multiplyTo(t,r),this.reduce(r)},A.prototype.sqrTo=function(e,t){e.squareTo(t),this.reduce(t)};var B=[2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53,59,61,67,71,73,79,83,89,97,101,103,107,109,113,127,131,137,139,149,151,157,163,167,173,179,181,191,193,197,199,211,223,227,229,233,239,241,251,257,263,269,271,277,281,283,293,307,311,313,317,331,337,347,349,353,359,367,373,379,383,389,397,401,409,419,421,431,433,439,443,449,457,461,463,467,479,487,491,499,503,509],N=(1<<26)/B[B.length-1];i.prototype.chunkSize=function(e){return Math.floor(Math.LN2*this.DB/Math.log(e))},i.prototype.toRadix=function(e){if(null==e&&(e=10),0==this.signum()||e<2||e>36)return"0";var t=this.chunkSize(e),r=Math.pow(e,t),a=h(r),n=s(),i=s(),o="";for(this.divRemTo(a,n,i);n.signum()>0;)o=(r+i.intValue()).toString(e).substr(1)+o,n.divRemTo(a,n,i);return i.intValue().toString(e)+o},i.prototype.fromRadix=function(e,t){this.fromInt(0),null==t&&(t=10);for(var r=this.chunkSize(t),a=Math.pow(t,r),n=!1,s=0,o=0,c=0;c<e.length;++c){var u=f(e,c);u<0?"-"==e.charAt(c)&&0==this.signum()&&(n=!0):(o=t*o+u,++s>=r&&(this.dMultiply(a),this.dAddOffset(o,0),s=0,o=0))}s>0&&(this.dMultiply(Math.pow(t,s)),this.dAddOffset(o,0)),n&&i.ZERO.subTo(this,this)},i.prototype.fromNumber=function(e,t,r){if("number"==typeof t)if(e<2)this.fromInt(1);else for(this.fromNumber(e,r),this.testBit(e-1)||this.bitwiseTo(i.ONE.shiftLeft(e-1),v,this),this.isEven()&&this.dAddOffset(1,0);!this.isProbablePrime(t);)this.dAddOffset(2,0),this.bitLength()>e&&this.subTo(i.ONE.shiftLeft(e-1),this);else{var a=new Array,n=7&e;a.length=1+(e>>3),t.nextBytes(a),n>0?a[0]&=(1<<n)-1:a[0]=0,this.fromString(a,256)}},i.prototype.bitwiseTo=function(e,t,r){var a,n,i=Math.min(e.t,this.t);for(a=0;a<i;++a)r.data[a]=t(this.data[a],e.data[a]);if(e.t<this.t){for(n=e.s&this.DM,a=i;a<this.t;++a)r.data[a]=t(this.data[a],n);r.t=this.t}else{for(n=this.s&this.DM,a=i;a<e.t;++a)r.data[a]=t(n,e.data[a]);r.t=e.t}r.s=t(this.s,e.s),r.clamp()},i.prototype.changeBit=function(e,t){var r=i.ONE.shiftLeft(e);return this.bitwiseTo(r,t,r),r},i.prototype.addTo=function(e,t){for(var r=0,a=0,n=Math.min(e.t,this.t);r<n;)a+=this.data[r]+e.data[r],t.data[r++]=a&this.DM,a>>=this.DB;if(e.t<this.t){for(a+=e.s;r<this.t;)a+=this.data[r],t.data[r++]=a&this.DM,a>>=this.DB;a+=this.s}else{for(a+=this.s;r<e.t;)a+=e.data[r],t.data[r++]=a&this.DM,a>>=this.DB;a+=e.s}t.s=a<0?-1:0,a>0?t.data[r++]=a:a<-1&&(t.data[r++]=this.DV+a),t.t=r,t.clamp()},i.prototype.dMultiply=function(e){this.data[this.t]=this.am(0,e-1,this,0,0,this.t),++this.t,this.clamp()},i.prototype.dAddOffset=function(e,t){if(0!=e){for(;this.t<=t;)this.data[this.t++]=0;for(this.data[t]+=e;this.data[t]>=this.DV;)this.data[t]-=this.DV,++t>=this.t&&(this.data[this.t++]=0),++this.data[t]}},i.prototype.multiplyLowerTo=function(e,t,r){var a,n=Math.min(this.t+e.t,t);for(r.s=0,r.t=n;n>0;)r.data[--n]=0;for(a=r.t-this.t;n<a;++n)r.data[n+this.t]=this.am(0,e.data[n],r,n,0,this.t);for(a=Math.min(e.t,t);n<a;++n)this.am(0,e.data[n],r,n,0,t-n);r.clamp()},i.prototype.multiplyUpperTo=function(e,t,r){--t;var a=r.t=this.t+e.t-t;for(r.s=0;--a>=0;)r.data[a]=0;for(a=Math.max(t-this.t,0);a<e.t;++a)r.data[this.t+a-t]=this.am(t-a,e.data[a],r,0,0,this.t+a-t);r.clamp(),r.drShiftTo(1,r)},i.prototype.modInt=function(e){if(e<=0)return 0;var t=this.DV%e,r=this.s<0?e-1:0;if(this.t>0)if(0==t)r=this.data[0]%e;else for(var a=this.t-1;a>=0;--a)r=(t*r+this.data[a])%e;return r},i.prototype.millerRabin=function(e){var t=this.subtract(i.ONE),r=t.getLowestSetBit();if(r<=0)return!1;for(var a,n=t.shiftRight(r),s={nextBytes:function(e){for(var t=0;t<e.length;++t)e[t]=Math.floor(256*Math.random())}},o=0;o<e;++o){do{a=new i(this.bitLength(),s)}while(a.compareTo(i.ONE)<=0||a.compareTo(t)>=0);var c=a.modPow(n,this);if(0!=c.compareTo(i.ONE)&&0!=c.compareTo(t)){for(var u=1;u++<r&&0!=c.compareTo(t);)if(0==(c=c.modPowInt(2,this)).compareTo(i.ONE))return!1;if(0!=c.compareTo(t))return!1}}return!0},i.prototype.clone=function(){var e=s();return this.copyTo(e),e},i.prototype.intValue=function(){if(this.s<0){if(1==this.t)return this.data[0]-this.DV;if(0==this.t)return-1}else{if(1==this.t)return this.data[0];if(0==this.t)return 0}return(this.data[1]&(1<<32-this.DB)-1)<<this.DB|this.data[0]},i.prototype.byteValue=function(){return 0==this.t?this.s:this.data[0]<<24>>24},i.prototype.shortValue=function(){return 0==this.t?this.s:this.data[0]<<16>>16},i.prototype.signum=function(){return this.s<0?-1:this.t<=0||1==this.t&&this.data[0]<=0?0:1},i.prototype.toByteArray=function(){var e=this.t,t=new Array;t[0]=this.s;var r,a=this.DB-e*this.DB%8,n=0;if(e-- >0)for(a<this.DB&&(r=this.data[e]>>a)!=(this.s&this.DM)>>a&&(t[n++]=r|this.s<<this.DB-a);e>=0;)a<8?(r=(this.data[e]&(1<<a)-1)<<8-a,r|=this.data[--e]>>(a+=this.DB-8)):(r=this.data[e]>>(a-=8)&255,a<=0&&(a+=this.DB,--e)),0!=(128&r)&&(r|=-256),0==n&&(128&this.s)!=(128&r)&&++n,(n>0||r!=this.s)&&(t[n++]=r);return t},i.prototype.equals=function(e){return 0==this.compareTo(e)},i.prototype.min=function(e){return this.compareTo(e)<0?this:e},i.prototype.max=function(e){return this.compareTo(e)>0?this:e},i.prototype.and=function(e){var t=s();return this.bitwiseTo(e,m,t),t},i.prototype.or=function(e){var t=s();return this.bitwiseTo(e,v,t),t},i.prototype.xor=function(e){var t=s();return this.bitwiseTo(e,C,t),t},i.prototype.andNot=function(e){var t=s();return this.bitwiseTo(e,E,t),t},i.prototype.not=function(){for(var e=s(),t=0;t<this.t;++t)e.data[t]=this.DM&~this.data[t];return e.t=this.t,e.s=~this.s,e},i.prototype.shiftLeft=function(e){var t=s();return e<0?this.rShiftTo(-e,t):this.lShiftTo(e,t),t},i.prototype.shiftRight=function(e){var t=s();return e<0?this.lShiftTo(-e,t):this.rShiftTo(e,t),t},i.prototype.getLowestSetBit=function(){for(var e=0;e<this.t;++e)if(0!=this.data[e])return e*this.DB+S(this.data[e]);return this.s<0?this.t*this.DB:-1},i.prototype.bitCount=function(){for(var e=0,t=this.s&this.DM,r=0;r<this.t;++r)e+=T(this.data[r]^t);return e},i.prototype.testBit=function(e){var t=Math.floor(e/this.DB);return t>=this.t?0!=this.s:0!=(this.data[t]&1<<e%this.DB)},i.prototype.setBit=function(e){return this.changeBit(e,v)},i.prototype.clearBit=function(e){return this.changeBit(e,E)},i.prototype.flipBit=function(e){return this.changeBit(e,C)},i.prototype.add=function(e){var t=s();return this.addTo(e,t),t},i.prototype.subtract=function(e){var t=s();return this.subTo(e,t),t},i.prototype.multiply=function(e){var t=s();return this.multiplyTo(e,t),t},i.prototype.divide=function(e){var t=s();return this.divRemTo(e,t,null),t},i.prototype.remainder=function(e){var t=s();return this.divRemTo(e,null,t),t},i.prototype.divideAndRemainder=function(e){var t=s(),r=s();return this.divRemTo(e,t,r),new Array(t,r)},i.prototype.modPow=function(e,t){var r,a,n=e.bitLength(),i=h(1);if(n<=0)return i;r=n<18?1:n<48?3:n<144?4:n<768?5:6,a=n<8?new y(t):t.isEven()?new A(t):new g(t);var o=new Array,c=3,u=r-1,l=(1<<r)-1;if(o[1]=a.convert(this),r>1){var p=s();for(a.sqrTo(o[1],p);c<=l;)o[c]=s(),a.mulTo(p,o[c-2],o[c]),c+=2}var f,m,v=e.t-1,C=!0,E=s();for(n=d(e.data[v])-1;v>=0;){for(n>=u?f=e.data[v]>>n-u&l:(f=(e.data[v]&(1<<n+1)-1)<<u-n,v>0&&(f|=e.data[v-1]>>this.DB+n-u)),c=r;0==(1&f);)f>>=1,--c;if((n-=c)<0&&(n+=this.DB,--v),C)o[f].copyTo(i),C=!1;else{for(;c>1;)a.sqrTo(i,E),a.sqrTo(E,i),c-=2;c>0?a.sqrTo(i,E):(m=i,i=E,E=m),a.mulTo(E,o[f],i)}for(;v>=0&&0==(e.data[v]&1<<n);)a.sqrTo(i,E),m=i,i=E,E=m,--n<0&&(n=this.DB-1,--v)}return a.revert(i)},i.prototype.modInverse=function(e){var t=e.isEven();if(this.isEven()&&t||0==e.signum())return i.ZERO;for(var r=e.clone(),a=this.clone(),n=h(1),s=h(0),o=h(0),c=h(1);0!=r.signum();){for(;r.isEven();)r.rShiftTo(1,r),t?(n.isEven()&&s.isEven()||(n.addTo(this,n),s.subTo(e,s)),n.rShiftTo(1,n)):s.isEven()||s.subTo(e,s),s.rShiftTo(1,s);for(;a.isEven();)a.rShiftTo(1,a),t?(o.isEven()&&c.isEven()||(o.addTo(this,o),c.subTo(e,c)),o.rShiftTo(1,o)):c.isEven()||c.subTo(e,c),c.rShiftTo(1,c);r.compareTo(a)>=0?(r.subTo(a,r),t&&n.subTo(o,n),s.subTo(c,s)):(a.subTo(r,a),t&&o.subTo(n,o),c.subTo(s,c))}return 0!=a.compareTo(i.ONE)?i.ZERO:c.compareTo(e)>=0?c.subtract(e):c.signum()<0?(c.addTo(e,c),c.signum()<0?c.add(e):c):c},i.prototype.pow=function(e){return this.exp(e,new I)},i.prototype.gcd=function(e){var t=this.s<0?this.negate():this.clone(),r=e.s<0?e.negate():e.clone();if(t.compareTo(r)<0){var a=t;t=r,r=a}var n=t.getLowestSetBit(),i=r.getLowestSetBit();if(i<0)return t;for(n<i&&(i=n),i>0&&(t.rShiftTo(i,t),r.rShiftTo(i,r));t.signum()>0;)(n=t.getLowestSetBit())>0&&t.rShiftTo(n,t),(n=r.getLowestSetBit())>0&&r.rShiftTo(n,r),t.compareTo(r)>=0?(t.subTo(r,t),t.rShiftTo(1,t)):(r.subTo(t,r),r.rShiftTo(1,r));return i>0&&r.lShiftTo(i,r),r},i.prototype.isProbablePrime=function(e){var t,r=this.abs();if(1==r.t&&r.data[0]<=B[B.length-1]){for(t=0;t<B.length;++t)if(r.data[0]==B[t])return!0;return!1}if(r.isEven())return!1;for(t=1;t<B.length;){for(var a=B[t],n=t+1;n<B.length&&a<N;)a*=B[n++];for(a=r.modInt(a);t<n;)if(a%B[t++]==0)return!1}return r.millerRabin(e)}},function(e,t,r){var a=r(0);r(1),e.exports=a.cipher=a.cipher||{},a.cipher.algorithms=a.cipher.algorithms||{},a.cipher.createCipher=function(e,t){var r=e;if("string"==typeof r&&(r=a.cipher.getAlgorithm(r))&&(r=r()),!r)throw new Error("Unsupported algorithm: "+e);return new a.cipher.BlockCipher({algorithm:r,key:t,decrypt:!1})},a.cipher.createDecipher=function(e,t){var r=e;if("string"==typeof r&&(r=a.cipher.getAlgorithm(r))&&(r=r()),!r)throw new Error("Unsupported algorithm: "+e);return new a.cipher.BlockCipher({algorithm:r,key:t,decrypt:!0})},a.cipher.registerAlgorithm=function(e,t){e=e.toUpperCase(),a.cipher.algorithms[e]=t},a.cipher.getAlgorithm=function(e){return(e=e.toUpperCase())in a.cipher.algorithms?a.cipher.algorithms[e]:null};var n=a.cipher.BlockCipher=function(e){this.algorithm=e.algorithm,this.mode=this.algorithm.mode,this.blockSize=this.mode.blockSize,this._finish=!1,this._input=null,this.output=null,this._op=e.decrypt?this.mode.decrypt:this.mode.encrypt,this._decrypt=e.decrypt,this.algorithm.initialize(e)};n.prototype.start=function(e){e=e||{};var t={};for(var r in e)t[r]=e[r];t.decrypt=this._decrypt,this._finish=!1,this._input=a.util.createBuffer(),this.output=e.output||a.util.createBuffer(),this.mode.start(t)},n.prototype.update=function(e){for(e&&this._input.putBuffer(e);!this._op.call(this.mode,this._input,this.output,this._finish)&&!this._finish;);this._input.compact()},n.prototype.finish=function(e){!e||"ECB"!==this.mode.name&&"CBC"!==this.mode.name||(this.mode.pad=function(t){return e(this.blockSize,t,!1)},this.mode.unpad=function(t){return e(this.blockSize,t,!0)});var t={};return t.decrypt=this._decrypt,t.overflow=this._input.length()%this.blockSize,!(!this._decrypt&&this.mode.pad&&!this.mode.pad(this._input,t))&&(this._finish=!0,this.update(),!(this._decrypt&&this.mode.unpad&&!this.mode.unpad(this.output,t))&&!(this.mode.afterFinish&&!this.mode.afterFinish(this.output,t)))}},function(e,t,r){var a=r(0);r(4),r(1);var n=e.exports=a.md5=a.md5||{};a.md.md5=a.md.algorithms.md5=n,n.create=function(){u||function(){i=String.fromCharCode(128),i+=a.util.fillString(String.fromCharCode(0),64),s=[0,1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,1,6,11,0,5,10,15,4,9,14,3,8,13,2,7,12,5,8,11,14,1,4,7,10,13,0,3,6,9,12,15,2,0,7,14,5,12,3,10,1,8,15,6,13,4,11,2,9],o=[7,12,17,22,7,12,17,22,7,12,17,22,7,12,17,22,5,9,14,20,5,9,14,20,5,9,14,20,5,9,14,20,4,11,16,23,4,11,16,23,4,11,16,23,4,11,16,23,6,10,15,21,6,10,15,21,6,10,15,21,6,10,15,21],c=new Array(64);for(var e=0;e<64;++e)c[e]=Math.floor(4294967296*Math.abs(Math.sin(e+1)));u=!0}();var e=null,t=a.util.createBuffer(),r=new Array(16),n={algorithm:"md5",blockLength:64,digestLength:16,messageLength:0,fullMessageLength:null,messageLengthSize:8,start:function(){n.messageLength=0,n.fullMessageLength=n.messageLength64=[];for(var r=n.messageLengthSize/4,i=0;i<r;++i)n.fullMessageLength.push(0);return t=a.util.createBuffer(),e={h0:1732584193,h1:4023233417,h2:2562383102,h3:271733878},n}};return n.start(),n.update=function(i,s){"utf8"===s&&(i=a.util.encodeUtf8(i));var o=i.length;n.messageLength+=o,o=[o/4294967296>>>0,o>>>0];for(var c=n.fullMessageLength.length-1;c>=0;--c)n.fullMessageLength[c]+=o[1],o[1]=o[0]+(n.fullMessageLength[c]/4294967296>>>0),n.fullMessageLength[c]=n.fullMessageLength[c]>>>0,o[0]=o[1]/4294967296>>>0;return t.putBytes(i),l(e,r,t),(t.read>2048||0===t.length())&&t.compact(),n},n.digest=function(){var s=a.util.createBuffer();s.putBytes(t.bytes());var o=n.fullMessageLength[n.fullMessageLength.length-1]+n.messageLengthSize&n.blockLength-1;s.putBytes(i.substr(0,n.blockLength-o));for(var c,u=0,p=n.fullMessageLength.length-1;p>=0;--p)u=(c=8*n.fullMessageLength[p]+u)/4294967296>>>0,s.putInt32Le(c>>>0);var f={h0:e.h0,h1:e.h1,h2:e.h2,h3:e.h3};l(f,r,s);var h=a.util.createBuffer();return h.putInt32Le(f.h0),h.putInt32Le(f.h1),h.putInt32Le(f.h2),h.putInt32Le(f.h3),h},n};var i=null,s=null,o=null,c=null,u=!1;function l(e,t,r){for(var a,n,i,u,l,p,f,h=r.length();h>=64;){for(n=e.h0,i=e.h1,u=e.h2,l=e.h3,f=0;f<16;++f)t[f]=r.getInt32Le(),a=n+(l^i&(u^l))+c[f]+t[f],n=l,l=u,u=i,i+=a<<(p=o[f])|a>>>32-p;for(;f<32;++f)a=n+(u^l&(i^u))+c[f]+t[s[f]],n=l,l=u,u=i,i+=a<<(p=o[f])|a>>>32-p;for(;f<48;++f)a=n+(i^u^l)+c[f]+t[s[f]],n=l,l=u,u=i,i+=a<<(p=o[f])|a>>>32-p;for(;f<64;++f)a=n+(u^(i|~l))+c[f]+t[s[f]],n=l,l=u,u=i,i+=a<<(p=o[f])|a>>>32-p;e.h0=e.h0+n|0,e.h1=e.h1+i|0,e.h2=e.h2+u|0,e.h3=e.h3+l|0,h-=64}}},function(e,t,r){var a=r(0);r(8),r(4),r(1);var n,i=a.pkcs5=a.pkcs5||{};a.util.isNodejs&&!a.options.usePureJavaScript&&(n=r(16)),e.exports=a.pbkdf2=i.pbkdf2=function(e,t,r,i,s,o){if("function"==typeof s&&(o=s,s=null),a.util.isNodejs&&!a.options.usePureJavaScript&&n.pbkdf2&&(null===s||"object"!=typeof s)&&(n.pbkdf2Sync.length>4||!s||"sha1"===s))return"string"!=typeof s&&(s="sha1"),e=Buffer.from(e,"binary"),t=Buffer.from(t,"binary"),o?4===n.pbkdf2Sync.length?n.pbkdf2(e,t,r,i,(function(e,t){if(e)return o(e);o(null,t.toString("binary"))})):n.pbkdf2(e,t,r,i,s,(function(e,t){if(e)return o(e);o(null,t.toString("binary"))})):4===n.pbkdf2Sync.length?n.pbkdf2Sync(e,t,r,i).toString("binary"):n.pbkdf2Sync(e,t,r,i,s).toString("binary");if(null==s&&(s="sha1"),"string"==typeof s){if(!(s in a.md.algorithms))throw new Error("Unknown hash algorithm: "+s);s=a.md[s].create()}var c=s.digestLength;if(i>4294967295*c){var u=new Error("Derived key is too long.");if(o)return o(u);throw u}var l=Math.ceil(i/c),p=i-(l-1)*c,f=a.hmac.create();f.start(s,e);var h,d,y,g="";if(!o){for(var m=1;m<=l;++m){f.start(null,null),f.update(t),f.update(a.util.int32ToBytes(m)),h=y=f.digest().getBytes();for(var v=2;v<=r;++v)f.start(null,null),f.update(y),d=f.digest().getBytes(),h=a.util.xorBytes(h,d,c),y=d;g+=m<l?h:h.substr(0,p)}return g}m=1;function C(){if(m>l)return o(null,g);f.start(null,null),f.update(t),f.update(a.util.int32ToBytes(m)),h=y=f.digest().getBytes(),v=2,E()}function E(){if(v<=r)return f.start(null,null),f.update(y),d=f.digest().getBytes(),h=a.util.xorBytes(h,d,c),y=d,++v,a.util.setImmediate(E);g+=m<l?h:h.substr(0,p),++m,C()}C()}},function(e,t){},function(e,t,r){var a=r(0);r(5),r(3),r(10),r(4),r(39),r(6),r(7),r(18),r(11),r(1);var n=a.asn1,i=e.exports=a.pki=a.pki||{},s=i.oids,o={};o.CN=s.commonName,o.commonName="CN",o.C=s.countryName,o.countryName="C",o.L=s.localityName,o.localityName="L",o.ST=s.stateOrProvinceName,o.stateOrProvinceName="ST",o.O=s.organizationName,o.organizationName="O",o.OU=s.organizationalUnitName,o.organizationalUnitName="OU",o.E=s.emailAddress,o.emailAddress="E";var c=a.pki.rsa.publicKeyValidator,u={name:"Certificate",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"tbsCertificate",value:[{name:"Certificate.TBSCertificate.version",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.version.integer",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"certVersion"}]},{name:"Certificate.TBSCertificate.serialNumber",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"certSerialNumber"},{name:"Certificate.TBSCertificate.signature",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.signature.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"certinfoSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:n.Class.UNIVERSAL,optional:!0,captureAsn1:"certinfoSignatureParams"}]},{name:"Certificate.TBSCertificate.issuer",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"certIssuer"},{name:"Certificate.TBSCertificate.validity",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.TBSCertificate.validity.notBefore (utc)",tagClass:n.Class.UNIVERSAL,type:n.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity1UTCTime"},{name:"Certificate.TBSCertificate.validity.notBefore (generalized)",tagClass:n.Class.UNIVERSAL,type:n.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity2GeneralizedTime"},{name:"Certificate.TBSCertificate.validity.notAfter (utc)",tagClass:n.Class.UNIVERSAL,type:n.Type.UTCTIME,constructed:!1,optional:!0,capture:"certValidity3UTCTime"},{name:"Certificate.TBSCertificate.validity.notAfter (generalized)",tagClass:n.Class.UNIVERSAL,type:n.Type.GENERALIZEDTIME,constructed:!1,optional:!0,capture:"certValidity4GeneralizedTime"}]},{name:"Certificate.TBSCertificate.subject",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"certSubject"},c,{name:"Certificate.TBSCertificate.issuerUniqueID",tagClass:n.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.issuerUniqueID.id",tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,captureBitStringValue:"certIssuerUniqueId"}]},{name:"Certificate.TBSCertificate.subjectUniqueID",tagClass:n.Class.CONTEXT_SPECIFIC,type:2,constructed:!0,optional:!0,value:[{name:"Certificate.TBSCertificate.subjectUniqueID.id",tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,captureBitStringValue:"certSubjectUniqueId"}]},{name:"Certificate.TBSCertificate.extensions",tagClass:n.Class.CONTEXT_SPECIFIC,type:3,constructed:!0,captureAsn1:"certExtensions",optional:!0}]},{name:"Certificate.signatureAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"Certificate.signatureAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"certSignatureOid"},{name:"Certificate.TBSCertificate.signature.parameters",tagClass:n.Class.UNIVERSAL,optional:!0,captureAsn1:"certSignatureParams"}]},{name:"Certificate.signatureValue",tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,captureBitStringValue:"certSignature"}]},l={name:"rsapss",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.hashAlgorithm",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier",tagClass:n.Class.UNIVERSAL,type:n.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.hashAlgorithm.AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"hashOid"}]}]},{name:"rsapss.maskGenAlgorithm",tagClass:n.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier",tagClass:n.Class.UNIVERSAL,type:n.Class.SEQUENCE,constructed:!0,optional:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"maskGenOid"},{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"rsapss.maskGenAlgorithm.AlgorithmIdentifier.params.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"maskGenHashOid"}]}]}]},{name:"rsapss.saltLength",tagClass:n.Class.CONTEXT_SPECIFIC,type:2,optional:!0,value:[{name:"rsapss.saltLength.saltLength",tagClass:n.Class.UNIVERSAL,type:n.Class.INTEGER,constructed:!1,capture:"saltLength"}]},{name:"rsapss.trailerField",tagClass:n.Class.CONTEXT_SPECIFIC,type:3,optional:!0,value:[{name:"rsapss.trailer.trailer",tagClass:n.Class.UNIVERSAL,type:n.Class.INTEGER,constructed:!1,capture:"trailer"}]}]},p={name:"CertificationRequestInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfo",value:[{name:"CertificationRequestInfo.integer",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"certificationRequestInfoVersion"},{name:"CertificationRequestInfo.subject",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"certificationRequestInfoSubject"},c,{name:"CertificationRequestInfo.attributes",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"certificationRequestInfoAttributes",value:[{name:"CertificationRequestInfo.attributes",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"CertificationRequestInfo.attributes.type",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1},{name:"CertificationRequestInfo.attributes.value",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,constructed:!0}]}]}]},f={name:"CertificationRequest",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"csr",value:[p,{name:"CertificationRequest.signatureAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"CertificationRequest.signatureAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"csrSignatureOid"},{name:"CertificationRequest.signatureAlgorithm.parameters",tagClass:n.Class.UNIVERSAL,optional:!0,captureAsn1:"csrSignatureParams"}]},{name:"CertificationRequest.signature",tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,captureBitStringValue:"csrSignature"}]};function h(e,t){"string"==typeof t&&(t={shortName:t});for(var r,a=null,n=0;null===a&&n<e.attributes.length;++n)r=e.attributes[n],(t.type&&t.type===r.type||t.name&&t.name===r.name||t.shortName&&t.shortName===r.shortName)&&(a=r);return a}i.RDNAttributesAsArray=function(e,t){for(var r,a,i,c=[],u=0;u<e.value.length;++u){r=e.value[u];for(var l=0;l<r.value.length;++l)i={},a=r.value[l],i.type=n.derToOid(a.value[0].value),i.value=a.value[1].value,i.valueTagClass=a.value[1].type,i.type in s&&(i.name=s[i.type],i.name in o&&(i.shortName=o[i.name])),t&&(t.update(i.type),t.update(i.value)),c.push(i)}return c},i.CRIAttributesAsArray=function(e){for(var t=[],r=0;r<e.length;++r)for(var a=e[r],c=n.derToOid(a.value[0].value),u=a.value[1].value,l=0;l<u.length;++l){var p={};if(p.type=c,p.value=u[l].value,p.valueTagClass=u[l].type,p.type in s&&(p.name=s[p.type],p.name in o&&(p.shortName=o[p.name])),p.type===s.extensionRequest){p.extensions=[];for(var f=0;f<p.value.length;++f)p.extensions.push(i.certificateExtensionFromAsn1(p.value[f]))}t.push(p)}return t};var d=function(e,t,r){var a={};if(e!==s["RSASSA-PSS"])return a;r&&(a={hash:{algorithmOid:s.sha1},mgf:{algorithmOid:s.mgf1,hash:{algorithmOid:s.sha1}},saltLength:20});var i={},o=[];if(!n.validate(t,l,i,o)){var c=new Error("Cannot read RSASSA-PSS parameter block.");throw c.errors=o,c}return void 0!==i.hashOid&&(a.hash=a.hash||{},a.hash.algorithmOid=n.derToOid(i.hashOid)),void 0!==i.maskGenOid&&(a.mgf=a.mgf||{},a.mgf.algorithmOid=n.derToOid(i.maskGenOid),a.mgf.hash=a.mgf.hash||{},a.mgf.hash.algorithmOid=n.derToOid(i.maskGenHashOid)),void 0!==i.saltLength&&(a.saltLength=i.saltLength.charCodeAt(0)),a};function y(e){for(var t,r,i=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]),s=e.attributes,o=0;o<s.length;++o){var c=(t=s[o]).value,u=n.Type.PRINTABLESTRING;"valueTagClass"in t&&(u=t.valueTagClass)===n.Type.UTF8&&(c=a.util.encodeUtf8(c)),r=n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.type).getBytes()),n.create(n.Class.UNIVERSAL,u,!1,c)])]),i.value.push(r)}return i}function g(e){for(var t,r=0;r<e.length;++r){if(void 0===(t=e[r]).name&&(t.type&&t.type in i.oids?t.name=i.oids[t.type]:t.shortName&&t.shortName in o&&(t.name=i.oids[o[t.shortName]])),void 0===t.type){if(!t.name||!(t.name in i.oids))throw(c=new Error("Attribute type not specified.")).attribute=t,c;t.type=i.oids[t.name]}if(void 0===t.shortName&&t.name&&t.name in o&&(t.shortName=o[t.name]),t.type===s.extensionRequest&&(t.valueConstructed=!0,t.valueTagClass=n.Type.SEQUENCE,!t.value&&t.extensions)){t.value=[];for(var a=0;a<t.extensions.length;++a)t.value.push(i.certificateExtensionToAsn1(m(t.extensions[a])))}var c;if(void 0===t.value)throw(c=new Error("Attribute value not specified.")).attribute=t,c}}function m(e,t){if(t=t||{},void 0===e.name&&e.id&&e.id in i.oids&&(e.name=i.oids[e.id]),void 0===e.id){if(!e.name||!(e.name in i.oids))throw(S=new Error("Extension ID not specified.")).extension=e,S;e.id=i.oids[e.name]}if(void 0!==e.value)return e;if("keyUsage"===e.name){var r=0,o=0,c=0;e.digitalSignature&&(o|=128,r=7),e.nonRepudiation&&(o|=64,r=6),e.keyEncipherment&&(o|=32,r=5),e.dataEncipherment&&(o|=16,r=4),e.keyAgreement&&(o|=8,r=3),e.keyCertSign&&(o|=4,r=2),e.cRLSign&&(o|=2,r=1),e.encipherOnly&&(o|=1,r=0),e.decipherOnly&&(c|=128,r=7);var u=String.fromCharCode(r);0!==c?u+=String.fromCharCode(o)+String.fromCharCode(c):0!==o&&(u+=String.fromCharCode(o)),e.value=n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,u)}else if("basicConstraints"===e.name)e.value=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]),e.cA&&e.value.value.push(n.create(n.Class.UNIVERSAL,n.Type.BOOLEAN,!1,String.fromCharCode(255))),"pathLenConstraint"in e&&e.value.value.push(n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.pathLenConstraint).getBytes()));else if("extKeyUsage"===e.name){e.value=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);var l=e.value.value;for(var p in e)!0===e[p]&&(p in s?l.push(n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(s[p]).getBytes())):-1!==p.indexOf(".")&&l.push(n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(p).getBytes())))}else if("nsCertType"===e.name){r=0,o=0;e.client&&(o|=128,r=7),e.server&&(o|=64,r=6),e.email&&(o|=32,r=5),e.objsign&&(o|=16,r=4),e.reserved&&(o|=8,r=3),e.sslCA&&(o|=4,r=2),e.emailCA&&(o|=2,r=1),e.objCA&&(o|=1,r=0);u=String.fromCharCode(r);0!==o&&(u+=String.fromCharCode(o)),e.value=n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,u)}else if("subjectAltName"===e.name||"issuerAltName"===e.name){e.value=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);for(var f=0;f<e.altNames.length;++f){u=(v=e.altNames[f]).value;if(7===v.type&&v.ip){if(null===(u=a.util.bytesFromIP(v.ip)))throw(S=new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.')).extension=e,S}else 8===v.type&&(u=v.oid?n.oidToDer(n.oidToDer(v.oid)):n.oidToDer(u));e.value.value.push(n.create(n.Class.CONTEXT_SPECIFIC,v.type,!1,u))}}else if("nsComment"===e.name&&t.cert){if(!/^[\x00-\x7F]*\$/.test(e.comment)||e.comment.length<1||e.comment.length>128)throw new Error('Invalid "nsComment" content.');e.value=n.create(n.Class.UNIVERSAL,n.Type.IA5STRING,!1,e.comment)}else if("subjectKeyIdentifier"===e.name&&t.cert){var h=t.cert.generateSubjectKeyIdentifier();e.subjectKeyIdentifier=h.toHex(),e.value=n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,h.getBytes())}else if("authorityKeyIdentifier"===e.name&&t.cert){e.value=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);l=e.value.value;if(e.keyIdentifier){var d=!0===e.keyIdentifier?t.cert.generateSubjectKeyIdentifier().getBytes():e.keyIdentifier;l.push(n.create(n.Class.CONTEXT_SPECIFIC,0,!1,d))}if(e.authorityCertIssuer){var g=[n.create(n.Class.CONTEXT_SPECIFIC,4,!0,[y(!0===e.authorityCertIssuer?t.cert.issuer:e.authorityCertIssuer)])];l.push(n.create(n.Class.CONTEXT_SPECIFIC,1,!0,g))}if(e.serialNumber){var m=a.util.hexToBytes(!0===e.serialNumber?t.cert.serialNumber:e.serialNumber);l.push(n.create(n.Class.CONTEXT_SPECIFIC,2,!1,m))}}else if("cRLDistributionPoints"===e.name){e.value=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);l=e.value.value;var v,C=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]),E=n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[]);for(f=0;f<e.altNames.length;++f){u=(v=e.altNames[f]).value;if(7===v.type&&v.ip){if(null===(u=a.util.bytesFromIP(v.ip)))throw(S=new Error('Extension "ip" value is not a valid IPv4 or IPv6 address.')).extension=e,S}else 8===v.type&&(u=v.oid?n.oidToDer(n.oidToDer(v.oid)):n.oidToDer(u));E.value.push(n.create(n.Class.CONTEXT_SPECIFIC,v.type,!1,u))}C.value.push(n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[E])),l.push(C)}var S;if(void 0===e.value)throw(S=new Error("Extension value not specified.")).extension=e,S;return e}function v(e,t){switch(e){case s["RSASSA-PSS"]:var r=[];return void 0!==t.hash.algorithmOid&&r.push(n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.hash.algorithmOid).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")])])),void 0!==t.mgf.algorithmOid&&r.push(n.create(n.Class.CONTEXT_SPECIFIC,1,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.mgf.algorithmOid).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.mgf.hash.algorithmOid).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")])])])),void 0!==t.saltLength&&r.push(n.create(n.Class.CONTEXT_SPECIFIC,2,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(t.saltLength).getBytes())])),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,r);default:return n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")}}function C(e){var t=n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[]);if(0===e.attributes.length)return t;for(var r=e.attributes,i=0;i<r.length;++i){var s=r[i],o=s.value,c=n.Type.UTF8;"valueTagClass"in s&&(c=s.valueTagClass),c===n.Type.UTF8&&(o=a.util.encodeUtf8(o));var u=!1;"valueConstructed"in s&&(u=s.valueConstructed);var l=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(s.type).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[n.create(n.Class.UNIVERSAL,c,u,o)])]);t.value.push(l)}return t}i.certificateFromPem=function(e,t,r){var s=a.pem.decode(e)[0];if("CERTIFICATE"!==s.type&&"X509 CERTIFICATE"!==s.type&&"TRUSTED CERTIFICATE"!==s.type){var o=new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');throw o.headerType=s.type,o}if(s.procType&&"ENCRYPTED"===s.procType.type)throw new Error("Could not convert certificate from PEM; PEM is encrypted.");var c=n.fromDer(s.body,r);return i.certificateFromAsn1(c,t)},i.certificateToPem=function(e,t){var r={type:"CERTIFICATE",body:n.toDer(i.certificateToAsn1(e)).getBytes()};return a.pem.encode(r,{maxline:t})},i.publicKeyFromPem=function(e){var t=a.pem.decode(e)[0];if("PUBLIC KEY"!==t.type&&"RSA PUBLIC KEY"!==t.type){var r=new Error('Could not convert public key from PEM; PEM header type is not "PUBLIC KEY" or "RSA PUBLIC KEY".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw new Error("Could not convert public key from PEM; PEM is encrypted.");var s=n.fromDer(t.body);return i.publicKeyFromAsn1(s)},i.publicKeyToPem=function(e,t){var r={type:"PUBLIC KEY",body:n.toDer(i.publicKeyToAsn1(e)).getBytes()};return a.pem.encode(r,{maxline:t})},i.publicKeyToRSAPublicKeyPem=function(e,t){var r={type:"RSA PUBLIC KEY",body:n.toDer(i.publicKeyToRSAPublicKey(e)).getBytes()};return a.pem.encode(r,{maxline:t})},i.getPublicKeyFingerprint=function(e,t){var r,s=(t=t||{}).md||a.md.sha1.create();switch(t.type||"RSAPublicKey"){case"RSAPublicKey":r=n.toDer(i.publicKeyToRSAPublicKey(e)).getBytes();break;case"SubjectPublicKeyInfo":r=n.toDer(i.publicKeyToAsn1(e)).getBytes();break;default:throw new Error('Unknown fingerprint type "'+t.type+'".')}s.start(),s.update(r);var o=s.digest();if("hex"===t.encoding){var c=o.toHex();return t.delimiter?c.match(/.{2}/g).join(t.delimiter):c}if("binary"===t.encoding)return o.getBytes();if(t.encoding)throw new Error('Unknown encoding "'+t.encoding+'".');return o},i.certificationRequestFromPem=function(e,t,r){var s=a.pem.decode(e)[0];if("CERTIFICATE REQUEST"!==s.type){var o=new Error('Could not convert certification request from PEM; PEM header type is not "CERTIFICATE REQUEST".');throw o.headerType=s.type,o}if(s.procType&&"ENCRYPTED"===s.procType.type)throw new Error("Could not convert certification request from PEM; PEM is encrypted.");var c=n.fromDer(s.body,r);return i.certificationRequestFromAsn1(c,t)},i.certificationRequestToPem=function(e,t){var r={type:"CERTIFICATE REQUEST",body:n.toDer(i.certificationRequestToAsn1(e)).getBytes()};return a.pem.encode(r,{maxline:t})},i.createCertificate=function(){var e={version:2,serialNumber:"00",signatureOid:null,signature:null,siginfo:{}};return e.siginfo.algorithmOid=null,e.validity={},e.validity.notBefore=new Date,e.validity.notAfter=new Date,e.issuer={},e.issuer.getField=function(t){return h(e.issuer,t)},e.issuer.addField=function(t){g([t]),e.issuer.attributes.push(t)},e.issuer.attributes=[],e.issuer.hash=null,e.subject={},e.subject.getField=function(t){return h(e.subject,t)},e.subject.addField=function(t){g([t]),e.subject.attributes.push(t)},e.subject.attributes=[],e.subject.hash=null,e.extensions=[],e.publicKey=null,e.md=null,e.setSubject=function(t,r){g(t),e.subject.attributes=t,delete e.subject.uniqueId,r&&(e.subject.uniqueId=r),e.subject.hash=null},e.setIssuer=function(t,r){g(t),e.issuer.attributes=t,delete e.issuer.uniqueId,r&&(e.issuer.uniqueId=r),e.issuer.hash=null},e.setExtensions=function(t){for(var r=0;r<t.length;++r)m(t[r],{cert:e});e.extensions=t},e.getExtension=function(t){"string"==typeof t&&(t={name:t});for(var r,a=null,n=0;null===a&&n<e.extensions.length;++n)r=e.extensions[n],(t.id&&r.id===t.id||t.name&&r.name===t.name)&&(a=r);return a},e.sign=function(t,r){e.md=r||a.md.sha1.create();var o=s[e.md.algorithm+"WithRSAEncryption"];if(!o){var c=new Error("Could not compute certificate digest. Unknown message digest algorithm OID.");throw c.algorithm=e.md.algorithm,c}e.signatureOid=e.siginfo.algorithmOid=o,e.tbsCertificate=i.getTBSCertificate(e);var u=n.toDer(e.tbsCertificate);e.md.update(u.getBytes()),e.signature=t.sign(e.md)},e.verify=function(t){var r=!1;if(!e.issued(t)){var o=t.issuer,c=e.subject;throw(y=new Error("The parent certificate did not issue the given child certificate; the child certificate's issuer does not match the parent's subject.")).expectedIssuer=o.attributes,y.actualIssuer=c.attributes,y}var u=t.md;if(null===u){if(t.signatureOid in s)switch(s[t.signatureOid]){case"sha1WithRSAEncryption":u=a.md.sha1.create();break;case"md5WithRSAEncryption":u=a.md.md5.create();break;case"sha256WithRSAEncryption":u=a.md.sha256.create();break;case"sha384WithRSAEncryption":u=a.md.sha384.create();break;case"sha512WithRSAEncryption":u=a.md.sha512.create();break;case"RSASSA-PSS":u=a.md.sha256.create()}if(null===u)throw(y=new Error("Could not compute certificate digest. Unknown signature OID.")).signatureOid=t.signatureOid,y;var l=t.tbsCertificate||i.getTBSCertificate(t),p=n.toDer(l);u.update(p.getBytes())}if(null!==u){var f;switch(t.signatureOid){case s.sha1WithRSAEncryption:f=void 0;break;case s["RSASSA-PSS"]:var h,d,y;if(void 0===(h=s[t.signatureParameters.mgf.hash.algorithmOid])||void 0===a.md[h])throw(y=new Error("Unsupported MGF hash function.")).oid=t.signatureParameters.mgf.hash.algorithmOid,y.name=h,y;if(void 0===(d=s[t.signatureParameters.mgf.algorithmOid])||void 0===a.mgf[d])throw(y=new Error("Unsupported MGF function.")).oid=t.signatureParameters.mgf.algorithmOid,y.name=d,y;if(d=a.mgf[d].create(a.md[h].create()),void 0===(h=s[t.signatureParameters.hash.algorithmOid])||void 0===a.md[h])throw{message:"Unsupported RSASSA-PSS hash function.",oid:t.signatureParameters.hash.algorithmOid,name:h};f=a.pss.create(a.md[h].create(),d,t.signatureParameters.saltLength)}r=e.publicKey.verify(u.digest().getBytes(),t.signature,f)}return r},e.isIssuer=function(t){var r=!1,a=e.issuer,n=t.subject;if(a.hash&&n.hash)r=a.hash===n.hash;else if(a.attributes.length===n.attributes.length){var i,s;r=!0;for(var o=0;r&&o<a.attributes.length;++o)i=a.attributes[o],s=n.attributes[o],i.type===s.type&&i.value===s.value||(r=!1)}return r},e.issued=function(t){return t.isIssuer(e)},e.generateSubjectKeyIdentifier=function(){return i.getPublicKeyFingerprint(e.publicKey,{type:"RSAPublicKey"})},e.verifySubjectKeyIdentifier=function(){for(var t=s.subjectKeyIdentifier,r=0;r<e.extensions.length;++r){var n=e.extensions[r];if(n.id===t){var i=e.generateSubjectKeyIdentifier().getBytes();return a.util.hexToBytes(n.subjectKeyIdentifier)===i}}return!1},e},i.certificateFromAsn1=function(e,t){var r={},o=[];if(!n.validate(e,u,r,o))throw(f=new Error("Cannot read X.509 certificate. ASN.1 object is not an X509v3 Certificate.")).errors=o,f;if(n.derToOid(r.publicKeyOid)!==i.oids.rsaEncryption)throw new Error("Cannot read public key. OID is not RSA.");var c=i.createCertificate();c.version=r.certVersion?r.certVersion.charCodeAt(0):0;var l=a.util.createBuffer(r.certSerialNumber);c.serialNumber=l.toHex(),c.signatureOid=a.asn1.derToOid(r.certSignatureOid),c.signatureParameters=d(c.signatureOid,r.certSignatureParams,!0),c.siginfo.algorithmOid=a.asn1.derToOid(r.certinfoSignatureOid),c.siginfo.parameters=d(c.siginfo.algorithmOid,r.certinfoSignatureParams,!1),c.signature=r.certSignature;var p=[];if(void 0!==r.certValidity1UTCTime&&p.push(n.utcTimeToDate(r.certValidity1UTCTime)),void 0!==r.certValidity2GeneralizedTime&&p.push(n.generalizedTimeToDate(r.certValidity2GeneralizedTime)),void 0!==r.certValidity3UTCTime&&p.push(n.utcTimeToDate(r.certValidity3UTCTime)),void 0!==r.certValidity4GeneralizedTime&&p.push(n.generalizedTimeToDate(r.certValidity4GeneralizedTime)),p.length>2)throw new Error("Cannot read notBefore/notAfter validity times; more than two times were provided in the certificate.");if(p.length<2)throw new Error("Cannot read notBefore/notAfter validity times; they were not provided as either UTCTime or GeneralizedTime.");if(c.validity.notBefore=p[0],c.validity.notAfter=p[1],c.tbsCertificate=r.tbsCertificate,t){var f;if(c.md=null,c.signatureOid in s)switch(s[c.signatureOid]){case"sha1WithRSAEncryption":c.md=a.md.sha1.create();break;case"md5WithRSAEncryption":c.md=a.md.md5.create();break;case"sha256WithRSAEncryption":c.md=a.md.sha256.create();break;case"sha384WithRSAEncryption":c.md=a.md.sha384.create();break;case"sha512WithRSAEncryption":c.md=a.md.sha512.create();break;case"RSASSA-PSS":c.md=a.md.sha256.create()}if(null===c.md)throw(f=new Error("Could not compute certificate digest. Unknown signature OID.")).signatureOid=c.signatureOid,f;var y=n.toDer(c.tbsCertificate);c.md.update(y.getBytes())}var m=a.md.sha1.create();c.issuer.getField=function(e){return h(c.issuer,e)},c.issuer.addField=function(e){g([e]),c.issuer.attributes.push(e)},c.issuer.attributes=i.RDNAttributesAsArray(r.certIssuer,m),r.certIssuerUniqueId&&(c.issuer.uniqueId=r.certIssuerUniqueId),c.issuer.hash=m.digest().toHex();var v=a.md.sha1.create();return c.subject.getField=function(e){return h(c.subject,e)},c.subject.addField=function(e){g([e]),c.subject.attributes.push(e)},c.subject.attributes=i.RDNAttributesAsArray(r.certSubject,v),r.certSubjectUniqueId&&(c.subject.uniqueId=r.certSubjectUniqueId),c.subject.hash=v.digest().toHex(),r.certExtensions?c.extensions=i.certificateExtensionsFromAsn1(r.certExtensions):c.extensions=[],c.publicKey=i.publicKeyFromAsn1(r.subjectPublicKeyInfo),c},i.certificateExtensionsFromAsn1=function(e){for(var t=[],r=0;r<e.value.length;++r)for(var a=e.value[r],n=0;n<a.value.length;++n)t.push(i.certificateExtensionFromAsn1(a.value[n]));return t},i.certificateExtensionFromAsn1=function(e){var t={};if(t.id=n.derToOid(e.value[0].value),t.critical=!1,e.value[1].type===n.Type.BOOLEAN?(t.critical=0!==e.value[1].value.charCodeAt(0),t.value=e.value[2].value):t.value=e.value[1].value,t.id in s)if(t.name=s[t.id],"keyUsage"===t.name){var r=0,i=0;(c=n.fromDer(t.value)).value.length>1&&(r=c.value.charCodeAt(1),i=c.value.length>2?c.value.charCodeAt(2):0),t.digitalSignature=128==(128&r),t.nonRepudiation=64==(64&r),t.keyEncipherment=32==(32&r),t.dataEncipherment=16==(16&r),t.keyAgreement=8==(8&r),t.keyCertSign=4==(4&r),t.cRLSign=2==(2&r),t.encipherOnly=1==(1&r),t.decipherOnly=128==(128&i)}else if("basicConstraints"===t.name){(c=n.fromDer(t.value)).value.length>0&&c.value[0].type===n.Type.BOOLEAN?t.cA=0!==c.value[0].value.charCodeAt(0):t.cA=!1;var o=null;c.value.length>0&&c.value[0].type===n.Type.INTEGER?o=c.value[0].value:c.value.length>1&&(o=c.value[1].value),null!==o&&(t.pathLenConstraint=n.derToInteger(o))}else if("extKeyUsage"===t.name)for(var c=n.fromDer(t.value),u=0;u<c.value.length;++u){var l=n.derToOid(c.value[u].value);l in s?t[s[l]]=!0:t[l]=!0}else if("nsCertType"===t.name){r=0;(c=n.fromDer(t.value)).value.length>1&&(r=c.value.charCodeAt(1)),t.client=128==(128&r),t.server=64==(64&r),t.email=32==(32&r),t.objsign=16==(16&r),t.reserved=8==(8&r),t.sslCA=4==(4&r),t.emailCA=2==(2&r),t.objCA=1==(1&r)}else if("subjectAltName"===t.name||"issuerAltName"===t.name){var p;t.altNames=[];c=n.fromDer(t.value);for(var f=0;f<c.value.length;++f){var h={type:(p=c.value[f]).type,value:p.value};switch(t.altNames.push(h),p.type){case 1:case 2:case 6:break;case 7:h.ip=a.util.bytesToIP(p.value);break;case 8:h.oid=n.derToOid(p.value)}}}else if("subjectKeyIdentifier"===t.name){c=n.fromDer(t.value);t.subjectKeyIdentifier=a.util.bytesToHex(c.value)}return t},i.certificationRequestFromAsn1=function(e,t){var r={},o=[];if(!n.validate(e,f,r,o))throw(u=new Error("Cannot read PKCS#10 certificate request. ASN.1 object is not a PKCS#10 CertificationRequest.")).errors=o,u;if(n.derToOid(r.publicKeyOid)!==i.oids.rsaEncryption)throw new Error("Cannot read public key. OID is not RSA.");var c=i.createCertificationRequest();if(c.version=r.csrVersion?r.csrVersion.charCodeAt(0):0,c.signatureOid=a.asn1.derToOid(r.csrSignatureOid),c.signatureParameters=d(c.signatureOid,r.csrSignatureParams,!0),c.siginfo.algorithmOid=a.asn1.derToOid(r.csrSignatureOid),c.siginfo.parameters=d(c.siginfo.algorithmOid,r.csrSignatureParams,!1),c.signature=r.csrSignature,c.certificationRequestInfo=r.certificationRequestInfo,t){var u;if(c.md=null,c.signatureOid in s)switch(s[c.signatureOid]){case"sha1WithRSAEncryption":c.md=a.md.sha1.create();break;case"md5WithRSAEncryption":c.md=a.md.md5.create();break;case"sha256WithRSAEncryption":c.md=a.md.sha256.create();break;case"sha384WithRSAEncryption":c.md=a.md.sha384.create();break;case"sha512WithRSAEncryption":c.md=a.md.sha512.create();break;case"RSASSA-PSS":c.md=a.md.sha256.create()}if(null===c.md)throw(u=new Error("Could not compute certification request digest. Unknown signature OID.")).signatureOid=c.signatureOid,u;var l=n.toDer(c.certificationRequestInfo);c.md.update(l.getBytes())}var p=a.md.sha1.create();return c.subject.getField=function(e){return h(c.subject,e)},c.subject.addField=function(e){g([e]),c.subject.attributes.push(e)},c.subject.attributes=i.RDNAttributesAsArray(r.certificationRequestInfoSubject,p),c.subject.hash=p.digest().toHex(),c.publicKey=i.publicKeyFromAsn1(r.subjectPublicKeyInfo),c.getAttribute=function(e){return h(c,e)},c.addAttribute=function(e){g([e]),c.attributes.push(e)},c.attributes=i.CRIAttributesAsArray(r.certificationRequestInfoAttributes||[]),c},i.createCertificationRequest=function(){var e={version:0,signatureOid:null,signature:null,siginfo:{}};return e.siginfo.algorithmOid=null,e.subject={},e.subject.getField=function(t){return h(e.subject,t)},e.subject.addField=function(t){g([t]),e.subject.attributes.push(t)},e.subject.attributes=[],e.subject.hash=null,e.publicKey=null,e.attributes=[],e.getAttribute=function(t){return h(e,t)},e.addAttribute=function(t){g([t]),e.attributes.push(t)},e.md=null,e.setSubject=function(t){g(t),e.subject.attributes=t,e.subject.hash=null},e.setAttributes=function(t){g(t),e.attributes=t},e.sign=function(t,r){e.md=r||a.md.sha1.create();var o=s[e.md.algorithm+"WithRSAEncryption"];if(!o){var c=new Error("Could not compute certification request digest. Unknown message digest algorithm OID.");throw c.algorithm=e.md.algorithm,c}e.signatureOid=e.siginfo.algorithmOid=o,e.certificationRequestInfo=i.getCertificationRequestInfo(e);var u=n.toDer(e.certificationRequestInfo);e.md.update(u.getBytes()),e.signature=t.sign(e.md)},e.verify=function(){var t=!1,r=e.md;if(null===r){if(e.signatureOid in s)switch(s[e.signatureOid]){case"sha1WithRSAEncryption":r=a.md.sha1.create();break;case"md5WithRSAEncryption":r=a.md.md5.create();break;case"sha256WithRSAEncryption":r=a.md.sha256.create();break;case"sha384WithRSAEncryption":r=a.md.sha384.create();break;case"sha512WithRSAEncryption":r=a.md.sha512.create();break;case"RSASSA-PSS":r=a.md.sha256.create()}if(null===r)throw(f=new Error("Could not compute certification request digest. Unknown signature OID.")).signatureOid=e.signatureOid,f;var o=e.certificationRequestInfo||i.getCertificationRequestInfo(e),c=n.toDer(o);r.update(c.getBytes())}if(null!==r){var u;switch(e.signatureOid){case s.sha1WithRSAEncryption:break;case s["RSASSA-PSS"]:var l,p,f;if(void 0===(l=s[e.signatureParameters.mgf.hash.algorithmOid])||void 0===a.md[l])throw(f=new Error("Unsupported MGF hash function.")).oid=e.signatureParameters.mgf.hash.algorithmOid,f.name=l,f;if(void 0===(p=s[e.signatureParameters.mgf.algorithmOid])||void 0===a.mgf[p])throw(f=new Error("Unsupported MGF function.")).oid=e.signatureParameters.mgf.algorithmOid,f.name=p,f;if(p=a.mgf[p].create(a.md[l].create()),void 0===(l=s[e.signatureParameters.hash.algorithmOid])||void 0===a.md[l])throw(f=new Error("Unsupported RSASSA-PSS hash function.")).oid=e.signatureParameters.hash.algorithmOid,f.name=l,f;u=a.pss.create(a.md[l].create(),p,e.signatureParameters.saltLength)}t=e.publicKey.verify(r.digest().getBytes(),e.signature,u)}return t},e};var E=new Date("1950-01-01T00:00:00Z"),S=new Date("2050-01-01T00:00:00Z");function T(e){return e>=E&&e<S?n.create(n.Class.UNIVERSAL,n.Type.UTCTIME,!1,n.dateToUtcTime(e)):n.create(n.Class.UNIVERSAL,n.Type.GENERALIZEDTIME,!1,n.dateToGeneralizedTime(e))}i.getTBSCertificate=function(e){var t=T(e.validity.notBefore),r=T(e.validity.notAfter),s=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.version).getBytes())]),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,a.util.hexToBytes(e.serialNumber)),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.siginfo.algorithmOid).getBytes()),v(e.siginfo.algorithmOid,e.siginfo.parameters)]),y(e.issuer),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[t,r]),y(e.subject),i.publicKeyToAsn1(e.publicKey)]);return e.issuer.uniqueId&&s.value.push(n.create(n.Class.CONTEXT_SPECIFIC,1,!0,[n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,String.fromCharCode(0)+e.issuer.uniqueId)])),e.subject.uniqueId&&s.value.push(n.create(n.Class.CONTEXT_SPECIFIC,2,!0,[n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,String.fromCharCode(0)+e.subject.uniqueId)])),e.extensions.length>0&&s.value.push(i.certificateExtensionsToAsn1(e.extensions)),s},i.getCertificationRequestInfo=function(e){return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.version).getBytes()),y(e.subject),i.publicKeyToAsn1(e.publicKey),C(e)])},i.distinguishedNameToAsn1=function(e){return y(e)},i.certificateToAsn1=function(e){var t=e.tbsCertificate||i.getTBSCertificate(e);return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[t,n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.signatureOid).getBytes()),v(e.signatureOid,e.signatureParameters)]),n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,String.fromCharCode(0)+e.signature)])},i.certificateExtensionsToAsn1=function(e){var t=n.create(n.Class.CONTEXT_SPECIFIC,3,!0,[]),r=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);t.value.push(r);for(var a=0;a<e.length;++a)r.value.push(i.certificateExtensionToAsn1(e[a]));return t},i.certificateExtensionToAsn1=function(e){var t=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[]);t.value.push(n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.id).getBytes())),e.critical&&t.value.push(n.create(n.Class.UNIVERSAL,n.Type.BOOLEAN,!1,String.fromCharCode(255)));var r=e.value;return"string"!=typeof e.value&&(r=n.toDer(r).getBytes()),t.value.push(n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,r)),t},i.certificationRequestToAsn1=function(e){var t=e.certificationRequestInfo||i.getCertificationRequestInfo(e);return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[t,n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.signatureOid).getBytes()),v(e.signatureOid,e.signatureParameters)]),n.create(n.Class.UNIVERSAL,n.Type.BITSTRING,!1,String.fromCharCode(0)+e.signature)])},i.createCaStore=function(e){var t={certs:{}};function r(e){return s(e),t.certs[e.hash]||null}function s(e){if(!e.hash){var t=a.md.sha1.create();e.attributes=i.RDNAttributesAsArray(y(e),t),e.hash=t.digest().toHex()}}if(t.getIssuer=function(e){return r(e.issuer)},t.addCertificate=function(e){if("string"==typeof e&&(e=a.pki.certificateFromPem(e)),s(e.subject),!t.hasCertificate(e))if(e.subject.hash in t.certs){var r=t.certs[e.subject.hash];a.util.isArray(r)||(r=[r]),r.push(e),t.certs[e.subject.hash]=r}else t.certs[e.subject.hash]=e},t.hasCertificate=function(e){"string"==typeof e&&(e=a.pki.certificateFromPem(e));var t=r(e.subject);if(!t)return!1;a.util.isArray(t)||(t=[t]);for(var s=n.toDer(i.certificateToAsn1(e)).getBytes(),o=0;o<t.length;++o){if(s===n.toDer(i.certificateToAsn1(t[o])).getBytes())return!0}return!1},t.listAllCertificates=function(){var e=[];for(var r in t.certs)if(t.certs.hasOwnProperty(r)){var n=t.certs[r];if(a.util.isArray(n))for(var i=0;i<n.length;++i)e.push(n[i]);else e.push(n)}return e},t.removeCertificate=function(e){var o;if("string"==typeof e&&(e=a.pki.certificateFromPem(e)),s(e.subject),!t.hasCertificate(e))return null;var c=r(e.subject);if(!a.util.isArray(c))return o=t.certs[e.subject.hash],delete t.certs[e.subject.hash],o;for(var u=n.toDer(i.certificateToAsn1(e)).getBytes(),l=0;l<c.length;++l){u===n.toDer(i.certificateToAsn1(c[l])).getBytes()&&(o=c[l],c.splice(l,1))}return 0===c.length&&delete t.certs[e.subject.hash],o},e)for(var o=0;o<e.length;++o){var c=e[o];t.addCertificate(c)}return t},i.certificateError={bad_certificate:"forge.pki.BadCertificate",unsupported_certificate:"forge.pki.UnsupportedCertificate",certificate_revoked:"forge.pki.CertificateRevoked",certificate_expired:"forge.pki.CertificateExpired",certificate_unknown:"forge.pki.CertificateUnknown",unknown_ca:"forge.pki.UnknownCertificateAuthority"},i.verifyCertificateChain=function(e,t,r){"function"==typeof r&&(r={verify:r}),r=r||{};var n=(t=t.slice(0)).slice(0),s=r.validityCheckDate;void 0===s&&(s=new Date);var o=!0,c=null,u=0;do{var l=t.shift(),p=null,f=!1;if(s&&(s<l.validity.notBefore||s>l.validity.notAfter)&&(c={message:"Certificate is not valid yet or has expired.",error:i.certificateError.certificate_expired,notBefore:l.validity.notBefore,notAfter:l.validity.notAfter,now:s}),null===c){if(null===(p=t[0]||e.getIssuer(l))&&l.isIssuer(l)&&(f=!0,p=l),p){var h=p;a.util.isArray(h)||(h=[h]);for(var d=!1;!d&&h.length>0;){p=h.shift();try{d=p.verify(l)}catch(e){}}d||(c={message:"Certificate signature is invalid.",error:i.certificateError.bad_certificate})}null!==c||p&&!f||e.hasCertificate(l)||(c={message:"Certificate is not trusted.",error:i.certificateError.unknown_ca})}if(null===c&&p&&!l.isIssuer(p)&&(c={message:"Certificate issuer is invalid.",error:i.certificateError.bad_certificate}),null===c)for(var y={keyUsage:!0,basicConstraints:!0},g=0;null===c&&g<l.extensions.length;++g){var m=l.extensions[g];m.critical&&!(m.name in y)&&(c={message:"Certificate has an unsupported critical extension.",error:i.certificateError.unsupported_certificate})}if(null===c&&(!o||0===t.length&&(!p||f))){var v=l.getExtension("basicConstraints"),C=l.getExtension("keyUsage");if(null!==C&&(C.keyCertSign&&null!==v||(c={message:"Certificate keyUsage or basicConstraints conflict or indicate that the certificate is not a CA. If the certificate is the only one in the chain or isn't the first then the certificate must be a valid CA.",error:i.certificateError.bad_certificate})),null!==c||null===v||v.cA||(c={message:"Certificate basicConstraints indicates the certificate is not a CA.",error:i.certificateError.bad_certificate}),null===c&&null!==C&&"pathLenConstraint"in v)u-1>v.pathLenConstraint&&(c={message:"Certificate basicConstraints pathLenConstraint violated.",error:i.certificateError.bad_certificate})}var E=null===c||c.error,S=r.verify?r.verify(E,u,n):E;if(!0!==S)throw!0===E&&(c={message:"The application rejected the certificate.",error:i.certificateError.bad_certificate}),(S||0===S)&&("object"!=typeof S||a.util.isArray(S)?"string"==typeof S&&(c.error=S):(S.message&&(c.message=S.message),S.error&&(c.error=S.error))),c;c=null,o=!1,++u}while(t.length>0);return!0}},function(e,t,r){var a=r(0);r(2),r(1),(e.exports=a.pss=a.pss||{}).create=function(e){3===arguments.length&&(e={md:arguments[0],mgf:arguments[1],saltLength:arguments[2]});var t,r=e.md,n=e.mgf,i=r.digestLength,s=e.salt||null;if("string"==typeof s&&(s=a.util.createBuffer(s)),"saltLength"in e)t=e.saltLength;else{if(null===s)throw new Error("Salt length not specified or specific salt not given.");t=s.length()}if(null!==s&&s.length()!==t)throw new Error("Given salt length does not match length of given salt.");var o=e.prng||a.random,c={encode:function(e,c){var u,l,p=c-1,f=Math.ceil(p/8),h=e.digest().getBytes();if(f<i+t+2)throw new Error("Message is too long to encrypt.");l=null===s?o.getBytesSync(t):s.bytes();var d=new a.util.ByteBuffer;d.fillWithByte(0,8),d.putBytes(h),d.putBytes(l),r.start(),r.update(d.getBytes());var y=r.digest().getBytes(),g=new a.util.ByteBuffer;g.fillWithByte(0,f-t-i-2),g.putByte(1),g.putBytes(l);var m=g.getBytes(),v=f-i-1,C=n.generate(y,v),E="";for(u=0;u<v;u++)E+=String.fromCharCode(m.charCodeAt(u)^C.charCodeAt(u));var S=65280>>8*f-p&255;return(E=String.fromCharCode(E.charCodeAt(0)&~S)+E.substr(1))+y+String.fromCharCode(188)},verify:function(e,s,o){var c,u=o-1,l=Math.ceil(u/8);if(s=s.substr(-l),l<i+t+2)throw new Error("Inconsistent parameters to PSS signature verification.");if(188!==s.charCodeAt(l-1))throw new Error("Encoded message does not end in 0xBC.");var p=l-i-1,f=s.substr(0,p),h=s.substr(p,i),d=65280>>8*l-u&255;if(0!=(f.charCodeAt(0)&d))throw new Error("Bits beyond keysize not zero as expected.");var y=n.generate(h,p),g="";for(c=0;c<p;c++)g+=String.fromCharCode(f.charCodeAt(c)^y.charCodeAt(c));g=String.fromCharCode(g.charCodeAt(0)&~d)+g.substr(1);var m=l-i-t-2;for(c=0;c<m;c++)if(0!==g.charCodeAt(c))throw new Error("Leftmost octets not zero as expected");if(1!==g.charCodeAt(m))throw new Error("Inconsistent PSS signature, 0x01 marker not found");var v=g.substr(-t),C=new a.util.ByteBuffer;return C.fillWithByte(0,8),C.putBytes(e),C.putBytes(v),r.start(),r.update(C.getBytes()),h===r.digest().getBytes()}};return c}},function(e,t,r){var a=r(0);r(1),a.cipher=a.cipher||{};var n=e.exports=a.cipher.modes=a.cipher.modes||{};function i(e,t){if("string"==typeof e&&(e=a.util.createBuffer(e)),a.util.isArray(e)&&e.length>4){var r=e;e=a.util.createBuffer();for(var n=0;n<r.length;++n)e.putByte(r[n])}if(e.length()<t)throw new Error("Invalid IV length; got "+e.length()+" bytes and expected "+t+" bytes.");if(!a.util.isArray(e)){var i=[],s=t/4;for(n=0;n<s;++n)i.push(e.getInt32());e=i}return e}function s(e){e[e.length-1]=e[e.length-1]+1&4294967295}function o(e){return[e/4294967296|0,4294967295&e]}n.ecb=function(e){e=e||{},this.name="ECB",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints)},n.ecb.prototype.start=function(e){},n.ecb.prototype.encrypt=function(e,t,r){if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;for(var a=0;a<this._ints;++a)this._inBlock[a]=e.getInt32();this.cipher.encrypt(this._inBlock,this._outBlock);for(a=0;a<this._ints;++a)t.putInt32(this._outBlock[a])},n.ecb.prototype.decrypt=function(e,t,r){if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;for(var a=0;a<this._ints;++a)this._inBlock[a]=e.getInt32();this.cipher.decrypt(this._inBlock,this._outBlock);for(a=0;a<this._ints;++a)t.putInt32(this._outBlock[a])},n.ecb.prototype.pad=function(e,t){var r=e.length()===this.blockSize?this.blockSize:this.blockSize-e.length();return e.fillWithByte(r,r),!0},n.ecb.prototype.unpad=function(e,t){if(t.overflow>0)return!1;var r=e.length(),a=e.at(r-1);return!(a>this.blockSize<<2)&&(e.truncate(a),!0)},n.cbc=function(e){e=e||{},this.name="CBC",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints)},n.cbc.prototype.start=function(e){if(null===e.iv){if(!this._prev)throw new Error("Invalid IV parameter.");this._iv=this._prev.slice(0)}else{if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=i(e.iv,this.blockSize),this._prev=this._iv.slice(0)}},n.cbc.prototype.encrypt=function(e,t,r){if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;for(var a=0;a<this._ints;++a)this._inBlock[a]=this._prev[a]^e.getInt32();this.cipher.encrypt(this._inBlock,this._outBlock);for(a=0;a<this._ints;++a)t.putInt32(this._outBlock[a]);this._prev=this._outBlock},n.cbc.prototype.decrypt=function(e,t,r){if(e.length()<this.blockSize&&!(r&&e.length()>0))return!0;for(var a=0;a<this._ints;++a)this._inBlock[a]=e.getInt32();this.cipher.decrypt(this._inBlock,this._outBlock);for(a=0;a<this._ints;++a)t.putInt32(this._prev[a]^this._outBlock[a]);this._prev=this._inBlock.slice(0)},n.cbc.prototype.pad=function(e,t){var r=e.length()===this.blockSize?this.blockSize:this.blockSize-e.length();return e.fillWithByte(r,r),!0},n.cbc.prototype.unpad=function(e,t){if(t.overflow>0)return!1;var r=e.length(),a=e.at(r-1);return!(a>this.blockSize<<2)&&(e.truncate(a),!0)},n.cfb=function(e){e=e||{},this.name="CFB",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialBlock=new Array(this._ints),this._partialOutput=a.util.createBuffer(),this._partialBytes=0},n.cfb.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=i(e.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0},n.cfb.prototype.encrypt=function(e,t,r){var a=e.length();if(0===a)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&a>=this.blockSize)for(var n=0;n<this._ints;++n)this._inBlock[n]=e.getInt32()^this._outBlock[n],t.putInt32(this._inBlock[n]);else{var i=(this.blockSize-a)%this.blockSize;i>0&&(i=this.blockSize-i),this._partialOutput.clear();for(n=0;n<this._ints;++n)this._partialBlock[n]=e.getInt32()^this._outBlock[n],this._partialOutput.putInt32(this._partialBlock[n]);if(i>0)e.read-=this.blockSize;else for(n=0;n<this._ints;++n)this._inBlock[n]=this._partialBlock[n];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),i>0&&!r)return t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=i,!0;t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=0}},n.cfb.prototype.decrypt=function(e,t,r){var a=e.length();if(0===a)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&a>=this.blockSize)for(var n=0;n<this._ints;++n)this._inBlock[n]=e.getInt32(),t.putInt32(this._inBlock[n]^this._outBlock[n]);else{var i=(this.blockSize-a)%this.blockSize;i>0&&(i=this.blockSize-i),this._partialOutput.clear();for(n=0;n<this._ints;++n)this._partialBlock[n]=e.getInt32(),this._partialOutput.putInt32(this._partialBlock[n]^this._outBlock[n]);if(i>0)e.read-=this.blockSize;else for(n=0;n<this._ints;++n)this._inBlock[n]=this._partialBlock[n];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),i>0&&!r)return t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=i,!0;t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=0}},n.ofb=function(e){e=e||{},this.name="OFB",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialOutput=a.util.createBuffer(),this._partialBytes=0},n.ofb.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=i(e.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0},n.ofb.prototype.encrypt=function(e,t,r){var a=e.length();if(0===e.length())return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&a>=this.blockSize)for(var n=0;n<this._ints;++n)t.putInt32(e.getInt32()^this._outBlock[n]),this._inBlock[n]=this._outBlock[n];else{var i=(this.blockSize-a)%this.blockSize;i>0&&(i=this.blockSize-i),this._partialOutput.clear();for(n=0;n<this._ints;++n)this._partialOutput.putInt32(e.getInt32()^this._outBlock[n]);if(i>0)e.read-=this.blockSize;else for(n=0;n<this._ints;++n)this._inBlock[n]=this._outBlock[n];if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),i>0&&!r)return t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=i,!0;t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=0}},n.ofb.prototype.decrypt=n.ofb.prototype.encrypt,n.ctr=function(e){e=e||{},this.name="CTR",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=null,this._outBlock=new Array(this._ints),this._partialOutput=a.util.createBuffer(),this._partialBytes=0},n.ctr.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");this._iv=i(e.iv,this.blockSize),this._inBlock=this._iv.slice(0),this._partialBytes=0},n.ctr.prototype.encrypt=function(e,t,r){var a=e.length();if(0===a)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&a>=this.blockSize)for(var n=0;n<this._ints;++n)t.putInt32(e.getInt32()^this._outBlock[n]);else{var i=(this.blockSize-a)%this.blockSize;i>0&&(i=this.blockSize-i),this._partialOutput.clear();for(n=0;n<this._ints;++n)this._partialOutput.putInt32(e.getInt32()^this._outBlock[n]);if(i>0&&(e.read-=this.blockSize),this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),i>0&&!r)return t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=i,!0;t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=0}s(this._inBlock)},n.ctr.prototype.decrypt=n.ctr.prototype.encrypt,n.gcm=function(e){e=e||{},this.name="GCM",this.cipher=e.cipher,this.blockSize=e.blockSize||16,this._ints=this.blockSize/4,this._inBlock=new Array(this._ints),this._outBlock=new Array(this._ints),this._partialOutput=a.util.createBuffer(),this._partialBytes=0,this._R=3774873600},n.gcm.prototype.start=function(e){if(!("iv"in e))throw new Error("Invalid IV parameter.");var t,r=a.util.createBuffer(e.iv);if(this._cipherLength=0,t="additionalData"in e?a.util.createBuffer(e.additionalData):a.util.createBuffer(),this._tagLength="tagLength"in e?e.tagLength:128,this._tag=null,e.decrypt&&(this._tag=a.util.createBuffer(e.tag).getBytes(),this._tag.length!==this._tagLength/8))throw new Error("Authentication tag does not match tag length.");this._hashBlock=new Array(this._ints),this.tag=null,this._hashSubkey=new Array(this._ints),this.cipher.encrypt([0,0,0,0],this._hashSubkey),this.componentBits=4,this._m=this.generateHashTable(this._hashSubkey,this.componentBits);var n=r.length();if(12===n)this._j0=[r.getInt32(),r.getInt32(),r.getInt32(),1];else{for(this._j0=[0,0,0,0];r.length()>0;)this._j0=this.ghash(this._hashSubkey,this._j0,[r.getInt32(),r.getInt32(),r.getInt32(),r.getInt32()]);this._j0=this.ghash(this._hashSubkey,this._j0,[0,0].concat(o(8*n)))}this._inBlock=this._j0.slice(0),s(this._inBlock),this._partialBytes=0,t=a.util.createBuffer(t),this._aDataLength=o(8*t.length());var i=t.length()%this.blockSize;for(i&&t.fillWithByte(0,this.blockSize-i),this._s=[0,0,0,0];t.length()>0;)this._s=this.ghash(this._hashSubkey,this._s,[t.getInt32(),t.getInt32(),t.getInt32(),t.getInt32()])},n.gcm.prototype.encrypt=function(e,t,r){var a=e.length();if(0===a)return!0;if(this.cipher.encrypt(this._inBlock,this._outBlock),0===this._partialBytes&&a>=this.blockSize){for(var n=0;n<this._ints;++n)t.putInt32(this._outBlock[n]^=e.getInt32());this._cipherLength+=this.blockSize}else{var i=(this.blockSize-a)%this.blockSize;i>0&&(i=this.blockSize-i),this._partialOutput.clear();for(n=0;n<this._ints;++n)this._partialOutput.putInt32(e.getInt32()^this._outBlock[n]);if(i<=0||r){if(r){var o=a%this.blockSize;this._cipherLength+=o,this._partialOutput.truncate(this.blockSize-o)}else this._cipherLength+=this.blockSize;for(n=0;n<this._ints;++n)this._outBlock[n]=this._partialOutput.getInt32();this._partialOutput.read-=this.blockSize}if(this._partialBytes>0&&this._partialOutput.getBytes(this._partialBytes),i>0&&!r)return e.read-=this.blockSize,t.putBytes(this._partialOutput.getBytes(i-this._partialBytes)),this._partialBytes=i,!0;t.putBytes(this._partialOutput.getBytes(a-this._partialBytes)),this._partialBytes=0}this._s=this.ghash(this._hashSubkey,this._s,this._outBlock),s(this._inBlock)},n.gcm.prototype.decrypt=function(e,t,r){var a=e.length();if(a<this.blockSize&&!(r&&a>0))return!0;this.cipher.encrypt(this._inBlock,this._outBlock),s(this._inBlock),this._hashBlock[0]=e.getInt32(),this._hashBlock[1]=e.getInt32(),this._hashBlock[2]=e.getInt32(),this._hashBlock[3]=e.getInt32(),this._s=this.ghash(this._hashSubkey,this._s,this._hashBlock);for(var n=0;n<this._ints;++n)t.putInt32(this._outBlock[n]^this._hashBlock[n]);a<this.blockSize?this._cipherLength+=a%this.blockSize:this._cipherLength+=this.blockSize},n.gcm.prototype.afterFinish=function(e,t){var r=!0;t.decrypt&&t.overflow&&e.truncate(this.blockSize-t.overflow),this.tag=a.util.createBuffer();var n=this._aDataLength.concat(o(8*this._cipherLength));this._s=this.ghash(this._hashSubkey,this._s,n);var i=[];this.cipher.encrypt(this._j0,i);for(var s=0;s<this._ints;++s)this.tag.putInt32(this._s[s]^i[s]);return this.tag.truncate(this.tag.length()%(this._tagLength/8)),t.decrypt&&this.tag.bytes()!==this._tag&&(r=!1),r},n.gcm.prototype.multiply=function(e,t){for(var r=[0,0,0,0],a=t.slice(0),n=0;n<128;++n){e[n/32|0]&1<<31-n%32&&(r[0]^=a[0],r[1]^=a[1],r[2]^=a[2],r[3]^=a[3]),this.pow(a,a)}return r},n.gcm.prototype.pow=function(e,t){for(var r=1&e[3],a=3;a>0;--a)t[a]=e[a]>>>1|(1&e[a-1])<<31;t[0]=e[0]>>>1,r&&(t[0]^=this._R)},n.gcm.prototype.tableMultiply=function(e){for(var t=[0,0,0,0],r=0;r<32;++r){var a=e[r/8|0]>>>4*(7-r%8)&15,n=this._m[r][a];t[0]^=n[0],t[1]^=n[1],t[2]^=n[2],t[3]^=n[3]}return t},n.gcm.prototype.ghash=function(e,t,r){return t[0]^=r[0],t[1]^=r[1],t[2]^=r[2],t[3]^=r[3],this.tableMultiply(t)},n.gcm.prototype.generateHashTable=function(e,t){for(var r=8/t,a=4*r,n=16*r,i=new Array(n),s=0;s<n;++s){var o=[0,0,0,0],c=(a-1-s%a)*t;o[s/a|0]=1<<t-1<<c,i[s]=this.generateSubHashTable(this.multiply(o,e),t)}return i},n.gcm.prototype.generateSubHashTable=function(e,t){var r=1<<t,a=r>>>1,n=new Array(r);n[a]=e.slice(0);for(var i=a>>>1;i>0;)this.pow(n[2*i],n[i]=[]),i>>=1;for(i=2;i<a;){for(var s=1;s<i;++s){var o=n[i],c=n[s];n[i+s]=[o[0]^c[0],o[1]^c[1],o[2]^c[2],o[3]^c[3]]}i*=2}for(n[0]=[0,0,0,0],i=a+1;i<r;++i){var u=n[i^a];n[i]=[e[0]^u[0],e[1]^u[1],e[2]^u[2],e[3]^u[3]]}return n}},function(e,t,r){var a=r(0);r(3),r(8),r(14),r(7),r(21),r(2),r(9),r(1);var n=function(e,t,r,n){var i=a.util.createBuffer(),s=e.length>>1,o=s+(1&e.length),c=e.substr(0,o),u=e.substr(s,o),l=a.util.createBuffer(),p=a.hmac.create();r=t+r;var f=Math.ceil(n/16),h=Math.ceil(n/20);p.start("MD5",c);var d=a.util.createBuffer();l.putBytes(r);for(var y=0;y<f;++y)p.start(null,null),p.update(l.getBytes()),l.putBuffer(p.digest()),p.start(null,null),p.update(l.bytes()+r),d.putBuffer(p.digest());p.start("SHA1",u);var g=a.util.createBuffer();l.clear(),l.putBytes(r);for(y=0;y<h;++y)p.start(null,null),p.update(l.getBytes()),l.putBuffer(p.digest()),p.start(null,null),p.update(l.bytes()+r),g.putBuffer(p.digest());return i.putBytes(a.util.xorBytes(d.getBytes(),g.getBytes(),n)),i},i=function(e,t,r){var n=!1;try{var i=e.deflate(t.fragment.getBytes());t.fragment=a.util.createBuffer(i),t.length=i.length,n=!0}catch(e){}return n},s=function(e,t,r){var n=!1;try{var i=e.inflate(t.fragment.getBytes());t.fragment=a.util.createBuffer(i),t.length=i.length,n=!0}catch(e){}return n},o=function(e,t){var r=0;switch(t){case 1:r=e.getByte();break;case 2:r=e.getInt16();break;case 3:r=e.getInt24();break;case 4:r=e.getInt32()}return a.util.createBuffer(e.getBytes(r))},c=function(e,t,r){e.putInt(r.length(),t<<3),e.putBuffer(r)},u={Versions:{TLS_1_0:{major:3,minor:1},TLS_1_1:{major:3,minor:2},TLS_1_2:{major:3,minor:3}}};u.SupportedVersions=[u.Versions.TLS_1_1,u.Versions.TLS_1_0],u.Version=u.SupportedVersions[0],u.MaxFragment=15360,u.ConnectionEnd={server:0,client:1},u.PRFAlgorithm={tls_prf_sha256:0},u.BulkCipherAlgorithm={none:null,rc4:0,des3:1,aes:2},u.CipherType={stream:0,block:1,aead:2},u.MACAlgorithm={none:null,hmac_md5:0,hmac_sha1:1,hmac_sha256:2,hmac_sha384:3,hmac_sha512:4},u.CompressionMethod={none:0,deflate:1},u.ContentType={change_cipher_spec:20,alert:21,handshake:22,application_data:23,heartbeat:24},u.HandshakeType={hello_request:0,client_hello:1,server_hello:2,certificate:11,server_key_exchange:12,certificate_request:13,server_hello_done:14,certificate_verify:15,client_key_exchange:16,finished:20},u.Alert={},u.Alert.Level={warning:1,fatal:2},u.Alert.Description={close_notify:0,unexpected_message:10,bad_record_mac:20,decryption_failed:21,record_overflow:22,decompression_failure:30,handshake_failure:40,bad_certificate:42,unsupported_certificate:43,certificate_revoked:44,certificate_expired:45,certificate_unknown:46,illegal_parameter:47,unknown_ca:48,access_denied:49,decode_error:50,decrypt_error:51,export_restriction:60,protocol_version:70,insufficient_security:71,internal_error:80,user_canceled:90,no_renegotiation:100},u.HeartbeatMessageType={heartbeat_request:1,heartbeat_response:2},u.CipherSuites={},u.getCipherSuite=function(e){var t=null;for(var r in u.CipherSuites){var a=u.CipherSuites[r];if(a.id[0]===e.charCodeAt(0)&&a.id[1]===e.charCodeAt(1)){t=a;break}}return t},u.handleUnexpected=function(e,t){!e.open&&e.entity===u.ConnectionEnd.client||e.error(e,{message:"Unexpected message. Received TLS record out of order.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.unexpected_message}})},u.handleHelloRequest=function(e,t,r){!e.handshaking&&e.handshakes>0&&(u.queue(e,u.createAlert(e,{level:u.Alert.Level.warning,description:u.Alert.Description.no_renegotiation})),u.flush(e)),e.process()},u.parseHelloMessage=function(e,t,r){var n=null,i=e.entity===u.ConnectionEnd.client;if(r<38)e.error(e,{message:i?"Invalid ServerHello message. Message too short.":"Invalid ClientHello message. Message too short.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}});else{var s=t.fragment,c=s.length();if(n={version:{major:s.getByte(),minor:s.getByte()},random:a.util.createBuffer(s.getBytes(32)),session_id:o(s,1),extensions:[]},i?(n.cipher_suite=s.getBytes(2),n.compression_method=s.getByte()):(n.cipher_suites=o(s,2),n.compression_methods=o(s,1)),(c=r-(c-s.length()))>0){for(var l=o(s,2);l.length()>0;)n.extensions.push({type:[l.getByte(),l.getByte()],data:o(l,2)});if(!i)for(var p=0;p<n.extensions.length;++p){var f=n.extensions[p];if(0===f.type[0]&&0===f.type[1])for(var h=o(f.data,2);h.length()>0;){if(0!==h.getByte())break;e.session.extensions.server_name.serverNameList.push(o(h,2).getBytes())}}}if(e.session.version&&(n.version.major!==e.session.version.major||n.version.minor!==e.session.version.minor))return e.error(e,{message:"TLS version change is disallowed during renegotiation.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.protocol_version}});if(i)e.session.cipherSuite=u.getCipherSuite(n.cipher_suite);else for(var d=a.util.createBuffer(n.cipher_suites.bytes());d.length()>0&&(e.session.cipherSuite=u.getCipherSuite(d.getBytes(2)),null===e.session.cipherSuite););if(null===e.session.cipherSuite)return e.error(e,{message:"No cipher suites in common.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.handshake_failure},cipherSuite:a.util.bytesToHex(n.cipher_suite)});e.session.compressionMethod=i?n.compression_method:u.CompressionMethod.none}return n},u.createSecurityParameters=function(e,t){var r=e.entity===u.ConnectionEnd.client,a=t.random.bytes(),n=r?e.session.sp.client_random:a,i=r?a:u.createRandom().getBytes();e.session.sp={entity:e.entity,prf_algorithm:u.PRFAlgorithm.tls_prf_sha256,bulk_cipher_algorithm:null,cipher_type:null,enc_key_length:null,block_length:null,fixed_iv_length:null,record_iv_length:null,mac_algorithm:null,mac_length:null,mac_key_length:null,compression_algorithm:e.session.compressionMethod,pre_master_secret:null,master_secret:null,client_random:n,server_random:i}},u.handleServerHello=function(e,t,r){var a=u.parseHelloMessage(e,t,r);if(!e.fail){if(!(a.version.minor<=e.version.minor))return e.error(e,{message:"Incompatible TLS version.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.protocol_version}});e.version.minor=a.version.minor,e.session.version=e.version;var n=a.session_id.bytes();n.length>0&&n===e.session.id?(e.expect=d,e.session.resuming=!0,e.session.sp.server_random=a.random.bytes()):(e.expect=l,e.session.resuming=!1,u.createSecurityParameters(e,a)),e.session.id=n,e.process()}},u.handleClientHello=function(e,t,r){var n=u.parseHelloMessage(e,t,r);if(!e.fail){var i=n.session_id.bytes(),s=null;if(e.sessionCache&&(null===(s=e.sessionCache.getSession(i))?i="":(s.version.major!==n.version.major||s.version.minor>n.version.minor)&&(s=null,i="")),0===i.length&&(i=a.random.getBytes(32)),e.session.id=i,e.session.clientHelloVersion=n.version,e.session.sp={},s)e.version=e.session.version=s.version,e.session.sp=s.sp;else{for(var o,c=1;c<u.SupportedVersions.length&&!((o=u.SupportedVersions[c]).minor<=n.version.minor);++c);e.version={major:o.major,minor:o.minor},e.session.version=e.version}null!==s?(e.expect=S,e.session.resuming=!0,e.session.sp.client_random=n.random.bytes()):(e.expect=!1!==e.verifyClient?v:C,e.session.resuming=!1,u.createSecurityParameters(e,n)),e.open=!0,u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createServerHello(e)})),e.session.resuming?(u.queue(e,u.createRecord(e,{type:u.ContentType.change_cipher_spec,data:u.createChangeCipherSpec()})),e.state.pending=u.createConnectionState(e),e.state.current.write=e.state.pending.write,u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createFinished(e)}))):(u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createCertificate(e)})),e.fail||(u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createServerKeyExchange(e)})),!1!==e.verifyClient&&u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createCertificateRequest(e)})),u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createServerHelloDone(e)})))),u.flush(e),e.process()}},u.handleCertificate=function(e,t,r){if(r<3)return e.error(e,{message:"Invalid Certificate message. Message too short.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}});var n,i,s=t.fragment,c={certificate_list:o(s,3)},l=[];try{for(;c.certificate_list.length()>0;)n=o(c.certificate_list,3),i=a.asn1.fromDer(n),n=a.pki.certificateFromAsn1(i,!0),l.push(n)}catch(t){return e.error(e,{message:"Could not parse certificate list.",cause:t,send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.bad_certificate}})}var f=e.entity===u.ConnectionEnd.client;!f&&!0!==e.verifyClient||0!==l.length?0===l.length?e.expect=f?p:C:(f?e.session.serverCertificate=l[0]:e.session.clientCertificate=l[0],u.verifyCertificateChain(e,l)&&(e.expect=f?p:C)):e.error(e,{message:f?"No server certificate provided.":"No client certificate provided.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}}),e.process()},u.handleServerKeyExchange=function(e,t,r){if(r>0)return e.error(e,{message:"Invalid key parameters. Only RSA is supported.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.unsupported_certificate}});e.expect=f,e.process()},u.handleClientKeyExchange=function(e,t,r){if(r<48)return e.error(e,{message:"Invalid key parameters. Only RSA is supported.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.unsupported_certificate}});var n=t.fragment,i={enc_pre_master_secret:o(n,2).getBytes()},s=null;if(e.getPrivateKey)try{s=e.getPrivateKey(e,e.session.serverCertificate),s=a.pki.privateKeyFromPem(s)}catch(t){e.error(e,{message:"Could not get private key.",cause:t,send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}})}if(null===s)return e.error(e,{message:"No private key set.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}});try{var c=e.session.sp;c.pre_master_secret=s.decrypt(i.enc_pre_master_secret);var l=e.session.clientHelloVersion;if(l.major!==c.pre_master_secret.charCodeAt(0)||l.minor!==c.pre_master_secret.charCodeAt(1))throw new Error("TLS version rollback attack detected.")}catch(e){c.pre_master_secret=a.random.getBytes(48)}e.expect=S,null!==e.session.clientCertificate&&(e.expect=E),e.process()},u.handleCertificateRequest=function(e,t,r){if(r<3)return e.error(e,{message:"Invalid CertificateRequest. Message too short.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}});var a=t.fragment,n={certificate_types:o(a,1),certificate_authorities:o(a,2)};e.session.certificateRequest=n,e.expect=h,e.process()},u.handleCertificateVerify=function(e,t,r){if(r<2)return e.error(e,{message:"Invalid CertificateVerify. Message too short.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}});var n=t.fragment;n.read-=4;var i=n.bytes();n.read+=4;var s={signature:o(n,2).getBytes()},c=a.util.createBuffer();c.putBuffer(e.session.md5.digest()),c.putBuffer(e.session.sha1.digest()),c=c.getBytes();try{if(!e.session.clientCertificate.publicKey.verify(c,s.signature,"NONE"))throw new Error("CertificateVerify signature does not match.");e.session.md5.update(i),e.session.sha1.update(i)}catch(t){return e.error(e,{message:"Bad signature in CertificateVerify.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.handshake_failure}})}e.expect=S,e.process()},u.handleServerHelloDone=function(e,t,r){if(r>0)return e.error(e,{message:"Invalid ServerHelloDone message. Invalid length.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.record_overflow}});if(null===e.serverCertificate){var n={message:"No server certificate provided. Not enough security.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.insufficient_security}},i=e.verify(e,n.alert.description,0,[]);if(!0!==i)return(i||0===i)&&("object"!=typeof i||a.util.isArray(i)?"number"==typeof i&&(n.alert.description=i):(i.message&&(n.message=i.message),i.alert&&(n.alert.description=i.alert))),e.error(e,n)}null!==e.session.certificateRequest&&(t=u.createRecord(e,{type:u.ContentType.handshake,data:u.createCertificate(e)}),u.queue(e,t)),t=u.createRecord(e,{type:u.ContentType.handshake,data:u.createClientKeyExchange(e)}),u.queue(e,t),e.expect=m;var s=function(e,t){null!==e.session.certificateRequest&&null!==e.session.clientCertificate&&u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createCertificateVerify(e,t)})),u.queue(e,u.createRecord(e,{type:u.ContentType.change_cipher_spec,data:u.createChangeCipherSpec()})),e.state.pending=u.createConnectionState(e),e.state.current.write=e.state.pending.write,u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createFinished(e)})),e.expect=d,u.flush(e),e.process()};if(null===e.session.certificateRequest||null===e.session.clientCertificate)return s(e,null);u.getClientSignature(e,s)},u.handleChangeCipherSpec=function(e,t){if(1!==t.fragment.getByte())return e.error(e,{message:"Invalid ChangeCipherSpec message received.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.illegal_parameter}});var r=e.entity===u.ConnectionEnd.client;(e.session.resuming&&r||!e.session.resuming&&!r)&&(e.state.pending=u.createConnectionState(e)),e.state.current.read=e.state.pending.read,(!e.session.resuming&&r||e.session.resuming&&!r)&&(e.state.pending=null),e.expect=r?y:T,e.process()},u.handleFinished=function(e,t,r){var i=t.fragment;i.read-=4;var s=i.bytes();i.read+=4;var o=t.fragment.getBytes();(i=a.util.createBuffer()).putBuffer(e.session.md5.digest()),i.putBuffer(e.session.sha1.digest());var c=e.entity===u.ConnectionEnd.client,l=c?"server finished":"client finished",p=e.session.sp;if((i=n(p.master_secret,l,i.getBytes(),12)).getBytes()!==o)return e.error(e,{message:"Invalid verify_data in Finished message.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.decrypt_error}});e.session.md5.update(s),e.session.sha1.update(s),(e.session.resuming&&c||!e.session.resuming&&!c)&&(u.queue(e,u.createRecord(e,{type:u.ContentType.change_cipher_spec,data:u.createChangeCipherSpec()})),e.state.current.write=e.state.pending.write,e.state.pending=null,u.queue(e,u.createRecord(e,{type:u.ContentType.handshake,data:u.createFinished(e)}))),e.expect=c?g:I,e.handshaking=!1,++e.handshakes,e.peerCertificate=c?e.session.serverCertificate:e.session.clientCertificate,u.flush(e),e.isConnected=!0,e.connected(e),e.process()},u.handleAlert=function(e,t){var r,a=t.fragment,n={level:a.getByte(),description:a.getByte()};switch(n.description){case u.Alert.Description.close_notify:r="Connection closed.";break;case u.Alert.Description.unexpected_message:r="Unexpected message.";break;case u.Alert.Description.bad_record_mac:r="Bad record MAC.";break;case u.Alert.Description.decryption_failed:r="Decryption failed.";break;case u.Alert.Description.record_overflow:r="Record overflow.";break;case u.Alert.Description.decompression_failure:r="Decompression failed.";break;case u.Alert.Description.handshake_failure:r="Handshake failure.";break;case u.Alert.Description.bad_certificate:r="Bad certificate.";break;case u.Alert.Description.unsupported_certificate:r="Unsupported certificate.";break;case u.Alert.Description.certificate_revoked:r="Certificate revoked.";break;case u.Alert.Description.certificate_expired:r="Certificate expired.";break;case u.Alert.Description.certificate_unknown:r="Certificate unknown.";break;case u.Alert.Description.illegal_parameter:r="Illegal parameter.";break;case u.Alert.Description.unknown_ca:r="Unknown certificate authority.";break;case u.Alert.Description.access_denied:r="Access denied.";break;case u.Alert.Description.decode_error:r="Decode error.";break;case u.Alert.Description.decrypt_error:r="Decrypt error.";break;case u.Alert.Description.export_restriction:r="Export restriction.";break;case u.Alert.Description.protocol_version:r="Unsupported protocol version.";break;case u.Alert.Description.insufficient_security:r="Insufficient security.";break;case u.Alert.Description.internal_error:r="Internal error.";break;case u.Alert.Description.user_canceled:r="User canceled.";break;case u.Alert.Description.no_renegotiation:r="Renegotiation not supported.";break;default:r="Unknown error."}if(n.description===u.Alert.Description.close_notify)return e.close();e.error(e,{message:r,send:!1,origin:e.entity===u.ConnectionEnd.client?"server":"client",alert:n}),e.process()},u.handleHandshake=function(e,t){var r=t.fragment,n=r.getByte(),i=r.getInt24();if(i>r.length())return e.fragmented=t,t.fragment=a.util.createBuffer(),r.read-=4,e.process();e.fragmented=null,r.read-=4;var s=r.bytes(i+4);r.read+=4,n in K[e.entity][e.expect]?(e.entity!==u.ConnectionEnd.server||e.open||e.fail||(e.handshaking=!0,e.session={version:null,extensions:{server_name:{serverNameList:[]}},cipherSuite:null,compressionMethod:null,serverCertificate:null,clientCertificate:null,md5:a.md.md5.create(),sha1:a.md.sha1.create()}),n!==u.HandshakeType.hello_request&&n!==u.HandshakeType.certificate_verify&&n!==u.HandshakeType.finished&&(e.session.md5.update(s),e.session.sha1.update(s)),K[e.entity][e.expect][n](e,t,i)):u.handleUnexpected(e,t)},u.handleApplicationData=function(e,t){e.data.putBuffer(t.fragment),e.dataReady(e),e.process()},u.handleHeartbeat=function(e,t){var r=t.fragment,n=r.getByte(),i=r.getInt16(),s=r.getBytes(i);if(n===u.HeartbeatMessageType.heartbeat_request){if(e.handshaking||i>s.length)return e.process();u.queue(e,u.createRecord(e,{type:u.ContentType.heartbeat,data:u.createHeartbeat(u.HeartbeatMessageType.heartbeat_response,s)})),u.flush(e)}else if(n===u.HeartbeatMessageType.heartbeat_response){if(s!==e.expectedHeartbeatPayload)return e.process();e.heartbeatReceived&&e.heartbeatReceived(e,a.util.createBuffer(s))}e.process()};var l=1,p=2,f=3,h=4,d=5,y=6,g=7,m=8,v=1,C=2,E=3,S=4,T=5,I=6,b=u.handleUnexpected,A=u.handleChangeCipherSpec,B=u.handleAlert,N=u.handleHandshake,k=u.handleApplicationData,w=u.handleHeartbeat,R=[];R[u.ConnectionEnd.client]=[[b,B,N,b,w],[b,B,N,b,w],[b,B,N,b,w],[b,B,N,b,w],[b,B,N,b,w],[A,B,b,b,w],[b,B,N,b,w],[b,B,N,k,w],[b,B,N,b,w]],R[u.ConnectionEnd.server]=[[b,B,N,b,w],[b,B,N,b,w],[b,B,N,b,w],[b,B,N,b,w],[A,B,b,b,w],[b,B,N,b,w],[b,B,N,k,w],[b,B,N,b,w]];var _=u.handleHelloRequest,L=u.handleServerHello,U=u.handleCertificate,D=u.handleServerKeyExchange,P=u.handleCertificateRequest,V=u.handleServerHelloDone,O=u.handleFinished,K=[];K[u.ConnectionEnd.client]=[[b,b,L,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[_,b,b,b,b,b,b,b,b,b,b,U,D,P,V,b,b,b,b,b,b],[_,b,b,b,b,b,b,b,b,b,b,b,D,P,V,b,b,b,b,b,b],[_,b,b,b,b,b,b,b,b,b,b,b,b,P,V,b,b,b,b,b,b],[_,b,b,b,b,b,b,b,b,b,b,b,b,b,V,b,b,b,b,b,b],[_,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[_,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,O],[_,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[_,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]];var x=u.handleClientHello,M=u.handleClientKeyExchange,F=u.handleCertificateVerify;K[u.ConnectionEnd.server]=[[b,x,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,U,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,M,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,F,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,O],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b],[b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b,b]],u.generateKeys=function(e,t){var r=n,a=t.client_random+t.server_random;e.session.resuming||(t.master_secret=r(t.pre_master_secret,"master secret",a,48).bytes(),t.pre_master_secret=null),a=t.server_random+t.client_random;var i=2*t.mac_key_length+2*t.enc_key_length,s=e.version.major===u.Versions.TLS_1_0.major&&e.version.minor===u.Versions.TLS_1_0.minor;s&&(i+=2*t.fixed_iv_length);var o=r(t.master_secret,"key expansion",a,i),c={client_write_MAC_key:o.getBytes(t.mac_key_length),server_write_MAC_key:o.getBytes(t.mac_key_length),client_write_key:o.getBytes(t.enc_key_length),server_write_key:o.getBytes(t.enc_key_length)};return s&&(c.client_write_IV=o.getBytes(t.fixed_iv_length),c.server_write_IV=o.getBytes(t.fixed_iv_length)),c},u.createConnectionState=function(e){var t=e.entity===u.ConnectionEnd.client,r=function(){var e={sequenceNumber:[0,0],macKey:null,macLength:0,macFunction:null,cipherState:null,cipherFunction:function(e){return!0},compressionState:null,compressFunction:function(e){return!0},updateSequenceNumber:function(){4294967295===e.sequenceNumber[1]?(e.sequenceNumber[1]=0,++e.sequenceNumber[0]):++e.sequenceNumber[1]}};return e},a={read:r(),write:r()};if(a.read.update=function(e,t){return a.read.cipherFunction(t,a.read)?a.read.compressFunction(e,t,a.read)||e.error(e,{message:"Could not decompress record.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.decompression_failure}}):e.error(e,{message:"Could not decrypt record or bad MAC.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.bad_record_mac}}),!e.fail},a.write.update=function(e,t){return a.write.compressFunction(e,t,a.write)?a.write.cipherFunction(t,a.write)||e.error(e,{message:"Could not encrypt record.",send:!1,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}}):e.error(e,{message:"Could not compress record.",send:!1,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}}),!e.fail},e.session){var n=e.session.sp;switch(e.session.cipherSuite.initSecurityParameters(n),n.keys=u.generateKeys(e,n),a.read.macKey=t?n.keys.server_write_MAC_key:n.keys.client_write_MAC_key,a.write.macKey=t?n.keys.client_write_MAC_key:n.keys.server_write_MAC_key,e.session.cipherSuite.initConnectionState(a,e,n),n.compression_algorithm){case u.CompressionMethod.none:break;case u.CompressionMethod.deflate:a.read.compressFunction=s,a.write.compressFunction=i;break;default:throw new Error("Unsupported compression algorithm.")}}return a},u.createRandom=function(){var e=new Date,t=+e+6e4*e.getTimezoneOffset(),r=a.util.createBuffer();return r.putInt32(t),r.putBytes(a.random.getBytes(28)),r},u.createRecord=function(e,t){return t.data?{type:t.type,version:{major:e.version.major,minor:e.version.minor},length:t.data.length(),fragment:t.data}:null},u.createAlert=function(e,t){var r=a.util.createBuffer();return r.putByte(t.level),r.putByte(t.description),u.createRecord(e,{type:u.ContentType.alert,data:r})},u.createClientHello=function(e){e.session.clientHelloVersion={major:e.version.major,minor:e.version.minor};for(var t=a.util.createBuffer(),r=0;r<e.cipherSuites.length;++r){var n=e.cipherSuites[r];t.putByte(n.id[0]),t.putByte(n.id[1])}var i=t.length(),s=a.util.createBuffer();s.putByte(u.CompressionMethod.none);var o=s.length(),l=a.util.createBuffer();if(e.virtualHost){var p=a.util.createBuffer();p.putByte(0),p.putByte(0);var f=a.util.createBuffer();f.putByte(0),c(f,2,a.util.createBuffer(e.virtualHost));var h=a.util.createBuffer();c(h,2,f),c(p,2,h),l.putBuffer(p)}var d=l.length();d>0&&(d+=2);var y=e.session.id,g=y.length+1+2+4+28+2+i+1+o+d,m=a.util.createBuffer();return m.putByte(u.HandshakeType.client_hello),m.putInt24(g),m.putByte(e.version.major),m.putByte(e.version.minor),m.putBytes(e.session.sp.client_random),c(m,1,a.util.createBuffer(y)),c(m,2,t),c(m,1,s),d>0&&c(m,2,l),m},u.createServerHello=function(e){var t=e.session.id,r=t.length+1+2+4+28+2+1,n=a.util.createBuffer();return n.putByte(u.HandshakeType.server_hello),n.putInt24(r),n.putByte(e.version.major),n.putByte(e.version.minor),n.putBytes(e.session.sp.server_random),c(n,1,a.util.createBuffer(t)),n.putByte(e.session.cipherSuite.id[0]),n.putByte(e.session.cipherSuite.id[1]),n.putByte(e.session.compressionMethod),n},u.createCertificate=function(e){var t,r=e.entity===u.ConnectionEnd.client,n=null;e.getCertificate&&(t=r?e.session.certificateRequest:e.session.extensions.server_name.serverNameList,n=e.getCertificate(e,t));var i=a.util.createBuffer();if(null!==n)try{a.util.isArray(n)||(n=[n]);for(var s=null,o=0;o<n.length;++o){var l=a.pem.decode(n[o])[0];if("CERTIFICATE"!==l.type&&"X509 CERTIFICATE"!==l.type&&"TRUSTED CERTIFICATE"!==l.type){var p=new Error('Could not convert certificate from PEM; PEM header type is not "CERTIFICATE", "X509 CERTIFICATE", or "TRUSTED CERTIFICATE".');throw p.headerType=l.type,p}if(l.procType&&"ENCRYPTED"===l.procType.type)throw new Error("Could not convert certificate from PEM; PEM is encrypted.");var f=a.util.createBuffer(l.body);null===s&&(s=a.asn1.fromDer(f.bytes(),!1));var h=a.util.createBuffer();c(h,3,f),i.putBuffer(h)}n=a.pki.certificateFromAsn1(s),r?e.session.clientCertificate=n:e.session.serverCertificate=n}catch(t){return e.error(e,{message:"Could not send certificate list.",cause:t,send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.bad_certificate}})}var d=3+i.length(),y=a.util.createBuffer();return y.putByte(u.HandshakeType.certificate),y.putInt24(d),c(y,3,i),y},u.createClientKeyExchange=function(e){var t=a.util.createBuffer();t.putByte(e.session.clientHelloVersion.major),t.putByte(e.session.clientHelloVersion.minor),t.putBytes(a.random.getBytes(46));var r=e.session.sp;r.pre_master_secret=t.getBytes();var n=(t=e.session.serverCertificate.publicKey.encrypt(r.pre_master_secret)).length+2,i=a.util.createBuffer();return i.putByte(u.HandshakeType.client_key_exchange),i.putInt24(n),i.putInt16(t.length),i.putBytes(t),i},u.createServerKeyExchange=function(e){var t=a.util.createBuffer();return t},u.getClientSignature=function(e,t){var r=a.util.createBuffer();r.putBuffer(e.session.md5.digest()),r.putBuffer(e.session.sha1.digest()),r=r.getBytes(),e.getSignature=e.getSignature||function(e,t,r){var n=null;if(e.getPrivateKey)try{n=e.getPrivateKey(e,e.session.clientCertificate),n=a.pki.privateKeyFromPem(n)}catch(t){e.error(e,{message:"Could not get private key.",cause:t,send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}})}null===n?e.error(e,{message:"No private key set.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.internal_error}}):t=n.sign(t,null),r(e,t)},e.getSignature(e,r,t)},u.createCertificateVerify=function(e,t){var r=t.length+2,n=a.util.createBuffer();return n.putByte(u.HandshakeType.certificate_verify),n.putInt24(r),n.putInt16(t.length),n.putBytes(t),n},u.createCertificateRequest=function(e){var t=a.util.createBuffer();t.putByte(1);var r=a.util.createBuffer();for(var n in e.caStore.certs){var i=e.caStore.certs[n],s=a.pki.distinguishedNameToAsn1(i.subject),o=a.asn1.toDer(s);r.putInt16(o.length()),r.putBuffer(o)}var l=1+t.length()+2+r.length(),p=a.util.createBuffer();return p.putByte(u.HandshakeType.certificate_request),p.putInt24(l),c(p,1,t),c(p,2,r),p},u.createServerHelloDone=function(e){var t=a.util.createBuffer();return t.putByte(u.HandshakeType.server_hello_done),t.putInt24(0),t},u.createChangeCipherSpec=function(){var e=a.util.createBuffer();return e.putByte(1),e},u.createFinished=function(e){var t=a.util.createBuffer();t.putBuffer(e.session.md5.digest()),t.putBuffer(e.session.sha1.digest());var r=e.entity===u.ConnectionEnd.client,i=e.session.sp,s=r?"client finished":"server finished";t=n(i.master_secret,s,t.getBytes(),12);var o=a.util.createBuffer();return o.putByte(u.HandshakeType.finished),o.putInt24(t.length()),o.putBuffer(t),o},u.createHeartbeat=function(e,t,r){void 0===r&&(r=t.length);var n=a.util.createBuffer();n.putByte(e),n.putInt16(r),n.putBytes(t);var i=n.length(),s=Math.max(16,i-r-3);return n.putBytes(a.random.getBytes(s)),n},u.queue=function(e,t){if(t&&(0!==t.fragment.length()||t.type!==u.ContentType.handshake&&t.type!==u.ContentType.alert&&t.type!==u.ContentType.change_cipher_spec)){if(t.type===u.ContentType.handshake){var r=t.fragment.bytes();e.session.md5.update(r),e.session.sha1.update(r),r=null}var n;if(t.fragment.length()<=u.MaxFragment)n=[t];else{n=[];for(var i=t.fragment.bytes();i.length>u.MaxFragment;)n.push(u.createRecord(e,{type:t.type,data:a.util.createBuffer(i.slice(0,u.MaxFragment))})),i=i.slice(u.MaxFragment);i.length>0&&n.push(u.createRecord(e,{type:t.type,data:a.util.createBuffer(i)}))}for(var s=0;s<n.length&&!e.fail;++s){var o=n[s];e.state.current.write.update(e,o)&&e.records.push(o)}}},u.flush=function(e){for(var t=0;t<e.records.length;++t){var r=e.records[t];e.tlsData.putByte(r.type),e.tlsData.putByte(r.version.major),e.tlsData.putByte(r.version.minor),e.tlsData.putInt16(r.fragment.length()),e.tlsData.putBuffer(e.records[t].fragment)}return e.records=[],e.tlsDataReady(e)};var j=function(e){switch(e){case!0:return!0;case a.pki.certificateError.bad_certificate:return u.Alert.Description.bad_certificate;case a.pki.certificateError.unsupported_certificate:return u.Alert.Description.unsupported_certificate;case a.pki.certificateError.certificate_revoked:return u.Alert.Description.certificate_revoked;case a.pki.certificateError.certificate_expired:return u.Alert.Description.certificate_expired;case a.pki.certificateError.certificate_unknown:return u.Alert.Description.certificate_unknown;case a.pki.certificateError.unknown_ca:return u.Alert.Description.unknown_ca;default:return u.Alert.Description.bad_certificate}};for(var q in u.verifyCertificateChain=function(e,t){try{var r={};for(var n in e.verifyOptions)r[n]=e.verifyOptions[n];r.verify=function(t,r,n){j(t);var i=e.verify(e,t,r,n);if(!0!==i){if("object"==typeof i&&!a.util.isArray(i)){var s=new Error("The application rejected the certificate.");throw s.send=!0,s.alert={level:u.Alert.Level.fatal,description:u.Alert.Description.bad_certificate},i.message&&(s.message=i.message),i.alert&&(s.alert.description=i.alert),s}i!==t&&(i=function(e){switch(e){case!0:return!0;case u.Alert.Description.bad_certificate:return a.pki.certificateError.bad_certificate;case u.Alert.Description.unsupported_certificate:return a.pki.certificateError.unsupported_certificate;case u.Alert.Description.certificate_revoked:return a.pki.certificateError.certificate_revoked;case u.Alert.Description.certificate_expired:return a.pki.certificateError.certificate_expired;case u.Alert.Description.certificate_unknown:return a.pki.certificateError.certificate_unknown;case u.Alert.Description.unknown_ca:return a.pki.certificateError.unknown_ca;default:return a.pki.certificateError.bad_certificate}}(i))}return i},a.pki.verifyCertificateChain(e.caStore,t,r)}catch(t){var i=t;("object"!=typeof i||a.util.isArray(i))&&(i={send:!0,alert:{level:u.Alert.Level.fatal,description:j(t)}}),"send"in i||(i.send=!0),"alert"in i||(i.alert={level:u.Alert.Level.fatal,description:j(i.error)}),e.error(e,i)}return!e.fail},u.createSessionCache=function(e,t){var r=null;if(e&&e.getSession&&e.setSession&&e.order)r=e;else{for(var n in(r={}).cache=e||{},r.capacity=Math.max(t||100,1),r.order=[],e)r.order.length<=t?r.order.push(n):delete e[n];r.getSession=function(e){var t=null,n=null;if(e?n=a.util.bytesToHex(e):r.order.length>0&&(n=r.order[0]),null!==n&&n in r.cache)for(var i in t=r.cache[n],delete r.cache[n],r.order)if(r.order[i]===n){r.order.splice(i,1);break}return t},r.setSession=function(e,t){if(r.order.length===r.capacity){var n=r.order.shift();delete r.cache[n]}n=a.util.bytesToHex(e);r.order.push(n),r.cache[n]=t}}return r},u.createConnection=function(e){var t=null;t=e.caStore?a.util.isArray(e.caStore)?a.pki.createCaStore(e.caStore):e.caStore:a.pki.createCaStore();var r=e.cipherSuites||null;if(null===r)for(var n in r=[],u.CipherSuites)r.push(u.CipherSuites[n]);var i=e.server?u.ConnectionEnd.server:u.ConnectionEnd.client,s=e.sessionCache?u.createSessionCache(e.sessionCache):null,o={version:{major:u.Version.major,minor:u.Version.minor},entity:i,sessionId:e.sessionId,caStore:t,sessionCache:s,cipherSuites:r,connected:e.connected,virtualHost:e.virtualHost||null,verifyClient:e.verifyClient||!1,verify:e.verify||function(e,t,r,a){return t},verifyOptions:e.verifyOptions||{},getCertificate:e.getCertificate||null,getPrivateKey:e.getPrivateKey||null,getSignature:e.getSignature||null,input:a.util.createBuffer(),tlsData:a.util.createBuffer(),data:a.util.createBuffer(),tlsDataReady:e.tlsDataReady,dataReady:e.dataReady,heartbeatReceived:e.heartbeatReceived,closed:e.closed,error:function(t,r){r.origin=r.origin||(t.entity===u.ConnectionEnd.client?"client":"server"),r.send&&(u.queue(t,u.createAlert(t,r.alert)),u.flush(t));var a=!1!==r.fatal;a&&(t.fail=!0),e.error(t,r),a&&t.close(!1)},deflate:e.deflate||null,inflate:e.inflate||null,reset:function(e){o.version={major:u.Version.major,minor:u.Version.minor},o.record=null,o.session=null,o.peerCertificate=null,o.state={pending:null,current:null},o.expect=(o.entity,u.ConnectionEnd.client,0),o.fragmented=null,o.records=[],o.open=!1,o.handshakes=0,o.handshaking=!1,o.isConnected=!1,o.fail=!(e||void 0===e),o.input.clear(),o.tlsData.clear(),o.data.clear(),o.state.current=u.createConnectionState(o)}};o.reset();return o.handshake=function(e){if(o.entity!==u.ConnectionEnd.client)o.error(o,{message:"Cannot initiate handshake as a server.",fatal:!1});else if(o.handshaking)o.error(o,{message:"Handshake already in progress.",fatal:!1});else{o.fail&&!o.open&&0===o.handshakes&&(o.fail=!1),o.handshaking=!0;var t=null;(e=e||"").length>0&&(o.sessionCache&&(t=o.sessionCache.getSession(e)),null===t&&(e="")),0===e.length&&o.sessionCache&&null!==(t=o.sessionCache.getSession())&&(e=t.id),o.session={id:e,version:null,cipherSuite:null,compressionMethod:null,serverCertificate:null,certificateRequest:null,clientCertificate:null,sp:{},md5:a.md.md5.create(),sha1:a.md.sha1.create()},t&&(o.version=t.version,o.session.sp=t.sp),o.session.sp.client_random=u.createRandom().getBytes(),o.open=!0,u.queue(o,u.createRecord(o,{type:u.ContentType.handshake,data:u.createClientHello(o)})),u.flush(o)}},o.process=function(e){var t=0;return e&&o.input.putBytes(e),o.fail||(null!==o.record&&o.record.ready&&o.record.fragment.isEmpty()&&(o.record=null),null===o.record&&(t=function(e){var t=0,r=e.input,n=r.length();if(n<5)t=5-n;else{e.record={type:r.getByte(),version:{major:r.getByte(),minor:r.getByte()},length:r.getInt16(),fragment:a.util.createBuffer(),ready:!1};var i=e.record.version.major===e.version.major;i&&e.session&&e.session.version&&(i=e.record.version.minor===e.version.minor),i||e.error(e,{message:"Incompatible TLS version.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.protocol_version}})}return t}(o)),o.fail||null===o.record||o.record.ready||(t=function(e){var t=0,r=e.input,a=r.length();a<e.record.length?t=e.record.length-a:(e.record.fragment.putBytes(r.getBytes(e.record.length)),r.compact(),e.state.current.read.update(e,e.record)&&(null!==e.fragmented&&(e.fragmented.type===e.record.type?(e.fragmented.fragment.putBuffer(e.record.fragment),e.record=e.fragmented):e.error(e,{message:"Invalid fragmented record.",send:!0,alert:{level:u.Alert.Level.fatal,description:u.Alert.Description.unexpected_message}})),e.record.ready=!0));return t}(o)),!o.fail&&null!==o.record&&o.record.ready&&function(e,t){var r=t.type-u.ContentType.change_cipher_spec,a=R[e.entity][e.expect];r in a?a[r](e,t):u.handleUnexpected(e,t)}(o,o.record)),t},o.prepare=function(e){return u.queue(o,u.createRecord(o,{type:u.ContentType.application_data,data:a.util.createBuffer(e)})),u.flush(o)},o.prepareHeartbeatRequest=function(e,t){return e instanceof a.util.ByteBuffer&&(e=e.bytes()),void 0===t&&(t=e.length),o.expectedHeartbeatPayload=e,u.queue(o,u.createRecord(o,{type:u.ContentType.heartbeat,data:u.createHeartbeat(u.HeartbeatMessageType.heartbeat_request,e,t)})),u.flush(o)},o.close=function(e){if(!o.fail&&o.sessionCache&&o.session){var t={id:o.session.id,version:o.session.version,sp:o.session.sp};t.sp.keys=null,o.sessionCache.setSession(t.id,t)}o.open&&(o.open=!1,o.input.clear(),(o.isConnected||o.handshaking)&&(o.isConnected=o.handshaking=!1,u.queue(o,u.createAlert(o,{level:u.Alert.Level.warning,description:u.Alert.Description.close_notify})),u.flush(o)),o.closed(o)),o.reset(e)},o},e.exports=a.tls=a.tls||{},u)"function"!=typeof u[q]&&(a.tls[q]=u[q]);a.tls.prf_tls1=n,a.tls.hmac_sha1=function(e,t,r){var n=a.hmac.create();n.start("SHA1",e);var i=a.util.createBuffer();return i.putInt32(t[0]),i.putInt32(t[1]),i.putByte(r.type),i.putByte(r.version.major),i.putByte(r.version.minor),i.putInt16(r.length),i.putBytes(r.fragment.bytes()),n.update(i.getBytes()),n.digest().getBytes()},a.tls.createSessionCache=u.createSessionCache,a.tls.createConnection=u.createConnection},function(e,t,r){var a=r(0);r(3),r(6),r(22),r(7),r(15),r(28),r(18),r(11),r(1),r(17);var n=a.asn1,i=e.exports=a.pki=a.pki||{};i.pemToDer=function(e){var t=a.pem.decode(e)[0];if(t.procType&&"ENCRYPTED"===t.procType.type)throw new Error("Could not convert PEM to DER; PEM is encrypted.");return a.util.createBuffer(t.body)},i.privateKeyFromPem=function(e){var t=a.pem.decode(e)[0];if("PRIVATE KEY"!==t.type&&"RSA PRIVATE KEY"!==t.type){var r=new Error('Could not convert private key from PEM; PEM header type is not "PRIVATE KEY" or "RSA PRIVATE KEY".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw new Error("Could not convert private key from PEM; PEM is encrypted.");var s=n.fromDer(t.body);return i.privateKeyFromAsn1(s)},i.privateKeyToPem=function(e,t){var r={type:"RSA PRIVATE KEY",body:n.toDer(i.privateKeyToAsn1(e)).getBytes()};return a.pem.encode(r,{maxline:t})},i.privateKeyInfoToPem=function(e,t){var r={type:"PRIVATE KEY",body:n.toDer(e).getBytes()};return a.pem.encode(r,{maxline:t})}},function(e,t,r){var a=r(0);if(r(5),r(3),r(10),r(4),r(6),r(15),r(7),r(2),r(25),r(11),r(1),void 0===n)var n=a.jsbn.BigInteger;var i=a.asn1,s=a.pki=a.pki||{};e.exports=s.pbe=a.pbe=a.pbe||{};var o=s.oids,c={name:"EncryptedPrivateKeyInfo",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedPrivateKeyInfo.encryptionAlgorithm",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:i.Class.UNIVERSAL,type:i.Type.OID,constructed:!1,capture:"encryptionOid"},{name:"AlgorithmIdentifier.parameters",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,captureAsn1:"encryptionParams"}]},{name:"EncryptedPrivateKeyInfo.encryptedData",tagClass:i.Class.UNIVERSAL,type:i.Type.OCTETSTRING,constructed:!1,capture:"encryptedData"}]},u={name:"PBES2Algorithms",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.keyDerivationFunc",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.keyDerivationFunc.oid",tagClass:i.Class.UNIVERSAL,type:i.Type.OID,constructed:!1,capture:"kdfOid"},{name:"PBES2Algorithms.params",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.params.salt",tagClass:i.Class.UNIVERSAL,type:i.Type.OCTETSTRING,constructed:!1,capture:"kdfSalt"},{name:"PBES2Algorithms.params.iterationCount",tagClass:i.Class.UNIVERSAL,type:i.Type.INTEGER,constructed:!1,capture:"kdfIterationCount"},{name:"PBES2Algorithms.params.keyLength",tagClass:i.Class.UNIVERSAL,type:i.Type.INTEGER,constructed:!1,optional:!0,capture:"keyLength"},{name:"PBES2Algorithms.params.prf",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,optional:!0,value:[{name:"PBES2Algorithms.params.prf.algorithm",tagClass:i.Class.UNIVERSAL,type:i.Type.OID,constructed:!1,capture:"prfOid"}]}]}]},{name:"PBES2Algorithms.encryptionScheme",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"PBES2Algorithms.encryptionScheme.oid",tagClass:i.Class.UNIVERSAL,type:i.Type.OID,constructed:!1,capture:"encOid"},{name:"PBES2Algorithms.encryptionScheme.iv",tagClass:i.Class.UNIVERSAL,type:i.Type.OCTETSTRING,constructed:!1,capture:"encIv"}]}]},l={name:"pkcs-12PbeParams",tagClass:i.Class.UNIVERSAL,type:i.Type.SEQUENCE,constructed:!0,value:[{name:"pkcs-12PbeParams.salt",tagClass:i.Class.UNIVERSAL,type:i.Type.OCTETSTRING,constructed:!1,capture:"salt"},{name:"pkcs-12PbeParams.iterations",tagClass:i.Class.UNIVERSAL,type:i.Type.INTEGER,constructed:!1,capture:"iterations"}]};function p(e,t){return e.start().update(t).digest().getBytes()}function f(e){var t;if(e){if(!(t=s.oids[i.derToOid(e)])){var r=new Error("Unsupported PRF OID.");throw r.oid=e,r.supported=["hmacWithSHA1","hmacWithSHA224","hmacWithSHA256","hmacWithSHA384","hmacWithSHA512"],r}}else t="hmacWithSHA1";return h(t)}function h(e){var t=a.md;switch(e){case"hmacWithSHA224":t=a.md.sha512;case"hmacWithSHA1":case"hmacWithSHA256":case"hmacWithSHA384":case"hmacWithSHA512":e=e.substr(8).toLowerCase();break;default:var r=new Error("Unsupported PRF algorithm.");throw r.algorithm=e,r.supported=["hmacWithSHA1","hmacWithSHA224","hmacWithSHA256","hmacWithSHA384","hmacWithSHA512"],r}if(!t||!(e in t))throw new Error("Unknown hash algorithm: "+e);return t[e].create()}s.encryptPrivateKeyInfo=function(e,t,r){(r=r||{}).saltSize=r.saltSize||8,r.count=r.count||2048,r.algorithm=r.algorithm||"aes128",r.prfAlgorithm=r.prfAlgorithm||"sha1";var n,c,u,l=a.random.getBytesSync(r.saltSize),p=r.count,f=i.integerToDer(p);if(0===r.algorithm.indexOf("aes")||"des"===r.algorithm){var d,y,g;switch(r.algorithm){case"aes128":n=16,d=16,y=o["aes128-CBC"],g=a.aes.createEncryptionCipher;break;case"aes192":n=24,d=16,y=o["aes192-CBC"],g=a.aes.createEncryptionCipher;break;case"aes256":n=32,d=16,y=o["aes256-CBC"],g=a.aes.createEncryptionCipher;break;case"des":n=8,d=8,y=o.desCBC,g=a.des.createEncryptionCipher;break;default:throw(T=new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm=r.algorithm,T}var m="hmacWith"+r.prfAlgorithm.toUpperCase(),v=h(m),C=a.pkcs5.pbkdf2(t,l,p,n,v),E=a.random.getBytesSync(d);(I=g(C)).start(E),I.update(i.toDer(e)),I.finish(),u=I.output.getBytes();var S=function(e,t,r,n){var o=i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OCTETSTRING,!1,e),i.create(i.Class.UNIVERSAL,i.Type.INTEGER,!1,t.getBytes())]);"hmacWithSHA1"!==n&&o.value.push(i.create(i.Class.UNIVERSAL,i.Type.INTEGER,!1,a.util.hexToBytes(r.toString(16))),i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OID,!1,i.oidToDer(s.oids[n]).getBytes()),i.create(i.Class.UNIVERSAL,i.Type.NULL,!1,"")]));return o}(l,f,n,m);c=i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OID,!1,i.oidToDer(o.pkcs5PBES2).getBytes()),i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OID,!1,i.oidToDer(o.pkcs5PBKDF2).getBytes()),S]),i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OID,!1,i.oidToDer(y).getBytes()),i.create(i.Class.UNIVERSAL,i.Type.OCTETSTRING,!1,E)])])])}else{var T;if("3des"!==r.algorithm)throw(T=new Error("Cannot encrypt private key. Unknown encryption algorithm.")).algorithm=r.algorithm,T;n=24;var I,b=new a.util.ByteBuffer(l);C=s.pbe.generatePkcs12Key(t,b,1,p,n),E=s.pbe.generatePkcs12Key(t,b,2,p,n);(I=a.des.createEncryptionCipher(C)).start(E),I.update(i.toDer(e)),I.finish(),u=I.output.getBytes(),c=i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OID,!1,i.oidToDer(o["pbeWithSHAAnd3-KeyTripleDES-CBC"]).getBytes()),i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[i.create(i.Class.UNIVERSAL,i.Type.OCTETSTRING,!1,l),i.create(i.Class.UNIVERSAL,i.Type.INTEGER,!1,f.getBytes())])])}return i.create(i.Class.UNIVERSAL,i.Type.SEQUENCE,!0,[c,i.create(i.Class.UNIVERSAL,i.Type.OCTETSTRING,!1,u)])},s.decryptPrivateKeyInfo=function(e,t){var r=null,n={},o=[];if(!i.validate(e,c,n,o)){var u=new Error("Cannot read encrypted private key. ASN.1 object is not a supported EncryptedPrivateKeyInfo.");throw u.errors=o,u}var l=i.derToOid(n.encryptionOid),p=s.pbe.getCipher(l,n.encryptionParams,t),f=a.util.createBuffer(n.encryptedData);return p.update(f),p.finish()&&(r=i.fromDer(p.output)),r},s.encryptedPrivateKeyToPem=function(e,t){var r={type:"ENCRYPTED PRIVATE KEY",body:i.toDer(e).getBytes()};return a.pem.encode(r,{maxline:t})},s.encryptedPrivateKeyFromPem=function(e){var t=a.pem.decode(e)[0];if("ENCRYPTED PRIVATE KEY"!==t.type){var r=new Error('Could not convert encrypted private key from PEM; PEM header type is "ENCRYPTED PRIVATE KEY".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw new Error("Could not convert encrypted private key from PEM; PEM is encrypted.");return i.fromDer(t.body)},s.encryptRsaPrivateKey=function(e,t,r){if(!(r=r||{}).legacy){var n=s.wrapRsaPrivateKey(s.privateKeyToAsn1(e));return n=s.encryptPrivateKeyInfo(n,t,r),s.encryptedPrivateKeyToPem(n)}var o,c,u,l;switch(r.algorithm){case"aes128":o="AES-128-CBC",u=16,c=a.random.getBytesSync(16),l=a.aes.createEncryptionCipher;break;case"aes192":o="AES-192-CBC",u=24,c=a.random.getBytesSync(16),l=a.aes.createEncryptionCipher;break;case"aes256":o="AES-256-CBC",u=32,c=a.random.getBytesSync(16),l=a.aes.createEncryptionCipher;break;case"3des":o="DES-EDE3-CBC",u=24,c=a.random.getBytesSync(8),l=a.des.createEncryptionCipher;break;case"des":o="DES-CBC",u=8,c=a.random.getBytesSync(8),l=a.des.createEncryptionCipher;break;default:var p=new Error('Could not encrypt RSA private key; unsupported encryption algorithm "'+r.algorithm+'".');throw p.algorithm=r.algorithm,p}var f=l(a.pbe.opensslDeriveBytes(t,c.substr(0,8),u));f.start(c),f.update(i.toDer(s.privateKeyToAsn1(e))),f.finish();var h={type:"RSA PRIVATE KEY",procType:{version:"4",type:"ENCRYPTED"},dekInfo:{algorithm:o,parameters:a.util.bytesToHex(c).toUpperCase()},body:f.output.getBytes()};return a.pem.encode(h)},s.decryptRsaPrivateKey=function(e,t){var r=null,n=a.pem.decode(e)[0];if("ENCRYPTED PRIVATE KEY"!==n.type&&"PRIVATE KEY"!==n.type&&"RSA PRIVATE KEY"!==n.type)throw(u=new Error('Could not convert private key from PEM; PEM header type is not "ENCRYPTED PRIVATE KEY", "PRIVATE KEY", or "RSA PRIVATE KEY".')).headerType=u,u;if(n.procType&&"ENCRYPTED"===n.procType.type){var o,c;switch(n.dekInfo.algorithm){case"DES-CBC":o=8,c=a.des.createDecryptionCipher;break;case"DES-EDE3-CBC":o=24,c=a.des.createDecryptionCipher;break;case"AES-128-CBC":o=16,c=a.aes.createDecryptionCipher;break;case"AES-192-CBC":o=24,c=a.aes.createDecryptionCipher;break;case"AES-256-CBC":o=32,c=a.aes.createDecryptionCipher;break;case"RC2-40-CBC":o=5,c=function(e){return a.rc2.createDecryptionCipher(e,40)};break;case"RC2-64-CBC":o=8,c=function(e){return a.rc2.createDecryptionCipher(e,64)};break;case"RC2-128-CBC":o=16,c=function(e){return a.rc2.createDecryptionCipher(e,128)};break;default:var u;throw(u=new Error('Could not decrypt private key; unsupported encryption algorithm "'+n.dekInfo.algorithm+'".')).algorithm=n.dekInfo.algorithm,u}var l=a.util.hexToBytes(n.dekInfo.parameters),p=c(a.pbe.opensslDeriveBytes(t,l.substr(0,8),o));if(p.start(l),p.update(a.util.createBuffer(n.body)),!p.finish())return r;r=p.output.getBytes()}else r=n.body;return null!==(r="ENCRYPTED PRIVATE KEY"===n.type?s.decryptPrivateKeyInfo(i.fromDer(r),t):i.fromDer(r))&&(r=s.privateKeyFromAsn1(r)),r},s.pbe.generatePkcs12Key=function(e,t,r,n,i,s){var o,c;if(null==s){if(!("sha1"in a.md))throw new Error('"sha1" hash algorithm unavailable.');s=a.md.sha1.create()}var u=s.digestLength,l=s.blockLength,p=new a.util.ByteBuffer,f=new a.util.ByteBuffer;if(null!=e){for(c=0;c<e.length;c++)f.putInt16(e.charCodeAt(c));f.putInt16(0)}var h=f.length(),d=t.length(),y=new a.util.ByteBuffer;y.fillWithByte(r,l);var g=l*Math.ceil(d/l),m=new a.util.ByteBuffer;for(c=0;c<g;c++)m.putByte(t.at(c%d));var v=l*Math.ceil(h/l),C=new a.util.ByteBuffer;for(c=0;c<v;c++)C.putByte(f.at(c%h));var E=m;E.putBuffer(C);for(var S=Math.ceil(i/u),T=1;T<=S;T++){var I=new a.util.ByteBuffer;I.putBytes(y.bytes()),I.putBytes(E.bytes());for(var b=0;b<n;b++)s.start(),s.update(I.getBytes()),I=s.digest();var A=new a.util.ByteBuffer;for(c=0;c<l;c++)A.putByte(I.at(c%u));var B=Math.ceil(d/l)+Math.ceil(h/l),N=new a.util.ByteBuffer;for(o=0;o<B;o++){var k=new a.util.ByteBuffer(E.getBytes(l)),w=511;for(c=A.length()-1;c>=0;c--)w>>=8,w+=A.at(c)+k.at(c),k.setAt(c,255&w);N.putBuffer(k)}E=N,p.putBuffer(I)}return p.truncate(p.length()-i),p},s.pbe.getCipher=function(e,t,r){switch(e){case s.oids.pkcs5PBES2:return s.pbe.getCipherForPBES2(e,t,r);case s.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:case s.oids["pbewithSHAAnd40BitRC2-CBC"]:return s.pbe.getCipherForPKCS12PBE(e,t,r);default:var a=new Error("Cannot read encrypted PBE data block. Unsupported OID.");throw a.oid=e,a.supportedOids=["pkcs5PBES2","pbeWithSHAAnd3-KeyTripleDES-CBC","pbewithSHAAnd40BitRC2-CBC"],a}},s.pbe.getCipherForPBES2=function(e,t,r){var n,o={},c=[];if(!i.validate(t,u,o,c))throw(n=new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.")).errors=c,n;if((e=i.derToOid(o.kdfOid))!==s.oids.pkcs5PBKDF2)throw(n=new Error("Cannot read encrypted private key. Unsupported key derivation function OID.")).oid=e,n.supportedOids=["pkcs5PBKDF2"],n;if((e=i.derToOid(o.encOid))!==s.oids["aes128-CBC"]&&e!==s.oids["aes192-CBC"]&&e!==s.oids["aes256-CBC"]&&e!==s.oids["des-EDE3-CBC"]&&e!==s.oids.desCBC)throw(n=new Error("Cannot read encrypted private key. Unsupported encryption scheme OID.")).oid=e,n.supportedOids=["aes128-CBC","aes192-CBC","aes256-CBC","des-EDE3-CBC","desCBC"],n;var l,p,h=o.kdfSalt,d=a.util.createBuffer(o.kdfIterationCount);switch(d=d.getInt(d.length()<<3),s.oids[e]){case"aes128-CBC":l=16,p=a.aes.createDecryptionCipher;break;case"aes192-CBC":l=24,p=a.aes.createDecryptionCipher;break;case"aes256-CBC":l=32,p=a.aes.createDecryptionCipher;break;case"des-EDE3-CBC":l=24,p=a.des.createDecryptionCipher;break;case"desCBC":l=8,p=a.des.createDecryptionCipher}var y=f(o.prfOid),g=a.pkcs5.pbkdf2(r,h,d,l,y),m=o.encIv,v=p(g);return v.start(m),v},s.pbe.getCipherForPKCS12PBE=function(e,t,r){var n={},o=[];if(!i.validate(t,l,n,o))throw(y=new Error("Cannot read password-based-encryption algorithm parameters. ASN.1 object is not a supported EncryptedPrivateKeyInfo.")).errors=o,y;var c,u,p,h=a.util.createBuffer(n.salt),d=a.util.createBuffer(n.iterations);switch(d=d.getInt(d.length()<<3),e){case s.oids["pbeWithSHAAnd3-KeyTripleDES-CBC"]:c=24,u=8,p=a.des.startDecrypting;break;case s.oids["pbewithSHAAnd40BitRC2-CBC"]:c=5,u=8,p=function(e,t){var r=a.rc2.createDecryptionCipher(e,40);return r.start(t,null),r};break;default:var y;throw(y=new Error("Cannot read PKCS #12 PBE data block. Unsupported OID.")).oid=e,y}var g=f(n.prfOid),m=s.pbe.generatePkcs12Key(r,h,1,d,c,g);return g.start(),p(m,s.pbe.generatePkcs12Key(r,h,2,d,u,g))},s.pbe.opensslDeriveBytes=function(e,t,r,n){if(null==n){if(!("md5"in a.md))throw new Error('"md5" hash algorithm unavailable.');n=a.md.md5.create()}null===t&&(t="");for(var i=[p(n,e+t)],s=16,o=1;s<r;++o,s+=16)i.push(p(n,i[o-1]+e+t));return i.join("").substr(0,r)}},function(e,t,r){var a=r(0);r(4),r(1);var n=e.exports=a.sha256=a.sha256||{};a.md.sha256=a.md.algorithms.sha256=n,n.create=function(){s||(i=String.fromCharCode(128),i+=a.util.fillString(String.fromCharCode(0),64),o=[1116352408,1899447441,3049323471,3921009573,961987163,1508970993,2453635748,2870763221,3624381080,310598401,607225278,1426881987,1925078388,2162078206,2614888103,3248222580,3835390401,4022224774,264347078,604807628,770255983,1249150122,1555081692,1996064986,2554220882,2821834349,2952996808,3210313671,3336571891,3584528711,113926993,338241895,666307205,773529912,1294757372,1396182291,1695183700,1986661051,2177026350,2456956037,2730485921,2820302411,3259730800,3345764771,3516065817,3600352804,4094571909,275423344,430227734,506948616,659060556,883997877,958139571,1322822218,1537002063,1747873779,1955562222,2024104815,2227730452,2361852424,2428436474,2756734187,3204031479,3329325298],s=!0);var e=null,t=a.util.createBuffer(),r=new Array(64),n={algorithm:"sha256",blockLength:64,digestLength:32,messageLength:0,fullMessageLength:null,messageLengthSize:8,start:function(){n.messageLength=0,n.fullMessageLength=n.messageLength64=[];for(var r=n.messageLengthSize/4,i=0;i<r;++i)n.fullMessageLength.push(0);return t=a.util.createBuffer(),e={h0:1779033703,h1:3144134277,h2:1013904242,h3:2773480762,h4:1359893119,h5:2600822924,h6:528734635,h7:1541459225},n}};return n.start(),n.update=function(i,s){"utf8"===s&&(i=a.util.encodeUtf8(i));var o=i.length;n.messageLength+=o,o=[o/4294967296>>>0,o>>>0];for(var u=n.fullMessageLength.length-1;u>=0;--u)n.fullMessageLength[u]+=o[1],o[1]=o[0]+(n.fullMessageLength[u]/4294967296>>>0),n.fullMessageLength[u]=n.fullMessageLength[u]>>>0,o[0]=o[1]/4294967296>>>0;return t.putBytes(i),c(e,r,t),(t.read>2048||0===t.length())&&t.compact(),n},n.digest=function(){var s=a.util.createBuffer();s.putBytes(t.bytes());var o,u=n.fullMessageLength[n.fullMessageLength.length-1]+n.messageLengthSize&n.blockLength-1;s.putBytes(i.substr(0,n.blockLength-u));for(var l=8*n.fullMessageLength[0],p=0;p<n.fullMessageLength.length-1;++p)l+=(o=8*n.fullMessageLength[p+1])/4294967296>>>0,s.putInt32(l>>>0),l=o>>>0;s.putInt32(l);var f={h0:e.h0,h1:e.h1,h2:e.h2,h3:e.h3,h4:e.h4,h5:e.h5,h6:e.h6,h7:e.h7};c(f,r,s);var h=a.util.createBuffer();return h.putInt32(f.h0),h.putInt32(f.h1),h.putInt32(f.h2),h.putInt32(f.h3),h.putInt32(f.h4),h.putInt32(f.h5),h.putInt32(f.h6),h.putInt32(f.h7),h},n};var i=null,s=!1,o=null;function c(e,t,r){for(var a,n,i,s,c,u,l,p,f,h,d,y,g,m=r.length();m>=64;){for(c=0;c<16;++c)t[c]=r.getInt32();for(;c<64;++c)a=((a=t[c-2])>>>17|a<<15)^(a>>>19|a<<13)^a>>>10,n=((n=t[c-15])>>>7|n<<25)^(n>>>18|n<<14)^n>>>3,t[c]=a+t[c-7]+n+t[c-16]|0;for(u=e.h0,l=e.h1,p=e.h2,f=e.h3,h=e.h4,d=e.h5,y=e.h6,g=e.h7,c=0;c<64;++c)i=(u>>>2|u<<30)^(u>>>13|u<<19)^(u>>>22|u<<10),s=u&l|p&(u^l),a=g+((h>>>6|h<<26)^(h>>>11|h<<21)^(h>>>25|h<<7))+(y^h&(d^y))+o[c]+t[c],g=y,y=d,d=h,h=f+a>>>0,f=p,p=l,l=u,u=a+(n=i+s)>>>0;e.h0=e.h0+u|0,e.h1=e.h1+l|0,e.h2=e.h2+p|0,e.h3=e.h3+f|0,e.h4=e.h4+h|0,e.h5=e.h5+d|0,e.h6=e.h6+y|0,e.h7=e.h7+g|0,m-=64}}},function(e,t,r){var a=r(0);r(1);var n=null;!a.util.isNodejs||a.options.usePureJavaScript||process.versions["node-webkit"]||(n=r(16)),(e.exports=a.prng=a.prng||{}).create=function(e){for(var t={plugin:e,key:null,seed:null,time:null,reseeds:0,generated:0,keyBytes:""},r=e.md,i=new Array(32),s=0;s<32;++s)i[s]=r.create();function o(){if(t.pools[0].messageLength>=32)return c();var e=32-t.pools[0].messageLength<<5;t.collect(t.seedFileSync(e)),c()}function c(){t.reseeds=4294967295===t.reseeds?0:t.reseeds+1;var e=t.plugin.md.create();e.update(t.keyBytes);for(var r=1,a=0;a<32;++a)t.reseeds%r==0&&(e.update(t.pools[a].digest().getBytes()),t.pools[a].start()),r<<=1;t.keyBytes=e.digest().getBytes(),e.start(),e.update(t.keyBytes);var n=e.digest().getBytes();t.key=t.plugin.formatKey(t.keyBytes),t.seed=t.plugin.formatSeed(n),t.generated=0}function u(e){var t=null,r=a.util.globalScope,n=r.crypto||r.msCrypto;n&&n.getRandomValues&&(t=function(e){return n.getRandomValues(e)});var i=a.util.createBuffer();if(t)for(;i.length()<e;){var s=Math.max(1,Math.min(e-i.length(),65536)/4),o=new Uint32Array(Math.floor(s));try{t(o);for(var c=0;c<o.length;++c)i.putInt32(o[c])}catch(e){if(!("undefined"!=typeof QuotaExceededError&&e instanceof QuotaExceededError))throw e}}if(i.length()<e)for(var u,l,p,f=Math.floor(65536*Math.random());i.length()<e;){l=16807*(65535&f),l+=(32767&(u=16807*(f>>16)))<<16,f=4294967295&(l=(2147483647&(l+=u>>15))+(l>>31));for(c=0;c<3;++c)p=f>>>(c<<3),p^=Math.floor(256*Math.random()),i.putByte(String.fromCharCode(255&p))}return i.getBytes(e)}return t.pools=i,t.pool=0,t.generate=function(e,r){if(!r)return t.generateSync(e);var n=t.plugin.cipher,i=t.plugin.increment,s=t.plugin.formatKey,o=t.plugin.formatSeed,u=a.util.createBuffer();t.key=null,function l(p){if(p)return r(p);if(u.length()>=e)return r(null,u.getBytes(e));t.generated>1048575&&(t.key=null);if(null===t.key)return a.util.nextTick((function(){!function(e){if(t.pools[0].messageLength>=32)return c(),e();var r=32-t.pools[0].messageLength<<5;t.seedFile(r,(function(r,a){if(r)return e(r);t.collect(a),c(),e()}))}(l)}));var f=n(t.key,t.seed);t.generated+=f.length,u.putBytes(f),t.key=s(n(t.key,i(t.seed))),t.seed=o(n(t.key,t.seed)),a.util.setImmediate(l)}()},t.generateSync=function(e){var r=t.plugin.cipher,n=t.plugin.increment,i=t.plugin.formatKey,s=t.plugin.formatSeed;t.key=null;for(var c=a.util.createBuffer();c.length()<e;){t.generated>1048575&&(t.key=null),null===t.key&&o();var u=r(t.key,t.seed);t.generated+=u.length,c.putBytes(u),t.key=i(r(t.key,n(t.seed))),t.seed=s(r(t.key,t.seed))}return c.getBytes(e)},n?(t.seedFile=function(e,t){n.randomBytes(e,(function(e,r){if(e)return t(e);t(null,r.toString())}))},t.seedFileSync=function(e){return n.randomBytes(e).toString()}):(t.seedFile=function(e,t){try{t(null,u(e))}catch(e){t(e)}},t.seedFileSync=u),t.collect=function(e){for(var r=e.length,a=0;a<r;++a)t.pools[t.pool].update(e.substr(a,1)),t.pool=31===t.pool?0:t.pool+1},t.collectInt=function(e,r){for(var a="",n=0;n<r;n+=8)a+=String.fromCharCode(e>>n&255);t.collect(a)},t.registerWorker=function(e){if(e===self)t.seedFile=function(e,t){self.addEventListener("message",(function e(r){var a=r.data;a.forge&&a.forge.prng&&(self.removeEventListener("message",e),t(a.forge.prng.err,a.forge.prng.bytes))})),self.postMessage({forge:{prng:{needed:e}}})};else{e.addEventListener("message",(function(r){var a=r.data;a.forge&&a.forge.prng&&t.seedFile(a.forge.prng.needed,(function(t,r){e.postMessage({forge:{prng:{err:t,bytes:r}}})}))}))}},t}},function(e,t,r){var a=r(0);r(1);var n=[217,120,249,196,25,221,181,237,40,233,253,121,74,160,216,157,198,126,55,131,43,118,83,142,98,76,100,136,68,139,251,162,23,154,89,245,135,179,79,19,97,69,109,141,9,129,125,50,189,143,64,235,134,183,123,11,240,149,33,34,92,107,78,130,84,214,101,147,206,96,178,28,115,86,192,20,167,140,241,220,18,117,202,31,59,190,228,209,66,61,212,48,163,60,182,38,111,191,14,218,70,105,7,87,39,242,29,155,188,148,67,3,248,17,199,246,144,239,62,231,6,195,213,47,200,102,30,215,8,232,234,222,128,82,238,247,132,170,114,172,53,77,106,42,150,26,210,113,90,21,73,116,75,159,208,94,4,24,164,236,194,224,65,110,15,81,203,204,36,145,175,80,161,244,112,57,153,124,58,133,35,184,180,122,252,2,54,91,37,85,151,49,45,93,250,152,227,138,146,174,5,223,41,16,103,108,186,201,211,0,230,207,225,158,168,44,99,22,1,63,88,226,137,169,13,56,52,27,171,51,255,176,187,72,12,95,185,177,205,46,197,243,219,71,229,165,156,119,10,166,32,104,254,127,193,173],i=[1,2,3,5],s=function(e,t){return e<<t&65535|(65535&e)>>16-t},o=function(e,t){return(65535&e)>>t|e<<16-t&65535};e.exports=a.rc2=a.rc2||{},a.rc2.expandKey=function(e,t){"string"==typeof e&&(e=a.util.createBuffer(e)),t=t||128;var r,i=e,s=e.length(),o=t,c=Math.ceil(o/8),u=255>>(7&o);for(r=s;r<128;r++)i.putByte(n[i.at(r-1)+i.at(r-s)&255]);for(i.setAt(128-c,n[i.at(128-c)&u]),r=127-c;r>=0;r--)i.setAt(r,n[i.at(r+1)^i.at(r+c)]);return i};var c=function(e,t,r){var n,c,u,l,p=!1,f=null,h=null,d=null,y=[];for(e=a.rc2.expandKey(e,t),u=0;u<64;u++)y.push(e.getInt16Le());r?(n=function(e){for(u=0;u<4;u++)e[u]+=y[l]+(e[(u+3)%4]&e[(u+2)%4])+(~e[(u+3)%4]&e[(u+1)%4]),e[u]=s(e[u],i[u]),l++},c=function(e){for(u=0;u<4;u++)e[u]+=y[63&e[(u+3)%4]]}):(n=function(e){for(u=3;u>=0;u--)e[u]=o(e[u],i[u]),e[u]-=y[l]+(e[(u+3)%4]&e[(u+2)%4])+(~e[(u+3)%4]&e[(u+1)%4]),l--},c=function(e){for(u=3;u>=0;u--)e[u]-=y[63&e[(u+3)%4]]});var g=function(e){var t=[];for(u=0;u<4;u++){var a=f.getInt16Le();null!==d&&(r?a^=d.getInt16Le():d.putInt16Le(a)),t.push(65535&a)}l=r?0:63;for(var n=0;n<e.length;n++)for(var i=0;i<e[n][0];i++)e[n][1](t);for(u=0;u<4;u++)null!==d&&(r?d.putInt16Le(t[u]):t[u]^=d.getInt16Le()),h.putInt16Le(t[u])},m=null;return m={start:function(e,t){e&&"string"==typeof e&&(e=a.util.createBuffer(e)),p=!1,f=a.util.createBuffer(),h=t||new a.util.createBuffer,d=e,m.output=h},update:function(e){for(p||f.putBuffer(e);f.length()>=8;)g([[5,n],[1,c],[6,n],[1,c],[5,n]])},finish:function(e){var t=!0;if(r)if(e)t=e(8,f,!r);else{var a=8===f.length()?8:8-f.length();f.fillWithByte(a,a)}if(t&&(p=!0,m.update()),!r&&(t=0===f.length()))if(e)t=e(8,h,!r);else{var n=h.length(),i=h.at(n-1);i>n?t=!1:h.truncate(i)}return t}}};a.rc2.startEncrypting=function(e,t,r){var n=a.rc2.createEncryptionCipher(e,128);return n.start(t,r),n},a.rc2.createEncryptionCipher=function(e,t){return c(e,t,!0)},a.rc2.startDecrypting=function(e,t,r){var n=a.rc2.createDecryptionCipher(e,128);return n.start(t,r),n},a.rc2.createDecryptionCipher=function(e,t){return c(e,t,!1)}},function(e,t,r){var a=r(0);r(1),r(2),r(9);var n=e.exports=a.pkcs1=a.pkcs1||{};function i(e,t,r){r||(r=a.md.sha1.create());for(var n="",i=Math.ceil(t/r.digestLength),s=0;s<i;++s){var o=String.fromCharCode(s>>24&255,s>>16&255,s>>8&255,255&s);r.start(),r.update(e+o),n+=r.digest().getBytes()}return n.substring(0,t)}n.encode_rsa_oaep=function(e,t,r){var n,s,o,c;"string"==typeof r?(n=r,s=arguments[3]||void 0,o=arguments[4]||void 0):r&&(n=r.label||void 0,s=r.seed||void 0,o=r.md||void 0,r.mgf1&&r.mgf1.md&&(c=r.mgf1.md)),o?o.start():o=a.md.sha1.create(),c||(c=o);var u=Math.ceil(e.n.bitLength()/8),l=u-2*o.digestLength-2;if(t.length>l)throw(g=new Error("RSAES-OAEP input message length is too long.")).length=t.length,g.maxLength=l,g;n||(n=""),o.update(n,"raw");for(var p=o.digest(),f="",h=l-t.length,d=0;d<h;d++)f+="\0";var y=p.getBytes()+f+""+t;if(s){if(s.length!==o.digestLength){var g;throw(g=new Error("Invalid RSAES-OAEP seed. The seed length must match the digest length.")).seedLength=s.length,g.digestLength=o.digestLength,g}}else s=a.random.getBytes(o.digestLength);var m=i(s,u-o.digestLength-1,c),v=a.util.xorBytes(y,m,y.length),C=i(v,o.digestLength,c),E=a.util.xorBytes(s,C,s.length);return"\0"+E+v},n.decode_rsa_oaep=function(e,t,r){var n,s,o;"string"==typeof r?(n=r,s=arguments[3]||void 0):r&&(n=r.label||void 0,s=r.md||void 0,r.mgf1&&r.mgf1.md&&(o=r.mgf1.md));var c=Math.ceil(e.n.bitLength()/8);if(t.length!==c)throw(v=new Error("RSAES-OAEP encoded message length is invalid.")).length=t.length,v.expectedLength=c,v;if(void 0===s?s=a.md.sha1.create():s.start(),o||(o=s),c<2*s.digestLength+2)throw new Error("RSAES-OAEP key is too short for the hash function.");n||(n=""),s.update(n,"raw");for(var u=s.digest().getBytes(),l=t.charAt(0),p=t.substring(1,s.digestLength+1),f=t.substring(1+s.digestLength),h=i(f,s.digestLength,o),d=a.util.xorBytes(p,h,p.length),y=i(d,c-s.digestLength-1,o),g=a.util.xorBytes(f,y,f.length),m=g.substring(0,s.digestLength),v="\0"!==l,C=0;C<s.digestLength;++C)v|=u.charAt(C)!==m.charAt(C);for(var E=1,S=s.digestLength,T=s.digestLength;T<g.length;T++){var I=g.charCodeAt(T),b=1&I^1,A=E?65534:0;v|=I&A,S+=E&=b}if(v||1!==g.charCodeAt(S))throw new Error("Invalid RSAES-OAEP padding.");return g.substring(S+1)}},function(e,t,r){var a=r(0);r(1),r(12),r(2),function(){if(a.prime)e.exports=a.prime;else{var t=e.exports=a.prime=a.prime||{},r=a.jsbn.BigInteger,n=[6,4,2,4,2,4,6,2],i=new r(null);i.fromInt(30);var s=function(e,t){return e|t};t.generateProbablePrime=function(e,t,n){"function"==typeof t&&(n=t,t={});var i=(t=t||{}).algorithm||"PRIMEINC";"string"==typeof i&&(i={name:i}),i.options=i.options||{};var s=t.prng||a.random,u={nextBytes:function(e){for(var t=s.getBytesSync(e.length),r=0;r<e.length;++r)e[r]=t.charCodeAt(r)}};if("PRIMEINC"===i.name)return function(e,t,n,i){if("workers"in n)return function(e,t,n,i){if("undefined"==typeof Worker)return o(e,t,n,i);var s=c(e,t),u=n.workers,l=n.workLoad||100,p=30*l/8,f=n.workerScript||"forge/prime.worker.js";if(-1===u)return a.util.estimateCores((function(e,t){e&&(t=2),u=t-1,h()}));function h(){u=Math.max(1,u);for(var a=[],n=0;n<u;++n)a[n]=new Worker(f);for(n=0;n<u;++n)a[n].addEventListener("message",h);var o=!1;function h(n){if(!o){0;var u=n.data;if(u.found){for(var f=0;f<a.length;++f)a[f].terminate();return o=!0,i(null,new r(u.prime,16))}s.bitLength()>e&&(s=c(e,t));var h=s.toString(16);n.target.postMessage({hex:h,workLoad:l}),s.dAddOffset(p,0)}}}h()}(e,t,n,i);return o(e,t,n,i)}(e,u,i.options,n);throw new Error("Invalid prime generation algorithm: "+i.name)}}function o(e,t,r,i){var s=c(e,t),o=function(e){return e<=100?27:e<=150?18:e<=200?15:e<=250?12:e<=300?9:e<=350?8:e<=400?7:e<=500?6:e<=600?5:e<=800?4:e<=1250?3:2}(s.bitLength());"millerRabinTests"in r&&(o=r.millerRabinTests);var u=10;"maxBlockTime"in r&&(u=r.maxBlockTime),function e(t,r,i,s,o,u,l){var p=+new Date;do{if(t.bitLength()>r&&(t=c(r,i)),t.isProbablePrime(o))return l(null,t);t.dAddOffset(n[s++%8],0)}while(u<0||+new Date-p<u);a.util.setImmediate((function(){e(t,r,i,s,o,u,l)}))}(s,e,t,0,o,u,i)}function c(e,t){var a=new r(e,t),n=e-1;return a.testBit(n)||a.bitwiseTo(r.ONE.shiftLeft(n),s,a),a.dAddOffset(31-a.mod(i).byteValue(),0),a}}()},function(e,t,r){var a=r(0);r(3),r(8),r(6),r(29),r(22),r(2),r(11),r(9),r(1),r(17);var n=a.asn1,i=a.pki,s=e.exports=a.pkcs12=a.pkcs12||{},o={name:"ContentInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"ContentInfo.contentType",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"contentType"},{name:"ContentInfo.content",tagClass:n.Class.CONTEXT_SPECIFIC,constructed:!0,captureAsn1:"content"}]},c={name:"PFX",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"version"},o,{name:"PFX.macData",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,optional:!0,captureAsn1:"mac",value:[{name:"PFX.macData.mac",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.macData.mac.digestAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PFX.macData.mac.digestAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"macAlgorithm"},{name:"PFX.macData.mac.digestAlgorithm.parameters",tagClass:n.Class.UNIVERSAL,captureAsn1:"macAlgorithmParameters"}]},{name:"PFX.macData.mac.digest",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"macDigest"}]},{name:"PFX.macData.macSalt",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"macSalt"},{name:"PFX.macData.iterations",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,optional:!0,capture:"macIterations"}]}]},u={name:"SafeBag",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"SafeBag.bagId",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"bagId"},{name:"SafeBag.bagValue",tagClass:n.Class.CONTEXT_SPECIFIC,constructed:!0,captureAsn1:"bagValue"},{name:"SafeBag.bagAttributes",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,constructed:!0,optional:!0,capture:"bagAttributes"}]},l={name:"Attribute",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"Attribute.attrId",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"oid"},{name:"Attribute.attrValues",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,constructed:!0,capture:"values"}]},p={name:"CertBag",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"CertBag.certId",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"certId"},{name:"CertBag.certValue",tagClass:n.Class.CONTEXT_SPECIFIC,constructed:!0,value:[{name:"CertBag.certValue[0]",tagClass:n.Class.UNIVERSAL,type:n.Class.OCTETSTRING,constructed:!1,capture:"cert"}]}]};function f(e,t,r,a){for(var n=[],i=0;i<e.length;i++)for(var s=0;s<e[i].safeBags.length;s++){var o=e[i].safeBags[s];void 0!==a&&o.type!==a||(null!==t?void 0!==o.attributes[t]&&o.attributes[t].indexOf(r)>=0&&n.push(o):n.push(o))}return n}function h(e){if(e.composed||e.constructed){for(var t=a.util.createBuffer(),r=0;r<e.value.length;++r)t.putBytes(e.value[r].value);e.composed=e.constructed=!1,e.value=t.getBytes()}return e}function d(e,t){var r={},s=[];if(!n.validate(e,a.pkcs7.asn1.encryptedDataValidator,r,s))throw(o=new Error("Cannot read EncryptedContentInfo.")).errors=s,o;var o,c=n.derToOid(r.contentType);if(c!==i.oids.data)throw(o=new Error("PKCS#12 EncryptedContentInfo ContentType is not Data.")).oid=c,o;c=n.derToOid(r.encAlgorithm);var u=i.pbe.getCipher(c,r.encParameter,t),l=h(r.encryptedContentAsn1),p=a.util.createBuffer(l.value);if(u.update(p),!u.finish())throw new Error("Failed to decrypt PKCS#12 SafeContents.");return u.output.getBytes()}function y(e,t,r){if(!t&&0===e.length)return[];if((e=n.fromDer(e,t)).tagClass!==n.Class.UNIVERSAL||e.type!==n.Type.SEQUENCE||!0!==e.constructed)throw new Error("PKCS#12 SafeContents expected to be a SEQUENCE OF SafeBag.");for(var a=[],s=0;s<e.value.length;s++){var o=e.value[s],c={},l=[];if(!n.validate(o,u,c,l))throw(m=new Error("Cannot read SafeBag.")).errors=l,m;var f,h,d={type:n.derToOid(c.bagId),attributes:g(c.bagAttributes)};a.push(d);var y=c.bagValue.value[0];switch(d.type){case i.oids.pkcs8ShroudedKeyBag:if(null===(y=i.decryptPrivateKeyInfo(y,r)))throw new Error("Unable to decrypt PKCS#8 ShroudedKeyBag, wrong password?");case i.oids.keyBag:try{d.key=i.privateKeyFromAsn1(y)}catch(e){d.key=null,d.asn1=y}continue;case i.oids.certBag:f=p,h=function(){if(n.derToOid(c.certId)!==i.oids.x509Certificate){var e=new Error("Unsupported certificate type, only X.509 supported.");throw e.oid=n.derToOid(c.certId),e}var r=n.fromDer(c.cert,t);try{d.cert=i.certificateFromAsn1(r,!0)}catch(e){d.cert=null,d.asn1=r}};break;default:var m;throw(m=new Error("Unsupported PKCS#12 SafeBag type.")).oid=d.type,m}if(void 0!==f&&!n.validate(y,f,c,l))throw(m=new Error("Cannot read PKCS#12 "+f.name)).errors=l,m;h()}return a}function g(e){var t={};if(void 0!==e)for(var r=0;r<e.length;++r){var a={},s=[];if(!n.validate(e[r],l,a,s)){var o=new Error("Cannot read PKCS#12 BagAttribute.");throw o.errors=s,o}var c=n.derToOid(a.oid);if(void 0!==i.oids[c]){t[i.oids[c]]=[];for(var u=0;u<a.values.length;++u)t[i.oids[c]].push(a.values[u].value)}}return t}s.pkcs12FromAsn1=function(e,t,r){"string"==typeof t?(r=t,t=!0):void 0===t&&(t=!0);var u={};if(!n.validate(e,c,u,[]))throw(l=new Error("Cannot read PKCS#12 PFX. ASN.1 object is not an PKCS#12 PFX.")).errors=l,l;var l,p={version:u.version.charCodeAt(0),safeContents:[],getBags:function(e){var t,r={};return"localKeyId"in e?t=e.localKeyId:"localKeyIdHex"in e&&(t=a.util.hexToBytes(e.localKeyIdHex)),void 0===t&&!("friendlyName"in e)&&"bagType"in e&&(r[e.bagType]=f(p.safeContents,null,null,e.bagType)),void 0!==t&&(r.localKeyId=f(p.safeContents,"localKeyId",t,e.bagType)),"friendlyName"in e&&(r.friendlyName=f(p.safeContents,"friendlyName",e.friendlyName,e.bagType)),r},getBagsByFriendlyName:function(e,t){return f(p.safeContents,"friendlyName",e,t)},getBagsByLocalKeyId:function(e,t){return f(p.safeContents,"localKeyId",e,t)}};if(3!==u.version.charCodeAt(0))throw(l=new Error("PKCS#12 PFX of version other than 3 not supported.")).version=u.version.charCodeAt(0),l;if(n.derToOid(u.contentType)!==i.oids.data)throw(l=new Error("Only PKCS#12 PFX in password integrity mode supported.")).oid=n.derToOid(u.contentType),l;var g=u.content.value[0];if(g.tagClass!==n.Class.UNIVERSAL||g.type!==n.Type.OCTETSTRING)throw new Error("PKCS#12 authSafe content data is not an OCTET STRING.");if(g=h(g),u.mac){var m=null,v=0,C=n.derToOid(u.macAlgorithm);switch(C){case i.oids.sha1:m=a.md.sha1.create(),v=20;break;case i.oids.sha256:m=a.md.sha256.create(),v=32;break;case i.oids.sha384:m=a.md.sha384.create(),v=48;break;case i.oids.sha512:m=a.md.sha512.create(),v=64;break;case i.oids.md5:m=a.md.md5.create(),v=16}if(null===m)throw new Error("PKCS#12 uses unsupported MAC algorithm: "+C);var E=new a.util.ByteBuffer(u.macSalt),S="macIterations"in u?parseInt(a.util.bytesToHex(u.macIterations),16):1,T=s.generateKey(r,E,3,S,v,m),I=a.hmac.create();if(I.start(m,T),I.update(g.value),I.getMac().getBytes()!==u.macDigest)throw new Error("PKCS#12 MAC could not be verified. Invalid password?")}return function(e,t,r,a){if((t=n.fromDer(t,r)).tagClass!==n.Class.UNIVERSAL||t.type!==n.Type.SEQUENCE||!0!==t.constructed)throw new Error("PKCS#12 AuthenticatedSafe expected to be a SEQUENCE OF ContentInfo");for(var s=0;s<t.value.length;s++){var c=t.value[s],u={},l=[];if(!n.validate(c,o,u,l))throw(m=new Error("Cannot read ContentInfo.")).errors=l,m;var p={encrypted:!1},f=null,g=u.content.value[0];switch(n.derToOid(u.contentType)){case i.oids.data:if(g.tagClass!==n.Class.UNIVERSAL||g.type!==n.Type.OCTETSTRING)throw new Error("PKCS#12 SafeContents Data is not an OCTET STRING.");f=h(g).value;break;case i.oids.encryptedData:f=d(g,a),p.encrypted=!0;break;default:var m;throw(m=new Error("Unsupported PKCS#12 contentType.")).contentType=n.derToOid(u.contentType),m}p.safeBags=y(f,r,a),e.safeContents.push(p)}}(p,g.value,t,r),p},s.toPkcs12Asn1=function(e,t,r,o){(o=o||{}).saltSize=o.saltSize||8,o.count=o.count||2048,o.algorithm=o.algorithm||o.encAlgorithm||"aes128","useMac"in o||(o.useMac=!0),"localKeyId"in o||(o.localKeyId=null),"generateLocalKeyId"in o||(o.generateLocalKeyId=!0);var c,u=o.localKeyId;if(null!==u)u=a.util.hexToBytes(u);else if(o.generateLocalKeyId)if(t){var l=a.util.isArray(t)?t[0]:t;"string"==typeof l&&(l=i.certificateFromPem(l)),(N=a.md.sha1.create()).update(n.toDer(i.certificateToAsn1(l)).getBytes()),u=N.digest().getBytes()}else u=a.random.getBytes(20);var p=[];null!==u&&p.push(n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.localKeyId).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,u)])])),"friendlyName"in o&&p.push(n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.friendlyName).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[n.create(n.Class.UNIVERSAL,n.Type.BMPSTRING,!1,o.friendlyName)])])),p.length>0&&(c=n.create(n.Class.UNIVERSAL,n.Type.SET,!0,p));var f=[],h=[];null!==t&&(h=a.util.isArray(t)?t:[t]);for(var d=[],y=0;y<h.length;++y){"string"==typeof(t=h[y])&&(t=i.certificateFromPem(t));var g=0===y?c:void 0,m=i.certificateToAsn1(t),v=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.certBag).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.x509Certificate).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,n.toDer(m).getBytes())])])]),g]);d.push(v)}if(d.length>0){var C=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,d),E=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.data).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,n.toDer(C).getBytes())])]);f.push(E)}var S=null;if(null!==e){var T=i.wrapRsaPrivateKey(i.privateKeyToAsn1(e));S=null===r?n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.keyBag).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[T]),c]):n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.pkcs8ShroudedKeyBag).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[i.encryptPrivateKeyInfo(T,r,o)]),c]);var I=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[S]),b=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.data).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,n.toDer(I).getBytes())])]);f.push(b)}var A,B=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,f);if(o.useMac){var N=a.md.sha1.create(),k=new a.util.ByteBuffer(a.random.getBytes(o.saltSize)),w=o.count,R=(e=s.generateKey(r,k,3,w,20),a.hmac.create());R.start(N,e),R.update(n.toDer(B).getBytes());var _=R.getMac();A=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.sha1).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")]),n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,_.getBytes())]),n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,k.getBytes()),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(w).getBytes())])}return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(3).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(i.oids.data).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,n.toDer(B).getBytes())])]),A])},s.generateKey=a.pbe.generatePkcs12Key},function(e,t,r){var a=r(0);r(3),r(1);var n=a.asn1,i=e.exports=a.pkcs7asn1=a.pkcs7asn1||{};a.pkcs7=a.pkcs7||{},a.pkcs7.asn1=i;var s={name:"ContentInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"ContentInfo.ContentType",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"contentType"},{name:"ContentInfo.content",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,captureAsn1:"content"}]};i.contentInfoValidator=s;var o={name:"EncryptedContentInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedContentInfo.contentType",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"contentType"},{name:"EncryptedContentInfo.contentEncryptionAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedContentInfo.contentEncryptionAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"encAlgorithm"},{name:"EncryptedContentInfo.contentEncryptionAlgorithm.parameter",tagClass:n.Class.UNIVERSAL,captureAsn1:"encParameter"}]},{name:"EncryptedContentInfo.encryptedContent",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,capture:"encryptedContent",captureAsn1:"encryptedContentAsn1"}]};i.envelopedDataValidator={name:"EnvelopedData",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"EnvelopedData.Version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"version"},{name:"EnvelopedData.RecipientInfos",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,constructed:!0,captureAsn1:"recipientInfos"}].concat(o)},i.encryptedDataValidator={name:"EncryptedData",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"EncryptedData.Version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"version"}].concat(o)};var c={name:"SignerInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1},{name:"SignerInfo.issuerAndSerialNumber",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.issuerAndSerialNumber.issuer",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"issuer"},{name:"SignerInfo.issuerAndSerialNumber.serialNumber",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"serial"}]},{name:"SignerInfo.digestAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"SignerInfo.digestAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"digestAlgorithm"},{name:"SignerInfo.digestAlgorithm.parameter",tagClass:n.Class.UNIVERSAL,constructed:!1,captureAsn1:"digestParameter",optional:!0}]},{name:"SignerInfo.authenticatedAttributes",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,constructed:!0,optional:!0,capture:"authenticatedAttributes"},{name:"SignerInfo.digestEncryptionAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,capture:"signatureAlgorithm"},{name:"SignerInfo.encryptedDigest",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"signature"},{name:"SignerInfo.unauthenticatedAttributes",tagClass:n.Class.CONTEXT_SPECIFIC,type:1,constructed:!0,optional:!0,capture:"unauthenticatedAttributes"}]};i.signedDataValidator={name:"SignedData",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"SignedData.Version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"version"},{name:"SignedData.DigestAlgorithms",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,constructed:!0,captureAsn1:"digestAlgorithms"},s,{name:"SignedData.Certificates",tagClass:n.Class.CONTEXT_SPECIFIC,type:0,optional:!0,captureAsn1:"certificates"},{name:"SignedData.CertificateRevocationLists",tagClass:n.Class.CONTEXT_SPECIFIC,type:1,optional:!0,captureAsn1:"crls"},{name:"SignedData.SignerInfos",tagClass:n.Class.UNIVERSAL,type:n.Type.SET,capture:"signerInfos",optional:!0,value:[c]}]},i.recipientInfoValidator={name:"RecipientInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"version"},{name:"RecipientInfo.issuerAndSerial",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.issuerAndSerial.issuer",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"issuer"},{name:"RecipientInfo.issuerAndSerial.serialNumber",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"serial"}]},{name:"RecipientInfo.keyEncryptionAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"RecipientInfo.keyEncryptionAlgorithm.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"encAlgorithm"},{name:"RecipientInfo.keyEncryptionAlgorithm.parameter",tagClass:n.Class.UNIVERSAL,constructed:!1,captureAsn1:"encParameter"}]},{name:"RecipientInfo.encryptedKey",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"encKey"}]}},function(e,t,r){var a=r(0);r(1),a.mgf=a.mgf||{},(e.exports=a.mgf.mgf1=a.mgf1=a.mgf1||{}).create=function(e){return{generate:function(t,r){for(var n=new a.util.ByteBuffer,i=Math.ceil(r/e.digestLength),s=0;s<i;s++){var o=new a.util.ByteBuffer;o.putInt32(s),e.start(),e.update(t+o.getBytes()),n.putBuffer(e.digest())}return n.truncate(n.length()-r),n.getBytes()}}}},function(e,t,r){var a=r(0);e.exports=a.debug=a.debug||{},a.debug.storage={},a.debug.get=function(e,t){var r;return void 0===e?r=a.debug.storage:e in a.debug.storage&&(r=void 0===t?a.debug.storage[e]:a.debug.storage[e][t]),r},a.debug.set=function(e,t,r){e in a.debug.storage||(a.debug.storage[e]={}),a.debug.storage[e][t]=r},a.debug.clear=function(e,t){void 0===e?a.debug.storage={}:e in a.debug.storage&&(void 0===t?delete a.debug.storage[e]:delete a.debug.storage[e][t])}},function(e,t,r){var a=r(0);r(4),r(1);var n=e.exports=a.sha512=a.sha512||{};a.md.sha512=a.md.algorithms.sha512=n;var i=a.sha384=a.sha512.sha384=a.sha512.sha384||{};i.create=function(){return n.create("SHA-384")},a.md.sha384=a.md.algorithms.sha384=i,a.sha512.sha256=a.sha512.sha256||{create:function(){return n.create("SHA-512/256")}},a.md["sha512/256"]=a.md.algorithms["sha512/256"]=a.sha512.sha256,a.sha512.sha224=a.sha512.sha224||{create:function(){return n.create("SHA-512/224")}},a.md["sha512/224"]=a.md.algorithms["sha512/224"]=a.sha512.sha224,n.create=function(e){if(o||(s=String.fromCharCode(128),s+=a.util.fillString(String.fromCharCode(0),128),c=[[1116352408,3609767458],[1899447441,602891725],[3049323471,3964484399],[3921009573,2173295548],[961987163,4081628472],[1508970993,3053834265],[2453635748,2937671579],[2870763221,3664609560],[3624381080,2734883394],[310598401,1164996542],[607225278,1323610764],[1426881987,3590304994],[1925078388,4068182383],[2162078206,991336113],[2614888103,633803317],[3248222580,3479774868],[3835390401,2666613458],[4022224774,944711139],[264347078,2341262773],[604807628,2007800933],[770255983,1495990901],[1249150122,1856431235],[1555081692,3175218132],[1996064986,2198950837],[2554220882,3999719339],[2821834349,766784016],[2952996808,2566594879],[3210313671,3203337956],[3336571891,1034457026],[3584528711,2466948901],[113926993,3758326383],[338241895,168717936],[666307205,1188179964],[773529912,1546045734],[1294757372,1522805485],[1396182291,2643833823],[1695183700,2343527390],[1986661051,1014477480],[2177026350,1206759142],[2456956037,344077627],[2730485921,1290863460],[2820302411,3158454273],[3259730800,3505952657],[3345764771,106217008],[3516065817,3606008344],[3600352804,1432725776],[4094571909,1467031594],[275423344,851169720],[430227734,3100823752],[506948616,1363258195],[659060556,3750685593],[883997877,3785050280],[958139571,3318307427],[1322822218,3812723403],[1537002063,2003034995],[1747873779,3602036899],[1955562222,1575990012],[2024104815,1125592928],[2227730452,2716904306],[2361852424,442776044],[2428436474,593698344],[2756734187,3733110249],[3204031479,2999351573],[3329325298,3815920427],[3391569614,3928383900],[3515267271,566280711],[3940187606,3454069534],[4118630271,4000239992],[116418474,1914138554],[174292421,2731055270],[289380356,3203993006],[460393269,320620315],[685471733,587496836],[852142971,1086792851],[1017036298,365543100],[1126000580,2618297676],[1288033470,3409855158],[1501505948,4234509866],[1607167915,987167468],[1816402316,1246189591]],(u={})["SHA-512"]=[[1779033703,4089235720],[3144134277,2227873595],[1013904242,4271175723],[2773480762,1595750129],[1359893119,2917565137],[2600822924,725511199],[528734635,4215389547],[1541459225,327033209]],u["SHA-384"]=[[3418070365,3238371032],[1654270250,914150663],[2438529370,812702999],[355462360,4144912697],[1731405415,4290775857],[2394180231,1750603025],[3675008525,1694076839],[1203062813,3204075428]],u["SHA-512/256"]=[[573645204,4230739756],[2673172387,3360449730],[596883563,1867755857],[2520282905,1497426621],[2519219938,2827943907],[3193839141,1401305490],[721525244,746961066],[246885852,2177182882]],u["SHA-512/224"]=[[2352822216,424955298],[1944164710,2312950998],[502970286,855612546],[1738396948,1479516111],[258812777,2077511080],[2011393907,79989058],[1067287976,1780299464],[286451373,2446758561]],o=!0),void 0===e&&(e="SHA-512"),!(e in u))throw new Error("Invalid SHA-512 algorithm: "+e);for(var t=u[e],r=null,n=a.util.createBuffer(),i=new Array(80),p=0;p<80;++p)i[p]=new Array(2);var f=64;switch(e){case"SHA-384":f=48;break;case"SHA-512/256":f=32;break;case"SHA-512/224":f=28}var h={algorithm:e.replace("-","").toLowerCase(),blockLength:128,digestLength:f,messageLength:0,fullMessageLength:null,messageLengthSize:16,start:function(){h.messageLength=0,h.fullMessageLength=h.messageLength128=[];for(var e=h.messageLengthSize/4,i=0;i<e;++i)h.fullMessageLength.push(0);n=a.util.createBuffer(),r=new Array(t.length);for(i=0;i<t.length;++i)r[i]=t[i].slice(0);return h}};return h.start(),h.update=function(e,t){"utf8"===t&&(e=a.util.encodeUtf8(e));var s=e.length;h.messageLength+=s,s=[s/4294967296>>>0,s>>>0];for(var o=h.fullMessageLength.length-1;o>=0;--o)h.fullMessageLength[o]+=s[1],s[1]=s[0]+(h.fullMessageLength[o]/4294967296>>>0),h.fullMessageLength[o]=h.fullMessageLength[o]>>>0,s[0]=s[1]/4294967296>>>0;return n.putBytes(e),l(r,i,n),(n.read>2048||0===n.length())&&n.compact(),h},h.digest=function(){var t=a.util.createBuffer();t.putBytes(n.bytes());var o,c=h.fullMessageLength[h.fullMessageLength.length-1]+h.messageLengthSize&h.blockLength-1;t.putBytes(s.substr(0,h.blockLength-c));for(var u=8*h.fullMessageLength[0],p=0;p<h.fullMessageLength.length-1;++p)u+=(o=8*h.fullMessageLength[p+1])/4294967296>>>0,t.putInt32(u>>>0),u=o>>>0;t.putInt32(u);var f=new Array(r.length);for(p=0;p<r.length;++p)f[p]=r[p].slice(0);l(f,i,t);var d,y=a.util.createBuffer();d="SHA-512"===e?f.length:"SHA-384"===e?f.length-2:f.length-4;for(p=0;p<d;++p)y.putInt32(f[p][0]),p===d-1&&"SHA-512/224"===e||y.putInt32(f[p][1]);return y},h};var s=null,o=!1,c=null,u=null;function l(e,t,r){for(var a,n,i,s,o,u,l,p,f,h,d,y,g,m,v,C,E,S,T,I,b,A,B,N,k,w,R,_,L,U,D,P,V,O=r.length();O>=128;){for(R=0;R<16;++R)t[R][0]=r.getInt32()>>>0,t[R][1]=r.getInt32()>>>0;for(;R<80;++R)a=(((_=(U=t[R-2])[0])>>>19|(L=U[1])<<13)^(L>>>29|_<<3)^_>>>6)>>>0,n=((_<<13|L>>>19)^(L<<3|_>>>29)^(_<<26|L>>>6))>>>0,i=(((_=(P=t[R-15])[0])>>>1|(L=P[1])<<31)^(_>>>8|L<<24)^_>>>7)>>>0,s=((_<<31|L>>>1)^(_<<24|L>>>8)^(_<<25|L>>>7))>>>0,D=t[R-7],V=t[R-16],L=n+D[1]+s+V[1],t[R][0]=a+D[0]+i+V[0]+(L/4294967296>>>0)>>>0,t[R][1]=L>>>0;for(d=e[0][0],y=e[0][1],g=e[1][0],m=e[1][1],v=e[2][0],C=e[2][1],E=e[3][0],S=e[3][1],T=e[4][0],I=e[4][1],b=e[5][0],A=e[5][1],B=e[6][0],N=e[6][1],k=e[7][0],w=e[7][1],R=0;R<80;++R)l=((T>>>14|I<<18)^(T>>>18|I<<14)^(I>>>9|T<<23))>>>0,p=(B^T&(b^B))>>>0,o=((d>>>28|y<<4)^(y>>>2|d<<30)^(y>>>7|d<<25))>>>0,u=((d<<4|y>>>28)^(y<<30|d>>>2)^(y<<25|d>>>7))>>>0,f=(d&g|v&(d^g))>>>0,h=(y&m|C&(y^m))>>>0,L=w+(((T<<18|I>>>14)^(T<<14|I>>>18)^(I<<23|T>>>9))>>>0)+((N^I&(A^N))>>>0)+c[R][1]+t[R][1],a=k+l+p+c[R][0]+t[R][0]+(L/4294967296>>>0)>>>0,n=L>>>0,i=o+f+((L=u+h)/4294967296>>>0)>>>0,s=L>>>0,k=B,w=N,B=b,N=A,b=T,A=I,T=E+a+((L=S+n)/4294967296>>>0)>>>0,I=L>>>0,E=v,S=C,v=g,C=m,g=d,m=y,d=a+i+((L=n+s)/4294967296>>>0)>>>0,y=L>>>0;L=e[0][1]+y,e[0][0]=e[0][0]+d+(L/4294967296>>>0)>>>0,e[0][1]=L>>>0,L=e[1][1]+m,e[1][0]=e[1][0]+g+(L/4294967296>>>0)>>>0,e[1][1]=L>>>0,L=e[2][1]+C,e[2][0]=e[2][0]+v+(L/4294967296>>>0)>>>0,e[2][1]=L>>>0,L=e[3][1]+S,e[3][0]=e[3][0]+E+(L/4294967296>>>0)>>>0,e[3][1]=L>>>0,L=e[4][1]+I,e[4][0]=e[4][0]+T+(L/4294967296>>>0)>>>0,e[4][1]=L>>>0,L=e[5][1]+A,e[5][0]=e[5][0]+b+(L/4294967296>>>0)>>>0,e[5][1]=L>>>0,L=e[6][1]+N,e[6][0]=e[6][0]+B+(L/4294967296>>>0)>>>0,e[6][1]=L>>>0,L=e[7][1]+w,e[7][0]=e[7][0]+k+(L/4294967296>>>0)>>>0,e[7][1]=L>>>0,O-=128}}},function(e,t,r){var a=r(0);r(1),e.exports=a.log=a.log||{},a.log.levels=["none","error","warning","info","debug","verbose","max"];var n={},i=[],s=null;a.log.LEVEL_LOCKED=2,a.log.NO_LEVEL_CHECK=4,a.log.INTERPOLATE=8;for(var o=0;o<a.log.levels.length;++o){var c=a.log.levels[o];n[c]={index:o,name:c.toUpperCase()}}a.log.logMessage=function(e){for(var t=n[e.level].index,r=0;r<i.length;++r){var s=i[r];if(s.flags&a.log.NO_LEVEL_CHECK)s.f(e);else t<=n[s.level].index&&s.f(s,e)}},a.log.prepareStandard=function(e){"standard"in e||(e.standard=n[e.level].name+" ["+e.category+"] "+e.message)},a.log.prepareFull=function(e){if(!("full"in e)){var t=[e.message];t=t.concat([]||!1),e.full=a.util.format.apply(this,t)}},a.log.prepareStandardFull=function(e){"standardFull"in e||(a.log.prepareStandard(e),e.standardFull=e.standard)};var u=["error","warning","info","debug","verbose"];for(o=0;o<u.length;++o)!function(e){a.log[e]=function(t,r){var n=Array.prototype.slice.call(arguments).slice(2),i={timestamp:new Date,level:e,category:t,message:r,arguments:n};a.log.logMessage(i)}}(u[o]);if(a.log.makeLogger=function(e){var t={flags:0,f:e};return a.log.setLevel(t,"none"),t},a.log.setLevel=function(e,t){var r=!1;if(e&&!(e.flags&a.log.LEVEL_LOCKED))for(var n=0;n<a.log.levels.length;++n){if(t==a.log.levels[n]){e.level=t,r=!0;break}}return r},a.log.lock=function(e,t){void 0===t||t?e.flags|=a.log.LEVEL_LOCKED:e.flags&=~a.log.LEVEL_LOCKED},a.log.addLogger=function(e){i.push(e)},"undefined"!=typeof console&&"log"in console){var l;if(console.error&&console.warn&&console.info&&console.debug){var p={error:console.error,warning:console.warn,info:console.info,debug:console.debug,verbose:console.debug},f=function(e,t){a.log.prepareStandard(t);var r=p[t.level],n=[t.standard];n=n.concat(t.arguments.slice()),r.apply(console,n)};l=a.log.makeLogger(f)}else{f=function(e,t){a.log.prepareStandardFull(t),console.log(t.standardFull)};l=a.log.makeLogger(f)}a.log.setLevel(l,"debug"),a.log.addLogger(l),s=l}else console={log:function(){}};if(null!==s){var h=a.util.getQueryVariables();if("console.level"in h&&a.log.setLevel(s,h["console.level"].slice(-1)[0]),"console.lock"in h)"true"==h["console.lock"].slice(-1)[0]&&a.log.lock(s)}a.log.consoleLogger=s},function(e,t,r){e.exports=r(35)},function(e,t,r){e.exports=r(0),r(5),r(38),r(3),r(13),r(31),r(10),r(40),r(8),r(42),r(33),r(43),r(30),r(15),r(7),r(26),r(28),r(44),r(21),r(27),r(24),r(18),r(2),r(25),r(45),r(46),r(20),r(1)},function(e,t){var r;r=function(){return this}();try{r=r||new Function("return this")()}catch(e){"object"==typeof window&&(r=window)}e.exports=r},function(e,t){var r={};e.exports=r;var a={};r.encode=function(e,t,r){if("string"!=typeof t)throw new TypeError('"alphabet" must be a string.');if(void 0!==r&&"number"!=typeof r)throw new TypeError('"maxline" must be a number.');var a="";if(e instanceof Uint8Array){var n=0,i=t.length,s=t.charAt(0),o=[0];for(n=0;n<e.length;++n){for(var c=0,u=e[n];c<o.length;++c)u+=o[c]<<8,o[c]=u%i,u=u/i|0;for(;u>0;)o.push(u%i),u=u/i|0}for(n=0;0===e[n]&&n<e.length-1;++n)a+=s;for(n=o.length-1;n>=0;--n)a+=t[o[n]]}else a=function(e,t){var r=0,a=t.length,n=t.charAt(0),i=[0];for(r=0;r<e.length();++r){for(var s=0,o=e.at(r);s<i.length;++s)o+=i[s]<<8,i[s]=o%a,o=o/a|0;for(;o>0;)i.push(o%a),o=o/a|0}var c="";for(r=0;0===e.at(r)&&r<e.length()-1;++r)c+=n;for(r=i.length-1;r>=0;--r)c+=t[i[r]];return c}(e,t);if(r){var l=new RegExp(".{1,"+r+"}","g");a=a.match(l).join("\r\n")}return a},r.decode=function(e,t){if("string"!=typeof e)throw new TypeError('"input" must be a string.');if("string"!=typeof t)throw new TypeError('"alphabet" must be a string.');var r=a[t];if(!r){r=a[t]=[];for(var n=0;n<t.length;++n)r[t.charCodeAt(n)]=n}e=e.replace(/\s/g,"");var i=t.length,s=t.charAt(0),o=[0];for(n=0;n<e.length;n++){var c=r[e.charCodeAt(n)];if(void 0===c)return;for(var u=0,l=c;u<o.length;++u)l+=o[u]*i,o[u]=255&l,l>>=8;for(;l>0;)o.push(255&l),l>>=8}for(var p=0;e[p]===s&&p<e.length-1;++p)o.push(0);return"undefined"!=typeof Buffer?Buffer.from(o.reverse()):new Uint8Array(o.reverse())}},function(e,t,r){var a=r(0);r(5),r(20);var n=e.exports=a.tls;function i(e,t,r){var i=t.entity===a.tls.ConnectionEnd.client;e.read.cipherState={init:!1,cipher:a.cipher.createDecipher("AES-CBC",i?r.keys.server_write_key:r.keys.client_write_key),iv:i?r.keys.server_write_IV:r.keys.client_write_IV},e.write.cipherState={init:!1,cipher:a.cipher.createCipher("AES-CBC",i?r.keys.client_write_key:r.keys.server_write_key),iv:i?r.keys.client_write_IV:r.keys.server_write_IV},e.read.cipherFunction=u,e.write.cipherFunction=s,e.read.macLength=e.write.macLength=r.mac_length,e.read.macFunction=e.write.macFunction=n.hmac_sha1}function s(e,t){var r,i=!1,s=t.macFunction(t.macKey,t.sequenceNumber,e);e.fragment.putBytes(s),t.updateSequenceNumber(),r=e.version.minor===n.Versions.TLS_1_0.minor?t.cipherState.init?null:t.cipherState.iv:a.random.getBytesSync(16),t.cipherState.init=!0;var c=t.cipherState.cipher;return c.start({iv:r}),e.version.minor>=n.Versions.TLS_1_1.minor&&c.output.putBytes(r),c.update(e.fragment),c.finish(o)&&(e.fragment=c.output,e.length=e.fragment.length(),i=!0),i}function o(e,t,r){if(!r){var a=e-t.length()%e;t.fillWithByte(a-1,a)}return!0}function c(e,t,r){var a=!0;if(r){for(var n=t.length(),i=t.last(),s=n-1-i;s<n-1;++s)a=a&&t.at(s)==i;a&&t.truncate(i+1)}return a}function u(e,t){var r,i=!1;r=e.version.minor===n.Versions.TLS_1_0.minor?t.cipherState.init?null:t.cipherState.iv:e.fragment.getBytes(16),t.cipherState.init=!0;var s=t.cipherState.cipher;s.start({iv:r}),s.update(e.fragment),i=s.finish(c);var o=t.macLength,u=a.random.getBytesSync(o),l=s.output.length();l>=o?(e.fragment=s.output.getBytes(l-o),u=s.output.getBytes(o)):e.fragment=s.output.getBytes(),e.fragment=a.util.createBuffer(e.fragment),e.length=e.fragment.length();var p=t.macFunction(t.macKey,t.sequenceNumber,e);return t.updateSequenceNumber(),i=function(e,t,r){var n=a.hmac.create();return n.start("SHA1",e),n.update(t),t=n.digest().getBytes(),n.start(null,null),n.update(r),r=n.digest().getBytes(),t===r}(t.macKey,u,p)&&i}n.CipherSuites.TLS_RSA_WITH_AES_128_CBC_SHA={id:[0,47],name:"TLS_RSA_WITH_AES_128_CBC_SHA",initSecurityParameters:function(e){e.bulk_cipher_algorithm=n.BulkCipherAlgorithm.aes,e.cipher_type=n.CipherType.block,e.enc_key_length=16,e.block_length=16,e.fixed_iv_length=16,e.record_iv_length=16,e.mac_algorithm=n.MACAlgorithm.hmac_sha1,e.mac_length=20,e.mac_key_length=20},initConnectionState:i},n.CipherSuites.TLS_RSA_WITH_AES_256_CBC_SHA={id:[0,53],name:"TLS_RSA_WITH_AES_256_CBC_SHA",initSecurityParameters:function(e){e.bulk_cipher_algorithm=n.BulkCipherAlgorithm.aes,e.cipher_type=n.CipherType.block,e.enc_key_length=32,e.block_length=16,e.fixed_iv_length=16,e.record_iv_length=16,e.mac_algorithm=n.MACAlgorithm.hmac_sha1,e.mac_length=20,e.mac_key_length=20},initConnectionState:i}},function(e,t,r){var a=r(0);r(30),e.exports=a.mgf=a.mgf||{},a.mgf.mgf1=a.mgf1},function(e,t,r){var a=r(0);r(12),r(2),r(32),r(1);var n=r(41),i=n.publicKeyValidator,s=n.privateKeyValidator;if(void 0===o)var o=a.jsbn.BigInteger;var c=a.util.ByteBuffer,u="undefined"==typeof Buffer?Uint8Array:Buffer;a.pki=a.pki||{},e.exports=a.pki.ed25519=a.ed25519=a.ed25519||{};var l=a.ed25519;function p(e){var t=e.message;if(t instanceof Uint8Array||t instanceof u)return t;var r=e.encoding;if(void 0===t){if(!e.md)throw new TypeError('"options.message" or "options.md" not specified.');t=e.md.digest().getBytes(),r="binary"}if("string"==typeof t&&!r)throw new TypeError('"options.encoding" must be "binary" or "utf8".');if("string"==typeof t){if("undefined"!=typeof Buffer)return Buffer.from(t,r);t=new c(t,r)}else if(!(t instanceof c))throw new TypeError('"options.message" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a string with "options.encoding" specifying its encoding.');for(var a=new u(t.length()),n=0;n<a.length;++n)a[n]=t.at(n);return a}l.constants={},l.constants.PUBLIC_KEY_BYTE_LENGTH=32,l.constants.PRIVATE_KEY_BYTE_LENGTH=64,l.constants.SEED_BYTE_LENGTH=32,l.constants.SIGN_BYTE_LENGTH=64,l.constants.HASH_BYTE_LENGTH=64,l.generateKeyPair=function(e){var t=(e=e||{}).seed;if(void 0===t)t=a.random.getBytesSync(l.constants.SEED_BYTE_LENGTH);else if("string"==typeof t){if(t.length!==l.constants.SEED_BYTE_LENGTH)throw new TypeError('"seed" must be '+l.constants.SEED_BYTE_LENGTH+" bytes in length.")}else if(!(t instanceof Uint8Array))throw new TypeError('"seed" must be a node.js Buffer, Uint8Array, or a binary string.');t=p({message:t,encoding:"binary"});for(var r=new u(l.constants.PUBLIC_KEY_BYTE_LENGTH),n=new u(l.constants.PRIVATE_KEY_BYTE_LENGTH),i=0;i<32;++i)n[i]=t[i];return function(e,t){var r,a=[P(),P(),P(),P()],n=E(t,32);for(n[0]&=248,n[31]&=127,n[31]|=64,_(a,n),A(e,a),r=0;r<32;++r)t[r+32]=e[r]}(r,n),{publicKey:r,privateKey:n}},l.privateKeyFromAsn1=function(e){var t={},r=[];if(!a.asn1.validate(e,s,t,r)){var n=new Error("Invalid Key.");throw n.errors=r,n}var i=a.asn1.derToOid(t.privateKeyOid),o=a.oids.EdDSA25519;if(i!==o)throw new Error('Invalid OID "'+i+'"; OID must be "'+o+'".');var c=t.privateKey;return{privateKeyBytes:p({message:a.asn1.fromDer(c).value,encoding:"binary"})}},l.publicKeyFromAsn1=function(e){var t={},r=[];if(!a.asn1.validate(e,i,t,r)){var n=new Error("Invalid Key.");throw n.errors=r,n}var s=a.asn1.derToOid(t.publicKeyOid),o=a.oids.EdDSA25519;if(s!==o)throw new Error('Invalid OID "'+s+'"; OID must be "'+o+'".');var c=t.ed25519PublicKey;if(c.length!==l.constants.PUBLIC_KEY_BYTE_LENGTH)throw new Error("Key length is invalid.");return p({message:c,encoding:"binary"})},l.publicKeyFromPrivateKey=function(e){var t=p({message:(e=e||{}).privateKey,encoding:"binary"});if(t.length!==l.constants.PRIVATE_KEY_BYTE_LENGTH)throw new TypeError('"options.privateKey" must have a byte length of '+l.constants.PRIVATE_KEY_BYTE_LENGTH);for(var r=new u(l.constants.PUBLIC_KEY_BYTE_LENGTH),a=0;a<r.length;++a)r[a]=t[32+a];return r},l.sign=function(e){var t=p(e=e||{}),r=p({message:e.privateKey,encoding:"binary"});if(r.length===l.constants.SEED_BYTE_LENGTH)r=l.generateKeyPair({seed:r}).privateKey;else if(r.length!==l.constants.PRIVATE_KEY_BYTE_LENGTH)throw new TypeError('"options.privateKey" must have a byte length of '+l.constants.SEED_BYTE_LENGTH+" or "+l.constants.PRIVATE_KEY_BYTE_LENGTH);var a=new u(l.constants.SIGN_BYTE_LENGTH+t.length);!function(e,t,r,a){var n,i,s=new Float64Array(64),o=[P(),P(),P(),P()],c=E(a,32);c[0]&=248,c[31]&=127,c[31]|=64;var u=r+64;for(n=0;n<r;++n)e[64+n]=t[n];for(n=0;n<32;++n)e[32+n]=c[32+n];var l=E(e.subarray(32),r+32);for(T(l),_(o,l),A(e,o),n=32;n<64;++n)e[n]=a[n];var p=E(e,r+64);for(T(p),n=32;n<64;++n)s[n]=0;for(n=0;n<32;++n)s[n]=l[n];for(n=0;n<32;++n)for(i=0;i<32;i++)s[n+i]+=p[n]*c[i];S(e.subarray(32),s)}(a,t,t.length,r);for(var n=new u(l.constants.SIGN_BYTE_LENGTH),i=0;i<n.length;++i)n[i]=a[i];return n},l.verify=function(e){var t=p(e=e||{});if(void 0===e.signature)throw new TypeError('"options.signature" must be a node.js Buffer, a Uint8Array, a forge ByteBuffer, or a binary string.');var r=p({message:e.signature,encoding:"binary"});if(r.length!==l.constants.SIGN_BYTE_LENGTH)throw new TypeError('"options.signature" must have a byte length of '+l.constants.SIGN_BYTE_LENGTH);var a=p({message:e.publicKey,encoding:"binary"});if(a.length!==l.constants.PUBLIC_KEY_BYTE_LENGTH)throw new TypeError('"options.publicKey" must have a byte length of '+l.constants.PUBLIC_KEY_BYTE_LENGTH);var n,i=new u(l.constants.SIGN_BYTE_LENGTH+t.length),s=new u(l.constants.SIGN_BYTE_LENGTH+t.length);for(n=0;n<l.constants.SIGN_BYTE_LENGTH;++n)i[n]=r[n];for(n=0;n<t.length;++n)i[n+l.constants.SIGN_BYTE_LENGTH]=t[n];return function(e,t,r,a){var n,i=new u(32),s=[P(),P(),P(),P()],o=[P(),P(),P(),P()];if(-1,r<64)return-1;if(function(e,t){var r=P(),a=P(),n=P(),i=P(),s=P(),o=P(),c=P();L(e[2],h),function(e,t){var r;for(r=0;r<16;++r)e[r]=t[2*r]+(t[2*r+1]<<8);e[15]&=32767}(e[1],t),K(n,e[1]),x(i,n,d),O(n,n,e[2]),V(i,e[2],i),K(s,i),K(o,s),x(c,o,s),x(r,c,n),x(r,r,i),function(e,t){var r,a=P();for(r=0;r<16;++r)a[r]=t[r];for(r=250;r>=0;--r)K(a,a),1!==r&&x(a,a,t);for(r=0;r<16;++r)e[r]=a[r]}(r,r),x(r,r,n),x(r,r,i),x(r,r,i),x(e[0],r,i),K(a,e[0]),x(a,a,i),N(a,n)&&x(e[0],e[0],C);if(K(a,e[0]),x(a,a,i),N(a,n))return-1;w(e[0])===t[31]>>7&&O(e[0],f,e[0]);return x(e[3],e[0],e[1]),0}(o,a))return-1;for(n=0;n<r;++n)e[n]=t[n];for(n=0;n<32;++n)e[n+32]=a[n];var c=E(e,r);if(T(c),R(s,o,c),_(o,t.subarray(32)),I(s,o),A(i,s),r-=64,k(t,0,i,0)){for(n=0;n<r;++n)e[n]=0;return-1}for(n=0;n<r;++n)e[n]=t[n+64];return r}(s,i,i.length,a)>=0};var f=P(),h=P([1]),d=P([30883,4953,19914,30187,55467,16705,2637,112,59544,30585,16505,36039,65139,11119,27886,20995]),y=P([61785,9906,39828,60374,45398,33411,5274,224,53552,61171,33010,6542,64743,22239,55772,9222]),g=P([54554,36645,11616,51542,42930,38181,51040,26924,56412,64982,57905,49316,21502,52590,14035,8553]),m=P([26200,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214,26214]),v=new Float64Array([237,211,245,92,26,99,18,88,214,156,247,162,222,249,222,20,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,16]),C=P([41136,18958,6951,50414,58488,44335,6150,12099,55207,15867,153,11085,57099,20417,9344,11139]);function E(e,t){var r=a.md.sha512.create(),n=new c(e);r.update(n.getBytes(t),"binary");var i=r.digest().getBytes();if("undefined"!=typeof Buffer)return Buffer.from(i,"binary");for(var s=new u(l.constants.HASH_BYTE_LENGTH),o=0;o<64;++o)s[o]=i.charCodeAt(o);return s}function S(e,t){var r,a,n,i;for(a=63;a>=32;--a){for(r=0,n=a-32,i=a-12;n<i;++n)t[n]+=r-16*t[a]*v[n-(a-32)],r=t[n]+128>>8,t[n]-=256*r;t[n]+=r,t[a]=0}for(r=0,n=0;n<32;++n)t[n]+=r-(t[31]>>4)*v[n],r=t[n]>>8,t[n]&=255;for(n=0;n<32;++n)t[n]-=r*v[n];for(a=0;a<32;++a)t[a+1]+=t[a]>>8,e[a]=255&t[a]}function T(e){for(var t=new Float64Array(64),r=0;r<64;++r)t[r]=e[r],e[r]=0;S(e,t)}function I(e,t){var r=P(),a=P(),n=P(),i=P(),s=P(),o=P(),c=P(),u=P(),l=P();O(r,e[1],e[0]),O(l,t[1],t[0]),x(r,r,l),V(a,e[0],e[1]),V(l,t[0],t[1]),x(a,a,l),x(n,e[3],t[3]),x(n,n,y),x(i,e[2],t[2]),V(i,i,i),O(s,a,r),O(o,i,n),V(c,i,n),V(u,a,r),x(e[0],s,o),x(e[1],u,c),x(e[2],c,o),x(e[3],s,u)}function b(e,t,r){for(var a=0;a<4;++a)D(e[a],t[a],r)}function A(e,t){var r=P(),a=P(),n=P();!function(e,t){var r,a=P();for(r=0;r<16;++r)a[r]=t[r];for(r=253;r>=0;--r)K(a,a),2!==r&&4!==r&&x(a,a,t);for(r=0;r<16;++r)e[r]=a[r]}(n,t[2]),x(r,t[0],n),x(a,t[1],n),B(e,a),e[31]^=w(r)<<7}function B(e,t){var r,a,n,i=P(),s=P();for(r=0;r<16;++r)s[r]=t[r];for(U(s),U(s),U(s),a=0;a<2;++a){for(i[0]=s[0]-65517,r=1;r<15;++r)i[r]=s[r]-65535-(i[r-1]>>16&1),i[r-1]&=65535;i[15]=s[15]-32767-(i[14]>>16&1),n=i[15]>>16&1,i[14]&=65535,D(s,i,1-n)}for(r=0;r<16;r++)e[2*r]=255&s[r],e[2*r+1]=s[r]>>8}function N(e,t){var r=new u(32),a=new u(32);return B(r,e),B(a,t),k(r,0,a,0)}function k(e,t,r,a){return function(e,t,r,a,n){var i,s=0;for(i=0;i<n;++i)s|=e[t+i]^r[a+i];return(1&s-1>>>8)-1}(e,t,r,a,32)}function w(e){var t=new u(32);return B(t,e),1&t[0]}function R(e,t,r){var a,n;for(L(e[0],f),L(e[1],h),L(e[2],h),L(e[3],f),n=255;n>=0;--n)b(e,t,a=r[n/8|0]>>(7&n)&1),I(t,e),I(e,e),b(e,t,a)}function _(e,t){var r=[P(),P(),P(),P()];L(r[0],g),L(r[1],m),L(r[2],h),x(r[3],g,m),R(e,r,t)}function L(e,t){var r;for(r=0;r<16;r++)e[r]=0|t[r]}function U(e){var t,r,a=1;for(t=0;t<16;++t)r=e[t]+a+65535,a=Math.floor(r/65536),e[t]=r-65536*a;e[0]+=a-1+37*(a-1)}function D(e,t,r){for(var a,n=~(r-1),i=0;i<16;++i)a=n&(e[i]^t[i]),e[i]^=a,t[i]^=a}function P(e){var t,r=new Float64Array(16);if(e)for(t=0;t<e.length;++t)r[t]=e[t];return r}function V(e,t,r){for(var a=0;a<16;++a)e[a]=t[a]+r[a]}function O(e,t,r){for(var a=0;a<16;++a)e[a]=t[a]-r[a]}function K(e,t){x(e,t,t)}function x(e,t,r){var a,n,i=0,s=0,o=0,c=0,u=0,l=0,p=0,f=0,h=0,d=0,y=0,g=0,m=0,v=0,C=0,E=0,S=0,T=0,I=0,b=0,A=0,B=0,N=0,k=0,w=0,R=0,_=0,L=0,U=0,D=0,P=0,V=r[0],O=r[1],K=r[2],x=r[3],M=r[4],F=r[5],j=r[6],q=r[7],G=r[8],H=r[9],Q=r[10],z=r[11],Y=r[12],W=r[13],X=r[14],Z=r[15];i+=(a=t[0])*V,s+=a*O,o+=a*K,c+=a*x,u+=a*M,l+=a*F,p+=a*j,f+=a*q,h+=a*G,d+=a*H,y+=a*Q,g+=a*z,m+=a*Y,v+=a*W,C+=a*X,E+=a*Z,s+=(a=t[1])*V,o+=a*O,c+=a*K,u+=a*x,l+=a*M,p+=a*F,f+=a*j,h+=a*q,d+=a*G,y+=a*H,g+=a*Q,m+=a*z,v+=a*Y,C+=a*W,E+=a*X,S+=a*Z,o+=(a=t[2])*V,c+=a*O,u+=a*K,l+=a*x,p+=a*M,f+=a*F,h+=a*j,d+=a*q,y+=a*G,g+=a*H,m+=a*Q,v+=a*z,C+=a*Y,E+=a*W,S+=a*X,T+=a*Z,c+=(a=t[3])*V,u+=a*O,l+=a*K,p+=a*x,f+=a*M,h+=a*F,d+=a*j,y+=a*q,g+=a*G,m+=a*H,v+=a*Q,C+=a*z,E+=a*Y,S+=a*W,T+=a*X,I+=a*Z,u+=(a=t[4])*V,l+=a*O,p+=a*K,f+=a*x,h+=a*M,d+=a*F,y+=a*j,g+=a*q,m+=a*G,v+=a*H,C+=a*Q,E+=a*z,S+=a*Y,T+=a*W,I+=a*X,b+=a*Z,l+=(a=t[5])*V,p+=a*O,f+=a*K,h+=a*x,d+=a*M,y+=a*F,g+=a*j,m+=a*q,v+=a*G,C+=a*H,E+=a*Q,S+=a*z,T+=a*Y,I+=a*W,b+=a*X,A+=a*Z,p+=(a=t[6])*V,f+=a*O,h+=a*K,d+=a*x,y+=a*M,g+=a*F,m+=a*j,v+=a*q,C+=a*G,E+=a*H,S+=a*Q,T+=a*z,I+=a*Y,b+=a*W,A+=a*X,B+=a*Z,f+=(a=t[7])*V,h+=a*O,d+=a*K,y+=a*x,g+=a*M,m+=a*F,v+=a*j,C+=a*q,E+=a*G,S+=a*H,T+=a*Q,I+=a*z,b+=a*Y,A+=a*W,B+=a*X,N+=a*Z,h+=(a=t[8])*V,d+=a*O,y+=a*K,g+=a*x,m+=a*M,v+=a*F,C+=a*j,E+=a*q,S+=a*G,T+=a*H,I+=a*Q,b+=a*z,A+=a*Y,B+=a*W,N+=a*X,k+=a*Z,d+=(a=t[9])*V,y+=a*O,g+=a*K,m+=a*x,v+=a*M,C+=a*F,E+=a*j,S+=a*q,T+=a*G,I+=a*H,b+=a*Q,A+=a*z,B+=a*Y,N+=a*W,k+=a*X,w+=a*Z,y+=(a=t[10])*V,g+=a*O,m+=a*K,v+=a*x,C+=a*M,E+=a*F,S+=a*j,T+=a*q,I+=a*G,b+=a*H,A+=a*Q,B+=a*z,N+=a*Y,k+=a*W,w+=a*X,R+=a*Z,g+=(a=t[11])*V,m+=a*O,v+=a*K,C+=a*x,E+=a*M,S+=a*F,T+=a*j,I+=a*q,b+=a*G,A+=a*H,B+=a*Q,N+=a*z,k+=a*Y,w+=a*W,R+=a*X,_+=a*Z,m+=(a=t[12])*V,v+=a*O,C+=a*K,E+=a*x,S+=a*M,T+=a*F,I+=a*j,b+=a*q,A+=a*G,B+=a*H,N+=a*Q,k+=a*z,w+=a*Y,R+=a*W,_+=a*X,L+=a*Z,v+=(a=t[13])*V,C+=a*O,E+=a*K,S+=a*x,T+=a*M,I+=a*F,b+=a*j,A+=a*q,B+=a*G,N+=a*H,k+=a*Q,w+=a*z,R+=a*Y,_+=a*W,L+=a*X,U+=a*Z,C+=(a=t[14])*V,E+=a*O,S+=a*K,T+=a*x,I+=a*M,b+=a*F,A+=a*j,B+=a*q,N+=a*G,k+=a*H,w+=a*Q,R+=a*z,_+=a*Y,L+=a*W,U+=a*X,D+=a*Z,E+=(a=t[15])*V,s+=38*(T+=a*K),o+=38*(I+=a*x),c+=38*(b+=a*M),u+=38*(A+=a*F),l+=38*(B+=a*j),p+=38*(N+=a*q),f+=38*(k+=a*G),h+=38*(w+=a*H),d+=38*(R+=a*Q),y+=38*(_+=a*z),g+=38*(L+=a*Y),m+=38*(U+=a*W),v+=38*(D+=a*X),C+=38*(P+=a*Z),i=(a=(i+=38*(S+=a*O))+(n=1)+65535)-65536*(n=Math.floor(a/65536)),s=(a=s+n+65535)-65536*(n=Math.floor(a/65536)),o=(a=o+n+65535)-65536*(n=Math.floor(a/65536)),c=(a=c+n+65535)-65536*(n=Math.floor(a/65536)),u=(a=u+n+65535)-65536*(n=Math.floor(a/65536)),l=(a=l+n+65535)-65536*(n=Math.floor(a/65536)),p=(a=p+n+65535)-65536*(n=Math.floor(a/65536)),f=(a=f+n+65535)-65536*(n=Math.floor(a/65536)),h=(a=h+n+65535)-65536*(n=Math.floor(a/65536)),d=(a=d+n+65535)-65536*(n=Math.floor(a/65536)),y=(a=y+n+65535)-65536*(n=Math.floor(a/65536)),g=(a=g+n+65535)-65536*(n=Math.floor(a/65536)),m=(a=m+n+65535)-65536*(n=Math.floor(a/65536)),v=(a=v+n+65535)-65536*(n=Math.floor(a/65536)),C=(a=C+n+65535)-65536*(n=Math.floor(a/65536)),E=(a=E+n+65535)-65536*(n=Math.floor(a/65536)),i=(a=(i+=n-1+37*(n-1))+(n=1)+65535)-65536*(n=Math.floor(a/65536)),s=(a=s+n+65535)-65536*(n=Math.floor(a/65536)),o=(a=o+n+65535)-65536*(n=Math.floor(a/65536)),c=(a=c+n+65535)-65536*(n=Math.floor(a/65536)),u=(a=u+n+65535)-65536*(n=Math.floor(a/65536)),l=(a=l+n+65535)-65536*(n=Math.floor(a/65536)),p=(a=p+n+65535)-65536*(n=Math.floor(a/65536)),f=(a=f+n+65535)-65536*(n=Math.floor(a/65536)),h=(a=h+n+65535)-65536*(n=Math.floor(a/65536)),d=(a=d+n+65535)-65536*(n=Math.floor(a/65536)),y=(a=y+n+65535)-65536*(n=Math.floor(a/65536)),g=(a=g+n+65535)-65536*(n=Math.floor(a/65536)),m=(a=m+n+65535)-65536*(n=Math.floor(a/65536)),v=(a=v+n+65535)-65536*(n=Math.floor(a/65536)),C=(a=C+n+65535)-65536*(n=Math.floor(a/65536)),E=(a=E+n+65535)-65536*(n=Math.floor(a/65536)),i+=n-1+37*(n-1),e[0]=i,e[1]=s,e[2]=o,e[3]=c,e[4]=u,e[5]=l,e[6]=p,e[7]=f,e[8]=h,e[9]=d,e[10]=y,e[11]=g,e[12]=m,e[13]=v,e[14]=C,e[15]=E}},function(e,t,r){var a=r(0);r(3);var n=a.asn1;t.privateKeyValidator={name:"PrivateKeyInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"PrivateKeyInfo.version",tagClass:n.Class.UNIVERSAL,type:n.Type.INTEGER,constructed:!1,capture:"privateKeyVersion"},{name:"PrivateKeyInfo.privateKeyAlgorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"privateKeyOid"}]},{name:"PrivateKeyInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.OCTETSTRING,constructed:!1,capture:"privateKey"}]},t.publicKeyValidator={name:"SubjectPublicKeyInfo",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,captureAsn1:"subjectPublicKeyInfo",value:[{name:"SubjectPublicKeyInfo.AlgorithmIdentifier",tagClass:n.Class.UNIVERSAL,type:n.Type.SEQUENCE,constructed:!0,value:[{name:"AlgorithmIdentifier.algorithm",tagClass:n.Class.UNIVERSAL,type:n.Type.OID,constructed:!1,capture:"publicKeyOid"}]},{tagClass:n.Class.UNIVERSAL,type:n.Type.BITSTRING,constructed:!1,composed:!0,captureBitStringValue:"ed25519PublicKey"}]}},function(e,t,r){var a=r(0);r(1),r(2),r(12),e.exports=a.kem=a.kem||{};var n=a.jsbn.BigInteger;function i(e,t,r,n){e.generate=function(e,i){for(var s=new a.util.ByteBuffer,o=Math.ceil(i/n)+r,c=new a.util.ByteBuffer,u=r;u<o;++u){c.putInt32(u),t.start(),t.update(e+c.getBytes());var l=t.digest();s.putBytes(l.getBytes(n))}return s.truncate(s.length()-i),s.getBytes()}}a.kem.rsa={},a.kem.rsa.create=function(e,t){var r=(t=t||{}).prng||a.random,i={encrypt:function(t,i){var s,o=Math.ceil(t.n.bitLength()/8);do{s=new n(a.util.bytesToHex(r.getBytesSync(o)),16).mod(t.n)}while(s.compareTo(n.ONE)<=0);var c=o-(s=a.util.hexToBytes(s.toString(16))).length;return c>0&&(s=a.util.fillString(String.fromCharCode(0),c)+s),{encapsulation:t.encrypt(s,"NONE"),key:e.generate(s,i)}},decrypt:function(t,r,a){var n=t.decrypt(r,"NONE");return e.generate(n,a)}};return i},a.kem.kdf1=function(e,t){i(this,e,0,t||e.digestLength)},a.kem.kdf2=function(e,t){i(this,e,1,t||e.digestLength)}},function(e,t,r){e.exports=r(4),r(14),r(9),r(23),r(32)},function(e,t,r){var a=r(0);r(5),r(3),r(10),r(6),r(7),r(29),r(2),r(1),r(17);var n=a.asn1,i=e.exports=a.pkcs7=a.pkcs7||{};function s(e){var t={},r=[];if(!n.validate(e,i.asn1.recipientInfoValidator,t,r)){var s=new Error("Cannot read PKCS#7 RecipientInfo. ASN.1 object is not an PKCS#7 RecipientInfo.");throw s.errors=r,s}return{version:t.version.charCodeAt(0),issuer:a.pki.RDNAttributesAsArray(t.issuer),serialNumber:a.util.createBuffer(t.serial).toHex(),encryptedContent:{algorithm:n.derToOid(t.encAlgorithm),parameter:t.encParameter.value,content:t.encKey}}}function o(e){for(var t,r=[],i=0;i<e.length;++i)r.push((t=e[i],n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(t.version).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[a.pki.distinguishedNameToAsn1({attributes:t.issuer}),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,a.util.hexToBytes(t.serialNumber))]),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.encryptedContent.algorithm).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")]),n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,t.encryptedContent.content)])));return r}function c(e){var t=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.version).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[a.pki.distinguishedNameToAsn1({attributes:e.issuer}),n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,a.util.hexToBytes(e.serialNumber))]),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.digestAlgorithm).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")])]);if(e.authenticatedAttributesAsn1&&t.value.push(e.authenticatedAttributesAsn1),t.value.push(n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.signatureAlgorithm).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")])),t.value.push(n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,e.signature)),e.unauthenticatedAttributes.length>0){for(var r=n.create(n.Class.CONTEXT_SPECIFIC,1,!0,[]),i=0;i<e.unauthenticatedAttributes.length;++i){var s=e.unauthenticatedAttributes[i];r.values.push(u(s))}t.value.push(r)}return t}function u(e){var t;if(e.type===a.pki.oids.contentType)t=n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.value).getBytes());else if(e.type===a.pki.oids.messageDigest)t=n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,e.value.bytes());else if(e.type===a.pki.oids.signingTime){var r=new Date("1950-01-01T00:00:00Z"),i=new Date("2050-01-01T00:00:00Z"),s=e.value;if("string"==typeof s){var o=Date.parse(s);s=isNaN(o)?13===s.length?n.utcTimeToDate(s):n.generalizedTimeToDate(s):new Date(o)}t=s>=r&&s<i?n.create(n.Class.UNIVERSAL,n.Type.UTCTIME,!1,n.dateToUtcTime(s)):n.create(n.Class.UNIVERSAL,n.Type.GENERALIZEDTIME,!1,n.dateToGeneralizedTime(s))}return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.type).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[t])])}function l(e,t,r){var i={};if(!n.validate(t,r,i,[])){var s=new Error("Cannot read PKCS#7 message. ASN.1 object is not a supported PKCS#7 message.");throw s.errors=s,s}if(n.derToOid(i.contentType)!==a.pki.oids.data)throw new Error("Unsupported PKCS#7 message. Only wrapped ContentType Data supported.");if(i.encryptedContent){var o="";if(a.util.isArray(i.encryptedContent))for(var c=0;c<i.encryptedContent.length;++c){if(i.encryptedContent[c].type!==n.Type.OCTETSTRING)throw new Error("Malformed PKCS#7 message, expecting encrypted content constructed of only OCTET STRING objects.");o+=i.encryptedContent[c].value}else o=i.encryptedContent;e.encryptedContent={algorithm:n.derToOid(i.encAlgorithm),parameter:a.util.createBuffer(i.encParameter.value),content:a.util.createBuffer(o)}}if(i.content){o="";if(a.util.isArray(i.content))for(c=0;c<i.content.length;++c){if(i.content[c].type!==n.Type.OCTETSTRING)throw new Error("Malformed PKCS#7 message, expecting content constructed of only OCTET STRING objects.");o+=i.content[c].value}else o=i.content;e.content=a.util.createBuffer(o)}return e.version=i.version.charCodeAt(0),e.rawCapture=i,i}function p(e){if(void 0===e.encryptedContent.key)throw new Error("Symmetric key not available.");if(void 0===e.content){var t;switch(e.encryptedContent.algorithm){case a.pki.oids["aes128-CBC"]:case a.pki.oids["aes192-CBC"]:case a.pki.oids["aes256-CBC"]:t=a.aes.createDecryptionCipher(e.encryptedContent.key);break;case a.pki.oids.desCBC:case a.pki.oids["des-EDE3-CBC"]:t=a.des.createDecryptionCipher(e.encryptedContent.key);break;default:throw new Error("Unsupported symmetric cipher, OID "+e.encryptedContent.algorithm)}if(t.start(e.encryptedContent.parameter),t.update(e.encryptedContent.content),!t.finish())throw new Error("Symmetric decryption failed.");e.content=t.output}}i.messageFromPem=function(e){var t=a.pem.decode(e)[0];if("PKCS7"!==t.type){var r=new Error('Could not convert PKCS#7 message from PEM; PEM header type is not "PKCS#7".');throw r.headerType=t.type,r}if(t.procType&&"ENCRYPTED"===t.procType.type)throw new Error("Could not convert PKCS#7 message from PEM; PEM is encrypted.");var s=n.fromDer(t.body);return i.messageFromAsn1(s)},i.messageToPem=function(e,t){var r={type:"PKCS7",body:n.toDer(e.toAsn1()).getBytes()};return a.pem.encode(r,{maxline:t})},i.messageFromAsn1=function(e){var t={},r=[];if(!n.validate(e,i.asn1.contentInfoValidator,t,r)){var s=new Error("Cannot read PKCS#7 message. ASN.1 object is not an PKCS#7 ContentInfo.");throw s.errors=r,s}var o,c=n.derToOid(t.contentType);switch(c){case a.pki.oids.envelopedData:o=i.createEnvelopedData();break;case a.pki.oids.encryptedData:o=i.createEncryptedData();break;case a.pki.oids.signedData:o=i.createSignedData();break;default:throw new Error("Cannot read PKCS#7 message. ContentType with OID "+c+" is not (yet) supported.")}return o.fromAsn1(t.content.value[0]),o},i.createSignedData=function(){var e=null;return e={type:a.pki.oids.signedData,version:1,certificates:[],crls:[],signers:[],digestAlgorithmIdentifiers:[],contentInfo:null,signerInfos:[],fromAsn1:function(t){if(l(e,t,i.asn1.signedDataValidator),e.certificates=[],e.crls=[],e.digestAlgorithmIdentifiers=[],e.contentInfo=null,e.signerInfos=[],e.rawCapture.certificates)for(var r=e.rawCapture.certificates.value,n=0;n<r.length;++n)e.certificates.push(a.pki.certificateFromAsn1(r[n]))},toAsn1:function(){e.contentInfo||e.sign();for(var t=[],r=0;r<e.certificates.length;++r)t.push(a.pki.certificateToAsn1(e.certificates[r]));var i=[],s=n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.version).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,e.digestAlgorithmIdentifiers),e.contentInfo])]);return t.length>0&&s.value[0].value.push(n.create(n.Class.CONTEXT_SPECIFIC,0,!0,t)),i.length>0&&s.value[0].value.push(n.create(n.Class.CONTEXT_SPECIFIC,1,!0,i)),s.value[0].value.push(n.create(n.Class.UNIVERSAL,n.Type.SET,!0,e.signerInfos)),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.type).getBytes()),s])},addSigner:function(t){var r=t.issuer,n=t.serialNumber;if(t.certificate){var i=t.certificate;"string"==typeof i&&(i=a.pki.certificateFromPem(i)),r=i.issuer.attributes,n=i.serialNumber}var s=t.key;if(!s)throw new Error("Could not add PKCS#7 signer; no private key specified.");"string"==typeof s&&(s=a.pki.privateKeyFromPem(s));var o=t.digestAlgorithm||a.pki.oids.sha1;switch(o){case a.pki.oids.sha1:case a.pki.oids.sha256:case a.pki.oids.sha384:case a.pki.oids.sha512:case a.pki.oids.md5:break;default:throw new Error("Could not add PKCS#7 signer; unknown message digest algorithm: "+o)}var c=t.authenticatedAttributes||[];if(c.length>0){for(var u=!1,l=!1,p=0;p<c.length;++p){var f=c[p];if(u||f.type!==a.pki.oids.contentType){if(l||f.type!==a.pki.oids.messageDigest);else if(l=!0,u)break}else if(u=!0,l)break}if(!u||!l)throw new Error("Invalid signer.authenticatedAttributes. If signer.authenticatedAttributes is specified, then it must contain at least two attributes, PKCS #9 content-type and PKCS #9 message-digest.")}e.signers.push({key:s,version:1,issuer:r,serialNumber:n,digestAlgorithm:o,signatureAlgorithm:a.pki.oids.rsaEncryption,signature:null,authenticatedAttributes:c,unauthenticatedAttributes:[]})},sign:function(t){var r;(t=t||{},"object"!=typeof e.content||null===e.contentInfo)&&(e.contentInfo=n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(a.pki.oids.data).getBytes())]),"content"in e&&(e.content instanceof a.util.ByteBuffer?r=e.content.bytes():"string"==typeof e.content&&(r=a.util.encodeUtf8(e.content)),t.detached?e.detachedContent=n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,r):e.contentInfo.value.push(n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,r)]))));0!==e.signers.length&&function(t){var r;r=e.detachedContent?e.detachedContent:(r=e.contentInfo.value[1]).value[0];if(!r)throw new Error("Could not sign PKCS#7 message; there is no content to sign.");var i=n.derToOid(e.contentInfo.value[0].value),s=n.toDer(r);for(var o in s.getByte(),n.getBerValueLength(s),s=s.getBytes(),t)t[o].start().update(s);for(var l=new Date,p=0;p<e.signers.length;++p){var f=e.signers[p];if(0===f.authenticatedAttributes.length){if(i!==a.pki.oids.data)throw new Error("Invalid signer; authenticatedAttributes must be present when the ContentInfo content type is not PKCS#7 Data.")}else{f.authenticatedAttributesAsn1=n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[]);for(var h=n.create(n.Class.UNIVERSAL,n.Type.SET,!0,[]),d=0;d<f.authenticatedAttributes.length;++d){var y=f.authenticatedAttributes[d];y.type===a.pki.oids.messageDigest?y.value=t[f.digestAlgorithm].digest():y.type===a.pki.oids.signingTime&&(y.value||(y.value=l)),h.value.push(u(y)),f.authenticatedAttributesAsn1.value.push(u(y))}s=n.toDer(h).getBytes(),f.md.start().update(s)}f.signature=f.key.sign(f.md,"RSASSA-PKCS1-V1_5")}e.signerInfos=function(e){for(var t=[],r=0;r<e.length;++r)t.push(c(e[r]));return t}(e.signers)}(function(){for(var t={},r=0;r<e.signers.length;++r){var i=e.signers[r];(s=i.digestAlgorithm)in t||(t[s]=a.md[a.pki.oids[s]].create()),0===i.authenticatedAttributes.length?i.md=t[s]:i.md=a.md[a.pki.oids[s]].create()}for(var s in e.digestAlgorithmIdentifiers=[],t)e.digestAlgorithmIdentifiers.push(n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(s).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.NULL,!1,"")]));return t}())},verify:function(){throw new Error("PKCS#7 signature verification not yet implemented.")},addCertificate:function(t){"string"==typeof t&&(t=a.pki.certificateFromPem(t)),e.certificates.push(t)},addCertificateRevokationList:function(e){throw new Error("PKCS#7 CRL support not yet implemented.")}}},i.createEncryptedData=function(){var e=null;return e={type:a.pki.oids.encryptedData,version:0,encryptedContent:{algorithm:a.pki.oids["aes256-CBC"]},fromAsn1:function(t){l(e,t,i.asn1.encryptedDataValidator)},decrypt:function(t){void 0!==t&&(e.encryptedContent.key=t),p(e)}}},i.createEnvelopedData=function(){var e=null;return e={type:a.pki.oids.envelopedData,version:0,recipients:[],encryptedContent:{algorithm:a.pki.oids["aes256-CBC"]},fromAsn1:function(t){var r=l(e,t,i.asn1.envelopedDataValidator);e.recipients=function(e){for(var t=[],r=0;r<e.length;++r)t.push(s(e[r]));return t}(r.recipientInfos.value)},toAsn1:function(){return n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(e.type).getBytes()),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.INTEGER,!1,n.integerToDer(e.version).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SET,!0,o(e.recipients)),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,(t=e.encryptedContent,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(a.pki.oids.data).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.SEQUENCE,!0,[n.create(n.Class.UNIVERSAL,n.Type.OID,!1,n.oidToDer(t.algorithm).getBytes()),n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,t.parameter.getBytes())]),n.create(n.Class.CONTEXT_SPECIFIC,0,!0,[n.create(n.Class.UNIVERSAL,n.Type.OCTETSTRING,!1,t.content.getBytes())])]))])])]);var t},findRecipient:function(t){for(var r=t.issuer.attributes,a=0;a<e.recipients.length;++a){var n=e.recipients[a],i=n.issuer;if(n.serialNumber===t.serialNumber&&i.length===r.length){for(var s=!0,o=0;o<r.length;++o)if(i[o].type!==r[o].type||i[o].value!==r[o].value){s=!1;break}if(s)return n}}return null},decrypt:function(t,r){if(void 0===e.encryptedContent.key&&void 0!==t&&void 0!==r)switch(t.encryptedContent.algorithm){case a.pki.oids.rsaEncryption:case a.pki.oids.desCBC:var n=r.decrypt(t.encryptedContent.content);e.encryptedContent.key=a.util.createBuffer(n);break;default:throw new Error("Unsupported asymmetric cipher, OID "+t.encryptedContent.algorithm)}p(e)},addRecipient:function(t){e.recipients.push({version:0,issuer:t.issuer.attributes,serialNumber:t.serialNumber,encryptedContent:{algorithm:a.pki.oids.rsaEncryption,key:t.publicKey}})},encrypt:function(t,r){if(void 0===e.encryptedContent.content){var n,i,s;switch(r=r||e.encryptedContent.algorithm,t=t||e.encryptedContent.key,r){case a.pki.oids["aes128-CBC"]:n=16,i=16,s=a.aes.createEncryptionCipher;break;case a.pki.oids["aes192-CBC"]:n=24,i=16,s=a.aes.createEncryptionCipher;break;case a.pki.oids["aes256-CBC"]:n=32,i=16,s=a.aes.createEncryptionCipher;break;case a.pki.oids["des-EDE3-CBC"]:n=24,i=8,s=a.des.createEncryptionCipher;break;default:throw new Error("Unsupported symmetric cipher, OID "+r)}if(void 0===t)t=a.util.createBuffer(a.random.getBytes(n));else if(t.length()!=n)throw new Error("Symmetric key has wrong length; got "+t.length()+" bytes, expected "+n+".");e.encryptedContent.algorithm=r,e.encryptedContent.key=t,e.encryptedContent.parameter=a.util.createBuffer(a.random.getBytes(i));var o=s(t);if(o.start(e.encryptedContent.parameter.copy()),o.update(e.content),!o.finish())throw new Error("Symmetric encryption failed.");e.encryptedContent.content=o.output}for(var c=0;c<e.recipients.length;++c){var u=e.recipients[c];if(void 0===u.encryptedContent.content)switch(u.encryptedContent.algorithm){case a.pki.oids.rsaEncryption:u.encryptedContent.content=u.encryptedContent.key.encrypt(e.encryptedContent.key.data);break;default:throw new Error("Unsupported asymmetric cipher, OID "+u.encryptedContent.algorithm)}}}}}},function(e,t,r){var a=r(0);r(5),r(8),r(14),r(9),r(1);var n=e.exports=a.ssh=a.ssh||{};function i(e,t){var r=t.toString(16);r[0]>="8"&&(r="00"+r);var n=a.util.hexToBytes(r);e.putInt32(n.length),e.putBytes(n)}function s(e,t){e.putInt32(t.length),e.putString(t)}function o(){for(var e=a.md.sha1.create(),t=arguments.length,r=0;r<t;++r)e.update(arguments[r]);return e.digest()}n.privateKeyToPutty=function(e,t,r){var n=""===(t=t||"")?"none":"aes256-cbc",c="PuTTY-User-Key-File-2: ssh-rsa\r\n";c+="Encryption: "+n+"\r\n",c+="Comment: "+(r=r||"")+"\r\n";var u=a.util.createBuffer();s(u,"ssh-rsa"),i(u,e.e),i(u,e.n);var l=a.util.encode64(u.bytes(),64),p=Math.floor(l.length/66)+1;c+="Public-Lines: "+p+"\r\n",c+=l;var f,h=a.util.createBuffer();if(i(h,e.d),i(h,e.p),i(h,e.q),i(h,e.qInv),t){var d=h.length()+16-1;d-=d%16;var y=o(h.bytes());y.truncate(y.length()-d+h.length()),h.putBuffer(y);var g=a.util.createBuffer();g.putBuffer(o("\0\0\0\0",t)),g.putBuffer(o("\0\0\0",t));var m=a.aes.createEncryptionCipher(g.truncate(8),"CBC");m.start(a.util.createBuffer().fillWithByte(0,16)),m.update(h.copy()),m.finish();var v=m.output;v.truncate(16),f=a.util.encode64(v.bytes(),64)}else f=a.util.encode64(h.bytes(),64);c+="\r\nPrivate-Lines: "+(p=Math.floor(f.length/66)+1)+"\r\n",c+=f;var C=o("putty-private-key-file-mac-key",t),E=a.util.createBuffer();s(E,"ssh-rsa"),s(E,n),s(E,r),E.putInt32(u.length()),E.putBuffer(u),E.putInt32(h.length()),E.putBuffer(h);var S=a.hmac.create();return S.start("sha1",C),S.update(E.bytes()),c+="\r\nPrivate-MAC: "+S.digest().toHex()+"\r\n"},n.publicKeyToOpenSSH=function(e,t){t=t||"";var r=a.util.createBuffer();return s(r,"ssh-rsa"),i(r,e.e),i(r,e.n),"ssh-rsa "+a.util.encode64(r.bytes())+" "+t},n.privateKeyToOpenSSH=function(e,t){return t?a.pki.encryptRsaPrivateKey(e,t,{legacy:!0,algorithm:"aes128"}):a.pki.privateKeyToPem(e)},n.getPublicKeyFingerprint=function(e,t){var r=(t=t||{}).md||a.md.md5.create(),n=a.util.createBuffer();s(n,"ssh-rsa"),i(n,e.e),i(n,e.n),r.start(),r.update(n.getBytes());var o=r.digest();if("hex"===t.encoding){var c=o.toHex();return t.delimiter?c.match(/.{2}/g).join(t.delimiter):c}if("binary"===t.encoding)return o.getBytes();if(t.encoding)throw new Error('Unknown encoding "'+t.encoding+'".');return o}},function(e,t,r){var a=r(0);r(31),r(33),r(1);var n="forge.task",i={},s=0;a.debug.set(n,"tasks",i);var o={};a.debug.set(n,"queues",o);var c="ready",u="running",l="blocked",p="sleeping",f="done",h="error",d="stop",y="start",g={ready:{}};g[c][d]=c,g[c][y]=u,g[c].cancel=f,g[c].fail=h,g[u]={},g[u][d]=c,g[u][y]=u,g[u].block=l,g[u].unblock=u,g[u].sleep=p,g[u].wakeup=u,g[u].cancel=f,g[u].fail=h,g[l]={},g[l][d]=l,g[l][y]=l,g[l].block=l,g[l].unblock=l,g[l].sleep=l,g[l].wakeup=l,g[l].cancel=f,g[l].fail=h,g[p]={},g[p][d]=p,g[p][y]=p,g[p].block=p,g[p].unblock=p,g[p].sleep=p,g[p].wakeup=p,g[p].cancel=f,g[p].fail=h,g[f]={},g[f][d]=f,g[f][y]=f,g[f].block=f,g[f].unblock=f,g[f].sleep=f,g[f].wakeup=f,g[f].cancel=f,g[f].fail=h,g[h]={},g[h][d]=h,g[h][y]=h,g[h].block=h,g[h].unblock=h,g[h].sleep=h,g[h].wakeup=h,g[h].cancel=h,g[h].fail=h;var m=function(e){this.id=-1,this.name=e.name||"?",this.parent=e.parent||null,this.run=e.run,this.subtasks=[],this.error=!1,this.state=c,this.blocks=0,this.timeoutId=null,this.swapTime=null,this.userData=null,this.id=s++,i[this.id]=this};m.prototype.debug=function(e){e=e||"",a.log.debug(n,e,"[%s][%s] task:",this.id,this.name,this,"subtasks:",this.subtasks.length,"queue:",o)},m.prototype.next=function(e,t){"function"==typeof e&&(t=e,e=this.name);var r=new m({run:t,name:e,parent:this});return r.state=u,r.type=this.type,r.successCallback=this.successCallback||null,r.failureCallback=this.failureCallback||null,this.subtasks.push(r),this},m.prototype.parallel=function(e,t){return a.util.isArray(e)&&(t=e,e=this.name),this.next(e,(function(r){var n=r;n.block(t.length);for(var i=function(e,r){a.task.start({type:e,run:function(e){t[r](e)},success:function(e){n.unblock()},failure:function(e){n.unblock()}})},s=0;s<t.length;s++){i(e+"__parallel-"+r.id+"-"+s,s)}}))},m.prototype.stop=function(){this.state=g[this.state][d]},m.prototype.start=function(){this.error=!1,this.state=g[this.state][y],this.state===u&&(this.start=new Date,this.run(this),v(this,0))},m.prototype.block=function(e){e=void 0===e?1:e,this.blocks+=e,this.blocks>0&&(this.state=g[this.state].block)},m.prototype.unblock=function(e){return e=void 0===e?1:e,this.blocks-=e,0===this.blocks&&this.state!==f&&(this.state=u,v(this,0)),this.blocks},m.prototype.sleep=function(e){e=void 0===e?0:e,this.state=g[this.state].sleep;var t=this;this.timeoutId=setTimeout((function(){t.timeoutId=null,t.state=u,v(t,0)}),e)},m.prototype.wait=function(e){e.wait(this)},m.prototype.wakeup=function(){this.state===p&&(cancelTimeout(this.timeoutId),this.timeoutId=null,this.state=u,v(this,0))},m.prototype.cancel=function(){this.state=g[this.state].cancel,this.permitsNeeded=0,null!==this.timeoutId&&(cancelTimeout(this.timeoutId),this.timeoutId=null),this.subtasks=[]},m.prototype.fail=function(e){if(this.error=!0,C(this,!0),e)e.error=this.error,e.swapTime=this.swapTime,e.userData=this.userData,v(e,0);else{if(null!==this.parent){for(var t=this.parent;null!==t.parent;)t.error=this.error,t.swapTime=this.swapTime,t.userData=this.userData,t=t.parent;C(t,!0)}this.failureCallback&&this.failureCallback(this)}};var v=function(e,t){var r=t>30||+new Date-e.swapTime>20,a=function(t){if(t++,e.state===u)if(r&&(e.swapTime=+new Date),e.subtasks.length>0){var a=e.subtasks.shift();a.error=e.error,a.swapTime=e.swapTime,a.userData=e.userData,a.run(a),a.error||v(a,t)}else C(e),e.error||null!==e.parent&&(e.parent.error=e.error,e.parent.swapTime=e.swapTime,e.parent.userData=e.userData,v(e.parent,t))};r?setTimeout(a,0):a(t)},C=function(e,t){e.state=f,delete i[e.id],null===e.parent&&(e.type in o?0===o[e.type].length?a.log.error(n,"[%s][%s] task queue empty [%s]",e.id,e.name,e.type):o[e.type][0]!==e?a.log.error(n,"[%s][%s] task not first in queue [%s]",e.id,e.name,e.type):(o[e.type].shift(),0===o[e.type].length?delete o[e.type]:o[e.type][0].start()):a.log.error(n,"[%s][%s] task queue missing [%s]",e.id,e.name,e.type),t||(e.error&&e.failureCallback?e.failureCallback(e):!e.error&&e.successCallback&&e.successCallback(e)))};e.exports=a.task=a.task||{},a.task.start=function(e){var t=new m({run:e.run,name:e.name||"?"});t.type=e.type,t.successCallback=e.success||null,t.failureCallback=e.failure||null,t.type in o?o[e.type].push(t):(o[t.type]=[t],function(e){e.error=!1,e.state=g[e.state][y],setTimeout((function(){e.state===u&&(e.swapTime=+new Date,e.run(e),v(e,0))}),0)}(t))},a.task.cancel=function(e){e in o&&(o[e]=[o[e][0]])},a.task.createCondition=function(){var e={tasks:{},wait:function(t){t.id in e.tasks||(t.block(),e.tasks[t.id]=t)},notify:function(){var t=e.tasks;for(var r in e.tasks={},t)t[r].unblock()}};return e}}])}));



!function (n, r) { "object" == typeof exports && "undefined" != typeof module ? module.exports = r() : "function" == typeof define && define.amd ? define("underscore", r) : (n = n || self, function () { var t = n._, e = n._ = r(); e.noConflict = function () { return n._ = t, e } }()) }(this, (function () {
    //     Underscore.js 1.12.0
    //     https://underscorejs.org
    //     (c) 2009-2020 Jeremy Ashkenas, DocumentCloud and Investigative Reporters & Editors
    //     Underscore may be freely distributed under the MIT license.
    var n = "1.12.0", r = "object" == typeof self && self.self === self && self || "object" == typeof global && global.global === global && global || Function("return this")() || {}, t = Array.prototype, e = Object.prototype, u = "undefined" != typeof Symbol ? Symbol.prototype : null, o = t.push, i = t.slice, a = e.toString, f = e.hasOwnProperty, c = "undefined" != typeof ArrayBuffer, l = "undefined" != typeof DataView, s = Array.isArray, p = Object.keys, v = Object.create, h = c && ArrayBuffer.isView, y = isNaN, g = isFinite, d = !{ toString: null }.propertyIsEnumerable("toString"), b = ["valueOf", "isPrototypeOf", "toString", "propertyIsEnumerable", "hasOwnProperty", "toLocaleString"], m = Math.pow(2, 53) - 1; function j(n, r) { return r = null == r ? n.length - 1 : +r, function () { for (var t = Math.max(arguments.length - r, 0), e = Array(t), u = 0; u < t; u++)e[u] = arguments[u + r]; switch (r) { case 0: return n.call(this, e); case 1: return n.call(this, arguments[0], e); case 2: return n.call(this, arguments[0], arguments[1], e) }var o = Array(r + 1); for (u = 0; u < r; u++)o[u] = arguments[u]; return o[r] = e, n.apply(this, o) } } function _(n) { var r = typeof n; return "function" === r || "object" === r && !!n } function w(n) { return void 0 === n } function A(n) { return !0 === n || !1 === n || "[object Boolean]" === a.call(n) } function x(n) { var r = "[object " + n + "]"; return function (n) { return a.call(n) === r } } var S = x("String"), O = x("Number"), M = x("Date"), E = x("RegExp"), B = x("Error"), N = x("Symbol"), I = x("ArrayBuffer"), k = x("Function"), T = r.document && r.document.childNodes; "function" != typeof /./ && "object" != typeof Int8Array && "function" != typeof T && (k = function (n) { return "function" == typeof n || !1 }); var D = k, R = x("Object"), F = l && R(new DataView(new ArrayBuffer(8))), V = "undefined" != typeof Map && R(new Map), P = x("DataView"); var q = F ? function (n) { return null != n && D(n.getInt8) && I(n.buffer) } : P, U = s || x("Array"); function W(n, r) { return null != n && f.call(n, r) } var z = x("Arguments"); !function () { z(arguments) || (z = function (n) { return W(n, "callee") }) }(); var L = z; function C(n) { return O(n) && y(n) } function K(n) { return function () { return n } } function J(n) { return function (r) { var t = n(r); return "number" == typeof t && t >= 0 && t <= m } } function \$(n) { return function (r) { return null == r ? void 0 : r[n] } } var G = \$("byteLength"), H = J(G), Q = /\[object ((I|Ui)nt(8|16|32)|Float(32|64)|Uint8Clamped|Big(I|Ui)nt64)Array\]/; var X = c ? function (n) { return h ? h(n) && !q(n) : H(n) && Q.test(a.call(n)) } : K(!1), Y = \$("length"); function Z(n, r) { r = function (n) { for (var r = {}, t = n.length, e = 0; e < t; ++e)r[n[e]] = !0; return { contains: function (n) { return r[n] }, push: function (t) { return r[t] = !0, n.push(t) } } }(r); var t = b.length, u = n.constructor, o = D(u) && u.prototype || e, i = "constructor"; for (W(n, i) && !r.contains(i) && r.push(i); t--;)(i = b[t]) in n && n[i] !== o[i] && !r.contains(i) && r.push(i) } function nn(n) { if (!_(n)) return []; if (p) return p(n); var r = []; for (var t in n) W(n, t) && r.push(t); return d && Z(n, r), r } function rn(n, r) { var t = nn(r), e = t.length; if (null == n) return !e; for (var u = Object(n), o = 0; o < e; o++) { var i = t[o]; if (r[i] !== u[i] || !(i in u)) return !1 } return !0 } function tn(n) { return n instanceof tn ? n : this instanceof tn ? void (this._wrapped = n) : new tn(n) } function en(n) { return new Uint8Array(n.buffer || n, n.byteOffset || 0, G(n)) } tn.VERSION = n, tn.prototype.value = function () { return this._wrapped }, tn.prototype.valueOf = tn.prototype.toJSON = tn.prototype.value, tn.prototype.toString = function () { return String(this._wrapped) }; var un = "[object DataView]"; function on(n, r, t, e) { if (n === r) return 0 !== n || 1 / n == 1 / r; if (null == n || null == r) return !1; if (n != n) return r != r; var o = typeof n; return ("function" === o || "object" === o || "object" == typeof r) && function n(r, t, e, o) { r instanceof tn && (r = r._wrapped); t instanceof tn && (t = t._wrapped); var i = a.call(r); if (i !== a.call(t)) return !1; if (F && "[object Object]" == i && q(r)) { if (!q(t)) return !1; i = un } switch (i) { case "[object RegExp]": case "[object String]": return "" + r == "" + t; case "[object Number]": return +r != +r ? +t != +t : 0 == +r ? 1 / +r == 1 / t : +r == +t; case "[object Date]": case "[object Boolean]": return +r == +t; case "[object Symbol]": return u.valueOf.call(r) === u.valueOf.call(t); case "[object ArrayBuffer]": case un: return n(en(r), en(t), e, o) }var f = "[object Array]" === i; if (!f && X(r)) { if (G(r) !== G(t)) return !1; if (r.buffer === t.buffer && r.byteOffset === t.byteOffset) return !0; f = !0 } if (!f) { if ("object" != typeof r || "object" != typeof t) return !1; var c = r.constructor, l = t.constructor; if (c !== l && !(D(c) && c instanceof c && D(l) && l instanceof l) && "constructor" in r && "constructor" in t) return !1 } o = o || []; var s = (e = e || []).length; for (; s--;)if (e[s] === r) return o[s] === t; if (e.push(r), o.push(t), f) { if ((s = r.length) !== t.length) return !1; for (; s--;)if (!on(r[s], t[s], e, o)) return !1 } else { var p, v = nn(r); if (s = v.length, nn(t).length !== s) return !1; for (; s--;)if (p = v[s], !W(t, p) || !on(r[p], t[p], e, o)) return !1 } return e.pop(), o.pop(), !0 }(n, r, t, e) } function an(n) { if (!_(n)) return []; var r = []; for (var t in n) r.push(t); return d && Z(n, r), r } function fn(n) { var r = Y(n); return function (t) { if (null == t) return !1; var e = an(t); if (Y(e)) return !1; for (var u = 0; u < r; u++)if (!D(t[n[u]])) return !1; return n !== hn || !D(t[cn]) } } var cn = "forEach", ln = "has", sn = ["clear", "delete"], pn = ["get", ln, "set"], vn = sn.concat(cn, pn), hn = sn.concat(pn), yn = ["add"].concat(sn, cn, ln), gn = V ? fn(vn) : x("Map"), dn = V ? fn(hn) : x("WeakMap"), bn = V ? fn(yn) : x("Set"), mn = x("WeakSet"); function jn(n) { for (var r = nn(n), t = r.length, e = Array(t), u = 0; u < t; u++)e[u] = n[r[u]]; return e } function _n(n) { for (var r = {}, t = nn(n), e = 0, u = t.length; e < u; e++)r[n[t[e]]] = t[e]; return r } function wn(n) { var r = []; for (var t in n) D(n[t]) && r.push(t); return r.sort() } function An(n, r) { return function (t) { var e = arguments.length; if (r && (t = Object(t)), e < 2 || null == t) return t; for (var u = 1; u < e; u++)for (var o = arguments[u], i = n(o), a = i.length, f = 0; f < a; f++) { var c = i[f]; r && void 0 !== t[c] || (t[c] = o[c]) } return t } } var xn = An(an), Sn = An(nn), On = An(an, !0); function Mn(n) { if (!_(n)) return {}; if (v) return v(n); var r = function () { }; r.prototype = n; var t = new r; return r.prototype = null, t } function En(n) { return _(n) ? U(n) ? n.slice() : xn({}, n) : n } function Bn(n) { return U(n) ? n : [n] } function Nn(n) { return tn.toPath(n) } function In(n, r) { for (var t = r.length, e = 0; e < t; e++) { if (null == n) return; n = n[r[e]] } return t ? n : void 0 } function kn(n, r, t) { var e = In(n, Nn(r)); return w(e) ? t : e } function Tn(n) { return n } function Dn(n) { return n = Sn({}, n), function (r) { return rn(r, n) } } function Rn(n) { return n = Nn(n), function (r) { return In(r, n) } } function Fn(n, r, t) { if (void 0 === r) return n; switch (null == t ? 3 : t) { case 1: return function (t) { return n.call(r, t) }; case 3: return function (t, e, u) { return n.call(r, t, e, u) }; case 4: return function (t, e, u, o) { return n.call(r, t, e, u, o) } }return function () { return n.apply(r, arguments) } } function Vn(n, r, t) { return null == n ? Tn : D(n) ? Fn(n, r, t) : _(n) && !U(n) ? Dn(n) : Rn(n) } function Pn(n, r) { return Vn(n, r, 1 / 0) } function qn(n, r, t) { return tn.iteratee !== Pn ? tn.iteratee(n, r) : Vn(n, r, t) } function Un() { } function Wn(n, r) { return null == r && (r = n, n = 0), n + Math.floor(Math.random() * (r - n + 1)) } tn.toPath = Bn, tn.iteratee = Pn; var zn = Date.now || function () { return (new Date).getTime() }; function Ln(n) { var r = function (r) { return n[r] }, t = "(?:" + nn(n).join("|") + ")", e = RegExp(t), u = RegExp(t, "g"); return function (n) { return n = null == n ? "" : "" + n, e.test(n) ? n.replace(u, r) : n } } var Cn = { "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#x27;", "\`": "&#x60;" }, Kn = Ln(Cn), Jn = Ln(_n(Cn)), \$n = tn.templateSettings = { evaluate: /<%([\s\S]+?)%>/g, interpolate: /<%=([\s\S]+?)%>/g, escape: /<%-([\s\S]+?)%>/g }, Gn = /(.)^/, Hn = { "'": "'", "\\": "\\", "\r": "r", "\n": "n", "\u2028": "u2028", "\u2029": "u2029" }, Qn = /\\|'|\r|\n|\u2028|\u2029/g; function Xn(n) { return "\\" + Hn[n] } var Yn = 0; function Zn(n, r, t, e, u) { if (!(e instanceof r)) return n.apply(t, u); var o = Mn(n.prototype), i = n.apply(o, u); return _(i) ? i : o } var nr = j((function (n, r) { var t = nr.placeholder, e = function () { for (var u = 0, o = r.length, i = Array(o), a = 0; a < o; a++)i[a] = r[a] === t ? arguments[u++] : r[a]; for (; u < arguments.length;)i.push(arguments[u++]); return Zn(n, e, this, this, i) }; return e })); nr.placeholder = tn; var rr = j((function (n, r, t) { if (!D(n)) throw new TypeError("Bind must be called on a function"); var e = j((function (u) { return Zn(n, e, r, this, t.concat(u)) })); return e })), tr = J(Y); function er(n, r, t, e) { if (e = e || [], r || 0 === r) { if (r <= 0) return e.concat(n) } else r = 1 / 0; for (var u = e.length, o = 0, i = Y(n); o < i; o++) { var a = n[o]; if (tr(a) && (U(a) || L(a))) if (r > 1) er(a, r - 1, t, e), u = e.length; else for (var f = 0, c = a.length; f < c;)e[u++] = a[f++]; else t || (e[u++] = a) } return e } var ur = j((function (n, r) { var t = (r = er(r, !1, !1)).length; if (t < 1) throw new Error("bindAll must be passed function names"); for (; t--;) { var e = r[t]; n[e] = rr(n[e], n) } return n })); var or = j((function (n, r, t) { return setTimeout((function () { return n.apply(null, t) }), r) })), ir = nr(or, tn, 1); function ar(n) { return function () { return !n.apply(this, arguments) } } function fr(n, r) { var t; return function () { return --n > 0 && (t = r.apply(this, arguments)), n <= 1 && (r = null), t } } var cr = nr(fr, 2); function lr(n, r, t) { r = qn(r, t); for (var e, u = nn(n), o = 0, i = u.length; o < i; o++)if (r(n[e = u[o]], e, n)) return e } function sr(n) { return function (r, t, e) { t = qn(t, e); for (var u = Y(r), o = n > 0 ? 0 : u - 1; o >= 0 && o < u; o += n)if (t(r[o], o, r)) return o; return -1 } } var pr = sr(1), vr = sr(-1); function hr(n, r, t, e) { for (var u = (t = qn(t, e, 1))(r), o = 0, i = Y(n); o < i;) { var a = Math.floor((o + i) / 2); t(n[a]) < u ? o = a + 1 : i = a } return o } function yr(n, r, t) { return function (e, u, o) { var a = 0, f = Y(e); if ("number" == typeof o) n > 0 ? a = o >= 0 ? o : Math.max(o + f, a) : f = o >= 0 ? Math.min(o + 1, f) : o + f + 1; else if (t && o && f) return e[o = t(e, u)] === u ? o : -1; if (u != u) return (o = r(i.call(e, a, f), C)) >= 0 ? o + a : -1; for (o = n > 0 ? a : f - 1; o >= 0 && o < f; o += n)if (e[o] === u) return o; return -1 } } var gr = yr(1, pr, hr), dr = yr(-1, vr); function br(n, r, t) { var e = (tr(n) ? pr : lr)(n, r, t); if (void 0 !== e && -1 !== e) return n[e] } function mr(n, r, t) { var e, u; if (r = Fn(r, t), tr(n)) for (e = 0, u = n.length; e < u; e++)r(n[e], e, n); else { var o = nn(n); for (e = 0, u = o.length; e < u; e++)r(n[o[e]], o[e], n) } return n } function jr(n, r, t) { r = qn(r, t); for (var e = !tr(n) && nn(n), u = (e || n).length, o = Array(u), i = 0; i < u; i++) { var a = e ? e[i] : i; o[i] = r(n[a], a, n) } return o } function _r(n) { var r = function (r, t, e, u) { var o = !tr(r) && nn(r), i = (o || r).length, a = n > 0 ? 0 : i - 1; for (u || (e = r[o ? o[a] : a], a += n); a >= 0 && a < i; a += n) { var f = o ? o[a] : a; e = t(e, r[f], f, r) } return e }; return function (n, t, e, u) { var o = arguments.length >= 3; return r(n, Fn(t, u, 4), e, o) } } var wr = _r(1), Ar = _r(-1); function xr(n, r, t) { var e = []; return r = qn(r, t), mr(n, (function (n, t, u) { r(n, t, u) && e.push(n) })), e } function Sr(n, r, t) { r = qn(r, t); for (var e = !tr(n) && nn(n), u = (e || n).length, o = 0; o < u; o++) { var i = e ? e[o] : o; if (!r(n[i], i, n)) return !1 } return !0 } function Or(n, r, t) { r = qn(r, t); for (var e = !tr(n) && nn(n), u = (e || n).length, o = 0; o < u; o++) { var i = e ? e[o] : o; if (r(n[i], i, n)) return !0 } return !1 } function Mr(n, r, t, e) { return tr(n) || (n = jn(n)), ("number" != typeof t || e) && (t = 0), gr(n, r, t) >= 0 } var Er = j((function (n, r, t) { var e, u; return D(r) ? u = r : (r = Nn(r), e = r.slice(0, -1), r = r[r.length - 1]), jr(n, (function (n) { var o = u; if (!o) { if (e && e.length && (n = In(n, e)), null == n) return; o = n[r] } return null == o ? o : o.apply(n, t) })) })); function Br(n, r) { return jr(n, Rn(r)) } function Nr(n, r, t) { var e, u, o = -1 / 0, i = -1 / 0; if (null == r || "number" == typeof r && "object" != typeof n[0] && null != n) for (var a = 0, f = (n = tr(n) ? n : jn(n)).length; a < f; a++)null != (e = n[a]) && e > o && (o = e); else r = qn(r, t), mr(n, (function (n, t, e) { ((u = r(n, t, e)) > i || u === -1 / 0 && o === -1 / 0) && (o = n, i = u) })); return o } function Ir(n, r, t) { if (null == r || t) return tr(n) || (n = jn(n)), n[Wn(n.length - 1)]; var e = tr(n) ? En(n) : jn(n), u = Y(e); r = Math.max(Math.min(r, u), 0); for (var o = u - 1, i = 0; i < r; i++) { var a = Wn(i, o), f = e[i]; e[i] = e[a], e[a] = f } return e.slice(0, r) } function kr(n, r) { return function (t, e, u) { var o = r ? [[], []] : {}; return e = qn(e, u), mr(t, (function (r, u) { var i = e(r, u, t); n(o, r, i) })), o } } var Tr = kr((function (n, r, t) { W(n, t) ? n[t].push(r) : n[t] = [r] })), Dr = kr((function (n, r, t) { n[t] = r })), Rr = kr((function (n, r, t) { W(n, t) ? n[t]++ : n[t] = 1 })), Fr = kr((function (n, r, t) { n[t ? 0 : 1].push(r) }), !0), Vr = /[^\ud800-\udfff]|[\ud800-\udbff][\udc00-\udfff]|[\ud800-\udfff]/g; function Pr(n, r, t) { return r in t } var qr = j((function (n, r) { var t = {}, e = r[0]; if (null == n) return t; D(e) ? (r.length > 1 && (e = Fn(e, r[1])), r = an(n)) : (e = Pr, r = er(r, !1, !1), n = Object(n)); for (var u = 0, o = r.length; u < o; u++) { var i = r[u], a = n[i]; e(a, i, n) && (t[i] = a) } return t })), Ur = j((function (n, r) { var t, e = r[0]; return D(e) ? (e = ar(e), r.length > 1 && (t = r[1])) : (r = jr(er(r, !1, !1), String), e = function (n, t) { return !Mr(r, t) }), qr(n, e, t) })); function Wr(n, r, t) { return i.call(n, 0, Math.max(0, n.length - (null == r || t ? 1 : r))) } function zr(n, r, t) { return null == n || n.length < 1 ? null == r || t ? void 0 : [] : null == r || t ? n[0] : Wr(n, n.length - r) } function Lr(n, r, t) { return i.call(n, null == r || t ? 1 : r) } var Cr = j((function (n, r) { return r = er(r, !0, !0), xr(n, (function (n) { return !Mr(r, n) })) })), Kr = j((function (n, r) { return Cr(n, r) })); function Jr(n, r, t, e) { A(r) || (e = t, t = r, r = !1), null != t && (t = qn(t, e)); for (var u = [], o = [], i = 0, a = Y(n); i < a; i++) { var f = n[i], c = t ? t(f, i, n) : f; r && !t ? (i && o === c || u.push(f), o = c) : t ? Mr(o, c) || (o.push(c), u.push(f)) : Mr(u, f) || u.push(f) } return u } var \$r = j((function (n) { return Jr(er(n, !0, !0)) })); function Gr(n) { for (var r = n && Nr(n, Y).length || 0, t = Array(r), e = 0; e < r; e++)t[e] = Br(n, e); return t } var Hr = j(Gr); function Qr(n, r) { return n._chain ? tn(r).chain() : r } function Xr(n) { return mr(wn(n), (function (r) { var t = tn[r] = n[r]; tn.prototype[r] = function () { var n = [this._wrapped]; return o.apply(n, arguments), Qr(this, t.apply(tn, n)) } })), tn } mr(["pop", "push", "reverse", "shift", "sort", "splice", "unshift"], (function (n) { var r = t[n]; tn.prototype[n] = function () { var t = this._wrapped; return null != t && (r.apply(t, arguments), "shift" !== n && "splice" !== n || 0 !== t.length || delete t[0]), Qr(this, t) } })), mr(["concat", "join", "slice"], (function (n) { var r = t[n]; tn.prototype[n] = function () { var n = this._wrapped; return null != n && (n = r.apply(n, arguments)), Qr(this, n) } })); var Yr = Xr({ __proto__: null, VERSION: n, restArguments: j, isObject: _, isNull: function (n) { return null === n }, isUndefined: w, isBoolean: A, isElement: function (n) { return !(!n || 1 !== n.nodeType) }, isString: S, isNumber: O, isDate: M, isRegExp: E, isError: B, isSymbol: N, isArrayBuffer: I, isDataView: q, isArray: U, isFunction: D, isArguments: L, isFinite: function (n) { return !N(n) && g(n) && !isNaN(parseFloat(n)) }, isNaN: C, isTypedArray: X, isEmpty: function (n) { if (null == n) return !0; var r = Y(n); return "number" == typeof r && (U(n) || S(n) || L(n)) ? 0 === r : 0 === Y(nn(n)) }, isMatch: rn, isEqual: function (n, r) { return on(n, r) }, isMap: gn, isWeakMap: dn, isSet: bn, isWeakSet: mn, keys: nn, allKeys: an, values: jn, pairs: function (n) { for (var r = nn(n), t = r.length, e = Array(t), u = 0; u < t; u++)e[u] = [r[u], n[r[u]]]; return e }, invert: _n, functions: wn, methods: wn, extend: xn, extendOwn: Sn, assign: Sn, defaults: On, create: function (n, r) { var t = Mn(n); return r && Sn(t, r), t }, clone: En, tap: function (n, r) { return r(n), n }, get: kn, has: function (n, r) { for (var t = (r = Nn(r)).length, e = 0; e < t; e++) { var u = r[e]; if (!W(n, u)) return !1; n = n[u] } return !!t }, mapObject: function (n, r, t) { r = qn(r, t); for (var e = nn(n), u = e.length, o = {}, i = 0; i < u; i++) { var a = e[i]; o[a] = r(n[a], a, n) } return o }, identity: Tn, constant: K, noop: Un, toPath: Bn, property: Rn, propertyOf: function (n) { return null == n ? Un : function (r) { return kn(n, r) } }, matcher: Dn, matches: Dn, times: function (n, r, t) { var e = Array(Math.max(0, n)); r = Fn(r, t, 1); for (var u = 0; u < n; u++)e[u] = r(u); return e }, random: Wn, now: zn, escape: Kn, unescape: Jn, templateSettings: \$n, template: function (n, r, t) { !r && t && (r = t), r = On({}, r, tn.templateSettings); var e, u = RegExp([(r.escape || Gn).source, (r.interpolate || Gn).source, (r.evaluate || Gn).source].join("|") + "|\$", "g"), o = 0, i = "__p+='"; n.replace(u, (function (r, t, e, u, a) { return i += n.slice(o, a).replace(Qn, Xn), o = a + r.length, t ? i += "'+\n((__t=(" + t + "))==null?'':_.escape(__t))+\n'" : e ? i += "'+\n((__t=(" + e + "))==null?'':__t)+\n'" : u && (i += "';\n" + u + "\n__p+='"), r })), i += "';\n", r.variable || (i = "with(obj||{}){\n" + i + "}\n"), i = "var __t,__p='',__j=Array.prototype.join," + "print=function(){__p+=__j.call(arguments,'');};\n" + i + "return __p;\n"; try { e = new Function(r.variable || "obj", "_", i) } catch (n) { throw n.source = i, n } var a = function (n) { return e.call(this, n, tn) }, f = r.variable || "obj"; return a.source = "function(" + f + "){\n" + i + "}", a }, result: function (n, r, t) { var e = (r = Nn(r)).length; if (!e) return D(t) ? t.call(n) : t; for (var u = 0; u < e; u++) { var o = null == n ? void 0 : n[r[u]]; void 0 === o && (o = t, u = e), n = D(o) ? o.call(n) : o } return n }, uniqueId: function (n) { var r = ++Yn + ""; return n ? n + r : r }, chain: function (n) { var r = tn(n); return r._chain = !0, r }, iteratee: Pn, partial: nr, bind: rr, bindAll: ur, memoize: function (n, r) { var t = function (e) { var u = t.cache, o = "" + (r ? r.apply(this, arguments) : e); return W(u, o) || (u[o] = n.apply(this, arguments)), u[o] }; return t.cache = {}, t }, delay: or, defer: ir, throttle: function (n, r, t) { var e, u, o, i, a = 0; t || (t = {}); var f = function () { a = !1 === t.leading ? 0 : zn(), e = null, i = n.apply(u, o), e || (u = o = null) }, c = function () { var c = zn(); a || !1 !== t.leading || (a = c); var l = r - (c - a); return u = this, o = arguments, l <= 0 || l > r ? (e && (clearTimeout(e), e = null), a = c, i = n.apply(u, o), e || (u = o = null)) : e || !1 === t.trailing || (e = setTimeout(f, l)), i }; return c.cancel = function () { clearTimeout(e), a = 0, e = u = o = null }, c }, debounce: function (n, r, t) { var e, u, o = function (r, t) { e = null, t && (u = n.apply(r, t)) }, i = j((function (i) { if (e && clearTimeout(e), t) { var a = !e; e = setTimeout(o, r), a && (u = n.apply(this, i)) } else e = or(o, r, this, i); return u })); return i.cancel = function () { clearTimeout(e), e = null }, i }, wrap: function (n, r) { return nr(r, n) }, negate: ar, compose: function () { var n = arguments, r = n.length - 1; return function () { for (var t = r, e = n[r].apply(this, arguments); t--;)e = n[t].call(this, e); return e } }, after: function (n, r) { return function () { if (--n < 1) return r.apply(this, arguments) } }, before: fr, once: cr, findKey: lr, findIndex: pr, findLastIndex: vr, sortedIndex: hr, indexOf: gr, lastIndexOf: dr, find: br, detect: br, findWhere: function (n, r) { return br(n, Dn(r)) }, each: mr, forEach: mr, map: jr, collect: jr, reduce: wr, foldl: wr, inject: wr, reduceRight: Ar, foldr: Ar, filter: xr, select: xr, reject: function (n, r, t) { return xr(n, ar(qn(r)), t) }, every: Sr, all: Sr, some: Or, any: Or, contains: Mr, includes: Mr, include: Mr, invoke: Er, pluck: Br, where: function (n, r) { return xr(n, Dn(r)) }, max: Nr, min: function (n, r, t) { var e, u, o = 1 / 0, i = 1 / 0; if (null == r || "number" == typeof r && "object" != typeof n[0] && null != n) for (var a = 0, f = (n = tr(n) ? n : jn(n)).length; a < f; a++)null != (e = n[a]) && e < o && (o = e); else r = qn(r, t), mr(n, (function (n, t, e) { ((u = r(n, t, e)) < i || u === 1 / 0 && o === 1 / 0) && (o = n, i = u) })); return o }, shuffle: function (n) { return Ir(n, 1 / 0) }, sample: Ir, sortBy: function (n, r, t) { var e = 0; return r = qn(r, t), Br(jr(n, (function (n, t, u) { return { value: n, index: e++, criteria: r(n, t, u) } })).sort((function (n, r) { var t = n.criteria, e = r.criteria; if (t !== e) { if (t > e || void 0 === t) return 1; if (t < e || void 0 === e) return -1 } return n.index - r.index })), "value") }, groupBy: Tr, indexBy: Dr, countBy: Rr, partition: Fr, toArray: function (n) { return n ? U(n) ? i.call(n) : S(n) ? n.match(Vr) : tr(n) ? jr(n, Tn) : jn(n) : [] }, size: function (n) { return null == n ? 0 : tr(n) ? n.length : nn(n).length }, pick: qr, omit: Ur, first: zr, head: zr, take: zr, initial: Wr, last: function (n, r, t) { return null == n || n.length < 1 ? null == r || t ? void 0 : [] : null == r || t ? n[n.length - 1] : Lr(n, Math.max(0, n.length - r)) }, rest: Lr, tail: Lr, drop: Lr, compact: function (n) { return xr(n, Boolean) }, flatten: function (n, r) { return er(n, r, !1) }, without: Kr, uniq: Jr, unique: Jr, union: \$r, intersection: function (n) { for (var r = [], t = arguments.length, e = 0, u = Y(n); e < u; e++) { var o = n[e]; if (!Mr(r, o)) { var i; for (i = 1; i < t && Mr(arguments[i], o); i++); i === t && r.push(o) } } return r }, difference: Cr, unzip: Gr, transpose: Gr, zip: Hr, object: function (n, r) { for (var t = {}, e = 0, u = Y(n); e < u; e++)r ? t[n[e]] = r[e] : t[n[e][0]] = n[e][1]; return t }, range: function (n, r, t) { null == r && (r = n || 0, n = 0), t || (t = r < n ? -1 : 1); for (var e = Math.max(Math.ceil((r - n) / t), 0), u = Array(e), o = 0; o < e; o++, n += t)u[o] = n; return u }, chunk: function (n, r) { if (null == r || r < 1) return []; for (var t = [], e = 0, u = n.length; e < u;)t.push(i.call(n, e, e += r)); return t }, mixin: Xr, default: tn }); return Yr._ = Yr, Yr
}));


/*
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 HMAC implementation as defined in FIPS PUB 198a

 Copyright Brian Turek 2008-2017
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information

 Several functions taken from Paul Johnston
*/
'use strict'; (function (G) {
    function r(d, b, c) {
        var h = 0, a = [], f = 0, g, m, k, e, l, p, q, t, w = !1, n = [], u = [], v, r = !1; c = c || {}; g = c.encoding || "UTF8"; v = c.numRounds || 1; if (v !== parseInt(v, 10) || 1 > v) throw Error("numRounds must a integer >= 1"); if ("SHA-1" === d) l = 512, p = z, q = H, e = 160, t = function (a) { return a.slice() }; else throw Error("Chosen SHA variant is not supported"); k = A(b, g); m = x(d); this.setHMACKey = function (a, f, b) {
            var c; if (!0 === w) throw Error("HMAC key already set"); if (!0 === r) throw Error("Cannot set HMAC key after calling update");
            g = (b || {}).encoding || "UTF8"; f = A(f, g)(a); a = f.binLen; f = f.value; c = l >>> 3; b = c / 4 - 1; if (c < a / 8) { for (f = q(f, a, 0, x(d), e); f.length <= b;)f.push(0); f[b] &= 4294967040 } else if (c > a / 8) { for (; f.length <= b;)f.push(0); f[b] &= 4294967040 } for (a = 0; a <= b; a += 1)n[a] = f[a] ^ 909522486, u[a] = f[a] ^ 1549556828; m = p(n, m); h = l; w = !0
        }; this.update = function (b) { var e, g, c, d = 0, q = l >>> 5; e = k(b, a, f); b = e.binLen; g = e.value; e = b >>> 5; for (c = 0; c < e; c += q)d + l <= b && (m = p(g.slice(c, c + q), m), d += l); h += d; a = g.slice(d >>> 5); f = b % l; r = !0 }; this.getHash = function (b, g) {
            var c, k, l, p; if (!0 ===
                w) throw Error("Cannot call getHash after setting HMAC key"); l = B(g); switch (b) { case "HEX": c = function (a) { return C(a, e, l) }; break; case "B64": c = function (a) { return D(a, e, l) }; break; case "BYTES": c = function (a) { return E(a, e) }; break; case "ARRAYBUFFER": try { k = new ArrayBuffer(0) } catch (I) { throw Error("ARRAYBUFFER not supported by this environment"); } c = function (a) { return F(a, e) }; break; default: throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER"); }p = q(a.slice(), f, h, t(m), e); for (k = 1; k < v; k += 1)p = q(p, e, 0, x(d), e);
            return c(p)
        }; this.getHMAC = function (b, g) {
            var c, k, n, r; if (!1 === w) throw Error("Cannot call getHMAC without first setting HMAC key"); n = B(g); switch (b) {
                case "HEX": c = function (a) { return C(a, e, n) }; break; case "B64": c = function (a) { return D(a, e, n) }; break; case "BYTES": c = function (a) { return E(a, e) }; break; case "ARRAYBUFFER": try { c = new ArrayBuffer(0) } catch (I) { throw Error("ARRAYBUFFER not supported by this environment"); } c = function (a) { return F(a, e) }; break; default: throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
            }k = q(a.slice(), f, h, t(m), e); r = p(u, x(d)); r = q(k, e, l, r, e); return c(r)
        }
    } function C(d, b, c) { var h = ""; b /= 8; var a, f; for (a = 0; a < b; a += 1)f = d[a >>> 2] >>> 8 * (3 + a % 4 * -1), h += "0123456789abcdef".charAt(f >>> 4 & 15) + "0123456789abcdef".charAt(f & 15); return c.outputUpper ? h.toUpperCase() : h } function D(d, b, c) {
        var h = "", a = b / 8, f, g, m; for (f = 0; f < a; f += 3)for (g = f + 1 < a ? d[f + 1 >>> 2] : 0, m = f + 2 < a ? d[f + 2 >>> 2] : 0, m = (d[f >>> 2] >>> 8 * (3 + f % 4 * -1) & 255) << 16 | (g >>> 8 * (3 + (f + 1) % 4 * -1) & 255) << 8 | m >>> 8 * (3 + (f + 2) % 4 * -1) & 255, g = 0; 4 > g; g += 1)8 * f + 6 * g <= b ? h += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(m >>>
            6 * (3 - g) & 63) : h += c.b64Pad; return h
    } function E(d, b) { var c = "", h = b / 8, a, f; for (a = 0; a < h; a += 1)f = d[a >>> 2] >>> 8 * (3 + a % 4 * -1) & 255, c += String.fromCharCode(f); return c } function F(d, b) { var c = b / 8, h, a = new ArrayBuffer(c), f; f = new Uint8Array(a); for (h = 0; h < c; h += 1)f[h] = d[h >>> 2] >>> 8 * (3 + h % 4 * -1) & 255; return a } function B(d) {
        var b = { outputUpper: !1, b64Pad: "=", shakeLen: -1 }; d = d || {}; b.outputUpper = d.outputUpper || !1; !0 === d.hasOwnProperty("b64Pad") && (b.b64Pad = d.b64Pad); if ("boolean" !== typeof b.outputUpper) throw Error("Invalid outputUpper formatting option");
        if ("string" !== typeof b.b64Pad) throw Error("Invalid b64Pad formatting option"); return b
    } function A(d, b) {
        var c; switch (b) { case "UTF8": case "UTF16BE": case "UTF16LE": break; default: throw Error("encoding must be UTF8, UTF16BE, or UTF16LE"); }switch (d) {
            case "HEX": c = function (b, a, f) {
                var g = b.length, c, d, e, l, p; if (0 !== g % 2) throw Error("String of HEX type must be in byte increments"); a = a || [0]; f = f || 0; p = f >>> 3; for (c = 0; c < g; c += 2) {
                    d = parseInt(b.substr(c, 2), 16); if (isNaN(d)) throw Error("String of HEX type contains invalid characters");
                    l = (c >>> 1) + p; for (e = l >>> 2; a.length <= e;)a.push(0); a[e] |= d << 8 * (3 + l % 4 * -1)
                } return { value: a, binLen: 4 * g + f }
            }; break; case "TEXT": c = function (c, a, f) {
                var g, d, k = 0, e, l, p, q, t, n; a = a || [0]; f = f || 0; p = f >>> 3; if ("UTF8" === b) for (n = 3, e = 0; e < c.length; e += 1)for (g = c.charCodeAt(e), d = [], 128 > g ? d.push(g) : 2048 > g ? (d.push(192 | g >>> 6), d.push(128 | g & 63)) : 55296 > g || 57344 <= g ? d.push(224 | g >>> 12, 128 | g >>> 6 & 63, 128 | g & 63) : (e += 1, g = 65536 + ((g & 1023) << 10 | c.charCodeAt(e) & 1023), d.push(240 | g >>> 18, 128 | g >>> 12 & 63, 128 | g >>> 6 & 63, 128 | g & 63)), l = 0; l < d.length; l += 1) {
                    t = k +
                        p; for (q = t >>> 2; a.length <= q;)a.push(0); a[q] |= d[l] << 8 * (n + t % 4 * -1); k += 1
                } else if ("UTF16BE" === b || "UTF16LE" === b) for (n = 2, d = "UTF16LE" === b && !0 || "UTF16LE" !== b && !1, e = 0; e < c.length; e += 1) { g = c.charCodeAt(e); !0 === d && (l = g & 255, g = l << 8 | g >>> 8); t = k + p; for (q = t >>> 2; a.length <= q;)a.push(0); a[q] |= g << 8 * (n + t % 4 * -1); k += 2 } return { value: a, binLen: 8 * k + f }
            }; break; case "B64": c = function (b, a, f) {
                var c = 0, d, k, e, l, p, q, n; if (-1 === b.search(/^[a-zA-Z0-9=+\/]+\$/)) throw Error("Invalid character in base-64 string"); k = b.indexOf("="); b = b.replace(/\=/g,
                    ""); if (-1 !== k && k < b.length) throw Error("Invalid '=' found in base-64 string"); a = a || [0]; f = f || 0; q = f >>> 3; for (k = 0; k < b.length; k += 4) { p = b.substr(k, 4); for (e = l = 0; e < p.length; e += 1)d = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(p[e]), l |= d << 18 - 6 * e; for (e = 0; e < p.length - 1; e += 1) { n = c + q; for (d = n >>> 2; a.length <= d;)a.push(0); a[d] |= (l >>> 16 - 8 * e & 255) << 8 * (3 + n % 4 * -1); c += 1 } } return { value: a, binLen: 8 * c + f }
            }; break; case "BYTES": c = function (b, a, c) {
                var d, m, k, e, l; a = a || [0]; c = c || 0; k = c >>> 3; for (m = 0; m < b.length; m +=
                    1)d = b.charCodeAt(m), l = m + k, e = l >>> 2, a.length <= e && a.push(0), a[e] |= d << 8 * (3 + l % 4 * -1); return { value: a, binLen: 8 * b.length + c }
            }; break; case "ARRAYBUFFER": try { c = new ArrayBuffer(0) } catch (h) { throw Error("ARRAYBUFFER not supported by this environment"); } c = function (b, a, c) { var d, m, k, e, l; a = a || [0]; c = c || 0; m = c >>> 3; l = new Uint8Array(b); for (d = 0; d < b.byteLength; d += 1)e = d + m, k = e >>> 2, a.length <= k && a.push(0), a[k] |= l[d] << 8 * (3 + e % 4 * -1); return { value: a, binLen: 8 * b.byteLength + c } }; break; default: throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");
        }return c
    } function n(d, b) { return d << b | d >>> 32 - b } function u(d, b) { var c = (d & 65535) + (b & 65535); return ((d >>> 16) + (b >>> 16) + (c >>> 16) & 65535) << 16 | c & 65535 } function y(d, b, c, h, a) { var f = (d & 65535) + (b & 65535) + (c & 65535) + (h & 65535) + (a & 65535); return ((d >>> 16) + (b >>> 16) + (c >>> 16) + (h >>> 16) + (a >>> 16) + (f >>> 16) & 65535) << 16 | f & 65535 } function x(d) { var b = []; if ("SHA-1" === d) b = [1732584193, 4023233417, 2562383102, 271733878, 3285377520]; else throw Error("No SHA variants supported"); return b } function z(d, b) {
        var c = [], h, a, f, g, m, k, e; h = b[0]; a = b[1];
        f = b[2]; g = b[3]; m = b[4]; for (e = 0; 80 > e; e += 1)c[e] = 16 > e ? d[e] : n(c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16], 1), k = 20 > e ? y(n(h, 5), a & f ^ ~a & g, m, 1518500249, c[e]) : 40 > e ? y(n(h, 5), a ^ f ^ g, m, 1859775393, c[e]) : 60 > e ? y(n(h, 5), a & f ^ a & g ^ f & g, m, 2400959708, c[e]) : y(n(h, 5), a ^ f ^ g, m, 3395469782, c[e]), m = g, g = f, f = n(a, 30), a = h, h = k; b[0] = u(h, b[0]); b[1] = u(a, b[1]); b[2] = u(f, b[2]); b[3] = u(g, b[3]); b[4] = u(m, b[4]); return b
    } function H(d, b, c, h) {
        var a; for (a = (b + 65 >>> 9 << 4) + 15; d.length <= a;)d.push(0); d[b >>> 5] |= 128 << 24 - b % 32; b += c; d[a] = b & 4294967295; d[a - 1] = b / 4294967296 | 0;
        b = d.length; for (a = 0; a < b; a += 16)h = z(d.slice(a, a + 16), h); return h
    } "function" === typeof define && define.amd ? define(function () { return r }) : "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (module.exports = r), exports = r) : G.jsSHA = r
})(this);

(function () {
    'use strict';




    const TIPS = {
        CurrentVersion: "143.2021.1005.6",
        LastUpdateDate: "2021.10.05",
        VersionTips: "115转存助手ui优化版v3.1特别版",
        UpdateUrl: "",
        Sha1FileInputDetails: "",
    };


    function config() {
        var windowCss = '#Cfg4ne .nav-tabs {margin: 20 2} #Cfg4ne .config_var textarea{width: 310px; height: 50px;} #Cfg4ne .inline {padding-bottom:0px;} #Cfg4ne .config_header a:hover {color:#1e90ff;} #Cfg4ne .config_var {margin-left: 6%;margin-right: 6%;} #Cfg4ne input[type="checkbox"] {margin: 3px 3px 3px 0px;} #Cfg4ne input[type="text"] {width: 60px;} #Cfg4ne {background-color: lightgray;} #Cfg4ne .reset_holder {float: left; position: relative; bottom: -1em;} #Cfg4ne .saveclose_buttons {margin: .7em;} #Cfg4ne .section_desc {font-size: 10pt;}';

        GM_registerMenuCommand('设置', opencfg);
        function opencfg() {
            GM_config.open();
        };

        GM_config.init(
            {
                id: 'Cfg4ne',
                title: GM_config.create('a', {
                    target: '_blank',
                    className: 'setTitle',
                    textContent: \`\${TIPS.VersionTips}设置\`,
                }),
                isTabs: true,
                skin: 'tab',
                css: windowCss,
                frameStyle:
                {
                    height: '320px',
                    width: '570px',
                    zIndex: '2147483648',
                },
                fields:
                {
                    createRootFolderDefaultValue:
                    {
                        section: ['', '此版已经精简优化配置，减少操作'],
                        label: '“sha1转存时，强制在保存处新建根目录”这项默认选中',
                        labelPos: 'right',
                        type: 'checkbox',
                        default: true,
                    },
                    createChildFolderVisible:
                    {
                        label: '显示“sha1转存时，不创建任何子目录”选项；不显示则强制创建子目录',
                        labelPos: 'right',
                        type: 'checkbox',
                        default: false,
                    },
                    autoRename:
                    {
                        label: '“sha1转存时，应用防文件名违规方案”这项默认选中',
                        labelPos: 'right',
                        type: 'checkbox',
                        default: true,
                    },
                    advancedRename:
                    {
                        //label: '在目录的悬浮工具条处显示“去除分隔符”选项',
                        labelPos: 'right',
                        //type: 'checkbox',
                        type: 'hidden',
                        default: false,
                    },
                    autoUseSeparator:
                    {
                        //label: '自动给文件名添加分隔符进行上传，以防文件名违规',
                        labelPos: 'right',
                        //type: 'checkbox',
                        type: 'hidden',
                        default: true,
                    },
                    autoUseSeparatorToRename:
                    {
                        //label: '上传结束,自动给文件名去除分隔符，还原原文件名',
                        labelPos: 'right',
                        //type: 'checkbox',
                        type: 'hidden',
                        default: true,
                    },
                    separator:
                    {
                        // label: '分隔符方案(推荐非常用汉字；如果分隔符失效,请自行修改)：',
                        //type: 'text',
                        type: 'hidden',
                        default: '變'
                    },
                    uploadNumber:
                    {
                        //section: ['时间参数设置', '注意：参数设置过快，会引起115服务器无响应，为稳定运行参数未启用！'],
                        //label: '转存同时工作任务数:',
                        labelPos: 'left',
                        type: 'hidden',
                        default: '4',
                    },
                    uploadSleepTime:
                    {
                        //label: '转存间隔时间（毫秒）:',
                        labelPos: 'left',
                        type: 'hidden',
                        default: '500',
                    },
                    downloadNumber:
                    {
                        //label: '提取同时工作任务数:',
                        labelPos: 'left',
                        type: 'hidden',
                        default: '4',
                    },
                    downloadSleepTime:
                    {
                        //label: '提取间隔时间（毫秒）:',
                        labelPos: 'left',
                        type: 'hidden',
                        default: '1000',
                    },
                    createFolderSleepTime:
                    {
                        //label: '目录创建间隔时间（毫秒）:',
                        labelPos: 'left',
                        type: 'hidden',
                        default: '250',
                    },
                    checkUpdate:
                    {
                        //section: ['帮助&更新&反馈', '常见错误以及对本脚本进行更新检查与bug反馈'],
                        //label: '前往github主页',
                        labelPos: 'right',
                        type: 'hidden',
                        //type: 'button',
                        click: function () {
                            window.open(TIPS.UpdateUrl, "_blank");
                        }
                    },


                },

                events:
                {
                    save: function () {
                        GM_config.close();
                        location.reload();
                    }
                },
            });
    };
    config();

    var currentConfig =
    {
        createRootFolderDefaultValue: 'createRootFolderDefaultValue',
        createChildFolderVisible: 'createChildFolderVisible',
        autoRename: \`autoRename\`,
        advancedRename: 'advancedRename',
        autoUseSeparator: 'autoUseSeparator',
        autoUseSeparatorToRename: 'autoUseSeparatorToRename',
        separator: 'separator',
        uploadNumber: 'uploadNumber',
        uploadSleepTime: 'uploadSleepTime',
        downloadNumber: 'downloadNumber',
        downloadSleepTime: 'downloadSleepTime',
        createFolderSleepTime: 'createFolderSleepTime',
    }


    //init setting
    waitForKeyElements("div.file-opr", AddShareSHA1Btn);
    waitForKeyElements("div.dialog-bottom", AddDownloadSha1Btn);
    waitForKeyElements("div.lstc-search", AddShareButtonForSearchItem);

    var zhuancunButton = '<a href="javascript:;"  class="button btn-line btn-upload" menu="offline_task"><i class="icon-operate ifo-linktask"></i><span>链接与sha1转存任务</span><em style="display:none;" class="num-dot"></em></a>';
    \$(".left-tvf").eq(0).append(zhuancunButton);

    window.cookie = document.cookie



    //#region 20201230新的提取api相关
    var pub_key = '-----BEGIN PUBLIC KEY-----\
    MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQDR3rWmeYnRClwLBB0Rq0dlm8Mr\
    PmWpL5I23SzCFAoNpJX6Dn74dfb6y02YH15eO6XmeBHdc7ekEFJUIi+swganTokR\
    IVRRr/z16/3oh7ya22dcAqg191y+d6YDr4IGg/Q5587UKJMj35yQVXaeFXmLlFPo\
    kFiz4uPxhrB7BGqZbQIDAQAB\
    -----END PUBLIC KEY-----'
    var private_key = '-----BEGIN RSA PRIVATE KEY-----\
    MIICXAIBAAKBgQCMgUJLwWb0kYdW6feyLvqgNHmwgeYYlocst8UckQ1+waTOKHFC\
    TVyRSb1eCKJZWaGa08mB5lEu/asruNo/HjFcKUvRF6n7nYzo5jO0li4IfGKdxso6\
    FJIUtAke8rA2PLOubH7nAjd/BV7TzZP2w0IlanZVS76n8gNDe75l8tonQQIDAQAB\
    AoGANwTasA2Awl5GT/t4WhbZX2iNClgjgRdYwWMI1aHbVfqADZZ6m0rt55qng63/\
    3NsjVByAuNQ2kB8XKxzMoZCyJNvnd78YuW3Zowqs6HgDUHk6T5CmRad0fvaVYi6t\
    viOkxtiPIuh4QrQ7NUhsLRtbH6d9s1KLCRDKhO23pGr9vtECQQDpjKYssF+kq9iy\
    A9WvXRjbY9+ca27YfarD9WVzWS2rFg8MsCbvCo9ebXcmju44QhCghQFIVXuebQ7Q\
    pydvqF0lAkEAmgLnib1XonYOxjVJM2jqy5zEGe6vzg8aSwKCYec14iiJKmEYcP4z\
    DSRms43hnQsp8M2ynjnsYCjyiegg+AZ87QJANuwwmAnSNDOFfjeQpPDLy6wtBeft\
    5VOIORUYiovKRZWmbGFwhn6BQL+VaafrNaezqUweBRi1PYiAF2l3yLZbUQJAf/nN\
    4Hz/pzYmzLlWnGugP5WCtnHKkJWoKZBqO2RfOBCq+hY4sxvn3BHVbXqGcXLnZPvo\
    YuaK7tTXxZSoYLEzeQJBAL8Mt3AkF1Gci5HOug6jT4s4Z+qDDrUXo9BlTwSWP90v\
    wlHF+mkTJpKd5Wacef0vV+xumqNorvLpIXWKwxNaoHM=\
    -----END RSA PRIVATE KEY-----'

    const priv = forge.pki.privateKeyFromPem(private_key);
    const pub = forge.pki.publicKeyFromPem(pub_key);
    const g_key_l = [0x42, 0xda, 0x13, 0xba, 0x78, 0x76, 0x8d, 0x37, 0xe8, 0xee, 0x04, 0x91]
    const g_key_s = [0x29, 0x23, 0x21, 0x5e]
    const g_kts = [0xf0, 0xe5, 0x69, 0xae, 0xbf, 0xdc, 0xbf, 0x5a, 0x1a, 0x45, 0xe8, 0xbe, 0x7d, 0xa6, 0x73, 0x88, 0xde, 0x8f, 0xe7, 0xc4, 0x45, 0xda, 0x86, 0x94, 0x9b, 0x69, 0x92, 0x0b, 0x6a, 0xb8, 0xf1, 0x7a, 0x38, 0x06, 0x3c, 0x95, 0x26, 0x6d, 0x2c, 0x56, 0x00, 0x70, 0x56, 0x9c, 0x36, 0x38, 0x62, 0x76, 0x2f, 0x9b, 0x5f, 0x0f, 0xf2, 0xfe, 0xfd, 0x2d, 0x70, 0x9c, 0x86, 0x44, 0x8f, 0x3d, 0x14, 0x27, 0x71, 0x93, 0x8a, 0xe4, 0x0e, 0xc1, 0x48, 0xae, 0xdc, 0x34, 0x7f, 0xcf, 0xfe, 0xb2, 0x7f, 0xf6, 0x55, 0x9a, 0x46, 0xc8, 0xeb, 0x37, 0x77, 0xa4, 0xe0, 0x6b, 0x72, 0x93, 0x7e, 0x51, 0xcb, 0xf1, 0x37, 0xef, 0xad, 0x2a, 0xde, 0xee, 0xf9, 0xc9, 0x39, 0x6b, 0x32, 0xa1, 0xba, 0x35, 0xb1, 0xb8, 0xbe, 0xda, 0x78, 0x73, 0xf8, 0x20, 0xd5, 0x27, 0x04, 0x5a, 0x6f, 0xfd, 0x5e, 0x72, 0x39, 0xcf, 0x3b, 0x9c, 0x2b, 0x57, 0x5c, 0xf9, 0x7c, 0x4b, 0x7b, 0xd2, 0x12, 0x66, 0xcc, 0x77, 0x09, 0xa6]
    var m115_l_rnd_key = genRandom(16)
    var m115_s_rnd_key = []
    var key_s = []
    var key_l = []
    function intToByte(i) {
        var b = i & 0xFF;
        var c = 0;
        if (b >= 256) {
            c = b % 256;
            c = -1 * (256 - c);
        } else {
            c = b;
        }
        return c
    }
    function stringToArray(s) {
        var map = Array.prototype.map
        var array = map.call(s, function (x) {
            return x.charCodeAt(0);
        })
        return array
    }
    function arrayTostring(array) {
        var result = "";
        for (var i = 0; i < array.length; ++i) {
            result += (String.fromCharCode(array[i]));
        }
        return result;
    }
    function m115_init() {
        key_s = []
        key_l = []
    }
    function m115_setkey(randkey, sk_len) {
        var length = sk_len * (sk_len - 1)
        var index = 0
        var xorkey = ''
        if (randkey) {
            for (var i = 0; i < sk_len; i++) {
                var x = intToByte((randkey[i]) + (g_kts[index]))
                xorkey += String.fromCharCode(g_kts[length] ^ x)
                length -= sk_len
                index += sk_len
            }
            if (sk_len == 4) {
                key_s = stringToArray(xorkey)
            }
            else if (sk_len == 12) {
                key_l = stringToArray(xorkey)
            }
        }
    }
    function xor115_enc(src, key) {
        var lkey = key.length
        var secret = []
        var num = 0
        var pad = (src.length) % 4
        if (pad > 0) {
            for (var i = 0; i < pad; i++) {
                secret.push((src[i]) ^ key[i])
            }
            src = src.slice(pad)
        }
        for (var j = 0; j < src.length; j++) {
            if (num >= lkey) {
                num = num % lkey
            }
            secret.push((src[j] ^ key[num]))
            num += 1
        }
        return secret

    }
    function genRandom(len) {
        var keys = []
        var chars = 'ABCDEFGHJKMNPQRSTWXYZabcdefhijkmnprstwxyz23456789';
        var maxPos = chars.length;
        for (var i = 0; i < len; i++) {
            keys.push(chars.charAt(Math.floor(Math.random() * maxPos)).charCodeAt(0));
        }
        return keys;
    }
    function m115_encode(plaintext) {
        console.log('m115_encode:')
        m115_init()
        key_l = g_key_l
        m115_setkey(m115_l_rnd_key, 4)
        var tmp = xor115_enc(stringToArray(plaintext), key_s).reverse()
        var xortext = xor115_enc(tmp, key_l)
        var text = arrayTostring(m115_l_rnd_key) + arrayTostring(xortext)
        var ciphertext = pub.encrypt(text)
        ciphertext = encodeURIComponent(forge.util.encode64(ciphertext))
        return ciphertext
    }
    function m115_decode(ciphertext) {
        console.log('m115_decode:')
        var bciphertext = forge.util.decode64(ciphertext)
        var block = bciphertext.length / (128)
        var plaintext = ''
        var index = 0
        for (var i = 1; i <= block; ++i) {
            plaintext += priv.decrypt(bciphertext.slice(index, i * 128))
            index += 128
        }
        m115_s_rnd_key = stringToArray(plaintext.slice(0, 16))
        plaintext = plaintext.slice(16);
        m115_setkey(m115_l_rnd_key, 4)
        m115_setkey(m115_s_rnd_key, 12)
        var tmp = xor115_enc(stringToArray(plaintext), key_l).reverse()
        plaintext = xor115_enc(tmp, key_s)
        return arrayTostring(plaintext)
    }

    function PostData(dict) {
        var k, tmp, v;
        tmp = [];
        for (k in dict) {
            v = dict[k];
            tmp.push(k + "=" + v);
        }
        return tmp.join('&');
    };

    function UrlData(dict) {
        var k, tmp, v;
        tmp = [];
        for (k in dict) {
            v = dict[k];
            tmp.push((encodeURIComponent(k)) + "=" + (encodeURIComponent(v)));
        }
        return tmp.join('&');
    };

    function GetSig(userid, fileid, target, userkey) {
        var sha1, tmp;
        sha1 = new jsSHA('SHA-1', 'TEXT');
        sha1.update("" + userid + fileid + fileid + target + "0");
        tmp = sha1.getHash('HEX');
        sha1 = new jsSHA('SHA-1', 'TEXT');
        sha1.update("" + userkey + tmp + "000000");
        return sha1.getHash('HEX', {
            outputUpper: true
        });
    }



    function download(filename, content, contentType) {
        if (!contentType) contentType = 'application/octet-stream';
        var a = document.createElement('a');
        var blob = new Blob([content], { 'type': contentType });
        a.href = window.URL.createObjectURL(blob);
        a.download = filename;
        a.click();
    }

    function RenewCookie() {
        var arryCookie = window.cookie.split(';');
        arryCookie.forEach(function (kv) {
            document.cookie = kv + ";expires=Thu, 01 Jan 2100 00:00:00 UTC;;domain=.115.com"
        }
        )
    }

    function DeleteCookie(resp) {
        try {
            var reg = /set-cookie: .+;/g;
            var setcookie = reg.exec(resp)[0].split(';');
            var filecookie = setcookie[0].slice(11) + "; expires=Thu, 01 Jan 1970 00:00:00 UTC;" + setcookie[3] + ";domain=.115.com";
            document.cookie = filecookie;
            RenewCookie()
            return filecookie;
        }
        catch (err) {
            return null;
        }
    }




    //#endregion

    function hereDoc(f) {
        return f.toString().replace(/^[^\/]+\/\*!?\s?/, '').replace(/\*\/[^\/]+\$/, '');
    }

    const MessageType = {
        BEGIN: 0,
        PROCESSING: 1,
        END: 2,
        ERROR: 3,
        CLOSE: 4,
        CANCEL: 5,
        BEGIN4UPLOAD: 6,
        END4UPLOAD: 7,
        NOTIFYINFO: 8
    };

    function createMessage(messageType, msg, id) {
        return { messageType: messageType, msg: msg, targetID: id }
    }

    String.prototype.format = function () {
        if (arguments.length == 0) {
            return this;
        }
        for (var s = this, i = 0; i < arguments.length; i++) {
            s = s.replace(new RegExp("\\{" + i + "\\}", "g"), arguments[i]);
        }
        return s;
    };

    var getTamplateLines = function () {
        /*
            <div >
                <div class="itemContent" style="color: red;text-align: left;margin: 10px 0;">
                </div>
                <hr />
                <div style="height:140px;overflow-x: hidden;overflow-y: auto;">
                    <ul class="errorList"  style="font-size: small;text-align: left;font-style: italic; "></ul>
                </div>
            </div>
        */
    };


    //post from iframe
    function postSha1Messgae(message) {
        var postData = {
            eventID: "115sha1",
            data: message
        };

        var text = JSON.stringify(postData);
        window.parent.postMessage(text, "https://115.com/");

    }


    function setTaskCancel() {
        GM_setValue("setTaskCancel", true)
    }

    function resetTaskCancelFlag() {
        GM_setValue("setTaskCancel", false)
    }
    function getTaskCancelFlag() {
        return GM_getValue("setTaskCancel");
    }


    //解决提取时的alert不能全屏的问题
    if (window.top === window.self) {
        \$(function () {
            var \$itemContent = null;
            var \$errorList = null;
            var getTamplate = hereDoc(getTamplateLines);

            \$(window).on("message", function (e) {
                var dataInfo = JSON.parse(e.originalEvent.data);
                if (dataInfo.eventID != "115sha1" || e.originalEvent.origin != "https://115.com") return;
                var message = dataInfo.data;

                //ui:
                if (message.messageType == MessageType.BEGIN) {
                    Swal.fire({
                        title: '正在操作中...',
                        html: getTamplate,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        confirmButtonText: \`完成\`,
                        showCancelButton: true,
                        cancelButtonText: \`取消操作\`,
                        footer: \`重要提示：操作过程中，请置顶该页面防止脚本休眠！\`,
                        willOpen: function () {
                            Swal.showLoading(Swal.getConfirmButton());
                            var \$swalContent1 = \$(Swal.getHtmlContainer());
                            \$errorList = \$swalContent1.find(".errorList");
                            \$itemContent = \$swalContent1.find(".itemContent");
                        }
                    }).then((result) => {
                        if (result.dismiss === Swal.DismissReason.cancel) {
                            setTaskCancel();
                            console.log("Cancel Task");
                            Swal.fire({
                                title: '已取消未开始任务，等待已开始任务中...',
                                html: getTamplate,
                                allowOutsideClick: false,
                                allowEscapeKey: false,
                                confirmButtonText: \`完成\`,
                                footer: \`重要提示：操作过程中，请置顶该页面防止脚本休眠！\`,
                                willOpen: function () {
                                    Swal.showLoading(Swal.getConfirmButton());
                                    var \$swalContent1 = \$(Swal.getHtmlContainer());
                                    \$errorList = \$swalContent1.find(".errorList");
                                    \$itemContent = \$swalContent1.find(".itemContent");
                                }
                            })
                        }
                    });

                }
                else if (message.messageType == MessageType.PROCESSING) {
                    \$itemContent.html(message.msg);
                }
                else if (message.messageType == MessageType.ERROR) {
                    \$errorList.append('<li><div display: flex;"><p>' + message.msg + '</p><p style="font-style: italic;"><\p><\div><\li><li><hr/></li>');
                }
                else if (message.messageType == MessageType.END) {
                    \$itemContent.html(message.msg);
                    Swal.getTitle().textContent = "操作完成！";
                    Swal.getCancelButton().style.display = "none";
                    Swal.getFooter().style.display = "none";
                    Swal.hideLoading();

                }
                else if (message.messageType == MessageType.CLOSE) {
                    Swal.close();
                }
                else if (message.messageType == MessageType.BEGIN4UPLOAD) {
                    Swal.fire({
                        title: '正在操作中...',
                        html: getTamplate,
                        allowOutsideClick: false,
                        allowEscapeKey: false,
                        confirmButtonText: \`完成\`,
                        denyButtonText: \`打开目录\`,
                        footer: \`重要提示：操作过程中，请置顶该页面防止脚本休眠！\`,
                        willOpen: function () {
                            Swal.showLoading(Swal.getConfirmButton());
                            var \$swalContent1 = \$(Swal.getHtmlContainer());
                            \$errorList = \$swalContent1.find(".errorList");
                            \$itemContent = \$swalContent1.find(".itemContent");
                        }
                    })
                }
                else if (message.messageType == MessageType.END4UPLOAD) {
                    \$itemContent.html(message.msg);
                    Swal.getTitle().textContent = "操作完成！";
                    Swal.getDenyButton().style.display = "block";
                    Swal.getDenyButton().addEventListener('click', e => {
                        console.log("DenyButton click");
                        console.log(message);
                        window.location.href = "https://115.com/?cid=" + message.targetID + "&offset=0&tab=&mode=wangpan";
                    });
                    Swal.getFooter().style.display = "none";
                    Swal.hideLoading();
                }

            })
        });
    }






    function delay(ms) {

        if (ms == 0) {
            ms = 1000 * (Math.floor(Math.random() * (11 - 4)) + 4);
        }
        return new Promise(resolve => setTimeout(resolve, ms))
    }


    //#region 115 api
    //get   UploadInfo
    //return {state:false,user_id:0,userkey:'0',error:''}
    async function getUploadInfo() {
        const r = await \$.ajax({
            url: 'https://proapi.115.com/app/uploadinfo',
            dataType: 'json',
            xhrFields: { withCredentials: true }
        });
        return r;
    }

    //add a folder
    //return {state: false, error: "该目录名称已存在。", errno: 20004, errtype: "war"}
    //return {state: true, error: "", errno: "", aid: 1, cid: "2020455078010511975", …}
    async function addFolder(pid, folderName) {
        const postData = PostData({
            pid: pid,
            cname: encodeURIComponent(folderName)
        });

        const r = await \$.ajax({
            type: 'POST',
            url: 'https://webapi.115.com/files/add',
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            xhrFields: { withCredentials: true },
            dataType: 'json',
            data: postData
        });

        return r;
    }


    //return {data: Array(30), count: 53, data_source: "DB", sys_count: 0, offset: 0, page_size:115, …}
    //return Array type:
    //      [folder]:{cid: "", aid: "1", pid: "", n: "", m: 0, …}
    //      [file]:  {fid: "", uid: 1447812, aid: 1, cid: "", n: "",pc:"",sha:"",s:0,t:"" …}
    async function getDirectChildItemsByOffset(cid, offset) {
        var tUrl = 'https://webapi.115.com/files?aid=1&cid=' + cid + '&o=file_name&asc=1&offset=' + offset + '&show_dir=1&limit=1150&code=&scid=&snap=0&natsort=1&record_open_time=1&source=&format=json&fc_mix=&type=&star=&is_share=&suffix=&custom_order=';
        // var tUrl = "https://aps.115.com/natsort/files.php?aid=1&cid=" + cid + "&o=file_name&asc=1&offset=" + offset + "&show_dir=1&limit=1150&code=&scid=&snap=0&natsort=1&record_open_time=1&source=&format=json&fc_mix=0&type=&star=&is_share=&suffix=&custom_order=";
        const result = await \$.ajax({
            type: 'GET',
            url: tUrl,
            dataType: "json",
            xhrFields: { withCredentials: true }
        });
        return result;
    }

    //直接子项目少于1200
    async function getDirectChildItemsByOffsetlt1200(cid, offset) {
        //var tUrl = 'https://webapi.115.com/files?aid=1&cid='+cid+'&o=file_name&asc=1&offset='+offset+'&show_dir=1&limit=1150&code=&scid=&snap=0&natsort=1&record_open_time=1&source=&format=json&fc_mix=&type=&star=&is_share=&suffix=&custom_order=';
        var tUrl = "https://aps.115.com/natsort/files.php?aid=1&cid=" + cid + "&o=file_name&asc=1&offset=" + offset + "&show_dir=1&limit=1150&code=&scid=&snap=0&natsort=1&record_open_time=1&source=&format=json&fc_mix=0&type=&star=&is_share=&suffix=&custom_order=";
        const result = await \$.ajax({
            type: 'GET',
            url: tUrl,
            dataType: "json",
            xhrFields: { withCredentials: true }
        });
        return result;
    }

    //return AllDirect items :{id:"",parentID:cid,isFolder:false,name:"",size:0,pc:"",sha:"",paths[] };
    async function getAllDirectItems(cid, folderProcessCallback) {
        var items = new Array();
        var index = 0;
        var flag = true;
        var pageIndex = 1;
        var first = true;
        var isLT1200 = false;

        while (flag) {
            if (getTaskCancelFlag()) break;

            folderProcessCallback(pageIndex);
            var result = null;
            //1200数量，不同的api；这么写减少发包
            if (first) {
                result = await getDirectChildItemsByOffset(cid, index);
                console.log("first >1200 :{0},{1}".format(result.state, result.count));
                if (!result.state) {
                    result = await getDirectChildItemsByOffsetlt1200(cid, index);
                    console.log("first <1200 :{0},{1}".format(result.state, result.count));
                    isLT1200 = true;
                }
                first = false;
            }
            else {
                if (isLT1200) result = await getDirectChildItemsByOffsetlt1200(cid, index);
                else result = await getDirectChildItemsByOffset(cid, index);
            }

            var totalCount = parseInt(result.count);
            if (totalCount >= 1) {
                result.data.forEach(function (item) {
                    var pItem = {
                        id: "",
                        parentID: cid,
                        isFolder: false,
                        name: "",
                        size: "",
                        pickCode: "",
                        sha1: "",
                        paths: new Array(),
                        preid: "",
                        needToRemoved: false
                    };

                    if (item.fid)//文件 fid,cid
                    {
                        pItem.isFolder = false;
                        pItem.id = item.fid;
                        pItem.name = item.n;
                        pItem.pickCode = item.pc;
                        pItem.sha1 = item.sha;
                        pItem.size = item.s;
                    }
                    else //目录 cid,pid
                    {
                        pItem.isFolder = true;
                        pItem.id = item.cid;
                        pItem.name = item.n;
                        pItem.pickCode = item.pc;
                    }


                    var itemIndex = items.findIndex(q => q.name == pItem.name && q.pickCode == pItem.pickCode && q.sha1 == pItem.sha1 && (_.isEqual(q.paths, pItem.paths)));
                    if (itemIndex == -1) items.push(pItem);
                    else {
                        //可能存在同一个目录下，两个文件一模一样,
                        //相同文件处理：不然循环条件退不出
                        //fix:pickcode不一样,先保存着吧
                        pItem.needToRemoved = true;
                        items.push(pItem)
                    }
                })
            }

            console.log("_______________totalCount " + totalCount);
            console.log(items.length)
            //当获取到比pagesize小时，获取结束,1200时有个坑。。。
            if (totalCount <= items.length) {
                break;
            }
            else {
                await delay(500);
                index = items.length;
                pageIndex = pageIndex + 1;
            }
        }

        console.log("cid: {0}, count: {1}".format(cid, items.length));

        var noNullItems = items.filter(q => !q.needToRemoved);
        console.log("cid: {0}, 除去完全重复count: {1}".format(cid, noNullItems.length));

        return noNullItems;
    }

    //return {file_name:"",pick_code:"",sha1:"",count:"",size:"",folder_count:"",paths:[]}
    //return paths:[]层级目录
    async function getFolderInfo(cid) {
        var pUrl = "https://webapi.115.com/category/get?aid=1&cid=" + cid;
        const result = await \$.ajax({
            type: 'GET',
            url: pUrl,
            dataType: "json",
            xhrFields: { withCredentials: true }
        });
        console.log(result);
        var pItem = {
            fileCount: parseInt(result.count),
            folderCount: parseInt(result.folder_count),
            id: cid,
            parentID: "",
            isFolder: true,
            name: result.file_name,
            size: result.size,
            pickCode: result.pick_code,
            sha1: "",
            paths: result.paths,
            preid: "",
            updateTime: parseInt(result.utime),
        };

        return pItem;
    }

    // get fileArray:{id:"",parentID:cid,isFolder:false,name:"",size:0,pc:"",sha:"",paths[] };
    async function getAllFiles(cid, fileArray, topCid, folderProcessCallback) {
        var thisFolder = await getFolderInfo(cid);
        folderProcessCallback && folderProcessCallback(thisFolder.name, 0);
        //空目录，跳过遍历

        if (getTaskCancelFlag()) return;
        if (thisFolder.fileCount == 0) return;
        folderProcessCallback && folderProcessCallback(thisFolder.name)
        var directItems = await getAllDirectItems(thisFolder.id, pageIndex => {
            folderProcessCallback && folderProcessCallback(thisFolder.name, pageIndex);
        });
        //空目录，跳过遍历
        if (directItems.length == 0) return;
        var files = directItems.filter(t => !t.isFolder);
        files.forEach(f => {
            var index = thisFolder.paths.findIndex(q => q.file_id.toString() == topCid);
            var paths = new Array();
            if (index != -1) {
                paths = thisFolder.paths.slice(index).map(q => q.file_name);
            }
            paths.push(thisFolder.name);
            f.paths = paths.slice(1);
            fileArray.push(f);
        });

        var folders = directItems.filter(t => t.isFolder);
        for (var folder of folders) {
            if (getTaskCancelFlag()) break;
            await getAllFiles(folder.id, fileArray, topCid, folderProcessCallback);
            await delay(200);
        }

    }

    //批量重命名 fileArray  [{id:id,name:ddd}]
    //{"state":true,"error":"","errno":0,"data":{"2187365717527997108":"14214.mp4"}}
    async function renameFiles(fileArray) {
        console.log("renameFiles fileArray");
        console.log(fileArray);
        let datas = fileArray.map((value, index, array) => {
            let dataKey = \`files_new_name[\${value.id}]\`;
            let dataValue = value.name;
            return \`\${encodeURIComponent(dataKey)}=\${encodeURIComponent(dataValue)}\`;
        }).join("&");

        let renameUrl = "https://webapi.115.com/files/batch_rename";
        const result = await \$.ajax({
            type: 'POST',
            url: renameUrl,
            headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
            dataType: "json",
            xhrFields: { withCredentials: true },
            data: datas
        });

        return result;
    }


    //获取生成sha1需要preid
    //return: {state:,error:,fileItem:}
    function getFileItemPreid(fileItem) {
        //console.log(fileItem);
        const f = fileItem;
        if (f.size == 0 || f.size == "0") {
            return new Promise((resolve, reject) => {
                const errorMsg = "{0} 文件大小为0，已经跳过！".format(f.filename);
                console.error("errorMsg");
                resolve({ state: false, error: "文件大小为0，已经跳过！", fileItem: fileItem });
            });
        }

        const r = new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: "POST",
                url: 'https://proapi.115.com/app/chrome/downurl',
                headers: { 'Content-Type': 'application/x-www-form-urlencoded', 'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 115Browser/23.9.3.6' },
                responseType: 'json',
                data: PostData({ data: m115_encode('{"pickcode":"' + fileItem.pickCode + '"}') }),
                onload: function (r) {
                    if (r.status == 200) {
                        var download_info = r.response;

                        //console.log(download_info);
                        if (download_info.state && download_info.data) {
                            try {
                                var json = m115_decode(download_info.data);

                                var url = JSON.parse(json)[fileItem.id]['url']['url'];
                                var resp = r.responseHeaders
                                var setCookie = DeleteCookie(resp)
                                var fileCookie = null;
                                if (setCookie) {
                                    fileCookie = setCookie;
                                }

                                GM_xmlhttpRequest({
                                    method: "GET",
                                    url: url,
                                    timeout: 12000,
                                    headers: {
                                        "Range": "bytes=0-154112",
                                        "Cookie": fileCookie,
                                        'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; WOW64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/83.0.4103.61 Safari/537.36 115Browser/23.9.3.6'
                                    },
                                    responseType: 'arraybuffer',
                                    onload: function (response) {
                                        if (response.status === 206) {
                                            var pre_buff = response.response;
                                            var data = new Uint8Array(pre_buff);
                                            var sha1 = new jsSHA('SHA-1', 'ARRAYBUFFER');
                                            sha1.update(data.slice(0, 128 * 1024));
                                            var preid = sha1.getHash('HEX', {
                                                outputUpper: true
                                            });
                                            fileItem.preid = preid;
                                            resolve({ state: true, error: "", fileItem: fileItem });
                                        }
                                        else if (response.status === 403) {
                                            console.error("Forbidden, 已经用40个0代替");
                                            fileItem.preid = "0000000000000000000000000000000000000000";
                                            resolve({ state: true, error: "", fileItem: fileItem });
                                        }
                                    },
                                    ontimeout: function (res) {
                                        console.error("下载超时，可能文件无法下载或者网络问题");
                                        console.log(res);
                                        resolve({ state: false, error: "下载超时，可能文件无法下载或者网络问题", fileItem: fileItem });
                                    }
                                });
                            } catch (error) {
                                console.error(error);
                                resolve({ state: false, error: "在提取中发生错误...", fileItem: fileItem });
                            }
                        }
                        else {
                            console.log(download_info);
                            resolve({ state: false, error: download_info.msg, fileItem: fileItem });
                        }

                    }
                    else {
                        console.error(response.response);
                        resolve({ state: false, error: "在提取中发生错误...", fileItem: fileItem });
                    }
                }
            });
        });
        return r;
    }

    //格式化sha1 链接
    //return type: {state:succeed,msg:""}
    // false:msg->出错信息
    //true: msg->sha1链接
    function convertToSha1Link(fileItem, isSimpleFormat) {
        var succeed = false;
        var msg = "格式生成失败!";
        if (fileItem.name && fileItem.size && fileItem.sha1 && fileItem.preid) {
            var sha1Link = "115://" + fileItem.name + "|" + fileItem.size + "|" + fileItem.sha1 + "|" + fileItem.preid;
            if (!isSimpleFormat) {
                if (fileItem.paths.length > 0) {
                    console.log(fileItem.paths);
                    var paths = fileItem.paths.join('|');
                    msg = sha1Link + '|' + paths;
                }
                else {
                    msg = sha1Link;
                }
            }
            else {
                msg = sha1Link;
            }

            succeed = true;
        }

        return { state: succeed, msg: msg };
    }

    // 从sha1link 转换为 FileItem
    //return type:{state:succeed,fileItem:{}}
    //true: fileItem, false:null
    function convertFromSha1Link(sha1Link) {
        var succeed = false;
        var item = {};
        if (sha1Link) {
            if (sha1Link.startsWith("115://")) {
                sha1Link = sha1Link.substring(6);
            }

            var infos = sha1Link.split('|');
            if (infos.length >= 4) {
                item.id = "";
                item.pickCode = "";
                item.name = infos[0];
                item.size = infos[1];
                item.sha1 = infos[2];
                item.preid = infos[3];
                item.parentID = "";
                item.paths = new Array();
                if (infos.length > 4) {
                    if (infos.length == 5 && infos[4].includes('#')) {
                        //兼容 #字符分割
                        item.paths = infos[4].split('#');
                    }
                    else {
                        item.paths = infos.slice(4);
                    }
                }
                item.extension = "";
                item.formatedName = "";
                succeed = true;
            }
        }

        return { state: succeed, fileItem: item };
    }


    function createUploadFile(urlData, postData) {
        return new Promise((resolve, reject) => {
            GM_xmlhttpRequest({
                method: 'POST',
                url: 'http://uplb.115.com/3.0/initupload.php?' + urlData,
                data: postData,
                responseType: 'json',
                headers: {
                    'Content-Type': 'application/x-www-form-urlencoded;charset=UTF-8'
                },
                onload: function (response) {
                    let data = { state: false, error: "", pickCode: "" };
                    if (response.status === 200 && response.response.status === 2) {
                        data.state = true;
                        data.pickCode = response.response.pickcode;
                    }
                    else {
                        console.error(response);
                        let error = "或许sha1链接不匹配?";
                        if (response.status === 405) {
                            error = "频繁请求，已经被115限制 (_！请立即停止，限制会持续一段时间！_)：" + response.statusText;
                        }
                        else if (response.response && response.response.message) error = "原因: " + response.response.message;
                        else if (response.response && response.response.statusmsg) error = "原因: " + response.response.statusmsg;
                        data.error = error;
                    }
                    resolve(data);
                }
            })

        });
    }

    //return:{state:false,error:"",fileItem:};
    function uploadFile(targetFolder, fileItem, uploadInfo) {

        let fCid = \`U_1_\${targetFolder}\`;
        let appVersion = "25.2.0";

        let urlData = UrlData({
            isp: 0,
            appid: 0,
            appversion: appVersion,
            format: 'json',
            sig: GetSig(uploadInfo.user_id, fileItem.sha1, fCid, uploadInfo.userkey)
        });


        let postData = PostData({
            preid: fileItem.preid,
            fileid: fileItem.sha1,
            quickid: fileItem.sha1,
            app_ver: appVersion,
            filename: encodeURIComponent(fileItem.formatedName),
            filesize: fileItem.size,
            exif: '',
            target: fCid,
            userid: uploadInfo.user_id

        });

        const r = createUploadFile(urlData, postData);

        const x = r.then(t => {
            return new Promise((resole, reject) => {
                fileItem.state = t.state;
                fileItem.pickCode = t.pickCode;
                resole({ state: t.state, error: t.error, fileItem: fileItem });
            })
        });

        return x;
    }

    function setListView() {
        GM_xmlhttpRequest({
            method: "POST",
            url: 'https://115.com/?ct=user_setting&ac=set',
            headers: {
                'Content-Type': 'application/x-www-form-urlencoded'
            },
            data: PostData({
                setting: '{"view_file":"list"}'
            }),
            responseType: 'json',
            onload: function (response) {
                if (response.status === 200) {
                }
            }
        });
    }

    //#endregion



    async function updateParentID(cid, cname, thisLevel, maxLevel, items, sleepTime, createFolderCallback) {
        if (thisLevel == maxLevel) return;
        let files = new Array();
        if (thisLevel == 0) {
            files = items;
        }
        else {
            files = items.filter(f => f.paths[thisLevel - 1] == cname);
        }

        let childFiles = files.filter(q => q.paths.length == thisLevel);
        let childFolderNames = files.map(q => q.paths[thisLevel]).filter(q => q).filter((x, i, a) => a.indexOf(x) == i)

        console.log(\`childFiles \${childFiles.length}\`)
        //upload file:
        for (let file of childFiles) {
            file.parentID = cid;
            //console.log(file.parentID);
        }

        //create folder:
        for (let folderName of childFolderNames) {
            let r = await addFolder(cid, folderName);
            console.log(r);

            createFolderCallback && createFolderCallback({ state: r.state, folderName: folderName, error: r.error });
            if (r.state) {
                await updateParentID(r.cid, folderName, thisLevel + 1, maxLevel, files, createFolderCallback);
            }
            else {//ui 目录创建失败  todo:
                console.error(\`目录  \${folderName}  创建失败\`);
            }

            await delay(sleepTime);
        }

    }

    function internelFormat(folder, files, folderParents) {
        var paths = folderParents.slice(0);
        paths.push(folder.dir_name);

        for (var file of folder.files) {

            var link = file + '|' + paths.slice(1).join('|');
            files.push(link);
        }

        for (var childFolder of folder.dirs) {

            internelFormat(childFolder, files, paths)
        }
    }

    //{state:true,error:"",text:""}
    function formatJsonToCommon(text) {

        try {
            var root = JSON.parse(text);
            console.log(root);
            var files = new Array();
            var paths = new Array();
            internelFormat(root, files, paths);
            return { state: true, error: "", text: files.join('\r\n'), rootFolder: root.dir_name };
        }
        catch (error) {
            return { state: false, error: error, text: "" };
        }

    }

    function formatIntToSomeWords(num) {
        const hundredThousands = ["", "好", "人", "一", "生", "平", "安", "和", "快", "乐"];
        const tenThousands = ["", "α", "β", "γ", "δ", "ε", "ζ", "η", "θ", "ι"];
        const thousands = ["", "M", "MM", "MMM", "晴", "雨", "雪", "雾", "月", "霾"];
        const hundreds = ["", "C", "CC", "CCC", "CD", "D", "DC", "DCC", "DCCC", "CM"];
        const tens = ["", "X", "XX", "XXX", "XL", "L", "LX", "LXX", "LXXX", "XC"];
        const ones = ["", "I", "II", "III", "IV", "V", "VI", "VII", "VIII", "IX"];

        return hundredThousands[~~(num / 100000)] + tenThousands[~~(num % 100000 / 10000)] + thousands[~~(num % 10000 / 1000)] + hundreds[~~(num % 1000 / 100)] + tens[~~(num % 100 / 10)] + ones[num % 10];
    }

    //解析inline text sha1 links返回FileArray
    //function parseSha1LinksToFileArray(text, nameSeparator, errorCallback) {
    function parseSha1LinksToFileArray(text, autoRename, errorCallback) {
        let textLines = text.split(/\r?\n/);

        let files = new Array();
        let index = 1;
        for (let line of textLines) {
            let fLine = line.trim();
            if (!fLine) continue;
            let r = convertFromSha1Link(fLine);
            if (r.state) {
                let nameStrings = r.fileItem.name.split(".");
                let extension = nameStrings.pop();
                r.fileItem.extension = extension;
                //根据配置重新设置文件名

                if (autoRename === true) {
                    //直接用编号
                    r.fileItem.formatedName = \`\${formatIntToSomeWords(index)}.\${extension}\`;
                }
                else {
                    r.fileItem.formatedName = r.fileItem.name;
                }
                files.push(r.fileItem);
                index++;
            }
            else {
                errorCallback && errorCallback(\`\${fLine} 格式错误?\`);
            }

        }

        return files;
    }

    //在targetCid下创建目录，成功则返回新目录cid，否则返回原cid
    async function createRootFolder(targetCid, folderName, retryTimes, sleepTime, processCallback) {
        let cid = targetCid;
        for (let i = 0; i < retryTimes; i++) {
            let newFolderName = folderName;
            if (i != 0) {
                newFolderName = \`\${newFolderName}_\${i}\`;
            }
            processCallback && processCallback(\`正在自动创建根目录\${newFolderName}...\`);
            let tr = await addFolder(targetCid, newFolderName);
            if (tr.state) {
                cid = tr.cid;
                processCallback && processCallback(\`自动创建根目录\${newFolderName}成功！\`);
                break;
            }
            else {
                processCallback && processCallback(\`自动创建根目录\${newFolderName}失败！原因：\${tr.error}，将自动尝试新的名字...\`);
                await delay(sleepTime);
            }
        }
        return cid;
    }

    async function processUpload(fileArray, workingNumber, sleepTime, resultCallback) {
        let index = 1;
        let completed = 0;
        let fileLength = fileArray.length;
        let promisArray = new Array();
        let uploadInfo = await getUploadInfo();
        let msg;
        for (let file of fileArray) {
            console.log(file);
            let r = uploadFile(file.parentID, file, uploadInfo).then(t => {
                completed = completed + 1;
                if (t.state) {
                    msg = \`<div align="right"><b>\${completed}</b> | <b>\${fileLength}</b></div><hr>【 <b>\${t.fileItem.name}</b> 】上传成功.\`;
                }
                else {
                    let uploadError = \`【 <b>\${t.fileItem.name}</b> 】上传失败!!! \${t.error}\`;
                    resultCallback && resultCallback({ state: false, msg: uploadError });
                    msg = \`<div align="right"><b>\${completed}</b> | <b>\${fileLength}</b></div><hr>\${uploadError}\`;
                }
                resultCallback && resultCallback({ state: true, msg: msg });
            });

            promisArray.push(r);

            if (index % workingNumber == 0) {
                await delay(sleepTime);
                await Promise.all(promisArray);
                promisArray = new Array();
            }

            if (index % 115 == 0) {
                await Promise.all(promisArray);
                let seconds = 3;
                for (let i = 0; i < seconds; i++) {
                    resultCallback && resultCallback({ state: true, msg: \`防止115服务器限制，暂停发包。<br><br>\${seconds - i}秒后继续....\` });
                    await delay(1000);
                }
                promisArray = new Array();
            }
            index = index + 1;
        }

        await delay(500);
        await Promise.all(promisArray);

        return fileArray;
    }

    async function processRename(targetFolderCid, originFileArray, sleepTime, resultCallback) {
        let onlineFiles = new Array();
        await getAllFiles(targetFolderCid, onlineFiles, targetFolderCid, (fname, pIndex) => {
            if (pIndex > 1) {
                resultCallback && resultCallback({ state: true, msg: \`正在获取 【\${fname}】 下第 \${pIndex} 页的内容...\` });
            }
            else {
                resultCallback && resultCallback({ state: true, msg: \`正在获取 【\${fname}】 下的内容...\` });
            }
        });

        let selectedFiles = onlineFiles.map(f => {
            let mapFile = originFileArray.find(q => q.formatedName === f.name && q.sha1 === f.sha1);
            if (mapFile) return { id: f.id, name: mapFile.name };
        });
        // let selectedFiles = onlineFiles.filter(f => f.name.search(separator) != -1).map(f => {
        //     let fo = { id: f.id, name: f.name.split(separator).join("") };
        //     return fo;
        // });

        let i, j, temporary, chunk = 256;
        for (i = 0, j = selectedFiles.length; i < j; i += chunk) {
            temporary = selectedFiles.slice(i, i + chunk);
            resultCallback && resultCallback({ state: true, msg: \`正在重命名第\${i + 1}到\${i + temporary.length}个文件...\` });
            let renameResult = await renameFiles(temporary);
            if (renameResult.state === true) {
                resultCallback && resultCallback({ state: true, msg: \`重命名第\${i + 1}到\${i + temporary.length}个文件成功!即将进行下一步...\` });
            }
            else {
                resultCallback && resultCallback({ state: false, msg: renameResult.error });
                resultCallback && resultCallback({ state: true, msg: \`重命名第\${i + 1}到\${i + 1 + temporary.length}个文件中有失败！！!即将进行下一步...\` });
            }
            await delay(sleepTime * 2);
        }

    }

    //通过sha1链接转存文件
    //uploadSetting:{targetCid,text,rootFolder:{needToCreate:true,folderName:""},itemNameSeparator:{needToSeparate:true,separator:""}}
    async function UploadFilesBySha1Links(uploadConfig) {

        let formatedText = uploadConfig.text;
        if (!formatedText) return;

        let folderSleepTime = uploadConfig.folderSetting.sleepTime;

        postSha1Messgae(createMessage(MessageType.BEGIN4UPLOAD, "正在解析sha1链接..."));
        //解析json，转为inline text;并且从json中获取root folder name
        if (formatedText.startsWith('{') && formatedText.endsWith('}')) {
            let r = formatJsonToCommon(formatedText);
            if (r.state) {
                uploadConfig.folderSetting.rootFolder.folderName = r.rootFolder;
                formatedText = r.text;
            }
            else {
                console.log("json 解析失败");
                //json 解析失败，提示
            }
        }

        //1.解析inline text sha1 links,并根据配置设置分隔符
        //let nameSeparator = "";
        // if (uploadConfig.itemNameSeparator.needToSeparate && uploadConfig.itemNameSeparator.separator) {
        //     nameSeparator = uploadConfig.itemNameSeparator.separator;
        // }
        // let files = parseSha1LinksToFileArray(formatedText, nameSeparator, errorMsg => {
        //     postSha1Messgae(createMessage(MessageType.ERROR, errorMsg));
        // });

        //2.解析inline text sha1 links,并根据配置设置新的文件名
        let needAutoRename = uploadConfig.autoRename;
        let files = parseSha1LinksToFileArray(formatedText, needAutoRename, errorMsg => {
            postSha1Messgae(createMessage(MessageType.ERROR, errorMsg));
        });

        postSha1Messgae(createMessage(MessageType.PROCESSING, \`获取到链接个数：\${files.length}\`));
        await delay(500);

        //根目录设置
        //根据配置重新设置targetCid
        let newTargetCid = uploadConfig.targetCid;

        if (uploadConfig.folderSetting.rootFolder.needToCreate === true) {
            let rootFolderName = uploadConfig.folderSetting.rootFolder.folderName;
            newTargetCid = await createRootFolder(newTargetCid, rootFolderName, 11, folderSleepTime * 2, msg => {
                postSha1Messgae(createMessage(MessageType.PROCESSING, msg));
            });

            await delay(300);
        }
        console.log(\`newTargetCid: \${newTargetCid}\`);

        //子目录设置
        files.forEach(f => {
            f.parentID = newTargetCid;
        });

        if (uploadConfig.folderSetting.notCreateAnyChildFolder === false)//可以创建目录
        {
            console.log("需要创建子目录");
            //根据配置设置每个文件的parent id
            //最大的层次
            let maxLevel = Math.max.apply(Math, files.map(e => e.length));
            let level = 0;
            //cid更新
            await updateParentID(newTargetCid, '',
                level, maxLevel, files, folderSleepTime, t => {
                    let st = t.state ? "成功." : "失败！！！ " + t.error;
                    let msg = \`创建子目录 <b>\${t.folderName}</b> \${st}\`;
                    postSha1Messgae(createMessage(MessageType.PROCESSING, msg));
                    if (!t.state) postSha1Messgae(createMessage(MessageType.ERROR, msg));
                });


        }

        console.log(\`upload之前的files：\`);
        console.log(files);
        //文件上传
        files = await processUpload(files, uploadConfig.upload.workingNumber, uploadConfig.upload.sleepTime, result => {
            if (result.state === true) {
                postSha1Messgae(createMessage(MessageType.PROCESSING, result.msg));
            }
            else {
                postSha1Messgae(createMessage(MessageType.ERROR, result.msg));
            }
        });

        //根据配置，重命名文件
        if (newTargetCid != uploadConfig.targetCid && uploadConfig.autoRename === true) {
            console.log(\`文件重命名阶段...\`);
            postSha1Messgae(createMessage(MessageType.PROCESSING, "开始获取文件，并自动重命名..."));
            await delay(folderSleepTime);
            await processRename(newTargetCid, files, folderSleepTime, result => {
                if (result.state === true) {
                    postSha1Messgae(createMessage(MessageType.PROCESSING, result.msg));
                }
                else {
                    postSha1Messgae(createMessage(MessageType.ERROR, result.msg));
                }
            });

            postSha1Messgae(createMessage(MessageType.PROCESSING, "转存文件批量重命名完成！"));
            await delay(folderSleepTime * 2);
        }

        var fails = files.filter(q => !q.state);
        var failText = fails.map(function (p) {
            var r = convertToSha1Link(p, false);
            return r.msg;
        }).join("\r\n");

        if (failText) GM_setClipboard(failText);

        let msg = \`完成上传！转存成功 <b>\${(files.length - fails.length)}</b> ，失败 <b>\${fails.length}</b>\
                <br><br>如果有失败，已将失败sha1链接复制到剪贴板！如果转存失败，请检查sha1链接格式或者在 chrome 上尝试转存。\`;
        postSha1Messgae(createMessage(MessageType.END4UPLOAD, msg, newTargetCid));

    }



    function GetFileItemByliNode(liNode) {

        var pItem = {
            id: "",
            parentID: "",
            isFolder: false,
            name: "",
            size: 0,
            pickCode: "",
            sha1: "",
            paths: [],
            preid: "",
            selected: false

        };

        var type = liNode.getAttribute("file_type");
        pItem.name = liNode.getAttribute('title');
        pItem.parentID = liNode.getAttribute('p_id');

        var isSelected = liNode.getAttribute('class');
        if (isSelected == "selected") pItem.selected = true;

        if (type == "0") {
            pItem.id = liNode.getAttribute('cate_id');
            pItem.isFolder = true;
        }
        else {
            pItem.size = liNode.getAttribute('file_size');
            pItem.sha1 = liNode.getAttribute('sha1');
            pItem.pickCode = liNode.getAttribute('pick_code');
            pItem.id = liNode.getAttribute('file_id');
        }

        return pItem;
    }

    async function InnerCreateSha1Links(files, txtName) {

        let downloadNumber = GM_config.get(currentConfig.downloadNumber);
        let downloadSleepTime = GM_config.get(currentConfig.downloadSleepTime);

        let msg = "";
        let index = 1;
        let completedIndex = 1;
        let promisArray = new Array();

        let gt1200files = files.length >= 1200;
        console.log(">=1200: {0}".format(gt1200files));

        for (let file of files) {

            console.log("0_0");
            let taskCancelFlag = getTaskCancelFlag();
            console.log(taskCancelFlag);
            if (taskCancelFlag === true) {
                console.log("InnerCreateSha1Links has Canceled");
                break;
            }
            console.log("*_*");
            const f = file;
            const r = getFileItemPreid(f).then((t) => {
                if (t.state) {
                    msg = '<div align="right"><b>{0}</b> | <b>{1}</b></div><hr>获取【 <b>{2}</b> 】的sha1链接成功'.format(completedIndex, files.length, t.fileItem.name);
                    postSha1Messgae(createMessage(MessageType.PROCESSING, msg))
                }
                else {
                    msg = '<div align="right"><b>{0}</b> | <b>{1}</b></div><hr>获取【 <b>{2}</b> 】的sha1链接失败！{3}'.format(completedIndex, files.length, t.fileItem.name, t.error);
                    postSha1Messgae(createMessage(MessageType.PROCESSING, msg))
                    let filePath = t.fileItem.paths.join(" > ");
                    console.log(filePath);
                    if (filePath) msg = "{0},原因：{1},路径：{2}".format(t.fileItem.name, t.error, filePath);
                    else msg = "{0},原因：{1}".format(t.fileItem.name, t.error);

                    postSha1Messgae(createMessage(MessageType.ERROR, msg));
                }
                completedIndex = completedIndex + 1;
            });

            promisArray.push(r);

            //自己改代码吧，怎么弄提取逻辑。。太慢，耗时长；太快，115容易没反应

            if (index % downloadNumber === 0) {
                await delay(downloadSleepTime);
                await Promise.all(promisArray);
                promisArray = new Array();
            }

            if (index % 80 === 0) {
                await Promise.all(promisArray);
                let seconds = 3;
                for (let i = 0; i < seconds; i++) {
                    postSha1Messgae(createMessage(MessageType.PROCESSING, \`防止115服务器限制，暂停发包。<br><br>\${seconds - i}秒后继续...\`));
                    await delay(1000);
                }
                promisArray = new Array();
            }

            index = index + 1;
        }

        await Promise.all(promisArray);

        var succeedArray = files.filter(q => q.preid);
        if (succeedArray.length == 1) {
            let result = convertToSha1Link(succeedArray[0], false);
            postSha1Messgae(createMessage(MessageType.CLOSE, ""));

            setTimeout(s => {
                prompt("复制分享链接到剪贴板", s);
            }, 100, result.msg);

        }
        else {
            let text = succeedArray.map(function (p) {
                let rt = convertToSha1Link(p, false);
                return rt.msg;
            }).join("\r\n");

            if (succeedArray.length > 1) {
                let file_name = txtName + "_sha1.txt";
                if (getTaskCancelFlag()) {
                    file_name = txtName + "_部分提取完成_sha1.txt";
                }
                download(file_name, text);
            }

            msg = '完成【 <b>{0}</b> 】提取！成功 <b>{1}</b> ，失败 <b>{2}</b>'.format(txtName, succeedArray.length, files.length - succeedArray.length);
            console.log(msg);
            postSha1Messgae(createMessage(MessageType.END, msg));
        }
    }

    async function CreateSha1Links(item) {
        //ui: 获取文件中...
        var msg = "正在获取文件...";
        postSha1Messgae(createMessage(MessageType.BEGIN, msg));
        var files = new Array();

        if (!item.isFolder) {
            files.push(item);
        }
        else {
            msg = "正在获取 {0} 下的内容...".format(item.name);
            postSha1Messgae(createMessage(MessageType.PROCESSING, msg));

            await getAllFiles(item.id, files, item.id, (fname, pIndex) => {
                if (pIndex > 1) {
                    msg = "正在获取 【{0}】 下第 {1} 页的内容...".format(fname, pIndex);
                }
                else {
                    msg = "正在获取 【{0}】 下的内容...".format(fname);
                }
                postSha1Messgae(createMessage(MessageType.PROCESSING, msg));
            });

            if (!files || files.length == 0) {
                postSha1Messgae(createMessage(MessageType.END, "【<b>{0}</b> 】空目录???".format(item.name)));
                return;
            }
        }

        postSha1Messgae(createMessage(MessageType.PROCESSING, "获取到 【<b>{0}</b>】 的内容 {1} 项".format(item.name, files.length)));
        await delay(100);
        if (getTaskCancelFlag()) {
            postSha1Messgae(createMessage(MessageType.END, "已经取消任务！"));
        }
        else InnerCreateSha1Links(files, item.name);
    }

    const autoCreateRootFolderTips = {
        msg: \`sha1转存时，强制在保存处新建根目录\`,
        details: \`选择时:&#013;&#010;1.新建根目录名来自sha1转存文件名或者json中的根元素。\
        &#013;&#010;2.如果没有,则按编号(1-10)生成。\
        &#013;&#010;如果未选择或者最终无法提取到目录名，则将保存处作为转存根目录\`
    };

    const autoCreateRootFolderString =
        \`<div class="linktask-quota" style="margin-top: 4px;display: block">\
        <a>\${autoCreateRootFolderTips.msg}</a>\
        <div class="help" title=" \${autoCreateRootFolderTips.details}"><a></a></div>\
        <span>&nbsp;&nbsp;</span><div class="option-switch" style="top:10px;left:10px">\
        <input type="checkbox" checked="true" id="neAutoCreateRootfolder" onclick="function f() {return false}">\
        <label for><i>开启</i><s>关闭</s><b>切换</b></label></div></div>\`;

    const notCreateAnyChildFolderTips = {
        msg: \`sha1转存时，不创建任何子目录\`,
        details: \`选中时，不会自动创建任何子目录。此项与根目录不会影响！\`
    };

    const notCreateAnyChildFolderString =
        \`<div id="neNotCreateAnyChildFolderParent" class="linktask-quota" style="margin-top: 4px;display: block">\
        <a>\${notCreateAnyChildFolderTips.msg}</a>\
        <div class="help" title=" \${notCreateAnyChildFolderTips.details}"><a></a></div>\
        <span>&nbsp;&nbsp;</span><div class="option-switch" style="top:10px;left:10px">\
        <input type="checkbox" checked="true" id="neNotCreateAnyChildFolder" onclick="function f() {return false}">\
        <label for><i>开启</i><s>关闭</s><b>切换</b></label></div></div>\`;

    const selectFileTips = {
        msg: \`或者导入sha1链接文件（txt/json）\`,
        details: \`如果不能正确显示选择文件按钮，可能是与其他脚本或者插件冲突！！\`
    };
    const selectFileString = \`<div class="linktask-quota" style="margin-top: 10px;">\
        <a>\${selectFileTips.msg}</a>\
        <div class="help" title="\${selectFileTips.details}"><a></a></div>\
        <span>&nbsp;&nbsp;</span><input type="file" id="neSelectFile" accept=".txt,.json" style="display:block;color:#2777F8;visibility: visible;"></input></div>\`;

    const otherSettingString = \`<div class="linktask-quota" style="margin-top: 4px;">\
        分隔符可<a id="neSetting1" href="javascript:;" style="color:#2777F8">点此设置</a>。\
        效率考虑：只在自动生成根目录情况下，可按配置自动去除分隔符
        </div>\`;

    const autoRenameTips = {
        msg: \`sha1转存时，应用防文件名违规方案\`,
        details: \`防止因文件名违规而无法上传。会自动改名上传，并且传完后改回原名。\
        &#013;&#010;应用此方案，为了效率考虑，会默认强制在保存处新建根目录。\
        &#013;&#010;应用此方案，如果转存中取消或者出现问题，需要重新转存操作，否则文件名无法还原。\`,
        otherMsg: \`!注意：选中此项会强制在保存处新建根目录\`,
        otherMsg1: \`转存后还有重命名步骤，所以在转存完全结束前切勿刷新和切换页面！\`
    };

    const autoRenameString =
        \`<div style="display:grid"><div class="linktask-quota" style="margin-top: 4px;display: block">\
    <a>\${autoRenameTips.msg}</a>\
    <div class="help" title=" \${autoRenameTips.details}"><a></a></div>\
    <span>&nbsp;&nbsp;</span><div class="option-switch" style="top:10px;left:10px">\
    <input type="checkbox" checked="true" id="neAutoRename" onclick="function f() {return false}">\
    <label for><i>开启</i><s>关闭</s><b>切换</b></label></div>\
    <a style="margin-left:16px">\${autoRenameTips.otherMsg}</a></div>\
    <br><a style="color:red;margin-top:-16px">\${autoRenameTips.otherMsg1}</a></div>\`;


    const headerString = \`<div id="ne115tipsforheader">\${TIPS.VersionTips}(\${TIPS.LastUpdateDate}),\
    <a href="javascript:;" style="color:#2777F8" id="neSetting2">设置点此！</a></div>\`;

    const beginUploadBySha1String = \`<div class="con" id="downsha1"><a class="button" href="javascript:;">开始sha1转存</a></div>\`;

    function AddDownloadSha1Btn(jNode) {
        var file = "";

        var dialog = document.getElementsByClassName("dialog-box dialog-mini offline-box window-current")[0];
        dialog.style.width = "720px";

        if (document.getElementById('ne115tipsforheader') == null) {
            \$(headerString).appendTo(".dialog-header[rel\$='title_box']");

            \$('#neSetting2')[0].addEventListener('click', e => {
                (document.getElementsByClassName('close')[2].click());
                GM_config.open();
            });
        }

        if (document.getElementById('neSelectFile') == null) {
            var div = document.getElementsByClassName('dialog-input input-offline');

            console.log(div);
            var \$selectFile = \$(selectFileString);
            var \$autoCreateRootFolder = \$(autoCreateRootFolderString);
            var \$notCreateAnyChildFolder = \$(notCreateAnyChildFolderString);
            var \$autoRename = \$(autoRenameString);
            //var \$otherSetting = \$(otherSettingString);
            div[0].style.display = 'grid';
            div[0].appendChild(\$selectFile[0]);
            div[0].appendChild(\$autoCreateRootFolder[0]);
            div[0].appendChild(\$notCreateAnyChildFolder[0]);
            //div[0].appendChild(\$otherSetting[0]);
            div[0].appendChild(\$autoRename[0]);


            //界面选项设置
            //根目录自动创建默认值：
            document.getElementById('neAutoCreateRootfolder').checked = GM_config.get(currentConfig.createRootFolderDefaultValue);
            //是否显示不创建任何目录：
            document.getElementById('neNotCreateAnyChildFolderParent').style.display = GM_config.get(currentConfig.createChildFolderVisible) === true ? 'block' : 'none';
            document.getElementById('neNotCreateAnyChildFolder').checked = false;
            document.getElementById('neAutoRename').checked = GM_config.get(currentConfig.autoRename);


            \$selectFile[0].addEventListener('change', e => {
                console.log(e.target.files);
                if (e.target.files) {
                    file = e.target.files[0];
                }
                else {
                    file = "";
                }
            });

            // \$('#neSetting1')[0].addEventListener('click', e => {
            //     (document.getElementsByClassName('close')[2].click());
            //     GM_config.open();
            // });


        }
        else {

            //界面选项设置
            document.getElementById('neSelectFile').value = "";
            file = "";
            //根目录自动创建默认值：
            document.getElementById('neAutoCreateRootfolder').checked = GM_config.get(currentConfig.createRootFolderDefaultValue);
            //是否显示不创建任何目录：
            document.getElementById('neNotCreateAnyChildFolderParent').style.display = GM_config.get(currentConfig.createChildFolderVisible) === true ? 'block' : 'none';
            document.getElementById('neNotCreateAnyChildFolder').checked = false;
            document.getElementById('neAutoRename').checked = GM_config.get(currentConfig.autoRename);

        }


        if (document.getElementById('downsha1') == null) {

            resetTaskCancelFlag();

            var \$btn = \$(beginUploadBySha1String);
            jNode[0].appendChild(\$btn[0]);
            \$btn[0].addEventListener('click', e => {

                console.log("click 开始转存");
                let cid = \$("em[rel=offlint_path_text]").attr("cid");
                if (!cid || cid == "") {
                    //目录不存在，比如把 “云下载” 目录删除
                    cid = '0';
                }
                console.log(\`从任务弹出窗获得的cid: \${cid}\`);

                let notCreateAnyChildFolder = document.getElementById('neNotCreateAnyChildFolder').checked;
                let autoCreateRootfolder = document.getElementById('neAutoCreateRootfolder').checked;
                let autoRename = document.getElementById('neAutoRename').checked;

                let links = document.getElementById('js_offline_new_add').value;
                let config = {
                    targetCid: cid,
                    text: "",
                    folderSetting: {
                        notCreateAnyChildFolder: notCreateAnyChildFolder,
                        sleepTime: GM_config.get(currentConfig.createFolderSleepTime),
                        rootFolder: {
                            needToCreate: autoCreateRootfolder,
                            folderName: ""
                        },
                    },
                    autoRename: autoRename,
                    // itemNameSeparator: {
                    //     needToSeparate: GM_config.get(currentConfig.autoUseSeparator),
                    //     needToRemoveSeparator: GM_config.get(currentConfig.autoUseSeparatorToRename),
                    //     separator: GM_config.get(currentConfig.separator)
                    // },
                    upload: {
                        workingNumber: GM_config.get(currentConfig.uploadNumber),
                        sleepTime: GM_config.get(currentConfig.uploadSleepTime),
                    }
                };

                if (config.autoRename === true) {
                    config.folderSetting.rootFolder.needToCreate = true;
                }

                console.log("转存参数：");
                console.log(config);
                console.log("转存参数结束");

                if (file) {
                    console.log(file);
                    let reader = new FileReader();
                    reader.addEventListener('load', function (t) {
                        config.folderSetting.rootFolder.folderName = file.name.split(".").slice(0, -1).join();
                        config.text = t.target.result;
                        file = "";
                        UploadFilesBySha1Links(config);
                    });
                    reader.readAsText(file);
                    (document.getElementsByClassName('close')[2].click());

                }
                else if (links) {

                    // var text = { FileName: "", Content: links };
                    config.folderSetting.rootFolder.folderName = "";
                    config.text = links;
                    UploadFilesBySha1Links(config);
                    (document.getElementsByClassName('close')[2].click());

                }



            });
        }

    }


    // function formatCommonToJson(children, root) {
    //     let childFiles = children.filter(f => f.Paths.length == 0);
    //     root.files = Array();
    //     root.dirs = Array();
    //     childFiles.forEach(c => root.files.push({ Name: c.Name }));

    //     let selectedChildren = children.filter(f => f.Paths.length > 0);

    //     let childFolders = selectedChildren.map(q => q.Paths[0]).filter((v, i, a) => a.indexOf(v) === i);
    //     childFolders.forEach(f => root.dirs.push({ dir_name: f }));

    //     root.dirs.forEach(d => {
    //         let newChildren = selectedChildren.filter(f => f.Paths[0] == d.dir_name)
    //             .map(c => {
    //                 let a = { Name: c.Name, Paths: c.Paths.slice(1) };
    //                 return a;
    //             })
    //         ConverterAdvanced(newChildren, d);
    //     });
    // }

    function AddShareSHA1Btn(jNode) {
        var parentNode = jNode[0].parentNode;
        var pItem = GetFileItemByliNode(parentNode);

        //目录，去除分隔符
        // if (pItem.isFolder && GM_config.get(currentConfig.advancedRename)) {
        //     var \$btn1 = \$('<a><i></i><span>去除分隔符</span></a>');
        //     \$btn1.prependTo(jNode[0]);
        //     \$btn1[0].addEventListener('click', async e => {
        //         let separator = GM_config.get(currentConfig.separator);
        //         let sleepTime = GM_config.get(currentConfig.createFolderSleepTime);
        //         postSha1Messgae(createMessage(MessageType.BEGIN4UPLOAD, ""));
        //         postSha1Messgae(createMessage(MessageType.PROCESSING, \`即将开始重命名 【\${pItem.name}】 下所有文件：<br><br>去除分隔符：\${separator}\`));
        //         await delay(1000);
        //         await processRename(pItem.id, separator, sleepTime, result => {
        //             if (result.state === true) {
        //                 postSha1Messgae(createMessage(MessageType.PROCESSING, result.msg));
        //             }
        //             else {
        //                 postSha1Messgae(createMessage(MessageType.ERROR, result.msg));
        //             }
        //         });

        //         postSha1Messgae(createMessage(MessageType.END4UPLOAD, \`对目录 【\${pItem.name}】下的文件重命名完成！\
        //             <br><br>获取最新版，或者遇到问题去此反馈，感谢 !点击->\
        //             <a href="\${TIPS.UpdateUrl}" target="_blank">\${TIPS.VersionTips}</a>\`, pItem.id));
        //     })
        // }


        var \$btn = \$('<a ><i></i><div style="background:white"><span>获取SHA1链接</span></div></a>');
        jNode[0].style.top = "1px";
        jNode[0].style.left = "140px";
        \$btn.prependTo(jNode[0]);
        \$btn[0].addEventListener('click', e => {
            console.log("生成sha1");
            console.log(pItem);
            //生成sha1
            resetTaskCancelFlag();
            CreateSha1Links(pItem);
        })




        //生成json格式
        // if(pItem.isFolder)
        // {
        //     var \$btn1 = \$('<a><i></i><span>获取SHA1(json)</span></a>');
        //     \$btn1.prependTo(jNode[0]);
        //     \$btn1[0].addEventListener('click', e => {
        //         console.log(pItem);
        //     //生成sha1
        //         resetTaskCancelFlag();
        //         CreateSha1Links(pItem);
        //     })
        // }


    }

    async function GetSearchList(isOnlySelected) {
        resetTaskCancelFlag();

        var msg = "正在获取文件...";
        postSha1Messgae(createMessage(MessageType.BEGIN, msg));

        var doc = document.getElementsByClassName('search-iframe')[0];
        if (!doc) doc = document;
        var lis = doc.querySelectorAll('.list-cell.lstc-search > .list-contents > ul > li');
        if (!lis) return;
        console.log(lis);
        var files = new Array();
        for (var li of lis) {
            var fileItem = GetFileItemByliNode(li);
            files.push(fileItem);
        }
        console.log("0: search items{0}".format(files.length));
        if (isOnlySelected) {
            console.log("search items onlySelected")
            files = files.filter(q => q.selected);
        }

        console.log("1: search items{0}".format(files.length));

        console.log(document.URL);
        var url = new URL(document.URL);
        var key = url.searchParams.get("search_value");
        key = key ? key : "搜索结果";
        files = files.filter(q => !q.isFolder);
        msg = "获取到符合搜索的文件数：{0}".format(files.length);
        postSha1Messgae(createMessage(MessageType.PROCESSING, msg));
        await delay(200);
        await InnerCreateSha1Links(files, key)

    }




    function AddShareButtonForSearchItem(node) {

        //每一项
        var lis = node[0].getElementsByTagName('li');
        for (var li of lis) {
            var pItem = GetFileItemByliNode(li);
            var \$btn = \$('<div class="file-opr" style="left:200px"></div>');
            \$btn.appendTo(li);
        }

        //针对当前页面
        \$(".left-tvf > a.btn-upload").css("top", "10px");
        if (document.getElementById('btn_selected_sha1') == null) {
            var \$btn_selected = \$(\`<a href="javascript:;" id="btn_selected_sha1" class="button btn-line" style="top:10px">
            <i class="icon-operate ifo-share"></i>
            <span>提取本页选中文件（不包括文件夹）</span>
            <em style="display:none;" class="num-dot"></em>
            </a>\`);
            \$(".left-tvf").eq(0).append(\$btn_selected);

            \$btn_selected[0].addEventListener('click', e => {
                GetSearchList(true);
            });
        }

        if (document.getElementById('btn_all_sha1') == null) {
            var \$btn_all = \$(\`<a href="javascript:;" id="btn_all_sha1" class="button btn-line" style="top:10px">
            <i class="icon-operate ifo-share"></i>
            <span>提取本页所有文件（不包括文件夹）</span>
            <em style="display:none;" class="num-dot"></em>
            </a>\`);
            \$(".left-tvf").eq(0).append(\$btn_all);

            \$btn_all[0].addEventListener('click', e => {
                GetSearchList(false);
            });
        }


    }



    console.log("转存脚本loaded.");
})();
}()
</script></body>`);
        console.log("[油猴脚本] 115转存助手ui优化版.user.js 注入成功!");
    }
    $done({body});
} catch (err) {
    console.log("[油猴脚本] 115转存助手ui优化版.user.js 执行失败!\n" + err);
    $done({});
}
