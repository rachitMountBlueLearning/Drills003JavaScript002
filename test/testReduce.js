const reduce = require('../reduce').reduce;

const items = [1, 2, 3, 4, 5, 5];
console.log(reduce(items, (startingValue, currentValue) => startingValue + currentValue));