class Animal {
    constructor(name = '',  isMammal = true) {
        this.name = name;
        this.isMammal = isMammal
    }
}

class frog extends Animal {
    constructor(...params) {
        super(...params)

    }
    jump() {
        return `${this.name} HopHop`
    }
}

class Ape extends Animal {
    constructor(...params) {
        super(...params)

    }
    yell() {
        return `${this.name} Auooo`
    }
}

let MyFrog = new Frog('Jump','HopHop', true)
console.log(MyFrog.jump());

let myApe = new Ape('Ape','Auoo',  true)
console.log(myApe.yell());




