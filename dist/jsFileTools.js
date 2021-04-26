!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define([],t):"object"==typeof exports?exports.jsFileTools=t():e.jsFileTools=t()}(this,(function(){return e={890:(e,t,r)=>{const n=r(231),i=r(610),{mkdirpNative:o,mkdirpNativeSync:s}=r(378),{mkdirpManual:c,mkdirpManualSync:a}=r(600),{useNative:d,useNativeSync:y}=r(167),p=(e,t)=>(e=i(e),t=n(t),d(t)?o(e,t):c(e,t));p.sync=(e,t)=>(e=i(e),t=n(t),y(t)?s(e,t):a(e,t)),p.native=(e,t)=>o(i(e),n(t)),p.manual=(e,t)=>c(i(e),n(t)),p.nativeSync=(e,t)=>s(i(e),n(t)),p.manualSync=(e,t)=>a(i(e),n(t)),e.exports=p},812:(e,t,r)=>{const{dirname:n}=r(622),i=(e,t,r)=>r===t?Promise.resolve():e.statAsync(t).then((e=>e.isDirectory()?r:void 0),(r=>"ENOENT"===r.code?i(e,n(t),t):void 0)),o=(e,t,r)=>{if(r!==t)try{return e.statSync(t).isDirectory()?r:void 0}catch(r){return"ENOENT"===r.code?o(e,n(t),t):void 0}};e.exports={findMade:i,findMadeSync:o}},600:(e,t,r)=>{const{dirname:n}=r(622),i=(e,t,r)=>{t.recursive=!1;const o=n(e);return o===e?t.mkdirAsync(e,t).catch((e=>{if("EISDIR"!==e.code)throw e})):t.mkdirAsync(e,t).then((()=>r||e),(n=>{if("ENOENT"===n.code)return i(o,t).then((r=>i(e,t,r)));if("EEXIST"!==n.code&&"EROFS"!==n.code)throw n;return t.statAsync(e).then((e=>{if(e.isDirectory())return r;throw n}),(()=>{throw n}))}))},o=(e,t,r)=>{const i=n(e);if(t.recursive=!1,i===e)try{return t.mkdirSync(e,t)}catch(e){if("EISDIR"!==e.code)throw e;return}try{return t.mkdirSync(e,t),r||e}catch(n){if("ENOENT"===n.code)return o(e,t,o(i,t,r));if("EEXIST"!==n.code&&"EROFS"!==n.code)throw n;try{if(!t.statSync(e).isDirectory())throw n}catch(e){throw n}}};e.exports={mkdirpManual:i,mkdirpManualSync:o}},378:(e,t,r)=>{const{dirname:n}=r(622),{findMade:i,findMadeSync:o}=r(812),{mkdirpManual:s,mkdirpManualSync:c}=r(600);e.exports={mkdirpNative:(e,t)=>(t.recursive=!0,n(e)===e?t.mkdirAsync(e,t):i(t,e).then((r=>t.mkdirAsync(e,t).then((()=>r)).catch((r=>{if("ENOENT"===r.code)return s(e,t);throw r}))))),mkdirpNativeSync:(e,t)=>{if(t.recursive=!0,n(e)===e)return t.mkdirSync(e,t);const r=o(t,e);try{return t.mkdirSync(e,t),r}catch(r){if("ENOENT"===r.code)return c(e,t);throw r}}}},231:(e,t,r)=>{const{promisify:n}=r(669),i=r(747);e.exports=e=>{if(e)if("object"==typeof e)e={mode:511,fs:i,...e};else if("number"==typeof e)e={mode:e,fs:i};else{if("string"!=typeof e)throw new TypeError("invalid options argument");e={mode:parseInt(e,8),fs:i}}else e={mode:511,fs:i};return e.mkdir=e.mkdir||e.fs.mkdir||i.mkdir,e.mkdirAsync=n(e.mkdir),e.stat=e.stat||e.fs.stat||i.stat,e.statAsync=n(e.stat),e.statSync=e.statSync||e.fs.statSync||i.statSync,e.mkdirSync=e.mkdirSync||e.fs.mkdirSync||i.mkdirSync,e}},610:(e,t,r)=>{const n=process.env.__TESTING_MKDIRP_PLATFORM__||process.platform,{resolve:i,parse:o}=r(622);e.exports=e=>{if(/\0/.test(e))throw Object.assign(new TypeError("path must be a string without null bytes"),{path:e,code:"ERR_INVALID_ARG_VALUE"});if(e=i(e),"win32"===n){const t=/[*|"<>?:]/,{root:r}=o(e);if(t.test(e.substr(r.length)))throw Object.assign(new Error("Illegal characters in path."),{path:e,code:"EINVAL"})}return e}},167:(e,t,r)=>{const n=r(747),i=(process.env.__TESTING_MKDIRP_NODE_VERSION__||process.version).replace(/^v/,"").split("."),o=+i[0]>10||10==+i[0]&&+i[1]>=12,s=o?e=>e.mkdir===n.mkdir:()=>!1,c=o?e=>e.mkdirSync===n.mkdirSync:()=>!1;e.exports={useNative:s,useNativeSync:c}},138:(e,t,r)=>{var n=r(747),i=r(890),o=function(){};o.prototype.readFile=function(e){return new Promise((function(t,r){n.readFile(e,"utf8",(function(e,n){e?r(e):t(n)}))}))},o.prototype.writeFile=function(e,t){return new Promise((function(r,i){n.writeFile(e,t,"utf8",(function(e){e?i(e):r({response:"ok"})}))}))},o.prototype.modifyFile=async function(e,t){if(!Array.isArray(t)&&t.length<1)throw new Error("second argument must be an array and not being empty");if(n.existsSync(e)){console.info("Modifying "+e);var r=await readFile(e);r=r.toString(),t.forEach((e=>{var t=new RegExp(e[0],"gm");r=r.replace(t,e[1])})),await writeFile(e,r)}else console.info(e+" not found. Skipping")},o.prototype.copyFile=function(e,t,o=!0){if(n.existsSync(e)){var s=(0,r(622).dirname)(t);if(!n.existsSync(s)){if(!o)return void console.info("Skipping copying file "+e+" to "+t);console.info("Creating directory "+s),i.sync(s)}console.info("Copying "+e+" to "+t),n.createReadStream(e).pipe(n.createWriteStream(t))}else console.info(e+" not found. Skipping")},o.prototype.copyDir=function(e,t,r=!0){n.existsSync(e)&&n.existsSync(t)?n.readdirSync(e).forEach((function(i){var o=e+"/"+i,s=t+"/"+i;n.lstatSync(o).isDirectory()&&r?(n.existsSync(s)||(console.log("Creating directory "+s),n.mkdirSync(s)),copyFiles(o,s)):(console.log("Copying "+o+" to "+s),n.createReadStream(o).pipe(n.createWriteStream(s)))})):console.info(e+" not found. Skipping")},e.exports=new o},747:e=>{"use strict";e.exports=require("fs")},622:e=>{"use strict";e.exports=require("path")},669:e=>{"use strict";e.exports=require("util")}},t={},function r(n){var i=t[n];if(void 0!==i)return i.exports;var o=t[n]={exports:{}};return e[n](o,o.exports,r),o.exports}(138);var e,t}));