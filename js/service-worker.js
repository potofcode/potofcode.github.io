'use strict';

const dataCacheName = 'potofcode';
const cacheName = 'potofcode';
const filesToCache = [
    '/index.html',
    '/vendor/bootstrap/css/bootstrap.min.css',
    '/vendor/bootstrap/css/bootstrap.min.css.map',
    '/vendor/bootstrap/css/bootstrap.yeti.min.css',
    '/vendor/bootstrap/fonts/glyphicons-halflings-regular.eot',
    '/vendor/bootstrap/fonts/glyphicons-halflings-regular.svg',
    '/vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf',
    '/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
    '/vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2',
    '/vendor/bootstrap/js/bootstrap.min.js',
    '/vendor/bootstrap/js/jquery.min.js',
    '/vendor/font-awesome/css/font-awesome.css',
    '/vendor/font-awesome/css/font-awesome.min.css',
    '/vendor/font-awesome/fonts/fontawesome-webfont.eot',
    '/vendor/font-awesome/fonts/fontawesome-webfont.svg',
    '/vendor/font-awesome/fonts/fontawesome-webfont.ttf',
    '/vendor/font-awesome/fonts/fontawesome-webfont.woff',
    '/vendor/font-awesome/fonts/fontawesome-webfont.woff2',
    '/vendor/font-awesome/fonts/FontAwesome.otf',
    '/vendor/roboto/css/roboto.css',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700.eot',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700.svg',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700.ttf',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700.woff',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700.woff2',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700italic.eot',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700italic.svg',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700italic.ttf',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700italic.woff',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700italic.woff2',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-italic.eot',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-italic.svg',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-italic.ttf',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-italic.woff',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-italic.woff2',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-regular.eot',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-regular.svg',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-regular.ttf',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-regular.woff',
    '/vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-regular.woff2',
];

self.addEventListener('install', function(e) {
    console.log('[ServiceWorker] Install');
    e.waitUntil(
        caches.open(cacheName).then(function(cache) {
            console.log('[ServiceWorker] Caching app shell');
            return cache.addAll(filesToCache);
        })
    );
});

self.addEventListener('activate', function(e) {
    console.log('[ServiceWorker] Activate');
    e.waitUntil(
        caches.keys().then(function(keyList) {
            return Promise.all(keyList.map(function(key) {
                if (key !== cacheName && key !== dataCacheName) {
                    console.log('[ServiceWorker] Removing old cache', key);
                    return caches.delete(key);
                }
            }));
        })
    );
    /*
     * Fixes a corner case in which the app wasn't returning the latest data.
     * You can reproduce the corner case by commenting out the line below and
     * then doing the following steps: 1) load app for first time so that the
     * initial New York City data is shown 2) press the refresh button on the
     * app 3) go offline 4) reload the app. You expect to see the newer NYC
     * data, but you actually see the initial data. This happens because the
     * service worker is not yet activated. The code below essentially lets
     * you activate the service worker faster.
     */
    return self.clients.claim();
});

self.addEventListener('fetch', function(e) {
    console.log('[Service Worker] Fetch', e.request.url);
    const dataUrl = 'https://potofcode.com/';
    if (e.request.url.indexOf(dataUrl) > -1) {
        /*
         * When the request URL contains dataUrl, the app is asking for fresh
         * weather data. In this case, the service worker always goes to the
         * network and then caches the response. This is called the "Cache then
         * network" strategy:
         * https://jakearchibald.com/2014/offline-cookbook/#cache-then-network
         */
        e.respondWith(
            caches.open(dataCacheName).then(function(cache) {
                return fetch(e.request).then(function(response){
                    cache.put(e.request.url, response.clone());
                    return response;
                });
            })
        );
    } else {
        /*
         * The app is asking for app shell files. In this scenario the app uses the
         * "Cache, falling back to the network" offline strategy:
         * https://jakearchibald.com/2014/offline-cookbook/#cache-falling-back-to-network
         */
        e.respondWith(
            caches.match(e.request).then(function(response) {
                return response || fetch(e.request);
            })
        );
    }
});