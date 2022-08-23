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

console.log(doIt("Hi"))

console.log(doSomething()(message))



function doSomething("Hi"){
    return function saySomething(say){
            return say
            }
}

