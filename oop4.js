
class Fruit {
    constructor(name, color){
        this.name = name
        this.color = color
        this.taste = "sweet"
    }
    eat(){
        console.log(`You are eating a ${this.color} ${this.name}, it's so ${this.taste}`);
    }
}

const fruit1 = new Fruit("Apple", "red");
const fruit2 = new Fruit("Mango", "red");
const fruit3 = new Fruit("Papaya", "red");

console.log(fruit1);
console.log(fruit2);
console.log(fruit3);

fruit2.eat()

// eat() THIS DOESN't WORK