function handleNum(number, evenCallback, oddCallback) {
  if (number % 2 === 0) {
    evenCallback(number);
  } else {
    oddCallback(number);
  }
}

function handleEven(even) {
  console.log(`${even} is even`);
}

function handleOdd(odd) {
  console.log(`${odd} is odd`);
}

handleNum(4, handleEven, handleOdd);
