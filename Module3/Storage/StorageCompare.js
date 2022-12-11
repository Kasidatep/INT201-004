const showId = document.getElementById("getCompare")
const session = document.createElement("span").textContent = `SESSION: ${sessionStorage.getItem(`visit`)}`
const local = document.createElement("span").textContent = `LOCAL: ${localStorage.getItem(`visit`)}`
showId.append(document.createElement('hr'),session,document.createElement('br'),local)

const clearBtn = document.getElementsByTagName('button')[0]
clearBtn.addEventListener('click',()=>{
    localStorage.removeItem('visit')
    sessionStorage.clear()
    document.location.reload()
})
