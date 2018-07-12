# Notepad (api)
## Yifei Yan

### Introduction

Notepad is a web-based notepad application. You can create a note by typing the title in the bar and click add note. You can edit the title and content of the note. You can move the note by dragging it around. You can delete the note. 

It also has full authentication features so that only signed in users can create/edit/delete posts.

### API

- built an express and mongodb CRUD api server for the react+redux notepad frontend (Notedpad-CLIENT)

- a pure api server, returning only JSON format data to the notepad frontend (Notedpad-CLIENT)

- implemented authentication by creating a /signin, /signup, and /signout routes and added a way to restrict access to certain routes based on authentication

- user model that stores username, salt+hashed password, and name.



**Client link**: notedapp.surge.sh

**Api link**: https://lab4cs52.herokuapp.com




