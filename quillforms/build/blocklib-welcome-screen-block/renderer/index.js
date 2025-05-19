(()=>{var t={46942:(t,e)=>{var o;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var t="",e=0;e<arguments.length;e++){var o=arguments[e];o&&(t=i(t,r(o)))}return t}function r(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var e="";for(var o in t)a.call(t,o)&&t[o]&&(e=i(e,o));return e}function i(t,e){return e?t?t+" "+e:t+e:t}t.exports?(n.default=n,t.exports=n):void 0===(o=function(){return n}.apply(e,[]))||(t.exports=o)}()}},e={};function o(a){var n=e[a];if(void 0!==n)return n.exports;var r=e[a]={exports:{}};return t[a](r,r.exports,o),r.exports}o.n=t=>{var e=t&&t.__esModule?()=>t.default:()=>t;return o.d(e,{a:e}),e},o.d=(t,e)=>{for(var a in e)o.o(e,a)&&!o.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:e[a]})},o.o=(t,e)=>Object.prototype.hasOwnProperty.call(t,e),(()=>{"use strict";const t=window.qf.blocks,e=window.React,a=window.qf.rendererCore,n=window.wp.data,r=window.lodash,i=window.emotion;var c=o(46942),l=o.n(c);const s=({attributes:t,isPreview:e})=>{if(!t.attachment||0===Object.keys(t.attachment).length)return e?React.createElement("div",{className:l()("renderer-core-block-attachment",i.css`
							${"split-right"!==t.layout&&"split-left"!==t.layout&&`\n\t\t\t\t\t\t\tmax-width: ${t?.attachmentMaxWidth};\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t\t`}
							overflow: hidden;
						`)},React.createElement("div",{className:"renderer-core-block-attachment__placeholder"},React.createElement("svg",{className:"renderer-core-block-attachment__placeholder-icon",focusable:"false",viewBox:"0 0 24 24",role:"presentation"},React.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),React.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5 5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})))):null;const{attachment:o,layout:a}=t,n="split-left"===a||"split-right"===a;if("video"===o.type&&o.url){const e=o.url.match(/(?:youtu.be\/|youtube.com\/(?:embed\/|v\/|watch\?v=|watch\?.+&v=))([\w-]{11})/),a=e?e[1]:null;if(!a)return null;const r="rel=0&iv_load_policy=3&modestbranding=1",c=n?`https://www.youtube.com/embed/${a}?autoplay=1&mute=1&controls=0&showinfo=0&${r}`:`https://www.youtube.com/embed/${a}?autoplay=0&controls=1&${r}`;return React.createElement("div",{className:l()("renderer-core-block-attachment",i.css`
						${!n&&`\n\t\t\t\t\t\t\tmax-width: ${t?.attachmentMaxWidth||"100%"};\n\t\t\t\t\t\t\tmargin: auto;\n\t\t\t\t\t\t\ttext-align: center;\n\t\t\t\t\t\t`}
						${n&&"\n\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\tposition: relative;\n\t\t\t\t\t\t"}
						overflow: hidden;
					`)},React.createElement("div",{className:i.css`
					position: relative;
					width: 100%;
					height: ${n?"100%":"315px"};
					overflow: hidden;
				`},React.createElement("iframe",{width:"100%",height:"100%",src:c,frameBorder:"0",allow:"accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture",allowFullScreen:!0,className:i.css`
							position: absolute;
							top: 0;
							left: 0;
							width: 100%;
							height: 100%;
							${!n&&`border-radius: ${t.attachmentBorderRadius||"0"};`}
						`}),n&&React.createElement("div",{className:i.css`
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 1;
							background: transparent;
							pointer-events: auto;
						`})))}return React.createElement("div",{className:l()("renderer-core-block-attachment",i.css`
					${"split-right"!==t.layout&&"split-left"!==t.layout&&`\n\t\t\t\t\tmax-width: ${t?.attachmentMaxWidth};\n\t\t\t\t\tmargin: auto;\n\t\t\t\t\ttext-align: center;\n\t\t\t\t\t`}
					overflow: hidden;
				`)},o&&o.url?React.createElement("img",{alt:o.alt||"",src:o.url,className:l()("renderer-core-block-attachment__image",i.css`
							${"split-right"!==t.layout&&"split-left"!==t.layout&&`border-radius: ${t.attachmentBorderRadius};\n\t\t\t\t\t\t\t margin: auto;\n\t\t\t\t\t\t\t`}
							${n&&"\n\t\t\t\t\t\t\t\theight: 100%;\n\t\t\t\t\t\t\t\twidth: 100%;\n\t\t\t\t\t\t\t\tobject-fit: cover;\n\t\t\t\t\t\t\t"}
						`)}):React.createElement(React.Fragment,null,e&&React.createElement("div",{className:"renderer-core-block-attachment__placeholder"},React.createElement("svg",{className:"renderer-core-block-attachment__placeholder-icon",focusable:"false",viewBox:"0 0 24 24",role:"presentation"},React.createElement("circle",{cx:"12",cy:"12",r:"3.2"}),React.createElement("path",{d:"M9 2L7.17 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2h-3.17L15 2H9zm3 15c-2.76 0-5-2.24-5 5s2.24-5 5-5 5 2.24 5 5-2.24 5-5 5z"})))))},m=({isSticky:t,buttonText:e,next:o,theme:n})=>{const r=(0,a.useMessages)(),c="ontouchstart"in window||navigator.maxTouchPoints>0||navigator.msMaxTouchPoints>0;return React.createElement("div",{className:l()("qf-welcome-screen-block__action-wrapper",{"is-sticky":t},i.css`
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
				`)},React.createElement("div",{className:"qf-welcome-screen-block__action"},React.createElement(a.Button,{theme:n,onClick:o},e)),React.createElement("div",{className:l()("qf-welcome-screen-block__action-helper-text",i.css`
						color: ${n.questionsColor};
						font-size: 12px;
					`)},!c&&React.createElement(a.HTMLParser,{value:r["label.hintText.enter"]})))},d={display:({attributes:t})=>{var o,c;const{isPreview:d,deviceWidth:u,editor:p}=(0,a.useFormContext)(),[h,f]=(0,e.useState)(!1),[b,w]=(0,e.useState)(!1),g=(0,a.useBlockTheme)(t.themeId),v=(0,e.useRef)(),y=(0,e.useRef)(),{goToBlock:x}=(0,n.useDispatch)("quillForms/renderer-core"),{walkPath:k}=(0,n.useSelect)((t=>({walkPath:t("quillForms/renderer-core").getWalkPath()})));(0,e.useEffect)((()=>(f(!0),()=>f(!1))),[]);let R=r.noop;return k[0]&&k[0].id&&"off"===p.mode&&(R=()=>x(k[0].id)),React.createElement("div",{className:i.css`
				height: 100%;
				position: relative;
				outline: none;
			`,ref:v,tabIndex:"0",onKeyDown:t=>{"Enter"===t.key&&(t.stopPropagation(),R())}},React.createElement("div",{className:l()("qf-welcome-screen-block__wrapper","blocktype-welcome-screen-block",`renderer-core-block-${t?.layout}-layout`,{"with-sticky-footer":b,active:h},i.css`
						& {
							position: absolute;
							top: 0;
							left: 0;
							right: 0;
							bottom: 0;
							z-index: 6;
							display: flex;
							${("stack"===t.layout||"mobile"===u&&("float-left"===t.layout||"float-right"===t.layout))&&"flex-direction: column;\n\t\t\t\t\t\t\t.qf-welcome-screen-block__content-wrapper {\n\n\t\t\t\t\t\t\t\tposition: absolute;\n\t\t\t\t\t\t\t\ttop: 0;\n\t\t\t\t\t\t\t\tright: 0;\n\t\t\t\t\t\t\t\tleft: 0;\n\t\t\t\t\t\t\t}"}
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
					`)},React.createElement("div",{className:"qf-welcome-screen-block__content-wrapper"},React.createElement("div",{className:"qf-welcome-screen-block__content",ref:y},("stack"===t.layout||"mobile"===u&&("float-left"===t.layout||"float-right"===t.layout))&&React.createElement(s,{isPreview:d,attributes:t}),React.createElement("div",{className:i.css`
								margin-top: 25px;
							`},(t?.label||"on"===p.mode)&&React.createElement("div",{className:l()("renderer-components-block-label",i.css`
										color: ${g.questionsColor};
										font-family: ${g.questionsLabelFont};
										@media ( min-width: 768px ) {
											font-size: ${g.questionsLabelFontSize.lg} !important;
											line-height: ${g.questionsLabelLineHeight.lg} !important;
										}
										@media ( max-width: 767px ) {
											font-size: ${g.questionsLabelFontSize.sm} !important;
											line-height: ${g.questionsLabelLineHeight.sm} !important;
										}
									`)},"on"===p?.mode?React.createElement(p.editLabel,null):React.createElement(a.HTMLParser,{value:null!==(o=t?.label)&&void 0!==o?o:""})),(t?.description&&""!==t.description||"on"===p.mode)&&React.createElement("div",{className:l()("renderer-components-block-description",i.css`
												color: ${g.questionsColor};
												font-family: ${g.questionsDescriptionFont};
												@media ( min-width: 768px ) {
													font-size: ${g.questionsDescriptionFontSize.lg} !important;
													line-height: ${g.questionsDescriptionLineHeight.lg} !important;
												}
												@media ( max-width: 767px ) {
													font-size: ${g.questionsDescriptionFontSize.sm} !important;
													line-height: ${g.questionsDescriptionLineHeight.sm} !important;
												}
											`)},"on"===p?.mode?React.createElement(p.editDescription,null):React.createElement(a.HTMLParser,{value:null!==(c=t.description)&&void 0!==c?c:""})),t.customHTML&&React.createElement("div",{className:l()("renderer-components-block-custom-html",i.css`
											color: ${g.questionsColor};
										`),dangerouslySetInnerHTML:{__html:t?.customHTML}})),React.createElement(m,{theme:g,next:R,isSticky:b,buttonText:t.buttonText}))),"stack"!==t.layout&&React.createElement("div",{className:l()("renderer-core-block-attachment-wrapper",i.css`
								img {
									object-position: ${100*t?.attachmentFocalPoint?.x}%
										${100*t?.attachmentFocalPoint?.y}%;
								}
							`)},React.createElement(s,{isPreview:d,attributes:t}))))}},{name:u}={name:"welcome-screen",attributes:{buttonText:{type:"string",default:"Let's start!"}},supports:{editable:!1,required:!1,attachment:!0,description:!0,logic:!1}};(0,t.setBlockRendererSettings)(u,d)})(),(window.qf=window.qf||{}).blocklibWelcomeScreenBlockRenderer={}})();