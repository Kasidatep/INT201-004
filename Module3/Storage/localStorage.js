let visit = localStorage.getItem(`visit`)
if(visit===null) {localStorage.setItem('visit',1)}
    else {localStorage.setItem('visit',Number(visit)+1)}

    