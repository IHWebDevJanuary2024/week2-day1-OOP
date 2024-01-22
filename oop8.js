let squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

let player1 = {
    name: 'Joaquim',
    color: 'red',
    position: 0,
    cash: 1000
}

let player2 = {
    name: 'Anacleto',
    color: 'green',
    position: 0,
    cash: 1000
}

function move() {
    let dice = 1 + Math.floor(6 * Math.random());
    this.position = (this.position + dice) % squares.length;
    this.cash += squares[this.position];
    console.log(`${this.name} is moving ${dice} squares and now is at position ${this.position}`);
    if (this.cash < 0) {
        console.log(`Game over for ${this.name}.`);
    }
}

// printThis.apply(school)

move.apply(player1);
move.apply(player2);

