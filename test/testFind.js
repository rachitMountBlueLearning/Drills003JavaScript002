const find = require('../find').find;

const items = [1, 2, 3, 4, 5, 5];
console.log(find(items, (item) => item%2 == 0, 0));