//callbackFn  ==> ex.. words.filter((word) => word.length > 6)
// 1. arrow callbackFn   ==> words.filter( word => w.startsWith("e"))
// 2. passing callbackFn ==> words.filter(wordstartsWithe)
//      function wordstartsWithe(word){
//          return word.startsWith("e")
//      }
// 3. inline callbackFn  ==> words.filter(function(word){return word.startsWith("e")})


//1. Arrow function passing to filter function
const words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present']
const result = words.filter((word) => word.length > 6)
console.log(result)
// expected output: Array ["exuberant", "destruction", "present"]

//2. Callback function passing to filter function
function isMorethanFive(value) {
    return value > 5
}
const filterNums = [12, 5, 8, 130, 44].filter(isMorethanFive)
console.log(filterNums)
// filterNums is [12, 8, 130, 44]

//3. Inline callback function passing to filter function
const nums = [-3, -2, -1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13]

console.log(
    nums.filter(function isPrime(num) {
        for (let i = 2; num > i; i++) {
            if (num % i === 0) {
                return false
            }
        }
        return num > 1
    })
)

// testing  

function wordstartsWithe(word){
    return word.startsWith("e")
  }
const collectWord = words.filter(wordstartsWithe)
 
console.log(collectWord)