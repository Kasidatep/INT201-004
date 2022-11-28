import { todoManagement } from '../lib/todoManagement.js'
import { todoUserInterface } from '../UI/todoList.js'
// const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
//   todoUserInterface()

// const {
//   addTodo,
//   removeTodo,
//   findTodo,
//   getTodos,
//   getNumberOfDone,
//   getNumberOfNotDone,
//   setItemToDone,
//   loadTodos
// } = todoManagement()

// const todoManagement = require('../lib/todoManagement.js')
// const todoUserInterface = require('../UI/todoList.js')

const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } = todoUserInterface()
const {
  addTodo,
  removeTodo,
  findTodo,
  getTodos,
  getNumberOfDone,
  getNumberOfNotDone,
  setItemToDone,
  loadTodos
} = todoManagement()

const addTodoHandler = () => {
  const todoDesc = document.querySelector("input").value
  if(todoDesc!==``) {
    const todoId = addTodo(todoDesc);
    showTodoItem(todoId,todoDesc)
    const todoItem = document.getElementById(todoId)
  const button = todoItem.getElementsByTagName("button")
  button[0].addEventListener("click",notDoneButtonHandler)
  button[1].addEventListener("click",removeButtonHandler,true)
  }
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

const notDoneButtonHandler = (event) => {
  const focus = event.path[1]
  const button = focus.getElementsByTagName("button")
  button[0].textContent = "Done"
  button[0].setAttribute("style","background-color: green; color: white;")
  setItemToDone(focus.id)
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

const removeButtonHandler = (event) => {
  const listTodo = document.getElementById("listTodo")
  const focus = event.path[1]
  removeTodoItem(focus.id)
  removeTodo(focus.id)
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

export {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler,
}

// module.exports = {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler
// }
