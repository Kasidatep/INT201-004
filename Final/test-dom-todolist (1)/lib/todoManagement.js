const Todo = require('./todo.js')
// import { Todo } from "./todo.js";

function todoManagement() {
  let todos = []
  function addTodo(desc) {
    todos.push(new Todo(desc))
    return todos[todos.length-1].id
  }
  function removeTodo(removeId) {
    todos = todos.filter((todo) => todo.id !== removeId)
  }
  function findTodo(searchId) {
    return todos.find((todo) => todo.id === searchId)
  }
  function getTodos() {
    return todos
  }
  function getNumberOfDone() {
    const doneItem = todos.filter(todo => todo.done===true)
    return doneItem.length
  }
  function getNumberOfNotDone() {
    const notdoneItem = todos.filter(todo => todo.done===false)
    return notdoneItem.length
  }

  return {
    addTodo,
    removeTodo,
    findTodo,
    getTodos,
    getNumberOfDone,
    getNumberOfNotDone
  }
}
module.exports = todoManagement
// export {todoManagement}
