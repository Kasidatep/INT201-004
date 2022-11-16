const myApp = document.getElementById('app')
const childrensHTML = myApp.children
//return HTMLCollection

const childNodesList = myApp.childNodes
//return NodeList

Array.from(childrensHTML).forEach((element) => console.log(element))
//HTMLCollection(2) [div, div], cannot use forEach directly and need to create array

childNodesList.forEach((element) => console.log(element))
//NodeList(5) [text, div, text, div, text] can use forEach


// --------------------------------
const sectionDiv = document.getElementById('sections')
const sectionsbySelectorAll = document.querySelectorAll('.section')
const sectionsByClassName = document.getElementsByClassName('section')

//create a new div section
const div = document.createElement('div')
div.classList = 'section'
div.innerHTML = 'section 5'
sectionDiv.appendChild(div)
console.log(sectionsByClassName.length) //5
console.log(sectionsbySelectorAll.length)//4
