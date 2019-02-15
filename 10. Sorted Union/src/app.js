Array.prototype.removeDuplicates = function() {
    return [...new Set(this)];
}

const uniteUnique = (...arrays) => (
    arrays.reduce( (acc, array) => {
        if (!Array.isArray(acc)) {
            let temp = acc;
            acc = [temp];
        }
        
        if (!Array.isArray(array)) acc.push(array);
        
        else acc = acc.concat(array);

        return acc;
    }).removeDuplicates()
)
