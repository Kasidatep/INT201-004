class Todo {
  static runningId = 1
  constructor(description, done=false) {
    this.id = Todo.runningId++
    this.description = description
    this.done=done
  }
  getTodo() {
    return { id: this.id, description: this.description, done: this.done }
  }
  setDescription(newDescription) {
    this.description = newDescription
  }
}
module.exports = Todo
// export {Todo}
