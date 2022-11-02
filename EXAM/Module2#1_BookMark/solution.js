class BookMark {
    constructor(isbn, totalPages=0){
     this.isbn=isbn  
     this.totalPages=totalPages  
     this.bookMarks=[]
    }
    getBookMarks(){
     return this.bookMarks 
    }
    addBookMark(pageNumber){
     if(pageNumber>=1 && pageNumber<=this.totalPages)
       this.bookMarks.push(pageNumber)
     return this.bookMarks.length 
    }
    goToFirstBookMark(){
     return this.bookMarks[0]
    }
    goToLastBookMark(){
     return this.bookMarks[this.bookMarks.length-1]
   } 
   removeBookMark(pageNumber){
     const beforeRemoveLength=this.bookMarks.length  
     console.log(this.bookMarks)
     this.bookMarks=this.bookMarks.filter(bookmark=>bookmark!=pageNumber)
     console.log(this.bookMarks)
     return this.bookMarks.length===beforeRemoveLength?undefined:pageNumber}
   }

const book = new BookMark(`121-325-1254-125-1`, 356)
console.log(book.addBookMark(5))
console.log(book.addBookMark(85))
console.log(book.addBookMark(14))
console.log(book.addBookMark(72))
console.log(book.getBookMarks())
console.log(book.addBookMark(54))
console.log(`----------------`)
console.log(book.removeBookMark(724))
console.log(book.getBookMarks())
console.log(`----------------`)
console.log(book.goToFirstBookMark())
console.log(book.goToLastBookMark())
console.log(`-----------------------`)
// const anotherbook = new BookMark(`986-254-5457-122-4`)
// console.log(anotherbook.addBookMark(72))
// console.log(anotherbook.getBookMarks())
// console.log(anotherbook.addBookMark(54))
// console.log(anotherbook.removeBookMark(72))
// console.log(anotherbook.getBookMarks())
// console.log(anotherbook.goToFirstBookMark())
// console.log(anotherbook.goToLastBookMark())