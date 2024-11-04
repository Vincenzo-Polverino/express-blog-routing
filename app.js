const express = require('express')
const app = express()

const PORT = process.env.PORT
const HOST = process.env.HOST

app.listen(PORT, (req, res)=>{
    console.log(`Server is running at ${HOST}:${PORT}`);
    
})