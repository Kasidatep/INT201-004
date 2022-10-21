class Todo {
    static currentId = 1
    constructor(description) {
        this.id = Todo.currentId++
        this.description = description
    }
    getTodo() {
        return { id: this.id, description: this.description }
    }
    setDescription(newDescription) {
        this.description = newDescription
    }
}

function todos() {
    let todos = []
    function addTodo(desc) {
        // todos.push(new Todo(desc))
        const todo = new Todo(desc)
        todos.push(todo)
    }
    function removeTodo(removeId) {
        // todos = todos.filter(todo=>todo.id!==removeId)
        const newTodos = todos.filter(todo => todo.id !== removeId)
        todos = newTodos
    }
    function findTodo(searchId) {
        return todos.find(todo => todo.id === searchId)
    }
    function getTodos() {
        return todos
    }
    return {
        addTodo, removeTodo, findTodo, getTodos
    }
}

const myTodo = todos()
myTodo.addTodo(`create todoList.js file`)
console.log(myTodo.getTodos())
myTodo.addTodo(`self learning serverside`)
myTodo.addTodo(`meet consult gen final module2`)
myTodo.addTodo(`create er diagram database`)
myTodo.addTodo(`homework statistic`)
myTodo.addTodo(`learn network`)
console.log(myTodo.getTodos())
myTodo.removeTodo(3)
console.log(myTodo.getTodos())
myTodo.addTodo(`eng task`)
console.log(myTodo.getTodos())
console.log(myTodo.findTodo(5))
console.log("Removed : "+myTodo.findTodo(3))
myTodo.findTodo(5).setDescription("new descriotion")
console.log(myTodo.findTodo(5))
console.log(`----------------------`)
const anothorTodo = todos()
anothorTodo.addTodo(`create persentation in canva`)
anothorTodo.addTodo(`shoping Malk in shopee`)
console.log(anothorTodo.getTodos())
console.log(anothorTodo.findTodo(9))
anothorTodo.removeTodo(9)
console.log(anothorTodo.getTodos())