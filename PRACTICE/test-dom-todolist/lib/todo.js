class Todo {
  static runningId = 1
  constructor(description) {
    this.id = Todo.runningId++
    this.description = description
  }
  getTodo() {
    return { id: this.id, description: this.description }
  }
  setDescription(newDescription) {
    this.description = newDescription
  }
}
module.exports = Todo
