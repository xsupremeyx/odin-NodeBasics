const authors = [
    { id: 1, name: "Bryan"},
    { id: 2, name: "Christian"},
    { id: 3, name: "Jason"},
];

const books = [
    { id: 1, name: "Moby Dick", reserved: false},
    { id: 2, name: "The Great Gatsby", reserved: false},
    { id: 3, name: "To Kill a Mockingbird", reserved: false},
]

async function getAuthorById(authorId){
    return authors.find(author => author.id === authorId);
};

async function getBookById(bookId){
    return books.find(book => book.id === bookId);
};

async function getReservedBookById(bookId){
    const book = books.find(book => book.id === bookId);
    if(book && book.reserved){
        return book;
    }
    return null;
};

async function setReservedBookById(bookId){
    const book = books.find(book => book.id === bookId);
    if(book){
        book.reserved = true;
        return book;
    }
    return null;
};

module.exports = { getAuthorById, getBookById, getReservedBookById, setReservedBookById };