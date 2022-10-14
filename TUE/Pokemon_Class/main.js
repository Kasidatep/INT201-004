import Pokemon from "./poke_class.js";

function battle(poke1,poke2){
    function random(min,max){
        return Math.floor(Math.random()*(max-min+1)+min)
    }
    function attack(attacker,defender){
        console.log(`${attacker.getName()} attack ${defender.getName()}`)
        defender.setHp(defender.getHp()-attacker.getAtk())
        defender.getInfo()
    }
    
    for (let i = 1; i <= 10; i++) {
        if(poke1.getHp()<=0) break
        if(poke2.getHp()<=0) break
        console.log(`====round ${i}=====`)
        if(random(1,10)%2===0) attack(poke1,poke2)
        else attack(poke2,poke1)
    }

    console.log(`====END====`)
    poke1.getInfo()
    poke2.getInfo()
    if(poke1.getHp()>poke2.getHp()) console.log(`${poke1.getName()} Win`)
    else if(poke1.getHp()<poke2.getHp())  console.log(`${poke2.getName()} Win`)
    else console.log(`เสมอ`)
}

const red = new Pokemon("ไอแดง",150,15)
const green = new Pokemon("ไอเขียว",90,24)
battle(red,green)