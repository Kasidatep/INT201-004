function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage) {
  if(allItems===null||allItems===undefined) return undefined
  if(allItems.length===0||allItems.length<(currentPage-1)*rowsPerPage) return []
  if(currentPage<=0||rowsPerPage<=0)return allItems
  return allItems.slice((currentPage-1)*rowsPerPage,currentPage*rowsPerPage)
}

let array =[]
const numberOfItems = 49
for (let index = 0; index < numberOfItems ; index++) {
   array.push(`Items ${index+1}`) 
}

const doSomething = function(){return `do It`}

module.exports = {getItemsOfCurrentPage,array,doSomething}
