const { template } = require('@babel/core')

function concatArray(array1, array2) {
  let a1 = (array1 == null || array1 == undefined || array1 === [])?true:false
  let a2 = (array2 == null || array2 == undefined || array2 === [])?true:false
  if (a1&&!a2) {
    return array2
  } else if (a2&&!a1) {
    return array1
  } else if (array1 === [] && array2 === []) {
    return []
  } else if (!(a1||a2)) {
    return array1.concat(array2)
  } else {
    return undefined
  }
}
module.exports = concatArray

