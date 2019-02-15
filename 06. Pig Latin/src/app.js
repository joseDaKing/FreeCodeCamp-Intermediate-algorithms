const pigLatin = string => {
    if (string.length <= 1) {
        return null;
    }

    else {
        let isFirstLetterVowel = /^[aouie]/i.test(string);
        let pigLatin;

        if (isFirstLetterVowel) {
            pigLatin = string + "way";
        }

        else {
            let stringArray = string.split("");
            let firstLetter = stringArray.shift();

            pigLatin = stringArray.join("") + firstLetter + "ay";
        }
    
        return pigLatin;
    }
}