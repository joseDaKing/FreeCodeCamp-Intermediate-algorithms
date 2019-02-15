Array.prototype.flatten = function() {
    let increment = 0;
    let flattenArray = [];

    (function flatten(array){
        increment++ - 1;        

        for (let item of array) {
            let isArray = Array.isArray(item);
            if (isArray) {
                flatten(item);
            }

            else {
                flattenArray.push(item)
            }
        }
        
    })(this);

    return flattenArray;
}