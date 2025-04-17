const randomNumber = Math.floor(Math.random()*10) +1;
console.log(`Multiplication table for: ${randomNumber}`);

for (let i = 1; i <= 10; i++) {
    console.log(`${randomNumber} * ${i} = ${randomNumber * i}`);
}

console.log("~~~~~~~~~~~~~~~~~~~~~~");
console.log("Now same using 'While cycle': ")

let j = 1;
while (j <= 10) {
    console.log(`${randomNumber} * ${j} = ${randomNumber * j}`);
    j++;
}
