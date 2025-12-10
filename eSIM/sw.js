const CACHE_NAME = 'esim-v1';
const urlsToCache = [
  '/',
  '/index.html',
  '/css/style.css',
  '/css/notification-system.css',
  '/js/advanced-support-system.js',
  '/js/notification-system.js'
];

self.addEventListener('install', event => {
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(cache => cache.addAll(urlsToCache))
  );
});

self.addEventListener('fetch', event => {
  event.respondWith(
    caches.match(event.request)
      .then(response => response || fetch(event.request))
  );
});
