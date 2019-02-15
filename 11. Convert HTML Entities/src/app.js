const convertHtml = string => {
    const entities = {
        "&": ["&​amp;", /&/g],
        "<": ["&lt;", /</g],
        ">": ["&gt;", />/g],
        '"': ["&quot;", /"/g],
        "'" :["&​apos;", /'/g]
    }

    for (let char in entities) {
        let [entitie, regex] = entities[char];
        string = string.replace(regex, entitie);
    }

    return string;
}

convertHtml("<  < x > >")