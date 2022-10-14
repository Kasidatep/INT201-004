const { pokeList } = require('./pokeList.js');

const poke = require('./pokeList.js').pokeList;
//เริ่มเขียนต่อจากตรงนี้

function firePokeList(pokeList){
    let listFirePoke =[]
    for(const item of pokeList){ 
        if(item !== null && item.type === `fire`){
            listFirePoke.push(item)
        }
    }
    listFirePoke.sort((a, b) => a.id-b.id)
    return listFirePoke
}

console.log(firePokeList(pokeList))

function maxPokeAtk(pokeList) {
    let maxatkgrass = {atk:0}, maxatkfire = {atk:0}, maxatkelectric = {atk:0}
    for(const list of pokeList){ 
        if (list === null){}
        else if(list.type === `grass`){
             if(maxatkgrass.atk < list.atk){
                maxatkgrass = list
            }
        }else if(list.type === `fire`){
            if(maxatkfire.atk < list.atk){
                maxatkfire = list
            }
        }else if(list.type === `electric`){
            if(maxatkelectric.atk < list.atk){
                maxatkelectric = list
            }
        }
    }
    let listmaxATK = [maxatkgrass,maxatkfire,maxatkelectric]
    listmaxATK.sort((a,b) => a.atk - b.atk)
    return listmaxATK
}
console.log(maxPokeAtk(pokeList))