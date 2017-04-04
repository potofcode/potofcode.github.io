
function loadScript(url, attributes) {
  const d = document, s = d.createElement('script');
  s.src = url;
  s.async = true;
  Object.keys(attributes).forEach( name => s.setAttribute(name, attributes[name]));
  d.body.appendChild(s);
}

if ('serviceWorker' in navigator) {
  window.addEventListener('load', function() {
    navigator.serviceWorker.register('/js/sw.js').then(function(registration) {
      // Registration was successful
      console.log('ServiceWorker registration successful with scope: ', registration.scope);
    }).catch(function(err) {
      // registration failed :(
      console.log('ServiceWorker registration failed: ', err);
    });
  });
}