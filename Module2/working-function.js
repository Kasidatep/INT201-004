const obj1 = {}
const obj2 = { id: 1, title: `javascript` }

console.log(JSON.stringify(obj1) === `{}` ? `empty` : `not empty`)
console.log(JSON.stringify(obj2) === `{}` ? `empty` : `not empty`)
console.log(Object.keys(obj1).length === 0 ? `empty` : Object.keys(obj1))
console.log(Object.keys(obj2).length === 0 ? `empty` : Object.keys(obj2))

const buyer = {
    id: 123,
    fullname: {
        firstname: `Somchai`,
        lastname: `Jaidee`
    }

}
const address = {
    no: 555,
    street: `Pracha U thid`,
    province: `Bangkok`
}
// spread operator
const buyerProfile = { ...buyer, ...address }  // merge
console.log(buyerProfile)
const newBuyer = { ...buyer, totalPoint: 0 }   // copy and replece
console.log(newBuyer)

const { fullname: displayName } = buyer
//               ^ change variable name
console.log(displayName)
const { fullname: { firstname: fname, lastname: lname } } = buyer
console.log(fname)
console.log(lname)

// rest
const { id, ...buyerDetails } = buyer
//            ^ rest
console.log(buyerDetails)

//destruction array with nested object
const products = [
    {
        productId: 1,
        productDetail: {
            name: `pen`,
            imageURL: `https://google.com/`,
            price: 50,
            catagories: [
                `wook`, `blue`, `kids`
            ]
        }
    },
    {
        productId: 2,
        productDetail: {
            name: `book`,
            imageURL: `https://book.com/`,
            price: 500,
            catagories: [
                `study`, `programming`, `it`, `java`
            ]
        }
    },
    {
        productId: 3,
        productDetail: {
            name: `table`,
            imageURL: `https://table.shop/`,
            price: 7000,
            catagories: [
                `study`, `general`, `kids`
            ]
        }
    }
]
const [, , { productId }] = products
console.log(productId)
const [, { productDetail: { name: productName, price: productPrice } }] = products
console.log(productName)
console.log(productPrice)
const [, { productDetail: { catagories: [, catagories2, , catagories4, catagories5] } }] = products
console.log(catagories2)
console.log(catagories4)
console.log(catagories5)

// without parameter
//function declaration (must have function name)
function hello1() {
    return `hello world`
}
//function expression (might not have function name)
const hello2 = function () {
    return `hello world`
}
//arrow function (expression)
const hello3 = () => `hello world`

console.log(hello3())

//one parameter
//function declaration (must have function name)
function greeting1(msg) {
    return `hello, ${msg}`
}
console.log(greeting1('Boys'))
//function expression (might not have function name)
const greeting2 = function (msg) {
    return `hello, ${msg}`
}
console.log(greeting2('Girls'))
//arrow function (expression)
const greeting3 = msg => `hello, ${msg}`
//full syntax  (msg)=>{return `hello, ${msg}`}
console.log(greeting3('Guys'))

//two parameters
//function declaration (must have function name)
function addition1(a, b) {
    return a + b
}
//function expression (might not have function name)
const addition2 = function (a, b) {
    return a + b
}
//arrow function (expression)
const addition3 = (a, b) => { return a + b }

console.log(`----------- week 9 ------------`)


//anonymous function with keyword 'function'
const getChar1 = function (msg, index) {
    return msg[index]
}
console.log(getChar1('hello world', 3))

//anonymous function with arrow function
const getChar2 = (msg, index) => {
    return msg[index]
}
console.log(getChar2('hello world', 3))


//function scope
function outer(a) {
    let b = 2
    function inner1(c) {
        let b = 20
        let d = 4
        console.log(`inner1:b ${b}`)
        return d + c + b
    }
    const resultInner1 = inner1(100)
    console.log(`resultInner1 :${resultInner1}`)
    console.log(`outer: b${b}`)
    return a + b
}
console.log(outer(10))


let mid = 20
let final = 5
let firstname = 'Ada'
// sum function is defined in the global scope
function sum() {
    return mid + final
}
console.log(`#1 sum: ${sum()}`) // Returns 25
mid = 10
console.log(`#2 sum: ${sum()}`) // Returns 15
function getScore() {
    let mid = 10
    let final = 30
    //yourScore is nested function
    function yourScore() {
        return firstname + ' scored ' + (mid + final)
    }
    return yourScore
}
const scoreFn = getScore()
console.log(scoreFn())


// nested function
{
    function outer() {
        function inner(x) {
            return 'inner here ' + x
        }
        return inner
    }
    // 1
    console.log(outer()('someone'))
    // 2
    const inFn = outer()
    console.log(inFn('somewhere'))

    //nested function
    function average(nums) {
        function sum() {
            let total = 0
            for (const num of nums) {
                total += num
            }
            return total
        }
        return sum() / nums.length
    }
    console.log(average([1, 2, 3, 4, 5]))

    //independence functions
    function sum2(nums) {
        let total = 0
        for (const num of nums) {
            total += num
        }
        return total
    }
    function average2(nums) {
        return sum2(nums) / nums.length
    }
    console.log(average2([1, 2, 3, 4, 5]))
}


// closer
// feature 1. closer is nested function
//         2. outer function return closer function 
//         3. variable in closer all function in closer can use ; outer cannot use
{
    function counter() {
        //free variable    
        let count = 0
        function increment() {
            return count++
        }
        function decrement() {
            return count--
        }
        function getCount() {
            return count
        }
        return {
            increment,
            decrement,
            getCount
        }
    }
    //object destructuring
    const { increment, decrement, getCount } = counter()
    increment()
    increment()
    console.log(getCount())
    const c = counter()
    // c={increment:increment, decrement:decrement, getCount:getCount}
    c.increment()
    c.increment()
    c.increment()
    c.decrement()
    console.log(c.getCount())
}

// argument
{
    function doSomething(a, b, c, d) {
        console.log(a)
        console.log(b)
        console.log(c)
        console.log(d)
        for (const a of arguments) {
            console.log(a)
        }
        arguments[0] = 1000
        console.log(a)
        console.log(arguments.length)
    }
    doSomething(10, 20, 300)
}

//rest parameter 
{
    function doSomething(x, ...other) {
        console.log(x)
        console.log(other)
    }

    doSomething('Hi', `Hello`, `Sawatdee`, `Hey`)
}

//spread parameter 
{
    function sum(num1, num2, num3 = 0) {
        console.log(num1)
        console.log(num2)
        console.log(num3)
        return num1 + num2 + num3
    }

    let nums = [5, 20, 15]
    let num2 = [2, 20]
    //spread parameter 
    console.log(sum(...nums)) //40
    console.log(sum(...num2, ...nums)) //27
}

{
    function arrayAdd1([x1], [y1]) {
        return x1 + y1
    }
    const a = [5, 8]
    const b = [2, 7]
    console.log(arrayAdd1(a, b)) // 7

    function arrayAdd2([x1, y1], [x2, y2]) {
        return x1 + x2 + y1 + y2
    } console.log(arrayAdd2([1, 2], [3, 4])) // 10


    function arrayAdd3([x1, y1], [x2, y2]) {
        return [x1 + x2, y1 + y2]
    }
    const x = [1, 2]
    const y = [3, 4]
    console.log(arrayAdd3(x, y)) // [4,6 ]

    const students = { studentId: 64001, displayName: 'jsGuy', fullName: { firstName: 'Somchai', lastName: 'DeeJai' } }

    function studentId({ studentId }) {
        return studentId
    }

    console.log(studentId(students)) //64001

    function getFirstName({ displayName, fullName: { firstName } }) {
        return `${displayName} is ${firstName}`
    }
    console.log(getFirstName(students)) //jsGuyis Somchai

    const person = [{ id: 1, name: 'Suda' }, { id: 2, name: 'Surapong' }, { id: 3, name: 'Somchai' }]
    console.log(getPersonName(person))

    function getPersonNameIndex1([, { name }]) { return name }
}