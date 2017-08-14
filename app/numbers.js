exports = typeof window === 'undefined' ? global : window;

exports.numbersAnswers = {
  valueAtBit: function(num, bit) {
    var binAry = this.convertToBinary(num).split('');
    return Number.parseInt(binAry.reverse()[bit - 1], 10);
  },

  base10: function(str) {
    return parseInt(str, 2);
  },

  convertToBinary: function(num) {
    var binNum = num.toString(2);
    if (binNum.length !== 8) {
      binNum = '0'.concat(binNum);
    }
    return binNum;
  },

  multiply: function(a, b) {
    return a * b;
  }
};
