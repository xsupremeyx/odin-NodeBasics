// routes/bookRouter.js
const { Router } = require("express");

const bookRouter = Router();
const { links } = require('./indexRouter')
const { getBookById, getReservedBookById, setReservedBookById } = require('../controllers/bookController')

bookRouter.get("/", (req, res) => res.render("books", { links: links }));

bookRouter.get("/:bookId", getBookById);

bookRouter.get("/:bookId/reserve", getReservedBookById);

bookRouter.post("/:bookId/reserve", setReservedBookById);

module.exports = bookRouter;
