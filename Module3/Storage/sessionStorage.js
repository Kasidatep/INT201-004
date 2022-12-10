let visit = sessionStorage.getItem(`visit`)
if(visit===null) {sessionStorage.setItem('visit',1)}
    else {sessionStorage.setItem('visit',sessionStorage.getItem()+1)}