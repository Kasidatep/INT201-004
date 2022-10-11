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

// without parameter//function declaration (must have function name)
function hello1() {
    return `hello world`
}
//function expression (might not have function name)
const hello2 = function () {
    return `hello world`
}
//arrow function (expression)
const hello3 = () => `hello world`
//full syntax  (msg)=>{return `hello, ${msg}`}
console.log(hello3())
//one parameter//function declaration (must have function name)
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
//two parameters//function declaration (must have function name)
function addition1(a, b) {
    return a + b
}
//function expression (might not have function name)
const addition2 = function (a, b) {
    return a + b
}
//arrow function (expression)
const addition3 = (a, b) => { return a + b }