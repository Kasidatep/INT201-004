// root node or document node
const rootNode = window.document
console.log(rootNode)
console.log(rootNode.nodeType)
console.log(rootNode.nodeName)
console.log(rootNode.nodeValue)

//root element or document element
const rootElement = document.documentElement
console.log(rootElement)
console.log(rootElement.nodeType)
console.log(rootElement.nodeName)
console.log(rootElement.nodeValue)

//children node of html node
// 1. all type of children  (warning white space)
const htmlChildren = rootElement.childNodes
console.log(htmlChildren) //array like -- not array
console.log(htmlChildren.length)

// 2. only element types of children
const htmlElementChildren = rootElement.children
console.log(htmlElementChildren)
console.log(htmlElementChildren.length)

//document.body, document.head
const bodyNode = document.body
const divNode = bodyNode.children[1]
console.log(divNode)
const attributeIdInDivNode = divNode.getAttribute("id")
console.log(attributeIdInDivNode)

//query node by using getElementById()
const divByIdNode = document.getElementById("myApp")
console.log(divByIdNode)

