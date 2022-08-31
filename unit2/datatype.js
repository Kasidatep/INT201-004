// DataType

// Number
let num1 = 100 
let num2 = 20.5        //number
let num3 = 20000000n   //bigint
console.log(typeof num1)
console.log(typeof num2)
console.log(typeof num3)

// String can use `` "" ''
let str1 = "Hello" //string
let str2 = "Bank"
let str3 = `Greeting with ${str1} ${str2}` //string ``
console.log(typeof str1)
console.log(typeof str2)
console.log(typeof str3)
console.log(str3)

//boolean
let isHolliday = true     //boolean
let absent = false        //boolean
console.log(typeof isHolliday)
console.log(typeof absent)

// Symbol 
let sym1 = Symbol(`id`)   //symbol
let sym2 = Symbol(`id`)   //symbol
let id1 = `id`
let id2 = `id`
console.log(typeof sym1)
console.log(typeof sym2)
console.log(sym1 === sym2) // false
console.log(sym1 == sym2)  // false
console.log(id1 === id2)   // true

// null
let nullV = null
console.log(typeof nullV)  // obj
console.log(nullV)         // null

// undefined
let undefinedObj 
console.log(typeof undefinedObj)  // undefined
console.log(undefinedObj)         // undefined


// Check dataType
// String
let cString = 'a'
console.log(cString)
console.log(typeof cString)
if(typeof cString === `string`)
    console.log(`a is String Type`)
if(cString === `a`)
    console.log(`a is String`)

let unknownVar
console.log(unknownVar)
console.log(typeof unknownVar)
if(typeof unknownVar === `undefined`)
    console.log(`unknownVar is undefined type`)
if(unknownVar === undefined)
    console.log(`unknownVar is undefined`)

let nullVar = null
console.log(nullVar)
console.log(typeof nullVar)
if(nullVar === null)
    console.log(`nullVar is null`)

//Object : a collection of propoties. One property contain key and value
//         format objName={key:value, key:value}
let studentObj={studentId:64130500004, name:`Kasidate Phlaiphueak`, gender:`Male`}
console.log(typeof studentObj)  // Object
console.log(studentObj)         // { studentId: 64130500004, name: 'Kasidate Phlaiphueak' }

//Array
let studentArray = [ `AAA`, `BBB`, `CCC`]
console.log(typeof studentArray)  // Object
console.log(studentArray)         // [ 'AAA', 'BBB', 'CCC' ]
console.log(studentArray.length)

//Array Emtry
let EmptyArray = []
console.log(EmptyArray)     
console.log(EmptyArray.length)  //0

// Array of Object 
let ArrayObj = [ {studentId:64130500004, name:`Kasidate Phlaiphueak`, gender:`Male`},
                 {studentId:64130500000, name:`Unknown Name`, gender:null}
               ]
console.log(ArrayObj) 
console.log(ArrayObj.length) 
console.log(ArrayObj[0]) 
console.log(ArrayObj[1]) 

// Mutable and Immutable
// Immutable : Primitive Datatype
let StrMu = 'hello'  
console.log(StrMu) 
console.log(StrMu.toUpperCase()) 
console.log(StrMu) 
console.log(StrMu = StrMu.toUpperCase()) 
console.log(StrMu) 

// mutable : Obj + Array
let product = {id:001, name:'Computer', price:25000} 
console.log(product)
product.price = 30000
console.log(product)

// Declarative and Types
// No Type Associated
let x = 10
console.log(x)
x = `Hello`
console.log(x)

