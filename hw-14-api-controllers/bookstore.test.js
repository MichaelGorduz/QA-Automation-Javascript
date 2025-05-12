const BookController = require('./bookController');

describe('Bookstore API tests using controller', () => {

    test('1. Should fetch all books', async () => {
        const response = await BookController.getAllBooks();

        expect(response.status).toBe(200);  
        expect(response.data.books.length).toBeGreaterThan(0);
    });

    test('2. Should fetch a book by ISBN', async () => {
        const testISBN = '9781449325862';
        const response = await BookController.getBookByISBN(testISBN);

        expect(response).toBeDefined();
        expect(response.isbn).toBe(testISBN);
    });

    test('3. Should return valid book details by ISBN', async () => {
        const testISBN = '9781449325862'; 
        const response = await BookController.getBookByISBN(testISBN);

        expect(response).toBeDefined();
        expect(response.isbn).toBe(testISBN);

        expect(response.title).toBe('Git Pocket Guide');
        expect(response.author).toBe('Richard E. Silverman');
        expect(response.publisher).toBe("O'Reilly Media");
    });

    test('4. Each book should have a title', async () => {
        const response = await BookController.getAllBooks();

        expect(Array.isArray(response.data.books)).toBe(true);

        expect(response.data.books.length).toBeGreaterThan(0);

        response.data.books.forEach(book => {
            expect(book.title).toBeDefined();
            expect(typeof book.title).toBe('string');
        });
        
    });

test('8. Should fetch book details by title without modifying data', async () => {
    const testTitle = 'Git Pocket Guide';

    const response = await BookController.getAllBooks();

    const book = response.data.books.find(b => b.title === testTitle);

    expect(book).toBeDefined();
    expect(book.title).toBe(testTitle);
    expect(book.author).toBe('Richard E. Silverman');
    expect(book.publisher).toBe("O'Reilly Media");
    expect(book.isbn).toBe('9781449325862');
});

});