/**
  * vee-validate v4.7.4
  * (c) 2023 Abdelrahman Awad
  * @license MIT
  */
!function(e,r){"object"==typeof exports&&"undefined"!=typeof module?r(exports):"function"==typeof define&&define.amd?define(["exports"],r):r((e="undefined"!=typeof globalThis?globalThis:e||self).VeeValidateZod={})}(this,(function(e){"use strict";function r(e){let r=String(e[0]);for(let t=1;t<e.length;t++)o=e[t],Number(o)>=0?r+=`[${e[t]}]`:r+=`.${e[t]}`;var o;return r}e.toFieldValidator=function(e){return{async validate(r){const o=await e.safeParseAsync(r);if(o.success)return!0;const t=new Error(o.error.message);throw t.name="ValidationError",t.errors=o.error.formErrors.formErrors,t}}},e.toFormValidator=function(e){return{async validate(o){const t=await e.safeParseAsync(o);if(t.success)return!0;const n=t.error.issues.map((e=>({path:r(e.path),errors:[e.message]}))),s=new Error(t.error.message);throw s.name="ValidationError",s.inner=n,s}}},Object.defineProperty(e,"__esModule",{value:!0})}));