
class Square{
    constructor(side){
        this.side = side
    }
    area(){
        return this.side*this.side
    }
}
console.log(`--- USE CLASS ---`)
const square1 = new Square(5)
const square2 = new Square(2)
console.log(square1)
console.log(square1.area())
console.log(square2)
console.log(square2.area())

console.log(`------Compare Object-------`)
class Point{
    constructor(x,y){
        this.x=x
        this.y=y
    }
    compare(anotherPoint){
    return this.x === anotherPoint.x && this.y === anotherPoint.y
    }
}

const p1 = new Point(1,2)
let p2 = new Point(4,5)
let p3 = p1
let p4 = new Point(4,5)
console.log(p1.compare(p2))
console.log(p2.compare(p1))
console.log(p3.compare(p1))
console.log(p2.compare(p4))