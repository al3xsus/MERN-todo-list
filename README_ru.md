# MERN-TODO-List

CRUD для задач юзеров с аутентификацией. 
Использован стек Mongo+Express+React+Node, к React ещё custom CSS и Semantic UI React.

## Как это работает
Пользователи регистрируются и логинятся.
В главном окне (`Home`) есть список тасок и небольшая форма для создания новой таски.
Таски показываются от всех пользователей, но редактировать и удалять можно только те, 
которые создавал текущий активный пользователь.
Редактирование таски происходит в отдельном маленьком модальном окне.

## Скрипты
Запускать из папки с проектом:

### `npm i`
Для установки модулей

### `npm run dev`
Запускает приложение в режиме разработки по адресу [http://localhost:3000](http://localhost:3000).

### `npm run build`
Для сборки в папку `build`.

## Скриншоты
![Редактирование таски](screenshots/screenshot_edit.png?raw=true "Редактирование таски")
![Все таски](screenshots/screenshot_home.png?raw=true "Все таски")
![Незалогиненный пользователь](screenshots/screenshot_home_empty.png?raw=true "Незалогиненный пользователь")
![Нет тасок](screenshots/screenshot_home_empty_logged.png?raw=true "Нет тасок")
![Окно логина](screenshots/screenshot_log_in.png?raw=true "Окно логина")
![Окно регистрации](screenshots/screenshot_sign_up.png?raw=true "Окно регистрации")

---

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from 
<a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com