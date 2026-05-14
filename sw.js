const CACHE = 'jd-tacho-v12';

self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE).then(cache => {
      return cache.addAll([
        './',
        './index.html',
        './manifest.webmanifest'
      ]);
    })
  );
});
