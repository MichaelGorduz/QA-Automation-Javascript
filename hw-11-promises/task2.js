
// 1 TODO

function getTodo(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error("Network response was not ok");
            }
            return response.json(); 
        });
}

getTodo("https://jsonplaceholder.typicode.com/todos/1")
.then(todo =>
    console.log(todo))
    .catch(e => console.error(e));

    // 2 USER

getTodo("https://jsonplaceholder.typicode.com/users/1")
    .then(user =>
        console.log(user))
        .catch(e => console.error(e));

// 2a ARRAY


const promise1 = getTodo("https://jsonplaceholder.typicode.com/users/1");
const promise2 = getTodo("https://jsonplaceholder.typicode.com/todos/1");

const allResults = Promise.all([promise1, promise2]);
const raceResult = Promise.race([promise1, promise2]);

allResults
    .then(results => {
        console.log('Results from Promise.all:', results);
    })
    .catch(error => {
        console.error('Error in Promise.all:', error);
    });

raceResult
    .then(result => {
        console.log('Result from Promise.race:', result);
    })
    .catch(error => {
        console.error('Error in Promise.race:', error);
    });