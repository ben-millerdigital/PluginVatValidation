(window.webpackJsonp=window.webpackJsonp||[]).push([["plugin-vat-validation"],{AprT:function(e,t,r){"use strict";function n(e){return e.split(" ").map((function(e){return e.charAt(0).toUpperCase()+e.substr(1).toLowerCase()})).join(" ")}r.d(t,"a",(function(){return n}))},KSRX:function(e,t,r){"use strict";(function(e){r.d(t,"a",(function(){return v}));var n=r("wDUh"),i=r("FGIj"),o=r("p4AR"),l=r("u0Tz"),s=r("AprT");function a(e){return(a="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,i=!1,o=void 0;try{for(var l,s=e[Symbol.iterator]();!(n=(l=s.next()).done)&&(r.push(l.value),!t||r.length!==t);n=!0);}catch(e){i=!0,o=e}finally{try{n||null==s.return||s.return()}finally{if(i)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return c(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return c(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function c(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function m(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function d(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function f(e,t){return!t||"object"!==a(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function p(e){return(p=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function h(e,t){return(h=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var b,y,g,v=function(t){function r(){return m(this,r),f(this,p(r).apply(this,arguments))}var i,a,c;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&h(e,t)}(r,t),i=r,(a=[{key:"init",value:function(){this._client=new o.a,this.$companyVatId=this.el.querySelector(this.options.companyVatIdSelector),this.$companyName=this.el.querySelector(this.options.companyNameSelector),this.$companyAddress=this.el.querySelector(this.options.companyAddressSelector),this.$companyZipcode=this.el.querySelector(this.options.companyZipcodeSelector),this.$companyCity=this.el.querySelector(this.options.companyCitySelector),this.$companyCountry=this.el.querySelector(this.options.companyCountrySelector),this._registerEvents()}},{key:"_registerEvents",value:function(){this.$companyVatId.addEventListener("change",this._onChange.bind(this))}},{key:"_onChange",value:function(t){var r=t.target.value.trim(),i=Object(n.a)(r,n.b),o=i.isValid,l=i.country;o&&(this._resetAllCompanyRegistrationValues(),this._fetchData(r),this._setSelectOption(this.$companyCountry,l.name),e(".country-select").keyup())}},{key:"_fetchData",value:function(e){l.a.create(this.$companyVatId.parentNode),this._client.get("store-api/company/".concat(e),this._handleData.bind(this))}},{key:"_handleData",value:function(e,t){if(l.a.remove(this.$companyVatId.parentNode),t.status>=400)throw new Error("Failed to parse vat validation info from VIES response");this._parseData(e)}},{key:"_parseData",value:function(e){var t=JSON.parse(e),r=t.traderName,n=u(t.traderAddress.replace("\n",", ").match(/\w+/g),4),i=n[0],o=n[1],l=n[2],s=n[3];this._setInputValue(this.$companyName,r),this._setInputValue(this.$companyAddress,i+" "+o,!0),this._setInputValue(this.$companyZipcode,l),this._setInputValue(this.$companyCity,s,!0)}},{key:"_resetAllCompanyRegistrationValues",value:function(){var e=this;[this.$companyName,this.$companyAddress,this.$companyZipcode,this.$companyCity,this.$companyCountry].forEach((function(t){switch(t.tagName){case"INPUT":e._resetInputValue(t);break;case"SELECT":e._resetSelectOption(t)}}))}},{key:"_setSelectOption",value:function(e,t){for(var r=0;r<e.options.length;++r)e.options[r].text===t&&(e.options[r].selected=!0)}},{key:"_setInputValue",value:function(e,t){var r=arguments.length>2&&void 0!==arguments[2]&&arguments[2];e.value=r?Object(s.a)(t):t}},{key:"_resetSelectOption",value:function(e){e.options[0].selected=!0}},{key:"_resetInputValue",value:function(e){e.value=""}}])&&d(i.prototype,a),c&&d(i,c),r}(i.a);g={companyVatIdSelector:"#vatIds",companyNameSelector:"#billingAddresscompany",companyAddressSelector:"#billingAddressAddressStreet",companyZipcodeSelector:"#billingAddressAddressZipcode",companyCitySelector:"#billingAddressAddressCity",companyCountrySelector:"#billingAddressAddressCountry"},(y="options")in(b=v)?Object.defineProperty(b,y,{value:g,enumerable:!0,configurable:!0,writable:!0}):b[y]=g}).call(this,r("UoTJ"))},wDUh:function(e,t,r){"use strict";const n={name:"Austria",codes:["AT","AUT","040"],calcFn:e=>{let t=0;for(let r=0;r<7;r++){const i=Number(e.charAt(r))*n.rules.multipliers.common[r];t+=i>9?Math.floor(i/10)+i%10:i}return t=10-(t+4)%10,10===t&&(t=0),t===Number(e.slice(7,8))},rules:{multipliers:{common:[1,2,1,2,1,2,1]},regex:[/^(AT)U(\d{8})$/]}},i={name:"Belgium",codes:["BE","BEL","056"],calcFn:e=>{const t=9===e.length?"0"+e:e;if(0===Number(t.slice(1,2)))return!1;return 97-Number(t.slice(0,8))%97===Number(t.slice(8,10))},rules:{multipliers:{},regex:[/^(BE)(0?\d{9})$/]}},o=e=>e%11<2?0:11-e%11,l={name:"Brazil",codes:["BR","BRA","076"],calcFn:e=>{const t=e.split("").map(Number);if((r=t).every((e=>r[0]===e)))return!1;var r;const n=((e,t)=>t.reduce((([t,r],n,i)=>[0===i?0:t+e[i-1]*n,r+e[i]*n]),[0,0]))(t,[6,5,4,3,2,9,8,7,6,5,4,3,2]);return t[12]===o(n[0])&&t[13]===o(n[1])},rules:{multipliers:{},regex:[/^(BR)?(\d{14}|\d{2}\.\d{3}\.\d{3}\/\d{4}-\d{2})$/]}},s={name:"Bulgaria",codes:["BG","BGR","100"],calcFn:e=>{if(9===e.length)return function(e){let t,r=a(0,e,0,8,1);const n=Number(e.slice(8));if(t=r%11,10!==t)return t===n;r=a(0,e,0,8,3),t=r%11,10===t&&(t=0);return t===n}(e);const{multipliers:t}=s.rules;return function(e,t){if(/^\d\d[0-5]\d[0-3]\d\d{4}$/.test(e)){const r=Number(e.slice(2,4));if(r>0&&r<13||r>20&&r<33||r>40&&r<53){let r=u(0,e,0,9,t);if(r%=11,10===r&&(r=0),r===Number(e.substr(9,1)))return!0}}return!1}(e,t.physical)||function(e,t){return u(0,e,0,9,t.foreigner)%10===Number(e.substr(9,1))}(e,t)||function(e,t){let r=u(0,e,0,9,t.miscellaneous);if(r=11-r%11,10===r)return!1;11===r&&(r=0);const n=Number(e.substr(9,1));return r===n}(e,t)},rules:{multipliers:{physical:[2,4,8,5,10,9,7,3,6],foreigner:[21,19,17,13,11,9,7,3,1],miscellaneous:[4,3,2,7,6,5,4,3,2]},regex:[/^(BG)(\d{9,10})$/]}};function a(e,t,r,n,i){let o=e;for(let e=r;e<n;e++)o+=Number(t.charAt(e))*(e+i);return o}function u(e,t,r,n,i){let o=e;for(let e=r;e<n;e++)o+=Number(t.charAt(e))*i[e];return o}const c={name:"Croatia",codes:["HR","HRV","191"],calcFn:e=>{let t=10,r=0;for(let n=0;n<10;n++)r=(Number(e.charAt(n))+t)%10,0===r&&(r=10),t=2*r%11;return(t+Number(e.slice(10,11)))%10==1},rules:{multipliers:{},regex:[/^(HR)(\d{11})$/]}},m={name:"Cyprus",codes:["CY","CYP","196"],calcFn:e=>{if(12===Number(e.slice(0,2)))return!1;let t=function(e,t){let r=t;for(let t=0;t<8;t++){let n=Number(e.charAt(t));if(t%2==0)switch(n){case 0:n=1;break;case 1:n=0;break;case 2:n=5;break;case 3:n=7;break;case 4:n=9;break;default:n=2*n+3}r+=n}return r}(e,0);t%=26,t=String.fromCharCode(t+65);return t===e.substr(8,1)},rules:{multipliers:{},regex:[/^(CY)([0-59]\d{7}[A-Z])$/]}};const d={name:"Czech Republic",codes:["CZ","CZE","203"],calcFn:e=>{const{rules:t}=d,{multipliers:r,additional:n,lookup:i}=t;return!!n&&(function(e,t,r){let n=0;if(r[0].test(e)){for(let r=0;r<7;r++)n+=Number(e.charAt(r))*t[r];n=11-n%11,10===n&&(n=0),11===n&&(n=1);return n===Number(e.slice(7,8))}return!1}(e,r.common,n)||function(e,t,r,n){let i=0;if(r[2].test(e)){for(let r=0;r<7;r++)i+=Number(e.charAt(r+1))*t[r];let r;r=i%11==0?i+11:11*Math.ceil(i/11);const o=r-i-1,l=Number(e.slice(8,9));return!!n&&n[o]===l}return!1}(e,r.common,n,i)||function(e,t){if(t[3].test(e)){const t=Number(e.slice(0,2))+Number(e.slice(2,4))+Number(e.slice(4,6))+Number(e.slice(6,8))+Number(e.slice(8)),r=Number(e)%11==0;return!(t%11!=0||!r)}return!1}(e,n)||function(e,t){if(t[1].test(e))return Number(e.slice(0,2))<=62;return!1}(e,n))},rules:{multipliers:{common:[8,7,6,5,4,3,2]},lookup:[8,7,6,5,4,3,2,1,0,9,8],regex:[/^(CZ)(\d{8,10})(\d{3})?$/],additional:[/^\d{8}$/,/^[0-5][0-9][0|1|5|6]\d[0-3]\d\d{3}$/,/^6\d{8}$/,/^\d{2}[0-3|5-8]\d[0-3]\d\d{4}$/]}};const f={name:"Denmark",codes:["DK","DNK","208"],calcFn:e=>{let t=0;for(let r=0;r<8;r++)t+=Number(e.charAt(r))*f.rules.multipliers.common[r];return t%11==0},rules:{multipliers:{common:[2,7,6,5,4,3,2,1]},regex:[/^(DK)(\d{8})$/]}},p={name:"Estonia",codes:["EE","EST","233"],calcFn:e=>{let t,r=0;for(let t=0;t<8;t++)r+=Number(e.charAt(t))*p.rules.multipliers.common[t];return r=10-r%10,10===r&&(r=0),t=Number(e.slice(8,9)),r===t},rules:{multipliers:{common:[3,7,1,3,7,1,3,7]},regex:[/^(EE)(10\d{7})$/]}},h={name:"Finland",codes:["FI","FIN","246"],calcFn:e=>{let t=0;for(let r=0;r<7;r++)t+=Number(e.charAt(r))*h.rules.multipliers.common[r];t=11-t%11,t>9&&(t=0);return t===Number(e.slice(7,8))},rules:{multipliers:{common:[7,9,10,5,8,4,2]},regex:[/^(FI)(\d{8})$/]}},b={name:"France",codes:["FR","FRA","250"],calcFn:e=>{let t;if(!/^\d{11}$/.test(e))return!0;t=Number(e.substring(2)),t=(100*t+12)%97;return t===Number(e.slice(0,2))},rules:{multipliers:{},regex:[/^(FR)(\d{11})$/,/^(FR)([A-HJ-NP-Z]\d{10})$/,/^(FR)(\d[A-HJ-NP-Z]\d{9})$/,/^(FR)([A-HJ-NP-Z]{2}\d{9})$/]}},y={name:"Germany",codes:["DE","DEU","276"],calcFn:e=>{let t,r=10,n=0,i=0;for(let t=0;t<8;t++)n=(Number(e.charAt(t))+r)%10,0===n&&(n=10),r=2*n%11;return i=11-r==10?0:11-r,t=Number(e.slice(8,9)),i===t},rules:{multipliers:{},regex:[/^(DE)([1-9]\d{8})$/]}},g={name:"Greece",codes:["GR","GRC","300"],calcFn:e=>{let t=0;const r=8===e.length?"0"+e:e;for(let e=0;e<8;e++)t+=Number(r.charAt(e))*g.rules.multipliers.common[e];t%=11,t=t>9?0:t;return t===Number(r.slice(8,9))},rules:{multipliers:{common:[256,128,64,32,16,8,4,2]},regex:[/^(EL)(\d{9})$/]}},v={name:"Hungary",codes:["HU","HUN","348"],calcFn:e=>{let t=0;for(let r=0;r<7;r++)t+=Number(e.charAt(r))*v.rules.multipliers.common[r];t=10-t%10,10===t&&(t=0);return t===Number(e.slice(7,8))},rules:{multipliers:{common:[9,7,3,1,9,7,3]},regex:[/^(HU)(\d{8})$/]}},A={name:"Ireland",codes:["IE","IRL","372"],calcFn:e=>{const{typeFormats:t,multipliers:r}=A.rules;if(!t||!t.first)return!1;let n=0,i=e;t.first.test(e)&&(i="0"+e.substring(2,7)+e.substring(0,1)+e.substring(7,8));for(let e=0;e<7;e++)n+=Number(i.charAt(e))*r.common[e];t.third.test(i)&&(n+="H"===i.charAt(8)?72:9),n%=23,n=0===n?"W":String.fromCharCode(n+64);return n===i.slice(7,8)},rules:{multipliers:{common:[8,7,6,5,4,3,2]},typeFormats:{first:/^\d[A-Z*+]/,third:/^\d{7}[A-Z][AH]$/},regex:[/^(IE)(\d{7}[A-W])$/,/^(IE)([7-9][A-Z*+)]\d{5}[A-W])$/,/^(IE)(\d{7}[A-W][AH])$/]}},N={name:"Italy",codes:["IT","ITA","380"],calcFn:e=>{let t,r=0;if(0===Number(e.slice(0,7)))return!1;if(t=Number(e.slice(7,10)),t<1||t>201&&999!==t&&888!==t)return!1;for(let n=0;n<10;n++)t=Number(e.charAt(n))*N.rules.multipliers.common[n],r+=t>9?Math.floor(t/10)+t%10:t;r=10-r%10,r>9&&(r=0);return r===Number(e.slice(10,11))},rules:{multipliers:{common:[1,2,1,2,1,2,1,2,1,2]},regex:[/^(IT)(\d{11})$/]}},S={name:"Latvia",codes:["LV","LVA","428"],calcFn:e=>{let t=0;if(/^[0-3]/.test(e))return Boolean(/^[0-3][0-9][0-1][0-9]/.test(e));for(let r=0;r<10;r++)t+=Number(e.charAt(r))*S.rules.multipliers.common[r];t%11==4&&9===Number(e[0])&&(t-=45),t%11==4?t=4-t%11:t%11>4?t=14-t%11:t%11<4&&(t=3-t%11);return t===Number(e.slice(10,11))},rules:{multipliers:{common:[9,1,4,8,3,10,2,5,7,6]},regex:[/^(LV)(\d{11})$/]}},E={name:"Lithuania",codes:["LT","LTU","440"],calcFn:e=>function(e,t){let r=0;if(9===e.length){if(!/^\d{7}1/.test(e))return!1;r=function(e,t){let r=t;for(let t=0;t<8;t++)r+=Number(e.charAt(t))*(t+1);return r}(e,r),r=function(e,t,r){let n=t;if(n%11==10){n=0;for(let t=0;t<8;t++)n+=_(e,r.multipliers.short,t)}return n}(e,r,t),r=$(r);return r===Number(e.slice(8,9))}return!1}(e,E.rules)||function(e,t){let r=0;if(12===e.length){if(!t.check)return!1;if(!t.check.test(e))return!1;r=function(e,t,r){let n=t;for(let t=0;t<11;t++)n+=_(e,r.multipliers.med,t);return n}(e,r,t),r=function(e,t,r){let n=t;if(t%11==10){n=0;for(let t=0;t<11;t++)n+=_(e,r.multipliers.alt,t)}return n}(e,r,t),r=$(r);return r===Number(e.slice(11,12))}return!1}(e,E.rules),rules:{multipliers:{short:[3,4,5,6,7,8,9,1],med:[1,2,3,4,5,6,7,8,9,1,2],alt:[3,4,5,6,7,8,9,1,2,3,4]},check:/^\d{10}1/,regex:[/^(LT)(\d{9}|\d{12})$/]}};function _(e,t,r){return Number(e.charAt(r))*t[r]}function $(e){let t=e%11;return 10===t&&(t=0),t}const F={name:"Luxembourg",codes:["LU","LUX","442"],calcFn:e=>{const t=Number(e.slice(6,8));return Number(e.slice(0,6))%89===t},rules:{multipliers:{},regex:[/^(LU)(\d{8})$/]}},V={name:"Malta",codes:["MT","MLT","470"],calcFn:e=>{let t=0;for(let r=0;r<6;r++)t+=Number(e.charAt(r))*V.rules.multipliers.common[r];t=37-t%37;return t===Number(e.slice(6,8))},rules:{multipliers:{common:[3,4,6,7,8,9]},regex:[/^(MT)([1-9]\d{7})$/]}},w={name:"Netherlands",codes:["NL","NLD","528"],calcFn:e=>{const t=e.replace(/[\ \-\_]/g,"").toUpperCase(),{additional:r,multipliers:n}=w.rules;if(!r)return!1;const i=t.match(r[0]);if(!i||!i[1])return!1;const o=i[1],l=`NL${t}`.split("").map(C);let s=0;for(let e=0;e<8;e++)s+=Number(o.charAt(e))*n.common[e];s%=11,s>9&&(s=0);return s===Number(o.slice(8,9))||1===function(e,t){let r=0;for(const n of e.split(""))r=(10*r+ +n)%t;return r}(l.join(""),97)},rules:{multipliers:{common:[9,8,7,6,5,4,3,2]},regex:[/^(NL)(\d{9}B\d{2})$/],additional:[/^(\d{9})B\d{2}$/]}};function C(e){if("+"===e)return 36;if("*"===e)return 37;const t=e.charCodeAt(0)-55;return t>9&&t<91?t:parseInt(e,10)}const O={name:"Norway",codes:["NO","NOR","578"],calcFn:e=>{let t=0;for(let r=0;r<8;r++)t+=Number(e.charAt(r))*O.rules.multipliers.common[r];if(t=11-t%11,11===t&&(t=0),t<10){return t===Number(e.slice(8,9))}return!1},rules:{multipliers:{common:[3,2,7,6,5,4,3,2]},regex:[/^(NO)(\d{9})(MVA)?$/]}},T={name:"Poland",codes:["PL","POL","616"],calcFn:e=>{let t=0;for(let r=0;r<9;r++)t+=Number(e.charAt(r))*T.rules.multipliers.common[r];t%=11,t>9&&(t=0);return t===Number(e.slice(9,10))},rules:{multipliers:{common:[6,5,7,2,3,4,5,6,7]},regex:[/^(PL)(\d{10})$/]}},x={name:"Portugal",codes:["PT","PRT","620"],calcFn:e=>{let t=0;for(let r=0;r<8;r++)t+=Number(e.charAt(r))*x.rules.multipliers.common[r];t=11-t%11,t>9&&(t=0);return t===Number(e.slice(8,9))},rules:{multipliers:{common:[9,8,7,6,5,4,3,2]},regex:[/^(PT)(\d{9})$/]}},I={name:"Romania",codes:["RO","ROU","642"],calcFn:e=>{let t=0;const r=e.length,n=I.rules.multipliers.common.slice(10-r);for(let r=0;r<e.length-1;r++)t+=Number(e.charAt(r))*n[r];t=10*t%11,10===t&&(t=0);return t===Number(e.slice(e.length-1,e.length))},rules:{multipliers:{common:[7,5,3,2,1,7,5,3,2]},regex:[/^(RO)([1-9]\d{1,9})$/]}},L={name:"Russian Federation",codes:["RU","RUS","643"],calcFn:e=>function(e,t){let r=0;if(10===e.length){for(let n=0;n<10;n++)r+=Number(e.charAt(n))*t.multipliers.m_1[n];r%=11,r>9&&(r%=10);return r===Number(e.slice(9,10))}return!1}(e,L.rules)||function(e,t){let r=0,n=0;if(12===e.length){for(let n=0;n<11;n++)r+=Number(e.charAt(n))*t.multipliers.m_2[n];r%=11,r>9&&(r%=10);for(let r=0;r<11;r++)n+=Number(e.charAt(r))*t.multipliers.m_3[r];n%=11,n>9&&(n%=10);const i=r===Number(e.slice(10,11)),o=n===Number(e.slice(11,12));return i&&o}return!1}(e,L.rules),rules:{multipliers:{m_1:[2,4,10,3,5,9,4,6,8,0],m_2:[7,2,4,10,3,5,9,4,6,8,0],m_3:[3,7,2,4,10,3,5,9,4,6,8,0]},regex:[/^(RU)(\d{10}|\d{12})$/]}};const k={name:"Serbia",codes:["RS","SRB","688"],calcFn:e=>{let t=10,r=0;for(let n=0;n<8;n++)r=(Number(e.charAt(n))+t)%10,0===r&&(r=10),t=2*r%11;return 1===(t+Number(e.slice(8,9)))%10},rules:{multipliers:{},regex:[/^(RS)(\d{9})$/]}},j={name:"Slovakia Republic",codes:["SK","SVK","703"],calcFn:e=>0===Number(e)%11,rules:{multipliers:{},regex:[/^(SK)([1-9]\d[2346-9]\d{7})$/]}},R={name:"Slovenia",codes:["SI","SVN","705"],calcFn:e=>{let t=0;for(let r=0;r<7;r++)t+=Number(e.charAt(r))*R.rules.multipliers.common[r];t=11-t%11,10===t&&(t=0);const r=Number(e.slice(7,8));return!(11===t||t!==r)},rules:{multipliers:{common:[8,7,6,5,4,3,2]},regex:[/^(SI)([1-9]\d{7})$/]}},P={name:"Spain",codes:["ES","ESP","724"],calcFn:e=>{const{additional:t,multipliers:r}=P.rules;return!!t&&(t[0].test(e)?function(e,t){let r=D(e,t,0);r=10-r%10,10===r&&(r=0);const n=Number(e.slice(8,9));return r===n}(e,r.common):t[1].test(e)?function(e,t){let r=D(e,t,0);r=10-r%10;const n=String.fromCharCode(r+64),i=e.slice(8,9);return n===i}(e,r.common):t[2].test(e)?function(e){let t=e;"Y"===t.substring(0,1)&&(t=t.replace(/Y/,"1"));"Z"===t.substring(0,1)&&(t=t.replace(/Z/,"2"));const r="TRWAGMYFPDXBNJZSQVHLCKE".charAt(+t.substring(0,8)%23);return t.charAt(8)===r}(e):!!t[3].test(e)&&function(e){const t="TRWAGMYFPDXBNJZSQVHLCKE".charAt(Number(e.substring(1,8))%23);return e.charAt(8)===t}(e))},rules:{multipliers:{common:[2,1,2,1,2,1,2]},regex:[/^(ES)([A-Z]\d{8})$/,/^(ES)([A-HN-SW]\d{7}[A-J])$/,/^(ES)([0-9YZ]\d{7}[A-Z])$/,/^(ES)([KLMX]\d{7}[A-Z])$/],additional:[/^[A-H|J|U|V]\d{8}$/,/^[A-H|N-S|W]\d{7}[A-J]$/,/^[0-9|Y|Z]\d{7}[A-Z]$/,/^[K|L|M|X]\d{7}[A-Z]$/]}};function D(e,t,r){let n,i=r;for(let r=0;r<7;r++)n=Number(e.charAt(r+1))*t[r],i+=n>9?Math.floor(n/10)+n%10:n;return i}const q={name:"Sweden",codes:["SE","SWE","752"],calcFn:e=>{let t,r=0;for(let t=0;t<9;t+=2){const n=Number(e.charAt(t));r+=Math.floor(n/5)+2*n%10}let n=0;for(let t=1;t<9;t+=2)n+=Number(e.charAt(t));const i=(10-(r+n)%10)%10;return t=Number(e.slice(9,10)),i===t},rules:{multipliers:{},regex:[/^(SE)(\d{10}01)$/]}},U={name:"Switzerland",codes:["CH","CHE","756"],calcFn:e=>{let t=0;for(let r=0;r<8;r++)t+=Number(e.charAt(r))*U.rules.multipliers.common[r];if(t=11-t%11,10===t)return!1;11===t&&(t=0);return t===Number(e.substr(8,1))},rules:{multipliers:{common:[5,4,3,2,7,6,5,4]},regex:[/^(CHE)(\d{9})(MWST|TVA|IVA)?$/]}},B={name:"United Kingdom",codes:["GB","GBR","826"],calcFn:e=>"GD"===e.substr(0,2)?function(e){const t=500;return Number(e.substr(2,3))<t}(e):"HA"===e.substr(0,2)?function(e){const t=499;return Number(e.substr(2,3))>t}(e):function(e,t){let r=0;if(0===Number(e.slice(0)))return!1;const n=Number(e.slice(0,7));for(let n=0;n<7;n++)r+=Number(e.charAt(n))*t[n];let i=r;for(;i>0;)i-=97;if(i=Math.abs(i),i===Number(e.slice(7,9))&&n<9990001&&(n<1e5||n>999999)&&(n<9490001||n>97e5))return!0;i>=55?i-=55:i+=42;const o=Number(e.slice(7,9));return Boolean(i===o&&n>1e6)}(e,B.rules.multipliers.common),rules:{multipliers:{common:[8,7,6,5,4,3,2]},regex:[/^(GB)?(\d{9})$/,/^(GB)?(\d{12})$/,/^(GB)?(GD\d{3})$/,/^(GB)?(HA\d{3})$/]}};function Z(e,t,r){return{value:e||void 0,isValid:Boolean(t),isValidFormat:!!r&&K(e,r.rules.regex).isValid,isSupportedCountry:Boolean(r),country:r?{name:r.name,isoCode:{short:r.codes[0],long:r.codes[1],numeric:r.codes[2]}}:void 0}}const M=[l.name];function H(e){return!!e.match(/^\d{2}/)}function G(e,t){return function(e){return[...e.codes,"Greece"===e.name?"EL":void 0].filter(Boolean)}(t).filter((t=>e.startsWith(t))).length>0}function K(e,t){for(const r of t){if(r.test(e))return{isValid:!0,regex:r}}return{isValid:!1,regex:void 0}}function J(e,t=[]){if(!e)return Z(e,!1);const r=function(e=""){return e.toString().toUpperCase().replace(/(\s|-|\.|\/)+/g,"")}(e),n=function(e,t){for(const n of t)if(G(e,n)||(r=n.name,M.includes(r)&&H(e)))return{...n};var r}(r,t);return Z(r,!!n&&function(e,t){const r=K(e,t.rules.regex);if(!r.isValid||!r.regex)return!1;const n=r.regex.exec(e);return!!n&&t.calcFn(n[2])}(r,n),n)}r.d(t,"b",(function(){return W})),r.d(t,"a",(function(){return J}));const W=[{name:"Andorra",codes:["AD","AND","020"],calcFn:e=>8===e.length,rules:{multipliers:{},regex:[/^(AD)([fealecdgopuFEALECDGOPU]{1}\d{6}[fealecdgopuFEALECDGOPU]{1})$/]}},n,i,l,s,c,m,d,f,p,{name:"Europe",codes:["EU","EUR","000"],calcFn:()=>!0,rules:{multipliers:{},regex:[/^(EU)(\d{9})$/]}},h,b,y,g,v,A,N,S,E,F,V,w,O,T,x,I,L,k,j,R,P,q,U,B]},z6j6:function(e,t,r){"use strict";r.r(t);var n=r("KSRX"),i=r("zFsc"),o=r("wDUh");function l(e){return(l="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function s(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function a(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function u(e,t){return!t||"object"!==l(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function c(e,t,r){return(c="undefined"!=typeof Reflect&&Reflect.get?Reflect.get:function(e,t,r){var n=function(e,t){for(;!Object.prototype.hasOwnProperty.call(e,t)&&null!==(e=m(e)););return e}(e,t);if(n){var i=Object.getOwnPropertyDescriptor(n,t);return i.get?i.get.call(r):i.value}})(e,t,r||e)}function m(e){return(m=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function d(e,t){return(d=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var f,p,h,b=function(e){function t(){return s(this,t),u(this,m(t).apply(this,arguments))}var r,n,i;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&d(e,t)}(t,e),r=t,(n=[{key:"_registerEvents",value:function(){c(m(t.prototype),"_registerEvents",this).call(this),this._registerValidationListener(this.options.vatAttr,this._onValidateVat.bind(this),["change"])}},{key:"_onValidateVat",value:function(e){var t=e.target,r=t.value.trim(),n=Object(o.a)(r,o.b).isValid;r&&!n?this._setFieldToInvalid(t,this.options.vatAttr):this._setFieldToValid(t,this.options.vatAttr),this.$emitter.publish("onValidateVat")}}])&&a(r.prototype,n),i&&a(r,i),t}(i.a);h={stylingEnabled:!0,styleCls:"was-validated",hintCls:"invalid-feedback",debounceTime:"150",eventName:"ValidateEqual",equalAttr:"data-form-validation-equal",lengthAttr:"data-form-validation-length",lengthTextAttr:"data-form-validation-length-text",vatAttr:"data-form-validation-vat-valid"},(p="options")in(f=b)?Object.defineProperty(f,p,{value:h,enumerable:!0,configurable:!0,writable:!0}):f[p]=h;var y=window.PluginManager;y.register("VatValidationLoaderDataPlugin",n.a,".register-form"),y.override("FormValidation",b,"[data-form-validation]")},zFsc:function(e,t,r){"use strict";r.d(t,"a",(function(){return g}));var n=r("FGIj"),i=r("gHbT"),o=r("nhVY"),l=r("ERap");function s(e){return(s="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e})(e)}function a(e){return function(e){if(Array.isArray(e))return u(e)}(e)||function(e){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(e))return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return u(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return u(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function u(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function c(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function m(e,t){for(var r=0;r<t.length;r++){var n=t[r];n.enumerable=n.enumerable||!1,n.configurable=!0,"value"in n&&(n.writable=!0),Object.defineProperty(e,n.key,n)}}function d(e,t){return!t||"object"!==s(t)&&"function"!=typeof t?function(e){if(void 0===e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return e}(e):t}function f(e){return(f=Object.setPrototypeOf?Object.getPrototypeOf:function(e){return e.__proto__||Object.getPrototypeOf(e)})(e)}function p(e,t){return(p=Object.setPrototypeOf||function(e,t){return e.__proto__=t,e})(e,t)}var h,b,y,g=function(e){function t(){return c(this,t),d(this,f(t).apply(this,arguments))}var r,n,s;return function(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function");e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,writable:!0,configurable:!0}}),t&&p(e,t)}(t,e),r=t,(n=[{key:"init",value:function(){if(!1===this._isFormElement())throw Error("Element is not of type <form>");this.options.stylingEnabled&&this._setNoValidate(),this._registerEvents()}},{key:"_isFormElement",value:function(){return"form"===this.el.tagName.toLowerCase()}},{key:"_setNoValidate",value:function(){this.el.setAttribute("novalidate","")}},{key:"_registerEvents",value:function(){this.options.stylingEnabled&&this.el.addEventListener("submit",this._onFormSubmit.bind(this)),this._registerValidationListener(this.options.equalAttr,this._onValidateEqualTrigger.bind(this),["change"]),this._registerValidationListener(this.options.equalAttr,o.a.debounce(this._onValidateEqual.bind(this),this.options.debounceTime),[this.options.eventName]),this._registerValidationListener(this.options.lengthAttr,this._onValidateLength.bind(this),["change"])}},{key:"_registerValidationListener",value:function(e,t,r){var n=i.a.querySelectorAll(this.el,"[".concat(e,"]"),!1);n&&l.a.iterate(n,(function(e){l.a.iterate(r,(function(r){e.removeEventListener(r,t),e.addEventListener(r,t)}))}))}},{key:"_onFormSubmit",value:function(e){var t=this.el.checkValidity();!1===t&&(e.preventDefault(),e.stopPropagation()),this.el.classList.add(this.options.styleCls),this.$emitter.publish("onFormSubmit",{validity:t}),this.$emitter.publish("beforeSubmit",{validity:t})}},{key:"_onValidateEqualTrigger",value:function(e){var t=this,r=i.a.getDataAttribute(e.target,this.options.equalAttr),n=i.a.querySelectorAll(this.el,"[".concat(this.options.equalAttr,"='").concat(r,"']"));n[1].value.trim().length>0&&l.a.iterate(n,(function(r){r.dispatchEvent(new CustomEvent(t.options.eventName,{target:e.target}))})),this.$emitter.publish("onValidateEqualTrigger")}},{key:"_onValidateEqual",value:function(e){var t=this,r=i.a.getDataAttribute(e.target,this.options.equalAttr),n=i.a.querySelectorAll(this.el,"[".concat(this.options.equalAttr,"='").concat(r,"']")),o=!0;a(n).reduce((function(e,t){e.value.trim()!==t.value.trim()&&(o=!1)})),l.a.iterate(n,(function(e){o?t._setFieldToValid(e,t.options.equalAttr):t._setFieldToInvalid(e,t.options.equalAttr)})),this.$emitter.publish("onValidateEqual")}},{key:"_onValidateLength",value:function(e){var t=e.target,r=t.value.trim(),n=i.a.getDataAttribute(e.target,this.options.lengthAttr),o=t.nextElementSibling;r.length<n?(this._setFieldToInvalid(t,this.options.lengthAttr),o&&o.hasAttribute(this.options.lengthTextAttr)&&o.classList.add(this.options.hintCls)):(this._setFieldToValid(t,this.options.lengthAttr),o&&o.hasAttribute(this.options.lengthTextAttr)&&o.classList.remove(this.options.hintCls)),this.$emitter.publish("onValidateLength")}},{key:"_setFieldToInvalid",value:function(e,t){this._showInvalidMessage(e,t),e.setAttribute("invalid",!0),this.$emitter.publish("setFieldToInvalid")}},{key:"_showInvalidMessage",value:function(e,t){var r=e.parentElement;r&&this.options.stylingEnabled&&r.classList.add(this.options.styleCls);var n=i.a.getDataAttribute(e,"".concat(t,"-message"),!1);n&&(r.querySelector(".js-validation-message")||e.insertAdjacentHTML("afterEnd",'<div class="invalid-feedback js-validation-message" data-type="'.concat(t,'">').concat(n,"</div>")),e.setCustomValidity(n)),this.$emitter.publish("showInvalidMessage")}},{key:"_setFieldToValid",value:function(e,t){this._hideInvalidMessage(e,t),e.removeAttribute("invalid"),e.setCustomValidity(""),this.$emitter.publish("setFieldToValid")}},{key:"_hideInvalidMessage",value:function(e,t){var r=e.parentElement;if(r&&this.options.stylingEnabled&&r.classList.remove(this.options.styleCls),r){var n=i.a.querySelector(r,".js-validation-message[data-type=".concat(t,"]"),!1);n&&n.remove()}this.$emitter.publish("hideInvalidMessage")}}])&&m(r.prototype,n),s&&m(r,s),t}(n.a);y={stylingEnabled:!0,styleCls:"was-validated",hintCls:"invalid-feedback",debounceTime:"150",eventName:"ValidateEqual",equalAttr:"data-form-validation-equal",lengthAttr:"data-form-validation-length",lengthTextAttr:"data-form-validation-length-text"},(b="options")in(h=g)?Object.defineProperty(h,b,{value:y,enumerable:!0,configurable:!0,writable:!0}):h[b]=y}},[["z6j6","runtime","vendor-node","vendor-shared"]]]);