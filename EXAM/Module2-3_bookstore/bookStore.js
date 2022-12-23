const { template } = require('@babel/core')
//your student id, firstname, and lastname here


// format stores  [{isbn, stocks},{isbn, stocks},{isbn, stocks},...]
class BookStore {
  constructor(){
   this.stores  = []
  }
  findBookIndex(isbn){
    return this.stores.findIndex(book => book.isbn === isbn)
  }
  addNewBook(isbn, stocks){
   if(this.stores.find(book => book.isbn===isbn)===undefined){
     this.stores.push({isbn:isbn, stocks:stocks})
     return this.stores[this.stores?.length-1].stocks
   }else return -1
  }
  sellBook(isbn, quantity){
    const index = this.stores.findIndex(book => book.isbn===isbn)
    if(index===-1) return -1
    if(this.stores[index].stocks<quantity) return 0
    this.stores[index].stocks = this.stores[index].stocks-quantity
    return quantity
  }
}
module.exports = BookStore
