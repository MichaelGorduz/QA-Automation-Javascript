class Book {
    constructor(title, author, year) {
        this._title = title;
        this._author = author;
        this._year = year;
    }

    get title() {
        return this._title;
    }

    set title(newTitle) {
        if (typeof newTitle === 'string' && newTitle.trim() !== '') {
            this._title = newTitle;
        } else {
            console.error('Invalid title! Title must be a non-empty string.');
        }
    }
    
    get author() {
        return this._author;
    }

    set author(newAuthor) {
        if (typeof newAuthor === 'string' && newAuthor.trim() !== '') {
            this._author = newAuthor;
        } else {
            console.error('Invalid author! Author must be a non-empty string.');
        }
    }

    get year() {
        return this._year;
    }

    set year(newYear) {
        if (Number.isInteger(newYear) && newYear > 0) {
            this._year = newYear;
        } else {
            console.error('Invalid year! Year must be a positive integer.');
        }
    }

    printInfo () {
        console.log(`${this._title}, - ${this._author}, ${this._year}`);
    }

    static findOldestBook(booksArray) {
        if (!Array.isArray(booksArray) || booksArray.length === 0) return null;

        return booksArray.reduce((oldest, current) => {
            return current.year < oldest.year ? current : oldest;
        });
    }
};

module.exports = Book;