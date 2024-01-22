// Example of a VERY simple Monopoly game simulation
 
let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];
 
// Creation of the class
class Player {
  // The constructor is the method triggered with the `new` keyword
  constructor(name, color) {
    this.name = name;
    this.color = color;
    this.position = 0;
    this.cash = 1000;
  }
 
  // Method move
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  }
 
  // Method displayInfo
  displayInfo() {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  }
}

// We can create players super fast like this if we have a class and a constructor:
const player1 = new Player("Marcel", "Black") // Instance of the class Player
const player2 = new Player("Mica", "Red") // Instance of the class Player
const player3 = new Player("Fer", "Blue") // Instance of the class Player

console.log(player1, player2, player3);

player1.move()
player2.move()

player1.displayInfo()
player2.displayInfo()

