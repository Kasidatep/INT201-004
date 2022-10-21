const employee = ['Buddy Everett',
    'Mariyah Espinoza',
    'Sinead Stephenson',
    'Jaime Duggan',
    'Leyla Hensley',
    'Macy Devlin'
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

const helloWorld = `HelloWorld`
let helloWorldASCII = []
console.log(helloWorld)
console.log(`print element in array with for loop`)
for (let index = 0; index < helloWorld.length; index++) {
    console.log(helloWorld[index]+" is "+ helloWorld[index].charCodeAt(0)+" in ASCII Code")
    helloWorldASCII.push(helloWorld[index].charCodeAt(0))
}

console.log(`helloWorld to ASCII : ${helloWorldASCII}`)

console.log(`print element in array with forEach()`)
helloWorldASCII.forEach(element => {
    console.log(`Code=${element} is ${String.fromCharCode(element)}`)
})
console.log(Array.prototype.forEach)