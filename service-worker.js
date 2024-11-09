// Installer le Service Worker
self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('systememarcio-cache').then((cache) => {
            return cache.addAll([
                '/',
                'index.html',
                'apropos.html',
                'contact.html',
                'assistant.html',
                'image/i3.jpg',
                'css/styles.css',
                'js/scripts.js'
            ]);
        })
    );
});

// Activer le Service Worker et gérer les requêtes réseau
self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((cachedResponse) => {
            return cachedResponse || fetch(event.request);
        })
    );
});
