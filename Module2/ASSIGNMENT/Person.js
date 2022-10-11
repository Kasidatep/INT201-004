class Person{
    constructor(fristName = `N/A`, lastName = `N/A`, dateOfBirth = new Date(Date.now())){
        this.fristName = fristName
        this.lastName = lastName
        this.dateOfBirth = dateOfBirth
    }
    getFullName(){
        return `${this.lastName}, ${this.fristName}`
    }
    getAges(){
        const diff_ms = Date.now()-this.dateOfBirth.getTime()
        const diff_date = new Date(diff_ms)
        return diff_date.getFullYear()-1970
    }
}

// function compare(anotherPerson){
//     return this?.fristName?.toLowerCase() ===  anotherPerson?.fristName?.toLowerCase() &&
//     this?.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
// }

Person.prototype.isEqual=function(anotherPerson){
    return this?.fristName?.toLowerCase() ===  anotherPerson?.fristName?.toLowerCase() &&
    this?.lastName?.toLowerCase() === anotherPerson?.lastName?.toLowerCase()
}

Person.prototype.toString=function(){
    return `name : '${this.getFullName()}', ages : ${this.getAges()}`
}

let p1 = new Person(`Kasidate`,`Phlaiphueak`,new Date(`2002-04-19`))
let p2 = new Person(`Mark Zuckerberg`,undefined,new Date(`1984-05-14`))
let p3 = new Person(`Barbara`,`Mandrell`,new Date(`1949-12-25`))
let p4 = new Person(`MARK Zuckerberg`,`N/A`)
let p5 = new Person(...[,],`Lastname`,undefined)
console.log(p1.getFullName())
console.log(p2.getFullName())
console.log(p3.getFullName())
console.log(`P5 --> ` + p5.toString())
console.log(p1.getAges())
console.log(p2.getAges())
console.log(p3.getAges())
console.log(p4.getAges())
console.log(p2.isEqual(p3))
console.log(p2.isEqual(p4))
console.log(p1.toString())
console.log(p2.toString())
console.log(p3.toString())
console.log(typeof Person)
console.log(Person.prototype)