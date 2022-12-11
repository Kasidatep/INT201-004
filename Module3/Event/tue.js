import { lecturers } from "./data/lecturers.js";
import { students } from "./data/students.js";

const buttonPanal = document.getElementById('buttonPanel')
console.log(buttonPanal)
const studentBtn = buttonPanal.getElementsByTagName('button')[0]
const lecturerBtn = buttonPanal.getElementsByTagName(`button`)[1]

const doSomething = (event) => {
    //console.log(event.target)
    const who = (event.target.textContent === `students`) ? students : lecturers
    const dataListParentElement = document.getElementById('dataList')
    dataListParentElement.textContent = ''
    who.forEach(item => {
        const liElement = document.createElement('li')
        
        let textValue = ''
        for (const key in item) {
                textValue += `${key.toLocaleUpperCase()}: ${item[key]} `   
            }
        liElement.textContent = textValue
        dataListParentElement.appendChild(liElement)
    })
}

studentBtn.addEventListener('click', doSomething)
lecturerBtn.addEventListener('click', doSomething)