Array.prototype.dropItems = function(fn) {
    const array = this;
    let newArray = [];

    for (let [index, item] of array.entries()) {
        if (fn(item, index, array)) {
            newArray.push(item);
        }
    }

    return newArray
}