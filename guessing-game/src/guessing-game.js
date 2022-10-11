class GuessingGame {
    constructor() { }

    setRange(min, max) {
        this.min = min;
        this.max = max;
    }

    guess() {
        this.try = Math.ceil((this.min + this.max) / 2);
        return this.try;
    }

    lower() {
        this.max = this.try;
    }

    greater() {
        this.min = this.try;
    }
}

module.exports = GuessingGame;
