<template>
  <div class="hello">
    <h1 class="masterclass">Мастер-класс</h1>
    <ul>
      <li>План занятия:</li>
      <li>
        <a href="#greet">Давайте познакомимся!</a>
      </li>
      <li>
        <a href="#site">Что такое сайт?</a>
      </li>
      <li>
        <a href="#bootstrap">Что такое Bootstrap?</a>
      </li>
      <li>
        <a href="#start-bootstrap">Установка фреймворка Bootstrap в проект</a>
      </li>
      <li>
        <a href="#practice">Практика</a>
      </li>
    </ul>
    <section id="greet">
      <div class="chapter">
        <h2>Давайте познакомимся!</h2>
      </div>
      <div class="task">
        <h3>Задание</h3>
        <p>Узнать имя преподавателя и запомнить имена товарищей.</p>
        <img src="./../assets/greet.jpg" width="80%" />
      </div>
    </section>
    <section id="site">
      <div class="chapter">
        <h2>Что такое сайт?</h2>
      </div>
      <div class="task">
        <h3>Запомните!</h3>
        <p>Сайт - совокупность веб-страниц, объединенных общей темой, дизайном, имеющих взаимосвязанную систему ссылок, расположенных в сети Интернет.</p>
        <h3>Задание</h3>
        <p>Перейдите по ссылкам и посмотрите примеры видов разных сайтов.</p>
        <p>
          <a href = "https://alexandersakulin.com/" target="_blank">Сайт-визитка</a> - представляет узкую информацию о компании. Это одна или несколько страниц в интернете, расположенных на одном доменном имени, предоставляющая общую информацию о владельце, основной перечень услуг, товаров, контактные данные и раздел с ответами на основные вопросы. Главная задача такого сайта – предоставить пользователю основной перечень информации о компании или частном лице.
        </p>
        <p>
          <a href = "https://beeline.ru" target="_blank">Корпоративный сайт</a> - расширенная информация о компании ее контакты, новости, перечень услуг, сотрудники, и т.д. Часто такие сайты создаются в рекламных целях, рекламируют товары и услуги компаний. Корпоративный сайт может быть внутренним для доступа сотрудников к информации компании, и внешний - для любого посетителя.
        </p>
        <p>
          <a  href = "http://putin.kremlin.ru/" target="_blank">Личный сайт</a> – сайт об одном человеке, его увлечениях, его личные данные.
        </p>
        <p>
          <a href = "http://ozon.ru/" target="_blank">Интернет-магазины</a> - это особый вид сайтов, через которые Вы можете покупать или продавать товары on-line, т.е. не отходя от Вашего компьютера.
        </p>
        <p>
          <a href = "http://google.com/" target="_blank">Поисковые сиcтемы</a> предназначены для поиска информации.
        </p>
        <p>
          <a href = "http://mail.ru/" target="_blank">Почтовые ресурсы</a> - электронный сервис для обмена e-mail сообщениями.
        </p>
        <p>
          <a href = "http://avito.ru/" target="_blank">Доски объявлений</a> - сервис, где можно размещать и читать объявления о продаже, аренде, покупке, услугах, работе, и т.д.
        </p>
        <p>
          <a href = "http://forums.kuban.ru//" target="_blank">Форумы</a> - платформа для общения между пользователями интернета на одну тему.
        </p>
        <p>
          <a href = "https://dropmefiles.com/" target="_blank">Файлообменники</a> - служба, предоставляющая пользователю место под его файлы и круглосуточный доступ к ним через web. Такой сервис позволяет удобно обмениваться файлами с другими пользователями.
        </p>
        <p>
          <a href = "http://pixabay.com/" target="_blank">Хранилища видео или фото</a> - это удобный сервис для хранения фото и видео. Они упорядочиваются автоматически, и вы можете делиться ими с кем захотите. Также можно искать коммерческие фото и видео материалы по ключевым словам.
        </p>
        <img src="./../assets/sites.jpg" width="80%" />
        <h3>Задание</h3>
        <p>Расскажите о сайте, который вы любите посещать в свободное время. О чем он?</p>
      </div>
    </section>
    <section id="bootstrap">
      <div class="chapter">
        <h2>Что такое bootstrap?</h2>
      </div>
      <div class="task">
        <h3>Запомните!</h3>
        <p>Bootstrap - cамый популярный HTML, CSS, и JS фреймворк для разработки адаптивных и мобильных web-проектов на 2019 год. Bootstrap делает фронтэнд веб-разработку быстрее и проще. Это сделано для людей с любым уровнем подготовки, устройств всех форм и проектов любого масштаба. Кроме того, он имеет открытый исходный код и абсолютно бесплатный.</p>
        <img src="./../assets/bootstrap.jpg" width="80%" />
      </div>
    </section>
    <section id="start-bootstrap">
      <div class="chapter">
        <h2>Установка фреймворка Bootstrap в проект</h2>
      </div>
      <div class="task">
        <h3>Задание</h3>
        <p>Подключите Bootstrap к своему проекту.</p>
        <ol>
          <li>Откройте в текстовом редакторе файл проекта.</li>
          <li>Скопируйте и вставьте следующий код:</li>
          <div class="container">
            <pre>
              <code>
                &lt;!doctype html&gt;
                &lt;html lang="en"&gt;
                  &lt;head&gt;
                    &lt;meta charset="utf-8"&gt;
                    &lt;meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no"&gt;
                    &lt;link rel="stylesheet" href="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/css/bootstrap.min.css" 
                    integrity="sha384-ggOyR0iXCbMQv3Xipma34MD+dH/1fQ784/j6cY/iJTQUOhcWr7x9JvoRxT2MZw1T" crossorigin="anonymous"&gt;
                    &lt;title>Hello, world!&lt;/title&gt;
                  &lt;/head&gt;
                  &lt;body&gt;
                    &lt;h1>Hello, world!&lt;/h1&gt;
                    &lt;script src="https://code.jquery.com/jquery-3.3.1.slim.min.js" 
                    integrity="sha384-q8i/X+965DzO0rT7abK41JStQIAqVgRVzpbzo5smXKp4YfRvH+8abtTE1Pi6jizo" 
                    crossorigin="anonymous">&lt;/script&gt;
                    &lt;script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.14.7/umd/popper.min.js" 
                    integrity="sha384-UO2eT0CpHqdSJQ6hJty5KVphtPhzWj9WO1clHTMGa3JDZwrnQq4sF86dIHNDz0W1" 
                    crossorigin="anonymous">&lt;/script&gt;
                    &lt;script src="https://stackpath.bootstrapcdn.com/bootstrap/4.3.1/js/bootstrap.min.js" 
                    integrity="sha384-JjSmVgyd0p3pXB1rRibZUAYoIIy6OrQ6VrjIEaFf/nJGzIxFDsf4x0xIM+B07jRM" 
                    crossorigin="anonymous">&lt;/script&gt;
                  &lt;/body&gt;
                &lt;/html&gt;
              </code>
            </pre>
          </div>
          <li>Откройте файл вашего проекта в браузере и посмотрите, как выглядит небольшой пример кода на странице.</li>
        </ol>
        <h3>Задание</h3>
        <p>Переведите текст, выведенный на экран, на русский язык.</p>
        <h3>Справка</h3>
        <p>Традиция использования фразы «Hello, world!» в качестве тестового сообщения была введена в книге «Язык программирования Си» Брайана Кернигана и Денниса Ритчи, опубликованной в 1978 году.</p>
        <img src="./../assets/start-bootstrap.jpg" width="80%" />
      </div>
    </section>
    <section id="practice">
      <div class="chapter">
        <h2>Практика</h2>
      </div>
      <div class="task">
        <h3>Что такое DOM?</h3>
        <p>DOM (Document Object Model) – объектная модель, используемая для HTML-документов. Согласно DOM-модели, документ является иерархией, деревом. Каждый HTML-тег образует узел дерева с типом «элемент». Вложенные в него теги становятся дочерними узлами. Для представления текста создаются узлы с типом «текст». DOM – это представление документа в виде дерева объектов, доступное для изменения через JavaScript.</p>
        <img src="./../assets/tree.jpg" width="80%" />
        <h3>Задание</h3>
        <p>Рассмотрите пример и попробуйте определить дочерние и родительские элементы дерева.</p>
        <div class="domtree">
          <svg width="690" height="350">
            <g transform="translate(20,30)">
              <path class="link" d="M7,0L7,30L40.333333333333336,30" style="fill: none; stroke: rgb(23, 32, 42); stroke-width: 1px;"></path>
              <path class="link" d="M7,0L7,180L40.333333333333336,180" style="fill: none; stroke: rgb(23, 32, 42); stroke-width: 1px;"></path>
              <path class="link" d="M7,0L7,210L40.333333333333336,210" style="fill: none; stroke: rgb(23, 32, 42); stroke-width: 1px;"></path>
              <path class="link" d="M40.333333333333336,210L40.333333333333336,240L73.66666666666667,240" style="fill: none; stroke: rgb(23, 32, 42); stroke-width: 1px;"></path>
              <path class="link" d="M40.333333333333336,30L40.333333333333336,60L73.66666666666667,60" style="fill: none; stroke: rgb(23, 32, 42); stroke-width: 1px;"></path>
              <path class="link" d="M40.333333333333336,30L40.333333333333336,90L73.66666666666667,90" style="fill: none; stroke: rgb(23, 32, 42); stroke-width: 1px;"></path>
              <path class="link" d="M40.333333333333336,30L40.333333333333336,150L73.66666666666667,150" style="fill: none; stroke: rgb(23, 32, 42); stroke-width: 1px;"></path>
              <path class="link" d="M73.66666666666667,90L73.66666666666667,120L107,120" style="fill: none; stroke: rgb(23, 32, 42); stroke-width: 1px;"></path>
              <g class="node" transform="translate(0,0)" style="opacity: 1;">
                <rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(69, 179, 157); cursor: pointer;"></rect>
                <text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">▾ </text>
                <text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HTML</text>
              </g>
              <g class="node" transform="translate(33.33333206176758,30)" style="opacity: 1;">
                <rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(69, 179, 157); cursor: pointer;"></rect>
                <text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">▾ </text>
                <text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">HEAD</text>
              </g>
              <g class="node" transform="translate(33.33333206176758,180)" style="opacity: 1;">
                <rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(109, 170, 237); cursor: pointer;"></rect>
                <text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text>
                <text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text ↵</text>
              </g>
              <g class="node" transform="translate(33.33333206176758,210)" style="opacity: 1;">
                <rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(69, 179, 157); cursor: pointer;"></rect>
                <text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">▾ </text>
                <text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">BODY</text>
              </g>
              <g class="node" transform="translate(66.66666412353516,240)" style="opacity: 1;">
                <rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(109, 170, 237); cursor: pointer;"></rect>
                <text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text>
                <text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text Знакомьтесь - дерево DOM!</text>
              </g>
              <g class="node" transform="translate(66.66666412353516,60)" style="opacity: 1;">
                <rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(109, 170, 237); cursor: pointer;"></rect>
                <text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text>
                <text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text ↵␣␣</text>
              </g>
              <g class="node" transform="translate(66.66666412353516,90)" style="opacity: 1;">
                <rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(69, 179, 157); cursor: pointer;"></rect>
                <text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;">▾ </text>
                <text dy="4.5" dx="16.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">TITLE</text>
              </g>
              <g class="node" transform="translate(100,120)" style="opacity: 1;">
                <rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(109, 170, 237); cursor: pointer;"></rect>
                <text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text>
                <text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text Знакомство с DOM-деревом</text>
              </g>
              <g class="node" transform="translate(66.66666412353516,150)" style="opacity: 1;">
                <rect y="-12.5" x="-5" rx="4" ry="4" height="25" width="250" style="fill: rgb(109, 170, 237); cursor: pointer;"></rect>
                <text dy="4.5" dx="3.5" style="fill: black; pointer-events: none;"></text>
                <text dy="4.5" dx="5.5" style="font: 14px Consolas, &quot;Lucida Console&quot;, Menlo, Monaco, monospace; fill: rgb(51, 51, 51); pointer-events: none;">#text ↵</text>
              </g>
            </g>
          </svg>
        </div>
        <h3>Существует два типа узлов.</h3>
        <p>Теги образуют узлы-элементы (element node). Естественным образом одни узлы вложены в другие. Структура дерева образована исключительно за счет них. Текст внутри элементов образует текстовые узлы (text node), обозначенные как #text. Текстовый узел содержит исключительно строку текста и не может иметь потомков, то есть он всегда на самом нижнем уровне.</p>
        <h3>Задание</h3>
        <p>Найдите и покажите оба вида узлов в своём документе.</p>
        <img src="./../assets/node.jpg" width="80%" />
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  data() {
    return {
      msg: "Welcome to Your Vue.js App"
    };
  }
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul li {
  list-style-type: none;
  font-size: 2rem;
  font-weight: 400;
  line-height: 1.5;
}

p {
  font-size: 1rem;
  font-weight: 400;
  line-height: 1.5;
}

a {
  cursor: pointer;
}

a:hover {
  color: #45b39d !important;
  font-weight: bold;
}

.masterclass {
  padding-bottom: 3rem;
}

.chapter {
  background: #45b39d;
  color: #fff;
  padding: 1rem 0;
  margin-top: 3rem;
}

.task {
  margin-top: 1rem;
}

.container {
  width: 80%;
  text-align: left;
  margin: 0 auto;
  -webkit-box-shadow: 0px 0px 16px -6px rgba(0,0,0,1);
  -moz-box-shadow: 0px 0px 16px -6px rgba(0,0,0,1);
  box-shadow: 0px 0px 16px -6px rgba(0,0,0,1);
  margin-top: 2rem;
  margin-bottom: 2rem;
}
</style>
