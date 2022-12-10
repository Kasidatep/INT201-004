// import { addTodoHandler } from './eventHandler/eventController.js'
const {addTodoHandler} = require('./eventHandler/eventController.js')


const addTodo = document.getElementById("addBtn")
addTodo.addEventListener("click", addTodoHandler)


