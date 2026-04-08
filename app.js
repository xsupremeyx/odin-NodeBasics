const express = require('express')
const app = express()

const authorRouter = require('./routes/authorRouter')
const bookRouter = require('./routes/bookRouter')
const indexRouter = require('./routes/indexRouter')

app.use('/authors', authorRouter)
app.use('/books', bookRouter)
app.use('/', indexRouter)


// const path = './docs/'
// app.get('/', (req, res) => {
//     res.sendFile(path + 'index.html', { root: __dirname})
// })

// app.get('/about', (req, res) => {
//     res.sendFile(path + 'about.html', { root: __dirname})
// })

// app.get('/contact-me', (req, res) => {
//     res.sendFile(path + 'contact-me.html', { root: __dirname})
// })

// app.get('/contact', (req, res) => {
//     res.redirect('/contact-me')
// })

// app.use((req, res) => {
//     res.status(404).sendFile(path + '404.html', { root: __dirname})
// })

const PORT = 3000

app.listen(PORT, (error) => {
    if (error) {
        throw error;
    }
    console.log(`My First Express App - listening on port ${PORT}`);
});