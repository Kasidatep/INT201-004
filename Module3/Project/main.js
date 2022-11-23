import { lecturers } from "./data/lecturers.js";
import { students } from "./data/students.js";

// const divButtonPanel = document.getElementById("buttonPanel");
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
//       textValue += `${key.toUpperCase()}: ${person?.[key]}, `;
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

const divButton =document.getElementById('buttonPanel')
const studentButton=divButton.children[0]
const lectureButton=divButton.children[1]

// create student handler function
const studentHandler=()=>{
    const ulParentElement=document.querySelector('ul')
    for(let i=0;i<students.length;i++){
        const liElement=document.createElement('li')
        liElement.textContent=`ID:${students[i].id},NAME:${students[i].name}`
        ulParentElement.appendChild(liElement)
    }
}
studentButton.addEventListener('click',studentHandler)

// lecturerBtn.addEventListener("click",(event)=>{
//     while(dataList_Ul.children.length>0){
//         const liElement = document.getElementsByTagName("li")
//         dataList_Ul.removeChild(liElement[0])
//     }
//     eventHander(lecturers)
// },true)

// // event handles
// const endStudentAlert = () => {alert("END STUDENT")}  // function expression
// studentBtn.addEventListener("click",endStudentAlert)
// function endLecturerAlert(){ //function declaration
//    // alert("END LECTURER")
// }
// lecturerBtn.addEventListener("click",endLecturerAlert)
// divButtonPanel.addEventListener("click",(event)=>{
//     alert(` Hello, Parent
//     Event Target: ${event.target},
//     Event target Id: ${event.target.id},
//     Event type: ${event.type},
//     Event current target: ${event.currentTarget},
//     Event phase: ${event.eventPhase},
//     `)
// })
