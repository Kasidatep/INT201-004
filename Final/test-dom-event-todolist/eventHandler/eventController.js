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
const todoList = require('../UI/todoList.js')

const { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem } =
  todoList()
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
  const inputValue = document.getElementsByTagName('input')[0].value
 // console.log(inputValue)
  if(inputValue.length > 0){
    const todoId = addTodo(inputValue)
    showTodoItem(todoId,inputValue)
    const todoItem = document.getElementById(todoId)
    const notDoneBtn = todoItem.getElementsByTagName("button")[0]
    const removeBtn = todoItem.getElementsByTagName("button")[1]
    notDoneBtn.addEventListener('click',notDoneButtonHandler)
    removeBtn.addEventListener('click',removeButtonHandler)
    showNumberOfDone(getNumberOfDone())
    showNumberOfNotDone(getNumberOfNotDone())
  }
}

const notDoneButtonHandler = (event) => {
  const button = event.target
  button.textContent = 'Done'
  button.setAttribute('style',"background-color: green; color: white")
  setItemToDone(event.target.parentElement.id)
  //console.log(event.target.parentElement)
  showNumberOfDone(getNumberOfDone())
  showNumberOfNotDone(getNumberOfNotDone())
}

const removeButtonHandler = (event) => {
  const button = event.target
  removeTodoItem(Number(button.parentElement.id))
  removeTodo(Number(event.target.parentElement.id))
  //console.log(button)
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
