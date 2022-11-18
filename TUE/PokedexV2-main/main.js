import poke from './pokemon.json' assert { type: "json" };
import pokeImg from './pokemon-images.json' assert { type: "json" };

let i = 0
const containerClass = document.getElementsByClassName("container")
const container = containerClass[0]
const pokeCard = document.getElementById("poke_card")
const pokeInfo = document.getElementById("poke_info")

const img = document.createElement("img")
img.setAttribute("src", pokeImg[poke[i].name.english] ?? "./assets/noimg.jpg")
pokeCard.insertBefore(img, pokeInfo)

const p = document.createElement("p")
p.textContent = poke[i].name.japanese
pokeInfo.append(p)


const btn = document.createElement("div")
btn.className = "btn"
container.append(btn)

const buttonPrev = document.createElement("button")
buttonPrev.className = "prev_btn"
buttonPrev.textContent = "Previous"
btn.append(buttonPrev)

const buttonNext = document.createElement("button")
buttonNext.className = "next_btn"
buttonNext.textContent = "Next"
btn.append(buttonNext)

const inputSearch = document.createElement("input")
inputSearch.setAttribute("type","number")
inputSearch.className = "inputSearch"
inputSearch.setAttribute("value",i+1)
inputSearch.setAttribute("max",poke.length - 1)
inputSearch.setAttribute("min", 0)
btn.insertBefore(inputSearch,buttonNext)

buttonPrev.addEventListener("click", () => {
    i = (i == 0) ? poke.length - 1 : i - 1
    img.setAttribute("src", pokeImg[poke[i].name.english] ?? "./assets/noimg.jpg")
    p.textContent = poke[i].name.japanese
    inputSearch.setAttribute("value",i+1)
})
buttonNext.addEventListener("click", () => {
    i = (i == poke.length - 1) ? 0 : i + 1
    img.setAttribute("src", pokeImg[poke[i].name.english] ?? "./assets/noimg.jpg")
    p.textContent = poke[i].name.japanese
    inputSearch.setAttribute("value",i+1)
})
inputSearch.addEventListener("change", (event) => {
    if(event.target.value > poke.length) i=poke.length-1
    else if(event.target.value < 1) i=0
    else i=event.target.value-1
    
    img.setAttribute("src", pokeImg[poke[i].name.english] ?? "./assets/noimg.jpg")
    p.textContent = poke[i].name.japanese
    inputSearch.setAttribute("value",i+1)
})
