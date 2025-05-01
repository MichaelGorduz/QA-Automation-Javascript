function showText(sometext, miliseconds) {
  setTimeout(() => {
    console.log(sometext);
  }, miliseconds);
}

showText("Hello here!", 3000);
