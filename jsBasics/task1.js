// let myString = "JavaScript";
// let myNumber = 100000;
// let myAssumption = true;
// let myNull = null;
// let myUndefined;

const primitives = [
    {name: "myString", value: "JavaScript"},
    {name: "myNumber", value: 100000},
    {name: "myAssumption", value: true},
    {name: "myNull", value: null},
    {name: "myUndefined", value: undefined },
]

primitives.forEach(item => {
    console.log(`${item.name} : ${item.value} (typeof: ${typeof item.value})`)
});