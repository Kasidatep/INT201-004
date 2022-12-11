import { lecturers } from "./data/lecturers.js";
import { students } from "./data/students.js";

const divButtonPanel = document.getElementById("buttonPanel");
// const studentBtn = divButtonPanel.children[0];
// const lecturerBtn = divButtonPanel.children[1];

// const dataList = document.getElementById("dataList");
// const dataListElementList = dataList.getElementsByTagName("ul");
// const dataList_Ul = dataListElementList[0];

// function eventHander(event) {
//     const persons = (event.target.id===`1`)?students:lecturers
//     // console.log(person)
//   dataList_Ul.textContent = ``;
//   persons.forEach((person) => {
//     const liElement = document.createElement("li");
//     let textValue = "";
//     for (const key in person) {
//       textValue += `${key.toUpperCase()}: ${person?.[key]} `;
//     }
//     // liElement.textContent = `ID: ${person.id},   NAME: ${person.name}`
//     liElement.textContent = textValue;
//     dataList_Ul.appendChild(liElement);
//   });
// }
// lecturerBtn.addEventListener("click",eventHander)
// studentBtn.addEventListener("click",eventHander)

// lecturerBtn.addEventListener(
//   "click",
//   (event) => {
//     // arrow function
//     eventHander(event);
//   },
//   true
// );
// studentBtn.addEventListener(
//   "click",
//   (event) => {
//     // arrow function
//     eventHander(event);
//   },
//   true
// );

// const divButton =document.getElementById('buttonPanel')
// const studentButton=divButton.children[0]
// const lectureButton=divButton.children[1]

// // event prop Capturing
// function studentAlert(event){ //function declaration
//   alert(`
//     Hello, studentAlert Capturing
//     Event Target: ${event.target},
//     Event target Id: ${event.target.id},
//     Event type: ${event.type},
//     Event current target: ${event.currentTarget},
//     Event phase: ${event.eventPhase},
//     `)
//     console.log(event.currentTarget)
// }
// studentBtn.addEventListener("click",studentAlert,true)

// divButton.addEventListener("click",(event)=>{
//     alert(`
//     Hello, DivParent Capturing
//     Event Target: ${event.target},
//     Event target Id: ${event.target.id},
//     Event type: ${event.type},
//     Event current target: ${event.currentTarget},
//     Event phase: ${event.eventPhase},
//     `)
// console.log(event.currentTarget)
// },true)

// //event prop bubble
// divButton.addEventListener("click",(event)=>{
//   alert(`
//   Hello, DivParent Bubbling
//   Event Target: ${event.target},
//   Event target Id: ${event.target.id},
//   Event type: ${event.type},
//   Event current target: ${event.currentTarget},
//   Event phase: ${event.eventPhase},
//   `)
//   console.log(event.currentTarget)
// },false)
// lectureButton.addEventListener("click",(event)=>{
//   alert(`
//   Hello, lectureAlert Bubbling
//   Event Target: ${event.target},
//   Event target Id: ${event.target.id},
//   Event type: ${event.type},
//   Event current target: ${event.currentTarget},
//   Event phase: ${event.eventPhase},
//   `)
//   console.log(event.currentTarget)
// },false)

const studentButton = document.getElementById("1")
const lecturerButton = document.getElementById("2")
//console.log(lecturerButton)
const ulElement = document.querySelector("ul")
const eventHander = (event)=>{
  console.log(event)
  const displayObj = (Number(event.target.id)===1)?students:lecturers
  ulElement.textContent=''
  displayObj.forEach(item=> {
    const liElement = document.createElement("li")
    //liElement.textContent = `ID: ${item.id} NAME: ${item.name}`
    let textValue = "";
    for (const key in item) {
      textValue += `${key.toUpperCase()}: ${item?.[key]} `;
    }
    liElement.textContent = textValue
    ulElement.appendChild(liElement)
  })
}
studentButton.addEventListener('click',eventHander)
lecturerButton.addEventListener('click',eventHander)