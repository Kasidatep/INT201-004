class BookMark {
    constructor(isbn,totalPages = 0){
        this.isbn=isbn
        this.totalPages=totalPages
        this.bookMarks = []
    }
    addBookMark(pageNumber){
        if(pageNumber>0 && pageNumber<=this.totalPages) 
            // ถ้า pageNumber มากกว่า 0 และน้อยกว่า totalPages ให้ push pageNumber 
            // ไปใน bookMarks array
            this.bookMarks.push(pageNumber)
        return this.bookMarks.length
    }
    removeBookMark(pageNumber){
        const bookMarksRemove = this.bookMarks.find(book => book===pageNumber)
        // หาelement ใน array ที่ตรงกับ pageNumber ถ้ามีรีเทรินตัวที่เจอออกมา ไม่มี undefined
        this.BookMark = this.bookMarks.filter(book => book !== pageNumber)
        // filter ข้อมูลเฉพาะที่ตรง condition คือ ไม่เท่ากับ  pageNumber
        return bookMarksRemove
    }
    // removeBookMark(pageNumber){
    //     const beforeBookmark = this.bookMarks.length
    //   // เก็บขนากของอาร์เรย์เดิม
    //     this.bookMarks = this.bookMarks.filter(book => book !== pageNumber)
    //   // filter ข้อมูลเฉพาะที่ตรง condition คือ ไม่เท่ากับ  pageNumber
    //     return (this.bookMarks.length === beforeBookmark)?undefined:pageNumber
    //   // ถ้าขนาดเท่าเดิม (ไม่มีตัวที่ถูกลบ) รีเทริน undefined  ถ้ามี รีเทริน pageNumber
    // }
    goToFirstBookMark(){
        return this.bookMarks[0]
    }
    goToLastBookMark(){
        return this.bookMarks[this.bookMarks.length-1]
    }
    getBookMarks(){
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