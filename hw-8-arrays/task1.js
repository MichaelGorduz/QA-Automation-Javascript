const numbers = [2, -5, 0, 7, -3, 0, 10, -8];

let positiveCount = 0;
let negativeCount = 0;
let zeroCount = 0;

numbers.forEach((number) => {

    if (number === 0) {
        zeroCount++;
    }
    else if (number > 0) {
        positiveCount++
    } else {
        negativeCount++;
    }

});

console.log(`
     Кількість позитивних чисел: ${positiveCount},
     Кількість негативних чисел: ${negativeCount},
     Кількість нульових чисел: ${zeroCount}`);