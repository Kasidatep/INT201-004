import poke from './pokemon.json' assert { type: "json" };
import pokeImg from './pokemon-images.json' assert { type: "json" };

console.log("ADMIN: KasP_DEV")
console.log(pokeImg.Beedrill)
poke.forEach(pokemon => {
    if (pokeImg[pokemon.name.english]!==undefined) {
        console.log(pokeImg[pokemon.name.english])
        const pokeDex = document.getElementById("pokedex")
        const div = document.createElement("div")
        div.setAttribute("class", "pokeCard")
        pokeDex.appendChild(div)

        const img = document.createElement("img")
        img.setAttribute("src", pokeImg[pokemon.name.english])
        img.setAttribute("class", "pokeImg")
        div.appendChild(img)

        const p = document.createElement("p")
        p.innerText = pokemon.name.japanese
        div.appendChild(p)
    }
})