// array destructuring
const [m] = [10, 20, 30, 40]
console.log(m) //10

const [, , n] = [8, 16, 24, 32]
console.log(n)  //24

const [a, b] = [5, 10]
console.log(a)  //5
console.log(b)  //10

const [x, y, ...z] = [5, 10, 15, 20, 25]
console.log(z) // [15,20,25]

//a simple array of numbers
let nums = [15, 30, 42]
console.log(nums)  //[15,30,42]

// array contains a different type of values
let diffArr = [10, 'in progress', true]
console.log(diffArr) //[10, 'in progress', true]

// array contains a nested arrays
let colors = [
    ['yellow', 'red', 'orange'],
    ['blue', 'green', 'purple']
]
console.log(colors) //[ ['yellow', 'red', 'orange'],  ['blue', 'green', 'purple'] ]


// array contains a collection of objects
let posts = [
    {
        id: 1,
        title: 'Fail fast and Learn Fast',
        body: 'Do not give up, just take some rest and go on',
        user: {
            id: 9,
            displayName: 'Somchai'
        },
        tags: ['learn', 'mindset', 'EF']
    },
    {
        id: 2,
        title: 'Practices make you better',
        body: 'Push yourself because Noone else to do it for you',
        user: {
            id: 12,
            displayName: 'Somsak'
        },
        tags: ['practice', 'mindset']
    }
]
console.log(posts)

const [, { id: code, title, user: { id, displayName: name }, tags: [t1, t2] }] = posts
console.log(`CODE ${code}: ${title} ==> user[${id}] ${name} \t Tag[1: ${t1}, 2: ${t2}]`)


// spread operator
let founders = ['John', 'Mary', 'Susan']
let webOwners = [...founders, 'Adam', 'Ann']
console.log(webOwners)  // ['John', 'Mary', 'Susan', 'Adam', 'Ann']
let friendGreeting = 'Hello'
let greeting = [...friendGreeting]
console.log(greeting) // [ 'H', 'e', 'l', 'l', 'o' ]


//Array() constructor
const items = new Array()
console.log(items) //[]
console.log(items.length) // 0

let students = new Array(10) //10 is an initial length
console.log(students) //[empty 10 item]
console.log(students.length)  // 10
students = [1,2,3,4,5,6,7,8,9,10,11,12]
console.log(students)  //[1,2,3,4,5,6,7,8,9,10,11,12]
console.log(students.length)  // 12

const scores = new Array(22, 65, 30)
console.log(scores) //[22, 65, 30]
console.log(scores.length)  //3
scores[3] = 100
console.log(scores) //[22, 65, 30, 100]

// Array.of()
const xx = Array.of(10) //10 is the first element of x
console.log(xx)    // [10]
console.log(xx[0]) // 10

//Array.from()
const yy = Array.from(xx)
console.log(yy) // [10]
yy[1] = 50      
console.log(yy)  //[10, 50]
delete yy[1]
console.log(yy) //[10, 1 empty item]
console.log(yy.length) // 2
console.log(xx) 