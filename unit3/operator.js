// // Conditional Operator  [ _____?__:__ ]
// let num = 5
// let result 
// result = num%2===0?`even`:`odd`
// console.log(result)

// // Optional chaining [ ?. ]
// const items1=[5,10,15,20]
// let items2 
// console.log(items1?.[0]) // < Optional chaining 
// console.log(items2?.[0]) // < Optional chaining 

// const obj1={id:123, firstname:`somchai`, sex:`male`}
// let obj2 = null
// console.log(obj1?.id)
// console.log(obj2?.id)

// // Nullish Coalescing [ ?? ] << undefined check
// let arr
// let newArr = arr??[]
// console.log(newArr)
// console.log(newArr.length)

// // Nullish Coalescing [ ?? ] For undefined value in Object
// let student ={id:1}
// student.sex = student.sex?? `N/A` // << check student.sex undefined
// console.log(student)

// // For..of << use for Array, String
// let item=[`Sneezy`,`Sleepy`,`Dopey`,`Doc`,`Happy`,`Bashful`,`Grumpy`]
// for(const i of item){
//     console.log(i)
// }

// // For..in << use for Object
// let Obj = {studentId:64130500000, name:`Unknown Name`, gender:'N/A'}
// for(const prop in Obj){ //studentId   64130500000   name   Unknown   Name   gender   N/A
//     console.log(prop)
//     console.log(Obj[prop])
// }

// console.log(Math.random()) // FLOATING NUMBER RANDOM  0 to <1 (0.9999...)
// //Math Random function
// function getRandom(min, max) {
//     return Math.random() * (max - min) + min;
// }
// console.log(getRandom(1,6))     // FLOATING NUMBER RANDOM 1 - 6 (6.9999...)
// console.log(Math.floor(getRandom(1,6)))     // INTEGER NUMBER RANDOM 1 - 6
// console.log(Math.floor(getRandom(1,100)))   // INTEGER NUMBER RANDOM 1 - 100

// switch case ===
let letter = `a`
let grade
switch(letter){
    case `a`:
    case `A` :grade=`A`
                break
    case `B` :grade=`B`
                break
    case `C` :grade=`C`
                break
    default :grade=`F`
}
console.log(`Grade: ${grade}`)

