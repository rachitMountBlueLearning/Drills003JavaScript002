const each = require('../each').each;

const items = [1, 2, 3, 4, 5, 5];
each(items, (item, index) => console.log(`${index}: ${item*item}`));