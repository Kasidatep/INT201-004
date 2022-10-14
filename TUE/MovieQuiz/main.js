const movies = require('./movise.json').movies
let playList = []

function addMovie(movies, ...id) {
    for (let i = 0; i < id.length; i++) {
        for (let j = 0; j < movies.length; j++) {
            //console.log(`id ${i}=${id[i]} --- movie ${j}=>${movies[j].id} so ${movies[j].id}===${id[i]}    ${id.length}`)
            if (movies[j].id === id[i]) {
                playList.push(movies[j])
            }
        }
    }
}

function deleteMovie(id) {
    let newArray = []
    for (let i = 0; i < playList.length; i++) {
        if (id === playList[i].id) {
            playList[i].id = `deleted`
        }
       // console.log(`${playList.length} ${id}===${playList[i].id}`)
    }
    for (let i = 0; i < playList.length; i++) {
        if (playList[i].id !== `deleted`) {
            newArray.push(playList[i])
        }
    }
    playList = newArray
}
function swapMovie(index_one, index_two){
    let swapItem
    if(index_one<playList.length&&index_two<playList.length){
        swapItem = playList[index_one]
        playList[index_one] = playList[index_two]
        playList[index_two] = swapItem
    }else{
        console.log(`Array Index Out Of Bounds`)
    }
}

addMovie(movies, 1, 3, 5, 2)
console.log(playList)
console.log(`---------------`)
deleteMovie(5)
console.log(playList)
console.log(`---------------`)
swapMovie(0,2)
console.log(playList)
swapMovie(0,8)