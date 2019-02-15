const sumAllreduce = arr => {
    if (arr.length < 2) {
        return null;
    }

    else {
        let sum = 0;
        const sortedArr = [...arr].sort((a, b) => a >b );

        for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
            sum += i;
        }

        return sum;
    }
};

const sumAllforLoop = arr => {
    if (arr.length < 2) {
        return null;
    }

    else {
        let sum = 0;
        const sortedArr = [...arr].sort((a, b) => a >b );
        let allNumArr = [];

        for (let i = sortedArr[0]; i <= sortedArr[1]; i++) {
            allNumArr.push(i);
        }

        sum = allNumArr.reduce((acc, num) => acc + num);

        console.log(sum);
    }
};