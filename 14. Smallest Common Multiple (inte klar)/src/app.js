Array.prototype.removeDuplicate = function() {
    return [...new Set(this)];
};

const primesIn = n => {
    let numbers = [];
    
    for (let i = 2; i <= n; i++) {
        numbers.push(i);
    }

    let notPrimeNumbers = [];

    for (let number of numbers) {
        for (let i = number; i <= n; i += number) {
            if (number < i) {
                notPrimeNumbers.push(i);
            }
        }
    }

    notPrimeNumbers = notPrimeNumbers.removeDuplicate();

    let primeNumbers = [];

    for (let number of numbers) {
        if (!notPrimeNumbers.includes(number)) {
            primeNumbers.push(number)
        }
    }

    return primeNumbers;
};

const smallestCommons = (...range) => {
    const sortedRange = range.sort((a, b) => a - b);

    let numbers = [];

    for (let i = sortedRange[0]; i <= sortedRange[1]; i++) {
        numbers.push(i);
    }
};

smallestCommons(10, 2);