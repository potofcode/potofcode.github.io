webpackJsonp([261373376314],{422:function(n,e){n.exports={pathContext:{tag:"hexo",latest:[{images:{blurUp:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAAAjElEQVQY02P4jwP8/vtv+qlXPUeef//9F5caBqyie+9+NJt+la/5LBDpTr688fp7EjSLtJ1LWnfPYOoVhZ6LxdsfAY14//0PCZrztjxcfOHNrNOvGvc9JUez7Zzr2pMuk6zZe/Etw6lXpLsuAE0xn3HNbs51rMHGgCsk1119B7RWpe/SovNv/v7DrgYADWJ267YVWrgAAAAASUVORK5CYII="},share:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-f5537.jpg"},heroPreviewLG:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-294b1.webp"},heroPreviewMD:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-d8cc9.webp"},heroPreviewSM:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-c14dc.webp"},heroPreviewXS:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-227ee.webp"},mediumPreview:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-ce211.webp"},smallPreview:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-051c1.webp"}},excerpt:"Ave $USER! Я уже писал о том  как бесплатно захостить статический сайт на GitHub с Custom Domain и HTTPS . В этот раз я расскажу…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/10/article-free-static-blog-with-hexo/index.md absPath of file >>> MarkdownRemark",slug:"/2016/10/article-free-static-blog-with-hexo",permalink:"https://potofcode.com/2016/10/article-free-static-blog-with-hexo/",html:'<p>Ave $USER!</p>\n<p>Я уже писал о том <a href="/2016/09/hello-world-github-pages/">как бесплатно захостить статический сайт на GitHub с Custom Domain и HTTPS</a>.</p>\n<p>В этот раз я расскажу немного о преимуществах статических сайтов и как создать свой статический блог, подключить к нему сервис коментариев, кнопки соц. сетей, который можно будет хостить на GitHub.</p>\n<p>Действительно, статический сайт, это очень удобно, просто и практично, различные динамические данные можно поключить через сторонние сервисы,\nоставив только статику, которую намного проще хостить и поддерживать, например на том же Github.</p>\n<h2>Содержание:</h2>\n<ol class="contents">\n  <li><a href="#Почему статический сайт??">Почему статический сайт?</a></li>\n  <li><a href="#Что же такое Hexo??">Что же такое Hexo?</a></li>\n  <li><a href="#Установка и настройка">Установка и настройка</a></li>\n  <li><a href="#Первый пост">Первый пост</a></li>\n</ol>\n<h3><a name="Почему статический сайт?">Почему статический сайт?</a></h3>\n<p>Здесь можно много спорить о статике и динамике, но существуют неоспоримые два преимущества статики перед динамикой:</p>\n<ol>\n<li>Скорость - даже кешированая динамическая страница грузится первый раз ( для кэша) медленнее. А закэшировав ее необходимо отслеживать ее консистентность, т.к.\nизмененные данные, могут не отобразиться, т.к. не обновился кэш.</li>\n<li>Безопасность - для создания сайта используются различные готовые решения, такие как WordPress и зачастую содержат ошибки, которые открывают двери злоумышленникам.\nНе верите? Вбейте в гугл <code>уязвимости wordpress</code>. И это не говоря о уязвимостях самих языков программирования, таких как PHP, Ruby и прочие.</li>\n</ol>\n<p>Единственное неудобство статики связано с генерацией страниц и загрузкой их на сервер при каждом обновлении контента, но этот процесс можно легко автоматизировать,\nа все динамические данные легко работают со сторонними сервисами, например интеграция социальных сетей типа фейсбука или вконтакте, все равно без них сейчас никак =)</p>\n<h3><a name="Что же такое Hexo?">Что же такое Hexo?</a></h3>\n<p>Hexo - это фреймворк написанный на node js для генерации статических блогов, который поддерживает несколько языков разметки (в том числе Markdown),\nимеет <a href="https://hexo.io/plugins/">множество плагинов</a> и <a href="https://hexo.io/themes/">там оформления</a>.\nТак же не составит труда создать свою тему с минимальными знаниями верстки.\nВсю информацию можно найти <a href="https://hexo.io/">на официальном сайте HEXO</a></p>\n<h3><a name="Установка и настройка">Установка и настройка</a></h3>\n<p>Для начала нам понадобится установить Node JS и npm, про установку, можно <a href="/2017/09/hello-world-node-js/">прочесть здесь</a>\nТак же понадобиться аккаунт на Github с именем вашего блога, например <code>my-cool-blog</code>, в нем необходимо создать репозиторий <code>my-cool-blog.github.io</code>,\nгде будет храниться наш сайт, подробнее можно <a href="/2016/09/hello-world-github-pages/">прочесть здесь</a></p>\n<p>После того как Node JS и npm установлены, необходимо установить HEXO, создадать проект и настроить его. Запускаем комндную строку и выполняем:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i -g hexo-cli\nhexo init my-cool-blog\n<span class="token function">cd</span> my-cool-blog\n<span class="token function">npm</span> i\n</code></pre>\n      </div>\n<p>После недолгого ожидания у вас должна появится готовая директория с проектом.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.\n├── _config.yml\n├── package.json\n├── scaffolds\n├── source\n|   ├── _drafts\n|   └── _posts\n└── themes</code></pre>\n      </div>\n<ul>\n<li><code>_config.yml</code> - конфигурационный файл</li>\n<li><code>scaffolds</code>   - директория с шаблонами страниц, поумолчанию используется <code>post</code></li>\n<li><code>source</code>      - исходные файлы вашего блога. Здесь можно хранить картинки, стили, скрипты. Файлы и директории начинающиеся с <code>_</code> будут игнорироваться.\nВ <code>_posts</code> будут лежать опубликованный контент, а в <code>_drafts</code> черновики</li>\n<li><code>themes</code>      - темы оформления</li>\n</ul>\n<p>Также в нее будет установлена тема оформлению поумолчанию <code>landscape</code>.\nТеперь добавим несколько очень нужных плагинов. Это <code>sitemap.xml</code> генератор, поддержка шаблонизатора <code>jade</code> (сейчас он называется <code>pug</code>) и препроцессор <code>stylus</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i --save hexo-generator-seo-friendly-sitemap hexo-renderer-jade hexo-renderer-stylus\n</code></pre>\n      </div>\n<p>Все необходимые модули установлены, теперь приступим к конфигурации. Откроем <code>_config.yml</code> и добавим/изменим следующие строки:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token key atrule">sitemap</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> sitemap.xml <span class="token comment"># Путь к sitemap.xml</span>\n\n<span class="token key atrule">marked</span><span class="token punctuation">:</span>\n  <span class="token key atrule">gfm</span><span class="token punctuation">:</span> <span class="token boolean important">true           </span><span class="token comment"># Поддержка markdown</span>\n  <span class="token key atrule">breaks</span><span class="token punctuation">:</span> <span class="token boolean important">false       </span><span class="token comment"># Отключаем чувствительность к разрывам сстрок</span>\n\n<span class="token key atrule">skip_render</span><span class="token punctuation">:</span>          <span class="token comment"># секция для игнорирования файлов в source директории</span>\n  <span class="token punctuation">-</span> \'code/**/*\'       <span class="token comment"># blob маска для игнорирования обработки файлов, я использую это для демок</span>\n\n<span class="token key atrule">new_post_name</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>title.md   <span class="token comment"># каждый пост будет храниться по пути /год/месяц/название-поста.md</span>\n\n<span class="token key atrule">disqus_shortname</span><span class="token punctuation">:</span> mycoolblog            <span class="token comment"># необходимо зарегистрироваться на disqus.com и получить свой ID</span>\n</code></pre>\n      </div>\n<p>После открываем файл <code>scaffolds/post.md</code> и изменяем его содержимое на следующее</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code>title: {{ title }}\ndescription: {{ title }}\ndate: {{ date }}\nkeywords: []\ncategories: []\ntags: []\ncomments: true\n</code></pre>\n      </div>\n<h3><a name="Первый пост">Первый пост</a></h3>\n<p>Теперь можно открыть окно командной строки и выполнить команду</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>hexo new my-first-cool-post\n</code></pre>\n      </div>\n<p>в результате выполнения будет сгенерирован файл поста и отображено сообщение</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>INFO  Created: d:\\projects\\my-cool-blog\\source\\_posts\\year\\month\\my-first-cool-post.md\n</code></pre>\n      </div>\n<p>открываем файл в Markdown редакторе либо в онлайн редакторе вроде stackedit.io либо dillinger.io и редактируем</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code><span class="token hr punctuation">---</span>\ntitle: Мой первый мегапост\ndescription: Это мой первый мегапост в моем статическом блоге на Hexo\ndate: 2016-10-10 20:22:45\nkeywords: [Блог]\ncategories: [Статья]\n<span class="token title important">tags: [Блог, Hexo]\n<span class="token punctuation">---</span></span>\n\nВсем привет!\n\nЭто мой первый пост в статическом блоге\n<span class="token comment">&lt;!-- More --></span>\n\nСтатика это круто!\n</code></pre>\n      </div>\n<p>Сохраняем наши изменения и выполняем команду</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>call hexo clean <span class="token operator">&amp;&amp;</span> call hexo server -l --config _config.yml\n</code></pre>\n      </div>\n<p>По умолчанию открыв адрес <code>http://localhost:4000/</code> вы должны увидеть ваш первый пост</p>',color:"rgba(26, 132, 203, 0.8)",title:"Как создать статический блог с коментариями на Hexo",description:"В статье подробное описание процесса создания статического блога на Hexo с подключением сервиса коментариев Disqus",category:"кодинг",tags:["node js","blog","hexo"],date:"2016-10-10T22:12:03.284Z",type:null}],posts:[{images:{blurUp:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAAAsSAAALEgHS3X78AAAAjElEQVQY02P4jwP8/vtv+qlXPUeef//9F5caBqyie+9+NJt+la/5LBDpTr688fp7EjSLtJ1LWnfPYOoVhZ6LxdsfAY14//0PCZrztjxcfOHNrNOvGvc9JUez7Zzr2pMuk6zZe/Etw6lXpLsuAE0xn3HNbs51rMHGgCsk1119B7RWpe/SovNv/v7DrgYADWJ267YVWrgAAAAASUVORK5CYII="},share:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-f5537.jpg"},heroPreviewLG:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-294b1.webp"},heroPreviewMD:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-d8cc9.webp"},heroPreviewSM:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-c14dc.webp"},heroPreviewXS:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-227ee.webp"},mediumPreview:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-ce211.webp"},smallPreview:{src:"/static/hexo-f618e2623a2a113b1b0427aab565f9ac-051c1.webp"}},excerpt:"Ave $USER! Я уже писал о том  как бесплатно захостить статический сайт на GitHub с Custom Domain и HTTPS . В этот раз я расскажу…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/10/article-free-static-blog-with-hexo/index.md absPath of file >>> MarkdownRemark",slug:"/2016/10/article-free-static-blog-with-hexo",permalink:"https://potofcode.com/2016/10/article-free-static-blog-with-hexo/",html:'<p>Ave $USER!</p>\n<p>Я уже писал о том <a href="/2016/09/hello-world-github-pages/">как бесплатно захостить статический сайт на GitHub с Custom Domain и HTTPS</a>.</p>\n<p>В этот раз я расскажу немного о преимуществах статических сайтов и как создать свой статический блог, подключить к нему сервис коментариев, кнопки соц. сетей, который можно будет хостить на GitHub.</p>\n<p>Действительно, статический сайт, это очень удобно, просто и практично, различные динамические данные можно поключить через сторонние сервисы,\nоставив только статику, которую намного проще хостить и поддерживать, например на том же Github.</p>\n<h2>Содержание:</h2>\n<ol class="contents">\n  <li><a href="#Почему статический сайт??">Почему статический сайт?</a></li>\n  <li><a href="#Что же такое Hexo??">Что же такое Hexo?</a></li>\n  <li><a href="#Установка и настройка">Установка и настройка</a></li>\n  <li><a href="#Первый пост">Первый пост</a></li>\n</ol>\n<h3><a name="Почему статический сайт?">Почему статический сайт?</a></h3>\n<p>Здесь можно много спорить о статике и динамике, но существуют неоспоримые два преимущества статики перед динамикой:</p>\n<ol>\n<li>Скорость - даже кешированая динамическая страница грузится первый раз ( для кэша) медленнее. А закэшировав ее необходимо отслеживать ее консистентность, т.к.\nизмененные данные, могут не отобразиться, т.к. не обновился кэш.</li>\n<li>Безопасность - для создания сайта используются различные готовые решения, такие как WordPress и зачастую содержат ошибки, которые открывают двери злоумышленникам.\nНе верите? Вбейте в гугл <code>уязвимости wordpress</code>. И это не говоря о уязвимостях самих языков программирования, таких как PHP, Ruby и прочие.</li>\n</ol>\n<p>Единственное неудобство статики связано с генерацией страниц и загрузкой их на сервер при каждом обновлении контента, но этот процесс можно легко автоматизировать,\nа все динамические данные легко работают со сторонними сервисами, например интеграция социальных сетей типа фейсбука или вконтакте, все равно без них сейчас никак =)</p>\n<h3><a name="Что же такое Hexo?">Что же такое Hexo?</a></h3>\n<p>Hexo - это фреймворк написанный на node js для генерации статических блогов, который поддерживает несколько языков разметки (в том числе Markdown),\nимеет <a href="https://hexo.io/plugins/">множество плагинов</a> и <a href="https://hexo.io/themes/">там оформления</a>.\nТак же не составит труда создать свою тему с минимальными знаниями верстки.\nВсю информацию можно найти <a href="https://hexo.io/">на официальном сайте HEXO</a></p>\n<h3><a name="Установка и настройка">Установка и настройка</a></h3>\n<p>Для начала нам понадобится установить Node JS и npm, про установку, можно <a href="/2017/09/hello-world-node-js/">прочесть здесь</a>\nТак же понадобиться аккаунт на Github с именем вашего блога, например <code>my-cool-blog</code>, в нем необходимо создать репозиторий <code>my-cool-blog.github.io</code>,\nгде будет храниться наш сайт, подробнее можно <a href="/2016/09/hello-world-github-pages/">прочесть здесь</a></p>\n<p>После того как Node JS и npm установлены, необходимо установить HEXO, создадать проект и настроить его. Запускаем комндную строку и выполняем:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i -g hexo-cli\nhexo init my-cool-blog\n<span class="token function">cd</span> my-cool-blog\n<span class="token function">npm</span> i\n</code></pre>\n      </div>\n<p>После недолгого ожидания у вас должна появится готовая директория с проектом.</p>\n<div class="gatsby-highlight">\n      <pre class="language-none"><code>.\n├── _config.yml\n├── package.json\n├── scaffolds\n├── source\n|   ├── _drafts\n|   └── _posts\n└── themes</code></pre>\n      </div>\n<ul>\n<li><code>_config.yml</code> - конфигурационный файл</li>\n<li><code>scaffolds</code>   - директория с шаблонами страниц, поумолчанию используется <code>post</code></li>\n<li><code>source</code>      - исходные файлы вашего блога. Здесь можно хранить картинки, стили, скрипты. Файлы и директории начинающиеся с <code>_</code> будут игнорироваться.\nВ <code>_posts</code> будут лежать опубликованный контент, а в <code>_drafts</code> черновики</li>\n<li><code>themes</code>      - темы оформления</li>\n</ul>\n<p>Также в нее будет установлена тема оформлению поумолчанию <code>landscape</code>.\nТеперь добавим несколько очень нужных плагинов. Это <code>sitemap.xml</code> генератор, поддержка шаблонизатора <code>jade</code> (сейчас он называется <code>pug</code>) и препроцессор <code>stylus</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i --save hexo-generator-seo-friendly-sitemap hexo-renderer-jade hexo-renderer-stylus\n</code></pre>\n      </div>\n<p>Все необходимые модули установлены, теперь приступим к конфигурации. Откроем <code>_config.yml</code> и добавим/изменим следующие строки:</p>\n<div class="gatsby-highlight">\n      <pre class="language-yaml"><code><span class="token key atrule">sitemap</span><span class="token punctuation">:</span>\n    <span class="token key atrule">path</span><span class="token punctuation">:</span> sitemap.xml <span class="token comment"># Путь к sitemap.xml</span>\n\n<span class="token key atrule">marked</span><span class="token punctuation">:</span>\n  <span class="token key atrule">gfm</span><span class="token punctuation">:</span> <span class="token boolean important">true           </span><span class="token comment"># Поддержка markdown</span>\n  <span class="token key atrule">breaks</span><span class="token punctuation">:</span> <span class="token boolean important">false       </span><span class="token comment"># Отключаем чувствительность к разрывам сстрок</span>\n\n<span class="token key atrule">skip_render</span><span class="token punctuation">:</span>          <span class="token comment"># секция для игнорирования файлов в source директории</span>\n  <span class="token punctuation">-</span> \'code/**/*\'       <span class="token comment"># blob маска для игнорирования обработки файлов, я использую это для демок</span>\n\n<span class="token key atrule">new_post_name</span><span class="token punctuation">:</span> <span class="token punctuation">:</span>year/<span class="token punctuation">:</span>month/<span class="token punctuation">:</span>title.md   <span class="token comment"># каждый пост будет храниться по пути /год/месяц/название-поста.md</span>\n\n<span class="token key atrule">disqus_shortname</span><span class="token punctuation">:</span> mycoolblog            <span class="token comment"># необходимо зарегистрироваться на disqus.com и получить свой ID</span>\n</code></pre>\n      </div>\n<p>После открываем файл <code>scaffolds/post.md</code> и изменяем его содержимое на следующее</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code>title: {{ title }}\ndescription: {{ title }}\ndate: {{ date }}\nkeywords: []\ncategories: []\ntags: []\ncomments: true\n</code></pre>\n      </div>\n<h3><a name="Первый пост">Первый пост</a></h3>\n<p>Теперь можно открыть окно командной строки и выполнить команду</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>hexo new my-first-cool-post\n</code></pre>\n      </div>\n<p>в результате выполнения будет сгенерирован файл поста и отображено сообщение</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>INFO  Created: d:\\projects\\my-cool-blog\\source\\_posts\\year\\month\\my-first-cool-post.md\n</code></pre>\n      </div>\n<p>открываем файл в Markdown редакторе либо в онлайн редакторе вроде stackedit.io либо dillinger.io и редактируем</p>\n<div class="gatsby-highlight">\n      <pre class="language-markdown"><code><span class="token hr punctuation">---</span>\ntitle: Мой первый мегапост\ndescription: Это мой первый мегапост в моем статическом блоге на Hexo\ndate: 2016-10-10 20:22:45\nkeywords: [Блог]\ncategories: [Статья]\n<span class="token title important">tags: [Блог, Hexo]\n<span class="token punctuation">---</span></span>\n\nВсем привет!\n\nЭто мой первый пост в статическом блоге\n<span class="token comment">&lt;!-- More --></span>\n\nСтатика это круто!\n</code></pre>\n      </div>\n<p>Сохраняем наши изменения и выполняем команду</p>\n<div class="gatsby-highlight">\n      <pre class="language-bash"><code>call hexo clean <span class="token operator">&amp;&amp;</span> call hexo server -l --config _config.yml\n</code></pre>\n      </div>\n<p>По умолчанию открыв адрес <code>http://localhost:4000/</code> вы должны увидеть ваш первый пост</p>',color:"rgba(26, 132, 203, 0.8)",title:"Как создать статический блог с коментариями на Hexo",description:"В статье подробное описание процесса создания статического блога на Hexo с подключением сервиса коментариев Disqus",category:"кодинг",tags:["node js","blog","hexo"],date:"2016-10-10T22:12:03.284Z",type:null}],total:1,page:1}}}});
//# sourceMappingURL=path---tags-hexo-e346d347367560b211bc.js.map