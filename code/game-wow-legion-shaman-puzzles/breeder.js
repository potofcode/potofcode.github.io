!function(e){function n(r){if(t[r])return t[r].exports;var o=t[r]={exports:{},id:r,loaded:!1};return e[r].call(o.exports,o,o.exports,n),o.loaded=!0,o.exports}var t={};return n.m=e,n.c=t,n.p="",n(0)}({0:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e,n){var t={};for(var r in e)n.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t}function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n,t){var r=n.onProgress;return e.reduce(function(n,o,a){return o.forEach(function(u,i){g.DIRECTIONS.forEach(function(s){var c=u+s.x,f=i+s.y;if(o.has(c,f)){var l=o.flip(c,f);if(l.hash in t&&t[l.hash]<=l.changesSize)return;n.push(l),t[l.hash]=l.changesSize,r(p,l,e.length,a)}})}),n},[])}function i(e,n){var t=n.maxPopulationSize;return e.sort(function(e,n){return n.fitness-e.fitness}).slice(0,t)}function s(e){var n=arguments.length<=1||void 0===arguments[1]?{}:arguments[1];n=f({},v,n);for(var t=n,r=t.maxGenerations,o=t.onProgress,s=a({},e.hash,e),c=[e],l=0;l++<r&&1!==c[0].fitness;)c=u(c,n,s),c=i(c,n),o(y,c,l);return c[0]}function c(e){switch(e){case y:for(var n=arguments.length,t=Array(n>1?n-1:0),r=1;r<n;r++)t[r-1]=arguments[r];var o=t[0],a=t[1];self.postMessage({type:"progress",bestFitness:o[0].fitness,populationCount:o.length,generation:a})}}var f=Object.assign||function(e){for(var n=1;n<arguments.length;n++){var t=arguments[n];for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&(e[r]=t[r])}return e},l=t(38),h=r(l),g=t(26),v={maxGenerations:100,maxPopulationSize:500,onProgress:function(){}},p="mutation",y="generation";self.addEventListener("message",function(e){var n=e.data,t=n.command,r=o(n,["command"]);switch(t){case"run":var a=r.totems,u=r.options,i=s(new h["default"](a),f({},u,{onProgress:c}));self.postMessage(f({type:"result"},i.toObject()));break;default:throw new Error("Unknown command '"+t+"'")}},!1)},26:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0});n.DIRECTIONS=[{x:0,y:0},{x:1,y:0},{x:-1,y:0},{x:0,y:1},{x:0,y:-1}],n.MODE_PLAY="play",n.MODE_EDIT="edit"},38:function(e,n,t){"use strict";function r(e){return e&&e.__esModule?e:{"default":e}}function o(e){if(Array.isArray(e)){for(var n=0,t=Array(e.length);n<e.length;n++)t[n]=e[n];return t}return Array.from(e)}function a(e,n){if(!(e instanceof n))throw new TypeError("Cannot call a class as a function")}function u(e){return e.map(function(e){return e.join("")}).join("")}function i(e,n,t){return t>=0&&t<e.length&&n>=0&&n<e[t].length}function s(e){var n=e.replace(/1/g,"").length/e.length;return y.includes(n)?.999:n}function c(e,n,t){i(e,n,t)&&(e[t][n]=+!e[t][n])}function f(e){return e.slice().map(function(e){return e.slice()})}Object.defineProperty(n,"__esModule",{value:!0});var l=function(){function e(e,n){for(var t=0;t<n.length;t++){var r=n[t];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}return function(n,t,r){return t&&e(n.prototype,t),r&&e(n,r),n}}(),h=t(110),g=r(h),v=t(26),p=(0,g["default"])(),y=[20,22],d=function(){function e(){var n=arguments.length<=0||void 0===arguments[0]?[]:arguments[0],t=arguments.length<=1||void 0===arguments[1]?[]:arguments[1];a(this,e);var r=u(n),o=s(r),i=r.length,c=t.length;p(this,{totems:n,hash:r,fitness:o,changes:t,changesSize:c,count:i})}return l(e,[{key:"fromString",value:function(n){var t=n.trim().split("\n").map(function(e){return Array.from(e.trim()).map(Number)});return new e(t)}}]),l(e,[{key:"flip",value:function(n,t){var r=p(this),a=r.totems,u=r.changes,i=f(a);return v.DIRECTIONS.forEach(function(e){var r=n+e.x,o=t+e.y;c(i,r,o)}),new e(i,[].concat(o(u),[{x:n,y:t}]))}},{key:"has",value:function(e,n){return i(p(this).totems,e,n)}},{key:"set",value:function(n,t,r){var o=p(this),a=o.totems,u=o.changes,i=f(a);return i[t][n]=r,new e(i,u)}},{key:"get",value:function(e,n){return p(this).totems[n][e]}},{key:"copy",value:function(){return new e(p(this).totems)}},{key:"forEach",value:function(e){var n=p(this),t=n.totems;t.forEach(function(n,t){n.forEach(function(n,r){return e(r,t,n)})})}},{key:"toObject",value:function(){var e=p(this),n=e.hash,t=e.changes,r=e.fitness;return{hash:n,changes:t,fitness:r}}},{key:"hash",get:function(){return p(this).hash}},{key:"count",get:function(){return p(this).count}},{key:"fitness",get:function(){return p(this).fitness}},{key:"changesSize",get:function(){return p(this).changesSize}},{key:"values",get:function(){return f(p(this).totems)}}]),e}();n["default"]=d},110:function(e,n){"use strict";Object.defineProperty(n,"__esModule",{value:!0}),n["default"]=function(){var e=new WeakMap;return function(n){for(var t=arguments.length,r=Array(t>1?t-1:0),o=1;o<t;o++)r[o-1]=arguments[o];if(arguments.length>1){var a;return e.set(n,(a=Object).assign.apply(a,r))}if(1===arguments.length)return e.get(n);throw new Error("Private scope storage called with wrong count of arguments: "+arguments.length)}}}});