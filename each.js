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