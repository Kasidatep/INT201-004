class Person {
     fav = []
             // John    Doe
    constructor(fname, lastname){
        this.fistname=fname
        this.lastname=lastname
    }
    setFirstName(firstname){
        this.fistname = firstname
    }
    getFirstName(){
        return this.fistname 
    }
    getName(){
        return this.fistname+' '+this.lastname
    }
    addFavMovie(movie){
        return this.fav.push(movie)
    }
    getFavMovie(){
        return this.fav
    }
}
const john = new Person(`John`,`Doe`)

console.log(john)
console.log(john.getFirstName())
console.log(john.getName())
console.log(john.getFavMovie())
console.log(john.addFavMovie('aaa'))
console.log(john.addFavMovie('bbb'))
console.log(john.getFavMovie())
console.log(john)

// class numOperration {
//     constructor(num1 = 1, num2 = 1){
//         this.num1=num1
//         this.num2=num2
//     }
//     add(){
//         return this.num1+this.num2
//     }
//     multiply(){
//         return this.num1*this.num2
//     }
//     subtraction(){
//         return this.num1-this.num2
//     }
// }