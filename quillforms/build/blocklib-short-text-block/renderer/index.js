(()=>{var t={46942:(t,r)=>{var e;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var t="",r=0;r<arguments.length;r++){var e=arguments[r];e&&(t=i(t,o(e)))}return t}function o(t){if("string"==typeof t||"number"==typeof t)return t;if("object"!=typeof t)return"";if(Array.isArray(t))return n.apply(null,t);if(t.toString!==Object.prototype.toString&&!t.toString.toString().includes("[native code]"))return t.toString();var r="";for(var e in t)a.call(t,e)&&t[e]&&(r=i(r,e));return r}function i(t,r){return r?t?t+" "+r:t+r:t}t.exports?(n.default=n,t.exports=n):void 0===(e=function(){return n}.apply(r,[]))||(t.exports=e)}()}},r={};function e(a){var n=r[a];if(void 0!==n)return n.exports;var o=r[a]={exports:{}};return t[a](o,o.exports,e),o.exports}e.n=t=>{var r=t&&t.__esModule?()=>t.default:()=>t;return e.d(r,{a:r}),r},e.d=(t,r)=>{for(var a in r)e.o(r,a)&&!e.o(t,a)&&Object.defineProperty(t,a,{enumerable:!0,get:r[a]})},e.o=(t,r)=>Object.prototype.hasOwnProperty.call(t,r),e.r=t=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})};var a={};(()=>{"use strict";e.r(a),e.d(a,{rendererSettings:()=>D});const t=window.qf.blocks,r=window.React,n=window.qf.rendererCore;function o(t){return o="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},o(t)}var i=/^\s+/,s=/\s+$/;function h(t,r){if(r=r||{},(t=t||"")instanceof h)return t;if(!(this instanceof h))return new h(t,r);var e=function(t){var r,e,a,n={r:0,g:0,b:0},h=1,f=null,u=null,l=null,c=!1,d=!1;return"string"==typeof t&&(t=function(t){t=t.replace(i,"").replace(s,"").toLowerCase();var r,e=!1;if(k[t])t=k[t],e=!0;else if("transparent"==t)return{r:0,g:0,b:0,a:0,format:"name"};return(r=P.rgb.exec(t))?{r:r[1],g:r[2],b:r[3]}:(r=P.rgba.exec(t))?{r:r[1],g:r[2],b:r[3],a:r[4]}:(r=P.hsl.exec(t))?{h:r[1],s:r[2],l:r[3]}:(r=P.hsla.exec(t))?{h:r[1],s:r[2],l:r[3],a:r[4]}:(r=P.hsv.exec(t))?{h:r[1],s:r[2],v:r[3]}:(r=P.hsva.exec(t))?{h:r[1],s:r[2],v:r[3],a:r[4]}:(r=P.hex8.exec(t))?{r:F(r[1]),g:F(r[2]),b:F(r[3]),a:T(r[4]),format:e?"name":"hex8"}:(r=P.hex6.exec(t))?{r:F(r[1]),g:F(r[2]),b:F(r[3]),format:e?"name":"hex"}:(r=P.hex4.exec(t))?{r:F(r[1]+""+r[1]),g:F(r[2]+""+r[2]),b:F(r[3]+""+r[3]),a:T(r[4]+""+r[4]),format:e?"name":"hex8"}:!!(r=P.hex3.exec(t))&&{r:F(r[1]+""+r[1]),g:F(r[2]+""+r[2]),b:F(r[3]+""+r[3]),format:e?"name":"hex"}}(t)),"object"==o(t)&&($(t.r)&&$(t.g)&&$(t.b)?(r=t.r,e=t.g,a=t.b,n={r:255*R(r,255),g:255*R(e,255),b:255*R(a,255)},c=!0,d="%"===String(t.r).substr(-1)?"prgb":"rgb"):$(t.h)&&$(t.s)&&$(t.v)?(f=O(t.s),u=O(t.v),n=function(t,r,e){t=6*R(t,360),r=R(r,100),e=R(e,100);var a=Math.floor(t),n=t-a,o=e*(1-r),i=e*(1-n*r),s=e*(1-(1-n)*r),h=a%6;return{r:255*[e,i,o,o,s,e][h],g:255*[s,e,e,i,o,o][h],b:255*[o,o,s,e,e,i][h]}}(t.h,f,u),c=!0,d="hsv"):$(t.h)&&$(t.s)&&$(t.l)&&(f=O(t.s),l=O(t.l),n=function(t,r,e){var a,n,o;function i(t,r,e){return e<0&&(e+=1),e>1&&(e-=1),e<1/6?t+6*(r-t)*e:e<.5?r:e<2/3?t+(r-t)*(2/3-e)*6:t}if(t=R(t,360),r=R(r,100),e=R(e,100),0===r)a=n=o=e;else{var s=e<.5?e*(1+r):e+r-e*r,h=2*e-s;a=i(h,s,t+1/3),n=i(h,s,t),o=i(h,s,t-1/3)}return{r:255*a,g:255*n,b:255*o}}(t.h,f,l),c=!0,d="hsl"),t.hasOwnProperty("a")&&(h=t.a)),h=C(h),{ok:c,format:t.format||d,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:h}}(t);this._originalInput=t,this._r=e.r,this._g=e.g,this._b=e.b,this._a=e.a,this._roundA=Math.round(100*this._a)/100,this._format=r.format||e.format,this._gradientType=r.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=e.ok}function f(t,r,e){t=R(t,255),r=R(r,255),e=R(e,255);var a,n,o=Math.max(t,r,e),i=Math.min(t,r,e),s=(o+i)/2;if(o==i)a=n=0;else{var h=o-i;switch(n=s>.5?h/(2-o-i):h/(o+i),o){case t:a=(r-e)/h+(r<e?6:0);break;case r:a=(e-t)/h+2;break;case e:a=(t-r)/h+4}a/=6}return{h:a,s:n,l:s}}function u(t,r,e){t=R(t,255),r=R(r,255),e=R(e,255);var a,n,o=Math.max(t,r,e),i=Math.min(t,r,e),s=o,h=o-i;if(n=0===o?0:h/o,o==i)a=0;else{switch(o){case t:a=(r-e)/h+(r<e?6:0);break;case r:a=(e-t)/h+2;break;case e:a=(t-r)/h+4}a/=6}return{h:a,s:n,v:s}}function l(t,r,e,a){var n=[q(Math.round(t).toString(16)),q(Math.round(r).toString(16)),q(Math.round(e).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function c(t,r,e,a){return[q(E(a)),q(Math.round(t).toString(16)),q(Math.round(r).toString(16)),q(Math.round(e).toString(16))].join("")}function d(t,r){r=0===r?0:r||10;var e=h(t).toHsl();return e.s-=r/100,e.s=H(e.s),h(e)}function g(t,r){r=0===r?0:r||10;var e=h(t).toHsl();return e.s+=r/100,e.s=H(e.s),h(e)}function b(t){return h(t).desaturate(100)}function p(t,r){r=0===r?0:r||10;var e=h(t).toHsl();return e.l+=r/100,e.l=H(e.l),h(e)}function m(t,r){r=0===r?0:r||10;var e=h(t).toRgb();return e.r=Math.max(0,Math.min(255,e.r-Math.round(-r/100*255))),e.g=Math.max(0,Math.min(255,e.g-Math.round(-r/100*255))),e.b=Math.max(0,Math.min(255,e.b-Math.round(-r/100*255))),h(e)}function _(t,r){r=0===r?0:r||10;var e=h(t).toHsl();return e.l-=r/100,e.l=H(e.l),h(e)}function v(t,r){var e=h(t).toHsl(),a=(e.h+r)%360;return e.h=a<0?360+a:a,h(e)}function y(t){var r=h(t).toHsl();return r.h=(r.h+180)%360,h(r)}function x(t,r){if(isNaN(r)||r<=0)throw new Error("Argument to polyad must be a positive number");for(var e=h(t).toHsl(),a=[h(t)],n=360/r,o=1;o<r;o++)a.push(h({h:(e.h+o*n)%360,s:e.s,l:e.l}));return a}function M(t){var r=h(t).toHsl(),e=r.h;return[h(t),h({h:(e+72)%360,s:r.s,l:r.l}),h({h:(e+216)%360,s:r.s,l:r.l})]}function w(t,r,e){r=r||6,e=e||30;var a=h(t).toHsl(),n=360/e,o=[h(t)];for(a.h=(a.h-(n*r>>1)+720)%360;--r;)a.h=(a.h+n)%360,o.push(h(a));return o}function A(t,r){r=r||6;for(var e=h(t).toHsv(),a=e.h,n=e.s,o=e.v,i=[],s=1/r;r--;)i.push(h({h:a,s:n,v:o})),o=(o+s)%1;return i}h.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var t=this.toRgb();return(299*t.r+587*t.g+114*t.b)/1e3},getLuminance:function(){var t,r,e,a=this.toRgb();return t=a.r/255,r=a.g/255,e=a.b/255,.2126*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.7152*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))+.0722*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))},setAlpha:function(t){return this._a=C(t),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var t=u(this._r,this._g,this._b);return{h:360*t.h,s:t.s,v:t.v,a:this._a}},toHsvString:function(){var t=u(this._r,this._g,this._b),r=Math.round(360*t.h),e=Math.round(100*t.s),a=Math.round(100*t.v);return 1==this._a?"hsv("+r+", "+e+"%, "+a+"%)":"hsva("+r+", "+e+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var t=f(this._r,this._g,this._b);return{h:360*t.h,s:t.s,l:t.l,a:this._a}},toHslString:function(){var t=f(this._r,this._g,this._b),r=Math.round(360*t.h),e=Math.round(100*t.s),a=Math.round(100*t.l);return 1==this._a?"hsl("+r+", "+e+"%, "+a+"%)":"hsla("+r+", "+e+"%, "+a+"%, "+this._roundA+")"},toHex:function(t){return l(this._r,this._g,this._b,t)},toHexString:function(t){return"#"+this.toHex(t)},toHex8:function(t){return function(t,r,e,a,n){var o=[q(Math.round(t).toString(16)),q(Math.round(r).toString(16)),q(Math.round(e).toString(16)),q(E(a))];return n&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this._r,this._g,this._b,this._a,t)},toHex8String:function(t){return"#"+this.toHex8(t)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*R(this._r,255))+"%",g:Math.round(100*R(this._g,255))+"%",b:Math.round(100*R(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*R(this._r,255))+"%, "+Math.round(100*R(this._g,255))+"%, "+Math.round(100*R(this._b,255))+"%)":"rgba("+Math.round(100*R(this._r,255))+"%, "+Math.round(100*R(this._g,255))+"%, "+Math.round(100*R(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&(S[l(this._r,this._g,this._b,!0)]||!1)},toFilter:function(t){var r="#"+c(this._r,this._g,this._b,this._a),e=r,a=this._gradientType?"GradientType = 1, ":"";if(t){var n=h(t);e="#"+c(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+r+",endColorstr="+e+")"},toString:function(t){var r=!!t;t=t||this._format;var e=!1,a=this._a<1&&this._a>=0;return r||!a||"hex"!==t&&"hex6"!==t&&"hex3"!==t&&"hex4"!==t&&"hex8"!==t&&"name"!==t?("rgb"===t&&(e=this.toRgbString()),"prgb"===t&&(e=this.toPercentageRgbString()),"hex"!==t&&"hex6"!==t||(e=this.toHexString()),"hex3"===t&&(e=this.toHexString(!0)),"hex4"===t&&(e=this.toHex8String(!0)),"hex8"===t&&(e=this.toHex8String()),"name"===t&&(e=this.toName()),"hsl"===t&&(e=this.toHslString()),"hsv"===t&&(e=this.toHsvString()),e||this.toHexString()):"name"===t&&0===this._a?this.toName():this.toRgbString()},clone:function(){return h(this.toString())},_applyModification:function(t,r){var e=t.apply(null,[this].concat([].slice.call(r)));return this._r=e._r,this._g=e._g,this._b=e._b,this.setAlpha(e._a),this},lighten:function(){return this._applyModification(p,arguments)},brighten:function(){return this._applyModification(m,arguments)},darken:function(){return this._applyModification(_,arguments)},desaturate:function(){return this._applyModification(d,arguments)},saturate:function(){return this._applyModification(g,arguments)},greyscale:function(){return this._applyModification(b,arguments)},spin:function(){return this._applyModification(v,arguments)},_applyCombination:function(t,r){return t.apply(null,[this].concat([].slice.call(r)))},analogous:function(){return this._applyCombination(w,arguments)},complement:function(){return this._applyCombination(y,arguments)},monochromatic:function(){return this._applyCombination(A,arguments)},splitcomplement:function(){return this._applyCombination(M,arguments)},triad:function(){return this._applyCombination(x,[3])},tetrad:function(){return this._applyCombination(x,[4])}},h.fromRatio=function(t,r){if("object"==o(t)){var e={};for(var a in t)t.hasOwnProperty(a)&&(e[a]="a"===a?t[a]:O(t[a]));t=e}return h(t,r)},h.equals=function(t,r){return!(!t||!r)&&h(t).toRgbString()==h(r).toRgbString()},h.random=function(){return h.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},h.mix=function(t,r,e){e=0===e?0:e||50;var a=h(t).toRgb(),n=h(r).toRgb(),o=e/100;return h({r:(n.r-a.r)*o+a.r,g:(n.g-a.g)*o+a.g,b:(n.b-a.b)*o+a.b,a:(n.a-a.a)*o+a.a})},h.readability=function(t,r){var e=h(t),a=h(r);return(Math.max(e.getLuminance(),a.getLuminance())+.05)/(Math.min(e.getLuminance(),a.getLuminance())+.05)},h.isReadable=function(t,r,e){var a,n,o,i,s,f=h.readability(t,r);switch(n=!1,(o=e,"AA"!==(i=((o=o||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==i&&(i="AA"),"small"!==(s=(o.size||"small").toLowerCase())&&"large"!==s&&(s="small"),a={level:i,size:s}).level+a.size){case"AAsmall":case"AAAlarge":n=f>=4.5;break;case"AAlarge":n=f>=3;break;case"AAAsmall":n=f>=7}return n},h.mostReadable=function(t,r,e){var a,n,o,i,s=null,f=0;n=(e=e||{}).includeFallbackColors,o=e.level,i=e.size;for(var u=0;u<r.length;u++)(a=h.readability(t,r[u]))>f&&(f=a,s=h(r[u]));return h.isReadable(t,s,{level:o,size:i})||!n?s:(e.includeFallbackColors=!1,h.mostReadable(t,["#fff","#000"],e))};var k=h.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},S=h.hexNames=function(t){var r={};for(var e in t)t.hasOwnProperty(e)&&(r[t[e]]=e);return r}(k);function C(t){return t=parseFloat(t),(isNaN(t)||t<0||t>1)&&(t=1),t}function R(t,r){(function(t){return"string"==typeof t&&-1!=t.indexOf(".")&&1===parseFloat(t)})(t)&&(t="100%");var e=function(t){return"string"==typeof t&&-1!=t.indexOf("%")}(t);return t=Math.min(r,Math.max(0,parseFloat(t))),e&&(t=parseInt(t*r,10)/100),Math.abs(t-r)<1e-6?1:t%r/parseFloat(r)}function H(t){return Math.min(1,Math.max(0,t))}function F(t){return parseInt(t,16)}function q(t){return 1==t.length?"0"+t:""+t}function O(t){return t<=1&&(t=100*t+"%"),t}function E(t){return Math.round(255*parseFloat(t)).toString(16)}function T(t){return F(t)/255}var j,I,N,P=(I="[\\s|\\(]+("+(j="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+j+")[,|\\s]+("+j+")\\s*\\)?",N="[\\s|\\(]+("+j+")[,|\\s]+("+j+")[,|\\s]+("+j+")[,|\\s]+("+j+")\\s*\\)?",{CSS_UNIT:new RegExp(j),rgb:new RegExp("rgb"+I),rgba:new RegExp("rgba"+N),hsl:new RegExp("hsl"+I),hsla:new RegExp("hsla"+N),hsv:new RegExp("hsv"+I),hsva:new RegExp("hsva"+N),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function $(t){return!!P.CSS_UNIT.exec(t)}const L=window.emotion;var z=e(46942),B=e.n(z);const{name:V}={name:"short-text",supports:{editable:!0,required:!0,attachment:!0,description:!0,defaultValue:!0,placeholder:!0,logic:!0,theme:!0},attributes:{minCharacters:{type:["boolean","number"],default:!1},setMaxCharacters:{type:"boolean",default:!1},maxCharacters:{type:"number",multipleOf:1}},logicalOperators:["is","is_not","starts_with","ends_with","contains","not_contains"]},D={display:t=>{const{id:e,attributes:a,setIsValid:o,setIsAnswered:i,setValidationErr:s,showNextBtn:f,blockWithError:u,val:l,setVal:c,showErrMsg:d,inputRef:g,isTouchScreen:b,setFooterDisplay:p,isPreview:m,isReviewing:_}=t,v=(0,n.useMessages)(),y=(0,n.useBlockTheme)(a.themeId),x=h(y.answersColor),{minCharacters:M,maxCharacters:w,setMaxCharacters:A,required:k,placeholder:S}=a,C=t=>{!0!==k||t&&""!==t?A&&w>0&&t?.length>w?(o(!1),s(v["label.errorAlert.maxCharacters"])):!1!==M&&M>0&&t?.length<M?(o(!1),s(v["label.errorAlert.minCharacters"])):(o(!0),s(null)):(o(!1),s(v["label.errorAlert.required"]))};return(0,r.useEffect)((()=>{!m&&_||C(l)}),[a]),React.createElement("input",{ref:g,className:B()(L.css`
					& {
						width: 100%;
						border: none !important;
						border-radius: 0 !important;
						outline: none;
						padding-bottom: 8px;
						padding-top:0;
						background: transparent;
						transition: box-shadow 0.1s ease-out 0s;
						box-shadow: ${x.setAlpha(.3).toString()}
							0px 1px !important;
					}

					&::placeholder {
						opacity: 0.3;
						/* Chrome, Firefox, Opera, Safari 10.1+ */
						color: ${y.answersColor};
					}

					&:-ms-input-placeholder {
						opacity: 0.3;
						/* Internet Explorer 10-11 */
						color: ${y.answersColor};
					}

					&::-ms-input-placeholder {
						opacity: 0.3;
						/* Microsoft Edge */
						color: ${y.answersColor};
					}

					&:focus {
						box-shadow: ${x.setAlpha(1).toString()}
							0px 2px !important;
					}

					color: ${y.answersColor} !important;
					-webkit-appearance: none;
				`),id:"short-text-"+e,placeholder:!1===S?v["block.shortText.placeholder"]:S,onChange:t=>{const r=t.target.value;A&&w>0&&r.length>w?u(v["label.errorAlert.maxCharacters"]):(c(r),d(!1),C(r)),r&&""!==r?(i(!0),f(!0)):i(!1)},value:l?l.toString():"",onFocus:()=>{b&&p(!1)},onBlur:()=>{b&&p(!0)},autoComplete:"off"})}};(0,t.setBlockRendererSettings)(V,D)})(),(window.qf=window.qf||{}).blocklibShortTextBlockRenderer=a})();