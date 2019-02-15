const orbitalPeriod = (...array) =>  {
    const orbitalPeriodCalc = (avgAlt) => {
        const r = 6367.4447 + avgAlt;
        return Math.round(2*Math.PI*Math.sqrt(Math.pow(r, 3)/398600.4418)/100)*100;
    };

    return array.map(item => {
        const {name, avgAlt} = item;
        return {name: name, orbitalPeriod: orbitalPeriodCalc(avgAlt)}
    })
};

console.log(orbitalPeriod({name : "sputnik", avgAlt : 35873.5553}));