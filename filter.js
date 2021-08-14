// function filter(elements, cb) {
    // Do NOT use .filter, to complete this function.
    // Similar to `find` but you will return an array of all elements that passed the truth test
    // Return an empty array if no elements pass the truth test
// }


module.exports = {
    filter : (elements, cb, startingIndex = 0) => {
        if(elements instanceof Array){
            const filtrates = [];
            for(let index = startingIndex; index < elements.length; index++) {
                if(cb(elements[index])){
                    filtrates.push(elements[index]);
                }
            }
            return filtrates;
        }
        else {
            console.log('instanceError: Parameter passed is not an Array');
        }
    }
}