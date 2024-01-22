// INHERITANCE

class Warrior {
    constructor(name){
        this.name = name;
        this.health = 100;
    }
    recieveDamage(value){
        this.health -= value;
        console.log(`${this.name} has recieved an attack and now has ${this.health} points of health`);
    }

    attack(){
        console.log(" Sorry, no weapon");
    }
}

class Archer extends Warrior {
    constructor(name){
        super(name);
        this.weapon = "Bow";
    }
    fireBow(){
        console.log(`${this.name} is firing the arrow`);
    }
    attack(){
        this.fireBow()
    }
    
}

class Paladin extends Warrior {
    constructor(name){
        super(name);
        this.weapon = "Sword";
        this.health = 200;
    }
    swingSword(){
        console.log(`${this.name} is swinging the sword`);
    }
    attack(){
        this.swingSword()
    }
}

const warrior0 = new Warrior("Regular guy")
const warrior1 = new Archer("Robin")
const warrior2 = new Paladin("Arthur")
const warrior3 = new Paladin("Matheus")

console.log(warrior1);
console.log(warrior0);
console.log(warrior2);

warrior0.recieveDamage(3)

warrior2.swingSword()
warrior1.recieveDamage(100)

warrior3.swingSword()
