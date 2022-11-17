// INSERT INTO library.bookzone (zoneId, zone, floor, branchId) 
// VALUES ('GB2AI', 'A1', '2', '1');

const branch = [{branchId:1, branchCode:"AL", branchName:"Alabama Central Library"},
                {branchId:2, branchCode:"NY", branchName:"East Ave Library"},
                {branchId:3, branchCode:"MA", branchName:"Washington Central Library"}]
const zone=['1A','1B','1C','2A','2B','3A','3D','3Z','4A','4B','4C','4D','4F','5B']
function randomZone(){
    return Math.floor(Math.random() * (zone.length - 1 + 1) + 0)
}
function randomFloor(){
    return Math.floor(Math.random() * (2 - 1 + 1) + 2)
}

for (let i = 1; i < 11; i++) {
    const div = document.createElement("div")
    const body = document.getElementById("item")
    const zoneId = randomZone()
    const floor = randomFloor()
    const bid = 0
    div.textContent = ` 
    INSERT INTO library.bookzone (zoneId, zone, floor, branchId) 
    VALUES ('${i}', '${branch[bid].branchCode}${floor}-${zone[zoneId]}',
     '${floor}', '${branch[bid].branchId}');
    `
    body.append(div)
}
for (let i = 11; i < 25; i++) {
    const div = document.createElement("div")
    const body = document.getElementById("item")
    const zoneId = randomZone()
    const floor = randomFloor()
    const bid = 1
    div.textContent = ` 
    INSERT INTO library.bookzone (zoneId, zone, floor, branchId) 
    VALUES ('${i}', '${branch[bid].branchCode}${floor}-${zone[zoneId]}',
     '${floor}', '${branch[bid].branchId}');
    `
    body.append(div)
}
for (let i = 25; i < 34; i++) {
    const div = document.createElement("div")
    const body = document.getElementById("item")
    const zoneId = randomZone()
    const floor = randomFloor()
    const bid = 2
    div.textContent = ` 
    INSERT INTO library.bookzone (zoneId, zone, floor, branchId) 
    VALUES ('${i}', '${branch[bid].branchCode}${floor}-${zone[zoneId]}',
     '${floor}', '${branch[bid].branchId}');
    `
    body.append(div)
}

