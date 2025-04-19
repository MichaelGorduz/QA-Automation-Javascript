const numbersList = [1,10,14,2,4,5,43,34];

let copied = [...numbersList];

copied.sort((a, b) => a - b);

console.log(` ${numbersList} and ${copied} `);
