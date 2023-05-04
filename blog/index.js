const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const blogData = require('./blog.json')
const port = 5000

app.get('/', (req, res)=>{
    res.send(blogData)
})

app.listen(port, ()=>{
    console.log('port number is',port)
})