//console.log(confirm("Are you ok"))

const username = prompt("What you name: ","user")
if(username===null)alert("Hi, guest") 
else alert(confirm(`Are you [${username}]`)?`Welcome, ${username}`:"Welcome, guest")

if(username!==null){
    const h1first = document.createElement("div")
    h1first.setAttribute("style","color: green;")
    h1first.textContent = username
    const allDOM = document.body.children
    const firstDOM = allDOM[0]
    firstDOM.appendChild(h1first)
}