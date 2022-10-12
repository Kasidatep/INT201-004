class Todo{
    constructor(id,description){
        this.id=id
        this.description=description
    }
    getTodo(){
        return {id:this.id, description:this.description}
    }
    setDescription(newDescription){
        this.description=newDescription
    }
}

function todos(){
    let todos=[]
    let todoId=1
    function addTodo(desc){
        const todo = new Todo(todoId++,desc)
        todos.push(todo)
    }
    function removeTodo(removeId){
        const newTodos=todos.filter(todo => todo.id!==removeId)
        todos=newTodos
    }
    function findTodo(searchId){
        return todos.find(todo=>todo.id===searchId)
    }
    function getTodos(){
        return todos
    }

    return {
        addTodo,removeTodo,findTodo,getTodos
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
console.log(myTodo.findTodo(3))
console.log(myTodo.findTodo(5).getTodo())
console.log(myTodo.findTodo(5).setDescription(`Done Statistic homeword 4`))
console.log(myTodo.findTodo(5))
