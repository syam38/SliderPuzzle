import { Component } from "@angular/core";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  styleUrls: ["./app.component.css"],
})
export class AppComponent {
  matrix: number[][] = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
  ];
  winmatrix: number[][] = [
    [1, 2, 3, 4],
    [5, 6, 7, 8],
    [9, 10, 11, 12],
    [13, 14, 15, 0],
  ];
  constructor() {
  }

  checkForCompletion() {
    let didNotWin;
    for (let i = 0; i < this.matrix.length; i++) {
      for (let j = 0; j < this.matrix[0].length; j++) {
        if (this.winmatrix[i][j] != this.matrix[i][j]) {
          didNotWin = true;
          break;
        }
      }
    }
    if(!didNotWin) {
      alert('You Won');
    }
  }

  // move the tile to the empty space
  moveTile(i, j) {
    this.swapTile(i, j);
    this.checkForCompletion();
  }

  // check the four sides of the tile to which it can be swapped
  swapTile(i: number, j: number) {
    if (i + 1 < this.matrix.length && this.matrix[i + 1][j] == 0) {
      this.matrix[i + 1][j] = this.matrix[i][j];
      this.matrix[i][j] = 0;
    } else if (j + 1 < this.matrix[0].length && this.matrix[i][j + 1] == 0) {
      this.matrix[i][j + 1] = this.matrix[i][j];
      this.matrix[i][j] = 0;
    } else if (i - 1 >= 0 && this.matrix[i - 1][j] == 0) {
      this.matrix[i - 1][j] = this.matrix[i][j];
      this.matrix[i][j] = 0;
    } else if (j - 1 >= 0 && this.matrix[i][j - 1] == 0) {
      this.matrix[i][j - 1] = this.matrix[i][j];
      this.matrix[i][j] = 0;
    }
  }
  
  shuffleMatrix() {
    let k, j, tempk, tempj;
    for (let i = 0; i < this.matrix.length; i++) {
      k = this.matrix[i].length;
      while (k--) {
        j = Math.floor(Math.random() * (this.matrix.length - 1));
        tempk = this.matrix[i][k];
        tempj = this.matrix[i][j];
        this.matrix[i][k] = tempj;
        this.matrix[i][j] = tempk;
      }
    }
  }
}
