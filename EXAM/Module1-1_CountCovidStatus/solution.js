function countCovidStatus(covidStatusArray) {
    if (covidStatusArray == null || covidStatusArray == undefined) {
        return undefined
    } else if (covidStatusArray.length === 0) {
        return {}
    } else {
        let lowRisk = 0, highRisk = 0, positive = 0
        for (const status of covidStatusArray) {
            switch (status) {
                case 'negative and low risk':
                    lowRisk++
                    break
                case 'positive':
                    positive++
                    break
                case 'negative and high risk':
                    highRisk++
                    break
            }
        }
        let obj = {'negative and low risk': lowRisk, 'positive': positive, 'negative and high risk': highRisk }
        for (const prop in obj) {
            if (obj[prop] === 0) delete obj[prop]
        }
        return obj
    }
}


covidStatusArray1 = ['negative and low risk', 'positive', 'negative and low risk', 'negative and high risk', 'positive', 'negative and low risk']
//  return { 'negative and low risk': 3, positive: 2, 'negative and high risk': 1}
covidStatusArray2 = ['negative and low risk', 'positive', 'positive']
//  return { 'negative and low risk’: 1, 'positive' : 2}
covidStatusArray3 = ['positive', 'negative and low risk', 'negative and low risk', 'abnormal', 'negative and high risk', 'positive', ' normal']
//  return { 'negative and low risk’: 2, positive: 2, 'negative and high risk': 1}
covidStatusArray4 = ['covid']
//  return { }
covidStatusArray5 = []
//  return { }
covidStatusArray6 = null
//  return undefined
covidStatusArray7 = undefined
//  return undefined

console.log(countCovidStatus(covidStatusArray1))
console.log(countCovidStatus(covidStatusArray2))
console.log(countCovidStatus(covidStatusArray3))
console.log(countCovidStatus(covidStatusArray4))
console.log(countCovidStatus(covidStatusArray5))
console.log(countCovidStatus(covidStatusArray6))
console.log(countCovidStatus(covidStatusArray7))