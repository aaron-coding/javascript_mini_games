var readline = require('readline')
var reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function HanoiGame() {
  this.stacks = [[3, 2, 1], [], []]
};

HanoiGame.prototype.isWon = function () {
  if (stack[0].length === 0 && (stack[1].length === 3 || stack[2].length === 3)) {
    return true;
  } else {
    return false;
  }
}

HanoiGame.prototype.isValidMove = function (start, end) {
  fromDisk = this.stacks[start][this.stacks[start].length - 1];
  toDisk = this.stacks[end][this.stacks[end].length - 1];

  if (fromDisk == undefined ) {
    return false;
  }

  if (fromDisk > toDisk) {
    return false;
  } else {
    return true;
  }
};

HanoiGame.prototype.move = function (start, end) {
  if (this.isValidMove(start, end)) {
    this.stacks[end].push(this.stacks[start][this.stacks[start].length - 1]);
    this.stacks[start] = this.stacks[start].slice(0, this.stacks[start].length - 1)
    return true
  } else {
    return false
  }
}

HanoiGame.prototype.print = function () {
  // console.log(JSON.stringify(this.stacks));
  console.log(this.stacks);
}

HanoiGame.prototype.promptMove = function (callback) {
  this.print();
  reader.question("Enter a tower to move from:", function (fromTower) {
     reader.question("Enter a tower to move to:", function (toTower) {
        var from = parseInt(fromTower);
        var to = parseInt(toTower);
        this.move(from, to);
        this.promptMove();
      }.bind(this));
  }.bind(this));

}

// HanoiGame.prototype.run = function (completion)

h = new HanoiGame();
h.promptMove();
h.print();
