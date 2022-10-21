// forEach()
// loop element from array  return undefined {not return anything}
const helloWorld = [...'helloworld'] // or ['helloworld'] it same rerult
// const helloWorld = 'helloworld' cannot forEach look at a string +/or/+ must have []
let helloWorldUpper = ''
console.log(Array.prototype.forEach)
helloWorld.forEach(letter => {
    helloWorldUpper += letter.toUpperCase()
});
console.log(helloWorldUpper)  // HELLOWORLD

const products = [
    { id: 123, name: 'bag' },
    { id: 2, name: 'pen' },
    { id: 33, name: 'BAG' }
]
productId = []
products.forEach(product => productId.push(product.id)) //find element(obj) and push obj.id to new array
console.log(productId) // [ 123, 2, 33 ]
// Array method parameter element, index, originalArray
products.forEach((product, index, array) => console.log(product.name + " [" + index + "] id: " + array[index].id))
// bag [0] id: 123   pen [1] id: 2    BAG [2] id: 3


//filter()
// visit each element in array and check filter by callbackFn
// return ```new array``` had filter
console.log(Array.prototype.filter)
const num = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15]
function isPrime(num) {         // function is a callback function
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
}                       //call function isPrime
console.log(num.filter(isPrime))  // [2, 3, 5, 7, 11, 13]

// use arrow callbackFn 
let numFilter = num.filter(num => {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
})
console.log(numFilter)  // [ 2, 3, 5, 7, 11, 13 ]

// use inline callbackFn 
let numfilter = num.filter(function (num) {
    for (let i = 2; i < num; i++) {
        if (num % i === 0) {
            return false
        }
    }
    return num > 1
})
console.log(numfilter)  // [ 2, 3, 5, 7, 11, 13 ]

//filter()
// visit each element in array and check filter in callbackFn
// return ```new array``` had filter it true in filterFn
const negativeInteger = num.filter(num => num < 0)
console.log(num)              // -3,-2,-1,0,1,2,3,4,5,6,7,8,9,10,11,12,13,15 original
console.log(negativeInteger)  // [ -3, -2, -1 ]                              filter

//map()
// create a new array with the result of operation by callbackFn in a original array
// creates a new array populated with the results of calling a provided function on every element in the calling array
console.log(Array.prototype.map)
const negativeIntegerPowerTwo = negativeInteger.map(num => num * num) //power2 num
console.log(negativeIntegerPowerTwo)                                //[ -3, -2, -1 ] >> [ 9, 4, 1 ]
const mapProducts = products.map((product) => product.name)         // new array are collect productname of products
console.log(mapProducts)                                            //[('bag', 'pen', 'BAG')]

//find() 
//returns the first element in the provided array. If no values ==>> undefined
console.log(Array.prototype.find)
console.log(products.find(product => product.name === `pen`))                         // { id: 2, name: 'pen' }
console.log(products.find(product => product.name.startsWith(`B`)))                   // { id: 33, name: 'BAG' }
console.log(products.find(product => product.name.toUpperCase().startsWith(`B`)))     // { id: 123, name: 'bag' }

//findIndex()
//returns the index of the first element in an array. If no elements match, -1.
console.log(Array.prototype.findIndex)
console.log(products.findIndex(product => product.name === `pen`)) // 1
console.log(products.findIndex(product => product.name.startsWith(`B`))) //2
console.log(products.findIndex(product => product.name.toUpperCase().startsWith(`B`))) //0

// every()
// tests whether all elements in the array pass the test implemented by the provided function. 
// It returns a Boolean value. true when all is true 
// False when at least one is false
console.log(Array.prototype.every)
console.log(`${negativeInteger} are all negative => ${negativeInteger.every(num => num < 0)}`)    // true
console.log(`${num} are all negative => ${num.every(num => num < 0)}`)                            // false

//some()
// tests whether at least one element in the array passes the test implemented by the provided function
// It returns true if, in the array, it finds an element for which the provided function returns true;
// otherwise it returns false. It doesn't modify the array.
// as least one true ==> teue // false when all statement is false
console.log(Array.prototype.some)
console.log(`${negativeInteger} are some negative => ${negativeInteger.some(num => num < 0)}`)    // true
console.log(`${num} are some negative => ${num.some(num => num < 0)}`)                            // true
console.log(`${num} are 0 => ${num.some(num => num === 0)}`)                                      // true
console.log(`${negativeInteger} are 0 => ${negativeInteger.some(num => num === 0)}`)              // false

const shopingList = [
    { productName: `pen`, price: 20, quantity: 2 },
    { productName: `book a3`, price: 70, quantity: 1 },
    { productName: `rubber`, price: 5, quantity: 10 },
    { productName: `ruler`, price: 15, quantity: 3 },
    { productName: `CD writing pen`, price: 417, quantity: 1 },
]
// reduce()
// collectdata, current use for total price example
// return result of operation
console.log(Array.prototype.reduce)
const total = shopingList.reduce((previousTotal, currentTotal) => {
    console.log(`Price: ${currentTotal.price}\t Amount: ${currentTotal.quantity} \t Total: ${currentTotal.price * currentTotal.quantity} \tProductName: ${currentTotal.productName}`)
    return previousTotal + currentTotal.price * currentTotal.quantity
}, 0)
console.log(`Total:: ${total} ============================`)    // 622

const maxNum = num.reduce((max, num) => Math.max(max, num))
const findMax = num.reduce((max,num)=>{
    if(max<num) max=num
    return max
},0)
console.log(maxNum)   //15
console.log(findMax)  //15