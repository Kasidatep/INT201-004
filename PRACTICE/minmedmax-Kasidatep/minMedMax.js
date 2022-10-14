const { template } = require('@babel/core')

function minMedMax(n1, n2, n3) {
  let sortNumberArray = [n1, n2, n3]
  let numberOfCompare
  function compareNumber(a, b) {
    if (sortNumberArray[a] > sortNumberArray[b]) {
      numberOfCompare = sortNumberArray[a]
      sortNumberArray[a] = sortNumberArray[b]
      sortNumberArray[b] = numberOfCompare
    }
  }
  compareNumber(0,2)
  compareNumber(0,1)
  compareNumber(1,2)
  return {min:sortNumberArray[0], mid:sortNumberArray[1], max:sortNumberArray[2]}
}
module.exports = minMedMax