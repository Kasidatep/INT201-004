class student{
    constructor(id=null,name=null,year=null,courses=null){
        this.id=id
        this.name=name
        this.year=year
        this.courses=courses
    }
    getName(){
        return this.name
    }
    getId(){
        return this.id
    }
    getYear(){
        return this.year
    }
    getCourses(){
        return this.courses
    }
    getInfo(){
        return `StudentID: ${this.year} \t ${this.year} \t ${this.year} \n ${this.courses}`
    }
}

module.exports = student