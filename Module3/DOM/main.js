require('dotenv').config();

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

// create new node [full]
// 1. create new element node `p`
const pNewElementNode =document.createElement(`p`)
// 2. create a new attribute named `paraId`
const paraIdNode = document.createAttribute("paraId") // attribute name
paraIdNode.value = "1" // attribute value
// 3. create a text node with it's value "INT201"
const newTextNode=document.createTextNode("INT201")  //"INT201"
// 4. assign a paraId to <p> element
pNewElementNode.setAttributeNode(paraIdNode)   //<p paraId="1"></p>
pNewElementNode.style="color:blue;"
// 5. assign a textnode "INT201" to <p> element
pNewElementNode.appendChild(newTextNode)    // <p paraId="1">INT201</p>
// 6. assign <p> element to <div id="myApp">
const divMyAppNode = document.getElementById("myApp")
divMyAppNode.appendChild(pNewElementNode) //<div id="myApp"><p paraid="1">INT201</p></div>
console.log(paraIdNode.ownerDocument)

const pNewElementNodeShort = document.createElement("p")
// can reduce stap 2, 4 by using
pNewElementNodeShort.setAttribute("paraId",2)

pNewElementNodeShort.innerText = "Hello JavaScript [innerText]" 
divMyAppNode.appendChild(pNewElementNodeShort)

//
const divChildren = document.body.children
console.log(divChildren)
console.log(divChildren[1].previousElementSibling)
console.log(divChildren[1].nextElementSibling)

console.log(env)
