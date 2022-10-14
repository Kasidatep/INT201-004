const { template } = require('@babel/core')

function calculateBMI(weight, height) {
  return weight / (height * height)
}
function getBMIMeaning(weight, height) {
  const bmi = weight / (height * height)
  if (bmi < 18.5)
    return `Underweight`
  else if (bmi < 25)
    return `Normal weight`
  else return `Overweight`
}
module.exports = getBMIMeaning
