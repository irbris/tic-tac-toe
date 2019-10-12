class TicTacToe {
  constructor() {    
    this.board = [
      [null, null, null],
      [null, null, null],
      [null, null, null]
    ];
    this.сurrentPlayerSymbol = 'x';
  }

  getCurrentPlayerSymbol() {
    return this.сurrentPlayerSymbol;
  }

  nextTurn(rowIndex, colIndex) {
    if (!this.board[rowIndex][colIndex]) {
      this.board[rowIndex][colIndex] = this.сurrentPlayerSymbol;

      if (this.сurrentPlayerSymbol == 'x') {
        this.сurrentPlayerSymbol = 'o';
      } else {
        this.сurrentPlayerSymbol = 'x';
      }
    }
    return this;
  }

  isFinished() {
    if (this.getWinner() || this.noMoreTurns()) {
      return true;
    } else {
      return false;
    }
  }

  getWinner() {
        var g = this.board;
        var p1 = 'x';
        var p2 = 'o';
        if ((g[0][0] == p1 && g[0][1] == p1 && g[0][2] == p1) ||
            (g[1][0] == p1 && g[1][1] == p1 && g[1][2] == p1) ||
            (g[2][0] == p1 && g[2][1] == p1 && g[2][2] == p1) ||
            (g[0][0] == p1 && g[1][0] == p1 && g[2][0] == p1) ||
            (g[0][1] == p1 && g[1][1] == p1 && g[2][1] == p1) ||
            (g[0][2] == p1 && g[1][2] == p1 && g[2][2] == p1) ||
            (g[0][0] == p1 && g[1][1] == p1 && g[2][2] == p1) ||
            (g[0][2] == p1 && g[1][1] == p1 && g[2][0] == p1)) {
            return p1;
        };
        if ((g[0][0] == p2 && g[0][1] == p2 && g[0][2] == p2) ||
            (g[1][0] == p2 && g[1][1] == p2 && g[1][2] == p2) ||
            (g[2][0] == p2 && g[2][1] == p2 && g[2][2] == p2) ||
            (g[0][0] == p2 && g[1][0] == p2 && g[2][0] == p2) ||
            (g[0][1] == p2 && g[1][1] == p2 && g[2][1] == p2) ||
            (g[0][2] == p2 && g[1][2] == p2 && g[2][2] == p2) ||
            (g[0][0] == p2 && g[1][1] == p2 && g[2][2] == p2) ||
            (g[0][2] == p2 && g[1][1] == p2 && g[2][0] == p2)) {
            return p2;
        };
        return null;
  }

  noMoreTurns() {
    for (let i = 0; i < 3; i++) {
      for (let j = 0; j < 3; j++) {
        if (!this.board[j][i]) {
          return false;
        }
      }
    }
    return true;
  }

  isDraw() {
    if (this.noMoreTurns() && !this.getWinner()) {
      return true;
    } else {
      return false;
    }
  }

  getFieldValue(rowIndex, colIndex) {
    return this.board[rowIndex][colIndex];
  }
}

module.exports = TicTacToe;