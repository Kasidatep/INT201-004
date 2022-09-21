function isImageFileExtension(fileName){
    if(fileName == null || fileName == undefined)
        return false
    else if (fileName.endsWith(`.png`)){
        return true
    }else if (fileName.endsWith(`.jpg`)){
        return true
    }else if (fileName.endsWith(`.jpeg`)){
        return true
    }else if (fileName.endsWith(`.gif`)){
        return true
    }else if (fileName.endsWith(`.svg`)){
        return true
    }else{
        return false
    }
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