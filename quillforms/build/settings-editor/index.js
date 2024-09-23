(()=>{var e={5035:(e,r,n)=>{"use strict";r.f4=void 0;var t=n(5285);r.f4=e=>({type:t.SETUP_STORE,initialPayload:e})},5285:(e,r)=>{"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.SHOW_QUESTIONS_NUMBERS=r.SHOW_LETTERS_ON_ANSWERS=r.SETUP_STORE=r.SAVE_ANSWERS_IN_BROWSER=r.DISPLAY_BRANDING=r.DISABLE_WHEEL_SWIPING=r.DISABLE_PROGRESS_BAR=r.DISABLE_NAVIGATION_ARROWS=r.DISABLE_ASTREISKS_ON_REQUIRED_FIELDS=r.CHANGE_ANIMATION_DIRECTION=void 0,r.DISABLE_PROGRESS_BAR="DISABLE_PROGRESS_BAR",r.DISABLE_WHEEL_SWIPING="DISABLE_WHEEL_SWIPING",r.DISABLE_NAVIGATION_ARROWS="DISABLE_NAVIGATION_ARROWS",r.CHANGE_ANIMATION_DIRECTION="CHANGE_ANIMATION_DIRECTION",r.SHOW_QUESTIONS_NUMBERS="SHOW_QUESTIONS_NUMBERS",r.SHOW_LETTERS_ON_ANSWERS="SHOW_LETTERS_ON_ANSWERS",r.SAVE_ANSWERS_IN_BROWSER="SAVE_ANSWERS_IN_BROWSER",r.DISPLAY_BRANDING="DISPLAY_BRANDING",r.DISABLE_ASTREISKS_ON_REQUIRED_FIELDS="DISABLE_ASTREISKS_ON_REQUIRED_FIELDS",r.SETUP_STORE="SETUP_STORE"},6942:(e,r)=>{var n;!function(){"use strict";var t={}.hasOwnProperty;function s(){for(var e="",r=0;r<arguments.length;r++){var n=arguments[r];n&&(e=a(e,i(n)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return s.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var r="";for(var n in e)t.call(e,n)&&e[n]&&(r=a(r,n));return r}function a(e,r){return r?e?e+" "+r:e+r:e}e.exports?(s.default=s,e.exports=s):void 0===(n=function(){return s}.apply(r,[]))||(e.exports=n)}()}},r={};function n(t){var s=r[t];if(void 0!==s)return s.exports;var i=r[t]={exports:{}};return e[t](i,i.exports,n),i.exports}n.n=e=>{var r=e&&e.__esModule?()=>e.default:()=>e;return n.d(r,{a:r}),r},n.d=(e,r)=>{for(var t in r)n.o(r,t)&&!n.o(e,t)&&Object.defineProperty(e,t,{enumerable:!0,get:r[t]})},n.o=(e,r)=>Object.prototype.hasOwnProperty.call(e,r),n.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var t={};(()=>{"use strict";n.r(t),n.d(t,{PanelRender:()=>V});var e={};n.r(e),n.d(e,{changeAnimationDirection:()=>N,disableAstreisksOnRequiredFields:()=>O,disableNavigationArrows:()=>I,disableProgressBar:()=>B,disableWheelSwiping:()=>b,displayBranding:()=>f,saveAnswersInBrowser:()=>R,setUpStore:()=>_,showLettersOnAnswers:()=>h,showQuestionsNumbers:()=>y});var r={};n.r(r),n.d(r,{getAnimationDirection:()=>L,getSettings:()=>D,isNavigationArrowsDisabled:()=>C,isProgressBarDisabled:()=>v,isWheelSwipingDisabled:()=>P,shouldAnswersBeSavedInBrowser:()=>q,shouldAstreisksOnRequiredFieldsBeHidden:()=>k,shouldBrandingBeDisplayed:()=>F,shouldLettersOnAnswersBeDisplayed:()=>W,shouldQuestionsNumbersBeDisplayed:()=>T});var s={};n.r(s),n.d(s,{getSettings:()=>G});const i=window.wp.data,a="DISABLE_PROGRESS_BAR",l="DISABLE_WHEEL_SWIPING",o="DISABLE_NAVIGATION_ARROWS",d="CHANGE_ANIMATION_DIRECTION",u="SHOW_QUESTIONS_NUMBERS",c="SHOW_LETTERS_ON_ANSWERS",S="SAVE_ANSWERS_IN_BROWSER",E="DISPLAY_BRANDING",g="DISABLE_ASTREISKS_ON_REQUIRED_FIELDS",A="SETUP_STORE",p=window.qf.config;var w=n.n(p);const m=(0,i.combineReducers)({disableProgressBar:function(e=!1,r){switch(r.type){case a:return r.flag;case A:return!!r.initialPayload?.disableProgressBar&&r.initialPayload?.disableProgressBar}return e},disableWheelSwiping:function(e=!1,r){switch(r.type){case l:return r.flag;case A:return!!r.initialPayload?.disableWheelSwiping&&r.initialPayload?.disableWheelSwiping}return e},disableNavigationArrows:function(e=!1,r){switch(r.type){case o:return r.flag;case A:return!!r.initialPayload?.disableNavigationArrows&&r.initialPayload?.disableNavigationArrows}return e},animationDirection:function(e=!1,r){switch(r.type){case d:return r.direction;case A:return r.initialPayload?.changeAnimationDirection?r.initialPayload?.changeAnimationDirection:"vertical"}return e},showLettersOnAnswers:function(e=!0,r){switch(r.type){case c:return r.flag;case A:return void 0===r.initialPayload?.showLettersOnAnswers||r.initialPayload?.showLettersOnAnswers}return e},showQuestionsNumbers:function(e=!0,r){switch(r.type){case u:return r.flag;case A:return void 0===r.initialPayload?.showQuestionsNumbers||r.initialPayload?.showQuestionsNumbers}return e},saveAnswersInBrowser:function(e=!1,r){switch(r.type){case S:return r.flag;case A:return!!r.initialPayload?.saveAnswersInBrowser&&r.initialPayload?.saveAnswersInBrowser}return e},displayBranding:function(e=!1,r){switch(r.type){case E:return r.flag;case A:return void 0!==r.initialPayload?.displayBranding&&r.initialPayload?.displayBranding}return e},disableAstreisksOnRequiredFields:function(e=!1,r){switch(r.type){case g:return r.flag;case A:return!!r.initialPayload?.disableAstreisksOnRequiredFields&&r.initialPayload?.disableAstreisksOnRequiredFields}return e}}),_=e=>({type:A,initialPayload:e}),B=e=>({type:a,flag:e}),b=e=>({type:l,flag:e}),I=e=>({type:o,flag:e}),N=e=>({type:d,direction:e}),h=e=>({type:c,flag:e}),y=e=>({type:u,flag:e}),R=e=>({type:S,flag:e}),f=e=>({type:E,flag:e}),O=e=>({type:g,flag:e});function D(e){return e}function v(e){return e.disableProgressBar}function P(e){return e.disableWheelSwiping}function C(e){return e.disableNavigationArrows}function L(e){return e.animationDirection}function W(e){return e.showLettersOnAnswers}function T(e){return e.showQuestionsNumbers}function q(e){return e.saveAnswersInBrowser}function F(e){return e.displayBranding}function k(e){return e.disableAstreisksOnRequiredFields}var H=n(5035);function G(e){const r=w().getInitialPayload();return(0,H.f4)(r?.settings?r.settings:{})}(0,i.registerStore)("quillForms/settings-editor",{reducer:m,actions:e,selectors:r,resolvers:s});const Q=window.qf.builderPanels,U=(window.qf.messagesEditor,window.React),M=window.qf.adminComponents,x=(window.wp.components,window.wp.element,window.emotion);n(6942);const V=()=>{const{setCurrentPanel:e}=(0,i.useDispatch)("quillForms/builder-panels"),{disableProgressBar:r,disableWheelSwiping:n,disableNavigationArrows:t,changeAnimationDirection:s,showLettersOnAnswers:a,showQuestionsNumbers:l,saveAnswersInBrowser:o,displayBranding:d,disableAstreisksOnRequiredFields:u}=(0,i.useDispatch)("quillForms/settings-editor"),{isProgressBarDisabled:c,isWheelSwipingDisabled:S,isNavigationArrowsDisabled:E,shouldLettersOnAnswersBeDisplayed:g,shouldQuestionsNumbersBeDisplayed:A,shouldAnswersBeSavedInBrowser:p,shouldAstreisksOnRequiredFieldsBeHidden:w,shouldBrandingBeDisplayed:m,animationDirection:_}=(0,i.useSelect)((e=>({isProgressBarDisabled:e("quillForms/settings-editor").isProgressBarDisabled(),isWheelSwipingDisabled:e("quillForms/settings-editor").isWheelSwipingDisabled(),isNavigationArrowsDisabled:e("quillForms/settings-editor").isNavigationArrowsDisabled(),animationDirection:e("quillForms/settings-editor").getAnimationDirection(),shouldLettersOnAnswersBeDisplayed:e("quillForms/settings-editor").shouldLettersOnAnswersBeDisplayed(),shouldQuestionsNumbersBeDisplayed:e("quillForms/settings-editor").shouldQuestionsNumbersBeDisplayed(),shouldAnswersBeSavedInBrowser:e("quillForms/settings-editor").shouldAnswersBeSavedInBrowser(),shouldBrandingBeDisplayed:e("quillForms/settings-editor").shouldBrandingBeDisplayed(),shouldAstreisksOnRequiredFieldsBeHidden:e("quillForms/settings-editor").shouldAstreisksOnRequiredFieldsBeHidden()}))),B=[{key:"horizontal",name:"Horizontal"},{key:"vertical",name:"Vertical"}];return(0,U.createElement)("div",{className:"settings-editor-panel-render"},(0,U.createElement)(M.BaseControl,null,(0,U.createElement)(M.ControlWrapper,null,(0,U.createElement)(M.ControlLabel,{label:"Auto save progress (save answers in user browser)"}),(0,U.createElement)(M.ToggleControl,{checked:p,onChange:()=>o(!p)}),(0,U.createElement)("p",{className:x.css`
					    background: antiquewhite;
						padding: 10px;
						margin-top: 16px;
					`},"This feature will save the answers in the user's browser, so the user can continue the form later in same browser. To allow user to save and continue later from any device, you have to use ",(0,U.createElement)("a",{href:"",onClick:r=>{r.preventDefault(),e("save-and-continue")}},"save and continue feature")))),(0,U.createElement)(M.BaseControl,null,(0,U.createElement)(M.ControlWrapper,null,(0,U.createElement)(M.ControlLabel,{label:"Hide progress bar"}),(0,U.createElement)(M.ToggleControl,{checked:c,onChange:()=>r(!c)}))),(0,U.createElement)(M.BaseControl,null,(0,U.createElement)(M.ControlWrapper,null,(0,U.createElement)(M.ControlLabel,{label:"Disable swiping by wheel"}),(0,U.createElement)(M.ToggleControl,{checked:S,onChange:()=>n(!S)}))),(0,U.createElement)(M.BaseControl,null,(0,U.createElement)(M.ControlWrapper,null,(0,U.createElement)(M.ControlLabel,{label:"Letters on answers"}),(0,U.createElement)(M.ToggleControl,{checked:g,onChange:()=>a(!g)}))),(0,U.createElement)(M.BaseControl,null,(0,U.createElement)(M.ControlWrapper,null,(0,U.createElement)(M.ControlLabel,{label:"Questions numbers"}),(0,U.createElement)(M.ToggleControl,{checked:A,onChange:()=>l(!A)}))),(0,U.createElement)(M.BaseControl,null,(0,U.createElement)(M.ControlWrapper,null,(0,U.createElement)(M.ControlLabel,{label:"Hide navigation arrows"}),(0,U.createElement)(M.ToggleControl,{checked:E,onChange:()=>t(!E)}))),(0,U.createElement)(M.BaseControl,null,(0,U.createElement)(M.ControlWrapper,null,(0,U.createElement)(M.ControlLabel,{label:"Hide asterisks on required fields",isNew:!0}),(0,U.createElement)(M.ToggleControl,{checked:w,onChange:()=>u(!w)}))),(0,U.createElement)(M.BaseControl,null,(0,U.createElement)(M.ControlWrapper,null,(0,U.createElement)(M.ControlLabel,{label:"Animation direction"}),(0,U.createElement)(M.SelectControl,{className:x.css`
							margin-top: 5px;
						`,onChange:({selectedItem:e})=>{s(e.key)},options:B,value:B.find((e=>e.key===_))}))),(0,U.createElement)(M.BaseControl,null,(0,U.createElement)(M.ControlWrapper,null,(0,U.createElement)(M.ControlLabel,{label:"Display Branding"}),(0,U.createElement)(M.ToggleControl,{checked:m,onChange:()=>{d(!m)}}))))};(0,Q.registerBuilderSubPanel)("settings/general",{title:"General",render:V,position:0})})(),(window.qf=window.qf||{}).settingsEditor=t})();