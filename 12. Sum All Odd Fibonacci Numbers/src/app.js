const isOdd = num => !(num%2 === 0);

const sumFibs = n => {
    let next = 1, 
        current = 0, 
        temp,
        oddSum = 0;

    while (next <= n){
        temp = next;
        
        next += current;
        
        current = temp;
        
        if(isOdd(current)) oddSum += current;
    }

    return oddSum;
};