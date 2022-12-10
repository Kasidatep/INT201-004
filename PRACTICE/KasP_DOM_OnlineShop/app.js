let product = []
let myCart = []
async function loadProduct() {
    const dataApi = await fetch('https://dummyjson.com/products?limit=100')
    const response = await dataApi.json()
    product = await response.products
    showProduct()
}

function showProduct() {
    const showProduct = document.getElementById("product")
    product.forEach(p => {
        const box = document.createElement("div")
        box.className = "productBox"
        const name = document.createElement("div")
        name.style = "height: 16px; overflow:hidden; font-size: 1rem; padding: 3px;"
        const img = document.createElement("img")
        const add = document.createElement("button")
        add.textContent = "Add to cart"
        add.className = "addBtn"
        add.value = p.id
        img.src = p.thumbnail
        img.style = "border-radius:10px 10px 0px 0px"
        add.addEventListener("click", () => addTocart(add))
        name.textContent = p.title
        box.append(img, name, add)
        showProduct.appendChild(box)
    })
}

const cart = document.getElementById("cart")
const cartTitle = document.createElement("h2")
cartTitle.innerHTML = `<i class="fa fa-shopping-cart" aria-hidden="true"></i> My Cart`
const total = document.createElement("div")
total.id = "total"
total.textContent = "Total 0.00 USD"
cart.append(cartTitle, document.createElement("hr"), total)

function addTocart(add) {
    let item = myCart.find(p => p.id == Number(add.value))
    if (item === undefined) {
        const prod = product.find(p => p.id == Number(add.value))
        myCart.push({ id: prod.id, title: prod.title, price: prod.price, amount: 1 })
        item = myCart.find(p => p.id == Number(add.value))
        cartControl(item)
    }
}
function cartControl(item) {
    updateTotal()
    const newitem = document.createElement("div")
    const title = document.createElement("div")
    const price = document.createElement("span")
    const amount = document.createElement("span")
    const removebtn = document.createElement("button")
    const increasebtn = document.createElement("button")
    const decreasebtn = document.createElement("button")

    title.textContent = item.title
    title.setAttribute("class", "title")

    amount.textContent = `x${item.amount}`
    amount.setAttribute("class", "cart-amount")

    price.textContent = ` $ ` + item.price + ` `
    price.setAttribute("class", "cart-price")

    increasebtn.textContent = "+"
    decreasebtn.textContent = "-"
    removebtn.innerHTML = `<i class="fa fa-trash" aria-hidden="true"></i>`

    increasebtn.addEventListener("click", () => {
        item.amount++
        updateTotal()
        amount.textContent = `x${item.amount}`
    })
    decreasebtn.addEventListener("click", () => {
        item.amount--
        updateTotal()
        amount.textContent = `x${item.amount}`
        if (item.amount < 1) removeItem(removebtn, item)
    })
    removebtn.addEventListener("click", () => {
        removeItem(removebtn, item)
    })

    newitem.append(title)
    newitem.append(amount, price, decreasebtn, increasebtn, removebtn)
    cart.insertBefore(newitem, total)
}

function removeItem(removebtn, item) {
    removebtn.parentElement.remove(removebtn.parentElement)
    myCart = myCart.filter(p => item.id !== p.id)
    updateTotal()
}

function updateTotal() {
    const sum = myCart.reduce((total, now) => {
        return total + now.price * now.amount
    }, 0.00)
    //console.log("total change")
    document.getElementById("total").textContent = `Total ${sum} USD`
    document.title = `Online Shop | ${myCart.length} Product : $${sum}`
}

function loadCart() {
    myCart = JSON.parse(localStorage.getItem(`KasP_Cart`))
    console.log(myCart)
    if(myCart) myCart.forEach((p) => cartControl(p))
}

window.addEventListener("load", (loadProduct))
window.addEventListener("load", (loadCart))
window.addEventListener("beforeunload", () => {
    localStorage.setItem('KasP_Cart', JSON.stringify(myCart));
});