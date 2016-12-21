"use strict";

function loadScript(url, attributes) {
    const d = document, s = d.createElement('script');
    s.src = url;
    s.async = true;
    Object.keys(attributes).forEach( name => s.setAttribute(name, attributes[name]));
    d.body.appendChild(s);
}
