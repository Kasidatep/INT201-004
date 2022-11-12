function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const divElement = document.createElement("div")
    divElement.setAttribute("class","todoItem")
    divElement.setAttribute("id",newId)
    const listTodoElement = document.getElementById("listTodo")
    listTodoElement.appendChild(divElement)
  }
  function showNumberOfDone(numberOfDone) {}
  function showNumberOfNotDone(numberOfNotDone) {}
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
export {todoUserInterface}
