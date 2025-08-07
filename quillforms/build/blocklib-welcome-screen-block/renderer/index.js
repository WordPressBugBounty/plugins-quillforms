(()=>{var t={46942:(t,e)=>{var n;!function(){"use strict";var a={}.hasOwnProperty;function r(){for(var t="",e=0;e<arguments.length;e++){var n=arguments[e];n&&(t=o(t,i(n)))}return t}function i(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return r.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var n in t)a.call(t,n)&&t[n]&&(e=o(e,n));return e}function o(t,e){return e?t?t+" "+e:t+e:t}t.exports?(r.default=r,t.exports=r):void 0===(n=function(){return r}.apply(e,[]))||(t.exports=n)}()}},e={};function n(a){var r=e[a];if(void 0!==r)return r.exports;var i=e[a]={exports:{}};return t[a](i,i.exports,n),i.exports}n.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return n.d(e,{a:e}),e},n.d=(t,e)=>{for(var a in e)n.o(e,a)&&!n.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},n.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.qf.blocks,e=window.qf.rendererCore,a=window.React,r=window.wp.data,i=window.lodash,o=window.emotion;var c=n(46942),l=n.n(c);const s=({attributes:t,isPreview:e})=>{if(!t.attachment||0===Object.keys(t.attachment).length)return e?React.createElement("div",{className:l()("renderer-core-block-attachment",o.css`
							${"split-right"!==t.layout&&"split-left"!==t.layout&&`\n\t\t\t\t\t\t\tmax-width: ${t?.attachmentMaxWidth};\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t`}
							overflow: hidden;
						`)},React.createElement("div",{className:"renderer-core-block-attachment__placeholder"},React.createElement("svg",{className:"renderer-core-block-attachment__placeholder-icon",focusable:"false",viewBox:"0 0 24 24",role:"presentation"},React.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),React.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5 5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})))):null;const{attachment:n,layout:a}=t,r="split-left"===a||"split-right"===a;if("video"===n.type&&n.url){const e=n.url.match(/(?:youtu.be\/|youtube.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/),a=e?e[1]:null;if(!a)return null;const i="rel=0&iv_load_policy=3&modestbranding=1",c=r?`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&controls=0&showinfo=0&${i}`:`https://www.youtube.com/embed/${a}?autoplay=0&controls=1&${i}`;return React.createElement("div",{className:l()("renderer-core-block-attachment",o.css`
						${!r&&`\n\t\t\t\t\t\t\tmax-width: ${t?.attachmentMaxWidth||"100%"};\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t`}
						${r&&"\n\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t"}
						overflow: hidden;
					`)},React.createElement("div",{className:o.css`
					position: relative;
					width: 100%;
					height: ${r?"100%":"315px"};
					overflow: hidden;
				`},React.createElement("iframe",{width:"100%",height:"100%",src:c,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:o.css`
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							${!r&&`border-radius: ${t.attachmentBorderRadius||"0"};`}
						`}),r&&React.createElement("div",{className:o.css`
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 1;
							background: transparent;
							pointer-events: auto;
						`})))}return React.createElement("div",{className:l()("renderer-core-block-attachment",o.css`
					${"split-right"!==t.layout&&"split-left"!==t.layout&&`\n\t\t\t\t\tmax-width: ${t?.attachmentMaxWidth};\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\t`}
					overflow: hidden;
				`)},n&&n.url?React.createElement("img",{alt:n.alt||"",src:n.url,className:l()("renderer-core-block-attachment__image",o.css`
							${"split-right"!==t.layout&&"split-left"!==t.layout&&`border-radius: ${t.attachmentBorderRadius};\n\t\t\t\t\t\t\t margin: auto;\n\t\t\t\t\t\t\t`}
							${r&&"\n\t\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\tobject-fit: cover;\n\t\t\t\t\t\t\t"}
						`)}):React.createElement(React.Fragment,null,e&&React.createElement("div",{className:"renderer-core-block-attachment__placeholder"},React.createElement("svg",{className:"renderer-core-block-attachment__placeholder-icon",focusable:"false",viewBox:"0 0 24 24",role:"presentation"},React.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),React.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5 5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})))))},m=({isSticky:t,buttonText:n,next:a,theme:r,align:i="center"})=>{const c=(0,e.useMessages)(),s="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0,m=t=>{switch(t){case"left":return"flex-start";case"right":return"flex-end";default:return"center"}};return React.createElement("div",{className:l()("qf-welcome-screen-block__action-wrapper",{"is-sticky":t},o.css`
					& {
						display: flex;
						flex-direction: column;
						justify-content: ${m(i)};
						align-items: ${m(i)};
						margin-top: 20px;
						text-align: ${i};
					}
				`)},React.createElement("div",{className:"qf-welcome-screen-block__action"},React.createElement(e.Button,{theme:r,onClick:a},n)),React.createElement("div",{className:l()("qf-welcome-screen-block__action-helper-text",o.css`
						color: ${r.questionsColor};
						font-size: 12px;
						margin-top: 8px;
						text-align: ${i};
					`)},!s&&React.createElement(e.HTMLParser,{value:c["label.hintText.enter"]})))},d={display:({attributes:t})=>{var n,c,d,u;const{isPreview:h,deviceWidth:p,editor:g}=(0,e.useFormContext)(),[f,w]=(0,a.useState)(!1),[b,v]=(0,a.useState)(!1),x=(0,e.useBlockTheme)(t.themeId),y=(0,a.useRef)(),k=(0,a.useRef)(),R=function(t){const e=a.useCallback((e=>{const n=window.matchMedia(t);return n.addEventListener("change",e),()=>{n.removeEventListener("change",e)}}),[t]);return a.useSyncExternalStore(e,(()=>window.matchMedia(t).matches),(()=>{throw Error("useMediaQuery is a client-only hook")}))}("only screen and (max-width : 768px)")?"stack":null!==(n=t?.layout)&&void 0!==n?n:"stack",E=null!==(c=t?.align)&&void 0!==c?c:"center",$=(t=>{switch(t){case"left":return{textAlign:"left",alignItems:"flex-start"};case"right":return{textAlign:"right",alignItems:"flex-end"};default:return{textAlign:"center",alignItems:"center"}}})(E),{goToBlock:_}=(0,r.useDispatch)("quillForms/renderer-core"),{walkPath:q}=(0,r.useSelect)((t=>({walkPath:t("quillForms/renderer-core").getWalkPath()})));(0,a.useEffect)((()=>(w(!0),()=>w(!1))),[]);let L=i.noop;return q[0]&&q[0].id&&"off"===g.mode&&(L=()=>_(q[0].id)),React.createElement("div",{className:o.css`
				height: 100%;
				position: relative;
				outline: none;
			`,ref:y,tabIndex:"0",onKeyDown:t=>{"Enter"===t.key&&(t.stopPropagation(),L())}},React.createElement("div",{className:l()("qf-welcome-screen-block__wrapper","blocktype-welcome-screen-block",`renderer-core-block-${t?.layout}-layout`,{"with-sticky-footer":b,active:f},o.css`
						& {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 6;
							display: flex;
							${"stack"===R&&"flex-direction: column;\n\t\t\t\t\t\t\t.qf-welcome-screen-block__content-wrapper {\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t}"}
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

						.qf-welcome-screen-block__content-wrapper {
							display: flex;
							flex-direction: column;
							justify-content: center;
							/* Apply alignment styles */
							align-items: ${$.alignItems};
							text-align: ${$.textAlign};
							max-width: 700px;
							padding: 30px;
							word-wrap: break-word;
							margin-right: auto;
							margin-left: auto;
							min-height: 100%;
						}
					`)},React.createElement("div",{className:"qf-welcome-screen-block__content-wrapper"},React.createElement("div",{className:"qf-welcome-screen-block__content",ref:k},"stack"===R&&React.createElement(s,{isPreview:h,attributes:t}),React.createElement("div",{className:o.css`
								margin-top: 25px;
								/* Ensure content follows the alignment too */
								text-align: inherit;
							`},(t?.label||"on"===g.mode)&&React.createElement("div",{className:l()("renderer-components-block-label",o.css`
											color: ${x.questionsColor};
											font-family: ${x.questionsLabelFont};
											/* Inherit text alignment */
											text-align: inherit;
											@media ( min-width: 768px ) {
												font-size: ${x.questionsLabelFontSize.lg} !important;
												line-height: ${x.questionsLabelLineHeight.lg} !important;
											}
											@media ( max-width: 767px ) {
												font-size: ${x.questionsLabelFontSize.sm} !important;
												line-height: ${x.questionsLabelLineHeight.sm} !important;
											}
										`)},"on"===g?.mode?React.createElement(g.editLabel,null):React.createElement(e.HTMLParser,{value:null!==(d=t?.label)&&void 0!==d?d:""})),(t?.description&&""!==t.description||"on"===g.mode)&&React.createElement("div",{className:l()("renderer-components-block-description",o.css`
												color: ${x.questionsColor};
												font-family: ${x.questionsDescriptionFont};
												/* Inherit text alignment */
												text-align: inherit;
												@media ( min-width: 768px ) {
													font-size: ${x.questionsDescriptionFontSize.lg} !important;
													line-height: ${x.questionsDescriptionLineHeight.lg} !important;
												}
												@media ( max-width: 767px ) {
													font-size: ${x.questionsDescriptionFontSize.sm} !important;
													line-height: ${x.questionsDescriptionLineHeight.sm} !important;
												}
											`)},"on"===g?.mode?React.createElement(g.editDescription,null):React.createElement(e.HTMLParser,{value:null!==(u=t.description)&&void 0!==u?u:""})),t.customHTML&&React.createElement("div",{className:l()("renderer-components-block-custom-html",o.css`
											color: ${x.questionsColor};
											/* Inherit text alignment */
											text-align: inherit;
										`),dangerouslySetInnerHTML:{__html:t?.customHTML}})),React.createElement(m,{theme:x,next:L,isSticky:b,buttonText:t.buttonText,align:E}))),"stack"!==R&&React.createElement("div",{className:l()("renderer-core-block-attachment-wrapper",o.css`
								img {
									object-position: ${100*t?.attachmentFocalPoint?.x}%
										${100*t?.attachmentFocalPoint?.y}%;
								}
							`)},React.createElement(s,{isPreview:h,attributes:t}))))}},{name:u}={name:"welcome-screen",attributes:{buttonText:{type:"string",default:"Let's start!"}},supports:{editable:!1,required:!1,attachment:!0,description:!0,logic:!1,align:!0}};(0,t.setBlockRendererSettings)(u,d)})(),(window.qf=window.qf||{}).blocklibWelcomeScreenBlockRenderer={}})();