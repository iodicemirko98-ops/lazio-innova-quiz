const CACHE="lazio-innova-v2";
const FILES=["./","index.html","manifest.json","icon-180.png","questions.js","q-tech.js","q-logic.js","manuale-a.js","manuale-b.js","manuale-c.js","gen.js"];
self.addEventListener("install",function(e){
  e.waitUntil(caches.open(CACHE).then(function(c){return c.addAll(FILES);}).then(function(){return self.skipWaiting();}));
});
self.addEventListener("activate",function(e){e.waitUntil(self.clients.claim());});
self.addEventListener("fetch",function(e){
  var req=e.request;
  if(req.method!=="GET"||new URL(req.url).origin!==self.location.origin)return;
  e.respondWith(caches.match(req).then(function(hit){
    if(hit)return hit;
    return fetch(req).then(function(res){
      if(res.ok){var copy=res.clone();caches.open(CACHE).then(function(c){c.put(req,copy);});}
      return res;
    }).catch(function(){return caches.match("index.html");});
  }));
});
