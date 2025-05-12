const DemoQAController = require('./demoqaController');

let token = '';
let userId = '';
let username = '';
const password = 'MyStrongPass123!';

beforeAll(async () => {
    username = `user_${Date.now()}`;

    const registerRes = await DemoQAController.registerUser(username, password);
    userId = registerRes.userID;

    const tokenRes = await DemoQAController.generateToken(username, password);
    token = tokenRes.token;
});

describe('DemoQA Bookstore API tests', () => {

    test('1. Should fetch all books', async () => {
        const response = await DemoQAController.getAllBooks();
        expect(response.status).toBe(200);
        expect(response.data.books.length).toBeGreaterThan(0);
    });

    test('2. Should fetch a book by ISBN', async () => {
        const testISBN = '9781449325862';
        const response = await DemoQAController.getBookByISBN(testISBN);
        expect(response.status).toBe(200);
        expect(response.data.title).toBe('Git Pocket Guide');
    });

    test('3. Should create a book for the user', async () => {
        const bookData = {
            userId,
            collectionOfIsbns: [{ isbn: '9781449337711' }]
        };
        const response = await DemoQAController.createBook(bookData, token);
        expect(response.status).toBe(201);
    });

    test('4. Should update the book ISBN for the user', async () => {
        const oldIsbn = '9781449337711';
        const newIsbn = '9781449325862';
        const response = await DemoQAController.updateBook(oldIsbn, userId, newIsbn, token);
        expect(response.status).toBe(200);
    });

    test('5. Should delete a book from the user\'s collection', async () => {
        const isbnToDelete = '9781449325862';
        const responseStatus = await DemoQAController.deleteBook(userId, isbnToDelete, token);
        expect(responseStatus).toBe(204);
    });

});