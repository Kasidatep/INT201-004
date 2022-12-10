const { template } = require('@babel/core')

class Book {
    constructor(isbn, title = `untitled`, ebook = false) {
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }
    addAuthor(fn, ln) {
        return this.authors.push({ firstname: fn, lastname: ln })
    }
    getFirstAuthor() {
        return this.authors?.[0]
    }
    getCoAuthors() {
        return this.authors.slice(1)
    }
    findAuthor(firstname, lastname) {
        return this.authors.find(author => (author.firstname.toLowerCase() === firstname.toLowerCase()) && (author.lastname.toLowerCase() === lastname.toLowerCase()))
    }
    hasEbook() {
        return this.ebook
    }
}
module.exports = Book