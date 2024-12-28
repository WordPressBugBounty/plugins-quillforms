(()=>{var t={6942:(t,r)=>{var e;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var t="",r=0;r<arguments.length;r++){var e=arguments[r];e&&(t=o(t,i(e)))}return t}function i(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var e in t)a.call(t,e)&&t[e]&&(r=o(r,e));return r}function o(t,r){return r?t?t+" "+r:t+r:t}t.exports?(n.default=n,t.exports=n):void 0===(e=function(){return n}.apply(r,[]))||(t.exports=e)}()}},r={};function e(a){var n=r[a];if(void 0!==n)return n.exports;var i=r[a]={exports:{}};return t[a](i,i.exports,e),i.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),(()=>{"use strict";const t=window.qf.blocks,r=window.React,a=window.qf.rendererCore;function n(t){return n="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(t)}var i=/^\s+/,o=/\s+$/;function s(t,r){if(r=r||{},(t=t||"")instanceof s)return t;if(!(this instanceof s))return new s(t,r);var e=function(t){var r,e,a,s={r:0,g:0,b:0},h=1,f=null,u=null,l=null,c=!1,d=!1;return"string"==typeof t&&(t=function(t){t=t.replace(i,"").replace(o,"").toLowerCase();var r,e=!1;if(A[t])t=A[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(r=$.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=$.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=$.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=$.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=$.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=$.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=$.hex8.exec(t))?{r:F(r[1]),g:F(r[2]),b:F(r[3]),a:z(r[4]),format:e?"name":"hex8"}:(r=$.hex6.exec(t))?{r:F(r[1]),g:F(r[2]),b:F(r[3]),format:e?"name":"hex"}:(r=$.hex4.exec(t))?{r:F(r[1]+""+r[1]),g:F(r[2]+""+r[2]),b:F(r[3]+""+r[3]),a:z(r[4]+""+r[4]),format:e?"name":"hex8"}:!!(r=$.hex3.exec(t))&&{r:F(r[1]+""+r[1]),g:F(r[2]+""+r[2]),b:F(r[3]+""+r[3]),format:e?"name":"hex"}}(t)),"object"==n(t)&&(j(t.r)&&j(t.g)&&j(t.b)?(r=t.r,e=t.g,a=t.b,s={r:255*R(r,255),g:255*R(e,255),b:255*R(a,255)},c=!0,d="%"===String(t.r).substr(-1)?"prgb":"rgb"):j(t.h)&&j(t.s)&&j(t.v)?(f=q(t.s),u=q(t.v),s=function(t,r,e){t=6*R(t,360),r=R(r,100),e=R(e,100);var a=Math.floor(t),n=t-a,i=e*(1-r),o=e*(1-n*r),s=e*(1-(1-n)*r),h=a%6;return{r:255*[e,o,i,i,s,e][h],g:255*[s,e,e,o,i,i][h],b:255*[i,i,s,e,e,o][h]}}(t.h,f,u),c=!0,d="hsv"):j(t.h)&&j(t.s)&&j(t.l)&&(f=q(t.s),l=q(t.l),s=function(t,r,e){var a,n,i;function o(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(r-t)*e:e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}if(t=R(t,360),r=R(r,100),e=R(e,100),0===r)a=n=i=e;else{var s=e<.5?e*(1+r):e+r-e*r,h=2*e-s;a=o(h,s,t+1/3),n=o(h,s,t),i=o(h,s,t-1/3)}return{r:255*a,g:255*n,b:255*i}}(t.h,f,l),c=!0,d="hsl"),t.hasOwnProperty("a")&&(h=t.a)),h=S(h),{ok:c,format:t.format||d,r:Math.min(255,Math.max(s.r,0)),g:Math.min(255,Math.max(s.g,0)),b:Math.min(255,Math.max(s.b,0)),a:h}}(t);this._originalInput=t,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||e.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=e.ok}function h(t,r,e){t=R(t,255),r=R(r,255),e=R(e,255);var a,n,i=Math.max(t,r,e),o=Math.min(t,r,e),s=(i+o)/2;if(i==o)a=n=0;else{var h=i-o;switch(n=s>.5?h/(2-i-o):h/(i+o),i){case t:a=(r-e)/h+(r<e?6:0);break;case r:a=(e-t)/h+2;break;case e:a=(t-r)/h+4}a/=6}return{h:a,s:n,l:s}}function f(t,r,e){t=R(t,255),r=R(r,255),e=R(e,255);var a,n,i=Math.max(t,r,e),o=Math.min(t,r,e),s=i,h=i-o;if(n=0===i?0:h/i,i==o)a=0;else{switch(i){case t:a=(r-e)/h+(r<e?6:0);break;case r:a=(e-t)/h+2;break;case e:a=(t-r)/h+4}a/=6}return{h:a,s:n,v:s}}function u(t,r,e,a){var n=[C(Math.round(t).toString(16)),C(Math.round(r).toString(16)),C(Math.round(e).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function l(t,r,e,a){return[C(E(a)),C(Math.round(t).toString(16)),C(Math.round(r).toString(16)),C(Math.round(e).toString(16))].join("")}function c(t,r){r=0===r?0:r||10;var e=s(t).toHsl();return e.s-=r/100,e.s=H(e.s),s(e)}function d(t,r){r=0===r?0:r||10;var e=s(t).toHsl();return e.s+=r/100,e.s=H(e.s),s(e)}function g(t){return s(t).desaturate(100)}function b(t,r){r=0===r?0:r||10;var e=s(t).toHsl();return e.l+=r/100,e.l=H(e.l),s(e)}function p(t,r){r=0===r?0:r||10;var e=s(t).toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-r/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-r/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-r/100*255))),s(e)}function m(t,r){r=0===r?0:r||10;var e=s(t).toHsl();return e.l-=r/100,e.l=H(e.l),s(e)}function _(t,r){var e=s(t).toHsl(),a=(e.h+r)%360;return e.h=a<0?360+a:a,s(e)}function v(t){var r=s(t).toHsl();return r.h=(r.h+180)%360,s(r)}function y(t,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var e=s(t).toHsl(),a=[s(t)],n=360/r,i=1;i<r;i++)a.push(s({h:(e.h+i*n)%360,s:e.s,l:e.l}));return a}function x(t){var r=s(t).toHsl(),e=r.h;return[s(t),s({h:(e+72)%360,s:r.s,l:r.l}),s({h:(e+216)%360,s:r.s,l:r.l})]}function M(t,r,e){r=r||6,e=e||30;var a=s(t).toHsl(),n=360/e,i=[s(t)];for(a.h=(a.h-(n*r>>1)+720)%360;--r;)a.h=(a.h+n)%360,i.push(s(a));return i}function w(t,r){r=r||6;for(var e=s(t).toHsv(),a=e.h,n=e.s,i=e.v,o=[],h=1/r;r--;)o.push(s({h:a,s:n,v:i})),i=(i+h)%1;return o}s.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,e,a=this.toRgb();return t=a.r/255,r=a.g/255,e=a.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))},setAlpha:function(t){return this._a=S(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=f(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=f(this._r,this._g,this._b),r=Math.round(360*t.h),e=Math.round(100*t.s),a=Math.round(100*t.v);return 1==this._a?"hsv("+r+", "+e+"%, "+a+"%)":"hsva("+r+", "+e+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=h(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=h(this._r,this._g,this._b),r=Math.round(360*t.h),e=Math.round(100*t.s),a=Math.round(100*t.l);return 1==this._a?"hsl("+r+", "+e+"%, "+a+"%)":"hsla("+r+", "+e+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return u(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,r,e,a,n){var i=[C(Math.round(t).toString(16)),C(Math.round(r).toString(16)),C(Math.round(e).toString(16)),C(E(a))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*R(this._r,255))+"%",g:Math.round(100*R(this._g,255))+"%",b:Math.round(100*R(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*R(this._r,255))+"%, "+Math.round(100*R(this._g,255))+"%, "+Math.round(100*R(this._b,255))+"%)":"rgba("+Math.round(100*R(this._r,255))+"%, "+Math.round(100*R(this._g,255))+"%, "+Math.round(100*R(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(k[u(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+l(this._r,this._g,this._b,this._a),e=r,a=this._gradientType?"GradientType = 1, ":"";if(t){var n=s(t);e="#"+l(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+r+",endColorstr="+e+")"},toString:function(t){var r=!!t;t=t||this._format;var e=!1,a=this._a<1&&this._a>=0;return r||!a||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(e=this.toRgbString()),"prgb"===t&&(e=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),"name"===t&&(e=this.toName()),"hsl"===t&&(e=this.toHslString()),"hsv"===t&&(e=this.toHsvString()),e||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return s(this.toString())},_applyModification:function(t,r){var e=t.apply(null,[this].concat([].slice.call(r)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(b,arguments)},brighten:function(){return this._applyModification(p,arguments)},darken:function(){return this._applyModification(m,arguments)},desaturate:function(){return this._applyModification(c,arguments)},saturate:function(){return this._applyModification(d,arguments)},greyscale:function(){return this._applyModification(g,arguments)},spin:function(){return this._applyModification(_,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(M,arguments)},complement:function(){return this._applyCombination(v,arguments)},monochromatic:function(){return this._applyCombination(w,arguments)},splitcomplement:function(){return this._applyCombination(x,arguments)},triad:function(){return this._applyCombination(y,[3])},tetrad:function(){return this._applyCombination(y,[4])}},s.fromRatio=function(t,r){if("object"==n(t)){var e={};for(var a in t)t.hasOwnProperty(a)&&(e[a]="a"===a?t[a]:q(t[a]));t=e}return s(t,r)},s.equals=function(t,r){return!(!t||!r)&&s(t).toRgbString()==s(r).toRgbString()},s.random=function(){return s.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},s.mix=function(t,r,e){e=0===e?0:e||50;var a=s(t).toRgb(),n=s(r).toRgb(),i=e/100;return s({r:(n.r-a.r)*i+a.r,g:(n.g-a.g)*i+a.g,b:(n.b-a.b)*i+a.b,a:(n.a-a.a)*i+a.a})},s.readability=function(t,r){var e=s(t),a=s(r);return(Math.max(e.getLuminance(),a.getLuminance())+.05)/(Math.min(e.getLuminance(),a.getLuminance())+.05)},s.isReadable=function(t,r,e){var a,n,i,o,h,f=s.readability(t,r);switch(n=!1,(i=e,"AA"!==(o=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==o&&(o="AA"),"small"!==(h=(i.size||"small").toLowerCase())&&"large"!==h&&(h="small"),a={level:o,size:h}).level+a.size){case"AAsmall":case"AAAlarge":n=f>=4.5;break;case"AAlarge":n=f>=3;break;case"AAAsmall":n=f>=7}return n},s.mostReadable=function(t,r,e){var a,n,i,o,h=null,f=0;n=(e=e||{}).includeFallbackColors,i=e.level,o=e.size;for(var u=0;u<r.length;u++)(a=s.readability(t,r[u]))>f&&(f=a,h=s(r[u]));return s.isReadable(t,h,{level:i,size:o})||!n?h:(e.includeFallbackColors=!1,s.mostReadable(t,["#fff","#000"],e))};var A=s.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},k=s.hexNames=function(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[t[e]]=e);return r}(A);function S(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function R(t,r){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var e=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=Math.min(r,Math.max(0,parseFloat(t))),e&&(t=parseInt(t*r,10)/100),Math.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function H(t){return Math.min(1,Math.max(0,t))}function F(t){return parseInt(t,16)}function C(t){return 1==t.length?"0"+t:""+t}function q(t){return t<=1&&(t=100*t+"%"),t}function E(t){return Math.round(255*parseFloat(t)).toString(16)}function z(t){return F(t)/255}var O,I,N,$=(I="[\\s|\\(]+("+(O="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+O+")[,|\\s]+("+O+")\\s*\\)?",N="[\\s|\\(]+("+O+")[,|\\s]+("+O+")[,|\\s]+("+O+")[,|\\s]+("+O+")\\s*\\)?",{CSS_UNIT:new RegExp(O),rgb:new RegExp("rgb"+I),rgba:new RegExp("rgba"+N),hsl:new RegExp("hsl"+I),hsla:new RegExp("hsla"+N),hsv:new RegExp("hsv"+I),hsva:new RegExp("hsva"+N),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function j(t){return!!$.CSS_UNIT.exec(t)}const P=window.emotion;var T=e(6942),L=e.n(T);const B={display:t=>{const{id:e,attributes:n,setIsValid:i,setIsAnswered:o,setValidationErr:h,showNextBtn:f,val:u,setVal:l,showErrMsg:c,inputRef:d,isTouchScreen:g,setFooterDisplay:b,isPreview:p,isReviewing:m}=t,_=(0,a.useMessages)(),v=(0,a.useBlockTheme)(n.themeId),y=s(v.answersColor),{required:x,placeholder:M}=n,w=t=>{var r;!0!==x||t&&""!==t?(r=t,!new RegExp("^(https?:\\/\\/)?((([a-z\\d]([a-z\\d-]*[a-z\\d])*)\\.)+[a-z]{2,}|((\\d{1,3}\\.){3}\\d{1,3}))(\\:\\d+)?(\\/[-a-z\\d%_.~+]*)*(\\?[;&a-z\\d%_.~+=-]*)?(\\#[-a-z\\d_]*)?$","i").test(r)&&t?(i(!1),h(_["label.errorAlert.url"])):(i(!0),h(null))):(i(!1),h(_["label.errorAlert.required"]))};return(0,r.useEffect)((()=>{!p&&m||w(u)}),[n]),React.createElement("input",{ref:d,className:L()(P.css`
					& {
						width: 100%;
						border: none;
						outline: none;
						padding-top:0;
						padding-bottom: 8px;
						background: transparent;
						transition: box-shadow 0.1s ease-out 0s;
						box-shadow: ${y.setAlpha(.3).toString()}
							0px 1px !important;
					}

					&::placeholder {
						opacity: 0.3;
						/* Chrome, Firefox, Opera, Safari 10.1+ */
						color: ${v.answersColor};
					}

					&:-ms-input-placeholder {
						opacity: 0.3;
						/* Internet Explorer 10-11 */
						color: ${v.answersColor};
					}

					&::-ms-input-placeholder {
						opacity: 0.3;
						/* Microsoft Edge */
						color: ${v.answersColor};
					}

					&:focus {
						box-shadow: ${y.setAlpha(1).toString()}
							0px 2px !important;
					}

					color: ${v.answersColor};
				`),id:"website-"+e,placeholder:!1===M?"https://":M,onChange:t=>{const r=t.target.value;w(r),l(r),c(!1),""!==r?(f(!0),o(!0)):o(!1)},value:u&&u.length>0?u:"",onFocus:()=>{g&&b(!1)},onBlur:()=>{g&&b(!0)},autoComplete:"off"})}},{name:V}={name:"website",supports:{editable:!0,required:!0,attachment:!0,description:!0,placeholder:!0,defaultValue:!0,logic:!0,theme:!0},attributes:{},logicalOperators:["is","is_not","starts_with","contains","ends_with","not_contains"]};(0,t.setBlockRendererSettings)(V,B)})(),(window.qf=window.qf||{}).blocklibWebsiteBlockRenderer={}})();