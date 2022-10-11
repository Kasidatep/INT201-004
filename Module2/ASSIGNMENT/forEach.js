const employee = ['Buddy Everett',
    'Mariyah Espinoza',
    'Sinead Stephenson',
    'Jaime Duggan',
    'Leyla Hensley',
    'Macy Devlin',
    'Sabrina Garrett'
]
console.log(`========== forEach() ==========`)

console.log(` >> forEach(element) only`)
employee.forEach(element => {
    console.log(` > ${element}`)
});

console.log(`-------------------------------------`)
console.log(` >> forEach(element,index)`)
employee.forEach((element,index) => {
    console.log(`${index} > ${element}`)
});

console.log(`-------------------------------------`)
console.log(` >> forEach(element,index,array)`)
employee.forEach((element,index,array) => {
    console.log(`> ${element} is on the Index No. ${index} in [${array}]`)
});

const numeral = [1,2,3,4,undefined,6,7,8,...[,,,],12]
console.log(`print element in array with for loop`)
for (let index = 0; index < numeral.length; index++) {
    console.log(numeral[index])
}
console.log(`print element in array with forEach()`)
numeral.forEach(element => console.log(element));

console.log(Array.prototype.forEach)