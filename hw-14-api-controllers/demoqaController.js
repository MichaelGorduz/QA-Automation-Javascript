const axios = require('axios');

const API_URL = 'https://demoqa.com';

class DemoQAController {

    static async registerUser(username, password) {
        const response = await axios.post(`${API_URL}/Account/v1/User`, {
            userName: username,
            password: password
        });
        return response.data;
    }

    static async generateToken(username, password) {
        const response = await axios.post(`${API_URL}/Account/v1/GenerateToken`, {
            userName: username,
            password: password
        });
        return response.data;
    }

    static async getAllBooks() {
        const response = await axios.get(`${API_URL}/BookStore/v1/Books`);
        return { status: response.status, data: response.data };
    }

    static async getBookByISBN(isbn) {
        const response = await axios.get(`${API_URL}/BookStore/v1/Book?ISBN=${isbn}`);
        return { status: response.status, data: response.data };
    }

    static async createBook(bookData, token) {
        const response = await axios.post(`${API_URL}/BookStore/v1/Books`, bookData, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return { status: response.status, data: response.data };
    }

    static async updateBook(isbn, userId, newIsbn, token) {
        const response = await axios.put(`${API_URL}/BookStore/v1/Books/${isbn}`, {
            userId,
            isbn: newIsbn
        }, {
            headers: { Authorization: `Bearer ${token}` }
        });
        return { status: response.status, data: response.data };
    }

    static async deleteBook(userId, isbn, token) {
        const response = await axios.delete(`${API_URL}/BookStore/v1/Book`, {
            headers: { Authorization: `Bearer ${token}` },
            data: { userId, isbn }
        });
        return response.status;
    }
}

module.exports = DemoQAController;