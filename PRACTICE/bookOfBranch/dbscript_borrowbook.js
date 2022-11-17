import user from "./resourse/user.json" assert {type: "json"}
import book from "./resourse/bookOfBranch.json" assert {type: "json"}
import staff from "./resourse/staff.json" assert {type: "json"}
const paymentMethod = ["cash","cash","creditcard","paypal","banktransfer"]
function random(first, last) {
    return Math.floor(Math.random() * (last - first + 1) + first)
}
function bookRandom(){
    return book[random(0,book.length-1)]
}
function staffRandom(bid){
    const all = staff.filter(staff => staff.branchId === bid && staff.position === "Librarian")
    return  all[random(0,all.length-1)]
}
function userRandom(){
    return user[random(0,user.length-1)]
}
function paymentRandom(){
    return paymentMethod[random(0,paymentMethod.length-1)]
}


let borrow = []
for (let i = 0; i < 3842; i++) {
    const bookInfo = bookRandom()
    const staffInfo = staffRandom(bookInfo.branchId)
    const userInfo = userRandom()
    const borrowRange = userInfo.borrowDate
    const year = random(2010, 2021)
    const month = random(1, 12)
    const day = random(1, 28)
    const borrowDate = new Date(year, month, day)
    const dueDate = new Date(86400000*borrowRange + borrowDate.valueOf())
    const returnDate =(random(1,100)<70)? new Date(random(86400000+borrowDate.valueOf(), dueDate.valueOf())) : new Date(random(86400000+borrowDate.valueOf(), 86400000*14+dueDate.valueOf()))
    const fineOverDate = ((returnDate.valueOf()- dueDate.valueOf())/86400000 > 0) ? Math.floor((returnDate.valueOf()- dueDate.valueOf())/86400000) : null
    const dateFormatter = Intl.DateTimeFormat('sv-SE');
    // console.log(borrowDate)
    // console.log(dueDate)
    // console.log(returnDate)
    // console.log(fineOverDate)
    // console.log(bookInfo)
    // console.log(staffInfo)
    // console.log(userInfo)
    borrow.push ({bookId:bookInfo.bookid, userId:userInfo.userId, staffId:staffInfo.staffId, 
    borrowDate: dateFormatter.format(borrowDate), dueDate: dateFormatter.format(dueDate), 
    returnDate: dateFormatter.format(returnDate), fineDate: dateFormatter.format(returnDate),
    amount:fineOverDate, sort:borrowDate.valueOf()})
}
borrow.sort((a,b) => a.sort - b.sort)
let borrowBook = []
//console.log(borrow)
borrow.forEach((book,id) => {
    const borrowId =id+1
    borrowBook.push({borrowId:borrowId, borrowDetails:book})
})
//console.log(borrowBook)
borrowBook.forEach(item => {
    const div = document.createElement("div")
    const body = document.getElementById("item")
    div.setAttribute("style","color: red;")
    div.textContent = `
    INSERT INTO library.borrowbook (borrowId, bookid, userId, staffId, borrowDate, dueDate, returnDate) 
    VALUES ('${item.borrowId}', '${item.borrowDetails.bookId}', '${item.borrowDetails.userId}',
    '${item.borrowDetails.staffId}', '${item.borrowDetails.borrowDate}', '${item.borrowDetails.dueDate}',
    '${item.borrowDetails.returnDate}');
    `
    body.append(div)
})

const fineInfo = borrowBook.filter(fine => fine.borrowDetails?.amount!==null)
console.log(fineInfo.length)
fineInfo.forEach((item,id) => {
    const div = document.createElement("div")
    const body = document.getElementById("item2")
    const paymentMethod = paymentRandom()
    const slipsCode = (paymentMethod==="cash")?`paybycash-${item.borrowId}u${item.borrowDetails.userId}s${item.borrowDetails.staffId}`:`${paymentMethod}-${random(100000000000000, 999999999999999)}`
    div.setAttribute("style","color: blue;")
    div.textContent = `
    INSERT INTO library.bookfines (finesid, borrowId, paymentMethod, amount, fineDate, slipsCode, status)
    VALUES ('${id+1}','${item.borrowId}', '${paymentMethod}', '${item.borrowDetails.amount}', '${item.borrowDetails.fineDate}',
     '${slipsCode}', 'success');
    `
    body.append(div)
})