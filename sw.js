"use strict";
import "babel-polyfill";

self.addEventListener("install", event => {
  event.waitUntil(precache());
});

self.addEventListener("fetch", event => {
  const request = event.request;
  // get
  if (request.method !== "GET") {
    return;
  }
  //Buscar en cache
  event.respondWith(cacheResponse(request));

  //Actualizar el cache
  event.waitUntil(updateCache(request));
});

async function precache() {
  const cache = await caches.open("v1");
  return cache.addAll([
    /* "/",
    "/index.html",
    "/assets/index.js",
    "/assets/mediaPlayer.js",
    "/assets/plugins/AutoPlay.js",
    "/assets/plugins/AutoPause.js",
    "/assets/index.css",
    "/assets/BigBuckBunny.mp4" */
  ]);
}

async function cacheResponse(request) {
  const cache = await caches.open("v1");
  const response = await cache.match(request);
  return response || fetch(request);
}

async function updateCache(request) {
  const cache = await caches.open("v1");
  const response = await fetch(request);
  return cache.put(request, response);
}
