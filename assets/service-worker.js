self.addEventListener('install', (event) => {
    event.waitUntil(
        caches.open('ppo-cache').then((cache) => {
            return cache.addAll([
                '/',
                '/2rpalivo/',
                '/2rpalivo/index.html',
                '/2rpalivo/assets/index.9d19f81e.js',
                '/2rpalivo/assets/index.7c801b86.css',
                '/2rpalivo/assets/favicon.4ad42837.ico'
            ]);
        })
    );
});

self.addEventListener('fetch', (event) => {
    event.respondWith(
        caches.match(event.request).then((response) => {
            return response || fetch(event.request);
        })
    );
});