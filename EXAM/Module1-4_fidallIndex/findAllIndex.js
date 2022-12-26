const { template } = require('@babel/core')
//write your student id, firstname, and lastname here

function findAllIndex(yourString, yourSearch) {
  let arr = []
  for(let index = 0 ; index < yourString.length ; index++){
    index = yourString.indexOf(yourSearch,index)
    if(index===-1) index = yourString.length
    else arr.push(index) 
  }
  return arr
}
module.exports = findAllIndex

