const { template } = require('@babel/core')

//64130500004 กษิดิ์เดช พลายเผือก
function countCovidStatus(covidStatusArray) {
  if (covidStatusArray == null || covidStatusArray == undefined) {
    return undefined
  } else if (covidStatusArray.length === 0) {
    return {}
  // } else if (covidStatusArray[0] !== 'negative and low risk' && covidStatusArray[0] !== 'negative and high risk' && covidStatusArray[0] !== 'positive') {
  //   return {}
  } else {
    let lowRisk = 0
    let highRisk = 0
    let positive = 0
    for (let i = 0; i < covidStatusArray.length; i++) {
      if (covidStatusArray[i] === 'negative and low risk') {
        lowRisk += 1
      } else if (covidStatusArray[i] === 'negative and high risk') {
        highRisk += 1
      } else if (covidStatusArray[i] === 'positive') {
        positive += 1
      }
    }
    let obj = { 'negative and low risk': lowRisk, 'positive': positive, 'negative and high risk': highRisk }

    if (lowRisk === 0) {
      delete obj['negative and low risk']
    }
    if (positive === 0) {
      delete obj['positive']
    }
    if (highRisk === 0) {
      delete obj['negative and high risk']
    }
    return obj

  }

}
module.exports = countCovidStatus
