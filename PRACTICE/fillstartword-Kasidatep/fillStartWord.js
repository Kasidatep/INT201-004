const { template } = require('@babel/core')

function fillStartWord(startWord, word) {
  //code here
  if( word==null|| word==`undefined`){
    return undefined
  }else if(startWord === word.substring(0,startWord.length)){
    return word
  }else {
    return startWord+word
  }
}
module.exports = fillStartWord
