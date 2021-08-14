// function flatten(elements) {
    // Flattens a nested array (the nesting can be to any depth).
    // Hint: You can solve this using recursion.
    // Example: flatten([1, [2], [3, [[4]]]]); => [1, 2, 3, 4];
// }


exportObject = {
    flatten : (elements, flat = []) => {
        if(elements instanceof Array){
            for(element of elements) {
                if(element instanceof Array){
                    exportObject.flatten(element, flat);
                }
                else {
                    flat.push(element);
                }
            }
            return flat;
        }
        else {
            console.log('instanceError: Parameter passed is not an Array');
        }
    }
}
module.exports = exportObject;