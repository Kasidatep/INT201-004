// const { template } = require('@babel/core')
import { getItemsOfCurrentPage, getTotalPages } from './lib/paginate.js'
import { products } from './data/products.js'

// const { getItemsOfCurrentPage, getTotalPages } = require('./lib/paginate.js')
// const products = require('./data/products.js')

//64130500004 กษิดิ์เดช พลายเผือก
function paginateManagement(items, rows) {
  const rowsPerPage = rows
  const products = items

  const showItemsOfCurrentPage = (currentPageNumber = 1) => {
    const items = getItemsOfCurrentPage(products, currentPageNumber, rowsPerPage)

    const ulProducts = document.getElementById('products')
    ulProducts.textContent = ''
    items.forEach(item => {
      const liElement = document.createElement('li')
      liElement.textContent = `ID:${item.id}, NAME:${item.name}`
      ulProducts.appendChild(liElement)
    })
  }
  const pageHandler = (event) => {
    const btnAll = document.getElementsByTagName('button')

    Array.from(btnAll).forEach(btn => {
      const btnNotActive = document.getElementById(btn.id)
      btnNotActive.setAttribute('style', 'border: 1px solid #999')
    })

    if (event !== undefined) {
      const btnActive = event.target
      btnActive.style = 'background-color: LightSteelBlue'
      showItemsOfCurrentPage(Number(event.target.id))
    } else {
      const btnAtiveFirst = document.getElementById(1)
      btnAtiveFirst.style = 'background-color: LightSteelBlue'
      showItemsOfCurrentPage(1)
    }

  }
  const showPageNumbers = () => {
    const totalPage = getTotalPages(products, rowsPerPage)
    const ulPagination = document.querySelector('.pagination')
    for (let i = 1; i <= totalPage; i++) {
      const btn = document.createElement('button')
      btn.id = i
      btn.textContent = i
      ulPagination.appendChild(btn)
      btn.addEventListener('click', pageHandler)
    }
  }

  return {
    showPageNumbers,
    pageHandler
  }
}
// module.exports = paginateManagement
export { paginateManagement }
const { showPageNumbers, pageHandler } = paginateManagement(products, 10)
showPageNumbers()
pageHandler()

