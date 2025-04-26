const Book = require('./Book');
const EBook = require('./EBook');

const book1 = new Book("The Shining", "Stephen King", 1977);
const book2 = new Book("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997);
const book3 = new Book("Pippi Longstocking", "Astrid Lindgren", 1945);

// checking setters

book1.title = '';   
book1.author = 123;  
book1.year = 2022; 

book1.printInfo();
book2.printInfo();
book3.printInfo();

// Find oldest
const oldest = Book.findOldestBook([book1, book2, book3]);
console.log("\nНайдавніша книга:");
oldest.printInfo();

console.log("~~~~~~~~~~~~~~~~~~~~~~")
console.log("Ebook printing")

const ebook1 = new EBook("The Shining", "Stephen King", 1977, "(PDF)");
const ebook2 = new EBook("Harry Potter and the Philosopher's Stone", "J.K. Rowling", 1997, "(DJVU)");
const ebook3 = new EBook("Pippi Longstocking", "Astrid Lindgren", 1945, "(EPUB)");
const ebook4 = EBook.fromBook(new Book("Metro 2033", "Dmitry Glukhovsky", 2005), "(MOBI)");

console.log();
ebook1.printInfo();
ebook2.format = '(PDF)';
ebook2.printInfo();
ebook3.printInfo();
ebook4.printInfo();