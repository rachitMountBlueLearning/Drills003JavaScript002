// function each(elements, cb) {
    // Do NOT use forEach to complete this function.
    // Iterates over a list of elements, yielding each in turn to the `cb` function.
    // This only needs to work with arrays.
    // You should also pass the index into `cb` as the second argument
    // based off http://underscorejs.org/#each
// }


module.exports = {
    each : (elements, cb) => {
        if(elements instanceof Array){
            for(let index = 0; index < elements.length; index++) {
                cb(elements[index], index);
            }
        }
        else {
            console.log('instanceError: Parameter passed is not an Array');
        }
    }
}