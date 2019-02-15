const rmElmOfArr = (arr, ...items) => {
    if (arr.length < 1) {
        return null;
    }

    else {
        let modifiedArr = [...arr].filter((elem) => {  
            let bool = true;
            
            for (let i = 0; i < items.length; i++) {
                if (elem === items[i]) {
                    bool = false;
                }
            }

            return bool;
        });

        return modifiedArr;
    }
}