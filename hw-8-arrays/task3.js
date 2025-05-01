const numbers = [10, 20, 30, 40, 50];

let sumOfNumbers = numbers.reduce((accumulator, currentValue) => {
  return accumulator + currentValue;
}, 0);

console.log(sumOfNumbers);
