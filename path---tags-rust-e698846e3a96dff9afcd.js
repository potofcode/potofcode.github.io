webpackJsonp([0xeb7914649a24],{430:function(e,t){e.exports={pathContext:{tag:"Rust",latest:[{images:{blurUp:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA7ElEQVQY02MQogAwQKgSbYUKHRBKVpfNz07v72xura9KjI1SVVEuzM2IiwoHigARnCErI4PQfNxea6GZaqeB0gpztX1b1xXnZV0+eXDxnGmmxkYHd26cN31CV3NdXmaql7vr0d1bWuoqpSQlEZpnmqhMNFJeZ6kO0RwTEXrh2D5kzQ+vnb194QTQwkWzp5qbGqM4e6WF2lZrjUQ12RnGKkDNdy+fWrFwFlyzgoK8oqLCvm3r5ORksWg+aKsJdDlQ/yIz1R3rVyybN+PWhePzpk98++jG+ye3p/Z1gBiPb8nJys6dNgFoIopm8gAAtox+i+ArJ08AAAAASUVORK5CYII="},share:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-f5537.jpg"},heroPreviewLG:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-294b1.webp"},heroPreviewMD:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-d8cc9.webp"},heroPreviewSM:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-c14dc.webp"},heroPreviewXS:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-227ee.webp"},mediumPreview:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-ce211.webp"},smallPreview:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-051c1.webp"}},excerpt:"Ave $USER!  В этом посте я расскажу как установить и настроить свой Rust Server и моды к нему на примере Oxide.Ext.Rustio…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/03/games-build-rust-server/index.md absPath of file >>> MarkdownRemark",slug:"/2016/03/games-build-rust-server",permalink:"https://potofcode.com/2016/03/games-build-rust-server/",html:'<p>Ave $USER!</p>\n<p> В этом посте я расскажу как установить и настроить свой Rust Server и моды к нему на примере Oxide.Ext.Rustio.</p>\n<p>Сначала утсановим SteamCMD. Для OS Windows <a href="https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip">скачаем</a> архив и распакуем в отдельную папку. Я буду использовать <code>D:\\bin\\steamcmd</code>.</p>\n<blockquote>\n<p>Для OS Ubuntu</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> lib32gcc1\n<span class="token function">sudo</span> <span class="token function">useradd</span> -m steam\n<span class="token function">su</span> - steam\n<span class="token function">mkdir</span> ~/steamcmd\n<span class="token function">cd</span> ~/steamcmd\n<span class="token function">wget</span> https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz\n<span class="token function">tar</span> -xvzf steamcmd_linux.tar.gz\n</code></pre>\n      </div>\n<p>После распаковки запускаем консоль <code>steamcmd</code> и ждем завершения процесса установки. Как только все будет установлено должна открыться консоль</p>\n<div class="gallery">\n  \n  <a class="gatsby-resp-image-link" href="/static/steamcmd-2d119bdca30693ac54dd670282c1c876-cf9e0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 1; max-width: 979px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 52.50255362614914%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAZUlEQVQoz+3LPQuAIBSF4SveWcRy8KP/PwmBYS7qX+saNAbi0NQznOm8sN9CCCmdtdbWGm0pJed8vIgxUkIH2Lw3xjjntNaLUkIIRIQBVIHuViklfzDGRmJrLSDnMKXH0/744/gCS74wB4r17PYAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="steamcmd" title="" src="/static/steamcmd-2d119bdca30693ac54dd670282c1c876-cf9e0.png" srcset="/static/steamcmd-2d119bdca30693ac54dd670282c1c876-11583.png 245w,\n/static/steamcmd-2d119bdca30693ac54dd670282c1c876-872f7.png 490w,\n/static/steamcmd-2d119bdca30693ac54dd670282c1c876-cf9e0.png 979w" sizes="(max-width: 979px) 100vw, 979px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<p>Затем необходимо залогиниться и начать процесс установки сервера</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ login anonymous\n$ app_update 258550 -beta experimental validate\n</code></pre>\n      </div>\n<div class="gallery">\n  \n  <a class="gatsby-resp-image-link" href="/static/steamcmd-rust-server-037c76aaa79ff4ac9c36d70592b3b7fd-cf9e0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 1; max-width: 979px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 52.50255362614914%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABEUlEQVQoz42SyY6DMBBEWZUQFrG3V8CEiK9HEGUOfN4UjDRzMpo+lCzbr8putbNt23t7r+u6LMvX/+rz+YDa990piqIsyzzP0zSN4/h2uyVJAvV937kszrkDEnxd1/f7PQiCMAx/9RoWQjiMcSHgwvu+l1JqrZumkVLhLIoiWMPUChMxKYRSCvCP4hVEZIypyvL1ejEiK8y5UGegGQx0HA1jDOFmGNqmmaYJjnZYCK1U13WIggLGF9qW5nlmjJ7TNAyDewErJfUJH/nmSG6J8OBOa/wCvOe6l7D+g49kotEY7B/w0w7jHrqNPiMHittoYVXVcMGxVAoLK4yRwGwkZ2VZ9ng8PM/zPcyIfyzOsjXsG0KwS4o01KHdAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="steamcmd rust server" title="" src="/static/steamcmd-rust-server-037c76aaa79ff4ac9c36d70592b3b7fd-cf9e0.png" srcset="/static/steamcmd-rust-server-037c76aaa79ff4ac9c36d70592b3b7fd-11583.png 245w,\n/static/steamcmd-rust-server-037c76aaa79ff4ac9c36d70592b3b7fd-872f7.png 490w,\n/static/steamcmd-rust-server-037c76aaa79ff4ac9c36d70592b3b7fd-cf9e0.png 979w" sizes="(max-width: 979px) 100vw, 979px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<p>Из любопытства, со всем списком серверов можно ознакомиться <a href="https://developer.valvesoftware.com/wiki/Dedicated_Servers_List">здесь</a>.\nПо завершении установки в директории <code>d:\\bin\\steamcmd\\steamapps\\common</code> появится папка <code>rust_dedicated</code>.\nВ качестве движка для модов я использую <a href="http://oxidemod.org/downloads/oxide-for-rust.1659/">oxidemod</a>.\nГотовый движок можно скачать с форума либо собрать из исходников на <a href="https://github.com/OxideMod/Oxide">GitHub</a>.</p>\n<p>Распаковываем файл Oxide-Rust.zip с заменой в папку с сервером <code>d:\\bin\\steamcmd\\steamapps\\common\\rust_dedicated\\</code>.\nТеперь установи несколько плагинов и расширение:</p>\n<ul>\n<li><a href="http://oxidemod.org/extensions/rust-io.768/">Rust:IO</a> - Расширение добавляет карту местности доступную из браузера</li>\n<li><a href="http://oxidemod.org/plugins/kits.668/">Kits</a> - Добавляет возможность создавать наборы предметов</li>\n<li><a href="http://oxidemod.org/plugins/death-notes.819/">Death Notes</a> - Сообщает о смертях в мире</li>\n<li><a href="http://oxidemod.org/plugins/teleportation-system.660/">Teleportation System</a> - Позволяет телепортироваться</li>\n<li><a href="http://oxidemod.org/plugins/airdrop-controller.804/">Airdrop Controller</a> - Добавляет возможность контролировать Airdrop</li>\n<li><a href="http://oxidemod.org/plugins/give.666/">Give</a> - Добавляет возможность давать игрокам предметы</li>\n</ul>\n<p>Чтобы установить и нстроить расширение <code>Rust:IO</code> нужно сохранить файл <code>Oxide.Ext.RustIO.dll</code> в папку <code>rust_dedicated\\RustDedicated_Data\\Managed\\</code>.\nДля установки плагинов, нужно скопировать файлы в <code>rust_dedicated\\server\\facepunchdev\\oxide\\plugins\\</code>\nТеперь, чтобы запустить сервер выполним команду</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ RustDedicated.exe -batchmode +server.hostname <span class="token string">"hostname"</span> +server.port 28015 +server.identity <span class="token string">"server name"</span> +server.seed 6738\n</code></pre>\n      </div>\n<p>Все параметры в таблице:</p>\n<table>\n<thead>\n<tr>\n<th align="left">Parameter</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">server.port</td>\n<td align="left">Порт сервера</td>\n</tr>\n<tr>\n<td align="left">server.maxplayers</td>\n<td align="left">Максимальное количество игроков на сервере</td>\n</tr>\n<tr>\n<td align="left">server.hostname</td>\n<td align="left">Адрес сервера</td>\n</tr>\n<tr>\n<td align="left">server.identity</td>\n<td align="left">Название сервера</td>\n</tr>\n<tr>\n<td align="left">server.level</td>\n<td align="left">Тип карты “Procedural Map” - процедурная генерация или “TestLevel” - тестовая карта</td>\n</tr>\n<tr>\n<td align="left">server.seed</td>\n<td align="left">Вектор инициализации генератора карты. Может принять значения от -2,147,483,647 до 2,147,483,647</td>\n</tr>\n<tr>\n<td align="left">server.saveinterval</td>\n<td align="left">Интервал в секундах между автосохранениями</td>\n</tr>\n<tr>\n<td align="left">server.secure</td>\n<td align="left">Защита VAC и EAC</td>\n</tr>\n<tr>\n<td align="left">server.tickrate</td>\n<td align="left">Количество тиков в секунду. Меньше - быстрее но возможны странные вещи. По умолчанию 30</td>\n</tr>\n<tr>\n<td align="left">construct.frameminutes</td>\n<td align="left">Minutes before a frame is automatically destroyed</td>\n</tr>\n</tbody>\n</table>\n<p>Теперь, что бы играть на свеженьком сервере, запускаем клиент жмем F1 вводим <code>net.connect &#x3C;ip_address></code></p>',color:"rgba(18, 18, 18, 0.8)",title:"Настраиваем свой Rust сервер",description:"Установка и настройка локального игрового Rust сервера. Как настроить Oxide.Ext.Rustio и многое другое.",category:"игры",tags:["игпы","Steam","Rust"],date:"2016-03-13T00:00:00.000Z",type:null}],posts:[{images:{blurUp:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAA7EAAAOxAGVKw4bAAAA7ElEQVQY02MQogAwQKgSbYUKHRBKVpfNz07v72xura9KjI1SVVEuzM2IiwoHigARnCErI4PQfNxea6GZaqeB0gpztX1b1xXnZV0+eXDxnGmmxkYHd26cN31CV3NdXmaql7vr0d1bWuoqpSQlEZpnmqhMNFJeZ6kO0RwTEXrh2D5kzQ+vnb194QTQwkWzp5qbGqM4e6WF2lZrjUQ12RnGKkDNdy+fWrFwFlyzgoK8oqLCvm3r5ORksWg+aKsJdDlQ/yIz1R3rVyybN+PWhePzpk98++jG+ye3p/Z1gBiPb8nJys6dNgFoIopm8gAAtox+i+ArJ08AAAAASUVORK5CYII="},share:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-f5537.jpg"},heroPreviewLG:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-294b1.webp"},heroPreviewMD:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-d8cc9.webp"},heroPreviewSM:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-c14dc.webp"},heroPreviewXS:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-227ee.webp"},mediumPreview:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-ce211.webp"},smallPreview:{src:"/static/rust-9c7a1e1ac5d08ffc7dd84ab270e63d74-051c1.webp"}},excerpt:"Ave $USER!  В этом посте я расскажу как установить и настроить свой Rust Server и моды к нему на примере Oxide.Ext.Rustio…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/03/games-build-rust-server/index.md absPath of file >>> MarkdownRemark",slug:"/2016/03/games-build-rust-server",permalink:"https://potofcode.com/2016/03/games-build-rust-server/",html:'<p>Ave $USER!</p>\n<p> В этом посте я расскажу как установить и настроить свой Rust Server и моды к нему на примере Oxide.Ext.Rustio.</p>\n<p>Сначала утсановим SteamCMD. Для OS Windows <a href="https://steamcdn-a.akamaihd.net/client/installer/steamcmd.zip">скачаем</a> архив и распакуем в отдельную папку. Я буду использовать <code>D:\\bin\\steamcmd</code>.</p>\n<blockquote>\n<p>Для OS Ubuntu</p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">sudo</span> <span class="token function">apt-get</span> <span class="token function">install</span> lib32gcc1\n<span class="token function">sudo</span> <span class="token function">useradd</span> -m steam\n<span class="token function">su</span> - steam\n<span class="token function">mkdir</span> ~/steamcmd\n<span class="token function">cd</span> ~/steamcmd\n<span class="token function">wget</span> https://steamcdn-a.akamaihd.net/client/installer/steamcmd_linux.tar.gz\n<span class="token function">tar</span> -xvzf steamcmd_linux.tar.gz\n</code></pre>\n      </div>\n<p>После распаковки запускаем консоль <code>steamcmd</code> и ждем завершения процесса установки. Как только все будет установлено должна открыться консоль</p>\n<div class="gallery">\n  \n  <a class="gatsby-resp-image-link" href="/static/steamcmd-2d119bdca30693ac54dd670282c1c876-cf9e0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 1; max-width: 979px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 52.50255362614914%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAAZUlEQVQoz+3LPQuAIBSF4SveWcRy8KP/PwmBYS7qX+saNAbi0NQznOm8sN9CCCmdtdbWGm0pJed8vIgxUkIH2Lw3xjjntNaLUkIIRIQBVIHuViklfzDGRmJrLSDnMKXH0/744/gCS74wB4r17PYAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="steamcmd" title="" src="/static/steamcmd-2d119bdca30693ac54dd670282c1c876-cf9e0.png" srcset="/static/steamcmd-2d119bdca30693ac54dd670282c1c876-11583.png 245w,\n/static/steamcmd-2d119bdca30693ac54dd670282c1c876-872f7.png 490w,\n/static/steamcmd-2d119bdca30693ac54dd670282c1c876-cf9e0.png 979w" sizes="(max-width: 979px) 100vw, 979px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<p>Затем необходимо залогиниться и начать процесс установки сервера</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ login anonymous\n$ app_update 258550 -beta experimental validate\n</code></pre>\n      </div>\n<div class="gallery">\n  \n  <a class="gatsby-resp-image-link" href="/static/steamcmd-rust-server-037c76aaa79ff4ac9c36d70592b3b7fd-cf9e0.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 1; max-width: 979px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 52.50255362614914%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAALCAIAAADwazoUAAAACXBIWXMAAA7DAAAOwwHHb6hkAAABEUlEQVQoz42SyY6DMBBEWZUQFrG3V8CEiK9HEGUOfN4UjDRzMpo+lCzbr8putbNt23t7r+u6LMvX/+rz+YDa990piqIsyzzP0zSN4/h2uyVJAvV937kszrkDEnxd1/f7PQiCMAx/9RoWQjiMcSHgwvu+l1JqrZumkVLhLIoiWMPUChMxKYRSCvCP4hVEZIypyvL1ejEiK8y5UGegGQx0HA1jDOFmGNqmmaYJjnZYCK1U13WIggLGF9qW5nlmjJ7TNAyDewErJfUJH/nmSG6J8OBOa/wCvOe6l7D+g49kotEY7B/w0w7jHrqNPiMHittoYVXVcMGxVAoLK4yRwGwkZ2VZ9ng8PM/zPcyIfyzOsjXsG0KwS4o01KHdAAAAAElFTkSuQmCC&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="steamcmd rust server" title="" src="/static/steamcmd-rust-server-037c76aaa79ff4ac9c36d70592b3b7fd-cf9e0.png" srcset="/static/steamcmd-rust-server-037c76aaa79ff4ac9c36d70592b3b7fd-11583.png 245w,\n/static/steamcmd-rust-server-037c76aaa79ff4ac9c36d70592b3b7fd-872f7.png 490w,\n/static/steamcmd-rust-server-037c76aaa79ff4ac9c36d70592b3b7fd-cf9e0.png 979w" sizes="(max-width: 979px) 100vw, 979px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<p>Из любопытства, со всем списком серверов можно ознакомиться <a href="https://developer.valvesoftware.com/wiki/Dedicated_Servers_List">здесь</a>.\nПо завершении установки в директории <code>d:\\bin\\steamcmd\\steamapps\\common</code> появится папка <code>rust_dedicated</code>.\nВ качестве движка для модов я использую <a href="http://oxidemod.org/downloads/oxide-for-rust.1659/">oxidemod</a>.\nГотовый движок можно скачать с форума либо собрать из исходников на <a href="https://github.com/OxideMod/Oxide">GitHub</a>.</p>\n<p>Распаковываем файл Oxide-Rust.zip с заменой в папку с сервером <code>d:\\bin\\steamcmd\\steamapps\\common\\rust_dedicated\\</code>.\nТеперь установи несколько плагинов и расширение:</p>\n<ul>\n<li><a href="http://oxidemod.org/extensions/rust-io.768/">Rust:IO</a> - Расширение добавляет карту местности доступную из браузера</li>\n<li><a href="http://oxidemod.org/plugins/kits.668/">Kits</a> - Добавляет возможность создавать наборы предметов</li>\n<li><a href="http://oxidemod.org/plugins/death-notes.819/">Death Notes</a> - Сообщает о смертях в мире</li>\n<li><a href="http://oxidemod.org/plugins/teleportation-system.660/">Teleportation System</a> - Позволяет телепортироваться</li>\n<li><a href="http://oxidemod.org/plugins/airdrop-controller.804/">Airdrop Controller</a> - Добавляет возможность контролировать Airdrop</li>\n<li><a href="http://oxidemod.org/plugins/give.666/">Give</a> - Добавляет возможность давать игрокам предметы</li>\n</ul>\n<p>Чтобы установить и нстроить расширение <code>Rust:IO</code> нужно сохранить файл <code>Oxide.Ext.RustIO.dll</code> в папку <code>rust_dedicated\\RustDedicated_Data\\Managed\\</code>.\nДля установки плагинов, нужно скопировать файлы в <code>rust_dedicated\\server\\facepunchdev\\oxide\\plugins\\</code>\nТеперь, чтобы запустить сервер выполним команду</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>$ RustDedicated.exe -batchmode +server.hostname <span class="token string">"hostname"</span> +server.port 28015 +server.identity <span class="token string">"server name"</span> +server.seed 6738\n</code></pre>\n      </div>\n<p>Все параметры в таблице:</p>\n<table>\n<thead>\n<tr>\n<th align="left">Parameter</th>\n<th align="left">Description</th>\n</tr>\n</thead>\n<tbody>\n<tr>\n<td align="left">server.port</td>\n<td align="left">Порт сервера</td>\n</tr>\n<tr>\n<td align="left">server.maxplayers</td>\n<td align="left">Максимальное количество игроков на сервере</td>\n</tr>\n<tr>\n<td align="left">server.hostname</td>\n<td align="left">Адрес сервера</td>\n</tr>\n<tr>\n<td align="left">server.identity</td>\n<td align="left">Название сервера</td>\n</tr>\n<tr>\n<td align="left">server.level</td>\n<td align="left">Тип карты “Procedural Map” - процедурная генерация или “TestLevel” - тестовая карта</td>\n</tr>\n<tr>\n<td align="left">server.seed</td>\n<td align="left">Вектор инициализации генератора карты. Может принять значения от -2,147,483,647 до 2,147,483,647</td>\n</tr>\n<tr>\n<td align="left">server.saveinterval</td>\n<td align="left">Интервал в секундах между автосохранениями</td>\n</tr>\n<tr>\n<td align="left">server.secure</td>\n<td align="left">Защита VAC и EAC</td>\n</tr>\n<tr>\n<td align="left">server.tickrate</td>\n<td align="left">Количество тиков в секунду. Меньше - быстрее но возможны странные вещи. По умолчанию 30</td>\n</tr>\n<tr>\n<td align="left">construct.frameminutes</td>\n<td align="left">Minutes before a frame is automatically destroyed</td>\n</tr>\n</tbody>\n</table>\n<p>Теперь, что бы играть на свеженьком сервере, запускаем клиент жмем F1 вводим <code>net.connect &#x3C;ip_address></code></p>',color:"rgba(18, 18, 18, 0.8)",title:"Настраиваем свой Rust сервер",description:"Установка и настройка локального игрового Rust сервера. Как настроить Oxide.Ext.Rustio и многое другое.",category:"игры",tags:["игпы","Steam","Rust"],date:"2016-03-13T00:00:00.000Z",type:null}],total:1,page:1}}}});
//# sourceMappingURL=path---tags-rust-e698846e3a96dff9afcd.js.map