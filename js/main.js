import Game from './game.js';

let game = new Game();

game.makeMove(0); // X
game.makeMove(3); // O
game.makeMove(7); // X
game.makeMove(4); // O
game.makeMove(2); // X
game.makeMove(5); // O
console.log(game.board);
console.log(game.findWinningCombination());
