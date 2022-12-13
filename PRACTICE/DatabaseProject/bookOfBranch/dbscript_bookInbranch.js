import book from "./resourse/book.json" assert {type: "json"}
import zone from "./resourse/zone.json" assert {type: "json"}
console.log(book.length)

function randomZone(first, last) {
    return Math.floor(Math.random() * (last - first + 1) + first)
}
function randomBook() {
    return Math.floor(Math.random() * (book.length - 1) + 1)
}
function randomAmount() {
    return Math.floor(Math.random() * (5 - 1) + 1)
}
{
    let i = 1
    const bookinzone = []
    const bookUsage = []
    do {
        const div = document.createElement("div")
        const body = document.getElementById("item")
        const zoneInfo = zone[randomZone(0, 9)]
        const bookInfo = book[randomBook()]
        const bookid = (i<10)?`0000${i}`:(i<100)?`000${i}`:`00${i}`
        if (bookUsage.find(book => book === bookInfo.isbn)===undefined) {
            if (bookinzone.find(book => book === bookInfo.isbn + zoneInfo.zoneId) === undefined) {
                div.textContent =
                    ` 
        INSERT INTO library.bookinbranch (bookid, bookzone_zoneId, book_isbn, amountOfBook) 
        VALUES ('AL${bookid}', '${zoneInfo.zoneId}', '${bookInfo.isbn}', '${randomAmount()}');
        `
                body.append(div)
                i++
                console.log("Add " + bookInfo.isbn + "-" + zoneInfo.zoneId)
                bookUsage.push(bookInfo.isbn)
                bookinzone.push(bookInfo.isbn + zoneInfo.zoneId)
            } else console.log(bookInfo.isbn + zoneInfo.zoneId + " it Dupplicate")
        } else console.log(bookInfo.isbn + " it Dupplicate")
    }
    while (i < 245)
}
{
    let i = 1
    const bookinzone = []
    const bookUsage = []
    do {
        const div = document.createElement("div")
        const body = document.getElementById("item")
        const zoneInfo = zone[randomZone(10, 23)]
        const bookInfo = book[randomBook()]
        const bookid = (i<10)?`0000${i}`:(i<100)?`000${i}`:`00${i}`
        
        if (bookUsage.find(book => book === bookInfo.isbn)===undefined) {
            if (bookinzone.find(book => book === bookInfo.isbn + zoneInfo.zoneId) === undefined) {
                div.textContent =
                    ` 
        INSERT INTO library.bookinbranch (bookid, bookzone_zoneId, book_isbn, amountOfBook) 
        VALUES ('NY${bookid}', '${zoneInfo.zoneId}', '${bookInfo.isbn}', '${randomAmount()}');
        `
                body.append(div)
                i++
                console.log("Add " + bookInfo.isbn + "-" + zoneInfo.zoneId)
                bookUsage.push(bookInfo.isbn)
                bookinzone.push(bookInfo.isbn + zoneInfo.zoneId)
            } else console.log(bookInfo.isbn + zoneInfo.zoneId + " it Dupplicate")
        } else console.log(bookInfo.isbn + " it Dupplicate")
    }
    while (i < 312)
}
{
    let i = 1
    const bookinzone = []
    const bookUsage = []
    do {
        const div = document.createElement("div")
        const body = document.getElementById("item")
        const zoneInfo = zone[randomZone(24, 32)]
        const bookInfo = book[randomBook()]
        const bookid = (i<10)?`0000${i}`:(i<100)?`000${i}`:`00${i}`
        if (bookUsage.find(book => book === bookInfo.isbn)===undefined) {
            if (bookinzone.find(book => book === bookInfo.isbn + zoneInfo.zoneId) === undefined) {
                div.textContent =
                    ` 
        INSERT INTO library.bookinbranch (bookid, bookzone_zoneId, book_isbn, amountOfBook) 
        VALUES ('MA${bookid}', '${zoneInfo.zoneId}', '${bookInfo.isbn}', '${randomAmount()}');
        `
                body.append(div)
                i++
                console.log("Add " + bookInfo.isbn + "-" + zoneInfo.zoneId)
                bookUsage.push(bookInfo.isbn)
                bookinzone.push(bookInfo.isbn + zoneInfo.zoneId)
            } else console.log(bookInfo.isbn + zoneInfo.zoneId + " it Dupplicate")
        } else console.log(bookInfo.isbn + " it Dupplicate")
    }
    while (i < 284)
}