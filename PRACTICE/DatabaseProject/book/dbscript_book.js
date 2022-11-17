import { bookList } from '../../../TUE/BookQuiz/bookList.js';

import  isbnList  from "./isbn.json" assert{type: "json"};
console.log(bookList.length)
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
        if (authorList.find(authors => authors === author) === undefined) authorList.push({ book: bookid, isbn:bookList[bookid].isbn , author: author })
    })
    return authorList
})

function rating(min, max) {
    min = Math.ceil(290);
    max = Math.floor(500);
    return Math.floor(Math.random() * (max - min + 1) + min)/100; // The maximum is inclusive and the minimum is inclusive
  }


// author
let nextAuthor = []
authorList.forEach((book, id) => {
    const div = document.createElement('div');
    const run = nextAuthor.find(a => a === book.author) 
   //  console.log(run)
    if(run === undefined){
        div.innerHTML = 
        `INSERT INTO library.author (authorId, authorName) VALUES (${authorList.findIndex(a => a.author === book.author)+1}, '${book.author}');`
        nextAuthor.push(book.author)
       //  document.body.appendChild(div)
    }
    else{
      //  console.log(`${book.author} "it dub"`)
    }
})


// authorofbook
authorList.forEach((book, id) => {
    const div = document.createElement('div');
  //  div.innerHTML = `${id + 1} --- Book: ${book.book+1}   Author: [${authorList.findIndex(a => a.author === book.author)+1}] ${book.author}`
    div.innerHTML = `INSERT INTO library.authorofbook (book_isbn, authorId) VALUES ('${book.isbn}', '${authorList.findIndex(a => a.author === book.author)+1}');`
  //  document.body.appendChild(div)
})
//INSERT INTO `library`.`authorofbook` (`book_isbn`, `authorId`) VALUES ('isbn', 'aid');


let catagorieList = []
bookCatagorie(bookList).forEach((categoriesinbook, bookid) => {
    categoriesinbook.forEach((catagory) => {
        if (catagorieList.find(catagorie => catagorie === catagory) === undefined) catagorieList.push({ book: bookid, isbn:bookList[bookid].isbn, catagories: catagory })
    })
})

//catagorie
let nextCat = []
catagorieList.forEach((book, id) => {
    const div = document.createElement('div');
    const run = nextCat.find(cat => cat === book.catagories)
     // console.log(">> "+run)
      //nextCat.find(a => a === book.author) 
    if(run === undefined){
        div.innerHTML = `INSERT INTO library.catagory (catagoryId, catagoryName) VALUES (${catagorieList.findIndex(catagorie => catagorie.catagories === book.catagories)+1}, '${book.catagories}');`

        // [] ${book.catagories}`
        nextCat.push(book.catagories)
       // document.body.appendChild(div)
    }
    else{
       // console.log(`${book.catagories} "it dub"`)
    }
})


// catagorieofbook
catagorieList.forEach((book, id) => {
    const div = document.createElement('div');
    // div.innerHTML = `${id + 1} --- Book: ${book.book+1}  Catagories: [${catagorieList.findIndex(catagorie => catagorie.catagories === book.catagories)+1}] ${book.catagories}`
    //` Catagories: [${catagorieList.findIndex(catagorie => catagorie.catagories === book.catagories)+1}] ${book.catagories}`
   //div.innerHTML =  `INSERT INTO library.catagoryofbook (book_isbn, catagoryId) VALUES ('${book.isbn}', ${catagorieList.findIndex(catagorie => catagorie.catagories === book.catagories)+1});`

   document.body.appendChild(div)
})


let idArr =[]
//console.log(book.isbn)
const data = DataBook(bookList)
  data.forEach( async(book, id) => {
    console.log(isbnList.find(isbn=>isbn.isbn===book.isbn))
    console.log(book.isbn)
    if(isbnList.find(isbn=> isbn.isbn===book.isbn)!==undefined){
        const response = await fetch("http://openlibrary.org/api/books?bibkeys=ISBN:" + book.isbn + "&jscmd=details&format=json");
        const bookData = await response.json(); 
        // console.log(bookData)
        const thumbnail_url = await bookData["ISBN:" + book.isbn]?.thumbnail_url
        const description = await bookData["ISBN:" + book.isbn]?.details.subjects?.[0] +" or " + bookData["ISBN:" + book.isbn].details?.title
        const publisher = await bookData["ISBN:" + book.isbn]?.details.publishers?.[0]
        const numOfPublish = await bookData["ISBN:" + book.isbn].details?.revision
        const numOfPage = await bookData["ISBN:" + book.isbn].details?.number_of_pages??null
        const des = book.shortDescription??`${book.title}: Book about ${description}`
        const desc = (book.shortDescription?.length<250)?des:` ${book.title} by ${book.authors?.[0]}, ${description}`
        let newdescformat = desc.replace(String.fromCharCode(39), `\'`); 
        const ids = await idArr.push(id)

        console.log(ids)
        
        const div =  document.createElement('div');
        div.innerHTML = `
        INSERT INTO library.book (isbn, bookName, bookDescription, publisher, publishdate, num_of_publish, rate, img_url) 
        VALUES ('${book.isbn}', '${book.title}', '${newdescformat}','${publisher??null}', 
        ${book.publishedDate?.$date.slice(0, 4)??null}, '${numOfPublish??1}', '${rating(3,5)}', 
        '${book.thumbnailUrl??thumbnail_url}');
        `
       document.body.appendChild(div)
    }
})
//console.log()
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