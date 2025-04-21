const person = {
    firstName: "Jim",
    lastName: "Carrey",
    age: 63
};

person.email = "jimcarrey@yahoo.com";
delete person.age;

console.log(person);