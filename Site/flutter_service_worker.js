'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';
const RESOURCES = {
  "version.json": "704ee28bcb2a08f4c4cbb09cb2fccb47",
"index.html": "a55aa4217244581fba7c4526b4487e4d",
"/": "a55aa4217244581fba7c4526b4487e4d",
"main.dart.js": "35dc65de9829a3dadab26e7f5f69b582",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "ad6392a6ee0030c66ad128f18bc037d9",
"assets/AssetManifest.json": "8d830cd0468405698035d52a31c55f24",
"assets/NOTICES": "71d85dd7059a01506141cea60a624218",
"assets/FontManifest.json": "b1d88183b25cdcce7c2bc08f8c7a4834",
"assets/packages/font_awesome_flutter/lib/fonts/fa-solid-900.ttf": "aa1ec80f1b30a51d64c72f669c1326a7",
"assets/packages/font_awesome_flutter/lib/fonts/fa-regular-400.ttf": "5178af1d278432bec8fc830d50996d6f",
"assets/packages/font_awesome_flutter/lib/fonts/fa-brands-400.ttf": "b37ae0f14cbc958316fac4635383b6e8",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.css": "5a8d0222407e388155d7d1395a75d5b9",
"assets/packages/flutter_inappwebview/t_rex_runner/t-rex.html": "16911fcc170c8af1c5457940bd0bf055",
"assets/packages/easy_localization/i18n/ar-DZ.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/packages/easy_localization/i18n/en.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/en-US.json": "5bd908341879a431441c8208ae30e4fd",
"assets/packages/easy_localization/i18n/ar.json": "acc0a8eebb2fcee312764600f7cc41ec",
"assets/fonts/Electrolize-Regular.ttf": "1be3e0aaeb2bbd1985615a49da7f2eaf",
"assets/fonts/Montserrat-Regular.ttf": "ee6539921d713482b8ccd4d0d23961bb",
"assets/fonts/DancingScript-Regular.ttf": "406a55ec77746aedcad7c64f57849855",
"assets/fonts/MaterialIcons-Regular.otf": "7e7a6cccddf6d7b20012a548461d5d81",
"assets/assets/slider/folares_fil.jpg": "b1a5ccc6ae0f5c2e2ead03ce0d7b8d6d",
"assets/assets/slider/panelas.jpg": "17a6719609f0e3d7d3260d1108299cd7",
"assets/assets/slider/folar_metade.jpg": "3834b068f1d1d76c0aacfdff7e1a9e1d",
"assets/assets/slider/folar_corto.jpg": "8fa8f6136592c2411e9aa3797a2a92d3",
"assets/assets/slider/folar_prateleira.jpg": "1a5a80529bd27b910e6428d12b8da888",
"assets/assets/slider/intro.jpg": "c54984b068f803c4ae153f03a0a983e9",
"assets/assets/slider/manual.jpg": "84eac1daae280252c28586ca59699c27",
"assets/assets/slider/folar_desenformar.jpg": "4056b95f430a3a6a462f997fa7dca210",
"assets/assets/slider/folar_s_bg.png": "135870551fa83ad854bb9b25f7425931",
"assets/assets/slider/folar_olhao_intro.jpg": "fb6d73a17428892cb9da3ce28506aa4f",
"assets/assets/slider/olhao_slider.jpg": "00e9c5cd97b81b5ed260dbb8b4e0ef20",
"assets/assets/slider/produtos.jpg": "4c5fa8986c616e01044b112a5c56dab5",
"assets/assets/logo/logo_min.png": "bb22ceda9382acbf84dadaf2e04a2458",
"assets/assets/logo/logo_s_nome.png": "3ccae4fe44df91107513b675c2aae669",
"assets/assets/logo/logo.png": "2f2135819d4f54942998c2db21831e68",
"assets/assets/premios/acip_2016.png": "d7b064c50ef0a110ee890d49ea294d19",
"assets/assets/premios/acip2015.png": "0d35e3b4bb55343dbc9dbcd92b9b118c",
"assets/assets/premios/premio_7.png": "25335bd6cf7d20b05da7d84a7fe29617",
"assets/assets/process_timeline/status4.png": "580902bb6bff9e053347847734fb67c5",
"assets/assets/process_timeline/status5.png": "33c617f4d4937cf770ddd8bfac1f2509",
"assets/assets/process_timeline/status1.png": "b03d6aff411ff53eadf87582709d9941",
"assets/assets/process_timeline/status2.png": "62527f835fa26a09a3e66139f126c534",
"assets/assets/process_timeline/status3.png": "2e9226d050c0a93b4ad8148a1a1e2bd6",
"assets/assets/produtos_sbg/folar_frutos_secos.png": "88ef918045a2a013fc0ec4c1af39a6b0",
"assets/assets/produtos_sbg/folar_chocolateN.png": "c4cc4a7488b8bfac33f03cc57306bf29",
"assets/assets/produtos_sbg/folar_olhao.png": "4d16a3009a495aaef4c832037e5264e5",
"assets/assets/produtos_sbg/folar_figo_afarrobaN.png": "1f2040ffd252b2b82acfd458daa0ba89",
"assets/assets/produtos_sbg/folar_erva_doce.png": "d4061b83a150ecbe22f4facc5980752d",
"assets/assets/produtos_sbg/folar_gila.png": "591704fe8495722d40efb399cc9b4493",
"assets/assets/produtos_sbg/folar_ananas.png": "ca7520da0aa6ec909b3f9eed3030f6e7",
"assets/assets/produtos_sbg/folhadinhos.png": "bd49db03a3347ef7c3bd0532cc3b4926",
"assets/assets/produtos_sbg/folar_maca.png": "0caf63e6d3a5e24bcf541f0b987579c8",
"assets/assets/produtos_sbg/folar_chocolate.png": "32ad24413b9130a426aeebe7527fabe3",
"assets/assets/produtos_sbg/folar_alfarroba_figo.png": "801828c434e6d22218d8a70ea19228e9",
"assets/assets/login/googlelogo.png": "718d07e9977908379361326981a7d2d4",
"canvaskit/canvaskit.js": "c2b4e5f3d7a3d82aed024e7249a78487",
"canvaskit/profiling/canvaskit.js": "ae2949af4efc61d28a4a80fffa1db900",
"canvaskit/profiling/canvaskit.wasm": "95e736ab31147d1b2c7b25f11d4c32cd",
"canvaskit/canvaskit.wasm": "4b83d89d9fecbea8ca46f2f760c5a9ba"
};

// The application shell files that are downloaded before a service worker can
// start.
const CORE = [
  "/",
"main.dart.js",
"index.html",
"assets/NOTICES",
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
        // lazily populate the cache.
        return response || fetch(event.request).then((response) => {
          cache.put(event.request, response.clone());
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
