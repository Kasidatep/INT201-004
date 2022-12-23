const { template } = require('@babel/core')
const products = require('./data/products.js')
// import { products } from './data/products.js'

function itemList(userItems) {
  const items = userItems

 const initialPage = () => {
    const catagorieDiv =document.getElementById('categories')
    Array.from(catagorieDiv.children).forEach( button => button.addEventListener('click',filterItemsByCategoryHandler))
    showItems(items)
  }

 const filterItemsByCategoryHandler = (event) => {
    document.querySelectorAll('button').forEach(btn => btn.style=`background-color:lightgray`)

    if(event){
      event.target.style = `background-color:yellow`
      showItems(items.filter(item => item.category===event.target.id))
    } 
  }

const showItems = (items) => {
  const itemsUl = document.getElementById('items')
  itemsUl.textContent = ''
    items.forEach(product => {
          const liElement = document.createElement('li')
          liElement.textContent=`ID:${product.id}, NAME:${product.name}, CATEGORY:${product.category}`
          itemsUl.append(liElement)
        });
      }

  return {
    initialPage,
    filterItemsByCategoryHandler,
    showItems
  }
}
module.exports = itemList
// export { itemList }
// const { initialPage, filterItemsByCategoryHandler, showItems } = itemList(products)
// initialPage()
