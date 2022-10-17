class Pokemon{
//เริ่มเขียนตรงนี้
#hp
  #atk
  constructor(name = undefined, hp = 0, atk =0) {
    this.name = name
    this.#hp = hp
    this.#atk = atk
  }
  getName(){
    return this.name
  }
  getHp(){
    return this.#hp
  }
  getAtk(){
    return this.#atk
  }
  setHp(hp){
    this.#hp = hp
  }
  getInfo(){
    console.log(`Name: ${this.name} | HP: ${this.#hp} | ATK: ${this.#atk}`)
  }
}

export default Pokemon