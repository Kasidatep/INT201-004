document.getElementById("getcomparemodal").addEventListener('click',()=>{
    alert(`
SESSION: ${sessionStorage.getItem(`visit`)}
LOCAL: ${localStorage.getItem(`visit`)}
`)
})
