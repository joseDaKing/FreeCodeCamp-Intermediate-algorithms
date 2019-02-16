const LCM = numbers => {
    numbers = numbers.sort( (a, b) => a - b)
    
    const [min, max] = numbers;

    let lcm = max;

    for (let i = max; i >= min; i--) {        
        if(lcm % i !== 0){
            lcm += max; 
            i = max;
        }
    }

    return lcm;  
}
