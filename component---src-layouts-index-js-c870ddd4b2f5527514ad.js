webpackJsonp([0x67ef26645b2a,60335399758886],{117:function(e,t){e.exports={layoutContext:{}}},211:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}t.__esModule=!0;var o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},r=n(1),l=a(r),i=n(236),c=a(i),u=n(117),s=a(u);t.default=function(e){return l.default.createElement(c.default,o({},e,s.default))},e.exports=t.default},40:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){return e.split("\n").map(function(e){return"  * "+e}).join("\n")}Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),l=a(r),i=n(14),c=a(i),u=n(29),s=a(u),f=n(17),p=a(f),d=n(16),m=a(d),h=n(1),b=a(h),v=n(3),_=function(e){function t(){return(0,c.default)(this,t),(0,p.default)(this,(t.__proto__||(0,l.default)(t)).apply(this,arguments))}return(0,m.default)(t,e),(0,s.default)(t,[{key:"render",value:function(){var e=this.props.comment;return b.default.createElement("script",{dangerouslySetInnerHTML:{__html:"\n/**\n"+o(e)+"\n */"}})}}]),t}(h.PureComponent);_.propTypes={comment:v.string},_.defaultProps={comment:""},t.default=_},41:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){return e.matches(t+", "+t+" *")}Object.defineProperty(t,"__esModule",{value:!0});var r=n(28),l=a(r),i=n(14),c=a(i),u=n(29),s=a(u),f=n(17),p=a(f),d=n(16),m=a(d),h=n(1),b=a(h),v=n(3),_=n(40),y=a(_);"undefined"==typeof Element||Element.prototype.matches||(Element.prototype.matches=Element.prototype.matchesSelector||Element.prototype.mozMatchesSelector||Element.prototype.msMatchesSelector||Element.prototype.oMatchesSelector||Element.prototype.webkitMatchesSelector||function(e){for(var t=(this.document||this.ownerDocument).querySelectorAll(e),n=t.length;n>=0&&t.item(n)!==this;)n+=1;return n>-1});var g=function(e){function t(e){(0,c.default)(this,t);var n=(0,p.default)(this,(t.__proto__||(0,l.default)(t)).call(this,e));n.listener=function(e){var t=n.props,a=t.selector,r=t.on,l=t.prevent,i=t.excludeParents,c=void 0===i?[]:i;if(!a||e.target.matches(a)){l&&e.preventDefault();var u=c.some(function(t){return o(e.target,t)});u||r(e)}};var a=e.capture,r=e.once,i=e.passive;return n.state={capture:!!a,once:!!r,passive:!!i},n}return(0,m.default)(t,e),(0,s.default)(t,[{key:"componentDidMount",value:function(){var e=this.props,t=e.event,n=e.target;n().addEventListener(t,this.listener,this.state)}},{key:"componentWillUnmount",value:function(){var e=this.props,t=e.event,n=e.target;n().removeEventListener(t,this.listener,this.state)}},{key:"render",value:function(){var e=this.props.event;return b.default.createElement(y.default,{comment:"On "+e+" listener"})}}]),t}(h.PureComponent);g.propTypes={event:v.string.isRequired,target:v.func.isRequired,selector:v.string,excludeParents:v.array,on:v.func.isRequired,prevent:v.any,capture:v.any,once:v.any,passive:v.any},g.defaultProps={target:function(){return document}},t.default=g},215:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.id;return l.default.createElement("script",{dangerouslySetInnerHTML:{__html:"\n      (function(i,s,o,g,r,a,m){i['GoogleAnalyticsObject']=r;i[r]=i[r]||function(){\n      (i[r].q=i[r].q||[]).push(arguments)},i[r].l=1*new Date();a=s.createElement(o),\n      m=s.getElementsByTagName(o)[0];a.async=1;a.src=g;m.parentNode.insertBefore(a,m)\n    })(window,document,'script','https://www.google-analytics.com/analytics.js','ga');\n\n      ga('create', '"+t+"', 'auto');\n      ga('send', 'pageview');\n      "}})}t.__esModule=!0,t.default=o;var r=n(1),l=a(r);e.exports=t.default},216:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e){var t=e.id;return l.default.createElement("script",{type:"text/javascript",dangerouslySetInnerHTML:{__html:"\n(function (d, w, c) {\n  (w[c] = w[c] || []).push(function() {\n    try {\n      w.yaCounter28756646 = new Ya.Metrika({\n        id:"+t+',\n        clickmap:true,\n        trackLinks:true,\n        accurateTrackBounce:true,\n        webvisor:true\n      });\n    } catch(e) { }\n  });\n\n  var n = d.getElementsByTagName("script")[0],\n  s = d.createElement("script"),\n  f = function () { n.parentNode.insertBefore(s, n); };\n  s.type = "text/javascript";\n  s.async = true;\n  s.src = "https://mc.yandex.ru/metrika/watch.js";\n\n  if (w.opera == "[object Opera]") {\n  d.addEventListener("DOMContentLoaded", f, false);\n} else { f(); }\n})(document, window, "yandex_metrika_callbacks");\n        '}})}t.__esModule=!0,t.default=o;var r=n(1),l=a(r);e.exports=t.default},219:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),u=a(c),s=n(19),f=a(s),p=n(96),d=[{link:"https://facebook.com/3axap4eHko",icon:"fa-facebook",title:"Facebook"},{link:"https://steamcommunity.com/id/3axap4eHko/",icon:"fa-steam",title:"Steam"},{link:"https://www.twitch.tv/3axap4ehko",icon:"fa-twitch",title:"Twitch"},{link:"https://vk.com/Zaxap4ehko",icon:"fa-vk",title:"VKontakte"},{link:"https://twitter.com/3axap4eHko",icon:"fa-twitter",title:"Twitter"},{link:"https://github.com/3axap4eHko",icon:"fa-github",title:"Github"},{link:"https://www.linkedin.com/in/3axap4ehko/en",icon:"fa-linkedin",title:"Linkedin"},{link:"https://plus.google.com/+IvanZakharchenko",icon:"fa-google-plus",title:"Google Plus"}],m=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("footer",{className:"footer"},u.default.createElement(p.Row,{className:"social footer__follow"},u.default.createElement(p.Col,{xs:"12",lg:"3",className:"footer__follow-title"},"Давайте дружить"),d.map(function(e){var t=e.link,n=e.icon,a=e.title;return u.default.createElement(p.Col,{xs:"1",key:a},u.default.createElement("a",{href:t,target:a,className:"i-dark fa "+n+" fa-2x",title:a,"aria-label":"Посетить мою страницу "+a}))})),u.default.createElement(p.Row,{className:"footer__info"},u.default.createElement(p.Col,{xs:12,md:4},u.default.createElement("a",{href:"https://potofcode.com/",className:"link footer__logo"},"POT OF CODE")),u.default.createElement(p.Col,{xs:12,md:8},u.default.createElement(p.Row,null,u.default.createElement(p.Col,{xs:12,sm:4},u.default.createElement(f.default,{to:"/terms",className:"link","aria-label":"Соглашение"},"Соглашение")),u.default.createElement(p.Col,{xs:12,sm:4},u.default.createElement("a",{href:"/sitemap.xml",className:"link",target:"__sitemap"},"Sitemap")),u.default.createElement(p.Col,{xs:12,sm:4},u.default.createElement("div",null,"© 2015-2017 Ivan (3axap4eHko) Zakharchenko. Все права защищены"))))))}}]),t}(c.Component);t.default=m,e.exports=t.default},221:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var a in n)Object.prototype.hasOwnProperty.call(n,a)&&(e[a]=n[a])}return e},c=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),u=n(1),s=a(u),f=n(19),p=a(f),d=n(11),m=a(d),h=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.title,n=e.route,a=e.icon,o=e.iconClass,r=e.onClick;return s.default.createElement("li",{className:"tool-bar__item"},s.default.createElement(p.default,{to:n,className:"tool-bar__link",onClick:r,activeClassName:"active"},s.default.createElement("i",{className:(0,m.default)("material-icons tool-bar__icon",o)},a),t))}}]),t}(u.Component),b=function(e){function t(){return o(this,t),r(this,(t.__proto__||Object.getPrototypeOf(t)).apply(this,arguments))}return l(t,e),c(t,[{key:"render",value:function(){var e=this.props,t=e.items,n=e.onClick,a=e.className;return s.default.createElement("ul",{className:(0,m.default)("tool-bar",a)},t.map(function(e){return s.default.createElement(h,i({key:e.title},e,{onClick:n}))}))}}]),t}(u.Component);t.default=b,e.exports=t.default},222:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),u=a(c),s=(n(65),n(19)),f=a(s),p=n(11),d=a(p),m=n(221),h=a(m),b=n(41),v=a(b),_=(n(86),[{title:"Кодинг",route:"/кодинг",icon:"code"},{title:"Игры",route:"/игры",icon:"videogame_asset"},{title:"DIY",route:"/diy",icon:"lightbulb_outline"},{title:"Вояж",route:"/вояж",icon:"flight",iconClass:"rotate-90"},{title:"Курсы",route:"/курсы",icon:"headset_mic"}]),y=function(e){function t(){var e,n,a,l;o(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={showDrawer:!1,showMenu:!1,menuAnchor:null},a.goSocial=function(){a.setState({showMenu:!1})},a.toggleMenu=function(){a.setState({showMenu:!a.state.showMenu})},a.clickHandler=function(){a.state.showMenu&&a.setState({showMenu:!1})},a.resizeHandler=function(){a.setState({showMenu:!1})},l=n,r(a,l)}return l(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("nav",{className:"top-bar"},u.default.createElement("div",{className:"top-bar__header"},u.default.createElement(f.default,{to:"/"},"Pot of Code"),u.default.createElement("button",{className:"hide-sm-up top-menu__button",onClickCapture:this.toggleMenu},u.default.createElement("i",{className:"material-icons"},"menu"))),u.default.createElement(v.default,{target:function(){return document},event:"click",excludeParents:[".top-menu",".top-menu__button"],on:this.clickHandler}),u.default.createElement(v.default,{target:function(){return window},event:"resize",on:this.resizeHandler}),u.default.createElement(h.default,{items:_,className:(0,d.default)("top-menu",{"top-menu--show":this.state.showMenu}),onClick:this.toggleMenu}),u.default.createElement("div",{hidden:!0},u.default.createElement("div",{onClick:this.goSocial,"data-url":"https://facebook.com/3axap4eHko"},u.default.createElement("i",{className:"i-dark fa fa-facebook fa-2x"})),u.default.createElement("div",{onClick:this.goSocial,"data-url":"https://facebook.com/3axap4eHko"},u.default.createElement("i",{className:"i-dark fa fa-steam fa-2x"})),u.default.createElement("div",{onClick:this.goSocial,"data-url":"https://facebook.com/3axap4eHko"},u.default.createElement("i",{className:"i-dark fa fa-twitch fa-2x"})),u.default.createElement("div",{onClick:this.goSocial,"data-url":"https://facebook.com/3axap4eHko"},u.default.createElement("i",{className:"i-dark fa fa-vk fa-2x"})),u.default.createElement("div",{onClick:this.goSocial,"data-url":"https://facebook.com/3axap4eHko"},u.default.createElement("i",{className:"i-dark fa fa-twitter fa-2x"})),u.default.createElement("div",{onClick:this.goSocial,"data-url":"https://facebook.com/3axap4eHko"},u.default.createElement("i",{className:"i-dark fa fa-google-plus fa-2x"})),u.default.createElement("div",{onClick:this.goSocial,"data-url":"https://facebook.com/3axap4eHko"},u.default.createElement("i",{className:"i-dark fa fa-linkedin fa-2x"}))))}}]),t}(c.Component);t.default=y,e.exports=t.default},229:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),c=n(1),u=a(c),s=n(11),f=a(s),p="hide_subscription",d=function(e){function t(){var e,n,a,l;o(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.state={hide:parseInt(localStorage.getItem(p))>Date.now()},a.onClose=function(){localStorage.setItem(p,Date.now()+864e5),a.setState({hide:!0})},l=n,r(a,l)}return l(t,e),i(t,[{key:"render",value:function(){return u.default.createElement("div",{className:(0,f.default)("mail-chimp",{"mail-chimp--hide":this.state.hide})},u.default.createElement("div",null,u.default.createElement("form",{action:"//potofcode.us16.list-manage.com/subscribe/post?u=2086f3a4bc22e651ff2d7721b&id=731984f7af",method:"post",id:"mc-embedded-subscribe-form",name:"mc-embedded-subscribe-form",className:"mail-chimp__form",target:"_blank",noValidate:!0},u.default.createElement("label",{htmlFor:"mce-EMAIL",className:"mail-chimp__title"},"Подпишись на еженедельный дайджест Pot of Code"),u.default.createElement("input",{type:"email",value:"",name:"EMAIL",className:"mail-chimp__email",id:"mce-EMAIL",placeholder:"email@gmail.com",required:!0}),u.default.createElement("input",{type:"hidden",name:"b_2086f3a4bc22e651ff2d7721b_731984f7af",tabIndex:"-1",value:""}),u.default.createElement("input",{type:"submit",value:"Подписаться",name:"subscribe",id:"mc-embedded-subscribe",className:"mail-chimp__button"})),u.default.createElement("div",{className:"close mail-chimp__close",onClick:this.onClose})))}}]),t}(c.Component);t.default=d,e.exports=t.default},230:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(){return l.default.createElement("div",null,l.default.createElement("div",{className:"sp-form-outer sp-fixed-outer sp-force-hide",dangerouslySetInnerHTML:{__html:'\n<div id="sp-form-83784" sp-id="83784" sp-hash="5282c330c9f7c6a127f710619146a2659e7cdac1364771397b45e43c555ffd02"\n       sp-lang="ru"\n       class="sp-form sp-form-regular sp-form-fixed sp-form-fixed__bottom-center sp-form-horizontal sp-animation-slide-bottom sp-form-full-width"\n       sp-show-options="%7B%22amd%22%3Afalse%2C%22condition%22%3A%22onEnter%22%2C%22scrollTo%22%3A25%2C%22delay%22%3A10%2C%22repeat%22%3A3%2C%22background%22%3A%22rgba(0%2C%200%2C%200%2C%200.5)%22%2C%22position%22%3A%22bottom-center%22%2C%22animation%22%3A%22sp-animation-slide-bottom%22%2C%22hideOnMobile%22%3Afalse%2C%22urlFilter%22%3Afalse%2C%22urlFilterConditions%22%3A%5B%7B%22force%22%3A%22hide%22%2C%22clause%22%3A%22contains%22%2C%22token%22%3A%22%22%7D%5D%7D">\n    <div class="sp-form-fields-wrapper show-grid">\n      <button class="sp-btn-close " aria-label="Закрыть">&nbsp</button>\n      <div class="sp-message">\n        <div></div>\n      </div>\n      <div class="sp-element-container sp-field-nolabel sp-lg">\n        <div class="sp-field " sp-id="sp-9083651c-02c4-49a2-bc24-8f431112132d">\n          <div style="font-family: inherit; line-height: 1.2;"><p><span style="font-size: 16px;">Подпишись на еженедельный дайджест</span>\n          </p>\n            <p style="text-align: center;"><strong><span style="font-size: 16px;">Pot of Code</span></strong></p></div>\n        </div>\n        <div class="sp-field " sp-id="sp-3df55555-2b32-4b48-adc3-bdd4614b2df3"><label class="sp-control-label"><span>Email</span><strong>*</strong></label><input\n            type="email" sp-type="email" name="sform[email]" class="sp-form-control " placeholder="username@gmail.com"\n            sp-tips="%7B%22required%22%3A%22%D0%9E%D0%B1%D1%8F%D0%B7%D0%B0%D1%82%D0%B5%D0%BB%D1%8C%D0%BD%D0%BE%D0%B5%20%D0%BF%D0%BE%D0%BB%D0%B5%22%2C%22wrong%22%3A%22%D0%9D%D0%B5%D0%B2%D0%B5%D1%80%D0%BD%D1%8B%D0%B9%20email-%D0%B0%D0%B4%D1%80%D0%B5%D1%81%22%7D"\n            required="required"></div>\n        <div class="sp-field sp-button-container " sp-id="sp-8f2bba9f-b1a9-4b9b-8c1a-e4b322ec8b63">\n          <button id="sp-8f2bba9f-b1a9-4b9b-8c1a-e4b322ec8b63" class="sp-button">Подписаться</button>\n        </div>\n      </div>\n      <div class="sp-link-wrapper sp-brandname__left"><a class="sp-link " target="_blank"\n                                                         href="https://sendpulse.com/ru/?ref=6767426"><span\n          class="sp-link-img">&nbsp;</span><span translate="FORM.PROVIDED_BY">Предоставлено SendPulse</span></a></div>\n    </div>\n  </div>\n  <script type="text/javascript" src="//static-login.sendpulse.com/apps/fc3/build/default-handler.js?1507032951906"></script>\n'}}))}t.__esModule=!0,t.default=o;var r=n(1),l=a(r);e.exports=t.default},331:function(e,t){},236:function(e,t,n){"use strict";function a(e){return e&&e.__esModule?e:{default:e}}function o(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}function r(e,t){if(!e)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!t||"object"!=typeof t&&"function"!=typeof t?e:t}function l(e,t){if("function"!=typeof t&&null!==t)throw new TypeError("Super expression must either be null or a function, not "+typeof t);e.prototype=Object.create(t&&t.prototype,{constructor:{value:e,enumerable:!1,writable:!0,configurable:!0}}),t&&(Object.setPrototypeOf?Object.setPrototypeOf(e,t):e.__proto__=t)}t.__esModule=!0,t.default=void 0;var i,c,u=function(){function e(e,t){for(var n=0;n<t.length;n++){var a=t[n];a.enumerable=a.enumerable||!1,a.configurable=!0,"value"in a&&(a.writable=!0),Object.defineProperty(e,a.key,a)}}return function(t,n,a){return n&&e(t.prototype,n),a&&e(t,a),t}}(),s=n(1),f=a(s),p=n(3),d=n(19),m=n(222),h=a(m),b=n(219),v=a(b),_=n(215),y=a(_),g=n(216),k=a(g),E=n(230),w=a(E),C=n(229);a(C);n(331);var x=(c=i=function(e){function t(){var e,n,a,l;o(this,t);for(var i=arguments.length,c=Array(i),u=0;u<i;u++)c[u]=arguments[u];return n=a=r(this,(e=t.__proto__||Object.getPrototypeOf(t)).call.apply(e,[this].concat(c))),a.navigateTo=function(e){var t=e.target;(0,d.navigateTo)(t.href.replace(document.location.origin,""))},l=n,r(a,l)}return l(t,e),u(t,[{key:"render",value:function(){var e=this.props.children;return f.default.createElement("div",{className:"layout"},f.default.createElement(h.default,null),e(),f.default.createElement(v.default,null),f.default.createElement(y.default,{id:"UA-60230177-1"}),f.default.createElement(k.default,{id:"28756646"}),f.default.createElement(w.default,null))}}]),t}(s.Component),i.propTypes={children:p.func,location:p.object,route:p.object},c);t.default=x,e.exports=t.default}});
//# sourceMappingURL=component---src-layouts-index-js-c870ddd4b2f5527514ad.js.map