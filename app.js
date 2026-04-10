const express = require('express')
const app = express()
const path = require("node:path")

// error class Import
const CustomNotFoundError = require('./errors/CustomNotFoundError')

// EJS imports and static css import
app.set("views", path.join(__dirname,"views"))
app.set("view engine", "ejs")
const assetsPath = path.join(__dirname, "public")
app.use(express.static(assetsPath))

// Routers imports
const authorRouter = require('./routes/authorRouter')
const bookRouter = require('./routes/bookRouter')
const { indexRouter, links }= require('./routes/indexRouter')

app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use('/', indexRouter)
app.use((req, res, next) => {
    next(new CustomNotFoundError("404 Not Found"));
});

app.use((err,req,res,next) => {
    // Error Middleware, always require all 4 parameters, even if you don't use them all
    console.error(err);
    res.status(err.statusCode || 500).render("error", { error: err, links: links });
});

const PORT = 3000

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My First Express App - listening on port ${PORT}`);
});