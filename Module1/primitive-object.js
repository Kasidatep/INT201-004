// Primitive
let a = `one`
let b = a
console.log(a)      //one
console.log(b)      //one
a = `two`
console.log(a)     //two
console.log(b)     //one

// Array Object
let Obj = {id:1, name:`your name`, ages:25}
let Obj2 = Obj
console.log(Obj)    //{ id: 1, name: 'your name', ages: 25 }
console.log(Obj2)   //{ id: 1, name: 'your name', ages: 25 }
Obj2.ages = 30
console.log(Obj)    //{ id: 1, name: 'your name',************** ages: 30 ************}
console.log(Obj2)   //{ id: 1, name: 'your name',************** ages: 30 ************}