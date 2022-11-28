import { init } from "./map.js"
const queryURL = `http://ip-api.com/json/`
const queryField = `?fields=status,message,continent,country,countryCode,region,regionName,city,district,zip,lat,lon,timezone,isp,org,as,reverse,mobile,proxy,hosting,query`
const flagAPI = 'https://countryflagsapi.com/png/'

const submitBtn = document.getElementById("submit")
const infoIp = document.getElementById("infoIp")

const data = async (queryConnection) => {
    const query = await document.getElementById("input").value
    const data = await fetch(`${queryURL}${query}${queryField}`)
    const response = await data.json()
    if (response.status === `success`) {
        const filed = [
            { ID: `message`, NAME: `message` },
            { ID: `org`, NAME: `organization` },
            { ID: `query`, NAME: `IP` },
            { ID: `as`, NAME: `as` },
            { ID: `isp`, NAME: `isp` },
            { ID: `city`, NAME: `city` },
            { ID: `country`, NAME: `country` },
            { ID: `lat`, NAME: `latitude` },
            { ID: `lon`, NAME: `longitude` },
            { ID: `reverse`, NAME: `reverse` }
        ]
        document.querySelector("#infoIp").textContent = ``
        filed.forEach((name) => {
            if (response[name.ID] !== undefined) {
                const detail = document.createElement("div")
                detail.className = `detail`
                const topic = document.createElement("span")
                topic.className = `topic`
                topic.textContent = name.NAME.toUpperCase() + ": "
                const filedname = document.createElement("span")
                filedname.setAttribute("id", name.ID)
                filedname.setAttribute("class", "content")
                filedname.innerHTML = response[name.ID] ?? `-`
                detail.append(topic, filedname)
                infoIp.appendChild(detail)
            }
        })
        let flag = document.createElement("img")
        flag.setAttribute("src", `https://countryflagsapi.com/png/` + response.countryCode)
        flag.className = `flag`
        document.getElementById("country").append(flag)
        init(response.lat, response.lon)
    }
    else {
        document.querySelector("#infoIp").textContent = `SOMETHING WRONG`
        document.querySelector(`div.infoIp`).innerHTML = ``
    }
}

input.addEventListener("keypress", (e) => {
    if (e.key === `Enter`) {
        data()
    }
})

submitBtn.addEventListener("click", (e) => {
    data()
}
)



data(`${queryURL}${queryField}`)
