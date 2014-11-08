var readline = require('readline')
var reader = readline.createInterface({

  input: process.stdin,
  output: process.stdout
});

function HanoiGame() {
  this.stacks = [[3, 2, 1], [], []]
};

HanoiGame.prototype.isWon = function () {
  if (this.stacks[0].length === 0 && (this.stacks[1].length === 3 || this.stacks[2].length === 3)) {
    return true;
  } else {
    return false;
  }
}

HanoiGame.prototype.isValidMove = function (start, end) {
  if ((start > -1 && start < 3) && (end > -1 && end < 3)) {
    fromDisk = this.stacks[start][this.stacks[start].length - 1];
    toDisk = this.stacks[end][this.stacks[end].length - 1];

    if (fromDisk == undefined ) {
      console.log("WAT!")
      return false;
    }

    if (fromDisk > toDisk) {
      console.log("Too big yo!")
      return false;
    } else {
      return true;
    }
  } else {
    console.log("Error: undefined is not a function.");
    return false;
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
  reader.question("Enter a tower to move from:", function (fromTower) {
     reader.question("Enter a tower to move to:", function (toTower) {
        var from = parseInt(fromTower);
        var to = parseInt(toTower);
        this.move(from, to);
        this.run(callback);
      }.bind(this));
  }.bind(this));

}

var congrats = function () {
  console.log("Nice job.")
  reader.close();
}


HanoiGame.prototype.run = function (completionCallback) {
  this.print();
  if (this.isWon()) {
    completionCallback();
  } else {
    this.promptMove(completionCallback);
    // this.run();
  }
}

h = new HanoiGame();
h.run(congrats);
