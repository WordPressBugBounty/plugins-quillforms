(()=>{var e={46942:(e,t)=>{var o;!function(){"use strict";var n={}.hasOwnProperty;function r(){for(var e="",t=0;t<arguments.length;t++){var o=arguments[t];o&&(e=i(e,a(o)))}return e}function a(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return r.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var o in e)n.call(e,o)&&e[o]&&(t=i(t,o));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(r.default=r,e.exports=r):void 0===(o=function(){return r}.apply(t,[]))||(e.exports=o)}()}},t={};function o(n){var r=t[n];if(void 0!==r)return r.exports;var a=t[n]={exports:{}};return e[n](a,a.exports,o),a.exports}o.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return o.d(t,{a:t}),t},o.d=(e,t)=>{for(var n in t)o.o(t,n)&&!o.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},o.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.qf.blocks,t=window.qf.rendererCore,n=window.wp.element,r=window.wp.data,a=(window.wp.autop,window.lodash),i=window.emotion;var c=o(46942),l=o.n(c);const s=({attributes:e,isPreview:t})=>React.createElement("div",{className:l()("renderer-core-block-attachment",i.css`
					${"split-right"!==e.layout&&"split-left"!==e.layout&&`\n\t\t\t\t\tmax-width: ${e?.attachmentMaxWidth};\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\t`}
					overflow: hidden;
				`)},e.attachment&&e.attachment.url&&React.createElement("img",{alt:"",src:e.attachment.url,className:l()("renderer-core-block-attachment__image",i.css`
							${"split-right"!==e.layout&&"split-left"!==e.layout&&`border-radius: ${e.attachmentBorderRadius};\n\t\t\t\t\t\t\t margin: auto;\n\t\t\t\t\t\t\t`}
						`)}));let u;const d=({isSticky:e,buttonText:o,next:n})=>{const r=(0,t.useMessages)(),a=(0,t.useTheme)(),c="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;return React.createElement("div",{className:l()("qf-thankyou-screen-block__action-wrapper",{"is-sticky":e},i.css`
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        margin-top: 20px;
        width: 100%;
      `)},React.createElement("div",{className:l()("qf-thankyou-screen-block__action",i.css`
            width: 100%;
            text-align: center;
          `)},React.createElement(t.Button,{onClick:n}," ",o," ")),React.createElement("div",{className:l()("qf-thankyou-screen-block__action-helper-text",i.css`
            color: ${a.questionsColor};
            width: 100%;
            text-align: center;
          `)},!c&&React.createElement(t.HTMLParser,{value:r["label.hintText.enter"]})))},m={display:({attributes:e})=>{var o,c;const{isPreview:m,deviceWidth:p,editor:h}=(0,t.useFormContext)(),[f,w]=(0,n.useState)(!1),{redirectUrl:b,redirectOnSameWindow:y,autoRedirect:g,autoRedirectUrl:k,autoRedirectLag:v}=e;e?.label&&e.label;const x=(0,t.useTheme)(),R=(0,n.useRef)(),E=(0,n.useRef)(),{resetAnswers:_,goToBlock:q}=(0,r.useDispatch)("quillForms/renderer-core"),{walkPath:T}=(0,r.useSelect)((e=>({walkPath:e("quillForms/renderer-core").getWalkPath()}))),P=async(e,o=!0)=>{e=await(async e=>{const o=document.createElement("span");(0,n.render)(React.createElement(t.HTMLParser,{value:e}),o);var r=document.createElement("div");return r.appendChild(o),await new Promise((e=>setTimeout(e))),r.children[0].innerText})(e);const r=new URLSearchParams(window.location.search.substring(1));(r.get("quillforms-shortcode")||"top"===r.get("quillforms-redirection"))&&(()=>{try{return window.top.location,!0}catch(e){return!1}})()?o?window.top.location.href=e:window.open(e,"_blank").focus():o?window.location.href=e:window.open(e,"_blank").focus()};(0,n.useEffect)((()=>(w(!0),!m&&"off"===h?.mode&&g&&k&&(u=setTimeout((()=>{P(k)}),1e3*v)),()=>w(!1))),[]);let N=a.noop;return T[0]&&T[0].id&&(N=()=>{_(),q(T[0].id)}),React.createElement("div",{className:i.css`
        height: 100%;
        position: relative;
        outline: none;
      `,ref:R,tabIndex:"0",onKeyDown:e=>{"Enter"===e.key&&"off"===h?.mode&&(e.stopPropagation(),N())}},React.createElement("div",{className:l()("qf-thankyou-screen-block__wrapper","blocktype-thankyou-screen-block",`renderer-core-block-${e?.layout}-layout`,{active:f},i.css`
						& {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 6;
							display: flex;
							${("stack"===e.layout||"mobile"===p&&("float-left"===e.layout||"float-right"===e.layout))&&"flex-direction: column;\n\t\t\t\t\t\t\t.qf-thankyou-screen-block__content-wrapper {\n                  position: relative;\n                  top: 0;\n                  right: 0;\n                  left: 0;\n\t\t\t\t\t\t\t}"}
							justify-content: center;
							width: 100%;
							height: 100%;
              max-height: 100%;
							overflow-y: auto;
							opacity: 0;
							visibility: hidden;
							transition: all 0.4s ease-in-out;
							-webkit-transition: all 0.4s ease-in-out;
							-moz-transition: all 0.4s ease-in-out;
						}

						&.active {
							opacity: 1;
							visibility: visible;
						}

						.qf-thankyou-screen-block__content-wrapper {
							display: flex;
							flex-direction: column;
							justify-content: center;
							align-items: center;
							max-width: 700px;
							padding: 30px;
							word-wrap: break-word;
							text-align: center;
							margin-right: auto;
							margin-left: auto;
							width: 100%;
						}
						
						.qf-thankyou-screen-block__content {
						  width: 100%;
						  display: flex;
						  flex-direction: column;
						  align-items: center;
						}
						
						.renderer-components-block-label,
						.renderer-components-block-description,
						.renderer-components-block-custom-html {
						  width: 100%;
						  text-align: center;
						}

						&.active.has-scroll {
							.qf-thankyou-screen-block__content-wrapper {
								margin: auto;
								width: 100%;
								max-width: 700px;
							}
						}
					`)},React.createElement("div",{className:"qf-thankyou-screen-block__content-wrapper"},React.createElement("div",{className:"qf-thankyou-screen-block__content",ref:E},("stack"===e.layout||"mobile"===p&&("float-left"===e.layout||"float-right"===e.layout))&&React.createElement(s,{isPreview:m||"on"===h?.mode,attributes:e}),React.createElement("div",{className:i.css`
								margin-top: 25px;
								width: 100%;
							`},React.createElement("div",{className:l()("renderer-components-block-label",i.css`
                    color: ${x.questionsColor};
                  `)},"on"===h?.mode?React.createElement(h.editLabel,null):React.createElement(t.HTMLParser,{value:null!==(o=e?.label)&&void 0!==o?o:""})),e?.description&&""!==e.description&&React.createElement("div",{className:l()("renderer-components-block-description",i.css`
                      color: ${x.questionsColor};
                    `)},"on"===h.mode?React.createElement(h.editDescription,null):React.createElement(t.HTMLParser,{value:null!==(c=e.description)&&void 0!==c?c:""})))),e?.customHTML&&React.createElement("div",{className:l()("renderer-components-block-custom-html",i.css`
                  color: ${x.questionsColor};
                  width: 100%;
                `),dangerouslySetInnerHTML:{__html:e?.customHTML}}),e.showButton&&React.createElement(d,{buttonText:e.buttonText,next:()=>{m||"on"===h.mode||(clearTimeout(u),"reload"===e.buttonMode?N():b&&P(b,y))}})),("stack"!==e.layout&&"mobile"!==p||"mobile"===p&&("split-left"===e.layout||"split-right"===e.layout))&&React.createElement("div",{className:l()("renderer-core-block-attachment-wrapper",i.css`
								img {
									object-position: ${100*e?.attachmentFocalPoint?.x}%
										${100*e?.attachmentFocalPoint?.y}%;
								}
							`)},React.createElement(s,{isPreview:m||"on"===h?.mode,attributes:e}))))}},{name:p}={name:"thankyou-screen",attributes:{autoRedirect:{type:"boolean",default:!1},autoRedirectUrl:{type:"string",default:""},autoRedirectLag:{type:"number",default:.5},showButton:{type:"boolean",default:!0},buttonText:{type:"string",default:"Again"},buttonMode:{type:"string",default:"reload",enum:["reload","redirect"]},redirectUrl:{type:"string",default:""},redirectOnSameWindow:{type:"boolean",default:!0}},supports:{editable:!1,required:!1,attachment:!0,description:!0,logic:!1}};(0,e.setBlockRendererSettings)(p,m)})(),(window.qf=window.qf||{}).blocklibThankyouScreenBlockRenderer={}})();