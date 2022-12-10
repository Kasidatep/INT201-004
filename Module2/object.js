// 1. USING OBJECT LITERAL TO CREATE OBJECT
let profile = {
    id: 123,
    interests: [ 'music', 'skiing']
}
console.log(profile)
profile.interests[profile.interests.length-1] = `reading`  // change value in array in objct 
console.log(profile)

let book = { 
    isbn:123456789,
    title:'JavaScript',
    author: {
        firstname:'Umaporn',
        lastname:'Sup'
    }
 }
book.author.firstname = `Kasidate`
book[`author`][`lastname`] = `Phlaiphueak`
console.log(book)

// Default function parameters
function multiply(a, b = 1) {
    return a * b
  }
  console.log(multiply(5, 2))  // expected output: 10
  console.log(multiply(5))     // expected output: 5
  console.log(multiply(5,undefined))  // expected output: 5
  console.log(multiply(5,null))  // expected output: 0 ***
  console.log(multiply(5, 0)) 


// 2. USING NEW OPERATOR TO CREATE OBJECT 
class Point{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    compare(anotherPoint){
        console.log(` 
        This.x = ${this.x} -- This.y = ${this.y} 
        AnotherPoint.x = ${anotherPoint.x} -- AnotherPoint.y = ${anotherPoint.y}`)
   return `end`
    }
    whoMaxOfMultiply(anotherPoint){
        console.log(`
        This =>> ${this.x} * ${this.y} = ${this.x * this.y} 
        AnotherPoint =>> ${anotherPoint.y} * ${anotherPoint.y} = ${anotherPoint.x * anotherPoint.y}
        `)
    let a = (this.x * this.y < anotherPoint.x * anotherPoint.y) ? `AnotherPoint =>> ${anotherPoint.y} * ${anotherPoint.y} = ${anotherPoint.x * anotherPoint.y}`:`This =>> ${this.x} * ${this.y} = ${this.x * this.y}`
        return `Max is : ${a}`
    }
}

const p1 = new Point(1,2)
let p2 = new Point(4,5)
// p1=p2 //unable to reassign
// p1.x=100
// p1.y=50

// p2=p1 //able to reassign

console.log(p1.compare(p2))
console.log(p2.compare(p1))

console.log(p2.whoMaxOfMultiply(p1))
console.log(Object.prototype.isPrototypeOf(p1))  //true
console.log(Point.prototype.isPrototypeOf(p1))   //true

let subject = {id:`INT201`,title:`javascript`}
console.log(Object.prototype.isPrototypeOf(subject))    //true
console.log(Point.prototype.isPrototypeOf(subject))     //false



// USING  Object.create()
const lecSubject = Object.create(subject)
console.log(`subject = `, subject)                          // subject =  { id: 'INT201', title: 'javascript' }
console.log(`lecSubject = `, lecSubject)                    // lecSubject =  {}
console.log(`lecSubject ID = `, lecSubject.id)              // lecSubject ID =  INT201
console.log(`lecSubject Title = `, lecSubject.title)        // lecSubject Title =  javascript
lecSubject.title = `Client Side Web Programing I`
console.log(`subject = `, subject)                          // subject =  { id: 'INT201', title: 'javascript' }
console.log(`lecSubject = `, lecSubject)                    // lecSubject =  { title: 'Client Side Web Programing I' }



let square1={
    side:5,
    //area: function(){
    area(){
        return this.side*this.side
    }
}
console.log(square1.side)
console.log(square1.area())

let square2={
    side:2
}
console.log(square2.side)
// console.log(square2.area()) 
// TypeError: square2.area is not a function
// เป็นข้อจำกัดของ แบบ iteral คือต้องสร้าง function ใหม่ทุกครั้งที่ประกาศ Object ทำให้ยากในการแก้ไข
{
class Square{
    constructor(side){
        this.side = side
    }
    area(){
        return this.side*this.side
    }
}
console.log(`--- USE CLASS ---`)
const square1 = new Square(5)
const square2 = new Square(2)
console.log(square1)
console.log(square1.area())
console.log(square2)
console.log(square2.area())

}
console.log(`--- USE FUNCTION ---`)
{
function Square(side){
    this.side=side
}
function getArea(){
    return this.side*this.side
}

const square1 = new Square(5)
console.log(square1)
square1.area=getArea
console.log(square1.area())
const square2 = new Square(2)
console.log(square2)
square2.area=getArea
console.log(square2.area())
}

let book1 = {
    isbn:12345678,
    title:`Javascript`
}
let bookkeys = Object.keys(book1)
let bookValues = Object.values(book1)
console.log(bookkeys)
console.log(bookValues)