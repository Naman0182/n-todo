if(!self.define){let e,i={};const r=(r,s)=>(r=new URL(r+".js",s).href,i[r]||new Promise((i=>{if("document"in self){const e=document.createElement("script");e.src=r,e.onload=i,document.head.appendChild(e)}else e=r,importScripts(r),i()})).then((()=>{let e=i[r];if(!e)throw new Error(`Module ${r} didn’t register its module`);return e})));self.define=(s,n)=>{const t=e||("document"in self?document.currentScript.src:"")||location.href;if(i[t])return;let c={};const o=e=>r(e,t),d={module:{uri:t},exports:c,require:o};i[t]=Promise.all(s.map((e=>d[e]||o(e)))).then((e=>(n(...e),c)))}}define(["./workbox-76b7d24e"],(function(e){"use strict";self.addEventListener("message",(e=>{e.data&&"SKIP_WAITING"===e.data.type&&self.skipWaiting()})),e.precacheAndRoute([{url:"dexie.min.js",revision:"dcb0c596a9e3f8accf2cc1307dd3aded"},{url:"index.html",revision:"022b7da34a80ea2b7a1a343ebe138736"},{url:"main.css",revision:"0f9cf174f8e4a2decd395becde996a80"},{url:"main.js",revision:"2fbb0cad0d4c9e8e6954b5246eaec231"}],{ignoreURLParametersMatching:[/^utm_/,/^fbclid$/]})}));
//# sourceMappingURL=sw.js.map
