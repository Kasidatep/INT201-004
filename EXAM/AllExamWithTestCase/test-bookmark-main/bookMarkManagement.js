const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
class BookMark {
    constructor(isbn, totalPages=0){
      this.isbn=isbn
      this.totalPages=totalPages
      this.bookMarks=[]
    }
    addBookMark(pageNumber){
      if(pageNumber<1||pageNumber>this.totalPages) return this.bookMarks.length
      return this.bookMarks.push(pageNumber)
    }
    removeBookMark(pageNumber){
      if(pageNumber===null||pageNumber===undefined) return undefined
      const remove = this.bookMarks.find(page => page===pageNumber)
      this.bookMarks = this.bookMarks.filter(page => page!==pageNumber)
      return remove
    }
    goToFirstBookMark(){
      return this.bookMarks?.[0]
    }
    goToLastBookMark(){
      return this.bookMarks?.[this.bookMarks.length-1]
    }
    getBookMarks(){
      return this.bookMarks
    }
}
module.exports = BookMark
