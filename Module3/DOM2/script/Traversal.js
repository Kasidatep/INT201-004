const sectionsList = document.getElementById('sections')
console.log(sectionsList.firstElementChild)
console.log(sectionsList.lastElementChild)

const sectionElementList = document.getElementsByClassName('section')[2]
console.log(sectionElementList) //3
console.log(sectionElementList.previousElementSibling) //2
console.log(sectionElementList.nextElementSibling)  //4