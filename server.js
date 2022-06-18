// const express = require('express')
// const connectDB = require('./db')
// require(dotenv).config();
// const {PORT} = process.env;

// connectDB();

// const app = express();
// app.use(express.json({extended:false}))

// app.get('/', (req, res)=> res.json({message: 'Welcome to my Home page'}))

// const port =process.env.PORT || PORT
// app.listen(port, ()=> console.log(`app is running on ${port}`))
// import * as fs from 'node:fs'

// var fs = requie("fs");
// const res = require('express/lib/response')
var fs = require('fs')
const http = require('http')

// const server= http.createServer(function(req, res){
//     res.writeHead(200, {'Content-Type':'text/plain'});
//     res.end('welcome')
// })
// server.listen(4000, '127.0.0.1')

const server = http.createServer((req,res) => {
    const pathName = req.url
    
    if(pathName === '/'){
        fs.readFile('index.html', (err, data)=>{
            if(err) throw err;
            res.writeHead(200, {
                "Content-Type":"text/html"
            });
            res.write(data)
            res.end();
        })
    }else if(pathName === '/about'){
        fs.readFile('about.html', (err, data)=>{
            if(err) throw err;
            res.writeHead(200, {
                "Content-Type":"text/html"
            });
            res.write(data)
            res.end();
        })
    }else if(pathName === '/contact'){
        fs.readFile('contact.html', (err, data)=>{
            if(err) throw err;
            res.writeHead(200, {
                "Content-Type":"text/html"
            });
            res.write(data)
            res.end();
        })
    }else{
        res.end('The page you are requesting is not found!!!')
    }
    
})

server.listen(8080,'127.0.0.1',() => {
    console.log('Server is listening to port 8080')
})