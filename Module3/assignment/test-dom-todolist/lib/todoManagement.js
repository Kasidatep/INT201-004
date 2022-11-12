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
  function getNumberOfDone() {
    const done = todos.filter(todo => todo.done === true)
    return done.length
  }
  function getNumberOfNotDone() {
    const notDone = todos.filter(todo => todo.done === false)
    return notDone.length
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
export {todoManagement}
