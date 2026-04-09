// routes/bookRouter.js
const { Router } = require("express");

const bookRouter = Router();

const { getBookById, getReservedBookById, setReservedBookById } = require('../controllers/bookController')

bookRouter.get("/", (req, res) => res.send("All books"));

bookRouter.get("/:bookId", getBookById);

bookRouter.get("/:bookId/reserve", getReservedBookById);

bookRouter.post("/:bookId/reserve", setReservedBookById);

module.exports = bookRouter;
