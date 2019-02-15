Array.prototype.removeDuplicate = function() {
    return [...new Set(this)];
}

const sumPrimes = n => {
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

    return primeNumbers.reduce( (acc, item) => acc + item);
}