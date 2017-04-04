const CACHE_NAME = 'site-cache';
const offlineURL = '/offline/';
const urlsToCache = [
  '/',
  '/css/style.css',
  '/js/common.js',
  'vendor/bootstrap/css/bootstrap.min.css',
  'vendor/bootstrap/css/bootstrap.min.css.map',
  'vendor/bootstrap/css/bootstrap.yeti.min.css',
  'vendor/bootstrap/fonts/glyphicons-halflings-regular.eot',
  'vendor/bootstrap/fonts/glyphicons-halflings-regular.svg',
  'vendor/bootstrap/fonts/glyphicons-halflings-regular.ttf',
  'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff',
  'vendor/bootstrap/fonts/glyphicons-halflings-regular.woff2',
  'vendor/bootstrap/js/bootstrap.min.js',
  'vendor/bootstrap/js/jquery.min.js',
  'vendor/font-awesome/css/font-awesome.min.css',
  'vendor/font-awesome/fonts/FontAwesome.otf',
  'vendor/font-awesome/fonts/fontawesome-webfont.eot',
  'vendor/font-awesome/fonts/fontawesome-webfont.svg',
  'vendor/font-awesome/fonts/fontawesome-webfont.ttf',
  'vendor/font-awesome/fonts/fontawesome-webfont.woff',
  'vendor/font-awesome/fonts/fontawesome-webfont.woff2',
  'vendor/lightbox2/css/lightbox.css',
  'vendor/lightbox2/css/lightbox.min.css',
  'vendor/lightbox2/images/close.png',
  'vendor/lightbox2/images/loading.gif',
  'vendor/lightbox2/images/next.png',
  'vendor/lightbox2/images/prev.png',
  'vendor/lightbox2/js/lightbox.js',
  'vendor/lightbox2/js/lightbox-plus-jquery.js',
  'vendor/lightbox2/js/lightbox-plus-jquery.min.js',
  'vendor/lightbox2/js/lightbox-plus-jquery.min.map',
  'vendor/lightbox2/js/lightbox.min.js',
  'vendor/lightbox2/js/lightbox.min.map',
  'vendor/roboto/css/roboto.css',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700.eot',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700.svg',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700.ttf',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700.woff',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700.woff2',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700italic.eot',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700italic.svg',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700italic.ttf',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700italic.woff',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-700italic.woff2',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-italic.eot',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-italic.svg',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-italic.ttf',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-italic.woff',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-italic.woff2',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-regular.eot',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-regular.svg',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-regular.ttf',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-regular.woff',
  'vendor/roboto/fonts/roboto-v15-cyrillic_latin-ext_cyrillic-ext_latin-regular.woff2',
  'vendor/socicon/css/socicon.css',
  'vendor/socicon/fonts/Socicon.eot',
  'vendor/socicon/fonts/Socicon.svg',
  'vendor/socicon/fonts/Socicon.ttf',
  'vendor/socicon/fonts/Socicon.woff',
  'vendor/socicon/fonts/Socicon.woff2',
];



self.addEventListener('install', function(event) {
  // Perform install steps
  event.waitUntil(
    caches.open(CACHE_NAME)
      .then(function(cache) {
        console.log('Opened cache');
        return cache.addAll(urlsToCache);
      })
  );
});

const iExt = ['png', 'jpg', 'jpeg', 'gif', 'webp', 'bmp'].map(f => '.' + f);
function isImage(url) {
  return iExt.some(ext => url.endsWith(ext));
}

self.addEventListener('fetch', function(event) {
  event.respondWith(
    caches.match(event.request)
      .then(function(response) {
        // Cache hit - return response
        if (response) {
          return response;
        }

        // IMPORTANT: Clone the request. A request is a stream and
        // can only be consumed once. Since we are consuming this
        // once by cache and once by the browser for fetch, we need
        // to clone the response.
        const fetchRequest = event.request.clone();

        return fetch(fetchRequest).then(
          function(response) {
            // Check if we received a valid response
            if (!response || response.status !== 200 || response.type !== 'basic') {
              return response;
            }

            // IMPORTANT: Clone the response. A response is a stream
            // and because we want the browser to consume the response
            // as well as the cache consuming the response, we need
            // to clone it so we have two streams.
            const responseToCache = response.clone();

            caches.open(CACHE_NAME)
              .then(function(cache) {
                cache.put(event.request, responseToCache);
              });

            return response;
          }
        ).catch(() => {
          if (isImage(event.request.url)) {
            // return image
            return new Response(
              '<svg role="img" viewbox="0 0 400 300" xmlns="http://www.w3.org/2000/svg"><title>offline</title><path d="M0 0h400v300H0z" fill="#eee"/><text x="200" y="150" text-anchor="middle" dominant-baseline="middle" font-family="sans-serif" font-size="50" fill="#ccc">offline</text></svg>',
              { headers: {
                'Content-Type': 'image/svg+xml',
                'Cache-Control': 'no-store'
              }}
            );
          } else {
            return '';
          }
        });
      })
  );
});