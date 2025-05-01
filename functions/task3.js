function checkOrder(available, ordered) {
  if (ordered === 0) {
    return "Your order is empty";
  }

  if (available >= ordered) {
    return "Your order is accepted";
  } else {
    return "Your order is too large, we don’t have enough goods.";
  }
}

console.log(checkOrder(15, 0));
console.log(checkOrder(15, 10));
console.log(checkOrder(15, 20));
