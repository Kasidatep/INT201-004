import {
  addTodoHandler,
  beforeUnloadHandler,
  loadHandler
} from './eventHandler/eventController.js'

const addButton = document.getElementById('addBtn')
addButton.addEventListener('click', () => addTodoHandler())

const inputTodo = document.querySelector('input')
inputTodo.addEventListener('keypress', (event) => {
  // let keyCode = event.keyCode ?? event.which
  if (event.key === 'Enter') addTodoHandler()
})
