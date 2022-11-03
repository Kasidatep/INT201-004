
function convertISBN(isbnNumber) {
    const [...isbnArray] = isbnNumber
    // if(isbnArray==undefined) return undefined
    let isbn = isbnArray.filter(isbn => isbn !== `-`)
    let newisbntext
    console.log(isbn.length)
    let sum = 0
    if (isbn.length === 10) {
        
    }
    return newisbntext
}
function checkISBN10(isbnNumber) {
    const [...isbnArray] = isbnNumber
    let sum = 0
    let isbn = isbnArray.filter(isbn => isbn != `-`)
    const checkingNumber = isbn.pop()
    if (isbn.length === 9) {
        sum = isbn.reduce((sum, nowValue, nowIndex) => {
            if (nowIndex % 2 === 0) return sum += nowValue * 1
            else return sum += nowValue * 3
        }, 0)
        sum = sum % 10
        sum = (sum === 0) ? sum : 10 - sum
        if (sum !== checkingNumber) return undefined
        sum = sum.toString()
        isbn.push(sum)
        return isbn
    }
    console.log(convertISBN(`978-0-901690-54-8`))
    console.log(convertISBN(`978186197271`))
    console.log(convertISBN(`978186197271`))