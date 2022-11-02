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
     this.bookMarks=this.bookMarks.filter(bookmark=>bookmark!=pageNumber)
     return this.bookMarks.length===beforeRemoveLength?undefined:pageNumber
    }
}

export {BookMark}