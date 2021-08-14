// function find(elements, cb) {
    // Do NOT use .includes, to complete this function.
    // Look through each value in `elements` and pass each element to `cb`.
    // If `cb` returns `true` then return that element.
    // Return `undefined` if no elements pass the truth test.
// }


module.exports = {
    find : (elements, cb, startingIndex = 0, findAll = false) => {
        if(elements instanceof Array){
            const findings = [];
            for(let index = startingIndex; index < elements.length; index++) {
                if(cb(elements[index])){
                    if (findAll) findings.push(elements[index]); 
                    else return elements[index];
                }
            }
            return findings;
        }
        else {
            console.log('instanceError: Parameter passed is not an Array');
        }
    }
}