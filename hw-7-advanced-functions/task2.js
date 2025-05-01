function numRecursion(num) {
  if (num < 0) return;

  console.log(num);
  numRecursion(num - 1);
}

numRecursion(5);
