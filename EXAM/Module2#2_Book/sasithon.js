const { template } = require('@babel/core')
// 64130500001 sasithon dontree
class Book {
    constructor(isbn, title = 'untitled', ebook = false) {
        this.isbn = isbn
        this.title = title
        this.ebook = ebook
        this.authors = []

    }
    // เป็นตัวระบุหนังสือ
    // isbn(String) {
    //     return this.isbn = isbn
    // }
    isbn(str){
        return this.isbn = str
    }
    title(){
        return this.title=title
    }
    // คือผู้แต่งหนังสือ อาร์เรย์ประกอบด้วยออปเจกต์ผู้เขียนซึ่งแต่ละออปเจ็กต์ผู้เขียนจัดเก็บไว้
    //    - ชื่อ (สตริง): ชื่อจริงของผู้เขียน
    //    - นามสกุล (สตริง): นามสกุลของผู้แต่ง
    authors(fn,ln) {
        this.arr.push({firstname:fn,lastname:ln})
        return this.authors
    }
    // ระบุว่าหนังสือมีเวอร์ชัน e-book หรือไม่
    ebook() {
        this.ebook=this.ebook
    }

    addAuthor(fn, ln) {
        let authors = []
       this.authors.push({firstname: fn,lastname: ln }) = authors
        return this.authors[{ fn, ln }]
    }
    // getFirstAuthor()** : ส่งคืนวัตถุผู้แต่งคนแรกของหนังสือ หากไม่มีผู้แต่ง ส่งคืน undefined
    getFirstAuthor() {
        let fAuthor = book.authors.push((author) => author[0])
    }
    // - **getCoAuthors()** : ส่งคืนอาร์เรย์ของผู้เขียนทั้งหมด ยกเว้นผู้เขียนคนแรก หากไม่มีผู้เขียนร่วม 
    // ส่งคืนอาร์เรย์ว่าง ([])
    getCoAuthors() {
        this.authors.slice((as) => as?.length === 0 ? [] : authors[as[1], as.length - 1])
    }

    // - **findAuthor(_firstname, lastname_)** : ส่งคืนออปเจกต์ผู้เขียนคนแรกที่ตรงกับทั้งพารามิเตอร์ชื่อและ
    // นามสกุล (ไม่คำนึงถึงตัวพิมพ์เล็กและใหญ่) หากไม่มีผู้แต่งที่ตรงกัน ระบบจะส่งกลับ undefined

    findAuthor(firstname, lastname) {
        const fname = this.arr.length[0].find(fname => fname.firstname === firstname)
        const lname = this.arr.length[0].find(lname => lname.firstname === lastname)
        if (fname, lname) {
            this.arr.push({ firstname: arr.fname, lastname: this.arr.lname })
        }
    }

    hasEbook() {
        return this.arr
    }

}

module.exports = Book

// - test('output#1: _constructor_')
// - test('output#2: _constructor and addAuthor_')
// - test('output#3: _constructor, addAuthor, and getFirstAuthor_')
// - test('output#4: _constructor, addAuthor, and getCoAuthors_')
