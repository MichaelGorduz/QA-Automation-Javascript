class TodoService {
    static async fetchAndShowTodo(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok (Todo)");
            }
            const todo = await response.json();
            console.log('Fetched TODO:', todo);
        } catch (error) {
            console.error('Error in TodoService:', error);
        }
    }
}

class UserService {
    static async fetchAndShowUser(url) {
        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error("Network response was not ok (User)");
            }
            const user = await response.json();
            console.log('Fetched User:', user);
        } catch (error) {
            console.error('Error in UserService:', error);
        }
    }
}

TodoService.fetchAndShowTodo('https://jsonplaceholder.typicode.com/todos/1');
UserService.fetchAndShowUser('https://jsonplaceholder.typicode.com/users/1');