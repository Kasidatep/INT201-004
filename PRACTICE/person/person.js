import { firstname } from "./resource/firstname.js";
import { lastname } from "./resource/lastname.js";
import  fullnamestate  from "./resource/fullnameState.json" assert{type: "json"};
import address from "./resource/address.json" assert {type:"json"}

console.log(firstname.length)
console.log(lastname.length)
function random() {
    return Math.floor(Math.random() * 100);
  }
const listName = []
//250 items
const body = document.getElementById("item")
let i = 0
do{ 
    const stateFull = fullnamestate.filter(name => name.abbreviation == address[i]?.state)
    if(i<101){
        const div = document.createElement("div")
        div.innerHTML = firstname[i] + "  " + lastname[i] + " " + address[i].address + "  " +address[i].city + " " + stateFull[0].name +" "+ address[i].zip 
        console.log("#" +i+" "+ firstname[i]+" "+lastname[i])
        listName.push(firstname[i]+lastname[i])
        body.append(div)
        i++
    }else{
    const fname = firstname[random()]
    const lname = lastname[random()]
    
    if(listName.find(name => name===fname+lname)===undefined){  
        console.log("New "+ fname + " " + lname + " > "+ listName.push(fname+lname))
        const div = document.createElement("div")
        div.innerHTML = fname + "  " + lname + " " + address[i]?.address + "  " +address[i]?.city + " " + stateFull[0]?.name +" "+ address[i]?.zip 
        body.append(div)
         i++
    }else{
        console.log("oop, same name: "+ fname + " " + lname +" > "+ listName.findIndex(name => name === fname+lname))
    }
}
}
while(i<address.length)
