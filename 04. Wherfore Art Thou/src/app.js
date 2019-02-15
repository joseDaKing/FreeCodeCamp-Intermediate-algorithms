const whatIsInAName = (collection, source) => {
    if ( !(collection.length || source) ) {
        return null;
    }

    else {    
        return collection.filter( (elem) => {
            let bool = true;

            for (let key in source) {
                bool = elem[key] === source[key] && bool;
            }

            return bool;
        });
    }
};

whatIsInAName([{ first: "Romeo", last: "Montague" }, { first: "Mercutio", last: null }, { first: "Tybalt", last: "Capulet" }], { last: "Capulet" });