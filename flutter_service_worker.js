'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"version.json": "f124181e58b12572810925130e6735b8",
"index.html": "30c409d27e129efb9744b351c1a632c7",
"/": "30c409d27e129efb9744b351c1a632c7",
"main.dart.js": "1a6280374d394ce886f0c89b9b97ca8c",
"flutter.js": "6fef97aeca90b426343ba6c5c9dc5d4a",
"favicon.png": "26fc5e34dba51e3da85b1cb0045a6eb7",
"icons/Icon-192.png": "a2f28d95e69ab6a7768c59ea40fcf6ac",
"icons/Icon-maskable-192.png": "a2f28d95e69ab6a7768c59ea40fcf6ac",
"icons/Icon-192.png.sb-31104e57-dlkpzH": "57de75caa1ddf816f9a9193e6d186fbf",
"icons/Icon-maskable-512.png": "57de75caa1ddf816f9a9193e6d186fbf",
"icons/Icon-512.png": "ceafff993e1978588b10ee9874350597",
"manifest.json": "47e086f8841aee14e325f5f82ed0795f",
"assets/AssetManifest.json": "e9b9d6fdd2df6fb6b5bbdcd3ebca693e",
"assets/NOTICES": "2571bad33afbf641f65a8f3f99a7a416",
"assets/FontManifest.json": "663783f541c46e7f04c244ce710d1b61",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "89ed8f4e49bcdfc0b5bfc9b24591e347",
"assets/shaders/ink_sparkle.frag": "f8b80e740d33eb157090be4e995febdf",
"assets/AssetManifest.bin": "d7bbdf356c0e08299058d3f4f2a98de3",
"assets/fonts/MaterialIcons-Regular.otf": "71747455115d0ad6ca16ebdc72351aa5",
"assets/assets/imgs/flutter.png": "0b5a2f8d3f4d173805affaf9f84f6c87",
"assets/assets/imgs/pro_01.png": "9bb547d289698f6d9b296bde88be220a",
"assets/assets/imgs/03.png": "dc2ab9bf1dc7b655c283b4238c7f75b8",
"assets/assets/imgs/pro_02.png": "4a8e5575ed6646974f3c1967cc4a6f30",
"assets/assets/imgs/pro_03.png": "5770d9932123d78d03b39c0be6af426d",
"assets/assets/imgs/02.png": "c69fe1c71fb22e80db20de3a666ff1de",
"assets/assets/imgs/pro_07.png": "0bbd6030518654ed410ee4fa93fe0083",
"assets/assets/imgs/pro_06.png": "871969fa0d00af0c6d48a4e04cfcbaac",
"assets/assets/imgs/pro_04.png": "b6d34e62d921cc7fe071b6f4afc7fd73",
"assets/assets/imgs/pro_05.png": "9c8aae6b8e31e33ce350e96620651709",
"assets/assets/imgs/04.png": "d38477d42dc77d62ff7a25744fd87d64",
"assets/assets/imgs/pro_08.png": "16407320e8913ccf04a81354b0c1b9fc",
"assets/assets/imgs/pro_09.png": "fd48603267955ff0e9c5b95fdbd975df",
"assets/assets/imgs/rn.png": "1bf9e36a76d7c9c41691fb26026caf55",
"assets/assets/imgs/5424482.jpg": "11a43b6c92858f82bcff3c24a784b158",
"assets/assets/imgs/BG01.png": "292fe68441561eae14b077f8f112acf9",
"assets/assets/imgs/avt_mt.jpeg": "57de75caa1ddf816f9a9193e6d186fbf",
"assets/assets/imgs/1.png": "2db860ed6caf711f9ba977b46c005148",
"assets/assets/icons/management.svg": "3b27b509d639cd72d39538ec300a8640",
"assets/assets/icons/android.svg": "e57e55c11155e0da56d4913db52486c7",
"assets/assets/icons/graphic.svg": "6f05c1c6706df22c79a37a7ca4df3214",
"assets/assets/icons/website.svg": "421f827e65eb765b8ad10e386bf07849",
"assets/assets/icons/apple.svg": "81afc16bd2183fcbdad794cd391e7f0d",
"assets/assets/icons/project.svg": "6f0a662b02c09e703bacabe24697e7bd",
"assets/assets/fonts/montserrat/montserrat.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/assets/fonts/poppins/Poppins-Light.ttf": "f6ea751e936ade6edcd03a26b8153b4a",
"assets/assets/fonts/poppins/Poppins-Medium.ttf": "f61a4eb27371b7453bf5b12ab3648b9e",
"assets/assets/fonts/poppins/Poppins-Regular.ttf": "8b6af8e5e8324edfd77af8b3b35d7f9c",
"assets/assets/fonts/poppins/Poppins-Bold.ttf": "a3e0b5f427803a187c1b62c5919196aa",
"assets/assets/fonts/poppins/Poppins-SemiBold.ttf": "4cdacb8f89d588d69e8570edcbe49507",
"assets/assets/fonts/poppins/Poppins-Italic.ttf": "5e956c44060a7b3c0e39819ae390ab15",
"assets/assets/gif/hi.gif": "cad5918d86b6a7e83f1fb4acead70e4c",
"canvaskit/skwasm.js": "95f16c6690f955a45b2317496983dbe9",
"canvaskit/skwasm.wasm": "d1fde2560be92c0b07ad9cf9acb10d05",
"canvaskit/chromium/canvaskit.js": "ffb2bb6484d5689d91f393b60664d530",
"canvaskit/chromium/canvaskit.wasm": "393ec8fb05d94036734f8104fa550a67",
"canvaskit/canvaskit.js": "5caccb235fad20e9b72ea6da5a0094e6",
"canvaskit/canvaskit.wasm": "d9f69e0f428f695dc3d66b3a83a4aa8e",
"canvaskit/skwasm.worker.js": "51253d3321b11ddb8d73fa8aa87d3b15"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"assets/AssetManifest.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
