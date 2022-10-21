//arguments object
function printNumbers1(num1, num2, num3) {
    console.log(`argument length: ${arguments.length}`)
    console.log(arguments[0]) //5
    console.log(arguments[1]) //10
    console.log(arguments[2]) //15
  }
  printNumbers1(5, 10, 15)
  
  function printNumbers2(num1, num2, num3) {
    for (const argu of arguments) {
      console.log(argu)
    }
  }
  printNumbers2(5, 10, 15)
  
  function updateArgument(x, y) {
    console.log(x) //10
    arguments[0] = 555
    console.log(x) //555
  }
  updateArgument(10, 5)
  
  //function parameters
  //default parameter
  function who(name = 'unknown') {
    return name
  }
  console.log(who()) //unknown
  console.log(who('Umaporn'))
  
  //rest parameters
  function sum(opsName, ...theNumbers) {
    console.log(opsName) //'sum'
    let total = 0
    for (const num of theNumbers) {
      total += num
    }
    return total
  }
  
  console.log(sum('sum', 1, 2, 3))
  console.log(sum('sum', 1, 2, 3, 4, 5))
  
  //spread parameters
  function sum(num1, num2, num3) {
    return num1 + num2 + num3
  }
  let nums = [5, 20, 15]
  //spread parameter
  console.log(sum(...nums)) //40
  
  //destructuring array passed as a function parameter
  function arrayAdd1([x1], [y1]) {
    return x1 + y1
  }
  const a = [5, 8]
  const b = [2, 7]
  console.log(arrayAdd1(a, b)) // 7
  
  function arrayAdd2([x1, y1], [x2, y2]) {
    return x1 + x2 + y1 + y2
  }
  console.log(arrayAdd2([1, 2], [3, 4])) // [4,6]
  
  function arrayAdd3([x1, y1], [x2, y2]) {
    return [x1 + x2, y1 + y2]
  }
  const x = [1, 2]
  const y = [3, 4]
  console.log(arrayAdd3(x, y)) // [4,6]
  
  //destructuring object properties passed as a function parameter
  const students = {
    studentId: 64001,
    displayName: 'jsGuy',
    fullName: {
      firstName: 'Somchai',
      lastName: 'DeeJai'
    }
  }
  
  function studentId({ studentId }) {
    return studentId
  }
  
  console.log(studentId(students)) //64001
  
  function getFirstName({ displayName, fullName: { firstName } }) {
    return `${displayName} is ${firstName}`
  }
  
  console.log(getFirstName(students)) //jsGuy is Somchai
  
  //Combined Array and Object Destructuring
  function getPersonName([, { name }]) {
    return name
  }
  
  const person = [
    { id: 1, name: 'Suda' },
    { id: 2, name: 'Surapong' },
    { id: 3, name: 'Somchai' }
  ]
  console.log(getPersonName(person)) // Sompong