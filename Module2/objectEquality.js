//compare with equality ==, === operators
const obj1 = {
  lastname: 'sup',
  firstname: 'Umaporn',
  job: { position: 'lecturer', university: 'KMUTT' }
}
const obj1Copy = {
  lastname: 'sup',
  firstname: 'Umaporn',
  job: { position: 'lecturer', university: 'KMUTT' }
}
const obj2 = {
  firstname: 'Umaporn',
  lastname: 'sup',
  job: { university: 'KMUTT', position: 'lecturer' }
}
const newObj = obj2
console.log(obj1 == obj1Copy) // false
console.log(obj1 == obj2)     // false
console.log(obj1 === obj2)    // false
console.log(obj2 == newObj)   // true
console.log(obj2 === newObj)  // true
console.log('--------------')

// Manual Comparison of property values  // เปรียบเทียบ object ต้องดึงข้อมูลมาเปรียบเทียบ
function compareName(obj1, obj2) {
  return obj1.firstname === obj2.firstname && obj1.lastname === obj2.lastname
}
console.log(compareName(obj1, obj2))   // true
console.log(compareName(obj2, newObj)) // true
console.log('--------------')

// Shallow Equality
function shallowEquality(object1, object2) {
  const keys1 = Object.keys(object1)
  const keys2 = Object.keys(object2)
  if (keys1.length !== keys2.length) {
    return false
  }
  for (let key of keys1) {
    if (object1[key] !== object2[key]) {
      return false
    }
  }
  return true
}
let book1 = {
  isbn: 123456789,
  title: 'JavaScript',
  auhors: {
    id: 12
  }
}
let book2 = {
  isbn: 123456789,
  title: 'JavaScript',
  auhors: {
    id: 12
  }
}
let book2Copy = {
  title: 'JavaScript',
  isbn: 123456789,
  auhors: {
    id: 12
  }
}
console.log(shallowEquality(book1, book2))  //false
console.log(shallowEquality(book2, book2Copy))  //false
console.log('------* *------')

//Deep Equality
function compareObjectEntry(obj1, obj2) {
  // let allEquals = false
  if (Object.keys(obj1).length !== Object.keys(obj2).length) return false
  if (Object.values(obj1).length !== Object.values(obj2).length) return false
  for (const [key1, value1] of Object.entries(obj1)) {
    allEquals = false
    for (const [key2, value2] of Object.entries(obj2)) {
      // console.log(key1, value1)
      // console.log(key2, value2)
      if (typeof value1 === 'object' && typeof value2 === 'object') {
        if (compareObjectEntry(value1, value2) === false) return false
        else allEquals = true
      } else if (key1 === key2 && value1 === value2) {
        allEquals = true
        break
      }
      // console.log(allEquals)
    }
    if (allEquals === false) return false
  }
  // return true
  return allEquals
}
console.log(compareObjectEntry(obj1, obj2))
console.log(compareObjectEntry(book1, book2))

const emptyObj = {}
// #1 check empty object แปลงเป็น json object use stringify()
if (JSON.stringify(emptyObj) === '{}')
  console.log('1. emptyObj is empty object')
// #2
if (Object.keys(emptyObj).length === 0)
  console.log('2. emptyObj is empty object')