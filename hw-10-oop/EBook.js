const Book = require('./Book')

class EBook extends Book {
    constructor(title, author, year, format) {

        super (title, author, year);
        this._format = format;
    }

    get format() {
        return this._format;
    }

    set format(newFormat) {
        if (typeof newFormat === 'string' && newFormat.trim() !== '') {
            this._format = newFormat;
        } else {
            console.error('Invalid format! Format must be a non-empty string.');
        }
    }

    printInfo () {
        console.log(`${this.title}, - ${this.author}, ${this.year}, ${this.format}`);
    }

    static fromBook(bookInstance, format) {
        if (!(bookInstance instanceof Book)) {
            throw new Error('Argument must be an instance of Book');
        }

        return new EBook(bookInstance.title, bookInstance.author, bookInstance.year, format);
    }

};

module.exports = EBook;