// Primitive
let a = `one`
let b = a
console.log(a)
console.log(b)
b = `two`
console.log(a)
console.log(b)

// Array Object
let Obj = {id:1, name:`your name`, ages:25}
let Obj2 = Obj
console.log(Obj)
console.log(Obj2)
Obj2.ages = 30
console.log(Obj)
console.log(Obj2)