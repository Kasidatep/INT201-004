class ArrayLoop{
    constructor(arr=[]){
        this.arr=arr
    }
    loopDisplay() {
        for (let i = 0; i <this.arr.length; i++) {
            const element = this.arr[i];
            console.log(element)
        }
    }
    checkIndex(anotherElement){
        for (let i = 0; i < this.arr.length; i++) {
            if(anotherElement === this.arr[i]){
                console.log(i)
            }
            
            
        }
    }

}

const arr1 = [0,1,2200,3,4,5,6,7,8,9,10,100,1000]
const displayArray = new ArrayLoop(arr1)
displayArray.loopDisplay()
displayArray.checkIndex(2200)