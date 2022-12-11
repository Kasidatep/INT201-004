import { todoManagement } from "./lib/todoManagement.js"
import { todoUserInterface } from "./UI/todoList.js"

const { addTodo, getNumberOfDone, getNumberOfNotDone } = todoManagement()
const { showTodoItem, showNumberOfDone, showNumberOfNotDone } = todoUserInterface()


showTodoItem(addTodo("Hi Js"), "Hi Js")
showTodoItem(addTodo("Welcome HTML"), "Welcome HTML")
showTodoItem(addTodo("Ooh, Ruby"), "Ooh, Ruby")
showTodoItem(addTodo("Sawatdee, Kotlin"), "Sawatdee, Kotlin")
console.log(showNumberOfDone(getNumberOfDone()))
console.log(showNumberOfNotDone(getNumberOfNotDone()))