// function todoUserInterface() {
//   // const todosDiv = document.getElementById('todos')

//   function showTodoItem(newId, newDescription) {
//     const listTodoDiv = document.getElementById('listTodo')
//     //create new <div>
//     const newTodoDiv = document.createElement('div')
//     newTodoDiv.className = 'todoItem'
//     newTodoDiv.setAttribute('id', newId)
//     //create new <p>
//     const newTodoItem = document.createElement('p')
//     // newTodoItem.innerText = newDescription
//     newTodoItem.textContent = newDescription
//     newTodoDiv.appendChild(newTodoItem)

//     //create done button
//     const doneButton = document.createElement('button')
//     // doneButton.innerText = 'Not Done'
//     doneButton.textContent = 'Not Done'
//     newTodoDiv.appendChild(doneButton)

//     //create remove button
//     const removeButton = document.createElement('button')
//     // removeButton.innerText = 'remove'
//     removeButton.textContent = 'remove'
//     newTodoDiv.appendChild(removeButton)

//     listTodoDiv.appendChild(newTodoDiv)
//   }
//   function showNumberOfDone(numberOfDone) {
//     const doneP = document.getElementById('done')
//     doneP.textContent = `Number of Done:${numberOfDone}`
//   }
//   function showNumberOfNotDone(numberOfNotDone) {
//     const notDoneP = document.getElementById('notDone')
//     notDoneP.textContent = `Number of Not Done:${numberOfNotDone}`
//   }
//   function removeTodoItem(removeId) {
//     const removeTodoNode = document.getElementById(removeId)
//     //console.log(removeTodoNode)
//     //console.log(removeTodoNode.parentElement)
//     //removeTodoNode.parentElement.removeChild(removeTodoNode)
//     removeTodoNode.remove()
//   }
//   return { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
// }
// // export { todoUserInterface }
// module.exports = todoUserInterface

function todoUserInterface() {
  function showTodoItem(newId, newDescription) {
    const divElement = document.createElement("div")
    divElement.setAttribute("class","todoItem")
    divElement.setAttribute("id", newId)
    const listTodoElement = document.getElementById("listTodo")
    
    const pDesc = document.createElement("p")
    pDesc.textContent = newDescription
    divElement.append(pDesc)
    
    const notDonebtn = document.createElement("button")
    notDonebtn.textContent = "Not Done"
    divElement.append(notDonebtn)
    
    const removebtn = document.createElement("button")
    removebtn.textContent = "remove"
    divElement.append(removebtn)

    listTodoElement.appendChild(divElement)
  }
  function showNumberOfDone(numberOfDone) {
    document.getElementById("done").textContent = `Number of Done:${numberOfDone}`
  }
  function showNumberOfNotDone(numberOfNotDone) {
    const pNotDone = document.getElementById("notDone")
    pNotDone.textContent = `Number of Not Done:${numberOfNotDone}`
  }
  function removeTodoItem(removeId){
    const removeTodoNode = document.getElementById(removeId)
    removeTodoNode.parentElement.removeChild(removeTodoNode)
  }
  return { showTodoItem, showNumberOfDone, showNumberOfNotDone, removeTodoItem }
}
// export {todoUserInterface}
module.exports = todoUserInterface
