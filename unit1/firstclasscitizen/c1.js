//1 we can assign function to variable

function add (n1, n2){
    return n1+n2
}

function remove (n1, n2){
    return n1-n2
}

function multiply (n1, n2){
    return n1*n2
}

function devide (n1, n2){
    return n1/n2
}

let sum = add
console.log(typeof sum)
console.log(sum)
console.log(sum(10, 20))
console.log("-------------------")
let sum2 = add(10,20)
console.log(typeof sum2)
console.log(sum2)
// console.log(sum2(10, 20))


console.log(add(10,20))
console.log(remove(10,20))
console.log(multiply(10,20))
console.log(devide(10,20))
