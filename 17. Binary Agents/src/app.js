const binaryToDecimal = string => {
    const binaryArray = string.split("").reverse();
    
    const number = binaryArray.map((digit, index) => (
        parseInt(digit) * Math.pow(2, index)
    )).reduce( (acc, number) => acc + number);

    return number;
};

const binaryAngent = binaryString => {
    const binaryArray = binaryString.split(" ");
    
    return binaryArray.map(item => (
        String.fromCharCode( 
            binaryToDecimal(item) 
        )
    )).join("");
};