let x = 'x';
let o = 'o';

class TicTacToe {

    constructor(currentPlayerSymbol) {
        this.currentPlayerSymbol = x;
        this.arr = [
            [null, null, null],
            [null, null, null],
            [null, null, null]
        ];
    }

    getCurrentPlayerSymbol() {
        return this.currentPlayerSymbol;
    }

    nextTurn(rowIndex, columnIndex) {

        if (this.currentPlayerSymbol === x && this.arr[rowIndex][columnIndex] === null) {
            this.arr[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = o;
        } else if (this.currentPlayerSymbol === o && this.arr[rowIndex][columnIndex] === null) {
            this.arr[rowIndex][columnIndex] = this.currentPlayerSymbol;
            this.currentPlayerSymbol = x;
        }
    }

    isFinished() {

        if(this.getWinner() !== null){
            return true;
        } else if(this.getWinner() === null  && this.noMoreTurns()) {
            return true;
        } else return false;
    }

    getWinner() {

        if (this.getFieldValue(0, 0)!==null && this.getFieldValue(1, 1)!==null && this.getFieldValue(2, 2)!==null) {
            if ((this.getFieldValue(0, 0) === this.getFieldValue(1, 1)) && (this.getFieldValue(1, 1) === this.getFieldValue(2, 2))) {
                return this.getFieldValue(0, 0);
            } //else return null;

        }  if (this.getFieldValue(2, 0)!==null && this.getFieldValue(1, 1)!==null && this.getFieldValue(0, 2)!==null) {
            if ((this.getFieldValue(2, 0) === this.getFieldValue(1, 1)) && (this.getFieldValue(1, 1) === this.getFieldValue(0, 2))) {
                return this.getFieldValue(2, 0);
            } //else return null;

        }  if (this.getFieldValue(0, 0)!==null && this.getFieldValue(1, 0)!==null && this.getFieldValue(2, 0)!==null) {
            if ((this.getFieldValue(0, 0) === this.getFieldValue(1, 0)) && (this.getFieldValue(1, 0) === this.getFieldValue(2, 0))) {
                return this.getFieldValue(0, 0);
            } //else return null;

        }  if (this.getFieldValue(0, 1)!==null && this.getFieldValue(1, 1)!==null && this.getFieldValue(2, 1)!==null) {
            if ((this.getFieldValue(0, 1) === this.getFieldValue(1, 1)) && (this.getFieldValue(1, 1) === this.getFieldValue(2, 1))) {
                return this.getFieldValue(0, 1);
            } //else return null;

        }  if (this.getFieldValue(0, 2)!== null && this.getFieldValue(1, 2)!== null && this.getFieldValue(2, 2)!== null) {
            if ((this.getFieldValue(0, 2) === this.getFieldValue(1, 2)) && (this.getFieldValue(1, 2) === this.getFieldValue(2, 2))) {

                return this.getFieldValue(0, 2);  //

            } //else return null;

        }  if (this.getFieldValue(0, 0)!==null && this.getFieldValue(0, 1)!==null && this.getFieldValue(0, 2)!==null) {
            if ((this.getFieldValue(0, 0) === this.getFieldValue(0, 1)) && (this.getFieldValue(0, 1) === this.getFieldValue(0, 2))) {
                return this.getFieldValue(0, 0);
            } //else return null;

        }  if (this.getFieldValue(1, 0)!==null && this.getFieldValue(1, 1)!==null && this.getFieldValue(1, 2)!==null) {
            if ((this.getFieldValue(1, 0) === this.getFieldValue(1, 1)) && (this.getFieldValue(1, 1) === this.getFieldValue(1, 2))) {
                return this.getFieldValue(1, 0);
            } //else return null;

        }  if (this.getFieldValue(2, 0)!==null && this.getFieldValue(2, 1)!==null && this.getFieldValue(2, 2)!==null) {
            if ((this.getFieldValue(2, 0) === this.getFieldValue(2, 1)) && (this.getFieldValue(2, 1) === this.getFieldValue(2, 2))) {
                return this.getFieldValue(2, 0);
            } //else return null;
        }
        return null;
    }


    noMoreTurns() {

        return JSON.stringify(this.arr).indexOf(null) === -1;

    }

    isDraw() {

        if(this.getWinner() === null  && this.noMoreTurns()) {
            return true;
        }  else return false;
    }

    getFieldValue(rowIndex, colIndex) {

        return this.arr[rowIndex][colIndex];
    }
}

module.exports = TicTacToe;
