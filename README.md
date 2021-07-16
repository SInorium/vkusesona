# Figma

https://www.figma.com/file/lRMax3Nv5qeXjMW4X9mnKG/%D0%92%D0%BA%D1%83%D1%81%D0%B5%D0%B7%D0%BE%D0%BD%D0%B0?node-id=83%3A3886

# Установка #

* скачать и установить [node.js](https://nodejs.org/en/)
* склонировать этот проект
* установить все зависимости `npm install` (`npm i`)


# Файловая структура #

* `src` — исходные файлы проекта
* `dist` — результат билда


** Содержимое папки `src` **

* `templates` - блоки из которых будут собираться страницы
* `assets` – статичные файлы
* `js` - скрипты проекта
* `scss` - стили проекта
* `img/icons` - набор иконк для svg спрайта
* `img/favicons`
* `img/content` - контентные картинки 


# Задачи #

Все задачи запускаются посредством npm scripts.

* `npm run dev` – последовательный запуск команд `gulp dev` и `gulp serve`
* `npm run build` – сборка проекта в папку `dist`
