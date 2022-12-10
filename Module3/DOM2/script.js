const courseList = document.getElementById("courseList")
const ulcourseList = courseList.getElementsByTagName("ul")[0]
// console.log(ulcourseList)

const liElement = document.createElement("li")
liElement.className = "developer"
liElement.textContent = "INT202 Server Side I"
ulcourseList.appendChild(liElement)