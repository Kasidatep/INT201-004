const li = document.createElement("li")
li.className = "deverloper"
li.textContent = "INT202 Server Side I"
const bodyChild = document.body.children
const divCourseList =bodyChild[1]
const ul = divCourseList.children[0]
ul.appendChild(li)

//1. getElementById()
const divInstructors = document.getElementById("instructors")
console.log(divInstructors)

//getElementsByTagName() return node HTML collection
const liElementNodes = document.getElementsByTagName("li")
//HTML collection (Array-like) not array
console.log(liElementNodes)
console.log(liElementNodes[0])
console.log(liElementNodes.length)
//transform array-like to array
Array.from(liElementNodes).forEach( element => console.log(element))

//3.getElementsByClassName() node HTML collection
const classDeverloper = document.getElementsByClassName("deverloper")
console.log(classDeverloper)

//NodeList is arraylike only allow arraymethod => ***only forEach()***
//1. getElementsByName() <element name="something"></element>
const subjectsNode = document.getElementsByName("subject")
console.log(subjectsNode)

//2. querySelectorAll() return collecttionHTML array-Like all match
const pQueryAll = document.querySelectorAll("p")
console.log(pQueryAll)

//3. querySelector() return first querySelector match
const pQueryFirst = document.querySelector("p")
console.log(pQueryFirst)

const liClassDevopsQueryAll = document.querySelectorAll("li.devops")
//const liDevopsQueryAll = document.querySelectorAll("li[class="devops"]")
console.log(liClassDevopsQueryAll)

const divIdCourseListQuery = document.querySelector("div#courseList")
console.log(divIdCourseListQuery)