function isImageFileExtension(fileName){
    if(fileName===null || fileName===undefined)
    return false    return fileName.endsWith('.jpg') ||    fileName.endsWith('.jpeg')||    fileName.endsWith('.svg')||    fileName.endsWith('.png')||    fileName.endsWith('.gif')
}
console.log(isImageFileExtension('sample.jpeg'))
console.log(isImageFileExtension('myPic.jpg'))
console.log(isImageFileExtension('product.gif'))
console.log(isImageFileExtension('img.svg'))
console.log(isImageFileExtension('student.png'))
console.log(isImageFileExtension('x.doc'))
console.log(isImageFileExtension('y.pdf'))
console.log(isImageFileExtension(null))
console.log(isImageFileExtension(undefined))