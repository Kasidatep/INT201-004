function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
      // console.log(newId)
      // console.log(newDescription)
      const listTodo = document.getElementById('listTodo')
      // console.log(listTodo)

      // <div class="todoItem" id="newId">
      const divTodoItem = document.createElement('div')
      divTodoItem.className = `todoItem`
      divTodoItem.id = newId

      const pDescription = document.createElement(`p`)
      pDescription.textContent = newDescription
      const notDoneBtn = document.createElement('button')
      notDoneBtn.textContent = `Not Done`
      const removeBtn = document.createElement('button')
      removeBtn.textContent = `remove`

      divTodoItem.append(pDescription,notDoneBtn,removeBtn)
      console.log(divTodoItem)

      listTodo.appendChild(divTodoItem)
  }
  function showNumberOfDone(numberOfDone) {
    const showDone = document.getElementById('done')
    showDone.textContent = `Number of Done:${numberOfDone}`
  }
  function showNumberOfNotDone(numberOfNotDone) {
    document.getElementById('notDone').textContent = `Number of Not Done:${numberOfNotDone}`
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}

module.exports = todoUserInterface
// export {todoUserInterface}
