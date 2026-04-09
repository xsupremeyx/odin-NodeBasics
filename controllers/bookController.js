const db = require('../db')
const CustomNotFoundError = require('../errors/CustomNotFoundError')

async function getBookById(req, res, next){
    const { bookId } = req.params;
    try{
        const book = await db.getBookById(Number(bookId))
        if(!book){
            throw new CustomNotFoundError("Book not found");
        }
        res.send(`Book Name: ${book.name}`);
    }
    catch(error){
        next(error);
    }
}

async function getReservedBookById(req, res, next){
    const { bookId } = req.params;
    try{
        const book = await db.getReservedBookById(Number(bookId))
        if(!book){
            throw new CustomNotFoundError("Reserved Book not found");
        }
        res.send(`Reserved Book: ${book.name}`);
    }
    catch(error){
        next(error);
    }
}

async function setReservedBookById(req, res, next){
    const { bookId } = req.params;
    try{
        const book = await db.setReservedBookById(Number(bookId))
        if(!book){
            throw new CustomNotFoundError("Book not found");
        }
        res.send(`Book Reserved: ${book.name}`);
    }
    catch(error){
        next(error);
    }
}

module.exports = { getBookById, getReservedBookById, setReservedBookById };