const products = [
    { id: 123, name: 'bag' },
    { id: 2, name: 'pen' },
    { id: 33, name: 'BAG' }
]

// forEach()
let productName = []
products.forEach(element => {
    productName.push(element.name)
})

// Map()
// can edit array and return array
// can filter propertie of object and return array
const productName2 = products.map(element => element.name)

const productNameStartWithB = products.map(product => product.name)
    .filter(product => product.toUpperCase().startsWith(`B`))

console.log(productName)
console.log(productName2)
console.log(productNameStartWithB)
//every >> check ture/false all element is ture == ture 
//         a least one is false  == false
//some check ture/false a least one element is ture == ture 
//         all element is false  == false

const months = ['Jan', 'March', 'April', 'June']
//insert at index 2 with two elements 'A' and 'B'
months.splice(2, 0 ,'A', 'B')
console.log(months)     //[ 'Jan', 'March', 'A', 'B', 'April', 'June' ]

//remove 1 element at index 2
months.splice(2, 1 )
console.log(months)     //[ 'Jan', 'March', 'B', 'April', 'June' ]

//replace at index 3 with 'X', 'Y'
months.splice(3, 2, 'X', 'Y')
console.log(months)     //[ 'Jan', 'March', 'B', 'X', 'Y' ]

months.sort();
console.log(months);
// expected output: Array ['B', 'Jan', 'March', 'X', 'Y']

const numarray = [1, 30, 4, 21, 100000];
numarray.sort();
console.log("SORT : "+numarray);
// expected output: Array [1, 100000, 21, 30, 4]

//          compare function ascending order
numarray.sort((a,b)=>a-b);
console.log("SORT ASC : "+numarray);
// expected output: Array [1, 4, 21, 30, 100000]

//            compare function with descending order
numarray.sort((a,b)=>b-a);
console.log("SORT DESC : "+numarray);
// expected output: Array [ 100000, 30, 21, 4, 1 ]

numarray.reverse()
console.log(numarray);
//output: Array [1, 4, 21, 30, 100000]

