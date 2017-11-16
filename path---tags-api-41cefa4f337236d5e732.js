webpackJsonp([0x8d8700bcc262],{416:function(e,a){e.exports={pathContext:{tag:"api",latest:[{images:{blurUp:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA/ElEQVQoz62QvWvCUBTF/atLuxaHIhShgzgoDlKH6uDQTVwEXQxVa2tUEjVGkxg/UqMmxpic3jxQkWziWd7h8t7vnvMiuLMiJ3P0PYjb5U2Q/mYRBpZ0AcOdQWAfD/URXttTrPYunjgJ0aaMjrHD26+CwnCBl9YEjzT/HK/Y29SICwOLSgfGwWL+uSEj9j2FZjnMVzWTgBbiPwoq6ho+LU33ZuwM9DFpY+s618CyLkK1TeaTXQ1JXsPB85DuzyCYNrj5Bn+OiwSvsjsB8KSc3DrDz0De1FFbjlnlPNXiKZGwtvEu6MiJc0pwRJZ8kHRAC4rS5b8z0le48r30D7DuFKOmFdvEAAAAAElFTkSuQmCC"},share:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-f5537.jpg"},heroPreviewLG:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-294b1.webp"},heroPreviewMD:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-d8cc9.webp"},heroPreviewSM:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-c14dc.webp"},heroPreviewXS:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-227ee.webp"},mediumPreview:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-ce211.webp"},smallPreview:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-051c1.webp"}},excerpt:"Ave $USER! Спроектировать Rest API для мобильного приложения, SPA( Single Page Application ) или просто как отдельного сервиса…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/12/article-rest-api-design-best-practices/index.md absPath of file >>> MarkdownRemark",slug:"/2016/12/article-rest-api-design-best-practices",permalink:"https://potofcode.com/2016/12/article-rest-api-design-best-practices/",html:'<p>Ave $USER!</p>\n<p>Спроектировать Rest API для мобильного приложения, SPA( Single Page Application ) или просто как отдельного сервиса не так уж и просто.\nС учетом моделей данных и особенностей архитектуры стэка, на котором он будет запущен этот процесс становится еще сложнее.\nА если еще добавить аутентификацию пользователя, через авторизацию на стороннем сервисе, то процесс проектирования может очень сильно затянуться.\nЧто бы не потеряться во всем этом, я составил небольшой список лучших практик проектирования Rest API с подробными объяснениями.</p>\n<h2>Содержание:</h2>\n<ol class="contents">\n  <li><a href="#Определения">Определения</a></li>\n  <li><a href="#Проектирование схемы">Проектирование схемы</a></li>\n  <li><a href="#Конечные адреса">Конечные адреса</a></li>\n  <li><a href="#Документация">Документация</a></li>\n  <li><a href="#Шифрование">Шифрование</a></li>\n</ol>\n<h3><a name="Определения">Определения</a></h3>\n<p>Сначала дадим некоторые определения и понятия, которые я буду использовать далее:</p>\n<ul>\n<li>Ресурс (Resource) - Экземпляр одиночного объекта. Например: товар</li>\n<li>Коллекция (Collection) - Коллекция однотипных объектов. Например: товар</li>\n<li>Схема (Schema) - Описание модели объекта или коллекции объектов. Например: для товара схема описывает название, цену,\nтип, количество на складе, список свойств товара и т.д.</li>\n<li>Конечный адрес (Endpoint) - URL который представляет ресурс или коллекцию</li>\n</ul>\n<h3><a name="Проектирование схемы">Проектирование схемы</a></h3>\n<p>На самом деле, проектирование Rest API начинается гораздо раньше чем вы можете подумать.\nПроектирование начинается со схемы ресурсов и коллекций и их связей. Например вы проектируете социальную сеть Switter.\nБазовые сущности социальной сети - это профили пользователей <code>Profile</code>.\nМежду профилями существуют связи в виде дружбы типа многие ко многим и разрешается она через вспомогательную схему <code>Friends</code>.\nВнутри социальной сети можно обмениваться сообщениями <code>Message</code>.\nСообщение имеет отправителя и один или несколько адресатов.\nВсе участники беседы <code>Profiles</code> объединяются в <code>MessageGroups</code> через <code>ProfilesMessageGroups</code>,\nи каждое сообщение <code>Messages</code> имеет свою <code>MessageGroups</code>. Визуально это выглядит так:</p>\n<div class="presentation">\n  \n  <a class="gatsby-resp-image-link" href="/static/schema-9bc7c46bbf25b62e8033538c4560291a-3f470.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 1; max-width: 601px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 88.85191347753744%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVQ4y5WT64vTQBTF+/9/FEQQBREREVlZ8IVCxbXuupvtkjSbx8QkTF6TTl5tmqRt0ke8zaypQiLsYVpKM785d869GdR1vd3uxr/oGa9xun+DI82L6i7pJD05E14Puc8CrjZb+GcAn7Kqrm6VcwHdYorIHNN5J5zEM1m3RM1E2Kuq6g7ebDazNJ1Op2EY0kZ5ni8bFUXR/ogp9X0ftmVZBsgdDMcgTZtMJqIo8jwvy3ILr1YrZrvf7z1C4CnHcbCtLMsjLEkSxjhoBP5tqeDQOjuOo+s62MLRx7J3u70VpAr24RvZNJjnTRDbYl2xVTbxWIReiehGNSXTO5bNBMcfmKYe0Ei0n338+fTd6OTS+KE4nRH2wsksME1zvV6z4u8HZ4uF67qQ/D1giBd4iMS2LEVREEKqqkKWEFj5R2xnB9xK0zRogd0ISvj7UVtdLxzHMBSUTU7b7V4YGviPM3YveGUs69Abw/G7YQknr4bj5x++Pzn9+uLT+csvl9c6qf8ruD8M3AGOolg1LGTaSb5ia5YVfdi1Rh+djh68GT58++3x+4tB6BMIRhAEmFhoLFzSsiy4wrJLSexDeGw2D86wFd4Elg0TjHefMyGEvT/QP7AcuNOQV3TFsGGZXhCmy2TRW3Y0zw0St+s34fP3nEuR8kQAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="schema" title="" src="/static/schema-9bc7c46bbf25b62e8033538c4560291a-3f470.png" srcset="/static/schema-9bc7c46bbf25b62e8033538c4560291a-2efde.png 245w,\n/static/schema-9bc7c46bbf25b62e8033538c4560291a-821bc.png 490w,\n/static/schema-9bc7c46bbf25b62e8033538c4560291a-3f470.png 601w" sizes="(max-width: 601px) 100vw, 601px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<p><a href="/model-a5400ffd621c3c5c781102159c7a0b12.mwb">Скачать проект MySQL Workbench</a></p>\n<p>Из схемы видно, что два профиля дружат, если в <code>Friend</code> существует запись в обе стороны с подтверждением.\nАналогично легко получить список переписок и всех участников каждой переписки и их сообщения.</p>\n<p>Таким образом, перед проектирование Rest API необходимо определить схемы всех сущностей вашего приложения.</p>\n<h3><a name="Конечные адреса">Конечные адреса</a></h3>\n<p>Есть несколько общепринятых правил составления конечных адресов.</p>\n<h4><a name="Никаких глаголов в конечных адресах">1. Никаких глаголов в конечных адресах</a></h4>\n<p>Все возможные действия в Rest API выполняются с помощью HTTP методов:</p>\n<ul>\n<li>GET - получить</li>\n<li>POST - создать</li>\n<li>PUT - заменить</li>\n<li>PATCH - частично изменить</li>\n<li>DELETE - удалить</li>\n</ul>\n<p>Отсюда видно, что никаких изменений данных при GET запросе не должно происходить.</p>\n<h4><a name="Только существительные во множественном числе">2. Только существительные во множественном числе</a></h4>\n<p>Не стоит смешивать единственное и множественное число ресурсов, это нарушает семантическое значение и может ввести в заблуждение.\nИспользуйте всегда множественное. Например у вас есть ресурс <code>users</code>,\nзайдя на него по конечному адресу <code>/api/v1/users</code> вы получите список пользователей, естественно ограниченный фильтрами по умолчанию,\nкак если бы вы зашли по адресу <code>/api/v1/users?offset=0&#x26;limit=50</code>.\nНо перейдя на адрес <code>/api/v1/users/1</code> мы как бы говорим: “получить объект с id=1 из ресурса пользователи”</p>\n<h4><a name="Используйте подзапросы в ресурсах с отношениями">3. Используйте подзапросы в ресурсах с отношениями</a></h4>\n<p>Если мы хотим получить друзей пользователя под номером 1, то адрес будет следующим <code>/api/v1/users/1/friends</code>.\nЭтот подход позволяет избежать дополнительных запросов на сервер.</p>\n<h4><a name="Используйте HTTP заголовки для сообщения об ожидемом формате ответа">4. Используйте HTTP заголовки для сообщения об ожидемом формате ответа</a></h4>\n<p>И клиент и сервер должны знать в каком формате общаться и этот формат должен быть предоставлен в HTTP заголовке.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>Content-Type - формат запроса\nAccept - список поддерживаемых форматов для ответа</code></pre>\n      </div>\n<p>Постарайтесь избежать использование формата в URL</p>\n<h4><a name="Используйте HATEOAS">5. Используйте HATEOAS</a></h4>\n<p>HATEOAS - это Hypermedia as the Engine of Application State,\nчто по сути это метаинформация о структуре вашего сервиса, которая может быть использована для автоматического исследования (service autodiscover).\nЧто дает возможность некоторым приложениям без человеческого вмешательства исследовать ваш сервис.\nНапример имеем ответ от сервера с адреса <code>/api/v1/users/1</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"Ivan"</span><span class="token punctuation">,</span>\n    <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"Ivanov"</span><span class="token punctuation">,</span>\n    <span class="token property">"autodiscover"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"friends"</span><span class="token operator">:</span> <span class="token string">"`/api/v1/users/1/friends"</span><span class="token punctuation">,</span>\n        <span class="token property">"photos"</span><span class="token operator">:</span> <span class="token string">"`/api/v1/users/1/photos"</span><span class="token punctuation">,</span>\n        <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token string">"`/api/v1/users/1/messages"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>в секции <code>autodiscover</code> мы видим список ресурсов, которые относятся к текущему.</p>\n<h4><a name="Предоставьте возможности фильтрации, сортировки, выбора полей, ограничения и смещения записей для колекций">6. Предоставьте возможности фильтрации, сортировки, выбора полей, ограничения и смещения записей для колекций</a></h4>\n<p>Для таких целей, лучше поддерживать какой-нибудь язык запросов, позволяющий расширить стандартный, например graphql.\nЯ же приведу примеры на псевдоязыке:</p>\n<ul>\n<li>Фильтрация - Поддерживайте фильтрацию с выражениями <code>/api/v1/users?filter=(firstName=\'Ivan\',lastName=/^Ivan/,age>=18)</code></li>\n<li>Сортировка - Поддерживайте сортировку по возрастанию и убыванию для нескольких полей <code>/api/v1/users?sort=(firstName:1,DOB:0)</code></li>\n<li>Выбор полей - Поддерживайте выбор полей, это не только уменьшит трафик, но и позволит быстрее работать клиенту, обрабатывая меньшее количество данных\n<code>/api/v1/users?fields=[firstName, lastName, DOB]</code></li>\n<li>Ограничение и смещение - Поддерживайте параметры limit и offset, для контроля количества отдаваемых сущностей,\nтак же это более гибкий подход, чем постраничный <code>/api/v1/users?offset=20&#x26;limit=10</code></li>\n</ul>\n<h4><a name="Поддерживайте версионность API">7. Поддерживайте версионность API</a></h4>\n<p>Время от времени, стандарты и интерфейсы вашего API могут меняться и что бы избежать путаницы используйте версионность.\nИзбегайте API без версий или API с дробными значениями <code>/api/v100500/users</code></p>\n<h4><a name="Обрабатывайте ошибки по HTTP кодам">8. Обрабатывайте ошибки по HTTP кодам</a></h4>\n<p>Протокол HTTP поддерживает огромное количество <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP">кодов состояний</a>\nНе обязательно использовать их все, достаточно этих 13:</p>\n<ul>\n<li>200 – OK – ответ отправлен успешно, обычно ответ на: GET</li>\n<li>201 – Created – создание успешно завершено, обычно ответ на: POST, PUT</li>\n<li>204 – Accepted – удаление или редактирование успешно завершено, обыно ответ на: PATCH, DELETE</li>\n<li>205 – Reset Content – после выполнения операции необходимо обновить данные</li>\n<li>304 – Not Modified – ничего не изменилось, можно взять данные из кэша приложения</li>\n<li>400 – Bad Request – неправильный запрос, подробности обыно предоставляют в теле ответа</li>\n<li>401 – Unauthorized – пользователь не авторизован</li>\n<li>402 – Payment Required – пользователю необходимо произвести оплату для продолжения</li>\n<li>403 – Forbidden – пользователь авторизован, но не имеет привиллегий для выполнения операции</li>\n<li>404 – Not found – ресурс не найден</li>\n<li>415 – Unsupported Media Type – например, если пользователь загружает текстовый файл вместо ожидаемой картинки</li>\n<li>500 – Internal Server Error – этот код лучше не использовать, но записывать в логи все данные об ошибке</li>\n<li>501 – Not implemented – используется для сообщения, что данная операция не реализована на сервере, например если ваше приложение в стадии активной разработки</li>\n</ul>\n<p>При ответе об ошибки помещайте дополнительную информацию в тело запроса (payload - полезная нагрузка)</p>\n<h4><a name="Поддерживайте переопределение HTTP методов">9. Поддерживайте переопределение HTTP методов</a></h4>\n<p>Достаточно редкий случай, но некоторые прокси серверы поддерживают только GET и POST запросы.\nВ таком случае можно реализовать служебный заголовок <code>X-HTTP-Method-Override</code>, для замены POST метода на метод указанный в нем.</p>\n<h3><a name="Документация">4. Документация</a></h4>\n<p>Какой бы user-friendly не был ваш API он обязательно должен быть документирован, от схем до значений HTTP кодов.\nСуществуют множество способов документирования API, наиболее популярный и на мой взляд понятный - это <a href="http://swagger.io">swagger</a>,\nко всему у них можно найти спецификацию Rest API (стандарт, которому они следуют).</p>\n<h3><a name="Шифрование">5. Шифрование</a></h4>\n<p>Старайтесь использовать SSL шифрование. Сертификаты легко и бесплатно можно получить на <a href="https://www.startssl.com/">StartSLL</a> или <a href="https://letsencrypt.org/">LetsEncrypt</a>.</p>',color:"rgba(37, 127, 110, 0.8)",title:"Проектирование Rest API",description:"Как спроектировать Rest API для мобильного приложения или SPA",category:"кодинг",tags:["rest","api"],date:"2016-12-11T00:00:00.000Z",type:null}],posts:[{images:{blurUp:{src:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAAHCAYAAAAIy204AAAACXBIWXMAAAsSAAALEgHS3X78AAAA/ElEQVQoz62QvWvCUBTF/atLuxaHIhShgzgoDlKH6uDQTVwEXQxVa2tUEjVGkxg/UqMmxpic3jxQkWziWd7h8t7vnvMiuLMiJ3P0PYjb5U2Q/mYRBpZ0AcOdQWAfD/URXttTrPYunjgJ0aaMjrHD26+CwnCBl9YEjzT/HK/Y29SICwOLSgfGwWL+uSEj9j2FZjnMVzWTgBbiPwoq6ho+LU33ZuwM9DFpY+s618CyLkK1TeaTXQ1JXsPB85DuzyCYNrj5Bn+OiwSvsjsB8KSc3DrDz0De1FFbjlnlPNXiKZGwtvEu6MiJc0pwRJZ8kHRAC4rS5b8z0le48r30D7DuFKOmFdvEAAAAAElFTkSuQmCC"},share:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-f5537.jpg"},heroPreviewLG:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-294b1.webp"},heroPreviewMD:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-d8cc9.webp"},heroPreviewSM:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-c14dc.webp"},heroPreviewXS:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-227ee.webp"},mediumPreview:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-ce211.webp"},smallPreview:{src:"/static/rest-api-0211be6ff0f879d0d8481d9480297691-051c1.webp"}},excerpt:"Ave $USER! Спроектировать Rest API для мобильного приложения, SPA( Single Page Application ) или просто как отдельного сервиса…",id:"/Users/ivan/projects/gatsby-blog/src/pages/2016/12/article-rest-api-design-best-practices/index.md absPath of file >>> MarkdownRemark",slug:"/2016/12/article-rest-api-design-best-practices",permalink:"https://potofcode.com/2016/12/article-rest-api-design-best-practices/",html:'<p>Ave $USER!</p>\n<p>Спроектировать Rest API для мобильного приложения, SPA( Single Page Application ) или просто как отдельного сервиса не так уж и просто.\nС учетом моделей данных и особенностей архитектуры стэка, на котором он будет запущен этот процесс становится еще сложнее.\nА если еще добавить аутентификацию пользователя, через авторизацию на стороннем сервисе, то процесс проектирования может очень сильно затянуться.\nЧто бы не потеряться во всем этом, я составил небольшой список лучших практик проектирования Rest API с подробными объяснениями.</p>\n<h2>Содержание:</h2>\n<ol class="contents">\n  <li><a href="#Определения">Определения</a></li>\n  <li><a href="#Проектирование схемы">Проектирование схемы</a></li>\n  <li><a href="#Конечные адреса">Конечные адреса</a></li>\n  <li><a href="#Документация">Документация</a></li>\n  <li><a href="#Шифрование">Шифрование</a></li>\n</ol>\n<h3><a name="Определения">Определения</a></h3>\n<p>Сначала дадим некоторые определения и понятия, которые я буду использовать далее:</p>\n<ul>\n<li>Ресурс (Resource) - Экземпляр одиночного объекта. Например: товар</li>\n<li>Коллекция (Collection) - Коллекция однотипных объектов. Например: товар</li>\n<li>Схема (Schema) - Описание модели объекта или коллекции объектов. Например: для товара схема описывает название, цену,\nтип, количество на складе, список свойств товара и т.д.</li>\n<li>Конечный адрес (Endpoint) - URL который представляет ресурс или коллекцию</li>\n</ul>\n<h3><a name="Проектирование схемы">Проектирование схемы</a></h3>\n<p>На самом деле, проектирование Rest API начинается гораздо раньше чем вы можете подумать.\nПроектирование начинается со схемы ресурсов и коллекций и их связей. Например вы проектируете социальную сеть Switter.\nБазовые сущности социальной сети - это профили пользователей <code>Profile</code>.\nМежду профилями существуют связи в виде дружбы типа многие ко многим и разрешается она через вспомогательную схему <code>Friends</code>.\nВнутри социальной сети можно обмениваться сообщениями <code>Message</code>.\nСообщение имеет отправителя и один или несколько адресатов.\nВсе участники беседы <code>Profiles</code> объединяются в <code>MessageGroups</code> через <code>ProfilesMessageGroups</code>,\nи каждое сообщение <code>Messages</code> имеет свою <code>MessageGroups</code>. Визуально это выглядит так:</p>\n<div class="presentation">\n  \n  <a class="gatsby-resp-image-link" href="/static/schema-9bc7c46bbf25b62e8033538c4560291a-3f470.png" style="display: block" target="_blank" rel="noopener">\n  \n  <span class="gatsby-resp-image-wrapper" style="position: relative; display: block; z-index: 1; max-width: 601px; margin-left: auto; margin-right: auto;">\n    <span class="gatsby-resp-image-background-image" style="padding-bottom: 88.85191347753744%; position: relative; bottom: 0; left: 0; background-image: url(&apos;data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABQAAAASCAIAAADUsmlHAAAACXBIWXMAAAsSAAALEgHS3X78AAAB60lEQVQ4y5WT64vTQBTF+/9/FEQQBREREVlZ8IVCxbXuupvtkjSbx8QkTF6TTl5tmqRt0ke8zaypQiLsYVpKM785d869GdR1vd3uxr/oGa9xun+DI82L6i7pJD05E14Puc8CrjZb+GcAn7Kqrm6VcwHdYorIHNN5J5zEM1m3RM1E2Kuq6g7ebDazNJ1Op2EY0kZ5ni8bFUXR/ogp9X0ftmVZBsgdDMcgTZtMJqIo8jwvy3ILr1YrZrvf7z1C4CnHcbCtLMsjLEkSxjhoBP5tqeDQOjuOo+s62MLRx7J3u70VpAr24RvZNJjnTRDbYl2xVTbxWIReiehGNSXTO5bNBMcfmKYe0Ei0n338+fTd6OTS+KE4nRH2wsksME1zvV6z4u8HZ4uF67qQ/D1giBd4iMS2LEVREEKqqkKWEFj5R2xnB9xK0zRogd0ISvj7UVtdLxzHMBSUTU7b7V4YGviPM3YveGUs69Abw/G7YQknr4bj5x++Pzn9+uLT+csvl9c6qf8ruD8M3AGOolg1LGTaSb5ia5YVfdi1Rh+djh68GT58++3x+4tB6BMIRhAEmFhoLFzSsiy4wrJLSexDeGw2D86wFd4Elg0TjHefMyGEvT/QP7AcuNOQV3TFsGGZXhCmy2TRW3Y0zw0St+s34fP3nEuR8kQAAAAASUVORK5CYII=&apos;); background-size: cover; display: block;">\n      <img class="gatsby-resp-image-image" style="width: 100%; height: 100%; margin: 0; vertical-align: middle; position: absolute; top: 0; left: 0; box-shadow: inset 0px 0px 0px 400px white;" alt="schema" title="" src="/static/schema-9bc7c46bbf25b62e8033538c4560291a-3f470.png" srcset="/static/schema-9bc7c46bbf25b62e8033538c4560291a-2efde.png 245w,\n/static/schema-9bc7c46bbf25b62e8033538c4560291a-821bc.png 490w,\n/static/schema-9bc7c46bbf25b62e8033538c4560291a-3f470.png 601w" sizes="(max-width: 601px) 100vw, 601px">\n    </span>\n  </span>\n  \n  </a>\n    \n</div>\n<p><a href="/model-a5400ffd621c3c5c781102159c7a0b12.mwb">Скачать проект MySQL Workbench</a></p>\n<p>Из схемы видно, что два профиля дружат, если в <code>Friend</code> существует запись в обе стороны с подтверждением.\nАналогично легко получить список переписок и всех участников каждой переписки и их сообщения.</p>\n<p>Таким образом, перед проектирование Rest API необходимо определить схемы всех сущностей вашего приложения.</p>\n<h3><a name="Конечные адреса">Конечные адреса</a></h3>\n<p>Есть несколько общепринятых правил составления конечных адресов.</p>\n<h4><a name="Никаких глаголов в конечных адресах">1. Никаких глаголов в конечных адресах</a></h4>\n<p>Все возможные действия в Rest API выполняются с помощью HTTP методов:</p>\n<ul>\n<li>GET - получить</li>\n<li>POST - создать</li>\n<li>PUT - заменить</li>\n<li>PATCH - частично изменить</li>\n<li>DELETE - удалить</li>\n</ul>\n<p>Отсюда видно, что никаких изменений данных при GET запросе не должно происходить.</p>\n<h4><a name="Только существительные во множественном числе">2. Только существительные во множественном числе</a></h4>\n<p>Не стоит смешивать единственное и множественное число ресурсов, это нарушает семантическое значение и может ввести в заблуждение.\nИспользуйте всегда множественное. Например у вас есть ресурс <code>users</code>,\nзайдя на него по конечному адресу <code>/api/v1/users</code> вы получите список пользователей, естественно ограниченный фильтрами по умолчанию,\nкак если бы вы зашли по адресу <code>/api/v1/users?offset=0&#x26;limit=50</code>.\nНо перейдя на адрес <code>/api/v1/users/1</code> мы как бы говорим: “получить объект с id=1 из ресурса пользователи”</p>\n<h4><a name="Используйте подзапросы в ресурсах с отношениями">3. Используйте подзапросы в ресурсах с отношениями</a></h4>\n<p>Если мы хотим получить друзей пользователя под номером 1, то адрес будет следующим <code>/api/v1/users/1/friends</code>.\nЭтот подход позволяет избежать дополнительных запросов на сервер.</p>\n<h4><a name="Используйте HTTP заголовки для сообщения об ожидемом формате ответа">4. Используйте HTTP заголовки для сообщения об ожидемом формате ответа</a></h4>\n<p>И клиент и сервер должны знать в каком формате общаться и этот формат должен быть предоставлен в HTTP заголовке.</p>\n<div class="gatsby-highlight">\n      <pre class="language-text"><code>Content-Type - формат запроса\nAccept - список поддерживаемых форматов для ответа</code></pre>\n      </div>\n<p>Постарайтесь избежать использование формата в URL</p>\n<h4><a name="Используйте HATEOAS">5. Используйте HATEOAS</a></h4>\n<p>HATEOAS - это Hypermedia as the Engine of Application State,\nчто по сути это метаинформация о структуре вашего сервиса, которая может быть использована для автоматического исследования (service autodiscover).\nЧто дает возможность некоторым приложениям без человеческого вмешательства исследовать ваш сервис.\nНапример имеем ответ от сервера с адреса <code>/api/v1/users/1</code>:</p>\n<div class="gatsby-highlight">\n      <pre class="language-json"><code><span class="token punctuation">{</span>\n    <span class="token property">"firstName"</span><span class="token operator">:</span> <span class="token string">"Ivan"</span><span class="token punctuation">,</span>\n    <span class="token property">"lastName"</span><span class="token operator">:</span> <span class="token string">"Ivanov"</span><span class="token punctuation">,</span>\n    <span class="token property">"autodiscover"</span><span class="token operator">:</span> <span class="token punctuation">{</span>\n        <span class="token property">"friends"</span><span class="token operator">:</span> <span class="token string">"`/api/v1/users/1/friends"</span><span class="token punctuation">,</span>\n        <span class="token property">"photos"</span><span class="token operator">:</span> <span class="token string">"`/api/v1/users/1/photos"</span><span class="token punctuation">,</span>\n        <span class="token property">"messages"</span><span class="token operator">:</span> <span class="token string">"`/api/v1/users/1/messages"</span><span class="token punctuation">,</span>\n    <span class="token punctuation">}</span>\n<span class="token punctuation">}</span>\n</code></pre>\n      </div>\n<p>в секции <code>autodiscover</code> мы видим список ресурсов, которые относятся к текущему.</p>\n<h4><a name="Предоставьте возможности фильтрации, сортировки, выбора полей, ограничения и смещения записей для колекций">6. Предоставьте возможности фильтрации, сортировки, выбора полей, ограничения и смещения записей для колекций</a></h4>\n<p>Для таких целей, лучше поддерживать какой-нибудь язык запросов, позволяющий расширить стандартный, например graphql.\nЯ же приведу примеры на псевдоязыке:</p>\n<ul>\n<li>Фильтрация - Поддерживайте фильтрацию с выражениями <code>/api/v1/users?filter=(firstName=\'Ivan\',lastName=/^Ivan/,age>=18)</code></li>\n<li>Сортировка - Поддерживайте сортировку по возрастанию и убыванию для нескольких полей <code>/api/v1/users?sort=(firstName:1,DOB:0)</code></li>\n<li>Выбор полей - Поддерживайте выбор полей, это не только уменьшит трафик, но и позволит быстрее работать клиенту, обрабатывая меньшее количество данных\n<code>/api/v1/users?fields=[firstName, lastName, DOB]</code></li>\n<li>Ограничение и смещение - Поддерживайте параметры limit и offset, для контроля количества отдаваемых сущностей,\nтак же это более гибкий подход, чем постраничный <code>/api/v1/users?offset=20&#x26;limit=10</code></li>\n</ul>\n<h4><a name="Поддерживайте версионность API">7. Поддерживайте версионность API</a></h4>\n<p>Время от времени, стандарты и интерфейсы вашего API могут меняться и что бы избежать путаницы используйте версионность.\nИзбегайте API без версий или API с дробными значениями <code>/api/v100500/users</code></p>\n<h4><a name="Обрабатывайте ошибки по HTTP кодам">8. Обрабатывайте ошибки по HTTP кодам</a></h4>\n<p>Протокол HTTP поддерживает огромное количество <a href="https://ru.wikipedia.org/wiki/%D0%A1%D0%BF%D0%B8%D1%81%D0%BE%D0%BA_%D0%BA%D0%BE%D0%B4%D0%BE%D0%B2_%D1%81%D0%BE%D1%81%D1%82%D0%BE%D1%8F%D0%BD%D0%B8%D1%8F_HTTP">кодов состояний</a>\nНе обязательно использовать их все, достаточно этих 13:</p>\n<ul>\n<li>200 – OK – ответ отправлен успешно, обычно ответ на: GET</li>\n<li>201 – Created – создание успешно завершено, обычно ответ на: POST, PUT</li>\n<li>204 – Accepted – удаление или редактирование успешно завершено, обыно ответ на: PATCH, DELETE</li>\n<li>205 – Reset Content – после выполнения операции необходимо обновить данные</li>\n<li>304 – Not Modified – ничего не изменилось, можно взять данные из кэша приложения</li>\n<li>400 – Bad Request – неправильный запрос, подробности обыно предоставляют в теле ответа</li>\n<li>401 – Unauthorized – пользователь не авторизован</li>\n<li>402 – Payment Required – пользователю необходимо произвести оплату для продолжения</li>\n<li>403 – Forbidden – пользователь авторизован, но не имеет привиллегий для выполнения операции</li>\n<li>404 – Not found – ресурс не найден</li>\n<li>415 – Unsupported Media Type – например, если пользователь загружает текстовый файл вместо ожидаемой картинки</li>\n<li>500 – Internal Server Error – этот код лучше не использовать, но записывать в логи все данные об ошибке</li>\n<li>501 – Not implemented – используется для сообщения, что данная операция не реализована на сервере, например если ваше приложение в стадии активной разработки</li>\n</ul>\n<p>При ответе об ошибки помещайте дополнительную информацию в тело запроса (payload - полезная нагрузка)</p>\n<h4><a name="Поддерживайте переопределение HTTP методов">9. Поддерживайте переопределение HTTP методов</a></h4>\n<p>Достаточно редкий случай, но некоторые прокси серверы поддерживают только GET и POST запросы.\nВ таком случае можно реализовать служебный заголовок <code>X-HTTP-Method-Override</code>, для замены POST метода на метод указанный в нем.</p>\n<h3><a name="Документация">4. Документация</a></h4>\n<p>Какой бы user-friendly не был ваш API он обязательно должен быть документирован, от схем до значений HTTP кодов.\nСуществуют множество способов документирования API, наиболее популярный и на мой взляд понятный - это <a href="http://swagger.io">swagger</a>,\nко всему у них можно найти спецификацию Rest API (стандарт, которому они следуют).</p>\n<h3><a name="Шифрование">5. Шифрование</a></h4>\n<p>Старайтесь использовать SSL шифрование. Сертификаты легко и бесплатно можно получить на <a href="https://www.startssl.com/">StartSLL</a> или <a href="https://letsencrypt.org/">LetsEncrypt</a>.</p>',color:"rgba(37, 127, 110, 0.8)",title:"Проектирование Rest API",description:"Как спроектировать Rest API для мобильного приложения или SPA",category:"кодинг",tags:["rest","api"],date:"2016-12-11T00:00:00.000Z",type:null}],total:1,page:1}}}});
//# sourceMappingURL=path---tags-api-41cefa4f337236d5e732.js.map