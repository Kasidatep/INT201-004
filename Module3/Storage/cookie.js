document.cookie='memberType=gold'
alert(document.cookie)
document.cookie='memberType=premium'
document.cookie='color-tone=pastel;max-age=60'
document.cookie=`productId=101;expires=${new Date ('December 1, 2022 07:00:00')}`
alert(document.cookie)

alert(moo())
function moo(){
    return 'this is Moo not kai'
}