# MERN-TODO-List

___

[Версия на русском языке](README_ru.md)

___

CRUD for user's tasks with auth. 
Used stack is Mongo+Express+React+Node, also custom CSS and Semantic UI React.

## Work flow
Users are registered and authorized.
In main section (`Home`) there is list of tasks and small form for creating a new one.
Tasks are shown for all users, but current user can edit and delete only tasks created by current user.
Editing of task is made in the separate small modal window. 

## Scripts
Run from the project's folder:

### `npm i`
Install modules

### `npm run dev`
Start the app in dev mode at [http://localhost:3000](http://localhost:3000).

### `npm run build`
Build project into `build` folder.

## Screenshots
![Task editing](screenshots/screenshot_edit.png?raw=true "Task editing")
![All tasks](screenshots/screenshot_home.png?raw=true "All tasks")
![Unauthorized user](screenshots/screenshot_home_empty.png?raw=true "Unauthorized user")
![No tasks](screenshots/screenshot_home_empty_logged.png?raw=true "No tasks")
![Login window](screenshots/screenshot_log_in.png?raw=true "Login window")
![Registration window](screenshots/screenshot_sign_up.png?raw=true "Registration window")

---

Icons made by <a href="https://www.flaticon.com/authors/freepik" title="Freepik">Freepik</a> from 
<a href="https://www.flaticon.com/" title="Flaticon"> www.flaticon.com