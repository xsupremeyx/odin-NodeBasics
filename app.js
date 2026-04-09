const express = require('express')
const app = express()

const authorRouter = require('./routes/authorRouter')
const bookRouter = require('./routes/bookRouter')
const indexRouter = require('./routes/indexRouter')

app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use('/', indexRouter)

app.use((err,req,res,next) => {
    // Error Middleware, always require all 4 parameters, even if you don't use them all
    console.error(err);
    res.status(err.statusCode || 500).send(err.message);
});

const PORT = 3000

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My First Express App - listening on port ${PORT}`);
});