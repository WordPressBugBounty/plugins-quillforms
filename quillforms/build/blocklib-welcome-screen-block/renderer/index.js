(()=>{var t={46942:(t,e)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function o(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=c(t,r(n)))}return t}function r(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return o.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)a.call(t,n)&&t[n]&&(e=c(e,n));return e}function c(t,e){return e?t?t+" "+e:t+e:t}t.exports?(o.default=o,t.exports=o):void 0===(n=function(){return o}.apply(e,[]))||(t.exports=n)}()}},e={};function n(a){var o=e[a];if(void 0!==o)return o.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,n),r.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.qf.blocks,e=window.qf.rendererCore,a=window.React,o=window.wp.data,r=window.lodash,c=window.emotion;var i=n(46942),l=n.n(i);const s=({attributes:t,isPreview:e})=>{if(!t.attachment||0===Object.keys(t.attachment).length)return e?React.createElement("div",{className:l()("renderer-core-block-attachment",c.css`
							${"split-right"!==t.layout&&"split-left"!==t.layout&&`\n\t\t\t\t\t\t\tmax-width: ${t?.attachmentMaxWidth};\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t`}
							overflow: hidden;
						`)},React.createElement("div",{className:"renderer-core-block-attachment__placeholder"},React.createElement("svg",{className:"renderer-core-block-attachment__placeholder-icon",focusable:"false",viewBox:"0 0 24 24",role:"presentation"},React.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),React.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5 5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})))):null;const{attachment:n,layout:a}=t,o="split-left"===a||"split-right"===a;if("video"===n.type&&n.url){const e=n.url.match(/(?:youtu.be\/|youtube.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/),a=e?e[1]:null;if(!a)return null;const r="rel=0&iv_load_policy=3&modestbranding=1",i=o?`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&controls=0&showinfo=0&${r}`:`https://www.youtube.com/embed/${a}?autoplay=0&controls=1&${r}`;return React.createElement("div",{className:l()("renderer-core-block-attachment",c.css`
						${!o&&`\n\t\t\t\t\t\t\tmax-width: ${t?.attachmentMaxWidth||"100%"};\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t`}
						${o&&"\n\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t"}
						overflow: hidden;
					`)},React.createElement("div",{className:c.css`
					position: relative;
					width: 100%;
					height: ${o?"100%":"315px"};
					overflow: hidden;
				`},React.createElement("iframe",{width:"100%",height:"100%",src:i,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:c.css`
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							${!o&&`border-radius: ${t.attachmentBorderRadius||"0"};`}
						`}),o&&React.createElement("div",{className:c.css`
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 1;
							background: transparent;
							pointer-events: auto;
						`})))}return React.createElement("div",{className:l()("renderer-core-block-attachment",c.css`
					${"split-right"!==t.layout&&"split-left"!==t.layout&&`\n\t\t\t\t\tmax-width: ${t?.attachmentMaxWidth};\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\t`}
					overflow: hidden;
				`)},n&&n.url?React.createElement("img",{alt:n.alt||"",src:n.url,className:l()("renderer-core-block-attachment__image",c.css`
							${"split-right"!==t.layout&&"split-left"!==t.layout&&`border-radius: ${t.attachmentBorderRadius};\n\t\t\t\t\t\t\t margin: auto;\n\t\t\t\t\t\t\t`}
							${o&&"\n\t\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\tobject-fit: cover;\n\t\t\t\t\t\t\t"}
						`)}):React.createElement(React.Fragment,null,e&&React.createElement("div",{className:"renderer-core-block-attachment__placeholder"},React.createElement("svg",{className:"renderer-core-block-attachment__placeholder-icon",focusable:"false",viewBox:"0 0 24 24",role:"presentation"},React.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),React.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5 5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})))))},m=({isSticky:t,buttonText:n,next:a,theme:o})=>{const r=(0,e.useMessages)(),i="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;return React.createElement("div",{className:l()("qf-welcome-screen-block__action-wrapper",{"is-sticky":t},c.css`
					& {
						display: flex;
						justify-content: center;
						align-items: center;
						margin-top: 20px;
					}
					// &.is-sticky {
					// 	position: absolute;
					// 	bottom: 0;
					// 	right: 0;
					// 	left: 0;
					// 	width: 100%;
					// 	background-color: rgba(0, 0, 0, 0.05);
					// 	box-shadow: rgba(0, 0, 0, 0.1) 0 -1px;
					// 	height: 70px;
					// 	display: flex;
					// 	align-items: center;
					// 	justify-content: center;

					// 	.qf-welcome-screen-block__action {
					// 		margin: 0 auto;
				`)},React.createElement("div",{className:"qf-welcome-screen-block__action"},React.createElement(e.Button,{theme:o,onClick:a},n)),React.createElement("div",{className:l()("qf-welcome-screen-block__action-helper-text",c.css`
						color: ${o.questionsColor};
						font-size: 12px;
					`)},!i&&React.createElement(e.HTMLParser,{value:r["label.hintText.enter"]})))},d={display:({attributes:t})=>{var n,i,d;const{isPreview:u,deviceWidth:p,editor:h}=(0,e.useFormContext)(),[w,f]=(0,a.useState)(!1),[b,g]=(0,a.useState)(!1),v=(0,e.useBlockTheme)(t.themeId),y=(0,a.useRef)(),x=(0,a.useRef)(),k=function(t){const e=a.useCallback((e=>{const n=window.matchMedia(t);return n.addEventListener("change",e),()=>{n.removeEventListener("change",e)}}),[t]);return a.useSyncExternalStore(e,(()=>window.matchMedia(t).matches),(()=>{throw Error("useMediaQuery is a client-only hook")}))}("only screen and (max-width : 768px)")?"stack":null!==(n=t?.layout)&&void 0!==n?n:"stack",{goToBlock:R}=(0,o.useDispatch)("quillForms/renderer-core"),{walkPath:E}=(0,o.useSelect)((t=>({walkPath:t("quillForms/renderer-core").getWalkPath()})));(0,a.useEffect)((()=>(f(!0),()=>f(!1))),[]);let _=r.noop;return E[0]&&E[0].id&&"off"===h.mode&&(_=()=>R(E[0].id)),React.createElement("div",{className:c.css`
				height: 100%;
				position: relative;
				outline: none;
			`,ref:y,tabIndex:"0",onKeyDown:t=>{"Enter"===t.key&&(t.stopPropagation(),_())}},React.createElement("div",{className:l()("qf-welcome-screen-block__wrapper","blocktype-welcome-screen-block",`renderer-core-block-${t?.layout}-layout`,{"with-sticky-footer":b,active:w},c.css`
						& {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 6;
							display: flex;
							${"stack"===k&&"flex-direction: column;\n\t\t\t\t\t\t\t.qf-welcome-screen-block__content-wrapper {\n\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t}"}
							justify-content: center;
							width: 100%;
							height: 100%;
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
						// &.with-sticky-footer {
						// 	display: block;
						// 	.qf-welcome-screen-block__content-wrapper {
						// 		height: calc(100% - 70px);

						// 	}
						// }
						.qf-welcome-screen-block__content-wrapper {
							display: flex;
							flex-direction: column;
							justify-content: center;
							max-width: 700px;
							padding: 30px;
							word-wrap: break-word;
							text-align: center;
							margin-right: auto;
							margin-left: auto;
							min-height: 100%;
						}
					`)},React.createElement("div",{className:"qf-welcome-screen-block__content-wrapper"},React.createElement("div",{className:"qf-welcome-screen-block__content",ref:x},"stack"===k&&React.createElement(s,{isPreview:u,attributes:t}),React.createElement("div",{className:c.css`
								margin-top: 25px;
							`},(t?.label||"on"===h.mode)&&React.createElement("div",{className:l()("renderer-components-block-label",c.css`
										color: ${v.questionsColor};
										font-family: ${v.questionsLabelFont};
										@media ( min-width: 768px ) {
											font-size: ${v.questionsLabelFontSize.lg} !important;
											line-height: ${v.questionsLabelLineHeight.lg} !important;
										}
										@media ( max-width: 767px ) {
											font-size: ${v.questionsLabelFontSize.sm} !important;
											line-height: ${v.questionsLabelLineHeight.sm} !important;
										}
									`)},"on"===h?.mode?React.createElement(h.editLabel,null):React.createElement(e.HTMLParser,{value:null!==(i=t?.label)&&void 0!==i?i:""})),(t?.description&&""!==t.description||"on"===h.mode)&&React.createElement("div",{className:l()("renderer-components-block-description",c.css`
												color: ${v.questionsColor};
												font-family: ${v.questionsDescriptionFont};
												@media ( min-width: 768px ) {
													font-size: ${v.questionsDescriptionFontSize.lg} !important;
													line-height: ${v.questionsDescriptionLineHeight.lg} !important;
												}
												@media ( max-width: 767px ) {
													font-size: ${v.questionsDescriptionFontSize.sm} !important;
													line-height: ${v.questionsDescriptionLineHeight.sm} !important;
												}
											`)},"on"===h?.mode?React.createElement(h.editDescription,null):React.createElement(e.HTMLParser,{value:null!==(d=t.description)&&void 0!==d?d:""})),t.customHTML&&React.createElement("div",{className:l()("renderer-components-block-custom-html",c.css`
											color: ${v.questionsColor};
										`),dangerouslySetInnerHTML:{__html:t?.customHTML}})),React.createElement(m,{theme:v,next:_,isSticky:b,buttonText:t.buttonText}))),"stack"!==k&&React.createElement("div",{className:l()("renderer-core-block-attachment-wrapper",c.css`
								img {
									object-position: ${100*t?.attachmentFocalPoint?.x}%
										${100*t?.attachmentFocalPoint?.y}%;
								}
							`)},React.createElement(s,{isPreview:u,attributes:t}))))}},{name:u}={name:"welcome-screen",attributes:{buttonText:{type:"string",default:"Let's start!"}},supports:{editable:!1,required:!1,attachment:!0,description:!0,logic:!1}};(0,t.setBlockRendererSettings)(u,d)})(),(window.qf=window.qf||{}).blocklibWelcomeScreenBlockRenderer={}})();