webpackJsonp([0xf5e61a20c78f],{433:function(n,s){n.exports={pathContext:{tag:"WoW",latest:[{images:{blurUp:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAIppAACKaQGxZbMyAAACK0lEQVQozw2R30sUURTH5z+IcpzZ+XHvjrvuzuzsvXNnHHPXVdDQoF1wZ+fuzu5mhmZKLaZBatAPXyofgjK0EAw2Iih6EQmfAv+EIHzssZdehaKgoE7zcDhP5/v9HD6CE/SIrCbJJJRVm2tJi+uOGeplK8LXnSupJ6Mb7LD98tznme748cRDeuR3UntkOnk7H+EWjVDJqWObcJQiXEeUa4rgVEWDBmI/CXpzea64Vl2dzHK1kyknuwOV9NfKVXYyd7fwO5x3/7RvFr4P181v1lTqID9t3CORFpG6PpavIz/PESUNbAosEC0n6HVoIA0Snhi1QrWl2/KnyuXcj+6HAA4+rsDbw4uw+2YK3h/Ow/5RCI3OwK8+T/uSqyk3aJioOqEyzhp6kUXYE9yabDMuuw5PDBEuj6lWYpffykJ7MQ33H5Vhe3cZVlZbsLWzCq/frcPTFzOwvlGE+poBmiXt05oUxvcTXiiN+JE2KLhVMcMCyaY1mdlhoqA4vXcmZtDfcAFDZ53A3DUTFpYy8PhZJQ6iMLuUhbVND6qL/f90V9x2GuoFt4VHvCby/RamQixEdWoyjtFTJFSs+OWS4p55oGDlJGv1QY5kwB8y443iMcC0YzJD+5ksSDukicqkgc7SCOdZ08h47T5DiBtOsaZ+OjYk0oYm21xPx6aHcxU85/P+zeK0+byyXOpOLvqvxmfpXvFSbmuglVpmbXSeRYg6ETa8tqG4TSy5Eer5D2uBrkBagCp9AAAAAElFTkSuQmCC"},share:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-f5537.jpg"},heroPreviewLG:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-294b1.webp"},heroPreviewMD:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-d8cc9.webp"},heroPreviewSM:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-c14dc.webp"},heroPreviewXS:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-227ee.webp"},mediumPreview:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-ce211.webp"},smallPreview:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-051c1.webp"}},excerpt:"Ave $USER! Не так давно, вышло очередное дополнение World of Warcraft Legion. Первым делом я принялся прокачивать шамана и был…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/09/game-wow-legion-shaman-puzzles/index.md absPath of file >>> MarkdownRemark",slug:"/2016/09/game-wow-legion-shaman-puzzles",permalink:"https://potofcode.com/2016/09/game-wow-legion-shaman-puzzles/",html:'<p>Ave $USER!</p>\n<p>Не так давно, вышло очередное дополнение World of Warcraft Legion. Первым делом я принялся прокачивать шамана и был приятно\nудивлен получив артифактное оружие в оплоте шаманов. Я забрел к Мастеру головоломок Ло и увидел то, что вы подумали - головоломку.</p>\n<p>Передо мной был квадрат из огненных и водных тотемов 5 на 5, после того как кликаешь на тотем, он меняется на противоположный,\nнапример водный на огненный или огненный на водный и так же меняет сверху, снизу, слева и справа. Необходимо сделать так,\nчто бы все тотемы стали водными. После первого клика я понял, что срочно нужно написать решение для этой головоломки.</p>\n<p>Задача стояла следующая:\nДана матрица размерности N на M, каждая ячейка матрицы содержит либо 0 либо 1. При изменении значения ячейки матрицы\nна противоположное, автоматически меняются на противоположные значения на соседних ячейках сверху, снизу, слева и справа.\nНайти последовательность изменений ячеек, что бы матрица состояла только из нулей.</p>\n<p>Сначала в голову пришла мысль о переборе всех возможных комбинаций с оптимизацией. Но это все скучно. И я решил написать\nгенетический алгоритм решения задачи.</p>\n<h2>Немного теории</h2>\n<p>Для написания алгритма нам понадобится ввести поняия генов, генотипа, фитнес функции, мутация, поколения и выживания поколения.</p>\n<h3>Гены</h3>\n<p>Геном будем называть значение ячейки матрицы, т.е. это либо 1 либо 0</p>\n<h3>Генотип</h3>\n<p>Генотипом будем называть матрицу представленную в виде строки длинной L = N x M, которая будет содержать последовательно\nобъединенные строки матрицы, каждый символ строки - это ген</p>\n<blockquote>\n<p><strong>Пример</strong></p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Генотипом будет строка <code>0000011111000001111100000</code>, где L = 25</p>\n<h3>Фитнесс функция</h3>\n<p>Фитнесс функцией (Функцией приспособленности) назовем функцию, которая возвращает число от 0 до 1,\nчем ближе значение к 1 тем лучше преспособленность индивида. Остается вопрос, что же считать приспособленностью индивида.\nДля простоты можем обойтись количеством нулевых генов в генотипе разделенное на длину генотипа</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fitness</span><span class="token punctuation">(</span>genotype<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> genotype<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/1/g</span><span class="token punctuation">,</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">/</span> genotype<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Мутация</h3>\n<p>Изменение одного гена в генотипе индивида. Т.к. по правилам игры меняются 5 ячеек матрицы (целевая и соседние),\nто одна мутация будет давать 5 новых индивидов.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> DIRECTIONS <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>x<span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">mutate</span><span class="token punctuation">(</span>genotype<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> DIRECTIONS<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> direction <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> nextX <span class="token operator">=</span> x <span class="token operator">+</span> direction<span class="token punctuation">.</span>x<span class="token punctuation">;</span>\n        <span class="token keyword">const</span> nextY <span class="token operator">=</span> y <span class="token operator">+</span> direction<span class="token punctuation">.</span>y<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> genotype<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span>nextX<span class="token punctuation">,</span> nextY<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Выживание</h3>\n<p>Селекция индивидов по приспособленности в результате которой, остается ограниченное число наиболее приспособленных.\nВ нашем случае мы сортируем всех индивидов по убыванию значения фитнесс функции и оставляем первых N x M x 8</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> maxGenerationSize <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span> <span class="token comment">// 5 * 5 * 8</span>\n\n<span class="token keyword">function</span> <span class="token function">surviving</span><span class="token punctuation">(</span>populations<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> populations<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> b<span class="token punctuation">.</span>fitness <span class="token operator">-</span> a<span class="token punctuation">.</span>fitness<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> maxGenerationSize<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Поколение</h3>\n<p>Множество индивидов оставшихся после “Выживания”.\nПричем самый первый индивид поколения и будет решением, если его приспособленость равна единице</p>\n<h2>Еще немного теории</h2>\n<p>Можно заметить, что после мутации очень часто можно получить ранее известный геном либо геном, полученный меньшим количеством\nмутаций, но с такой же или лучшей приспособленностью. Что бы такого не происходило, создадим хэш-таблицу геномов, ключом которой\nбудет сам геном, а значением, массив из ячеек мутаций. В случае если этот геном уже встречался и количество ячеек мутаций\nне превосходит уже встречавшейся, создаем из него покаление.</p>\n<p>Также легко заметить, что мы меняем на всем поле либо 3 либо 5 ячеек, т.е. фитнесс функция возвращает 1 только после значений\n<code>L - 3</code> и <code>L - 5</code>. Для них, можно возращать значения фтнесс функции <code>0.999</code>, что бы увеличить их приспособленность</p>\n<blockquote>\n<p><strong>Пример</strong>\nДля марицы 5x5 значение фитнесс функции 1 будет при наличии всех 25 нулей в геноме, а им предшедствуют только либо 20 нулей либо 22</p>\n</blockquote>\n<p>Весь цикл поиска решения можно представить в виде следующего кода</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span> generation<span class="token operator">++</span> <span class="token operator">&lt;</span> maxGenerationsCount <span class="token operator">&amp;&amp;</span> populations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fitness <span class="token operator">!==</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    populations <span class="token operator">=</span> <span class="token function">mutating</span><span class="token punctuation">(</span> populations <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    populations <span class="token operator">=</span> <span class="token function">surviving</span><span class="token punctuation">(</span> populations <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>В итоге получилось такое вот приложение</p>\n<div class="gallery">\n  \n  <a class="gatsby-resp-image-link" href="/static/example-2678a6fc499e457e15f323881d5c21db-7d965.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 1; max-width: 766px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 76.89295039164492%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAsElEQVQ4y2NIuPL4v8OZe/89zt3/b3ryDkXY/vTd/ww+Z+/9Vz1y47/Zidv/JQ9e+y9BAVY5fP0/w4QHr//X3Xnxf/bjt////fuHgR99+/n/2ufvBGmYeoaNLz/8X/T07f/drz/9xwZSLz/8b3PyNkEaZBgIMHz79u3/hw8f/r99+w6rgVc/fPl/8NV7gjQMMPwnAEh2ISEDR104Elz46cfP/6++fidIE+1CUgHVDQQAhQU1Wj/eXjAAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="example" title="" src="/static/example-2678a6fc499e457e15f323881d5c21db-7d965.png" srcset="/static/example-2678a6fc499e457e15f323881d5c21db-4e00d.png 245w,\n/static/example-2678a6fc499e457e15f323881d5c21db-f9246.png 490w,\n/static/example-2678a6fc499e457e15f323881d5c21db-7d965.png 766w" sizes="(max-width: 766px) 100vw, 766px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<ul>\n<li><a href="/code/shaman/" target="solution">Посмотреть на готовое решние можно здесь</a></li>\n<li><a href="https://github.com/potofcode/game-wow-legion-shaman-puzzles" target="sources">Исходники на GitHub</a></li>\n</ul>',color:"rgba(106, 151, 51, 0.9)",title:"World of Warcraft Legion головоломки шаманов. Генетический алгоритм решения",description:"World of Warcraft Legion головоломки шаманов. Генетический алгоритм решения",category:"игры",tags:["игры","WoW"],date:"2016-09-06T00:00:00.000Z",type:null}],posts:[{images:{blurUp:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAIppAACKaQGxZbMyAAACK0lEQVQozw2R30sUURTH5z+IcpzZ+XHvjrvuzuzsvXNnHHPXVdDQoF1wZ+fuzu5mhmZKLaZBatAPXyofgjK0EAw2Iih6EQmfAv+EIHzssZdehaKgoE7zcDhP5/v9HD6CE/SIrCbJJJRVm2tJi+uOGeplK8LXnSupJ6Mb7LD98tznme748cRDeuR3UntkOnk7H+EWjVDJqWObcJQiXEeUa4rgVEWDBmI/CXpzea64Vl2dzHK1kyknuwOV9NfKVXYyd7fwO5x3/7RvFr4P181v1lTqID9t3CORFpG6PpavIz/PESUNbAosEC0n6HVoIA0Snhi1QrWl2/KnyuXcj+6HAA4+rsDbw4uw+2YK3h/Ow/5RCI3OwK8+T/uSqyk3aJioOqEyzhp6kUXYE9yabDMuuw5PDBEuj6lWYpffykJ7MQ33H5Vhe3cZVlZbsLWzCq/frcPTFzOwvlGE+poBmiXt05oUxvcTXiiN+JE2KLhVMcMCyaY1mdlhoqA4vXcmZtDfcAFDZ53A3DUTFpYy8PhZJQ6iMLuUhbVND6qL/f90V9x2GuoFt4VHvCby/RamQixEdWoyjtFTJFSs+OWS4p55oGDlJGv1QY5kwB8y443iMcC0YzJD+5ksSDukicqkgc7SCOdZ08h47T5DiBtOsaZ+OjYk0oYm21xPx6aHcxU85/P+zeK0+byyXOpOLvqvxmfpXvFSbmuglVpmbXSeRYg6ETa8tqG4TSy5Eer5D2uBrkBagCp9AAAAAElFTkSuQmCC"},share:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-f5537.jpg"},heroPreviewLG:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-294b1.webp"},heroPreviewMD:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-d8cc9.webp"},heroPreviewSM:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-c14dc.webp"},heroPreviewXS:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-227ee.webp"},mediumPreview:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-ce211.webp"},smallPreview:{src:"/static/wow-legion-74d2846f4142791072e182cb87d86f5f-051c1.webp"}},excerpt:"Ave $USER! Не так давно, вышло очередное дополнение World of Warcraft Legion. Первым делом я принялся прокачивать шамана и был…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/09/game-wow-legion-shaman-puzzles/index.md absPath of file >>> MarkdownRemark",slug:"/2016/09/game-wow-legion-shaman-puzzles",permalink:"https://potofcode.com/2016/09/game-wow-legion-shaman-puzzles/",html:'<p>Ave $USER!</p>\n<p>Не так давно, вышло очередное дополнение World of Warcraft Legion. Первым делом я принялся прокачивать шамана и был приятно\nудивлен получив артифактное оружие в оплоте шаманов. Я забрел к Мастеру головоломок Ло и увидел то, что вы подумали - головоломку.</p>\n<p>Передо мной был квадрат из огненных и водных тотемов 5 на 5, после того как кликаешь на тотем, он меняется на противоположный,\nнапример водный на огненный или огненный на водный и так же меняет сверху, снизу, слева и справа. Необходимо сделать так,\nчто бы все тотемы стали водными. После первого клика я понял, что срочно нужно написать решение для этой головоломки.</p>\n<p>Задача стояла следующая:\nДана матрица размерности N на M, каждая ячейка матрицы содержит либо 0 либо 1. При изменении значения ячейки матрицы\nна противоположное, автоматически меняются на противоположные значения на соседних ячейках сверху, снизу, слева и справа.\nНайти последовательность изменений ячеек, что бы матрица состояла только из нулей.</p>\n<p>Сначала в голову пришла мысль о переборе всех возможных комбинаций с оптимизацией. Но это все скучно. И я решил написать\nгенетический алгоритм решения задачи.</p>\n<h2>Немного теории</h2>\n<p>Для написания алгритма нам понадобится ввести поняия генов, генотипа, фитнес функции, мутация, поколения и выживания поколения.</p>\n<h3>Гены</h3>\n<p>Геном будем называть значение ячейки матрицы, т.е. это либо 1 либо 0</p>\n<h3>Генотип</h3>\n<p>Генотипом будем называть матрицу представленную в виде строки длинной L = N x M, которая будет содержать последовательно\nобъединенные строки матрицы, каждый символ строки - это ген</p>\n<blockquote>\n<p><strong>Пример</strong></p>\n</blockquote>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token punctuation">[</span>\n    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">,</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">,</span>\n    <span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">,</span><span class="token number">0</span><span class="token punctuation">]</span>\n<span class="token punctuation">]</span>\n</code></pre>\n      </div>\n<p>Генотипом будет строка <code>0000011111000001111100000</code>, где L = 25</p>\n<h3>Фитнесс функция</h3>\n<p>Фитнесс функцией (Функцией приспособленности) назовем функцию, которая возвращает число от 0 до 1,\nчем ближе значение к 1 тем лучше преспособленность индивида. Остается вопрос, что же считать приспособленностью индивида.\nДля простоты можем обойтись количеством нулевых генов в генотипе разделенное на длину генотипа</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">function</span> <span class="token function">fitness</span><span class="token punctuation">(</span>genotype<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> genotype<span class="token punctuation">.</span><span class="token function">replace</span><span class="token punctuation">(</span><span class="token regex">/1/g</span><span class="token punctuation">,</span><span class="token string">\'\'</span><span class="token punctuation">)</span><span class="token punctuation">.</span>length <span class="token operator">/</span> genotype<span class="token punctuation">.</span>length<span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Мутация</h3>\n<p>Изменение одного гена в генотипе индивида. Т.к. по правилам игры меняются 5 ячеек матрицы (целевая и соседние),\nто одна мутация будет давать 5 новых индивидов.</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> DIRECTIONS <span class="token operator">=</span> <span class="token punctuation">[</span>\n    <span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>x<span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span> <span class="token number">1</span><span class="token punctuation">}</span><span class="token punctuation">,</span>\n    <span class="token punctuation">{</span>x<span class="token punctuation">:</span> <span class="token number">0</span><span class="token punctuation">,</span> y<span class="token punctuation">:</span><span class="token operator">-</span><span class="token number">1</span><span class="token punctuation">}</span>\n<span class="token punctuation">]</span><span class="token punctuation">;</span>\n\n<span class="token keyword">function</span> <span class="token function">mutate</span><span class="token punctuation">(</span>genotype<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> DIRECTIONS<span class="token punctuation">.</span><span class="token function">map</span><span class="token punctuation">(</span> direction <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">const</span> nextX <span class="token operator">=</span> x <span class="token operator">+</span> direction<span class="token punctuation">.</span>x<span class="token punctuation">;</span>\n        <span class="token keyword">const</span> nextY <span class="token operator">=</span> y <span class="token operator">+</span> direction<span class="token punctuation">.</span>y<span class="token punctuation">;</span>\n        <span class="token keyword">return</span> genotype<span class="token punctuation">.</span><span class="token function">flip</span><span class="token punctuation">(</span>nextX<span class="token punctuation">,</span> nextY<span class="token punctuation">)</span><span class="token punctuation">;</span>\n   <span class="token punctuation">}</span> <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Выживание</h3>\n<p>Селекция индивидов по приспособленности в результате которой, остается ограниченное число наиболее приспособленных.\nВ нашем случае мы сортируем всех индивидов по убыванию значения фитнесс функции и оставляем первых N x M x 8</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">const</span> maxGenerationSize <span class="token operator">=</span> <span class="token number">400</span><span class="token punctuation">;</span> <span class="token comment">// 5 * 5 * 8</span>\n\n<span class="token keyword">function</span> <span class="token function">surviving</span><span class="token punctuation">(</span>populations<span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    <span class="token keyword">return</span> populations<span class="token punctuation">.</span><span class="token function">sort</span><span class="token punctuation">(</span> <span class="token punctuation">(</span>a<span class="token punctuation">,</span> b<span class="token punctuation">)</span> <span class="token operator">=></span> <span class="token punctuation">{</span>\n        <span class="token keyword">return</span> b<span class="token punctuation">.</span>fitness <span class="token operator">-</span> a<span class="token punctuation">.</span>fitness<span class="token punctuation">;</span>\n    <span class="token punctuation">}</span><span class="token punctuation">)</span><span class="token punctuation">.</span><span class="token function">slice</span><span class="token punctuation">(</span><span class="token number">0</span><span class="token punctuation">,</span> maxGenerationSize<span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<h3>Поколение</h3>\n<p>Множество индивидов оставшихся после “Выживания”.\nПричем самый первый индивид поколения и будет решением, если его приспособленость равна единице</p>\n<h2>Еще немного теории</h2>\n<p>Можно заметить, что после мутации очень часто можно получить ранее известный геном либо геном, полученный меньшим количеством\nмутаций, но с такой же или лучшей приспособленностью. Что бы такого не происходило, создадим хэш-таблицу геномов, ключом которой\nбудет сам геном, а значением, массив из ячеек мутаций. В случае если этот геном уже встречался и количество ячеек мутаций\nне превосходит уже встречавшейся, создаем из него покаление.</p>\n<p>Также легко заметить, что мы меняем на всем поле либо 3 либо 5 ячеек, т.е. фитнесс функция возвращает 1 только после значений\n<code>L - 3</code> и <code>L - 5</code>. Для них, можно возращать значения фтнесс функции <code>0.999</code>, что бы увеличить их приспособленность</p>\n<blockquote>\n<p><strong>Пример</strong>\nДля марицы 5x5 значение фитнесс функции 1 будет при наличии всех 25 нулей в геноме, а им предшедствуют только либо 20 нулей либо 22</p>\n</blockquote>\n<p>Весь цикл поиска решения можно представить в виде следующего кода</p>\n<div class="gatsby-highlight">\n      <pre class="language-javascript"><code><span class="token keyword">while</span> <span class="token punctuation">(</span> generation<span class="token operator">++</span> <span class="token operator">&lt;</span> maxGenerationsCount <span class="token operator">&amp;&amp;</span> populations<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">]</span><span class="token punctuation">.</span>fitness <span class="token operator">!==</span> <span class="token number">1</span> <span class="token punctuation">)</span> <span class="token punctuation">{</span>\n    populations <span class="token operator">=</span> <span class="token function">mutating</span><span class="token punctuation">(</span> populations <span class="token punctuation">)</span><span class="token punctuation">;</span>\n    populations <span class="token operator">=</span> <span class="token function">surviving</span><span class="token punctuation">(</span> populations <span class="token punctuation">)</span><span class="token punctuation">;</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>В итоге получилось такое вот приложение</p>\n<div class="gallery">\n  \n  <a class="gatsby-resp-image-link" href="/static/example-2678a6fc499e457e15f323881d5c21db-7d965.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 1; max-width: 766px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 76.89295039164492%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAPCAYAAADkmO9VAAAACXBIWXMAAA7CAAAOwgEVKEqAAAAAsElEQVQ4y2NIuPL4v8OZe/89zt3/b3ryDkXY/vTd/ww+Z+/9Vz1y47/Zidv/JQ9e+y9BAVY5fP0/w4QHr//X3Xnxf/bjt////fuHgR99+/n/2ufvBGmYeoaNLz/8X/T07f/drz/9xwZSLz/8b3PyNkEaZBgIMHz79u3/hw8f/r99+w6rgVc/fPl/8NV7gjQMMPwnAEh2ISEDR104Elz46cfP/6++fidIE+1CUgHVDQQAhQU1Wj/eXjAAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="example" title="" src="/static/example-2678a6fc499e457e15f323881d5c21db-7d965.png" srcset="/static/example-2678a6fc499e457e15f323881d5c21db-4e00d.png 245w,\n/static/example-2678a6fc499e457e15f323881d5c21db-f9246.png 490w,\n/static/example-2678a6fc499e457e15f323881d5c21db-7d965.png 766w" sizes="(max-width: 766px) 100vw, 766px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<ul>\n<li><a href="/code/shaman/" target="solution">Посмотреть на готовое решние можно здесь</a></li>\n<li><a href="https://github.com/potofcode/game-wow-legion-shaman-puzzles" target="sources">Исходники на GitHub</a></li>\n</ul>',
color:"rgba(106, 151, 51, 0.9)",title:"World of Warcraft Legion головоломки шаманов. Генетический алгоритм решения",description:"World of Warcraft Legion головоломки шаманов. Генетический алгоритм решения",category:"игры",tags:["игры","WoW"],date:"2016-09-06T00:00:00.000Z",type:null}],total:1,page:1}}}});
//# sourceMappingURL=path---tags-wo-w-2a75b5fd39f123ead8e0.js.map