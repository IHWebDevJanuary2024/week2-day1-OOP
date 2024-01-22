// Example of a VERY simple Monopoly game simulation

let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

// --- Initialization with methods ---

let player1 = {
  name: 'Joaquim',
  color: 'red',
  position: 0,
  cash: 1000,
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo () {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  },
};


let player2 = {
  name: 'Maxence',
  color: 'blue',
  position: 0,
  cash: 1000,
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo () {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  },
};

let player3 = {
  name: 'Mostafa',
  color: 'black',
  position: 0,
  cash: 1000,
  move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    if (this.cash < 0) {
      console.log(`Game over for ${this.name}.`);
    }
  },
  displayInfo () {
    console.log(`${this.name} is at position ${this.position} and has ${this.cash}€`);
  },
};



/* for (let i=0; i < 70; i++){
    player1.move();
    player2.move();
    player3.move();
    console.log(`This is the turn number ${i}`);
} */

while (player1.cash > 0 || player2.cash > 0 || player3.cash > 0) {
    player1.move();
    player2.move();
    player3.move();
}

// --- Display info  ---
player1.displayInfo();
player2.displayInfo();
player3.displayInfo();
