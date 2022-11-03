function getItemsOfCurrentPage(allItems, currentPage, rowsPerPage){
    if(allItems===undefined || allItems===null) return undefined  
    if(allItems.length===0)return []
    if(rowsPerPage<=0 || currentPage <=0)return allItems  
    const itemsOnCurrentPage=allItems.slice(rowsPerPage*(currentPage-1), rowsPerPage*currentPage)
    return itemsOnCurrentPage.length===0?[]:itemsOnCurrentPage
}

 let array =[]
 const numberOfItems = 49
 for (let index = 0; index < numberOfItems ; index++) {
    array.push(`Items ${index+1}`) 
 }

 console.log(getItemsOfCurrentPage(array,1,5))  //  1,2,3,4,5
 console.log(getItemsOfCurrentPage(array,3,5))  //  11,12,13,14,15
 console.log(getItemsOfCurrentPage(array,4,5))  //  16,17,18,19,20
 console.log(getItemsOfCurrentPage(array,10,5)) //  46,47,48,49
 console.log(getItemsOfCurrentPage(array,10,6)) //  []

 console.log((10-1)*5) // 45
 console.log((10)*5-5) // 45