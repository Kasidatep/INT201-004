const Todo = require('./todo.js')

function todoManagement() {
  let todos = []
  function addTodo(desc) {
    return todos.push(new Todo(desc))
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
  function getNumberOfDone() {}
  function getNumberOfNotDone() {}

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
