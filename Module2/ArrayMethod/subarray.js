const months = ['Jan', 'March', 'April', 'June']

// splice()
// changes the contents of an array by removing or 
// replacing existing elements and/or adding new elements in place. 
// return----------  An array containing the deleted elements. 
//```` If only one element is removed, an array of one element is returned.
//```` If no elements are removed, an empty array is returned.
// To access part of an array without modifying it, see slice().
console.log(Array.prototype.splice)
console.log(months) // [ 'Jan', 'March', 'April', 'June' ]
console.log(months.splice(1,2)) // delete 2 element start with index 1 // [ 'March', 'April' ]
console.log(months) // [ 'Jan', 'June' ]
console.log(months.splice(0,0,'March', 'April')) // add two element at index 0 []
console.log(months) // [ 'March', 'April', 'Jan', 'June' ]
console.log(months.splice(1,2,'January','April')) // repeat 2 element with 'January','April' to index 1  //[ 'April', 'Jan' ]
console.log(months) // [ 'March', 'January', 'April', 'June' ]
const removeMonth = months.splice(2,1) // delete 1 element from array start at index 2 [aprill]
console.log(months)       // [ 'March', 'January', 'June' ]
console.log(removeMonth)  // ['April' ]

const animals = ['ant', 'bison', 'camel', 'duck', 'elephant']
//slice()
//  returns a shallow copy of a portion of an array into a **new array** object selected from start to end (end not included)
// where start and end represent the index of items in that array. 
// ````The original array will not be modified.````
console.log(Array.prototype.slice)
console.log(animals.slice(2))   // new array start at index 2 ['camel', 'duck', 'elephant'] can create new variable collect this result 
console.log(animals.slice(-2))  // new array have two last element in array // ['duck', 'elephant']
console.log(animals)            // [ 'ant', 'bison', 'camel', 'duck', 'elephant' ] original array not change
console.log(animals.slice(2,4)) // new array start at 2 end 4 [2 element >> index 2, 3] // ['camel', 'duck']
console.log(animals.slice(2,-1))// new array start at 2 end at before last(1) element in array [2 element >> index 2,3] // ['camel', 'duck']
console.log(animals.slice(2,-2))// new array start at 2 end at before last 2 element in array  [1 element >> index 2]   // ['camel']
console.log(animals.slice())    // same original array  [ 'ant', 'bison', 'camel', 'duck', 'elephant' ] 

const num = [1, 2, 3, 4];
//fill() 
// method changes all elements in an array to a static value, 
// from a start index (default 0) to an end index (default array.length). 
// It returns the modified array.
console.log(Array.prototype.fill)
console.log(num)                // [1, 2, 3, 4] 
console.log(num.fill(9,2))      // [1, 2, 9, 9]   change value to 9 when index 2++ 
console.log(num.fill(7,2,3))    // [ 1, 2, 7, 9]  change value to 7 when index 2++ and index < 3
console.log(num.fill(5,-2))     // [ 1, 2, 5, 5]  change value to 5 when it last 2 element
console.log(num)                // [ 1, 2, 5, 5 ] original array it ````change````
console.log(num.fill(8,1,-2))   // [ 1, 8, 5, 5 ] change value to 8 when index 1++ and not the last 2 element
