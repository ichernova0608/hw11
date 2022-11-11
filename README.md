# Работа с REST API
# Посмотреть работу ----> https://ichernova0608.github.io/REST-API/ 
fetch/async/await &amp; working with rest api
#Задача

#Цель задания

Практика работы с API. Научиться разделять приложение на несколько страниц с параметрами.



#Задание

На основе https://gorest.co.in/ создайте блог, который состоит из 2-х видов страниц (2-х html файлов):

Список статей блога, который можно получить запросом GET https://gorest.co.in/public-api/posts?page=10, где page - номер страницы для постраничной навигации. Номер страницы должен браться из URL страницы из параметра page. На странице должны выводиться:
Список статей, где каждый элемент должен быть ссылкой на статью вида post.html?id=10 (вместо 10 - id соответствующей статьи). Сам список находится в свойстве data в ответе на список статей.
Постраничная навигация, построенная на основе свойства из ответа на список статей meta.pagination с информацией о кол-ве статей и страниц. Каждая ссылка должна вести на index.html?page=10 (вместо 10 - номер соответствующей страницы). При этом ссылка на первую страницу не должна иметь параметров, то есть должна просто вести на страницу index.html без параметров, так как 1 - это значение по умолчанию и его необязательно явно проставлять.
Детальная страница статьи, которую можно получить запросом https://gorest.co.in/public-api/posts/{id статьи}. При этом id статьи должен браться из URL страницы из параметра id. На странице должны выводиться:
Заголовок (в тэге h1, свойство title из ответа на запрос) загруженной статьи.
Содержимое (в тэге p, свойство body из ответа на запрос).
Комментарии к статье в виде списка с именем автора и содержимым к каждому комментарию. Получить список комментариев к конкретной статье можно запросом GET https://gorest.co.in/public-api/comments?post_id=4 (вместо 4 - id статьи).


#Проверка результата
Все виды страниц корректно отображаются с корректными значениями query параметров в адресной строке. Если опустить параметр page в адресной строке для страницы списка статей, то по умолчанию загрузится страница 1.

Приложение работает в полном соответствии с описание задания.



#Критерии оценки

Код полностью соответствует заданию.
В коде разделены функции получения и обработки данных и функции отрисовки DOM-дерева.


#Рекомендации к выполнению

В задании нет чётких требований к внешнему виду программы, но рекомендуем вам использовать готовые библиотеки для стилей вроде Bootstrap, чтобы не верстать все элементы с нуля.

При открытии html файлов браузер отбросит query-параметры. Это значит, что для URL вида .../index.html или .../index.html?page=10 браузер просто откроет файл index.html, а параметры вы сможете обработать из JavaScript кода.

Для обработки query параметров самым удобным и надёжным способом является использование сочетания класса URLSearchParams и свойства window.location.search. Пример использования:



// предположим, что мы открыли страницу .../index.html?x=1&y=xyz // значение window.location.search в таком случае будет "?x=1&y=xyz" const pageParams = new URLSearchParams(window.location.search); pageParams.get('x'); // "1" pageParams.get('y'); // "xyz" pageParams.get('z'); // null, нет такого параметра



Не забывайте о том, что данные стоит отделять от представления. Это значит, что код, в котором запрашиваются и обрабатываются данные от API и код, который превращает данные в DOM элементы должны находиться в разных местах.



DNS 
Методы HTTP запросов 
Коды статусов ответов 
CORS 
JSON 
localhost 
port 
window.location 
URLSearchParams
