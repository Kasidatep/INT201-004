// const obj = { keya: 'value1' }
// console.log(obj.keya)
// obj.keya.toUpperCase()
// console.log(obj.keya)
// obj.keya = 'valueofkey'
// console.log(obj.keya)
// obj.keya = obj.keya.toUpperCase()
// console.log(obj.keya)


// let a = 10
// {
//     a = 1
//     var b = 100
//     console.log(a)  //1
//     function hello(){
//         var msg = 'hello'
//     }
// }
// console.log(b) //100

// const objName ={key:'value'}
// objName.key = '2'
// console.log(objName)

// let c = 'abc'
// console.log(`${objName}`)
// console.log(objName)

// let num = '123'
// console.log(typeof 1)
// console.log( Boolean(1))

// const z = b[0]??'it 9null'
// console.log(z)

// console.log('c'<'b')


// let count = 0;
// do {
// console.log(count)
// count++
// } while (count < 10)


// let arr = [null, undefined]
// console.log(arr??[])

// function doSomething(){
//     let z = 5
//     return z+1
// }
// doSomething()
// doSomething()
// doSomething()

// let i = 0
// let item = [1,2,3,4,5,6,7,8]
//  var total = 0
// do{

//     total += item[i]
//     //total = total+item[i]
//     i++
// }while(i<item.length)

// console.log(total)

let a = 0
function abc() {
    a = 2
    let b = 5
    let c
    {
        z = 8
    }
    {
        //
        let d = 3
        {
            let f = 7
            function efg() {
                var g = 2
                //me
            }
            let z = 2
        }
    }
}
// Doc()

// function Doc(){
//     console.log('do it')
// }


function doSomething(){
    function doIt(){
        console.log('do it')
    }
    return doIt
}

// typeof dosomething() return function
//console.log(typeof doSomething())
doSomething()()

let funcDoIt = doSomething()  //doIt
funcDoIt() //execute doit()
