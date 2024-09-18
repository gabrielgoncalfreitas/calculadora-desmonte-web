'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {".git/COMMIT_EDITMSG": "01eb2c11c2685e04a0e3b0556549b914",
".git/config": "2829de20be323462c14a6f51fc0222dc",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/HEAD": "4cf2d64e44205fe628ddd534e1151b58",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-commit.sample": "5029bfab85b1c39281aa9697379ea444",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/hooks/sendemail-validate.sample": "4d67df3a8d5c98cb8565c07e42be0b04",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/index": "b12c829d8f25d4bb7dd50cb9d979f1d4",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "e4df8d8e85243de08e70362588b4b526",
".git/logs/refs/heads/master": "5e362ba3ac48b8da61d504bf2314e7f3",
".git/logs/refs/remotes/origin/master": "4a6cf53bc0f34b36dfa7bc3b694a2b84",
".git/objects/08/25c1c455ffb5565067cae5c09c65f3e9493ccb": "171495d9db5f677b85598ceb37f23a9f",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/09/4ba0185d39aaa9bc6c62a107f413aa13748dbe": "1e909b5b745fbd9ac1e127049327aa5e",
".git/objects/10/587a661779235dd52870f2bef6298f2141508e": "4f6f82cd7b4f0676d7dd1977ff5dfd0e",
".git/objects/12/9cc11828f96ed05fe951523e38610a6cb4973a": "d012dc836fae2c6ef7b1948463fe5b35",
".git/objects/18/ff139397c8164650032388098e3b965abf3598": "5bb1666e38bc6e5e1aaade5e45f2c363",
".git/objects/21/c8d68842f6ca3ccecc56949ee8e38decf446ba": "0733ec7d89cf71ec3e9d1c749b35b9c4",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/33/12a9f879b4a6ccabee53bff415c9f5636eac56": "b95332488c2d3eeed5fad5b1f1fa35d8",
".git/objects/36/18c03c3df39baeea64ad83c873527352f8789d": "eeed0456790219ce40f053a86061595f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3b/a260285ff95b8df1af8def84ab5b4b28721e40": "6907ab92605c5301204747d5ee146fbb",
".git/objects/3d/f4fac6a00c9a6141bbe05de73c74b3f4bcec26": "b90cbe7ec7ba3a725f496d49a201bacc",
".git/objects/3e/77943583c1959cb032df5acb196b1a180272e5": "da675aa1c69dcb828ad7b4e48c1bf880",
".git/objects/40/0d5b186c9951e294699e64671b9dde52c6f6a0": "f6bd3c7f9b239e8898bace6f9a7446b9",
".git/objects/40/19cf1914dcfec514dc2db789bbc7d42292d0a1": "527e5dee9bd05b94a8ecf689cb3a4a2e",
".git/objects/40/91ea6fdb9a440a4c5aa8c35460a7f99350342a": "f34af6032a964cdb8779c167a7b6ee83",
".git/objects/43/5d25ec45dad10ae857da6ae7114df71a3ae1cd": "a2ddce46fbd578ba24544415b5c6b1e4",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/5a/64ccb451352789b28b5d06576a8b103987b49a": "bf583b8a8bc59609ec228e8c653e2ad4",
".git/objects/5b/f097fce64c2705f17c865d600a510484bad172": "bbc890e44a0599b10156cbaf79171921",
".git/objects/61/a62ce389414a15726fbf21c2e572134ca918f2": "c4f8d0e4fcae967293696013823add39",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/7a/49adbc83480656618acf641d49e92dd1b330a8": "e41c53766cca17d2b97f2b910e597e52",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/91/52ee15429542370fcfd907211d2f3ca03beaef": "55cee75ea086b1d541c4dfbf2a699bf7",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/a9/d44c1ff09f5d1089e641ef56ad90d4dabc240b": "538837d5026f817671ce3f710b74705f",
".git/objects/ac/70e4cb1b0a6c7bbf55d07e2ff2ea17ac7f1312": "e08c286b77963e158091b8705e0047d0",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/bd/4c21a69cda8d5747436b93d0b9f70f24ecb5ec": "68bb97d59fdc59f1e615723568036a37",
".git/objects/bd/cf66b3bac3ee5212010c518499ccecc8aa382c": "3b3427f5256151583e8fc3b445503cba",
".git/objects/bf/dcc298f58dbbb169115127e3921381b0144d12": "ec67317d139fe9d9c84356ce5e368abe",
".git/objects/c0/ee7264ae7fcad96e41801bc87d7f7d14754179": "13adb19c5a24fc98668c1f0ec2002551",
".git/objects/c2/33c966ae6eb691df35d6ecb45d01c175845f9b": "01b8a4cbfa4d5d47edbd47480b19c60f",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/ac081ecb777da76984b628c413e46b6f8bbd15": "bcc61a50fcd4d1bcb7acd6525c6f63de",
".git/objects/d5/bb50b3c3bc534b51ba035a5e8495ba7af5025b": "81d30e6f235d2cd1960b1a0d917b3043",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/e4/b1d3d05d7d1557d96f1ee00a4741c915fe20a6": "87018e43db9da5bafc62c71e539538f3",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/fa/03f5d68434ec8308b464b9a8c8df8fb7cce9a7": "0413ca9a17d5fbd8f1a50cd45fb13533",
".git/objects/fd/c66bfc7b358be7469113cba6113843e29408f9": "18f4111f4ace8eb2a797aba61a58dcc2",
".git/refs/heads/master": "d20113643b55c98bd4e0e7ed524f0da9",
".git/refs/remotes/origin/master": "d20113643b55c98bd4e0e7ed524f0da9",
"assets/AssetManifest.bin": "74214cb424505140274bf2d5e8929a1f",
"assets/AssetManifest.bin.json": "3e6c787f9a248fa71db5ad95fe4a57dd",
"assets/AssetManifest.json": "183ac706d23def8ccd7ab2a6c26b102c",
"assets/FontManifest.json": "db8f453ee5bd623ef9ffbe9d7a009cf7",
"assets/fonts/MaterialIcons-Regular.otf": "6fd1c90975305e39d871fdbcfdcfa142",
"assets/NOTICES": "15d081f75df8b3874524e5d5c9875ed7",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "bfbeed9f5828784ed80060703201a0a8",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsOutlined.ttf": "9d5f44529a27274f18ab8186f09244a6",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsRounded.ttf": "1197f2e1f49ff8905111b10ed1c06679",
"assets/packages/material_symbols_icons/lib/fonts/MaterialSymbolsSharp.ttf": "407e94c5a95c03ea2d95ed2f63538ad0",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c",
"favicon.png": "5dcef449791fa27946b3d35ad8803796",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"flutter_bootstrap.js": "6f5439ae3de7929425cab34a888c0a20",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"index.html": "8bf3f9e5127ef101240303d22d4bfbb3",
"/": "8bf3f9e5127ef101240303d22d4bfbb3",
"main.dart.js": "236f3602b5ee8edf59f08df07b693b97",
"manifest.json": "e748f92e6b45065134f9488e68cb4af7",
"README.md": "eb54ad13bd496f63b10e0241e63a9de3",
"version.json": "350746ebc03bab4fd4efcb61edfcf449"};
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
