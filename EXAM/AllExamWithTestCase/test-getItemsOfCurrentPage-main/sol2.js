const { template } = require('@babel/core')
//64130500001 , Sasithon, Dontree
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if(allItems===null||allItems===undefined) return undefined
  if(rowsPerPage<=0 || currentPage<=0) return allItems
  return allItems.slice(rowsPerPage*(currentPage-1),rowsPerPage*currentPage)
  
  // let i=[]
  // for(item = 0;item<allItems.length;item++){
  //   if(item <  && item >= ){
  //      i.push(allItems[item])
  //   }
  // }
  // return i
}
module.exports = getItemsOfCurrentPage