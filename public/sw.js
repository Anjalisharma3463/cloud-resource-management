if(!self.define){let e,s={};const n=(n,t)=>(n=new URL(n+".js",t).href,s[n]||new Promise((s=>{if("document"in self){const e=document.createElement("script");e.src=n,e.onload=s,document.head.appendChild(e)}else e=n,importScripts(n),s()})).then((()=>{let e=s[n];if(!e)throw new Error(`Module ${n} didn’t register its module`);return e})));self.define=(t,a)=>{const c=e||("document"in self?document.currentScript.src:"")||location.href;if(s[c])return;let i={};const o=e=>n(e,c),r={module:{uri:c},exports:i,require:o};s[c]=Promise.all(t.map((e=>r[e]||o(e)))).then((e=>(a(...e),i)))}}define(["./workbox-e9849328"],(function(e){"use strict";importScripts(),self.skipWaiting(),e.clientsClaim(),e.precacheAndRoute([{url:"/_next/app-build-manifest.json",revision:"3da5f36c2e670ab9cb2862414c609fe5"},{url:"/_next/static/chunks/323-4fd0fb0d01b04b1d.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/47edcb22-229d54e1c907d472.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/808-a5954ce8f2e1ab43.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/app/_not-found/page-0a2267e6c83e25c7.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/app/layout-bc372625d963be7b.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/app/page-3abfdd3f0d59873b.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/app/resources/%5Bid%5D/page-160c7d8c10800a9b.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/app/resources/loading-66559d89dd5eacb2.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/app/resources/page-25a752451dcbb632.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/app/settings/page-c7e6b61257c7c881.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/framework-289b5a20f31bf2b1.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/main-9487f62cb0e22563.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/main-app-8c4416708c505ad0.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/pages/_app-7e5d4a60281b6427.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/pages/_error-77fa64d81664a8ec.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/chunks/polyfills-42372ed130431b0a.js",revision:"846118c33b2c0e922d7b3a7676f81f6f"},{url:"/_next/static/chunks/webpack-ec1b36c5cc1f980a.js",revision:"k7FkD8ng3fmStTfKU-qFo"},{url:"/_next/static/css/6bfc05947693793c.css",revision:"6bfc05947693793c"},{url:"/_next/static/k7FkD8ng3fmStTfKU-qFo/_buildManifest.js",revision:"93ff6145af5057aafe5ceca11a58b248"},{url:"/_next/static/k7FkD8ng3fmStTfKU-qFo/_ssgManifest.js",revision:"b6652df95db52feb4daf4eca35380933"},{url:"/_next/static/media/26a46d62cd723877-s.woff2",revision:"befd9c0fdfa3d8a645d5f95717ed6420"},{url:"/_next/static/media/55c55f0601d81cf3-s.woff2",revision:"43828e14271c77b87e3ed582dbff9f74"},{url:"/_next/static/media/581909926a08bbc8-s.woff2",revision:"f0b86e7c24f455280b8df606b89af891"},{url:"/_next/static/media/6d93bde91c0c2823-s.woff2",revision:"621a07228c8ccbfd647918f1021b4868"},{url:"/_next/static/media/97e0cb1ae144a2a9-s.woff2",revision:"e360c61c5bd8d90639fd4503c829c2dc"},{url:"/_next/static/media/a34f9d1faa5f3315-s.p.woff2",revision:"d4fe31e6a2aebc06b8d6e558c9141119"},{url:"/_next/static/media/df0a9ae256c0569c-s.woff2",revision:"d54db44de5ccb18886ece2fda72bdfe0"},{url:"/icons/icon-192x192.png",revision:"4b69049823363faeb9061622831c293c"},{url:"/icons/icon-512x512.png",revision:"2693afaed30ec6e5772b6a67b49c08af"},{url:"/manifest.json",revision:"5420f387cde0257679d866c9bf3a158a"},{url:"/placeholder-logo.png",revision:"b7d4c7dd55cf683c956391f9c2ce3f5b"},{url:"/placeholder-logo.svg",revision:"1e16dc7df824652c5906a2ab44aef78c"},{url:"/placeholder-user.jpg",revision:"82c9573f1276f9683ba7d92d8a8c6edd"},{url:"/placeholder.jpg",revision:"887632fd67dd19a0d58abde79d8e2640"},{url:"/placeholder.svg",revision:"35707bd9960ba5281c72af927b79291f"}],{ignoreURLParametersMatching:[]}),e.cleanupOutdatedCaches(),e.registerRoute("/",new e.NetworkFirst({cacheName:"start-url",plugins:[{cacheWillUpdate:async({request:e,response:s,event:n,state:t})=>s&&"opaqueredirect"===s.type?new Response(s.body,{status:200,statusText:"OK",headers:s.headers}):s}]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:gstatic)\.com\/.*/i,new e.CacheFirst({cacheName:"google-fonts-webfonts",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:31536e3})]}),"GET"),e.registerRoute(/^https:\/\/fonts\.(?:googleapis)\.com\/.*/i,new e.StaleWhileRevalidate({cacheName:"google-fonts-stylesheets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:eot|otf|ttc|ttf|woff|woff2|font.css)$/i,new e.StaleWhileRevalidate({cacheName:"static-font-assets",plugins:[new e.ExpirationPlugin({maxEntries:4,maxAgeSeconds:604800})]}),"GET"),e.registerRoute(/\.(?:jpg|jpeg|gif|png|svg|ico|webp)$/i,new e.StaleWhileRevalidate({cacheName:"static-image-assets",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/image\?url=.+$/i,new e.StaleWhileRevalidate({cacheName:"next-image",plugins:[new e.ExpirationPlugin({maxEntries:64,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp3|wav|ogg)$/i,new e.CacheFirst({cacheName:"static-audio-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:mp4)$/i,new e.CacheFirst({cacheName:"static-video-assets",plugins:[new e.RangeRequestsPlugin,new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:js)$/i,new e.StaleWhileRevalidate({cacheName:"static-js-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:css|less)$/i,new e.StaleWhileRevalidate({cacheName:"static-style-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\/_next\/data\/.+\/.+\.json$/i,new e.StaleWhileRevalidate({cacheName:"next-data",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute(/\.(?:json|xml|csv)$/i,new e.NetworkFirst({cacheName:"static-data-assets",plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;const s=e.pathname;return!s.startsWith("/api/auth/")&&!!s.startsWith("/api/")}),new e.NetworkFirst({cacheName:"apis",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:16,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>{if(!(self.origin===e.origin))return!1;return!e.pathname.startsWith("/api/")}),new e.NetworkFirst({cacheName:"others",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:86400})]}),"GET"),e.registerRoute((({url:e})=>!(self.origin===e.origin)),new e.NetworkFirst({cacheName:"cross-origin",networkTimeoutSeconds:10,plugins:[new e.ExpirationPlugin({maxEntries:32,maxAgeSeconds:3600})]}),"GET")}));
