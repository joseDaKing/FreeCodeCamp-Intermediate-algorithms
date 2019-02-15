const addTogether = (...numbers) => {
    if ( (typeof numbers[0] === "number") && (typeof numbers[1] === "number") ) {
        return numbers[0] + numbers[1];
    }
    
    else if ( (typeof numbers[0] === "number" && !numbers[1])) {
        return (number2) => {
            if (typeof number2 === "number") return numbers[0] + number2;

            else return null;
        }
    }

    else {
        return null;
    }
}