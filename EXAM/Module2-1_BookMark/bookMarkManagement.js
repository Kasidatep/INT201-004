class BookMark {
    bookMarks = []
    constructor(isbn, totalPages = 0) {
        this.isbn = isbn;
        this.totalPages = totalPages
    }
    addBookMark(pageNumber) {
        if (pageNumber < 1 || pageNumber > this.totalPages) return this.bookMarks.length
        return this.bookMarks.push(pageNumber)
    }

    removeBookMark(pageNumber) {
        if (pageNumber == null || pageNumber == undefined) return undefined
        else {
            let remove = this.bookMarks.find(page => page === pageNumber)
            this.bookMarks = this.bookMarks.filter(page => page !== pageNumber)
            return remove
        }
    }

    goToFirstBookMark() {
        if (this.bookMarks.length === 0) return undefined
        return this.bookMarks[0]
    }

    goToLastBookMark() {
        if (this.bookMarks.length === 0) return undefined
        return this.bookMarks[this.bookMarks.length - 1]
    }

    getBookMarks() {
        return this.bookMarks
    }
}

const book = new BookMark(`121-325-1254-125-1`, 356)
console.log(book.addBookMark(5))
console.log(book.addBookMark(85))
console.log(book.addBookMark(14))
console.log(book.addBookMark(72))
console.log(book.getBookMarks())
console.log(book.addBookMark(54))
console.log(book.removeBookMark(72))
console.log(book.getBookMarks())
console.log(book.goToFirstBookMark())
console.log(book.goToLastBookMark())
console.log(`-----------------------`)
const anotherbook = new BookMark(`986-254-5457-122-4`)
console.log(anotherbook.addBookMark(72))
console.log(anotherbook.getBookMarks())
console.log(anotherbook.addBookMark(54))
console.log(anotherbook.removeBookMark(72))
console.log(anotherbook.getBookMarks())
console.log(anotherbook.goToFirstBookMark())
console.log(anotherbook.goToLastBookMark())