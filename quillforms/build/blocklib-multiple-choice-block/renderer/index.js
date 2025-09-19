(()=>{var e={46942:(e,t)=>{var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e="",t=0;t<arguments.length;t++){var r=arguments[t];r&&(e=i(e,o(r)))}return e}function o(e){if("string"==typeof e||"number"==typeof e)return e;if("object"!=typeof e)return"";if(Array.isArray(e))return a.apply(null,e);if(e.toString!==Object.prototype.toString&&!e.toString.toString().includes("[native code]"))return e.toString();var t="";for(var r in e)n.call(e,r)&&e[r]&&(t=i(t,r));return t}function i(e,t){return t?e?e+" "+t:e+t:e}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()}},t={};function r(n){var a=t[n];if(void 0!==a)return a.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}r.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return r.d(t,{a:t}),t},r.d=(e,t)=>{for(var n in t)r.o(t,n)&&!r.o(e,n)&&Object.defineProperty(e,n,{enumerable:!0,get:t[n]})},r.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),(()=>{"use strict";const e=window.qf.blocks,t=window.qf.rendererCore,n=window.React,a=window.lodash,o=window.qf.utils;var i=r(46942),l=r.n(i);const s=window.emotion;function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}var h=/^\s+/,u=/\s+$/;function f(e,t){if(t=t||{},(e=e||"")instanceof f)return e;if(!(this instanceof f))return new f(e,t);var r=function(e){var t,r,n,a={r:0,g:0,b:0},o=1,i=null,l=null,s=null,f=!1,d=!1;return"string"==typeof e&&(e=function(e){e=e.replace(h,"").replace(u,"").toLowerCase();var t,r=!1;if(E[e])e=E[e],r=!0;else if("transparent"==e)return{r:0,g:0,b:0,a:0,format:"name"};return(t=V.rgb.exec(e))?{r:t[1],g:t[2],b:t[3]}:(t=V.rgba.exec(e))?{r:t[1],g:t[2],b:t[3],a:t[4]}:(t=V.hsl.exec(e))?{h:t[1],s:t[2],l:t[3]}:(t=V.hsla.exec(e))?{h:t[1],s:t[2],l:t[3],a:t[4]}:(t=V.hsv.exec(e))?{h:t[1],s:t[2],v:t[3]}:(t=V.hsva.exec(e))?{h:t[1],s:t[2],v:t[3],a:t[4]}:(t=V.hex8.exec(e))?{r:q(t[1]),g:q(t[2]),b:q(t[3]),a:z(t[4]),format:r?"name":"hex8"}:(t=V.hex6.exec(e))?{r:q(t[1]),g:q(t[2]),b:q(t[3]),format:r?"name":"hex"}:(t=V.hex4.exec(e))?{r:q(t[1]+""+t[1]),g:q(t[2]+""+t[2]),b:q(t[3]+""+t[3]),a:z(t[4]+""+t[4]),format:r?"name":"hex8"}:!!(t=V.hex3.exec(e))&&{r:q(t[1]+""+t[1]),g:q(t[2]+""+t[2]),b:q(t[3]+""+t[3]),format:r?"name":"hex"}}(e)),"object"==c(e)&&(D(e.r)&&D(e.g)&&D(e.b)?(t=e.r,r=e.g,n=e.b,a={r:255*H(t,255),g:255*H(r,255),b:255*H(n,255)},f=!0,d="%"===String(e.r).substr(-1)?"prgb":"rgb"):D(e.h)&&D(e.s)&&D(e.v)?(i=O(e.s),l=O(e.v),a=function(e,t,r){e=6*H(e,360),t=H(t,100),r=H(r,100);var n=Math.floor(e),a=e-n,o=r*(1-t),i=r*(1-a*t),l=r*(1-(1-a)*t),s=n%6;return{r:255*[r,i,o,o,l,r][s],g:255*[l,r,r,i,o,o][s],b:255*[o,o,l,r,r,i][s]}}(e.h,i,l),f=!0,d="hsv"):D(e.h)&&D(e.s)&&D(e.l)&&(i=O(e.s),s=O(e.l),a=function(e,t,r){var n,a,o;function i(e,t,r){return r<0&&(r+=1),r>1&&(r-=1),r<1/6?e+6*(t-e)*r:r<.5?t:r<2/3?e+(t-e)*(2/3-r)*6:e}if(e=H(e,360),t=H(t,100),r=H(r,100),0===t)n=a=o=r;else{var l=r<.5?r*(1+t):r+t-r*t,s=2*r-l;n=i(s,l,e+1/3),a=i(s,l,e),o=i(s,l,e-1/3)}return{r:255*n,g:255*a,b:255*o}}(e.h,i,s),f=!0,d="hsl"),e.hasOwnProperty("a")&&(o=e.a)),o=j(o),{ok:f,format:e.format||d,r:Math.min(255,Math.max(a.r,0)),g:Math.min(255,Math.max(a.g,0)),b:Math.min(255,Math.max(a.b,0)),a:o}}(e);this._originalInput=e,this._r=r.r,this._g=r.g,this._b=r.b,this._a=r.a,this._roundA=Math.round(100*this._a)/100,this._format=t.format||r.format,this._gradientType=t.gradientType,this._r<1&&(this._r=Math.round(this._r)),this._g<1&&(this._g=Math.round(this._g)),this._b<1&&(this._b=Math.round(this._b)),this._ok=r.ok}function d(e,t,r){e=H(e,255),t=H(t,255),r=H(r,255);var n,a,o=Math.max(e,t,r),i=Math.min(e,t,r),l=(o+i)/2;if(o==i)n=a=0;else{var s=o-i;switch(a=l>.5?s/(2-o-i):s/(o+i),o){case e:n=(t-r)/s+(t<r?6:0);break;case t:n=(r-e)/s+2;break;case r:n=(e-t)/s+4}n/=6}return{h:n,s:a,l}}function p(e,t,r){e=H(e,255),t=H(t,255),r=H(r,255);var n,a,o=Math.max(e,t,r),i=Math.min(e,t,r),l=o,s=o-i;if(a=0===o?0:s/o,o==i)n=0;else{switch(o){case e:n=(t-r)/s+(t<r?6:0);break;case t:n=(r-e)/s+2;break;case r:n=(e-t)/s+4}n/=6}return{h:n,s:a,v:l}}function g(e,t,r,n){var a=[I(Math.round(e).toString(16)),I(Math.round(t).toString(16)),I(Math.round(r).toString(16))];return n&&a[0].charAt(0)==a[0].charAt(1)&&a[1].charAt(0)==a[1].charAt(1)&&a[2].charAt(0)==a[2].charAt(1)?a[0].charAt(0)+a[1].charAt(0)+a[2].charAt(0):a.join("")}function b(e,t,r,n){return[I(T(n)),I(Math.round(e).toString(16)),I(Math.round(t).toString(16)),I(Math.round(r).toString(16))].join("")}function m(e,t){t=0===t?0:t||10;var r=f(e).toHsl();return r.s-=t/100,r.s=F(r.s),f(r)}function y(e,t){t=0===t?0:t||10;var r=f(e).toHsl();return r.s+=t/100,r.s=F(r.s),f(r)}function v(e){return f(e).desaturate(100)}function _(e,t){t=0===t?0:t||10;var r=f(e).toHsl();return r.l+=t/100,r.l=F(r.l),f(r)}function x(e,t){t=0===t?0:t||10;var r=f(e).toRgb();return r.r=Math.max(0,Math.min(255,r.r-Math.round(-t/100*255))),r.g=Math.max(0,Math.min(255,r.g-Math.round(-t/100*255))),r.b=Math.max(0,Math.min(255,r.b-Math.round(-t/100*255))),f(r)}function w(e,t){t=0===t?0:t||10;var r=f(e).toHsl();return r.l-=t/100,r.l=F(r.l),f(r)}function k(e,t){var r=f(e).toHsl(),n=(r.h+t)%360;return r.h=n<0?360+n:n,f(r)}function A(e){var t=f(e).toHsl();return t.h=(t.h+180)%360,f(t)}function M(e,t){if(isNaN(t)||t<=0)throw new Error("Argument to polyad must be a positive number");for(var r=f(e).toHsl(),n=[f(e)],a=360/t,o=1;o<t;o++)n.push(f({h:(r.h+o*a)%360,s:r.s,l:r.l}));return n}function S(e){var t=f(e).toHsl(),r=t.h;return[f(e),f({h:(r+72)%360,s:t.s,l:t.l}),f({h:(r+216)%360,s:t.s,l:t.l})]}function C(e,t,r){t=t||6,r=r||30;var n=f(e).toHsl(),a=360/r,o=[f(e)];for(n.h=(n.h-(a*t>>1)+720)%360;--t;)n.h=(n.h+a)%360,o.push(f(n));return o}function R(e,t){t=t||6;for(var r=f(e).toHsv(),n=r.h,a=r.s,o=r.v,i=[],l=1/t;t--;)i.push(f({h:n,s:a,v:o})),o=(o+l)%1;return i}f.prototype={isDark:function(){return this.getBrightness()<128},isLight:function(){return!this.isDark()},isValid:function(){return this._ok},getOriginalInput:function(){return this._originalInput},getFormat:function(){return this._format},getAlpha:function(){return this._a},getBrightness:function(){var e=this.toRgb();return(299*e.r+587*e.g+114*e.b)/1e3},getLuminance:function(){var e,t,r,n=this.toRgb();return e=n.r/255,t=n.g/255,r=n.b/255,.2126*(e<=.03928?e/12.92:Math.pow((e+.055)/1.055,2.4))+.7152*(t<=.03928?t/12.92:Math.pow((t+.055)/1.055,2.4))+.0722*(r<=.03928?r/12.92:Math.pow((r+.055)/1.055,2.4))},setAlpha:function(e){return this._a=j(e),this._roundA=Math.round(100*this._a)/100,this},toHsv:function(){var e=p(this._r,this._g,this._b);return{h:360*e.h,s:e.s,v:e.v,a:this._a}},toHsvString:function(){var e=p(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),n=Math.round(100*e.v);return 1==this._a?"hsv("+t+", "+r+"%, "+n+"%)":"hsva("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHsl:function(){var e=d(this._r,this._g,this._b);return{h:360*e.h,s:e.s,l:e.l,a:this._a}},toHslString:function(){var e=d(this._r,this._g,this._b),t=Math.round(360*e.h),r=Math.round(100*e.s),n=Math.round(100*e.l);return 1==this._a?"hsl("+t+", "+r+"%, "+n+"%)":"hsla("+t+", "+r+"%, "+n+"%, "+this._roundA+")"},toHex:function(e){return g(this._r,this._g,this._b,e)},toHexString:function(e){return"#"+this.toHex(e)},toHex8:function(e){return function(e,t,r,n,a){var o=[I(Math.round(e).toString(16)),I(Math.round(t).toString(16)),I(Math.round(r).toString(16)),I(T(n))];return a&&o[0].charAt(0)==o[0].charAt(1)&&o[1].charAt(0)==o[1].charAt(1)&&o[2].charAt(0)==o[2].charAt(1)&&o[3].charAt(0)==o[3].charAt(1)?o[0].charAt(0)+o[1].charAt(0)+o[2].charAt(0)+o[3].charAt(0):o.join("")}(this._r,this._g,this._b,this._a,e)},toHex8String:function(e){return"#"+this.toHex8(e)},toRgb:function(){return{r:Math.round(this._r),g:Math.round(this._g),b:Math.round(this._b),a:this._a}},toRgbString:function(){return 1==this._a?"rgb("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+")":"rgba("+Math.round(this._r)+", "+Math.round(this._g)+", "+Math.round(this._b)+", "+this._roundA+")"},toPercentageRgb:function(){return{r:Math.round(100*H(this._r,255))+"%",g:Math.round(100*H(this._g,255))+"%",b:Math.round(100*H(this._b,255))+"%",a:this._a}},toPercentageRgbString:function(){return 1==this._a?"rgb("+Math.round(100*H(this._r,255))+"%, "+Math.round(100*H(this._g,255))+"%, "+Math.round(100*H(this._b,255))+"%)":"rgba("+Math.round(100*H(this._r,255))+"%, "+Math.round(100*H(this._g,255))+"%, "+Math.round(100*H(this._b,255))+"%, "+this._roundA+")"},toName:function(){return 0===this._a?"transparent":!(this._a<1)&&($[g(this._r,this._g,this._b,!0)]||!1)},toFilter:function(e){var t="#"+b(this._r,this._g,this._b,this._a),r=t,n=this._gradientType?"GradientType = 1, ":"";if(e){var a=f(e);r="#"+b(a._r,a._g,a._b,a._a)}return"progid:DXImageTransform.Microsoft.gradient("+n+"startColorstr="+t+",endColorstr="+r+")"},toString:function(e){var t=!!e;e=e||this._format;var r=!1,n=this._a<1&&this._a>=0;return t||!n||"hex"!==e&&"hex6"!==e&&"hex3"!==e&&"hex4"!==e&&"hex8"!==e&&"name"!==e?("rgb"===e&&(r=this.toRgbString()),"prgb"===e&&(r=this.toPercentageRgbString()),"hex"!==e&&"hex6"!==e||(r=this.toHexString()),"hex3"===e&&(r=this.toHexString(!0)),"hex4"===e&&(r=this.toHex8String(!0)),"hex8"===e&&(r=this.toHex8String()),"name"===e&&(r=this.toName()),"hsl"===e&&(r=this.toHslString()),"hsv"===e&&(r=this.toHsvString()),r||this.toHexString()):"name"===e&&0===this._a?this.toName():this.toRgbString()},clone:function(){return f(this.toString())},_applyModification:function(e,t){var r=e.apply(null,[this].concat([].slice.call(t)));return this._r=r._r,this._g=r._g,this._b=r._b,this.setAlpha(r._a),this},lighten:function(){return this._applyModification(_,arguments)},brighten:function(){return this._applyModification(x,arguments)},darken:function(){return this._applyModification(w,arguments)},desaturate:function(){return this._applyModification(m,arguments)},saturate:function(){return this._applyModification(y,arguments)},greyscale:function(){return this._applyModification(v,arguments)},spin:function(){return this._applyModification(k,arguments)},_applyCombination:function(e,t){return e.apply(null,[this].concat([].slice.call(t)))},analogous:function(){return this._applyCombination(C,arguments)},complement:function(){return this._applyCombination(A,arguments)},monochromatic:function(){return this._applyCombination(R,arguments)},splitcomplement:function(){return this._applyCombination(S,arguments)},triad:function(){return this._applyCombination(M,[3])},tetrad:function(){return this._applyCombination(M,[4])}},f.fromRatio=function(e,t){if("object"==c(e)){var r={};for(var n in e)e.hasOwnProperty(n)&&(r[n]="a"===n?e[n]:O(e[n]));e=r}return f(e,t)},f.equals=function(e,t){return!(!e||!t)&&f(e).toRgbString()==f(t).toRgbString()},f.random=function(){return f.fromRatio({r:Math.random(),g:Math.random(),b:Math.random()})},f.mix=function(e,t,r){r=0===r?0:r||50;var n=f(e).toRgb(),a=f(t).toRgb(),o=r/100;return f({r:(a.r-n.r)*o+n.r,g:(a.g-n.g)*o+n.g,b:(a.b-n.b)*o+n.b,a:(a.a-n.a)*o+n.a})},f.readability=function(e,t){var r=f(e),n=f(t);return(Math.max(r.getLuminance(),n.getLuminance())+.05)/(Math.min(r.getLuminance(),n.getLuminance())+.05)},f.isReadable=function(e,t,r){var n,a,o,i,l,s=f.readability(e,t);switch(a=!1,(o=r,"AA"!==(i=((o=o||{level:"AA",size:"small"}).level||"AA").toUpperCase())&&"AAA"!==i&&(i="AA"),"small"!==(l=(o.size||"small").toLowerCase())&&"large"!==l&&(l="small"),n={level:i,size:l}).level+n.size){case"AAsmall":case"AAAlarge":a=s>=4.5;break;case"AAlarge":a=s>=3;break;case"AAAsmall":a=s>=7}return a},f.mostReadable=function(e,t,r){var n,a,o,i,l=null,s=0;a=(r=r||{}).includeFallbackColors,o=r.level,i=r.size;for(var c=0;c<t.length;c++)(n=f.readability(e,t[c]))>s&&(s=n,l=f(t[c]));return f.isReadable(e,l,{level:o,size:i})||!a?l:(r.includeFallbackColors=!1,f.mostReadable(e,["#fff","#000"],r))};var E=f.names={aliceblue:"f0f8ff",antiquewhite:"faebd7",aqua:"0ff",aquamarine:"7fffd4",azure:"f0ffff",beige:"f5f5dc",bisque:"ffe4c4",black:"000",blanchedalmond:"ffebcd",blue:"00f",blueviolet:"8a2be2",brown:"a52a2a",burlywood:"deb887",burntsienna:"ea7e5d",cadetblue:"5f9ea0",chartreuse:"7fff00",chocolate:"d2691e",coral:"ff7f50",cornflowerblue:"6495ed",cornsilk:"fff8dc",crimson:"dc143c",cyan:"0ff",darkblue:"00008b",darkcyan:"008b8b",darkgoldenrod:"b8860b",darkgray:"a9a9a9",darkgreen:"006400",darkgrey:"a9a9a9",darkkhaki:"bdb76b",darkmagenta:"8b008b",darkolivegreen:"556b2f",darkorange:"ff8c00",darkorchid:"9932cc",darkred:"8b0000",darksalmon:"e9967a",darkseagreen:"8fbc8f",darkslateblue:"483d8b",darkslategray:"2f4f4f",darkslategrey:"2f4f4f",darkturquoise:"00ced1",darkviolet:"9400d3",deeppink:"ff1493",deepskyblue:"00bfff",dimgray:"696969",dimgrey:"696969",dodgerblue:"1e90ff",firebrick:"b22222",floralwhite:"fffaf0",forestgreen:"228b22",fuchsia:"f0f",gainsboro:"dcdcdc",ghostwhite:"f8f8ff",gold:"ffd700",goldenrod:"daa520",gray:"808080",green:"008000",greenyellow:"adff2f",grey:"808080",honeydew:"f0fff0",hotpink:"ff69b4",indianred:"cd5c5c",indigo:"4b0082",ivory:"fffff0",khaki:"f0e68c",lavender:"e6e6fa",lavenderblush:"fff0f5",lawngreen:"7cfc00",lemonchiffon:"fffacd",lightblue:"add8e6",lightcoral:"f08080",lightcyan:"e0ffff",lightgoldenrodyellow:"fafad2",lightgray:"d3d3d3",lightgreen:"90ee90",lightgrey:"d3d3d3",lightpink:"ffb6c1",lightsalmon:"ffa07a",lightseagreen:"20b2aa",lightskyblue:"87cefa",lightslategray:"789",lightslategrey:"789",lightsteelblue:"b0c4de",lightyellow:"ffffe0",lime:"0f0",limegreen:"32cd32",linen:"faf0e6",magenta:"f0f",maroon:"800000",mediumaquamarine:"66cdaa",mediumblue:"0000cd",mediumorchid:"ba55d3",mediumpurple:"9370db",mediumseagreen:"3cb371",mediumslateblue:"7b68ee",mediumspringgreen:"00fa9a",mediumturquoise:"48d1cc",mediumvioletred:"c71585",midnightblue:"191970",mintcream:"f5fffa",mistyrose:"ffe4e1",moccasin:"ffe4b5",navajowhite:"ffdead",navy:"000080",oldlace:"fdf5e6",olive:"808000",olivedrab:"6b8e23",orange:"ffa500",orangered:"ff4500",orchid:"da70d6",palegoldenrod:"eee8aa",palegreen:"98fb98",paleturquoise:"afeeee",palevioletred:"db7093",papayawhip:"ffefd5",peachpuff:"ffdab9",peru:"cd853f",pink:"ffc0cb",plum:"dda0dd",powderblue:"b0e0e6",purple:"800080",rebeccapurple:"663399",red:"f00",rosybrown:"bc8f8f",royalblue:"4169e1",saddlebrown:"8b4513",salmon:"fa8072",sandybrown:"f4a460",seagreen:"2e8b57",seashell:"fff5ee",sienna:"a0522d",silver:"c0c0c0",skyblue:"87ceeb",slateblue:"6a5acd",slategray:"708090",slategrey:"708090",snow:"fffafa",springgreen:"00ff7f",steelblue:"4682b4",tan:"d2b48c",teal:"008080",thistle:"d8bfd8",tomato:"ff6347",turquoise:"40e0d0",violet:"ee82ee",wheat:"f5deb3",white:"fff",whitesmoke:"f5f5f5",yellow:"ff0",yellowgreen:"9acd32"},$=f.hexNames=function(e){var t={};for(var r in e)e.hasOwnProperty(r)&&(t[e[r]]=r);return t}(E);function j(e){return e=parseFloat(e),(isNaN(e)||e<0||e>1)&&(e=1),e}function H(e,t){(function(e){return"string"==typeof e&&-1!=e.indexOf(".")&&1===parseFloat(e)})(e)&&(e="100%");var r=function(e){return"string"==typeof e&&-1!=e.indexOf("%")}(e);return e=Math.min(t,Math.max(0,parseFloat(e))),r&&(e=parseInt(e*t,10)/100),Math.abs(e-t)<1e-6?1:e%t/parseFloat(t)}function F(e){return Math.min(1,Math.max(0,e))}function q(e){return parseInt(e,16)}function I(e){return 1==e.length?"0"+e:""+e}function O(e){return e<=1&&(e=100*e+"%"),e}function T(e){return Math.round(255*parseFloat(e)).toString(16)}function z(e){return q(e)/255}var L,N,P,V=(N="[\\s|\\(]+("+(L="(?:[-\\+]?\\d*\\.\\d+%?)|(?:[-\\+]?\\d+%?)")+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",P="[\\s|\\(]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")[,|\\s]+("+L+")\\s*\\)?",{CSS_UNIT:new RegExp(L),rgb:new RegExp("rgb"+N),rgba:new RegExp("rgba"+P),hsl:new RegExp("hsl"+N),hsla:new RegExp("hsla"+P),hsv:new RegExp("hsv"+N),hsva:new RegExp("hsva"+P),hex3:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex6:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/,hex4:/^#?([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})([0-9a-fA-F]{1})$/,hex8:/^#?([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})([0-9a-fA-F]{2})$/});function D(e){return!!V.CSS_UNIT.exec(e)}const Z=({order:e,selected:r,choiceLabel:a,choiceValue:o,clickHandler:i,theme:c,isAnswerLocked:h,blockId:u,correctIncorrectQuiz:d,isOther:p,val:g,setVal:b,checkfieldValidation:m,multiple:y,otherPlaceholder:v,deselectAllWhenOtherSelected:_})=>{const{answersColor:x}=c,w=(0,t.useMessages)(),[k,A]=(0,n.useState)(!1),[M,S]=(0,n.useState)(""),C=(0,n.useRef)(null);(0,n.useEffect)((()=>{if(p&&g&&g.length>0){const e=g.find((e=>"object"==typeof e&&"other"===e.type));e&&e.value&&S(e.value)}}),[p,g]),(0,n.useEffect)((()=>{p&&r&&C.current&&C.current.focus()}),[p,r]);const R=f(x).isDark()?"#fff":"#333";return React.createElement("div",{role:"presentation",className:l()("multipleChoice__optionWrapper",{selected:r,locked:h,clicked:k,correct:h&&d?.enabled&&d?.showAnswersDuringQuiz&&d?.questions?.[u]?.correctAnswers?.includes(o),wrong:h&&d?.enabled&&d?.showAnswersDuringQuiz&&r&&!d?.questions?.[u]?.correctAnswers?.includes(o)},s.css`
					background: ${f(x).setAlpha(.1).toString()};

					border-color: ${x};
					color: ${x};

					${!h&&`&:hover {\n\t\t\t\t\t\tbackground: ${f(x).setAlpha(.2).toString()};\n\t\t\t\t\t}`}

					&.selected {
						background: ${f(x).setAlpha(.75).toString()};
						color: ${f(x).isDark()?"#fff":"#333"};

						.multipleChoice__optionKey {
							color: ${f(x).isDark()?"#fff":"#333"};

							border-color: ${f(x).isDark()?"#fff":"#333"};
						}
					}

					&.locked {
						pointer-events: none;
						cursor: default !important;
					}
				`),onClick:()=>{h||(p?(()=>{if(!h){let e=g?[...g]:[];r?(e=e.filter((e=>!("object"==typeof e&&"other"===e.type))),S("")):y&&!_?e.push({type:"other",value:""}):e=[{type:"other",value:""}],b(e),m(e),r||(A(!1),setTimeout((()=>{A(!0)}),0))}})():(i(),r||(A(!1),setTimeout((()=>{A(!0)}),0))))}},React.createElement("span",{className:"multipleChoice__optionLabel"},p&&r?React.createElement("input",{type:"text",value:M,onChange:e=>(e=>{S(e);let t=g?[...g]:[];t=t.filter((e=>!("object"==typeof e&&"other"===e.type))),""!==e.trim()&&t.push({type:"other",value:e.trim()}),b(t),m(t)})(e.target.value),placeholder:v,className:s.css`
							border: none !important;
							background: transparent;
							color:  ${R} !important;
							font-size: inherit !important;
							font-family: inherit !important;
							width: 100%;
							outline: none;
							&::placeholder {
								color: ${f(R).setAlpha(.6).toString()};
							}
							&:focus {
								outline: none !important;
							}
						`,onClick:e=>e.stopPropagation(),onKeyDown:e=>e.stopPropagation(),ref:C}):a),React.createElement("span",{className:l()("multipleChoice__optionKey",s.css`
						background: ${f(x).setAlpha(.1).toString()};
						color: ${x};
						border-color: ${f(x).setAlpha(.4).toString()};
					`)},React.createElement("span",{className:l()("multipleChoice__optionKeyTip",s.css`
							background: ${x};
							color: ${R};
							${h&&"display: none !important;"}
						`)},w["label.hintText.key"]),e))},K=window.wp.i18n,B=(0,o.keyframes)({"0%":{transform:"scale(1)"},"25%":{transform:"scale(0.94)"},"50%":{transform:"scale(0.98)"},"75%":{transform:"scale(0.95)"},"100%":{transform:"scale(1)"}}),Q=o.css`
	& {
		display: flex;
		flex-direction: row;
		flex-wrap: wrap;
		align-items: stretch;
		width: 100%;
		margin-block-end: -8px; */
		margin-inline-end: 8px;
		column-gap: 8px;
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
			width: calc(33% - 7px);
			min-width: 160px;
			flex: 1 0 31%;
   		 	max-width: calc(33% - 3px);
			@media(max-width: $break-small) {
				width: calc(50% - 7px);
				min-width: 160px;
			ZZZZZZZZZZZZZ	flex: 1 0 48%;
				max-width: calc(50% - 3px);
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
			margin-bottom: 7px;
			box-shadow: none;
			outline: none;
			position: relative;
			border-style: solid;
			border-width: 1px;
			appearance: none;
			text-align: ${(0,K.isRTL)()?"right":"left"};
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
			animation: ${B} 0.4s linear forwards;
		}

		&.correct {
			background: #7bc178 !important;
			border-color: #5da458 !important;
		}

		&.wrong {
			background: #d4494c;
			border-color: #ffa39e;
			
		}

		&.correct, &.wrong {
			color: #fff;
			.multipleChoice__optionKey {
				background: transparent !important;
				border-color: #fff !important;
				color: #fff !important;
			}
			
		}

		.multipleChoice__optionLabel {
			flex-grow: 1;
			padding-right: 12px;
			overflow-wrap: anywhere;
			// max-width: calc(100% - 27px);
		}

		.multipleChoice__optionKey {
			& {
				position: relative;
				width: 27px;
				height: 27px;
				min-width: 27px;
   				min-height: 27px;
				line-height: 0;
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
				line-height: 1em;
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
}`,W=({id:e,attributes:r,val:i,isActive:l,correctIncorrectQuiz:s,isAnswerLocked:c,setVal:h,setChoiceClicked:u,checkfieldValidation:f})=>{const{editor:d}=(0,t.useFormContext)(),{verticalAlign:p,multiple:g,choices:b,themeId:m,max:y,min:v,other:_,otherText:x,otherPlaceholder:w,deselectAllWhenOtherSelected:k}=r,A=(0,o.useCx)(),M=(0,t.useBlockTheme)(m),S="a".charCodeAt(0),C=e=>{const t=[e];let r,n,a,o;for(r=0;r<t.length;)t[r]>25&&(o=Math.floor(t[r]/26),t[r+1]=o-1,t[r]%=26),r+=1;for(n="",a=0;a<t.length;a+=1)n=String.fromCharCode(S+t[a])+n;return n},R=p;let E=(0,a.cloneDeep)(b).map(((e,t)=>(e.label||(e.label="Choice "+(t+1)),e.selected=!!(i&&i.length>0&&i.includes(e.value)),e.order=C(t),e)));if(_){const e={value:"other",label:x,selected:i&&i.length>0&&i.some((e=>"object"==typeof e&&"other"===e.type)),order:C(E.length),isOther:!0};E.push(e)}const $=(0,n.useCallback)((0,a.debounce)((t=>{const r=Object.values(t).join(""),n=E.findIndex((e=>e.order.toUpperCase()===r.toUpperCase()));document.querySelector(`#block-${e} .multiplechoice__options .multipleChoice__optionWrapper:nth-child(${n+1})`)?.click(),j={}}),100),[E]);let j={};const H=(0,n.useRef)(i);(0,n.useEffect)((()=>{H.current=i}),[i]);const F=e=>{console.log(H.current),c||"off"!==d.mode||H.current?.some((e=>"object"==typeof e&&"other"===e.type))||(j[e.code]=String.fromCharCode(e.keyCode),$(j))};return(0,n.useEffect)((()=>(document.getElementById(`block-${e}`)?.addEventListener("keydown",F),()=>{document.getElementById(`block-${e}`)?.removeEventListener("keydown",F)})),[]),React.createElement("div",{className:"qf-multiple-choice-block"},React.createElement("div",{className:A("multiplechoice__options",{valigned:R},Q)},E&&E.length>0&&E.map(((t,r)=>React.createElement(Z,{theme:M,blockId:e,key:`block-multiple-choice-${e}-choice-${t.value}`,choiceLabel:t.label,choiceValue:t.value,order:t.order.toUpperCase(),isAnswerLocked:c,selected:t.selected,correctIncorrectQuiz:s,multiple:g,otherPlaceholder:w,deselectAllWhenOtherSelected:k,isOther:t.isOther,otherText:x,val:i,setVal:h,checkfieldValidation:f,clickHandler:()=>{((e,t)=>{let r;r=i?.length>0?(0,a.cloneDeep)(i):[],t?s?.enabled&&s?.showAnswersDuringQuiz||("object"==typeof e&&"other"===e.type?r=r.filter((e=>!("object"==typeof e&&"other"===e.type))):r.splice(r.findIndex((t=>t===e)),1),h(r)):(g?(k&&(r=r.filter((e=>"other"!==e?.type))),r.push(e)):("object"==typeof e&&e.type,r=[e]),u(!1),h(r),f(r),setTimeout((()=>{u(!0)}),10))})(t.value,t.selected)}})))))};let U;const G={display:e=>{const{id:r,attributes:o,setIsValid:i,setIsAnswered:l,showNextBtn:s,setValidationErr:c,val:h,setVal:u,next:f,isAnswerLocked:d,isActive:p,isAnimating:g,showErrMsg:b,isPreview:m,isReviewing:y,setIsAnswerCorrect:v}=e,{multiple:_,required:x,min:w,max:k,other:A}=o,M=(0,t.useMessages)(),S=(0,t.useCorrectIncorrectQuiz)(),[C,R]=(0,n.useState)(null),E=e=>{if(!0!==x||e&&0!==e.length){if((0,a.size)(e)>0&&S?.enabled){const t=e?.filter((e=>"object"!=typeof e||"other"!==e.type));if(e?.find((e=>"object"==typeof e&&"other"===e.type)),t.length>0){const e=t.every((e=>S?.questions?.[r]?.correctAnswers?.includes(e)));v(e)}else v(!1)}const t=e?.filter((e=>"object"!=typeof e||"other"!==e.type||e.value&&""!==e.value.trim()));_&&w&&(0,a.size)(t)<w?(i(!1),c(M["label.errorAlert.minChoices"])):_&&k&&(0,a.size)(t)>k?(i(!1),c(M["label.errorAlert.maxChoices"])):(i(!0),c(null))}else i(!1),c(M["label.errorAlert.required"])};return(0,n.useEffect)((()=>()=>clearTimeout(U)),[]),(0,n.useEffect)((()=>{p||clearTimeout(U),p||g||R(null)}),[p,g]),(0,n.useEffect)((()=>{clearTimeout(U),C&&h?.length>0&&!_&&h.some((e=>"object"!=typeof e||"other"!==e.type||e.value&&""!==e.value.trim()))&&(U=setTimeout((()=>{f()}),600))}),[C,h]),(0,n.useEffect)((()=>{!m&&y||E(h)}),[o,S]),(0,n.useEffect)((()=>{const e=h&&h.length>0&&h.some((e=>"object"!=typeof e||"other"!==e.type||e.value&&""!==e.value.trim()));l(!!e),_&&e&&s(!0)}),[h,o]),React.createElement("div",{className:"qf-multiple-choice-block-renderer"},React.createElement(W,{attributes:o,id:r,val:h,isActive:p,isAnswerLocked:d,correctIncorrectQuiz:S,checkfieldValidation:E,setVal:u,setChoiceClicked:e=>{b(!1),R(e)}}))},mergeTag:({val:e,attributes:t})=>{const{choices:r}=t,n=e.map((e=>{if("object"==typeof e&&"other"===e.type)return e.value?`Other: ${e.value}`:"Other";const t=r.findIndex((t=>t.value===e));return-1!==t?r[t].label||`Choice ${t+1}`:e}));return React.createElement(React.Fragment,null,(0,a.join)(n,", "))}},{name:X}={name:"multiple-choice",supports:{editable:!0,required:!0,attachment:!0,description:!0,logic:!0,theme:!0,points:!0,payments:!0,choices:!0,correctAnswers:!0},attributes:{choices:{type:"array",items:{type:"object",properties:{value:{type:"string"},label:{type:"string"}}},default:[{value:"124e4567e89b",label:"Choice 1"}]},max:{type:["number","boolean"],default:!1},min:{type:["number","boolean"],default:!1},verticalAlign:{type:"boolean",default:!1},multiple:{type:"boolean"},other:{type:"boolean",default:!1},otherText:{type:"string",default:"Other"},otherPlaceholder:{type:"string",default:"Please specify"},deselectAllWhenOtherSelected:{type:"boolean",default:!1}},logicalOperators:["is","is_not"]};(0,e.setBlockRendererSettings)(X,G)})(),(window.qf=window.qf||{}).blocklibMultipleChoiceBlockRenderer={}})();