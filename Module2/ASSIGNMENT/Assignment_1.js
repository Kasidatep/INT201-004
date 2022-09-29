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
        let now = new Date(Date.now())
        let age = now.getFullYear() - this.dateOfBirth.getFullYear()
        let checkMonth = now.getMonth() - this.dateOfBirth.getMonth() 
        if (checkMonth < 0 || (checkMonth === 0 && now.getDate() < this.dateOfBirth.getDate())) {
            age--
            }
        return age
    }
    isEqual(anotherPerson){
        return this.fristName.toLocaleUpperCase() ===  anotherPerson.fristName.toUpperCase() &&
        this.lastName.toUpperCase() === anotherPerson.lastName.toUpperCase()
    }
    toString(){
        return `Name= \'${this.getFullName()}\', Age= ${this.getAges()}`
    }
}

let p1 = new Person(`Kasidate`,`Phlaiphueak`,new Date(`2002-04-19`))
let p2 = new Person(`Mark Zuckerberg`,undefined,new Date(`1984-05-14`))
let p3 = new Person(`Barbara`,`Mandrell`,new Date(`1949-12-25`))
let p4 = new Person(`MARK Zuckerberg`,`N/A`)
console.log(p1.getFullName())
console.log(p2.getFullName())
console.log(p3.getFullName())
console.log(p1.getAges())
console.log(p2.getAges())
console.log(p3.getAges())
console.log(p4.getAges())
console.log(p2.isEqual(p3))
console.log(p2.isEqual(p4))
console.log(p1.toString())
console.log(p2.toString())
console.log(p3.toString())