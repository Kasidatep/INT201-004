document.cookie='memberType=gold'
// alert(document.cookie)
document.cookie='memberType=premium'
document.cookie='color-tone=pastel;max-age=60'
document.cookie=`productId=101;expires=${new Date ('December 1, 2025 07:00:00')}`
//alert(document.cookie)
const url = encodeURIComponent('url:schema')
const sit = encodeURIComponent('https://sit.kmutt.ac.th/')
document.cookie=`website=${sit}`

const myURL = "https://kasidate.me/org/index.php"
const encodemyURL = encodeURIComponent(myURL)
console.log(myURL)
console.log(encodemyURL)
console.log(decodeURIComponent(encodemyURL))