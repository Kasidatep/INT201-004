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
        return this.fristName.toUpperCase() ===  anotherPerson.fristName.toUpperCase() &&
        this.lastName.toUpperCase() === anotherPerson.lastName.toUpperCase()
    }
    toString(){
        return `Name= '${this.getFullName()}', Age= ${this.getAges()}`
    }
}