// function map(elements, cb) {
    // Do NOT use .map, to complete this function.
    // How map works: Map calls a provided callback function once for each element in an array, in order, and functionructs a new array from the res .
    // Produces a new array of values by mapping each value in list through a transformation function (iteratee).
    // Return the new array.
// }


module.exports = {
    map : (elements, cb, startingIndex = 0) => {
        if(elements instanceof Array){
            const mapped = [];
            for(let index = startingIndex; index < elements.length; index++) {
                mapped.push(cb(elements[index]));
            }
            return mapped;
        }
        else {
            console.log('instanceError: Parameter passed is not an Array');
        }
    }
}