const map = require('../map').map;

const items = [1, 2, 3, 4, 5, 5];
console.log(map(items, (item) => item*item));