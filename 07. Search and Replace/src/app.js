const myReplace = ({text, after, before, replaceAllWords = false}) => {
    const regex = /[\s.]+/;
    const stringArray = text.split(regex);
    
    for (let word of stringArray.entries()) {
        let string = word[1];
        let index = word[0];

        if (string.toLowerCase() === after.toLowerCase()) {
        
            stringArray.splice(index, 1, before);
            
            if (!replaceAllWords) {
                break;
            }
        }
    }

    const replacedString = stringArray.join(" ");
    console.log(replacedString);
    
    console.log("\n")

    return replacedString;
}