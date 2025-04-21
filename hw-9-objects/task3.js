const car = {
    brand: "Honda",
    model: "Accord",
    year: 2020
};

const car2 = {
    brand: "BMW",
    model: "X6",
    year: 2022
};

const car3 = {
    car1: {...car},
    car2: {...car2}
}

console.log(car3);