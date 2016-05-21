!function(e,r){"object"==typeof exports&&"object"==typeof module?module.exports=r():"function"==typeof define&&define.amd?define([],r):"object"==typeof exports?exports.textMask=r():e.textMask=r()}(this,function(){return function(e){function r(n){if(t[n])return t[n].exports;var a=t[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,r),a.loaded=!0,a.exports}var t={};return r.m=e,r.c=t,r.p="",r(0)}([function(e,r,t){"use strict";function n(e){function r(){var e=t.value,r=u.placeholder,c=u.conformedInput,i=(0,a.conformToMask)(e,n,o===!1?{guide:o,previousConformedInput:c}:{}),l=i.output,s=(0,a.adjustCaretPosition)({previousConformedInput:c,conformToMaskResults:i,currentCaretPosition:t.selectionStart}),f=l===r&&0===s?"":l;u.conformedInput=f,t.value=f,(0,a.safeSetSelection)(t,s)}var t=e.element,n=e.mask,o=e.guide,u={conformedInput:"",adjustedCaretPosition:0,placeholder:(0,a.convertMaskToPlaceholder)(n)};return t.placeholder=t.placeholder||u.placeholder,t.value=u.conformedInput,(0,a.safeSetSelection)(t,0),t.oninput=r,u}Object.defineProperty(r,"__esModule",{value:!0}),r.adjustCaretPosition=r.convertMaskToPlaceholder=r.conformToMask=void 0,r.maskInput=n;var a=t(5);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return a.conformToMask}}),Object.defineProperty(r,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return a.convertMaskToPlaceholder}}),Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return a.adjustCaretPosition}}),r.default=n},function(e,r){"use strict";Object.defineProperty(r,"__esModule",{value:!0});r.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},r.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},r.maskingCharacters=["1","A","?","U","L","*"],r.placeholderCharacter="_"},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).map(function(e){return-1!==d.maskingCharacters.indexOf(e)?d.placeholderCharacter:e}).join("")}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return o(e).reduce(function(e,r){return-1===d.maskingCharacters.indexOf(r)&&-1===e.indexOf(r)&&e.push(r),e},[])}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function u(e,r){return-1!==e.indexOf(r)}function c(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments[1];switch(r){case d.maskingCharactersEnums.numeric:return l(e);case d.maskingCharactersEnums.uppercase:case d.maskingCharactersEnums.lowercase:case d.maskingCharactersEnums.alphabetic:return s(e);case d.maskingCharactersEnums.alphanumeric:return l(e)||s(e);case d.maskingCharactersEnums.any:return!0;default:return!1}}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments[1];switch(r){case d.maskingCharactersEnums.uppercase:return e.toUpperCase();case d.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function l(e){return!isNaN(e)&&" "!==e}function s(e){return/^[a-zA-Z]+$/.test(e)}function f(e,r){for(var t=e.length>r.length?e.length:r.length,n=0;t>n;n++)if(e[n]!==r[n])return n;return null}Object.defineProperty(r,"__esModule",{value:!0}),r.convertMaskToPlaceholder=n,r.getDelimiters=a,r.tokenize=o,r.contains=u,r.isAcceptableCharacter=c,r.potentiallyTransformCharacter=i,r.getIndexOfFirstChange=f;var d=t(1)},function(e,r,t){"use strict";function n(e){var r=e.previousConformedInput,t=void 0===r?"":r,n=e.conformToMaskResults,u=void 0===n?{}:n,c=e.currentCaretPosition,i=void 0===c?0:c;if(0===i)return 0;var l=u.output,s=void 0===l?"":l,f=u.meta,d=void 0===f?{}:f,h=d.input,p=void 0===h?"":h,v=d.mask,m=void 0===v?"":v,g=(0,a.getIndexOfFirstChange)(t,p),C=g-i>1;if(C)return i;var k=(0,a.convertMaskToPlaceholder)(m),b=!(p.length<t.length),P=Math.abs(t.length-p.length)>1,y=b&&(t===s||s===k),M=""===t&&s===k,j=P?s:k,O=k[g]!==o.placeholderCharacter,T=i;if(P)T=0;else if(y)T--;else if(b)for(var x=i;x<k.length;x++){var _=O&&M===!1;if(k[x]===o.placeholderCharacter){T=x+(_?1:0);break}}if(b){for(var A=T;A<=j.length;A++)if(j[A]===o.placeholderCharacter||A===j.length)return A>s.length?s.length:A}else for(var I=T;I>=0;I--)if(j[I-1]===o.placeholderCharacter||0===I)return I}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var a=t(2),o=t(1)},function(e,r,t){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],r=arguments.length<=1||void 0===arguments[1]?"":arguments[1],t=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=(0,a.convertMaskToPlaceholder)(r),u=t.guide,c=void 0===u?!0:u,i=t.previousConformedInput,l=c===!1&&void 0!==i,s=(0,a.tokenize)(e),f=l&&!(e.length<i.length),d="";if(""!==e){e:for(var h=0;h<n.length;h++){var p=n[h];if(p===o.placeholderCharacter){if(s.length>0)for(;s.length>0;){var v=s.shift();if(v===o.placeholderCharacter&&l!==!0){d+=o.placeholderCharacter;continue e}if((0,a.isAcceptableCharacter)(v,r[h])){d+=(0,a.potentiallyTransformCharacter)(v,r[h]);continue e}}if(l)break;d+=p}else d+=p}if(l&&f===!1){for(var m=null,g=0;g<d.length;g++)n[g]===o.placeholderCharacter&&d[g]!==o.placeholderCharacter&&(m=g);d=null!==m?d.substr(0,m+1):""}}return{output:d,meta:{input:e,mask:r,guide:c}}}Object.defineProperty(r,"__esModule",{value:!0}),r.default=n;var a=t(2),o=t(1)},function(e,r,t){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(r,"__esModule",{value:!0});var a=t(4);Object.defineProperty(r,"conformToMask",{enumerable:!0,get:function(){return n(a).default}});var o=t(3);Object.defineProperty(r,"adjustCaretPosition",{enumerable:!0,get:function(){return n(o).default}});var u=t(6);Object.defineProperty(r,"safeSetSelection",{enumerable:!0,get:function(){return n(u).default}});var c=t(2);Object.defineProperty(r,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return c.convertMaskToPlaceholder}})},function(e,r){"use strict";function t(e,r){document.activeElement===e&&e.setSelectionRange(r,r,"none")}Object.defineProperty(r,"__esModule",{value:!0}),r.default=t}])});