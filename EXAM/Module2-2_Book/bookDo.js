const { template } = require('@babel/core')
// Bypond
class Book {
    constructor(isbn,title='untitled',ebook=false) {
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []
    }
    addAuthor(fn,ln){
        let name = {firstname:fn,lastname:ln}
        this.authors.push(name)
        return this.authors.length
    }
    getFirstAuthor(){
        return this.authors[0]
    }
    getCoAuthors(){
        if(this.authors.length === 0)return []
        return this.authors.filter(fAu => fAu !== this.authors[0])
    }
    findAuthor(firstname,lastname){
        if(firstname.length !== 0 && lastname.length !== 0 && this.authors.firstname !== undefined && this.authors.lastname !== undefined ){
        let fn = this.authors.filter(fn => fn.firstname.toLowerCase() === firstname.toLowerCase())
        let ln = this.authors.filter(ln => ln.lastname.toLowerCase() === lastname.toLowerCase())
        return {firstname: fn, lastname: ln}
        }return undefined
    }
    hasEbook(){
        return this.ebook
    }
}
module.exports = Book