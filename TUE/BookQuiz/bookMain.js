const books = require('./bookList').bookList;
//เริ่มเขียนต่อจากตรงนี้

function findByTitle(input) {
    let getBook =[]
    for (const book of books) {
        if (book[`title`].includes(input)) {
            getBook.push(book)
        }
    }
    return getBook
}
function findByAuthors(input) {
    let getBook = []
    for (const book of books) {
        for (const author of book.authors) {
            if (author.includes(input)) {
                getBook.push(book)
            }
        }
    }
    return getBook
}
function findByCategories(input) {
    let getBook = []
    for (const book of books) {
        for (const category of book.categories) {
            if (category === input) {
                getBook.push(book)
            }
        }
    }
    return getBook
}
function findByPublishedDate(input) {
    let getBook = []
    const date = `${new Date(input).getFullYear()}+${new Date(input).getMonth()}+${new Date(input).getDay()}`
    for (const book of books) {
        const bookDate = `${new Date(book.publishedDate?.[`$date`]).getFullYear()}+${new Date(book.publishedDate?.[`$date`]).getMonth()}+${new Date(book.publishedDate?.[`$date`]).getDay()}`
        if (date === bookDate) {
            getBook.push(book)
        }
    }
    return getBook
}


console.log(findByTitle('Flex '))
// console.log(findByAuthors('Michael J. Barlotta'))
// console.log(findByCategories('Java'))
//console.log(findByPublishedDate('2008-10-01'))

