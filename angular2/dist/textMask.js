!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("@angular/common"),require("@angular/core")):"function"==typeof define&&define.amd?define(["@angular/common","@angular/core"],t):"object"==typeof exports?exports.textMask=t(require("@angular/common"),require("@angular/core")):e.textMask=t(e.ng.common,e.ng.core)}(this,function(e,t){return function(e){function __webpack_require__(r){if(t[r])return t[r].exports;var n=t[r]={exports:{},id:r,loaded:!1};return e[r].call(n.exports,n,n.exports,__webpack_require__),n.loaded=!0,n.exports}var t={};return __webpack_require__.m=e,__webpack_require__.c=t,__webpack_require__.p="",__webpack_require__(0)}([function(e,t,r){"use strict";var n=this&&this.__decorate||function(e,t,r,n){var a,o=arguments.length,i=3>o?t:null===n?n=Object.getOwnPropertyDescriptor(t,r):n;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)i=Reflect.decorate(e,t,r,n);else for(var u=e.length-1;u>=0;u--)(a=e[u])&&(i=(3>o?a(i):o>3?a(t,r,i):a(t,r))||i);return o>3&&i&&Object.defineProperty(t,r,i),i},a=this&&this.__metadata||function(e,t){return"object"==typeof Reflect&&"function"==typeof Reflect.metadata?Reflect.metadata(e,t):void 0},o=r(8),i=r(7),u=r(6),c=function(){function MaskedInputDirective(e,t){this.inputElement=e,this.ngControl=t,this.textMaskConfig={mask:"",guide:!0,placeholderCharacter:void 0,validator:void 0},this.inputElement=e.nativeElement}return MaskedInputDirective.prototype.ngOnInit=function(){var e=this.textMaskConfig,t=e.mask,r=e.guide,n=e.placeholderCharacter,a=e.validator;this.control=u.default({inputElement:this.inputElement,mask:t,guide:r,placeholderCharacter:n,validator:a},!1)},MaskedInputDirective.prototype.onInput=function(){this.control.update(),this.ngControl.viewToModelUpdate(this.inputElement.value)},n([o.Input("textMask"),a("design:type",Object)],MaskedInputDirective.prototype,"textMaskConfig",void 0),MaskedInputDirective=n([o.Directive({selector:"input[textMask]",host:{"(input)":"onInput()"}}),a("design:paramtypes",["function"==typeof(e="undefined"!=typeof o.ElementRef&&o.ElementRef)&&e||Object,"function"==typeof(t="undefined"!=typeof i.NgControl&&i.NgControl)&&t||Object])],MaskedInputDirective);var e,t}();Object.defineProperty(t,"__esModule",{value:!0}),t.default=c,t.Directive=c},function(e,t,r){"use strict";function convertMaskToPlaceholder(e){var t=e.mask,r=void 0===t?"":t,a=e.placeholderChar,o=void 0===a?n.placeholderCharacter:a;if(-1!==r.indexOf(o))throw console.log("Text Mask received placeholder character: ",o),console.log("Text Mask received mask: ",r),new Error("Placeholder character must not be used as part of the mask. Please specify a character that is not present in your mask as your placeholder character.");for(var i=!1,u="",c=0;c<r.length;c++){var l=r[c];"\\"!==l||i===!0?i!==!0?u+=-1!==n.maskingCharacters.indexOf(l)?o:l:(i=!1,u+=l):(i=!0,u+="")}return u}function unescapeMask(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.replace(/\\./g," ")}function tokenize(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function isAcceptableCharacter(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case n.maskingCharactersEnums.numeric:return isNumeric(e);case n.maskingCharactersEnums.uppercase:case n.maskingCharactersEnums.lowercase:case n.maskingCharactersEnums.alphabetic:return isAlphabetic(e);case n.maskingCharactersEnums.alphanumeric:return isNumeric(e)||isAlphabetic(e);case n.maskingCharactersEnums.any:return!0;default:return!1}}function potentiallyTransformCharacter(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case n.maskingCharactersEnums.uppercase:return e.toUpperCase();case n.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function isNumeric(e){return!isNaN(e)&&" "!==e}function isAlphabetic(e){return/^[a-zA-Z]+$/.test(e)}function getIndexOfFirstChange(e,t){for(var r=e.length>t.length?e.length:t.length,n=0;r>n;n++)if(e[n]!==t[n])return n;return null}function isString(e){return"string"==typeof e||e instanceof String}function isNumber(e){return e&&void 0===e.length&&!isNaN(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=convertMaskToPlaceholder,t.unescapeMask=unescapeMask,t.tokenize=tokenize,t.isAcceptableCharacter=isAcceptableCharacter,t.potentiallyTransformCharacter=potentiallyTransformCharacter,t.getIndexOfFirstChange=getIndexOfFirstChange,t.isString=isString,t.isNumber=isNumber;var n=r(2)},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0});t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function adjustCaretPosition(e){var t=e.previousConformedInput,r=void 0===t?"":t,a=e.conformToMaskResults,o=void 0===a?{}:a,i=e.currentCaretPosition,u=void 0===i?0:i;if(0===u)return 0;var c=o.output,l=void 0===c?"":c,s=o.meta,d=void 0===s?{}:s,p=d.input,f=void 0===p?"":p,h=d.placeholderChar,v=d.placeholder,m=(0,n.getIndexOfFirstChange)(r,f),g=m-u>1;if(g)return u;var C=!(f.length<r.length),k=Math.abs(r.length-f.length)>1,_=1===f.length,b=k&&!C&&!_,y=C&&(r===l||l===v),M=""===r&&l===v,I=k||_?l:v,P=v[m]!==h,x=u;if(b)return u;if(k||_)x=0;else if(y)x--;else if(C)for(var T=u;T<v.length;T++){var w=P&&!M;if(v[T]===h){x=T+(w?1:0);break}}if(C||_){for(var E=x;E<=I.length;E++)if(I[E]===h||E===I.length)return E>l.length?l.length:E}else for(var j=x;j>=0;j--)if(I[j-1]===h||0===j)return j}Object.defineProperty(t,"__esModule",{value:!0}),t.default=adjustCaretPosition;var n=r(1)},function(e,t,r){"use strict";function _interopRequireDefault(e){return e&&e.__esModule?e:{"default":e}}function processComponentChanges(e){var t=e.userInput,r=void 0===t?"":t,n=e.componentPlaceholder,o=void 0===n?"":n,u=e.previousConformedInput,c=void 0===u?"":u,l=e.mask,s=void 0===l?"":l,d=e.guide,p=void 0===d?"":d,f=e.validator,h=e.currentCaretPosition,v=void 0===h?0:h,m=e.placeholderChar,g=(0,i.default)(r,s,{previousConformedInput:c,guide:p,placeholderChar:m,validator:f}),C=g.output,k=(0,a.default)({previousConformedInput:c,conformToMaskResults:g,currentCaretPosition:v,placeholderChar:m}),_=C===o&&0===k,b=_?"":C;return{conformedInput:b,adjustedCaretPosition:k}}function getComponentInitialState(e){var t=e.inputValue,r=e.mask,n=e.validator,a=e.guide,o=e.placeholderChar,c=getSafeInputValue(t),l=c.length>0,s={validator:n,guide:a,previousConformedInput:"",placeholderChar:o},d=l?(0,i.default)(c,r,s):{output:""},p=d.output;return{conformedInput:p,adjustedCaretPosition:0,componentPlaceholder:(0,u.convertMaskToPlaceholder)({mask:r,placeholderChar:o})}}function safeSetSelection(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}function getSafeInputValue(e){if((0,u.isString)(e))return e;if((0,u.isNumber)(e))return String(e);if(void 0===e||null===e)return"";throw console.log("Text Mask received",e),new Error("The `value` provided to Text Mask needs to be a string or a number.")}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=void 0,t.processComponentChanges=processComponentChanges,t.getComponentInitialState=getComponentInitialState,t.safeSetSelection=safeSetSelection;var n=r(3),a=_interopRequireDefault(n),o=r(5),i=_interopRequireDefault(o),u=r(1);t.convertMaskToPlaceholder=u.convertMaskToPlaceholder},function(e,t,r){"use strict";function conformToMask(){for(var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],o=r.guide,i=void 0===o?!0:o,u=r.previousConformedInput,c=void 0===u?"":u,l=r.placeholderChar,s=void 0===l?a.placeholderCharacter:l,d=r.validator,p=void 0===d?alwaysReturnTrue:d,f=(0,n.convertMaskToPlaceholder)({mask:t,placeholderChar:s}),h=i===!1&&void 0!==c,v=(0,n.getIndexOfFirstChange)(c,e),m=e.length-c.length,g=(0,n.tokenize)(e),C=h&&!(e.length<c.length),k=(0,n.unescapeMask)(t),_=0,b=0;b<f.length&&g.length>0;b++){var y=b>=v&&""!==c,M=(y?b+m:b)-_;f[b]===g[M]&&g[M]!==s&&(g.splice(M,1),_++)}var I="";e:for(var P=0;P<f.length;P++){var x=f[P];if(x===s){if(g.length>0)for(;g.length>0;){var T=g.shift();if(T===s&&h!==!0){I+=s;continue e}if((0,n.isAcceptableCharacter)(T,k[P])){I+=(0,n.potentiallyTransformCharacter)(T,k[P]);continue e}}h===!1&&(I+=f.substr(P,f.length));break}I+=x}if(h&&C===!1){for(var w=null,E=0;E<I.length;E++)f[E]===s&&(w=E);I=null!==w?I.substr(0,w+1):""}return{output:p(I)?I:c,meta:{input:e,mask:t,guide:i,placeholderChar:s,placeholder:f}}}function alwaysReturnTrue(){return!0}Object.defineProperty(t,"__esModule",{value:!0}),t.default=conformToMask;var n=r(1),a=r(2)},function(e,t,r){"use strict";function maskInput(e){var t=e.inputElement,r=e.mask,a=e.guide,o=e.validator,i=e.placeholderCharacter,u=arguments.length<=1||void 0===arguments[1]?!0:arguments[1],c=t.value,l=(0,n.getComponentInitialState)({inputValue:c,mask:r,guide:a,placeholderChar:i}),s=function(e){if(e!==l.conformedInput){var u=t.value,c=t.selectionStart,s=l.componentPlaceholder,d=l.conformedInput,p=(0,n.processComponentChanges)({userInput:e||u,componentPlaceholder:s,previousConformedInput:d,validator:o,mask:r,guide:a,placeholderChar:i,currentCaretPosition:c}),f=p.adjustedCaretPosition,h=p.conformedInput;l.conformedInput=h,t.value=h,(0,n.safeSetSelection)(t,f)}};return t.placeholder=""!==t.placeholder?t.placeholder:l.componentPlaceholder,t.value=l.conformedInput,u===!0&&t.addEventListener("input",s),{state:l,update:s,destroy:function(){t.removeEventListener("input",s)}}}Object.defineProperty(t,"__esModule",{value:!0}),t.maskInput=maskInput;var n=r(4);t.default=maskInput},function(t,r){t.exports=e},function(e,r){e.exports=t}])});