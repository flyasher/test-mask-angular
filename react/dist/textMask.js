!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t(require("react")):"function"==typeof define&&define.amd?define(["react"],t):"object"==typeof exports?exports.textMask=t(require("react")):e.textMask=t(e.React)}(this,function(e){return function(e){function t(n){if(r[n])return r[n].exports;var a=r[n]={exports:{},id:n,loaded:!1};return e[n].call(a.exports,a,a.exports,t),a.loaded=!0,a.exports}var r={};return t.m=e,t.c=r,t.p="",t(0)}([function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0}),t.adjustCaretPosition=t.convertMaskToPlaceholder=t.conformToMask=t.MaskedInput=void 0;var a=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o=r(5);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return o.conformToMask}}),Object.defineProperty(t,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return o.convertMaskToPlaceholder}}),Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return o.adjustCaretPosition}});var i=r(7),u=n(i),s=function(e,t,r,n){return(0,o.conformToMask)(e,t,r===!1?{guide:r,previousConformedInput:n}:{})},c=function(){var e=arguments.length<=0||void 0===arguments[0]?{}:arguments[0],t=e.mask,r=e.guide,n=e.value,a=s(n,t,r,""),i=a.output,u=(0,o.convertMaskToPlaceholder)(t),c=i===u?"":i;return{conformedInput:c,adjustedCaretPosition:0,placeholder:u}},l=t.MaskedInput=u["default"].createClass({displayName:"MaskedInput",propTypes:{mask:i.PropTypes.string.isRequired,guide:i.PropTypes.bool},getInitialState:function(){return c(this.props)},componentWillReceiveProps:function(e){e.mask===this.props.mask&&e.guide===this.props.guide||this.setState(c(e))},componentDidUpdate:function(){(0,o.safeSetSelection)(this.refs.inputElement,this.state.adjustedCaretPosition)},render:function(){var e=this.props,t=this.state,r=t.placeholder,n=t.conformedInput,o=this.onChange,i=e.placeholder,s=void 0===i?r:i,c=e.type,l=void 0===c?"text":c;return u["default"].createElement("input",a({},e,{type:l,onChange:o,value:n,placeholder:s,ref:"inputElement"}))},onChange:function(e){var t=e.target.value,r=this.props,n=r.mask,a=r.guide,i=this.state,u=i.placeholder,c=i.conformedInput,l=s(t,n,a,c),d=l.output,f=(0,o.adjustCaretPosition)({previousConformedInput:c,conformToMaskResults:l,currentCaretPosition:this.refs.inputElement.selectionStart}),p=d===u&&0===f?"":d;this.setState({conformedInput:p,adjustedCaretPosition:f}),e.target.value=p,"function"==typeof this.props.onChange&&this.props.onChange(e)}});t["default"]=l},function(e,t){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.maskingCharactersEnums={numeric:"1",alphabetic:"A",alphanumeric:"?",uppercase:"U",lowercase:"L",any:"*"},t.maskingCharactersWithDescription={1:"Any number",A:"Any letter","?":"Any number or letter",U:"Any letter (will be transformed to uppercase)",L:"Any letter (will be transformed to lowercase)","*":"Any character"},t.maskingCharacters=["1","A","?","U","L","*"],t.placeholderCharacter="_"},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return a(e).map(function(e){return-1!==l.maskingCharacters.indexOf(e)?l.placeholderCharacter:e}).join("")}function a(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0];return e.split("")}function o(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case l.maskingCharactersEnums.numeric:return u(e);case l.maskingCharactersEnums.uppercase:case l.maskingCharactersEnums.lowercase:case l.maskingCharactersEnums.alphabetic:return s(e);case l.maskingCharactersEnums.alphanumeric:return u(e)||s(e);case l.maskingCharactersEnums.any:return!0;default:return!1}}function i(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments[1];switch(t){case l.maskingCharactersEnums.uppercase:return e.toUpperCase();case l.maskingCharactersEnums.lowercase:return e.toLowerCase();default:return e}}function u(e){return!isNaN(e)&&" "!==e}function s(e){return/^[a-zA-Z]+$/.test(e)}function c(e,t){for(var r=e.length>t.length?e.length:t.length,n=0;r>n;n++)if(e[n]!==t[n])return n;return null}Object.defineProperty(t,"__esModule",{value:!0}),t.convertMaskToPlaceholder=n,t.tokenize=a,t.isAcceptableCharacter=o,t.potentiallyTransformCharacter=i,t.getIndexOfFirstChange=c;var l=r(1)},function(e,t,r){"use strict";function n(e){var t=e.previousConformedInput,r=void 0===t?"":t,n=e.conformToMaskResults,i=void 0===n?{}:n,u=e.currentCaretPosition,s=void 0===u?0:u;if(0===s)return 0;var c=i.output,l=void 0===c?"":c,d=i.meta,f=void 0===d?{}:d,p=f.input,h=void 0===p?"":p,v=f.mask,m=void 0===v?"":v,g=(0,a.getIndexOfFirstChange)(r,h),C=g-s>1;if(C)return s;var k=(0,a.convertMaskToPlaceholder)(m),b=!(h.length<r.length),y=Math.abs(r.length-h.length)>1,P=b&&(r===l||l===k),M=""===r&&l===k,j=y?l:k,T=k[g]!==o.placeholderCharacter,O=s;if(y)O=0;else if(P)O--;else if(b)for(var _=s;_<k.length;_++){var x=T&&M===!1;if(k[_]===o.placeholderCharacter){O=_+(x?1:0);break}}if(b){for(var E=O;E<=j.length;E++)if(j[E]===o.placeholderCharacter||E===j.length)return E>l.length?l.length:E}else for(var I=O;I>=0;I--)if(j[I-1]===o.placeholderCharacter||0===I)return I}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var a=r(2),o=r(1)},function(e,t,r){"use strict";function n(){var e=arguments.length<=0||void 0===arguments[0]?"":arguments[0],t=arguments.length<=1||void 0===arguments[1]?"":arguments[1],r=arguments.length<=2||void 0===arguments[2]?{}:arguments[2],n=(0,a.convertMaskToPlaceholder)(t),i=r.guide,u=void 0===i?!0:i,s=r.previousConformedInput,c=u===!1&&void 0!==s,l=(0,a.tokenize)(e),d=c&&!(e.length<s.length),f="";if(""!==e){e:for(var p=0;p<n.length;p++){var h=n[p];if(h===o.placeholderCharacter){if(l.length>0)for(;l.length>0;){var v=l.shift();if(v===o.placeholderCharacter&&c!==!0){f+=o.placeholderCharacter;continue e}if((0,a.isAcceptableCharacter)(v,t[p])){f+=(0,a.potentiallyTransformCharacter)(v,t[p]);continue e}}if(c)break;f+=h}else f+=h}if(c&&d===!1){for(var m=null,g=0;g<f.length;g++)n[g]===o.placeholderCharacter&&f[g]!==o.placeholderCharacter&&(m=g);f=null!==m?f.substr(0,m+1):""}}return{output:f,meta:{input:e,mask:t,guide:u}}}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=n;var a=r(2),o=r(1)},function(e,t,r){"use strict";function n(e){return e&&e.__esModule?e:{"default":e}}Object.defineProperty(t,"__esModule",{value:!0});var a=r(4);Object.defineProperty(t,"conformToMask",{enumerable:!0,get:function(){return n(a)["default"]}});var o=r(3);Object.defineProperty(t,"adjustCaretPosition",{enumerable:!0,get:function(){return n(o)["default"]}});var i=r(6);Object.defineProperty(t,"safeSetSelection",{enumerable:!0,get:function(){return n(i)["default"]}});var u=r(2);Object.defineProperty(t,"convertMaskToPlaceholder",{enumerable:!0,get:function(){return u.convertMaskToPlaceholder}})},function(e,t){"use strict";function r(e,t){document.activeElement===e&&e.setSelectionRange(t,t,"none")}Object.defineProperty(t,"__esModule",{value:!0}),t["default"]=r},function(t,r){t.exports=e}])});