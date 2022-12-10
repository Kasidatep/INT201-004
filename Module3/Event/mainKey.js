const input = document.getElementById("searchValue")
const display = document.getElementById("display")

//input realtime change
input.addEventListener('input',(event)=>{
        display.textContent = input.value
})

//key press
input.addEventListener("keypress",(event)=>{
    if(event.key==='Enter'){
        alert(input.value)
    }
})

const createBtn = document.getElementById('submit')
createBtn.addEventListener('click', (event) => {
  event.preventDefault()
  const allInputEles = document.querySelector('input#username')
  const pEle = document.querySelector('p#accountStatus')
  if (allInputEles.value.length!==0) {
    pEle.textContent = 'your account has been created!, welcome '+ document.querySelector('input#username').value
    pEle.style = 'color:yellowgreen'
  } else {
    pEle.textContent = 'missing some values, please try again'
    pEle.style = 'color:red'
  }
})