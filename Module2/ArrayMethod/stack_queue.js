const pets = ['cat', 'dog', 'bat']

//push()
//adds one or more elements to the end of an array 
// returns the new length of the array. [result of new array.length]
console.log(Array.prototype.push)
pets.push(`rabbit`)
console.log(pets)               //[ 'cat', 'dog', 'bat', 'rabbit' ]
console.log(pets.push(`bird`))  //return new length of array is 5  // 5
console.log(pets)               //[ 'cat', 'dog', 'bat', 'rabbit' ]
console.log(pets.push(`fish`, `guinea pigs`)) //push two element in same time // return 7
console.log(pets)               //[ 'cat', 'dog', 'bat','rabbit','bird','fish','guinea pigs']

//pop()
//removes the last element from an array and
//returns that element removed. This method changes the length of the array. [array.length-1]
console.log(Array.prototype.pop)
console.log(pets.length     // 7
console.log(pets.pop())     // 'guinea pigs' // can pop each one element in array
console.log(pets)           //[ 'cat', 'dog', 'bat', 'rabbit', 'bird', 'fish' ]
console.log(pets.length)    // 6
console.log(pets.pop())     //'fish'
console.log(pets.pop())     //'bird'
console.log(pets)           //[ 'cat', 'dog', 'bat', 'rabbit' ]

const nums = [`one`, `two`, `three`]
// unshift()
// adds one or more elements to the beginning of an array and 
// returns the new length of the array.
console.log(Array.prototype.unshift) //function unshift()
console.log(nums)                   // [ 'one', 'two', 'three' ]
console.log(nums.unshift(`four`))   // 4 // return new length of array
console.log(nums)                   // [ 'four', 'one', 'two', 'three' ]
console.log(nums.unshift(`five`, `six`))  // 6
console.log(nums)                   // [ 'five', 'six', 'four', 'one', 'two', 'three' ]


//shift()
//emoves the first element from an array and 
//returns that removed element. This method changes the length of the array. [array.length-1]
console.log(Array.prototype.shift)
console.log(nums)         // [ 'five', 'six', 'four', 'one', 'two', 'three' ]    
console.log(nums.shift()) // five
console.log(nums)         // [ 'six', 'four', 'one', 'two', 'three' ]    
console.log(nums.length)  // 5
console.log(nums.shift()) // six
console.log(nums.shift()) // four
console.log(nums)         // [ 'one', 'two', 'three' ]    