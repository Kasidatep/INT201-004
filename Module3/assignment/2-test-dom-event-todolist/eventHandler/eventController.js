// import { todoManagement } from '../lib/todoManagement.js'
// import { todoUserInterface } from '../UI/todoList.js'
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

const todoManagement = require('../lib/todoManagement.js')
const todoUserInterface = require('../UI/todoList.js')

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
  if (todoDesc !== ``) {
    const todoId = addTodo(todoDesc);
    showTodoItem(todoId, todoDesc)
    const todoItem = document.getElementById(todoId)
    const button = todoItem.getElementsByTagName("button")
    button[0].addEventListener("click", notDoneButtonHandler)
    button[1].addEventListener("click", removeButtonHandler)
  }
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

const notDoneButtonHandler = (event) => {
  const button = event.target
  button.textContent = "Done"
  button.setAttribute("style", "background-color: green; color: white;")
  setItemToDone(event.target.parentElement.id)
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

const removeButtonHandler = (event) => {
  removeTodoItem(event.target.parentElement.id)
  removeTodo(event.target.parentElement.id)
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

// export {
//   addTodoHandler,
//   notDoneButtonHandler,
//   removeButtonHandler,
// }

module.exports = {
  addTodoHandler,
  notDoneButtonHandler,
  removeButtonHandler
}
