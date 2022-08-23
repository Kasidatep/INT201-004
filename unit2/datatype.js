// DataType

// Number
let num1 = 100 
let num2 = 20.5 //number
let num3 = 20000000n   //bigint
console.log(typeof num1)
console.log(typeof num2)
console.log(typeof num3)

// String can use `` "" ''
let str1 = "Hello" //string
let str2 = "Bank"
let str3 = `Greeting with ${str1} ${str2}` //string
console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)
console.log(str3)

//boolean
let isHolliday = true //boolean
let absent = false //boolean
console.log(typeof isHolliday)
console.log(typeof absent)

// Symbol 
let sym1 = Symbol(`id`) //symbol
let sym2 = Symbol(`id`) //symbol
let id1 = `id`
let id2 = `id`
console.log(typeof sym1)
console.log(typeof sym2)
console.log(sym1 === sym2) // false
console.log(id1 === id2) // true

// null
let unkhown = null
console.log(typeof unkhown)  // obj
console.log(unkhown) // null

// undefined
let undefinedObj 
console.log(typeof undefinedObj)  // undefined
console.log(undefinedObj) // undefined

//Object     format {key:value, key:value}
let studentObj={studentId:64130500004, name:`KasidatePhlaiphueak`}
console.log(typeof studentObj)  // Object
console.log(studentObj) // { studentId: 64130500004, name: 'KasidatePhlaiphueak' }

//Array
let studentArray = [ `AAA`, `BBB`, `CCC`]
console.log(typeof studentArray)  // Object
console.log(studentArray) // [ 'AAA', 'BBB', 'CCC' ]