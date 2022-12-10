let favor = {name: "favorWeb", url: "https://www.google.com/" }; 
let replaceFavor = {name: "favorWeb", url: "https://www.sit.kmutt.ac.th/" }
function createCookie(cookieObj, expires){
    let cookieText = `${encodeURIComponent(cookieObj.name)}=${encodeURIComponent(cookieObj.url)};`
   alert(expires)
    if(expires!==undefined){cookieText += `expires=${expires}`} 
    document.cookie = cookieText
}
createCookie(favor)
alert(document.cookie)
document.cookie=`user=Kasidate`
createCookie(replaceFavor, (60*60*24*10))
alert(document.cookie)