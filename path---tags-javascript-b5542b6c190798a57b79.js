webpackJsonp([67335324583948],{427:function(n,s){n.exports={pathContext:{tag:"javascript",latest:[{images:{blurUp:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAUUlEQVQY02O46OpENmKggWY35wcNtVfDQ4Dosp83aZrvlhbfr62+W1L4sL31yaSJ1yJCSdB8Iyn+QVPDg8b6Z7Nn3a+tuuLvQ46f8biZ0gADACkGwpDM1C33AAAAAElFTkSuQmCC"},share:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-f5537.jpg"},heroPreviewLG:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-294b1.webp"},heroPreviewMD:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-d8cc9.webp"},heroPreviewSM:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-c14dc.webp"},heroPreviewXS:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-227ee.webp"},mediumPreview:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-ce211.webp"},smallPreview:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-051c1.webp"}},excerpt:"Ave $USER! В этом Hello World я расскажу как использовать инструмент разработки Gulp в своих проектах.\nРассмотрим установку…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/09/hello-world-gulp/index.md absPath of file >>> MarkdownRemark",slug:"/2016/09/hello-world-gulp",permalink:"https://potofcode.com/2016/09/hello-world-gulp/",html:'<p>Ave $USER!</p>\n<p>В этом Hello World я расскажу как использовать инструмент разработки Gulp в своих проектах.\nРассмотрим установку, настройку и примеры использования. Хочешь разобраться с Gulp, читай далее.</p>\n<h3>Для чего нужен Gulp?</h3>\n<p>Gulp - это планировщик задач. Что это значит?\nНапример, у нас есть директория <code>src</code> где ведется разработка проекта и директория <code>build</code>, куда проект собирается и\nнеобходимо выполнить следующие задачи при сборке проекта:</p>\n<ul>\n<li>очистить директорию сборки</li>\n<li>скопировать все <code>css</code> файлы, кроме <code>*.dev.css</code>, в <code>css</code> директорию сборки, после ее очистки</li>\n<li>скопировать все <code>js</code> файлы, кроме <code>*.dev.js</code>, в <code>js</code> директорию сборки, после ее очистки</li>\n<li>скопировать все картинки из директории <code>images</code>, в <code>images</code> директорию сборки, после ее очистки</li>\n<li>скопировать все <code>html</code>, в корень директории сборки, после ее очистки</li>\n</ul>\n<p>Все эти задачи можно сконфигурировать для Gulp в очень удобной и понятной форме и выполнить их в заданной последовательности.</p>\n<h3>Установка и настройка Gulp</h3>\n<p>Что бы установить, настроить, а позже исползовать Gulp, необходимо установить его глобально</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i -g gulp\n</code></pre>\n      </div></body></html>\n<p>и локально в проект</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i --save-dev gulp\n</code></pre>\n      </div></body></html>\n<p>Gulp использует конфигурационный файл <code>gulpfile.js</code>, вот его примерный шаблон</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;gulp&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;task-1&apos;</span><span class="token punctuation">,</span> completeCallback <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Some task-1 code</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">//await while task-1 finished</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;task-2&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;task-1&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> completeCallback <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Some task-2 code</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;default&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;task-1&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;task-2&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div></body></html>\n<p>Для выполнения конкретной задачи, необходимо выполнить команду:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code>gulp <span class="token punctuation">[</span>task-name<span class="token punctuation">]</span>\n</code></pre>\n      </div></body></html>\n<p>Для выполнения задачи по умолчанию, [task-name] не указывается.</p>\n<h3>От теории к практике</h3>\n<p>Давайте рассмотрим на примере задач, которые я привел выше. Для этого установим дополнительный модуль,\nдля удаления файлов по glob маске</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i --save-dev del\n</code></pre>\n      </div></body></html>\n<p>Конфигурационный файл <code>gulpfile.js</code> примет следующий вид</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;gulp&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> del <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;del&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Build directory clean task</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">,</span> cb <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token string">&apos;./build&apos;</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Copy css files to css build directory except *.dev.css after clean task</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;css-copy&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&apos;./src/css/**/*.css&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;!./src/css/**/*.dev.css&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&apos;./build/css&apos;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Copy js files to js build directory except *.dev.js after clean task</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;js-copy&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&apos;./src/js/**/*.js&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;!./src/css/**/*.dev.js&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&apos;./build/js&apos;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Copy all files from images directory to images build directory after clean task</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;images-copy&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&apos;./src/images/*.*&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&apos;./build/images&apos;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Copy all html files to html build directory after clean task</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;html-copy&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&apos;./src/*.html&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&apos;./build&apos;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Default task for execute all tasks in single one</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;default&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;css-copy&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;js-copy&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;images-copy&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;html-copy&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div></body></html>\n<p>Теперь запустив команду</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-javascript"><code>gulp\n</code></pre>\n      </div></body></html>\n<p>проект будет полностью собран в директорию сборки.</p>',color:"rgba(150, 61, 60, 0.8)",title:"Hello World. Gulp",description:"Hello World. Gulp",category:"кодинг",tags:["hello world","javascript","node js","gulp"],date:"2016-09-11T00:00:00.000Z",type:null}],posts:[{images:{blurUp:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAIAAACHqfpvAAAACXBIWXMAABYlAAAWJQFJUiTwAAAAUUlEQVQY02O46OpENmKggWY35wcNtVfDQ4Dosp83aZrvlhbfr62+W1L4sL31yaSJ1yJCSdB8Iyn+QVPDg8b6Z7Nn3a+tuuLvQ46f8biZ0gADACkGwpDM1C33AAAAAElFTkSuQmCC"},share:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-f5537.jpg"},heroPreviewLG:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-294b1.webp"},heroPreviewMD:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-d8cc9.webp"},heroPreviewSM:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-c14dc.webp"},heroPreviewXS:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-227ee.webp"},mediumPreview:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-ce211.webp"},smallPreview:{src:"/static/76e224ba97d2ae7c071bf8b1823e59db-051c1.webp"}},excerpt:"Ave $USER! В этом Hello World я расскажу как использовать инструмент разработки Gulp в своих проектах.\nРассмотрим установку…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/09/hello-world-gulp/index.md absPath of file >>> MarkdownRemark",slug:"/2016/09/hello-world-gulp",permalink:"https://potofcode.com/2016/09/hello-world-gulp/",html:'<p>Ave $USER!</p>\n<p>В этом Hello World я расскажу как использовать инструмент разработки Gulp в своих проектах.\nРассмотрим установку, настройку и примеры использования. Хочешь разобраться с Gulp, читай далее.</p>\n<h3>Для чего нужен Gulp?</h3>\n<p>Gulp - это планировщик задач. Что это значит?\nНапример, у нас есть директория <code>src</code> где ведется разработка проекта и директория <code>build</code>, куда проект собирается и\nнеобходимо выполнить следующие задачи при сборке проекта:</p>\n<ul>\n<li>очистить директорию сборки</li>\n<li>скопировать все <code>css</code> файлы, кроме <code>*.dev.css</code>, в <code>css</code> директорию сборки, после ее очистки</li>\n<li>скопировать все <code>js</code> файлы, кроме <code>*.dev.js</code>, в <code>js</code> директорию сборки, после ее очистки</li>\n<li>скопировать все картинки из директории <code>images</code>, в <code>images</code> директорию сборки, после ее очистки</li>\n<li>скопировать все <code>html</code>, в корень директории сборки, после ее очистки</li>\n</ul>\n<p>Все эти задачи можно сконфигурировать для Gulp в очень удобной и понятной форме и выполнить их в заданной последовательности.</p>\n<h3>Установка и настройка Gulp</h3>\n<p>Что бы установить, настроить, а позже исползовать Gulp, необходимо установить его глобально</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i -g gulp\n</code></pre>\n      </div></body></html>\n<p>и локально в проект</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i --save-dev gulp\n</code></pre>\n      </div></body></html>\n<p>Gulp использует конфигурационный файл <code>gulpfile.js</code>, вот его примерный шаблон</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;gulp&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;task-1&apos;</span><span class="token punctuation">,</span> completeCallback <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Some task-1 code</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">//await while task-1 finished</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;task-2&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;task-1&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> completeCallback <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token comment" spellcheck="true">// Some task-2 code</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;default&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;task-1&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;task-2&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div></body></html>\n<p>Для выполнения конкретной задачи, необходимо выполнить команду:</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code>gulp <span class="token punctuation">[</span>task-name<span class="token punctuation">]</span>\n</code></pre>\n      </div></body></html>\n<p>Для выполнения задачи по умолчанию, [task-name] не указывается.</p>\n<h3>От теории к практике</h3>\n<p>Давайте рассмотрим на примере задач, которые я привел выше. Для этого установим дополнительный модуль,\nдля удаления файлов по glob маске</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-bash"><code><span class="token function">npm</span> i --save-dev del\n</code></pre>\n      </div></body></html>\n<p>Конфигурационный файл <code>gulpfile.js</code> примет следующий вид</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> gulp <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;gulp&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token keyword">const</span> del <span class="token operator">=</span> <span class="token function">require</span><span class="token punctuation">(</span><span class="token string">&apos;del&apos;</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n\n<span class="token comment" spellcheck="true">// Build directory clean task</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">,</span> cb <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> <span class="token function">del</span><span class="token punctuation">(</span><span class="token string">&apos;./build&apos;</span><span class="token punctuation">,</span> cb<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Copy css files to css build directory except *.dev.css after clean task</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;css-copy&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&apos;./src/css/**/*.css&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;!./src/css/**/*.dev.css&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&apos;./build/css&apos;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Copy js files to js build directory except *.dev.js after clean task</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;js-copy&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&apos;./src/js/**/*.js&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;!./src/css/**/*.dev.js&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&apos;./build/js&apos;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Copy all files from images directory to images build directory after clean task</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;images-copy&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&apos;./src/images/*.*&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&apos;./build/images&apos;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Copy all html files to html build directory after clean task</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;html-copy&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">]</span><span class="token punctuation">,</span> <span class="token keyword">function</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> gulp<span class="token punctuation">.</span><span class="token function">src</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token string">&apos;./src/*.html&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span>\n        <span class="token punctuation">.</span><span class="token function">pipe</span><span class="token punctuation">(</span>gulp<span class="token punctuation">.</span><span class="token function">dest</span><span class="token punctuation">(</span><span class="token string">&apos;./build&apos;</span><span class="token punctuation">)</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token comment" spellcheck="true">// Default task for execute all tasks in single one</span>\ngulp<span class="token punctuation">.</span><span class="token function">task</span><span class="token punctuation">(</span><span class="token string">&apos;default&apos;</span><span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token string">&apos;clean&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;css-copy&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;js-copy&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;images-copy&apos;</span><span class="token punctuation">,</span> <span class="token string">&apos;html-copy&apos;</span><span class="token punctuation">]</span><span class="token punctuation">)</span><span class="token punctuation">;</span>\n</code></pre>\n      </div></body></html>\n<p>Теперь запустив команду</p>\n<html><head></head><body><div class="gatsby-highlight">\n      <pre class="language-javascript"><code>gulp\n</code></pre>\n      </div></body></html>\n<p>проект будет полностью собран в директорию сборки.</p>',color:"rgba(150, 61, 60, 0.8)",title:"Hello World. Gulp",description:"Hello World. Gulp",category:"кодинг",tags:["hello world","javascript","node js","gulp"],date:"2016-09-11T00:00:00.000Z",type:null}],total:1,page:1}}}});
//# sourceMappingURL=path---tags-javascript-b5542b6c190798a57b79.js.map