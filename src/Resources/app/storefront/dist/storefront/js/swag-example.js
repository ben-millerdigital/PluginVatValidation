(window.webpackJsonp=window.webpackJsonp||[]).push([["swag-example"],{NZUw:function(e,t,r){"use strict";r.r(t);var n=r("FGIj"),o=r("p4AR"),i=r("u0Tz");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,o=!1,i=void 0;try{for(var a,s=e[Symbol.iterator]();!(n=(a=s.next()).done)&&(r.push(a.value),!t||r.length!==t);n=!0);}catch(e){o=!0,i=e}finally{try{n||null==s.return||s.return()}finally{if(o)throw i}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function u(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function l(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function p(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function y(e){return(y=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function f(e,t){return(f=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var d,h,m,b=function(e){function t(){return u(this,t),p(this,y(t).apply(this,arguments))}var r,n,a;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&f(e,t)}(t,e),r=t,(n=[{key:"init",value:function(){this._client=new o.a,this.$vatIds=this.el.querySelector(this.options.vatIdsSelector),this.$companyName=this.el.querySelector(this.options.companyNameSelector),this.$companyAddress=this.el.querySelector(this.options.companyAddressSelector),this.$companyZipcode=this.el.querySelector(this.options.companyZipcodeSelector),this.$companyCity=this.el.querySelector(this.options.companyCitySelector),this._registerEvents()}},{key:"_registerEvents",value:function(){this.$vatIds.addEventListener("change",this._onChange.bind(this))}},{key:"_onChange",value:function(e){this._fetchData(e.target.value)}},{key:"_fetchData",value:function(e){i.a.create(this.$vatIds.parentNode),this._client.get("store-api/govapi/vat/".concat(e),this._handleData.bind(this))}},{key:"_handleData",value:function(e){i.a.remove(this.$vatIds.parentNode);var t=JSON.parse(e),r=s(t.traderAddress.replace("\n",", ").match(/^([^,]+), (\S+) ([^,]+)$/),4),n=r[1],o=r[2],a=r[3];this.$companyName.value=t.traderName,this.$companyAddress.value=this._titleCase(n),this.$companyZipcode.value=o,this.$companyCity.value=this._titleCase(a)}},{key:"_validateNip",value:function(e){if(10!==(e="number"==typeof e?e.toString():e.replace(/-/g,"")).length)return!1;var t=e.split("").map((function(e){return parseInt(e)})),r=(6*t[0]+5*t[1]+7*t[2]+2*t[3]+3*t[4]+4*t[5]+5*t[6]+6*t[7]+7*t[8])%11;return t[9]==r}},{key:"_titleCase",value:function(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})).join(" ")}}])&&l(r.prototype,n),a&&l(r,a),t}(n.a);m={vatIdsSelector:"#vatIds",companyNameSelector:"#billingAddresscompany",companyAddressSelector:"#billingAddressAddressStreet",companyZipcodeSelector:"#billingAddressAddressZipcode",companyCitySelector:"#billingAddressAddressCity",isLoading:""},(h="options")in(d=b)?Object.defineProperty(d,h,{value:m,enumerable:!0,configurable:!0,writable:!0}):d[h]=m,window.PluginManager.register("BaseExamplePlugin",b,".register-form")}},[["NZUw","runtime","vendor-node","vendor-shared"]]]);