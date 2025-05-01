const origin = [1, 2, 3, 4, 5];

const mutateOrigin = origin.map((number, index) => {
  return number * index;
});

mutateOrigin.forEach((value, index) => {
  console.log(
    `index - ${index}, value - ${origin[index]} * ${index} = ${value}`,
  );
});
