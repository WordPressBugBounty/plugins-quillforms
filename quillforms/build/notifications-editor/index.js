(()=>{var e={2694:(e,t,i)=>{"use strict";var n=i(6925);function o(){}function a(){}a.resetWarningCache=o,e.exports=function(){function e(e,t,i,o,a,l){if(l!==n){var r=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw r.name="Invariant Violation",r}}function t(){return e}e.isRequired=e;var i={array:e,bigint:e,bool:e,func:e,number:e,object:e,string:e,symbol:e,any:e,arrayOf:t,element:e,elementType:e,instanceOf:t,node:e,objectOf:t,oneOf:t,oneOfType:t,shape:t,exact:t,checkPropTypes:a,resetWarningCache:o};return i.PropTypes=i,i}},5556:(e,t,i)=>{e.exports=i(2694)()},6925:e=>{"use strict";e.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},3350:(e,t,i)=>{"use strict";var n,o,a=function(){function e(e,t){for(var i=0;i<t.length;i++){var n=t[i];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}return function(t,i,n){return i&&e(t.prototype,i),n&&e(t,n),t}}();t.ZX=function(e){document.body.classList.add("react-confirm-alert-body-element"),function(){if(!document.getElementById("react-confirm-alert-firm-svg")){var e="http://www.w3.org/2000/svg",t=document.createElementNS(e,"feGaussianBlur");t.setAttribute("stdDeviation","0.3");var i=document.createElementNS(e,"filter");i.setAttribute("id","gaussian-blur"),i.appendChild(t);var n=document.createElementNS(e,"svg");n.setAttribute("id","react-confirm-alert-firm-svg"),n.setAttribute("class","react-confirm-alert-svg"),n.appendChild(i),document.body.appendChild(n)}}(),function(e){var t=document.getElementById("react-confirm-alert");t||(document.body.children[0].classList.add("react-confirm-alert-blur"),(t=document.createElement("div")).id="react-confirm-alert",document.body.appendChild(t)),(0,c.render)(r.default.createElement(f,e),t)}(e)};var l=i(1609),r=u(l),s=u(i(5556)),c=i(5795);function u(e){return e&&e.__esModule?e:{default:e}}function d(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}var f=(o=n=function(e){function t(){var e,i,n;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,t);for(var o=arguments.length,a=Array(o),l=0;l<o;l++)a[l]=arguments[l];return i=n=d(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(a))),n.handleClickButton=function(e){e.onClick&&e.onClick(),n.close()},n.handleClickOverlay=function(e){var t=n.props,i=t.closeOnClickOutside,o=t.onClickOutside,a=e.target===n.overlay;i&&a&&(o(),n.close())},n.close=function(){var e,t=n.props.afterClose;document.body.classList.remove("react-confirm-alert-body-element"),(e=document.getElementById("react-confirm-alert"))&&((0,c.unmountComponentAtNode)(e),e.parentNode.removeChild(e)),function(e){var t=document.getElementById("react-confirm-alert-firm-svg");t&&t.parentNode.removeChild(t),document.body.children[0].classList.remove("react-confirm-alert-blur"),e()}(t)},n.keyboardClose=function(e){var t=n.props,i=t.closeOnEscape,o=t.onKeypressEscape,a=t.keyCodeForClose,l=e.keyCode,r=27===l;a.includes(l)&&n.close(),i&&r&&(o(e),n.close())},n.componentDidMount=function(){document.addEventListener("keydown",n.keyboardClose,!1)},n.componentWillUnmount=function(){document.removeEventListener("keydown",n.keyboardClose,!1),n.props.willUnmount()},n.renderCustomUI=function(){var e=n.props,t=e.title,i=e.message,o=e.buttons;return(0,e.customUI)({title:t,message:i,buttons:o,onClose:n.close})},d(n,i)}return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}(t,e),a(t,[{key:"render",value:function(){var e=this,t=this.props,i=t.title,n=t.message,o=t.buttons,a=t.childrenElement,l=t.customUI,s=t.overlayClassName;return r.default.createElement("div",{className:"react-confirm-alert-overlay "+s,ref:function(t){return e.overlay=t},onClick:this.handleClickOverlay},r.default.createElement("div",{className:"react-confirm-alert"},l?this.renderCustomUI():r.default.createElement("div",{className:"react-confirm-alert-body"},i&&r.default.createElement("h1",null,i),n,a(),r.default.createElement("div",{className:"react-confirm-alert-button-group"},o.map((function(t,i){return r.default.createElement("button",{key:i,onClick:function(){return e.handleClickButton(t)},className:t.className},t.label)}))))))}}]),t}(l.Component),n.propTypes={title:s.default.string,message:s.default.string,buttons:s.default.array.isRequired,childrenElement:s.default.func,customUI:s.default.func,closeOnClickOutside:s.default.bool,closeOnEscape:s.default.bool,keyCodeForClose:s.default.arrayOf(s.default.number),willUnmount:s.default.func,afterClose:s.default.func,onClickOutside:s.default.func,onKeypressEscape:s.default.func,overlayClassName:s.default.string},n.defaultProps={buttons:[{label:"Cancel",onClick:function(){return null},className:null},{label:"Confirm",onClick:function(){return null},className:null}],childrenElement:function(){return null},closeOnClickOutside:!0,closeOnEscape:!0,keyCodeForClose:[],willUnmount:function(){return null},afterClose:function(){return null},onClickOutside:function(){return null},onKeypressEscape:function(){return null}},o)},8663:function(e,t,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,o)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__setModuleDefault||(Object.create?function(e,t){Object.defineProperty(e,"default",{enumerable:!0,value:t})}:function(e,t){e.default=t}),a=this&&this.__importStar||function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var i in e)"default"!==i&&Object.prototype.hasOwnProperty.call(e,i)&&n(t,e,i);return o(t,e),t},l=this&&this.__awaiter||function(e,t,i,n){return new(i||(i=Promise))((function(o,a){function l(e){try{s(n.next(e))}catch(e){a(e)}}function r(e){try{s(n.throw(e))}catch(e){a(e)}}function s(e){var t;e.done?o(e.value):(t=e.value,t instanceof i?t:new i((function(e){e(t)}))).then(l,r)}s((n=n.apply(e,t||[])).next())}))},r=this&&this.__asyncValues||function(e){if(!Symbol.asyncIterator)throw new TypeError("Symbol.asyncIterator is not defined.");var t,i=e[Symbol.asyncIterator];return i?i.call(e):(e="function"==typeof __values?__values(e):e[Symbol.iterator](),t={},n("next"),n("throw"),n("return"),t[Symbol.asyncIterator]=function(){return this},t);function n(i){t[i]=e[i]&&function(t){return new Promise((function(n,o){!function(e,t,i,n){Promise.resolve(n).then((function(t){e({value:t,done:i})}),t)}(n,o,(t=e[i](t)).done,t.value)}))}}};Object.defineProperty(t,"__esModule",{value:!0}),t.ReactMultiEmail=void 0;const s=a(i(1609)),c=i(4183);t.ReactMultiEmail=function(e){const{id:t,style:i,className:n="",noClass:o,placeholder:a,autoFocus:u,allowDisplayName:d=!1,stripDisplayName:f=!1,allowDuplicate:m=!1,delimiter:p=`[${d?"":" "},;]`,initialInputValue:v="",inputClassName:y,autoComplete:g,getLabel:h,enable:E,onDisabled:b,validateEmail:C,onChange:w,onChangeInput:_,onFocus:N,onBlur:x,onKeyDown:F,onKeyUp:k,spinner:T,disableOnBlurValidation:O=!1}=e,S=s.useRef(null),[P,q]=s.useState(!1),[I,D]=s.useState([]),[B,A]=s.useState(""),[j,R]=s.useState(!1),M=s.useCallback(((e,t)=>l(this,void 0,void 0,(function*(){var i,n;const o=[];let a="";const l=new RegExp(p,"g"),r=C||c.isEmail,s=e=>{if(!m)for(let t=0,i=I.length;t<i;t++)if(I[t].toLowerCase()===e.toLowerCase())return!1;return o.push(e),!0};if(""!==e)if(l.test(e)){const t=[...new Set(e.split(l).filter((e=>e)))];for(;t.length;){const o=r(""+t[0].trim());"boolean"==typeof o?o?s(""+(null===(i=t.shift())||void 0===i?void 0:i.trim())):d?r(""+t[0].trim(),{allowDisplayName:d})?s(""+(f?null===(n=t.shift())||void 0===n?void 0:n.split("<")[1].split(">")[0]:t.shift())):1===t.length?a=""+t.shift():t.shift():a=""+t.shift():(R(!0),!0===(yield null==C?void 0:C(e))?(s(""+t.shift()),R(!1)):1===t.length?a=""+t.shift():t.shift())}}else{if(E&&!E({emailCnt:I.length}))return void(null==b||b());if(t){const t=r(e);"boolean"==typeof t?t?s(e):d&&r(e,{allowDisplayName:d})?s(f?e.split("<")[1].split(">")[0]:e):a=e:(R(!0),!0===(yield null==C?void 0:C(e))?s(e):a=e,R(!1))}else a=e}D([...I,...o]),A(a),o.length&&(null==w||w([...I,...o])),a!=a&&(null==_||_(a))}))),[d,m,p,I,E,w,_,b,f,C]),L=s.useCallback((e=>l(this,void 0,void 0,(function*(){yield M(e),null==_||_(e)}))),[M,_]),V=s.useCallback(((e,t)=>{if(t)return;const i=[...I.slice(0,e),...I.slice(e+1)];D(i),null==w||w(i)}),[I,w]),U=s.useCallback((e=>{switch(null==F||F(e),e.key){case"Enter":e.preventDefault();break;case"Backspace":e.currentTarget.value||V(I.length-1,!1)}}),[I.length,F,V]),$=s.useCallback((e=>l(this,void 0,void 0,(function*(){null==k||k(e),"Enter"===e.key&&(yield M(e.currentTarget.value,!0))}))),[M,k]),z=s.useCallback((e=>l(this,void 0,void 0,(function*(){return yield L(e.currentTarget.value)}))),[L]),W=s.useCallback((e=>l(this,void 0,void 0,(function*(){q(!1),O||(yield M(e.currentTarget.value,!0)),null==x||x()}))),[O,M,x]),K=s.useCallback((()=>{q(!0),null==N||N()}),[N]);return s.useEffect((()=>{A(v)}),[v]),s.useEffect((()=>{var t;if(C)(()=>{l(this,void 0,void 0,(function*(){var t,i,n,o,a;R(!0);const l=[];try{for(var s,c=!0,u=r(null!==(a=e.emails)&&void 0!==a?a:[]);!(t=(s=yield u.next()).done);){o=s.value,c=!1;try{const e=o;(yield C(e))&&l.push(e)}finally{c=!0}}}catch(e){i={error:e}}finally{try{c||t||!(n=u.return)||(yield n.call(u))}finally{if(i)throw i.error}}D(l),R(!1)}))})();else{const i=null===(t=e.emails)||void 0===t?void 0:t.filter((e=>(0,c.isEmail)(e)));D(null!=i?i:[])}}),[e.emails,C]),s.createElement("div",{className:`${n} ${o?"":"react-multi-email"} ${P?"focused":""} ${""===B&&0===I.length?"empty":"fill"}`,style:i,onClick:()=>{var e;return null===(e=S.current)||void 0===e?void 0:e.focus()}},j&&(null==T?void 0:T()),a?s.createElement("span",{"data-placeholder":!0},a):null,s.createElement("div",{className:"data-labels",style:{opacity:j?.45:1,display:"contents",flexWrap:"inherit"}},I.map(((e,t)=>h(e,t,V)))),s.createElement("input",{id:t,style:{opacity:j?.45:1},ref:S,type:"text",value:B,onFocus:K,onBlur:W,onChange:z,onKeyDown:U,onKeyUp:$,autoFocus:u,className:y,autoComplete:g}))}},6251:function(e,t,i){"use strict";var n=this&&this.__createBinding||(Object.create?function(e,t,i,n){void 0===n&&(n=i);var o=Object.getOwnPropertyDescriptor(t,i);o&&!("get"in o?!t.__esModule:o.writable||o.configurable)||(o={enumerable:!0,get:function(){return t[i]}}),Object.defineProperty(e,n,o)}:function(e,t,i,n){void 0===n&&(n=i),e[n]=t[i]}),o=this&&this.__exportStar||function(e,t){for(var i in e)"default"===i||Object.prototype.hasOwnProperty.call(t,i)||n(t,e,i)};Object.defineProperty(t,"__esModule",{value:!0}),o(i(4183),t),o(i(8663),t)},4183:(e,t)=>{"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.isEmail=void 0;const i={requireTld:!0,allowUnderscores:!1,allowTrailingDot:!1},n={allowDisplayName:!1,requireDisplayName:!1,allowUtf8LocalPart:!0,requireTld:!0},o=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\,\.\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF\s]*<(.+)>$/i,a=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~]+$/i,l=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f]))*$/i,r=/^[a-z\d!#\$%&'\*\+\-\/=\?\^_`{\|}~\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]+$/i,s=/^([\s\x01-\x08\x0b\x0c\x0e-\x1f\x7f\x21\x23-\x5b\x5d-\x7e\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]|(\\[\x01-\x09\x0b\x0c\x0d-\x7f\u00A0-\uD7FF\uF900-\uFDCF\uFDF0-\uFFEF]))*$/i;function c(e,t){let i,n=0;const o=encodeURI(e).split(/%..|./).length-1;return t&&(n=Number(t.min)||0,i=Number(t.max)),o>=n&&(void 0===i||o<=i)}t.isEmail=function(e,t){if((t=Object.assign(Object.assign({},n),t)).requireDisplayName||t.allowDisplayName){const i=e.match(o);if(i)e=i[1];else if(t.requireDisplayName)return!1}const u=e.split("@"),d=""+u.pop(),f=d.toLowerCase();let m=u.join("@");if("gmail.com"!==f&&"googlemail.com"!==f||(m=m.replace(/\./g,"").toLowerCase()),!c(m,{max:64})||!c(d,{max:254}))return!1;if(!function(e,t){(t=Object.assign(Object.assign({},i),t)).allowTrailingDot&&"."===e[e.length-1]&&(e=e.substring(0,e.length-1));const n=e.split(".");if(t.requireTld){const e=""+n.pop();if(!n.length||!/^([a-z\u00a1-\uffff]{2,}|xn[a-z0-9-]{2,})$/i.test(e))return!1;if(/[\s\u2002-\u200B\u202F\u205F\u3000\uFEFF\uDB40\uDC20]/.test(e))return!1}for(let e,i=0;i<n.length;i++){if(e=n[i],t.allowUnderscores&&(e=e.replace(/_/g,"")),!/^[a-z\u00a1-\uffff0-9-]+$/i.test(e))return!1;if(/[\uff01-\uff5e]/.test(e))return!1;if("-"===e[0]||"-"===e[e.length-1])return!1}return!0}(d,{requireTld:t.requireTld}))return!1;if('"'===m[0])return m=m.slice(1,m.length-1),t.allowUtf8LocalPart?s.test(m):l.test(m);const p=t.allowUtf8LocalPart?r:a,v=m.split(".");for(let e=0;e<v.length;e++)if(!p.test(v[e]))return!1;return!0}},1609:e=>{"use strict";e.exports=window.React},5795:e=>{"use strict";e.exports=window.ReactDOM},6942:(e,t)=>{var i;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e="",t=0;t<arguments.length;t++){var i=arguments[t];i&&(e=l(e,a(i)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return o.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var i in e)n.call(e,i)&&e[i]&&(t=l(t,i));return t}function l(e,t){return t?e?e+" "+t:e+t:e}e.exports?(o.default=o,e.exports=o):void 0===(i=function(){return o}.apply(t,[]))||(e.exports=i)}()}},t={};function i(n){var o=t[n];if(void 0!==o)return o.exports;var a=t[n]={exports:{}};return e[n].call(a.exports,a,a.exports,i),a.exports}i.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return i.d(t,{a:t}),t},i.d=(e,t)=>{for(var n in t)i.o(t,n)&&!i.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},i.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),i.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var n={};(()=>{"use strict";i.r(n),i.d(n,{PanelRender:()=>G});var e={};i.r(e),i.d(e,{addNewNotification:()=>p,deleteNotification:()=>v,setNotificationProperties:()=>m,setupStore:()=>f});var t={};i.r(t),i.d(t,{getNotificationProperties:()=>g,getNotifications:()=>y});var o={};i.r(o),i.d(o,{getNotifications:()=>b});const a=window.wp.data,l=window.lodash,r="SETUP_STORE",s="SET_NOTIFICATION_PROPERTIES",c="ADD_NEW_NOTIFICATION",u="DELETE_NOTIFICATION",d={notifications:[]};function f(e){return{type:r,payload:{initialPayload:e}}}const m=(e,t)=>({type:s,payload:{properties:t,id:e}}),p=e=>({type:c,payload:{properties:e}}),v=e=>({type:u,payload:{id:e}});function y(e){return e.notifications}function g(e,t){const i=e.notifications.findIndex((e=>e.id===t));return-1===i?null:e.notifications[i].properties}const h=window.qf.config;var E=i.n(h);const b=()=>f(E().getInitialPayload().notifications),C=((0,a.registerStore)("quillForms/notifications-editor",{reducer:(e=d,t)=>{switch(t.type){case r:{const{initialPayload:i}=t.payload;return{...e,notifications:i}}case s:{const{properties:i,id:n}=t.payload,o=e.notifications.findIndex((e=>e.id===n));if(-1===o)return e;const a=(0,l.reduce)(i,((t,i,n)=>{var a,l;return i!==t[n]&&((t=(a=[...e.notifications][o].properties)===(l=t)?{...a}:l)[n]=i),t}),e.notifications[o].properties);if(a===e.notifications[o].properties)return e;const r=[...e.notifications];return r[o].properties={...a},{...e,notifications:r}}case c:{const{properties:i}=t.payload,n=Math.random().toString(36).substr(2,9),o=[...e.notifications];return o.push({properties:i,id:n}),{...e,notifications:o}}case u:{const{id:i}=t.payload,n=e.notifications.findIndex((e=>e.id===i));if(-1===n)return e;const o=[...e.notifications];return o.splice(n,1),{notifications:o}}}return e},actions:e,resolvers:o,selectors:t}),window.qf.builderPanels);var w=i(1609);const _=window.qf.adminComponents,N=window.wp.components;var x=i(6942),F=i.n(x),k=i(6251);const T=window.emotion,O=({children:e,type:t})=>(0,w.createElement)("div",{className:F()("notifications-editor-alert-message-wrapper",`has-${t}`)},e),S=({isRequired:e,value:t,setValue:i,emailFields:n,label:o})=>{t&&t.match(/{{field:([a-zA-Z0-9-_]+)}}/g)||(t=""),t=(t=t.replace("{{field:","")).replace("}}","");const{emailBlockType:l}=(0,a.useSelect)((e=>({emailBlockType:e("quillForms/blocks").getBlockType("email")})));(0,w.useEffect)((()=>{n&&0!==n.length?-1===n.findIndex((e=>e.id===t))&&i(n[0].id):i("")}),[JSON.stringify(n)]);const r=n?.map((e=>({key:e.id,name:(0,w.createElement)("div",{className:"notifications-editor-email-select__option"},(0,w.createElement)(_.BlockIconBox,{icon:l?.icon,color:l?.color}),(0,w.createElement)("span",{className:"notifications-editor-email-select__option-title"},(0,_.getPlainExcerpt)(e.attributes.label)))})));return(0,w.createElement)(w.Fragment,null,0===n.length?(0,w.createElement)(O,{type:e?"error":""},"To select an email, you should have at least one email question"):(0,w.createElement)(_.SelectControl,{className:"notifications-editor-email-select",placeholder:"Choose Email",value:r.find((e=>e.key===t)),onChange:({selectedItem:e})=>i(e.key),options:r}))},P=window.qf.richText,q=(window.wp.hooks,({isReviewing:e,isValid:t,setIsValid:i,value:n,setValue:o})=>{(0,w.useEffect)((()=>{n&&n.length>0?i(!0):i(!1)}),[n]);const{fields:l,quizMode:r}=(0,a.useSelect)((e=>{const t=e("quillForms/blocks").getBlockTypes();return{fields:e("quillForms/block-editor").getAllBlocks().filter((e=>{const i=t[e.name];return!0===i?.supports?.editable})).map((i=>({type:"field",modifier:i.id,label:(0,_.getPlainExcerpt)(i.attributes.label),icon:t[i.name]?.icon,color:t[i.name]?.color,order:e("quillForms/block-editor").getBlockOrderById(i.id)}))),quizMode:e("quillForms/quiz-editor").getState().enabled}}));let s=[{type:"form",modifier:"all_answers",value:"all_answers",label:"all_answers"}];return r&&(s=[{type:"quiz",label:"Correct Answers Count",modifier:"correct_answers_count",value:"correct_answers_count",icon:"yes",color:"#4caf50",order:void 0},{type:"quiz",label:"Incorrect Answers Count",modifier:"incorrect_answers_count",value:"incorrect_answers_count",icon:"no-alt",color:"#f44336",order:void 0},{type:"quiz",label:"Quiz Summary",modifier:"summary",value:"summary",icon:"editor-table",color:"#4caf50",order:void 0}]),(0,w.createElement)(_.BaseControl,null,(0,w.createElement)(_.ControlWrapper,{orientation:"vertical"},(0,w.createElement)(_.ControlLabel,{label:"Message",showAsterisk:!0}),(0,w.createElement)(P.FullRichText,{value:n||"<p></p>",onChange:e=>{o(e)},customMergeTags:s})),!t&&e&&(0,w.createElement)(O,{type:"error"},"This field is required!"))}),I=({value:e,setValue:t,isValid:i,setIsValid:n,isReviewing:o})=>((0,w.useEffect)((()=>{e&&e.length>0?n(!0):n(!1)}),[e]),(0,w.createElement)(_.BaseControl,null,(0,w.createElement)(_.ControlWrapper,{orientation:"vertical"},(0,w.createElement)(_.ControlLabel,{label:"Subject",showAsterisk:!0}),(0,w.createElement)(_.TextControl,{value:e,onChange:e=>t(e)}),!i&&o&&(0,w.createElement)(O,{type:"error"},"This field is required!"))));var D=i(5795);const B=window.wp.primitives,A=(0,w.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,w.createElement)(B.Path,{d:"M20 11.2H6.8l3.7-3.7-1-1L3.9 12l5.6 5.5 1-1-3.7-3.7H20z"})),j=({goBack:e,notificationId:t,properties:i,validationFlags:n,isReviewing:o,setIsReviewing:l})=>{const{setNotificationProperties:r,addNewNotification:s}=(0,a.useDispatch)("quillForms/notifications-editor"),c=Object.keys(n).filter((e=>!1===n[e])).length>0;return(0,D.createPortal)((0,w.createElement)("div",{className:"notifications-editor-notification-edit__footer"},(0,w.createElement)(_.Button,{isDefault:!0,onClick:()=>{e()}},(0,w.createElement)(N.Icon,{icon:A,className:T.css`
						margin-right: 5px;
					`}),"Cancel and go back"),o&&c?(0,w.createElement)(_.Button,{isDanger:!0},"Some fields aren't valid"," "):(0,w.createElement)(_.Button,{isPrimary:!0,onClick:()=>{c?l(!0):(t?r(t,i):s(i),e())}},t?"Save changes":"Add new notification")),document.querySelector(".builder-core-panel"))},R=({value:e,setValue:t})=>(0,w.createElement)("div",{className:"notifications-editor-notification-title"},(0,w.createElement)(_.BaseControl,null,(0,w.createElement)(_.ControlWrapper,null,(0,w.createElement)(_.ControlLabel,{label:"Title"}),(0,w.createElement)(_.TextControl,{value:e,onChange:e=>{t({title:e})}})))),M=({recipients:e,toType:t,setValue:i,isValid:n,setIsValid:o,emailFields:a,isReviewing:r})=>((0,w.useEffect)((()=>{e&&0!==e.length?o(!0):o(!1)}),[e]),(0,w.createElement)(_.BaseControl,null,(0,w.createElement)(_.ControlWrapper,{orientation:"vertical"},(0,w.createElement)(_.ControlLabel,{label:"Send a notification to",showAsterisk:!0}),(0,w.createElement)(N.RadioControl,{selected:t,options:[{label:"Email",value:"email"},{label:"Field",value:"field"}],onChange:e=>{i({toType:e,recipients:[]})}})),"email"===t&&(0,w.createElement)(k.ReactMultiEmail,{placeholder:"Type an email then hit a space",emails:e?.length>0?e.filter((e=>(0,k.isEmail)(e))):[],onChange:e=>{const t=e.filter((e=>(0,k.isEmail)(e)));i({recipients:(0,l.uniq)(t)})},validateEmail:e=>(0,k.isEmail)(e),getLabel:(e,t,i)=>(0,w.createElement)("div",{"data-tag":!0,key:t},e,(0,w.createElement)("span",{"data-tag-handle":!0,onClick:()=>i(t)},"×"))}),"field"===t&&(0,w.createElement)(S,{isRequired:!0,emailFields:a,value:e&&e[0]&&e[0].length>0?e[0]:"",setValue:e=>{e&&a.some((t=>t.id===e))?i({recipients:[`{{field:${e}}}`]}):i({recipients:[]})}}),!n&&r&&("email"===t||"field"===t&&a.length>0)&&(0,w.createElement)(O,{type:"error"},"Please insert at least one correct email!"))),L=({goBack:e,currentNotificationProperties:t,notificationId:i,activeSlide:n,isActive:o,isAnimating:r})=>{const[s,c]=(0,w.useState)({...t}),[u,d]=(0,w.useState)(!1),[f,m]=(0,w.useState)(!1),[p,v]=(0,w.useState)((0,l.zipObject)((0,l.keys)({...s}),(0,l.keys)({...s}).map((()=>!0))));(0,w.useEffect)((()=>{t&&c({...t}),m(!1),d(1===n)}),[n]);const{active:y,title:g,toType:h,recipients:E,replyToType:b="field",replyTo:C,subject:x,message:O,conditions:P}=s,{emailFields:D}=(0,a.useSelect)((e=>({emailFields:e("quillForms/block-editor").getAllBlocks().filter((e=>"email"===e.name))})));return(0,w.createElement)("div",{className:F()("notifications-editor-notification-editor-wrapper",{active:o,"is-animating":r})},(0,w.createElement)(w.Fragment,null,(0,w.createElement)("h4",{className:"notifications-editor-notification-editor-wrapper__heading"},i?"Edit Notification":"Create a new notification"),(0,w.createElement)(R,{value:g,setValue:e=>{c((t=>({...t,...e})))}}),(0,w.createElement)(_.BaseControl,null,(0,w.createElement)(_.ControlWrapper,null,(0,w.createElement)(_.ControlLabel,{label:"Active"}),(0,w.createElement)(_.ToggleControl,{checked:y,onChange:()=>{c((e=>({...e,active:!y})))}}))),(0,w.createElement)(M,{emailFields:D,recipients:E,toType:h,isValid:{...p}.recipients,setIsValid:e=>{v((t=>({...t,recipients:e})))},setValue:e=>{c((t=>({...t,...e})))},isReviewing:f}),(0,w.createElement)(_.BaseControl,null,(0,w.createElement)(_.ControlWrapper,{orientation:"vertical"},(0,w.createElement)(_.ControlLabel,{label:"Reply to"}),(0,w.createElement)(N.RadioControl,{selected:b,options:[{label:"Email",value:"email"},{label:"Field",value:"field"}],onChange:e=>{c((t=>({...t,replyToType:e})))}})),"email"===b&&(0,w.createElement)("div",{className:T.css`
							${C&&(0,k.isEmail)(C)&&".react-multi-email input { display: none !important;}"}
					   `},(0,w.createElement)(k.ReactMultiEmail,{placeholder:"Enter email",emails:C?[C]:[],enable:()=>({emailCnt:1}),onChange:e=>{e.length>0?c((t=>({...t,replyTo:e[0]}))):c((e=>({...e,replyTo:""})))},validateEmail:e=>!!(0,k.isEmail)(e),getLabel:(e,t,i)=>(0,w.createElement)("div",{"data-tag":!0,key:t},e,(0,w.createElement)("span",{"data-tag-handle":!0,onClick:()=>i(t)},"×"))})),"field"===b&&(0,w.createElement)(S,{emailFields:D,value:C,setValue:e=>c((t=>({...t,replyTo:`{{field:${e}}}`})))})),(0,w.createElement)(I,{value:x,setValue:e=>{c((t=>({...t,subject:e})))},isValid:{...p}.subject,setIsValid:e=>{v((t=>({...t,subject:e})))},isReviewing:f}),u&&(0,w.createElement)(q,{value:O,setValue:e=>{c((t=>({...t,message:e})))},isValid:{...p}.message,setIsValid:e=>{v((t=>({...t,message:e})))},isReviewing:f}),(0,w.createElement)(_.BaseControl,null,(0,w.createElement)(_.ControlWrapper,null,(0,w.createElement)(_.ControlLabel,{label:"Conditional Logic"}),(0,w.createElement)(_.ToggleControl,{checked:!!P,onChange:()=>{c((e=>({...e,conditions:P?void 0:[]})))}})),!!P&&(0,w.createElement)("div",null,(0,w.createElement)("div",null,"Process this notification if the following conditions are met:"),(0,w.createElement)(_.LogicConditions,{value:P,onChange:e=>c((t=>({...t,conditions:e})))}))),o&&(0,w.createElement)(j,{isReviewing:f,setIsReviewing:m,goBack:e,notificationId:i,properties:{...s},validationFlags:{...p}})))},V=window.wp.element,U=(0,V.forwardRef)((function({icon:e,size:t=24,...i},n){return(0,V.cloneElement)(e,{width:t,height:t,...i,ref:n})})),$=(0,w.createElement)(B.SVG,{xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 24 24"},(0,w.createElement)(B.Path,{d:"m14.5 6.5-1 1 3.7 3.7H4v1.6h13.2l-3.7 3.7 1 1 5.6-5.5z"}));var z=i(3350);const W=({proceed:e,closeModal:t})=>(0,w.createElement)(N.Modal,{className:F()("qf-notification-delete-dialog",T.css`
					border: none !important;
				`),title:"Delete notification",onRequestClose:t},(0,w.createElement)("div",{className:"notifications-delete-dialog__body"},"Are you sure you would like to delete this notification?"),(0,w.createElement)("div",{className:"notifications-delete-dialog__actions"},(0,w.createElement)(_.Button,{isDefault:!0,onClick:t},"Cancel"),(0,w.createElement)(_.Button,{isDanger:!0,onClick:e},"Delete"))),K=({notification:e,onEdit:t,index:i})=>{const[n,o]=(0,w.useState)(!1);(0,w.useEffect)((()=>{setTimeout((()=>{o(!0)}),50)}),[]);const{properties:{title:l,active:r},id:s}=e,{setNotificationProperties:c,deleteNotification:u}=(0,a.useDispatch)("quillForms/notifications-editor");return(0,w.createElement)("div",{className:F()("notifications-editor-notification-box",T.css`
					opacity: 0;
					transform: scale( 0.6 );
					transition: all 0.3s ease;
					transition-delay: ${.05*i}s;

					&.mounted {
						opacity: 1;
						transform: scale( 1 );
					}
				`,{mounted:n})},(0,w.createElement)("div",{className:"notifications-editor-notification-box__title"},(0,w.createElement)("div",{className:"notifications-editor-notification-box__status"},(0,w.createElement)(_.ToggleControl,{checked:r,onChange:()=>{c(s,{active:!r})}})),l||"Untitled"),(0,w.createElement)("div",{className:"notifications-editor-notification-box__actions"},(0,w.createElement)("div",{role:"presentation",className:"notifications-editor-notification-box__actions-edit",onClick:()=>{t()}},"Edit"),(0,w.createElement)("div",{role:"presentation",className:"notifications-editor-notification-box__actions-delete",onClick:()=>{(0,z.ZX)({customUI:({onClose:e})=>(0,w.createElement)(W,{closeModal:()=>{e()},proceed:()=>{u(s),e()}})})}},"Delete")))},Q=({goNext:e,setCurrentNotificationId:t,isActive:i,isAnimating:n})=>{const[o,l]=(0,w.useState)(!1),r=E().getLicense(),s=E().isWPEnv(),{notifications:c}=(0,a.useSelect)((e=>({notifications:e("quillForms/notifications-editor").getNotifications()})));return(0,w.createElement)("div",{className:F()("notifications-editor-notifciations-list",{active:i,"is-animating":n})},s&&(!qfAdmin.is_quill_smtp_installed||!qfAdmin.is_quill_smtp_active)&&(0,w.createElement)(O,{type:"info"},!qfAdmin.is_quill_smtp_installed&&(0,w.createElement)(w.Fragment,null,"Email Notifications requires Quill SMTP plugin to be installed and activated. Please install and activate ",(0,w.createElement)("a",{href:`${qfAdmin.adminUrl}plugin-install.php?s=quillsmtp&tab=search&type=term`,target:"_blank"},"Quill SMTP")," plugin to make sure that your email notifications are delivered successfully."),qfAdmin.is_quill_smtp_installed&&!qfAdmin.is_quill_smtp_active&&(0,w.createElement)(w.Fragment,null,"Email Notifications requires Quill SMTP plugin to be activated. Please activate ",(0,w.createElement)("a",{href:`${qfAdmin.adminUrl}plugin-install.php?s=quillsmtp&tab=search&type=term`,target:"_blank"},"Quill SMTP")," plugin to make sure that your email notifications are delivered successfully.")),(0,w.createElement)("div",{className:"notifications-editor-notifciations-list__header"},(0,w.createElement)("h4",{className:T.css`
						font-size: 15px;
					`},"Notifications List"),(0,w.createElement)(_.Button,{className:T.css`
						border-radius: 8px !important;
						display: inlinep-flex;
						align-items: center;
					`,isPrimary:!0,onClick:()=>{c.length>0&&"valid"!==r?.status&&s?l(!0):(t(null),e())},isLarge:!0},"Add New Notification",(0,w.createElement)(U,{className:T.css`
							fill: #fff;
							margin-left: 5px;
						`,icon:$,size:15}))),(0,w.createElement)(w.Fragment,null,c?.length>0?c.map(((i,n)=>(0,w.createElement)(K,{index:n,onEdit:()=>{t(i.id),e()},key:i.id,notification:i}))):(0,w.createElement)("div",{className:"notifications-editor-no-notifications-msg"},"There are no notifications.")),(0,w.createElement)(w.Fragment,null,o&&(0,w.createElement)(N.Modal,{className:F()(T.css`
								border: none !important;
								border-radius: 9px;

								.components-modal__header {
									background: linear-gradient(
										42deg,
										rgb( 235 54 221 ),
										rgb( 238 142 22 )
									);
									h1 {
										color: #fff;
									}
									svg {
										fill: #fff;
									}
								}
								.components-modal__content {
									text-align: center;
								}
							`),title:"Multiple notifications is a pro feature",onRequestClose:()=>{l(!1)}},(0,w.createElement)(_.__experimentalFeatureAvailability,{featureName:"Multiple notifications",planKey:"basic",showLockIcon:!0}))))};let H;const G=()=>{const[e,t]=(0,w.useState)(0),[i,n]=(0,w.useState)(!1),o=(0,w.useRef)();(0,w.useEffect)((()=>{o?.current&&setTimeout((()=>{o?.current&&o.current.scrollTo(0,0)}),0)}),[e]),(0,w.useEffect)((()=>(i&&(H=setTimeout((()=>{n(!1)}),600)),()=>clearTimeout(H))),[i,e]);const[l,r]=(0,w.useState)(null),{currentNotificationProperties:s}=(0,a.useSelect)((e=>l?{currentNotificationProperties:e("quillForms/notifications-editor").getNotificationProperties(l)}:{currentNotificationProperties:{title:"",toType:"email",active:!0,recipients:[],replyToType:"field",replyTo:"",subject:"",message:"{{form:all_answers}}"}}));return(0,w.createElement)("div",{className:`notifications-editor-panel-render active-slide-${e}`,ref:o},(0,w.createElement)(Q,{isAnimating:i,isActive:0===e,setCurrentNotificationId:r,goNext:()=>{n(!0),setTimeout((()=>{t(1)}),50)}}),(0,w.createElement)(L,{isAnimating:i,isActive:1===e,activeSlide:e,notificationId:l,currentNotificationProperties:{...s},goBack:()=>{n(!0),setTimeout((()=>{t(0)}),50)}}))};(0,C.registerBuilderPanel)("notifications",{title:"Email Notifications",icon:()=>(0,w.createElement)("svg",{focusable:"false",viewBox:"0 0 24 24","aria-hidden":"true"},(0,w.createElement)("path",{d:"M12 22c1.1 0 2-.9 2-2h-4c0 1.1.89 2 2 2zm6-6v-5c0-3.07-1.64-5.64-4.5-6.32V4c0-.83-.67-1.5-1.5-1.5s-1.5.67-1.5 1.5v.68C7.63 5.36 6 7.92 6 11v5l-2 2v1h16v-1l-2-2z"})),mode:"single",areaToShow:"drop-area",render:G,position:3})})(),(window.qf=window.qf||{}).notificationsEditor=n})();