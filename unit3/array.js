let nums = [1,2,3,4,5]

// for of use in array >> loop print data in array
// For in use in object >> can print name of variable 

for (const num of nums){
    console.log(`----> ${num}`)
}
console.log(`// spread operator`)
let a = []
let b = null
let c 
let d = [1,2,3,4]
console.log(a?.length)
console.log(b?.length)
console.log(c?.length)
console.log(d?.length)

console.log(`// Array() Constractor`)
let a2 = new Array()
let b2 = new Array(10)
let c2 = new Array(3,2,1,"Testing")
console.log(a2)
console.log(b2)
console.log(c2)

console.log(`//Array.of()`)
let aof = Array.of()
let bof = Array.of(2)
let cof = Array.of(1,2,3)
console.log(aof)
console.log(bof)
console.log(cof)

console.log('//Array.from()')
let afrom = [5,10,15,20,25,30]
let bfrom = Array.from(afrom)
let dof = Array.of(2)
console.log(afrom)
console.log(bfrom)
console.log(dof)
console.log(afrom)
delete afrom[2]
console.log(afrom)
delete afrom[0]
console.log(afrom)
delete afrom[4]
delete afrom[5]
console.log(afrom)

console.log('Idestructuringassignment')
let arr1 = ["Hello","My name is","Kasidate","Bank","Phlaiphueak"]
let greeting1 = arr1[0]
let greeting2 = arr1[1]
let greeting3 = arr1[2]
console.log(greeting1)
console.log(greeting2)
console.log(greeting3)
let [x,y,z] = arr1
console.log(x)
console.log(y)
console.log(z)
let [,,s] = arr1
console.log(s)
let [f, ...oth] = arr1
console.log(oth)

console.log(`>> spread`)
let ar3 = [1, 2, 3,4]
let b3 = [0, ...ar3, 4]
console.log(ar3)
console.log(b3)

console.log(`>> rest`)
let [ds, ...other]=ar3
console.log(ds)
console.log(other)

console.log(`Iterating Arrays`)
let letters= [...'Helloworld'] //spread array 
console.log(letters)
msg   = ''
msg2   = ''
msg3   = ''
for (let letter of letters){
    msg   += letter + ', '
}
console.log(msg)
for (let letter of letters.entries()){
    msg2   += `[`+ letter +`], `
}
console.log(msg2)
for (let [index, letter] of letters.entries()){
    msg2   += `[`+ index+`:` +letter +`], `
}
console.log(msg2)
