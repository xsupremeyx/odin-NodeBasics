import http from 'node:http'
import fs from 'node:fs'
import url from 'node:url'

const server = http.createServer((req,res) => {
    res.setHeader('Content-Type','text/html')
    const { pathname } = new URL(req.url, 'http://localhost:8080')
    let path = './docs/'
    switch(pathname){
        case '/':
            path += 'index.html'
            res.statusCode = 200
            break;
        
        case '/about':
            path += 'about.html'
            res.statusCode = 200
            break;
        
        case '/contact-me':
            path += 'contact-me.html'
            res.statusCode = 200
            break;
        
        case '/contact':
            res.statusCode = 301
            res.setHeader('Location', '/contact-me')
            res.end()
            return;
        
        default:
            path += '404.html'
            res.statusCode = 404
            break;
    }

    fs.readFile(path, (err,data) => {
        if(err){
            console.log(err)
            res.statusCode = 500
            return res.end('Server Error')
        }
        res.end(data)
    })
})

server.listen(8080, 'localhost' ,() => {
    console.log('Server is listening at http://localhost:8080')
})
