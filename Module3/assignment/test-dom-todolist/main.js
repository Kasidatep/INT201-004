import {todoManagement} from "./lib/todoManagement"
import {todoUserInterface} from "./UI/todoList.js"

const {addTodo, getNumberOfDone, getNumberOfNotDone} = todoManagement()
const {showTodoItem,showNumberOfDone,showNumberOfNotDone} = todoUserInterface()


