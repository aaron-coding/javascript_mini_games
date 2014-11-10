Board = require("./board");
var readline = require('readline');
var reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function Game() {
  this.playerX = "x",
  this.playerO = "o",
  this.b = new Board();
  this.currentPlayer = this.playerX;
}

Game.prototype.run = function (completionCallback) {
  if (this.b.winner(this.playerX) || this.b.winner(this.playerO)) {
    this.b.render();
    completionCallback();
  } else {
    this.promptMove(this.currentPlayer, completionCallback);
    this.b.render();
    var swap = (this.currentPlayer === this.playerX) ? this.playerO : this.playerX;
    this.currentPlayer = swap;
  }
};

Game.prototype.promptMove = function(player, completionCallback) {
  reader.question( player + " where do you want to place your next mark?", function(pos) {
  
    var answer = pos.split(",");
    console.log(answer);
    var xToPass = parseInt(answer[0], 10);
    var yToPass = parseInt(answer[1], 10);
    this.b.placeMark(xToPass, yToPass, player)
    this.run(completionCallback);
  }.bind(this));
};

module.exports = Game;

var congrats = function () { //completion callback with which to run Game.run
  console.log("Nice job.");
  reader.close();
};

g = new Game();
g.run(congrats);