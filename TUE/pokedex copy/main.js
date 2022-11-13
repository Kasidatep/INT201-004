import poke from './pokemon.json' assert { type: "json" };
import pokeImg from './pokemon-images.json' assert { type: "json" };

poke.forEach(pokemon => {
    const pokeDex = document.getElementById("pokedex")
    const div = document.createElement("div")
    div.setAttribute("class", "pokeCard")
    pokeDex.appendChild(div)

    const img = document.createElement("img")
    img.setAttribute("src", pokeImg[pokemon.name.english] ?? "./assets/noimg.jpg")
    img.className = "pokeImg"
    div.appendChild(img)

    const p = document.createElement("p")
    p.innerText = pokemon.name.japanese
    div.appendChild(p)
})

const pokemoninfo = poke[1]
console.log(pokemoninfo)
const pokeInfo = document.getElementById("pokeInfo")
const imgInfo = document.createElement("img")
imgInfo.setAttribute("src", pokeImg[pokemoninfo.name.english] ?? "./assets/noimg.jpg")
imgInfo.className = "imgInfo"
pokeInfo.appendChild(imgInfo)
const infoName = document.createElement("div")
infoName.className = "infoName"
infoName.innerText = pokemoninfo.name.japanese
pokeInfo.appendChild(infoName)
const infoDetails = document.createElement("div")
infoDetails.className = "infoDetail"
infoDetails.innerHTML =
                    "<span> English name : &nbsp; </span>" + pokemoninfo.name.english + "<br>" +
                    "<span> Chinese name : &nbsp; </span>" + pokemoninfo.name.chinese + "<br>" +
                    "<span> French name : &nbsp; </span>" + pokemoninfo.name.french
pokeInfo.appendChild(infoDetails)