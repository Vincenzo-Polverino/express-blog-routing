const express = require('express')
const app = express()

const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
    
})

app.get('/',(req,res)=>{
    res.send('My blog')
})

const posts = require('./db')


app.get('/posts',(req,res)=>{
    res.status(200).json({
        data: posts,
        counter: posts.length
    })
})