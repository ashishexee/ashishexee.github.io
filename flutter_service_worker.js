'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"assets/AssetManifest.bin": "14daccb6f5941eda83e71a639c7cec56",
"assets/AssetManifest.bin.json": "82adf9ffe5284db0844992a4cdc8fca0",
"assets/AssetManifest.json": "9c0d39b662fd610fc0d0aebee2b283d4",
"assets/assets/assets/images/profile.png": "fd3220ef9d8fd63d41a775c9676eabf9",
"assets/assets/assets/wallpaper.png": "ca451d226921ed7bcc8bf657a8e49c3e",
"assets/assets/icons/c.svg": "5be9bde46141498a7cfd4902b92133b1",
"assets/assets/icons/canva.svg": "7ce594c36013ae354554ea84bf71e343",
"assets/assets/icons/contacts.svg": "d344e7c80251adf39cd9a2221a4d4408",
"assets/assets/icons/dart.svg": "77736b70355db3b992d712891749acd5",
"assets/assets/icons/education.svg": "48441378b69d901c0de3994ab69f7d23",
"assets/assets/icons/email.svg": "f4aa6d560b9974823a486e4f404fbdfb",
"assets/assets/icons/experience.svg": "4e4a64928ec862d1f6075b054ac7593d",
"assets/assets/icons/expressjs.svg": "9f01b170d49993dbe11fcffa8a8e40dc",
"assets/assets/icons/figma.svg": "14fb8d901c3ba51a1ef00450e797cb9a",
"assets/assets/icons/firebase.svg": "7f1bf2795e067daf4ac3b42a2a140496",
"assets/assets/icons/flutter-icon.svg": "d82014167a81640b1ec8ea16ad2a196f",
"assets/assets/icons/flutter.svg": "25328eca0345a3c9d0f66444b998868e",
"assets/assets/icons/flutter1.svg": "92199e1295daa401a178e23bcfc438c8",
"assets/assets/icons/github-svg.svg": "91fc7cd187b65073322024169d2cd416",
"assets/assets/icons/instagram-svg.svg": "b6c744edbbd685bced0fe1f69d0a0e89",
"assets/assets/icons/javascript.svg": "830791e93844f750d619e0839710261c",
"assets/assets/icons/javascript1.svg": "8ee02715beb101d7d505a9473bfb2754",
"assets/assets/icons/linkedin-svg.svg": "15cf9ebef4a8ddc72756fd6d8d2be471",
"assets/assets/icons/message.svg": "fd9ce66281905e8e5cf07c44356ad953",
"assets/assets/icons/mongodb.svg": "60d5223afb2c7d607b78b9e95b086c38",
"assets/assets/icons/nodejs.svg": "42f9a28046a5f3125db84550964f2a03",
"assets/assets/icons/nodejs1.svg": "23a18bbb1377c88b2fcc15f321e18a66",
"assets/assets/icons/phone.svg": "5ac9719c1a42f926e80bb1c700ad560f",
"assets/assets/icons/typescript.svg": "23169c7f1818750ad04bddb0d3fc1b0c",
"assets/assets/icons/vs.svg": "87037c0c0b43c10ef05b40dfd701c5b3",
"assets/assets/joblook.png": "a7af5abb37562371887648cc8484cac7",
"assets/assets/leetcode.png": "0f0d5dd3a32cb5ad960e531faccc3e18",
"assets/assets/lottie/mobileLottie.json": "ada5cbbe628a7911c85048a2c162dd01",
"assets/assets/lottie/ui_lottie.json": "f6b361cd7639ddfe79284d52a67df602",
"assets/assets/lottie/ui_ux_lottie.json": "428c1c00fa9c0b37fe6a8afc27698aec",
"assets/assets/portfolio.png": "6a79c36178a6e2056477bc716da6e582",
"assets/assets/safeher.png": "bb86d24c6de42d49ac58dc4b20d8efb7",
"assets/assets/teledrive.png": "9087b07ef876b288587effce1131cbc6",
"assets/FontManifest.json": "b67a39dc77d36f1d266230e70bbdc8cf",
"assets/fonts/MaterialIcons-Regular.otf": "b3bf61b3c733d0f588e94b55f196a27e",
"assets/NOTICES": "81455e57989dbd15762a3ef29816355f",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "33b7d9392238c04c131b6ce224e13711",
"assets/packages/fluttertoast/assets/toastify.css": "a85675050054f179444bc5ad70ffc635",
"assets/packages/fluttertoast/assets/toastify.js": "56e2c9cedd97f10e7e5f1cebd85d53e3",
"assets/packages/flutter_neumorphic_plus/fonts/NeumorphicIcons.ttf": "32be0c4c86773ba5c9f7791e69964585",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "86e461cf471c1640fd2b461ece4589df",
"canvaskit/canvaskit.js.symbols": "68eb703b9a609baef8ee0e413b442f33",
"canvaskit/canvaskit.wasm": "efeeba7dcc952dae57870d4df3111fad",
"canvaskit/chromium/canvaskit.js": "34beda9f39eb7d992d46125ca868dc61",
"canvaskit/chromium/canvaskit.js.symbols": "5a23598a2a8efd18ec3b60de5d28af8f",
"canvaskit/chromium/canvaskit.wasm": "64a386c87532ae52ae041d18a32a3635",
"canvaskit/skwasm.js": "f2ad9363618c5f62e813740099a80e63",
"canvaskit/skwasm.js.symbols": "80806576fa1056b43dd6d0b445b4b6f7",
"canvaskit/skwasm.wasm": "f0dfd99007f989368db17c9abeed5a49",
"canvaskit/skwasm_st.js": "d1326ceef381ad382ab492ba5d96f04d",
"canvaskit/skwasm_st.js.symbols": "c7e7aac7cd8b612defd62b43e3050bdd",
"canvaskit/skwasm_st.wasm": "56c3973560dfcbf28ce47cebe40f3206",
"favicon.png": "fd3220ef9d8fd63d41a775c9676eabf9",
"flutter.js": "76f08d47ff9f5715220992f993002504",
"flutter_bootstrap.js": "c44d9a1d6abb8036d40d9da8f714e1e3",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "b3a089ab9fe29e08ea852386308c661d",
"/": "b3a089ab9fe29e08ea852386308c661d",
"main.dart.js": "92619ef9ddbd687ff1a88508492fafc7",
"manifest.json": "e74af8957b5899dc6da961caee768ec9",
"version.json": "009c9e65172e010890f7f65fde438006"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
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
