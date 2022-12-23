import  data  from "../data/quiz.json" assert {type: 'json'};
let nowQuestion = 0
let score = 0
function start() {
    nowQuestion = 0
    score = 0
    question()
    document.getElementById("score").textContent = ``
}
function question() {
    let now = data[nowQuestion]
    const question = document.getElementById("question")
    question.textContent = ``
    if (nowQuestion < data.length) {
        const QH4 = document.createElement("H3")
        QH4.textContent = now.No + `) ` + now.Q
        question.appendChild(QH4)
        for (const ansList of now.A) {
            const domAns = document.createElement("h6")
            const btnAns = document.createElement("button")
            btnAns.setAttribute("value", ansList.choice)
            btnAns.textContent = ansList.choice + ")"
            btnAns.className = "button"
            domAns.append(btnAns, ansList.value)
            //domAns.textContent = ansList.value
            question.append(domAns)
            btnAns.addEventListener("click", () => {
                checkANS(btnAns, now)
            })
        }

    } else {
        question.innerHTML = `<h1>Result:: Score ${score} of ${data.length}</h1></br>`
    }
}

function checkANS(button, now) {
    const scoreZone = document.getElementById("score")
    const statCorrect = document.createElement("span")
    statCorrect.className = "statCorrect"
    button.className = "button"
    if (button.value == now.ANS) {
        score++
        button.style = "background-color: yellowgreen;"
        statCorrect.style = "background-color: yellowgreen;"
        statCorrect.textContent = now.No
        scoreZone.append(statCorrect)
        nowQuestion++
        setTimeout(question, 500)
    } else {
        button.style = "background-color: red;"
        statCorrect.style = "background-color: red; color: white;"
        statCorrect.textContent = now.No
        scoreZone.appendChild(statCorrect)
        nowQuestion++
        setTimeout(question, 500)
    }
}


const startBtn = document.getElementById("control")
startBtn.addEventListener("click", () => {
    startBtn.textContent = "re quiz".toUpperCase()
    start()
})

