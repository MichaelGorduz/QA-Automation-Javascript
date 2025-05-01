const myArray = [
  {
    name: "Bill",
    email: "bill45@yahoo.com",
    age: 45,
  },

  {
    name: "Meg",
    email: "meg23@gmail.com",
    age: 28,
  },
];

for (const user of myArray) {
  console.log(`Name: ${user.name}, Email: ${user.email}, Age: ${user.age}`);
}

// деструктуризація

for (const { name, email, age } of myArray) {
  console.log(`Name: ${name}, Email: ${email}, Age: ${age}`);
}
