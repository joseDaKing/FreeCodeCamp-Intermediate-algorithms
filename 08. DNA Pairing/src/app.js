const pairElement = string => (
    string.split("").map(item => {
        const map = {T:'A', A:'T', G:'C', C:'G'};
        return item = [item, map[item]];
    })
);

console.log(pairElementV2("GCG"));