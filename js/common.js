
function loadScript(url, attributes) {
  const d = document, s = d.createElement('script');
  s.src = url;
  s.async = true;
  Object.keys(attributes).forEach( name => s.setAttribute(name, attributes[name]));
  d.body.appendChild(s);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}

if (document.getElementById('cachedpagelist') && 'caches' in window) {
  const scr = document.createElement('script');
  scr.src = '/js/offlinepage.js';
  scr.async = 1;
  document.head.appendChild(scr);
}