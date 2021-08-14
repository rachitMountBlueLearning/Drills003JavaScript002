const flatten = require('../flatten').flatten;

const nestedArray = [1, [2], [[3]], [[[4]]]];
console.log(flatten(nestedArray));