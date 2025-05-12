const axios = require('axios');

const API_URL = 'https://bookstore.toolsqa.com/BookStore/v1';

class BookController {

    static async getAllBooks() {
        const response = await axios.get(`${API_URL}/Books`);
        return {
             status: response.status, 
             data: response.data  
        }
    }
  
    static async getBookByISBN(isbn) {
        const response = await axios.get(`${API_URL}/Book?ISBN=${isbn}`);
        return response.data;
    }
}

module.exports = BookController;