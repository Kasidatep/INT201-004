// function declaration
function getLastElement(arr){
    return arr?.[arr.length-1]
}

let arr = [0,1,2,3,4,5]
let arr_undefined
//execute function declaration
console.log(getLastElement(arr))            //5
console.log(getLastElement(arr_undefined))  // undefined

//function expression
const doSomething = function(base,exp){
    return base ** exp          //power
}
//execute function expression
console.log(doSomething(5,2))   //25
console.log(typeof doSomething) //function
console.log(doSomething)        //[Function: doSomething]

let doIt=doSomething            //assign function doSomething to doIt
let doIt3_2 = doSomething(3,2)  //assign return result of dosomething(3,2) to varriable <doIt3_2>
console.log(typeof doIt)        // function
console.log(doIt(3,2))          //9
console.log(typeof doIt3_2)     // number
console.log(doIt3_2)            //9

let arrayTest = [0,1,2,3,4,5]
function changeLastIndex(array,changeTo){
    array[array.length-1] = changeTo
    return array
}
console.log(arrayTest)                       //[ 0, 1, 2, 3, 4, 5 ]
console.log(changeLastIndex(arrayTest,100))  //change last index to 100
console.log(arrayTest)                       //[ 0, 1, 2, 3, 4, 100 ]