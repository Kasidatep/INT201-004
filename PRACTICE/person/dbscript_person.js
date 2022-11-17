import { firstname } from "./resource/firstname.js";
import { lastname } from "./resource/lastname.js";
import fullnamestate from "./resource/fullnameState.json" assert{type: "json"};
import address from "./resource/address.json" assert {type: "json"}

console.log(firstname.length)
console.log(lastname.length)
function random() {
    return Math.floor(Math.random() * 100);
}
function salary() {
    const result = Math.floor(Math.random() * (300 - 180 + 1) + 180)
    return `${result}0.00` 
}
function phoneRandom(){
    return Math.floor(Math.random() * (999 - 100 + 1) + 100)
}
function phoneRandomLast(){
    return Math.floor(Math.random() * (9999 - 1000 + 1) + 1000)
}
function pointRandom(){
    return Math.floor(Math.random() * (50000 - 0 + 1) + 0)
}
function memberTypeRandom(){
    return Math.floor(Math.random() * (3 - 1 + 1) + 1)
}
function dateRandom(yStart,yEnd){
    const year=Math.floor(Math.random() * (yEnd - yStart + 1) + yStart)
    const m = Math.floor(Math.random() * (9 - 1 + 1) + 1)
    const month = (m.length==2)?`${m}`:`0${m}`
    const day =Math.floor(Math.random() * (28 - 10 + 1) + 10)
    return year+"-"+month+"-"+day
}
const listName = []
//250 items
const body = document.getElementById("item")
let i = 0
let personObj = []
do {
    const stateFull = fullnamestate.filter(name => name.abbreviation == address[i]?.state)
    if (i < 101) {
        const person = { firstname: firstname?.[i], lastname: lastname?.[i], address: { addressL1: address[i]?.address, addressL2: null, city: address[i]?.city, state: stateFull[0]?.name, zip: address[i]?.zip } }
       // console.log(person)
        personObj.push(person)
        i++
    } else {
        const fname = firstname[random()]
        const lname = lastname[random()]

        if (listName.find(name => name === fname + lname) === undefined) {
            const person = { firstname: fname, lastname: lname, address: { addressL1: address[i].address, addressL2: null, city: address[i].city, state: stateFull[0].name, zip: address[i].zip } }
            personObj.push(person)
            i++
        }
    }
}
while (i < address.length)

//console.log(personObj)
let personId = 0
personObj.forEach((person,personNo) => {
    const div = document.createElement("div")
    const body = document.getElementById("item")
    const usernameStaff = person.firstname.toLocaleLowerCase()+"."+person.lastname[0].toLocaleLowerCase()+person.lastname[1]+person.lastname[2]+"@library.email"
    const usernameUser = person.firstname.toLocaleLowerCase()+"."+person.lastname[0].toLocaleLowerCase()+person.lastname[1]+person.lastname[2]+person.lastname[3]+"@mail.com"
   const phoneNumber = "+1 "+phoneRandom()+" "+phoneRandom()+" "+phoneRandomLast()
    
    if(personNo===0){personId++}
    else if(personNo===1){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, 
            addressLine1, city, state, zipcode,
             startDate, email, phone, salary, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'CEO', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','3200.00', '1');`
        personId++
    }else if(personNo === 2){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Manager', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '1', '1');`
        personId++
    }else if(personNo < 9){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Librarian', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '2', '1');`
        personId++
    }else if(personNo < 11){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Cleaner', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '2', '1');`
        personId++
    }else if(personNo < 13){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Securerity Guard', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '2', '1');`
        personId++
    }else if(personNo === 13){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Manager', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '1', '2');`
        personId++
    }else if(personNo < 21){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Librarian', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '13', '2');`
        personId++
    }else if(personNo < 24){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Cleaner', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '13', '2');`
        personId++
    }else if(personNo < 26){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Securerity Guard', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '13', '2');`
        personId++
    }else if(personNo === 26){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Manager', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '1', '3');`
        personId++
    }else if(personNo < 32){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Librarian', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '26', '3');`
        personId++
    }else if(personNo === 32){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Cleaner', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '26', '3');`
        personId++
    }else if(personNo < 35){
        div.innerHTML =  `INSERT INTO library.staff (staffId, firstname, lastname, position, addressLine1, city, state, zipcode,startDate, email, phone, salary, staff_reportTo, branchId) 
        VALUES ('${personNo}', '${person.firstname}', '${person.lastname}', 'Securerity Guard', 
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}', '${person.address.zip}', 
        '${dateRandom(2000,2020)}', '${usernameStaff}', '${phoneNumber}','${salary()}', '26', '3');`
        personId++
    }else if(personNo < 35+42){
        console.log(person)
        div.innerHTML =  `INSERT INTO library.user (userId, firstname, lastname, addressLine1, city, state, zipcode, createDate, email, phone, point, membertypeId) 
        VALUES ('${personNo-34}', '${person.firstname}', '${person.lastname}',
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}',
        '${person.address.zip}', '${dateRandom(2010,2021)}', '${usernameUser}', '${phoneNumber}', '${pointRandom()}', '${memberTypeRandom()}');
        `
        div.setAttribute("style","color: green;")
        personId++
    }else if(personNo < 35+75){
        console.log(person)
        div.innerHTML =  `INSERT INTO library.user (userId, firstname, lastname, addressLine1, city, state, zipcode, createDate, email, phone, point, membertypeId) 
        VALUES ('${personNo-34}', '${person.firstname}', '${person.lastname}',
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}',
        '${person.address.zip}', '${dateRandom(2010,2021)}', '${usernameUser}', '${phoneNumber}', '${pointRandom()}', '${memberTypeRandom()}');
        `
        div.setAttribute("style","color: blue;")
        personId++
    }else if(personNo < 35+150){
        console.log(person)
        div.innerHTML =  `INSERT INTO library.user (userId, firstname, lastname, addressLine1, city, state, zipcode, createDate, email, phone, point, membertypeId) 
        VALUES ('${personNo-34}', '${person.firstname}', '${person.lastname}',
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}',
        '${person.address.zip}', '${dateRandom(2010,2021)}', '${usernameUser}', '${phoneNumber}', '${pointRandom()}', '${memberTypeRandom()}');
        `
        div.setAttribute("style","color: pink;")
        personId++
    }else if(personNo < 35+175){
        console.log(person)
        div.innerHTML =  `INSERT INTO library.user (userId, firstname, lastname, addressLine1, city, state, zipcode, createDate, email, phone, point, membertypeId) 
        VALUES ('${personNo-34}', '${person.firstname}', '${person.lastname}',
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}',
        '${person.address.zip}', '${dateRandom(2010,2021)}', '${usernameUser}', '${phoneNumber}', '${pointRandom()}', '${memberTypeRandom()}');
        `
        div.setAttribute("style","color: blue;")
        personId++
    }else if(personNo < 35+200){
        console.log(person)
        div.innerHTML =  `INSERT INTO library.user (userId, firstname, lastname, addressLine1, city, state, zipcode, createDate, email, phone, point, membertypeId) 
        VALUES ('${personNo-34}', '${person.firstname}', '${person.lastname}',
        '${person.address.addressL1}', '${person.address.city}', '${person.address.state}',
        '${person.address.zip}', '${dateRandom(2010,2021)}', '${usernameUser}', '${phoneNumber}', '${pointRandom()}', '${memberTypeRandom()}');
        `
        div.setAttribute("style","color: green;")
        personId++
    }
    body.append(div)
   
})
