// whis is arguments == all parameter in function arguments is array collect parameter 
// ex.. function(2,5,7,4){} arguments[0] = 2 \ arguments[1] = 5 \ arguments[2] = 7 \ arguments[3] = 4
// and can update argument ex.. arguments[1] = 555 parameterindex1 is change after this line to 555

// default parameter == [function person (name="N/A",ages=12)] when not send parameter function use default parameter
// function person (name="N/A",ages=12){}
// person("Somchai")    ==> ("somchai",12) ex ..// meaning 
// person(undefined,50) ==> ("N/A",50)
// person()             ==>  ("N/A",12)

// rest ==> ยุบหลาย ๆ ข้อมูล เป็น 1 array
// spread ==> แยก 1 array เป็นหลาย ๆ ข้อมูล
// ex..                               skip 2 element
// rest [1,2,3,4,5,6,7,8] => rest => [,,...restNum] => restNam = [3,4,5,6,7,8,]
// spread [9,8,7] => [1,2,3,...spread] => [1,2,3,9,8,7]

// note left rest         =_=          right spread   ex.. spread = [1,2,3]
// [a,b...rest] = [1,2,3,4,5,6]   |    all = [4,5,6,..spread] | mean_ex. all = [4,5,6,1,2,3]
// mean rest = [3,4,5,6]

// test line rest/spread -- 23
// destructoring ---------- 112/130

//test rest/spread
const [,,...doRest] = [1,2,3,4,5,6,7,8]
console.log(doRest) // [3,4,5,6,7,8,]
const inSpread = [1,2,3]
const doSpread = [7,8,9,...inSpread] 
console.log(doSpread) //[7,8,9,1,2,3]

//arguments object
function printNumbers1(num1, num2, num3, num4) {
    console.log(`argument length: ${arguments.length}`)
    console.log(arguments[0]) //5
    console.log(arguments[1]) //10
    console.log(arguments[2]) //15
    console.log(arguments[3]) //
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
    return console.log(`resurt : ${x+y}`)
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
  function arrayAdd1([,x1], [,y1]) {
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
  
  //Destructuring testing  
  const {studentId:id, fullName:{firstName:fname, lastName}, displayName:name, fullName:full} = students
  console.log(`---->> ${id} ${fname} ${lastName} [${name}]`)
  console.log(full)

  function StudentId({ studentId }) {
    return studentId
  }
  console.log(StudentId(students)) //64001
  
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

  //test Desructering
  const [,,{id:code, name:displayName}] = person
  console.log(`-->> ${code} ${displayName}`)

  
  const log = {
    title: 'client',
    detail: [
      {
        locale: 'th',
        lastEdit: '2022-08-14T09:40:22',
        title: 'history'
      }
    ],
    url: '/history/docs/js'
  }

  const {title, detail:[{locale,title:d_title}],url:linkLog} = log
  console.log(`LOG ${title} ==> ${locale}, ${d_title} more: '${linkLog}'`)