class course {
    constructor(id, name, desc) {
        this.id = id
        this.name = name
        this.desc = desc
    }
    getId() {
        return this.id
    }
    getName() {
        return this.name
    }
    getDesc() {
        return this.desc
    }
    getCourse() {
        return { id: this.id, name: this.name, desc: this.desc }
    }
}

module.exports = course