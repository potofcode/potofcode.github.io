webpackJsonp([0xed28d567e2ba],{423:function(a,n){a.exports={pathContext:{tag:"github",latest:[{images:{heroPreviewLG:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-d5c01.png"},heroPreviewMD:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-62329.png"},heroPreviewSM:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-f3214.png"},heroPreviewXS:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-0e0e6.png"},mediumPreview:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-eb3b3.png"},smallPreview:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-cc4fc.png"}},excerpt:"Ave $USER! В последнее время стали очень популярны статические сайты, а в том числе и статические блоги. Даже меня не обшло…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/09/hello-world-github-pages/index.md absPath of file >>> MarkdownRemark",slug:"/2016/09/hello-world-github-pages",permalink:"https://potofcode.com/2016/09/hello-world-github-pages/",html:'<p>Ave $USER!</p>\n<p>В последнее время стали очень популярны статические сайты, а в том числе и статические блоги. Даже меня не обшло стороной это веяние и\nподдавшись искушению и всеобщему хайпу, я перевел свой блог в ряды статических сайтов. Хостится он на GitHub с Custom Domain и проксируется\nчерез Cloud Flare, раздавая трафик по HTTPS.</p>\n<h3>Подготовка</h3>\n<h4>Cloud Flare</h4>\n<p>Регистрируемся на <a href="https://cloudflare.com">Cloud Flare</a> и добавляем свое доменное имя, например <code>my-cool-blog.com</code></p>\n<html><head></head><body><div class="gallery">\n  \n  <a class="gatsby-resp-image-link" href="/static/e12c836a773bab981954530381657ac2-d2fa7.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 1; max-width: 732px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 43.852459016393446%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAArElEQVQoz53O4Q6CIBAH8Hv4nqNn6QH6ljBta+YQ5iybyYEMsSIxV2tz2e/DcTv43wBKabSLCCGMsbIsT0sAz3POfcl9WAgROv4kwmRmI5wHRVForfuFAJXyMTVARN/7aq29/wDquvavW61DzK+QUiLK18Jx7odqhOEwxsAUcM7dFoLpz0HXdW5W73pjccvWm8MKCKVpmh4/ZVm2T5Ikjr+v3kFVXZpr0+r2Dw/dof17coh9VAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="cloudflare step 1" title="" src="/static/e12c836a773bab981954530381657ac2-d2fa7.png" srcset="/static/e12c836a773bab981954530381657ac2-c8a05.png 245w,\n/static/e12c836a773bab981954530381657ac2-f9878.png 490w,\n/static/e12c836a773bab981954530381657ac2-d2fa7.png 976w" sizes="(max-width: 732px) 100vw, 732px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>  </body></html>\n<p>жмем <em>Begin Scan</em> и ждем окончания процесса. После окончания сканирования жмем продолжить, перед вами будет экран со всеми записями\nдомена, его можно пропустить (позже мы вернемся к нему) и нажать продолжить. Выбираем план подписки для данного домена и жмем продолжить.\nПоявится экран с NS записями, где необходимо скопировать адреса:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-none"><code>dana.ns.cloudflare.com\ntodd.ns.cloudflare.com</code></pre>\n      </div></body></html>\n<p>и заменить ими ваши текущие NS записи.</p>\n<p>Все должно быстро обновиться и теперь идем в раздел <em>Crypto</em> и выставляем SSL значение Flexible.</p>\n<p>Переходим в раздел <code>Page Rules</code> и создаем правило для URL <code>http://*my-cool-blog.com/*</code> жмем <em>Add Settings</em> и выбираем <em>Always use HTTPS</em>.</p>\n<p>И наконец переходим во вкладку <code>DNS</code> и добавляем 2 A-записи для IP адресов: 192.30.252.153 и 192.30.252.154.\nЭто адреса GitHub серверов и жмем на тучки, что бы выставить статус <em>DNS and HTTP proxy(CDN)</em>.</p>\n<h4>GitHub</h4>\n<p>Создаем одноименный аккаунт на <a href="https://github.com">GitHub</a> <code>my-cool-blog</code>.\nДалее создаем репозиторий с именем <code>my-cool-blog.github.io</code> и переходим в настройки.\nТам в группе <em>GitHub Pages</em> находим поле <em>Custom Domain</em> и вводим свое доменное имя.</p>\n<h3>Проверка</h3>\n<p>Выполняем</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">mkdir</span> my-cool-blog\n<span class="token function">cd</span> my-cool-blog\n<span class="token function">git</span> clone https://github.com/my-cool-blog/my-cool-blog.github.io.git <span class="token keyword">.</span>\n</code></pre>\n      </div></body></html>\n<p>создаем файл <code>index.html</code></p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>My Cool Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>My Cool Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n      </div></body></html>\n<p>Выполняем</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">git</span> add --all\n<span class="token function">git</span> ci -am <span class="token string">&quot;my first post&quot;</span>\n<span class="token function">git</span> push\n</code></pre>\n      </div></body></html>\n<p>и переходим по URL <code>http://my-cool.blog.com</code>.</p>\n<p>Должен произойти редирект на <code>https://my-cool-blog.com</code>.</p>\n<h3>Профит</h3>\n<p>Качественный бесплатный хостинг, для статического сайта с HTTPS, DDoS защитой и самое главное - это версионность, так как все хостится на GitHub.</p>',color:"rgba(41, 29, 29, 0.8)",title:"Как создать свой сайт на GitHub с Custom Domain и HTTPS",description:"Подробное описание процесса создания сайта на GitHub с Custom Domain и HTTPS",category:"кодинг",tags:["hello world","github"],date:"2016-09-25T00:00:00.000Z",type:null}],posts:[{images:{heroPreviewLG:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-d5c01.png"},heroPreviewMD:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-62329.png"},heroPreviewSM:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-f3214.png"},heroPreviewXS:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-0e0e6.png"},mediumPreview:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-eb3b3.png"},smallPreview:{src:"/static/4ee960190d0f89f49bede6b7f8769d85-cc4fc.png"}},excerpt:"Ave $USER! В последнее время стали очень популярны статические сайты, а в том числе и статические блоги. Даже меня не обшло…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/09/hello-world-github-pages/index.md absPath of file >>> MarkdownRemark",slug:"/2016/09/hello-world-github-pages",permalink:"https://potofcode.com/2016/09/hello-world-github-pages/",html:'<p>Ave $USER!</p>\n<p>В последнее время стали очень популярны статические сайты, а в том числе и статические блоги. Даже меня не обшло стороной это веяние и\nподдавшись искушению и всеобщему хайпу, я перевел свой блог в ряды статических сайтов. Хостится он на GitHub с Custom Domain и проксируется\nчерез Cloud Flare, раздавая трафик по HTTPS.</p>\n<h3>Подготовка</h3>\n<h4>Cloud Flare</h4>\n<p>Регистрируемся на <a href="https://cloudflare.com">Cloud Flare</a> и добавляем свое доменное имя, например <code>my-cool-blog.com</code></p>\n<html><head></head><body><div class="gallery">\n  \n  <a class="gatsby-resp-image-link" href="/static/e12c836a773bab981954530381657ac2-d2fa7.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 1; max-width: 732px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 43.852459016393446%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAJCAIAAAC9o5sfAAAACXBIWXMAAA7DAAAOwwHHb6hkAAAArElEQVQoz53O4Q6CIBAH8Hv4nqNn6QH6ljBta+YQ5iybyYEMsSIxV2tz2e/DcTv43wBKabSLCCGMsbIsT0sAz3POfcl9WAgROv4kwmRmI5wHRVForfuFAJXyMTVARN/7aq29/wDquvavW61DzK+QUiLK18Jx7odqhOEwxsAUcM7dFoLpz0HXdW5W73pjccvWm8MKCKVpmh4/ZVm2T5Ikjr+v3kFVXZpr0+r2Dw/dof17coh9VAAAAABJRU5ErkJggg==&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="cloudflare step 1" title="" src="/static/e12c836a773bab981954530381657ac2-d2fa7.png" srcset="/static/e12c836a773bab981954530381657ac2-c8a05.png 245w,\n/static/e12c836a773bab981954530381657ac2-f9878.png 490w,\n/static/e12c836a773bab981954530381657ac2-d2fa7.png 976w" sizes="(max-width: 732px) 100vw, 732px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>  </body></html>\n<p>жмем <em>Begin Scan</em> и ждем окончания процесса. После окончания сканирования жмем продолжить, перед вами будет экран со всеми записями\nдомена, его можно пропустить (позже мы вернемся к нему) и нажать продолжить. Выбираем план подписки для данного домена и жмем продолжить.\nПоявится экран с NS записями, где необходимо скопировать адреса:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-none"><code>dana.ns.cloudflare.com\ntodd.ns.cloudflare.com</code></pre>\n      </div></body></html>\n<p>и заменить ими ваши текущие NS записи.</p>\n<p>Все должно быстро обновиться и теперь идем в раздел <em>Crypto</em> и выставляем SSL значение Flexible.</p>\n<p>Переходим в раздел <code>Page Rules</code> и создаем правило для URL <code>http://*my-cool-blog.com/*</code> жмем <em>Add Settings</em> и выбираем <em>Always use HTTPS</em>.</p>\n<p>И наконец переходим во вкладку <code>DNS</code> и добавляем 2 A-записи для IP адресов: 192.30.252.153 и 192.30.252.154.\nЭто адреса GitHub серверов и жмем на тучки, что бы выставить статус <em>DNS and HTTP proxy(CDN)</em>.</p>\n<h4>GitHub</h4>\n<p>Создаем одноименный аккаунт на <a href="https://github.com">GitHub</a> <code>my-cool-blog</code>.\nДалее создаем репозиторий с именем <code>my-cool-blog.github.io</code> и переходим в настройки.\nТам в группе <em>GitHub Pages</em> находим поле <em>Custom Domain</em> и вводим свое доменное имя.</p>\n<h3>Проверка</h3>\n<p>Выполняем</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">mkdir</span> my-cool-blog\n<span class="token function">cd</span> my-cool-blog\n<span class="token function">git</span> clone https://github.com/my-cool-blog/my-cool-blog.github.io.git <span class="token keyword">.</span>\n</code></pre>\n      </div></body></html>\n<p>создаем файл <code>index.html</code></p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>html</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>title</span><span class="token punctuation">&gt;</span></span>My Cool Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>title</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>head</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>h1</span><span class="token punctuation">&gt;</span></span>My Cool Blog<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>h1</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>body</span><span class="token punctuation">&gt;</span></span>\n<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>html</span><span class="token punctuation">&gt;</span></span>\n</code></pre>\n      </div></body></html>\n<p>Выполняем</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">git</span> add --all\n<span class="token function">git</span> ci -am <span class="token string">&quot;my first post&quot;</span>\n<span class="token function">git</span> push\n</code></pre>\n      </div></body></html>\n<p>и переходим по URL <code>http://my-cool.blog.com</code>.</p>\n<p>Должен произойти редирект на <code>https://my-cool-blog.com</code>.</p>\n<h3>Профит</h3>\n<p>Качественный бесплатный хостинг, для статического сайта с HTTPS, DDoS защитой и самое главное - это версионность, так как все хостится на GitHub.</p>',color:"rgba(41, 29, 29, 0.8)",title:"Как создать свой сайт на GitHub с Custom Domain и HTTPS",description:"Подробное описание процесса создания сайта на GitHub с Custom Domain и HTTPS",category:"кодинг",tags:["hello world","github"],date:"2016-09-25T00:00:00.000Z",type:null}],total:1,page:1}}}});
//# sourceMappingURL=path---tags-github-4618aced26464992fffa.js.map