// import { products } from "./data/products.js"
const { template } = require('@babel/core')
const products = require('./data/products.js')

function itemList(userItems) {
  const items = userItems

  const initialPage = () => {
    const inputElement = document.getElementsByTagName("input")[0]
    inputElement.addEventListener('input', filterItemsHandler)
    showItems(items)
  }
  const filterItemsHandler = (event) => {
    console.log(event.target.value)
    const filterItems = items.filter(item => item?.keywords.toUpperCase().includes(event.target.value.toUpperCase()))
    showItems(filterItems)
  }
  const showItems = (items) => {
    const ulElement = document.querySelector('#items')
    ulElement.textContent = ''
    items.forEach(item => {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item?.id}, NAME:${item?.name}, KEYWORDS:${item?.keywords}`
      ulElement.appendChild(liElement)
    })
  }

  return {
    initialPage,
    filterItemsHandler,
    showItems,
  };
}
module.exports = itemList
// export { itemList }
// const { initialPage, filterItemsHandler, showItems } = itemList(products)
// initialPage()
