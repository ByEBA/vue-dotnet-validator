!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.vueDotnetValidator=t():e.vueDotnetValidator=t()}(this,function(){return function(e){function t(r){if(n[r])return n[r].exports;var i=n[r]={exports:{},id:r,loaded:!1};return e[r].call(i.exports,i,i.exports,t),i.loaded=!0,i.exports}var n={};return t.m=e,t.c=n,t.p="",t(0)}([function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(3),o=r(i),a=n(14),u=r(a),s=n(7),l=r(s);e.exports={validatorGroup:u.default,validator:o.default,BaseValidator:l.default}},,,function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}var i=n(4),o=r(i);e.exports=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=n(5);for(var r in e)t[r]=e[r];var i="field-validation-valid",a=null;return{props:{value:{default:""},extraErrorMessage:{default:""}},data:function(){return{validators:[],blurred:!1,hasValidationError:!1,localInputValue:this.value,isTwoWayBind:!1,hasChanged:!1,name:"",field:null}},mounted:function(){var e=this;this.$nextTick(function(){return e.field=e.resolveField(e),e.field?(e.name=e.field.name,e.isTwoWayBind=e.$options._parentListeners&&!!e.$options._parentListeners.input,a=o.default.findValidatorGroup(e),e.findValidators(),e.addAriaDescribedBy(),e.$refs.message.innerText?e.blurred=!0:e.$refs.message.classList.add(i),e.$watch("validationMessage",e.showValidationMessage),e.isCheckbox||e.isRadio||e.field.addEventListener("blur",e.blurField),e.field.addEventListener("change",e.changeField),e.field.addEventListener("input",e.changeField),void a.addValidator(e)):void console.error("Field is missing!",e)})},destroyed:function(){var e=this;this.$nextTick(function(){a.removeValidator(e)})},methods:{resolveField:function(e){var t=this;return e?e.$refs.field?e.$refs.field:e.$children.length>0?e.$children.map(function(e){return t.resolveField(e)}).filter(function(e){return!!e})[0]:null:null},blurField:function(e){e&&(this.val=e.target.value),this.blurred=!0,this.$emit("blur-field",this),this.showValidationMessage()},changeField:function(e){e&&(this.isCheckbox?(this.blurred=!0,this.val=e.target.checked?e.target.value:""):this.val=e.target.value),this.hasChanged=!0,this.$emit("change-field",this),this.showValidationMessage()},findValidators:function(){var e=this,n=this.field.dataset,r=Object.keys(t);r.forEach(function(r){var i=n["val"+r];i&&e.validators.push(new t[r](i,n,a))})},showValidationMessage:function(){if(this.blurred)return this.$refs.message.innerHTML=this.validationMessage,this.validationMessage?(this.hasValidationError=!0,this.$refs.message.classList.remove(i)):(this.hasValidationError=!1,this.$refs.message.classList.add(i))},addAriaDescribedBy:function(){var e="vue-validator-"+parseInt(100*Math.random())+"-"+this._uid;this.$refs.message.id=e,this.field.setAttribute("aria-describedby",e),this.$refs.message.setAttribute("role","alert")}},computed:{isValid:function(){var e=this;return this.validators.filter(function(t){return t.isValid(e.val)}).length===this.validators.length&&!this.extraErrorMessage},validationMessage:function(){var e=this,t="";return this.validators.forEach(function(n){var r=n.isValid(e.val);r||t||(t=n.getMessage())}),t||this.hasChanged||(t=this.$refs.message.innerHTML),t||this.extraErrorMessage},val:{get:function(){return this.isTwoWayBind?this.value:this.localInputValue},set:function(e){return this.isTwoWayBind?this.$emit("input",e):this.localInputValue=e}},isCheckbox:function(){return this.field&&"checkbox"==this.field.type},isRadio:function(){return this.field&&"radio"==this.field.type}},watch:{isValid:function(){this.field.setAttribute("aria-invalid",!this.isValid)}}}}},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(){n(this,e)}return r(e,[{key:"findValidatorGroup",value:function(e){if(e.$parent)return e.$parent.isValidatorGroup?e.$parent:this.findValidatorGroup(e.$parent)}}]),e}();t.default=new i},function(e,t,n){"use strict";e.exports={Required:n(6),Minlength:n(8),Maxlength:n(9),Length:n(10),Range:n(11),Regex:n(12),Equalto:n(13)}},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(){return i(this,t),o(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return a(t,e),u(t,[{key:"isValid",value:function(e){return!!e}}]),t}(l.default);e.exports=f},function(e,t){"use strict";function n(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}Object.defineProperty(t,"__esModule",{value:!0});var r=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),i=function(){function e(t,r,i){n(this,e),this.message=t,this.attributes=r,this.validatorGroup=i}return r(e,[{key:"getMessage",value:function(){return this.message}},{key:"isValid",value:function(){}}]),e}();t.default=i},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n){i(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.minLength=n.valMinlengthMin,r}return a(t,e),u(t,[{key:"isValid",value:function(e){return!e||e.length>=this.minLength}}]),t}(l.default);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n){i(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.maxLength=n.valMaxlengthMax,r}return a(t,e),u(t,[{key:"isValid",value:function(e){return!e||e.length<=this.maxLength}}]),t}(l.default);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n){i(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.maxLength=n.valLengthMax,r.minLength=n.valLengthMin,r}return a(t,e),u(t,[{key:"isValid",value:function(e){return!e||e.length>=this.minLength&&e.length<=this.maxLength}}]),t}(l.default);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n){i(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.min=parseFloat(n.valRangeMin),r.max=parseFloat(n.valRangeMax),r}return a(t,e),u(t,[{key:"isValid",value:function(e){var t=parseFloat(e);return!e&&0!=t||!isNaN(t)&&t>=this.min&&t<=this.max}}]),t}(l.default);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n){i(this,t);var r=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n));return r.regex=new RegExp(n.valRegexPattern),r}return a(t,e),u(t,[{key:"isValid",value:function(e){return!e||this.regex.test(e)}}]),t}(l.default);e.exports=f},function(e,t,n){"use strict";function r(e){return e&&e.__esModule?e:{default:e}}function i(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function o(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function a(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}var u=function(){function e(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(t,n,r){return n&&e(t.prototype,n),r&&e(t,r),t}}(),s=n(7),l=r(s),f=function(e){function t(e,n,r){i(this,t);var a=o(this,(t.__proto__||Object.getPrototypeOf(t)).call(this,e,n,r));return a.otherFieldName=n.valEqualtoOther,a}return a(t,e),u(t,[{key:"isValid",value:function(e){var t=this.validatorGroup.findValidatorsByName(this.otherFieldName);if(null==t)return!0;var n=t[0];return!e||!n||e==n.val}}]),t}(l.default);e.exports=f},function(e,t){"use strict";function n(e,t){return e.indexOf(t,e.length-t.length)!==-1}e.exports={name:"vue-dotnet-validator-group",props:{onValid:{type:Function,default:null}},data:function(){return{validators:[],loading:!1,isValidatorGroup:!0}},methods:{validate:function(e){var t=!0;return this.validators.forEach(function(n){n.isValid||(t=!1,e.preventDefault(),n.blurField())}),t&&this.onValid instanceof Function?(e.preventDefault(),this.onValid(e)):(this.loading=t,t)},findValidatorsByName:function(e){return e=e.replace(/\*/g,"").replace(/\./g,""),this.validators.filter(function(t){return n(t.name,e)})},addValidator:function(e){this.validators.push(e)},removeValidator:function(e){this.validators.splice(this.validators.indexOf(e),1)}}}}])});