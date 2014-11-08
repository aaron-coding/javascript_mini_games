function Board() {
  this.grid = [[" ", " ", " "], [" ", " ", " "], [" ", " ", " "]]
};

Board.prototype.won = function (player) {
  if (this.wonOnDiagonal(player)) ||
     (this.wonOnHorizontal(player)) ||
     (this.wonOnVertical(player))) {
      return true
  } else {
      return false
  }
};

Board.prototype.wonOnDiagonal = function (player) {
  if (this.grid[0][0] === player && this.grid[1][1] === player &&
      this.grid[2][2] === player) {
    return true;
  }
  else if (this.grid[0][2] === player && this.grid[1][1] === player &&
      this.grid[2][0] === player) {
    return true
  }
  return false
};

Board.prototype.wonOnHorizontal = function (player) {
  for (var i = 0; i < 3; i++) {
    if (this.grid[i][0] === player && this.grid[i][1] === player &&
        this.grid[i][2] === player) {
      return true;
    }
  }

  return false;
};

Board.prototype.wonOnVertical = function (player) {
    for (var i = 0; i < 3; i++) {
      if (this.grid[0][i] === player && this.grid[1][i] === player &&
          this.grid[2][i] === player) {
        return true;
      }
    }

    return false;
};
