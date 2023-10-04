### Ananas Front-end test "Список компаний"

---

## Использованный стек


- `Next.js`
- `TypeScript`
- `TailwindCSS`
- `Redux`
- `NextUI`
- `FSD Архитектура`

## Задание

````
 Данное приложение надо использовать чисто на Frontend, без использования Backend для сохранения.
 
 Часть №1. Минимальные требования

 1. Таблица юридических лиц. поля: наименование, адрес, огрн, инн, дата регистрации

 2. Разместить кнопку "добавить" над таблицей.
 Нажатие кнопки открывает модальное окно с формой добавления компании в таблицу.
 В модальном окне нужно вывести все поля, что есть в таблице.

 3. Дать пользователю возможность удаления компаний

 4. Дать пользователю возможность отредактировать адрес компании в режиме inline-edit
   
   
 Часть №2. Дополнительная функциональность

 1. Подключить сервис dadata.ru для загрузки информации по ИНН

 2. Добавить кнопку «Загрузить» около поля ИНН

 3. При нажатии на кнопку происходит запрос к dadata и заполняются все поля
````

## Что реализовано?

- Таблица с данными о компаниях
- Кнопка добавления компании через модальное окно
- Кнопка добавления компании по ИНН через Popover
- Inline-edit адреса
- Кнопка удаления компании
- Поиск по названиям компаний
- Адаптивный дизайн
- Мобильный дизайн

## Как запустить?
```bash
npm i
npm run build
npm run start
```
Далее открыть
http://localhost:3000
