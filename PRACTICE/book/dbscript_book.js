import { bookList } from '../../TUE/BookQuiz/bookList.js';

function DataBook(books) {
    let arrOfBook = []
    arrOfBook = books.map(book => book)
    return arrOfBook
}
function bookAuthor(books) {
    let arrOfBook = []
    arrOfBook = books.map(book => book.authors)
    return arrOfBook
}
function bookCatagorie(books) {
    let arrOfBook = []
    arrOfBook = books.map(book => book.categories)
    return arrOfBook
}

let authorList = []
bookAuthor(bookList).forEach((authors, bookid) => {
    authors.forEach((author) => {
        if (authorList.find(authors => authors === author) === undefined) authorList.push({ book: bookid, author: author })
    })
})
authorList.forEach((book, id) => {
    const div = document.createElement('div');
    div.innerHTML = `${id + 1} --- Book: ${book.book}  &nbsp; &nbsp; &nbsp; &nbsp; Author: [${authorList.findIndex(a => a.author === book.author)}] ${book.author}`
   // document.body.appendChild(div)
})

let catagorieList = []
bookCatagorie(bookList).forEach((categoriesinbook, bookid) => {
    categoriesinbook.forEach((catagory) => {
        if (catagorieList.find(catagorie => catagorie === catagory) === undefined) catagorieList.push({ book: bookid, catagories: catagory })
    })
})
catagorieList.forEach((book, id) => {
    const div = document.createElement('div');
    div.innerHTML = `${id + 1} --- Book: ${book.book}  &nbsp; &nbsp; &nbsp; &nbsp; Catagories: [${catagorieList.findIndex(catagorie => catagorie.catagories === book.catagories)}] ${book.catagories}`
    // document.body.appendChild(div)
})
let end = null
//console.log(DataBook(bookList))
const data = DataBook(bookList)
  data.forEach( async(book, id) => {
        const response = await fetch("http://openlibrary.org/api/books?bibkeys=ISBN:" + book.isbn + "&jscmd=details&format=json");
        const bookData = await response.json(); 
        console.log(bookData)
        const thumbnail_url = await bookData["ISBN:" + book.isbn]?.thumbnail_url
        const description = await bookData["ISBN:" + book.isbn].details?.subjects[0] +" or " + bookData["ISBN:" + book.isbn].details?.title
        const publisher = await bookData["ISBN:" + book.isbn].details.publishers?.[0]
        const numOfPublish = await bookData["ISBN:" + book.isbn].details?.revision
        const numOfPage = await bookData["ISBN:" + book.isbn].details?.number_of_pages??null
        const div = document.createElement('div');
        div.innerHTML = `
        INSERT INTO
        ${id + 1},
        ${book.isbn},
        `
        document.body.appendChild(div)
})

// ${book.title}, 
// ${book.shortDescription??`${book.title}: Book about ${description}`}
// ${publisher??null}
// ${book.publishedDate?.$date.slice(0, 4)??null}
// ${numOfPublish??1}
// ${book.thumbnailUrl??thumbnail_url}
// ${(book?.pageCount===0)?numOfPage:book?.pageCount}

//  {
//     "title": "Unlocking Android",
//     "isbn": "1933988673",
//     "pageCount": 416,
//     "publishedDate": { "$date": "2009-04-01" },
//     "thumbnailUrl": "https://s3.amazonaws.com/AKIAJC5RLADLUMVRPFDQ.book-thumb-images/ableson.jpg",
//     "shortDescription": "Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout.",
//     "longDescription": "Android is an open source mobile phone platform based on the Linux operating system and developed by the Open Handset Alliance, a consortium of over 30 hardware, software and telecom companies that focus on open standards for mobile devices. Led by search giant, Google, Android is designed to deliver a better and more open and cost effective mobile experience.    Unlocking Android: A Developer's Guide provides concise, hands-on instruction for the Android operating system and development tools. This book teaches important architectural concepts in a straightforward writing style and builds on this with practical and useful examples throughout. Based on his mobile development experience and his deep knowledge of the arcane Android technical documentation, the author conveys the know-how you need to develop practical applications that build upon or replace any of Androids features, however small.    Unlocking Android: A Developer's Guide prepares the reader to embrace the platform in easy-to-understand language and builds on this foundation with re-usable Java code examples. It is ideal for corporate and hobbyists alike who have an interest, or a mandate, to deliver software functionality for cell phones.    WHAT'S INSIDE:        * Android's place in the market      * Using the Eclipse environment for Android development      * The Intents - how and why they are used      * Application classes:            o Activity            o Service            o IntentReceiver       * User interface design      * Using the ContentProvider to manage data      * Persisting data with the SQLite database      * Networking examples      * Telephony applications      * Notification methods      * OpenGL, animation & multimedia      * Sample Applications  ",
//     "status": "PUBLISH",
//     "authors": ["W. Frank Ableson", "Charlie Collins", "Robi Sen"],
//     "categories": ["Open Source", "Mobile"]
//   }