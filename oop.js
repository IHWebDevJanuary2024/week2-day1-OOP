const squares = [100, -10, 0, 0, -40, -10, -10, 5, 0, -10, -50, -10, 0, 0, -50, -10];

console.log(squares.length)

let dice;

let player1 = {
    name: 'Joaquim',
    color: 'red',
    position: 0,
    cash: 1000
};

let player2 = {
    name: 'Maxence',
    color: 'blue',
    position: 0,
    cash: 1000
};

let player3 = {
    name: 'Mostafa',
    color: 'black',
    position: 0,
    cash: 1000
};

// HERE I'm rolling the dice
dice = 1 + Math.floor(Math.random() * 6);

console.log("ROLL THE DICE: ", dice);

console.log("WE move the player from: ", player1.position );

player1.position += dice;

console.log("The player is now on positon: ", player1.position );
dice = 1 + Math.floor(Math.random() * 6);

console.log("ROLL THE DICE: ", dice);

console.log("WE move the player from: ", player1.position );

player1.position += dice;

console.log("The player is now on positon: ", player1.position );
dice = 1 + Math.floor(Math.random() * 6);

console.log("ROLL THE DICE: ", dice);

console.log("WE move the player from: ", player1.position );

player1.position += dice;

console.log("The player is now on positon: ", player1.position );
dice = 1 + Math.floor(Math.random() * 6);

console.log("ROLL THE DICE: ", dice);

console.log("WE move the player from: ", player1.position );

player1.position = (player1.position + dice) % squares.length;

console.log("The player is now on positon: ", player1.position );

console.log("PLAYER 1 HAS: ", player1.cash);

player1.cash += squares[player1.position];

console.log("PLAYER NOW 1 HAS: ", player1.cash);



