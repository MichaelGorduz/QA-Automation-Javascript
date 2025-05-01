function divide(numerator, denominator) {
  if (denominator === 0) {
    throw new Error("Division by zero");
  }
  if (isNaN(numerator) || isNaN(denominator)) {
    throw new Error("numerator or denominator is not a number");
  }

  return numerator / denominator;
}

try {
  console.log(divide(4, 3));
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(5, 0));
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Робота завершена");
}

try {
  console.log(divide(7, g));
} catch (e) {
  console.log(e.message);
} finally {
  console.log("Робота завершена");
}
