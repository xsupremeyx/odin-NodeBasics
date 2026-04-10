// routes/authorRouter.js
const { Router } = require("express");

const { getAuthorById } =require('../controllers/authorController')
const { links } = require('./indexRouter')

const authorRouter = Router();

authorRouter.get("/", (req, res) => res.render("authors", { links: links }));
authorRouter.get("/:authorId", getAuthorById)

module.exports = authorRouter;
