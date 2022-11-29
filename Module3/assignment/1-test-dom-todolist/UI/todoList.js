function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const divElement = document.createElement("div")
    divElement.setAttribute("class","todoItem")
    divElement.setAttribute("id",newId)
    const listTodoElement = document.getElementById("listTodo")
    listTodoElement.appendChild(divElement)
    
    const pDesc = document.createElement("p")
    pDesc.innerText = newDescription
    divElement.append(pDesc)
    
    const notDonebtn = document.createElement("button")
    notDonebtn.innerText = "Not Done"
    divElement.append(notDonebtn)
    
    const removebtn = document.createElement("button")
    removebtn.innerText = "remove"
    divElement.append(removebtn)
  }
  function showNumberOfDone(numberOfDone) {
    document.getElementById("done").textContent = `Number of Done:${numberOfDone}`
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const pNotDone = document.getElementById("notDone")
    pNotDone.textContent = `Number of Not Done:${numberOfNotDone}`
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone }
}
// export {todoUserInterface}
module.exports = todoUserInterface
