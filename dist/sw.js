const cacheName = 'cache-v1';
const resourcesToPrecache = [
  '/',
  'index.html',
  'css/main.css',
  'css/normalize.css',
  'img/yanay logo.png',
  'js/vendor/modernizr-3.7.1.min.js',
  'js/plugins.js',
  'js/main.js'
];

self.addEventListener('install', event => {
  console.log('service worker install event!');
  event.waitUntil(
    caches.open(cacheName)
    .then(cache => {
      return cache.addAll(resourcesToPrecache);
    })
  );
});

self.addEventListener('activate', event => {
  console.log('Activate event!');
});

self.addEventListener('fetch', event => {
  event.respondWith(caches.match(event.request)
    .then(cachedResponse => {
      return cachedResponse || fetch(event.request);
      console.log('Fetch intercepted for:', event.request.url);
    })
  );
});

