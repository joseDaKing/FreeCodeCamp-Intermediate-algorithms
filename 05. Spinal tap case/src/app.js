const spinalCase = str => {
    if (spinalCase.length === 0) {
        return null;
    }

    else {
        const regex = /[_\s]|(?=[A-Z])/g;
        const stringArray = str.split(regex);
        return stringArray.join("-").toLowerCase();
    }
}