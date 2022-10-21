const pets = ['cat', 'dog', 'bat']
const num = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 15]
const hellojs = `helloJavaScript`

//includes() method
// determines whether an array includes a certain value among its entries
// returning true when can be found or false  when can not found as appropriate.
console.log(Array.prototype.includes)
console.log(num.includes(2))            // true
console.log(pets.includes(`dog`))       // true
console.log(pets.includes(`do`))        // false ,, it true when string match as least one element in array
console.log(hellojs.includes(`Java`))   // true  it includes string mean:: a part of string match is true 
console.log(hellojs.includes(`java`))   // false ... case sensitive

//reverse()
//reverses an array in place and returns the reference to the ```[same array has reverse]```
//the first array element now becoming the last, and the last array element becoming the first. 
//In other words, elements order in the array will be turned towards the direction oppositeto that previously stated.
console.log(Array.prototype.reverse)
console.log(`original: ${pets}`)
pets.reverse()  // return to same array *** warning and danger
console.log(`reverse: ${pets}`) //['cat', 'dog', 'bat'] >> [ 'bat', 'dog', 'cat' ]

const products = [
    { id: 123, name: 'bag' },
    { id: 2, name: 'pen' },
    { id: 33, name: 'BAG' }
]
const months = ['March', 'Jan', 'Feb', 'Dec'];
const positiveInteger = [1, 30, 4, 21, 100000];

//sort()
// returns the reference to the same array, now sorted. ```[same array new sort]```
// The default sort order is ascending, built upon converting the elements into strings,
// then comparing their sequences of UTF-16 code units values.
console.log(Array.prototype.sort)
products.sort((a, b) => a.id - b.id)        //compare function
console.log(products)                       //return in same array
console.log(`integersort: ${positiveInteger.sort()}`) 
            // 1,100000,21,30,4 because it change to string before sort
            // cannot use this //// when compare number much have compare function

console.log(`integersort: ${positiveInteger.sort((a, b) => a - b)}`) // 1,4,21,30,100000
console.log(`monthsort: ${months.sort()}`)
const sortByProductName = products.sort(sortName)
function sortName(a, b) {                   // sort function // compare function
    const nameA = a.name.toLowerCase()      // ignore case sensitive ..> `B` === `b`
    const nameB = b.name.toLowerCase()
    if (nameA < nameB) return -1
    else if (nameA > nameB) return 1
    else return 0
}

console.log(sortByProductName) //  { id: 33, name: 'BAG' }, { id: 123, name: 'bag' }, { id: 2, name: 'pen' }
            // in array index BAG < index bag //
//concat()
//merge two or more arrays. This method does not change the existing arrays, 
//but instead ----------- returns a [new array.]------------
console.log(Array.prototype.concat)
const a_c = ['a', 'b', 'c']
const d_f = ['d', 'e', 'f']
const a_f = a_c.concat(d_f)
console.log(a_f) // [ 'a', 'b', 'c', 'd', 'e', 'f' ]


//indexOf()
// returns the --[first index]-- at which a given element can be found in the array, 
// or [-1] if it is not present.
const beasts = ['ant', 'bison', 'camel', 'duck', 'bison']
console.log(Array.prototype.indexOf)
console.log(beasts.indexOf('bison'))        // 1
                                // start from index 2
console.log(beasts.indexOf('bison', 2))     // 4    bison ,.. start with index 2
console.log(beasts.indexOf('giraffe'))      // -1   not found in the array