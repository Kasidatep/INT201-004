//import { Todo } from "./todo.js"; //web
const Todo = require('./todo.js')   //test case

function todoManagement() {
  let todos = []
  function addTodo(desc) {
    const newTodo = new Todo(desc)
    todos.push(newTodo)
    return newTodo.id
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
//export {todoManagement} //web
module.exports = todoManagement  //test case
