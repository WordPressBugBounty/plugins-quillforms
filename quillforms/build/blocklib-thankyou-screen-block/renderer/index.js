(()=>{var e={46942:(e,t)=>{var n;!function(){"use strict";var r={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var n=arguments[t];n&&(e=i(e,o(n)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var n in e)r.call(e,n)&&e[n]&&(t=i(t,n));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(n=function(){return a}.apply(t,[]))||(e.exports=n)}()}},t={};function n(r){var a=t[r];if(void 0!==a)return a.exports;var o=t[r]={exports:{}};return e[r](o,o.exports,n),o.exports}n.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return n.d(t,{a:t}),t},n.d=(e,t)=>{for(var r in t)n.o(t,r)&&!n.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},n.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.qf.blocks,t=window.qf.rendererCore,r=window.wp.element,a=window.wp.data,o=(window.wp.autop,window.lodash),i=window.emotion;var l=n(46942),c=n.n(l);const s=({attributes:e,isPreview:t})=>React.createElement("div",{className:c()("renderer-core-block-attachment",i.css`
					${"split-right"!==e.layout&&"split-left"!==e.layout&&`\n\t\t\t\t\tmax-width: ${e?.attachmentMaxWidth};\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\t`}
					overflow: hidden;
				`)},e.attachment&&e.attachment.url&&React.createElement("img",{alt:"",src:e.attachment.url,className:c()("renderer-core-block-attachment__image",i.css`
							${"split-right"!==e.layout&&"split-left"!==e.layout&&`border-radius: ${e.attachmentBorderRadius};\n\t\t\t\t\t\t\t margin: auto;\n\t\t\t\t\t\t\t`}
						`)}));let u;const d=({isSticky:e,buttonText:n,next:r,align:a="center"})=>{const o=(0,t.useMessages)(),l=(0,t.useTheme)(),s="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,u=e=>{switch(e){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}};return React.createElement("div",{className:c()("qf-thankyou-screen-block__action-wrapper",{"is-sticky":e},i.css`
        display: flex;
        flex-direction: column;
        justify-content: ${u(a)};
        align-items: ${u(a)};
        margin-top: 20px;
        width: 100%;
        text-align: ${a};
      `)},React.createElement("div",{className:c()("qf-thankyou-screen-block__action",i.css`
            width: 100%;
            text-align: ${a};
          `)},React.createElement(t.Button,{onClick:r}," ",n," ")),React.createElement("div",{className:c()("qf-thankyou-screen-block__action-helper-text",i.css`
            color: ${l.questionsColor};
            width: 100%;
            text-align: ${a};
            margin-top: 8px;
          `)},!s&&React.createElement(t.HTMLParser,{value:o["label.hintText.enter"]})))},m={display:({attributes:e})=>{var n,l,m;const{isPreview:p,deviceWidth:h,editor:f}=(0,t.useFormContext)(),[g,w]=(0,r.useState)(!1),{redirectUrl:y,redirectOnSameWindow:b,autoRedirect:x,autoRedirectUrl:v,autoRedirectLag:k}=e;e?.label&&e.label;const R=(0,t.useTheme)(),E=(0,r.useRef)(),_=(0,r.useRef)(),q=null!==(n=e?.align)&&void 0!==n?n:"center",T=(e=>{switch(e){case"left":return{textAlign:"left",alignItems:"flex-start"};case"right":return{textAlign:"right",alignItems:"flex-end"};default:return{textAlign:"center",alignItems:"center"}}})(q),{resetAnswers:P,goToBlock:$}=(0,a.useDispatch)("quillForms/renderer-core"),{walkPath:N}=(0,a.useSelect)((e=>({walkPath:e("quillForms/renderer-core").getWalkPath()}))),S=async(e,n=!0)=>{e=await(async e=>{const n=document.createElement("span");(0,r.render)(React.createElement(t.HTMLParser,{value:e}),n);var a=document.createElement("div");return a.appendChild(n),await new Promise((e=>setTimeout(e))),a.children[0].innerText})(e);const a=new URLSearchParams(window.location.search.substring(1));(a.get("quillforms-shortcode")||"top"===a.get("quillforms-redirection"))&&(()=>{try{return window.top.location,!0}catch(e){return!1}})()?n?window.top.location.href=e:window.open(e,"_blank").focus():n?window.location.href=e:window.open(e,"_blank").focus()};(0,r.useEffect)((()=>(w(!0),!p&&"off"===f?.mode&&x&&v&&(u=setTimeout((()=>{S(v)}),1e3*k)),()=>w(!1))),[]);let M=o.noop;return N[0]&&N[0].id&&(M=()=>{P(),$(N[0].id)}),React.createElement("div",{className:i.css`
        height: 100%;
        position: relative;
        outline: none;
      `,ref:E,tabIndex:"0",onKeyDown:e=>{"Enter"===e.key&&"off"===f?.mode&&(e.stopPropagation(),M())}},React.createElement("div",{className:c()("qf-thankyou-screen-block__wrapper","blocktype-thankyou-screen-block",`renderer-core-block-${e?.layout}-layout`,{active:g},i.css`
						& {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 6;
							display: flex;
							${("stack"===e.layout||"mobile"===h&&("float-left"===e.layout||"float-right"===e.layout))&&"flex-direction: column;\n\t\t\t\t\t\t\t.qf-thankyou-screen-block__content-wrapper {\n                  position: relative;\n                  top: 0;\n                  right: 0;\n                  left: 0;\n\t\t\t\t\t\t\t}"}
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
					`)},React.createElement("div",{className:"qf-thankyou-screen-block__content-wrapper"},React.createElement("div",{className:"qf-thankyou-screen-block__content",ref:_},("stack"===e.layout||"mobile"===h&&("float-left"===e.layout||"float-right"===e.layout))&&React.createElement(s,{isPreview:p||"on"===f?.mode,attributes:e}),React.createElement("div",{className:i.css`
								margin-top: 25px;
								width: 100%;
								/* Ensure content follows the alignment */
								text-align: inherit;
							`},React.createElement("div",{className:c()("renderer-components-block-label",i.css`
                    color: ${R.questionsColor};
                    /* Inherit text alignment */
                    text-align: inherit;
                  `)},"on"===f?.mode?React.createElement(f.editLabel,null):React.createElement(t.HTMLParser,{value:null!==(l=e?.label)&&void 0!==l?l:""})),e?.description&&""!==e.description&&React.createElement("div",{className:c()("renderer-components-block-description",i.css`
                      color: ${R.questionsColor};
                      /* Inherit text alignment */
                      text-align: inherit;
                    `)},"on"===f.mode?React.createElement(f.editDescription,null):React.createElement(t.HTMLParser,{value:null!==(m=e.description)&&void 0!==m?m:""})))),e?.customHTML&&React.createElement("div",{className:c()("renderer-components-block-custom-html",i.css`
                  color: ${R.questionsColor};
                  width: 100%;
                  /* Inherit text alignment */
                  text-align: inherit;
                `),dangerouslySetInnerHTML:{__html:e?.customHTML}}),e.showButton&&React.createElement(d,{buttonText:e.buttonText,align:q,next:()=>{p||"on"===f.mode||(clearTimeout(u),"reload"===e.buttonMode?M():y&&S(y,b))}})),("stack"!==e.layout&&"mobile"!==h||"mobile"===h&&("split-left"===e.layout||"split-right"===e.layout))&&React.createElement("div",{className:c()("renderer-core-block-attachment-wrapper",i.css`
								img {
									object-position: ${100*e?.attachmentFocalPoint?.x}%
										${100*e?.attachmentFocalPoint?.y}%;
								}
							`)},React.createElement(s,{isPreview:p||"on"===f?.mode,attributes:e}))))}},{name:p}={name:"thankyou-screen",attributes:{autoRedirect:{type:"boolean",default:!1},autoRedirectUrl:{type:"string",default:""},autoRedirectLag:{type:"number",default:.5},showButton:{type:"boolean",default:!0},buttonText:{type:"string",default:"Again"},buttonMode:{type:"string",default:"reload",enum:["reload","redirect"]},redirectUrl:{type:"string",default:""},redirectOnSameWindow:{type:"boolean",default:!0}},supports:{editable:!1,required:!1,attachment:!0,description:!0,logic:!1}};(0,e.setBlockRendererSettings)(p,m)})(),(window.qf=window.qf||{}).blocklibThankyouScreenBlockRenderer={}})();