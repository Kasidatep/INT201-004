//Note:: function
// function declaration ==>  ประกาศฟังก์ชั่นปกติ มี keyword ฟังก์ชัน
// function expresstion ==> ประกาศฟังก์ชันไว้ในตัวแปร
// arrow fuction ==> ใช้เครื่องหมาย => 
// arrow function one parameter not () ex.. num => {} // two or more much have () ex.. (num1,num2,num3) => {}
// -------------- one line oparation sane line as parameter can remove {} and return // two or more much have { **********
//                                                                                                             return ****
//                                                                                                             }
// testing 51

//1. Function declaration 
function doubleNum1(num) {
  return num + num
}
console.log(doubleNum1(5))
//2. Function expression
const doubleNum2 = function (num) {
  return num + num
}
console.log(doubleNum2(5))
//3. Arrow Function
//3.1 Arrow Function (one parameter) Break Down
// 3.1.1 Remove the word "function" and place arrow between the argument and opening body bracket
const doubleNum3 = (num) => {
  return num + num
}
console.log(doubleNum3(5))
// 3.1.2 Remove the body braces and word "return" -- the return is implied.
const doubleNum4 = (num) => num + num
console.log(doubleNum4(5))
// 3.1.3 Remove the argument parentheses
const doubleNum5 = (num) => num + num
console.log(doubleNum5(5))

//3.2 Arrow Function (two parameter)
//3.2.1 one line statement of arrow function , no need to use {} and no need to put "return" to send a function result to caller
const addition1 = (x, y) => x + y
console.log(addition1(5, 3))
//3.2.2 if you use {} for one line statement of arrow function, you must be put "return" to send a function result to caller
const addition2 = (x, y) => {
  return x + y
}
console.log(addition2(5, 3))
//3.2.3 if you have more than one statements, you have to use  {} and must be put "return " to send a function result to caller
const average = (x, y) => {
  const sum = x + y
  return x + y / 2
}
console.log(average(5, 3))


//testing 
const multi2 = num => num * num
console.log(multi2(2))
