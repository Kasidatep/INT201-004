/* 3. we can return function as a 
result of anather function
 */

function saySomething(say){
    return say
}

function doSomething(){
    return saySomething   // return function 
}

let message = "Hello"
let doIt = doSomething()  // assign function

console.log(doIt("Hi!!"))

console.log(doSomething()(message))

// doIt มีค่าเป็น doSomething()

function doSomething2(message){
    return function saySomething2(say){
            return say + message
            }
}

console.log(doSomething2("Kasidate")("Hey.. "))

