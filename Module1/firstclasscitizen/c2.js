// we can send function as parameter

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

function calculator (n1,n2,op){
    return op(n1,n2)
}

console.log(calculator(10,20,add))
console.log(calculator(10,20,remove))
console.log(calculator(10,20,multiply))
console.log(calculator(10,20,devide))