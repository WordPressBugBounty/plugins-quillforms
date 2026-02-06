(()=>{var t={46942:(t,e)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=i(t,a(n)))}return t}function a(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)r.call(t,n)&&t[n]&&(e=i(e,n));return e}function i(t,e){return e?t?t+" "+e:t+e:t}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()}},e={};function n(r){var o=e[r];if(void 0!==o)return o.exports;var a=e[r]={exports:{}};return t[r](a,a.exports,n),a.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var r in e)n.o(e,r)&&!n.o(t,r)&&Object.defineProperty(t,r,{enumerable:!0,get:e[r]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.qf.blocks,e=window.qf.rendererCore,r=window.wp.element,o=window.wp.data,a=(window.wp.autop,window.lodash),i=window.emotion;var l=n(46942),c=n.n(l);const s=({attributes:t,isPreview:e})=>React.createElement("div",{className:c()("renderer-core-block-attachment",i.css`
					${"split-right"!==t.layout&&"split-left"!==t.layout&&`\n\t\t\t\t\tmax-width: ${t?.attachmentMaxWidth};\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\t`}
					overflow: hidden;
				`)},t.attachment&&t.attachment.url&&React.createElement("img",{alt:"",src:t.attachment.url,className:c()("renderer-core-block-attachment__image",i.css`
							${"split-right"!==t.layout&&"split-left"!==t.layout&&`border-radius: ${t.attachmentBorderRadius};\n\t\t\t\t\t\t\t margin: auto;\n\t\t\t\t\t\t\t`}
						`)}));let u;const d=({isSticky:t,buttonText:n,next:r,align:o="center"})=>{const a=(0,e.useMessages)(),l=(0,e.useTheme)(),s="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,u=t=>{switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}};return React.createElement("div",{className:c()("qf-thankyou-screen-block__action-wrapper",{"is-sticky":t},i.css`
        display: flex;
        flex-direction: column;
        justify-content: ${u(o)};
        align-items: ${u(o)};
        margin-top: 20px;
        width: 100%;
        text-align: ${o};
      `)},React.createElement("div",{className:c()("qf-thankyou-screen-block__action",i.css`
            width: 100%;
            text-align: ${o};
          `)},React.createElement(e.Button,{onClick:r}," ",n," ")),React.createElement("div",{className:c()("qf-thankyou-screen-block__action-helper-text",i.css`
            color: ${l.questionsColor};
            width: 100%;
            text-align: ${o};
            margin-top: 8px;
          `)},!s&&React.createElement(e.HTMLParser,{value:a["label.hintText.enter"]})))},m={display:({attributes:t})=>{var n,l,m;const{isPreview:p,deviceWidth:h,editor:f}=(0,e.useFormContext)(),[w,g]=(0,r.useState)(!1),{redirectUrl:y,redirectOnSameWindow:b,autoRedirect:x,autoRedirectUrl:v,autoRedirectLag:k}=t;t?.label&&t.label;const R=(0,e.useTheme)(),E=(0,r.useRef)(),_=(0,r.useRef)(),q=null!==(n=t?.align)&&void 0!==n?n:"center",T=(t=>{switch(t){case"left":return{textAlign:"left",alignItems:"flex-start"};case"right":return{textAlign:"right",alignItems:"flex-end"};default:return{textAlign:"center",alignItems:"center"}}})(q),{resetAnswers:P,goToBlock:$}=(0,o.useDispatch)("quillForms/renderer-core"),{walkPath:M}=(0,o.useSelect)((t=>({walkPath:t("quillForms/renderer-core").getWalkPath()}))),N=()=>{try{return window.top.location,!0}catch(t){return!1}},S=async(t,n=!0)=>{t=await(async t=>{const n=document.createElement("span");(0,r.render)(React.createElement(e.HTMLParser,{value:t}),n);var o=document.createElement("div");return o.appendChild(n),await new Promise((t=>setTimeout(t))),o.children[0].innerText})(t);const o=new URLSearchParams(window.location.search.substring(1));(o.get("quillforms-shortcode")||"top"===o.get("quillforms-redirection"))&&N()?n?window.top.location.href=t:window.open(t,"_blank").focus():(()=>{try{return window.self!==window.top}catch(t){return!0}})()&&!N()&&(()=>{try{const t=window.location.hostname;return"quillforms.app"===t||t.endsWith(".quillforms.app")}catch(t){return!1}})()?((t,e=!1)=>{const n={type:"quillforms-redirect",url:t,newTab:e};window.parent.postMessage(n,"*")})(t,!n):n?window.location.href=t:window.open(t,"_blank").focus()};(0,r.useEffect)((()=>(g(!0),!p&&"off"===f?.mode&&x&&v&&(u=setTimeout((()=>{S(v)}),1e3*k)),()=>g(!1))),[]);let I=a.noop;return M[0]&&M[0].id&&(I=()=>{P(),$(M[0].id)}),React.createElement("div",{className:i.css`
        height: 100%;
        position: relative;
        outline: none;
      `,ref:E,tabIndex:"0",onKeyDown:t=>{"Enter"===t.key&&"off"===f?.mode&&(t.stopPropagation(),I())}},React.createElement("div",{className:c()("qf-thankyou-screen-block__wrapper","blocktype-thankyou-screen-block",`renderer-core-block-${t?.layout}-layout`,{active:w},i.css`
						& {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 6;
							display: flex;
							${("stack"===t.layout||"mobile"===h&&("float-left"===t.layout||"float-right"===t.layout))&&"flex-direction: column;\n\t\t\t\t\t\t\t.qf-thankyou-screen-block__content-wrapper {\n                  position: relative;\n                  top: 0;\n                  right: 0;\n                  left: 0;\n\t\t\t\t\t\t\t}"}
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
							/* Apply alignment styles */
							align-items: ${T.alignItems};
							text-align: ${T.textAlign};
							max-width: 700px;
							padding: 30px;
							word-wrap: break-word;
							margin-right: auto;
							margin-left: auto;
							width: 100%;
						}
						
						.qf-thankyou-screen-block__content {
						  width: 100%;
						  display: flex;
						  flex-direction: column;
						  /* Apply alignment to content container */
						  align-items: ${T.alignItems};
						}
						
						.renderer-components-block-label,
						.renderer-components-block-description,
						.renderer-components-block-custom-html {
						  width: 100%;
						  /* Inherit text alignment */
						  text-align: inherit;
						}

						&.active.has-scroll {
							.qf-thankyou-screen-block__content-wrapper {
								margin: auto;
								width: 100%;
								max-width: 700px;
							}
						}
					`)},React.createElement("div",{className:"qf-thankyou-screen-block__content-wrapper"},React.createElement("div",{className:"qf-thankyou-screen-block__content",ref:_},("stack"===t.layout||"mobile"===h&&("float-left"===t.layout||"float-right"===t.layout))&&React.createElement(s,{isPreview:p||"on"===f?.mode,attributes:t}),React.createElement("div",{className:i.css`
								margin-top: 25px;
								width: 100%;
								/* Ensure content follows the alignment */
								text-align: inherit;
							`},React.createElement("div",{className:c()("renderer-components-block-label",i.css`
                    color: ${R.questionsColor};
                    /* Inherit text alignment */
                    text-align: inherit;
                  `)},"on"===f?.mode?React.createElement(f.editLabel,null):React.createElement(e.HTMLParser,{value:null!==(l=t?.label)&&void 0!==l?l:""})),t?.description&&""!==t.description&&React.createElement("div",{className:c()("renderer-components-block-description",i.css`
                      color: ${R.questionsColor};
                      /* Inherit text alignment */
                      text-align: inherit;
                    `)},"on"===f.mode?React.createElement(f.editDescription,null):React.createElement(e.HTMLParser,{value:null!==(m=t.description)&&void 0!==m?m:""})))),t?.customHTML&&React.createElement("div",{className:c()("renderer-components-block-custom-html",i.css`
                  color: ${R.questionsColor};
                  width: 100%;
                  /* Inherit text alignment */
                  text-align: inherit;
                `),dangerouslySetInnerHTML:{__html:t?.customHTML}}),t.showButton&&React.createElement(d,{buttonText:t.buttonText,align:q,next:()=>{p||"on"===f.mode||(clearTimeout(u),"reload"===t.buttonMode?I():y&&S(y,b))}})),("stack"!==t.layout&&"mobile"!==h||"mobile"===h&&("split-left"===t.layout||"split-right"===t.layout))&&React.createElement("div",{className:c()("renderer-core-block-attachment-wrapper",i.css`
								img {
									object-position: ${100*t?.attachmentFocalPoint?.x}%
										${100*t?.attachmentFocalPoint?.y}%;
								}
							`)},React.createElement(s,{isPreview:p||"on"===f?.mode,attributes:t}))))}},{name:p}={name:"thankyou-screen",attributes:{autoRedirect:{type:"boolean",default:!1},autoRedirectUrl:{type:"string",default:""},autoRedirectLag:{type:"number",default:.5},showButton:{type:"boolean",default:!0},buttonText:{type:"string",default:"Again"},buttonMode:{type:"string",default:"reload",enum:["reload","redirect"]},redirectUrl:{type:"string",default:""},redirectOnSameWindow:{type:"boolean",default:!0}},supports:{editable:!1,required:!1,attachment:!0,description:!0,logic:!1}};(0,t.setBlockRendererSettings)(p,m)})(),(window.qf=window.qf||{}).blocklibThankyouScreenBlockRenderer={}})();