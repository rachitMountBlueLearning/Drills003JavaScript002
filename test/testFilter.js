const filter = require('../filter').filter;

const items = [1, 2, 3, 4, 5, 5];
console.log(filter(items, (item) => item > 2));