const express = require('express')
const app = express()

const postsRouter = require('./routers/posts');

app.use(express.static('public'));
app.use('/posts', postsRouter);

const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
    
})

app.get('/',(req,res)=>{
    res.send('My blog')
})