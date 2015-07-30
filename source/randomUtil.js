var RandomUtil = function () {
    this.randomWithinLimitOf = function (n) {
        return Math.floor(this.generator() * n);
    };

    this.generator = function () {
        return Math.random();
    }

    this.getRandomArbitrary = function(min, max) {
        return this.generator() * (max - min) + min;
    }
}