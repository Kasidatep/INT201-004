const { template } = require('@babel/core')
//write your student id, firstname, and lastname here
function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if(allItems===null||allItems===undefined) return undefined
  if(allItems.length===0||allItems.length<(currentPage-1)*rowsPerPage) return []
  if(currentPage<=0||rowsPerPage<=0)return allItems
  return allItems.slice((currentPage-1)*rowsPerPage,currentPage*rowsPerPage)
}
module.exports = getItemsOfCurrentPage
