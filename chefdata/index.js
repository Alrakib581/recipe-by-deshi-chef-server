const express = require('express')
const app = express()
const cors = require('cors')
app.use(cors())
const port = process.env.PORT || 5000;
const chefdata = require('./chefdata.json')

app.get('/chefdata', (req, res)=>{
    res.send(chefdata)
})
app.get('/chefdata/:id', (req,res)=>{
    const id = req.params.id;
    const chefDataId = chefdata.find( n => n.id === id)
    res.send(chefDataId);
})
app.listen(port, ()=>{
    console.log('port number is',port)
})