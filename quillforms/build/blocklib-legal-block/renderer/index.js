(()=>{var e={6942:(e,t)=>{var r;!function(){"use strict";var a={}.hasOwnProperty;function n(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=o(e,i(r)))}return e}function i(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return n.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)a.call(e,r)&&e[r]&&(t=o(t,r));return t}function o(e,t){return t?e?e+" "+t:e+t:e}e.exports?(n.default=n,e.exports=n):void 0===(r=function(){return n}.apply(t,[]))||(e.exports=r)}()}},t={};function r(a){var n=t[a];if(void 0!==n)return n.exports;var i=t[a]={exports:{}};return e[a](i,i.exports,r),i.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var a in t)r.o(t,a)&&!r.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})};var a={};(()=>{"use strict";r.r(a);const e=window.qf.blocks,t=window.React,n=window.qf.rendererCore,i=window.lodash,o=window.qf.utils;var s=r(6942),l=r.n(s);const c=window.emotion;function h(e){return h="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},h(e)}var u=/^\s+/,f=/\s+$/;function d(e,t){if(t=t||{},(e=e||"")instanceof d)return e;if(!(this instanceof d))return new d(e,t);var r=function(e){var t,r,a,n={r:0,g:0,b:0},i=1,o=null,s=null,l=null,c=!1,d=!1;return"string"==typeof e&&(e=function(e){e=e.replace(u,"").replace(f,"").toLowerCase();var t,r=!1;if(E[e])e=E[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=B.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=B.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=B.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=B.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=B.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=B.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=B.hex8.exec(e))?{r:q(t[1]),g:q(t[2]),b:q(t[3]),a:I(t[4]),format:r?"name":"hex8"}:(t=B.hex6.exec(e))?{r:q(t[1]),g:q(t[2]),b:q(t[3]),format:r?"name":"hex"}:(t=B.hex4.exec(e))?{r:q(t[1]+""+t[1]),g:q(t[2]+""+t[2]),b:q(t[3]+""+t[3]),a:I(t[4]+""+t[4]),format:r?"name":"hex8"}:!!(t=B.hex3.exec(e))&&{r:q(t[1]+""+t[1]),g:q(t[2]+""+t[2]),b:q(t[3]+""+t[3]),format:r?"name":"hex"}}(e)),"object"==h(e)&&(D(e.r)&&D(e.g)&&D(e.b)?(t=e.r,r=e.g,a=e.b,n={r:255*T(t,255),g:255*T(r,255),b:255*T(a,255)},c=!0,d="%"===String(e.r).substr(-1)?"prgb":"rgb"):D(e.h)&&D(e.s)&&D(e.v)?(o=j(e.s),s=j(e.v),n=function(e,t,r){e=6*T(e,360),t=T(t,100),r=T(r,100);var a=Math.floor(e),n=e-a,i=r*(1-t),o=r*(1-n*t),s=r*(1-(1-n)*t),l=a%6;return{r:255*[r,o,i,i,s,r][l],g:255*[s,r,r,o,i,i][l],b:255*[i,i,s,r,r,o][l]}}(e.h,o,s),c=!0,d="hsv"):D(e.h)&&D(e.s)&&D(e.l)&&(o=j(e.s),l=j(e.l),n=function(e,t,r){var a,n,i;function o(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=T(e,360),t=T(t,100),r=T(r,100),0===t)a=n=i=r;else{var s=r<.5?r*(1+t):r+t-r*t,l=2*r-s;a=o(l,s,e+1/3),n=o(l,s,e),i=o(l,s,e-1/3)}return{r:255*a,g:255*n,b:255*i}}(e.h,o,l),c=!0,d="hsl"),e.hasOwnProperty("a")&&(i=e.a)),i=F(i),{ok:c,format:e.format||d,r:Math.min(255,Math.max(n.r,0)),g:Math.min(255,Math.max(n.g,0)),b:Math.min(255,Math.max(n.b,0)),a:i}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function g(e,t,r){e=T(e,255),t=T(t,255),r=T(r,255);var a,n,i=Math.max(e,t,r),o=Math.min(e,t,r),s=(i+o)/2;if(i==o)a=n=0;else{var l=i-o;switch(n=s>.5?l/(2-i-o):l/(i+o),i){case e:a=(t-r)/l+(t<r?6:0);break;case t:a=(r-e)/l+2;break;case r:a=(e-t)/l+4}a/=6}return{h:a,s:n,l:s}}function p(e,t,r){e=T(e,255),t=T(t,255),r=T(r,255);var a,n,i=Math.max(e,t,r),o=Math.min(e,t,r),s=i,l=i-o;if(n=0===i?0:l/i,i==o)a=0;else{switch(i){case e:a=(t-r)/l+(t<r?6:0);break;case t:a=(r-e)/l+2;break;case r:a=(e-t)/l+4}a/=6}return{h:a,s:n,v:s}}function b(e,t,r,a){var n=[N(Math.round(e).toString(16)),N(Math.round(t).toString(16)),N(Math.round(r).toString(16))];return a&&n[0].charAt(0)==n[0].charAt(1)&&n[1].charAt(0)==n[1].charAt(1)&&n[2].charAt(0)==n[2].charAt(1)?n[0].charAt(0)+n[1].charAt(0)+n[2].charAt(0):n.join("")}function m(e,t,r,a){return[N(O(a)),N(Math.round(e).toString(16)),N(Math.round(t).toString(16)),N(Math.round(r).toString(16))].join("")}function _(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.s-=t/100,r.s=L(r.s),d(r)}function v(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.s+=t/100,r.s=L(r.s),d(r)}function y(e){return d(e).desaturate(100)}function x(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.l+=t/100,r.l=L(r.l),d(r)}function w(e,t){t=0===t?0:t||10;var r=d(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-t/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-t/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-t/100*255))),d(r)}function k(e,t){t=0===t?0:t||10;var r=d(e).toHsl();return r.l-=t/100,r.l=L(r.l),d(r)}function M(e,t){var r=d(e).toHsl(),a=(r.h+t)%360;return r.h=a<0?360+a:a,d(r)}function A(e){var t=d(e).toHsl();return t.h=(t.h+180)%360,d(t)}function S(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var r=d(e).toHsl(),a=[d(e)],n=360/t,i=1;i<t;i++)a.push(d({h:(r.h+i*n)%360,s:r.s,l:r.l}));return a}function C(e){var t=d(e).toHsl(),r=t.h;return[d(e),d({h:(r+72)%360,s:t.s,l:t.l}),d({h:(r+216)%360,s:t.s,l:t.l})]}function R(e,t,r){t=t||6,r=r||30;var a=d(e).toHsl(),n=360/r,i=[d(e)];for(a.h=(a.h-(n*t>>1)+720)%360;--t;)a.h=(a.h+n)%360,i.push(d(a));return i}function H(e,t){t=t||6;for(var r=d(e).toHsv(),a=r.h,n=r.s,i=r.v,o=[],s=1/t;t--;)o.push(d({h:a,s:n,v:i})),i=(i+s)%1;return o}d.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,a=this.toRgb();return e=a.r/255,t=a.g/255,r=a.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=F(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=p(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=p(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),a=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+a+"%)":"hsva("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHsl:function(){var e=g(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=g(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),a=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+a+"%)":"hsla("+t+", "+r+"%, "+a+"%, "+this._roundA+")"},toHex:function(e){return b(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,a,n){var i=[N(Math.round(e).toString(16)),N(Math.round(t).toString(16)),N(Math.round(r).toString(16)),N(O(a))];return n&&i[0].charAt(0)==i[0].charAt(1)&&i[1].charAt(0)==i[1].charAt(1)&&i[2].charAt(0)==i[2].charAt(1)&&i[3].charAt(0)==i[3].charAt(1)?i[0].charAt(0)+i[1].charAt(0)+i[2].charAt(0)+i[3].charAt(0):i.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*T(this._r,255))+"%",g:Math.round(100*T(this._g,255))+"%",b:Math.round(100*T(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*T(this._r,255))+"%, "+Math.round(100*T(this._g,255))+"%, "+Math.round(100*T(this._b,255))+"%)":"rgba("+Math.round(100*T(this._r,255))+"%, "+Math.round(100*T(this._g,255))+"%, "+Math.round(100*T(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&($[b(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+m(this._r,this._g,this._b,this._a),r=t,a=this._gradientType?"GradientType = 1, ":"";if(e){var n=d(e);r="#"+m(n._r,n._g,n._b,n._a)}return"progid:DXImageTransform.Microsoft.gradient("+a+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,a=this._a<1&&this._a>=0;return t||!a||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return d(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(x,arguments)},brighten:function(){return this._applyModification(w,arguments)},darken:function(){return this._applyModification(k,arguments)},desaturate:function(){return this._applyModification(_,arguments)},saturate:function(){return this._applyModification(v,arguments)},greyscale:function(){return this._applyModification(y,arguments)},spin:function(){return this._applyModification(M,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(R,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(H,arguments)},splitcomplement:function(){return this._applyCombination(C,arguments)},triad:function(){return this._applyCombination(S,[3])},tetrad:function(){return this._applyCombination(S,[4])}},d.fromRatio=function(e,t){if("object"==h(e)){var r={};for(var a in e)e.hasOwnProperty(a)&&(r[a]="a"===a?e[a]:j(e[a]));e=r}return d(e,t)},d.equals=function(e,t){return!(!e||!t)&&d(e).toRgbString()==d(t).toRgbString()},d.random=function(){return d.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},d.mix=function(e,t,r){r=0===r?0:r||50;var a=d(e).toRgb(),n=d(t).toRgb(),i=r/100;return d({r:(n.r-a.r)*i+a.r,g:(n.g-a.g)*i+a.g,b:(n.b-a.b)*i+a.b,a:(n.a-a.a)*i+a.a})},d.readability=function(e,t){var r=d(e),a=d(t);return(Math.max(r.getLuminance(),a.getLuminance())+.05)/(Math.min(r.getLuminance(),a.getLuminance())+.05)},d.isReadable=function(e,t,r){var a,n,i,o,s,l=d.readability(e,t);switch(n=!1,(i=r,"AA"!==(o=((i=i||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==o&&(o="AA"),"small"!==(s=(i.size||"small").toLowerCase())&&"large"!==s&&(s="small"),a={level:o,size:s}).level+a.size){case"AAsmall":case"AAAlarge":n=l>=4.5;break;case"AAlarge":n=l>=3;break;case"AAAsmall":n=l>=7}return n},d.mostReadable=function(e,t,r){var a,n,i,o,s=null,l=0;n=(r=r||{}).includeFallbackColors,i=r.level,o=r.size;for(var c=0;c<t.length;c++)(a=d.readability(e,t[c]))>l&&(l=a,s=d(t[c]));return d.isReadable(e,s,{level:i,size:o})||!n?s:(r.includeFallbackColors=!1,d.mostReadable(e,["#fff","#000"],r))};var E=d.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},$=d.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(E);function F(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function T(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function L(e){return Math.min(1,Math.max(0,e))}function q(e){return parseInt(e,16)}function N(e){return 1==e.length?"0"+e:""+e}function j(e){return e<=1&&(e=100*e+"%"),e}function O(e){return Math.round(255*parseFloat(e)).toString(16)}function I(e){return q(e)/255}var P,z,V,B=(z="[\\s|\\(]+("+(P="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+P+")[,|\\s]+("+P+")\\s*\\)?",V="[\\s|\\(]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")[,|\\s]+("+P+")\\s*\\)?",{CSS_UNIT:new RegExp(P),rgb:new RegExp("rgb"+z),rgba:new RegExp("rgba"+V),hsl:new RegExp("hsl"+z),hsla:new RegExp("hsla"+V),hsv:new RegExp("hsv"+z),hsva:new RegExp("hsva"+V),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function D(e){return!!B.CSS_UNIT.exec(e)}const K=({order:e,selected:r,choiceLabel:a,clickHandler:i,theme:o})=>{const{answersColor:s}=o,h=(0,n.useMessages)(),[u,f]=(0,t.useState)(!1);return React.createElement("div",{role:"presentation",className:l()("multipleChoice__optionWrapper",{selected:r,clicked:u},c.css`
					background: ${d(s).setAlpha(.1).toString()};

					border-color: ${s};
					color: ${s};

					&:hover {
						background: ${d(s).setAlpha(.2).toString()};
					}

					&.selected {
						background: ${d(s).setAlpha(.75).toString()};
						color: ${d(s).isDark()?"#fff":"#333"};

						.multipleChoice__optionKey {
							color: ${d(s).isDark()?"#fff":"#333"};

							border-color: ${d(s).isDark()?"#fff":"#333"};
						}
					}
				`),onClick:()=>{i(),r||(f(!1),setTimeout((()=>{f(!0)}),0))}},React.createElement("span",{className:"multipleChoice__optionLabel"},a),React.createElement("span",{className:l()("multipleChoice__optionKey",c.css`
						background: ${d(s).setAlpha(.1).toString()};
						color: ${s};
						border-color: ${d(s).setAlpha(.4).toString()};
					`)},React.createElement("span",{className:l()("multipleChoice__optionKeyTip",c.css`
							background: ${s};
							color: ${d(s).isDark()?"#fff":"#333"};
						`)},h["label.hintText.key"]),e))},U=window.wp.i18n,W=(0,o.keyframes)({"0%":{transform:"scale(1)"},"25%":{transform:"scale(0.94)"},"50%":{transform:"scale(0.98)"},"75%":{transform:"scale(0.95)"},"100%":{transform:"scale(1)"}}),Y=o.css`
	& {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		width: 100%;
	}
	&.valigned {
		display: inline-flex;
		flex-direction: column;
		max-width: 100%;
		align-items: stretch;
		width: auto;
	}
	&:not(.valigned) {

		.multipleChoice__optionWrapper {
			max-width: 215px;
			@media(max-width: $break-small) {
				max-width: 480px;
			}
		}
	}

	.multipleChoice__optionWrapper {
		& {
			display: flex;
			flex-direction: row;
			align-items: center;
			min-width: 215px;
			flex: 1 1 0%;
			border-radius: 5px;
			cursor: pointer;
			padding: 10px;
			margin: 0 16px 16px 0;
			box-shadow: none;
			outline: none;
			position: relative;
			border-style: solid;
			border-width: 1px;
			appearance: none;
			text-align: ${(0,U.isRTL)()?"right":"left"};
			user-select: none;
			backface-visibility: hidden;
			-webkit-backface-visibility: hidden;

			@media(max-width: $break-small) {
				margin: 0 16px 10px 0;
				padding: 8px 10px;
				border-radius: 4px;
			}
		}


		&:hover .multipleChoice__optionKey .multipleChoice__optionKeyTip {
			visibility: visible !important;
			opacity: 1 !important;
			transform: none !important;
		}

		&.clicked {
			animation: ${W} 0.4s linear forwards;
		}

		.multipleChoice__optionLabel {
			flex-grow: 1;
			padding-right: 12px;
			overflow-wrap: break-word;
			max-width: calc(100% - 27px);
		}

		.multipleChoice__optionKey {
			& {
				position: relative;
				width: 27px;
				height: 27px;
				display: flex;
				flex-wrap: wrap;
				align-items: center;
				justify-content: center;
				border-radius: 50%;
				border-width: 1px;
				border-style: solid;
				font-size: 14px;
			}

			.multipleChoice__optionKeyTip {
				position: absolute;
				top: -25px;
				font-size: 10px;
				font-weight: bold;
				text-transform: uppercase;
				padding: 2px 3px;
				border-radius: 2px;
				transition: 0.2s all ease-in-out;
				transform: translateY(5px);
				visibility: hidden;
				opacity: 0;
			}
		}
	}
}`,G=({id:e,attributes:r,val:a,isActive:s,setVal:l,setChoiceClicked:c,checkfieldValidation:h})=>{const{verticalAlign:u,yesLabel:f,noLabel:d,themeId:g}=r,p=(0,o.useCx)(),b=(0,n.useBlockTheme)(g),m=u,_=[{label:f,value:"yes",order:"Y",selected:"yes"===a},{label:d,value:"no",order:"N",selected:"no"===a}],v=(0,t.useCallback)((0,i.debounce)((t=>{const r=Object.values(t).join(""),a=_.findIndex((e=>e.order.toUpperCase()===r.toUpperCase()));document.querySelector(`#block-${e} .multiplechoice__options .multipleChoice__optionWrapper:nth-child(${a+1})`)?.click(),y={}}),100),[_]);let y={};const x=e=>{y[e.code]=String.fromCharCode(e.keyCode),v(y)};return(0,t.useEffect)((()=>{document.getElementById(`block-${e}`)?.addEventListener("keydown",x)}),[]),React.createElement("div",{className:"qf-multiple-choice-block"},React.createElement("div",{className:p("multiplechoice__options",{valigned:m},Y)},_&&_.map(((t,r)=>React.createElement(K,{theme:b,key:`block-multiple-choice-${e}-choice-${t.value}`,choiceLabel:t.label,choiceValue:t.value,order:t.order.toUpperCase(),selected:t.selected,multiple:!1,clickHandler:()=>((e,t)=>{let r;t?(r="",l("")):(r=e,l(r),c(!1),setTimeout((()=>{c(!0)}),0)),h(r)})(t.value,t.selected)})))))};let X;const J={display:e=>{const{id:r,attributes:a,setIsValid:i,setIsAnswered:o,showNextBtn:s,setValidationErr:l,val:c,setVal:h,next:u,isActive:f,isAnimating:d,showErrMsg:g,isPreview:p,isReviewing:b}=e,{required:m,yesLabel:_,noLabel:v}=a,y=(0,n.useMessages)(),[x,w]=(0,t.useState)(null),k=e=>{!0!==m||e&&0!==e.length&&""!==e&&"yes"===e?(i(!0),l(null)):(i(!1),l(y["label.errorAlert.required"]))};return(0,t.useEffect)((()=>()=>clearTimeout(X)),[]),(0,t.useEffect)((()=>{f||clearTimeout(X),f||d||w(null)}),[f,d]),(0,t.useEffect)((()=>{clearTimeout(X),x&&c?.length>0&&(X=setTimeout((()=>{u()}),600))}),[x]),(0,t.useEffect)((()=>{!p&&b||k(c)}),[a]),(0,t.useEffect)((()=>{o(c?.length>0)}),[c,a]),React.createElement("div",{className:"qf-multiple-choice-block-renderer"},React.createElement(G,{attributes:a,id:r,val:c,isActive:f,checkfieldValidation:k,setVal:h,setChoiceClicked:e=>{g(!1),w(e)}}))},mergeTag:({val:e,attributes:t})=>{const{yesLabel:r,noLabel:a}=t;return React.createElement(React.Fragment,null,"yes"===e?r:a)}},{name:Q}={name:"legal",supports:{editable:!0,required:!0,attachment:!0,description:!0,logic:!0,theme:!0,points:!0,payments:!1,choices:!0,correctAnswers:!1},attributes:{yesLabel:{type:"string",description:"The label for the 'yes' option",default:"Yes"},noLabel:{type:"string",description:"The label for the 'no' option",default:"No"}},logicalOperators:["is","is_not"]};(0,e.setBlockRendererSettings)(Q,J)})(),(window.qf=window.qf||{}).blocklibLegalBlockRenderer=a})();