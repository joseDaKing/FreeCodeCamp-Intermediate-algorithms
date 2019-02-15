const diffArr = (arr1, arr2) => {
    if (arr1.length === 0 || arr2.length === 0) {
        return null;
    }

    else if(arr1.length === 0) {
        return [...arr2];
    }

    else if (arr2.length === 0) {
        return [...arr1];
    } 

    else {
        let bigArr;
        let smallArr;
        let diffArr = [];

        if (arr1.length < arr2.length) {
            bigArr = [...arr1];
            smallArr = [...arr2];
        }

        else {
            bigArr = [...arr2];
            smallArr = [...arr1];
        }

        for (let i = 0; i < smallArr.length; i++) {
            if (!bigArr.includes(smallArr[i])) {
                diffArr.push([...smallArr][i]);
            }
        }

        for (let i = 0; i < bigArr.length; i++) {
            if (!smallArr.includes(bigArr[i])) {
                diffArr.push([...bigArr][i]);
            }
        }


        console.log(diffArr);
    }
};