const fearNotLetter = string => {
    let stringArray = string.toLowerCase().split("");
    let missingLetters = [];
    
    for (let [index, currentLetter] of stringArray.entries()) {
        let nextLetter = stringArray[index + 1];
        
        if (nextLetter) {
            let currentCharCode = currentLetter.charCodeAt(0);
            let nextCharCode = nextLetter.charCodeAt(0);
            
            if ( 1 < (nextCharCode - currentCharCode)) {
                
                let tempString = "";

                for (let i = currentCharCode + 1; i < nextCharCode; i++) {     
                    tempString += String.fromCharCode(i);
                }

                missingLetters.push(tempString);
            }
        }
    }
    
    if (missingLetters.length === 1) {
        return missingLetters[0]
    }

    else if (missingLetters.length === 0) return null; 

    else return missingLetters;
};