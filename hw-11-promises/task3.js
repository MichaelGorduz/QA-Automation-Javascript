async function getTodo(url) {
    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error("Network response was not ok");
        }
        return await response.json();
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
};


async function fetchData() {
    const promise1 = getTodo("https://jsonplaceholder.typicode.com/todos/1");
    const promise2 = getTodo("https://jsonplaceholder.typicode.com/users/2");

// Promise ALL 

try {
    const allResults = await Promise.all([promise1, promise2]);
    console.log('Results from Promise.all:', allResults);
} catch (error) {
    console.error('Error in Promise.all:', error);
}

// Promise RACE 

try {
    const raceResult = await Promise.race([promise1, promise2]);
    console.log('Result from Promise.race:', raceResult);
} catch (error) {
    console.error('Error in Promise.race:', error);
}
};

fetchData();