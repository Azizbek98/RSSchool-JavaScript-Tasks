class TicTacToe {
    constructor() {

        this.firstSymbol = "x";
        this.matrix = [];

        for (let i = 0; i < 3; i++) {
            this.matrix[i] = [];
            for (let j = 0; j < 3; j++) {
                this.matrix[i][j] = null;
            }
        }
    }

    getCurrentPlayerSymbol() {
        return this.firstSymbol;
    }

    changePlayerSymbol() {
        return this.firstSymbol === "x" ? "o" : "x";
    }

    nextTurn(rowIndex, columnIndex) {
        if (this.matrix[rowIndex][columnIndex] === null) {
            this.matrix[rowIndex][columnIndex] = this.firstSymbol;
            this.firstSymbol = this.changePlayerSymbol();
        }
    }

    win() {


        if (this.matrix[0][0] === this.matrix[1][1] &&
            this.matrix[0][0] === this.matrix[2][2]) {
            return this.matrix[0][0]
        }

        if (this.matrix[0][2] === this.matrix[1][1] &&
            this.matrix[0][2] === this.matrix[2][0]) {
            return this.matrix[0][2]
        }

        for (let i = 0; i < 3; i++) {
            if (this.matrix[i][0] === this.matrix[i][1] &&
                this.matrix[i][1] === this.matrix[i][2]) {
                return this.matrix[i][0]
            }
        }

        for (let i = 0; i < 3; i++) {
            if (this.matrix[0][i] === this.matrix[1][i] &&
                this.matrix[0][i] === this.matrix[2][i]) {
                return this.matrix[0][i]
            }
        }

        return null;

    }

    isFinished() {
        return this.isDraw() || !!this.getWinner();
    }

    getWinner() {
        this.winner = this.win();
        return this.winner;
    }

    noMoreTurns() {
        return this.matrix.flat().every((item) => Boolean(item));
    }

    isDraw() {
        return this.noMoreTurns() && !this.getWinner();
    }

    getFieldValue(rowIndex, colIndex) {
        return this.matrix[rowIndex][colIndex]
    }
}

module.exports = TicTacToe;
