webpackJsonp([261373376314],{426:function(x,e){x.exports={pathContext:{tag:"hexo",latest:[{images:{heroPreviewLG:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-294b1.webp"},heroPreviewMD:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-d8cc9.webp"},heroPreviewSM:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-c14dc.webp"},heroPreviewXS:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-227ee.webp"},mediumPreview:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-ce211.webp"},smallPreview:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-051c1.webp"}},excerpt:"Ave $USER! Я уже писал о том  как бесплатно захостить статический сайт на GitHub с Custom Domain и HTTPS . В этот раз я расскажу…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/10/article-free-static-blog-with-hexo/index.md absPath of file >>> MarkdownRemark",slug:"/2016/10/article-free-static-blog-with-hexo",permalink:"https://potofcode.com/2016/10/article-free-static-blog-with-hexo/",html:'<p>Ave $USER!</p>\n<p>Я уже писал о том <a href="/2016/09/hello-world-github-pages/">как бесплатно захостить статический сайт на GitHub с Custom Domain и HTTPS</a>.</p>\n<p>В этот раз я расскажу немного о преимуществах статических сайтов и как создать свой статический блог, подключить к нему сервис коментариев, кнопки соц. сетей, который можно будет хостить на GitHub.</p>\n<p>Действительно, статический сайт, это очень удобно, просто и практично, различные динамические данные можно поключить через сторонние сервисы,\nоставив только статику, которую намного проще хостить и поддерживать, например на том же Github.</p>\n<h2>Содержание:</h2>\n<html><head></head><body><ol class="contents">\n  <li><a href="#&#x41F;&#x43E;&#x447;&#x435;&#x43C;&#x443; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x441;&#x430;&#x439;&#x442;?">&#x41F;&#x43E;&#x447;&#x435;&#x43C;&#x443; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x441;&#x430;&#x439;&#x442;?</a></li>\n  <li><a href="#&#x427;&#x442;&#x43E; &#x436;&#x435; &#x442;&#x430;&#x43A;&#x43E;&#x435; Hexo?">&#x427;&#x442;&#x43E; &#x436;&#x435; &#x442;&#x430;&#x43A;&#x43E;&#x435; Hexo?</a></li>\n  <li><a href="#&#x423;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43A;&#x430; &#x438; &#x43D;&#x430;&#x441;&#x442;&#x440;&#x43E;&#x439;&#x43A;&#x430;">&#x423;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43A;&#x430; &#x438; &#x43D;&#x430;&#x441;&#x442;&#x440;&#x43E;&#x439;&#x43A;&#x430;</a></li>\n  <li><a href="#&#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442;">&#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442;</a></li>\n</ol></body></html>\n<html><head></head><body><h3><a name="&#x41F;&#x43E;&#x447;&#x435;&#x43C;&#x443; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x441;&#x430;&#x439;&#x442;?">&#x41F;&#x43E;&#x447;&#x435;&#x43C;&#x443; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x441;&#x430;&#x439;&#x442;?</a></h3></body></html>\n<p>Здесь можно много спорить о статике и динамике, но существуют неоспоримые два преимущества статики перед динамикой:</p>\n<ol>\n<li>Скорость - даже кешированая динамическая страница грузится первый раз ( для кэша) медленнее. А закэшировав ее необходимо отслеживать ее консистентность, т.к.\nизмененные данные, могут не отобразиться, т.к. не обновился кэш.</li>\n<li>Безопасность - для создания сайта используются различные готовые решения, такие как WordPress и зачастую содержат ошибки, которые открывают двери злоумышленникам.\nНе верите? Вбейте в гугл <code>уязвимости wordpress</code>. И это не говоря о уязвимостях самих языков программирования, таких как PHP, Ruby и прочие.</li>\n</ol>\n<p>Единственное неудобство статики связано с генерацией страниц и загрузкой их на сервер при каждом обновлении контента, но этот процесс можно легко автоматизировать,\nа все динамические данные легко работают со сторонними сервисами, например интеграция социальных сетей типа фейсбука или вконтакте, все равно без них сейчас никак =)</p>\n<html><head></head><body><h3><a name="&#x427;&#x442;&#x43E; &#x436;&#x435; &#x442;&#x430;&#x43A;&#x43E;&#x435; Hexo?">&#x427;&#x442;&#x43E; &#x436;&#x435; &#x442;&#x430;&#x43A;&#x43E;&#x435; Hexo?</a></h3></body></html>\n<p>Hexo - это фреймворк написанный на node js для генерации статических блогов, который поддерживает несколько языков разметки (в том числе Markdown),\nимеет <a href="https://hexo.io/plugins/">множество плагинов</a> и <a href="https://hexo.io/themes/">там оформления</a>.\nТак же не составит труда создать свою тему с минимальными знаниями верстки.\nВсю информацию можно найти <a href="https://hexo.io/">на официальном сайте HEXO</a></p>\n<html><head></head><body><h3><a name="&#x423;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43A;&#x430; &#x438; &#x43D;&#x430;&#x441;&#x442;&#x440;&#x43E;&#x439;&#x43A;&#x430;">&#x423;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43A;&#x430; &#x438; &#x43D;&#x430;&#x441;&#x442;&#x440;&#x43E;&#x439;&#x43A;&#x430;</a></h3></body></html>\n<p>Для начала нам понадобится установить Node JS и npm, про установку, можно <a href="/2017/09/hello-world-node-js/">прочесть здесь</a>\nТак же понадобиться аккаунт на Github с именем вашего блога, например <code>my-cool-blog</code>, в нем необходимо создать репозиторий <code>my-cool-blog.github.io</code>,\nгде будет храниться наш сайт, подробнее можно <a href="/2016/09/hello-world-github-pages/">прочесть здесь</a></p>\n<p>После того как Node JS и npm установлены, необходимо установить HEXO, создадать проект и настроить его. Запускаем комндную строку и выполняем:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i -g hexo-cli\nhexo init my-cool-blog\n<span class="token function">cd</span> my-cool-blog\n<span class="token function">npm</span> i\n</code></pre>\n      </div></body></html>\n<p>После недолгого ожидания у вас должна появится готовая директория с проектом.</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-none"><code>.\n&#x251C;&#x2500;&#x2500; _config.yml\n&#x251C;&#x2500;&#x2500; package.json\n&#x251C;&#x2500;&#x2500; scaffolds\n&#x251C;&#x2500;&#x2500; source\n|   &#x251C;&#x2500;&#x2500; _drafts\n|   &#x2514;&#x2500;&#x2500; _posts\n&#x2514;&#x2500;&#x2500; themes</code></pre>\n      </div></body></html>\n<ul>\n<li><code>_config.yml</code> - конфигурационный файл</li>\n<li><code>scaffolds</code>   - директория с шаблонами страниц, поумолчанию используется <code>post</code></li>\n<li><code>source</code>      - исходные файлы вашего блога. Здесь можно хранить картинки, стили, скрипты. Файлы и директории начинающиеся с <code>_</code> будут игнорироваться.\nВ <code>_posts</code> будут лежать опубликованный контент, а в <code>_drafts</code> черновики</li>\n<li><code>themes</code>      - темы оформления</li>\n</ul>\n<p>Также в нее будет установлена тема оформлению поумолчанию <code>landscape</code>.\nТеперь добавим несколько очень нужных плагинов. Это <code>sitemap.xml</code> генератор, поддержка шаблонизатора <code>jade</code> (сейчас он называется <code>pug</code>) и препроцессор <code>stylus</code>:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i --save hexo-generator-seo-friendly-sitemap hexo-renderer-jade hexo-renderer-stylus\n</code></pre>\n      </div></body></html>\n<p>Все необходимые модули установлены, теперь приступим к конфигурации. Откроем <code>_config.yml</code> и добавим/изменим следующие строки:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token key atrule">sitemap</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> sitemap.xml <span class="token comment" spellcheck="true"># &#x41F;&#x443;&#x442;&#x44C; &#x43A; sitemap.xml</span>\n\n<span class="token key atrule">marked</span><span class="token punctuation">:</span>\n  <span class="token key atrule">gfm</span><span class="token punctuation">:</span> <span class="token boolean important">true           </span><span class="token comment" spellcheck="true"># &#x41F;&#x43E;&#x434;&#x434;&#x435;&#x440;&#x436;&#x43A;&#x430; markdown</span>\n  <span class="token key atrule">breaks</span><span class="token punctuation">:</span> <span class="token boolean important">false       </span><span class="token comment" spellcheck="true"># &#x41E;&#x442;&#x43A;&#x43B;&#x44E;&#x447;&#x430;&#x435;&#x43C; &#x447;&#x443;&#x432;&#x441;&#x442;&#x432;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x441;&#x442;&#x44C; &#x43A; &#x440;&#x430;&#x437;&#x440;&#x44B;&#x432;&#x430;&#x43C; &#x441;&#x441;&#x442;&#x440;&#x43E;&#x43A;</span>\n\n<span class="token key atrule">skip_render</span><span class="token punctuation">:</span>          <span class="token comment" spellcheck="true"># &#x441;&#x435;&#x43A;&#x446;&#x438;&#x44F; &#x434;&#x43B;&#x44F; &#x438;&#x433;&#x43D;&#x43E;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x444;&#x430;&#x439;&#x43B;&#x43E;&#x432; &#x432; source &#x434;&#x438;&#x440;&#x435;&#x43A;&#x442;&#x43E;&#x440;&#x438;&#x438;</span>\n  <span class="token punctuation">-</span> &apos;code/**/*&apos;       <span class="token comment" spellcheck="true"># blob &#x43C;&#x430;&#x441;&#x43A;&#x430; &#x434;&#x43B;&#x44F; &#x438;&#x433;&#x43D;&#x43E;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x43E;&#x431;&#x440;&#x430;&#x431;&#x43E;&#x442;&#x43A;&#x438; &#x444;&#x430;&#x439;&#x43B;&#x43E;&#x432;, &#x44F; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x44E; &#x44D;&#x442;&#x43E; &#x434;&#x43B;&#x44F; &#x434;&#x435;&#x43C;&#x43E;&#x43A;</span>\n\n<span class="token key atrule">new_post_name</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>title.md   <span class="token comment" spellcheck="true"># &#x43A;&#x430;&#x436;&#x434;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442; &#x431;&#x443;&#x434;&#x435;&#x442; &#x445;&#x440;&#x430;&#x43D;&#x438;&#x442;&#x44C;&#x441;&#x44F; &#x43F;&#x43E; &#x43F;&#x443;&#x442;&#x438; /&#x433;&#x43E;&#x434;/&#x43C;&#x435;&#x441;&#x44F;&#x446;/&#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435;-&#x43F;&#x43E;&#x441;&#x442;&#x430;.md</span>\n\n<span class="token key atrule">disqus_shortname</span><span class="token punctuation">:</span> mycoolblog            <span class="token comment" spellcheck="true"># &#x43D;&#x435;&#x43E;&#x431;&#x445;&#x43E;&#x434;&#x438;&#x43C;&#x43E; &#x437;&#x430;&#x440;&#x435;&#x433;&#x438;&#x441;&#x442;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x442;&#x44C;&#x441;&#x44F; &#x43D;&#x430; disqus.com &#x438; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x442;&#x44C; &#x441;&#x432;&#x43E;&#x439; ID</span>\n</code></pre>\n      </div></body></html>\n<p>После открываем файл <code>scaffolds/post.md</code> и изменяем его содержимое на следующее</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-markdown"><code>title: {{ title }}\ndescription: {{ title }}\ndate: {{ date }}\nkeywords: []\ncategories: []\ntags: []\ncomments: true\n</code></pre>\n      </div></body></html>\n<html><head></head><body><h3><a name="&#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442;">&#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442;</a></h3></body></html>\n<p>Теперь можно открыть окно командной строки и выполнить команду</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code>hexo new my-first-cool-post\n</code></pre>\n      </div></body></html>\n<p>в результате выполнения будет сгенерирован файл поста и отображено сообщение</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code>INFO  Created: d:\\projects\\my-cool-blog\\source\\_posts\\year\\month\\my-first-cool-post.md\n</code></pre>\n      </div></body></html>\n<p>открываем файл в Markdown редакторе либо в онлайн редакторе вроде stackedit.io либо dillinger.io и редактируем</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-markdown"><code><span class="token hr punctuation">---</span>\ntitle: &#x41C;&#x43E;&#x439; &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43C;&#x435;&#x433;&#x430;&#x43F;&#x43E;&#x441;&#x442;\ndescription: &#x42D;&#x442;&#x43E; &#x43C;&#x43E;&#x439; &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43C;&#x435;&#x433;&#x430;&#x43F;&#x43E;&#x441;&#x442; &#x432; &#x43C;&#x43E;&#x435;&#x43C; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x43C; &#x431;&#x43B;&#x43E;&#x433;&#x435; &#x43D;&#x430; Hexo\ndate: 2016-10-10 20:22:45\nkeywords: [&#x411;&#x43B;&#x43E;&#x433;]\ncategories: [&#x421;&#x442;&#x430;&#x442;&#x44C;&#x44F;]\n<span class="token title important">tags: [&#x411;&#x43B;&#x43E;&#x433;, Hexo]\n<span class="token punctuation">---</span></span>\n\n&#x412;&#x441;&#x435;&#x43C; &#x43F;&#x440;&#x438;&#x432;&#x435;&#x442;!\n\n&#x42D;&#x442;&#x43E; &#x43C;&#x43E;&#x439; &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442; &#x432; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x43C; &#x431;&#x43B;&#x43E;&#x433;&#x435;\n<span class="token comment" spellcheck="true">&lt;!-- More --&gt;</span>\n\n&#x421;&#x442;&#x430;&#x442;&#x438;&#x43A;&#x430; &#x44D;&#x442;&#x43E; &#x43A;&#x440;&#x443;&#x442;&#x43E;!\n</code></pre>\n      </div></body></html>\n<p>Сохраняем наши изменения и выполняем команду</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code>call hexo clean <span class="token operator">&amp;&amp;</span> call hexo server -l --config _config.yml\n</code></pre>\n      </div></body></html>\n<p>По умолчанию открыв адрес <code>http://localhost:4000/</code> вы должны увидеть ваш первый пост</p>',color:"rgba(26, 132, 203, 0.8)",title:"Как создать статический блог с коментариями на Hexo",description:"В статье подробное описание процесса создания статического блога на Hexo с подключением сервиса коментариев Disqus",category:"кодинг",tags:["node js","blog","hexo"],date:"2016-10-10T22:12:03.284Z",type:null}],posts:[{images:{heroPreviewLG:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-294b1.webp"},heroPreviewMD:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-d8cc9.webp"},heroPreviewSM:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-c14dc.webp"},heroPreviewXS:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-227ee.webp"},mediumPreview:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-ce211.webp"},smallPreview:{src:"/static/f618e2623a2a113b1b0427aab565f9ac-051c1.webp"}},excerpt:"Ave $USER! Я уже писал о том  как бесплатно захостить статический сайт на GitHub с Custom Domain и HTTPS . В этот раз я расскажу…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/10/article-free-static-blog-with-hexo/index.md absPath of file >>> MarkdownRemark",slug:"/2016/10/article-free-static-blog-with-hexo",permalink:"https://potofcode.com/2016/10/article-free-static-blog-with-hexo/",html:'<p>Ave $USER!</p>\n<p>Я уже писал о том <a href="/2016/09/hello-world-github-pages/">как бесплатно захостить статический сайт на GitHub с Custom Domain и HTTPS</a>.</p>\n<p>В этот раз я расскажу немного о преимуществах статических сайтов и как создать свой статический блог, подключить к нему сервис коментариев, кнопки соц. сетей, который можно будет хостить на GitHub.</p>\n<p>Действительно, статический сайт, это очень удобно, просто и практично, различные динамические данные можно поключить через сторонние сервисы,\nоставив только статику, которую намного проще хостить и поддерживать, например на том же Github.</p>\n<h2>Содержание:</h2>\n<html><head></head><body><ol class="contents">\n  <li><a href="#&#x41F;&#x43E;&#x447;&#x435;&#x43C;&#x443; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x441;&#x430;&#x439;&#x442;?">&#x41F;&#x43E;&#x447;&#x435;&#x43C;&#x443; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x441;&#x430;&#x439;&#x442;?</a></li>\n  <li><a href="#&#x427;&#x442;&#x43E; &#x436;&#x435; &#x442;&#x430;&#x43A;&#x43E;&#x435; Hexo?">&#x427;&#x442;&#x43E; &#x436;&#x435; &#x442;&#x430;&#x43A;&#x43E;&#x435; Hexo?</a></li>\n  <li><a href="#&#x423;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43A;&#x430; &#x438; &#x43D;&#x430;&#x441;&#x442;&#x440;&#x43E;&#x439;&#x43A;&#x430;">&#x423;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43A;&#x430; &#x438; &#x43D;&#x430;&#x441;&#x442;&#x440;&#x43E;&#x439;&#x43A;&#x430;</a></li>\n  <li><a href="#&#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442;">&#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442;</a></li>\n</ol></body></html>\n<html><head></head><body><h3><a name="&#x41F;&#x43E;&#x447;&#x435;&#x43C;&#x443; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x441;&#x430;&#x439;&#x442;?">&#x41F;&#x43E;&#x447;&#x435;&#x43C;&#x443; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x438;&#x439; &#x441;&#x430;&#x439;&#x442;?</a></h3></body></html>\n<p>Здесь можно много спорить о статике и динамике, но существуют неоспоримые два преимущества статики перед динамикой:</p>\n<ol>\n<li>Скорость - даже кешированая динамическая страница грузится первый раз ( для кэша) медленнее. А закэшировав ее необходимо отслеживать ее консистентность, т.к.\nизмененные данные, могут не отобразиться, т.к. не обновился кэш.</li>\n<li>Безопасность - для создания сайта используются различные готовые решения, такие как WordPress и зачастую содержат ошибки, которые открывают двери злоумышленникам.\nНе верите? Вбейте в гугл <code>уязвимости wordpress</code>. И это не говоря о уязвимостях самих языков программирования, таких как PHP, Ruby и прочие.</li>\n</ol>\n<p>Единственное неудобство статики связано с генерацией страниц и загрузкой их на сервер при каждом обновлении контента, но этот процесс можно легко автоматизировать,\nа все динамические данные легко работают со сторонними сервисами, например интеграция социальных сетей типа фейсбука или вконтакте, все равно без них сейчас никак =)</p>\n<html><head></head><body><h3><a name="&#x427;&#x442;&#x43E; &#x436;&#x435; &#x442;&#x430;&#x43A;&#x43E;&#x435; Hexo?">&#x427;&#x442;&#x43E; &#x436;&#x435; &#x442;&#x430;&#x43A;&#x43E;&#x435; Hexo?</a></h3></body></html>\n<p>Hexo - это фреймворк написанный на node js для генерации статических блогов, который поддерживает несколько языков разметки (в том числе Markdown),\nимеет <a href="https://hexo.io/plugins/">множество плагинов</a> и <a href="https://hexo.io/themes/">там оформления</a>.\nТак же не составит труда создать свою тему с минимальными знаниями верстки.\nВсю информацию можно найти <a href="https://hexo.io/">на официальном сайте HEXO</a></p>\n<html><head></head><body><h3><a name="&#x423;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43A;&#x430; &#x438; &#x43D;&#x430;&#x441;&#x442;&#x440;&#x43E;&#x439;&#x43A;&#x430;">&#x423;&#x441;&#x442;&#x430;&#x43D;&#x43E;&#x432;&#x43A;&#x430; &#x438; &#x43D;&#x430;&#x441;&#x442;&#x440;&#x43E;&#x439;&#x43A;&#x430;</a></h3></body></html>\n<p>Для начала нам понадобится установить Node JS и npm, про установку, можно <a href="/2017/09/hello-world-node-js/">прочесть здесь</a>\nТак же понадобиться аккаунт на Github с именем вашего блога, например <code>my-cool-blog</code>, в нем необходимо создать репозиторий <code>my-cool-blog.github.io</code>,\nгде будет храниться наш сайт, подробнее можно <a href="/2016/09/hello-world-github-pages/">прочесть здесь</a></p>\n<p>После того как Node JS и npm установлены, необходимо установить HEXO, создадать проект и настроить его. Запускаем комндную строку и выполняем:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i -g hexo-cli\nhexo init my-cool-blog\n<span class="token function">cd</span> my-cool-blog\n<span class="token function">npm</span> i\n</code></pre>\n      </div></body></html>\n<p>После недолгого ожидания у вас должна появится готовая директория с проектом.</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-none"><code>.\n&#x251C;&#x2500;&#x2500; _config.yml\n&#x251C;&#x2500;&#x2500; package.json\n&#x251C;&#x2500;&#x2500; scaffolds\n&#x251C;&#x2500;&#x2500; source\n|   &#x251C;&#x2500;&#x2500; _drafts\n|   &#x2514;&#x2500;&#x2500; _posts\n&#x2514;&#x2500;&#x2500; themes</code></pre>\n      </div></body></html>\n<ul>\n<li><code>_config.yml</code> - конфигурационный файл</li>\n<li><code>scaffolds</code>   - директория с шаблонами страниц, поумолчанию используется <code>post</code></li>\n<li><code>source</code>      - исходные файлы вашего блога. Здесь можно хранить картинки, стили, скрипты. Файлы и директории начинающиеся с <code>_</code> будут игнорироваться.\nВ <code>_posts</code> будут лежать опубликованный контент, а в <code>_drafts</code> черновики</li>\n<li><code>themes</code>      - темы оформления</li>\n</ul>\n<p>Также в нее будет установлена тема оформлению поумолчанию <code>landscape</code>.\nТеперь добавим несколько очень нужных плагинов. Это <code>sitemap.xml</code> генератор, поддержка шаблонизатора <code>jade</code> (сейчас он называется <code>pug</code>) и препроцессор <code>stylus</code>:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i --save hexo-generator-seo-friendly-sitemap hexo-renderer-jade hexo-renderer-stylus\n</code></pre>\n      </div></body></html>\n<p>Все необходимые модули установлены, теперь приступим к конфигурации. Откроем <code>_config.yml</code> и добавим/изменим следующие строки:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token key atrule">sitemap</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> sitemap.xml <span class="token comment" spellcheck="true"># &#x41F;&#x443;&#x442;&#x44C; &#x43A; sitemap.xml</span>\n\n<span class="token key atrule">marked</span><span class="token punctuation">:</span>\n  <span class="token key atrule">gfm</span><span class="token punctuation">:</span> <span class="token boolean important">true           </span><span class="token comment" spellcheck="true"># &#x41F;&#x43E;&#x434;&#x434;&#x435;&#x440;&#x436;&#x43A;&#x430; markdown</span>\n  <span class="token key atrule">breaks</span><span class="token punctuation">:</span> <span class="token boolean important">false       </span><span class="token comment" spellcheck="true"># &#x41E;&#x442;&#x43A;&#x43B;&#x44E;&#x447;&#x430;&#x435;&#x43C; &#x447;&#x443;&#x432;&#x441;&#x442;&#x432;&#x438;&#x442;&#x435;&#x43B;&#x44C;&#x43D;&#x43E;&#x441;&#x442;&#x44C; &#x43A; &#x440;&#x430;&#x437;&#x440;&#x44B;&#x432;&#x430;&#x43C; &#x441;&#x441;&#x442;&#x440;&#x43E;&#x43A;</span>\n\n<span class="token key atrule">skip_render</span><span class="token punctuation">:</span>          <span class="token comment" spellcheck="true"># &#x441;&#x435;&#x43A;&#x446;&#x438;&#x44F; &#x434;&#x43B;&#x44F; &#x438;&#x433;&#x43D;&#x43E;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x444;&#x430;&#x439;&#x43B;&#x43E;&#x432; &#x432; source &#x434;&#x438;&#x440;&#x435;&#x43A;&#x442;&#x43E;&#x440;&#x438;&#x438;</span>\n  <span class="token punctuation">-</span> &apos;code/**/*&apos;       <span class="token comment" spellcheck="true"># blob &#x43C;&#x430;&#x441;&#x43A;&#x430; &#x434;&#x43B;&#x44F; &#x438;&#x433;&#x43D;&#x43E;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x43D;&#x438;&#x44F; &#x43E;&#x431;&#x440;&#x430;&#x431;&#x43E;&#x442;&#x43A;&#x438; &#x444;&#x430;&#x439;&#x43B;&#x43E;&#x432;, &#x44F; &#x438;&#x441;&#x43F;&#x43E;&#x43B;&#x44C;&#x437;&#x443;&#x44E; &#x44D;&#x442;&#x43E; &#x434;&#x43B;&#x44F; &#x434;&#x435;&#x43C;&#x43E;&#x43A;</span>\n\n<span class="token key atrule">new_post_name</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>title.md   <span class="token comment" spellcheck="true"># &#x43A;&#x430;&#x436;&#x434;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442; &#x431;&#x443;&#x434;&#x435;&#x442; &#x445;&#x440;&#x430;&#x43D;&#x438;&#x442;&#x44C;&#x441;&#x44F; &#x43F;&#x43E; &#x43F;&#x443;&#x442;&#x438; /&#x433;&#x43E;&#x434;/&#x43C;&#x435;&#x441;&#x44F;&#x446;/&#x43D;&#x430;&#x437;&#x432;&#x430;&#x43D;&#x438;&#x435;-&#x43F;&#x43E;&#x441;&#x442;&#x430;.md</span>\n\n<span class="token key atrule">disqus_shortname</span><span class="token punctuation">:</span> mycoolblog            <span class="token comment" spellcheck="true"># &#x43D;&#x435;&#x43E;&#x431;&#x445;&#x43E;&#x434;&#x438;&#x43C;&#x43E; &#x437;&#x430;&#x440;&#x435;&#x433;&#x438;&#x441;&#x442;&#x440;&#x438;&#x440;&#x43E;&#x432;&#x430;&#x442;&#x44C;&#x441;&#x44F; &#x43D;&#x430; disqus.com &#x438; &#x43F;&#x43E;&#x43B;&#x443;&#x447;&#x438;&#x442;&#x44C; &#x441;&#x432;&#x43E;&#x439; ID</span>\n</code></pre>\n      </div></body></html>\n<p>После открываем файл <code>scaffolds/post.md</code> и изменяем его содержимое на следующее</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-markdown"><code>title: {{ title }}\ndescription: {{ title }}\ndate: {{ date }}\nkeywords: []\ncategories: []\ntags: []\ncomments: true\n</code></pre>\n      </div></body></html>\n<html><head></head><body><h3><a name="&#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442;">&#x41F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442;</a></h3></body></html>\n<p>Теперь можно открыть окно командной строки и выполнить команду</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code>hexo new my-first-cool-post\n</code></pre>\n      </div></body></html>\n<p>в результате выполнения будет сгенерирован файл поста и отображено сообщение</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code>INFO  Created: d:\\projects\\my-cool-blog\\source\\_posts\\year\\month\\my-first-cool-post.md\n</code></pre>\n      </div></body></html>\n<p>открываем файл в Markdown редакторе либо в онлайн редакторе вроде stackedit.io либо dillinger.io и редактируем</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-markdown"><code><span class="token hr punctuation">---</span>\ntitle: &#x41C;&#x43E;&#x439; &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43C;&#x435;&#x433;&#x430;&#x43F;&#x43E;&#x441;&#x442;\ndescription: &#x42D;&#x442;&#x43E; &#x43C;&#x43E;&#x439; &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43C;&#x435;&#x433;&#x430;&#x43F;&#x43E;&#x441;&#x442; &#x432; &#x43C;&#x43E;&#x435;&#x43C; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x43C; &#x431;&#x43B;&#x43E;&#x433;&#x435; &#x43D;&#x430; Hexo\ndate: 2016-10-10 20:22:45\nkeywords: [&#x411;&#x43B;&#x43E;&#x433;]\ncategories: [&#x421;&#x442;&#x430;&#x442;&#x44C;&#x44F;]\n<span class="token title important">tags: [&#x411;&#x43B;&#x43E;&#x433;, Hexo]\n<span class="token punctuation">---</span></span>\n\n&#x412;&#x441;&#x435;&#x43C; &#x43F;&#x440;&#x438;&#x432;&#x435;&#x442;!\n\n&#x42D;&#x442;&#x43E; &#x43C;&#x43E;&#x439; &#x43F;&#x435;&#x440;&#x432;&#x44B;&#x439; &#x43F;&#x43E;&#x441;&#x442; &#x432; &#x441;&#x442;&#x430;&#x442;&#x438;&#x447;&#x435;&#x441;&#x43A;&#x43E;&#x43C; &#x431;&#x43B;&#x43E;&#x433;&#x435;\n<span class="token comment" spellcheck="true">&lt;!-- More --&gt;</span>\n\n&#x421;&#x442;&#x430;&#x442;&#x438;&#x43A;&#x430; &#x44D;&#x442;&#x43E; &#x43A;&#x440;&#x443;&#x442;&#x43E;!\n</code></pre>\n      </div></body></html>\n<p>Сохраняем наши изменения и выполняем команду</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code>call hexo clean <span class="token operator">&amp;&amp;</span> call hexo server -l --config _config.yml\n</code></pre>\n      </div></body></html>\n<p>По умолчанию открыв адрес <code>http://localhost:4000/</code> вы должны увидеть ваш первый пост</p>',color:"rgba(26, 132, 203, 0.8)",title:"Как создать статический блог с коментариями на Hexo",description:"В статье подробное описание процесса создания статического блога на Hexo с подключением сервиса коментариев Disqus",category:"кодинг",tags:["node js","blog","hexo"],date:"2016-10-10T22:12:03.284Z",type:null}],total:1,page:1}}}});
//# sourceMappingURL=path---tags-hexo-e044698f47b64d12caff.js.map