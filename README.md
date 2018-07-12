# Notepad (api)
## Yifei Yan

### Introduction

Notepad is a web-based notepad application. You can create a note by typing the title in the bar and click add note. You can edit the title and content of the note. You can move the note by dragging it around. You can delete the note. At the same time, adding, updating, and dragging will sync with the Firebase database so that people on multiple browser pages can interact with the notes.

### API

- built an express and mongodb CRUD api server for our react+redux blog frontend

- a pure api server, returning only JSON format data to our Lab4 frontend.

- implemented authentication by creating a /signin, /signup, and /signout routes and add a way to restrict access to certain routes based on authentication

- user model that stores username, salt+hashed password, and name.


Client link: notedapp.surge.sh

Api link: https://lab4cs52.herokuapp.com




